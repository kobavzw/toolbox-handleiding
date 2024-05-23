"use strict";(self.webpackChunktoolbox_handleiding=self.webpackChunktoolbox_handleiding||[]).push([[1142],{75853:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var i=t(85893),a=t(11151);const s={title:"Salto",hide_title:!0},o=void 0,l={id:"salto/index",title:"Salto",description:"Salto",source:"@site/docs/salto/index.mdx",sourceDirName:"salto",slug:"/salto/",permalink:"/salto/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Salto",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"RL personeel",permalink:"/rl"},next:{title:"Schoolfoto's",permalink:"/schoolfotos"}},r={},d=[];function c(e){const n={a:"a",img:"img",li:"li",p:"p",ul:"ul",...(0,a.a)(),...e.components},{ImageTitle:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageTitle",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s,{img:"salto.png",children:"Salto"}),"\n",(0,i.jsx)(n.p,{children:"Door middel van een koppeling met Toolbox kan Salto automatisch (nieuwe) leraren \xe9n externen (die zijn aangemaakt in de module Synchronisatie Externen) aanmaken als Salto-gebruikers. Deze personen komen automatisch in Salto terecht en moeten enkel nog in de juiste groep worden gezet."}),"\n",(0,i.jsx)(n.p,{children:"Om Toolbox met Salto te kunnen synchroniseren, ga je als volgt te werk:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Ga in Toolbox naar de module Instellingen => Salto en geef een zelfgekozen CSV key in.\n",(0,i.jsx)(n.img,{alt:"salto2",src:t(96193).Z+"",width:"1221",height:"397"})]}),"\n",(0,i.jsxs)(n.li,{children:["Duid in deze module ook aan of je externen mee wil opnemen in het CSV bestand. Dit kan enkel voor externen die zijn aangemaakt via de module Synchronisatie Externen en waarvoor in die module het vinkje 'Salto' is aangezet bij alle externen die je mee wil opnemen in het bestand.\n",(0,i.jsx)(n.img,{alt:"salto7",src:t(59963).Z+"",width:"1609",height:"138"})]}),"\n",(0,i.jsx)(n.li,{children:"Maak op de Salto-server op de C-schijf een map aan C:\\Toolbox"}),"\n",(0,i.jsxs)(n.li,{children:["Plaats volgend PowerShell script in die map: ",(0,i.jsx)(n.a,{target:"_blank",href:t(71879).Z+"",children:"PowerShell script"})]}),"\n",(0,i.jsxs)(n.li,{children:["Wijzig het bestand:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Pas de URL van de Toolbox aan naar de URL van de eigen Toolbox (piusx.kobam.be => school.toolbox.be)."}),"\n",(0,i.jsx)(n.li,{children:"Wijzig de key (key=abc) naar de eigen gekozen key die je hebt ingevuld in Toolbox in de module Instellingen => Salto."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Maak een Windows taak aan die bv. elk uur loopt.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Als actie geef je mee: programma starten"}),"\n",(0,i.jsx)(n.li,{children:"Als Programma vul je Powershell.exe in."}),"\n",(0,i.jsx)(n.li,{children:"Bij argumenten: file C:\\Toolbox\\CsvOphalen.ps1"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Dit script haalt nu elk uur uit Toolbox alle personeelsleden en eventueel ook de externen waarvoor Salto is aangevinkt (in de module Synchronisatie externen)."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"salto3",src:t(29594).Z+"",width:"445",height:"477"}),"\n",(0,i.jsx)(n.img,{alt:"salto4",src:t(3e4).Z+"",width:"411",height:"143"}),"\n",(0,i.jsx)(n.img,{alt:"salto1",src:t(10862).Z+"",width:"1824",height:"1103"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Maak vervolgens in Salto een geplande taak aan waarmee je een import van gebruikers doet via CSV.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Als bestand vul je 'C:\\Toolbox\\ToolboxImportCSV.csv' in."}),"\n",(0,i.jsx)(n.li,{children:"De eerste rij sla je over en als bestandformaat vul je UTF8 in."}),"\n",(0,i.jsx)(n.li,{children:"Als scheidingsteken gebruik je custom ; (puntkomma)."}),"\n",(0,i.jsxs)(n.li,{children:["In de mapping gebruik je deze volgorde:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"1 = Ext ID"}),"\n",(0,i.jsx)(n.li,{children:"2 = Titel"}),"\n",(0,i.jsx)(n.li,{children:"3 = Achternaam"}),"\n",(0,i.jsx)(n.li,{children:"4 = Voornaam"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"salto5",src:t(51697).Z+"",width:"1212",height:"787"}),"\n",(0,i.jsx)(n.img,{alt:"salto6",src:t(22082).Z+"",width:"1195",height:"735"})]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},71879:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/files/CsvOphalen-198c2a171aafa637839bd04d443c583e.ps1"},10862:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/salto_01-b6ae007fd1460594799c9224ba29dafd.png"},96193:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/salto_02-c875d4f94b22ea8084720935f4040a8f.PNG"},29594:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/salto_03-3cf09715c86bc200d93f800eac5f9205.png"},3e4:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/salto_04-5534e81471d7778d91d50d3730897cac.png"},51697:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/salto_05-6a9efd3b28344f0efba6d18dbf272dd5.png"},22082:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/salto_06-3dab2baf389cb7a76538c07e4538954f.png"},59963:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/salto_07-d192bc6c1ed2e3f1622940e105aea93d.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>o});var i=t(67294);const a={},s=i.createContext(a);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);