var Ya=n=>{throw TypeError(n)};var dh=(n,e,t)=>e.has(n)||Ya("Cannot "+t);var Za=(n,e,t)=>e.has(n)?Ya("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(n):e.set(n,t);var Ja=(n,e,t)=>(dh(n,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var go=function(n,e){return go=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])},go(n,e)};function Un(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");go(n,e);function t(){this.constructor=n}n.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}function ph(n,e,t,i){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(u){try{c(i.next(u))}catch(h){o(h)}}function l(u){try{c(i.throw(u))}catch(h){o(h)}}function c(u){u.done?s(u.value):r(u.value).then(a,l)}c((i=i.apply(n,e||[])).next())})}function Ac(n,e){var t={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},i,r,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(c){return function(u){return l([c,u])}}function l(c){if(i)throw new TypeError("Generator is already executing.");for(;o&&(o=0,c[0]&&(t=0)),t;)try{if(i=1,r&&(s=c[0]&2?r.return:c[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,c[1])).done)return s;switch(r=0,s&&(c=[c[0]&2,s.value]),c[0]){case 0:case 1:s=c;break;case 4:return t.label++,{value:c[1],done:!1};case 5:t.label++,r=c[1],c=[0];continue;case 7:c=t.ops.pop(),t.trys.pop();continue;default:if(s=t.trys,!(s=s.length>0&&s[s.length-1])&&(c[0]===6||c[0]===2)){t=0;continue}if(c[0]===3&&(!s||c[1]>s[0]&&c[1]<s[3])){t.label=c[1];break}if(c[0]===6&&t.label<s[1]){t.label=s[1],s=c;break}if(s&&t.label<s[2]){t.label=s[2],t.ops.push(c);break}s[2]&&t.ops.pop(),t.trys.pop();continue}c=e.call(n,t)}catch(u){c=[6,u],r=0}finally{i=s=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function Fi(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Rn(n,e){var t=typeof Symbol=="function"&&n[Symbol.iterator];if(!t)return n;var i=t.call(n),r,s=[],o;try{for(;(e===void 0||e-- >0)&&!(r=i.next()).done;)s.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(t=i.return)&&t.call(i)}finally{if(o)throw o.error}}return s}function Pn(n,e,t){if(t||arguments.length===2)for(var i=0,r=e.length,s;i<r;i++)(s||!(i in e))&&(s||(s=Array.prototype.slice.call(e,0,i)),s[i]=e[i]);return n.concat(s||Array.prototype.slice.call(e))}function qi(n){return this instanceof qi?(this.v=n,this):new qi(n)}function mh(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=t.apply(n,e||[]),r,s=[];return r={},a("next"),a("throw"),a("return",o),r[Symbol.asyncIterator]=function(){return this},r;function o(d){return function(_){return Promise.resolve(_).then(d,h)}}function a(d,_){i[d]&&(r[d]=function(g){return new Promise(function(m,p){s.push([d,g,m,p])>1||l(d,g)})},_&&(r[d]=_(r[d])))}function l(d,_){try{c(i[d](_))}catch(g){f(s[0][3],g)}}function c(d){d.value instanceof qi?Promise.resolve(d.value.v).then(u,h):f(s[0][2],d)}function u(d){l("next",d)}function h(d){l("throw",d)}function f(d,_){d(_),s.shift(),s.length&&l(s[0][0],s[0][1])}}function _h(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof Fi=="function"?Fi(n):n[Symbol.iterator](),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(s){t[s]=n[s]&&function(o){return new Promise(function(a,l){o=n[s](o),r(a,l,o.done,o.value)})}}function r(s,o,a,l){Promise.resolve(l).then(function(c){s({value:c,done:a})},o)}}function at(n){return typeof n=="function"}function yc(n){var e=function(i){Error.call(i),i.stack=new Error().stack},t=n(e);return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var Us=yc(function(n){return function(t){n(this),this.message=t?t.length+` errors occurred during unsubscription:
`+t.map(function(i,r){return r+1+") "+i.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=t}});function hs(n,e){if(n){var t=n.indexOf(e);0<=t&&n.splice(t,1)}}var mr=function(){function n(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}return n.prototype.unsubscribe=function(){var e,t,i,r,s;if(!this.closed){this.closed=!0;var o=this._parentage;if(o)if(this._parentage=null,Array.isArray(o))try{for(var a=Fi(o),l=a.next();!l.done;l=a.next()){var c=l.value;c.remove(this)}}catch(g){e={error:g}}finally{try{l&&!l.done&&(t=a.return)&&t.call(a)}finally{if(e)throw e.error}}else o.remove(this);var u=this.initialTeardown;if(at(u))try{u()}catch(g){s=g instanceof Us?g.errors:[g]}var h=this._finalizers;if(h){this._finalizers=null;try{for(var f=Fi(h),d=f.next();!d.done;d=f.next()){var _=d.value;try{Ka(_)}catch(g){s=s??[],g instanceof Us?s=Pn(Pn([],Rn(s)),Rn(g.errors)):s.push(g)}}}catch(g){i={error:g}}finally{try{d&&!d.done&&(r=f.return)&&r.call(f)}finally{if(i)throw i.error}}}if(s)throw new Us(s)}},n.prototype.add=function(e){var t;if(e&&e!==this)if(this.closed)Ka(e);else{if(e instanceof n){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}},n.prototype._hasParent=function(e){var t=this._parentage;return t===e||Array.isArray(t)&&t.includes(e)},n.prototype._addParent=function(e){var t=this._parentage;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e},n.prototype._removeParent=function(e){var t=this._parentage;t===e?this._parentage=null:Array.isArray(t)&&hs(t,e)},n.prototype.remove=function(e){var t=this._finalizers;t&&hs(t,e),e instanceof n&&e._removeParent(this)},n.EMPTY=function(){var e=new n;return e.closed=!0,e}(),n}(),Sc=mr.EMPTY;function Mc(n){return n instanceof mr||n&&"closed"in n&&at(n.remove)&&at(n.add)&&at(n.unsubscribe)}function Ka(n){at(n)?n():n.unsubscribe()}var bc={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},Ec={setTimeout:function(n,e){for(var t=[],i=2;i<arguments.length;i++)t[i-2]=arguments[i];return setTimeout.apply(void 0,Pn([n,e],Rn(t)))},clearTimeout:function(n){var e=Ec.delegate;return((e==null?void 0:e.clearTimeout)||clearTimeout)(n)},delegate:void 0};function Tc(n){Ec.setTimeout(function(){throw n})}function ja(){}function ns(n){n()}var ma=function(n){Un(e,n);function e(t){var i=n.call(this)||this;return i.isStopped=!1,t?(i.destination=t,Mc(t)&&t.add(i)):i.destination=Ah,i}return e.create=function(t,i,r){return new vo(t,i,r)},e.prototype.next=function(t){this.isStopped||this._next(t)},e.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,n.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(t){this.destination.next(t)},e.prototype._error=function(t){try{this.destination.error(t)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e}(mr),gh=Function.prototype.bind;function Ds(n,e){return gh.call(n,e)}var vh=function(){function n(e){this.partialObserver=e}return n.prototype.next=function(e){var t=this.partialObserver;if(t.next)try{t.next(e)}catch(i){br(i)}},n.prototype.error=function(e){var t=this.partialObserver;if(t.error)try{t.error(e)}catch(i){br(i)}else br(e)},n.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(t){br(t)}},n}(),vo=function(n){Un(e,n);function e(t,i,r){var s=n.call(this)||this,o;if(at(t)||!t)o={next:t??void 0,error:i??void 0,complete:r??void 0};else{var a;s&&bc.useDeprecatedNextContext?(a=Object.create(t),a.unsubscribe=function(){return s.unsubscribe()},o={next:t.next&&Ds(t.next,a),error:t.error&&Ds(t.error,a),complete:t.complete&&Ds(t.complete,a)}):o=t}return s.destination=new vh(o),s}return e}(ma);function br(n){Tc(n)}function xh(n){throw n}var Ah={closed:!0,next:ja,error:xh,complete:ja},_a=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function bs(n){return n}function yh(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return wc(n)}function wc(n){return n.length===0?bs:n.length===1?n[0]:function(t){return n.reduce(function(i,r){return r(i)},t)}}var zt=function(){function n(e){e&&(this._subscribe=e)}return n.prototype.lift=function(e){var t=new n;return t.source=this,t.operator=e,t},n.prototype.subscribe=function(e,t,i){var r=this,s=Mh(e)?e:new vo(e,t,i);return ns(function(){var o=r,a=o.operator,l=o.source;s.add(a?a.call(s,l):l?r._subscribe(s):r._trySubscribe(s))}),s},n.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(t){e.error(t)}},n.prototype.forEach=function(e,t){var i=this;return t=$a(t),new t(function(r,s){var o=new vo({next:function(a){try{e(a)}catch(l){s(l),o.unsubscribe()}},error:s,complete:r});i.subscribe(o)})},n.prototype._subscribe=function(e){var t;return(t=this.source)===null||t===void 0?void 0:t.subscribe(e)},n.prototype[_a]=function(){return this},n.prototype.pipe=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return wc(e)(this)},n.prototype.toPromise=function(e){var t=this;return e=$a(e),new e(function(i,r){var s;t.subscribe(function(o){return s=o},function(o){return r(o)},function(){return i(s)})})},n.create=function(e){return new n(e)},n}();function $a(n){var e;return(e=n??bc.Promise)!==null&&e!==void 0?e:Promise}function Sh(n){return n&&at(n.next)&&at(n.error)&&at(n.complete)}function Mh(n){return n&&n instanceof ma||Sh(n)&&Mc(n)}function bh(n){return at(n==null?void 0:n.lift)}function Dn(n){return function(e){if(bh(e))return e.lift(function(t){try{return n(t,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function ti(n,e,t,i,r){return new Eh(n,e,t,i,r)}var Eh=function(n){Un(e,n);function e(t,i,r,s,o,a){var l=n.call(this,t)||this;return l.onFinalize=o,l.shouldUnsubscribe=a,l._next=i?function(c){try{i(c)}catch(u){t.error(u)}}:n.prototype._next,l._error=s?function(c){try{s(c)}catch(u){t.error(u)}finally{this.unsubscribe()}}:n.prototype._error,l._complete=r?function(){try{r()}catch(c){t.error(c)}finally{this.unsubscribe()}}:n.prototype._complete,l}return e.prototype.unsubscribe=function(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var i=this.closed;n.prototype.unsubscribe.call(this),!i&&((t=this.onFinalize)===null||t===void 0||t.call(this))}},e}(ma),Th=yc(function(n){return function(){n(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),Cc=function(n){Un(e,n);function e(){var t=n.call(this)||this;return t.closed=!1,t.currentObservers=null,t.observers=[],t.isStopped=!1,t.hasError=!1,t.thrownError=null,t}return e.prototype.lift=function(t){var i=new Qa(this,this);return i.operator=t,i},e.prototype._throwIfClosed=function(){if(this.closed)throw new Th},e.prototype.next=function(t){var i=this;ns(function(){var r,s;if(i._throwIfClosed(),!i.isStopped){i.currentObservers||(i.currentObservers=Array.from(i.observers));try{for(var o=Fi(i.currentObservers),a=o.next();!a.done;a=o.next()){var l=a.value;l.next(t)}}catch(c){r={error:c}}finally{try{a&&!a.done&&(s=o.return)&&s.call(o)}finally{if(r)throw r.error}}}})},e.prototype.error=function(t){var i=this;ns(function(){if(i._throwIfClosed(),!i.isStopped){i.hasError=i.isStopped=!0,i.thrownError=t;for(var r=i.observers;r.length;)r.shift().error(t)}})},e.prototype.complete=function(){var t=this;ns(function(){if(t._throwIfClosed(),!t.isStopped){t.isStopped=!0;for(var i=t.observers;i.length;)i.shift().complete()}})},e.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(e.prototype,"observed",{get:function(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0},enumerable:!1,configurable:!0}),e.prototype._trySubscribe=function(t){return this._throwIfClosed(),n.prototype._trySubscribe.call(this,t)},e.prototype._subscribe=function(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)},e.prototype._innerSubscribe=function(t){var i=this,r=this,s=r.hasError,o=r.isStopped,a=r.observers;return s||o?Sc:(this.currentObservers=null,a.push(t),new mr(function(){i.currentObservers=null,hs(a,t)}))},e.prototype._checkFinalizedStatuses=function(t){var i=this,r=i.hasError,s=i.thrownError,o=i.isStopped;r?t.error(s):o&&t.complete()},e.prototype.asObservable=function(){var t=new zt;return t.source=this,t},e.create=function(t,i){return new Qa(t,i)},e}(zt),Qa=function(n){Un(e,n);function e(t,i){var r=n.call(this)||this;return r.destination=t,r.source=i,r}return e.prototype.next=function(t){var i,r;(r=(i=this.destination)===null||i===void 0?void 0:i.next)===null||r===void 0||r.call(i,t)},e.prototype.error=function(t){var i,r;(r=(i=this.destination)===null||i===void 0?void 0:i.error)===null||r===void 0||r.call(i,t)},e.prototype.complete=function(){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.complete)===null||i===void 0||i.call(t)},e.prototype._subscribe=function(t){var i,r;return(r=(i=this.source)===null||i===void 0?void 0:i.subscribe(t))!==null&&r!==void 0?r:Sc},e}(Cc),wh={now:function(){return Date.now()},delegate:void 0},Ch=function(n){Un(e,n);function e(t,i){return n.call(this)||this}return e.prototype.schedule=function(t,i){return this},e}(mr),xo={setInterval:function(n,e){for(var t=[],i=2;i<arguments.length;i++)t[i-2]=arguments[i];return setInterval.apply(void 0,Pn([n,e],Rn(t)))},clearInterval:function(n){var e=xo.delegate;return((e==null?void 0:e.clearInterval)||clearInterval)(n)},delegate:void 0},Rh=function(n){Un(e,n);function e(t,i){var r=n.call(this,t,i)||this;return r.scheduler=t,r.work=i,r.pending=!1,r}return e.prototype.schedule=function(t,i){var r;if(i===void 0&&(i=0),this.closed)return this;this.state=t;var s=this.id,o=this.scheduler;return s!=null&&(this.id=this.recycleAsyncId(o,s,i)),this.pending=!0,this.delay=i,this.id=(r=this.id)!==null&&r!==void 0?r:this.requestAsyncId(o,this.id,i),this},e.prototype.requestAsyncId=function(t,i,r){return r===void 0&&(r=0),xo.setInterval(t.flush.bind(t,this),r)},e.prototype.recycleAsyncId=function(t,i,r){if(r===void 0&&(r=0),r!=null&&this.delay===r&&this.pending===!1)return i;i!=null&&xo.clearInterval(i)},e.prototype.execute=function(t,i){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var r=this._execute(t,i);if(r)return r;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},e.prototype._execute=function(t,i){var r=!1,s;try{this.work(t)}catch(o){r=!0,s=o||new Error("Scheduled action threw falsy error")}if(r)return this.unsubscribe(),s},e.prototype.unsubscribe=function(){if(!this.closed){var t=this,i=t.id,r=t.scheduler,s=r.actions;this.work=this.state=this.scheduler=null,this.pending=!1,hs(s,this),i!=null&&(this.id=this.recycleAsyncId(r,i,null)),this.delay=null,n.prototype.unsubscribe.call(this)}},e}(Ch),el=function(){function n(e,t){t===void 0&&(t=n.now),this.schedulerActionCtor=e,this.now=t}return n.prototype.schedule=function(e,t,i){return t===void 0&&(t=0),new this.schedulerActionCtor(this,e).schedule(i,t)},n.now=wh.now,n}(),Ph=function(n){Un(e,n);function e(t,i){i===void 0&&(i=el.now);var r=n.call(this,t,i)||this;return r.actions=[],r._active=!1,r}return e.prototype.flush=function(t){var i=this.actions;if(this._active){i.push(t);return}var r;this._active=!0;do if(r=t.execute(t.state,t.delay))break;while(t=i.shift());if(this._active=!1,r){for(;t=i.shift();)t.unsubscribe();throw r}},e}(el),Rc=new Ph(Rh),Lh=Rc;function Pc(n){return n&&at(n.schedule)}function Lc(n){return n[n.length-1]}function qh(n){return at(Lc(n))?n.pop():void 0}function qc(n){return Pc(Lc(n))?n.pop():void 0}var Ic=function(n){return n&&typeof n.length=="number"&&typeof n!="function"};function Uc(n){return at(n==null?void 0:n.then)}function Dc(n){return at(n[_a])}function Nc(n){return Symbol.asyncIterator&&at(n==null?void 0:n[Symbol.asyncIterator])}function Oc(n){return new TypeError("You provided "+(n!==null&&typeof n=="object"?"an invalid object":"'"+n+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function Ih(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Fc=Ih();function Bc(n){return at(n==null?void 0:n[Fc])}function zc(n){return mh(this,arguments,function(){var t,i,r,s;return Ac(this,function(o){switch(o.label){case 0:t=n.getReader(),o.label=1;case 1:o.trys.push([1,,9,10]),o.label=2;case 2:return[4,qi(t.read())];case 3:return i=o.sent(),r=i.value,s=i.done,s?[4,qi(void 0)]:[3,5];case 4:return[2,o.sent()];case 5:return[4,qi(r)];case 6:return[4,o.sent()];case 7:return o.sent(),[3,2];case 8:return[3,10];case 9:return t.releaseLock(),[7];case 10:return[2]}})})}function kc(n){return at(n==null?void 0:n.getReader)}function _r(n){if(n instanceof zt)return n;if(n!=null){if(Dc(n))return Uh(n);if(Ic(n))return Dh(n);if(Uc(n))return Nh(n);if(Nc(n))return Hc(n);if(Bc(n))return Oh(n);if(kc(n))return Fh(n)}throw Oc(n)}function Uh(n){return new zt(function(e){var t=n[_a]();if(at(t.subscribe))return t.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function Dh(n){return new zt(function(e){for(var t=0;t<n.length&&!e.closed;t++)e.next(n[t]);e.complete()})}function Nh(n){return new zt(function(e){n.then(function(t){e.closed||(e.next(t),e.complete())},function(t){return e.error(t)}).then(null,Tc)})}function Oh(n){return new zt(function(e){var t,i;try{for(var r=Fi(n),s=r.next();!s.done;s=r.next()){var o=s.value;if(e.next(o),e.closed)return}}catch(a){t={error:a}}finally{try{s&&!s.done&&(i=r.return)&&i.call(r)}finally{if(t)throw t.error}}e.complete()})}function Hc(n){return new zt(function(e){Bh(n,e).catch(function(t){return e.error(t)})})}function Fh(n){return Hc(zc(n))}function Bh(n,e){var t,i,r,s;return ph(this,void 0,void 0,function(){var o,a;return Ac(this,function(l){switch(l.label){case 0:l.trys.push([0,5,6,11]),t=_h(n),l.label=1;case 1:return[4,t.next()];case 2:if(i=l.sent(),!!i.done)return[3,4];if(o=i.value,e.next(o),e.closed)return[2];l.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return a=l.sent(),r={error:a},[3,11];case 6:return l.trys.push([6,,9,10]),i&&!i.done&&(s=t.return)?[4,s.call(t)]:[3,8];case 7:l.sent(),l.label=8;case 8:return[3,10];case 9:if(r)throw r.error;return[7];case 10:return[7];case 11:return e.complete(),[2]}})})}function ei(n,e,t,i,r){i===void 0&&(i=0),r===void 0&&(r=!1);var s=e.schedule(function(){t(),r?n.add(this.schedule(null,i)):this.unsubscribe()},i);if(n.add(s),!r)return s}function Vc(n,e){return e===void 0&&(e=0),Dn(function(t,i){t.subscribe(ti(i,function(r){return ei(i,n,function(){return i.next(r)},e)},function(){return ei(i,n,function(){return i.complete()},e)},function(r){return ei(i,n,function(){return i.error(r)},e)}))})}function Gc(n,e){return e===void 0&&(e=0),Dn(function(t,i){i.add(n.schedule(function(){return t.subscribe(i)},e))})}function zh(n,e){return _r(n).pipe(Gc(e),Vc(e))}function kh(n,e){return _r(n).pipe(Gc(e),Vc(e))}function Hh(n,e){return new zt(function(t){var i=0;return e.schedule(function(){i===n.length?t.complete():(t.next(n[i++]),t.closed||this.schedule())})})}function Vh(n,e){return new zt(function(t){var i;return ei(t,e,function(){i=n[Fc](),ei(t,e,function(){var r,s,o;try{r=i.next(),s=r.value,o=r.done}catch(a){t.error(a);return}o?t.complete():t.next(s)},0,!0)}),function(){return at(i==null?void 0:i.return)&&i.return()}})}function Wc(n,e){if(!n)throw new Error("Iterable cannot be null");return new zt(function(t){ei(t,e,function(){var i=n[Symbol.asyncIterator]();ei(t,e,function(){i.next().then(function(r){r.done?t.complete():t.next(r.value)})},0,!0)})})}function Gh(n,e){return Wc(zc(n),e)}function Wh(n,e){if(n!=null){if(Dc(n))return zh(n,e);if(Ic(n))return Hh(n,e);if(Uc(n))return kh(n,e);if(Nc(n))return Wc(n,e);if(Bc(n))return Vh(n,e);if(kc(n))return Gh(n,e)}throw Oc(n)}function Xc(n,e){return e?Wh(n,e):_r(n)}function Xh(n){return n instanceof Date&&!isNaN(n)}function ga(n,e){return Dn(function(t,i){var r=0;t.subscribe(ti(i,function(s){i.next(n.call(e,s,r++))}))})}var Yh=Array.isArray;function Zh(n,e){return Yh(e)?n.apply(void 0,Pn([],Rn(e))):n(e)}function Jh(n){return ga(function(e){return Zh(n,e)})}function Kh(n,e,t){return t===void 0&&(t=bs),function(i){tl(e,function(){for(var r=n.length,s=new Array(r),o=r,a=r,l=function(u){tl(e,function(){var h=Xc(n[u],e),f=!1;h.subscribe(ti(i,function(d){s[u]=d,f||(f=!0,a--),a||i.next(t(s.slice()))},function(){--o||i.complete()}))},i)},c=0;c<r;c++)l(c)})}}function tl(n,e,t){e()}function jh(n,e,t,i,r,s,o,a){var l=[],c=0,u=0,h=!1,f=function(){h&&!l.length&&!c&&e.complete()},d=function(g){return c<i?_(g):l.push(g)},_=function(g){c++;var m=!1;_r(t(g,u++)).subscribe(ti(e,function(p){e.next(p)},function(){m=!0},void 0,function(){if(m)try{c--;for(var p=function(){var E=l.shift();o||_(E)};l.length&&c<i;)p();f()}catch(E){e.error(E)}}))};return n.subscribe(ti(e,d,function(){h=!0,f()})),function(){}}function Yc(n,e,t){return t===void 0&&(t=1/0),at(e)?Yc(function(i,r){return ga(function(s,o){return e(i,s,r,o)})(_r(n(i,r)))},t):(typeof e=="number"&&(t=e),Dn(function(i,r){return jh(i,r,n,t)}))}function $h(n){return Yc(bs,n)}function Qh(){return $h(1)}function nl(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return Qh()(Xc(n,qc(n)))}function ef(n,e,t){t===void 0&&(t=Lh);var i=-1;return Pc(e)?t=e:i=e,new zt(function(r){var s=Xh(n)?+n-t.now():n;s<0&&(s=0);var o=0;return t.schedule(function(){r.closed||(r.next(o++),0<=i?this.schedule(void 0,i):r.complete())},s)})}function tf(n,e){return e===void 0&&(e=Rc),ef(n,n,e)}var nf=Array.isArray;function rf(n){return n.length===1&&nf(n[0])?n[0]:n}function Zc(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];var t=qh(n);return t?yh(Zc.apply(void 0,Pn([],Rn(n))),Jh(t)):Dn(function(i,r){Kh(Pn([i],Rn(rf(n))))(r)})}function sf(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return Zc.apply(void 0,Pn([],Rn(n)))}function of(){return Dn(function(n,e){var t,i=!1;n.subscribe(ti(e,function(r){var s=t;t=r,i&&e.next([s,r]),i=!0}))})}function Jc(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];var t=qc(n);return Dn(function(i,r){(t?nl(n,i,t):nl(n,i)).subscribe(r)})}function af(n,e,t){var i=at(n)||e||t?{next:n,error:e,complete:t}:n;return i?Dn(function(r,s){var o;(o=i.subscribe)===null||o===void 0||o.call(i);var a=!0;r.subscribe(ti(s,function(l){var c;(c=i.next)===null||c===void 0||c.call(i,l),s.next(l)},function(){var l;a=!1,(l=i.complete)===null||l===void 0||l.call(i),s.complete()},function(l){var c;a=!1,(c=i.error)===null||c===void 0||c.call(i,l),s.error(l)},function(){var l,c;a&&((l=i.unsubscribe)===null||l===void 0||l.call(i)),(c=i.finalize)===null||c===void 0||c.call(i)}))}):bs}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const va="167",lf=0,il=1,cf=2,Kc=1,uf=2,dn=3,Ln=0,Rt=1,tn=2,wn=0,Ii=1,rl=2,sl=3,ol=4,hf=5,Jn=100,ff=101,df=102,pf=103,mf=104,_f=200,gf=201,vf=202,xf=203,Ao=204,yo=205,Af=206,yf=207,Sf=208,Mf=209,bf=210,Ef=211,Tf=212,wf=213,Cf=214,Rf=0,Pf=1,Lf=2,fs=3,qf=4,If=5,Uf=6,Df=7,jc=0,Nf=1,Of=2,Cn=0,Ff=1,Bf=2,zf=3,kf=4,Hf=5,Vf=6,Gf=7,$c=300,Bi=301,zi=302,So=303,Mo=304,Es=306,bo=1e3,jn=1001,Eo=1002,Ct=1003,Wf=1004,Er=1005,Yt=1006,Ns=1007,$n=1008,_n=1009,Qc=1010,eu=1011,cr=1012,xa=1013,ni=1014,pn=1015,gr=1016,Aa=1017,ya=1018,ki=1020,tu=35902,nu=1021,iu=1022,Zt=1023,ru=1024,su=1025,Ui=1026,Hi=1027,ou=1028,Sa=1029,au=1030,Ma=1031,ba=1033,is=33776,rs=33777,ss=33778,os=33779,To=35840,wo=35841,Co=35842,Ro=35843,Po=36196,Lo=37492,qo=37496,Io=37808,Uo=37809,Do=37810,No=37811,Oo=37812,Fo=37813,Bo=37814,zo=37815,ko=37816,Ho=37817,Vo=37818,Go=37819,Wo=37820,Xo=37821,as=36492,Yo=36494,Zo=36495,lu=36283,Jo=36284,Ko=36285,jo=36286,Xf=3200,Yf=3201,cu=0,Zf=1,Tn="",Xt="srgb",Nn="srgb-linear",Ea="display-p3",Ts="display-p3-linear",ds="linear",tt="srgb",ps="rec709",ms="p3",li=7680,al=519,Jf=512,Kf=513,jf=514,uu=515,$f=516,Qf=517,ed=518,td=519,ll=35044,cl="300 es",mn=2e3,_s=2001;class Wi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Os=Math.PI/180,$o=180/Math.PI;function Xi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(yt[n&255]+yt[n>>8&255]+yt[n>>16&255]+yt[n>>24&255]+"-"+yt[e&255]+yt[e>>8&255]+"-"+yt[e>>16&15|64]+yt[e>>24&255]+"-"+yt[t&63|128]+yt[t>>8&255]+"-"+yt[t>>16&255]+yt[t>>24&255]+yt[i&255]+yt[i>>8&255]+yt[i>>16&255]+yt[i>>24&255]).toLowerCase()}function Mt(n,e,t){return Math.max(e,Math.min(t,n))}function nd(n,e){return(n%e+e)%e}function Fs(n,e,t){return(1-t)*n+t*e}function Zi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function wt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class de{constructor(e=0,t=0){de.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(e,t,i,r,s,o,a,l,c){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],_=i[8],g=r[0],m=r[3],p=r[6],E=r[1],x=r[4],M=r[7],D=r[2],C=r[5],w=r[8];return s[0]=o*g+a*E+l*D,s[3]=o*m+a*x+l*C,s[6]=o*p+a*M+l*w,s[1]=c*g+u*E+h*D,s[4]=c*m+u*x+h*C,s[7]=c*p+u*M+h*w,s[2]=f*g+d*E+_*D,s[5]=f*m+d*x+_*C,s[8]=f*p+d*M+_*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,_=t*h+i*f+r*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(r*c-u*i)*g,e[2]=(a*i-r*o)*g,e[3]=f*g,e[4]=(u*t-r*l)*g,e[5]=(r*s-a*t)*g,e[6]=d*g,e[7]=(i*l-c*t)*g,e[8]=(o*t-i*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Bs.makeScale(e,t)),this}rotate(e){return this.premultiply(Bs.makeRotation(-e)),this}translate(e,t){return this.premultiply(Bs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Bs=new Be;function hu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ur(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function id(){const n=ur("canvas");return n.style.display="block",n}const ul={};function rr(n){n in ul||(ul[n]=!0,console.warn(n))}function rd(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const hl=new Be().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),fl=new Be().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ji={[Nn]:{transfer:ds,primaries:ps,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[Xt]:{transfer:tt,primaries:ps,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ts]:{transfer:ds,primaries:ms,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(fl),fromReference:n=>n.applyMatrix3(hl)},[Ea]:{transfer:tt,primaries:ms,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(fl),fromReference:n=>n.applyMatrix3(hl).convertLinearToSRGB()}},sd=new Set([Nn,Ts]),$e={enabled:!0,_workingColorSpace:Nn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!sd.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Ji[e].toReference,r=Ji[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Ji[n].primaries},getTransfer:function(n){return n===Tn?ds:Ji[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(Ji[e].luminanceCoefficients)}};function Di(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function zs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ci;class od{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ci===void 0&&(ci=ur("canvas")),ci.width=e.width,ci.height=e.height;const i=ci.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ci}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ur("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Di(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Di(t[i]/255)*255):t[i]=Di(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ad=0;class fu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=Xi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ks(r[o].image)):s.push(ks(r[o]))}else s=ks(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ks(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?od.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ld=0;class bt extends Wi{constructor(e=bt.DEFAULT_IMAGE,t=bt.DEFAULT_MAPPING,i=jn,r=jn,s=Yt,o=$n,a=Zt,l=_n,c=bt.DEFAULT_ANISOTROPY,u=Tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ld++}),this.uuid=Xi(),this.name="",this.source=new fu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$c)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bo:e.x=e.x-Math.floor(e.x);break;case jn:e.x=e.x<0?0:1;break;case Eo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bo:e.y=e.y-Math.floor(e.y);break;case jn:e.y=e.y<0?0:1;break;case Eo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}bt.DEFAULT_IMAGE=null;bt.DEFAULT_MAPPING=$c;bt.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,t=0,i=0,r=1){_t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,M=(d+1)/2,D=(p+1)/2,C=(u+f)/4,w=(h+g)/4,U=(_+m)/4;return x>M&&x>D?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=C/i,s=w/i):M>D?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=C/r,s=U/r):D<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(D),i=w/s,r=U/s),this.set(i,r,s,t),this}let E=Math.sqrt((m-_)*(m-_)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(E)<.001&&(E=1),this.x=(m-_)/E,this.y=(h-g)/E,this.z=(f-u)/E,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cd extends Wi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new bt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new fu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ii extends cd{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class du extends bt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ud extends bt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const f=s[o+0],d=s[o+1],_=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=_,e[t+3]=g;return}if(h!==g||l!==f||c!==d||u!==_){let m=1-a;const p=l*f+c*d+u*_+h*g,E=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const D=Math.sqrt(x),C=Math.atan2(D,p*E);m=Math.sin(m*C)/D,a=Math.sin(a*C)/D}const M=a*E;if(l=l*m+f*M,c=c*m+d*M,u=u*m+_*M,h=h*m+g*M,m===1-a){const D=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=D,c*=D,u*=D,h*=D}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],f=s[o+1],d=s[o+2],_=s[o+3];return e[t]=a*_+u*h+l*d-c*f,e[t+1]=l*_+u*f+c*h-a*d,e[t+2]=c*_+u*d+a*f-l*h,e[t+3]=u*_-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),f=l(i/2),d=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"YXZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"ZXY":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"ZYX":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"YZX":this._x=f*u*h+c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h-f*d*_;break;case"XZY":this._x=f*u*h-c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(i>a&&i>h){const d=2*Math.sqrt(1+i-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-i-h);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-i-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,t=0,i=0){q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(dl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(dl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),h=2*(s*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Hs.copy(this).projectOnVector(e),this.sub(Hs)}reflect(e){return this.sub(Hs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hs=new q,dl=new vr;class xr{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ht.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ht.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ht.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ht):Ht.fromBufferAttribute(s,o),Ht.applyMatrix4(e.matrixWorld),this.expandByPoint(Ht);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Tr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Tr.copy(i.boundingBox)),Tr.applyMatrix4(e.matrixWorld),this.union(Tr)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ht),Ht.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ki),wr.subVectors(this.max,Ki),ui.subVectors(e.a,Ki),hi.subVectors(e.b,Ki),fi.subVectors(e.c,Ki),An.subVectors(hi,ui),yn.subVectors(fi,hi),kn.subVectors(ui,fi);let t=[0,-An.z,An.y,0,-yn.z,yn.y,0,-kn.z,kn.y,An.z,0,-An.x,yn.z,0,-yn.x,kn.z,0,-kn.x,-An.y,An.x,0,-yn.y,yn.x,0,-kn.y,kn.x,0];return!Vs(t,ui,hi,fi,wr)||(t=[1,0,0,0,1,0,0,0,1],!Vs(t,ui,hi,fi,wr))?!1:(Cr.crossVectors(An,yn),t=[Cr.x,Cr.y,Cr.z],Vs(t,ui,hi,fi,wr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ht).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ht).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ln=[new q,new q,new q,new q,new q,new q,new q,new q],Ht=new q,Tr=new xr,ui=new q,hi=new q,fi=new q,An=new q,yn=new q,kn=new q,Ki=new q,wr=new q,Cr=new q,Hn=new q;function Vs(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Hn.fromArray(n,s);const a=r.x*Math.abs(Hn.x)+r.y*Math.abs(Hn.y)+r.z*Math.abs(Hn.z),l=e.dot(Hn),c=t.dot(Hn),u=i.dot(Hn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const hd=new xr,ji=new q,Gs=new q;class Ta{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):hd.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ji.subVectors(e,this.center);const t=ji.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ji,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ji.copy(e.center).add(Gs)),this.expandByPoint(ji.copy(e.center).sub(Gs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const cn=new q,Ws=new q,Rr=new q,Sn=new q,Xs=new q,Pr=new q,Ys=new q;class fd{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,cn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=cn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(cn.copy(this.origin).addScaledVector(this.direction,t),cn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ws.copy(e).add(t).multiplyScalar(.5),Rr.copy(t).sub(e).normalize(),Sn.copy(this.origin).sub(Ws);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Rr),a=Sn.dot(this.direction),l=-Sn.dot(Rr),c=Sn.lengthSq(),u=Math.abs(1-o*o);let h,f,d,_;if(u>0)if(h=o*l-a,f=o*a-l,_=s*u,h>=0)if(f>=-_)if(f<=_){const g=1/u;h*=g,f*=g,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Ws).addScaledVector(Rr,f),d}intersectSphere(e,t){cn.subVectors(e.center,this.origin);const i=cn.dot(this.direction),r=cn.dot(cn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,cn)!==null}intersectTriangle(e,t,i,r,s){Xs.subVectors(t,e),Pr.subVectors(i,e),Ys.crossVectors(Xs,Pr);let o=this.direction.dot(Ys),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Sn.subVectors(this.origin,e);const l=a*this.direction.dot(Pr.crossVectors(Sn,Pr));if(l<0)return null;const c=a*this.direction.dot(Xs.cross(Sn));if(c<0||l+c>o)return null;const u=-a*Sn.dot(Ys);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,t,i,r,s,o,a,l,c,u,h,f,d,_,g,m){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,h,f,d,_,g,m)}set(e,t,i,r,s,o,a,l,c,u,h,f,d,_,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/di.setFromMatrixColumn(e,0).length(),s=1/di.setFromMatrixColumn(e,1).length(),o=1/di.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,d=o*h,_=a*u,g=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+_*c,t[5]=f-g*c,t[9]=-a*l,t[2]=g-f*c,t[6]=_+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,_=c*u,g=c*h;t[0]=f+g*a,t[4]=_*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-_,t[6]=g+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,_=c*u,g=c*h;t[0]=f-g*a,t[4]=-o*h,t[8]=_+d*a,t[1]=d+_*a,t[5]=o*u,t[9]=g-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,_=a*u,g=a*h;t[0]=l*u,t[4]=_*c-d,t[8]=f*c+g,t[1]=l*h,t[5]=g*c+f,t[9]=d*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=g-f*h,t[8]=_*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+_,t[10]=f-g*h}else if(e.order==="XZY"){const f=o*l,d=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+g,t[5]=o*u,t[9]=d*h-_,t[2]=_*h-d,t[6]=a*u,t[10]=g*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dd,e,pd)}lookAt(e,t,i){const r=this.elements;return qt.subVectors(e,t),qt.lengthSq()===0&&(qt.z=1),qt.normalize(),Mn.crossVectors(i,qt),Mn.lengthSq()===0&&(Math.abs(i.z)===1?qt.x+=1e-4:qt.z+=1e-4,qt.normalize(),Mn.crossVectors(i,qt)),Mn.normalize(),Lr.crossVectors(qt,Mn),r[0]=Mn.x,r[4]=Lr.x,r[8]=qt.x,r[1]=Mn.y,r[5]=Lr.y,r[9]=qt.y,r[2]=Mn.z,r[6]=Lr.z,r[10]=qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],_=i[2],g=i[6],m=i[10],p=i[14],E=i[3],x=i[7],M=i[11],D=i[15],C=r[0],w=r[4],U=r[8],b=r[12],A=r[1],R=r[5],G=r[9],z=r[13],W=r[2],Y=r[6],H=r[10],K=r[14],k=r[3],pe=r[7],ge=r[11],ve=r[15];return s[0]=o*C+a*A+l*W+c*k,s[4]=o*w+a*R+l*Y+c*pe,s[8]=o*U+a*G+l*H+c*ge,s[12]=o*b+a*z+l*K+c*ve,s[1]=u*C+h*A+f*W+d*k,s[5]=u*w+h*R+f*Y+d*pe,s[9]=u*U+h*G+f*H+d*ge,s[13]=u*b+h*z+f*K+d*ve,s[2]=_*C+g*A+m*W+p*k,s[6]=_*w+g*R+m*Y+p*pe,s[10]=_*U+g*G+m*H+p*ge,s[14]=_*b+g*z+m*K+p*ve,s[3]=E*C+x*A+M*W+D*k,s[7]=E*w+x*R+M*Y+D*pe,s[11]=E*U+x*G+M*H+D*ge,s[15]=E*b+x*z+M*K+D*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],_=e[3],g=e[7],m=e[11],p=e[15];return _*(+s*l*h-r*c*h-s*a*f+i*c*f+r*a*d-i*l*d)+g*(+t*l*d-t*c*f+s*o*f-r*o*d+r*c*u-s*l*u)+m*(+t*c*h-t*a*d-s*o*h+i*o*d+s*a*u-i*c*u)+p*(-r*a*u-t*l*h+t*a*f+r*o*h-i*o*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],_=e[12],g=e[13],m=e[14],p=e[15],E=h*m*c-g*f*c+g*l*d-a*m*d-h*l*p+a*f*p,x=_*f*c-u*m*c-_*l*d+o*m*d+u*l*p-o*f*p,M=u*g*c-_*h*c+_*a*d-o*g*d-u*a*p+o*h*p,D=_*h*l-u*g*l-_*a*f+o*g*f+u*a*m-o*h*m,C=t*E+i*x+r*M+s*D;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/C;return e[0]=E*w,e[1]=(g*f*s-h*m*s-g*r*d+i*m*d+h*r*p-i*f*p)*w,e[2]=(a*m*s-g*l*s+g*r*c-i*m*c-a*r*p+i*l*p)*w,e[3]=(h*l*s-a*f*s-h*r*c+i*f*c+a*r*d-i*l*d)*w,e[4]=x*w,e[5]=(u*m*s-_*f*s+_*r*d-t*m*d-u*r*p+t*f*p)*w,e[6]=(_*l*s-o*m*s-_*r*c+t*m*c+o*r*p-t*l*p)*w,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*d+t*l*d)*w,e[8]=M*w,e[9]=(_*h*s-u*g*s-_*i*d+t*g*d+u*i*p-t*h*p)*w,e[10]=(o*g*s-_*a*s+_*i*c-t*g*c-o*i*p+t*a*p)*w,e[11]=(u*a*s-o*h*s-u*i*c+t*h*c+o*i*d-t*a*d)*w,e[12]=D*w,e[13]=(u*g*r-_*h*r+_*i*f-t*g*f-u*i*m+t*h*m)*w,e[14]=(_*a*r-o*g*r-_*i*l+t*g*l+o*i*m-t*a*m)*w,e[15]=(o*h*r-u*a*r+u*i*l-t*h*l-o*i*f+t*a*f)*w,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,_=s*h,g=o*u,m=o*h,p=a*h,E=l*c,x=l*u,M=l*h,D=i.x,C=i.y,w=i.z;return r[0]=(1-(g+p))*D,r[1]=(d+M)*D,r[2]=(_-x)*D,r[3]=0,r[4]=(d-M)*C,r[5]=(1-(f+p))*C,r[6]=(m+E)*C,r[7]=0,r[8]=(_+x)*w,r[9]=(m-E)*w,r[10]=(1-(f+g))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=di.set(r[0],r[1],r[2]).length();const o=di.set(r[4],r[5],r[6]).length(),a=di.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Vt.copy(this);const c=1/s,u=1/o,h=1/a;return Vt.elements[0]*=c,Vt.elements[1]*=c,Vt.elements[2]*=c,Vt.elements[4]*=u,Vt.elements[5]*=u,Vt.elements[6]*=u,Vt.elements[8]*=h,Vt.elements[9]*=h,Vt.elements[10]*=h,t.setFromRotationMatrix(Vt),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=mn){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),h=(t+e)/(t-e),f=(i+r)/(i-r);let d,_;if(a===mn)d=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===_s)d=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=mn){const l=this.elements,c=1/(t-e),u=1/(i-r),h=1/(o-s),f=(t+e)*c,d=(i+r)*u;let _,g;if(a===mn)_=(o+s)*h,g=-2*h;else if(a===_s)_=s*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const di=new q,Vt=new ht,dd=new q(0,0,0),pd=new q(1,1,1),Mn=new q,Lr=new q,qt=new q,pl=new ht,ml=new vr;class sn{constructor(e=0,t=0,i=0,r=sn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(Mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return pl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ml.setFromEuler(this),this.setFromQuaternion(ml,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}sn.DEFAULT_ORDER="XYZ";class pu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let md=0;const _l=new q,pi=new vr,un=new ht,qr=new q,$i=new q,_d=new q,gd=new vr,gl=new q(1,0,0),vl=new q(0,1,0),xl=new q(0,0,1),Al={type:"added"},vd={type:"removed"},mi={type:"childadded",child:null},Zs={type:"childremoved",child:null};class Tt extends Wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=Xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DEFAULT_UP.clone();const e=new q,t=new sn,i=new vr,r=new q(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ht},normalMatrix:{value:new Be}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=Tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return pi.setFromAxisAngle(e,t),this.quaternion.multiply(pi),this}rotateOnWorldAxis(e,t){return pi.setFromAxisAngle(e,t),this.quaternion.premultiply(pi),this}rotateX(e){return this.rotateOnAxis(gl,e)}rotateY(e){return this.rotateOnAxis(vl,e)}rotateZ(e){return this.rotateOnAxis(xl,e)}translateOnAxis(e,t){return _l.copy(e).applyQuaternion(this.quaternion),this.position.add(_l.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gl,e)}translateY(e){return this.translateOnAxis(vl,e)}translateZ(e){return this.translateOnAxis(xl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(un.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?qr.copy(e):qr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),$i.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?un.lookAt($i,qr,this.up):un.lookAt(qr,$i,this.up),this.quaternion.setFromRotationMatrix(un),r&&(un.extractRotation(r.matrixWorld),pi.setFromRotationMatrix(un),this.quaternion.premultiply(pi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Al),mi.child=e,this.dispatchEvent(mi),mi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vd),Zs.child=e,this.dispatchEvent(Zs),Zs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),un.multiply(e.parent.matrixWorld)),e.applyMatrix4(un),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Al),mi.child=e,this.dispatchEvent(mi),mi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,e,_d),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,gd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Tt.DEFAULT_UP=new q(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gt=new q,hn=new q,Js=new q,fn=new q,_i=new q,gi=new q,yl=new q,Ks=new q,js=new q,$s=new q;class nn{constructor(e=new q,t=new q,i=new q){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Gt.subVectors(e,t),r.cross(Gt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Gt.subVectors(r,t),hn.subVectors(i,t),Js.subVectors(e,t);const o=Gt.dot(Gt),a=Gt.dot(hn),l=Gt.dot(Js),c=hn.dot(hn),u=hn.dot(Js),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,_=(o*u-a*l)*f;return s.set(1-d-_,_,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,fn)===null?!1:fn.x>=0&&fn.y>=0&&fn.x+fn.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,fn.x),l.addScaledVector(o,fn.y),l.addScaledVector(a,fn.z),l)}static isFrontFacing(e,t,i,r){return Gt.subVectors(i,t),hn.subVectors(e,t),Gt.cross(hn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gt.subVectors(this.c,this.b),hn.subVectors(this.a,this.b),Gt.cross(hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return nn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return nn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return nn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return nn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return nn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;_i.subVectors(r,i),gi.subVectors(s,i),Ks.subVectors(e,i);const l=_i.dot(Ks),c=gi.dot(Ks);if(l<=0&&c<=0)return t.copy(i);js.subVectors(e,r);const u=_i.dot(js),h=gi.dot(js);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(_i,o);$s.subVectors(e,s);const d=_i.dot($s),_=gi.dot($s);if(_>=0&&d<=_)return t.copy(s);const g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(gi,a);const m=u*_-d*h;if(m<=0&&h-u>=0&&d-_>=0)return yl.subVectors(s,r),a=(h-u)/(h-u+(d-_)),t.copy(r).addScaledVector(yl,a);const p=1/(m+g+f);return o=g*p,a=f*p,t.copy(i).addScaledVector(_i,o).addScaledVector(gi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const mu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bn={h:0,s:0,l:0},Ir={h:0,s:0,l:0};function Qs(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}let We=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=$e.workingColorSpace){return this.r=e,this.g=t,this.b=i,$e.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=$e.workingColorSpace){if(e=nd(e,1),t=Mt(t,0,1),i=Mt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Qs(o,s,e+1/3),this.g=Qs(o,s,e),this.b=Qs(o,s,e-1/3)}return $e.toWorkingColorSpace(this,r),this}setStyle(e,t=Xt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xt){const i=mu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Di(e.r),this.g=Di(e.g),this.b=Di(e.b),this}copyLinearToSRGB(e){return this.r=zs(e.r),this.g=zs(e.g),this.b=zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return $e.fromWorkingColorSpace(St.copy(this),e),Math.round(Mt(St.r*255,0,255))*65536+Math.round(Mt(St.g*255,0,255))*256+Math.round(Mt(St.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.fromWorkingColorSpace(St.copy(this),t);const i=St.r,r=St.g,s=St.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=$e.workingColorSpace){return $e.fromWorkingColorSpace(St.copy(this),t),e.r=St.r,e.g=St.g,e.b=St.b,e}getStyle(e=Xt){$e.fromWorkingColorSpace(St.copy(this),e);const t=St.r,i=St.g,r=St.b;return e!==Xt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(bn),this.setHSL(bn.h+e,bn.s+t,bn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(bn),e.getHSL(Ir);const i=Fs(bn.h,Ir.h,t),r=Fs(bn.s,Ir.s,t),s=Fs(bn.l,Ir.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const St=new We;We.NAMES=mu;let xd=0;class Ar extends Wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=Xi(),this.name="",this.type="Material",this.blending=Ii,this.side=Ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ao,this.blendDst=yo,this.blendEquation=Jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=al,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=li,this.stencilZFail=li,this.stencilZPass=li,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ii&&(i.blending=this.blending),this.side!==Ln&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ao&&(i.blendSrc=this.blendSrc),this.blendDst!==yo&&(i.blendDst=this.blendDst),this.blendEquation!==Jn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==fs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==al&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==li&&(i.stencilFail=this.stencilFail),this.stencilZFail!==li&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==li&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class Qt extends Ar{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=jc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ut=new q,Ur=new de;class rn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ll,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return rr("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ur.fromBufferAttribute(this,t),Ur.applyMatrix3(e),this.setXY(t,Ur.x,Ur.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Zi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=wt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zi(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zi(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zi(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),r=wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),r=wt(r,this.array),s=wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ll&&(e.usage=this.usage),e}}class _u extends rn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class gu extends rn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Bt extends rn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Ad=0;const Nt=new ht,eo=new Tt,vi=new q,It=new xr,Qi=new xr,mt=new q;class vn extends Wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=Xi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hu(e)?gu:_u)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Be().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nt.makeRotationFromQuaternion(e),this.applyMatrix4(Nt),this}rotateX(e){return Nt.makeRotationX(e),this.applyMatrix4(Nt),this}rotateY(e){return Nt.makeRotationY(e),this.applyMatrix4(Nt),this}rotateZ(e){return Nt.makeRotationZ(e),this.applyMatrix4(Nt),this}translate(e,t,i){return Nt.makeTranslation(e,t,i),this.applyMatrix4(Nt),this}scale(e,t,i){return Nt.makeScale(e,t,i),this.applyMatrix4(Nt),this}lookAt(e){return eo.lookAt(e),eo.updateMatrix(),this.applyMatrix4(eo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vi).negate(),this.translate(vi.x,vi.y,vi.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Bt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];It.setFromBufferAttribute(s),this.morphTargetsRelative?(mt.addVectors(this.boundingBox.min,It.min),this.boundingBox.expandByPoint(mt),mt.addVectors(this.boundingBox.max,It.max),this.boundingBox.expandByPoint(mt)):(this.boundingBox.expandByPoint(It.min),this.boundingBox.expandByPoint(It.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ta);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const i=this.boundingSphere.center;if(It.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Qi.setFromBufferAttribute(a),this.morphTargetsRelative?(mt.addVectors(It.min,Qi.min),It.expandByPoint(mt),mt.addVectors(It.max,Qi.max),It.expandByPoint(mt)):(It.expandByPoint(Qi.min),It.expandByPoint(Qi.max))}It.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)mt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(mt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)mt.fromBufferAttribute(a,c),l&&(vi.fromBufferAttribute(e,c),mt.add(vi)),r=Math.max(r,i.distanceToSquared(mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<i.count;U++)a[U]=new q,l[U]=new q;const c=new q,u=new q,h=new q,f=new de,d=new de,_=new de,g=new q,m=new q;function p(U,b,A){c.fromBufferAttribute(i,U),u.fromBufferAttribute(i,b),h.fromBufferAttribute(i,A),f.fromBufferAttribute(s,U),d.fromBufferAttribute(s,b),_.fromBufferAttribute(s,A),u.sub(c),h.sub(c),d.sub(f),_.sub(f);const R=1/(d.x*_.y-_.x*d.y);isFinite(R)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-d.y).multiplyScalar(R),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(R),a[U].add(g),a[b].add(g),a[A].add(g),l[U].add(m),l[b].add(m),l[A].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let U=0,b=E.length;U<b;++U){const A=E[U],R=A.start,G=A.count;for(let z=R,W=R+G;z<W;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const x=new q,M=new q,D=new q,C=new q;function w(U){D.fromBufferAttribute(r,U),C.copy(D);const b=a[U];x.copy(b),x.sub(D.multiplyScalar(D.dot(b))).normalize(),M.crossVectors(C,b);const R=M.dot(l[U])<0?-1:1;o.setXYZW(U,x.x,x.y,x.z,R)}for(let U=0,b=E.length;U<b;++U){const A=E[U],R=A.start,G=A.count;for(let z=R,W=R+G;z<W;z+=3)w(e.getX(z+0)),w(e.getX(z+1)),w(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new rn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const r=new q,s=new q,o=new q,a=new q,l=new q,c=new q,u=new q,h=new q;if(e)for(let f=0,d=e.count;f<d;f+=3){const _=e.getX(f+0),g=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)mt.fromBufferAttribute(e,t),mt.normalize(),e.setXYZ(t,mt.x,mt.y,mt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*u;for(let p=0;p<u;p++)f[_++]=c[d++]}return new rn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new vn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sl=new ht,Vn=new fd,Dr=new Ta,Ml=new q,xi=new q,Ai=new q,yi=new q,to=new q,Nr=new q,Or=new de,Fr=new de,Br=new de,bl=new q,El=new q,Tl=new q,zr=new q,kr=new q;class ft extends Tt{constructor(e=new vn,t=new Qt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Nr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(to.fromBufferAttribute(h,e),o?Nr.addScaledVector(to,u):Nr.addScaledVector(to.sub(t),u))}t.add(Nr)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Dr.copy(i.boundingSphere),Dr.applyMatrix4(s),Vn.copy(e.ray).recast(e.near),!(Dr.containsPoint(Vn.origin)===!1&&(Vn.intersectSphere(Dr,Ml)===null||Vn.origin.distanceToSquared(Ml)>(e.far-e.near)**2))&&(Sl.copy(s).invert(),Vn.copy(e.ray).applyMatrix4(Sl),!(i.boundingBox!==null&&Vn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Vn)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const m=f[_],p=o[m.materialIndex],E=Math.max(m.start,d.start),x=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let M=E,D=x;M<D;M+=3){const C=a.getX(M),w=a.getX(M+1),U=a.getX(M+2);r=Hr(this,p,e,i,c,u,h,C,w,U),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const E=a.getX(m),x=a.getX(m+1),M=a.getX(m+2);r=Hr(this,o,e,i,c,u,h,E,x,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const m=f[_],p=o[m.materialIndex],E=Math.max(m.start,d.start),x=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let M=E,D=x;M<D;M+=3){const C=M,w=M+1,U=M+2;r=Hr(this,p,e,i,c,u,h,C,w,U),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const E=m,x=m+1,M=m+2;r=Hr(this,o,e,i,c,u,h,E,x,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function yd(n,e,t,i,r,s,o,a){let l;if(e.side===Rt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ln,a),l===null)return null;kr.copy(a),kr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(kr);return c<t.near||c>t.far?null:{distance:c,point:kr.clone(),object:n}}function Hr(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,xi),n.getVertexPosition(l,Ai),n.getVertexPosition(c,yi);const u=yd(n,e,t,i,xi,Ai,yi,zr);if(u){r&&(Or.fromBufferAttribute(r,a),Fr.fromBufferAttribute(r,l),Br.fromBufferAttribute(r,c),u.uv=nn.getInterpolation(zr,xi,Ai,yi,Or,Fr,Br,new de)),s&&(Or.fromBufferAttribute(s,a),Fr.fromBufferAttribute(s,l),Br.fromBufferAttribute(s,c),u.uv1=nn.getInterpolation(zr,xi,Ai,yi,Or,Fr,Br,new de)),o&&(bl.fromBufferAttribute(o,a),El.fromBufferAttribute(o,l),Tl.fromBufferAttribute(o,c),u.normal=nn.getInterpolation(zr,xi,Ai,yi,bl,El,Tl,new q),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new q,materialIndex:0};nn.getNormal(xi,Ai,yi,h.normal),u.face=h}return u}class si extends vn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Bt(c,3)),this.setAttribute("normal",new Bt(u,3)),this.setAttribute("uv",new Bt(h,2));function _(g,m,p,E,x,M,D,C,w,U,b){const A=M/w,R=D/U,G=M/2,z=D/2,W=C/2,Y=w+1,H=U+1;let K=0,k=0;const pe=new q;for(let ge=0;ge<H;ge++){const ve=ge*R-z;for(let ze=0;ze<Y;ze++){const Ye=ze*A-G;pe[g]=Ye*E,pe[m]=ve*x,pe[p]=W,c.push(pe.x,pe.y,pe.z),pe[g]=0,pe[m]=0,pe[p]=C>0?1:-1,u.push(pe.x,pe.y,pe.z),h.push(ze/w),h.push(1-ge/U),K+=1}}for(let ge=0;ge<U;ge++)for(let ve=0;ve<w;ve++){const ze=f+ve+Y*ge,Ye=f+ve+Y*(ge+1),V=f+(ve+1)+Y*(ge+1),ne=f+(ve+1)+Y*ge;l.push(ze,Ye,ne),l.push(Ye,V,ne),k+=6}a.addGroup(d,k,b),d+=k,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new si(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Vi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Et(n){const e={};for(let t=0;t<n.length;t++){const i=Vi(n[t]);for(const r in i)e[r]=i[r]}return e}function Sd(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function vu(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const Md={clone:Vi,merge:Et};var bd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ed=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qn extends Ar{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bd,this.fragmentShader=Ed,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vi(e.uniforms),this.uniformsGroups=Sd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class xu extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=mn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const En=new q,wl=new de,Cl=new de;class Ut extends xu{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=$o*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Os*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $o*2*Math.atan(Math.tan(Os*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){En.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(En.x,En.y).multiplyScalar(-e/En.z),En.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(En.x,En.y).multiplyScalar(-e/En.z)}getViewSize(e,t){return this.getViewBounds(e,wl,Cl),t.subVectors(Cl,wl)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Os*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Si=-90,Mi=1;class Td extends Tt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ut(Si,Mi,e,t);r.layers=this.layers,this.add(r);const s=new Ut(Si,Mi,e,t);s.layers=this.layers,this.add(s);const o=new Ut(Si,Mi,e,t);o.layers=this.layers,this.add(o);const a=new Ut(Si,Mi,e,t);a.layers=this.layers,this.add(a);const l=new Ut(Si,Mi,e,t);l.layers=this.layers,this.add(l);const c=new Ut(Si,Mi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===mn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===_s)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Au extends bt{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Bi,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wd extends ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Au(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Yt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new si(5,5,5),s=new qn({name:"CubemapFromEquirect",uniforms:Vi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Rt,blending:wn});s.uniforms.tEquirect.value=t;const o=new ft(r,s),a=t.minFilter;return t.minFilter===$n&&(t.minFilter=Yt),new Td(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const no=new q,Cd=new q,Rd=new Be;class Yn{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=no.subVectors(i,t).cross(Cd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(no),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Rd.getNormalMatrix(e),r=this.coplanarPoint(no).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gn=new Ta,Vr=new q;class yu{constructor(e=new Yn,t=new Yn,i=new Yn,r=new Yn,s=new Yn,o=new Yn){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=mn){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],f=r[7],d=r[8],_=r[9],g=r[10],m=r[11],p=r[12],E=r[13],x=r[14],M=r[15];if(i[0].setComponents(l-s,f-c,m-d,M-p).normalize(),i[1].setComponents(l+s,f+c,m+d,M+p).normalize(),i[2].setComponents(l+o,f+u,m+_,M+E).normalize(),i[3].setComponents(l-o,f-u,m-_,M-E).normalize(),i[4].setComponents(l-a,f-h,m-g,M-x).normalize(),t===mn)i[5].setComponents(l+a,f+h,m+g,M+x).normalize();else if(t===_s)i[5].setComponents(a,h,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gn)}intersectsSprite(e){return Gn.center.set(0,0,0),Gn.radius=.7071067811865476,Gn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gn)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Vr.x=r.normal.x>0?e.max.x:e.min.x,Vr.y=r.normal.y>0?e.max.y:e.min.y,Vr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Vr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Su(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Pd(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l._updateRange,f=l.updateRanges;if(n.bindBuffer(c,a),h.count===-1&&f.length===0&&n.bufferSubData(c,0,u),f.length!==0){for(let d=0,_=f.length;d<_;d++){const g=f[d];n.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}h.count!==-1&&(n.bufferSubData(c,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Ft extends vn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=t/l,d=[],_=[],g=[],m=[];for(let p=0;p<u;p++){const E=p*f-o;for(let x=0;x<c;x++){const M=x*h-s;_.push(M,-E,0),g.push(0,0,1),m.push(x/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<a;E++){const x=E+c*p,M=E+c*(p+1),D=E+1+c*(p+1),C=E+1+c*p;d.push(x,M,C),d.push(M,D,C)}this.setIndex(d),this.setAttribute("position",new Bt(_,3)),this.setAttribute("normal",new Bt(g,3)),this.setAttribute("uv",new Bt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ft(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ld=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qd=`#ifdef USE_ALPHAHASH
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
#endif`,Id=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ud=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Nd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Od=`#ifdef USE_AOMAP
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
#endif`,Fd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bd=`#ifdef USE_BATCHING
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
#endif`,kd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Gd=`#ifdef USE_IRIDESCENCE
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
#endif`,Wd=`#ifdef USE_BUMPMAP
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
#endif`,Xd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Yd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$d=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Qd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ep=`#define PI 3.141592653589793
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
} // validated`,tp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,np=`vec3 transformedNormal = objectNormal;
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
#endif`,ip=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,op=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ap="gl_FragColor = linearToOutputTexel( gl_FragColor );",lp=`
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
}`,cp=`#ifdef USE_ENVMAP
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
#endif`,up=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hp=`#ifdef USE_ENVMAP
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
#endif`,fp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dp=`#ifdef USE_ENVMAP
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
#endif`,pp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_p=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vp=`#ifdef USE_GRADIENTMAP
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
}`,xp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ap=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sp=`uniform bool receiveShadow;
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
#endif`,Mp=`#ifdef USE_ENVMAP
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
#endif`,bp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ep=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cp=`PhysicalMaterial material;
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
#endif`,Rp=`struct PhysicalMaterial {
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
}`,Pp=`
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
#endif`,Lp=`#if defined( RE_IndirectDiffuse )
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
#endif`,qp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ip=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Up=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Np=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Op=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zp=`#if defined( USE_POINTS_UV )
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
#endif`,kp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xp=`#ifdef USE_MORPHTARGETS
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
#endif`,Yp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Jp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Kp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$p=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qp=`#ifdef USE_NORMALMAP
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
#endif`,em=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,im=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,om=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,am=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,um=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mm=`float getShadowMask() {
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
}`,_m=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gm=`#ifdef USE_SKINNING
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
#endif`,vm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xm=`#ifdef USE_SKINNING
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
#endif`,Am=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ym=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,bm=`#ifdef USE_TRANSMISSION
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
#endif`,Em=`#ifdef USE_TRANSMISSION
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
#endif`,Tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Pm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lm=`uniform sampler2D t2D;
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
}`,qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Im=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nm=`#include <common>
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
}`,Om=`#if DEPTH_PACKING == 3200
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
}`,Fm=`#define DISTANCE
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
}`,Bm=`#define DISTANCE
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
}`,zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,km=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hm=`uniform float scale;
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
}`,Vm=`uniform vec3 diffuse;
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
}`,Gm=`#include <common>
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
}`,Wm=`uniform vec3 diffuse;
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
}`,Xm=`#define LAMBERT
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
}`,Ym=`#define LAMBERT
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
}`,Zm=`#define MATCAP
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
}`,Jm=`#define MATCAP
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
}`,Km=`#define NORMAL
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
}`,jm=`#define NORMAL
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
}`,$m=`#define PHONG
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
}`,Qm=`#define PHONG
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
}`,e0=`#define STANDARD
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
}`,t0=`#define STANDARD
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
}`,n0=`#define TOON
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
}`,i0=`#define TOON
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
}`,r0=`uniform float size;
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
}`,s0=`uniform vec3 diffuse;
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
}`,o0=`#include <common>
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
}`,a0=`uniform vec3 color;
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
}`,l0=`uniform float rotation;
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
}`,c0=`uniform vec3 diffuse;
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
}`,Fe={alphahash_fragment:Ld,alphahash_pars_fragment:qd,alphamap_fragment:Id,alphamap_pars_fragment:Ud,alphatest_fragment:Dd,alphatest_pars_fragment:Nd,aomap_fragment:Od,aomap_pars_fragment:Fd,batching_pars_vertex:Bd,batching_vertex:zd,begin_vertex:kd,beginnormal_vertex:Hd,bsdfs:Vd,iridescence_fragment:Gd,bumpmap_pars_fragment:Wd,clipping_planes_fragment:Xd,clipping_planes_pars_fragment:Yd,clipping_planes_pars_vertex:Zd,clipping_planes_vertex:Jd,color_fragment:Kd,color_pars_fragment:jd,color_pars_vertex:$d,color_vertex:Qd,common:ep,cube_uv_reflection_fragment:tp,defaultnormal_vertex:np,displacementmap_pars_vertex:ip,displacementmap_vertex:rp,emissivemap_fragment:sp,emissivemap_pars_fragment:op,colorspace_fragment:ap,colorspace_pars_fragment:lp,envmap_fragment:cp,envmap_common_pars_fragment:up,envmap_pars_fragment:hp,envmap_pars_vertex:fp,envmap_physical_pars_fragment:Mp,envmap_vertex:dp,fog_vertex:pp,fog_pars_vertex:mp,fog_fragment:_p,fog_pars_fragment:gp,gradientmap_pars_fragment:vp,lightmap_pars_fragment:xp,lights_lambert_fragment:Ap,lights_lambert_pars_fragment:yp,lights_pars_begin:Sp,lights_toon_fragment:bp,lights_toon_pars_fragment:Ep,lights_phong_fragment:Tp,lights_phong_pars_fragment:wp,lights_physical_fragment:Cp,lights_physical_pars_fragment:Rp,lights_fragment_begin:Pp,lights_fragment_maps:Lp,lights_fragment_end:qp,logdepthbuf_fragment:Ip,logdepthbuf_pars_fragment:Up,logdepthbuf_pars_vertex:Dp,logdepthbuf_vertex:Np,map_fragment:Op,map_pars_fragment:Fp,map_particle_fragment:Bp,map_particle_pars_fragment:zp,metalnessmap_fragment:kp,metalnessmap_pars_fragment:Hp,morphinstance_vertex:Vp,morphcolor_vertex:Gp,morphnormal_vertex:Wp,morphtarget_pars_vertex:Xp,morphtarget_vertex:Yp,normal_fragment_begin:Zp,normal_fragment_maps:Jp,normal_pars_fragment:Kp,normal_pars_vertex:jp,normal_vertex:$p,normalmap_pars_fragment:Qp,clearcoat_normal_fragment_begin:em,clearcoat_normal_fragment_maps:tm,clearcoat_pars_fragment:nm,iridescence_pars_fragment:im,opaque_fragment:rm,packing:sm,premultiplied_alpha_fragment:om,project_vertex:am,dithering_fragment:lm,dithering_pars_fragment:cm,roughnessmap_fragment:um,roughnessmap_pars_fragment:hm,shadowmap_pars_fragment:fm,shadowmap_pars_vertex:dm,shadowmap_vertex:pm,shadowmask_pars_fragment:mm,skinbase_vertex:_m,skinning_pars_vertex:gm,skinning_vertex:vm,skinnormal_vertex:xm,specularmap_fragment:Am,specularmap_pars_fragment:ym,tonemapping_fragment:Sm,tonemapping_pars_fragment:Mm,transmission_fragment:bm,transmission_pars_fragment:Em,uv_pars_fragment:Tm,uv_pars_vertex:wm,uv_vertex:Cm,worldpos_vertex:Rm,background_vert:Pm,background_frag:Lm,backgroundCube_vert:qm,backgroundCube_frag:Im,cube_vert:Um,cube_frag:Dm,depth_vert:Nm,depth_frag:Om,distanceRGBA_vert:Fm,distanceRGBA_frag:Bm,equirect_vert:zm,equirect_frag:km,linedashed_vert:Hm,linedashed_frag:Vm,meshbasic_vert:Gm,meshbasic_frag:Wm,meshlambert_vert:Xm,meshlambert_frag:Ym,meshmatcap_vert:Zm,meshmatcap_frag:Jm,meshnormal_vert:Km,meshnormal_frag:jm,meshphong_vert:$m,meshphong_frag:Qm,meshphysical_vert:e0,meshphysical_frag:t0,meshtoon_vert:n0,meshtoon_frag:i0,points_vert:r0,points_frag:s0,shadow_vert:o0,shadow_frag:a0,sprite_vert:l0,sprite_frag:c0},ce={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},en={basic:{uniforms:Et([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:Et([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new We(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:Et([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:Et([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:Et([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new We(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:Et([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:Et([ce.points,ce.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:Et([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:Et([ce.common,ce.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:Et([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:Et([ce.sprite,ce.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:Et([ce.common,ce.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:Et([ce.lights,ce.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};en.physical={uniforms:Et([en.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const Gr={r:0,b:0,g:0},Wn=new sn,u0=new ht;function h0(n,e,t,i,r,s,o){const a=new We(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function _(E){let x=E.isScene===!0?E.background:null;return x&&x.isTexture&&(x=(E.backgroundBlurriness>0?t:e).get(x)),x}function g(E){let x=!1;const M=_(E);M===null?p(a,l):M&&M.isColor&&(p(M,1),x=!0);const D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(E,x){const M=_(x);M&&(M.isCubeTexture||M.mapping===Es)?(u===void 0&&(u=new ft(new si(1,1,1),new qn({name:"BackgroundCubeMaterial",uniforms:Vi(en.backgroundCube.uniforms),vertexShader:en.backgroundCube.vertexShader,fragmentShader:en.backgroundCube.fragmentShader,side:Rt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,C,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Wn.copy(x.backgroundRotation),Wn.x*=-1,Wn.y*=-1,Wn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Wn.y*=-1,Wn.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(u0.makeRotationFromEuler(Wn)),u.material.toneMapped=$e.getTransfer(M.colorSpace)!==tt,(h!==M||f!==M.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=M,f=M.version,d=n.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new ft(new Ft(2,2),new qn({name:"BackgroundMaterial",uniforms:Vi(en.background.uniforms),vertexShader:en.background.vertexShader,fragmentShader:en.background.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=$e.getTransfer(M.colorSpace)!==tt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=M,f=M.version,d=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,x){E.getRGB(Gr,vu(n)),i.buffers.color.setClear(Gr.r,Gr.g,Gr.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(E,x=1){a.set(E),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(a,l)},render:g,addToRenderList:m}}function f0(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(A,R,G,z,W){let Y=!1;const H=h(z,G,R);s!==H&&(s=H,c(s.object)),Y=d(A,z,G,W),Y&&_(A,z,G,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,M(A,R,G,z),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return n.createVertexArray()}function c(A){return n.bindVertexArray(A)}function u(A){return n.deleteVertexArray(A)}function h(A,R,G){const z=G.wireframe===!0;let W=i[A.id];W===void 0&&(W={},i[A.id]=W);let Y=W[R.id];Y===void 0&&(Y={},W[R.id]=Y);let H=Y[z];return H===void 0&&(H=f(l()),Y[z]=H),H}function f(A){const R=[],G=[],z=[];for(let W=0;W<t;W++)R[W]=0,G[W]=0,z[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:G,attributeDivisors:z,object:A,attributes:{},index:null}}function d(A,R,G,z){const W=s.attributes,Y=R.attributes;let H=0;const K=G.getAttributes();for(const k in K)if(K[k].location>=0){const ge=W[k];let ve=Y[k];if(ve===void 0&&(k==="instanceMatrix"&&A.instanceMatrix&&(ve=A.instanceMatrix),k==="instanceColor"&&A.instanceColor&&(ve=A.instanceColor)),ge===void 0||ge.attribute!==ve||ve&&ge.data!==ve.data)return!0;H++}return s.attributesNum!==H||s.index!==z}function _(A,R,G,z){const W={},Y=R.attributes;let H=0;const K=G.getAttributes();for(const k in K)if(K[k].location>=0){let ge=Y[k];ge===void 0&&(k==="instanceMatrix"&&A.instanceMatrix&&(ge=A.instanceMatrix),k==="instanceColor"&&A.instanceColor&&(ge=A.instanceColor));const ve={};ve.attribute=ge,ge&&ge.data&&(ve.data=ge.data),W[k]=ve,H++}s.attributes=W,s.attributesNum=H,s.index=z}function g(){const A=s.newAttributes;for(let R=0,G=A.length;R<G;R++)A[R]=0}function m(A){p(A,0)}function p(A,R){const G=s.newAttributes,z=s.enabledAttributes,W=s.attributeDivisors;G[A]=1,z[A]===0&&(n.enableVertexAttribArray(A),z[A]=1),W[A]!==R&&(n.vertexAttribDivisor(A,R),W[A]=R)}function E(){const A=s.newAttributes,R=s.enabledAttributes;for(let G=0,z=R.length;G<z;G++)R[G]!==A[G]&&(n.disableVertexAttribArray(G),R[G]=0)}function x(A,R,G,z,W,Y,H){H===!0?n.vertexAttribIPointer(A,R,G,W,Y):n.vertexAttribPointer(A,R,G,z,W,Y)}function M(A,R,G,z){g();const W=z.attributes,Y=G.getAttributes(),H=R.defaultAttributeValues;for(const K in Y){const k=Y[K];if(k.location>=0){let pe=W[K];if(pe===void 0&&(K==="instanceMatrix"&&A.instanceMatrix&&(pe=A.instanceMatrix),K==="instanceColor"&&A.instanceColor&&(pe=A.instanceColor)),pe!==void 0){const ge=pe.normalized,ve=pe.itemSize,ze=e.get(pe);if(ze===void 0)continue;const Ye=ze.buffer,V=ze.type,ne=ze.bytesPerElement,Ae=V===n.INT||V===n.UNSIGNED_INT||pe.gpuType===xa;if(pe.isInterleavedBufferAttribute){const ue=pe.data,Le=ue.stride,Oe=pe.offset;if(ue.isInstancedInterleavedBuffer){for(let qe=0;qe<k.locationSize;qe++)p(k.location+qe,ue.meshPerAttribute);A.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let qe=0;qe<k.locationSize;qe++)m(k.location+qe);n.bindBuffer(n.ARRAY_BUFFER,Ye);for(let qe=0;qe<k.locationSize;qe++)x(k.location+qe,ve/k.locationSize,V,ge,Le*ne,(Oe+ve/k.locationSize*qe)*ne,Ae)}else{if(pe.isInstancedBufferAttribute){for(let ue=0;ue<k.locationSize;ue++)p(k.location+ue,pe.meshPerAttribute);A.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let ue=0;ue<k.locationSize;ue++)m(k.location+ue);n.bindBuffer(n.ARRAY_BUFFER,Ye);for(let ue=0;ue<k.locationSize;ue++)x(k.location+ue,ve/k.locationSize,V,ge,ve*ne,ve/k.locationSize*ue*ne,Ae)}}else if(H!==void 0){const ge=H[K];if(ge!==void 0)switch(ge.length){case 2:n.vertexAttrib2fv(k.location,ge);break;case 3:n.vertexAttrib3fv(k.location,ge);break;case 4:n.vertexAttrib4fv(k.location,ge);break;default:n.vertexAttrib1fv(k.location,ge)}}}}E()}function D(){U();for(const A in i){const R=i[A];for(const G in R){const z=R[G];for(const W in z)u(z[W].object),delete z[W];delete R[G]}delete i[A]}}function C(A){if(i[A.id]===void 0)return;const R=i[A.id];for(const G in R){const z=R[G];for(const W in z)u(z[W].object),delete z[W];delete R[G]}delete i[A.id]}function w(A){for(const R in i){const G=i[R];if(G[A.id]===void 0)continue;const z=G[A.id];for(const W in z)u(z[W].object),delete z[W];delete G[A.id]}}function U(){b(),o=!0,s!==r&&(s=r,c(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:U,resetDefaultState:b,dispose:D,releaseStatesOfGeometry:C,releaseStatesOfProgram:w,initAttributes:g,enableAttribute:m,disableUnusedAttributes:E}}function d0(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let d=0;for(let _=0;_<h;_++)d+=u[_];t.update(d,i,1)}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)o(c[_],u[_],f[_]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let _=0;for(let g=0;g<h;g++)_+=u[g];for(let g=0;g<f.length;g++)t.update(_,i,f[g])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function p0(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==Zt&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const w=C===gr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==_n&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==pn&&!w)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=d>0,D=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:d,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:p,maxVaryings:E,maxFragmentUniforms:x,vertexTextures:M,maxSamples:D}}function m0(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Yn,a=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||r;return r=f,i=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const _=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const E=s?0:i,x=E*4;let M=p.clippingState||null;l.value=M,M=u(_,f,x,d);for(let D=0;D!==x;++D)M[D]=t[D];p.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,_){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const p=d+g*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,M=d;x!==g;++x,M+=4)o.copy(h[x]).applyMatrix4(E,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function _0(n){let e=new WeakMap;function t(o,a){return a===So?o.mapping=Bi:a===Mo&&(o.mapping=zi),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===So||a===Mo)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new wd(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Mu extends xu{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ri=4,Rl=[.125,.215,.35,.446,.526,.582],Kn=20,io=new Mu,Pl=new We;let ro=null,so=0,oo=0,ao=!1;const Zn=(1+Math.sqrt(5))/2,bi=1/Zn,Ll=[new q(-Zn,bi,0),new q(Zn,bi,0),new q(-bi,0,Zn),new q(bi,0,Zn),new q(0,Zn,-bi),new q(0,Zn,bi),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)];class ql{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){ro=this._renderer.getRenderTarget(),so=this._renderer.getActiveCubeFace(),oo=this._renderer.getActiveMipmapLevel(),ao=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ul(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ro,so,oo),this._renderer.xr.enabled=ao,e.scissorTest=!1,Wr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Bi||e.mapping===zi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ro=this._renderer.getRenderTarget(),so=this._renderer.getActiveCubeFace(),oo=this._renderer.getActiveMipmapLevel(),ao=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Yt,minFilter:Yt,generateMipmaps:!1,type:gr,format:Zt,colorSpace:Nn,depthBuffer:!1},r=Il(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Il(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=g0(s)),this._blurMaterial=v0(s,e,t)}return r}_compileMaterial(e){const t=new ft(this._lodPlanes[0],e);this._renderer.compile(t,io)}_sceneToCubeUV(e,t,i,r){const a=new Ut(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Pl),u.toneMapping=Cn,u.autoClear=!1;const d=new Qt({name:"PMREM.Background",side:Rt,depthWrite:!1,depthTest:!1}),_=new ft(new si,d);let g=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,g=!0):(d.color.copy(Pl),g=!0);for(let p=0;p<6;p++){const E=p%3;E===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):E===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const x=this._cubeSize;Wr(r,E*x,p>2?x:0,x,x),u.setRenderTarget(r),g&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Bi||e.mapping===zi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ul());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ft(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Wr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,io)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Ll[(r-s-1)%Ll.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ft(this._lodPlanes[r],c),f=c.uniforms,d=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Kn-1),g=s/_,m=isFinite(s)?1+Math.floor(u*g):Kn;m>Kn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Kn}`);const p=[];let E=0;for(let w=0;w<Kn;++w){const U=w/g,b=Math.exp(-U*U/2);p.push(b),w===0?E+=b:w<m&&(E+=2*b)}for(let w=0;w<p.length;w++)p[w]=p[w]/E;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=_,f.mipInt.value=x-i;const M=this._sizeLods[r],D=3*M*(r>x-Ri?r-x+Ri:0),C=4*(this._cubeSize-M);Wr(t,D,C,3*M,2*M),l.setRenderTarget(t),l.render(h,io)}}function g0(n){const e=[],t=[],i=[];let r=n;const s=n-Ri+1+Rl.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Ri?l=Rl[o-n+Ri-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,_=6,g=3,m=2,p=1,E=new Float32Array(g*_*d),x=new Float32Array(m*_*d),M=new Float32Array(p*_*d);for(let C=0;C<d;C++){const w=C%3*2/3-1,U=C>2?0:-1,b=[w,U,0,w+2/3,U,0,w+2/3,U+1,0,w,U,0,w+2/3,U+1,0,w,U+1,0];E.set(b,g*_*C),x.set(f,m*_*C);const A=[C,C,C,C,C,C];M.set(A,p*_*C)}const D=new vn;D.setAttribute("position",new rn(E,g)),D.setAttribute("uv",new rn(x,m)),D.setAttribute("faceIndex",new rn(M,p)),e.push(D),r>Ri&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Il(n,e,t){const i=new ii(n,e,t);return i.texture.mapping=Es,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Wr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function v0(n,e,t){const i=new Float32Array(Kn),r=new q(0,1,0);return new qn({name:"SphericalGaussianBlur",defines:{n:Kn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:wa(),fragmentShader:`

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
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Ul(){return new qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wa(),fragmentShader:`

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
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Dl(){return new qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function wa(){return`

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
	`}function x0(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===So||l===Mo,u=l===Bi||l===zi;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new ql(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&r(d)?(t===null&&(t=new ql(n)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function A0(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&rr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function y0(n,e,t,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const g=f.morphAttributes[_];for(let m=0,p=g.length;m<p;m++)e.remove(g[m])}f.removeEventListener("dispose",o),delete r[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)e.update(f[_],n.ARRAY_BUFFER);const d=h.morphAttributes;for(const _ in d){const g=d[_];for(let m=0,p=g.length;m<p;m++)e.update(g[m],n.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,_=h.attributes.position;let g=0;if(d!==null){const E=d.array;g=d.version;for(let x=0,M=E.length;x<M;x+=3){const D=E[x+0],C=E[x+1],w=E[x+2];f.push(D,C,C,w,w,D)}}else if(_!==void 0){const E=_.array;g=_.version;for(let x=0,M=E.length/3-1;x<M;x+=3){const D=x+0,C=x+1,w=x+2;f.push(D,C,C,w,w,D)}}else return;const m=new(hu(f)?gu:_u)(f,1);m.version=g;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function S0(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){n.drawElements(i,d,s,f*o),t.update(d,i,1)}function c(f,d,_){_!==0&&(n.drawElementsInstanced(i,d,s,f*o,_),t.update(d,i,_))}function u(f,d,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,f,0,_);let m=0;for(let p=0;p<_;p++)m+=d[p];t.update(m,i,1)}function h(f,d,_,g){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,s,f,0,g,0,_);let p=0;for(let E=0;E<_;E++)p+=d[E];for(let E=0;E<g.length;E++)t.update(p,i,g[E])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function M0(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function b0(n,e,t){const i=new WeakMap,r=new _t;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let A=function(){U.dispose(),i.delete(a),a.removeEventListener("dispose",A)};var d=A;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let M=0;_===!0&&(M=1),g===!0&&(M=2),m===!0&&(M=3);let D=a.attributes.position.count*M,C=1;D>e.maxTextureSize&&(C=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const w=new Float32Array(D*C*4*h),U=new du(w,D,C,h);U.type=pn,U.needsUpdate=!0;const b=M*4;for(let R=0;R<h;R++){const G=p[R],z=E[R],W=x[R],Y=D*C*4*R;for(let H=0;H<G.count;H++){const K=H*b;_===!0&&(r.fromBufferAttribute(G,H),w[Y+K+0]=r.x,w[Y+K+1]=r.y,w[Y+K+2]=r.z,w[Y+K+3]=0),g===!0&&(r.fromBufferAttribute(z,H),w[Y+K+4]=r.x,w[Y+K+5]=r.y,w[Y+K+6]=r.z,w[Y+K+7]=0),m===!0&&(r.fromBufferAttribute(W,H),w[Y+K+8]=r.x,w[Y+K+9]=r.y,w[Y+K+10]=r.z,w[Y+K+11]=W.itemSize===4?r.w:1)}}f={count:h,texture:U,size:new de(D,C)},i.set(a,f),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const g=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function E0(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class bu extends bt{constructor(e,t,i,r,s,o,a,l,c,u=Ui){if(u!==Ui&&u!==Hi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ui&&(i=ni),i===void 0&&u===Hi&&(i=ki),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ct,this.minFilter=l!==void 0?l:Ct,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Eu=new bt,Nl=new bu(1,1),Tu=new du,wu=new ud,Cu=new Au,Ol=[],Fl=[],Bl=new Float32Array(16),zl=new Float32Array(9),kl=new Float32Array(4);function Yi(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Ol[r];if(s===void 0&&(s=new Float32Array(r),Ol[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function dt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function pt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ws(n,e){let t=Fl[e];t===void 0&&(t=new Int32Array(e),Fl[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function T0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function w0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;n.uniform2fv(this.addr,e),pt(t,e)}}function C0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;n.uniform3fv(this.addr,e),pt(t,e)}}function R0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;n.uniform4fv(this.addr,e),pt(t,e)}}function P0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,i))return;kl.set(i),n.uniformMatrix2fv(this.addr,!1,kl),pt(t,i)}}function L0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,i))return;zl.set(i),n.uniformMatrix3fv(this.addr,!1,zl),pt(t,i)}}function q0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,i))return;Bl.set(i),n.uniformMatrix4fv(this.addr,!1,Bl),pt(t,i)}}function I0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function U0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;n.uniform2iv(this.addr,e),pt(t,e)}}function D0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;n.uniform3iv(this.addr,e),pt(t,e)}}function N0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;n.uniform4iv(this.addr,e),pt(t,e)}}function O0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function F0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;n.uniform2uiv(this.addr,e),pt(t,e)}}function B0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;n.uniform3uiv(this.addr,e),pt(t,e)}}function z0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;n.uniform4uiv(this.addr,e),pt(t,e)}}function k0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Nl.compareFunction=uu,s=Nl):s=Eu,t.setTexture2D(e||s,r)}function H0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||wu,r)}function V0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Cu,r)}function G0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Tu,r)}function W0(n){switch(n){case 5126:return T0;case 35664:return w0;case 35665:return C0;case 35666:return R0;case 35674:return P0;case 35675:return L0;case 35676:return q0;case 5124:case 35670:return I0;case 35667:case 35671:return U0;case 35668:case 35672:return D0;case 35669:case 35673:return N0;case 5125:return O0;case 36294:return F0;case 36295:return B0;case 36296:return z0;case 35678:case 36198:case 36298:case 36306:case 35682:return k0;case 35679:case 36299:case 36307:return H0;case 35680:case 36300:case 36308:case 36293:return V0;case 36289:case 36303:case 36311:case 36292:return G0}}function X0(n,e){n.uniform1fv(this.addr,e)}function Y0(n,e){const t=Yi(e,this.size,2);n.uniform2fv(this.addr,t)}function Z0(n,e){const t=Yi(e,this.size,3);n.uniform3fv(this.addr,t)}function J0(n,e){const t=Yi(e,this.size,4);n.uniform4fv(this.addr,t)}function K0(n,e){const t=Yi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function j0(n,e){const t=Yi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function $0(n,e){const t=Yi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Q0(n,e){n.uniform1iv(this.addr,e)}function e1(n,e){n.uniform2iv(this.addr,e)}function t1(n,e){n.uniform3iv(this.addr,e)}function n1(n,e){n.uniform4iv(this.addr,e)}function i1(n,e){n.uniform1uiv(this.addr,e)}function r1(n,e){n.uniform2uiv(this.addr,e)}function s1(n,e){n.uniform3uiv(this.addr,e)}function o1(n,e){n.uniform4uiv(this.addr,e)}function a1(n,e,t){const i=this.cache,r=e.length,s=ws(t,r);dt(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Eu,s[o])}function l1(n,e,t){const i=this.cache,r=e.length,s=ws(t,r);dt(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||wu,s[o])}function c1(n,e,t){const i=this.cache,r=e.length,s=ws(t,r);dt(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Cu,s[o])}function u1(n,e,t){const i=this.cache,r=e.length,s=ws(t,r);dt(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Tu,s[o])}function h1(n){switch(n){case 5126:return X0;case 35664:return Y0;case 35665:return Z0;case 35666:return J0;case 35674:return K0;case 35675:return j0;case 35676:return $0;case 5124:case 35670:return Q0;case 35667:case 35671:return e1;case 35668:case 35672:return t1;case 35669:case 35673:return n1;case 5125:return i1;case 36294:return r1;case 36295:return s1;case 36296:return o1;case 35678:case 36198:case 36298:case 36306:case 35682:return a1;case 35679:case 36299:case 36307:return l1;case 35680:case 36300:case 36308:case 36293:return c1;case 36289:case 36303:case 36311:case 36292:return u1}}class f1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=W0(t.type)}}class d1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=h1(t.type)}}class p1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const lo=/(\w+)(\])?(\[|\.)?/g;function Hl(n,e){n.seq.push(e),n.map[e.id]=e}function m1(n,e,t){const i=n.name,r=i.length;for(lo.lastIndex=0;;){const s=lo.exec(i),o=lo.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Hl(t,c===void 0?new f1(a,n,e):new d1(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new p1(a),Hl(t,h)),t=h}}}class ls{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);m1(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Vl(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const _1=37297;let g1=0;function v1(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function x1(n){const e=$e.getPrimaries($e.workingColorSpace),t=$e.getPrimaries(n);let i;switch(e===t?i="":e===ms&&t===ps?i="LinearDisplayP3ToLinearSRGB":e===ps&&t===ms&&(i="LinearSRGBToLinearDisplayP3"),n){case Nn:case Ts:return[i,"LinearTransferOETF"];case Xt:case Ea:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Gl(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+v1(n.getShaderSource(e),o)}else return r}function A1(n,e){const t=x1(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function y1(n,e){let t;switch(e){case Ff:t="Linear";break;case Bf:t="Reinhard";break;case zf:t="OptimizedCineon";break;case kf:t="ACESFilmic";break;case Vf:t="AgX";break;case Gf:t="Neutral";break;case Hf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Xr=new q;function S1(){$e.getLuminanceCoefficients(Xr);const n=Xr.x.toFixed(4),e=Xr.y.toFixed(4),t=Xr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function M1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(nr).join(`
`)}function b1(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function E1(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function nr(n){return n!==""}function Wl(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xl(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const T1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qo(n){return n.replace(T1,C1)}const w1=new Map;function C1(n,e){let t=Fe[e];if(t===void 0){const i=w1.get(e);if(i!==void 0)t=Fe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Qo(t)}const R1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yl(n){return n.replace(R1,P1)}function P1(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Zl(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function L1(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Kc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===uf?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===dn&&(e="SHADOWMAP_TYPE_VSM"),e}function q1(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Bi:case zi:e="ENVMAP_TYPE_CUBE";break;case Es:e="ENVMAP_TYPE_CUBE_UV";break}return e}function I1(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case zi:e="ENVMAP_MODE_REFRACTION";break}return e}function U1(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case jc:e="ENVMAP_BLENDING_MULTIPLY";break;case Nf:e="ENVMAP_BLENDING_MIX";break;case Of:e="ENVMAP_BLENDING_ADD";break}return e}function D1(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function N1(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=L1(t),c=q1(t),u=I1(t),h=U1(t),f=D1(t),d=M1(t),_=b1(s),g=r.createProgram();let m,p,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(nr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(nr).join(`
`),p.length>0&&(p+=`
`)):(m=[Zl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(nr).join(`
`),p=[Zl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Cn?"#define TONE_MAPPING":"",t.toneMapping!==Cn?Fe.tonemapping_pars_fragment:"",t.toneMapping!==Cn?y1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,A1("linearToOutputTexel",t.outputColorSpace),S1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(nr).join(`
`)),o=Qo(o),o=Wl(o,t),o=Xl(o,t),a=Qo(a),a=Wl(a,t),a=Xl(a,t),o=Yl(o),a=Yl(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===cl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=E+m+o,M=E+p+a,D=Vl(r,r.VERTEX_SHADER,x),C=Vl(r,r.FRAGMENT_SHADER,M);r.attachShader(g,D),r.attachShader(g,C),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function w(R){if(n.debug.checkShaderErrors){const G=r.getProgramInfoLog(g).trim(),z=r.getShaderInfoLog(D).trim(),W=r.getShaderInfoLog(C).trim();let Y=!0,H=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,D,C);else{const K=Gl(r,D,"vertex"),k=Gl(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+G+`
`+K+`
`+k)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(z===""||W==="")&&(H=!1);H&&(R.diagnostics={runnable:Y,programLog:G,vertexShader:{log:z,prefix:m},fragmentShader:{log:W,prefix:p}})}r.deleteShader(D),r.deleteShader(C),U=new ls(r,g),b=E1(r,g)}let U;this.getUniforms=function(){return U===void 0&&w(this),U};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=r.getProgramParameter(g,_1)),A},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=g1++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=D,this.fragmentShader=C,this}let O1=0;class F1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new B1(e),t.set(e,i)),i}}class B1{constructor(e){this.id=O1++,this.code=e,this.usedTimes=0}}function z1(n,e,t,i,r,s,o){const a=new pu,l=new F1,c=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let d=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,A,R,G,z){const W=G.fog,Y=z.geometry,H=b.isMeshStandardMaterial?G.environment:null,K=(b.isMeshStandardMaterial?t:e).get(b.envMap||H),k=K&&K.mapping===Es?K.image.height:null,pe=_[b.type];b.precision!==null&&(d=r.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const ge=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ve=ge!==void 0?ge.length:0;let ze=0;Y.morphAttributes.position!==void 0&&(ze=1),Y.morphAttributes.normal!==void 0&&(ze=2),Y.morphAttributes.color!==void 0&&(ze=3);let Ye,V,ne,Ae;if(pe){const Ze=en[pe];Ye=Ze.vertexShader,V=Ze.fragmentShader}else Ye=b.vertexShader,V=b.fragmentShader,l.update(b),ne=l.getVertexShaderID(b),Ae=l.getFragmentShaderID(b);const ue=n.getRenderTarget(),Le=z.isInstancedMesh===!0,Oe=z.isBatchedMesh===!0,qe=!!b.map,Xe=!!b.matcap,S=!!K,re=!!b.aoMap,te=!!b.lightMap,he=!!b.bumpMap,X=!!b.normalMap,we=!!b.displacementMap,fe=!!b.emissiveMap,ye=!!b.metalnessMap,T=!!b.roughnessMap,v=b.anisotropy>0,F=b.clearcoat>0,ee=b.dispersion>0,Q=b.iridescence>0,$=b.sheen>0,Te=b.transmission>0,le=v&&!!b.anisotropyMap,xe=F&&!!b.clearcoatMap,Ne=F&&!!b.clearcoatNormalMap,ie=F&&!!b.clearcoatRoughnessMap,_e=Q&&!!b.iridescenceMap,He=Q&&!!b.iridescenceThicknessMap,Ue=$&&!!b.sheenColorMap,Se=$&&!!b.sheenRoughnessMap,De=!!b.specularMap,ke=!!b.specularColorMap,nt=!!b.specularIntensityMap,P=Te&&!!b.transmissionMap,se=Te&&!!b.thicknessMap,Z=!!b.gradientMap,j=!!b.alphaMap,ae=b.alphaTest>0,Re=!!b.alphaHash,Ve=!!b.extensions;let lt=Cn;b.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(lt=n.toneMapping);const vt={shaderID:pe,shaderType:b.type,shaderName:b.name,vertexShader:Ye,fragmentShader:V,defines:b.defines,customVertexShaderID:ne,customFragmentShaderID:Ae,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:Oe,batchingColor:Oe&&z._colorsTexture!==null,instancing:Le,instancingColor:Le&&z.instanceColor!==null,instancingMorph:Le&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ue===null?n.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Nn,alphaToCoverage:!!b.alphaToCoverage,map:qe,matcap:Xe,envMap:S,envMapMode:S&&K.mapping,envMapCubeUVHeight:k,aoMap:re,lightMap:te,bumpMap:he,normalMap:X,displacementMap:f&&we,emissiveMap:fe,normalMapObjectSpace:X&&b.normalMapType===Zf,normalMapTangentSpace:X&&b.normalMapType===cu,metalnessMap:ye,roughnessMap:T,anisotropy:v,anisotropyMap:le,clearcoat:F,clearcoatMap:xe,clearcoatNormalMap:Ne,clearcoatRoughnessMap:ie,dispersion:ee,iridescence:Q,iridescenceMap:_e,iridescenceThicknessMap:He,sheen:$,sheenColorMap:Ue,sheenRoughnessMap:Se,specularMap:De,specularColorMap:ke,specularIntensityMap:nt,transmission:Te,transmissionMap:P,thicknessMap:se,gradientMap:Z,opaque:b.transparent===!1&&b.blending===Ii&&b.alphaToCoverage===!1,alphaMap:j,alphaTest:ae,alphaHash:Re,combine:b.combine,mapUv:qe&&g(b.map.channel),aoMapUv:re&&g(b.aoMap.channel),lightMapUv:te&&g(b.lightMap.channel),bumpMapUv:he&&g(b.bumpMap.channel),normalMapUv:X&&g(b.normalMap.channel),displacementMapUv:we&&g(b.displacementMap.channel),emissiveMapUv:fe&&g(b.emissiveMap.channel),metalnessMapUv:ye&&g(b.metalnessMap.channel),roughnessMapUv:T&&g(b.roughnessMap.channel),anisotropyMapUv:le&&g(b.anisotropyMap.channel),clearcoatMapUv:xe&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:He&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:Se&&g(b.sheenRoughnessMap.channel),specularMapUv:De&&g(b.specularMap.channel),specularColorMapUv:ke&&g(b.specularColorMap.channel),specularIntensityMapUv:nt&&g(b.specularIntensityMap.channel),transmissionMapUv:P&&g(b.transmissionMap.channel),thicknessMapUv:se&&g(b.thicknessMap.channel),alphaMapUv:j&&g(b.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(X||v),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!Y.attributes.uv&&(qe||j),fog:!!W,useFog:b.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:z.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:ze,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:lt,decodeVideoTexture:qe&&b.map.isVideoTexture===!0&&$e.getTransfer(b.map.colorSpace)===tt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===tn,flipSided:b.side===Rt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ve&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&b.extensions.multiDraw===!0||Oe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return vt.vertexUv1s=c.has(1),vt.vertexUv2s=c.has(2),vt.vertexUv3s=c.has(3),c.clear(),vt}function p(b){const A=[];if(b.shaderID?A.push(b.shaderID):(A.push(b.customVertexShaderID),A.push(b.customFragmentShaderID)),b.defines!==void 0)for(const R in b.defines)A.push(R),A.push(b.defines[R]);return b.isRawShaderMaterial===!1&&(E(A,b),x(A,b),A.push(n.outputColorSpace)),A.push(b.customProgramCacheKey),A.join()}function E(b,A){b.push(A.precision),b.push(A.outputColorSpace),b.push(A.envMapMode),b.push(A.envMapCubeUVHeight),b.push(A.mapUv),b.push(A.alphaMapUv),b.push(A.lightMapUv),b.push(A.aoMapUv),b.push(A.bumpMapUv),b.push(A.normalMapUv),b.push(A.displacementMapUv),b.push(A.emissiveMapUv),b.push(A.metalnessMapUv),b.push(A.roughnessMapUv),b.push(A.anisotropyMapUv),b.push(A.clearcoatMapUv),b.push(A.clearcoatNormalMapUv),b.push(A.clearcoatRoughnessMapUv),b.push(A.iridescenceMapUv),b.push(A.iridescenceThicknessMapUv),b.push(A.sheenColorMapUv),b.push(A.sheenRoughnessMapUv),b.push(A.specularMapUv),b.push(A.specularColorMapUv),b.push(A.specularIntensityMapUv),b.push(A.transmissionMapUv),b.push(A.thicknessMapUv),b.push(A.combine),b.push(A.fogExp2),b.push(A.sizeAttenuation),b.push(A.morphTargetsCount),b.push(A.morphAttributeCount),b.push(A.numDirLights),b.push(A.numPointLights),b.push(A.numSpotLights),b.push(A.numSpotLightMaps),b.push(A.numHemiLights),b.push(A.numRectAreaLights),b.push(A.numDirLightShadows),b.push(A.numPointLightShadows),b.push(A.numSpotLightShadows),b.push(A.numSpotLightShadowsWithMaps),b.push(A.numLightProbes),b.push(A.shadowMapType),b.push(A.toneMapping),b.push(A.numClippingPlanes),b.push(A.numClipIntersection),b.push(A.depthPacking)}function x(b,A){a.disableAll(),A.supportsVertexTextures&&a.enable(0),A.instancing&&a.enable(1),A.instancingColor&&a.enable(2),A.instancingMorph&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),A.dispersion&&a.enable(20),A.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.doubleSided&&a.enable(10),A.flipSided&&a.enable(11),A.useDepthPacking&&a.enable(12),A.dithering&&a.enable(13),A.transmission&&a.enable(14),A.sheen&&a.enable(15),A.opaque&&a.enable(16),A.pointsUvs&&a.enable(17),A.decodeVideoTexture&&a.enable(18),A.alphaToCoverage&&a.enable(19),b.push(a.mask)}function M(b){const A=_[b.type];let R;if(A){const G=en[A];R=Md.clone(G.uniforms)}else R=b.uniforms;return R}function D(b,A){let R;for(let G=0,z=u.length;G<z;G++){const W=u[G];if(W.cacheKey===A){R=W,++R.usedTimes;break}}return R===void 0&&(R=new N1(n,A,b,s),u.push(R)),R}function C(b){if(--b.usedTimes===0){const A=u.indexOf(b);u[A]=u[u.length-1],u.pop(),b.destroy()}}function w(b){l.remove(b)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:D,releaseProgram:C,releaseShaderCache:w,programs:u,dispose:U}}function k1(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function H1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Jl(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Kl(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h,f,d,_,g,m){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:_,renderOrder:h.renderOrder,z:g,group:m},n[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=g,p.group=m),e++,p}function a(h,f,d,_,g,m){const p=o(h,f,d,_,g,m);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):t.push(p)}function l(h,f,d,_,g,m){const p=o(h,f,d,_,g,m);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||H1),i.length>1&&i.sort(f||Jl),r.length>1&&r.sort(f||Jl)}function u(){for(let h=e,f=n.length;h<f;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function V1(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Kl,n.set(i,[o])):r>=s.length?(o=new Kl,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function G1(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new We};break;case"SpotLight":t={position:new q,direction:new q,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new q,halfWidth:new q,halfHeight:new q};break}return n[e.id]=t,t}}}function W1(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let X1=0;function Y1(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Z1(n){const e=new G1,t=W1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new q);const r=new q,s=new ht,o=new ht;function a(c){let u=0,h=0,f=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let d=0,_=0,g=0,m=0,p=0,E=0,x=0,M=0,D=0,C=0,w=0;c.sort(Y1);for(let b=0,A=c.length;b<A;b++){const R=c[b],G=R.color,z=R.intensity,W=R.distance,Y=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=G.r*z,h+=G.g*z,f+=G.b*z;else if(R.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(R.sh.coefficients[H],z);w++}else if(R.isDirectionalLight){const H=e.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const K=R.shadow,k=t.get(R);k.shadowIntensity=K.intensity,k.shadowBias=K.bias,k.shadowNormalBias=K.normalBias,k.shadowRadius=K.radius,k.shadowMapSize=K.mapSize,i.directionalShadow[d]=k,i.directionalShadowMap[d]=Y,i.directionalShadowMatrix[d]=R.shadow.matrix,E++}i.directional[d]=H,d++}else if(R.isSpotLight){const H=e.get(R);H.position.setFromMatrixPosition(R.matrixWorld),H.color.copy(G).multiplyScalar(z),H.distance=W,H.coneCos=Math.cos(R.angle),H.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),H.decay=R.decay,i.spot[g]=H;const K=R.shadow;if(R.map&&(i.spotLightMap[D]=R.map,D++,K.updateMatrices(R),R.castShadow&&C++),i.spotLightMatrix[g]=K.matrix,R.castShadow){const k=t.get(R);k.shadowIntensity=K.intensity,k.shadowBias=K.bias,k.shadowNormalBias=K.normalBias,k.shadowRadius=K.radius,k.shadowMapSize=K.mapSize,i.spotShadow[g]=k,i.spotShadowMap[g]=Y,M++}g++}else if(R.isRectAreaLight){const H=e.get(R);H.color.copy(G).multiplyScalar(z),H.halfWidth.set(R.width*.5,0,0),H.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=H,m++}else if(R.isPointLight){const H=e.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),H.distance=R.distance,H.decay=R.decay,R.castShadow){const K=R.shadow,k=t.get(R);k.shadowIntensity=K.intensity,k.shadowBias=K.bias,k.shadowNormalBias=K.normalBias,k.shadowRadius=K.radius,k.shadowMapSize=K.mapSize,k.shadowCameraNear=K.camera.near,k.shadowCameraFar=K.camera.far,i.pointShadow[_]=k,i.pointShadowMap[_]=Y,i.pointShadowMatrix[_]=R.shadow.matrix,x++}i.point[_]=H,_++}else if(R.isHemisphereLight){const H=e.get(R);H.skyColor.copy(R.color).multiplyScalar(z),H.groundColor.copy(R.groundColor).multiplyScalar(z),i.hemi[p]=H,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const U=i.hash;(U.directionalLength!==d||U.pointLength!==_||U.spotLength!==g||U.rectAreaLength!==m||U.hemiLength!==p||U.numDirectionalShadows!==E||U.numPointShadows!==x||U.numSpotShadows!==M||U.numSpotMaps!==D||U.numLightProbes!==w)&&(i.directional.length=d,i.spot.length=g,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=M+D-C,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=w,U.directionalLength=d,U.pointLength=_,U.spotLength=g,U.rectAreaLength=m,U.hemiLength=p,U.numDirectionalShadows=E,U.numPointShadows=x,U.numSpotShadows=M,U.numSpotMaps=D,U.numLightProbes=w,i.version=X1++)}function l(c,u){let h=0,f=0,d=0,_=0,g=0;const m=u.matrixWorldInverse;for(let p=0,E=c.length;p<E;p++){const x=c[p];if(x.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),h++}else if(x.isSpotLight){const M=i.spot[d];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),d++}else if(x.isRectAreaLight){const M=i.rectArea[_];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){const M=i.point[f];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const M=i.hemi[g];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:i}}function jl(n){const e=new Z1(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function J1(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new jl(n),e.set(r,[a])):s>=o.length?(a=new jl(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class K1 extends Ar{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class j1 extends Ar{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const $1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Q1=`uniform sampler2D shadow_pass;
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
}`;function e_(n,e,t){let i=new yu;const r=new de,s=new de,o=new _t,a=new K1({depthPacking:Yf}),l=new j1,c={},u=t.maxTextureSize,h={[Ln]:Rt,[Rt]:Ln,[tn]:tn},f=new qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:$1,fragmentShader:Q1}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new vn;_.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new ft(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kc;let p=this.type;this.render=function(C,w,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const b=n.getRenderTarget(),A=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),G=n.state;G.setBlending(wn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const z=p!==dn&&this.type===dn,W=p===dn&&this.type!==dn;for(let Y=0,H=C.length;Y<H;Y++){const K=C[Y],k=K.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const pe=k.getFrameExtents();if(r.multiply(pe),s.copy(k.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/pe.x),r.x=s.x*pe.x,k.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/pe.y),r.y=s.y*pe.y,k.mapSize.y=s.y)),k.map===null||z===!0||W===!0){const ve=this.type!==dn?{minFilter:Ct,magFilter:Ct}:{};k.map!==null&&k.map.dispose(),k.map=new ii(r.x,r.y,ve),k.map.texture.name=K.name+".shadowMap",k.camera.updateProjectionMatrix()}n.setRenderTarget(k.map),n.clear();const ge=k.getViewportCount();for(let ve=0;ve<ge;ve++){const ze=k.getViewport(ve);o.set(s.x*ze.x,s.y*ze.y,s.x*ze.z,s.y*ze.w),G.viewport(o),k.updateMatrices(K,ve),i=k.getFrustum(),M(w,U,k.camera,K,this.type)}k.isPointLightShadow!==!0&&this.type===dn&&E(k,U),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(b,A,R)};function E(C,w){const U=e.update(g);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,d.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ii(r.x,r.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(w,null,U,f,g,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(w,null,U,d,g,null)}function x(C,w,U,b){let A=null;const R=U.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(R!==void 0)A=R;else if(A=U.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const G=A.uuid,z=w.uuid;let W=c[G];W===void 0&&(W={},c[G]=W);let Y=W[z];Y===void 0&&(Y=A.clone(),W[z]=Y,w.addEventListener("dispose",D)),A=Y}if(A.visible=w.visible,A.wireframe=w.wireframe,b===dn?A.side=w.shadowSide!==null?w.shadowSide:w.side:A.side=w.shadowSide!==null?w.shadowSide:h[w.side],A.alphaMap=w.alphaMap,A.alphaTest=w.alphaTest,A.map=w.map,A.clipShadows=w.clipShadows,A.clippingPlanes=w.clippingPlanes,A.clipIntersection=w.clipIntersection,A.displacementMap=w.displacementMap,A.displacementScale=w.displacementScale,A.displacementBias=w.displacementBias,A.wireframeLinewidth=w.wireframeLinewidth,A.linewidth=w.linewidth,U.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const G=n.properties.get(A);G.light=U}return A}function M(C,w,U,b,A){if(C.visible===!1)return;if(C.layers.test(w.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&A===dn)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,C.matrixWorld);const z=e.update(C),W=C.material;if(Array.isArray(W)){const Y=z.groups;for(let H=0,K=Y.length;H<K;H++){const k=Y[H],pe=W[k.materialIndex];if(pe&&pe.visible){const ge=x(C,pe,b,A);C.onBeforeShadow(n,C,w,U,z,ge,k),n.renderBufferDirect(U,null,z,ge,C,k),C.onAfterShadow(n,C,w,U,z,ge,k)}}}else if(W.visible){const Y=x(C,W,b,A);C.onBeforeShadow(n,C,w,U,z,Y,null),n.renderBufferDirect(U,null,z,Y,C,null),C.onAfterShadow(n,C,w,U,z,Y,null)}}const G=C.children;for(let z=0,W=G.length;z<W;z++)M(G[z],w,U,b,A)}function D(C){C.target.removeEventListener("dispose",D);for(const U in c){const b=c[U],A=C.target.uuid;A in b&&(b[A].dispose(),delete b[A])}}}function t_(n){function e(){let P=!1;const se=new _t;let Z=null;const j=new _t(0,0,0,0);return{setMask:function(ae){Z!==ae&&!P&&(n.colorMask(ae,ae,ae,ae),Z=ae)},setLocked:function(ae){P=ae},setClear:function(ae,Re,Ve,lt,vt){vt===!0&&(ae*=lt,Re*=lt,Ve*=lt),se.set(ae,Re,Ve,lt),j.equals(se)===!1&&(n.clearColor(ae,Re,Ve,lt),j.copy(se))},reset:function(){P=!1,Z=null,j.set(-1,0,0,0)}}}function t(){let P=!1,se=null,Z=null,j=null;return{setTest:function(ae){ae?Ae(n.DEPTH_TEST):ue(n.DEPTH_TEST)},setMask:function(ae){se!==ae&&!P&&(n.depthMask(ae),se=ae)},setFunc:function(ae){if(Z!==ae){switch(ae){case Rf:n.depthFunc(n.NEVER);break;case Pf:n.depthFunc(n.ALWAYS);break;case Lf:n.depthFunc(n.LESS);break;case fs:n.depthFunc(n.LEQUAL);break;case qf:n.depthFunc(n.EQUAL);break;case If:n.depthFunc(n.GEQUAL);break;case Uf:n.depthFunc(n.GREATER);break;case Df:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Z=ae}},setLocked:function(ae){P=ae},setClear:function(ae){j!==ae&&(n.clearDepth(ae),j=ae)},reset:function(){P=!1,se=null,Z=null,j=null}}}function i(){let P=!1,se=null,Z=null,j=null,ae=null,Re=null,Ve=null,lt=null,vt=null;return{setTest:function(Ze){P||(Ze?Ae(n.STENCIL_TEST):ue(n.STENCIL_TEST))},setMask:function(Ze){se!==Ze&&!P&&(n.stencilMask(Ze),se=Ze)},setFunc:function(Ze,an,jt){(Z!==Ze||j!==an||ae!==jt)&&(n.stencilFunc(Ze,an,jt),Z=Ze,j=an,ae=jt)},setOp:function(Ze,an,jt){(Re!==Ze||Ve!==an||lt!==jt)&&(n.stencilOp(Ze,an,jt),Re=Ze,Ve=an,lt=jt)},setLocked:function(Ze){P=Ze},setClear:function(Ze){vt!==Ze&&(n.clearStencil(Ze),vt=Ze)},reset:function(){P=!1,se=null,Z=null,j=null,ae=null,Re=null,Ve=null,lt=null,vt=null}}}const r=new e,s=new t,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,f=[],d=null,_=!1,g=null,m=null,p=null,E=null,x=null,M=null,D=null,C=new We(0,0,0),w=0,U=!1,b=null,A=null,R=null,G=null,z=null;const W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,H=0;const K=n.getParameter(n.VERSION);K.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(K)[1]),Y=H>=1):K.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),Y=H>=2);let k=null,pe={};const ge=n.getParameter(n.SCISSOR_BOX),ve=n.getParameter(n.VIEWPORT),ze=new _t().fromArray(ge),Ye=new _t().fromArray(ve);function V(P,se,Z,j){const ae=new Uint8Array(4),Re=n.createTexture();n.bindTexture(P,Re),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ve=0;Ve<Z;Ve++)P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY?n.texImage3D(se,0,n.RGBA,1,1,j,0,n.RGBA,n.UNSIGNED_BYTE,ae):n.texImage2D(se+Ve,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ae);return Re}const ne={};ne[n.TEXTURE_2D]=V(n.TEXTURE_2D,n.TEXTURE_2D,1),ne[n.TEXTURE_CUBE_MAP]=V(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[n.TEXTURE_2D_ARRAY]=V(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ne[n.TEXTURE_3D]=V(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),Ae(n.DEPTH_TEST),s.setFunc(fs),he(!1),X(il),Ae(n.CULL_FACE),re(wn);function Ae(P){c[P]!==!0&&(n.enable(P),c[P]=!0)}function ue(P){c[P]!==!1&&(n.disable(P),c[P]=!1)}function Le(P,se){return u[P]!==se?(n.bindFramebuffer(P,se),u[P]=se,P===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=se),P===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=se),!0):!1}function Oe(P,se){let Z=f,j=!1;if(P){Z=h.get(se),Z===void 0&&(Z=[],h.set(se,Z));const ae=P.textures;if(Z.length!==ae.length||Z[0]!==n.COLOR_ATTACHMENT0){for(let Re=0,Ve=ae.length;Re<Ve;Re++)Z[Re]=n.COLOR_ATTACHMENT0+Re;Z.length=ae.length,j=!0}}else Z[0]!==n.BACK&&(Z[0]=n.BACK,j=!0);j&&n.drawBuffers(Z)}function qe(P){return d!==P?(n.useProgram(P),d=P,!0):!1}const Xe={[Jn]:n.FUNC_ADD,[ff]:n.FUNC_SUBTRACT,[df]:n.FUNC_REVERSE_SUBTRACT};Xe[pf]=n.MIN,Xe[mf]=n.MAX;const S={[_f]:n.ZERO,[gf]:n.ONE,[vf]:n.SRC_COLOR,[Ao]:n.SRC_ALPHA,[bf]:n.SRC_ALPHA_SATURATE,[Sf]:n.DST_COLOR,[Af]:n.DST_ALPHA,[xf]:n.ONE_MINUS_SRC_COLOR,[yo]:n.ONE_MINUS_SRC_ALPHA,[Mf]:n.ONE_MINUS_DST_COLOR,[yf]:n.ONE_MINUS_DST_ALPHA,[Ef]:n.CONSTANT_COLOR,[Tf]:n.ONE_MINUS_CONSTANT_COLOR,[wf]:n.CONSTANT_ALPHA,[Cf]:n.ONE_MINUS_CONSTANT_ALPHA};function re(P,se,Z,j,ae,Re,Ve,lt,vt,Ze){if(P===wn){_===!0&&(ue(n.BLEND),_=!1);return}if(_===!1&&(Ae(n.BLEND),_=!0),P!==hf){if(P!==g||Ze!==U){if((m!==Jn||x!==Jn)&&(n.blendEquation(n.FUNC_ADD),m=Jn,x=Jn),Ze)switch(P){case Ii:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case rl:n.blendFunc(n.ONE,n.ONE);break;case sl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ol:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Ii:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case rl:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case sl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ol:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}p=null,E=null,M=null,D=null,C.set(0,0,0),w=0,g=P,U=Ze}return}ae=ae||se,Re=Re||Z,Ve=Ve||j,(se!==m||ae!==x)&&(n.blendEquationSeparate(Xe[se],Xe[ae]),m=se,x=ae),(Z!==p||j!==E||Re!==M||Ve!==D)&&(n.blendFuncSeparate(S[Z],S[j],S[Re],S[Ve]),p=Z,E=j,M=Re,D=Ve),(lt.equals(C)===!1||vt!==w)&&(n.blendColor(lt.r,lt.g,lt.b,vt),C.copy(lt),w=vt),g=P,U=!1}function te(P,se){P.side===tn?ue(n.CULL_FACE):Ae(n.CULL_FACE);let Z=P.side===Rt;se&&(Z=!Z),he(Z),P.blending===Ii&&P.transparent===!1?re(wn):re(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),s.setFunc(P.depthFunc),s.setTest(P.depthTest),s.setMask(P.depthWrite),r.setMask(P.colorWrite);const j=P.stencilWrite;o.setTest(j),j&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),fe(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Ae(n.SAMPLE_ALPHA_TO_COVERAGE):ue(n.SAMPLE_ALPHA_TO_COVERAGE)}function he(P){b!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),b=P)}function X(P){P!==lf?(Ae(n.CULL_FACE),P!==A&&(P===il?n.cullFace(n.BACK):P===cf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ue(n.CULL_FACE),A=P}function we(P){P!==R&&(Y&&n.lineWidth(P),R=P)}function fe(P,se,Z){P?(Ae(n.POLYGON_OFFSET_FILL),(G!==se||z!==Z)&&(n.polygonOffset(se,Z),G=se,z=Z)):ue(n.POLYGON_OFFSET_FILL)}function ye(P){P?Ae(n.SCISSOR_TEST):ue(n.SCISSOR_TEST)}function T(P){P===void 0&&(P=n.TEXTURE0+W-1),k!==P&&(n.activeTexture(P),k=P)}function v(P,se,Z){Z===void 0&&(k===null?Z=n.TEXTURE0+W-1:Z=k);let j=pe[Z];j===void 0&&(j={type:void 0,texture:void 0},pe[Z]=j),(j.type!==P||j.texture!==se)&&(k!==Z&&(n.activeTexture(Z),k=Z),n.bindTexture(P,se||ne[P]),j.type=P,j.texture=se)}function F(){const P=pe[k];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function ee(){try{n.compressedTexImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{n.compressedTexImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function $(){try{n.texSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Te(){try{n.texSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function le(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function xe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ne(){try{n.texStorage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ie(){try{n.texStorage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function _e(){try{n.texImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function He(){try{n.texImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ue(P){ze.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),ze.copy(P))}function Se(P){Ye.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),Ye.copy(P))}function De(P,se){let Z=l.get(se);Z===void 0&&(Z=new WeakMap,l.set(se,Z));let j=Z.get(P);j===void 0&&(j=n.getUniformBlockIndex(se,P.name),Z.set(P,j))}function ke(P,se){const j=l.get(se).get(P);a.get(se)!==j&&(n.uniformBlockBinding(se,j,P.__bindingPointIndex),a.set(se,j))}function nt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},k=null,pe={},u={},h=new WeakMap,f=[],d=null,_=!1,g=null,m=null,p=null,E=null,x=null,M=null,D=null,C=new We(0,0,0),w=0,U=!1,b=null,A=null,R=null,G=null,z=null,ze.set(0,0,n.canvas.width,n.canvas.height),Ye.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:Ae,disable:ue,bindFramebuffer:Le,drawBuffers:Oe,useProgram:qe,setBlending:re,setMaterial:te,setFlipSided:he,setCullFace:X,setLineWidth:we,setPolygonOffset:fe,setScissorTest:ye,activeTexture:T,bindTexture:v,unbindTexture:F,compressedTexImage2D:ee,compressedTexImage3D:Q,texImage2D:_e,texImage3D:He,updateUBOMapping:De,uniformBlockBinding:ke,texStorage2D:Ne,texStorage3D:ie,texSubImage2D:$,texSubImage3D:Te,compressedTexSubImage2D:le,compressedTexSubImage3D:xe,scissor:Ue,viewport:Se,reset:nt}}function $l(n,e,t,i){const r=n_(i);switch(t){case nu:return n*e;case ru:return n*e;case su:return n*e*2;case ou:return n*e/r.components*r.byteLength;case Sa:return n*e/r.components*r.byteLength;case au:return n*e*2/r.components*r.byteLength;case Ma:return n*e*2/r.components*r.byteLength;case iu:return n*e*3/r.components*r.byteLength;case Zt:return n*e*4/r.components*r.byteLength;case ba:return n*e*4/r.components*r.byteLength;case is:case rs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ss:case os:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case wo:case Ro:return Math.max(n,16)*Math.max(e,8)/4;case To:case Co:return Math.max(n,8)*Math.max(e,8)/2;case Po:case Lo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case qo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Io:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Uo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Do:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case No:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Oo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Fo:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Bo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case zo:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ko:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ho:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Vo:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Go:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Wo:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Xo:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case as:case Yo:case Zo:return Math.ceil(n/4)*Math.ceil(e/4)*16;case lu:case Jo:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ko:case jo:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function n_(n){switch(n){case _n:case Qc:return{byteLength:1,components:1};case cr:case eu:case gr:return{byteLength:2,components:1};case Aa:case ya:return{byteLength:2,components:4};case ni:case xa:case pn:return{byteLength:4,components:1};case tu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function i_(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new de,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,v){return d?new OffscreenCanvas(T,v):ur("canvas")}function g(T,v,F){let ee=1;const Q=ye(T);if((Q.width>F||Q.height>F)&&(ee=F/Math.max(Q.width,Q.height)),ee<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const $=Math.floor(ee*Q.width),Te=Math.floor(ee*Q.height);h===void 0&&(h=_($,Te));const le=v?_($,Te):h;return le.width=$,le.height=Te,le.getContext("2d").drawImage(T,0,0,$,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+$+"x"+Te+")."),le}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),T;return T}function m(T){return T.generateMipmaps&&T.minFilter!==Ct&&T.minFilter!==Yt}function p(T){n.generateMipmap(T)}function E(T,v,F,ee,Q=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let $=v;if(v===n.RED&&(F===n.FLOAT&&($=n.R32F),F===n.HALF_FLOAT&&($=n.R16F),F===n.UNSIGNED_BYTE&&($=n.R8)),v===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&($=n.R8UI),F===n.UNSIGNED_SHORT&&($=n.R16UI),F===n.UNSIGNED_INT&&($=n.R32UI),F===n.BYTE&&($=n.R8I),F===n.SHORT&&($=n.R16I),F===n.INT&&($=n.R32I)),v===n.RG&&(F===n.FLOAT&&($=n.RG32F),F===n.HALF_FLOAT&&($=n.RG16F),F===n.UNSIGNED_BYTE&&($=n.RG8)),v===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&($=n.RG8UI),F===n.UNSIGNED_SHORT&&($=n.RG16UI),F===n.UNSIGNED_INT&&($=n.RG32UI),F===n.BYTE&&($=n.RG8I),F===n.SHORT&&($=n.RG16I),F===n.INT&&($=n.RG32I)),v===n.RGB&&F===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),v===n.RGBA){const Te=Q?ds:$e.getTransfer(ee);F===n.FLOAT&&($=n.RGBA32F),F===n.HALF_FLOAT&&($=n.RGBA16F),F===n.UNSIGNED_BYTE&&($=Te===tt?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function x(T,v){let F;return T?v===null||v===ni||v===ki?F=n.DEPTH24_STENCIL8:v===pn?F=n.DEPTH32F_STENCIL8:v===cr&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ni||v===ki?F=n.DEPTH_COMPONENT24:v===pn?F=n.DEPTH_COMPONENT32F:v===cr&&(F=n.DEPTH_COMPONENT16),F}function M(T,v){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ct&&T.minFilter!==Yt?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function D(T){const v=T.target;v.removeEventListener("dispose",D),w(v),v.isVideoTexture&&u.delete(v)}function C(T){const v=T.target;v.removeEventListener("dispose",C),b(v)}function w(T){const v=i.get(T);if(v.__webglInit===void 0)return;const F=T.source,ee=f.get(F);if(ee){const Q=ee[v.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&U(T),Object.keys(ee).length===0&&f.delete(F)}i.remove(T)}function U(T){const v=i.get(T);n.deleteTexture(v.__webglTexture);const F=T.source,ee=f.get(F);delete ee[v.__cacheKey],o.memory.textures--}function b(T){const v=i.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(v.__webglFramebuffer[ee]))for(let Q=0;Q<v.__webglFramebuffer[ee].length;Q++)n.deleteFramebuffer(v.__webglFramebuffer[ee][Q]);else n.deleteFramebuffer(v.__webglFramebuffer[ee]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[ee])}else{if(Array.isArray(v.__webglFramebuffer))for(let ee=0;ee<v.__webglFramebuffer.length;ee++)n.deleteFramebuffer(v.__webglFramebuffer[ee]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let ee=0;ee<v.__webglColorRenderbuffer.length;ee++)v.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[ee]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const F=T.textures;for(let ee=0,Q=F.length;ee<Q;ee++){const $=i.get(F[ee]);$.__webglTexture&&(n.deleteTexture($.__webglTexture),o.memory.textures--),i.remove(F[ee])}i.remove(T)}let A=0;function R(){A=0}function G(){const T=A;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),A+=1,T}function z(T){const v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function W(T,v){const F=i.get(T);if(T.isVideoTexture&&we(T),T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){const ee=T.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ye(F,T,v);return}}t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+v)}function Y(T,v){const F=i.get(T);if(T.version>0&&F.__version!==T.version){Ye(F,T,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+v)}function H(T,v){const F=i.get(T);if(T.version>0&&F.__version!==T.version){Ye(F,T,v);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+v)}function K(T,v){const F=i.get(T);if(T.version>0&&F.__version!==T.version){V(F,T,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+v)}const k={[bo]:n.REPEAT,[jn]:n.CLAMP_TO_EDGE,[Eo]:n.MIRRORED_REPEAT},pe={[Ct]:n.NEAREST,[Wf]:n.NEAREST_MIPMAP_NEAREST,[Er]:n.NEAREST_MIPMAP_LINEAR,[Yt]:n.LINEAR,[Ns]:n.LINEAR_MIPMAP_NEAREST,[$n]:n.LINEAR_MIPMAP_LINEAR},ge={[Jf]:n.NEVER,[td]:n.ALWAYS,[Kf]:n.LESS,[uu]:n.LEQUAL,[jf]:n.EQUAL,[ed]:n.GEQUAL,[$f]:n.GREATER,[Qf]:n.NOTEQUAL};function ve(T,v){if(v.type===pn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Yt||v.magFilter===Ns||v.magFilter===Er||v.magFilter===$n||v.minFilter===Yt||v.minFilter===Ns||v.minFilter===Er||v.minFilter===$n)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,k[v.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,k[v.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,k[v.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,pe[v.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,pe[v.minFilter]),v.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,ge[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ct||v.minFilter!==Er&&v.minFilter!==$n||v.type===pn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function ze(T,v){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",D));const ee=v.source;let Q=f.get(ee);Q===void 0&&(Q={},f.set(ee,Q));const $=z(v);if($!==T.__cacheKey){Q[$]===void 0&&(Q[$]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),Q[$].usedTimes++;const Te=Q[T.__cacheKey];Te!==void 0&&(Q[T.__cacheKey].usedTimes--,Te.usedTimes===0&&U(v)),T.__cacheKey=$,T.__webglTexture=Q[$].texture}return F}function Ye(T,v,F){let ee=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ee=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ee=n.TEXTURE_3D);const Q=ze(T,v),$=v.source;t.bindTexture(ee,T.__webglTexture,n.TEXTURE0+F);const Te=i.get($);if($.version!==Te.__version||Q===!0){t.activeTexture(n.TEXTURE0+F);const le=$e.getPrimaries($e.workingColorSpace),xe=v.colorSpace===Tn?null:$e.getPrimaries(v.colorSpace),Ne=v.colorSpace===Tn||le===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let ie=g(v.image,!1,r.maxTextureSize);ie=fe(v,ie);const _e=s.convert(v.format,v.colorSpace),He=s.convert(v.type);let Ue=E(v.internalFormat,_e,He,v.colorSpace,v.isVideoTexture);ve(ee,v);let Se;const De=v.mipmaps,ke=v.isVideoTexture!==!0,nt=Te.__version===void 0||Q===!0,P=$.dataReady,se=M(v,ie);if(v.isDepthTexture)Ue=x(v.format===Hi,v.type),nt&&(ke?t.texStorage2D(n.TEXTURE_2D,1,Ue,ie.width,ie.height):t.texImage2D(n.TEXTURE_2D,0,Ue,ie.width,ie.height,0,_e,He,null));else if(v.isDataTexture)if(De.length>0){ke&&nt&&t.texStorage2D(n.TEXTURE_2D,se,Ue,De[0].width,De[0].height);for(let Z=0,j=De.length;Z<j;Z++)Se=De[Z],ke?P&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,Se.width,Se.height,_e,He,Se.data):t.texImage2D(n.TEXTURE_2D,Z,Ue,Se.width,Se.height,0,_e,He,Se.data);v.generateMipmaps=!1}else ke?(nt&&t.texStorage2D(n.TEXTURE_2D,se,Ue,ie.width,ie.height),P&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ie.width,ie.height,_e,He,ie.data)):t.texImage2D(n.TEXTURE_2D,0,Ue,ie.width,ie.height,0,_e,He,ie.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){ke&&nt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,se,Ue,De[0].width,De[0].height,ie.depth);for(let Z=0,j=De.length;Z<j;Z++)if(Se=De[Z],v.format!==Zt)if(_e!==null)if(ke){if(P)if(v.layerUpdates.size>0){const ae=$l(Se.width,Se.height,v.format,v.type);for(const Re of v.layerUpdates){const Ve=Se.data.subarray(Re*ae/Se.data.BYTES_PER_ELEMENT,(Re+1)*ae/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,Re,Se.width,Se.height,1,_e,Ve,0,0)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,Se.width,Se.height,ie.depth,_e,Se.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Z,Ue,Se.width,Se.height,ie.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?P&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,Se.width,Se.height,ie.depth,_e,He,Se.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Z,Ue,Se.width,Se.height,ie.depth,0,_e,He,Se.data)}else{ke&&nt&&t.texStorage2D(n.TEXTURE_2D,se,Ue,De[0].width,De[0].height);for(let Z=0,j=De.length;Z<j;Z++)Se=De[Z],v.format!==Zt?_e!==null?ke?P&&t.compressedTexSubImage2D(n.TEXTURE_2D,Z,0,0,Se.width,Se.height,_e,Se.data):t.compressedTexImage2D(n.TEXTURE_2D,Z,Ue,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?P&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,Se.width,Se.height,_e,He,Se.data):t.texImage2D(n.TEXTURE_2D,Z,Ue,Se.width,Se.height,0,_e,He,Se.data)}else if(v.isDataArrayTexture)if(ke){if(nt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,se,Ue,ie.width,ie.height,ie.depth),P)if(v.layerUpdates.size>0){const Z=$l(ie.width,ie.height,v.format,v.type);for(const j of v.layerUpdates){const ae=ie.data.subarray(j*Z/ie.data.BYTES_PER_ELEMENT,(j+1)*Z/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,j,ie.width,ie.height,1,_e,He,ae)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,_e,He,ie.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ue,ie.width,ie.height,ie.depth,0,_e,He,ie.data);else if(v.isData3DTexture)ke?(nt&&t.texStorage3D(n.TEXTURE_3D,se,Ue,ie.width,ie.height,ie.depth),P&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,_e,He,ie.data)):t.texImage3D(n.TEXTURE_3D,0,Ue,ie.width,ie.height,ie.depth,0,_e,He,ie.data);else if(v.isFramebufferTexture){if(nt)if(ke)t.texStorage2D(n.TEXTURE_2D,se,Ue,ie.width,ie.height);else{let Z=ie.width,j=ie.height;for(let ae=0;ae<se;ae++)t.texImage2D(n.TEXTURE_2D,ae,Ue,Z,j,0,_e,He,null),Z>>=1,j>>=1}}else if(De.length>0){if(ke&&nt){const Z=ye(De[0]);t.texStorage2D(n.TEXTURE_2D,se,Ue,Z.width,Z.height)}for(let Z=0,j=De.length;Z<j;Z++)Se=De[Z],ke?P&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,_e,He,Se):t.texImage2D(n.TEXTURE_2D,Z,Ue,_e,He,Se);v.generateMipmaps=!1}else if(ke){if(nt){const Z=ye(ie);t.texStorage2D(n.TEXTURE_2D,se,Ue,Z.width,Z.height)}P&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,_e,He,ie)}else t.texImage2D(n.TEXTURE_2D,0,Ue,_e,He,ie);m(v)&&p(ee),Te.__version=$.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function V(T,v,F){if(v.image.length!==6)return;const ee=ze(T,v),Q=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+F);const $=i.get(Q);if(Q.version!==$.__version||ee===!0){t.activeTexture(n.TEXTURE0+F);const Te=$e.getPrimaries($e.workingColorSpace),le=v.colorSpace===Tn?null:$e.getPrimaries(v.colorSpace),xe=v.colorSpace===Tn||Te===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Ne=v.isCompressedTexture||v.image[0].isCompressedTexture,ie=v.image[0]&&v.image[0].isDataTexture,_e=[];for(let j=0;j<6;j++)!Ne&&!ie?_e[j]=g(v.image[j],!0,r.maxCubemapSize):_e[j]=ie?v.image[j].image:v.image[j],_e[j]=fe(v,_e[j]);const He=_e[0],Ue=s.convert(v.format,v.colorSpace),Se=s.convert(v.type),De=E(v.internalFormat,Ue,Se,v.colorSpace),ke=v.isVideoTexture!==!0,nt=$.__version===void 0||ee===!0,P=Q.dataReady;let se=M(v,He);ve(n.TEXTURE_CUBE_MAP,v);let Z;if(Ne){ke&&nt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,se,De,He.width,He.height);for(let j=0;j<6;j++){Z=_e[j].mipmaps;for(let ae=0;ae<Z.length;ae++){const Re=Z[ae];v.format!==Zt?Ue!==null?ke?P&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ae,0,0,Re.width,Re.height,Ue,Re.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ae,De,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?P&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ae,0,0,Re.width,Re.height,Ue,Se,Re.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ae,De,Re.width,Re.height,0,Ue,Se,Re.data)}}}else{if(Z=v.mipmaps,ke&&nt){Z.length>0&&se++;const j=ye(_e[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,se,De,j.width,j.height)}for(let j=0;j<6;j++)if(ie){ke?P&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,_e[j].width,_e[j].height,Ue,Se,_e[j].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,De,_e[j].width,_e[j].height,0,Ue,Se,_e[j].data);for(let ae=0;ae<Z.length;ae++){const Ve=Z[ae].image[j].image;ke?P&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ae+1,0,0,Ve.width,Ve.height,Ue,Se,Ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ae+1,De,Ve.width,Ve.height,0,Ue,Se,Ve.data)}}else{ke?P&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ue,Se,_e[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,De,Ue,Se,_e[j]);for(let ae=0;ae<Z.length;ae++){const Re=Z[ae];ke?P&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ae+1,0,0,Ue,Se,Re.image[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ae+1,De,Ue,Se,Re.image[j])}}}m(v)&&p(n.TEXTURE_CUBE_MAP),$.__version=Q.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function ne(T,v,F,ee,Q,$){const Te=s.convert(F.format,F.colorSpace),le=s.convert(F.type),xe=E(F.internalFormat,Te,le,F.colorSpace);if(!i.get(v).__hasExternalTextures){const ie=Math.max(1,v.width>>$),_e=Math.max(1,v.height>>$);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,$,xe,ie,_e,v.depth,0,Te,le,null):t.texImage2D(Q,$,xe,ie,_e,0,Te,le,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),X(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,Q,i.get(F).__webglTexture,0,he(v)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ee,Q,i.get(F).__webglTexture,$),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ae(T,v,F){if(n.bindRenderbuffer(n.RENDERBUFFER,T),v.depthBuffer){const ee=v.depthTexture,Q=ee&&ee.isDepthTexture?ee.type:null,$=x(v.stencilBuffer,Q),Te=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=he(v);X(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,$,v.width,v.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,le,$,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,$,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Te,n.RENDERBUFFER,T)}else{const ee=v.textures;for(let Q=0;Q<ee.length;Q++){const $=ee[Q],Te=s.convert($.format,$.colorSpace),le=s.convert($.type),xe=E($.internalFormat,Te,le,$.colorSpace),Ne=he(v);F&&X(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,xe,v.width,v.height):X(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ne,xe,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,xe,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ue(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),W(v.depthTexture,0);const ee=i.get(v.depthTexture).__webglTexture,Q=he(v);if(v.depthTexture.format===Ui)X(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0);else if(v.depthTexture.format===Hi)X(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Le(T){const v=i.get(T),F=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");ue(v.__webglFramebuffer,T)}else if(F){v.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[ee]),v.__webglDepthbuffer[ee]=n.createRenderbuffer(),Ae(v.__webglDepthbuffer[ee],T,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=n.createRenderbuffer(),Ae(v.__webglDepthbuffer,T,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Oe(T,v,F){const ee=i.get(T);v!==void 0&&ne(ee.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&Le(T)}function qe(T){const v=T.texture,F=i.get(T),ee=i.get(v);T.addEventListener("dispose",C);const Q=T.textures,$=T.isWebGLCubeRenderTarget===!0,Te=Q.length>1;if(Te||(ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture()),ee.__version=v.version,o.memory.textures++),$){F.__webglFramebuffer=[];for(let le=0;le<6;le++)if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[le]=[];for(let xe=0;xe<v.mipmaps.length;xe++)F.__webglFramebuffer[le][xe]=n.createFramebuffer()}else F.__webglFramebuffer[le]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let le=0;le<v.mipmaps.length;le++)F.__webglFramebuffer[le]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(Te)for(let le=0,xe=Q.length;le<xe;le++){const Ne=i.get(Q[le]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=n.createTexture(),o.memory.textures++)}if(T.samples>0&&X(T)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let le=0;le<Q.length;le++){const xe=Q[le];F.__webglColorRenderbuffer[le]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[le]);const Ne=s.convert(xe.format,xe.colorSpace),ie=s.convert(xe.type),_e=E(xe.internalFormat,Ne,ie,xe.colorSpace,T.isXRRenderTarget===!0),He=he(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,He,_e,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,F.__webglColorRenderbuffer[le])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),Ae(F.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),ve(n.TEXTURE_CUBE_MAP,v);for(let le=0;le<6;le++)if(v.mipmaps&&v.mipmaps.length>0)for(let xe=0;xe<v.mipmaps.length;xe++)ne(F.__webglFramebuffer[le][xe],T,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,xe);else ne(F.__webglFramebuffer[le],T,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(v)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let le=0,xe=Q.length;le<xe;le++){const Ne=Q[le],ie=i.get(Ne);t.bindTexture(n.TEXTURE_2D,ie.__webglTexture),ve(n.TEXTURE_2D,Ne),ne(F.__webglFramebuffer,T,Ne,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,0),m(Ne)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let le=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(le=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(le,ee.__webglTexture),ve(le,v),v.mipmaps&&v.mipmaps.length>0)for(let xe=0;xe<v.mipmaps.length;xe++)ne(F.__webglFramebuffer[xe],T,v,n.COLOR_ATTACHMENT0,le,xe);else ne(F.__webglFramebuffer,T,v,n.COLOR_ATTACHMENT0,le,0);m(v)&&p(le),t.unbindTexture()}T.depthBuffer&&Le(T)}function Xe(T){const v=T.textures;for(let F=0,ee=v.length;F<ee;F++){const Q=v[F];if(m(Q)){const $=T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Te=i.get(Q).__webglTexture;t.bindTexture($,Te),p($),t.unbindTexture()}}}const S=[],re=[];function te(T){if(T.samples>0){if(X(T)===!1){const v=T.textures,F=T.width,ee=T.height;let Q=n.COLOR_BUFFER_BIT;const $=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Te=i.get(T),le=v.length>1;if(le)for(let xe=0;xe<v.length;xe++)t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let xe=0;xe<v.length;xe++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),le){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Te.__webglColorRenderbuffer[xe]);const Ne=i.get(v[xe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ne,0)}n.blitFramebuffer(0,0,F,ee,0,0,F,ee,Q,n.NEAREST),l===!0&&(S.length=0,re.length=0,S.push(n.COLOR_ATTACHMENT0+xe),T.depthBuffer&&T.resolveDepthBuffer===!1&&(S.push($),re.push($),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,re)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,S))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),le)for(let xe=0;xe<v.length;xe++){t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,Te.__webglColorRenderbuffer[xe]);const Ne=i.get(v[xe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,Ne,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const v=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function he(T){return Math.min(r.maxSamples,T.samples)}function X(T){const v=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function we(T){const v=o.render.frame;u.get(T)!==v&&(u.set(T,v),T.update())}function fe(T,v){const F=T.colorSpace,ee=T.format,Q=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||F!==Nn&&F!==Tn&&($e.getTransfer(F)===tt?(ee!==Zt||Q!==_n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),v}function ye(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=R,this.setTexture2D=W,this.setTexture2DArray=Y,this.setTexture3D=H,this.setTextureCube=K,this.rebindTextures=Oe,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=X}function r_(n,e){function t(i,r=Tn){let s;const o=$e.getTransfer(r);if(i===_n)return n.UNSIGNED_BYTE;if(i===Aa)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ya)return n.UNSIGNED_SHORT_5_5_5_1;if(i===tu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Qc)return n.BYTE;if(i===eu)return n.SHORT;if(i===cr)return n.UNSIGNED_SHORT;if(i===xa)return n.INT;if(i===ni)return n.UNSIGNED_INT;if(i===pn)return n.FLOAT;if(i===gr)return n.HALF_FLOAT;if(i===nu)return n.ALPHA;if(i===iu)return n.RGB;if(i===Zt)return n.RGBA;if(i===ru)return n.LUMINANCE;if(i===su)return n.LUMINANCE_ALPHA;if(i===Ui)return n.DEPTH_COMPONENT;if(i===Hi)return n.DEPTH_STENCIL;if(i===ou)return n.RED;if(i===Sa)return n.RED_INTEGER;if(i===au)return n.RG;if(i===Ma)return n.RG_INTEGER;if(i===ba)return n.RGBA_INTEGER;if(i===is||i===rs||i===ss||i===os)if(o===tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===is)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===rs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ss)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===os)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===is)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===rs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ss)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===os)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===To||i===wo||i===Co||i===Ro)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===To)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===wo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Co)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ro)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Po||i===Lo||i===qo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Po||i===Lo)return o===tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===qo)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Io||i===Uo||i===Do||i===No||i===Oo||i===Fo||i===Bo||i===zo||i===ko||i===Ho||i===Vo||i===Go||i===Wo||i===Xo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Io)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Uo)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Do)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===No)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Oo)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Fo)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Bo)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===zo)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ko)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ho)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Vo)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Go)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Wo)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Xo)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===as||i===Yo||i===Zo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===as)return o===tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Yo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Zo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===lu||i===Jo||i===Ko||i===jo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===as)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Jo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ko)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===jo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ki?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class s_ extends Ut{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Yr extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const o_={type:"move"};class co{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,i),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,_=.005;c.inputState.pinching&&f>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(o_)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Yr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const a_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,l_=`
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

}`;class c_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new bt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new qn({vertexShader:a_,fragmentShader:l_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ft(new Ft(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class u_ extends Wi{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,_=null;const g=new c_,m=t.getContextAttributes();let p=null,E=null;const x=[],M=[],D=new de;let C=null;const w=new Ut;w.layers.enable(1),w.viewport=new _t;const U=new Ut;U.layers.enable(2),U.viewport=new _t;const b=[w,U],A=new s_;A.layers.enable(1),A.layers.enable(2);let R=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let ne=x[V];return ne===void 0&&(ne=new co,x[V]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(V){let ne=x[V];return ne===void 0&&(ne=new co,x[V]=ne),ne.getGripSpace()},this.getHand=function(V){let ne=x[V];return ne===void 0&&(ne=new co,x[V]=ne),ne.getHandSpace()};function z(V){const ne=M.indexOf(V.inputSource);if(ne===-1)return;const Ae=x[ne];Ae!==void 0&&(Ae.update(V.inputSource,V.frame,c||o),Ae.dispatchEvent({type:V.type,data:V.inputSource}))}function W(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",Y);for(let V=0;V<x.length;V++){const ne=M[V];ne!==null&&(M[V]=null,x[V].disconnect(ne))}R=null,G=null,g.reset(),e.setRenderTarget(p),d=null,f=null,h=null,r=null,E=null,Ye.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",W),r.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(D),r.renderState.layers===void 0){const ne={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,ne),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),E=new ii(d.framebufferWidth,d.framebufferHeight,{format:Zt,type:_n,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ne=null,Ae=null,ue=null;m.depth&&(ue=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=m.stencil?Hi:Ui,Ae=m.stencil?ki:ni);const Le={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(Le),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new ii(f.textureWidth,f.textureHeight,{format:Zt,type:_n,depthTexture:new bu(f.textureWidth,f.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ye.setContext(r),Ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Y(V){for(let ne=0;ne<V.removed.length;ne++){const Ae=V.removed[ne],ue=M.indexOf(Ae);ue>=0&&(M[ue]=null,x[ue].disconnect(Ae))}for(let ne=0;ne<V.added.length;ne++){const Ae=V.added[ne];let ue=M.indexOf(Ae);if(ue===-1){for(let Oe=0;Oe<x.length;Oe++)if(Oe>=M.length){M.push(Ae),ue=Oe;break}else if(M[Oe]===null){M[Oe]=Ae,ue=Oe;break}if(ue===-1)break}const Le=x[ue];Le&&Le.connect(Ae)}}const H=new q,K=new q;function k(V,ne,Ae){H.setFromMatrixPosition(ne.matrixWorld),K.setFromMatrixPosition(Ae.matrixWorld);const ue=H.distanceTo(K),Le=ne.projectionMatrix.elements,Oe=Ae.projectionMatrix.elements,qe=Le[14]/(Le[10]-1),Xe=Le[14]/(Le[10]+1),S=(Le[9]+1)/Le[5],re=(Le[9]-1)/Le[5],te=(Le[8]-1)/Le[0],he=(Oe[8]+1)/Oe[0],X=qe*te,we=qe*he,fe=ue/(-te+he),ye=fe*-te;ne.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(ye),V.translateZ(fe),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const T=qe+fe,v=Xe+fe,F=X-ye,ee=we+(ue-ye),Q=S*Xe/v*T,$=re*Xe/v*T;V.projectionMatrix.makePerspective(F,ee,Q,$,T,v),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function pe(V,ne){ne===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(ne.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;g.texture!==null&&(V.near=g.depthNear,V.far=g.depthFar),A.near=U.near=w.near=V.near,A.far=U.far=w.far=V.far,(R!==A.near||G!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),R=A.near,G=A.far,w.near=R,w.far=G,U.near=R,U.far=G,w.updateProjectionMatrix(),U.updateProjectionMatrix(),V.updateProjectionMatrix());const ne=V.parent,Ae=A.cameras;pe(A,ne);for(let ue=0;ue<Ae.length;ue++)pe(Ae[ue],ne);Ae.length===2?k(A,w,U):A.projectionMatrix.copy(w.projectionMatrix),ge(V,A,ne)};function ge(V,ne,Ae){Ae===null?V.matrix.copy(ne.matrixWorld):(V.matrix.copy(Ae.matrixWorld),V.matrix.invert(),V.matrix.multiply(ne.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(ne.projectionMatrix),V.projectionMatrixInverse.copy(ne.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=$o*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(V){l=V,f!==null&&(f.fixedFoveation=V),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=V)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(A)};let ve=null;function ze(V,ne){if(u=ne.getViewerPose(c||o),_=ne,u!==null){const Ae=u.views;d!==null&&(e.setRenderTargetFramebuffer(E,d.framebuffer),e.setRenderTarget(E));let ue=!1;Ae.length!==A.cameras.length&&(A.cameras.length=0,ue=!0);for(let Oe=0;Oe<Ae.length;Oe++){const qe=Ae[Oe];let Xe=null;if(d!==null)Xe=d.getViewport(qe);else{const re=h.getViewSubImage(f,qe);Xe=re.viewport,Oe===0&&(e.setRenderTargetTextures(E,re.colorTexture,f.ignoreDepthValues?void 0:re.depthStencilTexture),e.setRenderTarget(E))}let S=b[Oe];S===void 0&&(S=new Ut,S.layers.enable(Oe),S.viewport=new _t,b[Oe]=S),S.matrix.fromArray(qe.transform.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale),S.projectionMatrix.fromArray(qe.projectionMatrix),S.projectionMatrixInverse.copy(S.projectionMatrix).invert(),S.viewport.set(Xe.x,Xe.y,Xe.width,Xe.height),Oe===0&&(A.matrix.copy(S.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),ue===!0&&A.cameras.push(S)}const Le=r.enabledFeatures;if(Le&&Le.includes("depth-sensing")){const Oe=h.getDepthInformation(Ae[0]);Oe&&Oe.isValid&&Oe.texture&&g.init(e,Oe,r.renderState)}}for(let Ae=0;Ae<x.length;Ae++){const ue=M[Ae],Le=x[Ae];ue!==null&&Le!==void 0&&Le.update(ue,ne,c||o)}ve&&ve(V,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),_=null}const Ye=new Su;Ye.setAnimationLoop(ze),this.setAnimationLoop=function(V){ve=V},this.dispose=function(){}}}const Xn=new sn,h_=new ht;function f_(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,vu(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,E,x,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,E,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Rt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Rt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=e.get(p),x=E.envMap,M=E.envMapRotation;x&&(m.envMap.value=x,Xn.copy(M),Xn.x*=-1,Xn.y*=-1,Xn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Xn.y*=-1,Xn.z*=-1),m.envMapRotation.value.setFromMatrix4(h_.makeRotationFromEuler(Xn)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,E,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Rt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const E=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function d_(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,x){const M=x.program;i.uniformBlockBinding(E,M)}function c(E,x){let M=r[E.id];M===void 0&&(_(E),M=u(E),r[E.id]=M,E.addEventListener("dispose",m));const D=x.program;i.updateUBOMapping(E,D);const C=e.render.frame;s[E.id]!==C&&(f(E),s[E.id]=C)}function u(E){const x=h();E.__bindingPointIndex=x;const M=n.createBuffer(),D=E.__size,C=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,D,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,M),M}function h(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const x=r[E.id],M=E.uniforms,D=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let C=0,w=M.length;C<w;C++){const U=Array.isArray(M[C])?M[C]:[M[C]];for(let b=0,A=U.length;b<A;b++){const R=U[b];if(d(R,C,b,D)===!0){const G=R.__offset,z=Array.isArray(R.value)?R.value:[R.value];let W=0;for(let Y=0;Y<z.length;Y++){const H=z[Y],K=g(H);typeof H=="number"||typeof H=="boolean"?(R.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,G+W,R.__data)):H.isMatrix3?(R.__data[0]=H.elements[0],R.__data[1]=H.elements[1],R.__data[2]=H.elements[2],R.__data[3]=0,R.__data[4]=H.elements[3],R.__data[5]=H.elements[4],R.__data[6]=H.elements[5],R.__data[7]=0,R.__data[8]=H.elements[6],R.__data[9]=H.elements[7],R.__data[10]=H.elements[8],R.__data[11]=0):(H.toArray(R.__data,W),W+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(E,x,M,D){const C=E.value,w=x+"_"+M;if(D[w]===void 0)return typeof C=="number"||typeof C=="boolean"?D[w]=C:D[w]=C.clone(),!0;{const U=D[w];if(typeof C=="number"||typeof C=="boolean"){if(U!==C)return D[w]=C,!0}else if(U.equals(C)===!1)return U.copy(C),!0}return!1}function _(E){const x=E.uniforms;let M=0;const D=16;for(let w=0,U=x.length;w<U;w++){const b=Array.isArray(x[w])?x[w]:[x[w]];for(let A=0,R=b.length;A<R;A++){const G=b[A],z=Array.isArray(G.value)?G.value:[G.value];for(let W=0,Y=z.length;W<Y;W++){const H=z[W],K=g(H),k=M%D,pe=k%K.boundary,ge=k+pe;M+=pe,ge!==0&&D-ge<K.storage&&(M+=D-ge),G.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=M,M+=K.storage}}}const C=M%D;return C>0&&(M+=D-C),E.__size=M,E.__cache={},this}function g(E){const x={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(x.boundary=4,x.storage=4):E.isVector2?(x.boundary=8,x.storage=8):E.isVector3||E.isColor?(x.boundary=16,x.storage=12):E.isVector4?(x.boundary=16,x.storage=16):E.isMatrix3?(x.boundary=48,x.storage=48):E.isMatrix4?(x.boundary=64,x.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),x}function m(E){const x=E.target;x.removeEventListener("dispose",m);const M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function p(){for(const E in r)n.deleteBuffer(r[E]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class p_{constructor(e={}){const{canvas:t=id(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const d=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const p=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xt,this.toneMapping=Cn,this.toneMappingExposure=1;const x=this;let M=!1,D=0,C=0,w=null,U=-1,b=null;const A=new _t,R=new _t;let G=null;const z=new We(0);let W=0,Y=t.width,H=t.height,K=1,k=null,pe=null;const ge=new _t(0,0,Y,H),ve=new _t(0,0,Y,H);let ze=!1;const Ye=new yu;let V=!1,ne=!1;const Ae=new ht,ue=new q,Le=new _t,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qe=!1;function Xe(){return w===null?K:1}let S=i;function re(y,L){return t.getContext(y,L)}try{const y={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${va}`),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",j,!1),t.addEventListener("webglcontextcreationerror",ae,!1),S===null){const L="webgl2";if(S=re(L,y),S===null)throw re(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let te,he,X,we,fe,ye,T,v,F,ee,Q,$,Te,le,xe,Ne,ie,_e,He,Ue,Se,De,ke,nt;function P(){te=new A0(S),te.init(),De=new r_(S,te),he=new p0(S,te,e,De),X=new t_(S),we=new M0(S),fe=new k1,ye=new i_(S,te,X,fe,he,De,we),T=new _0(x),v=new x0(x),F=new Pd(S),ke=new f0(S,F),ee=new y0(S,F,we,ke),Q=new E0(S,ee,F,we),He=new b0(S,he,ye),Ne=new m0(fe),$=new z1(x,T,v,te,he,ke,Ne),Te=new f_(x,fe),le=new V1,xe=new J1(te),_e=new h0(x,T,v,X,Q,f,l),ie=new e_(x,Q,he),nt=new d_(S,we,he,X),Ue=new d0(S,te,we),Se=new S0(S,te,we),we.programs=$.programs,x.capabilities=he,x.extensions=te,x.properties=fe,x.renderLists=le,x.shadowMap=ie,x.state=X,x.info=we}P();const se=new u_(x,S);this.xr=se,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){const y=te.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=te.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(y){y!==void 0&&(K=y,this.setSize(Y,H,!1))},this.getSize=function(y){return y.set(Y,H)},this.setSize=function(y,L,O=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=y,H=L,t.width=Math.floor(y*K),t.height=Math.floor(L*K),O===!0&&(t.style.width=y+"px",t.style.height=L+"px"),this.setViewport(0,0,y,L)},this.getDrawingBufferSize=function(y){return y.set(Y*K,H*K).floor()},this.setDrawingBufferSize=function(y,L,O){Y=y,H=L,K=O,t.width=Math.floor(y*O),t.height=Math.floor(L*O),this.setViewport(0,0,y,L)},this.getCurrentViewport=function(y){return y.copy(A)},this.getViewport=function(y){return y.copy(ge)},this.setViewport=function(y,L,O,B){y.isVector4?ge.set(y.x,y.y,y.z,y.w):ge.set(y,L,O,B),X.viewport(A.copy(ge).multiplyScalar(K).round())},this.getScissor=function(y){return y.copy(ve)},this.setScissor=function(y,L,O,B){y.isVector4?ve.set(y.x,y.y,y.z,y.w):ve.set(y,L,O,B),X.scissor(R.copy(ve).multiplyScalar(K).round())},this.getScissorTest=function(){return ze},this.setScissorTest=function(y){X.setScissorTest(ze=y)},this.setOpaqueSort=function(y){k=y},this.setTransparentSort=function(y){pe=y},this.getClearColor=function(y){return y.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor.apply(_e,arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha.apply(_e,arguments)},this.clear=function(y=!0,L=!0,O=!0){let B=0;if(y){let I=!1;if(w!==null){const oe=w.texture.format;I=oe===ba||oe===Ma||oe===Sa}if(I){const oe=w.texture.type,me=oe===_n||oe===ni||oe===cr||oe===ki||oe===Aa||oe===ya,Me=_e.getClearColor(),be=_e.getClearAlpha(),Pe=Me.r,Ie=Me.g,Ce=Me.b;me?(d[0]=Pe,d[1]=Ie,d[2]=Ce,d[3]=be,S.clearBufferuiv(S.COLOR,0,d)):(_[0]=Pe,_[1]=Ie,_[2]=Ce,_[3]=be,S.clearBufferiv(S.COLOR,0,_))}else B|=S.COLOR_BUFFER_BIT}L&&(B|=S.DEPTH_BUFFER_BIT),O&&(B|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),S.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",j,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),le.dispose(),xe.dispose(),fe.dispose(),T.dispose(),v.dispose(),Q.dispose(),ke.dispose(),nt.dispose(),$.dispose(),se.dispose(),se.removeEventListener("sessionstart",jt),se.removeEventListener("sessionend",za),zn.stop()};function Z(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function j(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const y=we.autoReset,L=ie.enabled,O=ie.autoUpdate,B=ie.needsUpdate,I=ie.type;P(),we.autoReset=y,ie.enabled=L,ie.autoUpdate=O,ie.needsUpdate=B,ie.type=I}function ae(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Re(y){const L=y.target;L.removeEventListener("dispose",Re),Ve(L)}function Ve(y){lt(y),fe.remove(y)}function lt(y){const L=fe.get(y).programs;L!==void 0&&(L.forEach(function(O){$.releaseProgram(O)}),y.isShaderMaterial&&$.releaseShaderCache(y))}this.renderBufferDirect=function(y,L,O,B,I,oe){L===null&&(L=Oe);const me=I.isMesh&&I.matrixWorld.determinant()<0,Me=ch(y,L,O,B,I);X.setMaterial(B,me);let be=O.index,Pe=1;if(B.wireframe===!0){if(be=ee.getWireframeAttribute(O),be===void 0)return;Pe=2}const Ie=O.drawRange,Ce=O.attributes.position;let Je=Ie.start*Pe,rt=(Ie.start+Ie.count)*Pe;oe!==null&&(Je=Math.max(Je,oe.start*Pe),rt=Math.min(rt,(oe.start+oe.count)*Pe)),be!==null?(Je=Math.max(Je,0),rt=Math.min(rt,be.count)):Ce!=null&&(Je=Math.max(Je,0),rt=Math.min(rt,Ce.count));const st=rt-Je;if(st<0||st===1/0)return;ke.setup(I,B,Me,O,be);let Pt,Ke=Ue;if(be!==null&&(Pt=F.get(be),Ke=Se,Ke.setIndex(Pt)),I.isMesh)B.wireframe===!0?(X.setLineWidth(B.wireframeLinewidth*Xe()),Ke.setMode(S.LINES)):Ke.setMode(S.TRIANGLES);else if(I.isLine){let Ee=B.linewidth;Ee===void 0&&(Ee=1),X.setLineWidth(Ee*Xe()),I.isLineSegments?Ke.setMode(S.LINES):I.isLineLoop?Ke.setMode(S.LINE_LOOP):Ke.setMode(S.LINE_STRIP)}else I.isPoints?Ke.setMode(S.POINTS):I.isSprite&&Ke.setMode(S.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)Ke.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(te.get("WEBGL_multi_draw"))Ke.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const Ee=I._multiDrawStarts,xt=I._multiDrawCounts,je=I._multiDrawCount,kt=be?F.get(be).bytesPerElement:1,ai=fe.get(B).currentProgram.getUniforms();for(let Lt=0;Lt<je;Lt++)ai.setValue(S,"_gl_DrawID",Lt),Ke.render(Ee[Lt]/kt,xt[Lt])}else if(I.isInstancedMesh)Ke.renderInstances(Je,st,I.count);else if(O.isInstancedBufferGeometry){const Ee=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,xt=Math.min(O.instanceCount,Ee);Ke.renderInstances(Je,st,xt)}else Ke.render(Je,st)};function vt(y,L,O){y.transparent===!0&&y.side===tn&&y.forceSinglePass===!1?(y.side=Rt,y.needsUpdate=!0,Mr(y,L,O),y.side=Ln,y.needsUpdate=!0,Mr(y,L,O),y.side=tn):Mr(y,L,O)}this.compile=function(y,L,O=null){O===null&&(O=y),m=xe.get(O),m.init(L),E.push(m),O.traverseVisible(function(I){I.isLight&&I.layers.test(L.layers)&&(m.pushLight(I),I.castShadow&&m.pushShadow(I))}),y!==O&&y.traverseVisible(function(I){I.isLight&&I.layers.test(L.layers)&&(m.pushLight(I),I.castShadow&&m.pushShadow(I))}),m.setupLights();const B=new Set;return y.traverse(function(I){const oe=I.material;if(oe)if(Array.isArray(oe))for(let me=0;me<oe.length;me++){const Me=oe[me];vt(Me,O,I),B.add(Me)}else vt(oe,O,I),B.add(oe)}),E.pop(),m=null,B},this.compileAsync=function(y,L,O=null){const B=this.compile(y,L,O);return new Promise(I=>{function oe(){if(B.forEach(function(me){fe.get(me).currentProgram.isReady()&&B.delete(me)}),B.size===0){I(y);return}setTimeout(oe,10)}te.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let Ze=null;function an(y){Ze&&Ze(y)}function jt(){zn.stop()}function za(){zn.start()}const zn=new Su;zn.setAnimationLoop(an),typeof self<"u"&&zn.setContext(self),this.setAnimationLoop=function(y){Ze=y,se.setAnimationLoop(y),y===null?zn.stop():zn.start()},se.addEventListener("sessionstart",jt),se.addEventListener("sessionend",za),this.render=function(y,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(L),L=se.getCamera()),y.isScene===!0&&y.onBeforeRender(x,y,L,w),m=xe.get(y,E.length),m.init(L),E.push(m),Ae.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Ye.setFromProjectionMatrix(Ae),ne=this.localClippingEnabled,V=Ne.init(this.clippingPlanes,ne),g=le.get(y,p.length),g.init(),p.push(g),se.enabled===!0&&se.isPresenting===!0){const oe=x.xr.getDepthSensingMesh();oe!==null&&Ps(oe,L,-1/0,x.sortObjects)}Ps(y,L,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(k,pe),qe=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,qe&&_e.addToRenderList(g,y),this.info.render.frame++,V===!0&&Ne.beginShadows();const O=m.state.shadowsArray;ie.render(O,y,L),V===!0&&Ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=g.opaque,I=g.transmissive;if(m.setupLights(),L.isArrayCamera){const oe=L.cameras;if(I.length>0)for(let me=0,Me=oe.length;me<Me;me++){const be=oe[me];Ha(B,I,y,be)}qe&&_e.render(y);for(let me=0,Me=oe.length;me<Me;me++){const be=oe[me];ka(g,y,be,be.viewport)}}else I.length>0&&Ha(B,I,y,L),qe&&_e.render(y),ka(g,y,L);w!==null&&(ye.updateMultisampleRenderTarget(w),ye.updateRenderTargetMipmap(w)),y.isScene===!0&&y.onAfterRender(x,y,L),ke.resetDefaultState(),U=-1,b=null,E.pop(),E.length>0?(m=E[E.length-1],V===!0&&Ne.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?g=p[p.length-1]:g=null};function Ps(y,L,O,B){if(y.visible===!1)return;if(y.layers.test(L.layers)){if(y.isGroup)O=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(L);else if(y.isLight)m.pushLight(y),y.castShadow&&m.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Ye.intersectsSprite(y)){B&&Le.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Ae);const me=Q.update(y),Me=y.material;Me.visible&&g.push(y,me,Me,O,Le.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Ye.intersectsObject(y))){const me=Q.update(y),Me=y.material;if(B&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Le.copy(y.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Le.copy(me.boundingSphere.center)),Le.applyMatrix4(y.matrixWorld).applyMatrix4(Ae)),Array.isArray(Me)){const be=me.groups;for(let Pe=0,Ie=be.length;Pe<Ie;Pe++){const Ce=be[Pe],Je=Me[Ce.materialIndex];Je&&Je.visible&&g.push(y,me,Je,O,Le.z,Ce)}}else Me.visible&&g.push(y,me,Me,O,Le.z,null)}}const oe=y.children;for(let me=0,Me=oe.length;me<Me;me++)Ps(oe[me],L,O,B)}function ka(y,L,O,B){const I=y.opaque,oe=y.transmissive,me=y.transparent;m.setupLightsView(O),V===!0&&Ne.setGlobalState(x.clippingPlanes,O),B&&X.viewport(A.copy(B)),I.length>0&&Sr(I,L,O),oe.length>0&&Sr(oe,L,O),me.length>0&&Sr(me,L,O),X.buffers.depth.setTest(!0),X.buffers.depth.setMask(!0),X.buffers.color.setMask(!0),X.setPolygonOffset(!1)}function Ha(y,L,O,B){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[B.id]===void 0&&(m.state.transmissionRenderTarget[B.id]=new ii(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float")?gr:_n,minFilter:$n,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace}));const oe=m.state.transmissionRenderTarget[B.id],me=B.viewport||A;oe.setSize(me.z,me.w);const Me=x.getRenderTarget();x.setRenderTarget(oe),x.getClearColor(z),W=x.getClearAlpha(),W<1&&x.setClearColor(16777215,.5),x.clear(),qe&&_e.render(O);const be=x.toneMapping;x.toneMapping=Cn;const Pe=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),m.setupLightsView(B),V===!0&&Ne.setGlobalState(x.clippingPlanes,B),Sr(y,O,B),ye.updateMultisampleRenderTarget(oe),ye.updateRenderTargetMipmap(oe),te.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let Ce=0,Je=L.length;Ce<Je;Ce++){const rt=L[Ce],st=rt.object,Pt=rt.geometry,Ke=rt.material,Ee=rt.group;if(Ke.side===tn&&st.layers.test(B.layers)){const xt=Ke.side;Ke.side=Rt,Ke.needsUpdate=!0,Va(st,O,B,Pt,Ke,Ee),Ke.side=xt,Ke.needsUpdate=!0,Ie=!0}}Ie===!0&&(ye.updateMultisampleRenderTarget(oe),ye.updateRenderTargetMipmap(oe))}x.setRenderTarget(Me),x.setClearColor(z,W),Pe!==void 0&&(B.viewport=Pe),x.toneMapping=be}function Sr(y,L,O){const B=L.isScene===!0?L.overrideMaterial:null;for(let I=0,oe=y.length;I<oe;I++){const me=y[I],Me=me.object,be=me.geometry,Pe=B===null?me.material:B,Ie=me.group;Me.layers.test(O.layers)&&Va(Me,L,O,be,Pe,Ie)}}function Va(y,L,O,B,I,oe){y.onBeforeRender(x,L,O,B,I,oe),y.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),I.transparent===!0&&I.side===tn&&I.forceSinglePass===!1?(I.side=Rt,I.needsUpdate=!0,x.renderBufferDirect(O,L,B,I,y,oe),I.side=Ln,I.needsUpdate=!0,x.renderBufferDirect(O,L,B,I,y,oe),I.side=tn):x.renderBufferDirect(O,L,B,I,y,oe),y.onAfterRender(x,L,O,B,I,oe)}function Mr(y,L,O){L.isScene!==!0&&(L=Oe);const B=fe.get(y),I=m.state.lights,oe=m.state.shadowsArray,me=I.state.version,Me=$.getParameters(y,I.state,oe,L,O),be=$.getProgramCacheKey(Me);let Pe=B.programs;B.environment=y.isMeshStandardMaterial?L.environment:null,B.fog=L.fog,B.envMap=(y.isMeshStandardMaterial?v:T).get(y.envMap||B.environment),B.envMapRotation=B.environment!==null&&y.envMap===null?L.environmentRotation:y.envMapRotation,Pe===void 0&&(y.addEventListener("dispose",Re),Pe=new Map,B.programs=Pe);let Ie=Pe.get(be);if(Ie!==void 0){if(B.currentProgram===Ie&&B.lightsStateVersion===me)return Wa(y,Me),Ie}else Me.uniforms=$.getUniforms(y),y.onBeforeCompile(Me,x),Ie=$.acquireProgram(Me,be),Pe.set(be,Ie),B.uniforms=Me.uniforms;const Ce=B.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ce.clippingPlanes=Ne.uniform),Wa(y,Me),B.needsLights=hh(y),B.lightsStateVersion=me,B.needsLights&&(Ce.ambientLightColor.value=I.state.ambient,Ce.lightProbe.value=I.state.probe,Ce.directionalLights.value=I.state.directional,Ce.directionalLightShadows.value=I.state.directionalShadow,Ce.spotLights.value=I.state.spot,Ce.spotLightShadows.value=I.state.spotShadow,Ce.rectAreaLights.value=I.state.rectArea,Ce.ltc_1.value=I.state.rectAreaLTC1,Ce.ltc_2.value=I.state.rectAreaLTC2,Ce.pointLights.value=I.state.point,Ce.pointLightShadows.value=I.state.pointShadow,Ce.hemisphereLights.value=I.state.hemi,Ce.directionalShadowMap.value=I.state.directionalShadowMap,Ce.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Ce.spotShadowMap.value=I.state.spotShadowMap,Ce.spotLightMatrix.value=I.state.spotLightMatrix,Ce.spotLightMap.value=I.state.spotLightMap,Ce.pointShadowMap.value=I.state.pointShadowMap,Ce.pointShadowMatrix.value=I.state.pointShadowMatrix),B.currentProgram=Ie,B.uniformsList=null,Ie}function Ga(y){if(y.uniformsList===null){const L=y.currentProgram.getUniforms();y.uniformsList=ls.seqWithValue(L.seq,y.uniforms)}return y.uniformsList}function Wa(y,L){const O=fe.get(y);O.outputColorSpace=L.outputColorSpace,O.batching=L.batching,O.batchingColor=L.batchingColor,O.instancing=L.instancing,O.instancingColor=L.instancingColor,O.instancingMorph=L.instancingMorph,O.skinning=L.skinning,O.morphTargets=L.morphTargets,O.morphNormals=L.morphNormals,O.morphColors=L.morphColors,O.morphTargetsCount=L.morphTargetsCount,O.numClippingPlanes=L.numClippingPlanes,O.numIntersection=L.numClipIntersection,O.vertexAlphas=L.vertexAlphas,O.vertexTangents=L.vertexTangents,O.toneMapping=L.toneMapping}function ch(y,L,O,B,I){L.isScene!==!0&&(L=Oe),ye.resetTextureUnits();const oe=L.fog,me=B.isMeshStandardMaterial?L.environment:null,Me=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Nn,be=(B.isMeshStandardMaterial?v:T).get(B.envMap||me),Pe=B.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Ie=!!O.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Ce=!!O.morphAttributes.position,Je=!!O.morphAttributes.normal,rt=!!O.morphAttributes.color;let st=Cn;B.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(st=x.toneMapping);const Pt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Ke=Pt!==void 0?Pt.length:0,Ee=fe.get(B),xt=m.state.lights;if(V===!0&&(ne===!0||y!==b)){const Dt=y===b&&B.id===U;Ne.setState(B,y,Dt)}let je=!1;B.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==xt.state.version||Ee.outputColorSpace!==Me||I.isBatchedMesh&&Ee.batching===!1||!I.isBatchedMesh&&Ee.batching===!0||I.isBatchedMesh&&Ee.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&Ee.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&Ee.instancing===!1||!I.isInstancedMesh&&Ee.instancing===!0||I.isSkinnedMesh&&Ee.skinning===!1||!I.isSkinnedMesh&&Ee.skinning===!0||I.isInstancedMesh&&Ee.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&Ee.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&Ee.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&Ee.instancingMorph===!1&&I.morphTexture!==null||Ee.envMap!==be||B.fog===!0&&Ee.fog!==oe||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==Ne.numPlanes||Ee.numIntersection!==Ne.numIntersection)||Ee.vertexAlphas!==Pe||Ee.vertexTangents!==Ie||Ee.morphTargets!==Ce||Ee.morphNormals!==Je||Ee.morphColors!==rt||Ee.toneMapping!==st||Ee.morphTargetsCount!==Ke)&&(je=!0):(je=!0,Ee.__version=B.version);let kt=Ee.currentProgram;je===!0&&(kt=Mr(B,L,I));let ai=!1,Lt=!1,Ls=!1;const ct=kt.getUniforms(),xn=Ee.uniforms;if(X.useProgram(kt.program)&&(ai=!0,Lt=!0,Ls=!0),B.id!==U&&(U=B.id,Lt=!0),ai||b!==y){ct.setValue(S,"projectionMatrix",y.projectionMatrix),ct.setValue(S,"viewMatrix",y.matrixWorldInverse);const Dt=ct.map.cameraPosition;Dt!==void 0&&Dt.setValue(S,ue.setFromMatrixPosition(y.matrixWorld)),he.logarithmicDepthBuffer&&ct.setValue(S,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&ct.setValue(S,"isOrthographic",y.isOrthographicCamera===!0),b!==y&&(b=y,Lt=!0,Ls=!0)}if(I.isSkinnedMesh){ct.setOptional(S,I,"bindMatrix"),ct.setOptional(S,I,"bindMatrixInverse");const Dt=I.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),ct.setValue(S,"boneTexture",Dt.boneTexture,ye))}I.isBatchedMesh&&(ct.setOptional(S,I,"batchingTexture"),ct.setValue(S,"batchingTexture",I._matricesTexture,ye),ct.setOptional(S,I,"batchingIdTexture"),ct.setValue(S,"batchingIdTexture",I._indirectTexture,ye),ct.setOptional(S,I,"batchingColorTexture"),I._colorsTexture!==null&&ct.setValue(S,"batchingColorTexture",I._colorsTexture,ye));const qs=O.morphAttributes;if((qs.position!==void 0||qs.normal!==void 0||qs.color!==void 0)&&He.update(I,O,kt),(Lt||Ee.receiveShadow!==I.receiveShadow)&&(Ee.receiveShadow=I.receiveShadow,ct.setValue(S,"receiveShadow",I.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(xn.envMap.value=be,xn.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&L.environment!==null&&(xn.envMapIntensity.value=L.environmentIntensity),Lt&&(ct.setValue(S,"toneMappingExposure",x.toneMappingExposure),Ee.needsLights&&uh(xn,Ls),oe&&B.fog===!0&&Te.refreshFogUniforms(xn,oe),Te.refreshMaterialUniforms(xn,B,K,H,m.state.transmissionRenderTarget[y.id]),ls.upload(S,Ga(Ee),xn,ye)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(ls.upload(S,Ga(Ee),xn,ye),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&ct.setValue(S,"center",I.center),ct.setValue(S,"modelViewMatrix",I.modelViewMatrix),ct.setValue(S,"normalMatrix",I.normalMatrix),ct.setValue(S,"modelMatrix",I.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Dt=B.uniformsGroups;for(let Is=0,fh=Dt.length;Is<fh;Is++){const Xa=Dt[Is];nt.update(Xa,kt),nt.bind(Xa,kt)}}return kt}function uh(y,L){y.ambientLightColor.needsUpdate=L,y.lightProbe.needsUpdate=L,y.directionalLights.needsUpdate=L,y.directionalLightShadows.needsUpdate=L,y.pointLights.needsUpdate=L,y.pointLightShadows.needsUpdate=L,y.spotLights.needsUpdate=L,y.spotLightShadows.needsUpdate=L,y.rectAreaLights.needsUpdate=L,y.hemisphereLights.needsUpdate=L}function hh(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(y,L,O){fe.get(y.texture).__webglTexture=L,fe.get(y.depthTexture).__webglTexture=O;const B=fe.get(y);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=O===void 0,B.__autoAllocateDepthBuffer||te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,L){const O=fe.get(y);O.__webglFramebuffer=L,O.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(y,L=0,O=0){w=y,D=L,C=O;let B=!0,I=null,oe=!1,me=!1;if(y){const be=fe.get(y);be.__useDefaultFramebuffer!==void 0?(X.bindFramebuffer(S.FRAMEBUFFER,null),B=!1):be.__webglFramebuffer===void 0?ye.setupRenderTarget(y):be.__hasExternalTextures&&ye.rebindTextures(y,fe.get(y.texture).__webglTexture,fe.get(y.depthTexture).__webglTexture);const Pe=y.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(me=!0);const Ie=fe.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ie[L])?I=Ie[L][O]:I=Ie[L],oe=!0):y.samples>0&&ye.useMultisampledRTT(y)===!1?I=fe.get(y).__webglMultisampledFramebuffer:Array.isArray(Ie)?I=Ie[O]:I=Ie,A.copy(y.viewport),R.copy(y.scissor),G=y.scissorTest}else A.copy(ge).multiplyScalar(K).floor(),R.copy(ve).multiplyScalar(K).floor(),G=ze;if(X.bindFramebuffer(S.FRAMEBUFFER,I)&&B&&X.drawBuffers(y,I),X.viewport(A),X.scissor(R),X.setScissorTest(G),oe){const be=fe.get(y.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+L,be.__webglTexture,O)}else if(me){const be=fe.get(y.texture),Pe=L||0;S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,be.__webglTexture,O||0,Pe)}U=-1},this.readRenderTargetPixels=function(y,L,O,B,I,oe,me){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=fe.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&me!==void 0&&(Me=Me[me]),Me){X.bindFramebuffer(S.FRAMEBUFFER,Me);try{const be=y.texture,Pe=be.format,Ie=be.type;if(!he.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!he.textureTypeReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=y.width-B&&O>=0&&O<=y.height-I&&S.readPixels(L,O,B,I,De.convert(Pe),De.convert(Ie),oe)}finally{const be=w!==null?fe.get(w).__webglFramebuffer:null;X.bindFramebuffer(S.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(y,L,O,B,I,oe,me){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=fe.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&me!==void 0&&(Me=Me[me]),Me){X.bindFramebuffer(S.FRAMEBUFFER,Me);try{const be=y.texture,Pe=be.format,Ie=be.type;if(!he.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!he.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=y.width-B&&O>=0&&O<=y.height-I){const Ce=S.createBuffer();S.bindBuffer(S.PIXEL_PACK_BUFFER,Ce),S.bufferData(S.PIXEL_PACK_BUFFER,oe.byteLength,S.STREAM_READ),S.readPixels(L,O,B,I,De.convert(Pe),De.convert(Ie),0),S.flush();const Je=S.fenceSync(S.SYNC_GPU_COMMANDS_COMPLETE,0);await rd(S,Je,4);try{S.bindBuffer(S.PIXEL_PACK_BUFFER,Ce),S.getBufferSubData(S.PIXEL_PACK_BUFFER,0,oe)}finally{S.deleteBuffer(Ce),S.deleteSync(Je)}return oe}}finally{const be=w!==null?fe.get(w).__webglFramebuffer:null;X.bindFramebuffer(S.FRAMEBUFFER,be)}}},this.copyFramebufferToTexture=function(y,L=null,O=0){y.isTexture!==!0&&(rr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,y=arguments[1]);const B=Math.pow(2,-O),I=Math.floor(y.image.width*B),oe=Math.floor(y.image.height*B),me=L!==null?L.x:0,Me=L!==null?L.y:0;ye.setTexture2D(y,0),S.copyTexSubImage2D(S.TEXTURE_2D,O,0,0,me,Me,I,oe),X.unbindTexture()},this.copyTextureToTexture=function(y,L,O=null,B=null,I=0){y.isTexture!==!0&&(rr("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,y=arguments[1],L=arguments[2],I=arguments[3]||0,O=null);let oe,me,Me,be,Pe,Ie;O!==null?(oe=O.max.x-O.min.x,me=O.max.y-O.min.y,Me=O.min.x,be=O.min.y):(oe=y.image.width,me=y.image.height,Me=0,be=0),B!==null?(Pe=B.x,Ie=B.y):(Pe=0,Ie=0);const Ce=De.convert(L.format),Je=De.convert(L.type);ye.setTexture2D(L,0),S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,L.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,L.unpackAlignment);const rt=S.getParameter(S.UNPACK_ROW_LENGTH),st=S.getParameter(S.UNPACK_IMAGE_HEIGHT),Pt=S.getParameter(S.UNPACK_SKIP_PIXELS),Ke=S.getParameter(S.UNPACK_SKIP_ROWS),Ee=S.getParameter(S.UNPACK_SKIP_IMAGES),xt=y.isCompressedTexture?y.mipmaps[I]:y.image;S.pixelStorei(S.UNPACK_ROW_LENGTH,xt.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,xt.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,Me),S.pixelStorei(S.UNPACK_SKIP_ROWS,be),y.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,I,Pe,Ie,oe,me,Ce,Je,xt.data):y.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,I,Pe,Ie,xt.width,xt.height,Ce,xt.data):S.texSubImage2D(S.TEXTURE_2D,I,Pe,Ie,oe,me,Ce,Je,xt),S.pixelStorei(S.UNPACK_ROW_LENGTH,rt),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,st),S.pixelStorei(S.UNPACK_SKIP_PIXELS,Pt),S.pixelStorei(S.UNPACK_SKIP_ROWS,Ke),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Ee),I===0&&L.generateMipmaps&&S.generateMipmap(S.TEXTURE_2D),X.unbindTexture()},this.copyTextureToTexture3D=function(y,L,O=null,B=null,I=0){y.isTexture!==!0&&(rr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,B=arguments[1]||null,y=arguments[2],L=arguments[3],I=arguments[4]||0);let oe,me,Me,be,Pe,Ie,Ce,Je,rt;const st=y.isCompressedTexture?y.mipmaps[I]:y.image;O!==null?(oe=O.max.x-O.min.x,me=O.max.y-O.min.y,Me=O.max.z-O.min.z,be=O.min.x,Pe=O.min.y,Ie=O.min.z):(oe=st.width,me=st.height,Me=st.depth,be=0,Pe=0,Ie=0),B!==null?(Ce=B.x,Je=B.y,rt=B.z):(Ce=0,Je=0,rt=0);const Pt=De.convert(L.format),Ke=De.convert(L.type);let Ee;if(L.isData3DTexture)ye.setTexture3D(L,0),Ee=S.TEXTURE_3D;else if(L.isDataArrayTexture||L.isCompressedArrayTexture)ye.setTexture2DArray(L,0),Ee=S.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,L.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,L.unpackAlignment);const xt=S.getParameter(S.UNPACK_ROW_LENGTH),je=S.getParameter(S.UNPACK_IMAGE_HEIGHT),kt=S.getParameter(S.UNPACK_SKIP_PIXELS),ai=S.getParameter(S.UNPACK_SKIP_ROWS),Lt=S.getParameter(S.UNPACK_SKIP_IMAGES);S.pixelStorei(S.UNPACK_ROW_LENGTH,st.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,st.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,be),S.pixelStorei(S.UNPACK_SKIP_ROWS,Pe),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Ie),y.isDataTexture||y.isData3DTexture?S.texSubImage3D(Ee,I,Ce,Je,rt,oe,me,Me,Pt,Ke,st.data):L.isCompressedArrayTexture?S.compressedTexSubImage3D(Ee,I,Ce,Je,rt,oe,me,Me,Pt,st.data):S.texSubImage3D(Ee,I,Ce,Je,rt,oe,me,Me,Pt,Ke,st),S.pixelStorei(S.UNPACK_ROW_LENGTH,xt),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,je),S.pixelStorei(S.UNPACK_SKIP_PIXELS,kt),S.pixelStorei(S.UNPACK_SKIP_ROWS,ai),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Lt),I===0&&L.generateMipmaps&&S.generateMipmap(Ee),X.unbindTexture()},this.initRenderTarget=function(y){fe.get(y).__webglFramebuffer===void 0&&ye.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?ye.setTextureCube(y,0):y.isData3DTexture?ye.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?ye.setTexture2DArray(y,0):ye.setTexture2D(y,0),X.unbindTexture()},this.resetState=function(){D=0,C=0,w=null,X.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ea?"display-p3":"srgb",t.unpackColorSpace=$e.workingColorSpace===Ts?"display-p3":"srgb"}}class m_ extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sn,this.environmentIntensity=1,this.environmentRotation=new sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class __ extends bt{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class on{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],f=i[r+1]-u,d=(o-u)/f;return(r+d)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new de:new q);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new q,r=[],s=[],o=[],a=new q,l=new ht;for(let d=0;d<=e;d++){const _=d/e;r[d]=this.getTangentAt(_,new q)}s[0]=new q,o[0]=new q;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(Mt(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,_))}o[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(Mt(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(d=-d);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],d*_)),o[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ca extends on{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new de){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class g_ extends Ca{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ra(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,r(o,a,f,d)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const Zr=new q,uo=new Ra,ho=new Ra,fo=new Ra;class v_ extends on{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new q){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(Zr.subVectors(r[0],r[1]).add(r[0]),c=Zr);const h=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Zr.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Zr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(h),d),g=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);g<1e-4&&(g=1),_<1e-4&&(_=g),m<1e-4&&(m=g),uo.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,_,g,m),ho.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,_,g,m),fo.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,_,g,m)}else this.curveType==="catmullrom"&&(uo.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),ho.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),fo.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return i.set(uo.calc(l),ho.calc(l),fo.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new q().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Ql(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,l=n*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*n+t}function x_(n,e){const t=1-n;return t*t*e}function A_(n,e){return 2*(1-n)*n*e}function y_(n,e){return n*n*e}function sr(n,e,t,i){return x_(n,e)+A_(n,t)+y_(n,i)}function S_(n,e){const t=1-n;return t*t*t*e}function M_(n,e){const t=1-n;return 3*t*t*n*e}function b_(n,e){return 3*(1-n)*n*n*e}function E_(n,e){return n*n*n*e}function or(n,e,t,i,r){return S_(n,e)+M_(n,t)+b_(n,i)+E_(n,r)}class Ru extends on{constructor(e=new de,t=new de,i=new de,r=new de){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new de){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(or(e,r.x,s.x,o.x,a.x),or(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class T_ extends on{constructor(e=new q,t=new q,i=new q,r=new q){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new q){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(or(e,r.x,s.x,o.x,a.x),or(e,r.y,s.y,o.y,a.y),or(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Pu extends on{constructor(e=new de,t=new de){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new de){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new de){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class w_ extends on{constructor(e=new q,t=new q){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new q){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new q){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Lu extends on{constructor(e=new de,t=new de,i=new de){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new de){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(sr(e,r.x,s.x,o.x),sr(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class C_ extends on{constructor(e=new q,t=new q,i=new q){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new q){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(sr(e,r.x,s.x,o.x),sr(e,r.y,s.y,o.y),sr(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class qu extends on{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new de){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(Ql(a,l.x,c.x,u.x,h.x),Ql(a,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new de().fromArray(r))}return this}}var ea=Object.freeze({__proto__:null,ArcCurve:g_,CatmullRomCurve3:v_,CubicBezierCurve:Ru,CubicBezierCurve3:T_,EllipseCurve:Ca,LineCurve:Pu,LineCurve3:w_,QuadraticBezierCurve:Lu,QuadraticBezierCurve3:C_,SplineCurve:qu});class R_ extends on{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ea[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new ea[r.type]().fromJSON(r))}return this}}class ta extends R_{constructor(e){super(),this.type="Path",this.currentPoint=new de,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Pu(this.currentPoint.clone(),new de(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new Lu(this.currentPoint.clone(),new de(e,t),new de(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){const a=new Ru(this.currentPoint.clone(),new de(e,t),new de(i,r),new de(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new qu(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,r,s,o,a,l),this}absellipse(e,t,i,r,s,o,a,l){const c=new Ca(e,t,i,r,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Pa extends vn{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],o=[],a=[],l=[],c=new q,u=new de;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const d=i+h/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new Bt(o,3)),this.setAttribute("normal",new Bt(a,3)),this.setAttribute("uv",new Bt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pa(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class cs extends ta{constructor(e){super(e),this.uuid=Xi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new ta().fromJSON(r))}return this}}const P_={triangulate:function(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=Iu(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,h,f,d;if(i&&(s=D_(n,e,s,t)),n.length>80*t){a=c=n[0],l=u=n[1];for(let _=t;_<r;_+=t)h=n[_],f=n[_+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);d=Math.max(c-a,u-l),d=d!==0?32767/d:0}return hr(s,o,t,a,l,d,0),o}};function Iu(n,e,t,i,r){let s,o;if(r===X_(n,e,t,i)>0)for(s=e;s<t;s+=i)o=ec(s,n[s],n[s+1],o);else for(s=t-i;s>=e;s-=i)o=ec(s,n[s],n[s+1],o);return o&&Cs(o,o.next)&&(dr(o),o=o.next),o}function ri(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Cs(t,t.next)||it(t.prev,t,t.next)===0)){if(dr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function hr(n,e,t,i,r,s,o){if(!n)return;!o&&s&&z_(n,i,r,s);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,s?q_(n,i,r,s):L_(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),dr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=I_(ri(n),e,t),hr(n,e,t,i,r,s,2)):o===2&&U_(n,e,t,i,r,s):hr(ri(n),e,t,i,r,s,1);break}}}function L_(n){const e=n.prev,t=n,i=n.next;if(it(e,t,i)>=0)return!1;const r=e.x,s=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=r<s?r<o?r:o:s<o?s:o,h=a<l?a<c?a:c:l<c?l:c,f=r>s?r>o?r:o:s>o?s:o,d=a>l?a>c?a:c:l>c?l:c;let _=i.next;for(;_!==e;){if(_.x>=u&&_.x<=f&&_.y>=h&&_.y<=d&&Pi(r,a,s,l,o,c,_.x,_.y)&&it(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function q_(n,e,t,i){const r=n.prev,s=n,o=n.next;if(it(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,h=s.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,_=u<h?u<f?u:f:h<f?h:f,g=a>l?a>c?a:c:l>c?l:c,m=u>h?u>f?u:f:h>f?h:f,p=na(d,_,e,t,i),E=na(g,m,e,t,i);let x=n.prevZ,M=n.nextZ;for(;x&&x.z>=p&&M&&M.z<=E;){if(x.x>=d&&x.x<=g&&x.y>=_&&x.y<=m&&x!==r&&x!==o&&Pi(a,u,l,h,c,f,x.x,x.y)&&it(x.prev,x,x.next)>=0||(x=x.prevZ,M.x>=d&&M.x<=g&&M.y>=_&&M.y<=m&&M!==r&&M!==o&&Pi(a,u,l,h,c,f,M.x,M.y)&&it(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;x&&x.z>=p;){if(x.x>=d&&x.x<=g&&x.y>=_&&x.y<=m&&x!==r&&x!==o&&Pi(a,u,l,h,c,f,x.x,x.y)&&it(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;M&&M.z<=E;){if(M.x>=d&&M.x<=g&&M.y>=_&&M.y<=m&&M!==r&&M!==o&&Pi(a,u,l,h,c,f,M.x,M.y)&&it(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function I_(n,e,t){let i=n;do{const r=i.prev,s=i.next.next;!Cs(r,s)&&Uu(r,i,i.next,s)&&fr(r,s)&&fr(s,r)&&(e.push(r.i/t|0),e.push(i.i/t|0),e.push(s.i/t|0),dr(i),dr(i.next),i=n=s),i=i.next}while(i!==n);return ri(i)}function U_(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&V_(o,a)){let l=Du(o,a);o=ri(o,o.next),l=ri(l,l.next),hr(o,e,t,i,r,s,0),hr(l,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function D_(n,e,t,i){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:n.length,c=Iu(n,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push(H_(c));for(r.sort(N_),s=0;s<r.length;s++)t=O_(r[s],t);return t}function N_(n,e){return n.x-e.x}function O_(n,e){const t=F_(n,e);if(!t)return e;const i=Du(t,n);return ri(i,i.next),ri(t,t.next)}function F_(n,e){let t=e,i=-1/0,r;const s=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=s&&f>i&&(i=f,r=t.x<t.next.x?t:t.next,f===s))return r}t=t.next}while(t!==e);if(!r)return null;const a=r,l=r.x,c=r.y;let u=1/0,h;t=r;do s>=t.x&&t.x>=l&&s!==t.x&&Pi(o<c?s:i,o,l,c,o<c?i:s,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(s-t.x),fr(t,n)&&(h<u||h===u&&(t.x>r.x||t.x===r.x&&B_(r,t)))&&(r=t,u=h)),t=t.next;while(t!==a);return r}function B_(n,e){return it(n.prev,n,e.prev)<0&&it(e.next,n,n.next)<0}function z_(n,e,t,i){let r=n;do r.z===0&&(r.z=na(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,k_(r)}function k_(n){let e,t,i,r,s,o,a,l,c=1;do{for(t=n,n=null,s=null,o=0;t;){for(o++,i=t,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(r=t,t=t.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;t=i}s.nextZ=null,c*=2}while(o>1);return n}function na(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function H_(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Pi(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function V_(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!G_(n,e)&&(fr(n,e)&&fr(e,n)&&W_(n,e)&&(it(n.prev,n,e.prev)||it(n,e.prev,e))||Cs(n,e)&&it(n.prev,n,n.next)>0&&it(e.prev,e,e.next)>0)}function it(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Cs(n,e){return n.x===e.x&&n.y===e.y}function Uu(n,e,t,i){const r=Kr(it(n,e,t)),s=Kr(it(n,e,i)),o=Kr(it(t,i,n)),a=Kr(it(t,i,e));return!!(r!==s&&o!==a||r===0&&Jr(n,t,e)||s===0&&Jr(n,i,e)||o===0&&Jr(t,n,i)||a===0&&Jr(t,e,i))}function Jr(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Kr(n){return n>0?1:n<0?-1:0}function G_(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Uu(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function fr(n,e){return it(n.prev,n,n.next)<0?it(n,e,n.next)>=0&&it(n,n.prev,e)>=0:it(n,e,n.prev)<0||it(n,n.next,e)<0}function W_(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Du(n,e){const t=new ia(n.i,n.x,n.y),i=new ia(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function ec(n,e,t,i){const r=new ia(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function dr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function ia(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function X_(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class Ni{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return Ni.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];tc(e),nc(i,e);let o=e.length;t.forEach(tc);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,nc(i,t[l]);const a=P_.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function tc(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function nc(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class La extends vn{constructor(e=new cs([new de(.5,.5),new de(-.5,.5),new de(-.5,-.5),new de(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new Bt(r,3)),this.setAttribute("uv",new Bt(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:d-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,E=t.UVGenerator!==void 0?t.UVGenerator:Y_;let x,M=!1,D,C,w,U;p&&(x=p.getSpacedPoints(u),M=!0,f=!1,D=p.computeFrenetFrames(u,!1),C=new q,w=new q,U=new q),f||(m=0,d=0,_=0,g=0);const b=a.extractPoints(c);let A=b.shape;const R=b.holes;if(!Ni.isClockWise(A)){A=A.reverse();for(let S=0,re=R.length;S<re;S++){const te=R[S];Ni.isClockWise(te)&&(R[S]=te.reverse())}}const z=Ni.triangulateShape(A,R),W=A;for(let S=0,re=R.length;S<re;S++){const te=R[S];A=A.concat(te)}function Y(S,re,te){return re||console.error("THREE.ExtrudeGeometry: vec does not exist"),S.clone().addScaledVector(re,te)}const H=A.length,K=z.length;function k(S,re,te){let he,X,we;const fe=S.x-re.x,ye=S.y-re.y,T=te.x-S.x,v=te.y-S.y,F=fe*fe+ye*ye,ee=fe*v-ye*T;if(Math.abs(ee)>Number.EPSILON){const Q=Math.sqrt(F),$=Math.sqrt(T*T+v*v),Te=re.x-ye/Q,le=re.y+fe/Q,xe=te.x-v/$,Ne=te.y+T/$,ie=((xe-Te)*v-(Ne-le)*T)/(fe*v-ye*T);he=Te+fe*ie-S.x,X=le+ye*ie-S.y;const _e=he*he+X*X;if(_e<=2)return new de(he,X);we=Math.sqrt(_e/2)}else{let Q=!1;fe>Number.EPSILON?T>Number.EPSILON&&(Q=!0):fe<-Number.EPSILON?T<-Number.EPSILON&&(Q=!0):Math.sign(ye)===Math.sign(v)&&(Q=!0),Q?(he=-ye,X=fe,we=Math.sqrt(F)):(he=fe,X=ye,we=Math.sqrt(F/2))}return new de(he/we,X/we)}const pe=[];for(let S=0,re=W.length,te=re-1,he=S+1;S<re;S++,te++,he++)te===re&&(te=0),he===re&&(he=0),pe[S]=k(W[S],W[te],W[he]);const ge=[];let ve,ze=pe.concat();for(let S=0,re=R.length;S<re;S++){const te=R[S];ve=[];for(let he=0,X=te.length,we=X-1,fe=he+1;he<X;he++,we++,fe++)we===X&&(we=0),fe===X&&(fe=0),ve[he]=k(te[he],te[we],te[fe]);ge.push(ve),ze=ze.concat(ve)}for(let S=0;S<m;S++){const re=S/m,te=d*Math.cos(re*Math.PI/2),he=_*Math.sin(re*Math.PI/2)+g;for(let X=0,we=W.length;X<we;X++){const fe=Y(W[X],pe[X],he);ue(fe.x,fe.y,-te)}for(let X=0,we=R.length;X<we;X++){const fe=R[X];ve=ge[X];for(let ye=0,T=fe.length;ye<T;ye++){const v=Y(fe[ye],ve[ye],he);ue(v.x,v.y,-te)}}}const Ye=_+g;for(let S=0;S<H;S++){const re=f?Y(A[S],ze[S],Ye):A[S];M?(w.copy(D.normals[0]).multiplyScalar(re.x),C.copy(D.binormals[0]).multiplyScalar(re.y),U.copy(x[0]).add(w).add(C),ue(U.x,U.y,U.z)):ue(re.x,re.y,0)}for(let S=1;S<=u;S++)for(let re=0;re<H;re++){const te=f?Y(A[re],ze[re],Ye):A[re];M?(w.copy(D.normals[S]).multiplyScalar(te.x),C.copy(D.binormals[S]).multiplyScalar(te.y),U.copy(x[S]).add(w).add(C),ue(U.x,U.y,U.z)):ue(te.x,te.y,h/u*S)}for(let S=m-1;S>=0;S--){const re=S/m,te=d*Math.cos(re*Math.PI/2),he=_*Math.sin(re*Math.PI/2)+g;for(let X=0,we=W.length;X<we;X++){const fe=Y(W[X],pe[X],he);ue(fe.x,fe.y,h+te)}for(let X=0,we=R.length;X<we;X++){const fe=R[X];ve=ge[X];for(let ye=0,T=fe.length;ye<T;ye++){const v=Y(fe[ye],ve[ye],he);M?ue(v.x,v.y+x[u-1].y,x[u-1].x+te):ue(v.x,v.y,h+te)}}}V(),ne();function V(){const S=r.length/3;if(f){let re=0,te=H*re;for(let he=0;he<K;he++){const X=z[he];Le(X[2]+te,X[1]+te,X[0]+te)}re=u+m*2,te=H*re;for(let he=0;he<K;he++){const X=z[he];Le(X[0]+te,X[1]+te,X[2]+te)}}else{for(let re=0;re<K;re++){const te=z[re];Le(te[2],te[1],te[0])}for(let re=0;re<K;re++){const te=z[re];Le(te[0]+H*u,te[1]+H*u,te[2]+H*u)}}i.addGroup(S,r.length/3-S,0)}function ne(){const S=r.length/3;let re=0;Ae(W,re),re+=W.length;for(let te=0,he=R.length;te<he;te++){const X=R[te];Ae(X,re),re+=X.length}i.addGroup(S,r.length/3-S,1)}function Ae(S,re){let te=S.length;for(;--te>=0;){const he=te;let X=te-1;X<0&&(X=S.length-1);for(let we=0,fe=u+m*2;we<fe;we++){const ye=H*we,T=H*(we+1),v=re+he+ye,F=re+X+ye,ee=re+X+T,Q=re+he+T;Oe(v,F,ee,Q)}}}function ue(S,re,te){l.push(S),l.push(re),l.push(te)}function Le(S,re,te){qe(S),qe(re),qe(te);const he=r.length/3,X=E.generateTopUV(i,r,he-3,he-2,he-1);Xe(X[0]),Xe(X[1]),Xe(X[2])}function Oe(S,re,te,he){qe(S),qe(re),qe(he),qe(re),qe(te),qe(he);const X=r.length/3,we=E.generateSideWallUV(i,r,X-6,X-3,X-2,X-1);Xe(we[0]),Xe(we[1]),Xe(we[3]),Xe(we[1]),Xe(we[2]),Xe(we[3])}function qe(S){r.push(l[S*3+0]),r.push(l[S*3+1]),r.push(l[S*3+2])}function Xe(S){s.push(S.x),s.push(S.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Z_(t,i,e)}static fromJSON(e,t){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new ea[r.type]().fromJSON(r)),new La(i,e.options)}}const Y_={generateTopUV:function(n,e,t,i,r){const s=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new de(s,o),new de(a,l),new de(c,u)]},generateSideWallUV:function(n,e,t,i,r,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],h=e[i*3+2],f=e[r*3],d=e[r*3+1],_=e[r*3+2],g=e[s*3],m=e[s*3+1],p=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new de(o,1-l),new de(c,1-h),new de(f,1-_),new de(g,1-p)]:[new de(a,1-l),new de(u,1-h),new de(d,1-_),new de(m,1-p)]}};function Z_(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Nu extends Ar{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cu,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const ic={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class J_{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],_=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null}}}const K_=new J_;class qa{constructor(e){this.manager=e!==void 0?e:K_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}qa.DEFAULT_MATERIAL_NAME="__DEFAULT";class j_ extends qa{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=ic.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=ur("img");function l(){u(),ic.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class $_ extends qa{constructor(e){super(e)}load(e,t,i,r){const s=new bt,o=new j_(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Ou extends Tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Q_ extends Ou{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new We(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}class eg extends Ou{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class tg{constructor(){this.type="ShapePath",this.color=new We,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new ta,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,r){return this.currentPath.quadraticCurveTo(e,t,i,r),this}bezierCurveTo(e,t,i,r,s,o){return this.currentPath.bezierCurveTo(e,t,i,r,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(p){const E=[];for(let x=0,M=p.length;x<M;x++){const D=p[x],C=new cs;C.curves=D.curves,E.push(C)}return E}function i(p,E){const x=E.length;let M=!1;for(let D=x-1,C=0;C<x;D=C++){let w=E[D],U=E[C],b=U.x-w.x,A=U.y-w.y;if(Math.abs(A)>Number.EPSILON){if(A<0&&(w=E[C],b=-b,U=E[D],A=-A),p.y<w.y||p.y>U.y)continue;if(p.y===w.y){if(p.x===w.x)return!0}else{const R=A*(p.x-w.x)-b*(p.y-w.y);if(R===0)return!0;if(R<0)continue;M=!M}}else{if(p.y!==w.y)continue;if(U.x<=p.x&&p.x<=w.x||w.x<=p.x&&p.x<=U.x)return!0}}return M}const r=Ni.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const c=[];if(s.length===1)return a=s[0],l=new cs,l.curves=a.curves,c.push(l),c;let u=!r(s[0].getPoints());u=e?!u:u;const h=[],f=[];let d=[],_=0,g;f[_]=void 0,d[_]=[];for(let p=0,E=s.length;p<E;p++)a=s[p],g=a.getPoints(),o=r(g),o=e?!o:o,o?(!u&&f[_]&&_++,f[_]={s:new cs,p:g},f[_].s.curves=a.curves,u&&_++,d[_]=[]):d[_].push({h:a,p:g[0]});if(!f[0])return t(s);if(f.length>1){let p=!1,E=0;for(let x=0,M=f.length;x<M;x++)h[x]=[];for(let x=0,M=f.length;x<M;x++){const D=d[x];for(let C=0;C<D.length;C++){const w=D[C];let U=!0;for(let b=0;b<f.length;b++)i(w.p,f[b].p)&&(x!==b&&E++,U?(U=!1,h[b].push(w)):p=!0);U&&h[x].push(w)}}E>0&&p===!1&&(d=h)}let m;for(let p=0,E=f.length;p<E;p++){l=f[p].s,c.push(l),m=d[p];for(let x=0,M=m.length;x<M;x++)l.holes.push(m[x].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:va}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=va);function Fu(){const n=window.innerWidth/window.innerHeight;if(Math.random()>2){const t=new Ut(10,n,.1,1e3);return t.position.z=6,t.position.y=6,t.rotation.x=-.75,t}if(Math.random()>2){const i=new Mu(1*n/-2,1*n/2,.5,-.5,.1,1e3);return i.position.z=3,i.position.y=3,i.rotation.x=-.7,i}const e=new Ut(25,n,.1,1e3);return e.position.z=2,e.position.y=2,e.rotation.x=-.7,e}var ra=function(n,e){return ra=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])},ra(n,e)};function On(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");ra(n,e);function t(){this.constructor=n}n.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}function ng(n,e,t,i){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(u){try{c(i.next(u))}catch(h){o(h)}}function l(u){try{c(i.throw(u))}catch(h){o(h)}}function c(u){u.done?s(u.value):r(u.value).then(a,l)}c((i=i.apply(n,e||[])).next())})}function Bu(n,e){var t={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},i,r,s,o=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return o.next=a(0),o.throw=a(1),o.return=a(2),typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(c){return function(u){return l([c,u])}}function l(c){if(i)throw new TypeError("Generator is already executing.");for(;o&&(o=0,c[0]&&(t=0)),t;)try{if(i=1,r&&(s=c[0]&2?r.return:c[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,c[1])).done)return s;switch(r=0,s&&(c=[c[0]&2,s.value]),c[0]){case 0:case 1:s=c;break;case 4:return t.label++,{value:c[1],done:!1};case 5:t.label++,r=c[1],c=[0];continue;case 7:c=t.ops.pop(),t.trys.pop();continue;default:if(s=t.trys,!(s=s.length>0&&s[s.length-1])&&(c[0]===6||c[0]===2)){t=0;continue}if(c[0]===3&&(!s||c[1]>s[0]&&c[1]<s[3])){t.label=c[1];break}if(c[0]===6&&t.label<s[1]){t.label=s[1],s=c;break}if(s&&t.label<s[2]){t.label=s[2],t.ops.push(c);break}s[2]&&t.ops.pop(),t.trys.pop();continue}c=e.call(n,t)}catch(u){c=[6,u],r=0}finally{i=s=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function Gi(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function gs(n,e){var t=typeof Symbol=="function"&&n[Symbol.iterator];if(!t)return n;var i=t.call(n),r,s=[],o;try{for(;(e===void 0||e-- >0)&&!(r=i.next()).done;)s.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(t=i.return)&&t.call(i)}finally{if(o)throw o.error}}return s}function vs(n,e,t){if(t||arguments.length===2)for(var i=0,r=e.length,s;i<r;i++)(s||!(i in e))&&(s||(s=Array.prototype.slice.call(e,0,i)),s[i]=e[i]);return n.concat(s||Array.prototype.slice.call(e))}function Oi(n){return this instanceof Oi?(this.v=n,this):new Oi(n)}function ig(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=t.apply(n,e||[]),r,s=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",o),r[Symbol.asyncIterator]=function(){return this},r;function o(d){return function(_){return Promise.resolve(_).then(d,h)}}function a(d,_){i[d]&&(r[d]=function(g){return new Promise(function(m,p){s.push([d,g,m,p])>1||l(d,g)})},_&&(r[d]=_(r[d])))}function l(d,_){try{c(i[d](_))}catch(g){f(s[0][3],g)}}function c(d){d.value instanceof Oi?Promise.resolve(d.value.v).then(u,h):f(s[0][2],d)}function u(d){l("next",d)}function h(d){l("throw",d)}function f(d,_){d(_),s.shift(),s.length&&l(s[0][0],s[0][1])}}function rg(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof Gi=="function"?Gi(n):n[Symbol.iterator](),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(s){t[s]=n[s]&&function(o){return new Promise(function(a,l){o=n[s](o),r(a,l,o.done,o.value)})}}function r(s,o,a,l){Promise.resolve(l).then(function(c){s({value:c,done:a})},o)}}function At(n){return typeof n=="function"}function zu(n){var e=function(i){Error.call(i),i.stack=new Error().stack},t=n(e);return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var po=zu(function(n){return function(t){n(this),this.message=t?t.length+` errors occurred during unsubscription:
`+t.map(function(i,r){return r+1+") "+i.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=t}});function xs(n,e){if(n){var t=n.indexOf(e);0<=t&&n.splice(t,1)}}var yr=function(){function n(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}return n.prototype.unsubscribe=function(){var e,t,i,r,s;if(!this.closed){this.closed=!0;var o=this._parentage;if(o)if(this._parentage=null,Array.isArray(o))try{for(var a=Gi(o),l=a.next();!l.done;l=a.next()){var c=l.value;c.remove(this)}}catch(g){e={error:g}}finally{try{l&&!l.done&&(t=a.return)&&t.call(a)}finally{if(e)throw e.error}}else o.remove(this);var u=this.initialTeardown;if(At(u))try{u()}catch(g){s=g instanceof po?g.errors:[g]}var h=this._finalizers;if(h){this._finalizers=null;try{for(var f=Gi(h),d=f.next();!d.done;d=f.next()){var _=d.value;try{rc(_)}catch(g){s=s??[],g instanceof po?s=vs(vs([],gs(s)),gs(g.errors)):s.push(g)}}}catch(g){i={error:g}}finally{try{d&&!d.done&&(r=f.return)&&r.call(f)}finally{if(i)throw i.error}}}if(s)throw new po(s)}},n.prototype.add=function(e){var t;if(e&&e!==this)if(this.closed)rc(e);else{if(e instanceof n){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}},n.prototype._hasParent=function(e){var t=this._parentage;return t===e||Array.isArray(t)&&t.includes(e)},n.prototype._addParent=function(e){var t=this._parentage;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e},n.prototype._removeParent=function(e){var t=this._parentage;t===e?this._parentage=null:Array.isArray(t)&&xs(t,e)},n.prototype.remove=function(e){var t=this._finalizers;t&&xs(t,e),e instanceof n&&e._removeParent(this)},n.EMPTY=function(){var e=new n;return e.closed=!0,e}(),n}(),ku=yr.EMPTY;function Hu(n){return n instanceof yr||n&&"closed"in n&&At(n.remove)&&At(n.add)&&At(n.unsubscribe)}function rc(n){At(n)?n():n.unsubscribe()}var Vu={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},Gu={setTimeout:function(n,e){for(var t=[],i=2;i<arguments.length;i++)t[i-2]=arguments[i];return setTimeout.apply(void 0,vs([n,e],gs(t)))},clearTimeout:function(n){var e=Gu.delegate;return((e==null?void 0:e.clearTimeout)||clearTimeout)(n)},delegate:void 0};function Wu(n){Gu.setTimeout(function(){throw n})}function sa(){}function us(n){n()}var Ia=function(n){On(e,n);function e(t){var i=n.call(this)||this;return i.isStopped=!1,t?(i.destination=t,Hu(t)&&t.add(i)):i.destination=lg,i}return e.create=function(t,i,r){return new oa(t,i,r)},e.prototype.next=function(t){this.isStopped||this._next(t)},e.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,n.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(t){this.destination.next(t)},e.prototype._error=function(t){try{this.destination.error(t)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e}(yr),sg=Function.prototype.bind;function mo(n,e){return sg.call(n,e)}var og=function(){function n(e){this.partialObserver=e}return n.prototype.next=function(e){var t=this.partialObserver;if(t.next)try{t.next(e)}catch(i){jr(i)}},n.prototype.error=function(e){var t=this.partialObserver;if(t.error)try{t.error(e)}catch(i){jr(i)}else jr(e)},n.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(t){jr(t)}},n}(),oa=function(n){On(e,n);function e(t,i,r){var s=n.call(this)||this,o;if(At(t)||!t)o={next:t??void 0,error:i??void 0,complete:r??void 0};else{var a;s&&Vu.useDeprecatedNextContext?(a=Object.create(t),a.unsubscribe=function(){return s.unsubscribe()},o={next:t.next&&mo(t.next,a),error:t.error&&mo(t.error,a),complete:t.complete&&mo(t.complete,a)}):o=t}return s.destination=new og(o),s}return e}(Ia);function jr(n){Wu(n)}function ag(n){throw n}var lg={closed:!0,next:sa,error:ag,complete:sa},Ua=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function cg(n){return n}function ug(n){return n.length===0?cg:n.length===1?n[0]:function(t){return n.reduce(function(i,r){return r(i)},t)}}var gn=function(){function n(e){e&&(this._subscribe=e)}return n.prototype.lift=function(e){var t=new n;return t.source=this,t.operator=e,t},n.prototype.subscribe=function(e,t,i){var r=this,s=fg(e)?e:new oa(e,t,i);return us(function(){var o=r,a=o.operator,l=o.source;s.add(a?a.call(s,l):l?r._subscribe(s):r._trySubscribe(s))}),s},n.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(t){e.error(t)}},n.prototype.forEach=function(e,t){var i=this;return t=sc(t),new t(function(r,s){var o=new oa({next:function(a){try{e(a)}catch(l){s(l),o.unsubscribe()}},error:s,complete:r});i.subscribe(o)})},n.prototype._subscribe=function(e){var t;return(t=this.source)===null||t===void 0?void 0:t.subscribe(e)},n.prototype[Ua]=function(){return this},n.prototype.pipe=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return ug(e)(this)},n.prototype.toPromise=function(e){var t=this;return e=sc(e),new e(function(i,r){var s;t.subscribe(function(o){return s=o},function(o){return r(o)},function(){return i(s)})})},n.create=function(e){return new n(e)},n}();function sc(n){var e;return(e=n??Vu.Promise)!==null&&e!==void 0?e:Promise}function hg(n){return n&&At(n.next)&&At(n.error)&&At(n.complete)}function fg(n){return n&&n instanceof Ia||hg(n)&&Hu(n)}function dg(n){return At(n==null?void 0:n.lift)}function Da(n){return function(e){if(dg(e))return e.lift(function(t){try{return n(t,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function As(n,e,t,i,r){return new pg(n,e,t,i,r)}var pg=function(n){On(e,n);function e(t,i,r,s,o,a){var l=n.call(this,t)||this;return l.onFinalize=o,l.shouldUnsubscribe=a,l._next=i?function(c){try{i(c)}catch(u){t.error(u)}}:n.prototype._next,l._error=s?function(c){try{s(c)}catch(u){t.error(u)}finally{this.unsubscribe()}}:n.prototype._error,l._complete=r?function(){try{r()}catch(c){t.error(c)}finally{this.unsubscribe()}}:n.prototype._complete,l}return e.prototype.unsubscribe=function(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var i=this.closed;n.prototype.unsubscribe.call(this),!i&&((t=this.onFinalize)===null||t===void 0||t.call(this))}},e}(Ia),mg=zu(function(n){return function(){n(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),Na=function(n){On(e,n);function e(){var t=n.call(this)||this;return t.closed=!1,t.currentObservers=null,t.observers=[],t.isStopped=!1,t.hasError=!1,t.thrownError=null,t}return e.prototype.lift=function(t){var i=new oc(this,this);return i.operator=t,i},e.prototype._throwIfClosed=function(){if(this.closed)throw new mg},e.prototype.next=function(t){var i=this;us(function(){var r,s;if(i._throwIfClosed(),!i.isStopped){i.currentObservers||(i.currentObservers=Array.from(i.observers));try{for(var o=Gi(i.currentObservers),a=o.next();!a.done;a=o.next()){var l=a.value;l.next(t)}}catch(c){r={error:c}}finally{try{a&&!a.done&&(s=o.return)&&s.call(o)}finally{if(r)throw r.error}}}})},e.prototype.error=function(t){var i=this;us(function(){if(i._throwIfClosed(),!i.isStopped){i.hasError=i.isStopped=!0,i.thrownError=t;for(var r=i.observers;r.length;)r.shift().error(t)}})},e.prototype.complete=function(){var t=this;us(function(){if(t._throwIfClosed(),!t.isStopped){t.isStopped=!0;for(var i=t.observers;i.length;)i.shift().complete()}})},e.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(e.prototype,"observed",{get:function(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0},enumerable:!1,configurable:!0}),e.prototype._trySubscribe=function(t){return this._throwIfClosed(),n.prototype._trySubscribe.call(this,t)},e.prototype._subscribe=function(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)},e.prototype._innerSubscribe=function(t){var i=this,r=this,s=r.hasError,o=r.isStopped,a=r.observers;return s||o?ku:(this.currentObservers=null,a.push(t),new yr(function(){i.currentObservers=null,xs(a,t)}))},e.prototype._checkFinalizedStatuses=function(t){var i=this,r=i.hasError,s=i.thrownError,o=i.isStopped;r?t.error(s):o&&t.complete()},e.prototype.asObservable=function(){var t=new gn;return t.source=this,t},e.create=function(t,i){return new oc(t,i)},e}(gn),oc=function(n){On(e,n);function e(t,i){var r=n.call(this)||this;return r.destination=t,r.source=i,r}return e.prototype.next=function(t){var i,r;(r=(i=this.destination)===null||i===void 0?void 0:i.next)===null||r===void 0||r.call(i,t)},e.prototype.error=function(t){var i,r;(r=(i=this.destination)===null||i===void 0?void 0:i.error)===null||r===void 0||r.call(i,t)},e.prototype.complete=function(){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.complete)===null||i===void 0||i.call(t)},e.prototype._subscribe=function(t){var i,r;return(r=(i=this.source)===null||i===void 0?void 0:i.subscribe(t))!==null&&r!==void 0?r:ku},e}(Na),_g={now:function(){return Date.now()},delegate:void 0},gg=function(n){On(e,n);function e(t,i){return n.call(this)||this}return e.prototype.schedule=function(t,i){return this},e}(yr),aa={setInterval:function(n,e){for(var t=[],i=2;i<arguments.length;i++)t[i-2]=arguments[i];return setInterval.apply(void 0,vs([n,e],gs(t)))},clearInterval:function(n){var e=aa.delegate;return((e==null?void 0:e.clearInterval)||clearInterval)(n)},delegate:void 0},vg=function(n){On(e,n);function e(t,i){var r=n.call(this,t,i)||this;return r.scheduler=t,r.work=i,r.pending=!1,r}return e.prototype.schedule=function(t,i){var r;if(i===void 0&&(i=0),this.closed)return this;this.state=t;var s=this.id,o=this.scheduler;return s!=null&&(this.id=this.recycleAsyncId(o,s,i)),this.pending=!0,this.delay=i,this.id=(r=this.id)!==null&&r!==void 0?r:this.requestAsyncId(o,this.id,i),this},e.prototype.requestAsyncId=function(t,i,r){return r===void 0&&(r=0),aa.setInterval(t.flush.bind(t,this),r)},e.prototype.recycleAsyncId=function(t,i,r){if(r===void 0&&(r=0),r!=null&&this.delay===r&&this.pending===!1)return i;i!=null&&aa.clearInterval(i)},e.prototype.execute=function(t,i){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var r=this._execute(t,i);if(r)return r;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},e.prototype._execute=function(t,i){var r=!1,s;try{this.work(t)}catch(o){r=!0,s=o||new Error("Scheduled action threw falsy error")}if(r)return this.unsubscribe(),s},e.prototype.unsubscribe=function(){if(!this.closed){var t=this,i=t.id,r=t.scheduler,s=r.actions;this.work=this.state=this.scheduler=null,this.pending=!1,xs(s,this),i!=null&&(this.id=this.recycleAsyncId(r,i,null)),this.delay=null,n.prototype.unsubscribe.call(this)}},e}(gg),ac=function(){function n(e,t){t===void 0&&(t=n.now),this.schedulerActionCtor=e,this.now=t}return n.prototype.schedule=function(e,t,i){return t===void 0&&(t=0),new this.schedulerActionCtor(this,e).schedule(i,t)},n.now=_g.now,n}(),xg=function(n){On(e,n);function e(t,i){i===void 0&&(i=ac.now);var r=n.call(this,t,i)||this;return r.actions=[],r._active=!1,r}return e.prototype.flush=function(t){var i=this.actions;if(this._active){i.push(t);return}var r;this._active=!0;do if(r=t.execute(t.state,t.delay))break;while(t=i.shift());if(this._active=!1,r){for(;t=i.shift();)t.unsubscribe();throw r}},e}(ac),Rs=new xg(vg),Ag=Rs;function yg(n){return n&&At(n.schedule)}var Sg=function(n){return n&&typeof n.length=="number"&&typeof n!="function"};function Mg(n){return At(n==null?void 0:n.then)}function bg(n){return At(n[Ua])}function Eg(n){return Symbol.asyncIterator&&At(n==null?void 0:n[Symbol.asyncIterator])}function Tg(n){return new TypeError("You provided "+(n!==null&&typeof n=="object"?"an invalid object":"'"+n+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function wg(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Cg=wg();function Rg(n){return At(n==null?void 0:n[Cg])}function Pg(n){return ig(this,arguments,function(){var t,i,r,s;return Bu(this,function(o){switch(o.label){case 0:t=n.getReader(),o.label=1;case 1:o.trys.push([1,,9,10]),o.label=2;case 2:return[4,Oi(t.read())];case 3:return i=o.sent(),r=i.value,s=i.done,s?[4,Oi(void 0)]:[3,5];case 4:return[2,o.sent()];case 5:return[4,Oi(r)];case 6:return[4,o.sent()];case 7:return o.sent(),[3,2];case 8:return[3,10];case 9:return t.releaseLock(),[7];case 10:return[2]}})})}function Lg(n){return At(n==null?void 0:n.getReader)}function qg(n){if(n instanceof gn)return n;if(n!=null){if(bg(n))return Ig(n);if(Sg(n))return Ug(n);if(Mg(n))return Dg(n);if(Eg(n))return Xu(n);if(Rg(n))return Ng(n);if(Lg(n))return Og(n)}throw Tg(n)}function Ig(n){return new gn(function(e){var t=n[Ua]();if(At(t.subscribe))return t.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function Ug(n){return new gn(function(e){for(var t=0;t<n.length&&!e.closed;t++)e.next(n[t]);e.complete()})}function Dg(n){return new gn(function(e){n.then(function(t){e.closed||(e.next(t),e.complete())},function(t){return e.error(t)}).then(null,Wu)})}function Ng(n){return new gn(function(e){var t,i;try{for(var r=Gi(n),s=r.next();!s.done;s=r.next()){var o=s.value;if(e.next(o),e.closed)return}}catch(a){t={error:a}}finally{try{s&&!s.done&&(i=r.return)&&i.call(r)}finally{if(t)throw t.error}}e.complete()})}function Xu(n){return new gn(function(e){Fg(n,e).catch(function(t){return e.error(t)})})}function Og(n){return Xu(Pg(n))}function Fg(n,e){var t,i,r,s;return ng(this,void 0,void 0,function(){var o,a;return Bu(this,function(l){switch(l.label){case 0:l.trys.push([0,5,6,11]),t=rg(n),l.label=1;case 1:return[4,t.next()];case 2:if(i=l.sent(),!!i.done)return[3,4];if(o=i.value,e.next(o),e.closed)return[2];l.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return a=l.sent(),r={error:a},[3,11];case 6:return l.trys.push([6,,9,10]),i&&!i.done&&(s=t.return)?[4,s.call(t)]:[3,8];case 7:l.sent(),l.label=8;case 8:return[3,10];case 9:if(r)throw r.error;return[7];case 10:return[7];case 11:return e.complete(),[2]}})})}function Bg(n){return n instanceof Date&&!isNaN(n)}function la(n,e){return Da(function(t,i){var r=0;t.subscribe(As(i,function(s){i.next(n.call(e,s,r++))}))})}function zg(n,e,t){n===void 0&&(n=0),t===void 0&&(t=Ag);var i=-1;return e!=null&&(yg(e)?t=e:i=e),new gn(function(r){var s=Bg(n)?+n-t.now():n;s<0&&(s=0);var o=0;return t.schedule(function(){r.closed||(r.next(o++),0<=i?this.schedule(void 0,i):r.complete())},s)})}function kg(n,e){return n===void 0&&(n=0),e===void 0&&(e=Rs),n<0&&(n=0),zg(n,n,e)}function Hg(n,e){return e===void 0&&(e=Rs),Da(function(t,i){var r=null,s=null,o=null,a=function(){if(r){r.unsubscribe(),r=null;var c=s;s=null,i.next(c)}};function l(){var c=o+n,u=e.now();if(u<c){r=this.schedule(void 0,c-u),i.add(r);return}a()}t.subscribe(As(i,function(c){s=c,o=e.now(),r||(r=e.schedule(l,n),i.add(r))},function(){a(),i.complete()},void 0,function(){s=r=null}))})}function Vg(n){return Da(function(e,t){var i=!1,r=null;e.subscribe(As(t,function(s){i=!0,r=s})),qg(n).subscribe(As(t,function(){if(i){i=!1;var s=r;r=null,t.next(s)}},sa))})}function Gg(n,e){return e===void 0&&(e=Rs),Vg(kg(n,e))}const Yu=new Na;function Wg(n=2e3){let e=0;return Yu.pipe(la(()=>(e++,e)),Gg(n),la(()=>{const t=e*(1e3/n);return e=0,t}))}function Xg(){Yu.next()}function Yg(n,e){const t=new p_;return e.camera=Fu(),t.setSize(n.w,n.h),t.setClearColor(255),document.body.appendChild(t.domElement),t.setAnimationLoop(()=>{t.render(e.scene,e.camera),Xg()}),t}function Zg(n){return e=>e.pipe(la(t=>Yg(t,n)))}function Zu(){return{w:window.innerWidth,h:window.innerHeight,x:0,y:0}}function Jg(){const n=new Na;return window.addEventListener("resize",()=>{const e=Zu();n.next(e)}),n.pipe(Hg(100))}function Kg(n){n.dispose(),document.body.removeChild(n.domElement)}function jg(){const n=new m_,e=1,t=new si(e,e,e),i=new Nu({color:65280}),r=new ft(t,i);n.add(r);const s=new eg(16777215,.5);n.add(s);const o=new Q_(16777215,4473924,.5);return o.position.set(0,1,0),n.add(o),n}var ot=(n=>(n.Soldier="Soldier",n))(ot||{}),Ge=(n=>(n.Idle="Idle",n.Walk="Walk",n.Attack="Attack",n.Ability="Ability",n.Hurt="Hurt",n.Death="Death",n))(Ge||{});function Ei(n,e,t,i){const r=document.createElement("canvas"),s=100,o=100;r.width=s,r.height=o;const a=r.getContext("2d");if(!a)throw new Error("Canvas 2d context not supported !");let l=!1,c=0;const u=new __(r),h=()=>{a.clearRect(0,0,s,o),a.drawImage(l&&t?t.image:n.image,c*s,0,s,o,0,0,s,o),c=(c+1)%(l&&i!==void 0?i:e),c===0&&(l=!0,t===void 0&&clearInterval(f)),u.needsUpdate=!0};h();const f=setInterval(h,80);return u.minFilter=Ct,u.magFilter=Ct,u.colorSpace=Xt,[u,function(){clearInterval(f),u.dispose()}]}const $g="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAABkCAYAAABaQU4jAAAAAXNSR0IArs4c6QAABRFJREFUeJzt3U9o3GUex/GP4uai0kU0JM9C5tAeethjlYKn9CQIYmFXxPQgWyQLS72IJ4so9LRgkfYgUfRkFFalLqwaEVIvgit76p9QSis4QhJTEKoiS1R+HuKMk9qbJPP8Zl4vGDIzmcMDb+Y788sz80sCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQP1uGfYCgJ3VKaXpXf9iddVzfsj0gPEwEk9uA6suetSjU0qz99DhzExP5uziQhJNhkmP+phXdRmlHrcOewG/V29gzc7N928PeUljTY96dEpp3nj/o8xMT6a7tpEkmZ2b12RI9KiPeVWXUevR6jdYBlZd9KhHp5Tm+OlXkyRPzP0lM9OTOX761ZxdXNBkCPSoj3lVl1Hs0do3WAZWXfSoR6eU5uG/P7X9vj9NJ0n2Hjo8jCWNNT3qY17VZVR7tPINloFVFz3qdOHiSlaudrNytZskefPMf3J1+cyQVzW+9KiDeVWXUe5x27AX8HtcuLiy7XZvYM38sn/L7tJjuAaP8q5/+1323HlHLlxcyfnLnw9zWWNLj7qZV3UZxR6teoNlYNVFj3r0WvzrjdfzyGNH0l3byEyS7tpGrr219W21e/66Nai6axtbR4bLZ5q2f0unVnrUx7yqyzj0aM0W4eDASraG0vVvv8v5y5/n2lsL/aHV+93eQ4dbu2/bBnrU48YX896f1btrG7m6fCbn/v9D7r3rj3n32fmc/3jJttQO06M+5lVd9KhIp5SmU0rz34+Xm04pzaEj/+hfOqU0TdM0f5u+u/nm8rnmm8vn+o8RZGfoUZfBFv9+7eWm16dTSrP8ykv9DoMXLXaOHnUxr+qiR2UMrLroUZ/BFi88caB55qHJplNK8/jTzzePP/1888o7H/R/arHz9KiHeVWXcerRmv3+TinNqRPP5cnjz+XJB0u+/qqb1/93W/+EZPcfvC+ffPpZ7j94X04cO9r6M8DWTo/6dEppBls8MDGRpc3NbU1OHDvav1+TnaVHPW6cV6feW00S82pIxqVHqxZtYNVFj/r0jvQemJhIkixtbmZfrmffxD1Jkv1TU3mxu3WaAD12nh716M2rU++tbuthXg3HOPRo3YINrLroUZdOKc3s3Hx/OPVa7J+aSpJcWl/vD7Gziwua7DA96nKzHkl+M6/02B2j3qM13yIcNDs3nwMvvLTtxXz/1FT2T03l0vp6/zFt3bdtGz3q88mnn/WvX9m8lkvr6/0W7D496jLY42bzit01qj1adR6sQb0gBw/cnuT7/KH8lCR5eN9slk5+OMSVjSc96vDF6uotZxcXmiQ5cuDHJLcnSabL1hHh3n1/ztLJD1t5NNhGetTl5j1+O6/02B2j3qN1C05+3ZbqnV9mZnoyXy7+M0ny6Om3c+LY0SS2pHaLHvXplK3/Sp/cvIcWu0uPuuhRl1Ht0cpF93RKaXp7tleyJ0la/YG4ttOjLnrURY+66FGXUezRys9g3ehK9rQ2wCjSoy561EWPuuhRFz0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAMfUzdMN7K2+aKXMAAAAASUVORK5CYII=",Qg="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAABkCAYAAABaQU4jAAAAAXNSR0IArs4c6QAAB0hJREFUeJzt3U+IXPUBB/DvFNkcerAUIslLySgJxUK9WSNYqPHSUCtU0xZpvEgoa6Hx0FytpCWnQiXUQ7sUCRSjtLKsECkrhcS2SI14adOaEt2aXerERikuetC1MD0kb3wbd83s7Px7u58PLLs7O0te+O77/b6/37yZSQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGA/NomiP+hgAADaMZlG031p8v61kjRd5AECNlQVLyRofSi/AYHxm1AfA5jL/7zdHfQis4My583ayAPpIwYJNTukF6L/rRn0AbDzVnZD5VqtR/dmFd95N8ws7hn9Qm9in5QHAYGyIHaxmUbTLj1Efy2bXLIr2rrvuzd4Dk53vR3xIm1o3eVx4592hHxfARlf7gmVCHx/Nomg/9fs/ZOf2G7Jw8VKSZO+BSZmMiDzGm4XheJHHeNkIedS6YJlAxkezKNqPPP5EkuT7B76dndtvyCOPP5HTJ6ZkMgLyGG8rLQxPTk+3T05Pt5Ok/Lp6G4NjoT5eNkoetS1YJpDx0SyK9rceOrz8th3bkyS77rr3E/d3UfVgrTUPhmu1heEPDx3KPfv3N5Lknv37G9WP8ncVrv5bz0JdHv23kTZOalmwTCDj6e//eDWvzi3k1bmFJMnTM89l7tTMsvu0LihXw9JNHiWldzjWuzAsy5ZJvT/6kcc9+/c35NEfG23jpJYFq7SWCYT+qz4+vvje+0kuZ/L0zHP58yt/XfX3XFQ9GL3mofQOR78WhkpWf/Rzoa5krd9G3DipVcHqdQKh/8ocfvfUk0mShYuXsvje+zl7/l95+5mpvP3MVOe+Cxcv1fYEqYte8qiuBpXewVjpIt1+LAyVrN4MKo9EyerFIPMYB7UpWOudQOifahbf/d4DnfK0cPFS5k7N5G8ffJSvfP5zefbRyZx9YbZzcjy4Z0sWnz2cc8fuz4N7tsinT3rNg8Gq5jLIhaFJvTvDyEPJ6t6wzo9RqsULjV5rArnwwUc5WGzNsUcnk0cnc8ud++yYDFiZxS+OHsnDjxzp3H78Jz/Oe6+dzbE/nurcdvaF2dxy577MXfnei132Xy95JB+X3sUrXx8/U7Tls35Xj1mlhYuXsvPK53JRuPU7k52f7brr3uTUjAz6TB7jZbPkUZsdrOoEMndqpvOx2gQyd2rGRD4g861WozqZP3x3kQdu/V+S5DfnL+XhX8/kt2ff7HxWeAerlzySy9c1/Omz38jxMx/myMwbjSMzbzScM/1THbOS2FkcMXmMl82QR20G02ZRtKsTyH//s5AnX7mu8zoZd9x+W1586eXccfttOXrooHI1BM2iaFez2DcxkdmlpWWZHD10MPsmJvLaV+9WegdsLXnMLi11BjS5DMZqY1ZyeWfx1q/d8YnfueXOfV1nUT4U9c377kuj0ZDfNQw6j9LJ6el29aU1WNmw8hil2hxosvYJpE5B1FW51btvYiJJMru0lN1ZzO6JrUmSm7dty7GFyxcrymPw1pJHSS6Dc/WYlaQzXiW9j1nVcpVEwerSoPKoUrC6N4w8RqlWB5uY0MdNsyjaew9Mdk6E3VlMkuye2Jqbt23LP996q5YnRl11m0fi/BiWlcasMqNXDv+gpzHr5PR0uyxXiYK1FoPIo0rBWptB5zFKtbkGq2rvgcnc+vNfLitXN2/b1plAyvt4ltrwvPjSy52vyzwYnWvlUbeBqq7KMagcs15fejtJcvrEVI4eOpjZpaXOmNVruaJ7g8ijyjMI12bQeYxa7Q64XKEnl0MoL+bdXjSTJLt2fzkPPfZ89h6YzOkTU7UMpW6qRXa1POQwPPIYrl4WctXr37p9+KPdbq/479i9Wm5YeVytLFd2r5YbVR7joBYv01A132o1Tp+YaieXQ/hLkp3bb8hLJ36WJLn/8Z8meV65GqL5VqtRvjnnankwPPIYnmZRtC+8ufZXwr9xx44kya9+9PUkyexjn8xktUJVpVwtN8g8VlPdtVKulmsWRfvMufNJPn47rpVe1Lj6bhKLzx7O8SvPGOwlj3FS6z+GZlG0y2tMXs/1SVLrtlt38hgv8hiOXif19VKuVraeklW9frGbc0S5urZqyVrJ1cXr3LH7c/zMh0my5jzGTe12sFbyeq7vrNpHfSzIY9zIY7DmW63GjTt2tJNkWEVLuVpdr3mU933opps+9X7VUuVZnNc232o19nzpi12PPQ/u2dIpU6dPTLW3PHN8cAc3YP4oAPqom4f2emUiXzt51Euz2DjvJrEh/hMA46ifk7vJfP3kwTD5AwEYkm4neJP3cMgDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAcfZ/cIfVGM6VWnsAAAAASUVORK5CYII=",e2="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAABkCAYAAAB+UVSPAAAAAXNSR0IArs4c6QAABshJREFUeJzt3V9onWcdB/BvZY0XUyeyheQVciYt2BtlF3UUeqGpNwVBWnBDTC+GZcQyW4SyKztppVeDyWgvRhyzN8sGVomOqR1COpFhHb1xbcOYdtBU09qBEFuGVMvrRfoe07RqoeS8z8n5fODQ5k/h4Tz5/r7vc87JaQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC0Y13bC2Dt6VRV3fz9wsKCnzEA7or+gMGwJsJtYJWjU1X1hm07MzY6nJPTU0nsSdvkA/47+SiH/iiPfLBaPtL2Au5VM7DGJya7H7e8pIHVqar6lV/+OmOjw5m/dCVJMj4xaU9aJB/l6VRV3dzaXsugk49y6I/yyEd51lJ/9PUBxMAqR6eq6gNHX0qSPDnxtYyNDufA0ZdycnrKnrREPsqj0MshH+XQH+WRj/Kstf7o2wOIgVWOTlXVO761/9bPfXo0SbJh2842ljTw5KM8Cr0c8lEO/VEe+SjPWuyPvjyAGFhlOntuLnPn5zN3fj5J8urM6zk/O9PyqgaPfJRHoZdDPsqkP8ogH+VZq/1xX9sLuBdnz83d8nEzsMZuPj3F6lr+Q7949Voe+PjHcvbcXM68936by+Im+SiDQi+TfLRLf5RNPsqwlvujrw4gBlY5mr348Ssv5/Fv7Mr8pSsZSzJ/6Uo+OL707iUPPbY0qOYvXVkKyuxM7V00Vo98lE2ht0s+yqE/yiMfZVuL/dE3L8FaPrCSpaG0ePVazrz3fj44PtUdWs3XNmzb2bdPS5VuZXk0p/D5S1dyfnYm7/zjn/nCpz6Zn31vMmfePOFp9B6Qj/Isf6eSxavXkiyVyKszr+e3p//Q6toGjXyUQ3+URz7KMwj90RcHEAOrPM1eHDl8MOdnZ7q3Y4eeydU/nsnzv5ntfm+zJx69Wh3yUR6FXg75KI/+KId8lEd/FKRTVfXv35ytO1VV//xHP+y+B3KnqurZF1+o//7eO7fdbMbqWr4Xzz25uf7uV4frTlXVTzx9qH7i6UP1iz/9VfdPe7G65KMszX3f7Mm2XU91b52qquu6rr85+uAte9F8re21r0XyUR79UQ75KMsg9UffPKLQqar6yOGD2XfgYPZ9pcrf/jqfl0/f130/5K1bHs1bp97O1i2P5vDe3R4t6YFOVdXL92L70FBOXL9+y54c3ru7+3l7snrkoxydqqqXP8K778DB7teOHXomm7+49bZ/87kvbbcnq0g+yqM/yiEf5Rik/uirBRtY5WlO3eMTk937f2MWs3HooSTJppGRPD+/9LaK9mN1yUc5FHp55KM8TX9sHxpKkpy4fv2O/TE+MZmT01P2ZBXJRzkGpT/6btF3O7ASF7y90qmqugnGyempbB8ayqaRkSTJu5cvd4eYAll9DoTlUOjl0R9labpj5azSH+1wICzHIPRHX/wS+krjE5PZ/NwLt4Rj08hINo2M5N3Ll7vf04+vietHFxYW1p2cnsrJ6ans2vyvPPj5D7P+kRtZ/8iN7Pj2eNvLGyjLh9Bbp95OEvloyYWFhXVHfrHQLY/Gxeln89Hjx3J6/558Z2wsJ65fb3GVg0d/lKeZVVs233/H/nCx2zt3kw9W3yD0R18eQJL/P7DovQ3bduZ3n3gsf/nsU5l5bS4zr83lz595PIkC6SUHwrK44C2P/ijD8ln1v/pDd/SWA2E51nJ/9NV/RJh0B1ad3LzgTTI2OpxT088mSb5+9PtJ3hCQHruwsLAuszP1xizmYpI/5YEkyen9e7pPEdJb8lGO5YWefJj11Y0kyY6N4znxgzdaXNlg0R/l6d7PK/pj+9BQTu/f0+7iBszd5kM2emut9kdf/xB1qqremMUk/xlYzYWugLSjOYU39//kww/XSfr2NYr9bOUjIstf12sveqfZh+b99cdGh3OxW+g/yeG9u5OYWb3W9EfTHUn0R8u+XN1fJ0t9bg/a1cyt5ddYiWz02lruj75b8EorDyH9uAnQCw6D7brTgdBetGv5L93aC7idQ2EZVl7rNuwJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPfg32UH6ZQXCQ6CAAAAAElFTkSuQmCC",t2="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA4QAAABkCAYAAADe4v4kAAAAAXNSR0IArs4c6QAACXJJREFUeJzt3X1sXWUBx/FfAUvEF4y8ZD2D3cUtEdtAMEGyiFHYGrLEfyRRQ2QBAQ0kIDExJppMg6ZGQiIhY75MQJLFQdCYqvFlYlvAVzAkKtBqyEa2MjsdEUUM6gSPf8C5uy3dS1l777l3n0+y0K7tOO0357nP89zTcxMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWJBGUZSdPgYAALpDX6cPYDG0ToB3z8z0xPfUzfTonEZRlB//4ubc+unrmz97PepFj3rRA+gWxqt66aUex3X6AI5WoyjKVWsvyUWXXdN8v8OHdEzTo/Peed5Q82096kWPetGjXhpFUVZ/On0s6FE3xqt66bUeXb0gbBRFefePfpoVA6dneu++JMlFl13T9VG6lR418fSfkuhRN9WztzsnRvWoAedHvfTa5Krb6VEvxqt66cUeXbsgbBRFufG2O5MkH73s/VkxcHo23nZn7t+2peujdCM96keP+qh+3tWzt3p0lvGqXnpxctXN9KgX41W99GqPrlwQNoqifN+1n5j9d8sHkiSr1l7SiUM6pulRP3rUx6zzo3r2Vo+OMV7VS69OrrqVHvVivKqXXu5xQqcP4Gg8Pjk16/17Rn+QnROjWfHyJQ6013w9dt39/exKcnyOz1uOO7N88n9PdfUv3XYTPepNj85yfnTe4SZXP/vSHc0WSaLH0tKjvoxX9bLQ9UdZluX4+HiGh4dr26irFoStO1PPPvfPnPyG1+fxyak89sSTnTysY9aR9Nj5zKO54pzVB75oj0FrqehRL3N7tPr5I79Pokc7OT/q62CTq13PTOrRAfP1GN88kmwe0aNNjFf1cjTrj7Isy76+vr65b9dN11wyWsX41t3fTJJM792XZ5/7Zx574sk8/e0tefrbW5qfO713X1atvaT5NdVuFotnIT32vPvS7Hn3pUmSd53xvB5LQI96ma9H5Y1/3adHmzk/6qdqUm2WPD45lXtGf9DcLNk1NZkrv7ApD75wYrZO/7Uv0WMpHarH+OaRrBwc0qNNFmO8KsuyHBsb02YRHO36o3UBWNfFYNIlC8LWGB/80IbmdbrTe/dl58RoHv33f/OON78p3/3sNXnsge3ZOTHa/Nq3HHdmadBaXAvpkaTZ48EXTuzQEfe2uT2SNO9kqUf7Hez8qOjRXsar+mltcqSTq2oRwuI7VI/xzSNZd/3GJHq0w2KMV9WzUMPDw31lWZr7HgXrj5ppFEX58AMTZaMoyu994+vN18VpFEU5cftXy3888egr/lQff/Ffz5dJcvmKU0pRFsdCepR//1uzR6LDUpjb48Of/Fx5+3d+rEeHHOr8ePiBCT3azHhVL63nQqMoyrUbrivXbriubBRFWZZledXAqbM6VB9L9FgKh+zx97+VVw2cOmtepcfSMl7Vy7G0/uiKZwh3z8z0ffBDG7Jp5MbcsPHG3PDeIhvOeyFJsvWJfbnh9tHc+9ifmv89+8L1SZInd+7I8a89yS7WIltIjyQ5+8L12T0zo8MSmdsjSX750G+S6NEJhzo/kujRZkc6Xp194fqsHBxqPn60/s5I6yTAXRaPXrXbvmnkxuycGM3OidHc9bnPZOXy5Rnv689z+55Kklk77gfr0ZFvoMfM16Ny64MTzbcP16N9R9y7Fnt+NTY2Vk5OTpZzteWb6QHH0vqjqw62URTlDe8t8sxfpvPNR07I+v7+bN+/v/nCqResOT8jH7s66/v785U/TM2KcfmKU8pf7DnJXbEW0ZH0+Mi6Nbn23Ldn+/79SZL3nPCf6LA0qh6bfjiTJHp02Nzz46LLrskFa85vLtb1aK9DjVfVLfUvWHN+zjnlEJeKnrY8v3pkMrd++nqL+KPQKIqydYI19xw5ZIOKFotmbo9NP5zRosNezePHnVu3Zt26dRkfH8/AwEDz3xocHFzQ/3tq6sBNhYaGhvTMq1t/VJfudsv6o9YHN59qF2p9f3+SZPv+/VmdZ7O6/7QkyVnLluXW6ekkaQ5M3RKjGx2ux9d+99usHBxqnjT/u3eTCe8S0qNeWnv85wNXJkme2nazHh1ysPNjR05uNqgWh8mBHi8ue3HWv2PSe/TmTrCSNH/u03v3ZcXA6bl/25ZZfz9fDy0Wx3wLkOTADbGqHtVEODmwgVX10GJxHe7x4wN33PGKr6kWhJWBgYHs3bs3AwMDr1gY1vkGJ3W00PVHWZblFY1T531MHxsbK+v2EhS1Opgj0SiKstopGfnY1c0YZy1bliT545//PGvX14770jpcj49v/3FWDg41P1+P9qgGLj3qQY96ma9H9UDeSo+lNd8Eq/X9uV30WFqtPbbv359dU5MZHjzjoBNem+3t4fGjHnp9/dFVr0PYqnrafM15r0vyfF5TvLRD9b7VF2X7LT9J4uRop4P1qDR3Dlec4tr1NtKjXvSol9Yenzx3ea676b6sHBzSo02qn/P2lye81e/mjGydzJc/dXFWrX5bcsu0Hm0yt8fGy9+asak9+fKnLk6SV/agrTx+1EOvrj+6bkG4e2am7/5tW8okWbX2kvw6L13K8NC2m5Mkl972+SQ/eflSkxOzu4tidKPD9bjupgOfe7nBqq30qBc96kWPemntMTx4Rsam9uSO8YeSvDTB0qO9qh5XfmFT7rrpvgwPntGcXyV6tNtCxqvWFz+v46WJ3arX1x9ddbBzNYqiXJ1nkyQ7cnKSA5c62MFqv/l67JqazBXnrG5+TrftmHQzPepFj3rRo170qJe5PXZNTSaJHh2y0POjupOo3xNcGr24/ui6ZwjnsyMnZ/fMTJ/bHtdDa49Vbz4nyUnNj3nwaD896kWPetGjXlp7XHvu2/OLPXp0UtVj5eBQub6/X48OO9LxykKwPY5k/eEZWwAAgGOY138EAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKB3/R962hSaVlgv6wAAAABJRU5ErkJggg==",n2="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAABkCAYAAACoy2Z3AAAAAXNSR0IArs4c6QAABz5JREFUeJzt3H9s1PUdx/FXLd+udHylhn6b8u1y19FuUOP8ERipEnAtJBSanZDuVyUbi51BExB/ZWaBMTLZ5pgQAR3TWQ2RVkMkREZq47YiMwUsdolSwKHFeYbS9TjX9poWqeWzP467cYFkiUv77ffu+Ugu6ff+evfeufcr3+/n8zkJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUJbXBfw/gq5rEn9/3N3t6/8lHURtO9mPabEY/fBYyLKS/dg/MkI/PJaO8+o6rwv4ooKua0qrlqtyxarktcclZbSobZu6ghI9Vj5Hc4eGUsIE4y9kWWZGTZ3m16/VZ/n5KWGC8Zeu88qXARJ0XdPU/GcFphcqfK5XklS5YlXaNMVvorZtTjc0KuAUKBw5L0l6rHwOIeKRkGWZzW+9reKiQp3tiX8/5tevJUQ8ks7zyncBEnRds35HgyTp3hXfUWB6odbvaNDBxmfTpil+ErVt89p9P5Uk1T/6kAJOgdY9vFEHO/5GiHggZFlm9fMvS5K+/eO7VVxUqEee3Km/7N1FiHgg3eeVrwIk6Lpm2X2PpL5XPF2SVFq13IuSMlrUts2vv1mZ8l6w+CuSpNLAjV6UlNFClmWWPrgu5T338vejfN4SL0rKaJkwryZ5XcAX0XniZMr1y/sOqKt1nwKXny9ifJ3oOJZy/cqre9QVPqmAs8CjijLbmc7OlOvmfft1qu11Fdeu9KiizJbO88o3AZK41euPDWqqPUWdJ07q+OkzXpeVsaK2beYODalyMKapU2yd6Dim4x995HVZGStkWeaz/HzFYoOy7Sk609mp9z/g++GVTJlXvniEdeVzwvC5XvXHBq/ZjPC5XpVWLff9c8WJLhEekhSOnFf/YOya4RGOnFddQQnrIGMsER6SdLanV7HY4DXD42xPr2bU1LEOMsYyaV5N+DuQxIe7p2m3fvb8XknxD76rdZ+uj8Z3NLQd/7u0YZW+8a3qtHm2OFElwuOVrb/TuqdelBQPiq7wSV0/OipJOvRGvE+3LfkeayFjLBEeT+96Uc88t0dSPChOtb2uaf2fSpIaOo5IWq1lVTWshYwx5tUEE3Rd8/abrSbouua1F54zQdc1Qdc1rX/caQZOv3fVy89p7gdR2zbHtm01pdnZ5k/3/NCUZmeb0uxs8+aP6szAG3uvenH3MbZClmU+aD5gFjuOad++xSx2HLPYcUzn1s1m+Hj7VS/uPsZWps0rX5yGDLqu2b5pox5Yv1EP1Lj69F9h7X5nUvJQzryKuWo72q55FXO1aU29Pu7uzgq6rkmX054TTdS2zeHvLtODu5q05mu5+nffsHZHslQ5O75ofsedVTp8qFV33Fmlu/6wWdNisayobRtOp4+NkGWZ9Vue0M8ff0L3LyzUQOScGt/L1qLLi+a33F6hd48c1S23V+jpn9Rp/8hIVsiyDKfTx0YmzSvfFBx0XXNlM6pzctRy8WJKUzatqU95/2Djs2nzkwETTdS2zUvFl5LhUZ2VpRZjUkLkV1s3qj0vT1L8YOFvT73DT5yMkZBlmXtqv54Mj6WWpeaRkZQQ2fLo/aodGNCBS5c0v36t3mrYxk+cjJFMmVe+KjZxu1edkyNJarl4UWXqV1mOI0maVVSkp8Jh3zbDbxLrIdVZ8Y+5xRiVaVRlWfGltZm5udo2PKzK2QsIj3GQWA9ZalmSpOaREd2oQZVYN0iSShxHv+/u1qLalYTHOMiEeeWLXVhXqlyxSnO27ExpxqyiIs0qKtL7PT2S5Ntm+FHl7AWa/dAvUsJjZm6uZubm6h8XLkgS4TGOFtWuVPlvtqeER4njqMRx9M9IRJIIj3GU7vPKdwEiSW1H2yVJFXO+rIKbh2TdOirr1lEtWx0/Fe3XZvjV4UOtkqQK5zoVFFySFTCyAkahJV9Ve14e4THO3j1yVJJ0282TdUP5BU26aVSTbhrVgnvn6Ut9fYTHOEvneeW7whO3hYntb4HphfqkcbMk6Qc7Xk0uSnlXYWZJ7LKqKyiRJAWcAn3ScVCS9P2HH08uontWYIZJ7LKaUVMnSSouKlT33mckSUuefCm5iO5dhZkl3eeVbwsPuq4pU78k6UNNlaTkgpSfG+JXUds2dw/FJElNebYkacPwsH45eTIB4oGQZZnS/PhaVFff55KkhY6jv0YiBIgH0nVeTfiDhP/Lh5qabECL65rqnBy1+HRLXDpoyrOTgRG1bbNheFhs4fVOV9/n/w2MSMQsdBwpEmELr0eYVwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAv/AdeZZhPa9RkqAAAAABJRU5ErkJggg==",i2="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAABkCAYAAACoy2Z3AAAAAXNSR0IArs4c6QAABbBJREFUeJzt219onXcdBvAnsuZmmwVxMXnLcoaJo3SL7iKUQi/WBISgu2hAO9cWWRGJF1oEwavOdVuvJkpNEQylVMay4h+ISKsZQjoYxVLKQLKVWRYhR3ZaKwqxZWBYOV7E9+w0rVK0zTmn+Xwg0Jw28Mv59vc+7/O+70kAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgXa1ewJ1QKYp6+efFWu2e+J0A2t3HWr2A/1elKOoDo+MZ2TPR+L7FSwJYFzo6QCpFUX/tN79Lf19PqpeuJElG9kwIkRarFEW9/Gr1WoC7p2MDpFIU9QNHjiVJvr7nS+nv68mBI8dyenpKiLSQRgjrR0cGSKUo6ju/8Z0bX9vUlyQZGB1vxZKIRthJtETuhI4MkNLb71zIhYVqLixUkyQnZk5mYW6mxatanzTCzqElcqd0VIA0nzEtXb2WZCVETsyczJvn/9DSta1nGmHn0BK5kzomQMr/4D9/7dUkSfXSlSxdvZb5i3+66d9WL13JwOi4TbHGNML2piVyp93X6gXcjubw2LV7b+OstnrpShbmZvLxv62cSZ2Zfyv53kSGdow5810DzQecpavXsvHBB/L2OxduGeq0lpbYvsp91ImfYeuYBlKGx+Shg1mYm2l8HX/huZyZf2slPP5t/o3ZLMzNdORAOoVG2BlW3yjXEttLpSjq5R5qnlOn7JWOaCCLtVrXrt1765OHDmb/gYPZ/8Uif/9LNa+evy+vXLySVy7OZPu2rTlz9ly2b9uaQ9/6mvC4izTCzrB6Tlpie6kURX3y0MHs2r23MaNyZgOj48nczA0h0o7HtLZb0H9TKYp6c3iMdXdndnm58TRJGR7l6+34ht8LyrOmshHuP3Cw8XfHX3guw09uv+lnhnaMmccaWh0eycpBqfnmeWlhbqYR8Jr72iiPZZOnao09tHpWSdLf15ONDz6QJPnVT37QdrNpq8XcjnJjjHV3J0lml5czmKUMdj+UJNnc25vD1ZV63m5v9r2kPHta3QhLQr21Vof8j+Y+ekrxppaYNFqiAFkblaKo7x3+MJ/4VH8mT9Uar4/smcjp6alG2Jfh8fhjW5Kk7a6utM1CblelKOojeyYaB6YyPDb39iZJ3r18udFKTk9PtdWbfa+5VSNMhHq7aA75Zlpie2i+z1HunX9+eV+++mhP9j3/UgZGxzP06Kfz+GNbsmWgv/Fzu7/w+baZU8fcRF/tzNlzSZJtw/fnk5/9IBueuJ4NT1zPzm+OtHhl68dirdY1earWaB6zy8s3hMfm3t5s7u3Nu5cvJ/F5g7W2WKt1lQ0x+eiyyL7nX8rQjrHsPzqT/Udn8rP59zO0Yyxj3d3ms0bKD3PuHf4wg1lq7J3t27Zm+MntjYa4+l7V0elfttUDKR1xE73ZYq3WdXp6qnGj6fdZuU54dvrlJMlXjryY5HXtY40s1mpdZStMktPTU9k2fH+SD7KhuJ4k2Tk4ktkfvt7CVa5fKyGf+mCW8nBfTz7T1BL/PP1yBrsfyvlfHM+3+/sbLZG7q1IUjXnkH1lp6st/zcN7vpszZ8/l6aEbHzg5MXMyz4w/lWRlf7WTjj7AloNIkveyMUlca2+R8oyonEd99Nl0zf009dFnkyTPjD/Vdtdv14PmPVIffTb9fT1J0giP8tLv4WrVbNbAf5rH5978bQ5Xqzlw5FieHtqUZOWSYqm8P9Vul+bbYhH/q3IY72Vj40xYgLTO6nmUr5lJ60w88kh9dnm58X3ZFDf98cdJkr6iku//+n2zWSO3msfqB03m35hNkux8caoRMKV2Cg8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC4h/0LVV3OBvL6iaIAAAAASUVORK5CYII=",Ti=new $_,Ju={Soldier:{Idle:Ti.load($g),Attack:Ti.load(Qg),Walk:Ti.load(e2),Ability:Ti.load(t2),Hurt:Ti.load(n2),Death:Ti.load(i2)}};function Wt(n,e){return Ju[n][e]}const r2=async function n(e=0){if(e>20)throw new Error("Textures loading timed out !");if(!Object.values(Ju).flatMap(i=>Object.values(i)).every(i=>!!i.image))return await new Promise(i=>setTimeout(i,15)),n(e+1)}();function Ku(n,e){switch(n){case ot.Soldier:switch(e){case Ge.Idle:return Ei(Wt(ot.Soldier,Ge.Idle),6,Wt(ot.Soldier,Ge.Idle),6);case Ge.Attack:return Ei(Wt(ot.Soldier,Ge.Attack),6,Wt(ot.Soldier,Ge.Idle),6);case Ge.Walk:return Ei(Wt(ot.Soldier,Ge.Walk),8,Wt(ot.Soldier,Ge.Walk),8);case Ge.Ability:return Ei(Wt(ot.Soldier,Ge.Ability),8,Wt(ot.Soldier,Ge.Idle),6);case Ge.Hurt:return Ei(Wt(ot.Soldier,Ge.Hurt),4,Wt(ot.Soldier,Ge.Idle),6);case Ge.Death:return Ei(Wt(ot.Soldier,Ge.Death),4);default:throw new Error(`Unknown animation: ${e}`)}default:throw new Error(`Unknown apellation: ${n}`)}}var et=(n=>(n.Knight="Knight",n.Orc="Orc",n.Cavalry="Cavalry",n.Ranged="Ranged",n.Magic="Magic",n.Beast="Beast",n.BladeMaster="Blade Master",n.Dead="Dead",n.Light="Light",n.Dark="Dark",n.Armored="Armored",n))(et||{});class Ot extends La{constructor(e,t={}){const i=t.font;if(i===void 0)super();else{const r=i.generateShapes(e,t.size);t.depth===void 0&&t.height!==void 0&&console.warn("THREE.TextGeometry: .height is now depreciated. Please use .depth instead"),t.depth=t.depth!==void 0?t.depth:t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(r,t)}this.type="TextGeometry"}}class ju{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const i=[],r=s2(e,t,this.data);for(let s=0,o=r.length;s<o;s++)i.push(...r[s].toShapes());return i}}function s2(n,e,t){const i=Array.from(n),r=e/t.resolution,s=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*r,o=[];let a=0,l=0;for(let c=0;c<i.length;c++){const u=i[c];if(u===`
`)a=0,l-=s;else{const h=o2(u,r,a,l,t);a+=h.offsetX,o.push(h.path)}}return o}function o2(n,e,t,i,r){const s=r.glyphs[n]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+n+'" does not exists in font family '+r.familyName+".");return}const o=new tg;let a,l,c,u,h,f,d,_;if(s.o){const g=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let m=0,p=g.length;m<p;)switch(g[m++]){case"m":a=g[m++]*e+t,l=g[m++]*e+i,o.moveTo(a,l);break;case"l":a=g[m++]*e+t,l=g[m++]*e+i,o.lineTo(a,l);break;case"q":c=g[m++]*e+t,u=g[m++]*e+i,h=g[m++]*e+t,f=g[m++]*e+i,o.quadraticCurveTo(h,f,c,u);break;case"b":c=g[m++]*e+t,u=g[m++]*e+i,h=g[m++]*e+t,f=g[m++]*e+i,d=g[m++]*e+t,_=g[m++]*e+i,o.bezierCurveTo(h,f,d,_,c,u);break}}return{offsetX:s.ha*e,path:o}}const a2={0:{x_min:51,x_max:779,ha:828,o:"m 415 -26 q 142 129 242 -26 q 51 476 51 271 q 141 825 51 683 q 415 984 242 984 q 687 825 585 984 q 779 476 779 682 q 688 131 779 271 q 415 -26 587 -26 m 415 137 q 529 242 485 137 q 568 477 568 338 q 530 713 568 619 q 415 821 488 821 q 303 718 344 821 q 262 477 262 616 q 301 237 262 337 q 415 137 341 137 "},1:{x_min:197.609375,x_max:628,ha:828,o:"m 628 0 l 434 0 l 434 674 l 197 674 l 197 810 q 373 837 318 810 q 468 984 450 876 l 628 984 l 628 0 "},2:{x_min:64,x_max:764,ha:828,o:"m 764 685 q 675 452 764 541 q 484 325 637 415 q 307 168 357 250 l 754 168 l 754 0 l 64 0 q 193 301 64 175 q 433 480 202 311 q 564 673 564 576 q 519 780 564 737 q 416 824 475 824 q 318 780 358 824 q 262 633 270 730 l 80 633 q 184 903 80 807 q 415 988 276 988 q 654 907 552 988 q 764 685 764 819 "},3:{x_min:61,x_max:767,ha:828,o:"m 767 290 q 653 51 767 143 q 402 -32 548 -32 q 168 48 262 -32 q 61 300 61 140 l 250 300 q 298 173 250 219 q 405 132 343 132 q 514 169 471 132 q 563 282 563 211 q 491 405 563 369 q 343 432 439 432 l 343 568 q 472 592 425 568 q 534 701 534 626 q 493 793 534 758 q 398 829 453 829 q 306 789 344 829 q 268 669 268 749 l 80 669 q 182 909 80 823 q 410 986 274 986 q 633 916 540 986 q 735 719 735 840 q 703 608 735 656 q 615 522 672 561 q 727 427 687 486 q 767 290 767 369 "},4:{x_min:53,x_max:775.21875,ha:828,o:"m 775 213 l 660 213 l 660 0 l 470 0 l 470 213 l 53 213 l 53 384 l 416 958 l 660 958 l 660 370 l 775 370 l 775 213 m 474 364 l 474 786 l 204 363 l 474 364 "},5:{x_min:59,x_max:767,ha:828,o:"m 767 319 q 644 59 767 158 q 382 -29 533 -29 q 158 43 247 -29 q 59 264 59 123 l 252 264 q 295 165 252 201 q 400 129 339 129 q 512 172 466 129 q 564 308 564 220 q 514 437 564 387 q 398 488 464 488 q 329 472 361 488 q 271 420 297 456 l 93 428 l 157 958 l 722 958 l 722 790 l 295 790 l 271 593 q 348 635 306 621 q 431 649 389 649 q 663 551 560 649 q 767 319 767 453 "},6:{x_min:57,x_max:771,ha:828,o:"m 744 734 l 544 734 q 500 802 533 776 q 425 828 466 828 q 315 769 359 828 q 264 571 264 701 q 451 638 343 638 q 691 537 602 638 q 771 315 771 449 q 683 79 771 176 q 420 -29 586 -29 q 134 123 227 -29 q 57 455 57 250 q 184 865 57 721 q 452 988 293 988 q 657 916 570 988 q 744 734 744 845 m 426 128 q 538 178 498 128 q 578 300 578 229 q 538 422 578 372 q 415 479 493 479 q 303 430 342 479 q 264 313 264 381 q 308 184 264 240 q 426 128 352 128 "},7:{x_min:65.28125,x_max:762.5,ha:828,o:"m 762 808 q 521 435 604 626 q 409 0 438 244 l 205 0 q 313 422 227 234 q 548 789 387 583 l 65 789 l 65 958 l 762 958 l 762 808 "},8:{x_min:57,x_max:770,ha:828,o:"m 625 516 q 733 416 697 477 q 770 284 770 355 q 675 69 770 161 q 415 -29 574 -29 q 145 65 244 -29 q 57 273 57 150 q 93 413 57 350 q 204 516 130 477 q 112 609 142 556 q 83 718 83 662 q 177 905 83 824 q 414 986 272 986 q 650 904 555 986 q 745 715 745 822 q 716 608 745 658 q 625 516 688 558 m 414 590 q 516 624 479 590 q 553 706 553 659 q 516 791 553 755 q 414 828 480 828 q 311 792 348 828 q 275 706 275 757 q 310 624 275 658 q 414 590 345 590 m 413 135 q 527 179 487 135 q 564 279 564 218 q 525 386 564 341 q 411 436 482 436 q 298 387 341 436 q 261 282 261 344 q 300 178 261 222 q 413 135 340 135 "},9:{x_min:58,x_max:769,ha:828,o:"m 769 492 q 646 90 769 232 q 384 -33 539 -33 q 187 35 271 -33 q 83 224 98 107 l 282 224 q 323 154 286 182 q 404 127 359 127 q 513 182 471 127 q 563 384 563 248 q 475 335 532 355 q 372 315 418 315 q 137 416 224 315 q 58 642 58 507 q 144 877 58 781 q 407 984 239 984 q 694 827 602 984 q 769 492 769 699 m 416 476 q 525 521 488 476 q 563 632 563 566 q 521 764 563 709 q 403 826 474 826 q 297 773 337 826 q 258 649 258 720 q 295 530 258 577 q 416 476 339 476 "},ο:{x_min:0,x_max:764,ha:863,o:"m 380 -25 q 105 87 211 -25 q 0 372 0 200 q 104 660 0 545 q 380 775 209 775 q 658 659 552 775 q 764 372 764 544 q 658 87 764 200 q 380 -25 552 -25 m 379 142 q 515 216 466 142 q 557 373 557 280 q 515 530 557 465 q 379 607 466 607 q 245 530 294 607 q 204 373 204 465 q 245 218 204 283 q 379 142 294 142 "},S:{x_min:0,x_max:826,ha:915,o:"m 826 306 q 701 55 826 148 q 423 -29 587 -29 q 138 60 255 -29 q 0 318 13 154 l 208 318 q 288 192 216 238 q 437 152 352 152 q 559 181 506 152 q 623 282 623 217 q 466 411 623 372 q 176 487 197 478 q 18 719 18 557 q 136 958 18 869 q 399 1040 244 1040 q 670 956 561 1040 q 791 713 791 864 l 591 713 q 526 826 583 786 q 393 866 469 866 q 277 838 326 866 q 218 742 218 804 q 374 617 218 655 q 667 542 646 552 q 826 306 826 471 "},"¦":{x_min:0,x_max:143,ha:240,o:"m 143 462 l 0 462 l 0 984 l 143 984 l 143 462 m 143 -242 l 0 -242 l 0 280 l 143 280 l 143 -242 "},"/":{x_min:196.109375,x_max:632.5625,ha:828,o:"m 632 1040 l 289 -128 l 196 -128 l 538 1040 l 632 1040 "},Τ:{x_min:-.609375,x_max:808,ha:878,o:"m 808 831 l 508 831 l 508 0 l 298 0 l 298 831 l 0 831 l 0 1013 l 808 1013 l 808 831 "},y:{x_min:0,x_max:738.890625,ha:828,o:"m 738 749 l 444 -107 q 361 -238 413 -199 q 213 -277 308 -277 q 156 -275 176 -277 q 120 -271 131 -271 l 120 -110 q 147 -113 134 -111 q 179 -116 161 -116 q 247 -91 226 -116 q 269 -17 269 -67 q 206 173 269 -4 q 84 515 162 301 q 0 749 41 632 l 218 749 l 376 207 l 529 749 l 738 749 "},Π:{x_min:0,x_max:809,ha:922,o:"m 809 0 l 598 0 l 598 836 l 208 836 l 208 0 l 0 0 l 0 1012 l 809 1012 l 809 0 "},ΐ:{x_min:-162,x_max:364,ha:364,o:"m 364 810 l 235 810 l 235 952 l 364 952 l 364 810 m 301 1064 l 86 810 l -12 810 l 123 1064 l 301 1064 m -33 810 l -162 810 l -162 952 l -33 952 l -33 810 m 200 0 l 0 0 l 0 748 l 200 748 l 200 0 "},g:{x_min:0,x_max:724,ha:839,o:"m 724 48 q 637 -223 724 -142 q 357 -304 551 -304 q 140 -253 226 -304 q 23 -72 36 -192 l 243 -72 q 290 -127 255 -110 q 368 -144 324 -144 q 504 -82 470 -144 q 530 71 530 -38 l 530 105 q 441 25 496 51 q 319 0 386 0 q 79 115 166 0 q 0 377 0 219 q 77 647 0 534 q 317 775 166 775 q 534 656 456 775 l 534 748 l 724 748 l 724 48 m 368 167 q 492 237 447 167 q 530 382 530 297 q 490 529 530 466 q 364 603 444 603 q 240 532 284 603 q 201 386 201 471 q 240 239 201 300 q 368 167 286 167 "},"²":{x_min:0,x_max:463,ha:560,o:"m 463 791 q 365 627 463 706 q 151 483 258 555 l 455 483 l 455 382 l 0 382 q 84 565 0 488 q 244 672 97 576 q 331 784 331 727 q 299 850 331 824 q 228 876 268 876 q 159 848 187 876 q 132 762 132 820 l 10 762 q 78 924 10 866 q 228 976 137 976 q 392 925 322 976 q 463 791 463 874 "},"–":{x_min:0,x_max:704.171875,ha:801,o:"m 704 297 l 0 297 l 0 450 l 704 450 l 704 297 "},Κ:{x_min:0,x_max:899.671875,ha:969,o:"m 899 0 l 646 0 l 316 462 l 208 355 l 208 0 l 0 0 l 0 1013 l 208 1013 l 208 596 l 603 1013 l 863 1013 l 460 603 l 899 0 "},ƒ:{x_min:-46,x_max:440,ha:525,o:"m 440 609 l 316 609 l 149 -277 l -46 -277 l 121 609 l 14 609 l 14 749 l 121 749 q 159 949 121 894 q 344 1019 208 1019 l 440 1015 l 440 855 l 377 855 q 326 841 338 855 q 314 797 314 827 q 314 773 314 786 q 314 749 314 761 l 440 749 l 440 609 "},e:{x_min:0,x_max:708,ha:808,o:"m 708 321 l 207 321 q 254 186 207 236 q 362 141 298 141 q 501 227 453 141 l 700 227 q 566 36 662 104 q 362 -26 477 -26 q 112 72 213 -26 q 0 369 0 182 q 95 683 0 573 q 358 793 191 793 q 619 677 531 793 q 708 321 708 561 m 501 453 q 460 571 501 531 q 353 612 420 612 q 247 570 287 612 q 207 453 207 529 l 501 453 "},ό:{x_min:0,x_max:764,ha:863,o:"m 380 -25 q 105 87 211 -25 q 0 372 0 200 q 104 660 0 545 q 380 775 209 775 q 658 659 552 775 q 764 372 764 544 q 658 87 764 200 q 380 -25 552 -25 m 379 142 q 515 216 466 142 q 557 373 557 280 q 515 530 557 465 q 379 607 466 607 q 245 530 294 607 q 204 373 204 465 q 245 218 204 283 q 379 142 294 142 m 593 1039 l 391 823 l 293 823 l 415 1039 l 593 1039 "},J:{x_min:0,x_max:649,ha:760,o:"m 649 294 q 573 48 649 125 q 327 -29 497 -29 q 61 82 136 -29 q 0 375 0 173 l 200 375 l 199 309 q 219 194 199 230 q 321 145 249 145 q 418 193 390 145 q 441 307 441 232 l 441 1013 l 649 1013 l 649 294 "},"»":{x_min:-.234375,x_max:526,ha:624,o:"m 526 286 l 297 87 l 296 250 l 437 373 l 297 495 l 297 660 l 526 461 l 526 286 m 229 286 l 0 87 l 0 250 l 140 373 l 0 495 l 0 660 l 229 461 l 229 286 "},"©":{x_min:3,x_max:1007,ha:1104,o:"m 507 -6 q 129 153 269 -6 q 3 506 3 298 q 127 857 3 713 q 502 1017 266 1017 q 880 855 740 1017 q 1007 502 1007 711 q 882 152 1007 295 q 507 -6 743 -6 m 502 934 q 184 800 302 934 q 79 505 79 680 q 184 210 79 331 q 501 76 302 76 q 819 210 701 76 q 925 507 925 331 q 820 800 925 682 q 502 934 704 934 m 758 410 q 676 255 748 313 q 506 197 605 197 q 298 291 374 197 q 229 499 229 377 q 297 713 229 624 q 494 811 372 811 q 666 760 593 811 q 752 616 739 710 l 621 616 q 587 688 621 658 q 509 719 554 719 q 404 658 441 719 q 368 511 368 598 q 403 362 368 427 q 498 298 438 298 q 624 410 606 298 l 758 410 "},ώ:{x_min:0,x_max:945,ha:1051,o:"m 566 528 l 372 528 l 372 323 q 372 298 372 311 q 373 271 372 285 q 360 183 373 211 q 292 142 342 142 q 219 222 243 142 q 203 365 203 279 q 241 565 203 461 q 334 748 273 650 l 130 748 q 36 552 68 650 q 0 337 0 444 q 69 96 0 204 q 276 -29 149 -29 q 390 0 337 -29 q 470 78 444 28 q 551 0 495 30 q 668 -29 608 -29 q 874 96 793 -29 q 945 337 945 205 q 910 547 945 444 q 814 748 876 650 l 610 748 q 703 565 671 650 q 742 365 742 462 q 718 189 742 237 q 651 142 694 142 q 577 190 597 142 q 565 289 565 221 l 565 323 l 566 528 m 718 1039 l 516 823 l 417 823 l 540 1039 l 718 1039 "},"^":{x_min:197.21875,x_max:630.5625,ha:828,o:"m 630 836 l 536 836 l 413 987 l 294 836 l 197 836 l 331 1090 l 493 1090 l 630 836 "},"«":{x_min:0,x_max:526.546875,ha:624,o:"m 526 87 l 297 286 l 297 461 l 526 660 l 526 495 l 385 373 l 526 250 l 526 87 m 229 87 l 0 286 l 0 461 l 229 660 l 229 495 l 88 373 l 229 250 l 229 87 "},D:{x_min:0,x_max:864,ha:968,o:"m 400 1013 q 736 874 608 1013 q 864 523 864 735 q 717 146 864 293 q 340 0 570 0 l 0 0 l 0 1013 l 400 1013 m 398 837 l 206 837 l 206 182 l 372 182 q 584 276 507 182 q 657 504 657 365 q 594 727 657 632 q 398 837 522 837 "},"∙":{x_min:0,x_max:207,ha:304,o:"m 207 528 l 0 528 l 0 735 l 207 735 l 207 528 "},ÿ:{x_min:0,x_max:47,ha:125,o:"m 47 3 q 37 -7 47 -7 q 28 0 30 -7 q 39 -4 32 -4 q 45 3 45 -1 l 37 0 q 28 9 28 0 q 39 19 28 19 l 47 16 l 47 19 l 47 3 m 37 1 q 44 8 44 1 q 37 16 44 16 q 30 8 30 16 q 37 1 30 1 m 26 1 l 23 22 l 14 0 l 3 22 l 3 3 l 0 25 l 13 1 l 22 25 l 26 1 "},w:{x_min:0,x_max:1056.953125,ha:1150,o:"m 1056 749 l 848 0 l 647 0 l 527 536 l 412 0 l 211 0 l 0 749 l 202 749 l 325 226 l 429 748 l 633 748 l 740 229 l 864 749 l 1056 749 "},$:{x_min:0,x_max:704,ha:800,o:"m 682 693 l 495 693 q 468 782 491 749 q 391 831 441 824 l 391 579 q 633 462 562 534 q 704 259 704 389 q 616 57 704 136 q 391 -22 528 -22 l 391 -156 l 308 -156 l 308 -22 q 76 69 152 -7 q 0 300 0 147 l 183 300 q 215 191 190 230 q 308 128 245 143 l 308 414 q 84 505 157 432 q 12 700 12 578 q 89 902 12 824 q 308 981 166 981 l 308 1069 l 391 1069 l 391 981 q 595 905 521 981 q 682 693 670 829 m 308 599 l 308 831 q 228 796 256 831 q 200 712 200 762 q 225 642 200 668 q 308 599 251 617 m 391 128 q 476 174 449 140 q 504 258 504 207 q 391 388 504 354 l 391 128 "},"\\":{x_min:-.03125,x_max:434.765625,ha:532,o:"m 434 -128 l 341 -128 l 0 1039 l 91 1040 l 434 -128 "},µ:{x_min:0,x_max:647,ha:754,o:"m 647 0 l 478 0 l 478 68 q 412 9 448 30 q 330 -11 375 -11 q 261 3 296 -11 q 199 43 226 18 l 199 -277 l 0 -277 l 0 749 l 199 749 l 199 358 q 216 221 199 267 q 322 151 244 151 q 435 240 410 151 q 448 401 448 283 l 448 749 l 647 749 l 647 0 "},Ι:{x_min:42,x_max:250,ha:413,o:"m 250 0 l 42 0 l 42 1013 l 250 1013 l 250 0 "},Ύ:{x_min:0,x_max:1211.15625,ha:1289,o:"m 1211 1012 l 907 376 l 907 0 l 697 0 l 697 376 l 374 1012 l 583 1012 l 802 576 l 1001 1012 l 1211 1012 m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 "},"’":{x_min:0,x_max:192,ha:289,o:"m 192 834 q 137 692 192 751 q 0 626 83 634 l 0 697 q 101 831 101 723 l 0 831 l 0 1013 l 192 1013 l 192 834 "},Ν:{x_min:0,x_max:833,ha:946,o:"m 833 0 l 617 0 l 206 696 l 206 0 l 0 0 l 0 1013 l 216 1013 l 629 315 l 629 1013 l 833 1013 l 833 0 "},"-":{x_min:27.78125,x_max:413.890625,ha:525,o:"m 413 279 l 27 279 l 27 468 l 413 468 l 413 279 "},Q:{x_min:0,x_max:995.59375,ha:1096,o:"m 995 49 l 885 -70 l 762 42 q 641 -12 709 4 q 497 -29 572 -29 q 135 123 271 -29 q 0 504 0 276 q 131 881 0 731 q 497 1040 270 1040 q 859 883 719 1040 q 994 506 994 731 q 966 321 994 413 q 884 152 938 229 l 995 49 m 730 299 q 767 395 755 344 q 779 504 779 446 q 713 743 779 644 q 505 857 638 857 q 284 745 366 857 q 210 501 210 644 q 279 265 210 361 q 492 157 357 157 q 615 181 557 157 l 508 287 l 620 405 l 730 299 "},ς:{x_min:0,x_max:731.78125,ha:768,o:"m 731 448 l 547 448 q 485 571 531 533 q 369 610 440 610 q 245 537 292 610 q 204 394 204 473 q 322 186 204 238 q 540 133 430 159 q 659 -15 659 98 q 643 -141 659 -80 q 595 -278 627 -202 l 423 -278 q 458 -186 448 -215 q 474 -88 474 -133 q 352 0 474 -27 q 123 80 181 38 q 0 382 0 170 q 98 660 0 549 q 367 777 202 777 q 622 683 513 777 q 731 448 731 589 "},M:{x_min:0,x_max:1019,ha:1135,o:"m 1019 0 l 823 0 l 823 819 l 618 0 l 402 0 l 194 818 l 194 0 l 0 0 l 0 1013 l 309 1012 l 510 241 l 707 1013 l 1019 1013 l 1019 0 "},Ψ:{x_min:0,x_max:995,ha:1085,o:"m 995 698 q 924 340 995 437 q 590 200 841 227 l 590 0 l 404 0 l 404 200 q 70 340 152 227 q 0 698 0 437 l 0 1013 l 188 1013 l 188 694 q 212 472 188 525 q 404 383 254 383 l 404 1013 l 590 1013 l 590 383 q 781 472 740 383 q 807 694 807 525 l 807 1013 l 995 1013 l 995 698 "},C:{x_min:0,x_max:970.828125,ha:1043,o:"m 970 345 q 802 70 933 169 q 490 -29 672 -29 q 130 130 268 -29 q 0 506 0 281 q 134 885 0 737 q 502 1040 275 1040 q 802 939 668 1040 q 965 679 936 838 l 745 679 q 649 809 716 761 q 495 857 582 857 q 283 747 361 857 q 214 508 214 648 q 282 267 214 367 q 493 154 359 154 q 651 204 584 154 q 752 345 718 255 l 970 345 "},"!":{x_min:0,x_max:204,ha:307,o:"m 204 739 q 182 515 204 686 q 152 282 167 398 l 52 282 q 13 589 27 473 q 0 739 0 704 l 0 1013 l 204 1013 l 204 739 m 204 0 l 0 0 l 0 203 l 204 203 l 204 0 "},"{":{x_min:0,x_max:501.390625,ha:599,o:"m 501 -285 q 229 -209 301 -285 q 176 -35 176 -155 q 182 47 176 -8 q 189 126 189 103 q 156 245 189 209 q 0 294 112 294 l 0 438 q 154 485 111 438 q 189 603 189 522 q 186 666 189 636 q 176 783 176 772 q 231 945 176 894 q 501 1015 306 1015 l 501 872 q 370 833 408 872 q 340 737 340 801 q 342 677 340 705 q 353 569 353 579 q 326 451 353 496 q 207 366 291 393 q 327 289 294 346 q 353 164 353 246 q 348 79 353 132 q 344 17 344 26 q 372 -95 344 -58 q 501 -141 408 -141 l 501 -285 "},X:{x_min:0,x_max:894.453125,ha:999,o:"m 894 0 l 654 0 l 445 351 l 238 0 l 0 0 l 316 516 l 0 1013 l 238 1013 l 445 659 l 652 1013 l 894 1013 l 577 519 l 894 0 "},"#":{x_min:0,x_max:1019.453125,ha:1117,o:"m 1019 722 l 969 582 l 776 581 l 717 417 l 919 417 l 868 279 l 668 278 l 566 -6 l 413 -5 l 516 279 l 348 279 l 247 -6 l 94 -6 l 196 278 l 0 279 l 49 417 l 245 417 l 304 581 l 98 582 l 150 722 l 354 721 l 455 1006 l 606 1006 l 507 721 l 673 722 l 776 1006 l 927 1006 l 826 721 l 1019 722 m 627 581 l 454 581 l 394 417 l 567 417 l 627 581 "},ι:{x_min:42,x_max:242,ha:389,o:"m 242 0 l 42 0 l 42 749 l 242 749 l 242 0 "},Ά:{x_min:0,x_max:995.828125,ha:1072,o:"m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 m 995 0 l 776 0 l 708 208 l 315 208 l 247 0 l 29 0 l 390 1012 l 629 1012 l 995 0 m 652 376 l 509 809 l 369 376 l 652 376 "},")":{x_min:0,x_max:389,ha:486,o:"m 389 357 q 319 14 389 187 q 145 -293 259 -134 l 0 -293 q 139 22 90 -142 q 189 358 189 187 q 139 689 189 525 q 0 1013 90 853 l 145 1013 q 319 703 258 857 q 389 357 389 528 "},ε:{x_min:16.671875,x_max:652.78125,ha:742,o:"m 652 259 q 565 49 652 123 q 340 -25 479 -25 q 102 39 188 -25 q 16 197 16 104 q 45 299 16 249 q 134 390 75 348 q 58 456 86 419 q 25 552 25 502 q 120 717 25 653 q 322 776 208 776 q 537 710 456 776 q 625 508 625 639 l 445 508 q 415 585 445 563 q 327 608 386 608 q 254 590 293 608 q 215 544 215 573 q 252 469 215 490 q 336 453 280 453 q 369 455 347 453 q 400 456 391 456 l 400 308 l 329 308 q 247 291 280 308 q 204 223 204 269 q 255 154 204 172 q 345 143 286 143 q 426 174 398 143 q 454 259 454 206 l 652 259 "},Δ:{x_min:0,x_max:981.953125,ha:1057,o:"m 981 0 l 0 0 l 386 1013 l 594 1013 l 981 0 m 715 175 l 490 765 l 266 175 l 715 175 "},"}":{x_min:0,x_max:500,ha:597,o:"m 500 294 q 348 246 390 294 q 315 128 315 209 q 320 42 315 101 q 326 -48 326 -17 q 270 -214 326 -161 q 0 -285 196 -285 l 0 -141 q 126 -97 90 -141 q 154 8 154 -64 q 150 91 154 37 q 146 157 146 145 q 172 281 146 235 q 294 366 206 339 q 173 451 208 390 q 146 576 146 500 q 150 655 146 603 q 154 731 154 708 q 126 831 154 799 q 0 872 90 872 l 0 1015 q 270 944 196 1015 q 326 777 326 891 q 322 707 326 747 q 313 593 313 612 q 347 482 313 518 q 500 438 390 438 l 500 294 "},"‰":{x_min:0,x_max:1681,ha:1775,o:"m 861 484 q 1048 404 979 484 q 1111 228 1111 332 q 1048 51 1111 123 q 859 -29 979 -29 q 672 50 740 -29 q 610 227 610 122 q 672 403 610 331 q 861 484 741 484 m 861 120 q 939 151 911 120 q 967 226 967 183 q 942 299 967 270 q 861 333 912 333 q 783 301 811 333 q 756 226 756 269 q 783 151 756 182 q 861 120 810 120 m 904 984 l 316 -28 l 205 -29 l 793 983 l 904 984 m 250 984 q 436 904 366 984 q 499 730 499 832 q 436 552 499 626 q 248 472 366 472 q 62 552 132 472 q 0 728 0 624 q 62 903 0 831 q 250 984 132 984 m 249 835 q 169 801 198 835 q 140 725 140 768 q 167 652 140 683 q 247 621 195 621 q 327 654 298 621 q 357 730 357 687 q 329 803 357 772 q 249 835 301 835 m 1430 484 q 1618 404 1548 484 q 1681 228 1681 332 q 1618 51 1681 123 q 1429 -29 1548 -29 q 1241 50 1309 -29 q 1179 227 1179 122 q 1241 403 1179 331 q 1430 484 1311 484 m 1431 120 q 1509 151 1481 120 q 1537 226 1537 183 q 1511 299 1537 270 q 1431 333 1482 333 q 1352 301 1380 333 q 1325 226 1325 269 q 1352 151 1325 182 q 1431 120 1379 120 "},a:{x_min:0,x_max:700,ha:786,o:"m 700 0 l 488 0 q 465 93 469 45 q 365 5 427 37 q 233 -26 303 -26 q 65 37 130 -26 q 0 205 0 101 q 120 409 0 355 q 343 452 168 431 q 465 522 465 468 q 424 588 465 565 q 337 611 384 611 q 250 581 285 611 q 215 503 215 552 l 26 503 q 113 707 26 633 q 328 775 194 775 q 538 723 444 775 q 657 554 657 659 l 657 137 q 666 73 657 101 q 700 33 675 45 l 700 0 m 465 297 l 465 367 q 299 322 358 340 q 193 217 193 287 q 223 150 193 174 q 298 127 254 127 q 417 175 370 127 q 465 297 465 224 "},"—":{x_min:0,x_max:941.671875,ha:1039,o:"m 941 297 l 0 297 l 0 450 l 941 450 l 941 297 "},"=":{x_min:29.171875,x_max:798.609375,ha:828,o:"m 798 502 l 29 502 l 29 635 l 798 635 l 798 502 m 798 204 l 29 204 l 29 339 l 798 339 l 798 204 "},N:{x_min:0,x_max:833,ha:949,o:"m 833 0 l 617 0 l 206 695 l 206 0 l 0 0 l 0 1013 l 216 1013 l 629 315 l 629 1013 l 833 1013 l 833 0 "},ρ:{x_min:0,x_max:722,ha:810,o:"m 364 -17 q 271 0 313 -17 q 194 48 230 16 l 194 -278 l 0 -278 l 0 370 q 87 656 0 548 q 358 775 183 775 q 626 655 524 775 q 722 372 722 541 q 621 95 722 208 q 364 -17 520 -17 m 360 607 q 237 529 280 607 q 201 377 201 463 q 234 229 201 292 q 355 147 277 147 q 467 210 419 147 q 515 374 515 273 q 471 537 515 468 q 360 607 428 607 "},"¯":{x_min:0,x_max:775,ha:771,o:"m 775 958 l 0 958 l 0 1111 l 775 1111 l 775 958 "},Z:{x_min:0,x_max:804.171875,ha:906,o:"m 804 836 l 251 182 l 793 182 l 793 0 l 0 0 l 0 176 l 551 830 l 11 830 l 11 1013 l 804 1013 l 804 836 "},u:{x_min:0,x_max:668,ha:782,o:"m 668 0 l 474 0 l 474 89 q 363 9 425 37 q 233 -19 301 -19 q 61 53 123 -19 q 0 239 0 126 l 0 749 l 199 749 l 199 296 q 225 193 199 233 q 316 146 257 146 q 424 193 380 146 q 469 304 469 240 l 469 749 l 668 749 l 668 0 "},k:{x_min:0,x_max:688.890625,ha:771,o:"m 688 0 l 450 0 l 270 316 l 196 237 l 196 0 l 0 0 l 0 1013 l 196 1013 l 196 483 l 433 748 l 675 748 l 413 469 l 688 0 "},Η:{x_min:0,x_max:837,ha:950,o:"m 837 0 l 627 0 l 627 450 l 210 450 l 210 0 l 0 0 l 0 1013 l 210 1013 l 210 635 l 627 635 l 627 1013 l 837 1013 l 837 0 "},Α:{x_min:0,x_max:966.671875,ha:1043,o:"m 966 0 l 747 0 l 679 208 l 286 208 l 218 0 l 0 0 l 361 1013 l 600 1013 l 966 0 m 623 376 l 480 809 l 340 376 l 623 376 "},s:{x_min:0,x_max:681,ha:775,o:"m 681 229 q 568 33 681 105 q 340 -29 471 -29 q 107 39 202 -29 q 0 245 0 114 l 201 245 q 252 155 201 189 q 358 128 295 128 q 436 144 401 128 q 482 205 482 166 q 363 284 482 255 q 143 348 181 329 q 25 533 25 408 q 129 716 25 647 q 340 778 220 778 q 554 710 465 778 q 658 522 643 643 l 463 522 q 419 596 458 570 q 327 622 380 622 q 255 606 290 622 q 221 556 221 590 q 339 473 221 506 q 561 404 528 420 q 681 229 681 344 "},B:{x_min:0,x_max:835,ha:938,o:"m 674 547 q 791 450 747 518 q 835 304 835 383 q 718 75 835 158 q 461 0 612 0 l 0 0 l 0 1013 l 477 1013 q 697 951 609 1013 q 797 754 797 880 q 765 630 797 686 q 674 547 734 575 m 438 621 q 538 646 495 621 q 590 730 590 676 q 537 814 590 785 q 436 838 494 838 l 199 838 l 199 621 l 438 621 m 445 182 q 561 211 513 182 q 618 311 618 247 q 565 410 618 375 q 444 446 512 446 l 199 446 l 199 182 l 445 182 "},"…":{x_min:0,x_max:819,ha:963,o:"m 206 0 l 0 0 l 0 207 l 206 207 l 206 0 m 512 0 l 306 0 l 306 207 l 512 207 l 512 0 m 819 0 l 613 0 l 613 207 l 819 207 l 819 0 "},"?":{x_min:1,x_max:687,ha:785,o:"m 687 734 q 621 563 687 634 q 501 454 560 508 q 436 293 436 386 l 251 293 l 251 391 q 363 557 251 462 q 476 724 476 653 q 432 827 476 788 q 332 866 389 866 q 238 827 275 866 q 195 699 195 781 l 1 699 q 110 955 1 861 q 352 1040 210 1040 q 582 963 489 1040 q 687 734 687 878 m 446 0 l 243 0 l 243 203 l 446 203 l 446 0 "},H:{x_min:0,x_max:838,ha:953,o:"m 838 0 l 628 0 l 628 450 l 210 450 l 210 0 l 0 0 l 0 1013 l 210 1013 l 210 635 l 628 635 l 628 1013 l 838 1013 l 838 0 "},ν:{x_min:0,x_max:740.28125,ha:828,o:"m 740 749 l 473 0 l 266 0 l 0 749 l 222 749 l 373 211 l 529 749 l 740 749 "},c:{x_min:0,x_max:751.390625,ha:828,o:"m 751 282 q 625 58 725 142 q 384 -26 526 -26 q 107 84 215 -26 q 0 366 0 195 q 98 651 0 536 q 370 774 204 774 q 616 700 518 774 q 751 486 715 626 l 536 486 q 477 570 516 538 q 380 607 434 607 q 248 533 298 607 q 204 378 204 466 q 242 219 204 285 q 377 139 290 139 q 483 179 438 139 q 543 282 527 220 l 751 282 "},"¶":{x_min:0,x_max:566.671875,ha:678,o:"m 21 892 l 52 892 l 98 761 l 145 892 l 176 892 l 178 741 l 157 741 l 157 867 l 108 741 l 88 741 l 40 871 l 40 741 l 21 741 l 21 892 m 308 854 l 308 731 q 252 691 308 691 q 227 691 240 691 q 207 696 213 695 l 207 712 l 253 706 q 288 733 288 706 l 288 763 q 244 741 279 741 q 193 797 193 741 q 261 860 193 860 q 287 860 273 860 q 308 854 302 855 m 288 842 l 263 843 q 213 796 213 843 q 248 756 213 756 q 288 796 288 756 l 288 842 m 566 988 l 502 988 l 502 -1 l 439 -1 l 439 988 l 317 988 l 317 -1 l 252 -1 l 252 602 q 81 653 155 602 q 0 805 0 711 q 101 989 0 918 q 309 1053 194 1053 l 566 1053 l 566 988 "},β:{x_min:0,x_max:703,ha:789,o:"m 510 539 q 651 429 600 501 q 703 262 703 357 q 617 53 703 136 q 404 -29 532 -29 q 199 51 279 -29 l 199 -278 l 0 -278 l 0 627 q 77 911 0 812 q 343 1021 163 1021 q 551 957 464 1021 q 649 769 649 886 q 613 638 649 697 q 510 539 577 579 m 344 136 q 452 181 408 136 q 497 291 497 227 q 435 409 497 369 q 299 444 381 444 l 299 600 q 407 634 363 600 q 452 731 452 669 q 417 820 452 784 q 329 857 382 857 q 217 775 246 857 q 199 622 199 725 l 199 393 q 221 226 199 284 q 344 136 254 136 "},Μ:{x_min:0,x_max:1019,ha:1132,o:"m 1019 0 l 823 0 l 823 818 l 617 0 l 402 0 l 194 818 l 194 0 l 0 0 l 0 1013 l 309 1013 l 509 241 l 708 1013 l 1019 1013 l 1019 0 "},Ό:{x_min:.15625,x_max:1174,ha:1271,o:"m 676 -29 q 312 127 451 -29 q 179 505 179 277 q 311 883 179 733 q 676 1040 449 1040 q 1040 883 901 1040 q 1174 505 1174 733 q 1041 127 1174 277 q 676 -29 903 -29 m 676 154 q 890 266 811 154 q 961 506 961 366 q 891 745 961 648 q 676 857 812 857 q 462 747 541 857 q 392 506 392 648 q 461 266 392 365 q 676 154 540 154 m 314 1034 l 98 779 l 0 779 l 136 1034 l 314 1034 "},Ή:{x_min:0,x_max:1248,ha:1361,o:"m 1248 0 l 1038 0 l 1038 450 l 621 450 l 621 0 l 411 0 l 411 1012 l 621 1012 l 621 635 l 1038 635 l 1038 1012 l 1248 1012 l 1248 0 m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 "},"•":{x_min:-27.78125,x_max:691.671875,ha:775,o:"m 691 508 q 588 252 691 358 q 331 147 486 147 q 77 251 183 147 q -27 508 -27 355 q 75 761 -27 655 q 331 868 179 868 q 585 763 479 868 q 691 508 691 658 "},"¥":{x_min:0,x_max:836,ha:931,o:"m 195 625 l 0 1013 l 208 1013 l 427 576 l 626 1013 l 836 1013 l 650 625 l 777 625 l 777 472 l 578 472 l 538 389 l 777 389 l 777 236 l 532 236 l 532 0 l 322 0 l 322 236 l 79 236 l 79 389 l 315 389 l 273 472 l 79 472 l 79 625 l 195 625 "},"(":{x_min:0,x_max:388.890625,ha:486,o:"m 388 -293 l 243 -293 q 70 14 130 -134 q 0 357 0 189 q 69 703 0 526 q 243 1013 129 856 l 388 1013 q 248 695 297 860 q 200 358 200 530 q 248 24 200 187 q 388 -293 297 -138 "},U:{x_min:0,x_max:813,ha:926,o:"m 813 362 q 697 79 813 187 q 405 -29 582 -29 q 114 78 229 -29 q 0 362 0 186 l 0 1013 l 210 1013 l 210 387 q 260 226 210 291 q 408 154 315 154 q 554 226 500 154 q 603 387 603 291 l 603 1013 l 813 1013 l 813 362 "},γ:{x_min:.0625,x_max:729.234375,ha:815,o:"m 729 749 l 457 37 l 457 -278 l 257 -278 l 257 37 q 218 155 243 95 q 170 275 194 215 l 0 749 l 207 749 l 363 284 l 522 749 l 729 749 "},α:{x_min:-1,x_max:722,ha:835,o:"m 722 0 l 531 0 l 530 101 q 433 8 491 41 q 304 -25 375 -25 q 72 104 157 -25 q -1 372 -1 216 q 72 643 -1 530 q 308 775 158 775 q 433 744 375 775 q 528 656 491 713 l 528 749 l 722 749 l 722 0 m 361 601 q 233 527 277 601 q 196 375 196 464 q 232 224 196 288 q 358 144 277 144 q 487 217 441 144 q 528 370 528 281 q 489 523 528 457 q 361 601 443 601 "},F:{x_min:0,x_max:706.953125,ha:778,o:"m 706 837 l 206 837 l 206 606 l 645 606 l 645 431 l 206 431 l 206 0 l 0 0 l 0 1013 l 706 1013 l 706 837 "},"­":{x_min:0,x_max:704.171875,ha:801,o:"m 704 297 l 0 297 l 0 450 l 704 450 l 704 297 "},":":{x_min:0,x_max:207,ha:304,o:"m 207 528 l 0 528 l 0 735 l 207 735 l 207 528 m 207 0 l 0 0 l 0 207 l 207 207 l 207 0 "},Χ:{x_min:0,x_max:894.453125,ha:978,o:"m 894 0 l 654 0 l 445 351 l 238 0 l 0 0 l 316 516 l 0 1013 l 238 1013 l 445 660 l 652 1013 l 894 1013 l 577 519 l 894 0 "},"*":{x_min:115,x_max:713,ha:828,o:"m 713 740 l 518 688 l 651 525 l 531 438 l 412 612 l 290 439 l 173 523 l 308 688 l 115 741 l 159 880 l 342 816 l 343 1013 l 482 1013 l 481 816 l 664 880 l 713 740 "},"†":{x_min:0,x_max:809,ha:894,o:"m 509 804 l 809 804 l 809 621 l 509 621 l 509 0 l 299 0 l 299 621 l 0 621 l 0 804 l 299 804 l 299 1011 l 509 1011 l 509 804 "},"°":{x_min:-1,x_max:363,ha:460,o:"m 181 808 q 46 862 94 808 q -1 992 -1 917 q 44 1118 -1 1066 q 181 1175 96 1175 q 317 1118 265 1175 q 363 991 363 1066 q 315 862 363 917 q 181 808 267 808 m 181 908 q 240 933 218 908 q 263 992 263 958 q 242 1051 263 1027 q 181 1075 221 1075 q 120 1050 142 1075 q 99 991 99 1026 q 120 933 99 958 q 181 908 142 908 "},V:{x_min:0,x_max:895.828125,ha:997,o:"m 895 1013 l 550 0 l 347 0 l 0 1013 l 231 1013 l 447 256 l 666 1013 l 895 1013 "},Ξ:{x_min:0,x_max:751.390625,ha:800,o:"m 733 826 l 5 826 l 5 1012 l 733 1012 l 733 826 m 681 432 l 65 432 l 65 617 l 681 617 l 681 432 m 751 0 l 0 0 l 0 183 l 751 183 l 751 0 "}," ":{x_min:0,x_max:0,ha:853},Ϋ:{x_min:-.21875,x_max:836.171875,ha:914,o:"m 610 1046 l 454 1046 l 454 1215 l 610 1215 l 610 1046 m 369 1046 l 212 1046 l 212 1215 l 369 1215 l 369 1046 m 836 1012 l 532 376 l 532 0 l 322 0 l 322 376 l 0 1012 l 208 1012 l 427 576 l 626 1012 l 836 1012 "},"”":{x_min:0,x_max:469,ha:567,o:"m 192 834 q 137 692 192 751 q 0 626 83 634 l 0 697 q 101 831 101 723 l 0 831 l 0 1013 l 192 1013 l 192 834 m 469 834 q 414 692 469 751 q 277 626 360 634 l 277 697 q 379 831 379 723 l 277 831 l 277 1013 l 469 1013 l 469 834 "},"@":{x_min:0,x_max:1276,ha:1374,o:"m 1115 -52 q 895 -170 1015 -130 q 647 -211 776 -211 q 158 -34 334 -211 q 0 360 0 123 q 179 810 0 621 q 698 1019 377 1019 q 1138 859 981 1019 q 1276 514 1276 720 q 1173 210 1276 335 q 884 75 1062 75 q 784 90 810 75 q 737 186 749 112 q 647 104 698 133 q 532 75 596 75 q 360 144 420 75 q 308 308 308 205 q 398 568 308 451 q 638 696 497 696 q 731 671 690 696 q 805 604 772 647 l 840 673 l 964 673 q 886 373 915 490 q 856 239 856 257 q 876 201 856 214 q 920 188 895 188 q 1084 284 1019 188 q 1150 511 1150 380 q 1051 779 1150 672 q 715 905 934 905 q 272 734 439 905 q 121 363 121 580 q 250 41 121 170 q 647 -103 394 -103 q 863 -67 751 -103 q 1061 26 975 -32 l 1115 -52 m 769 483 q 770 500 770 489 q 733 567 770 539 q 651 596 695 596 q 508 504 566 596 q 457 322 457 422 q 483 215 457 256 q 561 175 509 175 q 671 221 625 175 q 733 333 718 268 l 769 483 "},Ί:{x_min:0,x_max:619,ha:732,o:"m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 m 619 0 l 411 0 l 411 1012 l 619 1012 l 619 0 "},i:{x_min:14,x_max:214,ha:326,o:"m 214 830 l 14 830 l 14 1013 l 214 1013 l 214 830 m 214 0 l 14 0 l 14 748 l 214 748 l 214 0 "},Β:{x_min:0,x_max:835,ha:961,o:"m 675 547 q 791 450 747 518 q 835 304 835 383 q 718 75 835 158 q 461 0 612 0 l 0 0 l 0 1013 l 477 1013 q 697 951 609 1013 q 797 754 797 880 q 766 630 797 686 q 675 547 734 575 m 439 621 q 539 646 496 621 q 590 730 590 676 q 537 814 590 785 q 436 838 494 838 l 199 838 l 199 621 l 439 621 m 445 182 q 561 211 513 182 q 618 311 618 247 q 565 410 618 375 q 444 446 512 446 l 199 446 l 199 182 l 445 182 "},υ:{x_min:0,x_max:656,ha:767,o:"m 656 416 q 568 55 656 145 q 326 -25 490 -25 q 59 97 137 -25 q 0 369 0 191 l 0 749 l 200 749 l 200 369 q 216 222 200 268 q 326 142 245 142 q 440 247 411 142 q 456 422 456 304 l 456 749 l 656 749 l 656 416 "},"]":{x_min:0,x_max:349,ha:446,o:"m 349 -300 l 0 -300 l 0 -154 l 163 -154 l 163 866 l 0 866 l 0 1013 l 349 1013 l 349 -300 "},m:{x_min:0,x_max:1065,ha:1174,o:"m 1065 0 l 866 0 l 866 483 q 836 564 866 532 q 759 596 807 596 q 663 555 700 596 q 627 454 627 514 l 627 0 l 433 0 l 433 481 q 403 563 433 531 q 323 596 374 596 q 231 554 265 596 q 197 453 197 513 l 197 0 l 0 0 l 0 748 l 189 748 l 189 665 q 279 745 226 715 q 392 775 333 775 q 509 744 455 775 q 606 659 563 713 q 695 744 640 713 q 814 775 749 775 q 992 702 920 775 q 1065 523 1065 630 l 1065 0 "},χ:{x_min:0,x_max:759.71875,ha:847,o:"m 759 -299 l 548 -299 l 379 66 l 215 -299 l 0 -299 l 261 233 l 13 749 l 230 749 l 379 400 l 527 749 l 738 749 l 500 238 l 759 -299 "},ί:{x_min:42,x_max:371.171875,ha:389,o:"m 242 0 l 42 0 l 42 748 l 242 748 l 242 0 m 371 1039 l 169 823 l 71 823 l 193 1039 l 371 1039 "},Ζ:{x_min:0,x_max:804.171875,ha:886,o:"m 804 835 l 251 182 l 793 182 l 793 0 l 0 0 l 0 176 l 551 829 l 11 829 l 11 1012 l 804 1012 l 804 835 "},R:{x_min:0,x_max:836.109375,ha:947,o:"m 836 0 l 608 0 q 588 53 596 20 q 581 144 581 86 q 581 179 581 162 q 581 215 581 197 q 553 345 581 306 q 428 393 518 393 l 208 393 l 208 0 l 0 0 l 0 1013 l 491 1013 q 720 944 630 1013 q 819 734 819 869 q 778 584 819 654 q 664 485 738 513 q 757 415 727 463 q 794 231 794 358 l 794 170 q 800 84 794 116 q 836 31 806 51 l 836 0 m 462 838 l 208 838 l 208 572 l 452 572 q 562 604 517 572 q 612 704 612 640 q 568 801 612 765 q 462 838 525 838 "},o:{x_min:0,x_max:764,ha:871,o:"m 380 -26 q 105 86 211 -26 q 0 371 0 199 q 104 660 0 545 q 380 775 209 775 q 658 659 552 775 q 764 371 764 544 q 658 86 764 199 q 380 -26 552 -26 m 379 141 q 515 216 466 141 q 557 373 557 280 q 515 530 557 465 q 379 607 466 607 q 245 530 294 607 q 204 373 204 465 q 245 217 204 282 q 379 141 294 141 "},K:{x_min:0,x_max:900,ha:996,o:"m 900 0 l 647 0 l 316 462 l 208 355 l 208 0 l 0 0 l 0 1013 l 208 1013 l 208 595 l 604 1013 l 863 1013 l 461 603 l 900 0 "},",":{x_min:0,x_max:206,ha:303,o:"m 206 5 q 150 -151 206 -88 q 0 -238 94 -213 l 0 -159 q 84 -100 56 -137 q 111 -2 111 -62 l 0 -2 l 0 205 l 206 205 l 206 5 "},d:{x_min:0,x_max:722,ha:836,o:"m 722 0 l 530 0 l 530 101 q 303 -26 449 -26 q 72 103 155 -26 q 0 373 0 214 q 72 642 0 528 q 305 775 156 775 q 433 743 373 775 q 530 656 492 712 l 530 1013 l 722 1013 l 722 0 m 361 600 q 234 523 280 600 q 196 372 196 458 q 233 220 196 286 q 358 143 278 143 q 489 216 442 143 q 530 369 530 280 q 491 522 530 456 q 361 600 443 600 "},"¨":{x_min:212,x_max:609,ha:933,o:"m 609 1046 l 453 1046 l 453 1216 l 609 1216 l 609 1046 m 369 1046 l 212 1046 l 212 1216 l 369 1216 l 369 1046 "},E:{x_min:0,x_max:761.109375,ha:824,o:"m 761 0 l 0 0 l 0 1013 l 734 1013 l 734 837 l 206 837 l 206 621 l 690 621 l 690 446 l 206 446 l 206 186 l 761 186 l 761 0 "},Y:{x_min:0,x_max:836,ha:931,o:"m 836 1013 l 532 376 l 532 0 l 322 0 l 322 376 l 0 1013 l 208 1013 l 427 576 l 626 1013 l 836 1013 "},'"':{x_min:0,x_max:357,ha:454,o:"m 357 604 l 225 604 l 225 988 l 357 988 l 357 604 m 132 604 l 0 604 l 0 988 l 132 988 l 132 604 "},"‹":{x_min:35.984375,x_max:791.671875,ha:828,o:"m 791 17 l 36 352 l 35 487 l 791 823 l 791 672 l 229 421 l 791 168 l 791 17 "},"„":{x_min:0,x_max:483,ha:588,o:"m 206 5 q 150 -151 206 -88 q 0 -238 94 -213 l 0 -159 q 84 -100 56 -137 q 111 -2 111 -62 l 0 -2 l 0 205 l 206 205 l 206 5 m 483 5 q 427 -151 483 -88 q 277 -238 371 -213 l 277 -159 q 361 -100 334 -137 q 388 -2 388 -62 l 277 -2 l 277 205 l 483 205 l 483 5 "},δ:{x_min:6,x_max:732,ha:835,o:"m 732 352 q 630 76 732 177 q 354 -25 529 -25 q 101 74 197 -25 q 6 333 6 174 q 89 581 6 480 q 323 690 178 690 q 66 864 201 787 l 66 1013 l 669 1013 l 669 856 l 348 856 q 532 729 461 789 q 673 566 625 651 q 732 352 732 465 m 419 551 q 259 496 321 551 q 198 344 198 441 q 238 208 198 267 q 357 140 283 140 q 484 203 437 140 q 526 344 526 260 q 499 466 526 410 q 419 551 473 521 "},έ:{x_min:16.671875,x_max:652.78125,ha:742,o:"m 652 259 q 565 49 652 123 q 340 -25 479 -25 q 102 39 188 -25 q 16 197 16 104 q 45 299 16 250 q 134 390 75 348 q 58 456 86 419 q 25 552 25 502 q 120 717 25 653 q 322 776 208 776 q 537 710 456 776 q 625 508 625 639 l 445 508 q 415 585 445 563 q 327 608 386 608 q 254 590 293 608 q 215 544 215 573 q 252 469 215 490 q 336 453 280 453 q 369 455 347 453 q 400 456 391 456 l 400 308 l 329 308 q 247 291 280 308 q 204 223 204 269 q 255 154 204 172 q 345 143 286 143 q 426 174 398 143 q 454 259 454 206 l 652 259 m 579 1039 l 377 823 l 279 823 l 401 1039 l 579 1039 "},ω:{x_min:0,x_max:945,ha:1051,o:"m 565 323 l 565 289 q 577 190 565 221 q 651 142 597 142 q 718 189 694 142 q 742 365 742 237 q 703 565 742 462 q 610 749 671 650 l 814 749 q 910 547 876 650 q 945 337 945 444 q 874 96 945 205 q 668 -29 793 -29 q 551 0 608 -29 q 470 78 495 30 q 390 0 444 28 q 276 -29 337 -29 q 69 96 149 -29 q 0 337 0 204 q 36 553 0 444 q 130 749 68 650 l 334 749 q 241 565 273 650 q 203 365 203 461 q 219 222 203 279 q 292 142 243 142 q 360 183 342 142 q 373 271 373 211 q 372 298 372 285 q 372 323 372 311 l 372 528 l 566 528 l 565 323 "},"´":{x_min:0,x_max:132,ha:299,o:"m 132 604 l 0 604 l 0 988 l 132 988 l 132 604 "},"±":{x_min:29,x_max:798,ha:828,o:"m 798 480 l 484 480 l 484 254 l 344 254 l 344 480 l 29 480 l 29 615 l 344 615 l 344 842 l 484 842 l 484 615 l 798 615 l 798 480 m 798 0 l 29 0 l 29 136 l 798 136 l 798 0 "},"|":{x_min:0,x_max:143,ha:240,o:"m 143 462 l 0 462 l 0 984 l 143 984 l 143 462 m 143 -242 l 0 -242 l 0 280 l 143 280 l 143 -242 "},ϋ:{x_min:0,x_max:656,ha:767,o:"m 535 810 l 406 810 l 406 952 l 535 952 l 535 810 m 271 810 l 142 810 l 142 952 l 271 952 l 271 810 m 656 417 q 568 55 656 146 q 326 -25 490 -25 q 59 97 137 -25 q 0 369 0 192 l 0 748 l 200 748 l 200 369 q 216 222 200 268 q 326 142 245 142 q 440 247 411 142 q 456 422 456 304 l 456 748 l 656 748 l 656 417 "},"§":{x_min:0,x_max:633,ha:731,o:"m 633 469 q 601 356 633 406 q 512 274 569 305 q 570 197 548 242 q 593 105 593 152 q 501 -76 593 -5 q 301 -142 416 -142 q 122 -82 193 -142 q 43 108 43 -15 l 212 108 q 251 27 220 53 q 321 1 283 1 q 389 23 360 1 q 419 83 419 46 q 310 194 419 139 q 108 297 111 295 q 0 476 0 372 q 33 584 0 537 q 120 659 62 626 q 72 720 91 686 q 53 790 53 755 q 133 978 53 908 q 312 1042 207 1042 q 483 984 412 1042 q 574 807 562 921 l 409 807 q 379 875 409 851 q 307 900 349 900 q 244 881 270 900 q 218 829 218 862 q 324 731 218 781 q 524 636 506 647 q 633 469 633 565 m 419 334 q 473 411 473 372 q 451 459 473 436 q 390 502 430 481 l 209 595 q 167 557 182 577 q 153 520 153 537 q 187 461 153 491 q 263 413 212 440 l 419 334 "},b:{x_min:0,x_max:722,ha:822,o:"m 416 -26 q 289 6 346 -26 q 192 101 232 39 l 192 0 l 0 0 l 0 1013 l 192 1013 l 192 656 q 286 743 226 712 q 415 775 346 775 q 649 644 564 775 q 722 374 722 533 q 649 106 722 218 q 416 -26 565 -26 m 361 600 q 232 524 279 600 q 192 371 192 459 q 229 221 192 284 q 357 145 275 145 q 487 221 441 145 q 526 374 526 285 q 488 523 526 460 q 361 600 442 600 "},q:{x_min:0,x_max:722,ha:833,o:"m 722 -298 l 530 -298 l 530 97 q 306 -25 449 -25 q 73 104 159 -25 q 0 372 0 216 q 72 643 0 529 q 305 775 156 775 q 430 742 371 775 q 530 654 488 709 l 530 750 l 722 750 l 722 -298 m 360 601 q 234 527 278 601 q 197 378 197 466 q 233 225 197 291 q 357 144 277 144 q 488 217 441 144 q 530 370 530 282 q 491 523 530 459 q 360 601 443 601 "},Ω:{x_min:-.03125,x_max:1008.53125,ha:1108,o:"m 1008 0 l 589 0 l 589 199 q 717 368 670 265 q 764 580 764 471 q 698 778 764 706 q 504 855 629 855 q 311 773 380 855 q 243 563 243 691 q 289 360 243 458 q 419 199 336 262 l 419 0 l 0 0 l 0 176 l 202 176 q 77 355 123 251 q 32 569 32 459 q 165 908 32 776 q 505 1040 298 1040 q 844 912 711 1040 q 977 578 977 785 q 931 362 977 467 q 805 176 886 256 l 1008 176 l 1008 0 "},ύ:{x_min:0,x_max:656,ha:767,o:"m 656 417 q 568 55 656 146 q 326 -25 490 -25 q 59 97 137 -25 q 0 369 0 192 l 0 748 l 200 748 l 201 369 q 218 222 201 269 q 326 142 245 142 q 440 247 411 142 q 456 422 456 304 l 456 748 l 656 748 l 656 417 m 579 1039 l 378 823 l 279 823 l 401 1039 l 579 1039 "},z:{x_min:0,x_max:663.890625,ha:753,o:"m 663 0 l 0 0 l 0 154 l 411 591 l 25 591 l 25 749 l 650 749 l 650 584 l 245 165 l 663 165 l 663 0 "},"™":{x_min:0,x_max:951,ha:1063,o:"m 405 921 l 255 921 l 255 506 l 149 506 l 149 921 l 0 921 l 0 1013 l 405 1013 l 405 921 m 951 506 l 852 506 l 852 916 l 750 506 l 643 506 l 539 915 l 539 506 l 442 506 l 442 1013 l 595 1012 l 695 625 l 794 1013 l 951 1013 l 951 506 "},ή:{x_min:0,x_max:669,ha:779,o:"m 669 -278 l 469 -278 l 469 390 q 448 526 469 473 q 348 606 417 606 q 244 553 288 606 q 201 441 201 501 l 201 0 l 0 0 l 0 749 l 201 749 l 201 665 q 301 744 244 715 q 423 774 359 774 q 606 685 538 774 q 669 484 669 603 l 669 -278 m 495 1039 l 293 823 l 195 823 l 317 1039 l 495 1039 "},Θ:{x_min:0,x_max:993,ha:1092,o:"m 497 -29 q 133 127 272 -29 q 0 505 0 277 q 133 883 0 733 q 497 1040 272 1040 q 861 883 722 1040 q 993 505 993 733 q 861 127 993 277 q 497 -29 722 -29 m 497 154 q 711 266 631 154 q 782 506 782 367 q 712 746 782 648 q 497 858 634 858 q 281 746 361 858 q 211 506 211 648 q 280 266 211 365 q 497 154 359 154 m 676 430 l 316 430 l 316 593 l 676 593 l 676 430 "},"®":{x_min:3,x_max:1007,ha:1104,o:"m 507 -6 q 129 153 269 -6 q 3 506 3 298 q 127 857 3 713 q 502 1017 266 1017 q 880 855 740 1017 q 1007 502 1007 711 q 882 152 1007 295 q 507 -6 743 -6 m 502 934 q 184 800 302 934 q 79 505 79 680 q 184 210 79 331 q 501 76 302 76 q 819 210 701 76 q 925 507 925 331 q 820 800 925 682 q 502 934 704 934 m 782 190 l 639 190 q 627 225 632 202 q 623 285 623 248 l 623 326 q 603 411 623 384 q 527 439 584 439 l 388 439 l 388 190 l 257 190 l 257 829 l 566 829 q 709 787 654 829 q 772 654 772 740 q 746 559 772 604 q 675 497 720 514 q 735 451 714 483 q 756 341 756 419 l 756 299 q 760 244 756 265 q 782 212 764 223 l 782 190 m 546 718 l 388 718 l 388 552 l 541 552 q 612 572 584 552 q 641 635 641 593 q 614 695 641 672 q 546 718 587 718 "},"~":{x_min:0,x_max:851,ha:949,o:"m 851 968 q 795 750 851 831 q 599 656 730 656 q 406 744 506 656 q 259 832 305 832 q 162 775 193 832 q 139 656 139 730 l 0 656 q 58 871 0 787 q 251 968 124 968 q 442 879 341 968 q 596 791 544 791 q 691 849 663 791 q 712 968 712 892 l 851 968 "},Ε:{x_min:0,x_max:761.546875,ha:824,o:"m 761 0 l 0 0 l 0 1012 l 735 1012 l 735 836 l 206 836 l 206 621 l 690 621 l 690 446 l 206 446 l 206 186 l 761 186 l 761 0 "},"³":{x_min:0,x_max:467,ha:564,o:"m 467 555 q 393 413 467 466 q 229 365 325 365 q 70 413 134 365 q 0 565 0 467 l 123 565 q 163 484 131 512 q 229 461 190 461 q 299 486 269 461 q 329 553 329 512 q 281 627 329 607 q 187 641 248 641 l 187 722 q 268 737 237 722 q 312 804 312 758 q 285 859 312 837 q 224 882 259 882 q 165 858 189 882 q 135 783 140 834 l 12 783 q 86 930 20 878 q 230 976 145 976 q 379 931 314 976 q 444 813 444 887 q 423 744 444 773 q 365 695 402 716 q 439 640 412 676 q 467 555 467 605 "},"[":{x_min:0,x_max:347.21875,ha:444,o:"m 347 -300 l 0 -300 l 0 1013 l 347 1013 l 347 866 l 188 866 l 188 -154 l 347 -154 l 347 -300 "},L:{x_min:0,x_max:704.171875,ha:763,o:"m 704 0 l 0 0 l 0 1013 l 208 1013 l 208 186 l 704 186 l 704 0 "},σ:{x_min:0,x_max:851.3125,ha:940,o:"m 851 594 l 712 594 q 761 369 761 485 q 658 83 761 191 q 379 -25 555 -25 q 104 87 208 -25 q 0 372 0 200 q 103 659 0 544 q 378 775 207 775 q 464 762 407 775 q 549 750 521 750 l 851 750 l 851 594 m 379 142 q 515 216 466 142 q 557 373 557 280 q 515 530 557 465 q 379 608 465 608 q 244 530 293 608 q 203 373 203 465 q 244 218 203 283 q 379 142 293 142 "},ζ:{x_min:0,x_max:622,ha:701,o:"m 622 -32 q 604 -158 622 -98 q 551 -278 587 -218 l 373 -278 q 426 -180 406 -229 q 446 -80 446 -131 q 421 -22 446 -37 q 354 -8 397 -8 q 316 -9 341 -8 q 280 -11 291 -11 q 75 69 150 -11 q 0 283 0 150 q 87 596 0 437 q 291 856 162 730 l 47 856 l 47 1013 l 592 1013 l 592 904 q 317 660 422 800 q 197 318 197 497 q 306 141 197 169 q 510 123 408 131 q 622 -32 622 102 "},θ:{x_min:0,x_max:714,ha:817,o:"m 357 1022 q 633 833 534 1022 q 714 486 714 679 q 634 148 714 288 q 354 -25 536 -25 q 79 147 175 -25 q 0 481 0 288 q 79 831 0 679 q 357 1022 177 1022 m 510 590 q 475 763 510 687 q 351 862 430 862 q 233 763 272 862 q 204 590 204 689 l 510 590 m 510 440 l 204 440 q 233 251 204 337 q 355 131 274 131 q 478 248 434 131 q 510 440 510 337 "},Ο:{x_min:0,x_max:995,ha:1092,o:"m 497 -29 q 133 127 272 -29 q 0 505 0 277 q 132 883 0 733 q 497 1040 270 1040 q 861 883 722 1040 q 995 505 995 733 q 862 127 995 277 q 497 -29 724 -29 m 497 154 q 711 266 632 154 q 781 506 781 365 q 711 745 781 647 q 497 857 632 857 q 283 747 361 857 q 213 506 213 647 q 282 266 213 365 q 497 154 361 154 "},Γ:{x_min:0,x_max:703.84375,ha:742,o:"m 703 836 l 208 836 l 208 0 l 0 0 l 0 1012 l 703 1012 l 703 836 "}," ":{x_min:0,x_max:0,ha:375},"%":{x_min:0,x_max:1111,ha:1213,o:"m 861 484 q 1048 404 979 484 q 1111 228 1111 332 q 1048 51 1111 123 q 859 -29 979 -29 q 672 50 740 -29 q 610 227 610 122 q 672 403 610 331 q 861 484 741 484 m 861 120 q 939 151 911 120 q 967 226 967 183 q 942 299 967 270 q 861 333 912 333 q 783 301 811 333 q 756 226 756 269 q 783 151 756 182 q 861 120 810 120 m 904 984 l 316 -28 l 205 -29 l 793 983 l 904 984 m 250 984 q 436 904 366 984 q 499 730 499 832 q 436 552 499 626 q 248 472 366 472 q 62 552 132 472 q 0 728 0 624 q 62 903 0 831 q 250 984 132 984 m 249 835 q 169 801 198 835 q 140 725 140 768 q 167 652 140 683 q 247 621 195 621 q 327 654 298 621 q 357 730 357 687 q 329 803 357 772 q 249 835 301 835 "},P:{x_min:0,x_max:771,ha:838,o:"m 208 361 l 208 0 l 0 0 l 0 1013 l 450 1013 q 682 919 593 1013 q 771 682 771 826 q 687 452 771 544 q 466 361 604 361 l 208 361 m 421 837 l 208 837 l 208 544 l 410 544 q 525 579 480 544 q 571 683 571 615 q 527 792 571 747 q 421 837 484 837 "},Έ:{x_min:0,x_max:1172.546875,ha:1235,o:"m 1172 0 l 411 0 l 411 1012 l 1146 1012 l 1146 836 l 617 836 l 617 621 l 1101 621 l 1101 446 l 617 446 l 617 186 l 1172 186 l 1172 0 m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 "},Ώ:{x_min:.4375,x_max:1189.546875,ha:1289,o:"m 1189 0 l 770 0 l 770 199 q 897 369 849 263 q 945 580 945 474 q 879 778 945 706 q 685 855 810 855 q 492 773 561 855 q 424 563 424 691 q 470 360 424 458 q 600 199 517 262 l 600 0 l 180 0 l 180 176 l 383 176 q 258 355 304 251 q 213 569 213 459 q 346 908 213 776 q 686 1040 479 1040 q 1025 912 892 1040 q 1158 578 1158 785 q 1112 362 1158 467 q 986 176 1067 256 l 1189 176 l 1189 0 m 314 1092 l 99 837 l 0 837 l 136 1092 l 314 1092 "},_:{x_min:61.109375,x_max:766.671875,ha:828,o:"m 766 -333 l 61 -333 l 61 -190 l 766 -190 l 766 -333 "},Ϊ:{x_min:-56,x_max:342,ha:503,o:"m 342 1046 l 186 1046 l 186 1215 l 342 1215 l 342 1046 m 101 1046 l -56 1046 l -56 1215 l 101 1215 l 101 1046 m 249 0 l 41 0 l 41 1012 l 249 1012 l 249 0 "},"+":{x_min:43,x_max:784,ha:828,o:"m 784 353 l 483 353 l 483 0 l 343 0 l 343 353 l 43 353 l 43 489 l 343 489 l 343 840 l 483 840 l 483 489 l 784 489 l 784 353 "},"½":{x_min:0,x_max:1090,ha:1188,o:"m 1090 380 q 992 230 1090 301 q 779 101 886 165 q 822 94 784 95 q 924 93 859 93 l 951 93 l 973 93 l 992 93 l 1009 93 q 1046 93 1027 93 q 1085 93 1066 93 l 1085 0 l 650 0 l 654 38 q 815 233 665 137 q 965 376 965 330 q 936 436 965 412 q 869 461 908 461 q 806 435 831 461 q 774 354 780 409 l 659 354 q 724 505 659 451 q 870 554 783 554 q 1024 506 958 554 q 1090 380 1090 459 m 868 998 l 268 -28 l 154 -27 l 757 999 l 868 998 m 272 422 l 147 422 l 147 799 l 0 799 l 0 875 q 126 900 91 875 q 170 973 162 926 l 272 973 l 272 422 "},Ρ:{x_min:0,x_max:771,ha:838,o:"m 208 361 l 208 0 l 0 0 l 0 1012 l 450 1012 q 682 919 593 1012 q 771 681 771 826 q 687 452 771 544 q 466 361 604 361 l 208 361 m 422 836 l 209 836 l 209 544 l 410 544 q 525 579 480 544 q 571 683 571 614 q 527 791 571 747 q 422 836 484 836 "},"'":{x_min:0,x_max:192,ha:289,o:"m 192 834 q 137 692 192 751 q 0 626 82 632 l 0 697 q 101 830 101 726 l 0 830 l 0 1013 l 192 1013 l 192 834 "},ª:{x_min:0,x_max:350,ha:393,o:"m 350 625 l 245 625 q 237 648 241 636 q 233 672 233 661 q 117 611 192 611 q 33 643 66 611 q 0 727 0 675 q 116 846 0 828 q 233 886 233 864 q 211 919 233 907 q 168 931 190 931 q 108 877 108 931 l 14 877 q 56 977 14 942 q 165 1013 98 1013 q 270 987 224 1013 q 329 903 329 955 l 329 694 q 332 661 329 675 q 350 641 336 648 l 350 625 m 233 774 l 233 809 q 151 786 180 796 q 97 733 97 768 q 111 700 97 712 q 149 689 126 689 q 210 713 187 689 q 233 774 233 737 "},"΅":{x_min:57,x_max:584,ha:753,o:"m 584 810 l 455 810 l 455 952 l 584 952 l 584 810 m 521 1064 l 305 810 l 207 810 l 343 1064 l 521 1064 m 186 810 l 57 810 l 57 952 l 186 952 l 186 810 "},T:{x_min:0,x_max:809,ha:894,o:"m 809 831 l 509 831 l 509 0 l 299 0 l 299 831 l 0 831 l 0 1013 l 809 1013 l 809 831 "},Φ:{x_min:0,x_max:949,ha:1032,o:"m 566 0 l 385 0 l 385 121 q 111 230 222 121 q 0 508 0 340 q 112 775 0 669 q 385 892 219 875 l 385 1013 l 566 1013 l 566 892 q 836 776 732 875 q 949 507 949 671 q 838 231 949 341 q 566 121 728 121 l 566 0 m 566 285 q 701 352 650 285 q 753 508 753 419 q 703 658 753 597 q 566 729 653 720 l 566 285 m 385 285 l 385 729 q 245 661 297 717 q 193 516 193 604 q 246 356 193 427 q 385 285 300 285 "},j:{x_min:-45.828125,x_max:242,ha:361,o:"m 242 830 l 42 830 l 42 1013 l 242 1013 l 242 830 m 242 -119 q 180 -267 242 -221 q 20 -308 127 -308 l -45 -308 l -45 -140 l -24 -140 q 25 -130 8 -140 q 42 -88 42 -120 l 42 748 l 242 748 l 242 -119 "},Σ:{x_min:0,x_max:772.21875,ha:849,o:"m 772 0 l 0 0 l 0 140 l 368 526 l 18 862 l 18 1012 l 740 1012 l 740 836 l 315 836 l 619 523 l 298 175 l 772 175 l 772 0 "},"›":{x_min:36.109375,x_max:792,ha:828,o:"m 792 352 l 36 17 l 36 168 l 594 420 l 36 672 l 36 823 l 792 487 l 792 352 "},"<":{x_min:35.984375,x_max:791.671875,ha:828,o:"m 791 17 l 36 352 l 35 487 l 791 823 l 791 672 l 229 421 l 791 168 l 791 17 "},"£":{x_min:0,x_max:716.546875,ha:814,o:"m 716 38 q 603 -9 658 5 q 502 -24 548 -24 q 398 -10 451 -24 q 239 25 266 25 q 161 12 200 25 q 77 -29 122 0 l 0 113 q 110 211 81 174 q 151 315 151 259 q 117 440 151 365 l 0 440 l 0 515 l 73 515 q 35 610 52 560 q 15 710 15 671 q 119 910 15 831 q 349 984 216 984 q 570 910 480 984 q 693 668 674 826 l 501 668 q 455 791 501 746 q 353 830 414 830 q 256 795 298 830 q 215 705 215 760 q 249 583 215 655 q 283 515 266 548 l 479 515 l 479 440 l 309 440 q 316 394 313 413 q 319 355 319 374 q 287 241 319 291 q 188 135 263 205 q 262 160 225 152 q 332 168 298 168 q 455 151 368 168 q 523 143 500 143 q 588 152 558 143 q 654 189 617 162 l 716 38 "},t:{x_min:0,x_max:412,ha:511,o:"m 412 -6 q 349 -8 391 -6 q 287 -11 307 -11 q 137 38 177 -11 q 97 203 97 87 l 97 609 l 0 609 l 0 749 l 97 749 l 97 951 l 297 951 l 297 749 l 412 749 l 412 609 l 297 609 l 297 191 q 315 152 297 162 q 366 143 334 143 q 389 143 378 143 q 412 143 400 143 l 412 -6 "},"¬":{x_min:0,x_max:704,ha:801,o:"m 704 93 l 551 93 l 551 297 l 0 297 l 0 450 l 704 450 l 704 93 "},λ:{x_min:0,x_max:701.390625,ha:775,o:"m 701 0 l 491 0 l 345 444 l 195 0 l 0 0 l 238 697 l 131 1013 l 334 1013 l 701 0 "},W:{x_min:0,x_max:1291.671875,ha:1399,o:"m 1291 1013 l 1002 0 l 802 0 l 645 777 l 490 0 l 288 0 l 0 1013 l 215 1013 l 388 298 l 534 1012 l 757 1013 l 904 299 l 1076 1013 l 1291 1013 "},">":{x_min:36.109375,x_max:792,ha:828,o:"m 792 352 l 36 17 l 36 168 l 594 420 l 36 672 l 36 823 l 792 487 l 792 352 "},v:{x_min:0,x_max:740.28125,ha:828,o:"m 740 749 l 473 0 l 266 0 l 0 749 l 222 749 l 373 211 l 529 749 l 740 749 "},τ:{x_min:.28125,x_max:618.734375,ha:699,o:"m 618 593 l 409 593 l 409 0 l 210 0 l 210 593 l 0 593 l 0 749 l 618 749 l 618 593 "},ξ:{x_min:0,x_max:640,ha:715,o:"m 640 -14 q 619 -157 640 -84 q 563 -299 599 -230 l 399 -299 q 442 -194 433 -223 q 468 -85 468 -126 q 440 -25 468 -41 q 368 -10 412 -10 q 333 -11 355 -10 q 302 -13 311 -13 q 91 60 179 -13 q 0 259 0 138 q 56 426 0 354 q 201 530 109 493 q 106 594 144 553 q 65 699 65 642 q 94 787 65 747 q 169 856 123 828 l 22 856 l 22 1013 l 597 1013 l 597 856 l 497 857 q 345 840 398 857 q 257 736 257 812 q 366 614 257 642 q 552 602 416 602 l 552 446 l 513 446 q 313 425 379 446 q 199 284 199 389 q 312 162 199 184 q 524 136 418 148 q 640 -14 640 105 "},"&":{x_min:-1,x_max:910.109375,ha:1007,o:"m 910 -1 l 676 -1 l 607 83 q 291 -47 439 -47 q 50 100 135 -47 q -1 273 -1 190 q 51 431 -1 357 q 218 568 104 505 q 151 661 169 629 q 120 769 120 717 q 201 951 120 885 q 382 1013 276 1013 q 555 957 485 1013 q 635 789 635 894 q 584 644 635 709 q 468 539 548 597 l 615 359 q 664 527 654 440 l 844 527 q 725 223 824 359 l 910 -1 m 461 787 q 436 848 461 826 q 381 870 412 870 q 325 849 349 870 q 301 792 301 829 q 324 719 301 757 q 372 660 335 703 q 430 714 405 680 q 461 787 461 753 m 500 214 l 318 441 q 198 286 198 363 q 225 204 198 248 q 347 135 268 135 q 425 153 388 135 q 500 214 462 172 "},Λ:{x_min:0,x_max:894.453125,ha:974,o:"m 894 0 l 666 0 l 447 757 l 225 0 l 0 0 l 344 1013 l 547 1013 l 894 0 "},I:{x_min:41,x_max:249,ha:365,o:"m 249 0 l 41 0 l 41 1013 l 249 1013 l 249 0 "},G:{x_min:0,x_max:971,ha:1057,o:"m 971 -1 l 829 -1 l 805 118 q 479 -29 670 -29 q 126 133 261 -29 q 0 509 0 286 q 130 884 0 737 q 493 1040 268 1040 q 790 948 659 1040 q 961 698 920 857 l 736 698 q 643 813 709 769 q 500 857 578 857 q 285 746 364 857 q 213 504 213 644 q 285 263 213 361 q 505 154 365 154 q 667 217 598 154 q 761 374 736 280 l 548 374 l 548 548 l 971 548 l 971 -1 "},ΰ:{x_min:0,x_max:655,ha:767,o:"m 583 810 l 454 810 l 454 952 l 583 952 l 583 810 m 186 810 l 57 809 l 57 952 l 186 952 l 186 810 m 516 1039 l 315 823 l 216 823 l 338 1039 l 516 1039 m 655 417 q 567 55 655 146 q 326 -25 489 -25 q 59 97 137 -25 q 0 369 0 192 l 0 748 l 200 748 l 201 369 q 218 222 201 269 q 326 142 245 142 q 439 247 410 142 q 455 422 455 304 l 455 748 l 655 748 l 655 417 "},"`":{x_min:0,x_max:190,ha:288,o:"m 190 654 l 0 654 l 0 830 q 55 970 0 909 q 190 1040 110 1031 l 190 969 q 111 922 134 952 q 88 836 88 892 l 190 836 l 190 654 "},"·":{x_min:0,x_max:207,ha:304,o:"m 207 528 l 0 528 l 0 735 l 207 735 l 207 528 "},Υ:{x_min:-.21875,x_max:836.171875,ha:914,o:"m 836 1013 l 532 376 l 532 0 l 322 0 l 322 376 l 0 1013 l 208 1013 l 427 576 l 626 1013 l 836 1013 "},r:{x_min:0,x_max:431.9375,ha:513,o:"m 431 564 q 269 536 320 564 q 200 395 200 498 l 200 0 l 0 0 l 0 748 l 183 748 l 183 618 q 285 731 224 694 q 431 768 345 768 l 431 564 "},x:{x_min:0,x_max:738.890625,ha:826,o:"m 738 0 l 504 0 l 366 238 l 230 0 l 0 0 l 252 382 l 11 749 l 238 749 l 372 522 l 502 749 l 725 749 l 488 384 l 738 0 "},μ:{x_min:0,x_max:647,ha:754,o:"m 647 0 l 477 0 l 477 68 q 411 9 448 30 q 330 -11 374 -11 q 261 3 295 -11 q 199 43 226 18 l 199 -278 l 0 -278 l 0 749 l 199 749 l 199 358 q 216 222 199 268 q 322 152 244 152 q 435 240 410 152 q 448 401 448 283 l 448 749 l 647 749 l 647 0 "},h:{x_min:0,x_max:669,ha:782,o:"m 669 0 l 469 0 l 469 390 q 449 526 469 472 q 353 607 420 607 q 248 554 295 607 q 201 441 201 501 l 201 0 l 0 0 l 0 1013 l 201 1013 l 201 665 q 303 743 245 715 q 425 772 362 772 q 609 684 542 772 q 669 484 669 605 l 669 0 "},".":{x_min:0,x_max:206,ha:303,o:"m 206 0 l 0 0 l 0 207 l 206 207 l 206 0 "},φ:{x_min:-1,x_max:921,ha:990,o:"m 542 -278 l 367 -278 l 367 -22 q 99 92 200 -22 q -1 376 -1 206 q 72 627 -1 520 q 288 769 151 742 l 288 581 q 222 495 243 550 q 202 378 202 439 q 240 228 202 291 q 367 145 285 157 l 367 776 l 515 776 q 807 667 694 776 q 921 379 921 558 q 815 93 921 209 q 542 -22 709 -22 l 542 -278 m 542 145 q 672 225 625 145 q 713 381 713 291 q 671 536 713 470 q 542 611 624 611 l 542 145 "},";":{x_min:0,x_max:208,ha:306,o:"m 208 528 l 0 528 l 0 735 l 208 735 l 208 528 m 208 6 q 152 -151 208 -89 q 0 -238 96 -212 l 0 -158 q 87 -100 61 -136 q 113 0 113 -65 l 0 0 l 0 207 l 208 207 l 208 6 "},f:{x_min:0,x_max:424,ha:525,o:"m 424 609 l 300 609 l 300 0 l 107 0 l 107 609 l 0 609 l 0 749 l 107 749 q 145 949 107 894 q 328 1019 193 1019 l 424 1015 l 424 855 l 362 855 q 312 841 324 855 q 300 797 300 827 q 300 773 300 786 q 300 749 300 761 l 424 749 l 424 609 "},"“":{x_min:0,x_max:468,ha:567,o:"m 190 631 l 0 631 l 0 807 q 55 947 0 885 q 190 1017 110 1010 l 190 947 q 88 813 88 921 l 190 813 l 190 631 m 468 631 l 278 631 l 278 807 q 333 947 278 885 q 468 1017 388 1010 l 468 947 q 366 813 366 921 l 468 813 l 468 631 "},A:{x_min:0,x_max:966.671875,ha:1069,o:"m 966 0 l 747 0 l 679 208 l 286 208 l 218 0 l 0 0 l 361 1013 l 600 1013 l 966 0 m 623 376 l 480 810 l 340 376 l 623 376 "},"‘":{x_min:0,x_max:190,ha:289,o:"m 190 631 l 0 631 l 0 807 q 55 947 0 885 q 190 1017 110 1010 l 190 947 q 88 813 88 921 l 190 813 l 190 631 "},ϊ:{x_min:-55,x_max:337,ha:389,o:"m 337 810 l 208 810 l 208 952 l 337 952 l 337 810 m 74 810 l -55 810 l -55 952 l 74 952 l 74 810 m 242 0 l 42 0 l 42 748 l 242 748 l 242 0 "},π:{x_min:.5,x_max:838.890625,ha:938,o:"m 838 593 l 750 593 l 750 0 l 549 0 l 549 593 l 287 593 l 287 0 l 88 0 l 88 593 l 0 593 l 0 749 l 838 749 l 838 593 "},ά:{x_min:-1,x_max:722,ha:835,o:"m 722 0 l 531 0 l 530 101 q 433 8 491 41 q 304 -25 375 -25 q 72 104 157 -25 q -1 372 -1 216 q 72 643 -1 530 q 308 775 158 775 q 433 744 375 775 q 528 656 491 713 l 528 749 l 722 749 l 722 0 m 361 601 q 233 527 277 601 q 196 375 196 464 q 232 224 196 288 q 358 144 277 144 q 487 217 441 144 q 528 370 528 281 q 489 523 528 457 q 361 601 443 601 m 579 1039 l 377 823 l 279 823 l 401 1039 l 579 1039 "},O:{x_min:0,x_max:994,ha:1094,o:"m 497 -29 q 133 127 272 -29 q 0 505 0 277 q 131 883 0 733 q 497 1040 270 1040 q 860 883 721 1040 q 994 505 994 733 q 862 127 994 277 q 497 -29 723 -29 m 497 154 q 710 266 631 154 q 780 506 780 365 q 710 745 780 647 q 497 857 631 857 q 283 747 361 857 q 213 506 213 647 q 282 266 213 365 q 497 154 361 154 "},n:{x_min:0,x_max:669,ha:782,o:"m 669 0 l 469 0 l 469 452 q 442 553 469 513 q 352 601 412 601 q 245 553 290 601 q 200 441 200 505 l 200 0 l 0 0 l 0 748 l 194 748 l 194 659 q 289 744 230 713 q 416 775 349 775 q 600 700 531 775 q 669 509 669 626 l 669 0 "},l:{x_min:41,x_max:240,ha:363,o:"m 240 0 l 41 0 l 41 1013 l 240 1013 l 240 0 "},"¤":{x_min:40.265625,x_max:727.203125,ha:825,o:"m 727 792 l 594 659 q 620 552 620 609 q 598 459 620 504 l 725 331 l 620 224 l 491 352 q 382 331 443 331 q 273 352 322 331 l 144 224 l 40 330 l 167 459 q 147 552 147 501 q 172 658 147 608 l 40 794 l 147 898 l 283 759 q 383 776 330 776 q 482 759 434 776 l 620 898 l 727 792 m 383 644 q 308 617 334 644 q 283 551 283 590 q 309 489 283 517 q 381 462 335 462 q 456 488 430 462 q 482 554 482 515 q 455 616 482 588 q 383 644 429 644 "},κ:{x_min:0,x_max:691.84375,ha:779,o:"m 691 0 l 479 0 l 284 343 l 196 252 l 196 0 l 0 0 l 0 749 l 196 749 l 196 490 l 440 749 l 677 749 l 416 479 l 691 0 "},p:{x_min:0,x_max:722,ha:824,o:"m 415 -26 q 287 4 346 -26 q 192 92 228 34 l 192 -298 l 0 -298 l 0 750 l 192 750 l 192 647 q 289 740 230 706 q 416 775 347 775 q 649 645 566 775 q 722 375 722 534 q 649 106 722 218 q 415 -26 564 -26 m 363 603 q 232 529 278 603 q 192 375 192 465 q 230 222 192 286 q 360 146 276 146 q 487 221 441 146 q 526 371 526 285 q 488 523 526 458 q 363 603 443 603 "},"‡":{x_min:0,x_max:809,ha:894,o:"m 299 621 l 0 621 l 0 804 l 299 804 l 299 1011 l 509 1011 l 509 804 l 809 804 l 809 621 l 509 621 l 509 387 l 809 387 l 809 205 l 509 205 l 509 0 l 299 0 l 299 205 l 0 205 l 0 387 l 299 387 l 299 621 "},ψ:{x_min:0,x_max:875,ha:979,o:"m 522 142 q 657 274 620 163 q 671 352 671 316 l 671 748 l 875 748 l 875 402 q 806 134 875 240 q 525 -22 719 -1 l 525 -278 l 349 -278 l 349 -22 q 65 135 152 -1 q 0 402 0 238 l 0 748 l 204 748 l 204 352 q 231 240 204 295 q 353 142 272 159 l 353 922 l 524 922 l 522 142 "},η:{x_min:0,x_max:669,ha:779,o:"m 669 -278 l 469 -278 l 469 390 q 448 526 469 473 q 348 606 417 606 q 244 553 288 606 q 201 441 201 501 l 201 0 l 0 0 l 0 749 l 201 749 l 201 665 q 301 744 244 715 q 423 774 359 774 q 606 685 538 774 q 669 484 669 603 l 669 -278 "}},l2="bold",c2=1216,u2=-100,h2="normal",f2={yMin:-333,xMin:-162,yMax:1216,xMax:1681},d2=1e3,p2={postscript_name:"Helvetiker-Bold",version_string:"Version 1.00 2004 initial release",vendor_url:"http://www.magenta.gr",full_font_name:"Helvetiker Bold",font_family_name:"Helvetiker",copyright:"Copyright (c) Magenta ltd, 2004.",description:"",trademark:"",designer:"",designer_url:"",unique_font_identifier:"Magenta ltd:Helvetiker Bold:22-10-104",license_url:"http://www.ellak.gr/fonts/MgOpen/license.html",license_description:`Copyright (c) 2004 by MAGENTA Ltd. All Rights Reserved.\r
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
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL MAGENTA OR PERSONS OR BODIES IN CHARGE OF ADMINISTRATION AND MAINTENANCE OF THE FONT SOFTWARE BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM OTHER DEALINGS IN THE FONT SOFTWARE.`,manufacturer_name:"Magenta ltd",font_sub_family_name:"Bold"},m2=-334,_2="Helvetiker",g2=1549,v2=50,$u={glyphs:a2,cssFontWeight:l2,ascender:c2,underlinePosition:u2,cssFontStyle:h2,boundingBox:f2,resolution:d2,original_font_information:p2,descender:m2,familyName:_2,lineHeight:g2,underlineThickness:v2};function x2(){const n={font:new ju($u),size:.01,depth:1e-7};return{[et.Knight]:new Ot(et.Knight,n),[et.Orc]:new Ot(et.Orc,n),[et.Cavalry]:new Ot(et.Cavalry,n),[et.Ranged]:new Ot(et.Ranged,n),[et.Magic]:new Ot(et.Magic,n),[et.Beast]:new Ot(et.Beast,n),[et.BladeMaster]:new Ot(et.BladeMaster,n),[et.Dead]:new Ot(et.Dead,n),[et.Light]:new Ot(et.Light,n),[et.Dark]:new Ot(et.Dark,n),[et.Armored]:new Ot(et.Armored,n)}}function A2(n){const i=new si(.1,1,.1),r=new Nu({color:63488}),s={};for(let o=0;o<6;o++){const a=new ft(i,r);n.add(a),s[o]=a,a.position.x=-.19+o%3*-.13,a.position.y=.01,a.position.z=.6+Math.floor(o/3)*(.1+.04)}return s}function y2(){const n={font:new ju($u),size:.01,depth:1e-7};return{[ot.Soldier]:new Ot(ot.Soldier,n)}}function S2(){const n=Ku(ot.Soldier,Ge.Idle)[0],e=jg();return{camera:Fu(),pieceAnimatedTextures:{},pieceBarsBackgroundGeometry:new Ft(1,1),pieceBarsBackgroundMaterial:new Qt({color:0}),pieceBarsBackgroundMeshes:{},pieceGeometry:new Ft(1,1),pieceGradeGeometry:new Pa(.005,32),pieceGradeMaterial:new Qt({color:16766720}),pieceGradeMeshes:{},pieceHealthBarGeometries:{},pieceHealthBarMaterial:new Qt({color:16711680}),pieceHealthBarMeshes:{},pieceMaterials:{},pieceMeshes:{},scene:e,shopProductBackgroundGeometry:new Ft(.1,.15),shopProductBackgroundMaterial:new Qt({color:16766720}),shopProductBackgroundMeshes:{},shopProductImageGeometry:new Ft(.1,.1),shopProductImageMaterial:{[ot.Soldier]:new Qt({map:n,transparent:!0})},shopProductImageMeshes:{},shopProductAppellationGeometry:y2(),shopProductAppellationMaterial:new Qt({color:0}),shopProductAppellationMeshes:{},shopProductTraitGeometry:x2(),shopProductTraitMaterial:new Qt({color:0}),shopProductTraitMeshes:{},benchSlotMeshes:A2(e)}}var Qn=256,Qu=[],lc=256,$r;for(;Qn--;)Qu[Qn]=(Qn+256).toString(16).substring(1);function Qr(n){var e=0,t=11;if(!$r||Qn+t>lc*2)for($r="",Qn=0;e<lc;e++)$r+=Qu[Math.random()*256|0];return $r.substring(Qn,Qn+++t)}function M2(n){if(!(typeof window>"u")){var e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=n,document.head.appendChild(e),n}}function Li(n,e){var t=n.__state.conversionName.toString(),i=Math.round(n.r),r=Math.round(n.g),s=Math.round(n.b),o=n.a,a=Math.round(n.h),l=n.s.toFixed(1),c=n.v.toFixed(1);if(e||t==="THREE_CHAR_HEX"||t==="SIX_CHAR_HEX"){for(var u=n.hex.toString(16);u.length<6;)u="0"+u;return"#"+u}else{if(t==="CSS_RGB")return"rgb("+i+","+r+","+s+")";if(t==="CSS_RGBA")return"rgba("+i+","+r+","+s+","+o+")";if(t==="HEX")return"0x"+n.hex.toString(16);if(t==="RGB_ARRAY")return"["+i+","+r+","+s+"]";if(t==="RGBA_ARRAY")return"["+i+","+r+","+s+","+o+"]";if(t==="RGB_OBJ")return"{r:"+i+",g:"+r+",b:"+s+"}";if(t==="RGBA_OBJ")return"{r:"+i+",g:"+r+",b:"+s+",a:"+o+"}";if(t==="HSV_OBJ")return"{h:"+a+",s:"+l+",v:"+c+"}";if(t==="HSVA_OBJ")return"{h:"+a+",s:"+l+",v:"+c+",a:"+o+"}"}return"unknown format"}var cc=Array.prototype.forEach,er=Array.prototype.slice,J={BREAK:{},extend:function(e){return this.each(er.call(arguments,1),function(t){var i=this.isObject(t)?Object.keys(t):[];i.forEach((function(r){this.isUndefined(t[r])||(e[r]=t[r])}).bind(this))},this),e},defaults:function(e){return this.each(er.call(arguments,1),function(t){var i=this.isObject(t)?Object.keys(t):[];i.forEach((function(r){this.isUndefined(e[r])&&(e[r]=t[r])}).bind(this))},this),e},compose:function(){var e=er.call(arguments);return function(){for(var t=er.call(arguments),i=e.length-1;i>=0;i--)t=[e[i].apply(this,t)];return t[0]}},each:function(e,t,i){if(e){if(cc&&e.forEach&&e.forEach===cc)e.forEach(t,i);else if(e.length===e.length+0){var r=void 0,s=void 0;for(r=0,s=e.length;r<s;r++)if(r in e&&t.call(i,e[r],r)===this.BREAK)return}else for(var o in e)if(t.call(i,e[o],o)===this.BREAK)return}},defer:function(e){setTimeout(e,0)},debounce:function(e,t,i){var r=void 0;return function(){var s=this,o=arguments;function a(){r=null,i||e.apply(s,o)}var l=i||!r;clearTimeout(r),r=setTimeout(a,t),l&&e.apply(s,o)}},toArray:function(e){return e.toArray?e.toArray():er.call(e)},isUndefined:function(e){return e===void 0},isNull:function(e){return e===null},isNaN:function(n){function e(t){return n.apply(this,arguments)}return e.toString=function(){return n.toString()},e}(function(n){return isNaN(n)}),isArray:Array.isArray||function(n){return n.constructor===Array},isObject:function(e){return e===Object(e)},isNumber:function(e){return e===e+0},isString:function(e){return e===e+""},isBoolean:function(e){return e===!1||e===!0},isFunction:function(e){return e instanceof Function}},b2=[{litmus:J.isString,conversions:{THREE_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString()+t[1].toString()+t[2].toString()+t[2].toString()+t[3].toString()+t[3].toString(),0)}},write:Li},SIX_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9]{6})$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString(),0)}},write:Li},CSS_RGB:{read:function(e){var t=e.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3])}},write:Li},CSS_RGBA:{read:function(e){var t=e.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3]),a:parseFloat(t[4])}},write:Li}}},{litmus:J.isNumber,conversions:{HEX:{read:function(e){return{space:"HEX",hex:e,conversionName:"HEX"}},write:function(e){return e.hex}}}},{litmus:J.isArray,conversions:{RGB_ARRAY:{read:function(e){return e.length!==3?!1:{space:"RGB",r:e[0],g:e[1],b:e[2]}},write:function(e){return[e.r,e.g,e.b]}},RGBA_ARRAY:{read:function(e){return e.length!==4?!1:{space:"RGB",r:e[0],g:e[1],b:e[2],a:e[3]}},write:function(e){return[e.r,e.g,e.b,e.a]}}}},{litmus:J.isObject,conversions:{RGBA_OBJ:{read:function(e){return J.isNumber(e.r)&&J.isNumber(e.g)&&J.isNumber(e.b)&&J.isNumber(e.a)?{space:"RGB",r:e.r,g:e.g,b:e.b,a:e.a}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b,a:e.a}}},RGB_OBJ:{read:function(e){return J.isNumber(e.r)&&J.isNumber(e.g)&&J.isNumber(e.b)?{space:"RGB",r:e.r,g:e.g,b:e.b}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b}}},HSVA_OBJ:{read:function(e){return J.isNumber(e.h)&&J.isNumber(e.s)&&J.isNumber(e.v)&&J.isNumber(e.a)?{space:"HSV",h:e.h,s:e.s,v:e.v,a:e.a}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v,a:e.a}}},HSV_OBJ:{read:function(e){return J.isNumber(e.h)&&J.isNumber(e.s)&&J.isNumber(e.v)?{space:"HSV",h:e.h,s:e.s,v:e.v}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v}}}}}],tr=void 0,es=void 0,ca=function(){es=!1;var e=arguments.length>1?J.toArray(arguments):arguments[0];return J.each(b2,function(t){if(t.litmus(e))return J.each(t.conversions,function(i,r){if(tr=i.read(e),es===!1&&tr!==!1)return es=tr,tr.conversionName=r,tr.conversion=i,J.BREAK}),J.BREAK}),es},uc=void 0,ys={hsv_to_rgb:function(e,t,i){var r=Math.floor(e/60)%6,s=e/60-Math.floor(e/60),o=i*(1-t),a=i*(1-s*t),l=i*(1-(1-s)*t),c=[[i,l,o],[a,i,o],[o,i,l],[o,a,i],[l,o,i],[i,o,a]][r];return{r:c[0]*255,g:c[1]*255,b:c[2]*255}},rgb_to_hsv:function(e,t,i){var r=Math.min(e,t,i),s=Math.max(e,t,i),o=s-r,a=void 0,l=void 0;if(s!==0)l=o/s;else return{h:NaN,s:0,v:0};return e===s?a=(t-i)/o:t===s?a=2+(i-e)/o:a=4+(e-t)/o,a/=6,a<0&&(a+=1),{h:a*360,s:l,v:s/255}},rgb_to_hex:function(e,t,i){var r=this.hex_with_component(0,2,e);return r=this.hex_with_component(r,1,t),r=this.hex_with_component(r,0,i),r},component_from_hex:function(e,t){return e>>t*8&255},hex_with_component:function(e,t,i){return i<<(uc=t*8)|e&~(255<<uc)}},E2=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Jt=function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")},Kt=function(){function n(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}}(),In=function n(e,t,i){e===null&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(r===void 0){var s=Object.getPrototypeOf(e);return s===null?void 0:n(s,t,i)}else{if("value"in r)return r.value;var o=r.get;return o===void 0?void 0:o.call(i)}},Fn=function(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)},Bn=function(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:n},gt=function(){function n(){if(Jt(this,n),this.__state=ca.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return Kt(n,[{key:"toString",value:function(){return Li(this)}},{key:"toHexString",value:function(){return Li(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),n}();function Oa(n,e,t){Object.defineProperty(n,e,{get:function(){return this.__state.space==="RGB"?this.__state[e]:(gt.recalculateRGB(this,e,t),this.__state[e])},set:function(r){this.__state.space!=="RGB"&&(gt.recalculateRGB(this,e,t),this.__state.space="RGB"),this.__state[e]=r}})}function Fa(n,e){Object.defineProperty(n,e,{get:function(){return this.__state.space==="HSV"?this.__state[e]:(gt.recalculateHSV(this),this.__state[e])},set:function(i){this.__state.space!=="HSV"&&(gt.recalculateHSV(this),this.__state.space="HSV"),this.__state[e]=i}})}gt.recalculateRGB=function(n,e,t){if(n.__state.space==="HEX")n.__state[e]=ys.component_from_hex(n.__state.hex,t);else if(n.__state.space==="HSV")J.extend(n.__state,ys.hsv_to_rgb(n.__state.h,n.__state.s,n.__state.v));else throw new Error("Corrupted color state")};gt.recalculateHSV=function(n){var e=ys.rgb_to_hsv(n.r,n.g,n.b);J.extend(n.__state,{s:e.s,v:e.v}),J.isNaN(e.h)?J.isUndefined(n.__state.h)&&(n.__state.h=0):n.__state.h=e.h};gt.COMPONENTS=["r","g","b","h","s","v","hex","a"];Oa(gt.prototype,"r",2);Oa(gt.prototype,"g",1);Oa(gt.prototype,"b",0);Fa(gt.prototype,"h");Fa(gt.prototype,"s");Fa(gt.prototype,"v");Object.defineProperty(gt.prototype,"a",{get:function(){return this.__state.a},set:function(e){this.__state.a=e}});Object.defineProperty(gt.prototype,"hex",{get:function(){return this.__state.space!=="HEX"&&(this.__state.hex=ys.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(e){this.__state.space="HEX",this.__state.hex=e}});var oi=function(){function n(e,t){Jt(this,n),this.initialValue=e[t],this.domElement=document.createElement("div"),this.object=e,this.property=t,this.__onChange=void 0,this.__onFinishChange=void 0}return Kt(n,[{key:"onChange",value:function(t){return this.__onChange=t,this}},{key:"onFinishChange",value:function(t){return this.__onFinishChange=t,this}},{key:"setValue",value:function(t){return this.object[this.property]=t,this.__onChange&&this.__onChange.call(this,t),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),n}(),T2={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},eh={};J.each(T2,function(n,e){J.each(n,function(t){eh[t]=e})});var w2=/(\d+(\.\d+)?)px/;function $t(n){if(n==="0"||J.isUndefined(n))return 0;var e=n.match(w2);return J.isNull(e)?0:parseFloat(e[1])}var N={makeSelectable:function(e,t){e===void 0||e.style===void 0||(e.onselectstart=t?function(){return!1}:function(){},e.style.MozUserSelect=t?"auto":"none",e.style.KhtmlUserSelect=t?"auto":"none",e.unselectable=t?"on":"off")},makeFullscreen:function(e,t,i){var r=i,s=t;J.isUndefined(s)&&(s=!0),J.isUndefined(r)&&(r=!0),e.style.position="absolute",s&&(e.style.left=0,e.style.right=0),r&&(e.style.top=0,e.style.bottom=0)},fakeEvent:function(e,t,i,r){var s=i||{},o=eh[t];if(!o)throw new Error("Event type "+t+" not supported.");var a=document.createEvent(o);switch(o){case"MouseEvents":{var l=s.x||s.clientX||0,c=s.y||s.clientY||0;a.initMouseEvent(t,s.bubbles||!1,s.cancelable||!0,window,s.clickCount||1,0,0,l,c,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var u=a.initKeyboardEvent||a.initKeyEvent;J.defaults(s,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),u(t,s.bubbles||!1,s.cancelable,window,s.ctrlKey,s.altKey,s.shiftKey,s.metaKey,s.keyCode,s.charCode);break}default:{a.initEvent(t,s.bubbles||!1,s.cancelable||!0);break}}J.defaults(a,r),e.dispatchEvent(a)},bind:function(e,t,i,r){var s=r||!1;return e.addEventListener?e.addEventListener(t,i,s):e.attachEvent&&e.attachEvent("on"+t,i),N},unbind:function(e,t,i,r){var s=r||!1;return e.removeEventListener?e.removeEventListener(t,i,s):e.detachEvent&&e.detachEvent("on"+t,i),N},addClass:function(e,t){if(e.className===void 0)e.className=t;else if(e.className!==t){var i=e.className.split(/ +/);i.indexOf(t)===-1&&(i.push(t),e.className=i.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return N},removeClass:function(e,t){if(t)if(e.className===t)e.removeAttribute("class");else{var i=e.className.split(/ +/),r=i.indexOf(t);r!==-1&&(i.splice(r,1),e.className=i.join(" "))}else e.className=void 0;return N},hasClass:function(e,t){return new RegExp("(?:^|\\s+)"+t+"(?:\\s+|$)").test(e.className)||!1},getWidth:function(e){var t=getComputedStyle(e);return $t(t["border-left-width"])+$t(t["border-right-width"])+$t(t["padding-left"])+$t(t["padding-right"])+$t(t.width)},getHeight:function(e){var t=getComputedStyle(e);return $t(t["border-top-width"])+$t(t["border-bottom-width"])+$t(t["padding-top"])+$t(t["padding-bottom"])+$t(t.height)},getOffset:function(e){var t=e,i={left:0,top:0};if(t.offsetParent)do i.left+=t.offsetLeft,i.top+=t.offsetTop,t=t.offsetParent;while(t);return i},isActive:function(e){return e===document.activeElement&&(e.type||e.href)}},th=function(n){Fn(e,n);function e(t,i){Jt(this,e);var r=Bn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i)),s=r;r.__prev=r.getValue(),r.__checkbox=document.createElement("input"),r.__checkbox.setAttribute("type","checkbox");function o(){s.setValue(!s.__prev)}return N.bind(r.__checkbox,"change",o,!1),r.domElement.appendChild(r.__checkbox),r.updateDisplay(),r}return Kt(e,[{key:"setValue",value:function(i){var r=In(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,i);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),r}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),In(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(oi),C2=function(n){Fn(e,n);function e(t,i,r){Jt(this,e);var s=Bn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i)),o=r,a=s;if(s.__select=document.createElement("select"),J.isArray(o)){var l={};J.each(o,function(c){l[c]=c}),o=l}return J.each(o,function(c,u){var h=document.createElement("option");h.innerHTML=u,h.setAttribute("value",c),a.__select.appendChild(h)}),s.updateDisplay(),N.bind(s.__select,"change",function(){var c=this.options[this.selectedIndex].value;a.setValue(c)}),s.domElement.appendChild(s.__select),s}return Kt(e,[{key:"setValue",value:function(i){var r=In(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,i);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),r}},{key:"updateDisplay",value:function(){return N.isActive(this.__select)?this:(this.__select.value=this.getValue(),In(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this))}}]),e}(oi),R2=function(n){Fn(e,n);function e(t,i){Jt(this,e);var r=Bn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i)),s=r;function o(){s.setValue(s.__input.value)}function a(){s.__onFinishChange&&s.__onFinishChange.call(s,s.getValue())}return r.__input=document.createElement("input"),r.__input.setAttribute("type","text"),N.bind(r.__input,"keyup",o),N.bind(r.__input,"change",o),N.bind(r.__input,"blur",a),N.bind(r.__input,"keydown",function(l){l.keyCode===13&&this.blur()}),r.updateDisplay(),r.domElement.appendChild(r.__input),r}return Kt(e,[{key:"updateDisplay",value:function(){return N.isActive(this.__input)||(this.__input.value=this.getValue()),In(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(oi);function hc(n){var e=n.toString();return e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0}var nh=function(n){Fn(e,n);function e(t,i,r){Jt(this,e);var s=Bn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i)),o=r||{};return s.__min=o.min,s.__max=o.max,s.__step=o.step,J.isUndefined(s.__step)?s.initialValue===0?s.__impliedStep=1:s.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(s.initialValue))/Math.LN10))/10:s.__impliedStep=s.__step,s.__precision=hc(s.__impliedStep),s}return Kt(e,[{key:"setValue",value:function(i){var r=i;return this.__min!==void 0&&r<this.__min?r=this.__min:this.__max!==void 0&&r>this.__max&&(r=this.__max),this.__step!==void 0&&r%this.__step!==0&&(r=Math.round(r/this.__step)*this.__step),In(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,r)}},{key:"min",value:function(i){return this.__min=i,this}},{key:"max",value:function(i){return this.__max=i,this}},{key:"step",value:function(i){return this.__step=i,this.__impliedStep=i,this.__precision=hc(i),this}}]),e}(oi);function P2(n,e){var t=Math.pow(10,e);return Math.round(n*t)/t}var Ss=function(n){Fn(e,n);function e(t,i,r){Jt(this,e);var s=Bn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i,r));s.__truncationSuspended=!1;var o=s,a=void 0;function l(){var _=parseFloat(o.__input.value);J.isNaN(_)||o.setValue(_)}function c(){o.__onFinishChange&&o.__onFinishChange.call(o,o.getValue())}function u(){c()}function h(_){var g=a-_.clientY;o.setValue(o.getValue()+g*o.__impliedStep),a=_.clientY}function f(){N.unbind(window,"mousemove",h),N.unbind(window,"mouseup",f),c()}function d(_){N.bind(window,"mousemove",h),N.bind(window,"mouseup",f),a=_.clientY}return s.__input=document.createElement("input"),s.__input.setAttribute("type","text"),N.bind(s.__input,"change",l),N.bind(s.__input,"blur",u),N.bind(s.__input,"mousedown",d),N.bind(s.__input,"keydown",function(_){_.keyCode===13&&(o.__truncationSuspended=!0,this.blur(),o.__truncationSuspended=!1,c())}),s.updateDisplay(),s.domElement.appendChild(s.__input),s}return Kt(e,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():P2(this.getValue(),this.__precision),In(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(nh);function fc(n,e,t,i,r){return i+(r-i)*((n-e)/(t-e))}var ua=function(n){Fn(e,n);function e(t,i,r,s,o){Jt(this,e);var a=Bn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i,{min:r,max:s,step:o})),l=a;a.__background=document.createElement("div"),a.__foreground=document.createElement("div"),N.bind(a.__background,"mousedown",c),N.bind(a.__background,"touchstart",f),N.addClass(a.__background,"slider"),N.addClass(a.__foreground,"slider-fg");function c(g){document.activeElement.blur(),N.bind(window,"mousemove",u),N.bind(window,"mouseup",h),u(g)}function u(g){g.preventDefault();var m=l.__background.getBoundingClientRect();return l.setValue(fc(g.clientX,m.left,m.right,l.__min,l.__max)),!1}function h(){N.unbind(window,"mousemove",u),N.unbind(window,"mouseup",h),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}function f(g){g.touches.length===1&&(N.bind(window,"touchmove",d),N.bind(window,"touchend",_),d(g))}function d(g){var m=g.touches[0].clientX,p=l.__background.getBoundingClientRect();l.setValue(fc(m,p.left,p.right,l.__min,l.__max))}function _(){N.unbind(window,"touchmove",d),N.unbind(window,"touchend",_),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}return a.updateDisplay(),a.__background.appendChild(a.__foreground),a.domElement.appendChild(a.__background),a}return Kt(e,[{key:"updateDisplay",value:function(){var i=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=i*100+"%",In(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(nh),ih=function(n){Fn(e,n);function e(t,i,r){Jt(this,e);var s=Bn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i)),o=s;return s.__button=document.createElement("div"),s.__button.innerHTML=r===void 0?"Fire":r,N.bind(s.__button,"click",function(a){return a.preventDefault(),o.fire(),!1}),N.addClass(s.__button,"button"),s.domElement.appendChild(s.__button),s}return Kt(e,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),e}(oi),ha=function(n){Fn(e,n);function e(t,i){Jt(this,e);var r=Bn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i));r.__color=new gt(r.getValue()),r.__temp=new gt(0);var s=r;r.domElement=document.createElement("div"),N.makeSelectable(r.domElement,!1),r.__selector=document.createElement("div"),r.__selector.className="selector",r.__saturation_field=document.createElement("div"),r.__saturation_field.className="saturation-field",r.__field_knob=document.createElement("div"),r.__field_knob.className="field-knob",r.__field_knob_border="2px solid ",r.__hue_knob=document.createElement("div"),r.__hue_knob.className="hue-knob",r.__hue_field=document.createElement("div"),r.__hue_field.className="hue-field",r.__input=document.createElement("input"),r.__input.type="text",r.__input_textShadow="0 1px 1px ",N.bind(r.__input,"keydown",function(g){g.keyCode===13&&h.call(this)}),N.bind(r.__input,"blur",h),N.bind(r.__selector,"mousedown",function(){N.addClass(this,"drag").bind(window,"mouseup",function(){N.removeClass(s.__selector,"drag")})}),N.bind(r.__selector,"touchstart",function(){N.addClass(this,"drag").bind(window,"touchend",function(){N.removeClass(s.__selector,"drag")})});var o=document.createElement("div");J.extend(r.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),J.extend(r.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:r.__field_knob_border+(r.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),J.extend(r.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),J.extend(r.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),J.extend(o.style,{width:"100%",height:"100%",background:"none"}),dc(o,"top","rgba(0,0,0,0)","#000"),J.extend(r.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),q2(r.__hue_field),J.extend(r.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:r.__input_textShadow+"rgba(0,0,0,0.7)"}),N.bind(r.__saturation_field,"mousedown",a),N.bind(r.__saturation_field,"touchstart",a),N.bind(r.__field_knob,"mousedown",a),N.bind(r.__field_knob,"touchstart",a),N.bind(r.__hue_field,"mousedown",l),N.bind(r.__hue_field,"touchstart",l);function a(g){d(g),N.bind(window,"mousemove",d),N.bind(window,"touchmove",d),N.bind(window,"mouseup",c),N.bind(window,"touchend",c)}function l(g){_(g),N.bind(window,"mousemove",_),N.bind(window,"touchmove",_),N.bind(window,"mouseup",u),N.bind(window,"touchend",u)}function c(){N.unbind(window,"mousemove",d),N.unbind(window,"touchmove",d),N.unbind(window,"mouseup",c),N.unbind(window,"touchend",c),f()}function u(){N.unbind(window,"mousemove",_),N.unbind(window,"touchmove",_),N.unbind(window,"mouseup",u),N.unbind(window,"touchend",u),f()}function h(){var g=ca(this.value);g!==!1?(s.__color.__state=g,s.setValue(s.__color.toOriginal())):this.value=s.__color.toString()}function f(){s.__onFinishChange&&s.__onFinishChange.call(s,s.__color.toOriginal())}r.__saturation_field.appendChild(o),r.__selector.appendChild(r.__field_knob),r.__selector.appendChild(r.__saturation_field),r.__selector.appendChild(r.__hue_field),r.__hue_field.appendChild(r.__hue_knob),r.domElement.appendChild(r.__input),r.domElement.appendChild(r.__selector),r.updateDisplay();function d(g){g.type.indexOf("touch")===-1&&g.preventDefault();var m=s.__saturation_field.getBoundingClientRect(),p=g.touches&&g.touches[0]||g,E=p.clientX,x=p.clientY,M=(E-m.left)/(m.right-m.left),D=1-(x-m.top)/(m.bottom-m.top);return D>1?D=1:D<0&&(D=0),M>1?M=1:M<0&&(M=0),s.__color.v=D,s.__color.s=M,s.setValue(s.__color.toOriginal()),!1}function _(g){g.type.indexOf("touch")===-1&&g.preventDefault();var m=s.__hue_field.getBoundingClientRect(),p=g.touches&&g.touches[0]||g,E=p.clientY,x=1-(E-m.top)/(m.bottom-m.top);return x>1?x=1:x<0&&(x=0),s.__color.h=x*360,s.setValue(s.__color.toOriginal()),!1}return r}return Kt(e,[{key:"updateDisplay",value:function(){var i=ca(this.getValue());if(i!==!1){var r=!1;J.each(gt.COMPONENTS,function(a){if(!J.isUndefined(i[a])&&!J.isUndefined(this.__color.__state[a])&&i[a]!==this.__color.__state[a])return r=!0,{}},this),r&&J.extend(this.__color.__state,i)}J.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var s=this.__color.v<.5||this.__color.s>.5?255:0,o=255-s;J.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+s+","+s+","+s+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,dc(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),J.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+s+","+s+","+s+")",textShadow:this.__input_textShadow+"rgba("+o+","+o+","+o+",.7)"})}}]),e}(oi),L2=["-moz-","-o-","-webkit-","-ms-",""];function dc(n,e,t,i){n.style.background="",J.each(L2,function(r){n.style.cssText+="background: "+r+"linear-gradient("+e+", "+t+" 0%, "+i+" 100%); "})}function q2(n){n.style.background="",n.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",n.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",n.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",n.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",n.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var I2={load:function(e,t){var i=t||document,r=i.createElement("link");r.type="text/css",r.rel="stylesheet",r.href=e,i.getElementsByTagName("head")[0].appendChild(r)},inject:function(e,t){var i=t||document,r=document.createElement("style");r.type="text/css",r.innerHTML=e;var s=i.getElementsByTagName("head")[0];try{s.appendChild(r)}catch{}}},U2=`<div id="dg-save" class="dg dialogue">

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

</div>`,D2=function(e,t){var i=e[t];return J.isArray(arguments[2])||J.isObject(arguments[2])?new C2(e,t,arguments[2]):J.isNumber(i)?J.isNumber(arguments[2])&&J.isNumber(arguments[3])?J.isNumber(arguments[4])?new ua(e,t,arguments[2],arguments[3],arguments[4]):new ua(e,t,arguments[2],arguments[3]):J.isNumber(arguments[4])?new Ss(e,t,{min:arguments[2],max:arguments[3],step:arguments[4]}):new Ss(e,t,{min:arguments[2],max:arguments[3]}):J.isString(i)?new R2(e,t):J.isFunction(i)?new ih(e,t,""):J.isBoolean(i)?new th(e,t):null};function N2(n){setTimeout(n,1e3/60)}var O2=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||N2,F2=function(){function n(){Jt(this,n),this.backgroundElement=document.createElement("div"),J.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),N.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),J.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var e=this;N.bind(this.backgroundElement,"click",function(){e.hide()})}return Kt(n,[{key:"show",value:function(){var t=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),J.defer(function(){t.backgroundElement.style.opacity=1,t.domElement.style.opacity=1,t.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var t=this,i=function r(){t.domElement.style.display="none",t.backgroundElement.style.display="none",N.unbind(t.domElement,"webkitTransitionEnd",r),N.unbind(t.domElement,"transitionend",r),N.unbind(t.domElement,"oTransitionEnd",r)};N.bind(this.domElement,"webkitTransitionEnd",i),N.bind(this.domElement,"transitionend",i),N.bind(this.domElement,"oTransitionEnd",i),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-N.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-N.getHeight(this.domElement)/2+"px"}}]),n}(),B2=M2(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);I2.inject(B2);var pc="dg",mc=72,_c=20,pr="Default",ir=function(){try{return!!window.localStorage}catch{return!1}}(),ar=void 0,gc=!0,wi=void 0,_o=!1,rh=[],Qe=function n(e){var t=this,i=e||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),N.addClass(this.domElement,pc),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],i=J.defaults(i,{closeOnTop:!1,autoPlace:!0,width:n.DEFAULT_WIDTH}),i=J.defaults(i,{resizable:i.autoPlace,hideable:i.autoPlace}),J.isUndefined(i.load)?i.load={preset:pr}:i.preset&&(i.load.preset=i.preset),J.isUndefined(i.parent)&&i.hideable&&rh.push(this),i.resizable=J.isUndefined(i.parent)&&i.resizable,i.autoPlace&&J.isUndefined(i.scrollable)&&(i.scrollable=!0);var r=ir&&localStorage.getItem(Ci(this,"isLocal"))==="true",s=void 0,o=void 0;if(Object.defineProperties(this,{parent:{get:function(){return i.parent}},scrollable:{get:function(){return i.scrollable}},autoPlace:{get:function(){return i.autoPlace}},closeOnTop:{get:function(){return i.closeOnTop}},preset:{get:function(){return t.parent?t.getRoot().preset:i.load.preset},set:function(f){t.parent?t.getRoot().preset=f:i.load.preset=f,V2(this),t.revert()}},width:{get:function(){return i.width},set:function(f){i.width=f,pa(t,f)}},name:{get:function(){return i.name},set:function(f){i.name=f,o&&(o.innerHTML=i.name)}},closed:{get:function(){return i.closed},set:function(f){i.closed=f,i.closed?N.addClass(t.__ul,n.CLASS_CLOSED):N.removeClass(t.__ul,n.CLASS_CLOSED),this.onResize(),t.__closeButton&&(t.__closeButton.innerHTML=f?n.TEXT_OPEN:n.TEXT_CLOSED)}},load:{get:function(){return i.load}},useLocalStorage:{get:function(){return r},set:function(f){ir&&(r=f,f?N.bind(window,"unload",s):N.unbind(window,"unload",s),localStorage.setItem(Ci(t,"isLocal"),f))}}}),J.isUndefined(i.parent)){if(this.closed=i.closed||!1,N.addClass(this.domElement,n.CLASS_MAIN),N.makeSelectable(this.domElement,!1),ir&&r){t.useLocalStorage=!0;var a=localStorage.getItem(Ci(this,"gui"));a&&(i.load=JSON.parse(a))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=n.TEXT_CLOSED,N.addClass(this.__closeButton,n.CLASS_CLOSE_BUTTON),i.closeOnTop?(N.addClass(this.__closeButton,n.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(N.addClass(this.__closeButton,n.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),N.bind(this.__closeButton,"click",function(){t.closed=!t.closed})}else{i.closed===void 0&&(i.closed=!0);var l=document.createTextNode(i.name);N.addClass(l,"controller-name"),o=Ba(t,l);var c=function(f){return f.preventDefault(),t.closed=!t.closed,!1};N.addClass(this.__ul,n.CLASS_CLOSED),N.addClass(o,"title"),N.bind(o,"click",c),i.closed||(this.closed=!1)}i.autoPlace&&(J.isUndefined(i.parent)&&(gc&&(wi=document.createElement("div"),N.addClass(wi,pc),N.addClass(wi,n.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(wi),gc=!1),wi.appendChild(this.domElement),N.addClass(this.domElement,n.CLASS_AUTO_PLACE)),this.parent||pa(t,i.width)),this.__resizeHandler=function(){t.onResizeDebounced()},N.bind(window,"resize",this.__resizeHandler),N.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),N.bind(this.__ul,"transitionend",this.__resizeHandler),N.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),i.resizable&&H2(this),s=function(){ir&&localStorage.getItem(Ci(t,"isLocal"))==="true"&&localStorage.setItem(Ci(t,"gui"),JSON.stringify(t.getSaveObject()))},this.saveToLocalStorageIfPossible=s;function u(){var h=t.getRoot();h.width+=1,J.defer(function(){h.width-=1})}i.parent||u()};Qe.toggleHide=function(){_o=!_o,J.each(rh,function(n){n.domElement.style.display=_o?"none":""})};Qe.CLASS_AUTO_PLACE="a";Qe.CLASS_AUTO_PLACE_CONTAINER="ac";Qe.CLASS_MAIN="main";Qe.CLASS_CONTROLLER_ROW="cr";Qe.CLASS_TOO_TALL="taller-than-window";Qe.CLASS_CLOSED="closed";Qe.CLASS_CLOSE_BUTTON="close-button";Qe.CLASS_CLOSE_TOP="close-top";Qe.CLASS_CLOSE_BOTTOM="close-bottom";Qe.CLASS_DRAG="drag";Qe.DEFAULT_WIDTH=245;Qe.TEXT_CLOSED="Close Controls";Qe.TEXT_OPEN="Open Controls";Qe._keydownHandler=function(n){document.activeElement.type!=="text"&&(n.which===mc||n.keyCode===mc)&&Qe.toggleHide()};N.bind(window,"keydown",Qe._keydownHandler,!1);J.extend(Qe.prototype,{add:function(e,t){return lr(this,e,t,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(e,t){return lr(this,e,t,{color:!0})},remove:function(e){this.__ul.removeChild(e.__li),this.__controllers.splice(this.__controllers.indexOf(e),1);var t=this;J.defer(function(){t.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&wi.removeChild(this.domElement);var e=this;J.each(this.__folders,function(t){e.removeFolder(t)}),N.unbind(window,"keydown",Qe._keydownHandler,!1),vc(this)},addFolder:function(e){if(this.__folders[e]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+e+'"');var t={name:e,parent:this};t.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[e]&&(t.closed=this.load.folders[e].closed,t.load=this.load.folders[e]);var i=new Qe(t);this.__folders[e]=i;var r=Ba(this,i.domElement);return N.addClass(r,"folder"),i},removeFolder:function(e){this.__ul.removeChild(e.domElement.parentElement),delete this.__folders[e.name],this.load&&this.load.folders&&this.load.folders[e.name]&&delete this.load.folders[e.name],vc(e);var t=this;J.each(e.__folders,function(i){e.removeFolder(i)}),J.defer(function(){t.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var e=this.getRoot();if(e.scrollable){var t=N.getOffset(e.__ul).top,i=0;J.each(e.__ul.childNodes,function(r){e.autoPlace&&r===e.__save_row||(i+=N.getHeight(r))}),window.innerHeight-t-_c<i?(N.addClass(e.domElement,Qe.CLASS_TOO_TALL),e.__ul.style.height=window.innerHeight-t-_c+"px"):(N.removeClass(e.domElement,Qe.CLASS_TOO_TALL),e.__ul.style.height="auto")}e.__resize_handle&&J.defer(function(){e.__resize_handle.style.height=e.__ul.offsetHeight+"px"}),e.__closeButton&&(e.__closeButton.style.width=e.width+"px")},onResizeDebounced:J.debounce(function(){this.onResize()},50),remember:function(){if(J.isUndefined(ar)&&(ar=new F2,ar.domElement.innerHTML=U2),this.parent)throw new Error("You can only call remember on a top level GUI.");var e=this;J.each(Array.prototype.slice.call(arguments),function(t){e.__rememberedObjects.length===0&&k2(e),e.__rememberedObjects.indexOf(t)===-1&&e.__rememberedObjects.push(t)}),this.autoPlace&&pa(this,this.width)},getRoot:function(){for(var e=this;e.parent;)e=e.parent;return e},getSaveObject:function(){var e=this.load;return e.closed=this.closed,this.__rememberedObjects.length>0&&(e.preset=this.preset,e.remembered||(e.remembered={}),e.remembered[this.preset]=ts(this)),e.folders={},J.each(this.__folders,function(t,i){e.folders[i]=t.getSaveObject()}),e},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=ts(this),fa(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(e){this.load.remembered||(this.load.remembered={},this.load.remembered[pr]=ts(this,!0)),this.load.remembered[e]=ts(this),this.preset=e,da(this,e,!0),this.saveToLocalStorageIfPossible()},revert:function(e){J.each(this.__controllers,function(t){this.getRoot().load.remembered?sh(e||this.getRoot(),t):t.setValue(t.initialValue),t.__onFinishChange&&t.__onFinishChange.call(t,t.getValue())},this),J.each(this.__folders,function(t){t.revert(t)}),e||fa(this.getRoot(),!1)},listen:function(e){var t=this.__listening.length===0;this.__listening.push(e),t&&oh(this.__listening)},updateDisplay:function(){J.each(this.__controllers,function(e){e.updateDisplay()}),J.each(this.__folders,function(e){e.updateDisplay()})}});function Ba(n,e,t){var i=document.createElement("li");return e&&i.appendChild(e),t?n.__ul.insertBefore(i,t):n.__ul.appendChild(i),n.onResize(),i}function vc(n){N.unbind(window,"resize",n.__resizeHandler),n.saveToLocalStorageIfPossible&&N.unbind(window,"unload",n.saveToLocalStorageIfPossible)}function fa(n,e){var t=n.__preset_select[n.__preset_select.selectedIndex];e?t.innerHTML=t.value+"*":t.innerHTML=t.value}function z2(n,e,t){if(t.__li=e,t.__gui=n,J.extend(t,{options:function(o){if(arguments.length>1){var a=t.__li.nextElementSibling;return t.remove(),lr(n,t.object,t.property,{before:a,factoryArgs:[J.toArray(arguments)]})}if(J.isArray(o)||J.isObject(o)){var l=t.__li.nextElementSibling;return t.remove(),lr(n,t.object,t.property,{before:l,factoryArgs:[o]})}},name:function(o){return t.__li.firstElementChild.firstElementChild.innerHTML=o,t},listen:function(){return t.__gui.listen(t),t},remove:function(){return t.__gui.remove(t),t}}),t instanceof ua){var i=new Ss(t.object,t.property,{min:t.__min,max:t.__max,step:t.__step});J.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(s){var o=t[s],a=i[s];t[s]=i[s]=function(){var l=Array.prototype.slice.call(arguments);return a.apply(i,l),o.apply(t,l)}}),N.addClass(e,"has-slider"),t.domElement.insertBefore(i.domElement,t.domElement.firstElementChild)}else if(t instanceof Ss){var r=function(o){if(J.isNumber(t.__min)&&J.isNumber(t.__max)){var a=t.__li.firstElementChild.firstElementChild.innerHTML,l=t.__gui.__listening.indexOf(t)>-1;t.remove();var c=lr(n,t.object,t.property,{before:t.__li.nextElementSibling,factoryArgs:[t.__min,t.__max,t.__step]});return c.name(a),l&&c.listen(),c}return o};t.min=J.compose(r,t.min),t.max=J.compose(r,t.max)}else t instanceof th?(N.bind(e,"click",function(){N.fakeEvent(t.__checkbox,"click")}),N.bind(t.__checkbox,"click",function(s){s.stopPropagation()})):t instanceof ih?(N.bind(e,"click",function(){N.fakeEvent(t.__button,"click")}),N.bind(e,"mouseover",function(){N.addClass(t.__button,"hover")}),N.bind(e,"mouseout",function(){N.removeClass(t.__button,"hover")})):t instanceof ha&&(N.addClass(e,"color"),t.updateDisplay=J.compose(function(s){return e.style.borderLeftColor=t.__color.toString(),s},t.updateDisplay),t.updateDisplay());t.setValue=J.compose(function(s){return n.getRoot().__preset_select&&t.isModified()&&fa(n.getRoot(),!0),s},t.setValue)}function sh(n,e){var t=n.getRoot(),i=t.__rememberedObjects.indexOf(e.object);if(i!==-1){var r=t.__rememberedObjectIndecesToControllers[i];if(r===void 0&&(r={},t.__rememberedObjectIndecesToControllers[i]=r),r[e.property]=e,t.load&&t.load.remembered){var s=t.load.remembered,o=void 0;if(s[n.preset])o=s[n.preset];else if(s[pr])o=s[pr];else return;if(o[i]&&o[i][e.property]!==void 0){var a=o[i][e.property];e.initialValue=a,e.setValue(a)}}}}function lr(n,e,t,i){if(e[t]===void 0)throw new Error('Object "'+e+'" has no property "'+t+'"');var r=void 0;if(i.color)r=new ha(e,t);else{var s=[e,t].concat(i.factoryArgs);r=D2.apply(n,s)}i.before instanceof oi&&(i.before=i.before.__li),sh(n,r),N.addClass(r.domElement,"c");var o=document.createElement("span");N.addClass(o,"property-name"),o.innerHTML=r.property;var a=document.createElement("div");a.appendChild(o),a.appendChild(r.domElement);var l=Ba(n,a,i.before);return N.addClass(l,Qe.CLASS_CONTROLLER_ROW),r instanceof ha?N.addClass(l,"color"):N.addClass(l,E2(r.getValue())),z2(n,l,r),n.__controllers.push(r),r}function Ci(n,e){return document.location.href+"."+e}function da(n,e,t){var i=document.createElement("option");i.innerHTML=e,i.value=e,n.__preset_select.appendChild(i),t&&(n.__preset_select.selectedIndex=n.__preset_select.length-1)}function xc(n,e){e.style.display=n.useLocalStorage?"block":"none"}function k2(n){var e=n.__save_row=document.createElement("li");N.addClass(n.domElement,"has-save"),n.__ul.insertBefore(e,n.__ul.firstChild),N.addClass(e,"save-row");var t=document.createElement("span");t.innerHTML="&nbsp;",N.addClass(t,"button gears");var i=document.createElement("span");i.innerHTML="Save",N.addClass(i,"button"),N.addClass(i,"save");var r=document.createElement("span");r.innerHTML="New",N.addClass(r,"button"),N.addClass(r,"save-as");var s=document.createElement("span");s.innerHTML="Revert",N.addClass(s,"button"),N.addClass(s,"revert");var o=n.__preset_select=document.createElement("select");if(n.load&&n.load.remembered?J.each(n.load.remembered,function(h,f){da(n,f,f===n.preset)}):da(n,pr,!1),N.bind(o,"change",function(){for(var h=0;h<n.__preset_select.length;h++)n.__preset_select[h].innerHTML=n.__preset_select[h].value;n.preset=this.value}),e.appendChild(o),e.appendChild(t),e.appendChild(i),e.appendChild(r),e.appendChild(s),ir){var a=document.getElementById("dg-local-explain"),l=document.getElementById("dg-local-storage"),c=document.getElementById("dg-save-locally");c.style.display="block",localStorage.getItem(Ci(n,"isLocal"))==="true"&&l.setAttribute("checked","checked"),xc(n,a),N.bind(l,"change",function(){n.useLocalStorage=!n.useLocalStorage,xc(n,a)})}var u=document.getElementById("dg-new-constructor");N.bind(u,"keydown",function(h){h.metaKey&&(h.which===67||h.keyCode===67)&&ar.hide()}),N.bind(t,"click",function(){u.innerHTML=JSON.stringify(n.getSaveObject(),void 0,2),ar.show(),u.focus(),u.select()}),N.bind(i,"click",function(){n.save()}),N.bind(r,"click",function(){var h=prompt("Enter a new preset name.");h&&n.saveAs(h)}),N.bind(s,"click",function(){n.revert()})}function H2(n){var e=void 0;n.__resize_handle=document.createElement("div"),J.extend(n.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function t(s){return s.preventDefault(),n.width+=e-s.clientX,n.onResize(),e=s.clientX,!1}function i(){N.removeClass(n.__closeButton,Qe.CLASS_DRAG),N.unbind(window,"mousemove",t),N.unbind(window,"mouseup",i)}function r(s){return s.preventDefault(),e=s.clientX,N.addClass(n.__closeButton,Qe.CLASS_DRAG),N.bind(window,"mousemove",t),N.bind(window,"mouseup",i),!1}N.bind(n.__resize_handle,"mousedown",r),N.bind(n.__closeButton,"mousedown",r),n.domElement.insertBefore(n.__resize_handle,n.domElement.firstElementChild)}function pa(n,e){n.domElement.style.width=e+"px",n.__save_row&&n.autoPlace&&(n.__save_row.style.width=e+"px"),n.__closeButton&&(n.__closeButton.style.width=e+"px")}function ts(n,e){var t={};return J.each(n.__rememberedObjects,function(i,r){var s={},o=n.__rememberedObjectIndecesToControllers[r];J.each(o,function(a,l){s[l]=e?a.initialValue:a.getValue()}),t[r]=s}),t}function V2(n){for(var e=0;e<n.__preset_select.length;e++)n.__preset_select[e].value===n.preset&&(n.__preset_select.selectedIndex=e)}function oh(n){n.length!==0&&O2.call(window,function(){oh(n)}),J.each(n,function(e){e.updateDisplay()})}var ah=Qe,Ms,lh;class G2{constructor(){Za(this,Ms);this.display={board:{x:0,y:0,w:10,h:10},pieces:[],shop:[{id:Qr(),appellation:ot.Soldier},{id:Qr(),appellation:ot.Soldier},{id:Qr(),appellation:ot.Soldier}]},this.gui=new ah,this.pieceHandles=[],this.gui.add(this,"addPiece")}get pieceIterators(){return this.pieceHandles.filter(e=>e.simulated).map(e=>e.iterator)}addPiece(){const e=Ja(this,Ms,lh).call(this),t=e.next().value;this.display.pieces.push(t);const i=this.gui.addFolder(t.id),r={id:t.id,iterator:e,simulated:!0,startSimulation:()=>(r.simulated=!0,this),stopSimulation:()=>(r.simulated=!1,this.display.pieces=this.display.pieces.map(s=>s.id===t.id?{...s,animation:Ge.Idle,animationStartAt:Date.now()}:s),this),removePiece:()=>(this.display.pieces=this.display.pieces.filter(s=>s.id!==t.id),i.hide(),this.pieceHandles=this.pieceHandles.filter(s=>s.id!==t.id),this),gui:i};return i.add(r,"startSimulation"),i.add(r,"stopSimulation"),i.add(r,"removePiece"),this.pieceHandles.push(r),this}subscribe(e){const t=new Cc;return t.next(this.display),(async()=>{for(;;){for(const r of this.pieceIterators){const s=r.next().value;this.display={...this.display,pieces:this.display.pieces.map(o=>o.id===s.id?s:o)}}await new Promise(r=>setTimeout(r,1e3)),t.next(this.display)}})(),t.pipe(sf(tf(100).pipe(Jc(0))),ga(([r])=>r)).subscribe(e)}}Ms=new WeakSet,lh=function*(){let t={id:Qr(),hero:{appellation:ot.Soldier,position:{x:0,y:0,w:0,h:0},grade:Math.floor(Math.random()*5)+1},animationStartAt:Date.now(),animation:Ge.Idle,position:{x:Math.floor(Math.random()*this.display.board.w),y:Math.floor(Math.random()*this.display.board.w),w:0,h:0},attributes:{maxHealth:100,health:100,maxMana:50,mana:50},right:Math.random()>.5};for(;;)switch(Math.floor(Math.random()*6)){case 0:if(t.animation===Ge.Idle)break;t={...t,attributes:{...t.attributes,health:t.attributes.maxHealth},animation:Ge.Idle,animationStartAt:Date.now()},yield{...t};break;case 1:if(t.animation===Ge.Attack)break;t.animation=Ge.Attack,t.animationStartAt=Date.now(),yield{...t};break;case 2:if(t.animation===Ge.Death)break;t.animation=Ge.Death,t.animationStartAt=Date.now(),yield{...t};break;case 3:if(t.animation===Ge.Ability)break;t.animation=Ge.Ability,t.animationStartAt=Date.now(),yield{...t};break;case 4:{if(t.animation===Ge.Walk)break;const r=Math.random()>.33?Math.floor(Math.random()*3)-1:0,s=r===0?Math.random()>.5?1:-1:0,o=t.position.x+r,a=t.position.y+s;if(o<0||o>=this.display.board.w||a<0||a>=this.display.board.h||this.display.pieces.some(l=>l.position.x===o&&l.position.y===a))continue;t={...t,position:{...t.position,x:o,y:a},animation:Ge.Walk,animationStartAt:Date.now()},yield{...t};break}case 5:if(t.animation===Ge.Hurt)break;t={...t,animation:Ge.Hurt,animationStartAt:Date.now(),attributes:{...t.attributes,health:t.attributes.health*.6}},yield{...t};break}};function W2(n,e){const t=1/e.board.w;(n.pieceGeometry.parameters.width!==t||n.pieceGeometry.parameters.height!==t)&&(n.pieceGeometry.dispose(),n.pieceGeometry=new Ft(t,t))}function X2(n,e){var t,i,r,s;for(const o of e.pieces)if(((t=n.pieceAnimatedTextures[o.id])==null?void 0:t.appellation)!==o.hero.appellation||((i=n.pieceAnimatedTextures[o.id])==null?void 0:i.animation)!==o.animation||((r=n.pieceAnimatedTextures[o.id])==null?void 0:r.animationStartAt)!==o.animationStartAt){(s=n.pieceAnimatedTextures[o.id])==null||s.dispose();const[a,l]=Ku(o.hero.appellation,o.animation);n.pieceAnimatedTextures[o.id]={texture:a,animationStartAt:o.animationStartAt,appellation:o.hero.appellation,animation:o.animation,dispose:l}}for(const o of Object.keys(n.pieceAnimatedTextures))e.pieces.find(a=>a.id===o)===void 0&&(n.pieceAnimatedTextures[o].dispose(),delete n.pieceAnimatedTextures[o])}function Y2(n,e){var t,i,r;for(const s of e.pieces)((t=n.pieceMaterials[s.id])==null?void 0:t.map)!==n.pieceAnimatedTextures[s.id].texture&&((i=n.pieceMaterials[s.id])==null||i.dispose(),n.pieceMaterials[s.id]=new Qt({map:n.pieceAnimatedTextures[s.id].texture,transparent:!0,side:tn}));for(const s of Object.keys(n.pieceAnimatedTextures))e.pieces.find(o=>o.id===s)===void 0&&((r=n.pieceMaterials[s])==null||r.dispose(),delete n.pieceMaterials[s])}function Z2(n,e){var t,i;for(const r of e.pieces){const s=n.pieceMaterials[r.id];if(!s)throw new Error("Material not found !");const o=!n.pieceMeshes[r.id];(t=n.pieceMeshes)[i=r.id]||(t[i]=new ft(n.pieceGeometry,s));const a=n.pieceMeshes[r.id];o&&n.scene.add(a),a.material!==s&&(a.material=s);const l=1,c=1/e.board.w,u=-(l/2)+c/2,h=l/2+c/2,f=l/2-c/2;o&&a.position.set(u+c*r.position.x,h,f-c*r.position.y);const d=u+c*r.position.x,_=h,g=f-c*r.position.y,m=.01,p=d-a.position.x,E=_-a.position.y,x=g-a.position.z,M=p>m?m:p<-m?-m:0,D=E>m?m:E<-m?-m:0,C=x>m?m:x<-m?-m:0;a.position.set(a.position.x+M,a.position.y+D,a.position.z+C),o&&a.rotation.set(0,r.right?Math.PI:0,0);const w=7.3;a.scale.set(w,w,1)}for(const r of Object.keys(n.pieceMeshes))e.pieces.find(s=>s.id===r)||(n.scene.remove(n.pieceMeshes[r]),delete n.pieceMeshes[r])}function J2(n,e){const t=1/e.board.w,i=t*.6,r=t*.11;(n.pieceBarsBackgroundGeometry.parameters.width!==i||n.pieceBarsBackgroundGeometry.parameters.height!==r)&&(n.pieceBarsBackgroundGeometry.dispose(),n.pieceBarsBackgroundGeometry=new Ft(i,r))}function K2(n,e){var t,i;for(const r of e.pieces){const s=n.pieceBarsBackgroundMaterial;if(!s)throw new Error("Material not found !");const o=!n.pieceBarsBackgroundMeshes[r.id];(t=n.pieceBarsBackgroundMeshes)[i=r.id]||(t[i]=new ft(n.pieceBarsBackgroundGeometry,s));const a=n.pieceBarsBackgroundMeshes[r.id];o&&n.scene.add(a),a.material!==s&&(a.material=s);const l=n.pieceMeshes[r.id];if(!l)throw new Error("Piece mesh not found !");const c=l.position.x,u=l.position.y+.11,h=l.position.z;(c!==a.position.x||u!==a.position.y||h!==a.position.z)&&a.position.set(c,u,h)}for(const r of Object.keys(n.pieceBarsBackgroundMeshes))e.pieces.find(s=>s.id===r)||(n.scene.remove(n.pieceBarsBackgroundMeshes[r]),delete n.pieceBarsBackgroundMeshes[r])}function j2(n,e){var t,i;for(const r of e.pieces){const s=n.pieceBarsBackgroundGeometry.parameters.width*(r.attributes.health/r.attributes.maxHealth||.001),o=n.pieceBarsBackgroundGeometry.parameters.height;(t=n.pieceHealthBarGeometries)[i=r.id]||(t[i]=new Ft(s,o));const a=n.pieceHealthBarGeometries[r.id];(a.parameters.width!==s||a.parameters.height!==o)&&(a.dispose(),n.pieceHealthBarGeometries[r.id]=new Ft(s,o))}for(const r of Object.keys(n.pieceHealthBarGeometries))e.pieces.some(s=>s.id===r)||(n.pieceHealthBarGeometries[r].dispose(),delete n.pieceHealthBarGeometries[r])}function $2(n,e){var t,i;for(const r of e.pieces){const s=n.pieceHealthBarGeometries[r.id];if(!s)throw new Error("Geometry not found !");const o=!n.pieceHealthBarMeshes[r.id];(t=n.pieceHealthBarMeshes)[i=r.id]||(t[i]=new ft(s,n.pieceHealthBarMaterial));const a=n.pieceHealthBarMeshes[r.id];s!==a.geometry&&(a.geometry=s),o&&n.scene.add(a);const l=n.pieceBarsBackgroundMeshes[r.id];if(!l)throw new Error("Piece mesh not found !");const c=l.position.x,u=l.position.y,h=l.position.z+1e-4;(c!==a.position.x||u!==a.position.y||h!==a.position.z)&&a.position.set(c,u,h)}for(const r of Object.keys(n.pieceHealthBarMeshes))e.pieces.find(s=>s.id===r)||(n.scene.remove(n.pieceHealthBarMeshes[r]),delete n.pieceHealthBarMeshes[r])}function Q2(n,e){var t,i,r,s;for(const o of e.pieces){(t=n.pieceGradeMeshes)[i=o.id]||(t[i]={});for(let a=0;a<o.hero.grade;a++){const l=!((r=n.pieceGradeMeshes[o.id])!=null&&r[a]);(s=n.pieceGradeMeshes[o.id])[a]||(s[a]=new ft(n.pieceGradeGeometry,n.pieceGradeMaterial));const c=n.pieceGradeMeshes[o.id][a];l&&n.scene.add(c);const u=n.pieceMeshes[o.id];if(!u)throw new Error("Piece mesh not found !");const h=u.position.x+.012*a-.012*(o.hero.grade-1)/2,f=u.position.y+.095,d=u.position.z+.001;(h!==c.position.x||f!==c.position.y||d!==c.position.z)&&c.position.set(h,f,d)}}for(const o of Object.keys(n.pieceGradeMeshes))for(const a of Object.keys(n.pieceGradeMeshes[o])){const l=Number.parseInt(a),c=e.pieces.find(u=>u.id===o);(!c||c.hero.grade<l)&&(n.scene.remove(n.pieceGradeMeshes[o][l]),delete n.pieceGradeMeshes[o][l])}}function ev(n,e){var t,i;for(const[r,s]of Object.entries(e.shop)){const o=!n.shopProductBackgroundMeshes[s.id];(t=n.shopProductBackgroundMeshes)[i=s.id]||(t[i]=new ft(n.shopProductBackgroundGeometry,n.shopProductBackgroundMaterial));const a=n.shopProductBackgroundMeshes[s.id];if(o){n.scene.add(a),a.rotation.x=n.camera.rotation.x,a.position.y=.7,a.position.z=.9;const l=Number.parseInt(r);a.position.x=l*.15}}for(const r of Object.keys(n.shopProductBackgroundMeshes))e.shop.find(s=>s.id===r)||(n.scene.remove(n.shopProductBackgroundMeshes[r]),delete n.shopProductBackgroundMeshes[r])}function tv(n,e){var t,i;for(const r of e.shop){const s=!n.shopProductImageMeshes[r.id];(t=n.shopProductImageMeshes)[i=r.id]||(t[i]=new ft(n.shopProductImageGeometry,n.shopProductImageMaterial[r.appellation]));const o=n.shopProductImageMeshes[r.id],a=n.shopProductBackgroundMeshes[r.id];if(!a)throw new Error("Background not found !");if(s){n.scene.add(o),o.rotation.x=a.rotation.x,o.position.y=a.position.y,o.position.z=a.position.z+1e-4,o.position.x=a.position.x;const l=new q(0,.01,0);l.applyEuler(a.rotation),o.position.y=a.position.y+l.y,o.position.z=a.position.z+l.z,o.scale.set(3,3,3)}}for(const r of Object.keys(n.shopProductImageMeshes))e.shop.find(s=>s.id===r)||(n.scene.remove(n.shopProductImageMeshes[r]),delete n.shopProductImageMeshes[r])}function nv(n){switch(n){case ot.Soldier:return[et.Knight,et.Ranged];default:throw new Error(`Unknown appellation: ${n} !`)}}function iv(n,e){var t,i,r,s;for(const o of e.shop){const a=nv(o.appellation),l=n.shopProductBackgroundMeshes[o.id];if(!l)throw new Error("Background not found !");for(const[c,u]of a.entries()){const h=!((t=n.shopProductTraitMeshes[o.id])!=null&&t[c]);(i=n.shopProductTraitMeshes)[r=o.id]||(i[r]={}),(s=n.shopProductTraitMeshes[o.id])[c]||(s[c]=new ft(n.shopProductTraitGeometry[u],n.shopProductTraitMaterial));const f=n.shopProductTraitMeshes[o.id][c];if(h){n.scene.add(f),f.rotation.x=l.rotation.x,f.position.x=l.position.x-.03;const d=new q(0,-.04-.017*c,0);d.applyEuler(l.rotation),f.position.y=l.position.y+d.y,f.position.z=l.position.z+1e-4+d.z}}}for(const o of Object.keys(n.shopProductTraitMeshes))if(!e.shop.find(a=>a.id===o)){for(const a of Object.values(n.shopProductTraitMeshes[o]))n.scene.remove(a);delete n.shopProductTraitMeshes[o]}}function rv(n,e){var t,i;for(const r of e.shop){const s=n.shopProductBackgroundMeshes[r.id];if(!s)throw new Error("Background not found !");const o=!n.shopProductAppellationMeshes[r.id];(t=n.shopProductAppellationMeshes)[i=r.id]||(t[i]=new ft(n.shopProductAppellationGeometry[r.appellation],n.shopProductAppellationMaterial));const a=n.shopProductAppellationMeshes[r.id];if(o){n.scene.add(a),a.rotation.x=s.rotation.x,a.position.x=s.position.x-.03;const l=new q(0,.055,0);l.applyEuler(s.rotation),a.position.y=s.position.y+l.y,a.position.z=s.position.z+1e-4+l.z}}for(const r of Object.keys(n.shopProductAppellationMeshes))if(!e.shop.find(s=>s.id===r)){const s=n.shopProductAppellationMeshes[r];if(!s)throw new Error("Mesh not found !");n.scene.remove(s),delete n.shopProductAppellationMeshes[r]}}function sv(n,e){W2(n,e),X2(n,e),Y2(n,e),Z2(n,e),J2(n,e),K2(n,e),j2(n,e),$2(n,e),Q2(n,e),ev(n,e),tv(n,e),iv(n,e),rv(n,e)}function ov(){const n={fps:0};Wg().subscribe(t=>{n.fps=t}),new ah().add(n,"fps").listen()}r2.then(()=>{const n=S2();Jg().pipe(Jc(Zu()),Zg(n),of(),af(([e])=>Kg(e))).subscribe(),new G2().addPiece().addPiece().addPiece().addPiece().addPiece().addPiece().addPiece().addPiece().addPiece().addPiece().addPiece().addPiece().addPiece().addPiece().addPiece().subscribe({next(e){sv(n,e)}}),ov()}).catch(console.error);
