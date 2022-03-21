"use strict";(self.webpackChunkevcc_docs=self.webpackChunkevcc_docs||[]).push([[4907],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=p(t),m=i,g=s["".concat(c,".").concat(m)]||s[m]||d[m]||a;return t?r.createElement(g,l(l({ref:n},u),{},{components:t})):r.createElement(g,l({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=s;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},14826:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var r=t(87462),i=t(63366),a=(t(67294),t(3905)),l=["components"],o={sidebar_position:10},c="log, levels",p={unversionedId:"reference/configuration/log",id:"reference/configuration/log",title:"log, levels",description:"log",source:"@site/docs/reference/configuration/log.md",sourceDirName:"reference/configuration",slug:"/reference/configuration/log",permalink:"/docs/reference/configuration/log",editUrl:"https://github.com/evcc-io/docs/tree/main/docs/reference/configuration/log.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"interval",permalink:"/docs/reference/configuration/interval"},next:{title:"tariffs",permalink:"/docs/reference/configuration/tariffs"}},u={},d=[{value:"<code>log</code>",id:"log",level:2},{value:"<code>levels</code>",id:"levels",level:2}],s={toc:d};function m(e){var n=e.components,t=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"log-levels"},(0,a.kt)("inlineCode",{parentName:"h1"},"log, levels")),(0,a.kt)("h2",{id:"log"},(0,a.kt)("inlineCode",{parentName:"h2"},"log")),(0,a.kt)("p",null,"Definiert das Niveau der Protokollierung von Informationen auf der Konsole."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"M\xf6gliche Werte"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"error"),": Nur Nachrichten der Kategorie ",(0,a.kt)("inlineCode",{parentName:"li"},"error")," werden angezeigt. Das sind am wenigesten Nachrichten."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"warn"),": Beinhaltet ",(0,a.kt)("inlineCode",{parentName:"li"},"error"),", zus\xe4tzlich Nachrichten der Kategorie ",(0,a.kt)("inlineCode",{parentName:"li"},"warn")," angezeigt."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"info"),": Beinhaltet ",(0,a.kt)("inlineCode",{parentName:"li"},"warn"),", zus\xe4tzlich Nachrichten der Kategorie ",(0,a.kt)("inlineCode",{parentName:"li"},"info")," angezeigt."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"debug"),": Beinhaltet ",(0,a.kt)("inlineCode",{parentName:"li"},"info"),", zus\xe4tzlich Nachrichten der Kategorie ",(0,a.kt)("inlineCode",{parentName:"li"},"debug")," angezeigt. Dies ist f\xfcr die Fehleranalyse erforderlich."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"trace"),": Beinhaltet ",(0,a.kt)("inlineCode",{parentName:"li"},"debug"),", zus\xe4tzlich Nachrichten der Kategorie ",(0,a.kt)("inlineCode",{parentName:"li"},"trace")," angezeigt. Dies ist die detaillierteste Kategorie und kann zu sehr gro\xdfen Logdaten f\xfchren. In der Regel wird dies nicht ben\xf6tigt!")),(0,a.kt)("p",null,"Wenn evcc auf der Konsole ausgef\xfchrt wird, werden die ",(0,a.kt)("inlineCode",{parentName:"p"},"log")," Nachrichten einfach in die normale Ausgabe geleitet.",(0,a.kt)("br",{parentName:"p"}),"\n","Falls evcc als Linux Systemdienst ausgef\xfchrt wird, k\xf6nnen die Nachrichten \xfcber ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo journalctl -fau evcc")," verfolgt werden, siehe ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/faq#wie-kann-ich-ein-logfile-zur-fehleranalyse-erstellen"},"Logfile zur Fehleranalyse"),".",(0,a.kt)("br",{parentName:"p"}),"\n","Im Falle einer Docker Installation kann man \xfcber ",(0,a.kt)("inlineCode",{parentName:"p"},"docker logs")," die Nachrichten anzeigen lassen, siehe ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/config/containers/logging/"},"Docker Dokumentation"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"log: error\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"levels"},(0,a.kt)("inlineCode",{parentName:"h2"},"levels")),(0,a.kt)("p",null,"Erm\xf6glicht es f\xfcr verschiedene Komponenten von evcc das Protokollierung unterschiedlich einzustellen."),(0,a.kt)("p",null,"Definiert Niveaus der Protokollierung f\xfcr verschiedene evcc Komponenten"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"M\xf6gliche Komponenten"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"core"),": Die zentrale evcc Komponente (Regelung, Berechnungen, ...)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"lp-X"),": Der jeweilige Ladepunkt, wobei ",(0,a.kt)("inlineCode",{parentName:"li"},"X")," in der Reihenfolge der Konfiguration der ",(0,a.kt)("a",{parentName:"li",href:"loadpoints"},(0,a.kt)("inlineCode",{parentName:"a"},"loadpoints"))," (Ladepunkte) durchnummeriert ist, beginnend bei ",(0,a.kt)("inlineCode",{parentName:"li"},"1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sma"),": Die SMA HEMS Komponente, falls der SMA Sunnay Home Manager 2.0 per ",(0,a.kt)("a",{parentName:"li",href:"hems"},(0,a.kt)("inlineCode",{parentName:"a"},"hems"))," eingebunden ist"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"em"},"fahrzeugname")),": Jedes definierte ",(0,a.kt)("a",{parentName:"li",href:"vehicles"},(0,a.kt)("inlineCode",{parentName:"a"},"vehicle"))," (Fahrzeug), hier ist der jeweilige Wert des Parameters ",(0,a.kt)("a",{parentName:"li",href:"vehicles#name"},(0,a.kt)("inlineCode",{parentName:"a"},"name"))," anzugeben")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"M\xf6gliche Werte jede Komponente"),": Identisch zu den Werten von ",(0,a.kt)("a",{parentName:"p",href:"#log"},(0,a.kt)("inlineCode",{parentName:"a"},"log"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"levels:\n  core: debug\n  lp-1: debug\n  lp-2: debug\n")))}m.isMDXComponent=!0}}]);