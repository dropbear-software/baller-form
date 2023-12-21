"use strict";(()=>{var Rr=Object.create;var ci=Object.defineProperty;var Or=Object.getOwnPropertyDescriptor;var Dr=Object.getOwnPropertyNames;var Pr=Object.getPrototypeOf,zr=Object.prototype.hasOwnProperty;var pi=(r=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(r,{get:(e,t)=>(typeof require<"u"?require:e)[t]}):r)(function(r){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+r+'" is not supported')});var Lr=(r,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of Dr(e))!zr.call(r,o)&&o!==t&&ci(r,o,{get:()=>e[o],enumerable:!(i=Or(e,o))||i.enumerable});return r};var hi=(r,e,t)=>(t=r!=null?Rr(Pr(r)):{},Lr(e||!r||!r.__esModule?ci(t,"default",{value:r,enumerable:!0}):t,r));function l(r,e,t,i){var o=arguments.length,a=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(r,e,t,i);else for(var d=r.length-1;d>=0;d--)(s=r[d])&&(a=(o<3?s(a):o>3?s(e,t,a):s(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a}var Ve=window,qe=Ve.ShadowRoot&&(Ve.ShadyCSS===void 0||Ve.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Et=Symbol(),fi=new WeakMap,Ie=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Et)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(qe&&e===void 0){let i=t!==void 0&&t.length===1;i&&(e=fi.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&fi.set(t,e))}return e}toString(){return this.cssText}},ui=r=>new Ie(typeof r=="string"?r:r+"",void 0,Et),u=(r,...e)=>{let t=r.length===1?r[0]:e.reduce((i,o,a)=>i+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+r[a+1],r[0]);return new Ie(t,r,Et)},At=(r,e)=>{qe?r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{let i=document.createElement("style"),o=Ve.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=t.cssText,r.appendChild(i)})},He=qe?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(let i of e.cssRules)t+=i.cssText;return ui(t)})(r):r;var Ct,je=window,mi=je.trustedTypes,Mr=mi?mi.emptyScript:"",vi=je.reactiveElementPolyfillSupport,Tt={toAttribute(r,e){switch(e){case Boolean:r=r?Mr:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},Ke=(r,e)=>e!==r&&(e==e||r==r),St={attribute:!0,type:String,converter:Tt,reflect:!1,hasChanged:Ke},$t="finalized",ee=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();let e=[];return this.elementProperties.forEach((t,i)=>{let o=this._$Ep(i,t);o!==void 0&&(this._$Ev.set(o,i),e.push(o))}),e}static createProperty(e,t=St){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){let i=typeof e=="symbol"?Symbol():"__"+e,o=this.getPropertyDescriptor(e,i,t);o!==void 0&&Object.defineProperty(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(o){let a=this[e];this[t]=o,this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||St}static finalize(){if(this.hasOwnProperty($t))return!1;this[$t]=!0;let e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(let o of i)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let i=new Set(e.flat(1/0).reverse());for(let o of i)t.unshift(He(o))}else e!==void 0&&t.push(He(e));return t}static _$Ep(e,t){let i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;let t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return At(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=St){var o;let a=this.constructor._$Ep(e,i);if(a!==void 0&&i.reflect===!0){let s=(((o=i.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?i.converter:Tt).toAttribute(t,i.type);this._$El=e,s==null?this.removeAttribute(a):this.setAttribute(a,s),this._$El=null}}_$AK(e,t){var i;let o=this.constructor,a=o._$Ev.get(e);if(a!==void 0&&this._$El!==a){let s=o.getPropertyOptions(a),d=typeof s.converter=="function"?{fromAttribute:s.converter}:((i=s.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?s.converter:Tt;this._$El=a,this[a]=d.fromAttribute(t,s.type),this._$El=null}}requestUpdate(e,t,i){let o=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||Ke)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,a)=>this[a]=o),this._$Ei=void 0);let t=!1,i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(o=>{var a;return(a=o.hostUpdate)===null||a===void 0?void 0:a.call(o)}),this.update(i)):this._$Ek()}catch(o){throw t=!1,this._$Ek(),o}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var o;return(o=i.hostUpdated)===null||o===void 0?void 0:o.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};ee[$t]=!0,ee.elementProperties=new Map,ee.elementStyles=[],ee.shadowRootOptions={mode:"open"},vi?.({ReactiveElement:ee}),((Ct=je.reactiveElementVersions)!==null&&Ct!==void 0?Ct:je.reactiveElementVersions=[]).push("1.6.3");var It,Ge=window,xe=Ge.trustedTypes,yi=xe?xe.createPolicy("lit-html",{createHTML:r=>r}):void 0,We="$lit$",te=`lit$${(Math.random()+"").slice(9)}$`,Rt="?"+te,Nr=`<${Rt}>`,ue=document,Re=()=>ue.createComment(""),Oe=r=>r===null||typeof r!="object"&&typeof r!="function",Ai=Array.isArray,Ci=r=>Ai(r)||typeof r?.[Symbol.iterator]=="function",kt=`[ 	
\f\r]`,ke=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,bi=/-->/g,gi=/>/g,he=RegExp(`>|${kt}(?:([^\\s"'>=/]+)(${kt}*=${kt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),xi=/'/g,_i=/"/g,Si=/^(?:script|style|textarea|title)$/i,Ti=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),h=Ti(1),$i=Ti(2),N=Symbol.for("lit-noChange"),c=Symbol.for("lit-nothing"),wi=new WeakMap,fe=ue.createTreeWalker(ue,129,null,!1);function Ii(r,e){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return yi!==void 0?yi.createHTML(e):e}var ki=(r,e)=>{let t=r.length-1,i=[],o,a=e===2?"<svg>":"",s=ke;for(let d=0;d<t;d++){let p=r[d],f,v,m=-1,y=0;for(;y<p.length&&(s.lastIndex=y,v=s.exec(p),v!==null);)y=s.lastIndex,s===ke?v[1]==="!--"?s=bi:v[1]!==void 0?s=gi:v[2]!==void 0?(Si.test(v[2])&&(o=RegExp("</"+v[2],"g")),s=he):v[3]!==void 0&&(s=he):s===he?v[0]===">"?(s=o??ke,m=-1):v[1]===void 0?m=-2:(m=s.lastIndex-v[2].length,f=v[1],s=v[3]===void 0?he:v[3]==='"'?_i:xi):s===_i||s===xi?s=he:s===bi||s===gi?s=ke:(s=he,o=void 0);let E=s===he&&r[d+1].startsWith("/>")?" ":"";a+=s===ke?p+Nr:m>=0?(i.push(f),p.slice(0,m)+We+p.slice(m)+te+E):p+te+(m===-2?(i.push(void 0),d):E)}return[Ii(r,a+(r[t]||"<?>")+(e===2?"</svg>":"")),i]},De=class r{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let a=0,s=0,d=e.length-1,p=this.parts,[f,v]=ki(e,t);if(this.el=r.createElement(f,i),fe.currentNode=this.el.content,t===2){let m=this.el.content,y=m.firstChild;y.remove(),m.append(...y.childNodes)}for(;(o=fe.nextNode())!==null&&p.length<d;){if(o.nodeType===1){if(o.hasAttributes()){let m=[];for(let y of o.getAttributeNames())if(y.endsWith(We)||y.startsWith(te)){let E=v[s++];if(m.push(y),E!==void 0){let P=o.getAttribute(E.toLowerCase()+We).split(te),S=/([.?@])?(.*)/.exec(E);p.push({type:1,index:a,name:S[2],strings:P,ctor:S[1]==="."?Ze:S[1]==="?"?Xe:S[1]==="@"?Je:ve})}else p.push({type:6,index:a})}for(let y of m)o.removeAttribute(y)}if(Si.test(o.tagName)){let m=o.textContent.split(te),y=m.length-1;if(y>0){o.textContent=xe?xe.emptyScript:"";for(let E=0;E<y;E++)o.append(m[E],Re()),fe.nextNode(),p.push({type:2,index:++a});o.append(m[y],Re())}}}else if(o.nodeType===8)if(o.data===Rt)p.push({type:2,index:a});else{let m=-1;for(;(m=o.data.indexOf(te,m+1))!==-1;)p.push({type:7,index:a}),m+=te.length-1}a++}}static createElement(e,t){let i=ue.createElement("template");return i.innerHTML=e,i}};function me(r,e,t=r,i){var o,a,s,d;if(e===N)return e;let p=i!==void 0?(o=t._$Co)===null||o===void 0?void 0:o[i]:t._$Cl,f=Oe(e)?void 0:e._$litDirective$;return p?.constructor!==f&&((a=p?._$AO)===null||a===void 0||a.call(p,!1),f===void 0?p=void 0:(p=new f(r),p._$AT(r,t,i)),i!==void 0?((s=(d=t)._$Co)!==null&&s!==void 0?s:d._$Co=[])[i]=p:t._$Cl=p),p!==void 0&&(e=me(r,p._$AS(r,e.values),p,i)),e}var Ye=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;let{el:{content:i},parts:o}=this._$AD,a=((t=e?.creationScope)!==null&&t!==void 0?t:ue).importNode(i,!0);fe.currentNode=a;let s=fe.nextNode(),d=0,p=0,f=o[0];for(;f!==void 0;){if(d===f.index){let v;f.type===2?v=new _e(s,s.nextSibling,this,e):f.type===1?v=new f.ctor(s,f.name,f.strings,this,e):f.type===6&&(v=new Qe(s,this,e)),this._$AV.push(v),f=o[++p]}d!==f?.index&&(s=fe.nextNode(),d++)}return fe.currentNode=ue,a}v(e){let t=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},_e=class r{constructor(e,t,i,o){var a;this.type=2,this._$AH=c,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cp=(a=o?.isConnected)===null||a===void 0||a}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=me(this,e,t),Oe(e)?e===c||e==null||e===""?(this._$AH!==c&&this._$AR(),this._$AH=c):e!==this._$AH&&e!==N&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Ci(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==c&&Oe(this._$AH)?this._$AA.nextSibling.data=e:this.$(ue.createTextNode(e)),this._$AH=e}g(e){var t;let{values:i,_$litType$:o}=e,a=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=De.createElement(Ii(o.h,o.h[0]),this.options)),o);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===a)this._$AH.v(i);else{let s=new Ye(a,this),d=s.u(this.options);s.v(i),this.$(d),this._$AH=s}}_$AC(e){let t=wi.get(e.strings);return t===void 0&&wi.set(e.strings,t=new De(e)),t}T(e){Ai(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,i,o=0;for(let a of e)o===t.length?t.push(i=new r(this.k(Re()),this.k(Re()),this,this.options)):i=t[o],i._$AI(a),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){let o=e.nextSibling;e.remove(),e=o}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},ve=class{constructor(e,t,i,o,a){this.type=1,this._$AH=c,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=a,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=c}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,o){let a=this.strings,s=!1;if(a===void 0)e=me(this,e,t,0),s=!Oe(e)||e!==this._$AH&&e!==N,s&&(this._$AH=e);else{let d=e,p,f;for(e=a[0],p=0;p<a.length-1;p++)f=me(this,d[i+p],t,p),f===N&&(f=this._$AH[p]),s||(s=!Oe(f)||f!==this._$AH[p]),f===c?e=c:e!==c&&(e+=(f??"")+a[p+1]),this._$AH[p]=f}s&&!o&&this.j(e)}j(e){e===c?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Ze=class extends ve{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===c?void 0:e}},Ur=xe?xe.emptyScript:"",Xe=class extends ve{constructor(){super(...arguments),this.type=4}j(e){e&&e!==c?this.element.setAttribute(this.name,Ur):this.element.removeAttribute(this.name)}},Je=class extends ve{constructor(e,t,i,o,a){super(e,t,i,o,a),this.type=5}_$AI(e,t=this){var i;if((e=(i=me(this,e,t,0))!==null&&i!==void 0?i:c)===N)return;let o=this._$AH,a=e===c&&o!==c||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,s=e!==c&&(o===c||a);a&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}},Qe=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){me(this,e)}},Ri={O:We,P:te,A:Rt,C:1,M:ki,L:Ye,R:Ci,D:me,I:_e,V:ve,H:Xe,N:Je,U:Ze,F:Qe},Ei=Ge.litHtmlPolyfillSupport;Ei?.(De,_e),((It=Ge.litHtmlVersions)!==null&&It!==void 0?It:Ge.litHtmlVersions=[]).push("2.8.0");var et=(r,e,t)=>{var i,o;let a=(i=t?.renderBefore)!==null&&i!==void 0?i:e,s=a._$litPart$;if(s===void 0){let d=(o=t?.renderBefore)!==null&&o!==void 0?o:null;a._$litPart$=s=new _e(e.insertBefore(Re(),d),d,void 0,t??{})}return s._$AI(r),s};var Ot,Dt;var g=class extends ee{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;let i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=et(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return N}};g.finalized=!0,g._$litElement$=!0,(Ot=globalThis.litElementHydrateSupport)===null||Ot===void 0||Ot.call(globalThis,{LitElement:g});var Oi=globalThis.litElementPolyfillSupport;Oi?.({LitElement:g});((Dt=globalThis.litElementVersions)!==null&&Dt!==void 0?Dt:globalThis.litElementVersions=[]).push("3.3.3");var _=r=>e=>typeof e=="function"?((t,i)=>(customElements.define(t,i),i))(r,e):((t,i)=>{let{kind:o,elements:a}=i;return{kind:o,elements:a,finisher(s){customElements.define(t,s)}}})(r,e);var Br=(r,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,r)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,r)}},Fr=(r,e,t)=>{e.constructor.createProperty(t,r)};function n(r){return(e,t)=>t!==void 0?Fr(r,e,t):Br(r,e)}function w(r){return n({...r,state:!0})}var ie=({finisher:r,descriptor:e})=>(t,i)=>{var o;if(i===void 0){let a=(o=t.originalKey)!==null&&o!==void 0?o:t.key,s=e!=null?{kind:"method",placement:"prototype",key:a,descriptor:e(t.key)}:{...t,key:a};return r!=null&&(s.finisher=function(d){r(d,a)}),s}{let a=t.constructor;e!==void 0&&Object.defineProperty(t,i,e(i)),r?.(a,i)}};function b(r,e){return ie({descriptor:t=>{let i={get(){var o,a;return(a=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(r))!==null&&a!==void 0?a:null},enumerable:!0,configurable:!0};if(e){let o=typeof t=="symbol"?Symbol():"__"+t;i.get=function(){var a,s;return this[o]===void 0&&(this[o]=(s=(a=this.renderRoot)===null||a===void 0?void 0:a.querySelector(r))!==null&&s!==void 0?s:null),this[o]}}return i}})}function Di(r){return ie({descriptor:e=>({get(){var t,i;return(i=(t=this.renderRoot)===null||t===void 0?void 0:t.querySelectorAll(r))!==null&&i!==void 0?i:[]},enumerable:!0,configurable:!0})})}var Pt,Vr=((Pt=window.HTMLSlotElement)===null||Pt===void 0?void 0:Pt.prototype.assignedElements)!=null?(r,e)=>r.assignedElements(e):(r,e)=>r.assignedNodes(e).filter(t=>t.nodeType===Node.ELEMENT_NODE);function U(r){let{slot:e,selector:t}=r??{};return ie({descriptor:i=>({get(){var o;let a="slot"+(e?`[name=${e}]`:":not([name])"),s=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(a),d=s!=null?Vr(s,r):[];return t?d.filter(p=>p.matches(t)):d},enumerable:!0,configurable:!0})})}var Pi=Symbol(),Pe=class{get taskComplete(){return this.t||(this.status===1?this.t=new Promise((e,t)=>{this.i=e,this.o=t}):this.status===3?this.t=Promise.reject(this.h):this.t=Promise.resolve(this.l)),this.t}constructor(e,t,i){this.u=0,this.status=0,(this.p=e).addController(this);let o=typeof t=="object"?t:{task:t,args:i};this._=o.task,this.v=o.args,this.j=o.argsEqual??zi,this.m=o.onComplete,this.g=o.onError,this.autoRun=o.autoRun??!0,"initialValue"in o&&(this.l=o.initialValue,this.status=2,this.k=this.A?.())}hostUpdate(){this.autoRun===!0&&this.O()}hostUpdated(){this.autoRun==="afterUpdate"&&this.O()}A(){if(this.v===void 0)return;let e=this.v();if(!Array.isArray(e))throw Error("The args function must return an array");return e}async O(){let e=this.A(),t=this.k;this.k=e,e===t||e===void 0||t!==void 0&&this.j(t,e)||await this.run(e)}async run(e){let t,i;e??=this.A(),this.k=e,this.status===1?this.T?.abort():(this.t=void 0,this.i=void 0,this.o=void 0),this.status=1,this.autoRun==="afterUpdate"?queueMicrotask(()=>this.p.requestUpdate()):this.p.requestUpdate();let o=++this.u;this.T=new AbortController;let a=!1;try{t=await this._(e,{signal:this.T.signal})}catch(s){a=!0,i=s}if(this.u===o){if(t===Pi)this.status=0;else{if(a===!1){try{this.m?.(t)}catch{}this.status=2,this.i?.(t)}else{try{this.g?.(i)}catch{}this.status=3,this.o?.(i)}this.l=t,this.h=i}this.p.requestUpdate()}}abort(e){this.status===1&&this.T?.abort(e)}get value(){return this.l}get error(){return this.h}render(e){switch(this.status){case 0:return e.initial?.();case 1:return e.pending?.();case 2:return e.complete?.(this.value);case 3:return e.error?.(this.error);default:throw Error("Unexpected status: "+this.status)}}},zi=(r,e)=>r===e||r.length===e.length&&r.every((t,i)=>!Ke(t,e[i]));var Li=u`
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
    --md-checkbox-selected-container-color: #1b1c17;
    --md-checkbox-selected-icon-color: var(--baller-form-selected-icon-color, #ffffff);
    --md-checkbox-container-shape: 1px;
    --md-focus-ring-color: #1b1c17;
    padding: 1rem;
  }

  md-dialog {
    --md-dialog-container-color: white;
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
    --md-filled-text-field-focus-outline-color: var(--baller-form-text-field-focus-outline-color, #1b1c17);
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
`;var tt=class r{constructor(e){this.givenName=e.givenName,this.familyName=e.familyName,this.email=e.email,this.xingMember=e.xingMember,this.availableDates=r._normalizeDates(e.availableDates),this.acceptedTos=e.acceptedTos}static _normalizeDates(e){return Array.from(e).map(o=>new Date(o).toLocaleDateString("de-DE",{day:"numeric",year:"numeric",month:"numeric"}))}};var it=class r{constructor(e){this.endpoint=new URL(e,window.location.origin)}static handleBrazeResponse(e){if(e.errors)throw console.error(e),new Error("Invalid Braze API response.")}async process(e){let t=r.prepareDataForBraze(e),i=await this.sendDataToBraze(t),o=JSON.parse(i);r.handleBrazeResponse(o)}async sendDataToBraze(e){return(await fetch(this.endpoint,{method:"POST",cache:"no-cache",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify(e)})).json()}static prepareDataForBraze(e){return{events:[{email:e.email,app_id:"220983e3-8db5-49d5-8272-620b09b1f7fa",name:"Submit_Newsletter_Sweepstake",time:new Date().toISOString()}],attributes:[{email:e.email,first_name:e.givenName,last_name:e.familyName,xing_member:e.xingMember,selected_dates:e.availableDates,accepted_conditions:e.acceptedTos}]}}};var rt=class r{constructor(e,t){this.minimumTrustRequired=.4,this.featureEnabled=!0,this.siteKey=e,this.scriptURL=r.generateScriptUrl(e),this.serverSideValidationEndpoint=new URL(t,window.location.origin)}generateScriptElement(){let e=document.createElement("script");return e.async=!0,e.src=this.scriptURL.href,e}async isValidUser(){if(!this.featureEnabled)return!0;if(!("grecaptcha"in window))throw new Error("reCAPTCHA object not found");let e=await window.grecaptcha.execute(this.siteKey,{action:"submit"});try{return(await this.validateTokenWithServer(e)).score>=this.minimumTrustRequired}catch(t){throw console.error(t),new Error("Problem communicating with reCAPTCHA endpoint.")}}async validateTokenWithServer(e){let t=AbortSignal.timeout(1e4),i=await fetch(this.serverSideValidationEndpoint,{method:"POST",signal:t,cache:"no-cache",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})});if(!i.ok)throw new Error("Unable to validate Recaptcha Token with the server");return i.json()}static generateScriptUrl(e){let t=new URL("https://www.google.com/recaptcha/api.js");return t.searchParams.append("render",e),t}};var Mi={xing:"Wenn Du uns das verr\xE4tst, k\xF6nnen wir die Newsletter Inhalte besser auf Dich zuschneiden"};var ot=class extends g{connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}render(){return h`<span class="shadow"></span>`}};var Ni=u`:host{--_level: var(--md-elevation-level, 0);--_shadow-color: var(--md-elevation-shadow-color, var(--md-sys-color-shadow, #000));display:flex;pointer-events:none}:host,.shadow,.shadow::before,.shadow::after{border-radius:inherit;inset:0;position:absolute;transition-duration:inherit;transition-property:inherit;transition-timing-function:inherit}.shadow::before,.shadow::after{content:"";transition-property:box-shadow,opacity}.shadow::before{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 3,1) + 2*clamp(0,var(--_level) - 4,1))) calc(1px*(2*clamp(0,var(--_level),1) + clamp(0,var(--_level) - 2,1) + clamp(0,var(--_level) - 4,1))) 0px var(--_shadow-color);opacity:.3}.shadow::after{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 1,1) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(3*clamp(0,var(--_level),2) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(clamp(0,var(--_level),4) + 2*clamp(0,var(--_level) - 4,1))) var(--_shadow-color);opacity:.15}/*# sourceMappingURL=elevation-styles.css.map */
`;var zt=class extends ot{};zt.styles=[Ni];zt=l([_("md-elevation")],zt);var Ui=Symbol("attachableController"),Bi;!1||(Bi=new MutationObserver(r=>{for(let e of r)e.target[Ui]?.hostConnected()}));var we=class{get htmlFor(){return this.host.getAttribute("for")}set htmlFor(e){e===null?this.host.removeAttribute("for"):this.host.setAttribute("for",e)}get control(){return this.host.hasAttribute("for")?!this.htmlFor||!this.host.isConnected?null:this.host.getRootNode().querySelector(`#${this.htmlFor}`):this.currentControl||this.host.parentElement}set control(e){e?this.attach(e):this.detach()}constructor(e,t){this.host=e,this.onControlChange=t,this.currentControl=null,e.addController(this),e[Ui]=this,Bi?.observe(e,{attributeFilter:["for"]})}attach(e){e!==this.currentControl&&(this.setCurrentControl(e),this.host.removeAttribute("for"))}detach(){this.setCurrentControl(null),this.host.setAttribute("for","")}hostConnected(){this.setCurrentControl(this.control)}hostDisconnected(){this.setCurrentControl(null)}setCurrentControl(e){this.onControlChange(this.currentControl,e),this.currentControl=e}};var qr=["focusin","focusout","pointerdown"],Ee=class extends g{constructor(){super(...arguments),this.visible=!1,this.inward=!1,this.attachableController=new we(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(e){this.attachableController.htmlFor=e}get control(){return this.attachableController.control}set control(e){this.attachableController.control=e}attach(e){this.attachableController.attach(e)}detach(){this.attachableController.detach()}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}handleEvent(e){if(!e[Fi]){switch(e.type){default:return;case"focusin":this.visible=this.control?.matches(":focus-visible")??!1;break;case"focusout":case"pointerdown":this.visible=!1;break}e[Fi]=!0}}onControlChange(e,t){if(!!1)for(let i of qr)e?.removeEventListener(i,this),t?.addEventListener(i,this)}update(e){e.has("visible")&&this.dispatchEvent(new Event("visibility-changed")),super.update(e)}};l([n({type:Boolean,reflect:!0})],Ee.prototype,"visible",void 0);l([n({type:Boolean,reflect:!0})],Ee.prototype,"inward",void 0);var Fi=Symbol("handledByFocusRing");var Vi=u`:host{animation-delay:0s,calc(var(--md-focus-ring-duration, 600ms)*.25);animation-duration:calc(var(--md-focus-ring-duration, 600ms)*.25),calc(var(--md-focus-ring-duration, 600ms)*.75);animation-timing-function:cubic-bezier(0.2, 0, 0, 1);box-sizing:border-box;color:var(--md-focus-ring-color, var(--md-sys-color-secondary, #625b71));display:none;pointer-events:none;position:absolute}:host([visible]){display:flex}:host(:not([inward])){animation-name:outward-grow,outward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));inset:calc(-1*var(--md-focus-ring-outward-offset, 2px));outline:var(--md-focus-ring-width, 3px) solid currentColor}:host([inward]){animation-name:inward-grow,inward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border:var(--md-focus-ring-width, 3px) solid currentColor;inset:var(--md-focus-ring-inward-offset, 0px)}@keyframes outward-grow{from{outline-width:0}to{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes outward-shrink{from{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-grow{from{border-width:0}to{border-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-shrink{from{border-width:var(--md-focus-ring-active-width, 8px)}}@media(prefers-reduced-motion){:host{animation:none}}/*# sourceMappingURL=focus-ring-styles.css.map */
`;var Lt=class extends Ee{};Lt.styles=[Vi];Lt=l([_("md-focus-ring")],Lt);var X={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ae=r=>(...e)=>({_$litDirective$:r,values:e}),ae=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var R=Ae(class extends ae{constructor(r){var e;if(super(r),r.type!==X.ATTRIBUTE||r.name!=="class"||((e=r.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(e=>r[e]).join(" ")+" "}update(r,[e]){var t,i;if(this.it===void 0){this.it=new Set,r.strings!==void 0&&(this.nt=new Set(r.strings.join(" ").split(/\s/).filter(a=>a!=="")));for(let a in e)e[a]&&!(!((t=this.nt)===null||t===void 0)&&t.has(a))&&this.it.add(a);return this.render(e)}let o=r.element.classList;this.it.forEach(a=>{a in e||(o.remove(a),this.it.delete(a))});for(let a in e){let s=!!e[a];s===this.it.has(a)||!((i=this.nt)===null||i===void 0)&&i.has(a)||(s?(o.add(a),this.it.add(a)):(o.remove(a),this.it.delete(a)))}return N}});var q={STANDARD:"cubic-bezier(0.2, 0, 0, 1)",STANDARD_ACCELERATE:"cubic-bezier(.3,0,1,1)",STANDARD_DECELERATE:"cubic-bezier(0,0,0,1)",EMPHASIZED:"cubic-bezier(.3,0,0,1)",EMPHASIZED_ACCELERATE:"cubic-bezier(.3,0,.8,.15)",EMPHASIZED_DECELERATE:"cubic-bezier(.05,.7,.1,1)"};function qi(){let r=null;return{start(){return r?.abort(),r=new AbortController,r.signal},finish(){r=null}}}var Hr=450,Hi=225,jr=.2,Kr=10,Gr=75,Wr=.35,Yr="::after",Zr="forwards",F;(function(r){r[r.INACTIVE=0]="INACTIVE",r[r.TOUCH_DELAY=1]="TOUCH_DELAY",r[r.HOLDING=2]="HOLDING",r[r.WAITING_FOR_CLICK=3]="WAITING_FOR_CLICK"})(F||(F={}));var Xr=["click","contextmenu","pointercancel","pointerdown","pointerenter","pointerleave","pointerup"],Jr=150,le=class extends g{constructor(){super(...arguments),this.disabled=!1,this.hovered=!1,this.pressed=!1,this.rippleSize="",this.rippleScale="",this.initialSize=0,this.state=F.INACTIVE,this.checkBoundsAfterContextMenu=!1,this.attachableController=new we(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(e){this.attachableController.htmlFor=e}get control(){return this.attachableController.control}set control(e){this.attachableController.control=e}attach(e){this.attachableController.attach(e)}detach(){this.attachableController.detach()}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}render(){let e={hovered:this.hovered,pressed:this.pressed};return h`<div class="surface ${R(e)}"></div>`}update(e){e.has("disabled")&&this.disabled&&(this.hovered=!1,this.pressed=!1),super.update(e)}handlePointerenter(e){this.shouldReactToEvent(e)&&(this.hovered=!0)}handlePointerleave(e){this.shouldReactToEvent(e)&&(this.hovered=!1,this.state!==F.INACTIVE&&this.endPressAnimation())}handlePointerup(e){if(this.shouldReactToEvent(e)){if(this.state===F.HOLDING){this.state=F.WAITING_FOR_CLICK;return}if(this.state===F.TOUCH_DELAY){this.state=F.WAITING_FOR_CLICK,this.startPressAnimation(this.rippleStartEvent);return}}}async handlePointerdown(e){if(this.shouldReactToEvent(e)){if(this.rippleStartEvent=e,!this.isTouch(e)){this.state=F.WAITING_FOR_CLICK,this.startPressAnimation(e);return}this.checkBoundsAfterContextMenu&&!this.inBounds(e)||(this.checkBoundsAfterContextMenu=!1,this.state=F.TOUCH_DELAY,await new Promise(t=>{setTimeout(t,Jr)}),this.state===F.TOUCH_DELAY&&(this.state=F.HOLDING,this.startPressAnimation(e)))}}handleClick(){if(!this.disabled){if(this.state===F.WAITING_FOR_CLICK){this.endPressAnimation();return}this.state===F.INACTIVE&&(this.startPressAnimation(),this.endPressAnimation())}}handlePointercancel(e){this.shouldReactToEvent(e)&&this.endPressAnimation()}handleContextmenu(){this.disabled||(this.checkBoundsAfterContextMenu=!0,this.endPressAnimation())}determineRippleSize(){let{height:e,width:t}=this.getBoundingClientRect(),i=Math.max(e,t),o=Math.max(Wr*i,Gr),a=Math.floor(i*jr),d=Math.sqrt(t**2+e**2)+Kr;this.initialSize=a,this.rippleScale=`${(d+o)/a}`,this.rippleSize=`${a}px`}getNormalizedPointerEventCoords(e){let{scrollX:t,scrollY:i}=window,{left:o,top:a}=this.getBoundingClientRect(),s=t+o,d=i+a,{pageX:p,pageY:f}=e;return{x:p-s,y:f-d}}getTranslationCoordinates(e){let{height:t,width:i}=this.getBoundingClientRect(),o={x:(i-this.initialSize)/2,y:(t-this.initialSize)/2},a;return e instanceof PointerEvent?a=this.getNormalizedPointerEventCoords(e):a={x:i/2,y:t/2},a={x:a.x-this.initialSize/2,y:a.y-this.initialSize/2},{startPoint:a,endPoint:o}}startPressAnimation(e){if(!this.mdRoot)return;this.pressed=!0,this.growAnimation?.cancel(),this.determineRippleSize();let{startPoint:t,endPoint:i}=this.getTranslationCoordinates(e),o=`${t.x}px, ${t.y}px`,a=`${i.x}px, ${i.y}px`;this.growAnimation=this.mdRoot.animate({top:[0,0],left:[0,0],height:[this.rippleSize,this.rippleSize],width:[this.rippleSize,this.rippleSize],transform:[`translate(${o}) scale(1)`,`translate(${a}) scale(${this.rippleScale})`]},{pseudoElement:Yr,duration:Hr,easing:q.STANDARD,fill:Zr})}async endPressAnimation(){this.state=F.INACTIVE;let e=this.growAnimation,t=e?.currentTime??1/0;if(t>=Hi){this.pressed=!1;return}await new Promise(i=>{setTimeout(i,Hi-t)}),this.growAnimation===e&&(this.pressed=!1)}shouldReactToEvent(e){if(this.disabled||!e.isPrimary||this.rippleStartEvent&&this.rippleStartEvent.pointerId!==e.pointerId)return!1;if(e.type==="pointerenter"||e.type==="pointerleave")return!this.isTouch(e);let t=e.buttons===1;return this.isTouch(e)||t}inBounds({x:e,y:t}){let{top:i,left:o,bottom:a,right:s}=this.getBoundingClientRect();return e>=o&&e<=s&&t>=i&&t<=a}isTouch({pointerType:e}){return e==="touch"}async handleEvent(e){switch(e.type){case"click":this.handleClick();break;case"contextmenu":this.handleContextmenu();break;case"pointercancel":this.handlePointercancel(e);break;case"pointerdown":await this.handlePointerdown(e);break;case"pointerenter":this.handlePointerenter(e);break;case"pointerleave":this.handlePointerleave(e);break;case"pointerup":this.handlePointerup(e);break;default:break}}onControlChange(e,t){if(!!1)for(let i of Xr)e?.removeEventListener(i,this),t?.addEventListener(i,this)}};l([n({type:Boolean,reflect:!0})],le.prototype,"disabled",void 0);l([w()],le.prototype,"hovered",void 0);l([w()],le.prototype,"pressed",void 0);l([b(".surface")],le.prototype,"mdRoot",void 0);var ji=u`:host{--_hover-color: var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-opacity: var(--md-ripple-hover-opacity, 0.08);--_pressed-color: var(--md-ripple-pressed-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-opacity: var(--md-ripple-pressed-opacity, 0.12);display:flex;margin:auto;pointer-events:none}:host([disabled]){display:none}@media(forced-colors: active){:host{display:none}}:host,.surface{border-radius:inherit;position:absolute;inset:0;overflow:hidden}.surface{-webkit-tap-highlight-color:rgba(0,0,0,0)}.surface::before,.surface::after{content:"";opacity:0;position:absolute}.surface::before{background-color:var(--_hover-color);inset:0;transition:opacity 15ms linear,background-color 15ms linear}.surface::after{background:radial-gradient(closest-side, var(--_pressed-color) max(100% - 70px, 65%), transparent 100%);transform-origin:center center;transition:opacity 375ms linear}.hovered::before{background-color:var(--_hover-color);opacity:var(--_hover-opacity)}.pressed::after{opacity:var(--_pressed-opacity);transition-duration:105ms}/*# sourceMappingURL=ripple-styles.css.map */
`;var Mt=class extends le{};Mt.styles=[ji];Mt=l([_("md-ripple")],Mt);var Gi=Symbol.for(""),Qr=r=>{if(r?.r===Gi)return r?._$litStatic$};var K=(r,...e)=>({_$litStatic$:e.reduce((t,i,o)=>t+(a=>{if(a._$litStatic$!==void 0)return a._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${a}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(i)+r[o+1],r[0]),r:Gi}),Ki=new Map,Wi=r=>(e,...t)=>{let i=t.length,o,a,s=[],d=[],p,f=0,v=!1;for(;f<i;){for(p=e[f];f<i&&(a=t[f],(o=Qr(a))!==void 0);)p+=o+e[++f],v=!0;f!==i&&d.push(a),s.push(p),f++}if(f===i&&s.push(e[i]),v){let m=s.join("$$lit$$");(e=Ki.get(m))===void 0&&(s.raw=s,Ki.set(m,e=s)),t=d}return r(e,...t)},se=Wi(h),ul=Wi($i);var ze=["ariaAtomic","ariaAutoComplete","ariaBusy","ariaChecked","ariaColCount","ariaColIndex","ariaColSpan","ariaCurrent","ariaDisabled","ariaExpanded","ariaHasPopup","ariaHidden","ariaInvalid","ariaKeyShortcuts","ariaLabel","ariaLevel","ariaLive","ariaModal","ariaMultiLine","ariaMultiSelectable","ariaOrientation","ariaPlaceholder","ariaPosInSet","ariaPressed","ariaReadOnly","ariaRequired","ariaRoleDescription","ariaRowCount","ariaRowIndex","ariaRowSpan","ariaSelected","ariaSetSize","ariaSort","ariaValueMax","ariaValueMin","ariaValueNow","ariaValueText"],gl=ze.map(Le);function Le(r){return r.replace("aria","aria-").replace(/Elements?/g,"").toLowerCase()}function at(r,{focusable:e}={}){if(e!==!1&&r.addInitializer(t=>{t.addController({hostConnected(){t.hasAttribute("tabindex")||(t.tabIndex=0)}})}),!(!1||"role"in Element.prototype)){for(let t of ze)r.createProperty(t,{attribute:Le(t),reflect:!0});r.createProperty("role",{reflect:!0})}}function lt(r,e){if(eo(e))return e;if(!("role"in r))throw new Error("Missing setupHostAria()");let t=[],i=!1;for(let a of ze){let s=null;Object.defineProperty(e,a,{enumerable:!0,configurable:!0,get(){return s},set(d){let p=()=>{if(s=d,!i){t.push({property:a,callback:p});return}r[a]=d};p()}})}let o=null;return Object.defineProperty(e,"role",{enumerable:!0,configurable:!0,get(){return o},set(a){let s=()=>{if(o=a,!i){t.push({property:"role",callback:s});return}a===null?r.removeAttribute("role"):r.setAttribute("role",a)};s()}}),r.addController({hostConnected(){if(i)return;i=!0;let a=new Set;for(let{property:s}of t)(r.getAttribute(Le(s))!==null||r[s]!==void 0)&&a.add(s);for(let{property:s,callback:d}of t)a.has(s)||d();t=[]}}),e}function eo(r){return"role"in r}function H(r){for(let e of ze)r.createProperty(e,{attribute:Le(e),reflect:!0});r.addInitializer(e=>{let t={hostConnected(){e.setAttribute("role","presentation")}};e.addController(t)})}var Me=Symbol("internals");function ne(r,e){e.bubbles&&(!r.shadowRoot||e.composed)&&e.stopPropagation();let t=Reflect.construct(e.constructor,[e.type,e]),i=r.dispatchEvent(t);return i||e.preventDefault(),i}function st(r){let e=new MouseEvent("click",{bubbles:!0});return r.dispatchEvent(e),e}function nt(r){return r.currentTarget!==r.target||r.composedPath()[0]!==r.target||r.target.disabled?!1:!to(r)}function to(r){let e=Nt;return e&&(r.preventDefault(),r.stopImmediatePropagation()),io(),e}var Nt=!1;async function io(){Nt=!0,await null,Nt=!1}function Yi(r){!1||r.addInitializer(e=>{let t=e;t.addEventListener("click",async i=>{let{type:o,[Me]:a}=t,{form:s}=a;if(!(!s||o==="button")&&(await new Promise(d=>{d()}),!i.defaultPrevented)){if(o==="reset"){s.reset();return}s.addEventListener("submit",d=>{Object.defineProperty(d,"submitter",{configurable:!0,enumerable:!0,get:()=>t})},{capture:!0,once:!0}),a.setFormValue(t.value),s.requestSubmit()}})})}var Zi,O=class extends g{get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get form(){return this[Me].form}constructor(){super(),this.disabled=!1,this.href="",this.target="",this.trailingIcon=!1,this.hasIcon=!1,this.type="submit",this.value="",this[Zi]=this.attachInternals(),this.handleActivationClick=e=>{!nt(e)||!this.buttonElement||(this.focus(),st(this.buttonElement))},!1||this.addEventListener("click",this.handleActivationClick)}focus(){this.buttonElement?.focus()}blur(){this.buttonElement?.blur()}render(){let e=this.disabled&&!this.href,t=this.href?K`a`:K`button`,{ariaLabel:i,ariaHasPopup:o,ariaExpanded:a}=this;return se`
      <${t}
        class="button ${R(this.getRenderClasses())}"
        ?disabled=${e}
        aria-label="${i||c}"
        aria-haspopup="${o||c}"
        aria-expanded="${a||c}"
        href=${this.href||c}
        target=${this.target||c}
      >${this.renderContent()}</${t}>`}getRenderClasses(){return{"button--icon-leading":!this.trailingIcon&&this.hasIcon,"button--icon-trailing":this.trailingIcon&&this.hasIcon}}renderContent(){let e=this.disabled&&!this.href,t=h`<slot name="icon" @slotchange="${this.handleSlotChange}"></slot>`;return h`
      ${this.renderElevation?.()}
      ${this.renderOutline?.()}
      <md-focus-ring part="focus-ring"></md-focus-ring>
      <md-ripple class="button__ripple" ?disabled="${e}"></md-ripple>
      <span class="touch"></span>
      ${this.trailingIcon?c:t}
      <span class="button__label"><slot></slot></span>
      ${this.trailingIcon?t:c}
    `}handleSlotChange(){this.hasIcon=this.assignedIcons.length>0}};Zi=Me;H(O),Yi(O);O.formAssociated=!0;O.shadowRootOptions={mode:"open",delegatesFocus:!0};l([n({type:Boolean,reflect:!0})],O.prototype,"disabled",void 0);l([n()],O.prototype,"href",void 0);l([n()],O.prototype,"target",void 0);l([n({type:Boolean,attribute:"trailing-icon"})],O.prototype,"trailingIcon",void 0);l([n({type:Boolean,attribute:"has-icon"})],O.prototype,"hasIcon",void 0);l([n()],O.prototype,"type",void 0);l([n()],O.prototype,"value",void 0);l([b(".button")],O.prototype,"buttonElement",void 0);l([U({slot:"icon",flatten:!0})],O.prototype,"assignedIcons",void 0);var dt=class extends O{renderElevation(){return h`<md-elevation></md-elevation>`}};var Xi=u`:host{--_container-color: var(--md-filled-button-container-color, var(--md-sys-color-primary, #6750a4));--_container-elevation: var(--md-filled-button-container-elevation, 0);--_container-height: var(--md-filled-button-container-height, 40px);--_container-shadow-color: var(--md-filled-button-container-shadow-color, var(--md-sys-color-shadow, #000));--_container-shape: var(--md-filled-button-container-shape, 9999px);--_disabled-container-color: var(--md-filled-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-elevation: var(--md-filled-button-disabled-container-elevation, 0);--_disabled-container-opacity: var(--md-filled-button-disabled-container-opacity, 0.12);--_disabled-label-text-color: var(--md-filled-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-button-disabled-label-text-opacity, 0.38);--_focus-container-elevation: var(--md-filled-button-focus-container-elevation, 0);--_focus-label-text-color: var(--md-filled-button-focus-label-text-color, var(--md-sys-color-on-primary, #fff));--_hover-container-elevation: var(--md-filled-button-hover-container-elevation, 1);--_hover-label-text-color: var(--md-filled-button-hover-label-text-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-color: var(--md-filled-button-hover-state-layer-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-opacity: var(--md-filled-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-filled-button-label-text-color, var(--md-sys-color-on-primary, #fff));--_label-text-font: var(--md-filled-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-filled-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-filled-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-container-elevation: var(--md-filled-button-pressed-container-elevation, 0);--_pressed-label-text-color: var(--md-filled-button-pressed-label-text-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-color: var(--md-filled-button-pressed-state-layer-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-opacity: var(--md-filled-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-filled-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-button-focus-icon-color, var(--md-sys-color-on-primary, #fff));--_hover-icon-color: var(--md-filled-button-hover-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-color: var(--md-filled-button-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-size: var(--md-filled-button-icon-size, 18px);--_pressed-icon-color: var(--md-filled-button-pressed-icon-color, var(--md-sys-color-on-primary, #fff));--_leading-space: var(--md-filled-button-leading-space, 24px);--_trailing-space: var(--md-filled-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-filled-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-filled-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-filled-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-filled-button-with-trailing-icon-trailing-space, 16px);--_container-shape-start-start: var( --md-filled-button-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-filled-button-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-filled-button-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-filled-button-container-shape-end-start, var(--_container-shape) )}/*# sourceMappingURL=filled-styles.css.map */
`;var ct=u`md-elevation{transition-duration:280ms}.button:disabled md-elevation{transition:none}.button{--md-elevation-level: var(--_container-elevation);--md-elevation-shadow-color: var(--_container-shadow-color)}.button:focus{--md-elevation-level: var(--_focus-container-elevation)}.button:hover{--md-elevation-level: var(--_hover-container-elevation)}.button:active{--md-elevation-level: var(--_pressed-container-elevation)}.button:disabled{--md-elevation-level: var(--_disabled-container-elevation)}/*# sourceMappingURL=shared-elevation-styles.css.map */
`;var Ce=u`:host{display:inline-flex;height:var(--_container-height);outline:none;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);-webkit-tap-highlight-color:rgba(0,0,0,0);vertical-align:top;--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) 0}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host([disabled]){cursor:default;pointer-events:none}.button{display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-inline-size:64px;border:none;outline:none;user-select:none;-webkit-appearance:none;vertical-align:middle;background:rgba(0,0,0,0);text-decoration:none;inline-size:100%;position:relative;z-index:0;height:100%;font:inherit;color:var(--_label-text-color);padding-inline-start:var(--_leading-space);padding-inline-end:var(--_trailing-space);gap:8px}.button::before{background-color:var(--_container-color);border-radius:inherit;content:"";inset:0;position:absolute}.button::-moz-focus-inner{padding:0;border:0}.button:hover{color:var(--_hover-label-text-color);cursor:pointer}.button:focus{color:var(--_focus-label-text-color)}.button:active{color:var(--_pressed-label-text-color);outline:none}.button:disabled .button__label{color:var(--_disabled-label-text-color);opacity:var(--_disabled-label-text-opacity)}.button:disabled::before{background-color:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}@media(forced-colors: active){.button::before{content:"";box-sizing:border-box;border:1px solid CanvasText;border-radius:inherit;inset:0;pointer-events:none;position:absolute}.button:disabled{--_disabled-icon-opacity: 1;--_disabled-container-opacity: 1;--_disabled-label-text-opacity: 1}}.button,.button__ripple{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.button::after,.button::before,md-elevation,.button__ripple{z-index:-1}.button--icon-leading{padding-inline-start:var(--_with-leading-icon-leading-space);padding-inline-end:var(--_with-leading-icon-trailing-space)}.button--icon-trailing{padding-inline-start:var(--_with-trailing-icon-leading-space);padding-inline-end:var(--_with-trailing-icon-trailing-space)}.link-button-wrapper{inline-size:100%}.button ::slotted([slot=icon]){display:inline-flex;position:relative;writing-mode:horizontal-tb;fill:currentColor;color:var(--_icon-color);font-size:var(--_icon-size);inline-size:var(--_icon-size);block-size:var(--_icon-size)}.button:hover ::slotted([slot=icon]){color:var(--_hover-icon-color)}.button:focus ::slotted([slot=icon]){color:var(--_focus-icon-color)}.button:active ::slotted([slot=icon]){color:var(--_pressed-icon-color)}.button:disabled ::slotted([slot=icon]){color:var(--_disabled-icon-color);opacity:var(--_disabled-icon-opacity)}.touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}:host([touch-target=none]) .touch{display:none}/*# sourceMappingURL=shared-styles.css.map */
`;var Ut=class extends dt{};Ut.styles=[Ce,ct,Xi];Ut=l([_("md-filled-button")],Ut);var pt=class extends O{renderElevation(){return h`<md-elevation></md-elevation>`}};var Ji=u`:host{--_container-color: var(--md-filled-tonal-button-container-color, var(--md-sys-color-secondary-container, #e8def8));--_container-elevation: var(--md-filled-tonal-button-container-elevation, 0);--_container-height: var(--md-filled-tonal-button-container-height, 40px);--_container-shadow-color: var(--md-filled-tonal-button-container-shadow-color, var(--md-sys-color-shadow, #000));--_container-shape: var(--md-filled-tonal-button-container-shape, 9999px);--_disabled-container-color: var(--md-filled-tonal-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-elevation: var(--md-filled-tonal-button-disabled-container-elevation, 0);--_disabled-container-opacity: var(--md-filled-tonal-button-disabled-container-opacity, 0.12);--_disabled-label-text-color: var(--md-filled-tonal-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-tonal-button-disabled-label-text-opacity, 0.38);--_focus-container-elevation: var(--md-filled-tonal-button-focus-container-elevation, 0);--_focus-label-text-color: var(--md-filled-tonal-button-focus-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-container-elevation: var(--md-filled-tonal-button-hover-container-elevation, 1);--_hover-label-text-color: var(--md-filled-tonal-button-hover-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-state-layer-color: var(--md-filled-tonal-button-hover-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-state-layer-opacity: var(--md-filled-tonal-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-filled-tonal-button-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_label-text-font: var(--md-filled-tonal-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-tonal-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-filled-tonal-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-filled-tonal-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-container-elevation: var(--md-filled-tonal-button-pressed-container-elevation, 0);--_pressed-label-text-color: var(--md-filled-tonal-button-pressed-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-color: var(--md-filled-tonal-button-pressed-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-opacity: var(--md-filled-tonal-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-filled-tonal-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-tonal-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-tonal-button-focus-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-icon-color: var(--md-filled-tonal-button-hover-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_icon-color: var(--md-filled-tonal-button-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_icon-size: var(--md-filled-tonal-button-icon-size, 18px);--_pressed-icon-color: var(--md-filled-tonal-button-pressed-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_leading-space: var(--md-filled-tonal-button-leading-space, 24px);--_trailing-space: var(--md-filled-tonal-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-filled-tonal-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-filled-tonal-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-filled-tonal-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-filled-tonal-button-with-trailing-icon-trailing-space, 16px);--_container-shape-start-start: var( --md-filled-tonal-button-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-filled-tonal-button-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-filled-tonal-button-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-filled-tonal-button-container-shape-end-start, var(--_container-shape) )}/*# sourceMappingURL=filled-tonal-styles.css.map */
`;var Bt=class extends pt{};Bt.styles=[Ce,ct,Ji];Bt=l([_("md-filled-tonal-button")],Bt);var ht=class extends O{renderOutline(){return h`<span class="button__outline"></span>`}};var Qi=u`:host{--_container-height: var(--md-outlined-button-container-height, 40px);--_container-shape: var(--md-outlined-button-container-shape, 9999px);--_disabled-label-text-color: var(--md-outlined-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-button-disabled-label-text-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-button-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-button-disabled-outline-opacity, 0.12);--_focus-label-text-color: var(--md-outlined-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-outlined-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-outlined-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-outlined-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-outlined-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-font: var(--md-outlined-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-outlined-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-outlined-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-outlined-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_outline-color: var(--md-outlined-button-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-outlined-button-outline-width, 1px);--_pressed-label-text-color: var(--md-outlined-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-outline-color: var(--md-outlined-button-pressed-outline-color, var(--md-sys-color-outline, #79747e));--_pressed-state-layer-color: var(--md-outlined-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-outlined-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-outlined-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-outlined-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-outlined-button-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-icon-color: var(--md-outlined-button-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-color: var(--md-outlined-button-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-outlined-button-icon-size, 18px);--_pressed-icon-color: var(--md-outlined-button-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_leading-space: var(--md-outlined-button-leading-space, 24px);--_trailing-space: var(--md-outlined-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-outlined-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-outlined-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-outlined-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-outlined-button-with-trailing-icon-trailing-space, 16px);--_container-color: none;--_disabled-container-color: none;--_disabled-container-opacity: 0;--_container-shape-start-start: var( --md-outlined-button-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-outlined-button-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-outlined-button-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-outlined-button-container-shape-end-start, var(--_container-shape) )}.button__outline{inset:0;border-style:solid;position:absolute;box-sizing:border-box;border-color:var(--_outline-color);border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.button:active .button__outline{border-color:var(--_pressed-outline-color)}.button:disabled .button__outline{border-color:var(--_disabled-outline-color);opacity:var(--_disabled-outline-opacity)}@media(forced-colors: active){.button:disabled .button__outline{opacity:1}}.button__outline,.button__ripple{border-width:var(--_outline-width)}.button__ripple{inline-size:calc(100% - 2*var(--_outline-width));block-size:calc(100% - 2*var(--_outline-width));border-style:solid;border-color:rgba(0,0,0,0)}/*# sourceMappingURL=outlined-styles.css.map */
`;var Ft=class extends ht{};Ft.styles=[Ce,Qi];Ft=l([_("md-outlined-button")],Ft);var $=class extends g{constructor(){super(...arguments),this.disabled=!1,this.error=!1,this.focused=!1,this.label="",this.populated=!1,this.required=!1,this.resizable=!1,this.supportingText="",this.errorText="",this.count=-1,this.max=-1,this.hasStart=!1,this.hasEnd=!1,this.isAnimating=!1,this.refreshErrorAlert=!1,this.disableTransitions=!1}get counterText(){return this.count<0||this.max<0?"":`${this.count} / ${this.max}`}get supportingOrErrorText(){return this.error&&this.errorText?this.errorText:this.supportingText}reannounceError(){this.refreshErrorAlert=!0}update(e){e.has("disabled")&&e.get("disabled")!==void 0&&(this.disableTransitions=!0),this.disabled&&this.focused&&(e.set("focused",!0),this.focused=!1),this.animateLabelIfNeeded({wasFocused:e.get("focused"),wasPopulated:e.get("populated")}),super.update(e)}render(){let e=this.renderLabel(!0),t=this.renderLabel(!1),i=this.renderOutline?.(e),o={disabled:this.disabled,"disable-transitions":this.disableTransitions,error:this.error&&!this.disabled,focused:this.focused,"with-start":this.hasStart,"with-end":this.hasEnd,populated:this.populated,resizable:this.resizable,required:this.required,"no-label":!this.label};return h`
      <div class="field ${R(o)}">
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
                ${i?c:e}
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
    `}updated(e){(e.has("supportingText")||e.has("errorText")||e.has("count")||e.has("max"))&&this.updateSlottedAriaDescribedBy(),this.refreshErrorAlert&&requestAnimationFrame(()=>{this.refreshErrorAlert=!1}),this.disableTransitions&&requestAnimationFrame(()=>{this.disableTransitions=!1})}renderSupportingText(){let{supportingOrErrorText:e,counterText:t}=this;if(!e&&!t)return c;let i=h`<span>${e}</span>`,o=t?h`<span class="counter">${t}</span>`:c,s=this.error&&this.errorText&&!this.refreshErrorAlert?"alert":c;return h`
      <div class="supporting-text" role=${s}>${i}${o}</div>
      <slot name="aria-describedby" @slotchange=${this.updateSlottedAriaDescribedBy}></slot>
    `}updateSlottedAriaDescribedBy(){for(let e of this.slottedAriaDescribedBy)et(h`${this.supportingOrErrorText} ${this.counterText}`,e),e.setAttribute("hidden","")}renderLabel(e){if(!this.label)return c;let t;e?t=this.focused||this.populated||this.isAnimating:t=!this.focused&&!this.populated&&!this.isAnimating;let i={hidden:!t,floating:e,resting:!e},o=`${this.label}${this.required?"*":""}`;return h`
      <span class="label ${R(i)}"
        aria-hidden=${!t}
      >${o}</span>
    `}animateLabelIfNeeded({wasFocused:e,wasPopulated:t}){if(!this.label)return;e??(e=this.focused),t??(t=this.populated);let i=e||t,o=this.focused||this.populated;i!==o&&(this.isAnimating=!0,this.labelAnimation?.cancel(),this.labelAnimation=this.floatingLabelEl?.animate(this.getLabelKeyframes(),{duration:150,easing:q.STANDARD}),this.labelAnimation?.addEventListener("finish",()=>{this.isAnimating=!1}))}getLabelKeyframes(){let{floatingLabelEl:e,restingLabelEl:t}=this;if(!e||!t)return[];let{x:i,y:o,height:a}=e.getBoundingClientRect(),{x:s,y:d,height:p}=t.getBoundingClientRect(),f=e.scrollWidth,v=t.scrollWidth,m=v/f,y=s-i,E=d-o+Math.round((p-a*m)/2),P=`translateX(${y}px) translateY(${E}px) scale(${m})`,S="translateX(0) translateY(0) scale(1)",z=t.clientWidth,A=v>z?`${z/m}px`:"";return this.focused||this.populated?[{transform:P,width:A},{transform:S,width:A}]:[{transform:S,width:A},{transform:P,width:A}]}getSurfacePositionClientRect(){return this.containerEl.getBoundingClientRect()}};l([n({type:Boolean})],$.prototype,"disabled",void 0);l([n({type:Boolean})],$.prototype,"error",void 0);l([n({type:Boolean})],$.prototype,"focused",void 0);l([n()],$.prototype,"label",void 0);l([n({type:Boolean})],$.prototype,"populated",void 0);l([n({type:Boolean})],$.prototype,"required",void 0);l([n({type:Boolean})],$.prototype,"resizable",void 0);l([n({attribute:"supporting-text"})],$.prototype,"supportingText",void 0);l([n({attribute:"error-text"})],$.prototype,"errorText",void 0);l([n({type:Number})],$.prototype,"count",void 0);l([n({type:Number})],$.prototype,"max",void 0);l([n({type:Boolean,attribute:"has-start"})],$.prototype,"hasStart",void 0);l([n({type:Boolean,attribute:"has-end"})],$.prototype,"hasEnd",void 0);l([U({slot:"aria-describedby"})],$.prototype,"slottedAriaDescribedBy",void 0);l([w()],$.prototype,"isAnimating",void 0);l([w()],$.prototype,"refreshErrorAlert",void 0);l([w()],$.prototype,"disableTransitions",void 0);l([b(".label.floating")],$.prototype,"floatingLabelEl",void 0);l([b(".label.resting")],$.prototype,"restingLabelEl",void 0);l([b(".container")],$.prototype,"containerEl",void 0);var ft=class extends ${renderBackground(){return h`
      <div class="background"></div>
      <div class="state-layer"></div>
    `}renderIndicator(){return h`<div class="active-indicator"></div>`}};var er=u`:host{--_active-indicator-color: var(--md-filled-field-active-indicator-color, var(--md-sys-color-on-surface-variant, #49454f));--_active-indicator-height: var(--md-filled-field-active-indicator-height, 1px);--_bottom-space: var(--md-filled-field-bottom-space, 16px);--_container-color: var(--md-filled-field-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_container-shape-start-start: var( --md-filled-field-container-shape-start-start, var(--md-filled-field-container-shape, 4px) );--_container-shape-start-end: var( --md-filled-field-container-shape-start-end, var(--md-filled-field-container-shape, 4px) );--_container-shape-end-end: var( --md-filled-field-container-shape-end-end, var(--md-filled-field-container-shape, 0px) );--_container-shape-end-start: var( --md-filled-field-container-shape-end-start, var(--md-filled-field-container-shape, 0px) );--_content-color: var(--md-filled-field-content-color, var(--md-sys-color-on-surface, #1d1b20));--_content-font: var(--md-filled-field-content-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_content-line-height: var(--md-filled-field-content-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_content-size: var(--md-filled-field-content-size, var(--md-sys-typescale-body-large-size, 1rem));--_content-weight: var(--md-filled-field-content-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_disabled-active-indicator-color: var(--md-filled-field-disabled-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-active-indicator-height: var(--md-filled-field-disabled-active-indicator-height, 1px);--_disabled-active-indicator-opacity: var(--md-filled-field-disabled-active-indicator-opacity, 0.38);--_disabled-container-color: var(--md-filled-field-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-opacity: var(--md-filled-field-disabled-container-opacity, 0.04);--_disabled-content-color: var(--md-filled-field-disabled-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-content-opacity: var(--md-filled-field-disabled-content-opacity, 0.38);--_disabled-label-text-color: var(--md-filled-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-field-disabled-label-text-opacity, 0.38);--_disabled-leading-content-color: var(--md-filled-field-disabled-leading-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-content-opacity: var(--md-filled-field-disabled-leading-content-opacity, 0.38);--_disabled-supporting-text-color: var(--md-filled-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-filled-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-content-color: var(--md-filled-field-disabled-trailing-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-content-opacity: var(--md-filled-field-disabled-trailing-content-opacity, 0.38);--_error-active-indicator-color: var(--md-filled-field-error-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-content-color: var(--md-filled-field-error-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-active-indicator-color: var(--md-filled-field-error-focus-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-focus-content-color: var(--md-filled-field-error-focus-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-label-text-color: var(--md-filled-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-content-color: var(--md-filled-field-error-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-supporting-text-color: var(--md-filled-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-content-color: var(--md-filled-field-error-focus-trailing-content-color, var(--md-sys-color-error, #b3261e));--_error-hover-active-indicator-color: var(--md-filled-field-error-hover-active-indicator-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-content-color: var(--md-filled-field-error-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-filled-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-content-color: var(--md-filled-field-error-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-state-layer-color: var(--md-filled-field-error-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-state-layer-opacity: var(--md-filled-field-error-hover-state-layer-opacity, 0.08);--_error-hover-supporting-text-color: var(--md-filled-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-content-color: var(--md-filled-field-error-hover-trailing-content-color, var(--md-sys-color-on-error-container, #410e0b));--_error-label-text-color: var(--md-filled-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-content-color: var(--md-filled-field-error-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-supporting-text-color: var(--md-filled-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-content-color: var(--md-filled-field-error-trailing-content-color, var(--md-sys-color-error, #b3261e));--_focus-active-indicator-color: var(--md-filled-field-focus-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_focus-active-indicator-height: var(--md-filled-field-focus-active-indicator-height, 3px);--_focus-content-color: var(--md-filled-field-focus-content-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-filled-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-content-color: var(--md-filled-field-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-supporting-text-color: var(--md-filled-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-content-color: var(--md-filled-field-focus-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-active-indicator-color: var(--md-filled-field-hover-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-active-indicator-height: var(--md-filled-field-hover-active-indicator-height, 1px);--_hover-content-color: var(--md-filled-field-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-filled-field-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-leading-content-color: var(--md-filled-field-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-filled-field-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-filled-field-hover-state-layer-opacity, 0.08);--_hover-supporting-text-color: var(--md-filled-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-content-color: var(--md-filled-field-hover-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-color: var(--md-filled-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-filled-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-populated-line-height: var(--md-filled-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-filled-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-filled-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-filled-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-content-color: var(--md-filled-field-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-space: var(--md-filled-field-leading-space, 16px);--_supporting-text-color: var(--md-filled-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-filled-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-leading-space: var(--md-filled-field-supporting-text-leading-space, 16px);--_supporting-text-line-height: var(--md-filled-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-filled-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-top-space: var(--md-filled-field-supporting-text-top-space, 4px);--_supporting-text-trailing-space: var(--md-filled-field-supporting-text-trailing-space, 16px);--_supporting-text-weight: var(--md-filled-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_top-space: var(--md-filled-field-top-space, 16px);--_trailing-content-color: var(--md-filled-field-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-space: var(--md-filled-field-trailing-space, 16px);--_with-label-bottom-space: var(--md-filled-field-with-label-bottom-space, 8px);--_with-label-top-space: var(--md-filled-field-with-label-top-space, 8px)}.background,.state-layer{border-radius:inherit;inset:0;pointer-events:none;position:absolute}.background{background:var(--_container-color)}.state-layer{visibility:hidden}.field:not(.disabled):hover .state-layer{visibility:visible}.label.floating{position:absolute;top:var(--_with-label-top-space)}.field:not(.with-start) .label-wrapper{margin-inline-start:var(--_leading-space)}.field:not(.with-end) .label-wrapper{margin-inline-end:var(--_trailing-space)}.active-indicator{inset:auto 0 0 0;pointer-events:none;position:absolute;width:100%}.active-indicator::before,.active-indicator::after{border-bottom:var(--_active-indicator-height) solid var(--_active-indicator-color);inset:auto 0 0 0;content:"";position:absolute;width:100%}.active-indicator::after{opacity:0;transition:opacity 150ms cubic-bezier(0.2, 0, 0, 1)}.focused .active-indicator::after{opacity:1}.field:not(.with-start) .content ::slotted(*){padding-inline-start:var(--_leading-space)}.field:not(.with-end) .content ::slotted(*){padding-inline-end:var(--_trailing-space)}.field:not(.no-label) .content ::slotted(:not(textarea)){padding-bottom:var(--_with-label-bottom-space);padding-top:calc(var(--_with-label-top-space) + var(--_label-text-populated-line-height))}.field:not(.no-label) .content ::slotted(textarea){margin-bottom:var(--_with-label-bottom-space);margin-top:calc(var(--_with-label-top-space) + var(--_label-text-populated-line-height))}:hover .active-indicator::before{border-bottom-color:var(--_hover-active-indicator-color);border-bottom-width:var(--_hover-active-indicator-height)}.active-indicator::after{border-bottom-color:var(--_focus-active-indicator-color);border-bottom-width:var(--_focus-active-indicator-height)}:hover .state-layer{background:var(--_hover-state-layer-color);opacity:var(--_hover-state-layer-opacity)}.disabled .active-indicator::before{border-bottom-color:var(--_disabled-active-indicator-color);border-bottom-width:var(--_disabled-active-indicator-height);opacity:var(--_disabled-active-indicator-opacity)}.disabled .background{background:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}.error .active-indicator::before{border-bottom-color:var(--_error-active-indicator-color)}.error:hover .active-indicator::before{border-bottom-color:var(--_error-hover-active-indicator-color)}.error:hover .state-layer{background:var(--_error-hover-state-layer-color);opacity:var(--_error-hover-state-layer-opacity)}.error .active-indicator::after{border-bottom-color:var(--_error-focus-active-indicator-color)}.resizable .container{bottom:var(--_focus-active-indicator-height);clip-path:inset(var(--_focus-active-indicator-height) 0 0 0)}.resizable .container>*{top:var(--_focus-active-indicator-height)}/*# sourceMappingURL=filled-styles.css.map */
`;var tr=u`:host{display:inline-flex;resize:both}.field{display:flex;flex:1;flex-direction:column;writing-mode:horizontal-tb;max-width:100%}.container-overflow{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start);display:flex;height:100%;position:relative}.container{align-items:center;border-radius:inherit;display:flex;flex:1;max-height:100%;min-height:100%;min-width:min-content;position:relative}.field,.container-overflow{resize:inherit}.resizable:not(.disabled) .container{resize:inherit;overflow:hidden}.disabled{pointer-events:none}.start,.middle,.end{display:flex;box-sizing:border-box;height:100%;position:relative}.start{color:var(--_leading-content-color)}.end{color:var(--_trailing-content-color)}.start,.end{align-items:center;justify-content:center}.with-start .start,.with-end .end{min-width:48px}.with-start .start{margin-inline-end:4px}.with-end .end{margin-inline-start:4px}.middle{align-items:stretch;align-self:baseline;flex:1}.content{color:var(--_content-color);display:flex;flex:1;opacity:0;transition:opacity 83ms cubic-bezier(0.2, 0, 0, 1)}.no-label .content,.focused .content,.populated .content{opacity:1;transition-delay:67ms}:is(.disabled,.disable-transitions) .content{transition:none}.content ::slotted(*){all:unset;color:currentColor;font-family:var(--_content-font);font-size:var(--_content-size);line-height:var(--_content-line-height);font-weight:var(--_content-weight);width:100%;white-space:pre-wrap}.content ::slotted(:not(textarea)){padding-top:var(--_top-space);padding-bottom:var(--_bottom-space)}.content ::slotted(textarea){margin-top:var(--_top-space);margin-bottom:var(--_bottom-space)}:hover .content{color:var(--_hover-content-color)}:hover .start{color:var(--_hover-leading-content-color)}:hover .end{color:var(--_hover-trailing-content-color)}.focused .content{color:var(--_focus-content-color)}.focused .start{color:var(--_focus-leading-content-color)}.focused .end{color:var(--_focus-trailing-content-color)}.disabled .content{color:var(--_disabled-content-color)}.disabled.no-label .content,.disabled.focused .content,.disabled.populated .content{opacity:var(--_disabled-content-opacity)}.disabled .start{color:var(--_disabled-leading-content-color);opacity:var(--_disabled-leading-content-opacity)}.disabled .end{color:var(--_disabled-trailing-content-color);opacity:var(--_disabled-trailing-content-opacity)}.error .content{color:var(--_error-content-color)}.error .start{color:var(--_error-leading-content-color)}.error .end{color:var(--_error-trailing-content-color)}.error:hover .content{color:var(--_error-hover-content-color)}.error:hover .start{color:var(--_error-hover-leading-content-color)}.error:hover .end{color:var(--_error-hover-trailing-content-color)}.error.focused .content{color:var(--_error-focus-content-color)}.error.focused .start{color:var(--_error-focus-leading-content-color)}.error.focused .end{color:var(--_error-focus-trailing-content-color)}.label{box-sizing:border-box;color:var(--_label-text-color);overflow:hidden;max-width:100%;text-overflow:ellipsis;white-space:nowrap;z-index:1;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);width:min-content}.label-wrapper{inset:0;pointer-events:none;position:absolute}.label.resting{position:absolute;top:var(--_top-space)}.label.floating{font-size:var(--_label-text-populated-size);line-height:var(--_label-text-populated-line-height);transform-origin:top left}.label.hidden{opacity:0}.no-label .label{display:none}.label-wrapper{inset:0;position:absolute;text-align:initial}:hover .label{color:var(--_hover-label-text-color)}.focused .label{color:var(--_focus-label-text-color)}.disabled .label{color:var(--_disabled-label-text-color)}.disabled .label:not(.hidden){opacity:var(--_disabled-label-text-opacity)}.error .label{color:var(--_error-label-text-color)}.error:hover .label{color:var(--_error-hover-label-text-color)}.error.focused .label{color:var(--_error-focus-label-text-color)}.supporting-text{color:var(--_supporting-text-color);display:flex;font-family:var(--_supporting-text-font);font-size:var(--_supporting-text-size);line-height:var(--_supporting-text-line-height);font-weight:var(--_supporting-text-weight);gap:16px;justify-content:space-between;padding-inline-start:var(--_supporting-text-leading-space);padding-inline-end:var(--_supporting-text-trailing-space);padding-top:var(--_supporting-text-top-space)}.supporting-text :nth-child(2){flex-shrink:0}:hover .supporting-text{color:var(--_hover-supporting-text-color)}.focus .supporting-text{color:var(--_focus-supporting-text-color)}.disabled .supporting-text{color:var(--_disabled-supporting-text-color);opacity:var(--_disabled-supporting-text-opacity)}.error .supporting-text{color:var(--_error-supporting-text-color)}.error:hover .supporting-text{color:var(--_error-hover-supporting-text-color)}.error.focus .supporting-text{color:var(--_error-focus-supporting-text-color)}/*# sourceMappingURL=shared-styles.css.map */
`;var Vt=class extends ft{};Vt.styles=[tr,er];Vt=l([_("md-filled-field")],Vt);var ir=u`@media(forced-colors: active){:host{--md-filled-text-field-disabled-active-indicator-color: GrayText;--md-filled-text-field-disabled-active-indicator-opacity: 1;--md-filled-text-field-disabled-input-text-color: GrayText;--md-filled-text-field-disabled-input-text-opacity: 1;--md-filled-text-field-disabled-label-text-color: GrayText;--md-filled-text-field-disabled-label-text-opacity: 1;--md-filled-text-field-disabled-leading-icon-color: GrayText;--md-filled-text-field-disabled-leading-icon-opacity: 1;--md-filled-text-field-disabled-supporting-text-color: GrayText;--md-filled-text-field-disabled-supporting-text-opacity: 1;--md-filled-text-field-disabled-trailing-icon-color: GrayText;--md-filled-text-field-disabled-trailing-icon-opacity: 1}}/*# sourceMappingURL=filled-forced-colors-styles.css.map */
`;var rr=u`:host{--_leading-space: var(--md-filled-text-field-leading-space, 16px);--_trailing-space: var(--md-filled-text-field-trailing-space, 16px);--_top-space: var(--md-filled-text-field-top-space, 16px);--_bottom-space: var(--md-filled-text-field-bottom-space, 16px);--_input-text-prefix-trailing-space: var(--md-filled-text-field-input-text-prefix-trailing-space, 2px);--_input-text-suffix-leading-space: var(--md-filled-text-field-input-text-suffix-leading-space, 2px);--_with-label-top-space: var(--md-filled-text-field-with-label-top-space, 8px);--_with-label-bottom-space: var(--md-filled-text-field-with-label-bottom-space, 8px);--_focus-caret-color: var(--md-filled-text-field-focus-caret-color, var(--md-sys-color-primary, #6750a4));--_active-indicator-color: var(--md-filled-text-field-active-indicator-color, var(--md-sys-color-on-surface-variant, #49454f));--_active-indicator-height: var(--md-filled-text-field-active-indicator-height, 1px);--_caret-color: var(--md-filled-text-field-caret-color, var(--md-sys-color-primary, #6750a4));--_container-color: var(--md-filled-text-field-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_container-shape-start-start: var( --md-filled-text-field-container-shape-start-start, var(--md-filled-text-field-container-shape, 4px) );--_container-shape-start-end: var( --md-filled-text-field-container-shape-start-end, var(--md-filled-text-field-container-shape, 4px) );--_container-shape-end-end: var( --md-filled-text-field-container-shape-end-end, var(--md-filled-text-field-container-shape, 0px) );--_container-shape-end-start: var( --md-filled-text-field-container-shape-end-start, var(--md-filled-text-field-container-shape, 0px) );--_disabled-active-indicator-color: var(--md-filled-text-field-disabled-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-active-indicator-height: var(--md-filled-text-field-disabled-active-indicator-height, 1px);--_disabled-active-indicator-opacity: var(--md-filled-text-field-disabled-active-indicator-opacity, 0.38);--_disabled-container-color: var(--md-filled-text-field-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-opacity: var(--md-filled-text-field-disabled-container-opacity, 0.04);--_disabled-input-text-color: var(--md-filled-text-field-disabled-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-input-text-opacity: var(--md-filled-text-field-disabled-input-text-opacity, 0.38);--_disabled-label-text-color: var(--md-filled-text-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-text-field-disabled-label-text-opacity, 0.38);--_disabled-leading-icon-color: var(--md-filled-text-field-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-filled-text-field-disabled-leading-icon-opacity, 0.38);--_disabled-supporting-text-color: var(--md-filled-text-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-filled-text-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-icon-color: var(--md-filled-text-field-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-icon-opacity: var(--md-filled-text-field-disabled-trailing-icon-opacity, 0.38);--_error-active-indicator-color: var(--md-filled-text-field-error-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-focus-active-indicator-color: var(--md-filled-text-field-error-focus-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-focus-caret-color: var(--md-filled-text-field-error-focus-caret-color, var(--md-sys-color-error, #b3261e));--_error-focus-input-text-color: var(--md-filled-text-field-error-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-label-text-color: var(--md-filled-text-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-icon-color: var(--md-filled-text-field-error-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-supporting-text-color: var(--md-filled-text-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-icon-color: var(--md-filled-text-field-error-focus-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_error-hover-active-indicator-color: var(--md-filled-text-field-error-hover-active-indicator-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-input-text-color: var(--md-filled-text-field-error-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-filled-text-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-icon-color: var(--md-filled-text-field-error-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-state-layer-color: var(--md-filled-text-field-error-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-state-layer-opacity: var(--md-filled-text-field-error-hover-state-layer-opacity, 0.08);--_error-hover-supporting-text-color: var(--md-filled-text-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-icon-color: var(--md-filled-text-field-error-hover-trailing-icon-color, var(--md-sys-color-on-error-container, #410e0b));--_error-input-text-color: var(--md-filled-text-field-error-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-label-text-color: var(--md-filled-text-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-icon-color: var(--md-filled-text-field-error-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-supporting-text-color: var(--md-filled-text-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-icon-color: var(--md-filled-text-field-error-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_focus-active-indicator-color: var(--md-filled-text-field-focus-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_focus-active-indicator-height: var(--md-filled-text-field-focus-active-indicator-height, 3px);--_focus-input-text-color: var(--md-filled-text-field-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-filled-text-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-icon-color: var(--md-filled-text-field-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-supporting-text-color: var(--md-filled-text-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-icon-color: var(--md-filled-text-field-focus-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-active-indicator-color: var(--md-filled-text-field-hover-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-active-indicator-height: var(--md-filled-text-field-hover-active-indicator-height, 1px);--_hover-input-text-color: var(--md-filled-text-field-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-filled-text-field-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-leading-icon-color: var(--md-filled-text-field-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-filled-text-field-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-filled-text-field-hover-state-layer-opacity, 0.08);--_hover-supporting-text-color: var(--md-filled-text-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-icon-color: var(--md-filled-text-field-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-color: var(--md-filled-text-field-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_input-text-font: var(--md-filled-text-field-input-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_input-text-line-height: var(--md-filled-text-field-input-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_input-text-placeholder-color: var(--md-filled-text-field-input-text-placeholder-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-prefix-color: var(--md-filled-text-field-input-text-prefix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-size: var(--md-filled-text-field-input-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_input-text-suffix-color: var(--md-filled-text-field-input-text-suffix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-weight: var(--md-filled-text-field-input-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_label-text-color: var(--md-filled-text-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-filled-text-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-text-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-populated-line-height: var(--md-filled-text-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-filled-text-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-filled-text-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-filled-text-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-icon-color: var(--md-filled-text-field-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-icon-size: var(--md-filled-text-field-leading-icon-size, 24px);--_supporting-text-color: var(--md-filled-text-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-filled-text-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-line-height: var(--md-filled-text-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-filled-text-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-weight: var(--md-filled-text-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_trailing-icon-color: var(--md-filled-text-field-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-icon-size: var(--md-filled-text-field-trailing-icon-size, 24px);--md-filled-field-active-indicator-color: var(--_active-indicator-color);--md-filled-field-active-indicator-height: var(--_active-indicator-height);--md-filled-field-bottom-space: var(--_bottom-space);--md-filled-field-container-color: var(--_container-color);--md-filled-field-container-shape-end-end: var(--_container-shape-end-end);--md-filled-field-container-shape-end-start: var(--_container-shape-end-start);--md-filled-field-container-shape-start-end: var(--_container-shape-start-end);--md-filled-field-container-shape-start-start: var(--_container-shape-start-start);--md-filled-field-content-color: var(--_input-text-color);--md-filled-field-content-font: var(--_input-text-font);--md-filled-field-content-line-height: var(--_input-text-line-height);--md-filled-field-content-size: var(--_input-text-size);--md-filled-field-content-weight: var(--_input-text-weight);--md-filled-field-disabled-active-indicator-color: var(--_disabled-active-indicator-color);--md-filled-field-disabled-active-indicator-height: var(--_disabled-active-indicator-height);--md-filled-field-disabled-active-indicator-opacity: var(--_disabled-active-indicator-opacity);--md-filled-field-disabled-container-color: var(--_disabled-container-color);--md-filled-field-disabled-container-opacity: var(--_disabled-container-opacity);--md-filled-field-disabled-content-color: var(--_disabled-input-text-color);--md-filled-field-disabled-content-opacity: var(--_disabled-input-text-opacity);--md-filled-field-disabled-label-text-color: var(--_disabled-label-text-color);--md-filled-field-disabled-label-text-opacity: var(--_disabled-label-text-opacity);--md-filled-field-disabled-leading-content-color: var(--_disabled-leading-icon-color);--md-filled-field-disabled-leading-content-opacity: var(--_disabled-leading-icon-opacity);--md-filled-field-disabled-supporting-text-color: var(--_disabled-supporting-text-color);--md-filled-field-disabled-supporting-text-opacity: var(--_disabled-supporting-text-opacity);--md-filled-field-disabled-trailing-content-color: var(--_disabled-trailing-icon-color);--md-filled-field-disabled-trailing-content-opacity: var(--_disabled-trailing-icon-opacity);--md-filled-field-error-active-indicator-color: var(--_error-active-indicator-color);--md-filled-field-error-content-color: var(--_error-input-text-color);--md-filled-field-error-focus-active-indicator-color: var(--_error-focus-active-indicator-color);--md-filled-field-error-focus-content-color: var(--_error-focus-input-text-color);--md-filled-field-error-focus-label-text-color: var(--_error-focus-label-text-color);--md-filled-field-error-focus-leading-content-color: var(--_error-focus-leading-icon-color);--md-filled-field-error-focus-supporting-text-color: var(--_error-focus-supporting-text-color);--md-filled-field-error-focus-trailing-content-color: var(--_error-focus-trailing-icon-color);--md-filled-field-error-hover-active-indicator-color: var(--_error-hover-active-indicator-color);--md-filled-field-error-hover-content-color: var(--_error-hover-input-text-color);--md-filled-field-error-hover-label-text-color: var(--_error-hover-label-text-color);--md-filled-field-error-hover-leading-content-color: var(--_error-hover-leading-icon-color);--md-filled-field-error-hover-state-layer-color: var(--_error-hover-state-layer-color);--md-filled-field-error-hover-state-layer-opacity: var(--_error-hover-state-layer-opacity);--md-filled-field-error-hover-supporting-text-color: var(--_error-hover-supporting-text-color);--md-filled-field-error-hover-trailing-content-color: var(--_error-hover-trailing-icon-color);--md-filled-field-error-label-text-color: var(--_error-label-text-color);--md-filled-field-error-leading-content-color: var(--_error-leading-icon-color);--md-filled-field-error-supporting-text-color: var(--_error-supporting-text-color);--md-filled-field-error-trailing-content-color: var(--_error-trailing-icon-color);--md-filled-field-focus-active-indicator-color: var(--_focus-active-indicator-color);--md-filled-field-focus-active-indicator-height: var(--_focus-active-indicator-height);--md-filled-field-focus-content-color: var(--_focus-input-text-color);--md-filled-field-focus-label-text-color: var(--_focus-label-text-color);--md-filled-field-focus-leading-content-color: var(--_focus-leading-icon-color);--md-filled-field-focus-supporting-text-color: var(--_focus-supporting-text-color);--md-filled-field-focus-trailing-content-color: var(--_focus-trailing-icon-color);--md-filled-field-hover-active-indicator-color: var(--_hover-active-indicator-color);--md-filled-field-hover-active-indicator-height: var(--_hover-active-indicator-height);--md-filled-field-hover-content-color: var(--_hover-input-text-color);--md-filled-field-hover-label-text-color: var(--_hover-label-text-color);--md-filled-field-hover-leading-content-color: var(--_hover-leading-icon-color);--md-filled-field-hover-state-layer-color: var(--_hover-state-layer-color);--md-filled-field-hover-state-layer-opacity: var(--_hover-state-layer-opacity);--md-filled-field-hover-supporting-text-color: var(--_hover-supporting-text-color);--md-filled-field-hover-trailing-content-color: var(--_hover-trailing-icon-color);--md-filled-field-label-text-color: var(--_label-text-color);--md-filled-field-label-text-font: var(--_label-text-font);--md-filled-field-label-text-line-height: var(--_label-text-line-height);--md-filled-field-label-text-populated-line-height: var(--_label-text-populated-line-height);--md-filled-field-label-text-populated-size: var(--_label-text-populated-size);--md-filled-field-label-text-size: var(--_label-text-size);--md-filled-field-label-text-weight: var(--_label-text-weight);--md-filled-field-leading-content-color: var(--_leading-icon-color);--md-filled-field-leading-space: var(--_leading-space);--md-filled-field-supporting-text-color: var(--_supporting-text-color);--md-filled-field-supporting-text-font: var(--_supporting-text-font);--md-filled-field-supporting-text-line-height: var(--_supporting-text-line-height);--md-filled-field-supporting-text-size: var(--_supporting-text-size);--md-filled-field-supporting-text-weight: var(--_supporting-text-weight);--md-filled-field-top-space: var(--_top-space);--md-filled-field-trailing-content-color: var(--_trailing-icon-color);--md-filled-field-trailing-space: var(--_trailing-space);--md-filled-field-with-label-bottom-space: var(--_with-label-bottom-space);--md-filled-field-with-label-top-space: var(--_with-label-top-space)}/*# sourceMappingURL=filled-styles.css.map */
`;var{I:tn}=Ri;var or=r=>r.strings===void 0;var ro={},ar=(r,e=ro)=>r._$AH=e;var qt=Ae(class extends ae{constructor(r){if(super(r),r.type!==X.PROPERTY&&r.type!==X.ATTRIBUTE&&r.type!==X.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!or(r))throw Error("`live` bindings can only contain a single expression")}render(r){return r}update(r,[e]){if(e===N||e===c)return e;let t=r.element,i=r.name;if(r.type===X.PROPERTY){if(e===t[i])return N}else if(r.type===X.BOOLEAN_ATTRIBUTE){if(!!e===t.hasAttribute(i))return N}else if(r.type===X.ATTRIBUTE&&t.getAttribute(i)===e+"")return N;return ar(r),e}});var lr="important",oo=" !"+lr,Ne=Ae(class extends ae{constructor(r){var e;if(super(r),r.type!==X.ATTRIBUTE||r.name!=="style"||((e=r.strings)===null||e===void 0?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(r){return Object.keys(r).reduce((e,t)=>{let i=r[t];return i==null?e:e+`${t=t.includes("-")?t:t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(r,[e]){let{style:t}=r.element;if(this.ht===void 0){this.ht=new Set;for(let i in e)this.ht.add(i);return this.render(e)}this.ht.forEach(i=>{e[i]==null&&(this.ht.delete(i),i.includes("-")?t.removeProperty(i):t[i]="")});for(let i in e){let o=e[i];if(o!=null){this.ht.add(i);let a=typeof o=="string"&&o.endsWith(oo);i.includes("-")||a?t.setProperty(i,a?o.slice(0,-11):o,a?lr:""):t[i]=o}}return N}});var sr={fromAttribute(r){return r??""},toAttribute(r){return r||null}};var x=class extends g{constructor(){super(...arguments),this.disabled=!1,this.error=!1,this.errorText="",this.label="",this.required=!1,this.value="",this.prefixText="",this.suffixText="",this.hasLeadingIcon=!1,this.hasTrailingIcon=!1,this.supportingText="",this.textDirection="",this.rows=2,this.inputMode="",this.max="",this.maxLength=-1,this.min="",this.minLength=-1,this.pattern="",this.placeholder="",this.readOnly=!1,this.step="",this.type="text",this.autocomplete="",this.dirty=!1,this.focused=!1,this.nativeError=!1,this.nativeErrorText="",this.hasCustomValidityError=!1,this.internals=this.attachInternals()}get form(){return this.internals.form}get labels(){return this.internals.labels}get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get selectionDirection(){return this.getInputOrTextarea().selectionDirection}set selectionDirection(e){this.getInputOrTextarea().selectionDirection=e}get selectionEnd(){return this.getInputOrTextarea().selectionEnd}set selectionEnd(e){this.getInputOrTextarea().selectionEnd=e}get selectionStart(){return this.getInputOrTextarea().selectionStart}set selectionStart(e){this.getInputOrTextarea().selectionStart=e}get validationMessage(){return this.syncValidity(),this.internals.validationMessage}get validity(){return this.syncValidity(),this.internals.validity}get valueAsNumber(){let e=this.getInput();return e?e.valueAsNumber:NaN}set valueAsNumber(e){let t=this.getInput();t&&(t.valueAsNumber=e,this.value=t.value)}get valueAsDate(){let e=this.getInput();return e?e.valueAsDate:null}set valueAsDate(e){let t=this.getInput();t&&(t.valueAsDate=e,this.value=t.value)}get willValidate(){return this.syncValidity(),this.internals.willValidate}get hasError(){return this.error||this.nativeError}checkValidity(){return this.syncValidity(),this.internals.checkValidity()}reportValidity(){let e;this.addEventListener("invalid",o=>{e=o},{once:!0});let t=this.checkValidity();if(e?.defaultPrevented)return t;let i=this.getErrorText();return this.nativeError=!t,this.nativeErrorText=this.validationMessage,i===this.getErrorText()&&this.field?.reannounceError(),t}select(){this.getInputOrTextarea().select()}setCustomValidity(e){this.hasCustomValidityError=!!e,this.internals.setValidity({customError:!!e},e,this.getInputOrTextarea())}setRangeText(...e){this.getInputOrTextarea().setRangeText(...e),this.value=this.getInputOrTextarea().value}setSelectionRange(e,t,i){this.getInputOrTextarea().setSelectionRange(e,t,i)}stepDown(e){let t=this.getInput();t&&(t.stepDown(e),this.value=t.value)}stepUp(e){let t=this.getInput();t&&(t.stepUp(e),this.value=t.value)}reset(){this.dirty=!1,this.value=this.getAttribute("value")??"",this.nativeError=!1,this.nativeErrorText=""}attributeChangedCallback(e,t,i){e==="value"&&this.dirty||super.attributeChangedCallback(e,t,i)}render(){let e={disabled:this.disabled,error:!this.disabled&&this.hasError,textarea:this.type==="textarea"};return h`
       <span class="text-field ${R(e)}">
         ${this.renderField()}
       </span>
     `}updated(e){let t=this.getInputOrTextarea().value;this.value!==t&&(this.value=t),this.internals.setFormValue(t),this.syncValidity()}renderField(){return se`<${this.fieldTag}
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
     `}renderInputOrTextarea(){let e={direction:this.textDirection},t=this.ariaLabel||this.label||c,i=this.autocomplete;if(this.type==="textarea")return h`
        <textarea
          class="input"
          style=${Ne(e)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${t}
          autocomplete=${i||c}
          ?disabled=${this.disabled}
          maxlength=${this.maxLength>-1?this.maxLength:c}
          minlength=${this.minLength>-1?this.minLength:c}
          placeholder=${this.placeholder||c}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          rows=${this.rows}
          .value=${qt(this.value)}
          @change=${this.handleChange}
          @focusin=${this.handleFocusin}
          @focusout=${this.handleFocusout}
          @input=${this.handleInput}
          @select=${this.redispatchEvent}
        ></textarea>
      `;let o=this.renderPrefix(),a=this.renderSuffix(),s=this.inputMode;return h`
      <div class="input-wrapper">
        ${o}
        <input
          class="input"
          style=${Ne(e)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${t}
          autocomplete=${i||c}
          ?disabled=${this.disabled}
          inputmode=${s||c}
          max=${this.max||c}
          maxlength=${this.maxLength>-1?this.maxLength:c}
          min=${this.min||c}
          minlength=${this.minLength>-1?this.minLength:c}
          pattern=${this.pattern||c}
          placeholder=${this.placeholder||c}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          step=${this.step||c}
          type=${this.type}
          .value=${qt(this.value)}
          @change=${this.redispatchEvent}
          @focusin=${this.handleFocusin}
          @focusout=${this.handleFocusout}
          @input=${this.handleInput}
          @select=${this.redispatchEvent}
        >
        ${a}
      </div>
    `}renderPrefix(){return this.renderAffix(this.prefixText,!1)}renderSuffix(){return this.renderAffix(this.suffixText,!0)}renderAffix(e,t){return e?h`<span class="${R({suffix:t,prefix:!t})}">${e}</span>`:c}getErrorText(){return this.error?this.errorText:this.nativeErrorText}handleFocusin(){this.focused=!0}handleFocusout(){this.focused=!1}handleInput(e){this.dirty=!0,this.value=e.target.value,this.syncValidity()}handleChange(e){this.syncValidity(),this.redispatchEvent(e)}redispatchEvent(e){ne(this,e)}getInputOrTextarea(){return this.inputOrTextarea||(this.connectedCallback(),this.scheduleUpdate()),this.isUpdatePending&&this.scheduleUpdate(),this.inputOrTextarea}getInput(){return this.type==="textarea"?null:this.getInputOrTextarea()}syncValidity(){let e=this.getInputOrTextarea();this.hasCustomValidityError?e.setCustomValidity(this.internals.validationMessage):e.setCustomValidity(""),this.internals.setValidity(e.validity,e.validationMessage,this.getInputOrTextarea())}handleIconChange(){this.hasLeadingIcon=this.leadingIcons.length>0,this.hasTrailingIcon=this.trailingIcons.length>0}formResetCallback(){this.reset()}formStateRestoreCallback(e){this.value=e}};H(x);x.shadowRootOptions={...g.shadowRootOptions,delegatesFocus:!0};x.formAssociated=!0;l([n({type:Boolean,reflect:!0})],x.prototype,"disabled",void 0);l([n({type:Boolean,reflect:!0})],x.prototype,"error",void 0);l([n({attribute:"error-text"})],x.prototype,"errorText",void 0);l([n()],x.prototype,"label",void 0);l([n({type:Boolean,reflect:!0})],x.prototype,"required",void 0);l([n()],x.prototype,"value",void 0);l([n({attribute:"prefix-text"})],x.prototype,"prefixText",void 0);l([n({attribute:"suffix-text"})],x.prototype,"suffixText",void 0);l([n({type:Boolean,attribute:"has-leading-icon"})],x.prototype,"hasLeadingIcon",void 0);l([n({type:Boolean,attribute:"has-trailing-icon"})],x.prototype,"hasTrailingIcon",void 0);l([n({attribute:"supporting-text"})],x.prototype,"supportingText",void 0);l([n({attribute:"text-direction"})],x.prototype,"textDirection",void 0);l([n({type:Number})],x.prototype,"rows",void 0);l([n({reflect:!0})],x.prototype,"inputMode",void 0);l([n()],x.prototype,"max",void 0);l([n({type:Number})],x.prototype,"maxLength",void 0);l([n()],x.prototype,"min",void 0);l([n({type:Number})],x.prototype,"minLength",void 0);l([n()],x.prototype,"pattern",void 0);l([n({reflect:!0,converter:sr})],x.prototype,"placeholder",void 0);l([n({type:Boolean,reflect:!0})],x.prototype,"readOnly",void 0);l([n()],x.prototype,"step",void 0);l([n({reflect:!0})],x.prototype,"type",void 0);l([n({reflect:!0})],x.prototype,"autocomplete",void 0);l([w()],x.prototype,"dirty",void 0);l([w()],x.prototype,"focused",void 0);l([w()],x.prototype,"nativeError",void 0);l([w()],x.prototype,"nativeErrorText",void 0);l([b(".input")],x.prototype,"inputOrTextarea",void 0);l([b(".field")],x.prototype,"field",void 0);l([U({slot:"leading-icon"})],x.prototype,"leadingIcons",void 0);l([U({slot:"trailing-icon"})],x.prototype,"trailingIcons",void 0);var ut=class extends x{constructor(){super(...arguments),this.fieldTag=K`md-filled-field`}};var nr=u`:host{display:inline-flex;outline:none;resize:both;-webkit-tap-highlight-color:rgba(0,0,0,0)}.text-field,.field{width:100%}.text-field{display:inline-flex}.field{cursor:text}.disabled .field{cursor:default}.text-field,.textarea .field{resize:inherit}.icon{color:currentColor;display:flex;fill:currentColor}.icon ::slotted(*){display:flex}[hasstart] .icon.leading{font-size:var(--_leading-icon-size);height:var(--_leading-icon-size);width:var(--_leading-icon-size)}[hasend] .icon.trailing{font-size:var(--_trailing-icon-size);height:var(--_trailing-icon-size);width:var(--_trailing-icon-size)}.input-wrapper{display:flex}.input-wrapper>*{all:inherit;padding:0}.input{caret-color:var(--_caret-color);overflow-x:hidden;text-align:inherit}.input::placeholder{color:currentColor;opacity:1}.input::-webkit-calendar-picker-indicator{display:none}.input::-webkit-search-decoration,.input::-webkit-search-cancel-button{display:none}@media(forced-colors: active){.input{background-color:Field}}:focus-within .input{caret-color:var(--_focus-caret-color)}.error:focus-within .input{caret-color:var(--_error-focus-caret-color)}.text-field:not(.disabled) .prefix{color:var(--_input-text-prefix-color)}.text-field:not(.disabled) .suffix{color:var(--_input-text-suffix-color)}.text-field:not(.disabled) .input::placeholder{color:var(--_input-text-placeholder-color)}.prefix,.suffix{text-wrap:nowrap;width:min-content}.prefix{padding-inline-end:var(--_input-text-prefix-trailing-space)}.suffix{padding-inline-start:var(--_input-text-suffix-leading-space)}/*# sourceMappingURL=shared-styles.css.map */
`;var Ht=class extends ut{constructor(){super(...arguments),this.fieldTag=K`md-filled-field`}};Ht.styles=[nr,rr,ir];Ht=l([_("md-filled-text-field")],Ht);var B=class extends g{get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get form(){return this.internals.form}get labels(){return this.internals.labels}get validity(){return this.syncValidity(),this.internals.validity}get validationMessage(){return this.syncValidity(),this.internals.validationMessage}get willValidate(){return this.syncValidity(),this.internals.willValidate}constructor(){super(),this.checked=!1,this.disabled=!1,this.indeterminate=!1,this.required=!1,this.value="on",this.prevChecked=!1,this.prevDisabled=!1,this.prevIndeterminate=!1,this.hasCustomValidityError=!1,this.internals=this.attachInternals(),!1||this.addEventListener("click",e=>{nt(e)&&(this.focus(),st(this.input))})}checkValidity(){return this.syncValidity(),this.internals.checkValidity()}reportValidity(){return this.syncValidity(),this.internals.reportValidity()}setCustomValidity(e){this.hasCustomValidityError=!!e,this.internals.setValidity({customError:!!e},e,this.getInput())}update(e){(e.has("checked")||e.has("disabled")||e.has("indeterminate"))&&(this.prevChecked=e.get("checked")??this.checked,this.prevDisabled=e.get("disabled")??this.disabled,this.prevIndeterminate=e.get("indeterminate")??this.indeterminate);let t=this.checked&&!this.indeterminate,i=String(this.checked);this.internals.setFormValue(t?this.value:null,i),super.update(e)}render(){let e=!this.prevChecked&&!this.prevIndeterminate,t=this.prevChecked&&!this.prevIndeterminate,i=this.prevIndeterminate,o=this.checked&&!this.indeterminate,a=this.indeterminate,s=R({disabled:this.disabled,selected:o||a,unselected:!o&&!a,checked:o,indeterminate:a,"prev-unselected":e,"prev-checked":t,"prev-indeterminate":i,"prev-disabled":this.prevDisabled}),{ariaLabel:d,ariaInvalid:p}=this;return h`
      <div class="container ${s}">
        <input type="checkbox"
          id="input"
          aria-checked=${a?"mixed":c}
          aria-label=${d||c}
          aria-invalid=${p||c}
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
    `}updated(){this.syncValidity()}handleChange(e){let t=e.target;this.checked=t.checked,this.indeterminate=t.indeterminate,ne(this,e)}syncValidity(){let e=this.getInput();this.hasCustomValidityError?e.setCustomValidity(this.internals.validationMessage):e.setCustomValidity(""),this.internals.setValidity(e.validity,e.validationMessage,this.getInput())}getInput(){return this.input||(this.connectedCallback(),this.performUpdate()),this.isUpdatePending&&this.scheduleUpdate(),this.input}formResetCallback(){this.checked=this.hasAttribute("checked")}formStateRestoreCallback(e){this.checked=e==="true"}};H(B);B.shadowRootOptions={...g.shadowRootOptions,delegatesFocus:!0};B.formAssociated=!0;l([n({type:Boolean})],B.prototype,"checked",void 0);l([n({type:Boolean,reflect:!0})],B.prototype,"disabled",void 0);l([n({type:Boolean})],B.prototype,"indeterminate",void 0);l([n({type:Boolean})],B.prototype,"required",void 0);l([n()],B.prototype,"value",void 0);l([w()],B.prototype,"prevChecked",void 0);l([w()],B.prototype,"prevDisabled",void 0);l([w()],B.prototype,"prevIndeterminate",void 0);l([b("input")],B.prototype,"input",void 0);var dr=u`:host{--_container-shape: var(--md-checkbox-container-shape, 2px);--_container-size: var(--md-checkbox-container-size, 18px);--_icon-size: var(--md-checkbox-icon-size, 18px);--_selected-container-color: var(--md-checkbox-selected-container-color, var(--md-sys-color-primary, #6750a4));--_selected-disabled-container-color: var(--md-checkbox-selected-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_selected-disabled-container-opacity: var(--md-checkbox-selected-disabled-container-opacity, 0.38);--_selected-disabled-icon-color: var(--md-checkbox-selected-disabled-icon-color, var(--md-sys-color-surface, #fef7ff));--_selected-focus-container-color: var(--md-checkbox-selected-focus-container-color, var(--md-sys-color-primary, #6750a4));--_selected-focus-icon-color: var(--md-checkbox-selected-focus-icon-color, var(--md-sys-color-on-primary, #fff));--_selected-hover-container-color: var(--md-checkbox-selected-hover-container-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-icon-color: var(--md-checkbox-selected-hover-icon-color, var(--md-sys-color-on-primary, #fff));--_selected-hover-state-layer-color: var(--md-checkbox-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-opacity: var(--md-checkbox-selected-hover-state-layer-opacity, 0.08);--_selected-icon-color: var(--md-checkbox-selected-icon-color, var(--md-sys-color-on-primary, #fff));--_selected-pressed-container-color: var(--md-checkbox-selected-pressed-container-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-icon-color: var(--md-checkbox-selected-pressed-icon-color, var(--md-sys-color-on-primary, #fff));--_selected-pressed-state-layer-color: var(--md-checkbox-selected-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_selected-pressed-state-layer-opacity: var(--md-checkbox-selected-pressed-state-layer-opacity, 0.12);--_state-layer-shape: var(--md-checkbox-state-layer-shape, 9999px);--_state-layer-size: var(--md-checkbox-state-layer-size, 40px);--_disabled-container-opacity: var(--md-checkbox-disabled-container-opacity, 0.38);--_disabled-outline-color: var(--md-checkbox-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-width: var(--md-checkbox-disabled-outline-width, 2px);--_focus-outline-color: var(--md-checkbox-focus-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-outline-width: var(--md-checkbox-focus-outline-width, 2px);--_hover-outline-color: var(--md-checkbox-hover-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-outline-width: var(--md-checkbox-hover-outline-width, 2px);--_hover-state-layer-color: var(--md-checkbox-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-checkbox-hover-state-layer-opacity, 0.08);--_outline-color: var(--md-checkbox-outline-color, var(--md-sys-color-on-surface-variant, #49454f));--_outline-width: var(--md-checkbox-outline-width, 2px);--_pressed-outline-color: var(--md-checkbox-pressed-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-outline-width: var(--md-checkbox-pressed-outline-width, 2px);--_pressed-state-layer-color: var(--md-checkbox-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-checkbox-pressed-state-layer-opacity, 0.12);--_container-shape-start-start: var( --md-checkbox-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-checkbox-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-checkbox-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-checkbox-container-shape-end-start, var(--_container-shape) );border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start);display:inline-flex;height:var(--_container-size);position:relative;vertical-align:top;width:var(--_container-size);-webkit-tap-highlight-color:rgba(0,0,0,0)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-size))/2)}md-focus-ring{height:44px;inset:unset;width:44px}input{appearance:none;height:48px;margin:0;opacity:0;outline:none;position:absolute;width:48px;z-index:1}:host([touch-target=none]) input{height:100%;width:100%}.container{border-radius:inherit;display:flex;height:100%;place-content:center;place-items:center;position:relative;width:100%}.outline,.background,.icon{inset:0;position:absolute}.outline,.background{border-radius:inherit}.outline{border-color:var(--_outline-color);border-style:solid;border-width:var(--_outline-width);box-sizing:border-box}.background{background-color:var(--_selected-container-color)}.background,.icon{opacity:0;transition-duration:150ms,50ms;transition-property:transform,opacity;transition-timing-function:cubic-bezier(0.3, 0, 0.8, 0.15),linear;transform:scale(0.6)}:where(.selected) :is(.background,.icon){opacity:1;transition-duration:350ms,50ms;transition-timing-function:cubic-bezier(0.05, 0.7, 0.1, 1),linear;transform:scale(1)}md-ripple{border-radius:var(--_state-layer-shape);height:var(--_state-layer-size);inset:unset;width:var(--_state-layer-size);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.selected md-ripple{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}.icon{fill:var(--_selected-icon-color);height:var(--_icon-size);width:var(--_icon-size)}.mark.short{height:2px;transition-property:transform,height;width:2px}.mark.long{height:2px;transition-property:transform,width;width:10px}.mark{animation-duration:150ms;animation-timing-function:cubic-bezier(0.3, 0, 0.8, 0.15);transition-duration:150ms;transition-timing-function:cubic-bezier(0.3, 0, 0.8, 0.15)}.selected .mark{animation-duration:350ms;animation-timing-function:cubic-bezier(0.05, 0.7, 0.1, 1);transition-duration:350ms;transition-timing-function:cubic-bezier(0.05, 0.7, 0.1, 1)}.checked .mark,.prev-checked.unselected .mark{transform:scaleY(-1) translate(7px, -14px) rotate(45deg)}.checked .mark.short,.prev-checked.unselected .mark.short{height:5.6568542495px}.checked .mark.long,.prev-checked.unselected .mark.long{width:11.313708499px}.indeterminate .mark,.prev-indeterminate.unselected .mark{transform:scaleY(-1) translate(4px, -10px) rotate(0deg)}.prev-unselected .mark{transition-property:none}.prev-unselected.checked .mark.long{animation-name:prev-unselected-to-checked}@keyframes prev-unselected-to-checked{from{width:0}}:where(:hover) .outline{border-color:var(--_hover-outline-color);border-width:var(--_hover-outline-width)}:where(:hover) .background{background:var(--_selected-hover-container-color)}:where(:hover) .icon{fill:var(--_selected-hover-icon-color)}:where(:focus-within) .outline{border-color:var(--_focus-outline-color);border-width:var(--_focus-outline-width)}:where(:focus-within) .background{background:var(--_selected-focus-container-color)}:where(:focus-within) .icon{fill:var(--_selected-focus-icon-color)}:where(:active) .outline{border-color:var(--_pressed-outline-color);border-width:var(--_pressed-outline-width)}:where(:active) .background{background:var(--_selected-pressed-container-color)}:where(:active) .icon{fill:var(--_selected-pressed-icon-color)}:where(.disabled,.prev-disabled) :is(.background,.icon,.mark){animation-duration:0s;transition-duration:0s}:where(.disabled) .outline{border-color:var(--_disabled-outline-color);border-width:var(--_disabled-outline-width);opacity:var(--_disabled-container-opacity)}:where(.selected.disabled) .outline{visibility:hidden}:where(.selected.disabled) .background{background:var(--_selected-disabled-container-color);opacity:var(--_selected-disabled-container-opacity)}:where(.disabled) .icon{fill:var(--_selected-disabled-icon-color)}@media(forced-colors: active){.background{background-color:CanvasText}.selected.disabled .background{background-color:GrayText;opacity:1}.outline{border-color:CanvasText}.disabled .outline{border-color:GrayText;opacity:1}.icon{fill:Canvas}}/*# sourceMappingURL=checkbox-styles.css.map */
`;var jt=class extends B{};jt.styles=[dr];jt=l([_("md-checkbox")],jt);var mt=class extends g{render(){return h`<slot></slot>`}connectedCallback(){if(super.connectedCallback(),this.getAttribute("aria-hidden")==="false"){this.removeAttribute("aria-hidden");return}this.setAttribute("aria-hidden","true")}};var cr=u`:host{font-size:24px;width:24px;height:24px;color:inherit;font-variation-settings:inherit;font-weight:400;font-family:var(--md-icon-font, Material Symbols Outlined);display:inline-flex;font-style:normal;line-height:1;overflow:hidden;letter-spacing:normal;text-transform:none;user-select:none;white-space:nowrap;word-wrap:normal;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale}::slotted(svg){fill:currentColor}::slotted(*){height:100%;width:100%}/*# sourceMappingURL=icon-styles.css.map */
`;var Kt=class extends mt{};Kt.styles=[cr];Kt=l([_("md-icon")],Kt);var pr=u`@media(forced-colors: active){:host{--md-filled-select-text-field-disabled-active-indicator-color: GrayText;--md-filled-select-text-field-disabled-active-indicator-opacity: 1;--md-filled-select-text-field-disabled-input-text-color: GrayText;--md-filled-select-text-field-disabled-input-text-opacity: 1;--md-filled-select-text-field-disabled-label-text-color: GrayText;--md-filled-select-text-field-disabled-label-text-opacity: 1;--md-filled-select-text-field-disabled-leading-icon-color: GrayText;--md-filled-select-text-field-disabled-leading-icon-opacity: 1;--md-filled-select-text-field-disabled-supporting-text-color: GrayText;--md-filled-select-text-field-disabled-supporting-text-opacity: 1;--md-filled-select-text-field-disabled-trailing-icon-color: GrayText;--md-filled-select-text-field-disabled-trailing-icon-opacity: 1}}/*# sourceMappingURL=filled-forced-colors-styles.css.map */
`;var hr=u`@media(forced-colors: active){.menu{border-style:solid;border-color:CanvasText;border-width:1px}}/*# sourceMappingURL=forced-colors-styles.css.map */
`;function Gt(r,e=re){let t=Ue(r,e);return t&&(t.tabIndex=0,t.focus()),t}function Wt(r,e=re){let t=Yt(r,e);return t&&(t.tabIndex=0,t.focus()),t}function de(r,e=re){for(let t=0;t<r.length;t++){let i=r[t];if(i.tabIndex===0&&e(i))return{item:i,index:t}}return null}function Ue(r,e=re){for(let t of r)if(e(t))return t;return null}function Yt(r,e=re){for(let t=r.length-1;t>=0;t--){let i=r[t];if(e(i))return i}return null}function ao(r,e,t=re){for(let i=1;i<r.length;i++){let o=(i+e)%r.length,a=r[o];if(t(a))return a}return r[e]?r[e]:null}function lo(r,e,t=re){for(let i=1;i<r.length;i++){let o=(e-i+r.length)%r.length,a=r[o];if(t(a))return a}return r[e]?r[e]:null}function Zt(r,e,t=re){if(e){let i=ao(r,e.index,t);return i&&(i.tabIndex=0,i.focus()),i}else return Gt(r,t)}function Xt(r,e,t=re){if(e){let i=lo(r,e.index,t);return i&&(i.tabIndex=0,i.focus()),i}else return Wt(r,t)}function fr(){return new Event("request-activation",{bubbles:!0,composed:!0})}function re(r){return!r.disabled}var L={ArrowDown:"ArrowDown",ArrowLeft:"ArrowLeft",ArrowUp:"ArrowUp",ArrowRight:"ArrowRight",Home:"Home",End:"End"},Se=class{constructor(e){this.handleKeydown=f=>{let v=f.key;if(f.defaultPrevented||!this.isNavigableKey(v))return;let m=this.items;if(!m.length)return;let y=de(m,this.isActivatable);y&&(y.item.tabIndex=-1),f.preventDefault();let E=this.isRtl(),P=E?L.ArrowRight:L.ArrowLeft,S=E?L.ArrowLeft:L.ArrowRight;switch(v){case L.ArrowDown:case S:Zt(m,y,this.isActivatable);break;case L.ArrowUp:case P:Xt(m,y,this.isActivatable);break;case L.Home:Gt(m,this.isActivatable);break;case L.End:Wt(m,this.isActivatable);break;default:break}},this.onDeactivateItems=()=>{let f=this.items;for(let v of f)this.deactivateItem(v)},this.onRequestActivation=f=>{this.onDeactivateItems();let v=f.target;this.activateItem(v),v.focus()},this.onSlotchange=()=>{let f=this.items,v=!1;for(let y of f){if(!y.disabled&&y.tabIndex>-1&&!v){v=!0,y.tabIndex=0;continue}y.tabIndex=-1}if(v)return;let m=Ue(f,this.isActivatable);m&&(m.tabIndex=0)};let{isItem:t,getPossibleItems:i,isRtl:o,deactivateItem:a,activateItem:s,isNavigableKey:d,isActivatable:p}=e;this.isItem=t,this.getPossibleItems=i,this.isRtl=o,this.deactivateItem=a,this.activateItem=s,this.isNavigableKey=d,this.isActivatable=p}get items(){let e=this.getPossibleItems(),t=[];for(let i of e){if(this.isItem(i)){t.push(i);continue}let a=i.item;a&&this.isItem(a)&&t.push(a)}return t}activateNextItem(){let e=this.items,t=de(e,this.isActivatable);return t&&(t.item.tabIndex=-1),Zt(e,t,this.isActivatable)}activatePreviousItem(){let e=this.items,t=de(e,this.isActivatable);return t&&(t.item.tabIndex=-1),Xt(e,t,this.isActivatable)}};function so(r,e){return new CustomEvent("close-menu",{bubbles:!0,composed:!0,detail:{initiator:r,reason:e,itemPath:[r]}})}var Qt=so;var Jt={SPACE:"Space",ENTER:"Enter"},ei={CLICK_SELECTION:"click-selection",KEYDOWN:"keydown"},no={ESCAPE:"Escape",SPACE:Jt.SPACE,ENTER:Jt.ENTER};function vt(r){return Object.values(no).some(e=>e===r)}function ur(r){return Object.values(Jt).some(e=>e===r)}function Be(r,e){let t=new Event("md-contains",{bubbles:!0,composed:!0}),i=[],o=s=>{i=s.composedPath()};return e.addEventListener("md-contains",o),r.dispatchEvent(t),e.removeEventListener("md-contains",o),i.length>0}var ce={NONE:"none",LIST_ROOT:"list-root",FIRST_ITEM:"first-item",LAST_ITEM:"last-item"};var Fe={END_START:"end-start",END_END:"end-end",START_START:"start-start",START_END:"start-end"},yt=class{constructor(e,t){this.host=e,this.getProperties=t,this.surfaceStylesInternal={display:"none"},this.lastValues={isOpen:!1},this.host.addController(this)}get surfaceStyles(){return this.surfaceStylesInternal}async position(){let{surfaceEl:e,anchorEl:t,anchorCorner:i,surfaceCorner:o,positioning:a,xOffset:s,yOffset:d,repositionStrategy:p}=this.getProperties(),f=i.toLowerCase().trim(),v=o.toLowerCase().trim();if(!e||!t)return;this.surfaceStylesInternal={display:"block",opacity:"0"},this.host.requestUpdate(),await this.host.updateComplete;let m=e.getSurfacePositionClientRect?e.getSurfacePositionClientRect():e.getBoundingClientRect(),y=t.getSurfacePositionClientRect?t.getSurfacePositionClientRect():t.getBoundingClientRect(),[E,P]=v.split("-"),[S,z]=f.split("-"),Z=getComputedStyle(e).direction==="ltr",{blockInset:A,blockOutOfBoundsCorrection:V,surfaceBlockProperty:J}=this.calculateBlock({surfaceRect:m,anchorRect:y,anchorBlock:S,surfaceBlock:E,yOffset:d,positioning:a});if(V){let pe=E==="start"?"end":"start",ge=S==="start"?"end":"start",Q=this.calculateBlock({surfaceRect:m,anchorRect:y,anchorBlock:ge,surfaceBlock:pe,yOffset:d,positioning:a});V>Q.blockOutOfBoundsCorrection&&(A=Q.blockInset,V=Q.blockOutOfBoundsCorrection,J=Q.surfaceBlockProperty)}let{inlineInset:W,inlineOutOfBoundsCorrection:M,surfaceInlineProperty:oe}=this.calculateInline({surfaceRect:m,anchorRect:y,anchorInline:z,surfaceInline:P,xOffset:s,positioning:a,isLTR:Z});if(M){let pe=P==="start"?"end":"start",ge=z==="start"?"end":"start",Q=this.calculateInline({surfaceRect:m,anchorRect:y,anchorInline:ge,surfaceInline:pe,xOffset:s,positioning:a,isLTR:Z});Math.abs(M)>Math.abs(Q.inlineOutOfBoundsCorrection)&&(W=Q.inlineInset,M=Q.inlineOutOfBoundsCorrection,oe=Q.surfaceInlineProperty)}p==="move"&&(A=A-V,W=W-M),this.surfaceStylesInternal={display:"block",opacity:"1",[J]:`${A}px`,[oe]:`${W}px`},p==="resize"&&(V&&(this.surfaceStylesInternal.height=`${m.height-V}px`),M&&(this.surfaceStylesInternal.width=`${m.width-M}px`)),this.host.requestUpdate()}calculateBlock(e){let{surfaceRect:t,anchorRect:i,anchorBlock:o,surfaceBlock:a,yOffset:s,positioning:d}=e,p=d==="fixed"?1:0,f=a==="start"?1:0,v=a==="end"?1:0,y=(o!==a?1:0)*i.height+s,E=f*i.top+v*(window.innerHeight-i.bottom),P=Math.abs(Math.min(0,window.innerHeight-E-y-t.height));return{blockInset:p*E+y,blockOutOfBoundsCorrection:P,surfaceBlockProperty:a==="start"?"inset-block-start":"inset-block-end"}}calculateInline(e){let{isLTR:t,surfaceInline:i,anchorInline:o,anchorRect:a,surfaceRect:s,xOffset:d,positioning:p}=e,f=p==="fixed"?1:0,v=t?1:0,m=t?0:1,y=i==="start"?1:0,E=i==="end"?1:0,S=(o!==i?1:0)*a.width+d,z=y*a.left+E*(window.innerWidth-a.right),Z=y*(window.innerWidth-a.right)+E*a.left,A=v*z+m*Z,V=Math.abs(Math.min(0,window.innerWidth-A-S-s.width));return{inlineInset:f*A+S,inlineOutOfBoundsCorrection:V,surfaceInlineProperty:i==="start"?"inset-inline-start":"inset-inline-end"}}hostUpdate(){this.onUpdate()}hostUpdated(){this.onUpdate()}async onUpdate(){let e=this.getProperties(),t=!1;for(let[s,d]of Object.entries(e))if(t=t||d!==this.lastValues[s],t)break;let i=this.lastValues.isOpen!==e.isOpen,o=!!e.anchorEl,a=!!e.surfaceEl;t&&o&&a&&(this.lastValues.isOpen=e.isOpen,e.isOpen?(this.lastValues=e,await this.position(),e.onOpen()):i&&(await e.beforeClose(),this.close(),e.onClose()))}close(){this.surfaceStylesInternal={display:"none"},this.host.requestUpdate()}};var G={INDEX:0,ITEM:1,TEXT:2},bt=class{constructor(e){this.getProperties=e,this.typeaheadRecords=[],this.typaheadBuffer="",this.cancelTypeaheadTimeout=0,this.isTypingAhead=!1,this.lastActiveRecord=null,this.onKeydown=t=>{this.isTypingAhead?this.typeahead(t):this.beginTypeahead(t)},this.endTypeahead=()=>{this.isTypingAhead=!1,this.typaheadBuffer="",this.typeaheadRecords=[]}}get items(){return this.getProperties().getItems()}get active(){return this.getProperties().active}beginTypeahead(e){this.active&&(e.code==="Space"||e.code==="Enter"||e.code.startsWith("Arrow")||e.code==="Escape"||(this.isTypingAhead=!0,this.typeaheadRecords=this.items.map((t,i)=>[i,t,t.typeaheadText.trim().toLowerCase()]),this.lastActiveRecord=this.typeaheadRecords.find(t=>t[G.ITEM].tabIndex===0)??null,this.lastActiveRecord&&(this.lastActiveRecord[G.ITEM].tabIndex=-1),this.typeahead(e)))}typeahead(e){if(e.defaultPrevented)return;if(clearTimeout(this.cancelTypeaheadTimeout),e.code==="Enter"||e.code.startsWith("Arrow")||e.code==="Escape"){this.endTypeahead(),this.lastActiveRecord&&(this.lastActiveRecord[G.ITEM].tabIndex=-1);return}e.code==="Space"&&e.preventDefault(),this.cancelTypeaheadTimeout=setTimeout(this.endTypeahead,this.getProperties().typeaheadBufferTime),this.typaheadBuffer+=e.key.toLowerCase();let t=this.lastActiveRecord?this.lastActiveRecord[G.INDEX]:-1,i=this.typeaheadRecords.length,o=p=>(p[G.INDEX]+i-t)%i,a=this.typeaheadRecords.filter(p=>!p[G.ITEM].disabled&&p[G.TEXT].startsWith(this.typaheadBuffer)).sort((p,f)=>o(p)-o(f));if(a.length===0){clearTimeout(this.cancelTypeaheadTimeout),this.lastActiveRecord&&(this.lastActiveRecord[G.ITEM].tabIndex=-1),this.endTypeahead();return}let s=this.typaheadBuffer.length===1,d;this.lastActiveRecord===a[0]&&s?d=a[1]??a[0]:d=a[0],this.lastActiveRecord&&(this.lastActiveRecord[G.ITEM].tabIndex=-1),this.lastActiveRecord=d,d[G.ITEM].tabIndex=0,d[G.ITEM].focus()}};var ti=200,mr=new Set([L.ArrowDown,L.ArrowUp,L.Home,L.End]),co=new Set([L.ArrowLeft,L.ArrowRight,...mr]);function po(r=document){let e=r.activeElement;for(;e&&e?.shadowRoot?.activeElement;)e=e.shadowRoot.activeElement;return e}var I=class extends g{get openDirection(){return this.menuCorner.split("_")[0]==="START"?"DOWN":"UP"}get anchorElement(){return this.anchor?this.getRootNode().querySelector(`#${this.anchor}`):this.currentAnchorElement}set anchorElement(e){this.currentAnchorElement=e,this.requestUpdate("anchorElement")}constructor(){super(),this.anchor="",this.positioning="absolute",this.quick=!1,this.hasOverflow=!1,this.open=!1,this.xOffset=0,this.yOffset=0,this.typeaheadDelay=ti,this.anchorCorner=Fe.END_START,this.menuCorner=Fe.START_START,this.stayOpenOnOutsideClick=!1,this.stayOpenOnFocusout=!1,this.skipRestoreFocus=!1,this.defaultFocus=ce.FIRST_ITEM,this.typeaheadActive=!0,this.isSubmenu=!1,this.pointerPath=[],this.isPointerDown=!1,this.openCloseAnimationSignal=qi(),this.listController=new Se({isItem:e=>e.hasAttribute("md-menu-item"),getPossibleItems:()=>this.slotItems,isRtl:()=>getComputedStyle(this).direction==="rtl",deactivateItem:e=>{e.selected=!1,e.tabIndex=-1},activateItem:e=>{e.selected=!0,e.tabIndex=0},isNavigableKey:e=>{if(!this.isSubmenu)return co.has(e);let i=getComputedStyle(this).direction==="rtl"?L.ArrowLeft:L.ArrowRight;return e===i?!0:mr.has(e)}}),this.lastFocusedElement=null,this.typeaheadController=new bt(()=>({getItems:()=>this.items,typeaheadBufferTime:this.typeaheadDelay,active:this.typeaheadActive})),this.currentAnchorElement=null,this.internals=lt(this,this.attachInternals()),this.menuPositionController=new yt(this,()=>({anchorCorner:this.anchorCorner,surfaceCorner:this.menuCorner,surfaceEl:this.surfaceEl,anchorEl:this.anchorElement,positioning:this.positioning,isOpen:this.open,xOffset:this.xOffset,yOffset:this.yOffset,onOpen:this.onOpened,beforeClose:this.beforeClose,onClose:this.onClosed,repositionStrategy:this.hasOverflow?"move":"resize"})),this.handleFocusout=async e=>{if(this.stayOpenOnFocusout||!this.open)return;if(e.relatedTarget){if(Be(e.relatedTarget,this))return;let i=this.anchorElement;if(Be(e.relatedTarget,i)&&this.isPointerDown)return}else if(this.isPointerDown&&this.pointerPath.includes(this))return;let t=this.skipRestoreFocus;this.skipRestoreFocus=!0,this.close(),await this.updateComplete,this.skipRestoreFocus=t},this.onOpened=async()=>{this.lastFocusedElement=po();let e=this.items,t=de(e);t&&this.defaultFocus!==ce.NONE&&(t.item.tabIndex=-1);let i=!this.quick;switch(this.quick?this.dispatchEvent(new Event("opening")):i=!!await this.animateOpen(),this.defaultFocus){case ce.FIRST_ITEM:let o=Ue(e);o&&(o.tabIndex=0,o.focus(),await o.updateComplete);break;case ce.LAST_ITEM:let a=Yt(e);a&&(a.tabIndex=0,a.focus(),await a.updateComplete);break;case ce.LIST_ROOT:this.focus();break;default:case ce.NONE:break}i||this.dispatchEvent(new Event("opened"))},this.beforeClose=async()=>{this.open=!1,this.skipRestoreFocus||this.lastFocusedElement?.focus?.(),this.quick||await this.animateClose()},this.onClosed=()=>{this.quick&&(this.dispatchEvent(new Event("closing")),this.dispatchEvent(new Event("closed")))},this.onWindowPointerdown=e=>{this.isPointerDown=!0,this.pointerPath=e.composedPath()},this.onWindowPointerup=()=>{this.isPointerDown=!1},this.onWindowClick=e=>{if(!this.open)return;let t=e.composedPath();!this.stayOpenOnOutsideClick&&!t.includes(this)&&!t.includes(this.anchorElement)&&(this.open=!1)},!1||(this.internals.role="menu",this.addEventListener("keydown",this.listController.handleKeydown),this.addEventListener("keydown",this.captureKeydown,{capture:!0}),this.addEventListener("focusout",this.handleFocusout))}get items(){return this.listController.items}willUpdate(e){if(e.has("open")){if(this.open){this.removeAttribute("aria-hidden");return}this.setAttribute("aria-hidden","true")}}render(){return this.renderSurface()}renderSurface(){return h`
       <div
          class="menu ${R(this.getSurfaceClasses())}"
          style=${Ne(this.menuPositionController.surfaceStyles)}>
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
        @slotchange=${this.listController.onSlotchange}></slot>`}renderElevation(){return h`<md-elevation part="elevation"></md-elevation>`}getSurfaceClasses(){return{open:this.open,fixed:this.positioning==="fixed","has-overflow":this.hasOverflow}}captureKeydown(e){e.target===this&&!e.defaultPrevented&&vt(e.code)&&(e.preventDefault(),this.close()),this.typeaheadController.onKeydown(e)}async animateOpen(){let e=this.surfaceEl,t=this.slotEl;if(!e||!t)return!0;let i=this.openDirection;this.dispatchEvent(new Event("opening")),e.classList.toggle("animating",!0);let o=this.openCloseAnimationSignal.start(),a=e.offsetHeight,s=i==="UP",d=this.items,p=500,f=50,v=250,m=(p-v)/d.length,y=e.animate([{height:"0px"},{height:`${a}px`}],{duration:p,easing:q.EMPHASIZED}),E=t.animate([{transform:s?`translateY(-${a}px)`:""},{transform:""}],{duration:p,easing:q.EMPHASIZED}),P=e.animate([{opacity:0},{opacity:1}],f),S=[];for(let A=0;A<d.length;A++){let V=s?d.length-1-A:A,J=d[V],W=J.animate([{opacity:0},{opacity:1}],{duration:v,delay:m*A});J.classList.toggle("md-menu-hidden",!0),W.addEventListener("finish",()=>{J.classList.toggle("md-menu-hidden",!1)}),S.push([J,W])}let z=A=>{},Z=new Promise(A=>{z=A});return o.addEventListener("abort",()=>{y.cancel(),E.cancel(),P.cancel(),S.forEach(([A,V])=>{A.classList.toggle("md-menu-hidden",!1),V.cancel()}),z(!0)}),y.addEventListener("finish",()=>{e.classList.toggle("animating",!1),this.openCloseAnimationSignal.finish(),z(!1)}),await Z}animateClose(){let e,t,i=new Promise((M,oe)=>{e=M,t=oe}),o=this.surfaceEl,a=this.slotEl;if(!o||!a)return t(),i;let d=this.openDirection==="UP";this.dispatchEvent(new Event("closing")),o.classList.toggle("animating",!0);let p=this.openCloseAnimationSignal.start(),f=o.offsetHeight,v=this.items,m=150,y=50,E=m-y,P=50,S=50,z=.35,Z=(m-S-P)/v.length,A=o.animate([{height:`${f}px`},{height:`${f*z}px`}],{duration:m,easing:q.EMPHASIZED_ACCELERATE}),V=a.animate([{transform:""},{transform:d?`translateY(-${f*(1-z)}px)`:""}],{duration:m,easing:q.EMPHASIZED_ACCELERATE}),J=o.animate([{opacity:1},{opacity:0}],{duration:y,delay:E}),W=[];for(let M=0;M<v.length;M++){let oe=d?M:v.length-1-M,pe=v[oe],ge=pe.animate([{opacity:1},{opacity:0}],{duration:P,delay:S+Z*M});ge.addEventListener("finish",()=>{pe.classList.toggle("md-menu-hidden",!0)}),W.push([pe,ge])}return p.addEventListener("abort",()=>{A.cancel(),V.cancel(),J.cancel(),W.forEach(([M,oe])=>{oe.cancel(),M.classList.toggle("md-menu-hidden",!1)}),t()}),A.addEventListener("finish",()=>{o.classList.toggle("animating",!1),W.forEach(([M])=>{M.classList.toggle("md-menu-hidden",!1)}),this.openCloseAnimationSignal.finish(),this.dispatchEvent(new Event("closed")),e(!0)}),i}connectedCallback(){super.connectedCallback(),!1||(window.addEventListener("click",this.onWindowClick,{capture:!0}),window.addEventListener("pointerdown",this.onWindowPointerdown),window.addEventListener("pointerup",this.onWindowPointerup))}disconnectedCallback(){super.disconnectedCallback(),!1||(window.removeEventListener("click",this.onWindowClick,{capture:!0}),window.removeEventListener("pointerdown",this.onWindowPointerdown),window.removeEventListener("pointerup",this.onWindowPointerup))}onCloseMenu(){this.close()}onDeactivateItems(e){e.stopPropagation(),this.listController.onDeactivateItems()}onRequestActivation(e){e.stopPropagation(),this.listController.onRequestActivation(e)}handleDeactivateTypeahead(e){e.stopPropagation(),this.typeaheadActive=!1}handleActivateTypeahead(e){e.stopPropagation(),this.typeaheadActive=!0}handleStayOpenOnFocusout(e){e.stopPropagation(),this.stayOpenOnFocusout=!0}handleCloseOnFocusout(e){e.stopPropagation(),this.stayOpenOnFocusout=!1}close(){this.open=!1,this.slotItems.forEach(t=>{t.close?.()})}show(){this.open=!0}activateNextItem(){return this.listController.activateNextItem()??null}activatePreviousItem(){return this.listController.activatePreviousItem()??null}};at(I,{focusable:!1});l([b(".menu")],I.prototype,"surfaceEl",void 0);l([b("slot")],I.prototype,"slotEl",void 0);l([n()],I.prototype,"anchor",void 0);l([n()],I.prototype,"positioning",void 0);l([n({type:Boolean})],I.prototype,"quick",void 0);l([n({type:Boolean,attribute:"has-overflow"})],I.prototype,"hasOverflow",void 0);l([n({type:Boolean,reflect:!0})],I.prototype,"open",void 0);l([n({type:Number,attribute:"x-offset"})],I.prototype,"xOffset",void 0);l([n({type:Number,attribute:"y-offset"})],I.prototype,"yOffset",void 0);l([n({type:Number,attribute:"typeahead-delay"})],I.prototype,"typeaheadDelay",void 0);l([n({attribute:"anchor-corner"})],I.prototype,"anchorCorner",void 0);l([n({attribute:"menu-corner"})],I.prototype,"menuCorner",void 0);l([n({type:Boolean,attribute:"stay-open-on-outside-click"})],I.prototype,"stayOpenOnOutsideClick",void 0);l([n({type:Boolean,attribute:"stay-open-on-focusout"})],I.prototype,"stayOpenOnFocusout",void 0);l([n({type:Boolean,attribute:"skip-restore-focus"})],I.prototype,"skipRestoreFocus",void 0);l([n({attribute:"default-focus"})],I.prototype,"defaultFocus",void 0);l([U({flatten:!0})],I.prototype,"slotItems",void 0);l([w()],I.prototype,"typeaheadActive",void 0);var vr=u`:host{--md-elevation-level: var(--md-menu-container-elevation, 2);--md-elevation-shadow-color: var(--md-menu-container-shadow-color, var(--md-sys-color-shadow, #000));min-width:112px;color:unset;display:contents}md-focus-ring{--md-focus-ring-shape: var(--md-menu-container-shape, 4px)}.menu{border-radius:var(--md-menu-container-shape, 4px);display:none;opacity:0;z-index:20;position:absolute;user-select:none;max-height:inherit;height:inherit;min-width:inherit;max-width:inherit}.fixed{position:fixed}.items{display:block;list-style-type:none;margin:0;outline:none;box-sizing:border-box;background-color:var(--md-menu-container-color, var(--md-sys-color-surface-container, #f3edf7));height:inherit;max-height:inherit;overflow:auto;min-width:inherit;max-width:inherit;border-radius:inherit}.item-padding{padding-block:8px}.has-overflow .items{overflow:visible}.animating .items{overflow:hidden}.has-overflow.animating .items{pointer-events:none}.animating ::slotted(.md-menu-hidden){opacity:0}slot{display:block;height:inherit;max-height:inherit}::slotted(:is(md-divider,[role=separator])){margin:8px 0}/*# sourceMappingURL=menu-styles.css.map */
`;var ii=class extends I{};ii.styles=[vr,hr];ii=l([_("md-menu")],ii);function yr(r){let e=[];for(let t=0;t<r.length;t++){let i=r[t];i.selected&&e.push([i,t])}return e}var br,gt=Symbol("value"),C=class extends g{constructor(){super(...arguments),this.quick=!1,this.required=!1,this.disabled=!1,this.errorText="",this.label="",this.supportingText="",this.error=!1,this.menuPositioning="absolute",this.typeaheadDelay=ti,this.hasLeadingIcon=!1,this.displayText="",this[br]="",this.lastUserSetValue=null,this.lastUserSetSelectedIndex=null,this.lastSelectedOption=null,this.lastSelectedOptionRecords=[],this.nativeError=!1,this.nativeErrorText="",this.focused=!1,this.open=!1,this.customValidationMessage="",this.internals=this.attachInternals()}get value(){return this[gt]}set value(e){!1||(this.lastUserSetValue=e,this.select(e))}get options(){return this.menu?.items??[]}get selectedIndex(){let[e,t]=(this.getSelectedOptions()??[])[0]??[];return t??-1}set selectedIndex(e){this.lastUserSetSelectedIndex=e,this.selectIndex(e)}get selectedOptions(){return(this.getSelectedOptions()??[]).map(([e])=>e)}get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get form(){return this.internals.form}get labels(){return this.internals.labels}get validity(){return this.syncValidity(),this.internals.validity}get validationMessage(){return this.syncValidity(),this.internals.validationMessage}get willValidate(){return this.syncValidity(),this.internals.willValidate}get hasError(){return this.error||this.nativeError}select(e){let t=this.options.find(i=>i.value===e);t&&this.selectItem(t)}selectIndex(e){let t=this.options[e];t&&this.selectItem(t)}reset(){for(let e of this.options)e.selected=e.hasAttribute("selected");this.updateValueAndDisplayText(),this.nativeError=!1,this.nativeErrorText=""}checkValidity(){return this.syncValidity(),this.internals.checkValidity()}reportValidity(){let e;this.addEventListener("invalid",o=>{e=o},{once:!0});let t=this.checkValidity();if(e?.defaultPrevented)return t;let i=this.getErrorText();return this.nativeError=!t,this.nativeErrorText=this.validationMessage,i===this.getErrorText()&&this.field?.reannounceError(),t}setCustomValidity(e){this.customValidationMessage=e,this.syncValidity()}update(e){this.hasUpdated||this.initUserSelection(),super.update(e)}render(){return h`
      <span
          class="select ${R(this.getRenderClasses())}"
          @focusout=${this.handleFocusout}>
        ${this.renderField()}
        ${this.renderMenu()}
      </span>
    `}updated(e){e.has("required")&&this.syncValidity()}async firstUpdated(e){await this.menu?.updateComplete,this.lastSelectedOptionRecords.length||this.initUserSelection(),!this.lastSelectedOptionRecords.length&&!!1&&!this.options.length&&setTimeout(()=>{this.updateValueAndDisplayText()}),super.firstUpdated(e)}getRenderClasses(){return{disabled:this.disabled,error:this.error,open:this.open}}renderField(){return se`
      <${this.fieldTag}
          aria-haspopup="listbox"
          role="combobox"
          part="field"
          id="field"
          tabindex=${this.disabled?"-1":"0"}
          aria-label=${this.ariaLabel||c}
          aria-describedby="description"
          aria-expanded=${this.open?"true":c}
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
          aria-label=${e||c}
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
      </md-menu>`}renderMenuContent(){return h`<slot></slot>`}handleKeydown(e){if(this.open||this.disabled||!this.menu)return;let t=this.menu.typeaheadController,i=e.code==="Space"||e.code==="ArrowDown"||e.code==="Enter";if(!t.isTypingAhead&&i){e.preventDefault(),this.open=!0;return}if(e.key.length===1){t.onKeydown(e),e.preventDefault();let{lastActiveRecord:a}=t;if(!a)return;this.labelEl?.setAttribute?.("aria-live","polite"),this.selectItem(a[G.ITEM])&&this.dispatchInteractionEvents()}}handleClick(){this.open=!0}handleFocus(){this.focused=!0}handleBlur(){this.focused=!1}handleFocusout(e){e.relatedTarget&&Be(e.relatedTarget,this)||(this.open=!1)}getSelectedOptions(){if(!this.menu)return this.lastSelectedOptionRecords=[],null;let e=this.menu.items;return this.lastSelectedOptionRecords=yr(e),this.lastSelectedOptionRecords}async getUpdateComplete(){return await this.menu?.updateComplete,super.getUpdateComplete()}updateValueAndDisplayText(){let e=this.getSelectedOptions()??[],t=!1;if(e.length){let[i]=e[0];t=this.lastSelectedOption!==i,this.lastSelectedOption=i,this[gt]=i.value,this.displayText=i.displayText}else t=this.lastSelectedOption!==null,this.lastSelectedOption=null,this[gt]="",this.displayText="";return this.internals.setFormValue(this.value),this.syncValidity(),t}async handleOpening(e){this.labelEl?.removeAttribute?.("aria-live"),this.redispatchEvent(e);let t=this.menu.items,i=de(t)?.item,[o]=this.lastSelectedOptionRecords[0]??[null];i&&i!==o&&(i.tabIndex=-1),o=o??t[0],o&&(o.tabIndex=0,o.focus())}redispatchEvent(e){ne(this,e)}handleClosed(e){this.open=!1,this.redispatchEvent(e)}handleCloseMenu(e){let t=e.detail.reason,i=e.detail.itemPath[0];this.open=!1;let o=!1;t.kind==="click-selection"?o=this.selectItem(i):t.kind==="keydown"&&ur(t.key)?o=this.selectItem(i):(i.tabIndex=-1,i.blur()),o&&this.dispatchInteractionEvents()}selectItem(e){return this.lastSelectedOptionRecords.forEach(([t])=>{e!==t&&(t.selected=!1)}),e.selected=!0,this.updateValueAndDisplayText()}handleRequestSelection(e){let t=e.target;this.lastSelectedOptionRecords.some(([i])=>i===t)||this.selectItem(t)}handleRequestDeselection(e){let t=e.target;this.lastSelectedOptionRecords.some(([i])=>i===t)&&this.updateValueAndDisplayText()}initUserSelection(){this.lastUserSetValue&&!this.lastSelectedOptionRecords.length?this.select(this.lastUserSetValue):this.lastUserSetSelectedIndex!==null&&!this.lastSelectedOptionRecords.length?this.selectIndex(this.lastUserSetSelectedIndex):this.updateValueAndDisplayText()}handleIconChange(){this.hasLeadingIcon=this.leadingIcons.length>0}dispatchInteractionEvents(){this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0}))}getErrorText(){return this.error?this.errorText:this.nativeErrorText}syncValidity(){let e=this.required&&!this.value,t=!!this.customValidationMessage,i=this.customValidationMessage||e&&this.getRequiredValidationMessage()||"";this.internals.setValidity({valueMissing:e,customError:t},i)}getRequiredValidationMessage(){let e=document.createElement("select");return e.required=!0,e.validationMessage}formResetCallback(){this.reset()}formStateRestoreCallback(e){this.value=e}};br=gt;H(C);C.formAssociated=!0;l([n({type:Boolean})],C.prototype,"quick",void 0);l([n({type:Boolean})],C.prototype,"required",void 0);l([n({type:Boolean,reflect:!0})],C.prototype,"disabled",void 0);l([n({type:String,attribute:"error-text"})],C.prototype,"errorText",void 0);l([n()],C.prototype,"label",void 0);l([n({type:String,attribute:"supporting-text"})],C.prototype,"supportingText",void 0);l([n({type:Boolean,reflect:!0})],C.prototype,"error",void 0);l([n({attribute:"menu-positioning"})],C.prototype,"menuPositioning",void 0);l([n({type:Number,attribute:"typeahead-delay"})],C.prototype,"typeaheadDelay",void 0);l([n({type:Boolean,attribute:"has-leading-icon"})],C.prototype,"hasLeadingIcon",void 0);l([n({attribute:"display-text"})],C.prototype,"displayText",void 0);l([n()],C.prototype,"value",null);l([n({type:Number,attribute:"selected-index"})],C.prototype,"selectedIndex",null);l([w()],C.prototype,"nativeError",void 0);l([w()],C.prototype,"nativeErrorText",void 0);l([w()],C.prototype,"focused",void 0);l([w()],C.prototype,"open",void 0);l([b(".field")],C.prototype,"field",void 0);l([b("md-menu")],C.prototype,"menu",void 0);l([b("#label")],C.prototype,"labelEl",void 0);l([U({slot:"leading-icon",flatten:!0})],C.prototype,"leadingIcons",void 0);var xt=class extends C{constructor(){super(...arguments),this.fieldTag=K`md-filled-field`}};var gr=u`:host{--_text-field-active-indicator-color: var(--md-filled-select-text-field-active-indicator-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-active-indicator-height: var(--md-filled-select-text-field-active-indicator-height, 1px);--_text-field-container-color: var(--md-filled-select-text-field-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_text-field-container-shape-start-start: var( --md-filled-select-text-field-container-shape-start-start, var( --md-filled-select-text-field-container-shape, 4px ) );--_text-field-container-shape-start-end: var( --md-filled-select-text-field-container-shape-start-end, var( --md-filled-select-text-field-container-shape, 4px ) );--_text-field-container-shape-end-end: var( --md-filled-select-text-field-container-shape-end-end, var( --md-filled-select-text-field-container-shape, 0px ) );--_text-field-container-shape-end-start: var( --md-filled-select-text-field-container-shape-end-start, var( --md-filled-select-text-field-container-shape, 0px ) );--_text-field-disabled-active-indicator-color: var(--md-filled-select-text-field-disabled-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-active-indicator-height: var(--md-filled-select-text-field-disabled-active-indicator-height, 1px);--_text-field-disabled-active-indicator-opacity: var(--md-filled-select-text-field-disabled-active-indicator-opacity, 0.38);--_text-field-disabled-container-color: var(--md-filled-select-text-field-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-container-opacity: var(--md-filled-select-text-field-disabled-container-opacity, 0.04);--_text-field-disabled-input-text-color: var(--md-filled-select-text-field-disabled-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-input-text-opacity: var(--md-filled-select-text-field-disabled-input-text-opacity, 0.38);--_text-field-disabled-label-text-color: var(--md-filled-select-text-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-label-text-opacity: var(--md-filled-select-text-field-disabled-label-text-opacity, 0.38);--_text-field-disabled-leading-icon-color: var(--md-filled-select-text-field-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-leading-icon-opacity: var(--md-filled-select-text-field-disabled-leading-icon-opacity, 0.38);--_text-field-disabled-supporting-text-color: var(--md-filled-select-text-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-supporting-text-opacity: var(--md-filled-select-text-field-disabled-supporting-text-opacity, 0.38);--_text-field-disabled-trailing-icon-color: var(--md-filled-select-text-field-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-trailing-icon-opacity: var(--md-filled-select-text-field-disabled-trailing-icon-opacity, 0.38);--_text-field-error-active-indicator-color: var(--md-filled-select-text-field-error-active-indicator-color, var(--md-sys-color-error, #b3261e));--_text-field-error-focus-active-indicator-color: var(--md-filled-select-text-field-error-focus-active-indicator-color, var(--md-sys-color-error, #b3261e));--_text-field-error-focus-input-text-color: var(--md-filled-select-text-field-error-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-error-focus-label-text-color: var(--md-filled-select-text-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-focus-leading-icon-color: var(--md-filled-select-text-field-error-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-error-focus-supporting-text-color: var(--md-filled-select-text-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-focus-trailing-icon-color: var(--md-filled-select-text-field-error-focus-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_text-field-error-hover-active-indicator-color: var(--md-filled-select-text-field-error-hover-active-indicator-color, var(--md-sys-color-on-error-container, #410e0b));--_text-field-error-hover-input-text-color: var(--md-filled-select-text-field-error-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-error-hover-label-text-color: var(--md-filled-select-text-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_text-field-error-hover-leading-icon-color: var(--md-filled-select-text-field-error-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-error-hover-state-layer-color: var(--md-filled-select-text-field-error-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-error-hover-state-layer-opacity: var(--md-filled-select-text-field-error-hover-state-layer-opacity, 0.08);--_text-field-error-hover-supporting-text-color: var(--md-filled-select-text-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-hover-trailing-icon-color: var(--md-filled-select-text-field-error-hover-trailing-icon-color, var(--md-sys-color-on-error-container, #410e0b));--_text-field-error-input-text-color: var(--md-filled-select-text-field-error-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-error-label-text-color: var(--md-filled-select-text-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-leading-icon-color: var(--md-filled-select-text-field-error-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-error-supporting-text-color: var(--md-filled-select-text-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-trailing-icon-color: var(--md-filled-select-text-field-error-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_text-field-focus-active-indicator-color: var(--md-filled-select-text-field-focus-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_text-field-focus-active-indicator-height: var(--md-filled-select-text-field-focus-active-indicator-height, 3px);--_text-field-focus-input-text-color: var(--md-filled-select-text-field-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-focus-label-text-color: var(--md-filled-select-text-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_text-field-focus-leading-icon-color: var(--md-filled-select-text-field-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-focus-supporting-text-color: var(--md-filled-select-text-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-focus-trailing-icon-color: var(--md-filled-select-text-field-focus-trailing-icon-color, var(--md-sys-color-primary, #6750a4));--_text-field-hover-active-indicator-color: var(--md-filled-select-text-field-hover-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-hover-active-indicator-height: var(--md-filled-select-text-field-hover-active-indicator-height, 1px);--_text-field-hover-input-text-color: var(--md-filled-select-text-field-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-hover-label-text-color: var(--md-filled-select-text-field-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-hover-leading-icon-color: var(--md-filled-select-text-field-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-hover-state-layer-color: var(--md-filled-select-text-field-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-hover-state-layer-opacity: var(--md-filled-select-text-field-hover-state-layer-opacity, 0.08);--_text-field-hover-supporting-text-color: var(--md-filled-select-text-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-hover-trailing-icon-color: var(--md-filled-select-text-field-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-input-text-color: var(--md-filled-select-text-field-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-input-text-font: var(--md-filled-select-text-field-input-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_text-field-input-text-line-height: var(--md-filled-select-text-field-input-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_text-field-input-text-size: var(--md-filled-select-text-field-input-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_text-field-input-text-weight: var(--md-filled-select-text-field-input-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_text-field-label-text-color: var(--md-filled-select-text-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-label-text-font: var(--md-filled-select-text-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_text-field-label-text-line-height: var(--md-filled-select-text-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_text-field-label-text-populated-line-height: var(--md-filled-select-text-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_text-field-label-text-populated-size: var(--md-filled-select-text-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_text-field-label-text-size: var(--md-filled-select-text-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_text-field-label-text-weight: var(--md-filled-select-text-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_text-field-leading-icon-color: var(--md-filled-select-text-field-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-leading-icon-size: var(--md-filled-select-text-field-leading-icon-size, 24px);--_text-field-supporting-text-color: var(--md-filled-select-text-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-supporting-text-font: var(--md-filled-select-text-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_text-field-supporting-text-line-height: var(--md-filled-select-text-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_text-field-supporting-text-size: var(--md-filled-select-text-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_text-field-supporting-text-weight: var(--md-filled-select-text-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_text-field-trailing-icon-color: var(--md-filled-select-text-field-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-trailing-icon-size: var(--md-filled-select-text-field-trailing-icon-size, 24px);--md-filled-field-active-indicator-color: var(--_text-field-active-indicator-color);--md-filled-field-active-indicator-height: var(--_text-field-active-indicator-height);--md-filled-field-container-color: var(--_text-field-container-color);--md-filled-field-container-shape-end-end: var(--_text-field-container-shape-end-end);--md-filled-field-container-shape-end-start: var(--_text-field-container-shape-end-start);--md-filled-field-container-shape-start-end: var(--_text-field-container-shape-start-end);--md-filled-field-container-shape-start-start: var(--_text-field-container-shape-start-start);--md-filled-field-content-color: var(--_text-field-input-text-color);--md-filled-field-content-font: var(--_text-field-input-text-font);--md-filled-field-content-line-height: var(--_text-field-input-text-line-height);--md-filled-field-content-size: var(--_text-field-input-text-size);--md-filled-field-content-weight: var(--_text-field-input-text-weight);--md-filled-field-disabled-active-indicator-color: var(--_text-field-disabled-active-indicator-color);--md-filled-field-disabled-active-indicator-height: var(--_text-field-disabled-active-indicator-height);--md-filled-field-disabled-active-indicator-opacity: var(--_text-field-disabled-active-indicator-opacity);--md-filled-field-disabled-container-color: var(--_text-field-disabled-container-color);--md-filled-field-disabled-container-opacity: var(--_text-field-disabled-container-opacity);--md-filled-field-disabled-content-color: var(--_text-field-disabled-input-text-color);--md-filled-field-disabled-content-opacity: var(--_text-field-disabled-input-text-opacity);--md-filled-field-disabled-label-text-color: var(--_text-field-disabled-label-text-color);--md-filled-field-disabled-label-text-opacity: var(--_text-field-disabled-label-text-opacity);--md-filled-field-disabled-leading-content-color: var(--_text-field-disabled-leading-icon-color);--md-filled-field-disabled-leading-content-opacity: var(--_text-field-disabled-leading-icon-opacity);--md-filled-field-disabled-supporting-text-color: var(--_text-field-disabled-supporting-text-color);--md-filled-field-disabled-supporting-text-opacity: var(--_text-field-disabled-supporting-text-opacity);--md-filled-field-disabled-trailing-content-color: var(--_text-field-disabled-trailing-icon-color);--md-filled-field-disabled-trailing-content-opacity: var(--_text-field-disabled-trailing-icon-opacity);--md-filled-field-error-active-indicator-color: var(--_text-field-error-active-indicator-color);--md-filled-field-error-content-color: var(--_text-field-error-input-text-color);--md-filled-field-error-focus-active-indicator-color: var(--_text-field-error-focus-active-indicator-color);--md-filled-field-error-focus-content-color: var(--_text-field-error-focus-input-text-color);--md-filled-field-error-focus-label-text-color: var(--_text-field-error-focus-label-text-color);--md-filled-field-error-focus-leading-content-color: var(--_text-field-error-focus-leading-icon-color);--md-filled-field-error-focus-supporting-text-color: var(--_text-field-error-focus-supporting-text-color);--md-filled-field-error-focus-trailing-content-color: var(--_text-field-error-focus-trailing-icon-color);--md-filled-field-error-hover-active-indicator-color: var(--_text-field-error-hover-active-indicator-color);--md-filled-field-error-hover-content-color: var(--_text-field-error-hover-input-text-color);--md-filled-field-error-hover-label-text-color: var(--_text-field-error-hover-label-text-color);--md-filled-field-error-hover-leading-content-color: var(--_text-field-error-hover-leading-icon-color);--md-filled-field-error-hover-state-layer-color: var(--_text-field-error-hover-state-layer-color);--md-filled-field-error-hover-state-layer-opacity: var(--_text-field-error-hover-state-layer-opacity);--md-filled-field-error-hover-supporting-text-color: var(--_text-field-error-hover-supporting-text-color);--md-filled-field-error-hover-trailing-content-color: var(--_text-field-error-hover-trailing-icon-color);--md-filled-field-error-label-text-color: var(--_text-field-error-label-text-color);--md-filled-field-error-leading-content-color: var(--_text-field-error-leading-icon-color);--md-filled-field-error-supporting-text-color: var(--_text-field-error-supporting-text-color);--md-filled-field-error-trailing-content-color: var(--_text-field-error-trailing-icon-color);--md-filled-field-focus-active-indicator-color: var(--_text-field-focus-active-indicator-color);--md-filled-field-focus-active-indicator-height: var(--_text-field-focus-active-indicator-height);--md-filled-field-focus-content-color: var(--_text-field-focus-input-text-color);--md-filled-field-focus-label-text-color: var(--_text-field-focus-label-text-color);--md-filled-field-focus-leading-content-color: var(--_text-field-focus-leading-icon-color);--md-filled-field-focus-supporting-text-color: var(--_text-field-focus-supporting-text-color);--md-filled-field-focus-trailing-content-color: var(--_text-field-focus-trailing-icon-color);--md-filled-field-hover-active-indicator-color: var(--_text-field-hover-active-indicator-color);--md-filled-field-hover-active-indicator-height: var(--_text-field-hover-active-indicator-height);--md-filled-field-hover-content-color: var(--_text-field-hover-input-text-color);--md-filled-field-hover-label-text-color: var(--_text-field-hover-label-text-color);--md-filled-field-hover-leading-content-color: var(--_text-field-hover-leading-icon-color);--md-filled-field-hover-state-layer-color: var(--_text-field-hover-state-layer-color);--md-filled-field-hover-state-layer-opacity: var(--_text-field-hover-state-layer-opacity);--md-filled-field-hover-supporting-text-color: var(--_text-field-hover-supporting-text-color);--md-filled-field-hover-trailing-content-color: var(--_text-field-hover-trailing-icon-color);--md-filled-field-label-text-color: var(--_text-field-label-text-color);--md-filled-field-label-text-font: var(--_text-field-label-text-font);--md-filled-field-label-text-line-height: var(--_text-field-label-text-line-height);--md-filled-field-label-text-populated-line-height: var(--_text-field-label-text-populated-line-height);--md-filled-field-label-text-populated-size: var(--_text-field-label-text-populated-size);--md-filled-field-label-text-size: var(--_text-field-label-text-size);--md-filled-field-label-text-weight: var(--_text-field-label-text-weight);--md-filled-field-leading-content-color: var(--_text-field-leading-icon-color);--md-filled-field-supporting-text-color: var(--_text-field-supporting-text-color);--md-filled-field-supporting-text-font: var(--_text-field-supporting-text-font);--md-filled-field-supporting-text-line-height: var(--_text-field-supporting-text-line-height);--md-filled-field-supporting-text-size: var(--_text-field-supporting-text-size);--md-filled-field-supporting-text-weight: var(--_text-field-supporting-text-weight);--md-filled-field-trailing-content-color: var(--_text-field-trailing-icon-color)}[has-start] .icon.leading{font-size:var(--_text-field-leading-icon-size);height:var(--_text-field-leading-icon-size);width:var(--_text-field-leading-icon-size)}.icon.trailing{font-size:var(--_text-field-trailing-icon-size);height:var(--_text-field-trailing-icon-size);width:var(--_text-field-trailing-icon-size)}/*# sourceMappingURL=filled-select-styles.css.map */
`;var xr=u`:host{color:unset;min-width:210px;display:flex}.field{cursor:default;outline:none}.select{position:relative;flex-direction:column}.icon.trailing svg,.icon ::slotted(*){fill:currentColor}.icon ::slotted(*){width:inherit;height:inherit;font-size:inherit}.icon slot{display:flex;height:100%;width:100%;align-items:center;justify-content:center}.icon.trailing :is(.up,.down){opacity:0;transition:opacity 75ms linear 75ms}.select:not(.open) .down,.select.open .up{opacity:1}.field,.select,md-menu{min-width:inherit;width:inherit;max-width:inherit;display:flex}.field,.select{width:100%}:host{display:inline-flex}:host([disabled]){pointer-events:none}/*# sourceMappingURL=shared-styles.css.map */
`;var ri=class extends xt{};ri.styles=[xr,gr,pr];ri=l([_("md-filled-select")],ri);var _r=u`@media(forced-colors: active){:host([disabled]),:host([disabled]) slot{color:GrayText;opacity:1}.list-item{position:relative}.list-item.selected::before{content:"";position:absolute;inset:0;box-sizing:border-box;border-radius:inherit;pointer-events:none;border:3px double CanvasText}}/*# sourceMappingURL=forced-colors-styles.css.map */
`;var wr=u`:host{display:flex;--md-ripple-hover-color: var(--md-menu-item-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-hover-opacity: var(--md-menu-item-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-menu-item-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-pressed-opacity: var(--md-menu-item-pressed-state-layer-opacity, 0.12)}:host([disabled]){opacity:var(--md-menu-item-disabled-opacity, 0.3);pointer-events:none}md-focus-ring{z-index:1;--md-focus-ring-shape: 8px}a,button,li{background:none;border:none;padding:0;margin:0;text-align:unset;text-decoration:none}.list-item{border-radius:inherit;display:flex;flex:1;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.list-item:not(.disabled){cursor:pointer}[slot=container]{pointer-events:none}md-ripple{border-radius:inherit}md-item{border-radius:inherit;flex:1;color:var(--md-menu-item-label-text-color, var(--md-sys-color-on-surface, #1d1b20));font-family:var(--md-menu-item-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-menu-item-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));line-height:var(--md-menu-item-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));font-weight:var(--md-menu-item-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));min-height:var(--md-menu-item-one-line-container-height, 56px);padding-top:var(--md-menu-item-top-space, 12px);padding-bottom:var(--md-menu-item-bottom-space, 12px);padding-inline-start:var(--md-menu-item-leading-space, 16px);padding-inline-end:var(--md-menu-item-trailing-space, 16px)}md-item[multiline]{min-height:var(--md-menu-item-two-line-container-height, 72px)}[slot=supporting-text]{color:var(--md-menu-item-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-menu-item-supporting-text-font, var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-menu-item-supporting-text-size, var(--md-sys-typescale-body-medium-size, 0.875rem));line-height:var(--md-menu-item-supporting-text-line-height, var(--md-sys-typescale-body-medium-line-height, 1.25rem));font-weight:var(--md-menu-item-supporting-text-weight, var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400)))}[slot=trailing-supporting-text]{color:var(--md-menu-item-trailing-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-menu-item-trailing-supporting-text-font, var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-menu-item-trailing-supporting-text-size, var(--md-sys-typescale-label-small-size, 0.6875rem));line-height:var(--md-menu-item-trailing-supporting-text-line-height, var(--md-sys-typescale-label-small-line-height, 1rem));font-weight:var(--md-menu-item-trailing-supporting-text-weight, var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500)))}:is([slot=start],[slot=end])::slotted(*){fill:currentColor}[slot=start]{color:var(--md-menu-item-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}[slot=end]{color:var(--md-menu-item-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}.list-item.selected{background-color:var(--md-menu-item-selected-container-color, var(--md-sys-color-secondary-container, #e8def8))}.selected:not(.disabled) ::slotted(*){color:var(--md-menu-item-selected-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b))}/*# sourceMappingURL=menu-item-styles.css.map */
`;var Te=class extends g{constructor(){super(...arguments),this.multiline=!1}render(){return h`
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
    `}handleTextSlotChange(){let e=!1,t=0;for(let i of this.textSlots)if(ho(i)&&(t+=1),t>1){e=!0;break}this.multiline=e}};l([n({type:Boolean,reflect:!0})],Te.prototype,"multiline",void 0);l([Di(".text slot")],Te.prototype,"textSlots",void 0);function ho(r){for(let e of r.assignedNodes({flatten:!0})){let t=e.nodeType===Node.ELEMENT_NODE,i=e.nodeType===Node.TEXT_NODE&&e.textContent?.match(/\S/);if(t||i)return!0}return!1}var Er=u`:host{color:var(--md-sys-color-on-surface, #1d1b20);font-family:var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-body-large-size, 1rem);font-weight:var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400));line-height:var(--md-sys-typescale-body-large-line-height, 1.5rem);align-items:center;box-sizing:border-box;display:flex;gap:16px;min-height:56px;overflow:hidden;padding:12px 16px;position:relative;text-overflow:ellipsis}:host([multiline]){min-height:72px}[name=overline]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-label-small-size, 0.6875rem);font-weight:var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500));line-height:var(--md-sys-typescale-label-small-line-height, 1rem)}[name=supporting-text]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-body-medium-size, 0.875rem);font-weight:var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400));line-height:var(--md-sys-typescale-body-medium-line-height, 1.25rem)}[name=trailing-supporting-text]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-label-small-size, 0.6875rem);font-weight:var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500));line-height:var(--md-sys-typescale-label-small-line-height, 1rem)}[name=container]::slotted(*){inset:0;position:absolute}.default-slot{display:inline}.default-slot,::slotted(*){overflow:hidden;text-overflow:ellipsis}.text{display:flex;flex:1;flex-direction:column;overflow:hidden}/*# sourceMappingURL=item-styles.css.map */
`;var oi=class extends Te{};oi.styles=[Er];oi=l([_("md-item")],oi);var _t=class{constructor(e,t){this.host=e,this.internalTypeaheadText=null,this.onClick=()=>{this.host.keepOpen||this.host.dispatchEvent(Qt(this.host,{kind:ei.CLICK_SELECTION}))},this.onKeydown=o=>{if(this.host.keepOpen||o.defaultPrevented)return;let a=o.code;!o.defaultPrevented&&vt(a)&&(o.preventDefault(),this.host.dispatchEvent(Qt(this.host,{kind:ei.KEYDOWN,key:a})))};let{getHeadlineElements:i}=t;this.getHeadlineElements=i,this.host.addController(this)}get typeaheadText(){if(this.internalTypeaheadText!==null)return this.internalTypeaheadText;let e=this.getHeadlineElements(),t=[];return e.forEach(i=>{i.textContent&&i.textContent.trim()&&t.push(i.textContent.trim())}),t.join(" ")}get tagName(){switch(this.host.type){case"link":return"a";case"button":return"button";default:case"menuitem":case"option":return"li"}}get role(){return this.host.type==="option"?"option":"menuitem"}hostConnected(){this.host.toggleAttribute("md-menu-item",!0)}hostUpdate(){this.host.href&&(this.host.type="link")}setTypeaheadText(e){this.internalTypeaheadText=e}};function fo(){return new Event("request-selection",{bubbles:!0,composed:!0})}function uo(){return new Event("request-deselection",{bubbles:!0,composed:!0})}var wt=class{get role(){return this.menuItemController.role}get typeaheadText(){return this.menuItemController.typeaheadText}setTypeaheadText(e){this.menuItemController.setTypeaheadText(e)}get displayText(){if(this.internalDisplayText!==null)return this.internalDisplayText;let e=this.getHeadlineElements(),t=[];return e.forEach(i=>{i.textContent&&i.textContent.trim()&&t.push(i.textContent.trim())}),t.join(" ")}setDisplayText(e){this.internalDisplayText=e}constructor(e,t){this.host=e,this.internalDisplayText=null,this.lastSelected=this.host.selected,this.firstUpdate=!0,this.onClick=()=>{this.menuItemController.onClick()},this.onKeydown=i=>{this.menuItemController.onKeydown(i)},this.menuItemController=new _t(e,t),this.getHeadlineElements=t.getHeadlineElements,e.addController(this)}hostUpdate(){this.lastSelected!==this.host.selected&&(this.host.ariaSelected=this.host.selected?"true":"false")}hostUpdated(){this.lastSelected!==this.host.selected&&!this.firstUpdate&&(this.host.selected?this.host.dispatchEvent(fo()):this.host.dispatchEvent(uo())),this.lastSelected=this.host.selected,this.firstUpdate=!1}};var j=class extends g{constructor(){super(...arguments),this.disabled=!1,this.isMenuItem=!0,this.selected=!1,this.value="",this.type="option",this.selectOptionController=new wt(this,{getHeadlineElements:()=>this.headlineElements})}get typeaheadText(){return this.selectOptionController.typeaheadText}set typeaheadText(e){this.selectOptionController.setTypeaheadText(e)}get displayText(){return this.selectOptionController.displayText}set displayText(e){this.selectOptionController.setDisplayText(e)}render(){return this.renderListItem(h`
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
        aria-label=${this.ariaLabel||c}
        aria-selected=${this.ariaSelected||c}
        aria-checked=${this.ariaChecked||c}
        aria-expanded=${this.ariaExpanded||c}
        aria-haspopup=${this.ariaHasPopup||c}
        class="list-item ${R(this.getRenderClasses())}"
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
    `}focus(){this.listItemRoot?.focus()}};H(j);j.shadowRootOptions={...g.shadowRootOptions,delegatesFocus:!0};l([n({type:Boolean,reflect:!0})],j.prototype,"disabled",void 0);l([n({type:Boolean,attribute:"md-menu-item",reflect:!0})],j.prototype,"isMenuItem",void 0);l([n({type:Boolean})],j.prototype,"selected",void 0);l([n()],j.prototype,"value",void 0);l([b(".list-item")],j.prototype,"listItemRoot",void 0);l([U({slot:"headline"})],j.prototype,"headlineElements",void 0);l([n({attribute:"typeahead-text"})],j.prototype,"typeaheadText",null);l([n({attribute:"display-text"})],j.prototype,"displayText",null);var ai=class extends j{};ai.styles=[wr,_r];ai=l([_("md-select-option")],ai);var ye=class extends g{constructor(){super(...arguments),this.inset=!1,this.insetStart=!1,this.insetEnd=!1}};l([n({type:Boolean,reflect:!0})],ye.prototype,"inset",void 0);l([n({type:Boolean,reflect:!0,attribute:"inset-start"})],ye.prototype,"insetStart",void 0);l([n({type:Boolean,reflect:!0,attribute:"inset-end"})],ye.prototype,"insetEnd",void 0);var Ar=u`:host{--_color: var(--md-divider-color, var(--md-sys-color-outline-variant, #cac4d0));--_thickness: var(--md-divider-thickness, 1px);box-sizing:border-box;color:var(--_color);display:flex;height:var(--_thickness);width:100%}:host([inset]),:host([inset-start]){padding-inline-start:16px}:host([inset]),:host([inset-end]){padding-inline-end:16px}:host::before{background:currentColor;content:"";height:100%;width:100%}@media(forced-colors: active){:host::before{background:CanvasText}}/*# sourceMappingURL=divider-styles.css.map */
`;var li=class extends ye{};li.styles=[Ar];li=l([_("md-divider")],li);var Cr={dialog:[[[{transform:"translateY(-50px)"},{transform:"translateY(0)"}],{duration:500,easing:q.EMPHASIZED}]],scrim:[[[{opacity:0},{opacity:.32}],{duration:500,easing:"linear"}]],container:[[[{opacity:0},{opacity:1}],{duration:50,easing:"linear",pseudoElement:"::before"}],[[{height:"35%"},{height:"100%"}],{duration:500,easing:q.EMPHASIZED,pseudoElement:"::before"}]],headline:[[[{opacity:0},{opacity:0,offset:.2},{opacity:1}],{duration:250,easing:"linear",fill:"forwards"}]],content:[[[{opacity:0},{opacity:0,offset:.2},{opacity:1}],{duration:250,easing:"linear",fill:"forwards"}]],actions:[[[{opacity:0},{opacity:0,offset:.5},{opacity:1}],{duration:300,easing:"linear",fill:"forwards"}]]},Sr={dialog:[[[{transform:"translateY(0)"},{transform:"translateY(-50px)"}],{duration:150,easing:q.EMPHASIZED_ACCELERATE}]],scrim:[[[{opacity:.32},{opacity:0}],{duration:150,easing:"linear"}]],container:[[[{height:"100%"},{height:"35%"}],{duration:150,easing:q.EMPHASIZED_ACCELERATE,pseudoElement:"::before"}],[[{opacity:"1"},{opacity:"0"}],{delay:100,duration:50,easing:"linear",pseudoElement:"::before"}]],headline:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]],content:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]],actions:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]]};var k=class extends g{get open(){return this.isOpen}set open(e){e!==this.isOpen&&(this.isOpen=e,e?(this.setAttribute("open",""),this.show()):(this.removeAttribute("open"),this.close()))}constructor(){super(),this.returnValue="",this.getOpenAnimation=()=>Cr,this.getCloseAnimation=()=>Sr,this.isOpen=!1,this.isOpening=!1,this.isConnectedPromise=this.getIsConnectedPromise(),this.isAtScrollTop=!1,this.isAtScrollBottom=!1,this.nextClickIsFromContent=!1,this.hasHeadline=!1,this.hasActions=!1,this.hasIcon=!1,!1||this.addEventListener("submit",this.handleSubmit)}async show(){this.isOpening=!0,await this.isConnectedPromise,await this.updateComplete;let e=this.dialog;if(e.open||!this.isOpening){this.isOpening=!1;return}if(!this.dispatchEvent(new Event("open",{cancelable:!0}))){this.open=!1;return}e.showModal(),this.open=!0,this.scroller&&(this.scroller.scrollTop=0),this.querySelector("[autofocus]")?.focus(),await this.animateDialog(this.getOpenAnimation()),this.dispatchEvent(new Event("opened")),this.isOpening=!1}async close(e=this.returnValue){if(this.isOpening=!1,!this.isConnected){this.open=!1;return}await this.updateComplete;let t=this.dialog;if(!t.open||this.isOpening){this.open=!1;return}let i=this.returnValue;if(this.returnValue=e,!this.dispatchEvent(new Event("close",{cancelable:!0}))){this.returnValue=i;return}await this.animateDialog(this.getCloseAnimation()),t.close(e),this.open=!1,this.dispatchEvent(new Event("closed"))}connectedCallback(){super.connectedCallback(),this.isConnectedPromiseResolve()}disconnectedCallback(){super.disconnectedCallback(),this.isConnectedPromise=this.getIsConnectedPromise()}render(){let e=this.open&&!(this.isAtScrollTop&&this.isAtScrollBottom),t={"has-headline":this.hasHeadline,"has-actions":this.hasActions,"has-icon":this.hasIcon,scrollable:e,"show-top-divider":e&&!this.isAtScrollTop,"show-bottom-divider":e&&!this.isAtScrollBottom},{ariaLabel:i}=this;return h`
      <div class="scrim"></div>
      <dialog
        class=${R(t)}
        aria-label=${i||c}
        aria-labelledby=${this.hasHeadline?"headline":c}
        role=${this.type==="alert"?"alertdialog":c}
        @cancel=${this.handleCancel}
        @click=${this.handleDialogClick}
        .returnValue=${this.returnValue||c}
      >
        <div class="container"
          @click=${this.handleContentClick}
        >
          <div class="headline">
            <div class="icon" aria-hidden="true">
              <slot name="icon" @slotchange=${this.handleIconChange}></slot>
            </div>
            <h2 id="headline" aria-hidden=${!this.hasHeadline||c}>
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
    `}firstUpdated(){this.intersectionObserver=new IntersectionObserver(e=>{for(let t of e)this.handleAnchorIntersection(t)},{root:this.scroller}),this.intersectionObserver.observe(this.topAnchor),this.intersectionObserver.observe(this.bottomAnchor)}handleDialogClick(){if(this.nextClickIsFromContent){this.nextClickIsFromContent=!1;return}this.dispatchEvent(new Event("cancel",{cancelable:!0}))&&this.close()}handleContentClick(){this.nextClickIsFromContent=!0}handleSubmit(e){let t=e.target,{submitter:i}=e;t.method!=="dialog"||!i||this.close(i.getAttribute("value")??this.returnValue)}handleCancel(e){if(e.target!==this.dialog)return;let t=!ne(this,e);e.preventDefault(),!t&&this.close()}async animateDialog(e){let{dialog:t,scrim:i,container:o,headline:a,content:s,actions:d}=this;if(!t||!i||!o||!a||!s||!d)return;let{container:p,dialog:f,scrim:v,headline:m,content:y,actions:E}=e,P=[[t,f??[]],[i,v??[]],[o,p??[]],[a,m??[]],[s,y??[]],[d,E??[]]],S=[];for(let[z,Z]of P)for(let A of Z)S.push(z.animate(...A));await Promise.all(S.map(z=>z.finished))}handleHeadlineChange(e){let t=e.target;this.hasHeadline=t.assignedElements().length>0}handleActionsChange(e){let t=e.target;this.hasActions=t.assignedElements().length>0}handleIconChange(e){let t=e.target;this.hasIcon=t.assignedElements().length>0}handleAnchorIntersection(e){let{target:t,isIntersecting:i}=e;t===this.topAnchor&&(this.isAtScrollTop=i),t===this.bottomAnchor&&(this.isAtScrollBottom=i)}getIsConnectedPromise(){return new Promise(e=>{this.isConnectedPromiseResolve=e})}};H(k);k.shadowRootOptions={...g.shadowRootOptions,delegatesFocus:!0};l([n({type:Boolean})],k.prototype,"open",null);l([n({attribute:!1})],k.prototype,"returnValue",void 0);l([n()],k.prototype,"type",void 0);l([b("dialog")],k.prototype,"dialog",void 0);l([b(".scrim")],k.prototype,"scrim",void 0);l([b(".container")],k.prototype,"container",void 0);l([b(".headline")],k.prototype,"headline",void 0);l([b(".content")],k.prototype,"content",void 0);l([b(".actions")],k.prototype,"actions",void 0);l([w()],k.prototype,"isAtScrollTop",void 0);l([w()],k.prototype,"isAtScrollBottom",void 0);l([b(".scroller")],k.prototype,"scroller",void 0);l([b(".top.anchor")],k.prototype,"topAnchor",void 0);l([b(".bottom.anchor")],k.prototype,"bottomAnchor",void 0);l([w()],k.prototype,"hasHeadline",void 0);l([w()],k.prototype,"hasActions",void 0);l([w()],k.prototype,"hasIcon",void 0);var Tr=u`:host{--_container-color: var(--md-dialog-container-color, var(--md-sys-color-surface-container-high, #ece6f0));--_container-shape: var(--md-dialog-container-shape, 28px);--_headline-color: var(--md-dialog-headline-color, var(--md-sys-color-on-surface, #1d1b20));--_headline-font: var(--md-dialog-headline-font, var(--md-sys-typescale-headline-small-font, var(--md-ref-typeface-brand, Roboto)));--_headline-line-height: var(--md-dialog-headline-line-height, var(--md-sys-typescale-headline-small-line-height, 2rem));--_headline-size: var(--md-dialog-headline-size, var(--md-sys-typescale-headline-small-size, 1.5rem));--_headline-weight: var(--md-dialog-headline-weight, var(--md-sys-typescale-headline-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_supporting-text-color: var(--md-dialog-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-dialog-supporting-text-font, var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-line-height: var(--md-dialog-supporting-text-line-height, var(--md-sys-typescale-body-medium-line-height, 1.25rem));--_supporting-text-size: var(--md-dialog-supporting-text-size, var(--md-sys-typescale-body-medium-size, 0.875rem));--_supporting-text-weight: var(--md-dialog-supporting-text-weight, var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400)));--_icon-color: var(--md-dialog-icon-color, var(--md-sys-color-secondary, #625b71));--_icon-size: var(--md-dialog-icon-size, 24px);--_container-shape-start-start: var( --md-dialog-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-dialog-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-dialog-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-dialog-container-shape-end-start, var(--_container-shape) );border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start);display:contents;margin:auto;max-height:min(560px,100% - 48px);max-width:min(560px,100% - 48px);min-height:140px;min-width:280px;position:fixed;height:fit-content;width:fit-content}dialog{background:rgba(0,0,0,0);border:none;border-radius:inherit;flex-direction:column;height:inherit;margin:inherit;max-height:inherit;max-width:inherit;min-height:inherit;min-width:inherit;outline:none;overflow:visible;padding:0;width:inherit}dialog[open]{display:flex}::backdrop{background:none}.scrim{background:var(--md-sys-color-scrim, #000);display:none;inset:0;opacity:32%;pointer-events:none;position:fixed;z-index:1}:host([open]) .scrim{display:flex}h2{all:unset;align-self:stretch}.headline{align-items:center;color:var(--_headline-color);display:flex;flex-direction:column;font-family:var(--_headline-font);font-size:var(--_headline-size);line-height:var(--_headline-line-height);font-weight:var(--_headline-weight);position:relative}slot[name=headline]::slotted(*){align-items:center;align-self:stretch;box-sizing:border-box;display:flex;gap:8px;padding:24px 24px 0}.icon{display:flex}slot[name=icon]::slotted(*){color:var(--_icon-color);fill:currentColor;font-size:var(--_icon-size);padding-top:24px;height:var(--_icon-size);width:var(--_icon-size)}.has-icon slot[name=headline]::slotted(*){justify-content:center;padding-top:16px}.scrollable slot[name=headline]::slotted(*){padding-bottom:16px}.scrollable.has-headline slot[name=content]::slotted(*){padding-top:8px}.container{border-radius:inherit;display:flex;flex-direction:column;flex-grow:1;overflow:hidden;position:relative;transform-origin:top}.container::before{background:var(--_container-color);border-radius:inherit;content:"";inset:0;position:absolute}.scroller{display:flex;flex:1;flex-direction:column;overflow:hidden;z-index:1}.scrollable .scroller{overflow-y:scroll}.content{color:var(--_supporting-text-color);font-family:var(--_supporting-text-font);font-size:var(--_supporting-text-size);line-height:var(--_supporting-text-line-height);font-weight:var(--_supporting-text-weight);height:min-content;position:relative}slot[name=content]::slotted(*){box-sizing:border-box;padding:24px}.anchor{position:absolute}.top.anchor{top:0}.bottom.anchor{bottom:0}.actions{position:relative}slot[name=actions]::slotted(*){box-sizing:border-box;display:flex;gap:8px;justify-content:flex-end;padding:16px 24px 24px}.has-actions slot[name=content]::slotted(*){padding-bottom:8px}md-divider{display:none;position:absolute}.has-headline.show-top-divider .headline md-divider,.has-actions.show-bottom-divider .actions md-divider{display:flex}.headline md-divider{bottom:0}.actions md-divider{top:0}@media(forced-colors: active){dialog{outline:2px solid WindowText}}/*# sourceMappingURL=dialog-styles.css.map */
`;var si=class extends k{};si.styles=[Tr];si=l([_("md-dialog")],si);var mo=new Set(Object.values(L)),$e=class extends g{get items(){return this.listController.items}constructor(){super(),this.listController=new Se({isItem:e=>e.hasAttribute("md-list-item"),getPossibleItems:()=>this.slotItems,isRtl:()=>getComputedStyle(this).direction==="rtl",deactivateItem:e=>{e.tabIndex=-1},activateItem:e=>{e.tabIndex=0},isNavigableKey:e=>mo.has(e),isActivatable:e=>!e.disabled&&e.type!=="text"}),this.internals=lt(this,this.attachInternals()),!1||(this.internals.role="list",this.addEventListener("keydown",this.listController.handleKeydown))}render(){return h`
      <slot
          @deactivate-items=${this.listController.onDeactivateItems}
          @request-activation=${this.listController.onRequestActivation}
          @slotchange=${this.listController.onSlotchange}>
      </slot>
    `}activateNextItem(){return this.listController.activateNextItem()}activatePreviousItem(){return this.listController.activatePreviousItem()}};at($e,{focusable:!1});l([U({flatten:!0})],$e.prototype,"slotItems",void 0);var $r=u`:host{background:var(--md-list-container-color, var(--md-sys-color-surface, #fef7ff));color:unset;display:flex;flex-direction:column;outline:none;padding:8px 0;position:relative}/*# sourceMappingURL=list-styles.css.map */
`;var ni=class extends $e{};ni.styles=[$r];ni=l([_("md-list")],ni);var Ir=u`@media(forced-colors: active){.disabled slot{color:GrayText}.list-item.disabled{color:GrayText;opacity:1}}/*# sourceMappingURL=forced-colors-styles.css.map */
`;var Y=class extends g{constructor(){super(...arguments),this.disabled=!1,this.type="text",this.isListItem=!0,this.href="",this.target=""}get isDisabled(){return this.disabled&&this.type!=="link"}willUpdate(e){this.href&&(this.type="link"),super.willUpdate(e)}render(){return this.renderListItem(h`
      <md-item>
        <div slot="container">
          ${this.renderRipple()}
          ${this.renderFocusRing()}
        </div>
        <slot name="start" slot="start"></slot>
        <slot name="end" slot="end"></slot>
        ${this.renderBody()}
      </md-item>
    `)}renderListItem(e){let t=this.type==="link",i;switch(this.type){case"link":i=K`a`;break;case"button":i=K`button`;break;default:case"text":i=K`li`;break}let o=this.type!=="text",a=t&&this.target?this.target:c;return se`
      <${i}
        id="item"
        tabindex="${this.isDisabled||!o?-1:0}"
        ?disabled=${this.isDisabled}
        role="listitem"
        aria-selected=${this.ariaSelected||c}
        aria-checked=${this.ariaChecked||c}
        aria-expanded=${this.ariaExpanded||c}
        aria-haspopup=${this.ariaHasPopup||c}
        class="list-item ${R(this.getRenderClasses())}"
        href=${this.href||c}
        target=${a}
        @focus=${this.onFocus}
      >${e}</${i}>
    `}renderRipple(){return this.type==="text"?c:h`
      <md-ripple
          part="ripple"
          for="item"
          ?disabled=${this.isDisabled}></md-ripple>`}renderFocusRing(){return this.type==="text"?c:h`
      <md-focus-ring
          @visibility-changed=${this.onFocusRingVisibilityChanged}
          part="focus-ring"
          for="item"
          inward></md-focus-ring>`}onFocusRingVisibilityChanged(e){}getRenderClasses(){return{disabled:this.isDisabled}}renderBody(){return h`
      <slot></slot>
      <slot name="overline" slot="overline"></slot>
      <slot name="headline" slot="headline"></slot>
      <slot name="supporting-text" slot="supporting-text"></slot>
      <slot name="trailing-supporting-text"
          slot="trailing-supporting-text"></slot>
    `}onFocus(){this.tabIndex===-1&&this.dispatchEvent(fr())}focus(){this.listItemRoot?.focus()}};H(Y);Y.shadowRootOptions={...g.shadowRootOptions,delegatesFocus:!0};l([n({type:Boolean,reflect:!0})],Y.prototype,"disabled",void 0);l([n()],Y.prototype,"type",void 0);l([n({type:Boolean,attribute:"md-list-item",reflect:!0})],Y.prototype,"isListItem",void 0);l([n()],Y.prototype,"href",void 0);l([n()],Y.prototype,"target",void 0);l([b(".list-item")],Y.prototype,"listItemRoot",void 0);var kr=u`:host{display:flex;--md-ripple-hover-color: var(--md-list-item-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-hover-opacity: var(--md-list-item-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-list-item-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-pressed-opacity: var(--md-list-item-pressed-state-layer-opacity, 0.12)}md-focus-ring{z-index:1;--md-focus-ring-shape: 8px}a,button,li{background:none;border:none;padding:0;margin:0;text-align:unset;text-decoration:none}.list-item{border-radius:inherit;display:flex;flex:1;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.list-item.interactive{cursor:pointer}.list-item.disabled{opacity:var(--md-list-item-disabled-opacity, 0.3);pointer-events:none}[slot=container]{pointer-events:none}md-ripple{border-radius:inherit}md-item{border-radius:inherit;flex:1;height:100%;color:var(--md-list-item-label-text-color, var(--md-sys-color-on-surface, #1d1b20));font-family:var(--md-list-item-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-list-item-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));line-height:var(--md-list-item-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));font-weight:var(--md-list-item-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));min-height:var(--md-list-item-one-line-container-height, 56px);padding-top:var(--md-list-item-top-space, 12px);padding-bottom:var(--md-list-item-bottom-space, 12px);padding-inline-start:var(--md-list-item-leading-space, 16px);padding-inline-end:var(--md-list-item-trailing-space, 16px)}md-item[multiline]{min-height:var(--md-list-item-two-line-container-height, 72px)}[slot=supporting-text]{color:var(--md-list-item-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-list-item-supporting-text-font, var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-list-item-supporting-text-size, var(--md-sys-typescale-body-medium-size, 0.875rem));line-height:var(--md-list-item-supporting-text-line-height, var(--md-sys-typescale-body-medium-line-height, 1.25rem));font-weight:var(--md-list-item-supporting-text-weight, var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400)))}[slot=trailing-supporting-text]{color:var(--md-list-item-trailing-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-list-item-trailing-supporting-text-font, var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-list-item-trailing-supporting-text-size, var(--md-sys-typescale-label-small-size, 0.6875rem));line-height:var(--md-list-item-trailing-supporting-text-line-height, var(--md-sys-typescale-label-small-line-height, 1rem));font-weight:var(--md-list-item-trailing-supporting-text-weight, var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500)))}:is([slot=start],[slot=end])::slotted(*){fill:currentColor}[slot=start]{color:var(--md-list-item-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}[slot=end]{color:var(--md-list-item-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}/*# sourceMappingURL=list-item-styles.css.map */
`;var di=class extends Y{};di.styles=[kr,Ir];di=l([_("md-list-item")],di);var be,D=be=class extends g{static get formAssociated(){return!0}constructor(){super(),this.captchaSiteKey="RECAPTCHA-SITE-KEY",this.captchaEndpoint="/ballerleague/v1/spam_check",this.brazeEndpoint="/ballerleague/v1/submit_application",this.successPage=new URL("/bewerbung-erfolgreich/",window.location.origin),this.selectedDates=new Set,this._submissionTask=new Pe(this,{task:async()=>{if(this._enrollmentService&&this._spamService){if(await this._spamService.isValidUser()){let t=this._normalizeData();return await this._enrollmentService.process(t)}throw new Error("Failed reCAPTCHA check")}throw new Error("ApplicationData, SpamService or EnrollmentService fields not set")}}),this.loadPolyfills()}static _reportFieldValidity(e){e.target.reportValidity()}static _renderTooltip(e){return h`
      <span class="tooltip-toggle" aria-label="${e}" tabindex="0">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM13 11V17H11V11H13ZM13 7V9H11V7H13Z" fill="#1D2124"/>
        </svg>
      </span>
    `}firstUpdated(){this._initializeServices(),this.dispatchEvent(new CustomEvent("signup-form-displayed",{bubbles:!0}))}render(){return h`
      ${this._renderForm()}

      ${this._submissionTask.render({initial:()=>this._renderInitialState(),pending:()=>this._renderPendingState(),complete:e=>this._renderSuccessState(e),error:e=>this._renderErrorState(e)})}
    `}async loadPolyfills(){let e=!!document.createElement("dialog").close,t="FormDataEvent"in window&&"ElementInternals"in window&&"setFormValue"in window.ElementInternals.prototype;if(!e)try{let{dialogPolyfill:i}=await import("https://ga.jspm.io/npm:dialog-polyfill@0.5.6/dist/dialog-polyfill.esm.js");i.registerDialog(this.successDialog),i.registerDialog(this.errorDialog),i.registerDialog(this.datePicker),console.info("Dialog element polyfill installed")}catch(i){console.error(`Unable to load Dialog element polyfill support
`,i)}if(!t)try{await import("https://ga.jspm.io/npm:element-internals-polyfill@1.3.9/dist/index.js"),this._internals=this.attachInternals(),console.info("Element Internals polyfill installed")}catch(i){console.error(`Unable to load Element Internals polyfill support
`,i)}}_initializeServices(){this._enrollmentService=new it(this.brazeEndpoint),this._spamService=new rt(this.captchaSiteKey,this.captchaEndpoint),this._spamService.featureEnabled&&this.applicationFormElement.insertAdjacentElement("afterbegin",this._spamService.generateScriptElement())}_normalizeData(){let e={familyName:this.familyName.value,givenName:this.firstName.value,email:this.email.value,xingMember:this.xingMember.value==="true",availableDates:this.selectedDates,acceptedTos:this.termsOfServiceBox.checked};return new tt(e)}_shouldEnableSubmit(){let e=this.termsOfServiceBox.checked,t=this.selectedDates.size!==0;return e&&t}_onSuccessDialogClose(){this.successDialog.close(),this.applicationFormElement.reset(),this.dateSelectionForm.reset()}_onDateSelection(e){let t=e.target.checked,i=e.target.dataset.date;t?this.selectedDates.add(i):this.selectedDates.delete(i),this.requestUpdate(),this._updateSubmitButton()}_onDateFormSubmit(e){e.preventDefault(),this.datePicker.close()}_onErrorDialogClose(){this.errorDialog.close()}_onSubmitEvent(e){if(e.preventDefault(),this.applicationFormElement.checkValidity())this._submissionTask.run();else{let t=this.applicationFormElement.querySelectorAll("md-filled-text-field, md-filled-select");for(let i of Array.from(t))if(!i.checkValidity()){i.reportValidity(),i.scrollIntoView(),i.focus(),this.dispatchEvent(new CustomEvent("invalid-field",{detail:i.localName,bubbles:!0}));break}}}_updateSubmitButton(){this._shouldEnableSubmit()?this.submitButton.disabled=!1:this.submitButton.disabled=!0}_renderInitialState(){}_renderPendingState(){}_renderSuccessState(e){window.location.href=this.successPage.href}_renderErrorState(e){this.dispatchEvent(new CustomEvent("submission_error",{detail:e})),console.error(e),this.errorDialog.open=!0}_openDatePicker(){this.datePicker.open=!0}_renderForm(){return h`
    <section id="form-wrapper">
      <form id="application-form">
        <div>
          ${this._renderPersonalQuestions()}
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

    ${this._renderDateSelectionDialog()}
    ${this._renderSuccessDialog()}
    ${this._renderErrorDialog()}
    `}static _renderMatchTimes(e,t=!1){return t?h`${e.toLocaleTimeString("de-DE",{hour:"numeric",minute:"numeric",timeZone:"CET",timeZoneName:"longGeneric"})}`:h`ab nachmittags`}_renderDateSelectionDialog(){let e=[new Date("2024-01-08T14:00:00.000+01:00"),new Date("2024-01-15T14:00:00.000+01:00"),new Date("2024-01-22T14:00:00.000+01:00"),new Date("2024-01-29T14:00:00.000+01:00"),new Date("2024-02-05T14:00:00.000+01:00"),new Date("2024-02-12T14:00:00.000+01:00"),new Date("2024-02-19T14:00:00.000+01:00"),new Date("2024-02-26T14:00:00.000+01:00"),new Date("2024-03-04T14:00:00.000+01:00"),new Date("2024-03-11T14:00:00.000+01:00"),new Date("2024-03-18T14:00:00.000+01:00"),new Date("2024-03-23T14:00:00.000+01:00")],t;return this.selectedDates.size===1?t=h`${this.selectedDates.size} Datum ausgewählt`:t=h`${this.selectedDates.size} Termine ausgewählt`,h`
      <md-dialog type="alert" data-reason="dates">
        <div slot="headline" class="display-small">
          ${t}
        </div>

        <md-list slot="content">
          <form id="date-selection">
        ${e.map(i=>h`
          <label>
            <md-list-item type="button">
              <div slot="headline">
                ${i.toLocaleDateString("de-DE",{weekday:"long",day:"numeric",year:"numeric",month:"long"})}
              </div>
              <div slot="supporting-text">
                ${be._renderMatchTimes(i)}
              </div>
              <div slot="trailing-supporting-text">
                <md-checkbox touch-target="wrapper" data-date=${i.toISOString()} @change=${this._onDateSelection}></md-checkbox>
              </div>
            </md-list-item>
          </label>`)}
          </form>
        </md-list>
        <div slot="actions">
          <md-filled-button value="close" @click=${this._onDateFormSubmit}>
            Bestätigen
          </md-filled-button>
        </div>
      </md-dialog>
    `}_renderSuccessDialog(){return h`
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
    `}_renderErrorDialog(){return h`
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
    `}_renderPersonalQuestions(){return h`
      <div>
        <div class="form-header">
          <p class="label-medium">
            Wie Du dabei sein kannst? Einfach für den XING Newsletter anmelden.
          </p>
          <p class="label-medium">
            Damit nimmst Du nicht nur an der Verlosung für die Tickets teil – Du bleibst auch mit den News um die Baller League immer am Ball.
          </p>
        </div>
        <div class="form-fields">
          <div class="field-with-tooltip">
            <md-filled-text-field
              label="E-Mail"
              required
              autocomplete="email"
              type="email"
              max="250"
              style="width: 100%"
              @blur=${be._reportFieldValidity}
            ></md-filled-text-field>
            <div class="invisible-icon"></div>
          </div>

          <div class="field-with-tooltip">
            <md-filled-text-field
              label="Vorname"
              required
              autocomplete="given-name"
              max="250"
              style="width: 100%"
              @blur=${be._reportFieldValidity}
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
              @blur=${be._reportFieldValidity}
            ></md-filled-text-field>
            <div class="invisible-icon"></div>
          </div>

          <div class="field-with-tooltip">
            <md-filled-select
              label="XING Member"
              name="xing-member"
              style="width: 100%;"
            >
              <md-select-option value="true">
                <div slot="headline">Ja</div>
              </md-select-option>
              <md-select-option value="false">
                <div slot="headline">Nein</div>
              </md-select-option>
            </md-filled-select>
            ${be._renderTooltip(Mi.xing)}
          </div>

          <div class="field-with-tooltip">
            <md-filled-tonal-button
              @click=${this._openDatePicker}
              type="button"
              name="apply"
              style="width: 100%"
            >
              Termine auswählen
            </md-filled-tonal-button>
            <div class="invisible-icon"></div>
          </div>

          <div class="field-with-tooltip">
            
            <label class="label-medium inline-label">
              <md-checkbox
                touch-target="wrapper"
                @change=${this._updateSubmitButton}
                data-element="tos"
                style="min-width: 1.2rem"
              ></md-checkbox>
              <span>
                Ja, ich möchte den regelmäßig erscheinenden E-Mail Newsletter von XING mit exklusiven Ticketverlosungen und Angeboten rund um die Baller League 
                erhalten. Abmeldung jederzeit möglich. Es gelten die
                <a href="https://www.new-work.se/de/datenschutz" target="_blank" style="color: #0698A0; text-decoration: none;">Datenschutzbestimmungen</a>
                der New Work SE. Mit der Teilnahme am Gewinnspiel stimmst Du unseren 
                <a href="#" target="_blank" style="color: #0698A0; text-decoration: none;">Teilnahmebedingungen</a>
                zu.
              </span>
            </label>
            <div class="invisible-icon"></div>
          </div>

        </div>
      </div>
    `}};D.styles=[Li];l([n({type:String,attribute:"site-key"})],D.prototype,"captchaSiteKey",void 0);l([n({type:String,attribute:"captcha-endpoint"})],D.prototype,"captchaEndpoint",void 0);l([n({type:String,attribute:"braze-endpoint"})],D.prototype,"brazeEndpoint",void 0);l([b('md-outlined-button[name="apply"]')],D.prototype,"submitButton",void 0);l([b("form#application-form")],D.prototype,"applicationFormElement",void 0);l([b("form#date-selection")],D.prototype,"dateSelectionForm",void 0);l([b('md-filled-text-field[autocomplete="given-name"]')],D.prototype,"firstName",void 0);l([b('md-filled-text-field[autocomplete="family-name"]')],D.prototype,"familyName",void 0);l([b('md-filled-text-field[autocomplete="email"]')],D.prototype,"email",void 0);l([b('md-filled-select[name="xing-member"]')],D.prototype,"xingMember",void 0);l([b('[data-element="tos"]')],D.prototype,"termsOfServiceBox",void 0);l([b('md-dialog[data-reason="success"]')],D.prototype,"successDialog",void 0);l([b('md-dialog[data-reason="error"]')],D.prototype,"errorDialog",void 0);l([b('md-dialog[data-reason="dates"]')],D.prototype,"datePicker",void 0);l([w()],D.prototype,"successPage",void 0);l([w()],D.prototype,"selectedDates",void 0);D=be=l([_("baller-form")],D);})();
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

@material/web/list/internal/list.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/list/internal/list-styles.css.js:
  (**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    *)

@material/web/list/list.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/list/internal/listitem/forced-colors-styles.css.js:
  (**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    *)

@material/web/list/internal/listitem/list-item.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/list/internal/listitem/list-item-styles.css.js:
  (**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    *)

@material/web/list/list-item.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)
*/
//# sourceMappingURL=baller-form-bundle.js.map
