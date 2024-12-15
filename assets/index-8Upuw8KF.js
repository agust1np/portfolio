(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function s1(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var u1={exports:{}},qi={},c1={exports:{}},V={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eo=Symbol.for("react.element"),bm=Symbol.for("react.portal"),Em=Symbol.for("react.fragment"),Sm=Symbol.for("react.strict_mode"),Mm=Symbol.for("react.profiler"),Am=Symbol.for("react.provider"),_m=Symbol.for("react.context"),$m=Symbol.for("react.forward_ref"),Cm=Symbol.for("react.suspense"),Tm=Symbol.for("react.memo"),Im=Symbol.for("react.lazy"),wu=Symbol.iterator;function Pm(e){return e===null||typeof e!="object"?null:(e=wu&&e[wu]||e["@@iterator"],typeof e=="function"?e:null)}var h1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},d1=Object.assign,m1={};function kr(e,t,n){this.props=e,this.context=t,this.refs=m1,this.updater=n||h1}kr.prototype.isReactComponent={};kr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};kr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function f1(){}f1.prototype=kr.prototype;function hs(e,t,n){this.props=e,this.context=t,this.refs=m1,this.updater=n||h1}var ds=hs.prototype=new f1;ds.constructor=hs;d1(ds,kr.prototype);ds.isPureReactComponent=!0;var ku=Array.isArray,p1=Object.prototype.hasOwnProperty,ms={current:null},g1={key:!0,ref:!0,__self:!0,__source:!0};function v1(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)p1.call(t,r)&&!g1.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:Eo,type:e,key:i,ref:l,props:o,_owner:ms.current}}function Lm(e,t){return{$$typeof:Eo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function fs(e){return typeof e=="object"&&e!==null&&e.$$typeof===Eo}function Rm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var bu=/\/+/g;function Al(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Rm(""+e.key):t.toString(36)}function qo(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Eo:case bm:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+Al(l,0):r,ku(o)?(n="",e!=null&&(n=e.replace(bu,"$&/")+"/"),qo(o,t,n,"",function(u){return u})):o!=null&&(fs(o)&&(o=Lm(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(bu,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",ku(e))for(var a=0;a<e.length;a++){i=e[a];var s=r+Al(i,a);l+=qo(i,t,n,s,o)}else if(s=Pm(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=r+Al(i,a++),l+=qo(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Co(e,t,n){if(e==null)return e;var r=[],o=0;return qo(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Dm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Fe={current:null},ei={transition:null},jm={ReactCurrentDispatcher:Fe,ReactCurrentBatchConfig:ei,ReactCurrentOwner:ms};function y1(){throw Error("act(...) is not supported in production builds of React.")}V.Children={map:Co,forEach:function(e,t,n){Co(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Co(e,function(){t++}),t},toArray:function(e){return Co(e,function(t){return t})||[]},only:function(e){if(!fs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};V.Component=kr;V.Fragment=Em;V.Profiler=Mm;V.PureComponent=hs;V.StrictMode=Sm;V.Suspense=Cm;V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jm;V.act=y1;V.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=d1({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=ms.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)p1.call(t,s)&&!g1.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Eo,type:e.type,key:o,ref:i,props:r,_owner:l}};V.createContext=function(e){return e={$$typeof:_m,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Am,_context:e},e.Consumer=e};V.createElement=v1;V.createFactory=function(e){var t=v1.bind(null,e);return t.type=e,t};V.createRef=function(){return{current:null}};V.forwardRef=function(e){return{$$typeof:$m,render:e}};V.isValidElement=fs;V.lazy=function(e){return{$$typeof:Im,_payload:{_status:-1,_result:e},_init:Dm}};V.memo=function(e,t){return{$$typeof:Tm,type:e,compare:t===void 0?null:t}};V.startTransition=function(e){var t=ei.transition;ei.transition={};try{e()}finally{ei.transition=t}};V.unstable_act=y1;V.useCallback=function(e,t){return Fe.current.useCallback(e,t)};V.useContext=function(e){return Fe.current.useContext(e)};V.useDebugValue=function(){};V.useDeferredValue=function(e){return Fe.current.useDeferredValue(e)};V.useEffect=function(e,t){return Fe.current.useEffect(e,t)};V.useId=function(){return Fe.current.useId()};V.useImperativeHandle=function(e,t,n){return Fe.current.useImperativeHandle(e,t,n)};V.useInsertionEffect=function(e,t){return Fe.current.useInsertionEffect(e,t)};V.useLayoutEffect=function(e,t){return Fe.current.useLayoutEffect(e,t)};V.useMemo=function(e,t){return Fe.current.useMemo(e,t)};V.useReducer=function(e,t,n){return Fe.current.useReducer(e,t,n)};V.useRef=function(e){return Fe.current.useRef(e)};V.useState=function(e){return Fe.current.useState(e)};V.useSyncExternalStore=function(e,t,n){return Fe.current.useSyncExternalStore(e,t,n)};V.useTransition=function(){return Fe.current.useTransition()};V.version="18.3.1";c1.exports=V;var v=c1.exports;const h=s1(v);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Om=v,Nm=Symbol.for("react.element"),zm=Symbol.for("react.fragment"),Bm=Object.prototype.hasOwnProperty,Fm=Om.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Wm={key:!0,ref:!0,__self:!0,__source:!0};function x1(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Bm.call(t,r)&&!Wm.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Nm,type:e,key:i,ref:l,props:o,_owner:Fm.current}}qi.Fragment=zm;qi.jsx=x1;qi.jsxs=x1;u1.exports=qi;var A=u1.exports,w1={exports:{}},tt={},k1={exports:{}},b1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,P){var D=_.length;_.push(P);e:for(;0<D;){var G=D-1>>>1,U=_[G];if(0<o(U,P))_[G]=P,_[D]=U,D=G;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var P=_[0],D=_.pop();if(D!==P){_[0]=D;e:for(var G=0,U=_.length,O=U>>>1;G<O;){var N=2*(G+1)-1,K=_[N],z=N+1,H=_[z];if(0>o(K,D))z<U&&0>o(H,K)?(_[G]=H,_[z]=D,G=z):(_[G]=K,_[N]=D,G=N);else if(z<U&&0>o(H,D))_[G]=H,_[z]=D,G=z;else break e}}return P}function o(_,P){var D=_.sortIndex-P.sortIndex;return D!==0?D:_.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],u=[],p=1,d=null,g=3,y=!1,w=!1,b=!1,T=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(_){for(var P=n(u);P!==null;){if(P.callback===null)r(u);else if(P.startTime<=_)r(u),P.sortIndex=P.expirationTime,t(s,P);else break;P=n(u)}}function x(_){if(b=!1,f(_),!w)if(n(s)!==null)w=!0,we(S);else{var P=n(u);P!==null&&ke(x,P.startTime-_)}}function S(_,P){w=!1,b&&(b=!1,m(I),I=-1),y=!0;var D=g;try{for(f(P),d=n(s);d!==null&&(!(d.expirationTime>P)||_&&!q());){var G=d.callback;if(typeof G=="function"){d.callback=null,g=d.priorityLevel;var U=G(d.expirationTime<=P);P=e.unstable_now(),typeof U=="function"?d.callback=U:d===n(s)&&r(s),f(P)}else r(s);d=n(s)}if(d!==null)var O=!0;else{var N=n(u);N!==null&&ke(x,N.startTime-P),O=!1}return O}finally{d=null,g=D,y=!1}}var E=!1,M=null,I=-1,B=5,j=-1;function q(){return!(e.unstable_now()-j<B)}function ee(){if(M!==null){var _=e.unstable_now();j=_;var P=!0;try{P=M(!0,_)}finally{P?de():(E=!1,M=null)}}else E=!1}var de;if(typeof c=="function")de=function(){c(ee)};else if(typeof MessageChannel<"u"){var me=new MessageChannel,se=me.port2;me.port1.onmessage=ee,de=function(){se.postMessage(null)}}else de=function(){T(ee,0)};function we(_){M=_,E||(E=!0,de())}function ke(_,P){I=T(function(){_(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){w||y||(w=!0,we(S))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(_){switch(g){case 1:case 2:case 3:var P=3;break;default:P=g}var D=g;g=P;try{return _()}finally{g=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,P){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var D=g;g=_;try{return P()}finally{g=D}},e.unstable_scheduleCallback=function(_,P,D){var G=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?G+D:G):D=G,_){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=D+U,_={id:p++,callback:P,priorityLevel:_,startTime:D,expirationTime:U,sortIndex:-1},D>G?(_.sortIndex=D,t(u,_),n(s)===null&&_===n(u)&&(b?(m(I),I=-1):b=!0,ke(x,D-G))):(_.sortIndex=U,t(s,_),w||y||(w=!0,we(S))),_},e.unstable_shouldYield=q,e.unstable_wrapCallback=function(_){var P=g;return function(){var D=g;g=P;try{return _.apply(this,arguments)}finally{g=D}}}})(b1);k1.exports=b1;var Um=k1.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hm=v,et=Um;function $(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var E1=new Set,no={};function jn(e,t){ur(e,t),ur(e+"Capture",t)}function ur(e,t){for(no[e]=t,e=0;e<t.length;e++)E1.add(t[e])}var zt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ia=Object.prototype.hasOwnProperty,Qm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Eu={},Su={};function Vm(e){return ia.call(Su,e)?!0:ia.call(Eu,e)?!1:Qm.test(e)?Su[e]=!0:(Eu[e]=!0,!1)}function Gm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Km(e,t,n,r){if(t===null||typeof t>"u"||Gm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function We(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var Re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Re[e]=new We(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Re[t]=new We(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Re[e]=new We(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Re[e]=new We(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Re[e]=new We(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Re[e]=new We(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Re[e]=new We(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Re[e]=new We(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Re[e]=new We(e,5,!1,e.toLowerCase(),null,!1,!1)});var ps=/[\-:]([a-z])/g;function gs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ps,gs);Re[t]=new We(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ps,gs);Re[t]=new We(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ps,gs);Re[t]=new We(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Re[e]=new We(e,1,!1,e.toLowerCase(),null,!1,!1)});Re.xlinkHref=new We("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Re[e]=new We(e,1,!1,e.toLowerCase(),null,!0,!0)});function vs(e,t,n,r){var o=Re.hasOwnProperty(t)?Re[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Km(t,n,o,r)&&(n=null),r||o===null?Vm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ut=Hm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,To=Symbol.for("react.element"),Wn=Symbol.for("react.portal"),Un=Symbol.for("react.fragment"),ys=Symbol.for("react.strict_mode"),la=Symbol.for("react.profiler"),S1=Symbol.for("react.provider"),M1=Symbol.for("react.context"),xs=Symbol.for("react.forward_ref"),aa=Symbol.for("react.suspense"),sa=Symbol.for("react.suspense_list"),ws=Symbol.for("react.memo"),Gt=Symbol.for("react.lazy"),A1=Symbol.for("react.offscreen"),Mu=Symbol.iterator;function Ar(e){return e===null||typeof e!="object"?null:(e=Mu&&e[Mu]||e["@@iterator"],typeof e=="function"?e:null)}var he=Object.assign,_l;function Or(e){if(_l===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);_l=t&&t[1]||""}return`
`+_l+e}var $l=!1;function Cl(e,t){if(!e||$l)return"";$l=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var s=`
`+o[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{$l=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Or(e):""}function Ym(e){switch(e.tag){case 5:return Or(e.type);case 16:return Or("Lazy");case 13:return Or("Suspense");case 19:return Or("SuspenseList");case 0:case 2:case 15:return e=Cl(e.type,!1),e;case 11:return e=Cl(e.type.render,!1),e;case 1:return e=Cl(e.type,!0),e;default:return""}}function ua(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Un:return"Fragment";case Wn:return"Portal";case la:return"Profiler";case ys:return"StrictMode";case aa:return"Suspense";case sa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case M1:return(e.displayName||"Context")+".Consumer";case S1:return(e._context.displayName||"Context")+".Provider";case xs:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ws:return t=e.displayName||null,t!==null?t:ua(e.type)||"Memo";case Gt:t=e._payload,e=e._init;try{return ua(e(t))}catch{}}return null}function Xm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ua(t);case 8:return t===ys?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function un(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _1(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Zm(e){var t=_1(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Io(e){e._valueTracker||(e._valueTracker=Zm(e))}function $1(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=_1(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function gi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ca(e,t){var n=t.checked;return he({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Au(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=un(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function C1(e,t){t=t.checked,t!=null&&vs(e,"checked",t,!1)}function ha(e,t){C1(e,t);var n=un(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?da(e,t.type,n):t.hasOwnProperty("defaultValue")&&da(e,t.type,un(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function _u(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function da(e,t,n){(t!=="number"||gi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Nr=Array.isArray;function nr(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+un(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ma(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error($(91));return he({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function $u(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error($(92));if(Nr(n)){if(1<n.length)throw Error($(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:un(n)}}function T1(e,t){var n=un(t.value),r=un(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Cu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function I1(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?I1(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Po,P1=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Po=Po||document.createElement("div"),Po.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Po.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ro(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ur={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Jm=["Webkit","ms","Moz","O"];Object.keys(Ur).forEach(function(e){Jm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ur[t]=Ur[e]})});function L1(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ur.hasOwnProperty(e)&&Ur[e]?(""+t).trim():t+"px"}function R1(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=L1(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var qm=he({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pa(e,t){if(t){if(qm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error($(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error($(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error($(61))}if(t.style!=null&&typeof t.style!="object")throw Error($(62))}}function ga(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var va=null;function ks(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ya=null,rr=null,or=null;function Tu(e){if(e=Ao(e)){if(typeof ya!="function")throw Error($(280));var t=e.stateNode;t&&(t=ol(t),ya(e.stateNode,e.type,t))}}function D1(e){rr?or?or.push(e):or=[e]:rr=e}function j1(){if(rr){var e=rr,t=or;if(or=rr=null,Tu(e),t)for(e=0;e<t.length;e++)Tu(t[e])}}function O1(e,t){return e(t)}function N1(){}var Tl=!1;function z1(e,t,n){if(Tl)return e(t,n);Tl=!0;try{return O1(e,t,n)}finally{Tl=!1,(rr!==null||or!==null)&&(N1(),j1())}}function oo(e,t){var n=e.stateNode;if(n===null)return null;var r=ol(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error($(231,t,typeof n));return n}var xa=!1;if(zt)try{var _r={};Object.defineProperty(_r,"passive",{get:function(){xa=!0}}),window.addEventListener("test",_r,_r),window.removeEventListener("test",_r,_r)}catch{xa=!1}function ef(e,t,n,r,o,i,l,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(p){this.onError(p)}}var Hr=!1,vi=null,yi=!1,wa=null,tf={onError:function(e){Hr=!0,vi=e}};function nf(e,t,n,r,o,i,l,a,s){Hr=!1,vi=null,ef.apply(tf,arguments)}function rf(e,t,n,r,o,i,l,a,s){if(nf.apply(this,arguments),Hr){if(Hr){var u=vi;Hr=!1,vi=null}else throw Error($(198));yi||(yi=!0,wa=u)}}function On(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function B1(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Iu(e){if(On(e)!==e)throw Error($(188))}function of(e){var t=e.alternate;if(!t){if(t=On(e),t===null)throw Error($(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Iu(o),e;if(i===r)return Iu(o),t;i=i.sibling}throw Error($(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l)throw Error($(189))}}if(n.alternate!==r)throw Error($(190))}if(n.tag!==3)throw Error($(188));return n.stateNode.current===n?e:t}function F1(e){return e=of(e),e!==null?W1(e):null}function W1(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=W1(e);if(t!==null)return t;e=e.sibling}return null}var U1=et.unstable_scheduleCallback,Pu=et.unstable_cancelCallback,lf=et.unstable_shouldYield,af=et.unstable_requestPaint,ve=et.unstable_now,sf=et.unstable_getCurrentPriorityLevel,bs=et.unstable_ImmediatePriority,H1=et.unstable_UserBlockingPriority,xi=et.unstable_NormalPriority,uf=et.unstable_LowPriority,Q1=et.unstable_IdlePriority,el=null,_t=null;function cf(e){if(_t&&typeof _t.onCommitFiberRoot=="function")try{_t.onCommitFiberRoot(el,e,void 0,(e.current.flags&128)===128)}catch{}}var pt=Math.clz32?Math.clz32:mf,hf=Math.log,df=Math.LN2;function mf(e){return e>>>=0,e===0?32:31-(hf(e)/df|0)|0}var Lo=64,Ro=4194304;function zr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function wi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~o;a!==0?r=zr(a):(i&=l,i!==0&&(r=zr(i)))}else l=n&~o,l!==0?r=zr(l):i!==0&&(r=zr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-pt(t),o=1<<n,r|=e[n],t&=~o;return r}function ff(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-pt(i),a=1<<l,s=o[l];s===-1?(!(a&n)||a&r)&&(o[l]=ff(a,t)):s<=t&&(e.expiredLanes|=a),i&=~a}}function ka(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function V1(){var e=Lo;return Lo<<=1,!(Lo&4194240)&&(Lo=64),e}function Il(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function So(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-pt(t),e[t]=n}function gf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-pt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Es(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-pt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var te=0;function G1(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var K1,Ss,Y1,X1,Z1,ba=!1,Do=[],qt=null,en=null,tn=null,io=new Map,lo=new Map,Yt=[],vf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lu(e,t){switch(e){case"focusin":case"focusout":qt=null;break;case"dragenter":case"dragleave":en=null;break;case"mouseover":case"mouseout":tn=null;break;case"pointerover":case"pointerout":io.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":lo.delete(t.pointerId)}}function $r(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Ao(t),t!==null&&Ss(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function yf(e,t,n,r,o){switch(t){case"focusin":return qt=$r(qt,e,t,n,r,o),!0;case"dragenter":return en=$r(en,e,t,n,r,o),!0;case"mouseover":return tn=$r(tn,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return io.set(i,$r(io.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,lo.set(i,$r(lo.get(i)||null,e,t,n,r,o)),!0}return!1}function J1(e){var t=wn(e.target);if(t!==null){var n=On(t);if(n!==null){if(t=n.tag,t===13){if(t=B1(n),t!==null){e.blockedOn=t,Z1(e.priority,function(){Y1(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ti(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ea(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);va=r,n.target.dispatchEvent(r),va=null}else return t=Ao(n),t!==null&&Ss(t),e.blockedOn=n,!1;t.shift()}return!0}function Ru(e,t,n){ti(e)&&n.delete(t)}function xf(){ba=!1,qt!==null&&ti(qt)&&(qt=null),en!==null&&ti(en)&&(en=null),tn!==null&&ti(tn)&&(tn=null),io.forEach(Ru),lo.forEach(Ru)}function Cr(e,t){e.blockedOn===t&&(e.blockedOn=null,ba||(ba=!0,et.unstable_scheduleCallback(et.unstable_NormalPriority,xf)))}function ao(e){function t(o){return Cr(o,e)}if(0<Do.length){Cr(Do[0],e);for(var n=1;n<Do.length;n++){var r=Do[n];r.blockedOn===e&&(r.blockedOn=null)}}for(qt!==null&&Cr(qt,e),en!==null&&Cr(en,e),tn!==null&&Cr(tn,e),io.forEach(t),lo.forEach(t),n=0;n<Yt.length;n++)r=Yt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Yt.length&&(n=Yt[0],n.blockedOn===null);)J1(n),n.blockedOn===null&&Yt.shift()}var ir=Ut.ReactCurrentBatchConfig,ki=!0;function wf(e,t,n,r){var o=te,i=ir.transition;ir.transition=null;try{te=1,Ms(e,t,n,r)}finally{te=o,ir.transition=i}}function kf(e,t,n,r){var o=te,i=ir.transition;ir.transition=null;try{te=4,Ms(e,t,n,r)}finally{te=o,ir.transition=i}}function Ms(e,t,n,r){if(ki){var o=Ea(e,t,n,r);if(o===null)Fl(e,t,r,bi,n),Lu(e,r);else if(yf(o,e,t,n,r))r.stopPropagation();else if(Lu(e,r),t&4&&-1<vf.indexOf(e)){for(;o!==null;){var i=Ao(o);if(i!==null&&K1(i),i=Ea(e,t,n,r),i===null&&Fl(e,t,r,bi,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Fl(e,t,r,null,n)}}var bi=null;function Ea(e,t,n,r){if(bi=null,e=ks(r),e=wn(e),e!==null)if(t=On(e),t===null)e=null;else if(n=t.tag,n===13){if(e=B1(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return bi=e,null}function q1(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(sf()){case bs:return 1;case H1:return 4;case xi:case uf:return 16;case Q1:return 536870912;default:return 16}default:return 16}}var Zt=null,As=null,ni=null;function eh(){if(ni)return ni;var e,t=As,n=t.length,r,o="value"in Zt?Zt.value:Zt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return ni=o.slice(e,1<r?1-r:void 0)}function ri(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function jo(){return!0}function Du(){return!1}function nt(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?jo:Du,this.isPropagationStopped=Du,this}return he(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=jo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=jo)},persist:function(){},isPersistent:jo}),t}var br={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_s=nt(br),Mo=he({},br,{view:0,detail:0}),bf=nt(Mo),Pl,Ll,Tr,tl=he({},Mo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$s,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Tr&&(Tr&&e.type==="mousemove"?(Pl=e.screenX-Tr.screenX,Ll=e.screenY-Tr.screenY):Ll=Pl=0,Tr=e),Pl)},movementY:function(e){return"movementY"in e?e.movementY:Ll}}),ju=nt(tl),Ef=he({},tl,{dataTransfer:0}),Sf=nt(Ef),Mf=he({},Mo,{relatedTarget:0}),Rl=nt(Mf),Af=he({},br,{animationName:0,elapsedTime:0,pseudoElement:0}),_f=nt(Af),$f=he({},br,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Cf=nt($f),Tf=he({},br,{data:0}),Ou=nt(Tf),If={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Pf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Lf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Lf[e])?!!t[e]:!1}function $s(){return Rf}var Df=he({},Mo,{key:function(e){if(e.key){var t=If[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ri(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Pf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$s,charCode:function(e){return e.type==="keypress"?ri(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ri(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),jf=nt(Df),Of=he({},tl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nu=nt(Of),Nf=he({},Mo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$s}),zf=nt(Nf),Bf=he({},br,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ff=nt(Bf),Wf=he({},tl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Uf=nt(Wf),Hf=[9,13,27,32],Cs=zt&&"CompositionEvent"in window,Qr=null;zt&&"documentMode"in document&&(Qr=document.documentMode);var Qf=zt&&"TextEvent"in window&&!Qr,th=zt&&(!Cs||Qr&&8<Qr&&11>=Qr),zu=" ",Bu=!1;function nh(e,t){switch(e){case"keyup":return Hf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Hn=!1;function Vf(e,t){switch(e){case"compositionend":return rh(t);case"keypress":return t.which!==32?null:(Bu=!0,zu);case"textInput":return e=t.data,e===zu&&Bu?null:e;default:return null}}function Gf(e,t){if(Hn)return e==="compositionend"||!Cs&&nh(e,t)?(e=eh(),ni=As=Zt=null,Hn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return th&&t.locale!=="ko"?null:t.data;default:return null}}var Kf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Kf[e.type]:t==="textarea"}function oh(e,t,n,r){D1(r),t=Ei(t,"onChange"),0<t.length&&(n=new _s("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Vr=null,so=null;function Yf(e){ph(e,0)}function nl(e){var t=Gn(e);if($1(t))return e}function Xf(e,t){if(e==="change")return t}var ih=!1;if(zt){var Dl;if(zt){var jl="oninput"in document;if(!jl){var Wu=document.createElement("div");Wu.setAttribute("oninput","return;"),jl=typeof Wu.oninput=="function"}Dl=jl}else Dl=!1;ih=Dl&&(!document.documentMode||9<document.documentMode)}function Uu(){Vr&&(Vr.detachEvent("onpropertychange",lh),so=Vr=null)}function lh(e){if(e.propertyName==="value"&&nl(so)){var t=[];oh(t,so,e,ks(e)),z1(Yf,t)}}function Zf(e,t,n){e==="focusin"?(Uu(),Vr=t,so=n,Vr.attachEvent("onpropertychange",lh)):e==="focusout"&&Uu()}function Jf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return nl(so)}function qf(e,t){if(e==="click")return nl(t)}function ep(e,t){if(e==="input"||e==="change")return nl(t)}function tp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var yt=typeof Object.is=="function"?Object.is:tp;function uo(e,t){if(yt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!ia.call(t,o)||!yt(e[o],t[o]))return!1}return!0}function Hu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Qu(e,t){var n=Hu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Hu(n)}}function ah(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ah(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function sh(){for(var e=window,t=gi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=gi(e.document)}return t}function Ts(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function np(e){var t=sh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ah(n.ownerDocument.documentElement,n)){if(r!==null&&Ts(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Qu(n,i);var l=Qu(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var rp=zt&&"documentMode"in document&&11>=document.documentMode,Qn=null,Sa=null,Gr=null,Ma=!1;function Vu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ma||Qn==null||Qn!==gi(r)||(r=Qn,"selectionStart"in r&&Ts(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Gr&&uo(Gr,r)||(Gr=r,r=Ei(Sa,"onSelect"),0<r.length&&(t=new _s("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Qn)))}function Oo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Vn={animationend:Oo("Animation","AnimationEnd"),animationiteration:Oo("Animation","AnimationIteration"),animationstart:Oo("Animation","AnimationStart"),transitionend:Oo("Transition","TransitionEnd")},Ol={},uh={};zt&&(uh=document.createElement("div").style,"AnimationEvent"in window||(delete Vn.animationend.animation,delete Vn.animationiteration.animation,delete Vn.animationstart.animation),"TransitionEvent"in window||delete Vn.transitionend.transition);function rl(e){if(Ol[e])return Ol[e];if(!Vn[e])return e;var t=Vn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in uh)return Ol[e]=t[n];return e}var ch=rl("animationend"),hh=rl("animationiteration"),dh=rl("animationstart"),mh=rl("transitionend"),fh=new Map,Gu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mn(e,t){fh.set(e,t),jn(t,[e])}for(var Nl=0;Nl<Gu.length;Nl++){var zl=Gu[Nl],op=zl.toLowerCase(),ip=zl[0].toUpperCase()+zl.slice(1);mn(op,"on"+ip)}mn(ch,"onAnimationEnd");mn(hh,"onAnimationIteration");mn(dh,"onAnimationStart");mn("dblclick","onDoubleClick");mn("focusin","onFocus");mn("focusout","onBlur");mn(mh,"onTransitionEnd");ur("onMouseEnter",["mouseout","mouseover"]);ur("onMouseLeave",["mouseout","mouseover"]);ur("onPointerEnter",["pointerout","pointerover"]);ur("onPointerLeave",["pointerout","pointerover"]);jn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));jn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));jn("onBeforeInput",["compositionend","keypress","textInput","paste"]);jn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));jn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));jn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Br="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Br));function Ku(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,rf(r,t,void 0,e),e.currentTarget=null}function ph(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==i&&o.isPropagationStopped())break e;Ku(o,a,u),i=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,u=a.currentTarget,a=a.listener,s!==i&&o.isPropagationStopped())break e;Ku(o,a,u),i=s}}}if(yi)throw e=wa,yi=!1,wa=null,e}function re(e,t){var n=t[Ta];n===void 0&&(n=t[Ta]=new Set);var r=e+"__bubble";n.has(r)||(gh(t,e,2,!1),n.add(r))}function Bl(e,t,n){var r=0;t&&(r|=4),gh(n,e,r,t)}var No="_reactListening"+Math.random().toString(36).slice(2);function co(e){if(!e[No]){e[No]=!0,E1.forEach(function(n){n!=="selectionchange"&&(lp.has(n)||Bl(n,!1,e),Bl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[No]||(t[No]=!0,Bl("selectionchange",!1,t))}}function gh(e,t,n,r){switch(q1(t)){case 1:var o=wf;break;case 4:o=kf;break;default:o=Ms}n=o.bind(null,t,n,e),o=void 0,!xa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Fl(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;l=l.return}for(;a!==null;){if(l=wn(a),l===null)return;if(s=l.tag,s===5||s===6){r=i=l;continue e}a=a.parentNode}}r=r.return}z1(function(){var u=i,p=ks(n),d=[];e:{var g=fh.get(e);if(g!==void 0){var y=_s,w=e;switch(e){case"keypress":if(ri(n)===0)break e;case"keydown":case"keyup":y=jf;break;case"focusin":w="focus",y=Rl;break;case"focusout":w="blur",y=Rl;break;case"beforeblur":case"afterblur":y=Rl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=ju;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Sf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=zf;break;case ch:case hh:case dh:y=_f;break;case mh:y=Ff;break;case"scroll":y=bf;break;case"wheel":y=Uf;break;case"copy":case"cut":case"paste":y=Cf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Nu}var b=(t&4)!==0,T=!b&&e==="scroll",m=b?g!==null?g+"Capture":null:g;b=[];for(var c=u,f;c!==null;){f=c;var x=f.stateNode;if(f.tag===5&&x!==null&&(f=x,m!==null&&(x=oo(c,m),x!=null&&b.push(ho(c,x,f)))),T)break;c=c.return}0<b.length&&(g=new y(g,w,null,n,p),d.push({event:g,listeners:b}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",g&&n!==va&&(w=n.relatedTarget||n.fromElement)&&(wn(w)||w[Bt]))break e;if((y||g)&&(g=p.window===p?p:(g=p.ownerDocument)?g.defaultView||g.parentWindow:window,y?(w=n.relatedTarget||n.toElement,y=u,w=w?wn(w):null,w!==null&&(T=On(w),w!==T||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=u),y!==w)){if(b=ju,x="onMouseLeave",m="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(b=Nu,x="onPointerLeave",m="onPointerEnter",c="pointer"),T=y==null?g:Gn(y),f=w==null?g:Gn(w),g=new b(x,c+"leave",y,n,p),g.target=T,g.relatedTarget=f,x=null,wn(p)===u&&(b=new b(m,c+"enter",w,n,p),b.target=f,b.relatedTarget=T,x=b),T=x,y&&w)t:{for(b=y,m=w,c=0,f=b;f;f=zn(f))c++;for(f=0,x=m;x;x=zn(x))f++;for(;0<c-f;)b=zn(b),c--;for(;0<f-c;)m=zn(m),f--;for(;c--;){if(b===m||m!==null&&b===m.alternate)break t;b=zn(b),m=zn(m)}b=null}else b=null;y!==null&&Yu(d,g,y,b,!1),w!==null&&T!==null&&Yu(d,T,w,b,!0)}}e:{if(g=u?Gn(u):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var S=Xf;else if(Fu(g))if(ih)S=ep;else{S=Jf;var E=Zf}else(y=g.nodeName)&&y.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(S=qf);if(S&&(S=S(e,u))){oh(d,S,n,p);break e}E&&E(e,g,u),e==="focusout"&&(E=g._wrapperState)&&E.controlled&&g.type==="number"&&da(g,"number",g.value)}switch(E=u?Gn(u):window,e){case"focusin":(Fu(E)||E.contentEditable==="true")&&(Qn=E,Sa=u,Gr=null);break;case"focusout":Gr=Sa=Qn=null;break;case"mousedown":Ma=!0;break;case"contextmenu":case"mouseup":case"dragend":Ma=!1,Vu(d,n,p);break;case"selectionchange":if(rp)break;case"keydown":case"keyup":Vu(d,n,p)}var M;if(Cs)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else Hn?nh(e,n)&&(I="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(th&&n.locale!=="ko"&&(Hn||I!=="onCompositionStart"?I==="onCompositionEnd"&&Hn&&(M=eh()):(Zt=p,As="value"in Zt?Zt.value:Zt.textContent,Hn=!0)),E=Ei(u,I),0<E.length&&(I=new Ou(I,e,null,n,p),d.push({event:I,listeners:E}),M?I.data=M:(M=rh(n),M!==null&&(I.data=M)))),(M=Qf?Vf(e,n):Gf(e,n))&&(u=Ei(u,"onBeforeInput"),0<u.length&&(p=new Ou("onBeforeInput","beforeinput",null,n,p),d.push({event:p,listeners:u}),p.data=M))}ph(d,t)})}function ho(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ei(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=oo(e,n),i!=null&&r.unshift(ho(e,i,o)),i=oo(e,t),i!=null&&r.push(ho(e,i,o))),e=e.return}return r}function zn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Yu(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,o?(s=oo(n,i),s!=null&&l.unshift(ho(n,s,a))):o||(s=oo(n,i),s!=null&&l.push(ho(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var ap=/\r\n?/g,sp=/\u0000|\uFFFD/g;function Xu(e){return(typeof e=="string"?e:""+e).replace(ap,`
`).replace(sp,"")}function zo(e,t,n){if(t=Xu(t),Xu(e)!==t&&n)throw Error($(425))}function Si(){}var Aa=null,_a=null;function $a(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ca=typeof setTimeout=="function"?setTimeout:void 0,up=typeof clearTimeout=="function"?clearTimeout:void 0,Zu=typeof Promise=="function"?Promise:void 0,cp=typeof queueMicrotask=="function"?queueMicrotask:typeof Zu<"u"?function(e){return Zu.resolve(null).then(e).catch(hp)}:Ca;function hp(e){setTimeout(function(){throw e})}function Wl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),ao(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);ao(t)}function nn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ju(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Er=Math.random().toString(36).slice(2),At="__reactFiber$"+Er,mo="__reactProps$"+Er,Bt="__reactContainer$"+Er,Ta="__reactEvents$"+Er,dp="__reactListeners$"+Er,mp="__reactHandles$"+Er;function wn(e){var t=e[At];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Bt]||n[At]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ju(e);e!==null;){if(n=e[At])return n;e=Ju(e)}return t}e=n,n=e.parentNode}return null}function Ao(e){return e=e[At]||e[Bt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Gn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error($(33))}function ol(e){return e[mo]||null}var Ia=[],Kn=-1;function fn(e){return{current:e}}function ie(e){0>Kn||(e.current=Ia[Kn],Ia[Kn]=null,Kn--)}function ne(e,t){Kn++,Ia[Kn]=e.current,e.current=t}var cn={},Ne=fn(cn),Qe=fn(!1),$n=cn;function cr(e,t){var n=e.type.contextTypes;if(!n)return cn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ve(e){return e=e.childContextTypes,e!=null}function Mi(){ie(Qe),ie(Ne)}function qu(e,t,n){if(Ne.current!==cn)throw Error($(168));ne(Ne,t),ne(Qe,n)}function vh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error($(108,Xm(e)||"Unknown",o));return he({},n,r)}function Ai(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||cn,$n=Ne.current,ne(Ne,e),ne(Qe,Qe.current),!0}function ec(e,t,n){var r=e.stateNode;if(!r)throw Error($(169));n?(e=vh(e,t,$n),r.__reactInternalMemoizedMergedChildContext=e,ie(Qe),ie(Ne),ne(Ne,e)):ie(Qe),ne(Qe,n)}var Dt=null,il=!1,Ul=!1;function yh(e){Dt===null?Dt=[e]:Dt.push(e)}function fp(e){il=!0,yh(e)}function pn(){if(!Ul&&Dt!==null){Ul=!0;var e=0,t=te;try{var n=Dt;for(te=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Dt=null,il=!1}catch(o){throw Dt!==null&&(Dt=Dt.slice(e+1)),U1(bs,pn),o}finally{te=t,Ul=!1}}return null}var Yn=[],Xn=0,_i=null,$i=0,ot=[],it=0,Cn=null,jt=1,Ot="";function yn(e,t){Yn[Xn++]=$i,Yn[Xn++]=_i,_i=e,$i=t}function xh(e,t,n){ot[it++]=jt,ot[it++]=Ot,ot[it++]=Cn,Cn=e;var r=jt;e=Ot;var o=32-pt(r)-1;r&=~(1<<o),n+=1;var i=32-pt(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,jt=1<<32-pt(t)+o|n<<o|r,Ot=i+e}else jt=1<<i|n<<o|r,Ot=e}function Is(e){e.return!==null&&(yn(e,1),xh(e,1,0))}function Ps(e){for(;e===_i;)_i=Yn[--Xn],Yn[Xn]=null,$i=Yn[--Xn],Yn[Xn]=null;for(;e===Cn;)Cn=ot[--it],ot[it]=null,Ot=ot[--it],ot[it]=null,jt=ot[--it],ot[it]=null}var qe=null,Je=null,ae=!1,ft=null;function wh(e,t){var n=lt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function tc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,qe=e,Je=nn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,qe=e,Je=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Cn!==null?{id:jt,overflow:Ot}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=lt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,qe=e,Je=null,!0):!1;default:return!1}}function Pa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function La(e){if(ae){var t=Je;if(t){var n=t;if(!tc(e,t)){if(Pa(e))throw Error($(418));t=nn(n.nextSibling);var r=qe;t&&tc(e,t)?wh(r,n):(e.flags=e.flags&-4097|2,ae=!1,qe=e)}}else{if(Pa(e))throw Error($(418));e.flags=e.flags&-4097|2,ae=!1,qe=e}}}function nc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;qe=e}function Bo(e){if(e!==qe)return!1;if(!ae)return nc(e),ae=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!$a(e.type,e.memoizedProps)),t&&(t=Je)){if(Pa(e))throw kh(),Error($(418));for(;t;)wh(e,t),t=nn(t.nextSibling)}if(nc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error($(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Je=nn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Je=null}}else Je=qe?nn(e.stateNode.nextSibling):null;return!0}function kh(){for(var e=Je;e;)e=nn(e.nextSibling)}function hr(){Je=qe=null,ae=!1}function Ls(e){ft===null?ft=[e]:ft.push(e)}var pp=Ut.ReactCurrentBatchConfig;function Ir(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error($(309));var r=n.stateNode}if(!r)throw Error($(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=o.refs;l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error($(284));if(!n._owner)throw Error($(290,e))}return e}function Fo(e,t){throw e=Object.prototype.toString.call(t),Error($(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function rc(e){var t=e._init;return t(e._payload)}function bh(e){function t(m,c){if(e){var f=m.deletions;f===null?(m.deletions=[c],m.flags|=16):f.push(c)}}function n(m,c){if(!e)return null;for(;c!==null;)t(m,c),c=c.sibling;return null}function r(m,c){for(m=new Map;c!==null;)c.key!==null?m.set(c.key,c):m.set(c.index,c),c=c.sibling;return m}function o(m,c){return m=an(m,c),m.index=0,m.sibling=null,m}function i(m,c,f){return m.index=f,e?(f=m.alternate,f!==null?(f=f.index,f<c?(m.flags|=2,c):f):(m.flags|=2,c)):(m.flags|=1048576,c)}function l(m){return e&&m.alternate===null&&(m.flags|=2),m}function a(m,c,f,x){return c===null||c.tag!==6?(c=Xl(f,m.mode,x),c.return=m,c):(c=o(c,f),c.return=m,c)}function s(m,c,f,x){var S=f.type;return S===Un?p(m,c,f.props.children,x,f.key):c!==null&&(c.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Gt&&rc(S)===c.type)?(x=o(c,f.props),x.ref=Ir(m,c,f),x.return=m,x):(x=ci(f.type,f.key,f.props,null,m.mode,x),x.ref=Ir(m,c,f),x.return=m,x)}function u(m,c,f,x){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=Zl(f,m.mode,x),c.return=m,c):(c=o(c,f.children||[]),c.return=m,c)}function p(m,c,f,x,S){return c===null||c.tag!==7?(c=An(f,m.mode,x,S),c.return=m,c):(c=o(c,f),c.return=m,c)}function d(m,c,f){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Xl(""+c,m.mode,f),c.return=m,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case To:return f=ci(c.type,c.key,c.props,null,m.mode,f),f.ref=Ir(m,null,c),f.return=m,f;case Wn:return c=Zl(c,m.mode,f),c.return=m,c;case Gt:var x=c._init;return d(m,x(c._payload),f)}if(Nr(c)||Ar(c))return c=An(c,m.mode,f,null),c.return=m,c;Fo(m,c)}return null}function g(m,c,f,x){var S=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return S!==null?null:a(m,c,""+f,x);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case To:return f.key===S?s(m,c,f,x):null;case Wn:return f.key===S?u(m,c,f,x):null;case Gt:return S=f._init,g(m,c,S(f._payload),x)}if(Nr(f)||Ar(f))return S!==null?null:p(m,c,f,x,null);Fo(m,f)}return null}function y(m,c,f,x,S){if(typeof x=="string"&&x!==""||typeof x=="number")return m=m.get(f)||null,a(c,m,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case To:return m=m.get(x.key===null?f:x.key)||null,s(c,m,x,S);case Wn:return m=m.get(x.key===null?f:x.key)||null,u(c,m,x,S);case Gt:var E=x._init;return y(m,c,f,E(x._payload),S)}if(Nr(x)||Ar(x))return m=m.get(f)||null,p(c,m,x,S,null);Fo(c,x)}return null}function w(m,c,f,x){for(var S=null,E=null,M=c,I=c=0,B=null;M!==null&&I<f.length;I++){M.index>I?(B=M,M=null):B=M.sibling;var j=g(m,M,f[I],x);if(j===null){M===null&&(M=B);break}e&&M&&j.alternate===null&&t(m,M),c=i(j,c,I),E===null?S=j:E.sibling=j,E=j,M=B}if(I===f.length)return n(m,M),ae&&yn(m,I),S;if(M===null){for(;I<f.length;I++)M=d(m,f[I],x),M!==null&&(c=i(M,c,I),E===null?S=M:E.sibling=M,E=M);return ae&&yn(m,I),S}for(M=r(m,M);I<f.length;I++)B=y(M,m,I,f[I],x),B!==null&&(e&&B.alternate!==null&&M.delete(B.key===null?I:B.key),c=i(B,c,I),E===null?S=B:E.sibling=B,E=B);return e&&M.forEach(function(q){return t(m,q)}),ae&&yn(m,I),S}function b(m,c,f,x){var S=Ar(f);if(typeof S!="function")throw Error($(150));if(f=S.call(f),f==null)throw Error($(151));for(var E=S=null,M=c,I=c=0,B=null,j=f.next();M!==null&&!j.done;I++,j=f.next()){M.index>I?(B=M,M=null):B=M.sibling;var q=g(m,M,j.value,x);if(q===null){M===null&&(M=B);break}e&&M&&q.alternate===null&&t(m,M),c=i(q,c,I),E===null?S=q:E.sibling=q,E=q,M=B}if(j.done)return n(m,M),ae&&yn(m,I),S;if(M===null){for(;!j.done;I++,j=f.next())j=d(m,j.value,x),j!==null&&(c=i(j,c,I),E===null?S=j:E.sibling=j,E=j);return ae&&yn(m,I),S}for(M=r(m,M);!j.done;I++,j=f.next())j=y(M,m,I,j.value,x),j!==null&&(e&&j.alternate!==null&&M.delete(j.key===null?I:j.key),c=i(j,c,I),E===null?S=j:E.sibling=j,E=j);return e&&M.forEach(function(ee){return t(m,ee)}),ae&&yn(m,I),S}function T(m,c,f,x){if(typeof f=="object"&&f!==null&&f.type===Un&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case To:e:{for(var S=f.key,E=c;E!==null;){if(E.key===S){if(S=f.type,S===Un){if(E.tag===7){n(m,E.sibling),c=o(E,f.props.children),c.return=m,m=c;break e}}else if(E.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Gt&&rc(S)===E.type){n(m,E.sibling),c=o(E,f.props),c.ref=Ir(m,E,f),c.return=m,m=c;break e}n(m,E);break}else t(m,E);E=E.sibling}f.type===Un?(c=An(f.props.children,m.mode,x,f.key),c.return=m,m=c):(x=ci(f.type,f.key,f.props,null,m.mode,x),x.ref=Ir(m,c,f),x.return=m,m=x)}return l(m);case Wn:e:{for(E=f.key;c!==null;){if(c.key===E)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){n(m,c.sibling),c=o(c,f.children||[]),c.return=m,m=c;break e}else{n(m,c);break}else t(m,c);c=c.sibling}c=Zl(f,m.mode,x),c.return=m,m=c}return l(m);case Gt:return E=f._init,T(m,c,E(f._payload),x)}if(Nr(f))return w(m,c,f,x);if(Ar(f))return b(m,c,f,x);Fo(m,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,c!==null&&c.tag===6?(n(m,c.sibling),c=o(c,f),c.return=m,m=c):(n(m,c),c=Xl(f,m.mode,x),c.return=m,m=c),l(m)):n(m,c)}return T}var dr=bh(!0),Eh=bh(!1),Ci=fn(null),Ti=null,Zn=null,Rs=null;function Ds(){Rs=Zn=Ti=null}function js(e){var t=Ci.current;ie(Ci),e._currentValue=t}function Ra(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function lr(e,t){Ti=e,Rs=Zn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(He=!0),e.firstContext=null)}function st(e){var t=e._currentValue;if(Rs!==e)if(e={context:e,memoizedValue:t,next:null},Zn===null){if(Ti===null)throw Error($(308));Zn=e,Ti.dependencies={lanes:0,firstContext:e}}else Zn=Zn.next=e;return t}var kn=null;function Os(e){kn===null?kn=[e]:kn.push(e)}function Sh(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Os(t)):(n.next=o.next,o.next=n),t.interleaved=n,Ft(e,r)}function Ft(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Kt=!1;function Ns(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Mh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Nt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function rn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Y&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Ft(e,n)}return o=r.interleaved,o===null?(t.next=t,Os(r)):(t.next=o.next,o.next=t),r.interleaved=t,Ft(e,n)}function oi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Es(e,n)}}function oc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ii(e,t,n,r){var o=e.updateQueue;Kt=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,u=s.next;s.next=null,l===null?i=u:l.next=u,l=s;var p=e.alternate;p!==null&&(p=p.updateQueue,a=p.lastBaseUpdate,a!==l&&(a===null?p.firstBaseUpdate=u:a.next=u,p.lastBaseUpdate=s))}if(i!==null){var d=o.baseState;l=0,p=u=s=null,a=i;do{var g=a.lane,y=a.eventTime;if((r&g)===g){p!==null&&(p=p.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,b=a;switch(g=t,y=n,b.tag){case 1:if(w=b.payload,typeof w=="function"){d=w.call(y,d,g);break e}d=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=b.payload,g=typeof w=="function"?w.call(y,d,g):w,g==null)break e;d=he({},d,g);break e;case 2:Kt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=o.effects,g===null?o.effects=[a]:g.push(a))}else y={eventTime:y,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},p===null?(u=p=y,s=d):p=p.next=y,l|=g;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;g=a,a=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(!0);if(p===null&&(s=d),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=p,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);In|=l,e.lanes=l,e.memoizedState=d}}function ic(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error($(191,o));o.call(r)}}}var _o={},$t=fn(_o),fo=fn(_o),po=fn(_o);function bn(e){if(e===_o)throw Error($(174));return e}function zs(e,t){switch(ne(po,t),ne(fo,e),ne($t,_o),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:fa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=fa(t,e)}ie($t),ne($t,t)}function mr(){ie($t),ie(fo),ie(po)}function Ah(e){bn(po.current);var t=bn($t.current),n=fa(t,e.type);t!==n&&(ne(fo,e),ne($t,n))}function Bs(e){fo.current===e&&(ie($t),ie(fo))}var ue=fn(0);function Pi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Hl=[];function Fs(){for(var e=0;e<Hl.length;e++)Hl[e]._workInProgressVersionPrimary=null;Hl.length=0}var ii=Ut.ReactCurrentDispatcher,Ql=Ut.ReactCurrentBatchConfig,Tn=0,ce=null,Ee=null,Ae=null,Li=!1,Kr=!1,go=0,gp=0;function De(){throw Error($(321))}function Ws(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!yt(e[n],t[n]))return!1;return!0}function Us(e,t,n,r,o,i){if(Tn=i,ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ii.current=e===null||e.memoizedState===null?wp:kp,e=n(r,o),Kr){i=0;do{if(Kr=!1,go=0,25<=i)throw Error($(301));i+=1,Ae=Ee=null,t.updateQueue=null,ii.current=bp,e=n(r,o)}while(Kr)}if(ii.current=Ri,t=Ee!==null&&Ee.next!==null,Tn=0,Ae=Ee=ce=null,Li=!1,t)throw Error($(300));return e}function Hs(){var e=go!==0;return go=0,e}function St(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ae===null?ce.memoizedState=Ae=e:Ae=Ae.next=e,Ae}function ut(){if(Ee===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=Ee.next;var t=Ae===null?ce.memoizedState:Ae.next;if(t!==null)Ae=t,Ee=e;else{if(e===null)throw Error($(310));Ee=e,e={memoizedState:Ee.memoizedState,baseState:Ee.baseState,baseQueue:Ee.baseQueue,queue:Ee.queue,next:null},Ae===null?ce.memoizedState=Ae=e:Ae=Ae.next=e}return Ae}function vo(e,t){return typeof t=="function"?t(e):t}function Vl(e){var t=ut(),n=t.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=e;var r=Ee,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,s=null,u=i;do{var p=u.lane;if((Tn&p)===p)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=d,l=r):s=s.next=d,ce.lanes|=p,In|=p}u=u.next}while(u!==null&&u!==i);s===null?l=r:s.next=a,yt(r,t.memoizedState)||(He=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,ce.lanes|=i,In|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Gl(e){var t=ut(),n=t.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);yt(i,t.memoizedState)||(He=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function _h(){}function $h(e,t){var n=ce,r=ut(),o=t(),i=!yt(r.memoizedState,o);if(i&&(r.memoizedState=o,He=!0),r=r.queue,Qs(Ih.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Ae!==null&&Ae.memoizedState.tag&1){if(n.flags|=2048,yo(9,Th.bind(null,n,r,o,t),void 0,null),Ce===null)throw Error($(349));Tn&30||Ch(n,t,o)}return o}function Ch(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ce.updateQueue,t===null?(t={lastEffect:null,stores:null},ce.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Th(e,t,n,r){t.value=n,t.getSnapshot=r,Ph(t)&&Lh(e)}function Ih(e,t,n){return n(function(){Ph(t)&&Lh(e)})}function Ph(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!yt(e,n)}catch{return!0}}function Lh(e){var t=Ft(e,1);t!==null&&gt(t,e,1,-1)}function lc(e){var t=St();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vo,lastRenderedState:e},t.queue=e,e=e.dispatch=xp.bind(null,ce,e),[t.memoizedState,e]}function yo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ce.updateQueue,t===null?(t={lastEffect:null,stores:null},ce.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Rh(){return ut().memoizedState}function li(e,t,n,r){var o=St();ce.flags|=e,o.memoizedState=yo(1|t,n,void 0,r===void 0?null:r)}function ll(e,t,n,r){var o=ut();r=r===void 0?null:r;var i=void 0;if(Ee!==null){var l=Ee.memoizedState;if(i=l.destroy,r!==null&&Ws(r,l.deps)){o.memoizedState=yo(t,n,i,r);return}}ce.flags|=e,o.memoizedState=yo(1|t,n,i,r)}function ac(e,t){return li(8390656,8,e,t)}function Qs(e,t){return ll(2048,8,e,t)}function Dh(e,t){return ll(4,2,e,t)}function jh(e,t){return ll(4,4,e,t)}function Oh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Nh(e,t,n){return n=n!=null?n.concat([e]):null,ll(4,4,Oh.bind(null,t,e),n)}function Vs(){}function zh(e,t){var n=ut();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ws(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Bh(e,t){var n=ut();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ws(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Fh(e,t,n){return Tn&21?(yt(n,t)||(n=V1(),ce.lanes|=n,In|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,He=!0),e.memoizedState=n)}function vp(e,t){var n=te;te=n!==0&&4>n?n:4,e(!0);var r=Ql.transition;Ql.transition={};try{e(!1),t()}finally{te=n,Ql.transition=r}}function Wh(){return ut().memoizedState}function yp(e,t,n){var r=ln(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Uh(e))Hh(t,n);else if(n=Sh(e,t,n,r),n!==null){var o=Be();gt(n,e,r,o),Qh(n,t,r)}}function xp(e,t,n){var r=ln(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Uh(e))Hh(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,n);if(o.hasEagerState=!0,o.eagerState=a,yt(a,l)){var s=t.interleaved;s===null?(o.next=o,Os(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=Sh(e,t,o,r),n!==null&&(o=Be(),gt(n,e,r,o),Qh(n,t,r))}}function Uh(e){var t=e.alternate;return e===ce||t!==null&&t===ce}function Hh(e,t){Kr=Li=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Qh(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Es(e,n)}}var Ri={readContext:st,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useInsertionEffect:De,useLayoutEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useMutableSource:De,useSyncExternalStore:De,useId:De,unstable_isNewReconciler:!1},wp={readContext:st,useCallback:function(e,t){return St().memoizedState=[e,t===void 0?null:t],e},useContext:st,useEffect:ac,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,li(4194308,4,Oh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return li(4194308,4,e,t)},useInsertionEffect:function(e,t){return li(4,2,e,t)},useMemo:function(e,t){var n=St();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=St();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=yp.bind(null,ce,e),[r.memoizedState,e]},useRef:function(e){var t=St();return e={current:e},t.memoizedState=e},useState:lc,useDebugValue:Vs,useDeferredValue:function(e){return St().memoizedState=e},useTransition:function(){var e=lc(!1),t=e[0];return e=vp.bind(null,e[1]),St().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ce,o=St();if(ae){if(n===void 0)throw Error($(407));n=n()}else{if(n=t(),Ce===null)throw Error($(349));Tn&30||Ch(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,ac(Ih.bind(null,r,i,e),[e]),r.flags|=2048,yo(9,Th.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=St(),t=Ce.identifierPrefix;if(ae){var n=Ot,r=jt;n=(r&~(1<<32-pt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=go++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=gp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},kp={readContext:st,useCallback:zh,useContext:st,useEffect:Qs,useImperativeHandle:Nh,useInsertionEffect:Dh,useLayoutEffect:jh,useMemo:Bh,useReducer:Vl,useRef:Rh,useState:function(){return Vl(vo)},useDebugValue:Vs,useDeferredValue:function(e){var t=ut();return Fh(t,Ee.memoizedState,e)},useTransition:function(){var e=Vl(vo)[0],t=ut().memoizedState;return[e,t]},useMutableSource:_h,useSyncExternalStore:$h,useId:Wh,unstable_isNewReconciler:!1},bp={readContext:st,useCallback:zh,useContext:st,useEffect:Qs,useImperativeHandle:Nh,useInsertionEffect:Dh,useLayoutEffect:jh,useMemo:Bh,useReducer:Gl,useRef:Rh,useState:function(){return Gl(vo)},useDebugValue:Vs,useDeferredValue:function(e){var t=ut();return Ee===null?t.memoizedState=e:Fh(t,Ee.memoizedState,e)},useTransition:function(){var e=Gl(vo)[0],t=ut().memoizedState;return[e,t]},useMutableSource:_h,useSyncExternalStore:$h,useId:Wh,unstable_isNewReconciler:!1};function dt(e,t){if(e&&e.defaultProps){t=he({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Da(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:he({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var al={isMounted:function(e){return(e=e._reactInternals)?On(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Be(),o=ln(e),i=Nt(r,o);i.payload=t,n!=null&&(i.callback=n),t=rn(e,i,o),t!==null&&(gt(t,e,o,r),oi(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Be(),o=ln(e),i=Nt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=rn(e,i,o),t!==null&&(gt(t,e,o,r),oi(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Be(),r=ln(e),o=Nt(n,r);o.tag=2,t!=null&&(o.callback=t),t=rn(e,o,r),t!==null&&(gt(t,e,r,n),oi(t,e,r))}};function sc(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!uo(n,r)||!uo(o,i):!0}function Vh(e,t,n){var r=!1,o=cn,i=t.contextType;return typeof i=="object"&&i!==null?i=st(i):(o=Ve(t)?$n:Ne.current,r=t.contextTypes,i=(r=r!=null)?cr(e,o):cn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=al,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function uc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&al.enqueueReplaceState(t,t.state,null)}function ja(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Ns(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=st(i):(i=Ve(t)?$n:Ne.current,o.context=cr(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Da(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&al.enqueueReplaceState(o,o.state,null),Ii(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function fr(e,t){try{var n="",r=t;do n+=Ym(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Kl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Oa(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Ep=typeof WeakMap=="function"?WeakMap:Map;function Gh(e,t,n){n=Nt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ji||(ji=!0,Ga=r),Oa(e,t)},n}function Kh(e,t,n){n=Nt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Oa(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Oa(e,t),typeof r!="function"&&(on===null?on=new Set([this]):on.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function cc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ep;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Op.bind(null,e,t,n),t.then(e,e))}function hc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function dc(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Nt(-1,1),t.tag=2,rn(n,t,1))),n.lanes|=1),e)}var Sp=Ut.ReactCurrentOwner,He=!1;function ze(e,t,n,r){t.child=e===null?Eh(t,null,n,r):dr(t,e.child,n,r)}function mc(e,t,n,r,o){n=n.render;var i=t.ref;return lr(t,o),r=Us(e,t,n,r,i,o),n=Hs(),e!==null&&!He?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Wt(e,t,o)):(ae&&n&&Is(t),t.flags|=1,ze(e,t,r,o),t.child)}function fc(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!eu(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Yh(e,t,i,r,o)):(e=ci(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:uo,n(l,r)&&e.ref===t.ref)return Wt(e,t,o)}return t.flags|=1,e=an(i,r),e.ref=t.ref,e.return=t,t.child=e}function Yh(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(uo(i,r)&&e.ref===t.ref)if(He=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(He=!0);else return t.lanes=e.lanes,Wt(e,t,o)}return Na(e,t,n,r,o)}function Xh(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ne(qn,Xe),Xe|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ne(qn,Xe),Xe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ne(qn,Xe),Xe|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,ne(qn,Xe),Xe|=r;return ze(e,t,o,n),t.child}function Zh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Na(e,t,n,r,o){var i=Ve(n)?$n:Ne.current;return i=cr(t,i),lr(t,o),n=Us(e,t,n,r,i,o),r=Hs(),e!==null&&!He?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Wt(e,t,o)):(ae&&r&&Is(t),t.flags|=1,ze(e,t,n,o),t.child)}function pc(e,t,n,r,o){if(Ve(n)){var i=!0;Ai(t)}else i=!1;if(lr(t,o),t.stateNode===null)ai(e,t),Vh(t,n,r),ja(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=st(u):(u=Ve(n)?$n:Ne.current,u=cr(t,u));var p=n.getDerivedStateFromProps,d=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function";d||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==u)&&uc(t,l,r,u),Kt=!1;var g=t.memoizedState;l.state=g,Ii(t,r,l,o),s=t.memoizedState,a!==r||g!==s||Qe.current||Kt?(typeof p=="function"&&(Da(t,n,p,r),s=t.memoizedState),(a=Kt||sc(t,n,a,r,g,s,u))?(d||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Mh(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:dt(t.type,a),l.props=u,d=t.pendingProps,g=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=st(s):(s=Ve(n)?$n:Ne.current,s=cr(t,s));var y=n.getDerivedStateFromProps;(p=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==d||g!==s)&&uc(t,l,r,s),Kt=!1,g=t.memoizedState,l.state=g,Ii(t,r,l,o);var w=t.memoizedState;a!==d||g!==w||Qe.current||Kt?(typeof y=="function"&&(Da(t,n,y,r),w=t.memoizedState),(u=Kt||sc(t,n,u,r,g,w,s)||!1)?(p||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,w,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,w,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),l.props=r,l.state=w,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return za(e,t,n,r,i,o)}function za(e,t,n,r,o,i){Zh(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&ec(t,n,!1),Wt(e,t,i);r=t.stateNode,Sp.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=dr(t,e.child,null,i),t.child=dr(t,null,a,i)):ze(e,t,a,i),t.memoizedState=r.state,o&&ec(t,n,!0),t.child}function Jh(e){var t=e.stateNode;t.pendingContext?qu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&qu(e,t.context,!1),zs(e,t.containerInfo)}function gc(e,t,n,r,o){return hr(),Ls(o),t.flags|=256,ze(e,t,n,r),t.child}var Ba={dehydrated:null,treeContext:null,retryLane:0};function Fa(e){return{baseLanes:e,cachePool:null,transitions:null}}function qh(e,t,n){var r=t.pendingProps,o=ue.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ne(ue,o&1),e===null)return La(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=cl(l,r,0,null),e=An(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Fa(n),t.memoizedState=Ba,e):Gs(t,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return Mp(e,t,l,r,a,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=an(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=an(a,i):(i=An(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Fa(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Ba,r}return i=e.child,e=i.sibling,r=an(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Gs(e,t){return t=cl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Wo(e,t,n,r){return r!==null&&Ls(r),dr(t,e.child,null,n),e=Gs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Mp(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=Kl(Error($(422))),Wo(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=cl({mode:"visible",children:r.children},o,0,null),i=An(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&dr(t,e.child,null,l),t.child.memoizedState=Fa(l),t.memoizedState=Ba,i);if(!(t.mode&1))return Wo(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error($(419)),r=Kl(i,r,void 0),Wo(e,t,l,r)}if(a=(l&e.childLanes)!==0,He||a){if(r=Ce,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Ft(e,o),gt(r,e,o,-1))}return qs(),r=Kl(Error($(421))),Wo(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Np.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Je=nn(o.nextSibling),qe=t,ae=!0,ft=null,e!==null&&(ot[it++]=jt,ot[it++]=Ot,ot[it++]=Cn,jt=e.id,Ot=e.overflow,Cn=t),t=Gs(t,r.children),t.flags|=4096,t)}function vc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ra(e.return,t,n)}function Yl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function ed(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(ze(e,t,r.children,n),r=ue.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&vc(e,n,t);else if(e.tag===19)vc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ne(ue,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Pi(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Yl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Pi(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Yl(t,!0,n,null,i);break;case"together":Yl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ai(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Wt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),In|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error($(153));if(t.child!==null){for(e=t.child,n=an(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=an(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ap(e,t,n){switch(t.tag){case 3:Jh(t),hr();break;case 5:Ah(t);break;case 1:Ve(t.type)&&Ai(t);break;case 4:zs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;ne(Ci,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ne(ue,ue.current&1),t.flags|=128,null):n&t.child.childLanes?qh(e,t,n):(ne(ue,ue.current&1),e=Wt(e,t,n),e!==null?e.sibling:null);ne(ue,ue.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return ed(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ne(ue,ue.current),r)break;return null;case 22:case 23:return t.lanes=0,Xh(e,t,n)}return Wt(e,t,n)}var td,Wa,nd,rd;td=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Wa=function(){};nd=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,bn($t.current);var i=null;switch(n){case"input":o=ca(e,o),r=ca(e,r),i=[];break;case"select":o=he({},o,{value:void 0}),r=he({},r,{value:void 0}),i=[];break;case"textarea":o=ma(e,o),r=ma(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Si)}pa(n,r);var l;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(no.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(a=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(i||(i=[]),i.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(no.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&re("scroll",e),i||a===s||(i=[])):(i=i||[]).push(u,s))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};rd=function(e,t,n,r){n!==r&&(t.flags|=4)};function Pr(e,t){if(!ae)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function je(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function _p(e,t,n){var r=t.pendingProps;switch(Ps(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(t),null;case 1:return Ve(t.type)&&Mi(),je(t),null;case 3:return r=t.stateNode,mr(),ie(Qe),ie(Ne),Fs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Bo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ft!==null&&(Xa(ft),ft=null))),Wa(e,t),je(t),null;case 5:Bs(t);var o=bn(po.current);if(n=t.type,e!==null&&t.stateNode!=null)nd(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error($(166));return je(t),null}if(e=bn($t.current),Bo(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[At]=t,r[mo]=i,e=(t.mode&1)!==0,n){case"dialog":re("cancel",r),re("close",r);break;case"iframe":case"object":case"embed":re("load",r);break;case"video":case"audio":for(o=0;o<Br.length;o++)re(Br[o],r);break;case"source":re("error",r);break;case"img":case"image":case"link":re("error",r),re("load",r);break;case"details":re("toggle",r);break;case"input":Au(r,i),re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},re("invalid",r);break;case"textarea":$u(r,i),re("invalid",r)}pa(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&zo(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&zo(r.textContent,a,e),o=["children",""+a]):no.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&re("scroll",r)}switch(n){case"input":Io(r),_u(r,i,!0);break;case"textarea":Io(r),Cu(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Si)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=I1(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[At]=t,e[mo]=r,td(e,t,!1,!1),t.stateNode=e;e:{switch(l=ga(n,r),n){case"dialog":re("cancel",e),re("close",e),o=r;break;case"iframe":case"object":case"embed":re("load",e),o=r;break;case"video":case"audio":for(o=0;o<Br.length;o++)re(Br[o],e);o=r;break;case"source":re("error",e),o=r;break;case"img":case"image":case"link":re("error",e),re("load",e),o=r;break;case"details":re("toggle",e),o=r;break;case"input":Au(e,r),o=ca(e,r),re("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=he({},r,{value:void 0}),re("invalid",e);break;case"textarea":$u(e,r),o=ma(e,r),re("invalid",e);break;default:o=r}pa(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?R1(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&P1(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&ro(e,s):typeof s=="number"&&ro(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(no.hasOwnProperty(i)?s!=null&&i==="onScroll"&&re("scroll",e):s!=null&&vs(e,i,s,l))}switch(n){case"input":Io(e),_u(e,r,!1);break;case"textarea":Io(e),Cu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+un(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?nr(e,!!r.multiple,i,!1):r.defaultValue!=null&&nr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Si)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return je(t),null;case 6:if(e&&t.stateNode!=null)rd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error($(166));if(n=bn(po.current),bn($t.current),Bo(t)){if(r=t.stateNode,n=t.memoizedProps,r[At]=t,(i=r.nodeValue!==n)&&(e=qe,e!==null))switch(e.tag){case 3:zo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&zo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[At]=t,t.stateNode=r}return je(t),null;case 13:if(ie(ue),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ae&&Je!==null&&t.mode&1&&!(t.flags&128))kh(),hr(),t.flags|=98560,i=!1;else if(i=Bo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error($(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error($(317));i[At]=t}else hr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;je(t),i=!1}else ft!==null&&(Xa(ft),ft=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ue.current&1?Se===0&&(Se=3):qs())),t.updateQueue!==null&&(t.flags|=4),je(t),null);case 4:return mr(),Wa(e,t),e===null&&co(t.stateNode.containerInfo),je(t),null;case 10:return js(t.type._context),je(t),null;case 17:return Ve(t.type)&&Mi(),je(t),null;case 19:if(ie(ue),i=t.memoizedState,i===null)return je(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)Pr(i,!1);else{if(Se!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Pi(e),l!==null){for(t.flags|=128,Pr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ne(ue,ue.current&1|2),t.child}e=e.sibling}i.tail!==null&&ve()>pr&&(t.flags|=128,r=!0,Pr(i,!1),t.lanes=4194304)}else{if(!r)if(e=Pi(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Pr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!ae)return je(t),null}else 2*ve()-i.renderingStartTime>pr&&n!==1073741824&&(t.flags|=128,r=!0,Pr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ve(),t.sibling=null,n=ue.current,ne(ue,r?n&1|2:n&1),t):(je(t),null);case 22:case 23:return Js(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Xe&1073741824&&(je(t),t.subtreeFlags&6&&(t.flags|=8192)):je(t),null;case 24:return null;case 25:return null}throw Error($(156,t.tag))}function $p(e,t){switch(Ps(t),t.tag){case 1:return Ve(t.type)&&Mi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return mr(),ie(Qe),ie(Ne),Fs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Bs(t),null;case 13:if(ie(ue),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error($(340));hr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ie(ue),null;case 4:return mr(),null;case 10:return js(t.type._context),null;case 22:case 23:return Js(),null;case 24:return null;default:return null}}var Uo=!1,Oe=!1,Cp=typeof WeakSet=="function"?WeakSet:Set,R=null;function Jn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){fe(e,t,r)}else n.current=null}function Ua(e,t,n){try{n()}catch(r){fe(e,t,r)}}var yc=!1;function Tp(e,t){if(Aa=ki,e=sh(),Ts(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,u=0,p=0,d=e,g=null;t:for(;;){for(var y;d!==n||o!==0&&d.nodeType!==3||(a=l+o),d!==i||r!==0&&d.nodeType!==3||(s=l+r),d.nodeType===3&&(l+=d.nodeValue.length),(y=d.firstChild)!==null;)g=d,d=y;for(;;){if(d===e)break t;if(g===n&&++u===o&&(a=l),g===i&&++p===r&&(s=l),(y=d.nextSibling)!==null)break;d=g,g=d.parentNode}d=y}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(_a={focusedElem:e,selectionRange:n},ki=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var b=w.memoizedProps,T=w.memoizedState,m=t.stateNode,c=m.getSnapshotBeforeUpdate(t.elementType===t.type?b:dt(t.type,b),T);m.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error($(163))}}catch(x){fe(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return w=yc,yc=!1,w}function Yr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Ua(t,n,i)}o=o.next}while(o!==r)}}function sl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ha(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function od(e){var t=e.alternate;t!==null&&(e.alternate=null,od(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[At],delete t[mo],delete t[Ta],delete t[dp],delete t[mp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function id(e){return e.tag===5||e.tag===3||e.tag===4}function xc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||id(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Si));else if(r!==4&&(e=e.child,e!==null))for(Qa(e,t,n),e=e.sibling;e!==null;)Qa(e,t,n),e=e.sibling}function Va(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Va(e,t,n),e=e.sibling;e!==null;)Va(e,t,n),e=e.sibling}var Ie=null,mt=!1;function Qt(e,t,n){for(n=n.child;n!==null;)ld(e,t,n),n=n.sibling}function ld(e,t,n){if(_t&&typeof _t.onCommitFiberUnmount=="function")try{_t.onCommitFiberUnmount(el,n)}catch{}switch(n.tag){case 5:Oe||Jn(n,t);case 6:var r=Ie,o=mt;Ie=null,Qt(e,t,n),Ie=r,mt=o,Ie!==null&&(mt?(e=Ie,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ie.removeChild(n.stateNode));break;case 18:Ie!==null&&(mt?(e=Ie,n=n.stateNode,e.nodeType===8?Wl(e.parentNode,n):e.nodeType===1&&Wl(e,n),ao(e)):Wl(Ie,n.stateNode));break;case 4:r=Ie,o=mt,Ie=n.stateNode.containerInfo,mt=!0,Qt(e,t,n),Ie=r,mt=o;break;case 0:case 11:case 14:case 15:if(!Oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Ua(n,t,l),o=o.next}while(o!==r)}Qt(e,t,n);break;case 1:if(!Oe&&(Jn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){fe(n,t,a)}Qt(e,t,n);break;case 21:Qt(e,t,n);break;case 22:n.mode&1?(Oe=(r=Oe)||n.memoizedState!==null,Qt(e,t,n),Oe=r):Qt(e,t,n);break;default:Qt(e,t,n)}}function wc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Cp),t.forEach(function(r){var o=zp.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function ht(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:Ie=a.stateNode,mt=!1;break e;case 3:Ie=a.stateNode.containerInfo,mt=!0;break e;case 4:Ie=a.stateNode.containerInfo,mt=!0;break e}a=a.return}if(Ie===null)throw Error($(160));ld(i,l,o),Ie=null,mt=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){fe(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ad(t,e),t=t.sibling}function ad(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ht(t,e),kt(e),r&4){try{Yr(3,e,e.return),sl(3,e)}catch(b){fe(e,e.return,b)}try{Yr(5,e,e.return)}catch(b){fe(e,e.return,b)}}break;case 1:ht(t,e),kt(e),r&512&&n!==null&&Jn(n,n.return);break;case 5:if(ht(t,e),kt(e),r&512&&n!==null&&Jn(n,n.return),e.flags&32){var o=e.stateNode;try{ro(o,"")}catch(b){fe(e,e.return,b)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&C1(o,i),ga(a,l);var u=ga(a,i);for(l=0;l<s.length;l+=2){var p=s[l],d=s[l+1];p==="style"?R1(o,d):p==="dangerouslySetInnerHTML"?P1(o,d):p==="children"?ro(o,d):vs(o,p,d,u)}switch(a){case"input":ha(o,i);break;case"textarea":T1(o,i);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?nr(o,!!i.multiple,y,!1):g!==!!i.multiple&&(i.defaultValue!=null?nr(o,!!i.multiple,i.defaultValue,!0):nr(o,!!i.multiple,i.multiple?[]:"",!1))}o[mo]=i}catch(b){fe(e,e.return,b)}}break;case 6:if(ht(t,e),kt(e),r&4){if(e.stateNode===null)throw Error($(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(b){fe(e,e.return,b)}}break;case 3:if(ht(t,e),kt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ao(t.containerInfo)}catch(b){fe(e,e.return,b)}break;case 4:ht(t,e),kt(e);break;case 13:ht(t,e),kt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Xs=ve())),r&4&&wc(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(Oe=(u=Oe)||p,ht(t,e),Oe=u):ht(t,e),kt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(R=e,p=e.child;p!==null;){for(d=R=p;R!==null;){switch(g=R,y=g.child,g.tag){case 0:case 11:case 14:case 15:Yr(4,g,g.return);break;case 1:Jn(g,g.return);var w=g.stateNode;if(typeof w.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(b){fe(r,n,b)}}break;case 5:Jn(g,g.return);break;case 22:if(g.memoizedState!==null){bc(d);continue}}y!==null?(y.return=g,R=y):bc(d)}p=p.sibling}e:for(p=null,d=e;;){if(d.tag===5){if(p===null){p=d;try{o=d.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=d.stateNode,s=d.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=L1("display",l))}catch(b){fe(e,e.return,b)}}}else if(d.tag===6){if(p===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(b){fe(e,e.return,b)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;p===d&&(p=null),d=d.return}p===d&&(p=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:ht(t,e),kt(e),r&4&&wc(e);break;case 21:break;default:ht(t,e),kt(e)}}function kt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(id(n)){var r=n;break e}n=n.return}throw Error($(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(ro(o,""),r.flags&=-33);var i=xc(e);Va(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=xc(e);Qa(e,a,l);break;default:throw Error($(161))}}catch(s){fe(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ip(e,t,n){R=e,sd(e)}function sd(e,t,n){for(var r=(e.mode&1)!==0;R!==null;){var o=R,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||Uo;if(!l){var a=o.alternate,s=a!==null&&a.memoizedState!==null||Oe;a=Uo;var u=Oe;if(Uo=l,(Oe=s)&&!u)for(R=o;R!==null;)l=R,s=l.child,l.tag===22&&l.memoizedState!==null?Ec(o):s!==null?(s.return=l,R=s):Ec(o);for(;i!==null;)R=i,sd(i),i=i.sibling;R=o,Uo=a,Oe=u}kc(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,R=i):kc(e)}}function kc(e){for(;R!==null;){var t=R;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Oe||sl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Oe)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:dt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&ic(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ic(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var d=p.dehydrated;d!==null&&ao(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error($(163))}Oe||t.flags&512&&Ha(t)}catch(g){fe(t,t.return,g)}}if(t===e){R=null;break}if(n=t.sibling,n!==null){n.return=t.return,R=n;break}R=t.return}}function bc(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var n=t.sibling;if(n!==null){n.return=t.return,R=n;break}R=t.return}}function Ec(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{sl(4,t)}catch(s){fe(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){fe(t,o,s)}}var i=t.return;try{Ha(t)}catch(s){fe(t,i,s)}break;case 5:var l=t.return;try{Ha(t)}catch(s){fe(t,l,s)}}}catch(s){fe(t,t.return,s)}if(t===e){R=null;break}var a=t.sibling;if(a!==null){a.return=t.return,R=a;break}R=t.return}}var Pp=Math.ceil,Di=Ut.ReactCurrentDispatcher,Ks=Ut.ReactCurrentOwner,at=Ut.ReactCurrentBatchConfig,Y=0,Ce=null,xe=null,Pe=0,Xe=0,qn=fn(0),Se=0,xo=null,In=0,ul=0,Ys=0,Xr=null,Ue=null,Xs=0,pr=1/0,Lt=null,ji=!1,Ga=null,on=null,Ho=!1,Jt=null,Oi=0,Zr=0,Ka=null,si=-1,ui=0;function Be(){return Y&6?ve():si!==-1?si:si=ve()}function ln(e){return e.mode&1?Y&2&&Pe!==0?Pe&-Pe:pp.transition!==null?(ui===0&&(ui=V1()),ui):(e=te,e!==0||(e=window.event,e=e===void 0?16:q1(e.type)),e):1}function gt(e,t,n,r){if(50<Zr)throw Zr=0,Ka=null,Error($(185));So(e,n,r),(!(Y&2)||e!==Ce)&&(e===Ce&&(!(Y&2)&&(ul|=n),Se===4&&Xt(e,Pe)),Ge(e,r),n===1&&Y===0&&!(t.mode&1)&&(pr=ve()+500,il&&pn()))}function Ge(e,t){var n=e.callbackNode;pf(e,t);var r=wi(e,e===Ce?Pe:0);if(r===0)n!==null&&Pu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Pu(n),t===1)e.tag===0?fp(Sc.bind(null,e)):yh(Sc.bind(null,e)),cp(function(){!(Y&6)&&pn()}),n=null;else{switch(G1(r)){case 1:n=bs;break;case 4:n=H1;break;case 16:n=xi;break;case 536870912:n=Q1;break;default:n=xi}n=gd(n,ud.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ud(e,t){if(si=-1,ui=0,Y&6)throw Error($(327));var n=e.callbackNode;if(ar()&&e.callbackNode!==n)return null;var r=wi(e,e===Ce?Pe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ni(e,r);else{t=r;var o=Y;Y|=2;var i=hd();(Ce!==e||Pe!==t)&&(Lt=null,pr=ve()+500,Mn(e,t));do try{Dp();break}catch(a){cd(e,a)}while(!0);Ds(),Di.current=i,Y=o,xe!==null?t=0:(Ce=null,Pe=0,t=Se)}if(t!==0){if(t===2&&(o=ka(e),o!==0&&(r=o,t=Ya(e,o))),t===1)throw n=xo,Mn(e,0),Xt(e,r),Ge(e,ve()),n;if(t===6)Xt(e,r);else{if(o=e.current.alternate,!(r&30)&&!Lp(o)&&(t=Ni(e,r),t===2&&(i=ka(e),i!==0&&(r=i,t=Ya(e,i))),t===1))throw n=xo,Mn(e,0),Xt(e,r),Ge(e,ve()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error($(345));case 2:xn(e,Ue,Lt);break;case 3:if(Xt(e,r),(r&130023424)===r&&(t=Xs+500-ve(),10<t)){if(wi(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Be(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ca(xn.bind(null,e,Ue,Lt),t);break}xn(e,Ue,Lt);break;case 4:if(Xt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-pt(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=ve()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Pp(r/1960))-r,10<r){e.timeoutHandle=Ca(xn.bind(null,e,Ue,Lt),r);break}xn(e,Ue,Lt);break;case 5:xn(e,Ue,Lt);break;default:throw Error($(329))}}}return Ge(e,ve()),e.callbackNode===n?ud.bind(null,e):null}function Ya(e,t){var n=Xr;return e.current.memoizedState.isDehydrated&&(Mn(e,t).flags|=256),e=Ni(e,t),e!==2&&(t=Ue,Ue=n,t!==null&&Xa(t)),e}function Xa(e){Ue===null?Ue=e:Ue.push.apply(Ue,e)}function Lp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!yt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Xt(e,t){for(t&=~Ys,t&=~ul,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-pt(t),r=1<<n;e[n]=-1,t&=~r}}function Sc(e){if(Y&6)throw Error($(327));ar();var t=wi(e,0);if(!(t&1))return Ge(e,ve()),null;var n=Ni(e,t);if(e.tag!==0&&n===2){var r=ka(e);r!==0&&(t=r,n=Ya(e,r))}if(n===1)throw n=xo,Mn(e,0),Xt(e,t),Ge(e,ve()),n;if(n===6)throw Error($(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,xn(e,Ue,Lt),Ge(e,ve()),null}function Zs(e,t){var n=Y;Y|=1;try{return e(t)}finally{Y=n,Y===0&&(pr=ve()+500,il&&pn())}}function Pn(e){Jt!==null&&Jt.tag===0&&!(Y&6)&&ar();var t=Y;Y|=1;var n=at.transition,r=te;try{if(at.transition=null,te=1,e)return e()}finally{te=r,at.transition=n,Y=t,!(Y&6)&&pn()}}function Js(){Xe=qn.current,ie(qn)}function Mn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,up(n)),xe!==null)for(n=xe.return;n!==null;){var r=n;switch(Ps(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Mi();break;case 3:mr(),ie(Qe),ie(Ne),Fs();break;case 5:Bs(r);break;case 4:mr();break;case 13:ie(ue);break;case 19:ie(ue);break;case 10:js(r.type._context);break;case 22:case 23:Js()}n=n.return}if(Ce=e,xe=e=an(e.current,null),Pe=Xe=t,Se=0,xo=null,Ys=ul=In=0,Ue=Xr=null,kn!==null){for(t=0;t<kn.length;t++)if(n=kn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}kn=null}return e}function cd(e,t){do{var n=xe;try{if(Ds(),ii.current=Ri,Li){for(var r=ce.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Li=!1}if(Tn=0,Ae=Ee=ce=null,Kr=!1,go=0,Ks.current=null,n===null||n.return===null){Se=1,xo=t,xe=null;break}e:{var i=e,l=n.return,a=n,s=t;if(t=Pe,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,p=a,d=p.tag;if(!(p.mode&1)&&(d===0||d===11||d===15)){var g=p.alternate;g?(p.updateQueue=g.updateQueue,p.memoizedState=g.memoizedState,p.lanes=g.lanes):(p.updateQueue=null,p.memoizedState=null)}var y=hc(l);if(y!==null){y.flags&=-257,dc(y,l,a,i,t),y.mode&1&&cc(i,u,t),t=y,s=u;var w=t.updateQueue;if(w===null){var b=new Set;b.add(s),t.updateQueue=b}else w.add(s);break e}else{if(!(t&1)){cc(i,u,t),qs();break e}s=Error($(426))}}else if(ae&&a.mode&1){var T=hc(l);if(T!==null){!(T.flags&65536)&&(T.flags|=256),dc(T,l,a,i,t),Ls(fr(s,a));break e}}i=s=fr(s,a),Se!==4&&(Se=2),Xr===null?Xr=[i]:Xr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var m=Gh(i,s,t);oc(i,m);break e;case 1:a=s;var c=i.type,f=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(on===null||!on.has(f)))){i.flags|=65536,t&=-t,i.lanes|=t;var x=Kh(i,a,t);oc(i,x);break e}}i=i.return}while(i!==null)}md(n)}catch(S){t=S,xe===n&&n!==null&&(xe=n=n.return);continue}break}while(!0)}function hd(){var e=Di.current;return Di.current=Ri,e===null?Ri:e}function qs(){(Se===0||Se===3||Se===2)&&(Se=4),Ce===null||!(In&268435455)&&!(ul&268435455)||Xt(Ce,Pe)}function Ni(e,t){var n=Y;Y|=2;var r=hd();(Ce!==e||Pe!==t)&&(Lt=null,Mn(e,t));do try{Rp();break}catch(o){cd(e,o)}while(!0);if(Ds(),Y=n,Di.current=r,xe!==null)throw Error($(261));return Ce=null,Pe=0,Se}function Rp(){for(;xe!==null;)dd(xe)}function Dp(){for(;xe!==null&&!lf();)dd(xe)}function dd(e){var t=pd(e.alternate,e,Xe);e.memoizedProps=e.pendingProps,t===null?md(e):xe=t,Ks.current=null}function md(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=$p(n,t),n!==null){n.flags&=32767,xe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Se=6,xe=null;return}}else if(n=_p(n,t,Xe),n!==null){xe=n;return}if(t=t.sibling,t!==null){xe=t;return}xe=t=e}while(t!==null);Se===0&&(Se=5)}function xn(e,t,n){var r=te,o=at.transition;try{at.transition=null,te=1,jp(e,t,n,r)}finally{at.transition=o,te=r}return null}function jp(e,t,n,r){do ar();while(Jt!==null);if(Y&6)throw Error($(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error($(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(gf(e,i),e===Ce&&(xe=Ce=null,Pe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ho||(Ho=!0,gd(xi,function(){return ar(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=at.transition,at.transition=null;var l=te;te=1;var a=Y;Y|=4,Ks.current=null,Tp(e,n),ad(n,e),np(_a),ki=!!Aa,_a=Aa=null,e.current=n,Ip(n),af(),Y=a,te=l,at.transition=i}else e.current=n;if(Ho&&(Ho=!1,Jt=e,Oi=o),i=e.pendingLanes,i===0&&(on=null),cf(n.stateNode),Ge(e,ve()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(ji)throw ji=!1,e=Ga,Ga=null,e;return Oi&1&&e.tag!==0&&ar(),i=e.pendingLanes,i&1?e===Ka?Zr++:(Zr=0,Ka=e):Zr=0,pn(),null}function ar(){if(Jt!==null){var e=G1(Oi),t=at.transition,n=te;try{if(at.transition=null,te=16>e?16:e,Jt===null)var r=!1;else{if(e=Jt,Jt=null,Oi=0,Y&6)throw Error($(331));var o=Y;for(Y|=4,R=e.current;R!==null;){var i=R,l=i.child;if(R.flags&16){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(R=u;R!==null;){var p=R;switch(p.tag){case 0:case 11:case 15:Yr(8,p,i)}var d=p.child;if(d!==null)d.return=p,R=d;else for(;R!==null;){p=R;var g=p.sibling,y=p.return;if(od(p),p===u){R=null;break}if(g!==null){g.return=y,R=g;break}R=y}}}var w=i.alternate;if(w!==null){var b=w.child;if(b!==null){w.child=null;do{var T=b.sibling;b.sibling=null,b=T}while(b!==null)}}R=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,R=l;else e:for(;R!==null;){if(i=R,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Yr(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,R=m;break e}R=i.return}}var c=e.current;for(R=c;R!==null;){l=R;var f=l.child;if(l.subtreeFlags&2064&&f!==null)f.return=l,R=f;else e:for(l=c;R!==null;){if(a=R,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:sl(9,a)}}catch(S){fe(a,a.return,S)}if(a===l){R=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,R=x;break e}R=a.return}}if(Y=o,pn(),_t&&typeof _t.onPostCommitFiberRoot=="function")try{_t.onPostCommitFiberRoot(el,e)}catch{}r=!0}return r}finally{te=n,at.transition=t}}return!1}function Mc(e,t,n){t=fr(n,t),t=Gh(e,t,1),e=rn(e,t,1),t=Be(),e!==null&&(So(e,1,t),Ge(e,t))}function fe(e,t,n){if(e.tag===3)Mc(e,e,n);else for(;t!==null;){if(t.tag===3){Mc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(on===null||!on.has(r))){e=fr(n,e),e=Kh(t,e,1),t=rn(t,e,1),e=Be(),t!==null&&(So(t,1,e),Ge(t,e));break}}t=t.return}}function Op(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Be(),e.pingedLanes|=e.suspendedLanes&n,Ce===e&&(Pe&n)===n&&(Se===4||Se===3&&(Pe&130023424)===Pe&&500>ve()-Xs?Mn(e,0):Ys|=n),Ge(e,t)}function fd(e,t){t===0&&(e.mode&1?(t=Ro,Ro<<=1,!(Ro&130023424)&&(Ro=4194304)):t=1);var n=Be();e=Ft(e,t),e!==null&&(So(e,t,n),Ge(e,n))}function Np(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),fd(e,n)}function zp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error($(314))}r!==null&&r.delete(t),fd(e,n)}var pd;pd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Qe.current)He=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return He=!1,Ap(e,t,n);He=!!(e.flags&131072)}else He=!1,ae&&t.flags&1048576&&xh(t,$i,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ai(e,t),e=t.pendingProps;var o=cr(t,Ne.current);lr(t,n),o=Us(null,t,r,e,o,n);var i=Hs();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ve(r)?(i=!0,Ai(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ns(t),o.updater=al,t.stateNode=o,o._reactInternals=t,ja(t,r,e,n),t=za(null,t,r,!0,i,n)):(t.tag=0,ae&&i&&Is(t),ze(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ai(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Fp(r),e=dt(r,e),o){case 0:t=Na(null,t,r,e,n);break e;case 1:t=pc(null,t,r,e,n);break e;case 11:t=mc(null,t,r,e,n);break e;case 14:t=fc(null,t,r,dt(r.type,e),n);break e}throw Error($(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:dt(r,o),Na(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:dt(r,o),pc(e,t,r,o,n);case 3:e:{if(Jh(t),e===null)throw Error($(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Mh(e,t),Ii(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=fr(Error($(423)),t),t=gc(e,t,r,n,o);break e}else if(r!==o){o=fr(Error($(424)),t),t=gc(e,t,r,n,o);break e}else for(Je=nn(t.stateNode.containerInfo.firstChild),qe=t,ae=!0,ft=null,n=Eh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(hr(),r===o){t=Wt(e,t,n);break e}ze(e,t,r,n)}t=t.child}return t;case 5:return Ah(t),e===null&&La(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,$a(r,o)?l=null:i!==null&&$a(r,i)&&(t.flags|=32),Zh(e,t),ze(e,t,l,n),t.child;case 6:return e===null&&La(t),null;case 13:return qh(e,t,n);case 4:return zs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=dr(t,null,r,n):ze(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:dt(r,o),mc(e,t,r,o,n);case 7:return ze(e,t,t.pendingProps,n),t.child;case 8:return ze(e,t,t.pendingProps.children,n),t.child;case 12:return ze(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,ne(Ci,r._currentValue),r._currentValue=l,i!==null)if(yt(i.value,l)){if(i.children===o.children&&!Qe.current){t=Wt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=Nt(-1,n&-n),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?s.next=s:(s.next=p.next,p.next=s),u.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Ra(i.return,n,t),a.lanes|=n;break}s=s.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error($(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Ra(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}ze(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,lr(t,n),o=st(o),r=r(o),t.flags|=1,ze(e,t,r,n),t.child;case 14:return r=t.type,o=dt(r,t.pendingProps),o=dt(r.type,o),fc(e,t,r,o,n);case 15:return Yh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:dt(r,o),ai(e,t),t.tag=1,Ve(r)?(e=!0,Ai(t)):e=!1,lr(t,n),Vh(t,r,o),ja(t,r,o,n),za(null,t,r,!0,e,n);case 19:return ed(e,t,n);case 22:return Xh(e,t,n)}throw Error($(156,t.tag))};function gd(e,t){return U1(e,t)}function Bp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function lt(e,t,n,r){return new Bp(e,t,n,r)}function eu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Fp(e){if(typeof e=="function")return eu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===xs)return 11;if(e===ws)return 14}return 2}function an(e,t){var n=e.alternate;return n===null?(n=lt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ci(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")eu(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Un:return An(n.children,o,i,t);case ys:l=8,o|=8;break;case la:return e=lt(12,n,t,o|2),e.elementType=la,e.lanes=i,e;case aa:return e=lt(13,n,t,o),e.elementType=aa,e.lanes=i,e;case sa:return e=lt(19,n,t,o),e.elementType=sa,e.lanes=i,e;case A1:return cl(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case S1:l=10;break e;case M1:l=9;break e;case xs:l=11;break e;case ws:l=14;break e;case Gt:l=16,r=null;break e}throw Error($(130,e==null?e:typeof e,""))}return t=lt(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function An(e,t,n,r){return e=lt(7,e,r,t),e.lanes=n,e}function cl(e,t,n,r){return e=lt(22,e,r,t),e.elementType=A1,e.lanes=n,e.stateNode={isHidden:!1},e}function Xl(e,t,n){return e=lt(6,e,null,t),e.lanes=n,e}function Zl(e,t,n){return t=lt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Wp(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Il(0),this.expirationTimes=Il(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Il(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function tu(e,t,n,r,o,i,l,a,s){return e=new Wp(e,t,n,a,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=lt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ns(i),e}function Up(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function vd(e){if(!e)return cn;e=e._reactInternals;e:{if(On(e)!==e||e.tag!==1)throw Error($(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ve(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error($(171))}if(e.tag===1){var n=e.type;if(Ve(n))return vh(e,n,t)}return t}function yd(e,t,n,r,o,i,l,a,s){return e=tu(n,r,!0,e,o,i,l,a,s),e.context=vd(null),n=e.current,r=Be(),o=ln(n),i=Nt(r,o),i.callback=t??null,rn(n,i,o),e.current.lanes=o,So(e,o,r),Ge(e,r),e}function hl(e,t,n,r){var o=t.current,i=Be(),l=ln(o);return n=vd(n),t.context===null?t.context=n:t.pendingContext=n,t=Nt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=rn(o,t,l),e!==null&&(gt(e,o,l,i),oi(e,o,l)),l}function zi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ac(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function nu(e,t){Ac(e,t),(e=e.alternate)&&Ac(e,t)}function Hp(){return null}var xd=typeof reportError=="function"?reportError:function(e){console.error(e)};function ru(e){this._internalRoot=e}dl.prototype.render=ru.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error($(409));hl(e,t,null,null)};dl.prototype.unmount=ru.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Pn(function(){hl(null,e,null,null)}),t[Bt]=null}};function dl(e){this._internalRoot=e}dl.prototype.unstable_scheduleHydration=function(e){if(e){var t=X1();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Yt.length&&t!==0&&t<Yt[n].priority;n++);Yt.splice(n,0,e),n===0&&J1(e)}};function ou(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ml(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function _c(){}function Qp(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=zi(l);i.call(u)}}var l=yd(t,r,e,0,null,!1,!1,"",_c);return e._reactRootContainer=l,e[Bt]=l.current,co(e.nodeType===8?e.parentNode:e),Pn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var u=zi(s);a.call(u)}}var s=tu(e,0,!1,null,null,!1,!1,"",_c);return e._reactRootContainer=s,e[Bt]=s.current,co(e.nodeType===8?e.parentNode:e),Pn(function(){hl(t,s,n,r)}),s}function fl(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var s=zi(l);a.call(s)}}hl(t,l,e,o)}else l=Qp(n,t,e,o,r);return zi(l)}K1=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=zr(t.pendingLanes);n!==0&&(Es(t,n|1),Ge(t,ve()),!(Y&6)&&(pr=ve()+500,pn()))}break;case 13:Pn(function(){var r=Ft(e,1);if(r!==null){var o=Be();gt(r,e,1,o)}}),nu(e,1)}};Ss=function(e){if(e.tag===13){var t=Ft(e,134217728);if(t!==null){var n=Be();gt(t,e,134217728,n)}nu(e,134217728)}};Y1=function(e){if(e.tag===13){var t=ln(e),n=Ft(e,t);if(n!==null){var r=Be();gt(n,e,t,r)}nu(e,t)}};X1=function(){return te};Z1=function(e,t){var n=te;try{return te=e,t()}finally{te=n}};ya=function(e,t,n){switch(t){case"input":if(ha(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=ol(r);if(!o)throw Error($(90));$1(r),ha(r,o)}}}break;case"textarea":T1(e,n);break;case"select":t=n.value,t!=null&&nr(e,!!n.multiple,t,!1)}};O1=Zs;N1=Pn;var Vp={usingClientEntryPoint:!1,Events:[Ao,Gn,ol,D1,j1,Zs]},Lr={findFiberByHostInstance:wn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Gp={bundleType:Lr.bundleType,version:Lr.version,rendererPackageName:Lr.rendererPackageName,rendererConfig:Lr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ut.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=F1(e),e===null?null:e.stateNode},findFiberByHostInstance:Lr.findFiberByHostInstance||Hp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qo.isDisabled&&Qo.supportsFiber)try{el=Qo.inject(Gp),_t=Qo}catch{}}tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vp;tt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ou(t))throw Error($(200));return Up(e,t,null,n)};tt.createRoot=function(e,t){if(!ou(e))throw Error($(299));var n=!1,r="",o=xd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=tu(e,1,!1,null,null,n,!1,r,o),e[Bt]=t.current,co(e.nodeType===8?e.parentNode:e),new ru(t)};tt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error($(188)):(e=Object.keys(e).join(","),Error($(268,e)));return e=F1(t),e=e===null?null:e.stateNode,e};tt.flushSync=function(e){return Pn(e)};tt.hydrate=function(e,t,n){if(!ml(t))throw Error($(200));return fl(null,e,t,!0,n)};tt.hydrateRoot=function(e,t,n){if(!ou(e))throw Error($(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=xd;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=yd(t,null,e,1,n??null,o,!1,i,l),e[Bt]=t.current,co(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new dl(t)};tt.render=function(e,t,n){if(!ml(t))throw Error($(200));return fl(null,e,t,!1,n)};tt.unmountComponentAtNode=function(e){if(!ml(e))throw Error($(40));return e._reactRootContainer?(Pn(function(){fl(null,null,e,!1,function(){e._reactRootContainer=null,e[Bt]=null})}),!0):!1};tt.unstable_batchedUpdates=Zs;tt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ml(n))throw Error($(200));if(e==null||e._reactInternals===void 0)throw Error($(38));return fl(e,t,n,!1,r)};tt.version="18.3.1-next-f1338f8080-20240426";function wd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(wd)}catch(e){console.error(e)}}wd(),w1.exports=tt;var kd=w1.exports,bd,$c=kd;bd=$c.createRoot,$c.hydrateRoot;var $e=function(){return $e=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},$e.apply(this,arguments)};function wo(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var oe="-ms-",Jr="-moz-",J="-webkit-",Ed="comm",pl="rule",iu="decl",Kp="@import",Sd="@keyframes",Yp="@layer",Md=Math.abs,lu=String.fromCharCode,Za=Object.assign;function Xp(e,t){return _e(e,0)^45?(((t<<2^_e(e,0))<<2^_e(e,1))<<2^_e(e,2))<<2^_e(e,3):0}function Ad(e){return e.trim()}function Rt(e,t){return(e=t.exec(e))?e[0]:e}function W(e,t,n){return e.replace(t,n)}function hi(e,t,n){return e.indexOf(t,n)}function _e(e,t){return e.charCodeAt(t)|0}function gr(e,t,n){return e.slice(t,n)}function Mt(e){return e.length}function _d(e){return e.length}function Fr(e,t){return t.push(e),e}function Zp(e,t){return e.map(t).join("")}function Cc(e,t){return e.filter(function(n){return!Rt(n,t)})}var gl=1,vr=1,$d=0,ct=0,ye=0,Sr="";function vl(e,t,n,r,o,i,l,a){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:gl,column:vr,length:l,return:"",siblings:a}}function Vt(e,t){return Za(vl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Bn(e){for(;e.root;)e=Vt(e.root,{children:[e]});Fr(e,e.siblings)}function Jp(){return ye}function qp(){return ye=ct>0?_e(Sr,--ct):0,vr--,ye===10&&(vr=1,gl--),ye}function vt(){return ye=ct<$d?_e(Sr,ct++):0,vr++,ye===10&&(vr=1,gl++),ye}function _n(){return _e(Sr,ct)}function di(){return ct}function yl(e,t){return gr(Sr,e,t)}function Ja(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function e0(e){return gl=vr=1,$d=Mt(Sr=e),ct=0,[]}function t0(e){return Sr="",e}function Jl(e){return Ad(yl(ct-1,qa(e===91?e+2:e===40?e+1:e)))}function n0(e){for(;(ye=_n())&&ye<33;)vt();return Ja(e)>2||Ja(ye)>3?"":" "}function r0(e,t){for(;--t&&vt()&&!(ye<48||ye>102||ye>57&&ye<65||ye>70&&ye<97););return yl(e,di()+(t<6&&_n()==32&&vt()==32))}function qa(e){for(;vt();)switch(ye){case e:return ct;case 34:case 39:e!==34&&e!==39&&qa(ye);break;case 40:e===41&&qa(e);break;case 92:vt();break}return ct}function o0(e,t){for(;vt()&&e+ye!==57;)if(e+ye===84&&_n()===47)break;return"/*"+yl(t,ct-1)+"*"+lu(e===47?e:vt())}function i0(e){for(;!Ja(_n());)vt();return yl(e,ct)}function l0(e){return t0(mi("",null,null,null,[""],e=e0(e),0,[0],e))}function mi(e,t,n,r,o,i,l,a,s){for(var u=0,p=0,d=l,g=0,y=0,w=0,b=1,T=1,m=1,c=0,f="",x=o,S=i,E=r,M=f;T;)switch(w=c,c=vt()){case 40:if(w!=108&&_e(M,d-1)==58){hi(M+=W(Jl(c),"&","&\f"),"&\f",Md(u?a[u-1]:0))!=-1&&(m=-1);break}case 34:case 39:case 91:M+=Jl(c);break;case 9:case 10:case 13:case 32:M+=n0(w);break;case 92:M+=r0(di()-1,7);continue;case 47:switch(_n()){case 42:case 47:Fr(a0(o0(vt(),di()),t,n,s),s);break;default:M+="/"}break;case 123*b:a[u++]=Mt(M)*m;case 125*b:case 59:case 0:switch(c){case 0:case 125:T=0;case 59+p:m==-1&&(M=W(M,/\f/g,"")),y>0&&Mt(M)-d&&Fr(y>32?Ic(M+";",r,n,d-1,s):Ic(W(M," ","")+";",r,n,d-2,s),s);break;case 59:M+=";";default:if(Fr(E=Tc(M,t,n,u,p,o,a,f,x=[],S=[],d,i),i),c===123)if(p===0)mi(M,t,E,E,x,i,d,a,S);else switch(g===99&&_e(M,3)===110?100:g){case 100:case 108:case 109:case 115:mi(e,E,E,r&&Fr(Tc(e,E,E,0,0,o,a,f,o,x=[],d,S),S),o,S,d,a,r?x:S);break;default:mi(M,E,E,E,[""],S,0,a,S)}}u=p=y=0,b=m=1,f=M="",d=l;break;case 58:d=1+Mt(M),y=w;default:if(b<1){if(c==123)--b;else if(c==125&&b++==0&&qp()==125)continue}switch(M+=lu(c),c*b){case 38:m=p>0?1:(M+="\f",-1);break;case 44:a[u++]=(Mt(M)-1)*m,m=1;break;case 64:_n()===45&&(M+=Jl(vt())),g=_n(),p=d=Mt(f=M+=i0(di())),c++;break;case 45:w===45&&Mt(M)==2&&(b=0)}}return i}function Tc(e,t,n,r,o,i,l,a,s,u,p,d){for(var g=o-1,y=o===0?i:[""],w=_d(y),b=0,T=0,m=0;b<r;++b)for(var c=0,f=gr(e,g+1,g=Md(T=l[b])),x=e;c<w;++c)(x=Ad(T>0?y[c]+" "+f:W(f,/&\f/g,y[c])))&&(s[m++]=x);return vl(e,t,n,o===0?pl:a,s,u,p,d)}function a0(e,t,n,r){return vl(e,t,n,Ed,lu(Jp()),gr(e,2,-2),0,r)}function Ic(e,t,n,r,o){return vl(e,t,n,iu,gr(e,0,r),gr(e,r+1,-1),r,o)}function Cd(e,t,n){switch(Xp(e,t)){case 5103:return J+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return J+e+e;case 4789:return Jr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return J+e+Jr+e+oe+e+e;case 5936:switch(_e(e,t+11)){case 114:return J+e+oe+W(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return J+e+oe+W(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return J+e+oe+W(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return J+e+oe+e+e;case 6165:return J+e+oe+"flex-"+e+e;case 5187:return J+e+W(e,/(\w+).+(:[^]+)/,J+"box-$1$2"+oe+"flex-$1$2")+e;case 5443:return J+e+oe+"flex-item-"+W(e,/flex-|-self/g,"")+(Rt(e,/flex-|baseline/)?"":oe+"grid-row-"+W(e,/flex-|-self/g,""))+e;case 4675:return J+e+oe+"flex-line-pack"+W(e,/align-content|flex-|-self/g,"")+e;case 5548:return J+e+oe+W(e,"shrink","negative")+e;case 5292:return J+e+oe+W(e,"basis","preferred-size")+e;case 6060:return J+"box-"+W(e,"-grow","")+J+e+oe+W(e,"grow","positive")+e;case 4554:return J+W(e,/([^-])(transform)/g,"$1"+J+"$2")+e;case 6187:return W(W(W(e,/(zoom-|grab)/,J+"$1"),/(image-set)/,J+"$1"),e,"")+e;case 5495:case 3959:return W(e,/(image-set\([^]*)/,J+"$1$`$1");case 4968:return W(W(e,/(.+:)(flex-)?(.*)/,J+"box-pack:$3"+oe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+J+e+e;case 4200:if(!Rt(e,/flex-|baseline/))return oe+"grid-column-align"+gr(e,t)+e;break;case 2592:case 3360:return oe+W(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,Rt(r.props,/grid-\w+-end/)})?~hi(e+(n=n[t].value),"span",0)?e:oe+W(e,"-start","")+e+oe+"grid-row-span:"+(~hi(n,"span",0)?Rt(n,/\d+/):+Rt(n,/\d+/)-+Rt(e,/\d+/))+";":oe+W(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Rt(r.props,/grid-\w+-start/)})?e:oe+W(W(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return W(e,/(.+)-inline(.+)/,J+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Mt(e)-1-t>6)switch(_e(e,t+1)){case 109:if(_e(e,t+4)!==45)break;case 102:return W(e,/(.+:)(.+)-([^]+)/,"$1"+J+"$2-$3$1"+Jr+(_e(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~hi(e,"stretch",0)?Cd(W(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return W(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,l,a,s,u){return oe+o+":"+i+u+(l?oe+o+"-span:"+(a?s:+s-+i)+u:"")+e});case 4949:if(_e(e,t+6)===121)return W(e,":",":"+J)+e;break;case 6444:switch(_e(e,_e(e,14)===45?18:11)){case 120:return W(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+J+(_e(e,14)===45?"inline-":"")+"box$3$1"+J+"$2$3$1"+oe+"$2box$3")+e;case 100:return W(e,":",":"+oe)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return W(e,"scroll-","scroll-snap-")+e}return e}function Bi(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function s0(e,t,n,r){switch(e.type){case Yp:if(e.children.length)break;case Kp:case iu:return e.return=e.return||e.value;case Ed:return"";case Sd:return e.return=e.value+"{"+Bi(e.children,r)+"}";case pl:if(!Mt(e.value=e.props.join(",")))return""}return Mt(n=Bi(e.children,r))?e.return=e.value+"{"+n+"}":""}function u0(e){var t=_d(e);return function(n,r,o,i){for(var l="",a=0;a<t;a++)l+=e[a](n,r,o,i)||"";return l}}function c0(e){return function(t){t.root||(t=t.return)&&e(t)}}function h0(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case iu:e.return=Cd(e.value,e.length,n);return;case Sd:return Bi([Vt(e,{value:W(e.value,"@","@"+J)})],r);case pl:if(e.length)return Zp(n=e.props,function(o){switch(Rt(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Bn(Vt(e,{props:[W(o,/:(read-\w+)/,":"+Jr+"$1")]})),Bn(Vt(e,{props:[o]})),Za(e,{props:Cc(n,r)});break;case"::placeholder":Bn(Vt(e,{props:[W(o,/:(plac\w+)/,":"+J+"input-$1")]})),Bn(Vt(e,{props:[W(o,/:(plac\w+)/,":"+Jr+"$1")]})),Bn(Vt(e,{props:[W(o,/:(plac\w+)/,oe+"input-$1")]})),Bn(Vt(e,{props:[o]})),Za(e,{props:Cc(n,r)});break}return""})}}var d0={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ye={},yr=typeof process<"u"&&Ye!==void 0&&(Ye.REACT_APP_SC_ATTR||Ye.SC_ATTR)||"data-styled",Td="active",Id="data-styled-version",xl="6.1.13",au=`/*!sc*/
`,Fi=typeof window<"u"&&"HTMLElement"in window,m0=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ye!==void 0&&Ye.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ye.REACT_APP_SC_DISABLE_SPEEDY!==""?Ye.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ye.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ye!==void 0&&Ye.SC_DISABLE_SPEEDY!==void 0&&Ye.SC_DISABLE_SPEEDY!==""&&Ye.SC_DISABLE_SPEEDY!=="false"&&Ye.SC_DISABLE_SPEEDY),f0={},wl=Object.freeze([]),xr=Object.freeze({});function Pd(e,t,n){return n===void 0&&(n=xr),e.theme!==n.theme&&e.theme||t||n.theme}var Ld=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),p0=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,g0=/(^-|-$)/g;function Pc(e){return e.replace(p0,"-").replace(g0,"")}var v0=/(a)(d)/gi,Vo=52,Lc=function(e){return String.fromCharCode(e+(e>25?39:97))};function es(e){var t,n="";for(t=Math.abs(e);t>Vo;t=t/Vo|0)n=Lc(t%Vo)+n;return(Lc(t%Vo)+n).replace(v0,"$1-$2")}var ql,Rd=5381,er=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Dd=function(e){return er(Rd,e)};function jd(e){return es(Dd(e)>>>0)}function y0(e){return e.displayName||e.name||"Component"}function ea(e){return typeof e=="string"&&!0}var Od=typeof Symbol=="function"&&Symbol.for,Nd=Od?Symbol.for("react.memo"):60115,x0=Od?Symbol.for("react.forward_ref"):60112,w0={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},k0={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},zd={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},b0=((ql={})[x0]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ql[Nd]=zd,ql);function Rc(e){return("type"in(t=e)&&t.type.$$typeof)===Nd?zd:"$$typeof"in e?b0[e.$$typeof]:w0;var t}var E0=Object.defineProperty,S0=Object.getOwnPropertyNames,Dc=Object.getOwnPropertySymbols,M0=Object.getOwnPropertyDescriptor,A0=Object.getPrototypeOf,jc=Object.prototype;function Bd(e,t,n){if(typeof t!="string"){if(jc){var r=A0(t);r&&r!==jc&&Bd(e,r,n)}var o=S0(t);Dc&&(o=o.concat(Dc(t)));for(var i=Rc(e),l=Rc(t),a=0;a<o.length;++a){var s=o[a];if(!(s in k0||n&&n[s]||l&&s in l||i&&s in i)){var u=M0(t,s);try{E0(e,s,u)}catch{}}}}return e}function Ln(e){return typeof e=="function"}function su(e){return typeof e=="object"&&"styledComponentId"in e}function En(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function ts(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function ko(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ns(e,t,n){if(n===void 0&&(n=!1),!n&&!ko(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=ns(e[r],t[r]);else if(ko(t))for(var r in t)e[r]=ns(e[r],t[r]);return e}function uu(e,t){Object.defineProperty(e,"toString",{value:t})}function Rn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var _0=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw Rn(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var l=o;l<i;l++)this.groupSizes[l]=0}for(var a=this.indexOfGroup(t+1),s=(l=0,n.length);l<s;l++)this.tag.insertRule(a,n[l])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,l=o;l<i;l++)n+="".concat(this.tag.getRule(l)).concat(au);return n},e}(),fi=new Map,Wi=new Map,pi=1,Go=function(e){if(fi.has(e))return fi.get(e);for(;Wi.has(pi);)pi++;var t=pi++;return fi.set(e,t),Wi.set(t,e),t},$0=function(e,t){pi=t+1,fi.set(e,t),Wi.set(t,e)},C0="style[".concat(yr,"][").concat(Id,'="').concat(xl,'"]'),T0=new RegExp("^".concat(yr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),I0=function(e,t,n){for(var r,o=n.split(","),i=0,l=o.length;i<l;i++)(r=o[i])&&e.registerName(t,r)},P0=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(au),o=[],i=0,l=r.length;i<l;i++){var a=r[i].trim();if(a){var s=a.match(T0);if(s){var u=0|parseInt(s[1],10),p=s[2];u!==0&&($0(p,u),I0(e,p,s[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(a)}}},Oc=function(e){for(var t=document.querySelectorAll(C0),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(yr)!==Td&&(P0(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function L0(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Fd=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(a){var s=Array.from(a.querySelectorAll("style[".concat(yr,"]")));return s[s.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(yr,Td),r.setAttribute(Id,xl);var l=L0();return l&&r.setAttribute("nonce",l),n.insertBefore(r,i),r},R0=function(){function e(t){this.element=Fd(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,i=r.length;o<i;o++){var l=r[o];if(l.ownerNode===n)return l}throw Rn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),D0=function(){function e(t){this.element=Fd(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),j0=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Nc=Fi,O0={isServer:!Fi,useCSSOMInjection:!m0},Ui=function(){function e(t,n,r){t===void 0&&(t=xr),n===void 0&&(n={});var o=this;this.options=$e($e({},O0),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Fi&&Nc&&(Nc=!1,Oc(this)),uu(this,function(){return function(i){for(var l=i.getTag(),a=l.length,s="",u=function(d){var g=function(m){return Wi.get(m)}(d);if(g===void 0)return"continue";var y=i.names.get(g),w=l.getGroup(d);if(y===void 0||!y.size||w.length===0)return"continue";var b="".concat(yr,".g").concat(d,'[id="').concat(g,'"]'),T="";y!==void 0&&y.forEach(function(m){m.length>0&&(T+="".concat(m,","))}),s+="".concat(w).concat(b,'{content:"').concat(T,'"}').concat(au)},p=0;p<a;p++)u(p);return s}(o)})}return e.registerId=function(t){return Go(t)},e.prototype.rehydrate=function(){!this.server&&Fi&&Oc(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e($e($e({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new j0(o):r?new R0(o):new D0(o)}(this.options),new _0(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Go(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Go(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Go(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),N0=/&/g,z0=/^\s*\/\/.*$/gm;function Wd(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Wd(n.children,t)),n})}function B0(e){var t,n,r,o=xr,i=o.options,l=i===void 0?xr:i,a=o.plugins,s=a===void 0?wl:a,u=function(g,y,w){return w.startsWith(n)&&w.endsWith(n)&&w.replaceAll(n,"").length>0?".".concat(t):g},p=s.slice();p.push(function(g){g.type===pl&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(N0,n).replace(r,u))}),l.prefix&&p.push(h0),p.push(s0);var d=function(g,y,w,b){y===void 0&&(y=""),w===void 0&&(w=""),b===void 0&&(b="&"),t=b,n=y,r=new RegExp("\\".concat(n,"\\b"),"g");var T=g.replace(z0,""),m=l0(w||y?"".concat(w," ").concat(y," { ").concat(T," }"):T);l.namespace&&(m=Wd(m,l.namespace));var c=[];return Bi(m,u0(p.concat(c0(function(f){return c.push(f)})))),c};return d.hash=s.length?s.reduce(function(g,y){return y.name||Rn(15),er(g,y.name)},Rd).toString():"",d}var F0=new Ui,rs=B0(),Ud=h.createContext({shouldForwardProp:void 0,styleSheet:F0,stylis:rs});Ud.Consumer;h.createContext(void 0);function os(){return v.useContext(Ud)}var W0=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=rs);var l=r.name+i.hash;o.hasNameForId(r.id,l)||o.insertRules(r.id,l,i(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,uu(this,function(){throw Rn(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=rs),this.name+t.hash},e}(),U0=function(e){return e>="A"&&e<="Z"};function zc(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;U0(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Hd=function(e){return e==null||e===!1||e===""},Qd=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!Hd(i)&&(Array.isArray(i)&&i.isCss||Ln(i)?r.push("".concat(zc(o),":"),i,";"):ko(i)?r.push.apply(r,wo(wo(["".concat(o," {")],Qd(i),!1),["}"],!1)):r.push("".concat(zc(o),": ").concat((t=o,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in d0||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function sn(e,t,n,r){if(Hd(e))return[];if(su(e))return[".".concat(e.styledComponentId)];if(Ln(e)){if(!Ln(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return sn(o,t,n,r)}var i;return e instanceof W0?n?(e.inject(n,r),[e.getName(r)]):[e]:ko(e)?Qd(e):Array.isArray(e)?Array.prototype.concat.apply(wl,e.map(function(l){return sn(l,t,n,r)})):[e.toString()]}function Vd(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ln(n)&&!su(n))return!1}return!0}var H0=Dd(xl),Q0=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Vd(t),this.componentId=n,this.baseHash=er(H0,n),this.baseStyle=r,Ui.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=En(o,this.staticRulesId);else{var i=ts(sn(this.rules,t,n,r)),l=es(er(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,l)){var a=r(i,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,a)}o=En(o,l),this.staticRulesId=l}else{for(var s=er(this.baseHash,r.hash),u="",p=0;p<this.rules.length;p++){var d=this.rules[p];if(typeof d=="string")u+=d;else if(d){var g=ts(sn(d,t,n,r));s=er(s,g+p),u+=g}}if(u){var y=es(s>>>0);n.hasNameForId(this.componentId,y)||n.insertRules(this.componentId,y,r(u,".".concat(y),void 0,this.componentId)),o=En(o,y)}}return o},e}(),bo=h.createContext(void 0);bo.Consumer;function V0(e){var t=h.useContext(bo),n=v.useMemo(function(){return function(r,o){if(!r)throw Rn(14);if(Ln(r)){var i=r(o);return i}if(Array.isArray(r)||typeof r!="object")throw Rn(8);return o?$e($e({},o),r):r}(e.theme,t)},[e.theme,t]);return e.children?h.createElement(bo.Provider,{value:n},e.children):null}var ta={};function G0(e,t,n){var r=su(e),o=e,i=!ea(e),l=t.attrs,a=l===void 0?wl:l,s=t.componentId,u=s===void 0?function(x,S){var E=typeof x!="string"?"sc":Pc(x);ta[E]=(ta[E]||0)+1;var M="".concat(E,"-").concat(jd(xl+E+ta[E]));return S?"".concat(S,"-").concat(M):M}(t.displayName,t.parentComponentId):s,p=t.displayName,d=p===void 0?function(x){return ea(x)?"styled.".concat(x):"Styled(".concat(y0(x),")")}(e):p,g=t.displayName&&t.componentId?"".concat(Pc(t.displayName),"-").concat(t.componentId):t.componentId||u,y=r&&o.attrs?o.attrs.concat(a).filter(Boolean):a,w=t.shouldForwardProp;if(r&&o.shouldForwardProp){var b=o.shouldForwardProp;if(t.shouldForwardProp){var T=t.shouldForwardProp;w=function(x,S){return b(x,S)&&T(x,S)}}else w=b}var m=new Q0(n,g,r?o.componentStyle:void 0);function c(x,S){return function(E,M,I){var B=E.attrs,j=E.componentStyle,q=E.defaultProps,ee=E.foldedComponentIds,de=E.styledComponentId,me=E.target,se=h.useContext(bo),we=os(),ke=E.shouldForwardProp||we.shouldForwardProp,_=Pd(M,se,q)||xr,P=function(K,z,H){for(var Me,C=$e($e({},z),{className:void 0,theme:H}),F=0;F<K.length;F+=1){var Q=Ln(Me=K[F])?Me(C):Me;for(var X in Q)C[X]=X==="className"?En(C[X],Q[X]):X==="style"?$e($e({},C[X]),Q[X]):Q[X]}return z.className&&(C.className=En(C.className,z.className)),C}(B,M,_),D=P.as||me,G={};for(var U in P)P[U]===void 0||U[0]==="$"||U==="as"||U==="theme"&&P.theme===_||(U==="forwardedAs"?G.as=P.forwardedAs:ke&&!ke(U,D)||(G[U]=P[U]));var O=function(K,z){var H=os(),Me=K.generateAndInjectStyles(z,H.styleSheet,H.stylis);return Me}(j,P),N=En(ee,de);return O&&(N+=" "+O),P.className&&(N+=" "+P.className),G[ea(D)&&!Ld.has(D)?"class":"className"]=N,G.ref=I,v.createElement(D,G)}(f,x,S)}c.displayName=d;var f=h.forwardRef(c);return f.attrs=y,f.componentStyle=m,f.displayName=d,f.shouldForwardProp=w,f.foldedComponentIds=r?En(o.foldedComponentIds,o.styledComponentId):"",f.styledComponentId=g,f.target=r?o.target:e,Object.defineProperty(f,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(x){this._foldedDefaultProps=r?function(S){for(var E=[],M=1;M<arguments.length;M++)E[M-1]=arguments[M];for(var I=0,B=E;I<B.length;I++)ns(S,B[I],!0);return S}({},o.defaultProps,x):x}}),uu(f,function(){return".".concat(f.styledComponentId)}),i&&Bd(f,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),f}function Bc(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var Fc=function(e){return Object.assign(e,{isCss:!0})};function L(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Ln(e)||ko(e))return Fc(sn(Bc(wl,wo([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?sn(r):Fc(sn(Bc(r,t)))}function is(e,t,n){if(n===void 0&&(n=xr),!t)throw Rn(1,t);var r=function(o){for(var i=[],l=1;l<arguments.length;l++)i[l-1]=arguments[l];return e(t,n,L.apply(void 0,wo([o],i,!1)))};return r.attrs=function(o){return is(e,t,$e($e({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return is(e,t,$e($e({},n),o))},r}var Gd=function(e){return is(G0,e)},k=Gd;Ld.forEach(function(e){k[e]=Gd(e)});var K0=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Vd(t),Ui.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,o){var i=o(ts(sn(this.rules,n,r,o)),""),l=this.componentId+t;r.insertRules(l,l,i)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,o){t>2&&Ui.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,o)},e}();function Y0(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=L.apply(void 0,wo([e],t,!1)),o="sc-global-".concat(jd(JSON.stringify(r))),i=new K0(r,o),l=function(s){var u=os(),p=h.useContext(bo),d=h.useRef(u.styleSheet.allocateGSInstance(o)).current;return u.styleSheet.server&&a(d,s,u.styleSheet,p,u.stylis),h.useLayoutEffect(function(){if(!u.styleSheet.server)return a(d,s,u.styleSheet,p,u.stylis),function(){return i.removeStyles(d,u.styleSheet)}},[d,s,u.styleSheet,p,u.stylis]),null};function a(s,u,p,d,g){if(i.isStatic)i.renderStyles(s,f0,p,g);else{var y=$e($e({},u),{theme:Pd(u,d,l.defaultProps)});i.renderStyles(s,y,p,g)}}return h.memo(l)}var X0=`
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

`;const cu="4px 4px 10px 0 rgba(0, 0, 0, 0.35)",hu="inset 2px 2px 3px rgba(0,0,0,0.2)",xt=()=>L`
  -webkit-text-fill-color: ${({theme:e})=>e.materialTextDisabled};
  color: ${({theme:e})=>e.materialTextDisabled};
  text-shadow: 1px 1px ${({theme:e})=>e.materialTextDisabledShadow};
  /* filter: grayscale(100%); */
`,wt=({background:e="material",color:t="materialText"}={})=>L`
  box-sizing: border-box;
  display: inline-block;
  background: ${({theme:n})=>n[e]};
  color: ${({theme:n})=>n[t]};
`,$o=({mainColor:e="black",secondaryColor:t="transparent",pixelSize:n=2})=>L`
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
`,Dn=()=>L`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  color: ${({theme:e})=>e.materialText};
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
  border: 2px solid ${({theme:e})=>e.canvas};
  outline: 2px solid ${({theme:e})=>e.flatDark};
  outline-offset: -4px;
`,Fn={button:{topLeftOuter:"borderLightest",topLeftInner:"borderLight",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"},buttonPressed:{topLeftOuter:"borderDarkest",topLeftInner:"borderDark",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},buttonThin:{topLeftOuter:"borderLightest",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderDark"},buttonThinPressed:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},field:{topLeftOuter:"borderDark",topLeftInner:"borderDarkest",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},grouping:{topLeftOuter:"borderDark",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderLightest"},status:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},window:{topLeftOuter:"borderLight",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"}},Z0=({theme:e,topLeftInner:t,bottomRightInner:n,hasShadow:r=!1,hasInsetShadow:o=!1})=>[r?cu:!1,o?hu:!1,t!==null?`inset 1px 1px 0px 1px ${e[t]}`:!1,n!==null?`inset -1px -1px 0 1px ${e[n]}`:!1].filter(Boolean).join(", "),pe=({invert:e=!1,style:t="button"}={})=>{const n={topLeftOuter:e?"bottomRightOuter":"topLeftOuter",topLeftInner:e?"bottomRightInner":"topLeftInner",bottomRightInner:e?"topLeftInner":"bottomRightInner",bottomRightOuter:e?"topLeftOuter":"bottomRightOuter"};return L`
    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:r})=>r[Fn[t][n.topLeftOuter]]};
    border-top-color: ${({theme:r})=>r[Fn[t][n.topLeftOuter]]};
    border-right-color: ${({theme:r})=>r[Fn[t][n.bottomRightOuter]]};
    border-bottom-color: ${({theme:r})=>r[Fn[t][n.bottomRightOuter]]};
    box-shadow: ${({theme:r,shadow:o})=>Z0({theme:r,topLeftInner:Fn[t][n.topLeftInner],bottomRightInner:Fn[t][n.bottomRightInner],hasShadow:o})};
  `},wr=()=>L`
  outline: 2px dotted ${({theme:e})=>e.materialText};
`,J0=e=>Buffer.from(e).toString("base64"),q0=typeof btoa<"u"?btoa:J0,Ko=(e,t=0)=>{const n=`<svg height="26" width="26" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g transform="rotate(${t} 13 13)">
      <polygon fill="${e}" points="6,10 20,10 13,17"/>
    </g>
  </svg>`;return`url(data:image/svg+xml;base64,${q0(n)})`},du=(e="default")=>L`
  ::-webkit-scrollbar {
    width: 26px;
    height: 26px;
  }
  ::-webkit-scrollbar-track {
    ${({theme:t})=>$o({mainColor:e==="flat"?t.flatLight:t.material,secondaryColor:e==="flat"?t.canvas:t.borderLightest})}
  }
  ::-webkit-scrollbar-thumb {
    ${wt()}
    ${e==="flat"?Dn():pe({style:"window"})}
      outline-offset: -2px;
  }

  ::-webkit-scrollbar-corner {
    background-color: ${({theme:t})=>t.material};
  }
  ::-webkit-scrollbar-button {
    ${wt()}
    ${e==="flat"?Dn():pe({style:"window"})}
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
    background-image: ${({theme:t})=>Ko(t.materialText,90)};
  }

  ::-webkit-scrollbar-button:horizontal:increment {
    background-image: ${({theme:t})=>Ko(t.materialText,270)};
  }

  ::-webkit-scrollbar-button:vertical:decrement {
    background-image: ${({theme:t})=>Ko(t.materialText,180)};
  }

  ::-webkit-scrollbar-button:vertical:increment {
    background-image: ${({theme:t})=>Ko(t.materialText,0)};
  }
`,eg=k.a`
  color: ${({theme:e})=>e.anchor};
  font-size: inherit;
  text-decoration: ${({underline:e})=>e?"underline":"none"};
  &:visited {
    color: ${({theme:e})=>e.anchorVisited};
  }
`,tg=v.forwardRef(({children:e,underline:t=!0,...n},r)=>h.createElement(eg,{ref:r,underline:t,...n},e));tg.displayName="Anchor";const ng=k.header`
  ${pe()};
  ${wt()};

  position: ${e=>{var t;return(t=e.position)!==null&&t!==void 0?t:e.fixed?"fixed":"absolute"}};
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`,Kd=v.forwardRef(({children:e,fixed:t=!0,position:n="fixed",...r},o)=>h.createElement(ng,{fixed:t,position:t!==!1?n:void 0,ref:o,...r},e));Kd.displayName="AppBar";const Nn=()=>{};function Sn(e,t,n){return n!==null&&e>n?n:t!==null&&e<t?t:e}function rg(e){if(Math.abs(e)<1){const n=e.toExponential().split("e-"),r=n[0].split(".")[1];return(r?r.length:0)+parseInt(n[1],10)}const t=e.toString().split(".")[1];return t?t.length:0}function Wc(e,t,n){const r=Math.round((e-n)/t)*t+n;return Number(r.toFixed(rg(t)))}function hn(e){return typeof e=="number"?`${e}px`:e}const og=k.div`
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
`,ig=k.img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
`,lg=v.forwardRef(({alt:e="",children:t,noBorder:n=!1,size:r=35,square:o=!1,src:i,...l},a)=>h.createElement(og,{noBorder:n,ref:a,size:hn(r),square:o,src:i,...l},i?h.createElement(ig,{src:i,alt:e}):t));lg.displayName="Avatar";const Le={sm:"28px",md:"36px",lg:"44px"},ag=L`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${({size:e="md"})=>Le[e]};
  width: ${({fullWidth:e,size:t="md",square:n})=>e?"100%":n?Le[t]:"auto"};
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
`,kl=k.button`
  ${({active:e,disabled:t,primary:n,theme:r,variant:o})=>o==="flat"?L`
          ${Dn()}
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
            ${!e&&!t&&wr}
            outline-offset: -4px;
          }
        `:o==="menu"||o==="thin"?L`
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
        `:L`
          ${wt()};
          border: none;
          ${t&&xt()}
          ${e?$o({mainColor:r.material,secondaryColor:r.borderLightest}):""}
          &:before {
            box-sizing: border-box;
            content: '';
            position: absolute;
            ${n?L`
                  left: 2px;
                  top: 2px;
                  width: calc(100% - 4px);
                  height: calc(100% - 4px);
                  outline: 2px solid ${r.borderDarkest};
                `:L`
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
            ${!e&&!t&&wr}
            outline-offset: -8px;
          }
          &:active:focus:after,
          &:active:after {
            top: ${e?"0":"1px"};
          }
        `}
  ${ag}
`,Ze=v.forwardRef(({onClick:e,disabled:t=!1,children:n,type:r="button",fullWidth:o=!1,size:i="md",square:l=!1,active:a=!1,onTouchStart:s=Nn,primary:u=!1,variant:p="default",...d},g)=>h.createElement(kl,{active:a,disabled:t,$disabled:t,fullWidth:o,onClick:t?void 0:e,onTouchStart:s,primary:u,ref:g,size:i,square:l,type:r,variant:p,...d},n));Ze.displayName="Button";function dn({defaultValue:e,onChange:t,onChangePropName:n="onChange",readOnly:r,value:o,valuePropName:i="value"}){const l=o!==void 0,[a,s]=v.useState(e),u=v.useCallback(p=>{l||s(p)},[l]);if(l&&typeof t!="function"&&!r){const p=`Warning: You provided a \`${i}\` prop to a component without an \`${n}\` handler.${i==="value"?`This will render a read-only field. If the field should be mutable use \`defaultValue\`. Otherwise, set either \`${n}\` or \`readOnly\`.`:`This breaks the component state. You must provide an \`${n}\` function that updates \`${i}\`.`}`;console.warn(p)}return[l?o:a,u]}const ls=k.li`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  position: relative;
  height: ${e=>Le[e.size]};
  width: ${e=>e.square?Le[e.size]:"auto"};
  padding: 0 8px;
  font-size: 1rem;
  white-space: nowrap;
  justify-content: ${e=>e.square?"space-around":"space-between"};
  text-align: center;
  line-height: ${e=>Le[e.size]};
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
`,Yd=v.forwardRef(({size:e="lg",disabled:t,square:n,children:r,onClick:o,primary:i,...l},a)=>h.createElement(ls,{$disabled:t,size:e,square:n,onClick:t?void 0:o,primary:i,role:"menuitem",ref:a,"aria-disabled":t,...l},r));Yd.displayName="MenuListItem";const mu=k.ul.attrs(()=>({role:"menu"}))`
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
`;mu.displayName="MenuList";const Ct=20,Hi=k.input`
  position: absolute;
  left: 0;
  margin: 0;
  width: ${Ct}px;
  height: ${Ct}px;
  opacity: 0;
  z-index: -1;
`,fu=k.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 8px 0;
  cursor: ${({$disabled:e})=>e?"auto":"pointer"};
  user-select: none;
  font-size: 1rem;
  color: ${({theme:e})=>e.materialText};
  ${e=>e.$disabled&&xt()}

  ${ls} & {
    margin: 0;
    height: 100%;
  }
  ${ls}:hover & {
    ${({$disabled:e,theme:t})=>!e&&L`
        color: ${t.materialTextInvert};
      `};
  }
`,pu=k.span`
  display: inline-block;
  line-height: 1;
  padding: 2px;
  ${Hi}:focus ~ & {
    ${wr}
  }
  ${Hi}:not(:disabled) ~ &:active {
    ${wr}
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
    ${e=>e.shadow&&`box-shadow:${hu};`}
  }
`,sg=k.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow: auto;
  ${du()}
`,Xd=v.forwardRef(({children:e,shadow:t=!0,...n},r)=>h.createElement(Tt,{ref:r,shadow:t,...n},h.createElement(sg,null,e)));Xd.displayName="ScrollView";const Zd=L`
  width: ${Ct}px;
  height: ${Ct}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,ug=k(Tt)`
  ${Zd}
  width: ${Ct}px;
  height: ${Ct}px;
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};
  &:before {
    box-shadow: none;
  }
`,cg=k.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
  ${Zd}
  width: ${Ct-4}px;
  height: ${Ct-4}px;
  outline: none;
  border: 2px solid ${({theme:e})=>e.flatDark};
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
`,hg=k.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
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
`,dg=k.span.attrs(()=>({"data-testid":"indeterminateIcon"}))`
  display: inline-block;
  position: relative;

  width: 100%;
  height: 100%;

  &:after {
    content: '';
    display: block;

    width: 100%;
    height: 100%;

    ${({$disabled:e,theme:t})=>$o({mainColor:e?t.checkmarkDisabled:t.checkmark})}
    background-position: 0px 0px, 2px 2px;
  }
`,mg={flat:cg,default:ug},fg=v.forwardRef(({checked:e,className:t="",defaultChecked:n=!1,disabled:r=!1,indeterminate:o=!1,label:i="",onChange:l=Nn,style:a={},value:s,variant:u="default",...p},d)=>{var g;const[y,w]=dn({defaultValue:n,onChange:l,readOnly:(g=p.readOnly)!==null&&g!==void 0?g:r,value:e}),b=v.useCallback(c=>{const f=c.target.checked;w(f),l(c)},[l,w]),T=mg[u];let m=null;return o?m=dg:y&&(m=hg),h.createElement(fu,{$disabled:r,className:t,style:a},h.createElement(Hi,{disabled:r,onChange:r?void 0:b,readOnly:r,type:"checkbox",value:s,checked:y,"data-indeterminate":o,ref:d,...p}),h.createElement(T,{$disabled:r,role:"presentation"},m&&h.createElement(m,{$disabled:r,variant:u})),i&&h.createElement(pu,null,i))});fg.displayName="Checkbox";const Jd=k.div`
  ${({orientation:e,theme:t,size:n="100%"})=>e==="vertical"?`
    height: ${hn(n)};
    border-left: 2px solid ${t.borderDark};
    border-right: 2px solid ${t.borderLightest};
    margin: 0;
    `:`
    width: ${hn(n)};
    border-bottom: 2px solid ${t.borderLightest};
    border-top: 2px solid ${t.borderDark};
    margin: 0;
    `}
`;Jd.displayName="Separator";const pg=k(kl)`
  padding-left: 8px;
`,gg=k(Jd)`
  height: 21px;
  position: relative;
  top: 0;
`,qd=k.input`
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
`,vg=k.div`
  box-sizing: border-box;
  height: 19px;
  display: inline-block;
  width: 35px;
  margin-right: 5px;

  background: ${({color:e})=>e};

  ${({$disabled:e})=>e?L`
          border: 2px solid ${({theme:t})=>t.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:t})=>t.materialTextDisabledShadow}
          );
        `:L`
          border: 2px solid ${({theme:t})=>t.materialText};
        `}
  ${qd}:focus:not(:active) + &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${wr}
    outline-offset: -8px;
  }
`,yg=k.span`
  width: 0px;
  height: 0px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  margin-left: 6px;

  ${({$disabled:e})=>e?L`
          border-top: 6px solid ${({theme:t})=>t.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:t})=>t.materialTextDisabledShadow}
          );
        `:L`
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
`,xg=v.forwardRef(({value:e,defaultValue:t,onChange:n=Nn,disabled:r=!1,variant:o="default",...i},l)=>{var a;const[s,u]=dn({defaultValue:t,onChange:n,readOnly:(a=i.readOnly)!==null&&a!==void 0?a:r,value:e}),p=d=>{const g=d.target.value;u(g),n(d)};return h.createElement(pg,{disabled:r,as:"div",variant:o,size:"md"},h.createElement(qd,{onChange:p,readOnly:r,disabled:r,value:s??"#008080",type:"color",ref:l,...i}),h.createElement(vg,{$disabled:r,color:s??"#008080",role:"presentation"}),o==="default"&&h.createElement(gg,{orientation:"vertical"}),h.createElement(yg,{$disabled:r,variant:o}))});xg.displayName="ColorInput";const wg=k.div`
  position: relative;
  --react95-digit-primary-color: #ff0102;
  --react95-digit-secondary-color: #740201;
  --react95-digit-bg-color: #000000;

  ${({pixelSize:e})=>L`
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
      ${$o({mainColor:"var(--react95-digit-bg-color)",secondaryColor:"var(--react95-digit-secondary-color)",pixelSize:e})}
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
`,Uc=["horizontal top","center","horizontal bottom","vertical top left","vertical top right","vertical bottom left","vertical bottom right"],kg=[[1,0,1,1,1,1,1],[0,0,0,0,1,0,1],[1,1,1,0,1,1,0],[1,1,1,0,1,0,1],[0,1,0,1,1,0,1],[1,1,1,1,0,0,1],[1,1,1,1,0,1,1],[1,0,0,0,1,0,1],[1,1,1,1,1,1,1],[1,1,1,1,1,0,1]];function bg({digit:e=0,pixelSize:t=2,...n}){const r=kg[Number(e)].map((o,i)=>o?`${Uc[i]} active`:Uc[i]);return h.createElement(wg,{pixelSize:t,...n},r.map((o,i)=>h.createElement("span",{className:o,key:i})))}const Eg=k.div`
  ${pe({style:"status"})}
  display: inline-flex;
  background: #000000;
`,Sg={sm:1,md:2,lg:3,xl:4},Mg=v.forwardRef(({value:e=0,minLength:t=3,size:n="md",...r},o)=>{const i=v.useMemo(()=>e.toString().padStart(t,"0").split(""),[t,e]);return h.createElement(Eg,{ref:o,...r},i.map((l,a)=>h.createElement(bg,{digit:l,pixelSize:Sg[n],key:a})))});Mg.displayName="Counter";const em=L`
  display: flex;
  align-items: center;
  width: ${({fullWidth:e})=>e?"100%":"auto"};
  min-height: ${Le.md};
`,Ag=k(Tt).attrs({"data-testid":"variant-default"})`
  ${em}
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};
`,_g=k.div.attrs({"data-testid":"variant-flat"})`
  ${Dn()}
  ${em}
  position: relative;
`,tm=L`
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
`,$g=k.input`
  ${tm}
  padding: 0 8px;
`,Cg=k.textarea`
  ${tm}
  padding: 8px;
  resize: none;
  ${({variant:e})=>du(e)}
`,nm=v.forwardRef(({className:e,disabled:t=!1,fullWidth:n,onChange:r=Nn,shadow:o=!0,style:i,variant:l="default",...a},s)=>{const u=l==="flat"?_g:Ag,p=v.useMemo(()=>{var d;return a.multiline?h.createElement(Cg,{disabled:t,onChange:t?void 0:r,readOnly:t,ref:s,variant:l,...a}):h.createElement($g,{disabled:t,onChange:t?void 0:r,readOnly:t,ref:s,type:(d=a.type)!==null&&d!==void 0?d:"text",variant:l,...a})},[t,r,a,s,l]);return h.createElement(u,{className:e,fullWidth:n,$disabled:t,shadow:o,style:i},p)});nm.displayName="TextInput";const Tg=k.div`
  display: inline-flex;
  align-items: center;
`,as=k(Ze)`
  width: 30px;
  padding: 0;
  flex-shrink: 0;

  ${({variant:e})=>e==="flat"?L`
          height: calc(50% - 1px);
        `:L`
          height: 50%;
        `}
`,Ig=k.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

  ${({variant:e})=>e==="flat"?L`
          height: calc(${Le.md} - 4px);
        `:L`
          height: ${Le.md};
          margin-left: 2px;
        `}
`,Hc=k.span`
  width: 0px;
  height: 0px;
  display: inline-block;
  ${({invert:e})=>e?L`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-bottom: 4px solid ${({theme:t})=>t.materialText};
        `:L`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 4px solid ${({theme:t})=>t.materialText};
        `}
  ${as}:disabled & {
    filter: drop-shadow(
      1px 1px 0px ${({theme:e})=>e.materialTextDisabledShadow}
    );
    ${({invert:e})=>e?L`
            border-bottom-color: ${({theme:t})=>t.materialTextDisabled};
          `:L`
            border-top-color: ${({theme:t})=>t.materialTextDisabled};
          `}
  }
`,rm=v.forwardRef(({className:e,defaultValue:t,disabled:n=!1,max:r,min:o,onChange:i,readOnly:l,step:a=1,style:s,value:u,variant:p="default",width:d,...g},y)=>{const[w,b]=dn({defaultValue:t,onChange:i,readOnly:l,value:u}),T=v.useCallback(E=>{const M=parseFloat(E.target.value);b(M)},[b]),m=v.useCallback(E=>{const M=Sn(parseFloat(((w??0)+E).toFixed(2)),o??null,r??null);b(M),i==null||i(M)},[r,o,i,b,w]),c=v.useCallback(()=>{w!==void 0&&(i==null||i(w))},[i,w]),f=v.useCallback(()=>{m(a)},[m,a]),x=v.useCallback(()=>{m(-a)},[m,a]),S=p==="flat"?"flat":"raised";return h.createElement(Tg,{className:e,style:{...s,width:d!==void 0?hn(d):"auto"},...g},h.createElement(nm,{value:w,variant:p,onChange:T,disabled:n,type:"number",readOnly:l,ref:y,fullWidth:!0,onBlur:c}),h.createElement(Ig,{variant:p},h.createElement(as,{"data-testid":"increment",variant:S,disabled:n||l,onClick:f},h.createElement(Hc,{invert:!0})),h.createElement(as,{"data-testid":"decrement",variant:S,disabled:n||l,onClick:x},h.createElement(Hc,null))))});rm.displayName="NumberInput";function Pg(){const e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let t="";for(let n=0;n<10;n+=1)t+=e[Math.floor(Math.random()*e.length)];return t}const om=e=>v.useMemo(()=>Pg(),[e]),im=L`
  box-sizing: border-box;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  line-height: 100%;
`,lm=L`
  background: ${({theme:e})=>e.hoverBackground};
  color: ${({theme:e})=>e.canvasTextInvert};
`,gu=k.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  &:focus {
    outline: none;
  }
`,Lg=k.div`
  ${im}
  padding-right: 8px;
  align-items: center;
  display: flex;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  margin: 0 2px;
  border: 2px solid transparent;
  ${gu}:focus & {
    ${lm}
    border: 2px dotted ${({theme:e})=>e.focusSecondary};
  }
`,am=L`
  height: ${Le.md};
  display: inline-block;
  color: ${({$disabled:e=!1,theme:t})=>e?xt():t.canvasText};
  font-size: 1rem;
  cursor: ${({$disabled:e})=>e?"default":"pointer"};
`,Rg=k(Tt)`
  ${am}
  background: ${({$disabled:e=!1,theme:t})=>e?t.material:t.canvas};
  &:focus {
    outline: 0;
  }
`,Dg=k.div`
  ${Dn()}
  ${am}
  background: ${({$disabled:e=!1,theme:t})=>e?t.flatLight:t.canvas};
`,jg=k.select`
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
  ${im}
  cursor: pointer;
  &:disabled {
    ${xt()};
    background: ${({theme:e})=>e.material};
    cursor: default;
  }
`,sm=k(kl).attrs(()=>({"aria-hidden":"true"}))`
  width: 30px;
  padding: 0;
  flex-shrink: 0;
  ${({variant:e="default"})=>e==="flat"?L`
          height: 100%;
          margin-right: 0;
        `:L`
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
`,Og=k.span`
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
  ${sm}:active & {
    margin-top: 2px;
  }
`,Ng=k.ul`
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
  box-shadow: ${cu};
  ${({variant:e="default"})=>e==="flat"?L`
          bottom: 2px;
          width: 100%;
          border: 2px solid ${({theme:t})=>t.flatDark};
        `:L`
          bottom: -2px;
          width: calc(100% - 2px);
          border: 2px solid ${({theme:t})=>t.borderDarkest};
        `}
  ${({variant:e="default"})=>du(e)}
`,zg=k.li`
  box-sizing: border-box;

  width: 100%;
  padding-left: 8px;

  height: calc(${Le.md} - 4px);
  line-height: calc(${Le.md} - 4px);
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({theme:e})=>e.canvasText};
  &:focus {
    outline: 0;
  }
  ${({active:e})=>e?lm:""}
  user-select: none;
`,Bg=[],um=({className:e,defaultValue:t,disabled:n,native:r,onChange:o,options:i=Bg,readOnly:l,style:a,value:s,variant:u,width:p})=>{var d;const g=v.useMemo(()=>i.filter(Boolean),[i]),[y,w]=dn({defaultValue:t??((d=g==null?void 0:g[0])===null||d===void 0?void 0:d.value),onChange:o,readOnly:l,value:s}),b=!(n||l),T=v.useMemo(()=>({className:e,style:{...a,width:p}}),[e,a,p]),m=v.useMemo(()=>h.createElement(sm,{as:"div","data-testid":"select-button",$disabled:n,native:r,tabIndex:-1,variant:u==="flat"?"flat":"raised"},h.createElement(Og,{"data-testid":"select-icon",$disabled:n})),[n,r,u]),c=v.useMemo(()=>u==="flat"?Dg:Rg,[u]);return v.useMemo(()=>({isEnabled:b,options:g,value:y,setValue:w,wrapperProps:T,DropdownButton:m,Wrapper:c}),[m,c,b,g,w,y,T])},Fg={ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",END:"End",ENTER:"Enter",ESC:"Escape",HOME:"Home",SPACE:"Space",TAB:"Tab"},Wg=1e3,Ug=({onBlur:e,onChange:t,onClose:n,onFocus:r,onKeyDown:o,onMouseDown:i,onOpen:l,open:a,options:s,readOnly:u,value:p,selectRef:d,setValue:g,wrapperRef:y})=>{const w=v.useRef(null),b=v.useRef([]),T=v.useRef(0),m=v.useRef(0),c=v.useRef(),f=v.useRef("search"),x=v.useRef(""),S=v.useRef(),[E,M]=dn({defaultValue:!1,onChange:l,onChangePropName:"onOpen",readOnly:u,value:a,valuePropName:"open"}),I=v.useMemo(()=>{const C=s.findIndex(F=>F.value===p);return T.current=Sn(C,0,null),s[C]},[s,p]),[B,j]=v.useState(s[0]),q=v.useCallback(C=>{const F=w.current,Q=b.current[C];if(!Q||!F){c.current=C;return}c.current=void 0;const X=F.clientHeight,le=F.scrollTop,Te=F.scrollTop+X,be=Q.offsetTop,rt=Q.offsetHeight,It=Q.offsetTop+Q.offsetHeight;be<le&&F.scrollTo(0,be),It>Te&&F.scrollTo(0,be-X+rt),Q.focus({preventScroll:!0})},[w]),ee=v.useCallback((C,{scroll:F}={})=>{var Q;const X=s.length-1;let le;switch(C){case"first":{le=0;break}case"last":{le=X;break}case"next":{le=Sn(m.current+1,0,X);break}case"previous":{le=Sn(m.current-1,0,X);break}case"selected":{le=Sn((Q=T.current)!==null&&Q!==void 0?Q:0,0,X);break}default:le=C}m.current=le,j(s[le]),F&&q(le)},[m,s,q]),de=v.useCallback(({fromEvent:C})=>{M(!0),ee("selected",{scroll:!0}),l==null||l({fromEvent:C})},[ee,l,M]),me=v.useCallback(()=>{f.current="search",x.current="",clearTimeout(S.current)},[]),se=v.useCallback(({focusSelect:C,fromEvent:F})=>{var Q;n==null||n({fromEvent:F}),M(!1),j(s[0]),me(),c.current=void 0,C&&((Q=d.current)===null||Q===void 0||Q.focus())},[me,n,s,d,M]),we=v.useCallback(({fromEvent:C})=>{E?se({focusSelect:!1,fromEvent:C}):de({fromEvent:C})},[se,de,E]),ke=v.useCallback((C,{fromEvent:F})=>{T.current!==C&&(T.current=C,g(s[C].value),t==null||t(s[C],{fromEvent:F}))},[t,s,g]),_=v.useCallback(({focusSelect:C,fromEvent:F})=>{ke(m.current,{fromEvent:F}),se({focusSelect:C,fromEvent:F})},[se,ke]),P=v.useCallback((C,{fromEvent:F,select:Q})=>{var X;switch(f.current==="cycleFirstLetter"&&C!==x.current&&(f.current="search"),C===x.current?f.current="cycleFirstLetter":x.current+=C,f.current){case"search":{let le=s.findIndex(Te=>{var be;return((be=Te.label)===null||be===void 0?void 0:be.toLocaleUpperCase().indexOf(x.current))===0});le<0&&(le=s.findIndex(Te=>{var be;return((be=Te.label)===null||be===void 0?void 0:be.toLocaleUpperCase().indexOf(C))===0}),x.current=C),le>=0&&(Q?ke(le,{fromEvent:F}):ee(le,{scroll:!0}));break}case"cycleFirstLetter":{const le=Q?(X=T.current)!==null&&X!==void 0?X:-1:m.current;let Te=s.findIndex((be,rt)=>{var It;return rt>le&&((It=be.label)===null||It===void 0?void 0:It.toLocaleUpperCase().indexOf(C))===0});Te<0&&(Te=s.findIndex(be=>{var rt;return((rt=be.label)===null||rt===void 0?void 0:rt.toLocaleUpperCase().indexOf(C))===0})),Te>=0&&(Q?ke(Te,{fromEvent:F}):ee(Te,{scroll:!0}));break}}clearTimeout(S.current),S.current=setTimeout(()=>{f.current==="search"&&(x.current="")},Wg)},[ee,s,ke]),D=v.useCallback(C=>{var F;C.button===0&&(C.preventDefault(),(F=d.current)===null||F===void 0||F.focus(),we({fromEvent:C}),i==null||i(C))},[i,d,we]),G=v.useCallback(C=>{_({focusSelect:!0,fromEvent:C})},[_]),U=v.useCallback(C=>{const{altKey:F,code:Q,ctrlKey:X,metaKey:le,shiftKey:Te}=C,{ARROW_DOWN:be,ARROW_UP:rt,END:It,ENTER:gn,ESC:Ht,HOME:Sl,SPACE:Ml,TAB:Mr}=Fg,xu=F||X||le||Te;if(!(Q===Mr&&(F||X||le)||Q!==Mr&&xu))switch(Q){case be:{if(C.preventDefault(),!E){de({fromEvent:C});return}ee("next",{scroll:!0});break}case rt:{if(C.preventDefault(),!E){de({fromEvent:C});return}ee("previous",{scroll:!0});break}case It:{if(C.preventDefault(),!E){de({fromEvent:C});return}ee("last",{scroll:!0});break}case gn:{if(!E)return;C.preventDefault(),_({focusSelect:!0,fromEvent:C});break}case Ht:{if(!E)return;C.preventDefault(),se({focusSelect:!0,fromEvent:C});break}case Sl:{if(C.preventDefault(),!E){de({fromEvent:C});return}ee("first",{scroll:!0});break}case Ml:{C.preventDefault(),E?_({focusSelect:!0,fromEvent:C}):de({fromEvent:C});break}case Mr:{if(!E)return;Te||C.preventDefault(),_({focusSelect:!Te,fromEvent:C});break}default:!xu&&Q.match(/^Key/)&&(C.preventDefault(),C.stopPropagation(),P(Q.replace(/^Key/,""),{select:!E,fromEvent:C}))}},[ee,se,E,de,P,_]),O=v.useCallback(C=>{U(C),o==null||o(C)},[U,o]),N=v.useCallback(C=>{ee(C)},[ee]),K=v.useCallback(C=>{E||(me(),e==null||e(C))},[me,e,E]),z=v.useCallback(C=>{me(),r==null||r(C)},[me,r]),H=v.useCallback(C=>{w.current=C,c.current!==void 0&&q(c.current)},[q]),Me=v.useCallback((C,F)=>{b.current[F]=C,c.current===F&&q(c.current)},[q]);return v.useEffect(()=>{if(!E)return()=>{};const C=F=>{var Q;const X=F.target;!((Q=y.current)===null||Q===void 0)&&Q.contains(X)||(F.preventDefault(),se({focusSelect:!1,fromEvent:F}))};return document.addEventListener("mousedown",C),()=>{document.removeEventListener("mousedown",C)}},[se,E,y]),v.useMemo(()=>({activeOption:B,handleActivateOptionIndex:N,handleBlur:K,handleButtonKeyDown:O,handleDropdownKeyDown:U,handleFocus:z,handleMouseDown:D,handleOptionClick:G,handleSetDropdownRef:H,handleSetOptionRef:Me,open:E,selectedOption:I}),[B,N,K,O,z,U,D,G,H,Me,E,I])},Hg=v.forwardRef(({className:e,defaultValue:t,disabled:n,onChange:r,options:o,readOnly:i,style:l,value:a,variant:s,width:u,...p},d)=>{const{isEnabled:g,options:y,setValue:w,value:b,DropdownButton:T,Wrapper:m}=um({defaultValue:t,disabled:n,native:!0,onChange:r,options:o,readOnly:i,value:a,variant:s}),c=v.useCallback(f=>{const x=y.find(S=>S.value===f.target.value);x&&(w(x.value),r==null||r(x,{fromEvent:f}))},[r,y,w]);return h.createElement(m,{className:e,style:{...l,width:u}},h.createElement(gu,null,h.createElement(jg,{...p,disabled:n,onChange:g?c:Nn,ref:d,value:b},y.map((f,x)=>{var S;return h.createElement("option",{key:`${f.value}-${x}`,value:f.value},(S=f.label)!==null&&S!==void 0?S:f.value)})),T))});Hg.displayName="SelectNative";function Qg({activateOptionIndex:e,active:t,index:n,onClick:r,option:o,selected:i,setRef:l}){const a=v.useCallback(()=>{e(n)},[e,n]),s=v.useCallback(p=>{l(p,n)},[n,l]),u=om();return h.createElement(zg,{active:t,"aria-selected":i?"true":void 0,"data-value":o.value,id:u,onClick:r,onMouseEnter:a,ref:s,role:"option",tabIndex:0},o.label)}function Vg({"aria-label":e,"aria-labelledby":t,className:n,defaultValue:r,disabled:o=!1,formatDisplay:i,inputProps:l,labelId:a,menuMaxHeight:s,name:u,onBlur:p,onChange:d,onClose:g,onFocus:y,onKeyDown:w,onMouseDown:b,onOpen:T,open:m,options:c,readOnly:f,shadow:x=!0,style:S,variant:E="default",value:M,width:I="auto",...B},j){const{isEnabled:q,options:ee,setValue:de,value:me,wrapperProps:se,DropdownButton:we,Wrapper:ke}=um({className:n,defaultValue:r,disabled:o,native:!1,onChange:d,options:c,style:S,readOnly:f,value:M,variant:E,width:I}),_=v.useRef(null),P=v.useRef(null),D=v.useRef(null),{activeOption:G,handleActivateOptionIndex:U,handleBlur:O,handleButtonKeyDown:N,handleDropdownKeyDown:K,handleFocus:z,handleMouseDown:H,handleOptionClick:Me,handleSetDropdownRef:C,handleSetOptionRef:F,open:Q,selectedOption:X}=Ug({onBlur:p,onChange:d,onClose:g,onFocus:y,onKeyDown:w,onMouseDown:b,onOpen:T,open:m,options:ee,value:me,selectRef:P,setValue:de,wrapperRef:D});v.useImperativeHandle(j,()=>({focus:gn=>{var Ht;(Ht=P.current)===null||Ht===void 0||Ht.focus(gn)},node:_.current,value:String(me)}),[me]);const le=v.useMemo(()=>X?typeof i=="function"?i(X):X.label:"",[i,X]),Te=q?1:void 0,be=v.useMemo(()=>s?{overflow:"auto",maxHeight:s}:void 0,[s]),rt=om(),It=v.useMemo(()=>ee.map((gn,Ht)=>{const Sl=`${me}-${Ht}`,Ml=gn===G,Mr=gn===X;return h.createElement(Qg,{activateOptionIndex:U,active:Ml,index:Ht,key:Sl,onClick:Me,option:gn,selected:Mr,setRef:F})}),[G,U,Me,F,ee,X,me]);return h.createElement(ke,{...se,$disabled:o,ref:D,shadow:x,style:{...S,width:I}},h.createElement("input",{name:u,ref:_,type:"hidden",value:String(me),...l}),h.createElement(gu,{"aria-disabled":o,"aria-expanded":Q,"aria-haspopup":"listbox","aria-label":e,"aria-labelledby":t??a,"aria-owns":q&&Q?rt:void 0,onBlur:O,onFocus:z,onKeyDown:N,onMouseDown:q?H:b,ref:P,role:"button",tabIndex:Te,...B},h.createElement(Lg,null,le),we),q&&Q&&h.createElement(Ng,{id:rt,onKeyDown:K,ref:C,role:"listbox",style:be,tabIndex:0,variant:E},It))}const cm=v.forwardRef(Vg);cm.displayName="Select";const Gg=k.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${e=>e.noPadding?"0":"4px"};
`,Qi=v.forwardRef(function({children:t,noPadding:n=!1,...r},o){return h.createElement(Gg,{noPadding:n,ref:o,...r},t)});Qi.displayName="Toolbar";const Kg=k.div`
  padding: 16px;
`,bl=v.forwardRef(function({children:t,...n},r){return h.createElement(Kg,{ref:r,...n},t)});bl.displayName="WindowContent";const Yg=k.div`
  height: 33px;
  line-height: 33px;
  padding-left: 0.25rem;
  padding-right: 3px;
  font-weight: bold;
  border: 2px solid ${({theme:e})=>e.material};
  ${({active:e})=>e===!1?L`
          background: ${({theme:t})=>t.headerNotActiveBackground};
          color: ${({theme:t})=>t.headerNotActiveText};
        `:L`
          background: ${({theme:t})=>t.headerBackground};
          color: ${({theme:t})=>t.headerText};
        `}

  ${kl} {
    padding-left: 0;
    padding-right: 0;
    height: 27px;
    width: 31px;
  }
`,vu=v.forwardRef(function({active:t=!0,children:n,...r},o){return h.createElement(Yg,{active:t,ref:o,...r},n)});vu.displayName="WindowHeader";const Xg=k.div`
  position: relative;
  padding: 4px;
  font-size: 1rem;
  ${pe({style:"window"})}
  ${wt()}
`,Zg=k.span`
  ${({theme:e})=>L`
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
`,yu=v.forwardRef(({children:e,resizable:t=!1,resizeRef:n,shadow:r=!0,...o},i)=>h.createElement(Xg,{ref:i,shadow:r,...o},e,t&&h.createElement(Zg,{"data-testid":"resizeHandle",ref:n})));yu.displayName="Window";const Jg=k(Xd)`
  width: 234px;
  margin: 1rem 0;
  background: ${({theme:e})=>e.canvas};
`,qg=k.div`
  display: flex;
  background: ${({theme:e})=>e.materialDark};
  color: #dfe0e3;
`,ev=k.div`
  display: flex;
  flex-wrap: wrap;
`,Pt=k.div`
  text-align: center;
  height: 1.5em;
  line-height: 1.5em;
  width: 14.28%;
`,tv=k.span`
  cursor: pointer;

  background: ${({active:e,theme:t})=>e?t.hoverBackground:"transparent"};
  color: ${({active:e,theme:t})=>e?t.canvasTextInvert:t.canvasText};

  &:hover {
    border: 2px dashed
      ${({theme:e,active:t})=>t?"none":e.materialDark};
  }
`,nv=[{value:0,label:"January"},{value:1,label:"February"},{value:2,label:"March"},{value:3,label:"April"},{value:4,label:"May"},{value:5,label:"June"},{value:6,label:"July"},{value:7,label:"August"},{value:8,label:"September"},{value:9,label:"October"},{value:10,label:"November"},{value:11,label:"December"}];function rv(e,t){return new Date(e,t+1,0).getDate()}function ov(e,t,n){return new Date(e,t,n).getDay()}function iv(e){const t=new Date(Date.parse(e)),n=t.getUTCDate(),r=t.getUTCMonth(),o=t.getUTCFullYear();return{day:n,month:r,year:o}}const lv=v.forwardRef(({className:e,date:t=new Date().toISOString(),onAccept:n,onCancel:r,shadow:o=!0},i)=>{const[l,a]=v.useState(()=>iv(t)),{year:s,month:u,day:p}=l,d=v.useCallback(({value:T})=>{a(m=>({...m,month:T}))},[]),g=v.useCallback(T=>{a(m=>({...m,year:T}))},[]),y=v.useCallback(T=>{a(m=>({...m,day:T}))},[]),w=v.useCallback(()=>{const T=[l.year,l.month+1,l.day].map(m=>String(m).padStart(2,"0")).join("-");n==null||n(T)},[l.day,l.month,l.year,n]),b=v.useMemo(()=>{const T=Array.from({length:42}),m=ov(s,u,1);let c=p;const f=rv(s,u);return c=c<f?c:f,T.forEach((x,S)=>{if(S>=m&&S<f+m){const E=S-m+1;T[S]=h.createElement(Pt,{key:S,onClick:()=>{y(E)}},h.createElement(tv,{active:E===c},E))}else T[S]=h.createElement(Pt,{key:S})}),T},[p,y,u,s]);return h.createElement(yu,{className:e,ref:i,shadow:o,style:{margin:20}},h.createElement(vu,null,h.createElement("span",{role:"img","aria-label":"📆"},"📆"),"Date"),h.createElement(bl,null,h.createElement(Qi,{noPadding:!0,style:{justifyContent:"space-between"}},h.createElement(cm,{options:nv,value:u,onChange:d,width:128,menuMaxHeight:200}),h.createElement(rm,{value:s,onChange:g,width:100})),h.createElement(Jg,null,h.createElement(qg,null,h.createElement(Pt,null,"S"),h.createElement(Pt,null,"M"),h.createElement(Pt,null,"T"),h.createElement(Pt,null,"W"),h.createElement(Pt,null,"T"),h.createElement(Pt,null,"F"),h.createElement(Pt,null,"S")),h.createElement(ev,null,b)),h.createElement(Qi,{noPadding:!0,style:{justifyContent:"space-between"}},h.createElement(Ze,{fullWidth:!0,onClick:r,disabled:!r},"Cancel"),h.createElement(Ze,{fullWidth:!0,onClick:n?w:void 0,disabled:!n},"OK"))))});lv.displayName="DatePicker";const av=e=>{switch(e){case"status":case"well":return L`
        ${pe({style:"status"})}
      `;case"window":case"outside":return L`
        ${pe({style:"window"})}
      `;case"field":return L`
        ${pe({style:"field"})}
      `;default:return L`
        ${pe()}
      `}},sv=k.div`
  position: relative;
  font-size: 1rem;
  ${({variant:e})=>av(e)}
  ${({variant:e})=>wt(e==="field"?{background:"canvas",color:"canvasText"}:void 0)}
`,sr=v.forwardRef(({children:e,shadow:t=!1,variant:n="window",...r},o)=>h.createElement(sv,{ref:o,shadow:t,variant:n,...r},e));sr.displayName="Frame";const uv=k.fieldset`
  position: relative;
  border: 2px solid
    ${({theme:e,variant:t})=>t==="flat"?e.flatDark:e.borderLightest};
  padding: 16px;
  margin-top: 8px;
  font-size: 1rem;
  color: ${({theme:e})=>e.materialText};
  ${({variant:e})=>e!=="flat"&&L`
      box-shadow: -1px -1px 0 1px ${({theme:t})=>t.borderDark},
        inset -1px -1px 0 1px ${({theme:t})=>t.borderDark};
    `}
  ${e=>e.$disabled&&xt()}
`,cv=k.legend`
  display: flex;
  position: absolute;
  top: 0;
  left: 8px;
  transform: translateY(calc(-50% - 2px));
  padding: 0 8px;

  font-size: 1rem;
  background: ${({theme:e,variant:t})=>t==="flat"?e.canvas:e.material};
`,hv=v.forwardRef(({label:e,disabled:t=!1,variant:n="default",children:r,...o},i)=>h.createElement(uv,{"aria-disabled":t,$disabled:t,variant:n,ref:i,...o},e&&h.createElement(cv,{variant:n},e),r));hv.displayName="GroupBox";const dv=k.div`
  ${({theme:e,size:t="100%"})=>`
  display: inline-block;
  box-sizing: border-box;
  height: ${hn(t)};
  width: 5px;
  border-top: 2px solid ${e.borderLightest};
  border-left: 2px solid ${e.borderLightest};
  border-bottom: 2px solid ${e.borderDark};
  border-right: 2px solid ${e.borderDark};
  background: ${e.material};
`}
`;dv.displayName="Handle";const mv="url('data:image/gif;base64,R0lGODlhPAA8APQAADc3N6+vr4+Pj05OTvn5+V1dXZ+fn29vby8vLw8PD/X19d/f37S0tJSUlLq6und3d39/f9XV1c/Pz+bm5qamphkZGWZmZsbGxr+/v+rq6tra2u/v7yIiIv///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBAAfACH+I1Jlc2l6ZWQgb24gaHR0cHM6Ly9lemdpZi5jb20vcmVzaXplACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYADAAQAA0AAAVFYCeOZPmVaKqimeO+MPxFXv3d+F17Cm3nuJ1ic7lAdroapUjABZCfnQb4ef6k1OHGULtsNk3qjVKLiIFkj/mMIygU4VwIACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBkAIwAKAAcAAAUp4CdehrGI6Ed5XpSKa4teguBoGlVPAXuJBpam5/l9gh7NZrFQiDJMRQgAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsFgAPABAAIQAABVBgJ45kaZ5oakZB67bZ+M10bd94ru987//AoHBILNYYAsGlR/F4IkwnlLeZTBQ9UlaWwzweERHjuzAKFZkMYYZWm4mOw0ETfdanO8Vms7aFAAAh+QQFBAAfACwAAAAAAQABAAAFA+AXAgAh+QQFBAAfACwZABIACgAeAAAFUGAnjmRpnij5rerqtu4Hx3Rt33iu758iZrUZa1TDCASLGsXjiSiZzmFnM5n4TNJSdmREElfL5lO8cgwGACbgrAkwPat3+x1naggKRS+f/4QAACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYAIwAQAA0AAAVE4CeOXdmNaGqeabu27SUIC5xSnifZKK7zl8djkCsIaylGziNaakaEzcbH/Cwl0k9kuWxyPYptzrZULA7otFpNIK1eoxAAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkECQQAHwAsDgAEACAANAAABTHgJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/Y7CoEACH5BAUEAB8ALAAAAAA8ADwAAAX/4CeOZGmeaKqubFt6biy3Xj3fuFjveU/vPJ/wBAQOj6RiEClUGpk9IMAJxQEdmQK1Grt2OhutkvurOb7f8JaM8qLT4iKbuDu/0erxfOS+4+NPex9mfn55coIfCAuFhoBLbDUAjI1vh4FkOxSVd5eQXB4GnI5rXAAbo6R6VTUFqKmWjzasNaKwsaVIHhAEt3cLTjBQA6++XwoHuUM1vMYdyMorwoN8wkC2t9A8s102204Wxana3DNAAQO1FjUCEDXhvuTT5nUdEwOiGxa8BBDwXxKaLTiAKoMFRvJy9CmmoFcHAgrQSEiwKwICDwU0pAMQIdmnboR8TfwWrJyMPrAiz1DkNs2aSRbe6hnr99LEvDJ9IB5DQ8Dhm36glNh5COGBAmQNHrbz+WXBFChOTqFx5+GBxwYCmL1ZcPHmMiWuvkTgECzBBUvrvH4tErbDWCcYDB2IBPbV2yJJ72SZ46TtXSB5v2RIp1ZXXbFkgWxCc68mk752E3tY/OZeIsiIaxi9o+BBokGH3SZ+4FPbZ8yiPQxNeDl0hNUeHWcKjYb1Zx20bd/GzRaV7t28gRSYELvw7pIfgVcLplwF8+bOo0Ffjmm6zerWrxvPzoe79w8hAAAh+QQJBAAfACwBAAEAOgA6AAAFRuAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/D4MgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyJxnyTQym6nn0ilVSa9XGHY7jXKx2m/WK36Gy1CUVCBpu9+OtNqDeNslgip5Gej4/4ATcidLAICHHQF6c0x9iH+CXV6Gj36KZnsejgsREQSACp0Yg0ydEZWWi4RPjgdLG48apEuogJeDJVKtr7GzHrV/t5KrjX6uHhQMF4cKCwujTxHOwKmYjHzGTw+VEVIK1MGqJrrZTNuP3U/f4IniuazlSwMUFMugE/j47NW4JOQdx9bsoybMgxV4ALEIGAis4MFiCZkUaLPgUAYHGDF+Yucw0y5z3Lzt63hNUzwP5xCRpWOyDhxJYtgiStBQEVCGAAEM6MLp0p0/hMdgIZI17AOTntZgmowo9BBRgz9/EfQ54h8BBS39bKDXwBc9CrVejkNYKRLUSWGpivhXtt9PSpXEvmNiwYDdu3jzFB3LAa9fAxbUGkXjtmSZh4TPJM4kRgbhvVEL9xhTEongJJgza97MubPnz6BDix5NurTp0yJCAAAh+QQJBAAfACwEAA4ANAAgAAAFMeAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9jsKgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s6bVwLHu0bN8uXeM8rP+9YOoHFBpHRN1xmSwue02A82lrFjaOKbVl3XQ6WeWWm7x+v+HdeFj2ntHaNbL9jUAI5/RLTurWOR53eXFbfh0RgB4PCm9hfCKGiDSLb18Bjx+RiR4HjG8TA3trmkSdZxuhalSkRA2VBqpPrD+ulR0Go3SHmz8CeG8bFqJMupJNHr5nCsKxQccTg4oUNA0YCYG/HQQQYsSlnmCUFLUXgm8EAsPeP6Zf2baV2+rEmTrt8PDyzS7O9uD4b5YV2VGjGw52/wB+CaYjlQcpNBAQioHwy4QMCxe4i3BKGIQN3K7AArBATz8anUDADcgQDMGCbQkknDKAh4ABNxQ0gpnoQ8eDVAUO0ADAzUNMhbZMQiG4R4mOo0gb8eTCQgeEqJVM7juCDWvWJnI4ev2aZIwHl2PfZIBIZBXKtAsLgC1kJu0GuWXNaoB7d67ZlWP75jVLw4JXwW35PNSJFPFUrmIb402smFNCW44N5kJ5+dTkx+vuAfus+VHF0X4xzeHsObXq1ZY7ZN76mt0C0rRf1zuWW/du175PHAu+YjhxFcCPm6CsHHnv5kig6w4BACH5BAkEAB8ALAEAAQA6ADoAAAVG4CeOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CweEwum8/otHrNbrvf8PgyBAAh+QQFBAAfACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCADs=')",fv=k.div`
  display: inline-block;
  height: ${({size:e})=>hn(e)};
  width: ${({size:e})=>hn(e)};
`,pv=k.span`
  display: block;
  background: ${mv};
  background-size: cover;
  width: 100%;
  height: 100%;
`,gv=v.forwardRef(({size:e=30,...t},n)=>h.createElement(fv,{size:e,ref:n,...t},h.createElement(pv,null)));gv.displayName="Hourglass";const vv=k.div`
  position: relative;
  display: inline-block;
  padding-bottom: 26px;
`,yv=k.div`
  position: relative;
`,xv=k.div`
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
`,wv=k(Tt).attrs(()=>({"data-testid":"background"}))`
  width: 100%;
  height: 100%;
`,kv=k.div`
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
`,bv=v.forwardRef(({backgroundStyles:e,children:t,...n},r)=>h.createElement(vv,{ref:r,...n},h.createElement(yv,null,h.createElement(xv,null,h.createElement(wv,{style:e},t)),h.createElement(kv,null))));bv.displayName="Monitor";const Ev=k.div`
  display: inline-block;
  height: ${Le.md};
  width: 100%;
`,Sv=k(Tt)`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  padding: 0;
  overflow: hidden;
  &:before {
    z-index: 1;
  }
`,hm=L`
  width: calc(100% - 4px);
  height: calc(100% - 4px);

  display: flex;
  align-items: center;
  justify-content: space-around;
`,Mv=k.div`
  position: relative;
  top: 4px;
  ${hm}
  background: ${({theme:e})=>e.canvas};
  color: #000;
  margin-left: 2px;
  margin-top: -2px;
  color: ${({theme:e})=>e.materialText};
`,Av=k.div`
  position: absolute;
  top: 2px;
  left: 2px;
  ${hm}
  color: ${({theme:e})=>e.materialTextInvert};
  background: ${({theme:e})=>e.progress};
  clip-path: polygon(
    0 0,
    ${({value:e=0})=>e}% 0,
    ${({value:e=0})=>e}% 100%,
    0 100%
  );
  transition: 0.4s linear clip-path;
`,_v=k.div`
  width: calc(100% - 6px);
  height: calc(100% - 8px);
  position: absolute;
  left: 3px;
  top: 4px;
  box-sizing: border-box;
  display: inline-flex;
`,dm=17,$v=k.span`
  display: inline-block;
  width: ${dm}px;
  box-sizing: border-box;
  height: 100%;
  background: ${({theme:e})=>e.progress};
  border-color: ${({theme:e})=>e.material};
  border-width: 0px 1px;
  border-style: solid;
`,Cv=v.forwardRef(({hideValue:e=!1,shadow:t=!0,value:n,variant:r="default",...o},i)=>{const l=e?null:`${n}%`,a=v.useRef(null),[s,u]=v.useState([]),p=v.useCallback(()=>{if(!a.current||n===void 0)return;const d=a.current.getBoundingClientRect().width,g=Math.round(n/100*d/dm);u(Array.from({length:g}))},[n]);return v.useEffect(()=>(p(),window.addEventListener("resize",p),()=>window.removeEventListener("resize",p)),[p]),h.createElement(Ev,{"aria-valuenow":n!==void 0?Math.round(n):void 0,ref:i,role:"progressbar",variant:r,...o},h.createElement(Sv,{variant:r,shadow:t},r==="default"?h.createElement(h.Fragment,null,h.createElement(Mv,{"data-testid":"defaultProgress1"},l),h.createElement(Av,{"data-testid":"defaultProgress2",value:n},l)):h.createElement(_v,{ref:a,"data-testid":"tileProgress"},s.map((d,g)=>h.createElement($v,{key:g})))))});Cv.displayName="ProgressBar";const mm=L`
  width: ${Ct}px;
  height: ${Ct}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,Tv=k(Tt)`
  ${mm}
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
`,Iv=k.div`
  ${Dn()}
  ${mm}
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
`,Pv=k.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
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
`,Lv={flat:Iv,default:Tv},Rv=v.forwardRef(({checked:e,className:t="",disabled:n=!1,label:r="",onChange:o,style:i={},variant:l="default",...a},s)=>{const u=Lv[l];return h.createElement(fu,{$disabled:n,className:t,style:i},h.createElement(u,{$disabled:n,role:"presentation"},e&&h.createElement(Pv,{$disabled:n,variant:l})),h.createElement(Hi,{disabled:n,onChange:n?void 0:o,readOnly:n,type:"radio",checked:e,ref:s,...a}),r&&h.createElement(pu,null,r))});Rv.displayName="Radio";const Dv=typeof window<"u"?v.useLayoutEffect:v.useEffect;function vn(e){const t=v.useRef(e);return Dv(()=>{t.current=e}),v.useCallback((...n)=>(0,t.current)(...n),[])}function Qc(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function Vc(e,t){return v.useMemo(()=>e==null&&t==null?null:n=>{Qc(e,n),Qc(t,n)},[e,t])}let El=!0,ss=!1,Gc;const jv={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function Ov(e){if("type"in e){const{type:t,tagName:n}=e;if(n==="INPUT"&&jv[t]&&!e.readOnly||n==="TEXTAREA"&&!e.readOnly)return!0}return!!("isContentEditable"in e&&e.isContentEditable)}function Nv(e){e.metaKey||e.altKey||e.ctrlKey||(El=!0)}function na(){El=!1}function zv(){this.visibilityState==="hidden"&&ss&&(El=!0)}function Bv(e){e.addEventListener("keydown",Nv,!0),e.addEventListener("mousedown",na,!0),e.addEventListener("pointerdown",na,!0),e.addEventListener("touchstart",na,!0),e.addEventListener("visibilitychange",zv,!0)}function Fv(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return El||Ov(t)}function Wv(){ss=!0,window.clearTimeout(Gc),Gc=window.setTimeout(()=>{ss=!1},100)}function Uv(){const e=v.useCallback(t=>{const n=kd.findDOMNode(t);n!=null&&Bv(n.ownerDocument)},[]);return{isFocusVisible:Fv,onBlurVisible:Wv,ref:e}}function Hv(e,t,n){return(n-t)*e+t}function Yo(e,t){if(t!==void 0&&"changedTouches"in e){for(let n=0;n<e.changedTouches.length;n+=1){const r=e.changedTouches[n];if(r.identifier===t)return{x:r.clientX,y:r.clientY}}return!1}return"clientX"in e?{x:e.clientX,y:e.clientY}:!1}function Xo(e){return e&&e.ownerDocument||document}function Qv(e,t){var n;const{index:r}=(n=e.reduce((o,i,l)=>{const a=Math.abs(t-i);return o===null||a<o.distance||a===o.distance?{distance:a,index:l}:o},null))!==null&&n!==void 0?n:{};return r??-1}const Vv=k.div`
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

  ${({orientation:e,size:t})=>e==="vertical"?L`
          height: ${t};
          margin-right: 1.5rem;
          &:before {
            left: -6px;
            top: -15px;
            height: calc(100% + 30px);
            width: ${({hasMarks:n})=>n?"41px":"39px"};
          }
        `:L`
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
`,fm=()=>L`
  position: absolute;
  ${({orientation:e})=>e==="vertical"?L`
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          height: 100%;
          width: 8px;
        `:L`
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          height: 8px;
          width: 100%;
        `}
`,Gv=k(Tt)`
  ${fm()}
`,Kv=k(Tt)`
  ${fm()}

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
`,Yv=k.span`
  position: relative;
  ${({orientation:e})=>e==="vertical"?L`
          width: 32px;
          height: 18px;
          right: 2px;
          transform: translateY(-50%);
        `:L`
          height: 32px;
          width: 18px;
          top: 2px;
          transform: translateX(-50%);
        `}
  ${({variant:e})=>e==="flat"?L`
          ${Dn()}
          outline: 2px solid ${({theme:t})=>t.flatDark};
          background: ${({theme:t})=>t.flatLight};
        `:L`
          ${wt()}
          ${pe()}
          &:focus {
            outline: none;
          }
        `}
    ${({$disabled:e,theme:t})=>e&&$o({mainColor:t.material,secondaryColor:t.borderLightest})}
`,tr=6,Xv=k.span`
  display: inline-block;
  position: absolute;

  ${({orientation:e})=>e==="vertical"?L`
          right: ${-tr-2}px;
          bottom: 0px;
          transform: translateY(1px);
          width: ${tr}px;
          border-bottom: 2px solid ${({theme:t})=>t.materialText};
        `:L`
          bottom: ${-tr}px;
          height: ${tr}px;
          transform: translateX(-1px);
          border-left: 1px solid ${({theme:t})=>t.materialText};
          border-right: 1px solid ${({theme:t})=>t.materialText};
        `}

  color:  ${({theme:e})=>e.materialText};
  ${({$disabled:e,theme:t})=>e&&L`
      ${xt()}
      box-shadow: 1px 1px 0px ${t.materialTextDisabledShadow};
      border-color: ${t.materialTextDisabled};
    `}
`,Zv=k.div`
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 1;
  font-size: 0.875rem;

  ${({orientation:e})=>e==="vertical"?L`
          transform: translate(${tr+2}px, ${tr+1}px);
        `:L`
          transform: translate(-0.5ch, calc(100% + 2px));
        `}
`,Jv=v.forwardRef(({defaultValue:e,disabled:t=!1,marks:n=!1,max:r=100,min:o=0,name:i,onChange:l,onChangeCommitted:a,onMouseDown:s,orientation:u="horizontal",size:p="100%",step:d=1,value:g,variant:y="default",...w},b)=>{const T=y==="flat"?Kv:Gv,m=u==="vertical",[c=o,f]=dn({defaultValue:e,onChange:l??a,value:g}),{isFocusVisible:x,onBlurVisible:S,ref:E}=Uv(),[M,I]=v.useState(!1),B=v.useRef(),j=v.useRef(null),q=Vc(E,B),ee=Vc(b,q),de=vn(O=>{x(O)&&I(!0)}),me=vn(()=>{M!==!1&&(I(!1),S())}),se=v.useRef(),we=v.useMemo(()=>n===!0&&Number.isFinite(d)?[...Array(Math.round((r-o)/d)+1)].map((O,N)=>({label:void 0,value:o+d*N})):Array.isArray(n)?n:[],[n,r,o,d]),ke=vn(O=>{const N=(r-o)/10,K=we.map(Me=>Me.value),z=K.indexOf(c);let H=0;switch(O.key){case"Home":H=o;break;case"End":H=r;break;case"PageUp":d&&(H=c+N);break;case"PageDown":d&&(H=c-N);break;case"ArrowRight":case"ArrowUp":d?H=c+d:H=K[z+1]||K[K.length-1];break;case"ArrowLeft":case"ArrowDown":d?H=c-d:H=K[z-1]||K[0];break;default:return}O.preventDefault(),d&&(H=Wc(H,d,o)),H=Sn(H,o,r),f(H),I(!0),l==null||l(H),a==null||a(H)}),_=v.useCallback(O=>{if(!B.current)return 0;const N=B.current.getBoundingClientRect();let K;m?K=(N.bottom-O.y)/N.height:K=(O.x-N.left)/N.width;let z;if(z=Hv(K,o,r),d)z=Wc(z,d,o);else{const H=we.map(C=>C.value),Me=Qv(H,z);z=H[Me]}return z=Sn(z,o,r),z},[we,r,o,d,m]),P=vn(O=>{var N;const K=Yo(O,se.current);if(!K)return;const z=_(K);(N=j.current)===null||N===void 0||N.focus(),f(z),I(!0),l==null||l(z)}),D=vn(O=>{const N=Yo(O,se.current);if(!N)return;const K=_(N);a==null||a(K),se.current=void 0;const z=Xo(B.current);z.removeEventListener("mousemove",P),z.removeEventListener("mouseup",D),z.removeEventListener("touchmove",P),z.removeEventListener("touchend",D)}),G=vn(O=>{var N;s==null||s(O),O.preventDefault(),(N=j.current)===null||N===void 0||N.focus(),I(!0);const K=Yo(O,se.current);if(K){const H=_(K);f(H),l==null||l(H)}const z=Xo(B.current);z.addEventListener("mousemove",P),z.addEventListener("mouseup",D)}),U=vn(O=>{var N;O.preventDefault();const K=O.changedTouches[0];K!=null&&(se.current=K.identifier),(N=j.current)===null||N===void 0||N.focus(),I(!0);const z=Yo(O,se.current);if(z){const Me=_(z);f(Me),l==null||l(Me)}const H=Xo(B.current);H.addEventListener("touchmove",P),H.addEventListener("touchend",D)});return v.useEffect(()=>{const{current:O}=B;O==null||O.addEventListener("touchstart",U);const N=Xo(O);return()=>{O==null||O.removeEventListener("touchstart",U),N.removeEventListener("mousemove",P),N.removeEventListener("mouseup",D),N.removeEventListener("touchmove",P),N.removeEventListener("touchend",D)}},[D,P,U]),h.createElement(Vv,{$disabled:t,hasMarks:!!we.length,isFocused:M,onMouseDown:G,orientation:u,ref:ee,size:hn(p),...w},h.createElement("input",{disabled:t,name:i,type:"hidden",value:c??0}),we&&we.map(O=>h.createElement(Xv,{$disabled:t,"data-testid":"tick",key:O.value/(r-o)*100,orientation:u,style:{[m?"bottom":"left"]:`${(O.value-o)/(r-o)*100}%`}},O.label&&h.createElement(Zv,{"aria-hidden":!0,"data-testid":"mark",orientation:u},O.label))),h.createElement(T,{orientation:u,variant:y}),h.createElement(Yv,{$disabled:t,"aria-disabled":t?!0:void 0,"aria-orientation":u,"aria-valuemax":r,"aria-valuemin":o,"aria-valuenow":c,onBlur:me,onFocus:de,onKeyDown:ke,orientation:u,ref:j,role:"slider",style:{[m?"bottom":"left"]:`${(m?-100:0)+100*(c-o)/(r-o)}%`},tabIndex:t?void 0:0,variant:y}))});Jv.displayName="Slider";const qv=k.tbody`
  background: ${({theme:e})=>e.canvas};
  display: table-row-group;
  box-shadow: ${hu};
  overflow-y: auto;
`,ey=v.forwardRef(function({children:t,...n},r){return h.createElement(qv,{ref:r,...n},t)});ey.displayName="TableBody";const ty=k.td`
  padding: 0 8px;
`,ny=v.forwardRef(function({children:t,...n},r){return h.createElement(ty,{ref:r,...n},t)});ny.displayName="TableDataCell";const ry=k.thead`
  display: table-header-group;
`,oy=v.forwardRef(function({children:t,...n},r){return h.createElement(ry,{ref:r,...n},t)});oy.displayName="TableHead";const iy=k.th`
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
  ${({$disabled:e})=>!e&&L`
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
`,ly=v.forwardRef(function({disabled:t=!1,children:n,onClick:r,onTouchStart:o=Nn,sort:i,...l},a){const s=i==="asc"?"ascending":i==="desc"?"descending":void 0;return h.createElement(iy,{$disabled:t,"aria-disabled":t,"aria-sort":s,onClick:t?void 0:r,onTouchStart:t?void 0:o,ref:a,...l},h.createElement("div",null,n))});ly.displayName="TableHeadCell";const ay=k.tr`
  color: inherit;
  display: table-row;
  height: calc(${Le.md} - 2px);
  line-height: calc(${Le.md} - 2px);
  vertical-align: middle;
  outline: none;

  color: ${({theme:e})=>e.canvasText};
  &:hover {
    background: ${({theme:e})=>e.hoverBackground};
    color: ${({theme:e})=>e.canvasTextInvert};
  }
`,sy=v.forwardRef(function({children:t,...n},r){return h.createElement(ay,{ref:r,...n},t)});sy.displayName="TableRow";const uy=k.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1rem;
`,cy=k(Tt)`
  &:before {
    box-shadow: none;
  }
`,hy=v.forwardRef(({children:e,...t},n)=>h.createElement(cy,null,h.createElement(uy,{ref:n,...t},e)));hy.displayName="Table";const dy=k.button`
  ${wt()}
  ${pe()}
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  height: ${Le.md};
  line-height: ${Le.md};
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
    ${wr}
    outline-offset: -6px;
  }
  ${e=>e.selected&&`
    z-index: 1;
    height: calc(${Le.md} + 4px);
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
`,my=v.forwardRef(({value:e,onClick:t,selected:n=!1,children:r,...o},i)=>h.createElement(dy,{"aria-selected":n,selected:n,onClick:l=>t==null?void 0:t(e,l),ref:i,role:"tab",...o},r));my.displayName="Tab";const fy=k.div`
  ${wt()}
  ${pe()}
  position: relative;
  display: block;
  height: 100%;
  padding: 16px;
  font-size: 1rem;
`,py=v.forwardRef(({children:e,...t},n)=>h.createElement(fy,{ref:n,...t},e));py.displayName="TabBody";const gy=k.div`
  position: relative;
  ${({isMultiRow:e,theme:t})=>e&&`
  button {
    flex-grow: 1;
  }
  button:last-child:before {
    border-right: 2px solid ${t.borderDark};
  }
  `}
`,vy=k.div.attrs(()=>({"data-testid":"tab-row"}))`
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
`;function yy(e,t){const n=[];for(let r=t;r>0;r-=1)n.push(e.splice(0,Math.ceil(e.length/r)));return n}const xy=v.forwardRef(({value:e,onChange:t=Nn,children:n,rows:r=1,...o},i)=>{const l=v.useMemo(()=>{var a;const s=(a=h.Children.map(n,d=>{if(!h.isValidElement(d))return null;const g={selected:d.props.value===e,onClick:t};return h.cloneElement(d,g)}))!==null&&a!==void 0?a:[],u=yy(s,r).map((d,g)=>({key:g,tabs:d})),p=u.findIndex(d=>d.tabs.some(g=>g.props.selected));return u.push(u.splice(p,1)[0]),u},[n,t,r,e]);return h.createElement(gy,{...o,isMultiRow:r>1,role:"tablist",ref:i},l.map(a=>h.createElement(vy,{key:a.key},a.tabs)))});xy.displayName="Tabs";const wy=["blur","focus"],ky=["click","contextmenu","doubleclick","drag","dragend","dragenter","dragexit","dragleave","dragover","dragstart","drop","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup"];function Kc(e){return"nativeEvent"in e&&wy.includes(e.type)}function Yc(e){return"nativeEvent"in e&&ky.includes(e.type)}const by={top:`top: -4px;
        left: 50%;
        transform: translate(-50%, -100%);`,bottom:`bottom: -4px;
           left: 50%;
           transform: translate(-50%, 100%);`,left:`left: -4px;
         top: 50%;
         transform: translate(-100%, -50%);`,right:`right: -4px;
          top: 50%;
          transform: translate(100%, -50%);`},Ey=k.span`
  position: absolute;

  z-index: 1;
  display: ${e=>e.show?"block":"none"};
  padding: 4px;
  border: 2px solid ${({theme:e})=>e.borderDarkest};
  background: ${({theme:e})=>e.tooltip};
  box-shadow: ${cu};
  text-align: center;
  font-size: 1rem;
  ${e=>by[e.position]}
`,Sy=k.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`,My=v.forwardRef(({className:e,children:t,disableFocusListener:n=!1,disableMouseListener:r=!1,enterDelay:o=1e3,leaveDelay:i=0,onBlur:l,onClose:a,onFocus:s,onMouseEnter:u,onMouseLeave:p,onOpen:d,style:g,text:y,position:w="top",...b},T)=>{const[m,c]=v.useState(!1),[f,x]=v.useState(),[S,E]=v.useState(),M=!n,I=!r,B=_=>{window.clearTimeout(f),window.clearTimeout(S);const P=window.setTimeout(()=>{c(!0),d==null||d(_)},o);x(P)},j=_=>{_.persist(),Kc(_)?s==null||s(_):Yc(_)&&(u==null||u(_)),B(_)},q=_=>{window.clearTimeout(f),window.clearTimeout(S);const P=window.setTimeout(()=>{c(!1),a==null||a(_)},i);E(P)},ee=_=>{_.persist(),Kc(_)?l==null||l(_):Yc(_)&&(p==null||p(_)),q(_)},de=M?ee:void 0,me=M?j:void 0,se=I?j:void 0,we=I?ee:void 0,ke=M?0:void 0;return h.createElement(Sy,{"data-testid":"tooltip-wrapper",onBlur:de,onFocus:me,onMouseEnter:se,onMouseLeave:we,tabIndex:ke},h.createElement(Ey,{className:e,"data-testid":"tooltip",position:w,ref:T,show:m,style:g,...b},y),t)});My.displayName="Tooltip";const us=k(pu)`
  white-space: nowrap;
`,pm=L`
  :focus {
    outline: none;
  }

  ${({$disabled:e})=>e?"cursor: default;":L`
          cursor: pointer;

          :focus {
            ${us} {
              background: ${({theme:t})=>t.hoverBackground};
              color: ${({theme:t})=>t.materialTextInvert};
              outline: 2px dotted ${({theme:t})=>t.focusSecondary};
            }
          }
        `}
`,Ay=k.ul`
  position: relative;
  isolation: isolate;

  ${({isRootLevel:e})=>e&&L`
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
`,_y=k.li`
  position: relative;
  padding-left: ${({hasItems:e})=>e?"0":"13px"};

  ${({isRootLevel:e})=>e?L`
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
        `:L`
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
`,$y=k.details`
  position: relative;
  z-index: 2;

  &[open] > summary:before {
    content: '-';
  }
`,Cy=k.summary`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  color: ${({theme:e})=>e.materialText};
  user-select: none;
  padding-left: 18px;
  ${pm};

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
`,Xc=k(fu)`
  position: relative;
  z-index: 1;
  background: none;
  border: 0;
  font-family: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  ${pm};
`,Ty=k.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;function Zc(e,t){return e.includes(t)?e.filter(n=>n!==t):[...e,t]}function Jc(e){e.preventDefault()}function gm({className:e,disabled:t,expanded:n,innerRef:r,level:o,select:i,selected:l,style:a,tree:s=[]}){const u=o===0,p=v.useCallback(d=>{var g,y;const w=!!(d.items&&d.items.length>0),b=n.includes(d.id),T=(g=t||d.disabled)!==null&&g!==void 0?g:!1,m=T?Jc:S=>i(S,d),c=T?Jc:S=>i(S,d),f=l===d.id,x=h.createElement(Ty,{"aria-hidden":!0},d.icon);return h.createElement(_y,{key:d.label,isRootLevel:u,role:"treeitem","aria-expanded":b,"aria-selected":f,hasItems:w},w?h.createElement($y,{open:b},h.createElement(Cy,{onClick:m,$disabled:T},h.createElement(Xc,{$disabled:T},x,h.createElement(us,null,d.label))),b&&h.createElement(gm,{className:e,disabled:T,expanded:n,level:o+1,select:i,selected:l,style:a,tree:(y=d.items)!==null&&y!==void 0?y:[]})):h.createElement(Xc,{as:"button",$disabled:T,onClick:c},x,h.createElement(us,null,d.label)))},[e,t,n,u,o,i,l,a]);return h.createElement(Ay,{className:u?e:void 0,style:u?a:void 0,ref:u?r:void 0,role:u?"tree":"group",isRootLevel:u},s.map(p))}function Iy({className:e,defaultExpanded:t=[],defaultSelected:n,disabled:r=!1,expanded:o,onNodeSelect:i,onNodeToggle:l,selected:a,style:s,tree:u=[]},p){const[d,g]=dn({defaultValue:t,onChange:l,onChangePropName:"onNodeToggle",value:o,valuePropName:"expanded"}),[y,w]=dn({defaultValue:n,onChange:i,onChangePropName:"onNodeSelect",value:a,valuePropName:"selected"}),b=v.useCallback((c,f)=>{if(l){const x=Zc(d,f);l(c,x)}g(x=>Zc(x,f))},[d,l,g]),T=v.useCallback((c,f)=>{w(f),i&&i(c,f)},[i,w]),m=v.useCallback((c,f)=>{c.preventDefault(),T(c,f.id),f.items&&f.items.length&&b(c,f.id)},[T,b]);return h.createElement(gm,{className:e,disabled:r,expanded:d,level:0,innerRef:p,select:m,selected:y,style:s,tree:u})}const Py=v.forwardRef(Iy);Py.displayName="TreeView";const qc=mu;var Ly={name:"original",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#848584",borderDarkest:"#0a0a0a",borderLight:"#dfdfdf",borderLightest:"#fefefe",canvas:"#ffffff",canvasText:"#0a0a0a",canvasTextDisabled:"#848584",canvasTextDisabledShadow:"#fefefe",canvasTextInvert:"#fefefe",checkmark:"#0a0a0a",checkmarkDisabled:"#848584",desktopBackground:"#008080",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#060084",headerNotActiveBackground:"#7f787f",headerNotActiveText:"#c6c6c6",headerText:"#fefefe",hoverBackground:"#060084",material:"#c6c6c6",materialDark:"#9a9e9c",materialText:"#0a0a0a",materialTextDisabled:"#848584",materialTextDisabledShadow:"#fefefe",materialTextInvert:"#fefefe",progress:"#060084",tooltip:"#fefbcc"},Ry=Ly;const Dy=s1(Ry);var jy=["variant"];function Oy(e,t){if(e==null)return{};var n=Ny(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Ny(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Vi(){return Vi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vi.apply(this,arguments)}var zy=function(t){return h.createElement("svg",Vi({xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",shapeRendering:"crispEdges",viewBox:"0 -0.5 32 32"},t),h.createElement("path",{stroke:"gray",d:"M9 4h4M7 5h2m4 0h2M5 6h2m8 0h7M4 7h1m12 0h2m3 0h2M4 8h1m14 0h2m3 0h2M4 9h1m3 0h2m11 0h2m3 0h1M4 10h1m5 0h2m13 0h2M4 11h1m7 0h2m7 0h2m1 0h3M4 12h1m9 0h2m3 0h4m1 0h3M4 13h1m11 0h1m2 0h4m1 0h3M4 14h1m14 0h4m1 0h3M4 15h1m14 0h4m1 0h3M4 16h1m14 0h4m1 0h3M4 17h1m14 0h4m1 0h3M4 18h1m14 0h4m1 0h3M4 19h2m13 0h4m1 0h3M4 20h1m1 0h2m11 0h4m1 0h2M8 21h2m9 0h4m1 0h1m-15 1h2m7 0h4m-11 1h2m5 0h4m-9 1h2m3 0h4m-7 1h2m1 0h4m-5 1h3"}),h.createElement("path",{stroke:"silver",d:"M9 5h4M8 6h7m-5 1h7m2 0h3M6 8h4m2 0h7m2 0h3M6 9h1m3 0h2m2 0h7m2 0h3M6 10h1m5 0h2m2 0h7m1 0h1M6 11h1m7 0h2m2 0h3M6 12h1m9 0h2M6 13h1m10 0h2M6 14h1m10 0h2M6 15h1m10 0h2M6 16h1m10 0h2M6 17h1m10 0h2M6 18h1m10 0h2M6 19h3m8 0h2M8 20h3m6 0h2m-9 1h3m4 0h2m-7 1h3m2 0h2m-5 1h5m-3 1h3m-1 1h1"}),h.createElement("path",{stroke:"#fff",d:"M7 6h1M5 7h5M5 8h1m4 0h2M5 9h1m6 0h2m-9 1h1m8 0h2M5 11h1m10 0h2M5 12h1m12 0h1M5 13h1m-1 1h1m-1 1h1m5 0h1m-7 1h1m-1 1h1m-1 1h1"}),h.createElement("path",{stroke:"#000",d:"M7 9h1m-1 1h1m15 0h1m3 0h1M7 11h1m15 0h1m3 0h1M7 12h1m15 0h1m3 0h1M7 13h1m15 0h1m3 0h1M7 14h1m15 0h1m3 0h1M7 15h1m15 0h1m3 0h1M7 16h1m15 0h1m3 0h1M7 17h1m15 0h1m3 0h1m-5 1h1m3 0h1m-5 1h1m3 0h1M5 20h1m17 0h1m2 0h1M6 21h2m15 0h1m1 0h1M8 22h2m13 0h2m-15 1h2m11 0h1m-12 1h2m9 0h1m-10 1h2m7 0h1m-8 1h2m3 0h2m-5 1h3"}),h.createElement("path",{stroke:"navy",d:"M8 10h2m0 1h2m0 1h2m0 1h2m0 1h1m-1 1h1m-1 1h1m-1 1h1M7 18h2m7 0h1m-8 1h2m5 0h1m-6 1h2m3 0h1m-4 1h2m1 0h1m-2 1h2"}),h.createElement("path",{stroke:"#00f",d:"M8 11h2m-2 1h4m-4 1h3m1 0h2m-6 1h1m1 0h1m1 0h2m1 0h1m-8 1h2m2 0h1m1 0h2m-8 1h1m1 0h1m2 0h3m-8 1h3m1 0h4m-7 1h2m1 0h1m1 0h2m-5 1h5m-3 1h3m-1 1h1"}),h.createElement("path",{stroke:"#0ff",d:"M11 13h1m-3 1h1m1 0h1m2 0h1m-5 1h1m2 0h1m-5 1h1m2 0h1m-2 1h1m-1 1h1m1 0h1"}),h.createElement("path",{stroke:"#ff0",d:"M11 16h1"}))},By=function(t){return h.createElement("svg",Vi({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",shapeRendering:"crispEdges",viewBox:"0 -0.5 16 16"},t),h.createElement("path",{stroke:"gray",d:"M3 0h3M1 1h2m3 0h5M0 2h1m7 0h2m1 0h2M0 3h1m1 0h2m6 0h2m1 0h2M0 4h1m3 0h2m6 0h1m1 0h1M0 5h1m5 0h2m3 0h1m1 0h2M0 6h1m9 0h2m1 0h2M0 7h1m9 0h2m1 0h2M0 8h1m9 0h2m1 0h2M0 9h1m9 0h2m1 0h2M0 10h1m9 0h2m1 0h1M1 11h2m7 0h2m-9 1h2m5 0h2m-7 1h2m3 0h2m-5 1h3"}),h.createElement("path",{stroke:"silver",d:"M3 1h3M1 2h1m2 0h4m2 0h1M1 3h1m4 0h4m2 0h1M1 4h1m6 0h4m1 0h1M1 5h1m8 0h1M1 6h1m6 0h2M1 7h1m6 0h2M1 8h1m6 0h2M1 9h1m6 0h2m-9 1h2m5 0h2m-7 1h2m3 0h2m-5 1h2m1 0h2m-3 1h3"}),h.createElement("path",{stroke:"#fff",d:"M2 2h2m0 1h2m0 1h2m0 1h2"}),h.createElement("path",{stroke:"#000",d:"M2 4h1m12 0h1M2 5h1m9 0h1m2 0h1M2 6h1m9 0h1m2 0h1M2 7h1m9 0h1m2 0h1M2 8h1m9 0h1m2 0h1M2 9h1m9 0h1m2 0h1m-4 1h1m1 0h1M0 11h1m11 0h2M1 12h2m9 0h1M3 13h2m7 0h1m-8 1h2m3 0h2m-5 1h3"}),h.createElement("path",{stroke:"navy",d:"M3 4h1m0 1h2m1 1h1M7 7h1M7 8h1M7 9h1m-5 1h2m2 0h1m-3 1h3m-1 1h1"}),h.createElement("path",{stroke:"#00f",d:"M3 5h1M3 6h1m1 0h2M3 7h1m1 0h2M4 8h1M3 9h1m1 0h2m-2 1h2"}),h.createElement("path",{stroke:"#0ff",d:"M4 6h1M4 7h1M3 8h1m1 0h2M4 9h1"}))},Fy={"32x32_4":zy,"16x16_4":By},Wy=function(t){var n=t.variant,r=n===void 0?"32x32_4":n,o=Oy(t,jy),i=Fy[r];return h.createElement(i,o)},Uy=["variant"];function Hy(e,t){if(e==null)return{};var n=Qy(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Qy(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Gi(){return Gi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Gi.apply(this,arguments)}var Vy=function(t){return h.createElement("svg",Gi({xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",shapeRendering:"crispEdges",viewBox:"0 -0.5 32 32"},t),h.createElement("path",{stroke:"#000",d:"M4 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h1m1 1h1M4 2h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m3 0h1m1 0h1M4 3h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m3 0h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1M5 7h6m7 0h1m1 0h3m3 0h1m1 0h1m-3 1h1m1 0h1M5 9h6m15 0h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1M5 13h6m15 0h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1M5 16h18m3 0h1m1 0h1m-3 1h1m1 0h1M5 18h18m3 0h1m1 0h1m-3 1h1m1 0h1M5 20h18m3 0h1m1 0h1m-3 1h1m1 0h1M5 22h18m3 0h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1M5 25h6m15 0h1m1 0h1m-3 1h1m1 0h1M5 27h6m15 0h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-4 1h1m1 0h1M4 31h23"}),h.createElement("path",{stroke:"gray",d:"M3 1h1m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h1M2 2h1m22 0h1M2 3h1m22 0h1M2 4h1M2 5h1M2 6h1M2 7h1M2 8h1M2 9h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m0 1h1"}),h.createElement("path",{stroke:"#fff",d:"M4 1h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1M3 2h1m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2M3 3h1m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2M3 4h22M3 5h22M3 6h22M3 7h2m6 0h7m1 0h1m3 0h2M3 8h22M3 9h2m6 0h14M3 10h22M3 11h22M3 12h22M3 13h2m6 0h14M3 14h22M3 15h22M3 16h2m18 0h2M3 17h22M3 18h2m18 0h2M3 19h22M3 20h2m18 0h2M3 21h22M3 22h2m18 0h2M3 23h22M3 24h22M3 25h2m6 0h14M3 26h22M3 27h2m6 0h14M3 28h22M3 29h22"}),h.createElement("path",{stroke:"silver",d:"M27 2h1m-1 1h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1M4 30h21m1 0h1"}))},Gy=function(t){return h.createElement("svg",Gi({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",shapeRendering:"crispEdges",viewBox:"0 -0.5 16 16"},t),h.createElement("path",{stroke:"#000",d:"M2 0h1m1 0h1m1 0h1m1 0h1m1 0h1M1 1h1m9 0h1M2 2h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m-1 1h1m-1 1h1M3 5h3m1 0h2m3 0h1m-1 1h1M3 7h6m3 0h1m-1 1h1M3 9h6m3 0h1m-1 1h1M3 11h6m3 0h1m-1 1h1m-1 1h1m-1 1h1M1 15h11"}),h.createElement("path",{stroke:"#fff",d:"M2 1h1m1 0h1m1 0h1m1 0h1m1 0h1M1 2h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M1 3h10M1 4h10M1 5h2m3 0h1m2 0h2M1 6h10M1 7h2m6 0h2M1 8h10M1 9h2m6 0h2M1 10h10M1 11h2m6 0h2M1 12h10M1 13h10"}),h.createElement("path",{stroke:"gray",d:"M3 1h1m1 0h1m1 0h1m1 0h1M0 2h1M0 3h1M0 4h1M0 5h1M0 6h1M0 7h1M0 8h1M0 9h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1"}),h.createElement("path",{stroke:"silver",d:"M11 3h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M1 14h11"}))},Ky={"32x32_4":Vy,"16x16_4":Gy},Yy=function(t){var n=t.variant,r=n===void 0?"32x32_4":n,o=Hy(t,Uy),i=Ky[r];return h.createElement(i,o)},Xy=["variant"];function Zy(e,t){if(e==null)return{};var n=Jy(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Jy(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Ki(){return Ki=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ki.apply(this,arguments)}var qy=function(t){return h.createElement("svg",Ki({xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",shapeRendering:"crispEdges",viewBox:"0 -0.5 32 32"},t),h.createElement("path",{stroke:"gray",d:"M2 5h27M2 6h1m25 0h1M2 7h1m25 0h1M2 8h1m25 0h1M2 9h1m25 0h1M2 10h1m25 0h1M2 11h1m25 0h1M2 12h1m25 0h1M2 13h1m25 0h1M2 14h1m25 0h1M2 15h1m25 0h1M2 16h1m25 0h1M2 17h1m25 0h1M2 18h1m25 0h1M2 19h1m25 0h1M2 20h1m25 0h1M2 21h1m25 0h1M2 22h1m25 0h1M2 23h1m25 0h1M2 24h27"}),h.createElement("path",{stroke:"#000",d:"M3 6h1m23 0h1m1 0h1M4 7h1m21 0h1m2 0h1M5 8h1m19 0h1m3 0h1M6 9h1m17 0h1m4 0h1M7 10h1m15 0h1m5 0h1M8 11h1m13 0h1m6 0h1M9 12h1m11 0h1m7 0h1m-20 1h1m9 0h1m8 0h1m-19 1h1m7 0h1m9 0h1m-20 1h1m1 0h1m5 0h1m1 0h1m8 0h1M9 16h1m3 0h1m3 0h1m3 0h1m7 0h1M8 17h1m5 0h1m1 0h1m5 0h1m6 0h1M7 18h1m7 0h1m7 0h1m5 0h1M6 19h1m17 0h1m4 0h1M5 20h1m19 0h1m3 0h1M4 21h1m21 0h1m2 0h1M3 22h1m23 0h1m1 0h1m-1 1h1m-1 1h1M4 25h26"}),h.createElement("path",{stroke:"#ff0",d:"M4 6h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 7h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M4 8h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 9h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M4 10h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 11h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M4 12h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 13h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M4 14h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 15h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M4 16h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 17h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M4 18h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 19h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M4 20h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 21h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M4 22h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 23h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1"}),h.createElement("path",{stroke:"silver",d:"M6 7h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M7 8h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m3 0h1M4 9h1m3 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m3 0h1M5 10h1m3 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m3 0h1m1 0h1M4 11h1m1 0h1m3 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m3 0h1m1 0h1M5 12h1m1 0h1m3 0h1m1 0h1m1 0h1m1 0h1m1 0h1m3 0h1m1 0h1m1 0h1M4 13h1m1 0h1m1 0h1m3 0h1m1 0h1m1 0h1m1 0h1m3 0h1m1 0h1m1 0h1M5 14h1m1 0h1m1 0h1m3 0h1m1 0h1m1 0h1m3 0h1m1 0h1m1 0h1m1 0h1M4 15h1m1 0h1m1 0h1m5 0h1m1 0h1m5 0h1m1 0h1m1 0h1M5 16h1m1 0h1m3 0h1m3 0h1m3 0h1m3 0h1m1 0h1m1 0h1M4 17h1m1 0h1m3 0h1m1 0h1m5 0h1m1 0h1m3 0h1m1 0h1M5 18h1m3 0h1m1 0h1m1 0h1m3 0h1m1 0h1m1 0h1m3 0h1m1 0h1M4 19h1m3 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m3 0h1M7 20h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m3 0h1M6 21h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M5 22h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M4 23h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1"}))},ex=function(t){return h.createElement("svg",Ki({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",shapeRendering:"crispEdges",viewBox:"0 -0.5 16 16"},t),h.createElement("path",{stroke:"gray",d:"M1 3h13M1 4h1M1 5h1M1 6h1M1 7h1M1 8h1M1 9h1m-1 1h1m-1 1h1"}),h.createElement("path",{stroke:"#000",d:"M14 3h1M2 4h1m10 0h2M3 5h1m8 0h1m1 0h1M4 6h1m6 0h1m2 0h1M5 7h1m4 0h1m3 0h1M5 8h2m2 0h2m3 0h1M4 9h1m2 0h2m2 0h1m2 0h1M3 10h1m8 0h1m1 0h1M2 11h1m10 0h2M1 12h14"}),h.createElement("path",{stroke:"silver",d:"M3 4h1m1 0h1m1 0h1m1 0h1m1 0h1M6 5h1m1 0h1m1 0h1M2 6h1m2 0h1m1 0h1m1 0h1m3 0h1M3 7h1m2 0h1m1 0h1m3 0h1M2 8h1m1 0h1m2 0h1m3 0h1m1 0h1M3 9h1m2 0h1m3 0h1m1 0h1m-8 1h1m1 0h1m1 0h1m1 0h1m1 0h1M4 11h1m1 0h1m1 0h1m1 0h1m1 0h1"}),h.createElement("path",{stroke:"#ff0",d:"M4 4h1m1 0h1m1 0h1m1 0h1m1 0h1M2 5h1m1 0h2m1 0h1m1 0h1m1 0h1m1 0h1M3 6h1m2 0h1m1 0h1m1 0h1m1 0h1M2 7h1m1 0h1m2 0h1m1 0h1m1 0h1m1 0h1M3 8h1m4 0h1m3 0h1M2 9h1m2 0h1m3 0h1m3 0h1M2 10h1m1 0h1m1 0h1m1 0h1m1 0h1m-8 1h1m1 0h1m1 0h1m1 0h1m1 0h1"}))},tx={"32x32_4":qy,"16x16_4":ex},vm=function(t){var n=t.variant,r=n===void 0?"32x32_4":n,o=Zy(t,Xy),i=tx[r];return h.createElement(i,o)},nx=["variant"];function rx(e,t){if(e==null)return{};var n=ox(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function ox(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function cs(){return cs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},cs.apply(this,arguments)}var ix=function(t){return h.createElement("svg",cs({xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",shapeRendering:"crispEdges",viewBox:"0 -0.5 32 32"},t),h.createElement("path",{stroke:"#000",d:"M4 4h18M4 5h1m16 0h1M4 6h1m16 0h1M4 7h18M4 8h1m16 0h1M4 9h1m16 0h1M4 10h1m16 0h1M4 11h1m2 0h1m1 0h1m1 0h18M4 12h1m6 0h1m16 0h1M4 13h1m2 0h1m1 0h1m1 0h1m16 0h1M4 14h1m6 0h18M4 15h1m2 0h1m1 0h1m1 0h1m16 0h1M4 16h1m6 0h1m16 0h1M4 17h1m6 0h1m16 0h1M4 18h1m6 0h1m2 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h2m2 0h1M4 19h1m6 0h1m16 0h1M4 20h1m6 0h1m2 0h1m1 0h2m1 0h1m1 0h1m1 0h2m3 0h1M4 21h8m16 0h1m-18 1h1m2 0h1m1 0h1m1 0h1m1 0h2m1 0h1m1 0h1m2 0h1m-18 1h1m16 0h1m-18 1h1m16 0h1m-18 1h1m16 0h1m-18 1h1m2 0h1m1 0h1m1 0h1m9 0h1m-18 1h1m16 0h1m-18 1h18"}),h.createElement("path",{stroke:"#00f",d:"M5 5h16M5 6h16m-9 6h16m-16 1h16"}),h.createElement("path",{stroke:"gray",d:"M22 6h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m6 3h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M6 22h5m18 0h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-17 1h17"}),h.createElement("path",{stroke:"#fff",d:"M5 8h16M5 9h16M5 10h16M5 11h2m1 0h1m1 0h1m-6 1h6m-6 1h2m1 0h1m1 0h1m-6 1h6m-6 1h2m1 0h1m1 0h1m-6 1h6m-6 1h6m-6 1h6m-6 1h6m-6 1h6"}),h.createElement("path",{stroke:"silver",d:"M12 15h16m-16 1h16m-16 1h16m-16 1h2m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m2 0h2m-16 1h16m-16 1h2m1 0h1m2 0h1m1 0h1m1 0h1m2 0h3m-16 1h16m-16 1h2m1 0h1m1 0h1m1 0h1m2 0h1m1 0h1m1 0h2m-16 1h16m-16 1h16m-16 1h16m-16 1h2m1 0h1m1 0h1m1 0h9m-16 1h16"}))},lx={"32x32_4":ix},ax=function(t){var n=t.variant,r=n===void 0?"32x32_4":n,o=rx(t,nx),i=lx[r];return h.createElement(i,o)},sx=["variant"];function ux(e,t){if(e==null)return{};var n=cx(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function cx(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Yi(){return Yi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Yi.apply(this,arguments)}var hx=function(t){return h.createElement("svg",Yi({xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",shapeRendering:"crispEdges",viewBox:"0 -0.5 32 32"},t),h.createElement("path",{stroke:"purple",d:"M23 0h2m-3 1h2m1 0h1m-2 1h1m1 0h1m-2 1h1m1 0h1m-2 1h1m1 0h1m-2 1h1m1 0h1m-2 1h1m1 0h1m-15 8h2m0 1h2m-5 1h2m3 0h2m-5 1h2m0 1h3m-2 1h2m-2 1h2m-2 1h2m-2 1h2m-2 1h2m-2 1h2m-2 1h2m-2 1h2m-2 1h2m-3 1h1"}),h.createElement("path",{stroke:"gray",d:"M7 1h3M6 2h1m3 0h2M6 3h1m5 0h2M6 4h1m7 0h2m15 15h1"}),h.createElement("path",{stroke:"#fff",d:"M24 1h1M7 2h1m17 0h1M9 3h1m16 0h1M11 4h1m15 0h1M13 5h1m14 0h1m-9 5h1M7 11h1m13 0h1M9 12h1m12 0h1m-12 1h1m11 0h1"}),h.createElement("path",{stroke:"#ff0",d:"M8 2h2m0 1h2M7 4h2m3 0h2M8 5h3m3 0h1m-5 1h3m-2 1h3m-3 1h3m-3 1h3m-3 1h3m-2 1h2"}),h.createElement("path",{stroke:"#000",d:"M22 2h1m0 1h1m0 1h1m-9 1h1m8 0h1M16 6h1m9 0h1M10 7h1m5 0h1m10 0h1m1 0h1M10 8h1m5 0h1m11 0h1M10 9h1m5 0h1m-7 1h1m5 0h1m-1 1h1m1 0h1m-3 1h1m2 0h1m-6 1h1m1 0h1m3 0h1m-7 1h1m6 0h1m-8 1h1m7 0h1m1 0h1m-11 1h1m8 0h1m-10 1h1m7 0h1m-9 1h1m7 0h1m-9 1h1m7 0h1m-1 1h1m8 0h1m-14 1h1m3 0h1m3 0h5m-13 1h1m3 0h1m-5 1h1m3 0h1M0 24h2m16 0h1m3 0h1M2 25h2m14 0h1m3 0h1M4 26h2m12 0h1m3 0h1M6 27h2m10 0h1m3 0h1M8 28h2m8 0h1m1 0h2m-12 1h2m6 0h2m-8 1h2m2 0h2m-4 1h2"}),h.createElement("path",{stroke:"#f0f",d:"M23 2h1m0 1h1M1 4h1m23 0h1M3 5h1m22 0h1M5 6h1m21 0h1M7 7h1m7 8h3m-1 1h3m-5 1h2m2 0h3m-7 1h4m-3 1h4m-2 1h2m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1"}),h.createElement("path",{stroke:"maroon",d:"M1 3h3M0 4h1m3 0h2M0 5h3m3 0h2M0 6h1m2 0h2m3 0h2M0 7h1m4 0h2m2 0h1M0 8h1m6 0h3M0 9h1m7 0h2M0 10h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m15 4h2m-3 1h3m-3 1h3m-3 1h1"}),h.createElement("path",{stroke:"olive",d:"M7 3h2m0 1h2m0 1h2m2 0h1m-3 1h3m-2 1h2m-2 1h2m-2 1h2m-2 1h2m-2 1h2m-2 1h2m-1 1h1m-1 1h1"}),h.createElement("path",{stroke:"silver",d:"M22 3h1m0 1h1m0 1h1m0 1h1m3 0h1m-4 1h1m1 0h1m1 0h1m-4 1h1m1 0h1m-9 1h1m6 0h1m-7 1h1m0 1h1m0 1h1m0 1h1m-2 1h1m1 0h1m-4 1h1m1 0h1m-2 1h1"}),h.createElement("path",{stroke:"red",d:"M2 4h2m0 1h2M1 6h2m3 0h2M1 7h4m3 0h1M1 8h6M1 9h7m-7 1h6m-6 1h5m-5 1h5m-5 1h5m-5 1h5m-5 1h5m-5 1h5m-5 1h5m-5 1h5m-5 1h5m-5 1h5m-5 1h5m-5 1h5m-5 1h5m-4 1h6m-4 1h6m-4 1h6m-4 1h6m-4 1h5m-3 1h3m-1 1h1"}),h.createElement("path",{stroke:"green",d:"M19 9h2M7 10h3m8 0h2m1 0h1M6 11h1m3 0h2m8 0h1m1 0h1M6 12h3m3 0h2m7 0h1m1 0h1M6 13h1m2 0h2m11 0h1m1 0h1M6 14h1m4 0h3m9 0h1m1 0h1M6 15h1m5 0h2m-8 1h1m5 0h2m-2 1h2m-2 1h2m-2 1h2"}),h.createElement("path",{stroke:"#0f0",d:"M8 11h2m9 0h1m-10 1h2m8 0h1M7 13h2m3 0h2m7 0h1M7 14h4m11 0h1M7 15h5m-5 1h5m-5 1h5m-3 1h3m-1 1h1"}),h.createElement("path",{stroke:"navy",d:"M6 17h1m-1 1h1m-1 1h1m-1 1h1m5 0h1m-7 1h1m-1 1h1m-1 1h2m0 1h2m0 1h2"}),h.createElement("path",{stroke:"#00f",d:"M7 18h2m-2 1h4m-4 1h5m-5 1h5m-5 1h5m-4 1h4m-2 1h2"}),h.createElement("path",{stroke:"teal",d:"M26 18h6m-17 1h1m9 0h6m-18 1h1m2 0h2m7 0h1m-14 1h3m10 0h1m-14 1h1m2 0h3m-6 1h1m3 0h2m-6 1h1m3 0h2m-6 1h1m3 0h2m-6 1h2m2 0h2m-4 1h2"}),h.createElement("path",{stroke:"#0ff",d:"M14 20h2m10 0h5m-16 1h3m-5 1h2m-2 1h3m-3 1h3m-3 1h3m-2 1h2"}))},dx=function(t){return h.createElement("svg",Yi({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",shapeRendering:"crispEdges",viewBox:"0 -0.5 16 16"},t),h.createElement("path",{stroke:"olive",d:"M3 0h2M3 1h1m1 0h2M4 2h2m1 0h2M6 3h2M7 4h1M7 5h1M7 6h1"}),h.createElement("path",{stroke:"purple",d:"M11 0h1m0 1h1m0 1h1m0 1h1M9 7h2M8 8h1m2 0h1M9 9h2m-1 1h1m-1 1h1m-1 1h1m-2 1h2"}),h.createElement("path",{stroke:"maroon",d:"M0 1h2M0 2h1m1 0h2M0 3h3m1 0h1M0 4h1m2 0h1M0 5h1M0 6h1M0 7h1M0 8h1M0 9h1m-1 1h1m-1 1h1m7 2h1m-2 1h2"}),h.createElement("path",{stroke:"#fff",d:"M4 1h1m1 1h1m0 8h1"}),h.createElement("path",{stroke:"silver",d:"M10 1h1m0 1h1m0 1h1m0 1h1m-4 1h1m0 1h1m0 1h1"}),h.createElement("path",{stroke:"#f0f",d:"M11 1h1M1 2h1m10 0h1M3 3h1m9 0h1M8 7h1m0 1h2m-2 2h1m-1 1h1m-1 1h1"}),h.createElement("path",{stroke:"#ff0",d:"M5 3h1M5 4h2M5 5h2"}),h.createElement("path",{stroke:"#000",d:"M8 3h1M4 4h1m3 0h1M8 5h1M8 6h1M7 7h1M7 8h1m3 1h1m-1 1h1m-1 1h1M0 12h2m9 0h1M2 13h2m7 0h1m-8 1h2m3 0h2m-5 1h3"}),h.createElement("path",{stroke:"red",d:"M1 4h2M1 5h2M1 6h2M1 7h2M1 8h2M1 9h2m-2 1h2m-2 1h2m-1 1h3m-1 1h3m-1 1h1"}),h.createElement("path",{stroke:"#0f0",d:"M10 4h1m0 1h1M4 6h1m7 0h1M3 7h1m2 0h1M3 8h3M4 9h2"}),h.createElement("path",{stroke:"green",d:"M11 4h1M3 5h2m7 0h1M3 6h1m1 0h2m6 0h1M4 7h2m0 1h1M6 9h1"}),h.createElement("path",{stroke:"gray",d:"M14 4h1m-2 3h1m1 3h1"}),h.createElement("path",{stroke:"#00f",d:"M3 9h1m-1 1h3m-3 1h3m-1 1h1"}),h.createElement("path",{stroke:"teal",d:"M7 9h2m6 0h1M6 10h1m1 0h1m3 0h3m-8 1h2m-2 1h2m-2 1h1"}),h.createElement("path",{stroke:"#0ff",d:"M12 9h3m-9 2h1m-1 1h1"}))},mx={"32x32_4":hx,"16x16_4":dx},fx=function(t){var n=t.variant,r=n===void 0?"32x32_4":n,o=ux(t,sx),i=mx[r];return h.createElement(i,o)},px=["variant"];function gx(e,t){if(e==null)return{};var n=vx(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function vx(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Xi(){return Xi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xi.apply(this,arguments)}var yx=function(t){return h.createElement("svg",Xi({xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",shapeRendering:"crispEdges",viewBox:"0 -0.5 32 32"},t),h.createElement("path",{stroke:"#000",d:"M8 8h9M6 9h13M5 10h15M4 11h16M4 12h11m3 0h2M3 13h11m4 0h1M3 14h10m4 0h1M3 15h9m3 0h3M3 16h7m8 0h1M3 17h6m9 0h1M3 18h6m10 0h1M3 19h7m7 0h2M4 20h7m6 0h1M4 21h6m7 0h1M5 22h4m8 0h1M6 23h3m3 0h5M6 24h1m7 0h1m-1 1h1"}),h.createElement("path",{stroke:"#fff",d:"M15 12h2m-3 1h3m-4 1h4m-5 1h3m-5 1h5m1 0h1m-8 1h8m-8 1h8m-7 1h6m-5 1h5m-6 1h6m-7 1h2m-2 1h3m-5 1h6m-5 1h5m-3 1h3m-1 1h1"}),h.createElement("path",{stroke:"silver",d:"M17 12h1m-1 1h1m-1 3h1m-1 1h1m-1 1h2m-3 1h1m-1 1h1m-1 1h1m-6 1h6"}),h.createElement("path",{stroke:"#00f",d:"M15 16h1M6 26h2m-3 1h5m5 0h1m-9 1h5m2 0h2"}),h.createElement("path",{stroke:"gray",d:"M13 24h1m-1 1h1m-1 1h2m-2 1h1"}),h.createElement("path",{stroke:"navy",d:"M5 25h3m-3 1h1m2 0h2m5 0h1M4 27h1m5 0h2m2 0h1m1 0h1M4 28h3m5 0h2m2 0h2M7 29h9"}))},xx=function(t){return h.createElement("svg",Xi({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",shapeRendering:"crispEdges",viewBox:"0 -0.5 16 16"},t),h.createElement("path",{stroke:"#000",d:"M2 1h7M1 2h10M1 3h10M0 4h8m2 0h1M0 5h6m3 0h1M0 6h5m4 0h1M0 7h4m6 0h1M0 8h4m5 0h1M0 9h5m4 0h1m-9 1h3m5 0h1m-8 1h2m2 0h3m-7 1h1m4 0h1m-7 1h3m4 0h1m-9 1h1m3 0h2m1 0h1m1 0h1m-4 1h2"}),h.createElement("path",{stroke:"silver",d:"M8 4h1M7 5h1M6 6h1M5 7h1m1 0h1m1 0h1M4 8h1m1 0h1m1 0h1M5 9h1m1 0h1m-4 1h1m1 0h1m1 0h1m-4 1h1m-2 1h1m1 0h1m-2 1h1m1 0h1m-2 1h1"}),h.createElement("path",{stroke:"#fff",d:"M9 4h1M6 5h1m1 0h1M5 6h1m1 0h1M4 7h1m1 0h1m1 0h1M5 8h1m1 0h1M6 9h1m1 0h1m-4 1h1m1 0h1m-4 1h1m-2 1h1m1 0h1m-2 1h1m1 0h1"}),h.createElement("path",{stroke:"navy",d:"M8 6h1"}),h.createElement("path",{stroke:"#00f",d:"M1 14h3m4 0h1m-9 1h6m2 0h2"}))},wx={"32x32_4":yx,"16x16_4":xx},kx=function(t){var n=t.variant,r=n===void 0?"32x32_4":n,o=gx(t,px),i=wx[r];return h.createElement(i,o)},bx=["variant"];function Ex(e,t){if(e==null)return{};var n=Sx(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Sx(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Zi(){return Zi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Zi.apply(this,arguments)}var Mx=function(t){return h.createElement("svg",Zi({xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",shapeRendering:"crispEdges",viewBox:"0 -0.5 32 32"},t),h.createElement("path",{stroke:"#000",d:"M3 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h1m1 1h1M3 2h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m3 0h1m1 0h1M3 3h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m3 0h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m-1 1h1m-3 4h2m-3 1h2m-2 1h1m1 0h2m-4 1h5m3 0h1m-8 1h5m1 0h1m-6 1h5m-4 1h3m-2 1h2m-4 1h2m1 0h1m-5 1h1m1 0h1m1 0h1m-10 1h5m2 0h1m1 0h1m-13 1h2m8 0h1m1 0h1m-15 1h2m10 0h1m1 0h1m-17 1h2m12 0h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-4 1h1m1 0h1M3 31h23"}),h.createElement("path",{stroke:"gray",d:"M2 1h1m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h1M1 2h1m22 0h1M1 3h1m22 0h1M1 4h1M1 5h1M1 6h1M1 7h1M1 8h1M1 9h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m15 0h1M1 23h1m15 0h1M1 24h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m0 1h1"}),h.createElement("path",{stroke:"#fff",d:"M3 1h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1M2 2h1m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2M2 3h1m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2M2 4h22M2 5h22M2 6h22m6 1h1M2 8h22M2 9h22m4 0h1m-2 1h1M2 11h22M2 12h21m1 1h1M2 14h20m1 0h1M2 15h19m0 1h1M2 17h17m1 0h1m1 0h1M2 18h16m1 0h1m0 1h1M2 20h14m1 0h1m1 0h1M2 21h13m1 0h1m1 0h1m-3 1h1M2 23h11m1 0h1m3 0h6M2 24h10m3 0h9M2 26h22M2 27h22M2 29h22"}),h.createElement("path",{stroke:"silver",d:"M26 2h1m-1 1h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1M2 7h23m1 0h1m-3 1h1m-1 1h1M2 10h22M2 13h20M2 16h18m3 1h1m-2 1h1M2 19h15m4 0h1m-2 1h1m5 0h1m-8 1h1m4 0h1m1 0h1M2 22h12m9 0h2m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1M2 25h9m2 0h12m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1M2 28h23m1 0h1m-3 1h1m1 0h1M3 30h21m1 0h1"}),h.createElement("path",{stroke:"navy",d:"M30 4h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m5 0h1m-7 1h1m4 0h1m-2 1h1m-4 1h1m1 0h1m2 0h1m-5 1h1m2 0h2m-4 1h3m-2 1h1m-4 3h1"}),h.createElement("path",{stroke:"#00f",d:"M30 5h1m-2 1h2m-3 1h2m-3 1h2m1 0h1m-5 1h2m1 0h2m-6 1h2m1 0h2m-5 1h1m1 0h2m1 0h1m-6 1h3m1 0h2m-5 1h1m1 0h2m-3 1h2"}),h.createElement("path",{stroke:"#ff0",d:"M29 8h1m-4 3h1m-5 5h1m-2 1h1m-2 1h2m-4 1h2m-2 1h1m-2 1h1m-3 1h1"}),h.createElement("path",{stroke:"olive",d:"M21 15h1m-2 1h1m-2 1h1m-2 1h1m4 0h2m-8 1h1m4 0h3m-9 1h1m4 0h3m-9 1h1m4 0h3m-9 1h1m-2 1h1m-2 1h1"}))},Ax=function(t){return h.createElement("svg",Zi({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",shapeRendering:"crispEdges",viewBox:"0 -0.5 16 16"},t),h.createElement("path",{stroke:"#000",d:"M2 0h1m1 0h1m1 0h1m1 0h1m1 0h1M1 1h1m9 0h1M2 2h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m-1 1h1m-1 1h1m-1 1h1m-1 1h2m-2 1h3m-2 1h3m-2 1h1m-3 1h2m-6 1h5m-7 1h2m4 0h1m-1 1h1m-1 1h1M1 15h11"}),h.createElement("path",{stroke:"#fff",d:"M2 1h1m1 0h1m1 0h1m1 0h1m1 0h1M1 2h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M1 3h10M1 4h10m4 0h1m-2 1h1M1 6h10M1 7h10M1 9h8m2 0h1M1 10h7m2 0h1M1 12h5m2 0h3M1 13h10"}),h.createElement("path",{stroke:"gray",d:"M3 1h1m1 0h1m1 0h1m1 0h1M0 2h1M0 3h1M0 4h1M0 5h1M0 6h1M0 7h1M0 8h1M0 9h1m12 0h1M0 10h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1"}),h.createElement("path",{stroke:"navy",d:"M15 2h1m-2 1h1m-2 1h1m-1 1h1m1 1h1m-1 1h1"}),h.createElement("path",{stroke:"silver",d:"M11 3h1m-1 1h1M1 5h11m-1 1h1M1 8h9m-9 3h6m4 1h1m-1 1h1M1 14h11"}),h.createElement("path",{stroke:"#00f",d:"M15 3h1m-2 1h1m0 1h1m-2 1h1"}),h.createElement("path",{stroke:"olive",d:"M11 7h1m-2 1h1m1 0h1M9 9h1m2 0h1m-5 1h1m2 0h1m-5 1h1"}),h.createElement("path",{stroke:"#ff0",d:"M11 8h1m-2 1h1m-2 1h1"}))},_x={"32x32_4":Mx,"16x16_4":Ax},$x=function(t){var n=t.variant,r=n===void 0?"32x32_4":n,o=Ex(t,bx),i=_x[r];return h.createElement(i,o)};const Cx=k.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
  cursor: pointer;
  color: white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  user-select: none;
  width: 120px;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  &:active {
    background: rgba(255, 255, 255, 0.2);
  }
`,Tx=k.span`
  margin-top: 8px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
`,Ix=({icon:e,onClick:t})=>{const n=e.Icon;return A.jsxs(Cx,{onClick:t,title:e.label,children:[A.jsx(n,{variant:"32x32_4",style:{width:48,height:48}}),A.jsx(Tx,{children:e.label})]})},Px=[{id:"che-entende",title:"Breaking Communication Barriers",project:"Che-Entende",content:`Imagine a world where technology bridges the gap between silence and sound. 
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

    <img src="/portfolio/blog-media/premiacion.jpg" alt="Award Ceremony" style="width:100%;margin:1rem 0;"/>`},{id:"smells-fishy",title:"Securing the Digital Frontier",project:"Smells Fishy",content:`Phishing remains an evolving challenge in cybersecurity, one that's particularly 
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

    While the platform successfully demonstrates the core auction functionality, future 
    implementation plans include integrating a payment gateway. This feature is currently 
    pending due to the strict requirements and regulations that payment processors have 
    for auction platforms in Bolivia.`}],Lx=k(yu)`
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
`,Rr=k(vu)`
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
`,Dr=({children:e,style:t})=>{const[n,r]=v.useState({}),[o,i]=v.useState(!1),[l,a]=v.useState({x:0,y:0}),s=v.useRef(null),u=g=>{var w;if(!g.target.closest(".window-header"))return;const y=(w=s.current)==null?void 0:w.getBoundingClientRect();y&&(i(!0),a({x:g.clientX-(n.x||y.left),y:g.clientY-(n.y||y.top)}))},p=g=>{if(!o)return;const y=g.clientX-l.x,w=g.clientY-l.y;r({x:y,y:w})},d=()=>{i(!1)};return A.jsx(Lx,{ref:s,style:t,$isDragging:o,$x:n.x,$y:n.y,onMouseDown:u,onMouseMove:p,onMouseUp:d,onMouseLeave:()=>o&&i(!1),children:e})},e1=k(sr)`
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
`,Zo=k(bl)`
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
`;k.div`
  padding: 1rem;
`;k.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;k(sr)`
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
`;const Rx=k.button`
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
`,Dx=k.div`
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
`,ra=k.span`
  color: #00ff00;
`,t1=k.span`
  color: #ffff00;
`,n1=k.div`
  color: #00ff00;
  margin-left: 16px;
  margin-top: 4px;
`,jx=k.div`
  padding: 2px 4px;
  color: ${e=>e.$color};
  margin-bottom: 4px;
`,oa=[{command:'echo "Welcome to my skills terminal!"',output:"Loading skills database..."},{command:"dir /Languages",output:[{text:"Python",color:"#ffd43b"},{text:"C#",color:"#9b4f96"},{text:"JavaScript",color:"#f7df1e"}]},{command:"dir /Frameworks",output:[{text:"React",color:"#61dafb"},{text:"Django",color:"#44B78B"},{text:".NET",color:"#512bd4"},{text:"Bootstrap",color:"#7952b3"}]},{command:"dir /Tools",output:[{text:"Git",color:"#f05032"},{text:"Linux",color:"#fcc624"},{text:"PostgreSQL",color:"#336791"}]}],Ox=()=>{const[e,t]=v.useState([]),[n,r]=v.useState({index:-1,text:""}),o=v.useRef(null);return h.useEffect(()=>{let i=0,l=0,a;const s=()=>{if(i>=oa.length){clearInterval(a);return}const u=oa[i].command;l===0&&t(p=>[...p,i]),l<u.length?(r({index:i,text:u.substring(0,l+1)}),l++):(r({index:-1,text:""}),l=0,i++,o.current&&(o.current.scrollTop=o.current.scrollHeight),clearInterval(a),setTimeout(()=>{a=setInterval(s,50)},500))};return a=setInterval(s,50),()=>clearInterval(a)},[]),A.jsxs(Dx,{ref:o,children:[A.jsx(Jo,{$visible:!0,children:A.jsx(ra,{children:"Microsoft Windows [Version 10.0.19045.3803]"})}),A.jsx(Jo,{$visible:!0,children:A.jsx(ra,{children:"(c) Agustin P. All rights reserved."})}),oa.map((i,l)=>A.jsxs(h.Fragment,{children:[A.jsxs(Jo,{$visible:e.includes(l),children:[A.jsx(ra,{children:"C:\\Skills>"}),n.index===l?A.jsx(t1,{children:n.text}):A.jsx(t1,{children:e.includes(l)?i.command:""})]}),A.jsx(Jo,{$visible:e.includes(l)&&n.index!==l,children:Array.isArray(i.output)?A.jsx(n1,{children:i.output.map((a,s)=>A.jsx(jx,{$color:a.color,children:a.text},s))}):A.jsx(n1,{children:i.output})})]},l))]})},Nx=({openWindows:e,toggleWindow:t,skills:n,projects:r,isStartOpen:o})=>{const[i,l]=h.useState(null),[a,s]=v.useState(!0),u=()=>{s(!a)};return h.useEffect(()=>{const p=Object.entries(e).filter(([d,g])=>g).map(([d])=>d);p.length>1&&p.forEach(d=>{d!==p[p.length-1]&&t(d)})},[e,t]),A.jsxs(A.Fragment,{children:[e.about&&A.jsxs(Dr,{children:[A.jsxs(Rr,{className:"window-header",children:[A.jsx("span",{children:"About Me.txt"}),A.jsx(Ze,{onClick:()=>t("about"),children:A.jsx("span",{children:"×"})})]}),A.jsx(Zo,{children:A.jsxs(sr,{variant:"field",className:"field",style:{padding:"1.5rem",marginBottom:"1rem"},children:[A.jsx("h2",{style:{fontSize:"1.8rem",fontWeight:"bold",marginBottom:"1rem",color:"#000080"},children:"Hi, I am Agustín"}),A.jsx("p",{style:{marginTop:"1rem",fontSize:"1.4rem",fontWeight:"bold",color:"#000080",borderBottom:"2px solid #000080",paddingBottom:"0.5rem",marginBottom:"1rem"},children:"Software Engineer"}),A.jsx("p",{style:{marginTop:"1rem"},children:"Hello and welcome to my portfolio! I find myself deeply passionate about technology and the open-source community."}),A.jsx("p",{style:{marginTop:"1rem"},children:"I'm fascinated by the innate creative potential we all have, and even more inspired by how we, as software engineers, can develop technologies that advance and benefit humanity for the better."})]})})]}),e.projects&&A.jsxs(Dr,{style:{width:"500px"},children:[A.jsxs(Rr,{className:"window-header",children:[A.jsx("span",{children:"Projects.exe"}),A.jsx(Ze,{onClick:()=>t("projects"),children:A.jsx("span",{children:"×"})})]}),A.jsx(Zo,{children:r.map((p,d)=>A.jsxs(sr,{variant:"field",style:{padding:"1rem",marginBottom:"1rem"},children:[A.jsx("h3",{style:{marginBottom:"0.5rem",color:"#000080",borderBottom:"2px solid #000080",paddingBottom:"0.25rem"},children:p.name}),A.jsx("p",{style:{marginBottom:"1rem"},children:p.description}),A.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.5rem"},children:p.technologies.map((g,y)=>{let w="primary";return["Python","Django","Flask"].includes(g)?w="info":["TensorFlow","Scikit-learn","Pandas","NumPy","Matplotlib"].includes(g)?w="danger":["JavaScript","React","Node.js"].includes(g)?w="warning":["Bootstrap","CSS","HTML"].includes(g)?w="success":["OpenCV","Mediapipe"].includes(g)?w="secondary":["Amazon Rekognition","REST API","AWS"].includes(g)&&(w="tertiary"),A.jsx(Rx,{$variant:w,children:g},y)})})]},d))})]}),e.skills&&A.jsxs(Dr,{style:{width:"800px",height:"600px",maxWidth:"95vw",maxHeight:"90vh",margin:"auto"},children:[A.jsxs(Rr,{className:"window-header",children:[A.jsx("span",{children:"Skills.cmd"}),A.jsx(Ze,{onClick:()=>t("skills"),children:A.jsx("span",{children:"×"})})]}),A.jsx(bl,{style:{padding:0,margin:0,height:"calc(100% - 33px)",overflow:"hidden"},children:A.jsx(Ox,{})})]}),e.contact&&A.jsxs(Dr,{children:[A.jsxs(Rr,{className:"window-header",children:[A.jsx("span",{children:"Contact.exe"}),A.jsx(Ze,{onClick:()=>t("contact"),children:A.jsx("span",{children:"×"})})]}),A.jsx(Zo,{children:A.jsxs(sr,{variant:"field",style:{padding:"1rem"},children:[A.jsxs("div",{style:{marginBottom:"1rem",display:"flex",alignItems:"center",gap:"0.5rem"},children:[A.jsx(vm,{variant:"32x32_4"}),A.jsxs("p",{children:["Email: ",A.jsx("a",{href:"mailto:agustin.swe@gmail.com",children:"agustin.swe@gmail.com"})]})]}),A.jsxs("div",{style:{marginBottom:"1rem",display:"flex",alignItems:"center",gap:"0.5rem"},children:[A.jsx(ax,{variant:"32x32_4"}),A.jsxs("p",{children:["LinkedIn: ",A.jsx("a",{href:"https://www.linkedin.com/in/agustin-p-3b544432a",target:"_blank",rel:"noopener noreferrer",children:"www.linkedin.com/in/agustin-p-3b544432a"})]})]})]})})]}),e.blog&&A.jsxs(Dr,{style:{width:"800px",height:"600px"},children:[A.jsxs(Rr,{className:"window-header",children:[A.jsx("span",{children:"Blog.exe"}),A.jsx(Ze,{onClick:()=>t("blog"),children:A.jsx("span",{children:"×"})})]}),A.jsx(Zo,{style:{height:"calc(100% - 33px)",overflow:"hidden"},children:A.jsxs("div",{style:{display:"flex",height:"100%",gap:"1rem"},children:[a&&A.jsx(e1,{variant:"field",style:{width:"200px",padding:"1rem",overflowY:"auto"},children:Px.map(p=>A.jsx(Ze,{onClick:()=>l(p),style:{width:"100%",marginBottom:"0.5rem",textAlign:"left",padding:"0.5rem"},children:p.project},p.id))}),A.jsxs(e1,{variant:"field",style:{flex:1,padding:"1.5rem",overflowY:"auto",position:"relative"},children:[A.jsx("div",{style:{position:"absolute",top:"1rem",right:"1rem",cursor:"pointer",opacity:.6,fontSize:"1.2rem"},onClick:u,children:a?"◀":"▶"}),i?A.jsxs(A.Fragment,{children:[A.jsx("h2",{style:{fontSize:"1.5rem",color:"#000080",marginBottom:"1rem",borderBottom:"2px solid #000080",paddingBottom:"0.5rem"},children:i.title}),A.jsx("p",{style:{whiteSpace:"normal",lineHeight:"1.6",textAlign:"justify",margin:"0 1rem"},dangerouslySetInnerHTML:{__html:i.content}})]}):A.jsx("p",{children:"Select a project from the left to read its story."})]})]})})]}),o&&A.jsx(qc,{style:{position:"absolute",left:"0",bottom:"100%",width:"200px"},children:A.jsx(qc.Item,{icon:A.jsx(Wy,{variant:"16x16_4"}),onClick:()=>window.location.reload(),children:"Restart..."})})]})},ym=[{id:"about",label:"About Me",Icon:kx},{id:"projects",label:"Projects",Icon:Yy},{id:"skills",label:"Skills",Icon:fx},{id:"contact",label:"Contact",Icon:vm},{id:"blog",label:"Blog",Icon:$x}],zx=k(Ze)`
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
`,Bx=({label:e,isActive:t,onClick:n,windowId:r})=>{const o=ym.find(l=>l.id===r),i=o==null?void 0:o.Icon;return A.jsx(zx,{active:t,onClick:n,children:A.jsxs("div",{children:[i&&A.jsx(i,{variant:"16x16_4"}),A.jsx("span",{children:e})]})})},Fx=[{name:"Python",category:"languages"},{name:"C#",category:"languages"},{name:"JavaScript",category:"languages"},{name:"Bootstrap",category:"frameworks & libraries"},{name:"PostgreSQL",category:"tools"},{name:"React",category:"frameworks & libraries"},{name:"Django",category:"frameworks & libraries"},{name:".NET",category:"frameworks & libraries"},{name:"Git",category:"tools"},{name:"Linux",category:"tools"}],Wx=[{name:"Che-Entende",description:"A real-time Bolivian Sign Language translation system using LSTM.",technologies:["Python","TensorFlow","OpenCV","Mediapipe","Matplotlib"]},{name:"Smells Fishy",description:"A URL phishing detection system utilizing machine learning algorithms for classification.",technologies:["Django","Python","Scikit-learn","Pandas","NumPy"]},{name:"Fierros & Bids",description:"A full-stack auction system for automobiles featuring AWS object recognition for automation.",technologies:["Bootstrap","JavaScript","Django","Amazon Rekognition","REST API"]}],Ux=k.div`
  padding: 0 16px;
  height: 100%;
  display: flex;
  align-items: center;
  border-left: 2px solid #888;
`,Hx=()=>{const[e,t]=v.useState(new Date);return v.useEffect(()=>{const n=setInterval(()=>{t(new Date)},1e3);return()=>clearInterval(n)},[]),A.jsx(Ux,{children:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})})},Qx=k.div`
  height: 100vh;
  background: ${({theme:e})=>e.desktopBackground};
  position: relative;
  overflow: hidden;
  background-image: url('/portfolio/imagen.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`,Vx=k.div`
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
`,Gx=k.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`,Kx=k.div`
  display: flex;
  flex: 1;
  margin: 0 4px;
  overflow-x: auto;
  
  &::-webkit-scrollbar {
    display: none;
  }
`,Yx=()=>{const[e,t]=v.useState({about:!0,projects:!1,skills:!1,contact:!1,blog:!1}),[n,r]=v.useState(!1),o=a=>{t(s=>s[a]?{...s,[a]:!1}:{...Object.keys(s).reduce((p,d)=>({...p,[d]:!1}),{}),[a]:!0}),r(!1)},i=()=>{r(!n)},l=a=>{switch(a){case"about":return"About Me";case"projects":return"Projects";case"skills":return"Skills";case"contact":return"Contact";case"blog":return"Blog";default:return a}};return A.jsxs(Qx,{children:[A.jsx(Vx,{children:ym.map(a=>A.jsx(Ix,{icon:a,onClick:()=>o(a.id)},a.id))}),A.jsx(Nx,{openWindows:e,toggleWindow:o,skills:Fx,projects:Wx,isStartOpen:n}),A.jsx(Gx,{children:A.jsx(Kd,{style:{position:"relative"},children:A.jsxs(Qi,{style:{justifyContent:"space-between",position:"relative"},children:[A.jsxs("div",{style:{display:"flex",alignItems:"center",flex:1},children:[A.jsxs(Ze,{onClick:i,active:n,style:{fontWeight:"bold"},children:[A.jsx("img",{src:"https://win98icons.alexmeub.com/icons/png/windows-0.png",alt:"windows-logo",style:{marginRight:4,width:20,height:20}}),"Start"]}),A.jsx(Kx,{children:Object.entries(e).filter(([a,s])=>s).map(([a])=>A.jsx(Bx,{label:l(a),isActive:e[a],onClick:()=>o(a),windowId:a},a))}),n&&A.jsx(mu,{style:{position:"absolute",left:"0",bottom:"100%"},children:A.jsxs(Yd,{onClick:()=>window.location.reload(),children:[A.jsx("img",{src:"https://win98icons.alexmeub.com/icons/png/shut_down_normal-4.png",alt:"shutdown",style:{marginRight:8,width:20,height:20}}),"Restart"]})})]}),A.jsx(Hx,{})]})})})]})},Xx="modulepreload",Zx=function(e){return"/portfolio/"+e},r1={},bt=function(t,n,r){let o=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),a=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));o=Promise.allSettled(n.map(s=>{if(s=Zx(s),s in r1)return;r1[s]=!0;const u=s.endsWith(".css"),p=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${p}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":Xx,u||(d.as="script"),d.crossOrigin="",d.href=s,a&&d.setAttribute("nonce",a),document.head.appendChild(d),u)return new Promise((g,y)=>{d.addEventListener("load",g),d.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${s}`)))})}))}function i(l){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=l,window.dispatchEvent(a),!a.defaultPrevented)throw l}return o.then(l=>{for(const a of l||[])a.status==="rejected"&&i(a.reason);return t().catch(i)})},xm={BONZI:"Bonzi",CLIPPY:"Clippy",F1:"F1",GENIE:"Genie",GENIUS:"Genius",LINKS:"Links",MERLIN:"Merlin",PEEDY:"Peedy",ROCKY:"Rocky",ROVER:"Rover"};function Jx(e){switch(e){case"./agents/Bonzi.js":return bt(()=>import("./Bonzi-HfDDQJRW-DD2Qj5OP.js"),[]);case"./agents/Clippy.js":return bt(()=>import("./Clippy-B4VEFjzh-BJkhDu0o.js"),[]);case"./agents/F1.js":return bt(()=>import("./F1-Cqq3yhCS-Cg7V-M2e.js"),[]);case"./agents/Genie.js":return bt(()=>import("./Genie-Dbln_hPv-B6211V7d.js"),[]);case"./agents/Genius.js":return bt(()=>import("./Genius-BxD5MS4q-CzQkrRYh.js"),[]);case"./agents/Links.js":return bt(()=>import("./Links-D5NViJfS-C6ZBi7ll.js"),[]);case"./agents/Merlin.js":return bt(()=>import("./Merlin-CJslj-y0-x1z2BeFC.js"),[]);case"./agents/Peedy.js":return bt(()=>import("./Peedy-ChzvDyrV-B-Dc9HWJ.js"),[]);case"./agents/Rocky.js":return bt(()=>import("./Rocky-hb9BA-ri-BuAKmDHe.js"),[]);case"./agents/Rover.js":return bt(()=>import("./Rover-Cjo-aaVE-D_mHJg_X.js"),[]);default:return new Promise(function(t,n){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(n.bind(null,new Error("Unknown variable dynamic import: "+e)))})}}var Wr=function(e){this._queue=[],this._onEmptyCallback=e};Wr.prototype.queue=function(e){this._queue.push(e),this._queue.length!==1||this._active||this._progressQueue()},Wr.prototype._progressQueue=function(){if(this._queue.length){var e=this._queue.shift();this._active=!0;var t=this.next.bind(this);e&&e(t)}else this._onEmptyCallback()},Wr.prototype.clear=function(){this._queue=[]},Wr.prototype.next=function(){this._active=!1,this._progressQueue()};var ge=function(e,t,n){this._el=e,this._data=t.config,this._path=t.image,this._currentFrameIndex=0,this._currentFrame=void 0,this._exiting=!1,this._currentAnimation=void 0,this._endCallback=void 0,this._started=!1,this._sounds={},this.currentAnimationName=void 0,this.preloadSounds(n),this._overlays=[this._el];var r=this._el;this._setupElement(this._el);for(var o=1;o<this._data.overlayCount;o++){var i=document.createElement("div"),l=this._setupElement(i);r.append(l),this._overlays.push(l),r=l}};ge.prototype._setupElement=function(e){var t=this._data.framesize;return e.style.display="none",e.style.width=t[0]+"px",e.style.height=t[1]+"px",e.style.background="url('"+this._path+"') no-repeat",e},ge.prototype.animations=function(){var e=[],t=this._data.animations;for(var n in t)e.push(n);return e},ge.prototype.preloadSounds=function(e){},ge.prototype.hasAnimation=function(e){return!!this._data.animations[e]},ge.prototype.exitAnimation=function(){this._exiting=!0},ge.prototype.showAnimation=function(e,t){return this._exiting=!1,!!this.hasAnimation(e)&&(this._currentAnimation=this._data.animations[e],this.currentAnimationName=e,this._started||(this._step(),this._started=!0),this._currentFrameIndex=0,this._currentFrame=void 0,this._endCallback=t,!0)},ge.prototype._draw=function(){var e=[];this._currentFrame&&(e=this._currentFrame.images||[]);for(var t=0;t<this._overlays.length;t++)if(t<e.length){var n=e[t],r=-n[0]+"px "+-n[1]+"px";this._overlays[t].style.backgroundPosition=r,this._overlays[t].style.display="block"}else this._overlays[t].style.display="none"},ge.prototype._getNextAnimationFrame=function(){if(!this._currentAnimation||!this._currentFrame)return 0;var e=this._currentFrame,t=this._currentFrame.branching;if(this._exiting&&e.exitBranch!==void 0)return e.exitBranch;if(t)for(var n=100*Math.random(),r=0;r<t.branches.length;r++){var o=t.branches[r];if(n<=o.weight)return o.frameIndex;n-=o.weight}return this._currentFrameIndex+1},ge.prototype._playSound=function(){var e,t=(e=this._currentFrame)===null||e===void 0?void 0:e.sound;if(t){var n=this._sounds[t];n&&n.play()}},ge.prototype._atLastFrame=function(){return!!this._currentAnimation&&this._currentFrameIndex>=this._currentAnimation.frames.length-1},ge.prototype._step=function(){if(this._currentAnimation){var e=Math.min(this._getNextAnimationFrame(),this._currentAnimation.frames.length-1),t=!this._currentFrame||this._currentFrameIndex!==e;this._currentFrameIndex=e,this._atLastFrame()&&this._currentAnimation.useExitBranching||(this._currentFrame=this._currentAnimation.frames[this._currentFrameIndex]),this._draw(),this._playSound(),this._loop=window.setTimeout(this._step.bind(this),this._currentFrame.duration),this._endCallback&&t&&this._atLastFrame()&&(this._currentAnimation.useExitBranching&&!this._exiting?this._endCallback(this.currentAnimationName,ge.States.WAITING):this._endCallback(this.currentAnimationName,ge.States.EXITED))}},ge.prototype.pause=function(){window.clearTimeout(this._loop)},ge.prototype.resume=function(){this._step()},ge.States={WAITING:1,EXITED:0};var Ji=function(){var e=window.pageXOffset!==void 0,t=(document.compatMode||"")==="CSS1Compat";return{scrollLeft:e?window.pageXOffset:t?document.documentElement.scrollLeft:document.body.scrollLeft,scrollTop:e?window.pageYOffset:t?document.documentElement.scrollTop:document.body.scrollTop}};function qr(e){if(!e.getClientRects().length)return{top:0,left:0};var t=e.getBoundingClientRect(),n=e.ownerDocument.defaultView||{pageXOffset:0,pageYOffset:0};return{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}}function eo(e,t){if(t==="inner")return e.clientWidth;if(t==="outer")return e.offsetWidth;var n=window.getComputedStyle(e,null);return t==="width"?e.clientWidth-parseInt(n.getPropertyValue("padding-left"))-parseInt(n.getPropertyValue("padding-right")):t==="full"?e.offsetWidth+parseInt(n.getPropertyValue("margin-left"))+parseInt(n.getPropertyValue("margin-right")):null}function to(e,t){if(t==="inner")return e.clientHeight;if(t==="outer")return e.offsetHeight;var n=window.getComputedStyle(e,null);return t==="height"?e.clientHeight-parseInt(n.getPropertyValue("padding-top"))-parseInt(n.getPropertyValue("padding-bottom")):t==="full"?e.offsetHeight+parseInt(n.getPropertyValue("margin-top"))+parseInt(n.getPropertyValue("margin-bottom")):null}var qx=function(){var e=this;this.promise=new Promise(function(t,n){e.resolve=t,e.reject=n})},Ke=function(e){this._hiding=null,this._loop=null,this._active=!0,this._hold=!1,this._addWord=null,this._targetEl=e,this._hidden=!0,this._setup()};Ke.prototype._setup=function(){var e=document.createElement("div");e.className="clippy-balloon",e.setAttribute("hidden","true");var t=document.createElement("div");t.className="clippy-tip";var n=document.createElement("div");n.className="clippy-content",e.appendChild(t),e.appendChild(n),this._balloon=e,this._content=n,this._targetEl.insertAdjacentElement("afterend",e)},Ke.prototype.reposition=function(){for(var e=["top-left","top-right","bottom-left","bottom-right"],t=0;t<e.length;t++){var n=e[t];if(this._position(n),!this._isOut())break}},Ke.prototype._position=function(e){if(this._balloon){var t=qr(this._targetEl),n=to(this._targetEl,"height"),r=eo(this._targetEl,"width"),o=Ji(),i=o.scrollLeft,l=o.scrollTop;t.top-=i,t.left-=l;var a=to(this._balloon,"outer"),s=eo(this._balloon,"outer");this._balloon.classList.remove("clippy-top-left"),this._balloon.classList.remove("clippy-top-right"),this._balloon.classList.remove("clippy-bottom-right"),this._balloon.classList.remove("clippy-bottom-left");var u=0,p=0;switch(e){case"top-left":u=t.left+r-s,p=t.top-a-15;break;case"top-right":u=t.left,p=t.top-a-15;break;case"bottom-right":u=t.left,p=t.top+n+15;break;case"bottom-left":u=t.left+r-s,p=t.top+n+15}this._balloon.style.top=p+"px",this._balloon.style.left=u+"px",this._balloon.classList.add("clippy-"+e)}},Ke.prototype._isOut=function(){if(this._balloon){var e=qr(this._balloon),t=to(this._balloon,"outer"),n=eo(this._balloon,"outer"),r=document.querySelector("html").clientWidth,o=document.querySelector("html").clientHeight,i=Ji(),l=i.scrollLeft,a=i.scrollTop,s=e.top-l,u=e.left-a;return s-5<0||u-5<0||s+t+5>o||u+n+5>r}},Ke.prototype.speak=function(e,t,n){this._hidden=!1,this.show();var r=this._content;r&&(r.style.height="auto",r.style.width="auto",r.innerHTML=t,r.style.height=r.style.height||"",r.style.width=r.style.width||"",r.innerHTML="",this.reposition(),this._complete=e,this._sayWords(t,n,e))},Ke.prototype.show=function(){this._balloon&&(this._hidden||this._balloon.removeAttribute("hidden"))},Ke.prototype.hide=function(e){var t;e?(t=this._balloon)===null||t===void 0||t.setAttribute("hidden","true"):this._hiding=window.setTimeout(this._finishHideBalloon.bind(this),2e3)},Ke.prototype._finishHideBalloon=function(){var e;this._active||((e=this._balloon)===null||e===void 0||e.setAttribute("hidden","true"),this._hidden=!0,this._hiding=null)},Ke.prototype._sayWords=function(e,t,n){var r=this;this._active=!0,this._hold=t;var o=e.split(/[^\S-]/),i=this._content,l=1;this._addWord=function(){var a;r._active&&(l>o.length?(r._addWord=null,r._active=!1,r._hold||(n(),r.hide(!1))):(i&&(i.innerHTML=o.slice(0,l).join(" ")),l++,r._loop=window.setTimeout((a=r._addWord)===null||a===void 0?void 0:a.bind(r),200)))},this._addWord()},Ke.prototype.close=function(){this._active?this._hold=!1:this._hold&&this._complete&&this._complete()},Ke.prototype.pause=function(){this._loop&&window.clearTimeout(this._loop),this._hiding&&(window.clearTimeout(this._hiding),this._hiding=null)},Ke.prototype.resume=function(){this._addWord?this._addWord():this._hold||this._hidden||(this._hiding=window.setTimeout(this._finishHideBalloon.bind(this),2e3))};var Z=function(e){this._hidden=!1,this._offset={top:0,left:0};var t=e.agent,n=e.selector;this._queue=new Wr(this._onQueueEmpty.bind(this));var r=document.createElement("div");r.className="clippy",r.setAttribute("hidden","true"),this._el=r,((n?document.getElementsByClassName(n)[0]:void 0)||document.body).appendChild(this._el),this._animator=new ge(this._el,t,[]),this._balloon=new Ke(this._el),this._setupEvents()};function Et(e){return new Promise(function(t,n){Jx("./agents/"+e+".js").then(function(r){t(r.default)}).catch(function(r){n(r)})})}Z.prototype.gestureAt=function(e,t){var n=this._getDirection(e,t),r="Gesture"+n,o="Look"+n,i=this.hasAnimation(r)?r:o;return this.play(i)},Z.prototype.hide=function(e,t){var n=this;return this._hidden=!0,this._el,this.stop(),e?(this._el.setAttribute("hidden","true"),this.stop(),this.pause(),void(t&&t())):this._playInternal("Hide",function(){n._el.setAttribute("hidden","true"),n.pause(),t&&t()})},Z.prototype.moveTo=function(e,t,n){var r=this,o="Move"+this._getDirection(e,t);n===void 0&&(n=1e3),this._addToQueue(function(i){if(n===0)return r._el.style.top=t+"px",r._el.style.left=e+"px",r.reposition(),void i();if(!r.hasAnimation(o)){var l=function(){r._el.removeEventListener("animationend",l),i()};return r._el.addEventListener("animationend",l),void r._el.animate({top:t,left:e},{duration:n,iterations:1})}r._playInternal(o,function(a,s){if(s===ge.States.EXITED&&i(),s===ge.States.WAITING){var u=function(){r._el.removeEventListener("animationend",u),r._animator.exitAnimation()};r._el.addEventListener("animationend",u),r._el.animate({top:t,left:e},{duration:n,iterations:1})}})},this)},Z.prototype._playInternal=function(e,t){var n=this;this._isIdleAnimation()&&this._idleDfd&&this._idleDfd.promise.finally(function(){n._playInternal(e,t)}),this._animator.showAnimation(e,t)},Z.prototype.play=function(e,t,n){var r=this;return!!this.hasAnimation(e)&&(t===void 0&&(t=5e3),this._addToQueue(function(o){var i=!1;t&&window.setTimeout(function(){i||r._animator.exitAnimation()},t),r._playInternal(e,function(l,a){a===ge.States.EXITED&&(i=!0,n&&n(),o())})},this),!0)},Z.prototype.show=function(e){if(this._hidden=!1,e)return this._el.removeAttribute("hidden"),this.resume(),void this._onQueueEmpty();var t=this._el.style.top,n=this._el.style.left;if(t==="auto"||n!=="auto"){var r=.8*document.querySelector("html").clientWidth,o=.8*(document.querySelector("html").clientHeight+Ji().scrollLeft);this._el.style.top=o+"px",this._el.style.left=r+"px"}return this.resume(),this.play("Show")},Z.prototype.speak=function(e,t){var n=this;this._addToQueue(function(r){n._balloon.speak(r,e,t)},this)},Z.prototype.closeBalloon=function(){this._balloon.hide()},Z.prototype.delay=function(e){var t=this;e=e||250,this._addToQueue(function(n){t._onQueueEmpty(),window.setTimeout(n,e)})},Z.prototype.stopCurrent=function(){this._animator.exitAnimation(),this._balloon.close()},Z.prototype.stop=function(){this._queue.clear(),this._animator.exitAnimation(),this._balloon.hide()},Z.prototype.hasAnimation=function(e){return this._animator.hasAnimation(e)},Z.prototype.animations=function(){return this._animator.animations()},Z.prototype.animate=function(){var e=this.animations(),t=e[Math.floor(Math.random()*e.length)];return t.indexOf("Idle")===0?this.animate():this.play(t)},Z.prototype._getDirection=function(e,t){var n=qr(this._el),r=to(this._el,"height"),o=eo(this._el,"width"),i=n.left+o/2,l=n.top+r/2-t,a=i-e,s=Math.round(180*Math.atan2(l,a)/Math.PI);return-45<=s&&s<45?"Right":45<=s&&s<135?"Up":135<=s&&s<=180||-180<=s&&s<-135?"Left":-135<=s&&s<-45?"Down":"Top"},Z.prototype._onQueueEmpty=function(){if(!this._hidden&&!this._isIdleAnimation()){var e=this._getIdleAnimation();this._idleDfd=new qx,this._animator.showAnimation(e,this._onIdleComplete.bind(this))}},Z.prototype._onIdleComplete=function(e,t){var n;t===ge.States.EXITED&&((n=this._idleDfd)===null||n===void 0||n.resolve(void 0))},Z.prototype._isIdleAnimation=function(){var e=this._animator.currentAnimationName;return e&&e.indexOf("Idle")===0},Z.prototype._getIdleAnimation=function(){for(var e=this.animations(),t=[],n=0;n<e.length;n++){var r=e[n];r.indexOf("Idle")===0&&t.push(r)}return t[Math.floor(Math.random()*t.length)]},Z.prototype._setupEvents=function(){window.addEventListener("resize",this.reposition.bind(this)),this._el.addEventListener("mousedown",this._onMouseDown.bind(this)),this._el.addEventListener("dblclick",this._onDoubleClick.bind(this))},Z.prototype._onDoubleClick=function(){this.play("ClickedOn")||this.animate()},Z.prototype.reposition=function(){if(this._el.getAttribute("hidden")==="true"){var e=qr(this._el),t=to(this._el,"outer"),n=eo(this._el,"outer"),r=document.querySelector("html").clientWidth,o=document.querySelector("html").clientHeight,i=Ji(),l=i.scrollLeft,a=i.scrollTop,s=e.top-l,u=e.left-a;s-5<0?s=5:s+t+5>o&&(s=o-t-5),u-5<0?u=5:u+n+5>r&&(u=r-n-5),this._el.style.left=u+"px",this._el.style.top=s+"px",this._balloon.reposition()}},Z.prototype._onMouseDown=function(e){e.preventDefault(),this._startDrag(e)},Z.prototype._startDrag=function(e){this.pause(),this._balloon.hide(!0),this._offset=this._calculateClickOffset(e),this._moveHandle=this._dragMove.bind(this),this._upHandle=this._finishDrag.bind(this),window.addEventListener("mousemove",this._moveHandle),window.addEventListener("mouseup",this._upHandle),this._dragUpdateLoop=window.setTimeout(this._updateLocation.bind(this),10)},Z.prototype._calculateClickOffset=function(e){var t=e.pageX,n=e.pageY,r=qr(this._el);return{top:n-r.top,left:t-r.left}},Z.prototype._updateLocation=function(){this._el.style.top=(this._targetY||0)+"px",this._el.style.left=(this._targetX||0)+"px",this._dragUpdateLoop=window.setTimeout(this._updateLocation.bind(this),10)},Z.prototype._dragMove=function(e){e.preventDefault();var t=e.clientX-this._offset.left,n=e.clientY-this._offset.top;this._targetX=t,this._targetY=n},Z.prototype._finishDrag=function(){window.clearTimeout(this._dragUpdateLoop),this._moveHandle&&window.removeEventListener("mousemove",this._moveHandle),this._upHandle&&window.removeEventListener("mouseup",this._upHandle),this._balloon.show(),this.reposition(),this.resume()},Z.prototype._addToQueue=function(e,t){t&&(e=e.bind(t)),this._queue.queue(e)},Z.prototype.pause=function(){this._animator.pause(),this._balloon.pause()},Z.prototype.resume=function(){this._animator.resume(),this._balloon.resume()};var e2={Bonzi:function(){return Et("Bonzi")},Clippy:function(){return Et("Clippy")},F1:function(){return Et("F1")},Genie:function(){return Et("Genie")},Genius:function(){return Et("Genius")},Links:function(){return Et("Links")},Merlin:function(){return Et("Merlin")},Peedy:function(){return Et("Peedy")},Rocky:function(){return Et("Rocky")},Rover:function(){return Et("Rover")}},o1=[],jr=[];(function(e,t){if(e&&typeof document<"u"){var n,r=t.prepend===!0?"prepend":"append",o=t.singleTag===!0,i=typeof t.container=="string"?document.querySelector(t.container):document.getElementsByTagName("head")[0];if(o){var l=o1.indexOf(i);l===-1&&(l=o1.push(i)-1,jr[l]={}),n=jr[l]&&jr[l][r]?jr[l][r]:jr[l][r]=a()}else n=a();e.charCodeAt(0)===65279&&(e=e.substring(1)),n.styleSheet?n.styleSheet.cssText+=e:n.appendChild(document.createTextNode(e))}function a(){var s=document.createElement("style");if(s.setAttribute("type","text/css"),t.attributes)for(var u=Object.keys(t.attributes),p=0;p<u.length;p++)s.setAttribute(u[p],t.attributes[u[p]]);var d=r==="prepend"?"afterbegin":"beforeend";return i.insertAdjacentElement(d,s),s}})(`.clippy, .clippy-balloon {
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

`,{});var t2={load:function(e){var t=e||{},n=t.name,r=t.successCb,o=t.failCb,i=t.selector;e2[n]().then(function(l){var a=new Z({agent:l,selector:i});r&&r(a)}).catch(function(l){o&&o(l)})},agents:{}};const n2=`
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
`,r2=n2.trim(),wm=v.createContext({clippy:void 0});let i1;const o2=({children:e,agentName:t=xm.CLIPPY})=>{const[n,r]=v.useState();function o(i,l){i==null||i.hide(!1,()=>{l&&l()})}return v.useEffect(()=>{const{head:i}=document,l=document.createElement("style");return l.appendChild(document.createTextNode(r2)),i.appendChild(l),()=>o(i1,()=>{i.removeChild(l)})},[]),v.useEffect(()=>{function i(){t2.load({name:t,successCb:l=>{l.show(!1),r(l),i1=l},failCb:l=>{console.error(l),r(void 0)}})}n?o(n,()=>i()):i()},[t]),h.createElement(wm.Provider,{value:{clippy:n}},e)},i2=()=>v.useContext(wm),l1=["Welcome to my retro portfolio!","Want to see my projects? Click on Projects.exe!","You can find my skills in the Control Panel!","Feel free to contact me through Contact.exe!","Want to know more about me? Open About Me.txt!","You can drag me around the screen!","Have you read my blog? There are interesting stories there!"],a1=["Congratulate","Wave","GetAttention","Explain"],l2=()=>{const{clippy:e}=i2(),t=v.useRef(!1),n=v.useRef(null),r=v.useRef(!1);return v.useEffect(()=>{if(!e||t.current)return;t.current=!0;const o=document.querySelector(".clippy");if(!o){console.error("No se encontró el elemento .clippy en el DOM");return}o.style.position="fixed",o.style.right="100px",o.style.bottom="60px",o.style.cursor="grab",o.style.zIndex="9999";const i=a=>{r.current=!0;const s=o.getBoundingClientRect(),u={x:a.clientX-s.left,y:a.clientY-s.top};o.style.cursor="grabbing";const p=g=>{r.current&&(o.style.left=`${g.clientX-u.x}px`,o.style.top=`${g.clientY-u.y}px`)},d=()=>{r.current=!1,o.style.cursor="grab",window.removeEventListener("mousemove",p),window.removeEventListener("mouseup",d)};window.addEventListener("mousemove",p),window.addEventListener("mouseup",d)};o.addEventListener("mousedown",i);const l=()=>{if(!e||!t.current)return;const a=l1[Math.floor(Math.random()*l1.length)],s=a1[Math.floor(Math.random()*a1.length)];e.speak(a,!1),e.play(s)};return n.current=window.setInterval(l,7e3),()=>{n.current&&(clearInterval(n.current),n.current=null),o==null||o.removeEventListener("mousedown",i),e&&e.hide(!0,()=>{}),t.current=!1}},[e]),null},a2=Y0`
  ${X0}
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
`;function s2(){return A.jsxs(V0,{theme:Dy,children:[A.jsx(a2,{}),A.jsxs(o2,{agentName:xm.GENIUS,children:[A.jsx(Yx,{}),A.jsx(l2,{})]})]})}const km=document.getElementById("root");if(!km)throw new Error("Root element not found");const u2=v.StrictMode;bd(km).render(A.jsx(u2,{children:A.jsx(s2,{})}));
