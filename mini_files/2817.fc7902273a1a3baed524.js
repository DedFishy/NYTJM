!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="19d7028c-e7b6-4552-835e-d8bce3036932",e._sentryDebugIdIdentifier="sentry-dbid-19d7028c-e7b6-4552-835e-d8bce3036932")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"90199bea12d0307073a61899b1597cc5c29360f3"},(self.webpackChunk_xwords_phoenix=self.webpackChunk_xwords_phoenix||[]).push([[2817],{9861:function(e,n,t){var a=t(89526),r=t(2652),o=t.n(r),i=t(64403),l=t.n(i);const s=e=>{let{icon:n,className:t}=e;return a.createElement("i",{className:l()("pz-icon","pz-icon-".concat(n),t)})};s.propTypes={icon:o().string.isRequired,className:o().string},n.Z=s},20090:function(e,n,t){t.d(n,{Ds:function(){return a}});const a=(e,n)=>{let t;return function(){for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];const i=this;clearTimeout(t),t=setTimeout((()=>e.apply(i,r)),n)}}},18489:function(e,n){n.Z=()=>"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0},86128:function(e,n,t){t.d(n,{Af:function(){return o},Hu:function(){return r},I3:function(){return a}});const a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return 0===e.indexOf("nytimes://")||0===e.indexOf("nytxwd://")},r=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;if(!e)return null;const t=n.createElement("a");t.href=e,t.click()},o=(e,n)=>{n({isLoggedIn:e.isUserLoggedIn,hasXwd:e.isSubscribed,regiId:e.regiID,isFreeTrial:e.isFreeTrial})}},69202:function(e,n,t){t.d(n,{n:function(){return a}});const a=e=>{const n="ios"===window.newsreaderAppPlatform&&"1_BackToPlayTab"===e;if(window.isHybridWebView&&window.NativeBridge)window.NativeBridge.gamesBackToHub();else if(window.isPlayTab||n){const e=document.createElement("a");e.href="nytimes://play",e.click()}else window.location.href="/crosswords";return null}},18540:function(e,n,t){t.d(n,{Z:function(){return s},j:function(){return c}});var a=t(89526),r=t(64403),o=t.n(r),i=t(9861),l={flexContainer:"Banner-module_flexContainer__fxcX2",expandToRow:"Banner-module_expandToRow__gmkDm Banner-module_flexContainer__fxcX2",mobileColumn:"Banner-module_mobileColumn__X1bQJ","visually-hidden":"Banner-module_visually-hidden__Jdirq",banner:"Banner-module_banner__8ZXZF",gridBanner:"Banner-module_gridBanner__hVsLI",multiIconBanner:"Banner-module_multiIconBanner__KZi3f",singleIconBanner:"Banner-module_singleIconBanner__LFn3K",banner__Information:"Banner-module_banner__Information__lRLS7",gridBanner__Information:"Banner-module_gridBanner__Information__nxCSi",multiIconBanner__Information:"Banner-module_multiIconBanner__Information__fIvsn",singleIconBanner__Information:"Banner-module_singleIconBanner__Information__JAPtb",arrow:"Banner-module_arrow__TDcAh",icon:"Banner-module_icon__eBv6E",icon_wordlebot:"Banner-module_icon_wordlebot__EXvKK",icon_wordleArchive:"Banner-module_icon_wordleArchive__tpNcM",icon_connectionsStats:"Banner-module_icon_connectionsStats__aTafh",singleIconBanner__BodyContent:"Banner-module_singleIconBanner__BodyContent__DBVyl",bannerMessageTitle:"Banner-module_bannerMessageTitle__We3dN",singleIconBanner__MessageTitle:"Banner-module_singleIconBanner__MessageTitle__dVnvd",iconHolder:"Banner-module_iconHolder__UIZ3u",multiIconBanner__BodyContent:"Banner-module_multiIconBanner__BodyContent__JUMyC",gridBanner_wordle:"Banner-module_gridBanner_wordle__iNFde",gridBanner__AnimationContainer:"Banner-module_gridBanner__AnimationContainer__im7oO",gridBanner__BodyContent:"Banner-module_gridBanner__BodyContent___8GRA",gridBannerContainer:"Banner-module_gridBannerContainer__ZRQJm",strandsBanner:"Banner-module_strandsBanner__Y0z4O",relative:"Banner-module_relative__wKdlH",strandsBanner__title:"Banner-module_strandsBanner__title__h3jHw",strandsBanner__subtitleContainer:"Banner-module_strandsBanner__subtitleContainer__yIDmd",strandsBanner__longIconContainer:"Banner-module_strandsBanner__longIconContainer__aJlyR",iconButton:"Banner-module_iconButton__lGXVc",bannerInformationTest:"Banner-module_bannerInformationTest__CgqDs",bannerBodyTest:"Banner-module_bannerBodyTest__pvG1w",strandsIcon:"Banner-module_strandsIcon__PJgzz",caretRightContainer:"Banner-module_caretRightContainer__XN_cW",slideDown:"Banner-module_slideDown__EUWPK",flyIn:"Banner-module_flyIn__Ifqfr",flyOut:"Banner-module_flyOut__kNaoB",fadeIn:"Banner-module_fadeIn__DpqRq"};let s=function(e){return e.SINGLE="single-icon",e.MULTI="multi-icon",e.GRID="grid",e.STRANDS="strands",e}({});const c=e=>{let n,{title:t,icon:r,message:c,ctaLink:_,newTab:d,onClickLink:u,onVisible:m,position:f,type:g,children:v,subtitle:B}=e;if((0,a.useEffect)((()=>{m&&m()}),[m]),g===s.GRID)return a.createElement("a",{href:null!=_?_:"",target:d?"_blank":"_self",rel:"noopener noreferrer",onClick:()=>{u&&u()},className:o()(l.gridBanner,"wordle"===window.pageName&&l.gridBanner_wordle),"aria-live":"polite",style:{position:f}},a.createElement("div",{className:l.gridBanner__AnimationContainer}),a.createElement("div",{className:l.gridBanner__Information,"aria-label":"Information"},a.createElement("div",{className:l.gridBanner__BodyContent},a.createElement("p",null,"Play all games in the NYT Games app!"))),a.createElement("button",{className:l.arrow,type:"button"},a.createElement(i.Z,{icon:"back"})));if(g===s.STRANDS)return a.createElement("a",{href:"https://fpx3r.app.goo.gl/app-store",target:d?"_blank":"_self",rel:"noopener noreferrer",onClick:()=>{u&&u()},style:{position:f},className:o()(l.strandsBanner),"aria-live":"polite"},a.createElement("div",{className:l.bannerInformationTest,"aria-label":"Information"},a.createElement("h1",{className:l.strandsBanner__title},t),a.createElement("div",{className:l.strandsBanner__longIconContainer},a.createElement("div",null,a.createElement("div",{className:l.strandsIcon}),a.createElement("div",{className:l.caretRightContainer},a.createElement("button",{className:l.arrow,type:"button"},a.createElement(i.Z,{icon:"back"})))),a.createElement("div",{className:l.strandsBanner__subtitleContainer},B&&a.createElement("p",null,B)))));if(g===s.MULTI)return a.createElement("a",{href:null!=_?_:"",target:d?"_blank":"_self",rel:"noopener noreferrer",onClick:()=>{u&&u()},style:{position:f},className:o()(l.multiIconBanner),"aria-live":"polite"},a.createElement("div",{className:l.multiIconBanner__Information,"aria-label":"Information"},a.createElement("div",{className:l.iconHolder}),a.createElement("div",{className:l.multiIconBanner__BodyContent},a.createElement("h3",null,t),c&&a.createElement("p",null,c))),a.createElement("button",{className:l.arrow,type:"button"},a.createElement(i.Z,{icon:"back"})));switch(r){case"wordlebot":n=l.icon_wordlebot;break;case"wordle_archive":n=l.icon_wordleArchive;break;case"connections-stats_cta":n=l.icon_connectionsStats}return a.createElement("a",{href:null!=_?_:"",target:d?"_blank":"_self",rel:"noopener noreferrer",onClick:()=>{u&&u()},style:{position:f},className:o()(l.singleIconBanner),"aria-live":"polite"},a.createElement("div",{className:o()(l.singleIconBanner__Information,{[l.singleIconBanner__MessageIcon]:c}),"aria-label":"Information"},a.createElement("div",{className:o()(l.icon,n)},v),a.createElement("div",{className:o()(l.singleIconBanner__BodyContent)},a.createElement("h3",{className:c?l.singleIconBanner__MessageTitle:""},t),c&&a.createElement("p",null,c))),a.createElement("button",{className:l.arrow,type:"button"},a.createElement(i.Z,{icon:"back"})))}},75593:function(e,n,t){t.d(n,{Q:function(){return a}});const a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return/Android/.test(e)?"https://play.google.com/store/apps/details?id=com.nytimes.crossword&referrer=utm_source%3DAndroidReaderMini%26utm_medium%3DCongratsModule%26utm_term%3DgetTheApp%26utm_campaign%3DMiniUpsell&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1":/|iPad|iPhone|/.test(e)?"https://itunes.apple.com/us/app/nytimes-crossword-daily-word/id307569751?mt=8":""}},40245:function(e,n,t){var a=t(89526),r=t(64403),o=t.n(r),i=t(9861),l=t(92477);n.Z=e=>{let{text:n="New",position:t="default",className:r=""}=e;return a.createElement("span",{className:o()(l.Z.pill,l.Z[t],r)},a.createElement(i.Z,{icon:"sparkle","aria-hidden":"true"}),n)}},53248:function(e,n,t){var a=t(38661);n.Z=e=>{const{winHeight:n,winWidth:t}=(0,a.Z)();return e({winHeight:n,winWidth:t})}},34458:function(e,n,t){t.d(n,{O1:function(){return c},pG:function(){return s}});var a=t(89526),r=t(57256);const o=["activationRegiModal","activationRegiModalControl","loginOffer","letterboxedWelcome","gamesSaleCTA","gamesSaleBanner","authFlowConnections","connectionsArchiveSub","connectionsArchiveNonSub","connectionsArchiveRecentSub","connectionsArchiveAllButHoldout","hdUpsellTest","hdUpsellTestControl","wordleCalculatedStreakCutover","wordleCalculatedStatsCutover","miniArchivePaywallControl","miniArchivePaywallRedesignV1","miniArchivePaywallRedesignV2","sbDarkMode","zorseNav","strandsDarkMode","connectionsDarkMode"],i={activationRegiModal:{testName:"ON_wordle_regi_modal",activeVariant:"1_regi_modal"},activationRegiModalControl:{testName:"ON_wordle_regi_modal",activeVariant:"0_control"},loginOffer:{testName:"ON_wordleOnboardingOffer_0822",activeVariant:"1_ShowOffer"},letterboxedWelcome:{testName:"GAMES_letter_boxed_welcome_0328",activeVariant:"1_NewLetterBoxedWelcome"},gamesSaleCTA:{testName:"MWD_phoenix_games_sale_cta",activeVariant:"1_Show"},gamesSaleBanner:{testName:"MWD_phoenix_games_sale_banner",activeVariant:"1_Show"},authFlowConnections:{testName:"GAMES_connections_auth_web_1016",activeVariant:"1_Auth_Flow"},connectionsArchiveSub:{testName:"GAMES_conn_archive_sub_0805",activeVariant:"1_conn_archive"},connectionsArchiveNonSub:{testName:"GAMES_conn_archive_nonsub_0805",activeVariant:"1_conn_archive"},connectionsArchiveRecentSub:{testName:"GAMES_conn_archive_newsub_0805",activeVariant:"1_conn_archive"},connectionsArchiveAllButHoldout:{testName:"GAMES_conn_archive_all_but_holdout_0924",activeVariant:"1_conn_archive"},hdUpsellTest:{testName:"CONV_GUAC_XWord_HDUpsell_Test_0624",activeVariant:"1_upsell"},hdUpsellTestControl:{testName:"CONV_GUAC_XWord_HDUpsell_Test_0624",activeVariant:"0_control"},wordleCalculatedStreakCutover:{testName:"GAMES_wordleCalculatedStreakCutover_0624",activeVariant:"1_Cutover"},wordleCalculatedStatsCutover:{testName:"GAMES_wordleCalculatedStatsCutover_0724",activeVariant:"1_Cutover"},miniArchivePaywallControl:{testName:"CONV_GUAC_MINI_ARCHIVE_PAYWALL_REDESIGN_0924",activeVariant:"0_control"},miniArchivePaywallRedesignV1:{testName:"CONV_GUAC_MINI_ARCHIVE_PAYWALL_REDESIGN_0924",activeVariant:"1_new_design"},miniArchivePaywallRedesignV2:{testName:"CONV_GUAC_MINI_ARCHIVE_PAYWALL_REDESIGN_0924",activeVariant:"2_new_design"},sbDarkMode:{testName:"GAMES_sbDarkMode_0916",activeVariant:"1_enabled"},zorseNav:{testName:"GAMES_zorseNav_0924",activeVariant:"1_ShowZorse"},strandsDarkMode:{testName:"GAMES_strandsDarkMode_0916",activeVariant:"1_enabled"},connectionsDarkMode:{testName:"GAMES_connectionsDarkMode_0926",activeVariant:"1_enabled"}},l=e=>o.reduce(((n,t)=>{if(e){const{testName:a,activeVariant:r}=i[t];n[t]=e(a)===r}else n[t]=!1;return n}),{}),s=a.createContext(l()),c=e=>{let{children:n}=e;const{getVariant:t}=(0,r.Z)(),i=l(t),[c,_]=a.useState(i);return a.useEffect((()=>{var e,n;e=i,n=c,o.some((t=>e[t]!==n[t]))&&_(i)}),[i]),a.createElement(s.Provider,{value:c},n)}},57256:function(e,n,t){var a=t(89526),r=t(29684);n.Z=()=>(0,a.useContext)(r.Z)},155:function(e,n,t){t.d(n,{UF:function(){return o}});var a=t(69802),r=(t(57256),t(89064));const o=()=>{const e=(0,r.Z)("connectionsArchiveAllButHoldout");return!(0,a._7)()&&!(0,a.Xj)()&&e}},42101:function(e,n,t){function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){var a,r,o,i;a=e,r=n,o=t[n],(r="symbol"==typeof(i=function(e,n){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var a=t.call(e,"string");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r))?i:i+"")in a?Object.defineProperty(a,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):a[r]=o})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}t.d(n,{DX:function(){return u},Mc:function(){return s},X:function(){return i},eV:function(){return d},g2:function(){return o},gQ:function(){return c},qQ:function(){return _},wG:function(){return l}});const o=e=>"settings"===e,i=(e,n)=>o(e.selectPuzzleIdOrSettings(n)),l=(e,n)=>{const t=i(e,n),a=((e,n)=>{const t=e.selectPuzzleIdOrSettings(n);return e.selectMoogleState(n).getPuzzleProgress.statesByPuzzleId[t]||null})(e,n),o=((e,n)=>e.selectMoogleState(n).getRemoteSettings.data||null)(e,n);return t&&null!=o&&o.settings?r({timestamp:o.timestamp,schemaVersion:o.schema_version||""},o.settings):!t&&null!=a&&a.game_data?r({timestamp:a.timestamp,schemaVersion:a.schema_version},a.game_data):null},s=(e,n)=>e.selectMoogleState(n).regiId,c=(e,n)=>{const{postRequest:t}=e.selectMoogleState(n);return Object.keys(t).some((e=>t[e].isLoading))},_=(e,n)=>e.selectMoogleState(n).pendingSaves,d=(e,n)=>_(e,n).length>0,u=(e,n)=>{var t;const{postRequest:a}=e.selectMoogleState(n);return null===(t=a[e.selectPuzzleIdOrSettings(n)])||void 0===t?void 0:t.isErrorRetry}},92477:function(e,n){n.Z={flexContainer:"PillBlue-module_flexContainer__f90wk",expandToRow:"PillBlue-module_expandToRow___evsG PillBlue-module_flexContainer__f90wk",mobileColumn:"PillBlue-module_mobileColumn__sW3St","visually-hidden":"PillBlue-module_visually-hidden__uHTGr",pill:"PillBlue-module_pill__Tpdm7",default:"PillBlue-module_default__rE5l9","top-right-outside":"PillBlue-module_top-right-outside__P0JWg","top-right-edge":"PillBlue-module_top-right-edge__mG3Aq",slideDown:"PillBlue-module_slideDown__tqdf2",flyIn:"PillBlue-module_flyIn__mF0gp",flyOut:"PillBlue-module_flyOut__FK_Gg",fadeIn:"PillBlue-module_fadeIn__JHPml"}}}]);
//# sourceMappingURL=2817.fc7902273a1a3baed524.js.map