(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{698:function(t,e,o){"use strict";o.r(e);var s=o(1),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"disk-usage-optimization"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#disk-usage-optimization"}},[t._v("#")]),t._v(" Disk Usage Optimization")]),t._v(" "),o("p",{attrs:{synopsis:""}},[t._v("Customize the configuration settings to lower the disk requirements for your validator node")]),t._v(" "),o("p",[t._v("Blockchain database tends to grow over time, depending e.g. on block\nspeed and transaction amount. For Haqq, we are talking about close to\n100GB of disk usage in first two weeks.")]),t._v(" "),o("p",[t._v("There are few configurations that can be done to reduce the required\ndisk usage quite significantly. Some of these changes take full effect\nonly when you do the configuration and start syncing from start with\nthem in use.")]),t._v(" "),o("h2",{attrs:{id:"indexing"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#indexing"}},[t._v("#")]),t._v(" Indexing")]),t._v(" "),o("p",[t._v("If you do not need to query transactions from the specific node, you can\ndisable indexing. On "),o("code",[t._v("config.toml")]),t._v(" set")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"toml",base64:"aW5kZXhlciA9ICZxdW90O251bGwmcXVvdDsK"}}),t._v(" "),o("p",[t._v("If you do this on already synced node, the collected index is not purged\nautomatically, you need to delete it manually. The index is located\nunder the database directory with name "),o("code",[t._v("data/tx_index.db/")]),t._v(".")]),t._v(" "),o("h2",{attrs:{id:"state-sync-snapshots"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#state-sync-snapshots"}},[t._v("#")]),t._v(" State-sync snapshots")]),t._v(" "),o("p",[t._v("I believe this was disabled by default on Haqq, but listing it in any\ncase here. On "),o("code",[t._v("app.toml")]),t._v(" set")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"toml",base64:"c25hcHNob3QtaW50ZXJ2YWwgPSAwCg=="}}),t._v(" "),o("p",[t._v("Note that if state-sync was enabled on the network and working properly,\nit would allow one to sync a new node in few minutes. But this node\nwould not have the history.")]),t._v(" "),o("h2",{attrs:{id:"configure-pruning"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configure-pruning"}},[t._v("#")]),t._v(" Configure pruning")]),t._v(" "),o("p",[t._v("By default every 500th state, and the last 100 states are kept. This\nconsumes a lot of disk space on long run, and can be optimized with\nfollowing custom configuration:")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"toml",base64:"cHJ1bmluZyA9ICZxdW90O2N1c3RvbSZxdW90OwpwcnVuaW5nLWtlZXAtcmVjZW50ID0gJnF1b3Q7MTAwJnF1b3Q7CnBydW5pbmcta2VlcC1ldmVyeSA9ICZxdW90OzAmcXVvdDsKcHJ1bmluZy1pbnRlcnZhbCA9ICZxdW90OzEwJnF1b3Q7Cg=="}}),t._v(" "),o("p",[t._v("Configuring "),o("code",[t._v('pruning-keep-recent = "0"')]),t._v(" might sound tempting, but this\nwill risk database corruption if the "),o("code",[t._v("haqqd")]),t._v(" is killed for any reason.\nThus, it is recommended to keep the few latest states.")]),t._v(" "),o("h2",{attrs:{id:"logging"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#logging"}},[t._v("#")]),t._v(" Logging")]),t._v(" "),o("p",[t._v("By default the logging level is set to "),o("code",[t._v("info")]),t._v(", and this produces a lot of\nlogs. This log level might be good when starting up to see that the\nnode starts syncing properly. However, after you see the syncing is\ngoing smoothly, you can lower the log level to "),o("code",[t._v("warn")]),t._v(" (or "),o("code",[t._v("error")]),t._v("). On\n"),o("code",[t._v("config.toml")]),t._v(" set the following")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"toml",base64:"bG9nX2xldmVsID0gJnF1b3Q7d2FybiZxdW90Owo="}}),t._v(" "),o("p",[t._v("Also ensure your log rotation is configured properly.")]),t._v(" "),o("h2",{attrs:{id:"results"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#results"}},[t._v("#")]),t._v(" Results")]),t._v(" "),o("p",[t._v("Below is the disk usage after two weeks of Evmos Arsia Mons testnet. The default\nconfiguration results in disk usage of 90GB.")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"NS4zRyAgICAuL3N0YXRlLmRiCjcwRyAgICAgLi9hcHBsaWNhdGlvbi5kYgoyMEsgICAgIC4vc25hcHNob3RzL21ldGFkYXRhLmRiCjI0SyAgICAgLi9zbmFwc2hvdHMKOS4wRyAgICAuL2Jsb2Nrc3RvcmUuZGIKMjBLICAgICAuL2V2aWRlbmNlLmRiCjEwMThNICAgLi9jcy53YWwKNC43RyAgICAuL3R4X2luZGV4LmRiCjkwRyAgICAgLgo="}}),t._v(" "),o("p",[t._v("This optimized configuration has reduced the disk usage to 17 GB.")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"MTdHICAgICAuCjEuMUcgICAgLi9jcy53YWwKOTQ2TSAgICAuL2FwcGxpY2F0aW9uLmRiCjIwSyAgICAgLi9ldmlkZW5jZS5kYgo5LjFHICAgIC4vYmxvY2tzdG9yZS5kYgoyNEsgICAgIC4vc25hcHNob3RzCjIwSyAgICAgLi9zbmFwc2hvdHMvbWV0YWRhdGEuZGIKNS4zRyAgICAuL3N0YXRlLmRiCg=="}})],1)}),[],!1,null,null,null);e.default=a.exports}}]);