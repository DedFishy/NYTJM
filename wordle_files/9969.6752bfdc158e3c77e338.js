!function(){try{var t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},e=(new Error).stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="0e1ec796-faa9-4e98-9bc7-e2e52f90bad2",t._sentryDebugIdIdentifier="sentry-dbid-0e1ec796-faa9-4e98-9bc7-e2e52f90bad2")}catch(t){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"90199bea12d0307073a61899b1597cc5c29360f3"},(self.webpackChunk_xwords_phoenix=self.webpackChunk_xwords_phoenix||[]).push([[9969],{96148:function(t,e,n){n.d(e,{YF:function(){return f},x7:function(){return u}});var r=n(85983),o=n(76200),i=n(89526),s=n(73961);const u=t=>{const{element:e,padding:n}=t;return{name:"arrow",options:t,fn(t){return o=e,Object.prototype.hasOwnProperty.call(o,"current")?null!=e.current?(0,r.x7)({element:e.current,padding:n}).fn(t):{}:e?(0,r.x7)({element:e,padding:n}).fn(t):{};var o}}};var c="undefined"!=typeof document?i.useLayoutEffect:i.useEffect;function a(t,e){if(t===e)return!0;if(typeof t!=typeof e)return!1;if("function"==typeof t&&t.toString()===e.toString())return!0;let n,r,o;if(t&&e&&"object"==typeof t){if(Array.isArray(t)){if(n=t.length,n!=e.length)return!1;for(r=n;0!=r--;)if(!a(t[r],e[r]))return!1;return!0}if(o=Object.keys(t),n=o.length,n!==Object.keys(e).length)return!1;for(r=n;0!=r--;)if(!Object.prototype.hasOwnProperty.call(e,o[r]))return!1;for(r=n;0!=r--;){const n=o[r];if(!("_owner"===n&&t.$$typeof||a(t[n],e[n])))return!1}return!0}return t!=t&&e!=e}function l(t){const e=i.useRef(t);return c((()=>{e.current=t})),e}function f(t){void 0===t&&(t={});const{placement:e="bottom",strategy:n="absolute",middleware:r=[],platform:u,whileElementsMounted:f,open:p}=t,[d,h]=i.useState({x:null,y:null,strategy:n,placement:e,middlewareData:{},isPositioned:!1}),[m,g]=i.useState(r);a(m,r)||g(r);const y=i.useRef(null),v=i.useRef(null),x=i.useRef(d),E=l(f),b=l(u),[w,C]=i.useState(null),[R,S]=i.useState(null),N=i.useCallback((t=>{y.current!==t&&(y.current=t,C(t))}),[]),O=i.useCallback((t=>{v.current!==t&&(v.current=t,S(t))}),[]),T=i.useCallback((()=>{if(!y.current||!v.current)return;const t={placement:e,strategy:n,middleware:m};b.current&&(t.platform=b.current),(0,o.oo)(y.current,v.current,t).then((t=>{const e={...t,isPositioned:!0};k.current&&!a(x.current,e)&&(x.current=e,s.flushSync((()=>{h(e)})))}))}),[m,e,n,b]);c((()=>{!1===p&&x.current.isPositioned&&(x.current.isPositioned=!1,h((t=>({...t,isPositioned:!1}))))}),[p]);const k=i.useRef(!1);c((()=>(k.current=!0,()=>{k.current=!1})),[]),c((()=>{if(w&&R){if(E.current)return E.current(w,R,T);T()}}),[w,R,T,E]);const L=i.useMemo((()=>({reference:y,floating:v,setReference:N,setFloating:O})),[N,O]),M=i.useMemo((()=>({reference:w,floating:R})),[w,R]);return i.useMemo((()=>({...d,update:T,refs:L,elements:M,reference:N,floating:O})),[d,T,L,M,N,O])}},29436:function(t,e,n){var r;n.d(e,{Y$:function(){return d},YF:function(){return x}});var o=n(76200),i=n(96148),s=n(89526);function u(){return u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},u.apply(this,arguments)}n(73961);var c="undefined"!=typeof document?s.useLayoutEffect:s.useEffect;let a=!1,l=0;const f=()=>"floating-ui-"+l++,p=(r||(r=n.t(s,2)))["useId".toString()]||function(){const[t,e]=s.useState((()=>a?f():void 0));return c((()=>{null==t&&e(f())}),[]),s.useEffect((()=>{a||(a=!0)}),[]),t},d=s.forwardRef((function(t,e){var n;let{context:{placement:r,elements:{floating:i},middlewareData:{arrow:c}},width:a=14,height:l=7,tipRadius:f=0,strokeWidth:d=0,staticOffset:h,stroke:m,d:g,...y}=t;d*=2;const v=d/2,x=a/2*(f/-8+1),E=l/2*f/4,[b,w]=r.split("-"),C=!!i&&o.Jv.isRTL(i),R=!!g,S="top"===b||"bottom"===b,N=h&&"end"===w?"bottom":"top";let O=h&&"end"===w?"right":"left";h&&C&&(O="end"===w?"left":"right");const T=R?0:v,k=null!=(null==c?void 0:c.x)?h||c.x:"",L=null!=(null==c?void 0:c.y)?h||c.y+T:"",M=g||"M0,0 H"+a+" L"+(a-x)+","+(l-E)+" Q"+a/2+","+l+" "+x+","+(l-E)+" Z",D={top:R?"rotate(180deg)":"",left:R?"rotate(90deg)":"rotate(-90deg)",bottom:R?"":"rotate(180deg)",right:R?"rotate(-90deg)":"rotate(90deg)"}[b],F=p();return s.createElement("svg",u({},y,{suppressHydrationWarning:!0,"aria-hidden":!0,ref:e,width:R?a:a+d,height:a,viewBox:"0 0 "+a+" "+(l>a?l:a),style:{...y.style,position:"absolute",pointerEvents:"none",[O]:k,[N]:L,[b]:S||R?"100%":"calc(100% - "+d/2+"px)",transform:D+(null!=(n=y.style)&&n.transform?" "+y.style.transform:"")}}),d>0&&s.createElement("path",{clipPath:"url(#"+F+")",fill:"none",stroke:m,strokeWidth:d+(g?0:1),d:M}),s.createElement("path",{stroke:d&&!g?y.fill:"none",d:M}),s.createElement("clipPath",{id:F},s.createElement("rect",{x:-v,y:v*(R?-1:1),width:a+d,height:a})))}));const h=s.createContext(null),m=()=>s.useContext(h);function g(t){return(e=t,(null==e?void 0:e.ownerDocument)||document).defaultView||window;var e}function y(t){return!!t&&t instanceof g(t).Element}const v=(r||(r=n.t(s,2)))["useInsertionEffect".toString()]||(t=>t());function x(t){void 0===t&&(t={});const{open:e=!1,onOpenChange:n,nodeId:r}=t,o=(0,i.YF)(t),u=m(),a=s.useRef(null),l=s.useRef({}),f=s.useState((()=>function(){const t=new Map;return{emit(e,n){var r;null==(r=t.get(e))||r.forEach((t=>t(n)))},on(e,n){t.set(e,[...t.get(e)||[],n])},off(e,n){var r;t.set(e,(null==(r=t.get(e))?void 0:r.filter((t=>t!==n)))||[])}}}()))[0],d=p(),[h,g]=s.useState(null),x=s.useCallback((t=>{const e=y(t)?{getBoundingClientRect:()=>t.getBoundingClientRect(),contextElement:t}:t;o.refs.setReference(e)}),[o.refs]),E=s.useCallback((t=>{(y(t)||null===t)&&(a.current=t,g(t)),(y(o.refs.reference.current)||null===o.refs.reference.current||null!==t&&!y(t))&&o.refs.setReference(t)}),[o.refs]),b=s.useMemo((()=>({...o.refs,setReference:E,setPositionReference:x,domReference:a})),[o.refs,E,x]),w=s.useMemo((()=>({...o.elements,domReference:h})),[o.elements,h]),C=function(t){const e=s.useRef((()=>{}));return v((()=>{e.current=t})),s.useCallback((function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return null==e.current?void 0:e.current(...n)}),[])}(n),R=s.useMemo((()=>({...o,refs:b,elements:w,dataRef:l,nodeId:r,floatingId:d,events:f,open:e,onOpenChange:C})),[o,r,d,f,e,C,b,w]);return c((()=>{const t=null==u?void 0:u.nodesRef.current.find((t=>t.id===r));t&&(t.context=R)})),s.useMemo((()=>({...o,context:R,refs:b,elements:w,reference:E,positionReference:x})),[o,b,w,R,E,x])}},26171:function(t,e,n){n.d(e,{Z:function(){return b}});var r=n(17692),o=n(71972),i=n(74289);function s(t,e){return t.replace(new RegExp("(^|\\s)"+e+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var u=n(89526),c=n(73961),a=n(8821),l=function(t){return t.scrollTop},f="unmounted",p="exited",d="entering",h="entered",m="exiting",g=function(t){function e(e,n){var r;r=t.call(this,e,n)||this;var o,i=n&&!n.isMounting?e.enter:e.appear;return r.appearStatus=null,e.in?i?(o=p,r.appearStatus=d):o=h:o=e.unmountOnExit||e.mountOnEnter?f:p,r.state={status:o},r.nextCallback=null,r}(0,i.Z)(e,t),e.getDerivedStateFromProps=function(t,e){return t.in&&e.status===f?{status:p}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(t){var e=null;if(t!==this.props){var n=this.state.status;this.props.in?n!==d&&n!==h&&(e=d):n!==d&&n!==h||(e=m)}this.updateStatus(!1,e)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var t,e,n,r=this.props.timeout;return t=e=n=r,null!=r&&"number"!=typeof r&&(t=r.exit,e=r.enter,n=void 0!==r.appear?r.appear:e),{exit:t,enter:e,appear:n}},n.updateStatus=function(t,e){if(void 0===t&&(t=!1),null!==e)if(this.cancelNextCallback(),e===d){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:c.findDOMNode(this);n&&l(n)}this.performEnter(t)}else this.performExit();else this.props.unmountOnExit&&this.state.status===p&&this.setState({status:f})},n.performEnter=function(t){var e=this,n=this.props.enter,r=this.context?this.context.isMounting:t,o=this.props.nodeRef?[r]:[c.findDOMNode(this),r],i=o[0],s=o[1],u=this.getTimeouts(),a=r?u.appear:u.enter;t||n?(this.props.onEnter(i,s),this.safeSetState({status:d},(function(){e.props.onEntering(i,s),e.onTransitionEnd(a,(function(){e.safeSetState({status:h},(function(){e.props.onEntered(i,s)}))}))}))):this.safeSetState({status:h},(function(){e.props.onEntered(i)}))},n.performExit=function(){var t=this,e=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:c.findDOMNode(this);e?(this.props.onExit(r),this.safeSetState({status:m},(function(){t.props.onExiting(r),t.onTransitionEnd(n.exit,(function(){t.safeSetState({status:p},(function(){t.props.onExited(r)}))}))}))):this.safeSetState({status:p},(function(){t.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(t,e){e=this.setNextCallback(e),this.setState(t,e)},n.setNextCallback=function(t){var e=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,e.nextCallback=null,t(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(t,e){this.setNextCallback(e);var n=this.props.nodeRef?this.props.nodeRef.current:c.findDOMNode(this),r=null==t&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],i=o[0],s=o[1];this.props.addEndListener(i,s)}null!=t&&setTimeout(this.nextCallback,t)}else setTimeout(this.nextCallback,0)},n.render=function(){var t=this.state.status;if(t===f)return null;var e=this.props,n=e.children,r=(e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef,(0,o.Z)(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return u.createElement(a.Z.Provider,{value:null},"function"==typeof n?n(t,r):u.cloneElement(u.Children.only(n),r))},e}(u.Component);function y(){}g.contextType=a.Z,g.propTypes={},g.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:y,onEntering:y,onEntered:y,onExit:y,onExiting:y,onExited:y},g.UNMOUNTED=f,g.EXITED=p,g.ENTERING=d,g.ENTERED=h,g.EXITING=m;var v=g,x=function(t,e){return t&&e&&e.split(" ").forEach((function(e){return r=e,void((n=t).classList?n.classList.remove(r):"string"==typeof n.className?n.className=s(n.className,r):n.setAttribute("class",s(n.className&&n.className.baseVal||"",r)));var n,r}))},E=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).appliedClasses={appear:{},enter:{},exit:{}},e.onEnter=function(t,n){var r=e.resolveArguments(t,n),o=r[0],i=r[1];e.removeClasses(o,"exit"),e.addClass(o,i?"appear":"enter","base"),e.props.onEnter&&e.props.onEnter(t,n)},e.onEntering=function(t,n){var r=e.resolveArguments(t,n),o=r[0],i=r[1]?"appear":"enter";e.addClass(o,i,"active"),e.props.onEntering&&e.props.onEntering(t,n)},e.onEntered=function(t,n){var r=e.resolveArguments(t,n),o=r[0],i=r[1]?"appear":"enter";e.removeClasses(o,i),e.addClass(o,i,"done"),e.props.onEntered&&e.props.onEntered(t,n)},e.onExit=function(t){var n=e.resolveArguments(t)[0];e.removeClasses(n,"appear"),e.removeClasses(n,"enter"),e.addClass(n,"exit","base"),e.props.onExit&&e.props.onExit(t)},e.onExiting=function(t){var n=e.resolveArguments(t)[0];e.addClass(n,"exit","active"),e.props.onExiting&&e.props.onExiting(t)},e.onExited=function(t){var n=e.resolveArguments(t)[0];e.removeClasses(n,"exit"),e.addClass(n,"exit","done"),e.props.onExited&&e.props.onExited(t)},e.resolveArguments=function(t,n){return e.props.nodeRef?[e.props.nodeRef.current,t]:[t,n]},e.getClassNames=function(t){var n=e.props.classNames,r="string"==typeof n,o=r?(r&&n?n+"-":"")+t:n[t];return{baseClassName:o,activeClassName:r?o+"-active":n[t+"Active"],doneClassName:r?o+"-done":n[t+"Done"]}},e}(0,i.Z)(e,t);var n=e.prototype;return n.addClass=function(t,e,n){var r=this.getClassNames(e)[n+"ClassName"],o=this.getClassNames("enter").doneClassName;"appear"===e&&"done"===n&&o&&(r+=" "+o),"active"===n&&t&&l(t),r&&(this.appliedClasses[e][n]=r,function(t,e){t&&e&&e.split(" ").forEach((function(e){return r=e,void((n=t).classList?n.classList.add(r):function(t,e){return t.classList?!!e&&t.classList.contains(e):-1!==(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+e+" ")}(n,r)||("string"==typeof n.className?n.className=n.className+" "+r:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+r)));var n,r}))}(t,r))},n.removeClasses=function(t,e){var n=this.appliedClasses[e],r=n.base,o=n.active,i=n.done;this.appliedClasses[e]={},r&&x(t,r),o&&x(t,o),i&&x(t,i)},n.render=function(){var t=this.props,e=(t.classNames,(0,o.Z)(t,["classNames"]));return u.createElement(v,(0,r.Z)({},e,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},e}(u.Component);E.defaultProps={classNames:""},E.propTypes={};var b=E},8821:function(t,e,n){var r=n(89526);e.Z=r.createContext(null)},40826:function(t,e){function n(t,e){return t===e}function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n,r=null,o=null;return function(){return function(t,e,n){if(null===e||null===n||e.length!==n.length)return!1;for(var r=e.length,o=0;o<r;o++)if(!t(e[o],n[o]))return!1;return!0}(e,r,arguments)||(o=t.apply(null,arguments)),r=arguments,o}}e.P1=function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];return function(){for(var e=arguments.length,o=Array(e),i=0;i<e;i++)o[i]=arguments[i];var s=0,u=o.pop(),c=function(t){var e=Array.isArray(t[0])?t[0]:t;if(!e.every((function(t){return"function"==typeof t}))){var n=e.map((function(t){return typeof t})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+n+"]")}return e}(o),a=t.apply(void 0,[function(){return s++,u.apply(null,arguments)}].concat(n)),l=r((function(){for(var t=[],e=c.length,n=0;n<e;n++)t.push(c[n].apply(null,arguments));return a.apply(null,t)}));return l.resultFunc=u,l.recomputations=function(){return s},l.resetRecomputations=function(){return s=0},l}}(r)},85983:function(t,e,n){n.d(e,{oo:function(){return i},x7:function(){return s}});var r=n(71347);function o(t,e,n){let{reference:o,floating:i}=t;const s=(0,r.Qq)(e),u=(0,r.Wh)(e),c=(0,r.I4)(u),a=(0,r.k3)(e),l="y"===s,f=o.x+o.width/2-i.width/2,p=o.y+o.height/2-i.height/2,d=o[c]/2-i[c]/2;let h;switch(a){case"top":h={x:f,y:o.y-i.height};break;case"bottom":h={x:f,y:o.y+o.height};break;case"right":h={x:o.x+o.width,y:p};break;case"left":h={x:o.x-i.width,y:p};break;default:h={x:o.x,y:o.y}}switch((0,r.hp)(e)){case"start":h[u]-=d*(n&&l?-1:1);break;case"end":h[u]+=d*(n&&l?-1:1)}return h}const i=async(t,e,n)=>{const{placement:r="bottom",strategy:i="absolute",middleware:s=[],platform:u}=n,c=s.filter(Boolean),a=await(null==u.isRTL?void 0:u.isRTL(e));let l=await u.getElementRects({reference:t,floating:e,strategy:i}),{x:f,y:p}=o(l,r,a),d=r,h={},m=0;for(let n=0;n<c.length;n++){const{name:s,fn:g}=c[n],{x:y,y:v,data:x,reset:E}=await g({x:f,y:p,initialPlacement:r,placement:d,strategy:i,middlewareData:h,rects:l,platform:u,elements:{reference:t,floating:e}});f=null!=y?y:f,p=null!=v?v:p,h={...h,[s]:{...h[s],...x}},E&&m<=50&&(m++,"object"==typeof E&&(E.placement&&(d=E.placement),E.rects&&(l=!0===E.rects?await u.getElementRects({reference:t,floating:e,strategy:i}):E.rects),({x:f,y:p}=o(l,d,a))),n=-1)}return{x:f,y:p,placement:d,strategy:i,middlewareData:h}},s=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:i,rects:s,platform:u,elements:c}=e,{element:a,padding:l=0}=(0,r.ku)(t,e)||{};if(null==a)return{};const f=(0,r.yd)(l),p={x:n,y:o},d=(0,r.Wh)(i),h=(0,r.I4)(d),m=await u.getDimensions(a),g="y"===d,y=g?"top":"left",v=g?"bottom":"right",x=g?"clientHeight":"clientWidth",E=s.reference[h]+s.reference[d]-p[d]-s.floating[h],b=p[d]-s.reference[d],w=await(null==u.getOffsetParent?void 0:u.getOffsetParent(a));let C=w?w[x]:0;C&&await(null==u.isElement?void 0:u.isElement(w))||(C=c.floating[x]||s.floating[h]);const R=E/2-b/2,S=C/2-m[h]/2-1,N=(0,r.VV)(f[y],S),O=(0,r.VV)(f[v],S),T=N,k=C-m[h]-O,L=C/2-m[h]/2+R,M=(0,r.uZ)(T,L,k),D=null!=(0,r.hp)(i)&&L!=M&&s.reference[h]/2-(L<T?N:O)-m[h]/2<0?L<T?T-L:k-L:0;return{[d]:p[d]-D,data:{[d]:M,centerOffset:L-M+D}}}})},76200:function(t,e,n){n.d(e,{Me:function(){return P},oo:function(){return W},Jv:function(){return A}});var r=n(71347),o=n(85983);function i(t){return c(t)?(t.nodeName||"").toLowerCase():"#document"}function s(t){var e;return(null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function u(t){var e;return null==(e=(c(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function c(t){return t instanceof Node||t instanceof s(t).Node}function a(t){return t instanceof Element||t instanceof s(t).Element}function l(t){return t instanceof HTMLElement||t instanceof s(t).HTMLElement}function f(t){return"undefined"!=typeof ShadowRoot&&(t instanceof ShadowRoot||t instanceof s(t).ShadowRoot)}function p(t){const{overflow:e,overflowX:n,overflowY:r,display:o}=y(t);return/auto|scroll|overlay|hidden|clip/.test(e+r+n)&&!["inline","contents"].includes(o)}function d(t){return["table","td","th"].includes(i(t))}function h(t){const e=m(),n=y(t);return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!e&&!!n.backdropFilter&&"none"!==n.backdropFilter||!e&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some((t=>(n.willChange||"").includes(t)))||["paint","layout","strict","content"].some((t=>(n.contain||"").includes(t)))}function m(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function g(t){return["html","body","#document"].includes(i(t))}function y(t){return s(t).getComputedStyle(t)}function v(t){return a(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function x(t){if("html"===i(t))return t;const e=t.assignedSlot||t.parentNode||f(t)&&t.host||u(t);return f(e)?e.host:e}function E(t){const e=x(t);return g(e)?t.ownerDocument?t.ownerDocument.body:t.body:l(e)&&p(e)?e:E(e)}function b(t,e){var n;void 0===e&&(e=[]);const r=E(t),o=r===(null==(n=t.ownerDocument)?void 0:n.body),i=s(r);return o?e.concat(i,i.visualViewport||[],p(r)?r:[],i.frameElement?b(i.frameElement):[]):e.concat(r,b(r))}function w(t){const e=y(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=l(t),s=i?t.offsetWidth:n,u=i?t.offsetHeight:o,c=(0,r.NM)(n)!==s||(0,r.NM)(o)!==u;return c&&(n=s,o=u),{width:n,height:o,$:c}}function C(t){return a(t)?t:t.contextElement}function R(t){const e=C(t);if(!l(e))return(0,r.ze)(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:s}=w(e);let u=(s?(0,r.NM)(n.width):n.width)/o,c=(s?(0,r.NM)(n.height):n.height)/i;return u&&Number.isFinite(u)||(u=1),c&&Number.isFinite(c)||(c=1),{x:u,y:c}}const S=(0,r.ze)(0);function N(t){const e=s(t);return m()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:S}function O(t,e,n,o){void 0===e&&(e=!1),void 0===n&&(n=!1);const i=t.getBoundingClientRect(),u=C(t);let c=(0,r.ze)(1);e&&(o?a(o)&&(c=R(o)):c=R(t));const l=function(t,e,n){return void 0===e&&(e=!1),!(!n||e&&n!==s(t))&&e}(u,n,o)?N(u):(0,r.ze)(0);let f=(i.left+l.x)/c.x,p=(i.top+l.y)/c.y,d=i.width/c.x,h=i.height/c.y;if(u){const t=s(u),e=o&&a(o)?s(o):o;let n=t.frameElement;for(;n&&o&&e!==t;){const t=R(n),e=n.getBoundingClientRect(),r=y(n),o=e.left+(n.clientLeft+parseFloat(r.paddingLeft))*t.x,i=e.top+(n.clientTop+parseFloat(r.paddingTop))*t.y;f*=t.x,p*=t.y,d*=t.x,h*=t.y,f+=o,p+=i,n=s(n).frameElement}}return(0,r.JB)({width:d,height:h,x:f,y:p})}function T(t){return O(u(t)).left+v(t).scrollLeft}function k(t,e,n){let o;if("viewport"===e)o=function(t,e){const n=s(t),r=u(t),o=n.visualViewport;let i=r.clientWidth,c=r.clientHeight,a=0,l=0;if(o){i=o.width,c=o.height;const t=m();(!t||t&&"fixed"===e)&&(a=o.offsetLeft,l=o.offsetTop)}return{width:i,height:c,x:a,y:l}}(t,n);else if("document"===e)o=function(t){const e=u(t),n=v(t),o=t.ownerDocument.body,i=(0,r.Fp)(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),s=(0,r.Fp)(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let c=-n.scrollLeft+T(t);const a=-n.scrollTop;return"rtl"===y(o).direction&&(c+=(0,r.Fp)(e.clientWidth,o.clientWidth)-i),{width:i,height:s,x:c,y:a}}(u(t));else if(a(e))o=function(t,e){const n=O(t,!0,"fixed"===e),o=n.top+t.clientTop,i=n.left+t.clientLeft,s=l(t)?R(t):(0,r.ze)(1);return{width:t.clientWidth*s.x,height:t.clientHeight*s.y,x:i*s.x,y:o*s.y}}(e,n);else{const n=N(t);o={...e,x:e.x-n.x,y:e.y-n.y}}return(0,r.JB)(o)}function L(t,e){const n=x(t);return!(n===e||!a(n)||g(n))&&("fixed"===y(n).position||L(n,e))}function M(t,e,n){const o=l(e),s=u(e),c="fixed"===n,a=O(t,!0,c,e);let f={scrollLeft:0,scrollTop:0};const d=(0,r.ze)(0);if(o||!o&&!c)if(("body"!==i(e)||p(s))&&(f=v(e)),o){const t=O(e,!0,c,e);d.x=t.x+e.clientLeft,d.y=t.y+e.clientTop}else s&&(d.x=T(s));return{x:a.left+f.scrollLeft-d.x,y:a.top+f.scrollTop-d.y,width:a.width,height:a.height}}function D(t,e){return l(t)&&"fixed"!==y(t).position?e?e(t):t.offsetParent:null}function F(t,e){const n=s(t);if(!l(t))return n;let r=D(t,e);for(;r&&d(r)&&"static"===y(r).position;)r=D(r,e);return r&&("html"===i(r)||"body"===i(r)&&"static"===y(r).position&&!h(r))?n:r||function(t){let e=x(t);for(;l(e)&&!g(e);){if(h(e))return e;e=x(e)}return null}(t)||n}const A={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:n,strategy:o}=t;const s=l(n),c=u(n);if(n===c)return e;let a={scrollLeft:0,scrollTop:0},f=(0,r.ze)(1);const d=(0,r.ze)(0);if((s||!s&&"fixed"!==o)&&(("body"!==i(n)||p(c))&&(a=v(n)),l(n))){const t=O(n);f=R(n),d.x=t.x+n.clientLeft,d.y=t.y+n.clientTop}return{width:e.width*f.x,height:e.height*f.y,x:e.x*f.x-a.scrollLeft*f.x+d.x,y:e.y*f.y-a.scrollTop*f.y+d.y}},getDocumentElement:u,getClippingRect:function(t){let{element:e,boundary:n,rootBoundary:o,strategy:s}=t;const u=[..."clippingAncestors"===n?function(t,e){const n=e.get(t);if(n)return n;let r=b(t).filter((t=>a(t)&&"body"!==i(t))),o=null;const s="fixed"===y(t).position;let u=s?x(t):t;for(;a(u)&&!g(u);){const e=y(u),n=h(u);n||"fixed"!==e.position||(o=null),(s?!n&&!o:!n&&"static"===e.position&&o&&["absolute","fixed"].includes(o.position)||p(u)&&!n&&L(t,u))?r=r.filter((t=>t!==u)):o=e,u=x(u)}return e.set(t,r),r}(e,this._c):[].concat(n),o],c=u[0],l=u.reduce(((t,n)=>{const o=k(e,n,s);return t.top=(0,r.Fp)(o.top,t.top),t.right=(0,r.VV)(o.right,t.right),t.bottom=(0,r.VV)(o.bottom,t.bottom),t.left=(0,r.Fp)(o.left,t.left),t}),k(e,c,s));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}},getOffsetParent:F,getElementRects:async function(t){let{reference:e,floating:n,strategy:r}=t;const o=this.getOffsetParent||F,i=this.getDimensions;return{reference:M(e,await o(n),r),floating:{x:0,y:0,...await i(n)}}},getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){return w(t)},getScale:R,isElement:a,isRTL:function(t){return"rtl"===y(t).direction}};function P(t,e,n,o){void 0===o&&(o={});const{ancestorScroll:i=!0,ancestorResize:s=!0,elementResize:c="function"==typeof ResizeObserver,layoutShift:a="function"==typeof IntersectionObserver,animationFrame:l=!1}=o,f=C(t),p=i||s?[...f?b(f):[],...b(e)]:[];p.forEach((t=>{i&&t.addEventListener("scroll",n,{passive:!0}),s&&t.addEventListener("resize",n)}));const d=f&&a?function(t,e){let n,o=null;const i=u(t);function s(){clearTimeout(n),o&&o.disconnect(),o=null}return function u(c,a){void 0===c&&(c=!1),void 0===a&&(a=1),s();const{left:l,top:f,width:p,height:d}=t.getBoundingClientRect();if(c||e(),!p||!d)return;const h={rootMargin:-(0,r.GW)(f)+"px "+-(0,r.GW)(i.clientWidth-(l+p))+"px "+-(0,r.GW)(i.clientHeight-(f+d))+"px "+-(0,r.GW)(l)+"px",threshold:(0,r.Fp)(0,(0,r.VV)(1,a))||1};let m=!0;function g(t){const e=t[0].intersectionRatio;if(e!==a){if(!m)return u();e?u(!1,e):n=setTimeout((()=>{u(!1,1e-7)}),100)}m=!1}try{o=new IntersectionObserver(g,{...h,root:i.ownerDocument})}catch(t){o=new IntersectionObserver(g,h)}o.observe(t)}(!0),s}(f,n):null;let h,m=-1,g=null;c&&(g=new ResizeObserver((t=>{let[r]=t;r&&r.target===f&&g&&(g.unobserve(e),cancelAnimationFrame(m),m=requestAnimationFrame((()=>{g&&g.observe(e)}))),n()})),f&&!l&&g.observe(f),g.observe(e));let y=l?O(t):null;return l&&function e(){const r=O(t);!y||r.x===y.x&&r.y===y.y&&r.width===y.width&&r.height===y.height||n(),y=r,h=requestAnimationFrame(e)}(),n(),()=>{p.forEach((t=>{i&&t.removeEventListener("scroll",n),s&&t.removeEventListener("resize",n)})),d&&d(),g&&g.disconnect(),g=null,l&&cancelAnimationFrame(h)}}const W=(t,e,n)=>{const r=new Map,i={platform:A,...n},s={...i.platform,_c:r};return(0,o.oo)(t,e,{...i,platform:s})}},71347:function(t,e,n){n.d(e,{Fp:function(){return o},GW:function(){return s},I4:function(){return p},JB:function(){return g},NM:function(){return i},Qq:function(){return d},VV:function(){return r},Wh:function(){return h},hp:function(){return f},k3:function(){return l},ku:function(){return a},uZ:function(){return c},yd:function(){return m},ze:function(){return u}});const r=Math.min,o=Math.max,i=Math.round,s=Math.floor,u=t=>({x:t,y:t});function c(t,e,n){return o(t,r(e,n))}function a(t,e){return"function"==typeof t?t(e):t}function l(t){return t.split("-")[0]}function f(t){return t.split("-")[1]}function p(t){return"y"===t?"height":"width"}function d(t){return["top","bottom"].includes(l(t))?"y":"x"}function h(t){return"x"===d(t)?"y":"x"}function m(t){return"number"!=typeof t?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(t):{top:t,right:t,bottom:t,left:t}}function g(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}},74289:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(80374);function o(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,(0,r.Z)(t,e)}},88609:function(t,e,n){n.d(e,{Z:function(){return N}});var r=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},o="object"==typeof global&&global&&global.Object===Object&&global,i="object"==typeof self&&self&&self.Object===Object&&self,s=o||i||Function("return this")(),u=function(){return s.Date.now()},c=/\s/,a=/^\s+/,l=function(t){return t?t.slice(0,function(t){for(var e=t.length;e--&&c.test(t.charAt(e)););return e}(t)+1).replace(a,""):t},f=s.Symbol,p=Object.prototype,d=p.hasOwnProperty,h=p.toString,m=f?f.toStringTag:void 0,g=Object.prototype.toString,y=f?f.toStringTag:void 0,v=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":y&&y in Object(t)?function(t){var e=d.call(t,m),n=t[m];try{t[m]=void 0;var r=!0}catch(t){}var o=h.call(t);return r&&(e?t[m]=n:delete t[m]),o}(t):function(t){return g.call(t)}(t)},x=/^[-+]0x[0-9a-f]+$/i,E=/^0b[01]+$/i,b=/^0o[0-7]+$/i,w=parseInt,C=function(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return null!=t&&"object"==typeof t}(t)&&"[object Symbol]"==v(t)}(t))return NaN;if(r(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=r(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=l(t);var n=E.test(t);return n||b.test(t)?w(t.slice(2),n?2:8):x.test(t)?NaN:+t},R=Math.max,S=Math.min,N=function(t,e,n){var o,i,s,c,a,l,f=0,p=!1,d=!1,h=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function m(e){var n=o,r=i;return o=i=void 0,f=e,c=t.apply(r,n)}function g(t){var n=t-l;return void 0===l||n>=e||n<0||d&&t-f>=s}function y(){var t=u();if(g(t))return v(t);a=setTimeout(y,function(t){var n=e-(t-l);return d?S(n,s-(t-f)):n}(t))}function v(t){return a=void 0,h&&o?m(t):(o=i=void 0,c)}function x(){var t=u(),n=g(t);if(o=arguments,i=this,l=t,n){if(void 0===a)return function(t){return f=t,a=setTimeout(y,e),p?m(t):c}(l);if(d)return clearTimeout(a),a=setTimeout(y,e),m(l)}return void 0===a&&(a=setTimeout(y,e)),c}return e=C(e)||0,r(n)&&(p=!!n.leading,s=(d="maxWait"in n)?R(C(n.maxWait)||0,e):s,h="trailing"in n?!!n.trailing:h),x.cancel=function(){void 0!==a&&clearTimeout(a),f=0,o=l=i=a=void 0},x.flush=function(){return void 0===a?c:v(u())},x}}}]);
//# sourceMappingURL=9969.6752bfdc158e3c77e338.js.map