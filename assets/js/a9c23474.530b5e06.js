"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1175],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>i,MDXProvider:()=>m,mdx:()=>f,useMDXComponents:()=>p,withMDXComponents:()=>u});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),u=function(e){return function(t){var n=p(t.components);return r.createElement(e,o({},t,{components:n}))}},p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",x={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,a=e.parentName,i=d(e,["components","mdxType","originalType","parentName"]),u=p(n),m=l,c=u["".concat(a,".").concat(m)]||u[m]||x[m]||o;return n?r.createElement(c,s(s({ref:t},i),{},{components:n})):r.createElement(c,s({ref:t},i))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=h;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[c]="string"==typeof e?e:l,a[1]=s;for(var i=2;i<o;i++)a[i]=n[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},87229:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var r=n(87462),l=(n(67294),n(3905));const o={},a="ExternalRunnerTestInfo",s={unversionedId:"generated/native/providers/ExternalRunnerTestInfo",id:"generated/native/providers/ExternalRunnerTestInfo",title:"ExternalRunnerTestInfo",description:"Provider that signals that a rule can be tested using an external runner. This is the Buck1-compatible API for tests.",source:"@site/../docs/generated/native/providers/ExternalRunnerTestInfo.md",sourceDirName:"generated/native/providers",slug:"/generated/native/providers/ExternalRunnerTestInfo",permalink:"/docs/generated/native/providers/ExternalRunnerTestInfo",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"manualSidebar",previous:{title:"ExecutionPlatformRegistrationInfo",permalink:"/docs/generated/native/providers/ExecutionPlatformRegistrationInfo"},next:{title:"InstallInfo",permalink:"/docs/generated/native/providers/InstallInfo"}},d={},i=[{value:"Members",id:"members",level:3},{value:"command : <code>[[str.type, &quot;&quot;]]</code>",id:"command--strtype-",level:2},{value:"contacts : <code>[str.type]</code>",id:"contacts--strtype",level:2},{value:"default_executor : <code>&quot;command_executor_config&quot;</code>",id:"default_executor--command_executor_config",level:2},{value:"env : <code>{str.type: &quot;&quot;}</code>",id:"env--strtype-",level:2},{value:"executor_overrides : <code>{str.type: &quot;command_executor_config&quot;}</code>",id:"executor_overrides--strtype-command_executor_config",level:2},{value:"labels : <code>[str.type]</code>",id:"labels--strtype",level:2},{value:"run_from_project_root : <code>[bool.type]</code>",id:"run_from_project_root--booltype",level:2},{value:"test_type : <code>str.type</code>",id:"test_type--strtype",level:2},{value:"use_project_relative_paths : <code>[bool.type]</code>",id:"use_project_relative_paths--booltype",level:2}],u={toc:i};function p(e){let{components:t,...n}=e;return(0,l.mdx)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"externalrunnertestinfo"},"ExternalRunnerTestInfo"),(0,l.mdx)("p",null,"Provider that signals that a rule can be tested using an external runner. This is the Buck1-compatible API for tests."),(0,l.mdx)("h3",{id:"members"},"Members"),(0,l.mdx)("table",{class:"starlark_table starlark_members_table"},(0,l.mdx)("thead",null,(0,l.mdx)("tr",null,(0,l.mdx)("th",null,"Member"),(0,l.mdx)("th",null,"Description"),(0,l.mdx)("th",null,"Type"))),(0,l.mdx)("tbody",null,(0,l.mdx)("tr",null,(0,l.mdx)("td",null,(0,l.mdx)("p",null,"command")),(0,l.mdx)("td",null,(0,l.mdx)("p",null,"A Starlark value representing the command for this test. The external test runner is what gives meaning to this command. This is of type [",'[str.type, "_arglike"]',"]")),(0,l.mdx)("td",null,(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'[[str.type, ""]]\n')))),(0,l.mdx)("tr",null,(0,l.mdx)("td",null,(0,l.mdx)("p",null,"contacts")),(0,l.mdx)("td",null,(0,l.mdx)("p",null,"A starlark value representing the contacts for this test. This is largely expected to be an oncall, though it's not validated in any way. This is of type ","[str.type]")),(0,l.mdx)("td",null,(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},"[str.type]\n")))),(0,l.mdx)("tr",null,(0,l.mdx)("td",null,(0,l.mdx)("p",null,"default_executor")),(0,l.mdx)("td",null,(0,l.mdx)("p",null,"Defaul executor to use to run tests.  This is of type CommandExecutorConfig. If none is passed we will default to the execution platform.")),(0,l.mdx)("td",null,(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'"command_executor_config"\n')))),(0,l.mdx)("tr",null,(0,l.mdx)("td",null,(0,l.mdx)("p",null,"env")),(0,l.mdx)("td",null,(0,l.mdx)("p",null,"A Starlark value representing the environment for this test. Here again, the external test runner is what will this meaning. This is of type {str.type: _arglike}")),(0,l.mdx)("td",null,(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'{str.type: ""}\n')))),(0,l.mdx)("tr",null,(0,l.mdx)("td",null,(0,l.mdx)("p",null,"executor_overrides")),(0,l.mdx)("td",null,(0,l.mdx)("p",null,"Executors that Tpx can use to override the default executor. This is of type {str.type: CommandExecutorConfig}")),(0,l.mdx)("td",null,(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'{str.type: "command_executor_config"}\n')))),(0,l.mdx)("tr",null,(0,l.mdx)("td",null,(0,l.mdx)("p",null,"labels")),(0,l.mdx)("td",null,(0,l.mdx)("p",null,"A starlark value representing the labels for this test. This is of type ","[str.type]")),(0,l.mdx)("td",null,(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},"[str.type]\n")))),(0,l.mdx)("tr",null,(0,l.mdx)("td",null,(0,l.mdx)("p",null,"run_from_project_root")),(0,l.mdx)("td",null,(0,l.mdx)("p",null,"Whether this test should run from the project root, as opposed to the cell root. The default is not to. This is of type ","[bool.type]")),(0,l.mdx)("td",null,(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},"[bool.type]\n")))),(0,l.mdx)("tr",null,(0,l.mdx)("td",null,(0,l.mdx)("p",null,"test_type")),(0,l.mdx)("td",null,(0,l.mdx)("p",null,"A Starlark value representing the type of this test. This is of type str.type")),(0,l.mdx)("td",null,(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},"str.type\n")))),(0,l.mdx)("tr",null,(0,l.mdx)("td",null,(0,l.mdx)("p",null,"use_project_relative_paths")),(0,l.mdx)("td",null,(0,l.mdx)("p",null,"Whether this test should use relative paths. The default is not to. This is of type ","[bool.type]")),(0,l.mdx)("td",null,(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},"[bool.type]\n")))))),(0,l.mdx)("h2",{id:"command--strtype-"},"command : ",(0,l.mdx)("inlineCode",{parentName:"h2"},'[[str.type, ""]]')),(0,l.mdx)("p",null,"A Starlark value representing the command for this test. The external test runner is what gives meaning to this command. This is of type [",'[str.type, "_arglike"]',"]"),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"contacts--strtype"},"contacts : ",(0,l.mdx)("inlineCode",{parentName:"h2"},"[str.type]")),(0,l.mdx)("p",null,"A starlark value representing the contacts for this test. This is largely expected to be an oncall, though it's not validated in any way. This is of type ","[str.type]"),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"default_executor--command_executor_config"},"default_executor : ",(0,l.mdx)("inlineCode",{parentName:"h2"},'"command_executor_config"')),(0,l.mdx)("p",null,"Defaul executor to use to run tests.  This is of type CommandExecutorConfig. If none is passed we will default to the execution platform."),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"env--strtype-"},"env : ",(0,l.mdx)("inlineCode",{parentName:"h2"},'{str.type: ""}')),(0,l.mdx)("p",null,"A Starlark value representing the environment for this test. Here again, the external test runner is what will this meaning. This is of type {str.type: _arglike}"),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"executor_overrides--strtype-command_executor_config"},"executor_overrides : ",(0,l.mdx)("inlineCode",{parentName:"h2"},'{str.type: "command_executor_config"}')),(0,l.mdx)("p",null,"Executors that Tpx can use to override the default executor. This is of type {str.type: CommandExecutorConfig}"),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"labels--strtype"},"labels : ",(0,l.mdx)("inlineCode",{parentName:"h2"},"[str.type]")),(0,l.mdx)("p",null,"A starlark value representing the labels for this test. This is of type ","[str.type]"),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"run_from_project_root--booltype"},"run_from_project_root : ",(0,l.mdx)("inlineCode",{parentName:"h2"},"[bool.type]")),(0,l.mdx)("p",null,"Whether this test should run from the project root, as opposed to the cell root. The default is not to. This is of type ","[bool.type]"),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"test_type--strtype"},"test_type : ",(0,l.mdx)("inlineCode",{parentName:"h2"},"str.type")),(0,l.mdx)("p",null,"A Starlark value representing the type of this test. This is of type str.type"),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"use_project_relative_paths--booltype"},"use_project_relative_paths : ",(0,l.mdx)("inlineCode",{parentName:"h2"},"[bool.type]")),(0,l.mdx)("p",null,"Whether this test should use relative paths. The default is not to. This is of type ","[bool.type]"))}p.isMDXComponent=!0}}]);