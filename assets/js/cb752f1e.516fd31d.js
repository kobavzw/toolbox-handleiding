"use strict";(self.webpackChunktoolbox_handleiding=self.webpackChunktoolbox_handleiding||[]).push([[9606],{51170:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var r=i(74848),s=i(28453);const t={title:"Synchronisatie leerlingen (basisschool) en internaten",hide_title:!0},a=void 0,o={id:"synchronisatie/synchronisatie_lln/index",title:"Synchronisatie leerlingen (basisschool) en internaten",description:"Synchronisatie leerlingen",source:"@site/docs/synchronisatie/1-synchronisatie_lln/index.mdx",sourceDirName:"synchronisatie/1-synchronisatie_lln",slug:"/synchronisatie/synchronisatie_lln/",permalink:"/synchronisatie/synchronisatie_lln/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Synchronisatie leerlingen (basisschool) en internaten",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"Sychronisatiemodules",permalink:"/synchronisatie"},next:{title:"Synchronisatie leraren",permalink:"/synchronisatie/synchronisatie_leraren/"}},l={},d=[{value:"Gegevens uit Informat ophalen",id:"gegevens-uit-informat-ophalen",level:2},{value:"Gegevens uit Wisa ophalen",id:"gegevens-uit-wisa-ophalen",level:2}];function g(e){const n={a:"a",h2:"h2",li:"li",ol:"ol",p:"p",...(0,s.R)(),...e.components},{ImageTitle:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageTitle",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i,{img:"leerlingen.png",children:"Synchronisatie leerlingen"}),"\n",(0,r.jsx)(i,{img:"basisschool.png",children:"leerlingen basisschool"}),"\n",(0,r.jsx)(i,{img:"internaat.png",children:"leerlingen internaat"}),"\n",(0,r.jsx)(n.p,{children:"Deze synchronisatiemodules halen gegevens van leerlingen op uit Informat of Wisa. In de module Instellingen > Synchronisatie leerlingen kan je instellen uit welke software de gegevens moeten komen."}),"\n",(0,r.jsx)(n.p,{children:"Toolbox maakt gebruik van het intern nummer/pointer uit Informat of Wisa. Bij Informat is die sowieso uniek, bij Wisa kan die nummering door elkaar lopen. Om dat op te lossen kan een prefix gedefinieerd worden die voor de pointer wordt gezet. Op die manier kunnen leraren en leerlingen uit elkaar gehouden worden."}),"\n",(0,r.jsx)(n.p,{children:"Na het ophalen van de gegevens worden gebruikersnamen aangemaakt. Het formaat kan je ook in de instellingen instellen. Het is ook mogelijk om een maximale lengte in te stellen: gebruikersnamen worden dan ingekort. Staat de lengte op 0, dan is er geen limiet."}),"\n",(0,r.jsx)(n.p,{children:"Het synchroniseren gebeurt altijd in twee stappen:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Informat/Wisa uitlezen = het ophalen van de gegevens uit Informat of Wisa"}),"\n",(0,r.jsx)(n.li,{children:"Synchroniseer leerlingen = het intern synchroniseren/gegevens overzetten naar Toolbox"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Daarna kan er gesynchroniseerd worden met andere software al naargelang die optie is aangevinkt in de instellingen."}),"\n",(0,r.jsx)(n.p,{children:"Via PDF afdrukken kan je de gebruikersnamen en wachtwoorden voor de leraren afdrukken."}),"\n",(0,r.jsx)(n.h2,{id:"gegevens-uit-informat-ophalen",children:"Gegevens uit Informat ophalen"}),"\n",(0,r.jsx)(n.p,{children:"Het ophalen van gegevens uit Informat gebeurt via de webservices van Informat. Hiervoor zijn drie WSDLs voorzien:"}),"\n",(0,r.jsxs)(n.p,{children:["Algemeen\n",(0,r.jsx)(n.a,{href:"https://webservice.informatsoftware.be/wsInfSoft/wsInformat.asmx?wsdl",children:"https://webservice.informatsoftware.be/wsInfSoft/wsInformat.asmx?wsdl"})]}),"\n",(0,r.jsxs)(n.p,{children:["Leerlingen\n",(0,r.jsx)(n.a,{href:"https://webservice.informatsoftware.be/wsInfSoftLeerlingen.asmx?wsdl",children:"https://webservice.informatsoftware.be/wsInfSoftLeerlingen.asmx?wsdl"})]}),"\n",(0,r.jsxs)(n.p,{children:["Leraren\n",(0,r.jsx)(n.a,{href:"https://webservice.informatsoftware.be/wsInfSoftpersoneel.asmx?wsdl",children:"https://webservice.informatsoftware.be/wsInfSoftpersoneel.asmx?wsdl"})]}),"\n",(0,r.jsx)(n.p,{children:"Om de gegevens op te kunnen halen, moet in Informat een gebruiker worden aangemaakt. Die moet in een Toegangsgroep (niet in een Programmagroep) zitten met leesrechten op de nodige instellingen.\nBelangrijk: na het aanmaken van die gebruiker, vraag je via de Informat helpdesk om deze gebruiker te koppelen aan de webservices, incl. de KOBAM webservices."}),"\n",(0,r.jsx)(n.p,{children:"In de instellingen vul je zeker ook de instellingsnummers in waarvoor je gegevens wenst op te halen."}),"\n",(0,r.jsx)(n.p,{children:"Als de verschillende instellingsnummers bij Informat in \xe9\xe9n databank zitten \xe9n de aangemaakte gebruiker heeft rechten op al die instellingsnummers, zullen de gegevens zonder problemen doorkomen."}),"\n",(0,r.jsx)(n.p,{children:"Heb je echter een gebruiker die geen toegang heeft tot alle instellingsnummers, dan kan je in de instellingen bijkomende gebruikers/paswoorden opgeven. In de configuratie gebruikers webservice kan je dan aangeven voor welke instellingsnummers een andere gebruiker moet gebruikt worden dan de standaard gebruiker."}),"\n",(0,r.jsx)(n.p,{children:"Bijvoorbeeld: voor de instellingsnummers 117093 en 048728 moet een andere gebruiker worden gebruikt dan de standaard gebruiker die is ingevuld bij Gebruiker webservice Informat. Dan voeg je die bijkomende gebruiker bij Gebruiker/paswoord webservice Informat 2 toe."}),"\n",(0,r.jsx)(n.p,{children:"In de configuratie zet je deze regels:"}),"\n",(0,r.jsx)(n.p,{children:"117093=2;\n048728=2;"}),"\n",(0,r.jsx)(n.p,{children:"Die regels zeggen dat voor die twee instellingsnummers de tweede gebruiker/paswoord moet worden gebruikt."}),"\n",(0,r.jsx)(n.h2,{id:"gegevens-uit-wisa-ophalen",children:"Gegevens uit Wisa ophalen"}),"\n",(0,r.jsx)(n.p,{children:"Om gegevens uit Wisa op te halen, moeten er enkele stappen doorlopen worden:"}),"\n",(0,r.jsx)(n.p,{children:"Zorg dat de Wisa webservices ge\xefnstalleerd staan op de Wisa server. Staat de server bij Wisa, dan mag je deze stap overslaan. Staat de server in jouw school, dan moet je deze stap zeker nakijken.\nHandleiding hiervoor: WISA_API_Service.pdf\nIn het Querybeheer moeten 3 queries worden toegevoegd:\nLeerlingen algemene informatie\nLeerlingen loopbanen\nLeerlingen bijkomende informatie\nPersoneel"}),"\n",(0,r.jsxs)(n.p,{children:["De inhoud van deze queries wordt bij de opstart van Toolbox doorgestuurd.\nIn de instellingen van Toolbox - Wisa vul je bij Queries de namen van de verschillende queries in. TB_LLN, TB_LLNLB, TB_LLNDATA en TB_PERS zijn de standaard namen.\nIn Wisa maak je een gebruiker aan die leesrechten heeft op de nodige instellingsnummers. De credentials van die gebruiker vul je in bij Instellingen - Wisa - Authenticatie.\nVul ook de naam van de databank in alsook de SOAP url van de webservice. Die ziet er meestal zo uit: ",(0,r.jsx)(n.a,{href:"http://londen.wisa-asp.net:8080/SOAP?service=WisaAPIService",children:"http://londen.wisa-asp.net:8080/SOAP?service=WisaAPIService"}),"\nAls dat is gebeurd, komen de huidige leerlingen en leraren binnen via de synchronisatie."]}),"\n",(0,r.jsx)(n.p,{children:"Wil je de leerlingen/personeel van een andere datum opvragen, dan vul je bij de Synchronisatiedata (instellingen - Wisa) de gewenste datum in. Op die manier kan je bijvoorbeeld eind augustus al de leerlingen die in september beginnen opvragen."})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var r=i(96540);const s={},t=r.createContext(s);function a(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);