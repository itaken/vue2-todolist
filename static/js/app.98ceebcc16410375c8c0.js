webpackJsonp([1],{42:function(e,t,n){"use strict";var r=n(16),o=n(92);r.a.use(o.a),t.a=new o.a({routes:[{path:"/",name:"TODOList",component:n(89)}]})},43:function(e,t,n){n(88);var r=n(40)(n(44),n(91),null,null);e.exports=r.exports},44:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app"}},45:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(17),o=n.n(r),i=n(48);t.default={data:function(){return{todoItem:"",items:i.a.fetch()}},methods:{createTodo:function(){var e=this.todoItem.trim();if(""==e)return void(this.todoItem="");this.items.unshift({name:e,isFinish:!1}),this.todoItem=""},toggleFinish:function(e){e.isFinish=!e.isFinish},delTodo:function(e,t){var n="确定删除该待完成项?";"object"===(void 0===t?"undefined":o()(t))&&(n=!1===t.isFinish?"该项未完成, 是否确定删除?":"该项已完成, 是否确定删除?"),confirm(n)&&this.items.splice(e,1)}},watch:{items:{handler:function(e){i.a.save(e)},deep:!0}}}},46:function(e,t,n){"use strict";(function(e,t){var r,r,o=n(51),i=n.n(o),s=n(50),a=n.n(s),u=n(49),c=n.n(u),l=n(17),f=n.n(l);!function(r){if("object"==("undefined"==typeof exports?"undefined":f()(exports))&&void 0!==t)t.exports=r();else if("function"==typeof define&&n(94))define([],r);else{var o;o="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:this,o.store=r()}}(function(){return function e(t,n,o){function i(a,u){if(!n[a]){if(!t[a]){var c="function"==typeof r&&r;if(!u&&c)return r(a,!0);if(s)return s(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var f=n[a]={exports:{}};t[a][0].call(f.exports,function(e){var n=t[a][1][e];return i(n||e)},f,f.exports,e,t,n,o)}return n[a].exports}for(var s="function"==typeof r&&r,a=0;a<o.length;a++)i(o[a]);return i}({1:[function(e,t,n){var r=e("../src/store-engine"),o=[e("../storages/localStorage"),e("../storages/sessionStorage"),e("../storages/cookieStorage"),e("../storages/memoryStorage")],i=[];t.exports=r.createStore(o,i)},{"../src/store-engine":2,"../storages/cookieStorage":4,"../storages/localStorage":5,"../storages/memoryStorage":6,"../storages/sessionStorage":7}],2:[function(e,t,n){function r(e,t){var n={_seenPlugins:[],_namespacePrefix:"",_namespaceRegexp:null,_legalNamespace:/^[a-zA-Z0-9_\-]+$/,_storage:function(){if(!this.enabled)throw new Error("store.js: No supported storage has been added! Add one (e.g store.addStorage(require('store/storages/cookieStorage')) or use a build with more built-in storages (e.g https://github.com/marcuswestin/store.js/tree/master/dist/store.legacy.min.js)");return this._storage.resolved},_testStorage:function(e){try{var t="__storejs__test__";e.write(t,t);var n=e.read(t)===t;return e.remove(t),n}catch(e){return!1}},_assignPluginFnProp:function(e,t){var n=this[t];this[t]=function(){function t(){if(n){var e=n.apply(o,t.args);return delete t.args,e}}var r=Array.prototype.slice.call(arguments,0),o=this,i=[t].concat(r);return t.args=r,e.apply(o,i)}},_serialize:function(e){return c()(e)},_deserialize:function(e,t){if(!e)return t;var n="";try{n=JSON.parse(e)}catch(t){n=e}return void 0!==n?n:t}},r=a(n,p);return s(e,function(e){r.addStorage(e)}),s(t,function(e){r.addPlugin(e)}),r}var o=e("./util"),i=o.pluck,s=o.each,a=o.create,u=o.isList,l=o.isFunction,f=o.isObject;t.exports={createStore:r};var p={version:"2.0.3",enabled:!1,storage:null,addStorage:function(e){this.enabled||this._testStorage(e)&&(this._storage.resolved=e,this.enabled=!0,this.storage=e.name)},addPlugin:function(e){var t=this;if(u(e))return void s(e,function(e){t.addPlugin(e)});if(!i(this._seenPlugins,function(t){return e===t})){if(this._seenPlugins.push(e),!l(e))throw new Error("Plugins must be function values that return objects");var n=e.call(this);if(!f(n))throw new Error("Plugins must return an object of function properties");s(n,function(n,r){if(!l(n))throw new Error("Bad plugin property: "+r+" from plugin "+e.name+". Plugins should only return functions.");t._assignPluginFnProp(n,r)})}},get:function(e,t){var n=this._storage().read(this._namespacePrefix+e);return this._deserialize(n,t)},set:function(e,t){return void 0===t?this.remove(e):(this._storage().write(this._namespacePrefix+e,this._serialize(t)),t)},remove:function(e){this._storage().remove(this._namespacePrefix+e)},each:function(e){var t=this;this._storage().each(function(n,r){e(t._deserialize(n),r.replace(t._namespaceRegexp,""))})},clearAll:function(){this._storage().clearAll()},hasNamespace:function(e){return this._namespacePrefix=="__storejs_"+e+"_"},namespace:function(e){if(!this._legalNamespace.test(e))throw new Error("store.js namespaces can only have alhpanumerics + underscores and dashes");var t="__storejs_"+e+"_";return a(this,{_namespacePrefix:t,_namespaceRegexp:t?new RegExp("^"+t):null})},createStore:function(e,t){return r(e,t)}}},{"./util":3}],3:[function(t,n,r){(function(e){function t(e,t){return function(){return t.apply(e,Array.prototype.slice.call(arguments,0))}}function r(e,t){return Array.prototype.slice.call(e,t||0)}function o(e,t){u(e,function(e,n){return t(e,n),!1})}function s(e,t){var n=c(e)?[]:{};return u(e,function(e,r){return n[r]=t(e,r),!1}),n}function u(e,t){if(c(e)){for(var n=0;n<e.length;n++)if(t(e[n],n))return e[n]}else for(var r in e)if(e.hasOwnProperty(r)&&t(e[r],r))return e[r]}function c(e){return null!=e&&"function"!=typeof e&&"number"==typeof e.length}function l(e){return e&&"[object Function]"==={}.toString.call(e)}function f(e){return e&&"[object Object]"==={}.toString.call(e)}var p=function(){return a.a?a.a:function(e,t,n,r){for(var i=1;i<arguments.length;i++)o(Object(arguments[i]),function(t,n){e[n]=t});return e}}(),d=function(){if(i.a)return function(e,t,n,o){var s=r(arguments,1);return p.apply(this,[i()(e)].concat(s))};var e=function(){};return function(t,n,o,i){var s=r(arguments,1);return e.prototype=t,p.apply(this,[new e].concat(s))}}(),v=function(){return String.prototype.trim?function(e){return String.prototype.trim.call(e)}:function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}}(),h="undefined"!=typeof window?window:e;n.exports={assign:p,create:d,trim:v,bind:t,slice:r,each:o,map:s,pluck:u,isList:c,isFunction:l,isObject:f,Global:h}}).call(this,void 0!==e?e:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],4:[function(e,t,n){function r(e){if(!e||!u(e))return null;var t="(?:^|.*;\\s*)"+escape(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*";return unescape(p.cookie.replace(new RegExp(t),"$1"))}function o(e){for(var t=p.cookie.split(/; ?/g),n=t.length-1;n>=0;n--)if(f(t[n])){var r=t[n].split("="),o=unescape(r[0]),i=unescape(r[1]);e(i,o)}}function i(e,t){e&&(p.cookie=escape(e)+"="+escape(t)+"; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/")}function s(e){e&&u(e)&&(p.cookie=escape(e)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/")}function a(){o(function(e,t){s(t)})}function u(e){return new RegExp("(?:^|;\\s*)"+escape(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(p.cookie)}var c=e("../src/util"),l=c.Global,f=c.trim;t.exports={name:"cookieStorage",read:r,write:i,each:o,remove:s,clearAll:a};var p=l.document},{"../src/util":3}],5:[function(e,t,n){function r(){return l.localStorage}function o(e){return r().getItem(e)}function i(e,t){return r().setItem(e,t)}function s(e){for(var t=r().length-1;t>=0;t--){var n=r().key(t);e(o(n),n)}}function a(e){return r().removeItem(e)}function u(){return r().clear()}var c=e("../src/util"),l=c.Global;t.exports={name:"localStorage",read:o,write:i,each:s,remove:a,clearAll:u}},{"../src/util":3}],6:[function(e,t,n){function r(e){return u[e]}function o(e,t){u[e]=t}function i(e){for(var t in u)u.hasOwnProperty(t)&&e(u[t],t)}function s(e){delete u[e]}function a(e){u={}}t.exports={name:"memoryStorage",read:r,write:o,each:i,remove:s,clearAll:a};var u={}},{}],7:[function(e,t,n){function r(){return l.sessionStorage}function o(e){return r().getItem(e)}function i(e,t){return r().setItem(e,t)}function s(e){for(var t=r().length-1;t>=0;t--){var n=r().key(t);e(o(n),n)}}function a(e){return r().removeItem(e)}function u(){return r().clear()}var c=e("../src/util"),l=c.Global;t.exports={name:"sessionStorage",read:o,write:i,each:s,remove:a,clearAll:u}},{"../src/util":3}]},{},[1])(1)})}).call(t,n(41),n(95)(e))},47:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(16),o=n(43),i=n.n(o),s=n(42);r.a.config.productionTip=!1,new r.a({el:"#app",router:s.a,template:"<App/>",components:{App:i.a}})},48:function(e,t,n){"use strict";var r=n(17),o=n.n(r),i=(n(46),n(16));i.a.use(store),t.a={save:function(e){if(null!=e)return store.set("TODOList-ITEMS",e)},fetch:function(){var e=store.get("TODOList-ITEMS");return"object"!==(void 0===e?"undefined":o()(e))&&(e=[]),e}}},87:function(e,t){},88:function(e,t){},89:function(e,t,n){n(87);var r=n(40)(n(45),n(90),"data-v-21f92725",null);e.exports=r.exports},90:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"todo-head"},[n("span"),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.todoItem,expression:"todoItem"}],attrs:{autofocus:"",autocomplete:"off",title:"ENTER健保存",placeholder:"今天, 想干点啥呢?"},domProps:{value:e.todoItem},on:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13))return null;e.createTodo(t)},input:function(t){t.target.composing||(e.todoItem=t.target.value)}}})]),e._v(" "),n("div",{staticClass:"todo-list"},[n("ul",e._l(e.items,function(t,r){return n("li",{class:{finished:t.isFinish},on:{click:function(n){e.toggleFinish(t)},dblclick:function(n){e.delTodo(r,t)}}},[e._v("\n                "+e._s(t.name)+"\n            ")])}))])])},staticRenderFns:[]}},91:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pure-g",attrs:{id:"app"}},[e._m(0),e._v(" "),n("div",{staticClass:"content pure-u-1 pure-u-md-3-4"},[n("router-view")],1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sidebar pure-u-1 pure-u-md-1-4"},[n("div",{staticClass:"header"},[n("h1",{staticClass:"brand-title"},[e._v("TODOList")]),e._v(" "),n("h2",{staticClass:"brand-tagline"},[e._v("创建你的日程")]),e._v(" "),n("ul",{staticClass:"nav-list"},[n("li",{staticClass:"nav-item"},[n("a",{staticClass:"pure-button",attrs:{href:"https://github.com/itaken/vue2-todolist"}},[e._v("Github")])])])]),e._v(" "),n("div",{staticClass:"sidebar-footer"},[n("label",[n("a",{attrs:{href:"https//github.com/itaken"}},[e._v("@itaken")])])])])}]}}},[47]);
//# sourceMappingURL=app.98ceebcc16410375c8c0.js.map