(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{742:function(c,d,l){"use strict";l.r(d);var e=l(1),a=Object(e.a)({},(function(){var c=this,d=c.$createElement,l=c._self._c||d;return l("ContentSlotsDistributor",{attrs:{"slot-key":c.$parent.slotKey}},[l("h1",{attrs:{id:"transactions"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#transactions"}},[c._v("#")]),c._v(" Transactions")]),c._v(" "),l("p",[c._v("This section defines the "),l("code",[c._v("sdk.Msg")]),c._v(" concrete types that result in the state transitions defined on the previous section.")]),c._v(" "),l("h2",{attrs:{id:"msgethereumtx"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#msgethereumtx"}},[c._v("#")]),c._v(" "),l("code",[c._v("MsgEthereumTx")])]),c._v(" "),l("p",[c._v("An EVM state transition can be achieved by using the "),l("code",[c._v("MsgEthereumTx")]),c._v(". This message encapsulates an Ethereum transaction data ("),l("code",[c._v("TxData")]),c._v(") as a "),l("code",[c._v("sdk.Msg")]),c._v(". It contains the necessary transaction data fields. Note, that the "),l("code",[c._v("MsgEthereumTx")]),c._v(" implements both the "),l("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.39.2/types/tx_msg.go#L7-L29",target:"_blank",rel:"noopener noreferrer"}},[l("code",[c._v("sdk.Msg")]),l("OutboundLink")],1),c._v(" and "),l("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.39.2/types/tx_msg.go#L33-L41",target:"_blank",rel:"noopener noreferrer"}},[l("code",[c._v("sdk.Tx")]),l("OutboundLink")],1),c._v(" interfaces. Normally,  SDK messages only implement the former, while the latter is a group of messages bundled together.")]),c._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBNc2dFdGhlcmV1bVR4IHN0cnVjdCB7CgkvLyBpbm5lciB0cmFuc2FjdGlvbiBkYXRhCglEYXRhICp0eXBlcy5BbnkgYHByb3RvYnVmOiZxdW90O2J5dGVzLDEsb3B0LG5hbWU9ZGF0YSxwcm90bzMmcXVvdDsganNvbjomcXVvdDtkYXRhLG9taXRlbXB0eSZxdW90O2AKCS8vIGVuY29kZWQgc3RvcmFnZSBzaXplIG9mIHRoZSB0cmFuc2FjdGlvbgoJU2l6ZV8gZmxvYXQ2NCBgcHJvdG9idWY6JnF1b3Q7Zml4ZWQ2NCwyLG9wdCxuYW1lPXNpemUscHJvdG8zJnF1b3Q7IGpzb246JnF1b3Q7LSZxdW90O2AKCS8vIHRyYW5zYWN0aW9uIGhhc2ggaW4gaGV4IGZvcm1hdAoJSGFzaCBzdHJpbmcgYHByb3RvYnVmOiZxdW90O2J5dGVzLDMsb3B0LG5hbWU9aGFzaCxwcm90bzMmcXVvdDsganNvbjomcXVvdDtoYXNoLG9taXRlbXB0eSZxdW90OyBybHA6JnF1b3Q7LSZxdW90O2AKCS8vIGV0aGVyZXVtIHNpZ25lciBhZGRyZXNzIGluIGhleCBmb3JtYXQuIFRoaXMgYWRkcmVzcyB2YWx1ZSBpcyBjaGVja2VkCgkvLyBhZ2FpbnN0IHRoZSBhZGRyZXNzIGRlcml2ZWQgZnJvbSB0aGUgc2lnbmF0dXJlIChWLCBSLCBTKSB1c2luZyB0aGUKCS8vIHNlY3AyNTZrMSBlbGxpcHRpYyBjdXJ2ZQoJRnJvbSBzdHJpbmcgYHByb3RvYnVmOiZxdW90O2J5dGVzLDQsb3B0LG5hbWU9ZnJvbSxwcm90bzMmcXVvdDsganNvbjomcXVvdDtmcm9tLG9taXRlbXB0eSZxdW90O2AKfQo="}}),c._v(" "),l("p",[c._v("This message field validation is expected to fail if:")]),c._v(" "),l("ul",[l("li",[l("code",[c._v("From")]),c._v(" field is defined and the address is invalid")]),c._v(" "),l("li",[l("code",[c._v("TxData")]),c._v(" stateless validation fails")])]),c._v(" "),l("p",[c._v("The transaction execution is expected to fail if:")]),c._v(" "),l("ul",[l("li",[c._v("Any of the custom "),l("code",[c._v("AnteHandler")]),c._v(" Ethereum decorators checks fail:\n"),l("ul",[l("li",[c._v("Minimum gas amount requirements for transaction")]),c._v(" "),l("li",[c._v("Tx sender account doesn't exist or hasn't enough balance for fees")]),c._v(" "),l("li",[c._v("Account sequence doesn't match the transaction "),l("code",[c._v("Data.AccountNonce")])]),c._v(" "),l("li",[c._v("Message signature verification fails")])])]),c._v(" "),l("li",[c._v("EVM contract creation (i.e "),l("code",[c._v("evm.Create")]),c._v(") fails, or "),l("code",[c._v("evm.Call")]),c._v(" fails")])]),c._v(" "),l("h3",{attrs:{id:"conversion"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#conversion"}},[c._v("#")]),c._v(" Conversion")]),c._v(" "),l("p",[c._v("The "),l("code",[c._v("MsgEthreumTx")]),c._v(" can be converted to the go-ethereum "),l("code",[c._v("Transaction")]),c._v(" and "),l("code",[c._v("Message")]),c._v(" types in order to create and call evm contracts.")]),c._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gQXNUcmFuc2FjdGlvbiBjcmVhdGVzIGFuIEV0aGVyZXVtIFRyYW5zYWN0aW9uIHR5cGUgZnJvbSB0aGUgbXNnIGZpZWxkcwpmdW5jIChtc2cgTXNnRXRoZXJldW1UeCkgQXNUcmFuc2FjdGlvbigpICpldGh0eXBlcy5UcmFuc2FjdGlvbiB7Cgl0eERhdGEsIGVyciA6PSBVbnBhY2tUeERhdGEobXNnLkRhdGEpCglpZiBlcnIgIT0gbmlsIHsKCQlyZXR1cm4gbmlsCgl9CgoJcmV0dXJuIGV0aHR5cGVzLk5ld1R4KHR4RGF0YS5Bc0V0aGVyZXVtRGF0YSgpKQp9CgovLyBBc01lc3NhZ2UgcmV0dXJucyB0aGUgdHJhbnNhY3Rpb24gYXMgYSBjb3JlLk1lc3NhZ2UuCmZ1bmMgKHR4ICpUcmFuc2FjdGlvbikgQXNNZXNzYWdlKHMgU2lnbmVyLCBiYXNlRmVlICpiaWcuSW50KSAoTWVzc2FnZSwgZXJyb3IpIHsKCW1zZyA6PSBNZXNzYWdlewoJCW5vbmNlOiAgICAgIHR4Lk5vbmNlKCksCgkJZ2FzTGltaXQ6ICAgdHguR2FzKCksCgkJZ2FzUHJpY2U6ICAgbmV3KGJpZy5JbnQpLlNldCh0eC5HYXNQcmljZSgpKSwKCQlnYXNGZWVDYXA6ICBuZXcoYmlnLkludCkuU2V0KHR4Lkdhc0ZlZUNhcCgpKSwKCQlnYXNUaXBDYXA6ICBuZXcoYmlnLkludCkuU2V0KHR4Lkdhc1RpcENhcCgpKSwKCQl0bzogICAgICAgICB0eC5UbygpLAoJCWFtb3VudDogICAgIHR4LlZhbHVlKCksCgkJZGF0YTogICAgICAgdHguRGF0YSgpLAoJCWFjY2Vzc0xpc3Q6IHR4LkFjY2Vzc0xpc3QoKSwKCQlpc0Zha2U6ICAgICBmYWxzZSwKCX0KCS8vIElmIGJhc2VGZWUgcHJvdmlkZWQsIHNldCBnYXNQcmljZSB0byBlZmZlY3RpdmVHYXNQcmljZS4KCWlmIGJhc2VGZWUgIT0gbmlsIHsKCQltc2cuZ2FzUHJpY2UgPSBtYXRoLkJpZ01pbihtc2cuZ2FzUHJpY2UuQWRkKG1zZy5nYXNUaXBDYXAsIGJhc2VGZWUpLCBtc2cuZ2FzRmVlQ2FwKQoJfQoJdmFyIGVyciBlcnJvcgoJbXNnLmZyb20sIGVyciA9IFNlbmRlcihzLCB0eCkKCXJldHVybiBtc2csIGVycgp9Cg=="}}),c._v(" "),l("h3",{attrs:{id:"signing"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#signing"}},[c._v("#")]),c._v(" Signing")]),c._v(" "),l("p",[c._v("In order for the signature verification to be valid, the  "),l("code",[c._v("TxData")]),c._v(" must contain the "),l("code",[c._v("v | r | s")]),c._v(" values from the "),l("code",[c._v("Signer")]),c._v(". Sign calculates a secp256k1 ECDSA signature and signs the transaction. It takes a keyring signer and the chainID to sign an Ethereum transaction according to EIP155 standard. This method mutates the transaction as it populates the V, R, S fields of the Transaction's Signature. The function will fail if the sender address is not defined for the msg or if the sender is not registered on the keyring.")]),c._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gU2lnbiBjYWxjdWxhdGVzIGEgc2VjcDI1NmsxIEVDRFNBIHNpZ25hdHVyZSBhbmQgc2lnbnMgdGhlIHRyYW5zYWN0aW9uLiBJdAovLyB0YWtlcyBhIGtleXJpbmcgc2lnbmVyIGFuZCB0aGUgY2hhaW5JRCB0byBzaWduIGFuIEV0aGVyZXVtIHRyYW5zYWN0aW9uIGFjY29yZGluZyB0bwovLyBFSVAxNTUgc3RhbmRhcmQuCi8vIFRoaXMgbWV0aG9kIG11dGF0ZXMgdGhlIHRyYW5zYWN0aW9uIGFzIGl0IHBvcHVsYXRlcyB0aGUgViwgUiwgUwovLyBmaWVsZHMgb2YgdGhlIFRyYW5zYWN0aW9uJ3MgU2lnbmF0dXJlLgovLyBUaGUgZnVuY3Rpb24gd2lsbCBmYWlsIGlmIHRoZSBzZW5kZXIgYWRkcmVzcyBpcyBub3QgZGVmaW5lZCBmb3IgdGhlIG1zZyBvciBpZgovLyB0aGUgc2VuZGVyIGlzIG5vdCByZWdpc3RlcmVkIG9uIHRoZSBrZXlyaW5nCmZ1bmMgKG1zZyAqTXNnRXRoZXJldW1UeCkgU2lnbihldGhTaWduZXIgZXRodHlwZXMuU2lnbmVyLCBrZXlyaW5nU2lnbmVyIGtleXJpbmcuU2lnbmVyKSBlcnJvciB7Cglmcm9tIDo9IG1zZy5HZXRGcm9tKCkKCWlmIGZyb20uRW1wdHkoKSB7CgkJcmV0dXJuIGZtdC5FcnJvcmYoJnF1b3Q7c2VuZGVyIGFkZHJlc3Mgbm90IGRlZmluZWQgZm9yIG1lc3NhZ2UmcXVvdDspCgl9CgoJdHggOj0gbXNnLkFzVHJhbnNhY3Rpb24oKQoJdHhIYXNoIDo9IGV0aFNpZ25lci5IYXNoKHR4KQoKCXNpZywgXywgZXJyIDo9IGtleXJpbmdTaWduZXIuU2lnbkJ5QWRkcmVzcyhmcm9tLCB0eEhhc2guQnl0ZXMoKSkKCWlmIGVyciAhPSBuaWwgewoJCXJldHVybiBlcnIKCX0KCgl0eCwgZXJyID0gdHguV2l0aFNpZ25hdHVyZShldGhTaWduZXIsIHNpZykKCWlmIGVyciAhPSBuaWwgewoJCXJldHVybiBlcnIKCX0KCgltc2cuRnJvbUV0aGVyZXVtVHgodHgpCglyZXR1cm4gbmlsCn0K"}}),c._v(" "),l("h2",{attrs:{id:"txdata"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#txdata"}},[c._v("#")]),c._v(" TxData")]),c._v(" "),l("p",[c._v("The "),l("code",[c._v("MsgEthereumTx")]),c._v(" supports the 3 valid Ethereum transaction data types from go-ethereum: "),l("code",[c._v("LegacyTx")]),c._v(", "),l("code",[c._v("AccessListTx")]),c._v("  and "),l("code",[c._v("DynamicFeeTx")]),c._v(". These types are defined as protobuf messages and packed into a "),l("code",[c._v("proto.Any")]),c._v(" interface type in the "),l("code",[c._v("MsgEthereumTx")]),c._v(" field.")]),c._v(" "),l("ul",[l("li",[l("code",[c._v("LegacyTx")]),c._v(": "),l("a",{attrs:{href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-155.md",target:"_blank",rel:"noopener noreferrer"}},[c._v("EIP-155"),l("OutboundLink")],1),c._v(" transaction type")]),c._v(" "),l("li",[l("code",[c._v("DynamicFeeTx")]),c._v(": "),l("a",{attrs:{href:"https://eips.ethereum.org/EIPS/eip-1559",target:"_blank",rel:"noopener noreferrer"}},[c._v("EIP-1559"),l("OutboundLink")],1),c._v(" transaction type. Enabled by London hard fork block")]),c._v(" "),l("li",[l("code",[c._v("AccessListTx")]),c._v(": "),l("a",{attrs:{href:"https://eips.ethereum.org/EIPS/eip-2930",target:"_blank",rel:"noopener noreferrer"}},[c._v("EIP-2930"),l("OutboundLink")],1),c._v(" transaction type. Enabled by Berlin hard fork block")])]),c._v(" "),l("h3",{attrs:{id:"legacytx"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#legacytx"}},[c._v("#")]),c._v(" "),l("code",[c._v("LegacyTx")])]),c._v(" "),l("p",[c._v("The transaction data of regular Ethereum transactions.")]),c._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBMZWdhY3lUeCBzdHJ1Y3QgewoJLy8gbm9uY2UgY29ycmVzcG9uZHMgdG8gdGhlIGFjY291bnQgbm9uY2UgKHRyYW5zYWN0aW9uIHNlcXVlbmNlKS4KCU5vbmNlIHVpbnQ2NCBgcHJvdG9idWY6JnF1b3Q7dmFyaW50LDEsb3B0LG5hbWU9bm9uY2UscHJvdG8zJnF1b3Q7IGpzb246JnF1b3Q7bm9uY2Usb21pdGVtcHR5JnF1b3Q7YAoJLy8gZ2FzIHByaWNlIGRlZmluZXMgdGhlIHZhbHVlIGZvciBlYWNoIGdhcyB1bml0CglHYXNQcmljZSAqZ2l0aHViX2NvbV9jb3Ntb3NfY29zbW9zX3Nka190eXBlcy5JbnQgYHByb3RvYnVmOiZxdW90O2J5dGVzLDIsb3B0LG5hbWU9Z2FzX3ByaWNlLGpzb249Z2FzUHJpY2UscHJvdG8zLGN1c3RvbXR5cGU9Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay90eXBlcy5JbnQmcXVvdDsganNvbjomcXVvdDtnYXNfcHJpY2Usb21pdGVtcHR5JnF1b3Q7YAoJLy8gZ2FzIGRlZmluZXMgdGhlIGdhcyBsaW1pdCBkZWZpbmVkIGZvciB0aGUgdHJhbnNhY3Rpb24uCglHYXNMaW1pdCB1aW50NjQgYHByb3RvYnVmOiZxdW90O3ZhcmludCwzLG9wdCxuYW1lPWdhcyxwcm90bzMmcXVvdDsganNvbjomcXVvdDtnYXMsb21pdGVtcHR5JnF1b3Q7YAoJLy8gaGV4IGZvcm1hdHRlZCBhZGRyZXNzIG9mIHRoZSByZWNpcGllbnQKCVRvIHN0cmluZyBgcHJvdG9idWY6JnF1b3Q7Ynl0ZXMsNCxvcHQsbmFtZT10byxwcm90bzMmcXVvdDsganNvbjomcXVvdDt0byxvbWl0ZW1wdHkmcXVvdDtgCgkvLyB2YWx1ZSBkZWZpbmVzIHRoZSB1bnNpZ25lZCBpbnRlZ2VyIHZhbHVlIG9mIHRoZSB0cmFuc2FjdGlvbiBhbW91bnQuCglBbW91bnQgKmdpdGh1Yl9jb21fY29zbW9zX2Nvc21vc19zZGtfdHlwZXMuSW50IGBwcm90b2J1ZjomcXVvdDtieXRlcyw1LG9wdCxuYW1lPXZhbHVlLHByb3RvMyxjdXN0b210eXBlPWdpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvdHlwZXMuSW50JnF1b3Q7IGpzb246JnF1b3Q7dmFsdWUsb21pdGVtcHR5JnF1b3Q7YAoJLy8gaW5wdXQgZGVmaW5lcyB0aGUgZGF0YSBwYXlsb2FkIGJ5dGVzIG9mIHRoZSB0cmFuc2FjdGlvbi4KCURhdGEgW11ieXRlIGBwcm90b2J1ZjomcXVvdDtieXRlcyw2LG9wdCxuYW1lPWRhdGEscHJvdG8zJnF1b3Q7IGpzb246JnF1b3Q7ZGF0YSxvbWl0ZW1wdHkmcXVvdDtgCgkvLyB2IGRlZmluZXMgdGhlIHNpZ25hdHVyZSB2YWx1ZQoJViBbXWJ5dGUgYHByb3RvYnVmOiZxdW90O2J5dGVzLDcsb3B0LG5hbWU9dixwcm90bzMmcXVvdDsganNvbjomcXVvdDt2LG9taXRlbXB0eSZxdW90O2AKCS8vIHIgZGVmaW5lcyB0aGUgc2lnbmF0dXJlIHZhbHVlCglSIFtdYnl0ZSBgcHJvdG9idWY6JnF1b3Q7Ynl0ZXMsOCxvcHQsbmFtZT1yLHByb3RvMyZxdW90OyBqc29uOiZxdW90O3Isb21pdGVtcHR5JnF1b3Q7YAoJLy8gcyBkZWZpbmUgdGhlIHNpZ25hdHVyZSB2YWx1ZQoJUyBbXWJ5dGUgYHByb3RvYnVmOiZxdW90O2J5dGVzLDksb3B0LG5hbWU9cyxwcm90bzMmcXVvdDsganNvbjomcXVvdDtzLG9taXRlbXB0eSZxdW90O2AKfQo="}}),c._v(" "),l("p",[c._v("This message field validation is expected to fail if:")]),c._v(" "),l("ul",[l("li",[l("code",[c._v("GasPrice")]),c._v(" is invalid ("),l("code",[c._v("nil")]),c._v(" , negaitve or out of int256 bound)")]),c._v(" "),l("li",[l("code",[c._v("Fee")]),c._v(" (gasprice * gaslimit) is invalid")]),c._v(" "),l("li",[l("code",[c._v("Amount")]),c._v(" is invalid (negaitve or out of int256 bound)")]),c._v(" "),l("li",[l("code",[c._v("To")]),c._v(" address is invalid (non valid ethereum hex address)")])]),c._v(" "),l("h3",{attrs:{id:"dynamicfeetx"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#dynamicfeetx"}},[c._v("#")]),c._v(" "),l("code",[c._v("DynamicFeeTx")])]),c._v(" "),l("p",[c._v("The transaction data of EIP-1559 dynamic fee transactions.")]),c._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBEeW5hbWljRmVlVHggc3RydWN0IHsKCS8vIGRlc3RpbmF0aW9uIEVWTSBjaGFpbiBJRAoJQ2hhaW5JRCAqZ2l0aHViX2NvbV9jb3Ntb3NfY29zbW9zX3Nka190eXBlcy5JbnQgYHByb3RvYnVmOiZxdW90O2J5dGVzLDEsb3B0LG5hbWU9Y2hhaW5faWQsanNvbj1jaGFpbklkLHByb3RvMyxjdXN0b210eXBlPWdpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvdHlwZXMuSW50JnF1b3Q7IGpzb246JnF1b3Q7Y2hhaW5JRCZxdW90O2AKCS8vIG5vbmNlIGNvcnJlc3BvbmRzIHRvIHRoZSBhY2NvdW50IG5vbmNlICh0cmFuc2FjdGlvbiBzZXF1ZW5jZSkuCglOb25jZSB1aW50NjQgYHByb3RvYnVmOiZxdW90O3ZhcmludCwyLG9wdCxuYW1lPW5vbmNlLHByb3RvMyZxdW90OyBqc29uOiZxdW90O25vbmNlLG9taXRlbXB0eSZxdW90O2AKCS8vIGdhcyB0aXAgY2FwIGRlZmluZXMgdGhlIG1heCB2YWx1ZSBmb3IgdGhlIGdhcyB0aXAKCUdhc1RpcENhcCAqZ2l0aHViX2NvbV9jb3Ntb3NfY29zbW9zX3Nka190eXBlcy5JbnQgYHByb3RvYnVmOiZxdW90O2J5dGVzLDMsb3B0LG5hbWU9Z2FzX3RpcF9jYXAsanNvbj1nYXNUaXBDYXAscHJvdG8zLGN1c3RvbXR5cGU9Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay90eXBlcy5JbnQmcXVvdDsganNvbjomcXVvdDtnYXNfdGlwX2NhcCxvbWl0ZW1wdHkmcXVvdDtgCgkvLyBnYXMgZmVlIGNhcCBkZWZpbmVzIHRoZSBtYXggdmFsdWUgZm9yIHRoZSBnYXMgZmVlCglHYXNGZWVDYXAgKmdpdGh1Yl9jb21fY29zbW9zX2Nvc21vc19zZGtfdHlwZXMuSW50IGBwcm90b2J1ZjomcXVvdDtieXRlcyw0LG9wdCxuYW1lPWdhc19mZWVfY2FwLGpzb249Z2FzRmVlQ2FwLHByb3RvMyxjdXN0b210eXBlPWdpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvdHlwZXMuSW50JnF1b3Q7IGpzb246JnF1b3Q7Z2FzX2ZlZV9jYXAsb21pdGVtcHR5JnF1b3Q7YAoJLy8gZ2FzIGRlZmluZXMgdGhlIGdhcyBsaW1pdCBkZWZpbmVkIGZvciB0aGUgdHJhbnNhY3Rpb24uCglHYXNMaW1pdCB1aW50NjQgYHByb3RvYnVmOiZxdW90O3ZhcmludCw1LG9wdCxuYW1lPWdhcyxwcm90bzMmcXVvdDsganNvbjomcXVvdDtnYXMsb21pdGVtcHR5JnF1b3Q7YAoJLy8gaGV4IGZvcm1hdHRlZCBhZGRyZXNzIG9mIHRoZSByZWNpcGllbnQKCVRvIHN0cmluZyBgcHJvdG9idWY6JnF1b3Q7Ynl0ZXMsNixvcHQsbmFtZT10byxwcm90bzMmcXVvdDsganNvbjomcXVvdDt0byxvbWl0ZW1wdHkmcXVvdDtgCgkvLyB2YWx1ZSBkZWZpbmVzIHRoZSB0aGUgdHJhbnNhY3Rpb24gYW1vdW50LgoJQW1vdW50ICpnaXRodWJfY29tX2Nvc21vc19jb3Ntb3Nfc2RrX3R5cGVzLkludCBgcHJvdG9idWY6JnF1b3Q7Ynl0ZXMsNyxvcHQsbmFtZT12YWx1ZSxwcm90bzMsY3VzdG9tdHlwZT1naXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3R5cGVzLkludCZxdW90OyBqc29uOiZxdW90O3ZhbHVlLG9taXRlbXB0eSZxdW90O2AKCS8vIGlucHV0IGRlZmluZXMgdGhlIGRhdGEgcGF5bG9hZCBieXRlcyBvZiB0aGUgdHJhbnNhY3Rpb24uCglEYXRhICAgICBbXWJ5dGUgICAgIGBwcm90b2J1ZjomcXVvdDtieXRlcyw4LG9wdCxuYW1lPWRhdGEscHJvdG8zJnF1b3Q7IGpzb246JnF1b3Q7ZGF0YSxvbWl0ZW1wdHkmcXVvdDtgCglBY2Nlc3NlcyBBY2Nlc3NMaXN0IGBwcm90b2J1ZjomcXVvdDtieXRlcyw5LHJlcCxuYW1lPWFjY2Vzc2VzLHByb3RvMyxjYXN0cmVwZWF0ZWQ9QWNjZXNzTGlzdCZxdW90OyBqc29uOiZxdW90O2FjY2Vzc0xpc3QmcXVvdDtgCgkvLyB2IGRlZmluZXMgdGhlIHNpZ25hdHVyZSB2YWx1ZQoJViBbXWJ5dGUgYHByb3RvYnVmOiZxdW90O2J5dGVzLDEwLG9wdCxuYW1lPXYscHJvdG8zJnF1b3Q7IGpzb246JnF1b3Q7dixvbWl0ZW1wdHkmcXVvdDtgCgkvLyByIGRlZmluZXMgdGhlIHNpZ25hdHVyZSB2YWx1ZQoJUiBbXWJ5dGUgYHByb3RvYnVmOiZxdW90O2J5dGVzLDExLG9wdCxuYW1lPXIscHJvdG8zJnF1b3Q7IGpzb246JnF1b3Q7cixvbWl0ZW1wdHkmcXVvdDtgCgkvLyBzIGRlZmluZSB0aGUgc2lnbmF0dXJlIHZhbHVlCglTIFtdYnl0ZSBgcHJvdG9idWY6JnF1b3Q7Ynl0ZXMsMTIsb3B0LG5hbWU9cyxwcm90bzMmcXVvdDsganNvbjomcXVvdDtzLG9taXRlbXB0eSZxdW90O2AKfQo="}}),c._v(" "),l("p",[c._v("This message field validation is expected to fail if:")]),c._v(" "),l("ul",[l("li",[l("code",[c._v("GasTipCap")]),c._v(" is invalid ("),l("code",[c._v("nil")]),c._v(" , negative or overflows int256)")]),c._v(" "),l("li",[l("code",[c._v("GasFeeCap")]),c._v(" is invalid ("),l("code",[c._v("nil")]),c._v(" , negative or overflows int256)")]),c._v(" "),l("li",[l("code",[c._v("GasFeeCap")]),c._v(" is less than "),l("code",[c._v("GasTipCap")])]),c._v(" "),l("li",[l("code",[c._v("Fee")]),c._v(" (gas price * gas limit) is invalid (overflows int256)")]),c._v(" "),l("li",[l("code",[c._v("Amount")]),c._v(" is invalid (negative or overflows int256)")]),c._v(" "),l("li",[l("code",[c._v("To")]),c._v(" address is invalid (non-valid ethereum hex address)")]),c._v(" "),l("li",[l("code",[c._v("ChainID")]),c._v(" is "),l("code",[c._v("nil")])])]),c._v(" "),l("h3",{attrs:{id:"accesslisttx"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#accesslisttx"}},[c._v("#")]),c._v(" "),l("code",[c._v("AccessListTx")])]),c._v(" "),l("p",[c._v("The transaction data of EIP-2930 access list transactions.")]),c._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBBY2Nlc3NMaXN0VHggc3RydWN0IHsKCS8vIGRlc3RpbmF0aW9uIEVWTSBjaGFpbiBJRAoJQ2hhaW5JRCAqZ2l0aHViX2NvbV9jb3Ntb3NfY29zbW9zX3Nka190eXBlcy5JbnQgYHByb3RvYnVmOiZxdW90O2J5dGVzLDEsb3B0LG5hbWU9Y2hhaW5faWQsanNvbj1jaGFpbklkLHByb3RvMyxjdXN0b210eXBlPWdpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvdHlwZXMuSW50JnF1b3Q7IGpzb246JnF1b3Q7Y2hhaW5JRCZxdW90O2AKCS8vIG5vbmNlIGNvcnJlc3BvbmRzIHRvIHRoZSBhY2NvdW50IG5vbmNlICh0cmFuc2FjdGlvbiBzZXF1ZW5jZSkuCglOb25jZSB1aW50NjQgYHByb3RvYnVmOiZxdW90O3ZhcmludCwyLG9wdCxuYW1lPW5vbmNlLHByb3RvMyZxdW90OyBqc29uOiZxdW90O25vbmNlLG9taXRlbXB0eSZxdW90O2AKCS8vIGdhcyBwcmljZSBkZWZpbmVzIHRoZSB2YWx1ZSBmb3IgZWFjaCBnYXMgdW5pdAoJR2FzUHJpY2UgKmdpdGh1Yl9jb21fY29zbW9zX2Nvc21vc19zZGtfdHlwZXMuSW50IGBwcm90b2J1ZjomcXVvdDtieXRlcywzLG9wdCxuYW1lPWdhc19wcmljZSxqc29uPWdhc1ByaWNlLHByb3RvMyxjdXN0b210eXBlPWdpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvdHlwZXMuSW50JnF1b3Q7IGpzb246JnF1b3Q7Z2FzX3ByaWNlLG9taXRlbXB0eSZxdW90O2AKCS8vIGdhcyBkZWZpbmVzIHRoZSBnYXMgbGltaXQgZGVmaW5lZCBmb3IgdGhlIHRyYW5zYWN0aW9uLgoJR2FzTGltaXQgdWludDY0IGBwcm90b2J1ZjomcXVvdDt2YXJpbnQsNCxvcHQsbmFtZT1nYXMscHJvdG8zJnF1b3Q7IGpzb246JnF1b3Q7Z2FzLG9taXRlbXB0eSZxdW90O2AKCS8vIGhleCBmb3JtYXR0ZWQgYWRkcmVzcyBvZiB0aGUgcmVjaXBpZW50CglUbyBzdHJpbmcgYHByb3RvYnVmOiZxdW90O2J5dGVzLDUsb3B0LG5hbWU9dG8scHJvdG8zJnF1b3Q7IGpzb246JnF1b3Q7dG8sb21pdGVtcHR5JnF1b3Q7YAoJLy8gdmFsdWUgZGVmaW5lcyB0aGUgdW5zaWduZWQgaW50ZWdlciB2YWx1ZSBvZiB0aGUgdHJhbnNhY3Rpb24gYW1vdW50LgoJQW1vdW50ICpnaXRodWJfY29tX2Nvc21vc19jb3Ntb3Nfc2RrX3R5cGVzLkludCBgcHJvdG9idWY6JnF1b3Q7Ynl0ZXMsNixvcHQsbmFtZT12YWx1ZSxwcm90bzMsY3VzdG9tdHlwZT1naXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3R5cGVzLkludCZxdW90OyBqc29uOiZxdW90O3ZhbHVlLG9taXRlbXB0eSZxdW90O2AKCS8vIGlucHV0IGRlZmluZXMgdGhlIGRhdGEgcGF5bG9hZCBieXRlcyBvZiB0aGUgdHJhbnNhY3Rpb24uCglEYXRhICAgICBbXWJ5dGUgICAgIGBwcm90b2J1ZjomcXVvdDtieXRlcyw3LG9wdCxuYW1lPWRhdGEscHJvdG8zJnF1b3Q7IGpzb246JnF1b3Q7ZGF0YSxvbWl0ZW1wdHkmcXVvdDtgCglBY2Nlc3NlcyBBY2Nlc3NMaXN0IGBwcm90b2J1ZjomcXVvdDtieXRlcyw4LHJlcCxuYW1lPWFjY2Vzc2VzLHByb3RvMyxjYXN0cmVwZWF0ZWQ9QWNjZXNzTGlzdCZxdW90OyBqc29uOiZxdW90O2FjY2Vzc0xpc3QmcXVvdDtgCgkvLyB2IGRlZmluZXMgdGhlIHNpZ25hdHVyZSB2YWx1ZQoJViBbXWJ5dGUgYHByb3RvYnVmOiZxdW90O2J5dGVzLDksb3B0LG5hbWU9dixwcm90bzMmcXVvdDsganNvbjomcXVvdDt2LG9taXRlbXB0eSZxdW90O2AKCS8vIHIgZGVmaW5lcyB0aGUgc2lnbmF0dXJlIHZhbHVlCglSIFtdYnl0ZSBgcHJvdG9idWY6JnF1b3Q7Ynl0ZXMsMTAsb3B0LG5hbWU9cixwcm90bzMmcXVvdDsganNvbjomcXVvdDtyLG9taXRlbXB0eSZxdW90O2AKCS8vIHMgZGVmaW5lIHRoZSBzaWduYXR1cmUgdmFsdWUKCVMgW11ieXRlIGBwcm90b2J1ZjomcXVvdDtieXRlcywxMSxvcHQsbmFtZT1zLHByb3RvMyZxdW90OyBqc29uOiZxdW90O3Msb21pdGVtcHR5JnF1b3Q7YAp9Cg=="}}),c._v(" "),l("p",[c._v("This message field validation is expected to fail if:")]),c._v(" "),l("ul",[l("li",[l("code",[c._v("GasPrice")]),c._v(" is invalid ("),l("code",[c._v("nil")]),c._v(" , negative or overflows int256)")]),c._v(" "),l("li",[l("code",[c._v("Fee")]),c._v(" (gas price * gas limit) is invalid (overflows int256)")]),c._v(" "),l("li",[l("code",[c._v("Amount")]),c._v(" is invalid (negative or overflows int256)")]),c._v(" "),l("li",[l("code",[c._v("To")]),c._v(" address is invalid (non-valid ethereum hex address)")]),c._v(" "),l("li",[l("code",[c._v("ChainID")]),c._v(" is "),l("code",[c._v("nil")])])])],1)}),[],!1,null,null,null);d.default=a.exports}}]);