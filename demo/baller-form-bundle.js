"use strict";(()=>{function s(o,e,t,r){var i=arguments.length,n=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,e,t,r);else for(var u=o.length-1;u>=0;u--)(a=o[u])&&(n=(i<3?a(n):i>3?a(e,t,n):a(e,t))||n);return i>3&&n&&Object.defineProperty(e,t,n),n}var le=window,de=le.ShadowRoot&&(le.ShadyCSS===void 0||le.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Se=Symbol(),Ke=new WeakMap,Q=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==Se)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(de&&e===void 0){let r=t!==void 0&&t.length===1;r&&(e=Ke.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Ke.set(t,e))}return e}toString(){return this.cssText}},Ze=o=>new Q(typeof o=="string"?o:o+"",void 0,Se),m=(o,...e)=>{let t=o.length===1?o[0]:e.reduce((r,i,n)=>r+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[n+1],o[0]);return new Q(t,o,Se)},Ce=(o,e)=>{de?o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{let r=document.createElement("style"),i=le.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=t.cssText,o.appendChild(r)})},ce=de?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(let r of e.cssRules)t+=r.cssText;return Ze(t)})(o):o;var Te,ue=window,Je=ue.trustedTypes,Xt=Je?Je.emptyScript:"",Qe=ue.reactiveElementPolyfillSupport,ze={toAttribute(o,e){switch(e){case Boolean:o=o?Xt:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},et=(o,e)=>e!==o&&(e==e||o==o),ke={attribute:!0,type:String,converter:ze,reflect:!1,hasChanged:et},Ie="finalized",I=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();let e=[];return this.elementProperties.forEach((t,r)=>{let i=this._$Ep(r,t);i!==void 0&&(this._$Ev.set(i,r),e.push(i))}),e}static createProperty(e,t=ke){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){let r=typeof e=="symbol"?Symbol():"__"+e,i=this.getPropertyDescriptor(e,r,t);i!==void 0&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(i){let n=this[e];this[t]=i,this.requestUpdate(e,n,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||ke}static finalize(){if(this.hasOwnProperty(Ie))return!1;this[Ie]=!0;let e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let t=this.properties,r=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(let i of r)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let r=new Set(e.flat(1/0).reverse());for(let i of r)t.unshift(ce(i))}else e!==void 0&&t.push(ce(e));return t}static _$Ep(e,t){let r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,r;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;let t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Ce(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostConnected)===null||r===void 0?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostDisconnected)===null||r===void 0?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EO(e,t,r=ke){var i;let n=this.constructor._$Ep(e,r);if(n!==void 0&&r.reflect===!0){let a=(((i=r.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?r.converter:ze).toAttribute(t,r.type);this._$El=e,a==null?this.removeAttribute(n):this.setAttribute(n,a),this._$El=null}}_$AK(e,t){var r;let i=this.constructor,n=i._$Ev.get(e);if(n!==void 0&&this._$El!==n){let a=i.getPropertyOptions(n),u=typeof a.converter=="function"?{fromAttribute:a.converter}:((r=a.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?a.converter:ze;this._$El=n,this[n]=u.fromAttribute(t,a.type),this._$El=null}}requestUpdate(e,t,r){let i=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||et)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),r.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,n)=>this[n]=i),this._$Ei=void 0);let t=!1,r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdate)===null||n===void 0?void 0:n.call(i)}),this.update(r)):this._$Ek()}catch(i){throw t=!1,this._$Ek(),i}t&&this._$AE(r)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var i;return(i=r.hostUpdated)===null||i===void 0?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,r)=>this._$EO(r,this[r],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};I[Ie]=!0,I.elementProperties=new Map,I.elementStyles=[],I.shadowRootOptions={mode:"open"},Qe?.({ReactiveElement:I}),((Te=ue.reactiveElementVersions)!==null&&Te!==void 0?Te:ue.reactiveElementVersions=[]).push("1.6.3");var Pe,pe=window,G=pe.trustedTypes,tt=G?G.createPolicy("lit-html",{createHTML:o=>o}):void 0,fe="$lit$",P=`lit$${(Math.random()+"").slice(9)}$`,Oe="?"+P,Wt=`<${Oe}>`,H=document,te=()=>H.createComment(""),re=o=>o===null||typeof o!="object"&&typeof o!="function",lt=Array.isArray,dt=o=>lt(o)||typeof o?.[Symbol.iterator]=="function",Re=`[ 	
\f\r]`,ee=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,rt=/-->/g,ot=/>/g,B=RegExp(`>|${Re}(?:([^\\s"'>=/]+)(${Re}*=${Re}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),it=/'/g,nt=/"/g,ct=/^(?:script|style|textarea|title)$/i,ut=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),h=ut(1),pt=ut(2),w=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),at=new WeakMap,U=H.createTreeWalker(H,129,null,!1);function ft(o,e){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return tt!==void 0?tt.createHTML(e):e}var ht=(o,e)=>{let t=o.length-1,r=[],i,n=e===2?"<svg>":"",a=ee;for(let u=0;u<t;u++){let c=o[u],p,y,v=-1,x=0;for(;x<c.length&&(a.lastIndex=x,y=a.exec(c),y!==null);)x=a.lastIndex,a===ee?y[1]==="!--"?a=rt:y[1]!==void 0?a=ot:y[2]!==void 0?(ct.test(y[2])&&(i=RegExp("</"+y[2],"g")),a=B):y[3]!==void 0&&(a=B):a===B?y[0]===">"?(a=i??ee,v=-1):y[1]===void 0?v=-2:(v=a.lastIndex-y[2].length,p=y[1],a=y[3]===void 0?B:y[3]==='"'?nt:it):a===nt||a===it?a=B:a===rt||a===ot?a=ee:(a=B,i=void 0);let S=a===B&&o[u+1].startsWith("/>")?" ":"";n+=a===ee?c+Wt:v>=0?(r.push(p),c.slice(0,v)+fe+c.slice(v)+P+S):c+P+(v===-2?(r.push(void 0),u):S)}return[ft(o,n+(o[t]||"<?>")+(e===2?"</svg>":"")),r]},oe=class o{constructor({strings:e,_$litType$:t},r){let i;this.parts=[];let n=0,a=0,u=e.length-1,c=this.parts,[p,y]=ht(e,t);if(this.el=o.createElement(p,r),U.currentNode=this.el.content,t===2){let v=this.el.content,x=v.firstChild;x.remove(),v.append(...x.childNodes)}for(;(i=U.nextNode())!==null&&c.length<u;){if(i.nodeType===1){if(i.hasAttributes()){let v=[];for(let x of i.getAttributeNames())if(x.endsWith(fe)||x.startsWith(P)){let S=y[a++];if(v.push(x),S!==void 0){let ae=i.getAttribute(S.toLowerCase()+fe).split(P),D=/([.?@])?(.*)/.exec(S);c.push({type:1,index:n,name:D[2],strings:ae,ctor:D[1]==="."?me:D[1]==="?"?ve:D[1]==="@"?ye:V})}else c.push({type:6,index:n})}for(let x of v)i.removeAttribute(x)}if(ct.test(i.tagName)){let v=i.textContent.split(P),x=v.length-1;if(x>0){i.textContent=G?G.emptyScript:"";for(let S=0;S<x;S++)i.append(v[S],te()),U.nextNode(),c.push({type:2,index:++n});i.append(v[x],te())}}}else if(i.nodeType===8)if(i.data===Oe)c.push({type:2,index:n});else{let v=-1;for(;(v=i.data.indexOf(P,v+1))!==-1;)c.push({type:7,index:n}),v+=P.length-1}n++}}static createElement(e,t){let r=H.createElement("template");return r.innerHTML=e,r}};function j(o,e,t=o,r){var i,n,a,u;if(e===w)return e;let c=r!==void 0?(i=t._$Co)===null||i===void 0?void 0:i[r]:t._$Cl,p=re(e)?void 0:e._$litDirective$;return c?.constructor!==p&&((n=c?._$AO)===null||n===void 0||n.call(c,!1),p===void 0?c=void 0:(c=new p(o),c._$AT(o,t,r)),r!==void 0?((a=(u=t)._$Co)!==null&&a!==void 0?a:u._$Co=[])[r]=c:t._$Cl=c),c!==void 0&&(e=j(o,c._$AS(o,e.values),c,r)),e}var he=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;let{el:{content:r},parts:i}=this._$AD,n=((t=e?.creationScope)!==null&&t!==void 0?t:H).importNode(r,!0);U.currentNode=n;let a=U.nextNode(),u=0,c=0,p=i[0];for(;p!==void 0;){if(u===p.index){let y;p.type===2?y=new X(a,a.nextSibling,this,e):p.type===1?y=new p.ctor(a,p.name,p.strings,this,e):p.type===6&&(y=new be(a,this,e)),this._$AV.push(y),p=i[++c]}u!==p?.index&&(a=U.nextNode(),u++)}return U.currentNode=H,n}v(e){let t=0;for(let r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},X=class o{constructor(e,t,r,i){var n;this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=i,this._$Cp=(n=i?.isConnected)===null||n===void 0||n}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=j(this,e,t),re(e)?e===d||e==null||e===""?(this._$AH!==d&&this._$AR(),this._$AH=d):e!==this._$AH&&e!==w&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):dt(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==d&&re(this._$AH)?this._$AA.nextSibling.data=e:this.$(H.createTextNode(e)),this._$AH=e}g(e){var t;let{values:r,_$litType$:i}=e,n=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=oe.createElement(ft(i.h,i.h[0]),this.options)),i);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===n)this._$AH.v(r);else{let a=new he(n,this),u=a.u(this.options);a.v(r),this.$(u),this._$AH=a}}_$AC(e){let t=at.get(e.strings);return t===void 0&&at.set(e.strings,t=new oe(e)),t}T(e){lt(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,r,i=0;for(let n of e)i===t.length?t.push(r=new o(this.k(te()),this.k(te()),this,this.options)):r=t[i],r._$AI(n),i++;i<t.length&&(this._$AR(r&&r._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,t);e&&e!==this._$AB;){let i=e.nextSibling;e.remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},V=class{constructor(e,t,r,i,n){this.type=1,this._$AH=d,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=d}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,r,i){let n=this.strings,a=!1;if(n===void 0)e=j(this,e,t,0),a=!re(e)||e!==this._$AH&&e!==w,a&&(this._$AH=e);else{let u=e,c,p;for(e=n[0],c=0;c<n.length-1;c++)p=j(this,u[r+c],t,c),p===w&&(p=this._$AH[c]),a||(a=!re(p)||p!==this._$AH[c]),p===d?e=d:e!==d&&(e+=(p??"")+n[c+1]),this._$AH[c]=p}a&&!i&&this.j(e)}j(e){e===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},me=class extends V{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===d?void 0:e}},Yt=G?G.emptyScript:"",ve=class extends V{constructor(){super(...arguments),this.type=4}j(e){e&&e!==d?this.element.setAttribute(this.name,Yt):this.element.removeAttribute(this.name)}},ye=class extends V{constructor(e,t,r,i,n){super(e,t,r,i,n),this.type=5}_$AI(e,t=this){var r;if((e=(r=j(this,e,t,0))!==null&&r!==void 0?r:d)===w)return;let i=this._$AH,n=e===d&&i!==d||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,a=e!==d&&(i===d||n);n&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,r;typeof this._$AH=="function"?this._$AH.call((r=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}},be=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){j(this,e)}},mt={O:fe,P,A:Oe,C:1,M:ht,L:he,R:dt,D:j,I:X,V,H:ve,N:ye,U:me,F:be},st=pe.litHtmlPolyfillSupport;st?.(oe,X),((Pe=pe.litHtmlVersions)!==null&&Pe!==void 0?Pe:pe.litHtmlVersions=[]).push("2.8.0");var ge=(o,e,t)=>{var r,i;let n=(r=t?.renderBefore)!==null&&r!==void 0?r:e,a=n._$litPart$;if(a===void 0){let u=(i=t?.renderBefore)!==null&&i!==void 0?i:null;n._$litPart$=a=new X(e.insertBefore(te(),u),u,void 0,t??{})}return a._$AI(o),a};var Le,Me;var g=class extends I{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;let r=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=r.firstChild),r}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ge(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return w}};g.finalized=!0,g._$litElement$=!0,(Le=globalThis.litElementHydrateSupport)===null||Le===void 0||Le.call(globalThis,{LitElement:g});var vt=globalThis.litElementPolyfillSupport;vt?.({LitElement:g});((Me=globalThis.litElementVersions)!==null&&Me!==void 0?Me:globalThis.litElementVersions=[]).push("3.3.3");var $=o=>e=>typeof e=="function"?((t,r)=>(customElements.define(t,r),r))(o,e):((t,r)=>{let{kind:i,elements:n}=r;return{kind:i,elements:n,finisher(a){customElements.define(t,a)}}})(o,e);var Kt=(o,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,o)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,o)}},Zt=(o,e,t)=>{e.constructor.createProperty(t,o)};function l(o){return(e,t)=>t!==void 0?Zt(o,e,t):Kt(o,e)}function C(o){return l({...o,state:!0})}var O=({finisher:o,descriptor:e})=>(t,r)=>{var i;if(r===void 0){let n=(i=t.originalKey)!==null&&i!==void 0?i:t.key,a=e!=null?{kind:"method",placement:"prototype",key:n,descriptor:e(t.key)}:{...t,key:n};return o!=null&&(a.finisher=function(u){o(u,n)}),a}{let n=t.constructor;e!==void 0&&Object.defineProperty(t,r,e(r)),o?.(n,r)}};function E(o,e){return O({descriptor:t=>{let r={get(){var i,n;return(n=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(o))!==null&&n!==void 0?n:null},enumerable:!0,configurable:!0};if(e){let i=typeof t=="symbol"?Symbol():"__"+t;r.get=function(){var n,a;return this[i]===void 0&&(this[i]=(a=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(o))!==null&&a!==void 0?a:null),this[i]}}return r}})}var Ne,Jt=((Ne=window.HTMLSlotElement)===null||Ne===void 0?void 0:Ne.prototype.assignedElements)!=null?(o,e)=>o.assignedElements(e):(o,e)=>o.assignedNodes(e).filter(t=>t.nodeType===Node.ELEMENT_NODE);function L(o){let{slot:e,selector:t}=o??{};return O({descriptor:r=>({get(){var i;let n="slot"+(e?`[name=${e}]`:":not([name])"),a=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(n),u=a!=null?Jt(a,o):[];return t?u.filter(c=>c.matches(t)):u},enumerable:!0,configurable:!0})})}var yt=m`
  .display-large {
    font-family: var(--md-sys-typescale-display-large-font-family-name);
    font-style: var(--md-sys-typescale-display-large-font-family-style);
    font-weight: var(--md-sys-typescale-display-large-font-weight);
    font-size: var(--md-sys-typescale-display-large-font-size);
    letter-spacing: var(--md-sys-typescale-display-large-tracking);
    line-height: var(--md-sys-typescale-display-large-height);
    text-transform: var(--md-sys-typescale-display-large-text-transform);
    text-decoration: var(--md-sys-typescale-display-large-text-decoration);
  }
  .display-medium {
    font-family: var(--md-sys-typescale-display-medium-font-family-name);
    font-style: var(--md-sys-typescale-display-medium-font-family-style);
    font-weight: var(--md-sys-typescale-display-medium-font-weight);
    font-size: var(--md-sys-typescale-display-medium-font-size);
    letter-spacing: var(--md-sys-typescale-display-medium-tracking);
    line-height: var(--md-sys-typescale-display-medium-height);
    text-transform: var(--md-sys-typescale-display-medium-text-transform);
    text-decoration: var(--md-sys-typescale-display-medium-text-decoration);
  }
  .display-small {
    font-family: var(--md-sys-typescale-display-small-font-family-name);
    font-style: var(--md-sys-typescale-display-small-font-family-style);
    font-weight: var(--md-sys-typescale-display-small-font-weight);
    font-size: var(--md-sys-typescale-display-small-font-size);
    letter-spacing: var(--md-sys-typescale-display-small-tracking);
    line-height: var(--md-sys-typescale-display-small-height);
    text-transform: var(--md-sys-typescale-display-small-text-transform);
    text-decoration: var(--md-sys-typescale-display-small-text-decoration);
  }
  .headline-large {
    font-family: var(--md-sys-typescale-headline-large-font-family-name);
    font-style: var(--md-sys-typescale-headline-large-font-family-style);
    font-weight: var(--md-sys-typescale-headline-large-font-weight);
    font-size: var(--md-sys-typescale-headline-large-font-size);
    letter-spacing: var(--md-sys-typescale-headline-large-tracking);
    line-height: var(--md-sys-typescale-headline-large-height);
    text-transform: var(--md-sys-typescale-headline-large-text-transform);
    text-decoration: var(--md-sys-typescale-headline-large-text-decoration);
  }
  .headline-medium {
    font-family: var(--md-sys-typescale-headline-medium-font-family-name);
    font-style: var(--md-sys-typescale-headline-medium-font-family-style);
    font-weight: var(--md-sys-typescale-headline-medium-font-weight);
    font-size: var(--md-sys-typescale-headline-medium-font-size);
    letter-spacing: var(--md-sys-typescale-headline-medium-tracking);
    line-height: var(--md-sys-typescale-headline-medium-height);
    text-transform: var(--md-sys-typescale-headline-medium-text-transform);
    text-decoration: var(--md-sys-typescale-headline-medium-text-decoration);
  }
  .headline-small {
    font-family: var(--md-sys-typescale-headline-small-font-family-name);
    font-style: var(--md-sys-typescale-headline-small-font-family-style);
    font-weight: var(--md-sys-typescale-headline-small-font-weight);
    font-size: var(--md-sys-typescale-headline-small-font-size);
    letter-spacing: var(--md-sys-typescale-headline-small-tracking);
    line-height: var(--md-sys-typescale-headline-small-height);
    text-transform: var(--md-sys-typescale-headline-small-text-transform);
    text-decoration: var(--md-sys-typescale-headline-small-text-decoration);
  }
  .body-large {
    font-family: var(--md-sys-typescale-body-large-font-family-name);
    font-style: var(--md-sys-typescale-body-large-font-family-style);
    font-weight: var(--md-sys-typescale-body-large-font-weight);
    font-size: var(--md-sys-typescale-body-large-font-size);
    letter-spacing: var(--md-sys-typescale-body-large-tracking);
    line-height: var(--md-sys-typescale-body-large-height);
    text-transform: var(--md-sys-typescale-body-large-text-transform);
    text-decoration: var(--md-sys-typescale-body-large-text-decoration);
  }
  .body-medium {
    font-family: var(--md-sys-typescale-body-medium-font-family-name);
    font-style: var(--md-sys-typescale-body-medium-font-family-style);
    font-weight: var(--md-sys-typescale-body-medium-font-weight);
    font-size: var(--md-sys-typescale-body-medium-font-size);
    letter-spacing: var(--md-sys-typescale-body-medium-tracking);
    line-height: var(--md-sys-typescale-body-medium-height);
    text-transform: var(--md-sys-typescale-body-medium-text-transform);
    text-decoration: var(--md-sys-typescale-body-medium-text-decoration);
  }
  .body-small {
    font-family: var(--md-sys-typescale-body-small-font-family-name);
    font-style: var(--md-sys-typescale-body-small-font-family-style);
    font-weight: var(--md-sys-typescale-body-small-font-weight);
    font-size: var(--md-sys-typescale-body-small-font-size);
    letter-spacing: var(--md-sys-typescale-body-small-tracking);
    line-height: var(--md-sys-typescale-body-small-height);
    text-transform: var(--md-sys-typescale-body-small-text-transform);
    text-decoration: var(--md-sys-typescale-body-small-text-decoration);
  }
  .label-large {
    font-family: var(--md-sys-typescale-label-large-font-family-name);
    font-style: var(--md-sys-typescale-label-large-font-family-style);
    font-weight: var(--md-sys-typescale-label-large-font-weight);
    font-size: var(--md-sys-typescale-label-large-font-size);
    letter-spacing: var(--md-sys-typescale-label-large-tracking);
    line-height: var(--md-sys-typescale-label-large-height);
    text-transform: var(--md-sys-typescale-label-large-text-transform);
    text-decoration: var(--md-sys-typescale-label-large-text-decoration);
  }
  .label-medium {
    font-family: var(--md-sys-typescale-label-medium-font-family-name);
    font-style: var(--md-sys-typescale-label-medium-font-family-style);
    font-weight: var(--md-sys-typescale-label-medium-font-weight);
    font-size: var(--md-sys-typescale-label-medium-font-size);
    letter-spacing: var(--md-sys-typescale-label-medium-tracking);
    line-height: var(--md-sys-typescale-label-medium-height);
    text-transform: var(--md-sys-typescale-label-medium-text-transform);
    text-decoration: var(--md-sys-typescale-label-medium-text-decoration);
  }
  .label-small {
    font-family: var(--md-sys-typescale-label-small-font-family-name);
    font-style: var(--md-sys-typescale-label-small-font-family-style);
    font-weight: var(--md-sys-typescale-label-small-font-weight);
    font-size: var(--md-sys-typescale-label-small-font-size);
    letter-spacing: var(--md-sys-typescale-label-small-tracking);
    line-height: var(--md-sys-typescale-label-small-height);
    text-transform: var(--md-sys-typescale-label-small-text-transform);
    text-decoration: var(--md-sys-typescale-label-small-text-decoration);
  }
  .title-large {
    font-family: var(--md-sys-typescale-title-large-font-family-name);
    font-style: var(--md-sys-typescale-title-large-font-family-style);
    font-weight: var(--md-sys-typescale-title-large-font-weight);
    font-size: var(--md-sys-typescale-title-large-font-size);
    letter-spacing: var(--md-sys-typescale-title-large-tracking);
    line-height: var(--md-sys-typescale-title-large-height);
    text-transform: var(--md-sys-typescale-title-large-text-transform);
    text-decoration: var(--md-sys-typescale-title-large-text-decoration);
  }
  .title-medium {
    font-family: var(--md-sys-typescale-title-medium-font-family-name);
    font-style: var(--md-sys-typescale-title-medium-font-family-style);
    font-weight: var(--md-sys-typescale-title-medium-font-weight);
    font-size: var(--md-sys-typescale-title-medium-font-size);
    letter-spacing: var(--md-sys-typescale-title-medium-tracking);
    line-height: var(--md-sys-typescale-title-medium-height);
    text-transform: var(--md-sys-typescale-title-medium-text-transform);
    text-decoration: var(--md-sys-typescale-title-medium-text-decoration);
  }
  .title-small {
    font-family: var(--md-sys-typescale-title-small-font-family-name);
    font-style: var(--md-sys-typescale-title-small-font-family-style);
    font-weight: var(--md-sys-typescale-title-small-font-weight);
    font-size: var(--md-sys-typescale-title-small-font-size);
    letter-spacing: var(--md-sys-typescale-title-small-tracking);
    line-height: var(--md-sys-typescale-title-small-height);
    text-transform: var(--md-sys-typescale-title-small-text-transform);
    text-decoration: var(--md-sys-typescale-title-small-text-decoration);
  }
`,so=m`
  .primary {
    background-color: var(--md-sys-color-primary);
  }
  .primary-text {
    color: var(--md-sys-color-primary);
  }
  .on-primary {
    background-color: var(--md-sys-color-on-primary);
  }
  .on-primary-text {
    color: var(--md-sys-color-on-primary);
  }
  .primary-container {
    background-color: var(--md-sys-color-primary-container);
  }
  .primary-container-text {
    color: var(--md-sys-color-primary-container);
  }
  .on-primary-container {
    background-color: var(--md-sys-color-on-primary-container);
  }
  .on-primary-container-text {
    color: var(--md-sys-color-on-primary-container);
  }
  .secondary {
    background-color: var(--md-sys-color-secondary);
  }
  .secondary-text {
    color: var(--md-sys-color-secondary);
  }
  .on-secondary {
    background-color: var(--md-sys-color-on-secondary);
  }
  .on-secondary-text {
    color: var(--md-sys-color-on-secondary);
  }
  .secondary-container {
    background-color: var(--md-sys-color-secondary-container);
  }
  .secondary-container-text {
    color: var(--md-sys-color-secondary-container);
  }
  .on-secondary-container {
    background-color: var(--md-sys-color-on-secondary-container);
  }
  .on-secondary-container-text {
    color: var(--md-sys-color-on-secondary-container);
  }
  .tertiary {
    background-color: var(--md-sys-color-tertiary);
  }
  .tertiary-text {
    color: var(--md-sys-color-tertiary);
  }
  .on-tertiary {
    background-color: var(--md-sys-color-on-tertiary);
  }
  .on-tertiary-text {
    color: var(--md-sys-color-on-tertiary);
  }
  .tertiary-container {
    background-color: var(--md-sys-color-tertiary-container);
  }
  .tertiary-container-text {
    color: var(--md-sys-color-tertiary-container);
  }
  .on-tertiary-container {
    background-color: var(--md-sys-color-on-tertiary-container);
  }
  .on-tertiary-container-text {
    color: var(--md-sys-color-on-tertiary-container);
  }
  .error {
    background-color: var(--md-sys-color-error);
  }
  .error-text {
    color: var(--md-sys-color-error);
  }
  .error-container {
    background-color: var(--md-sys-color-error-container);
  }
  .error-container-text {
    color: var(--md-sys-color-error-container);
  }
  .on-error {
    background-color: var(--md-sys-color-on-error);
  }
  .on-error-text {
    color: var(--md-sys-color-on-error);
  }
  .on-error-container {
    background-color: var(--md-sys-color-on-error-container);
  }
  .on-error-container-text {
    color: var(--md-sys-color-on-error-container);
  }
  .background {
    background-color: var(--md-sys-color-background);
  }
  .background-text {
    color: var(--md-sys-color-background);
  }
  .on-background {
    background-color: var(--md-sys-color-on-background);
  }
  .on-background-text {
    color: var(--md-sys-color-on-background);
  }
  .surface {
    background-color: var(--md-sys-color-surface);
  }
  .surface-text {
    color: var(--md-sys-color-surface);
  }
  .on-surface {
    background-color: var(--md-sys-color-on-surface);
  }
  .on-surface-text {
    color: var(--md-sys-color-on-surface);
  }
  .surface-variant {
    background-color: var(--md-sys-color-surface-variant);
  }
  .surface-variant-text {
    color: var(--md-sys-color-surface-variant);
  }
  .on-surface-variant {
    background-color: var(--md-sys-color-on-surface-variant);
  }
  .on-surface-variant-text {
    color: var(--md-sys-color-on-surface-variant);
  }
  .outline {
    background-color: var(--md-sys-color-outline);
  }
  .outline-text {
    color: var(--md-sys-color-outline);
  }
  .inverse-on-surface {
    background-color: var(--md-sys-color-inverse-on-surface);
  }
  .inverse-on-surface-text {
    color: var(--md-sys-color-inverse-on-surface);
  }
  .inverse-surface {
    background-color: var(--md-sys-color-inverse-surface);
  }
  .inverse-surface-text {
    color: var(--md-sys-color-inverse-surface);
  }
  .inverse-primary {
    background-color: var(--md-sys-color-inverse-primary);
  }
  .inverse-primary-text {
    color: var(--md-sys-color-inverse-primary);
  }
  .shadow {
    background-color: var(--md-sys-color-shadow);
  }
  .shadow-text {
    color: var(--md-sys-color-shadow);
  }
  .surface-tint {
    background-color: var(--md-sys-color-surface-tint);
  }
  .surface-tint-text {
    color: var(--md-sys-color-surface-tint);
  }
  .outline-variant {
    background-color: var(--md-sys-color-outline-variant);
  }
  .outline-variant-text {
    color: var(--md-sys-color-outline-variant);
  }
  .scrim {
    background-color: var(--md-sys-color-scrim);
  }
  .scrim-text {
    color: var(--md-sys-color-scrim);
  }
`;var bt=m`
  :host {
    display: block;
    padding: 25px;
    color: var(--baller-form-text-color, var(--md-sys-color-on-surface));
  }

  md-linear-progress {
    width: 100%;
  }

  .level0 {
    --md-elevation-level: 0;
  }

  .level1 {
    --md-elevation-level: 1;
  }

  .level2 {
    --md-elevation-level: 2;
  }

  .level3 {
    --md-elevation-level: 3;
  }

  .level4 {
    --md-elevation-level: 4;
  }

  .level5 {
    --md-elevation-level: 5;
  }

  #form-wrapper {
    border: 1px solid var(--md-sys-color-outline);
    padding: 1.5rem;
    border-radius: 5px;
  }

  .row {
    display: flex;
  }

  .row-reverse {
    display: flex;
    flex-direction: row-reverse;
  }

  .column {
    display: flex;
    flex-direction: column;
  }

  .form-elements-container {
    gap: 1rem;
  }
