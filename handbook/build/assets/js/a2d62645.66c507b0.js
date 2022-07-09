"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[2232],{3893:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return c}});var i=n(3117),r=n(102),a=(n(7294),n(3905)),o=n(1402),l=["components"],p={id:"deploy-iis",title:"34.1 \u5728 IIS \u90e8\u7f72",sidebar_label:"34.1 \u5728 IIS \u90e8\u7f72"},d=void 0,s={unversionedId:"deploy-iis",id:"deploy-iis",title:"34.1 \u5728 IIS \u90e8\u7f72",description:"",source:"@site/docs/deploy-iis.mdx",sourceDirName:".",slug:"/deploy-iis",permalink:"/furion/docs/deploy-iis",draft:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/net6/handbook/docs/deploy-iis.mdx",tags:[],version:"current",lastUpdatedBy:"MonkSoul",lastUpdatedAt:1657085665,formattedLastUpdatedAt:"Jul 6, 2022",frontMatter:{id:"deploy-iis",title:"34.1 \u5728 IIS \u90e8\u7f72",sidebar_label:"34.1 \u5728 IIS \u90e8\u7f72"},sidebar:"docs",previous:{title:"33. IPC \u8fdb\u7a0b\u901a\u4fe1",permalink:"/furion/docs/ipc"},next:{title:"34.2 \u5728 Docker \u90e8\u7f72",permalink:"/furion/docs/deploy-docker"}},u={},c=[{value:"34.1.1 \u53d1\u5e03\u7f51\u7ad9",id:"3411-\u53d1\u5e03\u7f51\u7ad9",level:2},{value:"34.1.1.1 \u9009\u62e9\u542f\u52a8\u9879\u53d1\u5e03",id:"34111-\u9009\u62e9\u542f\u52a8\u9879\u53d1\u5e03",level:3},{value:"34.1.1.2 \u9009\u62e9\u53d1\u5e03\u5230\u6587\u4ef6\u5939",id:"34112-\u9009\u62e9\u53d1\u5e03\u5230\u6587\u4ef6\u5939",level:3},{value:"34.1.1.3 \u914d\u7f6e\u53d1\u5e03\u540e\u8def\u5f84",id:"34113-\u914d\u7f6e\u53d1\u5e03\u540e\u8def\u5f84",level:3},{value:"34.1.1.4 \u70b9\u51fb\u53d1\u5e03",id:"34114-\u70b9\u51fb\u53d1\u5e03",level:3},{value:"34.1.2 \u670d\u52a1\u5668\u73af\u5883\u914d\u7f6e",id:"3412-\u670d\u52a1\u5668\u73af\u5883\u914d\u7f6e",level:2},{value:"34.1.2.1 \u7b2c\u4e00\u6b65",id:"34121-\u7b2c\u4e00\u6b65",level:3},{value:"34.1.2.2 \u7b2c\u4e8c\u6b65\uff08\u547d\u4ee4\uff09",id:"34122-\u7b2c\u4e8c\u6b65\u547d\u4ee4",level:3},{value:"34.1.2.3 \u7b2c\u4e09\u6b65\uff08\u547d\u4ee4\uff09",id:"34123-\u7b2c\u4e09\u6b65\u547d\u4ee4",level:3},{value:"34.1.2.4 \u7b2c\u56db\u6b65\uff08\u547d\u4ee4\uff09",id:"34124-\u7b2c\u56db\u6b65\u547d\u4ee4",level:3},{value:"34.1.3 \u90e8\u7f72\u5230 IIS",id:"3413-\u90e8\u7f72\u5230-iis",level:2},{value:"34.1.3.1 \u6dfb\u52a0\u65b0\u7f51\u7ad9",id:"34131-\u6dfb\u52a0\u65b0\u7f51\u7ad9",level:3},{value:"34.1.3.2 \u914d\u7f6e\u7f51\u7ad9\u4fe1\u606f",id:"34132-\u914d\u7f6e\u7f51\u7ad9\u4fe1\u606f",level:3},{value:"34.1.3.3 \u914d\u7f6e\u5e94\u7528\u7a0b\u5e8f\u6c60",id:"34133-\u914d\u7f6e\u5e94\u7528\u7a0b\u5e8f\u6c60",level:3},{value:"34.1.3.4 \u8bbe\u7f6e\u4e3a <code>\u975e\u6258\u7ba1</code>",id:"34134-\u8bbe\u7f6e\u4e3a-\u975e\u6258\u7ba1",level:3},{value:"34.1.3.5 \u91cd\u542f\u7f51\u7ad9",id:"34135-\u91cd\u542f\u7f51\u7ad9",level:3},{value:"34.1.4 \u5e38\u89c1\u95ee\u9898",id:"3414-\u5e38\u89c1\u95ee\u9898",level:2},{value:"34.1.4.1 405 \u72b6\u6001\u7801\uff0c\u4e0d\u652f\u6301 <code>PUT\uff0cDELETE</code> \u8bf7\u6c42",id:"34141-405-\u72b6\u6001\u7801\u4e0d\u652f\u6301-putdelete-\u8bf7\u6c42",level:3},{value:"34.1.4.2 <code>WebSocket</code>/ <code>SignalR</code> \u8fde\u63a5\u62a5\u9519",id:"34142-websocket-signalr-\u8fde\u63a5\u62a5\u9519",level:3},{value:"34.1.5 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"3415-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2},{value:"34.1.4.3 \u90e8\u7f72\u4e4b\u540e\u7f3a\u5931 <code>api-ms-win.xxxx.dll</code> \u95ee\u9898",id:"34143-\u90e8\u7f72\u4e4b\u540e\u7f3a\u5931-api-ms-winxxxxdll-\u95ee\u9898",level:3},{value:"34.1.5 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"3415-\u53cd\u9988\u4e0e\u5efa\u8bae-1",level:2}],m={toc:c};function k(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"\u7cbe\u7b80\u53d1\u5e03\u6587\u4ef6",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u5982\u679c\u9700\u8981\u7cbe\u7b80\u53d1\u5e03\u540e\u7684\u6587\u4ef6\uff0c\u4e5f\u5c31\u662f\u5220\u9664\u4e0d\u5fc5\u8981\u7684\u6587\u4ef6\u5939\uff0c\u53ef\u4ee5\u7f16\u8f91 Web \u9879\u76ee\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},".csproj")," \u5e76\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"p"},"<SatelliteResourceLanguages>en-US</SatelliteResourceLanguages>"),"\uff0c\u5982\uff1a"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {3}",showLineNumbers:!0,"":!0,"{3}":!0},"<PropertyGroup>\n  <TargetFramework>net5.0</TargetFramework>\n  <SatelliteResourceLanguages>en-US</SatelliteResourceLanguages>\n</PropertyGroup>\n"))),(0,a.kt)("h2",{id:"3411-\u53d1\u5e03\u7f51\u7ad9"},"34.1.1 \u53d1\u5e03\u7f51\u7ad9"),(0,a.kt)("h3",{id:"34111-\u9009\u62e9\u542f\u52a8\u9879\u53d1\u5e03"},"34.1.1.1 \u9009\u62e9\u542f\u52a8\u9879\u53d1\u5e03"),(0,a.kt)("img",{src:(0,o.Z)("img/dp1.png")}),(0,a.kt)("h3",{id:"34112-\u9009\u62e9\u53d1\u5e03\u5230\u6587\u4ef6\u5939"},"34.1.1.2 \u9009\u62e9\u53d1\u5e03\u5230\u6587\u4ef6\u5939"),(0,a.kt)("img",{src:(0,o.Z)("img/dy2.png")}),(0,a.kt)("h3",{id:"34113-\u914d\u7f6e\u53d1\u5e03\u540e\u8def\u5f84"},"34.1.1.3 \u914d\u7f6e\u53d1\u5e03\u540e\u8def\u5f84"),(0,a.kt)("img",{src:(0,o.Z)("img/dp3.png")}),(0,a.kt)("h3",{id:"34114-\u70b9\u51fb\u53d1\u5e03"},"34.1.1.4 \u70b9\u51fb\u53d1\u5e03"),(0,a.kt)("img",{src:(0,o.Z)("img/dp4.png")}),(0,a.kt)("h2",{id:"3412-\u670d\u52a1\u5668\u73af\u5883\u914d\u7f6e"},"34.1.2 \u670d\u52a1\u5668\u73af\u5883\u914d\u7f6e"),(0,a.kt)("h3",{id:"34121-\u7b2c\u4e00\u6b65"},"34.1.2.1 \u7b2c\u4e00\u6b65"),(0,a.kt)("p",null,"\u5b89\u88c5.NET Core \u8fd0\u884c\u65f6\u6346\u7ed1\u5305\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://dotnet.microsoft.com/permalink/dotnetcore-current-windows-runtime-bundle-installer"},"\u70b9\u51fb\u4e0b\u8f7d")),(0,a.kt)("h3",{id:"34122-\u7b2c\u4e8c\u6b65\u547d\u4ee4"},"34.1.2.2 \u7b2c\u4e8c\u6b65\uff08\u547d\u4ee4\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"net stop was /y\n")),(0,a.kt)("h3",{id:"34123-\u7b2c\u4e09\u6b65\u547d\u4ee4"},"34.1.2.3 \u7b2c\u4e09\u6b65\uff08\u547d\u4ee4\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"net start w3svc\n")),(0,a.kt)("h3",{id:"34124-\u7b2c\u56db\u6b65\u547d\u4ee4"},"34.1.2.4 \u7b2c\u56db\u6b65\uff08\u547d\u4ee4\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"set ASPNETCORE_ENVIRONMENT=Production\n")),(0,a.kt)("h2",{id:"3413-\u90e8\u7f72\u5230-iis"},"34.1.3 \u90e8\u7f72\u5230 IIS"),(0,a.kt)("h3",{id:"34131-\u6dfb\u52a0\u65b0\u7f51\u7ad9"},"34.1.3.1 \u6dfb\u52a0\u65b0\u7f51\u7ad9"),(0,a.kt)("img",{src:(0,o.Z)("img/ds1.png")}),(0,a.kt)("h3",{id:"34132-\u914d\u7f6e\u7f51\u7ad9\u4fe1\u606f"},"34.1.3.2 \u914d\u7f6e\u7f51\u7ad9\u4fe1\u606f"),(0,a.kt)("img",{src:(0,o.Z)("img/ds2.png")}),(0,a.kt)("h3",{id:"34133-\u914d\u7f6e\u5e94\u7528\u7a0b\u5e8f\u6c60"},"34.1.3.3 \u914d\u7f6e\u5e94\u7528\u7a0b\u5e8f\u6c60"),(0,a.kt)("img",{src:(0,o.Z)("img/ds3.png")}),(0,a.kt)("h3",{id:"34134-\u8bbe\u7f6e\u4e3a-\u975e\u6258\u7ba1"},"34.1.3.4 \u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"h3"},"\u975e\u6258\u7ba1")),(0,a.kt)("img",{src:(0,o.Z)("img/ds4.png")}),(0,a.kt)("h3",{id:"34135-\u91cd\u542f\u7f51\u7ad9"},"34.1.3.5 \u91cd\u542f\u7f51\u7ad9"),(0,a.kt)("p",null,"\u53ea\u9700\u91cd\u542f\u7f51\u7ad9\u6216\u5e94\u7528\u7a0b\u5e8f\u6c60\u5373\u53ef\u3002"),(0,a.kt)("h2",{id:"3414-\u5e38\u89c1\u95ee\u9898"},"34.1.4 \u5e38\u89c1\u95ee\u9898"),(0,a.kt)("h3",{id:"34141-405-\u72b6\u6001\u7801\u4e0d\u652f\u6301-putdelete-\u8bf7\u6c42"},"34.1.4.1 405 \u72b6\u6001\u7801\uff0c\u4e0d\u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"h3"},"PUT\uff0cDELETE")," \u8bf7\u6c42"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"IIS"),"\u62d2\u7edd ",(0,a.kt)("inlineCode",{parentName:"p"},"PUT"),"\u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"DELETE")," \u8bf7\u6c42\uff0c\u539f\u56e0\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"IIS")," \u9ed8\u8ba4\u6ce8\u518c\u4e86\u4e00\u4e2a\u540d\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"WebDAVModule")," \u7684\u81ea\u5b9a\u4e49 ",(0,a.kt)("inlineCode",{parentName:"p"},"HttpModule")," \u5bfc\u81f4\u7684\u3002"),(0,a.kt)("p",null,"\u89e3\u51b3\u8be5\u95ee\u9898\uff0c\u53ea\u9700\u8981\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"web.config")," \u79fb\u9664\u5373\u53ef\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml",metastring:"{2-6}","{2-6}":!0},'<configuration>\n <system.webServer>\n   <modules runAllManagedModulesForAllRequests="true">\n     <remove name="webDAVModule"/>\n   </modules>\n </system.webServer>\n</configuration>\n')),(0,a.kt)("h3",{id:"34142-websocket-signalr-\u8fde\u63a5\u62a5\u9519"},"34.1.4.2 ",(0,a.kt)("inlineCode",{parentName:"h3"},"WebSocket"),"/ ",(0,a.kt)("inlineCode",{parentName:"h3"},"SignalR")," \u8fde\u63a5\u62a5\u9519"),(0,a.kt)("p",null,"\u5982\u679c\u9879\u76ee\u90e8\u7f72\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"IIS")," \u4e2d\u51fa\u73b0 ",(0,a.kt)("inlineCode",{parentName:"p"},"WebSoket"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"SignalR")," \u4e0d\u80fd\u8fde\u63a5\u6216\u8fde\u63a5\u5931\u8d25\u7b49\u95ee\u9898\uff0c\u8bf7\u786e\u4fdd ",(0,a.kt)("inlineCode",{parentName:"p"},"IIS")," \u670d\u52a1\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"WebSocket \u534f\u8bae")," \u662f\u52fe\u9009\u72b6\u6001"),(0,a.kt)("img",{src:(0,o.Z)("img/iis2.png")}),(0,a.kt)("h2",{id:"3415-\u53cd\u9988\u4e0e\u5efa\u8bae"},"34.1.5 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,a.kt)("admonition",{title:"\u4e0e\u6211\u4eec\u4ea4\u6d41",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u7ed9 Furion \u63d0 ",(0,a.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002")),(0,a.kt)("h3",{id:"34143-\u90e8\u7f72\u4e4b\u540e\u7f3a\u5931-api-ms-winxxxxdll-\u95ee\u9898"},"34.1.4.3 \u90e8\u7f72\u4e4b\u540e\u7f3a\u5931 ",(0,a.kt)("inlineCode",{parentName:"h3"},"api-ms-win.xxxx.dll")," \u95ee\u9898"),(0,a.kt)("p",null,"\u6709\u65f6\u5019\u5c06\u53d1\u5e03\u6587\u4ef6\u53d1\u5e03\u5230\u670d\u52a1\u5668\u540e\uff0c\u51fa\u73b0\u4e22\u5931 ",(0,a.kt)("inlineCode",{parentName:"p"},"api.ms-win.xxxx.dll")," \u6587\u4ef6\uff0c\u8fd9\u65f6\u53ea\u9700\u8981\u91cd\u65b0\u53d1\u5e03\u5e76\u9009\u62e9\u670d\u52a1\u5668\u7279\u5b9a\u7684\u67b6\u6784\u5373\u53ef\u3002"),(0,a.kt)("img",{src:(0,o.Z)("img/iis4.jpg")}),(0,a.kt)("img",{src:(0,o.Z)("img/iis3.png")}),(0,a.kt)("h2",{id:"3415-\u53cd\u9988\u4e0e\u5efa\u8bae-1"},"34.1.5 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,a.kt)("admonition",{title:"\u4e0e\u6211\u4eec\u4ea4\u6d41",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u7ed9 Furion \u63d0 ",(0,a.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002")))}k.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),d=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return i.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,k=c["".concat(p,".").concat(m)]||c[m]||u[m]||a;return n?i.createElement(k,o(o({ref:t},s),{},{components:n})):i.createElement(k,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<a;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);