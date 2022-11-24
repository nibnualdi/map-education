/*! For license information please see auth.js.LICENSE.txt */
var authReq;(()=>{var e={230:e=>{e.exports="object"==typeof self?self.FormData:window.FormData}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,n),s.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};(()=>{"use strict";function e(e,t){return function(){return e.apply(t,arguments)}}n.r(r),n.d(r,{login:()=>Qe});const{toString:t}=Object.prototype,{getPrototypeOf:o}=Object,s=(i=Object.create(null),e=>{const n=t.call(e);return i[n]||(i[n]=n.slice(8,-1).toLowerCase())});var i;const a=e=>(e=e.toLowerCase(),t=>s(t)===e),c=e=>t=>typeof t===e,{isArray:u}=Array,l=c("undefined"),f=a("ArrayBuffer"),d=c("string"),p=c("function"),h=c("number"),m=e=>null!==e&&"object"==typeof e,g=e=>{if("object"!==s(e))return!1;const t=o(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},b=a("Date"),y=a("File"),E=a("Blob"),w=a("FileList"),O=a("URLSearchParams");function R(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let r,o;if("object"!=typeof e&&(e=[e]),u(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let i;for(r=0;r<s;r++)i=o[r],t.call(null,e[i],i,e)}}const S=(v="undefined"!=typeof Uint8Array&&o(Uint8Array),e=>v&&e instanceof v);var v;const A=a("HTMLFormElement"),j=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),x=a("RegExp"),C=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};R(n,((n,o)=>{!1!==t(n,o,e)&&(r[o]=n)})),Object.defineProperties(e,r)},T={isArray:u,isArrayBuffer:f,isBuffer:function(e){return null!==e&&!l(e)&&null!==e.constructor&&!l(e.constructor)&&p(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{const n="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||t.call(e)===n||p(e.toString)&&e.toString()===n)},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&f(e.buffer),t},isString:d,isNumber:h,isBoolean:e=>!0===e||!1===e,isObject:m,isPlainObject:g,isUndefined:l,isDate:b,isFile:y,isBlob:E,isRegExp:x,isFunction:p,isStream:e=>m(e)&&p(e.pipe),isURLSearchParams:O,isTypedArray:S,isFileList:w,forEach:R,merge:function e(){const t={},n=(n,r)=>{g(t[r])&&g(n)?t[r]=e(t[r],n):g(n)?t[r]=e({},n):u(n)?t[r]=n.slice():t[r]=n};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&R(arguments[e],n);return t},extend:(t,n,r,{allOwnKeys:o}={})=>(R(n,((n,o)=>{r&&p(n)?t[o]=e(n,r):t[o]=n}),{allOwnKeys:o}),t),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let s,i,a;const c={};if(t=t||{},null==e)return t;do{for(s=Object.getOwnPropertyNames(e),i=s.length;i-- >0;)a=s[i],r&&!r(a,e,t)||c[a]||(t[a]=e[a],c[a]=!0);e=!1!==n&&o(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:s,kindOfTest:a,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(u(e))return e;let t=e.length;if(!h(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:A,hasOwnProperty:j,hasOwnProp:j,reduceDescriptors:C,freezeMethods:e=>{C(e,((t,n)=>{const r=e[n];p(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return u(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t)};function N(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}T.inherits(N,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const P=N.prototype,_={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{_[e]={value:e}})),Object.defineProperties(N,_),Object.defineProperty(P,"isAxiosError",{value:!0}),N.from=(e,t,n,r,o,s)=>{const i=Object.create(P);return T.toFlatObject(e,i,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),N.call(i,e.message,t,n,r,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};const D=N,U=n(230);function B(e){return T.isPlainObject(e)||T.isArray(e)}function F(e){return T.endsWith(e,"[]")?e.slice(0,-2):e}function L(e,t,n){return e?e.concat(t).map((function(e,t){return e=F(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const k=T.toFlatObject(T,{},null,(function(e){return/^is[A-Z]/.test(e)})),I=function(e,t,n){if(!T.isObject(e))throw new TypeError("target must be an object");t=t||new(U||FormData);const r=(n=T.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!T.isUndefined(t[e])}))).metaTokens,o=n.visitor||l,s=n.dots,i=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&(c=t)&&T.isFunction(c.append)&&"FormData"===c[Symbol.toStringTag]&&c[Symbol.iterator];var c;if(!T.isFunction(o))throw new TypeError("visitor must be a function");function u(e){if(null===e)return"";if(T.isDate(e))return e.toISOString();if(!a&&T.isBlob(e))throw new D("Blob is not supported. Use a Buffer instead.");return T.isArrayBuffer(e)||T.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function l(e,n,o){let a=e;if(e&&!o&&"object"==typeof e)if(T.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(T.isArray(e)&&function(e){return T.isArray(e)&&!e.some(B)}(e)||T.isFileList(e)||T.endsWith(n,"[]")&&(a=T.toArray(e)))return n=F(n),a.forEach((function(e,r){!T.isUndefined(e)&&null!==e&&t.append(!0===i?L([n],r,s):null===i?n:n+"[]",u(e))})),!1;return!!B(e)||(t.append(L(o,n,s),u(e)),!1)}const f=[],d=Object.assign(k,{defaultVisitor:l,convertValue:u,isVisitable:B});if(!T.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!T.isUndefined(n)){if(-1!==f.indexOf(n))throw Error("Circular reference detected in "+r.join("."));f.push(n),T.forEach(n,(function(n,s){!0===(!(T.isUndefined(n)||null===n)&&o.call(t,n,T.isString(s)?s.trim():s,r,d))&&e(n,r?r.concat(s):[s])})),f.pop()}}(e),t};function z(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function q(e,t){this._pairs=[],e&&I(e,this,t)}const M=q.prototype;M.append=function(e,t){this._pairs.push([e,t])},M.toString=function(e){const t=e?function(t){return e.call(this,t,z)}:z;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};const J=q;function V(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function H(e,t,n){if(!t)return e;const r=n&&n.encode||V,o=n&&n.serialize;let s;if(s=o?o(t,n):T.isURLSearchParams(t)?t.toString():new J(t,n).toString(r),s){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}const W=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){T.forEach(this.handlers,(function(t){null!==t&&e(t)}))}},K={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},$="undefined"!=typeof URLSearchParams?URLSearchParams:J,X=FormData,Q=(()=>{let e;return("undefined"==typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&"undefined"!=typeof window&&"undefined"!=typeof document})(),G={isBrowser:!0,classes:{URLSearchParams:$,FormData:X,Blob},isStandardBrowserEnv:Q,protocols:["http","https","file","blob","url","data"]},Y=function(e){function t(e,n,r,o){let s=e[o++];const i=Number.isFinite(+s),a=o>=e.length;return s=!s&&T.isArray(r)?r.length:s,a?(T.hasOwnProp(r,s)?r[s]=[r[s],n]:r[s]=n,!i):(r[s]&&T.isObject(r[s])||(r[s]=[]),t(e,n,r[s],o)&&T.isArray(r[s])&&(r[s]=function(e){const t={},n=Object.keys(e);let r;const o=n.length;let s;for(r=0;r<o;r++)s=n[r],t[s]=e[s];return t}(r[s])),!i)}if(T.isFormData(e)&&T.isFunction(e.entries)){const n={};return T.forEachEntry(e,((e,r)=>{t(function(e){return T.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null},Z=G.isStandardBrowserEnv?{write:function(e,t,n,r,o,s){const i=[];i.push(e+"="+encodeURIComponent(t)),T.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),T.isString(r)&&i.push("path="+r),T.isString(o)&&i.push("domain="+o),!0===s&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function ee(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const te=G.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=T.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0};function ne(e,t,n){D.call(this,null==e?"canceled":e,D.ERR_CANCELED,t,n),this.name="CanceledError"}T.inherits(ne,D,{__CANCEL__:!0});const re=ne,oe=T.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),se=Symbol("internals"),ie=Symbol("defaults");function ae(e){return e&&String(e).trim().toLowerCase()}function ce(e){return!1===e||null==e?e:T.isArray(e)?e.map(ce):String(e)}function ue(e,t,n,r){return T.isFunction(r)?r.call(this,t,n):T.isString(t)?T.isString(r)?-1!==t.indexOf(r):T.isRegExp(r)?r.test(t):void 0:void 0}function le(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,o=n.length;for(;o-- >0;)if(r=n[o],t===r.toLowerCase())return r;return null}function fe(e,t){e&&this.set(e),this[ie]=t||null}Object.assign(fe.prototype,{set:function(e,t,n){const r=this;function o(e,t,n){const o=ae(t);if(!o)throw new Error("header name must be a non-empty string");const s=le(r,o);(!s||!0===n||!1!==r[s]&&!1!==n)&&(r[s||t]=ce(e))}return T.isPlainObject(e)?T.forEach(e,((e,n)=>{o(e,n,t)})):o(t,e,n),this},get:function(e,t){if(!(e=ae(e)))return;const n=le(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(T.isFunction(t))return t.call(this,e,n);if(T.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}},has:function(e,t){if(e=ae(e)){const n=le(this,e);return!(!n||t&&!ue(0,this[n],n,t))}return!1},delete:function(e,t){const n=this;let r=!1;function o(e){if(e=ae(e)){const o=le(n,e);!o||t&&!ue(0,n[o],o,t)||(delete n[o],r=!0)}}return T.isArray(e)?e.forEach(o):o(e),r},clear:function(){return Object.keys(this).forEach(this.delete.bind(this))},normalize:function(e){const t=this,n={};return T.forEach(this,((r,o)=>{const s=le(n,o);if(s)return t[s]=ce(r),void delete t[o];const i=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(o):String(o).trim();i!==o&&delete t[o],t[i]=ce(r),n[i]=!0})),this},toJSON:function(e){const t=Object.create(null);return T.forEach(Object.assign({},this[ie]||null,this),((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&T.isArray(n)?n.join(", "):n)})),t}}),Object.assign(fe,{from:function(e){return T.isString(e)?new this((e=>{const t={};let n,r,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),n=e.substring(0,o).trim().toLowerCase(),r=e.substring(o+1).trim(),!n||t[n]&&oe[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t})(e)):e instanceof this?e:new this(e)},accessor:function(e){const t=(this[se]=this[se]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=ae(e);t[r]||(function(e,t){const n=T.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,o){return this[r].call(this,t,e,n,o)},configurable:!0})}))}(n,e),t[r]=!0)}return T.isArray(e)?e.forEach(r):r(e),this}}),fe.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]),T.freezeMethods(fe.prototype),T.freezeMethods(fe);const de=fe;function pe(e,t){let n=0;const r=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o,s=0,i=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),u=r[i];o||(o=c),n[s]=a,r[s]=c;let l=i,f=0;for(;l!==s;)f+=n[l++],l%=e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),c-o<t)return;const d=u&&c-u;return d?Math.round(1e3*f/d):void 0}}(50,250);return o=>{const s=o.loaded,i=o.lengthComputable?o.total:void 0,a=s-n,c=r(a);n=s;const u={loaded:s,total:i,progress:i?s/i:void 0,bytes:a,rate:c||void 0,estimated:c&&i&&s<=i?(i-s)/c:void 0};u[t?"download":"upload"]=!0,e(u)}}function he(e){return new Promise((function(t,n){let r=e.data;const o=de.from(e.headers).normalize(),s=e.responseType;let i;function a(){e.cancelToken&&e.cancelToken.unsubscribe(i),e.signal&&e.signal.removeEventListener("abort",i)}T.isFormData(r)&&G.isStandardBrowserEnv&&o.setContentType(!1);let c=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(t+":"+n))}const u=ee(e.baseURL,e.url);function l(){if(!c)return;const r=de.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders());!function(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new D("Request failed with status code "+n.status,[D.ERR_BAD_REQUEST,D.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}((function(e){t(e),a()}),(function(e){n(e),a()}),{data:s&&"text"!==s&&"json"!==s?c.response:c.responseText,status:c.status,statusText:c.statusText,headers:r,config:e,request:c}),c=null}if(c.open(e.method.toUpperCase(),H(u,e.params,e.paramsSerializer),!0),c.timeout=e.timeout,"onloadend"in c?c.onloadend=l:c.onreadystatechange=function(){c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))&&setTimeout(l)},c.onabort=function(){c&&(n(new D("Request aborted",D.ECONNABORTED,e,c)),c=null)},c.onerror=function(){n(new D("Network Error",D.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const r=e.transitional||K;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new D(t,r.clarifyTimeoutError?D.ETIMEDOUT:D.ECONNABORTED,e,c)),c=null},G.isStandardBrowserEnv){const t=(e.withCredentials||te(u))&&e.xsrfCookieName&&Z.read(e.xsrfCookieName);t&&o.set(e.xsrfHeaderName,t)}void 0===r&&o.setContentType(null),"setRequestHeader"in c&&T.forEach(o.toJSON(),(function(e,t){c.setRequestHeader(t,e)})),T.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),s&&"json"!==s&&(c.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&c.addEventListener("progress",pe(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",pe(e.onUploadProgress)),(e.cancelToken||e.signal)&&(i=t=>{c&&(n(!t||t.type?new re(null,e,c):t),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(i),e.signal&&(e.signal.aborted?i():e.signal.addEventListener("abort",i)));const f=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(u);f&&-1===G.protocols.indexOf(f)?n(new D("Unsupported protocol "+f+":",D.ERR_BAD_REQUEST,e)):c.send(r||null)}))}const me={http:he,xhr:he},ge=e=>{if(T.isString(e)){const t=me[e];if(!e)throw Error(T.hasOwnProp(e)?`Adapter '${e}' is not available in the build`:`Can not resolve adapter '${e}'`);return t}if(!T.isFunction(e))throw new TypeError("adapter is not a function");return e},be={"Content-Type":"application/x-www-form-urlencoded"},ye={transitional:K,adapter:function(){let e;return"undefined"!=typeof XMLHttpRequest?e=ge("xhr"):"undefined"!=typeof process&&"process"===T.kindOf(process)&&(e=ge("http")),e}(),transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,o=T.isObject(e);if(o&&T.isHTMLForm(e)&&(e=new FormData(e)),T.isFormData(e))return r&&r?JSON.stringify(Y(e)):e;if(T.isArrayBuffer(e)||T.isBuffer(e)||T.isStream(e)||T.isFile(e)||T.isBlob(e))return e;if(T.isArrayBufferView(e))return e.buffer;if(T.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return I(e,new G.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return G.isNode&&T.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((s=T.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return I(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),function(e,t,n){if(T.isString(e))try{return(0,JSON.parse)(e),T.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||ye.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(e&&T.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(e){if(n){if("SyntaxError"===e.name)throw D.from(e,D.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:G.classes.FormData,Blob:G.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};T.forEach(["delete","get","head"],(function(e){ye.headers[e]={}})),T.forEach(["post","put","patch"],(function(e){ye.headers[e]=T.merge(be)}));const Ee=ye;function we(e,t){const n=this||Ee,r=t||n,o=de.from(r.headers);let s=r.data;return T.forEach(e,(function(e){s=e.call(n,s,o.normalize(),t?t.status:void 0)})),o.normalize(),s}function Oe(e){return!(!e||!e.__CANCEL__)}function Re(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new re}function Se(e){return Re(e),e.headers=de.from(e.headers),e.data=we.call(e,e.transformRequest),(e.adapter||Ee.adapter)(e).then((function(t){return Re(e),t.data=we.call(e,e.transformResponse,t),t.headers=de.from(t.headers),t}),(function(t){return Oe(t)||(Re(e),t&&t.response&&(t.response.data=we.call(e,e.transformResponse,t.response),t.response.headers=de.from(t.response.headers))),Promise.reject(t)}))}function ve(e,t){t=t||{};const n={};function r(e,t){return T.isPlainObject(e)&&T.isPlainObject(t)?T.merge(e,t):T.isPlainObject(t)?T.merge({},t):T.isArray(t)?t.slice():t}function o(n){return T.isUndefined(t[n])?T.isUndefined(e[n])?void 0:r(void 0,e[n]):r(e[n],t[n])}function s(e){if(!T.isUndefined(t[e]))return r(void 0,t[e])}function i(n){return T.isUndefined(t[n])?T.isUndefined(e[n])?void 0:r(void 0,e[n]):r(void 0,t[n])}function a(n){return n in t?r(e[n],t[n]):n in e?r(void 0,e[n]):void 0}const c={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:a};return T.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){const t=c[e]||o,r=t(e);T.isUndefined(r)&&t!==a||(n[e]=r)})),n}const Ae={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{Ae[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const je={};Ae.transitional=function(e,t,n){function r(e,t){return"[Axios v1.1.3] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,o,s)=>{if(!1===e)throw new D(r(o," has been removed"+(t?" in "+t:"")),D.ERR_DEPRECATED);return t&&!je[o]&&(je[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,o,s)}};const xe={assertOptions:function(e,t,n){if("object"!=typeof e)throw new D("options must be an object",D.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const s=r[o],i=t[s];if(i){const t=e[s],n=void 0===t||i(t,s,e);if(!0!==n)throw new D("option "+s+" must be "+n,D.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new D("Unknown option "+s,D.ERR_BAD_OPTION)}},validators:Ae},Ce=xe.validators;class Te{constructor(e){this.defaults=e,this.interceptors={request:new W,response:new W}}request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=ve(this.defaults,t);const{transitional:n,paramsSerializer:r}=t;void 0!==n&&xe.assertOptions(n,{silentJSONParsing:Ce.transitional(Ce.boolean),forcedJSONParsing:Ce.transitional(Ce.boolean),clarifyTimeoutError:Ce.transitional(Ce.boolean)},!1),void 0!==r&&xe.assertOptions(r,{encode:Ce.function,serialize:Ce.function},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();const o=t.headers&&T.merge(t.headers.common,t.headers[t.method]);o&&T.forEach(["delete","get","head","post","put","patch","common"],(function(e){delete t.headers[e]})),t.headers=new de(t.headers,o);const s=[];let i=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(i=i&&e.synchronous,s.unshift(e.fulfilled,e.rejected))}));const a=[];let c;this.interceptors.response.forEach((function(e){a.push(e.fulfilled,e.rejected)}));let u,l=0;if(!i){const e=[Se.bind(this),void 0];for(e.unshift.apply(e,s),e.push.apply(e,a),u=e.length,c=Promise.resolve(t);l<u;)c=c.then(e[l++],e[l++]);return c}u=s.length;let f=t;for(l=0;l<u;){const e=s[l++],t=s[l++];try{f=e(f)}catch(e){t.call(this,e);break}}try{c=Se.call(this,f)}catch(e){return Promise.reject(e)}for(l=0,u=a.length;l<u;)c=c.then(a[l++],a[l++]);return c}getUri(e){return H(ee((e=ve(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}T.forEach(["delete","get","head","options"],(function(e){Te.prototype[e]=function(t,n){return this.request(ve(n||{},{method:e,url:t,data:(n||{}).data}))}})),T.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(ve(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}Te.prototype[e]=t(),Te.prototype[e+"Form"]=t(!0)}));const Ne=Te;class Pe{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,o){n.reason||(n.reason=new re(e,r,o),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new Pe((function(t){e=t})),cancel:e}}}const _e=Pe,De=function t(n){const r=new Ne(n),o=e(Ne.prototype.request,r);return T.extend(o,Ne.prototype,r,{allOwnKeys:!0}),T.extend(o,r,null,{allOwnKeys:!0}),o.create=function(e){return t(ve(n,e))},o}(Ee);De.Axios=Ne,De.CanceledError=re,De.CancelToken=_e,De.isCancel=Oe,De.VERSION="1.1.3",De.toFormData=I,De.AxiosError=D,De.Cancel=De.CanceledError,De.all=function(e){return Promise.all(e)},De.spread=function(e){return function(t){return e.apply(null,t)}},De.isAxiosError=function(e){return T.isObject(e)&&!0===e.isAxiosError},De.formToJSON=e=>Y(T.isHTMLForm(e)?new FormData(e):e);const Ue=De,{Axios:Be,AxiosError:Fe,CanceledError:Le,isCancel:ke,CancelToken:Ie,VERSION:ze,all:qe,Cancel:Me,isAxiosError:Je,spread:Ve,toFormData:He}=Ue,We=Ue.create({baseURL:"http://localhost:5000/api/",headers:{"Content-Type":"application/json"}});function Ke(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}var $e=function e(t,n){function r(e,r,o){if("undefined"!=typeof document){"number"==typeof(o=Ke({},n,o)).expires&&(o.expires=new Date(Date.now()+864e5*o.expires)),o.expires&&(o.expires=o.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var s="";for(var i in o)o[i]&&(s+="; "+i,!0!==o[i]&&(s+="="+o[i].split(";")[0]));return document.cookie=e+"="+t.write(r,e)+s}}return Object.create({set:r,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var n=document.cookie?document.cookie.split("; "):[],r={},o=0;o<n.length;o++){var s=n[o].split("="),i=s.slice(1).join("=");try{var a=decodeURIComponent(s[0]);if(r[a]=t.read(i,a),e===a)break}catch(e){}}return e?r[e]:r}},remove:function(e,t){r(e,"",Ke({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,Ke({},this.attributes,t))},withConverter:function(t){return e(Ke({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(n)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"});const Xe=$e;function Qe(e){e.preventDefault(),We.post("login",{headers:{},data:{username:"ibnu",password:"admin123"}}).then((e=>{console.log(e),Xe.set("username","hahaha")})).catch((e=>{console.log(e)}))}})(),authReq=r})();