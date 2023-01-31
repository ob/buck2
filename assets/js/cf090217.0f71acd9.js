"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3622],{3905:(t,e,r)=>{r.r(e),r.d(e,{MDXContext:()=>u,MDXProvider:()=>m,mdx:()=>_,useMDXComponents:()=>s,withMDXComponents:()=>p});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t},i.apply(this,arguments)}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var u=a.createContext({}),p=function(t){return function(e){var r=s(e.components);return a.createElement(t,i({},e,{components:r}))}},s=function(t){var e=a.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},m=function(t){var e=s(t.components);return a.createElement(u.Provider,{value:e},t.children)},h="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},f=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,o=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),p=s(r),m=n,h=p["".concat(o,".").concat(m)]||p[m]||d[m]||i;return r?a.createElement(h,l(l({ref:e},u),{},{components:r})):a.createElement(h,l({ref:e},u))}));function _(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l[h]="string"==typeof t?t:n,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},11932:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const i={},o="get_path_without_materialization",l={unversionedId:"generated/bxl/get_path_without_materialization",id:"generated/bxl/get_path_without_materialization",title:"get_path_without_materialization",description:"Members",source:"@site/../docs/generated/bxl/get_path_without_materialization.md",sourceDirName:"generated/bxl",slug:"/generated/bxl/get_path_without_materialization",permalink:"/docs/generated/bxl/get_path_without_materialization",draft:!1,tags:[],version:"current",frontMatter:{}},c={},u=[{value:"Members",id:"members",level:3},{value:"get_path_without_materialization",id:"get_path_without_materialization-1",level:2},{value:"Details",id:"details",level:3}],p={toc:u};function s(t){let{components:e,...r}=t;return(0,n.mdx)("wrapper",(0,a.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,n.mdx)("h1",{id:"get_path_without_materialization"},"get_path_without_materialization"),(0,n.mdx)("h3",{id:"members"},"Members"),(0,n.mdx)("table",{class:"starlark_table starlark_members_table"},(0,n.mdx)("thead",null,(0,n.mdx)("tr",null,(0,n.mdx)("th",null,"Member"),(0,n.mdx)("th",null,"Description"),(0,n.mdx)("th",null,"Type"))),(0,n.mdx)("tbody",null,(0,n.mdx)("tr",null,(0,n.mdx)("td",null,(0,n.mdx)("p",null,"get_path_without_materialization")),(0,n.mdx)("td",null,(0,n.mdx)("p",null,"The project relative path of the source or build artifact. Note that this method returns an artifact path without asking for the artifact to be materialized, (i.e. it may not actually exist on the disk yet).")),(0,n.mdx)("td",null,(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-python"},'(\n    this: "artifact",\n  ctx: "bxl_ctx"\n) -> str.type\n')))))),(0,n.mdx)("h2",{id:"get_path_without_materialization-1"},"get_path_without_materialization"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-python"},'def get_path_without_materialization(this: "artifact", ctx: "bxl_ctx") -> str.type\n')),(0,n.mdx)("p",null,"The project relative path of the source or build artifact. Note that this method returns an artifact path without asking for the artifact to be materialized, (i.e. it may not actually exist on the disk yet)."),(0,n.mdx)("h3",{id:"details"},"Details"),(0,n.mdx)("p",null,"This is a risky function to call because you may accidentally pass this path to further BXL actions\nthat expect the artifact to be materialized. If this happens, the BXL script will error out.\nIf you want the path without materialization for other uses that don\u2019t involve passing them into\nfurther actions, then it\u2019s safe."),(0,n.mdx)("p",null,"Sample usage:"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-text"},'def _impl_get_path_without_materialization(ctx):\n    owner = ctx.cquery().owner("cell//path/to/file")[0]\n    artifact = owner.get_source("cell//path/to/file", ctx)\n    source_artifact_project_rel_path = get_path_without_materialization(artifact, ctx)\n    ctx.output.print(source_artifact_project_rel_path) # Note this artifact is NOT ensured or materialized\n')))}s.isMDXComponent=!0}}]);