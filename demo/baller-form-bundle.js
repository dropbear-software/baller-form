"use strict";(()=>{function a(i,e,t,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,o);else for(var d=i.length-1;d>=0;d--)(s=i[d])&&(n=(r<3?s(n):r>3?s(e,t,n):s(e,t))||n);return r>3&&n&&Object.defineProperty(e,t,n),n}var Ne=window,Be=Ne.ShadowRoot&&(Ne.ShadyCSS===void 0||Ne.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,bt=Symbol(),to=new WeakMap,Se=class{constructor(e,t,o){if(this._$cssResult$=!0,o!==bt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Be&&e===void 0){let o=t!==void 0&&t.length===1;o&&(e=to.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&to.set(t,e))}return e}toString(){return this.cssText}},oo=i=>new Se(typeof i=="string"?i:i+"",void 0,bt),b=(i,...e)=>{let t=i.length===1?i[0]:e.reduce((o,r,n)=>o+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[n+1],i[0]);return new Se(t,i,bt)},gt=(i,e)=>{Be?i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{let o=document.createElement("style"),r=Ne.litNonce;r!==void 0&&o.setAttribute("nonce",r),o.textContent=t.cssText,i.appendChild(o)})},Ue=Be?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(let o of e.cssRules)t+=o.cssText;return oo(t)})(i):i;var yt,Fe=window,io=Fe.trustedTypes,mi=io?io.emptyScript:"",ro=Fe.reactiveElementPolyfillSupport,_t={toAttribute(i,e){switch(e){case Boolean:i=i?mi:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},no=(i,e)=>e!==i&&(e==e||i==i),xt={attribute:!0,type:String,converter:_t,reflect:!1,hasChanged:no},wt="finalized",J=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();let e=[];return this.elementProperties.forEach((t,o)=>{let r=this._$Ep(o,t);r!==void 0&&(this._$Ev.set(r,o),e.push(r))}),e}static createProperty(e,t=xt){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){let o=typeof e=="symbol"?Symbol():"__"+e,r=this.getPropertyDescriptor(e,o,t);r!==void 0&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,t,o){return{get(){return this[t]},set(r){let n=this[e];this[t]=r,this.requestUpdate(e,n,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||xt}static finalize(){if(this.hasOwnProperty(wt))return!1;this[wt]=!0;let e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let t=this.properties,o=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(let r of o)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let o=new Set(e.flat(1/0).reverse());for(let r of o)t.unshift(Ue(r))}else e!==void 0&&t.push(Ue(e));return t}static _$Ep(e,t){let o=t.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,o;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((o=e.hostConnected)===null||o===void 0||o.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;let t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return gt(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var o;return(o=t.hostConnected)===null||o===void 0?void 0:o.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var o;return(o=t.hostDisconnected)===null||o===void 0?void 0:o.call(t)})}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EO(e,t,o=xt){var r;let n=this.constructor._$Ep(e,o);if(n!==void 0&&o.reflect===!0){let s=(((r=o.converter)===null||r===void 0?void 0:r.toAttribute)!==void 0?o.converter:_t).toAttribute(t,o.type);this._$El=e,s==null?this.removeAttribute(n):this.setAttribute(n,s),this._$El=null}}_$AK(e,t){var o;let r=this.constructor,n=r._$Ev.get(e);if(n!==void 0&&this._$El!==n){let s=r.getPropertyOptions(n),d=typeof s.converter=="function"?{fromAttribute:s.converter}:((o=s.converter)===null||o===void 0?void 0:o.fromAttribute)!==void 0?s.converter:_t;this._$El=n,this[n]=d.fromAttribute(t,s.type),this._$El=null}}requestUpdate(e,t,o){let r=!0;e!==void 0&&(((o=o||this.constructor.getPropertyOptions(e)).hasChanged||no)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),o.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,o))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((r,n)=>this[n]=r),this._$Ei=void 0);let t=!1,o=this._$AL;try{t=this.shouldUpdate(o),t?(this.willUpdate(o),(e=this._$ES)===null||e===void 0||e.forEach(r=>{var n;return(n=r.hostUpdate)===null||n===void 0?void 0:n.call(r)}),this.update(o)):this._$Ek()}catch(r){throw t=!1,this._$Ek(),r}t&&this._$AE(o)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(o=>{var r;return(r=o.hostUpdated)===null||r===void 0?void 0:r.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,o)=>this._$EO(o,this[o],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};J[wt]=!0,J.elementProperties=new Map,J.elementStyles=[],J.shadowRootOptions={mode:"open"},ro?.({ReactiveElement:J}),((yt=Fe.reactiveElementVersions)!==null&&yt!==void 0?yt:Fe.reactiveElementVersions=[]).push("1.6.3");var Et,Ve=window,ge=Ve.trustedTypes,ao=ge?ge.createPolicy("lit-html",{createHTML:i=>i}):void 0,qe="$lit$",Q=`lit$${(Math.random()+"").slice(9)}$`,Ct="?"+Q,vi=`<${Ct}>`,he=document,$e=()=>he.createComment(""),Ie=i=>i===null||typeof i!="object"&&typeof i!="function",fo=Array.isArray,mo=i=>fo(i)||typeof i?.[Symbol.iterator]=="function",At=`[ 	
\f\r]`,Te=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,so=/-->/g,lo=/>/g,ue=RegExp(`>|${At}(?:([^\\s"'>=/]+)(${At}*=${At}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),co=/'/g,uo=/"/g,vo=/^(?:script|style|textarea|title)$/i,bo=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),h=bo(1),go=bo(2),N=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),po=new WeakMap,pe=he.createTreeWalker(he,129,null,!1);function yo(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return ao!==void 0?ao.createHTML(e):e}var xo=(i,e)=>{let t=i.length-1,o=[],r,n=e===2?"<svg>":"",s=Te;for(let d=0;d<t;d++){let c=i[d],u,m,f=-1,g=0;for(;g<c.length&&(s.lastIndex=g,m=s.exec(c),m!==null);)g=s.lastIndex,s===Te?m[1]==="!--"?s=so:m[1]!==void 0?s=lo:m[2]!==void 0?(vo.test(m[2])&&(r=RegExp("</"+m[2],"g")),s=ue):m[3]!==void 0&&(s=ue):s===ue?m[0]===">"?(s=r??Te,f=-1):m[1]===void 0?f=-2:(f=s.lastIndex-m[2].length,u=m[1],s=m[3]===void 0?ue:m[3]==='"'?uo:co):s===uo||s===co?s=ue:s===so||s===lo?s=Te:(s=ue,r=void 0);let _=s===ue&&i[d+1].startsWith("/>")?" ":"";n+=s===Te?c+vi:f>=0?(o.push(u),c.slice(0,f)+qe+c.slice(f)+Q+_):c+Q+(f===-2?(o.push(void 0),d):_)}return[yo(i,n+(i[t]||"<?>")+(e===2?"</svg>":"")),o]},ke=class i{constructor({strings:e,_$litType$:t},o){let r;this.parts=[];let n=0,s=0,d=e.length-1,c=this.parts,[u,m]=xo(e,t);if(this.el=i.createElement(u,o),pe.currentNode=this.el.content,t===2){let f=this.el.content,g=f.firstChild;g.remove(),f.append(...g.childNodes)}for(;(r=pe.nextNode())!==null&&c.length<d;){if(r.nodeType===1){if(r.hasAttributes()){let f=[];for(let g of r.getAttributeNames())if(g.endsWith(qe)||g.startsWith(Q)){let _=m[s++];if(f.push(g),_!==void 0){let R=r.getAttribute(_.toLowerCase()+qe).split(Q),C=/([.?@])?(.*)/.exec(_);c.push({type:1,index:n,name:C[2],strings:R,ctor:C[1]==="."?je:C[1]==="?"?Ge:C[1]==="@"?Ke:me})}else c.push({type:6,index:n})}for(let g of f)r.removeAttribute(g)}if(vo.test(r.tagName)){let f=r.textContent.split(Q),g=f.length-1;if(g>0){r.textContent=ge?ge.emptyScript:"";for(let _=0;_<g;_++)r.append(f[_],$e()),pe.nextNode(),c.push({type:2,index:++n});r.append(f[g],$e())}}}else if(r.nodeType===8)if(r.data===Ct)c.push({type:2,index:n});else{let f=-1;for(;(f=r.data.indexOf(Q,f+1))!==-1;)c.push({type:7,index:n}),f+=Q.length-1}n++}}static createElement(e,t){let o=he.createElement("template");return o.innerHTML=e,o}};function fe(i,e,t=i,o){var r,n,s,d;if(e===N)return e;let c=o!==void 0?(r=t._$Co)===null||r===void 0?void 0:r[o]:t._$Cl,u=Ie(e)?void 0:e._$litDirective$;return c?.constructor!==u&&((n=c?._$AO)===null||n===void 0||n.call(c,!1),u===void 0?c=void 0:(c=new u(i),c._$AT(i,t,o)),o!==void 0?((s=(d=t)._$Co)!==null&&s!==void 0?s:d._$Co=[])[o]=c:t._$Cl=c),c!==void 0&&(e=fe(i,c._$AS(i,e.values),c,o)),e}var He=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;let{el:{content:o},parts:r}=this._$AD,n=((t=e?.creationScope)!==null&&t!==void 0?t:he).importNode(o,!0);pe.currentNode=n;let s=pe.nextNode(),d=0,c=0,u=r[0];for(;u!==void 0;){if(d===u.index){let m;u.type===2?m=new ye(s,s.nextSibling,this,e):u.type===1?m=new u.ctor(s,u.name,u.strings,this,e):u.type===6&&(m=new We(s,this,e)),this._$AV.push(m),u=r[++c]}d!==u?.index&&(s=pe.nextNode(),d++)}return pe.currentNode=he,n}v(e){let t=0;for(let o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}},ye=class i{constructor(e,t,o,r){var n;this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=r,this._$Cp=(n=r?.isConnected)===null||n===void 0||n}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=fe(this,e,t),Ie(e)?e===p||e==null||e===""?(this._$AH!==p&&this._$AR(),this._$AH=p):e!==this._$AH&&e!==N&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):mo(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==p&&Ie(this._$AH)?this._$AA.nextSibling.data=e:this.$(he.createTextNode(e)),this._$AH=e}g(e){var t;let{values:o,_$litType$:r}=e,n=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=ke.createElement(yo(r.h,r.h[0]),this.options)),r);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===n)this._$AH.v(o);else{let s=new He(n,this),d=s.u(this.options);s.v(o),this.$(d),this._$AH=s}}_$AC(e){let t=po.get(e.strings);return t===void 0&&po.set(e.strings,t=new ke(e)),t}T(e){fo(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,o,r=0;for(let n of e)r===t.length?t.push(o=new i(this.k($e()),this.k($e()),this,this.options)):o=t[r],o._$AI(n),r++;r<t.length&&(this._$AR(o&&o._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,t);e&&e!==this._$AB;){let r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},me=class{constructor(e,t,o,r,n){this.type=1,this._$AH=p,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=n,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=p}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,o,r){let n=this.strings,s=!1;if(n===void 0)e=fe(this,e,t,0),s=!Ie(e)||e!==this._$AH&&e!==N,s&&(this._$AH=e);else{let d=e,c,u;for(e=n[0],c=0;c<n.length-1;c++)u=fe(this,d[o+c],t,c),u===N&&(u=this._$AH[c]),s||(s=!Ie(u)||u!==this._$AH[c]),u===p?e=p:e!==p&&(e+=(u??"")+n[c+1]),this._$AH[c]=u}s&&!r&&this.j(e)}j(e){e===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},je=class extends me{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===p?void 0:e}},bi=ge?ge.emptyScript:"",Ge=class extends me{constructor(){super(...arguments),this.type=4}j(e){e&&e!==p?this.element.setAttribute(this.name,bi):this.element.removeAttribute(this.name)}},Ke=class extends me{constructor(e,t,o,r,n){super(e,t,o,r,n),this.type=5}_$AI(e,t=this){var o;if((e=(o=fe(this,e,t,0))!==null&&o!==void 0?o:p)===N)return;let r=this._$AH,n=e===p&&r!==p||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,s=e!==p&&(r===p||n);n&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,o;typeof this._$AH=="function"?this._$AH.call((o=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&o!==void 0?o:this.element,e):this._$AH.handleEvent(e)}},We=class{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){fe(this,e)}},_o={O:qe,P:Q,A:Ct,C:1,M:xo,L:He,R:mo,D:fe,I:ye,V:me,H:Ge,N:Ke,U:je,F:We},ho=Ve.litHtmlPolyfillSupport;ho?.(ke,ye),((Et=Ve.litHtmlVersions)!==null&&Et!==void 0?Et:Ve.litHtmlVersions=[]).push("2.8.0");var Ye=(i,e,t)=>{var o,r;let n=(o=t?.renderBefore)!==null&&o!==void 0?o:e,s=n._$litPart$;if(s===void 0){let d=(r=t?.renderBefore)!==null&&r!==void 0?r:null;n._$litPart$=s=new ye(e.insertBefore($e(),d),d,void 0,t??{})}return s._$AI(i),s};var St,Tt;var y=class extends J{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;let o=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=o.firstChild),o}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ye(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return N}};y.finalized=!0,y._$litElement$=!0,(St=globalThis.litElementHydrateSupport)===null||St===void 0||St.call(globalThis,{LitElement:y});var wo=globalThis.litElementPolyfillSupport;wo?.({LitElement:y});((Tt=globalThis.litElementVersions)!==null&&Tt!==void 0?Tt:globalThis.litElementVersions=[]).push("3.3.3");var w=i=>e=>typeof e=="function"?((t,o)=>(customElements.define(t,o),o))(i,e):((t,o)=>{let{kind:r,elements:n}=o;return{kind:r,elements:n,finisher(s){customElements.define(t,s)}}})(i,e);var gi=(i,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,i)}},yi=(i,e,t)=>{e.constructor.createProperty(t,i)};function l(i){return(e,t)=>t!==void 0?yi(i,e,t):gi(i,e)}function E(i){return l({...i,state:!0})}var ee=({finisher:i,descriptor:e})=>(t,o)=>{var r;if(o===void 0){let n=(r=t.originalKey)!==null&&r!==void 0?r:t.key,s=e!=null?{kind:"method",placement:"prototype",key:n,descriptor:e(t.key)}:{...t,key:n};return i!=null&&(s.finisher=function(d){i(d,n)}),s}{let n=t.constructor;e!==void 0&&Object.defineProperty(t,o,e(o)),i?.(n,o)}};function v(i,e){return ee({descriptor:t=>{let o={get(){var r,n;return(n=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(i))!==null&&n!==void 0?n:null},enumerable:!0,configurable:!0};if(e){let r=typeof t=="symbol"?Symbol():"__"+t;o.get=function(){var n,s;return this[r]===void 0&&(this[r]=(s=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(i))!==null&&s!==void 0?s:null),this[r]}}return o}})}function Eo(i){return ee({descriptor:e=>({get(){var t,o;return(o=(t=this.renderRoot)===null||t===void 0?void 0:t.querySelectorAll(i))!==null&&o!==void 0?o:[]},enumerable:!0,configurable:!0})})}var $t,xi=(($t=window.HTMLSlotElement)===null||$t===void 0?void 0:$t.prototype.assignedElements)!=null?(i,e)=>i.assignedElements(e):(i,e)=>i.assignedNodes(e).filter(t=>t.nodeType===Node.ELEMENT_NODE);function V(i){let{slot:e,selector:t}=i??{};return ee({descriptor:o=>({get(){var r;let n="slot"+(e?`[name=${e}]`:":not([name])"),s=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(n),d=s!=null?xi(s,i):[];return t?d.filter(c=>c.matches(t)):d},enumerable:!0,configurable:!0})})}var Ao=b`
  :host {
    display: block;
    padding: 25px;
    color: var(--baller-form-color-on-background, #1b1c17);
    font-family: var(--baller-form-font-family, "Open Sans", "Trebuchet MS", Arial, "Helvetica Neue", sans-serif);
    --md-sys-color-error: var(--baller-form-color-error, #ba1a1a);
    --md-sys-color-error-container: var(--baller-form-color-error-container, #ffdad6);
    --md-sys-color-on-error: var(--baller-form-color-on-error: #ffffff);
    --md-sys-color-on-error-container: var(--baller-form-color-on-error-container: #410002);
    --md-ref-typeface-plain: var(--baller-form-font-family, "Open Sans", "Trebuchet MS", Arial, "Helvetica Neue", sans-serif);
  }

  md-outlined-select {
    --md-menu-item-label-text-color: var(--baller-form-color-secondary, #5a6148);
  }

  md-checkbox {
    --md-checkbox-outline-color: var(--baller-form-checkbox-outline-color, #45483c);
    --md-checkbox-selected-container-color: var(--baller-form-selected-container-color, #4b6700);
    --md-checkbox-selected-icon-color: var(--baller-form-selected-icon-color, #ffffff);
  }

  md-outlined-text-field {
    --md-outlined-text-field-focus-outline-color: var(--baller-form-text-field-focus-outline-color, #4b6700);
    --md-outlined-text-field-label-text-font: var(--baller-form-font-family, "Open Sans", "Trebuchet MS", Arial, "Helvetica Neue", sans-serif);
    --md-outlined-text-field-input-text-font: var(--baller-form-font-family, "Open Sans", "Trebuchet MS", Arial, "Helvetica Neue", sans-serif);
  }

  md-filled-button {
    --md-filled-button-container-color: var(--baller-form-filled-button-container-color, #4b6700);
    --md-filled-button-container-shape: var(--baller-form-filled-button-container-shape, 9999px);
  }

  md-outlined-select {
    --md-outlined-select-text-field-outline-color: var(--baller-form-outlined-select-text-field-outline-color, #76786b);
    --md-outlined-select-text-field-input-text-color: var(--baller-form-outlined-select-text-field-input-text-color, #1b1c17);
    --md-outlined-select-text-field-input-text-font: var(--baller-form-font-family, "Open Sans", "Trebuchet MS", Arial, "Helvetica Neue", sans-serif);
  }

  md-outlined-select::part(menu) {
    --md-menu-container-color: var(--baller-form-menu-background, #f4fbfa);
  }

  #form-wrapper {
    background-color: var(--baller-form-color-background, #fefcf4);
    border: 1px solid var(--baller-form-color-outline, #76786b);
    padding: 1.5rem;
    border-radius: 5px;
    margin: 0 auto;
  }

  .form-fields { 
    display: flex;
    flex-direction: column;
    gap: 1em;
    justify-content: center;
  }
  .form-footer {
    margin-top: 1rem;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }

  .inline-label {
    display: flex;
    align-items: center;
  }

  .hidden {
    display: none;
  }

  /* Typography */
  .display-small {
    font-family: var(--baller-form-display-headline-large-font-family, "Open Sans", "Trebuchet MS", Arial, "Helvetica Neue", sans-serif);
    font-weight: var(--baller-form-display-headline-large-font-weight, 700);
    font-size: var(--baller-form-display-headline-large-font-size, 36px);
    letter-spacing: var(--baller-form-display-headline-large-letter-spacing, 0px);
    line-height: var(--baller-form-display-headline-large-line-height, 44px);
    color: var(--baller-form-display-headline-large-color, #1b1c17);
  }

  .headline-small {
    font-family: var(--baller-form-display-headline-small-font-family, "Open Sans", "Trebuchet MS", Arial, "Helvetica Neue", sans-serif);
    font-weight: var(--baller-form-display-headline-small-font-weight, 100);
    font-size: var(--baller-form-display-headline-small-font-size, 24px);
    letter-spacing: var(--baller-form-display-headline-small-letter-spacing, 0px);
    line-height: var(--baller-form-display-headline-small-line-height, 32px);
    color: var(--baller-form-display-headline-small-color, #5a6148);
  }

  .label-medium {
    font-family: var(--baller-form-display-label-medium-font-family, "Open Sans", "Trebuchet MS", Arial, "Helvetica Neue", sans-serif);
    font-weight: var(--baller-form-display-label-medium-font-weight, 500);
    font-size: var(--baller-form-display-label-medium-font-size, 12px);
    letter-spacing: var(--baller-form-display-label-medium-letter-spacing, 0.5px);
    line-height: var(--baller-form-display-label-medium-line-height, 16px);
    color: var(--baller-form-display-label-medium-color, #1b1c17);
  }
`;var xe={instagram:h`
  <svg xmlns="http://www.w3.org/2000/svg" width="132.004" height="132" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 132 132" xml:space="preserve">
    <defs>
      <radialGradient id="c" cx="158.429" cy="578.088" r="65" xlink:href="#a" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0 -1.98198 1.8439 0 -1031.402 454.004)" fx="158.429" fy="578.088"/>
      <radialGradient id="d" cx="147.694" cy="473.455" r="65" xlink:href="#b" gradientUnits="userSpaceOnUse" gradientTransform="matrix(.17394 .86872 -3.5818 .71718 1648.348 -458.493)" fx="147.694" fy="473.455"/>
      <linearGradient id="b">
        <stop offset="0" stop-color="#3771c8"/>
        <stop stop-color="#3771c8" offset=".128"/>
        <stop offset="1" stop-color="#60f" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="a">
        <stop offset="0" stop-color="#fd5"/>
        <stop offset=".1" stop-color="#fd5"/>
        <stop offset=".5" stop-color="#ff543e"/>
        <stop offset="1" stop-color="#c837ab"/>
      </linearGradient>
    </defs>
    <path fill="url(#c)" d="M65.03 0C37.888 0 29.95.028 28.407.156c-5.57.463-9.036 1.34-12.812 3.22-2.91 1.445-5.205 3.12-7.47 5.468C4 13.126 1.5 18.394.595 24.656c-.44 3.04-.568 3.66-.594 19.188-.01 5.176 0 11.988 0 21.125 0 27.12.03 35.05.16 36.59.45 5.42 1.3 8.83 3.1 12.56 3.44 7.14 10.01 12.5 17.75 14.5 2.68.69 5.64 1.07 9.44 1.25 1.61.07 18.02.12 34.44.12 16.42 0 32.84-.02 34.41-.1 4.4-.207 6.955-.55 9.78-1.28a27.22 27.22 0 0 0 17.75-14.53c1.765-3.64 2.66-7.18 3.065-12.317.088-1.12.125-18.977.125-36.81 0-17.836-.04-35.66-.128-36.78-.41-5.22-1.305-8.73-3.127-12.44-1.495-3.037-3.155-5.305-5.565-7.624C116.9 4 111.64 1.5 105.372.596 102.335.157 101.73.027 86.19 0H65.03z" transform="translate(1.004 1)"/>
    <path fill="url(#d)" d="M65.03 0C37.888 0 29.95.028 28.407.156c-5.57.463-9.036 1.34-12.812 3.22-2.91 1.445-5.205 3.12-7.47 5.468C4 13.126 1.5 18.394.595 24.656c-.44 3.04-.568 3.66-.594 19.188-.01 5.176 0 11.988 0 21.125 0 27.12.03 35.05.16 36.59.45 5.42 1.3 8.83 3.1 12.56 3.44 7.14 10.01 12.5 17.75 14.5 2.68.69 5.64 1.07 9.44 1.25 1.61.07 18.02.12 34.44.12 16.42 0 32.84-.02 34.41-.1 4.4-.207 6.955-.55 9.78-1.28a27.22 27.22 0 0 0 17.75-14.53c1.765-3.64 2.66-7.18 3.065-12.317.088-1.12.125-18.977.125-36.81 0-17.836-.04-35.66-.128-36.78-.41-5.22-1.305-8.73-3.127-12.44-1.495-3.037-3.155-5.305-5.565-7.624C116.9 4 111.64 1.5 105.372.596 102.335.157 101.73.027 86.19 0H65.03z" transform="translate(1.004 1)"/>
    <path fill="#fff" d="M66.004 18c-13.036 0-14.672.057-19.792.29-5.11.234-8.598 1.043-11.65 2.23-3.157 1.226-5.835 2.866-8.503 5.535-2.67 2.668-4.31 5.346-5.54 8.502-1.19 3.053-2 6.542-2.23 11.65C18.06 51.327 18 52.964 18 66s.058 14.667.29 19.787c.235 5.11 1.044 8.598 2.23 11.65 1.227 3.157 2.867 5.835 5.536 8.503 2.667 2.67 5.345 4.314 8.5 5.54 3.054 1.187 6.543 1.996 11.652 2.23 5.12.233 6.755.29 19.79.29 13.037 0 14.668-.057 19.788-.29 5.11-.234 8.602-1.043 11.656-2.23 3.156-1.226 5.83-2.87 8.497-5.54 2.67-2.668 4.31-5.346 5.54-8.502 1.18-3.053 1.99-6.542 2.23-11.65.23-5.12.29-6.752.29-19.788 0-13.036-.06-14.672-.29-19.792-.24-5.11-1.05-8.598-2.23-11.65-1.23-3.157-2.87-5.835-5.54-8.503-2.67-2.67-5.34-4.31-8.5-5.535-3.06-1.187-6.55-1.996-11.66-2.23-5.12-.233-6.75-.29-19.79-.29zm-4.306 8.65c1.278-.002 2.704 0 4.306 0 12.816 0 14.335.046 19.396.276 4.68.214 7.22.996 8.912 1.653 2.24.87 3.837 1.91 5.516 3.59 1.68 1.68 2.72 3.28 3.592 5.52.657 1.69 1.44 4.23 1.653 8.91.23 5.06.28 6.58.28 19.39s-.05 14.33-.28 19.39c-.214 4.68-.996 7.22-1.653 8.91-.87 2.24-1.912 3.835-3.592 5.514-1.68 1.68-3.275 2.72-5.516 3.59-1.69.66-4.232 1.44-8.912 1.654-5.06.23-6.58.28-19.396.28-12.817 0-14.336-.05-19.396-.28-4.68-.216-7.22-.998-8.913-1.655-2.24-.87-3.84-1.91-5.52-3.59-1.68-1.68-2.72-3.276-3.592-5.517-.657-1.69-1.44-4.23-1.653-8.91-.23-5.06-.276-6.58-.276-19.398s.046-14.33.276-19.39c.214-4.68.996-7.22 1.653-8.912.87-2.24 1.912-3.84 3.592-5.52 1.68-1.68 3.28-2.72 5.52-3.592 1.692-.66 4.233-1.44 8.913-1.655 4.428-.2 6.144-.26 15.09-.27zm29.928 7.97a5.76 5.76 0 1 0 5.76 5.758c0-3.18-2.58-5.76-5.76-5.76zm-25.622 6.73c-13.613 0-24.65 11.037-24.65 24.65 0 13.613 11.037 24.645 24.65 24.645C79.617 90.645 90.65 79.613 90.65 66S79.616 41.35 66.003 41.35zm0 8.65c8.836 0 16 7.163 16 16 0 8.836-7.164 16-16 16-8.837 0-16-7.164-16-16 0-8.837 7.163-16 16-16z"/>
  </svg>`,youtube:h`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" xml:space="preserve">
      <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="0" y1="199" x2="400" y2="199" gradientTransform="matrix(0 1 1 0 1 0)">
        <stop offset="0" style="stop-color:#e52d27"/>
        <stop offset="1" style="stop-color:#bf171d"/>
      </linearGradient>
      <path fill="url(#a)" d="M0 0h400v400H0z"/>
      <path opacity=".12" d="m170.6 159.9 63.9 42.7 9-4.6-72.9-38.1z"/>
      <path fill="#FFF" d="M332.2 146.1s-2.6-18.6-10.7-26.8c-10.2-10.8-21.8-10.8-27-11.4-37.8-2.7-94.4-2.7-94.4-2.7h-.1s-56.6 0-94.4 2.7c-5.3.6-16.8.7-27 11.4-8.1 8.2-10.7 26.8-10.7 26.8s-2.7 21.8-2.7 43.7v20.5c0 21.8 2.7 43.7 2.7 43.7s2.6 18.6 10.7 26.8c10.3 10.8 23.7 10.4 29.7 11.5 21.6 2.1 91.7 2.7 91.7 2.7s56.7-.1 94.5-2.8c5.3-.6 16.8-.7 27-11.4 8.1-8.2 10.7-26.8 10.7-26.8s2.7-21.8 2.7-43.7v-20.5c0-21.9-2.7-43.7-2.7-43.7zM172.1 235v-75.8l72.9 38-72.9 37.8z"/>
    </svg>`,tiktok:h`
    <svg xmlns="http://www.w3.org/2000/svg" width="320" height="320" viewBox="0 0 300 300">
      <g transform="translate(-221.857 -376.148)" style="display:inline">
        <rect ry="71.309" y="376.148" x="221.857" height="299.999" width="299.999" style="fill:#000;fill-opacity:1;stroke:none;stroke-width:3.14339042;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/>
        <path d="M462.5 465.934c-56.071-5.358-55-54.643-55-54.643h-36.154v155.645c-.912 16.646-14.675 29.676-31.346 29.676-17.338 0-31.393-14.055-31.393-31.393 0-17.337 14.055-31.392 31.393-31.392 3.659 0 7.29.64 10.728 1.89l.355-41.094a69.286 69.286 0 0 0-11.583-.975c-38.265 0-69.286 31.02-69.286 69.286 0 38.265 31.02 69.285 69.286 69.285 36.959 0 67.411-29.009 69.204-65.924v-81.076s19.867 17.143 53.796 17.857z" style="display:inline;fill:#fff;fill-opacity:1;stroke:none;stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/>
      </g>
    </svg>`,forwardArrow:h`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" slot="icon"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>`,backArrow:h`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" slot="icon"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg>`,send:h`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" slot="icon"><path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z"/></svg>`,xing:h`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 590.6 621.4" style="enable-background:new 0 0 590.6 621.4" xml:space="preserve">
  <path style="fill-rule:evenodd;clip-rule:evenodd;fill:#0698a0" d="m205.7 237.7 28 49.7-41.9 73.3h50l41.6-73.3-28-49.7z"/>
  <path style="fill-rule:evenodd;clip-rule:evenodd;fill:#b7df4b" d="m354.5 191.8-80.8 143 52.1 94.8h50.7l-53-94.8 80.9-143z"/>
</svg>`};var Ze=class i{constructor(e,t,o,r,n,s,d,c,u,m,f,g,_,R,C,z){if(!z)throw new Error("Unable to create an application until you accept the terms of service");this.givenName=e,this.familyName=t,this.telephone=r,this.email=o,this.birthDate=i.normalizeBirthDate(n),this.shirt=s,this.experience=i.normalizeExperience(d,c),this.clubName=u,this.highlightTape=m,this.transfermarktProfile=f,this.youTube=g,this.instagram=_,this.tikTok=R,this.freeform=C}static normalizeBirthDate(e){return e.toString()}static normalizeExperience(e,t){return e==="sonstiges"?t:e}};var Xe=class i{constructor(e){this.endpoint=new URL(e,window.location.origin)}async process(e){let t=i.prepareDataForBraze(e),o=await this.sendDataToBraze(t);this.handleBrazeResponse(o)}async sendDataToBraze(e){return(await fetch(this.endpoint,{method:"POST",cache:"no-cache",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify(e)})).json()}static prepareDataForBraze(e){return{events:[{email:e.email,app_id:"220983e3-8db5-49d5-8272-620b09b1f7fa",name:"Submit_BallerLeague_Application",time:new Date().toISOString()}],attributes:[{email:e.email,first_name:e.givenName,last_name:e.familyName,phone:e.telephone,dob:e.birthDate,highest_league:e.experience,soccer_club:e.clubName,highlight_tape_url:e.highlightTape,link_transfermarket:e.transfermarktProfile,youtube_link:e.youTube,instagram_link:e.instagram,tiktok_link:e.tikTok,comment:e.freeform}]}}handleBrazeResponse(e){console.log(`Braze Response 
 ${e}`)}};var Je=class i{constructor(e,t){this.minimumTrustRequired=.5,this.featureEnabled=!1,this.siteKey=e,this.scriptURL=i.generateScriptUrl(e),this.serverSideValidationEndpoint=new URL(t,window.location.origin)}generateScriptElement(){let e=document.createElement("script");return e.async=!0,e.src=this.scriptURL.href,e}isValidUser(){let e=0;return this.featureEnabled&&"grecaptcha"in window?window.grecaptcha.execute(this.siteKey,{action:"submit"}).then(async t=>{e=(await this.validateTokenWithServer(t)).score}):e=1,e>=this.minimumTrustRequired}async validateTokenWithServer(e){let t=AbortSignal.timeout(5e3),o=await fetch(this.serverSideValidationEndpoint,{method:"POST",signal:t,cache:"no-cache",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})});if(!o.ok)throw new Error("Unable to validate Recaptcha Token with the server");return o.json()}static generateScriptUrl(e){let t=new URL("https://www.google.com/recaptcha/api.js");return t.searchParams.append("render",e),t}};var Qe=class extends y{connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}render(){return h`<span class="shadow"></span>`}};var Co=b`:host{--_level: var(--md-elevation-level, 0);--_shadow-color: var(--md-elevation-shadow-color, var(--md-sys-color-shadow, #000));display:flex;pointer-events:none}:host,.shadow,.shadow::before,.shadow::after{border-radius:inherit;inset:0;position:absolute;transition-duration:inherit;transition-property:inherit;transition-timing-function:inherit}.shadow::before,.shadow::after{content:"";transition-property:box-shadow,opacity}.shadow::before{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 3,1) + 2*clamp(0,var(--_level) - 4,1))) calc(1px*(2*clamp(0,var(--_level),1) + clamp(0,var(--_level) - 2,1) + clamp(0,var(--_level) - 4,1))) 0px var(--_shadow-color);opacity:.3}.shadow::after{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 1,1) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(3*clamp(0,var(--_level),2) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(clamp(0,var(--_level),4) + 2*clamp(0,var(--_level) - 4,1))) var(--_shadow-color);opacity:.15}/*# sourceMappingURL=elevation-styles.css.map */
`;var It=class extends Qe{};It.styles=[Co];It=a([w("md-elevation")],It);var So=Symbol("attachableController"),To;!1||(To=new MutationObserver(i=>{for(let e of i)e.target[So]?.hostConnected()}));var _e=class{get htmlFor(){return this.host.getAttribute("for")}set htmlFor(e){e===null?this.host.removeAttribute("for"):this.host.setAttribute("for",e)}get control(){return this.host.hasAttribute("for")?!this.htmlFor||!this.host.isConnected?null:this.host.getRootNode().querySelector(`#${this.htmlFor}`):this.currentControl||this.host.parentElement}set control(e){e?this.attach(e):this.detach()}constructor(e,t){this.host=e,this.onControlChange=t,this.currentControl=null,e.addController(this),e[So]=this,To?.observe(e,{attributeFilter:["for"]})}attach(e){e!==this.currentControl&&(this.setCurrentControl(e),this.host.removeAttribute("for"))}detach(){this.setCurrentControl(null),this.host.setAttribute("for","")}hostConnected(){this.setCurrentControl(this.control)}hostDisconnected(){this.setCurrentControl(null)}setCurrentControl(e){this.onControlChange(this.currentControl,e),this.currentControl=e}};var _i=["focusin","focusout","pointerdown"],we=class extends y{constructor(){super(...arguments),this.visible=!1,this.inward=!1,this.attachableController=new _e(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(e){this.attachableController.htmlFor=e}get control(){return this.attachableController.control}set control(e){this.attachableController.control=e}attach(e){this.attachableController.attach(e)}detach(){this.attachableController.detach()}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}handleEvent(e){if(!e[$o]){switch(e.type){default:return;case"focusin":this.visible=this.control?.matches(":focus-visible")??!1;break;case"focusout":case"pointerdown":this.visible=!1;break}e[$o]=!0}}onControlChange(e,t){if(!!1)for(let o of _i)e?.removeEventListener(o,this),t?.addEventListener(o,this)}update(e){e.has("visible")&&this.dispatchEvent(new Event("visibility-changed")),super.update(e)}};a([l({type:Boolean,reflect:!0})],we.prototype,"visible",void 0);a([l({type:Boolean,reflect:!0})],we.prototype,"inward",void 0);var $o=Symbol("handledByFocusRing");var Io=b`:host{animation-delay:0s,calc(var(--md-focus-ring-duration, 600ms)*.25);animation-duration:calc(var(--md-focus-ring-duration, 600ms)*.25),calc(var(--md-focus-ring-duration, 600ms)*.75);animation-timing-function:cubic-bezier(0.2, 0, 0, 1);box-sizing:border-box;color:var(--md-focus-ring-color, var(--md-sys-color-secondary, #625b71));display:none;pointer-events:none;position:absolute}:host([visible]){display:flex}:host(:not([inward])){animation-name:outward-grow,outward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));inset:calc(-1*var(--md-focus-ring-outward-offset, 2px));outline:var(--md-focus-ring-width, 3px) solid currentColor}:host([inward]){animation-name:inward-grow,inward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border:var(--md-focus-ring-width, 3px) solid currentColor;inset:var(--md-focus-ring-inward-offset, 0px)}@keyframes outward-grow{from{outline-width:0}to{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes outward-shrink{from{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-grow{from{border-width:0}to{border-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-shrink{from{border-width:var(--md-focus-ring-active-width, 8px)}}@media(prefers-reduced-motion){:host{animation:none}}/*# sourceMappingURL=focus-ring-styles.css.map */
`;var kt=class extends we{};kt.styles=[Io];kt=a([w("md-focus-ring")],kt);var Y={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ee=i=>(...e)=>({_$litDirective$:i,values:e}),ne=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var P=Ee(class extends ne{constructor(i){var e;if(super(i),i.type!==Y.ATTRIBUTE||i.name!=="class"||((e=i.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(e=>i[e]).join(" ")+" "}update(i,[e]){var t,o;if(this.it===void 0){this.it=new Set,i.strings!==void 0&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(let n in e)e[n]&&!(!((t=this.nt)===null||t===void 0)&&t.has(n))&&this.it.add(n);return this.render(e)}let r=i.element.classList;this.it.forEach(n=>{n in e||(r.remove(n),this.it.delete(n))});for(let n in e){let s=!!e[n];s===this.it.has(n)||!((o=this.nt)===null||o===void 0)&&o.has(n)||(s?(r.add(n),this.it.add(n)):(r.remove(n),this.it.delete(n)))}return N}});var q={STANDARD:"cubic-bezier(0.2, 0, 0, 1)",STANDARD_ACCELERATE:"cubic-bezier(.3,0,1,1)",STANDARD_DECELERATE:"cubic-bezier(0,0,0,1)",EMPHASIZED:"cubic-bezier(.3,0,0,1)",EMPHASIZED_ACCELERATE:"cubic-bezier(.3,0,.8,.15)",EMPHASIZED_DECELERATE:"cubic-bezier(.05,.7,.1,1)"};function ko(){let i=null;return{start(){return i?.abort(),i=new AbortController,i.signal},finish(){i=null}}}var wi=450,Oo=225,Ei=.2,Ai=10,Ci=75,Si=.35,Ti="::after",$i="forwards",U;(function(i){i[i.INACTIVE=0]="INACTIVE",i[i.TOUCH_DELAY=1]="TOUCH_DELAY",i[i.HOLDING=2]="HOLDING",i[i.WAITING_FOR_CLICK=3]="WAITING_FOR_CLICK"})(U||(U={}));var Ii=["click","contextmenu","pointercancel","pointerdown","pointerenter","pointerleave","pointerup"],ki=150,ae=class extends y{constructor(){super(...arguments),this.disabled=!1,this.hovered=!1,this.pressed=!1,this.rippleSize="",this.rippleScale="",this.initialSize=0,this.state=U.INACTIVE,this.checkBoundsAfterContextMenu=!1,this.attachableController=new _e(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(e){this.attachableController.htmlFor=e}get control(){return this.attachableController.control}set control(e){this.attachableController.control=e}attach(e){this.attachableController.attach(e)}detach(){this.attachableController.detach()}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}render(){let e={hovered:this.hovered,pressed:this.pressed};return h`<div class="surface ${P(e)}"></div>`}update(e){e.has("disabled")&&this.disabled&&(this.hovered=!1,this.pressed=!1),super.update(e)}handlePointerenter(e){this.shouldReactToEvent(e)&&(this.hovered=!0)}handlePointerleave(e){this.shouldReactToEvent(e)&&(this.hovered=!1,this.state!==U.INACTIVE&&this.endPressAnimation())}handlePointerup(e){if(this.shouldReactToEvent(e)){if(this.state===U.HOLDING){this.state=U.WAITING_FOR_CLICK;return}if(this.state===U.TOUCH_DELAY){this.state=U.WAITING_FOR_CLICK,this.startPressAnimation(this.rippleStartEvent);return}}}async handlePointerdown(e){if(this.shouldReactToEvent(e)){if(this.rippleStartEvent=e,!this.isTouch(e)){this.state=U.WAITING_FOR_CLICK,this.startPressAnimation(e);return}this.checkBoundsAfterContextMenu&&!this.inBounds(e)||(this.checkBoundsAfterContextMenu=!1,this.state=U.TOUCH_DELAY,await new Promise(t=>{setTimeout(t,ki)}),this.state===U.TOUCH_DELAY&&(this.state=U.HOLDING,this.startPressAnimation(e)))}}handleClick(){if(!this.disabled){if(this.state===U.WAITING_FOR_CLICK){this.endPressAnimation();return}this.state===U.INACTIVE&&(this.startPressAnimation(),this.endPressAnimation())}}handlePointercancel(e){this.shouldReactToEvent(e)&&this.endPressAnimation()}handleContextmenu(){this.disabled||(this.checkBoundsAfterContextMenu=!0,this.endPressAnimation())}determineRippleSize(){let{height:e,width:t}=this.getBoundingClientRect(),o=Math.max(e,t),r=Math.max(Si*o,Ci),n=Math.floor(o*Ei),d=Math.sqrt(t**2+e**2)+Ai;this.initialSize=n,this.rippleScale=`${(d+r)/n}`,this.rippleSize=`${n}px`}getNormalizedPointerEventCoords(e){let{scrollX:t,scrollY:o}=window,{left:r,top:n}=this.getBoundingClientRect(),s=t+r,d=o+n,{pageX:c,pageY:u}=e;return{x:c-s,y:u-d}}getTranslationCoordinates(e){let{height:t,width:o}=this.getBoundingClientRect(),r={x:(o-this.initialSize)/2,y:(t-this.initialSize)/2},n;return e instanceof PointerEvent?n=this.getNormalizedPointerEventCoords(e):n={x:o/2,y:t/2},n={x:n.x-this.initialSize/2,y:n.y-this.initialSize/2},{startPoint:n,endPoint:r}}startPressAnimation(e){if(!this.mdRoot)return;this.pressed=!0,this.growAnimation?.cancel(),this.determineRippleSize();let{startPoint:t,endPoint:o}=this.getTranslationCoordinates(e),r=`${t.x}px, ${t.y}px`,n=`${o.x}px, ${o.y}px`;this.growAnimation=this.mdRoot.animate({top:[0,0],left:[0,0],height:[this.rippleSize,this.rippleSize],width:[this.rippleSize,this.rippleSize],transform:[`translate(${r}) scale(1)`,`translate(${n}) scale(${this.rippleScale})`]},{pseudoElement:Ti,duration:wi,easing:q.STANDARD,fill:$i})}async endPressAnimation(){this.state=U.INACTIVE;let e=this.growAnimation,t=e?.currentTime??1/0;if(t>=Oo){this.pressed=!1;return}await new Promise(o=>{setTimeout(o,Oo-t)}),this.growAnimation===e&&(this.pressed=!1)}shouldReactToEvent(e){if(this.disabled||!e.isPrimary||this.rippleStartEvent&&this.rippleStartEvent.pointerId!==e.pointerId)return!1;if(e.type==="pointerenter"||e.type==="pointerleave")return!this.isTouch(e);let t=e.buttons===1;return this.isTouch(e)||t}inBounds({x:e,y:t}){let{top:o,left:r,bottom:n,right:s}=this.getBoundingClientRect();return e>=r&&e<=s&&t>=o&&t<=n}isTouch({pointerType:e}){return e==="touch"}async handleEvent(e){switch(e.type){case"click":this.handleClick();break;case"contextmenu":this.handleContextmenu();break;case"pointercancel":this.handlePointercancel(e);break;case"pointerdown":await this.handlePointerdown(e);break;case"pointerenter":this.handlePointerenter(e);break;case"pointerleave":this.handlePointerleave(e);break;case"pointerup":this.handlePointerup(e);break;default:break}}onControlChange(e,t){if(!!1)for(let o of Ii)e?.removeEventListener(o,this),t?.addEventListener(o,this)}};a([l({type:Boolean,reflect:!0})],ae.prototype,"disabled",void 0);a([E()],ae.prototype,"hovered",void 0);a([E()],ae.prototype,"pressed",void 0);a([v(".surface")],ae.prototype,"mdRoot",void 0);var Ro=b`:host{--_hover-color: var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-opacity: var(--md-ripple-hover-opacity, 0.08);--_pressed-color: var(--md-ripple-pressed-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-opacity: var(--md-ripple-pressed-opacity, 0.12);display:flex;margin:auto;pointer-events:none}:host([disabled]){display:none}@media(forced-colors: active){:host{display:none}}:host,.surface{border-radius:inherit;position:absolute;inset:0;overflow:hidden}.surface{-webkit-tap-highlight-color:rgba(0,0,0,0)}.surface::before,.surface::after{content:"";opacity:0;position:absolute}.surface::before{background-color:var(--_hover-color);inset:0;transition:opacity 15ms linear,background-color 15ms linear}.surface::after{background:radial-gradient(closest-side, var(--_pressed-color) max(100% - 70px, 65%), transparent 100%);transform-origin:center center;transition:opacity 375ms linear}.hovered::before{background-color:var(--_hover-color);opacity:var(--_hover-opacity)}.pressed::after{opacity:var(--_pressed-opacity);transition-duration:105ms}/*# sourceMappingURL=ripple-styles.css.map */
`;var Ot=class extends ae{};Ot.styles=[Ro];Ot=a([w("md-ripple")],Ot);var Po=Symbol.for(""),Oi=i=>{if(i?.r===Po)return i?._$litStatic$};var te=(i,...e)=>({_$litStatic$:e.reduce((t,o,r)=>t+(n=>{if(n._$litStatic$!==void 0)return n._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${n}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(o)+i[r+1],i[0]),r:Po}),zo=new Map,Lo=i=>(e,...t)=>{let o=t.length,r,n,s=[],d=[],c,u=0,m=!1;for(;u<o;){for(c=e[u];u<o&&(n=t[u],(r=Oi(n))!==void 0);)c+=r+e[++u],m=!0;u!==o&&d.push(n),s.push(c),u++}if(u===o&&s.push(e[o]),m){let f=s.join("$$lit$$");(e=zo.get(f))===void 0&&(s.raw=s,zo.set(f,e=s)),t=d}return i(e,...t)},Ae=Lo(h),Un=Lo(go);var Oe=["ariaAtomic","ariaAutoComplete","ariaBusy","ariaChecked","ariaColCount","ariaColIndex","ariaColSpan","ariaCurrent","ariaDisabled","ariaExpanded","ariaHasPopup","ariaHidden","ariaInvalid","ariaKeyShortcuts","ariaLabel","ariaLevel","ariaLive","ariaModal","ariaMultiLine","ariaMultiSelectable","ariaOrientation","ariaPlaceholder","ariaPosInSet","ariaPressed","ariaReadOnly","ariaRequired","ariaRoleDescription","ariaRowCount","ariaRowIndex","ariaRowSpan","ariaSelected","ariaSetSize","ariaSort","ariaValueMax","ariaValueMin","ariaValueNow","ariaValueText"],jn=Oe.map(Re);function Re(i){return i.replace("aria","aria-").replace(/Elements?/g,"").toLowerCase()}function Do(i,{focusable:e}={}){if(e!==!1&&i.addInitializer(t=>{t.addController({hostConnected(){t.hasAttribute("tabindex")||(t.tabIndex=0)}})}),!(!1||"role"in Element.prototype)){for(let t of Oe)i.createProperty(t,{attribute:Re(t),reflect:!0});i.createProperty("role",{reflect:!0})}}function Mo(i,e){if(Ri(e))return e;if(!("role"in i))throw new Error("Missing setupHostAria()");let t=[],o=!1;for(let n of Oe){let s=null;Object.defineProperty(e,n,{enumerable:!0,configurable:!0,get(){return s},set(d){let c=()=>{if(s=d,!o){t.push({property:n,callback:c});return}i[n]=d};c()}})}let r=null;return Object.defineProperty(e,"role",{enumerable:!0,configurable:!0,get(){return r},set(n){let s=()=>{if(r=n,!o){t.push({property:"role",callback:s});return}n===null?i.removeAttribute("role"):i.setAttribute("role",n)};s()}}),i.addController({hostConnected(){if(o)return;o=!0;let n=new Set;for(let{property:s}of t)(i.getAttribute(Re(s))!==null||i[s]!==void 0)&&n.add(s);for(let{property:s,callback:d}of t)n.has(s)||d();t=[]}}),e}function Ri(i){return"role"in i}function K(i){for(let e of Oe)i.createProperty(e,{attribute:Re(e),reflect:!0});i.addInitializer(e=>{let t={hostConnected(){e.setAttribute("role","presentation")}};e.addController(t)})}var ze=Symbol("internals");function se(i,e){e.bubbles&&(!i.shadowRoot||e.composed)&&e.stopPropagation();let t=Reflect.construct(e.constructor,[e.type,e]),o=i.dispatchEvent(t);return o||e.preventDefault(),o}function et(i){let e=new MouseEvent("click",{bubbles:!0});return i.dispatchEvent(e),e}function tt(i){return i.currentTarget!==i.target||i.composedPath()[0]!==i.target||i.target.disabled?!1:!zi(i)}function zi(i){let e=Rt;return e&&(i.preventDefault(),i.stopImmediatePropagation()),Pi(),e}var Rt=!1;async function Pi(){Rt=!0,await null,Rt=!1}function No(i){!1||i.addInitializer(e=>{let t=e;t.addEventListener("click",async o=>{let{type:r,[ze]:n}=t,{form:s}=n;if(!(!s||r==="button")&&(await new Promise(d=>{d()}),!o.defaultPrevented)){if(r==="reset"){s.reset();return}s.addEventListener("submit",d=>{Object.defineProperty(d,"submitter",{configurable:!0,enumerable:!0,get:()=>t})},{capture:!0,once:!0}),n.setFormValue(t.value),s.requestSubmit()}})})}var Bo,L=class extends y{get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get form(){return this[ze].form}constructor(){super(),this.disabled=!1,this.href="",this.target="",this.trailingIcon=!1,this.hasIcon=!1,this.type="submit",this.value="",this[Bo]=this.attachInternals(),this.handleActivationClick=e=>{!tt(e)||!this.buttonElement||(this.focus(),et(this.buttonElement))},!1||this.addEventListener("click",this.handleActivationClick)}focus(){this.buttonElement?.focus()}blur(){this.buttonElement?.blur()}render(){let e=this.disabled&&!this.href,t=this.href?te`a`:te`button`,{ariaLabel:o,ariaHasPopup:r,ariaExpanded:n}=this;return Ae`
      <${t}
        class="button ${P(this.getRenderClasses())}"
        ?disabled=${e}
        aria-label="${o||p}"
        aria-haspopup="${r||p}"
        aria-expanded="${n||p}"
        href=${this.href||p}
        target=${this.target||p}
      >${this.renderContent()}</${t}>`}getRenderClasses(){return{"button--icon-leading":!this.trailingIcon&&this.hasIcon,"button--icon-trailing":this.trailingIcon&&this.hasIcon}}renderContent(){let e=this.disabled&&!this.href,t=h`<slot name="icon" @slotchange="${this.handleSlotChange}"></slot>`;return h`
      ${this.renderElevation?.()}
      ${this.renderOutline?.()}
      <md-focus-ring part="focus-ring"></md-focus-ring>
      <md-ripple class="button__ripple" ?disabled="${e}"></md-ripple>
      <span class="touch"></span>
      ${this.trailingIcon?p:t}
      <span class="button__label"><slot></slot></span>
      ${this.trailingIcon?t:p}
    `}handleSlotChange(){this.hasIcon=this.assignedIcons.length>0}};Bo=ze;K(L),No(L);L.formAssociated=!0;L.shadowRootOptions={mode:"open",delegatesFocus:!0};a([l({type:Boolean,reflect:!0})],L.prototype,"disabled",void 0);a([l()],L.prototype,"href",void 0);a([l()],L.prototype,"target",void 0);a([l({type:Boolean,attribute:"trailing-icon"})],L.prototype,"trailingIcon",void 0);a([l({type:Boolean,attribute:"has-icon"})],L.prototype,"hasIcon",void 0);a([l()],L.prototype,"type",void 0);a([l()],L.prototype,"value",void 0);a([v(".button")],L.prototype,"buttonElement",void 0);a([V({slot:"icon",flatten:!0})],L.prototype,"assignedIcons",void 0);var ot=class extends L{renderElevation(){return h`<md-elevation></md-elevation>`}};var Uo=b`:host{--_container-color: var(--md-filled-button-container-color, var(--md-sys-color-primary, #6750a4));--_container-elevation: var(--md-filled-button-container-elevation, 0);--_container-height: var(--md-filled-button-container-height, 40px);--_container-shadow-color: var(--md-filled-button-container-shadow-color, var(--md-sys-color-shadow, #000));--_container-shape: var(--md-filled-button-container-shape, 9999px);--_disabled-container-color: var(--md-filled-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-elevation: var(--md-filled-button-disabled-container-elevation, 0);--_disabled-container-opacity: var(--md-filled-button-disabled-container-opacity, 0.12);--_disabled-label-text-color: var(--md-filled-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-button-disabled-label-text-opacity, 0.38);--_focus-container-elevation: var(--md-filled-button-focus-container-elevation, 0);--_focus-label-text-color: var(--md-filled-button-focus-label-text-color, var(--md-sys-color-on-primary, #fff));--_hover-container-elevation: var(--md-filled-button-hover-container-elevation, 1);--_hover-label-text-color: var(--md-filled-button-hover-label-text-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-color: var(--md-filled-button-hover-state-layer-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-opacity: var(--md-filled-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-filled-button-label-text-color, var(--md-sys-color-on-primary, #fff));--_label-text-font: var(--md-filled-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-filled-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-filled-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-container-elevation: var(--md-filled-button-pressed-container-elevation, 0);--_pressed-label-text-color: var(--md-filled-button-pressed-label-text-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-color: var(--md-filled-button-pressed-state-layer-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-opacity: var(--md-filled-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-filled-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-button-focus-icon-color, var(--md-sys-color-on-primary, #fff));--_hover-icon-color: var(--md-filled-button-hover-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-color: var(--md-filled-button-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-size: var(--md-filled-button-icon-size, 18px);--_pressed-icon-color: var(--md-filled-button-pressed-icon-color, var(--md-sys-color-on-primary, #fff));--_leading-space: var(--md-filled-button-leading-space, 24px);--_trailing-space: var(--md-filled-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-filled-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-filled-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-filled-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-filled-button-with-trailing-icon-trailing-space, 16px);--_container-shape-start-start: var( --md-filled-button-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-filled-button-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-filled-button-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-filled-button-container-shape-end-start, var(--_container-shape) )}/*# sourceMappingURL=filled-styles.css.map */
`;var it=b`md-elevation{transition-duration:280ms}.button:disabled md-elevation{transition:none}.button{--md-elevation-level: var(--_container-elevation);--md-elevation-shadow-color: var(--_container-shadow-color)}.button:focus{--md-elevation-level: var(--_focus-container-elevation)}.button:hover{--md-elevation-level: var(--_hover-container-elevation)}.button:active{--md-elevation-level: var(--_pressed-container-elevation)}.button:disabled{--md-elevation-level: var(--_disabled-container-elevation)}/*# sourceMappingURL=shared-elevation-styles.css.map */
`;var rt=b`:host{display:inline-flex;height:var(--_container-height);outline:none;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);-webkit-tap-highlight-color:rgba(0,0,0,0);vertical-align:top;--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) 0}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host([disabled]){cursor:default;pointer-events:none}.button{display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-inline-size:64px;border:none;outline:none;user-select:none;-webkit-appearance:none;vertical-align:middle;background:rgba(0,0,0,0);text-decoration:none;inline-size:100%;position:relative;z-index:0;height:100%;font:inherit;color:var(--_label-text-color);padding-inline-start:var(--_leading-space);padding-inline-end:var(--_trailing-space);gap:8px}.button::before{background-color:var(--_container-color);border-radius:inherit;content:"";inset:0;position:absolute}.button::-moz-focus-inner{padding:0;border:0}.button:hover{color:var(--_hover-label-text-color);cursor:pointer}.button:focus{color:var(--_focus-label-text-color)}.button:active{color:var(--_pressed-label-text-color);outline:none}.button:disabled .button__label{color:var(--_disabled-label-text-color);opacity:var(--_disabled-label-text-opacity)}.button:disabled::before{background-color:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}@media(forced-colors: active){.button::before{content:"";box-sizing:border-box;border:1px solid CanvasText;border-radius:inherit;inset:0;pointer-events:none;position:absolute}.button:disabled{--_disabled-icon-opacity: 1;--_disabled-container-opacity: 1;--_disabled-label-text-opacity: 1}}.button,.button__ripple{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.button::after,.button::before,md-elevation,.button__ripple{z-index:-1}.button--icon-leading{padding-inline-start:var(--_with-leading-icon-leading-space);padding-inline-end:var(--_with-leading-icon-trailing-space)}.button--icon-trailing{padding-inline-start:var(--_with-trailing-icon-leading-space);padding-inline-end:var(--_with-trailing-icon-trailing-space)}.link-button-wrapper{inline-size:100%}.button ::slotted([slot=icon]){display:inline-flex;position:relative;writing-mode:horizontal-tb;fill:currentColor;color:var(--_icon-color);font-size:var(--_icon-size);inline-size:var(--_icon-size);block-size:var(--_icon-size)}.button:hover ::slotted([slot=icon]){color:var(--_hover-icon-color)}.button:focus ::slotted([slot=icon]){color:var(--_focus-icon-color)}.button:active ::slotted([slot=icon]){color:var(--_pressed-icon-color)}.button:disabled ::slotted([slot=icon]){color:var(--_disabled-icon-color);opacity:var(--_disabled-icon-opacity)}.touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}:host([touch-target=none]) .touch{display:none}/*# sourceMappingURL=shared-styles.css.map */
`;var zt=class extends ot{};zt.styles=[rt,it,Uo];zt=a([w("md-filled-button")],zt);var nt=class extends L{renderElevation(){return h`<md-elevation></md-elevation>`}};var Fo=b`:host{--_container-color: var(--md-filled-tonal-button-container-color, var(--md-sys-color-secondary-container, #e8def8));--_container-elevation: var(--md-filled-tonal-button-container-elevation, 0);--_container-height: var(--md-filled-tonal-button-container-height, 40px);--_container-shadow-color: var(--md-filled-tonal-button-container-shadow-color, var(--md-sys-color-shadow, #000));--_container-shape: var(--md-filled-tonal-button-container-shape, 9999px);--_disabled-container-color: var(--md-filled-tonal-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-elevation: var(--md-filled-tonal-button-disabled-container-elevation, 0);--_disabled-container-opacity: var(--md-filled-tonal-button-disabled-container-opacity, 0.12);--_disabled-label-text-color: var(--md-filled-tonal-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-tonal-button-disabled-label-text-opacity, 0.38);--_focus-container-elevation: var(--md-filled-tonal-button-focus-container-elevation, 0);--_focus-label-text-color: var(--md-filled-tonal-button-focus-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-container-elevation: var(--md-filled-tonal-button-hover-container-elevation, 1);--_hover-label-text-color: var(--md-filled-tonal-button-hover-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-state-layer-color: var(--md-filled-tonal-button-hover-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-state-layer-opacity: var(--md-filled-tonal-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-filled-tonal-button-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_label-text-font: var(--md-filled-tonal-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-tonal-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-filled-tonal-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-filled-tonal-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-container-elevation: var(--md-filled-tonal-button-pressed-container-elevation, 0);--_pressed-label-text-color: var(--md-filled-tonal-button-pressed-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-color: var(--md-filled-tonal-button-pressed-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-opacity: var(--md-filled-tonal-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-filled-tonal-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-tonal-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-tonal-button-focus-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-icon-color: var(--md-filled-tonal-button-hover-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_icon-color: var(--md-filled-tonal-button-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_icon-size: var(--md-filled-tonal-button-icon-size, 18px);--_pressed-icon-color: var(--md-filled-tonal-button-pressed-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_leading-space: var(--md-filled-tonal-button-leading-space, 24px);--_trailing-space: var(--md-filled-tonal-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-filled-tonal-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-filled-tonal-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-filled-tonal-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-filled-tonal-button-with-trailing-icon-trailing-space, 16px);--_container-shape-start-start: var( --md-filled-tonal-button-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-filled-tonal-button-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-filled-tonal-button-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-filled-tonal-button-container-shape-end-start, var(--_container-shape) )}/*# sourceMappingURL=filled-tonal-styles.css.map */
`;var Pt=class extends nt{};Pt.styles=[rt,it,Fo];Pt=a([w("md-filled-tonal-button")],Pt);var $=class extends y{constructor(){super(...arguments),this.disabled=!1,this.error=!1,this.focused=!1,this.label="",this.populated=!1,this.required=!1,this.resizable=!1,this.supportingText="",this.errorText="",this.count=-1,this.max=-1,this.hasStart=!1,this.hasEnd=!1,this.isAnimating=!1,this.refreshErrorAlert=!1,this.disableTransitions=!1}get counterText(){return this.count<0||this.max<0?"":`${this.count} / ${this.max}`}get supportingOrErrorText(){return this.error&&this.errorText?this.errorText:this.supportingText}reannounceError(){this.refreshErrorAlert=!0}update(e){e.has("disabled")&&e.get("disabled")!==void 0&&(this.disableTransitions=!0),this.disabled&&this.focused&&(e.set("focused",!0),this.focused=!1),this.animateLabelIfNeeded({wasFocused:e.get("focused"),wasPopulated:e.get("populated")}),super.update(e)}render(){let e=this.renderLabel(!0),t=this.renderLabel(!1),o=this.renderOutline?.(e),r={disabled:this.disabled,"disable-transitions":this.disableTransitions,error:this.error&&!this.disabled,focused:this.focused,"with-start":this.hasStart,"with-end":this.hasEnd,populated:this.populated,resizable:this.resizable,required:this.required,"no-label":!this.label};return h`
      <div class="field ${P(r)}">
        <div class="container-overflow">
          ${this.renderBackground?.()}
          ${this.renderIndicator?.()}
          ${o}
          <div class="container">
            <div class="start">
              <slot name="start"></slot>
            </div>
            <div class="middle">
              <div class="label-wrapper">
                ${t}
                ${o?p:e}
              </div>
              <div class="content">
                <slot></slot>
              </div>
            </div>
            <div class="end">
              <slot name="end"></slot>
            </div>
          </div>
        </div>
        ${this.renderSupportingText()}
      </div>
    `}updated(e){(e.has("supportingText")||e.has("errorText")||e.has("count")||e.has("max"))&&this.updateSlottedAriaDescribedBy(),this.refreshErrorAlert&&requestAnimationFrame(()=>{this.refreshErrorAlert=!1}),this.disableTransitions&&requestAnimationFrame(()=>{this.disableTransitions=!1})}renderSupportingText(){let{supportingOrErrorText:e,counterText:t}=this;if(!e&&!t)return p;let o=h`<span>${e}</span>`,r=t?h`<span class="counter">${t}</span>`:p,s=this.error&&this.errorText&&!this.refreshErrorAlert?"alert":p;return h`
      <div class="supporting-text" role=${s}>${o}${r}</div>
      <slot name="aria-describedby" @slotchange=${this.updateSlottedAriaDescribedBy}></slot>
    `}updateSlottedAriaDescribedBy(){for(let e of this.slottedAriaDescribedBy)Ye(h`${this.supportingOrErrorText} ${this.counterText}`,e),e.setAttribute("hidden","")}renderLabel(e){if(!this.label)return p;let t;e?t=this.focused||this.populated||this.isAnimating:t=!this.focused&&!this.populated&&!this.isAnimating;let o={hidden:!t,floating:e,resting:!e},r=`${this.label}${this.required?"*":""}`;return h`
      <span class="label ${P(o)}"
        aria-hidden=${!t}
      >${r}</span>
    `}animateLabelIfNeeded({wasFocused:e,wasPopulated:t}){if(!this.label)return;e??(e=this.focused),t??(t=this.populated);let o=e||t,r=this.focused||this.populated;o!==r&&(this.isAnimating=!0,this.labelAnimation?.cancel(),this.labelAnimation=this.floatingLabelEl?.animate(this.getLabelKeyframes(),{duration:150,easing:q.STANDARD}),this.labelAnimation?.addEventListener("finish",()=>{this.isAnimating=!1}))}getLabelKeyframes(){let{floatingLabelEl:e,restingLabelEl:t}=this;if(!e||!t)return[];let{x:o,y:r,height:n}=e.getBoundingClientRect(),{x:s,y:d,height:c}=t.getBoundingClientRect(),u=e.scrollWidth,m=t.scrollWidth,f=m/u,g=s-o,_=d-r+Math.round((c-n*f)/2),R=`translateX(${g}px) translateY(${_}px) scale(${f})`,C="translateX(0) translateY(0) scale(1)",z=t.clientWidth,A=m>z?`${z/f}px`:"";return this.focused||this.populated?[{transform:R,width:A},{transform:C,width:A}]:[{transform:C,width:A},{transform:R,width:A}]}getSurfacePositionClientRect(){return this.containerEl.getBoundingClientRect()}};a([l({type:Boolean})],$.prototype,"disabled",void 0);a([l({type:Boolean})],$.prototype,"error",void 0);a([l({type:Boolean})],$.prototype,"focused",void 0);a([l()],$.prototype,"label",void 0);a([l({type:Boolean})],$.prototype,"populated",void 0);a([l({type:Boolean})],$.prototype,"required",void 0);a([l({type:Boolean})],$.prototype,"resizable",void 0);a([l({attribute:"supporting-text"})],$.prototype,"supportingText",void 0);a([l({attribute:"error-text"})],$.prototype,"errorText",void 0);a([l({type:Number})],$.prototype,"count",void 0);a([l({type:Number})],$.prototype,"max",void 0);a([l({type:Boolean,attribute:"has-start"})],$.prototype,"hasStart",void 0);a([l({type:Boolean,attribute:"has-end"})],$.prototype,"hasEnd",void 0);a([V({slot:"aria-describedby"})],$.prototype,"slottedAriaDescribedBy",void 0);a([E()],$.prototype,"isAnimating",void 0);a([E()],$.prototype,"refreshErrorAlert",void 0);a([E()],$.prototype,"disableTransitions",void 0);a([v(".label.floating")],$.prototype,"floatingLabelEl",void 0);a([v(".label.resting")],$.prototype,"restingLabelEl",void 0);a([v(".container")],$.prototype,"containerEl",void 0);var at=class extends ${renderOutline(e){return h`
      <div class="outline">
        <div class="outline-start"></div>
        <div class="outline-notch">
          <div class="outline-panel-inactive"></div>
          <div class="outline-panel-active"></div>
          <div class="outline-label">${e}</div>
        </div>
        <div class="outline-end"></div>
      </div>
    `}};var Vo=b`:host{--_bottom-space: var(--md-outlined-field-bottom-space, 16px);--_container-shape: var(--md-outlined-field-container-shape, 4px);--_content-color: var(--md-outlined-field-content-color, var(--md-sys-color-on-surface, #1d1b20));--_content-font: var(--md-outlined-field-content-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_content-line-height: var(--md-outlined-field-content-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_content-size: var(--md-outlined-field-content-size, var(--md-sys-typescale-body-large-size, 1rem));--_content-weight: var(--md-outlined-field-content-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_disabled-content-color: var(--md-outlined-field-disabled-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-content-opacity: var(--md-outlined-field-disabled-content-opacity, 0.38);--_disabled-label-text-color: var(--md-outlined-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-field-disabled-label-text-opacity, 0.38);--_disabled-leading-content-color: var(--md-outlined-field-disabled-leading-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-content-opacity: var(--md-outlined-field-disabled-leading-content-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-field-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-field-disabled-outline-opacity, 0.12);--_disabled-outline-width: var(--md-outlined-field-disabled-outline-width, 1px);--_disabled-supporting-text-color: var(--md-outlined-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-outlined-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-content-color: var(--md-outlined-field-disabled-trailing-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-content-opacity: var(--md-outlined-field-disabled-trailing-content-opacity, 0.38);--_error-content-color: var(--md-outlined-field-error-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-content-color: var(--md-outlined-field-error-focus-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-label-text-color: var(--md-outlined-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-content-color: var(--md-outlined-field-error-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-outline-color: var(--md-outlined-field-error-focus-outline-color, var(--md-sys-color-error, #b3261e));--_error-focus-supporting-text-color: var(--md-outlined-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-content-color: var(--md-outlined-field-error-focus-trailing-content-color, var(--md-sys-color-error, #b3261e));--_error-hover-content-color: var(--md-outlined-field-error-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-outlined-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-content-color: var(--md-outlined-field-error-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-outline-color: var(--md-outlined-field-error-hover-outline-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-supporting-text-color: var(--md-outlined-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-content-color: var(--md-outlined-field-error-hover-trailing-content-color, var(--md-sys-color-on-error-container, #410e0b));--_error-label-text-color: var(--md-outlined-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-content-color: var(--md-outlined-field-error-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-outline-color: var(--md-outlined-field-error-outline-color, var(--md-sys-color-error, #b3261e));--_error-supporting-text-color: var(--md-outlined-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-content-color: var(--md-outlined-field-error-trailing-content-color, var(--md-sys-color-error, #b3261e));--_focus-content-color: var(--md-outlined-field-focus-content-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-outlined-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-content-color: var(--md-outlined-field-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-outline-color: var(--md-outlined-field-focus-outline-color, var(--md-sys-color-primary, #6750a4));--_focus-outline-width: var(--md-outlined-field-focus-outline-width, 3px);--_focus-supporting-text-color: var(--md-outlined-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-content-color: var(--md-outlined-field-focus-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-content-color: var(--md-outlined-field-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-outlined-field-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-leading-content-color: var(--md-outlined-field-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-outline-color: var(--md-outlined-field-hover-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-outline-width: var(--md-outlined-field-hover-outline-width, 1px);--_hover-supporting-text-color: var(--md-outlined-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-content-color: var(--md-outlined-field-hover-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-color: var(--md-outlined-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-outlined-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-outlined-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-padding-bottom: var(--md-outlined-field-label-text-padding-bottom, 8px);--_label-text-populated-line-height: var(--md-outlined-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-outlined-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-outlined-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-outlined-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-content-color: var(--md-outlined-field-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-space: var(--md-outlined-field-leading-space, 16px);--_outline-color: var(--md-outlined-field-outline-color, var(--md-sys-color-outline, #79747e));--_outline-label-padding: var(--md-outlined-field-outline-label-padding, 4px);--_outline-width: var(--md-outlined-field-outline-width, 1px);--_supporting-text-color: var(--md-outlined-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-outlined-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-leading-space: var(--md-outlined-field-supporting-text-leading-space, 16px);--_supporting-text-line-height: var(--md-outlined-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-outlined-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-top-space: var(--md-outlined-field-supporting-text-top-space, 4px);--_supporting-text-trailing-space: var(--md-outlined-field-supporting-text-trailing-space, 16px);--_supporting-text-weight: var(--md-outlined-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_top-space: var(--md-outlined-field-top-space, 16px);--_trailing-content-color: var(--md-outlined-field-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-space: var(--md-outlined-field-trailing-space, 16px);--_container-shape-start-start: var( --md-outlined-field-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-outlined-field-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-outlined-field-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-outlined-field-container-shape-end-start, var(--_container-shape) )}.outline{border-color:var(--_outline-color);border-radius:inherit;color:var(--_outline-color);display:flex;pointer-events:none;height:100%;position:absolute;width:100%}.outline-start::before,.outline-start::after,.outline-panel-inactive::before,.outline-panel-inactive::after,.outline-panel-active::before,.outline-panel-active::after,.outline-end::before,.outline-end::after{border:inherit;content:"";inset:0;position:absolute}.outline-start,.outline-end{border:inherit;border-radius:inherit;box-sizing:border-box;position:relative}.outline-start::before,.outline-start::after,.outline-end::before,.outline-end::after{border-bottom-style:solid;border-top-style:solid}.outline-start::after,.outline-end::after{opacity:0;transition:opacity 150ms cubic-bezier(0.2, 0, 0, 1)}.focused .outline-start::after,.focused .outline-end::after{opacity:1}.outline-start::before,.outline-start::after{border-inline-start-style:solid;border-inline-end-style:none;border-start-start-radius:inherit;border-start-end-radius:0;border-end-start-radius:inherit;border-end-end-radius:0;margin-inline-end:var(--_outline-label-padding)}.outline-end{flex-grow:1;margin-inline-start:calc(-1*var(--_outline-label-padding))}.outline-end::before,.outline-end::after{border-inline-start-style:none;border-inline-end-style:solid;border-start-start-radius:0;border-start-end-radius:inherit;border-end-start-radius:0;border-end-end-radius:inherit}.outline-notch{align-items:flex-start;border:inherit;display:flex;margin-inline-start:calc(-1*var(--_outline-label-padding));margin-inline-end:var(--_outline-label-padding);max-width:calc(100% - var(--_leading-space) - var(--_trailing-space));padding:0 var(--_outline-label-padding);position:relative}.no-label .outline-notch{display:none}.outline-panel-inactive,.outline-panel-active{border:inherit;border-bottom-style:solid;inset:0;position:absolute}.outline-panel-inactive::before,.outline-panel-inactive::after,.outline-panel-active::before,.outline-panel-active::after{border-top-style:solid;border-bottom:none;bottom:auto;transform:scaleX(1);transition:transform 150ms cubic-bezier(0.2, 0, 0, 1)}.outline-panel-inactive::before,.outline-panel-active::before{right:50%;transform-origin:top left}.outline-panel-inactive::after,.outline-panel-active::after{left:50%;transform-origin:top right}.populated .outline-panel-inactive::before,.populated .outline-panel-inactive::after,.populated .outline-panel-active::before,.populated .outline-panel-active::after,.focused .outline-panel-inactive::before,.focused .outline-panel-inactive::after,.focused .outline-panel-active::before,.focused .outline-panel-active::after{transform:scaleX(0)}.outline-panel-active{opacity:0;transition:opacity 150ms cubic-bezier(0.2, 0, 0, 1)}.focused .outline-panel-active{opacity:1}.outline-label{display:flex;max-width:100%;transform:translateY(calc(-100% + var(--_label-text-padding-bottom)))}.outline-start,.field:not(.with-start) .content ::slotted(*){padding-inline-start:max(var(--_leading-space),max(var(--_container-shape-start-start),var(--_container-shape-end-start)) + var(--_outline-label-padding))}.field:not(.with-start) .label-wrapper{margin-inline-start:max(var(--_leading-space),max(var(--_container-shape-start-start),var(--_container-shape-end-start)) + var(--_outline-label-padding))}.field:not(.with-end) .content ::slotted(*){padding-inline-end:max(var(--_trailing-space),max(var(--_container-shape-start-end),var(--_container-shape-end-end)))}.field:not(.with-end) .label-wrapper{margin-inline-end:max(var(--_trailing-space),max(var(--_container-shape-start-end),var(--_container-shape-end-end)))}.outline-start::before,.outline-end::before,.outline-panel-inactive,.outline-panel-inactive::before,.outline-panel-inactive::after{border-width:var(--_outline-width)}:hover .outline{border-color:var(--_hover-outline-color);color:var(--_hover-outline-color)}:hover .outline-start::before,:hover .outline-end::before,:hover .outline-panel-inactive,:hover .outline-panel-inactive::before,:hover .outline-panel-inactive::after{border-width:var(--_hover-outline-width)}.focused .outline{border-color:var(--_focus-outline-color);color:var(--_focus-outline-color)}.outline-start::after,.outline-end::after,.outline-panel-active,.outline-panel-active::before,.outline-panel-active::after{border-width:var(--_focus-outline-width)}.disabled .outline{border-color:var(--_disabled-outline-color);color:var(--_disabled-outline-color)}.disabled .outline-start,.disabled .outline-end,.disabled .outline-panel-inactive{opacity:var(--_disabled-outline-opacity)}.disabled .outline-start::before,.disabled .outline-end::before,.disabled .outline-panel-inactive,.disabled .outline-panel-inactive::before,.disabled .outline-panel-inactive::after{border-width:var(--_disabled-outline-width)}.error .outline{border-color:var(--_error-outline-color);color:var(--_error-outline-color)}.error:hover .outline{border-color:var(--_error-hover-outline-color);color:var(--_error-hover-outline-color)}.error.focused .outline{border-color:var(--_error-focus-outline-color);color:var(--_error-focus-outline-color)}.resizable .container{bottom:var(--_focus-outline-width);inset-inline-end:var(--_focus-outline-width);clip-path:inset(var(--_focus-outline-width) 0 0 var(--_focus-outline-width))}.resizable .container>*{top:var(--_focus-outline-width);inset-inline-start:var(--_focus-outline-width)}:host-context([dir=rtl]) .resizable .container,:host([dir=rtl]) .resizable .container{clip-path:inset(var(--_focus-outline-width) var(--_focus-outline-width) 0 0)}.resizable .container:dir(rtl){clip-path:inset(var(--_focus-outline-width) var(--_focus-outline-width) 0 0)}/*# sourceMappingURL=outlined-styles.css.map */
`;var qo=b`:host{display:inline-flex;resize:both}.field{display:flex;flex:1;flex-direction:column;writing-mode:horizontal-tb;max-width:100%}.container-overflow{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start);display:flex;height:100%;position:relative}.container{align-items:center;border-radius:inherit;display:flex;flex:1;max-height:100%;min-height:100%;min-width:min-content;position:relative}.field,.container-overflow{resize:inherit}.resizable:not(.disabled) .container{resize:inherit;overflow:hidden}.disabled{pointer-events:none}.start,.middle,.end{display:flex;box-sizing:border-box;height:100%;position:relative}.start{color:var(--_leading-content-color)}.end{color:var(--_trailing-content-color)}.start,.end{align-items:center;justify-content:center}.with-start .start,.with-end .end{min-width:48px}.with-start .start{margin-inline-end:4px}.with-end .end{margin-inline-start:4px}.middle{align-items:stretch;align-self:baseline;flex:1}.content{color:var(--_content-color);display:flex;flex:1;opacity:0;transition:opacity 83ms cubic-bezier(0.2, 0, 0, 1)}.no-label .content,.focused .content,.populated .content{opacity:1;transition-delay:67ms}:is(.disabled,.disable-transitions) .content{transition:none}.content ::slotted(*){all:unset;color:currentColor;font-family:var(--_content-font);font-size:var(--_content-size);line-height:var(--_content-line-height);font-weight:var(--_content-weight);width:100%;white-space:pre-wrap}.content ::slotted(:not(textarea)){padding-top:var(--_top-space);padding-bottom:var(--_bottom-space)}.content ::slotted(textarea){margin-top:var(--_top-space);margin-bottom:var(--_bottom-space)}:hover .content{color:var(--_hover-content-color)}:hover .start{color:var(--_hover-leading-content-color)}:hover .end{color:var(--_hover-trailing-content-color)}.focused .content{color:var(--_focus-content-color)}.focused .start{color:var(--_focus-leading-content-color)}.focused .end{color:var(--_focus-trailing-content-color)}.disabled .content{color:var(--_disabled-content-color)}.disabled.no-label .content,.disabled.focused .content,.disabled.populated .content{opacity:var(--_disabled-content-opacity)}.disabled .start{color:var(--_disabled-leading-content-color);opacity:var(--_disabled-leading-content-opacity)}.disabled .end{color:var(--_disabled-trailing-content-color);opacity:var(--_disabled-trailing-content-opacity)}.error .content{color:var(--_error-content-color)}.error .start{color:var(--_error-leading-content-color)}.error .end{color:var(--_error-trailing-content-color)}.error:hover .content{color:var(--_error-hover-content-color)}.error:hover .start{color:var(--_error-hover-leading-content-color)}.error:hover .end{color:var(--_error-hover-trailing-content-color)}.error.focused .content{color:var(--_error-focus-content-color)}.error.focused .start{color:var(--_error-focus-leading-content-color)}.error.focused .end{color:var(--_error-focus-trailing-content-color)}.label{box-sizing:border-box;color:var(--_label-text-color);overflow:hidden;max-width:100%;text-overflow:ellipsis;white-space:nowrap;z-index:1;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);width:min-content}.label-wrapper{inset:0;pointer-events:none;position:absolute}.label.resting{position:absolute;top:var(--_top-space)}.label.floating{font-size:var(--_label-text-populated-size);line-height:var(--_label-text-populated-line-height);transform-origin:top left}.label.hidden{opacity:0}.no-label .label{display:none}.label-wrapper{inset:0;position:absolute;text-align:initial}:hover .label{color:var(--_hover-label-text-color)}.focused .label{color:var(--_focus-label-text-color)}.disabled .label{color:var(--_disabled-label-text-color)}.disabled .label:not(.hidden){opacity:var(--_disabled-label-text-opacity)}.error .label{color:var(--_error-label-text-color)}.error:hover .label{color:var(--_error-hover-label-text-color)}.error.focused .label{color:var(--_error-focus-label-text-color)}.supporting-text{color:var(--_supporting-text-color);display:flex;font-family:var(--_supporting-text-font);font-size:var(--_supporting-text-size);line-height:var(--_supporting-text-line-height);font-weight:var(--_supporting-text-weight);gap:16px;justify-content:space-between;padding-inline-start:var(--_supporting-text-leading-space);padding-inline-end:var(--_supporting-text-trailing-space);padding-top:var(--_supporting-text-top-space)}.supporting-text :nth-child(2){flex-shrink:0}:hover .supporting-text{color:var(--_hover-supporting-text-color)}.focus .supporting-text{color:var(--_focus-supporting-text-color)}.disabled .supporting-text{color:var(--_disabled-supporting-text-color);opacity:var(--_disabled-supporting-text-opacity)}.error .supporting-text{color:var(--_error-supporting-text-color)}.error:hover .supporting-text{color:var(--_error-hover-supporting-text-color)}.error.focus .supporting-text{color:var(--_error-focus-supporting-text-color)}/*# sourceMappingURL=shared-styles.css.map */
`;var Lt=class extends at{};Lt.styles=[qo,Vo];Lt=a([w("md-outlined-field")],Lt);var Ho=b`@media(forced-colors: active){:host{--md-outlined-text-field-disabled-input-text-color: GrayText;--md-outlined-text-field-disabled-input-text-opacity: 1;--md-outlined-text-field-disabled-label-text-color: GrayText;--md-outlined-text-field-disabled-label-text-opacity: 1;--md-outlined-text-field-disabled-leading-icon-color: GrayText;--md-outlined-text-field-disabled-leading-icon-opacity: 1;--md-outlined-text-field-disabled-outline-color: GrayText;--md-outlined-text-field-disabled-outline-opacity: 1;--md-outlined-text-field-disabled-supporting-text-color: GrayText;--md-outlined-text-field-disabled-supporting-text-opacity: 1;--md-outlined-text-field-disabled-trailing-icon-color: GrayText;--md-outlined-text-field-disabled-trailing-icon-opacity: 1}}/*# sourceMappingURL=outlined-forced-colors-styles.css.map */
`;var jo=b`:host{--_leading-space: var(--md-outlined-text-field-leading-space, 16px);--_trailing-space: var(--md-outlined-text-field-trailing-space, 16px);--_top-space: var(--md-outlined-text-field-top-space, 16px);--_bottom-space: var(--md-outlined-text-field-bottom-space, 16px);--_input-text-prefix-trailing-space: var(--md-outlined-text-field-input-text-prefix-trailing-space, 2px);--_input-text-suffix-leading-space: var(--md-outlined-text-field-input-text-suffix-leading-space, 2px);--_focus-caret-color: var(--md-outlined-text-field-focus-caret-color, var(--md-sys-color-primary, #6750a4));--_caret-color: var(--md-outlined-text-field-caret-color, var(--md-sys-color-primary, #6750a4));--_container-shape: var(--md-outlined-text-field-container-shape, 4px);--_disabled-input-text-color: var(--md-outlined-text-field-disabled-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-input-text-opacity: var(--md-outlined-text-field-disabled-input-text-opacity, 0.38);--_disabled-label-text-color: var(--md-outlined-text-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-text-field-disabled-label-text-opacity, 0.38);--_disabled-leading-icon-color: var(--md-outlined-text-field-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-outlined-text-field-disabled-leading-icon-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-text-field-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-text-field-disabled-outline-opacity, 0.12);--_disabled-outline-width: var(--md-outlined-text-field-disabled-outline-width, 1px);--_disabled-supporting-text-color: var(--md-outlined-text-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-outlined-text-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-icon-color: var(--md-outlined-text-field-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-icon-opacity: var(--md-outlined-text-field-disabled-trailing-icon-opacity, 0.38);--_error-focus-caret-color: var(--md-outlined-text-field-error-focus-caret-color, var(--md-sys-color-error, #b3261e));--_error-focus-input-text-color: var(--md-outlined-text-field-error-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-label-text-color: var(--md-outlined-text-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-icon-color: var(--md-outlined-text-field-error-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-outline-color: var(--md-outlined-text-field-error-focus-outline-color, var(--md-sys-color-error, #b3261e));--_error-focus-supporting-text-color: var(--md-outlined-text-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-icon-color: var(--md-outlined-text-field-error-focus-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_error-hover-input-text-color: var(--md-outlined-text-field-error-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-outlined-text-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-icon-color: var(--md-outlined-text-field-error-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-outline-color: var(--md-outlined-text-field-error-hover-outline-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-supporting-text-color: var(--md-outlined-text-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-icon-color: var(--md-outlined-text-field-error-hover-trailing-icon-color, var(--md-sys-color-on-error-container, #410e0b));--_error-input-text-color: var(--md-outlined-text-field-error-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-label-text-color: var(--md-outlined-text-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-icon-color: var(--md-outlined-text-field-error-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-outline-color: var(--md-outlined-text-field-error-outline-color, var(--md-sys-color-error, #b3261e));--_error-supporting-text-color: var(--md-outlined-text-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-icon-color: var(--md-outlined-text-field-error-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_focus-input-text-color: var(--md-outlined-text-field-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-outlined-text-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-icon-color: var(--md-outlined-text-field-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-outline-color: var(--md-outlined-text-field-focus-outline-color, var(--md-sys-color-primary, #6750a4));--_focus-outline-width: var(--md-outlined-text-field-focus-outline-width, 3px);--_focus-supporting-text-color: var(--md-outlined-text-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-icon-color: var(--md-outlined-text-field-focus-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-input-text-color: var(--md-outlined-text-field-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-outlined-text-field-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-leading-icon-color: var(--md-outlined-text-field-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-outline-color: var(--md-outlined-text-field-hover-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-outline-width: var(--md-outlined-text-field-hover-outline-width, 1px);--_hover-supporting-text-color: var(--md-outlined-text-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-icon-color: var(--md-outlined-text-field-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-color: var(--md-outlined-text-field-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_input-text-font: var(--md-outlined-text-field-input-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_input-text-line-height: var(--md-outlined-text-field-input-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_input-text-placeholder-color: var(--md-outlined-text-field-input-text-placeholder-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-prefix-color: var(--md-outlined-text-field-input-text-prefix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-size: var(--md-outlined-text-field-input-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_input-text-suffix-color: var(--md-outlined-text-field-input-text-suffix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-weight: var(--md-outlined-text-field-input-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_label-text-color: var(--md-outlined-text-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-outlined-text-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-outlined-text-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-populated-line-height: var(--md-outlined-text-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-outlined-text-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-outlined-text-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-outlined-text-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-icon-color: var(--md-outlined-text-field-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-icon-size: var(--md-outlined-text-field-leading-icon-size, 24px);--_outline-color: var(--md-outlined-text-field-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-outlined-text-field-outline-width, 1px);--_supporting-text-color: var(--md-outlined-text-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-outlined-text-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-line-height: var(--md-outlined-text-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-outlined-text-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-weight: var(--md-outlined-text-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_trailing-icon-color: var(--md-outlined-text-field-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-icon-size: var(--md-outlined-text-field-trailing-icon-size, 24px);--_container-shape-start-start: var( --md-outlined-text-field-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-outlined-text-field-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-outlined-text-field-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-outlined-text-field-container-shape-end-start, var(--_container-shape) );--md-outlined-field-bottom-space: var(--_bottom-space);--md-outlined-field-container-shape-end-end: var(--_container-shape-end-end);--md-outlined-field-container-shape-end-start: var(--_container-shape-end-start);--md-outlined-field-container-shape-start-end: var(--_container-shape-start-end);--md-outlined-field-container-shape-start-start: var(--_container-shape-start-start);--md-outlined-field-content-color: var(--_input-text-color);--md-outlined-field-content-font: var(--_input-text-font);--md-outlined-field-content-line-height: var(--_input-text-line-height);--md-outlined-field-content-size: var(--_input-text-size);--md-outlined-field-content-weight: var(--_input-text-weight);--md-outlined-field-disabled-content-color: var(--_disabled-input-text-color);--md-outlined-field-disabled-content-opacity: var(--_disabled-input-text-opacity);--md-outlined-field-disabled-label-text-color: var(--_disabled-label-text-color);--md-outlined-field-disabled-label-text-opacity: var(--_disabled-label-text-opacity);--md-outlined-field-disabled-leading-content-color: var(--_disabled-leading-icon-color);--md-outlined-field-disabled-leading-content-opacity: var(--_disabled-leading-icon-opacity);--md-outlined-field-disabled-outline-color: var(--_disabled-outline-color);--md-outlined-field-disabled-outline-opacity: var(--_disabled-outline-opacity);--md-outlined-field-disabled-outline-width: var(--_disabled-outline-width);--md-outlined-field-disabled-supporting-text-color: var(--_disabled-supporting-text-color);--md-outlined-field-disabled-supporting-text-opacity: var(--_disabled-supporting-text-opacity);--md-outlined-field-disabled-trailing-content-color: var(--_disabled-trailing-icon-color);--md-outlined-field-disabled-trailing-content-opacity: var(--_disabled-trailing-icon-opacity);--md-outlined-field-error-content-color: var(--_error-input-text-color);--md-outlined-field-error-focus-content-color: var(--_error-focus-input-text-color);--md-outlined-field-error-focus-label-text-color: var(--_error-focus-label-text-color);--md-outlined-field-error-focus-leading-content-color: var(--_error-focus-leading-icon-color);--md-outlined-field-error-focus-outline-color: var(--_error-focus-outline-color);--md-outlined-field-error-focus-supporting-text-color: var(--_error-focus-supporting-text-color);--md-outlined-field-error-focus-trailing-content-color: var(--_error-focus-trailing-icon-color);--md-outlined-field-error-hover-content-color: var(--_error-hover-input-text-color);--md-outlined-field-error-hover-label-text-color: var(--_error-hover-label-text-color);--md-outlined-field-error-hover-leading-content-color: var(--_error-hover-leading-icon-color);--md-outlined-field-error-hover-outline-color: var(--_error-hover-outline-color);--md-outlined-field-error-hover-supporting-text-color: var(--_error-hover-supporting-text-color);--md-outlined-field-error-hover-trailing-content-color: var(--_error-hover-trailing-icon-color);--md-outlined-field-error-label-text-color: var(--_error-label-text-color);--md-outlined-field-error-leading-content-color: var(--_error-leading-icon-color);--md-outlined-field-error-outline-color: var(--_error-outline-color);--md-outlined-field-error-supporting-text-color: var(--_error-supporting-text-color);--md-outlined-field-error-trailing-content-color: var(--_error-trailing-icon-color);--md-outlined-field-focus-content-color: var(--_focus-input-text-color);--md-outlined-field-focus-label-text-color: var(--_focus-label-text-color);--md-outlined-field-focus-leading-content-color: var(--_focus-leading-icon-color);--md-outlined-field-focus-outline-color: var(--_focus-outline-color);--md-outlined-field-focus-outline-width: var(--_focus-outline-width);--md-outlined-field-focus-supporting-text-color: var(--_focus-supporting-text-color);--md-outlined-field-focus-trailing-content-color: var(--_focus-trailing-icon-color);--md-outlined-field-hover-content-color: var(--_hover-input-text-color);--md-outlined-field-hover-label-text-color: var(--_hover-label-text-color);--md-outlined-field-hover-leading-content-color: var(--_hover-leading-icon-color);--md-outlined-field-hover-outline-color: var(--_hover-outline-color);--md-outlined-field-hover-outline-width: var(--_hover-outline-width);--md-outlined-field-hover-supporting-text-color: var(--_hover-supporting-text-color);--md-outlined-field-hover-trailing-content-color: var(--_hover-trailing-icon-color);--md-outlined-field-label-text-color: var(--_label-text-color);--md-outlined-field-label-text-font: var(--_label-text-font);--md-outlined-field-label-text-line-height: var(--_label-text-line-height);--md-outlined-field-label-text-populated-line-height: var(--_label-text-populated-line-height);--md-outlined-field-label-text-populated-size: var(--_label-text-populated-size);--md-outlined-field-label-text-size: var(--_label-text-size);--md-outlined-field-label-text-weight: var(--_label-text-weight);--md-outlined-field-leading-content-color: var(--_leading-icon-color);--md-outlined-field-leading-space: var(--_leading-space);--md-outlined-field-outline-color: var(--_outline-color);--md-outlined-field-outline-width: var(--_outline-width);--md-outlined-field-supporting-text-color: var(--_supporting-text-color);--md-outlined-field-supporting-text-font: var(--_supporting-text-font);--md-outlined-field-supporting-text-line-height: var(--_supporting-text-line-height);--md-outlined-field-supporting-text-size: var(--_supporting-text-size);--md-outlined-field-supporting-text-weight: var(--_supporting-text-weight);--md-outlined-field-top-space: var(--_top-space);--md-outlined-field-trailing-content-color: var(--_trailing-icon-color);--md-outlined-field-trailing-space: var(--_trailing-space)}/*# sourceMappingURL=outlined-styles.css.map */
`;var{I:ms}=_o;var Go=i=>i.strings===void 0;var Li={},Ko=(i,e=Li)=>i._$AH=e;var Dt=Ee(class extends ne{constructor(i){if(super(i),i.type!==Y.PROPERTY&&i.type!==Y.ATTRIBUTE&&i.type!==Y.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Go(i))throw Error("`live` bindings can only contain a single expression")}render(i){return i}update(i,[e]){if(e===N||e===p)return e;let t=i.element,o=i.name;if(i.type===Y.PROPERTY){if(e===t[o])return N}else if(i.type===Y.BOOLEAN_ATTRIBUTE){if(!!e===t.hasAttribute(o))return N}else if(i.type===Y.ATTRIBUTE&&t.getAttribute(o)===e+"")return N;return Ko(i),e}});var Wo="important",Di=" !"+Wo,Pe=Ee(class extends ne{constructor(i){var e;if(super(i),i.type!==Y.ATTRIBUTE||i.name!=="style"||((e=i.strings)===null||e===void 0?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(i){return Object.keys(i).reduce((e,t)=>{let o=i[t];return o==null?e:e+`${t=t.includes("-")?t:t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(i,[e]){let{style:t}=i.element;if(this.ht===void 0){this.ht=new Set;for(let o in e)this.ht.add(o);return this.render(e)}this.ht.forEach(o=>{e[o]==null&&(this.ht.delete(o),o.includes("-")?t.removeProperty(o):t[o]="")});for(let o in e){let r=e[o];if(r!=null){this.ht.add(o);let n=typeof r=="string"&&r.endsWith(Di);o.includes("-")||n?t.setProperty(o,n?r.slice(0,-11):r,n?Wo:""):t[o]=r}}return N}});var Yo={fromAttribute(i){return i??""},toAttribute(i){return i||null}};var x=class extends y{constructor(){super(...arguments),this.disabled=!1,this.error=!1,this.errorText="",this.label="",this.required=!1,this.value="",this.prefixText="",this.suffixText="",this.hasLeadingIcon=!1,this.hasTrailingIcon=!1,this.supportingText="",this.textDirection="",this.rows=2,this.inputMode="",this.max="",this.maxLength=-1,this.min="",this.minLength=-1,this.pattern="",this.placeholder="",this.readOnly=!1,this.step="",this.type="text",this.autocomplete="",this.dirty=!1,this.focused=!1,this.nativeError=!1,this.nativeErrorText="",this.hasCustomValidityError=!1,this.internals=this.attachInternals()}get form(){return this.internals.form}get labels(){return this.internals.labels}get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get selectionDirection(){return this.getInputOrTextarea().selectionDirection}set selectionDirection(e){this.getInputOrTextarea().selectionDirection=e}get selectionEnd(){return this.getInputOrTextarea().selectionEnd}set selectionEnd(e){this.getInputOrTextarea().selectionEnd=e}get selectionStart(){return this.getInputOrTextarea().selectionStart}set selectionStart(e){this.getInputOrTextarea().selectionStart=e}get validationMessage(){return this.syncValidity(),this.internals.validationMessage}get validity(){return this.syncValidity(),this.internals.validity}get valueAsNumber(){let e=this.getInput();return e?e.valueAsNumber:NaN}set valueAsNumber(e){let t=this.getInput();t&&(t.valueAsNumber=e,this.value=t.value)}get valueAsDate(){let e=this.getInput();return e?e.valueAsDate:null}set valueAsDate(e){let t=this.getInput();t&&(t.valueAsDate=e,this.value=t.value)}get willValidate(){return this.syncValidity(),this.internals.willValidate}get hasError(){return this.error||this.nativeError}checkValidity(){return this.syncValidity(),this.internals.checkValidity()}reportValidity(){let e;this.addEventListener("invalid",r=>{e=r},{once:!0});let t=this.checkValidity();if(e?.defaultPrevented)return t;let o=this.getErrorText();return this.nativeError=!t,this.nativeErrorText=this.validationMessage,o===this.getErrorText()&&this.field?.reannounceError(),t}select(){this.getInputOrTextarea().select()}setCustomValidity(e){this.hasCustomValidityError=!!e,this.internals.setValidity({customError:!!e},e,this.getInputOrTextarea())}setRangeText(...e){this.getInputOrTextarea().setRangeText(...e),this.value=this.getInputOrTextarea().value}setSelectionRange(e,t,o){this.getInputOrTextarea().setSelectionRange(e,t,o)}stepDown(e){let t=this.getInput();t&&(t.stepDown(e),this.value=t.value)}stepUp(e){let t=this.getInput();t&&(t.stepUp(e),this.value=t.value)}reset(){this.dirty=!1,this.value=this.getAttribute("value")??"",this.nativeError=!1,this.nativeErrorText=""}attributeChangedCallback(e,t,o){e==="value"&&this.dirty||super.attributeChangedCallback(e,t,o)}render(){let e={disabled:this.disabled,error:!this.disabled&&this.hasError,textarea:this.type==="textarea"};return h`
       <span class="text-field ${P(e)}">
         ${this.renderField()}
       </span>
     `}updated(e){let t=this.getInputOrTextarea().value;this.value!==t&&(this.value=t),this.internals.setFormValue(t),this.syncValidity()}renderField(){return Ae`<${this.fieldTag}
      class="field"
      count=${this.value.length}
      ?disabled=${this.disabled}
      ?error=${this.hasError}
      error-text=${this.getErrorText()}
      ?focused=${this.focused}
      ?has-end=${this.hasTrailingIcon}
      ?has-start=${this.hasLeadingIcon}
      label=${this.label}
      max=${this.maxLength}
      ?populated=${!!this.value}
      ?required=${this.required}
      ?resizable=${this.type==="textarea"}
      supporting-text=${this.supportingText}
    >
      ${this.renderLeadingIcon()}
      ${this.renderInputOrTextarea()}
      ${this.renderTrailingIcon()}
      <div id="description" slot="aria-describedby"></div>
    </${this.fieldTag}>`}renderLeadingIcon(){return h`
       <span class="icon leading" slot="start">
         <slot name="leading-icon" @slotchange=${this.handleIconChange}></slot>
       </span>
     `}renderTrailingIcon(){return h`
       <span class="icon trailing" slot="end">
         <slot name="trailing-icon" @slotchange=${this.handleIconChange}></slot>
       </span>
     `}renderInputOrTextarea(){let e={direction:this.textDirection},t=this.ariaLabel||this.label||p,o=this.autocomplete;if(this.type==="textarea")return h`
        <textarea
          class="input"
          style=${Pe(e)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${t}
          autocomplete=${o||p}
          ?disabled=${this.disabled}
          maxlength=${this.maxLength>-1?this.maxLength:p}
          minlength=${this.minLength>-1?this.minLength:p}
          placeholder=${this.placeholder||p}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          rows=${this.rows}
          .value=${Dt(this.value)}
          @change=${this.handleChange}
          @focusin=${this.handleFocusin}
          @focusout=${this.handleFocusout}
          @input=${this.handleInput}
          @select=${this.redispatchEvent}
        ></textarea>
      `;let r=this.renderPrefix(),n=this.renderSuffix(),s=this.inputMode;return h`
      <div class="input-wrapper">
        ${r}
        <input
          class="input"
          style=${Pe(e)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${t}
          autocomplete=${o||p}
          ?disabled=${this.disabled}
          inputmode=${s||p}
          max=${this.max||p}
          maxlength=${this.maxLength>-1?this.maxLength:p}
          min=${this.min||p}
          minlength=${this.minLength>-1?this.minLength:p}
          pattern=${this.pattern||p}
          placeholder=${this.placeholder||p}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          step=${this.step||p}
          type=${this.type}
          .value=${Dt(this.value)}
          @change=${this.redispatchEvent}
          @focusin=${this.handleFocusin}
          @focusout=${this.handleFocusout}
          @input=${this.handleInput}
          @select=${this.redispatchEvent}
        >
        ${n}
      </div>
    `}renderPrefix(){return this.renderAffix(this.prefixText,!1)}renderSuffix(){return this.renderAffix(this.suffixText,!0)}renderAffix(e,t){return e?h`<span class="${P({suffix:t,prefix:!t})}">${e}</span>`:p}getErrorText(){return this.error?this.errorText:this.nativeErrorText}handleFocusin(){this.focused=!0}handleFocusout(){this.focused=!1}handleInput(e){this.dirty=!0,this.value=e.target.value,this.syncValidity()}handleChange(e){this.syncValidity(),this.redispatchEvent(e)}redispatchEvent(e){se(this,e)}getInputOrTextarea(){return this.inputOrTextarea||(this.connectedCallback(),this.scheduleUpdate()),this.isUpdatePending&&this.scheduleUpdate(),this.inputOrTextarea}getInput(){return this.type==="textarea"?null:this.getInputOrTextarea()}syncValidity(){let e=this.getInputOrTextarea();this.hasCustomValidityError?e.setCustomValidity(this.internals.validationMessage):e.setCustomValidity(""),this.internals.setValidity(e.validity,e.validationMessage,this.getInputOrTextarea())}handleIconChange(){this.hasLeadingIcon=this.leadingIcons.length>0,this.hasTrailingIcon=this.trailingIcons.length>0}formResetCallback(){this.reset()}formStateRestoreCallback(e){this.value=e}};K(x);x.shadowRootOptions={...y.shadowRootOptions,delegatesFocus:!0};x.formAssociated=!0;a([l({type:Boolean,reflect:!0})],x.prototype,"disabled",void 0);a([l({type:Boolean,reflect:!0})],x.prototype,"error",void 0);a([l({attribute:"error-text"})],x.prototype,"errorText",void 0);a([l()],x.prototype,"label",void 0);a([l({type:Boolean,reflect:!0})],x.prototype,"required",void 0);a([l()],x.prototype,"value",void 0);a([l({attribute:"prefix-text"})],x.prototype,"prefixText",void 0);a([l({attribute:"suffix-text"})],x.prototype,"suffixText",void 0);a([l({type:Boolean,attribute:"has-leading-icon"})],x.prototype,"hasLeadingIcon",void 0);a([l({type:Boolean,attribute:"has-trailing-icon"})],x.prototype,"hasTrailingIcon",void 0);a([l({attribute:"supporting-text"})],x.prototype,"supportingText",void 0);a([l({attribute:"text-direction"})],x.prototype,"textDirection",void 0);a([l({type:Number})],x.prototype,"rows",void 0);a([l({reflect:!0})],x.prototype,"inputMode",void 0);a([l()],x.prototype,"max",void 0);a([l({type:Number})],x.prototype,"maxLength",void 0);a([l()],x.prototype,"min",void 0);a([l({type:Number})],x.prototype,"minLength",void 0);a([l()],x.prototype,"pattern",void 0);a([l({reflect:!0,converter:Yo})],x.prototype,"placeholder",void 0);a([l({type:Boolean,reflect:!0})],x.prototype,"readOnly",void 0);a([l()],x.prototype,"step",void 0);a([l({reflect:!0})],x.prototype,"type",void 0);a([l({reflect:!0})],x.prototype,"autocomplete",void 0);a([E()],x.prototype,"dirty",void 0);a([E()],x.prototype,"focused",void 0);a([E()],x.prototype,"nativeError",void 0);a([E()],x.prototype,"nativeErrorText",void 0);a([v(".input")],x.prototype,"inputOrTextarea",void 0);a([v(".field")],x.prototype,"field",void 0);a([V({slot:"leading-icon"})],x.prototype,"leadingIcons",void 0);a([V({slot:"trailing-icon"})],x.prototype,"trailingIcons",void 0);var st=class extends x{constructor(){super(...arguments),this.fieldTag=te`md-outlined-field`}};var Zo=b`:host{display:inline-flex;outline:none;resize:both;-webkit-tap-highlight-color:rgba(0,0,0,0)}.text-field,.field{width:100%}.text-field{display:inline-flex}.field{cursor:text}.disabled .field{cursor:default}.text-field,.textarea .field{resize:inherit}.icon{color:currentColor;display:flex;fill:currentColor}.icon ::slotted(*){display:flex}[hasstart] .icon.leading{font-size:var(--_leading-icon-size);height:var(--_leading-icon-size);width:var(--_leading-icon-size)}[hasend] .icon.trailing{font-size:var(--_trailing-icon-size);height:var(--_trailing-icon-size);width:var(--_trailing-icon-size)}.input-wrapper{display:flex}.input-wrapper>*{all:inherit;padding:0}.input{caret-color:var(--_caret-color);overflow-x:hidden;text-align:inherit}.input::placeholder{color:currentColor;opacity:1}.input::-webkit-calendar-picker-indicator{display:none}.input::-webkit-search-decoration,.input::-webkit-search-cancel-button{display:none}@media(forced-colors: active){.input{background-color:Field}}:focus-within .input{caret-color:var(--_focus-caret-color)}.error:focus-within .input{caret-color:var(--_error-focus-caret-color)}.text-field:not(.disabled) .prefix{color:var(--_input-text-prefix-color)}.text-field:not(.disabled) .suffix{color:var(--_input-text-suffix-color)}.text-field:not(.disabled) .input::placeholder{color:var(--_input-text-placeholder-color)}.prefix,.suffix{text-wrap:nowrap;width:min-content}.prefix{padding-inline-end:var(--_input-text-prefix-trailing-space)}.suffix{padding-inline-start:var(--_input-text-suffix-leading-space)}/*# sourceMappingURL=shared-styles.css.map */
`;var Mt=class extends st{constructor(){super(...arguments),this.fieldTag=te`md-outlined-field`}};Mt.styles=[Zo,jo,Ho];Mt=a([w("md-outlined-text-field")],Mt);var B=class extends y{get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get form(){return this.internals.form}get labels(){return this.internals.labels}get validity(){return this.syncValidity(),this.internals.validity}get validationMessage(){return this.syncValidity(),this.internals.validationMessage}get willValidate(){return this.syncValidity(),this.internals.willValidate}constructor(){super(),this.checked=!1,this.disabled=!1,this.indeterminate=!1,this.required=!1,this.value="on",this.prevChecked=!1,this.prevDisabled=!1,this.prevIndeterminate=!1,this.hasCustomValidityError=!1,this.internals=this.attachInternals(),!1||this.addEventListener("click",e=>{tt(e)&&(this.focus(),et(this.input))})}checkValidity(){return this.syncValidity(),this.internals.checkValidity()}reportValidity(){return this.syncValidity(),this.internals.reportValidity()}setCustomValidity(e){this.hasCustomValidityError=!!e,this.internals.setValidity({customError:!!e},e,this.getInput())}update(e){(e.has("checked")||e.has("disabled")||e.has("indeterminate"))&&(this.prevChecked=e.get("checked")??this.checked,this.prevDisabled=e.get("disabled")??this.disabled,this.prevIndeterminate=e.get("indeterminate")??this.indeterminate);let t=this.checked&&!this.indeterminate,o=String(this.checked);this.internals.setFormValue(t?this.value:null,o),super.update(e)}render(){let e=!this.prevChecked&&!this.prevIndeterminate,t=this.prevChecked&&!this.prevIndeterminate,o=this.prevIndeterminate,r=this.checked&&!this.indeterminate,n=this.indeterminate,s=P({disabled:this.disabled,selected:r||n,unselected:!r&&!n,checked:r,indeterminate:n,"prev-unselected":e,"prev-checked":t,"prev-indeterminate":o,"prev-disabled":this.prevDisabled}),{ariaLabel:d,ariaInvalid:c}=this;return h`
      <div class="container ${s}">
        <input type="checkbox"
          id="input"
          aria-checked=${n?"mixed":p}
          aria-label=${d||p}
          aria-invalid=${c||p}
          ?disabled=${this.disabled}
          ?required=${this.required}
          .indeterminate=${this.indeterminate}
          .checked=${this.checked}
          @change=${this.handleChange}
        >

        <div class="outline"></div>
        <div class="background"></div>
        <md-focus-ring part="focus-ring" for="input"></md-focus-ring>
        <md-ripple for="input" ?disabled=${this.disabled}></md-ripple>
        <svg class="icon" viewBox="0 0 18 18" aria-hidden="true">
          <rect class="mark short" />
          <rect class="mark long" />
        </svg>
      </div>
    `}updated(){this.syncValidity()}handleChange(e){let t=e.target;this.checked=t.checked,this.indeterminate=t.indeterminate,se(this,e)}syncValidity(){let e=this.getInput();this.hasCustomValidityError?e.setCustomValidity(this.internals.validationMessage):e.setCustomValidity(""),this.internals.setValidity(e.validity,e.validationMessage,this.getInput())}getInput(){return this.input||(this.connectedCallback(),this.performUpdate()),this.isUpdatePending&&this.scheduleUpdate(),this.input}formResetCallback(){this.checked=this.hasAttribute("checked")}formStateRestoreCallback(e){this.checked=e==="true"}};K(B);B.shadowRootOptions={...y.shadowRootOptions,delegatesFocus:!0};B.formAssociated=!0;a([l({type:Boolean})],B.prototype,"checked",void 0);a([l({type:Boolean,reflect:!0})],B.prototype,"disabled",void 0);a([l({type:Boolean})],B.prototype,"indeterminate",void 0);a([l({type:Boolean})],B.prototype,"required",void 0);a([l()],B.prototype,"value",void 0);a([E()],B.prototype,"prevChecked",void 0);a([E()],B.prototype,"prevDisabled",void 0);a([E()],B.prototype,"prevIndeterminate",void 0);a([v("input")],B.prototype,"input",void 0);var Xo=b`:host{--_container-shape: var(--md-checkbox-container-shape, 2px);--_container-size: var(--md-checkbox-container-size, 18px);--_icon-size: var(--md-checkbox-icon-size, 18px);--_selected-container-color: var(--md-checkbox-selected-container-color, var(--md-sys-color-primary, #6750a4));--_selected-disabled-container-color: var(--md-checkbox-selected-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_selected-disabled-container-opacity: var(--md-checkbox-selected-disabled-container-opacity, 0.38);--_selected-disabled-icon-color: var(--md-checkbox-selected-disabled-icon-color, var(--md-sys-color-surface, #fef7ff));--_selected-focus-container-color: var(--md-checkbox-selected-focus-container-color, var(--md-sys-color-primary, #6750a4));--_selected-focus-icon-color: var(--md-checkbox-selected-focus-icon-color, var(--md-sys-color-on-primary, #fff));--_selected-hover-container-color: var(--md-checkbox-selected-hover-container-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-icon-color: var(--md-checkbox-selected-hover-icon-color, var(--md-sys-color-on-primary, #fff));--_selected-hover-state-layer-color: var(--md-checkbox-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-opacity: var(--md-checkbox-selected-hover-state-layer-opacity, 0.08);--_selected-icon-color: var(--md-checkbox-selected-icon-color, var(--md-sys-color-on-primary, #fff));--_selected-pressed-container-color: var(--md-checkbox-selected-pressed-container-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-icon-color: var(--md-checkbox-selected-pressed-icon-color, var(--md-sys-color-on-primary, #fff));--_selected-pressed-state-layer-color: var(--md-checkbox-selected-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_selected-pressed-state-layer-opacity: var(--md-checkbox-selected-pressed-state-layer-opacity, 0.12);--_state-layer-shape: var(--md-checkbox-state-layer-shape, 9999px);--_state-layer-size: var(--md-checkbox-state-layer-size, 40px);--_disabled-container-opacity: var(--md-checkbox-disabled-container-opacity, 0.38);--_disabled-outline-color: var(--md-checkbox-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-width: var(--md-checkbox-disabled-outline-width, 2px);--_focus-outline-color: var(--md-checkbox-focus-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-outline-width: var(--md-checkbox-focus-outline-width, 2px);--_hover-outline-color: var(--md-checkbox-hover-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-outline-width: var(--md-checkbox-hover-outline-width, 2px);--_hover-state-layer-color: var(--md-checkbox-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-checkbox-hover-state-layer-opacity, 0.08);--_outline-color: var(--md-checkbox-outline-color, var(--md-sys-color-on-surface-variant, #49454f));--_outline-width: var(--md-checkbox-outline-width, 2px);--_pressed-outline-color: var(--md-checkbox-pressed-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-outline-width: var(--md-checkbox-pressed-outline-width, 2px);--_pressed-state-layer-color: var(--md-checkbox-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-checkbox-pressed-state-layer-opacity, 0.12);--_container-shape-start-start: var( --md-checkbox-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-checkbox-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-checkbox-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-checkbox-container-shape-end-start, var(--_container-shape) );border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start);display:inline-flex;height:var(--_container-size);position:relative;vertical-align:top;width:var(--_container-size);-webkit-tap-highlight-color:rgba(0,0,0,0)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-size))/2)}md-focus-ring{height:44px;inset:unset;width:44px}input{appearance:none;height:48px;margin:0;opacity:0;outline:none;position:absolute;width:48px;z-index:1}:host([touch-target=none]) input{height:100%;width:100%}.container{border-radius:inherit;display:flex;height:100%;place-content:center;place-items:center;position:relative;width:100%}.outline,.background,.icon{inset:0;position:absolute}.outline,.background{border-radius:inherit}.outline{border-color:var(--_outline-color);border-style:solid;border-width:var(--_outline-width);box-sizing:border-box}.background{background-color:var(--_selected-container-color)}.background,.icon{opacity:0;transition-duration:150ms,50ms;transition-property:transform,opacity;transition-timing-function:cubic-bezier(0.3, 0, 0.8, 0.15),linear;transform:scale(0.6)}:where(.selected) :is(.background,.icon){opacity:1;transition-duration:350ms,50ms;transition-timing-function:cubic-bezier(0.05, 0.7, 0.1, 1),linear;transform:scale(1)}md-ripple{border-radius:var(--_state-layer-shape);height:var(--_state-layer-size);inset:unset;width:var(--_state-layer-size);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.selected md-ripple{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}.icon{fill:var(--_selected-icon-color);height:var(--_icon-size);width:var(--_icon-size)}.mark.short{height:2px;transition-property:transform,height;width:2px}.mark.long{height:2px;transition-property:transform,width;width:10px}.mark{animation-duration:150ms;animation-timing-function:cubic-bezier(0.3, 0, 0.8, 0.15);transition-duration:150ms;transition-timing-function:cubic-bezier(0.3, 0, 0.8, 0.15)}.selected .mark{animation-duration:350ms;animation-timing-function:cubic-bezier(0.05, 0.7, 0.1, 1);transition-duration:350ms;transition-timing-function:cubic-bezier(0.05, 0.7, 0.1, 1)}.checked .mark,.prev-checked.unselected .mark{transform:scaleY(-1) translate(7px, -14px) rotate(45deg)}.checked .mark.short,.prev-checked.unselected .mark.short{height:5.6568542495px}.checked .mark.long,.prev-checked.unselected .mark.long{width:11.313708499px}.indeterminate .mark,.prev-indeterminate.unselected .mark{transform:scaleY(-1) translate(4px, -10px) rotate(0deg)}.prev-unselected .mark{transition-property:none}.prev-unselected.checked .mark.long{animation-name:prev-unselected-to-checked}@keyframes prev-unselected-to-checked{from{width:0}}:where(:hover) .outline{border-color:var(--_hover-outline-color);border-width:var(--_hover-outline-width)}:where(:hover) .background{background:var(--_selected-hover-container-color)}:where(:hover) .icon{fill:var(--_selected-hover-icon-color)}:where(:focus-within) .outline{border-color:var(--_focus-outline-color);border-width:var(--_focus-outline-width)}:where(:focus-within) .background{background:var(--_selected-focus-container-color)}:where(:focus-within) .icon{fill:var(--_selected-focus-icon-color)}:where(:active) .outline{border-color:var(--_pressed-outline-color);border-width:var(--_pressed-outline-width)}:where(:active) .background{background:var(--_selected-pressed-container-color)}:where(:active) .icon{fill:var(--_selected-pressed-icon-color)}:where(.disabled,.prev-disabled) :is(.background,.icon,.mark){animation-duration:0s;transition-duration:0s}:where(.disabled) .outline{border-color:var(--_disabled-outline-color);border-width:var(--_disabled-outline-width);opacity:var(--_disabled-container-opacity)}:where(.selected.disabled) .outline{visibility:hidden}:where(.selected.disabled) .background{background:var(--_selected-disabled-container-color);opacity:var(--_selected-disabled-container-opacity)}:where(.disabled) .icon{fill:var(--_selected-disabled-icon-color)}@media(forced-colors: active){.background{background-color:CanvasText}.selected.disabled .background{background-color:GrayText;opacity:1}.outline{border-color:CanvasText}.disabled .outline{border-color:GrayText;opacity:1}.icon{fill:Canvas}}/*# sourceMappingURL=checkbox-styles.css.map */
`;var Nt=class extends B{};Nt.styles=[Xo];Nt=a([w("md-checkbox")],Nt);var lt=class extends y{render(){return h`<slot></slot>`}connectedCallback(){if(super.connectedCallback(),this.getAttribute("aria-hidden")==="false"){this.removeAttribute("aria-hidden");return}this.setAttribute("aria-hidden","true")}};var Jo=b`:host{font-size:24px;width:24px;height:24px;color:inherit;font-variation-settings:inherit;font-weight:400;font-family:var(--md-icon-font, Material Symbols Outlined);display:inline-flex;font-style:normal;line-height:1;overflow:hidden;letter-spacing:normal;text-transform:none;user-select:none;white-space:nowrap;word-wrap:normal;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale}::slotted(svg){fill:currentColor}::slotted(*){height:100%;width:100%}/*# sourceMappingURL=icon-styles.css.map */
`;var Bt=class extends lt{};Bt.styles=[Jo];Bt=a([w("md-icon")],Bt);var Qo=b`@media(forced-colors: active){:host{--md-outlined-select-text-field-disabled-input-text-color: GrayText;--md-outlined-select-text-field-disabled-input-text-opacity: 1;--md-outlined-select-text-field-disabled-label-text-color: GrayText;--md-outlined-select-text-field-disabled-label-text-opacity: 1;--md-outlined-select-text-field-disabled-leading-icon-color: GrayText;--md-outlined-select-text-field-disabled-leading-icon-opacity: 1;--md-outlined-select-text-field-disabled-outline-color: GrayText;--md-outlined-select-text-field-disabled-outline-opacity: 1;--md-outlined-select-text-field-disabled-supporting-text-color: GrayText;--md-outlined-select-text-field-disabled-supporting-text-opacity: 1;--md-outlined-select-text-field-disabled-trailing-icon-color: GrayText;--md-outlined-select-text-field-disabled-trailing-icon-opacity: 1}}/*# sourceMappingURL=outlined-forced-colors-styles.css.map */
`;var ei=b`@media(forced-colors: active){.menu{border-style:solid;border-color:CanvasText;border-width:1px}}/*# sourceMappingURL=forced-colors-styles.css.map */
`;function Ut(i,e=oe){let t=Le(i,e);return t&&(t.tabIndex=0,t.focus()),t}function Ft(i,e=oe){let t=Vt(i,e);return t&&(t.tabIndex=0,t.focus()),t}function le(i,e=oe){for(let t=0;t<i.length;t++){let o=i[t];if(o.tabIndex===0&&e(o))return{item:o,index:t}}return null}function Le(i,e=oe){for(let t of i)if(e(t))return t;return null}function Vt(i,e=oe){for(let t=i.length-1;t>=0;t--){let o=i[t];if(e(o))return o}return null}function Mi(i,e,t=oe){for(let o=1;o<i.length;o++){let r=(o+e)%i.length,n=i[r];if(t(n))return n}return i[e]?i[e]:null}function Ni(i,e,t=oe){for(let o=1;o<i.length;o++){let r=(e-o+i.length)%i.length,n=i[r];if(t(n))return n}return i[e]?i[e]:null}function qt(i,e,t=oe){if(e){let o=Mi(i,e.index,t);return o&&(o.tabIndex=0,o.focus()),o}else return Ut(i,t)}function Ht(i,e,t=oe){if(e){let o=Ni(i,e.index,t);return o&&(o.tabIndex=0,o.focus()),o}else return Ft(i,t)}function oe(i){return!i.disabled}var M={ArrowDown:"ArrowDown",ArrowLeft:"ArrowLeft",ArrowUp:"ArrowUp",ArrowRight:"ArrowRight",Home:"Home",End:"End"},dt=class{constructor(e){this.handleKeydown=u=>{let m=u.key;if(u.defaultPrevented||!this.isNavigableKey(m))return;let f=this.items;if(!f.length)return;let g=le(f,this.isActivatable);g&&(g.item.tabIndex=-1),u.preventDefault();let _=this.isRtl(),R=_?M.ArrowRight:M.ArrowLeft,C=_?M.ArrowLeft:M.ArrowRight;switch(m){case M.ArrowDown:case C:qt(f,g,this.isActivatable);break;case M.ArrowUp:case R:Ht(f,g,this.isActivatable);break;case M.Home:Ut(f,this.isActivatable);break;case M.End:Ft(f,this.isActivatable);break;default:break}},this.onDeactivateItems=()=>{let u=this.items;for(let m of u)this.deactivateItem(m)},this.onRequestActivation=u=>{this.onDeactivateItems();let m=u.target;this.activateItem(m),m.focus()},this.onSlotchange=()=>{let u=this.items,m=!1;for(let g of u){if(!g.disabled&&g.tabIndex>-1&&!m){m=!0,g.tabIndex=0;continue}g.tabIndex=-1}if(m)return;let f=Le(u,this.isActivatable);f&&(f.tabIndex=0)};let{isItem:t,getPossibleItems:o,isRtl:r,deactivateItem:n,activateItem:s,isNavigableKey:d,isActivatable:c}=e;this.isItem=t,this.getPossibleItems=o,this.isRtl=r,this.deactivateItem=n,this.activateItem=s,this.isNavigableKey=d,this.isActivatable=c}get items(){let e=this.getPossibleItems(),t=[];for(let o of e){if(this.isItem(o)){t.push(o);continue}let n=o.item;n&&this.isItem(n)&&t.push(n)}return t}activateNextItem(){let e=this.items,t=le(e,this.isActivatable);return t&&(t.item.tabIndex=-1),qt(e,t,this.isActivatable)}activatePreviousItem(){let e=this.items,t=le(e,this.isActivatable);return t&&(t.item.tabIndex=-1),Ht(e,t,this.isActivatable)}};function Bi(i,e){return new CustomEvent("close-menu",{bubbles:!0,composed:!0,detail:{initiator:i,reason:e,itemPath:[i]}})}var Gt=Bi;var jt={SPACE:"Space",ENTER:"Enter"},Kt={CLICK_SELECTION:"click-selection",KEYDOWN:"keydown"},Ui={ESCAPE:"Escape",SPACE:jt.SPACE,ENTER:jt.ENTER};function ct(i){return Object.values(Ui).some(e=>e===i)}function ti(i){return Object.values(jt).some(e=>e===i)}function De(i,e){let t=new Event("md-contains",{bubbles:!0,composed:!0}),o=[],r=s=>{o=s.composedPath()};return e.addEventListener("md-contains",r),i.dispatchEvent(t),e.removeEventListener("md-contains",r),o.length>0}var de={NONE:"none",LIST_ROOT:"list-root",FIRST_ITEM:"first-item",LAST_ITEM:"last-item"};var Me={END_START:"end-start",END_END:"end-end",START_START:"start-start",START_END:"start-end"},ut=class{constructor(e,t){this.host=e,this.getProperties=t,this.surfaceStylesInternal={display:"none"},this.lastValues={isOpen:!1},this.host.addController(this)}get surfaceStyles(){return this.surfaceStylesInternal}async position(){let{surfaceEl:e,anchorEl:t,anchorCorner:o,surfaceCorner:r,positioning:n,xOffset:s,yOffset:d,repositionStrategy:c}=this.getProperties(),u=o.toLowerCase().trim(),m=r.toLowerCase().trim();if(!e||!t)return;this.surfaceStylesInternal={display:"block",opacity:"0"},this.host.requestUpdate(),await this.host.updateComplete;let f=e.getSurfacePositionClientRect?e.getSurfacePositionClientRect():e.getBoundingClientRect(),g=t.getSurfacePositionClientRect?t.getSurfacePositionClientRect():t.getBoundingClientRect(),[_,R]=m.split("-"),[C,z]=u.split("-"),W=getComputedStyle(e).direction==="ltr",{blockInset:A,blockOutOfBoundsCorrection:F,surfaceBlockProperty:Z}=this.calculateBlock({surfaceRect:f,anchorRect:g,anchorBlock:C,surfaceBlock:_,yOffset:d,positioning:n});if(F){let ce=_==="start"?"end":"start",be=C==="start"?"end":"start",X=this.calculateBlock({surfaceRect:f,anchorRect:g,anchorBlock:be,surfaceBlock:ce,yOffset:d,positioning:n});F>X.blockOutOfBoundsCorrection&&(A=X.blockInset,F=X.blockOutOfBoundsCorrection,Z=X.surfaceBlockProperty)}let{inlineInset:G,inlineOutOfBoundsCorrection:D,surfaceInlineProperty:re}=this.calculateInline({surfaceRect:f,anchorRect:g,anchorInline:z,surfaceInline:R,xOffset:s,positioning:n,isLTR:W});if(D){let ce=R==="start"?"end":"start",be=z==="start"?"end":"start",X=this.calculateInline({surfaceRect:f,anchorRect:g,anchorInline:be,surfaceInline:ce,xOffset:s,positioning:n,isLTR:W});Math.abs(D)>Math.abs(X.inlineOutOfBoundsCorrection)&&(G=X.inlineInset,D=X.inlineOutOfBoundsCorrection,re=X.surfaceInlineProperty)}c==="move"&&(A=A-F,G=G-D),this.surfaceStylesInternal={display:"block",opacity:"1",[Z]:`${A}px`,[re]:`${G}px`},c==="resize"&&(F&&(this.surfaceStylesInternal.height=`${f.height-F}px`),D&&(this.surfaceStylesInternal.width=`${f.width-D}px`)),this.host.requestUpdate()}calculateBlock(e){let{surfaceRect:t,anchorRect:o,anchorBlock:r,surfaceBlock:n,yOffset:s,positioning:d}=e,c=d==="fixed"?1:0,u=n==="start"?1:0,m=n==="end"?1:0,g=(r!==n?1:0)*o.height+s,_=u*o.top+m*(window.innerHeight-o.bottom),R=Math.abs(Math.min(0,window.innerHeight-_-g-t.height));return{blockInset:c*_+g,blockOutOfBoundsCorrection:R,surfaceBlockProperty:n==="start"?"inset-block-start":"inset-block-end"}}calculateInline(e){let{isLTR:t,surfaceInline:o,anchorInline:r,anchorRect:n,surfaceRect:s,xOffset:d,positioning:c}=e,u=c==="fixed"?1:0,m=t?1:0,f=t?0:1,g=o==="start"?1:0,_=o==="end"?1:0,C=(r!==o?1:0)*n.width+d,z=g*n.left+_*(window.innerWidth-n.right),W=g*(window.innerWidth-n.right)+_*n.left,A=m*z+f*W,F=Math.abs(Math.min(0,window.innerWidth-A-C-s.width));return{inlineInset:u*A+C,inlineOutOfBoundsCorrection:F,surfaceInlineProperty:o==="start"?"inset-inline-start":"inset-inline-end"}}hostUpdate(){this.onUpdate()}hostUpdated(){this.onUpdate()}async onUpdate(){let e=this.getProperties(),t=!1;for(let[s,d]of Object.entries(e))if(t=t||d!==this.lastValues[s],t)break;let o=this.lastValues.isOpen!==e.isOpen,r=!!e.anchorEl,n=!!e.surfaceEl;t&&r&&n&&(this.lastValues.isOpen=e.isOpen,e.isOpen?(this.lastValues=e,await this.position(),e.onOpen()):o&&(await e.beforeClose(),this.close(),e.onClose()))}close(){this.surfaceStylesInternal={display:"none"},this.host.requestUpdate()}};var j={INDEX:0,ITEM:1,TEXT:2},pt=class{constructor(e){this.getProperties=e,this.typeaheadRecords=[],this.typaheadBuffer="",this.cancelTypeaheadTimeout=0,this.isTypingAhead=!1,this.lastActiveRecord=null,this.onKeydown=t=>{this.isTypingAhead?this.typeahead(t):this.beginTypeahead(t)},this.endTypeahead=()=>{this.isTypingAhead=!1,this.typaheadBuffer="",this.typeaheadRecords=[]}}get items(){return this.getProperties().getItems()}get active(){return this.getProperties().active}beginTypeahead(e){this.active&&(e.code==="Space"||e.code==="Enter"||e.code.startsWith("Arrow")||e.code==="Escape"||(this.isTypingAhead=!0,this.typeaheadRecords=this.items.map((t,o)=>[o,t,t.typeaheadText.trim().toLowerCase()]),this.lastActiveRecord=this.typeaheadRecords.find(t=>t[j.ITEM].tabIndex===0)??null,this.lastActiveRecord&&(this.lastActiveRecord[j.ITEM].tabIndex=-1),this.typeahead(e)))}typeahead(e){if(e.defaultPrevented)return;if(clearTimeout(this.cancelTypeaheadTimeout),e.code==="Enter"||e.code.startsWith("Arrow")||e.code==="Escape"){this.endTypeahead(),this.lastActiveRecord&&(this.lastActiveRecord[j.ITEM].tabIndex=-1);return}e.code==="Space"&&e.preventDefault(),this.cancelTypeaheadTimeout=setTimeout(this.endTypeahead,this.getProperties().typeaheadBufferTime),this.typaheadBuffer+=e.key.toLowerCase();let t=this.lastActiveRecord?this.lastActiveRecord[j.INDEX]:-1,o=this.typeaheadRecords.length,r=c=>(c[j.INDEX]+o-t)%o,n=this.typeaheadRecords.filter(c=>!c[j.ITEM].disabled&&c[j.TEXT].startsWith(this.typaheadBuffer)).sort((c,u)=>r(c)-r(u));if(n.length===0){clearTimeout(this.cancelTypeaheadTimeout),this.lastActiveRecord&&(this.lastActiveRecord[j.ITEM].tabIndex=-1),this.endTypeahead();return}let s=this.typaheadBuffer.length===1,d;this.lastActiveRecord===n[0]&&s?d=n[1]??n[0]:d=n[0],this.lastActiveRecord&&(this.lastActiveRecord[j.ITEM].tabIndex=-1),this.lastActiveRecord=d,d[j.ITEM].tabIndex=0,d[j.ITEM].focus()}};var Wt=200,oi=new Set([M.ArrowDown,M.ArrowUp,M.Home,M.End]),Fi=new Set([M.ArrowLeft,M.ArrowRight,...oi]);function Vi(i=document){let e=i.activeElement;for(;e&&e?.shadowRoot?.activeElement;)e=e.shadowRoot.activeElement;return e}var I=class extends y{get openDirection(){return this.menuCorner.split("_")[0]==="START"?"DOWN":"UP"}get anchorElement(){return this.anchor?this.getRootNode().querySelector(`#${this.anchor}`):this.currentAnchorElement}set anchorElement(e){this.currentAnchorElement=e,this.requestUpdate("anchorElement")}constructor(){super(),this.anchor="",this.positioning="absolute",this.quick=!1,this.hasOverflow=!1,this.open=!1,this.xOffset=0,this.yOffset=0,this.typeaheadDelay=Wt,this.anchorCorner=Me.END_START,this.menuCorner=Me.START_START,this.stayOpenOnOutsideClick=!1,this.stayOpenOnFocusout=!1,this.skipRestoreFocus=!1,this.defaultFocus=de.FIRST_ITEM,this.typeaheadActive=!0,this.isSubmenu=!1,this.pointerPath=[],this.isPointerDown=!1,this.openCloseAnimationSignal=ko(),this.listController=new dt({isItem:e=>e.hasAttribute("md-menu-item"),getPossibleItems:()=>this.slotItems,isRtl:()=>getComputedStyle(this).direction==="rtl",deactivateItem:e=>{e.selected=!1,e.tabIndex=-1},activateItem:e=>{e.selected=!0,e.tabIndex=0},isNavigableKey:e=>{if(!this.isSubmenu)return Fi.has(e);let o=getComputedStyle(this).direction==="rtl"?M.ArrowLeft:M.ArrowRight;return e===o?!0:oi.has(e)}}),this.lastFocusedElement=null,this.typeaheadController=new pt(()=>({getItems:()=>this.items,typeaheadBufferTime:this.typeaheadDelay,active:this.typeaheadActive})),this.currentAnchorElement=null,this.internals=Mo(this,this.attachInternals()),this.menuPositionController=new ut(this,()=>({anchorCorner:this.anchorCorner,surfaceCorner:this.menuCorner,surfaceEl:this.surfaceEl,anchorEl:this.anchorElement,positioning:this.positioning,isOpen:this.open,xOffset:this.xOffset,yOffset:this.yOffset,onOpen:this.onOpened,beforeClose:this.beforeClose,onClose:this.onClosed,repositionStrategy:this.hasOverflow?"move":"resize"})),this.handleFocusout=async e=>{if(this.stayOpenOnFocusout||!this.open)return;if(e.relatedTarget){if(De(e.relatedTarget,this))return;let o=this.anchorElement;if(De(e.relatedTarget,o)&&this.isPointerDown)return}else if(this.isPointerDown&&this.pointerPath.includes(this))return;let t=this.skipRestoreFocus;this.skipRestoreFocus=!0,this.close(),await this.updateComplete,this.skipRestoreFocus=t},this.onOpened=async()=>{this.lastFocusedElement=Vi();let e=this.items,t=le(e);t&&this.defaultFocus!==de.NONE&&(t.item.tabIndex=-1);let o=!this.quick;switch(this.quick?this.dispatchEvent(new Event("opening")):o=!!await this.animateOpen(),this.defaultFocus){case de.FIRST_ITEM:let r=Le(e);r&&(r.tabIndex=0,r.focus(),await r.updateComplete);break;case de.LAST_ITEM:let n=Vt(e);n&&(n.tabIndex=0,n.focus(),await n.updateComplete);break;case de.LIST_ROOT:this.focus();break;default:case de.NONE:break}o||this.dispatchEvent(new Event("opened"))},this.beforeClose=async()=>{this.open=!1,this.skipRestoreFocus||this.lastFocusedElement?.focus?.(),this.quick||await this.animateClose()},this.onClosed=()=>{this.quick&&(this.dispatchEvent(new Event("closing")),this.dispatchEvent(new Event("closed")))},this.onWindowPointerdown=e=>{this.isPointerDown=!0,this.pointerPath=e.composedPath()},this.onWindowPointerup=()=>{this.isPointerDown=!1},this.onWindowClick=e=>{if(!this.open)return;let t=e.composedPath();!this.stayOpenOnOutsideClick&&!t.includes(this)&&!t.includes(this.anchorElement)&&(this.open=!1)},!1||(this.internals.role="menu",this.addEventListener("keydown",this.listController.handleKeydown),this.addEventListener("keydown",this.captureKeydown,{capture:!0}),this.addEventListener("focusout",this.handleFocusout))}get items(){return this.listController.items}willUpdate(e){if(e.has("open")){if(this.open){this.removeAttribute("aria-hidden");return}this.setAttribute("aria-hidden","true")}}render(){return this.renderSurface()}renderSurface(){return h`
       <div
          class="menu ${P(this.getSurfaceClasses())}"
          style=${Pe(this.menuPositionController.surfaceStyles)}>
        ${this.renderElevation()}
        <div class="items">
          <div class="item-padding">
            ${this.renderMenuItems()}
          </div>
        </div>
       </div>
     `}renderMenuItems(){return h`<slot
        @close-menu=${this.onCloseMenu}
        @deactivate-items=${this.onDeactivateItems}
        @request-activation=${this.onRequestActivation}
        @deactivate-typeahead=${this.handleDeactivateTypeahead}
        @activate-typeahead=${this.handleActivateTypeahead}
        @stay-open-on-focusout=${this.handleStayOpenOnFocusout}
        @close-on-focusout=${this.handleCloseOnFocusout}
        @slotchange=${this.listController.onSlotchange}></slot>`}renderElevation(){return h`<md-elevation part="elevation"></md-elevation>`}getSurfaceClasses(){return{open:this.open,fixed:this.positioning==="fixed","has-overflow":this.hasOverflow}}captureKeydown(e){e.target===this&&!e.defaultPrevented&&ct(e.code)&&(e.preventDefault(),this.close()),this.typeaheadController.onKeydown(e)}async animateOpen(){let e=this.surfaceEl,t=this.slotEl;if(!e||!t)return!0;let o=this.openDirection;this.dispatchEvent(new Event("opening")),e.classList.toggle("animating",!0);let r=this.openCloseAnimationSignal.start(),n=e.offsetHeight,s=o==="UP",d=this.items,c=500,u=50,m=250,f=(c-m)/d.length,g=e.animate([{height:"0px"},{height:`${n}px`}],{duration:c,easing:q.EMPHASIZED}),_=t.animate([{transform:s?`translateY(-${n}px)`:""},{transform:""}],{duration:c,easing:q.EMPHASIZED}),R=e.animate([{opacity:0},{opacity:1}],u),C=[];for(let A=0;A<d.length;A++){let F=s?d.length-1-A:A,Z=d[F],G=Z.animate([{opacity:0},{opacity:1}],{duration:m,delay:f*A});Z.classList.toggle("md-menu-hidden",!0),G.addEventListener("finish",()=>{Z.classList.toggle("md-menu-hidden",!1)}),C.push([Z,G])}let z=A=>{},W=new Promise(A=>{z=A});return r.addEventListener("abort",()=>{g.cancel(),_.cancel(),R.cancel(),C.forEach(([A,F])=>{A.classList.toggle("md-menu-hidden",!1),F.cancel()}),z(!0)}),g.addEventListener("finish",()=>{e.classList.toggle("animating",!1),this.openCloseAnimationSignal.finish(),z(!1)}),await W}animateClose(){let e,t,o=new Promise((D,re)=>{e=D,t=re}),r=this.surfaceEl,n=this.slotEl;if(!r||!n)return t(),o;let d=this.openDirection==="UP";this.dispatchEvent(new Event("closing")),r.classList.toggle("animating",!0);let c=this.openCloseAnimationSignal.start(),u=r.offsetHeight,m=this.items,f=150,g=50,_=f-g,R=50,C=50,z=.35,W=(f-C-R)/m.length,A=r.animate([{height:`${u}px`},{height:`${u*z}px`}],{duration:f,easing:q.EMPHASIZED_ACCELERATE}),F=n.animate([{transform:""},{transform:d?`translateY(-${u*(1-z)}px)`:""}],{duration:f,easing:q.EMPHASIZED_ACCELERATE}),Z=r.animate([{opacity:1},{opacity:0}],{duration:g,delay:_}),G=[];for(let D=0;D<m.length;D++){let re=d?D:m.length-1-D,ce=m[re],be=ce.animate([{opacity:1},{opacity:0}],{duration:R,delay:C+W*D});be.addEventListener("finish",()=>{ce.classList.toggle("md-menu-hidden",!0)}),G.push([ce,be])}return c.addEventListener("abort",()=>{A.cancel(),F.cancel(),Z.cancel(),G.forEach(([D,re])=>{re.cancel(),D.classList.toggle("md-menu-hidden",!1)}),t()}),A.addEventListener("finish",()=>{r.classList.toggle("animating",!1),G.forEach(([D])=>{D.classList.toggle("md-menu-hidden",!1)}),this.openCloseAnimationSignal.finish(),this.dispatchEvent(new Event("closed")),e(!0)}),o}connectedCallback(){super.connectedCallback(),!1||(window.addEventListener("click",this.onWindowClick,{capture:!0}),window.addEventListener("pointerdown",this.onWindowPointerdown),window.addEventListener("pointerup",this.onWindowPointerup))}disconnectedCallback(){super.disconnectedCallback(),!1||(window.removeEventListener("click",this.onWindowClick,{capture:!0}),window.removeEventListener("pointerdown",this.onWindowPointerdown),window.removeEventListener("pointerup",this.onWindowPointerup))}onCloseMenu(){this.close()}onDeactivateItems(e){e.stopPropagation(),this.listController.onDeactivateItems()}onRequestActivation(e){e.stopPropagation(),this.listController.onRequestActivation(e)}handleDeactivateTypeahead(e){e.stopPropagation(),this.typeaheadActive=!1}handleActivateTypeahead(e){e.stopPropagation(),this.typeaheadActive=!0}handleStayOpenOnFocusout(e){e.stopPropagation(),this.stayOpenOnFocusout=!0}handleCloseOnFocusout(e){e.stopPropagation(),this.stayOpenOnFocusout=!1}close(){this.open=!1,this.slotItems.forEach(t=>{t.close?.()})}show(){this.open=!0}activateNextItem(){return this.listController.activateNextItem()??null}activatePreviousItem(){return this.listController.activatePreviousItem()??null}};Do(I,{focusable:!1});a([v(".menu")],I.prototype,"surfaceEl",void 0);a([v("slot")],I.prototype,"slotEl",void 0);a([l()],I.prototype,"anchor",void 0);a([l()],I.prototype,"positioning",void 0);a([l({type:Boolean})],I.prototype,"quick",void 0);a([l({type:Boolean,attribute:"has-overflow"})],I.prototype,"hasOverflow",void 0);a([l({type:Boolean,reflect:!0})],I.prototype,"open",void 0);a([l({type:Number,attribute:"x-offset"})],I.prototype,"xOffset",void 0);a([l({type:Number,attribute:"y-offset"})],I.prototype,"yOffset",void 0);a([l({type:Number,attribute:"typeahead-delay"})],I.prototype,"typeaheadDelay",void 0);a([l({attribute:"anchor-corner"})],I.prototype,"anchorCorner",void 0);a([l({attribute:"menu-corner"})],I.prototype,"menuCorner",void 0);a([l({type:Boolean,attribute:"stay-open-on-outside-click"})],I.prototype,"stayOpenOnOutsideClick",void 0);a([l({type:Boolean,attribute:"stay-open-on-focusout"})],I.prototype,"stayOpenOnFocusout",void 0);a([l({type:Boolean,attribute:"skip-restore-focus"})],I.prototype,"skipRestoreFocus",void 0);a([l({attribute:"default-focus"})],I.prototype,"defaultFocus",void 0);a([V({flatten:!0})],I.prototype,"slotItems",void 0);a([E()],I.prototype,"typeaheadActive",void 0);var ii=b`:host{--md-elevation-level: var(--md-menu-container-elevation, 2);--md-elevation-shadow-color: var(--md-menu-container-shadow-color, var(--md-sys-color-shadow, #000));min-width:112px;color:unset;display:contents}md-focus-ring{--md-focus-ring-shape: var(--md-menu-container-shape, 4px)}.menu{border-radius:var(--md-menu-container-shape, 4px);display:none;opacity:0;z-index:20;position:absolute;user-select:none;max-height:inherit;height:inherit;min-width:inherit;max-width:inherit}.fixed{position:fixed}.items{display:block;list-style-type:none;margin:0;outline:none;box-sizing:border-box;background-color:var(--md-menu-container-color, var(--md-sys-color-surface-container, #f3edf7));height:inherit;max-height:inherit;overflow:auto;min-width:inherit;max-width:inherit;border-radius:inherit}.item-padding{padding-block:8px}.has-overflow .items{overflow:visible}.animating .items{overflow:hidden}.has-overflow.animating .items{pointer-events:none}.animating ::slotted(.md-menu-hidden){opacity:0}slot{display:block;height:inherit;max-height:inherit}::slotted(:is(md-divider,[role=separator])){margin:8px 0}/*# sourceMappingURL=menu-styles.css.map */
`;var Yt=class extends I{};Yt.styles=[ii,ei];Yt=a([w("md-menu")],Yt);function ri(i){let e=[];for(let t=0;t<i.length;t++){let o=i[t];o.selected&&e.push([o,t])}return e}var ni,ht=Symbol("value"),S=class extends y{constructor(){super(...arguments),this.quick=!1,this.required=!1,this.disabled=!1,this.errorText="",this.label="",this.supportingText="",this.error=!1,this.menuPositioning="absolute",this.typeaheadDelay=Wt,this.hasLeadingIcon=!1,this.displayText="",this[ni]="",this.lastUserSetValue=null,this.lastUserSetSelectedIndex=null,this.lastSelectedOption=null,this.lastSelectedOptionRecords=[],this.nativeError=!1,this.nativeErrorText="",this.focused=!1,this.open=!1,this.customValidationMessage="",this.internals=this.attachInternals()}get value(){return this[ht]}set value(e){!1||(this.lastUserSetValue=e,this.select(e))}get options(){return this.menu?.items??[]}get selectedIndex(){let[e,t]=(this.getSelectedOptions()??[])[0]??[];return t??-1}set selectedIndex(e){this.lastUserSetSelectedIndex=e,this.selectIndex(e)}get selectedOptions(){return(this.getSelectedOptions()??[]).map(([e])=>e)}get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get form(){return this.internals.form}get labels(){return this.internals.labels}get validity(){return this.syncValidity(),this.internals.validity}get validationMessage(){return this.syncValidity(),this.internals.validationMessage}get willValidate(){return this.syncValidity(),this.internals.willValidate}get hasError(){return this.error||this.nativeError}select(e){let t=this.options.find(o=>o.value===e);t&&this.selectItem(t)}selectIndex(e){let t=this.options[e];t&&this.selectItem(t)}reset(){for(let e of this.options)e.selected=e.hasAttribute("selected");this.updateValueAndDisplayText(),this.nativeError=!1,this.nativeErrorText=""}checkValidity(){return this.syncValidity(),this.internals.checkValidity()}reportValidity(){let e;this.addEventListener("invalid",r=>{e=r},{once:!0});let t=this.checkValidity();if(e?.defaultPrevented)return t;let o=this.getErrorText();return this.nativeError=!t,this.nativeErrorText=this.validationMessage,o===this.getErrorText()&&this.field?.reannounceError(),t}setCustomValidity(e){this.customValidationMessage=e,this.syncValidity()}update(e){this.hasUpdated||this.initUserSelection(),super.update(e)}render(){return h`
      <span
          class="select ${P(this.getRenderClasses())}"
          @focusout=${this.handleFocusout}>
        ${this.renderField()}
        ${this.renderMenu()}
      </span>
    `}updated(e){e.has("required")&&this.syncValidity()}async firstUpdated(e){await this.menu?.updateComplete,this.lastSelectedOptionRecords.length||this.initUserSelection(),!this.lastSelectedOptionRecords.length&&!!1&&!this.options.length&&setTimeout(()=>{this.updateValueAndDisplayText()}),super.firstUpdated(e)}getRenderClasses(){return{disabled:this.disabled,error:this.error,open:this.open}}renderField(){return Ae`
      <${this.fieldTag}
          aria-haspopup="listbox"
          role="combobox"
          part="field"
          id="field"
          tabindex=${this.disabled?"-1":"0"}
          aria-label=${this.ariaLabel||p}
          aria-describedby="description"
          aria-expanded=${this.open?"true":p}
          aria-controls="listbox"
          class="field"
          label=${this.label}
          .focused=${this.focused||this.open}
          .populated=${!!this.displayText}
          .disabled=${this.disabled}
          .required=${this.required}
          .error=${this.hasError}
          ?has-start=${this.hasLeadingIcon}
          has-end
          supporting-text=${this.supportingText}
          error-text=${this.getErrorText()}
          @keydown=${this.handleKeydown}
          @click=${this.handleClick}
          @focus=${this.handleFocus}
          @blur=${this.handleBlur}>
         ${this.renderFieldContent()}
         <div id="description" slot="aria-describedby"></div>
      </${this.fieldTag}>`}renderFieldContent(){return[this.renderLeadingIcon(),this.renderLabel(),this.renderTrailingIcon()]}renderLeadingIcon(){return h`
      <span class="icon leading" slot="start">
         <slot name="leading-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
     `}renderTrailingIcon(){return h`
      <span class="icon trailing" slot="end">
        <slot name="trailing-icon" @slotchange=${this.handleIconChange}>
          <svg height="5" viewBox="7 10 10 5" focusable="false">
            <polygon class="down" stroke="none" fill-rule="evenodd" points="7 10 12 15 17 10"></polygon>
            <polygon class="up" stroke="none" fill-rule="evenodd" points="7 15 12 10 17 15"></polygon>
          </svg>
        </slot>
      </span>
     `}renderLabel(){return h`<div id="label">${this.displayText||h`&nbsp;`}</div>`}renderMenu(){let e=this.label||this.ariaLabel;return h`
      <md-menu
          id="listbox"
          default-focus="none"
          role="listbox"
          tabindex="-1"
          aria-label=${e||p}
          stay-open-on-focusout
          part="menu"
          exportparts="focus-ring: menu-focus-ring"
          anchor="field"
          .open=${this.open}
          .quick=${this.quick}
          .positioning=${this.menuPositioning}
          .typeaheadDelay=${this.typeaheadDelay}
          @opening=${this.handleOpening}
          @opened=${this.redispatchEvent}
          @closing=${this.redispatchEvent}
          @closed=${this.handleClosed}
          @close-menu=${this.handleCloseMenu}
          @request-selection=${this.handleRequestSelection}
          @request-deselection=${this.handleRequestDeselection}>
        ${this.renderMenuContent()}
      </md-menu>`}renderMenuContent(){return h`<slot></slot>`}handleKeydown(e){if(this.open||this.disabled||!this.menu)return;let t=this.menu.typeaheadController,o=e.code==="Space"||e.code==="ArrowDown"||e.code==="Enter";if(!t.isTypingAhead&&o){e.preventDefault(),this.open=!0;return}if(e.key.length===1){t.onKeydown(e),e.preventDefault();let{lastActiveRecord:n}=t;if(!n)return;this.labelEl?.setAttribute?.("aria-live","polite"),this.selectItem(n[j.ITEM])&&this.dispatchInteractionEvents()}}handleClick(){this.open=!0}handleFocus(){this.focused=!0}handleBlur(){this.focused=!1}handleFocusout(e){e.relatedTarget&&De(e.relatedTarget,this)||(this.open=!1)}getSelectedOptions(){if(!this.menu)return this.lastSelectedOptionRecords=[],null;let e=this.menu.items;return this.lastSelectedOptionRecords=ri(e),this.lastSelectedOptionRecords}async getUpdateComplete(){return await this.menu?.updateComplete,super.getUpdateComplete()}updateValueAndDisplayText(){let e=this.getSelectedOptions()??[],t=!1;if(e.length){let[o]=e[0];t=this.lastSelectedOption!==o,this.lastSelectedOption=o,this[ht]=o.value,this.displayText=o.displayText}else t=this.lastSelectedOption!==null,this.lastSelectedOption=null,this[ht]="",this.displayText="";return this.internals.setFormValue(this.value),this.syncValidity(),t}async handleOpening(e){this.labelEl?.removeAttribute?.("aria-live"),this.redispatchEvent(e);let t=this.menu.items,o=le(t)?.item,[r]=this.lastSelectedOptionRecords[0]??[null];o&&o!==r&&(o.tabIndex=-1),r=r??t[0],r&&(r.tabIndex=0,r.focus())}redispatchEvent(e){se(this,e)}handleClosed(e){this.open=!1,this.redispatchEvent(e)}handleCloseMenu(e){let t=e.detail.reason,o=e.detail.itemPath[0];this.open=!1;let r=!1;t.kind==="click-selection"?r=this.selectItem(o):t.kind==="keydown"&&ti(t.key)?r=this.selectItem(o):(o.tabIndex=-1,o.blur()),r&&this.dispatchInteractionEvents()}selectItem(e){return this.lastSelectedOptionRecords.forEach(([t])=>{e!==t&&(t.selected=!1)}),e.selected=!0,this.updateValueAndDisplayText()}handleRequestSelection(e){let t=e.target;this.lastSelectedOptionRecords.some(([o])=>o===t)||this.selectItem(t)}handleRequestDeselection(e){let t=e.target;this.lastSelectedOptionRecords.some(([o])=>o===t)&&this.updateValueAndDisplayText()}initUserSelection(){this.lastUserSetValue&&!this.lastSelectedOptionRecords.length?this.select(this.lastUserSetValue):this.lastUserSetSelectedIndex!==null&&!this.lastSelectedOptionRecords.length?this.selectIndex(this.lastUserSetSelectedIndex):this.updateValueAndDisplayText()}handleIconChange(){this.hasLeadingIcon=this.leadingIcons.length>0}dispatchInteractionEvents(){this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0}))}getErrorText(){return this.error?this.errorText:this.nativeErrorText}syncValidity(){let e=this.required&&!this.value,t=!!this.customValidationMessage,o=this.customValidationMessage||e&&this.getRequiredValidationMessage()||"";this.internals.setValidity({valueMissing:e,customError:t},o)}getRequiredValidationMessage(){let e=document.createElement("select");return e.required=!0,e.validationMessage}formResetCallback(){this.reset()}formStateRestoreCallback(e){this.value=e}};ni=ht;K(S);S.formAssociated=!0;a([l({type:Boolean})],S.prototype,"quick",void 0);a([l({type:Boolean})],S.prototype,"required",void 0);a([l({type:Boolean,reflect:!0})],S.prototype,"disabled",void 0);a([l({type:String,attribute:"error-text"})],S.prototype,"errorText",void 0);a([l()],S.prototype,"label",void 0);a([l({type:String,attribute:"supporting-text"})],S.prototype,"supportingText",void 0);a([l({type:Boolean,reflect:!0})],S.prototype,"error",void 0);a([l({attribute:"menu-positioning"})],S.prototype,"menuPositioning",void 0);a([l({type:Number,attribute:"typeahead-delay"})],S.prototype,"typeaheadDelay",void 0);a([l({type:Boolean,attribute:"has-leading-icon"})],S.prototype,"hasLeadingIcon",void 0);a([l({attribute:"display-text"})],S.prototype,"displayText",void 0);a([l()],S.prototype,"value",null);a([l({type:Number,attribute:"selected-index"})],S.prototype,"selectedIndex",null);a([E()],S.prototype,"nativeError",void 0);a([E()],S.prototype,"nativeErrorText",void 0);a([E()],S.prototype,"focused",void 0);a([E()],S.prototype,"open",void 0);a([v(".field")],S.prototype,"field",void 0);a([v("md-menu")],S.prototype,"menu",void 0);a([v("#label")],S.prototype,"labelEl",void 0);a([V({slot:"leading-icon",flatten:!0})],S.prototype,"leadingIcons",void 0);var ft=class extends S{constructor(){super(...arguments),this.fieldTag=te`md-outlined-field`}};var ai=b`:host{--_text-field-container-shape: var(--md-outlined-select-text-field-container-shape, 4px);--_text-field-disabled-input-text-color: var(--md-outlined-select-text-field-disabled-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-input-text-opacity: var(--md-outlined-select-text-field-disabled-input-text-opacity, 0.38);--_text-field-disabled-label-text-color: var(--md-outlined-select-text-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-label-text-opacity: var(--md-outlined-select-text-field-disabled-label-text-opacity, 0.38);--_text-field-disabled-leading-icon-color: var(--md-outlined-select-text-field-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-leading-icon-opacity: var(--md-outlined-select-text-field-disabled-leading-icon-opacity, 0.38);--_text-field-disabled-outline-color: var(--md-outlined-select-text-field-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-outline-opacity: var(--md-outlined-select-text-field-disabled-outline-opacity, 0.12);--_text-field-disabled-outline-width: var(--md-outlined-select-text-field-disabled-outline-width, 1px);--_text-field-disabled-supporting-text-color: var(--md-outlined-select-text-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-supporting-text-opacity: var(--md-outlined-select-text-field-disabled-supporting-text-opacity, 0.38);--_text-field-disabled-trailing-icon-color: var(--md-outlined-select-text-field-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-trailing-icon-opacity: var(--md-outlined-select-text-field-disabled-trailing-icon-opacity, 0.38);--_text-field-error-focus-input-text-color: var(--md-outlined-select-text-field-error-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-error-focus-label-text-color: var(--md-outlined-select-text-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-focus-leading-icon-color: var(--md-outlined-select-text-field-error-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-error-focus-outline-color: var(--md-outlined-select-text-field-error-focus-outline-color, var(--md-sys-color-error, #b3261e));--_text-field-error-focus-supporting-text-color: var(--md-outlined-select-text-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-focus-trailing-icon-color: var(--md-outlined-select-text-field-error-focus-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_text-field-error-hover-input-text-color: var(--md-outlined-select-text-field-error-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-error-hover-label-text-color: var(--md-outlined-select-text-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_text-field-error-hover-leading-icon-color: var(--md-outlined-select-text-field-error-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-error-hover-outline-color: var(--md-outlined-select-text-field-error-hover-outline-color, var(--md-sys-color-on-error-container, #410e0b));--_text-field-error-hover-supporting-text-color: var(--md-outlined-select-text-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-hover-trailing-icon-color: var(--md-outlined-select-text-field-error-hover-trailing-icon-color, var(--md-sys-color-on-error-container, #410e0b));--_text-field-error-input-text-color: var(--md-outlined-select-text-field-error-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-error-label-text-color: var(--md-outlined-select-text-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-leading-icon-color: var(--md-outlined-select-text-field-error-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-error-outline-color: var(--md-outlined-select-text-field-error-outline-color, var(--md-sys-color-error, #b3261e));--_text-field-error-supporting-text-color: var(--md-outlined-select-text-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-trailing-icon-color: var(--md-outlined-select-text-field-error-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_text-field-focus-input-text-color: var(--md-outlined-select-text-field-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-focus-label-text-color: var(--md-outlined-select-text-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_text-field-focus-leading-icon-color: var(--md-outlined-select-text-field-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-focus-outline-color: var(--md-outlined-select-text-field-focus-outline-color, var(--md-sys-color-primary, #6750a4));--_text-field-focus-outline-width: var(--md-outlined-select-text-field-focus-outline-width, 3px);--_text-field-focus-supporting-text-color: var(--md-outlined-select-text-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-focus-trailing-icon-color: var(--md-outlined-select-text-field-focus-trailing-icon-color, var(--md-sys-color-primary, #6750a4));--_text-field-hover-input-text-color: var(--md-outlined-select-text-field-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-hover-label-text-color: var(--md-outlined-select-text-field-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-hover-leading-icon-color: var(--md-outlined-select-text-field-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-hover-outline-color: var(--md-outlined-select-text-field-hover-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-hover-outline-width: var(--md-outlined-select-text-field-hover-outline-width, 1px);--_text-field-hover-supporting-text-color: var(--md-outlined-select-text-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-hover-trailing-icon-color: var(--md-outlined-select-text-field-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-input-text-color: var(--md-outlined-select-text-field-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-input-text-font: var(--md-outlined-select-text-field-input-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_text-field-input-text-line-height: var(--md-outlined-select-text-field-input-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_text-field-input-text-size: var(--md-outlined-select-text-field-input-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_text-field-input-text-weight: var(--md-outlined-select-text-field-input-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_text-field-label-text-color: var(--md-outlined-select-text-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-label-text-font: var(--md-outlined-select-text-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_text-field-label-text-line-height: var(--md-outlined-select-text-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_text-field-label-text-populated-line-height: var(--md-outlined-select-text-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_text-field-label-text-populated-size: var(--md-outlined-select-text-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_text-field-label-text-size: var(--md-outlined-select-text-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_text-field-label-text-weight: var(--md-outlined-select-text-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_text-field-leading-icon-color: var(--md-outlined-select-text-field-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-leading-icon-size: var(--md-outlined-select-text-field-leading-icon-size, 24px);--_text-field-outline-color: var(--md-outlined-select-text-field-outline-color, var(--md-sys-color-outline, #79747e));--_text-field-outline-width: var(--md-outlined-select-text-field-outline-width, 1px);--_text-field-supporting-text-color: var(--md-outlined-select-text-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-supporting-text-font: var(--md-outlined-select-text-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_text-field-supporting-text-line-height: var(--md-outlined-select-text-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_text-field-supporting-text-size: var(--md-outlined-select-text-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_text-field-supporting-text-weight: var(--md-outlined-select-text-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_text-field-trailing-icon-color: var(--md-outlined-select-text-field-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-trailing-icon-size: var(--md-outlined-select-text-field-trailing-icon-size, 24px);--_text-field-container-shape-start-start: var( --md-outlined-select-text-field-container-shape-start-start, var(--_text-field-container-shape) );--_text-field-container-shape-start-end: var( --md-outlined-select-text-field-container-shape-start-end, var(--_text-field-container-shape) );--_text-field-container-shape-end-end: var( --md-outlined-select-text-field-container-shape-end-end, var(--_text-field-container-shape) );--_text-field-container-shape-end-start: var( --md-outlined-select-text-field-container-shape-end-start, var(--_text-field-container-shape) );--md-outlined-field-container-shape-end-end: var(--_text-field-container-shape-end-end);--md-outlined-field-container-shape-end-start: var(--_text-field-container-shape-end-start);--md-outlined-field-container-shape-start-end: var(--_text-field-container-shape-start-end);--md-outlined-field-container-shape-start-start: var(--_text-field-container-shape-start-start);--md-outlined-field-content-color: var(--_text-field-input-text-color);--md-outlined-field-content-font: var(--_text-field-input-text-font);--md-outlined-field-content-line-height: var(--_text-field-input-text-line-height);--md-outlined-field-content-size: var(--_text-field-input-text-size);--md-outlined-field-content-weight: var(--_text-field-input-text-weight);--md-outlined-field-disabled-content-color: var(--_text-field-disabled-input-text-color);--md-outlined-field-disabled-content-opacity: var(--_text-field-disabled-input-text-opacity);--md-outlined-field-disabled-label-text-color: var(--_text-field-disabled-label-text-color);--md-outlined-field-disabled-label-text-opacity: var(--_text-field-disabled-label-text-opacity);--md-outlined-field-disabled-leading-content-color: var(--_text-field-disabled-leading-icon-color);--md-outlined-field-disabled-leading-content-opacity: var(--_text-field-disabled-leading-icon-opacity);--md-outlined-field-disabled-outline-color: var(--_text-field-disabled-outline-color);--md-outlined-field-disabled-outline-opacity: var(--_text-field-disabled-outline-opacity);--md-outlined-field-disabled-outline-width: var(--_text-field-disabled-outline-width);--md-outlined-field-disabled-supporting-text-color: var(--_text-field-disabled-supporting-text-color);--md-outlined-field-disabled-supporting-text-opacity: var(--_text-field-disabled-supporting-text-opacity);--md-outlined-field-disabled-trailing-content-color: var(--_text-field-disabled-trailing-icon-color);--md-outlined-field-disabled-trailing-content-opacity: var(--_text-field-disabled-trailing-icon-opacity);--md-outlined-field-error-content-color: var(--_text-field-error-input-text-color);--md-outlined-field-error-focus-content-color: var(--_text-field-error-focus-input-text-color);--md-outlined-field-error-focus-label-text-color: var(--_text-field-error-focus-label-text-color);--md-outlined-field-error-focus-leading-content-color: var(--_text-field-error-focus-leading-icon-color);--md-outlined-field-error-focus-outline-color: var(--_text-field-error-focus-outline-color);--md-outlined-field-error-focus-supporting-text-color: var(--_text-field-error-focus-supporting-text-color);--md-outlined-field-error-focus-trailing-content-color: var(--_text-field-error-focus-trailing-icon-color);--md-outlined-field-error-hover-content-color: var(--_text-field-error-hover-input-text-color);--md-outlined-field-error-hover-label-text-color: var(--_text-field-error-hover-label-text-color);--md-outlined-field-error-hover-leading-content-color: var(--_text-field-error-hover-leading-icon-color);--md-outlined-field-error-hover-outline-color: var(--_text-field-error-hover-outline-color);--md-outlined-field-error-hover-supporting-text-color: var(--_text-field-error-hover-supporting-text-color);--md-outlined-field-error-hover-trailing-content-color: var(--_text-field-error-hover-trailing-icon-color);--md-outlined-field-error-label-text-color: var(--_text-field-error-label-text-color);--md-outlined-field-error-leading-content-color: var(--_text-field-error-leading-icon-color);--md-outlined-field-error-outline-color: var(--_text-field-error-outline-color);--md-outlined-field-error-supporting-text-color: var(--_text-field-error-supporting-text-color);--md-outlined-field-error-trailing-content-color: var(--_text-field-error-trailing-icon-color);--md-outlined-field-focus-content-color: var(--_text-field-focus-input-text-color);--md-outlined-field-focus-label-text-color: var(--_text-field-focus-label-text-color);--md-outlined-field-focus-leading-content-color: var(--_text-field-focus-leading-icon-color);--md-outlined-field-focus-outline-color: var(--_text-field-focus-outline-color);--md-outlined-field-focus-outline-width: var(--_text-field-focus-outline-width);--md-outlined-field-focus-supporting-text-color: var(--_text-field-focus-supporting-text-color);--md-outlined-field-focus-trailing-content-color: var(--_text-field-focus-trailing-icon-color);--md-outlined-field-hover-content-color: var(--_text-field-hover-input-text-color);--md-outlined-field-hover-label-text-color: var(--_text-field-hover-label-text-color);--md-outlined-field-hover-leading-content-color: var(--_text-field-hover-leading-icon-color);--md-outlined-field-hover-outline-color: var(--_text-field-hover-outline-color);--md-outlined-field-hover-outline-width: var(--_text-field-hover-outline-width);--md-outlined-field-hover-supporting-text-color: var(--_text-field-hover-supporting-text-color);--md-outlined-field-hover-trailing-content-color: var(--_text-field-hover-trailing-icon-color);--md-outlined-field-label-text-color: var(--_text-field-label-text-color);--md-outlined-field-label-text-font: var(--_text-field-label-text-font);--md-outlined-field-label-text-line-height: var(--_text-field-label-text-line-height);--md-outlined-field-label-text-populated-line-height: var(--_text-field-label-text-populated-line-height);--md-outlined-field-label-text-populated-size: var(--_text-field-label-text-populated-size);--md-outlined-field-label-text-size: var(--_text-field-label-text-size);--md-outlined-field-label-text-weight: var(--_text-field-label-text-weight);--md-outlined-field-leading-content-color: var(--_text-field-leading-icon-color);--md-outlined-field-outline-color: var(--_text-field-outline-color);--md-outlined-field-outline-width: var(--_text-field-outline-width);--md-outlined-field-supporting-text-color: var(--_text-field-supporting-text-color);--md-outlined-field-supporting-text-font: var(--_text-field-supporting-text-font);--md-outlined-field-supporting-text-line-height: var(--_text-field-supporting-text-line-height);--md-outlined-field-supporting-text-size: var(--_text-field-supporting-text-size);--md-outlined-field-supporting-text-weight: var(--_text-field-supporting-text-weight);--md-outlined-field-trailing-content-color: var(--_text-field-trailing-icon-color)}[has-start] .icon.leading{font-size:var(--_text-field-leading-icon-size);height:var(--_text-field-leading-icon-size);width:var(--_text-field-leading-icon-size)}.icon.trailing{font-size:var(--_text-field-trailing-icon-size);height:var(--_text-field-trailing-icon-size);width:var(--_text-field-trailing-icon-size)}/*# sourceMappingURL=outlined-select-styles.css.map */
`;var si=b`:host{color:unset;min-width:210px;display:flex}.field{cursor:default;outline:none}.select{position:relative;flex-direction:column}.icon.trailing svg,.icon ::slotted(*){fill:currentColor}.icon ::slotted(*){width:inherit;height:inherit;font-size:inherit}.icon slot{display:flex;height:100%;width:100%;align-items:center;justify-content:center}.icon.trailing :is(.up,.down){opacity:0;transition:opacity 75ms linear 75ms}.select:not(.open) .down,.select.open .up{opacity:1}.field,.select,md-menu{min-width:inherit;width:inherit;max-width:inherit;display:flex}.field,.select{width:100%}:host{display:inline-flex}:host([disabled]){pointer-events:none}/*# sourceMappingURL=shared-styles.css.map */
`;var Zt=class extends ft{};Zt.styles=[si,ai,Qo];Zt=a([w("md-outlined-select")],Zt);var li=b`@media(forced-colors: active){:host([disabled]),:host([disabled]) slot{color:GrayText;opacity:1}.list-item{position:relative}.list-item.selected::before{content:"";position:absolute;inset:0;box-sizing:border-box;border-radius:inherit;pointer-events:none;border:3px double CanvasText}}/*# sourceMappingURL=forced-colors-styles.css.map */
`;var di=b`:host{display:flex;--md-ripple-hover-color: var(--md-menu-item-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-hover-opacity: var(--md-menu-item-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-menu-item-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-pressed-opacity: var(--md-menu-item-pressed-state-layer-opacity, 0.12)}:host([disabled]){opacity:var(--md-menu-item-disabled-opacity, 0.3);pointer-events:none}md-focus-ring{z-index:1;--md-focus-ring-shape: 8px}a,button,li{background:none;border:none;padding:0;margin:0;text-align:unset;text-decoration:none}.list-item{border-radius:inherit;display:flex;flex:1;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.list-item:not(.disabled){cursor:pointer}[slot=container]{pointer-events:none}md-ripple{border-radius:inherit}md-item{border-radius:inherit;flex:1;color:var(--md-menu-item-label-text-color, var(--md-sys-color-on-surface, #1d1b20));font-family:var(--md-menu-item-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-menu-item-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));line-height:var(--md-menu-item-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));font-weight:var(--md-menu-item-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));min-height:var(--md-menu-item-one-line-container-height, 56px);padding-top:var(--md-menu-item-top-space, 12px);padding-bottom:var(--md-menu-item-bottom-space, 12px);padding-inline-start:var(--md-menu-item-leading-space, 16px);padding-inline-end:var(--md-menu-item-trailing-space, 16px)}md-item[multiline]{min-height:var(--md-menu-item-two-line-container-height, 72px)}[slot=supporting-text]{color:var(--md-menu-item-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-menu-item-supporting-text-font, var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-menu-item-supporting-text-size, var(--md-sys-typescale-body-medium-size, 0.875rem));line-height:var(--md-menu-item-supporting-text-line-height, var(--md-sys-typescale-body-medium-line-height, 1.25rem));font-weight:var(--md-menu-item-supporting-text-weight, var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400)))}[slot=trailing-supporting-text]{color:var(--md-menu-item-trailing-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-menu-item-trailing-supporting-text-font, var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-menu-item-trailing-supporting-text-size, var(--md-sys-typescale-label-small-size, 0.6875rem));line-height:var(--md-menu-item-trailing-supporting-text-line-height, var(--md-sys-typescale-label-small-line-height, 1rem));font-weight:var(--md-menu-item-trailing-supporting-text-weight, var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500)))}:is([slot=start],[slot=end])::slotted(*){fill:currentColor}[slot=start]{color:var(--md-menu-item-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}[slot=end]{color:var(--md-menu-item-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}.list-item.selected{background-color:var(--md-menu-item-selected-container-color, var(--md-sys-color-secondary-container, #e8def8))}.selected:not(.disabled) ::slotted(*){color:var(--md-menu-item-selected-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b))}/*# sourceMappingURL=menu-item-styles.css.map */
`;var Ce=class extends y{constructor(){super(...arguments),this.multiline=!1}render(){return h`
      <slot name="container"></slot>
      <slot class="non-text" name="start"></slot>
      <div class="text">
        <slot name="overline"
            @slotchange=${this.handleTextSlotChange}></slot>
        <slot class="default-slot"
            @slotchange=${this.handleTextSlotChange}></slot>
        <slot name="headline"
            @slotchange=${this.handleTextSlotChange}></slot>
        <slot name="supporting-text"
            @slotchange=${this.handleTextSlotChange}></slot>
      </div>
      <slot class="non-text" name="trailing-supporting-text"></slot>
      <slot class="non-text" name="end"></slot>
    `}handleTextSlotChange(){let e=!1,t=0;for(let o of this.textSlots)if(qi(o)&&(t+=1),t>1){e=!0;break}this.multiline=e}};a([l({type:Boolean,reflect:!0})],Ce.prototype,"multiline",void 0);a([Eo(".text slot")],Ce.prototype,"textSlots",void 0);function qi(i){for(let e of i.assignedNodes({flatten:!0})){let t=e.nodeType===Node.ELEMENT_NODE,o=e.nodeType===Node.TEXT_NODE&&e.textContent?.match(/\S/);if(t||o)return!0}return!1}var ci=b`:host{color:var(--md-sys-color-on-surface, #1d1b20);font-family:var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-body-large-size, 1rem);font-weight:var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400));line-height:var(--md-sys-typescale-body-large-line-height, 1.5rem);align-items:center;box-sizing:border-box;display:flex;gap:16px;min-height:56px;overflow:hidden;padding:12px 16px;position:relative;text-overflow:ellipsis}:host([multiline]){min-height:72px}[name=overline]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-label-small-size, 0.6875rem);font-weight:var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500));line-height:var(--md-sys-typescale-label-small-line-height, 1rem)}[name=supporting-text]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-body-medium-size, 0.875rem);font-weight:var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400));line-height:var(--md-sys-typescale-body-medium-line-height, 1.25rem)}[name=trailing-supporting-text]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-label-small-size, 0.6875rem);font-weight:var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500));line-height:var(--md-sys-typescale-label-small-line-height, 1rem)}[name=container]::slotted(*){inset:0;position:absolute}.default-slot{display:inline}.default-slot,::slotted(*){overflow:hidden;text-overflow:ellipsis}.text{display:flex;flex:1;flex-direction:column;overflow:hidden}/*# sourceMappingURL=item-styles.css.map */
`;var Xt=class extends Ce{};Xt.styles=[ci];Xt=a([w("md-item")],Xt);var mt=class{constructor(e,t){this.host=e,this.internalTypeaheadText=null,this.onClick=()=>{this.host.keepOpen||this.host.dispatchEvent(Gt(this.host,{kind:Kt.CLICK_SELECTION}))},this.onKeydown=r=>{if(this.host.keepOpen||r.defaultPrevented)return;let n=r.code;!r.defaultPrevented&&ct(n)&&(r.preventDefault(),this.host.dispatchEvent(Gt(this.host,{kind:Kt.KEYDOWN,key:n})))};let{getHeadlineElements:o}=t;this.getHeadlineElements=o,this.host.addController(this)}get typeaheadText(){if(this.internalTypeaheadText!==null)return this.internalTypeaheadText;let e=this.getHeadlineElements(),t=[];return e.forEach(o=>{o.textContent&&o.textContent.trim()&&t.push(o.textContent.trim())}),t.join(" ")}get tagName(){switch(this.host.type){case"link":return"a";case"button":return"button";default:case"menuitem":case"option":return"li"}}get role(){return this.host.type==="option"?"option":"menuitem"}hostConnected(){this.host.toggleAttribute("md-menu-item",!0)}hostUpdate(){this.host.href&&(this.host.type="link")}setTypeaheadText(e){this.internalTypeaheadText=e}};function Hi(){return new Event("request-selection",{bubbles:!0,composed:!0})}function ji(){return new Event("request-deselection",{bubbles:!0,composed:!0})}var vt=class{get role(){return this.menuItemController.role}get typeaheadText(){return this.menuItemController.typeaheadText}setTypeaheadText(e){this.menuItemController.setTypeaheadText(e)}get displayText(){if(this.internalDisplayText!==null)return this.internalDisplayText;let e=this.getHeadlineElements(),t=[];return e.forEach(o=>{o.textContent&&o.textContent.trim()&&t.push(o.textContent.trim())}),t.join(" ")}setDisplayText(e){this.internalDisplayText=e}constructor(e,t){this.host=e,this.internalDisplayText=null,this.lastSelected=this.host.selected,this.firstUpdate=!0,this.onClick=()=>{this.menuItemController.onClick()},this.onKeydown=o=>{this.menuItemController.onKeydown(o)},this.menuItemController=new mt(e,t),this.getHeadlineElements=t.getHeadlineElements,e.addController(this)}hostUpdate(){this.lastSelected!==this.host.selected&&(this.host.ariaSelected=this.host.selected?"true":"false")}hostUpdated(){this.lastSelected!==this.host.selected&&!this.firstUpdate&&(this.host.selected?this.host.dispatchEvent(Hi()):this.host.dispatchEvent(ji())),this.lastSelected=this.host.selected,this.firstUpdate=!1}};var H=class extends y{constructor(){super(...arguments),this.disabled=!1,this.isMenuItem=!0,this.selected=!1,this.value="",this.type="option",this.selectOptionController=new vt(this,{getHeadlineElements:()=>this.headlineElements})}get typeaheadText(){return this.selectOptionController.typeaheadText}set typeaheadText(e){this.selectOptionController.setTypeaheadText(e)}get displayText(){return this.selectOptionController.displayText}set displayText(e){this.selectOptionController.setDisplayText(e)}render(){return this.renderListItem(h`
      <md-item>
        <div slot="container">
          ${this.renderRipple()}
          ${this.renderFocusRing()}
        </div>
        <slot name="start" slot="start"></slot>
        <slot name="end" slot="end"></slot>
        ${this.renderBody()}
      </md-item>
    `)}renderListItem(e){return h`
      <li
        id="item"
        tabindex=${this.disabled?-1:0}
        role=${this.selectOptionController.role}
        aria-label=${this.ariaLabel||p}
        aria-selected=${this.ariaSelected||p}
        aria-checked=${this.ariaChecked||p}
        aria-expanded=${this.ariaExpanded||p}
        aria-haspopup=${this.ariaHasPopup||p}
        class="list-item ${P(this.getRenderClasses())}"
        @click=${this.selectOptionController.onClick}
        @keydown=${this.selectOptionController.onKeydown}
      >${e}</li>
    `}renderRipple(){return h`
      <md-ripple
          part="ripple"
          for="item"
          ?disabled=${this.disabled}></md-ripple>`}renderFocusRing(){return h`
      <md-focus-ring
          part="focus-ring"
          for="item"
          inward></md-focus-ring>`}getRenderClasses(){return{disabled:this.disabled,selected:this.selected}}renderBody(){return h`
      <slot></slot>
      <slot name="overline" slot="overline"></slot>
      <slot name="headline" slot="headline"></slot>
      <slot name="supporting-text" slot="supporting-text"></slot>
      <slot name="trailing-supporting-text"
          slot="trailing-supporting-text"></slot>
    `}focus(){this.listItemRoot?.focus()}};K(H);H.shadowRootOptions={...y.shadowRootOptions,delegatesFocus:!0};a([l({type:Boolean,reflect:!0})],H.prototype,"disabled",void 0);a([l({type:Boolean,attribute:"md-menu-item",reflect:!0})],H.prototype,"isMenuItem",void 0);a([l({type:Boolean})],H.prototype,"selected",void 0);a([l()],H.prototype,"value",void 0);a([v(".list-item")],H.prototype,"listItemRoot",void 0);a([V({slot:"headline"})],H.prototype,"headlineElements",void 0);a([l({attribute:"typeahead-text"})],H.prototype,"typeaheadText",null);a([l({attribute:"display-text"})],H.prototype,"displayText",null);var Jt=class extends H{};Jt.styles=[di,li];Jt=a([w("md-select-option")],Jt);var ve=class extends y{constructor(){super(...arguments),this.inset=!1,this.insetStart=!1,this.insetEnd=!1}};a([l({type:Boolean,reflect:!0})],ve.prototype,"inset",void 0);a([l({type:Boolean,reflect:!0,attribute:"inset-start"})],ve.prototype,"insetStart",void 0);a([l({type:Boolean,reflect:!0,attribute:"inset-end"})],ve.prototype,"insetEnd",void 0);var ui=b`:host{--_color: var(--md-divider-color, var(--md-sys-color-outline-variant, #cac4d0));--_thickness: var(--md-divider-thickness, 1px);box-sizing:border-box;color:var(--_color);display:flex;height:var(--_thickness);width:100%}:host([inset]),:host([inset-start]){padding-inline-start:16px}:host([inset]),:host([inset-end]){padding-inline-end:16px}:host::before{background:currentColor;content:"";height:100%;width:100%}@media(forced-colors: active){:host::before{background:CanvasText}}/*# sourceMappingURL=divider-styles.css.map */
`;var Qt=class extends ve{};Qt.styles=[ui];Qt=a([w("md-divider")],Qt);var pi={dialog:[[[{transform:"translateY(-50px)"},{transform:"translateY(0)"}],{duration:500,easing:q.EMPHASIZED}]],scrim:[[[{opacity:0},{opacity:.32}],{duration:500,easing:"linear"}]],container:[[[{opacity:0},{opacity:1}],{duration:50,easing:"linear",pseudoElement:"::before"}],[[{height:"35%"},{height:"100%"}],{duration:500,easing:q.EMPHASIZED,pseudoElement:"::before"}]],headline:[[[{opacity:0},{opacity:0,offset:.2},{opacity:1}],{duration:250,easing:"linear",fill:"forwards"}]],content:[[[{opacity:0},{opacity:0,offset:.2},{opacity:1}],{duration:250,easing:"linear",fill:"forwards"}]],actions:[[[{opacity:0},{opacity:0,offset:.5},{opacity:1}],{duration:300,easing:"linear",fill:"forwards"}]]},hi={dialog:[[[{transform:"translateY(0)"},{transform:"translateY(-50px)"}],{duration:150,easing:q.EMPHASIZED_ACCELERATE}]],scrim:[[[{opacity:.32},{opacity:0}],{duration:150,easing:"linear"}]],container:[[[{height:"100%"},{height:"35%"}],{duration:150,easing:q.EMPHASIZED_ACCELERATE,pseudoElement:"::before"}],[[{opacity:"1"},{opacity:"0"}],{delay:100,duration:50,easing:"linear",pseudoElement:"::before"}]],headline:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]],content:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]],actions:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]]};var k=class extends y{get open(){return this.isOpen}set open(e){e!==this.isOpen&&(this.isOpen=e,e?(this.setAttribute("open",""),this.show()):(this.removeAttribute("open"),this.close()))}constructor(){super(),this.returnValue="",this.getOpenAnimation=()=>pi,this.getCloseAnimation=()=>hi,this.isOpen=!1,this.isOpening=!1,this.isConnectedPromise=this.getIsConnectedPromise(),this.isAtScrollTop=!1,this.isAtScrollBottom=!1,this.nextClickIsFromContent=!1,this.hasHeadline=!1,this.hasActions=!1,this.hasIcon=!1,!1||this.addEventListener("submit",this.handleSubmit)}async show(){this.isOpening=!0,await this.isConnectedPromise,await this.updateComplete;let e=this.dialog;if(e.open||!this.isOpening){this.isOpening=!1;return}if(!this.dispatchEvent(new Event("open",{cancelable:!0}))){this.open=!1;return}e.showModal(),this.open=!0,this.scroller&&(this.scroller.scrollTop=0),this.querySelector("[autofocus]")?.focus(),await this.animateDialog(this.getOpenAnimation()),this.dispatchEvent(new Event("opened")),this.isOpening=!1}async close(e=this.returnValue){if(this.isOpening=!1,!this.isConnected){this.open=!1;return}await this.updateComplete;let t=this.dialog;if(!t.open||this.isOpening){this.open=!1;return}let o=this.returnValue;if(this.returnValue=e,!this.dispatchEvent(new Event("close",{cancelable:!0}))){this.returnValue=o;return}await this.animateDialog(this.getCloseAnimation()),t.close(e),this.open=!1,this.dispatchEvent(new Event("closed"))}connectedCallback(){super.connectedCallback(),this.isConnectedPromiseResolve()}disconnectedCallback(){super.disconnectedCallback(),this.isConnectedPromise=this.getIsConnectedPromise()}render(){let e=this.open&&!(this.isAtScrollTop&&this.isAtScrollBottom),t={"has-headline":this.hasHeadline,"has-actions":this.hasActions,"has-icon":this.hasIcon,scrollable:e,"show-top-divider":e&&!this.isAtScrollTop,"show-bottom-divider":e&&!this.isAtScrollBottom},{ariaLabel:o}=this;return h`
      <div class="scrim"></div>
      <dialog
        class=${P(t)}
        aria-label=${o||p}
        aria-labelledby=${this.hasHeadline?"headline":p}
        role=${this.type==="alert"?"alertdialog":p}
        @cancel=${this.handleCancel}
        @click=${this.handleDialogClick}
        .returnValue=${this.returnValue||p}
      >
        <div class="container"
          @click=${this.handleContentClick}
        >
          <div class="headline">
            <div class="icon" aria-hidden="true">
              <slot name="icon" @slotchange=${this.handleIconChange}></slot>
            </div>
            <h2 id="headline" aria-hidden=${!this.hasHeadline||p}>
              <slot name="headline"
                  @slotchange=${this.handleHeadlineChange}></slot>
            </h2>
            <md-divider></md-divider>
          </div>
          <div class="scroller">
            <div class="content">
              <div class="top anchor"></div>
              <slot name="content"></slot>
              <div class="bottom anchor"></div>
            </div>
          </div>
          <div class="actions">
            <md-divider></md-divider>
            <slot name="actions"
              @slotchange=${this.handleActionsChange}></slot>
          </div>
        </div>
      </dialog>
    `}firstUpdated(){this.intersectionObserver=new IntersectionObserver(e=>{for(let t of e)this.handleAnchorIntersection(t)},{root:this.scroller}),this.intersectionObserver.observe(this.topAnchor),this.intersectionObserver.observe(this.bottomAnchor)}handleDialogClick(){if(this.nextClickIsFromContent){this.nextClickIsFromContent=!1;return}this.dispatchEvent(new Event("cancel",{cancelable:!0}))&&this.close()}handleContentClick(){this.nextClickIsFromContent=!0}handleSubmit(e){let t=e.target,{submitter:o}=e;t.method!=="dialog"||!o||this.close(o.getAttribute("value")??this.returnValue)}handleCancel(e){if(e.target!==this.dialog)return;let t=!se(this,e);e.preventDefault(),!t&&this.close()}async animateDialog(e){let{dialog:t,scrim:o,container:r,headline:n,content:s,actions:d}=this;if(!t||!o||!r||!n||!s||!d)return;let{container:c,dialog:u,scrim:m,headline:f,content:g,actions:_}=e,R=[[t,u??[]],[o,m??[]],[r,c??[]],[n,f??[]],[s,g??[]],[d,_??[]]],C=[];for(let[z,W]of R)for(let A of W)C.push(z.animate(...A));await Promise.all(C.map(z=>z.finished))}handleHeadlineChange(e){let t=e.target;this.hasHeadline=t.assignedElements().length>0}handleActionsChange(e){let t=e.target;this.hasActions=t.assignedElements().length>0}handleIconChange(e){let t=e.target;this.hasIcon=t.assignedElements().length>0}handleAnchorIntersection(e){let{target:t,isIntersecting:o}=e;t===this.topAnchor&&(this.isAtScrollTop=o),t===this.bottomAnchor&&(this.isAtScrollBottom=o)}getIsConnectedPromise(){return new Promise(e=>{this.isConnectedPromiseResolve=e})}};K(k);k.shadowRootOptions={...y.shadowRootOptions,delegatesFocus:!0};a([l({type:Boolean})],k.prototype,"open",null);a([l({attribute:!1})],k.prototype,"returnValue",void 0);a([l()],k.prototype,"type",void 0);a([v("dialog")],k.prototype,"dialog",void 0);a([v(".scrim")],k.prototype,"scrim",void 0);a([v(".container")],k.prototype,"container",void 0);a([v(".headline")],k.prototype,"headline",void 0);a([v(".content")],k.prototype,"content",void 0);a([v(".actions")],k.prototype,"actions",void 0);a([E()],k.prototype,"isAtScrollTop",void 0);a([E()],k.prototype,"isAtScrollBottom",void 0);a([v(".scroller")],k.prototype,"scroller",void 0);a([v(".top.anchor")],k.prototype,"topAnchor",void 0);a([v(".bottom.anchor")],k.prototype,"bottomAnchor",void 0);a([E()],k.prototype,"hasHeadline",void 0);a([E()],k.prototype,"hasActions",void 0);a([E()],k.prototype,"hasIcon",void 0);var fi=b`:host{--_container-color: var(--md-dialog-container-color, var(--md-sys-color-surface-container-high, #ece6f0));--_container-shape: var(--md-dialog-container-shape, 28px);--_headline-color: var(--md-dialog-headline-color, var(--md-sys-color-on-surface, #1d1b20));--_headline-font: var(--md-dialog-headline-font, var(--md-sys-typescale-headline-small-font, var(--md-ref-typeface-brand, Roboto)));--_headline-line-height: var(--md-dialog-headline-line-height, var(--md-sys-typescale-headline-small-line-height, 2rem));--_headline-size: var(--md-dialog-headline-size, var(--md-sys-typescale-headline-small-size, 1.5rem));--_headline-weight: var(--md-dialog-headline-weight, var(--md-sys-typescale-headline-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_supporting-text-color: var(--md-dialog-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-dialog-supporting-text-font, var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-line-height: var(--md-dialog-supporting-text-line-height, var(--md-sys-typescale-body-medium-line-height, 1.25rem));--_supporting-text-size: var(--md-dialog-supporting-text-size, var(--md-sys-typescale-body-medium-size, 0.875rem));--_supporting-text-weight: var(--md-dialog-supporting-text-weight, var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400)));--_icon-color: var(--md-dialog-icon-color, var(--md-sys-color-secondary, #625b71));--_icon-size: var(--md-dialog-icon-size, 24px);--_container-shape-start-start: var( --md-dialog-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-dialog-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-dialog-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-dialog-container-shape-end-start, var(--_container-shape) );border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start);display:contents;margin:auto;max-height:min(560px,100% - 48px);max-width:min(560px,100% - 48px);min-height:140px;min-width:280px;position:fixed;height:fit-content;width:fit-content}dialog{background:rgba(0,0,0,0);border:none;border-radius:inherit;flex-direction:column;height:inherit;margin:inherit;max-height:inherit;max-width:inherit;min-height:inherit;min-width:inherit;outline:none;overflow:visible;padding:0;width:inherit}dialog[open]{display:flex}::backdrop{background:none}.scrim{background:var(--md-sys-color-scrim, #000);display:none;inset:0;opacity:32%;pointer-events:none;position:fixed;z-index:1}:host([open]) .scrim{display:flex}h2{all:unset;align-self:stretch}.headline{align-items:center;color:var(--_headline-color);display:flex;flex-direction:column;font-family:var(--_headline-font);font-size:var(--_headline-size);line-height:var(--_headline-line-height);font-weight:var(--_headline-weight);position:relative}slot[name=headline]::slotted(*){align-items:center;align-self:stretch;box-sizing:border-box;display:flex;gap:8px;padding:24px 24px 0}.icon{display:flex}slot[name=icon]::slotted(*){color:var(--_icon-color);fill:currentColor;font-size:var(--_icon-size);padding-top:24px;height:var(--_icon-size);width:var(--_icon-size)}.has-icon slot[name=headline]::slotted(*){justify-content:center;padding-top:16px}.scrollable slot[name=headline]::slotted(*){padding-bottom:16px}.scrollable.has-headline slot[name=content]::slotted(*){padding-top:8px}.container{border-radius:inherit;display:flex;flex-direction:column;flex-grow:1;overflow:hidden;position:relative;transform-origin:top}.container::before{background:var(--_container-color);border-radius:inherit;content:"";inset:0;position:absolute}.scroller{display:flex;flex:1;flex-direction:column;overflow:hidden;z-index:1}.scrollable .scroller{overflow-y:scroll}.content{color:var(--_supporting-text-color);font-family:var(--_supporting-text-font);font-size:var(--_supporting-text-size);line-height:var(--_supporting-text-line-height);font-weight:var(--_supporting-text-weight);height:min-content;position:relative}slot[name=content]::slotted(*){box-sizing:border-box;padding:24px}.anchor{position:absolute}.top.anchor{top:0}.bottom.anchor{bottom:0}.actions{position:relative}slot[name=actions]::slotted(*){box-sizing:border-box;display:flex;gap:8px;justify-content:flex-end;padding:16px 24px 24px}.has-actions slot[name=content]::slotted(*){padding-bottom:8px}md-divider{display:none;position:absolute}.has-headline.show-top-divider .headline md-divider,.has-actions.show-bottom-divider .actions md-divider{display:flex}.headline md-divider{bottom:0}.actions md-divider{top:0}@media(forced-colors: active){dialog{outline:2px solid WindowText}}/*# sourceMappingURL=dialog-styles.css.map */
`;var eo=class extends k{};eo.styles=[fi];eo=a([w("md-dialog")],eo);var ie,T=ie=class extends y{constructor(){super(...arguments),this.captchaSiteKey="RECAPTCHA-SITE-KEY",this.captchaEndpoint="/ballerleague/v1/spam_check",this.brazeEndpoint="/ballerleague/v1/submit_application"}firstUpdated(){this.initializeServices(),this.dispatchEvent(new CustomEvent("signup-form-displayed",{bubbles:!0}))}render(){return h`
      <section id="form-wrapper">
        <form id="application-form">
          <div>
            ${this._renderStepOne()} ${this._renderStepTwo()}
            ${this._renderStepThree()} ${this._renderStepFour()}
          </div>
          <div class="form-footer">
            <md-filled-button
              trailing-icon
              @click=${this._handleSubmission}
              type="button"
              name="apply"
              disabled
            >
              Absenden ${xe.send}
            </md-filled-button>
          </div>
        </form>
      </section>
      ${this._renderSuccessDialog()}
    `}static reportFieldValidity(e){e.target.reportValidity()}initializeServices(){this.enrollmentService=new Xe(this.brazeEndpoint),this.spamService=new Je(this.captchaSiteKey,this.captchaEndpoint),this.spamService.featureEnabled&&this.applicationFormElement.insertAdjacentElement("afterbegin",this.spamService.generateScriptElement())}_handleSubmission(e){if(e.preventDefault(),this.applicationFormElement.checkValidity()){let t=this.normalizeData();try{if(this.spamService.isValidUser())this.enrollmentService.process(t),this.handleSuccessfulApplication(t);else throw new Error("User did not meet the reCAPTCHA requirements")}catch{}}else{let t=this.applicationFormElement.querySelector("[error]");t&&t.focus({preventScroll:!1})}}normalizeData(){return new Ze(this.firstName.value,this.familyName.value,this.email.value,this.tel.value,this.birthday.valueAsDate,this.shirt.value,this.experience.value,this.otherExperience.value,this.clubName.value,this.highlightTape.value,this.transfermarkt.value,this.youtube.value,this.instagram.value,this.tiktok.value,this.freeform.value,this.termsOfServiceBox.checked)}handleLegalChange(){this.shouldEnableSubmit()?this.submitButton.disabled=!1:this.submitButton.disabled=!0}handleSuccessfulApplication(e){this.successDialog.show(),this.dispatchEvent(new CustomEvent("completed-application",{detail:{experience:e.experience,club:e.clubName},bubbles:!0}))}validateAge(){let e=!1,t=new Date,o=new Date(this.birthday.value);(t.getTime()-o.getTime())/(1e3*60*60*24)>=18*365.25&&(e=!0,this.birthday.setCustomValidity(""),this.birthday.error=!1,this.birthday.errorText="",this.birthday.reportValidity()),e||(this.birthday.error=!0,this.birthday.errorText="Du musst mindestens 18 Jahre alt sein.",this.birthday.setCustomValidity("Sie m\xFCssen mindestens 18 Jahre alt sein."),this.birthday.dispatchEvent(new Event("invalid")),this.birthday.reportValidity())}shouldEnableSubmit(){let e=this.termsOfServiceBox.checked,t=this.teilnahmebedingungenBox.checked;return e&&t}_renderSuccessDialog(){return h`
      <md-dialog type="alert" data-reason="success">
        <div slot="headline" class="display-small">Glückwunsch</div>
        <form slot="content" id="form-id" method="dialog">
          Wir haben Ihre Bewerbung erhalten.
        </form>
        <div slot="actions">
          <md-filled-button form="form-id" value="close" @click=${this.handleDialogClose}>
            Schließen
          </md-filled-button>
        </div>
      </md-dialog>
    `}handleDialogClose(){this.successDialog.close(),this.applicationFormElement.reset()}handleExperienceSelection(e){e.target.value==="sonstiges"?(this.otherExperience.hidden=!1,this.otherExperience.classList.remove("hidden")):(this.otherExperience.hidden=!0,this.otherExperience.classList.add("hidden"))}_renderStepOne(){return h`
      <div>
        <div class="form-header">
          <h2 class="display-small">Erzähle uns etwas über Dich:</h2>
          <h3 class="headline-small">XING Baller League</h3>
        </div>
        <div class="form-fields">
          <md-outlined-text-field
            label="Vorname"
            required
            autocomplete="given-name"
            max="250"
            @blur=${ie.reportFieldValidity}
          ></md-outlined-text-field>
          <md-outlined-text-field
            label="Nachname"
            required
            max="250"
            autocomplete="family-name"
            @blur=${ie.reportFieldValidity}
          ></md-outlined-text-field>
          <md-outlined-text-field
            label="E-mail"
            required
            autocomplete="email"
            type="email"
            max="250"
            @blur=${ie.reportFieldValidity}
          ></md-outlined-text-field>
          <md-outlined-text-field
            label="Phone"
            autocomplete="tel"
            type="tel"
            max="20"
            @blur=${ie.reportFieldValidity}
          ></md-outlined-text-field>
          <md-outlined-text-field
            label="Geburtsdatum"
            required
            autocomplete="bday"
            max="8"
            type="date"
            @blur=${this.validateAge}
          ></md-outlined-text-field>
          <md-outlined-select
            label="T-Shirt Size"
            name="shirt-size"
          >
          <md-select-option selected value="bundesliga">
            <div slot="headline">S</div>
           </md-select-option>
            <md-select-option value="2-bundesliga">
             <div slot="headline">M</div>
            </md-select-option>
            <md-select-option value="3-bundesliga">
              <div slot="headline">L</div>
            </md-select-option>
            <md-select-option value="regionalliga">
              <div slot="headline">XL</div>
            </md-select-option>
          </md-outlined-select>
        </div>
      </div>
    `}_renderStepTwo(){return h`
      <div>
        <div class="form-header">
          <h2 class="display-small">Welche Skills zeichnen Dich aus?</h2>
          <h3 class="headline-small">Deine Fußballerfahrung</h3>
        </div>
        <div class="form-fields">
          <md-outlined-select
            label="Deine höchste Spielklasse"
            supporting-text="Aktuelles oder vorheriges Level"
            name="experience"
            @change=${this.handleExperienceSelection}
          >
            <md-select-option selected value="bundesliga">
              <div slot="headline">Bundesliga</div>
            </md-select-option>
            <md-select-option value="2-bundesliga">
              <div slot="headline">2. Bundesliga</div>
            </md-select-option>
            <md-select-option value="3-bundesliga">
              <div slot="headline">3. Bundesliga</div>
            </md-select-option>
            <md-select-option value="regionalliga">
              <div slot="headline">Regionalliga</div>
            </md-select-option>
            <md-select-option value="oberliga">
              <div slot="headline">Oberliga</div>
            </md-select-option>
            <md-select-option value="verbandsliga">
              <div slot="headline">Verbandsliga</div>
            </md-select-option>
            <md-select-option value="landesliga">
              <div slot="headline">Landesliga</div>
            </md-select-option>
            <md-select-option value="bezirkslga">
              <div slot="headline">Bezirkslga</div>
            </md-select-option>
            <md-select-option value="kreisklasse">
              <div slot="headline">Kreisklasse</div>
            </md-select-option>
            <md-select-option value="sonstiges">
              <div slot="headline">Sonstiges</div>
            </md-select-option>
          </md-outlined-select>
          <md-outlined-text-field
            label="Welche sonstige Spielklasse?"
            name="other-experience"
            hidden
            max="250"
            class="hidden"
          ></md-outlined-text-field>
          <md-outlined-text-field
            label="In welchem Verein spielst Du"
            required
            name="club"
            max="250"
            @blur=${ie.reportFieldValidity}
          ></md-outlined-text-field>
          <md-outlined-text-field
            label="Highlight Tape (URL)"
            type="url"
            name="highlight-tape"
            max="250"
            @blur=${ie.reportFieldValidity}
          ></md-outlined-text-field>
          <md-outlined-text-field
            label="Link Transfermarkt"
            type="url"
            name="transfermarkt"
            max="250"
            @blur=${ie.reportFieldValidity}
          ></md-outlined-text-field>
        </div>
      </div>
    `}_renderStepThree(){return h`
      <div>
        <div class="form-header">
          <h2 class="display-small">Zeig uns wer Du bist!</h2>
          <h3 class="headline-small">Dein Social Media Auftritt</h3>
        </div>
        <div class="form-fields">
          <md-outlined-text-field
            label="YouTube"
            autocomplete="username"
            max="250"
            name="youtube"
          >
            <md-icon slot="trailing-icon"> ${xe.youtube} </md-icon>
          </md-outlined-text-field>
          <md-outlined-text-field
            label="Instagram"
            autocomplete="username"
            max="250"
            name="instagram"
          >
            <md-icon slot="trailing-icon"> ${xe.instagram} </md-icon>
          </md-outlined-text-field>
          <md-outlined-text-field
            label="TikTok"
            autocomplete="username"
            max="250"
            name="tiktok"
          >
            <md-icon slot="trailing-icon"> ${xe.tiktok} </md-icon>
          </md-outlined-text-field>
          <md-outlined-text-field
            label="XING"
            autocomplete="username"
            max="250"
            name="xing"
          >
            <md-icon slot="trailing-icon"> ${xe.xing} </md-icon>
          </md-outlined-text-field>
        </div>
      </div>
    `}_renderStepFour(){return h`
      <div>
        <div class="form-header">
          <h2 class="display-small">Anmerkungen</h2>
          <h3 class="headline-small">
            Möchtest Du uns noch etwas über Dich sagen?
          </h3>
        </div>
        <div class="form-fields">
          <md-outlined-text-field type="textarea" rows="10" name="freeform">
          </md-outlined-text-field>
          <label class="label-medium inline-label">
            <md-checkbox
              touch-target="wrapper"
              @change=${this.handleLegalChange}
              data-element="tos"
              max="250"
              style="width: 4rem"
            ></md-checkbox>
            Datenschutz Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aenean ut varius turpis, nec vestibulum massa. Curabitur ex odio,
            laoreet id quam sit amet, tempus finibus neque. Duis convallis lorem
            et ornare auctor. Nam efficitur elit urna, nec sollicitudin nisi
            suscipit vitae. Ut rhoncus vitae mi non ullamcorper. Vivamus lorem
            quam, hendrerit in enim ut, pretium sodales augue. Cras nisl velit,
            efficitur quis urna nec, eleifend sagittis felis.
          </label>

          <label class="label-medium inline-label">
            <md-checkbox
              touch-target="wrapper"
              @change=${this.handleLegalChange}
              data-element="teilnahmebedingungen"
              max="250"
              style="width: 4rem"
            ></md-checkbox>
            Teilnahmebedingungen Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aenean ut varius turpis, nec vestibulum massa. Curabitur ex odio,
            laoreet id quam sit amet, tempus finibus neque. Duis convallis lorem
            et ornare auctor. Nam efficitur elit urna, nec sollicitudin nisi
            suscipit vitae. Ut rhoncus vitae mi non ullamcorper. Vivamus lorem
            quam, hendrerit in enim ut, pretium sodales augue. Cras nisl velit,
            efficitur quis urna nec, eleifend sagittis felis.
          </label>
        </div>
      </div>
    `}};T.styles=[Ao];a([l({type:String,attribute:"site-key"})],T.prototype,"captchaSiteKey",void 0);a([l({type:String,attribute:"captcha-endpoint"})],T.prototype,"captchaEndpoint",void 0);a([l({type:String,attribute:"braze-endpoint"})],T.prototype,"brazeEndpoint",void 0);a([v('md-filled-button[name="apply"]')],T.prototype,"submitButton",void 0);a([v("form#application-form")],T.prototype,"applicationFormElement",void 0);a([v('md-outlined-text-field[autocomplete="given-name"]')],T.prototype,"firstName",void 0);a([v('md-outlined-text-field[autocomplete="family-name"]')],T.prototype,"familyName",void 0);a([v('md-outlined-text-field[autocomplete="email"]')],T.prototype,"email",void 0);a([v('md-outlined-text-field[autocomplete="tel"]')],T.prototype,"tel",void 0);a([v('md-outlined-text-field[autocomplete="bday"]')],T.prototype,"birthday",void 0);a([v('md-outlined-select[name="shirt-size"]')],T.prototype,"shirt",void 0);a([v('md-outlined-select[name="experience"]')],T.prototype,"experience",void 0);a([v('md-outlined-text-field[name="other-experience"]')],T.prototype,"otherExperience",void 0);a([v('md-outlined-text-field[name="club"]')],T.prototype,"clubName",void 0);a([v('md-outlined-text-field[name="highlight-tape"]')],T.prototype,"highlightTape",void 0);a([v('md-outlined-text-field[name="transfermarkt"]')],T.prototype,"transfermarkt",void 0);a([v('md-outlined-text-field[name="youtube"]')],T.prototype,"youtube",void 0);a([v('md-outlined-text-field[name="instagram"]')],T.prototype,"instagram",void 0);a([v('md-outlined-text-field[name="tiktok"]')],T.prototype,"tiktok",void 0);a([v('md-outlined-text-field[name="freeform"]')],T.prototype,"freeform",void 0);a([v('[data-element="tos"]')],T.prototype,"termsOfServiceBox",void 0);a([v('[data-element="teilnahmebedingungen"]')],T.prototype,"teilnahmebedingungenBox",void 0);a([v('md-dialog[data-reason="success"]')],T.prototype,"successDialog",void 0);T=ie=a([w("baller-form")],T);})();
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@material/web/elevation/internal/elevation.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/elevation/internal/elevation-styles.css.js:
  (**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    *)

@material/web/elevation/elevation.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/internal/controller/attachable-controller.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/focus/internal/focus-ring.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/focus/internal/focus-ring-styles.css.js:
  (**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    *)

@material/web/focus/md-focus-ring.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@material/web/internal/motion/animation.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/ripple/internal/ripple.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/ripple/internal/ripple-styles.css.js:
  (**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    *)

@material/web/ripple/ripple.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

lit-html/static.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@material/web/internal/aria/aria.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/internal/aria/delegate.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/internal/controller/element-internals.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/internal/controller/events.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/internal/controller/form-submitter.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/button/internal/button.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/button/internal/filled-button.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/button/internal/filled-styles.css.js:
  (**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    *)

@material/web/button/internal/shared-elevation-styles.css.js:
  (**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    *)

@material/web/button/internal/shared-styles.css.js:
  (**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    *)

@material/web/button/filled-button.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/button/internal/filled-tonal-button.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/button/internal/filled-tonal-styles.css.js:
  (**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    *)

@material/web/button/filled-tonal-button.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/field/internal/field.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/field/internal/outlined-field.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/field/internal/outlined-styles.css.js:
  (**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    *)

@material/web/field/internal/shared-styles.css.js:
  (**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    *)

@material/web/field/outlined-field.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/textfield/internal/outlined-forced-colors-styles.css.js:
  (**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    *)

@material/web/textfield/internal/outlined-styles.css.js:
  (**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    *)

lit-html/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/live.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/style-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@material/web/internal/controller/string-converter.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/textfield/internal/text-field.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/textfield/internal/outlined-text-field.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/textfield/internal/shared-styles.css.js:
  (**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    *)

@material/web/textfield/outlined-text-field.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/checkbox/internal/checkbox.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/checkbox/internal/checkbox-styles.css.js:
  (**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    *)

@material/web/checkbox/checkbox.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/icon/internal/icon.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/icon/internal/icon-styles.css.js:
  (**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    *)

@material/web/icon/icon.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/select/internal/outlined-forced-colors-styles.css.js:
  (**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    *)

@material/web/menu/internal/forced-colors-styles.css.js:
  (**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    *)

@material/web/list/internal/list-navigation-helpers.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/list/internal/list-controller.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/menu/internal/controllers/shared.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/menu/internal/controllers/surfacePositionController.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/menu/internal/controllers/typeaheadController.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/menu/internal/menu.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/menu/internal/menu-styles.css.js:
  (**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    *)

@material/web/menu/menu.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/select/internal/shared.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/select/internal/select.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/select/internal/outlined-select.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/select/internal/outlined-select-styles.css.js:
  (**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    *)

@material/web/select/internal/shared-styles.css.js:
  (**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    *)

@material/web/select/outlined-select.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/menu/internal/menuitem/forced-colors-styles.css.js:
  (**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    *)

@material/web/menu/internal/menuitem/menu-item-styles.css.js:
  (**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    *)

@material/web/labs/item/internal/item.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/labs/item/internal/item-styles.css.js:
  (**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    *)

@material/web/labs/item/item.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/menu/internal/controllers/menuItemController.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/select/internal/selectoption/selectOptionController.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/select/internal/selectoption/select-option.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/select/select-option.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/divider/internal/divider.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/divider/internal/divider-styles.css.js:
  (**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    *)

@material/web/divider/divider.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/dialog/internal/animations.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/dialog/internal/dialog.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/dialog/internal/dialog-styles.css.js:
  (**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    *)

@material/web/dialog/dialog.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)
*/
//# sourceMappingURL=baller-form-bundle.js.map
