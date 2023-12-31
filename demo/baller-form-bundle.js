"use strict";(()=>{function a(o,e,t,i){var r=arguments.length,l=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,e,t,i);else for(var h=o.length-1;h>=0;h--)(s=o[h])&&(l=(r<3?s(l):r>3?s(e,t,l):s(e,t))||l);return r>3&&l&&Object.defineProperty(e,t,l),l}var ot=window,rt=ot.ShadowRoot&&(ot.ShadyCSS===void 0||ot.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Nt=Symbol(),Oi=new WeakMap,Fe=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Nt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(rt&&e===void 0){let i=t!==void 0&&t.length===1;i&&(e=Oi.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Oi.set(t,e))}return e}toString(){return this.cssText}},Ri=o=>new Fe(typeof o=="string"?o:o+"",void 0,Nt),_=(o,...e)=>{let t=o.length===1?o[0]:e.reduce((i,r,l)=>i+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+o[l+1],o[0]);return new Fe(t,o,Nt)},Ft=(o,e)=>{rt?o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{let i=document.createElement("style"),r=ot.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=t.cssText,o.appendChild(i)})},at=rt?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(let i of e.cssRules)t+=i.cssText;return Ri(t)})(o):o;var Bt,lt=window,Li=lt.trustedTypes,lr=Li?Li.emptyScript:"",Di=lt.reactiveElementPolyfillSupport,Ut={toAttribute(o,e){switch(e){case Boolean:o=o?lr:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},nt=(o,e)=>e!==o&&(e==e||o==o),Vt={attribute:!0,type:String,converter:Ut,reflect:!1,hasChanged:nt},Ht="finalized",ue=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();let e=[];return this.elementProperties.forEach((t,i)=>{let r=this._$Ep(i,t);r!==void 0&&(this._$Ev.set(r,i),e.push(r))}),e}static createProperty(e,t=Vt){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){let i=typeof e=="symbol"?Symbol():"__"+e,r=this.getPropertyDescriptor(e,i,t);r!==void 0&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(r){let l=this[e];this[t]=r,this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Vt}static finalize(){if(this.hasOwnProperty(Ht))return!1;this[Ht]=!0;let e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(let r of i)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let i=new Set(e.flat(1/0).reverse());for(let r of i)t.unshift(at(r))}else e!==void 0&&t.push(at(e));return t}static _$Ep(e,t){let i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;let t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Ft(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=Vt){var r;let l=this.constructor._$Ep(e,i);if(l!==void 0&&i.reflect===!0){let s=(((r=i.converter)===null||r===void 0?void 0:r.toAttribute)!==void 0?i.converter:Ut).toAttribute(t,i.type);this._$El=e,s==null?this.removeAttribute(l):this.setAttribute(l,s),this._$El=null}}_$AK(e,t){var i;let r=this.constructor,l=r._$Ev.get(e);if(l!==void 0&&this._$El!==l){let s=r.getPropertyOptions(l),h=typeof s.converter=="function"?{fromAttribute:s.converter}:((i=s.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?s.converter:Ut;this._$El=l,this[l]=h.fromAttribute(t,s.type),this._$El=null}}requestUpdate(e,t,i){let r=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||nt)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((r,l)=>this[l]=r),this._$Ei=void 0);let t=!1,i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(r=>{var l;return(l=r.hostUpdate)===null||l===void 0?void 0:l.call(r)}),this.update(i)):this._$Ek()}catch(r){throw t=!1,this._$Ek(),r}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var r;return(r=i.hostUpdated)===null||r===void 0?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};ue[Ht]=!0,ue.elementProperties=new Map,ue.elementStyles=[],ue.shadowRootOptions={mode:"open"},Di?.({ReactiveElement:ue}),((Bt=lt.reactiveElementVersions)!==null&&Bt!==void 0?Bt:lt.reactiveElementVersions=[]).push("1.6.3");var qt,st=window,Ie=st.trustedTypes,Pi=Ie?Ie.createPolicy("lit-html",{createHTML:o=>o}):void 0,dt="$lit$",fe=`lit$${(Math.random()+"").slice(9)}$`,Wt="?"+fe,nr=`<${Wt}>`,Ce=document,Ve=()=>Ce.createComment(""),Ue=o=>o===null||typeof o!="object"&&typeof o!="function",Ui=Array.isArray,Hi=o=>Ui(o)||typeof o?.[Symbol.iterator]=="function",jt=`[ 	
\f\r]`,Be=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Mi=/-->/g,zi=/>/g,Ee=RegExp(`>|${jt}(?:([^\\s"'>=/]+)(${jt}*=${jt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ni=/'/g,Fi=/"/g,qi=/^(?:script|style|textarea|title)$/i,ji=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),m=ji(1),Wi=ji(2),G=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),Bi=new WeakMap,Ae=Ce.createTreeWalker(Ce,129,null,!1);function Ki(o,e){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Pi!==void 0?Pi.createHTML(e):e}var Gi=(o,e)=>{let t=o.length-1,i=[],r,l=e===2?"<svg>":"",s=Be;for(let h=0;h<t;h++){let f=o[h],v,x,y=-1,w=0;for(;w<f.length&&(s.lastIndex=w,x=s.exec(f),x!==null);)w=s.lastIndex,s===Be?x[1]==="!--"?s=Mi:x[1]!==void 0?s=zi:x[2]!==void 0?(qi.test(x[2])&&(r=RegExp("</"+x[2],"g")),s=Ee):x[3]!==void 0&&(s=Ee):s===Ee?x[0]===">"?(s=r??Be,y=-1):x[1]===void 0?y=-2:(y=s.lastIndex-x[2].length,v=x[1],s=x[3]===void 0?Ee:x[3]==='"'?Fi:Ni):s===Fi||s===Ni?s=Ee:s===Mi||s===zi?s=Be:(s=Ee,r=void 0);let k=s===Ee&&o[h+1].startsWith("/>")?" ":"";l+=s===Be?f+nr:y>=0?(i.push(v),f.slice(0,y)+dt+f.slice(y)+fe+k):f+fe+(y===-2?(i.push(void 0),h):k)}return[Ki(o,l+(o[t]||"<?>")+(e===2?"</svg>":"")),i]},He=class o{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let l=0,s=0,h=e.length-1,f=this.parts,[v,x]=Gi(e,t);if(this.el=o.createElement(v,i),Ae.currentNode=this.el.content,t===2){let y=this.el.content,w=y.firstChild;w.remove(),y.append(...w.childNodes)}for(;(r=Ae.nextNode())!==null&&f.length<h;){if(r.nodeType===1){if(r.hasAttributes()){let y=[];for(let w of r.getAttributeNames())if(w.endsWith(dt)||w.startsWith(fe)){let k=x[s++];if(y.push(w),k!==void 0){let P=r.getAttribute(k.toLowerCase()+dt).split(fe),R=/([.?@])?(.*)/.exec(k);f.push({type:1,index:l,name:R[2],strings:P,ctor:R[1]==="."?pt:R[1]==="?"?ht:R[1]==="@"?ut:Se})}else f.push({type:6,index:l})}for(let w of y)r.removeAttribute(w)}if(qi.test(r.tagName)){let y=r.textContent.split(fe),w=y.length-1;if(w>0){r.textContent=Ie?Ie.emptyScript:"";for(let k=0;k<w;k++)r.append(y[k],Ve()),Ae.nextNode(),f.push({type:2,index:++l});r.append(y[w],Ve())}}}else if(r.nodeType===8)if(r.data===Wt)f.push({type:2,index:l});else{let y=-1;for(;(y=r.data.indexOf(fe,y+1))!==-1;)f.push({type:7,index:l}),y+=fe.length-1}l++}}static createElement(e,t){let i=Ce.createElement("template");return i.innerHTML=e,i}};function Te(o,e,t=o,i){var r,l,s,h;if(e===G)return e;let f=i!==void 0?(r=t._$Co)===null||r===void 0?void 0:r[i]:t._$Cl,v=Ue(e)?void 0:e._$litDirective$;return f?.constructor!==v&&((l=f?._$AO)===null||l===void 0||l.call(f,!1),v===void 0?f=void 0:(f=new v(o),f._$AT(o,t,i)),i!==void 0?((s=(h=t)._$Co)!==null&&s!==void 0?s:h._$Co=[])[i]=f:t._$Cl=f),f!==void 0&&(e=Te(o,f._$AS(o,e.values),f,i)),e}var ct=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;let{el:{content:i},parts:r}=this._$AD,l=((t=e?.creationScope)!==null&&t!==void 0?t:Ce).importNode(i,!0);Ae.currentNode=l;let s=Ae.nextNode(),h=0,f=0,v=r[0];for(;v!==void 0;){if(h===v.index){let x;v.type===2?x=new $e(s,s.nextSibling,this,e):v.type===1?x=new v.ctor(s,v.name,v.strings,this,e):v.type===6&&(x=new ft(s,this,e)),this._$AV.push(x),v=r[++f]}h!==v?.index&&(s=Ae.nextNode(),h++)}return Ae.currentNode=Ce,l}v(e){let t=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},$e=class o{constructor(e,t,i,r){var l;this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cp=(l=r?.isConnected)===null||l===void 0||l}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Te(this,e,t),Ue(e)?e===g||e==null||e===""?(this._$AH!==g&&this._$AR(),this._$AH=g):e!==this._$AH&&e!==G&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Hi(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==g&&Ue(this._$AH)?this._$AA.nextSibling.data=e:this.$(Ce.createTextNode(e)),this._$AH=e}g(e){var t;let{values:i,_$litType$:r}=e,l=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=He.createElement(Ki(r.h,r.h[0]),this.options)),r);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===l)this._$AH.v(i);else{let s=new ct(l,this),h=s.u(this.options);s.v(i),this.$(h),this._$AH=s}}_$AC(e){let t=Bi.get(e.strings);return t===void 0&&Bi.set(e.strings,t=new He(e)),t}T(e){Ui(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,i,r=0;for(let l of e)r===t.length?t.push(i=new o(this.k(Ve()),this.k(Ve()),this,this.options)):i=t[r],i._$AI(l),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){let r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},Se=class{constructor(e,t,i,r,l){this.type=1,this._$AH=g,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=l,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=g}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,r){let l=this.strings,s=!1;if(l===void 0)e=Te(this,e,t,0),s=!Ue(e)||e!==this._$AH&&e!==G,s&&(this._$AH=e);else{let h=e,f,v;for(e=l[0],f=0;f<l.length-1;f++)v=Te(this,h[i+f],t,f),v===G&&(v=this._$AH[f]),s||(s=!Ue(v)||v!==this._$AH[f]),v===g?e=g:e!==g&&(e+=(v??"")+l[f+1]),this._$AH[f]=v}s&&!r&&this.j(e)}j(e){e===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},pt=class extends Se{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===g?void 0:e}},sr=Ie?Ie.emptyScript:"",ht=class extends Se{constructor(){super(...arguments),this.type=4}j(e){e&&e!==g?this.element.setAttribute(this.name,sr):this.element.removeAttribute(this.name)}},ut=class extends Se{constructor(e,t,i,r,l){super(e,t,i,r,l),this.type=5}_$AI(e,t=this){var i;if((e=(i=Te(this,e,t,0))!==null&&i!==void 0?i:g)===G)return;let r=this._$AH,l=e===g&&r!==g||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,s=e!==g&&(r===g||l);l&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}},ft=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Te(this,e)}},Yi={O:dt,P:fe,A:Wt,C:1,M:Gi,L:ct,R:Hi,D:Te,I:$e,V:Se,H:ht,N:ut,U:pt,F:ft},Vi=st.litHtmlPolyfillSupport;Vi?.(He,$e),((qt=st.litHtmlVersions)!==null&&qt!==void 0?qt:st.litHtmlVersions=[]).push("2.8.0");var mt=(o,e,t)=>{var i,r;let l=(i=t?.renderBefore)!==null&&i!==void 0?i:e,s=l._$litPart$;if(s===void 0){let h=(r=t?.renderBefore)!==null&&r!==void 0?r:null;l._$litPart$=s=new $e(e.insertBefore(Ve(),h),h,void 0,t??{})}return s._$AI(o),s};var Kt,Gt;var C=class extends ue{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;let i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=mt(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return G}};C.finalized=!0,C._$litElement$=!0,(Kt=globalThis.litElementHydrateSupport)===null||Kt===void 0||Kt.call(globalThis,{LitElement:C});var Zi=globalThis.litElementPolyfillSupport;Zi?.({LitElement:C});((Gt=globalThis.litElementVersions)!==null&&Gt!==void 0?Gt:globalThis.litElementVersions=[]).push("3.3.3");var I=o=>e=>typeof e=="function"?((t,i)=>(customElements.define(t,i),i))(o,e):((t,i)=>{let{kind:r,elements:l}=i;return{kind:r,elements:l,finisher(s){customElements.define(t,s)}}})(o,e);var dr=(o,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,o)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,o)}},cr=(o,e,t)=>{e.constructor.createProperty(t,o)};function p(o){return(e,t)=>t!==void 0?cr(o,e,t):dr(o,e)}function $(o){return p({...o,state:!0})}var me=({finisher:o,descriptor:e})=>(t,i)=>{var r;if(i===void 0){let l=(r=t.originalKey)!==null&&r!==void 0?r:t.key,s=e!=null?{kind:"method",placement:"prototype",key:l,descriptor:e(t.key)}:{...t,key:l};return o!=null&&(s.finisher=function(h){o(h,l)}),s}{let l=t.constructor;e!==void 0&&Object.defineProperty(t,i,e(i)),o?.(l,i)}};function b(o,e){return me({descriptor:t=>{let i={get(){var r,l;return(l=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(o))!==null&&l!==void 0?l:null},enumerable:!0,configurable:!0};if(e){let r=typeof t=="symbol"?Symbol():"__"+t;i.get=function(){var l,s;return this[r]===void 0&&(this[r]=(s=(l=this.renderRoot)===null||l===void 0?void 0:l.querySelector(o))!==null&&s!==void 0?s:null),this[r]}}return i}})}function Xi(o){return me({descriptor:e=>({get(){var t,i;return(i=(t=this.renderRoot)===null||t===void 0?void 0:t.querySelectorAll(o))!==null&&i!==void 0?i:[]},enumerable:!0,configurable:!0})})}var Yt,pr=((Yt=window.HTMLSlotElement)===null||Yt===void 0?void 0:Yt.prototype.assignedElements)!=null?(o,e)=>o.assignedElements(e):(o,e)=>o.assignedNodes(e).filter(t=>t.nodeType===Node.ELEMENT_NODE);function Q(o){let{slot:e,selector:t}=o??{};return me({descriptor:i=>({get(){var r;let l="slot"+(e?`[name=${e}]`:":not([name])"),s=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(l),h=s!=null?pr(s,o):[];return t?h.filter(f=>f.matches(t)):h},enumerable:!0,configurable:!0})})}var Ji=Symbol(),qe=class{get taskComplete(){return this.t||(this.status===1?this.t=new Promise((e,t)=>{this.i=e,this.o=t}):this.status===3?this.t=Promise.reject(this.h):this.t=Promise.resolve(this.l)),this.t}constructor(e,t,i){this.u=0,this.status=0,(this.p=e).addController(this);let r=typeof t=="object"?t:{task:t,args:i};this._=r.task,this.v=r.args,this.j=r.argsEqual??Qi,this.m=r.onComplete,this.g=r.onError,this.autoRun=r.autoRun??!0,"initialValue"in r&&(this.l=r.initialValue,this.status=2,this.k=this.A?.())}hostUpdate(){this.autoRun===!0&&this.O()}hostUpdated(){this.autoRun==="afterUpdate"&&this.O()}A(){if(this.v===void 0)return;let e=this.v();if(!Array.isArray(e))throw Error("The args function must return an array");return e}async O(){let e=this.A(),t=this.k;this.k=e,e===t||e===void 0||t!==void 0&&this.j(t,e)||await this.run(e)}async run(e){let t,i;e??=this.A(),this.k=e,this.status===1?this.T?.abort():(this.t=void 0,this.i=void 0,this.o=void 0),this.status=1,this.autoRun==="afterUpdate"?queueMicrotask(()=>this.p.requestUpdate()):this.p.requestUpdate();let r=++this.u;this.T=new AbortController;let l=!1;try{t=await this._(e,{signal:this.T.signal})}catch(s){l=!0,i=s}if(this.u===r){if(t===Ji)this.status=0;else{if(l===!1){try{this.m?.(t)}catch{}this.status=2,this.i?.(t)}else{try{this.g?.(i)}catch{}this.status=3,this.o?.(i)}this.l=t,this.h=i}this.p.requestUpdate()}}abort(e){this.status===1&&this.T?.abort(e)}get value(){return this.l}get error(){return this.h}render(e){switch(this.status){case 0:return e.initial?.();case 1:return e.pending?.();case 2:return e.complete?.(this.value);case 3:return e.error?.(this.error);default:throw Error("Unexpected status: "+this.status)}}},Qi=(o,e)=>o===e||o.length===e.length&&o.every((t,i)=>!nt(t,e[i]));(function(){"use strict";let o=new WeakMap,e=new WeakMap,t=new WeakMap,i=new WeakMap,r=new WeakMap,l=new WeakMap,s=new WeakMap,h=new WeakMap,f=new WeakMap,v=new WeakMap,x=new WeakMap,y=new WeakMap,w=new WeakMap,k=new WeakMap,P=new WeakMap,R={ariaAtomic:"aria-atomic",ariaAutoComplete:"aria-autocomplete",ariaBusy:"aria-busy",ariaChecked:"aria-checked",ariaColCount:"aria-colcount",ariaColIndex:"aria-colindex",ariaColIndexText:"aria-colindextext",ariaColSpan:"aria-colspan",ariaCurrent:"aria-current",ariaDisabled:"aria-disabled",ariaExpanded:"aria-expanded",ariaHasPopup:"aria-haspopup",ariaHidden:"aria-hidden",ariaInvalid:"aria-invalid",ariaKeyShortcuts:"aria-keyshortcuts",ariaLabel:"aria-label",ariaLevel:"aria-level",ariaLive:"aria-live",ariaModal:"aria-modal",ariaMultiLine:"aria-multiline",ariaMultiSelectable:"aria-multiselectable",ariaOrientation:"aria-orientation",ariaPlaceholder:"aria-placeholder",ariaPosInSet:"aria-posinset",ariaPressed:"aria-pressed",ariaReadOnly:"aria-readonly",ariaRelevant:"aria-relevant",ariaRequired:"aria-required",ariaRoleDescription:"aria-roledescription",ariaRowCount:"aria-rowcount",ariaRowIndex:"aria-rowindex",ariaRowIndexText:"aria-rowindextext",ariaRowSpan:"aria-rowspan",ariaSelected:"aria-selected",ariaSetSize:"aria-setsize",ariaSort:"aria-sort",ariaValueMax:"aria-valuemax",ariaValueMin:"aria-valuemin",ariaValueNow:"aria-valuenow",ariaValueText:"aria-valuetext",role:"role"},B=(d,n)=>{for(let c in R){n[c]=null;let u=null,E=R[c];Object.defineProperty(n,c,{get(){return u},set(L){u=L,d.isConnected?d.setAttribute(E,L):v.set(d,n)}})}};function X(d){let n=i.get(d),{form:c}=n;Ci(d,c,n),Ai(d,n.labels)}let O=(d,n=!1)=>{let c=document.createTreeWalker(d,NodeFilter.SHOW_ELEMENT,{acceptNode(L){return i.has(L)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}}),u=c.nextNode(),E=!n||d.disabled;for(;u;)u.formDisabledCallback&&E&&pe(u,d.disabled),u=c.nextNode()},j={attributes:!0,attributeFilter:["disabled","name"]},ie=tt()?new MutationObserver(d=>{for(let n of d){let c=n.target;if(n.attributeName==="disabled"&&(c.constructor.formAssociated?pe(c,c.hasAttribute("disabled")):c.localName==="fieldset"&&O(c)),n.attributeName==="name"&&c.constructor.formAssociated){let u=i.get(c),E=f.get(c);u.setFormValue(E)}}}):{};function K(d){d.forEach(n=>{let{addedNodes:c,removedNodes:u}=n,E=Array.from(c),L=Array.from(u);E.forEach(S=>{if(i.has(S)&&S.constructor.formAssociated&&X(S),v.has(S)){let V=v.get(S);Object.keys(R).filter(J=>V[J]!==null).forEach(J=>{S.setAttribute(R[J],V[J])}),v.delete(S)}if(P.has(S)){let V=P.get(S);S.setAttribute("internals-valid",V.validity.valid.toString()),S.setAttribute("internals-invalid",(!V.validity.valid).toString()),S.setAttribute("aria-invalid",(!V.validity.valid).toString()),P.delete(S)}if(S.localName==="form"){let V=h.get(S),oe=document.createTreeWalker(S,NodeFilter.SHOW_ELEMENT,{acceptNode(Ne){return i.has(Ne)&&Ne.constructor.formAssociated&&!(V&&V.has(Ne))?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}}),J=oe.nextNode();for(;J;)X(J),J=oe.nextNode()}S.localName==="fieldset"&&(ie.observe?.(S,j),O(S,!0))}),L.forEach(S=>{let V=i.get(S);V&&t.get(V)&&le(V),s.has(S)&&s.get(S).disconnect()})})}function H(d){d.forEach(n=>{let{removedNodes:c}=n;c.forEach(u=>{let E=w.get(n.target);i.has(u)&&Si(u),E.disconnect()})})}let ce=d=>{let n=new MutationObserver(H);n.observe?.(d,{childList:!0}),w.set(d,n)};tt()&&new MutationObserver(K);let se={childList:!0,subtree:!0},pe=(d,n)=>{d.toggleAttribute("internals-disabled",n),n?d.setAttribute("aria-disabled","true"):d.removeAttribute("aria-disabled"),d.formDisabledCallback&&d.formDisabledCallback.apply(d,[n])},le=d=>{t.get(d).forEach(c=>{c.remove()}),t.set(d,[])},Ei=(d,n)=>{let c=document.createElement("input");return c.type="hidden",c.name=d.getAttribute("name"),d.after(c),t.get(n).push(c),c},Ko=(d,n)=>{t.set(n,[]),ie.observe?.(d,j)},Ai=(d,n)=>{if(n.length){Array.from(n).forEach(u=>u.addEventListener("click",d.click.bind(d)));let c=n[0].id;n[0].id||(c=`${n[0].htmlFor}_Label`,n[0].id=c),d.setAttribute("aria-labelledby",c)}},Qe=d=>{let n=Array.from(d.elements).filter(L=>!L.tagName.includes("-")&&L.validity).map(L=>L.validity.valid),c=h.get(d)||[],u=Array.from(c).filter(L=>L.isConnected).map(L=>i.get(L).validity.valid),E=[...n,...u].includes(!1);d.toggleAttribute("internals-invalid",E),d.toggleAttribute("internals-valid",!E)},Go=d=>{Qe(et(d.target))},Yo=d=>{Qe(et(d.target))},Zo=d=>{let n=["button[type=submit]","input[type=submit]","button:not([type])"].map(c=>`${c}:not([disabled])`).map(c=>`${c}:not([form])${d.id?`,${c}[form='${d.id}']`:""}`).join(",");d.addEventListener("click",c=>{if(c.target.closest(n)){let E=h.get(d);if(d.noValidate)return;E.size&&Array.from(E).reverse().map(V=>i.get(V).reportValidity()).includes(!1)&&c.preventDefault()}})},Xo=d=>{let n=h.get(d.target);n&&n.size&&n.forEach(c=>{c.constructor.formAssociated&&c.formResetCallback&&c.formResetCallback.apply(c)})},Ci=(d,n,c)=>{if(n){let u=h.get(n);if(u)u.add(d);else{let E=new Set;E.add(d),h.set(n,E),Zo(n),n.addEventListener("reset",Xo),n.addEventListener("input",Go),n.addEventListener("change",Yo)}l.set(n,{ref:d,internals:c}),d.constructor.formAssociated&&d.formAssociatedCallback&&setTimeout(()=>{d.formAssociatedCallback.apply(d,[n])},0),Qe(n)}},et=d=>{let n=d.parentNode;return n&&n.tagName!=="FORM"&&(n=et(n)),n},he=(d,n,c=DOMException)=>{if(!d.constructor.formAssociated)throw new c(n)},Ti=(d,n,c)=>{let u=h.get(d);return u&&u.size&&u.forEach(E=>{i.get(E)[c]()||(n=!1)}),n},Si=d=>{if(d.constructor.formAssociated){let n=i.get(d),{labels:c,form:u}=n;Ai(d,c),Ci(d,u,n)}};function tt(){return typeof MutationObserver<"u"}class Jo{constructor(){this.badInput=!1,this.customError=!1,this.patternMismatch=!1,this.rangeOverflow=!1,this.rangeUnderflow=!1,this.stepMismatch=!1,this.tooLong=!1,this.tooShort=!1,this.typeMismatch=!1,this.valid=!0,this.valueMissing=!1,Object.seal(this)}}let Qo=d=>(d.badInput=!1,d.customError=!1,d.patternMismatch=!1,d.rangeOverflow=!1,d.rangeUnderflow=!1,d.stepMismatch=!1,d.tooLong=!1,d.tooShort=!1,d.typeMismatch=!1,d.valid=!0,d.valueMissing=!1,d),er=(d,n,c)=>(d.valid=tr(n),Object.keys(n).forEach(u=>d[u]=n[u]),c&&Qe(c),d),tr=d=>{let n=!0;for(let c in d)c!=="valid"&&d[c]!==!1&&(n=!1);return n},zt=new WeakMap;function ki(d,n){d.toggleAttribute(n,!0),d.part&&d.part.add(n)}class it extends Set{static get isPolyfilled(){return!0}constructor(n){if(super(),!n||!n.tagName||n.tagName.indexOf("-")===-1)throw new TypeError("Illegal constructor");zt.set(this,n)}add(n){if(!/^--/.test(n)||typeof n!="string")throw new DOMException(`Failed to execute 'add' on 'CustomStateSet': The specified value ${n} must start with '--'.`);let c=super.add(n),u=zt.get(this),E=`state${n}`;return u.isConnected?ki(u,E):setTimeout(()=>{ki(u,E)}),c}clear(){for(let[n]of this.entries())this.delete(n);super.clear()}delete(n){let c=super.delete(n),u=zt.get(this);return u.isConnected?(u.toggleAttribute(`state${n}`,!1),u.part&&u.part.remove(`state${n}`)):setTimeout(()=>{u.toggleAttribute(`state${n}`,!1),u.part&&u.part.remove(`state${n}`)}),c}}function Ii(d,n,c,u){if(c==="a"&&!u)throw new TypeError("Private accessor was defined without a getter");if(typeof n=="function"?d!==n||!u:!n.has(d))throw new TypeError("Cannot read private member from an object whose class did not declare it");return c==="m"?u:c==="a"?u.call(d):u?u.value:n.get(d)}function ir(d,n,c,u,E){if(u==="m")throw new TypeError("Private method is not writable");if(u==="a"&&!E)throw new TypeError("Private accessor was defined without a setter");if(typeof n=="function"?d!==n||!E:!n.has(d))throw new TypeError("Cannot write private member to an object whose class did not declare it");return u==="a"?E.call(d,c):E?E.value=c:n.set(d,c),c}var ze;class or{constructor(n){ze.set(this,void 0),ir(this,ze,n,"f");for(let c=0;c<n.length;c++){let u=n[c];this[c]=u,u.hasAttribute("name")&&(this[u.getAttribute("name")]=u)}Object.freeze(this)}get length(){return Ii(this,ze,"f").length}[(ze=new WeakMap,Symbol.iterator)](){return Ii(this,ze,"f")[Symbol.iterator]()}item(n){return this[n]==null?null:this[n]}namedItem(n){return this[n]==null?null:this[n]}}function rr(){let d=HTMLFormElement.prototype.checkValidity;HTMLFormElement.prototype.checkValidity=c;let n=HTMLFormElement.prototype.reportValidity;HTMLFormElement.prototype.reportValidity=u;function c(...L){let S=d.apply(this,L);return Ti(this,S,"checkValidity")}function u(...L){let S=n.apply(this,L);return Ti(this,S,"reportValidity")}let{get:E}=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"elements");Object.defineProperty(HTMLFormElement.prototype,"elements",{get(...L){let S=E.call(this,...L),V=Array.from(h.get(this)||[]);if(V.length===0)return S;let oe=Array.from(S).concat(V).sort((J,Ne)=>J.compareDocumentPosition?J.compareDocumentPosition(Ne)&2?1:-1:0);return new or(oe)}})}class $i{static get isPolyfilled(){return!0}constructor(n){if(!n||!n.tagName||n.tagName.indexOf("-")===-1)throw new TypeError("Illegal constructor");let c=n.getRootNode(),u=new Jo;this.states=new it(n),o.set(this,n),e.set(this,u),i.set(n,this),B(n,this),Ko(n,this),Object.seal(this),c instanceof DocumentFragment&&ce(c)}checkValidity(){let n=o.get(this);if(he(n,"Failed to execute 'checkValidity' on 'ElementInternals': The target element is not a form-associated custom element."),!this.willValidate)return!0;let c=e.get(this);if(!c.valid){let u=new Event("invalid",{bubbles:!1,cancelable:!0,composed:!1});n.dispatchEvent(u)}return c.valid}get form(){let n=o.get(this);he(n,"Failed to read the 'form' property from 'ElementInternals': The target element is not a form-associated custom element.");let c;return n.constructor.formAssociated===!0&&(c=et(n)),c}get labels(){let n=o.get(this);he(n,"Failed to read the 'labels' property from 'ElementInternals': The target element is not a form-associated custom element.");let c=n.getAttribute("id"),u=n.getRootNode();return u&&c?u.querySelectorAll(`[for="${c}"]`):[]}reportValidity(){let n=o.get(this);if(he(n,"Failed to execute 'reportValidity' on 'ElementInternals': The target element is not a form-associated custom element."),!this.willValidate)return!0;let c=this.checkValidity(),u=y.get(this);if(u&&!n.constructor.formAssociated)throw new DOMException("Failed to execute 'reportValidity' on 'ElementInternals': The target element is not a form-associated custom element.");return!c&&u&&(n.focus(),u.focus()),c}setFormValue(n){let c=o.get(this);if(he(c,"Failed to execute 'setFormValue' on 'ElementInternals': The target element is not a form-associated custom element."),le(this),n!=null&&!(n instanceof FormData)){if(c.getAttribute("name")){let u=Ei(c,this);u.value=n}}else n!=null&&n instanceof FormData&&Array.from(n).reverse().forEach(([u,E])=>{if(typeof E=="string"){let L=Ei(c,this);L.name=u,L.value=E}});f.set(c,n)}setValidity(n,c,u){let E=o.get(this);if(he(E,"Failed to execute 'setValidity' on 'ElementInternals': The target element is not a form-associated custom element."),!n)throw new TypeError("Failed to execute 'setValidity' on 'ElementInternals': 1 argument required, but only 0 present.");y.set(this,u);let L=e.get(this),S={};for(let J in n)S[J]=n[J];Object.keys(S).length===0&&Qo(L);let V={...L,...S};delete V.valid;let{valid:oe}=er(L,V,this.form);if(!oe&&!c)throw new DOMException("Failed to execute 'setValidity' on 'ElementInternals': The second argument should not be empty if one or more flags in the first argument are true.");r.set(this,oe?"":c),E.isConnected?(E.toggleAttribute("internals-invalid",!oe),E.toggleAttribute("internals-valid",oe),E.setAttribute("aria-invalid",`${!oe}`)):P.set(E,this)}get shadowRoot(){let n=o.get(this),c=x.get(n);return c||null}get validationMessage(){let n=o.get(this);return he(n,"Failed to read the 'validationMessage' property from 'ElementInternals': The target element is not a form-associated custom element."),r.get(this)}get validity(){let n=o.get(this);return he(n,"Failed to read the 'validity' property from 'ElementInternals': The target element is not a form-associated custom element."),e.get(this)}get willValidate(){let n=o.get(this);return he(n,"Failed to read the 'willValidate' property from 'ElementInternals': The target element is not a form-associated custom element."),!(n.disabled||n.hasAttribute("disabled")||n.hasAttribute("readonly"))}}function ar(){if(typeof window>"u"||!window.ElementInternals||!HTMLElement.prototype.attachInternals)return!1;class d extends HTMLElement{constructor(){super(),this.internals=this.attachInternals()}}let n=`element-internals-feature-detection-${Math.random().toString(36).replace(/[^a-z]+/g,"")}`;customElements.define(n,d);let c=new d;return["shadowRoot","form","willValidate","validity","validationMessage","labels","setFormValue","setValidity","checkValidity","reportValidity"].every(u=>u in c.internals)}if(ar()){if(typeof window<"u"&&!window.CustomStateSet){window.CustomStateSet=it;let d=HTMLElement.prototype.attachInternals;HTMLElement.prototype.attachInternals=function(...n){let c=d.call(this,n);return c.states=new it(this),c}}}else{if(typeof window<"u"&&(window.ElementInternals=$i),typeof CustomElementRegistry<"u"){let d=CustomElementRegistry.prototype.define;CustomElementRegistry.prototype.define=function(n,c,u){if(c.formAssociated){let E=c.prototype.connectedCallback;c.prototype.connectedCallback=function(){k.has(this)||(k.set(this,!0),this.hasAttribute("disabled")&&pe(this,!0)),E?.apply(this),Si(this)}}d.call(this,n,c,u)}}if(typeof HTMLElement<"u"&&(HTMLElement.prototype.attachInternals=function(){if(this.tagName){if(this.tagName.indexOf("-")===-1)throw new Error("Failed to execute 'attachInternals' on 'HTMLElement': Unable to attach ElementInternals to non-custom elements.")}else return{};if(i.has(this))throw new DOMException("DOMException: Failed to execute 'attachInternals' on 'HTMLElement': ElementInternals for the specified element was already attached.");return new $i(this)}),typeof Element<"u"){let d=function(...c){let u=n.apply(this,c);if(x.set(this,u),tt()){let E=new MutationObserver(K);window.ShadyDOM?E.observe(this,se):E.observe(u,se),s.set(this,E)}return u},n=Element.prototype.attachShadow;Element.prototype.attachShadow=d}tt()&&typeof document<"u"&&new MutationObserver(K).observe(document.documentElement,se),typeof HTMLFormElement<"u"&&rr(),typeof window<"u"&&!window.CustomStateSet&&(window.CustomStateSet=it)}})();var eo=_`
  :host {
    display: block;
    color: var(--baller-form-color-on-background, #1b1c17);
    font-family: var(--baller-form-font-family, "Open Sans", "Trebuchet MS", Arial, "Helvetica Neue", sans-serif);

    --md-sys-color-primary: var(--baller-form-color-primary);
    --md-sys-color-on-primary: var(--baller-form-color-on-primary);
    --md-sys-color-primary-container: var(--baller-form-color-primary-container);
    --md-sys-color-on-primary-container: var(--baller-form-color-on-primary-container);

    --md-sys-color-error: var(--baller-form-color-error, #ba1a1a);
    --md-sys-color-on-error: var(--baller-form-color-on-error: #ffffff);
    --md-sys-color-error-container: var(--baller-form-color-error-container, #ffdad6);
    --md-sys-color-on-error-container: var(--baller-form-color-on-error-container: #410002);

    --md-sys-color-secondary: var(--baller-form-color-secondary);
    --md-sys-color-on-secondary: var(--baller-form-color-on-secondary);
    --md-sys-color-secondary-container: var(--baller-form-color-secondary-container);
    --md-sys-color-on-secondary-container: var(--baller-form-color-on-secondary-container);
    --md-sys-color-secondary-container: var(--brand-color-black);
    --md-sys-color-on-secondary-container: #fff;

    --md-sys-color-tertiary: var(--baller-form-color-tertiary);
    --md-sys-color-on-tertiary: var(--baller-form-color-on-tertiary);
    --md-sys-color-tertiary-container: var(--baller-form-color-tertiary-container);
    --md-sys-color-on-tertiary-container: var(--baller-form-color-on-tertiary-container);

    --md-sys-color-surface: var(--baller-form-color-surface);
    --md-sys-color-on-surface: var(--baller-form-color-on-surface);
    --md-sys-color-surface-container: var(--baller-form-color-surface-container);
    --md-sys-color-on-surface-container: var(--baller-form-color-on-surface-container);

    --md-ref-typeface-plain: var(--baller-form-font-family, "Open Sans", "Trebuchet MS", Arial, "Helvetica Neue", sans-serif);

  }

  md-filled-select {
    --md-filled-select-text-field-active-indicator-color: #5E737D;
    --md-filled-select-text-field-trailing-icon-color: #5E737D;
    --md-filled-select-text-field-hover-trailing-icon-color: #5E737D;
    --md-filled-select-text-field-container-color: #F4F4F5;
    --md-filled-select-text-field-input-text-color: #5E737D;
    --md-filled-select-text-field-label-text-color: #5E737D;
    --md-menu-item-label-text-color: var(--baller-form-color-secondary, #5E737D);
    --md-menu-item-label-text-color: #5E737D;
  }

  md-checkbox {
    --md-checkbox-outline-color: #BCC9D1;
    --md-checkbox-selected-container-color: var(--baller-form-selected-container-color, #4b6700);
    --md-checkbox-selected-icon-color: var(--baller-form-selected-icon-color, #ffffff);
  }

  md-filled-text-field {
    --md-filled-text-field-active-indicator-color: #5E737D;
    --md-filled-text-field-container-color: #F4F4F5;
    --md-filled-text-field-input-text-color: #5E737D;
    --md-filled-field-label-text-color: #5E737D;
    --md-filled-field-hover-label-text-color: #5E737D;
    --md-filled-field-hover-input-text-color: #5E737D;
    --md-filled-field-supporting-text-color: #5E737D;
    --md-filled-field-hover-supporting-text-color: #5E737D;
    --md-filled-text-field-focus-outline-color: var(--baller-form-text-field-focus-outline-color, #4b6700);
    --md-filled-text-field-label-text-font: var(--baller-form-font-family, "Open Sans", "Trebuchet MS", Arial, "Helvetica Neue", sans-serif);
    --md-filled-text-field-input-text-font: var(--baller-form-font-family, "Open Sans", "Trebuchet MS", Arial, "Helvetica Neue", sans-serif);
  }

  md-outlined-button {
    --md-outlined-button-label-text-size: 18px;
    --md-outlined-button-label-text-weight: 700;
    --md-outlined-button-outline-width: 2px;
    --md-outlined-button-outline-color: var(--baller-form-color-primary);
    --md-outlined-button-label-text-color: var(--baller-form-color-primary);
    --md-filled-button-container-color: var(--baller-form-filled-button-container-color, #4b6700);
    --md-filled-button-container-shape: var(--baller-form-filled-button-container-shape, 9999px);
  }

  md-outlined-select {
    --md-outlined-select-text-field-outline-color: var(--baller-form-outlined-select-text-field-outline-color, #76786b);
    --md-outlined-select-text-field-input-text-color: var(--baller-form-outlined-select-text-field-input-text-color, #1b1c17);
    --md-outlined-select-text-field-input-text-font: var(--baller-form-font-family, "Open Sans", "Trebuchet MS", Arial, "Helvetica Neue", sans-serif);
  }

  md-filled-text-field[type="textarea"] {
    word-break: break-all;
  }

  md-filled-select::part(menu) {
    --md-sys-color-secondary: blue;
    --md-menu-container-color: #F4F4F5;
    --md-menu-list-item-selected-label-text-color: #0698A0;
    --md-menu-list-item-selected-container-color: #ba1a1a;
    --md-menu-list-item-label-text-color: #5E737D
    width: 100%;
  }

  #form-wrapper {
    background-color: var(--baller-form-color-background, #fefcf4);
    padding: 1.5rem;
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
  }

  .hidden {
    display: none;
  }

  .invisible-icon {
    height: 18px;
    width: 18px;
  }

  .medium-top-padding {
    margin-top: 1.5rem;
  }

  .big-top-padding {
    padding-block-start: 2.5rem;
  }

  .contain-shape {
    max-width: 420px;
  }

  /* Typography */
  .display-small {
    font-family: var(--baller-form-display-headline-large-font-family, "Open Sans", "Trebuchet MS", Arial, "Helvetica Neue", sans-serif);
    font-weight: 700;
    font-size: 32px;
    letter-spacing: var(--baller-form-display-headline-large-letter-spacing, 0px);
    line-height: 38px;
    color: #1D2124;
  }

  .headline-small {
    font-family: var(--baller-form-display-headline-small-font-family, "Open Sans", "Trebuchet MS", Arial, "Helvetica Neue", sans-serif);
    font-weight: 400;
    font-size: 18px;
    letter-spacing: var(--baller-form-display-headline-small-letter-spacing, 0px);
    line-height: 27px;
    color: #1D2124;
  }

  .label-medium {
    font-family: var(--baller-form-display-label-medium-font-family, "Open Sans", "Trebuchet MS", Arial, "Helvetica Neue", sans-serif);
    font-weight: 400;
    font-size: 16px;
    letter-spacing: var(--baller-form-display-label-medium-letter-spacing, 0.5px);
    line-height: 20px;
    color: #1D2124;
  }

  /* Tooltip */
  .field-with-tooltip {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .tooltip-toggle {
    cursor: pointer;
    position: relative;
  }

  .tooltip-toggle svg {
    height: 18px;
    width: 18px;
  }
  
  .tooltip-toggle::before {
    position: absolute;
    top: -100px;
    left: -250px;
    background-color: #fff;
    border-radius: 5px;
    color: #fff;
    content: attr(aria-label);
    padding: 1rem;
    text-transform: none;
    transition: all 0.5s ease;
    min-width: 160px;
    z-index:50;
    font-weight: 400;
    font-size: 16px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }
  
  .tooltip-toggle::before, .tooltip-toggle::after {
    color: var(--baller-form-color-on-surface-variant);
    opacity: 0;
    pointer-events: none;
    text-align: left
  }
  
  .tooltip-toggle:focus::before, .tooltip-toggle:focus::after, .tooltip-toggle:hover::before, .tooltip-toggle:hover::after {
    opacity: 1;
    transition: all 0.75s ease;
  }
`;var vt=class o{constructor(e){this.givenName=e.givenName,this.familyName=e.familyName,this.telephone=e.telephone,this.email=e.email,this.birthDate=o.normalizeBirthDate(e.birthDate),this.shirt=e.shirtSize,this.bundesland=e.bundesland,this.currentCountry=o.normalizeCountry(e.bundesland,e.customCurrentCountry),this.position=e.position,this.currentTeamCountry=o.normalizeCurrentTeamCountry(e.currentPlayingStatus,e.currentFootballCountry),this.currentTeamType=e.teamType,this.currentLeague=o.normalizeLeague(e.currentPlayingStatus,e.germanLeague,e.internationalLeague),this.highestTeamCountry=o.normalizeHighestCountry(e.highestExperience,e.highestInternationalCountry),this.highestTeamLeague=o.normalizeHighestLeague(e.highestExperience,e.highestDomesticLeague,e.highestInternationalLeague,e.otherLeague),this.clubName=e.clubName,this.otherExperience=e.otherExperience,this.otherDomesticLeague=e.otherLeague,this.highlightTape=e.highlightTape,this.transfermarktProfile=e.transfermarktProfile,this.youTube=e.youTube,this.instagram=e.instagram,this.tikTok=e.tiktok,this.xing=e.xing,this.comments=e.comments,this.availability=e.availability,this.acceptedTos=e.acceptedTos}static normalizeBirthDate(e){let t=e.getFullYear(),i=e.getMonth()+1,r=e.getDate(),l=i<10?`0${i}`:i,s=r<10?`0${r}`:r;return`${t}-${l}-${s}`}static normalizeLeague(e,t,i){return e==="deutschland"?t:e==="international"?i:""}static normalizeHighestCountry(e,t){return e==="deutschland"?"Deutschland":e==="international"?t:""}static normalizeCurrentTeamCountry(e,t){return e==="deutschland"?"Deutschland":e==="international"?t:""}static normalizeHighestLeague(e,t,i,r){return e==="deutschland"?t==="andere"?r:t:e==="international"?i:"Same as current"}static normalizeCountry(e,t){return e==="Ausland"?t:"Deutschland"}};var gt=class o{constructor(e){this.endpoint=new URL(e,window.location.origin)}static handleBrazeResponse(e){if(e.errors)throw console.error(e),new Error("Invalid Braze API response.")}async process(e){let t=o.prepareDataForBraze(e),i=await this.sendDataToBraze(t),r=JSON.parse(i);o.handleBrazeResponse(r)}async sendDataToBraze(e){return(await fetch(this.endpoint,{method:"POST",cache:"no-cache",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify(e)})).json()}static prepareDataForBraze(e){return{events:[{email:e.email,app_id:"220983e3-8db5-49d5-8272-620b09b1f7fa",name:"Submit_BallerLeague_Application",time:new Date().toISOString()}],attributes:[{email:e.email,first_name:e.givenName,last_name:e.familyName,tel:e.telephone,accepted_conditions:e.acceptedTos,personal_details:{first_name:e.givenName,last_name:e.familyName,email:e.email,tel:e.telephone,dob:e.birthDate,bundesland:e.bundesland,current_country:e.currentCountry,clothes_size:e.shirt},experience_level:{position:e.position,current_status:{land:e.currentTeamCountry,association:e.clubName,team_type:e.currentTeamType,league:e.currentLeague,other:e.otherExperience},highest_status:{land:e.highestTeamCountry,league:e.highestTeamLeague}},other_details:{highlight_tape:e.highlightTape,link_transfermarket:e.transfermarktProfile,youtube_link:e.youTube,instagram_link:e.instagram,tiktok_link:e.tikTok,xing:e.xing,comment:e.comments,availability:e.availability}}]}}};var bt=class o{constructor(e,t){this.minimumTrustRequired=.4,this.featureEnabled=!0,this.siteKey=e,this.scriptURL=o.generateScriptUrl(e),this.serverSideValidationEndpoint=new URL(t,window.location.origin)}generateScriptElement(){let e=document.createElement("script");return e.async=!0,e.src=this.scriptURL.href,e}async isValidUser(){if(!this.featureEnabled)return!0;if(!("grecaptcha"in window))throw new Error("reCAPTCHA object not found");let e=await window.grecaptcha.execute(this.siteKey,{action:"submit"});try{return(await this.validateTokenWithServer(e)).score>=this.minimumTrustRequired}catch(t){throw console.error(t),new Error("Problem communicating with reCAPTCHA endpoint.")}}async validateTokenWithServer(e){let t=AbortSignal.timeout(1e4),i=await fetch(this.serverSideValidationEndpoint,{method:"POST",signal:t,cache:"no-cache",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})});if(!i.ok)throw new Error("Unable to validate Recaptcha Token with the server");return i.json()}static generateScriptUrl(e){let t=new URL("https://www.google.com/recaptcha/api.js");return t.searchParams.append("render",e),t}};var je={phone:"Es ist zwar freiwillig, die Nummer anzugeben. Aber wie sollen Dich Poldi oder Mats denn sonst anrufen, wenn es mit der Baller League klappt?",clothes:"Warum wir Deine Gr\xF6\xDFe brauchen? Easy: Kein Spiel ohne Trikots. Und die sollen am Ende doch passen, oder?",experience:"Deine Prime-Liga: / Dein h\xF6chstes Level bisher:",birthday:"Du musst mindestens 18 Jahre sein, um teilnehmen zu k\xF6nnen.",highlight:"Hier kannst du deine besten Szenen hochladen. Egal ob via YouTube, Google Drive, Dropbox oder WeTransfer: hier ist Platz f\xFCr deine Links. Achte darauf, dass die Filme g\xE4ngige Formate haben.",achievments:"Schreibe hier alles rein, was wir noch \xFCber deine Fu\xDFballkarriere wissen sollten. Torsch\xFCtzenk\xF6nig in der Kreisklasse? F\xFCnf Minuten 2. Liga Erfahrung? Erz\xE4hle uns deine Geschichten.",dates:"Teile uns bitte mit, an welchem Tag du f\xFCr den Combine verf\xFCgbar bist."};var yt=class extends C{connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}render(){return m`<span class="shadow"></span>`}};var to=_`:host{--_level: var(--md-elevation-level, 0);--_shadow-color: var(--md-elevation-shadow-color, var(--md-sys-color-shadow, #000));display:flex;pointer-events:none}:host,.shadow,.shadow::before,.shadow::after{border-radius:inherit;inset:0;position:absolute;transition-duration:inherit;transition-property:inherit;transition-timing-function:inherit}.shadow::before,.shadow::after{content:"";transition-property:box-shadow,opacity}.shadow::before{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 3,1) + 2*clamp(0,var(--_level) - 4,1))) calc(1px*(2*clamp(0,var(--_level),1) + clamp(0,var(--_level) - 2,1) + clamp(0,var(--_level) - 4,1))) 0px var(--_shadow-color);opacity:.3}.shadow::after{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 1,1) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(3*clamp(0,var(--_level),2) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(clamp(0,var(--_level),4) + 2*clamp(0,var(--_level) - 4,1))) var(--_shadow-color);opacity:.15}/*# sourceMappingURL=elevation-styles.css.map */
`;var Zt=class extends yt{};Zt.styles=[to];Zt=a([I("md-elevation")],Zt);var io=Symbol("attachableController"),oo;!1||(oo=new MutationObserver(o=>{for(let e of o)e.target[io]?.hostConnected()}));var Oe=class{get htmlFor(){return this.host.getAttribute("for")}set htmlFor(e){e===null?this.host.removeAttribute("for"):this.host.setAttribute("for",e)}get control(){return this.host.hasAttribute("for")?!this.htmlFor||!this.host.isConnected?null:this.host.getRootNode().querySelector(`#${this.htmlFor}`):this.currentControl||this.host.parentElement}set control(e){e?this.attach(e):this.detach()}constructor(e,t){this.host=e,this.onControlChange=t,this.currentControl=null,e.addController(this),e[io]=this,oo?.observe(e,{attributeFilter:["for"]})}attach(e){e!==this.currentControl&&(this.setCurrentControl(e),this.host.removeAttribute("for"))}detach(){this.setCurrentControl(null),this.host.setAttribute("for","")}hostConnected(){this.setCurrentControl(this.control)}hostDisconnected(){this.setCurrentControl(null)}setCurrentControl(e){this.onControlChange(this.currentControl,e),this.currentControl=e}};var hr=["focusin","focusout","pointerdown"],Re=class extends C{constructor(){super(...arguments),this.visible=!1,this.inward=!1,this.attachableController=new Oe(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(e){this.attachableController.htmlFor=e}get control(){return this.attachableController.control}set control(e){this.attachableController.control=e}attach(e){this.attachableController.attach(e)}detach(){this.attachableController.detach()}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}handleEvent(e){if(!e[ro]){switch(e.type){default:return;case"focusin":this.visible=this.control?.matches(":focus-visible")??!1;break;case"focusout":case"pointerdown":this.visible=!1;break}e[ro]=!0}}onControlChange(e,t){if(!!1)for(let i of hr)e?.removeEventListener(i,this),t?.addEventListener(i,this)}update(e){e.has("visible")&&this.dispatchEvent(new Event("visibility-changed")),super.update(e)}};a([p({type:Boolean,reflect:!0})],Re.prototype,"visible",void 0);a([p({type:Boolean,reflect:!0})],Re.prototype,"inward",void 0);var ro=Symbol("handledByFocusRing");var ao=_`:host{animation-delay:0s,calc(var(--md-focus-ring-duration, 600ms)*.25);animation-duration:calc(var(--md-focus-ring-duration, 600ms)*.25),calc(var(--md-focus-ring-duration, 600ms)*.75);animation-timing-function:cubic-bezier(0.2, 0, 0, 1);box-sizing:border-box;color:var(--md-focus-ring-color, var(--md-sys-color-secondary, #625b71));display:none;pointer-events:none;position:absolute}:host([visible]){display:flex}:host(:not([inward])){animation-name:outward-grow,outward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));inset:calc(-1*var(--md-focus-ring-outward-offset, 2px));outline:var(--md-focus-ring-width, 3px) solid currentColor}:host([inward]){animation-name:inward-grow,inward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border:var(--md-focus-ring-width, 3px) solid currentColor;inset:var(--md-focus-ring-inward-offset, 0px)}@keyframes outward-grow{from{outline-width:0}to{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes outward-shrink{from{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-grow{from{border-width:0}to{border-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-shrink{from{border-width:var(--md-focus-ring-active-width, 8px)}}@media(prefers-reduced-motion){:host{animation:none}}/*# sourceMappingURL=focus-ring-styles.css.map */
`;var Xt=class extends Re{};Xt.styles=[ao];Xt=a([I("md-focus-ring")],Xt);var de={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Le=o=>(...e)=>({_$litDirective$:o,values:e}),be=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var q=Le(class extends be{constructor(o){var e;if(super(o),o.type!==de.ATTRIBUTE||o.name!=="class"||((e=o.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(o){return" "+Object.keys(o).filter(e=>o[e]).join(" ")+" "}update(o,[e]){var t,i;if(this.it===void 0){this.it=new Set,o.strings!==void 0&&(this.nt=new Set(o.strings.join(" ").split(/\s/).filter(l=>l!=="")));for(let l in e)e[l]&&!(!((t=this.nt)===null||t===void 0)&&t.has(l))&&this.it.add(l);return this.render(e)}let r=o.element.classList;this.it.forEach(l=>{l in e||(r.remove(l),this.it.delete(l))});for(let l in e){let s=!!e[l];s===this.it.has(l)||!((i=this.nt)===null||i===void 0)&&i.has(l)||(s?(r.add(l),this.it.add(l)):(r.remove(l),this.it.delete(l)))}return G}});var ee={STANDARD:"cubic-bezier(0.2, 0, 0, 1)",STANDARD_ACCELERATE:"cubic-bezier(.3,0,1,1)",STANDARD_DECELERATE:"cubic-bezier(0,0,0,1)",EMPHASIZED:"cubic-bezier(.3,0,0,1)",EMPHASIZED_ACCELERATE:"cubic-bezier(.3,0,.8,.15)",EMPHASIZED_DECELERATE:"cubic-bezier(.05,.7,.1,1)"};function lo(){let o=null;return{start(){return o?.abort(),o=new AbortController,o.signal},finish(){o=null}}}var ur=450,no=225,fr=.2,mr=10,vr=75,gr=.35,br="::after",yr="forwards",Z;(function(o){o[o.INACTIVE=0]="INACTIVE",o[o.TOUCH_DELAY=1]="TOUCH_DELAY",o[o.HOLDING=2]="HOLDING",o[o.WAITING_FOR_CLICK=3]="WAITING_FOR_CLICK"})(Z||(Z={}));var xr=["click","contextmenu","pointercancel","pointerdown","pointerenter","pointerleave","pointerup"],_r=150,ye=class extends C{constructor(){super(...arguments),this.disabled=!1,this.hovered=!1,this.pressed=!1,this.rippleSize="",this.rippleScale="",this.initialSize=0,this.state=Z.INACTIVE,this.checkBoundsAfterContextMenu=!1,this.attachableController=new Oe(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(e){this.attachableController.htmlFor=e}get control(){return this.attachableController.control}set control(e){this.attachableController.control=e}attach(e){this.attachableController.attach(e)}detach(){this.attachableController.detach()}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}render(){let e={hovered:this.hovered,pressed:this.pressed};return m`<div class="surface ${q(e)}"></div>`}update(e){e.has("disabled")&&this.disabled&&(this.hovered=!1,this.pressed=!1),super.update(e)}handlePointerenter(e){this.shouldReactToEvent(e)&&(this.hovered=!0)}handlePointerleave(e){this.shouldReactToEvent(e)&&(this.hovered=!1,this.state!==Z.INACTIVE&&this.endPressAnimation())}handlePointerup(e){if(this.shouldReactToEvent(e)){if(this.state===Z.HOLDING){this.state=Z.WAITING_FOR_CLICK;return}if(this.state===Z.TOUCH_DELAY){this.state=Z.WAITING_FOR_CLICK,this.startPressAnimation(this.rippleStartEvent);return}}}async handlePointerdown(e){if(this.shouldReactToEvent(e)){if(this.rippleStartEvent=e,!this.isTouch(e)){this.state=Z.WAITING_FOR_CLICK,this.startPressAnimation(e);return}this.checkBoundsAfterContextMenu&&!this.inBounds(e)||(this.checkBoundsAfterContextMenu=!1,this.state=Z.TOUCH_DELAY,await new Promise(t=>{setTimeout(t,_r)}),this.state===Z.TOUCH_DELAY&&(this.state=Z.HOLDING,this.startPressAnimation(e)))}}handleClick(){if(!this.disabled){if(this.state===Z.WAITING_FOR_CLICK){this.endPressAnimation();return}this.state===Z.INACTIVE&&(this.startPressAnimation(),this.endPressAnimation())}}handlePointercancel(e){this.shouldReactToEvent(e)&&this.endPressAnimation()}handleContextmenu(){this.disabled||(this.checkBoundsAfterContextMenu=!0,this.endPressAnimation())}determineRippleSize(){let{height:e,width:t}=this.getBoundingClientRect(),i=Math.max(e,t),r=Math.max(gr*i,vr),l=Math.floor(i*fr),h=Math.sqrt(t**2+e**2)+mr;this.initialSize=l,this.rippleScale=`${(h+r)/l}`,this.rippleSize=`${l}px`}getNormalizedPointerEventCoords(e){let{scrollX:t,scrollY:i}=window,{left:r,top:l}=this.getBoundingClientRect(),s=t+r,h=i+l,{pageX:f,pageY:v}=e;return{x:f-s,y:v-h}}getTranslationCoordinates(e){let{height:t,width:i}=this.getBoundingClientRect(),r={x:(i-this.initialSize)/2,y:(t-this.initialSize)/2},l;return e instanceof PointerEvent?l=this.getNormalizedPointerEventCoords(e):l={x:i/2,y:t/2},l={x:l.x-this.initialSize/2,y:l.y-this.initialSize/2},{startPoint:l,endPoint:r}}startPressAnimation(e){if(!this.mdRoot)return;this.pressed=!0,this.growAnimation?.cancel(),this.determineRippleSize();let{startPoint:t,endPoint:i}=this.getTranslationCoordinates(e),r=`${t.x}px, ${t.y}px`,l=`${i.x}px, ${i.y}px`;this.growAnimation=this.mdRoot.animate({top:[0,0],left:[0,0],height:[this.rippleSize,this.rippleSize],width:[this.rippleSize,this.rippleSize],transform:[`translate(${r}) scale(1)`,`translate(${l}) scale(${this.rippleScale})`]},{pseudoElement:br,duration:ur,easing:ee.STANDARD,fill:yr})}async endPressAnimation(){this.state=Z.INACTIVE;let e=this.growAnimation,t=e?.currentTime??1/0;if(t>=no){this.pressed=!1;return}await new Promise(i=>{setTimeout(i,no-t)}),this.growAnimation===e&&(this.pressed=!1)}shouldReactToEvent(e){if(this.disabled||!e.isPrimary||this.rippleStartEvent&&this.rippleStartEvent.pointerId!==e.pointerId)return!1;if(e.type==="pointerenter"||e.type==="pointerleave")return!this.isTouch(e);let t=e.buttons===1;return this.isTouch(e)||t}inBounds({x:e,y:t}){let{top:i,left:r,bottom:l,right:s}=this.getBoundingClientRect();return e>=r&&e<=s&&t>=i&&t<=l}isTouch({pointerType:e}){return e==="touch"}async handleEvent(e){switch(e.type){case"click":this.handleClick();break;case"contextmenu":this.handleContextmenu();break;case"pointercancel":this.handlePointercancel(e);break;case"pointerdown":await this.handlePointerdown(e);break;case"pointerenter":this.handlePointerenter(e);break;case"pointerleave":this.handlePointerleave(e);break;case"pointerup":this.handlePointerup(e);break;default:break}}onControlChange(e,t){if(!!1)for(let i of xr)e?.removeEventListener(i,this),t?.addEventListener(i,this)}};a([p({type:Boolean,reflect:!0})],ye.prototype,"disabled",void 0);a([$()],ye.prototype,"hovered",void 0);a([$()],ye.prototype,"pressed",void 0);a([b(".surface")],ye.prototype,"mdRoot",void 0);var so=_`:host{--_hover-color: var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-opacity: var(--md-ripple-hover-opacity, 0.08);--_pressed-color: var(--md-ripple-pressed-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-opacity: var(--md-ripple-pressed-opacity, 0.12);display:flex;margin:auto;pointer-events:none}:host([disabled]){display:none}@media(forced-colors: active){:host{display:none}}:host,.surface{border-radius:inherit;position:absolute;inset:0;overflow:hidden}.surface{-webkit-tap-highlight-color:rgba(0,0,0,0)}.surface::before,.surface::after{content:"";opacity:0;position:absolute}.surface::before{background-color:var(--_hover-color);inset:0;transition:opacity 15ms linear,background-color 15ms linear}.surface::after{background:radial-gradient(closest-side, var(--_pressed-color) max(100% - 70px, 65%), transparent 100%);transform-origin:center center;transition:opacity 375ms linear}.hovered::before{background-color:var(--_hover-color);opacity:var(--_hover-opacity)}.pressed::after{opacity:var(--_pressed-opacity);transition-duration:105ms}/*# sourceMappingURL=ripple-styles.css.map */
`;var Jt=class extends ye{};Jt.styles=[so];Jt=a([I("md-ripple")],Jt);var po=Symbol.for(""),wr=o=>{if(o?.r===po)return o?._$litStatic$};var ve=(o,...e)=>({_$litStatic$:e.reduce((t,i,r)=>t+(l=>{if(l._$litStatic$!==void 0)return l._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${l}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(i)+o[r+1],o[0]),r:po}),co=new Map,ho=o=>(e,...t)=>{let i=t.length,r,l,s=[],h=[],f,v=0,x=!1;for(;v<i;){for(f=e[v];v<i&&(l=t[v],(r=wr(l))!==void 0);)f+=r+e[++v],x=!0;v!==i&&h.push(l),s.push(f),v++}if(v===i&&s.push(e[i]),x){let y=s.join("$$lit$$");(e=co.get(y))===void 0&&(s.raw=s,co.set(y,e=s)),t=h}return o(e,...t)},De=ho(m),Dl=ho(Wi);var We=["ariaAtomic","ariaAutoComplete","ariaBusy","ariaChecked","ariaColCount","ariaColIndex","ariaColSpan","ariaCurrent","ariaDisabled","ariaExpanded","ariaHasPopup","ariaHidden","ariaInvalid","ariaKeyShortcuts","ariaLabel","ariaLevel","ariaLive","ariaModal","ariaMultiLine","ariaMultiSelectable","ariaOrientation","ariaPlaceholder","ariaPosInSet","ariaPressed","ariaReadOnly","ariaRequired","ariaRoleDescription","ariaRowCount","ariaRowIndex","ariaRowSpan","ariaSelected","ariaSetSize","ariaSort","ariaValueMax","ariaValueMin","ariaValueNow","ariaValueText"],Fl=We.map(Ke);function Ke(o){return o.replace("aria","aria-").replace(/Elements?/g,"").toLowerCase()}function uo(o,{focusable:e}={}){if(e!==!1&&o.addInitializer(t=>{t.addController({hostConnected(){t.hasAttribute("tabindex")||(t.tabIndex=0)}})}),!(!1||"role"in Element.prototype)){for(let t of We)o.createProperty(t,{attribute:Ke(t),reflect:!0});o.createProperty("role",{reflect:!0})}}function fo(o,e){if(Er(e))return e;if(!("role"in o))throw new Error("Missing setupHostAria()");let t=[],i=!1;for(let l of We){let s=null;Object.defineProperty(e,l,{enumerable:!0,configurable:!0,get(){return s},set(h){let f=()=>{if(s=h,!i){t.push({property:l,callback:f});return}o[l]=h};f()}})}let r=null;return Object.defineProperty(e,"role",{enumerable:!0,configurable:!0,get(){return r},set(l){let s=()=>{if(r=l,!i){t.push({property:"role",callback:s});return}l===null?o.removeAttribute("role"):o.setAttribute("role",l)};s()}}),o.addController({hostConnected(){if(i)return;i=!0;let l=new Set;for(let{property:s}of t)(o.getAttribute(Ke(s))!==null||o[s]!==void 0)&&l.add(s);for(let{property:s,callback:h}of t)l.has(s)||h();t=[]}}),e}function Er(o){return"role"in o}function ne(o){for(let e of We)o.createProperty(e,{attribute:Ke(e),reflect:!0});o.addInitializer(e=>{let t={hostConnected(){e.setAttribute("role","presentation")}};e.addController(t)})}var Ge=Symbol("internals");function xe(o,e){e.bubbles&&(!o.shadowRoot||e.composed)&&e.stopPropagation();let t=Reflect.construct(e.constructor,[e.type,e]),i=o.dispatchEvent(t);return i||e.preventDefault(),i}function xt(o){let e=new MouseEvent("click",{bubbles:!0});return o.dispatchEvent(e),e}function _t(o){return o.currentTarget!==o.target||o.composedPath()[0]!==o.target||o.target.disabled?!1:!Ar(o)}function Ar(o){let e=Qt;return e&&(o.preventDefault(),o.stopImmediatePropagation()),Cr(),e}var Qt=!1;async function Cr(){Qt=!0,await null,Qt=!1}function mo(o){!1||o.addInitializer(e=>{let t=e;t.addEventListener("click",async i=>{let{type:r,[Ge]:l}=t,{form:s}=l;if(!(!s||r==="button")&&(await new Promise(h=>{h()}),!i.defaultPrevented)){if(r==="reset"){s.reset();return}s.addEventListener("submit",h=>{Object.defineProperty(h,"submitter",{configurable:!0,enumerable:!0,get:()=>t})},{capture:!0,once:!0}),l.setFormValue(t.value),s.requestSubmit()}})})}var vo,U=class extends C{get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get form(){return this[Ge].form}constructor(){super(),this.disabled=!1,this.href="",this.target="",this.trailingIcon=!1,this.hasIcon=!1,this.type="submit",this.value="",this[vo]=this.attachInternals(),this.handleActivationClick=e=>{!_t(e)||!this.buttonElement||(this.focus(),xt(this.buttonElement))},!1||this.addEventListener("click",this.handleActivationClick)}focus(){this.buttonElement?.focus()}blur(){this.buttonElement?.blur()}render(){let e=this.disabled&&!this.href,t=this.href?ve`a`:ve`button`,{ariaLabel:i,ariaHasPopup:r,ariaExpanded:l}=this;return De`
      <${t}
        class="button ${q(this.getRenderClasses())}"
        ?disabled=${e}
        aria-label="${i||g}"
        aria-haspopup="${r||g}"
        aria-expanded="${l||g}"
        href=${this.href||g}
        target=${this.target||g}
      >${this.renderContent()}</${t}>`}getRenderClasses(){return{"button--icon-leading":!this.trailingIcon&&this.hasIcon,"button--icon-trailing":this.trailingIcon&&this.hasIcon}}renderContent(){let e=this.disabled&&!this.href,t=m`<slot name="icon" @slotchange="${this.handleSlotChange}"></slot>`;return m`
      ${this.renderElevation?.()}
      ${this.renderOutline?.()}
      <md-focus-ring part="focus-ring"></md-focus-ring>
      <md-ripple class="button__ripple" ?disabled="${e}"></md-ripple>
      <span class="touch"></span>
      ${this.trailingIcon?g:t}
      <span class="button__label"><slot></slot></span>
      ${this.trailingIcon?t:g}
    `}handleSlotChange(){this.hasIcon=this.assignedIcons.length>0}};vo=Ge;ne(U),mo(U);U.formAssociated=!0;U.shadowRootOptions={mode:"open",delegatesFocus:!0};a([p({type:Boolean,reflect:!0})],U.prototype,"disabled",void 0);a([p()],U.prototype,"href",void 0);a([p()],U.prototype,"target",void 0);a([p({type:Boolean,attribute:"trailing-icon"})],U.prototype,"trailingIcon",void 0);a([p({type:Boolean,attribute:"has-icon"})],U.prototype,"hasIcon",void 0);a([p()],U.prototype,"type",void 0);a([p()],U.prototype,"value",void 0);a([b(".button")],U.prototype,"buttonElement",void 0);a([Q({slot:"icon",flatten:!0})],U.prototype,"assignedIcons",void 0);var wt=class extends U{renderElevation(){return m`<md-elevation></md-elevation>`}};var go=_`:host{--_container-color: var(--md-filled-button-container-color, var(--md-sys-color-primary, #6750a4));--_container-elevation: var(--md-filled-button-container-elevation, 0);--_container-height: var(--md-filled-button-container-height, 40px);--_container-shadow-color: var(--md-filled-button-container-shadow-color, var(--md-sys-color-shadow, #000));--_container-shape: var(--md-filled-button-container-shape, 9999px);--_disabled-container-color: var(--md-filled-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-elevation: var(--md-filled-button-disabled-container-elevation, 0);--_disabled-container-opacity: var(--md-filled-button-disabled-container-opacity, 0.12);--_disabled-label-text-color: var(--md-filled-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-button-disabled-label-text-opacity, 0.38);--_focus-container-elevation: var(--md-filled-button-focus-container-elevation, 0);--_focus-label-text-color: var(--md-filled-button-focus-label-text-color, var(--md-sys-color-on-primary, #fff));--_hover-container-elevation: var(--md-filled-button-hover-container-elevation, 1);--_hover-label-text-color: var(--md-filled-button-hover-label-text-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-color: var(--md-filled-button-hover-state-layer-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-opacity: var(--md-filled-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-filled-button-label-text-color, var(--md-sys-color-on-primary, #fff));--_label-text-font: var(--md-filled-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-filled-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-filled-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-container-elevation: var(--md-filled-button-pressed-container-elevation, 0);--_pressed-label-text-color: var(--md-filled-button-pressed-label-text-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-color: var(--md-filled-button-pressed-state-layer-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-opacity: var(--md-filled-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-filled-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-button-focus-icon-color, var(--md-sys-color-on-primary, #fff));--_hover-icon-color: var(--md-filled-button-hover-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-color: var(--md-filled-button-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-size: var(--md-filled-button-icon-size, 18px);--_pressed-icon-color: var(--md-filled-button-pressed-icon-color, var(--md-sys-color-on-primary, #fff));--_leading-space: var(--md-filled-button-leading-space, 24px);--_trailing-space: var(--md-filled-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-filled-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-filled-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-filled-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-filled-button-with-trailing-icon-trailing-space, 16px);--_container-shape-start-start: var( --md-filled-button-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-filled-button-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-filled-button-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-filled-button-container-shape-end-start, var(--_container-shape) )}/*# sourceMappingURL=filled-styles.css.map */
`;var Et=_`md-elevation{transition-duration:280ms}.button:disabled md-elevation{transition:none}.button{--md-elevation-level: var(--_container-elevation);--md-elevation-shadow-color: var(--_container-shadow-color)}.button:focus{--md-elevation-level: var(--_focus-container-elevation)}.button:hover{--md-elevation-level: var(--_hover-container-elevation)}.button:active{--md-elevation-level: var(--_pressed-container-elevation)}.button:disabled{--md-elevation-level: var(--_disabled-container-elevation)}/*# sourceMappingURL=shared-elevation-styles.css.map */
`;var Pe=_`:host{display:inline-flex;height:var(--_container-height);outline:none;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);-webkit-tap-highlight-color:rgba(0,0,0,0);vertical-align:top;--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) 0}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host([disabled]){cursor:default;pointer-events:none}.button{display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-inline-size:64px;border:none;outline:none;user-select:none;-webkit-appearance:none;vertical-align:middle;background:rgba(0,0,0,0);text-decoration:none;inline-size:100%;position:relative;z-index:0;height:100%;font:inherit;color:var(--_label-text-color);padding-inline-start:var(--_leading-space);padding-inline-end:var(--_trailing-space);gap:8px}.button::before{background-color:var(--_container-color);border-radius:inherit;content:"";inset:0;position:absolute}.button::-moz-focus-inner{padding:0;border:0}.button:hover{color:var(--_hover-label-text-color);cursor:pointer}.button:focus{color:var(--_focus-label-text-color)}.button:active{color:var(--_pressed-label-text-color);outline:none}.button:disabled .button__label{color:var(--_disabled-label-text-color);opacity:var(--_disabled-label-text-opacity)}.button:disabled::before{background-color:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}@media(forced-colors: active){.button::before{content:"";box-sizing:border-box;border:1px solid CanvasText;border-radius:inherit;inset:0;pointer-events:none;position:absolute}.button:disabled{--_disabled-icon-opacity: 1;--_disabled-container-opacity: 1;--_disabled-label-text-opacity: 1}}.button,.button__ripple{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.button::after,.button::before,md-elevation,.button__ripple{z-index:-1}.button--icon-leading{padding-inline-start:var(--_with-leading-icon-leading-space);padding-inline-end:var(--_with-leading-icon-trailing-space)}.button--icon-trailing{padding-inline-start:var(--_with-trailing-icon-leading-space);padding-inline-end:var(--_with-trailing-icon-trailing-space)}.link-button-wrapper{inline-size:100%}.button ::slotted([slot=icon]){display:inline-flex;position:relative;writing-mode:horizontal-tb;fill:currentColor;color:var(--_icon-color);font-size:var(--_icon-size);inline-size:var(--_icon-size);block-size:var(--_icon-size)}.button:hover ::slotted([slot=icon]){color:var(--_hover-icon-color)}.button:focus ::slotted([slot=icon]){color:var(--_focus-icon-color)}.button:active ::slotted([slot=icon]){color:var(--_pressed-icon-color)}.button:disabled ::slotted([slot=icon]){color:var(--_disabled-icon-color);opacity:var(--_disabled-icon-opacity)}.touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}:host([touch-target=none]) .touch{display:none}/*# sourceMappingURL=shared-styles.css.map */
`;var ei=class extends wt{};ei.styles=[Pe,Et,go];ei=a([I("md-filled-button")],ei);var At=class extends U{renderElevation(){return m`<md-elevation></md-elevation>`}};var bo=_`:host{--_container-color: var(--md-filled-tonal-button-container-color, var(--md-sys-color-secondary-container, #e8def8));--_container-elevation: var(--md-filled-tonal-button-container-elevation, 0);--_container-height: var(--md-filled-tonal-button-container-height, 40px);--_container-shadow-color: var(--md-filled-tonal-button-container-shadow-color, var(--md-sys-color-shadow, #000));--_container-shape: var(--md-filled-tonal-button-container-shape, 9999px);--_disabled-container-color: var(--md-filled-tonal-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-elevation: var(--md-filled-tonal-button-disabled-container-elevation, 0);--_disabled-container-opacity: var(--md-filled-tonal-button-disabled-container-opacity, 0.12);--_disabled-label-text-color: var(--md-filled-tonal-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-tonal-button-disabled-label-text-opacity, 0.38);--_focus-container-elevation: var(--md-filled-tonal-button-focus-container-elevation, 0);--_focus-label-text-color: var(--md-filled-tonal-button-focus-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-container-elevation: var(--md-filled-tonal-button-hover-container-elevation, 1);--_hover-label-text-color: var(--md-filled-tonal-button-hover-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-state-layer-color: var(--md-filled-tonal-button-hover-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-state-layer-opacity: var(--md-filled-tonal-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-filled-tonal-button-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_label-text-font: var(--md-filled-tonal-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-tonal-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-filled-tonal-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-filled-tonal-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-container-elevation: var(--md-filled-tonal-button-pressed-container-elevation, 0);--_pressed-label-text-color: var(--md-filled-tonal-button-pressed-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-color: var(--md-filled-tonal-button-pressed-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-opacity: var(--md-filled-tonal-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-filled-tonal-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-tonal-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-tonal-button-focus-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-icon-color: var(--md-filled-tonal-button-hover-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_icon-color: var(--md-filled-tonal-button-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_icon-size: var(--md-filled-tonal-button-icon-size, 18px);--_pressed-icon-color: var(--md-filled-tonal-button-pressed-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_leading-space: var(--md-filled-tonal-button-leading-space, 24px);--_trailing-space: var(--md-filled-tonal-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-filled-tonal-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-filled-tonal-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-filled-tonal-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-filled-tonal-button-with-trailing-icon-trailing-space, 16px);--_container-shape-start-start: var( --md-filled-tonal-button-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-filled-tonal-button-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-filled-tonal-button-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-filled-tonal-button-container-shape-end-start, var(--_container-shape) )}/*# sourceMappingURL=filled-tonal-styles.css.map */
`;var ti=class extends At{};ti.styles=[Pe,Et,bo];ti=a([I("md-filled-tonal-button")],ti);var Ct=class extends U{renderOutline(){return m`<span class="button__outline"></span>`}};var yo=_`:host{--_container-height: var(--md-outlined-button-container-height, 40px);--_container-shape: var(--md-outlined-button-container-shape, 9999px);--_disabled-label-text-color: var(--md-outlined-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-button-disabled-label-text-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-button-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-button-disabled-outline-opacity, 0.12);--_focus-label-text-color: var(--md-outlined-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-outlined-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-outlined-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-outlined-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-outlined-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-font: var(--md-outlined-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-outlined-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-outlined-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-outlined-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_outline-color: var(--md-outlined-button-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-outlined-button-outline-width, 1px);--_pressed-label-text-color: var(--md-outlined-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-outline-color: var(--md-outlined-button-pressed-outline-color, var(--md-sys-color-outline, #79747e));--_pressed-state-layer-color: var(--md-outlined-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-outlined-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-outlined-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-outlined-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-outlined-button-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-icon-color: var(--md-outlined-button-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-color: var(--md-outlined-button-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-outlined-button-icon-size, 18px);--_pressed-icon-color: var(--md-outlined-button-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_leading-space: var(--md-outlined-button-leading-space, 24px);--_trailing-space: var(--md-outlined-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-outlined-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-outlined-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-outlined-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-outlined-button-with-trailing-icon-trailing-space, 16px);--_container-color: none;--_disabled-container-color: none;--_disabled-container-opacity: 0;--_container-shape-start-start: var( --md-outlined-button-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-outlined-button-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-outlined-button-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-outlined-button-container-shape-end-start, var(--_container-shape) )}.button__outline{inset:0;border-style:solid;position:absolute;box-sizing:border-box;border-color:var(--_outline-color);border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.button:active .button__outline{border-color:var(--_pressed-outline-color)}.button:disabled .button__outline{border-color:var(--_disabled-outline-color);opacity:var(--_disabled-outline-opacity)}@media(forced-colors: active){.button:disabled .button__outline{opacity:1}}.button__outline,.button__ripple{border-width:var(--_outline-width)}.button__ripple{inline-size:calc(100% - 2*var(--_outline-width));block-size:calc(100% - 2*var(--_outline-width));border-style:solid;border-color:rgba(0,0,0,0)}/*# sourceMappingURL=outlined-styles.css.map */
`;var ii=class extends Ct{};ii.styles=[Pe,yo];ii=a([I("md-outlined-button")],ii);var M=class extends C{constructor(){super(...arguments),this.disabled=!1,this.error=!1,this.focused=!1,this.label="",this.populated=!1,this.required=!1,this.resizable=!1,this.supportingText="",this.errorText="",this.count=-1,this.max=-1,this.hasStart=!1,this.hasEnd=!1,this.isAnimating=!1,this.refreshErrorAlert=!1,this.disableTransitions=!1}get counterText(){return this.count<0||this.max<0?"":`${this.count} / ${this.max}`}get supportingOrErrorText(){return this.error&&this.errorText?this.errorText:this.supportingText}reannounceError(){this.refreshErrorAlert=!0}update(e){e.has("disabled")&&e.get("disabled")!==void 0&&(this.disableTransitions=!0),this.disabled&&this.focused&&(e.set("focused",!0),this.focused=!1),this.animateLabelIfNeeded({wasFocused:e.get("focused"),wasPopulated:e.get("populated")}),super.update(e)}render(){let e=this.renderLabel(!0),t=this.renderLabel(!1),i=this.renderOutline?.(e),r={disabled:this.disabled,"disable-transitions":this.disableTransitions,error:this.error&&!this.disabled,focused:this.focused,"with-start":this.hasStart,"with-end":this.hasEnd,populated:this.populated,resizable:this.resizable,required:this.required,"no-label":!this.label};return m`
      <div class="field ${q(r)}">
        <div class="container-overflow">
          ${this.renderBackground?.()}
          ${this.renderIndicator?.()}
          ${i}
          <div class="container">
            <div class="start">
              <slot name="start"></slot>
            </div>
            <div class="middle">
              <div class="label-wrapper">
                ${t}
                ${i?g:e}
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
    `}updated(e){(e.has("supportingText")||e.has("errorText")||e.has("count")||e.has("max"))&&this.updateSlottedAriaDescribedBy(),this.refreshErrorAlert&&requestAnimationFrame(()=>{this.refreshErrorAlert=!1}),this.disableTransitions&&requestAnimationFrame(()=>{this.disableTransitions=!1})}renderSupportingText(){let{supportingOrErrorText:e,counterText:t}=this;if(!e&&!t)return g;let i=m`<span>${e}</span>`,r=t?m`<span class="counter">${t}</span>`:g,s=this.error&&this.errorText&&!this.refreshErrorAlert?"alert":g;return m`
      <div class="supporting-text" role=${s}>${i}${r}</div>
      <slot name="aria-describedby" @slotchange=${this.updateSlottedAriaDescribedBy}></slot>
    `}updateSlottedAriaDescribedBy(){for(let e of this.slottedAriaDescribedBy)mt(m`${this.supportingOrErrorText} ${this.counterText}`,e),e.setAttribute("hidden","")}renderLabel(e){if(!this.label)return g;let t;e?t=this.focused||this.populated||this.isAnimating:t=!this.focused&&!this.populated&&!this.isAnimating;let i={hidden:!t,floating:e,resting:!e},r=`${this.label}${this.required?"*":""}`;return m`
      <span class="label ${q(i)}"
        aria-hidden=${!t}
      >${r}</span>
    `}animateLabelIfNeeded({wasFocused:e,wasPopulated:t}){if(!this.label)return;e??(e=this.focused),t??(t=this.populated);let i=e||t,r=this.focused||this.populated;i!==r&&(this.isAnimating=!0,this.labelAnimation?.cancel(),this.labelAnimation=this.floatingLabelEl?.animate(this.getLabelKeyframes(),{duration:150,easing:ee.STANDARD}),this.labelAnimation?.addEventListener("finish",()=>{this.isAnimating=!1}))}getLabelKeyframes(){let{floatingLabelEl:e,restingLabelEl:t}=this;if(!e||!t)return[];let{x:i,y:r,height:l}=e.getBoundingClientRect(),{x:s,y:h,height:f}=t.getBoundingClientRect(),v=e.scrollWidth,x=t.scrollWidth,y=x/v,w=s-i,k=h-r+Math.round((f-l*y)/2),P=`translateX(${w}px) translateY(${k}px) scale(${y})`,R="translateX(0) translateY(0) scale(1)",B=t.clientWidth,O=x>B?`${B/y}px`:"";return this.focused||this.populated?[{transform:P,width:O},{transform:R,width:O}]:[{transform:R,width:O},{transform:P,width:O}]}getSurfacePositionClientRect(){return this.containerEl.getBoundingClientRect()}};a([p({type:Boolean})],M.prototype,"disabled",void 0);a([p({type:Boolean})],M.prototype,"error",void 0);a([p({type:Boolean})],M.prototype,"focused",void 0);a([p()],M.prototype,"label",void 0);a([p({type:Boolean})],M.prototype,"populated",void 0);a([p({type:Boolean})],M.prototype,"required",void 0);a([p({type:Boolean})],M.prototype,"resizable",void 0);a([p({attribute:"supporting-text"})],M.prototype,"supportingText",void 0);a([p({attribute:"error-text"})],M.prototype,"errorText",void 0);a([p({type:Number})],M.prototype,"count",void 0);a([p({type:Number})],M.prototype,"max",void 0);a([p({type:Boolean,attribute:"has-start"})],M.prototype,"hasStart",void 0);a([p({type:Boolean,attribute:"has-end"})],M.prototype,"hasEnd",void 0);a([Q({slot:"aria-describedby"})],M.prototype,"slottedAriaDescribedBy",void 0);a([$()],M.prototype,"isAnimating",void 0);a([$()],M.prototype,"refreshErrorAlert",void 0);a([$()],M.prototype,"disableTransitions",void 0);a([b(".label.floating")],M.prototype,"floatingLabelEl",void 0);a([b(".label.resting")],M.prototype,"restingLabelEl",void 0);a([b(".container")],M.prototype,"containerEl",void 0);var Tt=class extends M{renderBackground(){return m`
      <div class="background"></div>
      <div class="state-layer"></div>
    `}renderIndicator(){return m`<div class="active-indicator"></div>`}};var xo=_`:host{--_active-indicator-color: var(--md-filled-field-active-indicator-color, var(--md-sys-color-on-surface-variant, #49454f));--_active-indicator-height: var(--md-filled-field-active-indicator-height, 1px);--_bottom-space: var(--md-filled-field-bottom-space, 16px);--_container-color: var(--md-filled-field-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_container-shape-start-start: var( --md-filled-field-container-shape-start-start, var(--md-filled-field-container-shape, 4px) );--_container-shape-start-end: var( --md-filled-field-container-shape-start-end, var(--md-filled-field-container-shape, 4px) );--_container-shape-end-end: var( --md-filled-field-container-shape-end-end, var(--md-filled-field-container-shape, 0px) );--_container-shape-end-start: var( --md-filled-field-container-shape-end-start, var(--md-filled-field-container-shape, 0px) );--_content-color: var(--md-filled-field-content-color, var(--md-sys-color-on-surface, #1d1b20));--_content-font: var(--md-filled-field-content-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_content-line-height: var(--md-filled-field-content-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_content-size: var(--md-filled-field-content-size, var(--md-sys-typescale-body-large-size, 1rem));--_content-weight: var(--md-filled-field-content-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_disabled-active-indicator-color: var(--md-filled-field-disabled-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-active-indicator-height: var(--md-filled-field-disabled-active-indicator-height, 1px);--_disabled-active-indicator-opacity: var(--md-filled-field-disabled-active-indicator-opacity, 0.38);--_disabled-container-color: var(--md-filled-field-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-opacity: var(--md-filled-field-disabled-container-opacity, 0.04);--_disabled-content-color: var(--md-filled-field-disabled-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-content-opacity: var(--md-filled-field-disabled-content-opacity, 0.38);--_disabled-label-text-color: var(--md-filled-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-field-disabled-label-text-opacity, 0.38);--_disabled-leading-content-color: var(--md-filled-field-disabled-leading-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-content-opacity: var(--md-filled-field-disabled-leading-content-opacity, 0.38);--_disabled-supporting-text-color: var(--md-filled-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-filled-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-content-color: var(--md-filled-field-disabled-trailing-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-content-opacity: var(--md-filled-field-disabled-trailing-content-opacity, 0.38);--_error-active-indicator-color: var(--md-filled-field-error-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-content-color: var(--md-filled-field-error-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-active-indicator-color: var(--md-filled-field-error-focus-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-focus-content-color: var(--md-filled-field-error-focus-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-label-text-color: var(--md-filled-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-content-color: var(--md-filled-field-error-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-supporting-text-color: var(--md-filled-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-content-color: var(--md-filled-field-error-focus-trailing-content-color, var(--md-sys-color-error, #b3261e));--_error-hover-active-indicator-color: var(--md-filled-field-error-hover-active-indicator-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-content-color: var(--md-filled-field-error-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-filled-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-content-color: var(--md-filled-field-error-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-state-layer-color: var(--md-filled-field-error-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-state-layer-opacity: var(--md-filled-field-error-hover-state-layer-opacity, 0.08);--_error-hover-supporting-text-color: var(--md-filled-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-content-color: var(--md-filled-field-error-hover-trailing-content-color, var(--md-sys-color-on-error-container, #410e0b));--_error-label-text-color: var(--md-filled-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-content-color: var(--md-filled-field-error-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-supporting-text-color: var(--md-filled-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-content-color: var(--md-filled-field-error-trailing-content-color, var(--md-sys-color-error, #b3261e));--_focus-active-indicator-color: var(--md-filled-field-focus-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_focus-active-indicator-height: var(--md-filled-field-focus-active-indicator-height, 3px);--_focus-content-color: var(--md-filled-field-focus-content-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-filled-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-content-color: var(--md-filled-field-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-supporting-text-color: var(--md-filled-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-content-color: var(--md-filled-field-focus-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-active-indicator-color: var(--md-filled-field-hover-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-active-indicator-height: var(--md-filled-field-hover-active-indicator-height, 1px);--_hover-content-color: var(--md-filled-field-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-filled-field-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-leading-content-color: var(--md-filled-field-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-filled-field-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-filled-field-hover-state-layer-opacity, 0.08);--_hover-supporting-text-color: var(--md-filled-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-content-color: var(--md-filled-field-hover-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-color: var(--md-filled-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-filled-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-populated-line-height: var(--md-filled-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-filled-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-filled-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-filled-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-content-color: var(--md-filled-field-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-space: var(--md-filled-field-leading-space, 16px);--_supporting-text-color: var(--md-filled-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-filled-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-leading-space: var(--md-filled-field-supporting-text-leading-space, 16px);--_supporting-text-line-height: var(--md-filled-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-filled-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-top-space: var(--md-filled-field-supporting-text-top-space, 4px);--_supporting-text-trailing-space: var(--md-filled-field-supporting-text-trailing-space, 16px);--_supporting-text-weight: var(--md-filled-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_top-space: var(--md-filled-field-top-space, 16px);--_trailing-content-color: var(--md-filled-field-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-space: var(--md-filled-field-trailing-space, 16px);--_with-label-bottom-space: var(--md-filled-field-with-label-bottom-space, 8px);--_with-label-top-space: var(--md-filled-field-with-label-top-space, 8px)}.background,.state-layer{border-radius:inherit;inset:0;pointer-events:none;position:absolute}.background{background:var(--_container-color)}.state-layer{visibility:hidden}.field:not(.disabled):hover .state-layer{visibility:visible}.label.floating{position:absolute;top:var(--_with-label-top-space)}.field:not(.with-start) .label-wrapper{margin-inline-start:var(--_leading-space)}.field:not(.with-end) .label-wrapper{margin-inline-end:var(--_trailing-space)}.active-indicator{inset:auto 0 0 0;pointer-events:none;position:absolute;width:100%}.active-indicator::before,.active-indicator::after{border-bottom:var(--_active-indicator-height) solid var(--_active-indicator-color);inset:auto 0 0 0;content:"";position:absolute;width:100%}.active-indicator::after{opacity:0;transition:opacity 150ms cubic-bezier(0.2, 0, 0, 1)}.focused .active-indicator::after{opacity:1}.field:not(.with-start) .content ::slotted(*){padding-inline-start:var(--_leading-space)}.field:not(.with-end) .content ::slotted(*){padding-inline-end:var(--_trailing-space)}.field:not(.no-label) .content ::slotted(:not(textarea)){padding-bottom:var(--_with-label-bottom-space);padding-top:calc(var(--_with-label-top-space) + var(--_label-text-populated-line-height))}.field:not(.no-label) .content ::slotted(textarea){margin-bottom:var(--_with-label-bottom-space);margin-top:calc(var(--_with-label-top-space) + var(--_label-text-populated-line-height))}:hover .active-indicator::before{border-bottom-color:var(--_hover-active-indicator-color);border-bottom-width:var(--_hover-active-indicator-height)}.active-indicator::after{border-bottom-color:var(--_focus-active-indicator-color);border-bottom-width:var(--_focus-active-indicator-height)}:hover .state-layer{background:var(--_hover-state-layer-color);opacity:var(--_hover-state-layer-opacity)}.disabled .active-indicator::before{border-bottom-color:var(--_disabled-active-indicator-color);border-bottom-width:var(--_disabled-active-indicator-height);opacity:var(--_disabled-active-indicator-opacity)}.disabled .background{background:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}.error .active-indicator::before{border-bottom-color:var(--_error-active-indicator-color)}.error:hover .active-indicator::before{border-bottom-color:var(--_error-hover-active-indicator-color)}.error:hover .state-layer{background:var(--_error-hover-state-layer-color);opacity:var(--_error-hover-state-layer-opacity)}.error .active-indicator::after{border-bottom-color:var(--_error-focus-active-indicator-color)}.resizable .container{bottom:var(--_focus-active-indicator-height);clip-path:inset(var(--_focus-active-indicator-height) 0 0 0)}.resizable .container>*{top:var(--_focus-active-indicator-height)}/*# sourceMappingURL=filled-styles.css.map */
`;var _o=_`:host{display:inline-flex;resize:both}.field{display:flex;flex:1;flex-direction:column;writing-mode:horizontal-tb;max-width:100%}.container-overflow{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start);display:flex;height:100%;position:relative}.container{align-items:center;border-radius:inherit;display:flex;flex:1;max-height:100%;min-height:100%;min-width:min-content;position:relative}.field,.container-overflow{resize:inherit}.resizable:not(.disabled) .container{resize:inherit;overflow:hidden}.disabled{pointer-events:none}.start,.middle,.end{display:flex;box-sizing:border-box;height:100%;position:relative}.start{color:var(--_leading-content-color)}.end{color:var(--_trailing-content-color)}.start,.end{align-items:center;justify-content:center}.with-start .start,.with-end .end{min-width:48px}.with-start .start{margin-inline-end:4px}.with-end .end{margin-inline-start:4px}.middle{align-items:stretch;align-self:baseline;flex:1}.content{color:var(--_content-color);display:flex;flex:1;opacity:0;transition:opacity 83ms cubic-bezier(0.2, 0, 0, 1)}.no-label .content,.focused .content,.populated .content{opacity:1;transition-delay:67ms}:is(.disabled,.disable-transitions) .content{transition:none}.content ::slotted(*){all:unset;color:currentColor;font-family:var(--_content-font);font-size:var(--_content-size);line-height:var(--_content-line-height);font-weight:var(--_content-weight);width:100%;white-space:pre-wrap}.content ::slotted(:not(textarea)){padding-top:var(--_top-space);padding-bottom:var(--_bottom-space)}.content ::slotted(textarea){margin-top:var(--_top-space);margin-bottom:var(--_bottom-space)}:hover .content{color:var(--_hover-content-color)}:hover .start{color:var(--_hover-leading-content-color)}:hover .end{color:var(--_hover-trailing-content-color)}.focused .content{color:var(--_focus-content-color)}.focused .start{color:var(--_focus-leading-content-color)}.focused .end{color:var(--_focus-trailing-content-color)}.disabled .content{color:var(--_disabled-content-color)}.disabled.no-label .content,.disabled.focused .content,.disabled.populated .content{opacity:var(--_disabled-content-opacity)}.disabled .start{color:var(--_disabled-leading-content-color);opacity:var(--_disabled-leading-content-opacity)}.disabled .end{color:var(--_disabled-trailing-content-color);opacity:var(--_disabled-trailing-content-opacity)}.error .content{color:var(--_error-content-color)}.error .start{color:var(--_error-leading-content-color)}.error .end{color:var(--_error-trailing-content-color)}.error:hover .content{color:var(--_error-hover-content-color)}.error:hover .start{color:var(--_error-hover-leading-content-color)}.error:hover .end{color:var(--_error-hover-trailing-content-color)}.error.focused .content{color:var(--_error-focus-content-color)}.error.focused .start{color:var(--_error-focus-leading-content-color)}.error.focused .end{color:var(--_error-focus-trailing-content-color)}.label{box-sizing:border-box;color:var(--_label-text-color);overflow:hidden;max-width:100%;text-overflow:ellipsis;white-space:nowrap;z-index:1;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);width:min-content}.label-wrapper{inset:0;pointer-events:none;position:absolute}.label.resting{position:absolute;top:var(--_top-space)}.label.floating{font-size:var(--_label-text-populated-size);line-height:var(--_label-text-populated-line-height);transform-origin:top left}.label.hidden{opacity:0}.no-label .label{display:none}.label-wrapper{inset:0;position:absolute;text-align:initial}:hover .label{color:var(--_hover-label-text-color)}.focused .label{color:var(--_focus-label-text-color)}.disabled .label{color:var(--_disabled-label-text-color)}.disabled .label:not(.hidden){opacity:var(--_disabled-label-text-opacity)}.error .label{color:var(--_error-label-text-color)}.error:hover .label{color:var(--_error-hover-label-text-color)}.error.focused .label{color:var(--_error-focus-label-text-color)}.supporting-text{color:var(--_supporting-text-color);display:flex;font-family:var(--_supporting-text-font);font-size:var(--_supporting-text-size);line-height:var(--_supporting-text-line-height);font-weight:var(--_supporting-text-weight);gap:16px;justify-content:space-between;padding-inline-start:var(--_supporting-text-leading-space);padding-inline-end:var(--_supporting-text-trailing-space);padding-top:var(--_supporting-text-top-space)}.supporting-text :nth-child(2){flex-shrink:0}:hover .supporting-text{color:var(--_hover-supporting-text-color)}.focus .supporting-text{color:var(--_focus-supporting-text-color)}.disabled .supporting-text{color:var(--_disabled-supporting-text-color);opacity:var(--_disabled-supporting-text-opacity)}.error .supporting-text{color:var(--_error-supporting-text-color)}.error:hover .supporting-text{color:var(--_error-hover-supporting-text-color)}.error.focus .supporting-text{color:var(--_error-focus-supporting-text-color)}/*# sourceMappingURL=shared-styles.css.map */
`;var oi=class extends Tt{};oi.styles=[_o,xo];oi=a([I("md-filled-field")],oi);var wo=_`@media(forced-colors: active){:host{--md-filled-text-field-disabled-active-indicator-color: GrayText;--md-filled-text-field-disabled-active-indicator-opacity: 1;--md-filled-text-field-disabled-input-text-color: GrayText;--md-filled-text-field-disabled-input-text-opacity: 1;--md-filled-text-field-disabled-label-text-color: GrayText;--md-filled-text-field-disabled-label-text-opacity: 1;--md-filled-text-field-disabled-leading-icon-color: GrayText;--md-filled-text-field-disabled-leading-icon-opacity: 1;--md-filled-text-field-disabled-supporting-text-color: GrayText;--md-filled-text-field-disabled-supporting-text-opacity: 1;--md-filled-text-field-disabled-trailing-icon-color: GrayText;--md-filled-text-field-disabled-trailing-icon-opacity: 1}}/*# sourceMappingURL=filled-forced-colors-styles.css.map */
`;var Eo=_`:host{--_leading-space: var(--md-filled-text-field-leading-space, 16px);--_trailing-space: var(--md-filled-text-field-trailing-space, 16px);--_top-space: var(--md-filled-text-field-top-space, 16px);--_bottom-space: var(--md-filled-text-field-bottom-space, 16px);--_input-text-prefix-trailing-space: var(--md-filled-text-field-input-text-prefix-trailing-space, 2px);--_input-text-suffix-leading-space: var(--md-filled-text-field-input-text-suffix-leading-space, 2px);--_with-label-top-space: var(--md-filled-text-field-with-label-top-space, 8px);--_with-label-bottom-space: var(--md-filled-text-field-with-label-bottom-space, 8px);--_focus-caret-color: var(--md-filled-text-field-focus-caret-color, var(--md-sys-color-primary, #6750a4));--_active-indicator-color: var(--md-filled-text-field-active-indicator-color, var(--md-sys-color-on-surface-variant, #49454f));--_active-indicator-height: var(--md-filled-text-field-active-indicator-height, 1px);--_caret-color: var(--md-filled-text-field-caret-color, var(--md-sys-color-primary, #6750a4));--_container-color: var(--md-filled-text-field-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_container-shape-start-start: var( --md-filled-text-field-container-shape-start-start, var(--md-filled-text-field-container-shape, 4px) );--_container-shape-start-end: var( --md-filled-text-field-container-shape-start-end, var(--md-filled-text-field-container-shape, 4px) );--_container-shape-end-end: var( --md-filled-text-field-container-shape-end-end, var(--md-filled-text-field-container-shape, 0px) );--_container-shape-end-start: var( --md-filled-text-field-container-shape-end-start, var(--md-filled-text-field-container-shape, 0px) );--_disabled-active-indicator-color: var(--md-filled-text-field-disabled-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-active-indicator-height: var(--md-filled-text-field-disabled-active-indicator-height, 1px);--_disabled-active-indicator-opacity: var(--md-filled-text-field-disabled-active-indicator-opacity, 0.38);--_disabled-container-color: var(--md-filled-text-field-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-opacity: var(--md-filled-text-field-disabled-container-opacity, 0.04);--_disabled-input-text-color: var(--md-filled-text-field-disabled-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-input-text-opacity: var(--md-filled-text-field-disabled-input-text-opacity, 0.38);--_disabled-label-text-color: var(--md-filled-text-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-text-field-disabled-label-text-opacity, 0.38);--_disabled-leading-icon-color: var(--md-filled-text-field-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-filled-text-field-disabled-leading-icon-opacity, 0.38);--_disabled-supporting-text-color: var(--md-filled-text-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-filled-text-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-icon-color: var(--md-filled-text-field-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-icon-opacity: var(--md-filled-text-field-disabled-trailing-icon-opacity, 0.38);--_error-active-indicator-color: var(--md-filled-text-field-error-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-focus-active-indicator-color: var(--md-filled-text-field-error-focus-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-focus-caret-color: var(--md-filled-text-field-error-focus-caret-color, var(--md-sys-color-error, #b3261e));--_error-focus-input-text-color: var(--md-filled-text-field-error-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-label-text-color: var(--md-filled-text-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-icon-color: var(--md-filled-text-field-error-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-supporting-text-color: var(--md-filled-text-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-icon-color: var(--md-filled-text-field-error-focus-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_error-hover-active-indicator-color: var(--md-filled-text-field-error-hover-active-indicator-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-input-text-color: var(--md-filled-text-field-error-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-filled-text-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-icon-color: var(--md-filled-text-field-error-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-state-layer-color: var(--md-filled-text-field-error-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-state-layer-opacity: var(--md-filled-text-field-error-hover-state-layer-opacity, 0.08);--_error-hover-supporting-text-color: var(--md-filled-text-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-icon-color: var(--md-filled-text-field-error-hover-trailing-icon-color, var(--md-sys-color-on-error-container, #410e0b));--_error-input-text-color: var(--md-filled-text-field-error-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-label-text-color: var(--md-filled-text-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-icon-color: var(--md-filled-text-field-error-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-supporting-text-color: var(--md-filled-text-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-icon-color: var(--md-filled-text-field-error-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_focus-active-indicator-color: var(--md-filled-text-field-focus-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_focus-active-indicator-height: var(--md-filled-text-field-focus-active-indicator-height, 3px);--_focus-input-text-color: var(--md-filled-text-field-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-filled-text-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-icon-color: var(--md-filled-text-field-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-supporting-text-color: var(--md-filled-text-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-icon-color: var(--md-filled-text-field-focus-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-active-indicator-color: var(--md-filled-text-field-hover-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-active-indicator-height: var(--md-filled-text-field-hover-active-indicator-height, 1px);--_hover-input-text-color: var(--md-filled-text-field-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-filled-text-field-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-leading-icon-color: var(--md-filled-text-field-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-filled-text-field-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-filled-text-field-hover-state-layer-opacity, 0.08);--_hover-supporting-text-color: var(--md-filled-text-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-icon-color: var(--md-filled-text-field-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-color: var(--md-filled-text-field-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_input-text-font: var(--md-filled-text-field-input-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_input-text-line-height: var(--md-filled-text-field-input-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_input-text-placeholder-color: var(--md-filled-text-field-input-text-placeholder-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-prefix-color: var(--md-filled-text-field-input-text-prefix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-size: var(--md-filled-text-field-input-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_input-text-suffix-color: var(--md-filled-text-field-input-text-suffix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-weight: var(--md-filled-text-field-input-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_label-text-color: var(--md-filled-text-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-filled-text-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-text-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-populated-line-height: var(--md-filled-text-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-filled-text-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-filled-text-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-filled-text-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-icon-color: var(--md-filled-text-field-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-icon-size: var(--md-filled-text-field-leading-icon-size, 24px);--_supporting-text-color: var(--md-filled-text-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-filled-text-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-line-height: var(--md-filled-text-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-filled-text-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-weight: var(--md-filled-text-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_trailing-icon-color: var(--md-filled-text-field-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-icon-size: var(--md-filled-text-field-trailing-icon-size, 24px);--md-filled-field-active-indicator-color: var(--_active-indicator-color);--md-filled-field-active-indicator-height: var(--_active-indicator-height);--md-filled-field-bottom-space: var(--_bottom-space);--md-filled-field-container-color: var(--_container-color);--md-filled-field-container-shape-end-end: var(--_container-shape-end-end);--md-filled-field-container-shape-end-start: var(--_container-shape-end-start);--md-filled-field-container-shape-start-end: var(--_container-shape-start-end);--md-filled-field-container-shape-start-start: var(--_container-shape-start-start);--md-filled-field-content-color: var(--_input-text-color);--md-filled-field-content-font: var(--_input-text-font);--md-filled-field-content-line-height: var(--_input-text-line-height);--md-filled-field-content-size: var(--_input-text-size);--md-filled-field-content-weight: var(--_input-text-weight);--md-filled-field-disabled-active-indicator-color: var(--_disabled-active-indicator-color);--md-filled-field-disabled-active-indicator-height: var(--_disabled-active-indicator-height);--md-filled-field-disabled-active-indicator-opacity: var(--_disabled-active-indicator-opacity);--md-filled-field-disabled-container-color: var(--_disabled-container-color);--md-filled-field-disabled-container-opacity: var(--_disabled-container-opacity);--md-filled-field-disabled-content-color: var(--_disabled-input-text-color);--md-filled-field-disabled-content-opacity: var(--_disabled-input-text-opacity);--md-filled-field-disabled-label-text-color: var(--_disabled-label-text-color);--md-filled-field-disabled-label-text-opacity: var(--_disabled-label-text-opacity);--md-filled-field-disabled-leading-content-color: var(--_disabled-leading-icon-color);--md-filled-field-disabled-leading-content-opacity: var(--_disabled-leading-icon-opacity);--md-filled-field-disabled-supporting-text-color: var(--_disabled-supporting-text-color);--md-filled-field-disabled-supporting-text-opacity: var(--_disabled-supporting-text-opacity);--md-filled-field-disabled-trailing-content-color: var(--_disabled-trailing-icon-color);--md-filled-field-disabled-trailing-content-opacity: var(--_disabled-trailing-icon-opacity);--md-filled-field-error-active-indicator-color: var(--_error-active-indicator-color);--md-filled-field-error-content-color: var(--_error-input-text-color);--md-filled-field-error-focus-active-indicator-color: var(--_error-focus-active-indicator-color);--md-filled-field-error-focus-content-color: var(--_error-focus-input-text-color);--md-filled-field-error-focus-label-text-color: var(--_error-focus-label-text-color);--md-filled-field-error-focus-leading-content-color: var(--_error-focus-leading-icon-color);--md-filled-field-error-focus-supporting-text-color: var(--_error-focus-supporting-text-color);--md-filled-field-error-focus-trailing-content-color: var(--_error-focus-trailing-icon-color);--md-filled-field-error-hover-active-indicator-color: var(--_error-hover-active-indicator-color);--md-filled-field-error-hover-content-color: var(--_error-hover-input-text-color);--md-filled-field-error-hover-label-text-color: var(--_error-hover-label-text-color);--md-filled-field-error-hover-leading-content-color: var(--_error-hover-leading-icon-color);--md-filled-field-error-hover-state-layer-color: var(--_error-hover-state-layer-color);--md-filled-field-error-hover-state-layer-opacity: var(--_error-hover-state-layer-opacity);--md-filled-field-error-hover-supporting-text-color: var(--_error-hover-supporting-text-color);--md-filled-field-error-hover-trailing-content-color: var(--_error-hover-trailing-icon-color);--md-filled-field-error-label-text-color: var(--_error-label-text-color);--md-filled-field-error-leading-content-color: var(--_error-leading-icon-color);--md-filled-field-error-supporting-text-color: var(--_error-supporting-text-color);--md-filled-field-error-trailing-content-color: var(--_error-trailing-icon-color);--md-filled-field-focus-active-indicator-color: var(--_focus-active-indicator-color);--md-filled-field-focus-active-indicator-height: var(--_focus-active-indicator-height);--md-filled-field-focus-content-color: var(--_focus-input-text-color);--md-filled-field-focus-label-text-color: var(--_focus-label-text-color);--md-filled-field-focus-leading-content-color: var(--_focus-leading-icon-color);--md-filled-field-focus-supporting-text-color: var(--_focus-supporting-text-color);--md-filled-field-focus-trailing-content-color: var(--_focus-trailing-icon-color);--md-filled-field-hover-active-indicator-color: var(--_hover-active-indicator-color);--md-filled-field-hover-active-indicator-height: var(--_hover-active-indicator-height);--md-filled-field-hover-content-color: var(--_hover-input-text-color);--md-filled-field-hover-label-text-color: var(--_hover-label-text-color);--md-filled-field-hover-leading-content-color: var(--_hover-leading-icon-color);--md-filled-field-hover-state-layer-color: var(--_hover-state-layer-color);--md-filled-field-hover-state-layer-opacity: var(--_hover-state-layer-opacity);--md-filled-field-hover-supporting-text-color: var(--_hover-supporting-text-color);--md-filled-field-hover-trailing-content-color: var(--_hover-trailing-icon-color);--md-filled-field-label-text-color: var(--_label-text-color);--md-filled-field-label-text-font: var(--_label-text-font);--md-filled-field-label-text-line-height: var(--_label-text-line-height);--md-filled-field-label-text-populated-line-height: var(--_label-text-populated-line-height);--md-filled-field-label-text-populated-size: var(--_label-text-populated-size);--md-filled-field-label-text-size: var(--_label-text-size);--md-filled-field-label-text-weight: var(--_label-text-weight);--md-filled-field-leading-content-color: var(--_leading-icon-color);--md-filled-field-leading-space: var(--_leading-space);--md-filled-field-supporting-text-color: var(--_supporting-text-color);--md-filled-field-supporting-text-font: var(--_supporting-text-font);--md-filled-field-supporting-text-line-height: var(--_supporting-text-line-height);--md-filled-field-supporting-text-size: var(--_supporting-text-size);--md-filled-field-supporting-text-weight: var(--_supporting-text-weight);--md-filled-field-top-space: var(--_top-space);--md-filled-field-trailing-content-color: var(--_trailing-icon-color);--md-filled-field-trailing-space: var(--_trailing-space);--md-filled-field-with-label-bottom-space: var(--_with-label-bottom-space);--md-filled-field-with-label-top-space: var(--_with-label-top-space)}/*# sourceMappingURL=filled-styles.css.map */
`;var{I:ws}=Yi;var Ao=o=>o.strings===void 0;var Tr={},Co=(o,e=Tr)=>o._$AH=e;var ri=Le(class extends be{constructor(o){if(super(o),o.type!==de.PROPERTY&&o.type!==de.ATTRIBUTE&&o.type!==de.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Ao(o))throw Error("`live` bindings can only contain a single expression")}render(o){return o}update(o,[e]){if(e===G||e===g)return e;let t=o.element,i=o.name;if(o.type===de.PROPERTY){if(e===t[i])return G}else if(o.type===de.BOOLEAN_ATTRIBUTE){if(!!e===t.hasAttribute(i))return G}else if(o.type===de.ATTRIBUTE&&t.getAttribute(i)===e+"")return G;return Co(o),e}});var To="important",Sr=" !"+To,Ye=Le(class extends be{constructor(o){var e;if(super(o),o.type!==de.ATTRIBUTE||o.name!=="style"||((e=o.strings)===null||e===void 0?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(o){return Object.keys(o).reduce((e,t)=>{let i=o[t];return i==null?e:e+`${t=t.includes("-")?t:t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(o,[e]){let{style:t}=o.element;if(this.ht===void 0){this.ht=new Set;for(let i in e)this.ht.add(i);return this.render(e)}this.ht.forEach(i=>{e[i]==null&&(this.ht.delete(i),i.includes("-")?t.removeProperty(i):t[i]="")});for(let i in e){let r=e[i];if(r!=null){this.ht.add(i);let l=typeof r=="string"&&r.endsWith(Sr);i.includes("-")||l?t.setProperty(i,l?r.slice(0,-11):r,l?To:""):t[i]=r}}return G}});var So={fromAttribute(o){return o??""},toAttribute(o){return o||null}};var T=class extends C{constructor(){super(...arguments),this.disabled=!1,this.error=!1,this.errorText="",this.label="",this.required=!1,this.value="",this.prefixText="",this.suffixText="",this.hasLeadingIcon=!1,this.hasTrailingIcon=!1,this.supportingText="",this.textDirection="",this.rows=2,this.inputMode="",this.max="",this.maxLength=-1,this.min="",this.minLength=-1,this.pattern="",this.placeholder="",this.readOnly=!1,this.step="",this.type="text",this.autocomplete="",this.dirty=!1,this.focused=!1,this.nativeError=!1,this.nativeErrorText="",this.hasCustomValidityError=!1,this.internals=this.attachInternals()}get form(){return this.internals.form}get labels(){return this.internals.labels}get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get selectionDirection(){return this.getInputOrTextarea().selectionDirection}set selectionDirection(e){this.getInputOrTextarea().selectionDirection=e}get selectionEnd(){return this.getInputOrTextarea().selectionEnd}set selectionEnd(e){this.getInputOrTextarea().selectionEnd=e}get selectionStart(){return this.getInputOrTextarea().selectionStart}set selectionStart(e){this.getInputOrTextarea().selectionStart=e}get validationMessage(){return this.syncValidity(),this.internals.validationMessage}get validity(){return this.syncValidity(),this.internals.validity}get valueAsNumber(){let e=this.getInput();return e?e.valueAsNumber:NaN}set valueAsNumber(e){let t=this.getInput();t&&(t.valueAsNumber=e,this.value=t.value)}get valueAsDate(){let e=this.getInput();return e?e.valueAsDate:null}set valueAsDate(e){let t=this.getInput();t&&(t.valueAsDate=e,this.value=t.value)}get willValidate(){return this.syncValidity(),this.internals.willValidate}get hasError(){return this.error||this.nativeError}checkValidity(){return this.syncValidity(),this.internals.checkValidity()}reportValidity(){let e;this.addEventListener("invalid",r=>{e=r},{once:!0});let t=this.checkValidity();if(e?.defaultPrevented)return t;let i=this.getErrorText();return this.nativeError=!t,this.nativeErrorText=this.validationMessage,i===this.getErrorText()&&this.field?.reannounceError(),t}select(){this.getInputOrTextarea().select()}setCustomValidity(e){this.hasCustomValidityError=!!e,this.internals.setValidity({customError:!!e},e,this.getInputOrTextarea())}setRangeText(...e){this.getInputOrTextarea().setRangeText(...e),this.value=this.getInputOrTextarea().value}setSelectionRange(e,t,i){this.getInputOrTextarea().setSelectionRange(e,t,i)}stepDown(e){let t=this.getInput();t&&(t.stepDown(e),this.value=t.value)}stepUp(e){let t=this.getInput();t&&(t.stepUp(e),this.value=t.value)}reset(){this.dirty=!1,this.value=this.getAttribute("value")??"",this.nativeError=!1,this.nativeErrorText=""}attributeChangedCallback(e,t,i){e==="value"&&this.dirty||super.attributeChangedCallback(e,t,i)}render(){let e={disabled:this.disabled,error:!this.disabled&&this.hasError,textarea:this.type==="textarea"};return m`
       <span class="text-field ${q(e)}">
         ${this.renderField()}
       </span>
     `}updated(e){let t=this.getInputOrTextarea().value;this.value!==t&&(this.value=t),this.internals.setFormValue(t),this.syncValidity()}renderField(){return De`<${this.fieldTag}
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
    </${this.fieldTag}>`}renderLeadingIcon(){return m`
       <span class="icon leading" slot="start">
         <slot name="leading-icon" @slotchange=${this.handleIconChange}></slot>
       </span>
     `}renderTrailingIcon(){return m`
       <span class="icon trailing" slot="end">
         <slot name="trailing-icon" @slotchange=${this.handleIconChange}></slot>
       </span>
     `}renderInputOrTextarea(){let e={direction:this.textDirection},t=this.ariaLabel||this.label||g,i=this.autocomplete;if(this.type==="textarea")return m`
        <textarea
          class="input"
          style=${Ye(e)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${t}
          autocomplete=${i||g}
          ?disabled=${this.disabled}
          maxlength=${this.maxLength>-1?this.maxLength:g}
          minlength=${this.minLength>-1?this.minLength:g}
          placeholder=${this.placeholder||g}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          rows=${this.rows}
          .value=${ri(this.value)}
          @change=${this.handleChange}
          @focusin=${this.handleFocusin}
          @focusout=${this.handleFocusout}
          @input=${this.handleInput}
          @select=${this.redispatchEvent}
        ></textarea>
      `;let r=this.renderPrefix(),l=this.renderSuffix(),s=this.inputMode;return m`
      <div class="input-wrapper">
        ${r}
        <input
          class="input"
          style=${Ye(e)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${t}
          autocomplete=${i||g}
          ?disabled=${this.disabled}
          inputmode=${s||g}
          max=${this.max||g}
          maxlength=${this.maxLength>-1?this.maxLength:g}
          min=${this.min||g}
          minlength=${this.minLength>-1?this.minLength:g}
          pattern=${this.pattern||g}
          placeholder=${this.placeholder||g}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          step=${this.step||g}
          type=${this.type}
          .value=${ri(this.value)}
          @change=${this.redispatchEvent}
          @focusin=${this.handleFocusin}
          @focusout=${this.handleFocusout}
          @input=${this.handleInput}
          @select=${this.redispatchEvent}
        >
        ${l}
      </div>
    `}renderPrefix(){return this.renderAffix(this.prefixText,!1)}renderSuffix(){return this.renderAffix(this.suffixText,!0)}renderAffix(e,t){return e?m`<span class="${q({suffix:t,prefix:!t})}">${e}</span>`:g}getErrorText(){return this.error?this.errorText:this.nativeErrorText}handleFocusin(){this.focused=!0}handleFocusout(){this.focused=!1}handleInput(e){this.dirty=!0,this.value=e.target.value,this.syncValidity()}handleChange(e){this.syncValidity(),this.redispatchEvent(e)}redispatchEvent(e){xe(this,e)}getInputOrTextarea(){return this.inputOrTextarea||(this.connectedCallback(),this.scheduleUpdate()),this.isUpdatePending&&this.scheduleUpdate(),this.inputOrTextarea}getInput(){return this.type==="textarea"?null:this.getInputOrTextarea()}syncValidity(){let e=this.getInputOrTextarea();this.hasCustomValidityError?e.setCustomValidity(this.internals.validationMessage):e.setCustomValidity(""),this.internals.setValidity(e.validity,e.validationMessage,this.getInputOrTextarea())}handleIconChange(){this.hasLeadingIcon=this.leadingIcons.length>0,this.hasTrailingIcon=this.trailingIcons.length>0}formResetCallback(){this.reset()}formStateRestoreCallback(e){this.value=e}};ne(T);T.shadowRootOptions={...C.shadowRootOptions,delegatesFocus:!0};T.formAssociated=!0;a([p({type:Boolean,reflect:!0})],T.prototype,"disabled",void 0);a([p({type:Boolean,reflect:!0})],T.prototype,"error",void 0);a([p({attribute:"error-text"})],T.prototype,"errorText",void 0);a([p()],T.prototype,"label",void 0);a([p({type:Boolean,reflect:!0})],T.prototype,"required",void 0);a([p()],T.prototype,"value",void 0);a([p({attribute:"prefix-text"})],T.prototype,"prefixText",void 0);a([p({attribute:"suffix-text"})],T.prototype,"suffixText",void 0);a([p({type:Boolean,attribute:"has-leading-icon"})],T.prototype,"hasLeadingIcon",void 0);a([p({type:Boolean,attribute:"has-trailing-icon"})],T.prototype,"hasTrailingIcon",void 0);a([p({attribute:"supporting-text"})],T.prototype,"supportingText",void 0);a([p({attribute:"text-direction"})],T.prototype,"textDirection",void 0);a([p({type:Number})],T.prototype,"rows",void 0);a([p({reflect:!0})],T.prototype,"inputMode",void 0);a([p()],T.prototype,"max",void 0);a([p({type:Number})],T.prototype,"maxLength",void 0);a([p()],T.prototype,"min",void 0);a([p({type:Number})],T.prototype,"minLength",void 0);a([p()],T.prototype,"pattern",void 0);a([p({reflect:!0,converter:So})],T.prototype,"placeholder",void 0);a([p({type:Boolean,reflect:!0})],T.prototype,"readOnly",void 0);a([p()],T.prototype,"step",void 0);a([p({reflect:!0})],T.prototype,"type",void 0);a([p({reflect:!0})],T.prototype,"autocomplete",void 0);a([$()],T.prototype,"dirty",void 0);a([$()],T.prototype,"focused",void 0);a([$()],T.prototype,"nativeError",void 0);a([$()],T.prototype,"nativeErrorText",void 0);a([b(".input")],T.prototype,"inputOrTextarea",void 0);a([b(".field")],T.prototype,"field",void 0);a([Q({slot:"leading-icon"})],T.prototype,"leadingIcons",void 0);a([Q({slot:"trailing-icon"})],T.prototype,"trailingIcons",void 0);var St=class extends T{constructor(){super(...arguments),this.fieldTag=ve`md-filled-field`}};var ko=_`:host{display:inline-flex;outline:none;resize:both;-webkit-tap-highlight-color:rgba(0,0,0,0)}.text-field,.field{width:100%}.text-field{display:inline-flex}.field{cursor:text}.disabled .field{cursor:default}.text-field,.textarea .field{resize:inherit}.icon{color:currentColor;display:flex;fill:currentColor}.icon ::slotted(*){display:flex}[hasstart] .icon.leading{font-size:var(--_leading-icon-size);height:var(--_leading-icon-size);width:var(--_leading-icon-size)}[hasend] .icon.trailing{font-size:var(--_trailing-icon-size);height:var(--_trailing-icon-size);width:var(--_trailing-icon-size)}.input-wrapper{display:flex}.input-wrapper>*{all:inherit;padding:0}.input{caret-color:var(--_caret-color);overflow-x:hidden;text-align:inherit}.input::placeholder{color:currentColor;opacity:1}.input::-webkit-calendar-picker-indicator{display:none}.input::-webkit-search-decoration,.input::-webkit-search-cancel-button{display:none}@media(forced-colors: active){.input{background-color:Field}}:focus-within .input{caret-color:var(--_focus-caret-color)}.error:focus-within .input{caret-color:var(--_error-focus-caret-color)}.text-field:not(.disabled) .prefix{color:var(--_input-text-prefix-color)}.text-field:not(.disabled) .suffix{color:var(--_input-text-suffix-color)}.text-field:not(.disabled) .input::placeholder{color:var(--_input-text-placeholder-color)}.prefix,.suffix{text-wrap:nowrap;width:min-content}.prefix{padding-inline-end:var(--_input-text-prefix-trailing-space)}.suffix{padding-inline-start:var(--_input-text-suffix-leading-space)}/*# sourceMappingURL=shared-styles.css.map */
`;var ai=class extends St{constructor(){super(...arguments),this.fieldTag=ve`md-filled-field`}};ai.styles=[ko,Eo,wo];ai=a([I("md-filled-text-field")],ai);var Y=class extends C{get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get form(){return this.internals.form}get labels(){return this.internals.labels}get validity(){return this.syncValidity(),this.internals.validity}get validationMessage(){return this.syncValidity(),this.internals.validationMessage}get willValidate(){return this.syncValidity(),this.internals.willValidate}constructor(){super(),this.checked=!1,this.disabled=!1,this.indeterminate=!1,this.required=!1,this.value="on",this.prevChecked=!1,this.prevDisabled=!1,this.prevIndeterminate=!1,this.hasCustomValidityError=!1,this.internals=this.attachInternals(),!1||this.addEventListener("click",e=>{_t(e)&&(this.focus(),xt(this.input))})}checkValidity(){return this.syncValidity(),this.internals.checkValidity()}reportValidity(){return this.syncValidity(),this.internals.reportValidity()}setCustomValidity(e){this.hasCustomValidityError=!!e,this.internals.setValidity({customError:!!e},e,this.getInput())}update(e){(e.has("checked")||e.has("disabled")||e.has("indeterminate"))&&(this.prevChecked=e.get("checked")??this.checked,this.prevDisabled=e.get("disabled")??this.disabled,this.prevIndeterminate=e.get("indeterminate")??this.indeterminate);let t=this.checked&&!this.indeterminate,i=String(this.checked);this.internals.setFormValue(t?this.value:null,i),super.update(e)}render(){let e=!this.prevChecked&&!this.prevIndeterminate,t=this.prevChecked&&!this.prevIndeterminate,i=this.prevIndeterminate,r=this.checked&&!this.indeterminate,l=this.indeterminate,s=q({disabled:this.disabled,selected:r||l,unselected:!r&&!l,checked:r,indeterminate:l,"prev-unselected":e,"prev-checked":t,"prev-indeterminate":i,"prev-disabled":this.prevDisabled}),{ariaLabel:h,ariaInvalid:f}=this;return m`
      <div class="container ${s}">
        <input type="checkbox"
          id="input"
          aria-checked=${l?"mixed":g}
          aria-label=${h||g}
          aria-invalid=${f||g}
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
    `}updated(){this.syncValidity()}handleChange(e){let t=e.target;this.checked=t.checked,this.indeterminate=t.indeterminate,xe(this,e)}syncValidity(){let e=this.getInput();this.hasCustomValidityError?e.setCustomValidity(this.internals.validationMessage):e.setCustomValidity(""),this.internals.setValidity(e.validity,e.validationMessage,this.getInput())}getInput(){return this.input||(this.connectedCallback(),this.performUpdate()),this.isUpdatePending&&this.scheduleUpdate(),this.input}formResetCallback(){this.checked=this.hasAttribute("checked")}formStateRestoreCallback(e){this.checked=e==="true"}};ne(Y);Y.shadowRootOptions={...C.shadowRootOptions,delegatesFocus:!0};Y.formAssociated=!0;a([p({type:Boolean})],Y.prototype,"checked",void 0);a([p({type:Boolean,reflect:!0})],Y.prototype,"disabled",void 0);a([p({type:Boolean})],Y.prototype,"indeterminate",void 0);a([p({type:Boolean})],Y.prototype,"required",void 0);a([p()],Y.prototype,"value",void 0);a([$()],Y.prototype,"prevChecked",void 0);a([$()],Y.prototype,"prevDisabled",void 0);a([$()],Y.prototype,"prevIndeterminate",void 0);a([b("input")],Y.prototype,"input",void 0);var Io=_`:host{--_container-shape: var(--md-checkbox-container-shape, 2px);--_container-size: var(--md-checkbox-container-size, 18px);--_icon-size: var(--md-checkbox-icon-size, 18px);--_selected-container-color: var(--md-checkbox-selected-container-color, var(--md-sys-color-primary, #6750a4));--_selected-disabled-container-color: var(--md-checkbox-selected-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_selected-disabled-container-opacity: var(--md-checkbox-selected-disabled-container-opacity, 0.38);--_selected-disabled-icon-color: var(--md-checkbox-selected-disabled-icon-color, var(--md-sys-color-surface, #fef7ff));--_selected-focus-container-color: var(--md-checkbox-selected-focus-container-color, var(--md-sys-color-primary, #6750a4));--_selected-focus-icon-color: var(--md-checkbox-selected-focus-icon-color, var(--md-sys-color-on-primary, #fff));--_selected-hover-container-color: var(--md-checkbox-selected-hover-container-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-icon-color: var(--md-checkbox-selected-hover-icon-color, var(--md-sys-color-on-primary, #fff));--_selected-hover-state-layer-color: var(--md-checkbox-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-opacity: var(--md-checkbox-selected-hover-state-layer-opacity, 0.08);--_selected-icon-color: var(--md-checkbox-selected-icon-color, var(--md-sys-color-on-primary, #fff));--_selected-pressed-container-color: var(--md-checkbox-selected-pressed-container-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-icon-color: var(--md-checkbox-selected-pressed-icon-color, var(--md-sys-color-on-primary, #fff));--_selected-pressed-state-layer-color: var(--md-checkbox-selected-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_selected-pressed-state-layer-opacity: var(--md-checkbox-selected-pressed-state-layer-opacity, 0.12);--_state-layer-shape: var(--md-checkbox-state-layer-shape, 9999px);--_state-layer-size: var(--md-checkbox-state-layer-size, 40px);--_disabled-container-opacity: var(--md-checkbox-disabled-container-opacity, 0.38);--_disabled-outline-color: var(--md-checkbox-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-width: var(--md-checkbox-disabled-outline-width, 2px);--_focus-outline-color: var(--md-checkbox-focus-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-outline-width: var(--md-checkbox-focus-outline-width, 2px);--_hover-outline-color: var(--md-checkbox-hover-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-outline-width: var(--md-checkbox-hover-outline-width, 2px);--_hover-state-layer-color: var(--md-checkbox-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-checkbox-hover-state-layer-opacity, 0.08);--_outline-color: var(--md-checkbox-outline-color, var(--md-sys-color-on-surface-variant, #49454f));--_outline-width: var(--md-checkbox-outline-width, 2px);--_pressed-outline-color: var(--md-checkbox-pressed-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-outline-width: var(--md-checkbox-pressed-outline-width, 2px);--_pressed-state-layer-color: var(--md-checkbox-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-checkbox-pressed-state-layer-opacity, 0.12);--_container-shape-start-start: var( --md-checkbox-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-checkbox-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-checkbox-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-checkbox-container-shape-end-start, var(--_container-shape) );border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start);display:inline-flex;height:var(--_container-size);position:relative;vertical-align:top;width:var(--_container-size);-webkit-tap-highlight-color:rgba(0,0,0,0)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-size))/2)}md-focus-ring{height:44px;inset:unset;width:44px}input{appearance:none;height:48px;margin:0;opacity:0;outline:none;position:absolute;width:48px;z-index:1}:host([touch-target=none]) input{height:100%;width:100%}.container{border-radius:inherit;display:flex;height:100%;place-content:center;place-items:center;position:relative;width:100%}.outline,.background,.icon{inset:0;position:absolute}.outline,.background{border-radius:inherit}.outline{border-color:var(--_outline-color);border-style:solid;border-width:var(--_outline-width);box-sizing:border-box}.background{background-color:var(--_selected-container-color)}.background,.icon{opacity:0;transition-duration:150ms,50ms;transition-property:transform,opacity;transition-timing-function:cubic-bezier(0.3, 0, 0.8, 0.15),linear;transform:scale(0.6)}:where(.selected) :is(.background,.icon){opacity:1;transition-duration:350ms,50ms;transition-timing-function:cubic-bezier(0.05, 0.7, 0.1, 1),linear;transform:scale(1)}md-ripple{border-radius:var(--_state-layer-shape);height:var(--_state-layer-size);inset:unset;width:var(--_state-layer-size);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.selected md-ripple{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}.icon{fill:var(--_selected-icon-color);height:var(--_icon-size);width:var(--_icon-size)}.mark.short{height:2px;transition-property:transform,height;width:2px}.mark.long{height:2px;transition-property:transform,width;width:10px}.mark{animation-duration:150ms;animation-timing-function:cubic-bezier(0.3, 0, 0.8, 0.15);transition-duration:150ms;transition-timing-function:cubic-bezier(0.3, 0, 0.8, 0.15)}.selected .mark{animation-duration:350ms;animation-timing-function:cubic-bezier(0.05, 0.7, 0.1, 1);transition-duration:350ms;transition-timing-function:cubic-bezier(0.05, 0.7, 0.1, 1)}.checked .mark,.prev-checked.unselected .mark{transform:scaleY(-1) translate(7px, -14px) rotate(45deg)}.checked .mark.short,.prev-checked.unselected .mark.short{height:5.6568542495px}.checked .mark.long,.prev-checked.unselected .mark.long{width:11.313708499px}.indeterminate .mark,.prev-indeterminate.unselected .mark{transform:scaleY(-1) translate(4px, -10px) rotate(0deg)}.prev-unselected .mark{transition-property:none}.prev-unselected.checked .mark.long{animation-name:prev-unselected-to-checked}@keyframes prev-unselected-to-checked{from{width:0}}:where(:hover) .outline{border-color:var(--_hover-outline-color);border-width:var(--_hover-outline-width)}:where(:hover) .background{background:var(--_selected-hover-container-color)}:where(:hover) .icon{fill:var(--_selected-hover-icon-color)}:where(:focus-within) .outline{border-color:var(--_focus-outline-color);border-width:var(--_focus-outline-width)}:where(:focus-within) .background{background:var(--_selected-focus-container-color)}:where(:focus-within) .icon{fill:var(--_selected-focus-icon-color)}:where(:active) .outline{border-color:var(--_pressed-outline-color);border-width:var(--_pressed-outline-width)}:where(:active) .background{background:var(--_selected-pressed-container-color)}:where(:active) .icon{fill:var(--_selected-pressed-icon-color)}:where(.disabled,.prev-disabled) :is(.background,.icon,.mark){animation-duration:0s;transition-duration:0s}:where(.disabled) .outline{border-color:var(--_disabled-outline-color);border-width:var(--_disabled-outline-width);opacity:var(--_disabled-container-opacity)}:where(.selected.disabled) .outline{visibility:hidden}:where(.selected.disabled) .background{background:var(--_selected-disabled-container-color);opacity:var(--_selected-disabled-container-opacity)}:where(.disabled) .icon{fill:var(--_selected-disabled-icon-color)}@media(forced-colors: active){.background{background-color:CanvasText}.selected.disabled .background{background-color:GrayText;opacity:1}.outline{border-color:CanvasText}.disabled .outline{border-color:GrayText;opacity:1}.icon{fill:Canvas}}/*# sourceMappingURL=checkbox-styles.css.map */
`;var li=class extends Y{};li.styles=[Io];li=a([I("md-checkbox")],li);var kt=class extends C{render(){return m`<slot></slot>`}connectedCallback(){if(super.connectedCallback(),this.getAttribute("aria-hidden")==="false"){this.removeAttribute("aria-hidden");return}this.setAttribute("aria-hidden","true")}};var $o=_`:host{font-size:24px;width:24px;height:24px;color:inherit;font-variation-settings:inherit;font-weight:400;font-family:var(--md-icon-font, Material Symbols Outlined);display:inline-flex;font-style:normal;line-height:1;overflow:hidden;letter-spacing:normal;text-transform:none;user-select:none;white-space:nowrap;word-wrap:normal;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale}::slotted(svg){fill:currentColor}::slotted(*){height:100%;width:100%}/*# sourceMappingURL=icon-styles.css.map */
`;var ni=class extends kt{};ni.styles=[$o];ni=a([I("md-icon")],ni);var Oo=_`@media(forced-colors: active){:host{--md-filled-select-text-field-disabled-active-indicator-color: GrayText;--md-filled-select-text-field-disabled-active-indicator-opacity: 1;--md-filled-select-text-field-disabled-input-text-color: GrayText;--md-filled-select-text-field-disabled-input-text-opacity: 1;--md-filled-select-text-field-disabled-label-text-color: GrayText;--md-filled-select-text-field-disabled-label-text-opacity: 1;--md-filled-select-text-field-disabled-leading-icon-color: GrayText;--md-filled-select-text-field-disabled-leading-icon-opacity: 1;--md-filled-select-text-field-disabled-supporting-text-color: GrayText;--md-filled-select-text-field-disabled-supporting-text-opacity: 1;--md-filled-select-text-field-disabled-trailing-icon-color: GrayText;--md-filled-select-text-field-disabled-trailing-icon-opacity: 1}}/*# sourceMappingURL=filled-forced-colors-styles.css.map */
`;var Ro=_`@media(forced-colors: active){.menu{border-style:solid;border-color:CanvasText;border-width:1px}}/*# sourceMappingURL=forced-colors-styles.css.map */
`;function si(o,e=ge){let t=Ze(o,e);return t&&(t.tabIndex=0,t.focus()),t}function di(o,e=ge){let t=ci(o,e);return t&&(t.tabIndex=0,t.focus()),t}function _e(o,e=ge){for(let t=0;t<o.length;t++){let i=o[t];if(i.tabIndex===0&&e(i))return{item:i,index:t}}return null}function Ze(o,e=ge){for(let t of o)if(e(t))return t;return null}function ci(o,e=ge){for(let t=o.length-1;t>=0;t--){let i=o[t];if(e(i))return i}return null}function kr(o,e,t=ge){for(let i=1;i<o.length;i++){let r=(i+e)%o.length,l=o[r];if(t(l))return l}return o[e]?o[e]:null}function Ir(o,e,t=ge){for(let i=1;i<o.length;i++){let r=(e-i+o.length)%o.length,l=o[r];if(t(l))return l}return o[e]?o[e]:null}function pi(o,e,t=ge){if(e){let i=kr(o,e.index,t);return i&&(i.tabIndex=0,i.focus()),i}else return si(o,t)}function hi(o,e,t=ge){if(e){let i=Ir(o,e.index,t);return i&&(i.tabIndex=0,i.focus()),i}else return di(o,t)}function ge(o){return!o.disabled}var W={ArrowDown:"ArrowDown",ArrowLeft:"ArrowLeft",ArrowUp:"ArrowUp",ArrowRight:"ArrowRight",Home:"Home",End:"End"},It=class{constructor(e){this.handleKeydown=v=>{let x=v.key;if(v.defaultPrevented||!this.isNavigableKey(x))return;let y=this.items;if(!y.length)return;let w=_e(y,this.isActivatable);w&&(w.item.tabIndex=-1),v.preventDefault();let k=this.isRtl(),P=k?W.ArrowRight:W.ArrowLeft,R=k?W.ArrowLeft:W.ArrowRight;switch(x){case W.ArrowDown:case R:pi(y,w,this.isActivatable);break;case W.ArrowUp:case P:hi(y,w,this.isActivatable);break;case W.Home:si(y,this.isActivatable);break;case W.End:di(y,this.isActivatable);break;default:break}},this.onDeactivateItems=()=>{let v=this.items;for(let x of v)this.deactivateItem(x)},this.onRequestActivation=v=>{this.onDeactivateItems();let x=v.target;this.activateItem(x),x.focus()},this.onSlotchange=()=>{let v=this.items,x=!1;for(let w of v){if(!w.disabled&&w.tabIndex>-1&&!x){x=!0,w.tabIndex=0;continue}w.tabIndex=-1}if(x)return;let y=Ze(v,this.isActivatable);y&&(y.tabIndex=0)};let{isItem:t,getPossibleItems:i,isRtl:r,deactivateItem:l,activateItem:s,isNavigableKey:h,isActivatable:f}=e;this.isItem=t,this.getPossibleItems=i,this.isRtl=r,this.deactivateItem=l,this.activateItem=s,this.isNavigableKey=h,this.isActivatable=f}get items(){let e=this.getPossibleItems(),t=[];for(let i of e){if(this.isItem(i)){t.push(i);continue}let l=i.item;l&&this.isItem(l)&&t.push(l)}return t}activateNextItem(){let e=this.items,t=_e(e,this.isActivatable);return t&&(t.item.tabIndex=-1),pi(e,t,this.isActivatable)}activatePreviousItem(){let e=this.items,t=_e(e,this.isActivatable);return t&&(t.item.tabIndex=-1),hi(e,t,this.isActivatable)}};function $r(o,e){return new CustomEvent("close-menu",{bubbles:!0,composed:!0,detail:{initiator:o,reason:e,itemPath:[o]}})}var fi=$r;var ui={SPACE:"Space",ENTER:"Enter"},mi={CLICK_SELECTION:"click-selection",KEYDOWN:"keydown"},Or={ESCAPE:"Escape",SPACE:ui.SPACE,ENTER:ui.ENTER};function $t(o){return Object.values(Or).some(e=>e===o)}function Lo(o){return Object.values(ui).some(e=>e===o)}function Xe(o,e){let t=new Event("md-contains",{bubbles:!0,composed:!0}),i=[],r=s=>{i=s.composedPath()};return e.addEventListener("md-contains",r),o.dispatchEvent(t),e.removeEventListener("md-contains",r),i.length>0}var we={NONE:"none",LIST_ROOT:"list-root",FIRST_ITEM:"first-item",LAST_ITEM:"last-item"};var Je={END_START:"end-start",END_END:"end-end",START_START:"start-start",START_END:"start-end"},Ot=class{constructor(e,t){this.host=e,this.getProperties=t,this.surfaceStylesInternal={display:"none"},this.lastValues={isOpen:!1},this.host.addController(this)}get surfaceStyles(){return this.surfaceStylesInternal}async position(){let{surfaceEl:e,anchorEl:t,anchorCorner:i,surfaceCorner:r,positioning:l,xOffset:s,yOffset:h,repositionStrategy:f}=this.getProperties(),v=i.toLowerCase().trim(),x=r.toLowerCase().trim();if(!e||!t)return;this.surfaceStylesInternal={display:"block",opacity:"0"},this.host.requestUpdate(),await this.host.updateComplete;let y=e.getSurfacePositionClientRect?e.getSurfacePositionClientRect():e.getBoundingClientRect(),w=t.getSurfacePositionClientRect?t.getSurfacePositionClientRect():t.getBoundingClientRect(),[k,P]=x.split("-"),[R,B]=v.split("-"),X=getComputedStyle(e).direction==="ltr",{blockInset:O,blockOutOfBoundsCorrection:j,surfaceBlockProperty:ie}=this.calculateBlock({surfaceRect:y,anchorRect:w,anchorBlock:R,surfaceBlock:k,yOffset:h,positioning:l});if(j){let se=k==="start"?"end":"start",pe=R==="start"?"end":"start",le=this.calculateBlock({surfaceRect:y,anchorRect:w,anchorBlock:pe,surfaceBlock:se,yOffset:h,positioning:l});j>le.blockOutOfBoundsCorrection&&(O=le.blockInset,j=le.blockOutOfBoundsCorrection,ie=le.surfaceBlockProperty)}let{inlineInset:K,inlineOutOfBoundsCorrection:H,surfaceInlineProperty:ce}=this.calculateInline({surfaceRect:y,anchorRect:w,anchorInline:B,surfaceInline:P,xOffset:s,positioning:l,isLTR:X});if(H){let se=P==="start"?"end":"start",pe=B==="start"?"end":"start",le=this.calculateInline({surfaceRect:y,anchorRect:w,anchorInline:pe,surfaceInline:se,xOffset:s,positioning:l,isLTR:X});Math.abs(H)>Math.abs(le.inlineOutOfBoundsCorrection)&&(K=le.inlineInset,H=le.inlineOutOfBoundsCorrection,ce=le.surfaceInlineProperty)}f==="move"&&(O=O-j,K=K-H),this.surfaceStylesInternal={display:"block",opacity:"1",[ie]:`${O}px`,[ce]:`${K}px`},f==="resize"&&(j&&(this.surfaceStylesInternal.height=`${y.height-j}px`),H&&(this.surfaceStylesInternal.width=`${y.width-H}px`)),this.host.requestUpdate()}calculateBlock(e){let{surfaceRect:t,anchorRect:i,anchorBlock:r,surfaceBlock:l,yOffset:s,positioning:h}=e,f=h==="fixed"?1:0,v=l==="start"?1:0,x=l==="end"?1:0,w=(r!==l?1:0)*i.height+s,k=v*i.top+x*(window.innerHeight-i.bottom),P=Math.abs(Math.min(0,window.innerHeight-k-w-t.height));return{blockInset:f*k+w,blockOutOfBoundsCorrection:P,surfaceBlockProperty:l==="start"?"inset-block-start":"inset-block-end"}}calculateInline(e){let{isLTR:t,surfaceInline:i,anchorInline:r,anchorRect:l,surfaceRect:s,xOffset:h,positioning:f}=e,v=f==="fixed"?1:0,x=t?1:0,y=t?0:1,w=i==="start"?1:0,k=i==="end"?1:0,R=(r!==i?1:0)*l.width+h,B=w*l.left+k*(window.innerWidth-l.right),X=w*(window.innerWidth-l.right)+k*l.left,O=x*B+y*X,j=Math.abs(Math.min(0,window.innerWidth-O-R-s.width));return{inlineInset:v*O+R,inlineOutOfBoundsCorrection:j,surfaceInlineProperty:i==="start"?"inset-inline-start":"inset-inline-end"}}hostUpdate(){this.onUpdate()}hostUpdated(){this.onUpdate()}async onUpdate(){let e=this.getProperties(),t=!1;for(let[s,h]of Object.entries(e))if(t=t||h!==this.lastValues[s],t)break;let i=this.lastValues.isOpen!==e.isOpen,r=!!e.anchorEl,l=!!e.surfaceEl;t&&r&&l&&(this.lastValues.isOpen=e.isOpen,e.isOpen?(this.lastValues=e,await this.position(),e.onOpen()):i&&(await e.beforeClose(),this.close(),e.onClose()))}close(){this.surfaceStylesInternal={display:"none"},this.host.requestUpdate()}};var re={INDEX:0,ITEM:1,TEXT:2},Rt=class{constructor(e){this.getProperties=e,this.typeaheadRecords=[],this.typaheadBuffer="",this.cancelTypeaheadTimeout=0,this.isTypingAhead=!1,this.lastActiveRecord=null,this.onKeydown=t=>{this.isTypingAhead?this.typeahead(t):this.beginTypeahead(t)},this.endTypeahead=()=>{this.isTypingAhead=!1,this.typaheadBuffer="",this.typeaheadRecords=[]}}get items(){return this.getProperties().getItems()}get active(){return this.getProperties().active}beginTypeahead(e){this.active&&(e.code==="Space"||e.code==="Enter"||e.code.startsWith("Arrow")||e.code==="Escape"||(this.isTypingAhead=!0,this.typeaheadRecords=this.items.map((t,i)=>[i,t,t.typeaheadText.trim().toLowerCase()]),this.lastActiveRecord=this.typeaheadRecords.find(t=>t[re.ITEM].tabIndex===0)??null,this.lastActiveRecord&&(this.lastActiveRecord[re.ITEM].tabIndex=-1),this.typeahead(e)))}typeahead(e){if(e.defaultPrevented)return;if(clearTimeout(this.cancelTypeaheadTimeout),e.code==="Enter"||e.code.startsWith("Arrow")||e.code==="Escape"){this.endTypeahead(),this.lastActiveRecord&&(this.lastActiveRecord[re.ITEM].tabIndex=-1);return}e.code==="Space"&&e.preventDefault(),this.cancelTypeaheadTimeout=setTimeout(this.endTypeahead,this.getProperties().typeaheadBufferTime),this.typaheadBuffer+=e.key.toLowerCase();let t=this.lastActiveRecord?this.lastActiveRecord[re.INDEX]:-1,i=this.typeaheadRecords.length,r=f=>(f[re.INDEX]+i-t)%i,l=this.typeaheadRecords.filter(f=>!f[re.ITEM].disabled&&f[re.TEXT].startsWith(this.typaheadBuffer)).sort((f,v)=>r(f)-r(v));if(l.length===0){clearTimeout(this.cancelTypeaheadTimeout),this.lastActiveRecord&&(this.lastActiveRecord[re.ITEM].tabIndex=-1),this.endTypeahead();return}let s=this.typaheadBuffer.length===1,h;this.lastActiveRecord===l[0]&&s?h=l[1]??l[0]:h=l[0],this.lastActiveRecord&&(this.lastActiveRecord[re.ITEM].tabIndex=-1),this.lastActiveRecord=h,h[re.ITEM].tabIndex=0,h[re.ITEM].focus()}};var vi=200,Do=new Set([W.ArrowDown,W.ArrowUp,W.Home,W.End]),Rr=new Set([W.ArrowLeft,W.ArrowRight,...Do]);function Lr(o=document){let e=o.activeElement;for(;e&&e?.shadowRoot?.activeElement;)e=e.shadowRoot.activeElement;return e}var z=class extends C{get openDirection(){return this.menuCorner.split("_")[0]==="START"?"DOWN":"UP"}get anchorElement(){return this.anchor?this.getRootNode().querySelector(`#${this.anchor}`):this.currentAnchorElement}set anchorElement(e){this.currentAnchorElement=e,this.requestUpdate("anchorElement")}constructor(){super(),this.anchor="",this.positioning="absolute",this.quick=!1,this.hasOverflow=!1,this.open=!1,this.xOffset=0,this.yOffset=0,this.typeaheadDelay=vi,this.anchorCorner=Je.END_START,this.menuCorner=Je.START_START,this.stayOpenOnOutsideClick=!1,this.stayOpenOnFocusout=!1,this.skipRestoreFocus=!1,this.defaultFocus=we.FIRST_ITEM,this.typeaheadActive=!0,this.isSubmenu=!1,this.pointerPath=[],this.isPointerDown=!1,this.openCloseAnimationSignal=lo(),this.listController=new It({isItem:e=>e.hasAttribute("md-menu-item"),getPossibleItems:()=>this.slotItems,isRtl:()=>getComputedStyle(this).direction==="rtl",deactivateItem:e=>{e.selected=!1,e.tabIndex=-1},activateItem:e=>{e.selected=!0,e.tabIndex=0},isNavigableKey:e=>{if(!this.isSubmenu)return Rr.has(e);let i=getComputedStyle(this).direction==="rtl"?W.ArrowLeft:W.ArrowRight;return e===i?!0:Do.has(e)}}),this.lastFocusedElement=null,this.typeaheadController=new Rt(()=>({getItems:()=>this.items,typeaheadBufferTime:this.typeaheadDelay,active:this.typeaheadActive})),this.currentAnchorElement=null,this.internals=fo(this,this.attachInternals()),this.menuPositionController=new Ot(this,()=>({anchorCorner:this.anchorCorner,surfaceCorner:this.menuCorner,surfaceEl:this.surfaceEl,anchorEl:this.anchorElement,positioning:this.positioning,isOpen:this.open,xOffset:this.xOffset,yOffset:this.yOffset,onOpen:this.onOpened,beforeClose:this.beforeClose,onClose:this.onClosed,repositionStrategy:this.hasOverflow?"move":"resize"})),this.handleFocusout=async e=>{if(this.stayOpenOnFocusout||!this.open)return;if(e.relatedTarget){if(Xe(e.relatedTarget,this))return;let i=this.anchorElement;if(Xe(e.relatedTarget,i)&&this.isPointerDown)return}else if(this.isPointerDown&&this.pointerPath.includes(this))return;let t=this.skipRestoreFocus;this.skipRestoreFocus=!0,this.close(),await this.updateComplete,this.skipRestoreFocus=t},this.onOpened=async()=>{this.lastFocusedElement=Lr();let e=this.items,t=_e(e);t&&this.defaultFocus!==we.NONE&&(t.item.tabIndex=-1);let i=!this.quick;switch(this.quick?this.dispatchEvent(new Event("opening")):i=!!await this.animateOpen(),this.defaultFocus){case we.FIRST_ITEM:let r=Ze(e);r&&(r.tabIndex=0,r.focus(),await r.updateComplete);break;case we.LAST_ITEM:let l=ci(e);l&&(l.tabIndex=0,l.focus(),await l.updateComplete);break;case we.LIST_ROOT:this.focus();break;default:case we.NONE:break}i||this.dispatchEvent(new Event("opened"))},this.beforeClose=async()=>{this.open=!1,this.skipRestoreFocus||this.lastFocusedElement?.focus?.(),this.quick||await this.animateClose()},this.onClosed=()=>{this.quick&&(this.dispatchEvent(new Event("closing")),this.dispatchEvent(new Event("closed")))},this.onWindowPointerdown=e=>{this.isPointerDown=!0,this.pointerPath=e.composedPath()},this.onWindowPointerup=()=>{this.isPointerDown=!1},this.onWindowClick=e=>{if(!this.open)return;let t=e.composedPath();!this.stayOpenOnOutsideClick&&!t.includes(this)&&!t.includes(this.anchorElement)&&(this.open=!1)},!1||(this.internals.role="menu",this.addEventListener("keydown",this.listController.handleKeydown),this.addEventListener("keydown",this.captureKeydown,{capture:!0}),this.addEventListener("focusout",this.handleFocusout))}get items(){return this.listController.items}willUpdate(e){if(e.has("open")){if(this.open){this.removeAttribute("aria-hidden");return}this.setAttribute("aria-hidden","true")}}render(){return this.renderSurface()}renderSurface(){return m`
       <div
          class="menu ${q(this.getSurfaceClasses())}"
          style=${Ye(this.menuPositionController.surfaceStyles)}>
        ${this.renderElevation()}
        <div class="items">
          <div class="item-padding">
            ${this.renderMenuItems()}
          </div>
        </div>
       </div>
     `}renderMenuItems(){return m`<slot
        @close-menu=${this.onCloseMenu}
        @deactivate-items=${this.onDeactivateItems}
        @request-activation=${this.onRequestActivation}
        @deactivate-typeahead=${this.handleDeactivateTypeahead}
        @activate-typeahead=${this.handleActivateTypeahead}
        @stay-open-on-focusout=${this.handleStayOpenOnFocusout}
        @close-on-focusout=${this.handleCloseOnFocusout}
        @slotchange=${this.listController.onSlotchange}></slot>`}renderElevation(){return m`<md-elevation part="elevation"></md-elevation>`}getSurfaceClasses(){return{open:this.open,fixed:this.positioning==="fixed","has-overflow":this.hasOverflow}}captureKeydown(e){e.target===this&&!e.defaultPrevented&&$t(e.code)&&(e.preventDefault(),this.close()),this.typeaheadController.onKeydown(e)}async animateOpen(){let e=this.surfaceEl,t=this.slotEl;if(!e||!t)return!0;let i=this.openDirection;this.dispatchEvent(new Event("opening")),e.classList.toggle("animating",!0);let r=this.openCloseAnimationSignal.start(),l=e.offsetHeight,s=i==="UP",h=this.items,f=500,v=50,x=250,y=(f-x)/h.length,w=e.animate([{height:"0px"},{height:`${l}px`}],{duration:f,easing:ee.EMPHASIZED}),k=t.animate([{transform:s?`translateY(-${l}px)`:""},{transform:""}],{duration:f,easing:ee.EMPHASIZED}),P=e.animate([{opacity:0},{opacity:1}],v),R=[];for(let O=0;O<h.length;O++){let j=s?h.length-1-O:O,ie=h[j],K=ie.animate([{opacity:0},{opacity:1}],{duration:x,delay:y*O});ie.classList.toggle("md-menu-hidden",!0),K.addEventListener("finish",()=>{ie.classList.toggle("md-menu-hidden",!1)}),R.push([ie,K])}let B=O=>{},X=new Promise(O=>{B=O});return r.addEventListener("abort",()=>{w.cancel(),k.cancel(),P.cancel(),R.forEach(([O,j])=>{O.classList.toggle("md-menu-hidden",!1),j.cancel()}),B(!0)}),w.addEventListener("finish",()=>{e.classList.toggle("animating",!1),this.openCloseAnimationSignal.finish(),B(!1)}),await X}animateClose(){let e,t,i=new Promise((H,ce)=>{e=H,t=ce}),r=this.surfaceEl,l=this.slotEl;if(!r||!l)return t(),i;let h=this.openDirection==="UP";this.dispatchEvent(new Event("closing")),r.classList.toggle("animating",!0);let f=this.openCloseAnimationSignal.start(),v=r.offsetHeight,x=this.items,y=150,w=50,k=y-w,P=50,R=50,B=.35,X=(y-R-P)/x.length,O=r.animate([{height:`${v}px`},{height:`${v*B}px`}],{duration:y,easing:ee.EMPHASIZED_ACCELERATE}),j=l.animate([{transform:""},{transform:h?`translateY(-${v*(1-B)}px)`:""}],{duration:y,easing:ee.EMPHASIZED_ACCELERATE}),ie=r.animate([{opacity:1},{opacity:0}],{duration:w,delay:k}),K=[];for(let H=0;H<x.length;H++){let ce=h?H:x.length-1-H,se=x[ce],pe=se.animate([{opacity:1},{opacity:0}],{duration:P,delay:R+X*H});pe.addEventListener("finish",()=>{se.classList.toggle("md-menu-hidden",!0)}),K.push([se,pe])}return f.addEventListener("abort",()=>{O.cancel(),j.cancel(),ie.cancel(),K.forEach(([H,ce])=>{ce.cancel(),H.classList.toggle("md-menu-hidden",!1)}),t()}),O.addEventListener("finish",()=>{r.classList.toggle("animating",!1),K.forEach(([H])=>{H.classList.toggle("md-menu-hidden",!1)}),this.openCloseAnimationSignal.finish(),this.dispatchEvent(new Event("closed")),e(!0)}),i}connectedCallback(){super.connectedCallback(),!1||(window.addEventListener("click",this.onWindowClick,{capture:!0}),window.addEventListener("pointerdown",this.onWindowPointerdown),window.addEventListener("pointerup",this.onWindowPointerup))}disconnectedCallback(){super.disconnectedCallback(),!1||(window.removeEventListener("click",this.onWindowClick,{capture:!0}),window.removeEventListener("pointerdown",this.onWindowPointerdown),window.removeEventListener("pointerup",this.onWindowPointerup))}onCloseMenu(){this.close()}onDeactivateItems(e){e.stopPropagation(),this.listController.onDeactivateItems()}onRequestActivation(e){e.stopPropagation(),this.listController.onRequestActivation(e)}handleDeactivateTypeahead(e){e.stopPropagation(),this.typeaheadActive=!1}handleActivateTypeahead(e){e.stopPropagation(),this.typeaheadActive=!0}handleStayOpenOnFocusout(e){e.stopPropagation(),this.stayOpenOnFocusout=!0}handleCloseOnFocusout(e){e.stopPropagation(),this.stayOpenOnFocusout=!1}close(){this.open=!1,this.slotItems.forEach(t=>{t.close?.()})}show(){this.open=!0}activateNextItem(){return this.listController.activateNextItem()??null}activatePreviousItem(){return this.listController.activatePreviousItem()??null}};uo(z,{focusable:!1});a([b(".menu")],z.prototype,"surfaceEl",void 0);a([b("slot")],z.prototype,"slotEl",void 0);a([p()],z.prototype,"anchor",void 0);a([p()],z.prototype,"positioning",void 0);a([p({type:Boolean})],z.prototype,"quick",void 0);a([p({type:Boolean,attribute:"has-overflow"})],z.prototype,"hasOverflow",void 0);a([p({type:Boolean,reflect:!0})],z.prototype,"open",void 0);a([p({type:Number,attribute:"x-offset"})],z.prototype,"xOffset",void 0);a([p({type:Number,attribute:"y-offset"})],z.prototype,"yOffset",void 0);a([p({type:Number,attribute:"typeahead-delay"})],z.prototype,"typeaheadDelay",void 0);a([p({attribute:"anchor-corner"})],z.prototype,"anchorCorner",void 0);a([p({attribute:"menu-corner"})],z.prototype,"menuCorner",void 0);a([p({type:Boolean,attribute:"stay-open-on-outside-click"})],z.prototype,"stayOpenOnOutsideClick",void 0);a([p({type:Boolean,attribute:"stay-open-on-focusout"})],z.prototype,"stayOpenOnFocusout",void 0);a([p({type:Boolean,attribute:"skip-restore-focus"})],z.prototype,"skipRestoreFocus",void 0);a([p({attribute:"default-focus"})],z.prototype,"defaultFocus",void 0);a([Q({flatten:!0})],z.prototype,"slotItems",void 0);a([$()],z.prototype,"typeaheadActive",void 0);var Po=_`:host{--md-elevation-level: var(--md-menu-container-elevation, 2);--md-elevation-shadow-color: var(--md-menu-container-shadow-color, var(--md-sys-color-shadow, #000));min-width:112px;color:unset;display:contents}md-focus-ring{--md-focus-ring-shape: var(--md-menu-container-shape, 4px)}.menu{border-radius:var(--md-menu-container-shape, 4px);display:none;opacity:0;z-index:20;position:absolute;user-select:none;max-height:inherit;height:inherit;min-width:inherit;max-width:inherit}.fixed{position:fixed}.items{display:block;list-style-type:none;margin:0;outline:none;box-sizing:border-box;background-color:var(--md-menu-container-color, var(--md-sys-color-surface-container, #f3edf7));height:inherit;max-height:inherit;overflow:auto;min-width:inherit;max-width:inherit;border-radius:inherit}.item-padding{padding-block:8px}.has-overflow .items{overflow:visible}.animating .items{overflow:hidden}.has-overflow.animating .items{pointer-events:none}.animating ::slotted(.md-menu-hidden){opacity:0}slot{display:block;height:inherit;max-height:inherit}::slotted(:is(md-divider,[role=separator])){margin:8px 0}/*# sourceMappingURL=menu-styles.css.map */
`;var gi=class extends z{};gi.styles=[Po,Ro];gi=a([I("md-menu")],gi);function Mo(o){let e=[];for(let t=0;t<o.length;t++){let i=o[t];i.selected&&e.push([i,t])}return e}var zo,Lt=Symbol("value"),D=class extends C{constructor(){super(...arguments),this.quick=!1,this.required=!1,this.disabled=!1,this.errorText="",this.label="",this.supportingText="",this.error=!1,this.menuPositioning="absolute",this.typeaheadDelay=vi,this.hasLeadingIcon=!1,this.displayText="",this[zo]="",this.lastUserSetValue=null,this.lastUserSetSelectedIndex=null,this.lastSelectedOption=null,this.lastSelectedOptionRecords=[],this.nativeError=!1,this.nativeErrorText="",this.focused=!1,this.open=!1,this.customValidationMessage="",this.internals=this.attachInternals()}get value(){return this[Lt]}set value(e){!1||(this.lastUserSetValue=e,this.select(e))}get options(){return this.menu?.items??[]}get selectedIndex(){let[e,t]=(this.getSelectedOptions()??[])[0]??[];return t??-1}set selectedIndex(e){this.lastUserSetSelectedIndex=e,this.selectIndex(e)}get selectedOptions(){return(this.getSelectedOptions()??[]).map(([e])=>e)}get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get form(){return this.internals.form}get labels(){return this.internals.labels}get validity(){return this.syncValidity(),this.internals.validity}get validationMessage(){return this.syncValidity(),this.internals.validationMessage}get willValidate(){return this.syncValidity(),this.internals.willValidate}get hasError(){return this.error||this.nativeError}select(e){let t=this.options.find(i=>i.value===e);t&&this.selectItem(t)}selectIndex(e){let t=this.options[e];t&&this.selectItem(t)}reset(){for(let e of this.options)e.selected=e.hasAttribute("selected");this.updateValueAndDisplayText(),this.nativeError=!1,this.nativeErrorText=""}checkValidity(){return this.syncValidity(),this.internals.checkValidity()}reportValidity(){let e;this.addEventListener("invalid",r=>{e=r},{once:!0});let t=this.checkValidity();if(e?.defaultPrevented)return t;let i=this.getErrorText();return this.nativeError=!t,this.nativeErrorText=this.validationMessage,i===this.getErrorText()&&this.field?.reannounceError(),t}setCustomValidity(e){this.customValidationMessage=e,this.syncValidity()}update(e){this.hasUpdated||this.initUserSelection(),super.update(e)}render(){return m`
      <span
          class="select ${q(this.getRenderClasses())}"
          @focusout=${this.handleFocusout}>
        ${this.renderField()}
        ${this.renderMenu()}
      </span>
    `}updated(e){e.has("required")&&this.syncValidity()}async firstUpdated(e){await this.menu?.updateComplete,this.lastSelectedOptionRecords.length||this.initUserSelection(),!this.lastSelectedOptionRecords.length&&!!1&&!this.options.length&&setTimeout(()=>{this.updateValueAndDisplayText()}),super.firstUpdated(e)}getRenderClasses(){return{disabled:this.disabled,error:this.error,open:this.open}}renderField(){return De`
      <${this.fieldTag}
          aria-haspopup="listbox"
          role="combobox"
          part="field"
          id="field"
          tabindex=${this.disabled?"-1":"0"}
          aria-label=${this.ariaLabel||g}
          aria-describedby="description"
          aria-expanded=${this.open?"true":g}
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
      </${this.fieldTag}>`}renderFieldContent(){return[this.renderLeadingIcon(),this.renderLabel(),this.renderTrailingIcon()]}renderLeadingIcon(){return m`
      <span class="icon leading" slot="start">
         <slot name="leading-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
     `}renderTrailingIcon(){return m`
      <span class="icon trailing" slot="end">
        <slot name="trailing-icon" @slotchange=${this.handleIconChange}>
          <svg height="5" viewBox="7 10 10 5" focusable="false">
            <polygon class="down" stroke="none" fill-rule="evenodd" points="7 10 12 15 17 10"></polygon>
            <polygon class="up" stroke="none" fill-rule="evenodd" points="7 15 12 10 17 15"></polygon>
          </svg>
        </slot>
      </span>
     `}renderLabel(){return m`<div id="label">${this.displayText||m`&nbsp;`}</div>`}renderMenu(){let e=this.label||this.ariaLabel;return m`
      <md-menu
          id="listbox"
          default-focus="none"
          role="listbox"
          tabindex="-1"
          aria-label=${e||g}
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
      </md-menu>`}renderMenuContent(){return m`<slot></slot>`}handleKeydown(e){if(this.open||this.disabled||!this.menu)return;let t=this.menu.typeaheadController,i=e.code==="Space"||e.code==="ArrowDown"||e.code==="Enter";if(!t.isTypingAhead&&i){e.preventDefault(),this.open=!0;return}if(e.key.length===1){t.onKeydown(e),e.preventDefault();let{lastActiveRecord:l}=t;if(!l)return;this.labelEl?.setAttribute?.("aria-live","polite"),this.selectItem(l[re.ITEM])&&this.dispatchInteractionEvents()}}handleClick(){this.open=!0}handleFocus(){this.focused=!0}handleBlur(){this.focused=!1}handleFocusout(e){e.relatedTarget&&Xe(e.relatedTarget,this)||(this.open=!1)}getSelectedOptions(){if(!this.menu)return this.lastSelectedOptionRecords=[],null;let e=this.menu.items;return this.lastSelectedOptionRecords=Mo(e),this.lastSelectedOptionRecords}async getUpdateComplete(){return await this.menu?.updateComplete,super.getUpdateComplete()}updateValueAndDisplayText(){let e=this.getSelectedOptions()??[],t=!1;if(e.length){let[i]=e[0];t=this.lastSelectedOption!==i,this.lastSelectedOption=i,this[Lt]=i.value,this.displayText=i.displayText}else t=this.lastSelectedOption!==null,this.lastSelectedOption=null,this[Lt]="",this.displayText="";return this.internals.setFormValue(this.value),this.syncValidity(),t}async handleOpening(e){this.labelEl?.removeAttribute?.("aria-live"),this.redispatchEvent(e);let t=this.menu.items,i=_e(t)?.item,[r]=this.lastSelectedOptionRecords[0]??[null];i&&i!==r&&(i.tabIndex=-1),r=r??t[0],r&&(r.tabIndex=0,r.focus())}redispatchEvent(e){xe(this,e)}handleClosed(e){this.open=!1,this.redispatchEvent(e)}handleCloseMenu(e){let t=e.detail.reason,i=e.detail.itemPath[0];this.open=!1;let r=!1;t.kind==="click-selection"?r=this.selectItem(i):t.kind==="keydown"&&Lo(t.key)?r=this.selectItem(i):(i.tabIndex=-1,i.blur()),r&&this.dispatchInteractionEvents()}selectItem(e){return this.lastSelectedOptionRecords.forEach(([t])=>{e!==t&&(t.selected=!1)}),e.selected=!0,this.updateValueAndDisplayText()}handleRequestSelection(e){let t=e.target;this.lastSelectedOptionRecords.some(([i])=>i===t)||this.selectItem(t)}handleRequestDeselection(e){let t=e.target;this.lastSelectedOptionRecords.some(([i])=>i===t)&&this.updateValueAndDisplayText()}initUserSelection(){this.lastUserSetValue&&!this.lastSelectedOptionRecords.length?this.select(this.lastUserSetValue):this.lastUserSetSelectedIndex!==null&&!this.lastSelectedOptionRecords.length?this.selectIndex(this.lastUserSetSelectedIndex):this.updateValueAndDisplayText()}handleIconChange(){this.hasLeadingIcon=this.leadingIcons.length>0}dispatchInteractionEvents(){this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0}))}getErrorText(){return this.error?this.errorText:this.nativeErrorText}syncValidity(){let e=this.required&&!this.value,t=!!this.customValidationMessage,i=this.customValidationMessage||e&&this.getRequiredValidationMessage()||"";this.internals.setValidity({valueMissing:e,customError:t},i)}getRequiredValidationMessage(){let e=document.createElement("select");return e.required=!0,e.validationMessage}formResetCallback(){this.reset()}formStateRestoreCallback(e){this.value=e}};zo=Lt;ne(D);D.formAssociated=!0;a([p({type:Boolean})],D.prototype,"quick",void 0);a([p({type:Boolean})],D.prototype,"required",void 0);a([p({type:Boolean,reflect:!0})],D.prototype,"disabled",void 0);a([p({type:String,attribute:"error-text"})],D.prototype,"errorText",void 0);a([p()],D.prototype,"label",void 0);a([p({type:String,attribute:"supporting-text"})],D.prototype,"supportingText",void 0);a([p({type:Boolean,reflect:!0})],D.prototype,"error",void 0);a([p({attribute:"menu-positioning"})],D.prototype,"menuPositioning",void 0);a([p({type:Number,attribute:"typeahead-delay"})],D.prototype,"typeaheadDelay",void 0);a([p({type:Boolean,attribute:"has-leading-icon"})],D.prototype,"hasLeadingIcon",void 0);a([p({attribute:"display-text"})],D.prototype,"displayText",void 0);a([p()],D.prototype,"value",null);a([p({type:Number,attribute:"selected-index"})],D.prototype,"selectedIndex",null);a([$()],D.prototype,"nativeError",void 0);a([$()],D.prototype,"nativeErrorText",void 0);a([$()],D.prototype,"focused",void 0);a([$()],D.prototype,"open",void 0);a([b(".field")],D.prototype,"field",void 0);a([b("md-menu")],D.prototype,"menu",void 0);a([b("#label")],D.prototype,"labelEl",void 0);a([Q({slot:"leading-icon",flatten:!0})],D.prototype,"leadingIcons",void 0);var Dt=class extends D{constructor(){super(...arguments),this.fieldTag=ve`md-filled-field`}};var No=_`:host{--_text-field-active-indicator-color: var(--md-filled-select-text-field-active-indicator-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-active-indicator-height: var(--md-filled-select-text-field-active-indicator-height, 1px);--_text-field-container-color: var(--md-filled-select-text-field-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_text-field-container-shape-start-start: var( --md-filled-select-text-field-container-shape-start-start, var( --md-filled-select-text-field-container-shape, 4px ) );--_text-field-container-shape-start-end: var( --md-filled-select-text-field-container-shape-start-end, var( --md-filled-select-text-field-container-shape, 4px ) );--_text-field-container-shape-end-end: var( --md-filled-select-text-field-container-shape-end-end, var( --md-filled-select-text-field-container-shape, 0px ) );--_text-field-container-shape-end-start: var( --md-filled-select-text-field-container-shape-end-start, var( --md-filled-select-text-field-container-shape, 0px ) );--_text-field-disabled-active-indicator-color: var(--md-filled-select-text-field-disabled-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-active-indicator-height: var(--md-filled-select-text-field-disabled-active-indicator-height, 1px);--_text-field-disabled-active-indicator-opacity: var(--md-filled-select-text-field-disabled-active-indicator-opacity, 0.38);--_text-field-disabled-container-color: var(--md-filled-select-text-field-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-container-opacity: var(--md-filled-select-text-field-disabled-container-opacity, 0.04);--_text-field-disabled-input-text-color: var(--md-filled-select-text-field-disabled-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-input-text-opacity: var(--md-filled-select-text-field-disabled-input-text-opacity, 0.38);--_text-field-disabled-label-text-color: var(--md-filled-select-text-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-label-text-opacity: var(--md-filled-select-text-field-disabled-label-text-opacity, 0.38);--_text-field-disabled-leading-icon-color: var(--md-filled-select-text-field-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-leading-icon-opacity: var(--md-filled-select-text-field-disabled-leading-icon-opacity, 0.38);--_text-field-disabled-supporting-text-color: var(--md-filled-select-text-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-supporting-text-opacity: var(--md-filled-select-text-field-disabled-supporting-text-opacity, 0.38);--_text-field-disabled-trailing-icon-color: var(--md-filled-select-text-field-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-trailing-icon-opacity: var(--md-filled-select-text-field-disabled-trailing-icon-opacity, 0.38);--_text-field-error-active-indicator-color: var(--md-filled-select-text-field-error-active-indicator-color, var(--md-sys-color-error, #b3261e));--_text-field-error-focus-active-indicator-color: var(--md-filled-select-text-field-error-focus-active-indicator-color, var(--md-sys-color-error, #b3261e));--_text-field-error-focus-input-text-color: var(--md-filled-select-text-field-error-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-error-focus-label-text-color: var(--md-filled-select-text-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-focus-leading-icon-color: var(--md-filled-select-text-field-error-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-error-focus-supporting-text-color: var(--md-filled-select-text-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-focus-trailing-icon-color: var(--md-filled-select-text-field-error-focus-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_text-field-error-hover-active-indicator-color: var(--md-filled-select-text-field-error-hover-active-indicator-color, var(--md-sys-color-on-error-container, #410e0b));--_text-field-error-hover-input-text-color: var(--md-filled-select-text-field-error-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-error-hover-label-text-color: var(--md-filled-select-text-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_text-field-error-hover-leading-icon-color: var(--md-filled-select-text-field-error-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-error-hover-state-layer-color: var(--md-filled-select-text-field-error-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-error-hover-state-layer-opacity: var(--md-filled-select-text-field-error-hover-state-layer-opacity, 0.08);--_text-field-error-hover-supporting-text-color: var(--md-filled-select-text-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-hover-trailing-icon-color: var(--md-filled-select-text-field-error-hover-trailing-icon-color, var(--md-sys-color-on-error-container, #410e0b));--_text-field-error-input-text-color: var(--md-filled-select-text-field-error-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-error-label-text-color: var(--md-filled-select-text-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-leading-icon-color: var(--md-filled-select-text-field-error-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-error-supporting-text-color: var(--md-filled-select-text-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-trailing-icon-color: var(--md-filled-select-text-field-error-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_text-field-focus-active-indicator-color: var(--md-filled-select-text-field-focus-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_text-field-focus-active-indicator-height: var(--md-filled-select-text-field-focus-active-indicator-height, 3px);--_text-field-focus-input-text-color: var(--md-filled-select-text-field-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-focus-label-text-color: var(--md-filled-select-text-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_text-field-focus-leading-icon-color: var(--md-filled-select-text-field-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-focus-supporting-text-color: var(--md-filled-select-text-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-focus-trailing-icon-color: var(--md-filled-select-text-field-focus-trailing-icon-color, var(--md-sys-color-primary, #6750a4));--_text-field-hover-active-indicator-color: var(--md-filled-select-text-field-hover-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-hover-active-indicator-height: var(--md-filled-select-text-field-hover-active-indicator-height, 1px);--_text-field-hover-input-text-color: var(--md-filled-select-text-field-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-hover-label-text-color: var(--md-filled-select-text-field-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-hover-leading-icon-color: var(--md-filled-select-text-field-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-hover-state-layer-color: var(--md-filled-select-text-field-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-hover-state-layer-opacity: var(--md-filled-select-text-field-hover-state-layer-opacity, 0.08);--_text-field-hover-supporting-text-color: var(--md-filled-select-text-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-hover-trailing-icon-color: var(--md-filled-select-text-field-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-input-text-color: var(--md-filled-select-text-field-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-input-text-font: var(--md-filled-select-text-field-input-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_text-field-input-text-line-height: var(--md-filled-select-text-field-input-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_text-field-input-text-size: var(--md-filled-select-text-field-input-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_text-field-input-text-weight: var(--md-filled-select-text-field-input-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_text-field-label-text-color: var(--md-filled-select-text-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-label-text-font: var(--md-filled-select-text-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_text-field-label-text-line-height: var(--md-filled-select-text-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_text-field-label-text-populated-line-height: var(--md-filled-select-text-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_text-field-label-text-populated-size: var(--md-filled-select-text-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_text-field-label-text-size: var(--md-filled-select-text-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_text-field-label-text-weight: var(--md-filled-select-text-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_text-field-leading-icon-color: var(--md-filled-select-text-field-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-leading-icon-size: var(--md-filled-select-text-field-leading-icon-size, 24px);--_text-field-supporting-text-color: var(--md-filled-select-text-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-supporting-text-font: var(--md-filled-select-text-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_text-field-supporting-text-line-height: var(--md-filled-select-text-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_text-field-supporting-text-size: var(--md-filled-select-text-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_text-field-supporting-text-weight: var(--md-filled-select-text-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_text-field-trailing-icon-color: var(--md-filled-select-text-field-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-trailing-icon-size: var(--md-filled-select-text-field-trailing-icon-size, 24px);--md-filled-field-active-indicator-color: var(--_text-field-active-indicator-color);--md-filled-field-active-indicator-height: var(--_text-field-active-indicator-height);--md-filled-field-container-color: var(--_text-field-container-color);--md-filled-field-container-shape-end-end: var(--_text-field-container-shape-end-end);--md-filled-field-container-shape-end-start: var(--_text-field-container-shape-end-start);--md-filled-field-container-shape-start-end: var(--_text-field-container-shape-start-end);--md-filled-field-container-shape-start-start: var(--_text-field-container-shape-start-start);--md-filled-field-content-color: var(--_text-field-input-text-color);--md-filled-field-content-font: var(--_text-field-input-text-font);--md-filled-field-content-line-height: var(--_text-field-input-text-line-height);--md-filled-field-content-size: var(--_text-field-input-text-size);--md-filled-field-content-weight: var(--_text-field-input-text-weight);--md-filled-field-disabled-active-indicator-color: var(--_text-field-disabled-active-indicator-color);--md-filled-field-disabled-active-indicator-height: var(--_text-field-disabled-active-indicator-height);--md-filled-field-disabled-active-indicator-opacity: var(--_text-field-disabled-active-indicator-opacity);--md-filled-field-disabled-container-color: var(--_text-field-disabled-container-color);--md-filled-field-disabled-container-opacity: var(--_text-field-disabled-container-opacity);--md-filled-field-disabled-content-color: var(--_text-field-disabled-input-text-color);--md-filled-field-disabled-content-opacity: var(--_text-field-disabled-input-text-opacity);--md-filled-field-disabled-label-text-color: var(--_text-field-disabled-label-text-color);--md-filled-field-disabled-label-text-opacity: var(--_text-field-disabled-label-text-opacity);--md-filled-field-disabled-leading-content-color: var(--_text-field-disabled-leading-icon-color);--md-filled-field-disabled-leading-content-opacity: var(--_text-field-disabled-leading-icon-opacity);--md-filled-field-disabled-supporting-text-color: var(--_text-field-disabled-supporting-text-color);--md-filled-field-disabled-supporting-text-opacity: var(--_text-field-disabled-supporting-text-opacity);--md-filled-field-disabled-trailing-content-color: var(--_text-field-disabled-trailing-icon-color);--md-filled-field-disabled-trailing-content-opacity: var(--_text-field-disabled-trailing-icon-opacity);--md-filled-field-error-active-indicator-color: var(--_text-field-error-active-indicator-color);--md-filled-field-error-content-color: var(--_text-field-error-input-text-color);--md-filled-field-error-focus-active-indicator-color: var(--_text-field-error-focus-active-indicator-color);--md-filled-field-error-focus-content-color: var(--_text-field-error-focus-input-text-color);--md-filled-field-error-focus-label-text-color: var(--_text-field-error-focus-label-text-color);--md-filled-field-error-focus-leading-content-color: var(--_text-field-error-focus-leading-icon-color);--md-filled-field-error-focus-supporting-text-color: var(--_text-field-error-focus-supporting-text-color);--md-filled-field-error-focus-trailing-content-color: var(--_text-field-error-focus-trailing-icon-color);--md-filled-field-error-hover-active-indicator-color: var(--_text-field-error-hover-active-indicator-color);--md-filled-field-error-hover-content-color: var(--_text-field-error-hover-input-text-color);--md-filled-field-error-hover-label-text-color: var(--_text-field-error-hover-label-text-color);--md-filled-field-error-hover-leading-content-color: var(--_text-field-error-hover-leading-icon-color);--md-filled-field-error-hover-state-layer-color: var(--_text-field-error-hover-state-layer-color);--md-filled-field-error-hover-state-layer-opacity: var(--_text-field-error-hover-state-layer-opacity);--md-filled-field-error-hover-supporting-text-color: var(--_text-field-error-hover-supporting-text-color);--md-filled-field-error-hover-trailing-content-color: var(--_text-field-error-hover-trailing-icon-color);--md-filled-field-error-label-text-color: var(--_text-field-error-label-text-color);--md-filled-field-error-leading-content-color: var(--_text-field-error-leading-icon-color);--md-filled-field-error-supporting-text-color: var(--_text-field-error-supporting-text-color);--md-filled-field-error-trailing-content-color: var(--_text-field-error-trailing-icon-color);--md-filled-field-focus-active-indicator-color: var(--_text-field-focus-active-indicator-color);--md-filled-field-focus-active-indicator-height: var(--_text-field-focus-active-indicator-height);--md-filled-field-focus-content-color: var(--_text-field-focus-input-text-color);--md-filled-field-focus-label-text-color: var(--_text-field-focus-label-text-color);--md-filled-field-focus-leading-content-color: var(--_text-field-focus-leading-icon-color);--md-filled-field-focus-supporting-text-color: var(--_text-field-focus-supporting-text-color);--md-filled-field-focus-trailing-content-color: var(--_text-field-focus-trailing-icon-color);--md-filled-field-hover-active-indicator-color: var(--_text-field-hover-active-indicator-color);--md-filled-field-hover-active-indicator-height: var(--_text-field-hover-active-indicator-height);--md-filled-field-hover-content-color: var(--_text-field-hover-input-text-color);--md-filled-field-hover-label-text-color: var(--_text-field-hover-label-text-color);--md-filled-field-hover-leading-content-color: var(--_text-field-hover-leading-icon-color);--md-filled-field-hover-state-layer-color: var(--_text-field-hover-state-layer-color);--md-filled-field-hover-state-layer-opacity: var(--_text-field-hover-state-layer-opacity);--md-filled-field-hover-supporting-text-color: var(--_text-field-hover-supporting-text-color);--md-filled-field-hover-trailing-content-color: var(--_text-field-hover-trailing-icon-color);--md-filled-field-label-text-color: var(--_text-field-label-text-color);--md-filled-field-label-text-font: var(--_text-field-label-text-font);--md-filled-field-label-text-line-height: var(--_text-field-label-text-line-height);--md-filled-field-label-text-populated-line-height: var(--_text-field-label-text-populated-line-height);--md-filled-field-label-text-populated-size: var(--_text-field-label-text-populated-size);--md-filled-field-label-text-size: var(--_text-field-label-text-size);--md-filled-field-label-text-weight: var(--_text-field-label-text-weight);--md-filled-field-leading-content-color: var(--_text-field-leading-icon-color);--md-filled-field-supporting-text-color: var(--_text-field-supporting-text-color);--md-filled-field-supporting-text-font: var(--_text-field-supporting-text-font);--md-filled-field-supporting-text-line-height: var(--_text-field-supporting-text-line-height);--md-filled-field-supporting-text-size: var(--_text-field-supporting-text-size);--md-filled-field-supporting-text-weight: var(--_text-field-supporting-text-weight);--md-filled-field-trailing-content-color: var(--_text-field-trailing-icon-color)}[has-start] .icon.leading{font-size:var(--_text-field-leading-icon-size);height:var(--_text-field-leading-icon-size);width:var(--_text-field-leading-icon-size)}.icon.trailing{font-size:var(--_text-field-trailing-icon-size);height:var(--_text-field-trailing-icon-size);width:var(--_text-field-trailing-icon-size)}/*# sourceMappingURL=filled-select-styles.css.map */
`;var Fo=_`:host{color:unset;min-width:210px;display:flex}.field{cursor:default;outline:none}.select{position:relative;flex-direction:column}.icon.trailing svg,.icon ::slotted(*){fill:currentColor}.icon ::slotted(*){width:inherit;height:inherit;font-size:inherit}.icon slot{display:flex;height:100%;width:100%;align-items:center;justify-content:center}.icon.trailing :is(.up,.down){opacity:0;transition:opacity 75ms linear 75ms}.select:not(.open) .down,.select.open .up{opacity:1}.field,.select,md-menu{min-width:inherit;width:inherit;max-width:inherit;display:flex}.field,.select{width:100%}:host{display:inline-flex}:host([disabled]){pointer-events:none}/*# sourceMappingURL=shared-styles.css.map */
`;var bi=class extends Dt{};bi.styles=[Fo,No,Oo];bi=a([I("md-filled-select")],bi);var Bo=_`@media(forced-colors: active){:host([disabled]),:host([disabled]) slot{color:GrayText;opacity:1}.list-item{position:relative}.list-item.selected::before{content:"";position:absolute;inset:0;box-sizing:border-box;border-radius:inherit;pointer-events:none;border:3px double CanvasText}}/*# sourceMappingURL=forced-colors-styles.css.map */
`;var Vo=_`:host{display:flex;--md-ripple-hover-color: var(--md-menu-item-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-hover-opacity: var(--md-menu-item-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-menu-item-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-pressed-opacity: var(--md-menu-item-pressed-state-layer-opacity, 0.12)}:host([disabled]){opacity:var(--md-menu-item-disabled-opacity, 0.3);pointer-events:none}md-focus-ring{z-index:1;--md-focus-ring-shape: 8px}a,button,li{background:none;border:none;padding:0;margin:0;text-align:unset;text-decoration:none}.list-item{border-radius:inherit;display:flex;flex:1;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.list-item:not(.disabled){cursor:pointer}[slot=container]{pointer-events:none}md-ripple{border-radius:inherit}md-item{border-radius:inherit;flex:1;color:var(--md-menu-item-label-text-color, var(--md-sys-color-on-surface, #1d1b20));font-family:var(--md-menu-item-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-menu-item-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));line-height:var(--md-menu-item-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));font-weight:var(--md-menu-item-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));min-height:var(--md-menu-item-one-line-container-height, 56px);padding-top:var(--md-menu-item-top-space, 12px);padding-bottom:var(--md-menu-item-bottom-space, 12px);padding-inline-start:var(--md-menu-item-leading-space, 16px);padding-inline-end:var(--md-menu-item-trailing-space, 16px)}md-item[multiline]{min-height:var(--md-menu-item-two-line-container-height, 72px)}[slot=supporting-text]{color:var(--md-menu-item-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-menu-item-supporting-text-font, var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-menu-item-supporting-text-size, var(--md-sys-typescale-body-medium-size, 0.875rem));line-height:var(--md-menu-item-supporting-text-line-height, var(--md-sys-typescale-body-medium-line-height, 1.25rem));font-weight:var(--md-menu-item-supporting-text-weight, var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400)))}[slot=trailing-supporting-text]{color:var(--md-menu-item-trailing-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-menu-item-trailing-supporting-text-font, var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-menu-item-trailing-supporting-text-size, var(--md-sys-typescale-label-small-size, 0.6875rem));line-height:var(--md-menu-item-trailing-supporting-text-line-height, var(--md-sys-typescale-label-small-line-height, 1rem));font-weight:var(--md-menu-item-trailing-supporting-text-weight, var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500)))}:is([slot=start],[slot=end])::slotted(*){fill:currentColor}[slot=start]{color:var(--md-menu-item-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}[slot=end]{color:var(--md-menu-item-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}.list-item.selected{background-color:var(--md-menu-item-selected-container-color, var(--md-sys-color-secondary-container, #e8def8))}.selected:not(.disabled) ::slotted(*){color:var(--md-menu-item-selected-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b))}/*# sourceMappingURL=menu-item-styles.css.map */
`;var Me=class extends C{constructor(){super(...arguments),this.multiline=!1}render(){return m`
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
    `}handleTextSlotChange(){let e=!1,t=0;for(let i of this.textSlots)if(Dr(i)&&(t+=1),t>1){e=!0;break}this.multiline=e}};a([p({type:Boolean,reflect:!0})],Me.prototype,"multiline",void 0);a([Xi(".text slot")],Me.prototype,"textSlots",void 0);function Dr(o){for(let e of o.assignedNodes({flatten:!0})){let t=e.nodeType===Node.ELEMENT_NODE,i=e.nodeType===Node.TEXT_NODE&&e.textContent?.match(/\S/);if(t||i)return!0}return!1}var Uo=_`:host{color:var(--md-sys-color-on-surface, #1d1b20);font-family:var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-body-large-size, 1rem);font-weight:var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400));line-height:var(--md-sys-typescale-body-large-line-height, 1.5rem);align-items:center;box-sizing:border-box;display:flex;gap:16px;min-height:56px;overflow:hidden;padding:12px 16px;position:relative;text-overflow:ellipsis}:host([multiline]){min-height:72px}[name=overline]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-label-small-size, 0.6875rem);font-weight:var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500));line-height:var(--md-sys-typescale-label-small-line-height, 1rem)}[name=supporting-text]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-body-medium-size, 0.875rem);font-weight:var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400));line-height:var(--md-sys-typescale-body-medium-line-height, 1.25rem)}[name=trailing-supporting-text]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-label-small-size, 0.6875rem);font-weight:var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500));line-height:var(--md-sys-typescale-label-small-line-height, 1rem)}[name=container]::slotted(*){inset:0;position:absolute}.default-slot{display:inline}.default-slot,::slotted(*){overflow:hidden;text-overflow:ellipsis}.text{display:flex;flex:1;flex-direction:column;overflow:hidden}/*# sourceMappingURL=item-styles.css.map */
`;var yi=class extends Me{};yi.styles=[Uo];yi=a([I("md-item")],yi);var Pt=class{constructor(e,t){this.host=e,this.internalTypeaheadText=null,this.onClick=()=>{this.host.keepOpen||this.host.dispatchEvent(fi(this.host,{kind:mi.CLICK_SELECTION}))},this.onKeydown=r=>{if(this.host.keepOpen||r.defaultPrevented)return;let l=r.code;!r.defaultPrevented&&$t(l)&&(r.preventDefault(),this.host.dispatchEvent(fi(this.host,{kind:mi.KEYDOWN,key:l})))};let{getHeadlineElements:i}=t;this.getHeadlineElements=i,this.host.addController(this)}get typeaheadText(){if(this.internalTypeaheadText!==null)return this.internalTypeaheadText;let e=this.getHeadlineElements(),t=[];return e.forEach(i=>{i.textContent&&i.textContent.trim()&&t.push(i.textContent.trim())}),t.join(" ")}get tagName(){switch(this.host.type){case"link":return"a";case"button":return"button";default:case"menuitem":case"option":return"li"}}get role(){return this.host.type==="option"?"option":"menuitem"}hostConnected(){this.host.toggleAttribute("md-menu-item",!0)}hostUpdate(){this.host.href&&(this.host.type="link")}setTypeaheadText(e){this.internalTypeaheadText=e}};function Pr(){return new Event("request-selection",{bubbles:!0,composed:!0})}function Mr(){return new Event("request-deselection",{bubbles:!0,composed:!0})}var Mt=class{get role(){return this.menuItemController.role}get typeaheadText(){return this.menuItemController.typeaheadText}setTypeaheadText(e){this.menuItemController.setTypeaheadText(e)}get displayText(){if(this.internalDisplayText!==null)return this.internalDisplayText;let e=this.getHeadlineElements(),t=[];return e.forEach(i=>{i.textContent&&i.textContent.trim()&&t.push(i.textContent.trim())}),t.join(" ")}setDisplayText(e){this.internalDisplayText=e}constructor(e,t){this.host=e,this.internalDisplayText=null,this.lastSelected=this.host.selected,this.firstUpdate=!0,this.onClick=()=>{this.menuItemController.onClick()},this.onKeydown=i=>{this.menuItemController.onKeydown(i)},this.menuItemController=new Pt(e,t),this.getHeadlineElements=t.getHeadlineElements,e.addController(this)}hostUpdate(){this.lastSelected!==this.host.selected&&(this.host.ariaSelected=this.host.selected?"true":"false")}hostUpdated(){this.lastSelected!==this.host.selected&&!this.firstUpdate&&(this.host.selected?this.host.dispatchEvent(Pr()):this.host.dispatchEvent(Mr())),this.lastSelected=this.host.selected,this.firstUpdate=!1}};var te=class extends C{constructor(){super(...arguments),this.disabled=!1,this.isMenuItem=!0,this.selected=!1,this.value="",this.type="option",this.selectOptionController=new Mt(this,{getHeadlineElements:()=>this.headlineElements})}get typeaheadText(){return this.selectOptionController.typeaheadText}set typeaheadText(e){this.selectOptionController.setTypeaheadText(e)}get displayText(){return this.selectOptionController.displayText}set displayText(e){this.selectOptionController.setDisplayText(e)}render(){return this.renderListItem(m`
      <md-item>
        <div slot="container">
          ${this.renderRipple()}
          ${this.renderFocusRing()}
        </div>
        <slot name="start" slot="start"></slot>
        <slot name="end" slot="end"></slot>
        ${this.renderBody()}
      </md-item>
    `)}renderListItem(e){return m`
      <li
        id="item"
        tabindex=${this.disabled?-1:0}
        role=${this.selectOptionController.role}
        aria-label=${this.ariaLabel||g}
        aria-selected=${this.ariaSelected||g}
        aria-checked=${this.ariaChecked||g}
        aria-expanded=${this.ariaExpanded||g}
        aria-haspopup=${this.ariaHasPopup||g}
        class="list-item ${q(this.getRenderClasses())}"
        @click=${this.selectOptionController.onClick}
        @keydown=${this.selectOptionController.onKeydown}
      >${e}</li>
    `}renderRipple(){return m`
      <md-ripple
          part="ripple"
          for="item"
          ?disabled=${this.disabled}></md-ripple>`}renderFocusRing(){return m`
      <md-focus-ring
          part="focus-ring"
          for="item"
          inward></md-focus-ring>`}getRenderClasses(){return{disabled:this.disabled,selected:this.selected}}renderBody(){return m`
      <slot></slot>
      <slot name="overline" slot="overline"></slot>
      <slot name="headline" slot="headline"></slot>
      <slot name="supporting-text" slot="supporting-text"></slot>
      <slot name="trailing-supporting-text"
          slot="trailing-supporting-text"></slot>
    `}focus(){this.listItemRoot?.focus()}};ne(te);te.shadowRootOptions={...C.shadowRootOptions,delegatesFocus:!0};a([p({type:Boolean,reflect:!0})],te.prototype,"disabled",void 0);a([p({type:Boolean,attribute:"md-menu-item",reflect:!0})],te.prototype,"isMenuItem",void 0);a([p({type:Boolean})],te.prototype,"selected",void 0);a([p()],te.prototype,"value",void 0);a([b(".list-item")],te.prototype,"listItemRoot",void 0);a([Q({slot:"headline"})],te.prototype,"headlineElements",void 0);a([p({attribute:"typeahead-text"})],te.prototype,"typeaheadText",null);a([p({attribute:"display-text"})],te.prototype,"displayText",null);var xi=class extends te{};xi.styles=[Vo,Bo];xi=a([I("md-select-option")],xi);var ke=class extends C{constructor(){super(...arguments),this.inset=!1,this.insetStart=!1,this.insetEnd=!1}};a([p({type:Boolean,reflect:!0})],ke.prototype,"inset",void 0);a([p({type:Boolean,reflect:!0,attribute:"inset-start"})],ke.prototype,"insetStart",void 0);a([p({type:Boolean,reflect:!0,attribute:"inset-end"})],ke.prototype,"insetEnd",void 0);var Ho=_`:host{--_color: var(--md-divider-color, var(--md-sys-color-outline-variant, #cac4d0));--_thickness: var(--md-divider-thickness, 1px);box-sizing:border-box;color:var(--_color);display:flex;height:var(--_thickness);width:100%}:host([inset]),:host([inset-start]){padding-inline-start:16px}:host([inset]),:host([inset-end]){padding-inline-end:16px}:host::before{background:currentColor;content:"";height:100%;width:100%}@media(forced-colors: active){:host::before{background:CanvasText}}/*# sourceMappingURL=divider-styles.css.map */
`;var _i=class extends ke{};_i.styles=[Ho];_i=a([I("md-divider")],_i);var qo={dialog:[[[{transform:"translateY(-50px)"},{transform:"translateY(0)"}],{duration:500,easing:ee.EMPHASIZED}]],scrim:[[[{opacity:0},{opacity:.32}],{duration:500,easing:"linear"}]],container:[[[{opacity:0},{opacity:1}],{duration:50,easing:"linear",pseudoElement:"::before"}],[[{height:"35%"},{height:"100%"}],{duration:500,easing:ee.EMPHASIZED,pseudoElement:"::before"}]],headline:[[[{opacity:0},{opacity:0,offset:.2},{opacity:1}],{duration:250,easing:"linear",fill:"forwards"}]],content:[[[{opacity:0},{opacity:0,offset:.2},{opacity:1}],{duration:250,easing:"linear",fill:"forwards"}]],actions:[[[{opacity:0},{opacity:0,offset:.5},{opacity:1}],{duration:300,easing:"linear",fill:"forwards"}]]},jo={dialog:[[[{transform:"translateY(0)"},{transform:"translateY(-50px)"}],{duration:150,easing:ee.EMPHASIZED_ACCELERATE}]],scrim:[[[{opacity:.32},{opacity:0}],{duration:150,easing:"linear"}]],container:[[[{height:"100%"},{height:"35%"}],{duration:150,easing:ee.EMPHASIZED_ACCELERATE,pseudoElement:"::before"}],[[{opacity:"1"},{opacity:"0"}],{delay:100,duration:50,easing:"linear",pseudoElement:"::before"}]],headline:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]],content:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]],actions:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]]};var N=class extends C{get open(){return this.isOpen}set open(e){e!==this.isOpen&&(this.isOpen=e,e?(this.setAttribute("open",""),this.show()):(this.removeAttribute("open"),this.close()))}constructor(){super(),this.returnValue="",this.getOpenAnimation=()=>qo,this.getCloseAnimation=()=>jo,this.isOpen=!1,this.isOpening=!1,this.isConnectedPromise=this.getIsConnectedPromise(),this.isAtScrollTop=!1,this.isAtScrollBottom=!1,this.nextClickIsFromContent=!1,this.hasHeadline=!1,this.hasActions=!1,this.hasIcon=!1,!1||this.addEventListener("submit",this.handleSubmit)}async show(){this.isOpening=!0,await this.isConnectedPromise,await this.updateComplete;let e=this.dialog;if(e.open||!this.isOpening){this.isOpening=!1;return}if(!this.dispatchEvent(new Event("open",{cancelable:!0}))){this.open=!1;return}e.showModal(),this.open=!0,this.scroller&&(this.scroller.scrollTop=0),this.querySelector("[autofocus]")?.focus(),await this.animateDialog(this.getOpenAnimation()),this.dispatchEvent(new Event("opened")),this.isOpening=!1}async close(e=this.returnValue){if(this.isOpening=!1,!this.isConnected){this.open=!1;return}await this.updateComplete;let t=this.dialog;if(!t.open||this.isOpening){this.open=!1;return}let i=this.returnValue;if(this.returnValue=e,!this.dispatchEvent(new Event("close",{cancelable:!0}))){this.returnValue=i;return}await this.animateDialog(this.getCloseAnimation()),t.close(e),this.open=!1,this.dispatchEvent(new Event("closed"))}connectedCallback(){super.connectedCallback(),this.isConnectedPromiseResolve()}disconnectedCallback(){super.disconnectedCallback(),this.isConnectedPromise=this.getIsConnectedPromise()}render(){let e=this.open&&!(this.isAtScrollTop&&this.isAtScrollBottom),t={"has-headline":this.hasHeadline,"has-actions":this.hasActions,"has-icon":this.hasIcon,scrollable:e,"show-top-divider":e&&!this.isAtScrollTop,"show-bottom-divider":e&&!this.isAtScrollBottom},{ariaLabel:i}=this;return m`
      <div class="scrim"></div>
      <dialog
        class=${q(t)}
        aria-label=${i||g}
        aria-labelledby=${this.hasHeadline?"headline":g}
        role=${this.type==="alert"?"alertdialog":g}
        @cancel=${this.handleCancel}
        @click=${this.handleDialogClick}
        .returnValue=${this.returnValue||g}
      >
        <div class="container"
          @click=${this.handleContentClick}
        >
          <div class="headline">
            <div class="icon" aria-hidden="true">
              <slot name="icon" @slotchange=${this.handleIconChange}></slot>
            </div>
            <h2 id="headline" aria-hidden=${!this.hasHeadline||g}>
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
    `}firstUpdated(){this.intersectionObserver=new IntersectionObserver(e=>{for(let t of e)this.handleAnchorIntersection(t)},{root:this.scroller}),this.intersectionObserver.observe(this.topAnchor),this.intersectionObserver.observe(this.bottomAnchor)}handleDialogClick(){if(this.nextClickIsFromContent){this.nextClickIsFromContent=!1;return}this.dispatchEvent(new Event("cancel",{cancelable:!0}))&&this.close()}handleContentClick(){this.nextClickIsFromContent=!0}handleSubmit(e){let t=e.target,{submitter:i}=e;t.method!=="dialog"||!i||this.close(i.getAttribute("value")??this.returnValue)}handleCancel(e){if(e.target!==this.dialog)return;let t=!xe(this,e);e.preventDefault(),!t&&this.close()}async animateDialog(e){let{dialog:t,scrim:i,container:r,headline:l,content:s,actions:h}=this;if(!t||!i||!r||!l||!s||!h)return;let{container:f,dialog:v,scrim:x,headline:y,content:w,actions:k}=e,P=[[t,v??[]],[i,x??[]],[r,f??[]],[l,y??[]],[s,w??[]],[h,k??[]]],R=[];for(let[B,X]of P)for(let O of X)R.push(B.animate(...O));await Promise.all(R.map(B=>B.finished))}handleHeadlineChange(e){let t=e.target;this.hasHeadline=t.assignedElements().length>0}handleActionsChange(e){let t=e.target;this.hasActions=t.assignedElements().length>0}handleIconChange(e){let t=e.target;this.hasIcon=t.assignedElements().length>0}handleAnchorIntersection(e){let{target:t,isIntersecting:i}=e;t===this.topAnchor&&(this.isAtScrollTop=i),t===this.bottomAnchor&&(this.isAtScrollBottom=i)}getIsConnectedPromise(){return new Promise(e=>{this.isConnectedPromiseResolve=e})}};ne(N);N.shadowRootOptions={...C.shadowRootOptions,delegatesFocus:!0};a([p({type:Boolean})],N.prototype,"open",null);a([p({attribute:!1})],N.prototype,"returnValue",void 0);a([p()],N.prototype,"type",void 0);a([b("dialog")],N.prototype,"dialog",void 0);a([b(".scrim")],N.prototype,"scrim",void 0);a([b(".container")],N.prototype,"container",void 0);a([b(".headline")],N.prototype,"headline",void 0);a([b(".content")],N.prototype,"content",void 0);a([b(".actions")],N.prototype,"actions",void 0);a([$()],N.prototype,"isAtScrollTop",void 0);a([$()],N.prototype,"isAtScrollBottom",void 0);a([b(".scroller")],N.prototype,"scroller",void 0);a([b(".top.anchor")],N.prototype,"topAnchor",void 0);a([b(".bottom.anchor")],N.prototype,"bottomAnchor",void 0);a([$()],N.prototype,"hasHeadline",void 0);a([$()],N.prototype,"hasActions",void 0);a([$()],N.prototype,"hasIcon",void 0);var Wo=_`:host{--_container-color: var(--md-dialog-container-color, var(--md-sys-color-surface-container-high, #ece6f0));--_container-shape: var(--md-dialog-container-shape, 28px);--_headline-color: var(--md-dialog-headline-color, var(--md-sys-color-on-surface, #1d1b20));--_headline-font: var(--md-dialog-headline-font, var(--md-sys-typescale-headline-small-font, var(--md-ref-typeface-brand, Roboto)));--_headline-line-height: var(--md-dialog-headline-line-height, var(--md-sys-typescale-headline-small-line-height, 2rem));--_headline-size: var(--md-dialog-headline-size, var(--md-sys-typescale-headline-small-size, 1.5rem));--_headline-weight: var(--md-dialog-headline-weight, var(--md-sys-typescale-headline-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_supporting-text-color: var(--md-dialog-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-dialog-supporting-text-font, var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-line-height: var(--md-dialog-supporting-text-line-height, var(--md-sys-typescale-body-medium-line-height, 1.25rem));--_supporting-text-size: var(--md-dialog-supporting-text-size, var(--md-sys-typescale-body-medium-size, 0.875rem));--_supporting-text-weight: var(--md-dialog-supporting-text-weight, var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400)));--_icon-color: var(--md-dialog-icon-color, var(--md-sys-color-secondary, #625b71));--_icon-size: var(--md-dialog-icon-size, 24px);--_container-shape-start-start: var( --md-dialog-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-dialog-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-dialog-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-dialog-container-shape-end-start, var(--_container-shape) );border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start);display:contents;margin:auto;max-height:min(560px,100% - 48px);max-width:min(560px,100% - 48px);min-height:140px;min-width:280px;position:fixed;height:fit-content;width:fit-content}dialog{background:rgba(0,0,0,0);border:none;border-radius:inherit;flex-direction:column;height:inherit;margin:inherit;max-height:inherit;max-width:inherit;min-height:inherit;min-width:inherit;outline:none;overflow:visible;padding:0;width:inherit}dialog[open]{display:flex}::backdrop{background:none}.scrim{background:var(--md-sys-color-scrim, #000);display:none;inset:0;opacity:32%;pointer-events:none;position:fixed;z-index:1}:host([open]) .scrim{display:flex}h2{all:unset;align-self:stretch}.headline{align-items:center;color:var(--_headline-color);display:flex;flex-direction:column;font-family:var(--_headline-font);font-size:var(--_headline-size);line-height:var(--_headline-line-height);font-weight:var(--_headline-weight);position:relative}slot[name=headline]::slotted(*){align-items:center;align-self:stretch;box-sizing:border-box;display:flex;gap:8px;padding:24px 24px 0}.icon{display:flex}slot[name=icon]::slotted(*){color:var(--_icon-color);fill:currentColor;font-size:var(--_icon-size);padding-top:24px;height:var(--_icon-size);width:var(--_icon-size)}.has-icon slot[name=headline]::slotted(*){justify-content:center;padding-top:16px}.scrollable slot[name=headline]::slotted(*){padding-bottom:16px}.scrollable.has-headline slot[name=content]::slotted(*){padding-top:8px}.container{border-radius:inherit;display:flex;flex-direction:column;flex-grow:1;overflow:hidden;position:relative;transform-origin:top}.container::before{background:var(--_container-color);border-radius:inherit;content:"";inset:0;position:absolute}.scroller{display:flex;flex:1;flex-direction:column;overflow:hidden;z-index:1}.scrollable .scroller{overflow-y:scroll}.content{color:var(--_supporting-text-color);font-family:var(--_supporting-text-font);font-size:var(--_supporting-text-size);line-height:var(--_supporting-text-line-height);font-weight:var(--_supporting-text-weight);height:min-content;position:relative}slot[name=content]::slotted(*){box-sizing:border-box;padding:24px}.anchor{position:absolute}.top.anchor{top:0}.bottom.anchor{bottom:0}.actions{position:relative}slot[name=actions]::slotted(*){box-sizing:border-box;display:flex;gap:8px;justify-content:flex-end;padding:16px 24px 24px}.has-actions slot[name=content]::slotted(*){padding-bottom:8px}md-divider{display:none;position:absolute}.has-headline.show-top-divider .headline md-divider,.has-actions.show-bottom-divider .actions md-divider{display:flex}.headline md-divider{bottom:0}.actions md-divider{top:0}@media(forced-colors: active){dialog{outline:2px solid WindowText}}/*# sourceMappingURL=dialog-styles.css.map */
`;var wi=class extends N{};wi.styles=[Wo];wi=a([I("md-dialog")],wi);var ae,A=ae=class extends C{static get formAssociated(){return!0}constructor(){super(),this.captchaSiteKey="RECAPTCHA-SITE-KEY",this.captchaEndpoint="/ballerleague/v1/spam_check",this.brazeEndpoint="/ballerleague/v1/submit_application",this.leageOptions=this._renderMensLeagueDropdown(),this.noExperience=!1,this._submissionTask=new qe(this,{task:async()=>{if(this._enrollmentService&&this._spamService){if(await this._spamService.isValidUser()){let t=this._normalizeData();return await this._enrollmentService.process(t)}throw new Error("Failed reCAPTCHA check")}throw new Error("ApplicationData, SpamService or EnrollmentService fields not set")}}),this._internals=this.attachInternals()}static _reportFieldValidity(e){e.target.reportValidity()}firstUpdated(){this._initializeServices(),this.dispatchEvent(new CustomEvent("signup-form-displayed",{bubbles:!0}))}render(){return m`
      ${this._renderForm()}

      ${this._submissionTask.render({initial:()=>this._renderInitialState(),pending:()=>this._renderPendingState(),complete:e=>this._renderSuccessState(e),error:e=>this._renderErrorState(e)})}
    `}_initializeServices(){this._enrollmentService=new gt(this.brazeEndpoint),this._spamService=new bt(this.captchaSiteKey,this.captchaEndpoint),this._spamService.featureEnabled&&this.applicationFormElement.insertAdjacentElement("afterbegin",this._spamService.generateScriptElement())}_normalizeData(){let e={familyName:this.familyName.value,givenName:this.firstName.value,email:this.email.value,telephone:this.tel.value,birthDate:this.birthday.valueAsDate,shirtSize:this.shirt.value,bundesland:this.bundesland.value,customCurrentCountry:this.currentCountry.value,position:this.position.value,currentPlayingStatus:this.activeExperience.value,currentFootballCountry:this.currentInternationalTeamCountry.value,teamType:this.teamType.value,germanLeague:this.spielklasse.value,internationalLeague:this.currentInternationalLeague.value,otherExperience:this.otherExperience.value,highestDomesticLeague:this.highestSpielklasse.value,highestExperience:this.highestExperience.value,highestInternationalCountry:this.highestExperienceCountry.value,highestInternationalLeague:this.highestExperienceLeague.value,otherLeague:this.otherDomesticLeague.value,clubName:this.clubName.value,highlightTape:this.highlightTape.value,transfermarktProfile:this.transfermarkt.value,youTube:this.youtube.value,instagram:this.instagram.value,tiktok:this.tiktok.value,xing:this.xing.value,comments:this.freeform.value,availability:this.availability.value,acceptedTos:this.termsOfServiceBox.checked};return new vt(e)}_validateAge(){let e=!1,t=new Date,i=new Date(this.birthday.value);(t.getTime()-i.getTime())/(1e3*60*60*24)>=18*365.25&&(e=!0,this.birthday.setCustomValidity(""),this.birthday.error=!1,this.birthday.errorText="",this.birthday.reportValidity()),e||(this.birthday.error=!0,this.birthday.errorText="Du musst mindestens 18 Jahre alt sein.",this.birthday.setCustomValidity("Sie m\xFCssen mindestens 18 Jahre alt sein."),this.birthday.dispatchEvent(new Event("invalid")),this.birthday.reportValidity())}_shouldEnableSubmit(){return this.termsOfServiceBox.checked}_onSuccessDialogClose(){this.successDialog.close(),this.applicationFormElement.reset()}_onErrorDialogClose(){this.errorDialog.close()}_onSubmitEvent(e){if(e.preventDefault(),this.applicationFormElement.checkValidity())this._submissionTask.run();else{let t=this.applicationFormElement.querySelectorAll("md-filled-text-field, md-filled-select");for(let i of Array.from(t))if(!i.checkValidity()){i.reportValidity(),i.scrollIntoView(),i.focus(),this.dispatchEvent(new CustomEvent("invalid-field",{detail:i.localName,bubbles:!0}));break}}}_handleFederalStateSelection(e){e.target.value==="Ausland"?(this.currentCountry.hidden=!1,this.currentCountry.classList.remove("hidden")):(this.currentCountry.hidden=!0,this.currentCountry.classList.add("hidden"))}_handleExperienceSelection(e){e.target.value==="andere"?(this.otherExperience.hidden=!1,this.otherExperience.classList.remove("hidden")):(this.otherExperience.hidden=!0,this.otherExperience.classList.add("hidden"))}_handleActiveExperienceSelection(e){let t=e.target.value;switch(this.noExperience=t==="vereinslos",t){case"deutschland":this.shadowRoot?.getElementById("domestic-active-experience")?.classList.remove("hidden"),this.shadowRoot?.getElementById("international-active-experience")?.classList.add("hidden"),this.clubName.classList.remove("hidden");break;case"international":this.shadowRoot?.getElementById("international-active-experience")?.classList.remove("hidden"),this.shadowRoot?.getElementById("domestic-active-experience")?.classList.add("hidden"),this.clubName.classList.remove("hidden");break;default:this.shadowRoot?.getElementById("international-active-experience")?.classList.add("hidden"),this.shadowRoot?.getElementById("domestic-active-experience")?.classList.add("hidden"),this.clubName.classList.add("hidden");break}}_handleHighestDomesticExperienceSelection(e){switch(e.target.value){case"andere":this.shadowRoot?.getElementById("domestic-other-league")?.classList.remove("hidden");break;default:this.shadowRoot?.getElementById("domestic-other-league")?.classList.add("hidden");break}}_handleHighestExperienceSelection(e){switch(e.target.value){case"deutschland":this.shadowRoot?.getElementById("domestic-historical-experience")?.classList.remove("hidden"),this.shadowRoot?.getElementById("international-historical-experience")?.classList.add("hidden");break;case"international":this.shadowRoot?.getElementById("international-historical-experience")?.classList.remove("hidden"),this.shadowRoot?.getElementById("domestic-historical-experience")?.classList.add("hidden");break;default:this.shadowRoot?.getElementById("international-historical-experience")?.classList.add("hidden"),this.shadowRoot?.getElementById("domestic-historical-experience")?.classList.add("hidden");break}}_handleLegalChange(){this._shouldEnableSubmit()?this.submitButton.disabled=!1:this.submitButton.disabled=!0}async _handleTeamTypeSelection(e){switch(e.target.value){case"herren":this.leageOptions=this._renderMensLeagueDropdown();break;case"a-junioren":this.leageOptions=this._renderBoysLeagueDropdown();break;case"frauen":this.leageOptions=this._renderWomensLeagueDropdown();break;case"a-juniorinnen":this.leageOptions=this._renderGirlsLeagueDropdown();break;default:break}this.spielklasse.reset(),this.spielklasse.disabled=!1,this.requestUpdate(),await this.updateComplete}_renderInitialState(){}_renderPendingState(){}_renderSuccessState(e){let t=new URL("/bewerbung-erfolgreich/",window.location.origin);window.location.href=t.href}_renderErrorState(e){this.dispatchEvent(new CustomEvent("submission_error",{detail:e})),console.error(e),this.errorDialog.open=!0}_renderForm(){return m`
    <section id="form-wrapper">
      <form id="application-form">
        <div>
          ${this._renderPersonalQuestions()}
          ${this._renderFootballQuestions()}
          ${this._renderSocialQuestions()}
        </div>
        <div class="form-footer">
          <md-outlined-button
            @click=${this._onSubmitEvent}
            type="button"
            name="apply"
            disabled
            style="width: 100%"
          >
          Jetzt bewerben
          </md-outlined-button>
        </div>
      </form>
    </section>

    ${this._renderSuccessDialog()}
    ${this._renderErrorDialog()}
    `}_renderSuccessDialog(){return m`
      <md-dialog type="alert" data-reason="success">
        <div slot="headline" class="display-small">Glückwunsch</div>
        <form slot="content" id="form-id" method="dialog">
          Wir haben Ihre Bewerbung erhalten.
        </form>
        <div slot="actions">
          <md-filled-button form="form-id" value="close" @click=${this._onSuccessDialogClose}>
            Schließen
          </md-filled-button>
        </div>
      </md-dialog>
    `}_renderErrorDialog(){return m`
      <md-dialog type="alert" data-reason="error">
        <div slot="headline" class="display-small">ein Fehler ist aufgetreten</div>
        <form slot="content" id="form-id" method="dialog">
          Bitte versuchen Sie es morgen noch einmal
        </form>
        <div slot="actions">
          <md-filled-button form="form-id" value="close" @click=${this._onErrorDialogClose}>
            Schließen
          </md-filled-button>
        </div>
      </md-dialog>
    `}_renderPersonalQuestions(){return m`
      <div>
        <div class="form-header">
          <h2 class="display-small">Über Dich:</h2>
        </div>
        <div class="form-fields">
          <div class="field-with-tooltip">
            <md-filled-text-field
              label="Vorname"
              required
              autocomplete="given-name"
              max="250"
              style="width: 100%"
              @blur=${ae._reportFieldValidity}
            ></md-filled-text-field>
            <div class="invisible-icon"></div>
          </div>
          <div class="field-with-tooltip">
            <md-filled-text-field
              label="Nachname"
              required
              max="250"
              autocomplete="family-name"
              style="width: 100%"
              @blur=${ae._reportFieldValidity}
            ></md-filled-text-field>
            <div class="invisible-icon"></div>
          </div>

          <div class="field-with-tooltip">
            <md-filled-text-field
              label="Geburtsdatum"
              required
              autocomplete="bday"
              type="date"
              style="width: 100%"
              @blur=${this._validateAge}
            ></md-filled-text-field>
            ${this._renderTooltip(je.birthday)}
          </div>

          <div class="field-with-tooltip">
            <md-filled-text-field
              label="E-Mail"
              required
              autocomplete="email"
              type="email"
              max="250"
              style="width: 100%"
              @blur=${ae._reportFieldValidity}
            ></md-filled-text-field>
            <div class="invisible-icon"></div>
          </div>
          <div class="field-with-tooltip">
            <md-filled-text-field
              label="Telefon"
              autocomplete="tel"
              type="tel"
              max="20"
              @blur=${ae._reportFieldValidity}
              style="width: 100%"
            ></md-filled-text-field>
            <div class="invisible-icon"></div>
          </div>
          
          <div class="field-with-tooltip">
            <md-filled-select
              label="Kleidergröße"
              name="shirt-size"
              required
              style="width: 100%;"
            >
            <md-select-option value="XS">
              <div slot="headline">XS</div>
            </md-select-option>
            <md-select-option value="S">
              <div slot="headline">S</div>
              </md-select-option>
              <md-select-option value="M">
              <div slot="headline">M</div>
              </md-select-option>
              <md-select-option value="L">
                <div slot="headline">L</div>
              </md-select-option>
              <md-select-option value="XL">
                <div slot="headline">XL</div>
              </md-select-option>
            </md-filled-select>
            <div class="invisible-icon"></div>
          </div>

          <div class="field-with-tooltip">
          <md-filled-select
            label="Dein Bundesland"
            name="bundesland"
            required
            @change=${this._handleFederalStateSelection}
            style="width: 100%"
          >
          <md-select-option value="Baden-Württemberg">
            <div slot="headline">Baden-Württemberg</div>
           </md-select-option>
           <md-select-option value="Bayern">
             <div slot="headline">Bayern</div>
            </md-select-option>
            <md-select-option value="Berlin">
             <div slot="headline">Berlin</div>
            </md-select-option>
            <md-select-option value="Brandenburg">
              <div slot="headline">Brandenburg</div>
            </md-select-option>
            <md-select-option value="Bremen">
              <div slot="headline">Bremen</div>
            </md-select-option>
            <md-select-option value="Hamburg">
              <div slot="headline">Hamburg</div>
            </md-select-option>
            <md-select-option value="Hessen">
              <div slot="headline">Hessen</div>
            </md-select-option>
            <md-select-option value="Mecklenburg-Vorpommern">
              <div slot="headline">Mecklenburg-Vorpommern</div>
            </md-select-option>
            <md-select-option value="Niedersachsen">
              <div slot="headline">Niedersachsen</div>
            </md-select-option>
            <md-select-option value="Nordrhein-Westfalen">
              <div slot="headline">Nordrhein-Westfalen</div>
            </md-select-option>
            <md-select-option value="Rheinland-Pfalz">
              <div slot="headline">Rheinland-Pfalz</div>
            </md-select-option>
            <md-select-option value="Saarland">
              <div slot="headline">Saarland</div>
            </md-select-option>
            <md-select-option value="Sachsen">
              <div slot="headline">Sachsen</div>
            </md-select-option>
            <md-select-option value="Sachsen-Anhalt">
              <div slot="headline">Sachsen-Anhalt</div>
            </md-select-option>
            <md-select-option value="Schleswig-Holstein">
              <div slot="headline">Schleswig-Holstein</div>
            </md-select-option>
            <md-select-option value="Thüringen">
              <div slot="headline">Thüringen</div>
            </md-select-option>
            <md-select-option value="Ausland">
              <div slot="headline">Ich wohne im Ausland</div>
            </md-select-option>
          </md-filled-select>
          <div class="invisible-icon"></div>
          </div>

          <div class="field-with-tooltip">
            <md-filled-select
              label="Land"
              name="current-country"
              class="hidden"
              style="width: 100%"
            >

            ${this._renderCountryOptions()}
            </md-filled-select>
            <div class="invisible-icon"></div>
          </div>
        </div>
      </div>
    `}_renderTeamTypeDropdown(){return m`
      <div class="field-with-tooltip">
        <md-filled-select
          label="Teamtyp"
          name="team-type"
          required
          @change=${this._handleTeamTypeSelection}
          style="width: 100%"
        >
          <md-select-option value="herren">
            <div slot="headline">Herren</div>
          </md-select-option>
          <md-select-option value="a-junioren">
            <div slot="headline">A-Junioren</div>
          </md-select-option>
          <md-select-option value="frauen">
            <div slot="headline">Frauen</div>
          </md-select-option>
          <md-select-option value="a-juniorinnen">
            <div slot="headline">A-Juniorinnen</div>
          </md-select-option>
        </md-filled-select>
      <div class="invisible-icon"></div>
      </div>
    `}_renderFootballQuestions(){return m`
    <div>
      <div class="form-header">
        <h2 class="display-small">Deine Fußballerfahrung</h2>
      </div>
      <div class="form-fields">
      <div class="field-with-tooltip">
        <md-filled-select
          label="Deine Position"
          name="position"
          required
          style="width: 100%"
        >
          <md-select-option value="stürmer">
            <div slot="headline">Stürmer</div>
          </md-select-option>
          <md-select-option value="mittelfeldspieler">
            <div slot="headline">Mittelfeldspieler</div>
          </md-select-option>
          <md-select-option value="verteidiger">
            <div slot="headline">Verteidiger</div>
          </md-select-option>
          <md-select-option value="torwart">
            <div slot="headline">Torwart</div>
          </md-select-option>
        </md-filled-select>
        <div class="invisible-icon"></div>
      </div>
        ${this._renderTeamTypeDropdown()}
        ${this._renderActiveExperience()}
        <div id="international-active-experience" class="hidden form-fields">
          ${this._renderInternationalActiveExperience()}
        </div>
        <div id="domestic-active-experience" class="hidden form-fields">
          ${this._renderSpielklasse()}
        </div>

        
        <md-filled-text-field
          label="Welche sonstige Spielklasse?"
          name="other-experience"
          hidden
          max="250"
          class="hidden"
        ></md-filled-text-field>
        
          <md-filled-text-field
            label="In welchem Verein spielst Du"
            name="club"
            max="250"
            style="width: 100%"
            @blur=${ae._reportFieldValidity}
            class="hidden contain-shape"
          ></md-filled-text-field>

        ${this._renderHistoricalExperience()}
        <div id="domestic-historical-experience" class="hidden form-fields">
          ${this._renderDomesticHistoricalExperience()}
        </div>

        <div id="international-historical-experience" class="hidden form-fields">
          ${this._renderInternationalHistoricalExperience()}
        </div>
        
      </div>
    </div>
  `}_renderCountryOptions(){return m`
    <md-select-option value="Belgien">
      <div slot="headline">Belgien</div>
    </md-select-option>
    <md-select-option value="Bulgarien">
      <div slot="headline">Bulgarien</div>
    </md-select-option>
    <md-select-option value="Dänemark">
    <div slot="headline">Dänemark</div>
    </md-select-option>
    <md-select-option value="Estland">
      <div slot="headline">Estland</div>
    </md-select-option>
    <md-select-option value="Finnland">
      <div slot="headline">Finnland</div>
    </md-select-option>
    <md-select-option value="Frankreich">
      <div slot="headline">Frankreich</div>
    </md-select-option>
    <md-select-option value="Griechenland">
      <div slot="headline">Griechenland</div>
    </md-select-option>
    <md-select-option value="Irland">
      <div slot="headline">Irland</div>
    </md-select-option>
    <md-select-option value="Italien">
      <div slot="headline">Italien</div>
    </md-select-option>
    <md-select-option value="Kroatien">
      <div slot="headline">Kroatien</div>
    </md-select-option>
    <md-select-option value="Lettland">
      <div slot="headline">Lettland</div>
    </md-select-option>
    <md-select-option value="Litauen">
      <div slot="headline">Litauen</div>
    </md-select-option>
    <md-select-option value="Luxemburg">
      <div slot="headline">Luxemburg</div>
    </md-select-option>
    <md-select-option value="Malta">
      <div slot="headline">Malta</div>
    </md-select-option>
    <md-select-option value="Niederlande">
      <div slot="headline">Niederlande</div>
    </md-select-option>
    <md-select-option value="Polen">
      <div slot="headline">Polen</div>
    </md-select-option>
    <md-select-option value="Portugal">
      <div slot="headline">Portugal</div>
    </md-select-option>
    <md-select-option value="Rumänien">
      <div slot="headline">Rumänien</div>
    </md-select-option>
    <md-select-option value="Schweden">
      <div slot="headline">Schweden</div>
    </md-select-option>
    <md-select-option value="Slowakei">
      <div slot="headline">Slowakei</div>
    </md-select-option>
    <md-select-option value="Slowenien">
      <div slot="headline">Slowenien</div>
    </md-select-option>
    <md-select-option value="Spanien">
      <div slot="headline">Spanien</div>
    </md-select-option>
    <md-select-option value="Tschechische Republik">
      <div slot="headline">Tschechische Republik</div>
    </md-select-option>
    <md-select-option value="Ungarn">
      <div slot="headline">Ungarn</div>
    </md-select-option>
    <md-select-option value="Zypern">
      <div slot="headline">Zypern</div>
    </md-select-option>
    <md-select-option value="Österreich">
      <div slot="headline">Österreich</div>
    </md-select-option>
    `}_renderSocialQuestions(){return m`
      <div>
        <div class="form-header big-top-padding">
          <h2 class="display-small">Zeig uns, was Du kannst</h2>
          <h3 class="headline-small">Diese Angaben sind optional. Um so mehr wir von Dir wissen, um so höher sind Deine Chancen.</h3>
        </div>
        <div class="form-fields">
        <div class="field-with-tooltip">
          <md-filled-text-field
            label="Highlight Tape (URL)"
            name="highlight-tape"
            max="250"
            style="width: 100%"
            @blur=${ae._reportFieldValidity}
          ></md-filled-text-field>
          
          ${this._renderTooltip(je.highlight)}
        </div>
          <div class="field-with-tooltip">
          <md-filled-text-field
            label="Link Transfermarkt"
            name="transfermarkt"
            max="250"
            style="width: 100%"
            @blur=${ae._reportFieldValidity}
          ></md-filled-text-field>
            <div class="invisible-icon"></div>
          </div>

          <div class="field-with-tooltip">
            <md-filled-text-field
              label="YouTube"
              autocomplete="username"
              max="250"
              name="youtube"
              style="width: 100%"
            >
            </md-filled-text-field>
            <div class="invisible-icon"></div>
          </div>

          <div class="field-with-tooltip">
            <md-filled-text-field
              label="Instagram"
              autocomplete="username"
              max="250"
              name="instagram"
              style="width: 100%"
            >
            </md-filled-text-field>
            <div class="invisible-icon"></div>
          </div>

          <div class="field-with-tooltip">
            <md-filled-text-field
              label="TikTok"
              autocomplete="username"
              max="250"
              name="tiktok"
              style="width: 100%"
            >
            </md-filled-text-field>
            <div class="invisible-icon"></div>
          </div>

          <div class="field-with-tooltip">
            <md-filled-text-field
              label="XING"
              autocomplete="username"
              max="250"
              name="xing" 
              style="width: 100%"
            >
            </md-filled-text-field>
            <div class="invisible-icon"></div>
          </div>

          <div class="field-with-tooltip">
            <md-filled-text-field type="textarea" rows="6" name="freeform" label="Achievements oder Anmerkungen" maxLength=250 style="width: 100%">
            </md-filled-text-field>
            ${this._renderTooltip(je.achievments)}
          </div>

          <div class="field-with-tooltip">
            <md-filled-select
              label="Ich bin verfügbar am"
              name="availability"
              required
              style="width: 100%"
            >
              <md-select-option value="16. Dezember 2023">
                <div slot="headline">16. Dezember 2023</div>
              </md-select-option>
              <md-select-option value="17. Dezember 2023">
                <div slot="headline">17. Dezember 2023</div>
              </md-select-option>
              <md-select-option value="An beiden Tagen">
                <div slot="headline">An beiden Tagen</div>
              </md-select-option>
              <md-select-option value="An einem anderen Tag">
                <div slot="headline">An einem anderen Tag</div>
              </md-select-option>
            </md-filled-select>
            ${this._renderTooltip(je.dates)}
          </div>

          <p class="label-medium" style="max-width: 420px;">
          Als Kooperationspartner der Baller League leitet die New Work SE Deine Bewerbungsdaten an die 
          BALLER LEAGUE GmbH weiter. Es gelten hierfür die 
          <a href="/datenschutz/" target="_blank" style="color: #0698A0; text-decoration: none;">Datenschutzbestimmungen</a> 
          für das Bewerbungsverfahren der BALLER LEAGUE.
          </p>
          <div class="field-with-tooltip">
            
            <label class="label-medium inline-label">
              <md-checkbox
                touch-target="wrapper"
                @change=${this._handleLegalChange}
                data-element="tos"
                style="min-width: 1.2rem"
              ></md-checkbox>
              <span>
              Ja, ich möchte den regelmäßig erscheinenden E-Mail Newsletter von XING mit exklusiven Ticketverlosungen und Angeboten rund um die Baller League erhalten. Abmeldung jederzeit möglich. Es gelten die 
              <a href="https://www.new-work.se/de/datenschutz" target="_blank" style="color: #0698A0; text-decoration: none;">Datenschutzbestimmungen</a> der New Work SE.
              </span>
            </label>
            <div class="invisible-icon"></div>
          </div>
        </div>
      </div>
    `}_renderMensLeagueDropdown(){return m`
      <md-select-option value="1-bundesliga">
        <div slot="headline">1. Bundesliga</div>
      </md-select-option>
      <md-select-option value="2-bundesliga">
        <div slot="headline">2. Bundesliga</div>
      </md-select-option>
      <md-select-option value="3-liga">
        <div slot="headline">3. Liga</div>
      </md-select-option>
      <md-select-option value="regionalliga">
        <div slot="headline">Regionalliga</div>
      </md-select-option>
      <md-select-option value="oberliga">
        <div slot="headline">Oberliga</div>
      </md-select-option>
      <md-select-option value="verbands-landesliga">
        <div slot="headline">Verbands/Landesliga</div>
      </md-select-option>
      <md-select-option value="bezirks-kreisklasse">
        <div slot="headline">Bezirks/Kreisklasse</div>
      </md-select-option>
      <md-select-option value="andere">
        <div slot="headline">Andere</div>
      </md-select-option>
    `}_renderBoysLeagueDropdown(){return m`
      <md-select-option value="bundesliga">
        <div slot="headline">Bundesliga</div>
      </md-select-option>
      <md-select-option value="regionalliga-oberliga">
        <div slot="headline">Regionalliga/Oberliga</div>
      </md-select-option>
      <md-select-option value="verbands-landesliga">
        <div slot="headline">Verbands/Landesliga</div>
      </md-select-option>
      <md-select-option value="andere">
        <div slot="headline">Andere</div>
      </md-select-option>
    `}_renderWomensLeagueDropdown(){return m`
      <md-select-option value="1-bundesliga">
        <div slot="headline">1. Bundesliga</div>
      </md-select-option>
      <md-select-option value="2-bundesliga">
        <div slot="headline">2. Bundesliga</div>
      </md-select-option>
      <md-select-option value="regionalliga">
        <div slot="headline">Regionalliga</div>
      </md-select-option>
      <md-select-option value="verbands-landesliga">
        <div slot="headline">Verbands/Landesliga</div>
      </md-select-option>
      <md-select-option value="andere">
        <div slot="headline">Andere</div>
      </md-select-option>
    `}_renderGirlsLeagueDropdown(){return m`
      <md-select-option value="regionalliga-oberliga">
        <div slot="headline">Regionalliga/Oberliga</div>
      </md-select-option>
      <md-select-option value="verbands-landesliga">
        <div slot="headline">Verbands/Landesliga</div>
      </md-select-option>
      <md-select-option value="andere">
        <div slot="headline">Andere</div>
      </md-select-option>
    `}_renderSpielklasse(){return m`
    <div class="field-with-tooltip">
      <md-filled-select
        label="Spielklasse"
        name="spielklasse"
        @change=${this._handleExperienceSelection}
        style="width: 100%;"
      >
      ${this.leageOptions}
      </md-filled-select>
      <div class="invisible-icon"></div>
    </div>
    `}_renderActiveExperience(){return m`
    <div class="field-with-tooltip">
      <md-filled-select
        label="Wie bist Du gerade aktiv"
        name="active-experience"
        required
        @change=${this._handleActiveExperienceSelection}
        style="width: 100%;"
      >
        <md-select-option value="deutschland">
          <div slot="headline">Ich spiele in Deutschland</div>
        </md-select-option>
        <md-select-option value="vereinslos">
          <div slot="headline">Bin aktuell vereinslos</div>
        </md-select-option>
        <md-select-option value="international">
          <div slot="headline">Ich spiele im Ausland</div>
        </md-select-option>
      </md-filled-select>
      <div class="invisible-icon"></div>
    </div>
    `}_renderInternationalActiveExperience(){return m`
    <div class="field-with-tooltip">
      <md-filled-select
          label="Land"
          name="international-current-team-country"
          style="width: 100%;"
        >
        ${this._renderCountryOptions()}
      </md-filled-select>
    <div class="invisible-icon"></div>
    </div>

    <div class="field-with-tooltip">
      <md-filled-text-field
        label="Liga"
        maxLength="100"
        @blur=${ae._reportFieldValidity}
        name="current-international-league"
        style="width: 100%;"
      ></md-filled-text-field>
      <div class="invisible-icon"></div>
    </div>
    `}_renderHistoricalExperience(){return this.noExperience?m`
        <div class="field-with-tooltip">
          <md-filled-select
            label="Deine höchstgespielte Spielklasse"
            name="highest-experience"
            required
            @change=${this._handleHighestExperienceSelection}
            style="width: 100%"
          >
            <md-select-option value="deutschland">
              <div slot="headline">In Deutschland</div>
            </md-select-option>
            <md-select-option value="international">
              <div slot="headline">Im Ausland</div>
            </md-select-option>
          </md-filled-select>
          <div class="invisible-icon"></div>
        </div>
      `:m`
      <div class="field-with-tooltip">
        <md-filled-select
          label="Deine höchstgespielte Spielklasse"
          name="highest-experience"
          required
          @change=${this._handleHighestExperienceSelection}
          style="width: 100%"
        >
          <md-select-option value="dasselbe">
            <div slot="headline">die, in der ich jetzt gerade spiele</div>
          </md-select-option>
          <md-select-option value="deutschland">
            <div slot="headline">In Deutschland</div>
          </md-select-option>
          <md-select-option value="international">
            <div slot="headline">Im Ausland</div>
          </md-select-option>
        </md-filled-select>
        <div class="invisible-icon"></div>
      </div>
      `}_renderInternationalHistoricalExperience(){return m`
    <div class="field-with-tooltip">
      <md-filled-text-field
        label="Land"
        maxLength="100"
        @blur=${ae._reportFieldValidity}
        name="historical-experience-country"
        style="width: 100%"
      ></md-filled-text-field>
      <div class="invisible-icon"></div>
    </div>

    <div class="field-with-tooltip">
      <md-filled-text-field
        label="Liga"
        maxLength="100"
        @blur=${ae._reportFieldValidity}
        name="historical-experience-league"
        style="width: 100%"
      ></md-filled-text-field>
      <div class="invisible-icon"></div>
    </div>
    `}_renderDomesticHistoricalExperience(){return m`
    <div class="field-with-tooltip">
      <md-filled-select
        label="Deine höchstgespielte Spielklasse"
        name="highest-domestic-experience"
        @change=${this._handleHighestDomesticExperienceSelection}
        style="width: 100%"
      >
        ${this.leageOptions}
      </md-filled-select>
      <div class="invisible-icon"></div>
    </div>

    <div class="field-with-tooltip" >
      <md-filled-text-field
        label="Liga"
        maxLength="100"
        @blur=${ae._reportFieldValidity}
        name="domestic-historical-experience-league"
        style="width: 100%"
        id="domestic-other-league"
        class="hidden"
      ></md-filled-text-field>
      <div class="invisible-icon"></div>
    </div>
    `}_renderTooltip(e){return m`
      <span class="tooltip-toggle" aria-label="${e}" tabindex="0">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM13 11V17H11V11H13ZM13 7V9H11V7H13Z" fill="#1D2124"/>
        </svg>
      </span>
    `}};A.styles=[eo];a([p({type:String,attribute:"site-key"})],A.prototype,"captchaSiteKey",void 0);a([p({type:String,attribute:"captcha-endpoint"})],A.prototype,"captchaEndpoint",void 0);a([p({type:String,attribute:"braze-endpoint"})],A.prototype,"brazeEndpoint",void 0);a([b('md-outlined-button[name="apply"]')],A.prototype,"submitButton",void 0);a([b("form#application-form")],A.prototype,"applicationFormElement",void 0);a([b('md-filled-text-field[autocomplete="given-name"]')],A.prototype,"firstName",void 0);a([b('md-filled-text-field[autocomplete="family-name"]')],A.prototype,"familyName",void 0);a([b('md-filled-text-field[autocomplete="email"]')],A.prototype,"email",void 0);a([b('md-filled-text-field[autocomplete="tel"]')],A.prototype,"tel",void 0);a([b('md-filled-text-field[autocomplete="bday"]')],A.prototype,"birthday",void 0);a([b('md-filled-select[name="shirt-size"]')],A.prototype,"shirt",void 0);a([b('md-filled-select[name="experience"]')],A.prototype,"experience",void 0);a([b('md-filled-select[name="bundesland"]')],A.prototype,"bundesland",void 0);a([b('md-filled-select[name="current-country"]')],A.prototype,"currentCountry",void 0);a([b('md-filled-select[name="position"]')],A.prototype,"position",void 0);a([b('md-filled-select[name="active-experience"]')],A.prototype,"activeExperience",void 0);a([b('md-filled-select[name="international-current-team-country"]')],A.prototype,"currentInternationalTeamCountry",void 0);a([b('md-filled-text-field[name="current-international-league"]')],A.prototype,"currentInternationalLeague",void 0);a([b('md-filled-select[name="team-type"]')],A.prototype,"teamType",void 0);a([b('md-filled-select[name="spielklasse"]')],A.prototype,"spielklasse",void 0);a([b('md-filled-text-field[name="other-experience"]')],A.prototype,"otherExperience",void 0);a([b('md-filled-text-field[name="domestic-historical-experience-league"]')],A.prototype,"otherDomesticLeague",void 0);a([b('md-filled-select[name="highest-domestic-experience"]')],A.prototype,"highestSpielklasse",void 0);a([b('md-filled-select[name="highest-experience"]')],A.prototype,"highestExperience",void 0);a([b('md-filled-text-field[name="historical-experience-country"]')],A.prototype,"highestExperienceCountry",void 0);a([b('md-filled-text-field[name="historical-experience-league"]')],A.prototype,"highestExperienceLeague",void 0);a([b('md-filled-text-field[name="club"]')],A.prototype,"clubName",void 0);a([b('md-filled-text-field[name="highlight-tape"]')],A.prototype,"highlightTape",void 0);a([b('md-filled-text-field[name="transfermarkt"]')],A.prototype,"transfermarkt",void 0);a([b('md-filled-text-field[name="youtube"]')],A.prototype,"youtube",void 0);a([b('md-filled-text-field[name="instagram"]')],A.prototype,"instagram",void 0);a([b('md-filled-text-field[name="tiktok"]')],A.prototype,"tiktok",void 0);a([b('md-filled-text-field[name="xing"]')],A.prototype,"xing",void 0);a([b('md-filled-text-field[name="freeform"]')],A.prototype,"freeform",void 0);a([b('md-filled-select[name="availability"]')],A.prototype,"availability",void 0);a([b('[data-element="tos"]')],A.prototype,"termsOfServiceBox",void 0);a([b('md-dialog[data-reason="success"]')],A.prototype,"successDialog",void 0);a([b('md-dialog[data-reason="error"]')],A.prototype,"errorDialog",void 0);a([$()],A.prototype,"leageOptions",void 0);a([$()],A.prototype,"noExperience",void 0);A=ae=a([I("baller-form")],A);})();
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

@lit/task/task.js:
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

@material/web/button/internal/outlined-button.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/button/internal/outlined-styles.css.js:
  (**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    *)

@material/web/button/outlined-button.js:
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

@material/web/field/internal/filled-field.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/field/internal/filled-styles.css.js:
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

@material/web/field/filled-field.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/textfield/internal/filled-forced-colors-styles.css.js:
  (**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    *)

@material/web/textfield/internal/filled-styles.css.js:
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

@material/web/textfield/internal/filled-text-field.js:
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

@material/web/textfield/filled-text-field.js:
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

@material/web/select/internal/filled-forced-colors-styles.css.js:
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

@material/web/select/internal/filled-select.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/select/internal/filled-select-styles.css.js:
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

@material/web/select/filled-select.js:
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
