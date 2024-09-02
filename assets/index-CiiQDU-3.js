var Ga=n=>{throw TypeError(n)};var AA=(n,e,t)=>e.has(n)||Ga("Cannot "+t);var Wa=(n,e,t)=>e.has(n)?Ga("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(n):e.set(n,t);var Xa=(n,e,t)=>(AA(n,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var vo=function(n,e){return vo=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])},vo(n,e)};function On(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");vo(n,e);function t(){this.constructor=n}n.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}function hA(n,e,t,i){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(u){try{c(i.next(u))}catch(A){o(A)}}function l(u){try{c(i.throw(u))}catch(A){o(A)}}function c(u){u.done?s(u.value):r(u.value).then(a,l)}c((i=i.apply(n,e||[])).next())})}function xc(n,e){var t={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},i,r,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(c){return function(u){return l([c,u])}}function l(c){if(i)throw new TypeError("Generator is already executing.");for(;o&&(o=0,c[0]&&(t=0)),t;)try{if(i=1,r&&(s=c[0]&2?r.return:c[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,c[1])).done)return s;switch(r=0,s&&(c=[c[0]&2,s.value]),c[0]){case 0:case 1:s=c;break;case 4:return t.label++,{value:c[1],done:!1};case 5:t.label++,r=c[1],c=[0];continue;case 7:c=t.ops.pop(),t.trys.pop();continue;default:if(s=t.trys,!(s=s.length>0&&s[s.length-1])&&(c[0]===6||c[0]===2)){t=0;continue}if(c[0]===3&&(!s||c[1]>s[0]&&c[1]<s[3])){t.label=c[1];break}if(c[0]===6&&t.label<s[1]){t.label=s[1],s=c;break}if(s&&t.label<s[2]){t.label=s[2],t.ops.push(c);break}s[2]&&t.ops.pop(),t.trys.pop();continue}c=e.call(n,t)}catch(u){c=[6,u],r=0}finally{i=s=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function zi(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Ln(n,e){var t=typeof Symbol=="function"&&n[Symbol.iterator];if(!t)return n;var i=t.call(n),r,s=[],o;try{for(;(e===void 0||e-- >0)&&!(r=i.next()).done;)s.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(t=i.return)&&t.call(i)}finally{if(o)throw o.error}}return s}function qn(n,e,t){if(t||arguments.length===2)for(var i=0,r=e.length,s;i<r;i++)(s||!(i in e))&&(s||(s=Array.prototype.slice.call(e,0,i)),s[i]=e[i]);return n.concat(s||Array.prototype.slice.call(e))}function Ii(n){return this instanceof Ii?(this.v=n,this):new Ii(n)}function dA(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=t.apply(n,e||[]),r,s=[];return r={},a("next"),a("throw"),a("return",o),r[Symbol.asyncIterator]=function(){return this},r;function o(d){return function(m){return Promise.resolve(m).then(d,A)}}function a(d,m){i[d]&&(r[d]=function(v){return new Promise(function(p,f){s.push([d,v,p,f])>1||l(d,v)})},m&&(r[d]=m(r[d])))}function l(d,m){try{c(i[d](m))}catch(v){h(s[0][3],v)}}function c(d){d.value instanceof Ii?Promise.resolve(d.value.v).then(u,A):h(s[0][2],d)}function u(d){l("next",d)}function A(d){l("throw",d)}function h(d,m){d(m),s.shift(),s.length&&l(s[0][0],s[0][1])}}function fA(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof zi=="function"?zi(n):n[Symbol.iterator](),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(s){t[s]=n[s]&&function(o){return new Promise(function(a,l){o=n[s](o),r(a,l,o.done,o.value)})}}function r(s,o,a,l){Promise.resolve(l).then(function(c){s({value:c,done:a})},o)}}function ut(n){return typeof n=="function"}function fa(n){var e=function(i){Error.call(i),i.stack=new Error().stack},t=n(e);return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var Is=fa(function(n){return function(t){n(this),this.message=t?t.length+` errors occurred during unsubscription:
`+t.map(function(i,r){return r+1+") "+i.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=t}});function us(n,e){if(n){var t=n.indexOf(e);0<=t&&n.splice(t,1)}}var fr=function(){function n(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}return n.prototype.unsubscribe=function(){var e,t,i,r,s;if(!this.closed){this.closed=!0;var o=this._parentage;if(o)if(this._parentage=null,Array.isArray(o))try{for(var a=zi(o),l=a.next();!l.done;l=a.next()){var c=l.value;c.remove(this)}}catch(v){e={error:v}}finally{try{l&&!l.done&&(t=a.return)&&t.call(a)}finally{if(e)throw e.error}}else o.remove(this);var u=this.initialTeardown;if(ut(u))try{u()}catch(v){s=v instanceof Is?v.errors:[v]}var A=this._finalizers;if(A){this._finalizers=null;try{for(var h=zi(A),d=h.next();!d.done;d=h.next()){var m=d.value;try{ja(m)}catch(v){s=s??[],v instanceof Is?s=qn(qn([],Ln(s)),Ln(v.errors)):s.push(v)}}}catch(v){i={error:v}}finally{try{d&&!d.done&&(r=h.return)&&r.call(h)}finally{if(i)throw i.error}}}if(s)throw new Is(s)}},n.prototype.add=function(e){var t;if(e&&e!==this)if(this.closed)ja(e);else{if(e instanceof n){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}},n.prototype._hasParent=function(e){var t=this._parentage;return t===e||Array.isArray(t)&&t.includes(e)},n.prototype._addParent=function(e){var t=this._parentage;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e},n.prototype._removeParent=function(e){var t=this._parentage;t===e?this._parentage=null:Array.isArray(t)&&us(t,e)},n.prototype.remove=function(e){var t=this._finalizers;t&&us(t,e),e instanceof n&&e._removeParent(this)},n.EMPTY=function(){var e=new n;return e.closed=!0,e}(),n}(),yc=fr.EMPTY;function Sc(n){return n instanceof fr||n&&"closed"in n&&ut(n.remove)&&ut(n.add)&&ut(n.unsubscribe)}function ja(n){ut(n)?n():n.unsubscribe()}var bc={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},Mc={setTimeout:function(n,e){for(var t=[],i=2;i<arguments.length;i++)t[i-2]=arguments[i];return setTimeout.apply(void 0,qn([n,e],Ln(t)))},clearTimeout:function(n){var e=Mc.delegate;return((e==null?void 0:e.clearTimeout)||clearTimeout)(n)},delegate:void 0};function Ec(n){Mc.setTimeout(function(){throw n})}function Za(){}function ts(n){n()}var pa=function(n){On(e,n);function e(t){var i=n.call(this)||this;return i.isStopped=!1,t?(i.destination=t,Sc(t)&&t.add(i)):i.destination=gA,i}return e.create=function(t,i,r){return new As(t,i,r)},e.prototype.next=function(t){this.isStopped||this._next(t)},e.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,n.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(t){this.destination.next(t)},e.prototype._error=function(t){try{this.destination.error(t)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e}(fr),pA=Function.prototype.bind;function Us(n,e){return pA.call(n,e)}var mA=function(){function n(e){this.partialObserver=e}return n.prototype.next=function(e){var t=this.partialObserver;if(t.next)try{t.next(e)}catch(i){br(i)}},n.prototype.error=function(e){var t=this.partialObserver;if(t.error)try{t.error(e)}catch(i){br(i)}else br(e)},n.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(t){br(t)}},n}(),As=function(n){On(e,n);function e(t,i,r){var s=n.call(this)||this,o;if(ut(t)||!t)o={next:t??void 0,error:i??void 0,complete:r??void 0};else{var a;s&&bc.useDeprecatedNextContext?(a=Object.create(t),a.unsubscribe=function(){return s.unsubscribe()},o={next:t.next&&Us(t.next,a),error:t.error&&Us(t.error,a),complete:t.complete&&Us(t.complete,a)}):o=t}return s.destination=new mA(o),s}return e}(pa);function br(n){Ec(n)}function vA(n){throw n}var gA={closed:!0,next:Za,error:vA,complete:Za},ma=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function bs(n){return n}function _A(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return Tc(n)}function Tc(n){return n.length===0?bs:n.length===1?n[0]:function(t){return n.reduce(function(i,r){return r(i)},t)}}var Bt=function(){function n(e){e&&(this._subscribe=e)}return n.prototype.lift=function(e){var t=new n;return t.source=this,t.operator=e,t},n.prototype.subscribe=function(e,t,i){var r=this,s=yA(e)?e:new As(e,t,i);return ts(function(){var o=r,a=o.operator,l=o.source;s.add(a?a.call(s,l):l?r._subscribe(s):r._trySubscribe(s))}),s},n.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(t){e.error(t)}},n.prototype.forEach=function(e,t){var i=this;return t=Ja(t),new t(function(r,s){var o=new As({next:function(a){try{e(a)}catch(l){s(l),o.unsubscribe()}},error:s,complete:r});i.subscribe(o)})},n.prototype._subscribe=function(e){var t;return(t=this.source)===null||t===void 0?void 0:t.subscribe(e)},n.prototype[ma]=function(){return this},n.prototype.pipe=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return Tc(e)(this)},n.prototype.toPromise=function(e){var t=this;return e=Ja(e),new e(function(i,r){var s;t.subscribe(function(o){return s=o},function(o){return r(o)},function(){return i(s)})})},n.create=function(e){return new n(e)},n}();function Ja(n){var e;return(e=n??bc.Promise)!==null&&e!==void 0?e:Promise}function xA(n){return n&&ut(n.next)&&ut(n.error)&&ut(n.complete)}function yA(n){return n&&n instanceof pa||xA(n)&&Sc(n)}function SA(n){return ut(n==null?void 0:n.lift)}function Dn(n){return function(e){if(SA(e))return e.lift(function(t){try{return n(t,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function ri(n,e,t,i,r){return new bA(n,e,t,i,r)}var bA=function(n){On(e,n);function e(t,i,r,s,o,a){var l=n.call(this,t)||this;return l.onFinalize=o,l.shouldUnsubscribe=a,l._next=i?function(c){try{i(c)}catch(u){t.error(u)}}:n.prototype._next,l._error=s?function(c){try{s(c)}catch(u){t.error(u)}finally{this.unsubscribe()}}:n.prototype._error,l._complete=r?function(){try{r()}catch(c){t.error(c)}finally{this.unsubscribe()}}:n.prototype._complete,l}return e.prototype.unsubscribe=function(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var i=this.closed;n.prototype.unsubscribe.call(this),!i&&((t=this.onFinalize)===null||t===void 0||t.call(this))}},e}(pa),MA=fa(function(n){return function(){n(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),wc=function(n){On(e,n);function e(){var t=n.call(this)||this;return t.closed=!1,t.currentObservers=null,t.observers=[],t.isStopped=!1,t.hasError=!1,t.thrownError=null,t}return e.prototype.lift=function(t){var i=new Ya(this,this);return i.operator=t,i},e.prototype._throwIfClosed=function(){if(this.closed)throw new MA},e.prototype.next=function(t){var i=this;ts(function(){var r,s;if(i._throwIfClosed(),!i.isStopped){i.currentObservers||(i.currentObservers=Array.from(i.observers));try{for(var o=zi(i.currentObservers),a=o.next();!a.done;a=o.next()){var l=a.value;l.next(t)}}catch(c){r={error:c}}finally{try{a&&!a.done&&(s=o.return)&&s.call(o)}finally{if(r)throw r.error}}}})},e.prototype.error=function(t){var i=this;ts(function(){if(i._throwIfClosed(),!i.isStopped){i.hasError=i.isStopped=!0,i.thrownError=t;for(var r=i.observers;r.length;)r.shift().error(t)}})},e.prototype.complete=function(){var t=this;ts(function(){if(t._throwIfClosed(),!t.isStopped){t.isStopped=!0;for(var i=t.observers;i.length;)i.shift().complete()}})},e.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(e.prototype,"observed",{get:function(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0},enumerable:!1,configurable:!0}),e.prototype._trySubscribe=function(t){return this._throwIfClosed(),n.prototype._trySubscribe.call(this,t)},e.prototype._subscribe=function(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)},e.prototype._innerSubscribe=function(t){var i=this,r=this,s=r.hasError,o=r.isStopped,a=r.observers;return s||o?yc:(this.currentObservers=null,a.push(t),new fr(function(){i.currentObservers=null,us(a,t)}))},e.prototype._checkFinalizedStatuses=function(t){var i=this,r=i.hasError,s=i.thrownError,o=i.isStopped;r?t.error(s):o&&t.complete()},e.prototype.asObservable=function(){var t=new Bt;return t.source=this,t},e.create=function(t,i){return new Ya(t,i)},e}(Bt),Ya=function(n){On(e,n);function e(t,i){var r=n.call(this)||this;return r.destination=t,r.source=i,r}return e.prototype.next=function(t){var i,r;(r=(i=this.destination)===null||i===void 0?void 0:i.next)===null||r===void 0||r.call(i,t)},e.prototype.error=function(t){var i,r;(r=(i=this.destination)===null||i===void 0?void 0:i.error)===null||r===void 0||r.call(i,t)},e.prototype.complete=function(){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.complete)===null||i===void 0||i.call(t)},e.prototype._subscribe=function(t){var i,r;return(r=(i=this.source)===null||i===void 0?void 0:i.subscribe(t))!==null&&r!==void 0?r:yc},e}(wc),EA={now:function(){return Date.now()},delegate:void 0},TA=function(n){On(e,n);function e(t,i){return n.call(this)||this}return e.prototype.schedule=function(t,i){return this},e}(fr),go={setInterval:function(n,e){for(var t=[],i=2;i<arguments.length;i++)t[i-2]=arguments[i];return setInterval.apply(void 0,qn([n,e],Ln(t)))},clearInterval:function(n){var e=go.delegate;return((e==null?void 0:e.clearInterval)||clearInterval)(n)},delegate:void 0},wA=function(n){On(e,n);function e(t,i){var r=n.call(this,t,i)||this;return r.scheduler=t,r.work=i,r.pending=!1,r}return e.prototype.schedule=function(t,i){var r;if(i===void 0&&(i=0),this.closed)return this;this.state=t;var s=this.id,o=this.scheduler;return s!=null&&(this.id=this.recycleAsyncId(o,s,i)),this.pending=!0,this.delay=i,this.id=(r=this.id)!==null&&r!==void 0?r:this.requestAsyncId(o,this.id,i),this},e.prototype.requestAsyncId=function(t,i,r){return r===void 0&&(r=0),go.setInterval(t.flush.bind(t,this),r)},e.prototype.recycleAsyncId=function(t,i,r){if(r===void 0&&(r=0),r!=null&&this.delay===r&&this.pending===!1)return i;i!=null&&go.clearInterval(i)},e.prototype.execute=function(t,i){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var r=this._execute(t,i);if(r)return r;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},e.prototype._execute=function(t,i){var r=!1,s;try{this.work(t)}catch(o){r=!0,s=o||new Error("Scheduled action threw falsy error")}if(r)return this.unsubscribe(),s},e.prototype.unsubscribe=function(){if(!this.closed){var t=this,i=t.id,r=t.scheduler,s=r.actions;this.work=this.state=this.scheduler=null,this.pending=!1,us(s,this),i!=null&&(this.id=this.recycleAsyncId(r,i,null)),this.delay=null,n.prototype.unsubscribe.call(this)}},e}(TA),Ka=function(){function n(e,t){t===void 0&&(t=n.now),this.schedulerActionCtor=e,this.now=t}return n.prototype.schedule=function(e,t,i){return t===void 0&&(t=0),new this.schedulerActionCtor(this,e).schedule(i,t)},n.now=EA.now,n}(),PA=function(n){On(e,n);function e(t,i){i===void 0&&(i=Ka.now);var r=n.call(this,t,i)||this;return r.actions=[],r._active=!1,r}return e.prototype.flush=function(t){var i=this.actions;if(this._active){i.push(t);return}var r;this._active=!0;do if(r=t.execute(t.state,t.delay))break;while(t=i.shift());if(this._active=!1,r){for(;t=i.shift();)t.unsubscribe();throw r}},e}(Ka),Pc=new PA(wA),RA=Pc;function Rc(n){return n&&ut(n.schedule)}function Cc(n){return n[n.length-1]}function CA(n){return ut(Cc(n))?n.pop():void 0}function Lc(n){return Rc(Cc(n))?n.pop():void 0}var qc=function(n){return n&&typeof n.length=="number"&&typeof n!="function"};function Ic(n){return ut(n==null?void 0:n.then)}function Uc(n){return ut(n[ma])}function Nc(n){return Symbol.asyncIterator&&ut(n==null?void 0:n[Symbol.asyncIterator])}function Oc(n){return new TypeError("You provided "+(n!==null&&typeof n=="object"?"an invalid object":"'"+n+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function LA(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Dc=LA();function zc(n){return ut(n==null?void 0:n[Dc])}function Fc(n){return dA(this,arguments,function(){var t,i,r,s;return xc(this,function(o){switch(o.label){case 0:t=n.getReader(),o.label=1;case 1:o.trys.push([1,,9,10]),o.label=2;case 2:return[4,Ii(t.read())];case 3:return i=o.sent(),r=i.value,s=i.done,s?[4,Ii(void 0)]:[3,5];case 4:return[2,o.sent()];case 5:return[4,Ii(r)];case 6:return[4,o.sent()];case 7:return o.sent(),[3,2];case 8:return[3,10];case 9:return t.releaseLock(),[7];case 10:return[2]}})})}function kc(n){return ut(n==null?void 0:n.getReader)}function pr(n){if(n instanceof Bt)return n;if(n!=null){if(Uc(n))return qA(n);if(qc(n))return IA(n);if(Ic(n))return UA(n);if(Nc(n))return Hc(n);if(zc(n))return NA(n);if(kc(n))return OA(n)}throw Oc(n)}function qA(n){return new Bt(function(e){var t=n[ma]();if(ut(t.subscribe))return t.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function IA(n){return new Bt(function(e){for(var t=0;t<n.length&&!e.closed;t++)e.next(n[t]);e.complete()})}function UA(n){return new Bt(function(e){n.then(function(t){e.closed||(e.next(t),e.complete())},function(t){return e.error(t)}).then(null,Ec)})}function NA(n){return new Bt(function(e){var t,i;try{for(var r=zi(n),s=r.next();!s.done;s=r.next()){var o=s.value;if(e.next(o),e.closed)return}}catch(a){t={error:a}}finally{try{s&&!s.done&&(i=r.return)&&i.call(r)}finally{if(t)throw t.error}}e.complete()})}function Hc(n){return new Bt(function(e){DA(n,e).catch(function(t){return e.error(t)})})}function OA(n){return Hc(Fc(n))}function DA(n,e){var t,i,r,s;return hA(this,void 0,void 0,function(){var o,a;return xc(this,function(l){switch(l.label){case 0:l.trys.push([0,5,6,11]),t=fA(n),l.label=1;case 1:return[4,t.next()];case 2:if(i=l.sent(),!!i.done)return[3,4];if(o=i.value,e.next(o),e.closed)return[2];l.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return a=l.sent(),r={error:a},[3,11];case 6:return l.trys.push([6,,9,10]),i&&!i.done&&(s=t.return)?[4,s.call(t)]:[3,8];case 7:l.sent(),l.label=8;case 8:return[3,10];case 9:if(r)throw r.error;return[7];case 10:return[7];case 11:return e.complete(),[2]}})})}function ii(n,e,t,i,r){i===void 0&&(i=0),r===void 0&&(r=!1);var s=e.schedule(function(){t(),r?n.add(this.schedule(null,i)):this.unsubscribe()},i);if(n.add(s),!r)return s}function Vc(n,e){return e===void 0&&(e=0),Dn(function(t,i){t.subscribe(ri(i,function(r){return ii(i,n,function(){return i.next(r)},e)},function(){return ii(i,n,function(){return i.complete()},e)},function(r){return ii(i,n,function(){return i.error(r)},e)}))})}function Bc(n,e){return e===void 0&&(e=0),Dn(function(t,i){i.add(n.schedule(function(){return t.subscribe(i)},e))})}function zA(n,e){return pr(n).pipe(Bc(e),Vc(e))}function FA(n,e){return pr(n).pipe(Bc(e),Vc(e))}function kA(n,e){return new Bt(function(t){var i=0;return e.schedule(function(){i===n.length?t.complete():(t.next(n[i++]),t.closed||this.schedule())})})}function HA(n,e){return new Bt(function(t){var i;return ii(t,e,function(){i=n[Dc](),ii(t,e,function(){var r,s,o;try{r=i.next(),s=r.value,o=r.done}catch(a){t.error(a);return}o?t.complete():t.next(s)},0,!0)}),function(){return ut(i==null?void 0:i.return)&&i.return()}})}function Gc(n,e){if(!n)throw new Error("Iterable cannot be null");return new Bt(function(t){ii(t,e,function(){var i=n[Symbol.asyncIterator]();ii(t,e,function(){i.next().then(function(r){r.done?t.complete():t.next(r.value)})},0,!0)})})}function VA(n,e){return Gc(Fc(n),e)}function BA(n,e){if(n!=null){if(Uc(n))return zA(n,e);if(qc(n))return kA(n,e);if(Ic(n))return FA(n,e);if(Nc(n))return Gc(n,e);if(zc(n))return HA(n,e);if(kc(n))return VA(n,e)}throw Oc(n)}function Wc(n,e){return e?BA(n,e):pr(n)}var GA=fa(function(n){return function(){n(this),this.name="EmptyError",this.message="no elements in sequence"}});function Qa(n,e){return new Promise(function(t,i){var r=new As({next:function(s){t(s),r.unsubscribe()},error:i,complete:function(){i(new GA)}});n.subscribe(r)})}function WA(n){return n instanceof Date&&!isNaN(n)}function va(n,e){return Dn(function(t,i){var r=0;t.subscribe(ri(i,function(s){i.next(n.call(e,s,r++))}))})}var XA=Array.isArray;function jA(n,e){return XA(e)?n.apply(void 0,qn([],Ln(e))):n(e)}function ZA(n){return va(function(e){return jA(n,e)})}function JA(n,e,t){return t===void 0&&(t=bs),function(i){$a(e,function(){for(var r=n.length,s=new Array(r),o=r,a=r,l=function(u){$a(e,function(){var A=Wc(n[u],e),h=!1;A.subscribe(ri(i,function(d){s[u]=d,h||(h=!0,a--),a||i.next(t(s.slice()))},function(){--o||i.complete()}))},i)},c=0;c<r;c++)l(c)})}}function $a(n,e,t){e()}function YA(n,e,t,i,r,s,o,a){var l=[],c=0,u=0,A=!1,h=function(){A&&!l.length&&!c&&e.complete()},d=function(v){return c<i?m(v):l.push(v)},m=function(v){c++;var p=!1;pr(t(v,u++)).subscribe(ri(e,function(f){e.next(f)},function(){p=!0},void 0,function(){if(p)try{c--;for(var f=function(){var E=l.shift();o||m(E)};l.length&&c<i;)f();h()}catch(E){e.error(E)}}))};return n.subscribe(ri(e,d,function(){A=!0,h()})),function(){}}function Xc(n,e,t){return t===void 0&&(t=1/0),ut(e)?Xc(function(i,r){return va(function(s,o){return e(i,s,r,o)})(pr(n(i,r)))},t):(typeof e=="number"&&(t=e),Dn(function(i,r){return YA(i,r,n,t)}))}function KA(n){return Xc(bs,n)}function QA(){return KA(1)}function el(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return QA()(Wc(n,Lc(n)))}function $A(n,e,t){t===void 0&&(t=RA);var i=-1;return Rc(e)?t=e:i=e,new Bt(function(r){var s=WA(n)?+n-t.now():n;s<0&&(s=0);var o=0;return t.schedule(function(){r.closed||(r.next(o++),0<=i?this.schedule(void 0,i):r.complete())},s)})}function eh(n,e){return e===void 0&&(e=Pc),$A(n,n,e)}var th=Array.isArray;function nh(n){return n.length===1&&th(n[0])?n[0]:n}function jc(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];var t=CA(n);return t?_A(jc.apply(void 0,qn([],Ln(n))),ZA(t)):Dn(function(i,r){JA(qn([i],Ln(nh(n))))(r)})}function ih(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return jc.apply(void 0,qn([],Ln(n)))}function rh(){return Dn(function(n,e){var t,i=!1;n.subscribe(ri(e,function(r){var s=t;t=r,i&&e.next([s,r]),i=!0}))})}function Zc(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];var t=Lc(n);return Dn(function(i,r){(t?el(n,i,t):el(n,i)).subscribe(r)})}function sh(n,e,t){var i=ut(n)||e||t?{next:n,error:e,complete:t}:n;return i?Dn(function(r,s){var o;(o=i.subscribe)===null||o===void 0||o.call(i);var a=!0;r.subscribe(ri(s,function(l){var c;(c=i.next)===null||c===void 0||c.call(i,l),s.next(l)},function(){var l;a=!1,(l=i.complete)===null||l===void 0||l.call(i),s.complete()},function(l){var c;a=!1,(c=i.error)===null||c===void 0||c.call(i,l),s.error(l)},function(){var l,c;a&&((l=i.unsubscribe)===null||l===void 0||l.call(i)),(c=i.finalize)===null||c===void 0||c.call(i)}))}):bs}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ga="167",oh=0,tl=1,ah=2,Jc=1,lh=2,mn=3,In=0,qt=1,nn=2,Rn=0,Ui=1,nl=2,il=3,rl=4,ch=5,Qn=100,uh=101,Ah=102,hh=103,dh=104,fh=200,ph=201,mh=202,vh=203,_o=204,xo=205,gh=206,_h=207,xh=208,yh=209,Sh=210,bh=211,Mh=212,Eh=213,Th=214,wh=0,Ph=1,Rh=2,hs=3,Ch=4,Lh=5,qh=6,Ih=7,Yc=0,Uh=1,Nh=2,Cn=0,Oh=1,Dh=2,zh=3,Fh=4,kh=5,Hh=6,Vh=7,Kc=300,Fi=301,ki=302,yo=303,So=304,Ms=306,bo=1e3,ei=1001,Mo=1002,Ft=1003,Bh=1004,Mr=1005,Jt=1006,Ns=1007,ti=1008,_n=1009,Qc=1010,$c=1011,lr=1012,_a=1013,si=1014,vn=1015,mr=1016,xa=1017,ya=1018,Hi=1020,eu=35902,tu=1021,nu=1022,Yt=1023,iu=1024,ru=1025,Ni=1026,Vi=1027,su=1028,Sa=1029,ou=1030,ba=1031,Ma=1033,ns=33776,is=33777,rs=33778,ss=33779,Eo=35840,To=35841,wo=35842,Po=35843,Ro=36196,Co=37492,Lo=37496,qo=37808,Io=37809,Uo=37810,No=37811,Oo=37812,Do=37813,zo=37814,Fo=37815,ko=37816,Ho=37817,Vo=37818,Bo=37819,Go=37820,Wo=37821,os=36492,Xo=36494,jo=36495,au=36283,Zo=36284,Jo=36285,Yo=36286,Gh=3200,Wh=3201,lu=0,Xh=1,Pn="",Zt="srgb",zn="srgb-linear",Ea="display-p3",Es="display-p3-linear",ds="linear",st="srgb",fs="rec709",ps="p3",Ai=7680,sl=519,jh=512,Zh=513,Jh=514,cu=515,Yh=516,Kh=517,Qh=518,$h=519,ol=35044,al="300 es",gn=2e3,ms=2001;class Gi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Os=Math.PI/180,Ko=180/Math.PI;function Wi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Mt[n&255]+Mt[n>>8&255]+Mt[n>>16&255]+Mt[n>>24&255]+"-"+Mt[e&255]+Mt[e>>8&255]+"-"+Mt[e>>16&15|64]+Mt[e>>24&255]+"-"+Mt[t&63|128]+Mt[t>>8&255]+"-"+Mt[t>>16&255]+Mt[t>>24&255]+Mt[i&255]+Mt[i>>8&255]+Mt[i>>16&255]+Mt[i>>24&255]).toLowerCase()}function Tt(n,e,t){return Math.max(e,Math.min(t,n))}function ed(n,e){return(n%e+e)%e}function Ds(n,e,t){return(1-t)*n+t*e}function ji(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Lt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class pe{constructor(e=0,t=0){pe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(e,t,i,r,s,o,a,l,c){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],A=i[7],h=i[2],d=i[5],m=i[8],v=r[0],p=r[3],f=r[6],E=r[1],_=r[4],b=r[7],N=r[2],P=r[5],w=r[8];return s[0]=o*v+a*E+l*N,s[3]=o*p+a*_+l*P,s[6]=o*f+a*b+l*w,s[1]=c*v+u*E+A*N,s[4]=c*p+u*_+A*P,s[7]=c*f+u*b+A*w,s[2]=h*v+d*E+m*N,s[5]=h*p+d*_+m*P,s[8]=h*f+d*b+m*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],A=u*o-a*c,h=a*l-u*s,d=c*s-o*l,m=t*A+i*h+r*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=A*v,e[1]=(r*c-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=h*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-a*t)*v,e[6]=d*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(zs.makeScale(e,t)),this}rotate(e){return this.premultiply(zs.makeRotation(-e)),this}translate(e,t){return this.premultiply(zs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const zs=new Ve;function uu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function cr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function td(){const n=cr("canvas");return n.style.display="block",n}const ll={};function ir(n){n in ll||(ll[n]=!0,console.warn(n))}function nd(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const cl=new Ve().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ul=new Ve().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Zi={[zn]:{transfer:ds,primaries:fs,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[Zt]:{transfer:st,primaries:fs,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Es]:{transfer:ds,primaries:ps,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(ul),fromReference:n=>n.applyMatrix3(cl)},[Ea]:{transfer:st,primaries:ps,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(ul),fromReference:n=>n.applyMatrix3(cl).convertLinearToSRGB()}},id=new Set([zn,Es]),it={enabled:!0,_workingColorSpace:zn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!id.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Zi[e].toReference,r=Zi[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Zi[n].primaries},getTransfer:function(n){return n===Pn?ds:Zi[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(Zi[e].luminanceCoefficients)}};function Oi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Fs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let hi;class rd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{hi===void 0&&(hi=cr("canvas")),hi.width=e.width,hi.height=e.height;const i=hi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=hi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=cr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Oi(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Oi(t[i]/255)*255):t[i]=Oi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let sd=0;class Au{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=Wi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ks(r[o].image)):s.push(ks(r[o]))}else s=ks(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ks(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?rd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let od=0;class wt extends Gi{constructor(e=wt.DEFAULT_IMAGE,t=wt.DEFAULT_MAPPING,i=ei,r=ei,s=Jt,o=ti,a=Yt,l=_n,c=wt.DEFAULT_ANISOTROPY,u=Pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:od++}),this.uuid=Wi(),this.name="",this.source=new Au(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bo:e.x=e.x-Math.floor(e.x);break;case ei:e.x=e.x<0?0:1;break;case Mo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bo:e.y=e.y-Math.floor(e.y);break;case ei:e.y=e.y<0?0:1;break;case Mo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wt.DEFAULT_IMAGE=null;wt.DEFAULT_MAPPING=Kc;wt.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,t=0,i=0,r=1){_t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],A=l[8],h=l[1],d=l[5],m=l[9],v=l[2],p=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(A-v)<.01&&Math.abs(m-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(A+v)<.1&&Math.abs(m+p)<.1&&Math.abs(c+d+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,b=(d+1)/2,N=(f+1)/2,P=(u+h)/4,w=(A+v)/4,U=(m+p)/4;return _>b&&_>N?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=P/i,s=w/i):b>N?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=P/r,s=U/r):N<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(N),i=w/s,r=U/s),this.set(i,r,s,t),this}let E=Math.sqrt((p-m)*(p-m)+(A-v)*(A-v)+(h-u)*(h-u));return Math.abs(E)<.001&&(E=1),this.x=(p-m)/E,this.y=(A-v)/E,this.z=(h-u)/E,this.w=Math.acos((c+d+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ad extends Gi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new wt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Au(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class oi extends ad{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class hu extends wt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ld extends wt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],A=i[r+3];const h=s[o+0],d=s[o+1],m=s[o+2],v=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=A;return}if(a===1){e[t+0]=h,e[t+1]=d,e[t+2]=m,e[t+3]=v;return}if(A!==v||l!==h||c!==d||u!==m){let p=1-a;const f=l*h+c*d+u*m+A*v,E=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){const N=Math.sqrt(_),P=Math.atan2(N,f*E);p=Math.sin(p*P)/N,a=Math.sin(a*P)/N}const b=a*E;if(l=l*p+h*b,c=c*p+d*b,u=u*p+m*b,A=A*p+v*b,p===1-a){const N=1/Math.sqrt(l*l+c*c+u*u+A*A);l*=N,c*=N,u*=N,A*=N}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=A}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],A=s[o],h=s[o+1],d=s[o+2],m=s[o+3];return e[t]=a*m+u*A+l*d-c*h,e[t+1]=l*m+u*h+c*A-a*d,e[t+2]=c*m+u*d+a*h-l*A,e[t+3]=u*m-a*A-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),A=a(s/2),h=l(i/2),d=l(r/2),m=l(s/2);switch(o){case"XYZ":this._x=h*u*A+c*d*m,this._y=c*d*A-h*u*m,this._z=c*u*m+h*d*A,this._w=c*u*A-h*d*m;break;case"YXZ":this._x=h*u*A+c*d*m,this._y=c*d*A-h*u*m,this._z=c*u*m-h*d*A,this._w=c*u*A+h*d*m;break;case"ZXY":this._x=h*u*A-c*d*m,this._y=c*d*A+h*u*m,this._z=c*u*m+h*d*A,this._w=c*u*A-h*d*m;break;case"ZYX":this._x=h*u*A-c*d*m,this._y=c*d*A+h*u*m,this._z=c*u*m-h*d*A,this._w=c*u*A+h*d*m;break;case"YZX":this._x=h*u*A+c*d*m,this._y=c*d*A+h*u*m,this._z=c*u*m-h*d*A,this._w=c*u*A-h*d*m;break;case"XZY":this._x=h*u*A-c*d*m,this._y=c*d*A-h*u*m,this._z=c*u*m+h*d*A,this._w=c*u*A+h*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],A=t[10],h=i+a+A;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(i>a&&i>A){const d=2*Math.sqrt(1+i-a-A);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>A){const d=2*Math.sqrt(1+a-i-A);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+A-i-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),A=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*A+this._w*h,this._x=i*A+this._x*h,this._y=r*A+this._y*h,this._z=s*A+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,t=0,i=0){q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Al.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Al.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),A=2*(s*i-o*t);return this.x=t+l*c+o*A-a*u,this.y=i+l*u+a*c-s*A,this.z=r+l*A+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Hs.copy(this).projectOnVector(e),this.sub(Hs)}reflect(e){return this.sub(Hs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hs=new q,Al=new vr;class gr{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Wt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Wt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Wt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Wt):Wt.fromBufferAttribute(s,o),Wt.applyMatrix4(e.matrixWorld),this.expandByPoint(Wt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Er.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Er.copy(i.boundingBox)),Er.applyMatrix4(e.matrixWorld),this.union(Er)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wt),Wt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ji),Tr.subVectors(this.max,Ji),di.subVectors(e.a,Ji),fi.subVectors(e.b,Ji),pi.subVectors(e.c,Ji),Sn.subVectors(fi,di),bn.subVectors(pi,fi),Bn.subVectors(di,pi);let t=[0,-Sn.z,Sn.y,0,-bn.z,bn.y,0,-Bn.z,Bn.y,Sn.z,0,-Sn.x,bn.z,0,-bn.x,Bn.z,0,-Bn.x,-Sn.y,Sn.x,0,-bn.y,bn.x,0,-Bn.y,Bn.x,0];return!Vs(t,di,fi,pi,Tr)||(t=[1,0,0,0,1,0,0,0,1],!Vs(t,di,fi,pi,Tr))?!1:(wr.crossVectors(Sn,bn),t=[wr.x,wr.y,wr.z],Vs(t,di,fi,pi,Tr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const un=[new q,new q,new q,new q,new q,new q,new q,new q],Wt=new q,Er=new gr,di=new q,fi=new q,pi=new q,Sn=new q,bn=new q,Bn=new q,Ji=new q,Tr=new q,wr=new q,Gn=new q;function Vs(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Gn.fromArray(n,s);const a=r.x*Math.abs(Gn.x)+r.y*Math.abs(Gn.y)+r.z*Math.abs(Gn.z),l=e.dot(Gn),c=t.dot(Gn),u=i.dot(Gn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const cd=new gr,Yi=new q,Bs=new q;class Ta{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):cd.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Yi.subVectors(e,this.center);const t=Yi.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Yi,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Yi.copy(e.center).add(Bs)),this.expandByPoint(Yi.copy(e.center).sub(Bs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const An=new q,Gs=new q,Pr=new q,Mn=new q,Ws=new q,Rr=new q,Xs=new q;class ud{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,An)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=An.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(An.copy(this.origin).addScaledVector(this.direction,t),An.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Gs.copy(e).add(t).multiplyScalar(.5),Pr.copy(t).sub(e).normalize(),Mn.copy(this.origin).sub(Gs);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Pr),a=Mn.dot(this.direction),l=-Mn.dot(Pr),c=Mn.lengthSq(),u=Math.abs(1-o*o);let A,h,d,m;if(u>0)if(A=o*l-a,h=o*a-l,m=s*u,A>=0)if(h>=-m)if(h<=m){const v=1/u;A*=v,h*=v,d=A*(A+o*h+2*a)+h*(o*A+h+2*l)+c}else h=s,A=Math.max(0,-(o*h+a)),d=-A*A+h*(h+2*l)+c;else h=-s,A=Math.max(0,-(o*h+a)),d=-A*A+h*(h+2*l)+c;else h<=-m?(A=Math.max(0,-(-o*s+a)),h=A>0?-s:Math.min(Math.max(-s,-l),s),d=-A*A+h*(h+2*l)+c):h<=m?(A=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(A=Math.max(0,-(o*s+a)),h=A>0?s:Math.min(Math.max(-s,-l),s),d=-A*A+h*(h+2*l)+c);else h=o>0?-s:s,A=Math.max(0,-(o*h+a)),d=-A*A+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,A),r&&r.copy(Gs).addScaledVector(Pr,h),d}intersectSphere(e,t){An.subVectors(e.center,this.origin);const i=An.dot(this.direction),r=An.dot(An)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,A=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),A>=0?(a=(e.min.z-h.z)*A,l=(e.max.z-h.z)*A):(a=(e.max.z-h.z)*A,l=(e.min.z-h.z)*A),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,An)!==null}intersectTriangle(e,t,i,r,s){Ws.subVectors(t,e),Rr.subVectors(i,e),Xs.crossVectors(Ws,Rr);let o=this.direction.dot(Xs),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Mn.subVectors(this.origin,e);const l=a*this.direction.dot(Rr.crossVectors(Mn,Rr));if(l<0)return null;const c=a*this.direction.dot(Ws.cross(Mn));if(c<0||l+c>o)return null;const u=-a*Mn.dot(Xs);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt{constructor(e,t,i,r,s,o,a,l,c,u,A,h,d,m,v,p){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,A,h,d,m,v,p)}set(e,t,i,r,s,o,a,l,c,u,A,h,d,m,v,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=A,f[14]=h,f[3]=d,f[7]=m,f[11]=v,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/mi.setFromMatrixColumn(e,0).length(),s=1/mi.setFromMatrixColumn(e,1).length(),o=1/mi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),A=Math.sin(s);if(e.order==="XYZ"){const h=o*u,d=o*A,m=a*u,v=a*A;t[0]=l*u,t[4]=-l*A,t[8]=c,t[1]=d+m*c,t[5]=h-v*c,t[9]=-a*l,t[2]=v-h*c,t[6]=m+d*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*A,m=c*u,v=c*A;t[0]=h+v*a,t[4]=m*a-d,t[8]=o*c,t[1]=o*A,t[5]=o*u,t[9]=-a,t[2]=d*a-m,t[6]=v+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*A,m=c*u,v=c*A;t[0]=h-v*a,t[4]=-o*A,t[8]=m+d*a,t[1]=d+m*a,t[5]=o*u,t[9]=v-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*A,m=a*u,v=a*A;t[0]=l*u,t[4]=m*c-d,t[8]=h*c+v,t[1]=l*A,t[5]=v*c+h,t[9]=d*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,m=a*l,v=a*c;t[0]=l*u,t[4]=v-h*A,t[8]=m*A+d,t[1]=A,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*A+m,t[10]=h-v*A}else if(e.order==="XZY"){const h=o*l,d=o*c,m=a*l,v=a*c;t[0]=l*u,t[4]=-A,t[8]=c*u,t[1]=h*A+v,t[5]=o*u,t[9]=d*A-m,t[2]=m*A-d,t[6]=a*u,t[10]=v*A+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ad,e,hd)}lookAt(e,t,i){const r=this.elements;return Nt.subVectors(e,t),Nt.lengthSq()===0&&(Nt.z=1),Nt.normalize(),En.crossVectors(i,Nt),En.lengthSq()===0&&(Math.abs(i.z)===1?Nt.x+=1e-4:Nt.z+=1e-4,Nt.normalize(),En.crossVectors(i,Nt)),En.normalize(),Cr.crossVectors(Nt,En),r[0]=En.x,r[4]=Cr.x,r[8]=Nt.x,r[1]=En.y,r[5]=Cr.y,r[9]=Nt.y,r[2]=En.z,r[6]=Cr.z,r[10]=Nt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],A=i[5],h=i[9],d=i[13],m=i[2],v=i[6],p=i[10],f=i[14],E=i[3],_=i[7],b=i[11],N=i[15],P=r[0],w=r[4],U=r[8],M=r[12],x=r[1],R=r[5],W=r[9],k=r[13],X=r[2],Z=r[6],B=r[10],K=r[14],V=r[3],me=r[7],_e=r[11],xe=r[15];return s[0]=o*P+a*x+l*X+c*V,s[4]=o*w+a*R+l*Z+c*me,s[8]=o*U+a*W+l*B+c*_e,s[12]=o*M+a*k+l*K+c*xe,s[1]=u*P+A*x+h*X+d*V,s[5]=u*w+A*R+h*Z+d*me,s[9]=u*U+A*W+h*B+d*_e,s[13]=u*M+A*k+h*K+d*xe,s[2]=m*P+v*x+p*X+f*V,s[6]=m*w+v*R+p*Z+f*me,s[10]=m*U+v*W+p*B+f*_e,s[14]=m*M+v*k+p*K+f*xe,s[3]=E*P+_*x+b*X+N*V,s[7]=E*w+_*R+b*Z+N*me,s[11]=E*U+_*W+b*B+N*_e,s[15]=E*M+_*k+b*K+N*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],A=e[6],h=e[10],d=e[14],m=e[3],v=e[7],p=e[11],f=e[15];return m*(+s*l*A-r*c*A-s*a*h+i*c*h+r*a*d-i*l*d)+v*(+t*l*d-t*c*h+s*o*h-r*o*d+r*c*u-s*l*u)+p*(+t*c*A-t*a*d-s*o*A+i*o*d+s*a*u-i*c*u)+f*(-r*a*u-t*l*A+t*a*h+r*o*A-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],A=e[9],h=e[10],d=e[11],m=e[12],v=e[13],p=e[14],f=e[15],E=A*p*c-v*h*c+v*l*d-a*p*d-A*l*f+a*h*f,_=m*h*c-u*p*c-m*l*d+o*p*d+u*l*f-o*h*f,b=u*v*c-m*A*c+m*a*d-o*v*d-u*a*f+o*A*f,N=m*A*l-u*v*l-m*a*h+o*v*h+u*a*p-o*A*p,P=t*E+i*_+r*b+s*N;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/P;return e[0]=E*w,e[1]=(v*h*s-A*p*s-v*r*d+i*p*d+A*r*f-i*h*f)*w,e[2]=(a*p*s-v*l*s+v*r*c-i*p*c-a*r*f+i*l*f)*w,e[3]=(A*l*s-a*h*s-A*r*c+i*h*c+a*r*d-i*l*d)*w,e[4]=_*w,e[5]=(u*p*s-m*h*s+m*r*d-t*p*d-u*r*f+t*h*f)*w,e[6]=(m*l*s-o*p*s-m*r*c+t*p*c+o*r*f-t*l*f)*w,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*d+t*l*d)*w,e[8]=b*w,e[9]=(m*A*s-u*v*s-m*i*d+t*v*d+u*i*f-t*A*f)*w,e[10]=(o*v*s-m*a*s+m*i*c-t*v*c-o*i*f+t*a*f)*w,e[11]=(u*a*s-o*A*s-u*i*c+t*A*c+o*i*d-t*a*d)*w,e[12]=N*w,e[13]=(u*v*r-m*A*r+m*i*h-t*v*h-u*i*p+t*A*p)*w,e[14]=(m*a*r-o*v*r-m*i*l+t*v*l+o*i*p-t*a*p)*w,e[15]=(o*A*r-u*a*r+u*i*l-t*A*l-o*i*h+t*a*h)*w,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,A=a+a,h=s*c,d=s*u,m=s*A,v=o*u,p=o*A,f=a*A,E=l*c,_=l*u,b=l*A,N=i.x,P=i.y,w=i.z;return r[0]=(1-(v+f))*N,r[1]=(d+b)*N,r[2]=(m-_)*N,r[3]=0,r[4]=(d-b)*P,r[5]=(1-(h+f))*P,r[6]=(p+E)*P,r[7]=0,r[8]=(m+_)*w,r[9]=(p-E)*w,r[10]=(1-(h+v))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=mi.set(r[0],r[1],r[2]).length();const o=mi.set(r[4],r[5],r[6]).length(),a=mi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Xt.copy(this);const c=1/s,u=1/o,A=1/a;return Xt.elements[0]*=c,Xt.elements[1]*=c,Xt.elements[2]*=c,Xt.elements[4]*=u,Xt.elements[5]*=u,Xt.elements[6]*=u,Xt.elements[8]*=A,Xt.elements[9]*=A,Xt.elements[10]*=A,t.setFromRotationMatrix(Xt),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=gn){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),A=(t+e)/(t-e),h=(i+r)/(i-r);let d,m;if(a===gn)d=-(o+s)/(o-s),m=-2*o*s/(o-s);else if(a===ms)d=-o/(o-s),m=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=A,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=gn){const l=this.elements,c=1/(t-e),u=1/(i-r),A=1/(o-s),h=(t+e)*c,d=(i+r)*u;let m,v;if(a===gn)m=(o+s)*A,v=-2*A;else if(a===ms)m=s*A,v=-1*A;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=v,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const mi=new q,Xt=new pt,Ad=new q(0,0,0),hd=new q(1,1,1),En=new q,Cr=new q,Nt=new q,hl=new pt,dl=new vr;class an{constructor(e=0,t=0,i=0,r=an.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],A=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(Tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-A,s),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-A,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Tt(A,-1,1)),Math.abs(A)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-A,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return hl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dl.setFromEuler(this),this.setFromQuaternion(dl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}an.DEFAULT_ORDER="XYZ";class du{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let dd=0;const fl=new q,vi=new vr,hn=new pt,Lr=new q,Ki=new q,fd=new q,pd=new vr,pl=new q(1,0,0),ml=new q(0,1,0),vl=new q(0,0,1),gl={type:"added"},md={type:"removed"},gi={type:"childadded",child:null},js={type:"childremoved",child:null};class Ct extends Gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=Wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ct.DEFAULT_UP.clone();const e=new q,t=new an,i=new vr,r=new q(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pt},normalMatrix:{value:new Ve}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=Ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new du,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vi.setFromAxisAngle(e,t),this.quaternion.multiply(vi),this}rotateOnWorldAxis(e,t){return vi.setFromAxisAngle(e,t),this.quaternion.premultiply(vi),this}rotateX(e){return this.rotateOnAxis(pl,e)}rotateY(e){return this.rotateOnAxis(ml,e)}rotateZ(e){return this.rotateOnAxis(vl,e)}translateOnAxis(e,t){return fl.copy(e).applyQuaternion(this.quaternion),this.position.add(fl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pl,e)}translateY(e){return this.translateOnAxis(ml,e)}translateZ(e){return this.translateOnAxis(vl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Lr.copy(e):Lr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ki.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hn.lookAt(Ki,Lr,this.up):hn.lookAt(Lr,Ki,this.up),this.quaternion.setFromRotationMatrix(hn),r&&(hn.extractRotation(r.matrixWorld),vi.setFromRotationMatrix(hn),this.quaternion.premultiply(vi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gl),gi.child=e,this.dispatchEvent(gi),gi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(md),js.child=e,this.dispatchEvent(js),js.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gl),gi.child=e,this.dispatchEvent(gi),gi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,e,fd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,pd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const A=l[c];s(e.shapes,A)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),A=o(e.shapes),h=o(e.skeletons),d=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),A.length>0&&(i.shapes=A),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),m.length>0&&(i.nodes=m)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ct.DEFAULT_UP=new q(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const jt=new q,dn=new q,Zs=new q,fn=new q,_i=new q,xi=new q,_l=new q,Js=new q,Ys=new q,Ks=new q;class rn{constructor(e=new q,t=new q,i=new q){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),jt.subVectors(e,t),r.cross(jt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){jt.subVectors(r,t),dn.subVectors(i,t),Zs.subVectors(e,t);const o=jt.dot(jt),a=jt.dot(dn),l=jt.dot(Zs),c=dn.dot(dn),u=dn.dot(Zs),A=o*c-a*a;if(A===0)return s.set(0,0,0),null;const h=1/A,d=(c*l-a*u)*h,m=(o*u-a*l)*h;return s.set(1-d-m,m,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,fn)===null?!1:fn.x>=0&&fn.y>=0&&fn.x+fn.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,fn.x),l.addScaledVector(o,fn.y),l.addScaledVector(a,fn.z),l)}static isFrontFacing(e,t,i,r){return jt.subVectors(i,t),dn.subVectors(e,t),jt.cross(dn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jt.subVectors(this.c,this.b),dn.subVectors(this.a,this.b),jt.cross(dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return rn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return rn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;_i.subVectors(r,i),xi.subVectors(s,i),Js.subVectors(e,i);const l=_i.dot(Js),c=xi.dot(Js);if(l<=0&&c<=0)return t.copy(i);Ys.subVectors(e,r);const u=_i.dot(Ys),A=xi.dot(Ys);if(u>=0&&A<=u)return t.copy(r);const h=l*A-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(_i,o);Ks.subVectors(e,s);const d=_i.dot(Ks),m=xi.dot(Ks);if(m>=0&&d<=m)return t.copy(s);const v=d*c-l*m;if(v<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(i).addScaledVector(xi,a);const p=u*m-d*A;if(p<=0&&A-u>=0&&d-m>=0)return _l.subVectors(s,r),a=(A-u)/(A-u+(d-m)),t.copy(r).addScaledVector(_l,a);const f=1/(p+v+h);return o=v*f,a=h*f,t.copy(i).addScaledVector(_i,o).addScaledVector(xi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const fu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tn={h:0,s:0,l:0},qr={h:0,s:0,l:0};function Qs(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}let Ye=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=it.workingColorSpace){return this.r=e,this.g=t,this.b=i,it.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=it.workingColorSpace){if(e=ed(e,1),t=Tt(t,0,1),i=Tt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Qs(o,s,e+1/3),this.g=Qs(o,s,e),this.b=Qs(o,s,e-1/3)}return it.toWorkingColorSpace(this,r),this}setStyle(e,t=Zt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Zt){const i=fu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Oi(e.r),this.g=Oi(e.g),this.b=Oi(e.b),this}copyLinearToSRGB(e){return this.r=Fs(e.r),this.g=Fs(e.g),this.b=Fs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zt){return it.fromWorkingColorSpace(Et.copy(this),e),Math.round(Tt(Et.r*255,0,255))*65536+Math.round(Tt(Et.g*255,0,255))*256+Math.round(Tt(Et.b*255,0,255))}getHexString(e=Zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.fromWorkingColorSpace(Et.copy(this),t);const i=Et.r,r=Et.g,s=Et.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const A=o-a;switch(c=u<=.5?A/(o+a):A/(2-o-a),o){case i:l=(r-s)/A+(r<s?6:0);break;case r:l=(s-i)/A+2;break;case s:l=(i-r)/A+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=it.workingColorSpace){return it.fromWorkingColorSpace(Et.copy(this),t),e.r=Et.r,e.g=Et.g,e.b=Et.b,e}getStyle(e=Zt){it.fromWorkingColorSpace(Et.copy(this),e);const t=Et.r,i=Et.g,r=Et.b;return e!==Zt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Tn),this.setHSL(Tn.h+e,Tn.s+t,Tn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Tn),e.getHSL(qr);const i=Ds(Tn.h,qr.h,t),r=Ds(Tn.s,qr.s,t),s=Ds(Tn.l,qr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const Et=new Ye;Ye.NAMES=fu;let vd=0;class _r extends Gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=Wi(),this.name="",this.type="Material",this.blending=Ui,this.side=In,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_o,this.blendDst=xo,this.blendEquation=Qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ai,this.stencilZFail=Ai,this.stencilZPass=Ai,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ui&&(i.blending=this.blending),this.side!==In&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==_o&&(i.blendSrc=this.blendSrc),this.blendDst!==xo&&(i.blendDst=this.blendDst),this.blendEquation!==Qn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==hs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ai&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ai&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ai&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class Rt extends _r{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=Yc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dt=new q,Ir=new pe;class sn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ol,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=vn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return ir("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ir.fromBufferAttribute(this,t),Ir.applyMatrix3(e),this.setXY(t,Ir.x,Ir.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix3(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix4(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)dt.fromBufferAttribute(this,t),dt.applyNormalMatrix(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)dt.fromBufferAttribute(this,t),dt.transformDirection(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ji(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Lt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ji(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ji(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ji(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ji(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),r=Lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),r=Lt(r,this.array),s=Lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ol&&(e.usage=this.usage),e}}class pu extends sn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class mu extends sn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Vt extends sn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let gd=0;const Ht=new pt,$s=new Ct,yi=new q,Ot=new gr,Qi=new gr,gt=new q;class xn extends Gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=Wi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(uu(e)?mu:pu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ve().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ht.makeRotationFromQuaternion(e),this.applyMatrix4(Ht),this}rotateX(e){return Ht.makeRotationX(e),this.applyMatrix4(Ht),this}rotateY(e){return Ht.makeRotationY(e),this.applyMatrix4(Ht),this}rotateZ(e){return Ht.makeRotationZ(e),this.applyMatrix4(Ht),this}translate(e,t,i){return Ht.makeTranslation(e,t,i),this.applyMatrix4(Ht),this}scale(e,t,i){return Ht.makeScale(e,t,i),this.applyMatrix4(Ht),this}lookAt(e){return $s.lookAt(e),$s.updateMatrix(),this.applyMatrix4($s.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yi).negate(),this.translate(yi.x,yi.y,yi.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Vt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Ot.setFromBufferAttribute(s),this.morphTargetsRelative?(gt.addVectors(this.boundingBox.min,Ot.min),this.boundingBox.expandByPoint(gt),gt.addVectors(this.boundingBox.max,Ot.max),this.boundingBox.expandByPoint(gt)):(this.boundingBox.expandByPoint(Ot.min),this.boundingBox.expandByPoint(Ot.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ta);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const i=this.boundingSphere.center;if(Ot.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Qi.setFromBufferAttribute(a),this.morphTargetsRelative?(gt.addVectors(Ot.min,Qi.min),Ot.expandByPoint(gt),gt.addVectors(Ot.max,Qi.max),Ot.expandByPoint(gt)):(Ot.expandByPoint(Qi.min),Ot.expandByPoint(Qi.max))}Ot.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)gt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(gt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)gt.fromBufferAttribute(a,c),l&&(yi.fromBufferAttribute(e,c),gt.add(yi)),r=Math.max(r,i.distanceToSquared(gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new sn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<i.count;U++)a[U]=new q,l[U]=new q;const c=new q,u=new q,A=new q,h=new pe,d=new pe,m=new pe,v=new q,p=new q;function f(U,M,x){c.fromBufferAttribute(i,U),u.fromBufferAttribute(i,M),A.fromBufferAttribute(i,x),h.fromBufferAttribute(s,U),d.fromBufferAttribute(s,M),m.fromBufferAttribute(s,x),u.sub(c),A.sub(c),d.sub(h),m.sub(h);const R=1/(d.x*m.y-m.x*d.y);isFinite(R)&&(v.copy(u).multiplyScalar(m.y).addScaledVector(A,-d.y).multiplyScalar(R),p.copy(A).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(R),a[U].add(v),a[M].add(v),a[x].add(v),l[U].add(p),l[M].add(p),l[x].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let U=0,M=E.length;U<M;++U){const x=E[U],R=x.start,W=x.count;for(let k=R,X=R+W;k<X;k+=3)f(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const _=new q,b=new q,N=new q,P=new q;function w(U){N.fromBufferAttribute(r,U),P.copy(N);const M=a[U];_.copy(M),_.sub(N.multiplyScalar(N.dot(M))).normalize(),b.crossVectors(P,M);const R=b.dot(l[U])<0?-1:1;o.setXYZW(U,_.x,_.y,_.z,R)}for(let U=0,M=E.length;U<M;++U){const x=E[U],R=x.start,W=x.count;for(let k=R,X=R+W;k<X;k+=3)w(e.getX(k+0)),w(e.getX(k+1)),w(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new sn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new q,s=new q,o=new q,a=new q,l=new q,c=new q,u=new q,A=new q;if(e)for(let h=0,d=e.count;h<d;h+=3){const m=e.getX(h+0),v=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,p),u.subVectors(o,s),A.subVectors(r,s),u.cross(A),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),A.subVectors(r,s),u.cross(A),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)gt.fromBufferAttribute(e,t),gt.normalize(),e.setXYZ(t,gt.x,gt.y,gt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,A=a.normalized,h=new c.constructor(l.length*u);let d=0,m=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?d=l[v]*a.data.stride+a.offset:d=l[v]*u;for(let f=0;f<u;f++)h[m++]=c[d++]}return new sn(h,u,A)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new xn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,A=c.length;u<A;u++){const h=c[u],d=e(h,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let A=0,h=c.length;A<h;A++){const d=c[A];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],A=s[c];for(let h=0,d=A.length;h<d;h++)u.push(A[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const A=o[c];this.addGroup(A.start,A.count,A.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xl=new pt,Wn=new ud,Ur=new Ta,yl=new q,Si=new q,bi=new q,Mi=new q,eo=new q,Nr=new q,Or=new pe,Dr=new pe,zr=new pe,Sl=new q,bl=new q,Ml=new q,Fr=new q,kr=new q;class ft extends Ct{constructor(e=new xn,t=new Rt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Nr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],A=s[l];u!==0&&(eo.fromBufferAttribute(A,e),o?Nr.addScaledVector(eo,u):Nr.addScaledVector(eo.sub(t),u))}t.add(Nr)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ur.copy(i.boundingSphere),Ur.applyMatrix4(s),Wn.copy(e.ray).recast(e.near),!(Ur.containsPoint(Wn.origin)===!1&&(Wn.intersectSphere(Ur,yl)===null||Wn.origin.distanceToSquared(yl)>(e.far-e.near)**2))&&(xl.copy(s).invert(),Wn.copy(e.ray).applyMatrix4(xl),!(i.boundingBox!==null&&Wn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Wn)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,A=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,v=h.length;m<v;m++){const p=h[m],f=o[p.materialIndex],E=Math.max(p.start,d.start),_=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let b=E,N=_;b<N;b+=3){const P=a.getX(b),w=a.getX(b+1),U=a.getX(b+2);r=Hr(this,f,e,i,c,u,A,P,w,U),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const m=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let p=m,f=v;p<f;p+=3){const E=a.getX(p),_=a.getX(p+1),b=a.getX(p+2);r=Hr(this,o,e,i,c,u,A,E,_,b),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,v=h.length;m<v;m++){const p=h[m],f=o[p.materialIndex],E=Math.max(p.start,d.start),_=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let b=E,N=_;b<N;b+=3){const P=b,w=b+1,U=b+2;r=Hr(this,f,e,i,c,u,A,P,w,U),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const m=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let p=m,f=v;p<f;p+=3){const E=p,_=p+1,b=p+2;r=Hr(this,o,e,i,c,u,A,E,_,b),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function _d(n,e,t,i,r,s,o,a){let l;if(e.side===qt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===In,a),l===null)return null;kr.copy(a),kr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(kr);return c<t.near||c>t.far?null:{distance:c,point:kr.clone(),object:n}}function Hr(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Si),n.getVertexPosition(l,bi),n.getVertexPosition(c,Mi);const u=_d(n,e,t,i,Si,bi,Mi,Fr);if(u){r&&(Or.fromBufferAttribute(r,a),Dr.fromBufferAttribute(r,l),zr.fromBufferAttribute(r,c),u.uv=rn.getInterpolation(Fr,Si,bi,Mi,Or,Dr,zr,new pe)),s&&(Or.fromBufferAttribute(s,a),Dr.fromBufferAttribute(s,l),zr.fromBufferAttribute(s,c),u.uv1=rn.getInterpolation(Fr,Si,bi,Mi,Or,Dr,zr,new pe)),o&&(Sl.fromBufferAttribute(o,a),bl.fromBufferAttribute(o,l),Ml.fromBufferAttribute(o,c),u.normal=rn.getInterpolation(Fr,Si,bi,Mi,Sl,bl,Ml,new q),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const A={a,b:l,c,normal:new q,materialIndex:0};rn.getNormal(Si,bi,Mi,A.normal),u.face=A}return u}class li extends xn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],A=[];let h=0,d=0;m("z","y","x",-1,-1,i,t,e,o,s,0),m("z","y","x",1,-1,i,t,-e,o,s,1),m("x","z","y",1,1,e,i,t,r,o,2),m("x","z","y",1,-1,e,i,-t,r,o,3),m("x","y","z",1,-1,e,t,i,r,s,4),m("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Vt(c,3)),this.setAttribute("normal",new Vt(u,3)),this.setAttribute("uv",new Vt(A,2));function m(v,p,f,E,_,b,N,P,w,U,M){const x=b/w,R=N/U,W=b/2,k=N/2,X=P/2,Z=w+1,B=U+1;let K=0,V=0;const me=new q;for(let _e=0;_e<B;_e++){const xe=_e*R-k;for(let Be=0;Be<Z;Be++){const Qe=Be*x-W;me[v]=Qe*E,me[p]=xe*_,me[f]=X,c.push(me.x,me.y,me.z),me[v]=0,me[p]=0,me[f]=P>0?1:-1,u.push(me.x,me.y,me.z),A.push(Be/w),A.push(1-_e/U),K+=1}}for(let _e=0;_e<U;_e++)for(let xe=0;xe<w;xe++){const Be=h+xe+Z*_e,Qe=h+xe+Z*(_e+1),G=h+(xe+1)+Z*(_e+1),re=h+(xe+1)+Z*_e;l.push(Be,Qe,re),l.push(Qe,G,re),V+=6}a.addGroup(d,V,M),d+=V,h+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new li(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Bi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Pt(n){const e={};for(let t=0;t<n.length;t++){const i=Bi(n[t]);for(const r in i)e[r]=i[r]}return e}function xd(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function vu(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const yd={clone:Bi,merge:Pt};var Sd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Un extends _r{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sd,this.fragmentShader=bd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bi(e.uniforms),this.uniformsGroups=xd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class gu extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=gn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const wn=new q,El=new pe,Tl=new pe;class Dt extends gu{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ko*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Os*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ko*2*Math.atan(Math.tan(Os*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wn.x,wn.y).multiplyScalar(-e/wn.z),wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(wn.x,wn.y).multiplyScalar(-e/wn.z)}getViewSize(e,t){return this.getViewBounds(e,El,Tl),t.subVectors(Tl,El)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Os*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ei=-90,Ti=1;class Md extends Ct{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Dt(Ei,Ti,e,t);r.layers=this.layers,this.add(r);const s=new Dt(Ei,Ti,e,t);s.layers=this.layers,this.add(s);const o=new Dt(Ei,Ti,e,t);o.layers=this.layers,this.add(o);const a=new Dt(Ei,Ti,e,t);a.layers=this.layers,this.add(a);const l=new Dt(Ei,Ti,e,t);l.layers=this.layers,this.add(l);const c=new Dt(Ei,Ti,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===gn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ms)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,A=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(A,h,d),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class _u extends wt{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Fi,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ed extends oi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new _u(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Jt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new li(5,5,5),s=new Un({name:"CubemapFromEquirect",uniforms:Bi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:qt,blending:Rn});s.uniforms.tEquirect.value=t;const o=new ft(r,s),a=t.minFilter;return t.minFilter===ti&&(t.minFilter=Jt),new Md(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const to=new q,Td=new q,wd=new Ve;class Jn{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=to.subVectors(i,t).cross(Td.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(to),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||wd.getNormalMatrix(e),r=this.coplanarPoint(to).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xn=new Ta,Vr=new q;class xu{constructor(e=new Jn,t=new Jn,i=new Jn,r=new Jn,s=new Jn,o=new Jn){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=gn){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],A=r[6],h=r[7],d=r[8],m=r[9],v=r[10],p=r[11],f=r[12],E=r[13],_=r[14],b=r[15];if(i[0].setComponents(l-s,h-c,p-d,b-f).normalize(),i[1].setComponents(l+s,h+c,p+d,b+f).normalize(),i[2].setComponents(l+o,h+u,p+m,b+E).normalize(),i[3].setComponents(l-o,h-u,p-m,b-E).normalize(),i[4].setComponents(l-a,h-A,p-v,b-_).normalize(),t===gn)i[5].setComponents(l+a,h+A,p+v,b+_).normalize();else if(t===ms)i[5].setComponents(a,A,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xn)}intersectsSprite(e){return Xn.center.set(0,0,0),Xn.radius=.7071067811865476,Xn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xn)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Vr.x=r.normal.x>0?e.max.x:e.min.x,Vr.y=r.normal.y>0?e.max.y:e.min.y,Vr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Vr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function yu(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Pd(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,A=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:A}}function i(a,l,c){const u=l.array,A=l._updateRange,h=l.updateRanges;if(n.bindBuffer(c,a),A.count===-1&&h.length===0&&n.bufferSubData(c,0,u),h.length!==0){for(let d=0,m=h.length;d<m;d++){const v=h[d];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}A.count!==-1&&(n.bufferSubData(c,A.offset*u.BYTES_PER_ELEMENT,u,A.offset,A.count),A.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class zt extends xn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,A=e/a,h=t/l,d=[],m=[],v=[],p=[];for(let f=0;f<u;f++){const E=f*h-o;for(let _=0;_<c;_++){const b=_*A-s;m.push(b,-E,0),v.push(0,0,1),p.push(_/a),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let E=0;E<a;E++){const _=E+c*f,b=E+c*(f+1),N=E+1+c*(f+1),P=E+1+c*f;d.push(_,b,P),d.push(b,N,P)}this.setIndex(d),this.setAttribute("position",new Vt(m,3)),this.setAttribute("normal",new Vt(v,3)),this.setAttribute("uv",new Vt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zt(e.width,e.height,e.widthSegments,e.heightSegments)}}var Rd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ld=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Id=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ud=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Od=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,zd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Vd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Bd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Gd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Wd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Jd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Kd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Qd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,$d=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ef=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,tf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,of="gl_FragColor = linearToOutputTexel( gl_FragColor );",af=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,cf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,uf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Af=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,df=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ff=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,gf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_f=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Sf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,bf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ef=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Pf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Rf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Cf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Lf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,If=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Uf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Of=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Df=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ff=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Xf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Zf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Jf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,$f=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ep=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,np=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ip=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,sp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,op=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ap=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,up=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ap=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,hp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,dp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,fp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,pp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,vp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_p=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,bp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Mp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ep=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Tp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Pp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Rp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ip=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Up=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Np=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Op=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Dp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,zp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Gp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Zp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Yp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Kp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$p=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,em=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,im=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,rm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,om=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,am=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:Rd,alphahash_pars_fragment:Cd,alphamap_fragment:Ld,alphamap_pars_fragment:qd,alphatest_fragment:Id,alphatest_pars_fragment:Ud,aomap_fragment:Nd,aomap_pars_fragment:Od,batching_pars_vertex:Dd,batching_vertex:zd,begin_vertex:Fd,beginnormal_vertex:kd,bsdfs:Hd,iridescence_fragment:Vd,bumpmap_pars_fragment:Bd,clipping_planes_fragment:Gd,clipping_planes_pars_fragment:Wd,clipping_planes_pars_vertex:Xd,clipping_planes_vertex:jd,color_fragment:Zd,color_pars_fragment:Jd,color_pars_vertex:Yd,color_vertex:Kd,common:Qd,cube_uv_reflection_fragment:$d,defaultnormal_vertex:ef,displacementmap_pars_vertex:tf,displacementmap_vertex:nf,emissivemap_fragment:rf,emissivemap_pars_fragment:sf,colorspace_fragment:of,colorspace_pars_fragment:af,envmap_fragment:lf,envmap_common_pars_fragment:cf,envmap_pars_fragment:uf,envmap_pars_vertex:Af,envmap_physical_pars_fragment:Sf,envmap_vertex:hf,fog_vertex:df,fog_pars_vertex:ff,fog_fragment:pf,fog_pars_fragment:mf,gradientmap_pars_fragment:vf,lightmap_pars_fragment:gf,lights_lambert_fragment:_f,lights_lambert_pars_fragment:xf,lights_pars_begin:yf,lights_toon_fragment:bf,lights_toon_pars_fragment:Mf,lights_phong_fragment:Ef,lights_phong_pars_fragment:Tf,lights_physical_fragment:wf,lights_physical_pars_fragment:Pf,lights_fragment_begin:Rf,lights_fragment_maps:Cf,lights_fragment_end:Lf,logdepthbuf_fragment:qf,logdepthbuf_pars_fragment:If,logdepthbuf_pars_vertex:Uf,logdepthbuf_vertex:Nf,map_fragment:Of,map_pars_fragment:Df,map_particle_fragment:zf,map_particle_pars_fragment:Ff,metalnessmap_fragment:kf,metalnessmap_pars_fragment:Hf,morphinstance_vertex:Vf,morphcolor_vertex:Bf,morphnormal_vertex:Gf,morphtarget_pars_vertex:Wf,morphtarget_vertex:Xf,normal_fragment_begin:jf,normal_fragment_maps:Zf,normal_pars_fragment:Jf,normal_pars_vertex:Yf,normal_vertex:Kf,normalmap_pars_fragment:Qf,clearcoat_normal_fragment_begin:$f,clearcoat_normal_fragment_maps:ep,clearcoat_pars_fragment:tp,iridescence_pars_fragment:np,opaque_fragment:ip,packing:rp,premultiplied_alpha_fragment:sp,project_vertex:op,dithering_fragment:ap,dithering_pars_fragment:lp,roughnessmap_fragment:cp,roughnessmap_pars_fragment:up,shadowmap_pars_fragment:Ap,shadowmap_pars_vertex:hp,shadowmap_vertex:dp,shadowmask_pars_fragment:fp,skinbase_vertex:pp,skinning_pars_vertex:mp,skinning_vertex:vp,skinnormal_vertex:gp,specularmap_fragment:_p,specularmap_pars_fragment:xp,tonemapping_fragment:yp,tonemapping_pars_fragment:Sp,transmission_fragment:bp,transmission_pars_fragment:Mp,uv_pars_fragment:Ep,uv_pars_vertex:Tp,uv_vertex:wp,worldpos_vertex:Pp,background_vert:Rp,background_frag:Cp,backgroundCube_vert:Lp,backgroundCube_frag:qp,cube_vert:Ip,cube_frag:Up,depth_vert:Np,depth_frag:Op,distanceRGBA_vert:Dp,distanceRGBA_frag:zp,equirect_vert:Fp,equirect_frag:kp,linedashed_vert:Hp,linedashed_frag:Vp,meshbasic_vert:Bp,meshbasic_frag:Gp,meshlambert_vert:Wp,meshlambert_frag:Xp,meshmatcap_vert:jp,meshmatcap_frag:Zp,meshnormal_vert:Jp,meshnormal_frag:Yp,meshphong_vert:Kp,meshphong_frag:Qp,meshphysical_vert:$p,meshphysical_frag:em,meshtoon_vert:tm,meshtoon_frag:nm,points_vert:im,points_frag:rm,shadow_vert:sm,shadow_frag:om,sprite_vert:am,sprite_frag:lm},Ae={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},tn={basic:{uniforms:Pt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Pt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Ye(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Pt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Pt([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Pt([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new Ye(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Pt([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Pt([Ae.points,Ae.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Pt([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Pt([Ae.common,Ae.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Pt([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Pt([Ae.sprite,Ae.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:Pt([Ae.common,Ae.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:Pt([Ae.lights,Ae.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};tn.physical={uniforms:Pt([tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const Br={r:0,b:0,g:0},jn=new an,cm=new pt;function um(n,e,t,i,r,s,o){const a=new Ye(0);let l=s===!0?0:1,c,u,A=null,h=0,d=null;function m(E){let _=E.isScene===!0?E.background:null;return _&&_.isTexture&&(_=(E.backgroundBlurriness>0?t:e).get(_)),_}function v(E){let _=!1;const b=m(E);b===null?f(a,l):b&&b.isColor&&(f(b,1),_=!0);const N=n.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,o):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(E,_){const b=m(_);b&&(b.isCubeTexture||b.mapping===Ms)?(u===void 0&&(u=new ft(new li(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:Bi(tn.backgroundCube.uniforms),vertexShader:tn.backgroundCube.vertexShader,fragmentShader:tn.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(N,P,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),jn.copy(_.backgroundRotation),jn.x*=-1,jn.y*=-1,jn.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(jn.y*=-1,jn.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(cm.makeRotationFromEuler(jn)),u.material.toneMapped=it.getTransfer(b.colorSpace)!==st,(A!==b||h!==b.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,A=b,h=b.version,d=n.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new ft(new zt(2,2),new Un({name:"BackgroundMaterial",uniforms:Bi(tn.background.uniforms),vertexShader:tn.background.vertexShader,fragmentShader:tn.background.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=it.getTransfer(b.colorSpace)!==st,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(A!==b||h!==b.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,A=b,h=b.version,d=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function f(E,_){E.getRGB(Br,vu(n)),i.buffers.color.setClear(Br.r,Br.g,Br.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(E,_=1){a.set(E),l=_,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,f(a,l)},render:v,addToRenderList:p}}function Am(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(x,R,W,k,X){let Z=!1;const B=A(k,W,R);s!==B&&(s=B,c(s.object)),Z=d(x,k,W,X),Z&&m(x,k,W,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,b(x,R,W,k),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return n.createVertexArray()}function c(x){return n.bindVertexArray(x)}function u(x){return n.deleteVertexArray(x)}function A(x,R,W){const k=W.wireframe===!0;let X=i[x.id];X===void 0&&(X={},i[x.id]=X);let Z=X[R.id];Z===void 0&&(Z={},X[R.id]=Z);let B=Z[k];return B===void 0&&(B=h(l()),Z[k]=B),B}function h(x){const R=[],W=[],k=[];for(let X=0;X<t;X++)R[X]=0,W[X]=0,k[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:W,attributeDivisors:k,object:x,attributes:{},index:null}}function d(x,R,W,k){const X=s.attributes,Z=R.attributes;let B=0;const K=W.getAttributes();for(const V in K)if(K[V].location>=0){const _e=X[V];let xe=Z[V];if(xe===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(xe=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(xe=x.instanceColor)),_e===void 0||_e.attribute!==xe||xe&&_e.data!==xe.data)return!0;B++}return s.attributesNum!==B||s.index!==k}function m(x,R,W,k){const X={},Z=R.attributes;let B=0;const K=W.getAttributes();for(const V in K)if(K[V].location>=0){let _e=Z[V];_e===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(_e=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(_e=x.instanceColor));const xe={};xe.attribute=_e,_e&&_e.data&&(xe.data=_e.data),X[V]=xe,B++}s.attributes=X,s.attributesNum=B,s.index=k}function v(){const x=s.newAttributes;for(let R=0,W=x.length;R<W;R++)x[R]=0}function p(x){f(x,0)}function f(x,R){const W=s.newAttributes,k=s.enabledAttributes,X=s.attributeDivisors;W[x]=1,k[x]===0&&(n.enableVertexAttribArray(x),k[x]=1),X[x]!==R&&(n.vertexAttribDivisor(x,R),X[x]=R)}function E(){const x=s.newAttributes,R=s.enabledAttributes;for(let W=0,k=R.length;W<k;W++)R[W]!==x[W]&&(n.disableVertexAttribArray(W),R[W]=0)}function _(x,R,W,k,X,Z,B){B===!0?n.vertexAttribIPointer(x,R,W,X,Z):n.vertexAttribPointer(x,R,W,k,X,Z)}function b(x,R,W,k){v();const X=k.attributes,Z=W.getAttributes(),B=R.defaultAttributeValues;for(const K in Z){const V=Z[K];if(V.location>=0){let me=X[K];if(me===void 0&&(K==="instanceMatrix"&&x.instanceMatrix&&(me=x.instanceMatrix),K==="instanceColor"&&x.instanceColor&&(me=x.instanceColor)),me!==void 0){const _e=me.normalized,xe=me.itemSize,Be=e.get(me);if(Be===void 0)continue;const Qe=Be.buffer,G=Be.type,re=Be.bytesPerElement,be=G===n.INT||G===n.UNSIGNED_INT||me.gpuType===_a;if(me.isInterleavedBufferAttribute){const he=me.data,Ue=he.stride,ke=me.offset;if(he.isInstancedInterleavedBuffer){for(let Ne=0;Ne<V.locationSize;Ne++)f(V.location+Ne,he.meshPerAttribute);x.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Ne=0;Ne<V.locationSize;Ne++)p(V.location+Ne);n.bindBuffer(n.ARRAY_BUFFER,Qe);for(let Ne=0;Ne<V.locationSize;Ne++)_(V.location+Ne,xe/V.locationSize,G,_e,Ue*re,(ke+xe/V.locationSize*Ne)*re,be)}else{if(me.isInstancedBufferAttribute){for(let he=0;he<V.locationSize;he++)f(V.location+he,me.meshPerAttribute);x.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let he=0;he<V.locationSize;he++)p(V.location+he);n.bindBuffer(n.ARRAY_BUFFER,Qe);for(let he=0;he<V.locationSize;he++)_(V.location+he,xe/V.locationSize,G,_e,xe*re,xe/V.locationSize*he*re,be)}}else if(B!==void 0){const _e=B[K];if(_e!==void 0)switch(_e.length){case 2:n.vertexAttrib2fv(V.location,_e);break;case 3:n.vertexAttrib3fv(V.location,_e);break;case 4:n.vertexAttrib4fv(V.location,_e);break;default:n.vertexAttrib1fv(V.location,_e)}}}}E()}function N(){U();for(const x in i){const R=i[x];for(const W in R){const k=R[W];for(const X in k)u(k[X].object),delete k[X];delete R[W]}delete i[x]}}function P(x){if(i[x.id]===void 0)return;const R=i[x.id];for(const W in R){const k=R[W];for(const X in k)u(k[X].object),delete k[X];delete R[W]}delete i[x.id]}function w(x){for(const R in i){const W=i[R];if(W[x.id]===void 0)continue;const k=W[x.id];for(const X in k)u(k[X].object),delete k[X];delete W[x.id]}}function U(){M(),o=!0,s!==r&&(s=r,c(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:U,resetDefaultState:M,dispose:N,releaseStatesOfGeometry:P,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:p,disableUnusedAttributes:E}}function hm(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,A){A!==0&&(n.drawArraysInstanced(i,c,u,A),t.update(u,i,A))}function a(c,u,A){if(A===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,A);let d=0;for(let m=0;m<A;m++)d+=u[m];t.update(d,i,1)}function l(c,u,A,h){if(A===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)o(c[m],u[m],h[m]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,A);let m=0;for(let v=0;v<A;v++)m+=u[v];for(let v=0;v<h.length;v++)t.update(m,i,h[v])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function dm(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(P){return!(P!==Yt&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const w=P===mr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==_n&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==vn&&!w)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const A=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),f=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=d>0,N=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:A,maxTextures:h,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:v,maxAttributes:p,maxVertexUniforms:f,maxVaryings:E,maxFragmentUniforms:_,vertexTextures:b,maxSamples:N}}function fm(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Jn,a=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(A,h){const d=A.length!==0||h||i!==0||r;return r=h,i=A.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(A,h){t=u(A,h,0)},this.setState=function(A,h,d){const m=A.clippingPlanes,v=A.clipIntersection,p=A.clipShadows,f=n.get(A);if(!r||m===null||m.length===0||s&&!p)s?u(null):c();else{const E=s?0:i,_=E*4;let b=f.clippingState||null;l.value=b,b=u(m,h,_,d);for(let N=0;N!==_;++N)b[N]=t[N];f.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(A,h,d,m){const v=A!==null?A.length:0;let p=null;if(v!==0){if(p=l.value,m!==!0||p===null){const f=d+v*4,E=h.matrixWorldInverse;a.getNormalMatrix(E),(p===null||p.length<f)&&(p=new Float32Array(f));for(let _=0,b=d;_!==v;++_,b+=4)o.copy(A[_]).applyMatrix4(E,a),o.normal.toArray(p,b),p[b+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function pm(n){let e=new WeakMap;function t(o,a){return a===yo?o.mapping=Fi:a===So&&(o.mapping=ki),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===yo||a===So)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Ed(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Su extends gu{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ci=4,wl=[.125,.215,.35,.446,.526,.582],$n=20,no=new Su,Pl=new Ye;let io=null,ro=0,so=0,oo=!1;const Yn=(1+Math.sqrt(5))/2,wi=1/Yn,Rl=[new q(-Yn,wi,0),new q(Yn,wi,0),new q(-wi,0,Yn),new q(wi,0,Yn),new q(0,Yn,-wi),new q(0,Yn,wi),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)];class Cl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){io=this._renderer.getRenderTarget(),ro=this._renderer.getActiveCubeFace(),so=this._renderer.getActiveMipmapLevel(),oo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Il(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ql(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(io,ro,so),this._renderer.xr.enabled=oo,e.scissorTest=!1,Gr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fi||e.mapping===ki?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),io=this._renderer.getRenderTarget(),ro=this._renderer.getActiveCubeFace(),so=this._renderer.getActiveMipmapLevel(),oo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Jt,minFilter:Jt,generateMipmaps:!1,type:mr,format:Yt,colorSpace:zn,depthBuffer:!1},r=Ll(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ll(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mm(s)),this._blurMaterial=vm(s,e,t)}return r}_compileMaterial(e){const t=new ft(this._lodPlanes[0],e);this._renderer.compile(t,no)}_sceneToCubeUV(e,t,i,r){const a=new Dt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,A=u.autoClear,h=u.toneMapping;u.getClearColor(Pl),u.toneMapping=Cn,u.autoClear=!1;const d=new Rt({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1}),m=new ft(new li,d);let v=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,v=!0):(d.color.copy(Pl),v=!0);for(let f=0;f<6;f++){const E=f%3;E===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):E===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const _=this._cubeSize;Gr(r,E*_,f>2?_:0,_,_),u.setRenderTarget(r),v&&u.render(m,a),u.render(e,a)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=h,u.autoClear=A,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Fi||e.mapping===ki;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Il()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ql());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ft(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Gr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,no)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Rl[(r-s-1)%Rl.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,A=new ft(this._lodPlanes[r],c),h=c.uniforms,d=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*$n-1),v=s/m,p=isFinite(s)?1+Math.floor(u*v):$n;p>$n&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${$n}`);const f=[];let E=0;for(let w=0;w<$n;++w){const U=w/v,M=Math.exp(-U*U/2);f.push(M),w===0?E+=M:w<p&&(E+=2*M)}for(let w=0;w<f.length;w++)f[w]=f[w]/E;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:_}=this;h.dTheta.value=m,h.mipInt.value=_-i;const b=this._sizeLods[r],N=3*b*(r>_-Ci?r-_+Ci:0),P=4*(this._cubeSize-b);Gr(t,N,P,3*b,2*b),l.setRenderTarget(t),l.render(A,no)}}function mm(n){const e=[],t=[],i=[];let r=n;const s=n-Ci+1+wl.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Ci?l=wl[o-n+Ci-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,A=1+c,h=[u,u,A,u,A,A,u,u,A,A,u,A],d=6,m=6,v=3,p=2,f=1,E=new Float32Array(v*m*d),_=new Float32Array(p*m*d),b=new Float32Array(f*m*d);for(let P=0;P<d;P++){const w=P%3*2/3-1,U=P>2?0:-1,M=[w,U,0,w+2/3,U,0,w+2/3,U+1,0,w,U,0,w+2/3,U+1,0,w,U+1,0];E.set(M,v*m*P),_.set(h,p*m*P);const x=[P,P,P,P,P,P];b.set(x,f*m*P)}const N=new xn;N.setAttribute("position",new sn(E,v)),N.setAttribute("uv",new sn(_,p)),N.setAttribute("faceIndex",new sn(b,f)),e.push(N),r>Ci&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ll(n,e,t){const i=new oi(n,e,t);return i.texture.mapping=Ms,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Gr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function vm(n,e,t){const i=new Float32Array($n),r=new q(0,1,0);return new Un({name:"SphericalGaussianBlur",defines:{n:$n,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:wa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function ql(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Il(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function wa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function gm(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===yo||l===So,u=l===Fi||l===ki;if(c||u){let A=e.get(a);const h=A!==void 0?A.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Cl(n)),A=c?t.fromEquirectangular(a,A):t.fromCubemap(a,A),A.texture.pmremVersion=a.pmremVersion,e.set(a,A),A.texture;if(A!==void 0)return A.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&r(d)?(t===null&&(t=new Cl(n)),A=c?t.fromEquirectangular(a):t.fromCubemap(a),A.texture.pmremVersion=a.pmremVersion,e.set(a,A),a.addEventListener("dispose",s),A.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function _m(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&ir("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function xm(n,e,t,i){const r={},s=new WeakMap;function o(A){const h=A.target;h.index!==null&&e.remove(h.index);for(const m in h.attributes)e.remove(h.attributes[m]);for(const m in h.morphAttributes){const v=h.morphAttributes[m];for(let p=0,f=v.length;p<f;p++)e.remove(v[p])}h.removeEventListener("dispose",o),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(A,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(A){const h=A.attributes;for(const m in h)e.update(h[m],n.ARRAY_BUFFER);const d=A.morphAttributes;for(const m in d){const v=d[m];for(let p=0,f=v.length;p<f;p++)e.update(v[p],n.ARRAY_BUFFER)}}function c(A){const h=[],d=A.index,m=A.attributes.position;let v=0;if(d!==null){const E=d.array;v=d.version;for(let _=0,b=E.length;_<b;_+=3){const N=E[_+0],P=E[_+1],w=E[_+2];h.push(N,P,P,w,w,N)}}else if(m!==void 0){const E=m.array;v=m.version;for(let _=0,b=E.length/3-1;_<b;_+=3){const N=_+0,P=_+1,w=_+2;h.push(N,P,P,w,w,N)}}else return;const p=new(uu(h)?mu:pu)(h,1);p.version=v;const f=s.get(A);f&&e.remove(f),s.set(A,p)}function u(A){const h=s.get(A);if(h){const d=A.index;d!==null&&h.version<d.version&&c(A)}else c(A);return s.get(A)}return{get:a,update:l,getWireframeAttribute:u}}function ym(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,d){n.drawElements(i,d,s,h*o),t.update(d,i,1)}function c(h,d,m){m!==0&&(n.drawElementsInstanced(i,d,s,h*o,m),t.update(d,i,m))}function u(h,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,m);let p=0;for(let f=0;f<m;f++)p+=d[f];t.update(p,i,1)}function A(h,d,m,v){if(m===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<h.length;f++)c(h[f]/o,d[f],v[f]);else{p.multiDrawElementsInstancedWEBGL(i,d,0,s,h,0,v,0,m);let f=0;for(let E=0;E<m;E++)f+=d[E];for(let E=0;E<v.length;E++)t.update(f,i,v[E])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=A}function Sm(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function bm(n,e,t){const i=new WeakMap,r=new _t;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,A=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==A){let x=function(){U.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var d=x;h!==void 0&&h.texture.dispose();const m=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let b=0;m===!0&&(b=1),v===!0&&(b=2),p===!0&&(b=3);let N=a.attributes.position.count*b,P=1;N>e.maxTextureSize&&(P=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const w=new Float32Array(N*P*4*A),U=new hu(w,N,P,A);U.type=vn,U.needsUpdate=!0;const M=b*4;for(let R=0;R<A;R++){const W=f[R],k=E[R],X=_[R],Z=N*P*4*R;for(let B=0;B<W.count;B++){const K=B*M;m===!0&&(r.fromBufferAttribute(W,B),w[Z+K+0]=r.x,w[Z+K+1]=r.y,w[Z+K+2]=r.z,w[Z+K+3]=0),v===!0&&(r.fromBufferAttribute(k,B),w[Z+K+4]=r.x,w[Z+K+5]=r.y,w[Z+K+6]=r.z,w[Z+K+7]=0),p===!0&&(r.fromBufferAttribute(X,B),w[Z+K+8]=r.x,w[Z+K+9]=r.y,w[Z+K+10]=r.z,w[Z+K+11]=X.itemSize===4?r.w:1)}}h={count:A,texture:U,size:new pe(N,P)},i.set(a,h),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let m=0;for(let p=0;p<c.length;p++)m+=c[p];const v=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function Mm(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,A=e.get(l,u);if(r.get(A)!==c&&(e.update(A),r.set(A,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return A}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class bu extends wt{constructor(e,t,i,r,s,o,a,l,c,u=Ni){if(u!==Ni&&u!==Vi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ni&&(i=si),i===void 0&&u===Vi&&(i=Hi),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ft,this.minFilter=l!==void 0?l:Ft,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Mu=new wt,Ul=new bu(1,1),Eu=new hu,Tu=new ld,wu=new _u,Nl=[],Ol=[],Dl=new Float32Array(16),zl=new Float32Array(9),Fl=new Float32Array(4);function Xi(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Nl[r];if(s===void 0&&(s=new Float32Array(r),Nl[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function mt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function vt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ts(n,e){let t=Ol[e];t===void 0&&(t=new Int32Array(e),Ol[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Em(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Tm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;n.uniform2fv(this.addr,e),vt(t,e)}}function wm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mt(t,e))return;n.uniform3fv(this.addr,e),vt(t,e)}}function Pm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;n.uniform4fv(this.addr,e),vt(t,e)}}function Rm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(mt(t,i))return;Fl.set(i),n.uniformMatrix2fv(this.addr,!1,Fl),vt(t,i)}}function Cm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(mt(t,i))return;zl.set(i),n.uniformMatrix3fv(this.addr,!1,zl),vt(t,i)}}function Lm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(mt(t,i))return;Dl.set(i),n.uniformMatrix4fv(this.addr,!1,Dl),vt(t,i)}}function qm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Im(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;n.uniform2iv(this.addr,e),vt(t,e)}}function Um(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;n.uniform3iv(this.addr,e),vt(t,e)}}function Nm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;n.uniform4iv(this.addr,e),vt(t,e)}}function Om(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Dm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;n.uniform2uiv(this.addr,e),vt(t,e)}}function zm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;n.uniform3uiv(this.addr,e),vt(t,e)}}function Fm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;n.uniform4uiv(this.addr,e),vt(t,e)}}function km(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Ul.compareFunction=cu,s=Ul):s=Mu,t.setTexture2D(e||s,r)}function Hm(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Tu,r)}function Vm(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||wu,r)}function Bm(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Eu,r)}function Gm(n){switch(n){case 5126:return Em;case 35664:return Tm;case 35665:return wm;case 35666:return Pm;case 35674:return Rm;case 35675:return Cm;case 35676:return Lm;case 5124:case 35670:return qm;case 35667:case 35671:return Im;case 35668:case 35672:return Um;case 35669:case 35673:return Nm;case 5125:return Om;case 36294:return Dm;case 36295:return zm;case 36296:return Fm;case 35678:case 36198:case 36298:case 36306:case 35682:return km;case 35679:case 36299:case 36307:return Hm;case 35680:case 36300:case 36308:case 36293:return Vm;case 36289:case 36303:case 36311:case 36292:return Bm}}function Wm(n,e){n.uniform1fv(this.addr,e)}function Xm(n,e){const t=Xi(e,this.size,2);n.uniform2fv(this.addr,t)}function jm(n,e){const t=Xi(e,this.size,3);n.uniform3fv(this.addr,t)}function Zm(n,e){const t=Xi(e,this.size,4);n.uniform4fv(this.addr,t)}function Jm(n,e){const t=Xi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Ym(n,e){const t=Xi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Km(n,e){const t=Xi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Qm(n,e){n.uniform1iv(this.addr,e)}function $m(n,e){n.uniform2iv(this.addr,e)}function e0(n,e){n.uniform3iv(this.addr,e)}function t0(n,e){n.uniform4iv(this.addr,e)}function n0(n,e){n.uniform1uiv(this.addr,e)}function i0(n,e){n.uniform2uiv(this.addr,e)}function r0(n,e){n.uniform3uiv(this.addr,e)}function s0(n,e){n.uniform4uiv(this.addr,e)}function o0(n,e,t){const i=this.cache,r=e.length,s=Ts(t,r);mt(i,s)||(n.uniform1iv(this.addr,s),vt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Mu,s[o])}function a0(n,e,t){const i=this.cache,r=e.length,s=Ts(t,r);mt(i,s)||(n.uniform1iv(this.addr,s),vt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Tu,s[o])}function l0(n,e,t){const i=this.cache,r=e.length,s=Ts(t,r);mt(i,s)||(n.uniform1iv(this.addr,s),vt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||wu,s[o])}function c0(n,e,t){const i=this.cache,r=e.length,s=Ts(t,r);mt(i,s)||(n.uniform1iv(this.addr,s),vt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Eu,s[o])}function u0(n){switch(n){case 5126:return Wm;case 35664:return Xm;case 35665:return jm;case 35666:return Zm;case 35674:return Jm;case 35675:return Ym;case 35676:return Km;case 5124:case 35670:return Qm;case 35667:case 35671:return $m;case 35668:case 35672:return e0;case 35669:case 35673:return t0;case 5125:return n0;case 36294:return i0;case 36295:return r0;case 36296:return s0;case 35678:case 36198:case 36298:case 36306:case 35682:return o0;case 35679:case 36299:case 36307:return a0;case 35680:case 36300:case 36308:case 36293:return l0;case 36289:case 36303:case 36311:case 36292:return c0}}class A0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Gm(t.type)}}class h0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=u0(t.type)}}class d0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const ao=/(\w+)(\])?(\[|\.)?/g;function kl(n,e){n.seq.push(e),n.map[e.id]=e}function f0(n,e,t){const i=n.name,r=i.length;for(ao.lastIndex=0;;){const s=ao.exec(i),o=ao.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){kl(t,c===void 0?new A0(a,n,e):new h0(a,n,e));break}else{let A=t.map[a];A===void 0&&(A=new d0(a),kl(t,A)),t=A}}}class as{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);f0(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Hl(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const p0=37297;let m0=0;function v0(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function g0(n){const e=it.getPrimaries(it.workingColorSpace),t=it.getPrimaries(n);let i;switch(e===t?i="":e===ps&&t===fs?i="LinearDisplayP3ToLinearSRGB":e===fs&&t===ps&&(i="LinearSRGBToLinearDisplayP3"),n){case zn:case Es:return[i,"LinearTransferOETF"];case Zt:case Ea:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Vl(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+v0(n.getShaderSource(e),o)}else return r}function _0(n,e){const t=g0(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function x0(n,e){let t;switch(e){case Oh:t="Linear";break;case Dh:t="Reinhard";break;case zh:t="OptimizedCineon";break;case Fh:t="ACESFilmic";break;case Hh:t="AgX";break;case Vh:t="Neutral";break;case kh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Wr=new q;function y0(){it.getLuminanceCoefficients(Wr);const n=Wr.x.toFixed(4),e=Wr.y.toFixed(4),t=Wr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function S0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(tr).join(`
`)}function b0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function M0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function tr(n){return n!==""}function Bl(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gl(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const E0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qo(n){return n.replace(E0,w0)}const T0=new Map;function w0(n,e){let t=He[e];if(t===void 0){const i=T0.get(e);if(i!==void 0)t=He[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Qo(t)}const P0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wl(n){return n.replace(P0,R0)}function R0(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Xl(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function C0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Jc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===lh?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===mn&&(e="SHADOWMAP_TYPE_VSM"),e}function L0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Fi:case ki:e="ENVMAP_TYPE_CUBE";break;case Ms:e="ENVMAP_TYPE_CUBE_UV";break}return e}function q0(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ki:e="ENVMAP_MODE_REFRACTION";break}return e}function I0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Yc:e="ENVMAP_BLENDING_MULTIPLY";break;case Uh:e="ENVMAP_BLENDING_MIX";break;case Nh:e="ENVMAP_BLENDING_ADD";break}return e}function U0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function N0(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=C0(t),c=L0(t),u=q0(t),A=I0(t),h=U0(t),d=S0(t),m=b0(s),v=r.createProgram();let p,f,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(tr).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(tr).join(`
`),f.length>0&&(f+=`
`)):(p=[Xl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tr).join(`
`),f=[Xl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+A:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Cn?"#define TONE_MAPPING":"",t.toneMapping!==Cn?He.tonemapping_pars_fragment:"",t.toneMapping!==Cn?x0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,_0("linearToOutputTexel",t.outputColorSpace),y0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(tr).join(`
`)),o=Qo(o),o=Bl(o,t),o=Gl(o,t),a=Qo(a),a=Bl(a,t),a=Gl(a,t),o=Wl(o),a=Wl(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",t.glslVersion===al?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===al?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const _=E+p+o,b=E+f+a,N=Hl(r,r.VERTEX_SHADER,_),P=Hl(r,r.FRAGMENT_SHADER,b);r.attachShader(v,N),r.attachShader(v,P),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function w(R){if(n.debug.checkShaderErrors){const W=r.getProgramInfoLog(v).trim(),k=r.getShaderInfoLog(N).trim(),X=r.getShaderInfoLog(P).trim();let Z=!0,B=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,N,P);else{const K=Vl(r,N,"vertex"),V=Vl(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+W+`
`+K+`
`+V)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(k===""||X==="")&&(B=!1);B&&(R.diagnostics={runnable:Z,programLog:W,vertexShader:{log:k,prefix:p},fragmentShader:{log:X,prefix:f}})}r.deleteShader(N),r.deleteShader(P),U=new as(r,v),M=M0(r,v)}let U;this.getUniforms=function(){return U===void 0&&w(this),U};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(v,p0)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=m0++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=N,this.fragmentShader=P,this}let O0=0;class D0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new z0(e),t.set(e,i)),i}}class z0{constructor(e){this.id=O0++,this.code=e,this.usedTimes=0}}function F0(n,e,t,i,r,s,o){const a=new du,l=new D0,c=new Set,u=[],A=r.logarithmicDepthBuffer,h=r.vertexTextures;let d=r.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return c.add(M),M===0?"uv":`uv${M}`}function p(M,x,R,W,k){const X=W.fog,Z=k.geometry,B=M.isMeshStandardMaterial?W.environment:null,K=(M.isMeshStandardMaterial?t:e).get(M.envMap||B),V=K&&K.mapping===Ms?K.image.height:null,me=m[M.type];M.precision!==null&&(d=r.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const _e=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,xe=_e!==void 0?_e.length:0;let Be=0;Z.morphAttributes.position!==void 0&&(Be=1),Z.morphAttributes.normal!==void 0&&(Be=2),Z.morphAttributes.color!==void 0&&(Be=3);let Qe,G,re,be;if(me){const $e=tn[me];Qe=$e.vertexShader,G=$e.fragmentShader}else Qe=M.vertexShader,G=M.fragmentShader,l.update(M),re=l.getVertexShaderID(M),be=l.getFragmentShaderID(M);const he=n.getRenderTarget(),Ue=k.isInstancedMesh===!0,ke=k.isBatchedMesh===!0,Ne=!!M.map,Ke=!!M.matcap,S=!!K,oe=!!M.aoMap,ie=!!M.lightMap,de=!!M.bumpMap,j=!!M.normalMap,Ce=!!M.displacementMap,fe=!!M.emissiveMap,Me=!!M.metalnessMap,T=!!M.roughnessMap,g=M.anisotropy>0,z=M.clearcoat>0,ne=M.dispersion>0,te=M.iridescence>0,ee=M.sheen>0,Re=M.transmission>0,ue=g&&!!M.anisotropyMap,ye=z&&!!M.clearcoatMap,Fe=z&&!!M.clearcoatNormalMap,se=z&&!!M.clearcoatRoughnessMap,ge=te&&!!M.iridescenceMap,je=te&&!!M.iridescenceThicknessMap,De=ee&&!!M.sheenColorMap,Ee=ee&&!!M.sheenRoughnessMap,ze=!!M.specularMap,Ge=!!M.specularColorMap,ot=!!M.specularIntensityMap,C=Re&&!!M.transmissionMap,ae=Re&&!!M.thicknessMap,J=!!M.gradientMap,Q=!!M.alphaMap,ce=M.alphaTest>0,qe=!!M.alphaHash,Ze=!!M.extensions;let At=Cn;M.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(At=n.toneMapping);const yt={shaderID:me,shaderType:M.type,shaderName:M.name,vertexShader:Qe,fragmentShader:G,defines:M.defines,customVertexShaderID:re,customFragmentShaderID:be,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:ke,batchingColor:ke&&k._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&k.instanceColor!==null,instancingMorph:Ue&&k.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:he===null?n.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:zn,alphaToCoverage:!!M.alphaToCoverage,map:Ne,matcap:Ke,envMap:S,envMapMode:S&&K.mapping,envMapCubeUVHeight:V,aoMap:oe,lightMap:ie,bumpMap:de,normalMap:j,displacementMap:h&&Ce,emissiveMap:fe,normalMapObjectSpace:j&&M.normalMapType===Xh,normalMapTangentSpace:j&&M.normalMapType===lu,metalnessMap:Me,roughnessMap:T,anisotropy:g,anisotropyMap:ue,clearcoat:z,clearcoatMap:ye,clearcoatNormalMap:Fe,clearcoatRoughnessMap:se,dispersion:ne,iridescence:te,iridescenceMap:ge,iridescenceThicknessMap:je,sheen:ee,sheenColorMap:De,sheenRoughnessMap:Ee,specularMap:ze,specularColorMap:Ge,specularIntensityMap:ot,transmission:Re,transmissionMap:C,thicknessMap:ae,gradientMap:J,opaque:M.transparent===!1&&M.blending===Ui&&M.alphaToCoverage===!1,alphaMap:Q,alphaTest:ce,alphaHash:qe,combine:M.combine,mapUv:Ne&&v(M.map.channel),aoMapUv:oe&&v(M.aoMap.channel),lightMapUv:ie&&v(M.lightMap.channel),bumpMapUv:de&&v(M.bumpMap.channel),normalMapUv:j&&v(M.normalMap.channel),displacementMapUv:Ce&&v(M.displacementMap.channel),emissiveMapUv:fe&&v(M.emissiveMap.channel),metalnessMapUv:Me&&v(M.metalnessMap.channel),roughnessMapUv:T&&v(M.roughnessMap.channel),anisotropyMapUv:ue&&v(M.anisotropyMap.channel),clearcoatMapUv:ye&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:Fe&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:je&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:De&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&v(M.sheenRoughnessMap.channel),specularMapUv:ze&&v(M.specularMap.channel),specularColorMapUv:Ge&&v(M.specularColorMap.channel),specularIntensityMapUv:ot&&v(M.specularIntensityMap.channel),transmissionMapUv:C&&v(M.transmissionMap.channel),thicknessMapUv:ae&&v(M.thicknessMap.channel),alphaMapUv:Q&&v(M.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(j||g),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!Z.attributes.uv&&(Ne||Q),fog:!!X,useFog:M.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:A,skinning:k.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:Be,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:At,decodeVideoTexture:Ne&&M.map.isVideoTexture===!0&&it.getTransfer(M.map.colorSpace)===st,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===nn,flipSided:M.side===qt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ze&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ze&&M.extensions.multiDraw===!0||ke)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return yt.vertexUv1s=c.has(1),yt.vertexUv2s=c.has(2),yt.vertexUv3s=c.has(3),c.clear(),yt}function f(M){const x=[];if(M.shaderID?x.push(M.shaderID):(x.push(M.customVertexShaderID),x.push(M.customFragmentShaderID)),M.defines!==void 0)for(const R in M.defines)x.push(R),x.push(M.defines[R]);return M.isRawShaderMaterial===!1&&(E(x,M),_(x,M),x.push(n.outputColorSpace)),x.push(M.customProgramCacheKey),x.join()}function E(M,x){M.push(x.precision),M.push(x.outputColorSpace),M.push(x.envMapMode),M.push(x.envMapCubeUVHeight),M.push(x.mapUv),M.push(x.alphaMapUv),M.push(x.lightMapUv),M.push(x.aoMapUv),M.push(x.bumpMapUv),M.push(x.normalMapUv),M.push(x.displacementMapUv),M.push(x.emissiveMapUv),M.push(x.metalnessMapUv),M.push(x.roughnessMapUv),M.push(x.anisotropyMapUv),M.push(x.clearcoatMapUv),M.push(x.clearcoatNormalMapUv),M.push(x.clearcoatRoughnessMapUv),M.push(x.iridescenceMapUv),M.push(x.iridescenceThicknessMapUv),M.push(x.sheenColorMapUv),M.push(x.sheenRoughnessMapUv),M.push(x.specularMapUv),M.push(x.specularColorMapUv),M.push(x.specularIntensityMapUv),M.push(x.transmissionMapUv),M.push(x.thicknessMapUv),M.push(x.combine),M.push(x.fogExp2),M.push(x.sizeAttenuation),M.push(x.morphTargetsCount),M.push(x.morphAttributeCount),M.push(x.numDirLights),M.push(x.numPointLights),M.push(x.numSpotLights),M.push(x.numSpotLightMaps),M.push(x.numHemiLights),M.push(x.numRectAreaLights),M.push(x.numDirLightShadows),M.push(x.numPointLightShadows),M.push(x.numSpotLightShadows),M.push(x.numSpotLightShadowsWithMaps),M.push(x.numLightProbes),M.push(x.shadowMapType),M.push(x.toneMapping),M.push(x.numClippingPlanes),M.push(x.numClipIntersection),M.push(x.depthPacking)}function _(M,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.skinning&&a.enable(4),x.morphTargets&&a.enable(5),x.morphNormals&&a.enable(6),x.morphColors&&a.enable(7),x.premultipliedAlpha&&a.enable(8),x.shadowMapEnabled&&a.enable(9),x.doubleSided&&a.enable(10),x.flipSided&&a.enable(11),x.useDepthPacking&&a.enable(12),x.dithering&&a.enable(13),x.transmission&&a.enable(14),x.sheen&&a.enable(15),x.opaque&&a.enable(16),x.pointsUvs&&a.enable(17),x.decodeVideoTexture&&a.enable(18),x.alphaToCoverage&&a.enable(19),M.push(a.mask)}function b(M){const x=m[M.type];let R;if(x){const W=tn[x];R=yd.clone(W.uniforms)}else R=M.uniforms;return R}function N(M,x){let R;for(let W=0,k=u.length;W<k;W++){const X=u[W];if(X.cacheKey===x){R=X,++R.usedTimes;break}}return R===void 0&&(R=new N0(n,x,M,s),u.push(R)),R}function P(M){if(--M.usedTimes===0){const x=u.indexOf(M);u[x]=u[u.length-1],u.pop(),M.destroy()}}function w(M){l.remove(M)}function U(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:b,acquireProgram:N,releaseProgram:P,releaseShaderCache:w,programs:u,dispose:U}}function k0(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function H0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function jl(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Zl(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(A,h,d,m,v,p){let f=n[e];return f===void 0?(f={id:A.id,object:A,geometry:h,material:d,groupOrder:m,renderOrder:A.renderOrder,z:v,group:p},n[e]=f):(f.id=A.id,f.object=A,f.geometry=h,f.material=d,f.groupOrder=m,f.renderOrder=A.renderOrder,f.z=v,f.group=p),e++,f}function a(A,h,d,m,v,p){const f=o(A,h,d,m,v,p);d.transmission>0?i.push(f):d.transparent===!0?r.push(f):t.push(f)}function l(A,h,d,m,v,p){const f=o(A,h,d,m,v,p);d.transmission>0?i.unshift(f):d.transparent===!0?r.unshift(f):t.unshift(f)}function c(A,h){t.length>1&&t.sort(A||H0),i.length>1&&i.sort(h||jl),r.length>1&&r.sort(h||jl)}function u(){for(let A=e,h=n.length;A<h;A++){const d=n[A];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function V0(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Zl,n.set(i,[o])):r>=s.length?(o=new Zl,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function B0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new Ye};break;case"SpotLight":t={position:new q,direction:new q,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new q,halfWidth:new q,halfHeight:new q};break}return n[e.id]=t,t}}}function G0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let W0=0;function X0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function j0(n){const e=new B0,t=G0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new q);const r=new q,s=new pt,o=new pt;function a(c){let u=0,A=0,h=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let d=0,m=0,v=0,p=0,f=0,E=0,_=0,b=0,N=0,P=0,w=0;c.sort(X0);for(let M=0,x=c.length;M<x;M++){const R=c[M],W=R.color,k=R.intensity,X=R.distance,Z=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=W.r*k,A+=W.g*k,h+=W.b*k;else if(R.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(R.sh.coefficients[B],k);w++}else if(R.isDirectionalLight){const B=e.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const K=R.shadow,V=t.get(R);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,i.directionalShadow[d]=V,i.directionalShadowMap[d]=Z,i.directionalShadowMatrix[d]=R.shadow.matrix,E++}i.directional[d]=B,d++}else if(R.isSpotLight){const B=e.get(R);B.position.setFromMatrixPosition(R.matrixWorld),B.color.copy(W).multiplyScalar(k),B.distance=X,B.coneCos=Math.cos(R.angle),B.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),B.decay=R.decay,i.spot[v]=B;const K=R.shadow;if(R.map&&(i.spotLightMap[N]=R.map,N++,K.updateMatrices(R),R.castShadow&&P++),i.spotLightMatrix[v]=K.matrix,R.castShadow){const V=t.get(R);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,i.spotShadow[v]=V,i.spotShadowMap[v]=Z,b++}v++}else if(R.isRectAreaLight){const B=e.get(R);B.color.copy(W).multiplyScalar(k),B.halfWidth.set(R.width*.5,0,0),B.halfHeight.set(0,R.height*.5,0),i.rectArea[p]=B,p++}else if(R.isPointLight){const B=e.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),B.distance=R.distance,B.decay=R.decay,R.castShadow){const K=R.shadow,V=t.get(R);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,V.shadowCameraNear=K.camera.near,V.shadowCameraFar=K.camera.far,i.pointShadow[m]=V,i.pointShadowMap[m]=Z,i.pointShadowMatrix[m]=R.shadow.matrix,_++}i.point[m]=B,m++}else if(R.isHemisphereLight){const B=e.get(R);B.skyColor.copy(R.color).multiplyScalar(k),B.groundColor.copy(R.groundColor).multiplyScalar(k),i.hemi[f]=B,f++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ae.LTC_FLOAT_1,i.rectAreaLTC2=Ae.LTC_FLOAT_2):(i.rectAreaLTC1=Ae.LTC_HALF_1,i.rectAreaLTC2=Ae.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=A,i.ambient[2]=h;const U=i.hash;(U.directionalLength!==d||U.pointLength!==m||U.spotLength!==v||U.rectAreaLength!==p||U.hemiLength!==f||U.numDirectionalShadows!==E||U.numPointShadows!==_||U.numSpotShadows!==b||U.numSpotMaps!==N||U.numLightProbes!==w)&&(i.directional.length=d,i.spot.length=v,i.rectArea.length=p,i.point.length=m,i.hemi.length=f,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=b+N-P,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=w,U.directionalLength=d,U.pointLength=m,U.spotLength=v,U.rectAreaLength=p,U.hemiLength=f,U.numDirectionalShadows=E,U.numPointShadows=_,U.numSpotShadows=b,U.numSpotMaps=N,U.numLightProbes=w,i.version=W0++)}function l(c,u){let A=0,h=0,d=0,m=0,v=0;const p=u.matrixWorldInverse;for(let f=0,E=c.length;f<E;f++){const _=c[f];if(_.isDirectionalLight){const b=i.directional[A];b.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(p),A++}else if(_.isSpotLight){const b=i.spot[d];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(p),d++}else if(_.isRectAreaLight){const b=i.rectArea[m];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(p),o.identity(),s.copy(_.matrixWorld),s.premultiply(p),o.extractRotation(s),b.halfWidth.set(_.width*.5,0,0),b.halfHeight.set(0,_.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),m++}else if(_.isPointLight){const b=i.point[h];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(p),h++}else if(_.isHemisphereLight){const b=i.hemi[v];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(p),v++}}}return{setup:a,setupView:l,state:i}}function Jl(n){const e=new j0(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Z0(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Jl(n),e.set(r,[a])):s>=o.length?(a=new Jl(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class J0 extends _r{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Y0 extends _r{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const K0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Q0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function $0(n,e,t){let i=new xu;const r=new pe,s=new pe,o=new _t,a=new J0({depthPacking:Wh}),l=new Y0,c={},u=t.maxTextureSize,A={[In]:qt,[qt]:In,[nn]:nn},h=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:K0,fragmentShader:Q0}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const m=new xn;m.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ft(m,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jc;let f=this.type;this.render=function(P,w,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||P.length===0)return;const M=n.getRenderTarget(),x=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),W=n.state;W.setBlending(Rn),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const k=f!==mn&&this.type===mn,X=f===mn&&this.type!==mn;for(let Z=0,B=P.length;Z<B;Z++){const K=P[Z],V=K.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const me=V.getFrameExtents();if(r.multiply(me),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/me.x),r.x=s.x*me.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/me.y),r.y=s.y*me.y,V.mapSize.y=s.y)),V.map===null||k===!0||X===!0){const xe=this.type!==mn?{minFilter:Ft,magFilter:Ft}:{};V.map!==null&&V.map.dispose(),V.map=new oi(r.x,r.y,xe),V.map.texture.name=K.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const _e=V.getViewportCount();for(let xe=0;xe<_e;xe++){const Be=V.getViewport(xe);o.set(s.x*Be.x,s.y*Be.y,s.x*Be.z,s.y*Be.w),W.viewport(o),V.updateMatrices(K,xe),i=V.getFrustum(),b(w,U,V.camera,K,this.type)}V.isPointLightShadow!==!0&&this.type===mn&&E(V,U),V.needsUpdate=!1}f=this.type,p.needsUpdate=!1,n.setRenderTarget(M,x,R)};function E(P,w){const U=e.update(v);h.defines.VSM_SAMPLES!==P.blurSamples&&(h.defines.VSM_SAMPLES=P.blurSamples,d.defines.VSM_SAMPLES=P.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new oi(r.x,r.y)),h.uniforms.shadow_pass.value=P.map.texture,h.uniforms.resolution.value=P.mapSize,h.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(w,null,U,h,v,null),d.uniforms.shadow_pass.value=P.mapPass.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(w,null,U,d,v,null)}function _(P,w,U,M){let x=null;const R=U.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(R!==void 0)x=R;else if(x=U.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const W=x.uuid,k=w.uuid;let X=c[W];X===void 0&&(X={},c[W]=X);let Z=X[k];Z===void 0&&(Z=x.clone(),X[k]=Z,w.addEventListener("dispose",N)),x=Z}if(x.visible=w.visible,x.wireframe=w.wireframe,M===mn?x.side=w.shadowSide!==null?w.shadowSide:w.side:x.side=w.shadowSide!==null?w.shadowSide:A[w.side],x.alphaMap=w.alphaMap,x.alphaTest=w.alphaTest,x.map=w.map,x.clipShadows=w.clipShadows,x.clippingPlanes=w.clippingPlanes,x.clipIntersection=w.clipIntersection,x.displacementMap=w.displacementMap,x.displacementScale=w.displacementScale,x.displacementBias=w.displacementBias,x.wireframeLinewidth=w.wireframeLinewidth,x.linewidth=w.linewidth,U.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const W=n.properties.get(x);W.light=U}return x}function b(P,w,U,M,x){if(P.visible===!1)return;if(P.layers.test(w.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&x===mn)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,P.matrixWorld);const k=e.update(P),X=P.material;if(Array.isArray(X)){const Z=k.groups;for(let B=0,K=Z.length;B<K;B++){const V=Z[B],me=X[V.materialIndex];if(me&&me.visible){const _e=_(P,me,M,x);P.onBeforeShadow(n,P,w,U,k,_e,V),n.renderBufferDirect(U,null,k,_e,P,V),P.onAfterShadow(n,P,w,U,k,_e,V)}}}else if(X.visible){const Z=_(P,X,M,x);P.onBeforeShadow(n,P,w,U,k,Z,null),n.renderBufferDirect(U,null,k,Z,P,null),P.onAfterShadow(n,P,w,U,k,Z,null)}}const W=P.children;for(let k=0,X=W.length;k<X;k++)b(W[k],w,U,M,x)}function N(P){P.target.removeEventListener("dispose",N);for(const U in c){const M=c[U],x=P.target.uuid;x in M&&(M[x].dispose(),delete M[x])}}}function e1(n){function e(){let C=!1;const ae=new _t;let J=null;const Q=new _t(0,0,0,0);return{setMask:function(ce){J!==ce&&!C&&(n.colorMask(ce,ce,ce,ce),J=ce)},setLocked:function(ce){C=ce},setClear:function(ce,qe,Ze,At,yt){yt===!0&&(ce*=At,qe*=At,Ze*=At),ae.set(ce,qe,Ze,At),Q.equals(ae)===!1&&(n.clearColor(ce,qe,Ze,At),Q.copy(ae))},reset:function(){C=!1,J=null,Q.set(-1,0,0,0)}}}function t(){let C=!1,ae=null,J=null,Q=null;return{setTest:function(ce){ce?be(n.DEPTH_TEST):he(n.DEPTH_TEST)},setMask:function(ce){ae!==ce&&!C&&(n.depthMask(ce),ae=ce)},setFunc:function(ce){if(J!==ce){switch(ce){case wh:n.depthFunc(n.NEVER);break;case Ph:n.depthFunc(n.ALWAYS);break;case Rh:n.depthFunc(n.LESS);break;case hs:n.depthFunc(n.LEQUAL);break;case Ch:n.depthFunc(n.EQUAL);break;case Lh:n.depthFunc(n.GEQUAL);break;case qh:n.depthFunc(n.GREATER);break;case Ih:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}J=ce}},setLocked:function(ce){C=ce},setClear:function(ce){Q!==ce&&(n.clearDepth(ce),Q=ce)},reset:function(){C=!1,ae=null,J=null,Q=null}}}function i(){let C=!1,ae=null,J=null,Q=null,ce=null,qe=null,Ze=null,At=null,yt=null;return{setTest:function($e){C||($e?be(n.STENCIL_TEST):he(n.STENCIL_TEST))},setMask:function($e){ae!==$e&&!C&&(n.stencilMask($e),ae=$e)},setFunc:function($e,cn,$t){(J!==$e||Q!==cn||ce!==$t)&&(n.stencilFunc($e,cn,$t),J=$e,Q=cn,ce=$t)},setOp:function($e,cn,$t){(qe!==$e||Ze!==cn||At!==$t)&&(n.stencilOp($e,cn,$t),qe=$e,Ze=cn,At=$t)},setLocked:function($e){C=$e},setClear:function($e){yt!==$e&&(n.clearStencil($e),yt=$e)},reset:function(){C=!1,ae=null,J=null,Q=null,ce=null,qe=null,Ze=null,At=null,yt=null}}}const r=new e,s=new t,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},A=new WeakMap,h=[],d=null,m=!1,v=null,p=null,f=null,E=null,_=null,b=null,N=null,P=new Ye(0,0,0),w=0,U=!1,M=null,x=null,R=null,W=null,k=null;const X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,B=0;const K=n.getParameter(n.VERSION);K.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(K)[1]),Z=B>=1):K.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),Z=B>=2);let V=null,me={};const _e=n.getParameter(n.SCISSOR_BOX),xe=n.getParameter(n.VIEWPORT),Be=new _t().fromArray(_e),Qe=new _t().fromArray(xe);function G(C,ae,J,Q){const ce=new Uint8Array(4),qe=n.createTexture();n.bindTexture(C,qe),n.texParameteri(C,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(C,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ze=0;Ze<J;Ze++)C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY?n.texImage3D(ae,0,n.RGBA,1,1,Q,0,n.RGBA,n.UNSIGNED_BYTE,ce):n.texImage2D(ae+Ze,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ce);return qe}const re={};re[n.TEXTURE_2D]=G(n.TEXTURE_2D,n.TEXTURE_2D,1),re[n.TEXTURE_CUBE_MAP]=G(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[n.TEXTURE_2D_ARRAY]=G(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),re[n.TEXTURE_3D]=G(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),be(n.DEPTH_TEST),s.setFunc(hs),de(!1),j(tl),be(n.CULL_FACE),oe(Rn);function be(C){c[C]!==!0&&(n.enable(C),c[C]=!0)}function he(C){c[C]!==!1&&(n.disable(C),c[C]=!1)}function Ue(C,ae){return u[C]!==ae?(n.bindFramebuffer(C,ae),u[C]=ae,C===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ae),C===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ae),!0):!1}function ke(C,ae){let J=h,Q=!1;if(C){J=A.get(ae),J===void 0&&(J=[],A.set(ae,J));const ce=C.textures;if(J.length!==ce.length||J[0]!==n.COLOR_ATTACHMENT0){for(let qe=0,Ze=ce.length;qe<Ze;qe++)J[qe]=n.COLOR_ATTACHMENT0+qe;J.length=ce.length,Q=!0}}else J[0]!==n.BACK&&(J[0]=n.BACK,Q=!0);Q&&n.drawBuffers(J)}function Ne(C){return d!==C?(n.useProgram(C),d=C,!0):!1}const Ke={[Qn]:n.FUNC_ADD,[uh]:n.FUNC_SUBTRACT,[Ah]:n.FUNC_REVERSE_SUBTRACT};Ke[hh]=n.MIN,Ke[dh]=n.MAX;const S={[fh]:n.ZERO,[ph]:n.ONE,[mh]:n.SRC_COLOR,[_o]:n.SRC_ALPHA,[Sh]:n.SRC_ALPHA_SATURATE,[xh]:n.DST_COLOR,[gh]:n.DST_ALPHA,[vh]:n.ONE_MINUS_SRC_COLOR,[xo]:n.ONE_MINUS_SRC_ALPHA,[yh]:n.ONE_MINUS_DST_COLOR,[_h]:n.ONE_MINUS_DST_ALPHA,[bh]:n.CONSTANT_COLOR,[Mh]:n.ONE_MINUS_CONSTANT_COLOR,[Eh]:n.CONSTANT_ALPHA,[Th]:n.ONE_MINUS_CONSTANT_ALPHA};function oe(C,ae,J,Q,ce,qe,Ze,At,yt,$e){if(C===Rn){m===!0&&(he(n.BLEND),m=!1);return}if(m===!1&&(be(n.BLEND),m=!0),C!==ch){if(C!==v||$e!==U){if((p!==Qn||_!==Qn)&&(n.blendEquation(n.FUNC_ADD),p=Qn,_=Qn),$e)switch(C){case Ui:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case nl:n.blendFunc(n.ONE,n.ONE);break;case il:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case rl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Ui:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case nl:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case il:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case rl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}f=null,E=null,b=null,N=null,P.set(0,0,0),w=0,v=C,U=$e}return}ce=ce||ae,qe=qe||J,Ze=Ze||Q,(ae!==p||ce!==_)&&(n.blendEquationSeparate(Ke[ae],Ke[ce]),p=ae,_=ce),(J!==f||Q!==E||qe!==b||Ze!==N)&&(n.blendFuncSeparate(S[J],S[Q],S[qe],S[Ze]),f=J,E=Q,b=qe,N=Ze),(At.equals(P)===!1||yt!==w)&&(n.blendColor(At.r,At.g,At.b,yt),P.copy(At),w=yt),v=C,U=!1}function ie(C,ae){C.side===nn?he(n.CULL_FACE):be(n.CULL_FACE);let J=C.side===qt;ae&&(J=!J),de(J),C.blending===Ui&&C.transparent===!1?oe(Rn):oe(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),s.setFunc(C.depthFunc),s.setTest(C.depthTest),s.setMask(C.depthWrite),r.setMask(C.colorWrite);const Q=C.stencilWrite;o.setTest(Q),Q&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),fe(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?be(n.SAMPLE_ALPHA_TO_COVERAGE):he(n.SAMPLE_ALPHA_TO_COVERAGE)}function de(C){M!==C&&(C?n.frontFace(n.CW):n.frontFace(n.CCW),M=C)}function j(C){C!==oh?(be(n.CULL_FACE),C!==x&&(C===tl?n.cullFace(n.BACK):C===ah?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):he(n.CULL_FACE),x=C}function Ce(C){C!==R&&(Z&&n.lineWidth(C),R=C)}function fe(C,ae,J){C?(be(n.POLYGON_OFFSET_FILL),(W!==ae||k!==J)&&(n.polygonOffset(ae,J),W=ae,k=J)):he(n.POLYGON_OFFSET_FILL)}function Me(C){C?be(n.SCISSOR_TEST):he(n.SCISSOR_TEST)}function T(C){C===void 0&&(C=n.TEXTURE0+X-1),V!==C&&(n.activeTexture(C),V=C)}function g(C,ae,J){J===void 0&&(V===null?J=n.TEXTURE0+X-1:J=V);let Q=me[J];Q===void 0&&(Q={type:void 0,texture:void 0},me[J]=Q),(Q.type!==C||Q.texture!==ae)&&(V!==J&&(n.activeTexture(J),V=J),n.bindTexture(C,ae||re[C]),Q.type=C,Q.texture=ae)}function z(){const C=me[V];C!==void 0&&C.type!==void 0&&(n.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function ne(){try{n.compressedTexImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function te(){try{n.compressedTexImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ee(){try{n.texSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Re(){try{n.texSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ue(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ye(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Fe(){try{n.texStorage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function se(){try{n.texStorage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ge(){try{n.texImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function je(){try{n.texImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function De(C){Be.equals(C)===!1&&(n.scissor(C.x,C.y,C.z,C.w),Be.copy(C))}function Ee(C){Qe.equals(C)===!1&&(n.viewport(C.x,C.y,C.z,C.w),Qe.copy(C))}function ze(C,ae){let J=l.get(ae);J===void 0&&(J=new WeakMap,l.set(ae,J));let Q=J.get(C);Q===void 0&&(Q=n.getUniformBlockIndex(ae,C.name),J.set(C,Q))}function Ge(C,ae){const Q=l.get(ae).get(C);a.get(ae)!==Q&&(n.uniformBlockBinding(ae,Q,C.__bindingPointIndex),a.set(ae,Q))}function ot(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},V=null,me={},u={},A=new WeakMap,h=[],d=null,m=!1,v=null,p=null,f=null,E=null,_=null,b=null,N=null,P=new Ye(0,0,0),w=0,U=!1,M=null,x=null,R=null,W=null,k=null,Be.set(0,0,n.canvas.width,n.canvas.height),Qe.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:be,disable:he,bindFramebuffer:Ue,drawBuffers:ke,useProgram:Ne,setBlending:oe,setMaterial:ie,setFlipSided:de,setCullFace:j,setLineWidth:Ce,setPolygonOffset:fe,setScissorTest:Me,activeTexture:T,bindTexture:g,unbindTexture:z,compressedTexImage2D:ne,compressedTexImage3D:te,texImage2D:ge,texImage3D:je,updateUBOMapping:ze,uniformBlockBinding:Ge,texStorage2D:Fe,texStorage3D:se,texSubImage2D:ee,texSubImage3D:Re,compressedTexSubImage2D:ue,compressedTexSubImage3D:ye,scissor:De,viewport:Ee,reset:ot}}function Yl(n,e,t,i){const r=t1(i);switch(t){case tu:return n*e;case iu:return n*e;case ru:return n*e*2;case su:return n*e/r.components*r.byteLength;case Sa:return n*e/r.components*r.byteLength;case ou:return n*e*2/r.components*r.byteLength;case ba:return n*e*2/r.components*r.byteLength;case nu:return n*e*3/r.components*r.byteLength;case Yt:return n*e*4/r.components*r.byteLength;case Ma:return n*e*4/r.components*r.byteLength;case ns:case is:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case rs:case ss:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case To:case Po:return Math.max(n,16)*Math.max(e,8)/4;case Eo:case wo:return Math.max(n,8)*Math.max(e,8)/2;case Ro:case Co:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Lo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case qo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Io:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Uo:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case No:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Oo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Do:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case zo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Fo:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ko:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ho:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Vo:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Bo:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Go:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Wo:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case os:case Xo:case jo:return Math.ceil(n/4)*Math.ceil(e/4)*16;case au:case Zo:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Jo:case Yo:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function t1(n){switch(n){case _n:case Qc:return{byteLength:1,components:1};case lr:case $c:case mr:return{byteLength:2,components:1};case xa:case ya:return{byteLength:2,components:4};case si:case _a:case vn:return{byteLength:4,components:1};case eu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function n1(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pe,u=new WeakMap;let A;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(T,g){return d?new OffscreenCanvas(T,g):cr("canvas")}function v(T,g,z){let ne=1;const te=Me(T);if((te.width>z||te.height>z)&&(ne=z/Math.max(te.width,te.height)),ne<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const ee=Math.floor(ne*te.width),Re=Math.floor(ne*te.height);A===void 0&&(A=m(ee,Re));const ue=g?m(ee,Re):A;return ue.width=ee,ue.height=Re,ue.getContext("2d").drawImage(T,0,0,ee,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+ee+"x"+Re+")."),ue}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),T;return T}function p(T){return T.generateMipmaps&&T.minFilter!==Ft&&T.minFilter!==Jt}function f(T){n.generateMipmap(T)}function E(T,g,z,ne,te=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ee=g;if(g===n.RED&&(z===n.FLOAT&&(ee=n.R32F),z===n.HALF_FLOAT&&(ee=n.R16F),z===n.UNSIGNED_BYTE&&(ee=n.R8)),g===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(ee=n.R8UI),z===n.UNSIGNED_SHORT&&(ee=n.R16UI),z===n.UNSIGNED_INT&&(ee=n.R32UI),z===n.BYTE&&(ee=n.R8I),z===n.SHORT&&(ee=n.R16I),z===n.INT&&(ee=n.R32I)),g===n.RG&&(z===n.FLOAT&&(ee=n.RG32F),z===n.HALF_FLOAT&&(ee=n.RG16F),z===n.UNSIGNED_BYTE&&(ee=n.RG8)),g===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(ee=n.RG8UI),z===n.UNSIGNED_SHORT&&(ee=n.RG16UI),z===n.UNSIGNED_INT&&(ee=n.RG32UI),z===n.BYTE&&(ee=n.RG8I),z===n.SHORT&&(ee=n.RG16I),z===n.INT&&(ee=n.RG32I)),g===n.RGB&&z===n.UNSIGNED_INT_5_9_9_9_REV&&(ee=n.RGB9_E5),g===n.RGBA){const Re=te?ds:it.getTransfer(ne);z===n.FLOAT&&(ee=n.RGBA32F),z===n.HALF_FLOAT&&(ee=n.RGBA16F),z===n.UNSIGNED_BYTE&&(ee=Re===st?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(ee=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(ee=n.RGB5_A1)}return(ee===n.R16F||ee===n.R32F||ee===n.RG16F||ee===n.RG32F||ee===n.RGBA16F||ee===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function _(T,g){let z;return T?g===null||g===si||g===Hi?z=n.DEPTH24_STENCIL8:g===vn?z=n.DEPTH32F_STENCIL8:g===lr&&(z=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===si||g===Hi?z=n.DEPTH_COMPONENT24:g===vn?z=n.DEPTH_COMPONENT32F:g===lr&&(z=n.DEPTH_COMPONENT16),z}function b(T,g){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ft&&T.minFilter!==Jt?Math.log2(Math.max(g.width,g.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?g.mipmaps.length:1}function N(T){const g=T.target;g.removeEventListener("dispose",N),w(g),g.isVideoTexture&&u.delete(g)}function P(T){const g=T.target;g.removeEventListener("dispose",P),M(g)}function w(T){const g=i.get(T);if(g.__webglInit===void 0)return;const z=T.source,ne=h.get(z);if(ne){const te=ne[g.__cacheKey];te.usedTimes--,te.usedTimes===0&&U(T),Object.keys(ne).length===0&&h.delete(z)}i.remove(T)}function U(T){const g=i.get(T);n.deleteTexture(g.__webglTexture);const z=T.source,ne=h.get(z);delete ne[g.__cacheKey],o.memory.textures--}function M(T){const g=i.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(g.__webglFramebuffer[ne]))for(let te=0;te<g.__webglFramebuffer[ne].length;te++)n.deleteFramebuffer(g.__webglFramebuffer[ne][te]);else n.deleteFramebuffer(g.__webglFramebuffer[ne]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[ne])}else{if(Array.isArray(g.__webglFramebuffer))for(let ne=0;ne<g.__webglFramebuffer.length;ne++)n.deleteFramebuffer(g.__webglFramebuffer[ne]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let ne=0;ne<g.__webglColorRenderbuffer.length;ne++)g.__webglColorRenderbuffer[ne]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[ne]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const z=T.textures;for(let ne=0,te=z.length;ne<te;ne++){const ee=i.get(z[ne]);ee.__webglTexture&&(n.deleteTexture(ee.__webglTexture),o.memory.textures--),i.remove(z[ne])}i.remove(T)}let x=0;function R(){x=0}function W(){const T=x;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),x+=1,T}function k(T){const g=[];return g.push(T.wrapS),g.push(T.wrapT),g.push(T.wrapR||0),g.push(T.magFilter),g.push(T.minFilter),g.push(T.anisotropy),g.push(T.internalFormat),g.push(T.format),g.push(T.type),g.push(T.generateMipmaps),g.push(T.premultiplyAlpha),g.push(T.flipY),g.push(T.unpackAlignment),g.push(T.colorSpace),g.join()}function X(T,g){const z=i.get(T);if(T.isVideoTexture&&Ce(T),T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){const ne=T.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Qe(z,T,g);return}}t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+g)}function Z(T,g){const z=i.get(T);if(T.version>0&&z.__version!==T.version){Qe(z,T,g);return}t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+g)}function B(T,g){const z=i.get(T);if(T.version>0&&z.__version!==T.version){Qe(z,T,g);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+g)}function K(T,g){const z=i.get(T);if(T.version>0&&z.__version!==T.version){G(z,T,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+g)}const V={[bo]:n.REPEAT,[ei]:n.CLAMP_TO_EDGE,[Mo]:n.MIRRORED_REPEAT},me={[Ft]:n.NEAREST,[Bh]:n.NEAREST_MIPMAP_NEAREST,[Mr]:n.NEAREST_MIPMAP_LINEAR,[Jt]:n.LINEAR,[Ns]:n.LINEAR_MIPMAP_NEAREST,[ti]:n.LINEAR_MIPMAP_LINEAR},_e={[jh]:n.NEVER,[$h]:n.ALWAYS,[Zh]:n.LESS,[cu]:n.LEQUAL,[Jh]:n.EQUAL,[Qh]:n.GEQUAL,[Yh]:n.GREATER,[Kh]:n.NOTEQUAL};function xe(T,g){if(g.type===vn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Jt||g.magFilter===Ns||g.magFilter===Mr||g.magFilter===ti||g.minFilter===Jt||g.minFilter===Ns||g.minFilter===Mr||g.minFilter===ti)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,V[g.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,V[g.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,V[g.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,me[g.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,me[g.minFilter]),g.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,_e[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Ft||g.minFilter!==Mr&&g.minFilter!==ti||g.type===vn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function Be(T,g){let z=!1;T.__webglInit===void 0&&(T.__webglInit=!0,g.addEventListener("dispose",N));const ne=g.source;let te=h.get(ne);te===void 0&&(te={},h.set(ne,te));const ee=k(g);if(ee!==T.__cacheKey){te[ee]===void 0&&(te[ee]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,z=!0),te[ee].usedTimes++;const Re=te[T.__cacheKey];Re!==void 0&&(te[T.__cacheKey].usedTimes--,Re.usedTimes===0&&U(g)),T.__cacheKey=ee,T.__webglTexture=te[ee].texture}return z}function Qe(T,g,z){let ne=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(ne=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(ne=n.TEXTURE_3D);const te=Be(T,g),ee=g.source;t.bindTexture(ne,T.__webglTexture,n.TEXTURE0+z);const Re=i.get(ee);if(ee.version!==Re.__version||te===!0){t.activeTexture(n.TEXTURE0+z);const ue=it.getPrimaries(it.workingColorSpace),ye=g.colorSpace===Pn?null:it.getPrimaries(g.colorSpace),Fe=g.colorSpace===Pn||ue===ye?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let se=v(g.image,!1,r.maxTextureSize);se=fe(g,se);const ge=s.convert(g.format,g.colorSpace),je=s.convert(g.type);let De=E(g.internalFormat,ge,je,g.colorSpace,g.isVideoTexture);xe(ne,g);let Ee;const ze=g.mipmaps,Ge=g.isVideoTexture!==!0,ot=Re.__version===void 0||te===!0,C=ee.dataReady,ae=b(g,se);if(g.isDepthTexture)De=_(g.format===Vi,g.type),ot&&(Ge?t.texStorage2D(n.TEXTURE_2D,1,De,se.width,se.height):t.texImage2D(n.TEXTURE_2D,0,De,se.width,se.height,0,ge,je,null));else if(g.isDataTexture)if(ze.length>0){Ge&&ot&&t.texStorage2D(n.TEXTURE_2D,ae,De,ze[0].width,ze[0].height);for(let J=0,Q=ze.length;J<Q;J++)Ee=ze[J],Ge?C&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,Ee.width,Ee.height,ge,je,Ee.data):t.texImage2D(n.TEXTURE_2D,J,De,Ee.width,Ee.height,0,ge,je,Ee.data);g.generateMipmaps=!1}else Ge?(ot&&t.texStorage2D(n.TEXTURE_2D,ae,De,se.width,se.height),C&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,se.width,se.height,ge,je,se.data)):t.texImage2D(n.TEXTURE_2D,0,De,se.width,se.height,0,ge,je,se.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Ge&&ot&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ae,De,ze[0].width,ze[0].height,se.depth);for(let J=0,Q=ze.length;J<Q;J++)if(Ee=ze[J],g.format!==Yt)if(ge!==null)if(Ge){if(C)if(g.layerUpdates.size>0){const ce=Yl(Ee.width,Ee.height,g.format,g.type);for(const qe of g.layerUpdates){const Ze=Ee.data.subarray(qe*ce/Ee.data.BYTES_PER_ELEMENT,(qe+1)*ce/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,qe,Ee.width,Ee.height,1,ge,Ze,0,0)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,Ee.width,Ee.height,se.depth,ge,Ee.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,De,Ee.width,Ee.height,se.depth,0,Ee.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?C&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,Ee.width,Ee.height,se.depth,ge,je,Ee.data):t.texImage3D(n.TEXTURE_2D_ARRAY,J,De,Ee.width,Ee.height,se.depth,0,ge,je,Ee.data)}else{Ge&&ot&&t.texStorage2D(n.TEXTURE_2D,ae,De,ze[0].width,ze[0].height);for(let J=0,Q=ze.length;J<Q;J++)Ee=ze[J],g.format!==Yt?ge!==null?Ge?C&&t.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,Ee.width,Ee.height,ge,Ee.data):t.compressedTexImage2D(n.TEXTURE_2D,J,De,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?C&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,Ee.width,Ee.height,ge,je,Ee.data):t.texImage2D(n.TEXTURE_2D,J,De,Ee.width,Ee.height,0,ge,je,Ee.data)}else if(g.isDataArrayTexture)if(Ge){if(ot&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ae,De,se.width,se.height,se.depth),C)if(g.layerUpdates.size>0){const J=Yl(se.width,se.height,g.format,g.type);for(const Q of g.layerUpdates){const ce=se.data.subarray(Q*J/se.data.BYTES_PER_ELEMENT,(Q+1)*J/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Q,se.width,se.height,1,ge,je,ce)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,ge,je,se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,De,se.width,se.height,se.depth,0,ge,je,se.data);else if(g.isData3DTexture)Ge?(ot&&t.texStorage3D(n.TEXTURE_3D,ae,De,se.width,se.height,se.depth),C&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,ge,je,se.data)):t.texImage3D(n.TEXTURE_3D,0,De,se.width,se.height,se.depth,0,ge,je,se.data);else if(g.isFramebufferTexture){if(ot)if(Ge)t.texStorage2D(n.TEXTURE_2D,ae,De,se.width,se.height);else{let J=se.width,Q=se.height;for(let ce=0;ce<ae;ce++)t.texImage2D(n.TEXTURE_2D,ce,De,J,Q,0,ge,je,null),J>>=1,Q>>=1}}else if(ze.length>0){if(Ge&&ot){const J=Me(ze[0]);t.texStorage2D(n.TEXTURE_2D,ae,De,J.width,J.height)}for(let J=0,Q=ze.length;J<Q;J++)Ee=ze[J],Ge?C&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,ge,je,Ee):t.texImage2D(n.TEXTURE_2D,J,De,ge,je,Ee);g.generateMipmaps=!1}else if(Ge){if(ot){const J=Me(se);t.texStorage2D(n.TEXTURE_2D,ae,De,J.width,J.height)}C&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ge,je,se)}else t.texImage2D(n.TEXTURE_2D,0,De,ge,je,se);p(g)&&f(ne),Re.__version=ee.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function G(T,g,z){if(g.image.length!==6)return;const ne=Be(T,g),te=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+z);const ee=i.get(te);if(te.version!==ee.__version||ne===!0){t.activeTexture(n.TEXTURE0+z);const Re=it.getPrimaries(it.workingColorSpace),ue=g.colorSpace===Pn?null:it.getPrimaries(g.colorSpace),ye=g.colorSpace===Pn||Re===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const Fe=g.isCompressedTexture||g.image[0].isCompressedTexture,se=g.image[0]&&g.image[0].isDataTexture,ge=[];for(let Q=0;Q<6;Q++)!Fe&&!se?ge[Q]=v(g.image[Q],!0,r.maxCubemapSize):ge[Q]=se?g.image[Q].image:g.image[Q],ge[Q]=fe(g,ge[Q]);const je=ge[0],De=s.convert(g.format,g.colorSpace),Ee=s.convert(g.type),ze=E(g.internalFormat,De,Ee,g.colorSpace),Ge=g.isVideoTexture!==!0,ot=ee.__version===void 0||ne===!0,C=te.dataReady;let ae=b(g,je);xe(n.TEXTURE_CUBE_MAP,g);let J;if(Fe){Ge&&ot&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ae,ze,je.width,je.height);for(let Q=0;Q<6;Q++){J=ge[Q].mipmaps;for(let ce=0;ce<J.length;ce++){const qe=J[ce];g.format!==Yt?De!==null?Ge?C&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce,0,0,qe.width,qe.height,De,qe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce,ze,qe.width,qe.height,0,qe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?C&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce,0,0,qe.width,qe.height,De,Ee,qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce,ze,qe.width,qe.height,0,De,Ee,qe.data)}}}else{if(J=g.mipmaps,Ge&&ot){J.length>0&&ae++;const Q=Me(ge[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ae,ze,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(se){Ge?C&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ge[Q].width,ge[Q].height,De,Ee,ge[Q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,ze,ge[Q].width,ge[Q].height,0,De,Ee,ge[Q].data);for(let ce=0;ce<J.length;ce++){const Ze=J[ce].image[Q].image;Ge?C&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce+1,0,0,Ze.width,Ze.height,De,Ee,Ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce+1,ze,Ze.width,Ze.height,0,De,Ee,Ze.data)}}else{Ge?C&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,De,Ee,ge[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,ze,De,Ee,ge[Q]);for(let ce=0;ce<J.length;ce++){const qe=J[ce];Ge?C&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce+1,0,0,De,Ee,qe.image[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce+1,ze,De,Ee,qe.image[Q])}}}p(g)&&f(n.TEXTURE_CUBE_MAP),ee.__version=te.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function re(T,g,z,ne,te,ee){const Re=s.convert(z.format,z.colorSpace),ue=s.convert(z.type),ye=E(z.internalFormat,Re,ue,z.colorSpace);if(!i.get(g).__hasExternalTextures){const se=Math.max(1,g.width>>ee),ge=Math.max(1,g.height>>ee);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,ee,ye,se,ge,g.depth,0,Re,ue,null):t.texImage2D(te,ee,ye,se,ge,0,Re,ue,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),j(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,te,i.get(z).__webglTexture,0,de(g)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ne,te,i.get(z).__webglTexture,ee),t.bindFramebuffer(n.FRAMEBUFFER,null)}function be(T,g,z){if(n.bindRenderbuffer(n.RENDERBUFFER,T),g.depthBuffer){const ne=g.depthTexture,te=ne&&ne.isDepthTexture?ne.type:null,ee=_(g.stencilBuffer,te),Re=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=de(g);j(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue,ee,g.width,g.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,ue,ee,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,ee,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Re,n.RENDERBUFFER,T)}else{const ne=g.textures;for(let te=0;te<ne.length;te++){const ee=ne[te],Re=s.convert(ee.format,ee.colorSpace),ue=s.convert(ee.type),ye=E(ee.internalFormat,Re,ue,ee.colorSpace),Fe=de(g);z&&j(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Fe,ye,g.width,g.height):j(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Fe,ye,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,ye,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function he(T,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),X(g.depthTexture,0);const ne=i.get(g.depthTexture).__webglTexture,te=de(g);if(g.depthTexture.format===Ni)j(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0);else if(g.depthTexture.format===Vi)j(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Ue(T){const g=i.get(T),z=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!g.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");he(g.__webglFramebuffer,T)}else if(z){g.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[ne]),g.__webglDepthbuffer[ne]=n.createRenderbuffer(),be(g.__webglDepthbuffer[ne],T,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer=n.createRenderbuffer(),be(g.__webglDepthbuffer,T,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function ke(T,g,z){const ne=i.get(T);g!==void 0&&re(ne.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&Ue(T)}function Ne(T){const g=T.texture,z=i.get(T),ne=i.get(g);T.addEventListener("dispose",P);const te=T.textures,ee=T.isWebGLCubeRenderTarget===!0,Re=te.length>1;if(Re||(ne.__webglTexture===void 0&&(ne.__webglTexture=n.createTexture()),ne.__version=g.version,o.memory.textures++),ee){z.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(g.mipmaps&&g.mipmaps.length>0){z.__webglFramebuffer[ue]=[];for(let ye=0;ye<g.mipmaps.length;ye++)z.__webglFramebuffer[ue][ye]=n.createFramebuffer()}else z.__webglFramebuffer[ue]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){z.__webglFramebuffer=[];for(let ue=0;ue<g.mipmaps.length;ue++)z.__webglFramebuffer[ue]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(Re)for(let ue=0,ye=te.length;ue<ye;ue++){const Fe=i.get(te[ue]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=n.createTexture(),o.memory.textures++)}if(T.samples>0&&j(T)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ue=0;ue<te.length;ue++){const ye=te[ue];z.__webglColorRenderbuffer[ue]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[ue]);const Fe=s.convert(ye.format,ye.colorSpace),se=s.convert(ye.type),ge=E(ye.internalFormat,Fe,se,ye.colorSpace,T.isXRRenderTarget===!0),je=de(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,je,ge,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,z.__webglColorRenderbuffer[ue])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),be(z.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ee){t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture),xe(n.TEXTURE_CUBE_MAP,g);for(let ue=0;ue<6;ue++)if(g.mipmaps&&g.mipmaps.length>0)for(let ye=0;ye<g.mipmaps.length;ye++)re(z.__webglFramebuffer[ue][ye],T,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ye);else re(z.__webglFramebuffer[ue],T,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);p(g)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let ue=0,ye=te.length;ue<ye;ue++){const Fe=te[ue],se=i.get(Fe);t.bindTexture(n.TEXTURE_2D,se.__webglTexture),xe(n.TEXTURE_2D,Fe),re(z.__webglFramebuffer,T,Fe,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,0),p(Fe)&&f(n.TEXTURE_2D)}t.unbindTexture()}else{let ue=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ue=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ue,ne.__webglTexture),xe(ue,g),g.mipmaps&&g.mipmaps.length>0)for(let ye=0;ye<g.mipmaps.length;ye++)re(z.__webglFramebuffer[ye],T,g,n.COLOR_ATTACHMENT0,ue,ye);else re(z.__webglFramebuffer,T,g,n.COLOR_ATTACHMENT0,ue,0);p(g)&&f(ue),t.unbindTexture()}T.depthBuffer&&Ue(T)}function Ke(T){const g=T.textures;for(let z=0,ne=g.length;z<ne;z++){const te=g[z];if(p(te)){const ee=T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Re=i.get(te).__webglTexture;t.bindTexture(ee,Re),f(ee),t.unbindTexture()}}}const S=[],oe=[];function ie(T){if(T.samples>0){if(j(T)===!1){const g=T.textures,z=T.width,ne=T.height;let te=n.COLOR_BUFFER_BIT;const ee=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Re=i.get(T),ue=g.length>1;if(ue)for(let ye=0;ye<g.length;ye++)t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let ye=0;ye<g.length;ye++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),ue){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Re.__webglColorRenderbuffer[ye]);const Fe=i.get(g[ye]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Fe,0)}n.blitFramebuffer(0,0,z,ne,0,0,z,ne,te,n.NEAREST),l===!0&&(S.length=0,oe.length=0,S.push(n.COLOR_ATTACHMENT0+ye),T.depthBuffer&&T.resolveDepthBuffer===!1&&(S.push(ee),oe.push(ee),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,oe)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,S))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ue)for(let ye=0;ye<g.length;ye++){t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,Re.__webglColorRenderbuffer[ye]);const Fe=i.get(g[ye]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,Fe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const g=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function de(T){return Math.min(r.maxSamples,T.samples)}function j(T){const g=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Ce(T){const g=o.render.frame;u.get(T)!==g&&(u.set(T,g),T.update())}function fe(T,g){const z=T.colorSpace,ne=T.format,te=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||z!==zn&&z!==Pn&&(it.getTransfer(z)===st?(ne!==Yt||te!==_n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),g}function Me(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=R,this.setTexture2D=X,this.setTexture2DArray=Z,this.setTexture3D=B,this.setTextureCube=K,this.rebindTextures=ke,this.setupRenderTarget=Ne,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=re,this.useMultisampledRTT=j}function i1(n,e){function t(i,r=Pn){let s;const o=it.getTransfer(r);if(i===_n)return n.UNSIGNED_BYTE;if(i===xa)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ya)return n.UNSIGNED_SHORT_5_5_5_1;if(i===eu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Qc)return n.BYTE;if(i===$c)return n.SHORT;if(i===lr)return n.UNSIGNED_SHORT;if(i===_a)return n.INT;if(i===si)return n.UNSIGNED_INT;if(i===vn)return n.FLOAT;if(i===mr)return n.HALF_FLOAT;if(i===tu)return n.ALPHA;if(i===nu)return n.RGB;if(i===Yt)return n.RGBA;if(i===iu)return n.LUMINANCE;if(i===ru)return n.LUMINANCE_ALPHA;if(i===Ni)return n.DEPTH_COMPONENT;if(i===Vi)return n.DEPTH_STENCIL;if(i===su)return n.RED;if(i===Sa)return n.RED_INTEGER;if(i===ou)return n.RG;if(i===ba)return n.RG_INTEGER;if(i===Ma)return n.RGBA_INTEGER;if(i===ns||i===is||i===rs||i===ss)if(o===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ns)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===is)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===rs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ss)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ns)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===is)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===rs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ss)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Eo||i===To||i===wo||i===Po)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Eo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===To)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===wo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Po)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ro||i===Co||i===Lo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ro||i===Co)return o===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Lo)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===qo||i===Io||i===Uo||i===No||i===Oo||i===Do||i===zo||i===Fo||i===ko||i===Ho||i===Vo||i===Bo||i===Go||i===Wo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===qo)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Io)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Uo)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===No)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Oo)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Do)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===zo)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Fo)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ko)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ho)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Vo)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Bo)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Go)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Wo)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===os||i===Xo||i===jo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===os)return o===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Xo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===jo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===au||i===Zo||i===Jo||i===Yo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===os)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Zo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Jo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Yo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Hi?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class r1 extends Dt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Xr extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const s1={type:"move"};class lo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,i),f=this._getHandJoint(c,v);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const u=c.joints["index-finger-tip"],A=c.joints["thumb-tip"],h=u.position.distanceTo(A.position),d=.02,m=.005;c.inputState.pinching&&h>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(s1)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Xr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const o1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,a1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class l1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new wt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Un({vertexShader:o1,fragmentShader:a1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ft(new zt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class c1 extends Gi{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,A=null,h=null,d=null,m=null;const v=new l1,p=t.getContextAttributes();let f=null,E=null;const _=[],b=[],N=new pe;let P=null;const w=new Dt;w.layers.enable(1),w.viewport=new _t;const U=new Dt;U.layers.enable(2),U.viewport=new _t;const M=[w,U],x=new r1;x.layers.enable(1),x.layers.enable(2);let R=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let re=_[G];return re===void 0&&(re=new lo,_[G]=re),re.getTargetRaySpace()},this.getControllerGrip=function(G){let re=_[G];return re===void 0&&(re=new lo,_[G]=re),re.getGripSpace()},this.getHand=function(G){let re=_[G];return re===void 0&&(re=new lo,_[G]=re),re.getHandSpace()};function k(G){const re=b.indexOf(G.inputSource);if(re===-1)return;const be=_[re];be!==void 0&&(be.update(G.inputSource,G.frame,c||o),be.dispatchEvent({type:G.type,data:G.inputSource}))}function X(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",Z);for(let G=0;G<_.length;G++){const re=b[G];re!==null&&(b[G]=null,_[G].disconnect(re))}R=null,W=null,v.reset(),e.setRenderTarget(f),d=null,h=null,A=null,r=null,E=null,Qe.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return A},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",X),r.addEventListener("inputsourceschange",Z),p.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(N),r.renderState.layers===void 0){const re={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,re),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),E=new oi(d.framebufferWidth,d.framebufferHeight,{format:Yt,type:_n,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let re=null,be=null,he=null;p.depth&&(he=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=p.stencil?Vi:Ni,be=p.stencil?Hi:si);const Ue={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:s};A=new XRWebGLBinding(r,t),h=A.createProjectionLayer(Ue),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),E=new oi(h.textureWidth,h.textureHeight,{format:Yt,type:_n,depthTexture:new bu(h.textureWidth,h.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Qe.setContext(r),Qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Z(G){for(let re=0;re<G.removed.length;re++){const be=G.removed[re],he=b.indexOf(be);he>=0&&(b[he]=null,_[he].disconnect(be))}for(let re=0;re<G.added.length;re++){const be=G.added[re];let he=b.indexOf(be);if(he===-1){for(let ke=0;ke<_.length;ke++)if(ke>=b.length){b.push(be),he=ke;break}else if(b[ke]===null){b[ke]=be,he=ke;break}if(he===-1)break}const Ue=_[he];Ue&&Ue.connect(be)}}const B=new q,K=new q;function V(G,re,be){B.setFromMatrixPosition(re.matrixWorld),K.setFromMatrixPosition(be.matrixWorld);const he=B.distanceTo(K),Ue=re.projectionMatrix.elements,ke=be.projectionMatrix.elements,Ne=Ue[14]/(Ue[10]-1),Ke=Ue[14]/(Ue[10]+1),S=(Ue[9]+1)/Ue[5],oe=(Ue[9]-1)/Ue[5],ie=(Ue[8]-1)/Ue[0],de=(ke[8]+1)/ke[0],j=Ne*ie,Ce=Ne*de,fe=he/(-ie+de),Me=fe*-ie;re.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Me),G.translateZ(fe),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const T=Ne+fe,g=Ke+fe,z=j-Me,ne=Ce+(he-Me),te=S*Ke/g*T,ee=oe*Ke/g*T;G.projectionMatrix.makePerspective(z,ne,te,ee,T,g),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function me(G,re){re===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(re.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;v.texture!==null&&(G.near=v.depthNear,G.far=v.depthFar),x.near=U.near=w.near=G.near,x.far=U.far=w.far=G.far,(R!==x.near||W!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),R=x.near,W=x.far,w.near=R,w.far=W,U.near=R,U.far=W,w.updateProjectionMatrix(),U.updateProjectionMatrix(),G.updateProjectionMatrix());const re=G.parent,be=x.cameras;me(x,re);for(let he=0;he<be.length;he++)me(be[he],re);be.length===2?V(x,w,U):x.projectionMatrix.copy(w.projectionMatrix),_e(G,x,re)};function _e(G,re,be){be===null?G.matrix.copy(re.matrixWorld):(G.matrix.copy(be.matrixWorld),G.matrix.invert(),G.matrix.multiply(re.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(re.projectionMatrix),G.projectionMatrixInverse.copy(re.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Ko*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(G){l=G,h!==null&&(h.fixedFoveation=G),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=G)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(x)};let xe=null;function Be(G,re){if(u=re.getViewerPose(c||o),m=re,u!==null){const be=u.views;d!==null&&(e.setRenderTargetFramebuffer(E,d.framebuffer),e.setRenderTarget(E));let he=!1;be.length!==x.cameras.length&&(x.cameras.length=0,he=!0);for(let ke=0;ke<be.length;ke++){const Ne=be[ke];let Ke=null;if(d!==null)Ke=d.getViewport(Ne);else{const oe=A.getViewSubImage(h,Ne);Ke=oe.viewport,ke===0&&(e.setRenderTargetTextures(E,oe.colorTexture,h.ignoreDepthValues?void 0:oe.depthStencilTexture),e.setRenderTarget(E))}let S=M[ke];S===void 0&&(S=new Dt,S.layers.enable(ke),S.viewport=new _t,M[ke]=S),S.matrix.fromArray(Ne.transform.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale),S.projectionMatrix.fromArray(Ne.projectionMatrix),S.projectionMatrixInverse.copy(S.projectionMatrix).invert(),S.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),ke===0&&(x.matrix.copy(S.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),he===!0&&x.cameras.push(S)}const Ue=r.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")){const ke=A.getDepthInformation(be[0]);ke&&ke.isValid&&ke.texture&&v.init(e,ke,r.renderState)}}for(let be=0;be<_.length;be++){const he=b[be],Ue=_[be];he!==null&&Ue!==void 0&&Ue.update(he,re,c||o)}xe&&xe(G,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),m=null}const Qe=new yu;Qe.setAnimationLoop(Be),this.setAnimationLoop=function(G){xe=G},this.dispose=function(){}}}const Zn=new an,u1=new pt;function A1(n,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,vu(n)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,E,_,b){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(p,f):f.isMeshToonMaterial?(s(p,f),A(p,f)):f.isMeshPhongMaterial?(s(p,f),u(p,f)):f.isMeshStandardMaterial?(s(p,f),h(p,f),f.isMeshPhysicalMaterial&&d(p,f,b)):f.isMeshMatcapMaterial?(s(p,f),m(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),v(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?l(p,f,E,_):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===qt&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===qt&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const E=e.get(f),_=E.envMap,b=E.envMapRotation;_&&(p.envMap.value=_,Zn.copy(b),Zn.x*=-1,Zn.y*=-1,Zn.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Zn.y*=-1,Zn.z*=-1),p.envMapRotation.value.setFromMatrix4(u1.makeRotationFromEuler(Zn)),p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,E,_){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*E,p.scale.value=_*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function A(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function h(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function d(p,f,E){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===qt&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,f){f.matcap&&(p.matcap.value=f.matcap)}function v(p,f){const E=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function h1(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,_){const b=_.program;i.uniformBlockBinding(E,b)}function c(E,_){let b=r[E.id];b===void 0&&(m(E),b=u(E),r[E.id]=b,E.addEventListener("dispose",p));const N=_.program;i.updateUBOMapping(E,N);const P=e.render.frame;s[E.id]!==P&&(h(E),s[E.id]=P)}function u(E){const _=A();E.__bindingPointIndex=_;const b=n.createBuffer(),N=E.__size,P=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,N,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,b),b}function A(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(E){const _=r[E.id],b=E.uniforms,N=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let P=0,w=b.length;P<w;P++){const U=Array.isArray(b[P])?b[P]:[b[P]];for(let M=0,x=U.length;M<x;M++){const R=U[M];if(d(R,P,M,N)===!0){const W=R.__offset,k=Array.isArray(R.value)?R.value:[R.value];let X=0;for(let Z=0;Z<k.length;Z++){const B=k[Z],K=v(B);typeof B=="number"||typeof B=="boolean"?(R.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,W+X,R.__data)):B.isMatrix3?(R.__data[0]=B.elements[0],R.__data[1]=B.elements[1],R.__data[2]=B.elements[2],R.__data[3]=0,R.__data[4]=B.elements[3],R.__data[5]=B.elements[4],R.__data[6]=B.elements[5],R.__data[7]=0,R.__data[8]=B.elements[6],R.__data[9]=B.elements[7],R.__data[10]=B.elements[8],R.__data[11]=0):(B.toArray(R.__data,X),X+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,W,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(E,_,b,N){const P=E.value,w=_+"_"+b;if(N[w]===void 0)return typeof P=="number"||typeof P=="boolean"?N[w]=P:N[w]=P.clone(),!0;{const U=N[w];if(typeof P=="number"||typeof P=="boolean"){if(U!==P)return N[w]=P,!0}else if(U.equals(P)===!1)return U.copy(P),!0}return!1}function m(E){const _=E.uniforms;let b=0;const N=16;for(let w=0,U=_.length;w<U;w++){const M=Array.isArray(_[w])?_[w]:[_[w]];for(let x=0,R=M.length;x<R;x++){const W=M[x],k=Array.isArray(W.value)?W.value:[W.value];for(let X=0,Z=k.length;X<Z;X++){const B=k[X],K=v(B),V=b%N,me=V%K.boundary,_e=V+me;b+=me,_e!==0&&N-_e<K.storage&&(b+=N-_e),W.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=b,b+=K.storage}}}const P=b%N;return P>0&&(b+=N-P),E.__size=b,E.__cache={},this}function v(E){const _={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(_.boundary=4,_.storage=4):E.isVector2?(_.boundary=8,_.storage=8):E.isVector3||E.isColor?(_.boundary=16,_.storage=12):E.isVector4?(_.boundary=16,_.storage=16):E.isMatrix3?(_.boundary=48,_.storage=48):E.isMatrix4?(_.boundary=64,_.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),_}function p(E){const _=E.target;_.removeEventListener("dispose",p);const b=o.indexOf(_.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function f(){for(const E in r)n.deleteBuffer(r[E]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}class d1{constructor(e={}){const{canvas:t=td(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:A=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const d=new Uint32Array(4),m=new Int32Array(4);let v=null,p=null;const f=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Zt,this.toneMapping=Cn,this.toneMappingExposure=1;const _=this;let b=!1,N=0,P=0,w=null,U=-1,M=null;const x=new _t,R=new _t;let W=null;const k=new Ye(0);let X=0,Z=t.width,B=t.height,K=1,V=null,me=null;const _e=new _t(0,0,Z,B),xe=new _t(0,0,Z,B);let Be=!1;const Qe=new xu;let G=!1,re=!1;const be=new pt,he=new q,Ue=new _t,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ne=!1;function Ke(){return w===null?K:1}let S=i;function oe(y,L){return t.getContext(y,L)}try{const y={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:A};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ga}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",Q,!1),t.addEventListener("webglcontextcreationerror",ce,!1),S===null){const L="webgl2";if(S=oe(L,y),S===null)throw oe(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let ie,de,j,Ce,fe,Me,T,g,z,ne,te,ee,Re,ue,ye,Fe,se,ge,je,De,Ee,ze,Ge,ot;function C(){ie=new _m(S),ie.init(),ze=new i1(S,ie),de=new dm(S,ie,e,ze),j=new e1(S),Ce=new Sm(S),fe=new k0,Me=new n1(S,ie,j,fe,de,ze,Ce),T=new pm(_),g=new gm(_),z=new Pd(S),Ge=new Am(S,z),ne=new xm(S,z,Ce,Ge),te=new Mm(S,ne,z,Ce),je=new bm(S,de,Me),Fe=new fm(fe),ee=new F0(_,T,g,ie,de,Ge,Fe),Re=new A1(_,fe),ue=new V0,ye=new Z0(ie),ge=new um(_,T,g,j,te,h,l),se=new $0(_,te,de),ot=new h1(S,Ce,de,j),De=new hm(S,ie,Ce),Ee=new ym(S,ie,Ce),Ce.programs=ee.programs,_.capabilities=de,_.extensions=ie,_.properties=fe,_.renderLists=ue,_.shadowMap=se,_.state=j,_.info=Ce}C();const ae=new c1(_,S);this.xr=ae,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){const y=ie.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=ie.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(y){y!==void 0&&(K=y,this.setSize(Z,B,!1))},this.getSize=function(y){return y.set(Z,B)},this.setSize=function(y,L,D=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=y,B=L,t.width=Math.floor(y*K),t.height=Math.floor(L*K),D===!0&&(t.style.width=y+"px",t.style.height=L+"px"),this.setViewport(0,0,y,L)},this.getDrawingBufferSize=function(y){return y.set(Z*K,B*K).floor()},this.setDrawingBufferSize=function(y,L,D){Z=y,B=L,K=D,t.width=Math.floor(y*D),t.height=Math.floor(L*D),this.setViewport(0,0,y,L)},this.getCurrentViewport=function(y){return y.copy(x)},this.getViewport=function(y){return y.copy(_e)},this.setViewport=function(y,L,D,F){y.isVector4?_e.set(y.x,y.y,y.z,y.w):_e.set(y,L,D,F),j.viewport(x.copy(_e).multiplyScalar(K).round())},this.getScissor=function(y){return y.copy(xe)},this.setScissor=function(y,L,D,F){y.isVector4?xe.set(y.x,y.y,y.z,y.w):xe.set(y,L,D,F),j.scissor(R.copy(xe).multiplyScalar(K).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(y){j.setScissorTest(Be=y)},this.setOpaqueSort=function(y){V=y},this.setTransparentSort=function(y){me=y},this.getClearColor=function(y){return y.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor.apply(ge,arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha.apply(ge,arguments)},this.clear=function(y=!0,L=!0,D=!0){let F=0;if(y){let I=!1;if(w!==null){const le=w.texture.format;I=le===Ma||le===ba||le===Sa}if(I){const le=w.texture.type,ve=le===_n||le===si||le===lr||le===Hi||le===xa||le===ya,Te=ge.getClearColor(),we=ge.getClearAlpha(),Ie=Te.r,Oe=Te.g,Le=Te.b;ve?(d[0]=Ie,d[1]=Oe,d[2]=Le,d[3]=we,S.clearBufferuiv(S.COLOR,0,d)):(m[0]=Ie,m[1]=Oe,m[2]=Le,m[3]=we,S.clearBufferiv(S.COLOR,0,m))}else F|=S.COLOR_BUFFER_BIT}L&&(F|=S.DEPTH_BUFFER_BIT),D&&(F|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),S.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",Q,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),ue.dispose(),ye.dispose(),fe.dispose(),T.dispose(),g.dispose(),te.dispose(),Ge.dispose(),ot.dispose(),ee.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",$t),ae.removeEventListener("sessionend",Da),Vn.stop()};function J(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function Q(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const y=Ce.autoReset,L=se.enabled,D=se.autoUpdate,F=se.needsUpdate,I=se.type;C(),Ce.autoReset=y,se.enabled=L,se.autoUpdate=D,se.needsUpdate=F,se.type=I}function ce(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function qe(y){const L=y.target;L.removeEventListener("dispose",qe),Ze(L)}function Ze(y){At(y),fe.remove(y)}function At(y){const L=fe.get(y).programs;L!==void 0&&(L.forEach(function(D){ee.releaseProgram(D)}),y.isShaderMaterial&&ee.releaseShaderCache(y))}this.renderBufferDirect=function(y,L,D,F,I,le){L===null&&(L=ke);const ve=I.isMesh&&I.matrixWorld.determinant()<0,Te=aA(y,L,D,F,I);j.setMaterial(F,ve);let we=D.index,Ie=1;if(F.wireframe===!0){if(we=ne.getWireframeAttribute(D),we===void 0)return;Ie=2}const Oe=D.drawRange,Le=D.attributes.position;let et=Oe.start*Ie,lt=(Oe.start+Oe.count)*Ie;le!==null&&(et=Math.max(et,le.start*Ie),lt=Math.min(lt,(le.start+le.count)*Ie)),we!==null?(et=Math.max(et,0),lt=Math.min(lt,we.count)):Le!=null&&(et=Math.max(et,0),lt=Math.min(lt,Le.count));const ct=lt-et;if(ct<0||ct===1/0)return;Ge.setup(I,F,Te,D,we);let It,tt=De;if(we!==null&&(It=z.get(we),tt=Ee,tt.setIndex(It)),I.isMesh)F.wireframe===!0?(j.setLineWidth(F.wireframeLinewidth*Ke()),tt.setMode(S.LINES)):tt.setMode(S.TRIANGLES);else if(I.isLine){let Pe=F.linewidth;Pe===void 0&&(Pe=1),j.setLineWidth(Pe*Ke()),I.isLineSegments?tt.setMode(S.LINES):I.isLineLoop?tt.setMode(S.LINE_LOOP):tt.setMode(S.LINE_STRIP)}else I.isPoints?tt.setMode(S.POINTS):I.isSprite&&tt.setMode(S.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)tt.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(ie.get("WEBGL_multi_draw"))tt.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const Pe=I._multiDrawStarts,St=I._multiDrawCounts,nt=I._multiDrawCount,Gt=we?z.get(we).bytesPerElement:1,ui=fe.get(F).currentProgram.getUniforms();for(let Ut=0;Ut<nt;Ut++)ui.setValue(S,"_gl_DrawID",Ut),tt.render(Pe[Ut]/Gt,St[Ut])}else if(I.isInstancedMesh)tt.renderInstances(et,ct,I.count);else if(D.isInstancedBufferGeometry){const Pe=D._maxInstanceCount!==void 0?D._maxInstanceCount:1/0,St=Math.min(D.instanceCount,Pe);tt.renderInstances(et,ct,St)}else tt.render(et,ct)};function yt(y,L,D){y.transparent===!0&&y.side===nn&&y.forceSinglePass===!1?(y.side=qt,y.needsUpdate=!0,Sr(y,L,D),y.side=In,y.needsUpdate=!0,Sr(y,L,D),y.side=nn):Sr(y,L,D)}this.compile=function(y,L,D=null){D===null&&(D=y),p=ye.get(D),p.init(L),E.push(p),D.traverseVisible(function(I){I.isLight&&I.layers.test(L.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),y!==D&&y.traverseVisible(function(I){I.isLight&&I.layers.test(L.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),p.setupLights();const F=new Set;return y.traverse(function(I){const le=I.material;if(le)if(Array.isArray(le))for(let ve=0;ve<le.length;ve++){const Te=le[ve];yt(Te,D,I),F.add(Te)}else yt(le,D,I),F.add(le)}),E.pop(),p=null,F},this.compileAsync=function(y,L,D=null){const F=this.compile(y,L,D);return new Promise(I=>{function le(){if(F.forEach(function(ve){fe.get(ve).currentProgram.isReady()&&F.delete(ve)}),F.size===0){I(y);return}setTimeout(le,10)}ie.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let $e=null;function cn(y){$e&&$e(y)}function $t(){Vn.stop()}function Da(){Vn.start()}const Vn=new yu;Vn.setAnimationLoop(cn),typeof self<"u"&&Vn.setContext(self),this.setAnimationLoop=function(y){$e=y,ae.setAnimationLoop(y),y===null?Vn.stop():Vn.start()},ae.addEventListener("sessionstart",$t),ae.addEventListener("sessionend",Da),this.render=function(y,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(L),L=ae.getCamera()),y.isScene===!0&&y.onBeforeRender(_,y,L,w),p=ye.get(y,E.length),p.init(L),E.push(p),be.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Qe.setFromProjectionMatrix(be),re=this.localClippingEnabled,G=Fe.init(this.clippingPlanes,re),v=ue.get(y,f.length),v.init(),f.push(v),ae.enabled===!0&&ae.isPresenting===!0){const le=_.xr.getDepthSensingMesh();le!==null&&Rs(le,L,-1/0,_.sortObjects)}Rs(y,L,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(V,me),Ne=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,Ne&&ge.addToRenderList(v,y),this.info.render.frame++,G===!0&&Fe.beginShadows();const D=p.state.shadowsArray;se.render(D,y,L),G===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const F=v.opaque,I=v.transmissive;if(p.setupLights(),L.isArrayCamera){const le=L.cameras;if(I.length>0)for(let ve=0,Te=le.length;ve<Te;ve++){const we=le[ve];Fa(F,I,y,we)}Ne&&ge.render(y);for(let ve=0,Te=le.length;ve<Te;ve++){const we=le[ve];za(v,y,we,we.viewport)}}else I.length>0&&Fa(F,I,y,L),Ne&&ge.render(y),za(v,y,L);w!==null&&(Me.updateMultisampleRenderTarget(w),Me.updateRenderTargetMipmap(w)),y.isScene===!0&&y.onAfterRender(_,y,L),Ge.resetDefaultState(),U=-1,M=null,E.pop(),E.length>0?(p=E[E.length-1],G===!0&&Fe.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,f.pop(),f.length>0?v=f[f.length-1]:v=null};function Rs(y,L,D,F){if(y.visible===!1)return;if(y.layers.test(L.layers)){if(y.isGroup)D=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(L);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Qe.intersectsSprite(y)){F&&Ue.setFromMatrixPosition(y.matrixWorld).applyMatrix4(be);const ve=te.update(y),Te=y.material;Te.visible&&v.push(y,ve,Te,D,Ue.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Qe.intersectsObject(y))){const ve=te.update(y),Te=y.material;if(F&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ue.copy(y.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Ue.copy(ve.boundingSphere.center)),Ue.applyMatrix4(y.matrixWorld).applyMatrix4(be)),Array.isArray(Te)){const we=ve.groups;for(let Ie=0,Oe=we.length;Ie<Oe;Ie++){const Le=we[Ie],et=Te[Le.materialIndex];et&&et.visible&&v.push(y,ve,et,D,Ue.z,Le)}}else Te.visible&&v.push(y,ve,Te,D,Ue.z,null)}}const le=y.children;for(let ve=0,Te=le.length;ve<Te;ve++)Rs(le[ve],L,D,F)}function za(y,L,D,F){const I=y.opaque,le=y.transmissive,ve=y.transparent;p.setupLightsView(D),G===!0&&Fe.setGlobalState(_.clippingPlanes,D),F&&j.viewport(x.copy(F)),I.length>0&&yr(I,L,D),le.length>0&&yr(le,L,D),ve.length>0&&yr(ve,L,D),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function Fa(y,L,D,F){if((D.isScene===!0?D.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[F.id]===void 0&&(p.state.transmissionRenderTarget[F.id]=new oi(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float")?mr:_n,minFilter:ti,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));const le=p.state.transmissionRenderTarget[F.id],ve=F.viewport||x;le.setSize(ve.z,ve.w);const Te=_.getRenderTarget();_.setRenderTarget(le),_.getClearColor(k),X=_.getClearAlpha(),X<1&&_.setClearColor(16777215,.5),_.clear(),Ne&&ge.render(D);const we=_.toneMapping;_.toneMapping=Cn;const Ie=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),p.setupLightsView(F),G===!0&&Fe.setGlobalState(_.clippingPlanes,F),yr(y,D,F),Me.updateMultisampleRenderTarget(le),Me.updateRenderTargetMipmap(le),ie.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let Le=0,et=L.length;Le<et;Le++){const lt=L[Le],ct=lt.object,It=lt.geometry,tt=lt.material,Pe=lt.group;if(tt.side===nn&&ct.layers.test(F.layers)){const St=tt.side;tt.side=qt,tt.needsUpdate=!0,ka(ct,D,F,It,tt,Pe),tt.side=St,tt.needsUpdate=!0,Oe=!0}}Oe===!0&&(Me.updateMultisampleRenderTarget(le),Me.updateRenderTargetMipmap(le))}_.setRenderTarget(Te),_.setClearColor(k,X),Ie!==void 0&&(F.viewport=Ie),_.toneMapping=we}function yr(y,L,D){const F=L.isScene===!0?L.overrideMaterial:null;for(let I=0,le=y.length;I<le;I++){const ve=y[I],Te=ve.object,we=ve.geometry,Ie=F===null?ve.material:F,Oe=ve.group;Te.layers.test(D.layers)&&ka(Te,L,D,we,Ie,Oe)}}function ka(y,L,D,F,I,le){y.onBeforeRender(_,L,D,F,I,le),y.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),I.transparent===!0&&I.side===nn&&I.forceSinglePass===!1?(I.side=qt,I.needsUpdate=!0,_.renderBufferDirect(D,L,F,I,y,le),I.side=In,I.needsUpdate=!0,_.renderBufferDirect(D,L,F,I,y,le),I.side=nn):_.renderBufferDirect(D,L,F,I,y,le),y.onAfterRender(_,L,D,F,I,le)}function Sr(y,L,D){L.isScene!==!0&&(L=ke);const F=fe.get(y),I=p.state.lights,le=p.state.shadowsArray,ve=I.state.version,Te=ee.getParameters(y,I.state,le,L,D),we=ee.getProgramCacheKey(Te);let Ie=F.programs;F.environment=y.isMeshStandardMaterial?L.environment:null,F.fog=L.fog,F.envMap=(y.isMeshStandardMaterial?g:T).get(y.envMap||F.environment),F.envMapRotation=F.environment!==null&&y.envMap===null?L.environmentRotation:y.envMapRotation,Ie===void 0&&(y.addEventListener("dispose",qe),Ie=new Map,F.programs=Ie);let Oe=Ie.get(we);if(Oe!==void 0){if(F.currentProgram===Oe&&F.lightsStateVersion===ve)return Va(y,Te),Oe}else Te.uniforms=ee.getUniforms(y),y.onBeforeCompile(Te,_),Oe=ee.acquireProgram(Te,we),Ie.set(we,Oe),F.uniforms=Te.uniforms;const Le=F.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Le.clippingPlanes=Fe.uniform),Va(y,Te),F.needsLights=cA(y),F.lightsStateVersion=ve,F.needsLights&&(Le.ambientLightColor.value=I.state.ambient,Le.lightProbe.value=I.state.probe,Le.directionalLights.value=I.state.directional,Le.directionalLightShadows.value=I.state.directionalShadow,Le.spotLights.value=I.state.spot,Le.spotLightShadows.value=I.state.spotShadow,Le.rectAreaLights.value=I.state.rectArea,Le.ltc_1.value=I.state.rectAreaLTC1,Le.ltc_2.value=I.state.rectAreaLTC2,Le.pointLights.value=I.state.point,Le.pointLightShadows.value=I.state.pointShadow,Le.hemisphereLights.value=I.state.hemi,Le.directionalShadowMap.value=I.state.directionalShadowMap,Le.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Le.spotShadowMap.value=I.state.spotShadowMap,Le.spotLightMatrix.value=I.state.spotLightMatrix,Le.spotLightMap.value=I.state.spotLightMap,Le.pointShadowMap.value=I.state.pointShadowMap,Le.pointShadowMatrix.value=I.state.pointShadowMatrix),F.currentProgram=Oe,F.uniformsList=null,Oe}function Ha(y){if(y.uniformsList===null){const L=y.currentProgram.getUniforms();y.uniformsList=as.seqWithValue(L.seq,y.uniforms)}return y.uniformsList}function Va(y,L){const D=fe.get(y);D.outputColorSpace=L.outputColorSpace,D.batching=L.batching,D.batchingColor=L.batchingColor,D.instancing=L.instancing,D.instancingColor=L.instancingColor,D.instancingMorph=L.instancingMorph,D.skinning=L.skinning,D.morphTargets=L.morphTargets,D.morphNormals=L.morphNormals,D.morphColors=L.morphColors,D.morphTargetsCount=L.morphTargetsCount,D.numClippingPlanes=L.numClippingPlanes,D.numIntersection=L.numClipIntersection,D.vertexAlphas=L.vertexAlphas,D.vertexTangents=L.vertexTangents,D.toneMapping=L.toneMapping}function aA(y,L,D,F,I){L.isScene!==!0&&(L=ke),Me.resetTextureUnits();const le=L.fog,ve=F.isMeshStandardMaterial?L.environment:null,Te=w===null?_.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:zn,we=(F.isMeshStandardMaterial?g:T).get(F.envMap||ve),Ie=F.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,Oe=!!D.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),Le=!!D.morphAttributes.position,et=!!D.morphAttributes.normal,lt=!!D.morphAttributes.color;let ct=Cn;F.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(ct=_.toneMapping);const It=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,tt=It!==void 0?It.length:0,Pe=fe.get(F),St=p.state.lights;if(G===!0&&(re===!0||y!==M)){const kt=y===M&&F.id===U;Fe.setState(F,y,kt)}let nt=!1;F.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==St.state.version||Pe.outputColorSpace!==Te||I.isBatchedMesh&&Pe.batching===!1||!I.isBatchedMesh&&Pe.batching===!0||I.isBatchedMesh&&Pe.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&Pe.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&Pe.instancing===!1||!I.isInstancedMesh&&Pe.instancing===!0||I.isSkinnedMesh&&Pe.skinning===!1||!I.isSkinnedMesh&&Pe.skinning===!0||I.isInstancedMesh&&Pe.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&Pe.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&Pe.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&Pe.instancingMorph===!1&&I.morphTexture!==null||Pe.envMap!==we||F.fog===!0&&Pe.fog!==le||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==Fe.numPlanes||Pe.numIntersection!==Fe.numIntersection)||Pe.vertexAlphas!==Ie||Pe.vertexTangents!==Oe||Pe.morphTargets!==Le||Pe.morphNormals!==et||Pe.morphColors!==lt||Pe.toneMapping!==ct||Pe.morphTargetsCount!==tt)&&(nt=!0):(nt=!0,Pe.__version=F.version);let Gt=Pe.currentProgram;nt===!0&&(Gt=Sr(F,L,I));let ui=!1,Ut=!1,Cs=!1;const ht=Gt.getUniforms(),yn=Pe.uniforms;if(j.useProgram(Gt.program)&&(ui=!0,Ut=!0,Cs=!0),F.id!==U&&(U=F.id,Ut=!0),ui||M!==y){ht.setValue(S,"projectionMatrix",y.projectionMatrix),ht.setValue(S,"viewMatrix",y.matrixWorldInverse);const kt=ht.map.cameraPosition;kt!==void 0&&kt.setValue(S,he.setFromMatrixPosition(y.matrixWorld)),de.logarithmicDepthBuffer&&ht.setValue(S,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&ht.setValue(S,"isOrthographic",y.isOrthographicCamera===!0),M!==y&&(M=y,Ut=!0,Cs=!0)}if(I.isSkinnedMesh){ht.setOptional(S,I,"bindMatrix"),ht.setOptional(S,I,"bindMatrixInverse");const kt=I.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),ht.setValue(S,"boneTexture",kt.boneTexture,Me))}I.isBatchedMesh&&(ht.setOptional(S,I,"batchingTexture"),ht.setValue(S,"batchingTexture",I._matricesTexture,Me),ht.setOptional(S,I,"batchingIdTexture"),ht.setValue(S,"batchingIdTexture",I._indirectTexture,Me),ht.setOptional(S,I,"batchingColorTexture"),I._colorsTexture!==null&&ht.setValue(S,"batchingColorTexture",I._colorsTexture,Me));const Ls=D.morphAttributes;if((Ls.position!==void 0||Ls.normal!==void 0||Ls.color!==void 0)&&je.update(I,D,Gt),(Ut||Pe.receiveShadow!==I.receiveShadow)&&(Pe.receiveShadow=I.receiveShadow,ht.setValue(S,"receiveShadow",I.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(yn.envMap.value=we,yn.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),F.isMeshStandardMaterial&&F.envMap===null&&L.environment!==null&&(yn.envMapIntensity.value=L.environmentIntensity),Ut&&(ht.setValue(S,"toneMappingExposure",_.toneMappingExposure),Pe.needsLights&&lA(yn,Cs),le&&F.fog===!0&&Re.refreshFogUniforms(yn,le),Re.refreshMaterialUniforms(yn,F,K,B,p.state.transmissionRenderTarget[y.id]),as.upload(S,Ha(Pe),yn,Me)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(as.upload(S,Ha(Pe),yn,Me),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&ht.setValue(S,"center",I.center),ht.setValue(S,"modelViewMatrix",I.modelViewMatrix),ht.setValue(S,"normalMatrix",I.normalMatrix),ht.setValue(S,"modelMatrix",I.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const kt=F.uniformsGroups;for(let qs=0,uA=kt.length;qs<uA;qs++){const Ba=kt[qs];ot.update(Ba,Gt),ot.bind(Ba,Gt)}}return Gt}function lA(y,L){y.ambientLightColor.needsUpdate=L,y.lightProbe.needsUpdate=L,y.directionalLights.needsUpdate=L,y.directionalLightShadows.needsUpdate=L,y.pointLights.needsUpdate=L,y.pointLightShadows.needsUpdate=L,y.spotLights.needsUpdate=L,y.spotLightShadows.needsUpdate=L,y.rectAreaLights.needsUpdate=L,y.hemisphereLights.needsUpdate=L}function cA(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(y,L,D){fe.get(y.texture).__webglTexture=L,fe.get(y.depthTexture).__webglTexture=D;const F=fe.get(y);F.__hasExternalTextures=!0,F.__autoAllocateDepthBuffer=D===void 0,F.__autoAllocateDepthBuffer||ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,L){const D=fe.get(y);D.__webglFramebuffer=L,D.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(y,L=0,D=0){w=y,N=L,P=D;let F=!0,I=null,le=!1,ve=!1;if(y){const we=fe.get(y);we.__useDefaultFramebuffer!==void 0?(j.bindFramebuffer(S.FRAMEBUFFER,null),F=!1):we.__webglFramebuffer===void 0?Me.setupRenderTarget(y):we.__hasExternalTextures&&Me.rebindTextures(y,fe.get(y.texture).__webglTexture,fe.get(y.depthTexture).__webglTexture);const Ie=y.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(ve=!0);const Oe=fe.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Oe[L])?I=Oe[L][D]:I=Oe[L],le=!0):y.samples>0&&Me.useMultisampledRTT(y)===!1?I=fe.get(y).__webglMultisampledFramebuffer:Array.isArray(Oe)?I=Oe[D]:I=Oe,x.copy(y.viewport),R.copy(y.scissor),W=y.scissorTest}else x.copy(_e).multiplyScalar(K).floor(),R.copy(xe).multiplyScalar(K).floor(),W=Be;if(j.bindFramebuffer(S.FRAMEBUFFER,I)&&F&&j.drawBuffers(y,I),j.viewport(x),j.scissor(R),j.setScissorTest(W),le){const we=fe.get(y.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+L,we.__webglTexture,D)}else if(ve){const we=fe.get(y.texture),Ie=L||0;S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,we.__webglTexture,D||0,Ie)}U=-1},this.readRenderTargetPixels=function(y,L,D,F,I,le,ve){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=fe.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ve!==void 0&&(Te=Te[ve]),Te){j.bindFramebuffer(S.FRAMEBUFFER,Te);try{const we=y.texture,Ie=we.format,Oe=we.type;if(!de.textureFormatReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!de.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=y.width-F&&D>=0&&D<=y.height-I&&S.readPixels(L,D,F,I,ze.convert(Ie),ze.convert(Oe),le)}finally{const we=w!==null?fe.get(w).__webglFramebuffer:null;j.bindFramebuffer(S.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(y,L,D,F,I,le,ve){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=fe.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ve!==void 0&&(Te=Te[ve]),Te){j.bindFramebuffer(S.FRAMEBUFFER,Te);try{const we=y.texture,Ie=we.format,Oe=we.type;if(!de.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!de.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=y.width-F&&D>=0&&D<=y.height-I){const Le=S.createBuffer();S.bindBuffer(S.PIXEL_PACK_BUFFER,Le),S.bufferData(S.PIXEL_PACK_BUFFER,le.byteLength,S.STREAM_READ),S.readPixels(L,D,F,I,ze.convert(Ie),ze.convert(Oe),0),S.flush();const et=S.fenceSync(S.SYNC_GPU_COMMANDS_COMPLETE,0);await nd(S,et,4);try{S.bindBuffer(S.PIXEL_PACK_BUFFER,Le),S.getBufferSubData(S.PIXEL_PACK_BUFFER,0,le)}finally{S.deleteBuffer(Le),S.deleteSync(et)}return le}}finally{const we=w!==null?fe.get(w).__webglFramebuffer:null;j.bindFramebuffer(S.FRAMEBUFFER,we)}}},this.copyFramebufferToTexture=function(y,L=null,D=0){y.isTexture!==!0&&(ir("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,y=arguments[1]);const F=Math.pow(2,-D),I=Math.floor(y.image.width*F),le=Math.floor(y.image.height*F),ve=L!==null?L.x:0,Te=L!==null?L.y:0;Me.setTexture2D(y,0),S.copyTexSubImage2D(S.TEXTURE_2D,D,0,0,ve,Te,I,le),j.unbindTexture()},this.copyTextureToTexture=function(y,L,D=null,F=null,I=0){y.isTexture!==!0&&(ir("WebGLRenderer: copyTextureToTexture function signature has changed."),F=arguments[0]||null,y=arguments[1],L=arguments[2],I=arguments[3]||0,D=null);let le,ve,Te,we,Ie,Oe;D!==null?(le=D.max.x-D.min.x,ve=D.max.y-D.min.y,Te=D.min.x,we=D.min.y):(le=y.image.width,ve=y.image.height,Te=0,we=0),F!==null?(Ie=F.x,Oe=F.y):(Ie=0,Oe=0);const Le=ze.convert(L.format),et=ze.convert(L.type);Me.setTexture2D(L,0),S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,L.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,L.unpackAlignment);const lt=S.getParameter(S.UNPACK_ROW_LENGTH),ct=S.getParameter(S.UNPACK_IMAGE_HEIGHT),It=S.getParameter(S.UNPACK_SKIP_PIXELS),tt=S.getParameter(S.UNPACK_SKIP_ROWS),Pe=S.getParameter(S.UNPACK_SKIP_IMAGES),St=y.isCompressedTexture?y.mipmaps[I]:y.image;S.pixelStorei(S.UNPACK_ROW_LENGTH,St.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,St.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,Te),S.pixelStorei(S.UNPACK_SKIP_ROWS,we),y.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,I,Ie,Oe,le,ve,Le,et,St.data):y.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,I,Ie,Oe,St.width,St.height,Le,St.data):S.texSubImage2D(S.TEXTURE_2D,I,Ie,Oe,le,ve,Le,et,St),S.pixelStorei(S.UNPACK_ROW_LENGTH,lt),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,ct),S.pixelStorei(S.UNPACK_SKIP_PIXELS,It),S.pixelStorei(S.UNPACK_SKIP_ROWS,tt),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Pe),I===0&&L.generateMipmaps&&S.generateMipmap(S.TEXTURE_2D),j.unbindTexture()},this.copyTextureToTexture3D=function(y,L,D=null,F=null,I=0){y.isTexture!==!0&&(ir("WebGLRenderer: copyTextureToTexture3D function signature has changed."),D=arguments[0]||null,F=arguments[1]||null,y=arguments[2],L=arguments[3],I=arguments[4]||0);let le,ve,Te,we,Ie,Oe,Le,et,lt;const ct=y.isCompressedTexture?y.mipmaps[I]:y.image;D!==null?(le=D.max.x-D.min.x,ve=D.max.y-D.min.y,Te=D.max.z-D.min.z,we=D.min.x,Ie=D.min.y,Oe=D.min.z):(le=ct.width,ve=ct.height,Te=ct.depth,we=0,Ie=0,Oe=0),F!==null?(Le=F.x,et=F.y,lt=F.z):(Le=0,et=0,lt=0);const It=ze.convert(L.format),tt=ze.convert(L.type);let Pe;if(L.isData3DTexture)Me.setTexture3D(L,0),Pe=S.TEXTURE_3D;else if(L.isDataArrayTexture||L.isCompressedArrayTexture)Me.setTexture2DArray(L,0),Pe=S.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,L.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,L.unpackAlignment);const St=S.getParameter(S.UNPACK_ROW_LENGTH),nt=S.getParameter(S.UNPACK_IMAGE_HEIGHT),Gt=S.getParameter(S.UNPACK_SKIP_PIXELS),ui=S.getParameter(S.UNPACK_SKIP_ROWS),Ut=S.getParameter(S.UNPACK_SKIP_IMAGES);S.pixelStorei(S.UNPACK_ROW_LENGTH,ct.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,ct.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,we),S.pixelStorei(S.UNPACK_SKIP_ROWS,Ie),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Oe),y.isDataTexture||y.isData3DTexture?S.texSubImage3D(Pe,I,Le,et,lt,le,ve,Te,It,tt,ct.data):L.isCompressedArrayTexture?S.compressedTexSubImage3D(Pe,I,Le,et,lt,le,ve,Te,It,ct.data):S.texSubImage3D(Pe,I,Le,et,lt,le,ve,Te,It,tt,ct),S.pixelStorei(S.UNPACK_ROW_LENGTH,St),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,nt),S.pixelStorei(S.UNPACK_SKIP_PIXELS,Gt),S.pixelStorei(S.UNPACK_SKIP_ROWS,ui),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Ut),I===0&&L.generateMipmaps&&S.generateMipmap(Pe),j.unbindTexture()},this.initRenderTarget=function(y){fe.get(y).__webglFramebuffer===void 0&&Me.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Me.setTextureCube(y,0):y.isData3DTexture?Me.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Me.setTexture2DArray(y,0):Me.setTexture2D(y,0),j.unbindTexture()},this.resetState=function(){N=0,P=0,w=null,j.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ea?"display-p3":"srgb",t.unpackColorSpace=it.workingColorSpace===Es?"display-p3":"srgb"}}class f1 extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new an,this.environmentIntensity=1,this.environmentRotation=new an,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class p1 extends wt{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ln{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],h=i[r+1]-u,d=(o-u)/h;return(r+d)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new pe:new q);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new q,r=[],s=[],o=[],a=new q,l=new pt;for(let d=0;d<=e;d++){const m=d/e;r[d]=this.getTangentAt(m,new q)}s[0]=new q,o[0]=new q;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),A=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),A<=c&&(c=A,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(Tt(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,m))}o[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(Tt(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(d=-d);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(r[m],d*m)),o[m].crossVectors(r[m],s[m])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Pa extends ln{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new pe){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),A=Math.sin(this.aRotation),h=l-this.aX,d=c-this.aY;l=h*u-d*A+this.aX,c=h*A+d*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class m1 extends Pa{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ra(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,A){let h=(o-s)/c-(a-s)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+A)+(l-a)/A;h*=u,d*=u,r(o,a,h,d)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const jr=new q,co=new Ra,uo=new Ra,Ao=new Ra;class v1 extends ln{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new q){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(jr.subVectors(r[0],r[1]).add(r[0]),c=jr);const A=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(jr.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=jr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(A),d),v=Math.pow(A.distanceToSquared(h),d),p=Math.pow(h.distanceToSquared(u),d);v<1e-4&&(v=1),m<1e-4&&(m=v),p<1e-4&&(p=v),co.initNonuniformCatmullRom(c.x,A.x,h.x,u.x,m,v,p),uo.initNonuniformCatmullRom(c.y,A.y,h.y,u.y,m,v,p),Ao.initNonuniformCatmullRom(c.z,A.z,h.z,u.z,m,v,p)}else this.curveType==="catmullrom"&&(co.initCatmullRom(c.x,A.x,h.x,u.x,this.tension),uo.initCatmullRom(c.y,A.y,h.y,u.y,this.tension),Ao.initCatmullRom(c.z,A.z,h.z,u.z,this.tension));return i.set(co.calc(l),uo.calc(l),Ao.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new q().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Kl(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,l=n*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*n+t}function g1(n,e){const t=1-n;return t*t*e}function _1(n,e){return 2*(1-n)*n*e}function x1(n,e){return n*n*e}function rr(n,e,t,i){return g1(n,e)+_1(n,t)+x1(n,i)}function y1(n,e){const t=1-n;return t*t*t*e}function S1(n,e){const t=1-n;return 3*t*t*n*e}function b1(n,e){return 3*(1-n)*n*n*e}function M1(n,e){return n*n*n*e}function sr(n,e,t,i,r){return y1(n,e)+S1(n,t)+b1(n,i)+M1(n,r)}class Pu extends ln{constructor(e=new pe,t=new pe,i=new pe,r=new pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new pe){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(sr(e,r.x,s.x,o.x,a.x),sr(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class E1 extends ln{constructor(e=new q,t=new q,i=new q,r=new q){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new q){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(sr(e,r.x,s.x,o.x,a.x),sr(e,r.y,s.y,o.y,a.y),sr(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ru extends ln{constructor(e=new pe,t=new pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new pe){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class T1 extends ln{constructor(e=new q,t=new q){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new q){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new q){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Cu extends ln{constructor(e=new pe,t=new pe,i=new pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new pe){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(rr(e,r.x,s.x,o.x),rr(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class w1 extends ln{constructor(e=new q,t=new q,i=new q){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new q){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(rr(e,r.x,s.x,o.x),rr(e,r.y,s.y,o.y),rr(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Lu extends ln{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new pe){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],A=r[o>r.length-3?r.length-1:o+2];return i.set(Kl(a,l.x,c.x,u.x,A.x),Kl(a,l.y,c.y,u.y,A.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new pe().fromArray(r))}return this}}var $o=Object.freeze({__proto__:null,ArcCurve:m1,CatmullRomCurve3:v1,CubicBezierCurve:Pu,CubicBezierCurve3:E1,EllipseCurve:Pa,LineCurve:Ru,LineCurve3:T1,QuadraticBezierCurve:Cu,QuadraticBezierCurve3:w1,SplineCurve:Lu});class P1 extends ln{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new $o[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new $o[r.type]().fromJSON(r))}return this}}class ea extends P1{constructor(e){super(),this.type="Path",this.currentPoint=new pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Ru(this.currentPoint.clone(),new pe(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new Cu(this.currentPoint.clone(),new pe(e,t),new pe(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){const a=new Pu(this.currentPoint.clone(),new pe(e,t),new pe(i,r),new pe(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Lu(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,r,s,o,a,l),this}absellipse(e,t,i,r,s,o,a,l){const c=new Pa(e,t,i,r,s,o,a,l);if(this.curves.length>0){const A=c.getPoint(0);A.equals(this.currentPoint)||this.lineTo(A.x,A.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ca extends xn{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],o=[],a=[],l=[],c=new q,u=new pe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let A=0,h=3;A<=t;A++,h+=3){const d=i+A/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[h]/e+1)/2,u.y=(o[h+1]/e+1)/2,l.push(u.x,u.y)}for(let A=1;A<=t;A++)s.push(A,A+1,0);this.setIndex(s),this.setAttribute("position",new Vt(o,3)),this.setAttribute("normal",new Vt(a,3)),this.setAttribute("uv",new Vt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ca(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ls extends ea{constructor(e){super(e),this.uuid=Wi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new ea().fromJSON(r))}return this}}const R1={triangulate:function(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=qu(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,A,h,d;if(i&&(s=U1(n,e,s,t)),n.length>80*t){a=c=n[0],l=u=n[1];for(let m=t;m<r;m+=t)A=n[m],h=n[m+1],A<a&&(a=A),h<l&&(l=h),A>c&&(c=A),h>u&&(u=h);d=Math.max(c-a,u-l),d=d!==0?32767/d:0}return ur(s,o,t,a,l,d,0),o}};function qu(n,e,t,i,r){let s,o;if(r===W1(n,e,t,i)>0)for(s=e;s<t;s+=i)o=Ql(s,n[s],n[s+1],o);else for(s=t-i;s>=e;s-=i)o=Ql(s,n[s],n[s+1],o);return o&&ws(o,o.next)&&(hr(o),o=o.next),o}function ai(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(ws(t,t.next)||at(t.prev,t,t.next)===0)){if(hr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function ur(n,e,t,i,r,s,o){if(!n)return;!o&&s&&F1(n,i,r,s);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,s?L1(n,i,r,s):C1(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),hr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=q1(ai(n),e,t),ur(n,e,t,i,r,s,2)):o===2&&I1(n,e,t,i,r,s):ur(ai(n),e,t,i,r,s,1);break}}}function C1(n){const e=n.prev,t=n,i=n.next;if(at(e,t,i)>=0)return!1;const r=e.x,s=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=r<s?r<o?r:o:s<o?s:o,A=a<l?a<c?a:c:l<c?l:c,h=r>s?r>o?r:o:s>o?s:o,d=a>l?a>c?a:c:l>c?l:c;let m=i.next;for(;m!==e;){if(m.x>=u&&m.x<=h&&m.y>=A&&m.y<=d&&Li(r,a,s,l,o,c,m.x,m.y)&&at(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function L1(n,e,t,i){const r=n.prev,s=n,o=n.next;if(at(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,A=s.y,h=o.y,d=a<l?a<c?a:c:l<c?l:c,m=u<A?u<h?u:h:A<h?A:h,v=a>l?a>c?a:c:l>c?l:c,p=u>A?u>h?u:h:A>h?A:h,f=ta(d,m,e,t,i),E=ta(v,p,e,t,i);let _=n.prevZ,b=n.nextZ;for(;_&&_.z>=f&&b&&b.z<=E;){if(_.x>=d&&_.x<=v&&_.y>=m&&_.y<=p&&_!==r&&_!==o&&Li(a,u,l,A,c,h,_.x,_.y)&&at(_.prev,_,_.next)>=0||(_=_.prevZ,b.x>=d&&b.x<=v&&b.y>=m&&b.y<=p&&b!==r&&b!==o&&Li(a,u,l,A,c,h,b.x,b.y)&&at(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;_&&_.z>=f;){if(_.x>=d&&_.x<=v&&_.y>=m&&_.y<=p&&_!==r&&_!==o&&Li(a,u,l,A,c,h,_.x,_.y)&&at(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;b&&b.z<=E;){if(b.x>=d&&b.x<=v&&b.y>=m&&b.y<=p&&b!==r&&b!==o&&Li(a,u,l,A,c,h,b.x,b.y)&&at(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function q1(n,e,t){let i=n;do{const r=i.prev,s=i.next.next;!ws(r,s)&&Iu(r,i,i.next,s)&&Ar(r,s)&&Ar(s,r)&&(e.push(r.i/t|0),e.push(i.i/t|0),e.push(s.i/t|0),hr(i),hr(i.next),i=n=s),i=i.next}while(i!==n);return ai(i)}function I1(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&V1(o,a)){let l=Uu(o,a);o=ai(o,o.next),l=ai(l,l.next),ur(o,e,t,i,r,s,0),ur(l,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function U1(n,e,t,i){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:n.length,c=qu(n,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push(H1(c));for(r.sort(N1),s=0;s<r.length;s++)t=O1(r[s],t);return t}function N1(n,e){return n.x-e.x}function O1(n,e){const t=D1(n,e);if(!t)return e;const i=Uu(t,n);return ai(i,i.next),ai(t,t.next)}function D1(n,e){let t=e,i=-1/0,r;const s=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const h=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=s&&h>i&&(i=h,r=t.x<t.next.x?t:t.next,h===s))return r}t=t.next}while(t!==e);if(!r)return null;const a=r,l=r.x,c=r.y;let u=1/0,A;t=r;do s>=t.x&&t.x>=l&&s!==t.x&&Li(o<c?s:i,o,l,c,o<c?i:s,o,t.x,t.y)&&(A=Math.abs(o-t.y)/(s-t.x),Ar(t,n)&&(A<u||A===u&&(t.x>r.x||t.x===r.x&&z1(r,t)))&&(r=t,u=A)),t=t.next;while(t!==a);return r}function z1(n,e){return at(n.prev,n,e.prev)<0&&at(e.next,n,n.next)<0}function F1(n,e,t,i){let r=n;do r.z===0&&(r.z=ta(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,k1(r)}function k1(n){let e,t,i,r,s,o,a,l,c=1;do{for(t=n,n=null,s=null,o=0;t;){for(o++,i=t,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(r=t,t=t.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;t=i}s.nextZ=null,c*=2}while(o>1);return n}function ta(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function H1(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Li(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function V1(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!B1(n,e)&&(Ar(n,e)&&Ar(e,n)&&G1(n,e)&&(at(n.prev,n,e.prev)||at(n,e.prev,e))||ws(n,e)&&at(n.prev,n,n.next)>0&&at(e.prev,e,e.next)>0)}function at(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function ws(n,e){return n.x===e.x&&n.y===e.y}function Iu(n,e,t,i){const r=Jr(at(n,e,t)),s=Jr(at(n,e,i)),o=Jr(at(t,i,n)),a=Jr(at(t,i,e));return!!(r!==s&&o!==a||r===0&&Zr(n,t,e)||s===0&&Zr(n,i,e)||o===0&&Zr(t,n,i)||a===0&&Zr(t,e,i))}function Zr(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Jr(n){return n>0?1:n<0?-1:0}function B1(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Iu(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Ar(n,e){return at(n.prev,n,n.next)<0?at(n,e,n.next)>=0&&at(n,n.prev,e)>=0:at(n,e,n.prev)<0||at(n,n.next,e)<0}function G1(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Uu(n,e){const t=new na(n.i,n.x,n.y),i=new na(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Ql(n,e,t,i){const r=new na(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function hr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function na(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function W1(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class Di{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return Di.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];$l(e),ec(i,e);let o=e.length;t.forEach($l);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,ec(i,t[l]);const a=R1.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function $l(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function ec(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class La extends xn{constructor(e=new ls([new pe(.5,.5),new pe(-.5,.5),new pe(-.5,-.5),new pe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new Vt(r,3)),this.setAttribute("uv",new Vt(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,A=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:d-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const f=t.extrudePath,E=t.UVGenerator!==void 0?t.UVGenerator:X1;let _,b=!1,N,P,w,U;f&&(_=f.getSpacedPoints(u),b=!0,h=!1,N=f.computeFrenetFrames(u,!1),P=new q,w=new q,U=new q),h||(p=0,d=0,m=0,v=0);const M=a.extractPoints(c);let x=M.shape;const R=M.holes;if(!Di.isClockWise(x)){x=x.reverse();for(let S=0,oe=R.length;S<oe;S++){const ie=R[S];Di.isClockWise(ie)&&(R[S]=ie.reverse())}}const k=Di.triangulateShape(x,R),X=x;for(let S=0,oe=R.length;S<oe;S++){const ie=R[S];x=x.concat(ie)}function Z(S,oe,ie){return oe||console.error("THREE.ExtrudeGeometry: vec does not exist"),S.clone().addScaledVector(oe,ie)}const B=x.length,K=k.length;function V(S,oe,ie){let de,j,Ce;const fe=S.x-oe.x,Me=S.y-oe.y,T=ie.x-S.x,g=ie.y-S.y,z=fe*fe+Me*Me,ne=fe*g-Me*T;if(Math.abs(ne)>Number.EPSILON){const te=Math.sqrt(z),ee=Math.sqrt(T*T+g*g),Re=oe.x-Me/te,ue=oe.y+fe/te,ye=ie.x-g/ee,Fe=ie.y+T/ee,se=((ye-Re)*g-(Fe-ue)*T)/(fe*g-Me*T);de=Re+fe*se-S.x,j=ue+Me*se-S.y;const ge=de*de+j*j;if(ge<=2)return new pe(de,j);Ce=Math.sqrt(ge/2)}else{let te=!1;fe>Number.EPSILON?T>Number.EPSILON&&(te=!0):fe<-Number.EPSILON?T<-Number.EPSILON&&(te=!0):Math.sign(Me)===Math.sign(g)&&(te=!0),te?(de=-Me,j=fe,Ce=Math.sqrt(z)):(de=fe,j=Me,Ce=Math.sqrt(z/2))}return new pe(de/Ce,j/Ce)}const me=[];for(let S=0,oe=X.length,ie=oe-1,de=S+1;S<oe;S++,ie++,de++)ie===oe&&(ie=0),de===oe&&(de=0),me[S]=V(X[S],X[ie],X[de]);const _e=[];let xe,Be=me.concat();for(let S=0,oe=R.length;S<oe;S++){const ie=R[S];xe=[];for(let de=0,j=ie.length,Ce=j-1,fe=de+1;de<j;de++,Ce++,fe++)Ce===j&&(Ce=0),fe===j&&(fe=0),xe[de]=V(ie[de],ie[Ce],ie[fe]);_e.push(xe),Be=Be.concat(xe)}for(let S=0;S<p;S++){const oe=S/p,ie=d*Math.cos(oe*Math.PI/2),de=m*Math.sin(oe*Math.PI/2)+v;for(let j=0,Ce=X.length;j<Ce;j++){const fe=Z(X[j],me[j],de);he(fe.x,fe.y,-ie)}for(let j=0,Ce=R.length;j<Ce;j++){const fe=R[j];xe=_e[j];for(let Me=0,T=fe.length;Me<T;Me++){const g=Z(fe[Me],xe[Me],de);he(g.x,g.y,-ie)}}}const Qe=m+v;for(let S=0;S<B;S++){const oe=h?Z(x[S],Be[S],Qe):x[S];b?(w.copy(N.normals[0]).multiplyScalar(oe.x),P.copy(N.binormals[0]).multiplyScalar(oe.y),U.copy(_[0]).add(w).add(P),he(U.x,U.y,U.z)):he(oe.x,oe.y,0)}for(let S=1;S<=u;S++)for(let oe=0;oe<B;oe++){const ie=h?Z(x[oe],Be[oe],Qe):x[oe];b?(w.copy(N.normals[S]).multiplyScalar(ie.x),P.copy(N.binormals[S]).multiplyScalar(ie.y),U.copy(_[S]).add(w).add(P),he(U.x,U.y,U.z)):he(ie.x,ie.y,A/u*S)}for(let S=p-1;S>=0;S--){const oe=S/p,ie=d*Math.cos(oe*Math.PI/2),de=m*Math.sin(oe*Math.PI/2)+v;for(let j=0,Ce=X.length;j<Ce;j++){const fe=Z(X[j],me[j],de);he(fe.x,fe.y,A+ie)}for(let j=0,Ce=R.length;j<Ce;j++){const fe=R[j];xe=_e[j];for(let Me=0,T=fe.length;Me<T;Me++){const g=Z(fe[Me],xe[Me],de);b?he(g.x,g.y+_[u-1].y,_[u-1].x+ie):he(g.x,g.y,A+ie)}}}G(),re();function G(){const S=r.length/3;if(h){let oe=0,ie=B*oe;for(let de=0;de<K;de++){const j=k[de];Ue(j[2]+ie,j[1]+ie,j[0]+ie)}oe=u+p*2,ie=B*oe;for(let de=0;de<K;de++){const j=k[de];Ue(j[0]+ie,j[1]+ie,j[2]+ie)}}else{for(let oe=0;oe<K;oe++){const ie=k[oe];Ue(ie[2],ie[1],ie[0])}for(let oe=0;oe<K;oe++){const ie=k[oe];Ue(ie[0]+B*u,ie[1]+B*u,ie[2]+B*u)}}i.addGroup(S,r.length/3-S,0)}function re(){const S=r.length/3;let oe=0;be(X,oe),oe+=X.length;for(let ie=0,de=R.length;ie<de;ie++){const j=R[ie];be(j,oe),oe+=j.length}i.addGroup(S,r.length/3-S,1)}function be(S,oe){let ie=S.length;for(;--ie>=0;){const de=ie;let j=ie-1;j<0&&(j=S.length-1);for(let Ce=0,fe=u+p*2;Ce<fe;Ce++){const Me=B*Ce,T=B*(Ce+1),g=oe+de+Me,z=oe+j+Me,ne=oe+j+T,te=oe+de+T;ke(g,z,ne,te)}}}function he(S,oe,ie){l.push(S),l.push(oe),l.push(ie)}function Ue(S,oe,ie){Ne(S),Ne(oe),Ne(ie);const de=r.length/3,j=E.generateTopUV(i,r,de-3,de-2,de-1);Ke(j[0]),Ke(j[1]),Ke(j[2])}function ke(S,oe,ie,de){Ne(S),Ne(oe),Ne(de),Ne(oe),Ne(ie),Ne(de);const j=r.length/3,Ce=E.generateSideWallUV(i,r,j-6,j-3,j-2,j-1);Ke(Ce[0]),Ke(Ce[1]),Ke(Ce[3]),Ke(Ce[1]),Ke(Ce[2]),Ke(Ce[3])}function Ne(S){r.push(l[S*3+0]),r.push(l[S*3+1]),r.push(l[S*3+2])}function Ke(S){s.push(S.x),s.push(S.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return j1(t,i,e)}static fromJSON(e,t){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new $o[r.type]().fromJSON(r)),new La(i,e.options)}}const X1={generateTopUV:function(n,e,t,i,r){const s=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new pe(s,o),new pe(a,l),new pe(c,u)]},generateSideWallUV:function(n,e,t,i,r,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],A=e[i*3+2],h=e[r*3],d=e[r*3+1],m=e[r*3+2],v=e[s*3],p=e[s*3+1],f=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new pe(o,1-l),new pe(c,1-A),new pe(h,1-m),new pe(v,1-f)]:[new pe(a,1-l),new pe(u,1-A),new pe(d,1-m),new pe(p,1-f)]}};function j1(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Nu extends _r{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lu,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const tc={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Z1{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,A){return c.push(u,A),this},this.removeHandler=function(u){const A=c.indexOf(u);return A!==-1&&c.splice(A,2),this},this.getHandler=function(u){for(let A=0,h=c.length;A<h;A+=2){const d=c[A],m=c[A+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null}}}const J1=new Z1;class qa{constructor(e){this.manager=e!==void 0?e:J1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}qa.DEFAULT_MATERIAL_NAME="__DEFAULT";class Y1 extends qa{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=tc.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=cr("img");function l(){u(),tc.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(A){u(),r&&r(A),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class K1 extends qa{constructor(e){super(e)}load(e,t,i,r){const s=new wt,o=new Y1(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Ou extends Ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Q1 extends Ou{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}class $1 extends Ou{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class e2{constructor(){this.type="ShapePath",this.color=new Ye,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new ea,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,r){return this.currentPath.quadraticCurveTo(e,t,i,r),this}bezierCurveTo(e,t,i,r,s,o){return this.currentPath.bezierCurveTo(e,t,i,r,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(f){const E=[];for(let _=0,b=f.length;_<b;_++){const N=f[_],P=new ls;P.curves=N.curves,E.push(P)}return E}function i(f,E){const _=E.length;let b=!1;for(let N=_-1,P=0;P<_;N=P++){let w=E[N],U=E[P],M=U.x-w.x,x=U.y-w.y;if(Math.abs(x)>Number.EPSILON){if(x<0&&(w=E[P],M=-M,U=E[N],x=-x),f.y<w.y||f.y>U.y)continue;if(f.y===w.y){if(f.x===w.x)return!0}else{const R=x*(f.x-w.x)-M*(f.y-w.y);if(R===0)return!0;if(R<0)continue;b=!b}}else{if(f.y!==w.y)continue;if(U.x<=f.x&&f.x<=w.x||w.x<=f.x&&f.x<=U.x)return!0}}return b}const r=Di.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const c=[];if(s.length===1)return a=s[0],l=new ls,l.curves=a.curves,c.push(l),c;let u=!r(s[0].getPoints());u=e?!u:u;const A=[],h=[];let d=[],m=0,v;h[m]=void 0,d[m]=[];for(let f=0,E=s.length;f<E;f++)a=s[f],v=a.getPoints(),o=r(v),o=e?!o:o,o?(!u&&h[m]&&m++,h[m]={s:new ls,p:v},h[m].s.curves=a.curves,u&&m++,d[m]=[]):d[m].push({h:a,p:v[0]});if(!h[0])return t(s);if(h.length>1){let f=!1,E=0;for(let _=0,b=h.length;_<b;_++)A[_]=[];for(let _=0,b=h.length;_<b;_++){const N=d[_];for(let P=0;P<N.length;P++){const w=N[P];let U=!0;for(let M=0;M<h.length;M++)i(w.p,h[M].p)&&(_!==M&&E++,U?(U=!1,A[M].push(w)):f=!0);U&&A[_].push(w)}}E>0&&f===!1&&(d=A)}let p;for(let f=0,E=h.length;f<E;f++){l=h[f].s,c.push(l),p=d[f];for(let _=0,b=p.length;_<b;_++)l.holes.push(p[_].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ga}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ga);function Du(){const n=window.innerWidth/window.innerHeight;if(Math.random()>2){const t=new Dt(10,n,.1,1e3);return t.position.z=6,t.position.y=6,t.rotation.x=-.75,t}if(Math.random()>2){const i=new Su(1*n/-2,1*n/2,.5,-.5,.1,1e3);return i.position.z=3,i.position.y=3,i.rotation.x=-.7,i}const e=new Dt(25,n,.1,1e3);return e.position.z=2,e.position.y=2,e.rotation.x=-.7,e}var ia=function(n,e){return ia=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])},ia(n,e)};function Fn(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");ia(n,e);function t(){this.constructor=n}n.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}function ra(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function vs(n,e){var t=typeof Symbol=="function"&&n[Symbol.iterator];if(!t)return n;var i=t.call(n),r,s=[],o;try{for(;(e===void 0||e-- >0)&&!(r=i.next()).done;)s.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(t=i.return)&&t.call(i)}finally{if(o)throw o.error}}return s}function gs(n,e,t){if(t||arguments.length===2)for(var i=0,r=e.length,s;i<r;i++)(s||!(i in e))&&(s||(s=Array.prototype.slice.call(e,0,i)),s[i]=e[i]);return n.concat(s||Array.prototype.slice.call(e))}function on(n){return typeof n=="function"}function zu(n){var e=function(i){Error.call(i),i.stack=new Error().stack},t=n(e);return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var ho=zu(function(n){return function(t){n(this),this.message=t?t.length+` errors occurred during unsubscription:
`+t.map(function(i,r){return r+1+") "+i.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=t}});function _s(n,e){if(n){var t=n.indexOf(e);0<=t&&n.splice(t,1)}}var xr=function(){function n(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}return n.prototype.unsubscribe=function(){var e,t,i,r,s;if(!this.closed){this.closed=!0;var o=this._parentage;if(o)if(this._parentage=null,Array.isArray(o))try{for(var a=ra(o),l=a.next();!l.done;l=a.next()){var c=l.value;c.remove(this)}}catch(v){e={error:v}}finally{try{l&&!l.done&&(t=a.return)&&t.call(a)}finally{if(e)throw e.error}}else o.remove(this);var u=this.initialTeardown;if(on(u))try{u()}catch(v){s=v instanceof ho?v.errors:[v]}var A=this._finalizers;if(A){this._finalizers=null;try{for(var h=ra(A),d=h.next();!d.done;d=h.next()){var m=d.value;try{nc(m)}catch(v){s=s??[],v instanceof ho?s=gs(gs([],vs(s)),vs(v.errors)):s.push(v)}}}catch(v){i={error:v}}finally{try{d&&!d.done&&(r=h.return)&&r.call(h)}finally{if(i)throw i.error}}}if(s)throw new ho(s)}},n.prototype.add=function(e){var t;if(e&&e!==this)if(this.closed)nc(e);else{if(e instanceof n){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}},n.prototype._hasParent=function(e){var t=this._parentage;return t===e||Array.isArray(t)&&t.includes(e)},n.prototype._addParent=function(e){var t=this._parentage;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e},n.prototype._removeParent=function(e){var t=this._parentage;t===e?this._parentage=null:Array.isArray(t)&&_s(t,e)},n.prototype.remove=function(e){var t=this._finalizers;t&&_s(t,e),e instanceof n&&e._removeParent(this)},n.EMPTY=function(){var e=new n;return e.closed=!0,e}(),n}(),Fu=xr.EMPTY;function ku(n){return n instanceof xr||n&&"closed"in n&&on(n.remove)&&on(n.add)&&on(n.unsubscribe)}function nc(n){on(n)?n():n.unsubscribe()}var Hu={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},Vu={setTimeout:function(n,e){for(var t=[],i=2;i<arguments.length;i++)t[i-2]=arguments[i];return setTimeout.apply(void 0,gs([n,e],vs(t)))},clearTimeout:function(n){var e=Vu.delegate;return((e==null?void 0:e.clearTimeout)||clearTimeout)(n)},delegate:void 0};function t2(n){Vu.setTimeout(function(){throw n})}function ic(){}function cs(n){n()}var Ia=function(n){Fn(e,n);function e(t){var i=n.call(this)||this;return i.isStopped=!1,t?(i.destination=t,ku(t)&&t.add(i)):i.destination=s2,i}return e.create=function(t,i,r){return new sa(t,i,r)},e.prototype.next=function(t){this.isStopped||this._next(t)},e.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,n.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(t){this.destination.next(t)},e.prototype._error=function(t){try{this.destination.error(t)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e}(xr),n2=Function.prototype.bind;function fo(n,e){return n2.call(n,e)}var i2=function(){function n(e){this.partialObserver=e}return n.prototype.next=function(e){var t=this.partialObserver;if(t.next)try{t.next(e)}catch(i){Yr(i)}},n.prototype.error=function(e){var t=this.partialObserver;if(t.error)try{t.error(e)}catch(i){Yr(i)}else Yr(e)},n.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(t){Yr(t)}},n}(),sa=function(n){Fn(e,n);function e(t,i,r){var s=n.call(this)||this,o;if(on(t)||!t)o={next:t??void 0,error:i??void 0,complete:r??void 0};else{var a;s&&Hu.useDeprecatedNextContext?(a=Object.create(t),a.unsubscribe=function(){return s.unsubscribe()},o={next:t.next&&fo(t.next,a),error:t.error&&fo(t.error,a),complete:t.complete&&fo(t.complete,a)}):o=t}return s.destination=new i2(o),s}return e}(Ia);function Yr(n){t2(n)}function r2(n){throw n}var s2={closed:!0,next:ic,error:r2,complete:ic},o2=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function a2(n){return n}function l2(n){return n.length===0?a2:n.length===1?n[0]:function(t){return n.reduce(function(i,r){return r(i)},t)}}var rc=function(){function n(e){e&&(this._subscribe=e)}return n.prototype.lift=function(e){var t=new n;return t.source=this,t.operator=e,t},n.prototype.subscribe=function(e,t,i){var r=this,s=u2(e)?e:new sa(e,t,i);return cs(function(){var o=r,a=o.operator,l=o.source;s.add(a?a.call(s,l):l?r._subscribe(s):r._trySubscribe(s))}),s},n.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(t){e.error(t)}},n.prototype.forEach=function(e,t){var i=this;return t=sc(t),new t(function(r,s){var o=new sa({next:function(a){try{e(a)}catch(l){s(l),o.unsubscribe()}},error:s,complete:r});i.subscribe(o)})},n.prototype._subscribe=function(e){var t;return(t=this.source)===null||t===void 0?void 0:t.subscribe(e)},n.prototype[o2]=function(){return this},n.prototype.pipe=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return l2(e)(this)},n.prototype.toPromise=function(e){var t=this;return e=sc(e),new e(function(i,r){var s;t.subscribe(function(o){return s=o},function(o){return r(o)},function(){return i(s)})})},n.create=function(e){return new n(e)},n}();function sc(n){var e;return(e=n??Hu.Promise)!==null&&e!==void 0?e:Promise}function c2(n){return n&&on(n.next)&&on(n.error)&&on(n.complete)}function u2(n){return n&&n instanceof Ia||c2(n)&&ku(n)}function A2(n){return on(n==null?void 0:n.lift)}function Bu(n){return function(e){if(A2(e))return e.lift(function(t){try{return n(t,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function Gu(n,e,t,i,r){return new h2(n,e,t,i,r)}var h2=function(n){Fn(e,n);function e(t,i,r,s,o,a){var l=n.call(this,t)||this;return l.onFinalize=o,l.shouldUnsubscribe=a,l._next=i?function(c){try{i(c)}catch(u){t.error(u)}}:n.prototype._next,l._error=s?function(c){try{s(c)}catch(u){t.error(u)}finally{this.unsubscribe()}}:n.prototype._error,l._complete=r?function(){try{r()}catch(c){t.error(c)}finally{this.unsubscribe()}}:n.prototype._complete,l}return e.prototype.unsubscribe=function(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var i=this.closed;n.prototype.unsubscribe.call(this),!i&&((t=this.onFinalize)===null||t===void 0||t.call(this))}},e}(Ia),d2=zu(function(n){return function(){n(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),Ps=function(n){Fn(e,n);function e(){var t=n.call(this)||this;return t.closed=!1,t.currentObservers=null,t.observers=[],t.isStopped=!1,t.hasError=!1,t.thrownError=null,t}return e.prototype.lift=function(t){var i=new oc(this,this);return i.operator=t,i},e.prototype._throwIfClosed=function(){if(this.closed)throw new d2},e.prototype.next=function(t){var i=this;cs(function(){var r,s;if(i._throwIfClosed(),!i.isStopped){i.currentObservers||(i.currentObservers=Array.from(i.observers));try{for(var o=ra(i.currentObservers),a=o.next();!a.done;a=o.next()){var l=a.value;l.next(t)}}catch(c){r={error:c}}finally{try{a&&!a.done&&(s=o.return)&&s.call(o)}finally{if(r)throw r.error}}}})},e.prototype.error=function(t){var i=this;cs(function(){if(i._throwIfClosed(),!i.isStopped){i.hasError=i.isStopped=!0,i.thrownError=t;for(var r=i.observers;r.length;)r.shift().error(t)}})},e.prototype.complete=function(){var t=this;cs(function(){if(t._throwIfClosed(),!t.isStopped){t.isStopped=!0;for(var i=t.observers;i.length;)i.shift().complete()}})},e.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(e.prototype,"observed",{get:function(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0},enumerable:!1,configurable:!0}),e.prototype._trySubscribe=function(t){return this._throwIfClosed(),n.prototype._trySubscribe.call(this,t)},e.prototype._subscribe=function(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)},e.prototype._innerSubscribe=function(t){var i=this,r=this,s=r.hasError,o=r.isStopped,a=r.observers;return s||o?Fu:(this.currentObservers=null,a.push(t),new xr(function(){i.currentObservers=null,_s(a,t)}))},e.prototype._checkFinalizedStatuses=function(t){var i=this,r=i.hasError,s=i.thrownError,o=i.isStopped;r?t.error(s):o&&t.complete()},e.prototype.asObservable=function(){var t=new rc;return t.source=this,t},e.create=function(t,i){return new oc(t,i)},e}(rc),oc=function(n){Fn(e,n);function e(t,i){var r=n.call(this)||this;return r.destination=t,r.source=i,r}return e.prototype.next=function(t){var i,r;(r=(i=this.destination)===null||i===void 0?void 0:i.next)===null||r===void 0||r.call(i,t)},e.prototype.error=function(t){var i,r;(r=(i=this.destination)===null||i===void 0?void 0:i.error)===null||r===void 0||r.call(i,t)},e.prototype.complete=function(){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.complete)===null||i===void 0||i.call(t)},e.prototype._subscribe=function(t){var i,r;return(r=(i=this.source)===null||i===void 0?void 0:i.subscribe(t))!==null&&r!==void 0?r:Fu},e}(Ps),f2={now:function(){return Date.now()},delegate:void 0},p2=function(n){Fn(e,n);function e(t,i){return n.call(this)||this}return e.prototype.schedule=function(t,i){return this},e}(xr),oa={setInterval:function(n,e){for(var t=[],i=2;i<arguments.length;i++)t[i-2]=arguments[i];return setInterval.apply(void 0,gs([n,e],vs(t)))},clearInterval:function(n){var e=oa.delegate;return((e==null?void 0:e.clearInterval)||clearInterval)(n)},delegate:void 0},m2=function(n){Fn(e,n);function e(t,i){var r=n.call(this,t,i)||this;return r.scheduler=t,r.work=i,r.pending=!1,r}return e.prototype.schedule=function(t,i){var r;if(i===void 0&&(i=0),this.closed)return this;this.state=t;var s=this.id,o=this.scheduler;return s!=null&&(this.id=this.recycleAsyncId(o,s,i)),this.pending=!0,this.delay=i,this.id=(r=this.id)!==null&&r!==void 0?r:this.requestAsyncId(o,this.id,i),this},e.prototype.requestAsyncId=function(t,i,r){return r===void 0&&(r=0),oa.setInterval(t.flush.bind(t,this),r)},e.prototype.recycleAsyncId=function(t,i,r){if(r===void 0&&(r=0),r!=null&&this.delay===r&&this.pending===!1)return i;i!=null&&oa.clearInterval(i)},e.prototype.execute=function(t,i){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var r=this._execute(t,i);if(r)return r;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},e.prototype._execute=function(t,i){var r=!1,s;try{this.work(t)}catch(o){r=!0,s=o||new Error("Scheduled action threw falsy error")}if(r)return this.unsubscribe(),s},e.prototype.unsubscribe=function(){if(!this.closed){var t=this,i=t.id,r=t.scheduler,s=r.actions;this.work=this.state=this.scheduler=null,this.pending=!1,_s(s,this),i!=null&&(this.id=this.recycleAsyncId(r,i,null)),this.delay=null,n.prototype.unsubscribe.call(this)}},e}(p2),ac=function(){function n(e,t){t===void 0&&(t=n.now),this.schedulerActionCtor=e,this.now=t}return n.prototype.schedule=function(e,t,i){return t===void 0&&(t=0),new this.schedulerActionCtor(this,e).schedule(i,t)},n.now=f2.now,n}(),v2=function(n){Fn(e,n);function e(t,i){i===void 0&&(i=ac.now);var r=n.call(this,t,i)||this;return r.actions=[],r._active=!1,r}return e.prototype.flush=function(t){var i=this.actions;if(this._active){i.push(t);return}var r;this._active=!0;do if(r=t.execute(t.state,t.delay))break;while(t=i.shift());if(this._active=!1,r){for(;t=i.shift();)t.unsubscribe();throw r}},e}(ac),g2=new v2(m2);function _2(n,e){return Bu(function(t,i){var r=0;t.subscribe(Gu(i,function(s){i.next(n.call(e,s,r++))}))})}function x2(n,e){return e===void 0&&(e=g2),Bu(function(t,i){var r=null,s=null,o=null,a=function(){if(r){r.unsubscribe(),r=null;var c=s;s=null,i.next(c)}};function l(){var c=o+n,u=e.now();if(u<c){r=this.schedule(void 0,c-u),i.add(r);return}a()}t.subscribe(Gu(i,function(c){s=c,o=e.now(),r||(r=e.schedule(l,n),i.add(r))},function(){a(),i.complete()},void 0,function(){s=r=null}))})}const Wu=new Ps,Xu=new Ps,y2=Wu.asObservable(),S2=Xu.asObservable();function b2(){Wu.next()}function M2(){Xu.next()}function E2(n,e){const t=new d1;return e.camera=Du(),t.setSize(n.w,n.h),t.setClearColor(255),document.body.appendChild(t.domElement),t.setAnimationLoop(()=>{b2(),t.render(e.scene,e.camera),M2()}),t}function T2(n){return e=>e.pipe(_2(t=>E2(t,n)))}function ju(){return{w:window.innerWidth,h:window.innerHeight,x:0,y:0}}function w2(){const n=new Ps;return window.addEventListener("resize",()=>{const e=ju();n.next(e)}),n.pipe(x2(100))}function P2(n){n.dispose(),document.body.removeChild(n.domElement)}function R2(){const n=new f1,e=1,t=new li(e,e,e),i=new Nu({color:65280}),r=new ft(t,i);n.add(r);const s=new $1(16777215,.5);n.add(s);const o=new Q1(16777215,4473924,.5);return o.position.set(0,1,0),n.add(o),n}var Je=(n=>(n.Knight="Knight",n.Orc="Orc",n.Cavalry="Cavalry",n.Ranged="Ranged",n.Magic="Magic",n.Beast="Beast",n.BladeMaster="Blade Master",n.Dead="Dead",n.Light="Light",n.Dark="Dark",n.Armored="Armored",n))(Je||{});class bt extends La{constructor(e,t={}){const i=t.font;if(i===void 0)super();else{const r=i.generateShapes(e,t.size);t.depth===void 0&&t.height!==void 0&&console.warn("THREE.TextGeometry: .height is now depreciated. Please use .depth instead"),t.depth=t.depth!==void 0?t.depth:t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(r,t)}this.type="TextGeometry"}}class Zu{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const i=[],r=C2(e,t,this.data);for(let s=0,o=r.length;s<o;s++)i.push(...r[s].toShapes());return i}}function C2(n,e,t){const i=Array.from(n),r=e/t.resolution,s=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*r,o=[];let a=0,l=0;for(let c=0;c<i.length;c++){const u=i[c];if(u===`
`)a=0,l-=s;else{const A=L2(u,r,a,l,t);a+=A.offsetX,o.push(A.path)}}return o}function L2(n,e,t,i,r){const s=r.glyphs[n]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+n+'" does not exists in font family '+r.familyName+".");return}const o=new e2;let a,l,c,u,A,h,d,m;if(s.o){const v=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let p=0,f=v.length;p<f;)switch(v[p++]){case"m":a=v[p++]*e+t,l=v[p++]*e+i,o.moveTo(a,l);break;case"l":a=v[p++]*e+t,l=v[p++]*e+i,o.lineTo(a,l);break;case"q":c=v[p++]*e+t,u=v[p++]*e+i,A=v[p++]*e+t,h=v[p++]*e+i,o.quadraticCurveTo(A,h,c,u);break;case"b":c=v[p++]*e+t,u=v[p++]*e+i,A=v[p++]*e+t,h=v[p++]*e+i,d=v[p++]*e+t,m=v[p++]*e+i,o.bezierCurveTo(A,h,d,m,c,u);break}}return{offsetX:s.ha*e,path:o}}const q2={0:{x_min:51,x_max:779,ha:828,o:"m 415 -26 q 142 129 242 -26 q 51 476 51 271 q 141 825 51 683 q 415 984 242 984 q 687 825 585 984 q 779 476 779 682 q 688 131 779 271 q 415 -26 587 -26 m 415 137 q 529 242 485 137 q 568 477 568 338 q 530 713 568 619 q 415 821 488 821 q 303 718 344 821 q 262 477 262 616 q 301 237 262 337 q 415 137 341 137 "},1:{x_min:197.609375,x_max:628,ha:828,o:"m 628 0 l 434 0 l 434 674 l 197 674 l 197 810 q 373 837 318 810 q 468 984 450 876 l 628 984 l 628 0 "},2:{x_min:64,x_max:764,ha:828,o:"m 764 685 q 675 452 764 541 q 484 325 637 415 q 307 168 357 250 l 754 168 l 754 0 l 64 0 q 193 301 64 175 q 433 480 202 311 q 564 673 564 576 q 519 780 564 737 q 416 824 475 824 q 318 780 358 824 q 262 633 270 730 l 80 633 q 184 903 80 807 q 415 988 276 988 q 654 907 552 988 q 764 685 764 819 "},3:{x_min:61,x_max:767,ha:828,o:"m 767 290 q 653 51 767 143 q 402 -32 548 -32 q 168 48 262 -32 q 61 300 61 140 l 250 300 q 298 173 250 219 q 405 132 343 132 q 514 169 471 132 q 563 282 563 211 q 491 405 563 369 q 343 432 439 432 l 343 568 q 472 592 425 568 q 534 701 534 626 q 493 793 534 758 q 398 829 453 829 q 306 789 344 829 q 268 669 268 749 l 80 669 q 182 909 80 823 q 410 986 274 986 q 633 916 540 986 q 735 719 735 840 q 703 608 735 656 q 615 522 672 561 q 727 427 687 486 q 767 290 767 369 "},4:{x_min:53,x_max:775.21875,ha:828,o:"m 775 213 l 660 213 l 660 0 l 470 0 l 470 213 l 53 213 l 53 384 l 416 958 l 660 958 l 660 370 l 775 370 l 775 213 m 474 364 l 474 786 l 204 363 l 474 364 "},5:{x_min:59,x_max:767,ha:828,o:"m 767 319 q 644 59 767 158 q 382 -29 533 -29 q 158 43 247 -29 q 59 264 59 123 l 252 264 q 295 165 252 201 q 400 129 339 129 q 512 172 466 129 q 564 308 564 220 q 514 437 564 387 q 398 488 464 488 q 329 472 361 488 q 271 420 297 456 l 93 428 l 157 958 l 722 958 l 722 790 l 295 790 l 271 593 q 348 635 306 621 q 431 649 389 649 q 663 551 560 649 q 767 319 767 453 "},6:{x_min:57,x_max:771,ha:828,o:"m 744 734 l 544 734 q 500 802 533 776 q 425 828 466 828 q 315 769 359 828 q 264 571 264 701 q 451 638 343 638 q 691 537 602 638 q 771 315 771 449 q 683 79 771 176 q 420 -29 586 -29 q 134 123 227 -29 q 57 455 57 250 q 184 865 57 721 q 452 988 293 988 q 657 916 570 988 q 744 734 744 845 m 426 128 q 538 178 498 128 q 578 300 578 229 q 538 422 578 372 q 415 479 493 479 q 303 430 342 479 q 264 313 264 381 q 308 184 264 240 q 426 128 352 128 "},7:{x_min:65.28125,x_max:762.5,ha:828,o:"m 762 808 q 521 435 604 626 q 409 0 438 244 l 205 0 q 313 422 227 234 q 548 789 387 583 l 65 789 l 65 958 l 762 958 l 762 808 "},8:{x_min:57,x_max:770,ha:828,o:"m 625 516 q 733 416 697 477 q 770 284 770 355 q 675 69 770 161 q 415 -29 574 -29 q 145 65 244 -29 q 57 273 57 150 q 93 413 57 350 q 204 516 130 477 q 112 609 142 556 q 83 718 83 662 q 177 905 83 824 q 414 986 272 986 q 650 904 555 986 q 745 715 745 822 q 716 608 745 658 q 625 516 688 558 m 414 590 q 516 624 479 590 q 553 706 553 659 q 516 791 553 755 q 414 828 480 828 q 311 792 348 828 q 275 706 275 757 q 310 624 275 658 q 414 590 345 590 m 413 135 q 527 179 487 135 q 564 279 564 218 q 525 386 564 341 q 411 436 482 436 q 298 387 341 436 q 261 282 261 344 q 300 178 261 222 q 413 135 340 135 "},9:{x_min:58,x_max:769,ha:828,o:"m 769 492 q 646 90 769 232 q 384 -33 539 -33 q 187 35 271 -33 q 83 224 98 107 l 282 224 q 323 154 286 182 q 404 127 359 127 q 513 182 471 127 q 563 384 563 248 q 475 335 532 355 q 372 315 418 315 q 137 416 224 315 q 58 642 58 507 q 144 877 58 781 q 407 984 239 984 q 694 827 602 984 q 769 492 769 699 m 416 476 q 525 521 488 476 q 563 632 563 566 q 521 764 563 709 q 403 826 474 826 q 297 773 337 826 q 258 649 258 720 q 295 530 258 577 q 416 476 339 476 "},ο:{x_min:0,x_max:764,ha:863,o:"m 380 -25 q 105 87 211 -25 q 0 372 0 200 q 104 660 0 545 q 380 775 209 775 q 658 659 552 775 q 764 372 764 544 q 658 87 764 200 q 380 -25 552 -25 m 379 142 q 515 216 466 142 q 557 373 557 280 q 515 530 557 465 q 379 607 466 607 q 245 530 294 607 q 204 373 204 465 q 245 218 204 283 q 379 142 294 142 "},S:{x_min:0,x_max:826,ha:915,o:"m 826 306 q 701 55 826 148 q 423 -29 587 -29 q 138 60 255 -29 q 0 318 13 154 l 208 318 q 288 192 216 238 q 437 152 352 152 q 559 181 506 152 q 623 282 623 217 q 466 411 623 372 q 176 487 197 478 q 18 719 18 557 q 136 958 18 869 q 399 1040 244 1040 q 670 956 561 1040 q 791 713 791 864 l 591 713 q 526 826 583 786 q 393 866 469 866 q 277 838 326 866 q 218 742 218 804 q 374 617 218 655 q 667 542 646 552 q 826 306 826 471 "},"¦":{x_min:0,x_max:143,ha:240,o:"m 143 462 l 0 462 l 0 984 l 143 984 l 143 462 m 143 -242 l 0 -242 l 0 280 l 143 280 l 143 -242 "},"/":{x_min:196.109375,x_max:632.5625,ha:828,o:"m 632 1040 l 289 -128 l 196 -128 l 538 1040 l 632 1040 "},Τ:{x_min:-.609375,x_max:808,ha:878,o:"m 808 831 l 508 831 l 508 0 l 298 0 l 298 831 l 0 831 l 0 1013 l 808 1013 l 808 831 "},y:{x_min:0,x_max:738.890625,ha:828,o:"m 738 749 l 444 -107 q 361 -238 413 -199 q 213 -277 308 -277 q 156 -275 176 -277 q 120 -271 131 -271 l 120 -110 q 147 -113 134 -111 q 179 -116 161 -116 q 247 -91 226 -116 q 269 -17 269 -67 q 206 173 269 -4 q 84 515 162 301 q 0 749 41 632 l 218 749 l 376 207 l 529 749 l 738 749 "},Π:{x_min:0,x_max:809,ha:922,o:"m 809 0 l 598 0 l 598 836 l 208 836 l 208 0 l 0 0 l 0 1012 l 809 1012 l 809 0 "},ΐ:{x_min:-162,x_max:364,ha:364,o:"m 364 810 l 235 810 l 235 952 l 364 952 l 364 810 m 301 1064 l 86 810 l -12 810 l 123 1064 l 301 1064 m -33 810 l -162 810 l -162 952 l -33 952 l -33 810 m 200 0 l 0 0 l 0 748 l 200 748 l 200 0 "},g:{x_min:0,x_max:724,ha:839,o:"m 724 48 q 637 -223 724 -142 q 357 -304 551 -304 q 140 -253 226 -304 q 23 -72 36 -192 l 243 -72 q 290 -127 255 -110 q 368 -144 324 -144 q 504 -82 470 -144 q 530 71 530 -38 l 530 105 q 441 25 496 51 q 319 0 386 0 q 79 115 166 0 q 0 377 0 219 q 77 647 0 534 q 317 775 166 775 q 534 656 456 775 l 534 748 l 724 748 l 724 48 m 368 167 q 492 237 447 167 q 530 382 530 297 q 490 529 530 466 q 364 603 444 603 q 240 532 284 603 q 201 386 201 471 q 240 239 201 300 q 368 167 286 167 "},"²":{x_min:0,x_max:463,ha:560,o:"m 463 791 q 365 627 463 706 q 151 483 258 555 l 455 483 l 455 382 l 0 382 q 84 565 0 488 q 244 672 97 576 q 331 784 331 727 q 299 850 331 824 q 228 876 268 876 q 159 848 187 876 q 132 762 132 820 l 10 762 q 78 924 10 866 q 228 976 137 976 q 392 925 322 976 q 463 791 463 874 "},"–":{x_min:0,x_max:704.171875,ha:801,o:"m 704 297 l 0 297 l 0 450 l 704 450 l 704 297 "},Κ:{x_min:0,x_max:899.671875,ha:969,o:"m 899 0 l 646 0 l 316 462 l 208 355 l 208 0 l 0 0 l 0 1013 l 208 1013 l 208 596 l 603 1013 l 863 1013 l 460 603 l 899 0 "},ƒ:{x_min:-46,x_max:440,ha:525,o:"m 440 609 l 316 609 l 149 -277 l -46 -277 l 121 609 l 14 609 l 14 749 l 121 749 q 159 949 121 894 q 344 1019 208 1019 l 440 1015 l 440 855 l 377 855 q 326 841 338 855 q 314 797 314 827 q 314 773 314 786 q 314 749 314 761 l 440 749 l 440 609 "},e:{x_min:0,x_max:708,ha:808,o:"m 708 321 l 207 321 q 254 186 207 236 q 362 141 298 141 q 501 227 453 141 l 700 227 q 566 36 662 104 q 362 -26 477 -26 q 112 72 213 -26 q 0 369 0 182 q 95 683 0 573 q 358 793 191 793 q 619 677 531 793 q 708 321 708 561 m 501 453 q 460 571 501 531 q 353 612 420 612 q 247 570 287 612 q 207 453 207 529 l 501 453 "},ό:{x_min:0,x_max:764,ha:863,o:"m 380 -25 q 105 87 211 -25 q 0 372 0 200 q 104 660 0 545 q 380 775 209 775 q 658 659 552 775 q 764 372 764 544 q 658 87 764 200 q 380 -25 552 -25 m 379 142 q 515 216 466 142 q 557 373 557 280 q 515 530 557 465 q 379 607 466 607 q 245 530 294 607 q 204 373 204 465 q 245 218 204 283 q 379 142 294 142 m 593 1039 l 391 823 l 293 823 l 415 1039 l 593 1039 "},J:{x_min:0,x_max:649,ha:760,o:"m 649 294 q 573 48 649 125 q 327 -29 497 -29 q 61 82 136 -29 q 0 375 0 173 l 200 375 l 199 309 q 219 194 199 230 q 321 145 249 145 q 418 193 390 145 q 441 307 441 232 l 441 1013 l 649 1013 l 649 294 "},"»":{x_min:-.234375,x_max:526,ha:624,o:"m 526 286 l 297 87 l 296 250 l 437 373 l 297 495 l 297 660 l 526 461 l 526 286 m 229 286 l 0 87 l 0 250 l 140 373 l 0 495 l 0 660 l 229 461 l 229 286 "},"©":{x_min:3,x_max:1007,ha:1104,o:"m 507 -6 q 129 153 269 -6 q 3 506 3 298 q 127 857 3 713 q 502 1017 266 1017 q 880 855 740 1017 q 1007 502 1007 711 q 882 152 1007 295 q 507 -6 743 -6 m 502 934 q 184 800 302 934 q 79 505 79 680 q 184 210 79 331 q 501 76 302 76 q 819 210 701 76 q 925 507 925 331 q 820 800 925 682 q 502 934 704 934 m 758 410 q 676 255 748 313 q 506 197 605 197 q 298 291 374 197 q 229 499 229 377 q 297 713 229 624 q 494 811 372 811 q 666 760 593 811 q 752 616 739 710 l 621 616 q 587 688 621 658 q 509 719 554 719 q 404 658 441 719 q 368 511 368 598 q 403 362 368 427 q 498 298 438 298 q 624 410 606 298 l 758 410 "},ώ:{x_min:0,x_max:945,ha:1051,o:"m 566 528 l 372 528 l 372 323 q 372 298 372 311 q 373 271 372 285 q 360 183 373 211 q 292 142 342 142 q 219 222 243 142 q 203 365 203 279 q 241 565 203 461 q 334 748 273 650 l 130 748 q 36 552 68 650 q 0 337 0 444 q 69 96 0 204 q 276 -29 149 -29 q 390 0 337 -29 q 470 78 444 28 q 551 0 495 30 q 668 -29 608 -29 q 874 96 793 -29 q 945 337 945 205 q 910 547 945 444 q 814 748 876 650 l 610 748 q 703 565 671 650 q 742 365 742 462 q 718 189 742 237 q 651 142 694 142 q 577 190 597 142 q 565 289 565 221 l 565 323 l 566 528 m 718 1039 l 516 823 l 417 823 l 540 1039 l 718 1039 "},"^":{x_min:197.21875,x_max:630.5625,ha:828,o:"m 630 836 l 536 836 l 413 987 l 294 836 l 197 836 l 331 1090 l 493 1090 l 630 836 "},"«":{x_min:0,x_max:526.546875,ha:624,o:"m 526 87 l 297 286 l 297 461 l 526 660 l 526 495 l 385 373 l 526 250 l 526 87 m 229 87 l 0 286 l 0 461 l 229 660 l 229 495 l 88 373 l 229 250 l 229 87 "},D:{x_min:0,x_max:864,ha:968,o:"m 400 1013 q 736 874 608 1013 q 864 523 864 735 q 717 146 864 293 q 340 0 570 0 l 0 0 l 0 1013 l 400 1013 m 398 837 l 206 837 l 206 182 l 372 182 q 584 276 507 182 q 657 504 657 365 q 594 727 657 632 q 398 837 522 837 "},"∙":{x_min:0,x_max:207,ha:304,o:"m 207 528 l 0 528 l 0 735 l 207 735 l 207 528 "},ÿ:{x_min:0,x_max:47,ha:125,o:"m 47 3 q 37 -7 47 -7 q 28 0 30 -7 q 39 -4 32 -4 q 45 3 45 -1 l 37 0 q 28 9 28 0 q 39 19 28 19 l 47 16 l 47 19 l 47 3 m 37 1 q 44 8 44 1 q 37 16 44 16 q 30 8 30 16 q 37 1 30 1 m 26 1 l 23 22 l 14 0 l 3 22 l 3 3 l 0 25 l 13 1 l 22 25 l 26 1 "},w:{x_min:0,x_max:1056.953125,ha:1150,o:"m 1056 749 l 848 0 l 647 0 l 527 536 l 412 0 l 211 0 l 0 749 l 202 749 l 325 226 l 429 748 l 633 748 l 740 229 l 864 749 l 1056 749 "},$:{x_min:0,x_max:704,ha:800,o:"m 682 693 l 495 693 q 468 782 491 749 q 391 831 441 824 l 391 579 q 633 462 562 534 q 704 259 704 389 q 616 57 704 136 q 391 -22 528 -22 l 391 -156 l 308 -156 l 308 -22 q 76 69 152 -7 q 0 300 0 147 l 183 300 q 215 191 190 230 q 308 128 245 143 l 308 414 q 84 505 157 432 q 12 700 12 578 q 89 902 12 824 q 308 981 166 981 l 308 1069 l 391 1069 l 391 981 q 595 905 521 981 q 682 693 670 829 m 308 599 l 308 831 q 228 796 256 831 q 200 712 200 762 q 225 642 200 668 q 308 599 251 617 m 391 128 q 476 174 449 140 q 504 258 504 207 q 391 388 504 354 l 391 128 "},"\\":{x_min:-.03125,x_max:434.765625,ha:532,o:"m 434 -128 l 341 -128 l 0 1039 l 91 1040 l 434 -128 "},µ:{x_min:0,x_max:647,ha:754,o:"m 647 0 l 478 0 l 478 68 q 412 9 448 30 q 330 -11 375 -11 q 261 3 296 -11 q 199 43 226 18 l 199 -277 l 0 -277 l 0 749 l 199 749 l 199 358 q 216 221 199 267 q 322 151 244 151 q 435 240 410 151 q 448 401 448 283 l 448 749 l 647 749 l 647 0 "},Ι:{x_min:42,x_max:250,ha:413,o:"m 250 0 l 42 0 l 42 1013 l 250 1013 l 250 0 "},Ύ:{x_min:0,x_max:1211.15625,ha:1289,o:"m 1211 1012 l 907 376 l 907 0 l 697 0 l 697 376 l 374 1012 l 583 1012 l 802 576 l 1001 1012 l 1211 1012 m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 "},"’":{x_min:0,x_max:192,ha:289,o:"m 192 834 q 137 692 192 751 q 0 626 83 634 l 0 697 q 101 831 101 723 l 0 831 l 0 1013 l 192 1013 l 192 834 "},Ν:{x_min:0,x_max:833,ha:946,o:"m 833 0 l 617 0 l 206 696 l 206 0 l 0 0 l 0 1013 l 216 1013 l 629 315 l 629 1013 l 833 1013 l 833 0 "},"-":{x_min:27.78125,x_max:413.890625,ha:525,o:"m 413 279 l 27 279 l 27 468 l 413 468 l 413 279 "},Q:{x_min:0,x_max:995.59375,ha:1096,o:"m 995 49 l 885 -70 l 762 42 q 641 -12 709 4 q 497 -29 572 -29 q 135 123 271 -29 q 0 504 0 276 q 131 881 0 731 q 497 1040 270 1040 q 859 883 719 1040 q 994 506 994 731 q 966 321 994 413 q 884 152 938 229 l 995 49 m 730 299 q 767 395 755 344 q 779 504 779 446 q 713 743 779 644 q 505 857 638 857 q 284 745 366 857 q 210 501 210 644 q 279 265 210 361 q 492 157 357 157 q 615 181 557 157 l 508 287 l 620 405 l 730 299 "},ς:{x_min:0,x_max:731.78125,ha:768,o:"m 731 448 l 547 448 q 485 571 531 533 q 369 610 440 610 q 245 537 292 610 q 204 394 204 473 q 322 186 204 238 q 540 133 430 159 q 659 -15 659 98 q 643 -141 659 -80 q 595 -278 627 -202 l 423 -278 q 458 -186 448 -215 q 474 -88 474 -133 q 352 0 474 -27 q 123 80 181 38 q 0 382 0 170 q 98 660 0 549 q 367 777 202 777 q 622 683 513 777 q 731 448 731 589 "},M:{x_min:0,x_max:1019,ha:1135,o:"m 1019 0 l 823 0 l 823 819 l 618 0 l 402 0 l 194 818 l 194 0 l 0 0 l 0 1013 l 309 1012 l 510 241 l 707 1013 l 1019 1013 l 1019 0 "},Ψ:{x_min:0,x_max:995,ha:1085,o:"m 995 698 q 924 340 995 437 q 590 200 841 227 l 590 0 l 404 0 l 404 200 q 70 340 152 227 q 0 698 0 437 l 0 1013 l 188 1013 l 188 694 q 212 472 188 525 q 404 383 254 383 l 404 1013 l 590 1013 l 590 383 q 781 472 740 383 q 807 694 807 525 l 807 1013 l 995 1013 l 995 698 "},C:{x_min:0,x_max:970.828125,ha:1043,o:"m 970 345 q 802 70 933 169 q 490 -29 672 -29 q 130 130 268 -29 q 0 506 0 281 q 134 885 0 737 q 502 1040 275 1040 q 802 939 668 1040 q 965 679 936 838 l 745 679 q 649 809 716 761 q 495 857 582 857 q 283 747 361 857 q 214 508 214 648 q 282 267 214 367 q 493 154 359 154 q 651 204 584 154 q 752 345 718 255 l 970 345 "},"!":{x_min:0,x_max:204,ha:307,o:"m 204 739 q 182 515 204 686 q 152 282 167 398 l 52 282 q 13 589 27 473 q 0 739 0 704 l 0 1013 l 204 1013 l 204 739 m 204 0 l 0 0 l 0 203 l 204 203 l 204 0 "},"{":{x_min:0,x_max:501.390625,ha:599,o:"m 501 -285 q 229 -209 301 -285 q 176 -35 176 -155 q 182 47 176 -8 q 189 126 189 103 q 156 245 189 209 q 0 294 112 294 l 0 438 q 154 485 111 438 q 189 603 189 522 q 186 666 189 636 q 176 783 176 772 q 231 945 176 894 q 501 1015 306 1015 l 501 872 q 370 833 408 872 q 340 737 340 801 q 342 677 340 705 q 353 569 353 579 q 326 451 353 496 q 207 366 291 393 q 327 289 294 346 q 353 164 353 246 q 348 79 353 132 q 344 17 344 26 q 372 -95 344 -58 q 501 -141 408 -141 l 501 -285 "},X:{x_min:0,x_max:894.453125,ha:999,o:"m 894 0 l 654 0 l 445 351 l 238 0 l 0 0 l 316 516 l 0 1013 l 238 1013 l 445 659 l 652 1013 l 894 1013 l 577 519 l 894 0 "},"#":{x_min:0,x_max:1019.453125,ha:1117,o:"m 1019 722 l 969 582 l 776 581 l 717 417 l 919 417 l 868 279 l 668 278 l 566 -6 l 413 -5 l 516 279 l 348 279 l 247 -6 l 94 -6 l 196 278 l 0 279 l 49 417 l 245 417 l 304 581 l 98 582 l 150 722 l 354 721 l 455 1006 l 606 1006 l 507 721 l 673 722 l 776 1006 l 927 1006 l 826 721 l 1019 722 m 627 581 l 454 581 l 394 417 l 567 417 l 627 581 "},ι:{x_min:42,x_max:242,ha:389,o:"m 242 0 l 42 0 l 42 749 l 242 749 l 242 0 "},Ά:{x_min:0,x_max:995.828125,ha:1072,o:"m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 m 995 0 l 776 0 l 708 208 l 315 208 l 247 0 l 29 0 l 390 1012 l 629 1012 l 995 0 m 652 376 l 509 809 l 369 376 l 652 376 "},")":{x_min:0,x_max:389,ha:486,o:"m 389 357 q 319 14 389 187 q 145 -293 259 -134 l 0 -293 q 139 22 90 -142 q 189 358 189 187 q 139 689 189 525 q 0 1013 90 853 l 145 1013 q 319 703 258 857 q 389 357 389 528 "},ε:{x_min:16.671875,x_max:652.78125,ha:742,o:"m 652 259 q 565 49 652 123 q 340 -25 479 -25 q 102 39 188 -25 q 16 197 16 104 q 45 299 16 249 q 134 390 75 348 q 58 456 86 419 q 25 552 25 502 q 120 717 25 653 q 322 776 208 776 q 537 710 456 776 q 625 508 625 639 l 445 508 q 415 585 445 563 q 327 608 386 608 q 254 590 293 608 q 215 544 215 573 q 252 469 215 490 q 336 453 280 453 q 369 455 347 453 q 400 456 391 456 l 400 308 l 329 308 q 247 291 280 308 q 204 223 204 269 q 255 154 204 172 q 345 143 286 143 q 426 174 398 143 q 454 259 454 206 l 652 259 "},Δ:{x_min:0,x_max:981.953125,ha:1057,o:"m 981 0 l 0 0 l 386 1013 l 594 1013 l 981 0 m 715 175 l 490 765 l 266 175 l 715 175 "},"}":{x_min:0,x_max:500,ha:597,o:"m 500 294 q 348 246 390 294 q 315 128 315 209 q 320 42 315 101 q 326 -48 326 -17 q 270 -214 326 -161 q 0 -285 196 -285 l 0 -141 q 126 -97 90 -141 q 154 8 154 -64 q 150 91 154 37 q 146 157 146 145 q 172 281 146 235 q 294 366 206 339 q 173 451 208 390 q 146 576 146 500 q 150 655 146 603 q 154 731 154 708 q 126 831 154 799 q 0 872 90 872 l 0 1015 q 270 944 196 1015 q 326 777 326 891 q 322 707 326 747 q 313 593 313 612 q 347 482 313 518 q 500 438 390 438 l 500 294 "},"‰":{x_min:0,x_max:1681,ha:1775,o:"m 861 484 q 1048 404 979 484 q 1111 228 1111 332 q 1048 51 1111 123 q 859 -29 979 -29 q 672 50 740 -29 q 610 227 610 122 q 672 403 610 331 q 861 484 741 484 m 861 120 q 939 151 911 120 q 967 226 967 183 q 942 299 967 270 q 861 333 912 333 q 783 301 811 333 q 756 226 756 269 q 783 151 756 182 q 861 120 810 120 m 904 984 l 316 -28 l 205 -29 l 793 983 l 904 984 m 250 984 q 436 904 366 984 q 499 730 499 832 q 436 552 499 626 q 248 472 366 472 q 62 552 132 472 q 0 728 0 624 q 62 903 0 831 q 250 984 132 984 m 249 835 q 169 801 198 835 q 140 725 140 768 q 167 652 140 683 q 247 621 195 621 q 327 654 298 621 q 357 730 357 687 q 329 803 357 772 q 249 835 301 835 m 1430 484 q 1618 404 1548 484 q 1681 228 1681 332 q 1618 51 1681 123 q 1429 -29 1548 -29 q 1241 50 1309 -29 q 1179 227 1179 122 q 1241 403 1179 331 q 1430 484 1311 484 m 1431 120 q 1509 151 1481 120 q 1537 226 1537 183 q 1511 299 1537 270 q 1431 333 1482 333 q 1352 301 1380 333 q 1325 226 1325 269 q 1352 151 1325 182 q 1431 120 1379 120 "},a:{x_min:0,x_max:700,ha:786,o:"m 700 0 l 488 0 q 465 93 469 45 q 365 5 427 37 q 233 -26 303 -26 q 65 37 130 -26 q 0 205 0 101 q 120 409 0 355 q 343 452 168 431 q 465 522 465 468 q 424 588 465 565 q 337 611 384 611 q 250 581 285 611 q 215 503 215 552 l 26 503 q 113 707 26 633 q 328 775 194 775 q 538 723 444 775 q 657 554 657 659 l 657 137 q 666 73 657 101 q 700 33 675 45 l 700 0 m 465 297 l 465 367 q 299 322 358 340 q 193 217 193 287 q 223 150 193 174 q 298 127 254 127 q 417 175 370 127 q 465 297 465 224 "},"—":{x_min:0,x_max:941.671875,ha:1039,o:"m 941 297 l 0 297 l 0 450 l 941 450 l 941 297 "},"=":{x_min:29.171875,x_max:798.609375,ha:828,o:"m 798 502 l 29 502 l 29 635 l 798 635 l 798 502 m 798 204 l 29 204 l 29 339 l 798 339 l 798 204 "},N:{x_min:0,x_max:833,ha:949,o:"m 833 0 l 617 0 l 206 695 l 206 0 l 0 0 l 0 1013 l 216 1013 l 629 315 l 629 1013 l 833 1013 l 833 0 "},ρ:{x_min:0,x_max:722,ha:810,o:"m 364 -17 q 271 0 313 -17 q 194 48 230 16 l 194 -278 l 0 -278 l 0 370 q 87 656 0 548 q 358 775 183 775 q 626 655 524 775 q 722 372 722 541 q 621 95 722 208 q 364 -17 520 -17 m 360 607 q 237 529 280 607 q 201 377 201 463 q 234 229 201 292 q 355 147 277 147 q 467 210 419 147 q 515 374 515 273 q 471 537 515 468 q 360 607 428 607 "},"¯":{x_min:0,x_max:775,ha:771,o:"m 775 958 l 0 958 l 0 1111 l 775 1111 l 775 958 "},Z:{x_min:0,x_max:804.171875,ha:906,o:"m 804 836 l 251 182 l 793 182 l 793 0 l 0 0 l 0 176 l 551 830 l 11 830 l 11 1013 l 804 1013 l 804 836 "},u:{x_min:0,x_max:668,ha:782,o:"m 668 0 l 474 0 l 474 89 q 363 9 425 37 q 233 -19 301 -19 q 61 53 123 -19 q 0 239 0 126 l 0 749 l 199 749 l 199 296 q 225 193 199 233 q 316 146 257 146 q 424 193 380 146 q 469 304 469 240 l 469 749 l 668 749 l 668 0 "},k:{x_min:0,x_max:688.890625,ha:771,o:"m 688 0 l 450 0 l 270 316 l 196 237 l 196 0 l 0 0 l 0 1013 l 196 1013 l 196 483 l 433 748 l 675 748 l 413 469 l 688 0 "},Η:{x_min:0,x_max:837,ha:950,o:"m 837 0 l 627 0 l 627 450 l 210 450 l 210 0 l 0 0 l 0 1013 l 210 1013 l 210 635 l 627 635 l 627 1013 l 837 1013 l 837 0 "},Α:{x_min:0,x_max:966.671875,ha:1043,o:"m 966 0 l 747 0 l 679 208 l 286 208 l 218 0 l 0 0 l 361 1013 l 600 1013 l 966 0 m 623 376 l 480 809 l 340 376 l 623 376 "},s:{x_min:0,x_max:681,ha:775,o:"m 681 229 q 568 33 681 105 q 340 -29 471 -29 q 107 39 202 -29 q 0 245 0 114 l 201 245 q 252 155 201 189 q 358 128 295 128 q 436 144 401 128 q 482 205 482 166 q 363 284 482 255 q 143 348 181 329 q 25 533 25 408 q 129 716 25 647 q 340 778 220 778 q 554 710 465 778 q 658 522 643 643 l 463 522 q 419 596 458 570 q 327 622 380 622 q 255 606 290 622 q 221 556 221 590 q 339 473 221 506 q 561 404 528 420 q 681 229 681 344 "},B:{x_min:0,x_max:835,ha:938,o:"m 674 547 q 791 450 747 518 q 835 304 835 383 q 718 75 835 158 q 461 0 612 0 l 0 0 l 0 1013 l 477 1013 q 697 951 609 1013 q 797 754 797 880 q 765 630 797 686 q 674 547 734 575 m 438 621 q 538 646 495 621 q 590 730 590 676 q 537 814 590 785 q 436 838 494 838 l 199 838 l 199 621 l 438 621 m 445 182 q 561 211 513 182 q 618 311 618 247 q 565 410 618 375 q 444 446 512 446 l 199 446 l 199 182 l 445 182 "},"…":{x_min:0,x_max:819,ha:963,o:"m 206 0 l 0 0 l 0 207 l 206 207 l 206 0 m 512 0 l 306 0 l 306 207 l 512 207 l 512 0 m 819 0 l 613 0 l 613 207 l 819 207 l 819 0 "},"?":{x_min:1,x_max:687,ha:785,o:"m 687 734 q 621 563 687 634 q 501 454 560 508 q 436 293 436 386 l 251 293 l 251 391 q 363 557 251 462 q 476 724 476 653 q 432 827 476 788 q 332 866 389 866 q 238 827 275 866 q 195 699 195 781 l 1 699 q 110 955 1 861 q 352 1040 210 1040 q 582 963 489 1040 q 687 734 687 878 m 446 0 l 243 0 l 243 203 l 446 203 l 446 0 "},H:{x_min:0,x_max:838,ha:953,o:"m 838 0 l 628 0 l 628 450 l 210 450 l 210 0 l 0 0 l 0 1013 l 210 1013 l 210 635 l 628 635 l 628 1013 l 838 1013 l 838 0 "},ν:{x_min:0,x_max:740.28125,ha:828,o:"m 740 749 l 473 0 l 266 0 l 0 749 l 222 749 l 373 211 l 529 749 l 740 749 "},c:{x_min:0,x_max:751.390625,ha:828,o:"m 751 282 q 625 58 725 142 q 384 -26 526 -26 q 107 84 215 -26 q 0 366 0 195 q 98 651 0 536 q 370 774 204 774 q 616 700 518 774 q 751 486 715 626 l 536 486 q 477 570 516 538 q 380 607 434 607 q 248 533 298 607 q 204 378 204 466 q 242 219 204 285 q 377 139 290 139 q 483 179 438 139 q 543 282 527 220 l 751 282 "},"¶":{x_min:0,x_max:566.671875,ha:678,o:"m 21 892 l 52 892 l 98 761 l 145 892 l 176 892 l 178 741 l 157 741 l 157 867 l 108 741 l 88 741 l 40 871 l 40 741 l 21 741 l 21 892 m 308 854 l 308 731 q 252 691 308 691 q 227 691 240 691 q 207 696 213 695 l 207 712 l 253 706 q 288 733 288 706 l 288 763 q 244 741 279 741 q 193 797 193 741 q 261 860 193 860 q 287 860 273 860 q 308 854 302 855 m 288 842 l 263 843 q 213 796 213 843 q 248 756 213 756 q 288 796 288 756 l 288 842 m 566 988 l 502 988 l 502 -1 l 439 -1 l 439 988 l 317 988 l 317 -1 l 252 -1 l 252 602 q 81 653 155 602 q 0 805 0 711 q 101 989 0 918 q 309 1053 194 1053 l 566 1053 l 566 988 "},β:{x_min:0,x_max:703,ha:789,o:"m 510 539 q 651 429 600 501 q 703 262 703 357 q 617 53 703 136 q 404 -29 532 -29 q 199 51 279 -29 l 199 -278 l 0 -278 l 0 627 q 77 911 0 812 q 343 1021 163 1021 q 551 957 464 1021 q 649 769 649 886 q 613 638 649 697 q 510 539 577 579 m 344 136 q 452 181 408 136 q 497 291 497 227 q 435 409 497 369 q 299 444 381 444 l 299 600 q 407 634 363 600 q 452 731 452 669 q 417 820 452 784 q 329 857 382 857 q 217 775 246 857 q 199 622 199 725 l 199 393 q 221 226 199 284 q 344 136 254 136 "},Μ:{x_min:0,x_max:1019,ha:1132,o:"m 1019 0 l 823 0 l 823 818 l 617 0 l 402 0 l 194 818 l 194 0 l 0 0 l 0 1013 l 309 1013 l 509 241 l 708 1013 l 1019 1013 l 1019 0 "},Ό:{x_min:.15625,x_max:1174,ha:1271,o:"m 676 -29 q 312 127 451 -29 q 179 505 179 277 q 311 883 179 733 q 676 1040 449 1040 q 1040 883 901 1040 q 1174 505 1174 733 q 1041 127 1174 277 q 676 -29 903 -29 m 676 154 q 890 266 811 154 q 961 506 961 366 q 891 745 961 648 q 676 857 812 857 q 462 747 541 857 q 392 506 392 648 q 461 266 392 365 q 676 154 540 154 m 314 1034 l 98 779 l 0 779 l 136 1034 l 314 1034 "},Ή:{x_min:0,x_max:1248,ha:1361,o:"m 1248 0 l 1038 0 l 1038 450 l 621 450 l 621 0 l 411 0 l 411 1012 l 621 1012 l 621 635 l 1038 635 l 1038 1012 l 1248 1012 l 1248 0 m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 "},"•":{x_min:-27.78125,x_max:691.671875,ha:775,o:"m 691 508 q 588 252 691 358 q 331 147 486 147 q 77 251 183 147 q -27 508 -27 355 q 75 761 -27 655 q 331 868 179 868 q 585 763 479 868 q 691 508 691 658 "},"¥":{x_min:0,x_max:836,ha:931,o:"m 195 625 l 0 1013 l 208 1013 l 427 576 l 626 1013 l 836 1013 l 650 625 l 777 625 l 777 472 l 578 472 l 538 389 l 777 389 l 777 236 l 532 236 l 532 0 l 322 0 l 322 236 l 79 236 l 79 389 l 315 389 l 273 472 l 79 472 l 79 625 l 195 625 "},"(":{x_min:0,x_max:388.890625,ha:486,o:"m 388 -293 l 243 -293 q 70 14 130 -134 q 0 357 0 189 q 69 703 0 526 q 243 1013 129 856 l 388 1013 q 248 695 297 860 q 200 358 200 530 q 248 24 200 187 q 388 -293 297 -138 "},U:{x_min:0,x_max:813,ha:926,o:"m 813 362 q 697 79 813 187 q 405 -29 582 -29 q 114 78 229 -29 q 0 362 0 186 l 0 1013 l 210 1013 l 210 387 q 260 226 210 291 q 408 154 315 154 q 554 226 500 154 q 603 387 603 291 l 603 1013 l 813 1013 l 813 362 "},γ:{x_min:.0625,x_max:729.234375,ha:815,o:"m 729 749 l 457 37 l 457 -278 l 257 -278 l 257 37 q 218 155 243 95 q 170 275 194 215 l 0 749 l 207 749 l 363 284 l 522 749 l 729 749 "},α:{x_min:-1,x_max:722,ha:835,o:"m 722 0 l 531 0 l 530 101 q 433 8 491 41 q 304 -25 375 -25 q 72 104 157 -25 q -1 372 -1 216 q 72 643 -1 530 q 308 775 158 775 q 433 744 375 775 q 528 656 491 713 l 528 749 l 722 749 l 722 0 m 361 601 q 233 527 277 601 q 196 375 196 464 q 232 224 196 288 q 358 144 277 144 q 487 217 441 144 q 528 370 528 281 q 489 523 528 457 q 361 601 443 601 "},F:{x_min:0,x_max:706.953125,ha:778,o:"m 706 837 l 206 837 l 206 606 l 645 606 l 645 431 l 206 431 l 206 0 l 0 0 l 0 1013 l 706 1013 l 706 837 "},"­":{x_min:0,x_max:704.171875,ha:801,o:"m 704 297 l 0 297 l 0 450 l 704 450 l 704 297 "},":":{x_min:0,x_max:207,ha:304,o:"m 207 528 l 0 528 l 0 735 l 207 735 l 207 528 m 207 0 l 0 0 l 0 207 l 207 207 l 207 0 "},Χ:{x_min:0,x_max:894.453125,ha:978,o:"m 894 0 l 654 0 l 445 351 l 238 0 l 0 0 l 316 516 l 0 1013 l 238 1013 l 445 660 l 652 1013 l 894 1013 l 577 519 l 894 0 "},"*":{x_min:115,x_max:713,ha:828,o:"m 713 740 l 518 688 l 651 525 l 531 438 l 412 612 l 290 439 l 173 523 l 308 688 l 115 741 l 159 880 l 342 816 l 343 1013 l 482 1013 l 481 816 l 664 880 l 713 740 "},"†":{x_min:0,x_max:809,ha:894,o:"m 509 804 l 809 804 l 809 621 l 509 621 l 509 0 l 299 0 l 299 621 l 0 621 l 0 804 l 299 804 l 299 1011 l 509 1011 l 509 804 "},"°":{x_min:-1,x_max:363,ha:460,o:"m 181 808 q 46 862 94 808 q -1 992 -1 917 q 44 1118 -1 1066 q 181 1175 96 1175 q 317 1118 265 1175 q 363 991 363 1066 q 315 862 363 917 q 181 808 267 808 m 181 908 q 240 933 218 908 q 263 992 263 958 q 242 1051 263 1027 q 181 1075 221 1075 q 120 1050 142 1075 q 99 991 99 1026 q 120 933 99 958 q 181 908 142 908 "},V:{x_min:0,x_max:895.828125,ha:997,o:"m 895 1013 l 550 0 l 347 0 l 0 1013 l 231 1013 l 447 256 l 666 1013 l 895 1013 "},Ξ:{x_min:0,x_max:751.390625,ha:800,o:"m 733 826 l 5 826 l 5 1012 l 733 1012 l 733 826 m 681 432 l 65 432 l 65 617 l 681 617 l 681 432 m 751 0 l 0 0 l 0 183 l 751 183 l 751 0 "}," ":{x_min:0,x_max:0,ha:853},Ϋ:{x_min:-.21875,x_max:836.171875,ha:914,o:"m 610 1046 l 454 1046 l 454 1215 l 610 1215 l 610 1046 m 369 1046 l 212 1046 l 212 1215 l 369 1215 l 369 1046 m 836 1012 l 532 376 l 532 0 l 322 0 l 322 376 l 0 1012 l 208 1012 l 427 576 l 626 1012 l 836 1012 "},"”":{x_min:0,x_max:469,ha:567,o:"m 192 834 q 137 692 192 751 q 0 626 83 634 l 0 697 q 101 831 101 723 l 0 831 l 0 1013 l 192 1013 l 192 834 m 469 834 q 414 692 469 751 q 277 626 360 634 l 277 697 q 379 831 379 723 l 277 831 l 277 1013 l 469 1013 l 469 834 "},"@":{x_min:0,x_max:1276,ha:1374,o:"m 1115 -52 q 895 -170 1015 -130 q 647 -211 776 -211 q 158 -34 334 -211 q 0 360 0 123 q 179 810 0 621 q 698 1019 377 1019 q 1138 859 981 1019 q 1276 514 1276 720 q 1173 210 1276 335 q 884 75 1062 75 q 784 90 810 75 q 737 186 749 112 q 647 104 698 133 q 532 75 596 75 q 360 144 420 75 q 308 308 308 205 q 398 568 308 451 q 638 696 497 696 q 731 671 690 696 q 805 604 772 647 l 840 673 l 964 673 q 886 373 915 490 q 856 239 856 257 q 876 201 856 214 q 920 188 895 188 q 1084 284 1019 188 q 1150 511 1150 380 q 1051 779 1150 672 q 715 905 934 905 q 272 734 439 905 q 121 363 121 580 q 250 41 121 170 q 647 -103 394 -103 q 863 -67 751 -103 q 1061 26 975 -32 l 1115 -52 m 769 483 q 770 500 770 489 q 733 567 770 539 q 651 596 695 596 q 508 504 566 596 q 457 322 457 422 q 483 215 457 256 q 561 175 509 175 q 671 221 625 175 q 733 333 718 268 l 769 483 "},Ί:{x_min:0,x_max:619,ha:732,o:"m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 m 619 0 l 411 0 l 411 1012 l 619 1012 l 619 0 "},i:{x_min:14,x_max:214,ha:326,o:"m 214 830 l 14 830 l 14 1013 l 214 1013 l 214 830 m 214 0 l 14 0 l 14 748 l 214 748 l 214 0 "},Β:{x_min:0,x_max:835,ha:961,o:"m 675 547 q 791 450 747 518 q 835 304 835 383 q 718 75 835 158 q 461 0 612 0 l 0 0 l 0 1013 l 477 1013 q 697 951 609 1013 q 797 754 797 880 q 766 630 797 686 q 675 547 734 575 m 439 621 q 539 646 496 621 q 590 730 590 676 q 537 814 590 785 q 436 838 494 838 l 199 838 l 199 621 l 439 621 m 445 182 q 561 211 513 182 q 618 311 618 247 q 565 410 618 375 q 444 446 512 446 l 199 446 l 199 182 l 445 182 "},υ:{x_min:0,x_max:656,ha:767,o:"m 656 416 q 568 55 656 145 q 326 -25 490 -25 q 59 97 137 -25 q 0 369 0 191 l 0 749 l 200 749 l 200 369 q 216 222 200 268 q 326 142 245 142 q 440 247 411 142 q 456 422 456 304 l 456 749 l 656 749 l 656 416 "},"]":{x_min:0,x_max:349,ha:446,o:"m 349 -300 l 0 -300 l 0 -154 l 163 -154 l 163 866 l 0 866 l 0 1013 l 349 1013 l 349 -300 "},m:{x_min:0,x_max:1065,ha:1174,o:"m 1065 0 l 866 0 l 866 483 q 836 564 866 532 q 759 596 807 596 q 663 555 700 596 q 627 454 627 514 l 627 0 l 433 0 l 433 481 q 403 563 433 531 q 323 596 374 596 q 231 554 265 596 q 197 453 197 513 l 197 0 l 0 0 l 0 748 l 189 748 l 189 665 q 279 745 226 715 q 392 775 333 775 q 509 744 455 775 q 606 659 563 713 q 695 744 640 713 q 814 775 749 775 q 992 702 920 775 q 1065 523 1065 630 l 1065 0 "},χ:{x_min:0,x_max:759.71875,ha:847,o:"m 759 -299 l 548 -299 l 379 66 l 215 -299 l 0 -299 l 261 233 l 13 749 l 230 749 l 379 400 l 527 749 l 738 749 l 500 238 l 759 -299 "},ί:{x_min:42,x_max:371.171875,ha:389,o:"m 242 0 l 42 0 l 42 748 l 242 748 l 242 0 m 371 1039 l 169 823 l 71 823 l 193 1039 l 371 1039 "},Ζ:{x_min:0,x_max:804.171875,ha:886,o:"m 804 835 l 251 182 l 793 182 l 793 0 l 0 0 l 0 176 l 551 829 l 11 829 l 11 1012 l 804 1012 l 804 835 "},R:{x_min:0,x_max:836.109375,ha:947,o:"m 836 0 l 608 0 q 588 53 596 20 q 581 144 581 86 q 581 179 581 162 q 581 215 581 197 q 553 345 581 306 q 428 393 518 393 l 208 393 l 208 0 l 0 0 l 0 1013 l 491 1013 q 720 944 630 1013 q 819 734 819 869 q 778 584 819 654 q 664 485 738 513 q 757 415 727 463 q 794 231 794 358 l 794 170 q 800 84 794 116 q 836 31 806 51 l 836 0 m 462 838 l 208 838 l 208 572 l 452 572 q 562 604 517 572 q 612 704 612 640 q 568 801 612 765 q 462 838 525 838 "},o:{x_min:0,x_max:764,ha:871,o:"m 380 -26 q 105 86 211 -26 q 0 371 0 199 q 104 660 0 545 q 380 775 209 775 q 658 659 552 775 q 764 371 764 544 q 658 86 764 199 q 380 -26 552 -26 m 379 141 q 515 216 466 141 q 557 373 557 280 q 515 530 557 465 q 379 607 466 607 q 245 530 294 607 q 204 373 204 465 q 245 217 204 282 q 379 141 294 141 "},K:{x_min:0,x_max:900,ha:996,o:"m 900 0 l 647 0 l 316 462 l 208 355 l 208 0 l 0 0 l 0 1013 l 208 1013 l 208 595 l 604 1013 l 863 1013 l 461 603 l 900 0 "},",":{x_min:0,x_max:206,ha:303,o:"m 206 5 q 150 -151 206 -88 q 0 -238 94 -213 l 0 -159 q 84 -100 56 -137 q 111 -2 111 -62 l 0 -2 l 0 205 l 206 205 l 206 5 "},d:{x_min:0,x_max:722,ha:836,o:"m 722 0 l 530 0 l 530 101 q 303 -26 449 -26 q 72 103 155 -26 q 0 373 0 214 q 72 642 0 528 q 305 775 156 775 q 433 743 373 775 q 530 656 492 712 l 530 1013 l 722 1013 l 722 0 m 361 600 q 234 523 280 600 q 196 372 196 458 q 233 220 196 286 q 358 143 278 143 q 489 216 442 143 q 530 369 530 280 q 491 522 530 456 q 361 600 443 600 "},"¨":{x_min:212,x_max:609,ha:933,o:"m 609 1046 l 453 1046 l 453 1216 l 609 1216 l 609 1046 m 369 1046 l 212 1046 l 212 1216 l 369 1216 l 369 1046 "},E:{x_min:0,x_max:761.109375,ha:824,o:"m 761 0 l 0 0 l 0 1013 l 734 1013 l 734 837 l 206 837 l 206 621 l 690 621 l 690 446 l 206 446 l 206 186 l 761 186 l 761 0 "},Y:{x_min:0,x_max:836,ha:931,o:"m 836 1013 l 532 376 l 532 0 l 322 0 l 322 376 l 0 1013 l 208 1013 l 427 576 l 626 1013 l 836 1013 "},'"':{x_min:0,x_max:357,ha:454,o:"m 357 604 l 225 604 l 225 988 l 357 988 l 357 604 m 132 604 l 0 604 l 0 988 l 132 988 l 132 604 "},"‹":{x_min:35.984375,x_max:791.671875,ha:828,o:"m 791 17 l 36 352 l 35 487 l 791 823 l 791 672 l 229 421 l 791 168 l 791 17 "},"„":{x_min:0,x_max:483,ha:588,o:"m 206 5 q 150 -151 206 -88 q 0 -238 94 -213 l 0 -159 q 84 -100 56 -137 q 111 -2 111 -62 l 0 -2 l 0 205 l 206 205 l 206 5 m 483 5 q 427 -151 483 -88 q 277 -238 371 -213 l 277 -159 q 361 -100 334 -137 q 388 -2 388 -62 l 277 -2 l 277 205 l 483 205 l 483 5 "},δ:{x_min:6,x_max:732,ha:835,o:"m 732 352 q 630 76 732 177 q 354 -25 529 -25 q 101 74 197 -25 q 6 333 6 174 q 89 581 6 480 q 323 690 178 690 q 66 864 201 787 l 66 1013 l 669 1013 l 669 856 l 348 856 q 532 729 461 789 q 673 566 625 651 q 732 352 732 465 m 419 551 q 259 496 321 551 q 198 344 198 441 q 238 208 198 267 q 357 140 283 140 q 484 203 437 140 q 526 344 526 260 q 499 466 526 410 q 419 551 473 521 "},έ:{x_min:16.671875,x_max:652.78125,ha:742,o:"m 652 259 q 565 49 652 123 q 340 -25 479 -25 q 102 39 188 -25 q 16 197 16 104 q 45 299 16 250 q 134 390 75 348 q 58 456 86 419 q 25 552 25 502 q 120 717 25 653 q 322 776 208 776 q 537 710 456 776 q 625 508 625 639 l 445 508 q 415 585 445 563 q 327 608 386 608 q 254 590 293 608 q 215 544 215 573 q 252 469 215 490 q 336 453 280 453 q 369 455 347 453 q 400 456 391 456 l 400 308 l 329 308 q 247 291 280 308 q 204 223 204 269 q 255 154 204 172 q 345 143 286 143 q 426 174 398 143 q 454 259 454 206 l 652 259 m 579 1039 l 377 823 l 279 823 l 401 1039 l 579 1039 "},ω:{x_min:0,x_max:945,ha:1051,o:"m 565 323 l 565 289 q 577 190 565 221 q 651 142 597 142 q 718 189 694 142 q 742 365 742 237 q 703 565 742 462 q 610 749 671 650 l 814 749 q 910 547 876 650 q 945 337 945 444 q 874 96 945 205 q 668 -29 793 -29 q 551 0 608 -29 q 470 78 495 30 q 390 0 444 28 q 276 -29 337 -29 q 69 96 149 -29 q 0 337 0 204 q 36 553 0 444 q 130 749 68 650 l 334 749 q 241 565 273 650 q 203 365 203 461 q 219 222 203 279 q 292 142 243 142 q 360 183 342 142 q 373 271 373 211 q 372 298 372 285 q 372 323 372 311 l 372 528 l 566 528 l 565 323 "},"´":{x_min:0,x_max:132,ha:299,o:"m 132 604 l 0 604 l 0 988 l 132 988 l 132 604 "},"±":{x_min:29,x_max:798,ha:828,o:"m 798 480 l 484 480 l 484 254 l 344 254 l 344 480 l 29 480 l 29 615 l 344 615 l 344 842 l 484 842 l 484 615 l 798 615 l 798 480 m 798 0 l 29 0 l 29 136 l 798 136 l 798 0 "},"|":{x_min:0,x_max:143,ha:240,o:"m 143 462 l 0 462 l 0 984 l 143 984 l 143 462 m 143 -242 l 0 -242 l 0 280 l 143 280 l 143 -242 "},ϋ:{x_min:0,x_max:656,ha:767,o:"m 535 810 l 406 810 l 406 952 l 535 952 l 535 810 m 271 810 l 142 810 l 142 952 l 271 952 l 271 810 m 656 417 q 568 55 656 146 q 326 -25 490 -25 q 59 97 137 -25 q 0 369 0 192 l 0 748 l 200 748 l 200 369 q 216 222 200 268 q 326 142 245 142 q 440 247 411 142 q 456 422 456 304 l 456 748 l 656 748 l 656 417 "},"§":{x_min:0,x_max:633,ha:731,o:"m 633 469 q 601 356 633 406 q 512 274 569 305 q 570 197 548 242 q 593 105 593 152 q 501 -76 593 -5 q 301 -142 416 -142 q 122 -82 193 -142 q 43 108 43 -15 l 212 108 q 251 27 220 53 q 321 1 283 1 q 389 23 360 1 q 419 83 419 46 q 310 194 419 139 q 108 297 111 295 q 0 476 0 372 q 33 584 0 537 q 120 659 62 626 q 72 720 91 686 q 53 790 53 755 q 133 978 53 908 q 312 1042 207 1042 q 483 984 412 1042 q 574 807 562 921 l 409 807 q 379 875 409 851 q 307 900 349 900 q 244 881 270 900 q 218 829 218 862 q 324 731 218 781 q 524 636 506 647 q 633 469 633 565 m 419 334 q 473 411 473 372 q 451 459 473 436 q 390 502 430 481 l 209 595 q 167 557 182 577 q 153 520 153 537 q 187 461 153 491 q 263 413 212 440 l 419 334 "},b:{x_min:0,x_max:722,ha:822,o:"m 416 -26 q 289 6 346 -26 q 192 101 232 39 l 192 0 l 0 0 l 0 1013 l 192 1013 l 192 656 q 286 743 226 712 q 415 775 346 775 q 649 644 564 775 q 722 374 722 533 q 649 106 722 218 q 416 -26 565 -26 m 361 600 q 232 524 279 600 q 192 371 192 459 q 229 221 192 284 q 357 145 275 145 q 487 221 441 145 q 526 374 526 285 q 488 523 526 460 q 361 600 442 600 "},q:{x_min:0,x_max:722,ha:833,o:"m 722 -298 l 530 -298 l 530 97 q 306 -25 449 -25 q 73 104 159 -25 q 0 372 0 216 q 72 643 0 529 q 305 775 156 775 q 430 742 371 775 q 530 654 488 709 l 530 750 l 722 750 l 722 -298 m 360 601 q 234 527 278 601 q 197 378 197 466 q 233 225 197 291 q 357 144 277 144 q 488 217 441 144 q 530 370 530 282 q 491 523 530 459 q 360 601 443 601 "},Ω:{x_min:-.03125,x_max:1008.53125,ha:1108,o:"m 1008 0 l 589 0 l 589 199 q 717 368 670 265 q 764 580 764 471 q 698 778 764 706 q 504 855 629 855 q 311 773 380 855 q 243 563 243 691 q 289 360 243 458 q 419 199 336 262 l 419 0 l 0 0 l 0 176 l 202 176 q 77 355 123 251 q 32 569 32 459 q 165 908 32 776 q 505 1040 298 1040 q 844 912 711 1040 q 977 578 977 785 q 931 362 977 467 q 805 176 886 256 l 1008 176 l 1008 0 "},ύ:{x_min:0,x_max:656,ha:767,o:"m 656 417 q 568 55 656 146 q 326 -25 490 -25 q 59 97 137 -25 q 0 369 0 192 l 0 748 l 200 748 l 201 369 q 218 222 201 269 q 326 142 245 142 q 440 247 411 142 q 456 422 456 304 l 456 748 l 656 748 l 656 417 m 579 1039 l 378 823 l 279 823 l 401 1039 l 579 1039 "},z:{x_min:0,x_max:663.890625,ha:753,o:"m 663 0 l 0 0 l 0 154 l 411 591 l 25 591 l 25 749 l 650 749 l 650 584 l 245 165 l 663 165 l 663 0 "},"™":{x_min:0,x_max:951,ha:1063,o:"m 405 921 l 255 921 l 255 506 l 149 506 l 149 921 l 0 921 l 0 1013 l 405 1013 l 405 921 m 951 506 l 852 506 l 852 916 l 750 506 l 643 506 l 539 915 l 539 506 l 442 506 l 442 1013 l 595 1012 l 695 625 l 794 1013 l 951 1013 l 951 506 "},ή:{x_min:0,x_max:669,ha:779,o:"m 669 -278 l 469 -278 l 469 390 q 448 526 469 473 q 348 606 417 606 q 244 553 288 606 q 201 441 201 501 l 201 0 l 0 0 l 0 749 l 201 749 l 201 665 q 301 744 244 715 q 423 774 359 774 q 606 685 538 774 q 669 484 669 603 l 669 -278 m 495 1039 l 293 823 l 195 823 l 317 1039 l 495 1039 "},Θ:{x_min:0,x_max:993,ha:1092,o:"m 497 -29 q 133 127 272 -29 q 0 505 0 277 q 133 883 0 733 q 497 1040 272 1040 q 861 883 722 1040 q 993 505 993 733 q 861 127 993 277 q 497 -29 722 -29 m 497 154 q 711 266 631 154 q 782 506 782 367 q 712 746 782 648 q 497 858 634 858 q 281 746 361 858 q 211 506 211 648 q 280 266 211 365 q 497 154 359 154 m 676 430 l 316 430 l 316 593 l 676 593 l 676 430 "},"®":{x_min:3,x_max:1007,ha:1104,o:"m 507 -6 q 129 153 269 -6 q 3 506 3 298 q 127 857 3 713 q 502 1017 266 1017 q 880 855 740 1017 q 1007 502 1007 711 q 882 152 1007 295 q 507 -6 743 -6 m 502 934 q 184 800 302 934 q 79 505 79 680 q 184 210 79 331 q 501 76 302 76 q 819 210 701 76 q 925 507 925 331 q 820 800 925 682 q 502 934 704 934 m 782 190 l 639 190 q 627 225 632 202 q 623 285 623 248 l 623 326 q 603 411 623 384 q 527 439 584 439 l 388 439 l 388 190 l 257 190 l 257 829 l 566 829 q 709 787 654 829 q 772 654 772 740 q 746 559 772 604 q 675 497 720 514 q 735 451 714 483 q 756 341 756 419 l 756 299 q 760 244 756 265 q 782 212 764 223 l 782 190 m 546 718 l 388 718 l 388 552 l 541 552 q 612 572 584 552 q 641 635 641 593 q 614 695 641 672 q 546 718 587 718 "},"~":{x_min:0,x_max:851,ha:949,o:"m 851 968 q 795 750 851 831 q 599 656 730 656 q 406 744 506 656 q 259 832 305 832 q 162 775 193 832 q 139 656 139 730 l 0 656 q 58 871 0 787 q 251 968 124 968 q 442 879 341 968 q 596 791 544 791 q 691 849 663 791 q 712 968 712 892 l 851 968 "},Ε:{x_min:0,x_max:761.546875,ha:824,o:"m 761 0 l 0 0 l 0 1012 l 735 1012 l 735 836 l 206 836 l 206 621 l 690 621 l 690 446 l 206 446 l 206 186 l 761 186 l 761 0 "},"³":{x_min:0,x_max:467,ha:564,o:"m 467 555 q 393 413 467 466 q 229 365 325 365 q 70 413 134 365 q 0 565 0 467 l 123 565 q 163 484 131 512 q 229 461 190 461 q 299 486 269 461 q 329 553 329 512 q 281 627 329 607 q 187 641 248 641 l 187 722 q 268 737 237 722 q 312 804 312 758 q 285 859 312 837 q 224 882 259 882 q 165 858 189 882 q 135 783 140 834 l 12 783 q 86 930 20 878 q 230 976 145 976 q 379 931 314 976 q 444 813 444 887 q 423 744 444 773 q 365 695 402 716 q 439 640 412 676 q 467 555 467 605 "},"[":{x_min:0,x_max:347.21875,ha:444,o:"m 347 -300 l 0 -300 l 0 1013 l 347 1013 l 347 866 l 188 866 l 188 -154 l 347 -154 l 347 -300 "},L:{x_min:0,x_max:704.171875,ha:763,o:"m 704 0 l 0 0 l 0 1013 l 208 1013 l 208 186 l 704 186 l 704 0 "},σ:{x_min:0,x_max:851.3125,ha:940,o:"m 851 594 l 712 594 q 761 369 761 485 q 658 83 761 191 q 379 -25 555 -25 q 104 87 208 -25 q 0 372 0 200 q 103 659 0 544 q 378 775 207 775 q 464 762 407 775 q 549 750 521 750 l 851 750 l 851 594 m 379 142 q 515 216 466 142 q 557 373 557 280 q 515 530 557 465 q 379 608 465 608 q 244 530 293 608 q 203 373 203 465 q 244 218 203 283 q 379 142 293 142 "},ζ:{x_min:0,x_max:622,ha:701,o:"m 622 -32 q 604 -158 622 -98 q 551 -278 587 -218 l 373 -278 q 426 -180 406 -229 q 446 -80 446 -131 q 421 -22 446 -37 q 354 -8 397 -8 q 316 -9 341 -8 q 280 -11 291 -11 q 75 69 150 -11 q 0 283 0 150 q 87 596 0 437 q 291 856 162 730 l 47 856 l 47 1013 l 592 1013 l 592 904 q 317 660 422 800 q 197 318 197 497 q 306 141 197 169 q 510 123 408 131 q 622 -32 622 102 "},θ:{x_min:0,x_max:714,ha:817,o:"m 357 1022 q 633 833 534 1022 q 714 486 714 679 q 634 148 714 288 q 354 -25 536 -25 q 79 147 175 -25 q 0 481 0 288 q 79 831 0 679 q 357 1022 177 1022 m 510 590 q 475 763 510 687 q 351 862 430 862 q 233 763 272 862 q 204 590 204 689 l 510 590 m 510 440 l 204 440 q 233 251 204 337 q 355 131 274 131 q 478 248 434 131 q 510 440 510 337 "},Ο:{x_min:0,x_max:995,ha:1092,o:"m 497 -29 q 133 127 272 -29 q 0 505 0 277 q 132 883 0 733 q 497 1040 270 1040 q 861 883 722 1040 q 995 505 995 733 q 862 127 995 277 q 497 -29 724 -29 m 497 154 q 711 266 632 154 q 781 506 781 365 q 711 745 781 647 q 497 857 632 857 q 283 747 361 857 q 213 506 213 647 q 282 266 213 365 q 497 154 361 154 "},Γ:{x_min:0,x_max:703.84375,ha:742,o:"m 703 836 l 208 836 l 208 0 l 0 0 l 0 1012 l 703 1012 l 703 836 "}," ":{x_min:0,x_max:0,ha:375},"%":{x_min:0,x_max:1111,ha:1213,o:"m 861 484 q 1048 404 979 484 q 1111 228 1111 332 q 1048 51 1111 123 q 859 -29 979 -29 q 672 50 740 -29 q 610 227 610 122 q 672 403 610 331 q 861 484 741 484 m 861 120 q 939 151 911 120 q 967 226 967 183 q 942 299 967 270 q 861 333 912 333 q 783 301 811 333 q 756 226 756 269 q 783 151 756 182 q 861 120 810 120 m 904 984 l 316 -28 l 205 -29 l 793 983 l 904 984 m 250 984 q 436 904 366 984 q 499 730 499 832 q 436 552 499 626 q 248 472 366 472 q 62 552 132 472 q 0 728 0 624 q 62 903 0 831 q 250 984 132 984 m 249 835 q 169 801 198 835 q 140 725 140 768 q 167 652 140 683 q 247 621 195 621 q 327 654 298 621 q 357 730 357 687 q 329 803 357 772 q 249 835 301 835 "},P:{x_min:0,x_max:771,ha:838,o:"m 208 361 l 208 0 l 0 0 l 0 1013 l 450 1013 q 682 919 593 1013 q 771 682 771 826 q 687 452 771 544 q 466 361 604 361 l 208 361 m 421 837 l 208 837 l 208 544 l 410 544 q 525 579 480 544 q 571 683 571 615 q 527 792 571 747 q 421 837 484 837 "},Έ:{x_min:0,x_max:1172.546875,ha:1235,o:"m 1172 0 l 411 0 l 411 1012 l 1146 1012 l 1146 836 l 617 836 l 617 621 l 1101 621 l 1101 446 l 617 446 l 617 186 l 1172 186 l 1172 0 m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 "},Ώ:{x_min:.4375,x_max:1189.546875,ha:1289,o:"m 1189 0 l 770 0 l 770 199 q 897 369 849 263 q 945 580 945 474 q 879 778 945 706 q 685 855 810 855 q 492 773 561 855 q 424 563 424 691 q 470 360 424 458 q 600 199 517 262 l 600 0 l 180 0 l 180 176 l 383 176 q 258 355 304 251 q 213 569 213 459 q 346 908 213 776 q 686 1040 479 1040 q 1025 912 892 1040 q 1158 578 1158 785 q 1112 362 1158 467 q 986 176 1067 256 l 1189 176 l 1189 0 m 314 1092 l 99 837 l 0 837 l 136 1092 l 314 1092 "},_:{x_min:61.109375,x_max:766.671875,ha:828,o:"m 766 -333 l 61 -333 l 61 -190 l 766 -190 l 766 -333 "},Ϊ:{x_min:-56,x_max:342,ha:503,o:"m 342 1046 l 186 1046 l 186 1215 l 342 1215 l 342 1046 m 101 1046 l -56 1046 l -56 1215 l 101 1215 l 101 1046 m 249 0 l 41 0 l 41 1012 l 249 1012 l 249 0 "},"+":{x_min:43,x_max:784,ha:828,o:"m 784 353 l 483 353 l 483 0 l 343 0 l 343 353 l 43 353 l 43 489 l 343 489 l 343 840 l 483 840 l 483 489 l 784 489 l 784 353 "},"½":{x_min:0,x_max:1090,ha:1188,o:"m 1090 380 q 992 230 1090 301 q 779 101 886 165 q 822 94 784 95 q 924 93 859 93 l 951 93 l 973 93 l 992 93 l 1009 93 q 1046 93 1027 93 q 1085 93 1066 93 l 1085 0 l 650 0 l 654 38 q 815 233 665 137 q 965 376 965 330 q 936 436 965 412 q 869 461 908 461 q 806 435 831 461 q 774 354 780 409 l 659 354 q 724 505 659 451 q 870 554 783 554 q 1024 506 958 554 q 1090 380 1090 459 m 868 998 l 268 -28 l 154 -27 l 757 999 l 868 998 m 272 422 l 147 422 l 147 799 l 0 799 l 0 875 q 126 900 91 875 q 170 973 162 926 l 272 973 l 272 422 "},Ρ:{x_min:0,x_max:771,ha:838,o:"m 208 361 l 208 0 l 0 0 l 0 1012 l 450 1012 q 682 919 593 1012 q 771 681 771 826 q 687 452 771 544 q 466 361 604 361 l 208 361 m 422 836 l 209 836 l 209 544 l 410 544 q 525 579 480 544 q 571 683 571 614 q 527 791 571 747 q 422 836 484 836 "},"'":{x_min:0,x_max:192,ha:289,o:"m 192 834 q 137 692 192 751 q 0 626 82 632 l 0 697 q 101 830 101 726 l 0 830 l 0 1013 l 192 1013 l 192 834 "},ª:{x_min:0,x_max:350,ha:393,o:"m 350 625 l 245 625 q 237 648 241 636 q 233 672 233 661 q 117 611 192 611 q 33 643 66 611 q 0 727 0 675 q 116 846 0 828 q 233 886 233 864 q 211 919 233 907 q 168 931 190 931 q 108 877 108 931 l 14 877 q 56 977 14 942 q 165 1013 98 1013 q 270 987 224 1013 q 329 903 329 955 l 329 694 q 332 661 329 675 q 350 641 336 648 l 350 625 m 233 774 l 233 809 q 151 786 180 796 q 97 733 97 768 q 111 700 97 712 q 149 689 126 689 q 210 713 187 689 q 233 774 233 737 "},"΅":{x_min:57,x_max:584,ha:753,o:"m 584 810 l 455 810 l 455 952 l 584 952 l 584 810 m 521 1064 l 305 810 l 207 810 l 343 1064 l 521 1064 m 186 810 l 57 810 l 57 952 l 186 952 l 186 810 "},T:{x_min:0,x_max:809,ha:894,o:"m 809 831 l 509 831 l 509 0 l 299 0 l 299 831 l 0 831 l 0 1013 l 809 1013 l 809 831 "},Φ:{x_min:0,x_max:949,ha:1032,o:"m 566 0 l 385 0 l 385 121 q 111 230 222 121 q 0 508 0 340 q 112 775 0 669 q 385 892 219 875 l 385 1013 l 566 1013 l 566 892 q 836 776 732 875 q 949 507 949 671 q 838 231 949 341 q 566 121 728 121 l 566 0 m 566 285 q 701 352 650 285 q 753 508 753 419 q 703 658 753 597 q 566 729 653 720 l 566 285 m 385 285 l 385 729 q 245 661 297 717 q 193 516 193 604 q 246 356 193 427 q 385 285 300 285 "},j:{x_min:-45.828125,x_max:242,ha:361,o:"m 242 830 l 42 830 l 42 1013 l 242 1013 l 242 830 m 242 -119 q 180 -267 242 -221 q 20 -308 127 -308 l -45 -308 l -45 -140 l -24 -140 q 25 -130 8 -140 q 42 -88 42 -120 l 42 748 l 242 748 l 242 -119 "},Σ:{x_min:0,x_max:772.21875,ha:849,o:"m 772 0 l 0 0 l 0 140 l 368 526 l 18 862 l 18 1012 l 740 1012 l 740 836 l 315 836 l 619 523 l 298 175 l 772 175 l 772 0 "},"›":{x_min:36.109375,x_max:792,ha:828,o:"m 792 352 l 36 17 l 36 168 l 594 420 l 36 672 l 36 823 l 792 487 l 792 352 "},"<":{x_min:35.984375,x_max:791.671875,ha:828,o:"m 791 17 l 36 352 l 35 487 l 791 823 l 791 672 l 229 421 l 791 168 l 791 17 "},"£":{x_min:0,x_max:716.546875,ha:814,o:"m 716 38 q 603 -9 658 5 q 502 -24 548 -24 q 398 -10 451 -24 q 239 25 266 25 q 161 12 200 25 q 77 -29 122 0 l 0 113 q 110 211 81 174 q 151 315 151 259 q 117 440 151 365 l 0 440 l 0 515 l 73 515 q 35 610 52 560 q 15 710 15 671 q 119 910 15 831 q 349 984 216 984 q 570 910 480 984 q 693 668 674 826 l 501 668 q 455 791 501 746 q 353 830 414 830 q 256 795 298 830 q 215 705 215 760 q 249 583 215 655 q 283 515 266 548 l 479 515 l 479 440 l 309 440 q 316 394 313 413 q 319 355 319 374 q 287 241 319 291 q 188 135 263 205 q 262 160 225 152 q 332 168 298 168 q 455 151 368 168 q 523 143 500 143 q 588 152 558 143 q 654 189 617 162 l 716 38 "},t:{x_min:0,x_max:412,ha:511,o:"m 412 -6 q 349 -8 391 -6 q 287 -11 307 -11 q 137 38 177 -11 q 97 203 97 87 l 97 609 l 0 609 l 0 749 l 97 749 l 97 951 l 297 951 l 297 749 l 412 749 l 412 609 l 297 609 l 297 191 q 315 152 297 162 q 366 143 334 143 q 389 143 378 143 q 412 143 400 143 l 412 -6 "},"¬":{x_min:0,x_max:704,ha:801,o:"m 704 93 l 551 93 l 551 297 l 0 297 l 0 450 l 704 450 l 704 93 "},λ:{x_min:0,x_max:701.390625,ha:775,o:"m 701 0 l 491 0 l 345 444 l 195 0 l 0 0 l 238 697 l 131 1013 l 334 1013 l 701 0 "},W:{x_min:0,x_max:1291.671875,ha:1399,o:"m 1291 1013 l 1002 0 l 802 0 l 645 777 l 490 0 l 288 0 l 0 1013 l 215 1013 l 388 298 l 534 1012 l 757 1013 l 904 299 l 1076 1013 l 1291 1013 "},">":{x_min:36.109375,x_max:792,ha:828,o:"m 792 352 l 36 17 l 36 168 l 594 420 l 36 672 l 36 823 l 792 487 l 792 352 "},v:{x_min:0,x_max:740.28125,ha:828,o:"m 740 749 l 473 0 l 266 0 l 0 749 l 222 749 l 373 211 l 529 749 l 740 749 "},τ:{x_min:.28125,x_max:618.734375,ha:699,o:"m 618 593 l 409 593 l 409 0 l 210 0 l 210 593 l 0 593 l 0 749 l 618 749 l 618 593 "},ξ:{x_min:0,x_max:640,ha:715,o:"m 640 -14 q 619 -157 640 -84 q 563 -299 599 -230 l 399 -299 q 442 -194 433 -223 q 468 -85 468 -126 q 440 -25 468 -41 q 368 -10 412 -10 q 333 -11 355 -10 q 302 -13 311 -13 q 91 60 179 -13 q 0 259 0 138 q 56 426 0 354 q 201 530 109 493 q 106 594 144 553 q 65 699 65 642 q 94 787 65 747 q 169 856 123 828 l 22 856 l 22 1013 l 597 1013 l 597 856 l 497 857 q 345 840 398 857 q 257 736 257 812 q 366 614 257 642 q 552 602 416 602 l 552 446 l 513 446 q 313 425 379 446 q 199 284 199 389 q 312 162 199 184 q 524 136 418 148 q 640 -14 640 105 "},"&":{x_min:-1,x_max:910.109375,ha:1007,o:"m 910 -1 l 676 -1 l 607 83 q 291 -47 439 -47 q 50 100 135 -47 q -1 273 -1 190 q 51 431 -1 357 q 218 568 104 505 q 151 661 169 629 q 120 769 120 717 q 201 951 120 885 q 382 1013 276 1013 q 555 957 485 1013 q 635 789 635 894 q 584 644 635 709 q 468 539 548 597 l 615 359 q 664 527 654 440 l 844 527 q 725 223 824 359 l 910 -1 m 461 787 q 436 848 461 826 q 381 870 412 870 q 325 849 349 870 q 301 792 301 829 q 324 719 301 757 q 372 660 335 703 q 430 714 405 680 q 461 787 461 753 m 500 214 l 318 441 q 198 286 198 363 q 225 204 198 248 q 347 135 268 135 q 425 153 388 135 q 500 214 462 172 "},Λ:{x_min:0,x_max:894.453125,ha:974,o:"m 894 0 l 666 0 l 447 757 l 225 0 l 0 0 l 344 1013 l 547 1013 l 894 0 "},I:{x_min:41,x_max:249,ha:365,o:"m 249 0 l 41 0 l 41 1013 l 249 1013 l 249 0 "},G:{x_min:0,x_max:971,ha:1057,o:"m 971 -1 l 829 -1 l 805 118 q 479 -29 670 -29 q 126 133 261 -29 q 0 509 0 286 q 130 884 0 737 q 493 1040 268 1040 q 790 948 659 1040 q 961 698 920 857 l 736 698 q 643 813 709 769 q 500 857 578 857 q 285 746 364 857 q 213 504 213 644 q 285 263 213 361 q 505 154 365 154 q 667 217 598 154 q 761 374 736 280 l 548 374 l 548 548 l 971 548 l 971 -1 "},ΰ:{x_min:0,x_max:655,ha:767,o:"m 583 810 l 454 810 l 454 952 l 583 952 l 583 810 m 186 810 l 57 809 l 57 952 l 186 952 l 186 810 m 516 1039 l 315 823 l 216 823 l 338 1039 l 516 1039 m 655 417 q 567 55 655 146 q 326 -25 489 -25 q 59 97 137 -25 q 0 369 0 192 l 0 748 l 200 748 l 201 369 q 218 222 201 269 q 326 142 245 142 q 439 247 410 142 q 455 422 455 304 l 455 748 l 655 748 l 655 417 "},"`":{x_min:0,x_max:190,ha:288,o:"m 190 654 l 0 654 l 0 830 q 55 970 0 909 q 190 1040 110 1031 l 190 969 q 111 922 134 952 q 88 836 88 892 l 190 836 l 190 654 "},"·":{x_min:0,x_max:207,ha:304,o:"m 207 528 l 0 528 l 0 735 l 207 735 l 207 528 "},Υ:{x_min:-.21875,x_max:836.171875,ha:914,o:"m 836 1013 l 532 376 l 532 0 l 322 0 l 322 376 l 0 1013 l 208 1013 l 427 576 l 626 1013 l 836 1013 "},r:{x_min:0,x_max:431.9375,ha:513,o:"m 431 564 q 269 536 320 564 q 200 395 200 498 l 200 0 l 0 0 l 0 748 l 183 748 l 183 618 q 285 731 224 694 q 431 768 345 768 l 431 564 "},x:{x_min:0,x_max:738.890625,ha:826,o:"m 738 0 l 504 0 l 366 238 l 230 0 l 0 0 l 252 382 l 11 749 l 238 749 l 372 522 l 502 749 l 725 749 l 488 384 l 738 0 "},μ:{x_min:0,x_max:647,ha:754,o:"m 647 0 l 477 0 l 477 68 q 411 9 448 30 q 330 -11 374 -11 q 261 3 295 -11 q 199 43 226 18 l 199 -278 l 0 -278 l 0 749 l 199 749 l 199 358 q 216 222 199 268 q 322 152 244 152 q 435 240 410 152 q 448 401 448 283 l 448 749 l 647 749 l 647 0 "},h:{x_min:0,x_max:669,ha:782,o:"m 669 0 l 469 0 l 469 390 q 449 526 469 472 q 353 607 420 607 q 248 554 295 607 q 201 441 201 501 l 201 0 l 0 0 l 0 1013 l 201 1013 l 201 665 q 303 743 245 715 q 425 772 362 772 q 609 684 542 772 q 669 484 669 605 l 669 0 "},".":{x_min:0,x_max:206,ha:303,o:"m 206 0 l 0 0 l 0 207 l 206 207 l 206 0 "},φ:{x_min:-1,x_max:921,ha:990,o:"m 542 -278 l 367 -278 l 367 -22 q 99 92 200 -22 q -1 376 -1 206 q 72 627 -1 520 q 288 769 151 742 l 288 581 q 222 495 243 550 q 202 378 202 439 q 240 228 202 291 q 367 145 285 157 l 367 776 l 515 776 q 807 667 694 776 q 921 379 921 558 q 815 93 921 209 q 542 -22 709 -22 l 542 -278 m 542 145 q 672 225 625 145 q 713 381 713 291 q 671 536 713 470 q 542 611 624 611 l 542 145 "},";":{x_min:0,x_max:208,ha:306,o:"m 208 528 l 0 528 l 0 735 l 208 735 l 208 528 m 208 6 q 152 -151 208 -89 q 0 -238 96 -212 l 0 -158 q 87 -100 61 -136 q 113 0 113 -65 l 0 0 l 0 207 l 208 207 l 208 6 "},f:{x_min:0,x_max:424,ha:525,o:"m 424 609 l 300 609 l 300 0 l 107 0 l 107 609 l 0 609 l 0 749 l 107 749 q 145 949 107 894 q 328 1019 193 1019 l 424 1015 l 424 855 l 362 855 q 312 841 324 855 q 300 797 300 827 q 300 773 300 786 q 300 749 300 761 l 424 749 l 424 609 "},"“":{x_min:0,x_max:468,ha:567,o:"m 190 631 l 0 631 l 0 807 q 55 947 0 885 q 190 1017 110 1010 l 190 947 q 88 813 88 921 l 190 813 l 190 631 m 468 631 l 278 631 l 278 807 q 333 947 278 885 q 468 1017 388 1010 l 468 947 q 366 813 366 921 l 468 813 l 468 631 "},A:{x_min:0,x_max:966.671875,ha:1069,o:"m 966 0 l 747 0 l 679 208 l 286 208 l 218 0 l 0 0 l 361 1013 l 600 1013 l 966 0 m 623 376 l 480 810 l 340 376 l 623 376 "},"‘":{x_min:0,x_max:190,ha:289,o:"m 190 631 l 0 631 l 0 807 q 55 947 0 885 q 190 1017 110 1010 l 190 947 q 88 813 88 921 l 190 813 l 190 631 "},ϊ:{x_min:-55,x_max:337,ha:389,o:"m 337 810 l 208 810 l 208 952 l 337 952 l 337 810 m 74 810 l -55 810 l -55 952 l 74 952 l 74 810 m 242 0 l 42 0 l 42 748 l 242 748 l 242 0 "},π:{x_min:.5,x_max:838.890625,ha:938,o:"m 838 593 l 750 593 l 750 0 l 549 0 l 549 593 l 287 593 l 287 0 l 88 0 l 88 593 l 0 593 l 0 749 l 838 749 l 838 593 "},ά:{x_min:-1,x_max:722,ha:835,o:"m 722 0 l 531 0 l 530 101 q 433 8 491 41 q 304 -25 375 -25 q 72 104 157 -25 q -1 372 -1 216 q 72 643 -1 530 q 308 775 158 775 q 433 744 375 775 q 528 656 491 713 l 528 749 l 722 749 l 722 0 m 361 601 q 233 527 277 601 q 196 375 196 464 q 232 224 196 288 q 358 144 277 144 q 487 217 441 144 q 528 370 528 281 q 489 523 528 457 q 361 601 443 601 m 579 1039 l 377 823 l 279 823 l 401 1039 l 579 1039 "},O:{x_min:0,x_max:994,ha:1094,o:"m 497 -29 q 133 127 272 -29 q 0 505 0 277 q 131 883 0 733 q 497 1040 270 1040 q 860 883 721 1040 q 994 505 994 733 q 862 127 994 277 q 497 -29 723 -29 m 497 154 q 710 266 631 154 q 780 506 780 365 q 710 745 780 647 q 497 857 631 857 q 283 747 361 857 q 213 506 213 647 q 282 266 213 365 q 497 154 361 154 "},n:{x_min:0,x_max:669,ha:782,o:"m 669 0 l 469 0 l 469 452 q 442 553 469 513 q 352 601 412 601 q 245 553 290 601 q 200 441 200 505 l 200 0 l 0 0 l 0 748 l 194 748 l 194 659 q 289 744 230 713 q 416 775 349 775 q 600 700 531 775 q 669 509 669 626 l 669 0 "},l:{x_min:41,x_max:240,ha:363,o:"m 240 0 l 41 0 l 41 1013 l 240 1013 l 240 0 "},"¤":{x_min:40.265625,x_max:727.203125,ha:825,o:"m 727 792 l 594 659 q 620 552 620 609 q 598 459 620 504 l 725 331 l 620 224 l 491 352 q 382 331 443 331 q 273 352 322 331 l 144 224 l 40 330 l 167 459 q 147 552 147 501 q 172 658 147 608 l 40 794 l 147 898 l 283 759 q 383 776 330 776 q 482 759 434 776 l 620 898 l 727 792 m 383 644 q 308 617 334 644 q 283 551 283 590 q 309 489 283 517 q 381 462 335 462 q 456 488 430 462 q 482 554 482 515 q 455 616 482 588 q 383 644 429 644 "},κ:{x_min:0,x_max:691.84375,ha:779,o:"m 691 0 l 479 0 l 284 343 l 196 252 l 196 0 l 0 0 l 0 749 l 196 749 l 196 490 l 440 749 l 677 749 l 416 479 l 691 0 "},p:{x_min:0,x_max:722,ha:824,o:"m 415 -26 q 287 4 346 -26 q 192 92 228 34 l 192 -298 l 0 -298 l 0 750 l 192 750 l 192 647 q 289 740 230 706 q 416 775 347 775 q 649 645 566 775 q 722 375 722 534 q 649 106 722 218 q 415 -26 564 -26 m 363 603 q 232 529 278 603 q 192 375 192 465 q 230 222 192 286 q 360 146 276 146 q 487 221 441 146 q 526 371 526 285 q 488 523 526 458 q 363 603 443 603 "},"‡":{x_min:0,x_max:809,ha:894,o:"m 299 621 l 0 621 l 0 804 l 299 804 l 299 1011 l 509 1011 l 509 804 l 809 804 l 809 621 l 509 621 l 509 387 l 809 387 l 809 205 l 509 205 l 509 0 l 299 0 l 299 205 l 0 205 l 0 387 l 299 387 l 299 621 "},ψ:{x_min:0,x_max:875,ha:979,o:"m 522 142 q 657 274 620 163 q 671 352 671 316 l 671 748 l 875 748 l 875 402 q 806 134 875 240 q 525 -22 719 -1 l 525 -278 l 349 -278 l 349 -22 q 65 135 152 -1 q 0 402 0 238 l 0 748 l 204 748 l 204 352 q 231 240 204 295 q 353 142 272 159 l 353 922 l 524 922 l 522 142 "},η:{x_min:0,x_max:669,ha:779,o:"m 669 -278 l 469 -278 l 469 390 q 448 526 469 473 q 348 606 417 606 q 244 553 288 606 q 201 441 201 501 l 201 0 l 0 0 l 0 749 l 201 749 l 201 665 q 301 744 244 715 q 423 774 359 774 q 606 685 538 774 q 669 484 669 603 l 669 -278 "}},I2="bold",U2=1216,N2=-100,O2="normal",D2={yMin:-333,xMin:-162,yMax:1216,xMax:1681},z2=1e3,F2={postscript_name:"Helvetiker-Bold",version_string:"Version 1.00 2004 initial release",vendor_url:"http://www.magenta.gr",full_font_name:"Helvetiker Bold",font_family_name:"Helvetiker",copyright:"Copyright (c) Magenta ltd, 2004.",description:"",trademark:"",designer:"",designer_url:"",unique_font_identifier:"Magenta ltd:Helvetiker Bold:22-10-104",license_url:"http://www.ellak.gr/fonts/MgOpen/license.html",license_description:`Copyright (c) 2004 by MAGENTA Ltd. All Rights Reserved.\r
\r
Permission is hereby granted, free of charge, to any person obtaining a copy of the fonts accompanying this license ("Fonts") and associated documentation files (the "Font Software"), to reproduce and distribute the Font Software, including without limitation the rights to use, copy, merge, publish, distribute, and/or sell copies of the Font Software, and to permit persons to whom the Font Software is furnished to do so, subject to the following conditions: \r
\r
The above copyright and this permission notice shall be included in all copies of one or more of the Font Software typefaces.\r
\r
The Font Software may be modified, altered, or added to, and in particular the designs of glyphs or characters in the Fonts may be modified and additional glyphs or characters may be added to the Fonts, only if the fonts are renamed to names not containing the word "MgOpen", or if the modifications are accepted for inclusion in the Font Software itself by the each appointed Administrator.\r
\r
This License becomes null and void to the extent applicable to Fonts or Font Software that has been modified and is distributed under the "MgOpen" name.\r
\r
The Font Software may be sold as part of a larger software package but no copy of one or more of the Font Software typefaces may be sold by itself. \r
\r
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL MAGENTA OR PERSONS OR BODIES IN CHARGE OF ADMINISTRATION AND MAINTENANCE OF THE FONT SOFTWARE BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM OTHER DEALINGS IN THE FONT SOFTWARE.`,manufacturer_name:"Magenta ltd",font_sub_family_name:"Bold"},k2=-334,H2="Helvetiker",V2=1549,B2=50,Ju={glyphs:q2,cssFontWeight:I2,ascender:U2,underlinePosition:N2,cssFontStyle:O2,boundingBox:D2,resolution:z2,original_font_information:F2,descender:k2,familyName:H2,lineHeight:V2,underlineThickness:B2};function G2(){const n={font:new Zu(Ju),size:.01,depth:1e-7};return{[Je.Knight]:new bt(Je.Knight,n),[Je.Orc]:new bt(Je.Orc,n),[Je.Cavalry]:new bt(Je.Cavalry,n),[Je.Ranged]:new bt(Je.Ranged,n),[Je.Magic]:new bt(Je.Magic,n),[Je.Beast]:new bt(Je.Beast,n),[Je.BladeMaster]:new bt(Je.BladeMaster,n),[Je.Dead]:new bt(Je.Dead,n),[Je.Light]:new bt(Je.Light,n),[Je.Dark]:new bt(Je.Dark,n),[Je.Armored]:new bt(Je.Armored,n)}}function W2(n){const i=new li(.1,1,.1),r=new Nu({color:63488}),s={};for(let o=0;o<6;o++){const a=new ft(i,r);n.add(a),s[o]=a,a.position.x=-.19+o%3*-.13,a.position.y=.01,a.position.z=.6+Math.floor(o/3)*(.1+.04)}return s}var $=(n=>(n.Soldier="Soldier",n.Orc="Orc",n.Slime="Slime",n.Lancer="Lancer",n.Priest="Priest",n.GreatswordSkeleton="Greatsword Skeleton",n))($||{});function X2(){const n={font:new Zu(Ju),size:.01,depth:1e-7};return{[$.Soldier]:new bt($.Soldier,n),[$.Orc]:new bt($.Orc,n),[$.Lancer]:new bt($.Lancer,n),[$.Priest]:new bt($.Priest,n),[$.GreatswordSkeleton]:new bt($.GreatswordSkeleton,n),[$.Slime]:new bt($.Slime,n)}}var H=(n=>(n.Idle="Idle",n.Walk="Walk",n.Attack="Attack",n.Ability="Ability",n.Hurt="Hurt",n.Death="Death",n))(H||{});const aa=[];function j2(){if(aa.length===0)return document.createElement("canvas");const n=aa.pop();if(!n)throw new Error("Canvas not found !");return n}function Z2(n){aa.push(n)}function We(n,e,t,i){const r=j2(),s=100,o=100;r.width=s,r.height=o;const a=r.getContext("2d");if(!a)throw new Error("Canvas 2d context not supported !");let l=!1,c=0;const u=new p1(r),A=80;let h=0,d=!1;const m=v=>{if(!d){if(v-h<A){requestAnimationFrame(m);return}h=v,a.clearRect(0,0,s,o),a.drawImage(l&&t?t.image:n.image,c*s,0,s,o,0,0,s,o),!(c===0&&l&&t===void 0)&&(c=(c+1)%(l&&i!==void 0?i:e),c===0&&(l=!0),u.needsUpdate=!0,requestAnimationFrame(m))}};return m(0),requestAnimationFrame(m),u.magFilter=Ft,u.colorSpace=Zt,[u,function(){d=!0,u.dispose(),Z2(r)}]}const J2="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAABkCAYAAABaQU4jAAAAAXNSR0IArs4c6QAABRFJREFUeJzt3U9o3GUex/GP4uai0kU0JM9C5tAeethjlYKn9CQIYmFXxPQgWyQLS72IJ4so9LRgkfYgUfRkFFalLqwaEVIvgit76p9QSis4QhJTEKoiS1R+HuKMk9qbJPP8Zl4vGDIzmcMDb+Y788sz80sCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQP1uGfYCgJ3VKaXpXf9iddVzfsj0gPEwEk9uA6suetSjU0qz99DhzExP5uziQhJNhkmP+phXdRmlHrcOewG/V29gzc7N928PeUljTY96dEpp3nj/o8xMT6a7tpEkmZ2b12RI9KiPeVWXUevR6jdYBlZd9KhHp5Tm+OlXkyRPzP0lM9OTOX761ZxdXNBkCPSoj3lVl1Hs0do3WAZWXfSoR6eU5uG/P7X9vj9NJ0n2Hjo8jCWNNT3qY17VZVR7tPINloFVFz3qdOHiSlaudrNytZskefPMf3J1+cyQVzW+9KiDeVWXUe5x27AX8HtcuLiy7XZvYM38sn/L7tJjuAaP8q5/+1323HlHLlxcyfnLnw9zWWNLj7qZV3UZxR6teoNlYNVFj3r0WvzrjdfzyGNH0l3byEyS7tpGrr219W21e/66Nai6axtbR4bLZ5q2f0unVnrUx7yqyzj0aM0W4eDASraG0vVvv8v5y5/n2lsL/aHV+93eQ4dbu2/bBnrU48YX896f1btrG7m6fCbn/v9D7r3rj3n32fmc/3jJttQO06M+5lVd9KhIp5SmU0rz34+Xm04pzaEj/+hfOqU0TdM0f5u+u/nm8rnmm8vn+o8RZGfoUZfBFv9+7eWm16dTSrP8ykv9DoMXLXaOHnUxr+qiR2UMrLroUZ/BFi88caB55qHJplNK8/jTzzePP/1888o7H/R/arHz9KiHeVWXcerRmv3+TinNqRPP5cnjz+XJB0u+/qqb1/93W/+EZPcfvC+ffPpZ7j94X04cO9r6M8DWTo/6dEppBls8MDGRpc3NbU1OHDvav1+TnaVHPW6cV6feW00S82pIxqVHqxZtYNVFj/r0jvQemJhIkixtbmZfrmffxD1Jkv1TU3mxu3WaAD12nh716M2rU++tbuthXg3HOPRo3YINrLroUZdOKc3s3Hx/OPVa7J+aSpJcWl/vD7Gziwua7DA96nKzHkl+M6/02B2j3qM13yIcNDs3nwMvvLTtxXz/1FT2T03l0vp6/zFt3bdtGz3q88mnn/WvX9m8lkvr6/0W7D496jLY42bzit01qj1adR6sQb0gBw/cnuT7/KH8lCR5eN9slk5+OMSVjSc96vDF6uotZxcXmiQ5cuDHJLcnSabL1hHh3n1/ztLJD1t5NNhGetTl5j1+O6/02B2j3qN1C05+3ZbqnV9mZnoyXy7+M0ny6Om3c+LY0SS2pHaLHvXplK3/Sp/cvIcWu0uPuuhRl1Ht0cpF93RKaXp7tleyJ0la/YG4ttOjLnrURY+66FGXUezRys9g3ehK9rQ2wCjSoy561EWPuuhRFz0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAMfUzdMN7K2+aKXMAAAAASUVORK5CYII=",Y2="data:image/png;base64,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",K2="data:image/png;base64,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",Q2="data:image/png;base64,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",$2="data:image/png;base64,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",ev="data:image/png;base64,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",tv="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAABkCAYAAABaQU4jAAAAAXNSR0IArs4c6QAABTxJREFUeJzt3d9r3Xcdx/FXR3cnW22XlXyD52QcGrBdYfUHiNKF4lDZhYyhCFsWGCruxquJopSAZWzMHzDozUAK0voDLwT/g3Imc+CQXcz94EBYF1jKHIvdjTcNHC+O35M0a1ZJmuTz/ebxgECbfBM+PU/yzjef7/meJgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFOXAXi8A2Dndqhre7P3vLi/73t8DesD+cXCvF7BdBlZZ9ChHt6qGvdnVPPn9x5MkE4cnkyS/eP5XSb8aarK79CiPeVWWtvVo5KJrnzSwFvsHGxulqfQoR93iK7NfzMzMTJK1Hknyg4df0GMX6VEe86osbexxx14vYKvWD6yNfvyTH+3BivY3Pcoz1TmaJBkMBhkMBvlg5er4bX7h1Ka/LbIz9CiHeVWWtvZo9CXC9QMrSTKz9rH5hVO5eC623XeRHmXY+IP64rnXkiTzC2t/f/CJI7f8fK1uDz3KtNV5pcfOaGOPRp5gGVhl0aMc3aoaPvO772QwGOTKO0u58s5SkmRuZWV8zNzKSpZy8x7dqhqevPfuvP6vj3ZlvW2nR3m2M6/0uP3a3KNxlwjrgTW/cCpJNh1Yn/T5J++9e2cXuY/oUZZ3l5cPnJ37Uy6eey3vLb2fZPTb39w//j4+5o4Xvpqfzf8+Dz5x5IbhVrfoPfq9nD1/Id2qGtZvu/8vaQc9yrKdeaXH7df2Ho3cMagfwN7saqY6RzN9XyePnX4uf/jrT8fHPHb6uTx78fG8dOnD8c7I+iD3nzieZ3743fHxdk+2To/y1E3unPwgSdKZ+fQNH18a/DvXr058rMWdp7+VzsSh3H/ieJLky5+5Kw8/8m09tkmPcmxlXumxc9rco5GXCOsHeLF/MEuTb+eVvJ2X+6/ecMwff/P5TQdW7ez5C+MgbJ0eZelW1fDs+QtJMj5pnXroSL729YcycXjyf3esXT+QLI+P39hi/LV6x3Zv4S2lR3nqHs8/+81bzis9dl5bezTyBMvAKose5ehW1fCRp57OP994c/y+M9PXcvlSMn3fIBNfmrzhCaPdqhrOfraX/luL+VySzsShvVt8C+lRlo09rl+dSPLxeZWs/TDXY+e0vUfjTrAMrLLoUZ6/vPjr8Z97s6u53D+UM9PXRk8eXRg9abQ3u5r0Rye6/bcWRzuLf74w7Dz1dJLRVnu3dywnTj5QzHZ7U+lRlvU9kpvPq5f7r+qxS9rco3EnWImBVRo9ylIPpMX+2rf31D2fytw9q+M7dBb7B1PffbP+8f5G7650jh0fX6bVYvv0KMv6HpvNq0SP3dLmHkUt5v/Rrarh+iBnpq8lGQ2sw0c7ef2NN3P5ymhXZGOQblUNX/zlz4sO0jR6lGf9XTSb9ah3Ezc+3l4y4/bToyx6lKXNPYpc1K1svCPn+tWJzH1hNUnGUX77t/80MkgT6VGeblUNb9VjL9e33+hRFj3K0tYejVx0rX55/anO0bx06cMko0tUTf1/i5pOj7LoURY9yqJHWdrYo3EvNLpRHaMOUL/cPntDj7LoURY9yqJHWfQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9rH/ApIYKTyLr5hGAAAAAElFTkSuQmCC",nv="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAABkCAYAAABaQU4jAAAAAXNSR0IArs4c6QAACNdJREFUeJzt3V2IXOUZB/BnRe+krtmsISd0JjJEMB+gsQVpidugtOpNQ61IzSZQrBoopYL9oEVSkqaVNhWkvYmkgZKPipSU9KKmN5KuogWtRlg3yspidqUj3bjbTQneuHZ6MXsms5P9mt3ZmTmb3w8Cm52zyeH8d87zzPue854IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGBWHa3eAaB++SQpVf99uFj0XgYAWIp8kpQGXn+1dGlstHRpbLRU23AB0FrXtnoHgMV57cP/xmsfvhkREQP9b8emLbeVjGQBtAcNFmRIOlL11O+OTPv+8ND7LdkfGuf0icPTRiHv2/moZhkyzBsYMiSfJKUtN90QhW9854rXHrv3zrh/x4Oux1oh0oZLowXZdE2rd4CrUz5JXDe0CMPFYkf/6MUY+vPvY+TCRIxcmKi8NvL+uRbuGY2WNlanTxwu1Y5uAe3PJyOaJm2ohovFjnySlA4d3Bd7fvgzIy6LkI5kXbftmxER8dbJ8pShY7myzNRYGdGCbPBGpWnSpqB/9GLs2PNkbN60Mb70+c+Z1lqk6uPp+K1cmizIJhe501CzTftVNwBpcxVRvhPOHXCLM3W8Sj23FqIvYtrxW0gOZMN9Ox/tqG2yLo2Nlq7vukmW0MYy32ApJO0jnySlQs9kfPvRnRER0b1qbURE/PpXv4noK+e0qmt1+bqhgXOVJovFGy4WO/oiSltuuiFiqsmaLwfvjdar97xV22S98re/aLIaSB1hOWS6wVJI2keaxZd7vnjFaz/68Q/i8b5nZ/1ZSwwsTTqSlTZZi82B5ljseWumkSyWTh1pPyul4c3sXYTzFXSab11uTUREDA4OxuDgYFwY/6jyZ/fe26dtO3JhIt4ZOBff+sodrsFqkE9uHYuI+XNw92brNPq8dWlsVJZLoI60nzSTA8cfigPHH4rnXnwinnvxiSj0TGbu3JXpEazqQhIREbdcfm333tvj6P7w6aMJan/pj+4/GxERu/de/vtdu7oiImJ87OPoP3kktj7wSNxb+Fxs2nKb5qoBhovFjnQaNjVXDrROo89bpgqXRh1pH0uZCWlHmWyw6inoc/28N83S5ZOkdOD4QzE4OBjnPxiJ8x+MRERE7/h4ZZve8fEYiXIeq7pWR4xejLdOHok9J2XQKPXmQPMt9bwVYZqwkRqRB423khrezE0RpoUknXKarZDM9fNT16rQAMPFYsdTvS/E0f1n418j/46I8pug983XK9tc8+zd8dPdJ+KuXV0xPvZx5eey8ibJgnpzyNpQe9Yt9bxVbaYlGkwV1qeRedAYMzW8R/efrVzq8FTvC5WcsiKTBS4NotAzGetya2L9zbl4eNvT8cdXflLZ5uFtT8cvj+6Ml4+NVUZJqh8zsnnTxjjwvUcq2yv2S5Nmct3aCxERkbvlxmmvjwz+Jz79qDus27S8FpqD4998iz1vzWSmhso0YX0amUct07b1qR2Bj4h4+dhY9I6PxzXP3h0REf974qUY+f6GurNopUzs5EzqLSTVK1/nujsrSwRY6HLp8klSSh8+nDatd+3qiq9+7Z7oXrU2Hr//8ry5Bmv5LSQPx781GtUAzzZipajXp5EfSE6fOFyyAOziLWfD2yqZvQartoCsu6e2gHzaEVGsbF/9WJFp/1ZhQ/N2fAXKJ0lpx54n452By8/B275+Is4ci1h/82B037k2du+9PV7teyOG+jL565YpC80jS9cxrBS1563Zm95iC/fy6tHoPKqbKyNY9UvX8BvquzZG1r4X/4j34tW+N6Zt8/zhOzI1Ap+5ildvAcknSXml63eHYmtE5Lo7W7fzK9SpQ89Uvi70TMaZvs7Yvn6ifNHo3vJceqGn/LrRq+W3kDxk0FzV561Th56Z8Zz18z1Lb6wU9oVZjjzSY5/ehCCL+qzEDyCZa7AiFlrQJyP6yiNXfe8OlcM5eaSU2/NkRJSnBvOFDZYJaICZRqjWrb4+eldPxtH9Z6caXkW9WebLg+ZKbz1Pz1uznbPc3dwc8mg/C2l4j+6PzOWRmR1N5ZOkVF1Atq+fiIhyAVm1Jhf9A+fizPnyKFXt9T75JCkdOrgvchs2xv07HoyIbIXVrqrv/pgtD8e5eeTRXqoLdT5JSrNlUuiZjIiY1hjPltNcdw0aNZnbcuRx+sTh0rZ7vx4R5ccYpV/LYn5pw5se5/Tr7esn4sz5zsoH9HryaBdtvXOzqb0w8dOPuqP3C+WDn75B/vDaJx355MrHHPhUsjzySVKaL49W7t/VRh7tpzaTiJiWy2//Wp76qF5Gpn/04hX/zkD/23P+P4r6wjQqj4iIQwf3VZqqWvKY20Ib3tRC8qjVqnqfySnCyohUlDvfdfd0xfFj5ceEFHpGYuh8Z0R8MuNB1Vgtj+FisWO+PGgeebSn3C03xrrcmnh5Ko/j/0w/tY9ExLWV50qm26fFZFXX6hgf+7i8UC8NI4/Wq55hKvRMxme5QjmP8xHl6606K6NZ9eSRrrm40CZsOWSywaqWvjnS7nddbk0MxVird+uqJY/2Io/2Up1H+r3aXGo+BJaLyVSRGHipr3k7exVYah5bp+5Mn230ivrMlsdn2woR5xeeR0REobszTh16pqWDKkZzANpcPklK800NpkxJLb98kpS2PlBeIijX3Rm/+O6uWbeVx/KrzSMiYvOmjZWL5iNaM3uVuUflAECrPXZnbtqi1bRWdR5pJps3bYxDB/e1bJ901gAZsJBRLKMlzSOP9pLm8fzf36x8r9VPahE+QEbMVdQV8+aTR3vJJ0npxVN/qjyhpdXrXPoFAMiQ6nXO0uKumLeOPNpLdR5WDQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgfv8HCKLKKyncuM8AAAAASUVORK5CYII=",iv="data:image/png;base64,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",rv="data:image/png;base64,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",sv="data:image/png;base64,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",ov="data:image/png;base64,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",av="data:image/png;base64,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",lv="data:image/png;base64,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",cv="data:image/png;base64,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",uv="data:image/png;base64,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",Av="data:image/png;base64,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",hv="data:image/png;base64,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",dv="data:image/png;base64,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",fv="data:image/png;base64,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",pv="data:image/png;base64,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",mv="data:image/png;base64,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",vv="data:image/png;base64,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",gv="data:image/png;base64,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",_v="data:image/png;base64,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",xv="data:image/png;base64,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",yv="data:image/png;base64,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",Sv="data:image/png;base64,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",bv="data:image/png;base64,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",Mv="data:image/png;base64,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",Ev="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAABkCAYAAABaQU4jAAAAAXNSR0IArs4c6QAABDtJREFUeJzt3L1qG1kYBuBvlzW4cKHGsAwxqgSp3KUJOJUL30dIGUIuYa/AGJdhr2Bxv0WqGNKsKlUCV0sW49KFC4MLbaE9YizrZ2xLo3PWzwMGSzOCQS/nfOdnRhEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADP89OmLwBYn25VjWa9//flpba/AfKAl+OXTV8AsB7dqhr99sdeREScX27fO/b1U4wU9XbJA14WDZqVmTc7TxSQ9qRiPl3I675+upBJS+SRH/0V62YFi5XoVtXo8KQXB9XtzOPnl9tm6S1bVMxpnzzyob+iDT9v+gIoX+qsljk86S2dNfJ83aoavXr/ZvL6oLqd/NXJox3yyIv+irYYYPEs9c5q3mywfkyn1a7pTOqvh4NO25fz4sljs/RXtKnoLUJ76JtVX2Zvsv3RP9uNnd5dHJ70LL+3YDjoxEF19eD9g+o2vvz56wau6GWTx2bpr/LWZCBbWgZFDrBSEE320CPKCwWe68PRlaKdEXnAbE3qeUSZNb24Adajlnj/O8/sY/36Z7vRj4jPH3/MPH58On48/eZiK4ZhK2Rd0tNq6fuOo9nn3VxsmZ23QB550l/loWk9nxwvrKYXdQ/Wsic/pvXPdmM46NhH50VIN1MvWymZFPsYb1u9ev9G+1gDecB8j63nEeXV9KIGWHX9s917HdO0ezMQN4+uXCoeB9XtvRyOT/cmf/X3ppXSQEox/aRasqiN1CnqqyWPvOiv8rasnkeUWdOzX2JLUgP5cHQ1N4i03Dt9fKd3F6/3r/2Q34qkbY80M7+52Gr82Z3e3eT/f37/Sx4r0DSPzx9/zGwbiTxWQx550V/loz5IXVbPI8qv6dnfg5UCGTeQWLjcPiuo1EBKGfHmrltVo867txEx+94F2vWYPJqunvB08siL/ioP9ToeMb5hfThYXM8jyq/p2W4RdqtqlPZoO+/exvHpXrzev46I8Rdcn1nMUz8nfZanqecREfLYMHnkRR55kUc+Ug6HJ704v9yO49O96J/tPjqPdG5SQiZZrmClQIaDTgwHD7/U4aAz/nL3F49i753Lk8kjL/LIizzyIo981LNInprHg/MLkO3eZX2vdrzE+1CTUW/ab7/+9j3rvdrcySMv8siLPPIij3w0ySJZlkn9/rkSMsn64pJZT28sCyq5/vY9Isr5YbISyCMv8siLPPIij3wsehKzSSYpjwiZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP87/wJveOHROGlUSAAAAABJRU5ErkJggg==",Tv="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAABkCAYAAABaQU4jAAAAAXNSR0IArs4c6QAABR5JREFUeJzt3L9rVWcYB/BvoYJDhkCxLbeGQCAlS510qBAnoQ4tDvof2I4SXEqHLm6FDiIuBfEvKE5dLGSq4GKmdAkELhYlFFwyOAgZ0iF9k3Nvzr3JTW5uzjGfz3R/nMTD+/W8z3Pec04SAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa5aPT3gHgeGY7ne1h3/+zseE4B5iwj097B/hwKPSTN9vpbF9/OJ/Fzvva759vnM/yUraNPcBkabAYC4V+8sqYH+T6w3ljDzBhJlyOrVrohzVYSbK8tG4lawwOM+aFsW+fYavBMpw8eTRLW/JozI7QTgr95FVXC59vnD9w3B88msnU/FYWLm0a+4arFo6Ld67sfr5waXP39fLS+u5rWZ4seTRL2/Jo9SVC9/ycrv5Cf5CVpxcyNb/lkhXUKPPZ/d9n8vjZ5z1Fo6qc0Cwvre/+jGNp/OTRLG3Mo5UNVhm0w9zzk/jPzodr5emFrCS5d/d17fcPHs0kSd6tn8tapie4Z4xittPZLoXj8bOdz9ZWpwcWkWR/ITHPjY88mqWtebSuwTrsJanFzvtkd4Ctlpw0hR5GVz1ZfL6xd6mjbm4rq8Tlu/L+unlubMadx2+/3s/c3FzPz33x5VcD//2pTz6VX0Xbj49WNVguScGO5aX1rFy7uvu+NLDJXpNb/axwLDRDtXAkO3NVUn+C8tmr75Mkt8sHr5K5ubl8fXFvm263m4d/30ySobdN9FPQd4ySR7HYeZ8Hj2Zy+7tvkuzlUxqqH5/ubTusqWK/4+SxWLPN2ur0zj1bT15OdO5r1cFVbbBK8ThoxSRJpua38ubJS5cKx2i209m+eOdKfrjxb20hTwYXejdcH1+ZgKYrTdYwU/NbPe/fPHmZxOXzSSu5XbxzJe/Wz/V8V53LSlPVrxTv4xRsTdWew+YxTMmqf6WqOGxWchlPHnX1Jsmp1JzWBKqgN0f1eniSfQfCMNVCr+k9nmGTUb/+BqvQaJ28uiefBuVV5rBxFe06Z72Qj5rHoGa3zlHzOsuZHOX4GKR/YaU4rXmu8aH2PzmQKOinabbT2Z6+djX37r6WRwOUE4+D1GXUhAnoQzcsn7pMfvn/clMyuFjX6Xa7SZLFGzd3PzvLRXuQUfNIDr5KUo6jnxe+rd2ummNptGSz4yTzKIsqyenNa40NuXoNtlx/vXzrbdZW926QHuWs3QrW8cijWeTRTP1/Ouag5vfd+rmepiqpb6y63W5++uPPntX4REN8kKPkMQp5jOas5dHIm9zLvVZrq9NZW91fCHYfz7yUnoLSr2dbjkwezSKPZqo+4VzGvYxtaYKTvhWPhf2/p6xG9Sv3kr7J6ReONhg1j/7Xyf4CXwp4+X3yOLyzmEcjdqJOtdMddCPvoPtKqkogm3+9aMygt5E8mkUezVT3x4+rT0JdvvU2yf7Gt1o4Lt9627NtksackbeNPJrlrOXRqJ0ZpC6Uwz49tfnXiyTNG/g2k0ezyKPZDtMM1ynZJPIZJ3k0izwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkiT/AXM1h3CYKuxjAAAAAElFTkSuQmCC",wv="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAABkCAYAAABaQU4jAAAAAXNSR0IArs4c6QAABBFJREFUeJzt27FqI1cUgOGTsIYtXKgxBOHFlcCVq2wTUCoV6fMIJuVi9hHyBMa4XPYJgvstXMWQZlWpErgKu5hAGhcuDC6cQrlmVsjSSLoznpG+rzKybAb9vufOjOQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAXsp3L30AAFC3g273cdbjf9/c2BfJ4tVLHwDANnhuQ4+wqdcpdRic9aLfvf/me1c3r+PyJB4jNGF9rf4DmjewEouEbbVofVgb9Zi3oUekTf06IjSp2kG3+zg460VEzGwRMekREXF5cq1HjTZxXrXyDtaigZW4GqlXmRPeRI/qlFkf1kY9ymzo/e59xP/PuTyJRz2qkVr0u/dPJ1GzDC/2Yrf3EIOznh412OR51boTrDIDKzG46lH2hDdp62Jpg7Lrw9qoXtkNPcKmXrfhxV7033159vt31zsRRzUe0Jba9Hn1/UsfwDKKA6us4cVejEedGJz1lrrDQjmpyTJd+t37SD+jST7Lrg9rg212ev5m7mPjUafOw9k62zCvWncHKxle7MUwIt7PuQpJi+XueifGYbHkVlwgp+dvFvZIikNs/7gT8fFza65I2mLR+rA26jWrx/QGr0V1Drrdx/3jtzG82Ilh4fHU4P27LzNPuNxRrMemzqvG/9EUz1T3j9/Gb7/8M3MhJCnQ9HN2ew9xeHTrg4uZpIFVtkeiSzXK9LA2qrfsvJqmRV7r9NCiGqnJNsyrxh5civD7H5MX9+rm9dMt27vrnaV+127v4enrrx8/Nz5K08y6HTs4663cI9FlNTl7aJBHjnmlRT7r9tAiv+kmHz79EBGbPa8a+RZh8YNvVzeT24cRET/++m+MR52nF3nZhXJ4dBtfKzjeTTb9Pnm6mhiPJlcRy/ZIdFlNzh4a5JFjXmmRz7o9tMir+E9QERGn56vt523s0rgTrLQ4ih8wnH5hx6NOHB7dRhwt/iDiN89nKcUW49HksWKLiOV7zPw5SsndQ4P15ZpXWuSRo4cW+SyaWZs+rxp5e634Fkjn55/mPnd6g5lWPCu+/fOvxt9SbJrpt6PW7ZHospqcPTTII8e80iKfdXtokVeu/byNXRp/gPP+HXNRrIhJiKQNQZpu3R6JLnms00OD/FbtoUU1VumhRXXMKwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIBn/QctrNYyujIomwAAAABJRU5ErkJggg==",Pv="data:image/png;base64,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",Rv="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAABkCAYAAACoy2Z3AAAAAXNSR0IArs4c6QAABFBJREFUeJzt3DFPW1cYBuCvja0iBRcqlMVJxBJLTMAShqptIjVqN4b8hUgsGbrnB2RtoqoLUvsHIjp0S9RIbVploCgCJkvOgtpmQ4FApVRQuYN1qA3GvgpgLtznmWzfMxz40Hn5zjkQAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABA8t5pT6Cf8Wq1mWXc2qtXuf9azoP1SiVTPca2ttRjAGbL5Uz1+HFnRz0GoGjrVem0J9DLeLXavPWwtvf+0+rbA2N+fTUUERE/fRXN81KUvFqvVJr35i7svf+ktntgzG+N1o/U+nylKURO1my53Lw5P733fvrqPwfGLP/xQevF3HJTiJysIq5Xuf0CshQj+b8ojXOT7HmTJTySFCL35//ViZyQLOGRpBD5eW5ZJ3JCirpevX/aE+gmFSMVoVcxIiKWFi5FfXU0bj2sZW4hyS6FRwqNXuEREbH0aDjqi0Nxb+5C5i0vskvhkUKjV3hERLxYGIvGykjcnJ/OvOVFdkVer3IZIO2WFi7F199cPfR5erbdKEd9dXRQ0yqspUfD8eD+4d/n9Gx7rRT1xaFBTauwXiyMxfcPqoc+T8+2XpaisTIyqGkVVtHWq9wHSNKrKAxerxBh8HqFCINXlPUqt/tv49Vq88qd6xHRSusshms7MTG5cS72FvNmvVJp3p6+GBGt7iKL4fHdmJh56yzkBMyWy83Ld29ERKu7yKJybTdqU5vOQk5AUderXE867Q9euXO9b1GGazsd7//87ve912e1OHmTzjNuT1/sGyLD453nJD8s/733Wpgcj3Secfnujb4hUrnWWY+/vv1l77UwOR5FXK9yP9H2ZO+lW8FSkVJxzlJh8qq9E+mlW8CkUElhIkiOrr0T6aVbwKRQSWEiSI6uaOtVbs9AxqvVZrrdsN0ox3ajHBOTGx1j0uf90v7Knevn4sbDaVqvVJrpNtb2Wim210oxMdN52yR93q87uT190Q2tI5otl5vpNtbWy1JsvSxFbWqzY0z6vF93cvnuDTe0jqio61Uu/5AwFaK+Ohr11c52b2JyI+qro63iTEbPmwwdY3lnKTjqi0MRi53bUxMzb6O+ONQKk5noefOqYyzvLAVHY2UkGiud21O1qc1orIy0wmQqet686hjLOyvyepXbFqk9fUc/+7jrmP37iN2ktN949vxMtIR51d4tfPFR90Vp/7lHN6k7efJ60xbWEbR3Cx9++XnXMfvPPbpJ3cmbx09tYR1BUder3E8wovv/lzmsSPttPHseEWdjP/Gs6Lb1dFio7Pfkdeu3XeFxfLptPR0WKvu9efw0Ipx/HCfrFQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJx5/wGCSPrxfcFTxwAAAABJRU5ErkJggg==",Cv="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAABkCAYAAACoy2Z3AAAAAXNSR0IArs4c6QAAArlJREFUeJzt2rFqU1EYB/BPUOjQoUuWi5Ip0KmTLkKdOrj7COIoxUfwCaQ4+wSSN+jUQhczdSp0EiUILhkcCh3iUE49uSRttElzTvz9ppB7Aif3yz3/+52bCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA7t+DVU/gX3SbZnzT8a/DYZXfC6AmD1c9gb+RgmPvoBe7zcXUMcfDjTjcj3GEIAFYpmoW2G7TjPcOehERM8MjOR5uRETE4f65EAFYkio6kBQeu83FdTjcZNDvxGbvMvYOenG4H2Mhsjy3bScmagDrp4oAyQ36nRhExLu336Ye//DxSURE/Dp/FGexdY8z+7/Ms52Y2FaE9VT8xdxtmvHj18/izcsf1+HQlsKkfXyzdxnbOyNbWQuWd4TpnN8W6BFX9fj+6YtaLNGsjtA5ZxmK/1GlAIm46irmtdm7vH5t0Voc9ShXt2nG7z9P3kSlAB8dnUy87/yzCMX+iPItkoiIs9M/21G3LVz5YrW9M4oID9TvSj3KlHcc8wZ76gQTdViOm54Prss5L/JLpC2StEilRefsdGvi9SzbO6OJsYN+J0ZHJ2tTtPumHmVK3eC0egz6nZmfe/rq58RYYb5YKTjy2kRMXiN5gLfVVItiJ5qn99aL51PH5He2s6S7MQvW3ahHWdSjTHmn3g7xdaxH8ROMmN4Kzrpo2tLebw3FqIV6lEU9Vi/vOpLUeUfM/7ywtnpUMUmAUrW3EpPUgeR/YGiPS2Nq/YdiVZMFKNG0DiQ958hDIe8WawsLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWLnfybZOXKBzAxUAAAAASUVORK5CYII=",Xe=new K1,Yu={Soldier:{Idle:Xe.load(J2),Attack:Xe.load(Y2),Walk:Xe.load(K2),Ability:Xe.load(Q2),Hurt:Xe.load($2),Death:Xe.load(ev)},Orc:{Idle:Xe.load(tv),Attack:Xe.load(nv),Walk:Xe.load(iv),Ability:Xe.load(rv),Hurt:Xe.load(sv),Death:Xe.load(ov)},Lancer:{Idle:Xe.load(av),Attack:Xe.load(lv),Walk:Xe.load(cv),Ability:Xe.load(uv),Hurt:Xe.load(Av),Death:Xe.load(hv)},Priest:{Idle:Xe.load(dv),Attack:Xe.load(fv),Walk:Xe.load(pv),Ability:Xe.load(mv),Hurt:Xe.load(vv),Death:Xe.load(gv)},[$.GreatswordSkeleton]:{Idle:Xe.load(_v),Attack:Xe.load(xv),Walk:Xe.load(yv),Ability:Xe.load(Sv),Hurt:Xe.load(bv),Death:Xe.load(Mv)},Slime:{Idle:Xe.load(Ev),Attack:Xe.load(Tv),Walk:Xe.load(wv),Ability:Xe.load(Pv),Hurt:Xe.load(Rv),Death:Xe.load(Cv)}};function Se(n,e){return Yu[n][e]}const Lv=async function n(e=0){if(e>20)throw new Error("Textures loading timed out !");if(!Object.values(Yu).flatMap(i=>Object.values(i)).every(i=>!!i.image))return await new Promise(i=>setTimeout(i,15)),n(e+1)}();function Kn(n,e){return{[$.Soldier]:{[H.Idle]:()=>We(Se($.Soldier,H.Idle),6,Se($.Soldier,H.Idle),6),[H.Attack]:()=>We(Se($.Soldier,H.Attack),6,Se($.Soldier,H.Idle),6),[H.Walk]:()=>We(Se($.Soldier,H.Walk),8,Se($.Soldier,H.Walk),8),[H.Ability]:()=>We(Se($.Soldier,H.Ability),8,Se($.Soldier,H.Idle),6),[H.Hurt]:()=>We(Se($.Soldier,H.Hurt),4,Se($.Soldier,H.Idle),6),[H.Death]:()=>We(Se($.Soldier,H.Death),4)},[$.Orc]:{[H.Idle]:()=>We(Se($.Orc,H.Idle),6,Se($.Orc,H.Idle),6),[H.Attack]:()=>We(Se($.Orc,H.Attack),6,Se($.Orc,H.Idle),6),[H.Walk]:()=>We(Se($.Orc,H.Walk),8,Se($.Orc,H.Walk),8),[H.Ability]:()=>We(Se($.Orc,H.Ability),6,Se($.Orc,H.Idle),6),[H.Hurt]:()=>We(Se($.Orc,H.Hurt),4,Se($.Orc,H.Idle),6),[H.Death]:()=>We(Se($.Orc,H.Death),4)},[$.Lancer]:{[H.Idle]:()=>We(Se($.Lancer,H.Idle),6,Se($.Lancer,H.Idle),6),[H.Attack]:()=>We(Se($.Lancer,H.Attack),6,Se($.Lancer,H.Idle),6),[H.Walk]:()=>We(Se($.Lancer,H.Walk),8,Se($.Lancer,H.Walk),8),[H.Ability]:()=>We(Se($.Lancer,H.Ability),8,Se($.Lancer,H.Idle),6),[H.Hurt]:()=>We(Se($.Lancer,H.Hurt),4,Se($.Lancer,H.Idle),6),[H.Death]:()=>We(Se($.Lancer,H.Death),4)},[$.Priest]:{[H.Idle]:()=>We(Se($.Priest,H.Idle),6,Se($.Priest,H.Idle),6),[H.Attack]:()=>We(Se($.Priest,H.Attack),9,Se($.Priest,H.Idle),6),[H.Walk]:()=>We(Se($.Priest,H.Walk),8,Se($.Priest,H.Walk),8),[H.Ability]:()=>We(Se($.Priest,H.Ability),6,Se($.Priest,H.Idle),6),[H.Hurt]:()=>We(Se($.Priest,H.Hurt),4,Se($.Priest,H.Idle),6),[H.Death]:()=>We(Se($.Priest,H.Death),4)},[$.GreatswordSkeleton]:{[H.Idle]:()=>We(Se($.GreatswordSkeleton,H.Idle),6,Se($.GreatswordSkeleton,H.Idle),6),[H.Attack]:()=>We(Se($.GreatswordSkeleton,H.Attack),9,Se($.GreatswordSkeleton,H.Idle),6),[H.Walk]:()=>We(Se($.GreatswordSkeleton,H.Walk),9,Se($.GreatswordSkeleton,H.Walk),9),[H.Ability]:()=>We(Se($.GreatswordSkeleton,H.Ability),12,Se($.GreatswordSkeleton,H.Idle),6),[H.Hurt]:()=>We(Se($.GreatswordSkeleton,H.Hurt),4,Se($.GreatswordSkeleton,H.Idle),6),[H.Death]:()=>We(Se($.GreatswordSkeleton,H.Death),4)},[$.Slime]:{[H.Idle]:()=>We(Se($.Slime,H.Idle),6,Se($.Slime,H.Idle),6),[H.Attack]:()=>We(Se($.Slime,H.Attack),6,Se($.Slime,H.Idle),6),[H.Walk]:()=>We(Se($.Slime,H.Walk),6,Se($.Slime,H.Walk),6),[H.Ability]:()=>We(Se($.Slime,H.Ability),12,Se($.Slime,H.Idle),6),[H.Hurt]:()=>We(Se($.Slime,H.Hurt),4,Se($.Slime,H.Idle),6),[H.Death]:()=>We(Se($.Slime,H.Death),4)}}[n][e]()}function qv(){return{[$.Soldier]:new Rt({map:Kn($.Soldier,H.Idle)[0],transparent:!0}),[$.Orc]:new Rt({map:Kn($.Orc,H.Idle)[0],transparent:!0}),[$.Lancer]:new Rt({map:Kn($.Lancer,H.Idle)[0],transparent:!0}),[$.Priest]:new Rt({map:Kn($.Priest,H.Idle)[0],transparent:!0}),[$.GreatswordSkeleton]:new Rt({map:Kn($.GreatswordSkeleton,H.Idle)[0],transparent:!0}),[$.Slime]:new Rt({map:Kn($.Slime,H.Idle)[0],transparent:!0})}}function Iv(){const n=qv(),e=R2();return{benchHeroGeometry:new zt(1,1),benchHeroMaterials:n,benchHeroMeshes:{},benchSlotMeshes:W2(e),camera:Du(),pieceAnimatedTextures:{},pieceBarsBackgroundGeometry:new zt(1,1),pieceBarsBackgroundMaterial:new Rt({color:0}),pieceBarsBackgroundMeshes:{},pieceGeometry:new zt(1,1),pieceGradeGeometry:new Ca(.005,32),pieceGradeMaterial:new Rt({color:16766720}),pieceGradeMeshes:{},pieceHealthBarGeometries:{},pieceHealthBarMaterial:new Rt({color:16711680}),pieceHealthBarMeshes:{},pieceMaterials:{},pieceMeshes:{},scene:e,shopProductAppellationGeometry:X2(),shopProductAppellationMaterial:new Rt({color:0}),shopProductAppellationMeshes:{},shopProductBackgroundGeometry:new zt(.1,.15),shopProductBackgroundMaterial:new Rt({color:16766720}),shopProductBackgroundMeshes:{},shopProductImageGeometry:new zt(.1,.1),shopProductImageMaterial:n,shopProductImageMeshes:{},shopProductTraitGeometry:G2(),shopProductTraitMaterial:new Rt({color:0}),shopProductTraitMeshes:{}}}var ni=256,Ku=[],lc=256,Kr;for(;ni--;)Ku[ni]=(ni+256).toString(16).substring(1);function Qr(n){var e=0,t=11;if(!Kr||ni+t>lc*2)for(Kr="",ni=0;e<lc;e++)Kr+=Ku[Math.random()*256|0];return Kr.substring(ni,ni+++t)}function Uv(n){if(!(typeof window>"u")){var e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=n,document.head.appendChild(e),n}}function qi(n,e){var t=n.__state.conversionName.toString(),i=Math.round(n.r),r=Math.round(n.g),s=Math.round(n.b),o=n.a,a=Math.round(n.h),l=n.s.toFixed(1),c=n.v.toFixed(1);if(e||t==="THREE_CHAR_HEX"||t==="SIX_CHAR_HEX"){for(var u=n.hex.toString(16);u.length<6;)u="0"+u;return"#"+u}else{if(t==="CSS_RGB")return"rgb("+i+","+r+","+s+")";if(t==="CSS_RGBA")return"rgba("+i+","+r+","+s+","+o+")";if(t==="HEX")return"0x"+n.hex.toString(16);if(t==="RGB_ARRAY")return"["+i+","+r+","+s+"]";if(t==="RGBA_ARRAY")return"["+i+","+r+","+s+","+o+"]";if(t==="RGB_OBJ")return"{r:"+i+",g:"+r+",b:"+s+"}";if(t==="RGBA_OBJ")return"{r:"+i+",g:"+r+",b:"+s+",a:"+o+"}";if(t==="HSV_OBJ")return"{h:"+a+",s:"+l+",v:"+c+"}";if(t==="HSVA_OBJ")return"{h:"+a+",s:"+l+",v:"+c+",a:"+o+"}"}return"unknown format"}var cc=Array.prototype.forEach,$i=Array.prototype.slice,Y={BREAK:{},extend:function(e){return this.each($i.call(arguments,1),function(t){var i=this.isObject(t)?Object.keys(t):[];i.forEach((function(r){this.isUndefined(t[r])||(e[r]=t[r])}).bind(this))},this),e},defaults:function(e){return this.each($i.call(arguments,1),function(t){var i=this.isObject(t)?Object.keys(t):[];i.forEach((function(r){this.isUndefined(e[r])&&(e[r]=t[r])}).bind(this))},this),e},compose:function(){var e=$i.call(arguments);return function(){for(var t=$i.call(arguments),i=e.length-1;i>=0;i--)t=[e[i].apply(this,t)];return t[0]}},each:function(e,t,i){if(e){if(cc&&e.forEach&&e.forEach===cc)e.forEach(t,i);else if(e.length===e.length+0){var r=void 0,s=void 0;for(r=0,s=e.length;r<s;r++)if(r in e&&t.call(i,e[r],r)===this.BREAK)return}else for(var o in e)if(t.call(i,e[o],o)===this.BREAK)return}},defer:function(e){setTimeout(e,0)},debounce:function(e,t,i){var r=void 0;return function(){var s=this,o=arguments;function a(){r=null,i||e.apply(s,o)}var l=i||!r;clearTimeout(r),r=setTimeout(a,t),l&&e.apply(s,o)}},toArray:function(e){return e.toArray?e.toArray():$i.call(e)},isUndefined:function(e){return e===void 0},isNull:function(e){return e===null},isNaN:function(n){function e(t){return n.apply(this,arguments)}return e.toString=function(){return n.toString()},e}(function(n){return isNaN(n)}),isArray:Array.isArray||function(n){return n.constructor===Array},isObject:function(e){return e===Object(e)},isNumber:function(e){return e===e+0},isString:function(e){return e===e+""},isBoolean:function(e){return e===!1||e===!0},isFunction:function(e){return e instanceof Function}},Nv=[{litmus:Y.isString,conversions:{THREE_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString()+t[1].toString()+t[2].toString()+t[2].toString()+t[3].toString()+t[3].toString(),0)}},write:qi},SIX_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9]{6})$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString(),0)}},write:qi},CSS_RGB:{read:function(e){var t=e.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3])}},write:qi},CSS_RGBA:{read:function(e){var t=e.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3]),a:parseFloat(t[4])}},write:qi}}},{litmus:Y.isNumber,conversions:{HEX:{read:function(e){return{space:"HEX",hex:e,conversionName:"HEX"}},write:function(e){return e.hex}}}},{litmus:Y.isArray,conversions:{RGB_ARRAY:{read:function(e){return e.length!==3?!1:{space:"RGB",r:e[0],g:e[1],b:e[2]}},write:function(e){return[e.r,e.g,e.b]}},RGBA_ARRAY:{read:function(e){return e.length!==4?!1:{space:"RGB",r:e[0],g:e[1],b:e[2],a:e[3]}},write:function(e){return[e.r,e.g,e.b,e.a]}}}},{litmus:Y.isObject,conversions:{RGBA_OBJ:{read:function(e){return Y.isNumber(e.r)&&Y.isNumber(e.g)&&Y.isNumber(e.b)&&Y.isNumber(e.a)?{space:"RGB",r:e.r,g:e.g,b:e.b,a:e.a}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b,a:e.a}}},RGB_OBJ:{read:function(e){return Y.isNumber(e.r)&&Y.isNumber(e.g)&&Y.isNumber(e.b)?{space:"RGB",r:e.r,g:e.g,b:e.b}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b}}},HSVA_OBJ:{read:function(e){return Y.isNumber(e.h)&&Y.isNumber(e.s)&&Y.isNumber(e.v)&&Y.isNumber(e.a)?{space:"HSV",h:e.h,s:e.s,v:e.v,a:e.a}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v,a:e.a}}},HSV_OBJ:{read:function(e){return Y.isNumber(e.h)&&Y.isNumber(e.s)&&Y.isNumber(e.v)?{space:"HSV",h:e.h,s:e.s,v:e.v}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v}}}}}],er=void 0,$r=void 0,la=function(){$r=!1;var e=arguments.length>1?Y.toArray(arguments):arguments[0];return Y.each(Nv,function(t){if(t.litmus(e))return Y.each(t.conversions,function(i,r){if(er=i.read(e),$r===!1&&er!==!1)return $r=er,er.conversionName=r,er.conversion=i,Y.BREAK}),Y.BREAK}),$r},uc=void 0,xs={hsv_to_rgb:function(e,t,i){var r=Math.floor(e/60)%6,s=e/60-Math.floor(e/60),o=i*(1-t),a=i*(1-s*t),l=i*(1-(1-s)*t),c=[[i,l,o],[a,i,o],[o,i,l],[o,a,i],[l,o,i],[i,o,a]][r];return{r:c[0]*255,g:c[1]*255,b:c[2]*255}},rgb_to_hsv:function(e,t,i){var r=Math.min(e,t,i),s=Math.max(e,t,i),o=s-r,a=void 0,l=void 0;if(s!==0)l=o/s;else return{h:NaN,s:0,v:0};return e===s?a=(t-i)/o:t===s?a=2+(i-e)/o:a=4+(e-t)/o,a/=6,a<0&&(a+=1),{h:a*360,s:l,v:s/255}},rgb_to_hex:function(e,t,i){var r=this.hex_with_component(0,2,e);return r=this.hex_with_component(r,1,t),r=this.hex_with_component(r,0,i),r},component_from_hex:function(e,t){return e>>t*8&255},hex_with_component:function(e,t,i){return i<<(uc=t*8)|e&~(255<<uc)}},Ov=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Kt=function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")},Qt=function(){function n(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}}(),Nn=function n(e,t,i){e===null&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(r===void 0){var s=Object.getPrototypeOf(e);return s===null?void 0:n(s,t,i)}else{if("value"in r)return r.value;var o=r.get;return o===void 0?void 0:o.call(i)}},kn=function(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)},Hn=function(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:n},xt=function(){function n(){if(Kt(this,n),this.__state=la.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return Qt(n,[{key:"toString",value:function(){return qi(this)}},{key:"toHexString",value:function(){return qi(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),n}();function Ua(n,e,t){Object.defineProperty(n,e,{get:function(){return this.__state.space==="RGB"?this.__state[e]:(xt.recalculateRGB(this,e,t),this.__state[e])},set:function(r){this.__state.space!=="RGB"&&(xt.recalculateRGB(this,e,t),this.__state.space="RGB"),this.__state[e]=r}})}function Na(n,e){Object.defineProperty(n,e,{get:function(){return this.__state.space==="HSV"?this.__state[e]:(xt.recalculateHSV(this),this.__state[e])},set:function(i){this.__state.space!=="HSV"&&(xt.recalculateHSV(this),this.__state.space="HSV"),this.__state[e]=i}})}xt.recalculateRGB=function(n,e,t){if(n.__state.space==="HEX")n.__state[e]=xs.component_from_hex(n.__state.hex,t);else if(n.__state.space==="HSV")Y.extend(n.__state,xs.hsv_to_rgb(n.__state.h,n.__state.s,n.__state.v));else throw new Error("Corrupted color state")};xt.recalculateHSV=function(n){var e=xs.rgb_to_hsv(n.r,n.g,n.b);Y.extend(n.__state,{s:e.s,v:e.v}),Y.isNaN(e.h)?Y.isUndefined(n.__state.h)&&(n.__state.h=0):n.__state.h=e.h};xt.COMPONENTS=["r","g","b","h","s","v","hex","a"];Ua(xt.prototype,"r",2);Ua(xt.prototype,"g",1);Ua(xt.prototype,"b",0);Na(xt.prototype,"h");Na(xt.prototype,"s");Na(xt.prototype,"v");Object.defineProperty(xt.prototype,"a",{get:function(){return this.__state.a},set:function(e){this.__state.a=e}});Object.defineProperty(xt.prototype,"hex",{get:function(){return this.__state.space!=="HEX"&&(this.__state.hex=xs.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(e){this.__state.space="HEX",this.__state.hex=e}});var ci=function(){function n(e,t){Kt(this,n),this.initialValue=e[t],this.domElement=document.createElement("div"),this.object=e,this.property=t,this.__onChange=void 0,this.__onFinishChange=void 0}return Qt(n,[{key:"onChange",value:function(t){return this.__onChange=t,this}},{key:"onFinishChange",value:function(t){return this.__onFinishChange=t,this}},{key:"setValue",value:function(t){return this.object[this.property]=t,this.__onChange&&this.__onChange.call(this,t),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),n}(),Dv={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},Qu={};Y.each(Dv,function(n,e){Y.each(n,function(t){Qu[t]=e})});var zv=/(\d+(\.\d+)?)px/;function en(n){if(n==="0"||Y.isUndefined(n))return 0;var e=n.match(zv);return Y.isNull(e)?0:parseFloat(e[1])}var O={makeSelectable:function(e,t){e===void 0||e.style===void 0||(e.onselectstart=t?function(){return!1}:function(){},e.style.MozUserSelect=t?"auto":"none",e.style.KhtmlUserSelect=t?"auto":"none",e.unselectable=t?"on":"off")},makeFullscreen:function(e,t,i){var r=i,s=t;Y.isUndefined(s)&&(s=!0),Y.isUndefined(r)&&(r=!0),e.style.position="absolute",s&&(e.style.left=0,e.style.right=0),r&&(e.style.top=0,e.style.bottom=0)},fakeEvent:function(e,t,i,r){var s=i||{},o=Qu[t];if(!o)throw new Error("Event type "+t+" not supported.");var a=document.createEvent(o);switch(o){case"MouseEvents":{var l=s.x||s.clientX||0,c=s.y||s.clientY||0;a.initMouseEvent(t,s.bubbles||!1,s.cancelable||!0,window,s.clickCount||1,0,0,l,c,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var u=a.initKeyboardEvent||a.initKeyEvent;Y.defaults(s,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),u(t,s.bubbles||!1,s.cancelable,window,s.ctrlKey,s.altKey,s.shiftKey,s.metaKey,s.keyCode,s.charCode);break}default:{a.initEvent(t,s.bubbles||!1,s.cancelable||!0);break}}Y.defaults(a,r),e.dispatchEvent(a)},bind:function(e,t,i,r){var s=r||!1;return e.addEventListener?e.addEventListener(t,i,s):e.attachEvent&&e.attachEvent("on"+t,i),O},unbind:function(e,t,i,r){var s=r||!1;return e.removeEventListener?e.removeEventListener(t,i,s):e.detachEvent&&e.detachEvent("on"+t,i),O},addClass:function(e,t){if(e.className===void 0)e.className=t;else if(e.className!==t){var i=e.className.split(/ +/);i.indexOf(t)===-1&&(i.push(t),e.className=i.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return O},removeClass:function(e,t){if(t)if(e.className===t)e.removeAttribute("class");else{var i=e.className.split(/ +/),r=i.indexOf(t);r!==-1&&(i.splice(r,1),e.className=i.join(" "))}else e.className=void 0;return O},hasClass:function(e,t){return new RegExp("(?:^|\\s+)"+t+"(?:\\s+|$)").test(e.className)||!1},getWidth:function(e){var t=getComputedStyle(e);return en(t["border-left-width"])+en(t["border-right-width"])+en(t["padding-left"])+en(t["padding-right"])+en(t.width)},getHeight:function(e){var t=getComputedStyle(e);return en(t["border-top-width"])+en(t["border-bottom-width"])+en(t["padding-top"])+en(t["padding-bottom"])+en(t.height)},getOffset:function(e){var t=e,i={left:0,top:0};if(t.offsetParent)do i.left+=t.offsetLeft,i.top+=t.offsetTop,t=t.offsetParent;while(t);return i},isActive:function(e){return e===document.activeElement&&(e.type||e.href)}},$u=function(n){kn(e,n);function e(t,i){Kt(this,e);var r=Hn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i)),s=r;r.__prev=r.getValue(),r.__checkbox=document.createElement("input"),r.__checkbox.setAttribute("type","checkbox");function o(){s.setValue(!s.__prev)}return O.bind(r.__checkbox,"change",o,!1),r.domElement.appendChild(r.__checkbox),r.updateDisplay(),r}return Qt(e,[{key:"setValue",value:function(i){var r=Nn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,i);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),r}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),Nn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(ci),Fv=function(n){kn(e,n);function e(t,i,r){Kt(this,e);var s=Hn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i)),o=r,a=s;if(s.__select=document.createElement("select"),Y.isArray(o)){var l={};Y.each(o,function(c){l[c]=c}),o=l}return Y.each(o,function(c,u){var A=document.createElement("option");A.innerHTML=u,A.setAttribute("value",c),a.__select.appendChild(A)}),s.updateDisplay(),O.bind(s.__select,"change",function(){var c=this.options[this.selectedIndex].value;a.setValue(c)}),s.domElement.appendChild(s.__select),s}return Qt(e,[{key:"setValue",value:function(i){var r=Nn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,i);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),r}},{key:"updateDisplay",value:function(){return O.isActive(this.__select)?this:(this.__select.value=this.getValue(),Nn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this))}}]),e}(ci),kv=function(n){kn(e,n);function e(t,i){Kt(this,e);var r=Hn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i)),s=r;function o(){s.setValue(s.__input.value)}function a(){s.__onFinishChange&&s.__onFinishChange.call(s,s.getValue())}return r.__input=document.createElement("input"),r.__input.setAttribute("type","text"),O.bind(r.__input,"keyup",o),O.bind(r.__input,"change",o),O.bind(r.__input,"blur",a),O.bind(r.__input,"keydown",function(l){l.keyCode===13&&this.blur()}),r.updateDisplay(),r.domElement.appendChild(r.__input),r}return Qt(e,[{key:"updateDisplay",value:function(){return O.isActive(this.__input)||(this.__input.value=this.getValue()),Nn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(ci);function Ac(n){var e=n.toString();return e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0}var eA=function(n){kn(e,n);function e(t,i,r){Kt(this,e);var s=Hn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i)),o=r||{};return s.__min=o.min,s.__max=o.max,s.__step=o.step,Y.isUndefined(s.__step)?s.initialValue===0?s.__impliedStep=1:s.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(s.initialValue))/Math.LN10))/10:s.__impliedStep=s.__step,s.__precision=Ac(s.__impliedStep),s}return Qt(e,[{key:"setValue",value:function(i){var r=i;return this.__min!==void 0&&r<this.__min?r=this.__min:this.__max!==void 0&&r>this.__max&&(r=this.__max),this.__step!==void 0&&r%this.__step!==0&&(r=Math.round(r/this.__step)*this.__step),Nn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,r)}},{key:"min",value:function(i){return this.__min=i,this}},{key:"max",value:function(i){return this.__max=i,this}},{key:"step",value:function(i){return this.__step=i,this.__impliedStep=i,this.__precision=Ac(i),this}}]),e}(ci);function Hv(n,e){var t=Math.pow(10,e);return Math.round(n*t)/t}var ys=function(n){kn(e,n);function e(t,i,r){Kt(this,e);var s=Hn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i,r));s.__truncationSuspended=!1;var o=s,a=void 0;function l(){var m=parseFloat(o.__input.value);Y.isNaN(m)||o.setValue(m)}function c(){o.__onFinishChange&&o.__onFinishChange.call(o,o.getValue())}function u(){c()}function A(m){var v=a-m.clientY;o.setValue(o.getValue()+v*o.__impliedStep),a=m.clientY}function h(){O.unbind(window,"mousemove",A),O.unbind(window,"mouseup",h),c()}function d(m){O.bind(window,"mousemove",A),O.bind(window,"mouseup",h),a=m.clientY}return s.__input=document.createElement("input"),s.__input.setAttribute("type","text"),O.bind(s.__input,"change",l),O.bind(s.__input,"blur",u),O.bind(s.__input,"mousedown",d),O.bind(s.__input,"keydown",function(m){m.keyCode===13&&(o.__truncationSuspended=!0,this.blur(),o.__truncationSuspended=!1,c())}),s.updateDisplay(),s.domElement.appendChild(s.__input),s}return Qt(e,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():Hv(this.getValue(),this.__precision),Nn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(eA);function hc(n,e,t,i,r){return i+(r-i)*((n-e)/(t-e))}var ca=function(n){kn(e,n);function e(t,i,r,s,o){Kt(this,e);var a=Hn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i,{min:r,max:s,step:o})),l=a;a.__background=document.createElement("div"),a.__foreground=document.createElement("div"),O.bind(a.__background,"mousedown",c),O.bind(a.__background,"touchstart",h),O.addClass(a.__background,"slider"),O.addClass(a.__foreground,"slider-fg");function c(v){document.activeElement.blur(),O.bind(window,"mousemove",u),O.bind(window,"mouseup",A),u(v)}function u(v){v.preventDefault();var p=l.__background.getBoundingClientRect();return l.setValue(hc(v.clientX,p.left,p.right,l.__min,l.__max)),!1}function A(){O.unbind(window,"mousemove",u),O.unbind(window,"mouseup",A),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}function h(v){v.touches.length===1&&(O.bind(window,"touchmove",d),O.bind(window,"touchend",m),d(v))}function d(v){var p=v.touches[0].clientX,f=l.__background.getBoundingClientRect();l.setValue(hc(p,f.left,f.right,l.__min,l.__max))}function m(){O.unbind(window,"touchmove",d),O.unbind(window,"touchend",m),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}return a.updateDisplay(),a.__background.appendChild(a.__foreground),a.domElement.appendChild(a.__background),a}return Qt(e,[{key:"updateDisplay",value:function(){var i=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=i*100+"%",Nn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(eA),tA=function(n){kn(e,n);function e(t,i,r){Kt(this,e);var s=Hn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i)),o=s;return s.__button=document.createElement("div"),s.__button.innerHTML=r===void 0?"Fire":r,O.bind(s.__button,"click",function(a){return a.preventDefault(),o.fire(),!1}),O.addClass(s.__button,"button"),s.domElement.appendChild(s.__button),s}return Qt(e,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),e}(ci),ua=function(n){kn(e,n);function e(t,i){Kt(this,e);var r=Hn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i));r.__color=new xt(r.getValue()),r.__temp=new xt(0);var s=r;r.domElement=document.createElement("div"),O.makeSelectable(r.domElement,!1),r.__selector=document.createElement("div"),r.__selector.className="selector",r.__saturation_field=document.createElement("div"),r.__saturation_field.className="saturation-field",r.__field_knob=document.createElement("div"),r.__field_knob.className="field-knob",r.__field_knob_border="2px solid ",r.__hue_knob=document.createElement("div"),r.__hue_knob.className="hue-knob",r.__hue_field=document.createElement("div"),r.__hue_field.className="hue-field",r.__input=document.createElement("input"),r.__input.type="text",r.__input_textShadow="0 1px 1px ",O.bind(r.__input,"keydown",function(v){v.keyCode===13&&A.call(this)}),O.bind(r.__input,"blur",A),O.bind(r.__selector,"mousedown",function(){O.addClass(this,"drag").bind(window,"mouseup",function(){O.removeClass(s.__selector,"drag")})}),O.bind(r.__selector,"touchstart",function(){O.addClass(this,"drag").bind(window,"touchend",function(){O.removeClass(s.__selector,"drag")})});var o=document.createElement("div");Y.extend(r.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),Y.extend(r.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:r.__field_knob_border+(r.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),Y.extend(r.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),Y.extend(r.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),Y.extend(o.style,{width:"100%",height:"100%",background:"none"}),dc(o,"top","rgba(0,0,0,0)","#000"),Y.extend(r.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),Bv(r.__hue_field),Y.extend(r.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:r.__input_textShadow+"rgba(0,0,0,0.7)"}),O.bind(r.__saturation_field,"mousedown",a),O.bind(r.__saturation_field,"touchstart",a),O.bind(r.__field_knob,"mousedown",a),O.bind(r.__field_knob,"touchstart",a),O.bind(r.__hue_field,"mousedown",l),O.bind(r.__hue_field,"touchstart",l);function a(v){d(v),O.bind(window,"mousemove",d),O.bind(window,"touchmove",d),O.bind(window,"mouseup",c),O.bind(window,"touchend",c)}function l(v){m(v),O.bind(window,"mousemove",m),O.bind(window,"touchmove",m),O.bind(window,"mouseup",u),O.bind(window,"touchend",u)}function c(){O.unbind(window,"mousemove",d),O.unbind(window,"touchmove",d),O.unbind(window,"mouseup",c),O.unbind(window,"touchend",c),h()}function u(){O.unbind(window,"mousemove",m),O.unbind(window,"touchmove",m),O.unbind(window,"mouseup",u),O.unbind(window,"touchend",u),h()}function A(){var v=la(this.value);v!==!1?(s.__color.__state=v,s.setValue(s.__color.toOriginal())):this.value=s.__color.toString()}function h(){s.__onFinishChange&&s.__onFinishChange.call(s,s.__color.toOriginal())}r.__saturation_field.appendChild(o),r.__selector.appendChild(r.__field_knob),r.__selector.appendChild(r.__saturation_field),r.__selector.appendChild(r.__hue_field),r.__hue_field.appendChild(r.__hue_knob),r.domElement.appendChild(r.__input),r.domElement.appendChild(r.__selector),r.updateDisplay();function d(v){v.type.indexOf("touch")===-1&&v.preventDefault();var p=s.__saturation_field.getBoundingClientRect(),f=v.touches&&v.touches[0]||v,E=f.clientX,_=f.clientY,b=(E-p.left)/(p.right-p.left),N=1-(_-p.top)/(p.bottom-p.top);return N>1?N=1:N<0&&(N=0),b>1?b=1:b<0&&(b=0),s.__color.v=N,s.__color.s=b,s.setValue(s.__color.toOriginal()),!1}function m(v){v.type.indexOf("touch")===-1&&v.preventDefault();var p=s.__hue_field.getBoundingClientRect(),f=v.touches&&v.touches[0]||v,E=f.clientY,_=1-(E-p.top)/(p.bottom-p.top);return _>1?_=1:_<0&&(_=0),s.__color.h=_*360,s.setValue(s.__color.toOriginal()),!1}return r}return Qt(e,[{key:"updateDisplay",value:function(){var i=la(this.getValue());if(i!==!1){var r=!1;Y.each(xt.COMPONENTS,function(a){if(!Y.isUndefined(i[a])&&!Y.isUndefined(this.__color.__state[a])&&i[a]!==this.__color.__state[a])return r=!0,{}},this),r&&Y.extend(this.__color.__state,i)}Y.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var s=this.__color.v<.5||this.__color.s>.5?255:0,o=255-s;Y.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+s+","+s+","+s+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,dc(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),Y.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+s+","+s+","+s+")",textShadow:this.__input_textShadow+"rgba("+o+","+o+","+o+",.7)"})}}]),e}(ci),Vv=["-moz-","-o-","-webkit-","-ms-",""];function dc(n,e,t,i){n.style.background="",Y.each(Vv,function(r){n.style.cssText+="background: "+r+"linear-gradient("+e+", "+t+" 0%, "+i+" 100%); "})}function Bv(n){n.style.background="",n.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",n.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",n.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",n.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",n.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var Gv={load:function(e,t){var i=t||document,r=i.createElement("link");r.type="text/css",r.rel="stylesheet",r.href=e,i.getElementsByTagName("head")[0].appendChild(r)},inject:function(e,t){var i=t||document,r=document.createElement("style");r.type="text/css",r.innerHTML=e;var s=i.getElementsByTagName("head")[0];try{s.appendChild(r)}catch{}}},Wv=`<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`,Xv=function(e,t){var i=e[t];return Y.isArray(arguments[2])||Y.isObject(arguments[2])?new Fv(e,t,arguments[2]):Y.isNumber(i)?Y.isNumber(arguments[2])&&Y.isNumber(arguments[3])?Y.isNumber(arguments[4])?new ca(e,t,arguments[2],arguments[3],arguments[4]):new ca(e,t,arguments[2],arguments[3]):Y.isNumber(arguments[4])?new ys(e,t,{min:arguments[2],max:arguments[3],step:arguments[4]}):new ys(e,t,{min:arguments[2],max:arguments[3]}):Y.isString(i)?new kv(e,t):Y.isFunction(i)?new tA(e,t,""):Y.isBoolean(i)?new $u(e,t):null};function jv(n){setTimeout(n,1e3/60)}var Zv=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||jv,Jv=function(){function n(){Kt(this,n),this.backgroundElement=document.createElement("div"),Y.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),O.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),Y.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var e=this;O.bind(this.backgroundElement,"click",function(){e.hide()})}return Qt(n,[{key:"show",value:function(){var t=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),Y.defer(function(){t.backgroundElement.style.opacity=1,t.domElement.style.opacity=1,t.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var t=this,i=function r(){t.domElement.style.display="none",t.backgroundElement.style.display="none",O.unbind(t.domElement,"webkitTransitionEnd",r),O.unbind(t.domElement,"transitionend",r),O.unbind(t.domElement,"oTransitionEnd",r)};O.bind(this.domElement,"webkitTransitionEnd",i),O.bind(this.domElement,"transitionend",i),O.bind(this.domElement,"oTransitionEnd",i),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-O.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-O.getHeight(this.domElement)/2+"px"}}]),n}(),Yv=Uv(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);Gv.inject(Yv);var fc="dg",pc=72,mc=20,dr="Default",nr=function(){try{return!!window.localStorage}catch{return!1}}(),or=void 0,vc=!0,Pi=void 0,po=!1,nA=[],rt=function n(e){var t=this,i=e||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),O.addClass(this.domElement,fc),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],i=Y.defaults(i,{closeOnTop:!1,autoPlace:!0,width:n.DEFAULT_WIDTH}),i=Y.defaults(i,{resizable:i.autoPlace,hideable:i.autoPlace}),Y.isUndefined(i.load)?i.load={preset:dr}:i.preset&&(i.load.preset=i.preset),Y.isUndefined(i.parent)&&i.hideable&&nA.push(this),i.resizable=Y.isUndefined(i.parent)&&i.resizable,i.autoPlace&&Y.isUndefined(i.scrollable)&&(i.scrollable=!0);var r=nr&&localStorage.getItem(Ri(this,"isLocal"))==="true",s=void 0,o=void 0;if(Object.defineProperties(this,{parent:{get:function(){return i.parent}},scrollable:{get:function(){return i.scrollable}},autoPlace:{get:function(){return i.autoPlace}},closeOnTop:{get:function(){return i.closeOnTop}},preset:{get:function(){return t.parent?t.getRoot().preset:i.load.preset},set:function(h){t.parent?t.getRoot().preset=h:i.load.preset=h,eg(this),t.revert()}},width:{get:function(){return i.width},set:function(h){i.width=h,da(t,h)}},name:{get:function(){return i.name},set:function(h){i.name=h,o&&(o.innerHTML=i.name)}},closed:{get:function(){return i.closed},set:function(h){i.closed=h,i.closed?O.addClass(t.__ul,n.CLASS_CLOSED):O.removeClass(t.__ul,n.CLASS_CLOSED),this.onResize(),t.__closeButton&&(t.__closeButton.innerHTML=h?n.TEXT_OPEN:n.TEXT_CLOSED)}},load:{get:function(){return i.load}},useLocalStorage:{get:function(){return r},set:function(h){nr&&(r=h,h?O.bind(window,"unload",s):O.unbind(window,"unload",s),localStorage.setItem(Ri(t,"isLocal"),h))}}}),Y.isUndefined(i.parent)){if(this.closed=i.closed||!1,O.addClass(this.domElement,n.CLASS_MAIN),O.makeSelectable(this.domElement,!1),nr&&r){t.useLocalStorage=!0;var a=localStorage.getItem(Ri(this,"gui"));a&&(i.load=JSON.parse(a))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=n.TEXT_CLOSED,O.addClass(this.__closeButton,n.CLASS_CLOSE_BUTTON),i.closeOnTop?(O.addClass(this.__closeButton,n.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(O.addClass(this.__closeButton,n.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),O.bind(this.__closeButton,"click",function(){t.closed=!t.closed})}else{i.closed===void 0&&(i.closed=!0);var l=document.createTextNode(i.name);O.addClass(l,"controller-name"),o=Oa(t,l);var c=function(h){return h.preventDefault(),t.closed=!t.closed,!1};O.addClass(this.__ul,n.CLASS_CLOSED),O.addClass(o,"title"),O.bind(o,"click",c),i.closed||(this.closed=!1)}i.autoPlace&&(Y.isUndefined(i.parent)&&(vc&&(Pi=document.createElement("div"),O.addClass(Pi,fc),O.addClass(Pi,n.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(Pi),vc=!1),Pi.appendChild(this.domElement),O.addClass(this.domElement,n.CLASS_AUTO_PLACE)),this.parent||da(t,i.width)),this.__resizeHandler=function(){t.onResizeDebounced()},O.bind(window,"resize",this.__resizeHandler),O.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),O.bind(this.__ul,"transitionend",this.__resizeHandler),O.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),i.resizable&&$v(this),s=function(){nr&&localStorage.getItem(Ri(t,"isLocal"))==="true"&&localStorage.setItem(Ri(t,"gui"),JSON.stringify(t.getSaveObject()))},this.saveToLocalStorageIfPossible=s;function u(){var A=t.getRoot();A.width+=1,Y.defer(function(){A.width-=1})}i.parent||u()};rt.toggleHide=function(){po=!po,Y.each(nA,function(n){n.domElement.style.display=po?"none":""})};rt.CLASS_AUTO_PLACE="a";rt.CLASS_AUTO_PLACE_CONTAINER="ac";rt.CLASS_MAIN="main";rt.CLASS_CONTROLLER_ROW="cr";rt.CLASS_TOO_TALL="taller-than-window";rt.CLASS_CLOSED="closed";rt.CLASS_CLOSE_BUTTON="close-button";rt.CLASS_CLOSE_TOP="close-top";rt.CLASS_CLOSE_BOTTOM="close-bottom";rt.CLASS_DRAG="drag";rt.DEFAULT_WIDTH=245;rt.TEXT_CLOSED="Close Controls";rt.TEXT_OPEN="Open Controls";rt._keydownHandler=function(n){document.activeElement.type!=="text"&&(n.which===pc||n.keyCode===pc)&&rt.toggleHide()};O.bind(window,"keydown",rt._keydownHandler,!1);Y.extend(rt.prototype,{add:function(e,t){return ar(this,e,t,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(e,t){return ar(this,e,t,{color:!0})},remove:function(e){this.__ul.removeChild(e.__li),this.__controllers.splice(this.__controllers.indexOf(e),1);var t=this;Y.defer(function(){t.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&Pi.removeChild(this.domElement);var e=this;Y.each(this.__folders,function(t){e.removeFolder(t)}),O.unbind(window,"keydown",rt._keydownHandler,!1),gc(this)},addFolder:function(e){if(this.__folders[e]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+e+'"');var t={name:e,parent:this};t.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[e]&&(t.closed=this.load.folders[e].closed,t.load=this.load.folders[e]);var i=new rt(t);this.__folders[e]=i;var r=Oa(this,i.domElement);return O.addClass(r,"folder"),i},removeFolder:function(e){this.__ul.removeChild(e.domElement.parentElement),delete this.__folders[e.name],this.load&&this.load.folders&&this.load.folders[e.name]&&delete this.load.folders[e.name],gc(e);var t=this;Y.each(e.__folders,function(i){e.removeFolder(i)}),Y.defer(function(){t.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var e=this.getRoot();if(e.scrollable){var t=O.getOffset(e.__ul).top,i=0;Y.each(e.__ul.childNodes,function(r){e.autoPlace&&r===e.__save_row||(i+=O.getHeight(r))}),window.innerHeight-t-mc<i?(O.addClass(e.domElement,rt.CLASS_TOO_TALL),e.__ul.style.height=window.innerHeight-t-mc+"px"):(O.removeClass(e.domElement,rt.CLASS_TOO_TALL),e.__ul.style.height="auto")}e.__resize_handle&&Y.defer(function(){e.__resize_handle.style.height=e.__ul.offsetHeight+"px"}),e.__closeButton&&(e.__closeButton.style.width=e.width+"px")},onResizeDebounced:Y.debounce(function(){this.onResize()},50),remember:function(){if(Y.isUndefined(or)&&(or=new Jv,or.domElement.innerHTML=Wv),this.parent)throw new Error("You can only call remember on a top level GUI.");var e=this;Y.each(Array.prototype.slice.call(arguments),function(t){e.__rememberedObjects.length===0&&Qv(e),e.__rememberedObjects.indexOf(t)===-1&&e.__rememberedObjects.push(t)}),this.autoPlace&&da(this,this.width)},getRoot:function(){for(var e=this;e.parent;)e=e.parent;return e},getSaveObject:function(){var e=this.load;return e.closed=this.closed,this.__rememberedObjects.length>0&&(e.preset=this.preset,e.remembered||(e.remembered={}),e.remembered[this.preset]=es(this)),e.folders={},Y.each(this.__folders,function(t,i){e.folders[i]=t.getSaveObject()}),e},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=es(this),Aa(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(e){this.load.remembered||(this.load.remembered={},this.load.remembered[dr]=es(this,!0)),this.load.remembered[e]=es(this),this.preset=e,ha(this,e,!0),this.saveToLocalStorageIfPossible()},revert:function(e){Y.each(this.__controllers,function(t){this.getRoot().load.remembered?iA(e||this.getRoot(),t):t.setValue(t.initialValue),t.__onFinishChange&&t.__onFinishChange.call(t,t.getValue())},this),Y.each(this.__folders,function(t){t.revert(t)}),e||Aa(this.getRoot(),!1)},listen:function(e){var t=this.__listening.length===0;this.__listening.push(e),t&&rA(this.__listening)},updateDisplay:function(){Y.each(this.__controllers,function(e){e.updateDisplay()}),Y.each(this.__folders,function(e){e.updateDisplay()})}});function Oa(n,e,t){var i=document.createElement("li");return e&&i.appendChild(e),t?n.__ul.insertBefore(i,t):n.__ul.appendChild(i),n.onResize(),i}function gc(n){O.unbind(window,"resize",n.__resizeHandler),n.saveToLocalStorageIfPossible&&O.unbind(window,"unload",n.saveToLocalStorageIfPossible)}function Aa(n,e){var t=n.__preset_select[n.__preset_select.selectedIndex];e?t.innerHTML=t.value+"*":t.innerHTML=t.value}function Kv(n,e,t){if(t.__li=e,t.__gui=n,Y.extend(t,{options:function(o){if(arguments.length>1){var a=t.__li.nextElementSibling;return t.remove(),ar(n,t.object,t.property,{before:a,factoryArgs:[Y.toArray(arguments)]})}if(Y.isArray(o)||Y.isObject(o)){var l=t.__li.nextElementSibling;return t.remove(),ar(n,t.object,t.property,{before:l,factoryArgs:[o]})}},name:function(o){return t.__li.firstElementChild.firstElementChild.innerHTML=o,t},listen:function(){return t.__gui.listen(t),t},remove:function(){return t.__gui.remove(t),t}}),t instanceof ca){var i=new ys(t.object,t.property,{min:t.__min,max:t.__max,step:t.__step});Y.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(s){var o=t[s],a=i[s];t[s]=i[s]=function(){var l=Array.prototype.slice.call(arguments);return a.apply(i,l),o.apply(t,l)}}),O.addClass(e,"has-slider"),t.domElement.insertBefore(i.domElement,t.domElement.firstElementChild)}else if(t instanceof ys){var r=function(o){if(Y.isNumber(t.__min)&&Y.isNumber(t.__max)){var a=t.__li.firstElementChild.firstElementChild.innerHTML,l=t.__gui.__listening.indexOf(t)>-1;t.remove();var c=ar(n,t.object,t.property,{before:t.__li.nextElementSibling,factoryArgs:[t.__min,t.__max,t.__step]});return c.name(a),l&&c.listen(),c}return o};t.min=Y.compose(r,t.min),t.max=Y.compose(r,t.max)}else t instanceof $u?(O.bind(e,"click",function(){O.fakeEvent(t.__checkbox,"click")}),O.bind(t.__checkbox,"click",function(s){s.stopPropagation()})):t instanceof tA?(O.bind(e,"click",function(){O.fakeEvent(t.__button,"click")}),O.bind(e,"mouseover",function(){O.addClass(t.__button,"hover")}),O.bind(e,"mouseout",function(){O.removeClass(t.__button,"hover")})):t instanceof ua&&(O.addClass(e,"color"),t.updateDisplay=Y.compose(function(s){return e.style.borderLeftColor=t.__color.toString(),s},t.updateDisplay),t.updateDisplay());t.setValue=Y.compose(function(s){return n.getRoot().__preset_select&&t.isModified()&&Aa(n.getRoot(),!0),s},t.setValue)}function iA(n,e){var t=n.getRoot(),i=t.__rememberedObjects.indexOf(e.object);if(i!==-1){var r=t.__rememberedObjectIndecesToControllers[i];if(r===void 0&&(r={},t.__rememberedObjectIndecesToControllers[i]=r),r[e.property]=e,t.load&&t.load.remembered){var s=t.load.remembered,o=void 0;if(s[n.preset])o=s[n.preset];else if(s[dr])o=s[dr];else return;if(o[i]&&o[i][e.property]!==void 0){var a=o[i][e.property];e.initialValue=a,e.setValue(a)}}}}function ar(n,e,t,i){if(e[t]===void 0)throw new Error('Object "'+e+'" has no property "'+t+'"');var r=void 0;if(i.color)r=new ua(e,t);else{var s=[e,t].concat(i.factoryArgs);r=Xv.apply(n,s)}i.before instanceof ci&&(i.before=i.before.__li),iA(n,r),O.addClass(r.domElement,"c");var o=document.createElement("span");O.addClass(o,"property-name"),o.innerHTML=r.property;var a=document.createElement("div");a.appendChild(o),a.appendChild(r.domElement);var l=Oa(n,a,i.before);return O.addClass(l,rt.CLASS_CONTROLLER_ROW),r instanceof ua?O.addClass(l,"color"):O.addClass(l,Ov(r.getValue())),Kv(n,l,r),n.__controllers.push(r),r}function Ri(n,e){return document.location.href+"."+e}function ha(n,e,t){var i=document.createElement("option");i.innerHTML=e,i.value=e,n.__preset_select.appendChild(i),t&&(n.__preset_select.selectedIndex=n.__preset_select.length-1)}function _c(n,e){e.style.display=n.useLocalStorage?"block":"none"}function Qv(n){var e=n.__save_row=document.createElement("li");O.addClass(n.domElement,"has-save"),n.__ul.insertBefore(e,n.__ul.firstChild),O.addClass(e,"save-row");var t=document.createElement("span");t.innerHTML="&nbsp;",O.addClass(t,"button gears");var i=document.createElement("span");i.innerHTML="Save",O.addClass(i,"button"),O.addClass(i,"save");var r=document.createElement("span");r.innerHTML="New",O.addClass(r,"button"),O.addClass(r,"save-as");var s=document.createElement("span");s.innerHTML="Revert",O.addClass(s,"button"),O.addClass(s,"revert");var o=n.__preset_select=document.createElement("select");if(n.load&&n.load.remembered?Y.each(n.load.remembered,function(A,h){ha(n,h,h===n.preset)}):ha(n,dr,!1),O.bind(o,"change",function(){for(var A=0;A<n.__preset_select.length;A++)n.__preset_select[A].innerHTML=n.__preset_select[A].value;n.preset=this.value}),e.appendChild(o),e.appendChild(t),e.appendChild(i),e.appendChild(r),e.appendChild(s),nr){var a=document.getElementById("dg-local-explain"),l=document.getElementById("dg-local-storage"),c=document.getElementById("dg-save-locally");c.style.display="block",localStorage.getItem(Ri(n,"isLocal"))==="true"&&l.setAttribute("checked","checked"),_c(n,a),O.bind(l,"change",function(){n.useLocalStorage=!n.useLocalStorage,_c(n,a)})}var u=document.getElementById("dg-new-constructor");O.bind(u,"keydown",function(A){A.metaKey&&(A.which===67||A.keyCode===67)&&or.hide()}),O.bind(t,"click",function(){u.innerHTML=JSON.stringify(n.getSaveObject(),void 0,2),or.show(),u.focus(),u.select()}),O.bind(i,"click",function(){n.save()}),O.bind(r,"click",function(){var A=prompt("Enter a new preset name.");A&&n.saveAs(A)}),O.bind(s,"click",function(){n.revert()})}function $v(n){var e=void 0;n.__resize_handle=document.createElement("div"),Y.extend(n.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function t(s){return s.preventDefault(),n.width+=e-s.clientX,n.onResize(),e=s.clientX,!1}function i(){O.removeClass(n.__closeButton,rt.CLASS_DRAG),O.unbind(window,"mousemove",t),O.unbind(window,"mouseup",i)}function r(s){return s.preventDefault(),e=s.clientX,O.addClass(n.__closeButton,rt.CLASS_DRAG),O.bind(window,"mousemove",t),O.bind(window,"mouseup",i),!1}O.bind(n.__resize_handle,"mousedown",r),O.bind(n.__closeButton,"mousedown",r),n.domElement.insertBefore(n.__resize_handle,n.domElement.firstElementChild)}function da(n,e){n.domElement.style.width=e+"px",n.__save_row&&n.autoPlace&&(n.__save_row.style.width=e+"px"),n.__closeButton&&(n.__closeButton.style.width=e+"px")}function es(n,e){var t={};return Y.each(n.__rememberedObjects,function(i,r){var s={},o=n.__rememberedObjectIndecesToControllers[r];Y.each(o,function(a,l){s[l]=e?a.initialValue:a.getValue()}),t[r]=s}),t}function eg(n){for(var e=0;e<n.__preset_select.length;e++)n.__preset_select[e].value===n.preset&&(n.__preset_select.selectedIndex=e)}function rA(n){n.length!==0&&Zv.call(window,function(){rA(n)}),Y.each(n,function(e){e.updateDisplay()})}var tg=rt;function pn(){return Object.values($)[Math.floor(Math.random()*Object.values($).length)]}var Ss,sA;class ng{constructor(){Wa(this,Ss);this.display={board:{x:0,y:0,w:10,h:10},pieces:[],bench:{0:{appellation:pn(),grade:1},1:{appellation:pn(),grade:1},2:{appellation:pn(),grade:2},3:{appellation:pn(),grade:3},4:{appellation:pn(),grade:4}},shop:[{id:Qr(),appellation:pn()},{id:Qr(),appellation:pn()},{id:Qr(),appellation:pn()}]},this.gui=new tg,this.pieceHandles=[],this.gui.add(this,"addPiece")}get pieceIterators(){return this.pieceHandles.filter(e=>e.simulated).map(e=>e.iterator)}addPiece(){const e=Xa(this,Ss,sA).call(this),t=e.next().value;this.display.pieces.push(t);const i=this.gui.addFolder(t.id),r={id:t.id,iterator:e,simulated:!0,startSimulation:()=>(r.simulated=!0,this),stopSimulation:()=>(r.simulated=!1,this.display.pieces=this.display.pieces.map(s=>s.id===t.id?{...s,animation:H.Idle,animationStartAt:Date.now()}:s),this),removePiece:()=>(this.display.pieces=this.display.pieces.filter(s=>s.id!==t.id),i.hide(),this.pieceHandles=this.pieceHandles.filter(s=>s.id!==t.id),this),gui:i};return i.add(r,"startSimulation"),i.add(r,"stopSimulation"),i.add(r,"removePiece"),this.pieceHandles.push(r),this}subscribe(e){const t=new wc;return t.next(this.display),(async()=>{for(;;){for(const r of this.pieceIterators){const s=r.next().value;this.display={...this.display,pieces:this.display.pieces.map(o=>o.id===s.id?s:o)}}await new Promise(r=>setTimeout(r,1e3)),t.next(this.display)}})(),t.pipe(ih(eh(100).pipe(Zc(0))),va(([r])=>r)).subscribe(e)}}Ss=new WeakSet,sA=function*(){let t={id:Qr(),hero:{appellation:pn(),position:{x:0,y:0,w:0,h:0},grade:Math.floor(Math.random()*5)+1},animationStartAt:Date.now(),animation:H.Idle,position:{x:Math.floor(Math.random()*this.display.board.w),y:Math.floor(Math.random()*this.display.board.w),w:0,h:0},attributes:{maxHealth:100,health:100,maxMana:50,mana:50},right:Math.random()>.5};for(;;)switch(Math.floor(Math.random()*6)){case 0:if(t.animation===H.Idle)break;t={...t,attributes:{...t.attributes,health:t.attributes.maxHealth},animation:H.Idle,animationStartAt:Date.now()},yield{...t};break;case 1:if(t.animation===H.Attack)break;t.animation=H.Attack,t.animationStartAt=Date.now(),yield{...t};break;case 2:if(t.animation===H.Death)break;t.animation=H.Death,t.animationStartAt=Date.now(),yield{...t};break;case 3:if(t.animation===H.Ability)break;t.animation=H.Ability,t.animationStartAt=Date.now(),yield{...t};break;case 4:{if(t.animation===H.Walk)break;const r=Math.random()>.33?Math.floor(Math.random()*3)-1:0,s=r===0?Math.random()>.5?1:-1:0,o=t.position.x+r,a=t.position.y+s;if(o<0||o>=this.display.board.w||a<0||a>=this.display.board.h||this.display.pieces.some(l=>l.position.x===o&&l.position.y===a))continue;t={...t,position:{...t.position,x:o,y:a},animation:H.Walk,animationStartAt:Date.now()},yield{...t};break}case 5:if(t.animation===H.Hurt)break;t={...t,animation:H.Hurt,animationStartAt:Date.now(),attributes:{...t.attributes,health:t.attributes.health*.6}},yield{...t};break}};function ig(n,e){const t=1/e.board.w;(n.pieceGeometry.parameters.width!==t||n.pieceGeometry.parameters.height!==t)&&(n.pieceGeometry.dispose(),n.pieceGeometry=new zt(t,t))}function rg(n,e){var t,i,r,s;for(const o of e.pieces)if(((t=n.pieceAnimatedTextures[o.id])==null?void 0:t.appellation)!==o.hero.appellation||((i=n.pieceAnimatedTextures[o.id])==null?void 0:i.animation)!==o.animation||((r=n.pieceAnimatedTextures[o.id])==null?void 0:r.animationStartAt)!==o.animationStartAt){(s=n.pieceAnimatedTextures[o.id])==null||s.dispose();const[a,l]=Kn(o.hero.appellation,o.animation);n.pieceAnimatedTextures[o.id]={texture:a,animationStartAt:o.animationStartAt,appellation:o.hero.appellation,animation:o.animation,dispose:l}}for(const o of Object.keys(n.pieceAnimatedTextures))e.pieces.find(a=>a.id===o)===void 0&&(n.pieceAnimatedTextures[o].dispose(),delete n.pieceAnimatedTextures[o])}function sg(n,e){var t,i,r;for(const s of e.pieces)((t=n.pieceMaterials[s.id])==null?void 0:t.map)!==n.pieceAnimatedTextures[s.id].texture&&((i=n.pieceMaterials[s.id])==null||i.dispose(),n.pieceMaterials[s.id]=new Rt({map:n.pieceAnimatedTextures[s.id].texture,transparent:!0,side:nn}));for(const s of Object.keys(n.pieceAnimatedTextures))e.pieces.find(o=>o.id===s)===void 0&&((r=n.pieceMaterials[s])==null||r.dispose(),delete n.pieceMaterials[s])}function og(n,e){var t,i;for(const r of e.pieces){const s=n.pieceMaterials[r.id];if(!s)throw new Error("Material not found !");const o=!n.pieceMeshes[r.id];(t=n.pieceMeshes)[i=r.id]||(t[i]=new ft(n.pieceGeometry,s));const a=n.pieceMeshes[r.id];o&&n.scene.add(a),a.material!==s&&(a.material=s);const l=1,c=1/e.board.w,u=-(l/2)+c/2,A=l/2+c/2,h=l/2-c/2;o&&a.position.set(u+c*r.position.x,A,h-c*r.position.y);const d=u+c*r.position.x,m=A,v=h-c*r.position.y,p=.01,f=d-a.position.x,E=m-a.position.y,_=v-a.position.z,b=f>p?p:f<-p?-p:0,N=E>p?p:E<-p?-p:0,P=_>p?p:_<-p?-p:0;a.position.set(a.position.x+b,a.position.y+N,a.position.z+P),o&&a.rotation.set(0,r.right?Math.PI:0,0);const w=5.3;a.scale.set(w,w,1)}for(const r of Object.keys(n.pieceMeshes))e.pieces.find(s=>s.id===r)||(n.scene.remove(n.pieceMeshes[r]),delete n.pieceMeshes[r])}function ag(n,e){const t=1/e.board.w,i=t*.6,r=t*.11;(n.pieceBarsBackgroundGeometry.parameters.width!==i||n.pieceBarsBackgroundGeometry.parameters.height!==r)&&(n.pieceBarsBackgroundGeometry.dispose(),n.pieceBarsBackgroundGeometry=new zt(i,r))}function lg(n,e){var t,i;for(const r of e.pieces){const s=n.pieceBarsBackgroundMaterial;if(!s)throw new Error("Material not found !");const o=!n.pieceBarsBackgroundMeshes[r.id];(t=n.pieceBarsBackgroundMeshes)[i=r.id]||(t[i]=new ft(n.pieceBarsBackgroundGeometry,s));const a=n.pieceBarsBackgroundMeshes[r.id];o&&n.scene.add(a),a.material!==s&&(a.material=s);const l=n.pieceMeshes[r.id];if(!l)throw new Error("Piece mesh not found !");const c=l.position.x,u=l.position.y+.11,A=l.position.z;(c!==a.position.x||u!==a.position.y||A!==a.position.z)&&a.position.set(c,u,A)}for(const r of Object.keys(n.pieceBarsBackgroundMeshes))e.pieces.find(s=>s.id===r)||(n.scene.remove(n.pieceBarsBackgroundMeshes[r]),delete n.pieceBarsBackgroundMeshes[r])}function cg(n,e){var t,i;for(const r of e.pieces){const s=n.pieceBarsBackgroundGeometry.parameters.width*(r.attributes.health/r.attributes.maxHealth||.001),o=n.pieceBarsBackgroundGeometry.parameters.height;(t=n.pieceHealthBarGeometries)[i=r.id]||(t[i]=new zt(s,o));const a=n.pieceHealthBarGeometries[r.id];(a.parameters.width!==s||a.parameters.height!==o)&&(a.dispose(),n.pieceHealthBarGeometries[r.id]=new zt(s,o))}for(const r of Object.keys(n.pieceHealthBarGeometries))e.pieces.some(s=>s.id===r)||(n.pieceHealthBarGeometries[r].dispose(),delete n.pieceHealthBarGeometries[r])}function ug(n,e){var t,i;for(const r of e.pieces){const s=n.pieceHealthBarGeometries[r.id];if(!s)throw new Error("Geometry not found !");const o=!n.pieceHealthBarMeshes[r.id];(t=n.pieceHealthBarMeshes)[i=r.id]||(t[i]=new ft(s,n.pieceHealthBarMaterial));const a=n.pieceHealthBarMeshes[r.id];s!==a.geometry&&(a.geometry=s),o&&n.scene.add(a);const l=n.pieceBarsBackgroundMeshes[r.id];if(!l)throw new Error("Piece mesh not found !");const c=l.position.x,u=l.position.y,A=l.position.z+1e-4;(c!==a.position.x||u!==a.position.y||A!==a.position.z)&&a.position.set(c,u,A)}for(const r of Object.keys(n.pieceHealthBarMeshes))e.pieces.find(s=>s.id===r)||(n.scene.remove(n.pieceHealthBarMeshes[r]),delete n.pieceHealthBarMeshes[r])}function Ag(n,e){var t,i,r,s;for(const o of e.pieces){(t=n.pieceGradeMeshes)[i=o.id]||(t[i]={});for(let a=0;a<o.hero.grade;a++){const l=!((r=n.pieceGradeMeshes[o.id])!=null&&r[a]);(s=n.pieceGradeMeshes[o.id])[a]||(s[a]=new ft(n.pieceGradeGeometry,n.pieceGradeMaterial));const c=n.pieceGradeMeshes[o.id][a];l&&n.scene.add(c);const u=n.pieceMeshes[o.id];if(!u)throw new Error("Piece mesh not found !");const A=u.position.x+.012*a-.012*(o.hero.grade-1)/2,h=u.position.y+.095,d=u.position.z+.001;(A!==c.position.x||h!==c.position.y||d!==c.position.z)&&c.position.set(A,h,d)}}for(const o of Object.keys(n.pieceGradeMeshes))for(const a of Object.keys(n.pieceGradeMeshes[o])){const l=Number.parseInt(a),c=e.pieces.find(u=>u.id===o);(!c||c.hero.grade<l)&&(n.scene.remove(n.pieceGradeMeshes[o][l]),delete n.pieceGradeMeshes[o][l])}}function hg(n,e){var t,i;for(const[r,s]of Object.entries(e.shop)){const o=!n.shopProductBackgroundMeshes[s.id];(t=n.shopProductBackgroundMeshes)[i=s.id]||(t[i]=new ft(n.shopProductBackgroundGeometry,n.shopProductBackgroundMaterial));const a=n.shopProductBackgroundMeshes[s.id];if(o){n.scene.add(a),a.rotation.x=n.camera.rotation.x,a.position.y=.7,a.position.z=.9;const l=Number.parseInt(r);a.position.x=l*.15}}for(const r of Object.keys(n.shopProductBackgroundMeshes))e.shop.find(s=>s.id===r)||(n.scene.remove(n.shopProductBackgroundMeshes[r]),delete n.shopProductBackgroundMeshes[r])}function dg(n,e){var t,i;for(const r of e.shop){const s=!n.shopProductImageMeshes[r.id];(t=n.shopProductImageMeshes)[i=r.id]||(t[i]=new ft(n.shopProductImageGeometry,n.shopProductImageMaterial[r.appellation]));const o=n.shopProductImageMeshes[r.id],a=n.shopProductBackgroundMeshes[r.id];if(!a)throw new Error("Background not found !");if(s){n.scene.add(o),o.rotation.x=a.rotation.x,o.position.y=a.position.y,o.position.z=a.position.z+1e-4,o.position.x=a.position.x;const l=new q(0,.01,0);l.applyEuler(a.rotation),o.position.y=a.position.y+l.y,o.position.z=a.position.z+l.z,o.scale.set(2,2,2)}}for(const r of Object.keys(n.shopProductImageMeshes))e.shop.find(s=>s.id===r)||(n.scene.remove(n.shopProductImageMeshes[r]),delete n.shopProductImageMeshes[r])}function fg(n){return[...{[$.Soldier]:[Je.Knight,Je.Ranged],[$.Orc]:[Je.Orc],[$.Lancer]:[Je.Cavalry],[$.Priest]:[Je.Magic,Je.Light],[$.GreatswordSkeleton]:[Je.Dead,Je.BladeMaster],[$.Slime]:[Je.Beast,Je.Magic]}[n]]}function pg(n,e){var t,i,r,s;for(const o of e.shop){const a=fg(o.appellation),l=n.shopProductBackgroundMeshes[o.id];if(!l)throw new Error("Background not found !");for(const[c,u]of a.entries()){const A=!((t=n.shopProductTraitMeshes[o.id])!=null&&t[c]);(i=n.shopProductTraitMeshes)[r=o.id]||(i[r]={}),(s=n.shopProductTraitMeshes[o.id])[c]||(s[c]=new ft(n.shopProductTraitGeometry[u],n.shopProductTraitMaterial));const h=n.shopProductTraitMeshes[o.id][c];if(A){n.scene.add(h),h.rotation.x=l.rotation.x,h.position.x=l.position.x-.03;const d=new q(0,-.04-.017*c,0);d.applyEuler(l.rotation),h.position.y=l.position.y+d.y,h.position.z=l.position.z+1e-4+d.z}}}for(const o of Object.keys(n.shopProductTraitMeshes))if(!e.shop.find(a=>a.id===o)){for(const a of Object.values(n.shopProductTraitMeshes[o]))n.scene.remove(a);delete n.shopProductTraitMeshes[o]}}function mg(n,e){var t,i;for(const r of e.shop){const s=n.shopProductBackgroundMeshes[r.id];if(!s)throw new Error("Background not found !");const o=!n.shopProductAppellationMeshes[r.id];(t=n.shopProductAppellationMeshes)[i=r.id]||(t[i]=new ft(n.shopProductAppellationGeometry[r.appellation],n.shopProductAppellationMaterial));const a=n.shopProductAppellationMeshes[r.id];if(o){n.scene.add(a),a.rotation.x=s.rotation.x,a.position.x=s.position.x-.03;const l=new q(0,.055,0);l.applyEuler(s.rotation),a.position.y=s.position.y+l.y,a.position.z=s.position.z+1e-4+l.z}}for(const r of Object.keys(n.shopProductAppellationMeshes))if(!e.shop.find(s=>s.id===r)){const s=n.shopProductAppellationMeshes[r];if(!s)throw new Error("Mesh not found !");n.scene.remove(s),delete n.shopProductAppellationMeshes[r]}}function vg(n,e){var t;for(const[i,r]of Object.entries(e.bench)){const s=Number.parseInt(i),o=!n.benchHeroMeshes[s];(t=n.benchHeroMeshes)[s]||(t[s]=[r.appellation,new ft(n.benchHeroGeometry,n.benchHeroMaterials[r.appellation])]);const[a,l]=n.benchHeroMeshes[s],c=n.benchSlotMeshes[s];if(!c)throw new Error("Slot not found !");o&&(n.scene.add(l),l.position.y=c.position.y+.6,l.position.z=c.position.z+.05,l.position.x=c.position.x,l.scale.set(.5,.5,.5)),a!==r.appellation&&(l.material=n.benchHeroMaterials[r.appellation])}for(const[i,[r,s]]of Object.entries(n.benchHeroMeshes)){const o=Number.parseInt(i);e.bench[o]||(n.scene.remove(s),delete n.benchHeroMeshes[o])}}function gg(n,e){ig(n,e),rg(n,e),sg(n,e),og(n,e),ag(n,e),lg(n,e),cg(n,e),ug(n,e),Ag(n,e),hg(n,e),dg(n,e),pg(n,e),mg(n,e),vg(n,e)}var _g=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function xg(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var oA={exports:{}};(function(n,e){(function(t,i){n.exports=i()})(_g,function(){var t=function(){function i(d){return o.appendChild(d.dom),d}function r(d){for(var m=0;m<o.children.length;m++)o.children[m].style.display=m===d?"block":"none";s=d}var s=0,o=document.createElement("div");o.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",o.addEventListener("click",function(d){d.preventDefault(),r(++s%o.children.length)},!1);var a=(performance||Date).now(),l=a,c=0,u=i(new t.Panel("FPS","#0ff","#002")),A=i(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var h=i(new t.Panel("MB","#f08","#201"));return r(0),{REVISION:16,dom:o,addPanel:i,showPanel:r,begin:function(){a=(performance||Date).now()},end:function(){c++;var d=(performance||Date).now();if(A.update(d-a,200),d>l+1e3&&(u.update(1e3*c/(d-l),100),l=d,c=0,h)){var m=performance.memory;h.update(m.usedJSHeapSize/1048576,m.jsHeapSizeLimit/1048576)}return d},update:function(){a=this.end()},domElement:o,setMode:r}};return t.Panel=function(i,r,s){var o=1/0,a=0,l=Math.round,c=l(window.devicePixelRatio||1),u=80*c,A=48*c,h=3*c,d=2*c,m=3*c,v=15*c,p=74*c,f=30*c,E=document.createElement("canvas");E.width=u,E.height=A,E.style.cssText="width:80px;height:48px";var _=E.getContext("2d");return _.font="bold "+9*c+"px Helvetica,Arial,sans-serif",_.textBaseline="top",_.fillStyle=s,_.fillRect(0,0,u,A),_.fillStyle=r,_.fillText(i,h,d),_.fillRect(m,v,p,f),_.fillStyle=s,_.globalAlpha=.9,_.fillRect(m,v,p,f),{dom:E,update:function(b,N){o=Math.min(o,b),a=Math.max(a,b),_.fillStyle=s,_.globalAlpha=1,_.fillRect(0,0,u,v),_.fillStyle=r,_.fillText(l(b)+" "+i+" ("+l(o)+"-"+l(a)+")",h,d),_.drawImage(E,m+c,v,p-c,f,m,v,p-c,f),_.fillRect(m+p-c,v,c,f),_.fillStyle=s,_.globalAlpha=.9,_.fillRect(m+p-c,v,c,l((1-b/N)*f))}}},t})})(oA);var yg=oA.exports;const mo=xg(yg);async function Sg(){const n=new mo,e=new mo,t=new mo;for(n.showPanel(0),e.showPanel(1),t.showPanel(1),document.body.appendChild(n.dom),document.body.appendChild(e.dom),document.body.appendChild(t.dom),e.dom.style.left="80px",t.dom.style.left="160px",t.begin();;)await Qa(y2),t.end(),n.begin(),e.begin(),await Qa(S2),t.begin(),n.end(),e.end()}Lv.then(()=>{const n=Iv();w2().pipe(Zc(ju()),T2(n),rh(),sh(([e])=>P2(e))).subscribe(),new ng().addPiece().addPiece().addPiece().addPiece().addPiece().addPiece().addPiece().addPiece().addPiece().addPiece().addPiece().addPiece().addPiece().addPiece().addPiece().subscribe({next(e){gg(n,e)}}),Sg().catch(console.error)}).catch(console.error);
