"use strict";(self.webpackChunkevcc_docs=self.webpackChunkevcc_docs||[]).push([[3928],{1370:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));n(5657);const o={sidebar_position:14},a="mqtt",l={unversionedId:"reference/configuration/mqtt",id:"reference/configuration/mqtt",title:"mqtt",description:"Stellt die Konnektivit\xe4t mit einem MQTT-Broker her.",source:"@site/docs/reference/configuration/mqtt.md",sourceDirName:"reference/configuration",slug:"/reference/configuration/mqtt",permalink:"/docs/reference/configuration/mqtt",draft:!1,editUrl:"https://github.com/evcc-io/docs/tree/main/docs/reference/configuration/mqtt.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"eebus",permalink:"/docs/reference/configuration/eebus"},next:{title:"influx",permalink:"/docs/reference/configuration/influx"}},d={},c=[{value:"Erforderliche Parameter",id:"erforderliche-parameter",level:2},{value:"<code>broker</code>",id:"broker",level:3},{value:"<code>topic</code>",id:"topic",level:3},{value:"Optionale Parameter",id:"optionale-parameter",level:2},{value:"<code>user</code>",id:"user",level:3},{value:"<code>password</code>",id:"password",level:3},{value:"<code>clientid</code>",id:"clientid",level:3}],s={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"mqtt"},(0,i.kt)("inlineCode",{parentName:"h1"},"mqtt")),(0,i.kt)("p",null,"Stellt die Konnektivit\xe4t mit einem MQTT-Broker her.\nBei bestehender Verbindung pusht evcc automatisch alle internen Werte via MQTT-Broker auf das angegebene Topic und empf\xe4ngt dort auch \xc4nderungen.\nSiehe dazu auch die Dokumentation zur ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/api/#mqtt-api"},(0,i.kt)("inlineCode",{parentName:"a"},"MQTT API")),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# mqtt message broker\nmqtt:\n  broker: localhost:1883\n  topic: evcc # root topic for publishing, set empty to disable publishing\n  # clientid: foo\n  # user:\n  # password:\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"erforderliche-parameter"},"Erforderliche Parameter"),(0,i.kt)("h3",{id:"broker"},(0,i.kt)("inlineCode",{parentName:"h3"},"broker")),(0,i.kt)("p",null,"Verbindungsdaten (Hostname/IP und Port) des verwendeten MQTT-Brokers zu dem sich evcc als Client verbinden soll."),(0,i.kt)("h3",{id:"topic"},(0,i.kt)("inlineCode",{parentName:"h3"},"topic")),(0,i.kt)("p",null,"Gibt das Wurzeltopic an welches evcc verwendet.\nWenn hier nichts angegeben wird findet keine MQTT-Kommunikation statt!"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"optionale-parameter"},"Optionale Parameter"),(0,i.kt)("h3",{id:"user"},(0,i.kt)("inlineCode",{parentName:"h3"},"user")),(0,i.kt)("p",null,"Der Benutzernamen zur Anmeldung am MQTT-Broker."),(0,i.kt)("h3",{id:"password"},(0,i.kt)("inlineCode",{parentName:"h3"},"password")),(0,i.kt)("p",null,"Das Anmeldepasswort am MQTT-Broker."),(0,i.kt)("h3",{id:"clientid"},(0,i.kt)("inlineCode",{parentName:"h3"},"clientid")),(0,i.kt)("p",null,"Erlaubt eine feste MQTT-Client ID vorzugegeben. Andernfalls wird diese dynamisch vergeben."))}p.isMDXComponent=!0}}]);