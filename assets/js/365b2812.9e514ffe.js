"use strict";(self.webpackChunkdocusaurus_step_by_step=self.webpackChunkdocusaurus_step_by_step||[]).push([[7240],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),i=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=i(r),m=n,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return r?a.createElement(b,l(l({ref:t},p),{},{components:r})):a.createElement(b,l({ref:t},p))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:n,l[1]=c;for(var i=2;i<o;i++)l[i]=r[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1521:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:1},l="SOP Developer",c={unversionedId:"examples/sop-develop",id:"examples/sop-develop",title:"SOP Developer",description:'Case: adding "SandBox/" directory with `git clone` in docubase',source:"@site/docs/examples/sop-develop.md",sourceDirName:"examples",slug:"/examples/sop-develop",permalink:"/docusaurus-step-by-step/docs/examples/sop-develop",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/examples/sop-develop.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Examples",permalink:"/docusaurus-step-by-step/docs/category/examples"},next:{title:"SOP Merging to Master",permalink:"/docusaurus-step-by-step/docs/examples/sop-merging"}},s={},i=[{value:"Clone the project",id:"clone-the-project",level:3},{value:"Enter the project",id:"enter-the-project",level:3},{value:"Setup local development",id:"setup-local-development",level:3},{value:"Disable CRLF EOF",id:"disable-crlf-eof",level:4},{value:"Install Dependencies",id:"install-dependencies",level:4},{value:"Create new branch",id:"create-new-branch",level:3},{value:"Create SandBox Directory",id:"create-sandbox-directory",level:3},{value:"Create file in the SandBox Directory",id:"create-file-in-the-sandbox-directory",level:3},{value:"Push changes",id:"push-changes",level:3}],p={toc:i},d="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"sop-developer"},"SOP Developer"),(0,n.kt)("p",null,'Case: adding "SandBox/" directory with ',(0,n.kt)("inlineCode",{parentName:"p"},"git clone")," in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/cbk2000/docubase"},"docubase")),(0,n.kt)("h3",{id:"clone-the-project"},"Clone the project"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:cbk2000/docubase.git\n")),(0,n.kt)("h3",{id:"enter-the-project"},"Enter the project"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd docubase\n")),(0,n.kt)("h3",{id:"setup-local-development"},"Setup local development"),(0,n.kt)("h4",{id:"disable-crlf-eof"},"Disable CRLF EOF"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git config --global core.autocrlf false\n")),(0,n.kt)("h4",{id:"install-dependencies"},"Install Dependencies"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yarn\n")),(0,n.kt)("h3",{id:"create-new-branch"},"Create new branch"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout -b feat/sandbox\n")),(0,n.kt)("h3",{id:"create-sandbox-directory"},"Create SandBox Directory"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir SandBox\n")),(0,n.kt)("h3",{id:"create-file-in-the-sandbox-directory"},"Create file in the SandBox Directory"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd SandBox\ntouch README.md\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"*Needed so that git keeps track of the changes, empty directories by default will get ignored by git")),(0,n.kt)("h3",{id:"push-changes"},"Push changes"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'git add .\ngit commit -m "Added SandBox Directory in Root"\ngit push origin feat/sandbox\n')))}u.isMDXComponent=!0}}]);