(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function cu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var mu={exports:{}},rl={},du={exports:{}},V={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eo=Symbol.for("react.element"),_d=Symbol.for("react.portal"),Ad=Symbol.for("react.fragment"),$d=Symbol.for("react.strict_mode"),Cd=Symbol.for("react.profiler"),Td=Symbol.for("react.provider"),Id=Symbol.for("react.context"),Pd=Symbol.for("react.forward_ref"),jd=Symbol.for("react.suspense"),Od=Symbol.for("react.memo"),Ld=Symbol.for("react.lazy"),S1=Symbol.iterator;function Rd(e){return e===null||typeof e!="object"?null:(e=S1&&e[S1]||e["@@iterator"],typeof e=="function"?e:null)}var fu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},pu=Object.assign,gu={};function Er(e,t,n){this.props=e,this.context=t,this.refs=gu,this.updater=n||fu}Er.prototype.isReactComponent={};Er.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Er.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function vu(){}vu.prototype=Er.prototype;function gs(e,t,n){this.props=e,this.context=t,this.refs=gu,this.updater=n||fu}var vs=gs.prototype=new vu;vs.constructor=gs;pu(vs,Er.prototype);vs.isPureReactComponent=!0;var _1=Array.isArray,yu=Object.prototype.hasOwnProperty,ys={current:null},xu={key:!0,ref:!0,__self:!0,__source:!0};function wu(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)yu.call(t,r)&&!xu.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var s=Array(a),h=0;h<a;h++)s[h]=arguments[h+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:Eo,type:e,key:i,ref:l,props:o,_owner:ys.current}}function Dd(e,t){return{$$typeof:Eo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function xs(e){return typeof e=="object"&&e!==null&&e.$$typeof===Eo}function Nd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var A1=/\/+/g;function Cl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Nd(""+e.key):t.toString(36)}function qo(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Eo:case _d:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+Cl(l,0):r,_1(o)?(n="",e!=null&&(n=e.replace(A1,"$&/")+"/"),qo(o,t,n,"",function(h){return h})):o!=null&&(xs(o)&&(o=Dd(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(A1,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",_1(e))for(var a=0;a<e.length;a++){i=e[a];var s=r+Cl(i,a);l+=qo(i,t,n,s,o)}else if(s=Rd(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=r+Cl(i,a++),l+=qo(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function To(e,t,n){if(e==null)return e;var r=[],o=0;return qo(e,r,"","",function(i){return t.call(n,i,o++)}),r}function zd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Fe={current:null},ei={transition:null},Bd={ReactCurrentDispatcher:Fe,ReactCurrentBatchConfig:ei,ReactCurrentOwner:ys};function ku(){throw Error("act(...) is not supported in production builds of React.")}V.Children={map:To,forEach:function(e,t,n){To(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return To(e,function(){t++}),t},toArray:function(e){return To(e,function(t){return t})||[]},only:function(e){if(!xs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};V.Component=Er;V.Fragment=Ad;V.Profiler=Cd;V.PureComponent=gs;V.StrictMode=$d;V.Suspense=jd;V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bd;V.act=ku;V.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=pu({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=ys.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)yu.call(t,s)&&!xu.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var h=0;h<s;h++)a[h]=arguments[h+2];r.children=a}return{$$typeof:Eo,type:e.type,key:o,ref:i,props:r,_owner:l}};V.createContext=function(e){return e={$$typeof:Id,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Td,_context:e},e.Consumer=e};V.createElement=wu;V.createFactory=function(e){var t=wu.bind(null,e);return t.type=e,t};V.createRef=function(){return{current:null}};V.forwardRef=function(e){return{$$typeof:Pd,render:e}};V.isValidElement=xs;V.lazy=function(e){return{$$typeof:Ld,_payload:{_status:-1,_result:e},_init:zd}};V.memo=function(e,t){return{$$typeof:Od,type:e,compare:t===void 0?null:t}};V.startTransition=function(e){var t=ei.transition;ei.transition={};try{e()}finally{ei.transition=t}};V.unstable_act=ku;V.useCallback=function(e,t){return Fe.current.useCallback(e,t)};V.useContext=function(e){return Fe.current.useContext(e)};V.useDebugValue=function(){};V.useDeferredValue=function(e){return Fe.current.useDeferredValue(e)};V.useEffect=function(e,t){return Fe.current.useEffect(e,t)};V.useId=function(){return Fe.current.useId()};V.useImperativeHandle=function(e,t,n){return Fe.current.useImperativeHandle(e,t,n)};V.useInsertionEffect=function(e,t){return Fe.current.useInsertionEffect(e,t)};V.useLayoutEffect=function(e,t){return Fe.current.useLayoutEffect(e,t)};V.useMemo=function(e,t){return Fe.current.useMemo(e,t)};V.useReducer=function(e,t,n){return Fe.current.useReducer(e,t,n)};V.useRef=function(e){return Fe.current.useRef(e)};V.useState=function(e){return Fe.current.useState(e)};V.useSyncExternalStore=function(e,t,n){return Fe.current.useSyncExternalStore(e,t,n)};V.useTransition=function(){return Fe.current.useTransition()};V.version="18.3.1";du.exports=V;var y=du.exports;const u=cu(y);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fd=y,Wd=Symbol.for("react.element"),Ud=Symbol.for("react.fragment"),Hd=Object.prototype.hasOwnProperty,Qd=Fd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Vd={key:!0,ref:!0,__self:!0,__source:!0};function Mu(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Hd.call(t,r)&&!Vd.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Wd,type:e,key:i,ref:l,props:o,_owner:Qd.current}}rl.Fragment=Ud;rl.jsx=Mu;rl.jsxs=Mu;mu.exports=rl;var M=mu.exports,bu={exports:{}},tt={},Eu={exports:{}},Su={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(A,P){var L=A.length;A.push(P);e:for(;0<L;){var G=L-1>>>1,U=A[G];if(0<o(U,P))A[G]=P,A[L]=U,L=G;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var P=A[0],L=A.pop();if(L!==P){A[0]=L;e:for(var G=0,U=A.length,D=U>>>1;G<D;){var N=2*(G+1)-1,K=A[N],z=N+1,H=A[z];if(0>o(K,L))z<U&&0>o(H,K)?(A[G]=H,A[z]=L,G=z):(A[G]=K,A[N]=L,G=N);else if(z<U&&0>o(H,L))A[G]=H,A[z]=L,G=z;else break e}}return P}function o(A,P){var L=A.sortIndex-P.sortIndex;return L!==0?L:A.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],h=[],p=1,m=null,g=3,x=!1,w=!1,b=!1,T=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(A){for(var P=n(h);P!==null;){if(P.callback===null)r(h);else if(P.startTime<=A)r(h),P.sortIndex=P.expirationTime,t(s,P);else break;P=n(h)}}function v(A){if(b=!1,d(A),!w)if(n(s)!==null)w=!0,we(E);else{var P=n(h);P!==null&&ke(v,P.startTime-A)}}function E(A,P){w=!1,b&&(b=!1,f(I),I=-1),x=!0;var L=g;try{for(d(P),m=n(s);m!==null&&(!(m.expirationTime>P)||A&&!q());){var G=m.callback;if(typeof G=="function"){m.callback=null,g=m.priorityLevel;var U=G(m.expirationTime<=P);P=e.unstable_now(),typeof U=="function"?m.callback=U:m===n(s)&&r(s),d(P)}else r(s);m=n(s)}if(m!==null)var D=!0;else{var N=n(h);N!==null&&ke(v,N.startTime-P),D=!1}return D}finally{m=null,g=L,x=!1}}var S=!1,_=null,I=-1,B=5,R=-1;function q(){return!(e.unstable_now()-R<B)}function ee(){if(_!==null){var A=e.unstable_now();R=A;var P=!0;try{P=_(!0,A)}finally{P?me():(S=!1,_=null)}}else S=!1}var me;if(typeof c=="function")me=function(){c(ee)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,se=de.port2;de.port1.onmessage=ee,me=function(){se.postMessage(null)}}else me=function(){T(ee,0)};function we(A){_=A,S||(S=!0,me())}function ke(A,P){I=T(function(){A(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){w||x||(w=!0,we(E))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(A){switch(g){case 1:case 2:case 3:var P=3;break;default:P=g}var L=g;g=P;try{return A()}finally{g=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,P){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var L=g;g=A;try{return P()}finally{g=L}},e.unstable_scheduleCallback=function(A,P,L){var G=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?G+L:G):L=G,A){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=L+U,A={id:p++,callback:P,priorityLevel:A,startTime:L,expirationTime:U,sortIndex:-1},L>G?(A.sortIndex=L,t(h,A),n(s)===null&&A===n(h)&&(b?(f(I),I=-1):b=!0,ke(v,L-G))):(A.sortIndex=U,t(s,A),w||x||(w=!0,we(E))),A},e.unstable_shouldYield=q,e.unstable_wrapCallback=function(A){var P=g;return function(){var L=g;g=P;try{return A.apply(this,arguments)}finally{g=L}}}})(Su);Eu.exports=Su;var Gd=Eu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kd=y,et=Gd;function $(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _u=new Set,ro={};function Rn(e,t){cr(e,t),cr(e+"Capture",t)}function cr(e,t){for(ro[e]=t,e=0;e<t.length;e++)_u.add(t[e])}var zt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ha=Object.prototype.hasOwnProperty,Yd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$1={},C1={};function Xd(e){return ha.call(C1,e)?!0:ha.call($1,e)?!1:Yd.test(e)?C1[e]=!0:($1[e]=!0,!1)}function Zd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Jd(e,t,n,r){if(t===null||typeof t>"u"||Zd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function We(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var Oe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Oe[e]=new We(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Oe[t]=new We(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Oe[e]=new We(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Oe[e]=new We(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Oe[e]=new We(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Oe[e]=new We(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Oe[e]=new We(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Oe[e]=new We(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Oe[e]=new We(e,5,!1,e.toLowerCase(),null,!1,!1)});var ws=/[\-:]([a-z])/g;function ks(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ws,ks);Oe[t]=new We(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ws,ks);Oe[t]=new We(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ws,ks);Oe[t]=new We(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Oe[e]=new We(e,1,!1,e.toLowerCase(),null,!1,!1)});Oe.xlinkHref=new We("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Oe[e]=new We(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ms(e,t,n,r){var o=Oe.hasOwnProperty(t)?Oe[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Jd(t,n,o,r)&&(n=null),r||o===null?Xd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ut=Kd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Io=Symbol.for("react.element"),Hn=Symbol.for("react.portal"),Qn=Symbol.for("react.fragment"),bs=Symbol.for("react.strict_mode"),ua=Symbol.for("react.profiler"),Au=Symbol.for("react.provider"),$u=Symbol.for("react.context"),Es=Symbol.for("react.forward_ref"),ca=Symbol.for("react.suspense"),ma=Symbol.for("react.suspense_list"),Ss=Symbol.for("react.memo"),Gt=Symbol.for("react.lazy"),Cu=Symbol.for("react.offscreen"),T1=Symbol.iterator;function Cr(e){return e===null||typeof e!="object"?null:(e=T1&&e[T1]||e["@@iterator"],typeof e=="function"?e:null)}var ce=Object.assign,Tl;function Nr(e){if(Tl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Tl=t&&t[1]||""}return`
`+Tl+e}var Il=!1;function Pl(e,t){if(!e||Il)return"";Il=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(h){var r=h}Reflect.construct(e,[],t)}else{try{t.call()}catch(h){r=h}e.call(t.prototype)}else{try{throw Error()}catch(h){r=h}e()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var o=h.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var s=`
`+o[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{Il=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Nr(e):""}function qd(e){switch(e.tag){case 5:return Nr(e.type);case 16:return Nr("Lazy");case 13:return Nr("Suspense");case 19:return Nr("SuspenseList");case 0:case 2:case 15:return e=Pl(e.type,!1),e;case 11:return e=Pl(e.type.render,!1),e;case 1:return e=Pl(e.type,!0),e;default:return""}}function da(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Qn:return"Fragment";case Hn:return"Portal";case ua:return"Profiler";case bs:return"StrictMode";case ca:return"Suspense";case ma:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case $u:return(e.displayName||"Context")+".Consumer";case Au:return(e._context.displayName||"Context")+".Provider";case Es:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ss:return t=e.displayName||null,t!==null?t:da(e.type)||"Memo";case Gt:t=e._payload,e=e._init;try{return da(e(t))}catch{}}return null}function e0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return da(t);case 8:return t===bs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function hn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Tu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function t0(e){var t=Tu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Po(e){e._valueTracker||(e._valueTracker=t0(e))}function Iu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Tu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function gi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function fa(e,t){var n=t.checked;return ce({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function I1(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=hn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Pu(e,t){t=t.checked,t!=null&&Ms(e,"checked",t,!1)}function pa(e,t){Pu(e,t);var n=hn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ga(e,t.type,n):t.hasOwnProperty("defaultValue")&&ga(e,t.type,hn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function P1(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ga(e,t,n){(t!=="number"||gi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var zr=Array.isArray;function or(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+hn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function va(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error($(91));return ce({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function j1(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error($(92));if(zr(n)){if(1<n.length)throw Error($(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:hn(n)}}function ju(e,t){var n=hn(t.value),r=hn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function O1(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ou(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ya(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ou(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var jo,Lu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(jo=jo||document.createElement("div"),jo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=jo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function oo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Hr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},n0=["Webkit","ms","Moz","O"];Object.keys(Hr).forEach(function(e){n0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Hr[t]=Hr[e]})});function Ru(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Hr.hasOwnProperty(e)&&Hr[e]?(""+t).trim():t+"px"}function Du(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Ru(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var r0=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xa(e,t){if(t){if(r0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error($(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error($(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error($(61))}if(t.style!=null&&typeof t.style!="object")throw Error($(62))}}function wa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ka=null;function _s(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ma=null,ir=null,lr=null;function L1(e){if(e=Ao(e)){if(typeof Ma!="function")throw Error($(280));var t=e.stateNode;t&&(t=sl(t),Ma(e.stateNode,e.type,t))}}function Nu(e){ir?lr?lr.push(e):lr=[e]:ir=e}function zu(){if(ir){var e=ir,t=lr;if(lr=ir=null,L1(e),t)for(e=0;e<t.length;e++)L1(t[e])}}function Bu(e,t){return e(t)}function Fu(){}var jl=!1;function Wu(e,t,n){if(jl)return e(t,n);jl=!0;try{return Bu(e,t,n)}finally{jl=!1,(ir!==null||lr!==null)&&(Fu(),zu())}}function io(e,t){var n=e.stateNode;if(n===null)return null;var r=sl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error($(231,t,typeof n));return n}var ba=!1;if(zt)try{var Tr={};Object.defineProperty(Tr,"passive",{get:function(){ba=!0}}),window.addEventListener("test",Tr,Tr),window.removeEventListener("test",Tr,Tr)}catch{ba=!1}function o0(e,t,n,r,o,i,l,a,s){var h=Array.prototype.slice.call(arguments,3);try{t.apply(n,h)}catch(p){this.onError(p)}}var Qr=!1,vi=null,yi=!1,Ea=null,i0={onError:function(e){Qr=!0,vi=e}};function l0(e,t,n,r,o,i,l,a,s){Qr=!1,vi=null,o0.apply(i0,arguments)}function a0(e,t,n,r,o,i,l,a,s){if(l0.apply(this,arguments),Qr){if(Qr){var h=vi;Qr=!1,vi=null}else throw Error($(198));yi||(yi=!0,Ea=h)}}function Dn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Uu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function R1(e){if(Dn(e)!==e)throw Error($(188))}function s0(e){var t=e.alternate;if(!t){if(t=Dn(e),t===null)throw Error($(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return R1(o),e;if(i===r)return R1(o),t;i=i.sibling}throw Error($(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l)throw Error($(189))}}if(n.alternate!==r)throw Error($(190))}if(n.tag!==3)throw Error($(188));return n.stateNode.current===n?e:t}function Hu(e){return e=s0(e),e!==null?Qu(e):null}function Qu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Qu(e);if(t!==null)return t;e=e.sibling}return null}var Vu=et.unstable_scheduleCallback,D1=et.unstable_cancelCallback,h0=et.unstable_shouldYield,u0=et.unstable_requestPaint,ve=et.unstable_now,c0=et.unstable_getCurrentPriorityLevel,As=et.unstable_ImmediatePriority,Gu=et.unstable_UserBlockingPriority,xi=et.unstable_NormalPriority,m0=et.unstable_LowPriority,Ku=et.unstable_IdlePriority,ol=null,At=null;function d0(e){if(At&&typeof At.onCommitFiberRoot=="function")try{At.onCommitFiberRoot(ol,e,void 0,(e.current.flags&128)===128)}catch{}}var pt=Math.clz32?Math.clz32:g0,f0=Math.log,p0=Math.LN2;function g0(e){return e>>>=0,e===0?32:31-(f0(e)/p0|0)|0}var Oo=64,Lo=4194304;function Br(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function wi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~o;a!==0?r=Br(a):(i&=l,i!==0&&(r=Br(i)))}else l=n&~o,l!==0?r=Br(l):i!==0&&(r=Br(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-pt(t),o=1<<n,r|=e[n],t&=~o;return r}function v0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function y0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-pt(i),a=1<<l,s=o[l];s===-1?(!(a&n)||a&r)&&(o[l]=v0(a,t)):s<=t&&(e.expiredLanes|=a),i&=~a}}function Sa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Yu(){var e=Oo;return Oo<<=1,!(Oo&4194240)&&(Oo=64),e}function Ol(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function So(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-pt(t),e[t]=n}function x0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-pt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function $s(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-pt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var te=0;function Xu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Zu,Cs,Ju,qu,ec,_a=!1,Ro=[],qt=null,en=null,tn=null,lo=new Map,ao=new Map,Yt=[],w0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function N1(e,t){switch(e){case"focusin":case"focusout":qt=null;break;case"dragenter":case"dragleave":en=null;break;case"mouseover":case"mouseout":tn=null;break;case"pointerover":case"pointerout":lo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ao.delete(t.pointerId)}}function Ir(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Ao(t),t!==null&&Cs(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function k0(e,t,n,r,o){switch(t){case"focusin":return qt=Ir(qt,e,t,n,r,o),!0;case"dragenter":return en=Ir(en,e,t,n,r,o),!0;case"mouseover":return tn=Ir(tn,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return lo.set(i,Ir(lo.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,ao.set(i,Ir(ao.get(i)||null,e,t,n,r,o)),!0}return!1}function tc(e){var t=wn(e.target);if(t!==null){var n=Dn(t);if(n!==null){if(t=n.tag,t===13){if(t=Uu(n),t!==null){e.blockedOn=t,ec(e.priority,function(){Ju(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ti(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Aa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ka=r,n.target.dispatchEvent(r),ka=null}else return t=Ao(n),t!==null&&Cs(t),e.blockedOn=n,!1;t.shift()}return!0}function z1(e,t,n){ti(e)&&n.delete(t)}function M0(){_a=!1,qt!==null&&ti(qt)&&(qt=null),en!==null&&ti(en)&&(en=null),tn!==null&&ti(tn)&&(tn=null),lo.forEach(z1),ao.forEach(z1)}function Pr(e,t){e.blockedOn===t&&(e.blockedOn=null,_a||(_a=!0,et.unstable_scheduleCallback(et.unstable_NormalPriority,M0)))}function so(e){function t(o){return Pr(o,e)}if(0<Ro.length){Pr(Ro[0],e);for(var n=1;n<Ro.length;n++){var r=Ro[n];r.blockedOn===e&&(r.blockedOn=null)}}for(qt!==null&&Pr(qt,e),en!==null&&Pr(en,e),tn!==null&&Pr(tn,e),lo.forEach(t),ao.forEach(t),n=0;n<Yt.length;n++)r=Yt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Yt.length&&(n=Yt[0],n.blockedOn===null);)tc(n),n.blockedOn===null&&Yt.shift()}var ar=Ut.ReactCurrentBatchConfig,ki=!0;function b0(e,t,n,r){var o=te,i=ar.transition;ar.transition=null;try{te=1,Ts(e,t,n,r)}finally{te=o,ar.transition=i}}function E0(e,t,n,r){var o=te,i=ar.transition;ar.transition=null;try{te=4,Ts(e,t,n,r)}finally{te=o,ar.transition=i}}function Ts(e,t,n,r){if(ki){var o=Aa(e,t,n,r);if(o===null)Hl(e,t,r,Mi,n),N1(e,r);else if(k0(o,e,t,n,r))r.stopPropagation();else if(N1(e,r),t&4&&-1<w0.indexOf(e)){for(;o!==null;){var i=Ao(o);if(i!==null&&Zu(i),i=Aa(e,t,n,r),i===null&&Hl(e,t,r,Mi,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Hl(e,t,r,null,n)}}var Mi=null;function Aa(e,t,n,r){if(Mi=null,e=_s(r),e=wn(e),e!==null)if(t=Dn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Uu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Mi=e,null}function nc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(c0()){case As:return 1;case Gu:return 4;case xi:case m0:return 16;case Ku:return 536870912;default:return 16}default:return 16}}var Zt=null,Is=null,ni=null;function rc(){if(ni)return ni;var e,t=Is,n=t.length,r,o="value"in Zt?Zt.value:Zt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return ni=o.slice(e,1<r?1-r:void 0)}function ri(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Do(){return!0}function B1(){return!1}function nt(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Do:B1,this.isPropagationStopped=B1,this}return ce(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Do)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Do)},persist:function(){},isPersistent:Do}),t}var Sr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ps=nt(Sr),_o=ce({},Sr,{view:0,detail:0}),S0=nt(_o),Ll,Rl,jr,il=ce({},_o,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:js,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==jr&&(jr&&e.type==="mousemove"?(Ll=e.screenX-jr.screenX,Rl=e.screenY-jr.screenY):Rl=Ll=0,jr=e),Ll)},movementY:function(e){return"movementY"in e?e.movementY:Rl}}),F1=nt(il),_0=ce({},il,{dataTransfer:0}),A0=nt(_0),$0=ce({},_o,{relatedTarget:0}),Dl=nt($0),C0=ce({},Sr,{animationName:0,elapsedTime:0,pseudoElement:0}),T0=nt(C0),I0=ce({},Sr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),P0=nt(I0),j0=ce({},Sr,{data:0}),W1=nt(j0),O0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},L0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},R0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function D0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=R0[e])?!!t[e]:!1}function js(){return D0}var N0=ce({},_o,{key:function(e){if(e.key){var t=O0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ri(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?L0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:js,charCode:function(e){return e.type==="keypress"?ri(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ri(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),z0=nt(N0),B0=ce({},il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),U1=nt(B0),F0=ce({},_o,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:js}),W0=nt(F0),U0=ce({},Sr,{propertyName:0,elapsedTime:0,pseudoElement:0}),H0=nt(U0),Q0=ce({},il,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),V0=nt(Q0),G0=[9,13,27,32],Os=zt&&"CompositionEvent"in window,Vr=null;zt&&"documentMode"in document&&(Vr=document.documentMode);var K0=zt&&"TextEvent"in window&&!Vr,oc=zt&&(!Os||Vr&&8<Vr&&11>=Vr),H1=" ",Q1=!1;function ic(e,t){switch(e){case"keyup":return G0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vn=!1;function Y0(e,t){switch(e){case"compositionend":return lc(t);case"keypress":return t.which!==32?null:(Q1=!0,H1);case"textInput":return e=t.data,e===H1&&Q1?null:e;default:return null}}function X0(e,t){if(Vn)return e==="compositionend"||!Os&&ic(e,t)?(e=rc(),ni=Is=Zt=null,Vn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return oc&&t.locale!=="ko"?null:t.data;default:return null}}var Z0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function V1(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Z0[e.type]:t==="textarea"}function ac(e,t,n,r){Nu(r),t=bi(t,"onChange"),0<t.length&&(n=new Ps("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Gr=null,ho=null;function J0(e){yc(e,0)}function ll(e){var t=Yn(e);if(Iu(t))return e}function q0(e,t){if(e==="change")return t}var sc=!1;if(zt){var Nl;if(zt){var zl="oninput"in document;if(!zl){var G1=document.createElement("div");G1.setAttribute("oninput","return;"),zl=typeof G1.oninput=="function"}Nl=zl}else Nl=!1;sc=Nl&&(!document.documentMode||9<document.documentMode)}function K1(){Gr&&(Gr.detachEvent("onpropertychange",hc),ho=Gr=null)}function hc(e){if(e.propertyName==="value"&&ll(ho)){var t=[];ac(t,ho,e,_s(e)),Wu(J0,t)}}function ef(e,t,n){e==="focusin"?(K1(),Gr=t,ho=n,Gr.attachEvent("onpropertychange",hc)):e==="focusout"&&K1()}function tf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ll(ho)}function nf(e,t){if(e==="click")return ll(t)}function rf(e,t){if(e==="input"||e==="change")return ll(t)}function of(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var yt=typeof Object.is=="function"?Object.is:of;function uo(e,t){if(yt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!ha.call(t,o)||!yt(e[o],t[o]))return!1}return!0}function Y1(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function X1(e,t){var n=Y1(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Y1(n)}}function uc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?uc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function cc(){for(var e=window,t=gi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=gi(e.document)}return t}function Ls(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function lf(e){var t=cc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&uc(n.ownerDocument.documentElement,n)){if(r!==null&&Ls(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=X1(n,i);var l=X1(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var af=zt&&"documentMode"in document&&11>=document.documentMode,Gn=null,$a=null,Kr=null,Ca=!1;function Z1(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ca||Gn==null||Gn!==gi(r)||(r=Gn,"selectionStart"in r&&Ls(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Kr&&uo(Kr,r)||(Kr=r,r=bi($a,"onSelect"),0<r.length&&(t=new Ps("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Gn)))}function No(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Kn={animationend:No("Animation","AnimationEnd"),animationiteration:No("Animation","AnimationIteration"),animationstart:No("Animation","AnimationStart"),transitionend:No("Transition","TransitionEnd")},Bl={},mc={};zt&&(mc=document.createElement("div").style,"AnimationEvent"in window||(delete Kn.animationend.animation,delete Kn.animationiteration.animation,delete Kn.animationstart.animation),"TransitionEvent"in window||delete Kn.transitionend.transition);function al(e){if(Bl[e])return Bl[e];if(!Kn[e])return e;var t=Kn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in mc)return Bl[e]=t[n];return e}var dc=al("animationend"),fc=al("animationiteration"),pc=al("animationstart"),gc=al("transitionend"),vc=new Map,J1="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dn(e,t){vc.set(e,t),Rn(t,[e])}for(var Fl=0;Fl<J1.length;Fl++){var Wl=J1[Fl],sf=Wl.toLowerCase(),hf=Wl[0].toUpperCase()+Wl.slice(1);dn(sf,"on"+hf)}dn(dc,"onAnimationEnd");dn(fc,"onAnimationIteration");dn(pc,"onAnimationStart");dn("dblclick","onDoubleClick");dn("focusin","onFocus");dn("focusout","onBlur");dn(gc,"onTransitionEnd");cr("onMouseEnter",["mouseout","mouseover"]);cr("onMouseLeave",["mouseout","mouseover"]);cr("onPointerEnter",["pointerout","pointerover"]);cr("onPointerLeave",["pointerout","pointerover"]);Rn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fr));function q1(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,a0(r,t,void 0,e),e.currentTarget=null}function yc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,h=a.currentTarget;if(a=a.listener,s!==i&&o.isPropagationStopped())break e;q1(o,a,h),i=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,h=a.currentTarget,a=a.listener,s!==i&&o.isPropagationStopped())break e;q1(o,a,h),i=s}}}if(yi)throw e=Ea,yi=!1,Ea=null,e}function re(e,t){var n=t[Oa];n===void 0&&(n=t[Oa]=new Set);var r=e+"__bubble";n.has(r)||(xc(t,e,2,!1),n.add(r))}function Ul(e,t,n){var r=0;t&&(r|=4),xc(n,e,r,t)}var zo="_reactListening"+Math.random().toString(36).slice(2);function co(e){if(!e[zo]){e[zo]=!0,_u.forEach(function(n){n!=="selectionchange"&&(uf.has(n)||Ul(n,!1,e),Ul(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[zo]||(t[zo]=!0,Ul("selectionchange",!1,t))}}function xc(e,t,n,r){switch(nc(t)){case 1:var o=b0;break;case 4:o=E0;break;default:o=Ts}n=o.bind(null,t,n,e),o=void 0,!ba||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Hl(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;l=l.return}for(;a!==null;){if(l=wn(a),l===null)return;if(s=l.tag,s===5||s===6){r=i=l;continue e}a=a.parentNode}}r=r.return}Wu(function(){var h=i,p=_s(n),m=[];e:{var g=vc.get(e);if(g!==void 0){var x=Ps,w=e;switch(e){case"keypress":if(ri(n)===0)break e;case"keydown":case"keyup":x=z0;break;case"focusin":w="focus",x=Dl;break;case"focusout":w="blur",x=Dl;break;case"beforeblur":case"afterblur":x=Dl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=F1;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=A0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=W0;break;case dc:case fc:case pc:x=T0;break;case gc:x=H0;break;case"scroll":x=S0;break;case"wheel":x=V0;break;case"copy":case"cut":case"paste":x=P0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=U1}var b=(t&4)!==0,T=!b&&e==="scroll",f=b?g!==null?g+"Capture":null:g;b=[];for(var c=h,d;c!==null;){d=c;var v=d.stateNode;if(d.tag===5&&v!==null&&(d=v,f!==null&&(v=io(c,f),v!=null&&b.push(mo(c,v,d)))),T)break;c=c.return}0<b.length&&(g=new x(g,w,null,n,p),m.push({event:g,listeners:b}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",g&&n!==ka&&(w=n.relatedTarget||n.fromElement)&&(wn(w)||w[Bt]))break e;if((x||g)&&(g=p.window===p?p:(g=p.ownerDocument)?g.defaultView||g.parentWindow:window,x?(w=n.relatedTarget||n.toElement,x=h,w=w?wn(w):null,w!==null&&(T=Dn(w),w!==T||w.tag!==5&&w.tag!==6)&&(w=null)):(x=null,w=h),x!==w)){if(b=F1,v="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(b=U1,v="onPointerLeave",f="onPointerEnter",c="pointer"),T=x==null?g:Yn(x),d=w==null?g:Yn(w),g=new b(v,c+"leave",x,n,p),g.target=T,g.relatedTarget=d,v=null,wn(p)===h&&(b=new b(f,c+"enter",w,n,p),b.target=d,b.relatedTarget=T,v=b),T=v,x&&w)t:{for(b=x,f=w,c=0,d=b;d;d=zn(d))c++;for(d=0,v=f;v;v=zn(v))d++;for(;0<c-d;)b=zn(b),c--;for(;0<d-c;)f=zn(f),d--;for(;c--;){if(b===f||f!==null&&b===f.alternate)break t;b=zn(b),f=zn(f)}b=null}else b=null;x!==null&&eh(m,g,x,b,!1),w!==null&&T!==null&&eh(m,T,w,b,!0)}}e:{if(g=h?Yn(h):window,x=g.nodeName&&g.nodeName.toLowerCase(),x==="select"||x==="input"&&g.type==="file")var E=q0;else if(V1(g))if(sc)E=rf;else{E=tf;var S=ef}else(x=g.nodeName)&&x.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(E=nf);if(E&&(E=E(e,h))){ac(m,E,n,p);break e}S&&S(e,g,h),e==="focusout"&&(S=g._wrapperState)&&S.controlled&&g.type==="number"&&ga(g,"number",g.value)}switch(S=h?Yn(h):window,e){case"focusin":(V1(S)||S.contentEditable==="true")&&(Gn=S,$a=h,Kr=null);break;case"focusout":Kr=$a=Gn=null;break;case"mousedown":Ca=!0;break;case"contextmenu":case"mouseup":case"dragend":Ca=!1,Z1(m,n,p);break;case"selectionchange":if(af)break;case"keydown":case"keyup":Z1(m,n,p)}var _;if(Os)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else Vn?ic(e,n)&&(I="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(oc&&n.locale!=="ko"&&(Vn||I!=="onCompositionStart"?I==="onCompositionEnd"&&Vn&&(_=rc()):(Zt=p,Is="value"in Zt?Zt.value:Zt.textContent,Vn=!0)),S=bi(h,I),0<S.length&&(I=new W1(I,e,null,n,p),m.push({event:I,listeners:S}),_?I.data=_:(_=lc(n),_!==null&&(I.data=_)))),(_=K0?Y0(e,n):X0(e,n))&&(h=bi(h,"onBeforeInput"),0<h.length&&(p=new W1("onBeforeInput","beforeinput",null,n,p),m.push({event:p,listeners:h}),p.data=_))}yc(m,t)})}function mo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function bi(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=io(e,n),i!=null&&r.unshift(mo(e,i,o)),i=io(e,t),i!=null&&r.push(mo(e,i,o))),e=e.return}return r}function zn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function eh(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,h=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&h!==null&&(a=h,o?(s=io(n,i),s!=null&&l.unshift(mo(n,s,a))):o||(s=io(n,i),s!=null&&l.push(mo(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var cf=/\r\n?/g,mf=/\u0000|\uFFFD/g;function th(e){return(typeof e=="string"?e:""+e).replace(cf,`
`).replace(mf,"")}function Bo(e,t,n){if(t=th(t),th(e)!==t&&n)throw Error($(425))}function Ei(){}var Ta=null,Ia=null;function Pa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ja=typeof setTimeout=="function"?setTimeout:void 0,df=typeof clearTimeout=="function"?clearTimeout:void 0,nh=typeof Promise=="function"?Promise:void 0,ff=typeof queueMicrotask=="function"?queueMicrotask:typeof nh<"u"?function(e){return nh.resolve(null).then(e).catch(pf)}:ja;function pf(e){setTimeout(function(){throw e})}function Ql(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),so(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);so(t)}function nn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function rh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var _r=Math.random().toString(36).slice(2),_t="__reactFiber$"+_r,fo="__reactProps$"+_r,Bt="__reactContainer$"+_r,Oa="__reactEvents$"+_r,gf="__reactListeners$"+_r,vf="__reactHandles$"+_r;function wn(e){var t=e[_t];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Bt]||n[_t]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=rh(e);e!==null;){if(n=e[_t])return n;e=rh(e)}return t}e=n,n=e.parentNode}return null}function Ao(e){return e=e[_t]||e[Bt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Yn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error($(33))}function sl(e){return e[fo]||null}var La=[],Xn=-1;function fn(e){return{current:e}}function ie(e){0>Xn||(e.current=La[Xn],La[Xn]=null,Xn--)}function ne(e,t){Xn++,La[Xn]=e.current,e.current=t}var un={},Ne=fn(un),Qe=fn(!1),$n=un;function mr(e,t){var n=e.type.contextTypes;if(!n)return un;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ve(e){return e=e.childContextTypes,e!=null}function Si(){ie(Qe),ie(Ne)}function oh(e,t,n){if(Ne.current!==un)throw Error($(168));ne(Ne,t),ne(Qe,n)}function wc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error($(108,e0(e)||"Unknown",o));return ce({},n,r)}function _i(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||un,$n=Ne.current,ne(Ne,e),ne(Qe,Qe.current),!0}function ih(e,t,n){var r=e.stateNode;if(!r)throw Error($(169));n?(e=wc(e,t,$n),r.__reactInternalMemoizedMergedChildContext=e,ie(Qe),ie(Ne),ne(Ne,e)):ie(Qe),ne(Qe,n)}var Lt=null,hl=!1,Vl=!1;function kc(e){Lt===null?Lt=[e]:Lt.push(e)}function yf(e){hl=!0,kc(e)}function pn(){if(!Vl&&Lt!==null){Vl=!0;var e=0,t=te;try{var n=Lt;for(te=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Lt=null,hl=!1}catch(o){throw Lt!==null&&(Lt=Lt.slice(e+1)),Vu(As,pn),o}finally{te=t,Vl=!1}}return null}var Zn=[],Jn=0,Ai=null,$i=0,ot=[],it=0,Cn=null,Rt=1,Dt="";function yn(e,t){Zn[Jn++]=$i,Zn[Jn++]=Ai,Ai=e,$i=t}function Mc(e,t,n){ot[it++]=Rt,ot[it++]=Dt,ot[it++]=Cn,Cn=e;var r=Rt;e=Dt;var o=32-pt(r)-1;r&=~(1<<o),n+=1;var i=32-pt(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,Rt=1<<32-pt(t)+o|n<<o|r,Dt=i+e}else Rt=1<<i|n<<o|r,Dt=e}function Rs(e){e.return!==null&&(yn(e,1),Mc(e,1,0))}function Ds(e){for(;e===Ai;)Ai=Zn[--Jn],Zn[Jn]=null,$i=Zn[--Jn],Zn[Jn]=null;for(;e===Cn;)Cn=ot[--it],ot[it]=null,Dt=ot[--it],ot[it]=null,Rt=ot[--it],ot[it]=null}var qe=null,Je=null,ae=!1,ft=null;function bc(e,t){var n=lt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function lh(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,qe=e,Je=nn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,qe=e,Je=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Cn!==null?{id:Rt,overflow:Dt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=lt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,qe=e,Je=null,!0):!1;default:return!1}}function Ra(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Da(e){if(ae){var t=Je;if(t){var n=t;if(!lh(e,t)){if(Ra(e))throw Error($(418));t=nn(n.nextSibling);var r=qe;t&&lh(e,t)?bc(r,n):(e.flags=e.flags&-4097|2,ae=!1,qe=e)}}else{if(Ra(e))throw Error($(418));e.flags=e.flags&-4097|2,ae=!1,qe=e}}}function ah(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;qe=e}function Fo(e){if(e!==qe)return!1;if(!ae)return ah(e),ae=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Pa(e.type,e.memoizedProps)),t&&(t=Je)){if(Ra(e))throw Ec(),Error($(418));for(;t;)bc(e,t),t=nn(t.nextSibling)}if(ah(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error($(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Je=nn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Je=null}}else Je=qe?nn(e.stateNode.nextSibling):null;return!0}function Ec(){for(var e=Je;e;)e=nn(e.nextSibling)}function dr(){Je=qe=null,ae=!1}function Ns(e){ft===null?ft=[e]:ft.push(e)}var xf=Ut.ReactCurrentBatchConfig;function Or(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error($(309));var r=n.stateNode}if(!r)throw Error($(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=o.refs;l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error($(284));if(!n._owner)throw Error($(290,e))}return e}function Wo(e,t){throw e=Object.prototype.toString.call(t),Error($(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function sh(e){var t=e._init;return t(e._payload)}function Sc(e){function t(f,c){if(e){var d=f.deletions;d===null?(f.deletions=[c],f.flags|=16):d.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function o(f,c){return f=an(f,c),f.index=0,f.sibling=null,f}function i(f,c,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<c?(f.flags|=2,c):d):(f.flags|=2,c)):(f.flags|=1048576,c)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,c,d,v){return c===null||c.tag!==6?(c=ql(d,f.mode,v),c.return=f,c):(c=o(c,d),c.return=f,c)}function s(f,c,d,v){var E=d.type;return E===Qn?p(f,c,d.props.children,v,d.key):c!==null&&(c.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Gt&&sh(E)===c.type)?(v=o(c,d.props),v.ref=Or(f,c,d),v.return=f,v):(v=ui(d.type,d.key,d.props,null,f.mode,v),v.ref=Or(f,c,d),v.return=f,v)}function h(f,c,d,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==d.containerInfo||c.stateNode.implementation!==d.implementation?(c=ea(d,f.mode,v),c.return=f,c):(c=o(c,d.children||[]),c.return=f,c)}function p(f,c,d,v,E){return c===null||c.tag!==7?(c=_n(d,f.mode,v,E),c.return=f,c):(c=o(c,d),c.return=f,c)}function m(f,c,d){if(typeof c=="string"&&c!==""||typeof c=="number")return c=ql(""+c,f.mode,d),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Io:return d=ui(c.type,c.key,c.props,null,f.mode,d),d.ref=Or(f,null,c),d.return=f,d;case Hn:return c=ea(c,f.mode,d),c.return=f,c;case Gt:var v=c._init;return m(f,v(c._payload),d)}if(zr(c)||Cr(c))return c=_n(c,f.mode,d,null),c.return=f,c;Wo(f,c)}return null}function g(f,c,d,v){var E=c!==null?c.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return E!==null?null:a(f,c,""+d,v);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Io:return d.key===E?s(f,c,d,v):null;case Hn:return d.key===E?h(f,c,d,v):null;case Gt:return E=d._init,g(f,c,E(d._payload),v)}if(zr(d)||Cr(d))return E!==null?null:p(f,c,d,v,null);Wo(f,d)}return null}function x(f,c,d,v,E){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(d)||null,a(c,f,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Io:return f=f.get(v.key===null?d:v.key)||null,s(c,f,v,E);case Hn:return f=f.get(v.key===null?d:v.key)||null,h(c,f,v,E);case Gt:var S=v._init;return x(f,c,d,S(v._payload),E)}if(zr(v)||Cr(v))return f=f.get(d)||null,p(c,f,v,E,null);Wo(c,v)}return null}function w(f,c,d,v){for(var E=null,S=null,_=c,I=c=0,B=null;_!==null&&I<d.length;I++){_.index>I?(B=_,_=null):B=_.sibling;var R=g(f,_,d[I],v);if(R===null){_===null&&(_=B);break}e&&_&&R.alternate===null&&t(f,_),c=i(R,c,I),S===null?E=R:S.sibling=R,S=R,_=B}if(I===d.length)return n(f,_),ae&&yn(f,I),E;if(_===null){for(;I<d.length;I++)_=m(f,d[I],v),_!==null&&(c=i(_,c,I),S===null?E=_:S.sibling=_,S=_);return ae&&yn(f,I),E}for(_=r(f,_);I<d.length;I++)B=x(_,f,I,d[I],v),B!==null&&(e&&B.alternate!==null&&_.delete(B.key===null?I:B.key),c=i(B,c,I),S===null?E=B:S.sibling=B,S=B);return e&&_.forEach(function(q){return t(f,q)}),ae&&yn(f,I),E}function b(f,c,d,v){var E=Cr(d);if(typeof E!="function")throw Error($(150));if(d=E.call(d),d==null)throw Error($(151));for(var S=E=null,_=c,I=c=0,B=null,R=d.next();_!==null&&!R.done;I++,R=d.next()){_.index>I?(B=_,_=null):B=_.sibling;var q=g(f,_,R.value,v);if(q===null){_===null&&(_=B);break}e&&_&&q.alternate===null&&t(f,_),c=i(q,c,I),S===null?E=q:S.sibling=q,S=q,_=B}if(R.done)return n(f,_),ae&&yn(f,I),E;if(_===null){for(;!R.done;I++,R=d.next())R=m(f,R.value,v),R!==null&&(c=i(R,c,I),S===null?E=R:S.sibling=R,S=R);return ae&&yn(f,I),E}for(_=r(f,_);!R.done;I++,R=d.next())R=x(_,f,I,R.value,v),R!==null&&(e&&R.alternate!==null&&_.delete(R.key===null?I:R.key),c=i(R,c,I),S===null?E=R:S.sibling=R,S=R);return e&&_.forEach(function(ee){return t(f,ee)}),ae&&yn(f,I),E}function T(f,c,d,v){if(typeof d=="object"&&d!==null&&d.type===Qn&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case Io:e:{for(var E=d.key,S=c;S!==null;){if(S.key===E){if(E=d.type,E===Qn){if(S.tag===7){n(f,S.sibling),c=o(S,d.props.children),c.return=f,f=c;break e}}else if(S.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Gt&&sh(E)===S.type){n(f,S.sibling),c=o(S,d.props),c.ref=Or(f,S,d),c.return=f,f=c;break e}n(f,S);break}else t(f,S);S=S.sibling}d.type===Qn?(c=_n(d.props.children,f.mode,v,d.key),c.return=f,f=c):(v=ui(d.type,d.key,d.props,null,f.mode,v),v.ref=Or(f,c,d),v.return=f,f=v)}return l(f);case Hn:e:{for(S=d.key;c!==null;){if(c.key===S)if(c.tag===4&&c.stateNode.containerInfo===d.containerInfo&&c.stateNode.implementation===d.implementation){n(f,c.sibling),c=o(c,d.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=ea(d,f.mode,v),c.return=f,f=c}return l(f);case Gt:return S=d._init,T(f,c,S(d._payload),v)}if(zr(d))return w(f,c,d,v);if(Cr(d))return b(f,c,d,v);Wo(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,c!==null&&c.tag===6?(n(f,c.sibling),c=o(c,d),c.return=f,f=c):(n(f,c),c=ql(d,f.mode,v),c.return=f,f=c),l(f)):n(f,c)}return T}var fr=Sc(!0),_c=Sc(!1),Ci=fn(null),Ti=null,qn=null,zs=null;function Bs(){zs=qn=Ti=null}function Fs(e){var t=Ci.current;ie(Ci),e._currentValue=t}function Na(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function sr(e,t){Ti=e,zs=qn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(He=!0),e.firstContext=null)}function st(e){var t=e._currentValue;if(zs!==e)if(e={context:e,memoizedValue:t,next:null},qn===null){if(Ti===null)throw Error($(308));qn=e,Ti.dependencies={lanes:0,firstContext:e}}else qn=qn.next=e;return t}var kn=null;function Ws(e){kn===null?kn=[e]:kn.push(e)}function Ac(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Ws(t)):(n.next=o.next,o.next=n),t.interleaved=n,Ft(e,r)}function Ft(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Kt=!1;function Us(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $c(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Nt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function rn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Y&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Ft(e,n)}return o=r.interleaved,o===null?(t.next=t,Ws(r)):(t.next=o.next,o.next=t),r.interleaved=t,Ft(e,n)}function oi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,$s(e,n)}}function hh(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ii(e,t,n,r){var o=e.updateQueue;Kt=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,h=s.next;s.next=null,l===null?i=h:l.next=h,l=s;var p=e.alternate;p!==null&&(p=p.updateQueue,a=p.lastBaseUpdate,a!==l&&(a===null?p.firstBaseUpdate=h:a.next=h,p.lastBaseUpdate=s))}if(i!==null){var m=o.baseState;l=0,p=h=s=null,a=i;do{var g=a.lane,x=a.eventTime;if((r&g)===g){p!==null&&(p=p.next={eventTime:x,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,b=a;switch(g=t,x=n,b.tag){case 1:if(w=b.payload,typeof w=="function"){m=w.call(x,m,g);break e}m=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=b.payload,g=typeof w=="function"?w.call(x,m,g):w,g==null)break e;m=ce({},m,g);break e;case 2:Kt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=o.effects,g===null?o.effects=[a]:g.push(a))}else x={eventTime:x,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},p===null?(h=p=x,s=m):p=p.next=x,l|=g;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;g=a,a=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(!0);if(p===null&&(s=m),o.baseState=s,o.firstBaseUpdate=h,o.lastBaseUpdate=p,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);In|=l,e.lanes=l,e.memoizedState=m}}function uh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error($(191,o));o.call(r)}}}var $o={},$t=fn($o),po=fn($o),go=fn($o);function Mn(e){if(e===$o)throw Error($(174));return e}function Hs(e,t){switch(ne(go,t),ne(po,e),ne($t,$o),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ya(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ya(t,e)}ie($t),ne($t,t)}function pr(){ie($t),ie(po),ie(go)}function Cc(e){Mn(go.current);var t=Mn($t.current),n=ya(t,e.type);t!==n&&(ne(po,e),ne($t,n))}function Qs(e){po.current===e&&(ie($t),ie(po))}var he=fn(0);function Pi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Gl=[];function Vs(){for(var e=0;e<Gl.length;e++)Gl[e]._workInProgressVersionPrimary=null;Gl.length=0}var ii=Ut.ReactCurrentDispatcher,Kl=Ut.ReactCurrentBatchConfig,Tn=0,ue=null,be=null,_e=null,ji=!1,Yr=!1,vo=0,wf=0;function Le(){throw Error($(321))}function Gs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!yt(e[n],t[n]))return!1;return!0}function Ks(e,t,n,r,o,i){if(Tn=i,ue=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ii.current=e===null||e.memoizedState===null?Ef:Sf,e=n(r,o),Yr){i=0;do{if(Yr=!1,vo=0,25<=i)throw Error($(301));i+=1,_e=be=null,t.updateQueue=null,ii.current=_f,e=n(r,o)}while(Yr)}if(ii.current=Oi,t=be!==null&&be.next!==null,Tn=0,_e=be=ue=null,ji=!1,t)throw Error($(300));return e}function Ys(){var e=vo!==0;return vo=0,e}function Et(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _e===null?ue.memoizedState=_e=e:_e=_e.next=e,_e}function ht(){if(be===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=be.next;var t=_e===null?ue.memoizedState:_e.next;if(t!==null)_e=t,be=e;else{if(e===null)throw Error($(310));be=e,e={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},_e===null?ue.memoizedState=_e=e:_e=_e.next=e}return _e}function yo(e,t){return typeof t=="function"?t(e):t}function Yl(e){var t=ht(),n=t.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=e;var r=be,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,s=null,h=i;do{var p=h.lane;if((Tn&p)===p)s!==null&&(s=s.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:e(r,h.action);else{var m={lane:p,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};s===null?(a=s=m,l=r):s=s.next=m,ue.lanes|=p,In|=p}h=h.next}while(h!==null&&h!==i);s===null?l=r:s.next=a,yt(r,t.memoizedState)||(He=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,ue.lanes|=i,In|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Xl(e){var t=ht(),n=t.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);yt(i,t.memoizedState)||(He=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Tc(){}function Ic(e,t){var n=ue,r=ht(),o=t(),i=!yt(r.memoizedState,o);if(i&&(r.memoizedState=o,He=!0),r=r.queue,Xs(Oc.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||_e!==null&&_e.memoizedState.tag&1){if(n.flags|=2048,xo(9,jc.bind(null,n,r,o,t),void 0,null),Ce===null)throw Error($(349));Tn&30||Pc(n,t,o)}return o}function Pc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ue.updateQueue,t===null?(t={lastEffect:null,stores:null},ue.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function jc(e,t,n,r){t.value=n,t.getSnapshot=r,Lc(t)&&Rc(e)}function Oc(e,t,n){return n(function(){Lc(t)&&Rc(e)})}function Lc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!yt(e,n)}catch{return!0}}function Rc(e){var t=Ft(e,1);t!==null&&gt(t,e,1,-1)}function ch(e){var t=Et();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:yo,lastRenderedState:e},t.queue=e,e=e.dispatch=bf.bind(null,ue,e),[t.memoizedState,e]}function xo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ue.updateQueue,t===null?(t={lastEffect:null,stores:null},ue.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Dc(){return ht().memoizedState}function li(e,t,n,r){var o=Et();ue.flags|=e,o.memoizedState=xo(1|t,n,void 0,r===void 0?null:r)}function ul(e,t,n,r){var o=ht();r=r===void 0?null:r;var i=void 0;if(be!==null){var l=be.memoizedState;if(i=l.destroy,r!==null&&Gs(r,l.deps)){o.memoizedState=xo(t,n,i,r);return}}ue.flags|=e,o.memoizedState=xo(1|t,n,i,r)}function mh(e,t){return li(8390656,8,e,t)}function Xs(e,t){return ul(2048,8,e,t)}function Nc(e,t){return ul(4,2,e,t)}function zc(e,t){return ul(4,4,e,t)}function Bc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Fc(e,t,n){return n=n!=null?n.concat([e]):null,ul(4,4,Bc.bind(null,t,e),n)}function Zs(){}function Wc(e,t){var n=ht();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Gs(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Uc(e,t){var n=ht();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Gs(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Hc(e,t,n){return Tn&21?(yt(n,t)||(n=Yu(),ue.lanes|=n,In|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,He=!0),e.memoizedState=n)}function kf(e,t){var n=te;te=n!==0&&4>n?n:4,e(!0);var r=Kl.transition;Kl.transition={};try{e(!1),t()}finally{te=n,Kl.transition=r}}function Qc(){return ht().memoizedState}function Mf(e,t,n){var r=ln(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Vc(e))Gc(t,n);else if(n=Ac(e,t,n,r),n!==null){var o=Be();gt(n,e,r,o),Kc(n,t,r)}}function bf(e,t,n){var r=ln(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Vc(e))Gc(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,n);if(o.hasEagerState=!0,o.eagerState=a,yt(a,l)){var s=t.interleaved;s===null?(o.next=o,Ws(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=Ac(e,t,o,r),n!==null&&(o=Be(),gt(n,e,r,o),Kc(n,t,r))}}function Vc(e){var t=e.alternate;return e===ue||t!==null&&t===ue}function Gc(e,t){Yr=ji=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Kc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,$s(e,n)}}var Oi={readContext:st,useCallback:Le,useContext:Le,useEffect:Le,useImperativeHandle:Le,useInsertionEffect:Le,useLayoutEffect:Le,useMemo:Le,useReducer:Le,useRef:Le,useState:Le,useDebugValue:Le,useDeferredValue:Le,useTransition:Le,useMutableSource:Le,useSyncExternalStore:Le,useId:Le,unstable_isNewReconciler:!1},Ef={readContext:st,useCallback:function(e,t){return Et().memoizedState=[e,t===void 0?null:t],e},useContext:st,useEffect:mh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,li(4194308,4,Bc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return li(4194308,4,e,t)},useInsertionEffect:function(e,t){return li(4,2,e,t)},useMemo:function(e,t){var n=Et();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Et();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Mf.bind(null,ue,e),[r.memoizedState,e]},useRef:function(e){var t=Et();return e={current:e},t.memoizedState=e},useState:ch,useDebugValue:Zs,useDeferredValue:function(e){return Et().memoizedState=e},useTransition:function(){var e=ch(!1),t=e[0];return e=kf.bind(null,e[1]),Et().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ue,o=Et();if(ae){if(n===void 0)throw Error($(407));n=n()}else{if(n=t(),Ce===null)throw Error($(349));Tn&30||Pc(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,mh(Oc.bind(null,r,i,e),[e]),r.flags|=2048,xo(9,jc.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Et(),t=Ce.identifierPrefix;if(ae){var n=Dt,r=Rt;n=(r&~(1<<32-pt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=vo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=wf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Sf={readContext:st,useCallback:Wc,useContext:st,useEffect:Xs,useImperativeHandle:Fc,useInsertionEffect:Nc,useLayoutEffect:zc,useMemo:Uc,useReducer:Yl,useRef:Dc,useState:function(){return Yl(yo)},useDebugValue:Zs,useDeferredValue:function(e){var t=ht();return Hc(t,be.memoizedState,e)},useTransition:function(){var e=Yl(yo)[0],t=ht().memoizedState;return[e,t]},useMutableSource:Tc,useSyncExternalStore:Ic,useId:Qc,unstable_isNewReconciler:!1},_f={readContext:st,useCallback:Wc,useContext:st,useEffect:Xs,useImperativeHandle:Fc,useInsertionEffect:Nc,useLayoutEffect:zc,useMemo:Uc,useReducer:Xl,useRef:Dc,useState:function(){return Xl(yo)},useDebugValue:Zs,useDeferredValue:function(e){var t=ht();return be===null?t.memoizedState=e:Hc(t,be.memoizedState,e)},useTransition:function(){var e=Xl(yo)[0],t=ht().memoizedState;return[e,t]},useMutableSource:Tc,useSyncExternalStore:Ic,useId:Qc,unstable_isNewReconciler:!1};function mt(e,t){if(e&&e.defaultProps){t=ce({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function za(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ce({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var cl={isMounted:function(e){return(e=e._reactInternals)?Dn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Be(),o=ln(e),i=Nt(r,o);i.payload=t,n!=null&&(i.callback=n),t=rn(e,i,o),t!==null&&(gt(t,e,o,r),oi(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Be(),o=ln(e),i=Nt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=rn(e,i,o),t!==null&&(gt(t,e,o,r),oi(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Be(),r=ln(e),o=Nt(n,r);o.tag=2,t!=null&&(o.callback=t),t=rn(e,o,r),t!==null&&(gt(t,e,r,n),oi(t,e,r))}};function dh(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!uo(n,r)||!uo(o,i):!0}function Yc(e,t,n){var r=!1,o=un,i=t.contextType;return typeof i=="object"&&i!==null?i=st(i):(o=Ve(t)?$n:Ne.current,r=t.contextTypes,i=(r=r!=null)?mr(e,o):un),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=cl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function fh(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&cl.enqueueReplaceState(t,t.state,null)}function Ba(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Us(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=st(i):(i=Ve(t)?$n:Ne.current,o.context=mr(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(za(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&cl.enqueueReplaceState(o,o.state,null),Ii(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function gr(e,t){try{var n="",r=t;do n+=qd(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Zl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Fa(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Af=typeof WeakMap=="function"?WeakMap:Map;function Xc(e,t,n){n=Nt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ri||(Ri=!0,Za=r),Fa(e,t)},n}function Zc(e,t,n){n=Nt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Fa(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Fa(e,t),typeof r!="function"&&(on===null?on=new Set([this]):on.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function ph(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Af;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Ff.bind(null,e,t,n),t.then(e,e))}function gh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function vh(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Nt(-1,1),t.tag=2,rn(n,t,1))),n.lanes|=1),e)}var $f=Ut.ReactCurrentOwner,He=!1;function ze(e,t,n,r){t.child=e===null?_c(t,null,n,r):fr(t,e.child,n,r)}function yh(e,t,n,r,o){n=n.render;var i=t.ref;return sr(t,o),r=Ks(e,t,n,r,i,o),n=Ys(),e!==null&&!He?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Wt(e,t,o)):(ae&&n&&Rs(t),t.flags|=1,ze(e,t,r,o),t.child)}function xh(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!i1(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Jc(e,t,i,r,o)):(e=ui(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:uo,n(l,r)&&e.ref===t.ref)return Wt(e,t,o)}return t.flags|=1,e=an(i,r),e.ref=t.ref,e.return=t,t.child=e}function Jc(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(uo(i,r)&&e.ref===t.ref)if(He=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(He=!0);else return t.lanes=e.lanes,Wt(e,t,o)}return Wa(e,t,n,r,o)}function qc(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ne(tr,Xe),Xe|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ne(tr,Xe),Xe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ne(tr,Xe),Xe|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,ne(tr,Xe),Xe|=r;return ze(e,t,o,n),t.child}function em(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Wa(e,t,n,r,o){var i=Ve(n)?$n:Ne.current;return i=mr(t,i),sr(t,o),n=Ks(e,t,n,r,i,o),r=Ys(),e!==null&&!He?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Wt(e,t,o)):(ae&&r&&Rs(t),t.flags|=1,ze(e,t,n,o),t.child)}function wh(e,t,n,r,o){if(Ve(n)){var i=!0;_i(t)}else i=!1;if(sr(t,o),t.stateNode===null)ai(e,t),Yc(t,n,r),Ba(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,h=n.contextType;typeof h=="object"&&h!==null?h=st(h):(h=Ve(n)?$n:Ne.current,h=mr(t,h));var p=n.getDerivedStateFromProps,m=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==h)&&fh(t,l,r,h),Kt=!1;var g=t.memoizedState;l.state=g,Ii(t,r,l,o),s=t.memoizedState,a!==r||g!==s||Qe.current||Kt?(typeof p=="function"&&(za(t,n,p,r),s=t.memoizedState),(a=Kt||dh(t,n,a,r,g,s,h))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=h,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,$c(e,t),a=t.memoizedProps,h=t.type===t.elementType?a:mt(t.type,a),l.props=h,m=t.pendingProps,g=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=st(s):(s=Ve(n)?$n:Ne.current,s=mr(t,s));var x=n.getDerivedStateFromProps;(p=typeof x=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==m||g!==s)&&fh(t,l,r,s),Kt=!1,g=t.memoizedState,l.state=g,Ii(t,r,l,o);var w=t.memoizedState;a!==m||g!==w||Qe.current||Kt?(typeof x=="function"&&(za(t,n,x,r),w=t.memoizedState),(h=Kt||dh(t,n,h,r,g,w,s)||!1)?(p||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,w,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,w,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),l.props=r,l.state=w,l.context=s,r=h):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Ua(e,t,n,r,i,o)}function Ua(e,t,n,r,o,i){em(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&ih(t,n,!1),Wt(e,t,i);r=t.stateNode,$f.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=fr(t,e.child,null,i),t.child=fr(t,null,a,i)):ze(e,t,a,i),t.memoizedState=r.state,o&&ih(t,n,!0),t.child}function tm(e){var t=e.stateNode;t.pendingContext?oh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&oh(e,t.context,!1),Hs(e,t.containerInfo)}function kh(e,t,n,r,o){return dr(),Ns(o),t.flags|=256,ze(e,t,n,r),t.child}var Ha={dehydrated:null,treeContext:null,retryLane:0};function Qa(e){return{baseLanes:e,cachePool:null,transitions:null}}function nm(e,t,n){var r=t.pendingProps,o=he.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ne(he,o&1),e===null)return Da(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=fl(l,r,0,null),e=_n(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Qa(n),t.memoizedState=Ha,e):Js(t,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return Cf(e,t,l,r,a,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=an(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=an(a,i):(i=_n(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Qa(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Ha,r}return i=e.child,e=i.sibling,r=an(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Js(e,t){return t=fl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Uo(e,t,n,r){return r!==null&&Ns(r),fr(t,e.child,null,n),e=Js(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Cf(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=Zl(Error($(422))),Uo(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=fl({mode:"visible",children:r.children},o,0,null),i=_n(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&fr(t,e.child,null,l),t.child.memoizedState=Qa(l),t.memoizedState=Ha,i);if(!(t.mode&1))return Uo(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error($(419)),r=Zl(i,r,void 0),Uo(e,t,l,r)}if(a=(l&e.childLanes)!==0,He||a){if(r=Ce,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Ft(e,o),gt(r,e,o,-1))}return o1(),r=Zl(Error($(421))),Uo(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Wf.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Je=nn(o.nextSibling),qe=t,ae=!0,ft=null,e!==null&&(ot[it++]=Rt,ot[it++]=Dt,ot[it++]=Cn,Rt=e.id,Dt=e.overflow,Cn=t),t=Js(t,r.children),t.flags|=4096,t)}function Mh(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Na(e.return,t,n)}function Jl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function rm(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(ze(e,t,r.children,n),r=he.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Mh(e,n,t);else if(e.tag===19)Mh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ne(he,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Pi(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Jl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Pi(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Jl(t,!0,n,null,i);break;case"together":Jl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ai(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Wt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),In|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error($(153));if(t.child!==null){for(e=t.child,n=an(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=an(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Tf(e,t,n){switch(t.tag){case 3:tm(t),dr();break;case 5:Cc(t);break;case 1:Ve(t.type)&&_i(t);break;case 4:Hs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;ne(Ci,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ne(he,he.current&1),t.flags|=128,null):n&t.child.childLanes?nm(e,t,n):(ne(he,he.current&1),e=Wt(e,t,n),e!==null?e.sibling:null);ne(he,he.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return rm(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ne(he,he.current),r)break;return null;case 22:case 23:return t.lanes=0,qc(e,t,n)}return Wt(e,t,n)}var om,Va,im,lm;om=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Va=function(){};im=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Mn($t.current);var i=null;switch(n){case"input":o=fa(e,o),r=fa(e,r),i=[];break;case"select":o=ce({},o,{value:void 0}),r=ce({},r,{value:void 0}),i=[];break;case"textarea":o=va(e,o),r=va(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ei)}xa(n,r);var l;n=null;for(h in o)if(!r.hasOwnProperty(h)&&o.hasOwnProperty(h)&&o[h]!=null)if(h==="style"){var a=o[h];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(ro.hasOwnProperty(h)?i||(i=[]):(i=i||[]).push(h,null));for(h in r){var s=r[h];if(a=o!=null?o[h]:void 0,r.hasOwnProperty(h)&&s!==a&&(s!=null||a!=null))if(h==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(i||(i=[]),i.push(h,n)),n=s;else h==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(h,s)):h==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(h,""+s):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(ro.hasOwnProperty(h)?(s!=null&&h==="onScroll"&&re("scroll",e),i||a===s||(i=[])):(i=i||[]).push(h,s))}n&&(i=i||[]).push("style",n);var h=i;(t.updateQueue=h)&&(t.flags|=4)}};lm=function(e,t,n,r){n!==r&&(t.flags|=4)};function Lr(e,t){if(!ae)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Re(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function If(e,t,n){var r=t.pendingProps;switch(Ds(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Re(t),null;case 1:return Ve(t.type)&&Si(),Re(t),null;case 3:return r=t.stateNode,pr(),ie(Qe),ie(Ne),Vs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Fo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ft!==null&&(es(ft),ft=null))),Va(e,t),Re(t),null;case 5:Qs(t);var o=Mn(go.current);if(n=t.type,e!==null&&t.stateNode!=null)im(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error($(166));return Re(t),null}if(e=Mn($t.current),Fo(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[_t]=t,r[fo]=i,e=(t.mode&1)!==0,n){case"dialog":re("cancel",r),re("close",r);break;case"iframe":case"object":case"embed":re("load",r);break;case"video":case"audio":for(o=0;o<Fr.length;o++)re(Fr[o],r);break;case"source":re("error",r);break;case"img":case"image":case"link":re("error",r),re("load",r);break;case"details":re("toggle",r);break;case"input":I1(r,i),re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},re("invalid",r);break;case"textarea":j1(r,i),re("invalid",r)}xa(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Bo(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Bo(r.textContent,a,e),o=["children",""+a]):ro.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&re("scroll",r)}switch(n){case"input":Po(r),P1(r,i,!0);break;case"textarea":Po(r),O1(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ei)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ou(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[_t]=t,e[fo]=r,om(e,t,!1,!1),t.stateNode=e;e:{switch(l=wa(n,r),n){case"dialog":re("cancel",e),re("close",e),o=r;break;case"iframe":case"object":case"embed":re("load",e),o=r;break;case"video":case"audio":for(o=0;o<Fr.length;o++)re(Fr[o],e);o=r;break;case"source":re("error",e),o=r;break;case"img":case"image":case"link":re("error",e),re("load",e),o=r;break;case"details":re("toggle",e),o=r;break;case"input":I1(e,r),o=fa(e,r),re("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ce({},r,{value:void 0}),re("invalid",e);break;case"textarea":j1(e,r),o=va(e,r),re("invalid",e);break;default:o=r}xa(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?Du(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Lu(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&oo(e,s):typeof s=="number"&&oo(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(ro.hasOwnProperty(i)?s!=null&&i==="onScroll"&&re("scroll",e):s!=null&&Ms(e,i,s,l))}switch(n){case"input":Po(e),P1(e,r,!1);break;case"textarea":Po(e),O1(e);break;case"option":r.value!=null&&e.setAttribute("value",""+hn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?or(e,!!r.multiple,i,!1):r.defaultValue!=null&&or(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Ei)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Re(t),null;case 6:if(e&&t.stateNode!=null)lm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error($(166));if(n=Mn(go.current),Mn($t.current),Fo(t)){if(r=t.stateNode,n=t.memoizedProps,r[_t]=t,(i=r.nodeValue!==n)&&(e=qe,e!==null))switch(e.tag){case 3:Bo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Bo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[_t]=t,t.stateNode=r}return Re(t),null;case 13:if(ie(he),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ae&&Je!==null&&t.mode&1&&!(t.flags&128))Ec(),dr(),t.flags|=98560,i=!1;else if(i=Fo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error($(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error($(317));i[_t]=t}else dr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Re(t),i=!1}else ft!==null&&(es(ft),ft=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||he.current&1?Ee===0&&(Ee=3):o1())),t.updateQueue!==null&&(t.flags|=4),Re(t),null);case 4:return pr(),Va(e,t),e===null&&co(t.stateNode.containerInfo),Re(t),null;case 10:return Fs(t.type._context),Re(t),null;case 17:return Ve(t.type)&&Si(),Re(t),null;case 19:if(ie(he),i=t.memoizedState,i===null)return Re(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)Lr(i,!1);else{if(Ee!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Pi(e),l!==null){for(t.flags|=128,Lr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ne(he,he.current&1|2),t.child}e=e.sibling}i.tail!==null&&ve()>vr&&(t.flags|=128,r=!0,Lr(i,!1),t.lanes=4194304)}else{if(!r)if(e=Pi(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Lr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!ae)return Re(t),null}else 2*ve()-i.renderingStartTime>vr&&n!==1073741824&&(t.flags|=128,r=!0,Lr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ve(),t.sibling=null,n=he.current,ne(he,r?n&1|2:n&1),t):(Re(t),null);case 22:case 23:return r1(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Xe&1073741824&&(Re(t),t.subtreeFlags&6&&(t.flags|=8192)):Re(t),null;case 24:return null;case 25:return null}throw Error($(156,t.tag))}function Pf(e,t){switch(Ds(t),t.tag){case 1:return Ve(t.type)&&Si(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return pr(),ie(Qe),ie(Ne),Vs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Qs(t),null;case 13:if(ie(he),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error($(340));dr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ie(he),null;case 4:return pr(),null;case 10:return Fs(t.type._context),null;case 22:case 23:return r1(),null;case 24:return null;default:return null}}var Ho=!1,De=!1,jf=typeof WeakSet=="function"?WeakSet:Set,O=null;function er(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){fe(e,t,r)}else n.current=null}function Ga(e,t,n){try{n()}catch(r){fe(e,t,r)}}var bh=!1;function Of(e,t){if(Ta=ki,e=cc(),Ls(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,h=0,p=0,m=e,g=null;t:for(;;){for(var x;m!==n||o!==0&&m.nodeType!==3||(a=l+o),m!==i||r!==0&&m.nodeType!==3||(s=l+r),m.nodeType===3&&(l+=m.nodeValue.length),(x=m.firstChild)!==null;)g=m,m=x;for(;;){if(m===e)break t;if(g===n&&++h===o&&(a=l),g===i&&++p===r&&(s=l),(x=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=x}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ia={focusedElem:e,selectionRange:n},ki=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var b=w.memoizedProps,T=w.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?b:mt(t.type,b),T);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var d=t.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error($(163))}}catch(v){fe(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return w=bh,bh=!1,w}function Xr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Ga(t,n,i)}o=o.next}while(o!==r)}}function ml(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ka(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function am(e){var t=e.alternate;t!==null&&(e.alternate=null,am(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[_t],delete t[fo],delete t[Oa],delete t[gf],delete t[vf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function sm(e){return e.tag===5||e.tag===3||e.tag===4}function Eh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||sm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ya(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ei));else if(r!==4&&(e=e.child,e!==null))for(Ya(e,t,n),e=e.sibling;e!==null;)Ya(e,t,n),e=e.sibling}function Xa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Xa(e,t,n),e=e.sibling;e!==null;)Xa(e,t,n),e=e.sibling}var Ie=null,dt=!1;function Qt(e,t,n){for(n=n.child;n!==null;)hm(e,t,n),n=n.sibling}function hm(e,t,n){if(At&&typeof At.onCommitFiberUnmount=="function")try{At.onCommitFiberUnmount(ol,n)}catch{}switch(n.tag){case 5:De||er(n,t);case 6:var r=Ie,o=dt;Ie=null,Qt(e,t,n),Ie=r,dt=o,Ie!==null&&(dt?(e=Ie,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ie.removeChild(n.stateNode));break;case 18:Ie!==null&&(dt?(e=Ie,n=n.stateNode,e.nodeType===8?Ql(e.parentNode,n):e.nodeType===1&&Ql(e,n),so(e)):Ql(Ie,n.stateNode));break;case 4:r=Ie,o=dt,Ie=n.stateNode.containerInfo,dt=!0,Qt(e,t,n),Ie=r,dt=o;break;case 0:case 11:case 14:case 15:if(!De&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Ga(n,t,l),o=o.next}while(o!==r)}Qt(e,t,n);break;case 1:if(!De&&(er(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){fe(n,t,a)}Qt(e,t,n);break;case 21:Qt(e,t,n);break;case 22:n.mode&1?(De=(r=De)||n.memoizedState!==null,Qt(e,t,n),De=r):Qt(e,t,n);break;default:Qt(e,t,n)}}function Sh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new jf),t.forEach(function(r){var o=Uf.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function ct(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:Ie=a.stateNode,dt=!1;break e;case 3:Ie=a.stateNode.containerInfo,dt=!0;break e;case 4:Ie=a.stateNode.containerInfo,dt=!0;break e}a=a.return}if(Ie===null)throw Error($(160));hm(i,l,o),Ie=null,dt=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(h){fe(o,t,h)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)um(t,e),t=t.sibling}function um(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ct(t,e),kt(e),r&4){try{Xr(3,e,e.return),ml(3,e)}catch(b){fe(e,e.return,b)}try{Xr(5,e,e.return)}catch(b){fe(e,e.return,b)}}break;case 1:ct(t,e),kt(e),r&512&&n!==null&&er(n,n.return);break;case 5:if(ct(t,e),kt(e),r&512&&n!==null&&er(n,n.return),e.flags&32){var o=e.stateNode;try{oo(o,"")}catch(b){fe(e,e.return,b)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Pu(o,i),wa(a,l);var h=wa(a,i);for(l=0;l<s.length;l+=2){var p=s[l],m=s[l+1];p==="style"?Du(o,m):p==="dangerouslySetInnerHTML"?Lu(o,m):p==="children"?oo(o,m):Ms(o,p,m,h)}switch(a){case"input":pa(o,i);break;case"textarea":ju(o,i);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?or(o,!!i.multiple,x,!1):g!==!!i.multiple&&(i.defaultValue!=null?or(o,!!i.multiple,i.defaultValue,!0):or(o,!!i.multiple,i.multiple?[]:"",!1))}o[fo]=i}catch(b){fe(e,e.return,b)}}break;case 6:if(ct(t,e),kt(e),r&4){if(e.stateNode===null)throw Error($(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(b){fe(e,e.return,b)}}break;case 3:if(ct(t,e),kt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{so(t.containerInfo)}catch(b){fe(e,e.return,b)}break;case 4:ct(t,e),kt(e);break;case 13:ct(t,e),kt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(t1=ve())),r&4&&Sh(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(De=(h=De)||p,ct(t,e),De=h):ct(t,e),kt(e),r&8192){if(h=e.memoizedState!==null,(e.stateNode.isHidden=h)&&!p&&e.mode&1)for(O=e,p=e.child;p!==null;){for(m=O=p;O!==null;){switch(g=O,x=g.child,g.tag){case 0:case 11:case 14:case 15:Xr(4,g,g.return);break;case 1:er(g,g.return);var w=g.stateNode;if(typeof w.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(b){fe(r,n,b)}}break;case 5:er(g,g.return);break;case 22:if(g.memoizedState!==null){Ah(m);continue}}x!==null?(x.return=g,O=x):Ah(m)}p=p.sibling}e:for(p=null,m=e;;){if(m.tag===5){if(p===null){p=m;try{o=m.stateNode,h?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=m.stateNode,s=m.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Ru("display",l))}catch(b){fe(e,e.return,b)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=h?"":m.memoizedProps}catch(b){fe(e,e.return,b)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:ct(t,e),kt(e),r&4&&Sh(e);break;case 21:break;default:ct(t,e),kt(e)}}function kt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(sm(n)){var r=n;break e}n=n.return}throw Error($(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(oo(o,""),r.flags&=-33);var i=Eh(e);Xa(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=Eh(e);Ya(e,a,l);break;default:throw Error($(161))}}catch(s){fe(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Lf(e,t,n){O=e,cm(e)}function cm(e,t,n){for(var r=(e.mode&1)!==0;O!==null;){var o=O,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||Ho;if(!l){var a=o.alternate,s=a!==null&&a.memoizedState!==null||De;a=Ho;var h=De;if(Ho=l,(De=s)&&!h)for(O=o;O!==null;)l=O,s=l.child,l.tag===22&&l.memoizedState!==null?$h(o):s!==null?(s.return=l,O=s):$h(o);for(;i!==null;)O=i,cm(i),i=i.sibling;O=o,Ho=a,De=h}_h(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,O=i):_h(e)}}function _h(e){for(;O!==null;){var t=O;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:De||ml(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!De)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:mt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&uh(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}uh(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var h=t.alternate;if(h!==null){var p=h.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&so(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error($(163))}De||t.flags&512&&Ka(t)}catch(g){fe(t,t.return,g)}}if(t===e){O=null;break}if(n=t.sibling,n!==null){n.return=t.return,O=n;break}O=t.return}}function Ah(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var n=t.sibling;if(n!==null){n.return=t.return,O=n;break}O=t.return}}function $h(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ml(4,t)}catch(s){fe(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){fe(t,o,s)}}var i=t.return;try{Ka(t)}catch(s){fe(t,i,s)}break;case 5:var l=t.return;try{Ka(t)}catch(s){fe(t,l,s)}}}catch(s){fe(t,t.return,s)}if(t===e){O=null;break}var a=t.sibling;if(a!==null){a.return=t.return,O=a;break}O=t.return}}var Rf=Math.ceil,Li=Ut.ReactCurrentDispatcher,qs=Ut.ReactCurrentOwner,at=Ut.ReactCurrentBatchConfig,Y=0,Ce=null,xe=null,Pe=0,Xe=0,tr=fn(0),Ee=0,wo=null,In=0,dl=0,e1=0,Zr=null,Ue=null,t1=0,vr=1/0,jt=null,Ri=!1,Za=null,on=null,Qo=!1,Jt=null,Di=0,Jr=0,Ja=null,si=-1,hi=0;function Be(){return Y&6?ve():si!==-1?si:si=ve()}function ln(e){return e.mode&1?Y&2&&Pe!==0?Pe&-Pe:xf.transition!==null?(hi===0&&(hi=Yu()),hi):(e=te,e!==0||(e=window.event,e=e===void 0?16:nc(e.type)),e):1}function gt(e,t,n,r){if(50<Jr)throw Jr=0,Ja=null,Error($(185));So(e,n,r),(!(Y&2)||e!==Ce)&&(e===Ce&&(!(Y&2)&&(dl|=n),Ee===4&&Xt(e,Pe)),Ge(e,r),n===1&&Y===0&&!(t.mode&1)&&(vr=ve()+500,hl&&pn()))}function Ge(e,t){var n=e.callbackNode;y0(e,t);var r=wi(e,e===Ce?Pe:0);if(r===0)n!==null&&D1(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&D1(n),t===1)e.tag===0?yf(Ch.bind(null,e)):kc(Ch.bind(null,e)),ff(function(){!(Y&6)&&pn()}),n=null;else{switch(Xu(r)){case 1:n=As;break;case 4:n=Gu;break;case 16:n=xi;break;case 536870912:n=Ku;break;default:n=xi}n=xm(n,mm.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function mm(e,t){if(si=-1,hi=0,Y&6)throw Error($(327));var n=e.callbackNode;if(hr()&&e.callbackNode!==n)return null;var r=wi(e,e===Ce?Pe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ni(e,r);else{t=r;var o=Y;Y|=2;var i=fm();(Ce!==e||Pe!==t)&&(jt=null,vr=ve()+500,Sn(e,t));do try{zf();break}catch(a){dm(e,a)}while(!0);Bs(),Li.current=i,Y=o,xe!==null?t=0:(Ce=null,Pe=0,t=Ee)}if(t!==0){if(t===2&&(o=Sa(e),o!==0&&(r=o,t=qa(e,o))),t===1)throw n=wo,Sn(e,0),Xt(e,r),Ge(e,ve()),n;if(t===6)Xt(e,r);else{if(o=e.current.alternate,!(r&30)&&!Df(o)&&(t=Ni(e,r),t===2&&(i=Sa(e),i!==0&&(r=i,t=qa(e,i))),t===1))throw n=wo,Sn(e,0),Xt(e,r),Ge(e,ve()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error($(345));case 2:xn(e,Ue,jt);break;case 3:if(Xt(e,r),(r&130023424)===r&&(t=t1+500-ve(),10<t)){if(wi(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Be(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ja(xn.bind(null,e,Ue,jt),t);break}xn(e,Ue,jt);break;case 4:if(Xt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-pt(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=ve()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Rf(r/1960))-r,10<r){e.timeoutHandle=ja(xn.bind(null,e,Ue,jt),r);break}xn(e,Ue,jt);break;case 5:xn(e,Ue,jt);break;default:throw Error($(329))}}}return Ge(e,ve()),e.callbackNode===n?mm.bind(null,e):null}function qa(e,t){var n=Zr;return e.current.memoizedState.isDehydrated&&(Sn(e,t).flags|=256),e=Ni(e,t),e!==2&&(t=Ue,Ue=n,t!==null&&es(t)),e}function es(e){Ue===null?Ue=e:Ue.push.apply(Ue,e)}function Df(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!yt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Xt(e,t){for(t&=~e1,t&=~dl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-pt(t),r=1<<n;e[n]=-1,t&=~r}}function Ch(e){if(Y&6)throw Error($(327));hr();var t=wi(e,0);if(!(t&1))return Ge(e,ve()),null;var n=Ni(e,t);if(e.tag!==0&&n===2){var r=Sa(e);r!==0&&(t=r,n=qa(e,r))}if(n===1)throw n=wo,Sn(e,0),Xt(e,t),Ge(e,ve()),n;if(n===6)throw Error($(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,xn(e,Ue,jt),Ge(e,ve()),null}function n1(e,t){var n=Y;Y|=1;try{return e(t)}finally{Y=n,Y===0&&(vr=ve()+500,hl&&pn())}}function Pn(e){Jt!==null&&Jt.tag===0&&!(Y&6)&&hr();var t=Y;Y|=1;var n=at.transition,r=te;try{if(at.transition=null,te=1,e)return e()}finally{te=r,at.transition=n,Y=t,!(Y&6)&&pn()}}function r1(){Xe=tr.current,ie(tr)}function Sn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,df(n)),xe!==null)for(n=xe.return;n!==null;){var r=n;switch(Ds(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Si();break;case 3:pr(),ie(Qe),ie(Ne),Vs();break;case 5:Qs(r);break;case 4:pr();break;case 13:ie(he);break;case 19:ie(he);break;case 10:Fs(r.type._context);break;case 22:case 23:r1()}n=n.return}if(Ce=e,xe=e=an(e.current,null),Pe=Xe=t,Ee=0,wo=null,e1=dl=In=0,Ue=Zr=null,kn!==null){for(t=0;t<kn.length;t++)if(n=kn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}kn=null}return e}function dm(e,t){do{var n=xe;try{if(Bs(),ii.current=Oi,ji){for(var r=ue.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}ji=!1}if(Tn=0,_e=be=ue=null,Yr=!1,vo=0,qs.current=null,n===null||n.return===null){Ee=1,wo=t,xe=null;break}e:{var i=e,l=n.return,a=n,s=t;if(t=Pe,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var h=s,p=a,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var g=p.alternate;g?(p.updateQueue=g.updateQueue,p.memoizedState=g.memoizedState,p.lanes=g.lanes):(p.updateQueue=null,p.memoizedState=null)}var x=gh(l);if(x!==null){x.flags&=-257,vh(x,l,a,i,t),x.mode&1&&ph(i,h,t),t=x,s=h;var w=t.updateQueue;if(w===null){var b=new Set;b.add(s),t.updateQueue=b}else w.add(s);break e}else{if(!(t&1)){ph(i,h,t),o1();break e}s=Error($(426))}}else if(ae&&a.mode&1){var T=gh(l);if(T!==null){!(T.flags&65536)&&(T.flags|=256),vh(T,l,a,i,t),Ns(gr(s,a));break e}}i=s=gr(s,a),Ee!==4&&(Ee=2),Zr===null?Zr=[i]:Zr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=Xc(i,s,t);hh(i,f);break e;case 1:a=s;var c=i.type,d=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(on===null||!on.has(d)))){i.flags|=65536,t&=-t,i.lanes|=t;var v=Zc(i,a,t);hh(i,v);break e}}i=i.return}while(i!==null)}gm(n)}catch(E){t=E,xe===n&&n!==null&&(xe=n=n.return);continue}break}while(!0)}function fm(){var e=Li.current;return Li.current=Oi,e===null?Oi:e}function o1(){(Ee===0||Ee===3||Ee===2)&&(Ee=4),Ce===null||!(In&268435455)&&!(dl&268435455)||Xt(Ce,Pe)}function Ni(e,t){var n=Y;Y|=2;var r=fm();(Ce!==e||Pe!==t)&&(jt=null,Sn(e,t));do try{Nf();break}catch(o){dm(e,o)}while(!0);if(Bs(),Y=n,Li.current=r,xe!==null)throw Error($(261));return Ce=null,Pe=0,Ee}function Nf(){for(;xe!==null;)pm(xe)}function zf(){for(;xe!==null&&!h0();)pm(xe)}function pm(e){var t=ym(e.alternate,e,Xe);e.memoizedProps=e.pendingProps,t===null?gm(e):xe=t,qs.current=null}function gm(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Pf(n,t),n!==null){n.flags&=32767,xe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ee=6,xe=null;return}}else if(n=If(n,t,Xe),n!==null){xe=n;return}if(t=t.sibling,t!==null){xe=t;return}xe=t=e}while(t!==null);Ee===0&&(Ee=5)}function xn(e,t,n){var r=te,o=at.transition;try{at.transition=null,te=1,Bf(e,t,n,r)}finally{at.transition=o,te=r}return null}function Bf(e,t,n,r){do hr();while(Jt!==null);if(Y&6)throw Error($(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error($(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(x0(e,i),e===Ce&&(xe=Ce=null,Pe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Qo||(Qo=!0,xm(xi,function(){return hr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=at.transition,at.transition=null;var l=te;te=1;var a=Y;Y|=4,qs.current=null,Of(e,n),um(n,e),lf(Ia),ki=!!Ta,Ia=Ta=null,e.current=n,Lf(n),u0(),Y=a,te=l,at.transition=i}else e.current=n;if(Qo&&(Qo=!1,Jt=e,Di=o),i=e.pendingLanes,i===0&&(on=null),d0(n.stateNode),Ge(e,ve()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Ri)throw Ri=!1,e=Za,Za=null,e;return Di&1&&e.tag!==0&&hr(),i=e.pendingLanes,i&1?e===Ja?Jr++:(Jr=0,Ja=e):Jr=0,pn(),null}function hr(){if(Jt!==null){var e=Xu(Di),t=at.transition,n=te;try{if(at.transition=null,te=16>e?16:e,Jt===null)var r=!1;else{if(e=Jt,Jt=null,Di=0,Y&6)throw Error($(331));var o=Y;for(Y|=4,O=e.current;O!==null;){var i=O,l=i.child;if(O.flags&16){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var h=a[s];for(O=h;O!==null;){var p=O;switch(p.tag){case 0:case 11:case 15:Xr(8,p,i)}var m=p.child;if(m!==null)m.return=p,O=m;else for(;O!==null;){p=O;var g=p.sibling,x=p.return;if(am(p),p===h){O=null;break}if(g!==null){g.return=x,O=g;break}O=x}}}var w=i.alternate;if(w!==null){var b=w.child;if(b!==null){w.child=null;do{var T=b.sibling;b.sibling=null,b=T}while(b!==null)}}O=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,O=l;else e:for(;O!==null;){if(i=O,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Xr(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,O=f;break e}O=i.return}}var c=e.current;for(O=c;O!==null;){l=O;var d=l.child;if(l.subtreeFlags&2064&&d!==null)d.return=l,O=d;else e:for(l=c;O!==null;){if(a=O,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ml(9,a)}}catch(E){fe(a,a.return,E)}if(a===l){O=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,O=v;break e}O=a.return}}if(Y=o,pn(),At&&typeof At.onPostCommitFiberRoot=="function")try{At.onPostCommitFiberRoot(ol,e)}catch{}r=!0}return r}finally{te=n,at.transition=t}}return!1}function Th(e,t,n){t=gr(n,t),t=Xc(e,t,1),e=rn(e,t,1),t=Be(),e!==null&&(So(e,1,t),Ge(e,t))}function fe(e,t,n){if(e.tag===3)Th(e,e,n);else for(;t!==null;){if(t.tag===3){Th(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(on===null||!on.has(r))){e=gr(n,e),e=Zc(t,e,1),t=rn(t,e,1),e=Be(),t!==null&&(So(t,1,e),Ge(t,e));break}}t=t.return}}function Ff(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Be(),e.pingedLanes|=e.suspendedLanes&n,Ce===e&&(Pe&n)===n&&(Ee===4||Ee===3&&(Pe&130023424)===Pe&&500>ve()-t1?Sn(e,0):e1|=n),Ge(e,t)}function vm(e,t){t===0&&(e.mode&1?(t=Lo,Lo<<=1,!(Lo&130023424)&&(Lo=4194304)):t=1);var n=Be();e=Ft(e,t),e!==null&&(So(e,t,n),Ge(e,n))}function Wf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),vm(e,n)}function Uf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error($(314))}r!==null&&r.delete(t),vm(e,n)}var ym;ym=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Qe.current)He=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return He=!1,Tf(e,t,n);He=!!(e.flags&131072)}else He=!1,ae&&t.flags&1048576&&Mc(t,$i,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ai(e,t),e=t.pendingProps;var o=mr(t,Ne.current);sr(t,n),o=Ks(null,t,r,e,o,n);var i=Ys();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ve(r)?(i=!0,_i(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Us(t),o.updater=cl,t.stateNode=o,o._reactInternals=t,Ba(t,r,e,n),t=Ua(null,t,r,!0,i,n)):(t.tag=0,ae&&i&&Rs(t),ze(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ai(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Qf(r),e=mt(r,e),o){case 0:t=Wa(null,t,r,e,n);break e;case 1:t=wh(null,t,r,e,n);break e;case 11:t=yh(null,t,r,e,n);break e;case 14:t=xh(null,t,r,mt(r.type,e),n);break e}throw Error($(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:mt(r,o),Wa(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:mt(r,o),wh(e,t,r,o,n);case 3:e:{if(tm(t),e===null)throw Error($(387));r=t.pendingProps,i=t.memoizedState,o=i.element,$c(e,t),Ii(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=gr(Error($(423)),t),t=kh(e,t,r,n,o);break e}else if(r!==o){o=gr(Error($(424)),t),t=kh(e,t,r,n,o);break e}else for(Je=nn(t.stateNode.containerInfo.firstChild),qe=t,ae=!0,ft=null,n=_c(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(dr(),r===o){t=Wt(e,t,n);break e}ze(e,t,r,n)}t=t.child}return t;case 5:return Cc(t),e===null&&Da(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Pa(r,o)?l=null:i!==null&&Pa(r,i)&&(t.flags|=32),em(e,t),ze(e,t,l,n),t.child;case 6:return e===null&&Da(t),null;case 13:return nm(e,t,n);case 4:return Hs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=fr(t,null,r,n):ze(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:mt(r,o),yh(e,t,r,o,n);case 7:return ze(e,t,t.pendingProps,n),t.child;case 8:return ze(e,t,t.pendingProps.children,n),t.child;case 12:return ze(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,ne(Ci,r._currentValue),r._currentValue=l,i!==null)if(yt(i.value,l)){if(i.children===o.children&&!Qe.current){t=Wt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=Nt(-1,n&-n),s.tag=2;var h=i.updateQueue;if(h!==null){h=h.shared;var p=h.pending;p===null?s.next=s:(s.next=p.next,p.next=s),h.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Na(i.return,n,t),a.lanes|=n;break}s=s.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error($(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Na(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}ze(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,sr(t,n),o=st(o),r=r(o),t.flags|=1,ze(e,t,r,n),t.child;case 14:return r=t.type,o=mt(r,t.pendingProps),o=mt(r.type,o),xh(e,t,r,o,n);case 15:return Jc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:mt(r,o),ai(e,t),t.tag=1,Ve(r)?(e=!0,_i(t)):e=!1,sr(t,n),Yc(t,r,o),Ba(t,r,o,n),Ua(null,t,r,!0,e,n);case 19:return rm(e,t,n);case 22:return qc(e,t,n)}throw Error($(156,t.tag))};function xm(e,t){return Vu(e,t)}function Hf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function lt(e,t,n,r){return new Hf(e,t,n,r)}function i1(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Qf(e){if(typeof e=="function")return i1(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Es)return 11;if(e===Ss)return 14}return 2}function an(e,t){var n=e.alternate;return n===null?(n=lt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ui(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")i1(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Qn:return _n(n.children,o,i,t);case bs:l=8,o|=8;break;case ua:return e=lt(12,n,t,o|2),e.elementType=ua,e.lanes=i,e;case ca:return e=lt(13,n,t,o),e.elementType=ca,e.lanes=i,e;case ma:return e=lt(19,n,t,o),e.elementType=ma,e.lanes=i,e;case Cu:return fl(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Au:l=10;break e;case $u:l=9;break e;case Es:l=11;break e;case Ss:l=14;break e;case Gt:l=16,r=null;break e}throw Error($(130,e==null?e:typeof e,""))}return t=lt(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function _n(e,t,n,r){return e=lt(7,e,r,t),e.lanes=n,e}function fl(e,t,n,r){return e=lt(22,e,r,t),e.elementType=Cu,e.lanes=n,e.stateNode={isHidden:!1},e}function ql(e,t,n){return e=lt(6,e,null,t),e.lanes=n,e}function ea(e,t,n){return t=lt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Vf(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ol(0),this.expirationTimes=Ol(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ol(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function l1(e,t,n,r,o,i,l,a,s){return e=new Vf(e,t,n,a,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=lt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Us(i),e}function Gf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Hn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function wm(e){if(!e)return un;e=e._reactInternals;e:{if(Dn(e)!==e||e.tag!==1)throw Error($(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ve(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error($(171))}if(e.tag===1){var n=e.type;if(Ve(n))return wc(e,n,t)}return t}function km(e,t,n,r,o,i,l,a,s){return e=l1(n,r,!0,e,o,i,l,a,s),e.context=wm(null),n=e.current,r=Be(),o=ln(n),i=Nt(r,o),i.callback=t??null,rn(n,i,o),e.current.lanes=o,So(e,o,r),Ge(e,r),e}function pl(e,t,n,r){var o=t.current,i=Be(),l=ln(o);return n=wm(n),t.context===null?t.context=n:t.pendingContext=n,t=Nt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=rn(o,t,l),e!==null&&(gt(e,o,l,i),oi(e,o,l)),l}function zi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ih(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function a1(e,t){Ih(e,t),(e=e.alternate)&&Ih(e,t)}function Kf(){return null}var Mm=typeof reportError=="function"?reportError:function(e){console.error(e)};function s1(e){this._internalRoot=e}gl.prototype.render=s1.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error($(409));pl(e,t,null,null)};gl.prototype.unmount=s1.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Pn(function(){pl(null,e,null,null)}),t[Bt]=null}};function gl(e){this._internalRoot=e}gl.prototype.unstable_scheduleHydration=function(e){if(e){var t=qu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Yt.length&&t!==0&&t<Yt[n].priority;n++);Yt.splice(n,0,e),n===0&&tc(e)}};function h1(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function vl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ph(){}function Yf(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var h=zi(l);i.call(h)}}var l=km(t,r,e,0,null,!1,!1,"",Ph);return e._reactRootContainer=l,e[Bt]=l.current,co(e.nodeType===8?e.parentNode:e),Pn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var h=zi(s);a.call(h)}}var s=l1(e,0,!1,null,null,!1,!1,"",Ph);return e._reactRootContainer=s,e[Bt]=s.current,co(e.nodeType===8?e.parentNode:e),Pn(function(){pl(t,s,n,r)}),s}function yl(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var s=zi(l);a.call(s)}}pl(t,l,e,o)}else l=Yf(n,t,e,o,r);return zi(l)}Zu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Br(t.pendingLanes);n!==0&&($s(t,n|1),Ge(t,ve()),!(Y&6)&&(vr=ve()+500,pn()))}break;case 13:Pn(function(){var r=Ft(e,1);if(r!==null){var o=Be();gt(r,e,1,o)}}),a1(e,1)}};Cs=function(e){if(e.tag===13){var t=Ft(e,134217728);if(t!==null){var n=Be();gt(t,e,134217728,n)}a1(e,134217728)}};Ju=function(e){if(e.tag===13){var t=ln(e),n=Ft(e,t);if(n!==null){var r=Be();gt(n,e,t,r)}a1(e,t)}};qu=function(){return te};ec=function(e,t){var n=te;try{return te=e,t()}finally{te=n}};Ma=function(e,t,n){switch(t){case"input":if(pa(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=sl(r);if(!o)throw Error($(90));Iu(r),pa(r,o)}}}break;case"textarea":ju(e,n);break;case"select":t=n.value,t!=null&&or(e,!!n.multiple,t,!1)}};Bu=n1;Fu=Pn;var Xf={usingClientEntryPoint:!1,Events:[Ao,Yn,sl,Nu,zu,n1]},Rr={findFiberByHostInstance:wn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Zf={bundleType:Rr.bundleType,version:Rr.version,rendererPackageName:Rr.rendererPackageName,rendererConfig:Rr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ut.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Hu(e),e===null?null:e.stateNode},findFiberByHostInstance:Rr.findFiberByHostInstance||Kf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vo.isDisabled&&Vo.supportsFiber)try{ol=Vo.inject(Zf),At=Vo}catch{}}tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xf;tt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h1(t))throw Error($(200));return Gf(e,t,null,n)};tt.createRoot=function(e,t){if(!h1(e))throw Error($(299));var n=!1,r="",o=Mm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=l1(e,1,!1,null,null,n,!1,r,o),e[Bt]=t.current,co(e.nodeType===8?e.parentNode:e),new s1(t)};tt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error($(188)):(e=Object.keys(e).join(","),Error($(268,e)));return e=Hu(t),e=e===null?null:e.stateNode,e};tt.flushSync=function(e){return Pn(e)};tt.hydrate=function(e,t,n){if(!vl(t))throw Error($(200));return yl(null,e,t,!0,n)};tt.hydrateRoot=function(e,t,n){if(!h1(e))throw Error($(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=Mm;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=km(t,null,e,1,n??null,o,!1,i,l),e[Bt]=t.current,co(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new gl(t)};tt.render=function(e,t,n){if(!vl(t))throw Error($(200));return yl(null,e,t,!1,n)};tt.unmountComponentAtNode=function(e){if(!vl(e))throw Error($(40));return e._reactRootContainer?(Pn(function(){yl(null,null,e,!1,function(){e._reactRootContainer=null,e[Bt]=null})}),!0):!1};tt.unstable_batchedUpdates=n1;tt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!vl(n))throw Error($(200));if(e==null||e._reactInternals===void 0)throw Error($(38));return yl(e,t,n,!1,r)};tt.version="18.3.1-next-f1338f8080-20240426";function bm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bm)}catch(e){console.error(e)}}bm(),bu.exports=tt;var Em=bu.exports,Sm,jh=Em;Sm=jh.createRoot,jh.hydrateRoot;var $e=function(){return $e=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},$e.apply(this,arguments)};function ko(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var oe="-ms-",qr="-moz-",J="-webkit-",_m="comm",xl="rule",u1="decl",Jf="@import",Am="@keyframes",qf="@layer",$m=Math.abs,c1=String.fromCharCode,ts=Object.assign;function ep(e,t){return Ae(e,0)^45?(((t<<2^Ae(e,0))<<2^Ae(e,1))<<2^Ae(e,2))<<2^Ae(e,3):0}function Cm(e){return e.trim()}function Ot(e,t){return(e=t.exec(e))?e[0]:e}function W(e,t,n){return e.replace(t,n)}function ci(e,t,n){return e.indexOf(t,n)}function Ae(e,t){return e.charCodeAt(t)|0}function yr(e,t,n){return e.slice(t,n)}function St(e){return e.length}function Tm(e){return e.length}function Wr(e,t){return t.push(e),e}function tp(e,t){return e.map(t).join("")}function Oh(e,t){return e.filter(function(n){return!Ot(n,t)})}var wl=1,xr=1,Im=0,ut=0,ye=0,Ar="";function kl(e,t,n,r,o,i,l,a){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:wl,column:xr,length:l,return:"",siblings:a}}function Vt(e,t){return ts(kl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Bn(e){for(;e.root;)e=Vt(e.root,{children:[e]});Wr(e,e.siblings)}function np(){return ye}function rp(){return ye=ut>0?Ae(Ar,--ut):0,xr--,ye===10&&(xr=1,wl--),ye}function vt(){return ye=ut<Im?Ae(Ar,ut++):0,xr++,ye===10&&(xr=1,wl++),ye}function An(){return Ae(Ar,ut)}function mi(){return ut}function Ml(e,t){return yr(Ar,e,t)}function ns(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function op(e){return wl=xr=1,Im=St(Ar=e),ut=0,[]}function ip(e){return Ar="",e}function ta(e){return Cm(Ml(ut-1,rs(e===91?e+2:e===40?e+1:e)))}function lp(e){for(;(ye=An())&&ye<33;)vt();return ns(e)>2||ns(ye)>3?"":" "}function ap(e,t){for(;--t&&vt()&&!(ye<48||ye>102||ye>57&&ye<65||ye>70&&ye<97););return Ml(e,mi()+(t<6&&An()==32&&vt()==32))}function rs(e){for(;vt();)switch(ye){case e:return ut;case 34:case 39:e!==34&&e!==39&&rs(ye);break;case 40:e===41&&rs(e);break;case 92:vt();break}return ut}function sp(e,t){for(;vt()&&e+ye!==57;)if(e+ye===84&&An()===47)break;return"/*"+Ml(t,ut-1)+"*"+c1(e===47?e:vt())}function hp(e){for(;!ns(An());)vt();return Ml(e,ut)}function up(e){return ip(di("",null,null,null,[""],e=op(e),0,[0],e))}function di(e,t,n,r,o,i,l,a,s){for(var h=0,p=0,m=l,g=0,x=0,w=0,b=1,T=1,f=1,c=0,d="",v=o,E=i,S=r,_=d;T;)switch(w=c,c=vt()){case 40:if(w!=108&&Ae(_,m-1)==58){ci(_+=W(ta(c),"&","&\f"),"&\f",$m(h?a[h-1]:0))!=-1&&(f=-1);break}case 34:case 39:case 91:_+=ta(c);break;case 9:case 10:case 13:case 32:_+=lp(w);break;case 92:_+=ap(mi()-1,7);continue;case 47:switch(An()){case 42:case 47:Wr(cp(sp(vt(),mi()),t,n,s),s);break;default:_+="/"}break;case 123*b:a[h++]=St(_)*f;case 125*b:case 59:case 0:switch(c){case 0:case 125:T=0;case 59+p:f==-1&&(_=W(_,/\f/g,"")),x>0&&St(_)-m&&Wr(x>32?Rh(_+";",r,n,m-1,s):Rh(W(_," ","")+";",r,n,m-2,s),s);break;case 59:_+=";";default:if(Wr(S=Lh(_,t,n,h,p,o,a,d,v=[],E=[],m,i),i),c===123)if(p===0)di(_,t,S,S,v,i,m,a,E);else switch(g===99&&Ae(_,3)===110?100:g){case 100:case 108:case 109:case 115:di(e,S,S,r&&Wr(Lh(e,S,S,0,0,o,a,d,o,v=[],m,E),E),o,E,m,a,r?v:E);break;default:di(_,S,S,S,[""],E,0,a,E)}}h=p=x=0,b=f=1,d=_="",m=l;break;case 58:m=1+St(_),x=w;default:if(b<1){if(c==123)--b;else if(c==125&&b++==0&&rp()==125)continue}switch(_+=c1(c),c*b){case 38:f=p>0?1:(_+="\f",-1);break;case 44:a[h++]=(St(_)-1)*f,f=1;break;case 64:An()===45&&(_+=ta(vt())),g=An(),p=m=St(d=_+=hp(mi())),c++;break;case 45:w===45&&St(_)==2&&(b=0)}}return i}function Lh(e,t,n,r,o,i,l,a,s,h,p,m){for(var g=o-1,x=o===0?i:[""],w=Tm(x),b=0,T=0,f=0;b<r;++b)for(var c=0,d=yr(e,g+1,g=$m(T=l[b])),v=e;c<w;++c)(v=Cm(T>0?x[c]+" "+d:W(d,/&\f/g,x[c])))&&(s[f++]=v);return kl(e,t,n,o===0?xl:a,s,h,p,m)}function cp(e,t,n,r){return kl(e,t,n,_m,c1(np()),yr(e,2,-2),0,r)}function Rh(e,t,n,r,o){return kl(e,t,n,u1,yr(e,0,r),yr(e,r+1,-1),r,o)}function Pm(e,t,n){switch(ep(e,t)){case 5103:return J+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return J+e+e;case 4789:return qr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return J+e+qr+e+oe+e+e;case 5936:switch(Ae(e,t+11)){case 114:return J+e+oe+W(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return J+e+oe+W(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return J+e+oe+W(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return J+e+oe+e+e;case 6165:return J+e+oe+"flex-"+e+e;case 5187:return J+e+W(e,/(\w+).+(:[^]+)/,J+"box-$1$2"+oe+"flex-$1$2")+e;case 5443:return J+e+oe+"flex-item-"+W(e,/flex-|-self/g,"")+(Ot(e,/flex-|baseline/)?"":oe+"grid-row-"+W(e,/flex-|-self/g,""))+e;case 4675:return J+e+oe+"flex-line-pack"+W(e,/align-content|flex-|-self/g,"")+e;case 5548:return J+e+oe+W(e,"shrink","negative")+e;case 5292:return J+e+oe+W(e,"basis","preferred-size")+e;case 6060:return J+"box-"+W(e,"-grow","")+J+e+oe+W(e,"grow","positive")+e;case 4554:return J+W(e,/([^-])(transform)/g,"$1"+J+"$2")+e;case 6187:return W(W(W(e,/(zoom-|grab)/,J+"$1"),/(image-set)/,J+"$1"),e,"")+e;case 5495:case 3959:return W(e,/(image-set\([^]*)/,J+"$1$`$1");case 4968:return W(W(e,/(.+:)(flex-)?(.*)/,J+"box-pack:$3"+oe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+J+e+e;case 4200:if(!Ot(e,/flex-|baseline/))return oe+"grid-column-align"+yr(e,t)+e;break;case 2592:case 3360:return oe+W(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,Ot(r.props,/grid-\w+-end/)})?~ci(e+(n=n[t].value),"span",0)?e:oe+W(e,"-start","")+e+oe+"grid-row-span:"+(~ci(n,"span",0)?Ot(n,/\d+/):+Ot(n,/\d+/)-+Ot(e,/\d+/))+";":oe+W(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Ot(r.props,/grid-\w+-start/)})?e:oe+W(W(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return W(e,/(.+)-inline(.+)/,J+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(St(e)-1-t>6)switch(Ae(e,t+1)){case 109:if(Ae(e,t+4)!==45)break;case 102:return W(e,/(.+:)(.+)-([^]+)/,"$1"+J+"$2-$3$1"+qr+(Ae(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ci(e,"stretch",0)?Pm(W(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return W(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,l,a,s,h){return oe+o+":"+i+h+(l?oe+o+"-span:"+(a?s:+s-+i)+h:"")+e});case 4949:if(Ae(e,t+6)===121)return W(e,":",":"+J)+e;break;case 6444:switch(Ae(e,Ae(e,14)===45?18:11)){case 120:return W(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+J+(Ae(e,14)===45?"inline-":"")+"box$3$1"+J+"$2$3$1"+oe+"$2box$3")+e;case 100:return W(e,":",":"+oe)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return W(e,"scroll-","scroll-snap-")+e}return e}function Bi(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function mp(e,t,n,r){switch(e.type){case qf:if(e.children.length)break;case Jf:case u1:return e.return=e.return||e.value;case _m:return"";case Am:return e.return=e.value+"{"+Bi(e.children,r)+"}";case xl:if(!St(e.value=e.props.join(",")))return""}return St(n=Bi(e.children,r))?e.return=e.value+"{"+n+"}":""}function dp(e){var t=Tm(e);return function(n,r,o,i){for(var l="",a=0;a<t;a++)l+=e[a](n,r,o,i)||"";return l}}function fp(e){return function(t){t.root||(t=t.return)&&e(t)}}function pp(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case u1:e.return=Pm(e.value,e.length,n);return;case Am:return Bi([Vt(e,{value:W(e.value,"@","@"+J)})],r);case xl:if(e.length)return tp(n=e.props,function(o){switch(Ot(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Bn(Vt(e,{props:[W(o,/:(read-\w+)/,":"+qr+"$1")]})),Bn(Vt(e,{props:[o]})),ts(e,{props:Oh(n,r)});break;case"::placeholder":Bn(Vt(e,{props:[W(o,/:(plac\w+)/,":"+J+"input-$1")]})),Bn(Vt(e,{props:[W(o,/:(plac\w+)/,":"+qr+"$1")]})),Bn(Vt(e,{props:[W(o,/:(plac\w+)/,oe+"input-$1")]})),Bn(Vt(e,{props:[o]})),ts(e,{props:Oh(n,r)});break}return""})}}var gp={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ye={},wr=typeof process<"u"&&Ye!==void 0&&(Ye.REACT_APP_SC_ATTR||Ye.SC_ATTR)||"data-styled",jm="active",Om="data-styled-version",bl="6.1.13",m1=`/*!sc*/
`,Fi=typeof window<"u"&&"HTMLElement"in window,vp=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ye!==void 0&&Ye.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ye.REACT_APP_SC_DISABLE_SPEEDY!==""?Ye.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ye.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ye!==void 0&&Ye.SC_DISABLE_SPEEDY!==void 0&&Ye.SC_DISABLE_SPEEDY!==""&&Ye.SC_DISABLE_SPEEDY!=="false"&&Ye.SC_DISABLE_SPEEDY),yp={},El=Object.freeze([]),kr=Object.freeze({});function Lm(e,t,n){return n===void 0&&(n=kr),e.theme!==n.theme&&e.theme||t||n.theme}var Rm=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),xp=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,wp=/(^-|-$)/g;function Dh(e){return e.replace(xp,"-").replace(wp,"")}var kp=/(a)(d)/gi,Go=52,Nh=function(e){return String.fromCharCode(e+(e>25?39:97))};function os(e){var t,n="";for(t=Math.abs(e);t>Go;t=t/Go|0)n=Nh(t%Go)+n;return(Nh(t%Go)+n).replace(kp,"$1-$2")}var na,Dm=5381,nr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Nm=function(e){return nr(Dm,e)};function zm(e){return os(Nm(e)>>>0)}function Mp(e){return e.displayName||e.name||"Component"}function ra(e){return typeof e=="string"&&!0}var Bm=typeof Symbol=="function"&&Symbol.for,Fm=Bm?Symbol.for("react.memo"):60115,bp=Bm?Symbol.for("react.forward_ref"):60112,Ep={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Sp={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Wm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},_p=((na={})[bp]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},na[Fm]=Wm,na);function zh(e){return("type"in(t=e)&&t.type.$$typeof)===Fm?Wm:"$$typeof"in e?_p[e.$$typeof]:Ep;var t}var Ap=Object.defineProperty,$p=Object.getOwnPropertyNames,Bh=Object.getOwnPropertySymbols,Cp=Object.getOwnPropertyDescriptor,Tp=Object.getPrototypeOf,Fh=Object.prototype;function Um(e,t,n){if(typeof t!="string"){if(Fh){var r=Tp(t);r&&r!==Fh&&Um(e,r,n)}var o=$p(t);Bh&&(o=o.concat(Bh(t)));for(var i=zh(e),l=zh(t),a=0;a<o.length;++a){var s=o[a];if(!(s in Sp||n&&n[s]||l&&s in l||i&&s in i)){var h=Cp(t,s);try{Ap(e,s,h)}catch{}}}}return e}function jn(e){return typeof e=="function"}function d1(e){return typeof e=="object"&&"styledComponentId"in e}function bn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function is(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function Mo(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ls(e,t,n){if(n===void 0&&(n=!1),!n&&!Mo(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=ls(e[r],t[r]);else if(Mo(t))for(var r in t)e[r]=ls(e[r],t[r]);return e}function f1(e,t){Object.defineProperty(e,"toString",{value:t})}function On(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Ip=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw On(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var l=o;l<i;l++)this.groupSizes[l]=0}for(var a=this.indexOfGroup(t+1),s=(l=0,n.length);l<s;l++)this.tag.insertRule(a,n[l])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,l=o;l<i;l++)n+="".concat(this.tag.getRule(l)).concat(m1);return n},e}(),fi=new Map,Wi=new Map,pi=1,Ko=function(e){if(fi.has(e))return fi.get(e);for(;Wi.has(pi);)pi++;var t=pi++;return fi.set(e,t),Wi.set(t,e),t},Pp=function(e,t){pi=t+1,fi.set(e,t),Wi.set(t,e)},jp="style[".concat(wr,"][").concat(Om,'="').concat(bl,'"]'),Op=new RegExp("^".concat(wr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Lp=function(e,t,n){for(var r,o=n.split(","),i=0,l=o.length;i<l;i++)(r=o[i])&&e.registerName(t,r)},Rp=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(m1),o=[],i=0,l=r.length;i<l;i++){var a=r[i].trim();if(a){var s=a.match(Op);if(s){var h=0|parseInt(s[1],10),p=s[2];h!==0&&(Pp(p,h),Lp(e,p,s[3]),e.getTag().insertRules(h,o)),o.length=0}else o.push(a)}}},Wh=function(e){for(var t=document.querySelectorAll(jp),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(wr)!==jm&&(Rp(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function Dp(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Hm=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(a){var s=Array.from(a.querySelectorAll("style[".concat(wr,"]")));return s[s.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(wr,jm),r.setAttribute(Om,bl);var l=Dp();return l&&r.setAttribute("nonce",l),n.insertBefore(r,i),r},Np=function(){function e(t){this.element=Hm(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,i=r.length;o<i;o++){var l=r[o];if(l.ownerNode===n)return l}throw On(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),zp=function(){function e(t){this.element=Hm(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Bp=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Uh=Fi,Fp={isServer:!Fi,useCSSOMInjection:!vp},Ui=function(){function e(t,n,r){t===void 0&&(t=kr),n===void 0&&(n={});var o=this;this.options=$e($e({},Fp),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Fi&&Uh&&(Uh=!1,Wh(this)),f1(this,function(){return function(i){for(var l=i.getTag(),a=l.length,s="",h=function(m){var g=function(f){return Wi.get(f)}(m);if(g===void 0)return"continue";var x=i.names.get(g),w=l.getGroup(m);if(x===void 0||!x.size||w.length===0)return"continue";var b="".concat(wr,".g").concat(m,'[id="').concat(g,'"]'),T="";x!==void 0&&x.forEach(function(f){f.length>0&&(T+="".concat(f,","))}),s+="".concat(w).concat(b,'{content:"').concat(T,'"}').concat(m1)},p=0;p<a;p++)h(p);return s}(o)})}return e.registerId=function(t){return Ko(t)},e.prototype.rehydrate=function(){!this.server&&Fi&&Wh(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e($e($e({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new Bp(o):r?new Np(o):new zp(o)}(this.options),new Ip(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Ko(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Ko(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ko(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Wp=/&/g,Up=/^\s*\/\/.*$/gm;function Qm(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Qm(n.children,t)),n})}function Hp(e){var t,n,r,o=kr,i=o.options,l=i===void 0?kr:i,a=o.plugins,s=a===void 0?El:a,h=function(g,x,w){return w.startsWith(n)&&w.endsWith(n)&&w.replaceAll(n,"").length>0?".".concat(t):g},p=s.slice();p.push(function(g){g.type===xl&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(Wp,n).replace(r,h))}),l.prefix&&p.push(pp),p.push(mp);var m=function(g,x,w,b){x===void 0&&(x=""),w===void 0&&(w=""),b===void 0&&(b="&"),t=b,n=x,r=new RegExp("\\".concat(n,"\\b"),"g");var T=g.replace(Up,""),f=up(w||x?"".concat(w," ").concat(x," { ").concat(T," }"):T);l.namespace&&(f=Qm(f,l.namespace));var c=[];return Bi(f,dp(p.concat(fp(function(d){return c.push(d)})))),c};return m.hash=s.length?s.reduce(function(g,x){return x.name||On(15),nr(g,x.name)},Dm).toString():"",m}var Qp=new Ui,as=Hp(),Vm=u.createContext({shouldForwardProp:void 0,styleSheet:Qp,stylis:as});Vm.Consumer;u.createContext(void 0);function ss(){return y.useContext(Vm)}var Vp=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=as);var l=r.name+i.hash;o.hasNameForId(r.id,l)||o.insertRules(r.id,l,i(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,f1(this,function(){throw On(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=as),this.name+t.hash},e}(),Gp=function(e){return e>="A"&&e<="Z"};function Hh(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Gp(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Gm=function(e){return e==null||e===!1||e===""},Km=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!Gm(i)&&(Array.isArray(i)&&i.isCss||jn(i)?r.push("".concat(Hh(o),":"),i,";"):Mo(i)?r.push.apply(r,ko(ko(["".concat(o," {")],Km(i),!1),["}"],!1)):r.push("".concat(Hh(o),": ").concat((t=o,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in gp||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function sn(e,t,n,r){if(Gm(e))return[];if(d1(e))return[".".concat(e.styledComponentId)];if(jn(e)){if(!jn(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return sn(o,t,n,r)}var i;return e instanceof Vp?n?(e.inject(n,r),[e.getName(r)]):[e]:Mo(e)?Km(e):Array.isArray(e)?Array.prototype.concat.apply(El,e.map(function(l){return sn(l,t,n,r)})):[e.toString()]}function Ym(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(jn(n)&&!d1(n))return!1}return!0}var Kp=Nm(bl),Yp=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Ym(t),this.componentId=n,this.baseHash=nr(Kp,n),this.baseStyle=r,Ui.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=bn(o,this.staticRulesId);else{var i=is(sn(this.rules,t,n,r)),l=os(nr(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,l)){var a=r(i,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,a)}o=bn(o,l),this.staticRulesId=l}else{for(var s=nr(this.baseHash,r.hash),h="",p=0;p<this.rules.length;p++){var m=this.rules[p];if(typeof m=="string")h+=m;else if(m){var g=is(sn(m,t,n,r));s=nr(s,g+p),h+=g}}if(h){var x=os(s>>>0);n.hasNameForId(this.componentId,x)||n.insertRules(this.componentId,x,r(h,".".concat(x),void 0,this.componentId)),o=bn(o,x)}}return o},e}(),bo=u.createContext(void 0);bo.Consumer;function Xp(e){var t=u.useContext(bo),n=y.useMemo(function(){return function(r,o){if(!r)throw On(14);if(jn(r)){var i=r(o);return i}if(Array.isArray(r)||typeof r!="object")throw On(8);return o?$e($e({},o),r):r}(e.theme,t)},[e.theme,t]);return e.children?u.createElement(bo.Provider,{value:n},e.children):null}var oa={};function Zp(e,t,n){var r=d1(e),o=e,i=!ra(e),l=t.attrs,a=l===void 0?El:l,s=t.componentId,h=s===void 0?function(v,E){var S=typeof v!="string"?"sc":Dh(v);oa[S]=(oa[S]||0)+1;var _="".concat(S,"-").concat(zm(bl+S+oa[S]));return E?"".concat(E,"-").concat(_):_}(t.displayName,t.parentComponentId):s,p=t.displayName,m=p===void 0?function(v){return ra(v)?"styled.".concat(v):"Styled(".concat(Mp(v),")")}(e):p,g=t.displayName&&t.componentId?"".concat(Dh(t.displayName),"-").concat(t.componentId):t.componentId||h,x=r&&o.attrs?o.attrs.concat(a).filter(Boolean):a,w=t.shouldForwardProp;if(r&&o.shouldForwardProp){var b=o.shouldForwardProp;if(t.shouldForwardProp){var T=t.shouldForwardProp;w=function(v,E){return b(v,E)&&T(v,E)}}else w=b}var f=new Yp(n,g,r?o.componentStyle:void 0);function c(v,E){return function(S,_,I){var B=S.attrs,R=S.componentStyle,q=S.defaultProps,ee=S.foldedComponentIds,me=S.styledComponentId,de=S.target,se=u.useContext(bo),we=ss(),ke=S.shouldForwardProp||we.shouldForwardProp,A=Lm(_,se,q)||kr,P=function(K,z,H){for(var Se,C=$e($e({},z),{className:void 0,theme:H}),F=0;F<K.length;F+=1){var Q=jn(Se=K[F])?Se(C):Se;for(var X in Q)C[X]=X==="className"?bn(C[X],Q[X]):X==="style"?$e($e({},C[X]),Q[X]):Q[X]}return z.className&&(C.className=bn(C.className,z.className)),C}(B,_,A),L=P.as||de,G={};for(var U in P)P[U]===void 0||U[0]==="$"||U==="as"||U==="theme"&&P.theme===A||(U==="forwardedAs"?G.as=P.forwardedAs:ke&&!ke(U,L)||(G[U]=P[U]));var D=function(K,z){var H=ss(),Se=K.generateAndInjectStyles(z,H.styleSheet,H.stylis);return Se}(R,P),N=bn(ee,me);return D&&(N+=" "+D),P.className&&(N+=" "+P.className),G[ra(L)&&!Rm.has(L)?"class":"className"]=N,G.ref=I,y.createElement(L,G)}(d,v,E)}c.displayName=m;var d=u.forwardRef(c);return d.attrs=x,d.componentStyle=f,d.displayName=m,d.shouldForwardProp=w,d.foldedComponentIds=r?bn(o.foldedComponentIds,o.styledComponentId):"",d.styledComponentId=g,d.target=r?o.target:e,Object.defineProperty(d,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=r?function(E){for(var S=[],_=1;_<arguments.length;_++)S[_-1]=arguments[_];for(var I=0,B=S;I<B.length;I++)ls(E,B[I],!0);return E}({},o.defaultProps,v):v}}),f1(d,function(){return".".concat(d.styledComponentId)}),i&&Um(d,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),d}function Qh(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var Vh=function(e){return Object.assign(e,{isCss:!0})};function j(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(jn(e)||Mo(e))return Vh(sn(Qh(El,ko([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?sn(r):Vh(sn(Qh(r,t)))}function hs(e,t,n){if(n===void 0&&(n=kr),!t)throw On(1,t);var r=function(o){for(var i=[],l=1;l<arguments.length;l++)i[l-1]=arguments[l];return e(t,n,j.apply(void 0,ko([o],i,!1)))};return r.attrs=function(o){return hs(e,t,$e($e({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return hs(e,t,$e($e({},n),o))},r}var Xm=function(e){return hs(Zp,e)},k=Xm;Rm.forEach(function(e){k[e]=Xm(e)});var Jp=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Ym(t),Ui.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,o){var i=o(is(sn(this.rules,n,r,o)),""),l=this.componentId+t;r.insertRules(l,l,i)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,o){t>2&&Ui.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,o)},e}();function Zm(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=j.apply(void 0,ko([e],t,!1)),o="sc-global-".concat(zm(JSON.stringify(r))),i=new Jp(r,o),l=function(s){var h=ss(),p=u.useContext(bo),m=u.useRef(h.styleSheet.allocateGSInstance(o)).current;return h.styleSheet.server&&a(m,s,h.styleSheet,p,h.stylis),u.useLayoutEffect(function(){if(!h.styleSheet.server)return a(m,s,h.styleSheet,p,h.stylis),function(){return i.removeStyles(m,h.styleSheet)}},[m,s,h.styleSheet,p,h.stylis]),null};function a(s,h,p,m,g){if(i.isStatic)i.renderStyles(s,yp,p,g);else{var x=$e($e({},h),{theme:Lm(h,m,l.defaultProps)});i.renderStyles(s,x,p,g)}}return u.memo(l)}var qp=`
  html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1.5;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
ul,
li {
  list-style-type: none;
}
button {
  outline: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  color: black;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

`;const p1="4px 4px 10px 0 rgba(0, 0, 0, 0.35)",g1="inset 2px 2px 3px rgba(0,0,0,0.2)",xt=()=>j`
  -webkit-text-fill-color: ${({theme:e})=>e.materialTextDisabled};
  color: ${({theme:e})=>e.materialTextDisabled};
  text-shadow: 1px 1px ${({theme:e})=>e.materialTextDisabledShadow};
  /* filter: grayscale(100%); */
`,wt=({background:e="material",color:t="materialText"}={})=>j`
  box-sizing: border-box;
  display: inline-block;
  background: ${({theme:n})=>n[e]};
  color: ${({theme:n})=>n[t]};
`,Co=({mainColor:e="black",secondaryColor:t="transparent",pixelSize:n=2})=>j`
  background-image: ${[`linear-gradient(
      45deg,
      ${e} 25%,
      transparent 25%,
      transparent 75%,
      ${e} 75%
    )`,`linear-gradient(
      45deg,
      ${e} 25%,
      transparent 25%,
      transparent 75%,
      ${e} 75%
    )`].join(",")};
  background-color: ${t};
  background-size: ${`${n*2}px ${n*2}px`};
  background-position: 0 0, ${`${n}px ${n}px`};
`,Ln=()=>j`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  color: ${({theme:e})=>e.materialText};
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
  border: 2px solid ${({theme:e})=>e.canvas};
  outline: 2px solid ${({theme:e})=>e.flatDark};
  outline-offset: -4px;
`,Fn={button:{topLeftOuter:"borderLightest",topLeftInner:"borderLight",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"},buttonPressed:{topLeftOuter:"borderDarkest",topLeftInner:"borderDark",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},buttonThin:{topLeftOuter:"borderLightest",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderDark"},buttonThinPressed:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},field:{topLeftOuter:"borderDark",topLeftInner:"borderDarkest",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},grouping:{topLeftOuter:"borderDark",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderLightest"},status:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},window:{topLeftOuter:"borderLight",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"}},eg=({theme:e,topLeftInner:t,bottomRightInner:n,hasShadow:r=!1,hasInsetShadow:o=!1})=>[r?p1:!1,o?g1:!1,t!==null?`inset 1px 1px 0px 1px ${e[t]}`:!1,n!==null?`inset -1px -1px 0 1px ${e[n]}`:!1].filter(Boolean).join(", "),pe=({invert:e=!1,style:t="button"}={})=>{const n={topLeftOuter:e?"bottomRightOuter":"topLeftOuter",topLeftInner:e?"bottomRightInner":"topLeftInner",bottomRightInner:e?"topLeftInner":"bottomRightInner",bottomRightOuter:e?"topLeftOuter":"bottomRightOuter"};return j`
    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:r})=>r[Fn[t][n.topLeftOuter]]};
    border-top-color: ${({theme:r})=>r[Fn[t][n.topLeftOuter]]};
    border-right-color: ${({theme:r})=>r[Fn[t][n.bottomRightOuter]]};
    border-bottom-color: ${({theme:r})=>r[Fn[t][n.bottomRightOuter]]};
    box-shadow: ${({theme:r,shadow:o})=>eg({theme:r,topLeftInner:Fn[t][n.topLeftInner],bottomRightInner:Fn[t][n.bottomRightInner],hasShadow:o})};
  `},Mr=()=>j`
  outline: 2px dotted ${({theme:e})=>e.materialText};
`,tg=e=>Buffer.from(e).toString("base64"),ng=typeof btoa<"u"?btoa:tg,Yo=(e,t=0)=>{const n=`<svg height="26" width="26" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g transform="rotate(${t} 13 13)">
      <polygon fill="${e}" points="6,10 20,10 13,17"/>
    </g>
  </svg>`;return`url(data:image/svg+xml;base64,${ng(n)})`},v1=(e="default")=>j`
  ::-webkit-scrollbar {
    width: 26px;
    height: 26px;
  }
  ::-webkit-scrollbar-track {
    ${({theme:t})=>Co({mainColor:e==="flat"?t.flatLight:t.material,secondaryColor:e==="flat"?t.canvas:t.borderLightest})}
  }
  ::-webkit-scrollbar-thumb {
    ${wt()}
    ${e==="flat"?Ln():pe({style:"window"})}
      outline-offset: -2px;
  }

  ::-webkit-scrollbar-corner {
    background-color: ${({theme:t})=>t.material};
  }
  ::-webkit-scrollbar-button {
    ${wt()}
    ${e==="flat"?Ln():pe({style:"window"})}
      display: block;
    outline-offset: -2px;
    height: 26px;
    width: 26px;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0 0;
  }
  ::-webkit-scrollbar-button:active,
  ::-webkit-scrollbar-button:active {
    background-position: 0 1px;
    ${e==="default"?pe({style:"window",invert:!0}):""}
  }

  ::-webkit-scrollbar-button:horizontal:increment:start,
  ::-webkit-scrollbar-button:horizontal:decrement:end,
  ::-webkit-scrollbar-button:vertical:increment:start,
  ::-webkit-scrollbar-button:vertical:decrement:end {
    display: none;
  }

  ::-webkit-scrollbar-button:horizontal:decrement {
    background-image: ${({theme:t})=>Yo(t.materialText,90)};
  }

  ::-webkit-scrollbar-button:horizontal:increment {
    background-image: ${({theme:t})=>Yo(t.materialText,270)};
  }

  ::-webkit-scrollbar-button:vertical:decrement {
    background-image: ${({theme:t})=>Yo(t.materialText,180)};
  }

  ::-webkit-scrollbar-button:vertical:increment {
    background-image: ${({theme:t})=>Yo(t.materialText,0)};
  }
`,rg=k.a`
  color: ${({theme:e})=>e.anchor};
  font-size: inherit;
  text-decoration: ${({underline:e})=>e?"underline":"none"};
  &:visited {
    color: ${({theme:e})=>e.anchorVisited};
  }
`,og=y.forwardRef(({children:e,underline:t=!0,...n},r)=>u.createElement(rg,{ref:r,underline:t,...n},e));og.displayName="Anchor";const ig=k.header`
  ${pe()};
  ${wt()};

  position: ${e=>{var t;return(t=e.position)!==null&&t!==void 0?t:e.fixed?"fixed":"absolute"}};
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`,Jm=y.forwardRef(({children:e,fixed:t=!0,position:n="fixed",...r},o)=>u.createElement(ig,{fixed:t,position:t!==!1?n:void 0,ref:o,...r},e));Jm.displayName="AppBar";const Nn=()=>{};function En(e,t,n){return n!==null&&e>n?n:t!==null&&e<t?t:e}function lg(e){if(Math.abs(e)<1){const n=e.toExponential().split("e-"),r=n[0].split(".")[1];return(r?r.length:0)+parseInt(n[1],10)}const t=e.toString().split(".")[1];return t?t.length:0}function Gh(e,t,n){const r=Math.round((e-n)/t)*t+n;return Number(r.toFixed(lg(t)))}function cn(e){return typeof e=="number"?`${e}px`:e}const ag=k.div`
  display: inline-block;
  box-sizing: border-box;
  object-fit: contain;
  ${({size:e})=>`
    height: ${e};
    width: ${e};
    `}
  border-radius: ${({square:e})=>e?0:"50%"};
  overflow: hidden;
  ${({noBorder:e,theme:t})=>!e&&`
    border-top: 2px solid ${t.borderDark};
    border-left: 2px solid ${t.borderDark};
    border-bottom: 2px solid ${t.borderLightest};
    border-right: 2px solid ${t.borderLightest};
    background: ${t.material};
  `}
  ${({src:e})=>!e&&`
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weight: bold;
    font-size: 1rem;
  `}
`,sg=k.img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
`,hg=y.forwardRef(({alt:e="",children:t,noBorder:n=!1,size:r=35,square:o=!1,src:i,...l},a)=>u.createElement(ag,{noBorder:n,ref:a,size:cn(r),square:o,src:i,...l},i?u.createElement(sg,{src:i,alt:e}):t));hg.displayName="Avatar";const je={sm:"28px",md:"36px",lg:"44px"},ug=j`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${({size:e="md"})=>je[e]};
  width: ${({fullWidth:e,size:t="md",square:n})=>e?"100%":n?je[t]:"auto"};
  padding: ${({square:e})=>e?0:"0 10px"};
  font-size: 1rem;
  user-select: none;
  &:active {
    padding-top: ${({disabled:e})=>!e&&"2px"};
  }
  padding-top: ${({active:e,disabled:t})=>e&&!t&&"2px"};
  &:after {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
  &:not(:disabled) {
    cursor: pointer;
  }
  font-family: inherit;
`,Sl=k.button`
  ${({active:e,disabled:t,primary:n,theme:r,variant:o})=>o==="flat"?j`
          ${Ln()}
          ${n?`
          border: 2px solid ${r.checkmark};
            outline: 2px solid ${r.flatDark};
            outline-offset: -4px;
          `:`
          border: 2px solid ${r.flatDark};
            outline: 2px solid transparent;
            outline-offset: -4px;
          `}
          &:focus:after, &:active:after {
            ${!e&&!t&&Mr}
            outline-offset: -4px;
          }
        `:o==="menu"||o==="thin"?j`
          ${wt()};
          border: 2px solid transparent;
          &:hover,
          &:focus {
            ${!t&&!e&&pe({style:"buttonThin"})}
          }
          &:active {
            ${!t&&pe({style:"buttonThinPressed"})}
          }
          ${e&&pe({style:"buttonThinPressed"})}
          ${t&&xt()}
        `:j`
          ${wt()};
          border: none;
          ${t&&xt()}
          ${e?Co({mainColor:r.material,secondaryColor:r.borderLightest}):""}
          &:before {
            box-sizing: border-box;
            content: '';
            position: absolute;
            ${n?j`
                  left: 2px;
                  top: 2px;
                  width: calc(100% - 4px);
                  height: calc(100% - 4px);
                  outline: 2px solid ${r.borderDarkest};
                `:j`
                  left: 0;
                  top: 0;
                  width: 100%;
                  height: 100%;
                `}

            ${pe(e?{style:o==="raised"?"window":"button",invert:!0}:{style:o==="raised"?"window":"button",invert:!1})}
          }
          &:active:before {
            ${!t&&pe({style:o==="raised"?"window":"button",invert:!0})}
          }
          &:focus:after,
          &:active:after {
            ${!e&&!t&&Mr}
            outline-offset: -8px;
          }
          &:active:focus:after,
          &:active:after {
            top: ${e?"0":"1px"};
          }
        `}
  ${ug}
`,Ze=y.forwardRef(({onClick:e,disabled:t=!1,children:n,type:r="button",fullWidth:o=!1,size:i="md",square:l=!1,active:a=!1,onTouchStart:s=Nn,primary:h=!1,variant:p="default",...m},g)=>u.createElement(Sl,{active:a,disabled:t,$disabled:t,fullWidth:o,onClick:t?void 0:e,onTouchStart:s,primary:h,ref:g,size:i,square:l,type:r,variant:p,...m},n));Ze.displayName="Button";function mn({defaultValue:e,onChange:t,onChangePropName:n="onChange",readOnly:r,value:o,valuePropName:i="value"}){const l=o!==void 0,[a,s]=y.useState(e),h=y.useCallback(p=>{l||s(p)},[l]);if(l&&typeof t!="function"&&!r){const p=`Warning: You provided a \`${i}\` prop to a component without an \`${n}\` handler.${i==="value"?`This will render a read-only field. If the field should be mutable use \`defaultValue\`. Otherwise, set either \`${n}\` or \`readOnly\`.`:`This breaks the component state. You must provide an \`${n}\` function that updates \`${i}\`.`}`;console.warn(p)}return[l?o:a,h]}const us=k.li`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  position: relative;
  height: ${e=>je[e.size]};
  width: ${e=>e.square?je[e.size]:"auto"};
  padding: 0 8px;
  font-size: 1rem;
  white-space: nowrap;
  justify-content: ${e=>e.square?"space-around":"space-between"};
  text-align: center;
  line-height: ${e=>je[e.size]};
  color: ${({theme:e})=>e.materialText};
  pointer-events: ${({$disabled:e})=>e?"none":"auto"};
  font-weight: ${({primary:e})=>e?"bold":"normal"};
  &:hover {
    ${({theme:e,$disabled:t})=>!t&&`
        color: ${e.materialTextInvert};
        background: ${e.hoverBackground};
      `}

    cursor: default;
  }
  ${e=>e.$disabled&&xt()}
`,Hi=y.forwardRef(({size:e="lg",disabled:t,square:n,children:r,onClick:o,primary:i,...l},a)=>u.createElement(us,{$disabled:t,size:e,square:n,onClick:t?void 0:o,primary:i,role:"menuitem",ref:a,"aria-disabled":t,...l},r));Hi.displayName="MenuListItem";const y1=k.ul.attrs(()=>({role:"menu"}))`
  box-sizing: border-box;
  width: ${e=>e.fullWidth?"100%":"auto"};
  padding: 4px;
  ${pe({style:"window"})}
  ${wt()}
  ${e=>e.inline&&`
    display: inline-flex;
    align-items: center;
  `}
  list-style: none;
  position: relative;
`;y1.displayName="MenuList";const Ct=20,Qi=k.input`
  position: absolute;
  left: 0;
  margin: 0;
  width: ${Ct}px;
  height: ${Ct}px;
  opacity: 0;
  z-index: -1;
`,x1=k.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 8px 0;
  cursor: ${({$disabled:e})=>e?"auto":"pointer"};
  user-select: none;
  font-size: 1rem;
  color: ${({theme:e})=>e.materialText};
  ${e=>e.$disabled&&xt()}

  ${us} & {
    margin: 0;
    height: 100%;
  }
  ${us}:hover & {
    ${({$disabled:e,theme:t})=>!e&&j`
        color: ${t.materialTextInvert};
      `};
  }
`,w1=k.span`
  display: inline-block;
  line-height: 1;
  padding: 2px;
  ${Qi}:focus ~ & {
    ${Mr}
  }
  ${Qi}:not(:disabled) ~ &:active {
    ${Mr}
  }
`,Tt=k.div`
  position: relative;
  box-sizing: border-box;
  padding: 2px;
  font-size: 1rem;
  border-style: solid;
  border-width: 2px;
  border-left-color: ${({theme:e})=>e.borderDark};
  border-top-color: ${({theme:e})=>e.borderDark};
  border-right-color: ${({theme:e})=>e.borderLightest};
  border-bottom-color: ${({theme:e})=>e.borderLightest};
  line-height: 1.5;
  &:before {
    position: absolute;
    left: 0;
    top: 0;
    content: '';
    width: calc(100% - 4px);
    height: calc(100% - 4px);

    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:e})=>e.borderDarkest};
    border-top-color: ${({theme:e})=>e.borderDarkest};
    border-right-color: ${({theme:e})=>e.borderLight};
    border-bottom-color: ${({theme:e})=>e.borderLight};

    pointer-events: none;
    ${e=>e.shadow&&`box-shadow:${g1};`}
  }
`,cg=k.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow: auto;
  ${v1()}
`,qm=y.forwardRef(({children:e,shadow:t=!0,...n},r)=>u.createElement(Tt,{ref:r,shadow:t,...n},u.createElement(cg,null,e)));qm.displayName="ScrollView";const ed=j`
  width: ${Ct}px;
  height: ${Ct}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,mg=k(Tt)`
  ${ed}
  width: ${Ct}px;
  height: ${Ct}px;
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};
  &:before {
    box-shadow: none;
  }
`,dg=k.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
  ${ed}
  width: ${Ct-4}px;
  height: ${Ct-4}px;
  outline: none;
  border: 2px solid ${({theme:e})=>e.flatDark};
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
`,fg=k.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 100%;
  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    top: calc(50% - 1px);
    width: 3px;
    height: 7px;

    border: solid
      ${({$disabled:e,theme:t})=>e?t.checkmarkDisabled:t.checkmark};
    border-width: 0 3px 3px 0;
    transform: translate(-50%, -50%) rotate(45deg);

    border-color: ${e=>e.$disabled?e.theme.checkmarkDisabled:e.theme.checkmark};
  }
`,pg=k.span.attrs(()=>({"data-testid":"indeterminateIcon"}))`
  display: inline-block;
  position: relative;

  width: 100%;
  height: 100%;

  &:after {
    content: '';
    display: block;

    width: 100%;
    height: 100%;

    ${({$disabled:e,theme:t})=>Co({mainColor:e?t.checkmarkDisabled:t.checkmark})}
    background-position: 0px 0px, 2px 2px;
  }
`,gg={flat:dg,default:mg},vg=y.forwardRef(({checked:e,className:t="",defaultChecked:n=!1,disabled:r=!1,indeterminate:o=!1,label:i="",onChange:l=Nn,style:a={},value:s,variant:h="default",...p},m)=>{var g;const[x,w]=mn({defaultValue:n,onChange:l,readOnly:(g=p.readOnly)!==null&&g!==void 0?g:r,value:e}),b=y.useCallback(c=>{const d=c.target.checked;w(d),l(c)},[l,w]),T=gg[h];let f=null;return o?f=pg:x&&(f=fg),u.createElement(x1,{$disabled:r,className:t,style:a},u.createElement(Qi,{disabled:r,onChange:r?void 0:b,readOnly:r,type:"checkbox",value:s,checked:x,"data-indeterminate":o,ref:m,...p}),u.createElement(T,{$disabled:r,role:"presentation"},f&&u.createElement(f,{$disabled:r,variant:h})),i&&u.createElement(w1,null,i))});vg.displayName="Checkbox";const td=k.div`
  ${({orientation:e,theme:t,size:n="100%"})=>e==="vertical"?`
    height: ${cn(n)};
    border-left: 2px solid ${t.borderDark};
    border-right: 2px solid ${t.borderLightest};
    margin: 0;
    `:`
    width: ${cn(n)};
    border-bottom: 2px solid ${t.borderLightest};
    border-top: 2px solid ${t.borderDark};
    margin: 0;
    `}
`;td.displayName="Separator";const yg=k(Sl)`
  padding-left: 8px;
`,xg=k(td)`
  height: 21px;
  position: relative;
  top: 0;
`,nd=k.input`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  &:disabled {
    cursor: default;
  }
`,wg=k.div`
  box-sizing: border-box;
  height: 19px;
  display: inline-block;
  width: 35px;
  margin-right: 5px;

  background: ${({color:e})=>e};

  ${({$disabled:e})=>e?j`
          border: 2px solid ${({theme:t})=>t.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:t})=>t.materialTextDisabledShadow}
          );
        `:j`
          border: 2px solid ${({theme:t})=>t.materialText};
        `}
  ${nd}:focus:not(:active) + &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${Mr}
    outline-offset: -8px;
  }
`,kg=k.span`
  width: 0px;
  height: 0px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  margin-left: 6px;

  ${({$disabled:e})=>e?j`
          border-top: 6px solid ${({theme:t})=>t.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:t})=>t.materialTextDisabledShadow}
          );
        `:j`
          border-top: 6px solid ${({theme:t})=>t.materialText};
        `}
  &:after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: ${({variant:e})=>e==="flat"?"6px":"8px"};
    right: 8px;
    width: 16px;
    height: 19px;
  }
`,Mg=y.forwardRef(({value:e,defaultValue:t,onChange:n=Nn,disabled:r=!1,variant:o="default",...i},l)=>{var a;const[s,h]=mn({defaultValue:t,onChange:n,readOnly:(a=i.readOnly)!==null&&a!==void 0?a:r,value:e}),p=m=>{const g=m.target.value;h(g),n(m)};return u.createElement(yg,{disabled:r,as:"div",variant:o,size:"md"},u.createElement(nd,{onChange:p,readOnly:r,disabled:r,value:s??"#008080",type:"color",ref:l,...i}),u.createElement(wg,{$disabled:r,color:s??"#008080",role:"presentation"}),o==="default"&&u.createElement(xg,{orientation:"vertical"}),u.createElement(kg,{$disabled:r,variant:o}))});Mg.displayName="ColorInput";const bg=k.div`
  position: relative;
  --react95-digit-primary-color: #ff0102;
  --react95-digit-secondary-color: #740201;
  --react95-digit-bg-color: #000000;

  ${({pixelSize:e})=>j`
    width: ${11*e}px;
    height: ${21*e}px;
    margin: ${e}px;

    span,
    span:before,
    span:after {
      box-sizing: border-box;
      display: inline-block;
      position: absolute;
    }
    span.active,
    span.active:before,
    span.active:after {
      background: var(--react95-digit-primary-color);
    }
    span:not(.active),
    span:not(.active):before,
    span:not(.active):after {
      ${Co({mainColor:"var(--react95-digit-bg-color)",secondaryColor:"var(--react95-digit-secondary-color)",pixelSize:e})}
    }

    span.horizontal,
    span.horizontal:before,
    span.horizontal:after {
      height: ${e}px;
      border-left: ${e}px solid var(--react95-digit-bg-color);
      border-right: ${e}px solid var(--react95-digit-bg-color);
    }
    span.horizontal.active,
    span.horizontal.active:before,
    span.horizontal.active:after {
      height: ${e}px;
      border-left: ${e}px solid var(--react95-digit-primary-color);
      border-right: ${e}px solid var(--react95-digit-primary-color);
    }
    span.horizontal {
      left: ${e}px;
      width: ${9*e}px;
    }
    span.horizontal:before {
      content: '';
      width: 100%;
      top: ${e}px;
      left: ${0}px;
    }
    span.horizontal:after {
      content: '';
      width: calc(100% - ${e*2}px);
      top: ${2*e}px;
      left: ${e}px;
    }
    span.horizontal.top {
      top: 0;
    }
    span.horizontal.bottom {
      bottom: 0;
      transform: rotateX(180deg);
    }

    span.center,
    span.center:before,
    span.center:after {
      height: ${e}px;
      border-left: ${e}px solid var(--react95-digit-bg-color);
      border-right: ${e}px solid var(--react95-digit-bg-color);
    }
    span.center.active,
    span.center.active:before,
    span.center.active:after {
      border-left: ${e}px solid var(--react95-digit-primary-color);
      border-right: ${e}px solid var(--react95-digit-primary-color);
    }
    span.center {
      top: 50%;
      transform: translateY(-50%);
      left: ${e}px;
      width: ${9*e}px;
    }
    span.center:before,
    span.center:after {
      content: '';
      width: 100%;
    }
    span.center:before {
      top: ${e}px;
    }
    span.center:after {
      bottom: ${e}px;
    }

    span.vertical,
    span.vertical:before,
    span.vertical:after {
      width: ${e}px;
      border-top: ${e}px solid var(--react95-digit-bg-color);
      border-bottom: ${e}px solid var(--react95-digit-bg-color);
    }
    span.vertical {
      height: ${11*e}px;
    }
    span.vertical.left {
      left: 0;
    }
    span.vertical.right {
      right: 0;
      transform: rotateY(180deg);
    }
    span.vertical.top {
      top: 0px;
    }
    span.vertical.bottom {
      bottom: 0px;
    }
    span.vertical:before {
      content: '';
      height: 100%;
      top: ${0}px;
      left: ${e}px;
    }
    span.vertical:after {
      content: '';
      height: calc(100% - ${e*2}px);
      top: ${e}px;
      left: ${e*2}px;
    }
  `}
`,Kh=["horizontal top","center","horizontal bottom","vertical top left","vertical top right","vertical bottom left","vertical bottom right"],Eg=[[1,0,1,1,1,1,1],[0,0,0,0,1,0,1],[1,1,1,0,1,1,0],[1,1,1,0,1,0,1],[0,1,0,1,1,0,1],[1,1,1,1,0,0,1],[1,1,1,1,0,1,1],[1,0,0,0,1,0,1],[1,1,1,1,1,1,1],[1,1,1,1,1,0,1]];function Sg({digit:e=0,pixelSize:t=2,...n}){const r=Eg[Number(e)].map((o,i)=>o?`${Kh[i]} active`:Kh[i]);return u.createElement(bg,{pixelSize:t,...n},r.map((o,i)=>u.createElement("span",{className:o,key:i})))}const _g=k.div`
  ${pe({style:"status"})}
  display: inline-flex;
  background: #000000;
`,Ag={sm:1,md:2,lg:3,xl:4},$g=y.forwardRef(({value:e=0,minLength:t=3,size:n="md",...r},o)=>{const i=y.useMemo(()=>e.toString().padStart(t,"0").split(""),[t,e]);return u.createElement(_g,{ref:o,...r},i.map((l,a)=>u.createElement(Sg,{digit:l,pixelSize:Ag[n],key:a})))});$g.displayName="Counter";const rd=j`
  display: flex;
  align-items: center;
  width: ${({fullWidth:e})=>e?"100%":"auto"};
  min-height: ${je.md};
`,Cg=k(Tt).attrs({"data-testid":"variant-default"})`
  ${rd}
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};
`,Tg=k.div.attrs({"data-testid":"variant-flat"})`
  ${Ln()}
  ${rd}
  position: relative;
`,od=j`
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  background: none;
  font-size: 1rem;
  min-height: 27px;
  font-family: inherit;
  color: ${({theme:e})=>e.canvasText};
  ${({disabled:e,variant:t})=>t!=="flat"&&e&&xt()}
`,Ig=k.input`
  ${od}
  padding: 0 8px;
`,Pg=k.textarea`
  ${od}
  padding: 8px;
  resize: none;
  ${({variant:e})=>v1(e)}
`,id=y.forwardRef(({className:e,disabled:t=!1,fullWidth:n,onChange:r=Nn,shadow:o=!0,style:i,variant:l="default",...a},s)=>{const h=l==="flat"?Tg:Cg,p=y.useMemo(()=>{var m;return a.multiline?u.createElement(Pg,{disabled:t,onChange:t?void 0:r,readOnly:t,ref:s,variant:l,...a}):u.createElement(Ig,{disabled:t,onChange:t?void 0:r,readOnly:t,ref:s,type:(m=a.type)!==null&&m!==void 0?m:"text",variant:l,...a})},[t,r,a,s,l]);return u.createElement(h,{className:e,fullWidth:n,$disabled:t,shadow:o,style:i},p)});id.displayName="TextInput";const jg=k.div`
  display: inline-flex;
  align-items: center;
`,cs=k(Ze)`
  width: 30px;
  padding: 0;
  flex-shrink: 0;

  ${({variant:e})=>e==="flat"?j`
          height: calc(50% - 1px);
        `:j`
          height: 50%;
        `}
`,Og=k.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

  ${({variant:e})=>e==="flat"?j`
          height: calc(${je.md} - 4px);
        `:j`
          height: ${je.md};
          margin-left: 2px;
        `}
`,Yh=k.span`
  width: 0px;
  height: 0px;
  display: inline-block;
  ${({invert:e})=>e?j`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-bottom: 4px solid ${({theme:t})=>t.materialText};
        `:j`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 4px solid ${({theme:t})=>t.materialText};
        `}
  ${cs}:disabled & {
    filter: drop-shadow(
      1px 1px 0px ${({theme:e})=>e.materialTextDisabledShadow}
    );
    ${({invert:e})=>e?j`
            border-bottom-color: ${({theme:t})=>t.materialTextDisabled};
          `:j`
            border-top-color: ${({theme:t})=>t.materialTextDisabled};
          `}
  }
`,ld=y.forwardRef(({className:e,defaultValue:t,disabled:n=!1,max:r,min:o,onChange:i,readOnly:l,step:a=1,style:s,value:h,variant:p="default",width:m,...g},x)=>{const[w,b]=mn({defaultValue:t,onChange:i,readOnly:l,value:h}),T=y.useCallback(S=>{const _=parseFloat(S.target.value);b(_)},[b]),f=y.useCallback(S=>{const _=En(parseFloat(((w??0)+S).toFixed(2)),o??null,r??null);b(_),i==null||i(_)},[r,o,i,b,w]),c=y.useCallback(()=>{w!==void 0&&(i==null||i(w))},[i,w]),d=y.useCallback(()=>{f(a)},[f,a]),v=y.useCallback(()=>{f(-a)},[f,a]),E=p==="flat"?"flat":"raised";return u.createElement(jg,{className:e,style:{...s,width:m!==void 0?cn(m):"auto"},...g},u.createElement(id,{value:w,variant:p,onChange:T,disabled:n,type:"number",readOnly:l,ref:x,fullWidth:!0,onBlur:c}),u.createElement(Og,{variant:p},u.createElement(cs,{"data-testid":"increment",variant:E,disabled:n||l,onClick:d},u.createElement(Yh,{invert:!0})),u.createElement(cs,{"data-testid":"decrement",variant:E,disabled:n||l,onClick:v},u.createElement(Yh,null))))});ld.displayName="NumberInput";function Lg(){const e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let t="";for(let n=0;n<10;n+=1)t+=e[Math.floor(Math.random()*e.length)];return t}const ad=e=>y.useMemo(()=>Lg(),[e]),sd=j`
  box-sizing: border-box;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  line-height: 100%;
`,hd=j`
  background: ${({theme:e})=>e.hoverBackground};
  color: ${({theme:e})=>e.canvasTextInvert};
`,k1=k.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  &:focus {
    outline: none;
  }
`,Rg=k.div`
  ${sd}
  padding-right: 8px;
  align-items: center;
  display: flex;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  margin: 0 2px;
  border: 2px solid transparent;
  ${k1}:focus & {
    ${hd}
    border: 2px dotted ${({theme:e})=>e.focusSecondary};
  }
`,ud=j`
  height: ${je.md};
  display: inline-block;
  color: ${({$disabled:e=!1,theme:t})=>e?xt():t.canvasText};
  font-size: 1rem;
  cursor: ${({$disabled:e})=>e?"default":"pointer"};
`,Dg=k(Tt)`
  ${ud}
  background: ${({$disabled:e=!1,theme:t})=>e?t.material:t.canvas};
  &:focus {
    outline: 0;
  }
`,Ng=k.div`
  ${Ln()}
  ${ud}
  background: ${({$disabled:e=!1,theme:t})=>e?t.flatLight:t.canvas};
`,zg=k.select`
  -moz-appearance: none;
  -webkit-appearance: none;
  display: block;
  width: 100%;
  height: 100%;
  color: inherit;
  font-size: 1rem;
  border: 0;
  margin: 0;
  background: none;
  -webkit-tap-highlight-color: transparent;
  border-radius: 0;
  padding-right: 30px;
  ${sd}
  cursor: pointer;
  &:disabled {
    ${xt()};
    background: ${({theme:e})=>e.material};
    cursor: default;
  }
`,cd=k(Sl).attrs(()=>({"aria-hidden":"true"}))`
  width: 30px;
  padding: 0;
  flex-shrink: 0;
  ${({variant:e="default"})=>e==="flat"?j`
          height: 100%;
          margin-right: 0;
        `:j`
          height: 100%;
        `}
  ${({native:e=!1,variant:t="default"})=>e&&(t==="flat"?`
      position: absolute;
      right: 0;
      height: 100%;
      `:`
    position: absolute;
    top: 2px;
    right: 2px;
    height: calc(100% - 4px);
    `)}
    pointer-events: ${({$disabled:e=!1,native:t=!1})=>e||t?"none":"auto"}
`,Bg=k.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  border-top: 6px solid
    ${({$disabled:e=!1,theme:t})=>e?t.materialTextDisabled:t.materialText};
  ${({$disabled:e=!1,theme:t})=>e&&`
    filter: drop-shadow(1px 1px 0px ${t.materialTextDisabledShadow});
    border-top-color: ${t.materialTextDisabled};
    `}
  ${cd}:active & {
    margin-top: 2px;
  }
`,Fg=k.ul`
  box-sizing: border-box;

  font-size: 1rem;
  position: absolute;
  transform: translateY(100%);
  left: 0;
  background: ${({theme:e})=>e.canvas};
  padding: 2px;
  border-top: none;
  cursor: default;
  z-index: 1;
  cursor: pointer;
  box-shadow: ${p1};
  ${({variant:e="default"})=>e==="flat"?j`
          bottom: 2px;
          width: 100%;
          border: 2px solid ${({theme:t})=>t.flatDark};
        `:j`
          bottom: -2px;
          width: calc(100% - 2px);
          border: 2px solid ${({theme:t})=>t.borderDarkest};
        `}
  ${({variant:e="default"})=>v1(e)}
`,Wg=k.li`
  box-sizing: border-box;

  width: 100%;
  padding-left: 8px;

  height: calc(${je.md} - 4px);
  line-height: calc(${je.md} - 4px);
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({theme:e})=>e.canvasText};
  &:focus {
    outline: 0;
  }
  ${({active:e})=>e?hd:""}
  user-select: none;
`,Ug=[],md=({className:e,defaultValue:t,disabled:n,native:r,onChange:o,options:i=Ug,readOnly:l,style:a,value:s,variant:h,width:p})=>{var m;const g=y.useMemo(()=>i.filter(Boolean),[i]),[x,w]=mn({defaultValue:t??((m=g==null?void 0:g[0])===null||m===void 0?void 0:m.value),onChange:o,readOnly:l,value:s}),b=!(n||l),T=y.useMemo(()=>({className:e,style:{...a,width:p}}),[e,a,p]),f=y.useMemo(()=>u.createElement(cd,{as:"div","data-testid":"select-button",$disabled:n,native:r,tabIndex:-1,variant:h==="flat"?"flat":"raised"},u.createElement(Bg,{"data-testid":"select-icon",$disabled:n})),[n,r,h]),c=y.useMemo(()=>h==="flat"?Ng:Dg,[h]);return y.useMemo(()=>({isEnabled:b,options:g,value:x,setValue:w,wrapperProps:T,DropdownButton:f,Wrapper:c}),[f,c,b,g,w,x,T])},Hg={ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",END:"End",ENTER:"Enter",ESC:"Escape",HOME:"Home",SPACE:"Space",TAB:"Tab"},Qg=1e3,Vg=({onBlur:e,onChange:t,onClose:n,onFocus:r,onKeyDown:o,onMouseDown:i,onOpen:l,open:a,options:s,readOnly:h,value:p,selectRef:m,setValue:g,wrapperRef:x})=>{const w=y.useRef(null),b=y.useRef([]),T=y.useRef(0),f=y.useRef(0),c=y.useRef(),d=y.useRef("search"),v=y.useRef(""),E=y.useRef(),[S,_]=mn({defaultValue:!1,onChange:l,onChangePropName:"onOpen",readOnly:h,value:a,valuePropName:"open"}),I=y.useMemo(()=>{const C=s.findIndex(F=>F.value===p);return T.current=En(C,0,null),s[C]},[s,p]),[B,R]=y.useState(s[0]),q=y.useCallback(C=>{const F=w.current,Q=b.current[C];if(!Q||!F){c.current=C;return}c.current=void 0;const X=F.clientHeight,le=F.scrollTop,Te=F.scrollTop+X,Me=Q.offsetTop,rt=Q.offsetHeight,It=Q.offsetTop+Q.offsetHeight;Me<le&&F.scrollTo(0,Me),It>Te&&F.scrollTo(0,Me-X+rt),Q.focus({preventScroll:!0})},[w]),ee=y.useCallback((C,{scroll:F}={})=>{var Q;const X=s.length-1;let le;switch(C){case"first":{le=0;break}case"last":{le=X;break}case"next":{le=En(f.current+1,0,X);break}case"previous":{le=En(f.current-1,0,X);break}case"selected":{le=En((Q=T.current)!==null&&Q!==void 0?Q:0,0,X);break}default:le=C}f.current=le,R(s[le]),F&&q(le)},[f,s,q]),me=y.useCallback(({fromEvent:C})=>{_(!0),ee("selected",{scroll:!0}),l==null||l({fromEvent:C})},[ee,l,_]),de=y.useCallback(()=>{d.current="search",v.current="",clearTimeout(E.current)},[]),se=y.useCallback(({focusSelect:C,fromEvent:F})=>{var Q;n==null||n({fromEvent:F}),_(!1),R(s[0]),de(),c.current=void 0,C&&((Q=m.current)===null||Q===void 0||Q.focus())},[de,n,s,m,_]),we=y.useCallback(({fromEvent:C})=>{S?se({focusSelect:!1,fromEvent:C}):me({fromEvent:C})},[se,me,S]),ke=y.useCallback((C,{fromEvent:F})=>{T.current!==C&&(T.current=C,g(s[C].value),t==null||t(s[C],{fromEvent:F}))},[t,s,g]),A=y.useCallback(({focusSelect:C,fromEvent:F})=>{ke(f.current,{fromEvent:F}),se({focusSelect:C,fromEvent:F})},[se,ke]),P=y.useCallback((C,{fromEvent:F,select:Q})=>{var X;switch(d.current==="cycleFirstLetter"&&C!==v.current&&(d.current="search"),C===v.current?d.current="cycleFirstLetter":v.current+=C,d.current){case"search":{let le=s.findIndex(Te=>{var Me;return((Me=Te.label)===null||Me===void 0?void 0:Me.toLocaleUpperCase().indexOf(v.current))===0});le<0&&(le=s.findIndex(Te=>{var Me;return((Me=Te.label)===null||Me===void 0?void 0:Me.toLocaleUpperCase().indexOf(C))===0}),v.current=C),le>=0&&(Q?ke(le,{fromEvent:F}):ee(le,{scroll:!0}));break}case"cycleFirstLetter":{const le=Q?(X=T.current)!==null&&X!==void 0?X:-1:f.current;let Te=s.findIndex((Me,rt)=>{var It;return rt>le&&((It=Me.label)===null||It===void 0?void 0:It.toLocaleUpperCase().indexOf(C))===0});Te<0&&(Te=s.findIndex(Me=>{var rt;return((rt=Me.label)===null||rt===void 0?void 0:rt.toLocaleUpperCase().indexOf(C))===0})),Te>=0&&(Q?ke(Te,{fromEvent:F}):ee(Te,{scroll:!0}));break}}clearTimeout(E.current),E.current=setTimeout(()=>{d.current==="search"&&(v.current="")},Qg)},[ee,s,ke]),L=y.useCallback(C=>{var F;C.button===0&&(C.preventDefault(),(F=m.current)===null||F===void 0||F.focus(),we({fromEvent:C}),i==null||i(C))},[i,m,we]),G=y.useCallback(C=>{A({focusSelect:!0,fromEvent:C})},[A]),U=y.useCallback(C=>{const{altKey:F,code:Q,ctrlKey:X,metaKey:le,shiftKey:Te}=C,{ARROW_DOWN:Me,ARROW_UP:rt,END:It,ENTER:gn,ESC:Ht,HOME:Al,SPACE:$l,TAB:$r}=Hg,E1=F||X||le||Te;if(!(Q===$r&&(F||X||le)||Q!==$r&&E1))switch(Q){case Me:{if(C.preventDefault(),!S){me({fromEvent:C});return}ee("next",{scroll:!0});break}case rt:{if(C.preventDefault(),!S){me({fromEvent:C});return}ee("previous",{scroll:!0});break}case It:{if(C.preventDefault(),!S){me({fromEvent:C});return}ee("last",{scroll:!0});break}case gn:{if(!S)return;C.preventDefault(),A({focusSelect:!0,fromEvent:C});break}case Ht:{if(!S)return;C.preventDefault(),se({focusSelect:!0,fromEvent:C});break}case Al:{if(C.preventDefault(),!S){me({fromEvent:C});return}ee("first",{scroll:!0});break}case $l:{C.preventDefault(),S?A({focusSelect:!0,fromEvent:C}):me({fromEvent:C});break}case $r:{if(!S)return;Te||C.preventDefault(),A({focusSelect:!Te,fromEvent:C});break}default:!E1&&Q.match(/^Key/)&&(C.preventDefault(),C.stopPropagation(),P(Q.replace(/^Key/,""),{select:!S,fromEvent:C}))}},[ee,se,S,me,P,A]),D=y.useCallback(C=>{U(C),o==null||o(C)},[U,o]),N=y.useCallback(C=>{ee(C)},[ee]),K=y.useCallback(C=>{S||(de(),e==null||e(C))},[de,e,S]),z=y.useCallback(C=>{de(),r==null||r(C)},[de,r]),H=y.useCallback(C=>{w.current=C,c.current!==void 0&&q(c.current)},[q]),Se=y.useCallback((C,F)=>{b.current[F]=C,c.current===F&&q(c.current)},[q]);return y.useEffect(()=>{if(!S)return()=>{};const C=F=>{var Q;const X=F.target;!((Q=x.current)===null||Q===void 0)&&Q.contains(X)||(F.preventDefault(),se({focusSelect:!1,fromEvent:F}))};return document.addEventListener("mousedown",C),()=>{document.removeEventListener("mousedown",C)}},[se,S,x]),y.useMemo(()=>({activeOption:B,handleActivateOptionIndex:N,handleBlur:K,handleButtonKeyDown:D,handleDropdownKeyDown:U,handleFocus:z,handleMouseDown:L,handleOptionClick:G,handleSetDropdownRef:H,handleSetOptionRef:Se,open:S,selectedOption:I}),[B,N,K,D,z,U,L,G,H,Se,S,I])},Gg=y.forwardRef(({className:e,defaultValue:t,disabled:n,onChange:r,options:o,readOnly:i,style:l,value:a,variant:s,width:h,...p},m)=>{const{isEnabled:g,options:x,setValue:w,value:b,DropdownButton:T,Wrapper:f}=md({defaultValue:t,disabled:n,native:!0,onChange:r,options:o,readOnly:i,value:a,variant:s}),c=y.useCallback(d=>{const v=x.find(E=>E.value===d.target.value);v&&(w(v.value),r==null||r(v,{fromEvent:d}))},[r,x,w]);return u.createElement(f,{className:e,style:{...l,width:h}},u.createElement(k1,null,u.createElement(zg,{...p,disabled:n,onChange:g?c:Nn,ref:m,value:b},x.map((d,v)=>{var E;return u.createElement("option",{key:`${d.value}-${v}`,value:d.value},(E=d.label)!==null&&E!==void 0?E:d.value)})),T))});Gg.displayName="SelectNative";function Kg({activateOptionIndex:e,active:t,index:n,onClick:r,option:o,selected:i,setRef:l}){const a=y.useCallback(()=>{e(n)},[e,n]),s=y.useCallback(p=>{l(p,n)},[n,l]),h=ad();return u.createElement(Wg,{active:t,"aria-selected":i?"true":void 0,"data-value":o.value,id:h,onClick:r,onMouseEnter:a,ref:s,role:"option",tabIndex:0},o.label)}function Yg({"aria-label":e,"aria-labelledby":t,className:n,defaultValue:r,disabled:o=!1,formatDisplay:i,inputProps:l,labelId:a,menuMaxHeight:s,name:h,onBlur:p,onChange:m,onClose:g,onFocus:x,onKeyDown:w,onMouseDown:b,onOpen:T,open:f,options:c,readOnly:d,shadow:v=!0,style:E,variant:S="default",value:_,width:I="auto",...B},R){const{isEnabled:q,options:ee,setValue:me,value:de,wrapperProps:se,DropdownButton:we,Wrapper:ke}=md({className:n,defaultValue:r,disabled:o,native:!1,onChange:m,options:c,style:E,readOnly:d,value:_,variant:S,width:I}),A=y.useRef(null),P=y.useRef(null),L=y.useRef(null),{activeOption:G,handleActivateOptionIndex:U,handleBlur:D,handleButtonKeyDown:N,handleDropdownKeyDown:K,handleFocus:z,handleMouseDown:H,handleOptionClick:Se,handleSetDropdownRef:C,handleSetOptionRef:F,open:Q,selectedOption:X}=Vg({onBlur:p,onChange:m,onClose:g,onFocus:x,onKeyDown:w,onMouseDown:b,onOpen:T,open:f,options:ee,value:de,selectRef:P,setValue:me,wrapperRef:L});y.useImperativeHandle(R,()=>({focus:gn=>{var Ht;(Ht=P.current)===null||Ht===void 0||Ht.focus(gn)},node:A.current,value:String(de)}),[de]);const le=y.useMemo(()=>X?typeof i=="function"?i(X):X.label:"",[i,X]),Te=q?1:void 0,Me=y.useMemo(()=>s?{overflow:"auto",maxHeight:s}:void 0,[s]),rt=ad(),It=y.useMemo(()=>ee.map((gn,Ht)=>{const Al=`${de}-${Ht}`,$l=gn===G,$r=gn===X;return u.createElement(Kg,{activateOptionIndex:U,active:$l,index:Ht,key:Al,onClick:Se,option:gn,selected:$r,setRef:F})}),[G,U,Se,F,ee,X,de]);return u.createElement(ke,{...se,$disabled:o,ref:L,shadow:v,style:{...E,width:I}},u.createElement("input",{name:h,ref:A,type:"hidden",value:String(de),...l}),u.createElement(k1,{"aria-disabled":o,"aria-expanded":Q,"aria-haspopup":"listbox","aria-label":e,"aria-labelledby":t??a,"aria-owns":q&&Q?rt:void 0,onBlur:D,onFocus:z,onKeyDown:N,onMouseDown:q?H:b,ref:P,role:"button",tabIndex:Te,...B},u.createElement(Rg,null,le),we),q&&Q&&u.createElement(Fg,{id:rt,onKeyDown:K,ref:C,role:"listbox",style:Me,tabIndex:0,variant:S},It))}const dd=y.forwardRef(Yg);dd.displayName="Select";const Xg=k.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${e=>e.noPadding?"0":"4px"};
`,Vi=y.forwardRef(function({children:t,noPadding:n=!1,...r},o){return u.createElement(Xg,{noPadding:n,ref:o,...r},t)});Vi.displayName="Toolbar";const Zg=k.div`
  padding: 16px;
`,br=y.forwardRef(function({children:t,...n},r){return u.createElement(Zg,{ref:r,...n},t)});br.displayName="WindowContent";const Jg=k.div`
  height: 33px;
  line-height: 33px;
  padding-left: 0.25rem;
  padding-right: 3px;
  font-weight: bold;
  border: 2px solid ${({theme:e})=>e.material};
  ${({active:e})=>e===!1?j`
          background: ${({theme:t})=>t.headerNotActiveBackground};
          color: ${({theme:t})=>t.headerNotActiveText};
        `:j`
          background: ${({theme:t})=>t.headerBackground};
          color: ${({theme:t})=>t.headerText};
        `}

  ${Sl} {
    padding-left: 0;
    padding-right: 0;
    height: 27px;
    width: 31px;
  }
`,M1=y.forwardRef(function({active:t=!0,children:n,...r},o){return u.createElement(Jg,{active:t,ref:o,...r},n)});M1.displayName="WindowHeader";const qg=k.div`
  position: relative;
  padding: 4px;
  font-size: 1rem;
  ${pe({style:"window"})}
  ${wt()}
`,ev=k.span`
  ${({theme:e})=>j`
    display: inline-block;
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 25px;
    height: 25px;
    background-image: linear-gradient(
      135deg,
      ${e.borderLightest} 16.67%,
      ${e.material} 16.67%,
      ${e.material} 33.33%,
      ${e.borderDark} 33.33%,
      ${e.borderDark} 50%,
      ${e.borderLightest} 50%,
      ${e.borderLightest} 66.67%,
      ${e.material} 66.67%,
      ${e.material} 83.33%,
      ${e.borderDark} 83.33%,
      ${e.borderDark} 100%
    );
    background-size: 8.49px 8.49px;
    clip-path: polygon(100% 0px, 0px 100%, 100% 100%);
    cursor: nwse-resize;
  `}
`,b1=y.forwardRef(({children:e,resizable:t=!1,resizeRef:n,shadow:r=!0,...o},i)=>u.createElement(qg,{ref:i,shadow:r,...o},e,t&&u.createElement(ev,{"data-testid":"resizeHandle",ref:n})));b1.displayName="Window";const tv=k(qm)`
  width: 234px;
  margin: 1rem 0;
  background: ${({theme:e})=>e.canvas};
`,nv=k.div`
  display: flex;
  background: ${({theme:e})=>e.materialDark};
  color: #dfe0e3;
`,rv=k.div`
  display: flex;
  flex-wrap: wrap;
`,Pt=k.div`
  text-align: center;
  height: 1.5em;
  line-height: 1.5em;
  width: 14.28%;
`,ov=k.span`
  cursor: pointer;

  background: ${({active:e,theme:t})=>e?t.hoverBackground:"transparent"};
  color: ${({active:e,theme:t})=>e?t.canvasTextInvert:t.canvasText};

  &:hover {
    border: 2px dashed
      ${({theme:e,active:t})=>t?"none":e.materialDark};
  }
`,iv=[{value:0,label:"January"},{value:1,label:"February"},{value:2,label:"March"},{value:3,label:"April"},{value:4,label:"May"},{value:5,label:"June"},{value:6,label:"July"},{value:7,label:"August"},{value:8,label:"September"},{value:9,label:"October"},{value:10,label:"November"},{value:11,label:"December"}];function lv(e,t){return new Date(e,t+1,0).getDate()}function av(e,t,n){return new Date(e,t,n).getDay()}function sv(e){const t=new Date(Date.parse(e)),n=t.getUTCDate(),r=t.getUTCMonth(),o=t.getUTCFullYear();return{day:n,month:r,year:o}}const hv=y.forwardRef(({className:e,date:t=new Date().toISOString(),onAccept:n,onCancel:r,shadow:o=!0},i)=>{const[l,a]=y.useState(()=>sv(t)),{year:s,month:h,day:p}=l,m=y.useCallback(({value:T})=>{a(f=>({...f,month:T}))},[]),g=y.useCallback(T=>{a(f=>({...f,year:T}))},[]),x=y.useCallback(T=>{a(f=>({...f,day:T}))},[]),w=y.useCallback(()=>{const T=[l.year,l.month+1,l.day].map(f=>String(f).padStart(2,"0")).join("-");n==null||n(T)},[l.day,l.month,l.year,n]),b=y.useMemo(()=>{const T=Array.from({length:42}),f=av(s,h,1);let c=p;const d=lv(s,h);return c=c<d?c:d,T.forEach((v,E)=>{if(E>=f&&E<d+f){const S=E-f+1;T[E]=u.createElement(Pt,{key:E,onClick:()=>{x(S)}},u.createElement(ov,{active:S===c},S))}else T[E]=u.createElement(Pt,{key:E})}),T},[p,x,h,s]);return u.createElement(b1,{className:e,ref:i,shadow:o,style:{margin:20}},u.createElement(M1,null,u.createElement("span",{role:"img","aria-label":"📆"},"📆"),"Date"),u.createElement(br,null,u.createElement(Vi,{noPadding:!0,style:{justifyContent:"space-between"}},u.createElement(dd,{options:iv,value:h,onChange:m,width:128,menuMaxHeight:200}),u.createElement(ld,{value:s,onChange:g,width:100})),u.createElement(tv,null,u.createElement(nv,null,u.createElement(Pt,null,"S"),u.createElement(Pt,null,"M"),u.createElement(Pt,null,"T"),u.createElement(Pt,null,"W"),u.createElement(Pt,null,"T"),u.createElement(Pt,null,"F"),u.createElement(Pt,null,"S")),u.createElement(rv,null,b)),u.createElement(Vi,{noPadding:!0,style:{justifyContent:"space-between"}},u.createElement(Ze,{fullWidth:!0,onClick:r,disabled:!r},"Cancel"),u.createElement(Ze,{fullWidth:!0,onClick:n?w:void 0,disabled:!n},"OK"))))});hv.displayName="DatePicker";const uv=e=>{switch(e){case"status":case"well":return j`
        ${pe({style:"status"})}
      `;case"window":case"outside":return j`
        ${pe({style:"window"})}
      `;case"field":return j`
        ${pe({style:"field"})}
      `;default:return j`
        ${pe()}
      `}},cv=k.div`
  position: relative;
  font-size: 1rem;
  ${({variant:e})=>uv(e)}
  ${({variant:e})=>wt(e==="field"?{background:"canvas",color:"canvasText"}:void 0)}
`,ur=y.forwardRef(({children:e,shadow:t=!1,variant:n="window",...r},o)=>u.createElement(cv,{ref:o,shadow:t,variant:n,...r},e));ur.displayName="Frame";const mv=k.fieldset`
  position: relative;
  border: 2px solid
    ${({theme:e,variant:t})=>t==="flat"?e.flatDark:e.borderLightest};
  padding: 16px;
  margin-top: 8px;
  font-size: 1rem;
  color: ${({theme:e})=>e.materialText};
  ${({variant:e})=>e!=="flat"&&j`
      box-shadow: -1px -1px 0 1px ${({theme:t})=>t.borderDark},
        inset -1px -1px 0 1px ${({theme:t})=>t.borderDark};
    `}
  ${e=>e.$disabled&&xt()}
`,dv=k.legend`
  display: flex;
  position: absolute;
  top: 0;
  left: 8px;
  transform: translateY(calc(-50% - 2px));
  padding: 0 8px;

  font-size: 1rem;
  background: ${({theme:e,variant:t})=>t==="flat"?e.canvas:e.material};
`,fv=y.forwardRef(({label:e,disabled:t=!1,variant:n="default",children:r,...o},i)=>u.createElement(mv,{"aria-disabled":t,$disabled:t,variant:n,ref:i,...o},e&&u.createElement(dv,{variant:n},e),r));fv.displayName="GroupBox";const pv=k.div`
  ${({theme:e,size:t="100%"})=>`
  display: inline-block;
  box-sizing: border-box;
  height: ${cn(t)};
  width: 5px;
  border-top: 2px solid ${e.borderLightest};
  border-left: 2px solid ${e.borderLightest};
  border-bottom: 2px solid ${e.borderDark};
  border-right: 2px solid ${e.borderDark};
  background: ${e.material};
`}
`;pv.displayName="Handle";const gv="url('data:image/gif;base64,R0lGODlhPAA8APQAADc3N6+vr4+Pj05OTvn5+V1dXZ+fn29vby8vLw8PD/X19d/f37S0tJSUlLq6und3d39/f9XV1c/Pz+bm5qamphkZGWZmZsbGxr+/v+rq6tra2u/v7yIiIv///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBAAfACH+I1Jlc2l6ZWQgb24gaHR0cHM6Ly9lemdpZi5jb20vcmVzaXplACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYADAAQAA0AAAVFYCeOZPmVaKqimeO+MPxFXv3d+F17Cm3nuJ1ic7lAdroapUjABZCfnQb4ef6k1OHGULtsNk3qjVKLiIFkj/mMIygU4VwIACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBkAIwAKAAcAAAUp4CdehrGI6Ed5XpSKa4teguBoGlVPAXuJBpam5/l9gh7NZrFQiDJMRQgAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsFgAPABAAIQAABVBgJ45kaZ5oakZB67bZ+M10bd94ru987//AoHBILNYYAsGlR/F4IkwnlLeZTBQ9UlaWwzweERHjuzAKFZkMYYZWm4mOw0ETfdanO8Vms7aFAAAh+QQFBAAfACwAAAAAAQABAAAFA+AXAgAh+QQFBAAfACwZABIACgAeAAAFUGAnjmRpnij5rerqtu4Hx3Rt33iu758iZrUZa1TDCASLGsXjiSiZzmFnM5n4TNJSdmREElfL5lO8cgwGACbgrAkwPat3+x1naggKRS+f/4QAACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYAIwAQAA0AAAVE4CeOXdmNaGqeabu27SUIC5xSnifZKK7zl8djkCsIaylGziNaakaEzcbH/Cwl0k9kuWxyPYptzrZULA7otFpNIK1eoxAAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkECQQAHwAsDgAEACAANAAABTHgJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/Y7CoEACH5BAUEAB8ALAAAAAA8ADwAAAX/4CeOZGmeaKqubFt6biy3Xj3fuFjveU/vPJ/wBAQOj6RiEClUGpk9IMAJxQEdmQK1Grt2OhutkvurOb7f8JaM8qLT4iKbuDu/0erxfOS+4+NPex9mfn55coIfCAuFhoBLbDUAjI1vh4FkOxSVd5eQXB4GnI5rXAAbo6R6VTUFqKmWjzasNaKwsaVIHhAEt3cLTjBQA6++XwoHuUM1vMYdyMorwoN8wkC2t9A8s102204Wxana3DNAAQO1FjUCEDXhvuTT5nUdEwOiGxa8BBDwXxKaLTiAKoMFRvJy9CmmoFcHAgrQSEiwKwICDwU0pAMQIdmnboR8TfwWrJyMPrAiz1DkNs2aSRbe6hnr99LEvDJ9IB5DQ8Dhm36glNh5COGBAmQNHrbz+WXBFChOTqFx5+GBxwYCmL1ZcPHmMiWuvkTgECzBBUvrvH4tErbDWCcYDB2IBPbV2yJJ72SZ46TtXSB5v2RIp1ZXXbFkgWxCc68mk752E3tY/OZeIsiIaxi9o+BBokGH3SZ+4FPbZ8yiPQxNeDl0hNUeHWcKjYb1Zx20bd/GzRaV7t28gRSYELvw7pIfgVcLplwF8+bOo0Ffjmm6zerWrxvPzoe79w8hAAAh+QQJBAAfACwBAAEAOgA6AAAFRuAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/D4MgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyJxnyTQym6nn0ilVSa9XGHY7jXKx2m/WK36Gy1CUVCBpu9+OtNqDeNslgip5Gej4/4ATcidLAICHHQF6c0x9iH+CXV6Gj36KZnsejgsREQSACp0Yg0ydEZWWi4RPjgdLG48apEuogJeDJVKtr7GzHrV/t5KrjX6uHhQMF4cKCwujTxHOwKmYjHzGTw+VEVIK1MGqJrrZTNuP3U/f4IniuazlSwMUFMugE/j47NW4JOQdx9bsoybMgxV4ALEIGAis4MFiCZkUaLPgUAYHGDF+Yucw0y5z3Lzt63hNUzwP5xCRpWOyDhxJYtgiStBQEVCGAAEM6MLp0p0/hMdgIZI17AOTntZgmowo9BBRgz9/EfQ54h8BBS39bKDXwBc9CrVejkNYKRLUSWGpivhXtt9PSpXEvmNiwYDdu3jzFB3LAa9fAxbUGkXjtmSZh4TPJM4kRgbhvVEL9xhTEongJJgza97MubPnz6BDix5NurTp0yJCAAAh+QQJBAAfACwEAA4ANAAgAAAFMeAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9jsKgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s6bVwLHu0bN8uXeM8rP+9YOoHFBpHRN1xmSwue02A82lrFjaOKbVl3XQ6WeWWm7x+v+HdeFj2ntHaNbL9jUAI5/RLTurWOR53eXFbfh0RgB4PCm9hfCKGiDSLb18Bjx+RiR4HjG8TA3trmkSdZxuhalSkRA2VBqpPrD+ulR0Go3SHmz8CeG8bFqJMupJNHr5nCsKxQccTg4oUNA0YCYG/HQQQYsSlnmCUFLUXgm8EAsPeP6Zf2baV2+rEmTrt8PDyzS7O9uD4b5YV2VGjGw52/wB+CaYjlQcpNBAQioHwy4QMCxe4i3BKGIQN3K7AArBATz8anUDADcgQDMGCbQkknDKAh4ABNxQ0gpnoQ8eDVAUO0ADAzUNMhbZMQiG4R4mOo0gb8eTCQgeEqJVM7juCDWvWJnI4ev2aZIwHl2PfZIBIZBXKtAsLgC1kJu0GuWXNaoB7d67ZlWP75jVLw4JXwW35PNSJFPFUrmIb402smFNCW44N5kJ5+dTkx+vuAfus+VHF0X4xzeHsObXq1ZY7ZN76mt0C0rRf1zuWW/du175PHAu+YjhxFcCPm6CsHHnv5kig6w4BACH5BAkEAB8ALAEAAQA6ADoAAAVG4CeOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CweEwum8/otHrNbrvf8PgyBAAh+QQFBAAfACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCADs=')",vv=k.div`
  display: inline-block;
  height: ${({size:e})=>cn(e)};
  width: ${({size:e})=>cn(e)};
`,yv=k.span`
  display: block;
  background: ${gv};
  background-size: cover;
  width: 100%;
  height: 100%;
`,xv=y.forwardRef(({size:e=30,...t},n)=>u.createElement(vv,{size:e,ref:n,...t},u.createElement(yv,null)));xv.displayName="Hourglass";const wv=k.div`
  position: relative;
  display: inline-block;
  padding-bottom: 26px;
`,kv=k.div`
  position: relative;
`,Mv=k.div`
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  width: 195px;
  height: 155px;
  padding: 12px;
  background: ${({theme:e})=>e.material};
  border-top: 4px solid ${({theme:e})=>e.borderLightest};
  border-left: 4px solid ${({theme:e})=>e.borderLightest};
  border-bottom: 4px solid ${({theme:e})=>e.borderDark};
  border-right: 4px solid ${({theme:e})=>e.borderDark};

  outline: 1px dotted ${({theme:e})=>e.material};
  outline-offset: -3px;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    outline: 1px dotted ${({theme:e})=>e.material};
  }
  box-shadow: 1px 1px 0 1px ${({theme:e})=>e.borderDarkest};

  &:after {
    content: '';
    display: inline-block;
    position: absolute;
    bottom: 4px;
    right: 12px;
    width: 10px;
    border-top: 2px solid #4d9046;
    border-bottom: 2px solid #07ff00;
  }
`,bv=k(Tt).attrs(()=>({"data-testid":"background"}))`
  width: 100%;
  height: 100%;
`,Ev=k.div`
  box-sizing: border-box;
  position: absolute;
  top: calc(100% + 2px);
  left: 50%;
  transform: translateX(-50%);
  height: 10px;
  width: 50%;
  background: ${({theme:e})=>e.material};
  border-left: 2px solid ${({theme:e})=>e.borderLightest};
  border-bottom: 2px solid ${({theme:e})=>e.borderDarkest};
  border-right: 2px solid ${({theme:e})=>e.borderDarkest};
  box-shadow: inset 0px 0px 0px 2px ${({theme:e})=>e.borderDark};

  &:before {
    content: '';
    position: absolute;
    top: calc(100% + 2px);
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 8px;
    background: ${({theme:e})=>e.material};
    border-left: 2px solid ${({theme:e})=>e.borderLightest};
    border-right: 2px solid ${({theme:e})=>e.borderDarkest};
    box-shadow: inset 0px 0px 0px 2px ${({theme:e})=>e.borderDark};
  }
  &:after {
    content: '';
    position: absolute;
    top: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    width: 150%;
    height: 4px;
    background: ${({theme:e})=>e.material};
    border: 2px solid ${({theme:e})=>e.borderDark};
    border-bottom: none;
    box-shadow: inset 1px 1px 0px 1px ${({theme:e})=>e.borderLightest},
      1px 1px 0 1px ${({theme:e})=>e.borderDarkest};
  }
`,Sv=y.forwardRef(({backgroundStyles:e,children:t,...n},r)=>u.createElement(wv,{ref:r,...n},u.createElement(kv,null,u.createElement(Mv,null,u.createElement(bv,{style:e},t)),u.createElement(Ev,null))));Sv.displayName="Monitor";const _v=k.div`
  display: inline-block;
  height: ${je.md};
  width: 100%;
`,Av=k(Tt)`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  padding: 0;
  overflow: hidden;
  &:before {
    z-index: 1;
  }
`,fd=j`
  width: calc(100% - 4px);
  height: calc(100% - 4px);

  display: flex;
  align-items: center;
  justify-content: space-around;
`,$v=k.div`
  position: relative;
  top: 4px;
  ${fd}
  background: ${({theme:e})=>e.canvas};
  color: #000;
  margin-left: 2px;
  margin-top: -2px;
  color: ${({theme:e})=>e.materialText};
`,Cv=k.div`
  position: absolute;
  top: 2px;
  left: 2px;
  ${fd}
  color: ${({theme:e})=>e.materialTextInvert};
  background: ${({theme:e})=>e.progress};
  clip-path: polygon(
    0 0,
    ${({value:e=0})=>e}% 0,
    ${({value:e=0})=>e}% 100%,
    0 100%
  );
  transition: 0.4s linear clip-path;
`,Tv=k.div`
  width: calc(100% - 6px);
  height: calc(100% - 8px);
  position: absolute;
  left: 3px;
  top: 4px;
  box-sizing: border-box;
  display: inline-flex;
`,pd=17,Iv=k.span`
  display: inline-block;
  width: ${pd}px;
  box-sizing: border-box;
  height: 100%;
  background: ${({theme:e})=>e.progress};
  border-color: ${({theme:e})=>e.material};
  border-width: 0px 1px;
  border-style: solid;
`,Pv=y.forwardRef(({hideValue:e=!1,shadow:t=!0,value:n,variant:r="default",...o},i)=>{const l=e?null:`${n}%`,a=y.useRef(null),[s,h]=y.useState([]),p=y.useCallback(()=>{if(!a.current||n===void 0)return;const m=a.current.getBoundingClientRect().width,g=Math.round(n/100*m/pd);h(Array.from({length:g}))},[n]);return y.useEffect(()=>(p(),window.addEventListener("resize",p),()=>window.removeEventListener("resize",p)),[p]),u.createElement(_v,{"aria-valuenow":n!==void 0?Math.round(n):void 0,ref:i,role:"progressbar",variant:r,...o},u.createElement(Av,{variant:r,shadow:t},r==="default"?u.createElement(u.Fragment,null,u.createElement($v,{"data-testid":"defaultProgress1"},l),u.createElement(Cv,{"data-testid":"defaultProgress2",value:n},l)):u.createElement(Tv,{ref:a,"data-testid":"tileProgress"},s.map((m,g)=>u.createElement(Iv,{key:g})))))});Pv.displayName="ProgressBar";const gd=j`
  width: ${Ct}px;
  height: ${Ct}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,jv=k(Tt)`
  ${gd}
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};

  &:before {
    content: '';
    position: absolute;
    left: 0px;
    top: 0px;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border-radius: 50%;
    box-shadow: none;
  }
`,Ov=k.div`
  ${Ln()}
  ${gd}
  outline: none;
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border: 2px solid ${({theme:e})=>e.flatDark};
    border-radius: 50%;
  }
`,Lv=k.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
  position: absolute;
  content: '';
  display: inline-block;
  top: 50%;
  left: 50%;
  width: 6px;
  height: 6px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: ${e=>e.$disabled?e.theme.checkmarkDisabled:e.theme.checkmark};
`,Rv={flat:Ov,default:jv},Dv=y.forwardRef(({checked:e,className:t="",disabled:n=!1,label:r="",onChange:o,style:i={},variant:l="default",...a},s)=>{const h=Rv[l];return u.createElement(x1,{$disabled:n,className:t,style:i},u.createElement(h,{$disabled:n,role:"presentation"},e&&u.createElement(Lv,{$disabled:n,variant:l})),u.createElement(Qi,{disabled:n,onChange:n?void 0:o,readOnly:n,type:"radio",checked:e,ref:s,...a}),r&&u.createElement(w1,null,r))});Dv.displayName="Radio";const Nv=typeof window<"u"?y.useLayoutEffect:y.useEffect;function vn(e){const t=y.useRef(e);return Nv(()=>{t.current=e}),y.useCallback((...n)=>(0,t.current)(...n),[])}function Xh(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function Zh(e,t){return y.useMemo(()=>e==null&&t==null?null:n=>{Xh(e,n),Xh(t,n)},[e,t])}let _l=!0,ms=!1,Jh;const zv={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function Bv(e){if("type"in e){const{type:t,tagName:n}=e;if(n==="INPUT"&&zv[t]&&!e.readOnly||n==="TEXTAREA"&&!e.readOnly)return!0}return!!("isContentEditable"in e&&e.isContentEditable)}function Fv(e){e.metaKey||e.altKey||e.ctrlKey||(_l=!0)}function ia(){_l=!1}function Wv(){this.visibilityState==="hidden"&&ms&&(_l=!0)}function Uv(e){e.addEventListener("keydown",Fv,!0),e.addEventListener("mousedown",ia,!0),e.addEventListener("pointerdown",ia,!0),e.addEventListener("touchstart",ia,!0),e.addEventListener("visibilitychange",Wv,!0)}function Hv(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return _l||Bv(t)}function Qv(){ms=!0,window.clearTimeout(Jh),Jh=window.setTimeout(()=>{ms=!1},100)}function Vv(){const e=y.useCallback(t=>{const n=Em.findDOMNode(t);n!=null&&Uv(n.ownerDocument)},[]);return{isFocusVisible:Hv,onBlurVisible:Qv,ref:e}}function Gv(e,t,n){return(n-t)*e+t}function Xo(e,t){if(t!==void 0&&"changedTouches"in e){for(let n=0;n<e.changedTouches.length;n+=1){const r=e.changedTouches[n];if(r.identifier===t)return{x:r.clientX,y:r.clientY}}return!1}return"clientX"in e?{x:e.clientX,y:e.clientY}:!1}function Zo(e){return e&&e.ownerDocument||document}function Kv(e,t){var n;const{index:r}=(n=e.reduce((o,i,l)=>{const a=Math.abs(t-i);return o===null||a<o.distance||a===o.distance?{distance:a,index:l}:o},null))!==null&&n!==void 0?n:{};return r??-1}const Yv=k.div`
  display: inline-block;
  position: relative;
  touch-action: none;
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: -2px;
    left: -15px;
    width: calc(100% + 30px);
    height: ${({hasMarks:e})=>e?"41px":"39px"};
    ${({isFocused:e,theme:t})=>e&&`
        outline: 2px dotted ${t.materialText};
        `}
  }

  ${({orientation:e,size:t})=>e==="vertical"?j`
          height: ${t};
          margin-right: 1.5rem;
          &:before {
            left: -6px;
            top: -15px;
            height: calc(100% + 30px);
            width: ${({hasMarks:n})=>n?"41px":"39px"};
          }
        `:j`
          width: ${t};
          margin-bottom: 1.5rem;
          &:before {
            top: -2px;
            left: -15px;
            width: calc(100% + 30px);
            height: ${({hasMarks:n})=>n?"41px":"39px"};
          }
        `}

  pointer-events: ${({$disabled:e})=>e?"none":"auto"};
`,vd=()=>j`
  position: absolute;
  ${({orientation:e})=>e==="vertical"?j`
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          height: 100%;
          width: 8px;
        `:j`
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          height: 8px;
          width: 100%;
        `}
`,Xv=k(Tt)`
  ${vd()}
`,Zv=k(Tt)`
  ${vd()}

  border-left-color: ${({theme:e})=>e.flatLight};
  border-top-color: ${({theme:e})=>e.flatLight};
  border-right-color: ${({theme:e})=>e.canvas};
  border-bottom-color: ${({theme:e})=>e.canvas};
  &:before {
    border-left-color: ${({theme:e})=>e.flatDark};
    border-top-color: ${({theme:e})=>e.flatDark};
    border-right-color: ${({theme:e})=>e.flatLight};
    border-bottom-color: ${({theme:e})=>e.flatLight};
  }
`,Jv=k.span`
  position: relative;
  ${({orientation:e})=>e==="vertical"?j`
          width: 32px;
          height: 18px;
          right: 2px;
          transform: translateY(-50%);
        `:j`
          height: 32px;
          width: 18px;
          top: 2px;
          transform: translateX(-50%);
        `}
  ${({variant:e})=>e==="flat"?j`
          ${Ln()}
          outline: 2px solid ${({theme:t})=>t.flatDark};
          background: ${({theme:t})=>t.flatLight};
        `:j`
          ${wt()}
          ${pe()}
          &:focus {
            outline: none;
          }
        `}
    ${({$disabled:e,theme:t})=>e&&Co({mainColor:t.material,secondaryColor:t.borderLightest})}
`,rr=6,qv=k.span`
  display: inline-block;
  position: absolute;

  ${({orientation:e})=>e==="vertical"?j`
          right: ${-rr-2}px;
          bottom: 0px;
          transform: translateY(1px);
          width: ${rr}px;
          border-bottom: 2px solid ${({theme:t})=>t.materialText};
        `:j`
          bottom: ${-rr}px;
          height: ${rr}px;
          transform: translateX(-1px);
          border-left: 1px solid ${({theme:t})=>t.materialText};
          border-right: 1px solid ${({theme:t})=>t.materialText};
        `}

  color:  ${({theme:e})=>e.materialText};
  ${({$disabled:e,theme:t})=>e&&j`
      ${xt()}
      box-shadow: 1px 1px 0px ${t.materialTextDisabledShadow};
      border-color: ${t.materialTextDisabled};
    `}
`,e2=k.div`
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 1;
  font-size: 0.875rem;

  ${({orientation:e})=>e==="vertical"?j`
          transform: translate(${rr+2}px, ${rr+1}px);
        `:j`
          transform: translate(-0.5ch, calc(100% + 2px));
        `}
`,t2=y.forwardRef(({defaultValue:e,disabled:t=!1,marks:n=!1,max:r=100,min:o=0,name:i,onChange:l,onChangeCommitted:a,onMouseDown:s,orientation:h="horizontal",size:p="100%",step:m=1,value:g,variant:x="default",...w},b)=>{const T=x==="flat"?Zv:Xv,f=h==="vertical",[c=o,d]=mn({defaultValue:e,onChange:l??a,value:g}),{isFocusVisible:v,onBlurVisible:E,ref:S}=Vv(),[_,I]=y.useState(!1),B=y.useRef(),R=y.useRef(null),q=Zh(S,B),ee=Zh(b,q),me=vn(D=>{v(D)&&I(!0)}),de=vn(()=>{_!==!1&&(I(!1),E())}),se=y.useRef(),we=y.useMemo(()=>n===!0&&Number.isFinite(m)?[...Array(Math.round((r-o)/m)+1)].map((D,N)=>({label:void 0,value:o+m*N})):Array.isArray(n)?n:[],[n,r,o,m]),ke=vn(D=>{const N=(r-o)/10,K=we.map(Se=>Se.value),z=K.indexOf(c);let H=0;switch(D.key){case"Home":H=o;break;case"End":H=r;break;case"PageUp":m&&(H=c+N);break;case"PageDown":m&&(H=c-N);break;case"ArrowRight":case"ArrowUp":m?H=c+m:H=K[z+1]||K[K.length-1];break;case"ArrowLeft":case"ArrowDown":m?H=c-m:H=K[z-1]||K[0];break;default:return}D.preventDefault(),m&&(H=Gh(H,m,o)),H=En(H,o,r),d(H),I(!0),l==null||l(H),a==null||a(H)}),A=y.useCallback(D=>{if(!B.current)return 0;const N=B.current.getBoundingClientRect();let K;f?K=(N.bottom-D.y)/N.height:K=(D.x-N.left)/N.width;let z;if(z=Gv(K,o,r),m)z=Gh(z,m,o);else{const H=we.map(C=>C.value),Se=Kv(H,z);z=H[Se]}return z=En(z,o,r),z},[we,r,o,m,f]),P=vn(D=>{var N;const K=Xo(D,se.current);if(!K)return;const z=A(K);(N=R.current)===null||N===void 0||N.focus(),d(z),I(!0),l==null||l(z)}),L=vn(D=>{const N=Xo(D,se.current);if(!N)return;const K=A(N);a==null||a(K),se.current=void 0;const z=Zo(B.current);z.removeEventListener("mousemove",P),z.removeEventListener("mouseup",L),z.removeEventListener("touchmove",P),z.removeEventListener("touchend",L)}),G=vn(D=>{var N;s==null||s(D),D.preventDefault(),(N=R.current)===null||N===void 0||N.focus(),I(!0);const K=Xo(D,se.current);if(K){const H=A(K);d(H),l==null||l(H)}const z=Zo(B.current);z.addEventListener("mousemove",P),z.addEventListener("mouseup",L)}),U=vn(D=>{var N;D.preventDefault();const K=D.changedTouches[0];K!=null&&(se.current=K.identifier),(N=R.current)===null||N===void 0||N.focus(),I(!0);const z=Xo(D,se.current);if(z){const Se=A(z);d(Se),l==null||l(Se)}const H=Zo(B.current);H.addEventListener("touchmove",P),H.addEventListener("touchend",L)});return y.useEffect(()=>{const{current:D}=B;D==null||D.addEventListener("touchstart",U);const N=Zo(D);return()=>{D==null||D.removeEventListener("touchstart",U),N.removeEventListener("mousemove",P),N.removeEventListener("mouseup",L),N.removeEventListener("touchmove",P),N.removeEventListener("touchend",L)}},[L,P,U]),u.createElement(Yv,{$disabled:t,hasMarks:!!we.length,isFocused:_,onMouseDown:G,orientation:h,ref:ee,size:cn(p),...w},u.createElement("input",{disabled:t,name:i,type:"hidden",value:c??0}),we&&we.map(D=>u.createElement(qv,{$disabled:t,"data-testid":"tick",key:D.value/(r-o)*100,orientation:h,style:{[f?"bottom":"left"]:`${(D.value-o)/(r-o)*100}%`}},D.label&&u.createElement(e2,{"aria-hidden":!0,"data-testid":"mark",orientation:h},D.label))),u.createElement(T,{orientation:h,variant:x}),u.createElement(Jv,{$disabled:t,"aria-disabled":t?!0:void 0,"aria-orientation":h,"aria-valuemax":r,"aria-valuemin":o,"aria-valuenow":c,onBlur:de,onFocus:me,onKeyDown:ke,orientation:h,ref:R,role:"slider",style:{[f?"bottom":"left"]:`${(f?-100:0)+100*(c-o)/(r-o)}%`},tabIndex:t?void 0:0,variant:x}))});t2.displayName="Slider";const n2=k.tbody`
  background: ${({theme:e})=>e.canvas};
  display: table-row-group;
  box-shadow: ${g1};
  overflow-y: auto;
`,r2=y.forwardRef(function({children:t,...n},r){return u.createElement(n2,{ref:r,...n},t)});r2.displayName="TableBody";const o2=k.td`
  padding: 0 8px;
`,i2=y.forwardRef(function({children:t,...n},r){return u.createElement(o2,{ref:r,...n},t)});i2.displayName="TableDataCell";const l2=k.thead`
  display: table-header-group;
`,a2=y.forwardRef(function({children:t,...n},r){return u.createElement(l2,{ref:r,...n},t)});a2.displayName="TableHead";const s2=k.th`
  position: relative;
  padding: 0 8px;
  display: table-cell;
  vertical-align: inherit;
  background: ${({theme:e})=>e.material};
  cursor: default;
  user-select: none;
  &:before {
    box-sizing: border-box;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${pe()}

    border-left: none;
    border-top: none;
  }
  ${({$disabled:e})=>!e&&j`
      &:active {
        &:before {
          ${pe({invert:!0,style:"window"})}
          border-left: none;
          border-top: none;
          padding-top: 2px;
        }

        & > div {
          position: relative;
          top: 2px;
        }
      }
    `}

  color: ${({theme:e})=>e.materialText};
  ${({$disabled:e})=>e&&xt()}
  &:hover {
    color: ${({theme:e})=>e.materialText};
    ${({$disabled:e})=>e&&xt()}
  }
`,h2=y.forwardRef(function({disabled:t=!1,children:n,onClick:r,onTouchStart:o=Nn,sort:i,...l},a){const s=i==="asc"?"ascending":i==="desc"?"descending":void 0;return u.createElement(s2,{$disabled:t,"aria-disabled":t,"aria-sort":s,onClick:t?void 0:r,onTouchStart:t?void 0:o,ref:a,...l},u.createElement("div",null,n))});h2.displayName="TableHeadCell";const u2=k.tr`
  color: inherit;
  display: table-row;
  height: calc(${je.md} - 2px);
  line-height: calc(${je.md} - 2px);
  vertical-align: middle;
  outline: none;

  color: ${({theme:e})=>e.canvasText};
  &:hover {
    background: ${({theme:e})=>e.hoverBackground};
    color: ${({theme:e})=>e.canvasTextInvert};
  }
`,c2=y.forwardRef(function({children:t,...n},r){return u.createElement(u2,{ref:r,...n},t)});c2.displayName="TableRow";const m2=k.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1rem;
`,d2=k(Tt)`
  &:before {
    box-shadow: none;
  }
`,f2=y.forwardRef(({children:e,...t},n)=>u.createElement(d2,null,u.createElement(m2,{ref:n,...t},e)));f2.displayName="Table";const p2=k.button`
  ${wt()}
  ${pe()}
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  height: ${je.md};
  line-height: ${je.md};
  padding: 0 8px;
  border-bottom: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin: 0 0 -2px 0;
  cursor: default;
  color: ${({theme:e})=>e.materialText};
  user-select: none;
  font-family: inherit;
  &:focus:after,
  &:active:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${Mr}
    outline-offset: -6px;
  }
  ${e=>e.selected&&`
    z-index: 1;
    height: calc(${je.md} + 4px);
    top: -4px;
    margin-bottom: -6px;
    padding: 0 16px;
    margin-left: -8px;
    &:not(:last-child) {
      margin-right: -8px;
    }
  `}
  &:before {
    content: '';
    position: absolute;
    width: calc(100% - 4px);
    height: 6px;
    background: ${({theme:e})=>e.material};
    bottom: -4px;
    left: 2px;
  }
`,g2=y.forwardRef(({value:e,onClick:t,selected:n=!1,children:r,...o},i)=>u.createElement(p2,{"aria-selected":n,selected:n,onClick:l=>t==null?void 0:t(e,l),ref:i,role:"tab",...o},r));g2.displayName="Tab";const v2=k.div`
  ${wt()}
  ${pe()}
  position: relative;
  display: block;
  height: 100%;
  padding: 16px;
  font-size: 1rem;
`,y2=y.forwardRef(({children:e,...t},n)=>u.createElement(v2,{ref:n,...t},e));y2.displayName="TabBody";const x2=k.div`
  position: relative;
  ${({isMultiRow:e,theme:t})=>e&&`
  button {
    flex-grow: 1;
  }
  button:last-child:before {
    border-right: 2px solid ${t.borderDark};
  }
  `}
`,w2=k.div.attrs(()=>({"data-testid":"tab-row"}))`
  position: relative;
  display: flex;
  flex-wrap: no-wrap;
  text-align: left;
  left: 8px;
  width: calc(100% - 8px);

  &:not(:first-child):before {
    content: '';
    position: absolute;
    right: 0;
    left: 0;
    height: 100%;
    border-right: 2px solid ${({theme:e})=>e.borderDarkest};
    border-left: 2px solid ${({theme:e})=>e.borderLightest};
  }
`;function k2(e,t){const n=[];for(let r=t;r>0;r-=1)n.push(e.splice(0,Math.ceil(e.length/r)));return n}const M2=y.forwardRef(({value:e,onChange:t=Nn,children:n,rows:r=1,...o},i)=>{const l=y.useMemo(()=>{var a;const s=(a=u.Children.map(n,m=>{if(!u.isValidElement(m))return null;const g={selected:m.props.value===e,onClick:t};return u.cloneElement(m,g)}))!==null&&a!==void 0?a:[],h=k2(s,r).map((m,g)=>({key:g,tabs:m})),p=h.findIndex(m=>m.tabs.some(g=>g.props.selected));return h.push(h.splice(p,1)[0]),h},[n,t,r,e]);return u.createElement(x2,{...o,isMultiRow:r>1,role:"tablist",ref:i},l.map(a=>u.createElement(w2,{key:a.key},a.tabs)))});M2.displayName="Tabs";const b2=["blur","focus"],E2=["click","contextmenu","doubleclick","drag","dragend","dragenter","dragexit","dragleave","dragover","dragstart","drop","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup"];function qh(e){return"nativeEvent"in e&&b2.includes(e.type)}function eu(e){return"nativeEvent"in e&&E2.includes(e.type)}const S2={top:`top: -4px;
        left: 50%;
        transform: translate(-50%, -100%);`,bottom:`bottom: -4px;
           left: 50%;
           transform: translate(-50%, 100%);`,left:`left: -4px;
         top: 50%;
         transform: translate(-100%, -50%);`,right:`right: -4px;
          top: 50%;
          transform: translate(100%, -50%);`},_2=k.span`
  position: absolute;

  z-index: 1;
  display: ${e=>e.show?"block":"none"};
  padding: 4px;
  border: 2px solid ${({theme:e})=>e.borderDarkest};
  background: ${({theme:e})=>e.tooltip};
  box-shadow: ${p1};
  text-align: center;
  font-size: 1rem;
  ${e=>S2[e.position]}
`,A2=k.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`,$2=y.forwardRef(({className:e,children:t,disableFocusListener:n=!1,disableMouseListener:r=!1,enterDelay:o=1e3,leaveDelay:i=0,onBlur:l,onClose:a,onFocus:s,onMouseEnter:h,onMouseLeave:p,onOpen:m,style:g,text:x,position:w="top",...b},T)=>{const[f,c]=y.useState(!1),[d,v]=y.useState(),[E,S]=y.useState(),_=!n,I=!r,B=A=>{window.clearTimeout(d),window.clearTimeout(E);const P=window.setTimeout(()=>{c(!0),m==null||m(A)},o);v(P)},R=A=>{A.persist(),qh(A)?s==null||s(A):eu(A)&&(h==null||h(A)),B(A)},q=A=>{window.clearTimeout(d),window.clearTimeout(E);const P=window.setTimeout(()=>{c(!1),a==null||a(A)},i);S(P)},ee=A=>{A.persist(),qh(A)?l==null||l(A):eu(A)&&(p==null||p(A)),q(A)},me=_?ee:void 0,de=_?R:void 0,se=I?R:void 0,we=I?ee:void 0,ke=_?0:void 0;return u.createElement(A2,{"data-testid":"tooltip-wrapper",onBlur:me,onFocus:de,onMouseEnter:se,onMouseLeave:we,tabIndex:ke},u.createElement(_2,{className:e,"data-testid":"tooltip",position:w,ref:T,show:f,style:g,...b},x),t)});$2.displayName="Tooltip";const ds=k(w1)`
  white-space: nowrap;
`,yd=j`
  :focus {
    outline: none;
  }

  ${({$disabled:e})=>e?"cursor: default;":j`
          cursor: pointer;

          :focus {
            ${ds} {
              background: ${({theme:t})=>t.hoverBackground};
              color: ${({theme:t})=>t.materialTextInvert};
              outline: 2px dotted ${({theme:t})=>t.focusSecondary};
            }
          }
        `}
`,C2=k.ul`
  position: relative;
  isolation: isolate;

  ${({isRootLevel:e})=>e&&j`
      &:before {
        content: '';
        position: absolute;
        top: 20px;
        bottom: 0;
        left: 5.5px;
        width: 1px;
        border-left: 2px dashed ${({theme:t})=>t.borderDark};
      }
    `}

  ul {
    padding-left: 19.5px;
  }

  li {
    position: relative;

    &:before {
      content: '';
      position: absolute;
      top: 17.5px;
      left: 5.5px;
      width: 22px;
      border-top: 2px dashed ${({theme:e})=>e.borderDark};
      font-size: 12px;
    }
  }
`,T2=k.li`
  position: relative;
  padding-left: ${({hasItems:e})=>e?"0":"13px"};

  ${({isRootLevel:e})=>e?j`
          &:last-child {
            &:after {
              content: '';
              position: absolute;
              top: 19.5px;
              left: 1px;
              bottom: 0;
              width: 10px;
              background: ${({theme:t})=>t.material};
            }
          }
        `:j`
          &:last-child {
            &:after {
              content: '';
              position: absolute;
              z-index: 1;
              top: 19.5px;
              bottom: 0;
              left: 1.5px;
              width: 10px;
              background: ${({theme:t})=>t.material};
            }
          }
        `}

  & > details > ul {
    &:after {
      content: '';
      position: absolute;
      top: -18px;
      bottom: 0;
      left: 25px;
      border-left: 2px dashed ${({theme:e})=>e.borderDark};
    }
  }
`,I2=k.details`
  position: relative;
  z-index: 2;

  &[open] > summary:before {
    content: '-';
  }
`,P2=k.summary`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  color: ${({theme:e})=>e.materialText};
  user-select: none;
  padding-left: 18px;
  ${yd};

  &::-webkit-details-marker {
    display: none;
  }

  &:before {
    content: '+';
    position: absolute;
    left: 0;
    display: block;
    width: 8px;
    height: 9px;
    border: 2px solid #808080;
    padding-left: 1px;
    background-color: #fff;
    line-height: 8px;
    text-align: center;
  }
`,tu=k(x1)`
  position: relative;
  z-index: 1;
  background: none;
  border: 0;
  font-family: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  ${yd};
`,j2=k.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;function nu(e,t){return e.includes(t)?e.filter(n=>n!==t):[...e,t]}function ru(e){e.preventDefault()}function xd({className:e,disabled:t,expanded:n,innerRef:r,level:o,select:i,selected:l,style:a,tree:s=[]}){const h=o===0,p=y.useCallback(m=>{var g,x;const w=!!(m.items&&m.items.length>0),b=n.includes(m.id),T=(g=t||m.disabled)!==null&&g!==void 0?g:!1,f=T?ru:E=>i(E,m),c=T?ru:E=>i(E,m),d=l===m.id,v=u.createElement(j2,{"aria-hidden":!0},m.icon);return u.createElement(T2,{key:m.label,isRootLevel:h,role:"treeitem","aria-expanded":b,"aria-selected":d,hasItems:w},w?u.createElement(I2,{open:b},u.createElement(P2,{onClick:f,$disabled:T},u.createElement(tu,{$disabled:T},v,u.createElement(ds,null,m.label))),b&&u.createElement(xd,{className:e,disabled:T,expanded:n,level:o+1,select:i,selected:l,style:a,tree:(x=m.items)!==null&&x!==void 0?x:[]})):u.createElement(tu,{as:"button",$disabled:T,onClick:c},v,u.createElement(ds,null,m.label)))},[e,t,n,h,o,i,l,a]);return u.createElement(C2,{className:h?e:void 0,style:h?a:void 0,ref:h?r:void 0,role:h?"tree":"group",isRootLevel:h},s.map(p))}function O2({className:e,defaultExpanded:t=[],defaultSelected:n,disabled:r=!1,expanded:o,onNodeSelect:i,onNodeToggle:l,selected:a,style:s,tree:h=[]},p){const[m,g]=mn({defaultValue:t,onChange:l,onChangePropName:"onNodeToggle",value:o,valuePropName:"expanded"}),[x,w]=mn({defaultValue:n,onChange:i,onChangePropName:"onNodeSelect",value:a,valuePropName:"selected"}),b=y.useCallback((c,d)=>{if(l){const v=nu(m,d);l(c,v)}g(v=>nu(v,d))},[m,l,g]),T=y.useCallback((c,d)=>{w(d),i&&i(c,d)},[i,w]),f=y.useCallback((c,d)=>{c.preventDefault(),T(c,d.id),d.items&&d.items.length&&b(c,d.id)},[T,b]);return u.createElement(xd,{className:e,disabled:r,expanded:m,level:0,innerRef:p,select:f,selected:x,style:s,tree:h})}const L2=y.forwardRef(O2);L2.displayName="TreeView";const R2=y1,D2=Hi;var N2={name:"original",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#848584",borderDarkest:"#0a0a0a",borderLight:"#dfdfdf",borderLightest:"#fefefe",canvas:"#ffffff",canvasText:"#0a0a0a",canvasTextDisabled:"#848584",canvasTextDisabledShadow:"#fefefe",canvasTextInvert:"#fefefe",checkmark:"#0a0a0a",checkmarkDisabled:"#848584",desktopBackground:"#008080",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#060084",headerNotActiveBackground:"#7f787f",headerNotActiveText:"#c6c6c6",headerText:"#fefefe",hoverBackground:"#060084",material:"#c6c6c6",materialDark:"#9a9e9c",materialText:"#0a0a0a",materialTextDisabled:"#848584",materialTextDisabledShadow:"#fefefe",materialTextInvert:"#fefefe",progress:"#060084",tooltip:"#fefbcc"},z2=N2;const B2=cu(z2);var F2=["variant"];function W2(e,t){if(e==null)return{};var n=U2(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function U2(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Gi(){return Gi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Gi.apply(this,arguments)}var H2=function(t){return u.createElement("svg",Gi({xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",shapeRendering:"crispEdges",viewBox:"0 -0.5 32 32"},t),u.createElement("path",{stroke:"gray",d:"M9 4h4M7 5h2m4 0h2M5 6h2m8 0h7M4 7h1m12 0h2m3 0h2M4 8h1m14 0h2m3 0h2M4 9h1m3 0h2m11 0h2m3 0h1M4 10h1m5 0h2m13 0h2M4 11h1m7 0h2m7 0h2m1 0h3M4 12h1m9 0h2m3 0h4m1 0h3M4 13h1m11 0h1m2 0h4m1 0h3M4 14h1m14 0h4m1 0h3M4 15h1m14 0h4m1 0h3M4 16h1m14 0h4m1 0h3M4 17h1m14 0h4m1 0h3M4 18h1m14 0h4m1 0h3M4 19h2m13 0h4m1 0h3M4 20h1m1 0h2m11 0h4m1 0h2M8 21h2m9 0h4m1 0h1m-15 1h2m7 0h4m-11 1h2m5 0h4m-9 1h2m3 0h4m-7 1h2m1 0h4m-5 1h3"}),u.createElement("path",{stroke:"silver",d:"M9 5h4M8 6h7m-5 1h7m2 0h3M6 8h4m2 0h7m2 0h3M6 9h1m3 0h2m2 0h7m2 0h3M6 10h1m5 0h2m2 0h7m1 0h1M6 11h1m7 0h2m2 0h3M6 12h1m9 0h2M6 13h1m10 0h2M6 14h1m10 0h2M6 15h1m10 0h2M6 16h1m10 0h2M6 17h1m10 0h2M6 18h1m10 0h2M6 19h3m8 0h2M8 20h3m6 0h2m-9 1h3m4 0h2m-7 1h3m2 0h2m-5 1h5m-3 1h3m-1 1h1"}),u.createElement("path",{stroke:"#fff",d:"M7 6h1M5 7h5M5 8h1m4 0h2M5 9h1m6 0h2m-9 1h1m8 0h2M5 11h1m10 0h2M5 12h1m12 0h1M5 13h1m-1 1h1m-1 1h1m5 0h1m-7 1h1m-1 1h1m-1 1h1"}),u.createElement("path",{stroke:"#000",d:"M7 9h1m-1 1h1m15 0h1m3 0h1M7 11h1m15 0h1m3 0h1M7 12h1m15 0h1m3 0h1M7 13h1m15 0h1m3 0h1M7 14h1m15 0h1m3 0h1M7 15h1m15 0h1m3 0h1M7 16h1m15 0h1m3 0h1M7 17h1m15 0h1m3 0h1m-5 1h1m3 0h1m-5 1h1m3 0h1M5 20h1m17 0h1m2 0h1M6 21h2m15 0h1m1 0h1M8 22h2m13 0h2m-15 1h2m11 0h1m-12 1h2m9 0h1m-10 1h2m7 0h1m-8 1h2m3 0h2m-5 1h3"}),u.createElement("path",{stroke:"navy",d:"M8 10h2m0 1h2m0 1h2m0 1h2m0 1h1m-1 1h1m-1 1h1m-1 1h1M7 18h2m7 0h1m-8 1h2m5 0h1m-6 1h2m3 0h1m-4 1h2m1 0h1m-2 1h2"}),u.createElement("path",{stroke:"#00f",d:"M8 11h2m-2 1h4m-4 1h3m1 0h2m-6 1h1m1 0h1m1 0h2m1 0h1m-8 1h2m2 0h1m1 0h2m-8 1h1m1 0h1m2 0h3m-8 1h3m1 0h4m-7 1h2m1 0h1m1 0h2m-5 1h5m-3 1h3m-1 1h1"}),u.createElement("path",{stroke:"#0ff",d:"M11 13h1m-3 1h1m1 0h1m2 0h1m-5 1h1m2 0h1m-5 1h1m2 0h1m-2 1h1m-1 1h1m1 0h1"}),u.createElement("path",{stroke:"#ff0",d:"M11 16h1"}))},Q2=function(t){return u.createElement("svg",Gi({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",shapeRendering:"crispEdges",viewBox:"0 -0.5 16 16"},t),u.createElement("path",{stroke:"gray",d:"M3 0h3M1 1h2m3 0h5M0 2h1m7 0h2m1 0h2M0 3h1m1 0h2m6 0h2m1 0h2M0 4h1m3 0h2m6 0h1m1 0h1M0 5h1m5 0h2m3 0h1m1 0h2M0 6h1m9 0h2m1 0h2M0 7h1m9 0h2m1 0h2M0 8h1m9 0h2m1 0h2M0 9h1m9 0h2m1 0h2M0 10h1m9 0h2m1 0h1M1 11h2m7 0h2m-9 1h2m5 0h2m-7 1h2m3 0h2m-5 1h3"}),u.createElement("path",{stroke:"silver",d:"M3 1h3M1 2h1m2 0h4m2 0h1M1 3h1m4 0h4m2 0h1M1 4h1m6 0h4m1 0h1M1 5h1m8 0h1M1 6h1m6 0h2M1 7h1m6 0h2M1 8h1m6 0h2M1 9h1m6 0h2m-9 1h2m5 0h2m-7 1h2m3 0h2m-5 1h2m1 0h2m-3 1h3"}),u.createElement("path",{stroke:"#fff",d:"M2 2h2m0 1h2m0 1h2m0 1h2"}),u.createElement("path",{stroke:"#000",d:"M2 4h1m12 0h1M2 5h1m9 0h1m2 0h1M2 6h1m9 0h1m2 0h1M2 7h1m9 0h1m2 0h1M2 8h1m9 0h1m2 0h1M2 9h1m9 0h1m2 0h1m-4 1h1m1 0h1M0 11h1m11 0h2M1 12h2m9 0h1M3 13h2m7 0h1m-8 1h2m3 0h2m-5 1h3"}),u.createElement("path",{stroke:"navy",d:"M3 4h1m0 1h2m1 1h1M7 7h1M7 8h1M7 9h1m-5 1h2m2 0h1m-3 1h3m-1 1h1"}),u.createElement("path",{stroke:"#00f",d:"M3 5h1M3 6h1m1 0h2M3 7h1m1 0h2M4 8h1M3 9h1m1 0h2m-2 1h2"}),u.createElement("path",{stroke:"#0ff",d:"M4 6h1M4 7h1M3 8h1m1 0h2M4 9h1"}))},V2={"32x32_4":H2,"16x16_4":Q2},G2=function(t){var n=t.variant,r=n===void 0?"32x32_4":n,o=W2(t,F2),i=V2[r];return u.createElement(i,o)},K2=["variant"];function Y2(e,t){if(e==null)return{};var n=X2(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function X2(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Ki(){return Ki=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ki.apply(this,arguments)}var Z2=function(t){return u.createElement("svg",Ki({xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",shapeRendering:"crispEdges",viewBox:"0 -0.5 32 32"},t),u.createElement("path",{stroke:"gray",d:"M9 0h18M8 1h1m17 0h1M7 2h1m17 0h2M6 3h1m18 0h2M6 4h1m2 0h14m2 0h2M6 5h1m15 0h1m2 0h2M6 6h1m15 0h1m2 0h2M6 7h1m15 0h1m2 0h2M6 8h1m5 0h1m9 0h1m2 0h2M6 9h1m5 0h1m9 0h1m2 0h2M6 10h1m5 0h1m1 0h1m7 0h1m2 0h2M6 11h1m7 0h1m7 0h1m2 0h2M6 12h1m7 0h1m7 0h1m2 0h2M6 13h1m15 0h1m2 0h2M6 14h1m2 0h14m2 0h2M6 15h1m18 0h2M6 16h1m18 0h2m1 0h2M6 17h20m1 0h2m-3 1h2m1 0h1M4 19h23m1 0h2M3 20h1m23 0h3M3 21h1m23 0h3M3 22h1m11 0h10m2 0h3M3 23h1m23 0h3M3 24h1m17 0h1m5 0h3M3 25h1m23 0h3M3 26h3m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m3 0h2M2 27h1m1 0h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h2M1 28h1m1 0h1m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h4M0 29h1m24 0h1M0 30h1m23 0h1"}),u.createElement("path",{stroke:"silver",d:"M9 1h16M8 3h17M8 4h1m15 0h1M8 5h1m15 0h1M8 6h1m15 0h1M8 7h1m15 0h1M8 8h1m15 0h1M8 9h1m15 0h1M8 10h1m15 0h1M8 11h1m15 0h1M8 12h1m15 0h1M8 13h1m15 0h1M8 14h1m15 0h1M8 15h1m15 0h1M8 16h17m4 1h1m-2 1h1m-2 1h1M5 21h22M5 22h10m10 0h2M5 23h2m2 0h6m10 0h2M5 24h2m2 0h12m1 0h5M5 25h22m-3 4h1M1 30h23"}),u.createElement("path",{stroke:"#fff",d:"M25 1h1M8 2h17M7 3h1M7 4h1m15 0h1M7 5h1m15 0h1M7 6h1m15 0h1M7 7h1m15 0h1M7 8h1m5 0h4m6 0h1M7 9h1m5 0h1m9 0h1M7 10h1m5 0h1m1 0h4m4 0h1M7 11h1m7 0h4m4 0h1M7 12h1m7 0h4m4 0h1M7 13h1m15 0h1M7 14h1m15 0h1M7 15h1m1 0h15M7 16h1m-4 4h23M4 21h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m2 1h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1M3 27h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1M2 28h1m-2 1h23"}),u.createElement("path",{stroke:"#000",d:"M27 1h1m-1 1h1m-1 1h1m-1 1h1M9 5h13m5 0h1M9 6h1m17 0h1M9 7h1m2 0h6m9 0h1M9 8h1m7 0h1m9 0h1M9 9h1m9 0h1m7 0h1M9 10h1m9 0h1m7 0h1M9 11h1m2 0h2m5 0h1m7 0h1M9 12h1m9 0h1m7 0h1M9 13h1m4 0h6m7 0h1m-1 1h1m-1 1h1m-1 1h1m-2 1h1m3 0h1M6 18h20m4 0h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-16 1h10m5 0h1m-1 1h1m-1 1h1M6 26h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m1 0h1m2 0h1M5 27h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m3 0h2M4 28h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m4 0h1m-2 1h1m-2 1h1M1 31h24"}),u.createElement("path",{stroke:"teal",d:"M10 6h12M10 7h1m7 0h4M10 8h1m7 0h4M10 9h2m8 0h2m-12 1h2m8 0h2m-12 1h2m8 0h2m-12 1h4m6 0h2m-12 1h4m6 0h2"}),u.createElement("path",{stroke:"#0ff",d:"M11 7h1m-1 1h1"}),u.createElement("path",{stroke:"navy",d:"M14 9h1"}),u.createElement("path",{stroke:"#00f",d:"M15 9h4"}),u.createElement("path",{stroke:"#0f0",d:"M7 23h2"}),u.createElement("path",{stroke:"green",d:"M7 24h2"}))},J2=function(t){return u.createElement("svg",Ki({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",shapeRendering:"crispEdges",viewBox:"0 -0.5 16 16"},t),u.createElement("path",{stroke:"gray",d:"M6 1h8M5 2h1m7 0h1M4 3h1m7 0h2M4 4h1m7 0h2M4 5h1m5 0h1m1 0h2M4 6h1m5 0h1m1 0h2M4 7h1m2 0h4m1 0h2M4 8h1m7 0h1m1 0h2M4 9h1m8 0h1M3 10h1m8 0h1m1 0h1M3 11h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h2M2 12h1m-2 1h1"}),u.createElement("path",{stroke:"silver",d:"M6 2h7m-2 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M6 8h6m2 1h1M4 10h8m1 0h1M4 12h1m1 0h1m1 0h1m1 0h1m1 0h1m-1 1h1"}),u.createElement("path",{stroke:"#000",d:"M14 2h1m-1 1h1M6 4h5m3 0h1M6 5h1m7 0h1M6 6h1m7 0h1M6 7h1m7 0h1m-2 1h1M5 9h8m2 0h1m-1 1h1M4 11h1m1 0h1m1 0h1m1 0h1m1 0h1m2 0h1M3 12h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h2m-2 1h1M1 14h12"}),u.createElement("path",{stroke:"#fff",d:"M5 3h6M5 4h1M5 5h1M5 6h1M5 7h1M5 8h1m-4 5h10"}),u.createElement("path",{stroke:"#0ff",d:"M7 5h1"}),u.createElement("path",{stroke:"teal",d:"M8 5h2M7 6h3"}))},q2={"32x32_4":Z2,"16x16_4":J2},ey=function(t){var n=t.variant,r=n===void 0?"32x32_4":n,o=Y2(t,K2),i=q2[r];return u.createElement(i,o)},ty=["variant"];function ny(e,t){if(e==null)return{};var n=ry(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function ry(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Yi(){return Yi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Yi.apply(this,arguments)}var oy=function(t){return u.createElement("svg",Yi({xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",shapeRendering:"crispEdges",viewBox:"0 -0.5 32 32"},t),u.createElement("path",{stroke:"#000",d:"M4 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h1m1 1h1M4 2h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m3 0h1m1 0h1M4 3h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m3 0h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1M5 7h6m7 0h1m1 0h3m3 0h1m1 0h1m-3 1h1m1 0h1M5 9h6m15 0h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1M5 13h6m15 0h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1M5 16h18m3 0h1m1 0h1m-3 1h1m1 0h1M5 18h18m3 0h1m1 0h1m-3 1h1m1 0h1M5 20h18m3 0h1m1 0h1m-3 1h1m1 0h1M5 22h18m3 0h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1M5 25h6m15 0h1m1 0h1m-3 1h1m1 0h1M5 27h6m15 0h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-4 1h1m1 0h1M4 31h23"}),u.createElement("path",{stroke:"gray",d:"M3 1h1m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h1M2 2h1m22 0h1M2 3h1m22 0h1M2 4h1M2 5h1M2 6h1M2 7h1M2 8h1M2 9h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m0 1h1"}),u.createElement("path",{stroke:"#fff",d:"M4 1h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1M3 2h1m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2M3 3h1m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2M3 4h22M3 5h22M3 6h22M3 7h2m6 0h7m1 0h1m3 0h2M3 8h22M3 9h2m6 0h14M3 10h22M3 11h22M3 12h22M3 13h2m6 0h14M3 14h22M3 15h22M3 16h2m18 0h2M3 17h22M3 18h2m18 0h2M3 19h22M3 20h2m18 0h2M3 21h22M3 22h2m18 0h2M3 23h22M3 24h22M3 25h2m6 0h14M3 26h22M3 27h2m6 0h14M3 28h22M3 29h22"}),u.createElement("path",{stroke:"silver",d:"M27 2h1m-1 1h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1M4 30h21m1 0h1"}))},iy=function(t){return u.createElement("svg",Yi({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",shapeRendering:"crispEdges",viewBox:"0 -0.5 16 16"},t),u.createElement("path",{stroke:"#000",d:"M2 0h1m1 0h1m1 0h1m1 0h1m1 0h1M1 1h1m9 0h1M2 2h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m-1 1h1m-1 1h1M3 5h3m1 0h2m3 0h1m-1 1h1M3 7h6m3 0h1m-1 1h1M3 9h6m3 0h1m-1 1h1M3 11h6m3 0h1m-1 1h1m-1 1h1m-1 1h1M1 15h11"}),u.createElement("path",{stroke:"#fff",d:"M2 1h1m1 0h1m1 0h1m1 0h1m1 0h1M1 2h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M1 3h10M1 4h10M1 5h2m3 0h1m2 0h2M1 6h10M1 7h2m6 0h2M1 8h10M1 9h2m6 0h2M1 10h10M1 11h2m6 0h2M1 12h10M1 13h10"}),u.createElement("path",{stroke:"gray",d:"M3 1h1m1 0h1m1 0h1m1 0h1M0 2h1M0 3h1M0 4h1M0 5h1M0 6h1M0 7h1M0 8h1M0 9h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1"}),u.createElement("path",{stroke:"silver",d:"M11 3h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M1 14h11"}))},ly={"32x32_4":oy,"16x16_4":iy},wd=function(t){var n=t.variant,r=n===void 0?"32x32_4":n,o=ny(t,ty),i=ly[r];return u.createElement(i,o)},ay=["variant"];function sy(e,t){if(e==null)return{};var n=hy(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function hy(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Xi(){return Xi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xi.apply(this,arguments)}var uy=function(t){return u.createElement("svg",Xi({xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",shapeRendering:"crispEdges",viewBox:"0 -0.5 32 32"},t),u.createElement("path",{stroke:"gray",d:"M2 5h27M2 6h1m25 0h1M2 7h1m25 0h1M2 8h1m25 0h1M2 9h1m25 0h1M2 10h1m25 0h1M2 11h1m25 0h1M2 12h1m25 0h1M2 13h1m25 0h1M2 14h1m25 0h1M2 15h1m25 0h1M2 16h1m25 0h1M2 17h1m25 0h1M2 18h1m25 0h1M2 19h1m25 0h1M2 20h1m25 0h1M2 21h1m25 0h1M2 22h1m25 0h1M2 23h1m25 0h1M2 24h27"}),u.createElement("path",{stroke:"#000",d:"M3 6h1m23 0h1m1 0h1M4 7h1m21 0h1m2 0h1M5 8h1m19 0h1m3 0h1M6 9h1m17 0h1m4 0h1M7 10h1m15 0h1m5 0h1M8 11h1m13 0h1m6 0h1M9 12h1m11 0h1m7 0h1m-20 1h1m9 0h1m8 0h1m-19 1h1m7 0h1m9 0h1m-20 1h1m1 0h1m5 0h1m1 0h1m8 0h1M9 16h1m3 0h1m3 0h1m3 0h1m7 0h1M8 17h1m5 0h1m1 0h1m5 0h1m6 0h1M7 18h1m7 0h1m7 0h1m5 0h1M6 19h1m17 0h1m4 0h1M5 20h1m19 0h1m3 0h1M4 21h1m21 0h1m2 0h1M3 22h1m23 0h1m1 0h1m-1 1h1m-1 1h1M4 25h26"}),u.createElement("path",{stroke:"#ff0",d:"M4 6h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 7h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M4 8h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 9h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M4 10h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 11h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M4 12h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 13h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M4 14h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 15h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M4 16h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 17h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M4 18h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 19h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M4 20h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 21h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M4 22h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 23h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1"}),u.createElement("path",{stroke:"silver",d:"M6 7h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M7 8h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m3 0h1M4 9h1m3 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m3 0h1M5 10h1m3 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m3 0h1m1 0h1M4 11h1m1 0h1m3 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m3 0h1m1 0h1M5 12h1m1 0h1m3 0h1m1 0h1m1 0h1m1 0h1m1 0h1m3 0h1m1 0h1m1 0h1M4 13h1m1 0h1m1 0h1m3 0h1m1 0h1m1 0h1m1 0h1m3 0h1m1 0h1m1 0h1M5 14h1m1 0h1m1 0h1m3 0h1m1 0h1m1 0h1m3 0h1m1 0h1m1 0h1m1 0h1M4 15h1m1 0h1m1 0h1m5 0h1m1 0h1m5 0h1m1 0h1m1 0h1M5 16h1m1 0h1m3 0h1m3 0h1m3 0h1m3 0h1m1 0h1m1 0h1M4 17h1m1 0h1m3 0h1m1 0h1m5 0h1m1 0h1m3 0h1m1 0h1M5 18h1m3 0h1m1 0h1m1 0h1m3 0h1m1 0h1m1 0h1m3 0h1m1 0h1M4 19h1m3 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m3 0h1M7 20h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m3 0h1M6 21h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M5 22h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M4 23h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1"}))},cy=function(t){return u.createElement("svg",Xi({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",shapeRendering:"crispEdges",viewBox:"0 -0.5 16 16"},t),u.createElement("path",{stroke:"gray",d:"M1 3h13M1 4h1M1 5h1M1 6h1M1 7h1M1 8h1M1 9h1m-1 1h1m-1 1h1"}),u.createElement("path",{stroke:"#000",d:"M14 3h1M2 4h1m10 0h2M3 5h1m8 0h1m1 0h1M4 6h1m6 0h1m2 0h1M5 7h1m4 0h1m3 0h1M5 8h2m2 0h2m3 0h1M4 9h1m2 0h2m2 0h1m2 0h1M3 10h1m8 0h1m1 0h1M2 11h1m10 0h2M1 12h14"}),u.createElement("path",{stroke:"silver",d:"M3 4h1m1 0h1m1 0h1m1 0h1m1 0h1M6 5h1m1 0h1m1 0h1M2 6h1m2 0h1m1 0h1m1 0h1m3 0h1M3 7h1m2 0h1m1 0h1m3 0h1M2 8h1m1 0h1m2 0h1m3 0h1m1 0h1M3 9h1m2 0h1m3 0h1m1 0h1m-8 1h1m1 0h1m1 0h1m1 0h1m1 0h1M4 11h1m1 0h1m1 0h1m1 0h1m1 0h1"}),u.createElement("path",{stroke:"#ff0",d:"M4 4h1m1 0h1m1 0h1m1 0h1m1 0h1M2 5h1m1 0h2m1 0h1m1 0h1m1 0h1m1 0h1M3 6h1m2 0h1m1 0h1m1 0h1m1 0h1M2 7h1m1 0h1m2 0h1m1 0h1m1 0h1m1 0h1M3 8h1m4 0h1m3 0h1M2 9h1m2 0h1m3 0h1m3 0h1M2 10h1m1 0h1m1 0h1m1 0h1m1 0h1m-8 1h1m1 0h1m1 0h1m1 0h1m1 0h1"}))},my={"32x32_4":uy,"16x16_4":cy},kd=function(t){var n=t.variant,r=n===void 0?"32x32_4":n,o=sy(t,ay),i=my[r];return u.createElement(i,o)},dy=["variant"];function fy(e,t){if(e==null)return{};var n=py(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function py(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function fs(){return fs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fs.apply(this,arguments)}var gy=function(t){return u.createElement("svg",fs({xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",shapeRendering:"crispEdges",viewBox:"0 -0.5 32 32"},t),u.createElement("path",{stroke:"#000",d:"M4 4h18M4 5h1m16 0h1M4 6h1m16 0h1M4 7h18M4 8h1m16 0h1M4 9h1m16 0h1M4 10h1m16 0h1M4 11h1m2 0h1m1 0h1m1 0h18M4 12h1m6 0h1m16 0h1M4 13h1m2 0h1m1 0h1m1 0h1m16 0h1M4 14h1m6 0h18M4 15h1m2 0h1m1 0h1m1 0h1m16 0h1M4 16h1m6 0h1m16 0h1M4 17h1m6 0h1m16 0h1M4 18h1m6 0h1m2 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h2m2 0h1M4 19h1m6 0h1m16 0h1M4 20h1m6 0h1m2 0h1m1 0h2m1 0h1m1 0h1m1 0h2m3 0h1M4 21h8m16 0h1m-18 1h1m2 0h1m1 0h1m1 0h1m1 0h2m1 0h1m1 0h1m2 0h1m-18 1h1m16 0h1m-18 1h1m16 0h1m-18 1h1m16 0h1m-18 1h1m2 0h1m1 0h1m1 0h1m9 0h1m-18 1h1m16 0h1m-18 1h18"}),u.createElement("path",{stroke:"#00f",d:"M5 5h16M5 6h16m-9 6h16m-16 1h16"}),u.createElement("path",{stroke:"gray",d:"M22 6h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m6 3h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M6 22h5m18 0h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-17 1h17"}),u.createElement("path",{stroke:"#fff",d:"M5 8h16M5 9h16M5 10h16M5 11h2m1 0h1m1 0h1m-6 1h6m-6 1h2m1 0h1m1 0h1m-6 1h6m-6 1h2m1 0h1m1 0h1m-6 1h6m-6 1h6m-6 1h6m-6 1h6m-6 1h6"}),u.createElement("path",{stroke:"silver",d:"M12 15h16m-16 1h16m-16 1h16m-16 1h2m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m2 0h2m-16 1h16m-16 1h2m1 0h1m2 0h1m1 0h1m1 0h1m2 0h3m-16 1h16m-16 1h2m1 0h1m1 0h1m1 0h1m2 0h1m1 0h1m1 0h2m-16 1h16m-16 1h16m-16 1h16m-16 1h2m1 0h1m1 0h1m1 0h9m-16 1h16"}))},vy={"32x32_4":gy},yy=function(t){var n=t.variant,r=n===void 0?"32x32_4":n,o=fy(t,dy),i=vy[r];return u.createElement(i,o)},xy=["variant"];function wy(e,t){if(e==null)return{};var n=ky(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function ky(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Zi(){return Zi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Zi.apply(this,arguments)}var My=function(t){return u.createElement("svg",Zi({xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",shapeRendering:"crispEdges",viewBox:"0 -0.5 32 32"},t),u.createElement("path",{stroke:"#fff",d:"M2 2h1m23 0h1M2 3h1m23 0h2M2 4h2m21 0h4M1 5h3m21 0h4M1 6h4m19 0h6M1 7h4m19 0h6M0 8h6m17 0h8M0 9h6m17 0h8M0 10h6m16 0h9M0 11h5m1 0h2m16 0h8M0 12h4m1 0h4m13 0h2m1 0h7M0 13h3m1 0h4m15 0h2m1 0h6M1 14h1m1 0h4m1 0h2m11 0h2m1 0h2m1 0h5M3 15h3m1 0h7m1 0h9m1 0h2m1 0h3M3 16h2m1 0h7m1 0h11m1 0h2m1 0h1M4 17h1m1 0h6m1 0h3m2 0h8m1 0h1M6 18h7m3 0h2m1 0h6M7 19h12m1 0h4M8 20h1m2 0h1m2 0h6M9 21h2m1 0h2m2 0h8M8 22h2m1 0h2m1 0h2m1 0h2m-9 1h2m1 0h2m1 0h1m1 0h4m-10 1h2m1 0h2m-3 1h2m1 0h2"}),u.createElement("path",{stroke:"#000",d:"M3 2h1m21 0h1M3 3h1m21 0h1M4 4h1m19 0h1M4 5h1m19 0h1M5 6h1m17 0h1M5 7h1m17 0h1M6 8h1m15 0h1M6 9h1m15 0h1M6 10h2m13 0h1M5 11h1m2 0h1m12 0h3M4 12h1m4 0h1m11 0h1m2 0h1M3 13h1m4 0h2m11 0h2m2 0h1M0 14h1m1 0h1m4 0h1m2 0h11m2 0h1m2 0h1M1 15h2m3 0h1m7 0h1m9 0h1m2 0h1m3 0h1M2 16h1m2 0h1m7 0h1m11 0h1m2 0h1m1 0h1M3 17h1m1 0h1m6 0h1m3 0h2m8 0h1m1 0h2M4 18h2m7 0h3m2 0h1m6 0h3M6 19h1m12 0h1m4 0h1M7 20h1m1 0h2m1 0h2m6 0h5M7 21h2m2 0h1m2 0h2m8 0h1M7 22h1m2 0h1m2 0h1m2 0h1m2 0h5M8 23h2m2 0h1m2 0h1m1 0h1m4 0h1m-13 1h2m2 0h1m2 0h5m-10 1h2m2 0h1m2 0h1M7 26h1m6 0h5m5 0h1M4 27h1m3 0h2m12 0h2m3 0h1M5 28h1m20 0h1M6 29h3m14 0h3"}))},by=function(t){return u.createElement("svg",Zi({xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",shapeRendering:"crispEdges",viewBox:"0 -0.5 32 32"},t),u.createElement("path",{stroke:"teal",d:"M2 2h1M2 3h1M2 4h2M1 5h3M1 6h4M1 7h4M0 8h6M0 9h6m-6 1h6m-6 1h5m-5 1h4m2 0h3m-9 1h3m2 0h3m-7 1h1m2 0h3m-3 1h2m-3 1h2m-1 1h1"}),u.createElement("path",{stroke:"#000",d:"M3 2h1m21 0h1M3 3h1m21 0h1M4 4h1m19 0h1M4 5h1m19 0h1M5 6h1m17 0h1M5 7h1m17 0h1M6 8h1m15 0h1M6 9h1m15 0h1M6 10h2m13 0h1M5 11h1m2 0h1m13 0h2M4 12h1m4 0h1m11 0h1m2 0h1M3 13h1m4 0h2m11 0h2m2 0h1M0 14h1m1 0h1m4 0h1m2 0h11m2 0h1m2 0h1M1 15h2m3 0h1m7 0h1m9 0h1m2 0h1m3 0h1M2 16h1m2 0h1m7 0h1m11 0h1m2 0h1m1 0h1M3 17h1m1 0h1m6 0h1m3 0h2m8 0h1m1 0h2M4 18h2m7 0h3m2 0h1m6 0h3M6 19h1m12 0h1m4 0h1M7 20h1m1 0h2m1 0h2m6 0h5M7 21h2m2 0h1m2 0h2m8 0h1M7 22h1m2 0h1m2 0h1m2 0h1m2 0h5M8 23h2m2 0h1m2 0h1m1 0h1m4 0h1m-13 1h2m2 0h1m2 0h5m-10 1h2m2 0h1m2 0h1m-6 1h5"}),u.createElement("path",{stroke:"silver",d:"M26 2h1m0 1h1m-2 1h1m1 0h1m-4 1h1m1 0h1m-4 1h1m1 0h1m1 0h1m-4 1h1m1 0h1m1 0h1m-6 1h1m1 0h1m1 0h3m-8 1h1m1 0h1m1 0h3m-6 1h1m1 0h3m1 0h1m-6 1h3m1 0h1m1 0h1m-7 1h2m1 0h1m1 0h1m-4 1h1m1 0h1M8 14h2m18 0h1M7 15h2m-3 1h2m18 0h2M6 17h1m8 0h1m2 0h1m5 0h1M6 18h1m5 0h1m3 0h2m1 0h1m3 0h1m-6 1h1m1 0h4m-13 1h1m2 0h1m4 0h1m-8 1h1m3 0h1m3 0h2m-11 1h1m2 0h1m2 0h1m-8 1h1m2 0h1m2 0h1m1 0h2m-8 1h1m2 0h1m-2 1h1"}),u.createElement("path",{stroke:"#fff",d:"M26 3h1m-2 1h1m1 0h1m-2 1h1m1 0h1m-4 1h1m1 0h1m1 0h1m-6 1h1m1 0h1m1 0h1m-6 1h1m1 0h1m1 0h1m-4 1h1m1 0h1m-4 1h1m1 0h1m-2 1h1m-3 3h1M9 15h5m1 0h9M8 16h5m1 0h11M7 17h5m1 0h2m4 0h5M7 18h5m8 0h3M7 19h11M8 20h1m6 0h4M9 21h2m2 0h1m3 0h3M8 22h2m2 0h1m2 0h1m2 0h1m-8 1h1m2 0h1m-2 1h1m2 0h1m-2 1h1"}),u.createElement("path",{stroke:"gray",d:"M30 9h1m-9 1h1m6 0h1m-9 1h1m6 0h1m1 0h1m-4 1h1m1 0h1m1 0h1m-6 1h1m1 0h1m1 0h2m-11 1h1m5 0h1m1 0h3m-4 1h3m-2 1h1m-5 1h1m1 0h1m-4 1h1m-3 3h2m-4 2h2m-5 2h2M7 26h1m16 0h1M4 27h1m3 0h2m12 0h2m3 0h1M5 28h1m20 0h1M6 29h3m14 0h3"}),u.createElement("path",{stroke:"#0ff",d:"M6 11h2m-3 1h1m-2 1h1m-2 1h1m-1 1h1"}),u.createElement("path",{stroke:"#ff0",d:"M22 12h2m-1 1h2m-1 1h2m-1 1h2"}))},Ey={"32x32_1":My,"32x32_4":by},Sy=function(t){var n=t.variant,r=n===void 0?"32x32_1":n,o=wy(t,xy),i=Ey[r];return u.createElement(i,o)},_y=["variant"];function Ay(e,t){if(e==null)return{};var n=$y(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function $y(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Ji(){return Ji=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ji.apply(this,arguments)}var Cy=function(t){return u.createElement("svg",Ji({xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",shapeRendering:"crispEdges",viewBox:"0 -0.5 32 32"},t),u.createElement("path",{stroke:"purple",d:"M23 0h2m-3 1h2m1 0h1m-2 1h1m1 0h1m-2 1h1m1 0h1m-2 1h1m1 0h1m-2 1h1m1 0h1m-2 1h1m1 0h1m-15 8h2m0 1h2m-5 1h2m3 0h2m-5 1h2m0 1h3m-2 1h2m-2 1h2m-2 1h2m-2 1h2m-2 1h2m-2 1h2m-2 1h2m-2 1h2m-2 1h2m-3 1h1"}),u.createElement("path",{stroke:"gray",d:"M7 1h3M6 2h1m3 0h2M6 3h1m5 0h2M6 4h1m7 0h2m15 15h1"}),u.createElement("path",{stroke:"#fff",d:"M24 1h1M7 2h1m17 0h1M9 3h1m16 0h1M11 4h1m15 0h1M13 5h1m14 0h1m-9 5h1M7 11h1m13 0h1M9 12h1m12 0h1m-12 1h1m11 0h1"}),u.createElement("path",{stroke:"#ff0",d:"M8 2h2m0 1h2M7 4h2m3 0h2M8 5h3m3 0h1m-5 1h3m-2 1h3m-3 1h3m-3 1h3m-3 1h3m-2 1h2"}),u.createElement("path",{stroke:"#000",d:"M22 2h1m0 1h1m0 1h1m-9 1h1m8 0h1M16 6h1m9 0h1M10 7h1m5 0h1m10 0h1m1 0h1M10 8h1m5 0h1m11 0h1M10 9h1m5 0h1m-7 1h1m5 0h1m-1 1h1m1 0h1m-3 1h1m2 0h1m-6 1h1m1 0h1m3 0h1m-7 1h1m6 0h1m-8 1h1m7 0h1m1 0h1m-11 1h1m8 0h1m-10 1h1m7 0h1m-9 1h1m7 0h1m-9 1h1m7 0h1m-1 1h1m8 0h1m-14 1h1m3 0h1m3 0h5m-13 1h1m3 0h1m-5 1h1m3 0h1M0 24h2m16 0h1m3 0h1M2 25h2m14 0h1m3 0h1M4 26h2m12 0h1m3 0h1M6 27h2m10 0h1m3 0h1M8 28h2m8 0h1m1 0h2m-12 1h2m6 0h2m-8 1h2m2 0h2m-4 1h2"}),u.createElement("path",{stroke:"#f0f",d:"M23 2h1m0 1h1M1 4h1m23 0h1M3 5h1m22 0h1M5 6h1m21 0h1M7 7h1m7 8h3m-1 1h3m-5 1h2m2 0h3m-7 1h4m-3 1h4m-2 1h2m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1"}),u.createElement("path",{stroke:"maroon",d:"M1 3h3M0 4h1m3 0h2M0 5h3m3 0h2M0 6h1m2 0h2m3 0h2M0 7h1m4 0h2m2 0h1M0 8h1m6 0h3M0 9h1m7 0h2M0 10h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m15 4h2m-3 1h3m-3 1h3m-3 1h1"}),u.createElement("path",{stroke:"olive",d:"M7 3h2m0 1h2m0 1h2m2 0h1m-3 1h3m-2 1h2m-2 1h2m-2 1h2m-2 1h2m-2 1h2m-2 1h2m-1 1h1m-1 1h1"}),u.createElement("path",{stroke:"silver",d:"M22 3h1m0 1h1m0 1h1m0 1h1m3 0h1m-4 1h1m1 0h1m1 0h1m-4 1h1m1 0h1m-9 1h1m6 0h1m-7 1h1m0 1h1m0 1h1m0 1h1m-2 1h1m1 0h1m-4 1h1m1 0h1m-2 1h1"}),u.createElement("path",{stroke:"red",d:"M2 4h2m0 1h2M1 6h2m3 0h2M1 7h4m3 0h1M1 8h6M1 9h7m-7 1h6m-6 1h5m-5 1h5m-5 1h5m-5 1h5m-5 1h5m-5 1h5m-5 1h5m-5 1h5m-5 1h5m-5 1h5m-5 1h5m-5 1h5m-5 1h5m-4 1h6m-4 1h6m-4 1h6m-4 1h6m-4 1h5m-3 1h3m-1 1h1"}),u.createElement("path",{stroke:"green",d:"M19 9h2M7 10h3m8 0h2m1 0h1M6 11h1m3 0h2m8 0h1m1 0h1M6 12h3m3 0h2m7 0h1m1 0h1M6 13h1m2 0h2m11 0h1m1 0h1M6 14h1m4 0h3m9 0h1m1 0h1M6 15h1m5 0h2m-8 1h1m5 0h2m-2 1h2m-2 1h2m-2 1h2"}),u.createElement("path",{stroke:"#0f0",d:"M8 11h2m9 0h1m-10 1h2m8 0h1M7 13h2m3 0h2m7 0h1M7 14h4m11 0h1M7 15h5m-5 1h5m-5 1h5m-3 1h3m-1 1h1"}),u.createElement("path",{stroke:"navy",d:"M6 17h1m-1 1h1m-1 1h1m-1 1h1m5 0h1m-7 1h1m-1 1h1m-1 1h2m0 1h2m0 1h2"}),u.createElement("path",{stroke:"#00f",d:"M7 18h2m-2 1h4m-4 1h5m-5 1h5m-5 1h5m-4 1h4m-2 1h2"}),u.createElement("path",{stroke:"teal",d:"M26 18h6m-17 1h1m9 0h6m-18 1h1m2 0h2m7 0h1m-14 1h3m10 0h1m-14 1h1m2 0h3m-6 1h1m3 0h2m-6 1h1m3 0h2m-6 1h1m3 0h2m-6 1h2m2 0h2m-4 1h2"}),u.createElement("path",{stroke:"#0ff",d:"M14 20h2m10 0h5m-16 1h3m-5 1h2m-2 1h3m-3 1h3m-3 1h3m-2 1h2"}))},Ty=function(t){return u.createElement("svg",Ji({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",shapeRendering:"crispEdges",viewBox:"0 -0.5 16 16"},t),u.createElement("path",{stroke:"olive",d:"M3 0h2M3 1h1m1 0h2M4 2h2m1 0h2M6 3h2M7 4h1M7 5h1M7 6h1"}),u.createElement("path",{stroke:"purple",d:"M11 0h1m0 1h1m0 1h1m0 1h1M9 7h2M8 8h1m2 0h1M9 9h2m-1 1h1m-1 1h1m-1 1h1m-2 1h2"}),u.createElement("path",{stroke:"maroon",d:"M0 1h2M0 2h1m1 0h2M0 3h3m1 0h1M0 4h1m2 0h1M0 5h1M0 6h1M0 7h1M0 8h1M0 9h1m-1 1h1m-1 1h1m7 2h1m-2 1h2"}),u.createElement("path",{stroke:"#fff",d:"M4 1h1m1 1h1m0 8h1"}),u.createElement("path",{stroke:"silver",d:"M10 1h1m0 1h1m0 1h1m0 1h1m-4 1h1m0 1h1m0 1h1"}),u.createElement("path",{stroke:"#f0f",d:"M11 1h1M1 2h1m10 0h1M3 3h1m9 0h1M8 7h1m0 1h2m-2 2h1m-1 1h1m-1 1h1"}),u.createElement("path",{stroke:"#ff0",d:"M5 3h1M5 4h2M5 5h2"}),u.createElement("path",{stroke:"#000",d:"M8 3h1M4 4h1m3 0h1M8 5h1M8 6h1M7 7h1M7 8h1m3 1h1m-1 1h1m-1 1h1M0 12h2m9 0h1M2 13h2m7 0h1m-8 1h2m3 0h2m-5 1h3"}),u.createElement("path",{stroke:"red",d:"M1 4h2M1 5h2M1 6h2M1 7h2M1 8h2M1 9h2m-2 1h2m-2 1h2m-1 1h3m-1 1h3m-1 1h1"}),u.createElement("path",{stroke:"#0f0",d:"M10 4h1m0 1h1M4 6h1m7 0h1M3 7h1m2 0h1M3 8h3M4 9h2"}),u.createElement("path",{stroke:"green",d:"M11 4h1M3 5h2m7 0h1M3 6h1m1 0h2m6 0h1M4 7h2m0 1h1M6 9h1"}),u.createElement("path",{stroke:"gray",d:"M14 4h1m-2 3h1m1 3h1"}),u.createElement("path",{stroke:"#00f",d:"M3 9h1m-1 1h3m-3 1h3m-1 1h1"}),u.createElement("path",{stroke:"teal",d:"M7 9h2m6 0h1M6 10h1m1 0h1m3 0h3m-8 1h2m-2 1h2m-2 1h1"}),u.createElement("path",{stroke:"#0ff",d:"M12 9h3m-9 2h1m-1 1h1"}))},Iy={"32x32_4":Cy,"16x16_4":Ty},Py=function(t){var n=t.variant,r=n===void 0?"32x32_4":n,o=Ay(t,_y),i=Iy[r];return u.createElement(i,o)},jy=["variant"];function Oy(e,t){if(e==null)return{};var n=Ly(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Ly(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function qi(){return qi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},qi.apply(this,arguments)}var Ry=function(t){return u.createElement("svg",qi({xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",shapeRendering:"crispEdges",viewBox:"0 -0.5 32 32"},t),u.createElement("path",{stroke:"olive",d:"M14 2h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1M9 7h1M8 8h1M7 9h1m-2 1h1m-5 1h4m-5 1h1m3 0h1m-6 1h1m3 0h1m-5 1h1m3 0h1m-5 1h1m3 0h1m-5 1h1m3 0h1m-5 1h1m3 0h1m-5 1h1m3 0h1m-5 1h1m3 0h1m-4 1h5m0 1h1m0 1h1m0 1h2m-1 1h3m-2 1h3m-2 1h2m-1 1h2m-1 1h1m0 1h1"}),u.createElement("path",{stroke:"#000",d:"M15 2h2m-2 1h1m-2 1h1m-1 1h1m-2 2h1m-1 1h1m-1 1h1m-2 1h1m-1 1h1m-1 1h1m-1 1h2m-2 1h1m3 0h1m-5 1h1m3 0h1m-5 1h1m3 0h1m-5 1h1m3 0h1m-5 1h1m3 0h1m-5 1h4m-4 1h1M2 21h4m6 0h1m-7 1h1m5 0h1m-6 1h1m5 0h1m-6 1h1m4 0h1m-5 1h1m3 0h1m-4 1h1m0 1h1m2 0h1m-3 1h1m1 0h1m-2 1h1m1 0h1m-2 1h3"}),u.createElement("path",{stroke:"gray",d:"M27 2h1M17 3h1m7 0h2m-9 1h1m4 0h2m-7 1h1m2 0h2M13 6h2m4 0h1m-1 1h1m-1 1h1m10 0h1M19 9h1m7 0h3m-17 1h1m6 0h1m3 0h3m-14 1h1m6 0h1m2 0h1m-11 1h1m6 0h1m-7 1h2m4 0h1m-8 1h1m1 0h1m4 0h1m-8 1h1m1 0h1m4 0h1m-8 1h1m1 0h1m4 0h1m2 0h9m-19 1h1m1 0h1m4 0h1m-8 1h3m4 0h1m-1 1h1m-8 1h3m4 0h1m-8 1h2m5 0h1m2 0h1m-11 1h1m6 0h1m3 0h3m-15 1h1m6 0h1m7 0h3m-11 1h1m10 0h1m-12 1h1m-7 1h2m4 0h1m-2 1h1m2 0h2m-5 1h1m4 0h2m-8 1h1m7 0h2m0 1h1"}),u.createElement("path",{stroke:"silver",d:"M14 3h1m1 0h1m-4 1h1m1 0h1m1 0h1m-6 1h2m-3 1h1m-2 1h1m3 0h1M9 8h1m2 0h1m1 0h1M8 9h1m3 0h1m1 0h1m-8 1h1m6 0h1m-1 1h1M2 12h3m9 0h1m-1 4h1M2 17h1m3 0h1m1 0h1m1 0h1m3 0h1M3 18h1m1 0h1m1 0h1m1 0h1m1 0h1M2 19h1m3 0h1m1 0h1m1 0h1m5 0h1M7 20h1m1 0h1m1 0h1m4 0h1m-9 1h1m1 0h1m4 0h1m-7 1h1m1 0h1m2 0h1m-5 1h1m3 0h1m-3 1h1m1 0h1m-1 1h1m0 3h1m1 0h1m-2 1h1"}),u.createElement("path",{stroke:"#fff",d:"M16 4h1m-2 1h3m-3 1h4m-7 1h1m2 0h4m-8 1h1m3 0h4m-9 1h1m4 0h4M9 10h1m1 0h1m3 0h5M8 11h1m1 0h2m3 0h5M7 12h5m3 0h5M1 13h2m2 0h7m4 0h4M1 14h3m1 0h7m2 0h1m2 0h3M1 15h2m3 0h1m1 0h1m1 0h1m3 0h1m2 0h3M1 16h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m5 0h3M1 17h1m15 0h3M1 18h1m15 0h3M1 19h1m15 0h3m-3 1h3m-4 1h4m-5 1h5m-5 1h4m-4 1h4m-4 1h4m-4 1h4m-4 1h3m-2 1h1"}),u.createElement("path",{stroke:"#ff0",d:"M12 6h1m-2 1h1m-2 1h1M9 9h1m1 0h1m-4 1h1m1 0h1m-5 1h2m1 0h1m-4 1h1m-4 1h1m-1 2h1m1 0h1m1 0h1m1 0h1m1 0h1M2 16h1m3 0h1m1 0h1m1 0h1m-8 1h1m1 0h1m1 0h1m1 0h1m1 0h1M2 18h1m3 0h1m1 0h1m1 0h1m-8 1h1m1 0h1m1 0h1m1 0h1m1 0h1m-6 1h1m1 0h1m1 0h1m-4 1h1m1 0h1m1 0h1m-4 1h1m1 0h1m0 1h1"}))},Dy=function(t){return u.createElement("svg",qi({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",shapeRendering:"crispEdges",viewBox:"0 -0.5 16 16"},t),u.createElement("path",{stroke:"#000",d:"M9 0h2m-1 1h1M9 2h1M8 4h1M8 5h1M8 6h2M8 7h1m1 0h1M8 8h1m1 0h1M2 9h1m5 0h2m-7 1h2m3 0h1m-4 1h1m2 0h1m-3 1h1m0 1h1m1 0h1m-2 1h1m1 0h1m-2 1h2"}),u.createElement("path",{stroke:"olive",d:"M8 1h1M7 2h1M6 3h1M5 4h1M3 5h2M2 6h1M2 7h1M2 8h1m0 1h1m1 1h1m0 1h1m0 1h1m0 1h1m0 1h1"}),u.createElement("path",{stroke:"gray",d:"M9 1h1m1 0h1M8 3h2m2 0h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M9 8h1m2 0h1M4 9h1m7 0h1m-1 1h1m-1 1h1m-5 1h2m2 0h1m-1 1h1m-2 1h1"}),u.createElement("path",{stroke:"#ff0",d:"M8 2h1M7 3h1M6 4h1M5 5h1m1 0h1M6 6h1M3 7h1m1 0h1m1 0h1M3 8h1m2 0h1M5 9h1m1 0h1m-2 1h1m0 1h1"}),u.createElement("path",{stroke:"silver",d:"M10 2h2m-2 1h1M9 4h1M9 5h1M4 6h1M4 7h1m4 0h1M4 8h1m4 2h1m-1 1h1m0 2h2"}),u.createElement("path",{stroke:"#fff",d:"M11 3h1M7 4h1m2 0h2M6 5h1m3 0h2M3 6h1m1 0h1m1 0h1m2 0h2M6 7h1m4 0h1M5 8h1m1 0h1m3 0h1M6 9h1m3 0h2m-5 1h1m2 0h2m-2 1h2m-2 1h2"}))},Ny={"32x32_4":Ry,"16x16_4":Dy},zy=function(t){var n=t.variant,r=n===void 0?"32x32_4":n,o=Oy(t,jy),i=Ny[r];return u.createElement(i,o)},By=["variant"];function Fy(e,t){if(e==null)return{};var n=Wy(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Wy(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function el(){return el=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},el.apply(this,arguments)}var Uy=function(t){return u.createElement("svg",el({xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",shapeRendering:"crispEdges",viewBox:"0 -0.5 32 32"},t),u.createElement("path",{stroke:"#000",d:"M8 8h9M6 9h13M5 10h15M4 11h16M4 12h11m3 0h2M3 13h11m4 0h1M3 14h10m4 0h1M3 15h9m3 0h3M3 16h7m8 0h1M3 17h6m9 0h1M3 18h6m10 0h1M3 19h7m7 0h2M4 20h7m6 0h1M4 21h6m7 0h1M5 22h4m8 0h1M6 23h3m3 0h5M6 24h1m7 0h1m-1 1h1"}),u.createElement("path",{stroke:"#fff",d:"M15 12h2m-3 1h3m-4 1h4m-5 1h3m-5 1h5m1 0h1m-8 1h8m-8 1h8m-7 1h6m-5 1h5m-6 1h6m-7 1h2m-2 1h3m-5 1h6m-5 1h5m-3 1h3m-1 1h1"}),u.createElement("path",{stroke:"silver",d:"M17 12h1m-1 1h1m-1 3h1m-1 1h1m-1 1h2m-3 1h1m-1 1h1m-1 1h1m-6 1h6"}),u.createElement("path",{stroke:"#00f",d:"M15 16h1M6 26h2m-3 1h5m5 0h1m-9 1h5m2 0h2"}),u.createElement("path",{stroke:"gray",d:"M13 24h1m-1 1h1m-1 1h2m-2 1h1"}),u.createElement("path",{stroke:"navy",d:"M5 25h3m-3 1h1m2 0h2m5 0h1M4 27h1m5 0h2m2 0h1m1 0h1M4 28h3m5 0h2m2 0h2M7 29h9"}))},Hy=function(t){return u.createElement("svg",el({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",shapeRendering:"crispEdges",viewBox:"0 -0.5 16 16"},t),u.createElement("path",{stroke:"#000",d:"M2 1h7M1 2h10M1 3h10M0 4h8m2 0h1M0 5h6m3 0h1M0 6h5m4 0h1M0 7h4m6 0h1M0 8h4m5 0h1M0 9h5m4 0h1m-9 1h3m5 0h1m-8 1h2m2 0h3m-7 1h1m4 0h1m-7 1h3m4 0h1m-9 1h1m3 0h2m1 0h1m1 0h1m-4 1h2"}),u.createElement("path",{stroke:"silver",d:"M8 4h1M7 5h1M6 6h1M5 7h1m1 0h1m1 0h1M4 8h1m1 0h1m1 0h1M5 9h1m1 0h1m-4 1h1m1 0h1m1 0h1m-4 1h1m-2 1h1m1 0h1m-2 1h1m1 0h1m-2 1h1"}),u.createElement("path",{stroke:"#fff",d:"M9 4h1M6 5h1m1 0h1M5 6h1m1 0h1M4 7h1m1 0h1m1 0h1M5 8h1m1 0h1M6 9h1m1 0h1m-4 1h1m1 0h1m-4 1h1m-2 1h1m1 0h1m-2 1h1m1 0h1"}),u.createElement("path",{stroke:"navy",d:"M8 6h1"}),u.createElement("path",{stroke:"#00f",d:"M1 14h3m4 0h1m-9 1h6m2 0h2"}))},Qy={"32x32_4":Uy,"16x16_4":Hy},Vy=function(t){var n=t.variant,r=n===void 0?"32x32_4":n,o=Fy(t,By),i=Qy[r];return u.createElement(i,o)},Gy=["variant"];function Ky(e,t){if(e==null)return{};var n=Yy(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Yy(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function ps(){return ps=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ps.apply(this,arguments)}var Xy=function(t){return u.createElement("svg",ps({xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",shapeRendering:"crispEdges",viewBox:"0 -0.5 32 32"},t),u.createElement("path",{stroke:"olive",d:"M13 0h3m-4 1h1m-2 1h1m-1 1h1m-2 1h1m-1 1h1M9 6h1M9 7h1M8 8h1M8 9h1m-2 1h1m-1 1h1m-2 1h1m-1 1h1m-2 1h1m-1 1h1m6 0h1m3 0h1M4 16h1m-1 1h1m-2 1h1m9 0h1m1 0h1M3 19h1m-2 1h1m-1 1h1m-2 1h1m-1 1h1m-2 1h1m-1 1h1m-1 1h1m-1 1h1m0 1h1m0 1h1"}),u.createElement("path",{stroke:"#ff0",d:"M13 1h2m-3 1h4m-4 1h5m-6 1h6m-6 1h7m-8 1h8m-8 1h9M9 8h10M9 9h3m5 0h3M8 10h4m5 0h3M8 11h4m5 0h4M7 12h5m5 0h4M7 13h5m5 0h5M6 14h6m5 0h5M6 15h6m5 0h6M5 16h7m5 0h6M5 17h8m3 0h8M4 18h9m3 0h8M4 19h9m3 0h9M3 20h11m1 0h10M3 21h23M2 22h11m4 0h9M2 23h11m4 0h10M1 24h12m4 0h10M1 25h12m4 0h11M1 26h27M1 27h26M2 28h24"}),u.createElement("path",{stroke:"silver",d:"M15 1h1m0 1h1m0 2h1m0 2h1m0 2h1m-8 1h1m3 0h1m3 1h1m0 2h1m0 2h1m-11 2h1m3 0h1m6 0h1m0 2h1m-12 1h1m1 0h1m9 1h1m-13 2h1m2 0h1m9 0h1m0 2h1m-15 1h1m2 0h1m10 2h1m-2 1h1"}),u.createElement("path",{stroke:"#000",d:"M16 1h1m0 1h1m-1 1h1m0 1h1m-1 1h1m0 1h1m-1 1h1m0 1h1m-8 1h3m4 0h1m-9 1h5m4 0h1m-10 1h5m4 0h1m-10 1h5m5 0h1m-11 1h5m5 0h1m-11 1h5m6 0h1m-11 1h3m7 0h1m-11 1h3m8 0h1m-12 1h3m8 0h1m-11 1h1m10 0h1m-12 1h1m10 0h1m-12 1h1m11 0h1m-1 1h1m-13 1h2m11 0h1m-15 1h4m10 0h1m-15 1h4m11 0h1m-15 1h2m12 0h1m-1 1h1m-1 1h1m-2 1h1M3 29h24"}),u.createElement("path",{stroke:"gray",d:"M18 2h1m-1 1h2m-1 1h2m-2 1h2m-1 1h2m-2 1h2m-1 1h2m-2 1h2m-1 1h2m-2 1h2m-1 1h2m-2 1h2m-1 1h2m-2 1h2m-1 1h2m-2 1h2m-1 1h2m-2 1h2m-1 1h2m-2 1h2m-1 1h2m-2 1h2m-1 1h2m-2 1h2m-2 1h3m-3 1h3m-4 1h4m-5 1h5M4 30h27M5 31h25"}))},Zy={"32x32_4":Xy},Jy=function(t){var n=t.variant,r=n===void 0?"32x32_4":n,o=Ky(t,Gy),i=Zy[r];return u.createElement(i,o)},qy=["variant"];function ex(e,t){if(e==null)return{};var n=tx(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function tx(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function tl(){return tl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},tl.apply(this,arguments)}var nx=function(t){return u.createElement("svg",tl({xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",shapeRendering:"crispEdges",viewBox:"0 -0.5 32 32"},t),u.createElement("path",{stroke:"#000",d:"M3 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h1m1 1h1M3 2h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m3 0h1m1 0h1M3 3h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m3 0h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m-1 1h1m-3 4h2m-3 1h2m-2 1h1m1 0h2m-4 1h5m3 0h1m-8 1h5m1 0h1m-6 1h5m-4 1h3m-2 1h2m-4 1h2m1 0h1m-5 1h1m1 0h1m1 0h1m-10 1h5m2 0h1m1 0h1m-13 1h2m8 0h1m1 0h1m-15 1h2m10 0h1m1 0h1m-17 1h2m12 0h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-4 1h1m1 0h1M3 31h23"}),u.createElement("path",{stroke:"gray",d:"M2 1h1m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h1M1 2h1m22 0h1M1 3h1m22 0h1M1 4h1M1 5h1M1 6h1M1 7h1M1 8h1M1 9h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m15 0h1M1 23h1m15 0h1M1 24h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m0 1h1"}),u.createElement("path",{stroke:"#fff",d:"M3 1h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1M2 2h1m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2M2 3h1m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2M2 4h22M2 5h22M2 6h22m6 1h1M2 8h22M2 9h22m4 0h1m-2 1h1M2 11h22M2 12h21m1 1h1M2 14h20m1 0h1M2 15h19m0 1h1M2 17h17m1 0h1m1 0h1M2 18h16m1 0h1m0 1h1M2 20h14m1 0h1m1 0h1M2 21h13m1 0h1m1 0h1m-3 1h1M2 23h11m1 0h1m3 0h6M2 24h10m3 0h9M2 26h22M2 27h22M2 29h22"}),u.createElement("path",{stroke:"silver",d:"M26 2h1m-1 1h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1M2 7h23m1 0h1m-3 1h1m-1 1h1M2 10h22M2 13h20M2 16h18m3 1h1m-2 1h1M2 19h15m4 0h1m-2 1h1m5 0h1m-8 1h1m4 0h1m1 0h1M2 22h12m9 0h2m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1M2 25h9m2 0h12m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1M2 28h23m1 0h1m-3 1h1m1 0h1M3 30h21m1 0h1"}),u.createElement("path",{stroke:"navy",d:"M30 4h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m5 0h1m-7 1h1m4 0h1m-2 1h1m-4 1h1m1 0h1m2 0h1m-5 1h1m2 0h2m-4 1h3m-2 1h1m-4 3h1"}),u.createElement("path",{stroke:"#00f",d:"M30 5h1m-2 1h2m-3 1h2m-3 1h2m1 0h1m-5 1h2m1 0h2m-6 1h2m1 0h2m-5 1h1m1 0h2m1 0h1m-6 1h3m1 0h2m-5 1h1m1 0h2m-3 1h2"}),u.createElement("path",{stroke:"#ff0",d:"M29 8h1m-4 3h1m-5 5h1m-2 1h1m-2 1h2m-4 1h2m-2 1h1m-2 1h1m-3 1h1"}),u.createElement("path",{stroke:"olive",d:"M21 15h1m-2 1h1m-2 1h1m-2 1h1m4 0h2m-8 1h1m4 0h3m-9 1h1m4 0h3m-9 1h1m4 0h3m-9 1h1m-2 1h1m-2 1h1"}))},rx=function(t){return u.createElement("svg",tl({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",shapeRendering:"crispEdges",viewBox:"0 -0.5 16 16"},t),u.createElement("path",{stroke:"#000",d:"M2 0h1m1 0h1m1 0h1m1 0h1m1 0h1M1 1h1m9 0h1M2 2h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m-1 1h1m-1 1h1m-1 1h1m-1 1h2m-2 1h3m-2 1h3m-2 1h1m-3 1h2m-6 1h5m-7 1h2m4 0h1m-1 1h1m-1 1h1M1 15h11"}),u.createElement("path",{stroke:"#fff",d:"M2 1h1m1 0h1m1 0h1m1 0h1m1 0h1M1 2h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M1 3h10M1 4h10m4 0h1m-2 1h1M1 6h10M1 7h10M1 9h8m2 0h1M1 10h7m2 0h1M1 12h5m2 0h3M1 13h10"}),u.createElement("path",{stroke:"gray",d:"M3 1h1m1 0h1m1 0h1m1 0h1M0 2h1M0 3h1M0 4h1M0 5h1M0 6h1M0 7h1M0 8h1M0 9h1m12 0h1M0 10h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1"}),u.createElement("path",{stroke:"navy",d:"M15 2h1m-2 1h1m-2 1h1m-1 1h1m1 1h1m-1 1h1"}),u.createElement("path",{stroke:"silver",d:"M11 3h1m-1 1h1M1 5h11m-1 1h1M1 8h9m-9 3h6m4 1h1m-1 1h1M1 14h11"}),u.createElement("path",{stroke:"#00f",d:"M15 3h1m-2 1h1m0 1h1m-2 1h1"}),u.createElement("path",{stroke:"olive",d:"M11 7h1m-2 1h1m1 0h1M9 9h1m2 0h1m-5 1h1m2 0h1m-5 1h1"}),u.createElement("path",{stroke:"#ff0",d:"M11 8h1m-2 1h1m-2 1h1"}))},ox={"32x32_4":nx,"16x16_4":rx},ix=function(t){var n=t.variant,r=n===void 0?"32x32_4":n,o=ex(t,qy),i=ox[r];return u.createElement(i,o)};const lx=k.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
  cursor: pointer;
  color: white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  user-select: none;
  width: 120px;
  
  &:active {
    background: rgba(255, 255, 255, 0.2);
  }
`,ax=k.span`
  margin-top: 8px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
`,sx=({icon:e,onClick:t})=>{const n=e.Icon;return M.jsxs(lx,{onClick:t,title:e.label,children:[M.jsx(n,{variant:"32x32_4",style:{width:48,height:48}}),M.jsx(ax,{children:e.label})]})},hx=[{id:"che-entende",title:"Breaking Communication Barriers",project:"Che-Entende",content:`Imagine a world where technology bridges the gap between silence and sound. 
    This vision drove us to create Che-Entende, a project that transcends mere technical 
    innovation. Before diving into code, we took an extraordinary journey into Bolivia's 
    deaf community, where we discovered that sign language is a beautiful tapestry of 
    expression, culture, and identity. As someone deeply fascinated by the intersection of technology and social impact, 
    Che-Entende represents more than just a technical achievement. The project emerged from 
    our immersion in Bolivia's deaf community, where we spent valuable time with teachers and 
    students at the local deaf school.

    <img src="/portfolio/blog-media/escuela de sordos.jpg" alt="School Visit" style="width:100%;margin:1rem 0;"/>

    Working closely with the deaf community transformed our perspective entirely. We learned 
    that effective communication isn't just about translation - it's about understanding, 
    respect, and inclusion. Using Python and TensorFlow's powerful capabilities combined with 
    MediaPipe's precise hand tracking, we began translating basic greetings. Each successful 
    translation wasn't just a technical victory; it was a moment of connection, a bridge being built.

    <img src="/portfolio/blog-media/traduccion saludos.jpg" alt="Translation Demo" style="width:100%;margin:1rem 0;"/>

    As we explored the possibilities of our system, we expanded it to include translations for 
    Bolivia's departments. Despite hardware limitations that prevented further expansion, each 
    feature we implemented represented another step toward breaking communication barriers.

    <img src="/portfolio/blog-media/departamentos.jpg" alt="Departments Translation" style="width:100%;margin:1rem 0;"/>

    The project's impact resonated beyond our expectations, earning first place at TecnoUPSA 2024. 
    But the real victory wasn't in the award - it was in the smiles of students and teachers 
    who could now communicate more freely, in the possibilities we opened for future innovations, 
    and in the reminder that technology is at its best when it serves humanity.

    <img src="/portfolio/blog-media/premiacion.jpg" alt="Award Ceremony" style="width:100%;margin:1rem 0;"/>

    Our innovative approach to bridging communication gaps caught the attention of local media, 
    and we were featured in a prominent web portal that highlighted the project's potential impact 
    on the deaf community in Bolivia.

    <img src="/portfolio/blog-media/destacado.png" alt="News Feature" style="width:100%;margin:1rem 0;"/>`},{id:"smells-fishy",title:"Securing the Digital Frontier",project:"Smells Fishy",content:`Phishing remains an evolving challenge in cybersecurity, one that's particularly 
    difficult to completely eliminate as attackers constantly develop new methods. This reality 
    sparked my curiosity to explore how machine learning could help identify potential threats, 
    leading to the development of Smells Fishy.

    <img src="/portfolio/blog-media/phishing.png" alt="Phishing Detection" style="width:100%;margin:1rem 0;"/>

    The project served as my valuable introduction to Python libraries and machine learning concepts. 
    Using Django and Scikit-learn, I built a system that attempts to identify suspicious URLs. 
    While no solution can guarantee perfect protection, this experience enhanced my understanding 
    of both cybersecurity challenges and the practical implementation of machine learning solutions.`},{id:"fierros-bids",title:"Revolutionizing Auto Commerce",project:"Fierros & Bids",content:`In collaboration with a local auto dealership, I developed a prototype for an online 
    vehicle auction platform to bring traditional car auctions into the digital age. The project 
    started with a clear focus: implementing a reliable real-time bidding system for vehicle 
    auctions in Bolivia.

    <img src="/portfolio/blog-media/cars home.png" alt="Platform Home" style="width:100%;margin:1rem 0;"/>

    Using Daphne and WebSockets, I built the core live bidding functionality, ensuring that 
    bids update instantly for all participants. The backend, powered by Django and Redis, 
    handles user authentication and maintains bid synchronization across all active sessions. 

    <img src="/portfolio/blog-media/cars auctions.jpg" alt="Auction Interface" style="width:100%;margin:1rem 0;"/>

    The real-time bidding system was designed to handle multiple concurrent users, providing 
    a seamless and engaging auction experience. Here's a look at the live bidding interface 
    in action:

    <img src="/portfolio/blog-media/pujas.png" alt="Live Bidding" style="width:100%;margin:1rem 0;"/>

    While the platform successfully demonstrates the core auction functionality, future 
    implementation plans include integrating a payment gateway. This feature is currently 
    pending due to the strict requirements and regulations that payment processors have 
    for auction platforms in Bolivia.`}],ux=k(b1)`
  position: absolute;
  ${e=>e.$x!==void 0&&e.$y!==void 0?`
      left: ${e.$x}px;
      top: ${e.$y}px;
    `:`
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    `}
  width: ${e=>{var t;return((t=e.style)==null?void 0:t.width)||"400px"}};
  max-width: 95vw;
  max-height: 90vh;
  transition: ${e=>e.$isDragging?"none":"transform 0.1s"};
  user-select: ${e=>e.$isDragging?"none":"auto"};
  
  @media (max-width: 768px) {
    width: 95vw !important;
    height: auto;
    max-height: 80vh;
  }
`,Wn=k(M1)`
  background-color: #053576;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: move;
  
  @media (max-width: 768px) {
    padding: 6px;
    
    span {
      font-size: 14px;
    }
  }
`,Un=({children:e,style:t})=>{const[n,r]=y.useState({}),[o,i]=y.useState(!1),[l,a]=y.useState({x:0,y:0}),s=y.useRef(null),h=(c,d)=>{var E;const v=(E=s.current)==null?void 0:E.getBoundingClientRect();v&&(i(!0),a({x:c-(n.x||v.left),y:d-(n.y||v.top)}))},p=(c,d)=>{if(!o)return;const v=c-l.x,E=d-l.y;r({x:v,y:E})},m=()=>{i(!1)},g=c=>{c.target.closest(".window-header")&&h(c.clientX,c.clientY)},x=c=>{p(c.clientX,c.clientY)},w=()=>{m()},b=c=>{if(!c.target.closest(".window-header"))return;const d=c.touches[0];h(d.clientX,d.clientY)},T=c=>{const d=c.touches[0];p(d.clientX,d.clientY),o&&c.preventDefault()},f=()=>{m()};return M.jsx(ux,{ref:s,style:t,$isDragging:o,$x:n.x,$y:n.y,onMouseDown:g,onMouseMove:x,onMouseUp:w,onMouseLeave:m,onTouchStart:b,onTouchMove:T,onTouchEnd:f,onTouchCancel:m,children:e})};k(ur)`
  &::-webkit-scrollbar {
    width: 16px;
  }

  &::-webkit-scrollbar-track {
    background: ${({theme:e})=>e.material};
    border: 1px solid ${({theme:e})=>e.borderDark};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>e.material};
    border: 1px solid ${({theme:e})=>e.borderDark};
    box-shadow: inset 1px 1px ${({theme:e})=>e.borderLightest},
                inset -1px -1px ${({theme:e})=>e.borderDark};
  }

  &::-webkit-scrollbar-button {
    display: block;
    height: 16px;
    width: 16px;
    background: ${({theme:e})=>e.material};
    border: 1px solid ${({theme:e})=>e.borderDark};
    box-shadow: inset 1px 1px ${({theme:e})=>e.borderLightest},
                inset -1px -1px ${({theme:e})=>e.borderDark};
  }

  &::-webkit-scrollbar-button:vertical:start {
    background-image: url('data:image/svg+xml;utf8,<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 4L4 8H12L8 4Z" fill="black"/></svg>');
  }

  &::-webkit-scrollbar-button:vertical:end {
    background-image: url('data:image/svg+xml;utf8,<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 12L12 8H4L8 12Z" fill="black"/></svg>');
  }
`;const la=k(br)`
  max-height: calc(90vh - 60px);
  overflow-y: auto;
  
  @media (max-width: 768px) {
    max-height: calc(80vh - 50px);
    padding: 12px;
    
    img {
      max-width: 100%;
      height: auto;
    }
  }
`,cx=k(br)`
  padding: 12px;
  height: calc(100% - 33px);
  overflow-y: auto;
  background: white;

  &::-webkit-scrollbar {
    width: 16px;
    height: 16px;
  }
  
  &::-webkit-scrollbar-track {
    background: #dfdfdf;
    border-left: 1px solid #888888;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #c0c0c0;
    border: 1px solid;
    border-color: #dfdfdf #808080 #808080 #dfdfdf;
  }
  
  &::-webkit-scrollbar-button:single-button {
    background: #dfdfdf;
    display: block;
    border: 1px solid;
    border-color: #dfdfdf #808080 #808080 #dfdfdf;
    height: 16px;
  }

  &::-webkit-scrollbar-button:single-button:vertical:increment {
    background-position: center 5px;
  }
`;k.div`
  padding: 1rem;
`;k.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;k(ur)`
  padding: 1rem;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;k.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #000080;

  span {
    color: #000080;
    font-size: 1.1rem;
    font-weight: bold;
    text-transform: uppercase;
    margin-left: 0.5rem;
  }
`;k.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;k(Ze)`
  width: 100%;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 0.75rem;
  cursor: default;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({theme:e})=>e.material};
    transform: scale(1.02);
  }

  img {
    margin-right: 0.5rem;
    width: 16px;
    height: 16px;
  }
`;const mx=k.button`
  padding: 6px 12px;
  border: 2px solid #dfdfdf;
  border-right-color: #000;
  border-bottom-color: #000;
  background: ${e=>{switch(e.$variant){case"primary":return"#c3c3c3";case"secondary":return"#2f8c75";case"tertiary":return"#000080";case"info":return"#5c9cd0";case"success":return"#2ecc71";case"warning":return"#e4a229";case"danger":return"#e74c3c";default:return"#c3c3c3"}}};
  color: ${e=>e.$variant==="tertiary"?"white":"black"};
  font-family: 'ms_sans_serif';
  font-size: 12px;
  margin-right: 8px;
  margin-bottom: 8px;
  cursor: default;
  outline: none;
  box-shadow: inset 1px 1px 0px 1px #ffffff, 
              inset -1px -1px 0px 1px #868686;

  &:active {
    border: 2px solid #868686;
    border-right-color: #dfdfdf;
    border-bottom-color: #dfdfdf;
    box-shadow: inset 1px 1px 0px 1px #868686,
                inset -1px -1px 0px 1px #ffffff;
  }
`,dx=k.div`
  background: #000;
  color: #00ff00;
  font-family: 'DOS', 'Courier New', monospace;
  padding: 0;
  height: 100vh;
  width: 100%;
  overflow-y: auto;
  line-height: 1.2;
  font-size: 14px;
  border: none;

  &::-webkit-scrollbar {
    width: 16px;
    background: #dfdfdf;
  }

  &::-webkit-scrollbar-thumb {
    background: #c3c3c3;
    border: 2px solid #dfdfdf;
  }
`,Jo=k.div`
  margin: 0;
  padding: 0 8px;
  white-space: pre-wrap;
  opacity: ${e=>e.$visible?1:0};
  transition: opacity 0.3s;
`,aa=k.span`
  color: #00ff00;
`,ou=k.span`
  color: #ffff00;
`,iu=k.div`
  color: #00ff00;
  margin-left: 16px;
  margin-top: 4px;
`,fx=k.div`
  padding: 2px 4px;
  color: ${e=>e.$color};
  margin-bottom: 4px;
`,sa=[{command:'echo "Welcome to my skills terminal!"',output:"Loading skills database..."},{command:"dir /Languages",output:[{text:"Python",color:"#ffd43b"},{text:"C#",color:"#9b4f96"},{text:"JavaScript",color:"#f7df1e"}]},{command:"dir /Frameworks",output:[{text:"React",color:"#61dafb"},{text:"Django",color:"#44B78B"},{text:".NET",color:"#512bd4"},{text:"Bootstrap",color:"#7952b3"}]},{command:"dir /Tools",output:[{text:"Git",color:"#f05032"},{text:"Linux",color:"#fcc624"},{text:"PostgreSQL",color:"#336791"}]}],px=()=>{const[e,t]=y.useState([]),[n,r]=y.useState({index:-1,text:""}),o=y.useRef(null);return u.useEffect(()=>{let i=0,l=0,a;const s=()=>{if(i>=sa.length){clearInterval(a);return}const h=sa[i].command;l===0&&t(p=>[...p,i]),l<h.length?(r({index:i,text:h.substring(0,l+1)}),l++):(r({index:-1,text:""}),l=0,i++,o.current&&(o.current.scrollTop=o.current.scrollHeight),clearInterval(a),setTimeout(()=>{a=setInterval(s,50)},500))};return a=setInterval(s,50),()=>clearInterval(a)},[]),M.jsxs(dx,{ref:o,children:[M.jsx(Jo,{$visible:!0,children:M.jsx(aa,{children:"Microsoft Windows [Version 10.0.19045.3803]"})}),M.jsx(Jo,{$visible:!0,children:M.jsx(aa,{children:"(c) Agustin P. All rights reserved."})}),sa.map((i,l)=>M.jsxs(u.Fragment,{children:[M.jsxs(Jo,{$visible:e.includes(l),children:[M.jsx(aa,{children:"C:\\Skills>"}),n.index===l?M.jsx(ou,{children:n.text}):M.jsx(ou,{children:e.includes(l)?i.command:""})]}),M.jsx(Jo,{$visible:e.includes(l)&&n.index!==l,children:Array.isArray(i.output)?M.jsx(iu,{children:i.output.map((a,s)=>M.jsx(fx,{$color:a.color,children:a.text},s))}):M.jsx(iu,{children:i.output})})]},l))]})},gx=k.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  width: 100px;
  text-align: center;
`,vx=k.span`
  margin-top: 8px;
  font-size: 11px;
  font-family: ms_sans_serif;
  word-break: break-word;
`,yx=({openWindows:e,toggleWindow:t,skills:n,projects:r,isStartOpen:o})=>{const[i,l]=u.useState(null);return y.useState(!0),u.useEffect(()=>{const a=Object.entries(e).filter(([s,h])=>h).map(([s])=>s);a.length>1&&a.forEach(s=>{s!==a[a.length-1]&&t(s)})},[e,t]),M.jsxs(M.Fragment,{children:[e.about&&M.jsxs(Un,{children:[M.jsxs(Wn,{className:"window-header",children:[M.jsx("span",{children:"About Me.txt"}),M.jsx(Ze,{onClick:()=>t("about"),children:M.jsx("span",{children:"×"})})]}),M.jsx(la,{children:M.jsxs(ur,{variant:"field",className:"field",style:{padding:"1.5rem",marginBottom:"1rem"},children:[M.jsx("h2",{style:{fontSize:"1.8rem",fontWeight:"bold",marginBottom:"1rem",color:"#000080"},children:"Hi, I am Agustín"}),M.jsx("p",{style:{marginTop:"1rem",fontSize:"1.4rem",fontWeight:"bold",color:"#000080",borderBottom:"2px solid #000080",paddingBottom:"0.5rem",marginBottom:"1rem"},children:"Software Engineer"}),M.jsx("p",{style:{marginTop:"1rem"},children:"Hello and welcome to my portfolio! I find myself deeply passionate about technology and the open-source community."}),M.jsx("p",{style:{marginTop:"1rem"},children:"I'm fascinated by the innate creative potential we all have, and even more inspired by how we, as software engineers, can develop technologies that advance and benefit humanity for the better."})]})})]}),e.projects&&M.jsxs(Un,{style:{width:"450px",maxWidth:"95vw",margin:"20px auto"},children:[M.jsxs(Wn,{className:"window-header",children:[M.jsx("span",{children:"Projects.exe"}),M.jsx(Ze,{onClick:()=>t("projects"),children:M.jsx("span",{children:"×"})})]}),M.jsx(la,{style:{padding:"8px",maxHeight:"70vh",overflowY:"auto"},children:r.map((a,s)=>M.jsxs(ur,{variant:"field",style:{padding:"8px",marginBottom:"8px",height:"160px",display:"flex",flexDirection:"column"},children:[M.jsx("h3",{style:{margin:"0 0 8px 0",color:"#000080",borderBottom:"2px solid #000080",paddingBottom:"4px",fontSize:"14px"},children:a.name}),M.jsx("p",{style:{margin:"0 0 8px 0",fontSize:"12px",flexGrow:1},children:a.description}),M.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px"},children:a.technologies.map((h,p)=>{let m="primary";return["Python","Django","Flask"].includes(h)?m="info":["TensorFlow","Scikit-learn","Pandas","NumPy","Matplotlib"].includes(h)?m="danger":["JavaScript","React","Node.js"].includes(h)?m="warning":["Bootstrap","CSS","HTML"].includes(h)?m="success":["OpenCV","Mediapipe"].includes(h)?m="secondary":["Amazon Rekognition","AWS"].includes(h)&&(m="tertiary"),M.jsx(mx,{$variant:m,style:{fontSize:"13px",padding:"4px 8px",height:"auto",margin:"1px"},children:h},p)})})]},s))})]}),e.skills&&M.jsxs(Un,{style:{width:"800px",height:"600px",maxWidth:"95vw",maxHeight:"90vh",margin:"auto"},children:[M.jsxs(Wn,{className:"window-header",children:[M.jsx("span",{children:"Skills.cmd"}),M.jsx(Ze,{onClick:()=>t("skills"),children:M.jsx("span",{children:"×"})})]}),M.jsx(br,{style:{padding:0,margin:0,height:"calc(100% - 33px)",overflow:"hidden"},children:M.jsx(px,{})})]}),e.contact&&M.jsxs(Un,{children:[M.jsxs(Wn,{className:"window-header",children:[M.jsx("span",{children:"Contact.exe"}),M.jsx(Ze,{onClick:()=>t("contact"),children:M.jsx("span",{children:"×"})})]}),M.jsx(la,{children:M.jsxs(ur,{variant:"field",style:{padding:"1rem"},children:[M.jsxs("div",{style:{marginBottom:"1rem",display:"flex",alignItems:"center",gap:"0.5rem"},children:[M.jsx(kd,{variant:"32x32_4"}),M.jsxs("p",{children:["Email: ",M.jsx("a",{href:"mailto:agustin.swe@gmail.com",style:{color:"#0000FF",textDecoration:"underline",cursor:"pointer"},children:"agustin.swe@gmail.com"})]})]}),M.jsxs("div",{style:{marginBottom:"1rem",display:"flex",alignItems:"center",gap:"0.5rem"},children:[M.jsx(yy,{variant:"32x32_4"}),M.jsxs("p",{children:["LinkedIn: ",M.jsx("a",{href:"https://www.linkedin.com/in/agustin-p-3b544432a",target:"_blank",rel:"noopener noreferrer",style:{color:"#0000FF",textDecoration:"underline",cursor:"pointer"},children:"www.linkedin.com/in/agustin-p-3b544432a"})]})]})]})})]}),e.blog&&M.jsxs(Un,{style:{width:"500px",height:"auto",maxWidth:"95vw",margin:"20px auto"},children:[M.jsxs(Wn,{children:[M.jsx("span",{style:{fontFamily:"ms_sans_serif"},children:"Blog.txt"}),M.jsx("div",{style:{display:"flex",gap:"2px"},children:M.jsx(Ze,{onClick:()=>t("blog"),children:M.jsx("span",{children:"×"})})})]}),M.jsxs("div",{style:{background:"#c0c0c0",borderBottom:"1px solid #868686",padding:"2px 6px",display:"flex",gap:"16px"},children:[M.jsx("span",{style:{fontFamily:"ms_sans_serif"},children:"File"}),M.jsx("span",{style:{fontFamily:"ms_sans_serif"},children:"Edit"}),M.jsx("span",{style:{fontFamily:"ms_sans_serif"},children:"Help"})]}),M.jsx("div",{style:{padding:"8px 16px",borderBottom:"1px solid #848584",background:"white"},children:M.jsx("p",{style:{textAlign:"center",color:"#000080",fontSize:"14px",margin:0},children:"Select a project from the bottom to read its story"})}),M.jsx(br,{style:{background:"white",padding:"16px",display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(80px, 1fr))",gap:"16px",justifyItems:"center",maxHeight:"300px","@media (max-width: 480px)":{gridTemplateColumns:"repeat(2, 1fr)",padding:"8px",gap:"8px"}},children:hx.map((a,s)=>{let h;switch(a.project){case"Che-Entende":h=zy;break;case"Smells Fishy":h=Jy;break;case"Fierros & Bids":h=Sy;break;default:h=wd}return M.jsxs(gx,{onClick:()=>l(a),children:[M.jsx(h,{variant:"32x32_4"}),M.jsxs(vx,{children:[a.project,".txt"]})]},s)})})]}),i&&M.jsxs(Un,{style:{width:"600px",height:"500px",maxWidth:"95vw",maxHeight:"90vh",margin:"20px auto"},children:[M.jsxs(Wn,{className:"window-header",children:[M.jsx("span",{style:{fontFamily:"ms_sans_serif"},children:"Blog.exe"}),M.jsx(Ze,{onClick:()=>l(null),children:M.jsx("span",{children:"×"})})]}),M.jsxs(cx,{children:[M.jsx("h2",{style:{color:"#000080",fontFamily:"ms_sans_serif",fontSize:"20px",marginBottom:"12px",paddingBottom:"6px",borderBottom:"1px solid #000080"},children:i.title}),M.jsx("div",{style:{fontFamily:"ms_sans_serif",lineHeight:"1.4",whiteSpace:"normal",textAlign:"justify",fontSize:"14px"},dangerouslySetInnerHTML:{__html:i.content}})]})]}),o&&M.jsx(R2,{style:{position:"absolute",left:"0",bottom:"100%",width:"200px"},children:M.jsxs(D2,{onClick:()=>window.location.reload(),children:[M.jsx(G2,{variant:"16x16_4",style:{marginRight:8}}),"Restart..."]})})]})},Md=[{id:"about",label:"About Me",Icon:Vy},{id:"projects",label:"Projects",Icon:wd},{id:"skills",label:"Skills",Icon:Py},{id:"contact",label:"Contact",Icon:kd},{id:"blog",label:"Blog",Icon:ix}],xx=k(Ze)`
  flex: 0 0 auto;
  margin: 2px;
  padding: 4px 8px;
  min-width: 180px;
  height: 32px;
  font-size: 14px;
  background-color: ${({theme:e})=>e.material};
  box-shadow: inset 1px 1px 0px 1px ${({theme:e})=>e.materialText},
              inset -1px -1px 0px 1px ${({theme:e})=>e.materialDark};
  
  &:active {
    box-shadow: inset -1px -1px 0px 1px ${({theme:e})=>e.materialText},
                inset 1px 1px 0px 1px ${({theme:e})=>e.materialDark};
  }

  div {
    display: flex;
    align-items: center;
    gap: 8px;
    justify-content: flex-start;
    width: 100%;
  }

  img, svg {
    width: 18px;
    height: 18px;
  }
`,wx=({label:e,isActive:t,onClick:n,windowId:r})=>{const o=Md.find(l=>l.id===r),i=o==null?void 0:o.Icon;return M.jsx(xx,{active:t,onClick:n,children:M.jsxs("div",{children:[i&&M.jsx(i,{variant:"16x16_4"}),M.jsx("span",{children:e})]})})},kx=[{name:"Python",category:"languages"},{name:"C#",category:"languages"},{name:"JavaScript",category:"languages"},{name:"Bootstrap",category:"frameworks & libraries"},{name:"PostgreSQL",category:"tools"},{name:"React",category:"frameworks & libraries"},{name:"Django",category:"frameworks & libraries"},{name:".NET",category:"frameworks & libraries"},{name:"Git",category:"tools"},{name:"Linux",category:"tools"}],Mx=[{name:"Che-Entende",description:"A real-time Bolivian Sign Language translation system using LSTM.",technologies:["Python","TensorFlow","OpenCV","Mediapipe","Matplotlib"]},{name:"Smells Fishy",description:"A URL phishing detection system utilizing machine learning algorithms for classification.",technologies:["Django","Python","Scikit-learn","Pandas","NumPy"]},{name:"Fierros & Bids",description:"A full-stack auction system for automobiles featuring AWS object recognition for automation.",technologies:["Bootstrap","JavaScript","Django","Amazon Rekognition"]}],bx=k.div`
  padding: 0 16px;
  height: 100%;
  display: flex;
  align-items: center;
  border-left: 2px solid #888;
`,Ex=()=>{const[e,t]=y.useState(new Date);return y.useEffect(()=>{const n=setInterval(()=>{t(new Date)},1e3);return()=>clearInterval(n)},[]),M.jsx(bx,{children:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})})},Sx=k.div`
  min-height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  background-color: #008080;
`,_x=k.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 140px;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding: 10px;
    gap: 15px;
  }
`,Ax=k.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`,$x=k.div`
  display: flex;
  flex: 1;
  margin: 0 4px;
  overflow-x: auto;
  
  &::-webkit-scrollbar {
    display: none;
  }
`,Cx=()=>{const[e,t]=y.useState({about:!0,projects:!1,skills:!1,contact:!1,blog:!1}),[n,r]=y.useState(!1),o=s=>{t(h=>h[s]?{...h,[s]:!1}:{...Object.keys(h).reduce((m,g)=>({...m,[g]:!1}),{}),[s]:!0}),r(!1)},i=()=>{r(!n)},l=()=>{window.open("https://github.com/agust1np","_blank"),r(!1)},a=s=>{switch(s){case"about":return"About Me";case"projects":return"Projects";case"skills":return"Skills";case"contact":return"Contact";case"blog":return"Blog";default:return s}};return M.jsxs(Sx,{children:[M.jsx(_x,{children:Md.map(s=>M.jsx(sx,{icon:s,onClick:()=>o(s.id)},s.id))}),M.jsx(yx,{openWindows:e,toggleWindow:o,skills:kx,projects:Mx,isStartOpen:n}),M.jsx(Ax,{children:M.jsx(Jm,{style:{position:"relative"},children:M.jsxs(Vi,{style:{justifyContent:"space-between",position:"relative"},children:[M.jsxs("div",{style:{display:"flex",alignItems:"center",flex:1},children:[M.jsxs(Ze,{onClick:i,active:n,style:{fontWeight:"bold"},children:[M.jsx("img",{src:"https://win98icons.alexmeub.com/icons/png/windows-0.png",alt:"windows-logo",style:{marginRight:4,width:20,height:20}}),"Start"]}),M.jsx($x,{children:Object.entries(e).filter(([s,h])=>h).map(([s])=>M.jsx(wx,{label:a(s),isActive:e[s],onClick:()=>o(s),windowId:s},s))}),n&&M.jsxs(y1,{style:{position:"absolute",left:"0",bottom:"100%"},children:[M.jsxs(Hi,{onClick:l,children:[M.jsx("span",{style:{marginRight:"8px"},children:M.jsx(ey,{variant:"32x32_4"})}),"GitHub Profile"]}),M.jsxs(Hi,{onClick:()=>window.location.reload(),children:[M.jsx("img",{src:"https://win98icons.alexmeub.com/icons/png/shut_down_normal-4.png",alt:"shutdown",style:{marginRight:8,width:32,height:32}}),"Restart"]})]})]}),M.jsx(Ex,{})]})})})]})},Tx="modulepreload",Ix=function(e){return"/portfolio/"+e},lu={},Mt=function(t,n,r){let o=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),a=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));o=Promise.allSettled(n.map(s=>{if(s=Ix(s),s in lu)return;lu[s]=!0;const h=s.endsWith(".css"),p=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${p}`))return;const m=document.createElement("link");if(m.rel=h?"stylesheet":Tx,h||(m.as="script"),m.crossOrigin="",m.href=s,a&&m.setAttribute("nonce",a),document.head.appendChild(m),h)return new Promise((g,x)=>{m.addEventListener("load",g),m.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${s}`)))})}))}function i(l){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=l,window.dispatchEvent(a),!a.defaultPrevented)throw l}return o.then(l=>{for(const a of l||[])a.status==="rejected"&&i(a.reason);return t().catch(i)})},bd={BONZI:"Bonzi",CLIPPY:"Clippy",F1:"F1",GENIE:"Genie",GENIUS:"Genius",LINKS:"Links",MERLIN:"Merlin",PEEDY:"Peedy",ROCKY:"Rocky",ROVER:"Rover"};function Px(e){switch(e){case"./agents/Bonzi.js":return Mt(()=>import("./Bonzi-HfDDQJRW-DD2Qj5OP.js"),[]);case"./agents/Clippy.js":return Mt(()=>import("./Clippy-B4VEFjzh-BJkhDu0o.js"),[]);case"./agents/F1.js":return Mt(()=>import("./F1-Cqq3yhCS-Cg7V-M2e.js"),[]);case"./agents/Genie.js":return Mt(()=>import("./Genie-Dbln_hPv-B6211V7d.js"),[]);case"./agents/Genius.js":return Mt(()=>import("./Genius-BxD5MS4q-CzQkrRYh.js"),[]);case"./agents/Links.js":return Mt(()=>import("./Links-D5NViJfS-C6ZBi7ll.js"),[]);case"./agents/Merlin.js":return Mt(()=>import("./Merlin-CJslj-y0-x1z2BeFC.js"),[]);case"./agents/Peedy.js":return Mt(()=>import("./Peedy-ChzvDyrV-B-Dc9HWJ.js"),[]);case"./agents/Rocky.js":return Mt(()=>import("./Rocky-hb9BA-ri-BuAKmDHe.js"),[]);case"./agents/Rover.js":return Mt(()=>import("./Rover-Cjo-aaVE-D_mHJg_X.js"),[]);default:return new Promise(function(t,n){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(n.bind(null,new Error("Unknown variable dynamic import: "+e)))})}}var Ur=function(e){this._queue=[],this._onEmptyCallback=e};Ur.prototype.queue=function(e){this._queue.push(e),this._queue.length!==1||this._active||this._progressQueue()},Ur.prototype._progressQueue=function(){if(this._queue.length){var e=this._queue.shift();this._active=!0;var t=this.next.bind(this);e&&e(t)}else this._onEmptyCallback()},Ur.prototype.clear=function(){this._queue=[]},Ur.prototype.next=function(){this._active=!1,this._progressQueue()};var ge=function(e,t,n){this._el=e,this._data=t.config,this._path=t.image,this._currentFrameIndex=0,this._currentFrame=void 0,this._exiting=!1,this._currentAnimation=void 0,this._endCallback=void 0,this._started=!1,this._sounds={},this.currentAnimationName=void 0,this.preloadSounds(n),this._overlays=[this._el];var r=this._el;this._setupElement(this._el);for(var o=1;o<this._data.overlayCount;o++){var i=document.createElement("div"),l=this._setupElement(i);r.append(l),this._overlays.push(l),r=l}};ge.prototype._setupElement=function(e){var t=this._data.framesize;return e.style.display="none",e.style.width=t[0]+"px",e.style.height=t[1]+"px",e.style.background="url('"+this._path+"') no-repeat",e},ge.prototype.animations=function(){var e=[],t=this._data.animations;for(var n in t)e.push(n);return e},ge.prototype.preloadSounds=function(e){},ge.prototype.hasAnimation=function(e){return!!this._data.animations[e]},ge.prototype.exitAnimation=function(){this._exiting=!0},ge.prototype.showAnimation=function(e,t){return this._exiting=!1,!!this.hasAnimation(e)&&(this._currentAnimation=this._data.animations[e],this.currentAnimationName=e,this._started||(this._step(),this._started=!0),this._currentFrameIndex=0,this._currentFrame=void 0,this._endCallback=t,!0)},ge.prototype._draw=function(){var e=[];this._currentFrame&&(e=this._currentFrame.images||[]);for(var t=0;t<this._overlays.length;t++)if(t<e.length){var n=e[t],r=-n[0]+"px "+-n[1]+"px";this._overlays[t].style.backgroundPosition=r,this._overlays[t].style.display="block"}else this._overlays[t].style.display="none"},ge.prototype._getNextAnimationFrame=function(){if(!this._currentAnimation||!this._currentFrame)return 0;var e=this._currentFrame,t=this._currentFrame.branching;if(this._exiting&&e.exitBranch!==void 0)return e.exitBranch;if(t)for(var n=100*Math.random(),r=0;r<t.branches.length;r++){var o=t.branches[r];if(n<=o.weight)return o.frameIndex;n-=o.weight}return this._currentFrameIndex+1},ge.prototype._playSound=function(){var e,t=(e=this._currentFrame)===null||e===void 0?void 0:e.sound;if(t){var n=this._sounds[t];n&&n.play()}},ge.prototype._atLastFrame=function(){return!!this._currentAnimation&&this._currentFrameIndex>=this._currentAnimation.frames.length-1},ge.prototype._step=function(){if(this._currentAnimation){var e=Math.min(this._getNextAnimationFrame(),this._currentAnimation.frames.length-1),t=!this._currentFrame||this._currentFrameIndex!==e;this._currentFrameIndex=e,this._atLastFrame()&&this._currentAnimation.useExitBranching||(this._currentFrame=this._currentAnimation.frames[this._currentFrameIndex]),this._draw(),this._playSound(),this._loop=window.setTimeout(this._step.bind(this),this._currentFrame.duration),this._endCallback&&t&&this._atLastFrame()&&(this._currentAnimation.useExitBranching&&!this._exiting?this._endCallback(this.currentAnimationName,ge.States.WAITING):this._endCallback(this.currentAnimationName,ge.States.EXITED))}},ge.prototype.pause=function(){window.clearTimeout(this._loop)},ge.prototype.resume=function(){this._step()},ge.States={WAITING:1,EXITED:0};var nl=function(){var e=window.pageXOffset!==void 0,t=(document.compatMode||"")==="CSS1Compat";return{scrollLeft:e?window.pageXOffset:t?document.documentElement.scrollLeft:document.body.scrollLeft,scrollTop:e?window.pageYOffset:t?document.documentElement.scrollTop:document.body.scrollTop}};function eo(e){if(!e.getClientRects().length)return{top:0,left:0};var t=e.getBoundingClientRect(),n=e.ownerDocument.defaultView||{pageXOffset:0,pageYOffset:0};return{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}}function to(e,t){if(t==="inner")return e.clientWidth;if(t==="outer")return e.offsetWidth;var n=window.getComputedStyle(e,null);return t==="width"?e.clientWidth-parseInt(n.getPropertyValue("padding-left"))-parseInt(n.getPropertyValue("padding-right")):t==="full"?e.offsetWidth+parseInt(n.getPropertyValue("margin-left"))+parseInt(n.getPropertyValue("margin-right")):null}function no(e,t){if(t==="inner")return e.clientHeight;if(t==="outer")return e.offsetHeight;var n=window.getComputedStyle(e,null);return t==="height"?e.clientHeight-parseInt(n.getPropertyValue("padding-top"))-parseInt(n.getPropertyValue("padding-bottom")):t==="full"?e.offsetHeight+parseInt(n.getPropertyValue("margin-top"))+parseInt(n.getPropertyValue("margin-bottom")):null}var jx=function(){var e=this;this.promise=new Promise(function(t,n){e.resolve=t,e.reject=n})},Ke=function(e){this._hiding=null,this._loop=null,this._active=!0,this._hold=!1,this._addWord=null,this._targetEl=e,this._hidden=!0,this._setup()};Ke.prototype._setup=function(){var e=document.createElement("div");e.className="clippy-balloon",e.setAttribute("hidden","true");var t=document.createElement("div");t.className="clippy-tip";var n=document.createElement("div");n.className="clippy-content",e.appendChild(t),e.appendChild(n),this._balloon=e,this._content=n,this._targetEl.insertAdjacentElement("afterend",e)},Ke.prototype.reposition=function(){for(var e=["top-left","top-right","bottom-left","bottom-right"],t=0;t<e.length;t++){var n=e[t];if(this._position(n),!this._isOut())break}},Ke.prototype._position=function(e){if(this._balloon){var t=eo(this._targetEl),n=no(this._targetEl,"height"),r=to(this._targetEl,"width"),o=nl(),i=o.scrollLeft,l=o.scrollTop;t.top-=i,t.left-=l;var a=no(this._balloon,"outer"),s=to(this._balloon,"outer");this._balloon.classList.remove("clippy-top-left"),this._balloon.classList.remove("clippy-top-right"),this._balloon.classList.remove("clippy-bottom-right"),this._balloon.classList.remove("clippy-bottom-left");var h=0,p=0;switch(e){case"top-left":h=t.left+r-s,p=t.top-a-15;break;case"top-right":h=t.left,p=t.top-a-15;break;case"bottom-right":h=t.left,p=t.top+n+15;break;case"bottom-left":h=t.left+r-s,p=t.top+n+15}this._balloon.style.top=p+"px",this._balloon.style.left=h+"px",this._balloon.classList.add("clippy-"+e)}},Ke.prototype._isOut=function(){if(this._balloon){var e=eo(this._balloon),t=no(this._balloon,"outer"),n=to(this._balloon,"outer"),r=document.querySelector("html").clientWidth,o=document.querySelector("html").clientHeight,i=nl(),l=i.scrollLeft,a=i.scrollTop,s=e.top-l,h=e.left-a;return s-5<0||h-5<0||s+t+5>o||h+n+5>r}},Ke.prototype.speak=function(e,t,n){this._hidden=!1,this.show();var r=this._content;r&&(r.style.height="auto",r.style.width="auto",r.innerHTML=t,r.style.height=r.style.height||"",r.style.width=r.style.width||"",r.innerHTML="",this.reposition(),this._complete=e,this._sayWords(t,n,e))},Ke.prototype.show=function(){this._balloon&&(this._hidden||this._balloon.removeAttribute("hidden"))},Ke.prototype.hide=function(e){var t;e?(t=this._balloon)===null||t===void 0||t.setAttribute("hidden","true"):this._hiding=window.setTimeout(this._finishHideBalloon.bind(this),2e3)},Ke.prototype._finishHideBalloon=function(){var e;this._active||((e=this._balloon)===null||e===void 0||e.setAttribute("hidden","true"),this._hidden=!0,this._hiding=null)},Ke.prototype._sayWords=function(e,t,n){var r=this;this._active=!0,this._hold=t;var o=e.split(/[^\S-]/),i=this._content,l=1;this._addWord=function(){var a;r._active&&(l>o.length?(r._addWord=null,r._active=!1,r._hold||(n(),r.hide(!1))):(i&&(i.innerHTML=o.slice(0,l).join(" ")),l++,r._loop=window.setTimeout((a=r._addWord)===null||a===void 0?void 0:a.bind(r),200)))},this._addWord()},Ke.prototype.close=function(){this._active?this._hold=!1:this._hold&&this._complete&&this._complete()},Ke.prototype.pause=function(){this._loop&&window.clearTimeout(this._loop),this._hiding&&(window.clearTimeout(this._hiding),this._hiding=null)},Ke.prototype.resume=function(){this._addWord?this._addWord():this._hold||this._hidden||(this._hiding=window.setTimeout(this._finishHideBalloon.bind(this),2e3))};var Z=function(e){this._hidden=!1,this._offset={top:0,left:0};var t=e.agent,n=e.selector;this._queue=new Ur(this._onQueueEmpty.bind(this));var r=document.createElement("div");r.className="clippy",r.setAttribute("hidden","true"),this._el=r,((n?document.getElementsByClassName(n)[0]:void 0)||document.body).appendChild(this._el),this._animator=new ge(this._el,t,[]),this._balloon=new Ke(this._el),this._setupEvents()};function bt(e){return new Promise(function(t,n){Px("./agents/"+e+".js").then(function(r){t(r.default)}).catch(function(r){n(r)})})}Z.prototype.gestureAt=function(e,t){var n=this._getDirection(e,t),r="Gesture"+n,o="Look"+n,i=this.hasAnimation(r)?r:o;return this.play(i)},Z.prototype.hide=function(e,t){var n=this;return this._hidden=!0,this._el,this.stop(),e?(this._el.setAttribute("hidden","true"),this.stop(),this.pause(),void(t&&t())):this._playInternal("Hide",function(){n._el.setAttribute("hidden","true"),n.pause(),t&&t()})},Z.prototype.moveTo=function(e,t,n){var r=this,o="Move"+this._getDirection(e,t);n===void 0&&(n=1e3),this._addToQueue(function(i){if(n===0)return r._el.style.top=t+"px",r._el.style.left=e+"px",r.reposition(),void i();if(!r.hasAnimation(o)){var l=function(){r._el.removeEventListener("animationend",l),i()};return r._el.addEventListener("animationend",l),void r._el.animate({top:t,left:e},{duration:n,iterations:1})}r._playInternal(o,function(a,s){if(s===ge.States.EXITED&&i(),s===ge.States.WAITING){var h=function(){r._el.removeEventListener("animationend",h),r._animator.exitAnimation()};r._el.addEventListener("animationend",h),r._el.animate({top:t,left:e},{duration:n,iterations:1})}})},this)},Z.prototype._playInternal=function(e,t){var n=this;this._isIdleAnimation()&&this._idleDfd&&this._idleDfd.promise.finally(function(){n._playInternal(e,t)}),this._animator.showAnimation(e,t)},Z.prototype.play=function(e,t,n){var r=this;return!!this.hasAnimation(e)&&(t===void 0&&(t=5e3),this._addToQueue(function(o){var i=!1;t&&window.setTimeout(function(){i||r._animator.exitAnimation()},t),r._playInternal(e,function(l,a){a===ge.States.EXITED&&(i=!0,n&&n(),o())})},this),!0)},Z.prototype.show=function(e){if(this._hidden=!1,e)return this._el.removeAttribute("hidden"),this.resume(),void this._onQueueEmpty();var t=this._el.style.top,n=this._el.style.left;if(t==="auto"||n!=="auto"){var r=.8*document.querySelector("html").clientWidth,o=.8*(document.querySelector("html").clientHeight+nl().scrollLeft);this._el.style.top=o+"px",this._el.style.left=r+"px"}return this.resume(),this.play("Show")},Z.prototype.speak=function(e,t){var n=this;this._addToQueue(function(r){n._balloon.speak(r,e,t)},this)},Z.prototype.closeBalloon=function(){this._balloon.hide()},Z.prototype.delay=function(e){var t=this;e=e||250,this._addToQueue(function(n){t._onQueueEmpty(),window.setTimeout(n,e)})},Z.prototype.stopCurrent=function(){this._animator.exitAnimation(),this._balloon.close()},Z.prototype.stop=function(){this._queue.clear(),this._animator.exitAnimation(),this._balloon.hide()},Z.prototype.hasAnimation=function(e){return this._animator.hasAnimation(e)},Z.prototype.animations=function(){return this._animator.animations()},Z.prototype.animate=function(){var e=this.animations(),t=e[Math.floor(Math.random()*e.length)];return t.indexOf("Idle")===0?this.animate():this.play(t)},Z.prototype._getDirection=function(e,t){var n=eo(this._el),r=no(this._el,"height"),o=to(this._el,"width"),i=n.left+o/2,l=n.top+r/2-t,a=i-e,s=Math.round(180*Math.atan2(l,a)/Math.PI);return-45<=s&&s<45?"Right":45<=s&&s<135?"Up":135<=s&&s<=180||-180<=s&&s<-135?"Left":-135<=s&&s<-45?"Down":"Top"},Z.prototype._onQueueEmpty=function(){if(!this._hidden&&!this._isIdleAnimation()){var e=this._getIdleAnimation();this._idleDfd=new jx,this._animator.showAnimation(e,this._onIdleComplete.bind(this))}},Z.prototype._onIdleComplete=function(e,t){var n;t===ge.States.EXITED&&((n=this._idleDfd)===null||n===void 0||n.resolve(void 0))},Z.prototype._isIdleAnimation=function(){var e=this._animator.currentAnimationName;return e&&e.indexOf("Idle")===0},Z.prototype._getIdleAnimation=function(){for(var e=this.animations(),t=[],n=0;n<e.length;n++){var r=e[n];r.indexOf("Idle")===0&&t.push(r)}return t[Math.floor(Math.random()*t.length)]},Z.prototype._setupEvents=function(){window.addEventListener("resize",this.reposition.bind(this)),this._el.addEventListener("mousedown",this._onMouseDown.bind(this)),this._el.addEventListener("dblclick",this._onDoubleClick.bind(this))},Z.prototype._onDoubleClick=function(){this.play("ClickedOn")||this.animate()},Z.prototype.reposition=function(){if(this._el.getAttribute("hidden")==="true"){var e=eo(this._el),t=no(this._el,"outer"),n=to(this._el,"outer"),r=document.querySelector("html").clientWidth,o=document.querySelector("html").clientHeight,i=nl(),l=i.scrollLeft,a=i.scrollTop,s=e.top-l,h=e.left-a;s-5<0?s=5:s+t+5>o&&(s=o-t-5),h-5<0?h=5:h+n+5>r&&(h=r-n-5),this._el.style.left=h+"px",this._el.style.top=s+"px",this._balloon.reposition()}},Z.prototype._onMouseDown=function(e){e.preventDefault(),this._startDrag(e)},Z.prototype._startDrag=function(e){this.pause(),this._balloon.hide(!0),this._offset=this._calculateClickOffset(e),this._moveHandle=this._dragMove.bind(this),this._upHandle=this._finishDrag.bind(this),window.addEventListener("mousemove",this._moveHandle),window.addEventListener("mouseup",this._upHandle),this._dragUpdateLoop=window.setTimeout(this._updateLocation.bind(this),10)},Z.prototype._calculateClickOffset=function(e){var t=e.pageX,n=e.pageY,r=eo(this._el);return{top:n-r.top,left:t-r.left}},Z.prototype._updateLocation=function(){this._el.style.top=(this._targetY||0)+"px",this._el.style.left=(this._targetX||0)+"px",this._dragUpdateLoop=window.setTimeout(this._updateLocation.bind(this),10)},Z.prototype._dragMove=function(e){e.preventDefault();var t=e.clientX-this._offset.left,n=e.clientY-this._offset.top;this._targetX=t,this._targetY=n},Z.prototype._finishDrag=function(){window.clearTimeout(this._dragUpdateLoop),this._moveHandle&&window.removeEventListener("mousemove",this._moveHandle),this._upHandle&&window.removeEventListener("mouseup",this._upHandle),this._balloon.show(),this.reposition(),this.resume()},Z.prototype._addToQueue=function(e,t){t&&(e=e.bind(t)),this._queue.queue(e)},Z.prototype.pause=function(){this._animator.pause(),this._balloon.pause()},Z.prototype.resume=function(){this._animator.resume(),this._balloon.resume()};var Ox={Bonzi:function(){return bt("Bonzi")},Clippy:function(){return bt("Clippy")},F1:function(){return bt("F1")},Genie:function(){return bt("Genie")},Genius:function(){return bt("Genius")},Links:function(){return bt("Links")},Merlin:function(){return bt("Merlin")},Peedy:function(){return bt("Peedy")},Rocky:function(){return bt("Rocky")},Rover:function(){return bt("Rover")}},au=[],Dr=[];(function(e,t){if(e&&typeof document<"u"){var n,r=t.prepend===!0?"prepend":"append",o=t.singleTag===!0,i=typeof t.container=="string"?document.querySelector(t.container):document.getElementsByTagName("head")[0];if(o){var l=au.indexOf(i);l===-1&&(l=au.push(i)-1,Dr[l]={}),n=Dr[l]&&Dr[l][r]?Dr[l][r]:Dr[l][r]=a()}else n=a();e.charCodeAt(0)===65279&&(e=e.substring(1)),n.styleSheet?n.styleSheet.cssText+=e:n.appendChild(document.createTextNode(e))}function a(){var s=document.createElement("style");if(s.setAttribute("type","text/css"),t.attributes)for(var h=Object.keys(t.attributes),p=0;p<h.length;p++)s.setAttribute(h[p],t.attributes[h[p]]);var m=r==="prepend"?"afterbegin":"beforeend";return i.insertAdjacentElement(m,s),s}})(`.clippy, .clippy-balloon {
    position: fixed;
    z-index: 1000;
    cursor: pointer;
}

.clippy-balloon {

    background: #FFC;
    color: black;
    padding: 8px;
    border: 1px solid black;
    border-radius: 5px;

}

.clippy-content {
    max-width: 200px;
    min-width: 120px;
    font-family: "Microsoft Sans", sans-serif;
    font-size: 10pt;
}

.clippy-tip {
    width: 10px;
    height: 16px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAgCAMAAAAlvKiEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAlQTFRF///MAAAA////52QwgAAAAAN0Uk5T//8A18oNQQAAAGxJREFUeNqs0kEOwCAIRFHn3//QTUU6xMyyxii+jQosrTPkyPEM6IN3FtzIRk1U4dFeKWQiH6pRRowMVKEmvronEynkwj0uZJgR22+YLopPSo9P34wJSamLSU7lSIWLJU7NkNomNlhqxUeAAQC+TQLZyEuJBwAAAABJRU5ErkJggg==) no-repeat;
    position: absolute;
}

.clippy-top-left .clippy-tip {
    top: 100%;
    margin-top: 0px;
    left: 100%;
    margin-left: -50px;
}

.clippy-top-right .clippy-tip {
    top: 100%;
    margin-top: 0px;
    left: 0;
    margin-left: 50px;
    background-position: -10px 0;

}

.clippy-bottom-right .clippy-tip {
    top: 0;
    margin-top: -16px;
    left: 0;
    margin-left: 50px;
    background-position: -10px -16px;
}

.clippy-bottom-left .clippy-tip {
    top: 0;
    margin-top: -16px;
    left: 100%;
    margin-left: -50px;
    background-position: 0px -16px;
}

`,{});var Lx={load:function(e){var t=e||{},n=t.name,r=t.successCb,o=t.failCb,i=t.selector;Ox[n]().then(function(l){var a=new Z({agent:l,selector:i});r&&r(a)}).catch(function(l){o&&o(l)})},agents:{}};const Rx=`
.clippy, .clippy-balloon {
  position: fixed;
  z-index: 1000;
  cursor: pointer;
}

.clippy-balloon {
  background: #FFC;
  color: black;
  padding: 8px;
  border: 1px solid black;
  border-radius: 5px;
}

.clippy-content {
  max-width: 200px;
  min-width: 120px;
  font-family: 'MS Sans Serif';
  font-size: 12px;
}

.clippy-button {
  background-color: transparent;
  border: 1px solid #d5d1b5;
  margin-top: 10px;
  border-radius: 4px;
  padding: 4px 14px;
  font-size: 12px;
}

.clippy-tip {
  width: 10px;
  height: 16px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAgCAMAAAAlvKiEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAlQTFRF///MAAAA////52QwgAAAAAN0Uk5T//8A18oNQQAAAGxJREFUeNqs0kEOwCAIRFHn3//QTUU6xMyyxii+jQosrTPkyPEM6IN3FtzIRk1U4dFeKWQiH6pRRowMVKEmvronEynkwj0uZJgR22+YLopPSo9P34wJSamLSU7lSIWLJU7NkNomNlhqxUeAAQC+TQLZyEuJBwAAAABJRU5ErkJggg==) no-repeat;
  position: absolute;
}

.clippy-top-left .clippy-tip {
  top: 100%;
  margin-top: 0px;
  left: 100%;
  margin-left: -50px;
}

.clippy-top-right .clippy-tip {
  top: 100%;
  margin-top: 0px;
  left: 0;
  margin-left: 50px;
  background-position: -10px 0;
}

.clippy-bottom-right .clippy-tip {
  top: 0;
  margin-top: -16px;
  left: 0;
  margin-left: 50px;
  background-position: -10px -16px;
}

.clippy-bottom-left .clippy-tip {
  top: 0;
  margin-top: -16px;
  left: 100%;
  margin-left: -50px;
  background-position: 0px -16px;
}
`,Dx=Rx.trim(),Ed=y.createContext({clippy:void 0});let su;const Nx=({children:e,agentName:t=bd.CLIPPY})=>{const[n,r]=y.useState();function o(i,l){i==null||i.hide(!1,()=>{l&&l()})}return y.useEffect(()=>{const{head:i}=document,l=document.createElement("style");return l.appendChild(document.createTextNode(Dx)),i.appendChild(l),()=>o(su,()=>{i.removeChild(l)})},[]),y.useEffect(()=>{function i(){Lx.load({name:t,successCb:l=>{l.show(!1),r(l),su=l},failCb:l=>{console.error(l),r(void 0)}})}n?o(n,()=>i()):i()},[t]),u.createElement(Ed.Provider,{value:{clippy:n}},e)},zx=()=>y.useContext(Ed),Bx=k.div`
  position: fixed !important;
  right: 100px !important;
  bottom: 60px !important;
  z-index: 9999;
  pointer-events: none !important;

  & > div {
    position: static !important;
    pointer-events: none !important;
    transform: none !important;
    
    & * {
      pointer-events: none !important;
    }
  }
`,hu=["Welcome to my retro portfolio!","Want to see my projects? Click on Projects.exe!","You can find my skills in Skills.exe!","Feel free to contact me through Contact.exe!","Want to know more about me? Open About Me.txt!","You can drag me around the screen!","Have you read my blog? There are interesting stories there!"],uu=["Congratulate","Wave","GetAttention","Explain"],Fx=()=>{const{clippy:e}=zx(),t=y.useRef(!1),n=y.useRef(null);return y.useRef(!1),y.useEffect(()=>{var l;if(!e||t.current)return;t.current=!0;const r=document.querySelector(".clippy");if(!r){console.error("No se encontró el elemento .clippy en el DOM");return}const o=document.createElement("div");o.className="clippy-container",(l=r.parentElement)==null||l.insertBefore(o,r),o.appendChild(r);const i=()=>{if(!e||!t.current)return;const a=hu[Math.floor(Math.random()*hu.length)],s=uu[Math.floor(Math.random()*uu.length)];e.speak(a,!1),e.play(s)};return n.current=window.setInterval(i,7e3),()=>{n.current&&(clearInterval(n.current),n.current=null),e&&e.hide(!0,()=>{}),t.current=!1}},[e]),M.jsx(Bx,{className:"clippy-container"})},Wx=Zm`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    height: -webkit-fill-available;
  }

  body {
    min-height: 100vh;
    min-height: -webkit-fill-available;
    margin: 0;
    padding: 0;
    background: #000;
  }

  #root {
    min-height: 100vh;
    min-height: -webkit-fill-available;
  }
`,Ux=Zm`
  ${qp}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('https://cdn.jsdelivr.net/npm/react95@4.0.0/dist/fonts/ms_sans_serif.woff2') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('https://cdn.jsdelivr.net/npm/react95@4.0.0/dist/fonts/ms_sans_serif_bold.woff2') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
    background: #008080;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
`;function Hx(){return M.jsxs(Xp,{theme:B2,children:[M.jsx(Ux,{}),M.jsx(Wx,{}),M.jsxs(Nx,{agentName:bd.GENIUS,children:[M.jsx(Cx,{}),M.jsx(Fx,{})]})]})}const Sd=document.getElementById("root");if(!Sd)throw new Error("Root element not found");const Qx=y.StrictMode;Sm(Sd).render(M.jsx(Qx,{children:M.jsx(Hx,{})}));