`;var xe=class extends g{connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}render(){return h`<span class="shadow"></span>`}};var gt=m`:host{--_level: var(--md-elevation-level, 0);--_shadow-color: var(--md-elevation-shadow-color, var(--md-sys-color-shadow, #000));display:flex;pointer-events:none}:host,.shadow,.shadow::before,.shadow::after{border-radius:inherit;inset:0;position:absolute;transition-duration:inherit;transition-property:inherit;transition-timing-function:inherit}.shadow::before,.shadow::after{content:"";transition-property:box-shadow,opacity}.shadow::before{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 3,1) + 2*clamp(0,var(--_level) - 4,1))) calc(1px*(2*clamp(0,var(--_level),1) + clamp(0,var(--_level) - 2,1) + clamp(0,var(--_level) - 4,1))) 0px var(--_shadow-color);opacity:.3}.shadow::after{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 1,1) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(3*clamp(0,var(--_level),2) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(clamp(0,var(--_level),4) + 2*clamp(0,var(--_level) - 4,1))) var(--_shadow-color);opacity:.15}/*# sourceMappingURL=elevation-styles.css.map */
`;var De=class extends xe{};De.styles=[gt];De=s([$("md-elevation")],De);var xt=Symbol("attachableController"),_t;!1||(_t=new MutationObserver(o=>{for(let e of o)e.target[xt]?.hostConnected()}));var W=class{get htmlFor(){return this.host.getAttribute("for")}set htmlFor(e){e===null?this.host.removeAttribute("for"):this.host.setAttribute("for",e)}get control(){return this.host.hasAttribute("for")?!this.htmlFor||!this.host.isConnected?null:this.host.getRootNode().querySelector(`#${this.htmlFor}`):this.currentControl||this.host.parentElement}set control(e){e?this.attach(e):this.detach()}constructor(e,t){this.host=e,this.onControlChange=t,this.currentControl=null,e.addController(this),e[xt]=this,_t?.observe(e,{attributeFilter:["for"]})}attach(e){e!==this.currentControl&&(this.setCurrentControl(e),this.host.removeAttribute("for"))}detach(){this.setCurrentControl(null),this.host.setAttribute("for","")}hostConnected(){this.setCurrentControl(this.control)}hostDisconnected(){this.setCurrentControl(null)}setCurrentControl(e){this.onControlChange(this.currentControl,e),this.currentControl=e}};var Qt=["focusin","focusout","pointerdown"],Y=class extends g{constructor(){super(...arguments),this.visible=!1,this.inward=!1,this.attachableController=new W(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(e){this.attachableController.htmlFor=e}get control(){return this.attachableController.control}set control(e){this.attachableController.control=e}attach(e){this.attachableController.attach(e)}detach(){this.attachableController.detach()}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}handleEvent(e){if(!e[wt]){switch(e.type){default:return;case"focusin":this.visible=this.control?.matches(":focus-visible")??!1;break;case"focusout":case"pointerdown":this.visible=!1;break}e[wt]=!0}}onControlChange(e,t){if(!!1)for(let r of Qt)e?.removeEventListener(r,this),t?.addEventListener(r,this)}update(e){e.has("visible")&&this.dispatchEvent(new Event("visibility-changed")),super.update(e)}};s([l({type:Boolean,reflect:!0})],Y.prototype,"visible",void 0);s([l({type:Boolean,reflect:!0})],Y.prototype,"inward",void 0);var wt=Symbol("handledByFocusRing");var $t=m`:host{animation-delay:0s,calc(var(--md-focus-ring-duration, 600ms)*.25);animation-duration:calc(var(--md-focus-ring-duration, 600ms)*.25),calc(var(--md-focus-ring-duration, 600ms)*.75);animation-timing-function:cubic-bezier(0.2, 0, 0, 1);box-sizing:border-box;color:var(--md-focus-ring-color, var(--md-sys-color-secondary, #625b71));display:none;pointer-events:none;position:absolute}:host([visible]){display:flex}:host(:not([inward])){animation-name:outward-grow,outward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));inset:calc(-1*var(--md-focus-ring-outward-offset, 2px));outline:var(--md-focus-ring-width, 3px) solid currentColor}:host([inward]){animation-name:inward-grow,inward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border:var(--md-focus-ring-width, 3px) solid currentColor;inset:var(--md-focus-ring-inward-offset, 0px)}@keyframes outward-grow{from{outline-width:0}to{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes outward-shrink{from{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-grow{from{border-width:0}to{border-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-shrink{from{border-width:var(--md-focus-ring-active-width, 8px)}}@media(prefers-reduced-motion){:host{animation:none}}/*# sourceMappingURL=focus-ring-styles.css.map */
`;var Be=class extends Y{};Be.styles=[$t];Be=s([$("md-focus-ring")],Be);var k={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},K=o=>(...e)=>({_$litDirective$:o,values:e}),M=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var T=K(class extends M{constructor(o){var e;if(super(o),o.type!==k.ATTRIBUTE||o.name!=="class"||((e=o.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(o){return" "+Object.keys(o).filter(e=>o[e]).join(" ")+" "}update(o,[e]){var t,r;if(this.it===void 0){this.it=new Set,o.strings!==void 0&&(this.nt=new Set(o.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(let n in e)e[n]&&!(!((t=this.nt)===null||t===void 0)&&t.has(n))&&this.it.add(n);return this.render(e)}let i=o.element.classList;this.it.forEach(n=>{n in e||(i.remove(n),this.it.delete(n))});for(let n in e){let a=!!e[n];a===this.it.has(n)||!((r=this.nt)===null||r===void 0)&&r.has(n)||(a?(i.add(n),this.it.add(n)):(i.remove(n),this.it.delete(n)))}return w}});var _e={STANDARD:"cubic-bezier(0.2, 0, 0, 1)",STANDARD_ACCELERATE:"cubic-bezier(.3,0,1,1)",STANDARD_DECELERATE:"cubic-bezier(0,0,0,1)",EMPHASIZED:"cubic-bezier(.3,0,0,1)",EMPHASIZED_ACCELERATE:"cubic-bezier(.3,0,.8,.15)",EMPHASIZED_DECELERATE:"cubic-bezier(.05,.7,.1,1)"};var er=450,At=225,tr=.2,rr=10,or=75,ir=.35,nr="::after",ar="forwards",A;(function(o){o[o.INACTIVE=0]="INACTIVE",o[o.TOUCH_DELAY=1]="TOUCH_DELAY",o[o.HOLDING=2]="HOLDING",o[o.WAITING_FOR_CLICK=3]="WAITING_FOR_CLICK"})(A||(A={}));var sr=["click","contextmenu","pointercancel","pointerdown","pointerenter","pointerleave","pointerup"],lr=150,N=class extends g{constructor(){super(...arguments),this.disabled=!1,this.hovered=!1,this.pressed=!1,this.rippleSize="",this.rippleScale="",this.initialSize=0,this.state=A.INACTIVE,this.checkBoundsAfterContextMenu=!1,this.attachableController=new W(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(e){this.attachableController.htmlFor=e}get control(){return this.attachableController.control}set control(e){this.attachableController.control=e}attach(e){this.attachableController.attach(e)}detach(){this.attachableController.detach()}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}render(){let e={hovered:this.hovered,pressed:this.pressed};return h`<div class="surface ${T(e)}"></div>`}update(e){e.has("disabled")&&this.disabled&&(this.hovered=!1,this.pressed=!1),super.update(e)}handlePointerenter(e){this.shouldReactToEvent(e)&&(this.hovered=!0)}handlePointerleave(e){this.shouldReactToEvent(e)&&(this.hovered=!1,this.state!==A.INACTIVE&&this.endPressAnimation())}handlePointerup(e){if(this.shouldReactToEvent(e)){if(this.state===A.HOLDING){this.state=A.WAITING_FOR_CLICK;return}if(this.state===A.TOUCH_DELAY){this.state=A.WAITING_FOR_CLICK,this.startPressAnimation(this.rippleStartEvent);return}}}async handlePointerdown(e){if(this.shouldReactToEvent(e)){if(this.rippleStartEvent=e,!this.isTouch(e)){this.state=A.WAITING_FOR_CLICK,this.startPressAnimation(e);return}this.checkBoundsAfterContextMenu&&!this.inBounds(e)||(this.checkBoundsAfterContextMenu=!1,this.state=A.TOUCH_DELAY,await new Promise(t=>{setTimeout(t,lr)}),this.state===A.TOUCH_DELAY&&(this.state=A.HOLDING,this.startPressAnimation(e)))}}handleClick(){if(!this.disabled){if(this.state===A.WAITING_FOR_CLICK){this.endPressAnimation();return}this.state===A.INACTIVE&&(this.startPressAnimation(),this.endPressAnimation())}}handlePointercancel(e){this.shouldReactToEvent(e)&&this.endPressAnimation()}handleContextmenu(){this.disabled||(this.checkBoundsAfterContextMenu=!0,this.endPressAnimation())}determineRippleSize(){let{height:e,width:t}=this.getBoundingClientRect(),r=Math.max(e,t),i=Math.max(ir*r,or),n=Math.floor(r*tr),u=Math.sqrt(t**2+e**2)+rr;this.initialSize=n,this.rippleScale=`${(u+i)/n}`,this.rippleSize=`${n}px`}getNormalizedPointerEventCoords(e){let{scrollX:t,scrollY:r}=window,{left:i,top:n}=this.getBoundingClientRect(),a=t+i,u=r+n,{pageX:c,pageY:p}=e;return{x:c-a,y:p-u}}getTranslationCoordinates(e){let{height:t,width:r}=this.getBoundingClientRect(),i={x:(r-this.initialSize)/2,y:(t-this.initialSize)/2},n;return e instanceof PointerEvent?n=this.getNormalizedPointerEventCoords(e):n={x:r/2,y:t/2},n={x:n.x-this.initialSize/2,y:n.y-this.initialSize/2},{startPoint:n,endPoint:i}}startPressAnimation(e){if(!this.mdRoot)return;this.pressed=!0,this.growAnimation?.cancel(),this.determineRippleSize();let{startPoint:t,endPoint:r}=this.getTranslationCoordinates(e),i=`${t.x}px, ${t.y}px`,n=`${r.x}px, ${r.y}px`;this.growAnimation=this.mdRoot.animate({top:[0,0],left:[0,0],height:[this.rippleSize,this.rippleSize],width:[this.rippleSize,this.rippleSize],transform:[`translate(${i}) scale(1)`,`translate(${n}) scale(${this.rippleScale})`]},{pseudoElement:nr,duration:er,easing:_e.STANDARD,fill:ar})}async endPressAnimation(){this.state=A.INACTIVE;let e=this.growAnimation,t=e?.currentTime??1/0;if(t>=At){this.pressed=!1;return}await new Promise(r=>{setTimeout(r,At-t)}),this.growAnimation===e&&(this.pressed=!1)}shouldReactToEvent(e){if(this.disabled||!e.isPrimary||this.rippleStartEvent&&this.rippleStartEvent.pointerId!==e.pointerId)return!1;if(e.type==="pointerenter"||e.type==="pointerleave")return!this.isTouch(e);let t=e.buttons===1;return this.isTouch(e)||t}inBounds({x:e,y:t}){let{top:r,left:i,bottom:n,right:a}=this.getBoundingClientRect();return e>=i&&e<=a&&t>=r&&t<=n}isTouch({pointerType:e}){return e==="touch"}async handleEvent(e){switch(e.type){case"click":this.handleClick();break;case"contextmenu":this.handleContextmenu();break;case"pointercancel":this.handlePointercancel(e);break;case"pointerdown":await this.handlePointerdown(e);break;case"pointerenter":this.handlePointerenter(e);break;case"pointerleave":this.handlePointerleave(e);break;case"pointerup":this.handlePointerup(e);break;default:break}}onControlChange(e,t){if(!!1)for(let r of sr)e?.removeEventListener(r,this),t?.addEventListener(r,this)}};s([l({type:Boolean,reflect:!0})],N.prototype,"disabled",void 0);s([C()],N.prototype,"hovered",void 0);s([C()],N.prototype,"pressed",void 0);s([E(".surface")],N.prototype,"mdRoot",void 0);var Et=m`:host{--_hover-color: var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-opacity: var(--md-ripple-hover-opacity, 0.08);--_pressed-color: var(--md-ripple-pressed-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-opacity: var(--md-ripple-pressed-opacity, 0.12);display:flex;margin:auto;pointer-events:none}:host([disabled]){display:none}@media(forced-colors: active){:host{display:none}}:host,.surface{border-radius:inherit;position:absolute;inset:0;overflow:hidden}.surface{-webkit-tap-highlight-color:rgba(0,0,0,0)}.surface::before,.surface::after{content:"";opacity:0;position:absolute}.surface::before{background-color:var(--_hover-color);inset:0;transition:opacity 15ms linear,background-color 15ms linear}.surface::after{background:radial-gradient(closest-side, var(--_pressed-color) max(100% - 70px, 65%), transparent 100%);transform-origin:center center;transition:opacity 375ms linear}.hovered::before{background-color:var(--_hover-color);opacity:var(--_hover-opacity)}.pressed::after{opacity:var(--_pressed-opacity);transition-duration:105ms}/*# sourceMappingURL=ripple-styles.css.map */
`;var Ue=class extends N{};Ue.styles=[Et];Ue=s([$("md-ripple")],Ue);var Ct=Symbol.for(""),dr=o=>{if(o?.r===Ct)return o?._$litStatic$};var F=(o,...e)=>({_$litStatic$:e.reduce((t,r,i)=>t+(n=>{if(n._$litStatic$!==void 0)return n._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${n}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(r)+o[i+1],o[0]),r:Ct}),St=new Map,Tt=o=>(e,...t)=>{let r=t.length,i,n,a=[],u=[],c,p=0,y=!1;for(;p<r;){for(c=e[p];p<r&&(n=t[p],(i=dr(n))!==void 0);)c+=i+e[++p],y=!0;p!==r&&u.push(n),a.push(c),p++}if(p===r&&a.push(e[r]),y){let v=a.join("$$lit$$");(e=St.get(v))===void 0&&(a.raw=a,St.set(v,e=a)),t=u}return o(e,...t)},we=Tt(h),si=Tt(pt);var He=["ariaAtomic","ariaAutoComplete","ariaBusy","ariaChecked","ariaColCount","ariaColIndex","ariaColSpan","ariaCurrent","ariaDisabled","ariaExpanded","ariaHasPopup","ariaHidden","ariaInvalid","ariaKeyShortcuts","ariaLabel","ariaLevel","ariaLive","ariaModal","ariaMultiLine","ariaMultiSelectable","ariaOrientation","ariaPlaceholder","ariaPosInSet","ariaPressed","ariaReadOnly","ariaRequired","ariaRoleDescription","ariaRowCount","ariaRowIndex","ariaRowSpan","ariaSelected","ariaSetSize","ariaSort","ariaValueMax","ariaValueMin","ariaValueNow","ariaValueText"],pi=He.map(je);function je(o){return o.replace("aria","aria-").replace(/Elements?/g,"").toLowerCase()}function Z(o){for(let e of He)o.createProperty(e,{attribute:je(e),reflect:!0});o.addInitializer(e=>{let t={hostConnected(){e.setAttribute("role","presentation")}};e.addController(t)})}var ie=Symbol("internals");function kt(o,e){e.bubbles&&(!o.shadowRoot||e.composed)&&e.stopPropagation();let t=Reflect.construct(e.constructor,[e.type,e]),r=o.dispatchEvent(t);return r||e.preventDefault(),r}function zt(o){let e=new MouseEvent("click",{bubbles:!0});return o.dispatchEvent(e),e}function It(o){return o.currentTarget!==o.target||o.composedPath()[0]!==o.target||o.target.disabled?!1:!cr(o)}function cr(o){let e=Ve;return e&&(o.preventDefault(),o.stopImmediatePropagation()),ur(),e}var Ve=!1;async function ur(){Ve=!0,await null,Ve=!1}function Pt(o){!1||o.addInitializer(e=>{let t=e;t.addEventListener("click",async r=>{let{type:i,[ie]:n}=t,{form:a}=n;if(!(!a||i==="button")&&(await new Promise(u=>{u()}),!r.defaultPrevented)){if(i==="reset"){a.reset();return}a.addEventListener("submit",u=>{Object.defineProperty(u,"submitter",{configurable:!0,enumerable:!0,get:()=>t})},{capture:!0,once:!0}),n.setFormValue(t.value),a.requestSubmit()}})})}var Rt,_=class extends g{get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get form(){return this[ie].form}constructor(){super(),this.disabled=!1,this.href="",this.target="",this.trailingIcon=!1,this.hasIcon=!1,this.type="submit",this.value="",this[Rt]=this.attachInternals(),this.handleActivationClick=e=>{!It(e)||!this.buttonElement||(this.focus(),zt(this.buttonElement))},!1||this.addEventListener("click",this.handleActivationClick)}focus(){this.buttonElement?.focus()}blur(){this.buttonElement?.blur()}render(){let e=this.disabled&&!this.href,t=this.href?F`a`:F`button`,{ariaLabel:r,ariaHasPopup:i,ariaExpanded:n}=this;return we`
      <${t}
        class="button ${T(this.getRenderClasses())}"
        ?disabled=${e}
        aria-label="${r||d}"
        aria-haspopup="${i||d}"
        aria-expanded="${n||d}"
        href=${this.href||d}
        target=${this.target||d}
      >${this.renderContent()}</${t}>`}getRenderClasses(){return{"button--icon-leading":!this.trailingIcon&&this.hasIcon,"button--icon-trailing":this.trailingIcon&&this.hasIcon}}renderContent(){let e=this.disabled&&!this.href,t=h`<slot name="icon" @slotchange="${this.handleSlotChange}"></slot>`;return h`
      ${this.renderElevation?.()}
      ${this.renderOutline?.()}
      <md-focus-ring part="focus-ring"></md-focus-ring>
      <md-ripple class="button__ripple" ?disabled="${e}"></md-ripple>
      <span class="touch"></span>
      ${this.trailingIcon?d:t}
      <span class="button__label"><slot></slot></span>
      ${this.trailingIcon?t:d}
    `}handleSlotChange(){this.hasIcon=this.assignedIcons.length>0}};Rt=ie;Z(_),Pt(_);_.formAssociated=!0;_.shadowRootOptions={mode:"open",delegatesFocus:!0};s([l({type:Boolean,reflect:!0})],_.prototype,"disabled",void 0);s([l()],_.prototype,"href",void 0);s([l()],_.prototype,"target",void 0);s([l({type:Boolean,attribute:"trailing-icon"})],_.prototype,"trailingIcon",void 0);s([l({type:Boolean,attribute:"has-icon"})],_.prototype,"hasIcon",void 0);s([l()],_.prototype,"type",void 0);s([l()],_.prototype,"value",void 0);s([E(".button")],_.prototype,"buttonElement",void 0);s([L({slot:"icon",flatten:!0})],_.prototype,"assignedIcons",void 0);var $e=class extends _{renderElevation(){return h`<md-elevation></md-elevation>`}};var Ot=m`:host{--_container-color: var(--md-filled-button-container-color, var(--md-sys-color-primary, #6750a4));--_container-elevation: var(--md-filled-button-container-elevation, 0);--_container-height: var(--md-filled-button-container-height, 40px);--_container-shadow-color: var(--md-filled-button-container-shadow-color, var(--md-sys-color-shadow, #000));--_container-shape: var(--md-filled-button-container-shape, 9999px);--_disabled-container-color: var(--md-filled-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-elevation: var(--md-filled-button-disabled-container-elevation, 0);--_disabled-container-opacity: var(--md-filled-button-disabled-container-opacity, 0.12);--_disabled-label-text-color: var(--md-filled-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-button-disabled-label-text-opacity, 0.38);--_focus-container-elevation: var(--md-filled-button-focus-container-elevation, 0);--_focus-label-text-color: var(--md-filled-button-focus-label-text-color, var(--md-sys-color-on-primary, #fff));--_hover-container-elevation: var(--md-filled-button-hover-container-elevation, 1);--_hover-label-text-color: var(--md-filled-button-hover-label-text-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-color: var(--md-filled-button-hover-state-layer-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-opacity: var(--md-filled-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-filled-button-label-text-color, var(--md-sys-color-on-primary, #fff));--_label-text-font: var(--md-filled-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-filled-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-filled-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-container-elevation: var(--md-filled-button-pressed-container-elevation, 0);--_pressed-label-text-color: var(--md-filled-button-pressed-label-text-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-color: var(--md-filled-button-pressed-state-layer-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-opacity: var(--md-filled-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-filled-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-button-focus-icon-color, var(--md-sys-color-on-primary, #fff));--_hover-icon-color: var(--md-filled-button-hover-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-color: var(--md-filled-button-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-size: var(--md-filled-button-icon-size, 18px);--_pressed-icon-color: var(--md-filled-button-pressed-icon-color, var(--md-sys-color-on-primary, #fff));--_leading-space: var(--md-filled-button-leading-space, 24px);--_trailing-space: var(--md-filled-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-filled-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-filled-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-filled-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-filled-button-with-trailing-icon-trailing-space, 16px);--_container-shape-start-start: var( --md-filled-button-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-filled-button-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-filled-button-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-filled-button-container-shape-end-start, var(--_container-shape) )}/*# sourceMappingURL=filled-styles.css.map */
`;var Lt=m`md-elevation{transition-duration:280ms}.button:disabled md-elevation{transition:none}.button{--md-elevation-level: var(--_container-elevation);--md-elevation-shadow-color: var(--_container-shadow-color)}.button:focus{--md-elevation-level: var(--_focus-container-elevation)}.button:hover{--md-elevation-level: var(--_hover-container-elevation)}.button:active{--md-elevation-level: var(--_pressed-container-elevation)}.button:disabled{--md-elevation-level: var(--_disabled-container-elevation)}/*# sourceMappingURL=shared-elevation-styles.css.map */
`;var Mt=m`:host{display:inline-flex;height:var(--_container-height);outline:none;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);-webkit-tap-highlight-color:rgba(0,0,0,0);vertical-align:top;--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) 0}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host([disabled]){cursor:default;pointer-events:none}.button{display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-inline-size:64px;border:none;outline:none;user-select:none;-webkit-appearance:none;vertical-align:middle;background:rgba(0,0,0,0);text-decoration:none;inline-size:100%;position:relative;z-index:0;height:100%;font:inherit;color:var(--_label-text-color);padding-inline-start:var(--_leading-space);padding-inline-end:var(--_trailing-space);gap:8px}.button::before{background-color:var(--_container-color);border-radius:inherit;content:"";inset:0;position:absolute}.button::-moz-focus-inner{padding:0;border:0}.button:hover{color:var(--_hover-label-text-color);cursor:pointer}.button:focus{color:var(--_focus-label-text-color)}.button:active{color:var(--_pressed-label-text-color);outline:none}.button:disabled .button__label{color:var(--_disabled-label-text-color);opacity:var(--_disabled-label-text-opacity)}.button:disabled::before{background-color:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}@media(forced-colors: active){.button::before{content:"";box-sizing:border-box;border:1px solid CanvasText;border-radius:inherit;inset:0;pointer-events:none;position:absolute}.button:disabled{--_disabled-icon-opacity: 1;--_disabled-container-opacity: 1;--_disabled-label-text-opacity: 1}}.button,.button__ripple{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.button::after,.button::before,md-elevation,.button__ripple{z-index:-1}.button--icon-leading{padding-inline-start:var(--_with-leading-icon-leading-space);padding-inline-end:var(--_with-leading-icon-trailing-space)}.button--icon-trailing{padding-inline-start:var(--_with-trailing-icon-leading-space);padding-inline-end:var(--_with-trailing-icon-trailing-space)}.link-button-wrapper{inline-size:100%}.button ::slotted([slot=icon]){display:inline-flex;position:relative;writing-mode:horizontal-tb;fill:currentColor;color:var(--_icon-color);font-size:var(--_icon-size);inline-size:var(--_icon-size);block-size:var(--_icon-size)}.button:hover ::slotted([slot=icon]){color:var(--_hover-icon-color)}.button:focus ::slotted([slot=icon]){color:var(--_focus-icon-color)}.button:active ::slotted([slot=icon]){color:var(--_pressed-icon-color)}.button:disabled ::slotted([slot=icon]){color:var(--_disabled-icon-color);opacity:var(--_disabled-icon-opacity)}.touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}:host([touch-target=none]) .touch{display:none}/*# sourceMappingURL=shared-styles.css.map */
`;var Fe=class extends $e{};Fe.styles=[Mt,Lt,Ot];Fe=s([$("md-filled-button")],Fe);var b=class extends g{constructor(){super(...arguments),this.disabled=!1,this.error=!1,this.focused=!1,this.label="",this.populated=!1,this.required=!1,this.resizable=!1,this.supportingText="",this.errorText="",this.count=-1,this.max=-1,this.hasStart=!1,this.hasEnd=!1,this.isAnimating=!1,this.refreshErrorAlert=!1,this.disableTransitions=!1}get counterText(){return this.count<0||this.max<0?"":`${this.count} / ${this.max}`}get supportingOrErrorText(){return this.error&&this.errorText?this.errorText:this.supportingText}reannounceError(){this.refreshErrorAlert=!0}update(e){e.has("disabled")&&e.get("disabled")!==void 0&&(this.disableTransitions=!0),this.disabled&&this.focused&&(e.set("focused",!0),this.focused=!1),this.animateLabelIfNeeded({wasFocused:e.get("focused"),wasPopulated:e.get("populated")}),super.update(e)}render(){let e=this.renderLabel(!0),t=this.renderLabel(!1),r=this.renderOutline?.(e),i={disabled:this.disabled,"disable-transitions":this.disableTransitions,error:this.error&&!this.disabled,focused:this.focused,"with-start":this.hasStart,"with-end":this.hasEnd,populated:this.populated,resizable:this.resizable,required:this.required,"no-label":!this.label};return h`
      <div class="field ${T(i)}">
        <div class="container-overflow">
          ${this.renderBackground?.()}
          ${this.renderIndicator?.()}
          ${r}
          <div class="container">
            <div class="start">
              <slot name="start"></slot>
            </div>
            <div class="middle">
              <div class="label-wrapper">
                ${t}
                ${r?d:e}
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
    `}updated(e){(e.has("supportingText")||e.has("errorText")||e.has("count")||e.has("max"))&&this.updateSlottedAriaDescribedBy(),this.refreshErrorAlert&&requestAnimationFrame(()=>{this.refreshErrorAlert=!1}),this.disableTransitions&&requestAnimationFrame(()=>{this.disableTransitions=!1})}renderSupportingText(){let{supportingOrErrorText:e,counterText:t}=this;if(!e&&!t)return d;let r=h`<span>${e}</span>`,i=t?h`<span class="counter">${t}</span>`:d,a=this.error&&this.errorText&&!this.refreshErrorAlert?"alert":d;return h`
      <div class="supporting-text" role=${a}>${r}${i}</div>
      <slot name="aria-describedby" @slotchange=${this.updateSlottedAriaDescribedBy}></slot>
    `}updateSlottedAriaDescribedBy(){for(let e of this.slottedAriaDescribedBy)ge(h`${this.supportingOrErrorText} ${this.counterText}`,e),e.setAttribute("hidden","")}renderLabel(e){if(!this.label)return d;let t;e?t=this.focused||this.populated||this.isAnimating:t=!this.focused&&!this.populated&&!this.isAnimating;let r={hidden:!t,floating:e,resting:!e},i=`${this.label}${this.required?"*":""}`;return h`
      <span class="label ${T(r)}"
        aria-hidden=${!t}
      >${i}</span>
    `}animateLabelIfNeeded({wasFocused:e,wasPopulated:t}){if(!this.label)return;e??(e=this.focused),t??(t=this.populated);let r=e||t,i=this.focused||this.populated;r!==i&&(this.isAnimating=!0,this.labelAnimation?.cancel(),this.labelAnimation=this.floatingLabelEl?.animate(this.getLabelKeyframes(),{duration:150,easing:_e.STANDARD}),this.labelAnimation?.addEventListener("finish",()=>{this.isAnimating=!1}))}getLabelKeyframes(){let{floatingLabelEl:e,restingLabelEl:t}=this;if(!e||!t)return[];let{x:r,y:i,height:n}=e.getBoundingClientRect(),{x:a,y:u,height:c}=t.getBoundingClientRect(),p=e.scrollWidth,y=t.scrollWidth,v=y/p,x=a-r,S=u-i+Math.round((c-n*v)/2),ae=`translateX(${x}px) translateY(${S}px) scale(${v})`,D="translateX(0) translateY(0) scale(1)",Ye=t.clientWidth,se=y>Ye?`${Ye/v}px`:"";return this.focused||this.populated?[{transform:ae,width:se},{transform:D,width:se}]:[{transform:D,width:se},{transform:ae,width:se}]}getSurfacePositionClientRect(){return this.containerEl.getBoundingClientRect()}};s([l({type:Boolean})],b.prototype,"disabled",void 0);s([l({type:Boolean})],b.prototype,"error",void 0);s([l({type:Boolean})],b.prototype,"focused",void 0);s([l()],b.prototype,"label",void 0);s([l({type:Boolean})],b.prototype,"populated",void 0);s([l({type:Boolean})],b.prototype,"required",void 0);s([l({type:Boolean})],b.prototype,"resizable",void 0);s([l({attribute:"supporting-text"})],b.prototype,"supportingText",void 0);s([l({attribute:"error-text"})],b.prototype,"errorText",void 0);s([l({type:Number})],b.prototype,"count",void 0);s([l({type:Number})],b.prototype,"max",void 0);s([l({type:Boolean,attribute:"has-start"})],b.prototype,"hasStart",void 0);s([l({type:Boolean,attribute:"has-end"})],b.prototype,"hasEnd",void 0);s([L({slot:"aria-describedby"})],b.prototype,"slottedAriaDescribedBy",void 0);s([C()],b.prototype,"isAnimating",void 0);s([C()],b.prototype,"refreshErrorAlert",void 0);s([C()],b.prototype,"disableTransitions",void 0);s([E(".label.floating")],b.prototype,"floatingLabelEl",void 0);s([E(".label.resting")],b.prototype,"restingLabelEl",void 0);s([E(".container")],b.prototype,"containerEl",void 0);var Ae=class extends b{renderOutline(e){return h`
      <div class="outline">
        <div class="outline-start"></div>
        <div class="outline-notch">
          <div class="outline-panel-inactive"></div>
          <div class="outline-panel-active"></div>
          <div class="outline-label">${e}</div>
        </div>
        <div class="outline-end"></div>
      </div>
    `}};var Nt=m`:host{--_bottom-space: var(--md-outlined-field-bottom-space, 16px);--_container-shape: var(--md-outlined-field-container-shape, 4px);--_content-color: var(--md-outlined-field-content-color, var(--md-sys-color-on-surface, #1d1b20));--_content-font: var(--md-outlined-field-content-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_content-line-height: var(--md-outlined-field-content-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_content-size: var(--md-outlined-field-content-size, var(--md-sys-typescale-body-large-size, 1rem));--_content-weight: var(--md-outlined-field-content-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_disabled-content-color: var(--md-outlined-field-disabled-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-content-opacity: var(--md-outlined-field-disabled-content-opacity, 0.38);--_disabled-label-text-color: var(--md-outlined-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-field-disabled-label-text-opacity, 0.38);--_disabled-leading-content-color: var(--md-outlined-field-disabled-leading-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-content-opacity: var(--md-outlined-field-disabled-leading-content-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-field-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-field-disabled-outline-opacity, 0.12);--_disabled-outline-width: var(--md-outlined-field-disabled-outline-width, 1px);--_disabled-supporting-text-color: var(--md-outlined-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-outlined-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-content-color: var(--md-outlined-field-disabled-trailing-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-content-opacity: var(--md-outlined-field-disabled-trailing-content-opacity, 0.38);--_error-content-color: var(--md-outlined-field-error-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-content-color: var(--md-outlined-field-error-focus-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-label-text-color: var(--md-outlined-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-content-color: var(--md-outlined-field-error-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-outline-color: var(--md-outlined-field-error-focus-outline-color, var(--md-sys-color-error, #b3261e));--_error-focus-supporting-text-color: var(--md-outlined-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-content-color: var(--md-outlined-field-error-focus-trailing-content-color, var(--md-sys-color-error, #b3261e));--_error-hover-content-color: var(--md-outlined-field-error-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-outlined-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-content-color: var(--md-outlined-field-error-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-outline-color: var(--md-outlined-field-error-hover-outline-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-supporting-text-color: var(--md-outlined-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-content-color: var(--md-outlined-field-error-hover-trailing-content-color, var(--md-sys-color-on-error-container, #410e0b));--_error-label-text-color: var(--md-outlined-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-content-color: var(--md-outlined-field-error-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-outline-color: var(--md-outlined-field-error-outline-color, var(--md-sys-color-error, #b3261e));--_error-supporting-text-color: var(--md-outlined-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-content-color: var(--md-outlined-field-error-trailing-content-color, var(--md-sys-color-error, #b3261e));--_focus-content-color: var(--md-outlined-field-focus-content-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-outlined-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-content-color: var(--md-outlined-field-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-outline-color: var(--md-outlined-field-focus-outline-color, var(--md-sys-color-primary, #6750a4));--_focus-outline-width: var(--md-outlined-field-focus-outline-width, 3px);--_focus-supporting-text-color: var(--md-outlined-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-content-color: var(--md-outlined-field-focus-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-content-color: var(--md-outlined-field-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-outlined-field-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-leading-content-color: var(--md-outlined-field-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-outline-color: var(--md-outlined-field-hover-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-outline-width: var(--md-outlined-field-hover-outline-width, 1px);--_hover-supporting-text-color: var(--md-outlined-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-content-color: var(--md-outlined-field-hover-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-color: var(--md-outlined-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-outlined-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-outlined-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-padding-bottom: var(--md-outlined-field-label-text-padding-bottom, 8px);--_label-text-populated-line-height: var(--md-outlined-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-outlined-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-outlined-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-outlined-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-content-color: var(--md-outlined-field-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-space: var(--md-outlined-field-leading-space, 16px);--_outline-color: var(--md-outlined-field-outline-color, var(--md-sys-color-outline, #79747e));--_outline-label-padding: var(--md-outlined-field-outline-label-padding, 4px);--_outline-width: var(--md-outlined-field-outline-width, 1px);--_supporting-text-color: var(--md-outlined-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-outlined-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-leading-space: var(--md-outlined-field-supporting-text-leading-space, 16px);--_supporting-text-line-height: var(--md-outlined-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-outlined-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-top-space: var(--md-outlined-field-supporting-text-top-space, 4px);--_supporting-text-trailing-space: var(--md-outlined-field-supporting-text-trailing-space, 16px);--_supporting-text-weight: var(--md-outlined-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_top-space: var(--md-outlined-field-top-space, 16px);--_trailing-content-color: var(--md-outlined-field-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-space: var(--md-outlined-field-trailing-space, 16px);--_container-shape-start-start: var( --md-outlined-field-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-outlined-field-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-outlined-field-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-outlined-field-container-shape-end-start, var(--_container-shape) )}.outline{border-color:var(--_outline-color);border-radius:inherit;color:var(--_outline-color);display:flex;pointer-events:none;height:100%;position:absolute;width:100%}.outline-start::before,.outline-start::after,.outline-panel-inactive::before,.outline-panel-inactive::after,.outline-panel-active::before,.outline-panel-active::after,.outline-end::before,.outline-end::after{border:inherit;content:"";inset:0;position:absolute}.outline-start,.outline-end{border:inherit;border-radius:inherit;box-sizing:border-box;position:relative}.outline-start::before,.outline-start::after,.outline-end::before,.outline-end::after{border-bottom-style:solid;border-top-style:solid}.outline-start::after,.outline-end::after{opacity:0;transition:opacity 150ms cubic-bezier(0.2, 0, 0, 1)}.focused .outline-start::after,.focused .outline-end::after{opacity:1}.outline-start::before,.outline-start::after{border-inline-start-style:solid;border-inline-end-style:none;border-start-start-radius:inherit;border-start-end-radius:0;border-end-start-radius:inherit;border-end-end-radius:0;margin-inline-end:var(--_outline-label-padding)}.outline-end{flex-grow:1;margin-inline-start:calc(-1*var(--_outline-label-padding))}.outline-end::before,.outline-end::after{border-inline-start-style:none;border-inline-end-style:solid;border-start-start-radius:0;border-start-end-radius:inherit;border-end-start-radius:0;border-end-end-radius:inherit}.outline-notch{align-items:flex-start;border:inherit;display:flex;margin-inline-start:calc(-1*var(--_outline-label-padding));margin-inline-end:var(--_outline-label-padding);max-width:calc(100% - var(--_leading-space) - var(--_trailing-space));padding:0 var(--_outline-label-padding);position:relative}.no-label .outline-notch{display:none}.outline-panel-inactive,.outline-panel-active{border:inherit;border-bottom-style:solid;inset:0;position:absolute}.outline-panel-inactive::before,.outline-panel-inactive::after,.outline-panel-active::before,.outline-panel-active::after{border-top-style:solid;border-bottom:none;bottom:auto;transform:scaleX(1);transition:transform 150ms cubic-bezier(0.2, 0, 0, 1)}.outline-panel-inactive::before,.outline-panel-active::before{right:50%;transform-origin:top left}.outline-panel-inactive::after,.outline-panel-active::after{left:50%;transform-origin:top right}.populated .outline-panel-inactive::before,.populated .outline-panel-inactive::after,.populated .outline-panel-active::before,.populated .outline-panel-active::after,.focused .outline-panel-inactive::before,.focused .outline-panel-inactive::after,.focused .outline-panel-active::before,.focused .outline-panel-active::after{transform:scaleX(0)}.outline-panel-active{opacity:0;transition:opacity 150ms cubic-bezier(0.2, 0, 0, 1)}.focused .outline-panel-active{opacity:1}.outline-label{display:flex;max-width:100%;transform:translateY(calc(-100% + var(--_label-text-padding-bottom)))}.outline-start,.field:not(.with-start) .content ::slotted(*){padding-inline-start:max(var(--_leading-space),max(var(--_container-shape-start-start),var(--_container-shape-end-start)) + var(--_outline-label-padding))}.field:not(.with-start) .label-wrapper{margin-inline-start:max(var(--_leading-space),max(var(--_container-shape-start-start),var(--_container-shape-end-start)) + var(--_outline-label-padding))}.field:not(.with-end) .content ::slotted(*){padding-inline-end:max(var(--_trailing-space),max(var(--_container-shape-start-end),var(--_container-shape-end-end)))}.field:not(.with-end) .label-wrapper{margin-inline-end:max(var(--_trailing-space),max(var(--_container-shape-start-end),var(--_container-shape-end-end)))}.outline-start::before,.outline-end::before,.outline-panel-inactive,.outline-panel-inactive::before,.outline-panel-inactive::after{border-width:var(--_outline-width)}:hover .outline{border-color:var(--_hover-outline-color);color:var(--_hover-outline-color)}:hover .outline-start::before,:hover .outline-end::before,:hover .outline-panel-inactive,:hover .outline-panel-inactive::before,:hover .outline-panel-inactive::after{border-width:var(--_hover-outline-width)}.focused .outline{border-color:var(--_focus-outline-color);color:var(--_focus-outline-color)}.outline-start::after,.outline-end::after,.outline-panel-active,.outline-panel-active::before,.outline-panel-active::after{border-width:var(--_focus-outline-width)}.disabled .outline{border-color:var(--_disabled-outline-color);color:var(--_disabled-outline-color)}.disabled .outline-start,.disabled .outline-end,.disabled .outline-panel-inactive{opacity:var(--_disabled-outline-opacity)}.disabled .outline-start::before,.disabled .outline-end::before,.disabled .outline-panel-inactive,.disabled .outline-panel-inactive::before,.disabled .outline-panel-inactive::after{border-width:var(--_disabled-outline-width)}.error .outline{border-color:var(--_error-outline-color);color:var(--_error-outline-color)}.error:hover .outline{border-color:var(--_error-hover-outline-color);color:var(--_error-hover-outline-color)}.error.focused .outline{border-color:var(--_error-focus-outline-color);color:var(--_error-focus-outline-color)}.resizable .container{bottom:var(--_focus-outline-width);inset-inline-end:var(--_focus-outline-width);clip-path:inset(var(--_focus-outline-width) 0 0 var(--_focus-outline-width))}.resizable .container>*{top:var(--_focus-outline-width);inset-inline-start:var(--_focus-outline-width)}:host-context([dir=rtl]) .resizable .container,:host([dir=rtl]) .resizable .container{clip-path:inset(var(--_focus-outline-width) var(--_focus-outline-width) 0 0)}.resizable .container:dir(rtl){clip-path:inset(var(--_focus-outline-width) var(--_focus-outline-width) 0 0)}/*# sourceMappingURL=outlined-styles.css.map */
`;var Dt=m`:host{display:inline-flex;resize:both}.field{display:flex;flex:1;flex-direction:column;writing-mode:horizontal-tb;max-width:100%}.container-overflow{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start);display:flex;height:100%;position:relative}.container{align-items:center;border-radius:inherit;display:flex;flex:1;max-height:100%;min-height:100%;min-width:min-content;position:relative}.field,.container-overflow{resize:inherit}.resizable:not(.disabled) .container{resize:inherit;overflow:hidden}.disabled{pointer-events:none}.start,.middle,.end{display:flex;box-sizing:border-box;height:100%;position:relative}.start{color:var(--_leading-content-color)}.end{color:var(--_trailing-content-color)}.start,.end{align-items:center;justify-content:center}.with-start .start,.with-end .end{min-width:48px}.with-start .start{margin-inline-end:4px}.with-end .end{margin-inline-start:4px}.middle{align-items:stretch;align-self:baseline;flex:1}.content{color:var(--_content-color);display:flex;flex:1;opacity:0;transition:opacity 83ms cubic-bezier(0.2, 0, 0, 1)}.no-label .content,.focused .content,.populated .content{opacity:1;transition-delay:67ms}:is(.disabled,.disable-transitions) .content{transition:none}.content ::slotted(*){all:unset;color:currentColor;font-family:var(--_content-font);font-size:var(--_content-size);line-height:var(--_content-line-height);font-weight:var(--_content-weight);width:100%;white-space:pre-wrap}.content ::slotted(:not(textarea)){padding-top:var(--_top-space);padding-bottom:var(--_bottom-space)}.content ::slotted(textarea){margin-top:var(--_top-space);margin-bottom:var(--_bottom-space)}:hover .content{color:var(--_hover-content-color)}:hover .start{color:var(--_hover-leading-content-color)}:hover .end{color:var(--_hover-trailing-content-color)}.focused .content{color:var(--_focus-content-color)}.focused .start{color:var(--_focus-leading-content-color)}.focused .end{color:var(--_focus-trailing-content-color)}.disabled .content{color:var(--_disabled-content-color)}.disabled.no-label .content,.disabled.focused .content,.disabled.populated .content{opacity:var(--_disabled-content-opacity)}.disabled .start{color:var(--_disabled-leading-content-color);opacity:var(--_disabled-leading-content-opacity)}.disabled .end{color:var(--_disabled-trailing-content-color);opacity:var(--_disabled-trailing-content-opacity)}.error .content{color:var(--_error-content-color)}.error .start{color:var(--_error-leading-content-color)}.error .end{color:var(--_error-trailing-content-color)}.error:hover .content{color:var(--_error-hover-content-color)}.error:hover .start{color:var(--_error-hover-leading-content-color)}.error:hover .end{color:var(--_error-hover-trailing-content-color)}.error.focused .content{color:var(--_error-focus-content-color)}.error.focused .start{color:var(--_error-focus-leading-content-color)}.error.focused .end{color:var(--_error-focus-trailing-content-color)}.label{box-sizing:border-box;color:var(--_label-text-color);overflow:hidden;max-width:100%;text-overflow:ellipsis;white-space:nowrap;z-index:1;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);width:min-content}.label-wrapper{inset:0;pointer-events:none;position:absolute}.label.resting{position:absolute;top:var(--_top-space)}.label.floating{font-size:var(--_label-text-populated-size);line-height:var(--_label-text-populated-line-height);transform-origin:top left}.label.hidden{opacity:0}.no-label .label{display:none}.label-wrapper{inset:0;position:absolute;text-align:initial}:hover .label{color:var(--_hover-label-text-color)}.focused .label{color:var(--_focus-label-text-color)}.disabled .label{color:var(--_disabled-label-text-color)}.disabled .label:not(.hidden){opacity:var(--_disabled-label-text-opacity)}.error .label{color:var(--_error-label-text-color)}.error:hover .label{color:var(--_error-hover-label-text-color)}.error.focused .label{color:var(--_error-focus-label-text-color)}.supporting-text{color:var(--_supporting-text-color);display:flex;font-family:var(--_supporting-text-font);font-size:var(--_supporting-text-size);line-height:var(--_supporting-text-line-height);font-weight:var(--_supporting-text-weight);gap:16px;justify-content:space-between;padding-inline-start:var(--_supporting-text-leading-space);padding-inline-end:var(--_supporting-text-trailing-space);padding-top:var(--_supporting-text-top-space)}.supporting-text :nth-child(2){flex-shrink:0}:hover .supporting-text{color:var(--_hover-supporting-text-color)}.focus .supporting-text{color:var(--_focus-supporting-text-color)}.disabled .supporting-text{color:var(--_disabled-supporting-text-color);opacity:var(--_disabled-supporting-text-opacity)}.error .supporting-text{color:var(--_error-supporting-text-color)}.error:hover .supporting-text{color:var(--_error-hover-supporting-text-color)}.error.focus .supporting-text{color:var(--_error-focus-supporting-text-color)}/*# sourceMappingURL=shared-styles.css.map */
`;var qe=class extends Ae{};qe.styles=[Dt,Nt];qe=s([$("md-outlined-field")],qe);var Bt=m`@media(forced-colors: active){:host{--md-outlined-text-field-disabled-input-text-color: GrayText;--md-outlined-text-field-disabled-input-text-opacity: 1;--md-outlined-text-field-disabled-label-text-color: GrayText;--md-outlined-text-field-disabled-label-text-opacity: 1;--md-outlined-text-field-disabled-leading-icon-color: GrayText;--md-outlined-text-field-disabled-leading-icon-opacity: 1;--md-outlined-text-field-disabled-outline-color: GrayText;--md-outlined-text-field-disabled-outline-opacity: 1;--md-outlined-text-field-disabled-supporting-text-color: GrayText;--md-outlined-text-field-disabled-supporting-text-opacity: 1;--md-outlined-text-field-disabled-trailing-icon-color: GrayText;--md-outlined-text-field-disabled-trailing-icon-opacity: 1}}/*# sourceMappingURL=outlined-forced-colors-styles.css.map */
`;var Ut=m`:host{--_leading-space: var(--md-outlined-text-field-leading-space, 16px);--_trailing-space: var(--md-outlined-text-field-trailing-space, 16px);--_top-space: var(--md-outlined-text-field-top-space, 16px);--_bottom-space: var(--md-outlined-text-field-bottom-space, 16px);--_input-text-prefix-trailing-space: var(--md-outlined-text-field-input-text-prefix-trailing-space, 2px);--_input-text-suffix-leading-space: var(--md-outlined-text-field-input-text-suffix-leading-space, 2px);--_focus-caret-color: var(--md-outlined-text-field-focus-caret-color, var(--md-sys-color-primary, #6750a4));--_caret-color: var(--md-outlined-text-field-caret-color, var(--md-sys-color-primary, #6750a4));--_container-shape: var(--md-outlined-text-field-container-shape, 4px);--_disabled-input-text-color: var(--md-outlined-text-field-disabled-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-input-text-opacity: var(--md-outlined-text-field-disabled-input-text-opacity, 0.38);--_disabled-label-text-color: var(--md-outlined-text-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-text-field-disabled-label-text-opacity, 0.38);--_disabled-leading-icon-color: var(--md-outlined-text-field-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-outlined-text-field-disabled-leading-icon-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-text-field-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-text-field-disabled-outline-opacity, 0.12);--_disabled-outline-width: var(--md-outlined-text-field-disabled-outline-width, 1px);--_disabled-supporting-text-color: var(--md-outlined-text-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-outlined-text-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-icon-color: var(--md-outlined-text-field-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-icon-opacity: var(--md-outlined-text-field-disabled-trailing-icon-opacity, 0.38);--_error-focus-caret-color: var(--md-outlined-text-field-error-focus-caret-color, var(--md-sys-color-error, #b3261e));--_error-focus-input-text-color: var(--md-outlined-text-field-error-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-label-text-color: var(--md-outlined-text-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-icon-color: var(--md-outlined-text-field-error-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-outline-color: var(--md-outlined-text-field-error-focus-outline-color, var(--md-sys-color-error, #b3261e));--_error-focus-supporting-text-color: var(--md-outlined-text-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-icon-color: var(--md-outlined-text-field-error-focus-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_error-hover-input-text-color: var(--md-outlined-text-field-error-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-outlined-text-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-icon-color: var(--md-outlined-text-field-error-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-outline-color: var(--md-outlined-text-field-error-hover-outline-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-supporting-text-color: var(--md-outlined-text-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-icon-color: var(--md-outlined-text-field-error-hover-trailing-icon-color, var(--md-sys-color-on-error-container, #410e0b));--_error-input-text-color: var(--md-outlined-text-field-error-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-label-text-color: var(--md-outlined-text-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-icon-color: var(--md-outlined-text-field-error-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-outline-color: var(--md-outlined-text-field-error-outline-color, var(--md-sys-color-error, #b3261e));--_error-supporting-text-color: var(--md-outlined-text-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-icon-color: var(--md-outlined-text-field-error-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_focus-input-text-color: var(--md-outlined-text-field-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-outlined-text-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-icon-color: var(--md-outlined-text-field-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-outline-color: var(--md-outlined-text-field-focus-outline-color, var(--md-sys-color-primary, #6750a4));--_focus-outline-width: var(--md-outlined-text-field-focus-outline-width, 3px);--_focus-supporting-text-color: var(--md-outlined-text-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-icon-color: var(--md-outlined-text-field-focus-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-input-text-color: var(--md-outlined-text-field-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-outlined-text-field-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-leading-icon-color: var(--md-outlined-text-field-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-outline-color: var(--md-outlined-text-field-hover-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-outline-width: var(--md-outlined-text-field-hover-outline-width, 1px);--_hover-supporting-text-color: var(--md-outlined-text-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-icon-color: var(--md-outlined-text-field-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-color: var(--md-outlined-text-field-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_input-text-font: var(--md-outlined-text-field-input-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_input-text-line-height: var(--md-outlined-text-field-input-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_input-text-placeholder-color: var(--md-outlined-text-field-input-text-placeholder-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-prefix-color: var(--md-outlined-text-field-input-text-prefix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-size: var(--md-outlined-text-field-input-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_input-text-suffix-color: var(--md-outlined-text-field-input-text-suffix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-weight: var(--md-outlined-text-field-input-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_label-text-color: var(--md-outlined-text-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-outlined-text-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-outlined-text-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-populated-line-height: var(--md-outlined-text-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-outlined-text-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-outlined-text-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-outlined-text-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-icon-color: var(--md-outlined-text-field-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-icon-size: var(--md-outlined-text-field-leading-icon-size, 24px);--_outline-color: var(--md-outlined-text-field-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-outlined-text-field-outline-width, 1px);--_supporting-text-color: var(--md-outlined-text-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-outlined-text-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-line-height: var(--md-outlined-text-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-outlined-text-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-weight: var(--md-outlined-text-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_trailing-icon-color: var(--md-outlined-text-field-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-icon-size: var(--md-outlined-text-field-trailing-icon-size, 24px);--_container-shape-start-start: var( --md-outlined-text-field-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-outlined-text-field-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-outlined-text-field-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-outlined-text-field-container-shape-end-start, var(--_container-shape) );--md-outlined-field-bottom-space: var(--_bottom-space);--md-outlined-field-container-shape-end-end: var(--_container-shape-end-end);--md-outlined-field-container-shape-end-start: var(--_container-shape-end-start);--md-outlined-field-container-shape-start-end: var(--_container-shape-start-end);--md-outlined-field-container-shape-start-start: var(--_container-shape-start-start);--md-outlined-field-content-color: var(--_input-text-color);--md-outlined-field-content-font: var(--_input-text-font);--md-outlined-field-content-line-height: var(--_input-text-line-height);--md-outlined-field-content-size: var(--_input-text-size);--md-outlined-field-content-weight: var(--_input-text-weight);--md-outlined-field-disabled-content-color: var(--_disabled-input-text-color);--md-outlined-field-disabled-content-opacity: var(--_disabled-input-text-opacity);--md-outlined-field-disabled-label-text-color: var(--_disabled-label-text-color);--md-outlined-field-disabled-label-text-opacity: var(--_disabled-label-text-opacity);--md-outlined-field-disabled-leading-content-color: var(--_disabled-leading-icon-color);--md-outlined-field-disabled-leading-content-opacity: var(--_disabled-leading-icon-opacity);--md-outlined-field-disabled-outline-color: var(--_disabled-outline-color);--md-outlined-field-disabled-outline-opacity: var(--_disabled-outline-opacity);--md-outlined-field-disabled-outline-width: var(--_disabled-outline-width);--md-outlined-field-disabled-supporting-text-color: var(--_disabled-supporting-text-color);--md-outlined-field-disabled-supporting-text-opacity: var(--_disabled-supporting-text-opacity);--md-outlined-field-disabled-trailing-content-color: var(--_disabled-trailing-icon-color);--md-outlined-field-disabled-trailing-content-opacity: var(--_disabled-trailing-icon-opacity);--md-outlined-field-error-content-color: var(--_error-input-text-color);--md-outlined-field-error-focus-content-color: var(--_error-focus-input-text-color);--md-outlined-field-error-focus-label-text-color: var(--_error-focus-label-text-color);--md-outlined-field-error-focus-leading-content-color: var(--_error-focus-leading-icon-color);--md-outlined-field-error-focus-outline-color: var(--_error-focus-outline-color);--md-outlined-field-error-focus-supporting-text-color: var(--_error-focus-supporting-text-color);--md-outlined-field-error-focus-trailing-content-color: var(--_error-focus-trailing-icon-color);--md-outlined-field-error-hover-content-color: var(--_error-hover-input-text-color);--md-outlined-field-error-hover-label-text-color: var(--_error-hover-label-text-color);--md-outlined-field-error-hover-leading-content-color: var(--_error-hover-leading-icon-color);--md-outlined-field-error-hover-outline-color: var(--_error-hover-outline-color);--md-outlined-field-error-hover-supporting-text-color: var(--_error-hover-supporting-text-color);--md-outlined-field-error-hover-trailing-content-color: var(--_error-hover-trailing-icon-color);--md-outlined-field-error-label-text-color: var(--_error-label-text-color);--md-outlined-field-error-leading-content-color: var(--_error-leading-icon-color);--md-outlined-field-error-outline-color: var(--_error-outline-color);--md-outlined-field-error-supporting-text-color: var(--_error-supporting-text-color);--md-outlined-field-error-trailing-content-color: var(--_error-trailing-icon-color);--md-outlined-field-focus-content-color: var(--_focus-input-text-color);--md-outlined-field-focus-label-text-color: var(--_focus-label-text-color);--md-outlined-field-focus-leading-content-color: var(--_focus-leading-icon-color);--md-outlined-field-focus-outline-color: var(--_focus-outline-color);--md-outlined-field-focus-outline-width: var(--_focus-outline-width);--md-outlined-field-focus-supporting-text-color: var(--_focus-supporting-text-color);--md-outlined-field-focus-trailing-content-color: var(--_focus-trailing-icon-color);--md-outlined-field-hover-content-color: var(--_hover-input-text-color);--md-outlined-field-hover-label-text-color: var(--_hover-label-text-color);--md-outlined-field-hover-leading-content-color: var(--_hover-leading-icon-color);--md-outlined-field-hover-outline-color: var(--_hover-outline-color);--md-outlined-field-hover-outline-width: var(--_hover-outline-width);--md-outlined-field-hover-supporting-text-color: var(--_hover-supporting-text-color);--md-outlined-field-hover-trailing-content-color: var(--_hover-trailing-icon-color);--md-outlined-field-label-text-color: var(--_label-text-color);--md-outlined-field-label-text-font: var(--_label-text-font);--md-outlined-field-label-text-line-height: var(--_label-text-line-height);--md-outlined-field-label-text-populated-line-height: var(--_label-text-populated-line-height);--md-outlined-field-label-text-populated-size: var(--_label-text-populated-size);--md-outlined-field-label-text-size: var(--_label-text-size);--md-outlined-field-label-text-weight: var(--_label-text-weight);--md-outlined-field-leading-content-color: var(--_leading-icon-color);--md-outlined-field-leading-space: var(--_leading-space);--md-outlined-field-outline-color: var(--_outline-color);--md-outlined-field-outline-width: var(--_outline-width);--md-outlined-field-supporting-text-color: var(--_supporting-text-color);--md-outlined-field-supporting-text-font: var(--_supporting-text-font);--md-outlined-field-supporting-text-line-height: var(--_supporting-text-line-height);--md-outlined-field-supporting-text-size: var(--_supporting-text-size);--md-outlined-field-supporting-text-weight: var(--_supporting-text-weight);--md-outlined-field-top-space: var(--_top-space);--md-outlined-field-trailing-content-color: var(--_trailing-icon-color);--md-outlined-field-trailing-space: var(--_trailing-space)}/*# sourceMappingURL=outlined-styles.css.map */
`;var{I:$n}=mt;var Ht=o=>o.strings===void 0;var pr={},jt=(o,e=pr)=>o._$AH=e;var Ge=K(class extends M{constructor(o){if(super(o),o.type!==k.PROPERTY&&o.type!==k.ATTRIBUTE&&o.type!==k.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Ht(o))throw Error("`live` bindings can only contain a single expression")}render(o){return o}update(o,[e]){if(e===w||e===d)return e;let t=o.element,r=o.name;if(o.type===k.PROPERTY){if(e===t[r])return w}else if(o.type===k.BOOLEAN_ATTRIBUTE){if(!!e===t.hasAttribute(r))return w}else if(o.type===k.ATTRIBUTE&&t.getAttribute(r)===e+"")return w;return jt(o),e}});var Vt="important",fr=" !"+Vt,J=K(class extends M{constructor(o){var e;if(super(o),o.type!==k.ATTRIBUTE||o.name!=="style"||((e=o.strings)===null||e===void 0?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(o){return Object.keys(o).reduce((e,t)=>{let r=o[t];return r==null?e:e+`${t=t.includes("-")?t:t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(o,[e]){let{style:t}=o.element;if(this.ht===void 0){this.ht=new Set;for(let r in e)this.ht.add(r);return this.render(e)}this.ht.forEach(r=>{e[r]==null&&(this.ht.delete(r),r.includes("-")?t.removeProperty(r):t[r]="")});for(let r in e){let i=e[r];if(i!=null){this.ht.add(r);let n=typeof i=="string"&&i.endsWith(fr);r.includes("-")||n?t.setProperty(r,n?i.slice(0,-11):i,n?Vt:""):t[r]=i}}return w}});var Ft={fromAttribute(o){return o??""},toAttribute(o){return o||null}};var f=class extends g{constructor(){super(...arguments),this.disabled=!1,this.error=!1,this.errorText="",this.label="",this.required=!1,this.value="",this.prefixText="",this.suffixText="",this.hasLeadingIcon=!1,this.hasTrailingIcon=!1,this.supportingText="",this.textDirection="",this.rows=2,this.inputMode="",this.max="",this.maxLength=-1,this.min="",this.minLength=-1,this.pattern="",this.placeholder="",this.readOnly=!1,this.step="",this.type="text",this.autocomplete="",this.dirty=!1,this.focused=!1,this.nativeError=!1,this.nativeErrorText="",this.hasCustomValidityError=!1,this.internals=this.attachInternals()}get form(){return this.internals.form}get labels(){return this.internals.labels}get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get selectionDirection(){return this.getInputOrTextarea().selectionDirection}set selectionDirection(e){this.getInputOrTextarea().selectionDirection=e}get selectionEnd(){return this.getInputOrTextarea().selectionEnd}set selectionEnd(e){this.getInputOrTextarea().selectionEnd=e}get selectionStart(){return this.getInputOrTextarea().selectionStart}set selectionStart(e){this.getInputOrTextarea().selectionStart=e}get validationMessage(){return this.syncValidity(),this.internals.validationMessage}get validity(){return this.syncValidity(),this.internals.validity}get valueAsNumber(){let e=this.getInput();return e?e.valueAsNumber:NaN}set valueAsNumber(e){let t=this.getInput();t&&(t.valueAsNumber=e,this.value=t.value)}get valueAsDate(){let e=this.getInput();return e?e.valueAsDate:null}set valueAsDate(e){let t=this.getInput();t&&(t.valueAsDate=e,this.value=t.value)}get willValidate(){return this.syncValidity(),this.internals.willValidate}get hasError(){return this.error||this.nativeError}checkValidity(){return this.syncValidity(),this.internals.checkValidity()}reportValidity(){let e;this.addEventListener("invalid",i=>{e=i},{once:!0});let t=this.checkValidity();if(e?.defaultPrevented)return t;let r=this.getErrorText();return this.nativeError=!t,this.nativeErrorText=this.validationMessage,r===this.getErrorText()&&this.field?.reannounceError(),t}select(){this.getInputOrTextarea().select()}setCustomValidity(e){this.hasCustomValidityError=!!e,this.internals.setValidity({customError:!!e},e,this.getInputOrTextarea())}setRangeText(...e){this.getInputOrTextarea().setRangeText(...e),this.value=this.getInputOrTextarea().value}setSelectionRange(e,t,r){this.getInputOrTextarea().setSelectionRange(e,t,r)}stepDown(e){let t=this.getInput();t&&(t.stepDown(e),this.value=t.value)}stepUp(e){let t=this.getInput();t&&(t.stepUp(e),this.value=t.value)}reset(){this.dirty=!1,this.value=this.getAttribute("value")??"",this.nativeError=!1,this.nativeErrorText=""}attributeChangedCallback(e,t,r){e==="value"&&this.dirty||super.attributeChangedCallback(e,t,r)}render(){let e={disabled:this.disabled,error:!this.disabled&&this.hasError,textarea:this.type==="textarea"};return h`
       <span class="text-field ${T(e)}">
         ${this.renderField()}
       </span>
     `}updated(e){let t=this.getInputOrTextarea().value;this.value!==t&&(this.value=t),this.internals.setFormValue(t),this.syncValidity()}renderField(){return we`<${this.fieldTag}
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
     `}renderInputOrTextarea(){let e={direction:this.textDirection},t=this.ariaLabel||this.label||d,r=this.autocomplete;if(this.type==="textarea")return h`
        <textarea
          class="input"
          style=${J(e)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${t}
          autocomplete=${r||d}
          ?disabled=${this.disabled}
          maxlength=${this.maxLength>-1?this.maxLength:d}
          minlength=${this.minLength>-1?this.minLength:d}
          placeholder=${this.placeholder||d}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          rows=${this.rows}
          .value=${Ge(this.value)}
          @change=${this.handleChange}
          @focusin=${this.handleFocusin}
          @focusout=${this.handleFocusout}
          @input=${this.handleInput}
          @select=${this.redispatchEvent}
        ></textarea>
      `;let i=this.renderPrefix(),n=this.renderSuffix(),a=this.inputMode;return h`
      <div class="input-wrapper">
        ${i}
        <input
          class="input"
          style=${J(e)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${t}
          autocomplete=${r||d}
          ?disabled=${this.disabled}
          inputmode=${a||d}
          max=${this.max||d}
          maxlength=${this.maxLength>-1?this.maxLength:d}
          min=${this.min||d}
          minlength=${this.minLength>-1?this.minLength:d}
          pattern=${this.pattern||d}
          placeholder=${this.placeholder||d}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          step=${this.step||d}
          type=${this.type}
          .value=${Ge(this.value)}
          @change=${this.redispatchEvent}
          @focusin=${this.handleFocusin}
          @focusout=${this.handleFocusout}
          @input=${this.handleInput}
          @select=${this.redispatchEvent}
        >
        ${n}
      </div>
    `}renderPrefix(){return this.renderAffix(this.prefixText,!1)}renderSuffix(){return this.renderAffix(this.suffixText,!0)}renderAffix(e,t){return e?h`<span class="${T({suffix:t,prefix:!t})}">${e}</span>`:d}getErrorText(){return this.error?this.errorText:this.nativeErrorText}handleFocusin(){this.focused=!0}handleFocusout(){this.focused=!1}handleInput(e){this.dirty=!0,this.value=e.target.value,this.syncValidity()}handleChange(e){this.syncValidity(),this.redispatchEvent(e)}redispatchEvent(e){kt(this,e)}getInputOrTextarea(){return this.inputOrTextarea||(this.connectedCallback(),this.scheduleUpdate()),this.isUpdatePending&&this.scheduleUpdate(),this.inputOrTextarea}getInput(){return this.type==="textarea"?null:this.getInputOrTextarea()}syncValidity(){let e=this.getInputOrTextarea();this.hasCustomValidityError?e.setCustomValidity(this.internals.validationMessage):e.setCustomValidity(""),this.internals.setValidity(e.validity,e.validationMessage,this.getInputOrTextarea())}handleIconChange(){this.hasLeadingIcon=this.leadingIcons.length>0,this.hasTrailingIcon=this.trailingIcons.length>0}formResetCallback(){this.reset()}formStateRestoreCallback(e){this.value=e}};Z(f);f.shadowRootOptions={...g.shadowRootOptions,delegatesFocus:!0};f.formAssociated=!0;s([l({type:Boolean,reflect:!0})],f.prototype,"disabled",void 0);s([l({type:Boolean,reflect:!0})],f.prototype,"error",void 0);s([l({attribute:"error-text"})],f.prototype,"errorText",void 0);s([l()],f.prototype,"label",void 0);s([l({type:Boolean,reflect:!0})],f.prototype,"required",void 0);s([l()],f.prototype,"value",void 0);s([l({attribute:"prefix-text"})],f.prototype,"prefixText",void 0);s([l({attribute:"suffix-text"})],f.prototype,"suffixText",void 0);s([l({type:Boolean,attribute:"has-leading-icon"})],f.prototype,"hasLeadingIcon",void 0);s([l({type:Boolean,attribute:"has-trailing-icon"})],f.prototype,"hasTrailingIcon",void 0);s([l({attribute:"supporting-text"})],f.prototype,"supportingText",void 0);s([l({attribute:"text-direction"})],f.prototype,"textDirection",void 0);s([l({type:Number})],f.prototype,"rows",void 0);s([l({reflect:!0})],f.prototype,"inputMode",void 0);s([l()],f.prototype,"max",void 0);s([l({type:Number})],f.prototype,"maxLength",void 0);s([l()],f.prototype,"min",void 0);s([l({type:Number})],f.prototype,"minLength",void 0);s([l()],f.prototype,"pattern",void 0);s([l({reflect:!0,converter:Ft})],f.prototype,"placeholder",void 0);s([l({type:Boolean,reflect:!0})],f.prototype,"readOnly",void 0);s([l()],f.prototype,"step",void 0);s([l({reflect:!0})],f.prototype,"type",void 0);s([l({reflect:!0})],f.prototype,"autocomplete",void 0);s([C()],f.prototype,"dirty",void 0);s([C()],f.prototype,"focused",void 0);s([C()],f.prototype,"nativeError",void 0);s([C()],f.prototype,"nativeErrorText",void 0);s([E(".input")],f.prototype,"inputOrTextarea",void 0);s([E(".field")],f.prototype,"field",void 0);s([L({slot:"leading-icon"})],f.prototype,"leadingIcons",void 0);s([L({slot:"trailing-icon"})],f.prototype,"trailingIcons",void 0);var Ee=class extends f{constructor(){super(...arguments),this.fieldTag=F`md-outlined-field`}};var qt=m`:host{display:inline-flex;outline:none;resize:both;-webkit-tap-highlight-color:rgba(0,0,0,0)}.text-field,.field{width:100%}.text-field{display:inline-flex}.field{cursor:text}.disabled .field{cursor:default}.text-field,.textarea .field{resize:inherit}.icon{color:currentColor;display:flex;fill:currentColor}.icon ::slotted(*){display:flex}[hasstart] .icon.leading{font-size:var(--_leading-icon-size);height:var(--_leading-icon-size);width:var(--_leading-icon-size)}[hasend] .icon.trailing{font-size:var(--_trailing-icon-size);height:var(--_trailing-icon-size);width:var(--_trailing-icon-size)}.input-wrapper{display:flex}.input-wrapper>*{all:inherit;padding:0}.input{caret-color:var(--_caret-color);overflow-x:hidden;text-align:inherit}.input::placeholder{color:currentColor;opacity:1}.input::-webkit-calendar-picker-indicator{display:none}.input::-webkit-search-decoration,.input::-webkit-search-cancel-button{display:none}@media(forced-colors: active){.input{background-color:Field}}:focus-within .input{caret-color:var(--_focus-caret-color)}.error:focus-within .input{caret-color:var(--_error-focus-caret-color)}.text-field:not(.disabled) .prefix{color:var(--_input-text-prefix-color)}.text-field:not(.disabled) .suffix{color:var(--_input-text-suffix-color)}.text-field:not(.disabled) .input::placeholder{color:var(--_input-text-placeholder-color)}.prefix,.suffix{text-wrap:nowrap;width:min-content}.prefix{padding-inline-end:var(--_input-text-prefix-trailing-space)}.suffix{padding-inline-start:var(--_input-text-suffix-leading-space)}/*# sourceMappingURL=shared-styles.css.map */
`;var Xe=class extends Ee{constructor(){super(...arguments),this.fieldTag=F`md-outlined-field`}};Xe.styles=[qt,Ut,Bt];Xe=s([$("md-outlined-text-field")],Xe);var R=class extends g{constructor(){super(...arguments),this.value=0,this.max=1,this.indeterminate=!1,this.fourColor=!1}render(){let{ariaLabel:e}=this;return h`
      <div class="progress ${T(this.getRenderClasses())}"
        role="progressbar"
        aria-label="${e||d}"
        aria-valuemin="0"
        aria-valuemax=${this.max}
        aria-valuenow=${this.indeterminate?d:this.value}
      >${this.renderIndicator()}</div>
    `}getRenderClasses(){return{indeterminate:this.indeterminate,"four-color":this.fourColor}}};Z(R);s([l({type:Number})],R.prototype,"value",void 0);s([l({type:Number})],R.prototype,"max",void 0);s([l({type:Boolean})],R.prototype,"indeterminate",void 0);s([l({type:Boolean,attribute:"four-color"})],R.prototype,"fourColor",void 0);var ne=class extends R{constructor(){super(...arguments),this.buffer=1}renderIndicator(){let e={transform:`scaleX(${(this.indeterminate?1:this.value/this.max)*100}%)`},t={transform:`scaleX(${(this.indeterminate?1:this.buffer/this.max)*100}%)`};return h`
      <div class="dots"></div>
      <div class="inactive-track" style=${J(t)}></div>
      <div class="bar primary-bar" style=${J(e)}>
        <div class="bar-inner"></div>
      </div>
      <div class="bar secondary-bar">
        <div class="bar-inner"></div>
      </div>
    `}};s([l({type:Number})],ne.prototype,"buffer",void 0);var Gt=m`:host{--_active-indicator-color: var(--md-linear-progress-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_active-indicator-height: var(--md-linear-progress-active-indicator-height, 4px);--_four-color-active-indicator-four-color: var(--md-linear-progress-four-color-active-indicator-four-color, var(--md-sys-color-tertiary-container, #ffd8e4));--_four-color-active-indicator-one-color: var(--md-linear-progress-four-color-active-indicator-one-color, var(--md-sys-color-primary, #6750a4));--_four-color-active-indicator-three-color: var(--md-linear-progress-four-color-active-indicator-three-color, var(--md-sys-color-tertiary, #7d5260));--_four-color-active-indicator-two-color: var(--md-linear-progress-four-color-active-indicator-two-color, var(--md-sys-color-primary-container, #eaddff));--_track-color: var(--md-linear-progress-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_track-height: var(--md-linear-progress-track-height, 4px);--_track-shape: var(--md-linear-progress-track-shape, 0px);border-radius:var(--_track-shape);display:flex;position:relative;width:80px;height:var(--_track-height);content-visibility:auto;contain:strict}.progress,.dots,.inactive-track,.bar,.bar-inner{position:absolute}.progress{direction:ltr;inset:0;border-radius:inherit;overflow:hidden;display:flex;align-items:center}.bar{animation:none;width:100%;height:var(--_active-indicator-height);transform-origin:left center;transition:transform 250ms cubic-bezier(0.4, 0, 0.6, 1)}.secondary-bar{display:none}.bar-inner{inset:0;animation:none;background:var(--_active-indicator-color)}.inactive-track{background:var(--_track-color);inset:0;transition:transform 250ms cubic-bezier(0.4, 0, 0.6, 1);transform-origin:left center}.dots{inset:0;animation:linear infinite 250ms;animation-name:buffering;background-color:var(--_track-color);background-repeat:repeat-x;-webkit-mask-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 5 2' preserveAspectRatio='xMinYMin slice'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 5 2' preserveAspectRatio='xMinYMin slice'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/svg%3E");z-index:-1}.indeterminate .bar{transition:none}.indeterminate .primary-bar{inset-inline-start:-145.167%}.indeterminate .secondary-bar{inset-inline-start:-54.8889%;display:block}.indeterminate .dots{display:none}.indeterminate .primary-bar{animation:linear infinite 2s;animation-name:primary-indeterminate-translate}.indeterminate .primary-bar>.bar-inner{animation:linear infinite 2s primary-indeterminate-scale}.indeterminate.four-color .primary-bar>.bar-inner{animation-name:primary-indeterminate-scale,four-color;animation-duration:2s,4s}.indeterminate .secondary-bar{animation:linear infinite 2s;animation-name:secondary-indeterminate-translate}.indeterminate .secondary-bar>.bar-inner{animation:linear infinite 2s secondary-indeterminate-scale}.indeterminate.four-color .secondary-bar>.bar-inner{animation-name:secondary-indeterminate-scale,four-color;animation-duration:2s,4s}:host-context([dir=rtl]),:host([dir=rtl]){transform:scale(-1)}:host(:dir(rtl)){transform:scale(-1)}@keyframes primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.00432);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes buffering{0%{transform:translateX(calc(var(--_track-height) / 2 * 5))}}@keyframes primary-indeterminate-translate{0%{transform:translateX(0px)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0px)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.6714%)}100%{transform:translateX(200.611%)}}@keyframes secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0px)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.6519%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.3862%)}100%{transform:translateX(160.278%)}}@keyframes four-color{0%{background:var(--_four-color-active-indicator-one-color)}15%{background:var(--_four-color-active-indicator-one-color)}25%{background:var(--_four-color-active-indicator-two-color)}40%{background:var(--_four-color-active-indicator-two-color)}50%{background:var(--_four-color-active-indicator-three-color)}65%{background:var(--_four-color-active-indicator-three-color)}75%{background:var(--_four-color-active-indicator-four-color)}90%{background:var(--_four-color-active-indicator-four-color)}100%{background:var(--_four-color-active-indicator-one-color)}}@media(forced-colors: active){:host{outline:1px solid CanvasText}.bar-inner,.dots{background-color:CanvasText}}/*# sourceMappingURL=linear-progress-styles.css.map */
`;var We=class extends ne{};We.styles=[Gt];We=s([$("md-linear-progress")],We);var q=class extends g{constructor(){super(...arguments),this.currentStep=1}render(){return h`
      <section id="form-wrapper" class="level5">
        <md-elevation></md-elevation>
        <form>
          <p class="label-medium">Schritt ${this.currentStep} von 3</p>
          <md-linear-progress .value=${this.currentStep/3}></md-linear-progress>
          ${this._renderStepOne()}
        </form>
      </section>
    `}_handleSubmission(e){this.currentStep+=1,e.preventDefault(),this.formElement.checkValidity()&&(this.dispatchEvent(new CustomEvent("completed-application")),this.formElement.submit())}_renderStepOne(){return h`
    <div class="row">
      <div class="column">
        <h2 class="display-small">Erzähle uns etwas über Dich:</h2>
        <h3 class="headline-large">XING baller League</h3>
        <div class="form-elements-container column">
          <md-outlined-text-field
            label="Vorname"
            required
            autocomplete="given-name"
          ></md-outlined-text-field>
          <md-outlined-text-field
            label="Nachname"
            required
            autocomplete="family-name"
          ></md-outlined-text-field>
          <md-outlined-text-field
            label="Email"
            required
            autocomplete="email"
            type="email"
          ></md-outlined-text-field>
          <md-outlined-text-field
            label="Phone"
            autocomplete="tel"
            type="tel"
          ></md-outlined-text-field>
          <md-outlined-text-field
            label="Geburtsdatum"
            required
            autocomplete="bday"
            type="date"
          ></md-outlined-text-field>
        </div>
      </div>
      <div class="column"></div>
    </div>
    <div class="row-reverse">
      <md-filled-button @click=${this._handleSubmission} type="submit">Weiter</md-filled-button>
    </div>
    `}};q.styles=[yt,bt];s([l({type:Number})],q.prototype,"currentStep",void 0);s([E('md-filled-button[type="submit"]')],q.prototype,"submitButton",void 0);s([E("form")],q.prototype,"formElement",void 0);q=s([$("baller-form")],q);})();
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

@material/web/progress/internal/progress.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/progress/internal/linear-progress.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/progress/internal/linear-progress-styles.css.js:
  (**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    *)

@material/web/progress/linear-progress.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)
*/
//# sourceMappingURL=baller-form-bundle.js.map
