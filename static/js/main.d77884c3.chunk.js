(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{105:function(e,t,a){e.exports=a.p+"static/media/logo.47fbacad.svg"},106:function(e,t,a){e.exports=a.p+"static/media/emailSketchCropped.07532da4.png"},107:function(e,t,a){e.exports=a.p+"static/media/DesignIcon-white.835b723b.svg"},108:function(e,t,a){e.exports=a.p+"static/media/axle.536c0e4d.png"},109:function(e,t,a){e.exports=a.p+"static/media/wheelBuild.5715a6bf.jpg"},110:function(e,t,a){e.exports=a.p+"static/media/BuildIcon-white.cd1479ca.svg"},111:function(e,t,a){e.exports=a.p+"static/media/SupportIcon-white.ed68cc99.svg"},112:function(e,t,a){e.exports=a.p+"static/media/support.cd1c5290.jpg"},186:function(e,t,a){},187:function(e,t,a){},188:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(8),l=a(12),o=a(4),c=function(e){var t=e.component,a=e.layout,n=Object(o.a)(e,["component","layout"]);return a=void 0===a?function(e){return i.a.createElement(i.a.Fragment,null,e.children)}:a,i.a.createElement(r.a,Object.assign({},n,{render:function(e){return i.a.createElement(a,null,i.a.createElement(t,e))}}))},s=a(11),m=a(3),d=a.n(m),u=a(45),v=i.a.forwardRef((function(e,t){var a=Object(n.useState)(window.innerHeight),r=Object(s.a)(a,2),l=r[0],o=r[1],c=Object(n.useState)([]),m=Object(s.a)(c,2),d=m[0],v=m[1],p=function(){return d.length<=document.querySelectorAll("[class*=reveal-].is-revealed").length},b=function(){if(!p())for(var e=function(e){var t=d[e],a=t.getAttribute("data-reveal-delay"),n=t.getAttribute("data-reveal-offset")?t.getAttribute("data-reveal-offset"):"200";(function(e,t){return e.getBoundingClientRect().top<=l-t})(t.getAttribute("data-reveal-container")?t.closest(t.getAttribute("data-reveal-container")):t,n)&&!t.classList.contains("is-revealed")&&(a&&0!==a?setTimeout((function(){t.classList.add("is-revealed")}),a):t.classList.add("is-revealed"))},t=0;t<d.length;t++)e(t)};Object(n.useImperativeHandle)(t,(function(){return{init:function(){v(document.querySelectorAll("[class*=reveal-]"))}}})),Object(n.useEffect)((function(){"undefined"!==typeof d&&d.length>0&&(p()||(window.addEventListener("scroll",E),window.addEventListener("resize",f)),b())}),[d]);var h=function(){p()&&(window.removeEventListener("scroll",E),window.removeEventListener("resize",f))},E=Object(u.throttle)((function(){h(),b()}),30),f=Object(u.throttle)((function(){o(window.innerHeight)}),30);return Object(n.useEffect)((function(){h(),b()}),[l]),i.a.createElement(i.a.Fragment,null,e.children())}));v.propTypes={children:d.a.func.isRequired};var p=v,b=a(31),h=a(2),E=a.n(h),f=a(19),g=function(e){var t=e.className,a=Object(o.a)(e,["className"]),n=E()("brand",t);return i.a.createElement("div",Object.assign({},a,{className:n}),i.a.createElement("h4",{className:"m-0"},"Devicist Design Works",i.a.createElement(f.a,{to:"/"})))},N=a(17),w=function(e){var t=e.className,a=e.navPosition,r=e.hideNav,l=e.hideSignin,c=e.bottomOuterDivider,m=e.bottomDivider,d=Object(o.a)(e,["className","navPosition","hideNav","hideSignin","bottomOuterDivider","bottomDivider"]),u=Object(n.useState)(!1),v=Object(s.a)(u,2),p=v[0],b=v[1],h=Object(n.useRef)(null),f=Object(n.useRef)(null);Object(n.useEffect)((function(){return p&&w(),document.addEventListener("keydown",y),document.addEventListener("click",j),function(){document.removeEventListener("keydown",y),document.removeEventListener("click",j),O()}}));var w=function(){document.body.classList.add("off-nav-is-active"),h.current.style.maxHeight=h.current.scrollHeight+"px",b(!0)},O=function(){document.body.classList.remove("off-nav-is-active"),h.current&&(h.current.style.maxHeight=null),b(!1)},y=function(e){p&&27===e.keyCode&&O()},j=function(e){h.current&&p&&!h.current.contains(e.target)&&e.target!==f.current&&O()},x=E()("site-header",c&&"has-bottom-divider",t);return i.a.createElement("header",Object.assign({},d,{className:x}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:E()("site-header-inner",m&&"has-bottom-divider")},i.a.createElement(g,null),!r&&i.a.createElement(i.a.Fragment,null,i.a.createElement("button",{ref:f,className:"header-nav-toggle",onClick:p?O:w},i.a.createElement("span",{className:"screen-reader"},"Menu"),i.a.createElement("span",{className:"hamburger"},i.a.createElement("span",{className:"hamburger-inner"}))),i.a.createElement("nav",{ref:h,className:E()("header-nav",p&&"is-active")},i.a.createElement("div",{className:"header-nav-inner"},i.a.createElement("ul",{className:E()("list-reset text-xs",a&&"header-nav-".concat(a))},i.a.createElement("li",null,i.a.createElement(N.Link,{to:"work",smooth:!0,duration:500,onClick:O},"Work")),i.a.createElement("li",null,i.a.createElement(N.Link,{to:"process",smooth:!0,duration:500,onClick:O},"Process"))),!l&&i.a.createElement("ul",{className:"list-reset header-nav-right"},i.a.createElement("li",null,i.a.createElement(N.Link,{to:"contact",smooth:!0,duration:500,className:"button button-primary button-wide-mobile button-sm",onClick:O},"Contact Us")))))))))};w.defaultProps={navPosition:"",hideNav:!1,hideSignin:!1,bottomOuterDivider:!1,bottomDivider:!1};var O=w,y=function(e){var t=e.className,a=Object(o.a)(e,["className"]),n=E()("footer-nav",t);return i.a.createElement("nav",Object.assign({},a,{className:n}),i.a.createElement("ul",{className:"list-reset"},i.a.createElement("li",null,i.a.createElement(N.Link,{to:"work",smooth:!0,duration:500},"Work")),i.a.createElement("li",null,i.a.createElement(N.Link,{to:"process",smooth:!0,duration:500},"Process")),i.a.createElement("li",null,i.a.createElement(N.Link,{to:"contact",smooth:!0,duration:500},"Contact"))))},j=function(e){var t=e.className,a=Object(o.a)(e,["className"]),n=E()("footer-social",t);return i.a.createElement("div",Object.assign({},a,{className:n}),i.a.createElement("ul",{className:"list-reset"},i.a.createElement("li",null,i.a.createElement("a",{href:"https://hackaday.io/nsted",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img"},i.a.createElement("title",null,"Hackaday"),i.a.createElement("path",{d:"M0 4.124c0-.204.021-.401.06-.595l1.956 1.734 2.144-2.38L2.246 1.18c.259-.072.53-.114.812-.114a3.062 3.062 0 0 1 3.058 3.037v.021c0 .152-.012.304-.033.45l2.385 2.112a6.716 6.716 0 0 0-2.013 2.54L3.982 7.037a3.038 3.038 0 0 1-.924.145A3.06 3.06 0 0 1 0 4.124zm20.942 12.694c-.306 0-.601.045-.88.129l-2.308-2.044a6.862 6.862 0 0 1-1.819 2.706l1.993 1.765a3.05 3.05 0 0 0-.044.502 3.06 3.06 0 0 0 3.935 2.929l-1.992-1.77 2.14-2.365 1.981 1.76c.034-.181.052-.364.052-.554v-.026a3.057 3.057 0 0 0-3.058-3.032zm-3.397-7.592l2.473-2.189c.292.093.601.145.924.145A3.06 3.06 0 0 0 23.94 3.53l-1.956 1.734-2.144-2.38 1.914-1.703a3.049 3.049 0 0 0-.812-.114 3.062 3.062 0 0 0-3.058 3.037v.021c0 .152.012.304.033.45l-2.385 2.112a6.716 6.716 0 0 1 2.013 2.54zm-11.3 5.677l-2.307 2.044A3.057 3.057 0 0 0 0 19.85v.026c0 .19.018.373.052.554l1.982-1.76 2.14 2.365-1.993 1.77a3.06 3.06 0 0 0 3.935-2.929 3.05 3.05 0 0 0-.044-.502l1.993-1.765a6.862 6.862 0 0 1-1.82-2.706zm8.971 2.657a1.076 1.076 0 1 1-1.961.424h-.192a1.076 1.076 0 1 1-2.127 0h-.15A1.105 1.105 0 0 1 9.7 19.23c-.604 0-1.094-.5-1.094-1.115 0-.21.057-.405.156-.572-1.493-1.142-2.474-3.051-2.474-5.213 0-3.497 2.559-6.332 5.713-6.332s5.713 2.835 5.713 6.332c0 2.173-.991 4.091-2.497 5.231zm-4.194-5.914a1.995 1.995 0 0 0-.559-.66 1.804 1.804 0 0 0-.918-.264 1.45 1.45 0 0 0-.319.036c-.405.05-.747.327-.983.647-.207.257-.368.569-.372.905-.032.278.024.556.075.828.066.322.293.584.55.774.119.095.29.226.44.116.1-.134.016-.33.107-.478a.5.5 0 0 1 .258-.326c.263-.132.527-.262.808-.355.228-.067.416-.219.61-.349.255-.197.424-.558.303-.874zm.996 2.325c-.279-.007-.63 1.237-.574 1.78.175.72.237-.505.574-.506.323.014.275 1.255.53.504.078-.5-.224-1.77-.53-1.778zm4.036-.833c.051-.272.107-.55.075-.828-.004-.336-.165-.648-.372-.905-.236-.32-.578-.596-.983-.647a1.45 1.45 0 0 0-.319-.036c-.32-.001-.644.1-.918.264-.235.171-.42.406-.559.66-.121.316.048.677.303.874.194.13.382.282.61.35.28.092.545.222.808.354a.5.5 0 0 1 .258.326c.091.147.007.344.106.478.151.11.322-.021.44-.116.258-.19.485-.452.551-.774z"})))),i.a.createElement("li",null,i.a.createElement("a",{href:"https://www.youtube.com/user/nickstedman",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24",viewBox:"-35.20005 -41.33325 305.0671 247.9995"},i.a.createElement("title",null,"Youtube"),i.a.createElement("path",{d:"M229.763 25.817c-2.699-10.162-10.65-18.165-20.748-20.881C190.716 0 117.333 0 117.333 0S43.951 0 25.651 4.936C15.553 7.652 7.6 15.655 4.903 25.817 0 44.236 0 82.667 0 82.667s0 38.429 4.903 56.85C7.6 149.68 15.553 157.681 25.65 160.4c18.3 4.934 91.682 4.934 91.682 4.934s73.383 0 91.682-4.934c10.098-2.718 18.049-10.72 20.748-20.882 4.904-18.421 4.904-56.85 4.904-56.85s0-38.431-4.904-56.85",fill:"fff"}),i.a.createElement("path",{d:"M93.333 117.559l61.333-34.89-61.333-34.894z",fill:"#000"}))))))},x=function(e){var t=e.className,a=e.topOuterDivider,n=e.topDivider,r=Object(o.a)(e,["className","topOuterDivider","topDivider"]),l=E()("site-footer center-content-mobile",a&&"has-top-divider",t);return i.a.createElement("footer",Object.assign({},r,{className:l}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:E()("site-footer-inner",n&&"has-top-divider")},i.a.createElement("div",{className:"footer-top space-between text-xxs"},i.a.createElement(g,null),i.a.createElement(j,null)),i.a.createElement("div",{className:"footer-bottom space-between text-xxs invert-order-desktop"},i.a.createElement(y,null)))))};x.defaultProps={topOuterDivider:!1,topDivider:!1};var D=x,k=function(e){var t=e.children;return i.a.createElement(i.a.Fragment,null,i.a.createElement(O,{navPosition:"right",className:"reveal-from-bottom"}),i.a.createElement("main",{className:"site-content"},t),i.a.createElement(D,null))},C=a(6),L={types:{topOuterDivider:d.a.bool,bottomOuterDivider:d.a.bool,topDivider:d.a.bool,bottomDivider:d.a.bool,hasBgColor:d.a.bool,invertColor:d.a.bool},defaults:{topOuterDivider:!1,bottomOuterDivider:!1,topDivider:!1,bottomDivider:!1,hasBgColor:!1,invertColor:!1}},A={types:Object(C.a)({},L.types),defaults:Object(C.a)({},L.defaults)},S={types:Object(C.a)({},L.types,{invertMobile:d.a.bool,invertDesktop:d.a.bool,alignTop:d.a.bool,imageFill:d.a.bool}),defaults:Object(C.a)({},L.defaults,{invertMobile:!1,invertDesktop:!1,alignTop:!1,imageFill:!1})},T={types:Object(C.a)({},L.types,{pushLeft:d.a.bool}),defaults:Object(C.a)({},L.defaults,{pushLeft:!1})},B=a(70),F=a.n(B),P=function(e){var t=e.className,a=e.src,r=e.width,l=e.height,c=e.alt,m=Object(o.a)(e,["className","src","width","height","alt"]),d=Object(n.useState)(!1),u=Object(s.a)(d,2),v=u[0],p=u[1],b=Object(n.useRef)(null);Object(n.useEffect)((function(){h(b.current)}),[]);var h=function(e){var t,a,n=document.createElement("img");v||(e.style.display="none",e.before(n),n.src=(t=e.getAttribute("width")||0,a=e.getAttribute("height")||0,'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(t," ").concat(a,'"%3E%3C/svg%3E')),n.width=e.getAttribute("width"),n.height=e.getAttribute("height"),n.style.opacity="0",e.className&&n.classList.add(e.className),n.remove(),e.style.display="")};return i.a.createElement("img",Object.assign({},m,{ref:b,className:t,src:a,width:r,height:l,alt:c,onLoad:function(){p(!0)}}))};P.defaultProps={src:void 0,width:void 0,height:void 0,alt:void 0};var M=P,I=Object(C.a)({},A.defaults),W=function(e){var t=e.className,n=(e.topOuterDivider,e.bottomOuterDivider,e.topDivider,e.bottomDivider),r=e.hasBgColor,l=e.invertColor,c=Object(o.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor"]),s=E()("hero section center-content",r&&"has-bg-color",l&&"invert-color",t),m=E()("hero-inner section-inner",n&&"has-bottom-divider");return i.a.createElement("section",Object.assign({},c,{className:s}),i.a.createElement("video",{className:"videoBg",autoPlay:!0,loop:!0,muted:!0},i.a.createElement("source",{src:F.a,type:"video/mp4"})),i.a.createElement("div",{className:"container-sm"},i.a.createElement("div",{className:m},i.a.createElement("div",{style:{padding:30}},i.a.createElement(M,{src:a(105),alt:"Open",width:200,height:32})),i.a.createElement("div",{className:"hero-content"},i.a.createElement("h1",{className:"mt-0 mb-16 reveal-from-bottom","data-reveal-delay":"200"},"The built world brought to life"),i.a.createElement("div",{className:"container-s"},i.a.createElement("p",{className:"m-0 mb-32 reveal-from-bottom","data-reveal-delay":"400"},"From hand-held gadgets",i.a.createElement("br",null),"to large-scale installations, ",i.a.createElement("br",null),"we combine art and engineering ",i.a.createElement("br",null),"to build dynamic in-person ",i.a.createElement("br",null),"experiences."),i.a.createElement("div",{className:"reveal-from-bottom","data-reveal-delay":"600"}))))))};W.defaultProps=I;var z=W,_=function(e){var t=e.className,a=e.data,n=e.children,r=e.tag,l=Object(o.a)(e,["className","data","children","tag"]),c=E()("section-header",t),s=r;return i.a.createElement(i.a.Fragment,null,(a.title||a.paragraph)&&i.a.createElement("div",Object.assign({},l,{className:c}),i.a.createElement("div",{className:"container-xs"},n,a.title&&i.a.createElement(s,{className:E()("mt-0",a.paragraph?"mb-16":"mb-0")},a.title),a.paragraph&&i.a.createElement("p",{className:"m-0"},a.paragraph))))};_.defaultProps={children:null,tag:"h2"};var R=_,H=function(e){var t=e.embedId;return i.a.createElement("div",{className:"video-responsive"},i.a.createElement("iframe",{width:"528",height:"396",src:"https://www.youtube.com/embed/".concat(t),frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:"Embedded youtube"}))},q=Object(C.a)({},S.defaults),U=function(e){var t=e.className,n=e.topOuterDivider,r=e.bottomOuterDivider,l=e.topDivider,c=e.bottomDivider,s=e.hasBgColor,m=e.invertColor,d=e.invertMobile,u=e.invertDesktop,v=e.alignTop,p=e.imageFill,b=Object(o.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","invertMobile","invertDesktop","alignTop","imageFill"]),h=E()("features-split section",n&&"has-top-divider",r&&"has-bottom-divider",s&&"has-bg-color",m&&"invert-color",t),f=E()("features-split-inner section-inner",l&&"has-top-divider",c&&"has-bottom-divider"),g=E()("split-wrap",d&&"invert-mobile",u&&"invert-desktop",v&&"align-top");return i.a.createElement("section",Object.assign({},b,{className:h,id:"process"}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:f},i.a.createElement(R,{data:{title:"The Process",paragraph:"Our process is simple. The results stand-out."},className:"center-content"}),i.a.createElement("div",{className:g},i.a.createElement("div",{className:"split-item"},i.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-right","data-reveal-container":".split-item"},i.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},i.a.createElement(M,{src:a(55),alt:"design icon",width:50,height:32})),i.a.createElement("h3",{className:"mt-0 mb-12"},"Foundation"),i.a.createElement("p",{className:"m-0"},"With over 20 years' experience combining art, UX, coding, electronics, and fabrication, we use our skills to take wild ideas and make them real, while mitigating risks.")),i.a.createElement("div",{className:E()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},i.a.createElement(M,{src:a(106),alt:"Features split 02",width:528,height:396}))),i.a.createElement("div",{className:"split-item"},i.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},i.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},i.a.createElement(M,{src:a(107),alt:"design icon",width:50,height:50})),i.a.createElement("h3",{className:"mt-0 mb-12"},"Design"),i.a.createElement("p",{className:"m-0"},"We work closely with clients to clarify objectives, and iterate through research, ideation, sourcing, modeling and detailing until we arrive at the optimal design.")),i.a.createElement("div",{className:E()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},i.a.createElement(M,{src:a(108),alt:"Features split 01",width:528,height:396}))),i.a.createElement("div",{className:"split-item"},i.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-right","data-reveal-container":".split-item"},i.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},i.a.createElement(M,{src:a(55),alt:"design icon",width:50,height:32})),i.a.createElement("h3",{className:"mt-0 mb-12"},"Build"),i.a.createElement("p",{className:"m-0"},"We develop code, build electronics, fabricate objects, and integrate components into the final pieces. Along the way, we develop hands-on prototypes, simulations and tools that help stakeholders sort out details.")),i.a.createElement("div",{className:E()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},i.a.createElement(M,{src:a(109),alt:"Features split 02",width:528,height:396}))),i.a.createElement("div",{className:"split-item"},i.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},i.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},i.a.createElement(M,{src:a(110),alt:"design icon",width:50,height:32})),i.a.createElement("h3",{className:"mt-0 mb-12"},"Deploy"),i.a.createElement("p",{className:"m-0"},"Show time! This is the moment when the project goes live, and public engagement begins. We are there to deliver and install the project and ensure it is fully functional. We also study the results to measure success.")),i.a.createElement("div",{className:E()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},i.a.createElement(H,{embedId:"o-eduqKUgx8"}))),i.a.createElement("div",{className:"split-item"},i.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-right","data-reveal-container":".split-item"},i.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},i.a.createElement(M,{src:a(111),alt:"design icon",width:50,height:32})),i.a.createElement("h3",{className:"mt-0 mb-12"},"Support"),i.a.createElement("p",{className:"m-0"},"Obsessed with reliability, we engineer simple, robust and modular solutions. We maintain the project over it's lifetime through in-person and remote support, and can push updates to keep the content fresh.")),i.a.createElement("div",{className:E()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},i.a.createElement(M,{src:a(112),alt:"Features split 02",width:528,height:396})))))))};U.defaultProps=q;var K=U,J=a(13),Y=function(e){var t=e.className,a=e.tag,n=e.color,r=e.size,l=e.loading,c=e.wide,s=e.wideMobile,m=e.disabled,d=Object(o.a)(e,["className","tag","color","size","loading","wide","wideMobile","disabled"]),u=E()("button",n&&"button-".concat(n),r&&"button-".concat(r),l&&"is-loading",c&&"button-block",s&&"button-wide-mobile",t),v=a;return i.a.createElement(v,Object.assign({},d,{className:u,disabled:m}))};Y.defaultProps={tag:"button",color:"",size:"",loading:!1,wide:!1,wideMobile:!1,disabled:!1};var G=Y,V=a(71),X=a.n(V),Q=a(72),Z=a.n(Q),$=a(73),ee=a.n($),te=a(30),ae=(a(113),a(74)),ne=a(25),ie=a(77),re=a.n(ie),le=a(78),oe=a.n(le),ce=a(79),se=a.n(ce),me=a(80),de=a.n(me),ue=[{src:re.a,width:1,height:1},{src:oe.a,width:1,height:1},{src:se.a,width:1,height:1},{src:de.a,width:1,height:1}],ve=function(){var e=Object(n.useState)(0),t=Object(s.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(!1),o=Object(s.a)(l,2),c=o[0],m=o[1],d=Object(n.useCallback)((function(e,t){t.photo;var a=t.index;r(a),m(!0)}),[]);return i.a.createElement("section",null,i.a.createElement("div",{className:"container"},i.a.createElement(R,{data:{title:"Snowflake Installation",paragraph:'We developed interactive LED lighting for "Frost", a 30 foot touch-reactive sculpture on display at Brookfield Place in Toronto during the winter holidays.'},className:"center-content mt-32"}),i.a.createElement("div",{className:"mb-16"},i.a.createElement(H,{embedId:"mMHe-GRaYqA"})),i.a.createElement("div",{className:"gridWrapper"},i.a.createElement(ae.a,{photos:ue,onClick:d})),i.a.createElement(ne.b,null,c?i.a.createElement(ne.a,{onClose:function(){r(0),m(!1)}},i.a.createElement(ne.c,{currentIndex:a,showNavigationOnTouchDevice:!0,views:ue.map((function(e){return Object(C.a)({},e,{srcset:e.srcSet,caption:e.title})}))})):null),i.a.createElement("div",{className:"carouselWrapper"},i.a.createElement(ne.c,{showNavigationOnTouchDevice:!0,currentIndex:a,views:ue.map((function(e){return Object(C.a)({},e,{srcset:e.srcSet,caption:e.title})}))}))))},pe=Object(C.a)({},T.defaults),be=function(e){var t=e.className,a=(e.topOuterDivider,e.bottomOuterDivider),r=(e.topDivider,e.bottomDivider),l=e.hasBgColor,c=e.invertColor,m=e.pushLeft,d=Object(o.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),u=E()("portfolio section",a&&"has-bottom-divider",l&&"has-bg-color",c&&"invert-color",t),v=E()("portfolio-inner section-inner",r&&"has-bottom-divider"),p=E()("tiles-wrap",m&&"push-left"),b=Object(n.useState)(!1),h=Object(s.a)(b,2),f=h[0],g=h[1],N=Object(n.useState)(!1),w=Object(s.a)(N,2),O=w[0],y=w[1],j=Object(n.useState)(!1),x=Object(s.a)(j,2),D=x[0],k=x[1],C=function(){g(!1),y(!1),k(!1)},L=i.a.createElement("svg",{fill:"#FFFFFF",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24px",height:"24px"},i.a.createElement("path",{d:"M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"}));return i.a.createElement("section",Object.assign({},d,{className:u,id:"work"}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:v},i.a.createElement(R,{data:{title:"Examples"},className:"center-content"}),i.a.createElement("div",{className:p},i.a.createElement("div",{className:"tiles-item reveal-from-right","data-reveal-delay":"200"},i.a.createElement(J.a,{style:{width:"16rem"}},i.a.createElement(J.a.Img,{variant:"top",src:X.a}),i.a.createElement(J.a.Body,null,i.a.createElement(J.a.Title,null,"Frost : Case Study"),i.a.createElement(J.a.Text,null,'We developed interactive LED lighting for "Frost", a 30 foot touch-reactive sculpture on display at Brookfield Place in Toronto during the winter holidays.'),i.a.createElement(G,{onClick:function(){return g(!0)},variant:"primary"},"Learn more")))),i.a.createElement("div",{className:"tiles-item reveal-from-bottom"},i.a.createElement(J.a,{style:{width:"16rem"}},i.a.createElement(J.a.Img,{variant:"top",src:Z.a}),i.a.createElement(J.a.Body,null,i.a.createElement(J.a.Title,null,"Powercube"),i.a.createElement(J.a.Text,null,"Some quick example text to build on the card title and make up the bulk of the card's content."),i.a.createElement(G,{variant:"primary",onClick:function(){return y(!0)}},"Learn more")))),i.a.createElement("div",{className:"tiles-item reveal-from-left","data-reveal-delay":"200"},i.a.createElement(J.a,{style:{width:"16rem"}},i.a.createElement(J.a.Img,{variant:"top",src:ee.a}),i.a.createElement(J.a.Body,null,i.a.createElement(J.a.Title,null,"NFC System"),i.a.createElement(J.a.Text,null,"Some quick example text to build on the card title and make up the bulk of the card's content."),i.a.createElement(G,{variant:"primary",onClick:function(){return k(!0)}},"Learn more"))))),i.a.createElement("p",null))),i.a.createElement(te.a,{open:f,onClose:C,center:!0,closeIcon:L,classNames:{modal:"projectModal",overlay:"projectOverlay",modalAnimationIn:"customEnterModalAnimation",modalAnimationOut:"customLeaveModalAnimation"},animationDuration:800},i.a.createElement(ve,null)),i.a.createElement(te.a,{open:O,onClose:C,center:!0,closeIcon:L,classNames:{modal:"projectModal",overlay:"projectOverlay",modalAnimationIn:"customEnterModalAnimation",modalAnimationOut:"customLeaveModalAnimation"},animationDuration:800},i.a.createElement(ve,null)),i.a.createElement(te.a,{open:D,onClose:C,center:!0,closeIcon:L,classNames:{modal:"projectModal",overlay:"projectOverlay",modalAnimationIn:"customEnterModalAnimation",modalAnimationOut:"customLeaveModalAnimation"},animationDuration:800},i.a.createElement(ve,null)))};be.defaultProps=pe;var he=be,Ee=a(81),fe=a.n(Ee),ge=Object(C.a)({},A.defaults,{split:!1}),Ne=function(e){var t=e.className,a=e.topOuterDivider,n=e.bottomOuterDivider,r=e.topDivider,l=e.bottomDivider,c=(e.hasBgColor,e.invertColor,e.split),s=Object(o.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","split"]),m=E()("cta section center-content-mobile reveal-from-bottom",a&&"has-top-divider",n&&"has-bottom-divider",t),d=E()("cta-inner section-inner",r&&"has-top-divider",l&&"has-bottom-divider",c&&"cta-split");return i.a.createElement("section",Object.assign({},s,{className:m,id:"contact"}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:d},i.a.createElement("div",{className:"cta-slogan"},i.a.createElement("h3",{className:"m-0"},"We'd love to chat, drop us a line!"),i.a.createElement("p",null,"info@devicist.com"),i.a.createElement("p",null,"Occasionally, we release news and articles on"," ",i.a.createElement("b",null,"interactive objects"),". Join our mailing list.")),i.a.createElement("div",null,i.a.createElement(fe.a,{action:"https://devicist.us14.list-manage.com/subscribe/post?u=1960e060b6a123cf33b617dd7&id=19f122e29b",fields:[{name:"FNAME",placeholder:"Name",type:"text",require:!0},{name:"EMAIL",placeholder:"Email",type:"email",require:!0}],messages:{sending:"Sending...",success:"Thank you for subscribing!",error:"An unexpected internal error has occurred.",empty:"You must write an e-mail.",duplicate:"Too many subscribe attempts for this email address",button:"Submit"},className:"form-input"})))))};Ne.defaultProps=ge;var we=Ne,Oe=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(z,null),i.a.createElement(he,{topDivider:!0}),i.a.createElement(K,{invertMobile:!0,topDivider:!0}),i.a.createElement(we,null))};b.a.initialize(Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GA_CODE);var ye=function(){var e=Object(n.useRef)(),t=Object(r.f)();return Object(n.useEffect)((function(){var a=t.pathname;document.body.classList.add("is-loaded"),e.current.init(),function(e){b.a.set({page:e}),b.a.pageview(e)}(a)}),[t]),i.a.createElement(p,{ref:e,children:function(){return i.a.createElement(r.c,null,i.a.createElement(c,{exact:!0,path:"/",component:Oe,layout:k}))}})},je=(a(186),a(187),a(10)),xe=Object(l.a)(),De=document.getElementById("root");De.hasChildNodes()?Object(je.hydrate)(i.a.createElement(r.b,{history:xe},i.a.createElement(ye,null)),De):Object(je.render)(i.a.createElement(r.b,{history:xe},i.a.createElement(ye,null)),De)},55:function(e,t,a){e.exports=a.p+"static/media/PrototypeIcon-white.761bc67a.svg"},70:function(e,t,a){e.exports=a.p+"static/media/videoBg.d7665f4a.mp4"},71:function(e,t,a){e.exports=a.p+"static/media/snowflake.4a503d51.png"},72:function(e,t,a){e.exports=a.p+"static/media/powercube.d4987787.png"},73:function(e,t,a){e.exports=a.p+"static/media/nfc.2356967d.png"},77:function(e,t,a){e.exports=a.p+"static/media/snowflake1.0597a132.png"},78:function(e,t,a){e.exports=a.p+"static/media/snowflake2.78cb9b18.png"},79:function(e,t,a){e.exports=a.p+"static/media/snowflake3.103c6b5b.png"},80:function(e,t,a){e.exports=a.p+"static/media/snowflake4.aa88f32f.png"},88:function(e,t,a){e.exports=a(188)}},[[88,1,2]]]);
//# sourceMappingURL=main.d77884c3.chunk.js.map