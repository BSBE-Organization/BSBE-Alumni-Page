function E_(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function S_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ff={exports:{}},$o={},Uf={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zi=Symbol.for("react.element"),C_=Symbol.for("react.portal"),k_=Symbol.for("react.fragment"),I_=Symbol.for("react.strict_mode"),T_=Symbol.for("react.profiler"),x_=Symbol.for("react.provider"),N_=Symbol.for("react.context"),R_=Symbol.for("react.forward_ref"),P_=Symbol.for("react.suspense"),A_=Symbol.for("react.memo"),O_=Symbol.for("react.lazy"),cd=Symbol.iterator;function b_(t){return t===null||typeof t!="object"?null:(t=cd&&t[cd]||t["@@iterator"],typeof t=="function"?t:null)}var zf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Bf=Object.assign,Wf={};function zr(t,e,n){this.props=t,this.context=e,this.refs=Wf,this.updater=n||zf}zr.prototype.isReactComponent={};zr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};zr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function $f(){}$f.prototype=zr.prototype;function ku(t,e,n){this.props=t,this.context=e,this.refs=Wf,this.updater=n||zf}var Iu=ku.prototype=new $f;Iu.constructor=ku;Bf(Iu,zr.prototype);Iu.isPureReactComponent=!0;var dd=Array.isArray,Hf=Object.prototype.hasOwnProperty,Tu={current:null},Vf={key:!0,ref:!0,__self:!0,__source:!0};function Gf(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Hf.call(e,r)&&!Vf.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Zi,type:t,key:s,ref:o,props:i,_owner:Tu.current}}function D_(t,e){return{$$typeof:Zi,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function xu(t){return typeof t=="object"&&t!==null&&t.$$typeof===Zi}function L_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var hd=/\/+/g;function El(t,e){return typeof t=="object"&&t!==null&&t.key!=null?L_(""+t.key):e.toString(36)}function Ls(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Zi:case C_:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+El(o,0):r,dd(i)?(n="",t!=null&&(n=t.replace(hd,"$&/")+"/"),Ls(i,e,n,"",function(u){return u})):i!=null&&(xu(i)&&(i=D_(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(hd,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",dd(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+El(s,l);o+=Ls(s,e,n,a,i)}else if(a=b_(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+El(s,l++),o+=Ls(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ps(t,e,n){if(t==null)return t;var r=[],i=0;return Ls(t,r,"","",function(s){return e.call(n,s,i++)}),r}function M_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ne={current:null},Ms={transition:null},j_={ReactCurrentDispatcher:Ne,ReactCurrentBatchConfig:Ms,ReactCurrentOwner:Tu};function Kf(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:ps,forEach:function(t,e,n){ps(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ps(t,function(){e++}),e},toArray:function(t){return ps(t,function(e){return e})||[]},only:function(t){if(!xu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};L.Component=zr;L.Fragment=k_;L.Profiler=T_;L.PureComponent=ku;L.StrictMode=I_;L.Suspense=P_;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=j_;L.act=Kf;L.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Bf({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Tu.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)Hf.call(e,a)&&!Vf.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Zi,type:t.type,key:i,ref:s,props:r,_owner:o}};L.createContext=function(t){return t={$$typeof:N_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:x_,_context:t},t.Consumer=t};L.createElement=Gf;L.createFactory=function(t){var e=Gf.bind(null,t);return e.type=t,e};L.createRef=function(){return{current:null}};L.forwardRef=function(t){return{$$typeof:R_,render:t}};L.isValidElement=xu;L.lazy=function(t){return{$$typeof:O_,_payload:{_status:-1,_result:t},_init:M_}};L.memo=function(t,e){return{$$typeof:A_,type:t,compare:e===void 0?null:e}};L.startTransition=function(t){var e=Ms.transition;Ms.transition={};try{t()}finally{Ms.transition=e}};L.unstable_act=Kf;L.useCallback=function(t,e){return Ne.current.useCallback(t,e)};L.useContext=function(t){return Ne.current.useContext(t)};L.useDebugValue=function(){};L.useDeferredValue=function(t){return Ne.current.useDeferredValue(t)};L.useEffect=function(t,e){return Ne.current.useEffect(t,e)};L.useId=function(){return Ne.current.useId()};L.useImperativeHandle=function(t,e,n){return Ne.current.useImperativeHandle(t,e,n)};L.useInsertionEffect=function(t,e){return Ne.current.useInsertionEffect(t,e)};L.useLayoutEffect=function(t,e){return Ne.current.useLayoutEffect(t,e)};L.useMemo=function(t,e){return Ne.current.useMemo(t,e)};L.useReducer=function(t,e,n){return Ne.current.useReducer(t,e,n)};L.useRef=function(t){return Ne.current.useRef(t)};L.useState=function(t){return Ne.current.useState(t)};L.useSyncExternalStore=function(t,e,n){return Ne.current.useSyncExternalStore(t,e,n)};L.useTransition=function(){return Ne.current.useTransition()};L.version="18.3.1";Uf.exports=L;var S=Uf.exports;const F_=S_(S),U_=E_({__proto__:null,default:F_},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z_=S,B_=Symbol.for("react.element"),W_=Symbol.for("react.fragment"),$_=Object.prototype.hasOwnProperty,H_=z_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,V_={key:!0,ref:!0,__self:!0,__source:!0};function Yf(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)$_.call(e,r)&&!V_.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:B_,type:t,key:s,ref:o,props:i,_owner:H_.current}}$o.Fragment=W_;$o.jsx=Yf;$o.jsxs=Yf;Ff.exports=$o;var c=Ff.exports,Qf={exports:{}},Be={},qf={exports:{}},Xf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(x,O){var b=x.length;x.push(O);e:for(;0<b;){var ne=b-1>>>1,ue=x[ne];if(0<i(ue,O))x[ne]=O,x[b]=ue,b=ne;else break e}}function n(x){return x.length===0?null:x[0]}function r(x){if(x.length===0)return null;var O=x[0],b=x.pop();if(b!==O){x[0]=b;e:for(var ne=0,ue=x.length,hs=ue>>>1;ne<hs;){var En=2*(ne+1)-1,wl=x[En],Sn=En+1,fs=x[Sn];if(0>i(wl,b))Sn<ue&&0>i(fs,wl)?(x[ne]=fs,x[Sn]=b,ne=Sn):(x[ne]=wl,x[En]=b,ne=En);else if(Sn<ue&&0>i(fs,b))x[ne]=fs,x[Sn]=b,ne=Sn;else break e}}return O}function i(x,O){var b=x.sortIndex-O.sortIndex;return b!==0?b:x.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],h=1,d=null,f=3,w=!1,v=!1,g=!1,y=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(x){for(var O=n(u);O!==null;){if(O.callback===null)r(u);else if(O.startTime<=x)r(u),O.sortIndex=O.expirationTime,e(a,O);else break;O=n(u)}}function E(x){if(g=!1,_(x),!v)if(n(a)!==null)v=!0,_l(I);else{var O=n(u);O!==null&&yl(E,O.startTime-x)}}function I(x,O){v=!1,g&&(g=!1,m(P),P=-1),w=!0;var b=f;try{for(_(O),d=n(a);d!==null&&(!(d.expirationTime>O)||x&&!Xe());){var ne=d.callback;if(typeof ne=="function"){d.callback=null,f=d.priorityLevel;var ue=ne(d.expirationTime<=O);O=t.unstable_now(),typeof ue=="function"?d.callback=ue:d===n(a)&&r(a),_(O)}else r(a);d=n(a)}if(d!==null)var hs=!0;else{var En=n(u);En!==null&&yl(E,En.startTime-O),hs=!1}return hs}finally{d=null,f=b,w=!1}}var N=!1,R=null,P=-1,V=5,D=-1;function Xe(){return!(t.unstable_now()-D<V)}function Xr(){if(R!==null){var x=t.unstable_now();D=x;var O=!0;try{O=R(!0,x)}finally{O?Jr():(N=!1,R=null)}}else N=!1}var Jr;if(typeof p=="function")Jr=function(){p(Xr)};else if(typeof MessageChannel<"u"){var ud=new MessageChannel,w_=ud.port2;ud.port1.onmessage=Xr,Jr=function(){w_.postMessage(null)}}else Jr=function(){y(Xr,0)};function _l(x){R=x,N||(N=!0,Jr())}function yl(x,O){P=y(function(){x(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(x){x.callback=null},t.unstable_continueExecution=function(){v||w||(v=!0,_l(I))},t.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<x?Math.floor(1e3/x):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(x){switch(f){case 1:case 2:case 3:var O=3;break;default:O=f}var b=f;f=O;try{return x()}finally{f=b}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(x,O){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var b=f;f=x;try{return O()}finally{f=b}},t.unstable_scheduleCallback=function(x,O,b){var ne=t.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?ne+b:ne):b=ne,x){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=b+ue,x={id:h++,callback:O,priorityLevel:x,startTime:b,expirationTime:ue,sortIndex:-1},b>ne?(x.sortIndex=b,e(u,x),n(a)===null&&x===n(u)&&(g?(m(P),P=-1):g=!0,yl(E,b-ne))):(x.sortIndex=ue,e(a,x),v||w||(v=!0,_l(I))),x},t.unstable_shouldYield=Xe,t.unstable_wrapCallback=function(x){var O=f;return function(){var b=f;f=O;try{return x.apply(this,arguments)}finally{f=b}}}})(Xf);qf.exports=Xf;var G_=qf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K_=S,ze=G_;function C(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Jf=new Set,Ri={};function Kn(t,e){Nr(t,e),Nr(t+"Capture",e)}function Nr(t,e){for(Ri[t]=e,t=0;t<e.length;t++)Jf.add(e[t])}var Pt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),aa=Object.prototype.hasOwnProperty,Y_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fd={},pd={};function Q_(t){return aa.call(pd,t)?!0:aa.call(fd,t)?!1:Y_.test(t)?pd[t]=!0:(fd[t]=!0,!1)}function q_(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function X_(t,e,n,r){if(e===null||typeof e>"u"||q_(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Re(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var _e={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){_e[t]=new Re(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];_e[e]=new Re(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){_e[t]=new Re(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){_e[t]=new Re(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){_e[t]=new Re(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){_e[t]=new Re(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){_e[t]=new Re(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){_e[t]=new Re(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){_e[t]=new Re(t,5,!1,t.toLowerCase(),null,!1,!1)});var Nu=/[\-:]([a-z])/g;function Ru(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Nu,Ru);_e[e]=new Re(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Nu,Ru);_e[e]=new Re(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Nu,Ru);_e[e]=new Re(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){_e[t]=new Re(t,1,!1,t.toLowerCase(),null,!1,!1)});_e.xlinkHref=new Re("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){_e[t]=new Re(t,1,!1,t.toLowerCase(),null,!0,!0)});function Pu(t,e,n,r){var i=_e.hasOwnProperty(e)?_e[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(X_(e,n,i,r)&&(n=null),r||i===null?Q_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Ut=K_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ms=Symbol.for("react.element"),ir=Symbol.for("react.portal"),sr=Symbol.for("react.fragment"),Au=Symbol.for("react.strict_mode"),ua=Symbol.for("react.profiler"),Zf=Symbol.for("react.provider"),ep=Symbol.for("react.context"),Ou=Symbol.for("react.forward_ref"),ca=Symbol.for("react.suspense"),da=Symbol.for("react.suspense_list"),bu=Symbol.for("react.memo"),Ht=Symbol.for("react.lazy"),tp=Symbol.for("react.offscreen"),md=Symbol.iterator;function Zr(t){return t===null||typeof t!="object"?null:(t=md&&t[md]||t["@@iterator"],typeof t=="function"?t:null)}var ee=Object.assign,Sl;function di(t){if(Sl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Sl=e&&e[1]||""}return`
`+Sl+t}var Cl=!1;function kl(t,e){if(!t||Cl)return"";Cl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{Cl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?di(t):""}function J_(t){switch(t.tag){case 5:return di(t.type);case 16:return di("Lazy");case 13:return di("Suspense");case 19:return di("SuspenseList");case 0:case 2:case 15:return t=kl(t.type,!1),t;case 11:return t=kl(t.type.render,!1),t;case 1:return t=kl(t.type,!0),t;default:return""}}function ha(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case sr:return"Fragment";case ir:return"Portal";case ua:return"Profiler";case Au:return"StrictMode";case ca:return"Suspense";case da:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ep:return(t.displayName||"Context")+".Consumer";case Zf:return(t._context.displayName||"Context")+".Provider";case Ou:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case bu:return e=t.displayName||null,e!==null?e:ha(t.type)||"Memo";case Ht:e=t._payload,t=t._init;try{return ha(t(e))}catch{}}return null}function Z_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ha(e);case 8:return e===Au?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function pn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function np(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ey(t){var e=np(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function gs(t){t._valueTracker||(t._valueTracker=ey(t))}function rp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=np(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Js(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function fa(t,e){var n=e.checked;return ee({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function gd(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=pn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ip(t,e){e=e.checked,e!=null&&Pu(t,"checked",e,!1)}function pa(t,e){ip(t,e);var n=pn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ma(t,e.type,n):e.hasOwnProperty("defaultValue")&&ma(t,e.type,pn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function vd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ma(t,e,n){(e!=="number"||Js(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var hi=Array.isArray;function vr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+pn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ga(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(C(91));return ee({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function _d(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(C(92));if(hi(n)){if(1<n.length)throw Error(C(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:pn(n)}}function sp(t,e){var n=pn(e.value),r=pn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function yd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function op(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function va(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?op(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var vs,lp=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(vs=vs||document.createElement("div"),vs.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=vs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Pi(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var mi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ty=["Webkit","ms","Moz","O"];Object.keys(mi).forEach(function(t){ty.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),mi[e]=mi[t]})});function ap(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||mi.hasOwnProperty(t)&&mi[t]?(""+e).trim():e+"px"}function up(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ap(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var ny=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _a(t,e){if(e){if(ny[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(C(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(C(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(C(61))}if(e.style!=null&&typeof e.style!="object")throw Error(C(62))}}function ya(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wa=null;function Du(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ea=null,_r=null,yr=null;function wd(t){if(t=ns(t)){if(typeof Ea!="function")throw Error(C(280));var e=t.stateNode;e&&(e=Yo(e),Ea(t.stateNode,t.type,e))}}function cp(t){_r?yr?yr.push(t):yr=[t]:_r=t}function dp(){if(_r){var t=_r,e=yr;if(yr=_r=null,wd(t),e)for(t=0;t<e.length;t++)wd(e[t])}}function hp(t,e){return t(e)}function fp(){}var Il=!1;function pp(t,e,n){if(Il)return t(e,n);Il=!0;try{return hp(t,e,n)}finally{Il=!1,(_r!==null||yr!==null)&&(fp(),dp())}}function Ai(t,e){var n=t.stateNode;if(n===null)return null;var r=Yo(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(C(231,e,typeof n));return n}var Sa=!1;if(Pt)try{var ei={};Object.defineProperty(ei,"passive",{get:function(){Sa=!0}}),window.addEventListener("test",ei,ei),window.removeEventListener("test",ei,ei)}catch{Sa=!1}function ry(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var gi=!1,Zs=null,eo=!1,Ca=null,iy={onError:function(t){gi=!0,Zs=t}};function sy(t,e,n,r,i,s,o,l,a){gi=!1,Zs=null,ry.apply(iy,arguments)}function oy(t,e,n,r,i,s,o,l,a){if(sy.apply(this,arguments),gi){if(gi){var u=Zs;gi=!1,Zs=null}else throw Error(C(198));eo||(eo=!0,Ca=u)}}function Yn(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function mp(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ed(t){if(Yn(t)!==t)throw Error(C(188))}function ly(t){var e=t.alternate;if(!e){if(e=Yn(t),e===null)throw Error(C(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Ed(i),t;if(s===r)return Ed(i),e;s=s.sibling}throw Error(C(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?t:e}function gp(t){return t=ly(t),t!==null?vp(t):null}function vp(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=vp(t);if(e!==null)return e;t=t.sibling}return null}var _p=ze.unstable_scheduleCallback,Sd=ze.unstable_cancelCallback,ay=ze.unstable_shouldYield,uy=ze.unstable_requestPaint,re=ze.unstable_now,cy=ze.unstable_getCurrentPriorityLevel,Lu=ze.unstable_ImmediatePriority,yp=ze.unstable_UserBlockingPriority,to=ze.unstable_NormalPriority,dy=ze.unstable_LowPriority,wp=ze.unstable_IdlePriority,Ho=null,pt=null;function hy(t){if(pt&&typeof pt.onCommitFiberRoot=="function")try{pt.onCommitFiberRoot(Ho,t,void 0,(t.current.flags&128)===128)}catch{}}var it=Math.clz32?Math.clz32:my,fy=Math.log,py=Math.LN2;function my(t){return t>>>=0,t===0?32:31-(fy(t)/py|0)|0}var _s=64,ys=4194304;function fi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function no(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=fi(l):(s&=o,s!==0&&(r=fi(s)))}else o=n&~i,o!==0?r=fi(o):s!==0&&(r=fi(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-it(e),i=1<<n,r|=t[n],e&=~i;return r}function gy(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vy(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-it(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=gy(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function ka(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ep(){var t=_s;return _s<<=1,!(_s&4194240)&&(_s=64),t}function Tl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function es(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-it(e),t[e]=n}function _y(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-it(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Mu(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-it(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var B=0;function Sp(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Cp,ju,kp,Ip,Tp,Ia=!1,ws=[],en=null,tn=null,nn=null,Oi=new Map,bi=new Map,Gt=[],yy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cd(t,e){switch(t){case"focusin":case"focusout":en=null;break;case"dragenter":case"dragleave":tn=null;break;case"mouseover":case"mouseout":nn=null;break;case"pointerover":case"pointerout":Oi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":bi.delete(e.pointerId)}}function ti(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ns(e),e!==null&&ju(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function wy(t,e,n,r,i){switch(e){case"focusin":return en=ti(en,t,e,n,r,i),!0;case"dragenter":return tn=ti(tn,t,e,n,r,i),!0;case"mouseover":return nn=ti(nn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Oi.set(s,ti(Oi.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,bi.set(s,ti(bi.get(s)||null,t,e,n,r,i)),!0}return!1}function xp(t){var e=Nn(t.target);if(e!==null){var n=Yn(e);if(n!==null){if(e=n.tag,e===13){if(e=mp(n),e!==null){t.blockedOn=e,Tp(t.priority,function(){kp(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function js(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ta(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);wa=r,n.target.dispatchEvent(r),wa=null}else return e=ns(n),e!==null&&ju(e),t.blockedOn=n,!1;e.shift()}return!0}function kd(t,e,n){js(t)&&n.delete(e)}function Ey(){Ia=!1,en!==null&&js(en)&&(en=null),tn!==null&&js(tn)&&(tn=null),nn!==null&&js(nn)&&(nn=null),Oi.forEach(kd),bi.forEach(kd)}function ni(t,e){t.blockedOn===e&&(t.blockedOn=null,Ia||(Ia=!0,ze.unstable_scheduleCallback(ze.unstable_NormalPriority,Ey)))}function Di(t){function e(i){return ni(i,t)}if(0<ws.length){ni(ws[0],t);for(var n=1;n<ws.length;n++){var r=ws[n];r.blockedOn===t&&(r.blockedOn=null)}}for(en!==null&&ni(en,t),tn!==null&&ni(tn,t),nn!==null&&ni(nn,t),Oi.forEach(e),bi.forEach(e),n=0;n<Gt.length;n++)r=Gt[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Gt.length&&(n=Gt[0],n.blockedOn===null);)xp(n),n.blockedOn===null&&Gt.shift()}var wr=Ut.ReactCurrentBatchConfig,ro=!0;function Sy(t,e,n,r){var i=B,s=wr.transition;wr.transition=null;try{B=1,Fu(t,e,n,r)}finally{B=i,wr.transition=s}}function Cy(t,e,n,r){var i=B,s=wr.transition;wr.transition=null;try{B=4,Fu(t,e,n,r)}finally{B=i,wr.transition=s}}function Fu(t,e,n,r){if(ro){var i=Ta(t,e,n,r);if(i===null)Ml(t,e,r,io,n),Cd(t,r);else if(wy(i,t,e,n,r))r.stopPropagation();else if(Cd(t,r),e&4&&-1<yy.indexOf(t)){for(;i!==null;){var s=ns(i);if(s!==null&&Cp(s),s=Ta(t,e,n,r),s===null&&Ml(t,e,r,io,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ml(t,e,r,null,n)}}var io=null;function Ta(t,e,n,r){if(io=null,t=Du(r),t=Nn(t),t!==null)if(e=Yn(t),e===null)t=null;else if(n=e.tag,n===13){if(t=mp(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return io=t,null}function Np(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(cy()){case Lu:return 1;case yp:return 4;case to:case dy:return 16;case wp:return 536870912;default:return 16}default:return 16}}var Xt=null,Uu=null,Fs=null;function Rp(){if(Fs)return Fs;var t,e=Uu,n=e.length,r,i="value"in Xt?Xt.value:Xt.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Fs=i.slice(t,1<r?1-r:void 0)}function Us(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Es(){return!0}function Id(){return!1}function We(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Es:Id,this.isPropagationStopped=Id,this}return ee(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Es)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Es)},persist:function(){},isPersistent:Es}),e}var Br={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zu=We(Br),ts=ee({},Br,{view:0,detail:0}),ky=We(ts),xl,Nl,ri,Vo=ee({},ts,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ri&&(ri&&t.type==="mousemove"?(xl=t.screenX-ri.screenX,Nl=t.screenY-ri.screenY):Nl=xl=0,ri=t),xl)},movementY:function(t){return"movementY"in t?t.movementY:Nl}}),Td=We(Vo),Iy=ee({},Vo,{dataTransfer:0}),Ty=We(Iy),xy=ee({},ts,{relatedTarget:0}),Rl=We(xy),Ny=ee({},Br,{animationName:0,elapsedTime:0,pseudoElement:0}),Ry=We(Ny),Py=ee({},Br,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ay=We(Py),Oy=ee({},Br,{data:0}),xd=We(Oy),by={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ly={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function My(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Ly[t])?!!e[t]:!1}function Bu(){return My}var jy=ee({},ts,{key:function(t){if(t.key){var e=by[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Us(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Dy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bu,charCode:function(t){return t.type==="keypress"?Us(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Us(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Fy=We(jy),Uy=ee({},Vo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nd=We(Uy),zy=ee({},ts,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bu}),By=We(zy),Wy=ee({},Br,{propertyName:0,elapsedTime:0,pseudoElement:0}),$y=We(Wy),Hy=ee({},Vo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Vy=We(Hy),Gy=[9,13,27,32],Wu=Pt&&"CompositionEvent"in window,vi=null;Pt&&"documentMode"in document&&(vi=document.documentMode);var Ky=Pt&&"TextEvent"in window&&!vi,Pp=Pt&&(!Wu||vi&&8<vi&&11>=vi),Rd=" ",Pd=!1;function Ap(t,e){switch(t){case"keyup":return Gy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Op(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var or=!1;function Yy(t,e){switch(t){case"compositionend":return Op(e);case"keypress":return e.which!==32?null:(Pd=!0,Rd);case"textInput":return t=e.data,t===Rd&&Pd?null:t;default:return null}}function Qy(t,e){if(or)return t==="compositionend"||!Wu&&Ap(t,e)?(t=Rp(),Fs=Uu=Xt=null,or=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Pp&&e.locale!=="ko"?null:e.data;default:return null}}var qy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ad(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!qy[t.type]:e==="textarea"}function bp(t,e,n,r){cp(r),e=so(e,"onChange"),0<e.length&&(n=new zu("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var _i=null,Li=null;function Xy(t){Hp(t,0)}function Go(t){var e=ur(t);if(rp(e))return t}function Jy(t,e){if(t==="change")return e}var Dp=!1;if(Pt){var Pl;if(Pt){var Al="oninput"in document;if(!Al){var Od=document.createElement("div");Od.setAttribute("oninput","return;"),Al=typeof Od.oninput=="function"}Pl=Al}else Pl=!1;Dp=Pl&&(!document.documentMode||9<document.documentMode)}function bd(){_i&&(_i.detachEvent("onpropertychange",Lp),Li=_i=null)}function Lp(t){if(t.propertyName==="value"&&Go(Li)){var e=[];bp(e,Li,t,Du(t)),pp(Xy,e)}}function Zy(t,e,n){t==="focusin"?(bd(),_i=e,Li=n,_i.attachEvent("onpropertychange",Lp)):t==="focusout"&&bd()}function e0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Go(Li)}function t0(t,e){if(t==="click")return Go(e)}function n0(t,e){if(t==="input"||t==="change")return Go(e)}function r0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var at=typeof Object.is=="function"?Object.is:r0;function Mi(t,e){if(at(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!aa.call(e,i)||!at(t[i],e[i]))return!1}return!0}function Dd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ld(t,e){var n=Dd(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Dd(n)}}function Mp(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Mp(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function jp(){for(var t=window,e=Js();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Js(t.document)}return e}function $u(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function i0(t){var e=jp(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Mp(n.ownerDocument.documentElement,n)){if(r!==null&&$u(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Ld(n,s);var o=Ld(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var s0=Pt&&"documentMode"in document&&11>=document.documentMode,lr=null,xa=null,yi=null,Na=!1;function Md(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Na||lr==null||lr!==Js(r)||(r=lr,"selectionStart"in r&&$u(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),yi&&Mi(yi,r)||(yi=r,r=so(xa,"onSelect"),0<r.length&&(e=new zu("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=lr)))}function Ss(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ar={animationend:Ss("Animation","AnimationEnd"),animationiteration:Ss("Animation","AnimationIteration"),animationstart:Ss("Animation","AnimationStart"),transitionend:Ss("Transition","TransitionEnd")},Ol={},Fp={};Pt&&(Fp=document.createElement("div").style,"AnimationEvent"in window||(delete ar.animationend.animation,delete ar.animationiteration.animation,delete ar.animationstart.animation),"TransitionEvent"in window||delete ar.transitionend.transition);function Ko(t){if(Ol[t])return Ol[t];if(!ar[t])return t;var e=ar[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Fp)return Ol[t]=e[n];return t}var Up=Ko("animationend"),zp=Ko("animationiteration"),Bp=Ko("animationstart"),Wp=Ko("transitionend"),$p=new Map,jd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vn(t,e){$p.set(t,e),Kn(e,[t])}for(var bl=0;bl<jd.length;bl++){var Dl=jd[bl],o0=Dl.toLowerCase(),l0=Dl[0].toUpperCase()+Dl.slice(1);vn(o0,"on"+l0)}vn(Up,"onAnimationEnd");vn(zp,"onAnimationIteration");vn(Bp,"onAnimationStart");vn("dblclick","onDoubleClick");vn("focusin","onFocus");vn("focusout","onBlur");vn(Wp,"onTransitionEnd");Nr("onMouseEnter",["mouseout","mouseover"]);Nr("onMouseLeave",["mouseout","mouseover"]);Nr("onPointerEnter",["pointerout","pointerover"]);Nr("onPointerLeave",["pointerout","pointerover"]);Kn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Kn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Kn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Kn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Kn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Kn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),a0=new Set("cancel close invalid load scroll toggle".split(" ").concat(pi));function Fd(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,oy(r,e,void 0,t),t.currentTarget=null}function Hp(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;Fd(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;Fd(i,l,u),s=a}}}if(eo)throw t=Ca,eo=!1,Ca=null,t}function G(t,e){var n=e[ba];n===void 0&&(n=e[ba]=new Set);var r=t+"__bubble";n.has(r)||(Vp(e,t,2,!1),n.add(r))}function Ll(t,e,n){var r=0;e&&(r|=4),Vp(n,t,r,e)}var Cs="_reactListening"+Math.random().toString(36).slice(2);function ji(t){if(!t[Cs]){t[Cs]=!0,Jf.forEach(function(n){n!=="selectionchange"&&(a0.has(n)||Ll(n,!1,t),Ll(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Cs]||(e[Cs]=!0,Ll("selectionchange",!1,e))}}function Vp(t,e,n,r){switch(Np(e)){case 1:var i=Sy;break;case 4:i=Cy;break;default:i=Fu}n=i.bind(null,e,n,t),i=void 0,!Sa||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Ml(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Nn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}pp(function(){var u=s,h=Du(n),d=[];e:{var f=$p.get(t);if(f!==void 0){var w=zu,v=t;switch(t){case"keypress":if(Us(n)===0)break e;case"keydown":case"keyup":w=Fy;break;case"focusin":v="focus",w=Rl;break;case"focusout":v="blur",w=Rl;break;case"beforeblur":case"afterblur":w=Rl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Td;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Ty;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=By;break;case Up:case zp:case Bp:w=Ry;break;case Wp:w=$y;break;case"scroll":w=ky;break;case"wheel":w=Vy;break;case"copy":case"cut":case"paste":w=Ay;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Nd}var g=(e&4)!==0,y=!g&&t==="scroll",m=g?f!==null?f+"Capture":null:f;g=[];for(var p=u,_;p!==null;){_=p;var E=_.stateNode;if(_.tag===5&&E!==null&&(_=E,m!==null&&(E=Ai(p,m),E!=null&&g.push(Fi(p,E,_)))),y)break;p=p.return}0<g.length&&(f=new w(f,v,null,n,h),d.push({event:f,listeners:g}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",w=t==="mouseout"||t==="pointerout",f&&n!==wa&&(v=n.relatedTarget||n.fromElement)&&(Nn(v)||v[At]))break e;if((w||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,w?(v=n.relatedTarget||n.toElement,w=u,v=v?Nn(v):null,v!==null&&(y=Yn(v),v!==y||v.tag!==5&&v.tag!==6)&&(v=null)):(w=null,v=u),w!==v)){if(g=Td,E="onMouseLeave",m="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(g=Nd,E="onPointerLeave",m="onPointerEnter",p="pointer"),y=w==null?f:ur(w),_=v==null?f:ur(v),f=new g(E,p+"leave",w,n,h),f.target=y,f.relatedTarget=_,E=null,Nn(h)===u&&(g=new g(m,p+"enter",v,n,h),g.target=_,g.relatedTarget=y,E=g),y=E,w&&v)t:{for(g=w,m=v,p=0,_=g;_;_=tr(_))p++;for(_=0,E=m;E;E=tr(E))_++;for(;0<p-_;)g=tr(g),p--;for(;0<_-p;)m=tr(m),_--;for(;p--;){if(g===m||m!==null&&g===m.alternate)break t;g=tr(g),m=tr(m)}g=null}else g=null;w!==null&&Ud(d,f,w,g,!1),v!==null&&y!==null&&Ud(d,y,v,g,!0)}}e:{if(f=u?ur(u):window,w=f.nodeName&&f.nodeName.toLowerCase(),w==="select"||w==="input"&&f.type==="file")var I=Jy;else if(Ad(f))if(Dp)I=n0;else{I=e0;var N=Zy}else(w=f.nodeName)&&w.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(I=t0);if(I&&(I=I(t,u))){bp(d,I,n,h);break e}N&&N(t,f,u),t==="focusout"&&(N=f._wrapperState)&&N.controlled&&f.type==="number"&&ma(f,"number",f.value)}switch(N=u?ur(u):window,t){case"focusin":(Ad(N)||N.contentEditable==="true")&&(lr=N,xa=u,yi=null);break;case"focusout":yi=xa=lr=null;break;case"mousedown":Na=!0;break;case"contextmenu":case"mouseup":case"dragend":Na=!1,Md(d,n,h);break;case"selectionchange":if(s0)break;case"keydown":case"keyup":Md(d,n,h)}var R;if(Wu)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else or?Ap(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Pp&&n.locale!=="ko"&&(or||P!=="onCompositionStart"?P==="onCompositionEnd"&&or&&(R=Rp()):(Xt=h,Uu="value"in Xt?Xt.value:Xt.textContent,or=!0)),N=so(u,P),0<N.length&&(P=new xd(P,t,null,n,h),d.push({event:P,listeners:N}),R?P.data=R:(R=Op(n),R!==null&&(P.data=R)))),(R=Ky?Yy(t,n):Qy(t,n))&&(u=so(u,"onBeforeInput"),0<u.length&&(h=new xd("onBeforeInput","beforeinput",null,n,h),d.push({event:h,listeners:u}),h.data=R))}Hp(d,e)})}function Fi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function so(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ai(t,n),s!=null&&r.unshift(Fi(t,s,i)),s=Ai(t,e),s!=null&&r.push(Fi(t,s,i))),t=t.return}return r}function tr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ud(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=Ai(n,s),a!=null&&o.unshift(Fi(n,a,l))):i||(a=Ai(n,s),a!=null&&o.push(Fi(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var u0=/\r\n?/g,c0=/\u0000|\uFFFD/g;function zd(t){return(typeof t=="string"?t:""+t).replace(u0,`
`).replace(c0,"")}function ks(t,e,n){if(e=zd(e),zd(t)!==e&&n)throw Error(C(425))}function oo(){}var Ra=null,Pa=null;function Aa(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Oa=typeof setTimeout=="function"?setTimeout:void 0,d0=typeof clearTimeout=="function"?clearTimeout:void 0,Bd=typeof Promise=="function"?Promise:void 0,h0=typeof queueMicrotask=="function"?queueMicrotask:typeof Bd<"u"?function(t){return Bd.resolve(null).then(t).catch(f0)}:Oa;function f0(t){setTimeout(function(){throw t})}function jl(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Di(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Di(e)}function rn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Wd(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Wr=Math.random().toString(36).slice(2),ht="__reactFiber$"+Wr,Ui="__reactProps$"+Wr,At="__reactContainer$"+Wr,ba="__reactEvents$"+Wr,p0="__reactListeners$"+Wr,m0="__reactHandles$"+Wr;function Nn(t){var e=t[ht];if(e)return e;for(var n=t.parentNode;n;){if(e=n[At]||n[ht]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Wd(t);t!==null;){if(n=t[ht])return n;t=Wd(t)}return e}t=n,n=t.parentNode}return null}function ns(t){return t=t[ht]||t[At],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ur(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(C(33))}function Yo(t){return t[Ui]||null}var Da=[],cr=-1;function _n(t){return{current:t}}function Q(t){0>cr||(t.current=Da[cr],Da[cr]=null,cr--)}function H(t,e){cr++,Da[cr]=t.current,t.current=e}var mn={},ke=_n(mn),be=_n(!1),Fn=mn;function Rr(t,e){var n=t.type.contextTypes;if(!n)return mn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function De(t){return t=t.childContextTypes,t!=null}function lo(){Q(be),Q(ke)}function $d(t,e,n){if(ke.current!==mn)throw Error(C(168));H(ke,e),H(be,n)}function Gp(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(C(108,Z_(t)||"Unknown",i));return ee({},n,r)}function ao(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||mn,Fn=ke.current,H(ke,t),H(be,be.current),!0}function Hd(t,e,n){var r=t.stateNode;if(!r)throw Error(C(169));n?(t=Gp(t,e,Fn),r.__reactInternalMemoizedMergedChildContext=t,Q(be),Q(ke),H(ke,t)):Q(be),H(be,n)}var yt=null,Qo=!1,Fl=!1;function Kp(t){yt===null?yt=[t]:yt.push(t)}function g0(t){Qo=!0,Kp(t)}function yn(){if(!Fl&&yt!==null){Fl=!0;var t=0,e=B;try{var n=yt;for(B=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}yt=null,Qo=!1}catch(i){throw yt!==null&&(yt=yt.slice(t+1)),_p(Lu,yn),i}finally{B=e,Fl=!1}}return null}var dr=[],hr=0,uo=null,co=0,$e=[],He=0,Un=null,Et=1,St="";function Cn(t,e){dr[hr++]=co,dr[hr++]=uo,uo=t,co=e}function Yp(t,e,n){$e[He++]=Et,$e[He++]=St,$e[He++]=Un,Un=t;var r=Et;t=St;var i=32-it(r)-1;r&=~(1<<i),n+=1;var s=32-it(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Et=1<<32-it(e)+i|n<<i|r,St=s+t}else Et=1<<s|n<<i|r,St=t}function Hu(t){t.return!==null&&(Cn(t,1),Yp(t,1,0))}function Vu(t){for(;t===uo;)uo=dr[--hr],dr[hr]=null,co=dr[--hr],dr[hr]=null;for(;t===Un;)Un=$e[--He],$e[He]=null,St=$e[--He],$e[He]=null,Et=$e[--He],$e[He]=null}var Ue=null,Fe=null,X=!1,tt=null;function Qp(t,e){var n=Ve(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Vd(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ue=t,Fe=rn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ue=t,Fe=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Un!==null?{id:Et,overflow:St}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ve(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ue=t,Fe=null,!0):!1;default:return!1}}function La(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ma(t){if(X){var e=Fe;if(e){var n=e;if(!Vd(t,e)){if(La(t))throw Error(C(418));e=rn(n.nextSibling);var r=Ue;e&&Vd(t,e)?Qp(r,n):(t.flags=t.flags&-4097|2,X=!1,Ue=t)}}else{if(La(t))throw Error(C(418));t.flags=t.flags&-4097|2,X=!1,Ue=t}}}function Gd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ue=t}function Is(t){if(t!==Ue)return!1;if(!X)return Gd(t),X=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Aa(t.type,t.memoizedProps)),e&&(e=Fe)){if(La(t))throw qp(),Error(C(418));for(;e;)Qp(t,e),e=rn(e.nextSibling)}if(Gd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(C(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Fe=rn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Fe=null}}else Fe=Ue?rn(t.stateNode.nextSibling):null;return!0}function qp(){for(var t=Fe;t;)t=rn(t.nextSibling)}function Pr(){Fe=Ue=null,X=!1}function Gu(t){tt===null?tt=[t]:tt.push(t)}var v0=Ut.ReactCurrentBatchConfig;function ii(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,t))}return t}function Ts(t,e){throw t=Object.prototype.toString.call(e),Error(C(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Kd(t){var e=t._init;return e(t._payload)}function Xp(t){function e(m,p){if(t){var _=m.deletions;_===null?(m.deletions=[p],m.flags|=16):_.push(p)}}function n(m,p){if(!t)return null;for(;p!==null;)e(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=an(m,p),m.index=0,m.sibling=null,m}function s(m,p,_){return m.index=_,t?(_=m.alternate,_!==null?(_=_.index,_<p?(m.flags|=2,p):_):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function l(m,p,_,E){return p===null||p.tag!==6?(p=Vl(_,m.mode,E),p.return=m,p):(p=i(p,_),p.return=m,p)}function a(m,p,_,E){var I=_.type;return I===sr?h(m,p,_.props.children,E,_.key):p!==null&&(p.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Ht&&Kd(I)===p.type)?(E=i(p,_.props),E.ref=ii(m,p,_),E.return=m,E):(E=Gs(_.type,_.key,_.props,null,m.mode,E),E.ref=ii(m,p,_),E.return=m,E)}function u(m,p,_,E){return p===null||p.tag!==4||p.stateNode.containerInfo!==_.containerInfo||p.stateNode.implementation!==_.implementation?(p=Gl(_,m.mode,E),p.return=m,p):(p=i(p,_.children||[]),p.return=m,p)}function h(m,p,_,E,I){return p===null||p.tag!==7?(p=Ln(_,m.mode,E,I),p.return=m,p):(p=i(p,_),p.return=m,p)}function d(m,p,_){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Vl(""+p,m.mode,_),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ms:return _=Gs(p.type,p.key,p.props,null,m.mode,_),_.ref=ii(m,null,p),_.return=m,_;case ir:return p=Gl(p,m.mode,_),p.return=m,p;case Ht:var E=p._init;return d(m,E(p._payload),_)}if(hi(p)||Zr(p))return p=Ln(p,m.mode,_,null),p.return=m,p;Ts(m,p)}return null}function f(m,p,_,E){var I=p!==null?p.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return I!==null?null:l(m,p,""+_,E);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ms:return _.key===I?a(m,p,_,E):null;case ir:return _.key===I?u(m,p,_,E):null;case Ht:return I=_._init,f(m,p,I(_._payload),E)}if(hi(_)||Zr(_))return I!==null?null:h(m,p,_,E,null);Ts(m,_)}return null}function w(m,p,_,E,I){if(typeof E=="string"&&E!==""||typeof E=="number")return m=m.get(_)||null,l(p,m,""+E,I);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case ms:return m=m.get(E.key===null?_:E.key)||null,a(p,m,E,I);case ir:return m=m.get(E.key===null?_:E.key)||null,u(p,m,E,I);case Ht:var N=E._init;return w(m,p,_,N(E._payload),I)}if(hi(E)||Zr(E))return m=m.get(_)||null,h(p,m,E,I,null);Ts(p,E)}return null}function v(m,p,_,E){for(var I=null,N=null,R=p,P=p=0,V=null;R!==null&&P<_.length;P++){R.index>P?(V=R,R=null):V=R.sibling;var D=f(m,R,_[P],E);if(D===null){R===null&&(R=V);break}t&&R&&D.alternate===null&&e(m,R),p=s(D,p,P),N===null?I=D:N.sibling=D,N=D,R=V}if(P===_.length)return n(m,R),X&&Cn(m,P),I;if(R===null){for(;P<_.length;P++)R=d(m,_[P],E),R!==null&&(p=s(R,p,P),N===null?I=R:N.sibling=R,N=R);return X&&Cn(m,P),I}for(R=r(m,R);P<_.length;P++)V=w(R,m,P,_[P],E),V!==null&&(t&&V.alternate!==null&&R.delete(V.key===null?P:V.key),p=s(V,p,P),N===null?I=V:N.sibling=V,N=V);return t&&R.forEach(function(Xe){return e(m,Xe)}),X&&Cn(m,P),I}function g(m,p,_,E){var I=Zr(_);if(typeof I!="function")throw Error(C(150));if(_=I.call(_),_==null)throw Error(C(151));for(var N=I=null,R=p,P=p=0,V=null,D=_.next();R!==null&&!D.done;P++,D=_.next()){R.index>P?(V=R,R=null):V=R.sibling;var Xe=f(m,R,D.value,E);if(Xe===null){R===null&&(R=V);break}t&&R&&Xe.alternate===null&&e(m,R),p=s(Xe,p,P),N===null?I=Xe:N.sibling=Xe,N=Xe,R=V}if(D.done)return n(m,R),X&&Cn(m,P),I;if(R===null){for(;!D.done;P++,D=_.next())D=d(m,D.value,E),D!==null&&(p=s(D,p,P),N===null?I=D:N.sibling=D,N=D);return X&&Cn(m,P),I}for(R=r(m,R);!D.done;P++,D=_.next())D=w(R,m,P,D.value,E),D!==null&&(t&&D.alternate!==null&&R.delete(D.key===null?P:D.key),p=s(D,p,P),N===null?I=D:N.sibling=D,N=D);return t&&R.forEach(function(Xr){return e(m,Xr)}),X&&Cn(m,P),I}function y(m,p,_,E){if(typeof _=="object"&&_!==null&&_.type===sr&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case ms:e:{for(var I=_.key,N=p;N!==null;){if(N.key===I){if(I=_.type,I===sr){if(N.tag===7){n(m,N.sibling),p=i(N,_.props.children),p.return=m,m=p;break e}}else if(N.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Ht&&Kd(I)===N.type){n(m,N.sibling),p=i(N,_.props),p.ref=ii(m,N,_),p.return=m,m=p;break e}n(m,N);break}else e(m,N);N=N.sibling}_.type===sr?(p=Ln(_.props.children,m.mode,E,_.key),p.return=m,m=p):(E=Gs(_.type,_.key,_.props,null,m.mode,E),E.ref=ii(m,p,_),E.return=m,m=E)}return o(m);case ir:e:{for(N=_.key;p!==null;){if(p.key===N)if(p.tag===4&&p.stateNode.containerInfo===_.containerInfo&&p.stateNode.implementation===_.implementation){n(m,p.sibling),p=i(p,_.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else e(m,p);p=p.sibling}p=Gl(_,m.mode,E),p.return=m,m=p}return o(m);case Ht:return N=_._init,y(m,p,N(_._payload),E)}if(hi(_))return v(m,p,_,E);if(Zr(_))return g(m,p,_,E);Ts(m,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,_),p.return=m,m=p):(n(m,p),p=Vl(_,m.mode,E),p.return=m,m=p),o(m)):n(m,p)}return y}var Ar=Xp(!0),Jp=Xp(!1),ho=_n(null),fo=null,fr=null,Ku=null;function Yu(){Ku=fr=fo=null}function Qu(t){var e=ho.current;Q(ho),t._currentValue=e}function ja(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Er(t,e){fo=t,Ku=fr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ae=!0),t.firstContext=null)}function Ye(t){var e=t._currentValue;if(Ku!==t)if(t={context:t,memoizedValue:e,next:null},fr===null){if(fo===null)throw Error(C(308));fr=t,fo.dependencies={lanes:0,firstContext:t}}else fr=fr.next=t;return e}var Rn=null;function qu(t){Rn===null?Rn=[t]:Rn.push(t)}function Zp(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,qu(e)):(n.next=i.next,i.next=n),e.interleaved=n,Ot(t,r)}function Ot(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Vt=!1;function Xu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function em(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Nt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function sn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Ot(t,n)}return i=r.interleaved,i===null?(e.next=e,qu(r)):(e.next=i.next,i.next=e),r.interleaved=e,Ot(t,n)}function zs(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Mu(t,n)}}function Yd(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function po(t,e,n,r){var i=t.updateQueue;Vt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var h=t.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==o&&(l===null?h.firstBaseUpdate=u:l.next=u,h.lastBaseUpdate=a))}if(s!==null){var d=i.baseState;o=0,h=u=a=null,l=s;do{var f=l.lane,w=l.eventTime;if((r&f)===f){h!==null&&(h=h.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=t,g=l;switch(f=e,w=n,g.tag){case 1:if(v=g.payload,typeof v=="function"){d=v.call(w,d,f);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=g.payload,f=typeof v=="function"?v.call(w,d,f):v,f==null)break e;d=ee({},d,f);break e;case 2:Vt=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[l]:f.push(l))}else w={eventTime:w,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(u=h=w,a=d):h=h.next=w,o|=f;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;f=l,l=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(h===null&&(a=d),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Bn|=o,t.lanes=o,t.memoizedState=d}}function Qd(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(C(191,i));i.call(r)}}}var rs={},mt=_n(rs),zi=_n(rs),Bi=_n(rs);function Pn(t){if(t===rs)throw Error(C(174));return t}function Ju(t,e){switch(H(Bi,e),H(zi,t),H(mt,rs),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:va(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=va(e,t)}Q(mt),H(mt,e)}function Or(){Q(mt),Q(zi),Q(Bi)}function tm(t){Pn(Bi.current);var e=Pn(mt.current),n=va(e,t.type);e!==n&&(H(zi,t),H(mt,n))}function Zu(t){zi.current===t&&(Q(mt),Q(zi))}var J=_n(0);function mo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ul=[];function ec(){for(var t=0;t<Ul.length;t++)Ul[t]._workInProgressVersionPrimary=null;Ul.length=0}var Bs=Ut.ReactCurrentDispatcher,zl=Ut.ReactCurrentBatchConfig,zn=0,Z=null,oe=null,de=null,go=!1,wi=!1,Wi=0,_0=0;function ye(){throw Error(C(321))}function tc(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!at(t[n],e[n]))return!1;return!0}function nc(t,e,n,r,i,s){if(zn=s,Z=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Bs.current=t===null||t.memoizedState===null?S0:C0,t=n(r,i),wi){s=0;do{if(wi=!1,Wi=0,25<=s)throw Error(C(301));s+=1,de=oe=null,e.updateQueue=null,Bs.current=k0,t=n(r,i)}while(wi)}if(Bs.current=vo,e=oe!==null&&oe.next!==null,zn=0,de=oe=Z=null,go=!1,e)throw Error(C(300));return t}function rc(){var t=Wi!==0;return Wi=0,t}function dt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return de===null?Z.memoizedState=de=t:de=de.next=t,de}function Qe(){if(oe===null){var t=Z.alternate;t=t!==null?t.memoizedState:null}else t=oe.next;var e=de===null?Z.memoizedState:de.next;if(e!==null)de=e,oe=t;else{if(t===null)throw Error(C(310));oe=t,t={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},de===null?Z.memoizedState=de=t:de=de.next=t}return de}function $i(t,e){return typeof e=="function"?e(t):e}function Bl(t){var e=Qe(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=oe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var h=u.lane;if((zn&h)===h)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=d,o=r):a=a.next=d,Z.lanes|=h,Bn|=h}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,at(r,e.memoizedState)||(Ae=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Z.lanes|=s,Bn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Wl(t){var e=Qe(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);at(s,e.memoizedState)||(Ae=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function nm(){}function rm(t,e){var n=Z,r=Qe(),i=e(),s=!at(r.memoizedState,i);if(s&&(r.memoizedState=i,Ae=!0),r=r.queue,ic(om.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||de!==null&&de.memoizedState.tag&1){if(n.flags|=2048,Hi(9,sm.bind(null,n,r,i,e),void 0,null),fe===null)throw Error(C(349));zn&30||im(n,e,i)}return i}function im(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Z.updateQueue,e===null?(e={lastEffect:null,stores:null},Z.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function sm(t,e,n,r){e.value=n,e.getSnapshot=r,lm(e)&&am(t)}function om(t,e,n){return n(function(){lm(e)&&am(t)})}function lm(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!at(t,n)}catch{return!0}}function am(t){var e=Ot(t,1);e!==null&&st(e,t,1,-1)}function qd(t){var e=dt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:t},e.queue=t,t=t.dispatch=E0.bind(null,Z,t),[e.memoizedState,t]}function Hi(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Z.updateQueue,e===null?(e={lastEffect:null,stores:null},Z.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function um(){return Qe().memoizedState}function Ws(t,e,n,r){var i=dt();Z.flags|=t,i.memoizedState=Hi(1|e,n,void 0,r===void 0?null:r)}function qo(t,e,n,r){var i=Qe();r=r===void 0?null:r;var s=void 0;if(oe!==null){var o=oe.memoizedState;if(s=o.destroy,r!==null&&tc(r,o.deps)){i.memoizedState=Hi(e,n,s,r);return}}Z.flags|=t,i.memoizedState=Hi(1|e,n,s,r)}function Xd(t,e){return Ws(8390656,8,t,e)}function ic(t,e){return qo(2048,8,t,e)}function cm(t,e){return qo(4,2,t,e)}function dm(t,e){return qo(4,4,t,e)}function hm(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function fm(t,e,n){return n=n!=null?n.concat([t]):null,qo(4,4,hm.bind(null,e,t),n)}function sc(){}function pm(t,e){var n=Qe();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&tc(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function mm(t,e){var n=Qe();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&tc(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function gm(t,e,n){return zn&21?(at(n,e)||(n=Ep(),Z.lanes|=n,Bn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ae=!0),t.memoizedState=n)}function y0(t,e){var n=B;B=n!==0&&4>n?n:4,t(!0);var r=zl.transition;zl.transition={};try{t(!1),e()}finally{B=n,zl.transition=r}}function vm(){return Qe().memoizedState}function w0(t,e,n){var r=ln(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},_m(t))ym(e,n);else if(n=Zp(t,e,n,r),n!==null){var i=Te();st(n,t,r,i),wm(n,e,r)}}function E0(t,e,n){var r=ln(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(_m(t))ym(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,at(l,o)){var a=e.interleaved;a===null?(i.next=i,qu(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=Zp(t,e,i,r),n!==null&&(i=Te(),st(n,t,r,i),wm(n,e,r))}}function _m(t){var e=t.alternate;return t===Z||e!==null&&e===Z}function ym(t,e){wi=go=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function wm(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Mu(t,n)}}var vo={readContext:Ye,useCallback:ye,useContext:ye,useEffect:ye,useImperativeHandle:ye,useInsertionEffect:ye,useLayoutEffect:ye,useMemo:ye,useReducer:ye,useRef:ye,useState:ye,useDebugValue:ye,useDeferredValue:ye,useTransition:ye,useMutableSource:ye,useSyncExternalStore:ye,useId:ye,unstable_isNewReconciler:!1},S0={readContext:Ye,useCallback:function(t,e){return dt().memoizedState=[t,e===void 0?null:e],t},useContext:Ye,useEffect:Xd,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ws(4194308,4,hm.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ws(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ws(4,2,t,e)},useMemo:function(t,e){var n=dt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=dt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=w0.bind(null,Z,t),[r.memoizedState,t]},useRef:function(t){var e=dt();return t={current:t},e.memoizedState=t},useState:qd,useDebugValue:sc,useDeferredValue:function(t){return dt().memoizedState=t},useTransition:function(){var t=qd(!1),e=t[0];return t=y0.bind(null,t[1]),dt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Z,i=dt();if(X){if(n===void 0)throw Error(C(407));n=n()}else{if(n=e(),fe===null)throw Error(C(349));zn&30||im(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Xd(om.bind(null,r,s,t),[t]),r.flags|=2048,Hi(9,sm.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=dt(),e=fe.identifierPrefix;if(X){var n=St,r=Et;n=(r&~(1<<32-it(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Wi++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=_0++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},C0={readContext:Ye,useCallback:pm,useContext:Ye,useEffect:ic,useImperativeHandle:fm,useInsertionEffect:cm,useLayoutEffect:dm,useMemo:mm,useReducer:Bl,useRef:um,useState:function(){return Bl($i)},useDebugValue:sc,useDeferredValue:function(t){var e=Qe();return gm(e,oe.memoizedState,t)},useTransition:function(){var t=Bl($i)[0],e=Qe().memoizedState;return[t,e]},useMutableSource:nm,useSyncExternalStore:rm,useId:vm,unstable_isNewReconciler:!1},k0={readContext:Ye,useCallback:pm,useContext:Ye,useEffect:ic,useImperativeHandle:fm,useInsertionEffect:cm,useLayoutEffect:dm,useMemo:mm,useReducer:Wl,useRef:um,useState:function(){return Wl($i)},useDebugValue:sc,useDeferredValue:function(t){var e=Qe();return oe===null?e.memoizedState=t:gm(e,oe.memoizedState,t)},useTransition:function(){var t=Wl($i)[0],e=Qe().memoizedState;return[t,e]},useMutableSource:nm,useSyncExternalStore:rm,useId:vm,unstable_isNewReconciler:!1};function Ze(t,e){if(t&&t.defaultProps){e=ee({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Fa(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ee({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Xo={isMounted:function(t){return(t=t._reactInternals)?Yn(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Te(),i=ln(t),s=Nt(r,i);s.payload=e,n!=null&&(s.callback=n),e=sn(t,s,i),e!==null&&(st(e,t,i,r),zs(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Te(),i=ln(t),s=Nt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=sn(t,s,i),e!==null&&(st(e,t,i,r),zs(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Te(),r=ln(t),i=Nt(n,r);i.tag=2,e!=null&&(i.callback=e),e=sn(t,i,r),e!==null&&(st(e,t,r,n),zs(e,t,r))}};function Jd(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Mi(n,r)||!Mi(i,s):!0}function Em(t,e,n){var r=!1,i=mn,s=e.contextType;return typeof s=="object"&&s!==null?s=Ye(s):(i=De(e)?Fn:ke.current,r=e.contextTypes,s=(r=r!=null)?Rr(t,i):mn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Xo,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Zd(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Xo.enqueueReplaceState(e,e.state,null)}function Ua(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Xu(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ye(s):(s=De(e)?Fn:ke.current,i.context=Rr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Fa(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Xo.enqueueReplaceState(i,i.state,null),po(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function br(t,e){try{var n="",r=e;do n+=J_(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function $l(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function za(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var I0=typeof WeakMap=="function"?WeakMap:Map;function Sm(t,e,n){n=Nt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){yo||(yo=!0,qa=r),za(t,e)},n}function Cm(t,e,n){n=Nt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){za(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){za(t,e),typeof r!="function"&&(on===null?on=new Set([this]):on.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function eh(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new I0;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=U0.bind(null,t,e,n),e.then(t,t))}function th(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function nh(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Nt(-1,1),e.tag=2,sn(n,e,1))),n.lanes|=1),t)}var T0=Ut.ReactCurrentOwner,Ae=!1;function Ie(t,e,n,r){e.child=t===null?Jp(e,null,n,r):Ar(e,t.child,n,r)}function rh(t,e,n,r,i){n=n.render;var s=e.ref;return Er(e,i),r=nc(t,e,n,r,s,i),n=rc(),t!==null&&!Ae?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,bt(t,e,i)):(X&&n&&Hu(e),e.flags|=1,Ie(t,e,r,i),e.child)}function ih(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!fc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,km(t,e,s,r,i)):(t=Gs(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Mi,n(o,r)&&t.ref===e.ref)return bt(t,e,i)}return e.flags|=1,t=an(s,r),t.ref=e.ref,t.return=e,e.child=t}function km(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Mi(s,r)&&t.ref===e.ref)if(Ae=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ae=!0);else return e.lanes=t.lanes,bt(t,e,i)}return Ba(t,e,n,r,i)}function Im(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},H(mr,je),je|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,H(mr,je),je|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,H(mr,je),je|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,H(mr,je),je|=r;return Ie(t,e,i,n),e.child}function Tm(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ba(t,e,n,r,i){var s=De(n)?Fn:ke.current;return s=Rr(e,s),Er(e,i),n=nc(t,e,n,r,s,i),r=rc(),t!==null&&!Ae?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,bt(t,e,i)):(X&&r&&Hu(e),e.flags|=1,Ie(t,e,n,i),e.child)}function sh(t,e,n,r,i){if(De(n)){var s=!0;ao(e)}else s=!1;if(Er(e,i),e.stateNode===null)$s(t,e),Em(e,n,r),Ua(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ye(u):(u=De(n)?Fn:ke.current,u=Rr(e,u));var h=n.getDerivedStateFromProps,d=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&Zd(e,o,r,u),Vt=!1;var f=e.memoizedState;o.state=f,po(e,r,o,i),a=e.memoizedState,l!==r||f!==a||be.current||Vt?(typeof h=="function"&&(Fa(e,n,h,r),a=e.memoizedState),(l=Vt||Jd(e,n,l,r,f,a,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,em(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:Ze(e.type,l),o.props=u,d=e.pendingProps,f=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ye(a):(a=De(n)?Fn:ke.current,a=Rr(e,a));var w=n.getDerivedStateFromProps;(h=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==d||f!==a)&&Zd(e,o,r,a),Vt=!1,f=e.memoizedState,o.state=f,po(e,r,o,i);var v=e.memoizedState;l!==d||f!==v||be.current||Vt?(typeof w=="function"&&(Fa(e,n,w,r),v=e.memoizedState),(u=Vt||Jd(e,n,u,r,f,v,a)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Wa(t,e,n,r,s,i)}function Wa(t,e,n,r,i,s){Tm(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Hd(e,n,!1),bt(t,e,s);r=e.stateNode,T0.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ar(e,t.child,null,s),e.child=Ar(e,null,l,s)):Ie(t,e,l,s),e.memoizedState=r.state,i&&Hd(e,n,!0),e.child}function xm(t){var e=t.stateNode;e.pendingContext?$d(t,e.pendingContext,e.pendingContext!==e.context):e.context&&$d(t,e.context,!1),Ju(t,e.containerInfo)}function oh(t,e,n,r,i){return Pr(),Gu(i),e.flags|=256,Ie(t,e,n,r),e.child}var $a={dehydrated:null,treeContext:null,retryLane:0};function Ha(t){return{baseLanes:t,cachePool:null,transitions:null}}function Nm(t,e,n){var r=e.pendingProps,i=J.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),H(J,i&1),t===null)return Ma(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=el(o,r,0,null),t=Ln(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ha(n),e.memoizedState=$a,t):oc(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return x0(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=an(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=an(l,s):(s=Ln(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Ha(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=$a,r}return s=t.child,t=s.sibling,r=an(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function oc(t,e){return e=el({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function xs(t,e,n,r){return r!==null&&Gu(r),Ar(e,t.child,null,n),t=oc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function x0(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=$l(Error(C(422))),xs(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=el({mode:"visible",children:r.children},i,0,null),s=Ln(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ar(e,t.child,null,o),e.child.memoizedState=Ha(o),e.memoizedState=$a,s);if(!(e.mode&1))return xs(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(C(419)),r=$l(s,r,void 0),xs(t,e,o,r)}if(l=(o&t.childLanes)!==0,Ae||l){if(r=fe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Ot(t,i),st(r,t,i,-1))}return hc(),r=$l(Error(C(421))),xs(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=z0.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Fe=rn(i.nextSibling),Ue=e,X=!0,tt=null,t!==null&&($e[He++]=Et,$e[He++]=St,$e[He++]=Un,Et=t.id,St=t.overflow,Un=e),e=oc(e,r.children),e.flags|=4096,e)}function lh(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),ja(t.return,e,n)}function Hl(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Rm(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ie(t,e,r.children,n),r=J.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&lh(t,n,e);else if(t.tag===19)lh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(H(J,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&mo(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Hl(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&mo(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Hl(e,!0,n,null,s);break;case"together":Hl(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function $s(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function bt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Bn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(C(153));if(e.child!==null){for(t=e.child,n=an(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=an(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function N0(t,e,n){switch(e.tag){case 3:xm(e),Pr();break;case 5:tm(e);break;case 1:De(e.type)&&ao(e);break;case 4:Ju(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;H(ho,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(H(J,J.current&1),e.flags|=128,null):n&e.child.childLanes?Nm(t,e,n):(H(J,J.current&1),t=bt(t,e,n),t!==null?t.sibling:null);H(J,J.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Rm(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),H(J,J.current),r)break;return null;case 22:case 23:return e.lanes=0,Im(t,e,n)}return bt(t,e,n)}var Pm,Va,Am,Om;Pm=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Va=function(){};Am=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Pn(mt.current);var s=null;switch(n){case"input":i=fa(t,i),r=fa(t,r),s=[];break;case"select":i=ee({},i,{value:void 0}),r=ee({},r,{value:void 0}),s=[];break;case"textarea":i=ga(t,i),r=ga(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=oo)}_a(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ri.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ri.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&G("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Om=function(t,e,n,r){n!==r&&(e.flags|=4)};function si(t,e){if(!X)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function we(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function R0(t,e,n){var r=e.pendingProps;switch(Vu(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return we(e),null;case 1:return De(e.type)&&lo(),we(e),null;case 3:return r=e.stateNode,Or(),Q(be),Q(ke),ec(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Is(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,tt!==null&&(Za(tt),tt=null))),Va(t,e),we(e),null;case 5:Zu(e);var i=Pn(Bi.current);if(n=e.type,t!==null&&e.stateNode!=null)Am(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(C(166));return we(e),null}if(t=Pn(mt.current),Is(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[ht]=e,r[Ui]=s,t=(e.mode&1)!==0,n){case"dialog":G("cancel",r),G("close",r);break;case"iframe":case"object":case"embed":G("load",r);break;case"video":case"audio":for(i=0;i<pi.length;i++)G(pi[i],r);break;case"source":G("error",r);break;case"img":case"image":case"link":G("error",r),G("load",r);break;case"details":G("toggle",r);break;case"input":gd(r,s),G("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},G("invalid",r);break;case"textarea":_d(r,s),G("invalid",r)}_a(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&ks(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&ks(r.textContent,l,t),i=["children",""+l]):Ri.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&G("scroll",r)}switch(n){case"input":gs(r),vd(r,s,!0);break;case"textarea":gs(r),yd(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=oo)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=op(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[ht]=e,t[Ui]=r,Pm(t,e,!1,!1),e.stateNode=t;e:{switch(o=ya(n,r),n){case"dialog":G("cancel",t),G("close",t),i=r;break;case"iframe":case"object":case"embed":G("load",t),i=r;break;case"video":case"audio":for(i=0;i<pi.length;i++)G(pi[i],t);i=r;break;case"source":G("error",t),i=r;break;case"img":case"image":case"link":G("error",t),G("load",t),i=r;break;case"details":G("toggle",t),i=r;break;case"input":gd(t,r),i=fa(t,r),G("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ee({},r,{value:void 0}),G("invalid",t);break;case"textarea":_d(t,r),i=ga(t,r),G("invalid",t);break;default:i=r}_a(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?up(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&lp(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Pi(t,a):typeof a=="number"&&Pi(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ri.hasOwnProperty(s)?a!=null&&s==="onScroll"&&G("scroll",t):a!=null&&Pu(t,s,a,o))}switch(n){case"input":gs(t),vd(t,r,!1);break;case"textarea":gs(t),yd(t);break;case"option":r.value!=null&&t.setAttribute("value",""+pn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?vr(t,!!r.multiple,s,!1):r.defaultValue!=null&&vr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=oo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return we(e),null;case 6:if(t&&e.stateNode!=null)Om(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(C(166));if(n=Pn(Bi.current),Pn(mt.current),Is(e)){if(r=e.stateNode,n=e.memoizedProps,r[ht]=e,(s=r.nodeValue!==n)&&(t=Ue,t!==null))switch(t.tag){case 3:ks(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ks(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ht]=e,e.stateNode=r}return we(e),null;case 13:if(Q(J),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(X&&Fe!==null&&e.mode&1&&!(e.flags&128))qp(),Pr(),e.flags|=98560,s=!1;else if(s=Is(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(C(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(C(317));s[ht]=e}else Pr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;we(e),s=!1}else tt!==null&&(Za(tt),tt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||J.current&1?ae===0&&(ae=3):hc())),e.updateQueue!==null&&(e.flags|=4),we(e),null);case 4:return Or(),Va(t,e),t===null&&ji(e.stateNode.containerInfo),we(e),null;case 10:return Qu(e.type._context),we(e),null;case 17:return De(e.type)&&lo(),we(e),null;case 19:if(Q(J),s=e.memoizedState,s===null)return we(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)si(s,!1);else{if(ae!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=mo(t),o!==null){for(e.flags|=128,si(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return H(J,J.current&1|2),e.child}t=t.sibling}s.tail!==null&&re()>Dr&&(e.flags|=128,r=!0,si(s,!1),e.lanes=4194304)}else{if(!r)if(t=mo(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),si(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!X)return we(e),null}else 2*re()-s.renderingStartTime>Dr&&n!==1073741824&&(e.flags|=128,r=!0,si(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=re(),e.sibling=null,n=J.current,H(J,r?n&1|2:n&1),e):(we(e),null);case 22:case 23:return dc(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?je&1073741824&&(we(e),e.subtreeFlags&6&&(e.flags|=8192)):we(e),null;case 24:return null;case 25:return null}throw Error(C(156,e.tag))}function P0(t,e){switch(Vu(e),e.tag){case 1:return De(e.type)&&lo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Or(),Q(be),Q(ke),ec(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Zu(e),null;case 13:if(Q(J),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(C(340));Pr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Q(J),null;case 4:return Or(),null;case 10:return Qu(e.type._context),null;case 22:case 23:return dc(),null;case 24:return null;default:return null}}var Ns=!1,Ee=!1,A0=typeof WeakSet=="function"?WeakSet:Set,T=null;function pr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){te(t,e,r)}else n.current=null}function Ga(t,e,n){try{n()}catch(r){te(t,e,r)}}var ah=!1;function O0(t,e){if(Ra=ro,t=jp(),$u(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,h=0,d=t,f=null;t:for(;;){for(var w;d!==n||i!==0&&d.nodeType!==3||(l=o+i),d!==s||r!==0&&d.nodeType!==3||(a=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(w=d.firstChild)!==null;)f=d,d=w;for(;;){if(d===t)break t;if(f===n&&++u===i&&(l=o),f===s&&++h===r&&(a=o),(w=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=w}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Pa={focusedElem:t,selectionRange:n},ro=!1,T=e;T!==null;)if(e=T,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,T=t;else for(;T!==null;){e=T;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var g=v.memoizedProps,y=v.memoizedState,m=e.stateNode,p=m.getSnapshotBeforeUpdate(e.elementType===e.type?g:Ze(e.type,g),y);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(E){te(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,T=t;break}T=e.return}return v=ah,ah=!1,v}function Ei(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ga(e,n,s)}i=i.next}while(i!==r)}}function Jo(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ka(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function bm(t){var e=t.alternate;e!==null&&(t.alternate=null,bm(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ht],delete e[Ui],delete e[ba],delete e[p0],delete e[m0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Dm(t){return t.tag===5||t.tag===3||t.tag===4}function uh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Dm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ya(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=oo));else if(r!==4&&(t=t.child,t!==null))for(Ya(t,e,n),t=t.sibling;t!==null;)Ya(t,e,n),t=t.sibling}function Qa(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Qa(t,e,n),t=t.sibling;t!==null;)Qa(t,e,n),t=t.sibling}var pe=null,et=!1;function Bt(t,e,n){for(n=n.child;n!==null;)Lm(t,e,n),n=n.sibling}function Lm(t,e,n){if(pt&&typeof pt.onCommitFiberUnmount=="function")try{pt.onCommitFiberUnmount(Ho,n)}catch{}switch(n.tag){case 5:Ee||pr(n,e);case 6:var r=pe,i=et;pe=null,Bt(t,e,n),pe=r,et=i,pe!==null&&(et?(t=pe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):pe.removeChild(n.stateNode));break;case 18:pe!==null&&(et?(t=pe,n=n.stateNode,t.nodeType===8?jl(t.parentNode,n):t.nodeType===1&&jl(t,n),Di(t)):jl(pe,n.stateNode));break;case 4:r=pe,i=et,pe=n.stateNode.containerInfo,et=!0,Bt(t,e,n),pe=r,et=i;break;case 0:case 11:case 14:case 15:if(!Ee&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ga(n,e,o),i=i.next}while(i!==r)}Bt(t,e,n);break;case 1:if(!Ee&&(pr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){te(n,e,l)}Bt(t,e,n);break;case 21:Bt(t,e,n);break;case 22:n.mode&1?(Ee=(r=Ee)||n.memoizedState!==null,Bt(t,e,n),Ee=r):Bt(t,e,n);break;default:Bt(t,e,n)}}function ch(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new A0),e.forEach(function(r){var i=B0.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Je(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:pe=l.stateNode,et=!1;break e;case 3:pe=l.stateNode.containerInfo,et=!0;break e;case 4:pe=l.stateNode.containerInfo,et=!0;break e}l=l.return}if(pe===null)throw Error(C(160));Lm(s,o,i),pe=null,et=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){te(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Mm(e,t),e=e.sibling}function Mm(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Je(e,t),ct(t),r&4){try{Ei(3,t,t.return),Jo(3,t)}catch(g){te(t,t.return,g)}try{Ei(5,t,t.return)}catch(g){te(t,t.return,g)}}break;case 1:Je(e,t),ct(t),r&512&&n!==null&&pr(n,n.return);break;case 5:if(Je(e,t),ct(t),r&512&&n!==null&&pr(n,n.return),t.flags&32){var i=t.stateNode;try{Pi(i,"")}catch(g){te(t,t.return,g)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&ip(i,s),ya(l,o);var u=ya(l,s);for(o=0;o<a.length;o+=2){var h=a[o],d=a[o+1];h==="style"?up(i,d):h==="dangerouslySetInnerHTML"?lp(i,d):h==="children"?Pi(i,d):Pu(i,h,d,u)}switch(l){case"input":pa(i,s);break;case"textarea":sp(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var w=s.value;w!=null?vr(i,!!s.multiple,w,!1):f!==!!s.multiple&&(s.defaultValue!=null?vr(i,!!s.multiple,s.defaultValue,!0):vr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ui]=s}catch(g){te(t,t.return,g)}}break;case 6:if(Je(e,t),ct(t),r&4){if(t.stateNode===null)throw Error(C(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(g){te(t,t.return,g)}}break;case 3:if(Je(e,t),ct(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Di(e.containerInfo)}catch(g){te(t,t.return,g)}break;case 4:Je(e,t),ct(t);break;case 13:Je(e,t),ct(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(uc=re())),r&4&&ch(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Ee=(u=Ee)||h,Je(e,t),Ee=u):Je(e,t),ct(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(T=t,h=t.child;h!==null;){for(d=T=h;T!==null;){switch(f=T,w=f.child,f.tag){case 0:case 11:case 14:case 15:Ei(4,f,f.return);break;case 1:pr(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(g){te(r,n,g)}}break;case 5:pr(f,f.return);break;case 22:if(f.memoizedState!==null){hh(d);continue}}w!==null?(w.return=f,T=w):hh(d)}h=h.sibling}e:for(h=null,d=t;;){if(d.tag===5){if(h===null){h=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=d.stateNode,a=d.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=ap("display",o))}catch(g){te(t,t.return,g)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(g){te(t,t.return,g)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Je(e,t),ct(t),r&4&&ch(t);break;case 21:break;default:Je(e,t),ct(t)}}function ct(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Dm(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Pi(i,""),r.flags&=-33);var s=uh(t);Qa(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=uh(t);Ya(t,l,o);break;default:throw Error(C(161))}}catch(a){te(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function b0(t,e,n){T=t,jm(t)}function jm(t,e,n){for(var r=(t.mode&1)!==0;T!==null;){var i=T,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ns;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Ee;l=Ns;var u=Ee;if(Ns=o,(Ee=a)&&!u)for(T=i;T!==null;)o=T,a=o.child,o.tag===22&&o.memoizedState!==null?fh(i):a!==null?(a.return=o,T=a):fh(i);for(;s!==null;)T=s,jm(s),s=s.sibling;T=i,Ns=l,Ee=u}dh(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,T=s):dh(t)}}function dh(t){for(;T!==null;){var e=T;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ee||Jo(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ee)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Ze(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Qd(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Qd(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&Di(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}Ee||e.flags&512&&Ka(e)}catch(f){te(e,e.return,f)}}if(e===t){T=null;break}if(n=e.sibling,n!==null){n.return=e.return,T=n;break}T=e.return}}function hh(t){for(;T!==null;){var e=T;if(e===t){T=null;break}var n=e.sibling;if(n!==null){n.return=e.return,T=n;break}T=e.return}}function fh(t){for(;T!==null;){var e=T;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Jo(4,e)}catch(a){te(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){te(e,i,a)}}var s=e.return;try{Ka(e)}catch(a){te(e,s,a)}break;case 5:var o=e.return;try{Ka(e)}catch(a){te(e,o,a)}}}catch(a){te(e,e.return,a)}if(e===t){T=null;break}var l=e.sibling;if(l!==null){l.return=e.return,T=l;break}T=e.return}}var D0=Math.ceil,_o=Ut.ReactCurrentDispatcher,lc=Ut.ReactCurrentOwner,Ke=Ut.ReactCurrentBatchConfig,U=0,fe=null,ie=null,ve=0,je=0,mr=_n(0),ae=0,Vi=null,Bn=0,Zo=0,ac=0,Si=null,Pe=null,uc=0,Dr=1/0,_t=null,yo=!1,qa=null,on=null,Rs=!1,Jt=null,wo=0,Ci=0,Xa=null,Hs=-1,Vs=0;function Te(){return U&6?re():Hs!==-1?Hs:Hs=re()}function ln(t){return t.mode&1?U&2&&ve!==0?ve&-ve:v0.transition!==null?(Vs===0&&(Vs=Ep()),Vs):(t=B,t!==0||(t=window.event,t=t===void 0?16:Np(t.type)),t):1}function st(t,e,n,r){if(50<Ci)throw Ci=0,Xa=null,Error(C(185));es(t,n,r),(!(U&2)||t!==fe)&&(t===fe&&(!(U&2)&&(Zo|=n),ae===4&&Kt(t,ve)),Le(t,r),n===1&&U===0&&!(e.mode&1)&&(Dr=re()+500,Qo&&yn()))}function Le(t,e){var n=t.callbackNode;vy(t,e);var r=no(t,t===fe?ve:0);if(r===0)n!==null&&Sd(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Sd(n),e===1)t.tag===0?g0(ph.bind(null,t)):Kp(ph.bind(null,t)),h0(function(){!(U&6)&&yn()}),n=null;else{switch(Sp(r)){case 1:n=Lu;break;case 4:n=yp;break;case 16:n=to;break;case 536870912:n=wp;break;default:n=to}n=Vm(n,Fm.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Fm(t,e){if(Hs=-1,Vs=0,U&6)throw Error(C(327));var n=t.callbackNode;if(Sr()&&t.callbackNode!==n)return null;var r=no(t,t===fe?ve:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Eo(t,r);else{e=r;var i=U;U|=2;var s=zm();(fe!==t||ve!==e)&&(_t=null,Dr=re()+500,Dn(t,e));do try{j0();break}catch(l){Um(t,l)}while(!0);Yu(),_o.current=s,U=i,ie!==null?e=0:(fe=null,ve=0,e=ae)}if(e!==0){if(e===2&&(i=ka(t),i!==0&&(r=i,e=Ja(t,i))),e===1)throw n=Vi,Dn(t,0),Kt(t,r),Le(t,re()),n;if(e===6)Kt(t,r);else{if(i=t.current.alternate,!(r&30)&&!L0(i)&&(e=Eo(t,r),e===2&&(s=ka(t),s!==0&&(r=s,e=Ja(t,s))),e===1))throw n=Vi,Dn(t,0),Kt(t,r),Le(t,re()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(C(345));case 2:kn(t,Pe,_t);break;case 3:if(Kt(t,r),(r&130023424)===r&&(e=uc+500-re(),10<e)){if(no(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Te(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Oa(kn.bind(null,t,Pe,_t),e);break}kn(t,Pe,_t);break;case 4:if(Kt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-it(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*D0(r/1960))-r,10<r){t.timeoutHandle=Oa(kn.bind(null,t,Pe,_t),r);break}kn(t,Pe,_t);break;case 5:kn(t,Pe,_t);break;default:throw Error(C(329))}}}return Le(t,re()),t.callbackNode===n?Fm.bind(null,t):null}function Ja(t,e){var n=Si;return t.current.memoizedState.isDehydrated&&(Dn(t,e).flags|=256),t=Eo(t,e),t!==2&&(e=Pe,Pe=n,e!==null&&Za(e)),t}function Za(t){Pe===null?Pe=t:Pe.push.apply(Pe,t)}function L0(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!at(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Kt(t,e){for(e&=~ac,e&=~Zo,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-it(e),r=1<<n;t[n]=-1,e&=~r}}function ph(t){if(U&6)throw Error(C(327));Sr();var e=no(t,0);if(!(e&1))return Le(t,re()),null;var n=Eo(t,e);if(t.tag!==0&&n===2){var r=ka(t);r!==0&&(e=r,n=Ja(t,r))}if(n===1)throw n=Vi,Dn(t,0),Kt(t,e),Le(t,re()),n;if(n===6)throw Error(C(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,kn(t,Pe,_t),Le(t,re()),null}function cc(t,e){var n=U;U|=1;try{return t(e)}finally{U=n,U===0&&(Dr=re()+500,Qo&&yn())}}function Wn(t){Jt!==null&&Jt.tag===0&&!(U&6)&&Sr();var e=U;U|=1;var n=Ke.transition,r=B;try{if(Ke.transition=null,B=1,t)return t()}finally{B=r,Ke.transition=n,U=e,!(U&6)&&yn()}}function dc(){je=mr.current,Q(mr)}function Dn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,d0(n)),ie!==null)for(n=ie.return;n!==null;){var r=n;switch(Vu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&lo();break;case 3:Or(),Q(be),Q(ke),ec();break;case 5:Zu(r);break;case 4:Or();break;case 13:Q(J);break;case 19:Q(J);break;case 10:Qu(r.type._context);break;case 22:case 23:dc()}n=n.return}if(fe=t,ie=t=an(t.current,null),ve=je=e,ae=0,Vi=null,ac=Zo=Bn=0,Pe=Si=null,Rn!==null){for(e=0;e<Rn.length;e++)if(n=Rn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Rn=null}return t}function Um(t,e){do{var n=ie;try{if(Yu(),Bs.current=vo,go){for(var r=Z.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}go=!1}if(zn=0,de=oe=Z=null,wi=!1,Wi=0,lc.current=null,n===null||n.return===null){ae=1,Vi=e,ie=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=ve,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,h=l,d=h.tag;if(!(h.mode&1)&&(d===0||d===11||d===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var w=th(o);if(w!==null){w.flags&=-257,nh(w,o,l,s,e),w.mode&1&&eh(s,u,e),e=w,a=u;var v=e.updateQueue;if(v===null){var g=new Set;g.add(a),e.updateQueue=g}else v.add(a);break e}else{if(!(e&1)){eh(s,u,e),hc();break e}a=Error(C(426))}}else if(X&&l.mode&1){var y=th(o);if(y!==null){!(y.flags&65536)&&(y.flags|=256),nh(y,o,l,s,e),Gu(br(a,l));break e}}s=a=br(a,l),ae!==4&&(ae=2),Si===null?Si=[s]:Si.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=Sm(s,a,e);Yd(s,m);break e;case 1:l=a;var p=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(on===null||!on.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=Cm(s,l,e);Yd(s,E);break e}}s=s.return}while(s!==null)}Wm(n)}catch(I){e=I,ie===n&&n!==null&&(ie=n=n.return);continue}break}while(!0)}function zm(){var t=_o.current;return _o.current=vo,t===null?vo:t}function hc(){(ae===0||ae===3||ae===2)&&(ae=4),fe===null||!(Bn&268435455)&&!(Zo&268435455)||Kt(fe,ve)}function Eo(t,e){var n=U;U|=2;var r=zm();(fe!==t||ve!==e)&&(_t=null,Dn(t,e));do try{M0();break}catch(i){Um(t,i)}while(!0);if(Yu(),U=n,_o.current=r,ie!==null)throw Error(C(261));return fe=null,ve=0,ae}function M0(){for(;ie!==null;)Bm(ie)}function j0(){for(;ie!==null&&!ay();)Bm(ie)}function Bm(t){var e=Hm(t.alternate,t,je);t.memoizedProps=t.pendingProps,e===null?Wm(t):ie=e,lc.current=null}function Wm(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=P0(n,e),n!==null){n.flags&=32767,ie=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ae=6,ie=null;return}}else if(n=R0(n,e,je),n!==null){ie=n;return}if(e=e.sibling,e!==null){ie=e;return}ie=e=t}while(e!==null);ae===0&&(ae=5)}function kn(t,e,n){var r=B,i=Ke.transition;try{Ke.transition=null,B=1,F0(t,e,n,r)}finally{Ke.transition=i,B=r}return null}function F0(t,e,n,r){do Sr();while(Jt!==null);if(U&6)throw Error(C(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(C(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(_y(t,s),t===fe&&(ie=fe=null,ve=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Rs||(Rs=!0,Vm(to,function(){return Sr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ke.transition,Ke.transition=null;var o=B;B=1;var l=U;U|=4,lc.current=null,O0(t,n),Mm(n,t),i0(Pa),ro=!!Ra,Pa=Ra=null,t.current=n,b0(n),uy(),U=l,B=o,Ke.transition=s}else t.current=n;if(Rs&&(Rs=!1,Jt=t,wo=i),s=t.pendingLanes,s===0&&(on=null),hy(n.stateNode),Le(t,re()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(yo)throw yo=!1,t=qa,qa=null,t;return wo&1&&t.tag!==0&&Sr(),s=t.pendingLanes,s&1?t===Xa?Ci++:(Ci=0,Xa=t):Ci=0,yn(),null}function Sr(){if(Jt!==null){var t=Sp(wo),e=Ke.transition,n=B;try{if(Ke.transition=null,B=16>t?16:t,Jt===null)var r=!1;else{if(t=Jt,Jt=null,wo=0,U&6)throw Error(C(331));var i=U;for(U|=4,T=t.current;T!==null;){var s=T,o=s.child;if(T.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(T=u;T!==null;){var h=T;switch(h.tag){case 0:case 11:case 15:Ei(8,h,s)}var d=h.child;if(d!==null)d.return=h,T=d;else for(;T!==null;){h=T;var f=h.sibling,w=h.return;if(bm(h),h===u){T=null;break}if(f!==null){f.return=w,T=f;break}T=w}}}var v=s.alternate;if(v!==null){var g=v.child;if(g!==null){v.child=null;do{var y=g.sibling;g.sibling=null,g=y}while(g!==null)}}T=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,T=o;else e:for(;T!==null;){if(s=T,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ei(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,T=m;break e}T=s.return}}var p=t.current;for(T=p;T!==null;){o=T;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,T=_;else e:for(o=p;T!==null;){if(l=T,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Jo(9,l)}}catch(I){te(l,l.return,I)}if(l===o){T=null;break e}var E=l.sibling;if(E!==null){E.return=l.return,T=E;break e}T=l.return}}if(U=i,yn(),pt&&typeof pt.onPostCommitFiberRoot=="function")try{pt.onPostCommitFiberRoot(Ho,t)}catch{}r=!0}return r}finally{B=n,Ke.transition=e}}return!1}function mh(t,e,n){e=br(n,e),e=Sm(t,e,1),t=sn(t,e,1),e=Te(),t!==null&&(es(t,1,e),Le(t,e))}function te(t,e,n){if(t.tag===3)mh(t,t,n);else for(;e!==null;){if(e.tag===3){mh(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(on===null||!on.has(r))){t=br(n,t),t=Cm(e,t,1),e=sn(e,t,1),t=Te(),e!==null&&(es(e,1,t),Le(e,t));break}}e=e.return}}function U0(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Te(),t.pingedLanes|=t.suspendedLanes&n,fe===t&&(ve&n)===n&&(ae===4||ae===3&&(ve&130023424)===ve&&500>re()-uc?Dn(t,0):ac|=n),Le(t,e)}function $m(t,e){e===0&&(t.mode&1?(e=ys,ys<<=1,!(ys&130023424)&&(ys=4194304)):e=1);var n=Te();t=Ot(t,e),t!==null&&(es(t,e,n),Le(t,n))}function z0(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),$m(t,n)}function B0(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(e),$m(t,n)}var Hm;Hm=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||be.current)Ae=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ae=!1,N0(t,e,n);Ae=!!(t.flags&131072)}else Ae=!1,X&&e.flags&1048576&&Yp(e,co,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;$s(t,e),t=e.pendingProps;var i=Rr(e,ke.current);Er(e,n),i=nc(null,e,r,t,i,n);var s=rc();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,De(r)?(s=!0,ao(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Xu(e),i.updater=Xo,e.stateNode=i,i._reactInternals=e,Ua(e,r,t,n),e=Wa(null,e,r,!0,s,n)):(e.tag=0,X&&s&&Hu(e),Ie(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch($s(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=$0(r),t=Ze(r,t),i){case 0:e=Ba(null,e,r,t,n);break e;case 1:e=sh(null,e,r,t,n);break e;case 11:e=rh(null,e,r,t,n);break e;case 14:e=ih(null,e,r,Ze(r.type,t),n);break e}throw Error(C(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ze(r,i),Ba(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ze(r,i),sh(t,e,r,i,n);case 3:e:{if(xm(e),t===null)throw Error(C(387));r=e.pendingProps,s=e.memoizedState,i=s.element,em(t,e),po(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=br(Error(C(423)),e),e=oh(t,e,r,n,i);break e}else if(r!==i){i=br(Error(C(424)),e),e=oh(t,e,r,n,i);break e}else for(Fe=rn(e.stateNode.containerInfo.firstChild),Ue=e,X=!0,tt=null,n=Jp(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Pr(),r===i){e=bt(t,e,n);break e}Ie(t,e,r,n)}e=e.child}return e;case 5:return tm(e),t===null&&Ma(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Aa(r,i)?o=null:s!==null&&Aa(r,s)&&(e.flags|=32),Tm(t,e),Ie(t,e,o,n),e.child;case 6:return t===null&&Ma(e),null;case 13:return Nm(t,e,n);case 4:return Ju(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ar(e,null,r,n):Ie(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ze(r,i),rh(t,e,r,i,n);case 7:return Ie(t,e,e.pendingProps,n),e.child;case 8:return Ie(t,e,e.pendingProps.children,n),e.child;case 12:return Ie(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,H(ho,r._currentValue),r._currentValue=o,s!==null)if(at(s.value,o)){if(s.children===i.children&&!be.current){e=bt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=Nt(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?a.next=a:(a.next=h.next,h.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),ja(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(C(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),ja(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ie(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Er(e,n),i=Ye(i),r=r(i),e.flags|=1,Ie(t,e,r,n),e.child;case 14:return r=e.type,i=Ze(r,e.pendingProps),i=Ze(r.type,i),ih(t,e,r,i,n);case 15:return km(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ze(r,i),$s(t,e),e.tag=1,De(r)?(t=!0,ao(e)):t=!1,Er(e,n),Em(e,r,i),Ua(e,r,i,n),Wa(null,e,r,!0,t,n);case 19:return Rm(t,e,n);case 22:return Im(t,e,n)}throw Error(C(156,e.tag))};function Vm(t,e){return _p(t,e)}function W0(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ve(t,e,n,r){return new W0(t,e,n,r)}function fc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function $0(t){if(typeof t=="function")return fc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ou)return 11;if(t===bu)return 14}return 2}function an(t,e){var n=t.alternate;return n===null?(n=Ve(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Gs(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")fc(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case sr:return Ln(n.children,i,s,e);case Au:o=8,i|=8;break;case ua:return t=Ve(12,n,e,i|2),t.elementType=ua,t.lanes=s,t;case ca:return t=Ve(13,n,e,i),t.elementType=ca,t.lanes=s,t;case da:return t=Ve(19,n,e,i),t.elementType=da,t.lanes=s,t;case tp:return el(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Zf:o=10;break e;case ep:o=9;break e;case Ou:o=11;break e;case bu:o=14;break e;case Ht:o=16,r=null;break e}throw Error(C(130,t==null?t:typeof t,""))}return e=Ve(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ln(t,e,n,r){return t=Ve(7,t,r,e),t.lanes=n,t}function el(t,e,n,r){return t=Ve(22,t,r,e),t.elementType=tp,t.lanes=n,t.stateNode={isHidden:!1},t}function Vl(t,e,n){return t=Ve(6,t,null,e),t.lanes=n,t}function Gl(t,e,n){return e=Ve(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function H0(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Tl(0),this.expirationTimes=Tl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function pc(t,e,n,r,i,s,o,l,a){return t=new H0(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ve(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xu(s),t}function V0(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ir,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Gm(t){if(!t)return mn;t=t._reactInternals;e:{if(Yn(t)!==t||t.tag!==1)throw Error(C(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(De(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(C(171))}if(t.tag===1){var n=t.type;if(De(n))return Gp(t,n,e)}return e}function Km(t,e,n,r,i,s,o,l,a){return t=pc(n,r,!0,t,i,s,o,l,a),t.context=Gm(null),n=t.current,r=Te(),i=ln(n),s=Nt(r,i),s.callback=e??null,sn(n,s,i),t.current.lanes=i,es(t,i,r),Le(t,r),t}function tl(t,e,n,r){var i=e.current,s=Te(),o=ln(i);return n=Gm(n),e.context===null?e.context=n:e.pendingContext=n,e=Nt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=sn(i,e,o),t!==null&&(st(t,i,o,s),zs(t,i,o)),o}function So(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function gh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function mc(t,e){gh(t,e),(t=t.alternate)&&gh(t,e)}function G0(){return null}var Ym=typeof reportError=="function"?reportError:function(t){console.error(t)};function gc(t){this._internalRoot=t}nl.prototype.render=gc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(C(409));tl(t,e,null,null)};nl.prototype.unmount=gc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Wn(function(){tl(null,t,null,null)}),e[At]=null}};function nl(t){this._internalRoot=t}nl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ip();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Gt.length&&e!==0&&e<Gt[n].priority;n++);Gt.splice(n,0,t),n===0&&xp(t)}};function vc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function rl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function vh(){}function K0(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=So(o);s.call(u)}}var o=Km(e,r,t,0,null,!1,!1,"",vh);return t._reactRootContainer=o,t[At]=o.current,ji(t.nodeType===8?t.parentNode:t),Wn(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=So(a);l.call(u)}}var a=pc(t,0,!1,null,null,!1,!1,"",vh);return t._reactRootContainer=a,t[At]=a.current,ji(t.nodeType===8?t.parentNode:t),Wn(function(){tl(e,a,n,r)}),a}function il(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=So(o);l.call(a)}}tl(e,o,t,i)}else o=K0(n,e,t,i,r);return So(o)}Cp=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=fi(e.pendingLanes);n!==0&&(Mu(e,n|1),Le(e,re()),!(U&6)&&(Dr=re()+500,yn()))}break;case 13:Wn(function(){var r=Ot(t,1);if(r!==null){var i=Te();st(r,t,1,i)}}),mc(t,1)}};ju=function(t){if(t.tag===13){var e=Ot(t,134217728);if(e!==null){var n=Te();st(e,t,134217728,n)}mc(t,134217728)}};kp=function(t){if(t.tag===13){var e=ln(t),n=Ot(t,e);if(n!==null){var r=Te();st(n,t,e,r)}mc(t,e)}};Ip=function(){return B};Tp=function(t,e){var n=B;try{return B=t,e()}finally{B=n}};Ea=function(t,e,n){switch(e){case"input":if(pa(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Yo(r);if(!i)throw Error(C(90));rp(r),pa(r,i)}}}break;case"textarea":sp(t,n);break;case"select":e=n.value,e!=null&&vr(t,!!n.multiple,e,!1)}};hp=cc;fp=Wn;var Y0={usingClientEntryPoint:!1,Events:[ns,ur,Yo,cp,dp,cc]},oi={findFiberByHostInstance:Nn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Q0={bundleType:oi.bundleType,version:oi.version,rendererPackageName:oi.rendererPackageName,rendererConfig:oi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ut.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=gp(t),t===null?null:t.stateNode},findFiberByHostInstance:oi.findFiberByHostInstance||G0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ps=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ps.isDisabled&&Ps.supportsFiber)try{Ho=Ps.inject(Q0),pt=Ps}catch{}}Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y0;Be.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vc(e))throw Error(C(200));return V0(t,e,null,n)};Be.createRoot=function(t,e){if(!vc(t))throw Error(C(299));var n=!1,r="",i=Ym;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=pc(t,1,!1,null,null,n,!1,r,i),t[At]=e.current,ji(t.nodeType===8?t.parentNode:t),new gc(e)};Be.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(C(188)):(t=Object.keys(t).join(","),Error(C(268,t)));return t=gp(e),t=t===null?null:t.stateNode,t};Be.flushSync=function(t){return Wn(t)};Be.hydrate=function(t,e,n){if(!rl(e))throw Error(C(200));return il(null,t,e,!0,n)};Be.hydrateRoot=function(t,e,n){if(!vc(t))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Ym;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Km(e,null,t,1,n??null,i,!1,s,o),t[At]=e.current,ji(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new nl(e)};Be.render=function(t,e,n){if(!rl(e))throw Error(C(200));return il(null,t,e,!1,n)};Be.unmountComponentAtNode=function(t){if(!rl(t))throw Error(C(40));return t._reactRootContainer?(Wn(function(){il(null,null,t,!1,function(){t._reactRootContainer=null,t[At]=null})}),!0):!1};Be.unstable_batchedUpdates=cc;Be.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!rl(n))throw Error(C(200));if(t==null||t._reactInternals===void 0)throw Error(C(38));return il(t,e,n,!1,r)};Be.version="18.3.1-next-f1338f8080-20240426";function Qm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Qm)}catch(t){console.error(t)}}Qm(),Qf.exports=Be;var q0=Qf.exports,qm,_h=q0;qm=_h.createRoot,_h.hydrateRoot;/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gi(){return Gi=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Gi.apply(this,arguments)}var Zt;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Zt||(Zt={}));const yh="popstate";function X0(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:l="",hash:a=""}=Qn(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),eu("",{pathname:o,search:l,hash:a},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),l="";if(o&&o.getAttribute("href")){let a=i.location.href,u=a.indexOf("#");l=u===-1?a:a.slice(0,u)}return l+"#"+(typeof s=="string"?s:Co(s))}function r(i,s){_c(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return Z0(e,n,r,t)}function se(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function _c(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function J0(){return Math.random().toString(36).substr(2,8)}function wh(t,e){return{usr:t.state,key:t.key,idx:e}}function eu(t,e,n,r){return n===void 0&&(n=null),Gi({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Qn(e):e,{state:n,key:e&&e.key||r||J0()})}function Co(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Qn(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Z0(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=Zt.Pop,a=null,u=h();u==null&&(u=0,o.replaceState(Gi({},o.state,{idx:u}),""));function h(){return(o.state||{idx:null}).idx}function d(){l=Zt.Pop;let y=h(),m=y==null?null:y-u;u=y,a&&a({action:l,location:g.location,delta:m})}function f(y,m){l=Zt.Push;let p=eu(g.location,y,m);n&&n(p,y),u=h()+1;let _=wh(p,u),E=g.createHref(p);try{o.pushState(_,"",E)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;i.location.assign(E)}s&&a&&a({action:l,location:g.location,delta:1})}function w(y,m){l=Zt.Replace;let p=eu(g.location,y,m);n&&n(p,y),u=h();let _=wh(p,u),E=g.createHref(p);o.replaceState(_,"",E),s&&a&&a({action:l,location:g.location,delta:0})}function v(y){let m=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof y=="string"?y:Co(y);return p=p.replace(/ $/,"%20"),se(m,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,m)}let g={get action(){return l},get location(){return t(i,o)},listen(y){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(yh,d),a=y,()=>{i.removeEventListener(yh,d),a=null}},createHref(y){return e(i,y)},createURL:v,encodeLocation(y){let m=v(y);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:f,replace:w,go(y){return o.go(y)}};return g}var Eh;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Eh||(Eh={}));function ew(t,e,n){return n===void 0&&(n="/"),tw(t,e,n,!1)}function tw(t,e,n,r){let i=typeof e=="string"?Qn(e):e,s=yc(i.pathname||"/",n);if(s==null)return null;let o=Xm(t);nw(o);let l=null;for(let a=0;l==null&&a<o.length;++a){let u=fw(s);l=dw(o[a],u,r)}return l}function Xm(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let a={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};a.relativePath.startsWith("/")&&(se(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=un([r,a.relativePath]),h=n.concat(a);s.children&&s.children.length>0&&(se(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Xm(s.children,e,h,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:uw(u,s.index),routesMeta:h})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let a of Jm(s.path))i(s,o,a)}),e}function Jm(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Jm(r.join("/")),l=[];return l.push(...o.map(a=>a===""?s:[s,a].join("/"))),i&&l.push(...o),l.map(a=>t.startsWith("/")&&a===""?"/":a)}function nw(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:cw(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const rw=/^:[\w-]+$/,iw=3,sw=2,ow=1,lw=10,aw=-2,Sh=t=>t==="*";function uw(t,e){let n=t.split("/"),r=n.length;return n.some(Sh)&&(r+=aw),e&&(r+=sw),n.filter(i=>!Sh(i)).reduce((i,s)=>i+(rw.test(s)?iw:s===""?ow:lw),r)}function cw(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function dw(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let a=r[l],u=l===r.length-1,h=s==="/"?e:e.slice(s.length)||"/",d=Ch({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},h),f=a.route;if(!d&&u&&n&&!r[r.length-1].route.index&&(d=Ch({path:a.relativePath,caseSensitive:a.caseSensitive,end:!1},h)),!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:un([s,d.pathname]),pathnameBase:vw(un([s,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(s=un([s,d.pathnameBase]))}return o}function Ch(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=hw(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,h,d)=>{let{paramName:f,isOptional:w}=h;if(f==="*"){let g=l[d]||"";o=s.slice(0,s.length-g.length).replace(/(.)\/+$/,"$1")}const v=l[d];return w&&!v?u[f]=void 0:u[f]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function hw(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),_c(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,a)=>(r.push({paramName:l,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function fw(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return _c(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function yc(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function pw(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Qn(t):t;return{pathname:n?n.startsWith("/")?n:mw(n,e):e,search:_w(r),hash:yw(i)}}function mw(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Kl(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function gw(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Zm(t,e){let n=gw(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function eg(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Qn(t):(i=Gi({},t),se(!i.pathname||!i.pathname.includes("?"),Kl("?","pathname","search",i)),se(!i.pathname||!i.pathname.includes("#"),Kl("#","pathname","hash",i)),se(!i.search||!i.search.includes("#"),Kl("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let d=e.length-1;if(!r&&o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}l=d>=0?e[d]:"/"}let a=pw(i,l),u=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||h)&&(a.pathname+="/"),a}const un=t=>t.join("/").replace(/\/\/+/g,"/"),vw=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),_w=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,yw=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function ww(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const tg=["post","put","patch","delete"];new Set(tg);const Ew=["get",...tg];new Set(Ew);/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ki(){return Ki=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ki.apply(this,arguments)}const wc=S.createContext(null),Sw=S.createContext(null),qn=S.createContext(null),sl=S.createContext(null),Xn=S.createContext({outlet:null,matches:[],isDataRoute:!1}),ng=S.createContext(null);function Cw(t,e){let{relative:n}=e===void 0?{}:e;is()||se(!1);let{basename:r,navigator:i}=S.useContext(qn),{hash:s,pathname:o,search:l}=sg(t,{relative:n}),a=o;return r!=="/"&&(a=o==="/"?r:un([r,o])),i.createHref({pathname:a,search:l,hash:s})}function is(){return S.useContext(sl)!=null}function Jn(){return is()||se(!1),S.useContext(sl).location}function rg(t){S.useContext(qn).static||S.useLayoutEffect(t)}function ig(){let{isDataRoute:t}=S.useContext(Xn);return t?Mw():kw()}function kw(){is()||se(!1);let t=S.useContext(wc),{basename:e,future:n,navigator:r}=S.useContext(qn),{matches:i}=S.useContext(Xn),{pathname:s}=Jn(),o=JSON.stringify(Zm(i,n.v7_relativeSplatPath)),l=S.useRef(!1);return rg(()=>{l.current=!0}),S.useCallback(function(u,h){if(h===void 0&&(h={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let d=eg(u,JSON.parse(o),s,h.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:un([e,d.pathname])),(h.replace?r.replace:r.push)(d,h.state,h)},[e,r,o,s,t])}function sg(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=S.useContext(qn),{matches:i}=S.useContext(Xn),{pathname:s}=Jn(),o=JSON.stringify(Zm(i,r.v7_relativeSplatPath));return S.useMemo(()=>eg(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function Iw(t,e){return Tw(t,e)}function Tw(t,e,n,r){is()||se(!1);let{navigator:i}=S.useContext(qn),{matches:s}=S.useContext(Xn),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let u=Jn(),h;if(e){var d;let y=typeof e=="string"?Qn(e):e;a==="/"||(d=y.pathname)!=null&&d.startsWith(a)||se(!1),h=y}else h=u;let f=h.pathname||"/",w=f;if(a!=="/"){let y=a.replace(/^\//,"").split("/");w="/"+f.replace(/^\//,"").split("/").slice(y.length).join("/")}let v=ew(t,{pathname:w}),g=Aw(v&&v.map(y=>Object.assign({},y,{params:Object.assign({},l,y.params),pathname:un([a,i.encodeLocation?i.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?a:un([a,i.encodeLocation?i.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),s,n,r);return e&&g?S.createElement(sl.Provider,{value:{location:Ki({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:Zt.Pop}},g):g}function xw(){let t=Lw(),e=ww(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},e),n?S.createElement("pre",{style:i},n):null,null)}const Nw=S.createElement(xw,null);class Rw extends S.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?S.createElement(Xn.Provider,{value:this.props.routeContext},S.createElement(ng.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Pw(t){let{routeContext:e,match:n,children:r}=t,i=S.useContext(wc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(Xn.Provider,{value:e},r)}function Aw(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let h=o.findIndex(d=>d.route.id&&(l==null?void 0:l[d.route.id])!==void 0);h>=0||se(!1),o=o.slice(0,Math.min(o.length,h+1))}let a=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let d=o[h];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=h),d.route.id){let{loaderData:f,errors:w}=n,v=d.route.loader&&f[d.route.id]===void 0&&(!w||w[d.route.id]===void 0);if(d.route.lazy||v){a=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((h,d,f)=>{let w,v=!1,g=null,y=null;n&&(w=l&&d.route.id?l[d.route.id]:void 0,g=d.route.errorElement||Nw,a&&(u<0&&f===0?(v=!0,y=null):u===f&&(v=!0,y=d.route.hydrateFallbackElement||null)));let m=e.concat(o.slice(0,f+1)),p=()=>{let _;return w?_=g:v?_=y:d.route.Component?_=S.createElement(d.route.Component,null):d.route.element?_=d.route.element:_=h,S.createElement(Pw,{match:d,routeContext:{outlet:h,matches:m,isDataRoute:n!=null},children:_})};return n&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?S.createElement(Rw,{location:n.location,revalidation:n.revalidation,component:g,error:w,children:p(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):p()},null)}var og=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(og||{}),ko=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(ko||{});function Ow(t){let e=S.useContext(wc);return e||se(!1),e}function bw(t){let e=S.useContext(Sw);return e||se(!1),e}function Dw(t){let e=S.useContext(Xn);return e||se(!1),e}function lg(t){let e=Dw(),n=e.matches[e.matches.length-1];return n.route.id||se(!1),n.route.id}function Lw(){var t;let e=S.useContext(ng),n=bw(ko.UseRouteError),r=lg(ko.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function Mw(){let{router:t}=Ow(og.UseNavigateStable),e=lg(ko.UseNavigateStable),n=S.useRef(!1);return rg(()=>{n.current=!0}),S.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Ki({fromRouteId:e},s)))},[t,e])}function In(t){se(!1)}function jw(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Zt.Pop,navigator:s,static:o=!1,future:l}=t;is()&&se(!1);let a=e.replace(/^\/*/,"/"),u=S.useMemo(()=>({basename:a,navigator:s,static:o,future:Ki({v7_relativeSplatPath:!1},l)}),[a,l,s,o]);typeof r=="string"&&(r=Qn(r));let{pathname:h="/",search:d="",hash:f="",state:w=null,key:v="default"}=r,g=S.useMemo(()=>{let y=yc(h,a);return y==null?null:{location:{pathname:y,search:d,hash:f,state:w,key:v},navigationType:i}},[a,h,d,f,w,v,i]);return g==null?null:S.createElement(qn.Provider,{value:u},S.createElement(sl.Provider,{children:n,value:g}))}function Fw(t){let{children:e,location:n}=t;return Iw(tu(e),n)}new Promise(()=>{});function tu(t,e){e===void 0&&(e=[]);let n=[];return S.Children.forEach(t,(r,i)=>{if(!S.isValidElement(r))return;let s=[...e,i];if(r.type===S.Fragment){n.push.apply(n,tu(r.props.children,s));return}r.type!==In&&se(!1),!r.props.index||!r.props.children||se(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=tu(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function nu(){return nu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},nu.apply(this,arguments)}function Uw(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function zw(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Bw(t,e){return t.button===0&&(!e||e==="_self")&&!zw(t)}const Ww=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],$w="6";try{window.__reactRouterVersion=$w}catch{}const Hw="startTransition",kh=U_[Hw];function Vw(t){let{basename:e,children:n,future:r,window:i}=t,s=S.useRef();s.current==null&&(s.current=X0({window:i,v5Compat:!0}));let o=s.current,[l,a]=S.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},h=S.useCallback(d=>{u&&kh?kh(()=>a(d)):a(d)},[a,u]);return S.useLayoutEffect(()=>o.listen(h),[o,h]),S.createElement(jw,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const Gw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Kw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Wt=S.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:a,to:u,preventScrollReset:h,unstable_viewTransition:d}=e,f=Uw(e,Ww),{basename:w}=S.useContext(qn),v,g=!1;if(typeof u=="string"&&Kw.test(u)&&(v=u,Gw))try{let _=new URL(window.location.href),E=u.startsWith("//")?new URL(_.protocol+u):new URL(u),I=yc(E.pathname,w);E.origin===_.origin&&I!=null?u=I+E.search+E.hash:g=!0}catch{}let y=Cw(u,{relative:i}),m=Yw(u,{replace:o,state:l,target:a,preventScrollReset:h,relative:i,unstable_viewTransition:d});function p(_){r&&r(_),_.defaultPrevented||m(_)}return S.createElement("a",nu({},f,{href:v||y,onClick:g||s?r:p,ref:n,target:a}))});var Ih;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Ih||(Ih={}));var Th;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Th||(Th={}));function Yw(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l}=e===void 0?{}:e,a=ig(),u=Jn(),h=sg(t,{relative:o});return S.useCallback(d=>{if(Bw(d,n)){d.preventDefault();let f=r!==void 0?r:Co(u)===Co(h);a(t,{replace:f,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l})}},[u,a,h,r,i,n,t,s,o,l])}const Qw=()=>{var u;const[t,e]=S.useState("home/menu.png"),[n,r]=S.useState(!1),[i,s]=S.useState("Are you an Alumni?"),l=(u=Jn().state)==null?void 0:u.data;console.log("data",l);const a=()=>{t=="home/menu.png"?(e("home/close.png"),r(!0)):(e("home/menu.png"),r(!1))};return S.useEffect(()=>{l&&l.name&&(s(l.name),console.log("user name",i))},[l,i]),c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"nav-bar",children:[c.jsx("img",{src:"home/iitg.png",alt:""}),c.jsxs("ul",{children:[c.jsx("li",{children:c.jsx(Wt,{to:"/",children:"Home"})}),c.jsx("li",{children:c.jsx(Wt,{to:"/directory",children:"Directory"})}),c.jsx("li",{children:c.jsx(Wt,{to:"/team",children:"Team"})}),c.jsx("li",{id:"nav-btn",children:c.jsx(Wt,{to:"/auth",children:i})})]}),c.jsx("img",{src:t,onClick:a,alt:"toggle",id:"toggle"})]}),n&&c.jsx("div",{className:"toggle-menu",children:c.jsxs("ul",{children:[c.jsx("li",{children:c.jsx(Wt,{to:"/",children:"Home"})}),c.jsx("li",{children:c.jsx(Wt,{to:"/directory",children:"Directory"})}),c.jsx("li",{children:c.jsx(Wt,{to:"/team",children:"Team"})}),c.jsx("li",{children:c.jsx(Wt,{to:"/auth",children:i})})]})})]})};function qw(){return c.jsx(c.Fragment,{children:c.jsxs("div",{className:"footer",children:[c.jsxs("div",{className:"box1",children:[c.jsxs("div",{className:"footer-description",children:[c.jsx("img",{src:"footer/iitgLogo.png",alt:"IITG Logo"}),c.jsxs("div",{className:"footer-description-text",children:[c.jsx("p",{children:"Department of Biosciences and Bioengineering"}),c.jsx("p",{children:"Indian Institute of Technology Guwahati"}),c.jsx("p",{children:"Guwahati 781039"})]})]}),c.jsx("h3",{children:"Designed and Developed by BSBE students"})]}),c.jsxs("div",{className:"box2",children:[c.jsx("a",{href:"https://www.iitg.ac.in/",target:"blank",children:"IITG Website"}),c.jsx("a",{href:"https://www.iitg.ac.in/biotech/",target:"blank",children:"BSBE Website"}),c.jsxs("div",{className:"social",children:[c.jsx("a",{href:"https://www.instagram.com/bsbe_iitguwahati/",target:"blank",children:c.jsx("img",{src:"footer/instagram.png"})}),c.jsx("a",{href:"https://www.linkedin.com/in/dept-of-biosciences-and-bioengineering-iit-guwahati-11980a325/",target:"blank",children:c.jsx("img",{src:"footer/linkedin.png"})}),c.jsx("a",{href:"https://x.com/BSBE_IITG",target:"blank",children:c.jsx("img",{src:"footer/twitter.png"})})]}),c.jsxs("div",{className:"contact",children:[c.jsx("img",{src:"footer/phone.png",alt:""}),c.jsx("a",{href:"tel:0361-2582250",children:"0361-2582250"})]}),c.jsxs("div",{className:"contact",children:[c.jsx("img",{src:"footer/mail.png",alt:""}),c.jsx("a",{href:"mailto:biooff@iitg.ac.in",children:"biooff@iitg.ac.in"})]}),c.jsxs("div",{className:"contact",children:[c.jsx("img",{src:"footer/mail.png",alt:""}),c.jsx("a",{href:"mailto:bsbe_alum@iitg.ac.in",children:"bsbe_alum@iitg.ac.in"})]})]})]})})}const Xw=()=>{const t=({end:e})=>{const[n,r]=S.useState(0);return S.useEffect(()=>{let i=0;const o=e/(2e3/100),l=setInterval(()=>{i+=o,i>=e?(clearInterval(l),r(e)):r(Math.ceil(i))},100);return()=>clearInterval(l)},[e]),c.jsx("span",{children:n})};return c.jsxs("div",{className:"stats-container",children:[c.jsxs("div",{className:"stat-box",children:[c.jsxs("h2",{children:[c.jsx(t,{end:650}),"+"]}),c.jsx("p",{children:"Continuing Students"})]}),c.jsxs("div",{className:"stat-box",children:[c.jsxs("h2",{children:[c.jsx(t,{end:1500}),"+"]}),c.jsx("p",{children:"Graduated Students"})]}),c.jsxs("div",{className:"stat-box",children:[c.jsxs("h2",{children:[c.jsx(t,{end:200}),"+"]}),c.jsx("p",{children:"Opted for Abroad Studies"})]})]})},Jw=()=>c.jsxs("div",{className:"events-container",children:[c.jsx("h1",{children:"Upcoming Event"}),c.jsx("img",{src:"home/event.png",alt:""}),c.jsxs("div",{className:"event-box",children:[c.jsxs("div",{className:"description",children:[c.jsx("h3",{children:"BSBE Alumni Meet 2024"}),c.jsx("p",{children:"Dept. of Biosciences and Bioengineering will be hosting their first alumni meet on 26th and 27th October, 2024."}),c.jsx("p",{children:c.jsx("a",{href:"https://iitg.ac.in/biotech/pdf/d6e3433518f6b8ae4ab91a9e1ccae6dfbd1be90d.pdf",target:"blank",children:"Link to Alumni Meet 2024 Flyer"})})]}),c.jsx("a",{href:"https://forms.gle/DSmgU3faXQwA9V5C6",target:"blank",children:"Register"})]})]}),Zw=()=>c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"home",children:[c.jsx("img",{src:"home/bg.jpg",alt:""}),c.jsxs("div",{className:"heading",children:[c.jsx("h2",{children:"BSBE"}),c.jsx("h1",{children:"Alumni Page"})]})]}),c.jsx(Xw,{}),c.jsx(Jw,{})]});function eE({data:t}){const[e,n]=S.useState(""),[r,i]=S.useState(""),[s,o]=S.useState(""),[l,a]=S.useState(""),[u,h]=S.useState(""),[d,f]=S.useState([]),[w,v]=S.useState([]);return S.useEffect(()=>{t&&(console.log("data in card",t),n(t.name),t.education[0]&&(o(t.education[0].year),i(t.education[0].degree),f(t.education)),t.work[0]&&(a(t.work[0].domain),v(t.work)),t.location&&h(t.location))},[t]),c.jsx(c.Fragment,{children:c.jsxs("div",{className:"dircard",children:[c.jsx("h1",{children:e}),c.jsxs("div",{className:"IITG-eudcation",children:[c.jsxs("h4",{children:[r," |"]}),c.jsxs("h3",{children:["Class of ",s," "]})]}),c.jsx("div",{className:"title",children:c.jsx("h3",{children:l})}),c.jsx("hr",{}),c.jsxs("div",{className:"alum-experience",children:[c.jsx("h3",{children:"Work Experience"}),w.map((g,y)=>c.jsxs("li",{children:[g.role," at ",g.company,", ",g.location]},y))]}),c.jsx("hr",{}),c.jsxs("div",{className:"alum-education",children:[c.jsx("h3",{children:"Education"}),d.map((g,y)=>c.jsxs("div",{className:"education-list",children:[c.jsxs("li",{children:[g.degree," at ",g.university]}),c.jsx("h3",{children:g.year})]},y))]}),c.jsxs("div",{className:"alum-social",children:[c.jsx("a",{href:"tel:1234567890",target:"",children:c.jsx("img",{src:"images/phone.png"})}),c.jsx("a",{href:"mailto:skrsumit250@gmail.com",target:"blank",children:c.jsx("img",{src:"images/mail.png"})}),c.jsx("a",{href:"https://www.linkedin.com/in/sumit-kumar-iitg/",target:"blank",children:c.jsx("img",{src:"images/linkedin.png"})})]})]})})}const ol="https://alumni-server-lcxk.onrender.com/";function tE(){const[t,e]=S.useState([]),[n,r]=S.useState([]),[i,s]=S.useState([]),[o,l]=S.useState(""),[a,u]=S.useState(""),[h,d]=S.useState(""),[f,w]=S.useState("");return S.useEffect(()=>{(async()=>{try{const y=await(await fetch(`${ol}directory`,{method:"GET",headers:{"Content-Type":"application/json"}})).json();y.success?(console.log("response",y.alumni),e([...y.alumni]),console.log("Data",t)):console.error("Error",y.error)}catch(g){console.error(g)}})()},[]),S.useEffect(()=>{const v=()=>{let g=t;a&&(console.log("degree",a),g=g.filter(y=>y.education[0].degree==a)),h&&(console.log("domain",h),g=g.filter(y=>y.work[0].domain==h)),f&&(console.log("year",f),g=g.filter(y=>y.education[0].year==f)),o&&(g=g.filter(y=>y.name&&y.name.toLowerCase().includes(o.toLowerCase())||y.email&&y.email.toLowerCase().includes(o.toLowerCase())||y.phone&&y.phone.includes(o)||y.location&&y.location.toLowerCase().includes(o.toLowerCase())||y.linkedin&&y.linkedin.toLowerCase().includes(o.toLowerCase())||y.education&&y.education.some(m=>m.university&&m.university.toLowerCase().includes(o.toLowerCase())||m.degree&&m.degree.toLowerCase().includes(o.toLowerCase())||m.year&&m.year.toLowerCase().includes(o.toLowerCase()))||y.work&&y.work.some(m=>m.role&&m.role.toLowerCase().includes(o.toLowerCase())||m.company&&m.company.toLowerCase().includes(o.toLowerCase())))),s(g)};console.log("filter data",i),v()},[o,a,h,f,t]),S.useEffect(()=>{r(((g,y)=>{const m=[];for(let p=0;p<g.length;p+=y)m.push(g.slice(p,p+y));return m})(i,3))},[i]),c.jsx(c.Fragment,{children:c.jsxs("div",{className:"alum-list",children:[c.jsx("h1",{id:"alumni-heading",children:"Alumni Directory"}),c.jsxs("div",{className:"filter",children:[c.jsxs("div",{className:"search",children:[c.jsx("img",{src:"images/search.png",alt:""}),c.jsx("input",{type:"text",value:o,onChange:v=>l(v.target.value)})]}),c.jsxs("select",{name:"",id:"",value:a,onChange:v=>u(v.target.value),children:[c.jsx("option",{value:"Degree",children:"Degree"}),c.jsx("option",{value:"B.Tech",children:"B.Tech"}),c.jsx("option",{value:"M.Tech",children:"M.Tech"}),c.jsx("option",{value:"PhD",children:"PhD"})]}),c.jsxs("select",{name:"",id:"",value:h,onChange:v=>d(v.target.value),children:[c.jsx("option",{value:"Domain",children:"Domain"}),c.jsx("option",{value:"Software",children:"Software"}),c.jsx("option",{value:"Consulting",children:"Consulting"}),c.jsx("option",{value:"Product",children:"Product"}),c.jsx("option",{value:"AI/ML",children:"AI/ML"}),c.jsx("option",{value:"Analyst",children:"Analyst"}),c.jsx("option",{value:"Research",children:"Research"}),c.jsx("option",{value:"Others",children:"Other"})]}),c.jsx("input",{type:"text",placeholder:"Year",value:f,onChange:v=>w(v.target.value)})]}),t.length==0&&c.jsx("h1",{id:"loading",children:"Loading....."}),t.length>0&&c.jsxs("h1",{id:"loading",children:["Search Results (",i.length,")"]}),n.map((v,g)=>c.jsx("div",{className:"alum-box",children:v.map((y,m)=>c.jsx(eE,{data:y},m))},g))]})})}var xh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k=function(t,e){if(!t)throw $r(e)},$r=function(t){return new Error("Firebase Database ("+ag.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ug=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},nE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Ec={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,h=s>>2,d=(s&3)<<4|l>>4;let f=(l&15)<<2|u>>6,w=u&63;a||(w=64,o||(f=64)),r.push(n[h],n[d],n[f],n[w])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ug(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):nE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||d==null)throw new rE;const f=s<<2|l>>4;if(r.push(f),u!==64){const w=l<<4&240|u>>2;if(r.push(w),d!==64){const v=u<<6&192|d;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class rE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const cg=function(t){const e=ug(t);return Ec.encodeByteArray(e,!0)},Io=function(t){return cg(t).replace(/\./g,"")},To=function(t){try{return Ec.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iE(t){return dg(void 0,t)}function dg(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!sE(n)||(t[n]=dg(t[n],e[n]));return t}function sE(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lE=()=>oE().__FIREBASE_DEFAULTS__,aE=()=>{if(typeof process>"u"||typeof xh>"u")return;const t=xh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},uE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&To(t[1]);return e&&JSON.parse(e)},Sc=()=>{try{return lE()||aE()||uE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},hg=t=>{var e,n;return(n=(e=Sc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},cE=t=>{const e=hg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},fg=()=>{var t;return(t=Sc())===null||t===void 0?void 0:t.config},pg=t=>{var e;return(e=Sc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Io(JSON.stringify(n)),Io(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Cc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xe())}function hE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function fE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function mg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function pE(){const t=xe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function gg(){return ag.NODE_ADMIN===!0}function mE(){try{return typeof indexedDB=="object"}catch{return!1}}function gE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vE="FirebaseError";class wn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=vE,Object.setPrototypeOf(this,wn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ss.prototype.create)}}class ss{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?_E(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new wn(i,l,r)}}function _E(t,e){return t.replace(yE,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const yE=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(t){return JSON.parse(t)}function ge(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Yi(To(s[0])||""),n=Yi(To(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},wE=function(t){const e=vg(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},EE=function(t){const e=vg(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Lr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ru(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function xo(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function No(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Nh(s)&&Nh(o)){if(!No(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Nh(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,h;for(let d=0;d<80;d++){d<40?d<20?(u=l^s&(o^l),h=1518500249):(u=s^o^l,h=1859775393):d<60?(u=s&o|l&(s|o),h=2400959708):(u=s^o^l,h=3395469782);const f=(i<<5|i>>>27)+u+a+h+r[d]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function CE(t,e){const n=new kE(t,e);return n.subscribe.bind(n)}class kE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");IE(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Yl),i.error===void 0&&(i.error=Yl),i.complete===void 0&&(i.complete=Yl);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function IE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Yl(){}function kc(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,k(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},al=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(t){return t&&t._delegate?t._delegate:t}class $n{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ll;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(RE(e))try{this.getOrInitializeService({instanceIdentifier:Tn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Tn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Tn){return this.instances.has(e)}getOptions(e=Tn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:NE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Tn){return this.component?this.component.multipleInstances?e:Tn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function NE(t){return t===Tn?void 0:t}function RE(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new xE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var W;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(W||(W={}));const AE={debug:W.DEBUG,verbose:W.VERBOSE,info:W.INFO,warn:W.WARN,error:W.ERROR,silent:W.SILENT},OE=W.INFO,bE={[W.DEBUG]:"log",[W.VERBOSE]:"log",[W.INFO]:"info",[W.WARN]:"warn",[W.ERROR]:"error"},DE=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=bE[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ic{constructor(e){this.name=e,this._logLevel=OE,this._logHandler=DE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in W))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?AE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,W.DEBUG,...e),this._logHandler(this,W.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,W.VERBOSE,...e),this._logHandler(this,W.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,W.INFO,...e),this._logHandler(this,W.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,W.WARN,...e),this._logHandler(this,W.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,W.ERROR,...e),this._logHandler(this,W.ERROR,...e)}}const LE=(t,e)=>e.some(n=>t instanceof n);let Rh,Ph;function ME(){return Rh||(Rh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jE(){return Ph||(Ph=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _g=new WeakMap,iu=new WeakMap,yg=new WeakMap,Ql=new WeakMap,Tc=new WeakMap;function FE(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(cn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&_g.set(n,t)}).catch(()=>{}),Tc.set(e,t),e}function UE(t){if(iu.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});iu.set(t,e)}let su={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return iu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||yg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return cn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function zE(t){su=t(su)}function BE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ql(this),e,...n);return yg.set(r,e.sort?e.sort():[e]),cn(r)}:jE().includes(t)?function(...e){return t.apply(ql(this),e),cn(_g.get(this))}:function(...e){return cn(t.apply(ql(this),e))}}function WE(t){return typeof t=="function"?BE(t):(t instanceof IDBTransaction&&UE(t),LE(t,ME())?new Proxy(t,su):t)}function cn(t){if(t instanceof IDBRequest)return FE(t);if(Ql.has(t))return Ql.get(t);const e=WE(t);return e!==t&&(Ql.set(t,e),Tc.set(e,t)),e}const ql=t=>Tc.get(t);function $E(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=cn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(cn(o.result),a.oldVersion,a.newVersion,cn(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const HE=["get","getKey","getAll","getAllKeys","count"],VE=["put","add","delete","clear"],Xl=new Map;function Ah(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Xl.get(e))return Xl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=VE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||HE.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return Xl.set(e,s),s}zE(t=>({...t,get:(e,n,r)=>Ah(e,n)||t.get(e,n,r),has:(e,n)=>!!Ah(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(KE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function KE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ou="@firebase/app",Oh="0.10.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt=new Ic("@firebase/app"),YE="@firebase/app-compat",QE="@firebase/analytics-compat",qE="@firebase/analytics",XE="@firebase/app-check-compat",JE="@firebase/app-check",ZE="@firebase/auth",eS="@firebase/auth-compat",tS="@firebase/database",nS="@firebase/database-compat",rS="@firebase/functions",iS="@firebase/functions-compat",sS="@firebase/installations",oS="@firebase/installations-compat",lS="@firebase/messaging",aS="@firebase/messaging-compat",uS="@firebase/performance",cS="@firebase/performance-compat",dS="@firebase/remote-config",hS="@firebase/remote-config-compat",fS="@firebase/storage",pS="@firebase/storage-compat",mS="@firebase/firestore",gS="@firebase/vertexai-preview",vS="@firebase/firestore-compat",_S="firebase",yS="10.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lu="[DEFAULT]",wS={[ou]:"fire-core",[YE]:"fire-core-compat",[qE]:"fire-analytics",[QE]:"fire-analytics-compat",[JE]:"fire-app-check",[XE]:"fire-app-check-compat",[ZE]:"fire-auth",[eS]:"fire-auth-compat",[tS]:"fire-rtdb",[nS]:"fire-rtdb-compat",[rS]:"fire-fn",[iS]:"fire-fn-compat",[sS]:"fire-iid",[oS]:"fire-iid-compat",[lS]:"fire-fcm",[aS]:"fire-fcm-compat",[uS]:"fire-perf",[cS]:"fire-perf-compat",[dS]:"fire-rc",[hS]:"fire-rc-compat",[fS]:"fire-gcs",[pS]:"fire-gcs-compat",[mS]:"fire-fst",[vS]:"fire-fst-compat",[gS]:"fire-vertex","fire-js":"fire-js",[_S]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ro=new Map,ES=new Map,au=new Map;function bh(t,e){try{t.container.addComponent(e)}catch(n){Dt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Mr(t){const e=t.name;if(au.has(e))return Dt.debug(`There were multiple attempts to register component ${e}.`),!1;au.set(e,t);for(const n of Ro.values())bh(n,t);for(const n of ES.values())bh(n,t);return!0}function xc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ct(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},dn=new ss("app","Firebase",SS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new $n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw dn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr=yS;function wg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:lu,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw dn.create("bad-app-name",{appName:String(i)});if(n||(n=fg()),!n)throw dn.create("no-options");const s=Ro.get(i);if(s){if(No(n,s.options)&&No(r,s.config))return s;throw dn.create("duplicate-app",{appName:i})}const o=new PE(i);for(const a of au.values())o.addComponent(a);const l=new CS(n,r,o);return Ro.set(i,l),l}function Eg(t=lu){const e=Ro.get(t);if(!e&&t===lu&&fg())return wg();if(!e)throw dn.create("no-app",{appName:t});return e}function hn(t,e,n){var r;let i=(r=wS[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Dt.warn(l.join(" "));return}Mr(new $n(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kS="firebase-heartbeat-database",IS=1,Qi="firebase-heartbeat-store";let Jl=null;function Sg(){return Jl||(Jl=$E(kS,IS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Qi)}catch(n){console.warn(n)}}}}).catch(t=>{throw dn.create("idb-open",{originalErrorMessage:t.message})})),Jl}async function TS(t){try{const n=(await Sg()).transaction(Qi),r=await n.objectStore(Qi).get(Cg(t));return await n.done,r}catch(e){if(e instanceof wn)Dt.warn(e.message);else{const n=dn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Dt.warn(n.message)}}}async function Dh(t,e){try{const r=(await Sg()).transaction(Qi,"readwrite");await r.objectStore(Qi).put(e,Cg(t)),await r.done}catch(n){if(n instanceof wn)Dt.warn(n.message);else{const r=dn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Dt.warn(r.message)}}}function Cg(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xS=1024,NS=30*24*60*60*1e3;class RS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new AS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Lh();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=NS}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Dt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Lh(),{heartbeatsToSend:r,unsentEntries:i}=PS(this._heartbeatsCache.heartbeats),s=Io(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Dt.warn(n),""}}}function Lh(){return new Date().toISOString().substring(0,10)}function PS(t,e=xS){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Mh(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Mh(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class AS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return mE()?gE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await TS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Dh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Dh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Mh(t){return Io(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OS(t){Mr(new $n("platform-logger",e=>new GE(e),"PRIVATE")),Mr(new $n("heartbeat",e=>new RS(e),"PRIVATE")),hn(ou,Oh,t),hn(ou,Oh,"esm2017"),hn("fire-js","")}OS("");function Nc(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function kg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const bS=kg,Ig=new ss("auth","Firebase",kg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po=new Ic("@firebase/auth");function DS(t,...e){Po.logLevel<=W.WARN&&Po.warn(`Auth (${Vr}): ${t}`,...e)}function Ks(t,...e){Po.logLevel<=W.ERROR&&Po.error(`Auth (${Vr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(t,...e){throw Pc(t,...e)}function ot(t,...e){return Pc(t,...e)}function Rc(t,e,n){const r=Object.assign(Object.assign({},bS()),{[e]:n});return new ss("auth","Firebase",r).create(e,{appName:t.name})}function Mn(t){return Rc(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function LS(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&vt(t,"argument-error"),Rc(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Pc(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Ig.create(t,...e)}function A(t,e,...n){if(!t)throw Pc(e,...n)}function kt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ks(e),new Error(e)}function Lt(t,e){t||kt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function MS(){return jh()==="http:"||jh()==="https:"}function jh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(MS()||fE()||"connection"in navigator)?navigator.onLine:!0}function FS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e,n){this.shortDelay=e,this.longDelay=n,Lt(n>e,"Short delay should be less than long delay!"),this.isMobile=Cc()||mg()}get(){return jS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ac(t,e){Lt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;kt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;kt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;kt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const US={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zS=new os(3e4,6e4);function Oc(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Gr(t,e,n,r,i={}){return xg(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Hr(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:a},s);return hE()||(u.referrerPolicy="no-referrer"),Tg.fetch()(Ng(t,t.config.apiHost,n,l),u)})}async function xg(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},US),e);try{const i=new WS(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw As(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw As(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw As(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw As(t,"user-disabled",o);const h=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Rc(t,h,u);vt(t,h)}}catch(i){if(i instanceof wn)throw i;vt(t,"network-request-failed",{message:String(i)})}}async function BS(t,e,n,r,i={}){const s=await Gr(t,e,n,r,i);return"mfaPendingCredential"in s&&vt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Ng(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Ac(t.config,i):`${t.config.apiScheme}://${i}`}class WS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ot(this.auth,"network-request-failed")),zS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function As(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ot(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $S(t,e){return Gr(t,"POST","/v1/accounts:delete",e)}async function Rg(t,e){return Gr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ki(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function HS(t,e=!1){const n=ut(t),r=await n.getIdToken(e),i=bc(r);A(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ki(Zl(i.auth_time)),issuedAtTime:ki(Zl(i.iat)),expirationTime:ki(Zl(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Zl(t){return Number(t)*1e3}function bc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ks("JWT malformed, contained fewer than 3 sections"),null;try{const i=To(n);return i?JSON.parse(i):(Ks("Failed to decode base64 JWT payload"),null)}catch(i){return Ks("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Fh(t){const e=bc(t);return A(e,"internal-error"),A(typeof e.exp<"u","internal-error"),A(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof wn&&VS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function VS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ki(this.lastLoginAt),this.creationTime=ki(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ao(t){var e;const n=t.auth,r=await t.getIdToken(),i=await qi(t,Rg(n,{idToken:r}));A(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Pg(s.providerUserInfo):[],l=YS(t.providerData,o),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),h=a?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new cu(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,d)}async function KS(t){const e=ut(t);await Ao(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function YS(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Pg(t){return t.map(e=>{var{providerId:n}=e,r=Nc(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QS(t,e){const n=await xg(t,{},async()=>{const r=Hr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Ng(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Tg.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function qS(t,e){return Gr(t,"POST","/v2/accounts:revokeToken",Oc(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){A(e.idToken,"internal-error"),A(typeof e.idToken<"u","internal-error"),A(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Fh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){A(e.length!==0,"internal-error");const n=Fh(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(A(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await QS(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Cr;return r&&(A(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(A(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(A(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Cr,this.toJSON())}_performRefresh(){return kt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(t,e){A(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class It{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Nc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new GS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new cu(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await qi(this,this.stsTokenManager.getToken(this.auth,e));return A(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return HS(this,e)}reload(){return KS(this)}_assign(e){this!==e&&(A(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new It(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){A(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ao(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ct(this.auth.app))return Promise.reject(Mn(this.auth));const e=await this.getIdToken();return await qi(this,$S(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,a,u,h;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,w=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,g=(l=n.tenantId)!==null&&l!==void 0?l:void 0,y=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:_,emailVerified:E,isAnonymous:I,providerData:N,stsTokenManager:R}=n;A(_&&R,e,"internal-error");const P=Cr.fromJSON(this.name,R);A(typeof _=="string",e,"internal-error"),$t(d,e.name),$t(f,e.name),A(typeof E=="boolean",e,"internal-error"),A(typeof I=="boolean",e,"internal-error"),$t(w,e.name),$t(v,e.name),$t(g,e.name),$t(y,e.name),$t(m,e.name),$t(p,e.name);const V=new It({uid:_,auth:e,email:f,emailVerified:E,displayName:d,isAnonymous:I,photoURL:v,phoneNumber:w,tenantId:g,stsTokenManager:P,createdAt:m,lastLoginAt:p});return N&&Array.isArray(N)&&(V.providerData=N.map(D=>Object.assign({},D))),y&&(V._redirectEventId=y),V}static async _fromIdTokenResponse(e,n,r=!1){const i=new Cr;i.updateFromServerResponse(n);const s=new It({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ao(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];A(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Pg(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Cr;l.updateFromIdToken(r);const a=new It({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new cu(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(a,u),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uh=new Map;function Tt(t){Lt(t instanceof Function,"Expected a class definition");let e=Uh.get(t);return e?(Lt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Uh.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ag.type="NONE";const zh=Ag;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ys(t,e,n){return`firebase:${t}:${e}:${n}`}class kr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ys(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ys("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?It._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new kr(Tt(zh),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Tt(zh);const o=Ys(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const h=await u._get(o);if(h){const d=It._fromJSON(e,h);u!==s&&(l=d),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new kr(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new kr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Lg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Og(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(jg(e))return"Blackberry";if(Fg(e))return"Webos";if(bg(e))return"Safari";if((e.includes("chrome/")||Dg(e))&&!e.includes("edge/"))return"Chrome";if(Mg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Og(t=xe()){return/firefox\//i.test(t)}function bg(t=xe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Dg(t=xe()){return/crios\//i.test(t)}function Lg(t=xe()){return/iemobile/i.test(t)}function Mg(t=xe()){return/android/i.test(t)}function jg(t=xe()){return/blackberry/i.test(t)}function Fg(t=xe()){return/webos/i.test(t)}function Dc(t=xe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function XS(t=xe()){var e;return Dc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function JS(){return pE()&&document.documentMode===10}function Ug(t=xe()){return Dc(t)||Mg(t)||Fg(t)||jg(t)||/windows phone/i.test(t)||Lg(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zg(t,e=[]){let n;switch(t){case"Browser":n=Bh(xe());break;case"Worker":n=`${Bh(xe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Vr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eC(t,e={}){return Gr(t,"GET","/v2/passwordPolicy",Oc(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tC=6;class nC{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:tC,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(i=a.containsLowercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(s=a.containsUppercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(l=a.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wh(this),this.idTokenSubscription=new Wh(this),this.beforeStateQueue=new ZS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ig,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Tt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await kr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Rg(this,{idToken:e}),r=await It._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ct(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return A(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ao(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=FS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ct(this.app))return Promise.reject(Mn(this));const n=e?ut(e):null;return n&&A(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&A(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ct(this.app)?Promise.reject(Mn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ct(this.app)?Promise.reject(Mn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Tt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await eC(this),n=new nC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ss("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await qS(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Tt(e)||this._popupRedirectResolver;A(n,this,"argument-error"),this.redirectPersistenceManager=await kr.create(this,[Tt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(A(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,i);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return A(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=zg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&DS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ul(t){return ut(t)}class Wh{constructor(e){this.auth=e,this.observer=null,this.addObserver=CE(n=>this.observer=n)}get next(){return A(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function iC(t){Lc=t}function sC(t){return Lc.loadJS(t)}function oC(){return Lc.gapiScript}function lC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aC(t,e){const n=xc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(No(s,e??{}))return i;vt(i,"already-initialized")}return n.initialize({options:e})}function uC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Tt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function cC(t,e,n){const r=ul(t);A(r._canInitEmulator,r,"emulator-config-failed"),A(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Bg(e),{host:o,port:l}=dC(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),hC()}function Bg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function dC(t){const e=Bg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:$h(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:$h(o)}}}function $h(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function hC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return kt("not implemented")}_getIdTokenResponse(e){return kt("not implemented")}_linkToIdToken(e,n){return kt("not implemented")}_getReauthenticationResolver(e){return kt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ir(t,e){return BS(t,"POST","/v1/accounts:signInWithIdp",Oc(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fC="http://localhost";class Mt extends Wg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Mt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):vt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Nc(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Mt(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ir(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ir(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ir(e,n)}buildRequest(){const e={requestUri:fC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Hr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr extends Mc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class jn extends Kr{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return A("providerId"in n&&"signInMethod"in n,"argument-error"),Mt._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return A(e.idToken||e.accessToken,"argument-error"),Mt._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return jn.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return jn.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:l}=e;if(!r&&!i&&!n&&!s||!l)return null;try{return new jn(l)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt extends Kr{constructor(){super("facebook.com")}static credential(e){return Mt._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yt.credential(e.oauthAccessToken)}catch{return null}}}Yt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Yt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt extends Kr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Mt._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return wt.credentialFromTaggedObject(e)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return wt.credential(n,r)}catch{return null}}}wt.GOOGLE_SIGN_IN_METHOD="google.com";wt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt extends Kr{constructor(){super("github.com")}static credential(e){return Mt._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qt.credentialFromTaggedObject(e)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qt.credential(e.oauthAccessToken)}catch{return null}}}Qt.GITHUB_SIGN_IN_METHOD="github.com";Qt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt extends Kr{constructor(){super("twitter.com")}static credential(e,n){return Mt._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return qt.credentialFromTaggedObject(e)}static credentialFromError(e){return qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return qt.credential(n,r)}catch{return null}}}qt.TWITTER_SIGN_IN_METHOD="twitter.com";qt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await It._fromIdTokenResponse(e,r,i),o=Hh(r);return new jr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Hh(r);return new jr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Hh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo extends wn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Oo.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Oo(e,n,r,i)}}function $g(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Oo._fromErrorAndOperation(t,s,e,r):s})}async function pC(t,e,n=!1){const r=await qi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return jr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mC(t,e,n=!1){const{auth:r}=t;if(Ct(r.app))return Promise.reject(Mn(r));const i="reauthenticate";try{const s=await qi(t,$g(r,i,e,t),n);A(s.idToken,r,"internal-error");const o=bc(s.idToken);A(o,r,"internal-error");const{sub:l}=o;return A(t.uid===l,r,"user-mismatch"),jr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&vt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gC(t,e,n=!1){if(Ct(t.app))return Promise.reject(Mn(t));const r="signIn",i=await $g(t,r,e),s=await jr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function vC(t,e,n,r){return ut(t).onIdTokenChanged(e,n,r)}function _C(t,e,n){return ut(t).beforeAuthStateChanged(e,n)}const bo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(bo,"1"),this.storage.removeItem(bo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yC=1e3,wC=10;class Vg extends Hg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ug(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);JS()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,wC):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},yC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Vg.type="LOCAL";const EC=Vg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg extends Hg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Gg.type="SESSION";const Kg=Gg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new cl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await SC(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}cl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=jc("",20);i.port1.start();const h=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(f.data.response);break;default:clearTimeout(h),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(){return window}function kC(t){gt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yg(){return typeof gt().WorkerGlobalScope<"u"&&typeof gt().importScripts=="function"}async function IC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function TC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function xC(){return Yg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qg="firebaseLocalStorageDb",NC=1,Do="firebaseLocalStorage",qg="fbase_key";class ls{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function dl(t,e){return t.transaction([Do],e?"readwrite":"readonly").objectStore(Do)}function RC(){const t=indexedDB.deleteDatabase(Qg);return new ls(t).toPromise()}function du(){const t=indexedDB.open(Qg,NC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Do,{keyPath:qg})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Do)?e(r):(r.close(),await RC(),e(await du()))})})}async function Vh(t,e,n){const r=dl(t,!0).put({[qg]:e,value:n});return new ls(r).toPromise()}async function PC(t,e){const n=dl(t,!1).get(e),r=await new ls(n).toPromise();return r===void 0?null:r.value}function Gh(t,e){const n=dl(t,!0).delete(e);return new ls(n).toPromise()}const AC=800,OC=3;class Xg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await du(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>OC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Yg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=cl._getInstance(xC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await IC(),!this.activeServiceWorker)return;this.sender=new CC(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||TC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await du();return await Vh(e,bo,"1"),await Gh(e,bo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Vh(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>PC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Gh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=dl(i,!1).getAll();return new ls(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),AC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Xg.type="LOCAL";const bC=Xg;new os(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jg(t,e){return e?Tt(e):(A(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc extends Wg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ir(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ir(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ir(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function DC(t){return gC(t.auth,new Fc(t),t.bypassAuthState)}function LC(t){const{auth:e,user:n}=t;return A(n,e,"internal-error"),mC(n,new Fc(t),t.bypassAuthState)}async function MC(t){const{auth:e,user:n}=t;return A(n,e,"internal-error"),pC(n,new Fc(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return DC;case"linkViaPopup":case"linkViaRedirect":return MC;case"reauthViaPopup":case"reauthViaRedirect":return LC;default:vt(this.auth,"internal-error")}}resolve(e){Lt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Lt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jC=new os(2e3,1e4);async function Kh(t,e,n){if(Ct(t.app))return Promise.reject(ot(t,"operation-not-supported-in-this-environment"));const r=ul(t);LS(t,e,Mc);const i=Jg(r,n);return new An(r,"signInViaPopup",e,i).executeNotNull()}class An extends Zg{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,An.currentPopupAction&&An.currentPopupAction.cancel(),An.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return A(e,this.auth,"internal-error"),e}async onExecution(){Lt(this.filter.length===1,"Popup operations only handle one event");const e=jc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ot(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ot(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,An.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ot(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,jC.get())};e()}}An.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FC="pendingRedirect",Qs=new Map;class UC extends Zg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Qs.get(this.auth._key());if(!e){try{const r=await zC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Qs.set(this.auth._key(),e)}return this.bypassAuthState||Qs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function zC(t,e){const n=$C(e),r=WC(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function BC(t,e){Qs.set(t._key(),e)}function WC(t){return Tt(t._redirectPersistence)}function $C(t){return Ys(FC,t.config.apiKey,t.name)}async function HC(t,e,n=!1){if(Ct(t.app))return Promise.reject(Mn(t));const r=ul(t),i=Jg(r,e),o=await new UC(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VC=10*60*1e3;class GC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!KC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ev(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ot(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=VC&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yh(e))}saveEventToCache(e){this.cachedEventUids.add(Yh(e)),this.lastProcessedEventTime=Date.now()}}function Yh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ev({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function KC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ev(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YC(t,e={}){return Gr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qC=/^https?/;async function XC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await YC(t);for(const n of e)try{if(JC(n))return}catch{}vt(t,"unauthorized-domain")}function JC(t){const e=uu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!qC.test(n))return!1;if(QC.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZC=new os(3e4,6e4);function Qh(){const t=gt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ek(t){return new Promise((e,n)=>{var r,i,s;function o(){Qh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Qh(),n(ot(t,"network-request-failed"))},timeout:ZC.get()})}if(!((i=(r=gt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=gt().gapi)===null||s===void 0)&&s.load)o();else{const l=lC("iframefcb");return gt()[l]=()=>{gapi.load?o():n(ot(t,"network-request-failed"))},sC(`${oC()}?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw qs=null,e})}let qs=null;function tk(t){return qs=qs||ek(t),qs}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nk=new os(5e3,15e3),rk="__/auth/iframe",ik="emulator/auth/iframe",sk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ok=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function lk(t){const e=t.config;A(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ac(e,ik):`https://${t.config.authDomain}/${rk}`,r={apiKey:e.apiKey,appName:t.name,v:Vr},i=ok.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Hr(r).slice(1)}`}async function ak(t){const e=await tk(t),n=gt().gapi;return A(n,t,"internal-error"),e.open({where:document.body,url:lk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:sk,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ot(t,"network-request-failed"),l=gt().setTimeout(()=>{s(o)},nk.get());function a(){gt().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ck=500,dk=600,hk="_blank",fk="http://localhost";class qh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function pk(t,e,n,r=ck,i=dk){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},uk),{width:r.toString(),height:i.toString(),top:s,left:o}),u=xe().toLowerCase();n&&(l=Dg(u)?hk:n),Og(u)&&(e=e||fk,a.scrollbars="yes");const h=Object.entries(a).reduce((f,[w,v])=>`${f}${w}=${v},`,"");if(XS(u)&&l!=="_self")return mk(e||"",l),new qh(null);const d=window.open(e||"",l,h);A(d,t,"popup-blocked");try{d.focus()}catch{}return new qh(d)}function mk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gk="__/auth/handler",vk="emulator/auth/handler",_k=encodeURIComponent("fac");async function Xh(t,e,n,r,i,s){A(t.config.authDomain,t,"auth-domain-config-required"),A(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Vr,eventId:i};if(e instanceof Mc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ru(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries({}))o[h]=d}if(e instanceof Kr){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const h of Object.keys(l))l[h]===void 0&&delete l[h];const a=await t._getAppCheckToken(),u=a?`#${_k}=${encodeURIComponent(a)}`:"";return`${yk(t)}?${Hr(l).slice(1)}${u}`}function yk({config:t}){return t.emulator?Ac(t,vk):`https://${t.authDomain}/${gk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ea="webStorageSupport";class wk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Kg,this._completeRedirectFn=HC,this._overrideRedirectResult=BC}async _openPopup(e,n,r,i){var s;Lt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Xh(e,n,r,uu(),i);return pk(e,o,jc())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Xh(e,n,r,uu(),i);return kC(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Lt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await ak(e),r=new GC(e);return n.register("authEvent",i=>(A(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ea,{type:ea},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ea];o!==void 0&&n(!!o),vt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=XC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ug()||bg()||Dc()}}const Ek=wk;var Jh="@firebase/auth",Zh="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){A(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ck(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function kk(t){Mr(new $n("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;A(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:zg(t)},u=new rC(r,i,s,a);return uC(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Mr(new $n("auth-internal",e=>{const n=ul(e.getProvider("auth").getImmediate());return(r=>new Sk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),hn(Jh,Zh,Ck(t)),hn(Jh,Zh,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ik=5*60,Tk=pg("authIdTokenMaxAge")||Ik;let ef=null;const xk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Tk)return;const i=n==null?void 0:n.token;ef!==i&&(ef=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function tv(t=Eg()){const e=xc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=aC(t,{popupRedirectResolver:Ek,persistence:[bC,EC,Kg]}),r=pg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=xk(s.toString());_C(n,o,()=>o(n.currentUser)),vC(n,l=>o(l))}}const i=hg("auth");return i&&cC(n,`http://${i}`),n}function Nk(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}iC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=ot("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Nk().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});kk("Browser");var Rk="firebase",Pk="10.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hn(Rk,Pk,"app");const Ak={apiKey:"AIzaSyCNKbI9Vo8MhGfvFltkjkLcv_iZEj8y3fA",authDomain:"bsbe-alumni-page.firebaseapp.com",projectId:"bsbe-alumni-page",storageBucket:"bsbe-alumni-page.appspot.com",messagingSenderId:"97021366987",appId:"1:97021366987:web:669c39ee360a8ff5cd414e",measurementId:"G-PW57HF1YFW"},Ok=wg(Ak);tv(Ok);var tf={};const nf="@firebase/database",rf="1.0.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nv="";function bk(t){nv=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dk{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ge(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Yi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lk{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return zt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rv=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Dk(e)}}catch{}return new Lk},On=rv("localStorage"),Mk=rv("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr=new Ic("@firebase/database"),jk=function(){let t=1;return function(){return t++}}(),iv=function(t){const e=TE(t),n=new SE;n.update(e);const r=n.digest();return Ec.encodeByteArray(r)},as=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=as.apply(null,r):typeof r=="object"?e+=ge(r):e+=r,e+=" "}return e};let Ii=null,sf=!0;const Fk=function(t,e){k(!e,"Can't turn on custom loggers persistently."),Tr.logLevel=W.VERBOSE,Ii=Tr.log.bind(Tr)},Se=function(...t){if(sf===!0&&(sf=!1,Ii===null&&Mk.get("logging_enabled")===!0&&Fk()),Ii){const e=as.apply(null,t);Ii(e)}},us=function(t){return function(...e){Se(t,...e)}},hu=function(...t){const e="FIREBASE INTERNAL ERROR: "+as(...t);Tr.error(e)},jt=function(...t){const e=`FIREBASE FATAL ERROR: ${as(...t)}`;throw Tr.error(e),new Error(e)},Me=function(...t){const e="FIREBASE WARNING: "+as(...t);Tr.warn(e)},Uk=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Me("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},sv=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},zk=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Fr="[MIN_NAME]",Hn="[MAX_NAME]",Yr=function(t,e){if(t===e)return 0;if(t===Fr||e===Hn)return-1;if(e===Fr||t===Hn)return 1;{const n=of(t),r=of(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},Bk=function(t,e){return t===e?0:t<e?-1:1},li=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ge(e))},Uc=function(t){if(typeof t!="object"||t===null)return ge(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ge(e[r]),n+=":",n+=Uc(t[e[r]]);return n+="}",n},ov=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function qe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const lv=function(t){k(!sv(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const h=u.join("");let d="";for(a=0;a<64;a+=8){let f=parseInt(h.substr(a,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},Wk=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},$k=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},Hk=new RegExp("^-?(0*)\\d{1,10}$"),Vk=-2147483648,Gk=2147483647,of=function(t){if(Hk.test(t)){const e=Number(t);if(e>=Vk&&e<=Gk)return e}return null},Qr=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Me("Exception was thrown by user callback.",n),e},Math.floor(0))}},Kk=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ti=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yk{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Me(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qk{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Se("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Me(e)}}class Xs{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Xs.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zc="5",av="v",uv="s",cv="r",dv="f",hv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,fv="ls",pv="p",fu="ac",mv="websocket",gv="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=On.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&On.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function qk(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function _v(t,e,n){k(typeof e=="string","typeof type must == string"),k(typeof n=="object","typeof params must == object");let r;if(e===mv)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===gv)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);qk(t)&&(n.ns=t.namespace);const i=[];return qe(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xk{constructor(){this.counters_={}}incrementCounter(e,n=1){zt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return iE(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ta={},na={};function Bc(t){const e=t.toString();return ta[e]||(ta[e]=new Xk),ta[e]}function Jk(t,e){const n=t.toString();return na[n]||(na[n]=e()),na[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zk{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Qr(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lf="start",e1="close",t1="pLPCommand",n1="pRTLPCB",yv="id",wv="pw",Ev="ser",r1="cb",i1="seg",s1="ts",o1="d",l1="dframe",Sv=1870,Cv=30,a1=Sv-Cv,u1=25e3,c1=3e4;class gr{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=us(e),this.stats_=Bc(n),this.urlFn=a=>(this.appCheckToken&&(a[fu]=this.appCheckToken),_v(n,gv,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Zk(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(c1)),zk(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Wc((...s)=>{const[o,l,a,u,h]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===lf)this.id=l,this.password=a;else if(o===e1)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[lf]="t",r[Ev]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[r1]=this.scriptTagHolder.uniqueCallbackIdentifier),r[av]=zc,this.transportSessionId&&(r[uv]=this.transportSessionId),this.lastSessionId&&(r[fv]=this.lastSessionId),this.applicationId&&(r[pv]=this.applicationId),this.appCheckToken&&(r[fu]=this.appCheckToken),typeof location<"u"&&location.hostname&&hv.test(location.hostname)&&(r[cv]=dv);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){gr.forceAllow_=!0}static forceDisallow(){gr.forceDisallow_=!0}static isAvailable(){return gr.forceAllow_?!0:!gr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Wk()&&!$k()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ge(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=cg(n),i=ov(r,a1);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[l1]="t",r[yv]=e,r[wv]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ge(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Wc{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=jk(),window[t1+this.uniqueCallbackIdentifier]=e,window[n1+this.uniqueCallbackIdentifier]=n,this.myIFrame=Wc.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Se("frame writing exception"),l.stack&&Se(l.stack),Se(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Se("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[yv]=this.myID,e[wv]=this.myPW,e[Ev]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Cv+r.length<=Sv;){const o=this.pendingSegs.shift();r=r+"&"+i1+i+"="+o.seg+"&"+s1+i+"="+o.ts+"&"+o1+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(u1)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Se("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d1=16384,h1=45e3;let Lo=null;typeof MozWebSocket<"u"?Lo=MozWebSocket:typeof WebSocket<"u"&&(Lo=WebSocket);class nt{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=us(this.connId),this.stats_=Bc(n),this.connURL=nt.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[av]=zc,typeof location<"u"&&location.hostname&&hv.test(location.hostname)&&(o[cv]=dv),n&&(o[uv]=n),r&&(o[fv]=r),i&&(o[fu]=i),s&&(o[pv]=s),_v(e,mv,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,On.set("previous_websocket_failure",!0);try{let r;gg(),this.mySock=new Lo(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){nt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Lo!==null&&!nt.forceDisallow_}static previouslyFailed(){return On.isInMemoryStorage||On.get("previous_websocket_failure")===!0}markConnectionHealthy(){On.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Yi(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(k(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ge(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=ov(n,d1);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(h1))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}nt.responsesRequiredToBeHealthy=2;nt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[gr,nt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=nt&&nt.isAvailable();let r=n&&!nt.previouslyFailed();if(e.webSocketOnly&&(n||Me("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[nt];else{const i=this.transports_=[];for(const s of Xi.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Xi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Xi.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f1=6e4,p1=5e3,m1=10*1024,g1=100*1024,ra="t",af="d",v1="s",uf="r",_1="e",cf="o",df="a",hf="n",ff="p",y1="h";class w1{constructor(e,n,r,i,s,o,l,a,u,h){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=us("c:"+this.id+":"),this.transportManager_=new Xi(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ti(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>g1?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>m1?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ra in e){const n=e[ra];n===df?this.upgradeIfSecondaryHealthy_():n===uf?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===cf&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=li("t",e),r=li("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ff,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:df,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:hf,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=li("t",e),r=li("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=li(ra,e);if(af in e){const r=e[af];if(n===y1){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===hf){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===v1?this.onConnectionShutdown_(r):n===uf?this.onReset_(r):n===_1?hu("Server Error: "+r):n===cf?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):hu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),zc!==r&&Me("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Ti(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(f1))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ti(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(p1))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ff,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(On.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv{constructor(e){this.allowedEvents_=e,this.listeners_={},k(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){k(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo extends Iv{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Cc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Mo}getInitialEvent(e){return k(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pf=32,mf=768;class q{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function $(){return new q("")}function M(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function gn(t){return t.pieces_.length-t.pieceNum_}function Y(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new q(t.pieces_,e)}function Tv(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function E1(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function xv(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Nv(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new q(e,0)}function le(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof q)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new q(n,0)}function j(t){return t.pieceNum_>=t.pieces_.length}function Ge(t,e){const n=M(t),r=M(e);if(n===null)return e;if(n===r)return Ge(Y(t),Y(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Rv(t,e){if(gn(t)!==gn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function rt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(gn(t)>gn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class S1{constructor(e,n){this.errorPrefix_=n,this.parts_=xv(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=al(this.parts_[r]);Pv(this)}}function C1(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=al(e),Pv(t)}function k1(t){const e=t.parts_.pop();t.byteLength_-=al(e),t.parts_.length>0&&(t.byteLength_-=1)}function Pv(t){if(t.byteLength_>mf)throw new Error(t.errorPrefix_+"has a key path longer than "+mf+" bytes ("+t.byteLength_+").");if(t.parts_.length>pf)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+pf+") or object contains a cycle "+xn(t))}function xn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c extends Iv{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new $c}getInitialEvent(e){return k(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai=1e3,I1=60*5*1e3,gf=30*1e3,T1=1.3,x1=3e4,N1="server_kill",vf=3;class Rt extends kv{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Rt.nextPersistentConnectionId_++,this.log_=us("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ai,this.maxReconnectDelay_=I1,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!gg())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");$c.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Mo.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(ge(s)),k(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new ll,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),k(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),k(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;Rt.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&zt(e,"w")){const r=Lr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Me(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||EE(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=gf)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=wE(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),k(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ge(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):hu("Unrecognized action received from server: "+ge(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){k(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ai,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ai,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>x1&&(this.reconnectDelay_=ai),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*T1)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Rt.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(d){k(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(d)};this.realtime_={close:a,sendRequest:u};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?Se("getToken() completed but was canceled"):(Se("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,l=new w1(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,w=>{Me(w+" ("+this.repoInfo_.toString()+")"),this.interrupt(N1)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Me(d),a())}}}interrupt(e){Se("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Se("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ru(this.interruptReasons_)&&(this.reconnectDelay_=ai,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Uc(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new q(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Se("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=vf&&(this.reconnectDelay_=gf,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Se("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=vf&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+nv.replace(/\./g,"-")]=1,Cc()?e["framework.cordova"]=1:mg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Mo.getInstance().currentlyOnline();return ru(this.interruptReasons_)&&e}}Rt.nextPersistentConnectionId_=0;Rt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new F(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new F(Fr,e),i=new F(Fr,n);return this.compare(r,i)!==0}minPost(){return F.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Os;class Av extends hl{static get __EMPTY_NODE(){return Os}static set __EMPTY_NODE(e){Os=e}compare(e,n){return Yr(e.name,n.name)}isDefinedOn(e){throw $r("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return F.MIN}maxPost(){return new F(Hn,Os)}makePost(e,n){return k(typeof e=="string","KeyIndex indexValue must always be a string."),new F(e,Os)}toString(){return".key"}}const xr=new Av;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class he{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??he.RED,this.left=i??Oe.EMPTY_NODE,this.right=s??Oe.EMPTY_NODE}copy(e,n,r,i,s){return new he(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Oe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Oe.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,he.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,he.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}he.RED=!0;he.BLACK=!1;class R1{copy(e,n,r,i,s){return this}insert(e,n,r){return new he(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Oe{constructor(e,n=Oe.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Oe(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,he.BLACK,null,null))}remove(e){return new Oe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,he.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new bs(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new bs(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new bs(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new bs(this.root_,null,this.comparator_,!0,e)}}Oe.EMPTY_NODE=new R1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P1(t,e){return Yr(t.name,e.name)}function Hc(t,e){return Yr(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pu;function A1(t){pu=t}const Ov=function(t){return typeof t=="number"?"number:"+lv(t):"string:"+t},bv=function(t){if(t.isLeafNode()){const e=t.val();k(typeof e=="string"||typeof e=="number"||typeof e=="object"&&zt(e,".sv"),"Priority must be a string or number.")}else k(t===pu||t.isEmpty(),"priority of unexpected type.");k(t===pu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _f;class ce{constructor(e,n=ce.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,k(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),bv(this.priorityNode_)}static set __childrenNodeConstructor(e){_f=e}static get __childrenNodeConstructor(){return _f}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ce(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ce.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return j(e)?this:M(e)===".priority"?this.priorityNode_:ce.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ce.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=M(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(k(r!==".priority"||gn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,ce.__childrenNodeConstructor.EMPTY_NODE.updateChild(Y(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Ov(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=lv(this.value_):e+=this.value_,this.lazyHash_=iv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ce.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ce.__childrenNodeConstructor?-1:(k(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=ce.VALUE_TYPE_ORDER.indexOf(n),s=ce.VALUE_TYPE_ORDER.indexOf(r);return k(i>=0,"Unknown leaf type: "+n),k(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ce.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dv,Lv;function O1(t){Dv=t}function b1(t){Lv=t}class D1 extends hl{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Yr(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return F.MIN}maxPost(){return new F(Hn,new ce("[PRIORITY-POST]",Lv))}makePost(e,n){const r=Dv(e);return new F(n,new ce("[PRIORITY-POST]",r))}toString(){return".priority"}}const Ce=new D1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L1=Math.log(2);class M1{constructor(e){const n=s=>parseInt(Math.log(s)/L1,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const jo=function(t,e,n,r){t.sort(e);const i=function(a,u){const h=u-a;let d,f;if(h===0)return null;if(h===1)return d=t[a],f=n?n(d):d,new he(f,d.node,he.BLACK,null,null);{const w=parseInt(h/2,10)+a,v=i(a,w),g=i(w+1,u);return d=t[w],f=n?n(d):d,new he(f,d.node,he.BLACK,v,g)}},s=function(a){let u=null,h=null,d=t.length;const f=function(v,g){const y=d-v,m=d;d-=v;const p=i(y+1,m),_=t[y],E=n?n(_):_;w(new he(E,_.node,g,null,p))},w=function(v){u?(u.left=v,u=v):(h=v,u=v)};for(let v=0;v<a.count;++v){const g=a.nextBitIsOne(),y=Math.pow(2,a.count-(v+1));g?f(y,he.BLACK):(f(y,he.BLACK),f(y,he.RED))}return h},o=new M1(t.length),l=s(o);return new Oe(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ia;const nr={};class xt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return k(nr&&Ce,"ChildrenNode.ts has not been loaded"),ia=ia||new xt({".priority":nr},{".priority":Ce}),ia}get(e){const n=Lr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Oe?n:null}hasIndex(e){return zt(this.indexSet_,e.toString())}addIndex(e,n){k(e!==xr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(F.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=jo(r,e.getCompare()):l=nr;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const h=Object.assign({},this.indexes_);return h[a]=l,new xt(h,u)}addToIndexes(e,n){const r=xo(this.indexes_,(i,s)=>{const o=Lr(this.indexSet_,s);if(k(o,"Missing index implementation for "+s),i===nr)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(F.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),jo(l,o.getCompare())}else return nr;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new F(e.name,l))),a.insert(e,e.node)}});return new xt(r,this.indexSet_)}removeFromIndexes(e,n){const r=xo(this.indexes_,i=>{if(i===nr)return i;{const s=n.get(e.name);return s?i.remove(new F(e.name,s)):i}});return new xt(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ui;class z{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&bv(this.priorityNode_),this.children_.isEmpty()&&k(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ui||(ui=new z(new Oe(Hc),null,xt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ui}updatePriority(e){return this.children_.isEmpty()?this:new z(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ui:n}}getChild(e){const n=M(e);return n===null?this:this.getImmediateChild(n).getChild(Y(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(k(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new F(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?ui:this.priorityNode_;return new z(i,o,s)}}updateChild(e,n){const r=M(e);if(r===null)return n;{k(M(e)!==".priority"||gn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Y(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Ce,(o,l)=>{n[o]=l.val(e),r++,s&&z.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Ov(this.getPriority().val())+":"),this.forEachChild(Ce,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":iv(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new F(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new F(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new F(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,F.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,F.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===cs?-1:0}withIndex(e){if(e===xr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new z(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===xr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Ce),i=n.getIterator(Ce);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===xr?null:this.indexMap_.get(e.toString())}}z.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class j1 extends z{constructor(){super(new Oe(Hc),z.EMPTY_NODE,xt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return z.EMPTY_NODE}isEmpty(){return!1}}const cs=new j1;Object.defineProperties(F,{MIN:{value:new F(Fr,z.EMPTY_NODE)},MAX:{value:new F(Hn,cs)}});Av.__EMPTY_NODE=z.EMPTY_NODE;ce.__childrenNodeConstructor=z;A1(cs);b1(cs);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F1=!0;function me(t,e=null){if(t===null)return z.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),k(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ce(n,me(e))}if(!(t instanceof Array)&&F1){const n=[];let r=!1;if(qe(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=me(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new F(o,a)))}}),n.length===0)return z.EMPTY_NODE;const s=jo(n,P1,o=>o.name,Hc);if(r){const o=jo(n,Ce.getCompare());return new z(s,me(e),new xt({".priority":o},{".priority":Ce}))}else return new z(s,me(e),xt.Default)}else{let n=z.EMPTY_NODE;return qe(t,(r,i)=>{if(zt(t,r)&&r.substring(0,1)!=="."){const s=me(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(me(e))}}O1(me);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U1 extends hl{constructor(e){super(),this.indexPath_=e,k(!j(e)&&M(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Yr(e.name,n.name):s}makePost(e,n){const r=me(e),i=z.EMPTY_NODE.updateChild(this.indexPath_,r);return new F(n,i)}maxPost(){const e=z.EMPTY_NODE.updateChild(this.indexPath_,cs);return new F(Hn,e)}toString(){return xv(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z1 extends hl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Yr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return F.MIN}maxPost(){return F.MAX}makePost(e,n){const r=me(e);return new F(n,r)}toString(){return".value"}}const B1=new z1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W1(t){return{type:"value",snapshotNode:t}}function $1(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function H1(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function yf(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function V1(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ce}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return k(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return k(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Fr}hasEnd(){return this.endSet_}getIndexEndValue(){return k(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return k(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Hn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return k(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ce}copy(){const e=new Vc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function wf(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ce?n="$priority":t.index_===B1?n="$value":t.index_===xr?n="$key":(k(t.index_ instanceof U1,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ge(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=ge(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+ge(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=ge(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+ge(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Ef(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ce&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo extends kv{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=us("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(k(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Fo.getListenId_(e,r),l={};this.listens_[o]=l;const a=wf(e._queryParams);this.restRequest_(s+".json",a,(u,h)=>{let d=h;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),Lr(this.listens_,o)===l){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(e,n){const r=Fo.getListenId_(e,n);delete this.listens_[r]}get(e){const n=wf(e._queryParams),r=e._path.toString(),i=new ll;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Hr(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Yi(l.responseText)}catch{Me("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&Me("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G1{constructor(){this.rootNode_=z.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uo(){return{value:null,children:new Map}}function Mv(t,e,n){if(j(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=M(e);t.children.has(r)||t.children.set(r,Uo());const i=t.children.get(r);e=Y(e),Mv(i,e,n)}}function mu(t,e,n){t.value!==null?n(e,t.value):K1(t,(r,i)=>{const s=new q(e.toString()+"/"+r);mu(i,s,n)})}function K1(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y1{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&qe(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sf=10*1e3,Q1=30*1e3,q1=5*60*1e3;class X1{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Y1(e);const r=Sf+(Q1-Sf)*Math.random();Ti(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;qe(e,(i,s)=>{s>0&&zt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Ti(this.reportStats_.bind(this),Math.floor(Math.random()*2*q1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ft;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ft||(ft={}));function jv(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Fv(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Uv(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=ft.ACK_USER_WRITE,this.source=jv()}operationForChild(e){if(j(this.path)){if(this.affectedTree.value!=null)return k(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new q(e));return new zo($(),n,this.revert)}}else return k(M(this.path)===e,"operationForChild called for unrelated child."),new zo(Y(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=ft.OVERWRITE}operationForChild(e){return j(this.path)?new Vn(this.source,$(),this.snap.getImmediateChild(e)):new Vn(this.source,Y(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=ft.MERGE}operationForChild(e){if(j(this.path)){const n=this.children.subtree(new q(e));return n.isEmpty()?null:n.value?new Vn(this.source,$(),n.value):new Ji(this.source,$(),n)}else return k(M(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ji(this.source,Y(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(j(e))return this.isFullyInitialized()&&!this.filtered_;const n=M(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function J1(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(V1(o.childName,o.snapshotNode))}),ci(t,i,"child_removed",e,r,n),ci(t,i,"child_added",e,r,n),ci(t,i,"child_moved",s,r,n),ci(t,i,"child_changed",e,r,n),ci(t,i,"value",e,r,n),i}function ci(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>eI(t,l,a)),o.forEach(l=>{const a=Z1(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function Z1(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function eI(t,e,n){if(e.childName==null||n.childName==null)throw $r("Should only compare child_ events.");const r=new F(e.childName,e.snapshotNode),i=new F(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zv(t,e){return{eventCache:t,serverCache:e}}function xi(t,e,n,r){return zv(new Gc(e,n,r),t.serverCache)}function Bv(t,e,n,r){return zv(t.eventCache,new Gc(e,n,r))}function gu(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Gn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sa;const tI=()=>(sa||(sa=new Oe(Bk)),sa);class K{constructor(e,n=tI()){this.value=e,this.children=n}static fromObject(e){let n=new K(null);return qe(e,(r,i)=>{n=n.set(new q(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:$(),value:this.value};if(j(e))return null;{const r=M(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Y(e),n);return s!=null?{path:le(new q(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(j(e))return this;{const n=M(e),r=this.children.get(n);return r!==null?r.subtree(Y(e)):new K(null)}}set(e,n){if(j(e))return new K(n,this.children);{const r=M(e),s=(this.children.get(r)||new K(null)).set(Y(e),n),o=this.children.insert(r,s);return new K(this.value,o)}}remove(e){if(j(e))return this.children.isEmpty()?new K(null):new K(null,this.children);{const n=M(e),r=this.children.get(n);if(r){const i=r.remove(Y(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new K(null):new K(this.value,s)}else return this}}get(e){if(j(e))return this.value;{const n=M(e),r=this.children.get(n);return r?r.get(Y(e)):null}}setTree(e,n){if(j(e))return n;{const r=M(e),s=(this.children.get(r)||new K(null)).setTree(Y(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new K(this.value,o)}}fold(e){return this.fold_($(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(le(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,$(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(j(e))return null;{const s=M(e),o=this.children.get(s);return o?o.findOnPath_(Y(e),le(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,$(),n)}foreachOnPath_(e,n,r){if(j(e))return this;{this.value&&r(n,this.value);const i=M(e),s=this.children.get(i);return s?s.foreachOnPath_(Y(e),le(n,i),r):new K(null)}}foreach(e){this.foreach_($(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(le(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.writeTree_=e}static empty(){return new lt(new K(null))}}function Ni(t,e,n){if(j(e))return new lt(new K(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Ge(i,e);return s=s.updateChild(o,n),new lt(t.writeTree_.set(i,s))}else{const i=new K(n),s=t.writeTree_.setTree(e,i);return new lt(s)}}}function Cf(t,e,n){let r=t;return qe(n,(i,s)=>{r=Ni(r,le(e,i),s)}),r}function kf(t,e){if(j(e))return lt.empty();{const n=t.writeTree_.setTree(e,new K(null));return new lt(n)}}function vu(t,e){return Zn(t,e)!=null}function Zn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ge(n.path,e)):null}function If(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ce,(r,i)=>{e.push(new F(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new F(r,i.value))}),e}function fn(t,e){if(j(e))return t;{const n=Zn(t,e);return n!=null?new lt(new K(n)):new lt(t.writeTree_.subtree(e))}}function _u(t){return t.writeTree_.isEmpty()}function Ur(t,e){return Wv($(),t.writeTree_,e)}function Wv(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(k(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Wv(le(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(le(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $v(t,e){return Yv(e,t)}function nI(t,e,n,r,i){k(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Ni(t.visibleWrites,e,n)),t.lastWriteId=r}function rI(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function iI(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);k(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&sI(l,r.path)?i=!1:rt(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return oI(t),!0;if(r.snap)t.visibleWrites=kf(t.visibleWrites,r.path);else{const l=r.children;qe(l,a=>{t.visibleWrites=kf(t.visibleWrites,le(r.path,a))})}return!0}else return!1}function sI(t,e){if(t.snap)return rt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&rt(le(t.path,n),e))return!0;return!1}function oI(t){t.visibleWrites=Hv(t.allWrites,lI,$()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function lI(t){return t.visible}function Hv(t,e,n){let r=lt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)rt(n,o)?(l=Ge(n,o),r=Ni(r,l,s.snap)):rt(o,n)&&(l=Ge(o,n),r=Ni(r,$(),s.snap.getChild(l)));else if(s.children){if(rt(n,o))l=Ge(n,o),r=Cf(r,l,s.children);else if(rt(o,n))if(l=Ge(o,n),j(l))r=Cf(r,$(),s.children);else{const a=Lr(s.children,M(l));if(a){const u=a.getChild(Y(l));r=Ni(r,$(),u)}}}else throw $r("WriteRecord should have .snap or .children")}}return r}function Vv(t,e,n,r,i){if(!r&&!i){const s=Zn(t.visibleWrites,e);if(s!=null)return s;{const o=fn(t.visibleWrites,e);if(_u(o))return n;if(n==null&&!vu(o,$()))return null;{const l=n||z.EMPTY_NODE;return Ur(o,l)}}}else{const s=fn(t.visibleWrites,e);if(!i&&_u(s))return n;if(!i&&n==null&&!vu(s,$()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(rt(u.path,e)||rt(e,u.path))},l=Hv(t.allWrites,o,e),a=n||z.EMPTY_NODE;return Ur(l,a)}}}function aI(t,e,n){let r=z.EMPTY_NODE;const i=Zn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Ce,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=fn(t.visibleWrites,e);return n.forEachChild(Ce,(o,l)=>{const a=Ur(fn(s,new q(o)),l);r=r.updateImmediateChild(o,a)}),If(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=fn(t.visibleWrites,e);return If(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function uI(t,e,n,r,i){k(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=le(e,n);if(vu(t.visibleWrites,s))return null;{const o=fn(t.visibleWrites,s);return _u(o)?i.getChild(n):Ur(o,i.getChild(n))}}function cI(t,e,n,r){const i=le(e,n),s=Zn(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=fn(t.visibleWrites,i);return Ur(o,r.getNode().getImmediateChild(n))}else return null}function dI(t,e){return Zn(t.visibleWrites,e)}function hI(t,e,n,r,i,s,o){let l;const a=fn(t.visibleWrites,e),u=Zn(a,$());if(u!=null)l=u;else if(n!=null)l=Ur(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const h=[],d=o.getCompare(),f=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let w=f.getNext();for(;w&&h.length<i;)d(w,r)!==0&&h.push(w),w=f.getNext();return h}else return[]}function fI(){return{visibleWrites:lt.empty(),allWrites:[],lastWriteId:-1}}function yu(t,e,n,r){return Vv(t.writeTree,t.treePath,e,n,r)}function Gv(t,e){return aI(t.writeTree,t.treePath,e)}function Tf(t,e,n,r){return uI(t.writeTree,t.treePath,e,n,r)}function Bo(t,e){return dI(t.writeTree,le(t.treePath,e))}function pI(t,e,n,r,i,s){return hI(t.writeTree,t.treePath,e,n,r,i,s)}function Kc(t,e,n){return cI(t.writeTree,t.treePath,e,n)}function Kv(t,e){return Yv(le(t.treePath,e),t.writeTree)}function Yv(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;k(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),k(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,yf(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,H1(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,$1(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,yf(r,e.snapshotNode,i.oldSnap));else throw $r("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Qv=new gI;class Yc{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Gc(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Kc(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Gn(this.viewCache_),s=pI(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}function vI(t,e){k(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),k(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function _I(t,e,n,r,i){const s=new mI;let o,l;if(n.type===ft.OVERWRITE){const u=n;u.source.fromUser?o=wu(t,e,u.path,u.snap,r,i,s):(k(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!j(u.path),o=Wo(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===ft.MERGE){const u=n;u.source.fromUser?o=wI(t,e,u.path,u.children,r,i,s):(k(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=Eu(t,e,u.path,u.children,r,i,l,s))}else if(n.type===ft.ACK_USER_WRITE){const u=n;u.revert?o=CI(t,e,u.path,r,i,s):o=EI(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===ft.LISTEN_COMPLETE)o=SI(t,e,n.path,r,s);else throw $r("Unknown operation type: "+n.type);const a=s.getChanges();return yI(e,o,a),{viewCache:o,changes:a}}function yI(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=gu(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(W1(gu(e)))}}function qv(t,e,n,r,i,s){const o=e.eventCache;if(Bo(r,n)!=null)return e;{let l,a;if(j(n))if(k(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Gn(e),h=u instanceof z?u:z.EMPTY_NODE,d=Gv(r,h);l=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const u=yu(r,Gn(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=M(n);if(u===".priority"){k(gn(n)===1,"Can't have a priority with additional path components");const h=o.getNode();a=e.serverCache.getNode();const d=Tf(r,n,h,a);d!=null?l=t.filter.updatePriority(h,d):l=o.getNode()}else{const h=Y(n);let d;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const f=Tf(r,n,o.getNode(),a);f!=null?d=o.getNode().getImmediateChild(u).updateChild(h,f):d=o.getNode().getImmediateChild(u)}else d=Kc(r,u,e.serverCache);d!=null?l=t.filter.updateChild(o.getNode(),u,d,h,i,s):l=o.getNode()}}return xi(e,l,o.isFullyInitialized()||j(n),t.filter.filtersNodes())}}function Wo(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const h=o?t.filter:t.filter.getIndexedFilter();if(j(n))u=h.updateFullNode(a.getNode(),r,null);else if(h.filtersNodes()&&!a.isFiltered()){const w=a.getNode().updateChild(n,r);u=h.updateFullNode(a.getNode(),w,null)}else{const w=M(n);if(!a.isCompleteForPath(n)&&gn(n)>1)return e;const v=Y(n),y=a.getNode().getImmediateChild(w).updateChild(v,r);w===".priority"?u=h.updatePriority(a.getNode(),y):u=h.updateChild(a.getNode(),w,y,v,Qv,null)}const d=Bv(e,u,a.isFullyInitialized()||j(n),h.filtersNodes()),f=new Yc(i,d,s);return qv(t,d,n,i,f,l)}function wu(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const h=new Yc(i,e,s);if(j(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=xi(e,u,!0,t.filter.filtersNodes());else{const d=M(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=xi(e,u,l.isFullyInitialized(),l.isFiltered());else{const f=Y(n),w=l.getNode().getImmediateChild(d);let v;if(j(f))v=r;else{const g=h.getCompleteChild(d);g!=null?Tv(f)===".priority"&&g.getChild(Nv(f)).isEmpty()?v=g:v=g.updateChild(f,r):v=z.EMPTY_NODE}if(w.equals(v))a=e;else{const g=t.filter.updateChild(l.getNode(),d,v,f,h,o);a=xi(e,g,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function xf(t,e){return t.eventCache.isCompleteForChild(e)}function wI(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const h=le(n,a);xf(e,M(h))&&(l=wu(t,l,h,u,i,s,o))}),r.foreach((a,u)=>{const h=le(n,a);xf(e,M(h))||(l=wu(t,l,h,u,i,s,o))}),l}function Nf(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Eu(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;j(n)?u=r:u=new K(null).setTree(n,r);const h=e.serverCache.getNode();return u.children.inorderTraversal((d,f)=>{if(h.hasChild(d)){const w=e.serverCache.getNode().getImmediateChild(d),v=Nf(t,w,f);a=Wo(t,a,new q(d),v,i,s,o,l)}}),u.children.inorderTraversal((d,f)=>{const w=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!h.hasChild(d)&&!w){const v=e.serverCache.getNode().getImmediateChild(d),g=Nf(t,v,f);a=Wo(t,a,new q(d),g,i,s,o,l)}}),a}function EI(t,e,n,r,i,s,o){if(Bo(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(j(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Wo(t,e,n,a.getNode().getChild(n),i,s,l,o);if(j(n)){let u=new K(null);return a.getNode().forEachChild(xr,(h,d)=>{u=u.set(new q(h),d)}),Eu(t,e,n,u,i,s,l,o)}else return e}else{let u=new K(null);return r.foreach((h,d)=>{const f=le(n,h);a.isCompleteForPath(f)&&(u=u.set(h,a.getNode().getChild(f)))}),Eu(t,e,n,u,i,s,l,o)}}function SI(t,e,n,r,i){const s=e.serverCache,o=Bv(e,s.getNode(),s.isFullyInitialized()||j(n),s.isFiltered());return qv(t,o,n,r,Qv,i)}function CI(t,e,n,r,i,s){let o;if(Bo(r,n)!=null)return e;{const l=new Yc(r,e,i),a=e.eventCache.getNode();let u;if(j(n)||M(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=yu(r,Gn(e));else{const d=e.serverCache.getNode();k(d instanceof z,"serverChildren would be complete if leaf node"),h=Gv(r,d)}h=h,u=t.filter.updateFullNode(a,h,s)}else{const h=M(n);let d=Kc(r,h,e.serverCache);d==null&&e.serverCache.isCompleteForChild(h)&&(d=a.getImmediateChild(h)),d!=null?u=t.filter.updateChild(a,h,d,Y(n),l,s):e.eventCache.getNode().hasChild(h)?u=t.filter.updateChild(a,h,z.EMPTY_NODE,Y(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=yu(r,Gn(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Bo(r,$())!=null,xi(e,u,o,t.filter.filtersNodes())}}function kI(t,e){const n=Gn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!j(e)&&!n.getImmediateChild(M(e)).isEmpty())?n.getChild(e):null}function Rf(t,e,n,r){e.type===ft.MERGE&&e.source.queryId!==null&&(k(Gn(t.viewCache_),"We should always have a full cache before handling merges"),k(gu(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=_I(t.processor_,i,e,n,r);return vI(t.processor_,s.viewCache),k(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,II(t,s.changes,s.viewCache.eventCache.getNode())}function II(t,e,n,r){const i=t.eventRegistrations_;return J1(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pf;function TI(t){k(!Pf,"__referenceConstructor has already been defined"),Pf=t}function Qc(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return k(s!=null,"SyncTree gave us an op for an invalid query."),Rf(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Rf(o,e,n,r));return s}}function qc(t,e){let n=null;for(const r of t.views.values())n=n||kI(r,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Af;function xI(t){k(!Af,"__referenceConstructor has already been defined"),Af=t}class Of{constructor(e){this.listenProvider_=e,this.syncPointTree_=new K(null),this.pendingWriteTree_=fI(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Xv(t,e,n,r,i){return nI(t.pendingWriteTree_,e,n,r,i),i?pl(t,new Vn(jv(),e,n)):[]}function bn(t,e,n=!1){const r=rI(t.pendingWriteTree_,e);if(iI(t.pendingWriteTree_,e)){let s=new K(null);return r.snap!=null?s=s.set($(),!0):qe(r.children,o=>{s=s.set(new q(o),!0)}),pl(t,new zo(r.path,s,n))}else return[]}function fl(t,e,n){return pl(t,new Vn(Fv(),e,n))}function NI(t,e,n){const r=K.fromObject(n);return pl(t,new Ji(Fv(),e,r))}function RI(t,e,n,r){const i=e_(t,r);if(i!=null){const s=t_(i),o=s.path,l=s.queryId,a=Ge(o,e),u=new Vn(Uv(l),a,n);return n_(t,o,u)}else return[]}function PI(t,e,n,r){const i=e_(t,r);if(i){const s=t_(i),o=s.path,l=s.queryId,a=Ge(o,e),u=K.fromObject(n),h=new Ji(Uv(l),a,u);return n_(t,o,h)}else return[]}function Xc(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Ge(o,e),u=qc(l,a);if(u)return u});return Vv(i,e,s,n,!0)}function pl(t,e){return Jv(e,t.syncPointTree_,null,$v(t.pendingWriteTree_,$()))}function Jv(t,e,n,r){if(j(t.path))return Zv(t,e,n,r);{const i=e.get($());n==null&&i!=null&&(n=qc(i,$()));let s=[];const o=M(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,h=Kv(r,o);s=s.concat(Jv(l,a,u,h))}return i&&(s=s.concat(Qc(i,t,r,n))),s}}function Zv(t,e,n,r){const i=e.get($());n==null&&i!=null&&(n=qc(i,$()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=Kv(r,o),h=t.operationForChild(o);h&&(s=s.concat(Zv(h,l,a,u)))}),i&&(s=s.concat(Qc(i,t,r,n))),s}function e_(t,e){return t.tagToQueryMap.get(e)}function t_(t){const e=t.indexOf("$");return k(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new q(t.substr(0,e))}}function n_(t,e,n){const r=t.syncPointTree_.get(e);k(r,"Missing sync point for query tag that we're tracking");const i=$v(t.pendingWriteTree_,e);return Qc(r,n,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Jc(n)}node(){return this.node_}}class Zc{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=le(this.path_,e);return new Zc(this.syncTree_,n)}node(){return Xc(this.syncTree_,this.path_)}}const AI=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},bf=function(t,e,n){if(!t||typeof t!="object")return t;if(k(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return OI(t[".sv"],e,n);if(typeof t[".sv"]=="object")return bI(t[".sv"],e);k(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},OI=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:k(!1,"Unexpected server value: "+t)}},bI=function(t,e,n){t.hasOwnProperty("increment")||k(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&k(!1,"Unexpected increment value: "+r);const i=e.node();if(k(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},DI=function(t,e,n,r){return ed(e,new Zc(n,t),r)},r_=function(t,e,n){return ed(t,new Jc(e),n)};function ed(t,e,n){const r=t.getPriority().val(),i=bf(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=bf(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new ce(l,me(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new ce(i))),o.forEachChild(Ce,(l,a)=>{const u=ed(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function nd(t,e){let n=e instanceof q?e:new q(e),r=t,i=M(n);for(;i!==null;){const s=Lr(r.node.children,i)||{children:{},childCount:0};r=new td(i,r,s),n=Y(n),i=M(n)}return r}function qr(t){return t.node.value}function i_(t,e){t.node.value=e,Su(t)}function s_(t){return t.node.childCount>0}function LI(t){return qr(t)===void 0&&!s_(t)}function ml(t,e){qe(t.node.children,(n,r)=>{e(new td(n,t,r))})}function o_(t,e,n,r){n&&!r&&e(t),ml(t,i=>{o_(i,e,!0,r)}),n&&r&&e(t)}function MI(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function ds(t){return new q(t.parent===null?t.name:ds(t.parent)+"/"+t.name)}function Su(t){t.parent!==null&&jI(t.parent,t.name,t)}function jI(t,e,n){const r=LI(n),i=zt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Su(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Su(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FI=/[\[\].#$\/\u0000-\u001F\u007F]/,UI=/[\[\].#$\u0000-\u001F\u007F]/,oa=10*1024*1024,l_=function(t){return typeof t=="string"&&t.length!==0&&!FI.test(t)},a_=function(t){return typeof t=="string"&&t.length!==0&&!UI.test(t)},zI=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),a_(t)},BI=function(t,e,n,r){rd(kc(t,"value"),e,n)},rd=function(t,e,n){const r=n instanceof q?new S1(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+xn(r));if(typeof e=="function")throw new Error(t+"contains a function "+xn(r)+" with contents = "+e.toString());if(sv(e))throw new Error(t+"contains "+e.toString()+" "+xn(r));if(typeof e=="string"&&e.length>oa/3&&al(e)>oa)throw new Error(t+"contains a string greater than "+oa+" utf8 bytes "+xn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(qe(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!l_(o)))throw new Error(t+" contains an invalid key ("+o+") "+xn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);C1(r,o),rd(t,l,r),k1(r)}),i&&s)throw new Error(t+' contains ".value" child '+xn(r)+" in addition to actual children.")}},u_=function(t,e,n,r){if(!a_(n))throw new Error(kc(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},WI=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),u_(t,e,n)},$I=function(t,e){if(M(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},HI=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!l_(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!zI(n))throw new Error(kc(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function c_(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Rv(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Ft(t,e,n){c_(t,n),GI(t,r=>rt(r,e)||rt(e,r))}function GI(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(KI(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function KI(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Ii&&Se("event: "+n.toString()),Qr(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YI="repo_interrupt",QI=25;class qI{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new VI,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Uo(),this.transactionQueueTree_=new td,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function XI(t,e,n){if(t.stats_=Bc(t.repoInfo_),t.forceRestClient_||Kk())t.server_=new Fo(t.repoInfo_,(r,i,s,o)=>{Df(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Lf(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ge(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Rt(t.repoInfo_,e,(r,i,s,o)=>{Df(t,r,i,s,o)},r=>{Lf(t,r)},r=>{ZI(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=Jk(t.repoInfo_,()=>new X1(t.stats_,t.server_)),t.infoData_=new G1,t.infoSyncTree_=new Of({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=fl(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),sd(t,"connected",!1),t.serverSyncTree_=new Of({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);Ft(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function JI(t){const n=t.infoData_.getNode(new q(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function id(t){return AI({timestamp:JI(t)})}function Df(t,e,n,r,i){t.dataUpdateCount++;const s=new q(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=xo(n,u=>me(u));o=PI(t.serverSyncTree_,s,a,i)}else{const a=me(n);o=RI(t.serverSyncTree_,s,a,i)}else if(r){const a=xo(n,u=>me(u));o=NI(t.serverSyncTree_,s,a)}else{const a=me(n);o=fl(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=gl(t,s)),Ft(t.eventQueue_,l,o)}function Lf(t,e){sd(t,"connected",e),e===!1&&tT(t)}function ZI(t,e){qe(e,(n,r)=>{sd(t,n,r)})}function sd(t,e,n){const r=new q("/.info/"+e),i=me(n);t.infoData_.updateSnapshot(r,i);const s=fl(t.infoSyncTree_,r,i);Ft(t.eventQueue_,r,s)}function d_(t){return t.nextWriteId_++}function eT(t,e,n,r,i){od(t,"set",{path:e.toString(),value:n,priority:r});const s=id(t),o=me(n,r),l=Xc(t.serverSyncTree_,e),a=r_(o,l,s),u=d_(t),h=Xv(t.serverSyncTree_,e,a,u,!0);c_(t.eventQueue_,h),t.server_.put(e.toString(),o.val(!0),(f,w)=>{const v=f==="ok";v||Me("set at "+e+" failed: "+f);const g=bn(t.serverSyncTree_,u,!v);Ft(t.eventQueue_,e,g),rT(t,i,f,w)});const d=g_(t,e);gl(t,d),Ft(t.eventQueue_,d,[])}function tT(t){od(t,"onDisconnectEvents");const e=id(t),n=Uo();mu(t.onDisconnect_,$(),(i,s)=>{const o=DI(i,s,t.serverSyncTree_,e);Mv(n,i,o)});let r=[];mu(n,$(),(i,s)=>{r=r.concat(fl(t.serverSyncTree_,i,s));const o=g_(t,i);gl(t,o)}),t.onDisconnect_=Uo(),Ft(t.eventQueue_,$(),r)}function nT(t){t.persistentConnection_&&t.persistentConnection_.interrupt(YI)}function od(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Se(n,...e)}function rT(t,e,n,r){e&&Qr(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function h_(t,e,n){return Xc(t.serverSyncTree_,e,n)||z.EMPTY_NODE}function ld(t,e=t.transactionQueueTree_){if(e||vl(t,e),qr(e)){const n=p_(t,e);k(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&iT(t,ds(e),n)}else s_(e)&&ml(e,n=>{ld(t,n)})}function iT(t,e,n){const r=n.map(u=>u.currentWriteId),i=h_(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const h=n[u];k(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const d=Ge(e,h.path);s=s.updateChild(d,h.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{od(t,"transaction put response",{path:a.toString(),status:u});let h=[];if(u==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,h=h.concat(bn(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();vl(t,nd(t.transactionQueueTree_,e)),ld(t,t.transactionQueueTree_),Ft(t.eventQueue_,e,h);for(let f=0;f<d.length;f++)Qr(d[f])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{Me("transaction at "+a.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}gl(t,e)}},o)}function gl(t,e){const n=f_(t,e),r=ds(n),i=p_(t,n);return sT(t,i,r),r}function sT(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=Ge(n,a.path);let h=!1,d;if(k(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)h=!0,d=a.abortReason,i=i.concat(bn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=QI)h=!0,d="maxretry",i=i.concat(bn(t.serverSyncTree_,a.currentWriteId,!0));else{const f=h_(t,a.path,o);a.currentInputSnapshot=f;const w=e[l].update(f.val());if(w!==void 0){rd("transaction failed: Data returned ",w,a.path);let v=me(w);typeof w=="object"&&w!=null&&zt(w,".priority")||(v=v.updatePriority(f.getPriority()));const y=a.currentWriteId,m=id(t),p=r_(v,f,m);a.currentOutputSnapshotRaw=v,a.currentOutputSnapshotResolved=p,a.currentWriteId=d_(t),o.splice(o.indexOf(y),1),i=i.concat(Xv(t.serverSyncTree_,a.path,p,a.currentWriteId,a.applyLocally)),i=i.concat(bn(t.serverSyncTree_,y,!0))}else h=!0,d="nodata",i=i.concat(bn(t.serverSyncTree_,a.currentWriteId,!0))}Ft(t.eventQueue_,n,i),i=[],h&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(d==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(d),!1,null))))}vl(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)Qr(r[l]);ld(t,t.transactionQueueTree_)}function f_(t,e){let n,r=t.transactionQueueTree_;for(n=M(e);n!==null&&qr(r)===void 0;)r=nd(r,n),e=Y(e),n=M(e);return r}function p_(t,e){const n=[];return m_(t,e,n),n.sort((r,i)=>r.order-i.order),n}function m_(t,e,n){const r=qr(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);ml(e,i=>{m_(t,i,n)})}function vl(t,e){const n=qr(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,i_(e,n.length>0?n:void 0)}ml(e,r=>{vl(t,r)})}function g_(t,e){const n=ds(f_(t,e)),r=nd(t.transactionQueueTree_,e);return MI(r,i=>{la(t,i)}),la(t,r),o_(r,i=>{la(t,i)}),n}function la(t,e){const n=qr(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(k(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(k(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(bn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?i_(e,void 0):n.length=s+1,Ft(t.eventQueue_,ds(e),i);for(let o=0;o<r.length;o++)Qr(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oT(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function lT(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Me(`Invalid query segment '${n}' in query '${t}'`)}return e}const Mf=function(t,e){const n=aT(t),r=n.namespace;n.domain==="firebase.com"&&jt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&jt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Uk();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new vv(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new q(n.pathString)}},aT=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let h=t.indexOf("/");h===-1&&(h=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(h,d)),h<d&&(i=oT(t.substring(h,d)));const f=lT(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const w=e.slice(0,u);if(w.toLowerCase()==="localhost")n="localhost";else if(w.split(".").length<=2)n=w;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return j(this._path)?null:Tv(this._path)}get ref(){return new er(this._repo,this._path)}get _queryIdentifier(){const e=Ef(this._queryParams),n=Uc(e);return n==="{}"?"default":n}get _queryObject(){return Ef(this._queryParams)}isEqual(e){if(e=ut(e),!(e instanceof ad))return!1;const n=this._repo===e._repo,r=Rv(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+E1(this._path)}}class er extends ad{constructor(e,n){super(e,n,new Vc,!1)}get parent(){const e=Nv(this._path);return e===null?null:new er(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}function uT(t,e){return t=ut(t),t._checkNotDeleted("ref"),e!==void 0?cT(t._root,e):t._root}function cT(t,e){return t=ut(t),M(t._path)===null?WI("child","path",e):u_("child","path",e),new er(t._repo,le(t._path,e))}function dT(t,e){t=ut(t),$I("set",t._path),BI("set",e,t._path);const n=new ll;return eT(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}TI(er);xI(er);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hT="FIREBASE_DATABASE_EMULATOR_HOST",Cu={};let fT=!1;function pT(t,e,n,r){t.repoInfo_=new vv(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function mT(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||jt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Se("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Mf(s,i),l=o.repoInfo,a;typeof process<"u"&&tf&&(a=tf[hT]),a?(s=`http://${a}?ns=${l.namespace}`,o=Mf(s,i),l=o.repoInfo):o.repoInfo.secure;const u=new Qk(t.name,t.options,e);HI("Invalid Firebase Database URL",o),j(o.path)||jt("Database URL must point to the root of a Firebase Database (not including a child path).");const h=vT(l,t,u,new Yk(t.name,n));return new _T(h,t)}function gT(t,e){const n=Cu[e];(!n||n[t.key]!==t)&&jt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),nT(t),delete n[t.key]}function vT(t,e,n,r){let i=Cu[e.name];i||(i={},Cu[e.name]=i);let s=i[t.toURLString()];return s&&jt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new qI(t,fT,n,r),i[t.toURLString()]=s,s}class _T{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(XI(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new er(this._repo,$())),this._rootInternal}_delete(){return this._rootInternal!==null&&(gT(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&jt("Cannot call "+e+" on a deleted database.")}}function yT(t=Eg(),e){const n=xc(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=cE("database");r&&wT(n,...r)}return n}function wT(t,e,n,r={}){t=ut(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&jt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&jt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Xs(Xs.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:dE(r.mockUserToken,t.app.options.projectId);s=new Xs(o)}pT(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ET(t){bk(Vr),Mr(new $n("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return mT(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),hn(nf,rf,t),hn(nf,rf,"esm2017")}Rt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Rt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};ET();function ST(){const t=ig(),e=async s=>{const l=await(await fetch(`${ol}auth`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)})).json();l.success?(console.log("Response Data:",l.userdata),console.log("Message:",l.message),t("/profile",{state:{data:l.userdata}})):console.error("Error",l.error)},n=async()=>{const s=new jn("microsoft.com");s.setCustomParameters({prompt:"consent",tenant:"850aa78d-94e1-4bc6-9cf3-8c11b530701c"});try{const o=await Kh(r,s),a=jn.credentialFromResult(o).accessToken;console.log(o.user);const u=o.user,h={uid:u.uid,email:u.email,name:u.displayName};console.log("User logged in with Outlook:",h),e(h);const d=uT(yT(),"users/"+o.user.uid),f=await dT(d,{displayName:o.user.displayName,email:o.user.email}).then(()=>{console.log("User data saved successfully")}).catch(w=>{console.error("Error saving user data:",w)})}catch(o){const l=jn.credentialFromError(o);console.log("Error ",o),console.error("Auth Error ",l)}},r=tv(),i=async()=>{const s=new wt(r);try{const l=(await Kh(r,s)).user,a={uid:l.uid,email:l.email,name:l.displayName};console.log("User logged in with Google:",a),e(a)}catch(o){console.log(o)}};return c.jsx("div",{className:"min-h-screen bg-cover bg-center relative",style:{backgroundImage:"url('home/bg.jpg')"},children:c.jsx("div",{className:"relative z-0",children:c.jsx("main",{className:"flex justify-center items-center min-h-[calc(130vh-80px)]",children:c.jsxs("div",{className:"bg-white/80 backdrop-blur-md p-10 rounded-lg shadow-lg w-full max-w-lg",children:[c.jsx("h1",{className:"text-3xl font-medium text-center text-green-500 mb-8",children:"Create/Update Profile"}),c.jsxs("div",{className:"space-y-6",children:[c.jsxs("button",{onClick:i,className:"w-full flex items-center justify-start text-left pl-4 py-6 border border-gray-300 rounded hover:bg-gray-50",children:[c.jsx("img",{src:`data:image/png;base64,\r
                iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTA\r
                AALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJKSURBVHg\r
                BvZTPaxNBFMffm93VpI2QQOqpyuhFBKFbUKmguIt6j9568z+Iihd/0YiCHgTTu2\r
                BzEKkIyUkvtRk9iUa7/gVdD2o9SFZaadP9Mc7uJtvNtlmtQr+w7OzbN595b+bN\r
                Qxigtn58zEGvBIglAE4BMC/Mhhib3OWNvexDbat5mDQsamo+R+QpAboEKeIcTA\r
                UcrTC/8Hkg8JumUokoTUSg8JfquDA+yt4bvW85HtlWMARucUBTDC3x+GmrsTAr\r
                o6xlxP0j4DCRHm6KTExY9nLTBxizNrKYoLLk1sW/xsh86zYkFKS8+hKozehipz\r
                WysZKHaqH57hNsUySYvEsuZ899gczJpSiyf4EFrBCAwb5kTi2BvH8F1p4cnkk6\r
                6vfXx8Bz82mw5vXs6yBle05ud+vMpzPlrKMnnc/cXWlyBC0NCHyYknCEqStvR1\r
                0gt2K2/4L3Ioxq6aNdVNXHpU1QF+Ey8bgef5ADi/t4jvUzPBTkTByMNrt6EKq/\r
                joA8xMvC2ldj7Eaur4C1e22KnkJ7V028DVYpWEGEDpFrd5bVABaIY+XYs/OnIU\r
                2uUhYQGn1zqRqlnNXXzBfr+6pxf+4RdnT2wlSS42/HiUcP6gQh1jzQfHUzW+tG\r
                2nWsl/JKR1rg0H/9RKlYYq966UZ3mdhFGPp6DYhTBH8/527tYX1AXxNPS9RFqZ\r
                mEDpIPzXy/cvHN1UNRbyRxh7eTDdPe7Y6LVWb+BBNdyPTkH3ocFtoHKIyWlEXr\r
                UoWXChzyInJTdCQDPJxuTT5nsBP6DUkW1QHQYUIiAAAAAElFTkSuQmCC`,alt:"Google logo",className:"w-6 h-6 mr-4"}),"Continue with Google"]}),c.jsxs("button",{onClick:n,className:"w-full flex items-center justify-start text-left pl-4 py-6 border border-gray-300 rounded hover:bg-gray-50",children:[c.jsx("img",{src:"https://img.icons8.com/?size=100&id=ut6gQeo5pNqf&format=png&color=000000",alt:"Outlook logo",className:"w-6 h-6 mr-4"}),"Continue with Outlook"]})]})]})})})})}/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CT=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),v_=(...t)=>t.filter((e,n,r)=>!!e&&r.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var kT={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IT=S.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...l},a)=>S.createElement("svg",{ref:a,...kT,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:v_("lucide",i),...l},[...o.map(([u,h])=>S.createElement(u,h)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __=(t,e)=>{const n=S.forwardRef(({className:r,...i},s)=>S.createElement(IT,{ref:s,iconNode:e,className:v_(`lucide-${CT(t)}`,r),...i}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jf=__("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ds=__("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);function TT(){var w;const e=(w=Jn().state)==null?void 0:w.data;console.log("data",e);const[n,r]=S.useState({uid:e.uid,name:e.name,email:e.email,degree:e.degree,YearOfGraduation:e.YearOfGraduation,phone:e.phone||"Phone",location:e.location,linkedin:e.linkedin,education:e.education,work:e.work}),[i,s]=S.useState([{university:"",degree:"",year:""}]),[o,l]=S.useState([{domain:"software-development",currentPosition:"",company:"",experience:""}]),a=()=>{s([...i,{university:"",degree:"",year:""}])},u=()=>{l([...o,{domain:"software-development",currentPosition:"",company:"",experience:""}])},h=v=>{const g=i.filter((y,m)=>m!==v);s(g)},d=v=>{const g=o.filter((y,m)=>m!==v);l(g)},f=async v=>{v.preventDefault(),n.education=i,n.work=o,console.log(n),console.log(i),console.log(o);const y=await(await fetch(`${ol}profile`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json();y.success?(console.log("Response Data:",y),console.log("Message:",y.message)):console.error("Error",y.error)};return c.jsxs("div",{className:"min-h-screen bg-no-repeat bg-center bg-cover",style:{backgroundImage:"url('home/bg.jpg')",margin:"110px 0 0 0",padding:"0 0 50px 0"},children:[c.jsx("div",{className:"w-full pt-10 pb-4 text-center text-black",children:c.jsx("h1",{className:"text-5xl font-semibold mb-6",children:"Add your Details"})}),c.jsx("main",{className:"container mx-auto px-4",children:c.jsx("div",{className:"bg-white bg-opacity-90 rounded-lg shadow-lg w-full max-w-4xl mx-auto mt-6 overflow-hidden",children:c.jsx("div",{className:"p-6",children:c.jsxs("form",{onSubmit:f,className:"space-y-8",children:[c.jsxs("section",{children:[c.jsx("h2",{className:"text-2xl font-semibold mb-4 text-gray-800",children:"Personal Information"}),c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[c.jsxs("div",{children:[c.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700 mb-1",children:"Name"}),c.jsx("input",{type:"text",id:"name",name:"name",placeholder:n.name,onChange:v=>n.name=v.target.value,className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),c.jsxs("div",{children:[c.jsx("label",{htmlFor:"degree",className:"block text-sm font-medium text-gray-700 mb-1",children:"Degree"}),c.jsxs("select",{type:"text",id:"degree",name:"degree",onChange:v=>n.degree=v.target.value,placeholder:n.degree,className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",children:[c.jsx("option",{value:"B.Tech",children:"B.Tech"}),c.jsx("option",{value:"M.Tech",children:"M.Tech"}),c.jsx("option",{value:"PhD",children:"PhD"})]})]}),c.jsxs("div",{children:[c.jsx("label",{htmlFor:"graduation-year",className:"block text-sm font-medium text-gray-700 mb-1",children:"Year of Graduation"}),c.jsx("input",{type:"text",id:"graduationYear",name:"graduationYear",placeholder:n.YearOfGraduation,onChange:v=>n.YearOfGraduation=v.target.value,className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"})]})]}),c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mt-4",children:[c.jsxs("div",{children:[c.jsx("label",{htmlFor:"phone",className:"block text-sm font-medium text-gray-700 mb-1",children:"Contact Info"}),c.jsxs("div",{className:"flex",children:[c.jsxs("select",{className:"w-20 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500",children:[c.jsx("option",{value:"91",children:"+91"}),c.jsx("option",{value:"1",children:"+1"})]}),c.jsx("input",{type:"tel",id:"phone",name:"phone",placeholder:n.phone,onChange:v=>n.phone=v.target.value,className:"flex-1 px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500"})]})]}),c.jsxs("div",{children:[c.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700 mb-1",children:"Email"}),c.jsx("input",{type:"email",id:"email",name:"email",placeholder:n.email,onChange:v=>n.email=v.target.value,disabled:!0,className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"})]})]}),c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mt-4",children:[c.jsxs("div",{children:[c.jsx("label",{htmlFor:"location",className:"block text-sm font-medium text-gray-700 mb-1",children:"Location"}),c.jsx("input",{type:"text",id:"location",name:"location",placeholder:n.location,onChange:v=>n.location=v.target.value,className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),c.jsxs("div",{children:[c.jsx("label",{htmlFor:"linkedin",className:"block text-sm font-medium text-gray-700 mb-1",children:"LinkedIn"}),c.jsx("input",{type:"text",id:"linkedin",name:"linkedin",placeholder:n.linkedin,onChange:v=>n.linkedin=v.target.value,className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"})]})]})]}),c.jsxs("section",{children:[c.jsx("h2",{className:"text-2xl font-semibold mb-4 text-gray-800",children:"Education"}),n.education.map((v,g)=>c.jsx("div",{className:"space-y-4",children:c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[c.jsxs("div",{children:[c.jsx("label",{htmlFor:`university-${g}`,className:"block text-sm font-medium text-gray-700 mb-1",children:"University"}),c.jsx("input",{type:"text",id:`university-${g}`,placeholder:v.university,disabled:!0,className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),c.jsxs("div",{children:[c.jsx("label",{htmlFor:`degree-${g}`,className:"block text-sm font-medium text-gray-700 mb-1",children:"Degree"}),c.jsx("input",{type:"text",id:`degree-${g}`,placeholder:v.degree,disabled:!0,className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),c.jsxs("div",{children:[c.jsx("label",{htmlFor:`year-${g}`,className:"block text-sm font-medium text-gray-700 mb-1",children:"Year of Graduation"}),c.jsxs("div",{className:"relative",children:[c.jsx("input",{type:"text",id:`year-${g}`,placeholder:v.year,disabled:!0,className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"}),c.jsx("button",{type:"button",className:"absolute right-2 top-2 text-red-500 hover:text-red-700 focus:outline-none",onClick:()=>h(g),children:c.jsx(Ds,{className:"w-5 h-5"})})]})]})]})},g)),i.map((v,g)=>c.jsx("div",{className:"space-y-4",children:c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[c.jsxs("div",{children:[c.jsx("label",{htmlFor:`university-${g}`,className:"block text-sm font-medium text-gray-700 mb-1",children:"University"}),c.jsx("input",{type:"text",id:`university-${g}`,onChange:y=>i[g].university=y.target.value,className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),c.jsxs("div",{children:[c.jsx("label",{htmlFor:`degree-${g}`,className:"block text-sm font-medium text-gray-700 mb-1",children:"Degree"}),c.jsx("input",{type:"text",id:`degree-${g}`,onChange:y=>i[g].degree=y.target.value,className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),c.jsxs("div",{children:[c.jsx("label",{htmlFor:`year-${g}`,className:"block text-sm font-medium text-gray-700 mb-1",children:"Year of Graduation"}),c.jsxs("div",{className:"relative",children:[c.jsx("input",{type:"text",id:`year-${g}`,onChange:y=>i[g].year=y.target.value,className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"}),c.jsx("button",{type:"button",className:"absolute right-2 top-2 text-red-500 hover:text-red-700 focus:outline-none",onClick:()=>h(g),children:c.jsx(Ds,{className:"w-5 h-5"})})]})]})]})},g)),c.jsx("div",{className:"flex justify-center w-full mt-4",children:c.jsxs("button",{type:"button",className:"inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",onClick:a,children:[c.jsx(jf,{className:"w-4 h-4 mr-2"}),"Add More"]})})]}),c.jsxs("section",{children:[c.jsx("h2",{className:"text-2xl font-semibold mb-4 text-gray-800",children:"Work Experience"}),n.work.map((v,g)=>c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[c.jsxs("div",{children:[c.jsx("label",{htmlFor:`domain-${g}`,className:"block text-sm font-medium text-gray-700 mb-1",children:"Domain"}),c.jsx("input",{type:"text",id:`domain-${g}`,placeholder:v.domain,disabled:!0,className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),c.jsxs("div",{children:[c.jsx("label",{htmlFor:`currentPosition-${g}`,className:"block text-sm font-medium text-gray-700 mb-1",children:"Current Position"}),c.jsx("input",{type:"text",id:`currentPosition-${g}`,placeholder:v.currentPosition,disabled:!0,className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),c.jsxs("div",{children:[c.jsx("label",{htmlFor:`company-${g}`,className:"block text-sm font-medium text-gray-700 mb-1",children:"Company"}),c.jsx("input",{type:"text",id:`company-${g}`,placeholder:v.company,disabled:!0,className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),c.jsxs("div",{children:[c.jsx("label",{htmlFor:`experience-${g}`,className:"block text-sm font-medium text-gray-700 mb-1",children:"Years of Experience"}),c.jsxs("div",{className:"relative",children:[c.jsx("input",{type:"text",id:`experience-${g}`,placeholder:v.experience,disabled:!0,className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"}),c.jsx("button",{type:"button",className:"absolute right-2 top-2 text-red-500 hover:text-red-700 focus:outline-none",onClick:()=>d(g),children:c.jsx(Ds,{className:"w-5 h-5"})})]})]})]},g)),o.map((v,g)=>c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[c.jsxs("div",{children:[c.jsx("label",{htmlFor:`domain-${g}`,className:"block text-sm font-medium text-gray-700 mb-1",children:"Domain"}),c.jsxs("select",{id:`domain-${g}`,value:v.domain||"software-development",onChange:y=>{const m=[...o];m[g].domain=y.target.value,l(m)},className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",children:[c.jsx("option",{value:"software-development",children:"Software Development"}),c.jsx("option",{value:"data-analysis",children:"Data Analysis"}),c.jsx("option",{value:"project-management",children:"Project Management"})]})]}),c.jsxs("div",{children:[c.jsx("label",{htmlFor:`currentPosition-${g}`,className:"block text-sm font-medium text-gray-700 mb-1",children:"Current Position"}),c.jsx("input",{type:"text",id:`currentPosition-${g}`,onChange:y=>o[g].currentPosition=y.target.value,className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),c.jsxs("div",{children:[c.jsx("label",{htmlFor:`company-${g}`,className:"block text-sm font-medium text-gray-700 mb-1",children:"Company"}),c.jsx("input",{type:"text",id:`company-${g}`,onChange:y=>o[g].company=y.target.value,className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),c.jsxs("div",{children:[c.jsx("label",{htmlFor:`experience-${g}`,className:"block text-sm font-medium text-gray-700 mb-1",children:"Years of Experience"}),c.jsxs("div",{className:"relative",children:[c.jsx("input",{type:"text",id:`experience-${g}`,onChange:y=>o[g].experience=y.target.value,className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"}),c.jsx("button",{type:"button",className:"absolute right-2 top-2 text-red-500 hover:text-red-700 focus:outline-none",onClick:()=>d(g),children:c.jsx(Ds,{className:"w-5 h-5"})})]})]})]},g)),c.jsx("div",{className:"flex justify-center w-full mt-4",children:c.jsxs("button",{type:"button",className:"inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",onClick:u,children:[c.jsx(jf,{className:"w-4 h-4 mr-2"}),"Add More"]})})]}),c.jsx("div",{className:"flex justify-end w-full",children:c.jsx("button",{type:"submit",className:"px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105",children:"Submit"})})]})})})})]})}var y_={};Object.defineProperty(y_,"__esModule",{value:!0});y_.default=xT;function xT(t){return{id:"linkedin",name:"LinkedIn",type:"oauth",authorization:{url:"https://www.linkedin.com/oauth/v2/authorization",params:{scope:"openid profile email"}},token:"https://www.linkedin.com/oauth/v2/accessToken",client:{token_endpoint_auth_method:"client_secret_post"},userinfo:{url:"https://api.linkedin.com/v2/me",params:{projection:"(id,localizedFirstName,localizedLastName,profilePicture(displayImage~digitalmediaAsset:playableStreams))"}},async profile(e,n){var r,i;const o=await(await fetch("https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))",{headers:{Authorization:`Bearer ${n.access_token}`}})).json();return{id:e.id,name:`${e.localizedFirstName} ${e.localizedLastName}`,email:o==null||(r=o.elements)===null||r===void 0||(r=r[0])===null||r===void 0||(r=r["handle~"])===null||r===void 0?void 0:r.emailAddress,image:(i=e.profilePicture)===null||i===void 0||(i=i["displayImage~"])===null||i===void 0||(i=i.elements)===null||i===void 0||(i=i[0])===null||i===void 0||(i=i.identifiers)===null||i===void 0||(i=i[0])===null||i===void 0?void 0:i.identifier}},style:{logo:"/linkedin.svg",bg:"#069",text:"#fff"},options:t}}function rr({data:t}){console.log(t);const[e,n]=S.useState({name:"",role:"",batch:"",phone:"",mail:"",LinkedIn:""});return S.useEffect(()=>{t&&n({name:t.name,role:t.role,batch:t.batch,phone:"tel:"+t.phone,mail:"mailto:"+t.mail,LinkedIn:"https://www.linkedin.com/in/"+t.LinkedIn})},[t]),c.jsx(c.Fragment,{children:c.jsxs("div",{className:"team-card",children:[c.jsx("img",{src:"images/people.png",alt:""}),c.jsx("h1",{children:e.name}),c.jsx("h2",{children:e.role}),c.jsx("h3",{children:e.batch}),c.jsxs("div",{className:"team-social",children:[c.jsx("a",{href:e.phone,target:"",children:c.jsx("img",{src:"images/phone.png"})}),c.jsx("a",{href:e.mail,target:"blank",children:c.jsx("img",{src:"images/mail.png"})}),c.jsx("a",{href:e.LinkedIn,target:"blank",children:c.jsx("img",{src:"images/linkedin.png"})})]})]})})}function NT(){const t=[{name:"Aditya Jindal",role:"Coordinator",batch:"B.Tech 2025",phone:"+91-8447753616",mail:"adityajindal19@gmail.com",LinkedIn:"aditya-jindal-"},{name:"Sumit Kumar",role:"Lead Developer",batch:"B.Tech 2025",phone:"+91-8294677640",mail:"skrsumit250@gmail.com",LinkedIn:"sumit-kumar-iitg"},{name:"Sumeet Deepak Ahire",role:"Designer",batch:"B.Tech 2025",phone:"+91-9022801127",mail:"a.sumeet@iitg.ac.in",LinkedIn:"sumeet-ahire-98042922a"},{name:"N Nonglen Aditya Singha",role:"Developer",batch:"B.Tech 2026",phone:"+91-6002409602",mail:"nonglenadi@gmail.com",LinkedIn:"nonglen-aditya-singha-00a030247"},{name:"Dhiyanesh G",role:"Developer",batch:"B.Tech 2026",phone:"+91-7092695851",mail:"dhiyaneshg05@gmail.com",LinkedIn:"dhiyanesh-g-2115432a9"},{name:"Udai Bhati",role:"Developer",batch:"B.Tech 2026",phone:"+91-9057562991",mail:"udaibhati07@gmail.com",LinkedIn:"udai-bhati-761254245"}];return c.jsx(c.Fragment,{children:c.jsxs("div",{className:"teams",children:[c.jsx("h1",{children:"Our Team"}),c.jsxs("div",{className:"team-row",children:[c.jsx("h1",{children:"Heads"}),c.jsxs("div",{className:"team-row-card",children:[c.jsx(rr,{data:t[0]}),c.jsx(rr,{data:t[1]}),c.jsx(rr,{data:t[2]})]})]}),c.jsxs("div",{className:"team-row",children:[c.jsx("h1",{children:"Developers"}),c.jsxs("div",{className:"team-row-card",children:[c.jsx(rr,{data:t[3]}),c.jsx(rr,{data:t[4]}),c.jsx(rr,{data:t[5]})]})]})]})})}function RT(){var w;const e=(w=Jn().state)==null?void 0:w.data;console.log("data",e);const[n,r]=S.useState({uid:e.uid,name:e.name,email:e.email,degree:e.degree,YearOfGraduation:e.YearOfGraduation,phone:e.phone,location:e.location,linkedin:e.linkedin,education:e.education,work:e.work}),[i,s]=S.useState([{university:"IIT Guwahati",degree:"",year:""}]),[o,l]=S.useState([{domain:"",role:"",company:"",location:""}]),a=()=>{s([...i,{university:"",degree:"",year:""}])},u=v=>{const g=i.filter((y,m)=>m!==v);s(g)},h=()=>{l([...o,{domain:"",role:"",company:"",location:""}])},d=v=>{const g=o.filter((y,m)=>m!==v);l(g)},f=async()=>{n.education=i,n.work=o,console.log(n),console.log(i),console.log(o);const g=await(await fetch(`${ol}profile`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json();g.success?(console.log("Response Data:",g),console.log("Message:",g.message)):console.error("Error",g.error)};return c.jsx(c.Fragment,{children:c.jsxs("div",{className:"profile",children:[c.jsx("img",{id:"profile-bg",src:"images/profileBG.png",alt:""}),c.jsxs("div",{className:"profile-box",children:[c.jsx("h1",{children:"Profile"}),c.jsxs("div",{className:"profile-form",children:[c.jsx("h2",{children:"Personal Information"}),c.jsx("div",{className:"profile-form-3",children:c.jsxs("div",{className:"profile-form-field type1",children:[c.jsx("label",{htmlFor:"",children:"Name"}),c.jsx("input",{type:"text",placeholder:n.name,onChange:v=>n.name=v.target.value})]})}),c.jsxs("div",{className:"profile-form-2",children:[c.jsxs("div",{className:"profile-form-field type3",children:[c.jsx("label",{htmlFor:"",children:"Contact Number"}),c.jsx("input",{type:"text",placeholder:n.phone,onChange:v=>n.phone=v.target.value})]}),c.jsxs("div",{className:"profile-form-field type3",children:[c.jsx("label",{htmlFor:"",children:"Mail"}),c.jsx("input",{type:"mail",placeholder:n.email,onChange:v=>n.email=v.target.value,disabled:!0})]})]}),c.jsxs("div",{className:"profile-form-2",children:[c.jsxs("div",{className:"profile-form-field type3",children:[c.jsx("label",{htmlFor:"",children:"Current Location"}),c.jsx("input",{type:"text",placeholder:n.location,onChange:v=>n.location=v.target.value})]}),c.jsxs("div",{className:"profile-form-field type3",children:[c.jsx("label",{htmlFor:"",children:"LinkedIn"}),c.jsx("input",{type:"text",placeholder:n.linkedin,onChange:v=>n.linkedin=v.target.value})]})]}),c.jsx("hr",{}),c.jsx("h2",{children:"Education"}),i.map((v,g)=>c.jsxs("div",{className:"profile-form-3",children:[c.jsxs("div",{className:"profile-form-field type1",children:[c.jsx("label",{htmlFor:"",children:"University"}),c.jsx("input",{type:"text",onChange:y=>i[g].university=y.target.value,placeholder:v.university})]}),c.jsxs("div",{className:"profile-form-field type2",children:[c.jsx("label",{htmlFor:"",children:"Degree"}),c.jsxs("select",{name:"",id:"",onChange:y=>i[g].degree=y.target.value,placeholder:v.degree,children:[c.jsx("option",{value:"Degree",children:"Degree"}),c.jsx("option",{value:"B.Tech",children:"B.Tech"}),c.jsx("option",{value:"M.Tech",children:"M.Tech"}),c.jsx("option",{value:"PhD",children:"PhD"})]})]}),c.jsxs("div",{className:"profile-form-field type2",children:[c.jsx("label",{htmlFor:"",children:"Year of Graduation"}),c.jsx("input",{type:"text",onChange:y=>i[g].year=y.target.value,placeholder:v.year})]}),c.jsxs("div",{className:"profile-form-field",children:[c.jsx("label",{htmlFor:""}),c.jsx("img",{src:"images/delete.png",alt:"",onClick:()=>u(g)})]})]},g)),c.jsx("div",{className:"profile-button button1",children:c.jsx("button",{onClick:a,children:"Add More +"})}),c.jsx("hr",{}),c.jsx("h2",{children:"Work"}),o.map((v,g)=>c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"profile-form-2",children:[c.jsxs("div",{className:"profile-form-field type3",children:[c.jsx("label",{htmlFor:"",children:"Domain"}),c.jsxs("select",{name:"",id:"",onChange:y=>o[g].domain=y.target.value,children:[c.jsx("option",{value:"Domain",children:"Domain"}),c.jsx("option",{value:"Software",children:"Software"}),c.jsx("option",{value:"Consulting",children:"Consulting"}),c.jsx("option",{value:"Product",children:"Product"}),c.jsx("option",{value:"AI/M",children:"AI/ML"}),c.jsx("option",{value:"Analyst",children:"Analyst"}),c.jsx("option",{value:"Research",children:"Research"}),c.jsx("option",{value:"Other",children:"Other"})]})]}),c.jsxs("div",{className:"profile-form-field type3",children:[c.jsx("label",{htmlFor:"",children:"Role"}),c.jsx("input",{type:"text",onChange:y=>o[g].role=y.target.value})]})]}),c.jsxs("div",{className:"profile-form-3",children:[c.jsxs("div",{className:"profile-form-field type3",children:[c.jsx("label",{htmlFor:"",children:"Company"}),c.jsx("input",{type:"text",onChange:y=>o[g].company=y.target.value})]}),c.jsxs("div",{className:"profile-form-field",id:"resbtn1",children:[c.jsx("label",{htmlFor:""}),c.jsx("img",{src:"images/delete.png",alt:"",onClick:()=>d(g)})]}),c.jsxs("div",{className:"profile-form-field type3",children:[c.jsx("label",{htmlFor:"",children:"Location"}),c.jsx("input",{type:"text",onChange:y=>o[g].location=y.target.value})]}),c.jsxs("div",{className:"profile-form-field",id:"resbtn2",children:[c.jsx("label",{htmlFor:""}),c.jsx("img",{src:"images/delete.png",alt:"",onClick:()=>d(g)})]})]})]})),c.jsx("div",{className:"profile-button button1",children:c.jsx("button",{onClick:h,children:"Add More +"})}),c.jsx("hr",{}),c.jsx("div",{className:"profile-button button2",children:c.jsx("button",{onClick:f,children:"Submit"})})]})]})]})})}function PT(){return c.jsx(c.Fragment,{children:c.jsxs(Vw,{children:[c.jsx(Qw,{}),c.jsxs(Fw,{children:[c.jsx(In,{path:"/",element:c.jsx(Zw,{})}),c.jsx(In,{path:"/team",element:c.jsx(NT,{})}),c.jsx(In,{path:"/directory",element:c.jsx(tE,{})}),c.jsx(In,{path:"/auth",element:c.jsx(ST,{})}),c.jsx(In,{path:"/form",element:c.jsx(TT,{})}),c.jsx(In,{path:"/profile",element:c.jsx(RT,{})})]}),c.jsx(qw,{})]})})}qm(document.getElementById("root")).render(c.jsx(S.StrictMode,{children:c.jsx(PT,{})}));