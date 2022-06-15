(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{733:function(e,a,t){"use strict";t.r(a);var d=t(1),s=Object(d.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"messages"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#messages"}},[e._v("#")]),e._v(" Messages")]),e._v(" "),t("h2",{attrs:{id:"msgsetwithdrawaddress"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#msgsetwithdrawaddress"}},[e._v("#")]),e._v(" MsgSetWithdrawAddress")]),e._v(" "),t("p",[e._v("By default, the withdraw address is the delegator address. To change its withdraw address, a delegator must send a "),t("code",[e._v("MsgSetWithdrawAddress")]),e._v(" message.\nChanging the withdraw address is possible only if the parameter "),t("code",[e._v("WithdrawAddrEnabled")]),e._v(" is set to "),t("code",[e._v("true")]),e._v(".")]),e._v(" "),t("p",[e._v("The withdraw address cannot be any of the module accounts. These accounts are blocked from being withdraw addresses by being added to the distribution keeper's "),t("code",[e._v("blockedAddrs")]),e._v(" array at initialization.")]),e._v(" "),t("p",[e._v("Response:")]),e._v(" "),t("p",[t("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gTXNnU2V0V2l0aGRyYXdBZGRyZXNzIHNldHMgdGhlIHdpdGhkcmF3IGFkZHJlc3MgZm9yCi8vIGEgZGVsZWdhdG9yIChvciB2YWxpZGF0b3Igc2VsZi1kZWxlZ2F0aW9uKS4KbWVzc2FnZSBNc2dTZXRXaXRoZHJhd0FkZHJlc3MgewogIG9wdGlvbiAoY29zbW9zLm1zZy52MS5zaWduZXIpID0gJnF1b3Q7ZGVsZWdhdG9yX2FkZHJlc3MmcXVvdDs7CgogIG9wdGlvbiAoZ29nb3Byb3RvLmVxdWFsKSAgICAgICAgICAgPSBmYWxzZTsKICBvcHRpb24gKGdvZ29wcm90by5nb3Byb3RvX2dldHRlcnMpID0gZmFsc2U7CgogIHN0cmluZyBkZWxlZ2F0b3JfYWRkcmVzcyA9IDEgWyhjb3Ntb3NfcHJvdG8uc2NhbGFyKSA9ICZxdW90O2Nvc21vcy5BZGRyZXNzU3RyaW5nJnF1b3Q7XTsKICBzdHJpbmcgd2l0aGRyYXdfYWRkcmVzcyAgPSAyIFsoY29zbW9zX3Byb3RvLnNjYWxhcikgPSAmcXVvdDtjb3Ntb3MuQWRkcmVzc1N0cmluZyZxdW90O107Cn0="}})],1),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoayBLZWVwZXIpIFNldFdpdGhkcmF3QWRkcihjdHggc2RrLkNvbnRleHQsIGRlbGVnYXRvckFkZHIgc2RrLkFjY0FkZHJlc3MsIHdpdGhkcmF3QWRkciBzZGsuQWNjQWRkcmVzcykgZXJyb3IKCWlmIGsuYmxvY2tlZEFkZHJzW3dpdGhkcmF3QWRkci5TdHJpbmcoKV0gewoJCWZhaWwgd2l0aCAmcXVvdDtge3dpdGhkcmF3QWRkcn1gIGlzIG5vdCBhbGxvd2VkIHRvIHJlY2VpdmUgZXh0ZXJuYWwgZnVuZHMmcXVvdDsKCX0KCglpZiAhay5HZXRXaXRoZHJhd0FkZHJFbmFibGVkKGN0eCkgewoJCWZhaWwgd2l0aCBgRXJyU2V0V2l0aGRyYXdBZGRyRGlzYWJsZWRgCgl9CgoJay5TZXREZWxlZ2F0b3JXaXRoZHJhd0FkZHIoY3R4LCBkZWxlZ2F0b3JBZGRyLCB3aXRoZHJhd0FkZHIpCg=="}}),e._v(" "),t("h2",{attrs:{id:"msgwithdrawdelegatorreward"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#msgwithdrawdelegatorreward"}},[e._v("#")]),e._v(" MsgWithdrawDelegatorReward")]),e._v(" "),t("p",[e._v("A delegator can withdraw its rewards.\nInternally in the distribution module, this transaction simultaneously removes the previous delegation with associated rewards, the same as if the delegator simply started a new delegation of the same value.\nThe rewards are sent immediately from the distribution "),t("code",[e._v("ModuleAccount")]),e._v(" to the withdraw address.\nAny remainder (truncated decimals) are sent to the community pool.\nThe starting height of the delegation is set to the current validator period, and the reference count for the previous period is decremented.\nThe amount withdrawn is deducted from the "),t("code",[e._v("ValidatorOutstandingRewards")]),e._v(" variable for the validator.")]),e._v(" "),t("p",[e._v("In the F1 distribution, the total rewards are calculated per validator period, and a delegator receives a piece of those rewards in proportion to their stake in the validator.\nIn basic F1, the total rewards that all the delegators are entitled to between to periods is calculated the following way.\nLet "),t("code",[e._v("R(X)")]),e._v(" be the total accumulated rewards up to period "),t("code",[e._v("X")]),e._v(" divided by the tokens staked at that time. The delegator allocation is "),t("code",[e._v("R(X) * delegator_stake")]),e._v(".\nThen the rewards for all the delegators for staking between periods "),t("code",[e._v("A")]),e._v(" and "),t("code",[e._v("B")]),e._v(" are "),t("code",[e._v("(R(B) - R(A)) * total stake")]),e._v(".\nHowever, these calculated rewards don't account for slashing.")]),e._v(" "),t("p",[e._v("Taking the slashes into account requires iteration.\nLet "),t("code",[e._v("F(X)")]),e._v(" be the fraction a validator is to be slashed for a slashing event that happened at period "),t("code",[e._v("X")]),e._v(".\nIf the validator was slashed at periods "),t("code",[e._v("P1, ..., PN")]),e._v(", where "),t("code",[e._v("A < P1")]),e._v(", "),t("code",[e._v("PN < B")]),e._v(", the distribution module calculates the individual delegator's rewards, "),t("code",[e._v("T(A, B)")]),e._v(", as follows:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"c3Rha2UgOj0gaW5pdGlhbCBzdGFrZQpyZXdhcmRzIDo9IDAKcHJldmlvdXMgOj0gQQpmb3IgUCBpbiBQMSwgLi4uLCBQTmA6CiAgICByZXdhcmRzID0gKFIoUCkgLSBwcmV2aW91cykgKiBzdGFrZQogICAgc3Rha2UgPSBzdGFrZSAqIEYoUCkKICAgIHByZXZpb3VzID0gUApyZXdhcmRzID0gcmV3YXJkcyArIChSKEIpIC0gUihQTikpICogc3Rha2UK"}}),e._v(" "),t("p",[e._v("The historical rewards are calculated retroactively by playing back all the slashes and then attenuating the delegator's stake at each step.\nThe final calculated stake is equivalent to the actual staked coins in the delegation with a margin of error due to rounding errors.")]),e._v(" "),t("p",[e._v("Response:")]),e._v(" "),t("p",[t("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gTXNnV2l0aGRyYXdEZWxlZ2F0b3JSZXdhcmQgcmVwcmVzZW50cyBkZWxlZ2F0aW9uIHdpdGhkcmF3YWwgdG8gYSBkZWxlZ2F0b3IKLy8gZnJvbSBhIHNpbmdsZSB2YWxpZGF0b3IuCm1lc3NhZ2UgTXNnV2l0aGRyYXdEZWxlZ2F0b3JSZXdhcmQgewogIG9wdGlvbiAoY29zbW9zLm1zZy52MS5zaWduZXIpID0gJnF1b3Q7ZGVsZWdhdG9yX2FkZHJlc3MmcXVvdDs7CgogIG9wdGlvbiAoZ29nb3Byb3RvLmVxdWFsKSAgICAgICAgICAgPSBmYWxzZTsKICBvcHRpb24gKGdvZ29wcm90by5nb3Byb3RvX2dldHRlcnMpID0gZmFsc2U7CgogIHN0cmluZyBkZWxlZ2F0b3JfYWRkcmVzcyA9IDEgWyhjb3Ntb3NfcHJvdG8uc2NhbGFyKSA9ICZxdW90O2Nvc21vcy5BZGRyZXNzU3RyaW5nJnF1b3Q7XTsKICBzdHJpbmcgdmFsaWRhdG9yX2FkZHJlc3MgPSAyIFsoY29zbW9zX3Byb3RvLnNjYWxhcikgPSAmcXVvdDtjb3Ntb3MuQWRkcmVzc1N0cmluZyZxdW90O107Cn0="}})],1),e._v(" "),t("h2",{attrs:{id:"withdrawvalidatorcommission"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#withdrawvalidatorcommission"}},[e._v("#")]),e._v(" WithdrawValidatorCommission")]),e._v(" "),t("p",[e._v("The validator can send the WithdrawValidatorCommission message to withdraw their accumulated commission.\nThe commission is calculated in every block during "),t("code",[e._v("BeginBlock")]),e._v(", so no iteration is required to withdraw.\nThe amount withdrawn is deducted from the "),t("code",[e._v("ValidatorOutstandingRewards")]),e._v(" variable for the validator.\nOnly integer amounts can be sent. If the accumulated awards have decimals, the amount is truncated before the withdrawal is sent, and the remainder is left to be withdrawn later.")]),e._v(" "),t("h2",{attrs:{id:"fundcommunitypool"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fundcommunitypool"}},[e._v("#")]),e._v(" FundCommunityPool")]),e._v(" "),t("p",[e._v("This message sends coins directly from the sender to the community pool.")]),e._v(" "),t("p",[e._v("The transaction fails if the amount cannot be transferred from the sender to the distribution module account.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoayBLZWVwZXIpIEZ1bmRDb21tdW5pdHlQb29sKGN0eCBzZGsuQ29udGV4dCwgYW1vdW50IHNkay5Db2lucywgc2VuZGVyIHNkay5BY2NBZGRyZXNzKSBlcnJvciB7CiAgICBpZiBlcnIgOj0gay5iYW5rS2VlcGVyLlNlbmRDb2luc0Zyb21BY2NvdW50VG9Nb2R1bGUoY3R4LCBzZW5kZXIsIHR5cGVzLk1vZHVsZU5hbWUsIGFtb3VudCk7IGVyciAhPSBuaWwgewogICAgICAgIHJldHVybiBlcnIKICAgIH0KCglmZWVQb29sIDo9IGsuR2V0RmVlUG9vbChjdHgpCglmZWVQb29sLkNvbW11bml0eVBvb2wgPSBmZWVQb29sLkNvbW11bml0eVBvb2wuQWRkKHNkay5OZXdEZWNDb2luc0Zyb21Db2lucyhhbW91bnQuLi4pLi4uKQoJay5TZXRGZWVQb29sKGN0eCwgZmVlUG9vbCkKCglyZXR1cm4gbmlsCn0K"}}),e._v(" "),t("h2",{attrs:{id:"common-distribution-operations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#common-distribution-operations"}},[e._v("#")]),e._v(" Common distribution operations")]),e._v(" "),t("p",[e._v("These operations take place during many different messages.")]),e._v(" "),t("h3",{attrs:{id:"initialize-delegation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#initialize-delegation"}},[e._v("#")]),e._v(" Initialize delegation")]),e._v(" "),t("p",[e._v("Each time a delegation is changed, the rewards are withdrawn and the delegation is reinitialized.\nInitializing a delegation increments the validator period and keeps track of the starting period of the delegation.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gaW5pdGlhbGl6ZSBzdGFydGluZyBpbmZvIGZvciBhIG5ldyBkZWxlZ2F0aW9uCmZ1bmMgKGsgS2VlcGVyKSBpbml0aWFsaXplRGVsZWdhdGlvbihjdHggc2RrLkNvbnRleHQsIHZhbCBzZGsuVmFsQWRkcmVzcywgZGVsIHNkay5BY2NBZGRyZXNzKSB7CiAgICAvLyBwZXJpb2QgaGFzIGFscmVhZHkgYmVlbiBpbmNyZW1lbnRlZCAtIHdlIHdhbnQgdG8gc3RvcmUgdGhlIHBlcmlvZCBlbmRlZCBieSB0aGlzIGRlbGVnYXRpb24gYWN0aW9uCiAgICBwcmV2aW91c1BlcmlvZCA6PSBrLkdldFZhbGlkYXRvckN1cnJlbnRSZXdhcmRzKGN0eCwgdmFsKS5QZXJpb2QgLSAxCgoJLy8gaW5jcmVtZW50IHJlZmVyZW5jZSBjb3VudCBmb3IgdGhlIHBlcmlvZCB3ZSdyZSBnb2luZyB0byB0cmFjawoJay5pbmNyZW1lbnRSZWZlcmVuY2VDb3VudChjdHgsIHZhbCwgcHJldmlvdXNQZXJpb2QpCgoJdmFsaWRhdG9yIDo9IGsuc3Rha2luZ0tlZXBlci5WYWxpZGF0b3IoY3R4LCB2YWwpCglkZWxlZ2F0aW9uIDo9IGsuc3Rha2luZ0tlZXBlci5EZWxlZ2F0aW9uKGN0eCwgZGVsLCB2YWwpCgoJLy8gY2FsY3VsYXRlIGRlbGVnYXRpb24gc3Rha2UgaW4gdG9rZW5zCgkvLyB3ZSBkb24ndCBzdG9yZSBkaXJlY3RseSwgc28gbXVsdGlwbHkgZGVsZWdhdGlvbiBzaGFyZXMgKiAodG9rZW5zIHBlciBzaGFyZSkKCS8vIG5vdGU6IG5lY2Vzc2FyeSB0byB0cnVuY2F0ZSBzbyB3ZSBkb24ndCBhbGxvdyB3aXRoZHJhd2luZyBtb3JlIHJld2FyZHMgdGhhbiBvd2VkCglzdGFrZSA6PSB2YWxpZGF0b3IuVG9rZW5zRnJvbVNoYXJlc1RydW5jYXRlZChkZWxlZ2F0aW9uLkdldFNoYXJlcygpKQoJay5TZXREZWxlZ2F0b3JTdGFydGluZ0luZm8oY3R4LCB2YWwsIGRlbCwgdHlwZXMuTmV3RGVsZWdhdG9yU3RhcnRpbmdJbmZvKHByZXZpb3VzUGVyaW9kLCBzdGFrZSwgdWludDY0KGN0eC5CbG9ja0hlaWdodCgpKSkpCn0K"}})],1)}),[],!1,null,null,null);a.default=s.exports}}]);