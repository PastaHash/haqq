package app

import (
	"errors"
	"github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	authsigning "github.com/cosmos/cosmos-sdk/x/auth/signing"
	govtypes "github.com/cosmos/cosmos-sdk/x/gov/types"
	"github.com/cosmos/cosmos-sdk/x/staking/keeper"
	stakingtypes "github.com/cosmos/cosmos-sdk/x/staking/types"
	"strings"
)

var ErrDelegationComingLater = sdkerrors.Register("haqq-ante", 6000, "delegation coming later")

func NewHaqqAnteHandlerDecorator(sk keeper.Keeper, h types.AnteHandler) types.AnteHandler {
	return func(ctx types.Context, tx types.Tx, simulate bool) (newCtx types.Context, err error) {
		msgs := tx.GetMsgs()

		for i := 0; i < len(msgs); i++ {
			isValid := false

			switch msgs[i].(type) {
			case *stakingtypes.MsgDelegate, *stakingtypes.MsgCreateValidator:
				if ctx.BlockHeight() == 0 {
					continue
				}

				sigTx, ok := tx.(authsigning.SigVerifiableTx)
				if !ok {
					return ctx, sdkerrors.Wrap(sdkerrors.ErrTxDecode, "invalid tx type")
				}

				signers := sigTx.GetSigners()
				validators := sk.GetAllValidators(ctx)

				for j := 0; j < len(signers); j++ {
					for k := 0; k < len(validators); j++ {
						if signers[i].Equals(validators[j].GetOperator()) {
							isValid = true
							break
						}
					}
				}

				if !isValid {
					return ctx, ErrDelegationComingLater
				}

			case *govtypes.MsgSubmitProposal:
				disabledProposals := []string{"CommunityPoolSpendProposal"}
				govMsg := msgs[i].(*govtypes.MsgSubmitProposal)

				isValid = true

				for _, ap := range disabledProposals {
					if strings.HasSuffix(govMsg.Content.TypeUrl, ap) {
						isValid = false
					}
				}
			}

			if !isValid {
				return ctx, errors.New("tx cannot be executed")
			}
		}

		//return ctx, nil
		return h(ctx, tx, simulate)
	}
}
