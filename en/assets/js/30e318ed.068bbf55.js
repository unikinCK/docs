"use strict";(self.webpackChunkevcc_docs=self.webpackChunkevcc_docs||[]).push([[7736],{4684:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=t(7462),r=(t(7294),t(3905));t(8209);const i={sidebar_position:3},l="macOS",o={unversionedId:"installation/macos",id:"installation/macos",title:"macOS",description:"Versions of macOS older than 10.12 (Sierra) are not supported.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/installation/macos.md",sourceDirName:"installation",slug:"/installation/macos",permalink:"/en/docs/installation/macos",draft:!1,editUrl:"https://github.com/evcc-io/docs/tree/main/docs/installation/macos.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Linux (Debian, Ubuntu, Raspberry Pi)",permalink:"/en/docs/installation/linux"},next:{title:"Docker / containerd",permalink:"/en/docs/installation/docker"}},p={},s=[{value:"Installation",id:"installation",level:2},{value:"Upgrades",id:"upgrades",level:2}],c={toc:s},m="wrapper";function k(e){let{components:a,...t}=e;return(0,r.kt)(m,(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"macos"},"macOS"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Versions of macOS older than 10.12 (Sierra) are not supported.")),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Open a terminal")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Install ",(0,r.kt)("a",{parentName:"p",href:"https://brew.sh"},"Homebrew"),", if you don't already have it")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Add our tap:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"brew tap evcc-io/tap\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Update package lists l:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"brew update\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Install evcc:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"brew install evcc\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Start the evcc server:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"brew services start evcc\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Now check the installation by opening a browser to ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:7070"),". You should see the evcc web interface in demo mode.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Stop the evcc server:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"brew services stop evcc\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You can now start the configuration wizard - simply follow the prompts in your terminal!"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"evcc configure\n")),(0,r.kt)("p",{parentName:"li"},"Once all devices are configured, you can continue on."),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Advanced users (those with evcc experience & some technical know-how) might want to use the advanced configurator:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"evcc configure --advanced\n")),(0,r.kt)("p",{parentName:"admonition"},"This mode offers some further, more technically-involved options."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Test to make sure your new configuration works:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"evcc -c evcc.yaml\n")),(0,r.kt)("p",{parentName:"li"},"Open a browser and head to ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:7070"),": the evcc interface should now show your own devices.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If everything's working, press ",(0,r.kt)("inlineCode",{parentName:"p"},"CTRL+C")," to stop the server.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Move the generated configuration to its home:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo mv evcc.yaml /etc\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Start the evcc server:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"brew services start evcc\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Go back to your browser and refresh to make sure everything's working as it should be!"))),(0,r.kt)("h2",{id:"upgrades"},"Upgrades"),(0,r.kt)("p",null,"To upgrade to the latest release:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Open a terminal")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Update package lists:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"brew update\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Upgrade evcc:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"brew install evcc\n")))))}k.isMDXComponent=!0}}]);