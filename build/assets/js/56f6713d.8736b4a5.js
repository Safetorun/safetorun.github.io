"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[442],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=l(n),h=o,d=p["".concat(s,".").concat(h)]||p[h]||f[h]||c;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,i=new Array(c);i[0]=p;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var l=2;l<c;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7943:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return f}});var r=n(7462),o=n(3366),c=(n(7294),n(3905)),i=["components"],a={id:"combinechecks",title:"Combine checks",slug:"/combinechecks"},s=void 0,l={unversionedId:"checks/combinechecks",id:"checks/combinechecks",title:"Combine checks",description:"Safe to run (Default) provides the ability to combine multiple checks together, and also",source:"@site/docs/checks/combine_checks.md",sourceDirName:"checks",slug:"/combinechecks",permalink:"/safe_to_run/docs/combinechecks",editUrl:"https://github.com/safetorun/safe_to_run_docs/edit/master/docs/checks/combine_checks.md",tags:[],version:"current",frontMatter:{id:"combinechecks",title:"Combine checks",slug:"/combinechecks"},sidebar:"someSidebar",previous:{title:"Getting started",permalink:"/safe_to_run/docs/gettingstarted"},next:{title:"Root detection",permalink:"/safe_to_run/docs/rootdetection"}},u={},f=[{value:"Unless",id:"unless",level:3}],p={toc:f};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Safe to run (Default) provides the ability to combine multiple checks together, and also\nhave one check by passes to the check. For example, this rule:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-kotlin"},'safeToRunCombinedCheck(\n    listOf(\n        { bannedHardwareCheck("hardware") },\n        { bannedBoardCheck("board") }\n    )\n)\n')),(0,c.kt)("p",null,"Produces a check that will fail if either the hardware is 'hardware'\nor the board is 'board'"),(0,c.kt)("h3",{id:"unless"},"Unless"),(0,c.kt)("p",null,"An unless check is a second list of parameters, which if this doesn't fail (e.g. it returns\nfalse) will negate the failure in the first list. For example"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-kotlin"},"safeToRunCombinedCheck(\n    listOf { installOriginCheckWithDefaultsCheck() },\n    listOf { !BuildConfig.DEBUG }\n)\n")),(0,c.kt)("p",null,"If the install origins aren't the defaults (e.g. amazon or google play store) then the\ncheck will fail UNLESS we're running a debug build - in which case the check will pass"))}h.isMDXComponent=!0}}]);