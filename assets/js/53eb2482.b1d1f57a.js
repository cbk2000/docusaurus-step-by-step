"use strict";(self.webpackChunkdocusaurus_step_by_step=self.webpackChunkdocusaurus_step_by_step||[]).push([[1585],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,g=p["".concat(i,".").concat(m)]||p[m]||d[m]||s;return r?n.createElement(g,a(a({ref:t},l),{},{components:r})):n.createElement(g,a({ref:t},l))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[p]="string"==typeof e?e:o,a[1]=u;for(var c=2;c<s;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8367:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const s={sidebar_position:1},a="File Structure",u={unversionedId:"tutorial-writing/file-structure",id:"tutorial-writing/file-structure",title:"File Structure",description:"The following is the file structure of a docusaurus directory",source:"@site/docs/tutorial-writing/file-structure.md",sourceDirName:"tutorial-writing",slug:"/tutorial-writing/file-structure",permalink:"/docusaurus-step-by-step/docs/tutorial-writing/file-structure",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-writing/file-structure.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tutorial - Writing",permalink:"/docusaurus-step-by-step/docs/category/tutorial---writing"},next:{title:"Create a Document",permalink:"/docusaurus-step-by-step/docs/tutorial-writing/create-a-document"}},i={},c=[],l={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"file-structure"},"File Structure"),(0,o.kt)("p",null,"The following is the file structure of a ",(0,o.kt)("inlineCode",{parentName:"p"},"docusaurus")," directory"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="tree my-first-docusaurus"',title:'"tree','my-first-docusaurus"':!0},".\n\u251c\u2500\u2500 babel.config.js\n\u251c\u2500\u2500 blog\n\u2502\xa0\xa0 \u251c\u2500\u2500 2019-05-28-first-blog-post.md\n\u2502\xa0\xa0 \u251c\u2500\u2500 2019-05-29-long-blog-post.md\n\u2502\xa0\xa0 \u251c\u2500\u2500 2021-08-01-mdx-blog-post.mdx\n\u2502\xa0\xa0 \u251c\u2500\u2500 2021-08-26-welcome\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 docusaurus-plushie-banner.jpeg\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 index.md\n\u2502\xa0\xa0 \u2514\u2500\u2500 authors.yml\n\u251c\u2500\u2500 docs\n\u2502\xa0\xa0 \u251c\u2500\u2500 intro.md\n\u2502\xa0\xa0 \u251c\u2500\u2500 tutorial-basics\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 _category_.json\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 congratulations.md\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 create-a-blog-post.md\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 create-a-document.md\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 create-a-page.md\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 deploy-your-site.md\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 markdown-features.mdx\n\u2502\xa0\xa0 \u2514\u2500\u2500 tutorial-extras\n\u2502\xa0\xa0     \u251c\u2500\u2500 _category_.json\n\u2502\xa0\xa0     \u251c\u2500\u2500 img\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u251c\u2500\u2500 docsVersionDropdown.png\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2514\u2500\u2500 localeDropdown.png\n\u2502\xa0\xa0     \u251c\u2500\u2500 manage-docs-versions.md\n\u2502\xa0\xa0     \u2514\u2500\u2500 translate-your-site.md\n\u251c\u2500\u2500 docusaurus.config.js\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 package-lock.json\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 sidebars.js\n\u251c\u2500\u2500 src\n\u2502\xa0\xa0 \u251c\u2500\u2500 components\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 HomepageFeatures\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u251c\u2500\u2500 index.js\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u2514\u2500\u2500 styles.module.css\n\u2502\xa0\xa0 \u251c\u2500\u2500 css\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 custom.css\n\u2502\xa0\xa0 \u2514\u2500\u2500 pages\n\u2502\xa0\xa0     \u251c\u2500\u2500 index.js\n\u2502\xa0\xa0     \u251c\u2500\u2500 index.module.css\n\u2502\xa0\xa0     \u2514\u2500\u2500 markdown-page.md\n\u2514\u2500\u2500 static\n    \u2514\u2500\u2500 img\n        \u251c\u2500\u2500 docusaurus.png\n        \u251c\u2500\u2500 docusaurus-social-card.jpg\n        \u251c\u2500\u2500 favicon.ico\n        \u251c\u2500\u2500 logo.svg\n        \u251c\u2500\u2500 undraw_docusaurus_mountain.svg\n        \u251c\u2500\u2500 undraw_docusaurus_react.svg\n        \u2514\u2500\u2500 undraw_docusaurus_tree.svg\n")))}d.isMDXComponent=!0}}]);