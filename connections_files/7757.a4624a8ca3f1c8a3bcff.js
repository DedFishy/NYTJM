!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="9525a69d-20e0-4481-bc74-fc571e1fe716",e._sentryDebugIdIdentifier="sentry-dbid-9525a69d-20e0-4481-bc74-fc571e1fe716")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"90199bea12d0307073a61899b1597cc5c29360f3"},(self.webpackChunk_xwords_phoenix=self.webpackChunk_xwords_phoenix||[]).push([[7757],{6697:function(e,n,t){var o=t(89526),a=t(64403),r=t.n(a),i=t(9861),l=t(40245);n.Z=e=>{let{text:n="Play",type:t="primary",disabled:a=!1,className:c,onClick:d,isEmphasizedNew:s=!1,iconLeft:u,iconRight:m,dataTestId:g}=e;return o.createElement("button",{type:"button",className:r()("button-".concat(t),c,{disabled:a}),disabled:a,onClick:e=>{"function"==typeof d&&d(e)},"data-testid":g},u&&o.createElement(i.Z,{icon:u}),s&&o.createElement(l.Z,{text:"new",position:"top-right-outside"}),n,m&&o.createElement(i.Z,{icon:m,className:"pz-icon-right"}))}},22466:function(e,n,t){t.d(n,{Z:function(){return l}});var o=t(89526),a=t(73961),r=t(53789),i=t(65489);function l(e){let{children:n,isHidden:t}=e;const l=(0,o.useRef)(document.getElementById(i.Mk)),c=(0,o.useRef)(document.getElementById("portal-game-toolbar")),d=o.useRef(document.getElementById(i.xD));o.useEffect((()=>{var e,n;r.tq&&(t?null===(e=d.current)||void 0===e||e.classList.remove(i.ec):null===(n=d.current)||void 0===n||n.classList.add(i.ec))}),[t]);const s=r.tq?l.current:c.current;return s?(0,a.createPortal)(n,s):o.createElement(o.Fragment,null,n)}},43812:function(e,n,t){var o=t(89526),a=t(98697),r=t(89064),i=t(28229);n.Z=()=>{const[e,n]=(0,o.useState)(!1),{mode:t}=(0,a.Z)(),l=(0,r.Z)("sbDarkMode"),c=(0,r.Z)("strandsDarkMode"),d=(0,r.Z)("connectionsDarkMode");return(0,o.useEffect)((()=>{const e=!!window.gamesAppPlatform,{pageName:t}=window;e&&("spelling-bee"===t&&n(l),"strands"===t&&n(c),"connections"===t&&n(d))}),[l,c,d]),(0,o.useEffect)((()=>{const n=document.querySelector("body");e&&n&&n.classList.add("display-settings-enabled")}),[e]),(0,o.useEffect)((()=>{e&&window.isHybridWebView&&window.NativeBridge&&window.NativeBridge.gamesSetNativeColorTheme(t).catch((e=>{console.error("Failed to set native color theme: ".concat(t),e),(0,i.Z)("Failed to set native color theme: ".concat(t))}))}),[e,t]),e}},73649:function(e,n,t){t.d(n,{Mk:function(){return s},ec:function(){return u},ku:function(){return c},t6:function(){return l},xD:function(){return d}});var o=t(37226),a=t(22042),r=t(10431),i=t(41586);const l=()=>{(()=>{const e=(0,r.rI)((0,a.iU)("hybrid-back"));e&&window.isHybridWebView&&window.NativeBridge&&(0,r.Oo)(e,"click",(()=>{var e;"sudoku"!==(0,a.j0)()&&(null===(e=window.NativeBridge)||void 0===e||e.gamesBackToHub())}))})(),(()=>{if(window.isHybridWebView&&window.NativeBridge){const e=document.querySelectorAll(".".concat((0,a.iU)("nav-login"))),n=document.querySelectorAll(".".concat((0,a.iU)("nav-logout"))),t=document.querySelectorAll(".".concat((0,a.iU)("nav-subscribe"))),o=document.querySelectorAll(".".concat((0,a.iU)("nav-account-details"))),i=e=>e.forEach((e=>{(0,r.cn)(e,"hybrid-hidden")})),l=a=>{const r=null==a?void 0:a.isUserLoggedIn,l=null==a?void 0:a.isSubscribed;r?i(e):(i(n),i(o)),l&&i(t)};window.NativeBridge.gamesGetUserDetails().then((e=>{if(!e.success)throw new Error(e.error);l(e.values.gamesGetUserDetails)})).catch((e=>{console.error("Getting user details failed",e),i(n),i(o)})),(0,r.Oo)(window,"gamesUserCredentialChanged",(e=>{var n;l(null==e||null===(n=e.detail)||void 0===n||null===(n=n.values)||void 0===n?void 0:n.gamesAuthenticateUser)}));const c=(e,n)=>{e.forEach((e=>{(0,r.Oo)(e,"click",(e=>{var t;e.preventDefault(),null===(t=window.NativeBridge)||void 0===t||t.gamesAuthenticateUser(n).then((e=>{if(!e.success)throw new Error(e.error);window.dispatchEvent(new CustomEvent("gamesUserCredentialChanged",{detail:e}))}))}))}))};c(t,"subscribe"),c(e,"login")}})(),(()=>{var e;const n=[...document.querySelectorAll(".top-sale-banner")],t=null===(e=document.querySelector(".top-sale-banner__urgency"))||void 0===e?void 0:e.innerHTML,o="".concat(null!=t?t:"","50% off your first year of Games."),r=(0,a.j0)();n.length>0&&(0,i.j)("impression",{module:{name:"games-sale-banner",region:r,label:o},eventData:{page_type:"games-sale-banner"}}),n.forEach((e=>{e.addEventListener("click",(()=>{(0,i.j)("moduleInteraction",{module:{region:"",label:o,element:{name:r,label:"games-sale-banner"}},eventData:{pageType:"games-sale-banner",type:"tap"}})}),!0)}))})(),setTimeout((()=>{[...document.querySelectorAll(".js-hub-tracker")].forEach((e=>{const n=e.dataset.trackHub,t=e.dataset.trackHubContext||null;e.addEventListener("click",(()=>{(0,o.d)(n,t)}),!0)}))}),0)},c=e=>{let n=!1,t=-1;const o=(0,r.rI)((0,a.iU)("nav-burger")),l=(0,r.rI)((0,a.iU)("nav-drawer"));if(!o||!l)return;const c=[...l.querySelectorAll(".pz-nav-drawer__link"),...l.querySelectorAll(".pz-nav__button")];function d(){n=!0,o&&l&&((0,r.cn)(l,"open"),(0,r.cn)(o,"active"),e||(0,i.ob)({name:(0,a.j0)(),label:"click-nav",context:null}),(0,r.P$)(o,"aria-expanded",n.toString()),(0,r.P$)(l,"aria-hidden",(!n).toString()))}function s(){n=!1,o&&l&&((0,r.IV)(l,"open"),(0,r.cn)(l,"closing"),setTimeout((()=>{(0,r.IV)(l,"closing")}),500),(0,r.IV)(o,"active"),(0,r.P$)(o,"aria-expanded",n.toString()),(0,r.P$)(l,"aria-hidden",(!n).toString()))}(0,r.Oo)(o,"click",(()=>{n?s():d(),o.blur()})),(0,r.Oo)(o,"keydown",(e=>{const{key:o,keyCode:a}=e;if("Escape"!==o&&"Esc"!==o){if("Enter"!==o&&"Space"!==o&&32!==a)return"ArrowDown"===o?(e.preventDefault(),d(),t=0,void c[t].focus()):"ArrowUp"===o?(e.preventDefault(),d(),t=c.length-1,void c[t].focus()):void 0;n?s():(d(),t=0,c[t].focus())}else s()})),(0,r.Oo)(l,"keydown",(e=>{const{key:n}=e;"Escape"!==n&&"Esc"!==n||(s(),o.focus())})),(0,r.rI)((0,a.iU)("logo-nav")).addEventListener("click",(()=>{var n;const t={eventData:{pagetype:"game",trigger:"module",type:"click"},module:{name:"click",context:"",element:{name:null!==(n=window)&&void 0!==n&&null!==(n=n.location)&&void 0!==n&&n.pathname.startsWith("/puzzles/leaderboards")?"your-leaderboard":(0,a.j0)(),label:"games-logo"}}};e||(0,i.j)("moduleInteraction",t)}));const u=document.querySelector("#js-nav-actions"),m=null==u?void 0:u.querySelectorAll("a.js-nav-subscribe")[0],g=null==u?void 0:u.querySelectorAll("a.js-nav-login")[0];null==m||m.addEventListener("click",(()=>{const n=(0,a.j0)();e||(0,i.j)("moduleInteraction",{eventData:{pagetype:"game",trigger:"module",type:"ob_click"},module:{element:{name:n,label:"subscribe-header"}}})})),null==g||g.addEventListener("click",(()=>{const n=(0,a.j0)();e||(0,i.j)("moduleInteraction",{eventData:{pagetype:"game",trigger:"module",type:"ob_click"},module:{element:{name:n,label:"log-in-header"}}})}))},d=(0,a.iU)("global-nav"),s=(0,a.iU)("mobile-toolbar"),u="show-mobile-toolbar";document.querySelector(".pz-header"),(0,r.rI)(d),(0,r.rI)(s)},14237:function(e,n,t){t.d(n,{aF:function(){return o.Z}}),t(89526),t(73961),t(65489),t(43373),t(34797),t(29954),t(89385),t(46147);var o=t(71687);t(40679)}}]);
//# sourceMappingURL=7757.a4624a8ca3f1c8a3bcff.js.map