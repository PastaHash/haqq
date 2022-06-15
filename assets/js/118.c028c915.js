(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{717:function(e,t,a){"use strict";a.r(t);var o=a(1),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"state"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#state"}},[e._v("#")]),e._v(" State")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("x/bank")]),e._v(" module keeps state of the following primary objects:")]),e._v(" "),a("ol",[a("li",[e._v("Account balances")]),e._v(" "),a("li",[e._v("Denomination metadata")]),e._v(" "),a("li",[e._v("The total supply of all balances")]),e._v(" "),a("li",[e._v("Information on which denominations are allowed to be sent.")])]),e._v(" "),a("p",[e._v("In addition, the "),a("code",[e._v("x/bank")]),e._v(" module keeps the following indexes to manage the\naforementioned state:")]),e._v(" "),a("ul",[a("li",[e._v("Supply Index: "),a("code",[e._v("0x0 | byte(denom) -> byte(amount)")])]),e._v(" "),a("li",[e._v("Denom Metadata Index: "),a("code",[e._v("0x1 | byte(denom) -> ProtocolBuffer(Metadata)")])]),e._v(" "),a("li",[e._v("Balances Index: "),a("code",[e._v("0x2 | byte(address length) | []byte(address) | []byte(balance.Denom) -> ProtocolBuffer(balance)")])]),e._v(" "),a("li",[e._v("Reverse Denomination to Address Index: "),a("code",[e._v("0x03 | byte(denom) | 0x00 | []byte(address) -> 0")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);