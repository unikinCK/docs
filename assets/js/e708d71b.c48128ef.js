"use strict";(self.webpackChunkevcc_docs=self.webpackChunkevcc_docs||[]).push([[6479],{5631:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var i=t(7462),r=(t(7294),t(3905));t(5657);const o={sidebar_position:15},a="influx",l={unversionedId:"reference/configuration/influx",id:"reference/configuration/influx",title:"influx",description:"Definiert die Influx Konfiguration, um Daten in Influx zu schreiben.",source:"@site/docs/reference/configuration/influx.md",sourceDirName:"reference/configuration",slug:"/reference/configuration/influx",permalink:"/docs/reference/configuration/influx",draft:!1,editUrl:"https://github.com/evcc-io/docs/tree/main/docs/reference/configuration/influx.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15},sidebar:"tutorialSidebar",previous:{title:"mqtt",permalink:"/docs/reference/configuration/mqtt"},next:{title:"sponsortoken",permalink:"/docs/reference/configuration/sponsortoken"}},u={},s=[{value:"InfluxDB v1.8.x",id:"influxdb-v18x",level:2},{value:"InfluxDB v2.x",id:"influxdb-v2x",level:2}],c={toc:s},f="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(f,(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"influx"},(0,r.kt)("inlineCode",{parentName:"h1"},"influx")),(0,r.kt)("p",null,"Definiert die Influx Konfiguration, um Daten in Influx zu schreiben."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"influxdb-v18x"},"InfluxDB v1.8.x"),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"Erfordert mindestens InfluxDB 1.8.3")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Beispiel Influx v1"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"influx:\n  url: http://localhost:8086\n  database: evcc\n  # user:\n  # password:\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"influxdb-v2x"},"InfluxDB v2.x"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Beispiel Influx v2"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"influx:\n  url: http://localhost:8086\n  database: evcc # InfluxDB v2.x uses term `bucket` but for compatibility still named `database` here\n  token: 1234567890abcdef\n  org: home\n")))}d.isMDXComponent=!0}}]);