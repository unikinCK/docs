"use strict";(self.webpackChunkevcc_docs=self.webpackChunkevcc_docs||[]).push([[10],{9409:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>o});var i=n(7462),r=(n(7294),n(3905));n(5657);const a={sidebar_position:13},l="eebus",c={unversionedId:"reference/configuration/eebus",id:"reference/configuration/eebus",title:"eebus",description:"EEBUS Unterst\xfctzung ist noch im experimentellen Stadium. Es wird hier sicher zu dem einen oder anderen Problem kommen!",source:"@site/docs/reference/configuration/eebus.md",sourceDirName:"reference/configuration",slug:"/reference/configuration/eebus",permalink:"/docs/reference/configuration/eebus",draft:!1,editUrl:"https://github.com/evcc-io/docs/tree/main/docs/reference/configuration/eebus.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"messaging",permalink:"/docs/reference/configuration/messaging"},next:{title:"mqtt",permalink:"/docs/reference/configuration/mqtt"}},s={},o=[{value:"Erforderliche Parameter",id:"erforderliche-parameter",level:2},{value:"<code>certificate</code>",id:"certificate",level:3},{value:"<code>certificate.public</code>",id:"certificatepublic",level:3},{value:"<code>certificate.private</code>",id:"certificateprivate",level:3},{value:"Optionale Parameter",id:"optionale-parameter",level:2},{value:"<code>interfaces</code>",id:"interfaces",level:3},{value:"<code>shipid</code>",id:"shipid",level:3}],d={toc:o},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"eebus"},(0,r.kt)("inlineCode",{parentName:"h1"},"eebus")),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"EEBUS Unterst\xfctzung ist noch im experimentellen Stadium. Es wird hier sicher zu dem einen oder anderen Problem kommen!")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"eebus:\n  shipid: EVCC-1234567890abcdef\n  interfaces:\n    - eth0\n  certificate:\n    public: |\n      -----BEGIN CERTIFICATE-----\n      1234567890abcdef==\n      -----END CERTIFICATE-----\n    private: |\n      -----BEGIN EC PRIVATE KEY-----\n      1234567890abcdef\n      -----END EC PRIVATE KEY-----\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"erforderliche-parameter"},"Erforderliche Parameter"),(0,r.kt)("h3",{id:"certificate"},(0,r.kt)("inlineCode",{parentName:"h3"},"certificate")),(0,r.kt)("p",null,"Definiert das zu verwendende Zertifikat und dessen privaten Schl\xfcssel f\xfcr die vorgeschriebene HTTPS Verbindung."),(0,r.kt)("p",null,"Dieses kann \xfcber ",(0,r.kt)("inlineCode",{parentName:"p"},"evcc eebus-cert")," erstellt werden."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"certificate:\n  public: |\n    -----BEGIN CERTIFICATE-----\n    1234567890abcdef==\n    -----END CERTIFICATE-----\n  private: |\n    -----BEGIN EC PRIVATE KEY-----\n    1234567890abcdef\n    -----END EC PRIVATE KEY-----\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"certificatepublic"},(0,r.kt)("inlineCode",{parentName:"h3"},"certificate.public")),(0,r.kt)("p",null,"Das \xf6ffentliche Zertifikat"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"public: |\n  -----BEGIN CERTIFICATE-----\n  1234567890abcdef==\n  -----END CERTIFICATE-----\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"certificateprivate"},(0,r.kt)("inlineCode",{parentName:"h3"},"certificate.private")),(0,r.kt)("p",null,"Der private Schl\xfcssel des Zertifikats"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"private: |\n  -----BEGIN EC PRIVATE KEY-----\n  1234567890abcdef\n  -----END EC PRIVATE KEY-----\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"optionale-parameter"},"Optionale Parameter"),(0,r.kt)("h3",{id:"interfaces"},(0,r.kt)("inlineCode",{parentName:"h3"},"interfaces")),(0,r.kt)("p",null,"Definiert eine Liste von Netzwerkschnittstellen, \xfcber welche EEBUS kommunizieren soll. Standardm\xe4\xdfig werden alle Schnittstellen verwendet, dies kann jedoch zu Kommunikationsproblemen f\xfchren."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"interfaces:\n  - eth0\n")),(0,r.kt)("h3",{id:"shipid"},(0,r.kt)("inlineCode",{parentName:"h3"},"shipid")),(0,r.kt)("p",null,"Hiermit kann die zu verwendende Ger\xe4te-ID (SKI) definiert werden."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"shipid: EVCC-1234567890abcdef\n")))}u.isMDXComponent=!0}}]);