/*! For license information please see 741.232552eb5b1be2461288.js.LICENSE.txt */
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},r=(new Error).stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="6ab0dd38-a179-474a-99c5-d51d3885930b",e._sentryDebugIdIdentifier="sentry-dbid-6ab0dd38-a179-474a-99c5-d51d3885930b")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"72f9e4ba7cf7ad7a6dff68a1445e5e719e0cf2a3"},(self.webpackChunk_xwords_phoenix=self.webpackChunk_xwords_phoenix||[]).push([[741],{57114:function(){},64403:function(e,r){var t;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],r=0;r<arguments.length;r++){var t=arguments[r];if(t){var u=typeof t;if("string"===u||"number"===u)e.push(t);else if(Array.isArray(t)){if(t.length){var a=o.apply(null,t);a&&e.push(a)}}else if("object"===u){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){e.push(t.toString());continue}for(var i in t)n.call(t,i)&&t[i]&&e.push(i)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(t=function(){return o}.apply(r,[]))||(e.exports=t)}()},83262:function(e,r,t){"use strict";t.d(r,{Z:function(){return S}});var n=t(17692),o=t(71972),u=t(41281),a=t.n(u),i=t(89526),c=t(8206),s=t(83143),f=t(99774),d=t(24880),l=["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef","forwardRef","context"],p=["reactReduxForwardedRef"],y=[],v=[null,null];function m(e,r){var t=e[1];return[r.payload,t+1]}function h(e,r,t){(0,f.L)((function(){return e.apply(void 0,r)}),t)}function b(e,r,t,n,o,u,a){e.current=n,r.current=o,t.current=!1,u.current&&(u.current=null,a())}function g(e,r,t,n,o,u,a,i,c,s){if(e){var f=!1,d=null,l=function(){if(!f){var e,t,l=r.getState();try{e=n(l,o.current)}catch(e){t=e,d=e}t||(d=null),e===u.current?a.current||c():(u.current=e,i.current=e,a.current=!0,s({type:"STORE_UPDATED",payload:{error:t}}))}};return t.onStateChange=l,t.trySubscribe(),l(),function(){if(f=!0,t.tryUnsubscribe(),t.onStateChange=null,d)throw d}}}var w=function(){return[null,0]};function S(e,r){void 0===r&&(r={});var t=r,u=t.getDisplayName,f=void 0===u?function(e){return"ConnectAdvanced("+e+")"}:u,S=t.methodName,C=void 0===S?"connectAdvanced":S,P=t.renderCountProp,R=void 0===P?void 0:P,x=t.shouldHandleStateChanges,_=void 0===x||x,E=t.storeKey,O=void 0===E?"store":E,M=(t.withRef,t.forwardRef),N=void 0!==M&&M,D=t.context,Z=void 0===D?d.E:D,j=(0,o.Z)(t,l),k=Z;return function(r){var t=r.displayName||r.name||"Component",u=f(t),d=(0,n.Z)({},j,{getDisplayName:f,methodName:C,renderCountProp:R,shouldHandleStateChanges:_,storeKey:O,displayName:u,wrappedComponentName:t,WrappedComponent:r}),l=j.pure,S=l?i.useMemo:function(e){return e()};function P(t){var u=(0,i.useMemo)((function(){var e=t.reactReduxForwardedRef,r=(0,o.Z)(t,p);return[t.context,e,r]}),[t]),a=u[0],f=u[1],l=u[2],C=(0,i.useMemo)((function(){return a&&a.Consumer&&(0,c.isContextConsumer)(i.createElement(a.Consumer,null))?a:k}),[a,k]),P=(0,i.useContext)(C),R=Boolean(t.store)&&Boolean(t.store.getState)&&Boolean(t.store.dispatch);Boolean(P)&&Boolean(P.store);var x=R?t.store:P.store,E=(0,i.useMemo)((function(){return function(r){return e(r.dispatch,d)}(x)}),[x]),O=(0,i.useMemo)((function(){if(!_)return v;var e=(0,s.X)(x,R?null:P.subscription),r=e.notifyNestedSubs.bind(e);return[e,r]}),[x,R,P]),M=O[0],N=O[1],D=(0,i.useMemo)((function(){return R?P:(0,n.Z)({},P,{subscription:M})}),[R,P,M]),Z=(0,i.useReducer)(m,y,w),j=Z[0][0],T=Z[1];if(j&&j.error)throw j.error;var A=(0,i.useRef)(),B=(0,i.useRef)(l),I=(0,i.useRef)(),$=(0,i.useRef)(!1),q=S((function(){return I.current&&l===B.current?I.current:E(x.getState(),l)}),[x,j,l]);h(b,[B,A,$,l,q,I,N]),h(g,[_,x,M,E,B,A,$,I,N,T],[x,M,E]);var F=(0,i.useMemo)((function(){return i.createElement(r,(0,n.Z)({},q,{ref:f}))}),[f,r,q]);return(0,i.useMemo)((function(){return _?i.createElement(C.Provider,{value:D},F):F}),[C,F,D])}var x=l?i.memo(P):P;if(x.WrappedComponent=r,x.displayName=P.displayName=u,N){var E=i.forwardRef((function(e,r){return i.createElement(x,(0,n.Z)({},e,{reactReduxForwardedRef:r}))}));return E.displayName=u,E.WrappedComponent=r,a()(E,r)}return a()(x,r)}}},61208:function(e,r,t){"use strict";t.d(r,{ZP:function(){return i}});var n=t(71972),o=["initMapStateToProps","initMapDispatchToProps","initMergeProps"];function u(e,r,t,n){return function(o,u){return t(e(o,u),r(n,u),u)}}function a(e,r,t,n,o){var u,a,i,c,s,f=o.areStatesEqual,d=o.areOwnPropsEqual,l=o.areStatePropsEqual,p=!1;return function(o,y){return p?function(o,p){var y,v,m=!d(p,a),h=!f(o,u,p,a);return u=o,a=p,m&&h?(i=e(u,a),r.dependsOnOwnProps&&(c=r(n,a)),s=t(i,c,a)):m?(e.dependsOnOwnProps&&(i=e(u,a)),r.dependsOnOwnProps&&(c=r(n,a)),s=t(i,c,a)):h?(y=e(u,a),v=!l(y,i),i=y,v&&(s=t(i,c,a)),s):s}(o,y):(i=e(u=o,a=y),c=r(n,a),s=t(i,c,a),p=!0,s)}}function i(e,r){var t=r.initMapStateToProps,i=r.initMapDispatchToProps,c=r.initMergeProps,s=(0,n.Z)(r,o),f=t(e,s),d=i(e,s),l=c(e,s);return(s.pure?a:u)(f,d,l,e,s)}},12047:function(e,r,t){"use strict";function n(e,r){return e===r?0!==e||0!==r||1/e==1/r:e!=e&&r!=r}function o(e,r){if(n(e,r))return!0;if("object"!=typeof e||null===e||"object"!=typeof r||null===r)return!1;var t=Object.keys(e),o=Object.keys(r);if(t.length!==o.length)return!1;for(var u=0;u<t.length;u++)if(!Object.prototype.hasOwnProperty.call(r,t[u])||!n(e[t[u]],r[t[u]]))return!1;return!0}t.d(r,{Z:function(){return o}})},7913:function(e,r){"use strict";var t=60103,n=60106,o=60107,u=60108,a=60114,i=60109,c=60110,s=60112,f=60113,d=60120,l=60115,p=60116;if("function"==typeof Symbol&&Symbol.for){var y=Symbol.for;t=y("react.element"),n=y("react.portal"),o=y("react.fragment"),u=y("react.strict_mode"),a=y("react.profiler"),i=y("react.provider"),c=y("react.context"),s=y("react.forward_ref"),f=y("react.suspense"),d=y("react.suspense_list"),l=y("react.memo"),p=y("react.lazy"),y("react.block"),y("react.server.block"),y("react.fundamental"),y("react.debug_trace_mode"),y("react.legacy_hidden")}r.isContextConsumer=function(e){return function(e){if("object"==typeof e&&null!==e){var r=e.$$typeof;switch(r){case t:switch(e=e.type){case o:case a:case u:case f:case d:return e;default:switch(e=e&&e.$$typeof){case c:case s:case p:case l:case i:return e;default:return r}}case n:return r}}}(e)===c}},8206:function(e,r,t){"use strict";e.exports=t(7913)},71972:function(e,r,t){"use strict";function n(e,r){if(null==e)return{};var t={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(r.includes(n))continue;t[n]=e[n]}return t}t.d(r,{Z:function(){return n}})}}]);
//# sourceMappingURL=741.232552eb5b1be2461288.js.map