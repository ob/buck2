"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9817],{34228:(e,t,n)=>{n.r(t),n.d(t,{default:()=>I});var a=n(67294),l=n(1944),i=n(53438),r=n(44996),s=n(86010),o=n(39960),c=n(13919),d=n(95999);const m="cardContainer_fWXF",u="cardTitle_rnsV",h="cardDescription_PWke";function v(e){let{href:t,children:n}=e;return a.createElement(o.default,{href:t,className:(0,s.default)("card padding--lg",m)},n)}function f(e){let{href:t,icon:n,title:l,description:i}=e;return a.createElement(v,{href:t},a.createElement("h2",{className:(0,s.default)("text--truncate",u),title:l},n," ",l),i&&a.createElement("p",{className:(0,s.default)("text--truncate",h),title:i},i))}function g(e){let{item:t}=e;const n=(0,i.Wl)(t);return n?a.createElement(f,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,d.translate)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function b(e){let{item:t}=e;const n=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,i.xz)(t.docId??void 0);return a.createElement(f,{href:t.href,icon:n,title:t.label,description:l?.description})}function E(e){let{item:t}=e;switch(t.type){case"link":return a.createElement(b,{item:t});case"category":return a.createElement(g,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function p(e){let{className:t}=e;const n=(0,i.jA)();return a.createElement(N,{items:n.items,className:t})}function N(e){const{items:t,className:n}=e;if(!t)return a.createElement(p,e);const l=(0,i.MN)(t);return a.createElement("section",{className:(0,s.default)("row",n)},l.map(((e,t)=>a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(E,{item:e})))))}var k=n(4966),L=n(23120),T=n(44364),_=n(19089),x=n(92503);const w="generatedIndexPage_vN6x",y="list_eTzJ",Z="title_kItE";function V(e){let{categoryGeneratedIndex:t}=e;return a.createElement(l.d,{title:t.title,description:t.description,keywords:t.keywords,image:(0,r.default)(t.image)})}function C(e){let{categoryGeneratedIndex:t}=e;const n=(0,i.jA)();return a.createElement("div",{className:w},a.createElement(L.Z,null),a.createElement(_.Z,null),a.createElement(T.Z,null),a.createElement("header",null,a.createElement(x.Z,{as:"h1",className:Z},t.title),t.description&&a.createElement("p",null,t.description)),a.createElement("article",{className:"margin-top--lg"},a.createElement(N,{items:n.items,className:y})),a.createElement("footer",{className:"margin-top--lg"},a.createElement(k.Z,{previous:t.navigation.previous,next:t.navigation.next})))}function I(e){return a.createElement(a.Fragment,null,a.createElement(V,e),a.createElement(C,e))}},4966:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(87462),l=n(67294),i=n(95999),r=n(86010),s=n(39960);function o(e){const{permalink:t,title:n,subLabel:a,isNext:i}=e;return l.createElement(s.default,{className:(0,r.default)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},a&&l.createElement("div",{className:"pagination-nav__sublabel"},a),l.createElement("div",{className:"pagination-nav__label"},n))}function c(e){const{previous:t,next:n}=e;return l.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.translate)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&l.createElement(o,(0,a.Z)({},t,{subLabel:l.createElement(i.default,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&l.createElement(o,(0,a.Z)({},n,{subLabel:l.createElement(i.default,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},44364:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),l=n(86010),i=n(95999),r=n(35281),s=n(74477);function o(e){let{className:t}=e;const n=(0,s.E)();return n.badge?a.createElement("span",{className:(0,l.default)(t,r.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(i.default,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}},23120:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(67294),l=n(86010),i=n(52263),r=n(39960),s=n(95999),o=n(94104),c=n(35281),d=n(60373),m=n(74477);const u={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(s.default,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(s.default,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function h(e){const t=u[e.versionMetadata.banner];return a.createElement(t,e)}function v(e){let{versionLabel:t,to:n,onClick:l}=e;return a.createElement(s.default,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(r.default,{to:n,onClick:l},a.createElement(s.default,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function f(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:r}}=(0,i.default)(),{pluginId:s}=(0,o.gA)({failfast:!0}),{savePreferredVersionName:m}=(0,d.J)(s),{latestDocSuggestion:u,latestVersionSuggestion:f}=(0,o.Jo)(s),g=u??(b=f).docs.find((e=>e.id===b.mainDocId));var b;return a.createElement("div",{className:(0,l.default)(t,c.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(h,{siteTitle:r,versionMetadata:n})),a.createElement("div",{className:"margin-top--md"},a.createElement(v,{versionLabel:f.label,to:g.path,onClick:()=>m(f.name)})))}function g(e){let{className:t}=e;const n=(0,m.E)();return n.banner?a.createElement(f,{className:t,versionMetadata:n}):null}},92503:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(87462),l=n(67294),i=n(86010),r=n(95999),s=n(86668);const o="anchorWithStickyNavbar_LWe7",c="anchorWithHideOnScrollNavbar_WYt5";function d(e){let{as:t,id:n,...d}=e;const{navbar:{hideOnScroll:m}}=(0,s.L)();return"h1"!==t&&n?l.createElement(t,(0,a.Z)({},d,{className:(0,i.default)("anchor",m?c:o),id:n}),d.children,l.createElement("a",{className:"hash-link",href:`#${n}`,title:(0,r.translate)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):l.createElement(t,(0,a.Z)({},d,{id:void 0}))}},19089:(e,t)=>{t.Z=function(){return null}}}]);