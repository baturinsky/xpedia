
(function(l, i, v, e) { v = l.createElement(i); v.async = 1; v.src = '//' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; e = l.getElementsByTagName(i)[0]; e.parentNode.insertBefore(v, e)})(document, 'script');
var app = (function () {
    'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function commonjsRequire () {
    	throw new Error('Dynamic requires are not currently supported by rollup-plugin-commonjs');
    }

    function unwrapExports (x) {
    	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
    }

    function createCommonjsModule(fn, module) {
    	return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

    var fuse = createCommonjsModule(function (module, exports) {
    /*!
     * Fuse.js v3.4.5 - Lightweight fuzzy-search (http://fusejs.io)
     * 
     * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
     * All Rights Reserved. Apache Software License 2.0
     * 
     * http://www.apache.org/licenses/LICENSE-2.0
     */
    !function(e,t){module.exports=t();}(commonjsGlobal,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r});},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0});},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=function(e){return Array.isArray?Array.isArray(e):"[object Array]"===Object.prototype.toString.call(e)};},function(e,t,n){function r(e){return (r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r);}}var i=n(2),a=n(8),s=n(0),c=function(){function e(t,n){var r=n.location,o=void 0===r?0:r,i=n.distance,s=void 0===i?100:i,c=n.threshold,h=void 0===c?.6:c,l=n.maxPatternLength,u=void 0===l?32:l,f=n.caseSensitive,d=void 0!==f&&f,v=n.tokenSeparator,p=void 0===v?/ +/g:v,g=n.findAllMatches,y=void 0!==g&&g,m=n.minMatchCharLength,k=void 0===m?1:m,S=n.id,x=void 0===S?null:S,b=n.keys,M=void 0===b?[]:b,_=n.shouldSort,L=void 0===_||_,w=n.getFn,A=void 0===w?a:w,C=n.sortFn,I=void 0===C?function(e,t){return e.score-t.score}:C,O=n.tokenize,j=void 0!==O&&O,P=n.matchAllTokens,F=void 0!==P&&P,T=n.includeMatches,z=void 0!==T&&T,E=n.includeScore,K=void 0!==E&&E,$=n.verbose,J=void 0!==$&&$;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:o,distance:s,threshold:h,maxPatternLength:u,isCaseSensitive:d,tokenSeparator:p,findAllMatches:y,minMatchCharLength:k,id:x,keys:M,includeMatches:z,includeScore:K,shouldSort:L,getFn:A,sortFn:I,verbose:J,tokenize:j,matchAllTokens:F},this.setCollection(t);}var t,n;return t=e,(n=[{key:"setCollection",value:function(e){return this.list=e,e}},{key:"search",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{limit:!1};this._log('---------\nSearch pattern: "'.concat(e,'"'));var n=this._prepareSearchers(e),r=n.tokenSearchers,o=n.fullSearcher,i=this._search(r,o),a=i.weights,s=i.results;return this._computeScore(a,s),this.options.shouldSort&&this._sort(s),t.limit&&"number"==typeof t.limit&&(s=s.slice(0,t.limit)),this._format(s)}},{key:"_prepareSearchers",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=[];if(this.options.tokenize)for(var n=e.split(this.options.tokenSeparator),r=0,o=n.length;r<o;r+=1)t.push(new i(n[r],this.options));return {tokenSearchers:t,fullSearcher:new i(e,this.options)}}},{key:"_search",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=this.list,r={},o=[];if("string"==typeof n[0]){for(var i=0,a=n.length;i<a;i+=1)this._analyze({key:"",value:n[i],record:i,index:i},{resultMap:r,results:o,tokenSearchers:e,fullSearcher:t});return {weights:null,results:o}}for(var s={},c=0,h=n.length;c<h;c+=1)for(var l=n[c],u=0,f=this.options.keys.length;u<f;u+=1){var d=this.options.keys[u];if("string"!=typeof d){if(s[d.name]={weight:1-d.weight||1},d.weight<=0||d.weight>1)throw new Error("Key weight has to be > 0 and <= 1");d=d.name;}else s[d]={weight:1};this._analyze({key:d,value:this.options.getFn(l,d),record:l,index:c},{resultMap:r,results:o,tokenSearchers:e,fullSearcher:t});}return {weights:s,results:o}}},{key:"_analyze",value:function(e,t){var n=e.key,r=e.arrayIndex,o=void 0===r?-1:r,i=e.value,a=e.record,c=e.index,h=t.tokenSearchers,l=void 0===h?[]:h,u=t.fullSearcher,f=void 0===u?[]:u,d=t.resultMap,v=void 0===d?{}:d,p=t.results,g=void 0===p?[]:p;if(null!=i){var y=!1,m=-1,k=0;if("string"==typeof i){this._log("\nKey: ".concat(""===n?"-":n));var S=f.search(i);if(this._log('Full text: "'.concat(i,'", score: ').concat(S.score)),this.options.tokenize){for(var x=i.split(this.options.tokenSeparator),b=[],M=0;M<l.length;M+=1){var _=l[M];this._log('\nPattern: "'.concat(_.pattern,'"'));for(var L=!1,w=0;w<x.length;w+=1){var A=x[w],C=_.search(A),I={};C.isMatch?(I[A]=C.score,y=!0,L=!0,b.push(C.score)):(I[A]=1,this.options.matchAllTokens||b.push(1)),this._log('Token: "'.concat(A,'", score: ').concat(I[A]));}L&&(k+=1);}m=b[0];for(var O=b.length,j=1;j<O;j+=1)m+=b[j];m/=O,this._log("Token score average:",m);}var P=S.score;m>-1&&(P=(P+m)/2),this._log("Score average:",P);var F=!this.options.tokenize||!this.options.matchAllTokens||k>=l.length;if(this._log("\nCheck Matches: ".concat(F)),(y||S.isMatch)&&F){var T=v[c];T?T.output.push({key:n,arrayIndex:o,value:i,score:P,matchedIndices:S.matchedIndices}):(v[c]={item:a,output:[{key:n,arrayIndex:o,value:i,score:P,matchedIndices:S.matchedIndices}]},g.push(v[c]));}}else if(s(i))for(var z=0,E=i.length;z<E;z+=1)this._analyze({key:n,arrayIndex:z,value:i[z],record:a,index:c},{resultMap:v,results:g,tokenSearchers:l,fullSearcher:f});}}},{key:"_computeScore",value:function(e,t){this._log("\n\nComputing score:\n");for(var n=0,r=t.length;n<r;n+=1){for(var o=t[n].output,i=o.length,a=1,s=1,c=0;c<i;c+=1){var h=e?e[o[c].key].weight:1,l=(1===h?o[c].score:o[c].score||.001)*h;1!==h?s=Math.min(s,l):(o[c].nScore=l,a*=l);}t[n].score=1===s?a:s,this._log(t[n]);}}},{key:"_sort",value:function(e){this._log("\n\nSorting...."),e.sort(this.options.sortFn);}},{key:"_format",value:function(e){var t=[];if(this.options.verbose){var n=[];this._log("\n\nOutput:\n\n",JSON.stringify(e,function(e,t){if("object"===r(t)&&null!==t){if(-1!==n.indexOf(t))return;n.push(t);}return t})),n=null;}var o=[];this.options.includeMatches&&o.push(function(e,t){var n=e.output;t.matches=[];for(var r=0,o=n.length;r<o;r+=1){var i=n[r];if(0!==i.matchedIndices.length){var a={indices:i.matchedIndices,value:i.value};i.key&&(a.key=i.key),i.hasOwnProperty("arrayIndex")&&i.arrayIndex>-1&&(a.arrayIndex=i.arrayIndex),t.matches.push(a);}}}),this.options.includeScore&&o.push(function(e,t){t.score=e.score;});for(var i=0,a=e.length;i<a;i+=1){var s=e[i];if(this.options.id&&(s.item=this.options.getFn(s.item,this.options.id)[0]),o.length){for(var c={item:s.item},h=0,l=o.length;h<l;h+=1)o[h](s,c);t.push(c);}else t.push(s.item);}return t}},{key:"_log",value:function(){var e;this.options.verbose&&(e=console).log.apply(e,arguments);}}])&&o(t.prototype,n),e}();e.exports=c;},function(e,t,n){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r);}}var o=n(3),i=n(4),a=n(7),s=function(){function e(t,n){var r=n.location,o=void 0===r?0:r,i=n.distance,s=void 0===i?100:i,c=n.threshold,h=void 0===c?.6:c,l=n.maxPatternLength,u=void 0===l?32:l,f=n.isCaseSensitive,d=void 0!==f&&f,v=n.tokenSeparator,p=void 0===v?/ +/g:v,g=n.findAllMatches,y=void 0!==g&&g,m=n.minMatchCharLength,k=void 0===m?1:m;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:o,distance:s,threshold:h,maxPatternLength:u,isCaseSensitive:d,tokenSeparator:p,findAllMatches:y,minMatchCharLength:k},this.pattern=this.options.isCaseSensitive?t:t.toLowerCase(),this.pattern.length<=u&&(this.patternAlphabet=a(this.pattern));}var t,n;return t=e,(n=[{key:"search",value:function(e){if(this.options.isCaseSensitive||(e=e.toLowerCase()),this.pattern===e)return {isMatch:!0,score:0,matchedIndices:[[0,e.length-1]]};var t=this.options,n=t.maxPatternLength,r=t.tokenSeparator;if(this.pattern.length>n)return o(e,this.pattern,r);var a=this.options,s=a.location,c=a.distance,h=a.threshold,l=a.findAllMatches,u=a.minMatchCharLength;return i(e,this.pattern,this.patternAlphabet,{location:s,distance:c,threshold:h,findAllMatches:l,minMatchCharLength:u})}}])&&r(t.prototype,n),e}();e.exports=s;},function(e,t){var n=/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;e.exports=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/ +/g,o=new RegExp(t.replace(n,"\\$&").replace(r,"|")),i=e.match(o),a=!!i,s=[];if(a)for(var c=0,h=i.length;c<h;c+=1){var l=i[c];s.push([e.indexOf(l),l.length-1]);}return {score:a?.5:1,isMatch:a,matchedIndices:s}};},function(e,t,n){var r=n(5),o=n(6);e.exports=function(e,t,n,i){for(var a=i.location,s=void 0===a?0:a,c=i.distance,h=void 0===c?100:c,l=i.threshold,u=void 0===l?.6:l,f=i.findAllMatches,d=void 0!==f&&f,v=i.minMatchCharLength,p=void 0===v?1:v,g=s,y=e.length,m=u,k=e.indexOf(t,g),S=t.length,x=[],b=0;b<y;b+=1)x[b]=0;if(-1!==k){var M=r(t,{errors:0,currentLocation:k,expectedLocation:g,distance:h});if(m=Math.min(M,m),-1!==(k=e.lastIndexOf(t,g+S))){var _=r(t,{errors:0,currentLocation:k,expectedLocation:g,distance:h});m=Math.min(_,m);}}k=-1;for(var L=[],w=1,A=S+y,C=1<<S-1,I=0;I<S;I+=1){for(var O=0,j=A;O<j;){r(t,{errors:I,currentLocation:g+j,expectedLocation:g,distance:h})<=m?O=j:A=j,j=Math.floor((A-O)/2+O);}A=j;var P=Math.max(1,g-j+1),F=d?y:Math.min(g+j,y)+S,T=Array(F+2);T[F+1]=(1<<I)-1;for(var z=F;z>=P;z-=1){var E=z-1,K=n[e.charAt(E)];if(K&&(x[E]=1),T[z]=(T[z+1]<<1|1)&K,0!==I&&(T[z]|=(L[z+1]|L[z])<<1|1|L[z+1]),T[z]&C&&(w=r(t,{errors:I,currentLocation:E,expectedLocation:g,distance:h}))<=m){if(m=w,(k=E)<=g)break;P=Math.max(1,2*g-k);}}if(r(t,{errors:I+1,currentLocation:g,expectedLocation:g,distance:h})>m)break;L=T;}return {isMatch:k>=0,score:0===w?.001:w,matchedIndices:o(x,p)}};},function(e,t){e.exports=function(e,t){var n=t.errors,r=void 0===n?0:n,o=t.currentLocation,i=void 0===o?0:o,a=t.expectedLocation,s=void 0===a?0:a,c=t.distance,h=void 0===c?100:c,l=r/e.length,u=Math.abs(s-i);return h?l+u/h:u?1:l};},function(e,t){e.exports=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=[],r=-1,o=-1,i=0,a=e.length;i<a;i+=1){var s=e[i];s&&-1===r?r=i:s||-1===r||((o=i-1)-r+1>=t&&n.push([r,o]),r=-1);}return e[i-1]&&i-r>=t&&n.push([r,i-1]),n};},function(e,t){e.exports=function(e){for(var t={},n=e.length,r=0;r<n;r+=1)t[e.charAt(r)]=0;for(var o=0;o<n;o+=1)t[e.charAt(o)]|=1<<n-o-1;return t};},function(e,t,n){var r=n(0);e.exports=function(e,t){return function e(t,n,o){if(n){var i=n.indexOf("."),a=n,s=null;-1!==i&&(a=n.slice(0,i),s=n.slice(i+1));var c=t[a];if(null!=c)if(s||"string"!=typeof c&&"number"!=typeof c)if(r(c))for(var h=0,l=c.length;h<l;h+=1)e(c[h],s,o);else s&&e(c,s,o);else o.push(c.toString());}else o.push(t);return o}(e,t,[])};}])});
    });

    var Fuse = unwrapExports(fuse);
    var fuse_1 = fuse.Fuse;

    var jsYaml = createCommonjsModule(function (module, exports) {
    /* js-yaml 3.13.1 https://github.com/nodeca/js-yaml */(function(f){{module.exports=f();}})(function(){return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof commonjsRequire&&commonjsRequire;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t);}return n[i].exports}for(var u="function"==typeof commonjsRequire&&commonjsRequire,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){


    var loader = require('./js-yaml/loader');
    var dumper = require('./js-yaml/dumper');


    function deprecated(name) {
      return function () {
        throw new Error('Function ' + name + ' is deprecated and cannot be used.');
      };
    }


    module.exports.Type                = require('./js-yaml/type');
    module.exports.Schema              = require('./js-yaml/schema');
    module.exports.FAILSAFE_SCHEMA     = require('./js-yaml/schema/failsafe');
    module.exports.JSON_SCHEMA         = require('./js-yaml/schema/json');
    module.exports.CORE_SCHEMA         = require('./js-yaml/schema/core');
    module.exports.DEFAULT_SAFE_SCHEMA = require('./js-yaml/schema/default_safe');
    module.exports.DEFAULT_FULL_SCHEMA = require('./js-yaml/schema/default_full');
    module.exports.load                = loader.load;
    module.exports.loadAll             = loader.loadAll;
    module.exports.safeLoad            = loader.safeLoad;
    module.exports.safeLoadAll         = loader.safeLoadAll;
    module.exports.dump                = dumper.dump;
    module.exports.safeDump            = dumper.safeDump;
    module.exports.YAMLException       = require('./js-yaml/exception');

    // Deprecated schema names from JS-YAML 2.0.x
    module.exports.MINIMAL_SCHEMA = require('./js-yaml/schema/failsafe');
    module.exports.SAFE_SCHEMA    = require('./js-yaml/schema/default_safe');
    module.exports.DEFAULT_SCHEMA = require('./js-yaml/schema/default_full');

    // Deprecated functions from JS-YAML 1.x.x
    module.exports.scan           = deprecated('scan');
    module.exports.parse          = deprecated('parse');
    module.exports.compose        = deprecated('compose');
    module.exports.addConstructor = deprecated('addConstructor');

    },{"./js-yaml/dumper":3,"./js-yaml/exception":4,"./js-yaml/loader":5,"./js-yaml/schema":7,"./js-yaml/schema/core":8,"./js-yaml/schema/default_full":9,"./js-yaml/schema/default_safe":10,"./js-yaml/schema/failsafe":11,"./js-yaml/schema/json":12,"./js-yaml/type":13}],2:[function(require,module,exports){


    function isNothing(subject) {
      return (typeof subject === 'undefined') || (subject === null);
    }


    function isObject(subject) {
      return (typeof subject === 'object') && (subject !== null);
    }


    function toArray(sequence) {
      if (Array.isArray(sequence)) return sequence;
      else if (isNothing(sequence)) return [];

      return [ sequence ];
    }


    function extend(target, source) {
      var index, length, key, sourceKeys;

      if (source) {
        sourceKeys = Object.keys(source);

        for (index = 0, length = sourceKeys.length; index < length; index += 1) {
          key = sourceKeys[index];
          target[key] = source[key];
        }
      }

      return target;
    }


    function repeat(string, count) {
      var result = '', cycle;

      for (cycle = 0; cycle < count; cycle += 1) {
        result += string;
      }

      return result;
    }


    function isNegativeZero(number) {
      return (number === 0) && (Number.NEGATIVE_INFINITY === 1 / number);
    }


    module.exports.isNothing      = isNothing;
    module.exports.isObject       = isObject;
    module.exports.toArray        = toArray;
    module.exports.repeat         = repeat;
    module.exports.isNegativeZero = isNegativeZero;
    module.exports.extend         = extend;

    },{}],3:[function(require,module,exports){

    /*eslint-disable no-use-before-define*/

    var common              = require('./common');
    var YAMLException       = require('./exception');
    var DEFAULT_FULL_SCHEMA = require('./schema/default_full');
    var DEFAULT_SAFE_SCHEMA = require('./schema/default_safe');

    var _toString       = Object.prototype.toString;
    var _hasOwnProperty = Object.prototype.hasOwnProperty;

    var CHAR_TAB                  = 0x09; /* Tab */
    var CHAR_LINE_FEED            = 0x0A; /* LF */
    var CHAR_SPACE                = 0x20; /* Space */
    var CHAR_EXCLAMATION          = 0x21; /* ! */
    var CHAR_DOUBLE_QUOTE         = 0x22; /* " */
    var CHAR_SHARP                = 0x23; /* # */
    var CHAR_PERCENT              = 0x25; /* % */
    var CHAR_AMPERSAND            = 0x26; /* & */
    var CHAR_SINGLE_QUOTE         = 0x27; /* ' */
    var CHAR_ASTERISK             = 0x2A; /* * */
    var CHAR_COMMA                = 0x2C; /* , */
    var CHAR_MINUS                = 0x2D; /* - */
    var CHAR_COLON                = 0x3A; /* : */
    var CHAR_GREATER_THAN         = 0x3E; /* > */
    var CHAR_QUESTION             = 0x3F; /* ? */
    var CHAR_COMMERCIAL_AT        = 0x40; /* @ */
    var CHAR_LEFT_SQUARE_BRACKET  = 0x5B; /* [ */
    var CHAR_RIGHT_SQUARE_BRACKET = 0x5D; /* ] */
    var CHAR_GRAVE_ACCENT         = 0x60; /* ` */
    var CHAR_LEFT_CURLY_BRACKET   = 0x7B; /* { */
    var CHAR_VERTICAL_LINE        = 0x7C; /* | */
    var CHAR_RIGHT_CURLY_BRACKET  = 0x7D; /* } */

    var ESCAPE_SEQUENCES = {};

    ESCAPE_SEQUENCES[0x00]   = '\\0';
    ESCAPE_SEQUENCES[0x07]   = '\\a';
    ESCAPE_SEQUENCES[0x08]   = '\\b';
    ESCAPE_SEQUENCES[0x09]   = '\\t';
    ESCAPE_SEQUENCES[0x0A]   = '\\n';
    ESCAPE_SEQUENCES[0x0B]   = '\\v';
    ESCAPE_SEQUENCES[0x0C]   = '\\f';
    ESCAPE_SEQUENCES[0x0D]   = '\\r';
    ESCAPE_SEQUENCES[0x1B]   = '\\e';
    ESCAPE_SEQUENCES[0x22]   = '\\"';
    ESCAPE_SEQUENCES[0x5C]   = '\\\\';
    ESCAPE_SEQUENCES[0x85]   = '\\N';
    ESCAPE_SEQUENCES[0xA0]   = '\\_';
    ESCAPE_SEQUENCES[0x2028] = '\\L';
    ESCAPE_SEQUENCES[0x2029] = '\\P';

    var DEPRECATED_BOOLEANS_SYNTAX = [
      'y', 'Y', 'yes', 'Yes', 'YES', 'on', 'On', 'ON',
      'n', 'N', 'no', 'No', 'NO', 'off', 'Off', 'OFF'
    ];

    function compileStyleMap(schema, map) {
      var result, keys, index, length, tag, style, type;

      if (map === null) return {};

      result = {};
      keys = Object.keys(map);

      for (index = 0, length = keys.length; index < length; index += 1) {
        tag = keys[index];
        style = String(map[tag]);

        if (tag.slice(0, 2) === '!!') {
          tag = 'tag:yaml.org,2002:' + tag.slice(2);
        }
        type = schema.compiledTypeMap['fallback'][tag];

        if (type && _hasOwnProperty.call(type.styleAliases, style)) {
          style = type.styleAliases[style];
        }

        result[tag] = style;
      }

      return result;
    }

    function encodeHex(character) {
      var string, handle, length;

      string = character.toString(16).toUpperCase();

      if (character <= 0xFF) {
        handle = 'x';
        length = 2;
      } else if (character <= 0xFFFF) {
        handle = 'u';
        length = 4;
      } else if (character <= 0xFFFFFFFF) {
        handle = 'U';
        length = 8;
      } else {
        throw new YAMLException('code point within a string may not be greater than 0xFFFFFFFF');
      }

      return '\\' + handle + common.repeat('0', length - string.length) + string;
    }

    function State(options) {
      this.schema        = options['schema'] || DEFAULT_FULL_SCHEMA;
      this.indent        = Math.max(1, (options['indent'] || 2));
      this.noArrayIndent = options['noArrayIndent'] || false;
      this.skipInvalid   = options['skipInvalid'] || false;
      this.flowLevel     = (common.isNothing(options['flowLevel']) ? -1 : options['flowLevel']);
      this.styleMap      = compileStyleMap(this.schema, options['styles'] || null);
      this.sortKeys      = options['sortKeys'] || false;
      this.lineWidth     = options['lineWidth'] || 80;
      this.noRefs        = options['noRefs'] || false;
      this.noCompatMode  = options['noCompatMode'] || false;
      this.condenseFlow  = options['condenseFlow'] || false;

      this.implicitTypes = this.schema.compiledImplicit;
      this.explicitTypes = this.schema.compiledExplicit;

      this.tag = null;
      this.result = '';

      this.duplicates = [];
      this.usedDuplicates = null;
    }

    // Indents every line in a string. Empty lines (\n only) are not indented.
    function indentString(string, spaces) {
      var ind = common.repeat(' ', spaces),
          position = 0,
          next = -1,
          result = '',
          line,
          length = string.length;

      while (position < length) {
        next = string.indexOf('\n', position);
        if (next === -1) {
          line = string.slice(position);
          position = length;
        } else {
          line = string.slice(position, next + 1);
          position = next + 1;
        }

        if (line.length && line !== '\n') result += ind;

        result += line;
      }

      return result;
    }

    function generateNextLine(state, level) {
      return '\n' + common.repeat(' ', state.indent * level);
    }

    function testImplicitResolving(state, str) {
      var index, length, type;

      for (index = 0, length = state.implicitTypes.length; index < length; index += 1) {
        type = state.implicitTypes[index];

        if (type.resolve(str)) {
          return true;
        }
      }

      return false;
    }

    // [33] s-white ::= s-space | s-tab
    function isWhitespace(c) {
      return c === CHAR_SPACE || c === CHAR_TAB;
    }

    // Returns true if the character can be printed without escaping.
    // From YAML 1.2: "any allowed characters known to be non-printable
    // should also be escaped. [However,] This isn’t mandatory"
    // Derived from nb-char - \t - #x85 - #xA0 - #x2028 - #x2029.
    function isPrintable(c) {
      return  (0x00020 <= c && c <= 0x00007E)
          || ((0x000A1 <= c && c <= 0x00D7FF) && c !== 0x2028 && c !== 0x2029)
          || ((0x0E000 <= c && c <= 0x00FFFD) && c !== 0xFEFF /* BOM */)
          ||  (0x10000 <= c && c <= 0x10FFFF);
    }

    // Simplified test for values allowed after the first character in plain style.
    function isPlainSafe(c) {
      // Uses a subset of nb-char - c-flow-indicator - ":" - "#"
      // where nb-char ::= c-printable - b-char - c-byte-order-mark.
      return isPrintable(c) && c !== 0xFEFF
        // - c-flow-indicator
        && c !== CHAR_COMMA
        && c !== CHAR_LEFT_SQUARE_BRACKET
        && c !== CHAR_RIGHT_SQUARE_BRACKET
        && c !== CHAR_LEFT_CURLY_BRACKET
        && c !== CHAR_RIGHT_CURLY_BRACKET
        // - ":" - "#"
        && c !== CHAR_COLON
        && c !== CHAR_SHARP;
    }

    // Simplified test for values allowed as the first character in plain style.
    function isPlainSafeFirst(c) {
      // Uses a subset of ns-char - c-indicator
      // where ns-char = nb-char - s-white.
      return isPrintable(c) && c !== 0xFEFF
        && !isWhitespace(c) // - s-white
        // - (c-indicator ::=
        // “-” | “?” | “:” | “,” | “[” | “]” | “{” | “}”
        && c !== CHAR_MINUS
        && c !== CHAR_QUESTION
        && c !== CHAR_COLON
        && c !== CHAR_COMMA
        && c !== CHAR_LEFT_SQUARE_BRACKET
        && c !== CHAR_RIGHT_SQUARE_BRACKET
        && c !== CHAR_LEFT_CURLY_BRACKET
        && c !== CHAR_RIGHT_CURLY_BRACKET
        // | “#” | “&” | “*” | “!” | “|” | “>” | “'” | “"”
        && c !== CHAR_SHARP
        && c !== CHAR_AMPERSAND
        && c !== CHAR_ASTERISK
        && c !== CHAR_EXCLAMATION
        && c !== CHAR_VERTICAL_LINE
        && c !== CHAR_GREATER_THAN
        && c !== CHAR_SINGLE_QUOTE
        && c !== CHAR_DOUBLE_QUOTE
        // | “%” | “@” | “`”)
        && c !== CHAR_PERCENT
        && c !== CHAR_COMMERCIAL_AT
        && c !== CHAR_GRAVE_ACCENT;
    }

    // Determines whether block indentation indicator is required.
    function needIndentIndicator(string) {
      var leadingSpaceRe = /^\n* /;
      return leadingSpaceRe.test(string);
    }

    var STYLE_PLAIN   = 1,
        STYLE_SINGLE  = 2,
        STYLE_LITERAL = 3,
        STYLE_FOLDED  = 4,
        STYLE_DOUBLE  = 5;

    // Determines which scalar styles are possible and returns the preferred style.
    // lineWidth = -1 => no limit.
    // Pre-conditions: str.length > 0.
    // Post-conditions:
    //    STYLE_PLAIN or STYLE_SINGLE => no \n are in the string.
    //    STYLE_LITERAL => no lines are suitable for folding (or lineWidth is -1).
    //    STYLE_FOLDED => a line > lineWidth and can be folded (and lineWidth != -1).
    function chooseScalarStyle(string, singleLineOnly, indentPerLevel, lineWidth, testAmbiguousType) {
      var i;
      var char;
      var hasLineBreak = false;
      var hasFoldableLine = false; // only checked if shouldTrackWidth
      var shouldTrackWidth = lineWidth !== -1;
      var previousLineBreak = -1; // count the first line correctly
      var plain = isPlainSafeFirst(string.charCodeAt(0))
              && !isWhitespace(string.charCodeAt(string.length - 1));

      if (singleLineOnly) {
        // Case: no block styles.
        // Check for disallowed characters to rule out plain and single.
        for (i = 0; i < string.length; i++) {
          char = string.charCodeAt(i);
          if (!isPrintable(char)) {
            return STYLE_DOUBLE;
          }
          plain = plain && isPlainSafe(char);
        }
      } else {
        // Case: block styles permitted.
        for (i = 0; i < string.length; i++) {
          char = string.charCodeAt(i);
          if (char === CHAR_LINE_FEED) {
            hasLineBreak = true;
            // Check if any line can be folded.
            if (shouldTrackWidth) {
              hasFoldableLine = hasFoldableLine ||
                // Foldable line = too long, and not more-indented.
                (i - previousLineBreak - 1 > lineWidth &&
                 string[previousLineBreak + 1] !== ' ');
              previousLineBreak = i;
            }
          } else if (!isPrintable(char)) {
            return STYLE_DOUBLE;
          }
          plain = plain && isPlainSafe(char);
        }
        // in case the end is missing a \n
        hasFoldableLine = hasFoldableLine || (shouldTrackWidth &&
          (i - previousLineBreak - 1 > lineWidth &&
           string[previousLineBreak + 1] !== ' '));
      }
      // Although every style can represent \n without escaping, prefer block styles
      // for multiline, since they're more readable and they don't add empty lines.
      // Also prefer folding a super-long line.
      if (!hasLineBreak && !hasFoldableLine) {
        // Strings interpretable as another type have to be quoted;
        // e.g. the string 'true' vs. the boolean true.
        return plain && !testAmbiguousType(string)
          ? STYLE_PLAIN : STYLE_SINGLE;
      }
      // Edge case: block indentation indicator can only have one digit.
      if (indentPerLevel > 9 && needIndentIndicator(string)) {
        return STYLE_DOUBLE;
      }
      // At this point we know block styles are valid.
      // Prefer literal style unless we want to fold.
      return hasFoldableLine ? STYLE_FOLDED : STYLE_LITERAL;
    }

    // Note: line breaking/folding is implemented for only the folded style.
    // NB. We drop the last trailing newline (if any) of a returned block scalar
    //  since the dumper adds its own newline. This always works:
    //    • No ending newline => unaffected; already using strip "-" chomping.
    //    • Ending newline    => removed then restored.
    //  Importantly, this keeps the "+" chomp indicator from gaining an extra line.
    function writeScalar(state, string, level, iskey) {
      state.dump = (function () {
        if (string.length === 0) {
          return "''";
        }
        if (!state.noCompatMode &&
            DEPRECATED_BOOLEANS_SYNTAX.indexOf(string) !== -1) {
          return "'" + string + "'";
        }

        var indent = state.indent * Math.max(1, level); // no 0-indent scalars
        // As indentation gets deeper, let the width decrease monotonically
        // to the lower bound min(state.lineWidth, 40).
        // Note that this implies
        //  state.lineWidth ≤ 40 + state.indent: width is fixed at the lower bound.
        //  state.lineWidth > 40 + state.indent: width decreases until the lower bound.
        // This behaves better than a constant minimum width which disallows narrower options,
        // or an indent threshold which causes the width to suddenly increase.
        var lineWidth = state.lineWidth === -1
          ? -1 : Math.max(Math.min(state.lineWidth, 40), state.lineWidth - indent);

        // Without knowing if keys are implicit/explicit, assume implicit for safety.
        var singleLineOnly = iskey
          // No block styles in flow mode.
          || (state.flowLevel > -1 && level >= state.flowLevel);
        function testAmbiguity(string) {
          return testImplicitResolving(state, string);
        }

        switch (chooseScalarStyle(string, singleLineOnly, state.indent, lineWidth, testAmbiguity)) {
          case STYLE_PLAIN:
            return string;
          case STYLE_SINGLE:
            return "'" + string.replace(/'/g, "''") + "'";
          case STYLE_LITERAL:
            return '|' + blockHeader(string, state.indent)
              + dropEndingNewline(indentString(string, indent));
          case STYLE_FOLDED:
            return '>' + blockHeader(string, state.indent)
              + dropEndingNewline(indentString(foldString(string, lineWidth), indent));
          case STYLE_DOUBLE:
            return '"' + escapeString(string) + '"';
          default:
            throw new YAMLException('impossible error: invalid scalar style');
        }
      }());
    }

    // Pre-conditions: string is valid for a block scalar, 1 <= indentPerLevel <= 9.
    function blockHeader(string, indentPerLevel) {
      var indentIndicator = needIndentIndicator(string) ? String(indentPerLevel) : '';

      // note the special case: the string '\n' counts as a "trailing" empty line.
      var clip =          string[string.length - 1] === '\n';
      var keep = clip && (string[string.length - 2] === '\n' || string === '\n');
      var chomp = keep ? '+' : (clip ? '' : '-');

      return indentIndicator + chomp + '\n';
    }

    // (See the note for writeScalar.)
    function dropEndingNewline(string) {
      return string[string.length - 1] === '\n' ? string.slice(0, -1) : string;
    }

    // Note: a long line without a suitable break point will exceed the width limit.
    // Pre-conditions: every char in str isPrintable, str.length > 0, width > 0.
    function foldString(string, width) {
      // In folded style, $k$ consecutive newlines output as $k+1$ newlines—
      // unless they're before or after a more-indented line, or at the very
      // beginning or end, in which case $k$ maps to $k$.
      // Therefore, parse each chunk as newline(s) followed by a content line.
      var lineRe = /(\n+)([^\n]*)/g;

      // first line (possibly an empty line)
      var result = (function () {
        var nextLF = string.indexOf('\n');
        nextLF = nextLF !== -1 ? nextLF : string.length;
        lineRe.lastIndex = nextLF;
        return foldLine(string.slice(0, nextLF), width);
      }());
      // If we haven't reached the first content line yet, don't add an extra \n.
      var prevMoreIndented = string[0] === '\n' || string[0] === ' ';
      var moreIndented;

      // rest of the lines
      var match;
      while ((match = lineRe.exec(string))) {
        var prefix = match[1], line = match[2];
        moreIndented = (line[0] === ' ');
        result += prefix
          + (!prevMoreIndented && !moreIndented && line !== ''
            ? '\n' : '')
          + foldLine(line, width);
        prevMoreIndented = moreIndented;
      }

      return result;
    }

    // Greedy line breaking.
    // Picks the longest line under the limit each time,
    // otherwise settles for the shortest line over the limit.
    // NB. More-indented lines *cannot* be folded, as that would add an extra \n.
    function foldLine(line, width) {
      if (line === '' || line[0] === ' ') return line;

      // Since a more-indented line adds a \n, breaks can't be followed by a space.
      var breakRe = / [^ ]/g; // note: the match index will always be <= length-2.
      var match;
      // start is an inclusive index. end, curr, and next are exclusive.
      var start = 0, end, curr = 0, next = 0;
      var result = '';

      // Invariants: 0 <= start <= length-1.
      //   0 <= curr <= next <= max(0, length-2). curr - start <= width.
      // Inside the loop:
      //   A match implies length >= 2, so curr and next are <= length-2.
      while ((match = breakRe.exec(line))) {
        next = match.index;
        // maintain invariant: curr - start <= width
        if (next - start > width) {
          end = (curr > start) ? curr : next; // derive end <= length-2
          result += '\n' + line.slice(start, end);
          // skip the space that was output as \n
          start = end + 1;                    // derive start <= length-1
        }
        curr = next;
      }

      // By the invariants, start <= length-1, so there is something left over.
      // It is either the whole string or a part starting from non-whitespace.
      result += '\n';
      // Insert a break if the remainder is too long and there is a break available.
      if (line.length - start > width && curr > start) {
        result += line.slice(start, curr) + '\n' + line.slice(curr + 1);
      } else {
        result += line.slice(start);
      }

      return result.slice(1); // drop extra \n joiner
    }

    // Escapes a double-quoted string.
    function escapeString(string) {
      var result = '';
      var char, nextChar;
      var escapeSeq;

      for (var i = 0; i < string.length; i++) {
        char = string.charCodeAt(i);
        // Check for surrogate pairs (reference Unicode 3.0 section "3.7 Surrogates").
        if (char >= 0xD800 && char <= 0xDBFF/* high surrogate */) {
          nextChar = string.charCodeAt(i + 1);
          if (nextChar >= 0xDC00 && nextChar <= 0xDFFF/* low surrogate */) {
            // Combine the surrogate pair and store it escaped.
            result += encodeHex((char - 0xD800) * 0x400 + nextChar - 0xDC00 + 0x10000);
            // Advance index one extra since we already used that char here.
            i++; continue;
          }
        }
        escapeSeq = ESCAPE_SEQUENCES[char];
        result += !escapeSeq && isPrintable(char)
          ? string[i]
          : escapeSeq || encodeHex(char);
      }

      return result;
    }

    function writeFlowSequence(state, level, object) {
      var _result = '',
          _tag    = state.tag,
          index,
          length;

      for (index = 0, length = object.length; index < length; index += 1) {
        // Write only valid elements.
        if (writeNode(state, level, object[index], false, false)) {
          if (index !== 0) _result += ',' + (!state.condenseFlow ? ' ' : '');
          _result += state.dump;
        }
      }

      state.tag = _tag;
      state.dump = '[' + _result + ']';
    }

    function writeBlockSequence(state, level, object, compact) {
      var _result = '',
          _tag    = state.tag,
          index,
          length;

      for (index = 0, length = object.length; index < length; index += 1) {
        // Write only valid elements.
        if (writeNode(state, level + 1, object[index], true, true)) {
          if (!compact || index !== 0) {
            _result += generateNextLine(state, level);
          }

          if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
            _result += '-';
          } else {
            _result += '- ';
          }

          _result += state.dump;
        }
      }

      state.tag = _tag;
      state.dump = _result || '[]'; // Empty sequence if no valid values.
    }

    function writeFlowMapping(state, level, object) {
      var _result       = '',
          _tag          = state.tag,
          objectKeyList = Object.keys(object),
          index,
          length,
          objectKey,
          objectValue,
          pairBuffer;

      for (index = 0, length = objectKeyList.length; index < length; index += 1) {
        pairBuffer = state.condenseFlow ? '"' : '';

        if (index !== 0) pairBuffer += ', ';

        objectKey = objectKeyList[index];
        objectValue = object[objectKey];

        if (!writeNode(state, level, objectKey, false, false)) {
          continue; // Skip this pair because of invalid key;
        }

        if (state.dump.length > 1024) pairBuffer += '? ';

        pairBuffer += state.dump + (state.condenseFlow ? '"' : '') + ':' + (state.condenseFlow ? '' : ' ');

        if (!writeNode(state, level, objectValue, false, false)) {
          continue; // Skip this pair because of invalid value.
        }

        pairBuffer += state.dump;

        // Both key and value are valid.
        _result += pairBuffer;
      }

      state.tag = _tag;
      state.dump = '{' + _result + '}';
    }

    function writeBlockMapping(state, level, object, compact) {
      var _result       = '',
          _tag          = state.tag,
          objectKeyList = Object.keys(object),
          index,
          length,
          objectKey,
          objectValue,
          explicitPair,
          pairBuffer;

      // Allow sorting keys so that the output file is deterministic
      if (state.sortKeys === true) {
        // Default sorting
        objectKeyList.sort();
      } else if (typeof state.sortKeys === 'function') {
        // Custom sort function
        objectKeyList.sort(state.sortKeys);
      } else if (state.sortKeys) {
        // Something is wrong
        throw new YAMLException('sortKeys must be a boolean or a function');
      }

      for (index = 0, length = objectKeyList.length; index < length; index += 1) {
        pairBuffer = '';

        if (!compact || index !== 0) {
          pairBuffer += generateNextLine(state, level);
        }

        objectKey = objectKeyList[index];
        objectValue = object[objectKey];

        if (!writeNode(state, level + 1, objectKey, true, true, true)) {
          continue; // Skip this pair because of invalid key.
        }

        explicitPair = (state.tag !== null && state.tag !== '?') ||
                       (state.dump && state.dump.length > 1024);

        if (explicitPair) {
          if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
            pairBuffer += '?';
          } else {
            pairBuffer += '? ';
          }
        }

        pairBuffer += state.dump;

        if (explicitPair) {
          pairBuffer += generateNextLine(state, level);
        }

        if (!writeNode(state, level + 1, objectValue, true, explicitPair)) {
          continue; // Skip this pair because of invalid value.
        }

        if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
          pairBuffer += ':';
        } else {
          pairBuffer += ': ';
        }

        pairBuffer += state.dump;

        // Both key and value are valid.
        _result += pairBuffer;
      }

      state.tag = _tag;
      state.dump = _result || '{}'; // Empty mapping if no valid pairs.
    }

    function detectType(state, object, explicit) {
      var _result, typeList, index, length, type, style;

      typeList = explicit ? state.explicitTypes : state.implicitTypes;

      for (index = 0, length = typeList.length; index < length; index += 1) {
        type = typeList[index];

        if ((type.instanceOf  || type.predicate) &&
            (!type.instanceOf || ((typeof object === 'object') && (object instanceof type.instanceOf))) &&
            (!type.predicate  || type.predicate(object))) {

          state.tag = explicit ? type.tag : '?';

          if (type.represent) {
            style = state.styleMap[type.tag] || type.defaultStyle;

            if (_toString.call(type.represent) === '[object Function]') {
              _result = type.represent(object, style);
            } else if (_hasOwnProperty.call(type.represent, style)) {
              _result = type.represent[style](object, style);
            } else {
              throw new YAMLException('!<' + type.tag + '> tag resolver accepts not "' + style + '" style');
            }

            state.dump = _result;
          }

          return true;
        }
      }

      return false;
    }

    // Serializes `object` and writes it to global `result`.
    // Returns true on success, or false on invalid object.
    //
    function writeNode(state, level, object, block, compact, iskey) {
      state.tag = null;
      state.dump = object;

      if (!detectType(state, object, false)) {
        detectType(state, object, true);
      }

      var type = _toString.call(state.dump);

      if (block) {
        block = (state.flowLevel < 0 || state.flowLevel > level);
      }

      var objectOrArray = type === '[object Object]' || type === '[object Array]',
          duplicateIndex,
          duplicate;

      if (objectOrArray) {
        duplicateIndex = state.duplicates.indexOf(object);
        duplicate = duplicateIndex !== -1;
      }

      if ((state.tag !== null && state.tag !== '?') || duplicate || (state.indent !== 2 && level > 0)) {
        compact = false;
      }

      if (duplicate && state.usedDuplicates[duplicateIndex]) {
        state.dump = '*ref_' + duplicateIndex;
      } else {
        if (objectOrArray && duplicate && !state.usedDuplicates[duplicateIndex]) {
          state.usedDuplicates[duplicateIndex] = true;
        }
        if (type === '[object Object]') {
          if (block && (Object.keys(state.dump).length !== 0)) {
            writeBlockMapping(state, level, state.dump, compact);
            if (duplicate) {
              state.dump = '&ref_' + duplicateIndex + state.dump;
            }
          } else {
            writeFlowMapping(state, level, state.dump);
            if (duplicate) {
              state.dump = '&ref_' + duplicateIndex + ' ' + state.dump;
            }
          }
        } else if (type === '[object Array]') {
          var arrayLevel = (state.noArrayIndent && (level > 0)) ? level - 1 : level;
          if (block && (state.dump.length !== 0)) {
            writeBlockSequence(state, arrayLevel, state.dump, compact);
            if (duplicate) {
              state.dump = '&ref_' + duplicateIndex + state.dump;
            }
          } else {
            writeFlowSequence(state, arrayLevel, state.dump);
            if (duplicate) {
              state.dump = '&ref_' + duplicateIndex + ' ' + state.dump;
            }
          }
        } else if (type === '[object String]') {
          if (state.tag !== '?') {
            writeScalar(state, state.dump, level, iskey);
          }
        } else {
          if (state.skipInvalid) return false;
          throw new YAMLException('unacceptable kind of an object to dump ' + type);
        }

        if (state.tag !== null && state.tag !== '?') {
          state.dump = '!<' + state.tag + '> ' + state.dump;
        }
      }

      return true;
    }

    function getDuplicateReferences(object, state) {
      var objects = [],
          duplicatesIndexes = [],
          index,
          length;

      inspectNode(object, objects, duplicatesIndexes);

      for (index = 0, length = duplicatesIndexes.length; index < length; index += 1) {
        state.duplicates.push(objects[duplicatesIndexes[index]]);
      }
      state.usedDuplicates = new Array(length);
    }

    function inspectNode(object, objects, duplicatesIndexes) {
      var objectKeyList,
          index,
          length;

      if (object !== null && typeof object === 'object') {
        index = objects.indexOf(object);
        if (index !== -1) {
          if (duplicatesIndexes.indexOf(index) === -1) {
            duplicatesIndexes.push(index);
          }
        } else {
          objects.push(object);

          if (Array.isArray(object)) {
            for (index = 0, length = object.length; index < length; index += 1) {
              inspectNode(object[index], objects, duplicatesIndexes);
            }
          } else {
            objectKeyList = Object.keys(object);

            for (index = 0, length = objectKeyList.length; index < length; index += 1) {
              inspectNode(object[objectKeyList[index]], objects, duplicatesIndexes);
            }
          }
        }
      }
    }

    function dump(input, options) {
      options = options || {};

      var state = new State(options);

      if (!state.noRefs) getDuplicateReferences(input, state);

      if (writeNode(state, 0, input, true, true)) return state.dump + '\n';

      return '';
    }

    function safeDump(input, options) {
      return dump(input, common.extend({ schema: DEFAULT_SAFE_SCHEMA }, options));
    }

    module.exports.dump     = dump;
    module.exports.safeDump = safeDump;

    },{"./common":2,"./exception":4,"./schema/default_full":9,"./schema/default_safe":10}],4:[function(require,module,exports){

    function YAMLException(reason, mark) {
      // Super constructor
      Error.call(this);

      this.name = 'YAMLException';
      this.reason = reason;
      this.mark = mark;
      this.message = (this.reason || '(unknown reason)') + (this.mark ? ' ' + this.mark.toString() : '');

      // Include stack trace in error object
      if (Error.captureStackTrace) {
        // Chrome and NodeJS
        Error.captureStackTrace(this, this.constructor);
      } else {
        // FF, IE 10+ and Safari 6+. Fallback for others
        this.stack = (new Error()).stack || '';
      }
    }


    // Inherit from Error
    YAMLException.prototype = Object.create(Error.prototype);
    YAMLException.prototype.constructor = YAMLException;


    YAMLException.prototype.toString = function toString(compact) {
      var result = this.name + ': ';

      result += this.reason || '(unknown reason)';

      if (!compact && this.mark) {
        result += ' ' + this.mark.toString();
      }

      return result;
    };


    module.exports = YAMLException;

    },{}],5:[function(require,module,exports){

    /*eslint-disable max-len,no-use-before-define*/

    var common              = require('./common');
    var YAMLException       = require('./exception');
    var Mark                = require('./mark');
    var DEFAULT_SAFE_SCHEMA = require('./schema/default_safe');
    var DEFAULT_FULL_SCHEMA = require('./schema/default_full');


    var _hasOwnProperty = Object.prototype.hasOwnProperty;


    var CONTEXT_FLOW_IN   = 1;
    var CONTEXT_FLOW_OUT  = 2;
    var CONTEXT_BLOCK_IN  = 3;
    var CONTEXT_BLOCK_OUT = 4;


    var CHOMPING_CLIP  = 1;
    var CHOMPING_STRIP = 2;
    var CHOMPING_KEEP  = 3;


    var PATTERN_NON_PRINTABLE         = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
    var PATTERN_NON_ASCII_LINE_BREAKS = /[\x85\u2028\u2029]/;
    var PATTERN_FLOW_INDICATORS       = /[,\[\]\{\}]/;
    var PATTERN_TAG_HANDLE            = /^(?:!|!!|![a-z\-]+!)$/i;
    var PATTERN_TAG_URI               = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;


    function _class(obj) { return Object.prototype.toString.call(obj); }

    function is_EOL(c) {
      return (c === 0x0A/* LF */) || (c === 0x0D/* CR */);
    }

    function is_WHITE_SPACE(c) {
      return (c === 0x09/* Tab */) || (c === 0x20/* Space */);
    }

    function is_WS_OR_EOL(c) {
      return (c === 0x09/* Tab */) ||
             (c === 0x20/* Space */) ||
             (c === 0x0A/* LF */) ||
             (c === 0x0D/* CR */);
    }

    function is_FLOW_INDICATOR(c) {
      return c === 0x2C/* , */ ||
             c === 0x5B/* [ */ ||
             c === 0x5D/* ] */ ||
             c === 0x7B/* { */ ||
             c === 0x7D/* } */;
    }

    function fromHexCode(c) {
      var lc;

      if ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */)) {
        return c - 0x30;
      }

      /*eslint-disable no-bitwise*/
      lc = c | 0x20;

      if ((0x61/* a */ <= lc) && (lc <= 0x66/* f */)) {
        return lc - 0x61 + 10;
      }

      return -1;
    }

    function escapedHexLen(c) {
      if (c === 0x78/* x */) { return 2; }
      if (c === 0x75/* u */) { return 4; }
      if (c === 0x55/* U */) { return 8; }
      return 0;
    }

    function fromDecimalCode(c) {
      if ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */)) {
        return c - 0x30;
      }

      return -1;
    }

    function simpleEscapeSequence(c) {
      /* eslint-disable indent */
      return (c === 0x30/* 0 */) ? '\x00' :
            (c === 0x61/* a */) ? '\x07' :
            (c === 0x62/* b */) ? '\x08' :
            (c === 0x74/* t */) ? '\x09' :
            (c === 0x09/* Tab */) ? '\x09' :
            (c === 0x6E/* n */) ? '\x0A' :
            (c === 0x76/* v */) ? '\x0B' :
            (c === 0x66/* f */) ? '\x0C' :
            (c === 0x72/* r */) ? '\x0D' :
            (c === 0x65/* e */) ? '\x1B' :
            (c === 0x20/* Space */) ? ' ' :
            (c === 0x22/* " */) ? '\x22' :
            (c === 0x2F/* / */) ? '/' :
            (c === 0x5C/* \ */) ? '\x5C' :
            (c === 0x4E/* N */) ? '\x85' :
            (c === 0x5F/* _ */) ? '\xA0' :
            (c === 0x4C/* L */) ? '\u2028' :
            (c === 0x50/* P */) ? '\u2029' : '';
    }

    function charFromCodepoint(c) {
      if (c <= 0xFFFF) {
        return String.fromCharCode(c);
      }
      // Encode UTF-16 surrogate pair
      // https://en.wikipedia.org/wiki/UTF-16#Code_points_U.2B010000_to_U.2B10FFFF
      return String.fromCharCode(
        ((c - 0x010000) >> 10) + 0xD800,
        ((c - 0x010000) & 0x03FF) + 0xDC00
      );
    }

    var simpleEscapeCheck = new Array(256); // integer, for fast access
    var simpleEscapeMap = new Array(256);
    for (var i = 0; i < 256; i++) {
      simpleEscapeCheck[i] = simpleEscapeSequence(i) ? 1 : 0;
      simpleEscapeMap[i] = simpleEscapeSequence(i);
    }


    function State(input, options) {
      this.input = input;

      this.filename  = options['filename']  || null;
      this.schema    = options['schema']    || DEFAULT_FULL_SCHEMA;
      this.onWarning = options['onWarning'] || null;
      this.legacy    = options['legacy']    || false;
      this.json      = options['json']      || false;
      this.listener  = options['listener']  || null;

      this.implicitTypes = this.schema.compiledImplicit;
      this.typeMap       = this.schema.compiledTypeMap;

      this.length     = input.length;
      this.position   = 0;
      this.line       = 0;
      this.lineStart  = 0;
      this.lineIndent = 0;

      this.documents = [];

      /*
      this.version;
      this.checkLineBreaks;
      this.tagMap;
      this.anchorMap;
      this.tag;
      this.anchor;
      this.kind;
      this.result;*/

    }


    function generateError(state, message) {
      return new YAMLException(
        message,
        new Mark(state.filename, state.input, state.position, state.line, (state.position - state.lineStart)));
    }

    function throwError(state, message) {
      throw generateError(state, message);
    }

    function throwWarning(state, message) {
      if (state.onWarning) {
        state.onWarning.call(null, generateError(state, message));
      }
    }


    var directiveHandlers = {

      YAML: function handleYamlDirective(state, name, args) {

        var match, major, minor;

        if (state.version !== null) {
          throwError(state, 'duplication of %YAML directive');
        }

        if (args.length !== 1) {
          throwError(state, 'YAML directive accepts exactly one argument');
        }

        match = /^([0-9]+)\.([0-9]+)$/.exec(args[0]);

        if (match === null) {
          throwError(state, 'ill-formed argument of the YAML directive');
        }

        major = parseInt(match[1], 10);
        minor = parseInt(match[2], 10);

        if (major !== 1) {
          throwError(state, 'unacceptable YAML version of the document');
        }

        state.version = args[0];
        state.checkLineBreaks = (minor < 2);

        if (minor !== 1 && minor !== 2) {
          throwWarning(state, 'unsupported YAML version of the document');
        }
      },

      TAG: function handleTagDirective(state, name, args) {

        var handle, prefix;

        if (args.length !== 2) {
          throwError(state, 'TAG directive accepts exactly two arguments');
        }

        handle = args[0];
        prefix = args[1];

        if (!PATTERN_TAG_HANDLE.test(handle)) {
          throwError(state, 'ill-formed tag handle (first argument) of the TAG directive');
        }

        if (_hasOwnProperty.call(state.tagMap, handle)) {
          throwError(state, 'there is a previously declared suffix for "' + handle + '" tag handle');
        }

        if (!PATTERN_TAG_URI.test(prefix)) {
          throwError(state, 'ill-formed tag prefix (second argument) of the TAG directive');
        }

        state.tagMap[handle] = prefix;
      }
    };


    function captureSegment(state, start, end, checkJson) {
      var _position, _length, _character, _result;

      if (start < end) {
        _result = state.input.slice(start, end);

        if (checkJson) {
          for (_position = 0, _length = _result.length; _position < _length; _position += 1) {
            _character = _result.charCodeAt(_position);
            if (!(_character === 0x09 ||
                  (0x20 <= _character && _character <= 0x10FFFF))) {
              throwError(state, 'expected valid JSON character');
            }
          }
        } else if (PATTERN_NON_PRINTABLE.test(_result)) {
          throwError(state, 'the stream contains non-printable characters');
        }

        state.result += _result;
      }
    }

    function mergeMappings(state, destination, source, overridableKeys) {
      var sourceKeys, key, index, quantity;

      if (!common.isObject(source)) {
        throwError(state, 'cannot merge mappings; the provided source object is unacceptable');
      }

      sourceKeys = Object.keys(source);

      for (index = 0, quantity = sourceKeys.length; index < quantity; index += 1) {
        key = sourceKeys[index];

        if (!_hasOwnProperty.call(destination, key)) {
          destination[key] = source[key];
          overridableKeys[key] = true;
        }
      }
    }

    function storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, startLine, startPos) {
      var index, quantity;

      // The output is a plain object here, so keys can only be strings.
      // We need to convert keyNode to a string, but doing so can hang the process
      // (deeply nested arrays that explode exponentially using aliases).
      if (Array.isArray(keyNode)) {
        keyNode = Array.prototype.slice.call(keyNode);

        for (index = 0, quantity = keyNode.length; index < quantity; index += 1) {
          if (Array.isArray(keyNode[index])) {
            throwError(state, 'nested arrays are not supported inside keys');
          }

          if (typeof keyNode === 'object' && _class(keyNode[index]) === '[object Object]') {
            keyNode[index] = '[object Object]';
          }
        }
      }

      // Avoid code execution in load() via toString property
      // (still use its own toString for arrays, timestamps,
      // and whatever user schema extensions happen to have @@toStringTag)
      if (typeof keyNode === 'object' && _class(keyNode) === '[object Object]') {
        keyNode = '[object Object]';
      }


      keyNode = String(keyNode);

      if (_result === null) {
        _result = {};
      }

      if (keyTag === 'tag:yaml.org,2002:merge') {
        if (Array.isArray(valueNode)) {
          for (index = 0, quantity = valueNode.length; index < quantity; index += 1) {
            mergeMappings(state, _result, valueNode[index], overridableKeys);
          }
        } else {
          mergeMappings(state, _result, valueNode, overridableKeys);
        }
      } else {
        if (!state.json &&
            !_hasOwnProperty.call(overridableKeys, keyNode) &&
            _hasOwnProperty.call(_result, keyNode)) {
          state.line = startLine || state.line;
          state.position = startPos || state.position;
          throwError(state, 'duplicated mapping key');
        }
        _result[keyNode] = valueNode;
        delete overridableKeys[keyNode];
      }

      return _result;
    }

    function readLineBreak(state) {
      var ch;

      ch = state.input.charCodeAt(state.position);

      if (ch === 0x0A/* LF */) {
        state.position++;
      } else if (ch === 0x0D/* CR */) {
        state.position++;
        if (state.input.charCodeAt(state.position) === 0x0A/* LF */) {
          state.position++;
        }
      } else {
        throwError(state, 'a line break is expected');
      }

      state.line += 1;
      state.lineStart = state.position;
    }

    function skipSeparationSpace(state, allowComments, checkIndent) {
      var lineBreaks = 0,
          ch = state.input.charCodeAt(state.position);

      while (ch !== 0) {
        while (is_WHITE_SPACE(ch)) {
          ch = state.input.charCodeAt(++state.position);
        }

        if (allowComments && ch === 0x23/* # */) {
          do {
            ch = state.input.charCodeAt(++state.position);
          } while (ch !== 0x0A/* LF */ && ch !== 0x0D/* CR */ && ch !== 0);
        }

        if (is_EOL(ch)) {
          readLineBreak(state);

          ch = state.input.charCodeAt(state.position);
          lineBreaks++;
          state.lineIndent = 0;

          while (ch === 0x20/* Space */) {
            state.lineIndent++;
            ch = state.input.charCodeAt(++state.position);
          }
        } else {
          break;
        }
      }

      if (checkIndent !== -1 && lineBreaks !== 0 && state.lineIndent < checkIndent) {
        throwWarning(state, 'deficient indentation');
      }

      return lineBreaks;
    }

    function testDocumentSeparator(state) {
      var _position = state.position,
          ch;

      ch = state.input.charCodeAt(_position);

      // Condition state.position === state.lineStart is tested
      // in parent on each call, for efficiency. No needs to test here again.
      if ((ch === 0x2D/* - */ || ch === 0x2E/* . */) &&
          ch === state.input.charCodeAt(_position + 1) &&
          ch === state.input.charCodeAt(_position + 2)) {

        _position += 3;

        ch = state.input.charCodeAt(_position);

        if (ch === 0 || is_WS_OR_EOL(ch)) {
          return true;
        }
      }

      return false;
    }

    function writeFoldedLines(state, count) {
      if (count === 1) {
        state.result += ' ';
      } else if (count > 1) {
        state.result += common.repeat('\n', count - 1);
      }
    }


    function readPlainScalar(state, nodeIndent, withinFlowCollection) {
      var preceding,
          following,
          captureStart,
          captureEnd,
          hasPendingContent,
          _line,
          _lineStart,
          _lineIndent,
          _kind = state.kind,
          _result = state.result,
          ch;

      ch = state.input.charCodeAt(state.position);

      if (is_WS_OR_EOL(ch)      ||
          is_FLOW_INDICATOR(ch) ||
          ch === 0x23/* # */    ||
          ch === 0x26/* & */    ||
          ch === 0x2A/* * */    ||
          ch === 0x21/* ! */    ||
          ch === 0x7C/* | */    ||
          ch === 0x3E/* > */    ||
          ch === 0x27/* ' */    ||
          ch === 0x22/* " */    ||
          ch === 0x25/* % */    ||
          ch === 0x40/* @ */    ||
          ch === 0x60/* ` */) {
        return false;
      }

      if (ch === 0x3F/* ? */ || ch === 0x2D/* - */) {
        following = state.input.charCodeAt(state.position + 1);

        if (is_WS_OR_EOL(following) ||
            withinFlowCollection && is_FLOW_INDICATOR(following)) {
          return false;
        }
      }

      state.kind = 'scalar';
      state.result = '';
      captureStart = captureEnd = state.position;
      hasPendingContent = false;

      while (ch !== 0) {
        if (ch === 0x3A/* : */) {
          following = state.input.charCodeAt(state.position + 1);

          if (is_WS_OR_EOL(following) ||
              withinFlowCollection && is_FLOW_INDICATOR(following)) {
            break;
          }

        } else if (ch === 0x23/* # */) {
          preceding = state.input.charCodeAt(state.position - 1);

          if (is_WS_OR_EOL(preceding)) {
            break;
          }

        } else if ((state.position === state.lineStart && testDocumentSeparator(state)) ||
                   withinFlowCollection && is_FLOW_INDICATOR(ch)) {
          break;

        } else if (is_EOL(ch)) {
          _line = state.line;
          _lineStart = state.lineStart;
          _lineIndent = state.lineIndent;
          skipSeparationSpace(state, false, -1);

          if (state.lineIndent >= nodeIndent) {
            hasPendingContent = true;
            ch = state.input.charCodeAt(state.position);
            continue;
          } else {
            state.position = captureEnd;
            state.line = _line;
            state.lineStart = _lineStart;
            state.lineIndent = _lineIndent;
            break;
          }
        }

        if (hasPendingContent) {
          captureSegment(state, captureStart, captureEnd, false);
          writeFoldedLines(state, state.line - _line);
          captureStart = captureEnd = state.position;
          hasPendingContent = false;
        }

        if (!is_WHITE_SPACE(ch)) {
          captureEnd = state.position + 1;
        }

        ch = state.input.charCodeAt(++state.position);
      }

      captureSegment(state, captureStart, captureEnd, false);

      if (state.result) {
        return true;
      }

      state.kind = _kind;
      state.result = _result;
      return false;
    }

    function readSingleQuotedScalar(state, nodeIndent) {
      var ch,
          captureStart, captureEnd;

      ch = state.input.charCodeAt(state.position);

      if (ch !== 0x27/* ' */) {
        return false;
      }

      state.kind = 'scalar';
      state.result = '';
      state.position++;
      captureStart = captureEnd = state.position;

      while ((ch = state.input.charCodeAt(state.position)) !== 0) {
        if (ch === 0x27/* ' */) {
          captureSegment(state, captureStart, state.position, true);
          ch = state.input.charCodeAt(++state.position);

          if (ch === 0x27/* ' */) {
            captureStart = state.position;
            state.position++;
            captureEnd = state.position;
          } else {
            return true;
          }

        } else if (is_EOL(ch)) {
          captureSegment(state, captureStart, captureEnd, true);
          writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
          captureStart = captureEnd = state.position;

        } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
          throwError(state, 'unexpected end of the document within a single quoted scalar');

        } else {
          state.position++;
          captureEnd = state.position;
        }
      }

      throwError(state, 'unexpected end of the stream within a single quoted scalar');
    }

    function readDoubleQuotedScalar(state, nodeIndent) {
      var captureStart,
          captureEnd,
          hexLength,
          hexResult,
          tmp,
          ch;

      ch = state.input.charCodeAt(state.position);

      if (ch !== 0x22/* " */) {
        return false;
      }

      state.kind = 'scalar';
      state.result = '';
      state.position++;
      captureStart = captureEnd = state.position;

      while ((ch = state.input.charCodeAt(state.position)) !== 0) {
        if (ch === 0x22/* " */) {
          captureSegment(state, captureStart, state.position, true);
          state.position++;
          return true;

        } else if (ch === 0x5C/* \ */) {
          captureSegment(state, captureStart, state.position, true);
          ch = state.input.charCodeAt(++state.position);

          if (is_EOL(ch)) {
            skipSeparationSpace(state, false, nodeIndent);

            // TODO: rework to inline fn with no type cast?
          } else if (ch < 256 && simpleEscapeCheck[ch]) {
            state.result += simpleEscapeMap[ch];
            state.position++;

          } else if ((tmp = escapedHexLen(ch)) > 0) {
            hexLength = tmp;
            hexResult = 0;

            for (; hexLength > 0; hexLength--) {
              ch = state.input.charCodeAt(++state.position);

              if ((tmp = fromHexCode(ch)) >= 0) {
                hexResult = (hexResult << 4) + tmp;

              } else {
                throwError(state, 'expected hexadecimal character');
              }
            }

            state.result += charFromCodepoint(hexResult);

            state.position++;

          } else {
            throwError(state, 'unknown escape sequence');
          }

          captureStart = captureEnd = state.position;

        } else if (is_EOL(ch)) {
          captureSegment(state, captureStart, captureEnd, true);
          writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
          captureStart = captureEnd = state.position;

        } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
          throwError(state, 'unexpected end of the document within a double quoted scalar');

        } else {
          state.position++;
          captureEnd = state.position;
        }
      }

      throwError(state, 'unexpected end of the stream within a double quoted scalar');
    }

    function readFlowCollection(state, nodeIndent) {
      var readNext = true,
          _line,
          _tag     = state.tag,
          _result,
          _anchor  = state.anchor,
          following,
          terminator,
          isPair,
          isExplicitPair,
          isMapping,
          overridableKeys = {},
          keyNode,
          keyTag,
          valueNode,
          ch;

      ch = state.input.charCodeAt(state.position);

      if (ch === 0x5B/* [ */) {
        terminator = 0x5D;/* ] */
        isMapping = false;
        _result = [];
      } else if (ch === 0x7B/* { */) {
        terminator = 0x7D;/* } */
        isMapping = true;
        _result = {};
      } else {
        return false;
      }

      if (state.anchor !== null) {
        state.anchorMap[state.anchor] = _result;
      }

      ch = state.input.charCodeAt(++state.position);

      while (ch !== 0) {
        skipSeparationSpace(state, true, nodeIndent);

        ch = state.input.charCodeAt(state.position);

        if (ch === terminator) {
          state.position++;
          state.tag = _tag;
          state.anchor = _anchor;
          state.kind = isMapping ? 'mapping' : 'sequence';
          state.result = _result;
          return true;
        } else if (!readNext) {
          throwError(state, 'missed comma between flow collection entries');
        }

        keyTag = keyNode = valueNode = null;
        isPair = isExplicitPair = false;

        if (ch === 0x3F/* ? */) {
          following = state.input.charCodeAt(state.position + 1);

          if (is_WS_OR_EOL(following)) {
            isPair = isExplicitPair = true;
            state.position++;
            skipSeparationSpace(state, true, nodeIndent);
          }
        }

        _line = state.line;
        composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
        keyTag = state.tag;
        keyNode = state.result;
        skipSeparationSpace(state, true, nodeIndent);

        ch = state.input.charCodeAt(state.position);

        if ((isExplicitPair || state.line === _line) && ch === 0x3A/* : */) {
          isPair = true;
          ch = state.input.charCodeAt(++state.position);
          skipSeparationSpace(state, true, nodeIndent);
          composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
          valueNode = state.result;
        }

        if (isMapping) {
          storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode);
        } else if (isPair) {
          _result.push(storeMappingPair(state, null, overridableKeys, keyTag, keyNode, valueNode));
        } else {
          _result.push(keyNode);
        }

        skipSeparationSpace(state, true, nodeIndent);

        ch = state.input.charCodeAt(state.position);

        if (ch === 0x2C/* , */) {
          readNext = true;
          ch = state.input.charCodeAt(++state.position);
        } else {
          readNext = false;
        }
      }

      throwError(state, 'unexpected end of the stream within a flow collection');
    }

    function readBlockScalar(state, nodeIndent) {
      var captureStart,
          folding,
          chomping       = CHOMPING_CLIP,
          didReadContent = false,
          detectedIndent = false,
          textIndent     = nodeIndent,
          emptyLines     = 0,
          atMoreIndented = false,
          tmp,
          ch;

      ch = state.input.charCodeAt(state.position);

      if (ch === 0x7C/* | */) {
        folding = false;
      } else if (ch === 0x3E/* > */) {
        folding = true;
      } else {
        return false;
      }

      state.kind = 'scalar';
      state.result = '';

      while (ch !== 0) {
        ch = state.input.charCodeAt(++state.position);

        if (ch === 0x2B/* + */ || ch === 0x2D/* - */) {
          if (CHOMPING_CLIP === chomping) {
            chomping = (ch === 0x2B/* + */) ? CHOMPING_KEEP : CHOMPING_STRIP;
          } else {
            throwError(state, 'repeat of a chomping mode identifier');
          }

        } else if ((tmp = fromDecimalCode(ch)) >= 0) {
          if (tmp === 0) {
            throwError(state, 'bad explicit indentation width of a block scalar; it cannot be less than one');
          } else if (!detectedIndent) {
            textIndent = nodeIndent + tmp - 1;
            detectedIndent = true;
          } else {
            throwError(state, 'repeat of an indentation width identifier');
          }

        } else {
          break;
        }
      }

      if (is_WHITE_SPACE(ch)) {
        do { ch = state.input.charCodeAt(++state.position); }
        while (is_WHITE_SPACE(ch));

        if (ch === 0x23/* # */) {
          do { ch = state.input.charCodeAt(++state.position); }
          while (!is_EOL(ch) && (ch !== 0));
        }
      }

      while (ch !== 0) {
        readLineBreak(state);
        state.lineIndent = 0;

        ch = state.input.charCodeAt(state.position);

        while ((!detectedIndent || state.lineIndent < textIndent) &&
               (ch === 0x20/* Space */)) {
          state.lineIndent++;
          ch = state.input.charCodeAt(++state.position);
        }

        if (!detectedIndent && state.lineIndent > textIndent) {
          textIndent = state.lineIndent;
        }

        if (is_EOL(ch)) {
          emptyLines++;
          continue;
        }

        // End of the scalar.
        if (state.lineIndent < textIndent) {

          // Perform the chomping.
          if (chomping === CHOMPING_KEEP) {
            state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);
          } else if (chomping === CHOMPING_CLIP) {
            if (didReadContent) { // i.e. only if the scalar is not empty.
              state.result += '\n';
            }
          }

          // Break this `while` cycle and go to the funciton's epilogue.
          break;
        }

        // Folded style: use fancy rules to handle line breaks.
        if (folding) {

          // Lines starting with white space characters (more-indented lines) are not folded.
          if (is_WHITE_SPACE(ch)) {
            atMoreIndented = true;
            // except for the first content line (cf. Example 8.1)
            state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);

          // End of more-indented block.
          } else if (atMoreIndented) {
            atMoreIndented = false;
            state.result += common.repeat('\n', emptyLines + 1);

          // Just one line break - perceive as the same line.
          } else if (emptyLines === 0) {
            if (didReadContent) { // i.e. only if we have already read some scalar content.
              state.result += ' ';
            }

          // Several line breaks - perceive as different lines.
          } else {
            state.result += common.repeat('\n', emptyLines);
          }

        // Literal style: just add exact number of line breaks between content lines.
        } else {
          // Keep all line breaks except the header line break.
          state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);
        }

        didReadContent = true;
        detectedIndent = true;
        emptyLines = 0;
        captureStart = state.position;

        while (!is_EOL(ch) && (ch !== 0)) {
          ch = state.input.charCodeAt(++state.position);
        }

        captureSegment(state, captureStart, state.position, false);
      }

      return true;
    }

    function readBlockSequence(state, nodeIndent) {
      var _line,
          _tag      = state.tag,
          _anchor   = state.anchor,
          _result   = [],
          following,
          detected  = false,
          ch;

      if (state.anchor !== null) {
        state.anchorMap[state.anchor] = _result;
      }

      ch = state.input.charCodeAt(state.position);

      while (ch !== 0) {

        if (ch !== 0x2D/* - */) {
          break;
        }

        following = state.input.charCodeAt(state.position + 1);

        if (!is_WS_OR_EOL(following)) {
          break;
        }

        detected = true;
        state.position++;

        if (skipSeparationSpace(state, true, -1)) {
          if (state.lineIndent <= nodeIndent) {
            _result.push(null);
            ch = state.input.charCodeAt(state.position);
            continue;
          }
        }

        _line = state.line;
        composeNode(state, nodeIndent, CONTEXT_BLOCK_IN, false, true);
        _result.push(state.result);
        skipSeparationSpace(state, true, -1);

        ch = state.input.charCodeAt(state.position);

        if ((state.line === _line || state.lineIndent > nodeIndent) && (ch !== 0)) {
          throwError(state, 'bad indentation of a sequence entry');
        } else if (state.lineIndent < nodeIndent) {
          break;
        }
      }

      if (detected) {
        state.tag = _tag;
        state.anchor = _anchor;
        state.kind = 'sequence';
        state.result = _result;
        return true;
      }
      return false;
    }

    function readBlockMapping(state, nodeIndent, flowIndent) {
      var following,
          allowCompact,
          _line,
          _pos,
          _tag          = state.tag,
          _anchor       = state.anchor,
          _result       = {},
          overridableKeys = {},
          keyTag        = null,
          keyNode       = null,
          valueNode     = null,
          atExplicitKey = false,
          detected      = false,
          ch;

      if (state.anchor !== null) {
        state.anchorMap[state.anchor] = _result;
      }

      ch = state.input.charCodeAt(state.position);

      while (ch !== 0) {
        following = state.input.charCodeAt(state.position + 1);
        _line = state.line; // Save the current line.
        _pos = state.position;

        //
        // Explicit notation case. There are two separate blocks:
        // first for the key (denoted by "?") and second for the value (denoted by ":")
        //
        if ((ch === 0x3F/* ? */ || ch === 0x3A/* : */) && is_WS_OR_EOL(following)) {

          if (ch === 0x3F/* ? */) {
            if (atExplicitKey) {
              storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null);
              keyTag = keyNode = valueNode = null;
            }

            detected = true;
            atExplicitKey = true;
            allowCompact = true;

          } else if (atExplicitKey) {
            // i.e. 0x3A/* : */ === character after the explicit key.
            atExplicitKey = false;
            allowCompact = true;

          } else {
            throwError(state, 'incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line');
          }

          state.position += 1;
          ch = following;

        //
        // Implicit notation case. Flow-style node as the key first, then ":", and the value.
        //
        } else if (composeNode(state, flowIndent, CONTEXT_FLOW_OUT, false, true)) {

          if (state.line === _line) {
            ch = state.input.charCodeAt(state.position);

            while (is_WHITE_SPACE(ch)) {
              ch = state.input.charCodeAt(++state.position);
            }

            if (ch === 0x3A/* : */) {
              ch = state.input.charCodeAt(++state.position);

              if (!is_WS_OR_EOL(ch)) {
                throwError(state, 'a whitespace character is expected after the key-value separator within a block mapping');
              }

              if (atExplicitKey) {
                storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null);
                keyTag = keyNode = valueNode = null;
              }

              detected = true;
              atExplicitKey = false;
              allowCompact = false;
              keyTag = state.tag;
              keyNode = state.result;

            } else if (detected) {
              throwError(state, 'can not read an implicit mapping pair; a colon is missed');

            } else {
              state.tag = _tag;
              state.anchor = _anchor;
              return true; // Keep the result of `composeNode`.
            }

          } else if (detected) {
            throwError(state, 'can not read a block mapping entry; a multiline key may not be an implicit key');

          } else {
            state.tag = _tag;
            state.anchor = _anchor;
            return true; // Keep the result of `composeNode`.
          }

        } else {
          break; // Reading is done. Go to the epilogue.
        }

        //
        // Common reading code for both explicit and implicit notations.
        //
        if (state.line === _line || state.lineIndent > nodeIndent) {
          if (composeNode(state, nodeIndent, CONTEXT_BLOCK_OUT, true, allowCompact)) {
            if (atExplicitKey) {
              keyNode = state.result;
            } else {
              valueNode = state.result;
            }
          }

          if (!atExplicitKey) {
            storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _line, _pos);
            keyTag = keyNode = valueNode = null;
          }

          skipSeparationSpace(state, true, -1);
          ch = state.input.charCodeAt(state.position);
        }

        if (state.lineIndent > nodeIndent && (ch !== 0)) {
          throwError(state, 'bad indentation of a mapping entry');
        } else if (state.lineIndent < nodeIndent) {
          break;
        }
      }

      //
      // Epilogue.
      //

      // Special case: last mapping's node contains only the key in explicit notation.
      if (atExplicitKey) {
        storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null);
      }

      // Expose the resulting mapping.
      if (detected) {
        state.tag = _tag;
        state.anchor = _anchor;
        state.kind = 'mapping';
        state.result = _result;
      }

      return detected;
    }

    function readTagProperty(state) {
      var _position,
          isVerbatim = false,
          isNamed    = false,
          tagHandle,
          tagName,
          ch;

      ch = state.input.charCodeAt(state.position);

      if (ch !== 0x21/* ! */) return false;

      if (state.tag !== null) {
        throwError(state, 'duplication of a tag property');
      }

      ch = state.input.charCodeAt(++state.position);

      if (ch === 0x3C/* < */) {
        isVerbatim = true;
        ch = state.input.charCodeAt(++state.position);

      } else if (ch === 0x21/* ! */) {
        isNamed = true;
        tagHandle = '!!';
        ch = state.input.charCodeAt(++state.position);

      } else {
        tagHandle = '!';
      }

      _position = state.position;

      if (isVerbatim) {
        do { ch = state.input.charCodeAt(++state.position); }
        while (ch !== 0 && ch !== 0x3E/* > */);

        if (state.position < state.length) {
          tagName = state.input.slice(_position, state.position);
          ch = state.input.charCodeAt(++state.position);
        } else {
          throwError(state, 'unexpected end of the stream within a verbatim tag');
        }
      } else {
        while (ch !== 0 && !is_WS_OR_EOL(ch)) {

          if (ch === 0x21/* ! */) {
            if (!isNamed) {
              tagHandle = state.input.slice(_position - 1, state.position + 1);

              if (!PATTERN_TAG_HANDLE.test(tagHandle)) {
                throwError(state, 'named tag handle cannot contain such characters');
              }

              isNamed = true;
              _position = state.position + 1;
            } else {
              throwError(state, 'tag suffix cannot contain exclamation marks');
            }
          }

          ch = state.input.charCodeAt(++state.position);
        }

        tagName = state.input.slice(_position, state.position);

        if (PATTERN_FLOW_INDICATORS.test(tagName)) {
          throwError(state, 'tag suffix cannot contain flow indicator characters');
        }
      }

      if (tagName && !PATTERN_TAG_URI.test(tagName)) {
        throwError(state, 'tag name cannot contain such characters: ' + tagName);
      }

      if (isVerbatim) {
        state.tag = tagName;

      } else if (_hasOwnProperty.call(state.tagMap, tagHandle)) {
        state.tag = state.tagMap[tagHandle] + tagName;

      } else if (tagHandle === '!') {
        state.tag = '!' + tagName;

      } else if (tagHandle === '!!') {
        state.tag = 'tag:yaml.org,2002:' + tagName;

      } else {
        throwError(state, 'undeclared tag handle "' + tagHandle + '"');
      }

      return true;
    }

    function readAnchorProperty(state) {
      var _position,
          ch;

      ch = state.input.charCodeAt(state.position);

      if (ch !== 0x26/* & */) return false;

      if (state.anchor !== null) {
        throwError(state, 'duplication of an anchor property');
      }

      ch = state.input.charCodeAt(++state.position);
      _position = state.position;

      while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }

      if (state.position === _position) {
        throwError(state, 'name of an anchor node must contain at least one character');
      }

      state.anchor = state.input.slice(_position, state.position);
      return true;
    }

    function readAlias(state) {
      var _position, alias,
          ch;

      ch = state.input.charCodeAt(state.position);

      if (ch !== 0x2A/* * */) return false;

      ch = state.input.charCodeAt(++state.position);
      _position = state.position;

      while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }

      if (state.position === _position) {
        throwError(state, 'name of an alias node must contain at least one character');
      }

      alias = state.input.slice(_position, state.position);

      if (!state.anchorMap.hasOwnProperty(alias)) {
        throwError(state, 'unidentified alias "' + alias + '"');
      }

      state.result = state.anchorMap[alias];
      skipSeparationSpace(state, true, -1);
      return true;
    }

    function composeNode(state, parentIndent, nodeContext, allowToSeek, allowCompact) {
      var allowBlockStyles,
          allowBlockScalars,
          allowBlockCollections,
          indentStatus = 1, // 1: this>parent, 0: this=parent, -1: this<parent
          atNewLine  = false,
          hasContent = false,
          typeIndex,
          typeQuantity,
          type,
          flowIndent,
          blockIndent;

      if (state.listener !== null) {
        state.listener('open', state);
      }

      state.tag    = null;
      state.anchor = null;
      state.kind   = null;
      state.result = null;

      allowBlockStyles = allowBlockScalars = allowBlockCollections =
        CONTEXT_BLOCK_OUT === nodeContext ||
        CONTEXT_BLOCK_IN  === nodeContext;

      if (allowToSeek) {
        if (skipSeparationSpace(state, true, -1)) {
          atNewLine = true;

          if (state.lineIndent > parentIndent) {
            indentStatus = 1;
          } else if (state.lineIndent === parentIndent) {
            indentStatus = 0;
          } else if (state.lineIndent < parentIndent) {
            indentStatus = -1;
          }
        }
      }

      if (indentStatus === 1) {
        while (readTagProperty(state) || readAnchorProperty(state)) {
          if (skipSeparationSpace(state, true, -1)) {
            atNewLine = true;
            allowBlockCollections = allowBlockStyles;

            if (state.lineIndent > parentIndent) {
              indentStatus = 1;
            } else if (state.lineIndent === parentIndent) {
              indentStatus = 0;
            } else if (state.lineIndent < parentIndent) {
              indentStatus = -1;
            }
          } else {
            allowBlockCollections = false;
          }
        }
      }

      if (allowBlockCollections) {
        allowBlockCollections = atNewLine || allowCompact;
      }

      if (indentStatus === 1 || CONTEXT_BLOCK_OUT === nodeContext) {
        if (CONTEXT_FLOW_IN === nodeContext || CONTEXT_FLOW_OUT === nodeContext) {
          flowIndent = parentIndent;
        } else {
          flowIndent = parentIndent + 1;
        }

        blockIndent = state.position - state.lineStart;

        if (indentStatus === 1) {
          if (allowBlockCollections &&
              (readBlockSequence(state, blockIndent) ||
               readBlockMapping(state, blockIndent, flowIndent)) ||
              readFlowCollection(state, flowIndent)) {
            hasContent = true;
          } else {
            if ((allowBlockScalars && readBlockScalar(state, flowIndent)) ||
                readSingleQuotedScalar(state, flowIndent) ||
                readDoubleQuotedScalar(state, flowIndent)) {
              hasContent = true;

            } else if (readAlias(state)) {
              hasContent = true;

              if (state.tag !== null || state.anchor !== null) {
                throwError(state, 'alias node should not have any properties');
              }

            } else if (readPlainScalar(state, flowIndent, CONTEXT_FLOW_IN === nodeContext)) {
              hasContent = true;

              if (state.tag === null) {
                state.tag = '?';
              }
            }

            if (state.anchor !== null) {
              state.anchorMap[state.anchor] = state.result;
            }
          }
        } else if (indentStatus === 0) {
          // Special case: block sequences are allowed to have same indentation level as the parent.
          // http://www.yaml.org/spec/1.2/spec.html#id2799784
          hasContent = allowBlockCollections && readBlockSequence(state, blockIndent);
        }
      }

      if (state.tag !== null && state.tag !== '!') {
        if (state.tag === '?') {
          for (typeIndex = 0, typeQuantity = state.implicitTypes.length; typeIndex < typeQuantity; typeIndex += 1) {
            type = state.implicitTypes[typeIndex];

            // Implicit resolving is not allowed for non-scalar types, and '?'
            // non-specific tag is only assigned to plain scalars. So, it isn't
            // needed to check for 'kind' conformity.

            if (type.resolve(state.result)) { // `state.result` updated in resolver if matched
              state.result = type.construct(state.result);
              state.tag = type.tag;
              if (state.anchor !== null) {
                state.anchorMap[state.anchor] = state.result;
              }
              break;
            }
          }
        } else if (_hasOwnProperty.call(state.typeMap[state.kind || 'fallback'], state.tag)) {
          type = state.typeMap[state.kind || 'fallback'][state.tag];

          if (state.result !== null && type.kind !== state.kind) {
            throwError(state, 'unacceptable node kind for !<' + state.tag + '> tag; it should be "' + type.kind + '", not "' + state.kind + '"');
          }

          if (!type.resolve(state.result)) { // `state.result` updated in resolver if matched
            throwError(state, 'cannot resolve a node with !<' + state.tag + '> explicit tag');
          } else {
            state.result = type.construct(state.result);
            if (state.anchor !== null) {
              state.anchorMap[state.anchor] = state.result;
            }
          }
        } else {
          throwError(state, 'unknown tag !<' + state.tag + '>');
        }
      }

      if (state.listener !== null) {
        state.listener('close', state);
      }
      return state.tag !== null ||  state.anchor !== null || hasContent;
    }

    function readDocument(state) {
      var documentStart = state.position,
          _position,
          directiveName,
          directiveArgs,
          hasDirectives = false,
          ch;

      state.version = null;
      state.checkLineBreaks = state.legacy;
      state.tagMap = {};
      state.anchorMap = {};

      while ((ch = state.input.charCodeAt(state.position)) !== 0) {
        skipSeparationSpace(state, true, -1);

        ch = state.input.charCodeAt(state.position);

        if (state.lineIndent > 0 || ch !== 0x25/* % */) {
          break;
        }

        hasDirectives = true;
        ch = state.input.charCodeAt(++state.position);
        _position = state.position;

        while (ch !== 0 && !is_WS_OR_EOL(ch)) {
          ch = state.input.charCodeAt(++state.position);
        }

        directiveName = state.input.slice(_position, state.position);
        directiveArgs = [];

        if (directiveName.length < 1) {
          throwError(state, 'directive name must not be less than one character in length');
        }

        while (ch !== 0) {
          while (is_WHITE_SPACE(ch)) {
            ch = state.input.charCodeAt(++state.position);
          }

          if (ch === 0x23/* # */) {
            do { ch = state.input.charCodeAt(++state.position); }
            while (ch !== 0 && !is_EOL(ch));
            break;
          }

          if (is_EOL(ch)) break;

          _position = state.position;

          while (ch !== 0 && !is_WS_OR_EOL(ch)) {
            ch = state.input.charCodeAt(++state.position);
          }

          directiveArgs.push(state.input.slice(_position, state.position));
        }

        if (ch !== 0) readLineBreak(state);

        if (_hasOwnProperty.call(directiveHandlers, directiveName)) {
          directiveHandlers[directiveName](state, directiveName, directiveArgs);
        } else {
          throwWarning(state, 'unknown document directive "' + directiveName + '"');
        }
      }

      skipSeparationSpace(state, true, -1);

      if (state.lineIndent === 0 &&
          state.input.charCodeAt(state.position)     === 0x2D/* - */ &&
          state.input.charCodeAt(state.position + 1) === 0x2D/* - */ &&
          state.input.charCodeAt(state.position + 2) === 0x2D/* - */) {
        state.position += 3;
        skipSeparationSpace(state, true, -1);

      } else if (hasDirectives) {
        throwError(state, 'directives end mark is expected');
      }

      composeNode(state, state.lineIndent - 1, CONTEXT_BLOCK_OUT, false, true);
      skipSeparationSpace(state, true, -1);

      if (state.checkLineBreaks &&
          PATTERN_NON_ASCII_LINE_BREAKS.test(state.input.slice(documentStart, state.position))) {
        throwWarning(state, 'non-ASCII line breaks are interpreted as content');
      }

      state.documents.push(state.result);

      if (state.position === state.lineStart && testDocumentSeparator(state)) {

        if (state.input.charCodeAt(state.position) === 0x2E/* . */) {
          state.position += 3;
          skipSeparationSpace(state, true, -1);
        }
        return;
      }

      if (state.position < (state.length - 1)) {
        throwError(state, 'end of the stream or a document separator is expected');
      } else {
        return;
      }
    }


    function loadDocuments(input, options) {
      input = String(input);
      options = options || {};

      if (input.length !== 0) {

        // Add tailing `\n` if not exists
        if (input.charCodeAt(input.length - 1) !== 0x0A/* LF */ &&
            input.charCodeAt(input.length - 1) !== 0x0D/* CR */) {
          input += '\n';
        }

        // Strip BOM
        if (input.charCodeAt(0) === 0xFEFF) {
          input = input.slice(1);
        }
      }

      var state = new State(input, options);

      // Use 0 as string terminator. That significantly simplifies bounds check.
      state.input += '\0';

      while (state.input.charCodeAt(state.position) === 0x20/* Space */) {
        state.lineIndent += 1;
        state.position += 1;
      }

      while (state.position < (state.length - 1)) {
        readDocument(state);
      }

      return state.documents;
    }


    function loadAll(input, iterator, options) {
      var documents = loadDocuments(input, options), index, length;

      if (typeof iterator !== 'function') {
        return documents;
      }

      for (index = 0, length = documents.length; index < length; index += 1) {
        iterator(documents[index]);
      }
    }


    function load(input, options) {
      var documents = loadDocuments(input, options);

      if (documents.length === 0) {
        /*eslint-disable no-undefined*/
        return undefined;
      } else if (documents.length === 1) {
        return documents[0];
      }
      throw new YAMLException('expected a single document in the stream, but found more');
    }


    function safeLoadAll(input, output, options) {
      if (typeof output === 'function') {
        loadAll(input, output, common.extend({ schema: DEFAULT_SAFE_SCHEMA }, options));
      } else {
        return loadAll(input, common.extend({ schema: DEFAULT_SAFE_SCHEMA }, options));
      }
    }


    function safeLoad(input, options) {
      return load(input, common.extend({ schema: DEFAULT_SAFE_SCHEMA }, options));
    }


    module.exports.loadAll     = loadAll;
    module.exports.load        = load;
    module.exports.safeLoadAll = safeLoadAll;
    module.exports.safeLoad    = safeLoad;

    },{"./common":2,"./exception":4,"./mark":6,"./schema/default_full":9,"./schema/default_safe":10}],6:[function(require,module,exports){


    var common = require('./common');


    function Mark(name, buffer, position, line, column) {
      this.name     = name;
      this.buffer   = buffer;
      this.position = position;
      this.line     = line;
      this.column   = column;
    }


    Mark.prototype.getSnippet = function getSnippet(indent, maxLength) {
      var head, start, tail, end, snippet;

      if (!this.buffer) return null;

      indent = indent || 4;
      maxLength = maxLength || 75;

      head = '';
      start = this.position;

      while (start > 0 && '\x00\r\n\x85\u2028\u2029'.indexOf(this.buffer.charAt(start - 1)) === -1) {
        start -= 1;
        if (this.position - start > (maxLength / 2 - 1)) {
          head = ' ... ';
          start += 5;
          break;
        }
      }

      tail = '';
      end = this.position;

      while (end < this.buffer.length && '\x00\r\n\x85\u2028\u2029'.indexOf(this.buffer.charAt(end)) === -1) {
        end += 1;
        if (end - this.position > (maxLength / 2 - 1)) {
          tail = ' ... ';
          end -= 5;
          break;
        }
      }

      snippet = this.buffer.slice(start, end);

      return common.repeat(' ', indent) + head + snippet + tail + '\n' +
             common.repeat(' ', indent + this.position - start + head.length) + '^';
    };


    Mark.prototype.toString = function toString(compact) {
      var snippet, where = '';

      if (this.name) {
        where += 'in "' + this.name + '" ';
      }

      where += 'at line ' + (this.line + 1) + ', column ' + (this.column + 1);

      if (!compact) {
        snippet = this.getSnippet();

        if (snippet) {
          where += ':\n' + snippet;
        }
      }

      return where;
    };


    module.exports = Mark;

    },{"./common":2}],7:[function(require,module,exports){

    /*eslint-disable max-len*/

    var common        = require('./common');
    var YAMLException = require('./exception');
    var Type          = require('./type');


    function compileList(schema, name, result) {
      var exclude = [];

      schema.include.forEach(function (includedSchema) {
        result = compileList(includedSchema, name, result);
      });

      schema[name].forEach(function (currentType) {
        result.forEach(function (previousType, previousIndex) {
          if (previousType.tag === currentType.tag && previousType.kind === currentType.kind) {
            exclude.push(previousIndex);
          }
        });

        result.push(currentType);
      });

      return result.filter(function (type, index) {
        return exclude.indexOf(index) === -1;
      });
    }


    function compileMap(/* lists... */) {
      var result = {
            scalar: {},
            sequence: {},
            mapping: {},
            fallback: {}
          }, index, length;

      function collectType(type) {
        result[type.kind][type.tag] = result['fallback'][type.tag] = type;
      }

      for (index = 0, length = arguments.length; index < length; index += 1) {
        arguments[index].forEach(collectType);
      }
      return result;
    }


    function Schema(definition) {
      this.include  = definition.include  || [];
      this.implicit = definition.implicit || [];
      this.explicit = definition.explicit || [];

      this.implicit.forEach(function (type) {
        if (type.loadKind && type.loadKind !== 'scalar') {
          throw new YAMLException('There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.');
        }
      });

      this.compiledImplicit = compileList(this, 'implicit', []);
      this.compiledExplicit = compileList(this, 'explicit', []);
      this.compiledTypeMap  = compileMap(this.compiledImplicit, this.compiledExplicit);
    }


    Schema.DEFAULT = null;


    Schema.create = function createSchema() {
      var schemas, types;

      switch (arguments.length) {
        case 1:
          schemas = Schema.DEFAULT;
          types = arguments[0];
          break;

        case 2:
          schemas = arguments[0];
          types = arguments[1];
          break;

        default:
          throw new YAMLException('Wrong number of arguments for Schema.create function');
      }

      schemas = common.toArray(schemas);
      types = common.toArray(types);

      if (!schemas.every(function (schema) { return schema instanceof Schema; })) {
        throw new YAMLException('Specified list of super schemas (or a single Schema object) contains a non-Schema object.');
      }

      if (!types.every(function (type) { return type instanceof Type; })) {
        throw new YAMLException('Specified list of YAML types (or a single Type object) contains a non-Type object.');
      }

      return new Schema({
        include: schemas,
        explicit: types
      });
    };


    module.exports = Schema;

    },{"./common":2,"./exception":4,"./type":13}],8:[function(require,module,exports){


    var Schema = require('../schema');


    module.exports = new Schema({
      include: [
        require('./json')
      ]
    });

    },{"../schema":7,"./json":12}],9:[function(require,module,exports){


    var Schema = require('../schema');


    module.exports = Schema.DEFAULT = new Schema({
      include: [
        require('./default_safe')
      ],
      explicit: [
        require('../type/js/undefined'),
        require('../type/js/regexp'),
        require('../type/js/function')
      ]
    });

    },{"../schema":7,"../type/js/function":18,"../type/js/regexp":19,"../type/js/undefined":20,"./default_safe":10}],10:[function(require,module,exports){


    var Schema = require('../schema');


    module.exports = new Schema({
      include: [
        require('./core')
      ],
      implicit: [
        require('../type/timestamp'),
        require('../type/merge')
      ],
      explicit: [
        require('../type/binary'),
        require('../type/omap'),
        require('../type/pairs'),
        require('../type/set')
      ]
    });

    },{"../schema":7,"../type/binary":14,"../type/merge":22,"../type/omap":24,"../type/pairs":25,"../type/set":27,"../type/timestamp":29,"./core":8}],11:[function(require,module,exports){


    var Schema = require('../schema');


    module.exports = new Schema({
      explicit: [
        require('../type/str'),
        require('../type/seq'),
        require('../type/map')
      ]
    });

    },{"../schema":7,"../type/map":21,"../type/seq":26,"../type/str":28}],12:[function(require,module,exports){


    var Schema = require('../schema');


    module.exports = new Schema({
      include: [
        require('./failsafe')
      ],
      implicit: [
        require('../type/null'),
        require('../type/bool'),
        require('../type/int'),
        require('../type/float')
      ]
    });

    },{"../schema":7,"../type/bool":15,"../type/float":16,"../type/int":17,"../type/null":23,"./failsafe":11}],13:[function(require,module,exports){

    var YAMLException = require('./exception');

    var TYPE_CONSTRUCTOR_OPTIONS = [
      'kind',
      'resolve',
      'construct',
      'instanceOf',
      'predicate',
      'represent',
      'defaultStyle',
      'styleAliases'
    ];

    var YAML_NODE_KINDS = [
      'scalar',
      'sequence',
      'mapping'
    ];

    function compileStyleAliases(map) {
      var result = {};

      if (map !== null) {
        Object.keys(map).forEach(function (style) {
          map[style].forEach(function (alias) {
            result[String(alias)] = style;
          });
        });
      }

      return result;
    }

    function Type(tag, options) {
      options = options || {};

      Object.keys(options).forEach(function (name) {
        if (TYPE_CONSTRUCTOR_OPTIONS.indexOf(name) === -1) {
          throw new YAMLException('Unknown option "' + name + '" is met in definition of "' + tag + '" YAML type.');
        }
      });

      // TODO: Add tag format check.
      this.tag          = tag;
      this.kind         = options['kind']         || null;
      this.resolve      = options['resolve']      || function () { return true; };
      this.construct    = options['construct']    || function (data) { return data; };
      this.instanceOf   = options['instanceOf']   || null;
      this.predicate    = options['predicate']    || null;
      this.represent    = options['represent']    || null;
      this.defaultStyle = options['defaultStyle'] || null;
      this.styleAliases = compileStyleAliases(options['styleAliases'] || null);

      if (YAML_NODE_KINDS.indexOf(this.kind) === -1) {
        throw new YAMLException('Unknown kind "' + this.kind + '" is specified for "' + tag + '" YAML type.');
      }
    }

    module.exports = Type;

    },{"./exception":4}],14:[function(require,module,exports){

    /*eslint-disable no-bitwise*/

    var NodeBuffer;

    var Type       = require('../type');


    // [ 64, 65, 66 ] -> [ padding, CR, LF ]
    var BASE64_MAP = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r';


    function resolveYamlBinary(data) {
      if (data === null) return false;

      var code, idx, bitlen = 0, max = data.length, map = BASE64_MAP;

      // Convert one by one.
      for (idx = 0; idx < max; idx++) {
        code = map.indexOf(data.charAt(idx));

        // Skip CR/LF
        if (code > 64) continue;

        // Fail on illegal characters
        if (code < 0) return false;

        bitlen += 6;
      }

      // If there are any bits left, source was corrupted
      return (bitlen % 8) === 0;
    }

    function constructYamlBinary(data) {
      var idx, tailbits,
          input = data.replace(/[\r\n=]/g, ''), // remove CR/LF & padding to simplify scan
          max = input.length,
          map = BASE64_MAP,
          bits = 0,
          result = [];

      // Collect by 6*4 bits (3 bytes)

      for (idx = 0; idx < max; idx++) {
        if ((idx % 4 === 0) && idx) {
          result.push((bits >> 16) & 0xFF);
          result.push((bits >> 8) & 0xFF);
          result.push(bits & 0xFF);
        }

        bits = (bits << 6) | map.indexOf(input.charAt(idx));
      }

      // Dump tail

      tailbits = (max % 4) * 6;

      if (tailbits === 0) {
        result.push((bits >> 16) & 0xFF);
        result.push((bits >> 8) & 0xFF);
        result.push(bits & 0xFF);
      } else if (tailbits === 18) {
        result.push((bits >> 10) & 0xFF);
        result.push((bits >> 2) & 0xFF);
      } else if (tailbits === 12) {
        result.push((bits >> 4) & 0xFF);
      }

      return result;
    }

    function representYamlBinary(object /*, style*/) {
      var result = '', bits = 0, idx, tail,
          max = object.length,
          map = BASE64_MAP;

      // Convert every three bytes to 4 ASCII characters.

      for (idx = 0; idx < max; idx++) {
        if ((idx % 3 === 0) && idx) {
          result += map[(bits >> 18) & 0x3F];
          result += map[(bits >> 12) & 0x3F];
          result += map[(bits >> 6) & 0x3F];
          result += map[bits & 0x3F];
        }

        bits = (bits << 8) + object[idx];
      }

      // Dump tail

      tail = max % 3;

      if (tail === 0) {
        result += map[(bits >> 18) & 0x3F];
        result += map[(bits >> 12) & 0x3F];
        result += map[(bits >> 6) & 0x3F];
        result += map[bits & 0x3F];
      } else if (tail === 2) {
        result += map[(bits >> 10) & 0x3F];
        result += map[(bits >> 4) & 0x3F];
        result += map[(bits << 2) & 0x3F];
        result += map[64];
      } else if (tail === 1) {
        result += map[(bits >> 2) & 0x3F];
        result += map[(bits << 4) & 0x3F];
        result += map[64];
        result += map[64];
      }

      return result;
    }

    function isBinary(object) {
      return NodeBuffer && NodeBuffer.isBuffer(object);
    }

    module.exports = new Type('tag:yaml.org,2002:binary', {
      kind: 'scalar',
      resolve: resolveYamlBinary,
      construct: constructYamlBinary,
      predicate: isBinary,
      represent: representYamlBinary
    });

    },{"../type":13}],15:[function(require,module,exports){

    var Type = require('../type');

    function resolveYamlBoolean(data) {
      if (data === null) return false;

      var max = data.length;

      return (max === 4 && (data === 'true' || data === 'True' || data === 'TRUE')) ||
             (max === 5 && (data === 'false' || data === 'False' || data === 'FALSE'));
    }

    function constructYamlBoolean(data) {
      return data === 'true' ||
             data === 'True' ||
             data === 'TRUE';
    }

    function isBoolean(object) {
      return Object.prototype.toString.call(object) === '[object Boolean]';
    }

    module.exports = new Type('tag:yaml.org,2002:bool', {
      kind: 'scalar',
      resolve: resolveYamlBoolean,
      construct: constructYamlBoolean,
      predicate: isBoolean,
      represent: {
        lowercase: function (object) { return object ? 'true' : 'false'; },
        uppercase: function (object) { return object ? 'TRUE' : 'FALSE'; },
        camelcase: function (object) { return object ? 'True' : 'False'; }
      },
      defaultStyle: 'lowercase'
    });

    },{"../type":13}],16:[function(require,module,exports){

    var common = require('../common');
    var Type   = require('../type');

    var YAML_FLOAT_PATTERN = new RegExp(
      // 2.5e4, 2.5 and integers
      '^(?:[-+]?(?:0|[1-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?' +
      // .2e4, .2
      // special case, seems not from spec
      '|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?' +
      // 20:59
      '|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*' +
      // .inf
      '|[-+]?\\.(?:inf|Inf|INF)' +
      // .nan
      '|\\.(?:nan|NaN|NAN))$');

    function resolveYamlFloat(data) {
      if (data === null) return false;

      if (!YAML_FLOAT_PATTERN.test(data) ||
          // Quick hack to not allow integers end with `_`
          // Probably should update regexp & check speed
          data[data.length - 1] === '_') {
        return false;
      }

      return true;
    }

    function constructYamlFloat(data) {
      var value, sign, base, digits;

      value  = data.replace(/_/g, '').toLowerCase();
      sign   = value[0] === '-' ? -1 : 1;
      digits = [];

      if ('+-'.indexOf(value[0]) >= 0) {
        value = value.slice(1);
      }

      if (value === '.inf') {
        return (sign === 1) ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;

      } else if (value === '.nan') {
        return NaN;

      } else if (value.indexOf(':') >= 0) {
        value.split(':').forEach(function (v) {
          digits.unshift(parseFloat(v, 10));
        });

        value = 0.0;
        base = 1;

        digits.forEach(function (d) {
          value += d * base;
          base *= 60;
        });

        return sign * value;

      }
      return sign * parseFloat(value, 10);
    }


    var SCIENTIFIC_WITHOUT_DOT = /^[-+]?[0-9]+e/;

    function representYamlFloat(object, style) {
      var res;

      if (isNaN(object)) {
        switch (style) {
          case 'lowercase': return '.nan';
          case 'uppercase': return '.NAN';
          case 'camelcase': return '.NaN';
        }
      } else if (Number.POSITIVE_INFINITY === object) {
        switch (style) {
          case 'lowercase': return '.inf';
          case 'uppercase': return '.INF';
          case 'camelcase': return '.Inf';
        }
      } else if (Number.NEGATIVE_INFINITY === object) {
        switch (style) {
          case 'lowercase': return '-.inf';
          case 'uppercase': return '-.INF';
          case 'camelcase': return '-.Inf';
        }
      } else if (common.isNegativeZero(object)) {
        return '-0.0';
      }

      res = object.toString(10);

      // JS stringifier can build scientific format without dots: 5e-100,
      // while YAML requres dot: 5.e-100. Fix it with simple hack

      return SCIENTIFIC_WITHOUT_DOT.test(res) ? res.replace('e', '.e') : res;
    }

    function isFloat(object) {
      return (Object.prototype.toString.call(object) === '[object Number]') &&
             (object % 1 !== 0 || common.isNegativeZero(object));
    }

    module.exports = new Type('tag:yaml.org,2002:float', {
      kind: 'scalar',
      resolve: resolveYamlFloat,
      construct: constructYamlFloat,
      predicate: isFloat,
      represent: representYamlFloat,
      defaultStyle: 'lowercase'
    });

    },{"../common":2,"../type":13}],17:[function(require,module,exports){

    var common = require('../common');
    var Type   = require('../type');

    function isHexCode(c) {
      return ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */)) ||
             ((0x41/* A */ <= c) && (c <= 0x46/* F */)) ||
             ((0x61/* a */ <= c) && (c <= 0x66/* f */));
    }

    function isOctCode(c) {
      return ((0x30/* 0 */ <= c) && (c <= 0x37/* 7 */));
    }

    function isDecCode(c) {
      return ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */));
    }

    function resolveYamlInteger(data) {
      if (data === null) return false;

      var max = data.length,
          index = 0,
          hasDigits = false,
          ch;

      if (!max) return false;

      ch = data[index];

      // sign
      if (ch === '-' || ch === '+') {
        ch = data[++index];
      }

      if (ch === '0') {
        // 0
        if (index + 1 === max) return true;
        ch = data[++index];

        // base 2, base 8, base 16

        if (ch === 'b') {
          // base 2
          index++;

          for (; index < max; index++) {
            ch = data[index];
            if (ch === '_') continue;
            if (ch !== '0' && ch !== '1') return false;
            hasDigits = true;
          }
          return hasDigits && ch !== '_';
        }


        if (ch === 'x') {
          // base 16
          index++;

          for (; index < max; index++) {
            ch = data[index];
            if (ch === '_') continue;
            if (!isHexCode(data.charCodeAt(index))) return false;
            hasDigits = true;
          }
          return hasDigits && ch !== '_';
        }

        // base 8
        for (; index < max; index++) {
          ch = data[index];
          if (ch === '_') continue;
          if (!isOctCode(data.charCodeAt(index))) return false;
          hasDigits = true;
        }
        return hasDigits && ch !== '_';
      }

      // base 10 (except 0) or base 60

      // value should not start with `_`;
      if (ch === '_') return false;

      for (; index < max; index++) {
        ch = data[index];
        if (ch === '_') continue;
        if (ch === ':') break;
        if (!isDecCode(data.charCodeAt(index))) {
          return false;
        }
        hasDigits = true;
      }

      // Should have digits and should not end with `_`
      if (!hasDigits || ch === '_') return false;

      // if !base60 - done;
      if (ch !== ':') return true;

      // base60 almost not used, no needs to optimize
      return /^(:[0-5]?[0-9])+$/.test(data.slice(index));
    }

    function constructYamlInteger(data) {
      var value = data, sign = 1, ch, base, digits = [];

      if (value.indexOf('_') !== -1) {
        value = value.replace(/_/g, '');
      }

      ch = value[0];

      if (ch === '-' || ch === '+') {
        if (ch === '-') sign = -1;
        value = value.slice(1);
        ch = value[0];
      }

      if (value === '0') return 0;

      if (ch === '0') {
        if (value[1] === 'b') return sign * parseInt(value.slice(2), 2);
        if (value[1] === 'x') return sign * parseInt(value, 16);
        return sign * parseInt(value, 8);
      }

      if (value.indexOf(':') !== -1) {
        value.split(':').forEach(function (v) {
          digits.unshift(parseInt(v, 10));
        });

        value = 0;
        base = 1;

        digits.forEach(function (d) {
          value += (d * base);
          base *= 60;
        });

        return sign * value;

      }

      return sign * parseInt(value, 10);
    }

    function isInteger(object) {
      return (Object.prototype.toString.call(object)) === '[object Number]' &&
             (object % 1 === 0 && !common.isNegativeZero(object));
    }

    module.exports = new Type('tag:yaml.org,2002:int', {
      kind: 'scalar',
      resolve: resolveYamlInteger,
      construct: constructYamlInteger,
      predicate: isInteger,
      represent: {
        binary:      function (obj) { return obj >= 0 ? '0b' + obj.toString(2) : '-0b' + obj.toString(2).slice(1); },
        octal:       function (obj) { return obj >= 0 ? '0'  + obj.toString(8) : '-0'  + obj.toString(8).slice(1); },
        decimal:     function (obj) { return obj.toString(10); },
        /* eslint-disable max-len */
        hexadecimal: function (obj) { return obj >= 0 ? '0x' + obj.toString(16).toUpperCase() :  '-0x' + obj.toString(16).toUpperCase().slice(1); }
      },
      defaultStyle: 'decimal',
      styleAliases: {
        binary:      [ 2,  'bin' ],
        octal:       [ 8,  'oct' ],
        decimal:     [ 10, 'dec' ],
        hexadecimal: [ 16, 'hex' ]
      }
    });

    },{"../common":2,"../type":13}],18:[function(require,module,exports){

    var esprima;

    esprima = window.esprima;

    var Type = require('../../type');

    function resolveJavascriptFunction(data) {
      if (data === null) return false;

      try {
        var source = '(' + data + ')',
            ast    = esprima.parse(source, { range: true });

        if (ast.type                    !== 'Program'             ||
            ast.body.length             !== 1                     ||
            ast.body[0].type            !== 'ExpressionStatement' ||
            (ast.body[0].expression.type !== 'ArrowFunctionExpression' &&
              ast.body[0].expression.type !== 'FunctionExpression')) {
          return false;
        }

        return true;
      } catch (err) {
        return false;
      }
    }

    function constructJavascriptFunction(data) {
      /*jslint evil:true*/

      var source = '(' + data + ')',
          ast    = esprima.parse(source, { range: true }),
          params = [],
          body;

      if (ast.type                    !== 'Program'             ||
          ast.body.length             !== 1                     ||
          ast.body[0].type            !== 'ExpressionStatement' ||
          (ast.body[0].expression.type !== 'ArrowFunctionExpression' &&
            ast.body[0].expression.type !== 'FunctionExpression')) {
        throw new Error('Failed to resolve function');
      }

      ast.body[0].expression.params.forEach(function (param) {
        params.push(param.name);
      });

      body = ast.body[0].expression.body.range;

      // Esprima's ranges include the first '{' and the last '}' characters on
      // function expressions. So cut them out.
      if (ast.body[0].expression.body.type === 'BlockStatement') {
        /*eslint-disable no-new-func*/
        return new Function(params, source.slice(body[0] + 1, body[1] - 1));
      }
      // ES6 arrow functions can omit the BlockStatement. In that case, just return
      // the body.
      /*eslint-disable no-new-func*/
      return new Function(params, 'return ' + source.slice(body[0], body[1]));
    }

    function representJavascriptFunction(object /*, style*/) {
      return object.toString();
    }

    function isFunction(object) {
      return Object.prototype.toString.call(object) === '[object Function]';
    }

    module.exports = new Type('tag:yaml.org,2002:js/function', {
      kind: 'scalar',
      resolve: resolveJavascriptFunction,
      construct: constructJavascriptFunction,
      predicate: isFunction,
      represent: representJavascriptFunction
    });

    },{"../../type":13}],19:[function(require,module,exports){

    var Type = require('../../type');

    function resolveJavascriptRegExp(data) {
      if (data === null) return false;
      if (data.length === 0) return false;

      var regexp = data,
          tail   = /\/([gim]*)$/.exec(data),
          modifiers = '';

      // if regexp starts with '/' it can have modifiers and must be properly closed
      // `/foo/gim` - modifiers tail can be maximum 3 chars
      if (regexp[0] === '/') {
        if (tail) modifiers = tail[1];

        if (modifiers.length > 3) return false;
        // if expression starts with /, is should be properly terminated
        if (regexp[regexp.length - modifiers.length - 1] !== '/') return false;
      }

      return true;
    }

    function constructJavascriptRegExp(data) {
      var regexp = data,
          tail   = /\/([gim]*)$/.exec(data),
          modifiers = '';

      // `/foo/gim` - tail can be maximum 4 chars
      if (regexp[0] === '/') {
        if (tail) modifiers = tail[1];
        regexp = regexp.slice(1, regexp.length - modifiers.length - 1);
      }

      return new RegExp(regexp, modifiers);
    }

    function representJavascriptRegExp(object /*, style*/) {
      var result = '/' + object.source + '/';

      if (object.global) result += 'g';
      if (object.multiline) result += 'm';
      if (object.ignoreCase) result += 'i';

      return result;
    }

    function isRegExp(object) {
      return Object.prototype.toString.call(object) === '[object RegExp]';
    }

    module.exports = new Type('tag:yaml.org,2002:js/regexp', {
      kind: 'scalar',
      resolve: resolveJavascriptRegExp,
      construct: constructJavascriptRegExp,
      predicate: isRegExp,
      represent: representJavascriptRegExp
    });

    },{"../../type":13}],20:[function(require,module,exports){

    var Type = require('../../type');

    function resolveJavascriptUndefined() {
      return true;
    }

    function constructJavascriptUndefined() {
      /*eslint-disable no-undefined*/
      return undefined;
    }

    function representJavascriptUndefined() {
      return '';
    }

    function isUndefined(object) {
      return typeof object === 'undefined';
    }

    module.exports = new Type('tag:yaml.org,2002:js/undefined', {
      kind: 'scalar',
      resolve: resolveJavascriptUndefined,
      construct: constructJavascriptUndefined,
      predicate: isUndefined,
      represent: representJavascriptUndefined
    });

    },{"../../type":13}],21:[function(require,module,exports){

    var Type = require('../type');

    module.exports = new Type('tag:yaml.org,2002:map', {
      kind: 'mapping',
      construct: function (data) { return data !== null ? data : {}; }
    });

    },{"../type":13}],22:[function(require,module,exports){

    var Type = require('../type');

    function resolveYamlMerge(data) {
      return data === '<<' || data === null;
    }

    module.exports = new Type('tag:yaml.org,2002:merge', {
      kind: 'scalar',
      resolve: resolveYamlMerge
    });

    },{"../type":13}],23:[function(require,module,exports){

    var Type = require('../type');

    function resolveYamlNull(data) {
      if (data === null) return true;

      var max = data.length;

      return (max === 1 && data === '~') ||
             (max === 4 && (data === 'null' || data === 'Null' || data === 'NULL'));
    }

    function constructYamlNull() {
      return null;
    }

    function isNull(object) {
      return object === null;
    }

    module.exports = new Type('tag:yaml.org,2002:null', {
      kind: 'scalar',
      resolve: resolveYamlNull,
      construct: constructYamlNull,
      predicate: isNull,
      represent: {
        canonical: function () { return '~';    },
        lowercase: function () { return 'null'; },
        uppercase: function () { return 'NULL'; },
        camelcase: function () { return 'Null'; }
      },
      defaultStyle: 'lowercase'
    });

    },{"../type":13}],24:[function(require,module,exports){

    var Type = require('../type');

    var _hasOwnProperty = Object.prototype.hasOwnProperty;
    var _toString       = Object.prototype.toString;

    function resolveYamlOmap(data) {
      if (data === null) return true;

      var objectKeys = [], index, length, pair, pairKey, pairHasKey,
          object = data;

      for (index = 0, length = object.length; index < length; index += 1) {
        pair = object[index];
        pairHasKey = false;

        if (_toString.call(pair) !== '[object Object]') return false;

        for (pairKey in pair) {
          if (_hasOwnProperty.call(pair, pairKey)) {
            if (!pairHasKey) pairHasKey = true;
            else return false;
          }
        }

        if (!pairHasKey) return false;

        if (objectKeys.indexOf(pairKey) === -1) objectKeys.push(pairKey);
        else return false;
      }

      return true;
    }

    function constructYamlOmap(data) {
      return data !== null ? data : [];
    }

    module.exports = new Type('tag:yaml.org,2002:omap', {
      kind: 'sequence',
      resolve: resolveYamlOmap,
      construct: constructYamlOmap
    });

    },{"../type":13}],25:[function(require,module,exports){

    var Type = require('../type');

    var _toString = Object.prototype.toString;

    function resolveYamlPairs(data) {
      if (data === null) return true;

      var index, length, pair, keys, result,
          object = data;

      result = new Array(object.length);

      for (index = 0, length = object.length; index < length; index += 1) {
        pair = object[index];

        if (_toString.call(pair) !== '[object Object]') return false;

        keys = Object.keys(pair);

        if (keys.length !== 1) return false;

        result[index] = [ keys[0], pair[keys[0]] ];
      }

      return true;
    }

    function constructYamlPairs(data) {
      if (data === null) return [];

      var index, length, pair, keys, result,
          object = data;

      result = new Array(object.length);

      for (index = 0, length = object.length; index < length; index += 1) {
        pair = object[index];

        keys = Object.keys(pair);

        result[index] = [ keys[0], pair[keys[0]] ];
      }

      return result;
    }

    module.exports = new Type('tag:yaml.org,2002:pairs', {
      kind: 'sequence',
      resolve: resolveYamlPairs,
      construct: constructYamlPairs
    });

    },{"../type":13}],26:[function(require,module,exports){

    var Type = require('../type');

    module.exports = new Type('tag:yaml.org,2002:seq', {
      kind: 'sequence',
      construct: function (data) { return data !== null ? data : []; }
    });

    },{"../type":13}],27:[function(require,module,exports){

    var Type = require('../type');

    var _hasOwnProperty = Object.prototype.hasOwnProperty;

    function resolveYamlSet(data) {
      if (data === null) return true;

      var key, object = data;

      for (key in object) {
        if (_hasOwnProperty.call(object, key)) {
          if (object[key] !== null) return false;
        }
      }

      return true;
    }

    function constructYamlSet(data) {
      return data !== null ? data : {};
    }

    module.exports = new Type('tag:yaml.org,2002:set', {
      kind: 'mapping',
      resolve: resolveYamlSet,
      construct: constructYamlSet
    });

    },{"../type":13}],28:[function(require,module,exports){

    var Type = require('../type');

    module.exports = new Type('tag:yaml.org,2002:str', {
      kind: 'scalar',
      construct: function (data) { return data !== null ? data : ''; }
    });

    },{"../type":13}],29:[function(require,module,exports){

    var Type = require('../type');

    var YAML_DATE_REGEXP = new RegExp(
      '^([0-9][0-9][0-9][0-9])'          + // [1] year
      '-([0-9][0-9])'                    + // [2] month
      '-([0-9][0-9])$');                   // [3] day

    var YAML_TIMESTAMP_REGEXP = new RegExp(
      '^([0-9][0-9][0-9][0-9])'          + // [1] year
      '-([0-9][0-9]?)'                   + // [2] month
      '-([0-9][0-9]?)'                   + // [3] day
      '(?:[Tt]|[ \\t]+)'                 + // ...
      '([0-9][0-9]?)'                    + // [4] hour
      ':([0-9][0-9])'                    + // [5] minute
      ':([0-9][0-9])'                    + // [6] second
      '(?:\\.([0-9]*))?'                 + // [7] fraction
      '(?:[ \\t]*(Z|([-+])([0-9][0-9]?)' + // [8] tz [9] tz_sign [10] tz_hour
      '(?::([0-9][0-9]))?))?$');           // [11] tz_minute

    function resolveYamlTimestamp(data) {
      if (data === null) return false;
      if (YAML_DATE_REGEXP.exec(data) !== null) return true;
      if (YAML_TIMESTAMP_REGEXP.exec(data) !== null) return true;
      return false;
    }

    function constructYamlTimestamp(data) {
      var match, year, month, day, hour, minute, second, fraction = 0,
          delta = null, tz_hour, tz_minute, date;

      match = YAML_DATE_REGEXP.exec(data);
      if (match === null) match = YAML_TIMESTAMP_REGEXP.exec(data);

      if (match === null) throw new Error('Date resolve error');

      // match: [1] year [2] month [3] day

      year = +(match[1]);
      month = +(match[2]) - 1; // JS month starts with 0
      day = +(match[3]);

      if (!match[4]) { // no hour
        return new Date(Date.UTC(year, month, day));
      }

      // match: [4] hour [5] minute [6] second [7] fraction

      hour = +(match[4]);
      minute = +(match[5]);
      second = +(match[6]);

      if (match[7]) {
        fraction = match[7].slice(0, 3);
        while (fraction.length < 3) { // milli-seconds
          fraction += '0';
        }
        fraction = +fraction;
      }

      // match: [8] tz [9] tz_sign [10] tz_hour [11] tz_minute

      if (match[9]) {
        tz_hour = +(match[10]);
        tz_minute = +(match[11] || 0);
        delta = (tz_hour * 60 + tz_minute) * 60000; // delta in mili-seconds
        if (match[9] === '-') delta = -delta;
      }

      date = new Date(Date.UTC(year, month, day, hour, minute, second, fraction));

      if (delta) date.setTime(date.getTime() - delta);

      return date;
    }

    function representYamlTimestamp(object /*, style*/) {
      return object.toISOString();
    }

    module.exports = new Type('tag:yaml.org,2002:timestamp', {
      kind: 'scalar',
      resolve: resolveYamlTimestamp,
      construct: constructYamlTimestamp,
      instanceOf: Date,
      represent: representYamlTimestamp
    });

    },{"../type":13}],"/":[function(require,module,exports){


    var yaml = require('./lib/js-yaml.js');


    module.exports = yaml;

    },{"./lib/js-yaml.js":1}]},{},[])("/")
    });
    });

    var common = createCommonjsModule(function (module, exports) {


    var TYPED_OK =  (typeof Uint8Array !== 'undefined') &&
                    (typeof Uint16Array !== 'undefined') &&
                    (typeof Int32Array !== 'undefined');

    function _has(obj, key) {
      return Object.prototype.hasOwnProperty.call(obj, key);
    }

    exports.assign = function (obj /*from1, from2, from3, ...*/) {
      var sources = Array.prototype.slice.call(arguments, 1);
      while (sources.length) {
        var source = sources.shift();
        if (!source) { continue; }

        if (typeof source !== 'object') {
          throw new TypeError(source + 'must be non-object');
        }

        for (var p in source) {
          if (_has(source, p)) {
            obj[p] = source[p];
          }
        }
      }

      return obj;
    };


    // reduce buffer size, avoiding mem copy
    exports.shrinkBuf = function (buf, size) {
      if (buf.length === size) { return buf; }
      if (buf.subarray) { return buf.subarray(0, size); }
      buf.length = size;
      return buf;
    };


    var fnTyped = {
      arraySet: function (dest, src, src_offs, len, dest_offs) {
        if (src.subarray && dest.subarray) {
          dest.set(src.subarray(src_offs, src_offs + len), dest_offs);
          return;
        }
        // Fallback to ordinary array
        for (var i = 0; i < len; i++) {
          dest[dest_offs + i] = src[src_offs + i];
        }
      },
      // Join array of chunks to single array.
      flattenChunks: function (chunks) {
        var i, l, len, pos, chunk, result;

        // calculate data length
        len = 0;
        for (i = 0, l = chunks.length; i < l; i++) {
          len += chunks[i].length;
        }

        // join chunks
        result = new Uint8Array(len);
        pos = 0;
        for (i = 0, l = chunks.length; i < l; i++) {
          chunk = chunks[i];
          result.set(chunk, pos);
          pos += chunk.length;
        }

        return result;
      }
    };

    var fnUntyped = {
      arraySet: function (dest, src, src_offs, len, dest_offs) {
        for (var i = 0; i < len; i++) {
          dest[dest_offs + i] = src[src_offs + i];
        }
      },
      // Join array of chunks to single array.
      flattenChunks: function (chunks) {
        return [].concat.apply([], chunks);
      }
    };


    // Enable/Disable typed arrays use, for testing
    //
    exports.setTyped = function (on) {
      if (on) {
        exports.Buf8  = Uint8Array;
        exports.Buf16 = Uint16Array;
        exports.Buf32 = Int32Array;
        exports.assign(exports, fnTyped);
      } else {
        exports.Buf8  = Array;
        exports.Buf16 = Array;
        exports.Buf32 = Array;
        exports.assign(exports, fnUntyped);
      }
    };

    exports.setTyped(TYPED_OK);
    });
    var common_1 = common.assign;
    var common_2 = common.shrinkBuf;
    var common_3 = common.setTyped;
    var common_4 = common.Buf8;
    var common_5 = common.Buf16;
    var common_6 = common.Buf32;

    // Note: adler32 takes 12% for level 0 and 2% for level 6.
    // It isn't worth it to make additional optimizations as in original.
    // Small size is preferable.

    // (C) 1995-2013 Jean-loup Gailly and Mark Adler
    // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
    //
    // This software is provided 'as-is', without any express or implied
    // warranty. In no event will the authors be held liable for any damages
    // arising from the use of this software.
    //
    // Permission is granted to anyone to use this software for any purpose,
    // including commercial applications, and to alter it and redistribute it
    // freely, subject to the following restrictions:
    //
    // 1. The origin of this software must not be misrepresented; you must not
    //   claim that you wrote the original software. If you use this software
    //   in a product, an acknowledgment in the product documentation would be
    //   appreciated but is not required.
    // 2. Altered source versions must be plainly marked as such, and must not be
    //   misrepresented as being the original software.
    // 3. This notice may not be removed or altered from any source distribution.

    function adler32(adler, buf, len, pos) {
      var s1 = (adler & 0xffff) |0,
          s2 = ((adler >>> 16) & 0xffff) |0,
          n = 0;

      while (len !== 0) {
        // Set limit ~ twice less than 5552, to keep
        // s2 in 31-bits, because we force signed ints.
        // in other case %= will fail.
        n = len > 2000 ? 2000 : len;
        len -= n;

        do {
          s1 = (s1 + buf[pos++]) |0;
          s2 = (s2 + s1) |0;
        } while (--n);

        s1 %= 65521;
        s2 %= 65521;
      }

      return (s1 | (s2 << 16)) |0;
    }


    var adler32_1 = adler32;

    // Note: we can't get significant speed boost here.
    // So write code to minimize size - no pregenerated tables
    // and array tools dependencies.

    // (C) 1995-2013 Jean-loup Gailly and Mark Adler
    // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
    //
    // This software is provided 'as-is', without any express or implied
    // warranty. In no event will the authors be held liable for any damages
    // arising from the use of this software.
    //
    // Permission is granted to anyone to use this software for any purpose,
    // including commercial applications, and to alter it and redistribute it
    // freely, subject to the following restrictions:
    //
    // 1. The origin of this software must not be misrepresented; you must not
    //   claim that you wrote the original software. If you use this software
    //   in a product, an acknowledgment in the product documentation would be
    //   appreciated but is not required.
    // 2. Altered source versions must be plainly marked as such, and must not be
    //   misrepresented as being the original software.
    // 3. This notice may not be removed or altered from any source distribution.

    // Use ordinary array, since untyped makes no boost here
    function makeTable() {
      var c, table = [];

      for (var n = 0; n < 256; n++) {
        c = n;
        for (var k = 0; k < 8; k++) {
          c = ((c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1));
        }
        table[n] = c;
      }

      return table;
    }

    // Create table on load. Just 255 signed longs. Not a problem.
    var crcTable = makeTable();


    function crc32(crc, buf, len, pos) {
      var t = crcTable,
          end = pos + len;

      crc ^= -1;

      for (var i = pos; i < end; i++) {
        crc = (crc >>> 8) ^ t[(crc ^ buf[i]) & 0xFF];
      }

      return (crc ^ (-1)); // >>> 0;
    }


    var crc32_1 = crc32;

    // (C) 1995-2013 Jean-loup Gailly and Mark Adler
    // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
    //
    // This software is provided 'as-is', without any express or implied
    // warranty. In no event will the authors be held liable for any damages
    // arising from the use of this software.
    //
    // Permission is granted to anyone to use this software for any purpose,
    // including commercial applications, and to alter it and redistribute it
    // freely, subject to the following restrictions:
    //
    // 1. The origin of this software must not be misrepresented; you must not
    //   claim that you wrote the original software. If you use this software
    //   in a product, an acknowledgment in the product documentation would be
    //   appreciated but is not required.
    // 2. Altered source versions must be plainly marked as such, and must not be
    //   misrepresented as being the original software.
    // 3. This notice may not be removed or altered from any source distribution.

    // See state defs from inflate.js
    var BAD = 30;       /* got a data error -- remain here until reset */
    var TYPE = 12;      /* i: waiting for type bits, including last-flag bit */

    /*
       Decode literal, length, and distance codes and write out the resulting
       literal and match bytes until either not enough input or output is
       available, an end-of-block is encountered, or a data error is encountered.
       When large enough input and output buffers are supplied to inflate(), for
       example, a 16K input buffer and a 64K output buffer, more than 95% of the
       inflate execution time is spent in this routine.

       Entry assumptions:

            state.mode === LEN
            strm.avail_in >= 6
            strm.avail_out >= 258
            start >= strm.avail_out
            state.bits < 8

       On return, state.mode is one of:

            LEN -- ran out of enough output space or enough available input
            TYPE -- reached end of block code, inflate() to interpret next block
            BAD -- error in block data

       Notes:

        - The maximum input bits used by a length/distance pair is 15 bits for the
          length code, 5 bits for the length extra, 15 bits for the distance code,
          and 13 bits for the distance extra.  This totals 48 bits, or six bytes.
          Therefore if strm.avail_in >= 6, then there is enough input to avoid
          checking for available input while decoding.

        - The maximum bytes that a single length/distance pair can output is 258
          bytes, which is the maximum length that can be coded.  inflate_fast()
          requires strm.avail_out >= 258 for each loop to avoid checking for
          output space.
     */
    var inffast = function inflate_fast(strm, start) {
      var state;
      var _in;                    /* local strm.input */
      var last;                   /* have enough input while in < last */
      var _out;                   /* local strm.output */
      var beg;                    /* inflate()'s initial strm.output */
      var end;                    /* while out < end, enough space available */
    //#ifdef INFLATE_STRICT
      var dmax;                   /* maximum distance from zlib header */
    //#endif
      var wsize;                  /* window size or zero if not using window */
      var whave;                  /* valid bytes in the window */
      var wnext;                  /* window write index */
      // Use `s_window` instead `window`, avoid conflict with instrumentation tools
      var s_window;               /* allocated sliding window, if wsize != 0 */
      var hold;                   /* local strm.hold */
      var bits;                   /* local strm.bits */
      var lcode;                  /* local strm.lencode */
      var dcode;                  /* local strm.distcode */
      var lmask;                  /* mask for first level of length codes */
      var dmask;                  /* mask for first level of distance codes */
      var here;                   /* retrieved table entry */
      var op;                     /* code bits, operation, extra bits, or */
                                  /*  window position, window bytes to copy */
      var len;                    /* match length, unused bytes */
      var dist;                   /* match distance */
      var from;                   /* where to copy match from */
      var from_source;


      var input, output; // JS specific, because we have no pointers

      /* copy state to local variables */
      state = strm.state;
      //here = state.here;
      _in = strm.next_in;
      input = strm.input;
      last = _in + (strm.avail_in - 5);
      _out = strm.next_out;
      output = strm.output;
      beg = _out - (start - strm.avail_out);
      end = _out + (strm.avail_out - 257);
    //#ifdef INFLATE_STRICT
      dmax = state.dmax;
    //#endif
      wsize = state.wsize;
      whave = state.whave;
      wnext = state.wnext;
      s_window = state.window;
      hold = state.hold;
      bits = state.bits;
      lcode = state.lencode;
      dcode = state.distcode;
      lmask = (1 << state.lenbits) - 1;
      dmask = (1 << state.distbits) - 1;


      /* decode literals and length/distances until end-of-block or not enough
         input data or output space */

      top:
      do {
        if (bits < 15) {
          hold += input[_in++] << bits;
          bits += 8;
          hold += input[_in++] << bits;
          bits += 8;
        }

        here = lcode[hold & lmask];

        dolen:
        for (;;) { // Goto emulation
          op = here >>> 24/*here.bits*/;
          hold >>>= op;
          bits -= op;
          op = (here >>> 16) & 0xff/*here.op*/;
          if (op === 0) {                          /* literal */
            //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
            //        "inflate:         literal '%c'\n" :
            //        "inflate:         literal 0x%02x\n", here.val));
            output[_out++] = here & 0xffff/*here.val*/;
          }
          else if (op & 16) {                     /* length base */
            len = here & 0xffff/*here.val*/;
            op &= 15;                           /* number of extra bits */
            if (op) {
              if (bits < op) {
                hold += input[_in++] << bits;
                bits += 8;
              }
              len += hold & ((1 << op) - 1);
              hold >>>= op;
              bits -= op;
            }
            //Tracevv((stderr, "inflate:         length %u\n", len));
            if (bits < 15) {
              hold += input[_in++] << bits;
              bits += 8;
              hold += input[_in++] << bits;
              bits += 8;
            }
            here = dcode[hold & dmask];

            dodist:
            for (;;) { // goto emulation
              op = here >>> 24/*here.bits*/;
              hold >>>= op;
              bits -= op;
              op = (here >>> 16) & 0xff/*here.op*/;

              if (op & 16) {                      /* distance base */
                dist = here & 0xffff/*here.val*/;
                op &= 15;                       /* number of extra bits */
                if (bits < op) {
                  hold += input[_in++] << bits;
                  bits += 8;
                  if (bits < op) {
                    hold += input[_in++] << bits;
                    bits += 8;
                  }
                }
                dist += hold & ((1 << op) - 1);
    //#ifdef INFLATE_STRICT
                if (dist > dmax) {
                  strm.msg = 'invalid distance too far back';
                  state.mode = BAD;
                  break top;
                }
    //#endif
                hold >>>= op;
                bits -= op;
                //Tracevv((stderr, "inflate:         distance %u\n", dist));
                op = _out - beg;                /* max distance in output */
                if (dist > op) {                /* see if copy from window */
                  op = dist - op;               /* distance back in window */
                  if (op > whave) {
                    if (state.sane) {
                      strm.msg = 'invalid distance too far back';
                      state.mode = BAD;
                      break top;
                    }

    // (!) This block is disabled in zlib defaults,
    // don't enable it for binary compatibility
    //#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
    //                if (len <= op - whave) {
    //                  do {
    //                    output[_out++] = 0;
    //                  } while (--len);
    //                  continue top;
    //                }
    //                len -= op - whave;
    //                do {
    //                  output[_out++] = 0;
    //                } while (--op > whave);
    //                if (op === 0) {
    //                  from = _out - dist;
    //                  do {
    //                    output[_out++] = output[from++];
    //                  } while (--len);
    //                  continue top;
    //                }
    //#endif
                  }
                  from = 0; // window index
                  from_source = s_window;
                  if (wnext === 0) {           /* very common case */
                    from += wsize - op;
                    if (op < len) {         /* some from window */
                      len -= op;
                      do {
                        output[_out++] = s_window[from++];
                      } while (--op);
                      from = _out - dist;  /* rest from output */
                      from_source = output;
                    }
                  }
                  else if (wnext < op) {      /* wrap around window */
                    from += wsize + wnext - op;
                    op -= wnext;
                    if (op < len) {         /* some from end of window */
                      len -= op;
                      do {
                        output[_out++] = s_window[from++];
                      } while (--op);
                      from = 0;
                      if (wnext < len) {  /* some from start of window */
                        op = wnext;
                        len -= op;
                        do {
                          output[_out++] = s_window[from++];
                        } while (--op);
                        from = _out - dist;      /* rest from output */
                        from_source = output;
                      }
                    }
                  }
                  else {                      /* contiguous in window */
                    from += wnext - op;
                    if (op < len) {         /* some from window */
                      len -= op;
                      do {
                        output[_out++] = s_window[from++];
                      } while (--op);
                      from = _out - dist;  /* rest from output */
                      from_source = output;
                    }
                  }
                  while (len > 2) {
                    output[_out++] = from_source[from++];
                    output[_out++] = from_source[from++];
                    output[_out++] = from_source[from++];
                    len -= 3;
                  }
                  if (len) {
                    output[_out++] = from_source[from++];
                    if (len > 1) {
                      output[_out++] = from_source[from++];
                    }
                  }
                }
                else {
                  from = _out - dist;          /* copy direct from output */
                  do {                        /* minimum length is three */
                    output[_out++] = output[from++];
                    output[_out++] = output[from++];
                    output[_out++] = output[from++];
                    len -= 3;
                  } while (len > 2);
                  if (len) {
                    output[_out++] = output[from++];
                    if (len > 1) {
                      output[_out++] = output[from++];
                    }
                  }
                }
              }
              else if ((op & 64) === 0) {          /* 2nd level distance code */
                here = dcode[(here & 0xffff)/*here.val*/ + (hold & ((1 << op) - 1))];
                continue dodist;
              }
              else {
                strm.msg = 'invalid distance code';
                state.mode = BAD;
                break top;
              }

              break; // need to emulate goto via "continue"
            }
          }
          else if ((op & 64) === 0) {              /* 2nd level length code */
            here = lcode[(here & 0xffff)/*here.val*/ + (hold & ((1 << op) - 1))];
            continue dolen;
          }
          else if (op & 32) {                     /* end-of-block */
            //Tracevv((stderr, "inflate:         end of block\n"));
            state.mode = TYPE;
            break top;
          }
          else {
            strm.msg = 'invalid literal/length code';
            state.mode = BAD;
            break top;
          }

          break; // need to emulate goto via "continue"
        }
      } while (_in < last && _out < end);

      /* return unused bytes (on entry, bits < 8, so in won't go too far back) */
      len = bits >> 3;
      _in -= len;
      bits -= len << 3;
      hold &= (1 << bits) - 1;

      /* update state and return */
      strm.next_in = _in;
      strm.next_out = _out;
      strm.avail_in = (_in < last ? 5 + (last - _in) : 5 - (_in - last));
      strm.avail_out = (_out < end ? 257 + (end - _out) : 257 - (_out - end));
      state.hold = hold;
      state.bits = bits;
      return;
    };

    // (C) 1995-2013 Jean-loup Gailly and Mark Adler
    // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
    //
    // This software is provided 'as-is', without any express or implied
    // warranty. In no event will the authors be held liable for any damages
    // arising from the use of this software.
    //
    // Permission is granted to anyone to use this software for any purpose,
    // including commercial applications, and to alter it and redistribute it
    // freely, subject to the following restrictions:
    //
    // 1. The origin of this software must not be misrepresented; you must not
    //   claim that you wrote the original software. If you use this software
    //   in a product, an acknowledgment in the product documentation would be
    //   appreciated but is not required.
    // 2. Altered source versions must be plainly marked as such, and must not be
    //   misrepresented as being the original software.
    // 3. This notice may not be removed or altered from any source distribution.



    var MAXBITS = 15;
    var ENOUGH_LENS = 852;
    var ENOUGH_DISTS = 592;
    //var ENOUGH = (ENOUGH_LENS+ENOUGH_DISTS);

    var CODES = 0;
    var LENS = 1;
    var DISTS = 2;

    var lbase = [ /* Length codes 257..285 base */
      3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31,
      35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0
    ];

    var lext = [ /* Length codes 257..285 extra */
      16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18,
      19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78
    ];

    var dbase = [ /* Distance codes 0..29 base */
      1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193,
      257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145,
      8193, 12289, 16385, 24577, 0, 0
    ];

    var dext = [ /* Distance codes 0..29 extra */
      16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22,
      23, 23, 24, 24, 25, 25, 26, 26, 27, 27,
      28, 28, 29, 29, 64, 64
    ];

    var inftrees = function inflate_table(type, lens, lens_index, codes, table, table_index, work, opts)
    {
      var bits = opts.bits;
          //here = opts.here; /* table entry for duplication */

      var len = 0;               /* a code's length in bits */
      var sym = 0;               /* index of code symbols */
      var min = 0, max = 0;          /* minimum and maximum code lengths */
      var root = 0;              /* number of index bits for root table */
      var curr = 0;              /* number of index bits for current table */
      var drop = 0;              /* code bits to drop for sub-table */
      var left = 0;                   /* number of prefix codes available */
      var used = 0;              /* code entries in table used */
      var huff = 0;              /* Huffman code */
      var incr;              /* for incrementing code, index */
      var fill;              /* index for replicating entries */
      var low;               /* low bits for current root entry */
      var mask;              /* mask for low root bits */
      var next;             /* next available space in table */
      var base = null;     /* base value table to use */
      var base_index = 0;
    //  var shoextra;    /* extra bits table to use */
      var end;                    /* use base and extra for symbol > end */
      var count = new common.Buf16(MAXBITS + 1); //[MAXBITS+1];    /* number of codes of each length */
      var offs = new common.Buf16(MAXBITS + 1); //[MAXBITS+1];     /* offsets in table for each length */
      var extra = null;
      var extra_index = 0;

      var here_bits, here_op, here_val;

      /*
       Process a set of code lengths to create a canonical Huffman code.  The
       code lengths are lens[0..codes-1].  Each length corresponds to the
       symbols 0..codes-1.  The Huffman code is generated by first sorting the
       symbols by length from short to long, and retaining the symbol order
       for codes with equal lengths.  Then the code starts with all zero bits
       for the first code of the shortest length, and the codes are integer
       increments for the same length, and zeros are appended as the length
       increases.  For the deflate format, these bits are stored backwards
       from their more natural integer increment ordering, and so when the
       decoding tables are built in the large loop below, the integer codes
       are incremented backwards.

       This routine assumes, but does not check, that all of the entries in
       lens[] are in the range 0..MAXBITS.  The caller must assure this.
       1..MAXBITS is interpreted as that code length.  zero means that that
       symbol does not occur in this code.

       The codes are sorted by computing a count of codes for each length,
       creating from that a table of starting indices for each length in the
       sorted table, and then entering the symbols in order in the sorted
       table.  The sorted table is work[], with that space being provided by
       the caller.

       The length counts are used for other purposes as well, i.e. finding
       the minimum and maximum length codes, determining if there are any
       codes at all, checking for a valid set of lengths, and looking ahead
       at length counts to determine sub-table sizes when building the
       decoding tables.
       */

      /* accumulate lengths for codes (assumes lens[] all in 0..MAXBITS) */
      for (len = 0; len <= MAXBITS; len++) {
        count[len] = 0;
      }
      for (sym = 0; sym < codes; sym++) {
        count[lens[lens_index + sym]]++;
      }

      /* bound code lengths, force root to be within code lengths */
      root = bits;
      for (max = MAXBITS; max >= 1; max--) {
        if (count[max] !== 0) { break; }
      }
      if (root > max) {
        root = max;
      }
      if (max === 0) {                     /* no symbols to code at all */
        //table.op[opts.table_index] = 64;  //here.op = (var char)64;    /* invalid code marker */
        //table.bits[opts.table_index] = 1;   //here.bits = (var char)1;
        //table.val[opts.table_index++] = 0;   //here.val = (var short)0;
        table[table_index++] = (1 << 24) | (64 << 16) | 0;


        //table.op[opts.table_index] = 64;
        //table.bits[opts.table_index] = 1;
        //table.val[opts.table_index++] = 0;
        table[table_index++] = (1 << 24) | (64 << 16) | 0;

        opts.bits = 1;
        return 0;     /* no symbols, but wait for decoding to report error */
      }
      for (min = 1; min < max; min++) {
        if (count[min] !== 0) { break; }
      }
      if (root < min) {
        root = min;
      }

      /* check for an over-subscribed or incomplete set of lengths */
      left = 1;
      for (len = 1; len <= MAXBITS; len++) {
        left <<= 1;
        left -= count[len];
        if (left < 0) {
          return -1;
        }        /* over-subscribed */
      }
      if (left > 0 && (type === CODES || max !== 1)) {
        return -1;                      /* incomplete set */
      }

      /* generate offsets into symbol table for each length for sorting */
      offs[1] = 0;
      for (len = 1; len < MAXBITS; len++) {
        offs[len + 1] = offs[len] + count[len];
      }

      /* sort symbols by length, by symbol order within each length */
      for (sym = 0; sym < codes; sym++) {
        if (lens[lens_index + sym] !== 0) {
          work[offs[lens[lens_index + sym]]++] = sym;
        }
      }

      /*
       Create and fill in decoding tables.  In this loop, the table being
       filled is at next and has curr index bits.  The code being used is huff
       with length len.  That code is converted to an index by dropping drop
       bits off of the bottom.  For codes where len is less than drop + curr,
       those top drop + curr - len bits are incremented through all values to
       fill the table with replicated entries.

       root is the number of index bits for the root table.  When len exceeds
       root, sub-tables are created pointed to by the root entry with an index
       of the low root bits of huff.  This is saved in low to check for when a
       new sub-table should be started.  drop is zero when the root table is
       being filled, and drop is root when sub-tables are being filled.

       When a new sub-table is needed, it is necessary to look ahead in the
       code lengths to determine what size sub-table is needed.  The length
       counts are used for this, and so count[] is decremented as codes are
       entered in the tables.

       used keeps track of how many table entries have been allocated from the
       provided *table space.  It is checked for LENS and DIST tables against
       the constants ENOUGH_LENS and ENOUGH_DISTS to guard against changes in
       the initial root table size constants.  See the comments in inftrees.h
       for more information.

       sym increments through all symbols, and the loop terminates when
       all codes of length max, i.e. all codes, have been processed.  This
       routine permits incomplete codes, so another loop after this one fills
       in the rest of the decoding tables with invalid code markers.
       */

      /* set up for code type */
      // poor man optimization - use if-else instead of switch,
      // to avoid deopts in old v8
      if (type === CODES) {
        base = extra = work;    /* dummy value--not used */
        end = 19;

      } else if (type === LENS) {
        base = lbase;
        base_index -= 257;
        extra = lext;
        extra_index -= 257;
        end = 256;

      } else {                    /* DISTS */
        base = dbase;
        extra = dext;
        end = -1;
      }

      /* initialize opts for loop */
      huff = 0;                   /* starting code */
      sym = 0;                    /* starting code symbol */
      len = min;                  /* starting code length */
      next = table_index;              /* current table to fill in */
      curr = root;                /* current table index bits */
      drop = 0;                   /* current bits to drop from code for index */
      low = -1;                   /* trigger new sub-table when len > root */
      used = 1 << root;          /* use root table entries */
      mask = used - 1;            /* mask for comparing low */

      /* check available table space */
      if ((type === LENS && used > ENOUGH_LENS) ||
        (type === DISTS && used > ENOUGH_DISTS)) {
        return 1;
      }

      /* process all codes and make table entries */
      for (;;) {
        /* create table entry */
        here_bits = len - drop;
        if (work[sym] < end) {
          here_op = 0;
          here_val = work[sym];
        }
        else if (work[sym] > end) {
          here_op = extra[extra_index + work[sym]];
          here_val = base[base_index + work[sym]];
        }
        else {
          here_op = 32 + 64;         /* end of block */
          here_val = 0;
        }

        /* replicate for those indices with low len bits equal to huff */
        incr = 1 << (len - drop);
        fill = 1 << curr;
        min = fill;                 /* save offset to next table */
        do {
          fill -= incr;
          table[next + (huff >> drop) + fill] = (here_bits << 24) | (here_op << 16) | here_val |0;
        } while (fill !== 0);

        /* backwards increment the len-bit code huff */
        incr = 1 << (len - 1);
        while (huff & incr) {
          incr >>= 1;
        }
        if (incr !== 0) {
          huff &= incr - 1;
          huff += incr;
        } else {
          huff = 0;
        }

        /* go to next symbol, update count, len */
        sym++;
        if (--count[len] === 0) {
          if (len === max) { break; }
          len = lens[lens_index + work[sym]];
        }

        /* create new sub-table if needed */
        if (len > root && (huff & mask) !== low) {
          /* if first time, transition to sub-tables */
          if (drop === 0) {
            drop = root;
          }

          /* increment past last table */
          next += min;            /* here min is 1 << curr */

          /* determine length of next table */
          curr = len - drop;
          left = 1 << curr;
          while (curr + drop < max) {
            left -= count[curr + drop];
            if (left <= 0) { break; }
            curr++;
            left <<= 1;
          }

          /* check for enough space */
          used += 1 << curr;
          if ((type === LENS && used > ENOUGH_LENS) ||
            (type === DISTS && used > ENOUGH_DISTS)) {
            return 1;
          }

          /* point entry in root table to sub-table */
          low = huff & mask;
          /*table.op[low] = curr;
          table.bits[low] = root;
          table.val[low] = next - opts.table_index;*/
          table[low] = (root << 24) | (curr << 16) | (next - table_index) |0;
        }
      }

      /* fill in remaining table entry if code is incomplete (guaranteed to have
       at most one remaining entry, since if the code is incomplete, the
       maximum code length that was allowed to get this far is one bit) */
      if (huff !== 0) {
        //table.op[next + huff] = 64;            /* invalid code marker */
        //table.bits[next + huff] = len - drop;
        //table.val[next + huff] = 0;
        table[next + huff] = ((len - drop) << 24) | (64 << 16) |0;
      }

      /* set return parameters */
      //opts.table_index += used;
      opts.bits = root;
      return 0;
    };

    // (C) 1995-2013 Jean-loup Gailly and Mark Adler
    // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
    //
    // This software is provided 'as-is', without any express or implied
    // warranty. In no event will the authors be held liable for any damages
    // arising from the use of this software.
    //
    // Permission is granted to anyone to use this software for any purpose,
    // including commercial applications, and to alter it and redistribute it
    // freely, subject to the following restrictions:
    //
    // 1. The origin of this software must not be misrepresented; you must not
    //   claim that you wrote the original software. If you use this software
    //   in a product, an acknowledgment in the product documentation would be
    //   appreciated but is not required.
    // 2. Altered source versions must be plainly marked as such, and must not be
    //   misrepresented as being the original software.
    // 3. This notice may not be removed or altered from any source distribution.







    var CODES$1 = 0;
    var LENS$1 = 1;
    var DISTS$1 = 2;

    /* Public constants ==========================================================*/
    /* ===========================================================================*/


    /* Allowed flush values; see deflate() and inflate() below for details */
    //var Z_NO_FLUSH      = 0;
    //var Z_PARTIAL_FLUSH = 1;
    //var Z_SYNC_FLUSH    = 2;
    //var Z_FULL_FLUSH    = 3;
    var Z_FINISH        = 4;
    var Z_BLOCK         = 5;
    var Z_TREES         = 6;


    /* Return codes for the compression/decompression functions. Negative values
     * are errors, positive values are used for special but normal events.
     */
    var Z_OK            = 0;
    var Z_STREAM_END    = 1;
    var Z_NEED_DICT     = 2;
    //var Z_ERRNO         = -1;
    var Z_STREAM_ERROR  = -2;
    var Z_DATA_ERROR    = -3;
    var Z_MEM_ERROR     = -4;
    var Z_BUF_ERROR     = -5;
    //var Z_VERSION_ERROR = -6;

    /* The deflate compression method */
    var Z_DEFLATED  = 8;


    /* STATES ====================================================================*/
    /* ===========================================================================*/


    var    HEAD = 1;       /* i: waiting for magic header */
    var    FLAGS = 2;      /* i: waiting for method and flags (gzip) */
    var    TIME = 3;       /* i: waiting for modification time (gzip) */
    var    OS = 4;         /* i: waiting for extra flags and operating system (gzip) */
    var    EXLEN = 5;      /* i: waiting for extra length (gzip) */
    var    EXTRA = 6;      /* i: waiting for extra bytes (gzip) */
    var    NAME = 7;       /* i: waiting for end of file name (gzip) */
    var    COMMENT = 8;    /* i: waiting for end of comment (gzip) */
    var    HCRC = 9;       /* i: waiting for header crc (gzip) */
    var    DICTID = 10;    /* i: waiting for dictionary check value */
    var    DICT = 11;      /* waiting for inflateSetDictionary() call */
    var        TYPE$1 = 12;      /* i: waiting for type bits, including last-flag bit */
    var        TYPEDO = 13;    /* i: same, but skip check to exit inflate on new block */
    var        STORED = 14;    /* i: waiting for stored size (length and complement) */
    var        COPY_ = 15;     /* i/o: same as COPY below, but only first time in */
    var        COPY = 16;      /* i/o: waiting for input or output to copy stored block */
    var        TABLE = 17;     /* i: waiting for dynamic block table lengths */
    var        LENLENS = 18;   /* i: waiting for code length code lengths */
    var        CODELENS = 19;  /* i: waiting for length/lit and distance code lengths */
    var            LEN_ = 20;      /* i: same as LEN below, but only first time in */
    var            LEN = 21;       /* i: waiting for length/lit/eob code */
    var            LENEXT = 22;    /* i: waiting for length extra bits */
    var            DIST = 23;      /* i: waiting for distance code */
    var            DISTEXT = 24;   /* i: waiting for distance extra bits */
    var            MATCH = 25;     /* o: waiting for output space to copy string */
    var            LIT = 26;       /* o: waiting for output space to write literal */
    var    CHECK = 27;     /* i: waiting for 32-bit check value */
    var    LENGTH = 28;    /* i: waiting for 32-bit length (gzip) */
    var    DONE = 29;      /* finished check, done -- remain here until reset */
    var    BAD$1 = 30;       /* got a data error -- remain here until reset */
    var    MEM = 31;       /* got an inflate() memory error -- remain here until reset */
    var    SYNC = 32;      /* looking for synchronization bytes to restart inflate() */

    /* ===========================================================================*/



    var ENOUGH_LENS$1 = 852;
    var ENOUGH_DISTS$1 = 592;
    //var ENOUGH =  (ENOUGH_LENS+ENOUGH_DISTS);

    var MAX_WBITS = 15;
    /* 32K LZ77 window */
    var DEF_WBITS = MAX_WBITS;


    function zswap32(q) {
      return  (((q >>> 24) & 0xff) +
              ((q >>> 8) & 0xff00) +
              ((q & 0xff00) << 8) +
              ((q & 0xff) << 24));
    }


    function InflateState() {
      this.mode = 0;             /* current inflate mode */
      this.last = false;          /* true if processing last block */
      this.wrap = 0;              /* bit 0 true for zlib, bit 1 true for gzip */
      this.havedict = false;      /* true if dictionary provided */
      this.flags = 0;             /* gzip header method and flags (0 if zlib) */
      this.dmax = 0;              /* zlib header max distance (INFLATE_STRICT) */
      this.check = 0;             /* protected copy of check value */
      this.total = 0;             /* protected copy of output count */
      // TODO: may be {}
      this.head = null;           /* where to save gzip header information */

      /* sliding window */
      this.wbits = 0;             /* log base 2 of requested window size */
      this.wsize = 0;             /* window size or zero if not using window */
      this.whave = 0;             /* valid bytes in the window */
      this.wnext = 0;             /* window write index */
      this.window = null;         /* allocated sliding window, if needed */

      /* bit accumulator */
      this.hold = 0;              /* input bit accumulator */
      this.bits = 0;              /* number of bits in "in" */

      /* for string and stored block copying */
      this.length = 0;            /* literal or length of data to copy */
      this.offset = 0;            /* distance back to copy string from */

      /* for table and code decoding */
      this.extra = 0;             /* extra bits needed */

      /* fixed and dynamic code tables */
      this.lencode = null;          /* starting table for length/literal codes */
      this.distcode = null;         /* starting table for distance codes */
      this.lenbits = 0;           /* index bits for lencode */
      this.distbits = 0;          /* index bits for distcode */

      /* dynamic table building */
      this.ncode = 0;             /* number of code length code lengths */
      this.nlen = 0;              /* number of length code lengths */
      this.ndist = 0;             /* number of distance code lengths */
      this.have = 0;              /* number of code lengths in lens[] */
      this.next = null;              /* next available space in codes[] */

      this.lens = new common.Buf16(320); /* temporary storage for code lengths */
      this.work = new common.Buf16(288); /* work area for code table building */

      /*
       because we don't have pointers in js, we use lencode and distcode directly
       as buffers so we don't need codes
      */
      //this.codes = new utils.Buf32(ENOUGH);       /* space for code tables */
      this.lendyn = null;              /* dynamic table for length/literal codes (JS specific) */
      this.distdyn = null;             /* dynamic table for distance codes (JS specific) */
      this.sane = 0;                   /* if false, allow invalid distance too far */
      this.back = 0;                   /* bits back of last unprocessed length/lit */
      this.was = 0;                    /* initial length of match */
    }

    function inflateResetKeep(strm) {
      var state;

      if (!strm || !strm.state) { return Z_STREAM_ERROR; }
      state = strm.state;
      strm.total_in = strm.total_out = state.total = 0;
      strm.msg = ''; /*Z_NULL*/
      if (state.wrap) {       /* to support ill-conceived Java test suite */
        strm.adler = state.wrap & 1;
      }
      state.mode = HEAD;
      state.last = 0;
      state.havedict = 0;
      state.dmax = 32768;
      state.head = null/*Z_NULL*/;
      state.hold = 0;
      state.bits = 0;
      //state.lencode = state.distcode = state.next = state.codes;
      state.lencode = state.lendyn = new common.Buf32(ENOUGH_LENS$1);
      state.distcode = state.distdyn = new common.Buf32(ENOUGH_DISTS$1);

      state.sane = 1;
      state.back = -1;
      //Tracev((stderr, "inflate: reset\n"));
      return Z_OK;
    }

    function inflateReset(strm) {
      var state;

      if (!strm || !strm.state) { return Z_STREAM_ERROR; }
      state = strm.state;
      state.wsize = 0;
      state.whave = 0;
      state.wnext = 0;
      return inflateResetKeep(strm);

    }

    function inflateReset2(strm, windowBits) {
      var wrap;
      var state;

      /* get the state */
      if (!strm || !strm.state) { return Z_STREAM_ERROR; }
      state = strm.state;

      /* extract wrap request from windowBits parameter */
      if (windowBits < 0) {
        wrap = 0;
        windowBits = -windowBits;
      }
      else {
        wrap = (windowBits >> 4) + 1;
        if (windowBits < 48) {
          windowBits &= 15;
        }
      }

      /* set number of window bits, free window if different */
      if (windowBits && (windowBits < 8 || windowBits > 15)) {
        return Z_STREAM_ERROR;
      }
      if (state.window !== null && state.wbits !== windowBits) {
        state.window = null;
      }

      /* update state and reset the rest of it */
      state.wrap = wrap;
      state.wbits = windowBits;
      return inflateReset(strm);
    }

    function inflateInit2(strm, windowBits) {
      var ret;
      var state;

      if (!strm) { return Z_STREAM_ERROR; }
      //strm.msg = Z_NULL;                 /* in case we return an error */

      state = new InflateState();

      //if (state === Z_NULL) return Z_MEM_ERROR;
      //Tracev((stderr, "inflate: allocated\n"));
      strm.state = state;
      state.window = null/*Z_NULL*/;
      ret = inflateReset2(strm, windowBits);
      if (ret !== Z_OK) {
        strm.state = null/*Z_NULL*/;
      }
      return ret;
    }

    function inflateInit(strm) {
      return inflateInit2(strm, DEF_WBITS);
    }


    /*
     Return state with length and distance decoding tables and index sizes set to
     fixed code decoding.  Normally this returns fixed tables from inffixed.h.
     If BUILDFIXED is defined, then instead this routine builds the tables the
     first time it's called, and returns those tables the first time and
     thereafter.  This reduces the size of the code by about 2K bytes, in
     exchange for a little execution time.  However, BUILDFIXED should not be
     used for threaded applications, since the rewriting of the tables and virgin
     may not be thread-safe.
     */
    var virgin = true;

    var lenfix, distfix; // We have no pointers in JS, so keep tables separate

    function fixedtables(state) {
      /* build fixed huffman tables if first call (may not be thread safe) */
      if (virgin) {
        var sym;

        lenfix = new common.Buf32(512);
        distfix = new common.Buf32(32);

        /* literal/length table */
        sym = 0;
        while (sym < 144) { state.lens[sym++] = 8; }
        while (sym < 256) { state.lens[sym++] = 9; }
        while (sym < 280) { state.lens[sym++] = 7; }
        while (sym < 288) { state.lens[sym++] = 8; }

        inftrees(LENS$1,  state.lens, 0, 288, lenfix,   0, state.work, { bits: 9 });

        /* distance table */
        sym = 0;
        while (sym < 32) { state.lens[sym++] = 5; }

        inftrees(DISTS$1, state.lens, 0, 32,   distfix, 0, state.work, { bits: 5 });

        /* do this just once */
        virgin = false;
      }

      state.lencode = lenfix;
      state.lenbits = 9;
      state.distcode = distfix;
      state.distbits = 5;
    }


    /*
     Update the window with the last wsize (normally 32K) bytes written before
     returning.  If window does not exist yet, create it.  This is only called
     when a window is already in use, or when output has been written during this
     inflate call, but the end of the deflate stream has not been reached yet.
     It is also called to create a window for dictionary data when a dictionary
     is loaded.

     Providing output buffers larger than 32K to inflate() should provide a speed
     advantage, since only the last 32K of output is copied to the sliding window
     upon return from inflate(), and since all distances after the first 32K of
     output will fall in the output data, making match copies simpler and faster.
     The advantage may be dependent on the size of the processor's data caches.
     */
    function updatewindow(strm, src, end, copy) {
      var dist;
      var state = strm.state;

      /* if it hasn't been done already, allocate space for the window */
      if (state.window === null) {
        state.wsize = 1 << state.wbits;
        state.wnext = 0;
        state.whave = 0;

        state.window = new common.Buf8(state.wsize);
      }

      /* copy state->wsize or less output bytes into the circular window */
      if (copy >= state.wsize) {
        common.arraySet(state.window, src, end - state.wsize, state.wsize, 0);
        state.wnext = 0;
        state.whave = state.wsize;
      }
      else {
        dist = state.wsize - state.wnext;
        if (dist > copy) {
          dist = copy;
        }
        //zmemcpy(state->window + state->wnext, end - copy, dist);
        common.arraySet(state.window, src, end - copy, dist, state.wnext);
        copy -= dist;
        if (copy) {
          //zmemcpy(state->window, end - copy, copy);
          common.arraySet(state.window, src, end - copy, copy, 0);
          state.wnext = copy;
          state.whave = state.wsize;
        }
        else {
          state.wnext += dist;
          if (state.wnext === state.wsize) { state.wnext = 0; }
          if (state.whave < state.wsize) { state.whave += dist; }
        }
      }
      return 0;
    }

    function inflate(strm, flush) {
      var state;
      var input, output;          // input/output buffers
      var next;                   /* next input INDEX */
      var put;                    /* next output INDEX */
      var have, left;             /* available input and output */
      var hold;                   /* bit buffer */
      var bits;                   /* bits in bit buffer */
      var _in, _out;              /* save starting available input and output */
      var copy;                   /* number of stored or match bytes to copy */
      var from;                   /* where to copy match bytes from */
      var from_source;
      var here = 0;               /* current decoding table entry */
      var here_bits, here_op, here_val; // paked "here" denormalized (JS specific)
      //var last;                   /* parent table entry */
      var last_bits, last_op, last_val; // paked "last" denormalized (JS specific)
      var len;                    /* length to copy for repeats, bits to drop */
      var ret;                    /* return code */
      var hbuf = new common.Buf8(4);    /* buffer for gzip header crc calculation */
      var opts;

      var n; // temporary var for NEED_BITS

      var order = /* permutation of code lengths */
        [ 16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15 ];


      if (!strm || !strm.state || !strm.output ||
          (!strm.input && strm.avail_in !== 0)) {
        return Z_STREAM_ERROR;
      }

      state = strm.state;
      if (state.mode === TYPE$1) { state.mode = TYPEDO; }    /* skip check */


      //--- LOAD() ---
      put = strm.next_out;
      output = strm.output;
      left = strm.avail_out;
      next = strm.next_in;
      input = strm.input;
      have = strm.avail_in;
      hold = state.hold;
      bits = state.bits;
      //---

      _in = have;
      _out = left;
      ret = Z_OK;

      inf_leave: // goto emulation
      for (;;) {
        switch (state.mode) {
          case HEAD:
            if (state.wrap === 0) {
              state.mode = TYPEDO;
              break;
            }
            //=== NEEDBITS(16);
            while (bits < 16) {
              if (have === 0) { break inf_leave; }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            //===//
            if ((state.wrap & 2) && hold === 0x8b1f) {  /* gzip header */
              state.check = 0/*crc32(0L, Z_NULL, 0)*/;
              //=== CRC2(state.check, hold);
              hbuf[0] = hold & 0xff;
              hbuf[1] = (hold >>> 8) & 0xff;
              state.check = crc32_1(state.check, hbuf, 2, 0);
              //===//

              //=== INITBITS();
              hold = 0;
              bits = 0;
              //===//
              state.mode = FLAGS;
              break;
            }
            state.flags = 0;           /* expect zlib header */
            if (state.head) {
              state.head.done = false;
            }
            if (!(state.wrap & 1) ||   /* check if zlib header allowed */
              (((hold & 0xff)/*BITS(8)*/ << 8) + (hold >> 8)) % 31) {
              strm.msg = 'incorrect header check';
              state.mode = BAD$1;
              break;
            }
            if ((hold & 0x0f)/*BITS(4)*/ !== Z_DEFLATED) {
              strm.msg = 'unknown compression method';
              state.mode = BAD$1;
              break;
            }
            //--- DROPBITS(4) ---//
            hold >>>= 4;
            bits -= 4;
            //---//
            len = (hold & 0x0f)/*BITS(4)*/ + 8;
            if (state.wbits === 0) {
              state.wbits = len;
            }
            else if (len > state.wbits) {
              strm.msg = 'invalid window size';
              state.mode = BAD$1;
              break;
            }
            state.dmax = 1 << len;
            //Tracev((stderr, "inflate:   zlib header ok\n"));
            strm.adler = state.check = 1/*adler32(0L, Z_NULL, 0)*/;
            state.mode = hold & 0x200 ? DICTID : TYPE$1;
            //=== INITBITS();
            hold = 0;
            bits = 0;
            //===//
            break;
          case FLAGS:
            //=== NEEDBITS(16); */
            while (bits < 16) {
              if (have === 0) { break inf_leave; }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            //===//
            state.flags = hold;
            if ((state.flags & 0xff) !== Z_DEFLATED) {
              strm.msg = 'unknown compression method';
              state.mode = BAD$1;
              break;
            }
            if (state.flags & 0xe000) {
              strm.msg = 'unknown header flags set';
              state.mode = BAD$1;
              break;
            }
            if (state.head) {
              state.head.text = ((hold >> 8) & 1);
            }
            if (state.flags & 0x0200) {
              //=== CRC2(state.check, hold);
              hbuf[0] = hold & 0xff;
              hbuf[1] = (hold >>> 8) & 0xff;
              state.check = crc32_1(state.check, hbuf, 2, 0);
              //===//
            }
            //=== INITBITS();
            hold = 0;
            bits = 0;
            //===//
            state.mode = TIME;
            /* falls through */
          case TIME:
            //=== NEEDBITS(32); */
            while (bits < 32) {
              if (have === 0) { break inf_leave; }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            //===//
            if (state.head) {
              state.head.time = hold;
            }
            if (state.flags & 0x0200) {
              //=== CRC4(state.check, hold)
              hbuf[0] = hold & 0xff;
              hbuf[1] = (hold >>> 8) & 0xff;
              hbuf[2] = (hold >>> 16) & 0xff;
              hbuf[3] = (hold >>> 24) & 0xff;
              state.check = crc32_1(state.check, hbuf, 4, 0);
              //===
            }
            //=== INITBITS();
            hold = 0;
            bits = 0;
            //===//
            state.mode = OS;
            /* falls through */
          case OS:
            //=== NEEDBITS(16); */
            while (bits < 16) {
              if (have === 0) { break inf_leave; }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            //===//
            if (state.head) {
              state.head.xflags = (hold & 0xff);
              state.head.os = (hold >> 8);
            }
            if (state.flags & 0x0200) {
              //=== CRC2(state.check, hold);
              hbuf[0] = hold & 0xff;
              hbuf[1] = (hold >>> 8) & 0xff;
              state.check = crc32_1(state.check, hbuf, 2, 0);
              //===//
            }
            //=== INITBITS();
            hold = 0;
            bits = 0;
            //===//
            state.mode = EXLEN;
            /* falls through */
          case EXLEN:
            if (state.flags & 0x0400) {
              //=== NEEDBITS(16); */
              while (bits < 16) {
                if (have === 0) { break inf_leave; }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              state.length = hold;
              if (state.head) {
                state.head.extra_len = hold;
              }
              if (state.flags & 0x0200) {
                //=== CRC2(state.check, hold);
                hbuf[0] = hold & 0xff;
                hbuf[1] = (hold >>> 8) & 0xff;
                state.check = crc32_1(state.check, hbuf, 2, 0);
                //===//
              }
              //=== INITBITS();
              hold = 0;
              bits = 0;
              //===//
            }
            else if (state.head) {
              state.head.extra = null/*Z_NULL*/;
            }
            state.mode = EXTRA;
            /* falls through */
          case EXTRA:
            if (state.flags & 0x0400) {
              copy = state.length;
              if (copy > have) { copy = have; }
              if (copy) {
                if (state.head) {
                  len = state.head.extra_len - state.length;
                  if (!state.head.extra) {
                    // Use untyped array for more convenient processing later
                    state.head.extra = new Array(state.head.extra_len);
                  }
                  common.arraySet(
                    state.head.extra,
                    input,
                    next,
                    // extra field is limited to 65536 bytes
                    // - no need for additional size check
                    copy,
                    /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
                    len
                  );
                  //zmemcpy(state.head.extra + len, next,
                  //        len + copy > state.head.extra_max ?
                  //        state.head.extra_max - len : copy);
                }
                if (state.flags & 0x0200) {
                  state.check = crc32_1(state.check, input, copy, next);
                }
                have -= copy;
                next += copy;
                state.length -= copy;
              }
              if (state.length) { break inf_leave; }
            }
            state.length = 0;
            state.mode = NAME;
            /* falls through */
          case NAME:
            if (state.flags & 0x0800) {
              if (have === 0) { break inf_leave; }
              copy = 0;
              do {
                // TODO: 2 or 1 bytes?
                len = input[next + copy++];
                /* use constant limit because in js we should not preallocate memory */
                if (state.head && len &&
                    (state.length < 65536 /*state.head.name_max*/)) {
                  state.head.name += String.fromCharCode(len);
                }
              } while (len && copy < have);

              if (state.flags & 0x0200) {
                state.check = crc32_1(state.check, input, copy, next);
              }
              have -= copy;
              next += copy;
              if (len) { break inf_leave; }
            }
            else if (state.head) {
              state.head.name = null;
            }
            state.length = 0;
            state.mode = COMMENT;
            /* falls through */
          case COMMENT:
            if (state.flags & 0x1000) {
              if (have === 0) { break inf_leave; }
              copy = 0;
              do {
                len = input[next + copy++];
                /* use constant limit because in js we should not preallocate memory */
                if (state.head && len &&
                    (state.length < 65536 /*state.head.comm_max*/)) {
                  state.head.comment += String.fromCharCode(len);
                }
              } while (len && copy < have);
              if (state.flags & 0x0200) {
                state.check = crc32_1(state.check, input, copy, next);
              }
              have -= copy;
              next += copy;
              if (len) { break inf_leave; }
            }
            else if (state.head) {
              state.head.comment = null;
            }
            state.mode = HCRC;
            /* falls through */
          case HCRC:
            if (state.flags & 0x0200) {
              //=== NEEDBITS(16); */
              while (bits < 16) {
                if (have === 0) { break inf_leave; }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              if (hold !== (state.check & 0xffff)) {
                strm.msg = 'header crc mismatch';
                state.mode = BAD$1;
                break;
              }
              //=== INITBITS();
              hold = 0;
              bits = 0;
              //===//
            }
            if (state.head) {
              state.head.hcrc = ((state.flags >> 9) & 1);
              state.head.done = true;
            }
            strm.adler = state.check = 0;
            state.mode = TYPE$1;
            break;
          case DICTID:
            //=== NEEDBITS(32); */
            while (bits < 32) {
              if (have === 0) { break inf_leave; }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            //===//
            strm.adler = state.check = zswap32(hold);
            //=== INITBITS();
            hold = 0;
            bits = 0;
            //===//
            state.mode = DICT;
            /* falls through */
          case DICT:
            if (state.havedict === 0) {
              //--- RESTORE() ---
              strm.next_out = put;
              strm.avail_out = left;
              strm.next_in = next;
              strm.avail_in = have;
              state.hold = hold;
              state.bits = bits;
              //---
              return Z_NEED_DICT;
            }
            strm.adler = state.check = 1/*adler32(0L, Z_NULL, 0)*/;
            state.mode = TYPE$1;
            /* falls through */
          case TYPE$1:
            if (flush === Z_BLOCK || flush === Z_TREES) { break inf_leave; }
            /* falls through */
          case TYPEDO:
            if (state.last) {
              //--- BYTEBITS() ---//
              hold >>>= bits & 7;
              bits -= bits & 7;
              //---//
              state.mode = CHECK;
              break;
            }
            //=== NEEDBITS(3); */
            while (bits < 3) {
              if (have === 0) { break inf_leave; }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            //===//
            state.last = (hold & 0x01)/*BITS(1)*/;
            //--- DROPBITS(1) ---//
            hold >>>= 1;
            bits -= 1;
            //---//

            switch ((hold & 0x03)/*BITS(2)*/) {
              case 0:                             /* stored block */
                //Tracev((stderr, "inflate:     stored block%s\n",
                //        state.last ? " (last)" : ""));
                state.mode = STORED;
                break;
              case 1:                             /* fixed block */
                fixedtables(state);
                //Tracev((stderr, "inflate:     fixed codes block%s\n",
                //        state.last ? " (last)" : ""));
                state.mode = LEN_;             /* decode codes */
                if (flush === Z_TREES) {
                  //--- DROPBITS(2) ---//
                  hold >>>= 2;
                  bits -= 2;
                  //---//
                  break inf_leave;
                }
                break;
              case 2:                             /* dynamic block */
                //Tracev((stderr, "inflate:     dynamic codes block%s\n",
                //        state.last ? " (last)" : ""));
                state.mode = TABLE;
                break;
              case 3:
                strm.msg = 'invalid block type';
                state.mode = BAD$1;
            }
            //--- DROPBITS(2) ---//
            hold >>>= 2;
            bits -= 2;
            //---//
            break;
          case STORED:
            //--- BYTEBITS() ---// /* go to byte boundary */
            hold >>>= bits & 7;
            bits -= bits & 7;
            //---//
            //=== NEEDBITS(32); */
            while (bits < 32) {
              if (have === 0) { break inf_leave; }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            //===//
            if ((hold & 0xffff) !== ((hold >>> 16) ^ 0xffff)) {
              strm.msg = 'invalid stored block lengths';
              state.mode = BAD$1;
              break;
            }
            state.length = hold & 0xffff;
            //Tracev((stderr, "inflate:       stored length %u\n",
            //        state.length));
            //=== INITBITS();
            hold = 0;
            bits = 0;
            //===//
            state.mode = COPY_;
            if (flush === Z_TREES) { break inf_leave; }
            /* falls through */
          case COPY_:
            state.mode = COPY;
            /* falls through */
          case COPY:
            copy = state.length;
            if (copy) {
              if (copy > have) { copy = have; }
              if (copy > left) { copy = left; }
              if (copy === 0) { break inf_leave; }
              //--- zmemcpy(put, next, copy); ---
              common.arraySet(output, input, next, copy, put);
              //---//
              have -= copy;
              next += copy;
              left -= copy;
              put += copy;
              state.length -= copy;
              break;
            }
            //Tracev((stderr, "inflate:       stored end\n"));
            state.mode = TYPE$1;
            break;
          case TABLE:
            //=== NEEDBITS(14); */
            while (bits < 14) {
              if (have === 0) { break inf_leave; }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            //===//
            state.nlen = (hold & 0x1f)/*BITS(5)*/ + 257;
            //--- DROPBITS(5) ---//
            hold >>>= 5;
            bits -= 5;
            //---//
            state.ndist = (hold & 0x1f)/*BITS(5)*/ + 1;
            //--- DROPBITS(5) ---//
            hold >>>= 5;
            bits -= 5;
            //---//
            state.ncode = (hold & 0x0f)/*BITS(4)*/ + 4;
            //--- DROPBITS(4) ---//
            hold >>>= 4;
            bits -= 4;
            //---//
    //#ifndef PKZIP_BUG_WORKAROUND
            if (state.nlen > 286 || state.ndist > 30) {
              strm.msg = 'too many length or distance symbols';
              state.mode = BAD$1;
              break;
            }
    //#endif
            //Tracev((stderr, "inflate:       table sizes ok\n"));
            state.have = 0;
            state.mode = LENLENS;
            /* falls through */
          case LENLENS:
            while (state.have < state.ncode) {
              //=== NEEDBITS(3);
              while (bits < 3) {
                if (have === 0) { break inf_leave; }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              state.lens[order[state.have++]] = (hold & 0x07);//BITS(3);
              //--- DROPBITS(3) ---//
              hold >>>= 3;
              bits -= 3;
              //---//
            }
            while (state.have < 19) {
              state.lens[order[state.have++]] = 0;
            }
            // We have separate tables & no pointers. 2 commented lines below not needed.
            //state.next = state.codes;
            //state.lencode = state.next;
            // Switch to use dynamic table
            state.lencode = state.lendyn;
            state.lenbits = 7;

            opts = { bits: state.lenbits };
            ret = inftrees(CODES$1, state.lens, 0, 19, state.lencode, 0, state.work, opts);
            state.lenbits = opts.bits;

            if (ret) {
              strm.msg = 'invalid code lengths set';
              state.mode = BAD$1;
              break;
            }
            //Tracev((stderr, "inflate:       code lengths ok\n"));
            state.have = 0;
            state.mode = CODELENS;
            /* falls through */
          case CODELENS:
            while (state.have < state.nlen + state.ndist) {
              for (;;) {
                here = state.lencode[hold & ((1 << state.lenbits) - 1)];/*BITS(state.lenbits)*/
                here_bits = here >>> 24;
                here_op = (here >>> 16) & 0xff;
                here_val = here & 0xffff;

                if ((here_bits) <= bits) { break; }
                //--- PULLBYTE() ---//
                if (have === 0) { break inf_leave; }
                have--;
                hold += input[next++] << bits;
                bits += 8;
                //---//
              }
              if (here_val < 16) {
                //--- DROPBITS(here.bits) ---//
                hold >>>= here_bits;
                bits -= here_bits;
                //---//
                state.lens[state.have++] = here_val;
              }
              else {
                if (here_val === 16) {
                  //=== NEEDBITS(here.bits + 2);
                  n = here_bits + 2;
                  while (bits < n) {
                    if (have === 0) { break inf_leave; }
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                  }
                  //===//
                  //--- DROPBITS(here.bits) ---//
                  hold >>>= here_bits;
                  bits -= here_bits;
                  //---//
                  if (state.have === 0) {
                    strm.msg = 'invalid bit length repeat';
                    state.mode = BAD$1;
                    break;
                  }
                  len = state.lens[state.have - 1];
                  copy = 3 + (hold & 0x03);//BITS(2);
                  //--- DROPBITS(2) ---//
                  hold >>>= 2;
                  bits -= 2;
                  //---//
                }
                else if (here_val === 17) {
                  //=== NEEDBITS(here.bits + 3);
                  n = here_bits + 3;
                  while (bits < n) {
                    if (have === 0) { break inf_leave; }
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                  }
                  //===//
                  //--- DROPBITS(here.bits) ---//
                  hold >>>= here_bits;
                  bits -= here_bits;
                  //---//
                  len = 0;
                  copy = 3 + (hold & 0x07);//BITS(3);
                  //--- DROPBITS(3) ---//
                  hold >>>= 3;
                  bits -= 3;
                  //---//
                }
                else {
                  //=== NEEDBITS(here.bits + 7);
                  n = here_bits + 7;
                  while (bits < n) {
                    if (have === 0) { break inf_leave; }
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                  }
                  //===//
                  //--- DROPBITS(here.bits) ---//
                  hold >>>= here_bits;
                  bits -= here_bits;
                  //---//
                  len = 0;
                  copy = 11 + (hold & 0x7f);//BITS(7);
                  //--- DROPBITS(7) ---//
                  hold >>>= 7;
                  bits -= 7;
                  //---//
                }
                if (state.have + copy > state.nlen + state.ndist) {
                  strm.msg = 'invalid bit length repeat';
                  state.mode = BAD$1;
                  break;
                }
                while (copy--) {
                  state.lens[state.have++] = len;
                }
              }
            }

            /* handle error breaks in while */
            if (state.mode === BAD$1) { break; }

            /* check for end-of-block code (better have one) */
            if (state.lens[256] === 0) {
              strm.msg = 'invalid code -- missing end-of-block';
              state.mode = BAD$1;
              break;
            }

            /* build code tables -- note: do not change the lenbits or distbits
               values here (9 and 6) without reading the comments in inftrees.h
               concerning the ENOUGH constants, which depend on those values */
            state.lenbits = 9;

            opts = { bits: state.lenbits };
            ret = inftrees(LENS$1, state.lens, 0, state.nlen, state.lencode, 0, state.work, opts);
            // We have separate tables & no pointers. 2 commented lines below not needed.
            // state.next_index = opts.table_index;
            state.lenbits = opts.bits;
            // state.lencode = state.next;

            if (ret) {
              strm.msg = 'invalid literal/lengths set';
              state.mode = BAD$1;
              break;
            }

            state.distbits = 6;
            //state.distcode.copy(state.codes);
            // Switch to use dynamic table
            state.distcode = state.distdyn;
            opts = { bits: state.distbits };
            ret = inftrees(DISTS$1, state.lens, state.nlen, state.ndist, state.distcode, 0, state.work, opts);
            // We have separate tables & no pointers. 2 commented lines below not needed.
            // state.next_index = opts.table_index;
            state.distbits = opts.bits;
            // state.distcode = state.next;

            if (ret) {
              strm.msg = 'invalid distances set';
              state.mode = BAD$1;
              break;
            }
            //Tracev((stderr, 'inflate:       codes ok\n'));
            state.mode = LEN_;
            if (flush === Z_TREES) { break inf_leave; }
            /* falls through */
          case LEN_:
            state.mode = LEN;
            /* falls through */
          case LEN:
            if (have >= 6 && left >= 258) {
              //--- RESTORE() ---
              strm.next_out = put;
              strm.avail_out = left;
              strm.next_in = next;
              strm.avail_in = have;
              state.hold = hold;
              state.bits = bits;
              //---
              inffast(strm, _out);
              //--- LOAD() ---
              put = strm.next_out;
              output = strm.output;
              left = strm.avail_out;
              next = strm.next_in;
              input = strm.input;
              have = strm.avail_in;
              hold = state.hold;
              bits = state.bits;
              //---

              if (state.mode === TYPE$1) {
                state.back = -1;
              }
              break;
            }
            state.back = 0;
            for (;;) {
              here = state.lencode[hold & ((1 << state.lenbits) - 1)];  /*BITS(state.lenbits)*/
              here_bits = here >>> 24;
              here_op = (here >>> 16) & 0xff;
              here_val = here & 0xffff;

              if (here_bits <= bits) { break; }
              //--- PULLBYTE() ---//
              if (have === 0) { break inf_leave; }
              have--;
              hold += input[next++] << bits;
              bits += 8;
              //---//
            }
            if (here_op && (here_op & 0xf0) === 0) {
              last_bits = here_bits;
              last_op = here_op;
              last_val = here_val;
              for (;;) {
                here = state.lencode[last_val +
                        ((hold & ((1 << (last_bits + last_op)) - 1))/*BITS(last.bits + last.op)*/ >> last_bits)];
                here_bits = here >>> 24;
                here_op = (here >>> 16) & 0xff;
                here_val = here & 0xffff;

                if ((last_bits + here_bits) <= bits) { break; }
                //--- PULLBYTE() ---//
                if (have === 0) { break inf_leave; }
                have--;
                hold += input[next++] << bits;
                bits += 8;
                //---//
              }
              //--- DROPBITS(last.bits) ---//
              hold >>>= last_bits;
              bits -= last_bits;
              //---//
              state.back += last_bits;
            }
            //--- DROPBITS(here.bits) ---//
            hold >>>= here_bits;
            bits -= here_bits;
            //---//
            state.back += here_bits;
            state.length = here_val;
            if (here_op === 0) {
              //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
              //        "inflate:         literal '%c'\n" :
              //        "inflate:         literal 0x%02x\n", here.val));
              state.mode = LIT;
              break;
            }
            if (here_op & 32) {
              //Tracevv((stderr, "inflate:         end of block\n"));
              state.back = -1;
              state.mode = TYPE$1;
              break;
            }
            if (here_op & 64) {
              strm.msg = 'invalid literal/length code';
              state.mode = BAD$1;
              break;
            }
            state.extra = here_op & 15;
            state.mode = LENEXT;
            /* falls through */
          case LENEXT:
            if (state.extra) {
              //=== NEEDBITS(state.extra);
              n = state.extra;
              while (bits < n) {
                if (have === 0) { break inf_leave; }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              state.length += hold & ((1 << state.extra) - 1)/*BITS(state.extra)*/;
              //--- DROPBITS(state.extra) ---//
              hold >>>= state.extra;
              bits -= state.extra;
              //---//
              state.back += state.extra;
            }
            //Tracevv((stderr, "inflate:         length %u\n", state.length));
            state.was = state.length;
            state.mode = DIST;
            /* falls through */
          case DIST:
            for (;;) {
              here = state.distcode[hold & ((1 << state.distbits) - 1)];/*BITS(state.distbits)*/
              here_bits = here >>> 24;
              here_op = (here >>> 16) & 0xff;
              here_val = here & 0xffff;

              if ((here_bits) <= bits) { break; }
              //--- PULLBYTE() ---//
              if (have === 0) { break inf_leave; }
              have--;
              hold += input[next++] << bits;
              bits += 8;
              //---//
            }
            if ((here_op & 0xf0) === 0) {
              last_bits = here_bits;
              last_op = here_op;
              last_val = here_val;
              for (;;) {
                here = state.distcode[last_val +
                        ((hold & ((1 << (last_bits + last_op)) - 1))/*BITS(last.bits + last.op)*/ >> last_bits)];
                here_bits = here >>> 24;
                here_op = (here >>> 16) & 0xff;
                here_val = here & 0xffff;

                if ((last_bits + here_bits) <= bits) { break; }
                //--- PULLBYTE() ---//
                if (have === 0) { break inf_leave; }
                have--;
                hold += input[next++] << bits;
                bits += 8;
                //---//
              }
              //--- DROPBITS(last.bits) ---//
              hold >>>= last_bits;
              bits -= last_bits;
              //---//
              state.back += last_bits;
            }
            //--- DROPBITS(here.bits) ---//
            hold >>>= here_bits;
            bits -= here_bits;
            //---//
            state.back += here_bits;
            if (here_op & 64) {
              strm.msg = 'invalid distance code';
              state.mode = BAD$1;
              break;
            }
            state.offset = here_val;
            state.extra = (here_op) & 15;
            state.mode = DISTEXT;
            /* falls through */
          case DISTEXT:
            if (state.extra) {
              //=== NEEDBITS(state.extra);
              n = state.extra;
              while (bits < n) {
                if (have === 0) { break inf_leave; }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              state.offset += hold & ((1 << state.extra) - 1)/*BITS(state.extra)*/;
              //--- DROPBITS(state.extra) ---//
              hold >>>= state.extra;
              bits -= state.extra;
              //---//
              state.back += state.extra;
            }
    //#ifdef INFLATE_STRICT
            if (state.offset > state.dmax) {
              strm.msg = 'invalid distance too far back';
              state.mode = BAD$1;
              break;
            }
    //#endif
            //Tracevv((stderr, "inflate:         distance %u\n", state.offset));
            state.mode = MATCH;
            /* falls through */
          case MATCH:
            if (left === 0) { break inf_leave; }
            copy = _out - left;
            if (state.offset > copy) {         /* copy from window */
              copy = state.offset - copy;
              if (copy > state.whave) {
                if (state.sane) {
                  strm.msg = 'invalid distance too far back';
                  state.mode = BAD$1;
                  break;
                }
    // (!) This block is disabled in zlib defaults,
    // don't enable it for binary compatibility
    //#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
    //          Trace((stderr, "inflate.c too far\n"));
    //          copy -= state.whave;
    //          if (copy > state.length) { copy = state.length; }
    //          if (copy > left) { copy = left; }
    //          left -= copy;
    //          state.length -= copy;
    //          do {
    //            output[put++] = 0;
    //          } while (--copy);
    //          if (state.length === 0) { state.mode = LEN; }
    //          break;
    //#endif
              }
              if (copy > state.wnext) {
                copy -= state.wnext;
                from = state.wsize - copy;
              }
              else {
                from = state.wnext - copy;
              }
              if (copy > state.length) { copy = state.length; }
              from_source = state.window;
            }
            else {                              /* copy from output */
              from_source = output;
              from = put - state.offset;
              copy = state.length;
            }
            if (copy > left) { copy = left; }
            left -= copy;
            state.length -= copy;
            do {
              output[put++] = from_source[from++];
            } while (--copy);
            if (state.length === 0) { state.mode = LEN; }
            break;
          case LIT:
            if (left === 0) { break inf_leave; }
            output[put++] = state.length;
            left--;
            state.mode = LEN;
            break;
          case CHECK:
            if (state.wrap) {
              //=== NEEDBITS(32);
              while (bits < 32) {
                if (have === 0) { break inf_leave; }
                have--;
                // Use '|' instead of '+' to make sure that result is signed
                hold |= input[next++] << bits;
                bits += 8;
              }
              //===//
              _out -= left;
              strm.total_out += _out;
              state.total += _out;
              if (_out) {
                strm.adler = state.check =
                    /*UPDATE(state.check, put - _out, _out);*/
                    (state.flags ? crc32_1(state.check, output, _out, put - _out) : adler32_1(state.check, output, _out, put - _out));

              }
              _out = left;
              // NB: crc32 stored as signed 32-bit int, zswap32 returns signed too
              if ((state.flags ? hold : zswap32(hold)) !== state.check) {
                strm.msg = 'incorrect data check';
                state.mode = BAD$1;
                break;
              }
              //=== INITBITS();
              hold = 0;
              bits = 0;
              //===//
              //Tracev((stderr, "inflate:   check matches trailer\n"));
            }
            state.mode = LENGTH;
            /* falls through */
          case LENGTH:
            if (state.wrap && state.flags) {
              //=== NEEDBITS(32);
              while (bits < 32) {
                if (have === 0) { break inf_leave; }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              if (hold !== (state.total & 0xffffffff)) {
                strm.msg = 'incorrect length check';
                state.mode = BAD$1;
                break;
              }
              //=== INITBITS();
              hold = 0;
              bits = 0;
              //===//
              //Tracev((stderr, "inflate:   length matches trailer\n"));
            }
            state.mode = DONE;
            /* falls through */
          case DONE:
            ret = Z_STREAM_END;
            break inf_leave;
          case BAD$1:
            ret = Z_DATA_ERROR;
            break inf_leave;
          case MEM:
            return Z_MEM_ERROR;
          case SYNC:
            /* falls through */
          default:
            return Z_STREAM_ERROR;
        }
      }

      // inf_leave <- here is real place for "goto inf_leave", emulated via "break inf_leave"

      /*
         Return from inflate(), updating the total counts and the check value.
         If there was no progress during the inflate() call, return a buffer
         error.  Call updatewindow() to create and/or update the window state.
         Note: a memory error from inflate() is non-recoverable.
       */

      //--- RESTORE() ---
      strm.next_out = put;
      strm.avail_out = left;
      strm.next_in = next;
      strm.avail_in = have;
      state.hold = hold;
      state.bits = bits;
      //---

      if (state.wsize || (_out !== strm.avail_out && state.mode < BAD$1 &&
                          (state.mode < CHECK || flush !== Z_FINISH))) {
        if (updatewindow(strm, strm.output, strm.next_out, _out - strm.avail_out)) ;
      }
      _in -= strm.avail_in;
      _out -= strm.avail_out;
      strm.total_in += _in;
      strm.total_out += _out;
      state.total += _out;
      if (state.wrap && _out) {
        strm.adler = state.check = /*UPDATE(state.check, strm.next_out - _out, _out);*/
          (state.flags ? crc32_1(state.check, output, _out, strm.next_out - _out) : adler32_1(state.check, output, _out, strm.next_out - _out));
      }
      strm.data_type = state.bits + (state.last ? 64 : 0) +
                        (state.mode === TYPE$1 ? 128 : 0) +
                        (state.mode === LEN_ || state.mode === COPY_ ? 256 : 0);
      if (((_in === 0 && _out === 0) || flush === Z_FINISH) && ret === Z_OK) {
        ret = Z_BUF_ERROR;
      }
      return ret;
    }

    function inflateEnd(strm) {

      if (!strm || !strm.state /*|| strm->zfree == (free_func)0*/) {
        return Z_STREAM_ERROR;
      }

      var state = strm.state;
      if (state.window) {
        state.window = null;
      }
      strm.state = null;
      return Z_OK;
    }

    function inflateGetHeader(strm, head) {
      var state;

      /* check state */
      if (!strm || !strm.state) { return Z_STREAM_ERROR; }
      state = strm.state;
      if ((state.wrap & 2) === 0) { return Z_STREAM_ERROR; }

      /* save header structure */
      state.head = head;
      head.done = false;
      return Z_OK;
    }

    function inflateSetDictionary(strm, dictionary) {
      var dictLength = dictionary.length;

      var state;
      var dictid;
      var ret;

      /* check state */
      if (!strm /* == Z_NULL */ || !strm.state /* == Z_NULL */) { return Z_STREAM_ERROR; }
      state = strm.state;

      if (state.wrap !== 0 && state.mode !== DICT) {
        return Z_STREAM_ERROR;
      }

      /* check for correct dictionary identifier */
      if (state.mode === DICT) {
        dictid = 1; /* adler32(0, null, 0)*/
        /* dictid = adler32(dictid, dictionary, dictLength); */
        dictid = adler32_1(dictid, dictionary, dictLength, 0);
        if (dictid !== state.check) {
          return Z_DATA_ERROR;
        }
      }
      /* copy dictionary to window using updatewindow(), which will amend the
       existing dictionary if appropriate */
      ret = updatewindow(strm, dictionary, dictLength, dictLength);
      if (ret) {
        state.mode = MEM;
        return Z_MEM_ERROR;
      }
      state.havedict = 1;
      // Tracev((stderr, "inflate:   dictionary set\n"));
      return Z_OK;
    }

    var inflateReset_1 = inflateReset;
    var inflateReset2_1 = inflateReset2;
    var inflateResetKeep_1 = inflateResetKeep;
    var inflateInit_1 = inflateInit;
    var inflateInit2_1 = inflateInit2;
    var inflate_2 = inflate;
    var inflateEnd_1 = inflateEnd;
    var inflateGetHeader_1 = inflateGetHeader;
    var inflateSetDictionary_1 = inflateSetDictionary;
    var inflateInfo = 'pako inflate (from Nodeca project)';

    /* Not implemented
    exports.inflateCopy = inflateCopy;
    exports.inflateGetDictionary = inflateGetDictionary;
    exports.inflateMark = inflateMark;
    exports.inflatePrime = inflatePrime;
    exports.inflateSync = inflateSync;
    exports.inflateSyncPoint = inflateSyncPoint;
    exports.inflateUndermine = inflateUndermine;
    */

    var inflate_1 = {
    	inflateReset: inflateReset_1,
    	inflateReset2: inflateReset2_1,
    	inflateResetKeep: inflateResetKeep_1,
    	inflateInit: inflateInit_1,
    	inflateInit2: inflateInit2_1,
    	inflate: inflate_2,
    	inflateEnd: inflateEnd_1,
    	inflateGetHeader: inflateGetHeader_1,
    	inflateSetDictionary: inflateSetDictionary_1,
    	inflateInfo: inflateInfo
    };

    // Quick check if we can use fast array to bin string conversion
    //
    // - apply(Array) can fail on Android 2.2
    // - apply(Uint8Array) can fail on iOS 5.1 Safari
    //
    var STR_APPLY_OK = true;
    var STR_APPLY_UIA_OK = true;

    try { String.fromCharCode.apply(null, [ 0 ]); } catch (__) { STR_APPLY_OK = false; }
    try { String.fromCharCode.apply(null, new Uint8Array(1)); } catch (__) { STR_APPLY_UIA_OK = false; }


    // Table with utf8 lengths (calculated by first byte of sequence)
    // Note, that 5 & 6-byte values and some 4-byte values can not be represented in JS,
    // because max possible codepoint is 0x10ffff
    var _utf8len = new common.Buf8(256);
    for (var q = 0; q < 256; q++) {
      _utf8len[q] = (q >= 252 ? 6 : q >= 248 ? 5 : q >= 240 ? 4 : q >= 224 ? 3 : q >= 192 ? 2 : 1);
    }
    _utf8len[254] = _utf8len[254] = 1; // Invalid sequence start


    // convert string to array (typed, when possible)
    var string2buf = function (str) {
      var buf, c, c2, m_pos, i, str_len = str.length, buf_len = 0;

      // count binary size
      for (m_pos = 0; m_pos < str_len; m_pos++) {
        c = str.charCodeAt(m_pos);
        if ((c & 0xfc00) === 0xd800 && (m_pos + 1 < str_len)) {
          c2 = str.charCodeAt(m_pos + 1);
          if ((c2 & 0xfc00) === 0xdc00) {
            c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
            m_pos++;
          }
        }
        buf_len += c < 0x80 ? 1 : c < 0x800 ? 2 : c < 0x10000 ? 3 : 4;
      }

      // allocate buffer
      buf = new common.Buf8(buf_len);

      // convert
      for (i = 0, m_pos = 0; i < buf_len; m_pos++) {
        c = str.charCodeAt(m_pos);
        if ((c & 0xfc00) === 0xd800 && (m_pos + 1 < str_len)) {
          c2 = str.charCodeAt(m_pos + 1);
          if ((c2 & 0xfc00) === 0xdc00) {
            c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
            m_pos++;
          }
        }
        if (c < 0x80) {
          /* one byte */
          buf[i++] = c;
        } else if (c < 0x800) {
          /* two bytes */
          buf[i++] = 0xC0 | (c >>> 6);
          buf[i++] = 0x80 | (c & 0x3f);
        } else if (c < 0x10000) {
          /* three bytes */
          buf[i++] = 0xE0 | (c >>> 12);
          buf[i++] = 0x80 | (c >>> 6 & 0x3f);
          buf[i++] = 0x80 | (c & 0x3f);
        } else {
          /* four bytes */
          buf[i++] = 0xf0 | (c >>> 18);
          buf[i++] = 0x80 | (c >>> 12 & 0x3f);
          buf[i++] = 0x80 | (c >>> 6 & 0x3f);
          buf[i++] = 0x80 | (c & 0x3f);
        }
      }

      return buf;
    };

    // Helper (used in 2 places)
    function buf2binstring(buf, len) {
      // On Chrome, the arguments in a function call that are allowed is `65534`.
      // If the length of the buffer is smaller than that, we can use this optimization,
      // otherwise we will take a slower path.
      if (len < 65534) {
        if ((buf.subarray && STR_APPLY_UIA_OK) || (!buf.subarray && STR_APPLY_OK)) {
          return String.fromCharCode.apply(null, common.shrinkBuf(buf, len));
        }
      }

      var result = '';
      for (var i = 0; i < len; i++) {
        result += String.fromCharCode(buf[i]);
      }
      return result;
    }


    // Convert byte array to binary string
    var buf2binstring_1 = function (buf) {
      return buf2binstring(buf, buf.length);
    };


    // Convert binary string (typed, when possible)
    var binstring2buf = function (str) {
      var buf = new common.Buf8(str.length);
      for (var i = 0, len = buf.length; i < len; i++) {
        buf[i] = str.charCodeAt(i);
      }
      return buf;
    };


    // convert array to string
    var buf2string = function (buf, max) {
      var i, out, c, c_len;
      var len = max || buf.length;

      // Reserve max possible length (2 words per char)
      // NB: by unknown reasons, Array is significantly faster for
      //     String.fromCharCode.apply than Uint16Array.
      var utf16buf = new Array(len * 2);

      for (out = 0, i = 0; i < len;) {
        c = buf[i++];
        // quick process ascii
        if (c < 0x80) { utf16buf[out++] = c; continue; }

        c_len = _utf8len[c];
        // skip 5 & 6 byte codes
        if (c_len > 4) { utf16buf[out++] = 0xfffd; i += c_len - 1; continue; }

        // apply mask on first byte
        c &= c_len === 2 ? 0x1f : c_len === 3 ? 0x0f : 0x07;
        // join the rest
        while (c_len > 1 && i < len) {
          c = (c << 6) | (buf[i++] & 0x3f);
          c_len--;
        }

        // terminated by end of string?
        if (c_len > 1) { utf16buf[out++] = 0xfffd; continue; }

        if (c < 0x10000) {
          utf16buf[out++] = c;
        } else {
          c -= 0x10000;
          utf16buf[out++] = 0xd800 | ((c >> 10) & 0x3ff);
          utf16buf[out++] = 0xdc00 | (c & 0x3ff);
        }
      }

      return buf2binstring(utf16buf, out);
    };


    // Calculate max possible position in utf8 buffer,
    // that will not break sequence. If that's not possible
    // - (very small limits) return max size as is.
    //
    // buf[] - utf8 bytes array
    // max   - length limit (mandatory);
    var utf8border = function (buf, max) {
      var pos;

      max = max || buf.length;
      if (max > buf.length) { max = buf.length; }

      // go back from last position, until start of sequence found
      pos = max - 1;
      while (pos >= 0 && (buf[pos] & 0xC0) === 0x80) { pos--; }

      // Very small and broken sequence,
      // return max, because we should return something anyway.
      if (pos < 0) { return max; }

      // If we came to start of buffer - that means buffer is too small,
      // return max too.
      if (pos === 0) { return max; }

      return (pos + _utf8len[buf[pos]] > max) ? pos : max;
    };

    var strings = {
    	string2buf: string2buf,
    	buf2binstring: buf2binstring_1,
    	binstring2buf: binstring2buf,
    	buf2string: buf2string,
    	utf8border: utf8border
    };

    // (C) 1995-2013 Jean-loup Gailly and Mark Adler
    // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
    //
    // This software is provided 'as-is', without any express or implied
    // warranty. In no event will the authors be held liable for any damages
    // arising from the use of this software.
    //
    // Permission is granted to anyone to use this software for any purpose,
    // including commercial applications, and to alter it and redistribute it
    // freely, subject to the following restrictions:
    //
    // 1. The origin of this software must not be misrepresented; you must not
    //   claim that you wrote the original software. If you use this software
    //   in a product, an acknowledgment in the product documentation would be
    //   appreciated but is not required.
    // 2. Altered source versions must be plainly marked as such, and must not be
    //   misrepresented as being the original software.
    // 3. This notice may not be removed or altered from any source distribution.

    var constants = {

      /* Allowed flush values; see deflate() and inflate() below for details */
      Z_NO_FLUSH:         0,
      Z_PARTIAL_FLUSH:    1,
      Z_SYNC_FLUSH:       2,
      Z_FULL_FLUSH:       3,
      Z_FINISH:           4,
      Z_BLOCK:            5,
      Z_TREES:            6,

      /* Return codes for the compression/decompression functions. Negative values
      * are errors, positive values are used for special but normal events.
      */
      Z_OK:               0,
      Z_STREAM_END:       1,
      Z_NEED_DICT:        2,
      Z_ERRNO:           -1,
      Z_STREAM_ERROR:    -2,
      Z_DATA_ERROR:      -3,
      //Z_MEM_ERROR:     -4,
      Z_BUF_ERROR:       -5,
      //Z_VERSION_ERROR: -6,

      /* compression levels */
      Z_NO_COMPRESSION:         0,
      Z_BEST_SPEED:             1,
      Z_BEST_COMPRESSION:       9,
      Z_DEFAULT_COMPRESSION:   -1,


      Z_FILTERED:               1,
      Z_HUFFMAN_ONLY:           2,
      Z_RLE:                    3,
      Z_FIXED:                  4,
      Z_DEFAULT_STRATEGY:       0,

      /* Possible values of the data_type field (though see inflate()) */
      Z_BINARY:                 0,
      Z_TEXT:                   1,
      //Z_ASCII:                1, // = Z_TEXT (deprecated)
      Z_UNKNOWN:                2,

      /* The deflate compression method */
      Z_DEFLATED:               8
      //Z_NULL:                 null // Use -1 or null inline, depending on var type
    };

    // (C) 1995-2013 Jean-loup Gailly and Mark Adler
    // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
    //
    // This software is provided 'as-is', without any express or implied
    // warranty. In no event will the authors be held liable for any damages
    // arising from the use of this software.
    //
    // Permission is granted to anyone to use this software for any purpose,
    // including commercial applications, and to alter it and redistribute it
    // freely, subject to the following restrictions:
    //
    // 1. The origin of this software must not be misrepresented; you must not
    //   claim that you wrote the original software. If you use this software
    //   in a product, an acknowledgment in the product documentation would be
    //   appreciated but is not required.
    // 2. Altered source versions must be plainly marked as such, and must not be
    //   misrepresented as being the original software.
    // 3. This notice may not be removed or altered from any source distribution.

    var messages = {
      2:      'need dictionary',     /* Z_NEED_DICT       2  */
      1:      'stream end',          /* Z_STREAM_END      1  */
      0:      '',                    /* Z_OK              0  */
      '-1':   'file error',          /* Z_ERRNO         (-1) */
      '-2':   'stream error',        /* Z_STREAM_ERROR  (-2) */
      '-3':   'data error',          /* Z_DATA_ERROR    (-3) */
      '-4':   'insufficient memory', /* Z_MEM_ERROR     (-4) */
      '-5':   'buffer error',        /* Z_BUF_ERROR     (-5) */
      '-6':   'incompatible version' /* Z_VERSION_ERROR (-6) */
    };

    // (C) 1995-2013 Jean-loup Gailly and Mark Adler
    // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
    //
    // This software is provided 'as-is', without any express or implied
    // warranty. In no event will the authors be held liable for any damages
    // arising from the use of this software.
    //
    // Permission is granted to anyone to use this software for any purpose,
    // including commercial applications, and to alter it and redistribute it
    // freely, subject to the following restrictions:
    //
    // 1. The origin of this software must not be misrepresented; you must not
    //   claim that you wrote the original software. If you use this software
    //   in a product, an acknowledgment in the product documentation would be
    //   appreciated but is not required.
    // 2. Altered source versions must be plainly marked as such, and must not be
    //   misrepresented as being the original software.
    // 3. This notice may not be removed or altered from any source distribution.

    function ZStream() {
      /* next input byte */
      this.input = null; // JS specific, because we have no pointers
      this.next_in = 0;
      /* number of bytes available at input */
      this.avail_in = 0;
      /* total number of input bytes read so far */
      this.total_in = 0;
      /* next output byte should be put there */
      this.output = null; // JS specific, because we have no pointers
      this.next_out = 0;
      /* remaining free space at output */
      this.avail_out = 0;
      /* total number of bytes output so far */
      this.total_out = 0;
      /* last error message, NULL if no error */
      this.msg = ''/*Z_NULL*/;
      /* not visible by applications */
      this.state = null;
      /* best guess about the data type: binary or text */
      this.data_type = 2/*Z_UNKNOWN*/;
      /* adler32 value of the uncompressed data */
      this.adler = 0;
    }

    var zstream = ZStream;

    // (C) 1995-2013 Jean-loup Gailly and Mark Adler
    // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
    //
    // This software is provided 'as-is', without any express or implied
    // warranty. In no event will the authors be held liable for any damages
    // arising from the use of this software.
    //
    // Permission is granted to anyone to use this software for any purpose,
    // including commercial applications, and to alter it and redistribute it
    // freely, subject to the following restrictions:
    //
    // 1. The origin of this software must not be misrepresented; you must not
    //   claim that you wrote the original software. If you use this software
    //   in a product, an acknowledgment in the product documentation would be
    //   appreciated but is not required.
    // 2. Altered source versions must be plainly marked as such, and must not be
    //   misrepresented as being the original software.
    // 3. This notice may not be removed or altered from any source distribution.

    function GZheader() {
      /* true if compressed data believed to be text */
      this.text       = 0;
      /* modification time */
      this.time       = 0;
      /* extra flags (not used when writing a gzip file) */
      this.xflags     = 0;
      /* operating system */
      this.os         = 0;
      /* pointer to extra field or Z_NULL if none */
      this.extra      = null;
      /* extra field length (valid if extra != Z_NULL) */
      this.extra_len  = 0; // Actually, we don't need it in JS,
                           // but leave for few code modifications

      //
      // Setup limits is not necessary because in js we should not preallocate memory
      // for inflate use constant limit in 65536 bytes
      //

      /* space at extra (only when reading header) */
      // this.extra_max  = 0;
      /* pointer to zero-terminated file name or Z_NULL */
      this.name       = '';
      /* space at name (only when reading header) */
      // this.name_max   = 0;
      /* pointer to zero-terminated comment or Z_NULL */
      this.comment    = '';
      /* space at comment (only when reading header) */
      // this.comm_max   = 0;
      /* true if there was or will be a header crc */
      this.hcrc       = 0;
      /* true when done reading gzip header (not used when writing a gzip file) */
      this.done       = false;
    }

    var gzheader = GZheader;

    var toString = Object.prototype.toString;

    /**
     * class Inflate
     *
     * Generic JS-style wrapper for zlib calls. If you don't need
     * streaming behaviour - use more simple functions: [[inflate]]
     * and [[inflateRaw]].
     **/

    /* internal
     * inflate.chunks -> Array
     *
     * Chunks of output data, if [[Inflate#onData]] not overridden.
     **/

    /**
     * Inflate.result -> Uint8Array|Array|String
     *
     * Uncompressed result, generated by default [[Inflate#onData]]
     * and [[Inflate#onEnd]] handlers. Filled after you push last chunk
     * (call [[Inflate#push]] with `Z_FINISH` / `true` param) or if you
     * push a chunk with explicit flush (call [[Inflate#push]] with
     * `Z_SYNC_FLUSH` param).
     **/

    /**
     * Inflate.err -> Number
     *
     * Error code after inflate finished. 0 (Z_OK) on success.
     * Should be checked if broken data possible.
     **/

    /**
     * Inflate.msg -> String
     *
     * Error message, if [[Inflate.err]] != 0
     **/


    /**
     * new Inflate(options)
     * - options (Object): zlib inflate options.
     *
     * Creates new inflator instance with specified params. Throws exception
     * on bad params. Supported options:
     *
     * - `windowBits`
     * - `dictionary`
     *
     * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
     * for more information on these.
     *
     * Additional options, for internal needs:
     *
     * - `chunkSize` - size of generated data chunks (16K by default)
     * - `raw` (Boolean) - do raw inflate
     * - `to` (String) - if equal to 'string', then result will be converted
     *   from utf8 to utf16 (javascript) string. When string output requested,
     *   chunk length can differ from `chunkSize`, depending on content.
     *
     * By default, when no options set, autodetect deflate/gzip data format via
     * wrapper header.
     *
     * ##### Example:
     *
     * ```javascript
     * var pako = require('pako')
     *   , chunk1 = Uint8Array([1,2,3,4,5,6,7,8,9])
     *   , chunk2 = Uint8Array([10,11,12,13,14,15,16,17,18,19]);
     *
     * var inflate = new pako.Inflate({ level: 3});
     *
     * inflate.push(chunk1, false);
     * inflate.push(chunk2, true);  // true -> last chunk
     *
     * if (inflate.err) { throw new Error(inflate.err); }
     *
     * console.log(inflate.result);
     * ```
     **/
    function Inflate(options) {
      if (!(this instanceof Inflate)) return new Inflate(options);

      this.options = common.assign({
        chunkSize: 16384,
        windowBits: 0,
        to: ''
      }, options || {});

      var opt = this.options;

      // Force window size for `raw` data, if not set directly,
      // because we have no header for autodetect.
      if (opt.raw && (opt.windowBits >= 0) && (opt.windowBits < 16)) {
        opt.windowBits = -opt.windowBits;
        if (opt.windowBits === 0) { opt.windowBits = -15; }
      }

      // If `windowBits` not defined (and mode not raw) - set autodetect flag for gzip/deflate
      if ((opt.windowBits >= 0) && (opt.windowBits < 16) &&
          !(options && options.windowBits)) {
        opt.windowBits += 32;
      }

      // Gzip header has no info about windows size, we can do autodetect only
      // for deflate. So, if window size not set, force it to max when gzip possible
      if ((opt.windowBits > 15) && (opt.windowBits < 48)) {
        // bit 3 (16) -> gzipped data
        // bit 4 (32) -> autodetect gzip/deflate
        if ((opt.windowBits & 15) === 0) {
          opt.windowBits |= 15;
        }
      }

      this.err    = 0;      // error code, if happens (0 = Z_OK)
      this.msg    = '';     // error message
      this.ended  = false;  // used to avoid multiple onEnd() calls
      this.chunks = [];     // chunks of compressed data

      this.strm   = new zstream();
      this.strm.avail_out = 0;

      var status  = inflate_1.inflateInit2(
        this.strm,
        opt.windowBits
      );

      if (status !== constants.Z_OK) {
        throw new Error(messages[status]);
      }

      this.header = new gzheader();

      inflate_1.inflateGetHeader(this.strm, this.header);

      // Setup dictionary
      if (opt.dictionary) {
        // Convert data if needed
        if (typeof opt.dictionary === 'string') {
          opt.dictionary = strings.string2buf(opt.dictionary);
        } else if (toString.call(opt.dictionary) === '[object ArrayBuffer]') {
          opt.dictionary = new Uint8Array(opt.dictionary);
        }
        if (opt.raw) { //In raw mode we need to set the dictionary early
          status = inflate_1.inflateSetDictionary(this.strm, opt.dictionary);
          if (status !== constants.Z_OK) {
            throw new Error(messages[status]);
          }
        }
      }
    }

    /**
     * Inflate#push(data[, mode]) -> Boolean
     * - data (Uint8Array|Array|ArrayBuffer|String): input data
     * - mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE modes.
     *   See constants. Skipped or `false` means Z_NO_FLUSH, `true` means Z_FINISH.
     *
     * Sends input data to inflate pipe, generating [[Inflate#onData]] calls with
     * new output chunks. Returns `true` on success. The last data block must have
     * mode Z_FINISH (or `true`). That will flush internal pending buffers and call
     * [[Inflate#onEnd]]. For interim explicit flushes (without ending the stream) you
     * can use mode Z_SYNC_FLUSH, keeping the decompression context.
     *
     * On fail call [[Inflate#onEnd]] with error code and return false.
     *
     * We strongly recommend to use `Uint8Array` on input for best speed (output
     * format is detected automatically). Also, don't skip last param and always
     * use the same type in your code (boolean or number). That will improve JS speed.
     *
     * For regular `Array`-s make sure all elements are [0..255].
     *
     * ##### Example
     *
     * ```javascript
     * push(chunk, false); // push one of data chunks
     * ...
     * push(chunk, true);  // push last chunk
     * ```
     **/
    Inflate.prototype.push = function (data, mode) {
      var strm = this.strm;
      var chunkSize = this.options.chunkSize;
      var dictionary = this.options.dictionary;
      var status, _mode;
      var next_out_utf8, tail, utf8str;

      // Flag to properly process Z_BUF_ERROR on testing inflate call
      // when we check that all output data was flushed.
      var allowBufError = false;

      if (this.ended) { return false; }
      _mode = (mode === ~~mode) ? mode : ((mode === true) ? constants.Z_FINISH : constants.Z_NO_FLUSH);

      // Convert data if needed
      if (typeof data === 'string') {
        // Only binary strings can be decompressed on practice
        strm.input = strings.binstring2buf(data);
      } else if (toString.call(data) === '[object ArrayBuffer]') {
        strm.input = new Uint8Array(data);
      } else {
        strm.input = data;
      }

      strm.next_in = 0;
      strm.avail_in = strm.input.length;

      do {
        if (strm.avail_out === 0) {
          strm.output = new common.Buf8(chunkSize);
          strm.next_out = 0;
          strm.avail_out = chunkSize;
        }

        status = inflate_1.inflate(strm, constants.Z_NO_FLUSH);    /* no bad return value */

        if (status === constants.Z_NEED_DICT && dictionary) {
          status = inflate_1.inflateSetDictionary(this.strm, dictionary);
        }

        if (status === constants.Z_BUF_ERROR && allowBufError === true) {
          status = constants.Z_OK;
          allowBufError = false;
        }

        if (status !== constants.Z_STREAM_END && status !== constants.Z_OK) {
          this.onEnd(status);
          this.ended = true;
          return false;
        }

        if (strm.next_out) {
          if (strm.avail_out === 0 || status === constants.Z_STREAM_END || (strm.avail_in === 0 && (_mode === constants.Z_FINISH || _mode === constants.Z_SYNC_FLUSH))) {

            if (this.options.to === 'string') {

              next_out_utf8 = strings.utf8border(strm.output, strm.next_out);

              tail = strm.next_out - next_out_utf8;
              utf8str = strings.buf2string(strm.output, next_out_utf8);

              // move tail
              strm.next_out = tail;
              strm.avail_out = chunkSize - tail;
              if (tail) { common.arraySet(strm.output, strm.output, next_out_utf8, tail, 0); }

              this.onData(utf8str);

            } else {
              this.onData(common.shrinkBuf(strm.output, strm.next_out));
            }
          }
        }

        // When no more input data, we should check that internal inflate buffers
        // are flushed. The only way to do it when avail_out = 0 - run one more
        // inflate pass. But if output data not exists, inflate return Z_BUF_ERROR.
        // Here we set flag to process this error properly.
        //
        // NOTE. Deflate does not return error in this case and does not needs such
        // logic.
        if (strm.avail_in === 0 && strm.avail_out === 0) {
          allowBufError = true;
        }

      } while ((strm.avail_in > 0 || strm.avail_out === 0) && status !== constants.Z_STREAM_END);

      if (status === constants.Z_STREAM_END) {
        _mode = constants.Z_FINISH;
      }

      // Finalize on the last chunk.
      if (_mode === constants.Z_FINISH) {
        status = inflate_1.inflateEnd(this.strm);
        this.onEnd(status);
        this.ended = true;
        return status === constants.Z_OK;
      }

      // callback interim results if Z_SYNC_FLUSH.
      if (_mode === constants.Z_SYNC_FLUSH) {
        this.onEnd(constants.Z_OK);
        strm.avail_out = 0;
        return true;
      }

      return true;
    };


    /**
     * Inflate#onData(chunk) -> Void
     * - chunk (Uint8Array|Array|String): output data. Type of array depends
     *   on js engine support. When string output requested, each chunk
     *   will be string.
     *
     * By default, stores data blocks in `chunks[]` property and glue
     * those in `onEnd`. Override this handler, if you need another behaviour.
     **/
    Inflate.prototype.onData = function (chunk) {
      this.chunks.push(chunk);
    };


    /**
     * Inflate#onEnd(status) -> Void
     * - status (Number): inflate status. 0 (Z_OK) on success,
     *   other if not.
     *
     * Called either after you tell inflate that the input stream is
     * complete (Z_FINISH) or should be flushed (Z_SYNC_FLUSH)
     * or if an error happened. By default - join collected chunks,
     * free memory and fill `results` / `err` properties.
     **/
    Inflate.prototype.onEnd = function (status) {
      // On success - join
      if (status === constants.Z_OK) {
        if (this.options.to === 'string') {
          // Glue & convert here, until we teach pako to send
          // utf8 aligned strings to onData
          this.result = this.chunks.join('');
        } else {
          this.result = common.flattenChunks(this.chunks);
        }
      }
      this.chunks = [];
      this.err = status;
      this.msg = this.strm.msg;
    };


    /**
     * inflate(data[, options]) -> Uint8Array|Array|String
     * - data (Uint8Array|Array|String): input data to decompress.
     * - options (Object): zlib inflate options.
     *
     * Decompress `data` with inflate/ungzip and `options`. Autodetect
     * format via wrapper header by default. That's why we don't provide
     * separate `ungzip` method.
     *
     * Supported options are:
     *
     * - windowBits
     *
     * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
     * for more information.
     *
     * Sugar (options):
     *
     * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
     *   negative windowBits implicitly.
     * - `to` (String) - if equal to 'string', then result will be converted
     *   from utf8 to utf16 (javascript) string. When string output requested,
     *   chunk length can differ from `chunkSize`, depending on content.
     *
     *
     * ##### Example:
     *
     * ```javascript
     * var pako = require('pako')
     *   , input = pako.deflate([1,2,3,4,5,6,7,8,9])
     *   , output;
     *
     * try {
     *   output = pako.inflate(input);
     * } catch (err)
     *   console.log(err);
     * }
     * ```
     **/
    function inflate$1(input, options) {
      var inflator = new Inflate(options);

      inflator.push(input, true);

      // That will never happens, if you don't cheat with options :)
      if (inflator.err) { throw inflator.msg || messages[inflator.err]; }

      return inflator.result;
    }


    /**
     * inflateRaw(data[, options]) -> Uint8Array|Array|String
     * - data (Uint8Array|Array|String): input data to decompress.
     * - options (Object): zlib inflate options.
     *
     * The same as [[inflate]], but creates raw data, without wrapper
     * (header and adler32 crc).
     **/
    function inflateRaw(input, options) {
      options = options || {};
      options.raw = true;
      return inflate$1(input, options);
    }


    /**
     * ungzip(data[, options]) -> Uint8Array|Array|String
     * - data (Uint8Array|Array|String): input data to decompress.
     * - options (Object): zlib inflate options.
     *
     * Just shortcut to [[inflate]], because it autodetects format
     * by header.content. Done for convenience.
     **/


    var Inflate_1 = Inflate;
    var inflate_2$1 = inflate$1;
    var inflateRaw_1 = inflateRaw;
    var ungzip  = inflate$1;

    var inflate_1$1 = {
    	Inflate: Inflate_1,
    	inflate: inflate_2$1,
    	inflateRaw: inflateRaw_1,
    	ungzip: ungzip
    };

    var rul;
    function backLink(id, list, to, field) {
        if (!list)
            return;
        for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
            var key = list_1[_i];
            var back = to[key];
            if (!back)
                continue;
            back[field] = back[field] || [];
            back[field].push(id);
        }
    }
    function parseYaml(text) {
        var data = [];
        var reg = /^FILE: (.+)\n/gm;
        var matches = [];
        var match;
        while ((match = reg.exec(text)))
            matches.push(match);
        var _loop_1 = function (i) {
            var filename = matches[i][1];
            var file = void 0;
            if (i < matches.length - 1) {
                file = text.substr(matches[i].index + 7 + filename.length, matches[i + 1].index - matches[i].index - 7 - filename.length);
            }
            else
                file = text.substr(matches[i].index + 7 + filename.length);
            if (file.substr(1, 3) == "п»ї")
                file = file.substr(4);
            //console.log(filename);
            if (filename.substr(0, 5) == "TEXT@") {
                rul.lang[filename.substr(5)] = file;
                return "continue";
            }
            var parsed = void 0;
            if (filename.substr(0, 5) == "JSON@") {
                parsed = JSON.parse(file);
                filename = filename.substr(5);
            }
            else {
                try {
                    parsed = jsYaml.load(file, {
                        json: true,
                        filename: filename,
                        onWarning: function (e) {
                            console.log(filename);
                            console.log(e.message);
                        }
                    });
                }
                catch (e) {
                    console.log(e.message);
                }
            }
            if (filename == "xpedia") {
                //console.log(parsed);
                rul.config = parsed;
                rul.modName = parsed.mod_name;
                return "continue";
            }
            if (parsed)
                data.push(parsed);
        };
        for (var i = 0; i < matches.length; i++) {
            _loop_1(i);
        }
        return data;
    }
    var Search = /** @class */ (function () {
        function Search() {
            this.articles = new Fuse(rul.articlesOrder, {
                keys: ["id", "type", "title", "text"],
                tokenize: true,
                matchAllTokens: true,
                distance: 10,
                threshold: 0.1
            });
        }
        Search.prototype.findArticles = function (query) {
            return this.articles.search(query);
        };
        return Search;
    }());
    var Manufacture = /** @class */ (function () {
        function Manufacture(raw) {
            Object.assign(this, raw);
            rul.manufacture[this.name] = this;
            if (this.requires) {
                for (var _i = 0, _a = this.requires; _i < _a.length; _i++) {
                    var resName = _a[_i];
                    var res = rul.research[resName];
                    if (!res)
                        continue;
                    if (!res.manufacture)
                        res.manufacture = [];
                    res.manufacture.push(this.name);
                }
            }
            if (this.producedItems) {
                for (var _b = 0, _c = Object.keys(this.producedItems); _b < _c.length; _b++) {
                    var itemName = _c[_b];
                    var item = rul.items[itemName];
                    if (!item)
                        continue;
                    if (!item.manufacture)
                        item.manufacture = {};
                    item.manufacture[this.name] = this.producedItems[itemName];
                }
            }
            if (this.requiredItems) {
                for (var _d = 0, _e = Object.keys(this.requiredItems); _d < _e.length; _d++) {
                    var itemName = _e[_d];
                    var item = rul.items[itemName];
                    if (!item)
                        continue;
                    if (!item.componentOf)
                        item.componentOf = {};
                    item.componentOf[this.name] = this.requiredItems[itemName];
                }
            }
            if (this.randomProducedItems) {
                this.chanceSum = 0;
                for (var _f = 0, _g = this.randomProducedItems; _f < _g.length; _f++) {
                    var chance = _g[_f];
                    this.chanceSum += chance[0];
                }
            }
            Service.add("allowsManufacture", this.name, this.requiresBaseFunc);
            Article.create({
                id: this.name,
                section: "MANUFACTURE",
                type_id: "MANUFACTURE"
            });
        }
        return Manufacture;
    }());
    var Research = /** @class */ (function () {
        function Research(raw) {
            Object.assign(this, raw);
            rul.research[this.name] = this;
            Service.add("allowsResearching", this.name, this.requiresBaseFunc);
            Article.create({
                id: this.name,
                section: "RESEARCH",
                type_id: "RESEARCH"
            });
        }
        return Research;
    }());
    var Service = /** @class */ (function () {
        function Service(id) {
            this.id = id;
            Article.create({
                id: id,
                type_id: "SERVICES",
                section: "SERVICES"
            });
        }
        Service.add = function (prop, id, entries) {
            if (entries) {
                for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
                    var s = entries_1[_i];
                    if (!(s in rul.baseServices))
                        rul.baseServices[s] = new Service(s);
                    if (!(prop in rul.baseServices[s]))
                        rul.baseServices[s][prop] = [];
                    rul.baseServices[s][prop].push(id);
                }
            }
        };
        return Service;
    }());
    var AlienDeployment = /** @class */ (function () {
        function AlienDeployment(raw) {
            Object.assign(this, raw);
            rul.alienDeployments[this.type] = this;
            var condition = rul.startingConditions[this.startingCondition];
            if (condition)
                condition.deployments.push(this.type);
        }
        return AlienDeployment;
    }());
    var CraftWeapon = /** @class */ (function () {
        function CraftWeapon(raw) {
            Object.assign(this, raw);
            rul.craftWeapons[this.type] = this;
            Service.add("canBuy", this.type, this.requiresBuyBaseFunc);
        }
        return CraftWeapon;
    }());
    var Craft = /** @class */ (function () {
        function Craft(raw) {
            this.startingConditions = [];
            Object.assign(this, raw);
            rul.crafts[this.type] = this;
        }
        return Craft;
    }());
    var Ufo = /** @class */ (function () {
        function Ufo(raw) {
            Object.assign(this, raw);
            rul.ufos[this.type] = this;
        }
        return Ufo;
    }());
    var Facility = /** @class */ (function () {
        function Facility(raw) {
            Object.assign(this, raw);
            rul.facilities[this.type] = this;
            Service.add("providedBy", this.type, this.provideBaseFunc);
            Service.add("allowsBuilding", this.type, this.requiresBaseFunc);
            Service.add("forbidsBuilding", this.type, this.forbiddenBaseFunc);
        }
        return Facility;
    }());
    var StartingConditions = /** @class */ (function () {
        function StartingConditions(raw) {
            this.allowedCraft = [];
            this.allowedItemCategories = [];
            this.allowedArmors = [];
            this.allowedVehicles = [];
            this.deployments = [];
            Object.assign(this, raw);
            rul.startingConditions[this.type] = this;
            rul.lang[this.type] = rul.decamelize(this.type.substr(11));
            for (var _i = 0, _a = this.allowedCraft; _i < _a.length; _i++) {
                var craft = _a[_i];
                rul.crafts[craft].startingConditions.push(this.type);
            }
            Article.create({
                id: this.type,
                section: "CONDITIONS",
                type_id: "CONDITIONS"
            });
        }
        return StartingConditions;
    }());
    var Unit = /** @class */ (function () {
        function Unit(raw) {
            Object.assign(this, raw);
            rul.units[this.type] = this;
            var armor = rul.armors[raw.armor];
            if (armor) {
                armor.users = armor.users || [];
                armor.users.push(this.type);
            }
        }
        return Unit;
    }());
    var defaultRange = { snap: 15, auto: 7, aimed: 200 };
    var Attack = /** @class */ (function () {
        function Attack(item, mode) {
            this.mode = mode;
            this.possible = false;
            this.flatTime = false;
            this.shots = 1;
            this.pellets = 1;
            var capMode = mode.charAt(0).toUpperCase() + mode.substr(1);
            var isDefaultAttack = (mode == "ammo" && item.battleType == 2) ||
                (mode == "melee" && item.battleType == 3) ||
                (mode == "psi" && item.battleType == 9) ||
                (mode == "throw" && [4, 5].includes(item.battleType));
            if (mode == "throw" && !isDefaultAttack)
                return null;
            var exists = item["accuracy" + capMode] || item["cost" + capMode] || isDefaultAttack;
            if (!exists)
                return null;
            if (item.type == "STR_MASTERS_CANE") {
                console.log(item);
                console.log(mode);
            }
            if (mode == "melee" && item.battleType != 3) {
                this.damage = item.meleePower;
                this.damageBonus = item.meleeBonus;
                this.damageType = item.meleeType;
            }
            else if (!item.compatibleAmmo) {
                this.damage = item.power;
                this.damageBonus = item.damageBonus;
                this.damageType = item.damageType;
            }
            this.pellets = item.shotgunPellets || 1;
            this.shots = mode == "auto" ? item.autoShots || 3 : 1;
            this.name = mode.substr(0, 1).toUpperCase() + mode.substr(1);
            var confId = "conf" + this.name;
            if (confId in item) {
                var conf = item[confId];
                if (conf.name)
                    this.name = rul.str(conf.name);
                if (conf.shots)
                    this.shots = conf.shots;
                delete item[confId];
            }
            if (item[mode + "AttackName"])
                this.name = rul.str(item[mode + "AttackName"]);
            if (mode == "melee")
                this.alter = item.meleeAlter;
            if (item.battleType == 3 || mode != "melee")
                this.alter = item.damageAlter;
            if (mode != "ammo") {
                if (((mode == "melee" && item.battleType == 3) || mode != "melee") &&
                    item.flatRate)
                    this.flatTime = item.flatRate;
                if (item["flat" + capMode] && item["flat" + capMode].time)
                    this.flatTime = true;
                if (capMode == "Psi")
                    capMode = "Use";
                this.cost = this.cost = item["cost" + capMode] || {
                    time: item["tu" + capMode],
                    energy: 0
                };
                this.accuracy = item["accuracy" + capMode] || 100;
                var accuracyMultiplier = mode == "throw"
                    ? item.throwMultiplier
                    : mode == "melee"
                        ? item.meleeMultiplier
                        : item.accuracyMultiplier;
                if (!accuracyMultiplier) {
                    var defaultAccuracyStat = mode == "throw" ? "throwing" : mode == "melee" ? "melee" : "firing";
                    accuracyMultiplier = {};
                    accuracyMultiplier[defaultAccuracyStat] = 1;
                }
                this.accuracyMultiplier = accuracyMultiplier;
            }
            if (this.alter && this.alter.ResistType) {
                this.damageType = this.alter.ResistType;
            }
            if (mode + "Range" in item) {
                this.alter = Object.assign({}, this.alter || {});
                this.alter.range = item[mode + "Range"];
            }
            this.range =
                item[mode + "Range"] ||
                    (this.alter && this.alter.range) ||
                    defaultRange[mode];
            this.possible = true;
        }
        return Attack;
    }());
    var Article = /** @class */ (function () {
        function Article(raw) {
            this.id = raw.id;
            this.title = raw.title || rul.str(raw.id);
            rul.lang[this.id] = this.title;
            this.text = rul.lang[raw.text] || rul.lang[raw.id + "_UFOPEDIA"];
            this.image_id = raw.image_id;
            this.type_id = raw.type_id || "-1";
            rul.articles[this.id] = this;
            var id = raw.id;
            rul.articles[id] = this;
            if (raw.section) {
                rul.addToSection(this, raw.section);
            }
        }
        Article.create = function (raw) {
            if (raw.id in rul.articles) {
                var article = rul.articles[raw.id];
                if (raw.section && article.section != raw.section) {
                    rul.sections[raw.section].add(article);
                }
                return article;
            }
            return new Article(raw);
        };
        return Article;
    }());
    var Section = /** @class */ (function () {
        function Section(id, type_id) {
            if (type_id === void 0) { type_id = "PEDIA"; }
            this.id = id;
            this.type_id = type_id;
            this._articles = [];
            rul.sections[id] = this;
            if (this.isType()) {
                rul.typeSectionsOrder.push(this);
            }
            else {
                rul.sectionsOrder.push(this);
            }
            this.title = rul.str(id);
            Article.create({ id: id, section: id, type_id: type_id });
        }
        Object.defineProperty(Section.prototype, "articles", {
            get: function () {
                return this._articles;
            },
            enumerable: true,
            configurable: true
        });
        Section.prototype.isType = function () {
            return this.type_id == "TYPE";
        };
        Section.prototype.add = function (article) {
            if (!this._articles.includes(article))
                this._articles.push(article);
            if (!article.section)
                article.section = this;
        };
        return Section;
    }());
    var Sprite = /** @class */ (function () {
        function Sprite(raw) {
            this.id = raw.type || raw.typeSingle;
            if (raw.files) {
                this.path = raw.files[0];
                this.extra = raw.files;
            }
            if (raw.fileSingle)
                this.path = raw.fileSingle;
        }
        return Sprite;
    }());
    var Armor = /** @class */ (function () {
        function Armor(raw) {
            this.dollSprites = {};
            this.armor = {};
            Object.assign(this, raw);
            rul.armors[raw.type] = this;
            if (this.layersDefinition) {
                var prefix = this.layersDefaultPrefix;
                for (var body in this.layersDefinition) {
                    var layersDef = this.layersDefinition[body];
                    var layers = [];
                    for (var layer in layersDef) {
                        var name_1 = layersDef[layer];
                        if (name_1 && name_1.length) {
                            var id = prefix + "__" + layer + "__" + name_1;
                            layers.push(rul.sprite(id));
                        }
                    }
                    this.dollSprites[body] = layers;
                }
            }
            else if (this.spriteInv) {
                var name_2 = this.spriteInv;
                var l = name_2.length;
                if (this.spriteInv + ".SPK" in rul.sprites) {
                    this.dollSprites = {
                        0: [rul.path + rul.sprites[this.spriteInv + ".SPK"].path]
                    };
                }
                else {
                    for (var s in rul.sprites) {
                        if (s.substr(0, l) == name_2) {
                            this.dollSprites[s.substr(l, s.length - l - 4)] = [
                                rul.path + rul.sprites[s].path
                            ];
                        }
                    }
                }
            }
            this.armor = {
                Front: this.frontArmor,
                Side: this.sideArmor,
                Rear: this.rearArmor,
                Under: this.underArmor
            };
            if (this.storeItem && rul.items[this.storeItem]) {
                var item = rul.items[this.storeItem];
                if (!item.armors)
                    item.armors = [];
                item.armors.push(this.type);
            }
        }
        return Armor;
    }());
    var Item = /** @class */ (function () {
        function Item(raw) {
            this.invWidth = 1;
            this.invHeight = 1;
            Object.assign(this, raw);
            rul.items[raw.type] = this;
            this.sprite = rul.bigSprite[this.bigSprite];
            var t = this;
            if ("flatThrow" in t) {
                t.flatThrowTime = t.flatThrow.time;
                delete t.flatThrow;
            }
            Service.add("canBuyItem", this.type, this.requiresBuyBaseFunc);
            if (this.categories) {
                for (var _i = 0, _a = this.categories; _i < _a.length; _i++) {
                    var cat = _a[_i];
                    this.addCategory(cat);
                }
            }
            Article.create({
                id: this.type,
                type_id: "ITEMS",
                section: "ITEMS"
            });
        }
        Item.prototype.attacks = function () {
            if (!this._attacks) {
                this._attacks = [];
                for (var _i = 0, _a = [
                    "ammo",
                    "melee",
                    "snap",
                    "aimed",
                    "auto",
                    "throw",
                    "psi",
                    "panic",
                    "mindControl",
                    "use"
                ]; _i < _a.length; _i++) {
                    var mode = _a[_i];
                    var attack = new Attack(this, mode);
                    if (attack.possible) {
                        this._attacks.push(attack);
                        if (!isNaN(+attack.damageType))
                            this.addCategory("dmg=" + rul.damageTypes[attack.damageType]);
                        if (attack.damageBonus) {
                            for (var k in attack.damageBonus)
                                this.addCategory("dmg*" + k);
                            for (var k in attack.accuracyMultiplier)
                                this.addCategory("acc*" + k);
                        }
                    }
                }
            }
            if (this.battleType == 2) {
                this._attacks[0].item = this;
                this._attacks[0].mode = "ammo";
            }
            return this._attacks;
        };
        Item.prototype.addCategory = function (catName) {
            var cat = rul.categories[catName] || [];
            if (!cat.includes(this))
                cat.push(this);
            rul.categories[catName] = cat;
        };
        return Item;
    }());
    var Ruleset = /** @class */ (function () {
        function Ruleset() {
            this.articles = {};
            this.articlesOrder = [];
            this.sections = {};
            this.sectionsOrder = [];
            this.typeSectionsOrder = [];
            this.sprites = {};
            this.raw = {};
            this.items = {};
            this.categories = {};
            this.armors = {};
            this.units = {};
            this.crafts = {};
            this.ufos = {};
            this.facilities = {};
            this.craftWeapons = {};
            this.alienDeployments = {};
            this.research = {};
            this.manufacture = {};
            this.startingConditions = {};
            this.bigSprite = [];
            this.floorSprite = [];
            this.handSprite = [];
            this.baseSprite = [];
            this.sounds = [];
            this.baseServices = {};
            this.redirect = {};
            this.lang = {};
            this.damageTypes = [
                "STR_DAMAGE_NONE",
                "STR_DAMAGE_ARMOR_PIERCING",
                "STR_DAMAGE_INCENDIARY",
                "STR_DAMAGE_HIGH_EXPLOSIVE",
                "STR_DAMAGE_LASER_BEAM",
                "STR_DAMAGE_PLASMA_BEAM",
                "STR_DAMAGE_STUN",
                "STR_DAMAGE_MELEE",
                "STR_DAMAGE_ACID",
                "STR_DAMAGE_SMOKE",
                "STR_DAMAGE_10",
                "STR_DAMAGE_11",
                "STR_DAMAGE_12",
                "STR_DAMAGE_13",
                "STR_DAMAGE_14",
                "STR_DAMAGE_15",
                "STR_DAMAGE_16",
                "STR_DAMAGE_17",
                "STR_DAMAGE_18",
                "STR_DAMAGE_19",
                "STR_DAMAGE_20",
                "STR_DAMAGE_21",
                "STR_DAMAGE_22",
                "STR_MANA"
            ];
            this.battleTypes = [
                "None (Geoscape-only item)",
                "Firearm",
                "Ammo",
                "Melee",
                "Grenade",
                "Proximity Grenade",
                "Medi-Kit",
                "Motion Scanner",
                "Mind Probe",
                "Psi-Amp",
                "Electro-flare",
                "Corpse"
            ];
            rul = this;
        }
        Ruleset.prototype.damageTypeName = function (type) {
            return this.lang[this.damageTypes[type]];
        };
        Ruleset.prototype.sound = function (id) {
            return this.path + this.sounds[id];
        };
        Ruleset.prototype.str = function (id) {
            return this.lang[id] || id;
        };
        Ruleset.prototype.specialSprite = function (type, num) {
            return num in this[type] ? this.path + this[type][num] : "xpedia/0.png";
        };
        Ruleset.prototype.combineFiles = function (data, reversed) {
            if (reversed === void 0) { reversed = false; }
            for (var _i = 0, _a = (reversed ? data.reverse() : data); _i < _a.length; _i++) {
                var file = _a[_i];
                for (var key in file) {
                    if (key.substr(0, 4) == "lang") {
                        Object.assign(this.lang, file[key]);
                    }
                    if (!(key in this.raw)) {
                        this.raw[key] = file[key];
                    }
                    else {
                        var old = this.raw[key];
                        var adding = file[key];
                        if (old.concat) {
                            this.raw[key] = old.concat(adding);
                        }
                        else {
                            for (var _b = 0, adding_1 = adding; _b < adding_1.length; _b++) {
                                var k = adding_1[_b];
                                if (k in old)
                                    Object.assign(old[k], adding[k]);
                                else
                                    old[k] = adding[k];
                            }
                        }
                    }
                }
            }
        };
        Ruleset.prototype.mergeRuls = function (reversed) {
            if (reversed === void 0) { reversed = false; }
            for (var categoryName in this.raw) {
                var merged = {};
                var deleted = {};
                var category = this.raw[categoryName];
                if (!Array.isArray(category))
                    continue;
                for (var _i = 0, category_1 = category; _i < category_1.length; _i++) {
                    var data = category_1[_i];
                    var id = data.type || data.id || data.name || data.delete || data.typeSingle;
                    if (!id || deleted[id])
                        continue;
                    if ("delete" in data) {
                        if (reversed)
                            deleted[id] = true;
                        else
                            delete merged[id];
                        continue;
                    }
                    if (id && id in merged) {
                        if (reversed) {
                            for (var k in data) {
                                if (!(k in merged[id]))
                                    merged[id][k] = data[k];
                            }
                        }
                        else {
                            Object.assign(merged[id], data);
                        }
                    }
                    else {
                        merged[id] = data;
                    }
                }
                this.raw[categoryName] = Object.values(merged);
            }
        };
        Ruleset.prototype.parse = function (data) {
            var reversed = true;
            this.combineFiles(data, reversed);
            var specialSections = [
                "ITEMS",
                "CONDITIONS",
                "CATEGORIES",
                "RESEARCH",
                "MANUFACTURE",
                "SERVICES"
            ];
            for (var _i = 0, specialSections_1 = specialSections; _i < specialSections_1.length; _i++) {
                var type = specialSections_1[_i];
                new Section(type, "TYPE");
            }
            this.mergeRuls(reversed);
            this.path = "user/mods/" + rul.modName + "/";
            for (var k in this.lang) {
                var text = this.lang[k];
                if (typeof text === "string") {
                    text = text.replace(/^({NEWLINE})+/, "");
                    text = text.replace(/{NEWLINE}/g, "<br/>");
                    this.lang[k] = text;
                }
            }
            for (var _a = 0, _b = rul.damageTypes; _a < _b.length; _a++) {
                var damage = _b[_a];
                rul.categories["dmg=" + damage] = [];
                this.redirect[damage] = "dmg=" + damage;
                this.lang["dmg=" + damage] = this.lang[damage];
            }
            this.parsePedia(this.raw.ufopaedia);
            this.parseSprites(this.raw.extraSprites);
            if (this.sprites["BIGOBS.PCK"])
                this.bigSprite = this.sprites["BIGOBS.PCK"].extra;
            if (this.sprites["FLOOROB.PCK"])
                this.floorSprite = this.sprites["FLOOROB.PCK"].extra;
            if (this.sprites["HANDOB.PCK"])
                this.handSprite = this.sprites["HANDOB.PCK"].extra;
            if (this.sprites["BASEBITS.PCK"])
                this.baseSprite = this.sprites["BASEBITS.PCK"].extra;
            if (this.raw.extraSounds && this.raw.extraSounds[0])
                this.sounds = this.raw.extraSounds[0].files;
            for (var _c = 0, _d = this.raw.items; _c < _d.length; _c++) {
                var data_1 = _d[_c];
                new Item(data_1);
            }
            for (var _e = 0, _f = this.raw.armors; _e < _f.length; _e++) {
                var data_2 = _f[_e];
                new Armor(data_2);
            }
            for (var _g = 0, _h = this.raw.units; _g < _h.length; _g++) {
                var data_3 = _h[_g];
                new Unit(data_3);
            }
            for (var _j = 0, _k = this.raw.crafts; _j < _k.length; _j++) {
                var data_4 = _k[_j];
                new Craft(data_4);
            }
            for (var _l = 0, _m = this.raw.craftWeapons; _l < _m.length; _l++) {
                var data_5 = _m[_l];
                new CraftWeapon(data_5);
            }
            for (var _o = 0, _p = this.raw.ufos; _o < _p.length; _o++) {
                var data_6 = _p[_o];
                new Ufo(data_6);
            }
            for (var _q = 0, _r = this.raw.facilities; _q < _r.length; _q++) {
                var data_7 = _r[_q];
                new Facility(data_7);
            }
            if (this.raw.startingConditions)
                for (var _s = 0, _t = this.raw.startingConditions; _s < _t.length; _s++) {
                    var data_8 = _t[_s];
                    new StartingConditions(data_8);
                }
            for (var _u = 0, _v = this.raw.alienDeployments; _u < _v.length; _u++) {
                var data_9 = _v[_u];
                new AlienDeployment(data_9);
            }
            for (var _w = 0, _x = this.raw.research; _w < _x.length; _w++) {
                var data_10 = _x[_w];
                new Research(data_10);
            }
            for (var _y = 0, _z = this.raw.manufacture; _y < _z.length; _y++) {
                var data_11 = _z[_y];
                new Manufacture(data_11);
            }
            for (var _0 = 0, _1 = Object.values(this.facilities); _0 < _1.length; _0++) {
                var facility = _1[_0];
                if (facility.buildCostItems) {
                    for (var _2 = 0, _3 = Object.keys(facility.buildCostItems); _2 < _3.length; _2++) {
                        var itemName = _3[_2];
                        var item = rul.items[itemName];
                        if (!item)
                            continue;
                        if (!item.componentOf)
                            item.componentOf = {};
                        item.componentOf[facility.type] =
                            facility.buildCostItems[itemName].build;
                        if (!item.manufacture)
                            item.manufacture = {};
                        item.manufacture[facility.type] =
                            facility.buildCostItems[itemName].refund;
                    }
                }
            }
            for (var _4 = 0, _5 = Object.values(this.items); _4 < _5.length; _4++) {
                var item = _5[_4];
                item.attacks();
                if (item.compatibleAmmo) {
                    for (var _6 = 0, _7 = item.compatibleAmmo; _6 < _7.length; _6++) {
                        var ammoId = _7[_6];
                        var ammo = this.items[ammoId];
                        if (ammo) {
                            ammo.compatibleWeapons = ammo.compatibleWeapons || [];
                            ammo.compatibleWeapons.push(item.type);
                        }
                    }
                }
            }
            for (var _8 = 0, _9 = Object.values(this.research); _8 < _9.length; _8++) {
                var research = _9[_8];
                backLink(research.name, research.dependencies, rul.research, "leadsTo");
                backLink(research.name, research.getOneFree, rul.research, "freeFrom");
                if (research.lookup &&
                    research.name != research.lookup &&
                    this.research[research.lookup]) {
                    var lookup = this.research[research.lookup];
                    lookup.seeAlso = lookup.seeAlso || [];
                    lookup.seeAlso.push(research.name);
                    var lookUpArticle = this.article(research.lookup);
                    var article = this.article(research.name);
                    if (!rul.lang[article.id])
                        article.title = lookUpArticle.title;
                    article.text = lookUpArticle.text;
                    article.image_id = lookUpArticle.image_id;
                }
                if (research.spawnedItem) {
                    var item = rul.items[research.spawnedItem];
                    item.spawnedBy = item.spawnedBy || [];
                    item.spawnedBy.push(research.name);
                }
            }
            this.ourArmors = Object.values(this.armors)
                .filter(function (a) { return a.units; })
                .map(function (a) { return a.type; });
            for (var _10 = 0, specialSections_2 = specialSections; _10 < specialSections_2.length; _10++) {
                var sectionName = specialSections_2[_10];
                rul.sections[sectionName]._articles = rul.sections[sectionName].articles.sort(function (a, b) {
                    return a.title < b.title ? -1 : 1;
                });
            }
            /*Article.create({
              id: "BASE_FUNC",
              title: "Base Services",
              type_id: "OTHER",
              section: "OTHER"
            });*/
            for (var _11 = 0, _12 = Object.keys(this.categories); _11 < _12.length; _11++) {
                var cat = _12[_11];
                Article.create({
                    id: cat,
                    title: rul.str(cat),
                    type_id: "CATEGORIES",
                    section: "CATEGORIES"
                });
            }
            console.log(this);
            this.search = new Search();
        };
        Ruleset.prototype.parsePedia = function (data) {
            for (var _i = 0, data_12 = data; _i < data_12.length; _i++) {
                var articleData = data_12[_i];
                if (articleData.id) {
                    var article = new Article(articleData);
                    this.articlesOrder.push(article);
                    this.articles[article.id] = article;
                }
            }
        };
        Ruleset.prototype.parseSprites = function (data) {
            for (var _i = 0, data_13 = data; _i < data_13.length; _i++) {
                var spriteData = data_13[_i];
                var sprite = new Sprite(spriteData);
                this.sprites[sprite.id] = sprite;
            }
        };
        Ruleset.prototype.findNextArticle = function (current, delta) {
            if (!current)
                return null;
            var section = current.section;
            var list = section ? section.articles : this.articlesOrder;
            var index = list.findIndex(function (a) { return a.id == current.id; });
            if (index != undefined) {
                var nextIndex = index + delta;
                var nextArticle = list[nextIndex];
                return nextArticle;
            }
        };
        Ruleset.prototype.decamelize = function (str, separ) {
            if (separ === void 0) { separ = " "; }
            if (typeof str === "string") {
                if (rul.lang[str])
                    return rul.lang[str];
                if (this.lang[fieldNames[str]])
                    return this.lang[fieldNames[str]];
                if (str.includes("_") && str.search(/[a-z]/) == -1)
                    str = str.replace(/_/g, " ");
                else
                    str = str.replace(/([^A-Z])([A-Z])/g, "$1" + separ + "$2");
                str = str.substr(0, 1).toUpperCase() + str.substr(1).toLowerCase();
            }
            return str;
        };
        Ruleset.prototype.sprite = function (id) {
            if (id in this.sprites)
                return this.path + this.sprites[id].path;
            return this.path + id;
        };
        Ruleset.prototype.load = function (text) {
            return __awaiter(this, void 0, void 0, function () {
                var strData, data;
                return __generator(this, function (_a) {
                    text = text.trim();
                    //await new Promise(resolve => requestAnimationFrame(() => resolve()));
                    if (text.substr(0, 6) == "base64") {
                        text = text.substr(6);
                        strData = atob(text);
                        text = inflate_1$1.inflate(strData, { to: "string" });
                    }
                    data = parseYaml(text);
                    try {
                        this.parse(data);
                    }
                    catch (e) {
                        console.error(e);
                    }
                    return [2 /*return*/];
                });
            });
        };
        Ruleset.prototype.addToSection = function (article, sectionId) {
            var section;
            if (sectionId in rul.sections)
                section = rul.sections[sectionId];
            else
                section = rul.sections[sectionId] = new Section(sectionId);
            if (article.id != section.id)
                section.add(article);
            article.section = section;
            return section;
        };
        Ruleset.prototype.linksByType = function (type) {
            switch (type) {
                case "CONDITIONS":
                    return Object.keys(this.startingConditions).map(function (a) { return "CONDITIONS_" + a; });
            }
            return [];
        };
        Ruleset.prototype.bodiesCompare = function (strs) {
            for (var i in strs) {
                if (strs[i].length == 2)
                    strs[i] =
                        (strs[i].charAt(0) == "M" ? "A" : "B") + "0" + strs[i].substr(1);
            }
            return strs[0] > strs[1] ? 1 : -1;
        };
        Ruleset.prototype.article = function (id) {
            var a = this.articles[this.redirect[id] || id];
            return a;
        };
        return Ruleset;
    }());
    var fieldNames = {
        dependencies: "STR_DEPENDS_ON",
        seeAlso: "STR_ITEM_REQUIRED",
        requiresBaseFunc: "STR_SERVICES_REQUIRED",
        freeFrom: "STR_GET_FOR_FREE_FROM",
        leadsTo: "STR_LEADS_TO",
        unlocks: "STR_UNLOCKS",
        disables: "STR_DISABLES",
        getOneFree: "STR_GIVES_ONE_FOR_FREE",
        manufacture: "STR_REQUIRED_BY",
        randomProducedItems: "STR_RANDOM_PRODUCTION_DISCLAIMER",
        cost: "STR_COST"
    };

    function noop() { }
    function is_promise(value) {
        return value && typeof value === 'object' && typeof value.then === 'function';
    }
    function add_location(element, file, line, column, char) {
        element.__svelte_meta = {
            loc: { file, line, column, char }
        };
    }
    function run(fn) {
        return fn();
    }
    function blank_object() {
        return Object.create(null);
    }
    function run_all(fns) {
        fns.forEach(run);
    }
    function is_function(thing) {
        return typeof thing === 'function';
    }
    function safe_not_equal(a, b) {
        return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
    }
    function null_to_empty(value) {
        return value == null ? '' : value;
    }
    function action_destroyer(action_result) {
        return action_result && is_function(action_result.destroy) ? action_result.destroy : noop;
    }

    function append(target, node) {
        target.appendChild(node);
    }
    function insert(target, node, anchor) {
        target.insertBefore(node, anchor || null);
    }
    function detach(node) {
        node.parentNode.removeChild(node);
    }
    function destroy_each(iterations, detaching) {
        for (let i = 0; i < iterations.length; i += 1) {
            if (iterations[i])
                iterations[i].d(detaching);
        }
    }
    function element(name) {
        return document.createElement(name);
    }
    function text(data) {
        return document.createTextNode(data);
    }
    function space() {
        return text(' ');
    }
    function empty() {
        return text('');
    }
    function listen(node, event, handler, options) {
        node.addEventListener(event, handler, options);
        return () => node.removeEventListener(event, handler, options);
    }
    function attr(node, attribute, value) {
        if (value == null)
            node.removeAttribute(attribute);
        else if (node.getAttribute(attribute) !== value)
            node.setAttribute(attribute, value);
    }
    function children(element) {
        return Array.from(element.childNodes);
    }
    function set_input_value(input, value) {
        if (value != null || input.value) {
            input.value = value;
        }
    }
    function set_style(node, key, value, important) {
        node.style.setProperty(key, value, important ? 'important' : '');
    }
    function custom_event(type, detail) {
        const e = document.createEvent('CustomEvent');
        e.initCustomEvent(type, false, false, detail);
        return e;
    }
    class HtmlTag {
        constructor(html, anchor = null) {
            this.e = element('div');
            this.a = anchor;
            this.u(html);
        }
        m(target, anchor = null) {
            for (let i = 0; i < this.n.length; i += 1) {
                insert(target, this.n[i], anchor);
            }
            this.t = target;
        }
        u(html) {
            this.e.innerHTML = html;
            this.n = Array.from(this.e.childNodes);
        }
        p(html) {
            this.d();
            this.u(html);
            this.m(this.t, this.a);
        }
        d() {
            this.n.forEach(detach);
        }
    }

    let current_component;
    function set_current_component(component) {
        current_component = component;
    }
    function get_current_component() {
        if (!current_component)
            throw new Error(`Function called outside component initialization`);
        return current_component;
    }
    function createEventDispatcher() {
        const component = get_current_component();
        return (type, detail) => {
            const callbacks = component.$$.callbacks[type];
            if (callbacks) {
                // TODO are there situations where events could be dispatched
                // in a server (non-DOM) environment?
                const event = custom_event(type, detail);
                callbacks.slice().forEach(fn => {
                    fn.call(component, event);
                });
            }
        };
    }

    const dirty_components = [];
    const binding_callbacks = [];
    const render_callbacks = [];
    const flush_callbacks = [];
    const resolved_promise = Promise.resolve();
    let update_scheduled = false;
    function schedule_update() {
        if (!update_scheduled) {
            update_scheduled = true;
            resolved_promise.then(flush);
        }
    }
    function add_render_callback(fn) {
        render_callbacks.push(fn);
    }
    function flush() {
        const seen_callbacks = new Set();
        do {
            // first, call beforeUpdate functions
            // and update components
            while (dirty_components.length) {
                const component = dirty_components.shift();
                set_current_component(component);
                update(component.$$);
            }
            while (binding_callbacks.length)
                binding_callbacks.pop()();
            // then, once components are updated, call
            // afterUpdate functions. This may cause
            // subsequent updates...
            for (let i = 0; i < render_callbacks.length; i += 1) {
                const callback = render_callbacks[i];
                if (!seen_callbacks.has(callback)) {
                    callback();
                    // ...so guard against infinite loops
                    seen_callbacks.add(callback);
                }
            }
            render_callbacks.length = 0;
        } while (dirty_components.length);
        while (flush_callbacks.length) {
            flush_callbacks.pop()();
        }
        update_scheduled = false;
    }
    function update($$) {
        if ($$.fragment !== null) {
            $$.update();
            run_all($$.before_update);
            const dirty = $$.dirty;
            $$.dirty = [-1];
            $$.fragment && $$.fragment.p($$.ctx, dirty);
            $$.after_update.forEach(add_render_callback);
        }
    }
    const outroing = new Set();
    let outros;
    function group_outros() {
        outros = {
            r: 0,
            c: [],
            p: outros // parent group
        };
    }
    function check_outros() {
        if (!outros.r) {
            run_all(outros.c);
        }
        outros = outros.p;
    }
    function transition_in(block, local) {
        if (block && block.i) {
            outroing.delete(block);
            block.i(local);
        }
    }
    function transition_out(block, local, detach, callback) {
        if (block && block.o) {
            if (outroing.has(block))
                return;
            outroing.add(block);
            outros.c.push(() => {
                outroing.delete(block);
                if (callback) {
                    if (detach)
                        block.d(1);
                    callback();
                }
            });
            block.o(local);
        }
    }

    function handle_promise(promise, info) {
        const token = info.token = {};
        function update(type, index, key, value) {
            if (info.token !== token)
                return;
            info.resolved = value;
            let child_ctx = info.ctx;
            if (key !== undefined) {
                child_ctx = child_ctx.slice();
                child_ctx[key] = value;
            }
            const block = type && (info.current = type)(child_ctx);
            let needs_flush = false;
            if (info.block) {
                if (info.blocks) {
                    info.blocks.forEach((block, i) => {
                        if (i !== index && block) {
                            group_outros();
                            transition_out(block, 1, 1, () => {
                                info.blocks[i] = null;
                            });
                            check_outros();
                        }
                    });
                }
                else {
                    info.block.d(1);
                }
                block.c();
                transition_in(block, 1);
                block.m(info.mount(), info.anchor);
                needs_flush = true;
            }
            info.block = block;
            if (info.blocks)
                info.blocks[index] = block;
            if (needs_flush) {
                flush();
            }
        }
        if (is_promise(promise)) {
            const current_component = get_current_component();
            promise.then(value => {
                set_current_component(current_component);
                update(info.then, 1, info.value, value);
                set_current_component(null);
            }, error => {
                set_current_component(current_component);
                update(info.catch, 2, info.error, error);
                set_current_component(null);
            });
            // if we previously had a then/catch block, destroy it
            if (info.current !== info.pending) {
                update(info.pending, 0);
                return true;
            }
        }
        else {
            if (info.current !== info.then) {
                update(info.then, 1, info.value, promise);
                return true;
            }
            info.resolved = promise;
        }
    }

    const globals = (typeof window !== 'undefined' ? window : global);
    function create_component(block) {
        block && block.c();
    }
    function mount_component(component, target, anchor) {
        const { fragment, on_mount, on_destroy, after_update } = component.$$;
        fragment && fragment.m(target, anchor);
        // onMount happens before the initial afterUpdate
        add_render_callback(() => {
            const new_on_destroy = on_mount.map(run).filter(is_function);
            if (on_destroy) {
                on_destroy.push(...new_on_destroy);
            }
            else {
                // Edge case - component was destroyed immediately,
                // most likely as a result of a binding initialising
                run_all(new_on_destroy);
            }
            component.$$.on_mount = [];
        });
        after_update.forEach(add_render_callback);
    }
    function destroy_component(component, detaching) {
        const $$ = component.$$;
        if ($$.fragment !== null) {
            run_all($$.on_destroy);
            $$.fragment && $$.fragment.d(detaching);
            // TODO null out other refs, including component.$$ (but need to
            // preserve final state?)
            $$.on_destroy = $$.fragment = null;
            $$.ctx = [];
        }
    }
    function make_dirty(component, i) {
        if (component.$$.dirty[0] === -1) {
            dirty_components.push(component);
            schedule_update();
            component.$$.dirty.fill(0);
        }
        component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
    }
    function init(component, options, instance, create_fragment, not_equal, props, dirty = [-1]) {
        const parent_component = current_component;
        set_current_component(component);
        const prop_values = options.props || {};
        const $$ = component.$$ = {
            fragment: null,
            ctx: null,
            // state
            props,
            update: noop,
            not_equal,
            bound: blank_object(),
            // lifecycle
            on_mount: [],
            on_destroy: [],
            before_update: [],
            after_update: [],
            context: new Map(parent_component ? parent_component.$$.context : []),
            // everything else
            callbacks: blank_object(),
            dirty
        };
        let ready = false;
        $$.ctx = instance
            ? instance(component, prop_values, (i, ret, value = ret) => {
                if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                    if ($$.bound[i])
                        $$.bound[i](value);
                    if (ready)
                        make_dirty(component, i);
                }
                return ret;
            })
            : [];
        $$.update();
        ready = true;
        run_all($$.before_update);
        // `false` as a special case of no DOM component
        $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
        if (options.target) {
            if (options.hydrate) {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.l(children(options.target));
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.c();
            }
            if (options.intro)
                transition_in(component.$$.fragment);
            mount_component(component, options.target, options.anchor);
            flush();
        }
        set_current_component(parent_component);
    }
    class SvelteComponent {
        $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop;
        }
        $on(type, callback) {
            const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
            callbacks.push(callback);
            return () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1)
                    callbacks.splice(index, 1);
            };
        }
        $set() {
            // overridden by instance, if it has props
        }
    }

    function dispatch_dev(type, detail) {
        document.dispatchEvent(custom_event(type, detail));
    }
    function append_dev(target, node) {
        dispatch_dev("SvelteDOMInsert", { target, node });
        append(target, node);
    }
    function insert_dev(target, node, anchor) {
        dispatch_dev("SvelteDOMInsert", { target, node, anchor });
        insert(target, node, anchor);
    }
    function detach_dev(node) {
        dispatch_dev("SvelteDOMRemove", { node });
        detach(node);
    }
    function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation) {
        const modifiers = options === true ? ["capture"] : options ? Array.from(Object.keys(options)) : [];
        if (has_prevent_default)
            modifiers.push('preventDefault');
        if (has_stop_propagation)
            modifiers.push('stopPropagation');
        dispatch_dev("SvelteDOMAddEventListener", { node, event, handler, modifiers });
        const dispose = listen(node, event, handler, options);
        return () => {
            dispatch_dev("SvelteDOMRemoveEventListener", { node, event, handler, modifiers });
            dispose();
        };
    }
    function attr_dev(node, attribute, value) {
        attr(node, attribute, value);
        if (value == null)
            dispatch_dev("SvelteDOMRemoveAttribute", { node, attribute });
        else
            dispatch_dev("SvelteDOMSetAttribute", { node, attribute, value });
    }
    function set_data_dev(text, data) {
        data = '' + data;
        if (text.data === data)
            return;
        dispatch_dev("SvelteDOMSetData", { node: text, data });
        text.data = data;
    }
    class SvelteComponentDev extends SvelteComponent {
        constructor(options) {
            if (!options || (!options.target && !options.$$inline)) {
                throw new Error(`'target' is a required option`);
            }
            super();
        }
        $destroy() {
            super.$destroy();
            this.$destroy = () => {
                console.warn(`Component was already destroyed`); // eslint-disable-line no-console
            };
        }
    }

    /* src\Link.svelte generated by Svelte v3.16.7 */
    const file = "src\\Link.svelte";

    // (13:0) {:else}
    function create_else_block(ctx) {
    	let t_value = rul.str(/*href*/ ctx[0]) + "";
    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*href*/ 1 && t_value !== (t_value = rul.str(/*href*/ ctx[0]) + "")) set_data_dev(t, t_value);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block.name,
    		type: "else",
    		source: "(13:0) {:else}",
    		ctx
    	});

    	return block;
    }

    // (11:0) {#if rul.article(href)}
    function create_if_block(ctx) {
    	let a;
    	let t_value = rul.str(/*href*/ ctx[0]) + "";
    	let t;
    	let a_href_value;

    	const block = {
    		c: function create() {
    			a = element("a");
    			t = text(t_value);
    			attr_dev(a, "href", a_href_value = "##" + /*href*/ ctx[0]);
    			add_location(a, file, 11, 2, 172);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, a, anchor);
    			append_dev(a, t);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*href*/ 1 && t_value !== (t_value = rul.str(/*href*/ ctx[0]) + "")) set_data_dev(t, t_value);

    			if (dirty & /*href*/ 1 && a_href_value !== (a_href_value = "##" + /*href*/ ctx[0])) {
    				attr_dev(a, "href", a_href_value);
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(a);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block.name,
    		type: "if",
    		source: "(11:0) {#if rul.article(href)}",
    		ctx
    	});

    	return block;
    }

    function create_fragment(ctx) {
    	let show_if;
    	let if_block_anchor;

    	function select_block_type(ctx, dirty) {
    		if (show_if == null || dirty & /*href*/ 1) show_if = !!rul.article(/*href*/ ctx[0]);
    		if (show_if) return create_if_block;
    		return create_else_block;
    	}

    	let current_block_type = select_block_type(ctx, -1);
    	let if_block = current_block_type(ctx);

    	const block = {
    		c: function create() {
    			if_block.c();
    			if_block_anchor = empty();
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			if_block.m(target, anchor);
    			insert_dev(target, if_block_anchor, anchor);
    		},
    		p: function update(ctx, [dirty]) {
    			if (current_block_type === (current_block_type = select_block_type(ctx, dirty)) && if_block) {
    				if_block.p(ctx, dirty);
    			} else {
    				if_block.d(1);
    				if_block = current_block_type(ctx);

    				if (if_block) {
    					if_block.c();
    					if_block.m(if_block_anchor.parentNode, if_block_anchor);
    				}
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if_block.d(detaching);
    			if (detaching) detach_dev(if_block_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance($$self, $$props, $$invalidate) {
    	let { href } = $$props;
    	const writable_props = ["href"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Link> was created with unknown prop '${key}'`);
    	});

    	$$self.$set = $$props => {
    		if ("href" in $$props) $$invalidate(0, href = $$props.href);
    	};

    	$$self.$capture_state = () => {
    		return { href };
    	};

    	$$self.$inject_state = $$props => {
    		if ("href" in $$props) $$invalidate(0, href = $$props.href);
    	};

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty & /*href*/ 1) {
    			$: {
    				if (href && href.type) $$invalidate(0, href = href.type);
    			}
    		}
    	};

    	return [href];
    }

    class Link extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance, create_fragment, safe_not_equal, { href: 0 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Link",
    			options,
    			id: create_fragment.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || ({});

    		if (/*href*/ ctx[0] === undefined && !("href" in props)) {
    			console.warn("<Link> was created without expected prop 'href'");
    		}
    	}

    	get href() {
    		throw new Error("<Link>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set href(value) {
    		throw new Error("<Link>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\LinksPage.svelte generated by Svelte v3.16.7 */
    const file$1 = "src\\LinksPage.svelte";

    function get_each_context(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[5] = list[i];
    	return child_ctx;
    }

    // (14:0) {#if links && links.length > 0}
    function create_if_block$1(ctx) {
    	let t0;
    	let t1;
    	let div1;
    	let div0;
    	let ol;
    	let current;
    	let if_block0 = !/*title*/ ctx[1] && create_if_block_2(ctx);
    	let if_block1 = /*title*/ ctx[1] && create_if_block_1(ctx);
    	let each_value = /*sortedList*/ ctx[3];
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			if (if_block0) if_block0.c();
    			t0 = space();
    			if (if_block1) if_block1.c();
    			t1 = space();
    			div1 = element("div");
    			div0 = element("div");
    			ol = element("ol");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			add_location(ol, file$1, 28, 6, 675);
    			attr_dev(div0, "class", "cols");
    			add_location(div0, file$1, 27, 4, 649);
    			attr_dev(div1, "class", "links-page");
    			add_location(div1, file$1, 26, 2, 619);
    		},
    		m: function mount(target, anchor) {
    			if (if_block0) if_block0.m(target, anchor);
    			insert_dev(target, t0, anchor);
    			if (if_block1) if_block1.m(target, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, div1, anchor);
    			append_dev(div1, div0);
    			append_dev(div0, ol);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(ol, null);
    			}

    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (!/*title*/ ctx[1]) {
    				if (if_block0) {
    					if_block0.p(ctx, dirty);
    				} else {
    					if_block0 = create_if_block_2(ctx);
    					if_block0.c();
    					if_block0.m(t0.parentNode, t0);
    				}
    			} else if (if_block0) {
    				if_block0.d(1);
    				if_block0 = null;
    			}

    			if (/*title*/ ctx[1]) {
    				if (if_block1) {
    					if_block1.p(ctx, dirty);
    				} else {
    					if_block1 = create_if_block_1(ctx);
    					if_block1.c();
    					if_block1.m(t1.parentNode, t1);
    				}
    			} else if (if_block1) {
    				if_block1.d(1);
    				if_block1 = null;
    			}

    			if (dirty & /*sortedList*/ 8) {
    				each_value = /*sortedList*/ ctx[3];
    				let i;

    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(ol, null);
    					}
    				}

    				group_outros();

    				for (i = each_value.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;

    			for (let i = 0; i < each_value.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},
    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (if_block0) if_block0.d(detaching);
    			if (detaching) detach_dev(t0);
    			if (if_block1) if_block1.d(detaching);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(div1);
    			destroy_each(each_blocks, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$1.name,
    		type: "if",
    		source: "(14:0) {#if links && links.length > 0}",
    		ctx
    	});

    	return block;
    }

    // (15:2) {#if !title}
    function create_if_block_2(ctx) {
    	let div;
    	let button;
    	let t;
    	let button_style_value;
    	let dispose;

    	const block = {
    		c: function create() {
    			div = element("div");
    			button = element("button");
    			t = text("A-Z");
    			attr_dev(button, "style", button_style_value = /*sorted*/ ctx[2] ? "" : "text-decoration:line-through");
    			add_location(button, file$1, 16, 6, 376);
    			attr_dev(div, "class", "links-page-button");
    			add_location(div, file$1, 15, 4, 337);
    			dispose = listen_dev(button, "click", /*click_handler*/ ctx[4], false, false, false);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, button);
    			append_dev(button, t);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*sorted*/ 4 && button_style_value !== (button_style_value = /*sorted*/ ctx[2] ? "" : "text-decoration:line-through")) {
    				attr_dev(button, "style", button_style_value);
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			dispose();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_2.name,
    		type: "if",
    		source: "(15:2) {#if !title}",
    		ctx
    	});

    	return block;
    }

    // (24:2) {#if title}
    function create_if_block_1(ctx) {
    	let div;
    	let t;

    	const block = {
    		c: function create() {
    			div = element("div");
    			t = text(/*title*/ ctx[1]);
    			attr_dev(div, "class", "links-page-header");
    			add_location(div, file$1, 24, 4, 562);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, t);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*title*/ 2) set_data_dev(t, /*title*/ ctx[1]);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_1.name,
    		type: "if",
    		source: "(24:2) {#if title}",
    		ctx
    	});

    	return block;
    }

    // (30:8) {#each sortedList as option}
    function create_each_block(ctx) {
    	let li;
    	let t;
    	let current;

    	const link = new Link({
    			props: { href: /*option*/ ctx[5] },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			li = element("li");
    			create_component(link.$$.fragment);
    			t = space();
    			add_location(li, file$1, 30, 10, 729);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, li, anchor);
    			mount_component(link, li, null);
    			append_dev(li, t);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const link_changes = {};
    			if (dirty & /*sortedList*/ 8) link_changes.href = /*option*/ ctx[5];
    			link.$set(link_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(link.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(link.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(li);
    			destroy_component(link);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block.name,
    		type: "each",
    		source: "(30:8) {#each sortedList as option}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$1(ctx) {
    	let if_block_anchor;
    	let current;
    	let if_block = /*links*/ ctx[0] && /*links*/ ctx[0].length > 0 && create_if_block$1(ctx);

    	const block = {
    		c: function create() {
    			if (if_block) if_block.c();
    			if_block_anchor = empty();
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			if (if_block) if_block.m(target, anchor);
    			insert_dev(target, if_block_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (/*links*/ ctx[0] && /*links*/ ctx[0].length > 0) {
    				if (if_block) {
    					if_block.p(ctx, dirty);
    					transition_in(if_block, 1);
    				} else {
    					if_block = create_if_block$1(ctx);
    					if_block.c();
    					transition_in(if_block, 1);
    					if_block.m(if_block_anchor.parentNode, if_block_anchor);
    				}
    			} else if (if_block) {
    				group_outros();

    				transition_out(if_block, 1, 1, () => {
    					if_block = null;
    				});

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (if_block) if_block.d(detaching);
    			if (detaching) detach_dev(if_block_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$1.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$1($$self, $$props, $$invalidate) {
    	let { links } = $$props;
    	let { title = null } = $$props;
    	let sorted = false;
    	const writable_props = ["links", "title"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<LinksPage> was created with unknown prop '${key}'`);
    	});

    	const click_handler = e => $$invalidate(2, sorted = !sorted);

    	$$self.$set = $$props => {
    		if ("links" in $$props) $$invalidate(0, links = $$props.links);
    		if ("title" in $$props) $$invalidate(1, title = $$props.title);
    	};

    	$$self.$capture_state = () => {
    		return { links, title, sorted, sortedList };
    	};

    	$$self.$inject_state = $$props => {
    		if ("links" in $$props) $$invalidate(0, links = $$props.links);
    		if ("title" in $$props) $$invalidate(1, title = $$props.title);
    		if ("sorted" in $$props) $$invalidate(2, sorted = $$props.sorted);
    		if ("sortedList" in $$props) $$invalidate(3, sortedList = $$props.sortedList);
    	};

    	let sortedList;

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty & /*sorted, links*/ 5) {
    			$: $$invalidate(3, sortedList = sorted
    			? links.slice().sort((a, b) => rul.str(a) > rul.str(b) ? 1 : -1)
    			: links);
    		}
    	};

    	return [links, title, sorted, sortedList, click_handler];
    }

    class LinksPage extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$1, create_fragment$1, safe_not_equal, { links: 0, title: 1 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "LinksPage",
    			options,
    			id: create_fragment$1.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || ({});

    		if (/*links*/ ctx[0] === undefined && !("links" in props)) {
    			console.warn("<LinksPage> was created without expected prop 'links'");
    		}
    	}

    	get links() {
    		throw new Error("<LinksPage>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set links(value) {
    		throw new Error("<LinksPage>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get title() {
    		throw new Error("<LinksPage>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set title(value) {
    		throw new Error("<LinksPage>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\Intro.svelte generated by Svelte v3.16.7 */
    const file$2 = "src\\Intro.svelte";

    function create_fragment$2(ctx) {
    	let div19;
    	let div14;
    	let img0;
    	let img0_src_value;
    	let t0;
    	let t1_value = rul.str("Welcome onboard, seagal! Take your bunk at da orlop and have some X-Grog, yarrr!") + "";
    	let t1;
    	let t2;
    	let br0;
    	let t3;
    	let h40;
    	let t5;
    	let t6_value = rul.str("X-Piratez is a total conversion mod designed for OpenXcom, a free open-source reimplementation of UFO") + "";
    	let t6;
    	let t7;
    	let t8_value = rul.str("Enemy Unknown (1994) and X-Com") + "";
    	let t8;
    	let t9;
    	let t10_value = rul.str("Terror From The Deep. There are major gameplay differences, as well as a complete overhaul of research, manufacture, base facilities, and so on. X-Piratez is designed for the veteran X-Com player seeking a much longer and complex campaign.") + "";
    	let t10;
    	let br1;
    	let t11;
    	let br2;
    	let t12;
    	let t13_value = rul.str("The year is 2601. The Earth has been long conquered by aliens. You run a gang of mutant pirates. Rob aliens and their human proxies for fun, profit and power. X-Piratez is the biggest OpenXcom mod to date.") + "";
    	let t13;
    	let br3;
    	let t14;
    	let br4;
    	let t15;
    	let t16_value = rul.str("We appreciate Anna Zemlina for her fantastic artworks created especially for the mod.") + "";
    	let t16;
    	let t17;
    	let div1;
    	let div0;
    	let a0;
    	let img1;
    	let img1_src_value;
    	let t18;
    	let a1;
    	let img2;
    	let img2_src_value;
    	let t19;
    	let a2;
    	let img3;
    	let img3_src_value;
    	let t20;
    	let a3;
    	let img4;
    	let img4_src_value;
    	let t21;
    	let h1;
    	let t24;
    	let div2;
    	let h2;
    	let t26;
    	let ul0;
    	let li0;
    	let t28;
    	let li1;
    	let t34;
    	let li2;
    	let t36;
    	let li3;
    	let t38;
    	let li4;
    	let t40;
    	let li5;
    	let t42;
    	let h41;
    	let t43;
    	let div5;
    	let div3;
    	let t47;
    	let div4;
    	let t50;
    	let h42;
    	let t51;
    	let div6;
    	let h3;
    	let img5;
    	let img5_src_value;
    	let t52_value = rul.str("WARNINGS") + "";
    	let t52;
    	let t53;
    	let ul1;
    	let li6;
    	let t55;
    	let li7;
    	let t57;
    	let li8;
    	let t59;
    	let li9;
    	let t61;
    	let li10;
    	let t63;
    	let li11;
    	let t65;
    	let li12;
    	let t67;
    	let br5;
    	let t68;
    	let div9;
    	let div7;
    	let img6;
    	let img6_src_value;
    	let t69;
    	let br6;
    	let t70;
    	let strong0;
    	let t72;
    	let br7;
    	let t73;
    	let t74_value = rul.str("mod author, the Grand Master") + "";
    	let t74;
    	let t75;
    	let br8;
    	let t76;
    	let br9;
    	let t77;
    	let t78_value = rul.str("You can send your donations through PayPal to") + "";
    	let t78;
    	let t79;
    	let br10;
    	let t80;
    	let t81;
    	let div8;
    	let img7;
    	let img7_src_value;
    	let t82;
    	let br11;
    	let t83;
    	let strong1;
    	let t85;
    	let br12;
    	let t86;
    	let t87_value = rul.str("chief OXCE programmer, the Wise Alchemist") + "";
    	let t87;
    	let t88;
    	let br13;
    	let t89;
    	let br14;
    	let t90;
    	let t91_value = rul.str("You can send your donations through PayPal to") + "";
    	let t91;
    	let t92;
    	let br15;
    	let t93;
    	let t94;
    	let br16;
    	let t95;
    	let h43;
    	let t96;
    	let div12;
    	let div10;
    	let img8;
    	let img8_src_value;
    	let t97;
    	let br17;
    	let t98;
    	let strong2;
    	let t100;
    	let br18;
    	let t101;
    	let t102_value = rul.str("All mods are translated by the players") + "";
    	let t102;
    	let t103;
    	let br19;
    	let t104;
    	let br20;
    	let t105;
    	let t106_value = rul.str("OpenXcom needs your translation skills!") + "";
    	let t106;
    	let t107;
    	let div11;
    	let img9;
    	let img9_src_value;
    	let t108;
    	let br21;
    	let t109;
    	let strong3;
    	let t111;
    	let br22;
    	let t112;
    	let t113_value = rul.str("Community & support") + "";
    	let t113;
    	let t114;
    	let br23;
    	let t115;
    	let br24;
    	let t116;
    	let t117_value = rul.str("Here you can ask any questions associated with this site.") + "";
    	let t117;
    	let t118;
    	let br25;
    	let t119;
    	let t120_value = rul.str("Ping @Kato_guardian and we will hear you.") + "";
    	let t120;
    	let t121;
    	let br26;
    	let t122;
    	let h44;
    	let t123;
    	let div13;
    	let t124_value = rul.str("Thanks to") + "";
    	let t124;
    	let t125;
    	let br27;
    	let t126;
    	let t127_value = rul.str("for translating the homepage and interfaces into non-English languages") + "";
    	let t127;
    	let t128;
    	let br28;
    	let t129;
    	let t130_value = rul.str("Wiki is powered by") + "";
    	let t130;
    	let t131;
    	let a4;
    	let t133;
    	let br29;
    	let t134;
    	let t135_value = rul.str("Mobile version by") + "";
    	let t135;
    	let t136;
    	let a5;
    	let t138;
    	let t139;
    	let div18;
    	let div16;
    	let img10;
    	let img10_src_value;
    	let t140;
    	let div15;
    	let t142;
    	let div17;
    	let img11;
    	let img11_src_value;
    	let t143;
    	let img12;
    	let img12_src_value;
    	let t144;
    	let img13;
    	let img13_src_value;
    	let t145;
    	let img14;
    	let img14_src_value;
    	let t146;
    	let img15;
    	let img15_src_value;
    	let t147;
    	let img16;
    	let img16_src_value;
    	let t148;
    	let img17;
    	let img17_src_value;
    	let t149;
    	let img18;
    	let img18_src_value;
    	let t150;
    	let img19;
    	let img19_src_value;

    	const block = {
    		c: function create() {
    			div19 = element("div");
    			div14 = element("div");
    			img0 = element("img");
    			t0 = space();
    			t1 = text(t1_value);
    			t2 = space();
    			br0 = element("br");
    			t3 = space();
    			h40 = element("h4");
    			h40.textContent = `${rul.str("Arrr, what da FLUFF is X-Piratez stuff?")}`;
    			t5 = space();
    			t6 = text(t6_value);
    			t7 = text(": ");
    			t8 = text(t8_value);
    			t9 = text(": ");
    			t10 = text(t10_value);
    			br1 = element("br");
    			t11 = space();
    			br2 = element("br");
    			t12 = space();
    			t13 = text(t13_value);
    			br3 = element("br");
    			t14 = space();
    			br4 = element("br");
    			t15 = space();
    			t16 = text(t16_value);
    			t17 = space();
    			div1 = element("div");
    			div0 = element("div");
    			a0 = element("a");
    			img1 = element("img");
    			t18 = space();
    			a1 = element("a");
    			img2 = element("img");
    			t19 = space();
    			a2 = element("a");
    			img3 = element("img");
    			t20 = space();
    			a3 = element("a");
    			img4 = element("img");
    			t21 = space();
    			h1 = element("h1");
    			h1.textContent = `${rul.str("Current mod version is")} K3`;
    			t24 = space();
    			div2 = element("div");
    			h2 = element("h2");
    			h2.textContent = `${rul.str("PC Installation & Update Guide")}`;
    			t26 = space();
    			ul0 = element("ul");
    			li0 = element("li");
    			li0.textContent = `${rul.str("Unzip the archive to a NEW folder. It strongly recommended not merging the contents with your existing Dioxine_XPiratez folder, as this can lead to various problems.")}`;
    			t28 = space();
    			li1 = element("li");
    			li1.textContent = `${rul.str("You need your files of the original UFO")}: ${rul.str("Enemy Unknown or X-Com")}: ${rul.str("UFO Defense game (either DOS or Steam version) to launch the mod. Copy them to the Dioxine_XPiratez\\UFO folder.")}`;
    			t34 = space();
    			li2 = element("li");
    			li2.textContent = `${rul.str("X-Piratez is distributed with the compatible OXCE engine version. There is no need to replace or upgrade OXCE, as other builds may not be compatible with your version of X-Piratez. Because of that, we recommend you turn off the 'Automatic update check' user option (options\\advanced\\general.) This option does not check for updates of the mod itself.")}`;
    			t36 = space();
    			li3 = element("li");
    			li3.textContent = `${rul.str("If you already have X-Piratez saves, you can copy them from the old Dioxine_XPiratez\\user\\piratez folder to the new one.")}`;
    			t38 = space();
    			li4 = element("li");
    			li4.textContent = `${rul.str("Optionally, you can also copy user settings from the old Dioxine_XPiratez\\user folder to the new one (options.cfg file.)")}`;
    			t40 = space();
    			li5 = element("li");
    			li5.textContent = `${rul.str("Optionally, don't delete your outdated version. Just in case.")}`;
    			t42 = space();
    			h41 = element("h4");
    			t43 = space();
    			div5 = element("div");
    			div3 = element("div");

    			div3.textContent = `
          "${rul.str("READ OR DIE. The Bootypedia is your friend. Trust me on that.")}"
        `;

    			t47 = space();
    			div4 = element("div");

    			div4.textContent = `
          – Dioxine, ${rul.str("mod author, lead designer")}`;

    			t50 = space();
    			h42 = element("h4");
    			t51 = space();
    			div6 = element("div");
    			h3 = element("h3");
    			img5 = element("img");
    			t52 = text(t52_value);
    			t53 = space();
    			ul1 = element("ul");
    			li6 = element("li");
    			li6.textContent = `${rul.str("Contains some NUDITY of both sexes. You've been warned. Also take note this is not any porn-quality T&A since it's not a porn game.")}`;
    			t55 = space();
    			li7 = element("li");
    			li7.textContent = `${rul.str("Do not install OpenXcom nightlies! They are not compatible with X-Piratez. (Requires OXCE version.)")}`;
    			t57 = space();
    			li8 = element("li");
    			li8.textContent = `${rul.str("If you absolutely can't stand bikini babes fighting Nazis with chainsaws, you may suffer some trauma.")}`;
    			t59 = space();
    			li9 = element("li");
    			li9.textContent = `${rul.str("If you're looking for a tactical game that doesn't require brains, try DOTA instead.")}`;
    			t61 = space();
    			li10 = element("li");
    			li10.textContent = `${rul.str("A single campaign might take as much as 400 hours.")}`;
    			t63 = space();
    			li11 = element("li");
    			li11.textContent = `${rul.str("Contains riddles. Not everything is what it seems.")}`;
    			t65 = space();
    			li12 = element("li");
    			li12.textContent = `${rul.str("Read or Die.")}`;
    			t67 = space();
    			br5 = element("br");
    			t68 = space();
    			div9 = element("div");
    			div7 = element("div");
    			img6 = element("img");
    			t69 = space();
    			br6 = element("br");
    			t70 = space();
    			strong0 = element("strong");
    			strong0.textContent = "Dioxine";
    			t72 = space();
    			br7 = element("br");
    			t73 = space();
    			t74 = text(t74_value);
    			t75 = space();
    			br8 = element("br");
    			t76 = space();
    			br9 = element("br");
    			t77 = space();
    			t78 = text(t78_value);
    			t79 = space();
    			br10 = element("br");
    			t80 = text("\n        GSDioxine@gmail.com");
    			t81 = space();
    			div8 = element("div");
    			img7 = element("img");
    			t82 = space();
    			br11 = element("br");
    			t83 = space();
    			strong1 = element("strong");
    			strong1.textContent = "Meridian";
    			t85 = space();
    			br12 = element("br");
    			t86 = space();
    			t87 = text(t87_value);
    			t88 = space();
    			br13 = element("br");
    			t89 = space();
    			br14 = element("br");
    			t90 = space();
    			t91 = text(t91_value);
    			t92 = space();
    			br15 = element("br");
    			t93 = text("\n        martin.dzurenko@gmail.com");
    			t94 = space();
    			br16 = element("br");
    			t95 = space();
    			h43 = element("h4");
    			t96 = space();
    			div12 = element("div");
    			div10 = element("div");
    			img8 = element("img");
    			t97 = space();
    			br17 = element("br");
    			t98 = space();
    			strong2 = element("strong");
    			strong2.textContent = `${rul.str("Join the Transifex team!")}`;
    			t100 = space();
    			br18 = element("br");
    			t101 = space();
    			t102 = text(t102_value);
    			t103 = space();
    			br19 = element("br");
    			t104 = space();
    			br20 = element("br");
    			t105 = space();
    			t106 = text(t106_value);
    			t107 = space();
    			div11 = element("div");
    			img9 = element("img");
    			t108 = space();
    			br21 = element("br");
    			t109 = space();
    			strong3 = element("strong");
    			strong3.textContent = "X-Piratez Discord";
    			t111 = space();
    			br22 = element("br");
    			t112 = space();
    			t113 = text(t113_value);
    			t114 = space();
    			br23 = element("br");
    			t115 = space();
    			br24 = element("br");
    			t116 = space();
    			t117 = text(t117_value);
    			t118 = space();
    			br25 = element("br");
    			t119 = space();
    			t120 = text(t120_value);
    			t121 = space();
    			br26 = element("br");
    			t122 = space();
    			h44 = element("h4");
    			t123 = space();
    			div13 = element("div");
    			t124 = text(t124_value);
    			t125 = text(" Bartojan, Dorothy Haze, Mey-ow & Solarius Scorch\n    ");
    			br27 = element("br");
    			t126 = space();
    			t127 = text(t127_value);
    			t128 = text("!\n    ");
    			br28 = element("br");
    			t129 = space();
    			t130 = text(t130_value);
    			t131 = space();
    			a4 = element("a");
    			a4.textContent = "Baturinsky's XPedia";
    			t133 = text(".\n    ");
    			br29 = element("br");
    			t134 = space();
    			t135 = text(t135_value);
    			t136 = space();
    			a5 = element("a");
    			a5.textContent = `${rul.str("Finnik, XCF junior developer")}`;
    			t138 = text(".");
    			t139 = space();
    			div18 = element("div");
    			div16 = element("div");
    			img10 = element("img");
    			t140 = space();
    			div15 = element("div");
    			div15.textContent = "#StandWithXPZ";
    			t142 = space();
    			div17 = element("div");
    			img11 = element("img");
    			t143 = space();
    			img12 = element("img");
    			t144 = space();
    			img13 = element("img");
    			t145 = space();
    			img14 = element("img");
    			t146 = space();
    			img15 = element("img");
    			t147 = space();
    			img16 = element("img");
    			t148 = space();
    			img17 = element("img");
    			t149 = space();
    			img18 = element("img");
    			t150 = space();
    			img19 = element("img");
    			attr_dev(img0, "class", "title-image");
    			if (img0.src !== (img0_src_value = "xpedia/images/Title.png")) attr_dev(img0, "src", img0_src_value);
    			attr_dev(img0, "alt", "Title art by Anna Zemlina");
    			attr_dev(img0, "title", "Art by Anna Zemlina. X-Piratez logo by Alla Panova.");
    			add_location(img0, file$2, 7, 4, 178);
    			add_location(br0, file$2, 9, 4, 430);
    			add_location(h40, file$2, 10, 4, 440);
    			add_location(br1, file$2, 11, 419, 921);
    			add_location(br2, file$2, 12, 6, 933);
    			add_location(br3, file$2, 13, 224, 1163);
    			add_location(br4, file$2, 14, 6, 1175);
    			attr_dev(img1, "class", "media-icon");
    			if (img1.src !== (img1_src_value = "xpedia/images/discord-256.png")) attr_dev(img1, "src", img1_src_value);
    			attr_dev(img1, "alt", "Discord");
    			attr_dev(img1, "title", "Discord server");
    			add_location(img1, file$2, 18, 72, 1423);
    			attr_dev(a0, "href", "https://discordapp.com/invite/b5KXPvX");
    			attr_dev(a0, "target", "_blank");
    			add_location(a0, file$2, 18, 8, 1359);
    			attr_dev(img2, "class", "media-icon");
    			if (img2.src !== (img2_src_value = "xpedia/images/FG4SCQ58YFXV.png")) attr_dev(img2, "src", img2_src_value);
    			attr_dev(img2, "alt", "Forum");
    			attr_dev(img2, "title", "Forum");
    			add_location(img2, file$2, 19, 87, 1612);
    			attr_dev(a1, "href", "https://openxcom.org/forum/index.php/board,18.0.html");
    			attr_dev(a1, "target", "_blank");
    			add_location(a1, file$2, 19, 8, 1533);
    			attr_dev(img3, "class", "media-icon");
    			if (img3.src !== (img3_src_value = "xpedia/images/vk-256.png")) attr_dev(img3, "src", img3_src_value);
    			attr_dev(img3, "alt", "VK");
    			attr_dev(img3, "title", "VK community");
    			add_location(img3, file$2, 20, 58, 1762);
    			attr_dev(a2, "href", "https://vk.com/xpiratez");
    			attr_dev(a2, "target", "_blank");
    			add_location(a2, file$2, 20, 8, 1712);
    			attr_dev(img4, "class", "media-icon");
    			if (img4.src !== (img4_src_value = "xpedia/images/Emerald.png")) attr_dev(img4, "src", img4_src_value);
    			attr_dev(img4, "alt", "Anna Zemlina (artist)");
    			attr_dev(img4, "title", "Anna Zemlina (artist)");
    			add_location(img4, file$2, 21, 77, 1929);
    			attr_dev(a3, "href", "https://www.deviantart.com/emerald--weapon");
    			attr_dev(a3, "target", "_blank");
    			add_location(a3, file$2, 21, 8, 1860);
    			attr_dev(div0, "class", "column media-bar");
    			add_location(div0, file$2, 17, 6, 1320);
    			attr_dev(div1, "class", "columns");
    			add_location(div1, file$2, 16, 6, 1292);
    			add_location(h1, file$2, 24, 4, 2076);
    			add_location(h2, file$2, 26, 6, 2156);
    			add_location(li0, file$2, 29, 8, 2376);
    			add_location(li1, file$2, 30, 8, 2572);
    			add_location(li2, file$2, 31, 8, 2806);
    			add_location(li3, file$2, 32, 8, 3189);
    			add_location(li4, file$2, 33, 8, 3342);
    			add_location(li5, file$2, 34, 8, 3494);
    			attr_dev(ul0, "class", "guide");
    			add_location(ul0, file$2, 27, 6, 2215);
    			attr_dev(div2, "class", "guide");
    			add_location(div2, file$2, 25, 6, 2130);
    			add_location(h41, file$2, 37, 4, 3605);
    			attr_dev(div3, "class", "quote");
    			add_location(div3, file$2, 39, 8, 3636);
    			attr_dev(div4, "class", "qsign");
    			add_location(div4, file$2, 42, 8, 3766);
    			add_location(div5, file$2, 38, 6, 3622);
    			add_location(h42, file$2, 46, 6, 3881);
    			attr_dev(img5, "class", "warnings-icon");
    			if (img5.src !== (img5_src_value = "xpedia/images/warning.png")) attr_dev(img5, "src", img5_src_value);
    			attr_dev(img5, "alt", "!!");
    			add_location(img5, file$2, 48, 10, 3931);
    			add_location(h3, file$2, 48, 6, 3927);
    			add_location(li6, file$2, 50, 8, 4062);
    			add_location(li7, file$2, 51, 8, 4224);
    			add_location(li8, file$2, 52, 8, 4354);
    			add_location(li9, file$2, 53, 8, 4486);
    			add_location(li10, file$2, 54, 8, 4601);
    			add_location(li11, file$2, 55, 8, 4682);
    			add_location(li12, file$2, 56, 8, 4763);
    			attr_dev(ul1, "class", "warnings");
    			add_location(ul1, file$2, 49, 6, 4032);
    			attr_dev(div6, "class", "warnings");
    			add_location(div6, file$2, 47, 6, 3898);
    			add_location(br5, file$2, 59, 4, 4825);
    			attr_dev(img6, "class", "extlink-icon");
    			if (img6.src !== (img6_src_value = "xpedia/images/Dioxine.png")) attr_dev(img6, "src", img6_src_value);
    			attr_dev(img6, "alt", "Dioxine");
    			add_location(img6, file$2, 63, 8, 4995);
    			add_location(br6, file$2, 64, 8, 5076);
    			attr_dev(strong0, "class", "man");
    			add_location(strong0, file$2, 65, 8, 5089);
    			add_location(br7, file$2, 66, 8, 5134);
    			add_location(br8, file$2, 68, 8, 5197);
    			add_location(br9, file$2, 69, 8, 5210);
    			add_location(br10, file$2, 71, 8, 5290);
    			attr_dev(div7, "class", "extlink");
    			attr_dev(div7, "onclick", "window.open('https://www.paypal.com/myaccount/transfer/homepage', '_blank')");
    			add_location(div7, file$2, 62, 6, 4879);
    			attr_dev(img7, "class", "extlink-icon");
    			if (img7.src !== (img7_src_value = "xpedia/images/Meridian.png")) attr_dev(img7, "src", img7_src_value);
    			attr_dev(img7, "alt", "Meridian");
    			add_location(img7, file$2, 76, 8, 5475);
    			add_location(br11, file$2, 77, 8, 5558);
    			attr_dev(strong1, "class", "man");
    			add_location(strong1, file$2, 78, 8, 5571);
    			add_location(br12, file$2, 79, 8, 5617);
    			add_location(br13, file$2, 81, 8, 5693);
    			add_location(br14, file$2, 82, 8, 5706);
    			add_location(br15, file$2, 84, 8, 5786);
    			attr_dev(div8, "class", "extlink");
    			attr_dev(div8, "onclick", "window.open('https://www.paypal.com/myaccount/transfer/homepage', '_blank')");
    			add_location(div8, file$2, 75, 6, 5359);
    			attr_dev(div9, "class", "cellar");
    			add_location(div9, file$2, 60, 4, 4835);
    			add_location(br16, file$2, 88, 4, 5859);
    			add_location(h43, file$2, 89, 4, 5869);
    			attr_dev(img8, "class", "extlink-icon");
    			if (img8.src !== (img8_src_value = "xpedia/images/TX.png")) attr_dev(img8, "src", img8_src_value);
    			attr_dev(img8, "alt", "Transifex");
    			add_location(img8, file$2, 93, 8, 6052);
    			add_location(br17, file$2, 94, 8, 6130);
    			attr_dev(strong2, "class", "man");
    			add_location(strong2, file$2, 95, 8, 6143);
    			add_location(br18, file$2, 96, 8, 6218);
    			add_location(br19, file$2, 98, 8, 6291);
    			add_location(br20, file$2, 99, 8, 6304);
    			attr_dev(div10, "class", "extlink");
    			attr_dev(div10, "onclick", "window.open('https://www.transifex.com/openxcom/openxcom-mods/dashboard', '_blank')");
    			add_location(div10, file$2, 92, 6, 5928);
    			attr_dev(img9, "class", "extlink-icon");
    			if (img9.src !== (img9_src_value = "xpedia/images/XPZ.png")) attr_dev(img9, "src", img9_src_value);
    			attr_dev(img9, "alt", "Troubleshooting here");
    			add_location(img9, file$2, 104, 8, 6515);
    			add_location(br21, file$2, 105, 8, 6605);
    			attr_dev(strong3, "class", "man");
    			add_location(strong3, file$2, 106, 8, 6618);
    			add_location(br22, file$2, 107, 8, 6673);
    			add_location(br23, file$2, 109, 8, 6727);
    			add_location(br24, file$2, 110, 8, 6748);
    			add_location(br25, file$2, 112, 8, 6840);
    			attr_dev(div11, "class", "extlink");
    			attr_dev(div11, "onclick", "window.open('https://discordapp.com/invite/b5KXPvX', '_blank')");
    			add_location(div11, file$2, 103, 6, 6412);
    			attr_dev(div12, "class", "cellar");
    			add_location(div12, file$2, 90, 4, 5884);
    			add_location(br26, file$2, 116, 4, 6943);
    			add_location(h44, file$2, 117, 4, 6953);
    			add_location(br27, file$2, 119, 4, 7070);
    			add_location(br28, file$2, 121, 4, 7169);
    			attr_dev(a4, "href", "https://github.com/baturinsky/xpedia/");
    			attr_dev(a4, "target", "_blank");
    			add_location(a4, file$2, 122, 36, 7211);
    			add_location(br29, file$2, 123, 4, 7304);
    			attr_dev(a5, "href", "http://thexcomfiles.xyz/");
    			attr_dev(a5, "target", "_blank");
    			add_location(a5, file$2, 124, 35, 7345);
    			attr_dev(div13, "class", "credits");
    			add_location(div13, file$2, 118, 4, 6973);
    			attr_dev(div14, "class", "column is-full-touch is-9-desktop");
    			add_location(div14, file$2, 6, 2, 126);
    			attr_dev(img10, "class", "imgbox");
    			if (img10.src !== (img10_src_value = "xpedia/images/XFox.png")) attr_dev(img10, "src", img10_src_value);
    			attr_dev(img10, "alt", "#StandWithXPZ");
    			attr_dev(img10, "title", "Download links will be available soon");
    			add_location(img10, file$2, 129, 6, 7577);
    			attr_dev(div15, "class", "rejoice");
    			add_location(div15, file$2, 130, 6, 7699);
    			attr_dev(div16, "class", "imgcol");
    			set_style(div16, "background-color", "#232727");
    			add_location(div16, file$2, 128, 2, 7517);
    			attr_dev(img11, "class", "imgbox");
    			if (img11.src !== (img11_src_value = "xpedia/images/screen035.png")) attr_dev(img11, "src", img11_src_value);
    			attr_dev(img11, "alt", "screen035.png");
    			add_location(img11, file$2, 135, 6, 8179);
    			attr_dev(img12, "class", "imgbox");
    			if (img12.src !== (img12_src_value = "xpedia/images/screen226.png")) attr_dev(img12, "src", img12_src_value);
    			attr_dev(img12, "alt", "screen226.png");
    			add_location(img12, file$2, 136, 6, 8260);
    			attr_dev(img13, "class", "imgbox");
    			if (img13.src !== (img13_src_value = "xpedia/images/screen1209.png")) attr_dev(img13, "src", img13_src_value);
    			attr_dev(img13, "alt", "screen1209.png");
    			add_location(img13, file$2, 137, 6, 8341);
    			attr_dev(img14, "class", "imgbox");
    			if (img14.src !== (img14_src_value = "xpedia/images/screen164.png")) attr_dev(img14, "src", img14_src_value);
    			attr_dev(img14, "alt", "screen164.png");
    			add_location(img14, file$2, 138, 6, 8424);
    			attr_dev(img15, "class", "imgbox");
    			if (img15.src !== (img15_src_value = "xpedia/images/screen757.png")) attr_dev(img15, "src", img15_src_value);
    			attr_dev(img15, "alt", "screen757.png");
    			add_location(img15, file$2, 139, 6, 8505);
    			attr_dev(img16, "class", "imgbox");
    			if (img16.src !== (img16_src_value = "xpedia/images/screen1325.png")) attr_dev(img16, "src", img16_src_value);
    			attr_dev(img16, "alt", "screen1325.png");
    			add_location(img16, file$2, 140, 6, 8586);
    			attr_dev(img17, "class", "imgbox");
    			if (img17.src !== (img17_src_value = "xpedia/images/screen135.png")) attr_dev(img17, "src", img17_src_value);
    			attr_dev(img17, "alt", "screen135.png");
    			add_location(img17, file$2, 141, 6, 8669);
    			attr_dev(img18, "class", "imgbox");
    			if (img18.src !== (img18_src_value = "xpedia/images/screen692.png")) attr_dev(img18, "src", img18_src_value);
    			attr_dev(img18, "alt", "screen692.png");
    			add_location(img18, file$2, 142, 6, 8750);
    			attr_dev(img19, "class", "imgbox");
    			if (img19.src !== (img19_src_value = "xpedia/images/screen064.png")) attr_dev(img19, "src", img19_src_value);
    			attr_dev(img19, "alt", "screen064.png");
    			add_location(img19, file$2, 143, 6, 8831);
    			attr_dev(div17, "class", "imgcol");
    			add_location(div17, file$2, 134, 4, 8152);
    			attr_dev(div18, "class", "column is-hidden-touch is-3-desktop");
    			add_location(div18, file$2, 127, 2, 7465);
    			attr_dev(div19, "class", "columns");
    			add_location(div19, file$2, 5, 0, 102);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div19, anchor);
    			append_dev(div19, div14);
    			append_dev(div14, img0);
    			append_dev(div14, t0);
    			append_dev(div14, t1);
    			append_dev(div14, t2);
    			append_dev(div14, br0);
    			append_dev(div14, t3);
    			append_dev(div14, h40);
    			append_dev(div14, t5);
    			append_dev(div14, t6);
    			append_dev(div14, t7);
    			append_dev(div14, t8);
    			append_dev(div14, t9);
    			append_dev(div14, t10);
    			append_dev(div14, br1);
    			append_dev(div14, t11);
    			append_dev(div14, br2);
    			append_dev(div14, t12);
    			append_dev(div14, t13);
    			append_dev(div14, br3);
    			append_dev(div14, t14);
    			append_dev(div14, br4);
    			append_dev(div14, t15);
    			append_dev(div14, t16);
    			append_dev(div14, t17);
    			append_dev(div14, div1);
    			append_dev(div1, div0);
    			append_dev(div0, a0);
    			append_dev(a0, img1);
    			append_dev(div0, t18);
    			append_dev(div0, a1);
    			append_dev(a1, img2);
    			append_dev(div0, t19);
    			append_dev(div0, a2);
    			append_dev(a2, img3);
    			append_dev(div0, t20);
    			append_dev(div0, a3);
    			append_dev(a3, img4);
    			append_dev(div14, t21);
    			append_dev(div14, h1);
    			append_dev(div14, t24);
    			append_dev(div14, div2);
    			append_dev(div2, h2);
    			append_dev(div2, t26);
    			append_dev(div2, ul0);
    			append_dev(ul0, li0);
    			append_dev(ul0, t28);
    			append_dev(ul0, li1);
    			append_dev(ul0, t34);
    			append_dev(ul0, li2);
    			append_dev(ul0, t36);
    			append_dev(ul0, li3);
    			append_dev(ul0, t38);
    			append_dev(ul0, li4);
    			append_dev(ul0, t40);
    			append_dev(ul0, li5);
    			append_dev(div14, t42);
    			append_dev(div14, h41);
    			append_dev(div14, t43);
    			append_dev(div14, div5);
    			append_dev(div5, div3);
    			append_dev(div5, t47);
    			append_dev(div5, div4);
    			append_dev(div14, t50);
    			append_dev(div14, h42);
    			append_dev(div14, t51);
    			append_dev(div14, div6);
    			append_dev(div6, h3);
    			append_dev(h3, img5);
    			append_dev(h3, t52);
    			append_dev(div6, t53);
    			append_dev(div6, ul1);
    			append_dev(ul1, li6);
    			append_dev(ul1, t55);
    			append_dev(ul1, li7);
    			append_dev(ul1, t57);
    			append_dev(ul1, li8);
    			append_dev(ul1, t59);
    			append_dev(ul1, li9);
    			append_dev(ul1, t61);
    			append_dev(ul1, li10);
    			append_dev(ul1, t63);
    			append_dev(ul1, li11);
    			append_dev(ul1, t65);
    			append_dev(ul1, li12);
    			append_dev(div14, t67);
    			append_dev(div14, br5);
    			append_dev(div14, t68);
    			append_dev(div14, div9);
    			append_dev(div9, div7);
    			append_dev(div7, img6);
    			append_dev(div7, t69);
    			append_dev(div7, br6);
    			append_dev(div7, t70);
    			append_dev(div7, strong0);
    			append_dev(div7, t72);
    			append_dev(div7, br7);
    			append_dev(div7, t73);
    			append_dev(div7, t74);
    			append_dev(div7, t75);
    			append_dev(div7, br8);
    			append_dev(div7, t76);
    			append_dev(div7, br9);
    			append_dev(div7, t77);
    			append_dev(div7, t78);
    			append_dev(div7, t79);
    			append_dev(div7, br10);
    			append_dev(div7, t80);
    			append_dev(div9, t81);
    			append_dev(div9, div8);
    			append_dev(div8, img7);
    			append_dev(div8, t82);
    			append_dev(div8, br11);
    			append_dev(div8, t83);
    			append_dev(div8, strong1);
    			append_dev(div8, t85);
    			append_dev(div8, br12);
    			append_dev(div8, t86);
    			append_dev(div8, t87);
    			append_dev(div8, t88);
    			append_dev(div8, br13);
    			append_dev(div8, t89);
    			append_dev(div8, br14);
    			append_dev(div8, t90);
    			append_dev(div8, t91);
    			append_dev(div8, t92);
    			append_dev(div8, br15);
    			append_dev(div8, t93);
    			append_dev(div14, t94);
    			append_dev(div14, br16);
    			append_dev(div14, t95);
    			append_dev(div14, h43);
    			append_dev(div14, t96);
    			append_dev(div14, div12);
    			append_dev(div12, div10);
    			append_dev(div10, img8);
    			append_dev(div10, t97);
    			append_dev(div10, br17);
    			append_dev(div10, t98);
    			append_dev(div10, strong2);
    			append_dev(div10, t100);
    			append_dev(div10, br18);
    			append_dev(div10, t101);
    			append_dev(div10, t102);
    			append_dev(div10, t103);
    			append_dev(div10, br19);
    			append_dev(div10, t104);
    			append_dev(div10, br20);
    			append_dev(div10, t105);
    			append_dev(div10, t106);
    			append_dev(div12, t107);
    			append_dev(div12, div11);
    			append_dev(div11, img9);
    			append_dev(div11, t108);
    			append_dev(div11, br21);
    			append_dev(div11, t109);
    			append_dev(div11, strong3);
    			append_dev(div11, t111);
    			append_dev(div11, br22);
    			append_dev(div11, t112);
    			append_dev(div11, t113);
    			append_dev(div11, t114);
    			append_dev(div11, br23);
    			append_dev(div11, t115);
    			append_dev(div11, br24);
    			append_dev(div11, t116);
    			append_dev(div11, t117);
    			append_dev(div11, t118);
    			append_dev(div11, br25);
    			append_dev(div11, t119);
    			append_dev(div11, t120);
    			append_dev(div14, t121);
    			append_dev(div14, br26);
    			append_dev(div14, t122);
    			append_dev(div14, h44);
    			append_dev(div14, t123);
    			append_dev(div14, div13);
    			append_dev(div13, t124);
    			append_dev(div13, t125);
    			append_dev(div13, br27);
    			append_dev(div13, t126);
    			append_dev(div13, t127);
    			append_dev(div13, t128);
    			append_dev(div13, br28);
    			append_dev(div13, t129);
    			append_dev(div13, t130);
    			append_dev(div13, t131);
    			append_dev(div13, a4);
    			append_dev(div13, t133);
    			append_dev(div13, br29);
    			append_dev(div13, t134);
    			append_dev(div13, t135);
    			append_dev(div13, t136);
    			append_dev(div13, a5);
    			append_dev(div13, t138);
    			append_dev(div19, t139);
    			append_dev(div19, div18);
    			append_dev(div18, div16);
    			append_dev(div16, img10);
    			append_dev(div16, t140);
    			append_dev(div16, div15);
    			append_dev(div18, t142);
    			append_dev(div18, div17);
    			append_dev(div17, img11);
    			append_dev(div17, t143);
    			append_dev(div17, img12);
    			append_dev(div17, t144);
    			append_dev(div17, img13);
    			append_dev(div17, t145);
    			append_dev(div17, img14);
    			append_dev(div17, t146);
    			append_dev(div17, img15);
    			append_dev(div17, t147);
    			append_dev(div17, img16);
    			append_dev(div17, t148);
    			append_dev(div17, img17);
    			append_dev(div17, t149);
    			append_dev(div17, img18);
    			append_dev(div17, t150);
    			append_dev(div17, img19);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div19);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$2.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    class Intro extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, null, create_fragment$2, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Intro",
    			options,
    			id: create_fragment$2.name
    		});
    	}
    }

    /* src\LinksList.svelte generated by Svelte v3.16.7 */

    function get_each_context$1(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[2] = list[i];
    	child_ctx[4] = i;
    	return child_ctx;
    }

    // (9:0) {#each items as item, i}
    function create_each_block$1(ctx) {
    	let html_tag;

    	let raw_value = (/*i*/ ctx[4] == 0
    	? ""
    	: /*vertical*/ ctx[1] ? "</br>" : ", ") + "";

    	let t;
    	let current;

    	const link = new Link({
    			props: { href: /*item*/ ctx[2] },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			t = space();
    			create_component(link.$$.fragment);
    			html_tag = new HtmlTag(raw_value, t);
    		},
    		m: function mount(target, anchor) {
    			html_tag.m(target, anchor);
    			insert_dev(target, t, anchor);
    			mount_component(link, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if ((!current || dirty & /*vertical*/ 2) && raw_value !== (raw_value = (/*i*/ ctx[4] == 0
    			? ""
    			: /*vertical*/ ctx[1] ? "</br>" : ", ") + "")) html_tag.p(raw_value);

    			const link_changes = {};
    			if (dirty & /*items*/ 1) link_changes.href = /*item*/ ctx[2];
    			link.$set(link_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(link.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(link.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) html_tag.d();
    			if (detaching) detach_dev(t);
    			destroy_component(link, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block$1.name,
    		type: "each",
    		source: "(9:0) {#each items as item, i}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$3(ctx) {
    	let each_1_anchor;
    	let current;
    	let each_value = /*items*/ ctx[0];
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			each_1_anchor = empty();
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(target, anchor);
    			}

    			insert_dev(target, each_1_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*items, vertical*/ 3) {
    				each_value = /*items*/ ctx[0];
    				let i;

    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context$1(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block$1(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
    					}
    				}

    				group_outros();

    				for (i = each_value.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;

    			for (let i = 0; i < each_value.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},
    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_each(each_blocks, detaching);
    			if (detaching) detach_dev(each_1_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$3.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$2($$self, $$props, $$invalidate) {
    	let { items } = $$props;
    	let { vertical = false } = $$props;
    	const writable_props = ["items", "vertical"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<LinksList> was created with unknown prop '${key}'`);
    	});

    	$$self.$set = $$props => {
    		if ("items" in $$props) $$invalidate(0, items = $$props.items);
    		if ("vertical" in $$props) $$invalidate(1, vertical = $$props.vertical);
    	};

    	$$self.$capture_state = () => {
    		return { items, vertical };
    	};

    	$$self.$inject_state = $$props => {
    		if ("items" in $$props) $$invalidate(0, items = $$props.items);
    		if ("vertical" in $$props) $$invalidate(1, vertical = $$props.vertical);
    	};

    	return [items, vertical];
    }

    class LinksList extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$2, create_fragment$3, safe_not_equal, { items: 0, vertical: 1 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "LinksList",
    			options,
    			id: create_fragment$3.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || ({});

    		if (/*items*/ ctx[0] === undefined && !("items" in props)) {
    			console.warn("<LinksList> was created without expected prop 'items'");
    		}
    	}

    	get items() {
    		throw new Error("<LinksList>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set items(value) {
    		throw new Error("<LinksList>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get vertical() {
    		throw new Error("<LinksList>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set vertical(value) {
    		throw new Error("<LinksList>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\Value.svelte generated by Svelte v3.16.7 */

    const { Object: Object_1 } = globals;
    const file$3 = "src\\Value.svelte";

    function get_each_context$2(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[1] = list[i];
    	child_ctx[3] = i;
    	return child_ctx;
    }

    // (28:0) {:else}
    function create_else_block$1(ctx) {
    	let current;

    	const link = new Link({
    			props: { href: /*val*/ ctx[0] },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(link.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(link, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const link_changes = {};
    			if (dirty & /*val*/ 1) link_changes.href = /*val*/ ctx[0];
    			link.$set(link_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(link.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(link.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(link, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block$1.name,
    		type: "else",
    		source: "(28:0) {:else}",
    		ctx
    	});

    	return block;
    }

    // (26:23) 
    function create_if_block_3(ctx) {
    	let em;
    	let t_value = /*val*/ ctx[0].toLocaleString() + "";
    	let t;

    	const block = {
    		c: function create() {
    			em = element("em");
    			t = text(t_value);
    			attr_dev(em, "class", "num");
    			add_location(em, file$3, 26, 2, 711);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, em, anchor);
    			append_dev(em, t);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*val*/ 1 && t_value !== (t_value = /*val*/ ctx[0].toLocaleString() + "")) set_data_dev(t, t_value);
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(em);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_3.name,
    		type: "if",
    		source: "(26:23) ",
    		ctx
    	});

    	return block;
    }

    // (24:37) 
    function create_if_block_2$1(ctx) {
    	let span;
    	let t_value = rul.str(/*val*/ ctx[0].toString()) + "";
    	let t;

    	const block = {
    		c: function create() {
    			span = element("span");
    			t = text(t_value);
    			set_style(span, "color", /*val*/ ctx[0] ? "lime" : "red");
    			add_location(span, file$3, 24, 2, 611);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, span, anchor);
    			append_dev(span, t);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*val*/ 1 && t_value !== (t_value = rul.str(/*val*/ ctx[0].toString()) + "")) set_data_dev(t, t_value);

    			if (dirty & /*val*/ 1) {
    				set_style(span, "color", /*val*/ ctx[0] ? "lime" : "red");
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(span);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_2$1.name,
    		type: "if",
    		source: "(24:37) ",
    		ctx
    	});

    	return block;
    }

    // (11:32) 
    function create_if_block_1$1(ctx) {
    	let table;
    	let current;
    	let each_value = Object.keys(/*val*/ ctx[0]).sort();
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block$2(get_each_context$2(ctx, each_value, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			table = element("table");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			attr_dev(table, "class", "number-table");
    			add_location(table, file$3, 11, 2, 283);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, table, anchor);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(table, null);
    			}

    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*val, Object, rul*/ 1) {
    				each_value = Object.keys(/*val*/ ctx[0]).sort();
    				let i;

    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context$2(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block$2(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(table, null);
    					}
    				}

    				group_outros();

    				for (i = each_value.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;

    			for (let i = 0; i < each_value.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},
    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(table);
    			destroy_each(each_blocks, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_1$1.name,
    		type: "if",
    		source: "(11:32) ",
    		ctx
    	});

    	return block;
    }

    // (9:0) {#if Array.isArray(val)}
    function create_if_block$2(ctx) {
    	let current;

    	const linkslist = new LinksList({
    			props: { items: /*val*/ ctx[0], vertical: true },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(linkslist.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(linkslist, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const linkslist_changes = {};
    			if (dirty & /*val*/ 1) linkslist_changes.items = /*val*/ ctx[0];
    			linkslist.$set(linkslist_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(linkslist.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(linkslist.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(linkslist, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$2.name,
    		type: "if",
    		source: "(9:0) {#if Array.isArray(val)}",
    		ctx
    	});

    	return block;
    }

    // (13:4) {#each Object.keys(val).sort() as field, i}
    function create_each_block$2(ctx) {
    	let tr;
    	let td0;
    	let nobr;
    	let raw_value = rul.decamelize(/*field*/ ctx[1]) + "";
    	let t0;
    	let td1;
    	let em;
    	let t1;
    	let current;

    	const link = new Link({
    			props: { href: /*val*/ ctx[0][/*field*/ ctx[1]] },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			tr = element("tr");
    			td0 = element("td");
    			nobr = element("nobr");
    			t0 = space();
    			td1 = element("td");
    			em = element("em");
    			create_component(link.$$.fragment);
    			t1 = space();
    			add_location(nobr, file$3, 15, 10, 398);
    			add_location(td0, file$3, 14, 8, 382);
    			add_location(em, file$3, 18, 10, 481);
    			add_location(td1, file$3, 17, 8, 465);
    			add_location(tr, file$3, 13, 6, 368);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, tr, anchor);
    			append_dev(tr, td0);
    			append_dev(td0, nobr);
    			nobr.innerHTML = raw_value;
    			append_dev(tr, t0);
    			append_dev(tr, td1);
    			append_dev(td1, em);
    			mount_component(link, em, null);
    			append_dev(tr, t1);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if ((!current || dirty & /*val*/ 1) && raw_value !== (raw_value = rul.decamelize(/*field*/ ctx[1]) + "")) nobr.innerHTML = raw_value;			const link_changes = {};
    			if (dirty & /*val*/ 1) link_changes.href = /*val*/ ctx[0][/*field*/ ctx[1]];
    			link.$set(link_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(link.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(link.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(tr);
    			destroy_component(link);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block$2.name,
    		type: "each",
    		source: "(13:4) {#each Object.keys(val).sort() as field, i}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$4(ctx) {
    	let show_if;
    	let show_if_1;
    	let current_block_type_index;
    	let if_block;
    	let if_block_anchor;
    	let current;

    	const if_block_creators = [
    		create_if_block$2,
    		create_if_block_1$1,
    		create_if_block_2$1,
    		create_if_block_3,
    		create_else_block$1
    	];

    	const if_blocks = [];

    	function select_block_type(ctx, dirty) {
    		if (dirty & /*val*/ 1) show_if = !!Array.isArray(/*val*/ ctx[0]);
    		if (show_if) return 0;
    		if (/*val*/ ctx[0] instanceof Object) return 1;
    		if (/*val*/ ctx[0] === true || /*val*/ ctx[0] === false) return 2;
    		if (dirty & /*val*/ 1) show_if_1 = !!!isNaN(+/*val*/ ctx[0]);
    		if (show_if_1) return 3;
    		return 4;
    	}

    	current_block_type_index = select_block_type(ctx, -1);
    	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

    	const block = {
    		c: function create() {
    			if_block.c();
    			if_block_anchor = empty();
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			if_blocks[current_block_type_index].m(target, anchor);
    			insert_dev(target, if_block_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			let previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type(ctx, dirty);

    			if (current_block_type_index === previous_block_index) {
    				if_blocks[current_block_type_index].p(ctx, dirty);
    			} else {
    				group_outros();

    				transition_out(if_blocks[previous_block_index], 1, 1, () => {
    					if_blocks[previous_block_index] = null;
    				});

    				check_outros();
    				if_block = if_blocks[current_block_type_index];

    				if (!if_block) {
    					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    					if_block.c();
    				}

    				transition_in(if_block, 1);
    				if_block.m(if_block_anchor.parentNode, if_block_anchor);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if_blocks[current_block_type_index].d(detaching);
    			if (detaching) detach_dev(if_block_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$4.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$3($$self, $$props, $$invalidate) {
    	let { val } = $$props;
    	const writable_props = ["val"];

    	Object_1.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Value> was created with unknown prop '${key}'`);
    	});

    	$$self.$set = $$props => {
    		if ("val" in $$props) $$invalidate(0, val = $$props.val);
    	};

    	$$self.$capture_state = () => {
    		return { val };
    	};

    	$$self.$inject_state = $$props => {
    		if ("val" in $$props) $$invalidate(0, val = $$props.val);
    	};

    	return [val];
    }

    class Value extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$3, create_fragment$4, safe_not_equal, { val: 0 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Value",
    			options,
    			id: create_fragment$4.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || ({});

    		if (/*val*/ ctx[0] === undefined && !("val" in props)) {
    			console.warn("<Value> was created without expected prop 'val'");
    		}
    	}

    	get val() {
    		throw new Error("<Value>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set val(value) {
    		throw new Error("<Value>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\BaseServiceList.svelte generated by Svelte v3.16.7 */

    function get_each_context$3(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[2] = list[i];
    	child_ctx[4] = i;
    	return child_ctx;
    }

    // (9:0) {#each items as item, i}
    function create_each_block$3(ctx) {
    	let html_tag;

    	let raw_value = (/*i*/ ctx[4] == 0
    	? ""
    	: /*vertical*/ ctx[1] ? "</br>" : ", ") + "";

    	let t;
    	let current;

    	const link = new Link({
    			props: { href: /*item*/ ctx[2] },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			t = space();
    			create_component(link.$$.fragment);
    			html_tag = new HtmlTag(raw_value, t);
    		},
    		m: function mount(target, anchor) {
    			html_tag.m(target, anchor);
    			insert_dev(target, t, anchor);
    			mount_component(link, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if ((!current || dirty & /*vertical*/ 2) && raw_value !== (raw_value = (/*i*/ ctx[4] == 0
    			? ""
    			: /*vertical*/ ctx[1] ? "</br>" : ", ") + "")) html_tag.p(raw_value);

    			const link_changes = {};
    			if (dirty & /*items*/ 1) link_changes.href = /*item*/ ctx[2];
    			link.$set(link_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(link.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(link.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) html_tag.d();
    			if (detaching) detach_dev(t);
    			destroy_component(link, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block$3.name,
    		type: "each",
    		source: "(9:0) {#each items as item, i}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$5(ctx) {
    	let each_1_anchor;
    	let current;
    	let each_value = /*items*/ ctx[0];
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block$3(get_each_context$3(ctx, each_value, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			each_1_anchor = empty();
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(target, anchor);
    			}

    			insert_dev(target, each_1_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*items, vertical*/ 3) {
    				each_value = /*items*/ ctx[0];
    				let i;

    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context$3(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block$3(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
    					}
    				}

    				group_outros();

    				for (i = each_value.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;

    			for (let i = 0; i < each_value.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},
    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_each(each_blocks, detaching);
    			if (detaching) detach_dev(each_1_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$5.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$4($$self, $$props, $$invalidate) {
    	let { items } = $$props;
    	let { vertical = false } = $$props;
    	const writable_props = ["items", "vertical"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<BaseServiceList> was created with unknown prop '${key}'`);
    	});

    	$$self.$set = $$props => {
    		if ("items" in $$props) $$invalidate(0, items = $$props.items);
    		if ("vertical" in $$props) $$invalidate(1, vertical = $$props.vertical);
    	};

    	$$self.$capture_state = () => {
    		return { items, vertical };
    	};

    	$$self.$inject_state = $$props => {
    		if ("items" in $$props) $$invalidate(0, items = $$props.items);
    		if ("vertical" in $$props) $$invalidate(1, vertical = $$props.vertical);
    	};

    	return [items, vertical];
    }

    class BaseServiceList extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$4, create_fragment$5, safe_not_equal, { items: 0, vertical: 1 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "BaseServiceList",
    			options,
    			id: create_fragment$5.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || ({});

    		if (/*items*/ ctx[0] === undefined && !("items" in props)) {
    			console.warn("<BaseServiceList> was created without expected prop 'items'");
    		}
    	}

    	get items() {
    		throw new Error("<BaseServiceList>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set items(value) {
    		throw new Error("<BaseServiceList>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get vertical() {
    		throw new Error("<BaseServiceList>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set vertical(value) {
    		throw new Error("<BaseServiceList>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\Illustration.svelte generated by Svelte v3.16.7 */

    const { console: console_1 } = globals;
    const file$4 = "src\\Illustration.svelte";

    // (30:0) {#if id && rul.sprite(id)}
    function create_if_block$3(ctx) {
    	let a;
    	let img;
    	let img_style_value;
    	let img_alt_value;
    	let img_src_value;
    	let a_href_value;
    	let dispose;

    	const block = {
    		c: function create() {
    			a = element("a");
    			img = element("img");
    			attr_dev(img, "style", img_style_value = /*style*/ ctx[2] + (/*left*/ ctx[1] ? "float:left" : ""));
    			attr_dev(img, "alt", img_alt_value = /*id*/ ctx[0] || "");
    			if (img.src !== (img_src_value = rul.sprite(/*id*/ ctx[0]))) attr_dev(img, "src", img_src_value);
    			add_location(img, file$4, 31, 4, 715);
    			attr_dev(a, "href", a_href_value = rul.sprite(/*id*/ ctx[0]));
    			attr_dev(a, "class", "illustration");
    			add_location(a, file$4, 30, 2, 663);

    			dispose = [
    				listen_dev(img, "load", /*load_handler*/ ctx[6], false, false, false),
    				listen_dev(img, "error", /*error_handler*/ ctx[7], false, false, false)
    			];
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, a, anchor);
    			append_dev(a, img);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*style, left*/ 6 && img_style_value !== (img_style_value = /*style*/ ctx[2] + (/*left*/ ctx[1] ? "float:left" : ""))) {
    				attr_dev(img, "style", img_style_value);
    			}

    			if (dirty & /*id*/ 1 && img_alt_value !== (img_alt_value = /*id*/ ctx[0] || "")) {
    				attr_dev(img, "alt", img_alt_value);
    			}

    			if (dirty & /*id*/ 1 && img.src !== (img_src_value = rul.sprite(/*id*/ ctx[0]))) {
    				attr_dev(img, "src", img_src_value);
    			}

    			if (dirty & /*id*/ 1 && a_href_value !== (a_href_value = rul.sprite(/*id*/ ctx[0]))) {
    				attr_dev(a, "href", a_href_value);
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(a);
    			run_all(dispose);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$3.name,
    		type: "if",
    		source: "(30:0) {#if id && rul.sprite(id)}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$6(ctx) {
    	let show_if = /*id*/ ctx[0] && rul.sprite(/*id*/ ctx[0]);
    	let if_block_anchor;
    	let if_block = show_if && create_if_block$3(ctx);

    	const block = {
    		c: function create() {
    			if (if_block) if_block.c();
    			if_block_anchor = empty();
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			if (if_block) if_block.m(target, anchor);
    			insert_dev(target, if_block_anchor, anchor);
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*id*/ 1) show_if = /*id*/ ctx[0] && rul.sprite(/*id*/ ctx[0]);

    			if (show_if) {
    				if (if_block) {
    					if_block.p(ctx, dirty);
    				} else {
    					if_block = create_if_block$3(ctx);
    					if_block.c();
    					if_block.m(if_block_anchor.parentNode, if_block_anchor);
    				}
    			} else if (if_block) {
    				if_block.d(1);
    				if_block = null;
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (if_block) if_block.d(detaching);
    			if (detaching) detach_dev(if_block_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$6.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function noimage(img) {
    	img.onerror = null;
    	img.src = "xpedia/0.png";
    	img.style.border = "none";
    }

    function instance$5($$self, $$props, $$invalidate) {
    	let { id } = $$props;
    	let { left = false } = $$props;
    	let { maxWidth = window.innerWidth > 1400 ? 640 : 320 } = $$props;
    	let { maxZoom = 4 } = $$props;
    	let { style = "" } = $$props;

    	function loaded(img) {
    		return;
    		console.info(img);
    		let zoom = Math.min(maxZoom, Math.max(1, Math.floor(maxWidth / img.naturalWidth)));
    		img.width = img.naturalWidth * zoom;
    		img.height = img.naturalHeight * zoom;
    	}

    	console.log(id);
    	const writable_props = ["id", "left", "maxWidth", "maxZoom", "style"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Illustration> was created with unknown prop '${key}'`);
    	});

    	const load_handler = e => loaded(e.target);
    	const error_handler = e => noimage(e.target);

    	$$self.$set = $$props => {
    		if ("id" in $$props) $$invalidate(0, id = $$props.id);
    		if ("left" in $$props) $$invalidate(1, left = $$props.left);
    		if ("maxWidth" in $$props) $$invalidate(4, maxWidth = $$props.maxWidth);
    		if ("maxZoom" in $$props) $$invalidate(5, maxZoom = $$props.maxZoom);
    		if ("style" in $$props) $$invalidate(2, style = $$props.style);
    	};

    	$$self.$capture_state = () => {
    		return { id, left, maxWidth, maxZoom, style };
    	};

    	$$self.$inject_state = $$props => {
    		if ("id" in $$props) $$invalidate(0, id = $$props.id);
    		if ("left" in $$props) $$invalidate(1, left = $$props.left);
    		if ("maxWidth" in $$props) $$invalidate(4, maxWidth = $$props.maxWidth);
    		if ("maxZoom" in $$props) $$invalidate(5, maxZoom = $$props.maxZoom);
    		if ("style" in $$props) $$invalidate(2, style = $$props.style);
    	};

    	return [id, left, style, loaded, maxWidth, maxZoom, load_handler, error_handler];
    }

    class Illustration extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance$5, create_fragment$6, safe_not_equal, {
    			id: 0,
    			left: 1,
    			maxWidth: 4,
    			maxZoom: 5,
    			style: 2
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Illustration",
    			options,
    			id: create_fragment$6.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || ({});

    		if (/*id*/ ctx[0] === undefined && !("id" in props)) {
    			console_1.warn("<Illustration> was created without expected prop 'id'");
    		}
    	}

    	get id() {
    		throw new Error("<Illustration>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set id(value) {
    		throw new Error("<Illustration>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get left() {
    		throw new Error("<Illustration>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set left(value) {
    		throw new Error("<Illustration>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get maxWidth() {
    		throw new Error("<Illustration>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set maxWidth(value) {
    		throw new Error("<Illustration>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get maxZoom() {
    		throw new Error("<Illustration>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set maxZoom(value) {
    		throw new Error("<Illustration>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get style() {
    		throw new Error("<Illustration>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set style(value) {
    		throw new Error("<Illustration>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\SpecialBonus.svelte generated by Svelte v3.16.7 */

    const { Object: Object_1$1 } = globals;
    const file$5 = "src\\SpecialBonus.svelte";

    function get_each_context$4(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[3] = list[i];
    	child_ctx[5] = i;
    	return child_ctx;
    }

    // (37:0) {#if flat.length > 0 && plus}
    function create_if_block_2$2(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("+");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_2$2.name,
    		type: "if",
    		source: "(37:0) {#if flat.length > 0 && plus}",
    		ctx
    	});

    	return block;
    }

    // (40:4) {#if i != 0}
    function create_if_block_1$2(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text(" +");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_1$2.name,
    		type: "if",
    		source: "(40:4) {#if i != 0}",
    		ctx
    	});

    	return block;
    }

    // (43:4) {:else}
    function create_else_block$2(ctx) {
    	let html_tag;

    	let raw_value = rul.str(/*b*/ ctx[3][0]) + (/*b*/ ctx[3][1] != 1
    	? "×<em>" + /*b*/ ctx[3][1] + "</em>"
    	: "") + "";

    	const block = {
    		c: function create() {
    			html_tag = new HtmlTag(raw_value, null);
    		},
    		m: function mount(target, anchor) {
    			html_tag.m(target, anchor);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*flat*/ 2 && raw_value !== (raw_value = rul.str(/*b*/ ctx[3][0]) + (/*b*/ ctx[3][1] != 1
    			? "×<em>" + /*b*/ ctx[3][1] + "</em>"
    			: "") + "")) html_tag.p(raw_value);
    		},
    		d: function destroy(detaching) {
    			if (detaching) html_tag.d();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block$2.name,
    		type: "else",
    		source: "(43:4) {:else}",
    		ctx
    	});

    	return block;
    }

    // (41:4) {#if b[0] == 'flatHundred'}
    function create_if_block$4(ctx) {
    	let html_tag;
    	let raw_value = /*b*/ ctx[3][1] * 100 + "";

    	const block = {
    		c: function create() {
    			html_tag = new HtmlTag(raw_value, null);
    		},
    		m: function mount(target, anchor) {
    			html_tag.m(target, anchor);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*flat*/ 2 && raw_value !== (raw_value = /*b*/ ctx[3][1] * 100 + "")) html_tag.p(raw_value);
    		},
    		d: function destroy(detaching) {
    			if (detaching) html_tag.d();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$4.name,
    		type: "if",
    		source: "(41:4) {#if b[0] == 'flatHundred'}",
    		ctx
    	});

    	return block;
    }

    // (38:0) {#each flat as b, i}
    function create_each_block$4(ctx) {
    	let span;
    	let t0;
    	let t1;
    	let if_block0 = /*i*/ ctx[5] != 0 && create_if_block_1$2(ctx);

    	function select_block_type(ctx, dirty) {
    		if (/*b*/ ctx[3][0] == "flatHundred") return create_if_block$4;
    		return create_else_block$2;
    	}

    	let current_block_type = select_block_type(ctx);
    	let if_block1 = current_block_type(ctx);

    	const block = {
    		c: function create() {
    			span = element("span");
    			if (if_block0) if_block0.c();
    			t0 = space();
    			if_block1.c();
    			t1 = space();
    			add_location(span, file$5, 38, 2, 877);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, span, anchor);
    			if (if_block0) if_block0.m(span, null);
    			append_dev(span, t0);
    			if_block1.m(span, null);
    			append_dev(span, t1);
    		},
    		p: function update(ctx, dirty) {
    			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block1) {
    				if_block1.p(ctx, dirty);
    			} else {
    				if_block1.d(1);
    				if_block1 = current_block_type(ctx);

    				if (if_block1) {
    					if_block1.c();
    					if_block1.m(span, t1);
    				}
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(span);
    			if (if_block0) if_block0.d();
    			if_block1.d();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block$4.name,
    		type: "each",
    		source: "(38:0) {#each flat as b, i}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$7(ctx) {
    	let t;
    	let each_1_anchor;
    	let if_block = /*flat*/ ctx[1].length > 0 && /*plus*/ ctx[0] && create_if_block_2$2(ctx);
    	let each_value = /*flat*/ ctx[1];
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block$4(get_each_context$4(ctx, each_value, i));
    	}

    	const block = {
    		c: function create() {
    			if (if_block) if_block.c();
    			t = space();

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			each_1_anchor = empty();
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			if (if_block) if_block.m(target, anchor);
    			insert_dev(target, t, anchor);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(target, anchor);
    			}

    			insert_dev(target, each_1_anchor, anchor);
    		},
    		p: function update(ctx, [dirty]) {
    			if (/*flat*/ ctx[1].length > 0 && /*plus*/ ctx[0]) {
    				if (!if_block) {
    					if_block = create_if_block_2$2(ctx);
    					if_block.c();
    					if_block.m(t.parentNode, t);
    				}
    			} else if (if_block) {
    				if_block.d(1);
    				if_block = null;
    			}

    			if (dirty & /*flat, rul*/ 2) {
    				each_value = /*flat*/ ctx[1];
    				let i;

    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context$4(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    					} else {
    						each_blocks[i] = create_each_block$4(child_ctx);
    						each_blocks[i].c();
    						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
    					}
    				}

    				for (; i < each_blocks.length; i += 1) {
    					each_blocks[i].d(1);
    				}

    				each_blocks.length = each_value.length;
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (if_block) if_block.d(detaching);
    			if (detaching) detach_dev(t);
    			destroy_each(each_blocks, detaching);
    			if (detaching) detach_dev(each_1_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$7.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function f(bonus) {
    	if (!bonus) return [];
    	let flat = [];

    	for (let type of Object.keys(bonus)) {
    		if (bonus[type].length) {
    			for (let power in bonus[type]) {
    				let b = bonus[type][power];

    				if (b != 0) {
    					power = power * 1 + 1;
    					flat.push([rul.str(type) + (power == 1 ? "" : "<sup>" + power + "</sup>"), b]);
    				}
    			}
    		} else {
    			if (bonus[type] != 0) flat.push([type, bonus[type]]);
    		}
    	}

    	flat = flat.sort((a, b) => a[0] == "flatHundred" || a[0] < b[0] ? -1 : 1);
    	return flat;
    }

    function instance$6($$self, $$props, $$invalidate) {
    	let { bonus } = $$props;
    	let { plus = false } = $$props;
    	let flat;
    	const writable_props = ["bonus", "plus"];

    	Object_1$1.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<SpecialBonus> was created with unknown prop '${key}'`);
    	});

    	$$self.$set = $$props => {
    		if ("bonus" in $$props) $$invalidate(2, bonus = $$props.bonus);
    		if ("plus" in $$props) $$invalidate(0, plus = $$props.plus);
    	};

    	$$self.$capture_state = () => {
    		return { bonus, plus, flat };
    	};

    	$$self.$inject_state = $$props => {
    		if ("bonus" in $$props) $$invalidate(2, bonus = $$props.bonus);
    		if ("plus" in $$props) $$invalidate(0, plus = $$props.plus);
    		if ("flat" in $$props) $$invalidate(1, flat = $$props.flat);
    	};

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty & /*bonus*/ 4) {
    			$: {
    				$$invalidate(1, flat = f(bonus));
    			}
    		}
    	};

    	return [plus, flat, bonus];
    }

    class SpecialBonus extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$6, create_fragment$7, safe_not_equal, { bonus: 2, plus: 0 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "SpecialBonus",
    			options,
    			id: create_fragment$7.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || ({});

    		if (/*bonus*/ ctx[2] === undefined && !("bonus" in props)) {
    			console.warn("<SpecialBonus> was created without expected prop 'bonus'");
    		}
    	}

    	get bonus() {
    		throw new Error("<SpecialBonus>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set bonus(value) {
    		throw new Error("<SpecialBonus>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get plus() {
    		throw new Error("<SpecialBonus>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set plus(value) {
    		throw new Error("<SpecialBonus>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\CanvasImage.svelte generated by Svelte v3.16.7 */

    const { console: console_1$1 } = globals;
    const file$6 = "src\\CanvasImage.svelte";

    function create_fragment$8(ctx) {
    	let a;
    	let canvas_1;
    	let prepareCanvas_action;
    	let dispose;

    	const block = {
    		c: function create() {
    			a = element("a");
    			canvas_1 = element("canvas");
    			attr_dev(canvas_1, "class", "pixelated");
    			set_style(canvas_1, "display", /*loaded*/ ctx[2] ? "inline" : "none");
    			add_location(canvas_1, file$6, 48, 2, 1138);
    			attr_dev(a, "href", /*src*/ ctx[0]);
    			attr_dev(a, "class", "canvas-image");
    			add_location(a, file$6, 47, 0, 1099);
    			dispose = action_destroyer(prepareCanvas_action = /*prepareCanvas*/ ctx[3].call(null, canvas_1));
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, a, anchor);
    			append_dev(a, canvas_1);
    			/*canvas_1_binding*/ ctx[11](canvas_1);
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*loaded*/ 4) {
    				set_style(canvas_1, "display", /*loaded*/ ctx[2] ? "inline" : "none");
    			}

    			if (dirty & /*src*/ 1) {
    				attr_dev(a, "href", /*src*/ ctx[0]);
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(a);
    			/*canvas_1_binding*/ ctx[11](null);
    			dispose();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$8.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$7($$self, $$props, $$invalidate) {
    	let { src = null } = $$props;
    	let { maxWidth = 1000000 } = $$props;
    	let { maxHeight = 1000000 } = $$props;
    	let { zoom = 1 } = $$props;
    	let { item = null } = $$props;
    	let canvas;
    	let ctx;
    	let img = null;
    	let loaded = false;

    	function updateImage() {
    		$$invalidate(1, canvas.width = Math.min(maxWidth, img.naturalWidth * zoom), canvas);
    		$$invalidate(1, canvas.height = Math.min(maxHeight, img.naturalHeight * zoom), canvas);
    		ctx.imageSmoothingEnabled = false;
    		ctx.mozImageSmoothingEnabled = false;
    		ctx.webkitImageSmoothingEnabled = false;
    		ctx.drawImage(img, 0, 0, img.naturalWidth * zoom, img.naturalHeight * zoom);
    		$$invalidate(2, loaded = true);
    	}

    	function prepareCanvas(node) {
    		$$invalidate(1, canvas = node);
    		ctx = canvas.getContext("2d");
    		$$invalidate(9, img = new Image());
    		$$invalidate(9, img.onload = updateImage, img);
    		$$invalidate(9, img.src = src, img);
    	}

    	const writable_props = ["src", "maxWidth", "maxHeight", "zoom", "item"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1$1.warn(`<CanvasImage> was created with unknown prop '${key}'`);
    	});

    	function canvas_1_binding($$value) {
    		binding_callbacks[$$value ? "unshift" : "push"](() => {
    			$$invalidate(1, canvas = $$value);
    		});
    	}

    	$$self.$set = $$props => {
    		if ("src" in $$props) $$invalidate(0, src = $$props.src);
    		if ("maxWidth" in $$props) $$invalidate(4, maxWidth = $$props.maxWidth);
    		if ("maxHeight" in $$props) $$invalidate(5, maxHeight = $$props.maxHeight);
    		if ("zoom" in $$props) $$invalidate(6, zoom = $$props.zoom);
    		if ("item" in $$props) $$invalidate(7, item = $$props.item);
    	};

    	$$self.$capture_state = () => {
    		return {
    			src,
    			maxWidth,
    			maxHeight,
    			zoom,
    			item,
    			canvas,
    			ctx,
    			img,
    			loaded
    		};
    	};

    	$$self.$inject_state = $$props => {
    		if ("src" in $$props) $$invalidate(0, src = $$props.src);
    		if ("maxWidth" in $$props) $$invalidate(4, maxWidth = $$props.maxWidth);
    		if ("maxHeight" in $$props) $$invalidate(5, maxHeight = $$props.maxHeight);
    		if ("zoom" in $$props) $$invalidate(6, zoom = $$props.zoom);
    		if ("item" in $$props) $$invalidate(7, item = $$props.item);
    		if ("canvas" in $$props) $$invalidate(1, canvas = $$props.canvas);
    		if ("ctx" in $$props) ctx = $$props.ctx;
    		if ("img" in $$props) $$invalidate(9, img = $$props.img);
    		if ("loaded" in $$props) $$invalidate(2, loaded = $$props.loaded);
    	};

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty & /*item, src, img*/ 641) {
    			$: {
    				if (item) {
    					console.log(item);
    					$$invalidate(0, src = rul.sprite(item.sprite));
    					$$invalidate(4, maxWidth = 32 * item.invWidth);
    					$$invalidate(5, maxHeight = 32 * item.invHeight);
    				}

    				if (src && img) {
    					$$invalidate(2, loaded = false);
    					$$invalidate(9, img.src = src, img);
    				}
    			}
    		}
    	};

    	return [
    		src,
    		canvas,
    		loaded,
    		prepareCanvas,
    		maxWidth,
    		maxHeight,
    		zoom,
    		item,
    		ctx,
    		img,
    		updateImage,
    		canvas_1_binding
    	];
    }

    class CanvasImage extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance$7, create_fragment$8, safe_not_equal, {
    			src: 0,
    			maxWidth: 4,
    			maxHeight: 5,
    			zoom: 6,
    			item: 7
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "CanvasImage",
    			options,
    			id: create_fragment$8.name
    		});
    	}

    	get src() {
    		throw new Error("<CanvasImage>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set src(value) {
    		throw new Error("<CanvasImage>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get maxWidth() {
    		throw new Error("<CanvasImage>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set maxWidth(value) {
    		throw new Error("<CanvasImage>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get maxHeight() {
    		throw new Error("<CanvasImage>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set maxHeight(value) {
    		throw new Error("<CanvasImage>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get zoom() {
    		throw new Error("<CanvasImage>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set zoom(value) {
    		throw new Error("<CanvasImage>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get item() {
    		throw new Error("<CanvasImage>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set item(value) {
    		throw new Error("<CanvasImage>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\AlterList.svelte generated by Svelte v3.16.7 */

    const { Object: Object_1$2 } = globals;
    const file$7 = "src\\AlterList.svelte";

    function get_each_context$5(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[1] = list[i];
    	child_ctx[3] = i;
    	return child_ctx;
    }

    // (11:6) {#each Object.keys(items).sort() as field, i}
    function create_each_block$5(ctx) {
    	let nobr;
    	let t0_value = rul.str(/*field*/ ctx[1]) + "";
    	let t0;
    	let t1;
    	let t2;
    	let br;
    	let current;

    	const value = new Value({
    			props: { val: /*items*/ ctx[0][/*field*/ ctx[1]] },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			nobr = element("nobr");
    			t0 = text(t0_value);
    			t1 = text(":\r\n          ");
    			create_component(value.$$.fragment);
    			t2 = space();
    			br = element("br");
    			add_location(nobr, file$7, 11, 8, 242);
    			add_location(br, file$7, 15, 8, 344);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, nobr, anchor);
    			append_dev(nobr, t0);
    			append_dev(nobr, t1);
    			mount_component(value, nobr, null);
    			insert_dev(target, t2, anchor);
    			insert_dev(target, br, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if ((!current || dirty & /*items*/ 1) && t0_value !== (t0_value = rul.str(/*field*/ ctx[1]) + "")) set_data_dev(t0, t0_value);
    			const value_changes = {};
    			if (dirty & /*items*/ 1) value_changes.val = /*items*/ ctx[0][/*field*/ ctx[1]];
    			value.$set(value_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(value.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(value.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(nobr);
    			destroy_component(value);
    			if (detaching) detach_dev(t2);
    			if (detaching) detach_dev(br);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block$5.name,
    		type: "each",
    		source: "(11:6) {#each Object.keys(items).sort() as field, i}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$9(ctx) {
    	let tr;
    	let td;
    	let small;
    	let current;
    	let each_value = Object.keys(/*items*/ ctx[0]).sort();
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block$5(get_each_context$5(ctx, each_value, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			tr = element("tr");
    			td = element("td");
    			small = element("small");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			add_location(small, file$7, 9, 4, 172);
    			attr_dev(td, "colspan", "4");
    			attr_dev(td, "class", "attack-alter");
    			add_location(td, file$7, 8, 2, 129);
    			add_location(tr, file$7, 7, 0, 121);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, tr, anchor);
    			append_dev(tr, td);
    			append_dev(td, small);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(small, null);
    			}

    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*items, Object, rul*/ 1) {
    				each_value = Object.keys(/*items*/ ctx[0]).sort();
    				let i;

    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context$5(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block$5(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(small, null);
    					}
    				}

    				group_outros();

    				for (i = each_value.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;

    			for (let i = 0; i < each_value.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},
    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(tr);
    			destroy_each(each_blocks, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$9.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$8($$self, $$props, $$invalidate) {
    	let { items } = $$props;
    	const writable_props = ["items"];

    	Object_1$2.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<AlterList> was created with unknown prop '${key}'`);
    	});

    	$$self.$set = $$props => {
    		if ("items" in $$props) $$invalidate(0, items = $$props.items);
    	};

    	$$self.$capture_state = () => {
    		return { items };
    	};

    	$$self.$inject_state = $$props => {
    		if ("items" in $$props) $$invalidate(0, items = $$props.items);
    	};

    	return [items];
    }

    class AlterList extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$8, create_fragment$9, safe_not_equal, { items: 0 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "AlterList",
    			options,
    			id: create_fragment$9.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || ({});

    		if (/*items*/ ctx[0] === undefined && !("items" in props)) {
    			console.warn("<AlterList> was created without expected prop 'items'");
    		}
    	}

    	get items() {
    		throw new Error("<AlterList>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set items(value) {
    		throw new Error("<AlterList>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\TableKey.svelte generated by Svelte v3.16.7 */
    const file$8 = "src\\TableKey.svelte";

    // (10:4) {#if 'tip_' + key in rul.lang}
    function create_if_block$5(ctx) {
    	let sup;

    	const block = {
    		c: function create() {
    			sup = element("sup");
    			sup.textContent = "?";
    			add_location(sup, file$8, 10, 6, 195);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, sup, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(sup);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$5.name,
    		type: "if",
    		source: "(10:4) {#if 'tip_' + key in rul.lang}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$a(ctx) {
    	let td;
    	let div;
    	let html_tag;
    	let raw_value = rul.decamelize(/*key*/ ctx[0]) + "";
    	let t;
    	let div_tooltip_value;
    	let if_block = "tip_" + /*key*/ ctx[0] in rul.lang && create_if_block$5(ctx);

    	const block = {
    		c: function create() {
    			td = element("td");
    			div = element("div");
    			t = space();
    			if (if_block) if_block.c();
    			html_tag = new HtmlTag(raw_value, t);
    			attr_dev(div, "tooltip", div_tooltip_value = "tip_" + /*key*/ ctx[0]);
    			add_location(div, file$8, 7, 2, 90);
    			add_location(td, file$8, 6, 0, 82);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, td, anchor);
    			append_dev(td, div);
    			html_tag.m(div);
    			append_dev(div, t);
    			if (if_block) if_block.m(div, null);
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*key*/ 1 && raw_value !== (raw_value = rul.decamelize(/*key*/ ctx[0]) + "")) html_tag.p(raw_value);

    			if ("tip_" + /*key*/ ctx[0] in rul.lang) {
    				if (!if_block) {
    					if_block = create_if_block$5(ctx);
    					if_block.c();
    					if_block.m(div, null);
    				}
    			} else if (if_block) {
    				if_block.d(1);
    				if_block = null;
    			}

    			if (dirty & /*key*/ 1 && div_tooltip_value !== (div_tooltip_value = "tip_" + /*key*/ ctx[0])) {
    				attr_dev(div, "tooltip", div_tooltip_value);
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(td);
    			if (if_block) if_block.d();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$a.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$9($$self, $$props, $$invalidate) {
    	let { key } = $$props;
    	const writable_props = ["key"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<TableKey> was created with unknown prop '${key}'`);
    	});

    	$$self.$set = $$props => {
    		if ("key" in $$props) $$invalidate(0, key = $$props.key);
    	};

    	$$self.$capture_state = () => {
    		return { key };
    	};

    	$$self.$inject_state = $$props => {
    		if ("key" in $$props) $$invalidate(0, key = $$props.key);
    	};

    	return [key];
    }

    class TableKey extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$9, create_fragment$a, safe_not_equal, { key: 0 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "TableKey",
    			options,
    			id: create_fragment$a.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || ({});

    		if (/*key*/ ctx[0] === undefined && !("key" in props)) {
    			console.warn("<TableKey> was created without expected prop 'key'");
    		}
    	}

    	get key() {
    		throw new Error("<TableKey>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set key(value) {
    		throw new Error("<TableKey>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\Item.svelte generated by Svelte v3.16.7 */

    const { Object: Object_1$3, console: console_1$2 } = globals;
    const file$9 = "src\\Item.svelte";

    function get_each_context_2(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[10] = list[i];
    	child_ctx[9] = i;
    	return child_ctx;
    }

    function get_each_context_1(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[7] = list[i];
    	child_ctx[9] = i;
    	return child_ctx;
    }

    function get_each_context$6(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[3] = list[i][0];
    	child_ctx[4] = list[i][1];
    	return child_ctx;
    }

    function get_each_context_4(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[15] = list[i];
    	return child_ctx;
    }

    function get_each_context_3(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[12] = list[i];
    	return child_ctx;
    }

    // (54:0) {#if (item.sprite && item.sprite != 'Resources/Blanks/Blank.png') || attacks.length > 0}
    function create_if_block_8(ctx) {
    	let tr;
    	let td;
    	let div;
    	let current;
    	let if_block = /*attacks*/ ctx[2].length > 0 && create_if_block_9(ctx);

    	const block = {
    		c: function create() {
    			tr = element("tr");
    			td = element("td");
    			div = element("div");
    			if (if_block) if_block.c();
    			add_location(div, file$9, 56, 6, 1397);
    			attr_dev(td, "colspan", "2");
    			attr_dev(td, "class", "td-attacks-table");
    			add_location(td, file$9, 55, 4, 1348);
    			add_location(tr, file$9, 54, 2, 1338);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, tr, anchor);
    			append_dev(tr, td);
    			append_dev(td, div);
    			if (if_block) if_block.m(div, null);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (/*attacks*/ ctx[2].length > 0) {
    				if (if_block) {
    					if_block.p(ctx, dirty);
    					transition_in(if_block, 1);
    				} else {
    					if_block = create_if_block_9(ctx);
    					if_block.c();
    					transition_in(if_block, 1);
    					if_block.m(div, null);
    				}
    			} else if (if_block) {
    				group_outros();

    				transition_out(if_block, 1, 1, () => {
    					if_block = null;
    				});

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(tr);
    			if (if_block) if_block.d();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_8.name,
    		type: "if",
    		source: "(54:0) {#if (item.sprite && item.sprite != 'Resources/Blanks/Blank.png') || attacks.length > 0}",
    		ctx
    	});

    	return block;
    }

    // (58:8) {#if attacks.length > 0}
    function create_if_block_9(ctx) {
    	let table;
    	let thead;
    	let t0;
    	let td;
    	let t2;
    	let t3;
    	let current;
    	let if_block0 = /*item*/ ctx[0].battleType != 2 && create_if_block_17(ctx);
    	let each_value_3 = /*attacks*/ ctx[2];
    	let each_blocks = [];

    	for (let i = 0; i < each_value_3.length; i += 1) {
    		each_blocks[i] = create_each_block_3(get_each_context_3(ctx, each_value_3, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	let if_block1 = /*item*/ ctx[0].damageAlter && /*item*/ ctx[0].battleType != 2 && create_if_block_10(ctx);

    	const block = {
    		c: function create() {
    			table = element("table");
    			thead = element("thead");
    			if (if_block0) if_block0.c();
    			t0 = space();
    			td = element("td");
    			td.textContent = `${rul.str("damage")}`;
    			t2 = space();

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			t3 = space();
    			if (if_block1) if_block1.c();
    			add_location(td, file$9, 65, 14, 1713);
    			add_location(thead, file$9, 59, 12, 1491);
    			attr_dev(table, "class", "attacks-table");
    			add_location(table, file$9, 58, 10, 1448);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, table, anchor);
    			append_dev(table, thead);
    			if (if_block0) if_block0.m(thead, null);
    			append_dev(thead, t0);
    			append_dev(thead, td);
    			append_dev(table, t2);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(table, null);
    			}

    			append_dev(table, t3);
    			if (if_block1) if_block1.m(table, null);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (/*item*/ ctx[0].battleType != 2) {
    				if (if_block0) {
    					if_block0.p(ctx, dirty);
    				} else {
    					if_block0 = create_if_block_17(ctx);
    					if_block0.c();
    					if_block0.m(thead, t0);
    				}
    			} else if (if_block0) {
    				if_block0.d(1);
    				if_block0 = null;
    			}

    			if (dirty & /*attacks, rul, Object*/ 4) {
    				each_value_3 = /*attacks*/ ctx[2];
    				let i;

    				for (i = 0; i < each_value_3.length; i += 1) {
    					const child_ctx = get_each_context_3(ctx, each_value_3, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block_3(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(table, t3);
    					}
    				}

    				group_outros();

    				for (i = each_value_3.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}

    				check_outros();
    			}

    			if (/*item*/ ctx[0].damageAlter && /*item*/ ctx[0].battleType != 2) {
    				if (if_block1) {
    					if_block1.p(ctx, dirty);
    					transition_in(if_block1, 1);
    				} else {
    					if_block1 = create_if_block_10(ctx);
    					if_block1.c();
    					transition_in(if_block1, 1);
    					if_block1.m(table, null);
    				}
    			} else if (if_block1) {
    				group_outros();

    				transition_out(if_block1, 1, 1, () => {
    					if_block1 = null;
    				});

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;

    			for (let i = 0; i < each_value_3.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			transition_in(if_block1);
    			current = true;
    		},
    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			transition_out(if_block1);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(table);
    			if (if_block0) if_block0.d();
    			destroy_each(each_blocks, detaching);
    			if (if_block1) if_block1.d();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_9.name,
    		type: "if",
    		source: "(58:8) {#if attacks.length > 0}",
    		ctx
    	});

    	return block;
    }

    // (61:14) {#if item.battleType != 2}
    function create_if_block_17(ctx) {
    	let td0;
    	let t1;
    	let td1;
    	let t3;
    	let td2;

    	const block = {
    		c: function create() {
    			td0 = element("td");
    			td0.textContent = `${rul.str("mode")}`;
    			t1 = space();
    			td1 = element("td");
    			td1.textContent = `${rul.str("accuracy")}`;
    			t3 = space();
    			td2 = element("td");
    			td2.textContent = `${rul.str("cost")}`;
    			add_location(td0, file$9, 61, 16, 1558);
    			add_location(td1, file$9, 62, 16, 1602);
    			add_location(td2, file$9, 63, 16, 1650);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, td0, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, td1, anchor);
    			insert_dev(target, t3, anchor);
    			insert_dev(target, td2, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(td0);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(td1);
    			if (detaching) detach_dev(t3);
    			if (detaching) detach_dev(td2);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_17.name,
    		type: "if",
    		source: "(61:14) {#if item.battleType != 2}",
    		ctx
    	});

    	return block;
    }

    // (87:16) {:else}
    function create_else_block_1(ctx) {
    	let td0;
    	let t0_value = rul.str(/*attack*/ ctx[12].name) + "";
    	let t0;

    	let t1_value = (/*attack*/ ctx[12].shots == 1
    	? ""
    	: "×" + /*attack*/ ctx[12].shots) + "";

    	let t1;
    	let t2;
    	let td1;
    	let nobr0;
    	let span0;
    	let em0;
    	let t3_value = /*attack*/ ctx[12].accuracy + "";
    	let t3;
    	let t4;
    	let t5_value = "%" + "";
    	let t5;
    	let t6;
    	let span1;
    	let t7;
    	let div;
    	let t8;
    	let td2;
    	let nobr1;
    	let em1;
    	let t9_value = /*attack*/ ctx[12].cost.time + "";
    	let t9;
    	let t10;
    	let t11_value = (/*attack*/ ctx[12].flatTime ? "" : "%") + "";
    	let t11;
    	let t12;
    	let small;
    	let t14;
    	let current;
    	let if_block = /*attack*/ ctx[12].range && create_if_block_16(ctx);

    	const specialbonus = new SpecialBonus({
    			props: {
    				bonus: /*attack*/ ctx[12].accuracyMultiplier
    			},
    			$$inline: true
    		});

    	let each_value_4 = Object.keys(/*attack*/ ctx[12].cost);
    	let each_blocks = [];

    	for (let i = 0; i < each_value_4.length; i += 1) {
    		each_blocks[i] = create_each_block_4(get_each_context_4(ctx, each_value_4, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			td0 = element("td");
    			t0 = text(t0_value);
    			t1 = text(t1_value);
    			t2 = space();
    			td1 = element("td");
    			nobr0 = element("nobr");
    			span0 = element("span");
    			em0 = element("em");
    			t3 = text(t3_value);
    			t4 = space();
    			t5 = text(t5_value);
    			t6 = space();
    			span1 = element("span");
    			if (if_block) if_block.c();
    			t7 = space();
    			div = element("div");
    			create_component(specialbonus.$$.fragment);
    			t8 = space();
    			td2 = element("td");
    			nobr1 = element("nobr");
    			em1 = element("em");
    			t9 = text(t9_value);
    			t10 = space();
    			t11 = text(t11_value);
    			t12 = space();
    			small = element("small");
    			small.textContent = `${rul.str("TU")}`;
    			t14 = space();

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			add_location(td0, file$9, 87, 18, 2696);
    			attr_dev(em0, "class", "big-number");
    			add_location(em0, file$9, 93, 24, 2922);
    			add_location(span0, file$9, 92, 22, 2890);
    			add_location(span1, file$9, 97, 22, 3055);
    			add_location(div, file$9, 105, 22, 3347);
    			add_location(nobr0, file$9, 91, 20, 2860);
    			add_location(td1, file$9, 90, 18, 2834);
    			add_location(em1, file$9, 112, 22, 3588);
    			add_location(small, file$9, 114, 22, 3691);
    			add_location(nobr1, file$9, 111, 20, 3558);
    			add_location(td2, file$9, 110, 18, 3532);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, td0, anchor);
    			append_dev(td0, t0);
    			append_dev(td0, t1);
    			insert_dev(target, t2, anchor);
    			insert_dev(target, td1, anchor);
    			append_dev(td1, nobr0);
    			append_dev(nobr0, span0);
    			append_dev(span0, em0);
    			append_dev(em0, t3);
    			append_dev(span0, t4);
    			append_dev(span0, t5);
    			append_dev(nobr0, t6);
    			append_dev(nobr0, span1);
    			if (if_block) if_block.m(span1, null);
    			append_dev(nobr0, t7);
    			append_dev(nobr0, div);
    			mount_component(specialbonus, div, null);
    			insert_dev(target, t8, anchor);
    			insert_dev(target, td2, anchor);
    			append_dev(td2, nobr1);
    			append_dev(nobr1, em1);
    			append_dev(em1, t9);
    			append_dev(nobr1, t10);
    			append_dev(nobr1, t11);
    			append_dev(nobr1, t12);
    			append_dev(nobr1, small);
    			append_dev(td2, t14);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(td2, null);
    			}

    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if ((!current || dirty & /*attacks*/ 4) && t0_value !== (t0_value = rul.str(/*attack*/ ctx[12].name) + "")) set_data_dev(t0, t0_value);

    			if ((!current || dirty & /*attacks*/ 4) && t1_value !== (t1_value = (/*attack*/ ctx[12].shots == 1
    			? ""
    			: "×" + /*attack*/ ctx[12].shots) + "")) set_data_dev(t1, t1_value);

    			if ((!current || dirty & /*attacks*/ 4) && t3_value !== (t3_value = /*attack*/ ctx[12].accuracy + "")) set_data_dev(t3, t3_value);

    			if (/*attack*/ ctx[12].range) {
    				if (if_block) {
    					if_block.p(ctx, dirty);
    				} else {
    					if_block = create_if_block_16(ctx);
    					if_block.c();
    					if_block.m(span1, null);
    				}
    			} else if (if_block) {
    				if_block.d(1);
    				if_block = null;
    			}

    			const specialbonus_changes = {};
    			if (dirty & /*attacks*/ 4) specialbonus_changes.bonus = /*attack*/ ctx[12].accuracyMultiplier;
    			specialbonus.$set(specialbonus_changes);
    			if ((!current || dirty & /*attacks*/ 4) && t9_value !== (t9_value = /*attack*/ ctx[12].cost.time + "")) set_data_dev(t9, t9_value);
    			if ((!current || dirty & /*attacks*/ 4) && t11_value !== (t11_value = (/*attack*/ ctx[12].flatTime ? "" : "%") + "")) set_data_dev(t11, t11_value);

    			if (dirty & /*Object, attacks, rul*/ 4) {
    				each_value_4 = Object.keys(/*attack*/ ctx[12].cost);
    				let i;

    				for (i = 0; i < each_value_4.length; i += 1) {
    					const child_ctx = get_each_context_4(ctx, each_value_4, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block_4(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(td2, null);
    					}
    				}

    				group_outros();

    				for (i = each_value_4.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(specialbonus.$$.fragment, local);

    			for (let i = 0; i < each_value_4.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(specialbonus.$$.fragment, local);
    			each_blocks = each_blocks.filter(Boolean);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(td0);
    			if (detaching) detach_dev(t2);
    			if (detaching) detach_dev(td1);
    			if (if_block) if_block.d();
    			destroy_component(specialbonus);
    			if (detaching) detach_dev(t8);
    			if (detaching) detach_dev(td2);
    			destroy_each(each_blocks, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block_1.name,
    		type: "else",
    		source: "(87:16) {:else}",
    		ctx
    	});

    	return block;
    }

    // (70:16) {#if attack.mode == 'ammo'}
    function create_if_block_14(ctx) {
    	let td0;
    	let t0;
    	let td1;
    	let t1;
    	let br;
    	let t2;
    	let small;
    	let t3_value = rul.str("Shots") + "";
    	let t3;
    	let t4;
    	let t5_value = /*attack*/ ctx[12].item.clipSize + "";
    	let t5;
    	let t6;
    	let t7_value = rul.str("Wgt") + "";
    	let t7;
    	let t8;
    	let t9_value = /*attack*/ ctx[12].item.weight + "";
    	let t9;
    	let current;

    	const canvasimage = new CanvasImage({
    			props: {
    				src: rul.sprite(/*attack*/ ctx[12].item.sprite),
    				maxWidth: 32 * /*attack*/ ctx[12].item.invWidth,
    				maxHeight: 32 * /*attack*/ ctx[12].item.invHeight,
    				zoom: "2"
    			},
    			$$inline: true
    		});

    	const link = new Link({
    			props: { href: /*attack*/ ctx[12].item.type },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			td0 = element("td");
    			create_component(canvasimage.$$.fragment);
    			t0 = space();
    			td1 = element("td");
    			create_component(link.$$.fragment);
    			t1 = space();
    			br = element("br");
    			t2 = space();
    			small = element("small");
    			t3 = text(t3_value);
    			t4 = text(": ");
    			t5 = text(t5_value);
    			t6 = space();
    			t7 = text(t7_value);
    			t8 = text(": ");
    			t9 = text(t9_value);
    			attr_dev(td0, "class", "ammo-img svelte-1lgzdls");
    			add_location(td0, file$9, 70, 18, 1887);
    			add_location(br, file$9, 80, 20, 2433);
    			add_location(small, file$9, 81, 20, 2461);
    			attr_dev(td1, "colspan", "2");
    			add_location(td1, file$9, 78, 18, 2341);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, td0, anchor);
    			mount_component(canvasimage, td0, null);
    			insert_dev(target, t0, anchor);
    			insert_dev(target, td1, anchor);
    			mount_component(link, td1, null);
    			append_dev(td1, t1);
    			append_dev(td1, br);
    			append_dev(td1, t2);
    			append_dev(td1, small);
    			append_dev(small, t3);
    			append_dev(small, t4);
    			append_dev(small, t5);
    			append_dev(small, t6);
    			append_dev(small, t7);
    			append_dev(small, t8);
    			append_dev(small, t9);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const canvasimage_changes = {};
    			if (dirty & /*attacks*/ 4) canvasimage_changes.src = rul.sprite(/*attack*/ ctx[12].item.sprite);
    			if (dirty & /*attacks*/ 4) canvasimage_changes.maxWidth = 32 * /*attack*/ ctx[12].item.invWidth;
    			if (dirty & /*attacks*/ 4) canvasimage_changes.maxHeight = 32 * /*attack*/ ctx[12].item.invHeight;
    			canvasimage.$set(canvasimage_changes);
    			const link_changes = {};
    			if (dirty & /*attacks*/ 4) link_changes.href = /*attack*/ ctx[12].item.type;
    			link.$set(link_changes);
    			if ((!current || dirty & /*attacks*/ 4) && t5_value !== (t5_value = /*attack*/ ctx[12].item.clipSize + "")) set_data_dev(t5, t5_value);
    			if ((!current || dirty & /*attacks*/ 4) && t9_value !== (t9_value = /*attack*/ ctx[12].item.weight + "")) set_data_dev(t9, t9_value);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(canvasimage.$$.fragment, local);
    			transition_in(link.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(canvasimage.$$.fragment, local);
    			transition_out(link.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(td0);
    			destroy_component(canvasimage);
    			if (detaching) detach_dev(t0);
    			if (detaching) detach_dev(td1);
    			destroy_component(link);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_14.name,
    		type: "if",
    		source: "(70:16) {#if attack.mode == 'ammo'}",
    		ctx
    	});

    	return block;
    }

    // (99:24) {#if attack.range}
    function create_if_block_16(ctx) {
    	let html_tag;
    	let raw_value = rul.str("at N m").replace("N", `<em>${/*attack*/ ctx[12].range}</em>`) + "";

    	const block = {
    		c: function create() {
    			html_tag = new HtmlTag(raw_value, null);
    		},
    		m: function mount(target, anchor) {
    			html_tag.m(target, anchor);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*attacks*/ 4 && raw_value !== (raw_value = rul.str("at N m").replace("N", `<em>${/*attack*/ ctx[12].range}</em>`) + "")) html_tag.p(raw_value);
    		},
    		d: function destroy(detaching) {
    			if (detaching) html_tag.d();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_16.name,
    		type: "if",
    		source: "(99:24) {#if attack.range}",
    		ctx
    	});

    	return block;
    }

    // (118:22) {#if res != 'time' && attack.cost[res] != 0}
    function create_if_block_15(ctx) {
    	let br;
    	let t0;
    	let nobr;
    	let t1;
    	let small;
    	let t2_value = rul.str(/*res*/ ctx[15]) + "";
    	let t2;
    	let t3;
    	let current;

    	const value = new Value({
    			props: {
    				val: /*attack*/ ctx[12].cost[/*res*/ ctx[15]]
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			br = element("br");
    			t0 = space();
    			nobr = element("nobr");
    			create_component(value.$$.fragment);
    			t1 = space();
    			small = element("small");
    			t2 = text(t2_value);
    			t3 = space();
    			add_location(br, file$9, 118, 24, 3905);
    			add_location(small, file$9, 121, 26, 4031);
    			add_location(nobr, file$9, 119, 24, 3937);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, br, anchor);
    			insert_dev(target, t0, anchor);
    			insert_dev(target, nobr, anchor);
    			mount_component(value, nobr, null);
    			append_dev(nobr, t1);
    			append_dev(nobr, small);
    			append_dev(small, t2);
    			append_dev(nobr, t3);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const value_changes = {};
    			if (dirty & /*attacks*/ 4) value_changes.val = /*attack*/ ctx[12].cost[/*res*/ ctx[15]];
    			value.$set(value_changes);
    			if ((!current || dirty & /*attacks*/ 4) && t2_value !== (t2_value = rul.str(/*res*/ ctx[15]) + "")) set_data_dev(t2, t2_value);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(value.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(value.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(br);
    			if (detaching) detach_dev(t0);
    			if (detaching) detach_dev(nobr);
    			destroy_component(value);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_15.name,
    		type: "if",
    		source: "(118:22) {#if res != 'time' && attack.cost[res] != 0}",
    		ctx
    	});

    	return block;
    }

    // (117:20) {#each Object.keys(attack.cost) as res}
    function create_each_block_4(ctx) {
    	let if_block_anchor;
    	let current;
    	let if_block = /*res*/ ctx[15] != "time" && /*attack*/ ctx[12].cost[/*res*/ ctx[15]] != 0 && create_if_block_15(ctx);

    	const block = {
    		c: function create() {
    			if (if_block) if_block.c();
    			if_block_anchor = empty();
    		},
    		m: function mount(target, anchor) {
    			if (if_block) if_block.m(target, anchor);
    			insert_dev(target, if_block_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (/*res*/ ctx[15] != "time" && /*attack*/ ctx[12].cost[/*res*/ ctx[15]] != 0) {
    				if (if_block) {
    					if_block.p(ctx, dirty);
    					transition_in(if_block, 1);
    				} else {
    					if_block = create_if_block_15(ctx);
    					if_block.c();
    					transition_in(if_block, 1);
    					if_block.m(if_block_anchor.parentNode, if_block_anchor);
    				}
    			} else if (if_block) {
    				group_outros();

    				transition_out(if_block, 1, 1, () => {
    					if_block = null;
    				});

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (if_block) if_block.d(detaching);
    			if (detaching) detach_dev(if_block_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block_4.name,
    		type: "each",
    		source: "(117:20) {#each Object.keys(attack.cost) as res}",
    		ctx
    	});

    	return block;
    }

    // (129:18) {#if 'damage' in attack || 'damageType' in attack}
    function create_if_block_12(ctx) {
    	let nobr;

    	let t0_value = (/*attack*/ ctx[12].pellets > 1 && /*attack*/ ctx[12].damageBonus
    	? "("
    	: "") + "";

    	let t0;
    	let t1;
    	let em;
    	let t2_value = (/*attack*/ ctx[12].damage || 0) + "";
    	let t2;
    	let t3;
    	let small;
    	let t4;

    	let t5_value = (/*attack*/ ctx[12].pellets > 1 && /*attack*/ ctx[12].damageBonus
    	? ")"
    	: "") + "";

    	let t5;
    	let t6;

    	let t7_value = (/*attack*/ ctx[12].pellets > 1
    	? " ×" + /*attack*/ ctx[12].pellets
    	: "") + "";

    	let t7;
    	let t8;
    	let br;
    	let t9;
    	let if_block_anchor;
    	let current;

    	const specialbonus = new SpecialBonus({
    			props: {
    				plus: true,
    				bonus: /*attack*/ ctx[12].damageBonus
    			},
    			$$inline: true
    		});

    	let if_block = /*attack*/ ctx[12].damageType && create_if_block_13(ctx);

    	const block = {
    		c: function create() {
    			nobr = element("nobr");
    			t0 = text(t0_value);
    			t1 = space();
    			em = element("em");
    			t2 = text(t2_value);
    			t3 = space();
    			small = element("small");
    			create_component(specialbonus.$$.fragment);
    			t4 = space();
    			t5 = text(t5_value);
    			t6 = space();
    			t7 = text(t7_value);
    			t8 = space();
    			br = element("br");
    			t9 = space();
    			if (if_block) if_block.c();
    			if_block_anchor = empty();
    			add_location(em, file$9, 131, 22, 4420);
    			add_location(small, file$9, 132, 22, 4473);
    			add_location(nobr, file$9, 129, 20, 4313);
    			add_location(br, file$9, 138, 20, 4796);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, nobr, anchor);
    			append_dev(nobr, t0);
    			append_dev(nobr, t1);
    			append_dev(nobr, em);
    			append_dev(em, t2);
    			append_dev(nobr, t3);
    			append_dev(nobr, small);
    			mount_component(specialbonus, small, null);
    			append_dev(small, t4);
    			append_dev(small, t5);
    			append_dev(nobr, t6);
    			append_dev(nobr, t7);
    			insert_dev(target, t8, anchor);
    			insert_dev(target, br, anchor);
    			insert_dev(target, t9, anchor);
    			if (if_block) if_block.m(target, anchor);
    			insert_dev(target, if_block_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if ((!current || dirty & /*attacks*/ 4) && t0_value !== (t0_value = (/*attack*/ ctx[12].pellets > 1 && /*attack*/ ctx[12].damageBonus
    			? "("
    			: "") + "")) set_data_dev(t0, t0_value);

    			if ((!current || dirty & /*attacks*/ 4) && t2_value !== (t2_value = (/*attack*/ ctx[12].damage || 0) + "")) set_data_dev(t2, t2_value);
    			const specialbonus_changes = {};
    			if (dirty & /*attacks*/ 4) specialbonus_changes.bonus = /*attack*/ ctx[12].damageBonus;
    			specialbonus.$set(specialbonus_changes);

    			if ((!current || dirty & /*attacks*/ 4) && t5_value !== (t5_value = (/*attack*/ ctx[12].pellets > 1 && /*attack*/ ctx[12].damageBonus
    			? ")"
    			: "") + "")) set_data_dev(t5, t5_value);

    			if ((!current || dirty & /*attacks*/ 4) && t7_value !== (t7_value = (/*attack*/ ctx[12].pellets > 1
    			? " ×" + /*attack*/ ctx[12].pellets
    			: "") + "")) set_data_dev(t7, t7_value);

    			if (/*attack*/ ctx[12].damageType) {
    				if (if_block) {
    					if_block.p(ctx, dirty);
    					transition_in(if_block, 1);
    				} else {
    					if_block = create_if_block_13(ctx);
    					if_block.c();
    					transition_in(if_block, 1);
    					if_block.m(if_block_anchor.parentNode, if_block_anchor);
    				}
    			} else if (if_block) {
    				group_outros();

    				transition_out(if_block, 1, 1, () => {
    					if_block = null;
    				});

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(specialbonus.$$.fragment, local);
    			transition_in(if_block);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(specialbonus.$$.fragment, local);
    			transition_out(if_block);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(nobr);
    			destroy_component(specialbonus);
    			if (detaching) detach_dev(t8);
    			if (detaching) detach_dev(br);
    			if (detaching) detach_dev(t9);
    			if (if_block) if_block.d(detaching);
    			if (detaching) detach_dev(if_block_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_12.name,
    		type: "if",
    		source: "(129:18) {#if 'damage' in attack || 'damageType' in attack}",
    		ctx
    	});

    	return block;
    }

    // (140:20) {#if attack.damageType}
    function create_if_block_13(ctx) {
    	let current;

    	const link = new Link({
    			props: {
    				href: rul.damageTypes[/*attack*/ ctx[12].damageType]
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(link.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(link, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const link_changes = {};
    			if (dirty & /*attacks*/ 4) link_changes.href = rul.damageTypes[/*attack*/ ctx[12].damageType];
    			link.$set(link_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(link.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(link.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(link, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_13.name,
    		type: "if",
    		source: "(140:20) {#if attack.damageType}",
    		ctx
    	});

    	return block;
    }

    // (147:14) {#if attack.mode == 'ammo' && attack.alter}
    function create_if_block_11(ctx) {
    	let current;

    	const alterlist = new AlterList({
    			props: { items: /*attack*/ ctx[12].alter },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(alterlist.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(alterlist, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const alterlist_changes = {};
    			if (dirty & /*attacks*/ 4) alterlist_changes.items = /*attack*/ ctx[12].alter;
    			alterlist.$set(alterlist_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(alterlist.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(alterlist.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(alterlist, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_11.name,
    		type: "if",
    		source: "(147:14) {#if attack.mode == 'ammo' && attack.alter}",
    		ctx
    	});

    	return block;
    }

    // (68:12) {#each attacks as attack}
    function create_each_block_3(ctx) {
    	let tr;
    	let current_block_type_index;
    	let if_block0;
    	let t0;
    	let td;
    	let t1;
    	let if_block2_anchor;
    	let current;
    	const if_block_creators = [create_if_block_14, create_else_block_1];
    	const if_blocks = [];

    	function select_block_type(ctx, dirty) {
    		if (/*attack*/ ctx[12].mode == "ammo") return 0;
    		return 1;
    	}

    	current_block_type_index = select_block_type(ctx);
    	if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    	let if_block1 = ("damage" in /*attack*/ ctx[12] || "damageType" in /*attack*/ ctx[12]) && create_if_block_12(ctx);
    	let if_block2 = /*attack*/ ctx[12].mode == "ammo" && /*attack*/ ctx[12].alter && create_if_block_11(ctx);

    	const block = {
    		c: function create() {
    			tr = element("tr");
    			if_block0.c();
    			t0 = space();
    			td = element("td");
    			if (if_block1) if_block1.c();
    			t1 = space();
    			if (if_block2) if_block2.c();
    			if_block2_anchor = empty();
    			add_location(td, file$9, 127, 16, 4217);
    			add_location(tr, file$9, 68, 14, 1818);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, tr, anchor);
    			if_blocks[current_block_type_index].m(tr, null);
    			append_dev(tr, t0);
    			append_dev(tr, td);
    			if (if_block1) if_block1.m(td, null);
    			insert_dev(target, t1, anchor);
    			if (if_block2) if_block2.m(target, anchor);
    			insert_dev(target, if_block2_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			let previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type(ctx);

    			if (current_block_type_index === previous_block_index) {
    				if_blocks[current_block_type_index].p(ctx, dirty);
    			} else {
    				group_outros();

    				transition_out(if_blocks[previous_block_index], 1, 1, () => {
    					if_blocks[previous_block_index] = null;
    				});

    				check_outros();
    				if_block0 = if_blocks[current_block_type_index];

    				if (!if_block0) {
    					if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    					if_block0.c();
    				}

    				transition_in(if_block0, 1);
    				if_block0.m(tr, t0);
    			}

    			if ("damage" in /*attack*/ ctx[12] || "damageType" in /*attack*/ ctx[12]) {
    				if (if_block1) {
    					if_block1.p(ctx, dirty);
    					transition_in(if_block1, 1);
    				} else {
    					if_block1 = create_if_block_12(ctx);
    					if_block1.c();
    					transition_in(if_block1, 1);
    					if_block1.m(td, null);
    				}
    			} else if (if_block1) {
    				group_outros();

    				transition_out(if_block1, 1, 1, () => {
    					if_block1 = null;
    				});

    				check_outros();
    			}

    			if (/*attack*/ ctx[12].mode == "ammo" && /*attack*/ ctx[12].alter) {
    				if (if_block2) {
    					if_block2.p(ctx, dirty);
    					transition_in(if_block2, 1);
    				} else {
    					if_block2 = create_if_block_11(ctx);
    					if_block2.c();
    					transition_in(if_block2, 1);
    					if_block2.m(if_block2_anchor.parentNode, if_block2_anchor);
    				}
    			} else if (if_block2) {
    				group_outros();

    				transition_out(if_block2, 1, 1, () => {
    					if_block2 = null;
    				});

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block0);
    			transition_in(if_block1);
    			transition_in(if_block2);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block0);
    			transition_out(if_block1);
    			transition_out(if_block2);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(tr);
    			if_blocks[current_block_type_index].d();
    			if (if_block1) if_block1.d();
    			if (detaching) detach_dev(t1);
    			if (if_block2) if_block2.d(detaching);
    			if (detaching) detach_dev(if_block2_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block_3.name,
    		type: "each",
    		source: "(68:12) {#each attacks as attack}",
    		ctx
    	});

    	return block;
    }

    // (151:12) {#if item.damageAlter && item.battleType != 2}
    function create_if_block_10(ctx) {
    	let current;

    	const alterlist = new AlterList({
    			props: { items: /*item*/ ctx[0].damageAlter },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(alterlist.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(alterlist, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const alterlist_changes = {};
    			if (dirty & /*item*/ 1) alterlist_changes.items = /*item*/ ctx[0].damageAlter;
    			alterlist.$set(alterlist_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(alterlist.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(alterlist.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(alterlist, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_10.name,
    		type: "if",
    		source: "(151:12) {#if item.damageAlter && item.battleType != 2}",
    		ctx
    	});

    	return block;
    }

    // (164:2) {#if !['sprite', 'type', '_attacks', 'damageAlter'].includes(key)}
    function create_if_block$6(ctx) {
    	let tr;
    	let t0;
    	let td;
    	let show_if;
    	let show_if_1;
    	let show_if_2;
    	let show_if_3;
    	let show_if_4;
    	let show_if_5;
    	let current_block_type_index;
    	let if_block;
    	let t1;
    	let current;

    	const tablekey = new TableKey({
    			props: { key: /*key*/ ctx[3] },
    			$$inline: true
    		});

    	const if_block_creators = [
    		create_if_block_1$3,
    		create_if_block_2$3,
    		create_if_block_3$1,
    		create_if_block_4,
    		create_if_block_5,
    		create_if_block_6,
    		create_if_block_7,
    		create_else_block$3
    	];

    	const if_blocks = [];

    	function select_block_type_1(ctx, dirty) {
    		if (dirty & /*item*/ 1) show_if = !!["requiresBuyBaseFunc"].includes(/*key*/ ctx[3]);
    		if (show_if) return 0;
    		if (dirty & /*item*/ 1) show_if_1 = !!["manufacture", "componentOf"].includes(/*key*/ ctx[3]);
    		if (show_if_1) return 1;

    		if (dirty & /*item*/ 1) show_if_2 = !![
    			"damageBonus",
    			"meleeBonus",
    			"accuracyMultiplier",
    			"meleeMultiplier",
    			"closeQuartersMultiplier"
    		].includes(/*key*/ ctx[3]);

    		if (show_if_2) return 2;
    		if (dirty & /*item*/ 1) show_if_3 = !!["damageType", "meleeType"].includes(/*key*/ ctx[3]);
    		if (show_if_3) return 3;
    		if (/*key*/ ctx[3] == "battleType") return 4;
    		if (dirty & /*item*/ 1) show_if_4 = !!/*key*/ ctx[3].includes("Sound");
    		if (show_if_4) return 5;
    		if (dirty & /*item*/ 1) show_if_5 = !!["floorSprite", "handSprite"].includes(/*key*/ ctx[3]);
    		if (show_if_5) return 6;
    		return 7;
    	}

    	current_block_type_index = select_block_type_1(ctx, -1);
    	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

    	const block = {
    		c: function create() {
    			tr = element("tr");
    			create_component(tablekey.$$.fragment);
    			t0 = space();
    			td = element("td");
    			if_block.c();
    			t1 = space();
    			attr_dev(td, "class", "right-column svelte-1lgzdls");
    			add_location(td, file$9, 166, 6, 5584);
    			add_location(tr, file$9, 164, 4, 5546);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, tr, anchor);
    			mount_component(tablekey, tr, null);
    			append_dev(tr, t0);
    			append_dev(tr, td);
    			if_blocks[current_block_type_index].m(td, null);
    			append_dev(tr, t1);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const tablekey_changes = {};
    			if (dirty & /*item*/ 1) tablekey_changes.key = /*key*/ ctx[3];
    			tablekey.$set(tablekey_changes);
    			let previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type_1(ctx, dirty);

    			if (current_block_type_index === previous_block_index) {
    				if_blocks[current_block_type_index].p(ctx, dirty);
    			} else {
    				group_outros();

    				transition_out(if_blocks[previous_block_index], 1, 1, () => {
    					if_blocks[previous_block_index] = null;
    				});

    				check_outros();
    				if_block = if_blocks[current_block_type_index];

    				if (!if_block) {
    					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    					if_block.c();
    				}

    				transition_in(if_block, 1);
    				if_block.m(td, null);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(tablekey.$$.fragment, local);
    			transition_in(if_block);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(tablekey.$$.fragment, local);
    			transition_out(if_block);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(tr);
    			destroy_component(tablekey);
    			if_blocks[current_block_type_index].d();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$6.name,
    		type: "if",
    		source: "(164:2) {#if !['sprite', 'type', '_attacks', 'damageAlter'].includes(key)}",
    		ctx
    	});

    	return block;
    }

    // (199:8) {:else}
    function create_else_block$3(ctx) {
    	let current;

    	const value = new Value({
    			props: { val: /*prop*/ ctx[4] },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(value.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(value, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const value_changes = {};
    			if (dirty & /*item*/ 1) value_changes.val = /*prop*/ ctx[4];
    			value.$set(value_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(value.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(value.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(value, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block$3.name,
    		type: "else",
    		source: "(199:8) {:else}",
    		ctx
    	});

    	return block;
    }

    // (194:62) 
    function create_if_block_7(ctx) {
    	let a;
    	let t0_value = /*prop*/ ctx[4] + "";
    	let t0;
    	let a_href_value;
    	let t1;
    	let img;
    	let img_alt_value;
    	let img_src_value;

    	const block = {
    		c: function create() {
    			a = element("a");
    			t0 = text(t0_value);
    			t1 = space();
    			img = element("img");
    			set_style(a, "vertical-align", "top");
    			attr_dev(a, "href", a_href_value = rul.specialSprite(/*key*/ ctx[3], /*prop*/ ctx[4]));
    			add_location(a, file$9, 194, 10, 6796);
    			attr_dev(img, "class", "sprite svelte-1lgzdls");
    			attr_dev(img, "alt", img_alt_value = /*prop*/ ctx[4]);
    			if (img.src !== (img_src_value = rul.specialSprite(/*key*/ ctx[3], /*prop*/ ctx[4]))) attr_dev(img, "src", img_src_value);
    			add_location(img, file$9, 197, 10, 6910);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, a, anchor);
    			append_dev(a, t0);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, img, anchor);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*item*/ 1 && t0_value !== (t0_value = /*prop*/ ctx[4] + "")) set_data_dev(t0, t0_value);

    			if (dirty & /*item*/ 1 && a_href_value !== (a_href_value = rul.specialSprite(/*key*/ ctx[3], /*prop*/ ctx[4]))) {
    				attr_dev(a, "href", a_href_value);
    			}

    			if (dirty & /*item*/ 1 && img_alt_value !== (img_alt_value = /*prop*/ ctx[4])) {
    				attr_dev(img, "alt", img_alt_value);
    			}

    			if (dirty & /*item*/ 1 && img.src !== (img_src_value = rul.specialSprite(/*key*/ ctx[3], /*prop*/ ctx[4]))) {
    				attr_dev(img, "src", img_src_value);
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(a);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(img);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_7.name,
    		type: "if",
    		source: "(194:62) ",
    		ctx
    	});

    	return block;
    }

    // (189:40) 
    function create_if_block_6(ctx) {
    	let each_1_anchor;
    	let each_value_2 = soundsFrom(/*prop*/ ctx[4]);
    	let each_blocks = [];

    	for (let i = 0; i < each_value_2.length; i += 1) {
    		each_blocks[i] = create_each_block_2(get_each_context_2(ctx, each_value_2, i));
    	}

    	const block = {
    		c: function create() {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			each_1_anchor = empty();
    		},
    		m: function mount(target, anchor) {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(target, anchor);
    			}

    			insert_dev(target, each_1_anchor, anchor);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*soundsFrom, Object, item*/ 1) {
    				each_value_2 = soundsFrom(/*prop*/ ctx[4]);
    				let i;

    				for (i = 0; i < each_value_2.length; i += 1) {
    					const child_ctx = get_each_context_2(ctx, each_value_2, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    					} else {
    						each_blocks[i] = create_each_block_2(child_ctx);
    						each_blocks[i].c();
    						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
    					}
    				}

    				for (; i < each_blocks.length; i += 1) {
    					each_blocks[i].d(1);
    				}

    				each_blocks.length = each_value_2.length;
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			destroy_each(each_blocks, detaching);
    			if (detaching) detach_dev(each_1_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_6.name,
    		type: "if",
    		source: "(189:40) ",
    		ctx
    	});

    	return block;
    }

    // (187:38) 
    function create_if_block_5(ctx) {
    	let t0_value = /*prop*/ ctx[4] + "";
    	let t0;
    	let t1;
    	let t2_value = rul.str(rul.battleTypes[/*prop*/ ctx[4]]) + "";
    	let t2;

    	const block = {
    		c: function create() {
    			t0 = text(t0_value);
    			t1 = text(": ");
    			t2 = text(t2_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t0, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, t2, anchor);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*item*/ 1 && t0_value !== (t0_value = /*prop*/ ctx[4] + "")) set_data_dev(t0, t0_value);
    			if (dirty & /*item*/ 1 && t2_value !== (t2_value = rul.str(rul.battleTypes[/*prop*/ ctx[4]]) + "")) set_data_dev(t2, t2_value);
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t0);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(t2);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_5.name,
    		type: "if",
    		source: "(187:38) ",
    		ctx
    	});

    	return block;
    }

    // (185:60) 
    function create_if_block_4(ctx) {
    	let t_value = rul.damageTypeName(/*prop*/ ctx[4]) + "";
    	let t;

    	const block = {
    		c: function create() {
    			t = text(t_value);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*item*/ 1 && t_value !== (t_value = rul.damageTypeName(/*prop*/ ctx[4]) + "")) set_data_dev(t, t_value);
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_4.name,
    		type: "if",
    		source: "(185:60) ",
    		ctx
    	});

    	return block;
    }

    // (183:130) 
    function create_if_block_3$1(ctx) {
    	let current;

    	const specialbonus = new SpecialBonus({
    			props: { bonus: /*prop*/ ctx[4] },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(specialbonus.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(specialbonus, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const specialbonus_changes = {};
    			if (dirty & /*item*/ 1) specialbonus_changes.bonus = /*prop*/ ctx[4];
    			specialbonus.$set(specialbonus_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(specialbonus.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(specialbonus.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(specialbonus, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_3$1.name,
    		type: "if",
    		source: "(183:130) ",
    		ctx
    	});

    	return block;
    }

    // (170:63) 
    function create_if_block_2$3(ctx) {
    	let table;
    	let current;
    	let each_value_1 = Object.keys(/*prop*/ ctx[4]);
    	let each_blocks = [];

    	for (let i = 0; i < each_value_1.length; i += 1) {
    		each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			table = element("table");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			attr_dev(table, "class", "number-table");
    			add_location(table, file$9, 170, 10, 5799);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, table, anchor);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(table, null);
    			}

    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*Object, item*/ 1) {
    				each_value_1 = Object.keys(/*prop*/ ctx[4]);
    				let i;

    				for (i = 0; i < each_value_1.length; i += 1) {
    					const child_ctx = get_each_context_1(ctx, each_value_1, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block_1(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(table, null);
    					}
    				}

    				group_outros();

    				for (i = each_value_1.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;

    			for (let i = 0; i < each_value_1.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},
    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(table);
    			destroy_each(each_blocks, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_2$3.name,
    		type: "if",
    		source: "(170:63) ",
    		ctx
    	});

    	return block;
    }

    // (168:8) {#if ['requiresBuyBaseFunc'].includes(key)}
    function create_if_block_1$3(ctx) {
    	let current;

    	const baseservicelist = new BaseServiceList({
    			props: { items: /*prop*/ ctx[4], vertical: true },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(baseservicelist.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(baseservicelist, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const baseservicelist_changes = {};
    			if (dirty & /*item*/ 1) baseservicelist_changes.items = /*prop*/ ctx[4];
    			baseservicelist.$set(baseservicelist_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(baseservicelist.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(baseservicelist.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(baseservicelist, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_1$3.name,
    		type: "if",
    		source: "(168:8) {#if ['requiresBuyBaseFunc'].includes(key)}",
    		ctx
    	});

    	return block;
    }

    // (190:10) {#each soundsFrom(prop) as sound, i}
    function create_each_block_2(ctx) {
    	let html_tag;
    	let raw_value = (/*i*/ ctx[9] > 0 ? "<br/>" : "") + "";
    	let t0;
    	let audio;
    	let t1;
    	let audio_src_value;

    	const block = {
    		c: function create() {
    			t0 = space();
    			audio = element("audio");
    			t1 = text("Audio tag not working");
    			html_tag = new HtmlTag(raw_value, t0);
    			audio.controls = true;
    			if (audio.src !== (audio_src_value = /*sound*/ ctx[10])) attr_dev(audio, "src", audio_src_value);
    			add_location(audio, file$9, 191, 12, 6644);
    		},
    		m: function mount(target, anchor) {
    			html_tag.m(target, anchor);
    			insert_dev(target, t0, anchor);
    			insert_dev(target, audio, anchor);
    			append_dev(audio, t1);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*item*/ 1 && audio.src !== (audio_src_value = /*sound*/ ctx[10])) {
    				attr_dev(audio, "src", audio_src_value);
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) html_tag.d();
    			if (detaching) detach_dev(t0);
    			if (detaching) detach_dev(audio);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block_2.name,
    		type: "each",
    		source: "(190:10) {#each soundsFrom(prop) as sound, i}",
    		ctx
    	});

    	return block;
    }

    // (172:12) {#each Object.keys(prop) as field, i}
    function create_each_block_1(ctx) {
    	let tr;
    	let td0;
    	let em;
    	let t0_value = /*prop*/ ctx[4][/*field*/ ctx[7]] + "";
    	let t0;
    	let t1;
    	let td1;
    	let t2;
    	let current;

    	const link = new Link({
    			props: { href: /*field*/ ctx[7] },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			tr = element("tr");
    			td0 = element("td");
    			em = element("em");
    			t0 = text(t0_value);
    			t1 = space();
    			td1 = element("td");
    			create_component(link.$$.fragment);
    			t2 = space();
    			add_location(em, file$9, 174, 18, 5940);
    			add_location(td0, file$9, 173, 16, 5916);
    			add_location(td1, file$9, 176, 16, 6003);
    			add_location(tr, file$9, 172, 14, 5894);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, tr, anchor);
    			append_dev(tr, td0);
    			append_dev(td0, em);
    			append_dev(em, t0);
    			append_dev(tr, t1);
    			append_dev(tr, td1);
    			mount_component(link, td1, null);
    			append_dev(tr, t2);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if ((!current || dirty & /*item*/ 1) && t0_value !== (t0_value = /*prop*/ ctx[4][/*field*/ ctx[7]] + "")) set_data_dev(t0, t0_value);
    			const link_changes = {};
    			if (dirty & /*item*/ 1) link_changes.href = /*field*/ ctx[7];
    			link.$set(link_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(link.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(link.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(tr);
    			destroy_component(link);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block_1.name,
    		type: "each",
    		source: "(172:12) {#each Object.keys(prop) as field, i}",
    		ctx
    	});

    	return block;
    }

    // (161:0) {#each Object.entries(item).sort((a, b) =>    a[0] > b[0] ? 1 : -1  ) as [key, prop]}
    function create_each_block$6(ctx) {
    	let show_if = !["sprite", "type", "_attacks", "damageAlter"].includes(/*key*/ ctx[3]);
    	let if_block_anchor;
    	let current;
    	let if_block = show_if && create_if_block$6(ctx);

    	const block = {
    		c: function create() {
    			if (if_block) if_block.c();
    			if_block_anchor = empty();
    		},
    		m: function mount(target, anchor) {
    			if (if_block) if_block.m(target, anchor);
    			insert_dev(target, if_block_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*item*/ 1) show_if = !["sprite", "type", "_attacks", "damageAlter"].includes(/*key*/ ctx[3]);

    			if (show_if) {
    				if (if_block) {
    					if_block.p(ctx, dirty);
    					transition_in(if_block, 1);
    				} else {
    					if_block = create_if_block$6(ctx);
    					if_block.c();
    					transition_in(if_block, 1);
    					if_block.m(if_block_anchor.parentNode, if_block_anchor);
    				}
    			} else if (if_block) {
    				group_outros();

    				transition_out(if_block, 1, 1, () => {
    					if_block = null;
    				});

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (if_block) if_block.d(detaching);
    			if (detaching) detach_dev(if_block_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block$6.name,
    		type: "each",
    		source: "(161:0) {#each Object.entries(item).sort((a, b) =>    a[0] > b[0] ? 1 : -1  ) as [key, prop]}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$b(ctx) {
    	let tr;
    	let td;
    	let t0;
    	let t1;
    	let t2;
    	let each_1_anchor;
    	let current;
    	let if_block = (/*item*/ ctx[0].sprite && /*item*/ ctx[0].sprite != "Resources/Blanks/Blank.png" || /*attacks*/ ctx[2].length > 0) && create_if_block_8(ctx);
    	let each_value = Object.entries(/*item*/ ctx[0]).sort(func);
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block$6(get_each_context$6(ctx, each_value, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			tr = element("tr");
    			td = element("td");
    			t0 = text(/*title*/ ctx[1]);
    			t1 = space();
    			if (if_block) if_block.c();
    			t2 = space();

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			each_1_anchor = empty();
    			attr_dev(td, "colspan", "2");
    			add_location(td, file$9, 51, 2, 1209);
    			attr_dev(tr, "class", "table-header");
    			add_location(tr, file$9, 50, 0, 1180);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, tr, anchor);
    			append_dev(tr, td);
    			append_dev(td, t0);
    			insert_dev(target, t1, anchor);
    			if (if_block) if_block.m(target, anchor);
    			insert_dev(target, t2, anchor);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(target, anchor);
    			}

    			insert_dev(target, each_1_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (!current || dirty & /*title*/ 2) set_data_dev(t0, /*title*/ ctx[1]);

    			if (/*item*/ ctx[0].sprite && /*item*/ ctx[0].sprite != "Resources/Blanks/Blank.png" || /*attacks*/ ctx[2].length > 0) {
    				if (if_block) {
    					if_block.p(ctx, dirty);
    					transition_in(if_block, 1);
    				} else {
    					if_block = create_if_block_8(ctx);
    					if_block.c();
    					transition_in(if_block, 1);
    					if_block.m(t2.parentNode, t2);
    				}
    			} else if (if_block) {
    				group_outros();

    				transition_out(if_block, 1, 1, () => {
    					if_block = null;
    				});

    				check_outros();
    			}

    			if (dirty & /*Object, item, rul, soundsFrom*/ 1) {
    				each_value = Object.entries(/*item*/ ctx[0]).sort(func);
    				let i;

    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context$6(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block$6(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
    					}
    				}

    				group_outros();

    				for (i = each_value.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block);

    			for (let i = 0; i < each_value.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block);
    			each_blocks = each_blocks.filter(Boolean);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(tr);
    			if (detaching) detach_dev(t1);
    			if (if_block) if_block.d(detaching);
    			if (detaching) detach_dev(t2);
    			destroy_each(each_blocks, detaching);
    			if (detaching) detach_dev(each_1_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$b.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function soundsFrom(sounds) {
    	if (!sounds) return [];
    	if (!sounds.length) sounds = [sounds];
    	return sounds.map(s => rul.path + rul.sounds[s]).filter(s => s);
    }

    const func = (a, b) => a[0] > b[0] ? 1 : -1;

    function instance$a($$self, $$props, $$invalidate) {
    	let { item } = $$props;
    	let { title = rul.str("Item") } = $$props;
    	let attacks;
    	console.info(item);
    	const writable_props = ["item", "title"];

    	Object_1$3.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1$2.warn(`<Item> was created with unknown prop '${key}'`);
    	});

    	$$self.$set = $$props => {
    		if ("item" in $$props) $$invalidate(0, item = $$props.item);
    		if ("title" in $$props) $$invalidate(1, title = $$props.title);
    	};

    	$$self.$capture_state = () => {
    		return { item, title, attacks };
    	};

    	$$self.$inject_state = $$props => {
    		if ("item" in $$props) $$invalidate(0, item = $$props.item);
    		if ("title" in $$props) $$invalidate(1, title = $$props.title);
    		if ("attacks" in $$props) $$invalidate(2, attacks = $$props.attacks);
    	};

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty & /*item, attacks*/ 5) {
    			$: {
    				$$invalidate(2, attacks = item.attacks().slice());

    				if (item.compatibleAmmo) for (let ammoId of item.compatibleAmmo) {
    					let ammo = rul.items[ammoId];
    					let ammoAttack = ammo.attacks()[0];
    					attacks.push(ammoAttack);
    				}

    				console.info(attacks);
    			}
    		}
    	};

    	return [item, title, attacks];
    }

    class Item$1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$a, create_fragment$b, safe_not_equal, { item: 0, title: 1 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Item",
    			options,
    			id: create_fragment$b.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || ({});

    		if (/*item*/ ctx[0] === undefined && !("item" in props)) {
    			console_1$2.warn("<Item> was created without expected prop 'item'");
    		}
    	}

    	get item() {
    		throw new Error("<Item>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set item(value) {
    		throw new Error("<Item>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get title() {
    		throw new Error("<Item>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set title(value) {
    		throw new Error("<Item>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\Armor.svelte generated by Svelte v3.16.7 */

    const { Object: Object_1$4, console: console_1$3 } = globals;
    const file$a = "src\\Armor.svelte";

    function get_each_context_2$1(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[15] = list[i];
    	child_ctx[14] = i;
    	return child_ctx;
    }

    function get_each_context_1$1(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[12] = list[i];
    	child_ctx[14] = i;
    	return child_ctx;
    }

    function get_each_context$7(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[8] = list[i][0];
    	child_ctx[9] = list[i][1];
    	return child_ctx;
    }

    function get_each_context_5(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[21] = list[i];
    	child_ctx[23] = i;
    	return child_ctx;
    }

    function get_each_context_4$1(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[8] = list[i][0];
    	child_ctx[19] = list[i][1];
    	child_ctx[14] = i;
    	return child_ctx;
    }

    function get_each_context_3$1(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[9] = list[i];
    	return child_ctx;
    }

    function get_each_context_7(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[26] = list[i];
    	child_ctx[23] = i;
    	return child_ctx;
    }

    function get_each_context_6(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[24] = list[i];
    	child_ctx[14] = i;
    	return child_ctx;
    }

    // (39:6) {#if seeAlso.length > 0}
    function create_if_block_14$1(ctx) {
    	let span;
    	let t1;
    	let current;

    	const linkslist = new LinksList({
    			props: { items: /*seeAlso*/ ctx[2] },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			span = element("span");
    			span.textContent = "- see also";
    			t1 = space();
    			create_component(linkslist.$$.fragment);
    			set_style(span, "color", "white");
    			add_location(span, file$a, 39, 8, 831);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, span, anchor);
    			insert_dev(target, t1, anchor);
    			mount_component(linkslist, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const linkslist_changes = {};
    			if (dirty & /*seeAlso*/ 4) linkslist_changes.items = /*seeAlso*/ ctx[2];
    			linkslist.$set(linkslist_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(linkslist.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(linkslist.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(span);
    			if (detaching) detach_dev(t1);
    			destroy_component(linkslist, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_14$1.name,
    		type: "if",
    		source: "(39:6) {#if seeAlso.length > 0}",
    		ctx
    	});

    	return block;
    }

    // (48:8) {#if Object.keys(armor.dollSprites).length > 1}
    function create_if_block_13$1(ctx) {
    	let p;
    	let button;
    	let t0_value = (/*seeAllVariants*/ ctx[1] ? "Hide" : "See") + "";
    	let t0;
    	let t1;
    	let dispose;

    	const block = {
    		c: function create() {
    			p = element("p");
    			button = element("button");
    			t0 = text(t0_value);
    			t1 = text(" all variants");
    			attr_dev(button, "class", "btn-hover-effect btn-hover-effect--effect-1");
    			add_location(button, file$a, 49, 12, 1090);
    			add_location(p, file$a, 48, 10, 1073);
    			dispose = listen_dev(button, "click", /*click_handler*/ ctx[5], false, false, false);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, p, anchor);
    			append_dev(p, button);
    			append_dev(button, t0);
    			append_dev(button, t1);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*seeAllVariants*/ 2 && t0_value !== (t0_value = (/*seeAllVariants*/ ctx[1] ? "Hide" : "See") + "")) set_data_dev(t0, t0_value);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(p);
    			dispose();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_13$1.name,
    		type: "if",
    		source: "(48:8) {#if Object.keys(armor.dollSprites).length > 1}",
    		ctx
    	});

    	return block;
    }

    // (58:8) {#if armor.dollSprites}
    function create_if_block_10$1(ctx) {
    	let t;
    	let div;
    	let div_style_value;
    	let each_value_6 = Object.keys(/*armor*/ ctx[0].dollSprites).sort(/*func*/ ctx[6]);
    	let each_blocks = [];

    	for (let i = 0; i < each_value_6.length; i += 1) {
    		each_blocks[i] = create_each_block_6(get_each_context_6(ctx, each_value_6, i));
    	}

    	const block = {
    		c: function create() {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			t = space();
    			div = element("div");

    			attr_dev(div, "style", div_style_value = "height:" + (/*seeAllVariants*/ ctx[1]
    			? (Math.floor(Object.keys(/*armor*/ ctx[0].dollSprites).length / /*dollColumns*/ ctx[3]) + 1) * 120
    			: 120) + "px");

    			add_location(div, file$a, 74, 10, 2143);
    		},
    		m: function mount(target, anchor) {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(target, anchor);
    			}

    			insert_dev(target, t, anchor);
    			insert_dev(target, div, anchor);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*seeAllVariants, dollColumns, Math, armor, Object, rul*/ 11) {
    				each_value_6 = Object.keys(/*armor*/ ctx[0].dollSprites).sort(/*func*/ ctx[6]);
    				let i;

    				for (i = 0; i < each_value_6.length; i += 1) {
    					const child_ctx = get_each_context_6(ctx, each_value_6, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    					} else {
    						each_blocks[i] = create_each_block_6(child_ctx);
    						each_blocks[i].c();
    						each_blocks[i].m(t.parentNode, t);
    					}
    				}

    				for (; i < each_blocks.length; i += 1) {
    					each_blocks[i].d(1);
    				}

    				each_blocks.length = each_value_6.length;
    			}

    			if (dirty & /*seeAllVariants, armor*/ 3 && div_style_value !== (div_style_value = "height:" + (/*seeAllVariants*/ ctx[1]
    			? (Math.floor(Object.keys(/*armor*/ ctx[0].dollSprites).length / /*dollColumns*/ ctx[3]) + 1) * 120
    			: 120) + "px")) {
    				attr_dev(div, "style", div_style_value);
    			}
    		},
    		d: function destroy(detaching) {
    			destroy_each(each_blocks, detaching);
    			if (detaching) detach_dev(t);
    			if (detaching) detach_dev(div);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_10$1.name,
    		type: "if",
    		source: "(58:8) {#if armor.dollSprites}",
    		ctx
    	});

    	return block;
    }

    // (62:12) {#if seeAllVariants || i == 0}
    function create_if_block_11$1(ctx) {
    	let div;
    	let t;
    	let if_block = /*seeAllVariants*/ ctx[1] && create_if_block_12$1(ctx);
    	let each_value_7 = /*armor*/ ctx[0].dollSprites[/*body*/ ctx[24]];
    	let each_blocks = [];

    	for (let i = 0; i < each_value_7.length; i += 1) {
    		each_blocks[i] = create_each_block_7(get_each_context_7(ctx, each_value_7, i));
    	}

    	const block = {
    		c: function create() {
    			div = element("div");
    			if (if_block) if_block.c();
    			t = space();

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			attr_dev(div, "class", "armor");
    			set_style(div, "left", /*i*/ ctx[14] % /*dollColumns*/ ctx[3] * 80 + "px");
    			set_style(div, "top", Math.floor(/*i*/ ctx[14] / /*dollColumns*/ ctx[3]) * 120 + "px");
    			add_location(div, file$a, 62, 14, 1570);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			if (if_block) if_block.m(div, null);
    			append_dev(div, t);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(div, null);
    			}
    		},
    		p: function update(ctx, dirty) {
    			if (/*seeAllVariants*/ ctx[1]) {
    				if (if_block) {
    					if_block.p(ctx, dirty);
    				} else {
    					if_block = create_if_block_12$1(ctx);
    					if_block.c();
    					if_block.m(div, t);
    				}
    			} else if (if_block) {
    				if_block.d(1);
    				if_block = null;
    			}

    			if (dirty & /*armor, Object, rul*/ 1) {
    				each_value_7 = /*armor*/ ctx[0].dollSprites[/*body*/ ctx[24]];
    				let i;

    				for (i = 0; i < each_value_7.length; i += 1) {
    					const child_ctx = get_each_context_7(ctx, each_value_7, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    					} else {
    						each_blocks[i] = create_each_block_7(child_ctx);
    						each_blocks[i].c();
    						each_blocks[i].m(div, null);
    					}
    				}

    				for (; i < each_blocks.length; i += 1) {
    					each_blocks[i].d(1);
    				}

    				each_blocks.length = each_value_7.length;
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			if (if_block) if_block.d();
    			destroy_each(each_blocks, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_11$1.name,
    		type: "if",
    		source: "(62:12) {#if seeAllVariants || i == 0}",
    		ctx
    	});

    	return block;
    }

    // (66:16) {#if seeAllVariants}
    function create_if_block_12$1(ctx) {
    	let div;
    	let t_value = /*body*/ ctx[24] + "";
    	let t;

    	const block = {
    		c: function create() {
    			div = element("div");
    			t = text(t_value);
    			attr_dev(div, "class", "armor-variant");
    			add_location(div, file$a, 66, 18, 1765);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, t);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*armor*/ 1 && t_value !== (t_value = /*body*/ ctx[24] + "")) set_data_dev(t, t_value);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_12$1.name,
    		type: "if",
    		source: "(66:16) {#if seeAllVariants}",
    		ctx
    	});

    	return block;
    }

    // (69:16) {#each armor.dollSprites[body] as url, j}
    function create_each_block_7(ctx) {
    	let img;
    	let img_src_value;
    	let img_alt_value;

    	const block = {
    		c: function create() {
    			img = element("img");
    			if (img.src !== (img_src_value = /*url*/ ctx[26])) attr_dev(img, "src", img_src_value);
    			attr_dev(img, "alt", img_alt_value = /*body*/ ctx[24]);
    			attr_dev(img, "onerror", "this.onerror=null; console.log(this.src + ' not found'); this.src='xpedia/0.png';");
    			attr_dev(img, "class", "armor-layer");
    			add_location(img, file$a, 69, 18, 1906);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, img, anchor);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*armor*/ 1 && img.src !== (img_src_value = /*url*/ ctx[26])) {
    				attr_dev(img, "src", img_src_value);
    			}

    			if (dirty & /*armor*/ 1 && img_alt_value !== (img_alt_value = /*body*/ ctx[24])) {
    				attr_dev(img, "alt", img_alt_value);
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(img);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block_7.name,
    		type: "each",
    		source: "(69:16) {#each armor.dollSprites[body] as url, j}",
    		ctx
    	});

    	return block;
    }

    // (59:10) {#each Object.keys(armor.dollSprites).sort((a, b) =>              rul.bodiesCompare([a, b])            ) as body, i}
    function create_each_block_6(ctx) {
    	let if_block_anchor;
    	let if_block = (/*seeAllVariants*/ ctx[1] || /*i*/ ctx[14] == 0) && create_if_block_11$1(ctx);

    	const block = {
    		c: function create() {
    			if (if_block) if_block.c();
    			if_block_anchor = empty();
    		},
    		m: function mount(target, anchor) {
    			if (if_block) if_block.m(target, anchor);
    			insert_dev(target, if_block_anchor, anchor);
    		},
    		p: function update(ctx, dirty) {
    			if (/*seeAllVariants*/ ctx[1] || /*i*/ ctx[14] == 0) {
    				if (if_block) {
    					if_block.p(ctx, dirty);
    				} else {
    					if_block = create_if_block_11$1(ctx);
    					if_block.c();
    					if_block.m(if_block_anchor.parentNode, if_block_anchor);
    				}
    			} else if (if_block) {
    				if_block.d(1);
    				if_block = null;
    			}
    		},
    		d: function destroy(detaching) {
    			if (if_block) if_block.d(detaching);
    			if (detaching) detach_dev(if_block_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block_6.name,
    		type: "each",
    		source: "(59:10) {#each Object.keys(armor.dollSprites).sort((a, b) =>              rul.bodiesCompare([a, b])            ) as body, i}",
    		ctx
    	});

    	return block;
    }

    // (85:10) {#if armor[prop]}
    function create_if_block_6$1(ctx) {
    	let table;
    	let thead;
    	let tr;
    	let td;
    	let raw_value = rul.decamelize(/*prop*/ ctx[9]) + "";
    	let t0;
    	let t1;
    	let current;
    	let each_value_4 = Object.entries(/*armor*/ ctx[0][/*prop*/ ctx[9]]).sort(/*func_1*/ ctx[7]);
    	let each_blocks = [];

    	for (let i = 0; i < each_value_4.length; i += 1) {
    		each_blocks[i] = create_each_block_4$1(get_each_context_4$1(ctx, each_value_4, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			table = element("table");
    			thead = element("thead");
    			tr = element("tr");
    			td = element("td");
    			t0 = space();

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			t1 = space();
    			attr_dev(td, "colspan", "2");
    			attr_dev(td, "class", "number-table-header");
    			set_style(td, "text-align", "center");
    			add_location(td, file$a, 88, 18, 2630);
    			add_location(tr, file$a, 87, 16, 2606);
    			add_location(thead, file$a, 86, 14, 2581);
    			attr_dev(table, "class", "number-table armor-column");
    			add_location(table, file$a, 85, 12, 2524);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, table, anchor);
    			append_dev(table, thead);
    			append_dev(thead, tr);
    			append_dev(tr, td);
    			td.innerHTML = raw_value;
    			append_dev(table, t0);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(table, null);
    			}

    			append_dev(table, t1);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*Object, armor, rul, Math*/ 1) {
    				each_value_4 = Object.entries(/*armor*/ ctx[0][/*prop*/ ctx[9]]).sort(/*func_1*/ ctx[7]);
    				let i;

    				for (i = 0; i < each_value_4.length; i += 1) {
    					const child_ctx = get_each_context_4$1(ctx, each_value_4, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block_4$1(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(table, t1);
    					}
    				}

    				group_outros();

    				for (i = each_value_4.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;

    			for (let i = 0; i < each_value_4.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},
    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(table);
    			destroy_each(each_blocks, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_6$1.name,
    		type: "if",
    		source: "(85:10) {#if armor[prop]}",
    		ctx
    	});

    	return block;
    }

    // (104:20) {:else}
    function create_else_block_2(ctx) {
    	let nobr;
    	let t_value = rul.decamelize(/*key*/ ctx[8]) + "";
    	let t;

    	const block = {
    		c: function create() {
    			nobr = element("nobr");
    			t = text(t_value);
    			add_location(nobr, file$a, 104, 22, 3253);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, nobr, anchor);
    			append_dev(nobr, t);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*armor*/ 1 && t_value !== (t_value = rul.decamelize(/*key*/ ctx[8]) + "")) set_data_dev(t, t_value);
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(nobr);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block_2.name,
    		type: "else",
    		source: "(104:20) {:else}",
    		ctx
    	});

    	return block;
    }

    // (102:20) {#if prop == 'damageModifier'}
    function create_if_block_9$1(ctx) {
    	let current;

    	const link = new Link({
    			props: { href: rul.damageTypes[/*key*/ ctx[8]] },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(link.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(link, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const link_changes = {};
    			if (dirty & /*armor*/ 1) link_changes.href = rul.damageTypes[/*key*/ ctx[8]];
    			link.$set(link_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(link.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(link.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(link, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_9$1.name,
    		type: "if",
    		source: "(102:20) {#if prop == 'damageModifier'}",
    		ctx
    	});

    	return block;
    }

    // (120:20) {:else}
    function create_else_block_1$1(ctx) {
    	let em;

    	let raw_value = (/*prop*/ ctx[9] == "damageModifier"
    	? Math.floor(/*val*/ ctx[19] * 100)
    	: rul.decamelize(/*val*/ ctx[19])) + "";

    	const block = {
    		c: function create() {
    			em = element("em");
    			add_location(em, file$a, 120, 22, 3870);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, em, anchor);
    			em.innerHTML = raw_value;
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*armor*/ 1 && raw_value !== (raw_value = (/*prop*/ ctx[9] == "damageModifier"
    			? Math.floor(/*val*/ ctx[19] * 100)
    			: rul.decamelize(/*val*/ ctx[19])) + "")) em.innerHTML = raw_value;		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(em);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block_1$1.name,
    		type: "else",
    		source: "(120:20) {:else}",
    		ctx
    	});

    	return block;
    }

    // (109:20) {#if 'recovery' == prop}
    function create_if_block_7$1(ctx) {
    	let each_1_anchor;
    	let each_value_5 = Object.keys(/*val*/ ctx[19]);
    	let each_blocks = [];

    	for (let i = 0; i < each_value_5.length; i += 1) {
    		each_blocks[i] = create_each_block_5(get_each_context_5(ctx, each_value_5, i));
    	}

    	const block = {
    		c: function create() {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			each_1_anchor = empty();
    		},
    		m: function mount(target, anchor) {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(target, anchor);
    			}

    			insert_dev(target, each_1_anchor, anchor);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*rul, Object, armor*/ 1) {
    				each_value_5 = Object.keys(/*val*/ ctx[19]);
    				let i;

    				for (i = 0; i < each_value_5.length; i += 1) {
    					const child_ctx = get_each_context_5(ctx, each_value_5, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    					} else {
    						each_blocks[i] = create_each_block_5(child_ctx);
    						each_blocks[i].c();
    						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
    					}
    				}

    				for (; i < each_blocks.length; i += 1) {
    					each_blocks[i].d(1);
    				}

    				each_blocks.length = each_value_5.length;
    			}
    		},
    		d: function destroy(detaching) {
    			destroy_each(each_blocks, detaching);
    			if (detaching) detach_dev(each_1_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_7$1.name,
    		type: "if",
    		source: "(109:20) {#if 'recovery' == prop}",
    		ctx
    	});

    	return block;
    }

    // (111:24) {#if j != 0}
    function create_if_block_8$1(ctx) {
    	let br;

    	const block = {
    		c: function create() {
    			br = element("br");
    			add_location(br, file$a, 111, 26, 3538);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, br, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(br);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_8$1.name,
    		type: "if",
    		source: "(111:24) {#if j != 0}",
    		ctx
    	});

    	return block;
    }

    // (110:22) {#each Object.keys(val) as subfield, j}
    function create_each_block_5(ctx) {
    	let t0;
    	let html_tag;
    	let raw0_value = rul.decamelize(/*subfield*/ ctx[21]) + "";
    	let t1;
    	let em;
    	let raw1_value = rul.decamelize(/*val*/ ctx[19][/*subfield*/ ctx[21]]) + "";
    	let if_block = /*j*/ ctx[23] != 0 && create_if_block_8$1(ctx);

    	const block = {
    		c: function create() {
    			if (if_block) if_block.c();
    			t0 = space();
    			t1 = text("\r\n                        :\r\n                        ");
    			em = element("em");
    			html_tag = new HtmlTag(raw0_value, t1);
    			add_location(em, file$a, 115, 24, 3686);
    		},
    		m: function mount(target, anchor) {
    			if (if_block) if_block.m(target, anchor);
    			insert_dev(target, t0, anchor);
    			html_tag.m(target, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, em, anchor);
    			em.innerHTML = raw1_value;
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*armor*/ 1 && raw0_value !== (raw0_value = rul.decamelize(/*subfield*/ ctx[21]) + "")) html_tag.p(raw0_value);
    			if (dirty & /*armor*/ 1 && raw1_value !== (raw1_value = rul.decamelize(/*val*/ ctx[19][/*subfield*/ ctx[21]]) + "")) em.innerHTML = raw1_value;		},
    		d: function destroy(detaching) {
    			if (if_block) if_block.d(detaching);
    			if (detaching) detach_dev(t0);
    			if (detaching) html_tag.d();
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(em);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block_5.name,
    		type: "each",
    		source: "(110:22) {#each Object.keys(val) as subfield, j}",
    		ctx
    	});

    	return block;
    }

    // (97:14) {#each Object.entries(armor[prop]).sort((a, b) =>                  rul.str(a[0]) > rul.str(b[0]) ? 1 : -1                ) as [key, val], i}
    function create_each_block_4$1(ctx) {
    	let tr;
    	let td0;
    	let current_block_type_index;
    	let if_block0;
    	let t;
    	let td1;
    	let current;
    	const if_block_creators = [create_if_block_9$1, create_else_block_2];
    	const if_blocks = [];

    	function select_block_type(ctx, dirty) {
    		if (/*prop*/ ctx[9] == "damageModifier") return 0;
    		return 1;
    	}

    	current_block_type_index = select_block_type(ctx);
    	if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

    	function select_block_type_1(ctx, dirty) {
    		if ("recovery" == /*prop*/ ctx[9]) return create_if_block_7$1;
    		return create_else_block_1$1;
    	}

    	let current_block_type = select_block_type_1(ctx);
    	let if_block1 = current_block_type(ctx);

    	const block = {
    		c: function create() {
    			tr = element("tr");
    			td0 = element("td");
    			if_block0.c();
    			t = space();
    			td1 = element("td");
    			if_block1.c();
    			add_location(td0, file$a, 100, 18, 3084);
    			add_location(td1, file$a, 107, 18, 3359);
    			add_location(tr, file$a, 99, 16, 3060);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, tr, anchor);
    			append_dev(tr, td0);
    			if_blocks[current_block_type_index].m(td0, null);
    			append_dev(tr, t);
    			append_dev(tr, td1);
    			if_block1.m(td1, null);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if_block0.p(ctx, dirty);
    			if_block1.p(ctx, dirty);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block0);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block0);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(tr);
    			if_blocks[current_block_type_index].d();
    			if_block1.d();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block_4$1.name,
    		type: "each",
    		source: "(97:14) {#each Object.entries(armor[prop]).sort((a, b) =>                  rul.str(a[0]) > rul.str(b[0]) ? 1 : -1                ) as [key, val], i}",
    		ctx
    	});

    	return block;
    }

    // (84:8) {#each ['armor', 'damageModifier', 'stats', 'recovery'] as prop}
    function create_each_block_3$1(ctx) {
    	let if_block_anchor;
    	let current;
    	let if_block = /*armor*/ ctx[0][/*prop*/ ctx[9]] && create_if_block_6$1(ctx);

    	const block = {
    		c: function create() {
    			if (if_block) if_block.c();
    			if_block_anchor = empty();
    		},
    		m: function mount(target, anchor) {
    			if (if_block) if_block.m(target, anchor);
    			insert_dev(target, if_block_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (/*armor*/ ctx[0][/*prop*/ ctx[9]]) {
    				if (if_block) {
    					if_block.p(ctx, dirty);
    					transition_in(if_block, 1);
    				} else {
    					if_block = create_if_block_6$1(ctx);
    					if_block.c();
    					transition_in(if_block, 1);
    					if_block.m(if_block_anchor.parentNode, if_block_anchor);
    				}
    			} else if (if_block) {
    				group_outros();

    				transition_out(if_block, 1, 1, () => {
    					if_block = null;
    				});

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (if_block) if_block.d(detaching);
    			if (detaching) detach_dev(if_block_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block_3$1.name,
    		type: "each",
    		source: "(84:8) {#each ['armor', 'damageModifier', 'stats', 'recovery'] as prop}",
    		ctx
    	});

    	return block;
    }

    // (138:4) {#if !['recovery', 'type', 'layersDefinition', 'spriteFaceColor', 'spriteHairColor', 'spriteUtileColor', 'spriteFaceGroup', 'spriteHairGroup', 'spriteUtileGroup', 'customArmorPreviewIndex', 'dollSprites', 'layersDefaultPrefix', 'frontArmor', 'sideArmor', 'rearArmor', 'underArmor', 'spriteInv', 'scripts', 'armor', 'damageModifier', 'stats'].includes(key)}
    function create_if_block$7(ctx) {
    	let tr;
    	let td0;
    	let raw_value = rul.decamelize(/*key*/ ctx[8]) + "";
    	let t0;
    	let td1;
    	let show_if;
    	let show_if_1;
    	let current_block_type_index;
    	let if_block;
    	let t1;
    	let current;

    	const if_block_creators = [
    		create_if_block_1$4,
    		create_if_block_2$4,
    		create_if_block_3$2,
    		create_if_block_4$1,
    		create_else_block$4
    	];

    	const if_blocks = [];

    	function select_block_type_2(ctx, dirty) {
    		if (/*key*/ ctx[8] == "damageModifier") return 0;
    		if (dirty & /*armor*/ 1) show_if = !!["corpseBattle"].includes(/*key*/ ctx[8]);
    		if (show_if) return 1;
    		if ("spriteSheet" == /*key*/ ctx[8]) return 2;
    		if (dirty & /*armor*/ 1) show_if_1 = !!["builtInWeapons", "users", "units"].includes(/*key*/ ctx[8]);
    		if (show_if_1) return 3;
    		return 4;
    	}

    	current_block_type_index = select_block_type_2(ctx, -1);
    	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

    	const block = {
    		c: function create() {
    			tr = element("tr");
    			td0 = element("td");
    			t0 = space();
    			td1 = element("td");
    			if_block.c();
    			t1 = space();
    			add_location(td0, file$a, 139, 8, 4675);
    			add_location(td1, file$a, 142, 8, 4743);
    			add_location(tr, file$a, 138, 6, 4661);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, tr, anchor);
    			append_dev(tr, td0);
    			td0.innerHTML = raw_value;
    			append_dev(tr, t0);
    			append_dev(tr, td1);
    			if_blocks[current_block_type_index].m(td1, null);
    			append_dev(tr, t1);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if ((!current || dirty & /*armor*/ 1) && raw_value !== (raw_value = rul.decamelize(/*key*/ ctx[8]) + "")) td0.innerHTML = raw_value;			let previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type_2(ctx, dirty);

    			if (current_block_type_index === previous_block_index) {
    				if_blocks[current_block_type_index].p(ctx, dirty);
    			} else {
    				group_outros();

    				transition_out(if_blocks[previous_block_index], 1, 1, () => {
    					if_blocks[previous_block_index] = null;
    				});

    				check_outros();
    				if_block = if_blocks[current_block_type_index];

    				if (!if_block) {
    					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    					if_block.c();
    				}

    				transition_in(if_block, 1);
    				if_block.m(td1, null);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(tr);
    			if_blocks[current_block_type_index].d();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$7.name,
    		type: "if",
    		source: "(138:4) {#if !['recovery', 'type', 'layersDefinition', 'spriteFaceColor', 'spriteHairColor', 'spriteUtileColor', 'spriteFaceGroup', 'spriteHairGroup', 'spriteUtileGroup', 'customArmorPreviewIndex', 'dollSprites', 'layersDefaultPrefix', 'frontArmor', 'sideArmor', 'rearArmor', 'underArmor', 'spriteInv', 'scripts', 'armor', 'damageModifier', 'stats'].includes(key)}",
    		ctx
    	});

    	return block;
    }

    // (166:10) {:else}
    function create_else_block$4(ctx) {
    	let current;

    	const value = new Value({
    			props: { val: /*prop*/ ctx[9] },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(value.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(value, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const value_changes = {};
    			if (dirty & /*armor*/ 1) value_changes.val = /*prop*/ ctx[9];
    			value.$set(value_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(value.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(value.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(value, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block$4.name,
    		type: "else",
    		source: "(166:10) {:else}",
    		ctx
    	});

    	return block;
    }

    // (161:71) 
    function create_if_block_4$1(ctx) {
    	let each_1_anchor;
    	let current;
    	let each_value_2 = /*prop*/ ctx[9].filter(func_3);
    	let each_blocks = [];

    	for (let i = 0; i < each_value_2.length; i += 1) {
    		each_blocks[i] = create_each_block_2$1(get_each_context_2$1(ctx, each_value_2, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			each_1_anchor = empty();
    		},
    		m: function mount(target, anchor) {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(target, anchor);
    			}

    			insert_dev(target, each_1_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*Object, armor*/ 1) {
    				each_value_2 = /*prop*/ ctx[9].filter(func_3);
    				let i;

    				for (i = 0; i < each_value_2.length; i += 1) {
    					const child_ctx = get_each_context_2$1(ctx, each_value_2, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block_2$1(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
    					}
    				}

    				group_outros();

    				for (i = each_value_2.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;

    			for (let i = 0; i < each_value_2.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},
    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_each(each_blocks, detaching);
    			if (detaching) detach_dev(each_1_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_4$1.name,
    		type: "if",
    		source: "(161:71) ",
    		ctx
    	});

    	return block;
    }

    // (159:41) 
    function create_if_block_3$2(ctx) {
    	let a;
    	let t_value = /*prop*/ ctx[9] + "";
    	let t;
    	let a_href_value;

    	const block = {
    		c: function create() {
    			a = element("a");
    			t = text(t_value);
    			attr_dev(a, "href", a_href_value = rul.sprite(/*prop*/ ctx[9]));
    			add_location(a, file$a, 159, 12, 5362);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, a, anchor);
    			append_dev(a, t);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*armor*/ 1 && t_value !== (t_value = /*prop*/ ctx[9] + "")) set_data_dev(t, t_value);

    			if (dirty & /*armor*/ 1 && a_href_value !== (a_href_value = rul.sprite(/*prop*/ ctx[9]))) {
    				attr_dev(a, "href", a_href_value);
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(a);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_3$2.name,
    		type: "if",
    		source: "(159:41) ",
    		ctx
    	});

    	return block;
    }

    // (157:51) 
    function create_if_block_2$4(ctx) {
    	let current;

    	const link = new Link({
    			props: { href: /*prop*/ ctx[9][0] },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(link.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(link, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const link_changes = {};
    			if (dirty & /*armor*/ 1) link_changes.href = /*prop*/ ctx[9][0];
    			link.$set(link_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(link.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(link.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(link, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_2$4.name,
    		type: "if",
    		source: "(157:51) ",
    		ctx
    	});

    	return block;
    }

    // (144:10) {#if key == 'damageModifier'}
    function create_if_block_1$4(ctx) {
    	let table;
    	let each_value_1 = /*prop*/ ctx[9];
    	let each_blocks = [];

    	for (let i = 0; i < each_value_1.length; i += 1) {
    		each_blocks[i] = create_each_block_1$1(get_each_context_1$1(ctx, each_value_1, i));
    	}

    	const block = {
    		c: function create() {
    			table = element("table");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			attr_dev(table, "class", "number-table");
    			add_location(table, file$a, 144, 12, 4802);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, table, anchor);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(table, null);
    			}
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*Math, Object, armor, rul*/ 1) {
    				each_value_1 = /*prop*/ ctx[9];
    				let i;

    				for (i = 0; i < each_value_1.length; i += 1) {
    					const child_ctx = get_each_context_1$1(ctx, each_value_1, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    					} else {
    						each_blocks[i] = create_each_block_1$1(child_ctx);
    						each_blocks[i].c();
    						each_blocks[i].m(table, null);
    					}
    				}

    				for (; i < each_blocks.length; i += 1) {
    					each_blocks[i].d(1);
    				}

    				each_blocks.length = each_value_1.length;
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(table);
    			destroy_each(each_blocks, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_1$4.name,
    		type: "if",
    		source: "(144:10) {#if key == 'damageModifier'}",
    		ctx
    	});

    	return block;
    }

    // (163:14) {#if i != 0}
    function create_if_block_5$1(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text(",");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_5$1.name,
    		type: "if",
    		source: "(163:14) {#if i != 0}",
    		ctx
    	});

    	return block;
    }

    // (162:12) {#each prop.filter(s => s.substr(0, 8) != 'INV_NULL') as field, i}
    function create_each_block_2$1(ctx) {
    	let t;
    	let current;
    	let if_block = /*i*/ ctx[14] != 0 && create_if_block_5$1(ctx);

    	const link = new Link({
    			props: { href: /*field*/ ctx[15] },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			if (if_block) if_block.c();
    			t = space();
    			create_component(link.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			if (if_block) if_block.m(target, anchor);
    			insert_dev(target, t, anchor);
    			mount_component(link, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const link_changes = {};
    			if (dirty & /*armor*/ 1) link_changes.href = /*field*/ ctx[15];
    			link.$set(link_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(link.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(link.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (if_block) if_block.d(detaching);
    			if (detaching) detach_dev(t);
    			destroy_component(link, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block_2$1.name,
    		type: "each",
    		source: "(162:12) {#each prop.filter(s => s.substr(0, 8) != 'INV_NULL') as field, i}",
    		ctx
    	});

    	return block;
    }

    // (146:14) {#each prop as res, i}
    function create_each_block_1$1(ctx) {
    	let tr;
    	let td0;
    	let t0_value = rul.damageTypeName(/*i*/ ctx[14]) + "";
    	let t0;
    	let t1;
    	let td1;
    	let t2_value = Math.round(/*res*/ ctx[12] * 100) + "";
    	let t2;
    	let t3;
    	let t4;

    	const block = {
    		c: function create() {
    			tr = element("tr");
    			td0 = element("td");
    			t0 = text(t0_value);
    			t1 = space();
    			td1 = element("td");
    			t2 = text(t2_value);
    			t3 = text("%");
    			t4 = space();
    			attr_dev(td0, "width", "50%");
    			attr_dev(td0, "class", "number-table1");
    			add_location(td0, file$a, 147, 18, 4910);
    			attr_dev(td1, "width", "50%");
    			attr_dev(td1, "class", "number-table2");
    			add_location(td1, file$a, 150, 18, 5038);
    			add_location(tr, file$a, 146, 16, 4886);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, tr, anchor);
    			append_dev(tr, td0);
    			append_dev(td0, t0);
    			append_dev(tr, t1);
    			append_dev(tr, td1);
    			append_dev(td1, t2);
    			append_dev(td1, t3);
    			append_dev(tr, t4);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*armor*/ 1 && t2_value !== (t2_value = Math.round(/*res*/ ctx[12] * 100) + "")) set_data_dev(t2, t2_value);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(tr);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block_1$1.name,
    		type: "each",
    		source: "(146:14) {#each prop as res, i}",
    		ctx
    	});

    	return block;
    }

    // (135:2) {#each Object.entries(armor).sort((a, b) =>      a[0] > b[0] ? 1 : -1    ) as [key, prop]}
    function create_each_block$7(ctx) {
    	let show_if = ![
    		"recovery",
    		"type",
    		"layersDefinition",
    		"spriteFaceColor",
    		"spriteHairColor",
    		"spriteUtileColor",
    		"spriteFaceGroup",
    		"spriteHairGroup",
    		"spriteUtileGroup",
    		"customArmorPreviewIndex",
    		"dollSprites",
    		"layersDefaultPrefix",
    		"frontArmor",
    		"sideArmor",
    		"rearArmor",
    		"underArmor",
    		"spriteInv",
    		"scripts",
    		"armor",
    		"damageModifier",
    		"stats"
    	].includes(/*key*/ ctx[8]);

    	let if_block_anchor;
    	let current;
    	let if_block = show_if && create_if_block$7(ctx);

    	const block = {
    		c: function create() {
    			if (if_block) if_block.c();
    			if_block_anchor = empty();
    		},
    		m: function mount(target, anchor) {
    			if (if_block) if_block.m(target, anchor);
    			insert_dev(target, if_block_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*armor*/ 1) show_if = ![
    				"recovery",
    				"type",
    				"layersDefinition",
    				"spriteFaceColor",
    				"spriteHairColor",
    				"spriteUtileColor",
    				"spriteFaceGroup",
    				"spriteHairGroup",
    				"spriteUtileGroup",
    				"customArmorPreviewIndex",
    				"dollSprites",
    				"layersDefaultPrefix",
    				"frontArmor",
    				"sideArmor",
    				"rearArmor",
    				"underArmor",
    				"spriteInv",
    				"scripts",
    				"armor",
    				"damageModifier",
    				"stats"
    			].includes(/*key*/ ctx[8]);

    			if (show_if) {
    				if (if_block) {
    					if_block.p(ctx, dirty);
    					transition_in(if_block, 1);
    				} else {
    					if_block = create_if_block$7(ctx);
    					if_block.c();
    					transition_in(if_block, 1);
    					if_block.m(if_block_anchor.parentNode, if_block_anchor);
    				}
    			} else if (if_block) {
    				group_outros();

    				transition_out(if_block, 1, 1, () => {
    					if_block = null;
    				});

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (if_block) if_block.d(detaching);
    			if (detaching) detach_dev(if_block_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block$7.name,
    		type: "each",
    		source: "(135:2) {#each Object.entries(armor).sort((a, b) =>      a[0] > b[0] ? 1 : -1    ) as [key, prop]}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$c(ctx) {
    	let table;
    	let tr0;
    	let td0;
    	let t0;
    	let t1;
    	let tr1;
    	let td1;
    	let div0;
    	let show_if = Object.keys(/*armor*/ ctx[0].dollSprites).length > 1;
    	let t2;
    	let t3;
    	let tr2;
    	let td2;
    	let div1;
    	let t4;
    	let current;
    	let if_block0 = /*seeAlso*/ ctx[2].length > 0 && create_if_block_14$1(ctx);
    	let if_block1 = show_if && create_if_block_13$1(ctx);
    	let if_block2 = /*armor*/ ctx[0].dollSprites && create_if_block_10$1(ctx);
    	let each_value_3 = ["armor", "damageModifier", "stats", "recovery"];
    	let each_blocks_1 = [];

    	for (let i = 0; i < 4; i += 1) {
    		each_blocks_1[i] = create_each_block_3$1(get_each_context_3$1(ctx, each_value_3, i));
    	}

    	const out = i => transition_out(each_blocks_1[i], 1, 1, () => {
    		each_blocks_1[i] = null;
    	});

    	let each_value = Object.entries(/*armor*/ ctx[0]).sort(func_2);
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block$7(get_each_context$7(ctx, each_value, i));
    	}

    	const out_1 = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			table = element("table");
    			tr0 = element("tr");
    			td0 = element("td");
    			t0 = text("Armor\r\n      ");
    			if (if_block0) if_block0.c();
    			t1 = space();
    			tr1 = element("tr");
    			td1 = element("td");
    			div0 = element("div");
    			if (if_block1) if_block1.c();
    			t2 = space();
    			if (if_block2) if_block2.c();
    			t3 = space();
    			tr2 = element("tr");
    			td2 = element("td");
    			div1 = element("div");

    			for (let i = 0; i < 4; i += 1) {
    				each_blocks_1[i].c();
    			}

    			t4 = space();

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			attr_dev(td0, "colspan", "2");
    			attr_dev(td0, "class", "table-header");
    			add_location(td0, file$a, 36, 4, 739);
    			add_location(tr0, file$a, 35, 2, 729);
    			attr_dev(div0, "class", "armors");
    			add_location(div0, file$a, 46, 6, 984);
    			attr_dev(td1, "colspan", "2");
    			add_location(td1, file$a, 45, 4, 960);
    			add_location(tr1, file$a, 44, 2, 950);
    			attr_dev(div1, "class", "flex-horisontal");
    			add_location(div1, file$a, 82, 6, 2378);
    			attr_dev(td2, "colspan", "2");
    			add_location(td2, file$a, 81, 4, 2354);
    			add_location(tr2, file$a, 80, 2, 2344);
    			attr_dev(table, "class", "main-table");
    			add_location(table, file$a, 34, 0, 699);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, table, anchor);
    			append_dev(table, tr0);
    			append_dev(tr0, td0);
    			append_dev(td0, t0);
    			if (if_block0) if_block0.m(td0, null);
    			append_dev(table, t1);
    			append_dev(table, tr1);
    			append_dev(tr1, td1);
    			append_dev(td1, div0);
    			if (if_block1) if_block1.m(div0, null);
    			append_dev(div0, t2);
    			if (if_block2) if_block2.m(div0, null);
    			append_dev(table, t3);
    			append_dev(table, tr2);
    			append_dev(tr2, td2);
    			append_dev(td2, div1);

    			for (let i = 0; i < 4; i += 1) {
    				each_blocks_1[i].m(div1, null);
    			}

    			append_dev(table, t4);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(table, null);
    			}

    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (/*seeAlso*/ ctx[2].length > 0) {
    				if (if_block0) {
    					if_block0.p(ctx, dirty);
    					transition_in(if_block0, 1);
    				} else {
    					if_block0 = create_if_block_14$1(ctx);
    					if_block0.c();
    					transition_in(if_block0, 1);
    					if_block0.m(td0, null);
    				}
    			} else if (if_block0) {
    				group_outros();

    				transition_out(if_block0, 1, 1, () => {
    					if_block0 = null;
    				});

    				check_outros();
    			}

    			if (dirty & /*armor*/ 1) show_if = Object.keys(/*armor*/ ctx[0].dollSprites).length > 1;

    			if (show_if) {
    				if (if_block1) {
    					if_block1.p(ctx, dirty);
    				} else {
    					if_block1 = create_if_block_13$1(ctx);
    					if_block1.c();
    					if_block1.m(div0, t2);
    				}
    			} else if (if_block1) {
    				if_block1.d(1);
    				if_block1 = null;
    			}

    			if (/*armor*/ ctx[0].dollSprites) {
    				if (if_block2) {
    					if_block2.p(ctx, dirty);
    				} else {
    					if_block2 = create_if_block_10$1(ctx);
    					if_block2.c();
    					if_block2.m(div0, null);
    				}
    			} else if (if_block2) {
    				if_block2.d(1);
    				if_block2 = null;
    			}

    			if (dirty & /*armor, Object, rul, Math*/ 1) {
    				each_value_3 = ["armor", "damageModifier", "stats", "recovery"];
    				let i;

    				for (i = 0; i < 4; i += 1) {
    					const child_ctx = get_each_context_3$1(ctx, each_value_3, i);

    					if (each_blocks_1[i]) {
    						each_blocks_1[i].p(child_ctx, dirty);
    						transition_in(each_blocks_1[i], 1);
    					} else {
    						each_blocks_1[i] = create_each_block_3$1(child_ctx);
    						each_blocks_1[i].c();
    						transition_in(each_blocks_1[i], 1);
    						each_blocks_1[i].m(div1, null);
    					}
    				}

    				group_outros();

    				for (i = 4; i < 4; i += 1) {
    					out(i);
    				}

    				check_outros();
    			}

    			if (dirty & /*Object, armor, Math, rul*/ 1) {
    				each_value = Object.entries(/*armor*/ ctx[0]).sort(func_2);
    				let i;

    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context$7(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block$7(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(table, null);
    					}
    				}

    				group_outros();

    				for (i = each_value.length; i < each_blocks.length; i += 1) {
    					out_1(i);
    				}

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block0);

    			for (let i = 0; i < 4; i += 1) {
    				transition_in(each_blocks_1[i]);
    			}

    			for (let i = 0; i < each_value.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block0);
    			each_blocks_1 = each_blocks_1.filter(Boolean);

    			for (let i = 0; i < 4; i += 1) {
    				transition_out(each_blocks_1[i]);
    			}

    			each_blocks = each_blocks.filter(Boolean);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(table);
    			if (if_block0) if_block0.d();
    			if (if_block1) if_block1.d();
    			if (if_block2) if_block2.d();
    			destroy_each(each_blocks_1, detaching);
    			destroy_each(each_blocks, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$c.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    const func_2 = (a, b) => a[0] > b[0] ? 1 : -1;
    const func_3 = s => s.substr(0, 8) != "INV_NULL";

    function instance$b($$self, $$props, $$invalidate) {
    	let { armor } = $$props;
    	let dollColumns = 6;
    	let seeAllVariants = false;
    	let zoom = 1;
    	let seeAlso = [];
    	const writable_props = ["armor"];

    	Object_1$4.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1$3.warn(`<Armor> was created with unknown prop '${key}'`);
    	});

    	const click_handler = e => $$invalidate(1, seeAllVariants = !seeAllVariants);
    	const func = (a, b) => rul.bodiesCompare([a, b]);
    	const func_1 = (a, b) => rul.str(a[0]) > rul.str(b[0]) ? 1 : -1;

    	$$self.$set = $$props => {
    		if ("armor" in $$props) $$invalidate(0, armor = $$props.armor);
    	};

    	$$self.$capture_state = () => {
    		return {
    			armor,
    			dollColumns,
    			seeAllVariants,
    			zoom,
    			seeAlso
    		};
    	};

    	$$self.$inject_state = $$props => {
    		if ("armor" in $$props) $$invalidate(0, armor = $$props.armor);
    		if ("dollColumns" in $$props) $$invalidate(3, dollColumns = $$props.dollColumns);
    		if ("seeAllVariants" in $$props) $$invalidate(1, seeAllVariants = $$props.seeAllVariants);
    		if ("zoom" in $$props) zoom = $$props.zoom;
    		if ("seeAlso" in $$props) $$invalidate(2, seeAlso = $$props.seeAlso);
    	};

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty & /*armor, seeAlso*/ 5) {
    			$: {
    				console.log(armor);
    				$$invalidate(2, seeAlso = []);

    				if ("storeItem" in armor && armor.storeItem != "STR_NONE") {
    					seeAlso.push(armor.storeItem);
    				}

    				if ("users" in armor) {
    					for (let item of armor.users.filter(s => s.substr(0, 8) != "INV_NULL" && s != armor.type && "#" + s != window.location.hash)) {
    						seeAlso.push(item);
    					}
    				}
    			}
    		}
    	};

    	return [armor, seeAllVariants, seeAlso, dollColumns, zoom, click_handler, func, func_1];
    }

    class Armor$1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$b, create_fragment$c, safe_not_equal, { armor: 0 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Armor",
    			options,
    			id: create_fragment$c.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || ({});

    		if (/*armor*/ ctx[0] === undefined && !("armor" in props)) {
    			console_1$3.warn("<Armor> was created without expected prop 'armor'");
    		}
    	}

    	get armor() {
    		throw new Error("<Armor>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set armor(value) {
    		throw new Error("<Armor>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\Craft.svelte generated by Svelte v3.16.7 */

    const { Object: Object_1$5, console: console_1$4 } = globals;
    const file$b = "src\\Craft.svelte";

    function get_each_context$8(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[2] = list[i][0];
    	child_ctx[3] = list[i][1];
    	return child_ctx;
    }

    // (21:4) {#if !['type', 'battlescapeTerrainData', 'craftInventoryTile', 'deployment'].includes(key)}
    function create_if_block$8(ctx) {
    	let tr;
    	let t0;
    	let td;
    	let show_if;
    	let show_if_1;
    	let show_if_2;
    	let current_block_type_index;
    	let if_block;
    	let t1;
    	let current;

    	const tablekey = new TableKey({
    			props: { key: /*key*/ ctx[2] },
    			$$inline: true
    		});

    	const if_block_creators = [create_if_block_1$5, create_if_block_2$5, create_if_block_3$3, create_else_block$5];
    	const if_blocks = [];

    	function select_block_type(ctx, dirty) {
    		if (dirty & /*craft*/ 1) show_if = !!["weaponStrings"].includes(/*key*/ ctx[2]);
    		if (show_if) return 0;
    		if (dirty & /*craft*/ 1) show_if_1 = !!["sprite"].includes(/*key*/ ctx[2]);
    		if (show_if_1) return 1;
    		if (dirty & /*craft*/ 1) show_if_2 = !!["requiresBaseFunc"].includes(/*key*/ ctx[2]);
    		if (show_if_2) return 2;
    		return 3;
    	}

    	current_block_type_index = select_block_type(ctx, -1);
    	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

    	const block = {
    		c: function create() {
    			tr = element("tr");
    			create_component(tablekey.$$.fragment);
    			t0 = space();
    			td = element("td");
    			if_block.c();
    			t1 = space();
    			add_location(td, file$b, 23, 8, 644);
    			add_location(tr, file$b, 21, 6, 599);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, tr, anchor);
    			mount_component(tablekey, tr, null);
    			append_dev(tr, t0);
    			append_dev(tr, td);
    			if_blocks[current_block_type_index].m(td, null);
    			append_dev(tr, t1);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const tablekey_changes = {};
    			if (dirty & /*craft*/ 1) tablekey_changes.key = /*key*/ ctx[2];
    			tablekey.$set(tablekey_changes);
    			let previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type(ctx, dirty);

    			if (current_block_type_index === previous_block_index) {
    				if_blocks[current_block_type_index].p(ctx, dirty);
    			} else {
    				group_outros();

    				transition_out(if_blocks[previous_block_index], 1, 1, () => {
    					if_blocks[previous_block_index] = null;
    				});

    				check_outros();
    				if_block = if_blocks[current_block_type_index];

    				if (!if_block) {
    					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    					if_block.c();
    				}

    				transition_in(if_block, 1);
    				if_block.m(td, null);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(tablekey.$$.fragment, local);
    			transition_in(if_block);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(tablekey.$$.fragment, local);
    			transition_out(if_block);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(tr);
    			destroy_component(tablekey);
    			if_blocks[current_block_type_index].d();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$8.name,
    		type: "if",
    		source: "(21:4) {#if !['type', 'battlescapeTerrainData', 'craftInventoryTile', 'deployment'].includes(key)}",
    		ctx
    	});

    	return block;
    }

    // (36:10) {:else}
    function create_else_block$5(ctx) {
    	let current;

    	const value = new Value({
    			props: { val: /*prop*/ ctx[3] },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(value.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(value, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const value_changes = {};
    			if (dirty & /*craft*/ 1) value_changes.val = /*prop*/ ctx[3];
    			value.$set(value_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(value.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(value.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(value, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block$5.name,
    		type: "else",
    		source: "(36:10) {:else}",
    		ctx
    	});

    	return block;
    }

    // (34:55) 
    function create_if_block_3$3(ctx) {
    	let current;

    	const baseservicelist = new BaseServiceList({
    			props: { items: /*prop*/ ctx[3], vertical: true },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(baseservicelist.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(baseservicelist, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const baseservicelist_changes = {};
    			if (dirty & /*craft*/ 1) baseservicelist_changes.items = /*prop*/ ctx[3];
    			baseservicelist.$set(baseservicelist_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(baseservicelist.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(baseservicelist.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(baseservicelist, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_3$3.name,
    		type: "if",
    		source: "(34:55) ",
    		ctx
    	});

    	return block;
    }

    // (28:45) 
    function create_if_block_2$5(ctx) {
    	let img;
    	let img_src_value;

    	const block = {
    		c: function create() {
    			img = element("img");
    			attr_dev(img, "class", "craft sprite");
    			attr_dev(img, "onerror", "this.onerror=null; this.src='xpedia/0.png'");
    			attr_dev(img, "alt", "X");
    			if (img.src !== (img_src_value = rul.specialSprite("baseSprite", /*prop*/ ctx[3] * 1 + 33))) attr_dev(img, "src", img_src_value);
    			add_location(img, file$b, 28, 12, 859);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, img, anchor);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*craft*/ 1 && img.src !== (img_src_value = rul.specialSprite("baseSprite", /*prop*/ ctx[3] * 1 + 33))) {
    				attr_dev(img, "src", img_src_value);
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(img);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_2$5.name,
    		type: "if",
    		source: "(28:45) ",
    		ctx
    	});

    	return block;
    }

    // (25:10) {#if ['weaponStrings'].includes(key)}
    function create_if_block_1$5(ctx) {
    	let current;

    	const value = new Value({
    			props: {
    				val: /*prop*/ ctx[3].map(/*func_1*/ ctx[1])
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(value.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(value, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const value_changes = {};
    			if (dirty & /*craft*/ 1) value_changes.val = /*prop*/ ctx[3].map(/*func_1*/ ctx[1]);
    			value.$set(value_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(value.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(value.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(value, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_1$5.name,
    		type: "if",
    		source: "(25:10) {#if ['weaponStrings'].includes(key)}",
    		ctx
    	});

    	return block;
    }

    // (18:2) {#each Object.entries(craft).sort((a, b) =>      a[0] > b[0] ? 1 : -1    ) as [key, prop]}
    function create_each_block$8(ctx) {
    	let show_if = !["type", "battlescapeTerrainData", "craftInventoryTile", "deployment"].includes(/*key*/ ctx[2]);
    	let if_block_anchor;
    	let current;
    	let if_block = show_if && create_if_block$8(ctx);

    	const block = {
    		c: function create() {
    			if (if_block) if_block.c();
    			if_block_anchor = empty();
    		},
    		m: function mount(target, anchor) {
    			if (if_block) if_block.m(target, anchor);
    			insert_dev(target, if_block_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*craft*/ 1) show_if = !["type", "battlescapeTerrainData", "craftInventoryTile", "deployment"].includes(/*key*/ ctx[2]);

    			if (show_if) {
    				if (if_block) {
    					if_block.p(ctx, dirty);
    					transition_in(if_block, 1);
    				} else {
    					if_block = create_if_block$8(ctx);
    					if_block.c();
    					transition_in(if_block, 1);
    					if_block.m(if_block_anchor.parentNode, if_block_anchor);
    				}
    			} else if (if_block) {
    				group_outros();

    				transition_out(if_block, 1, 1, () => {
    					if_block = null;
    				});

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (if_block) if_block.d(detaching);
    			if (detaching) detach_dev(if_block_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block$8.name,
    		type: "each",
    		source: "(18:2) {#each Object.entries(craft).sort((a, b) =>      a[0] > b[0] ? 1 : -1    ) as [key, prop]}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$d(ctx) {
    	let table;
    	let tr;
    	let td;
    	let t1;
    	let current;
    	let each_value = Object.entries(/*craft*/ ctx[0]).sort(func$1);
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block$8(get_each_context$8(ctx, each_value, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			table = element("table");
    			tr = element("tr");
    			td = element("td");
    			td.textContent = `${rul.str("Craft")}`;
    			t1 = space();

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			attr_dev(td, "colspan", "2");
    			attr_dev(td, "class", "table-header");
    			add_location(td, file$b, 15, 4, 331);
    			add_location(tr, file$b, 14, 2, 321);
    			attr_dev(table, "class", "main-table");
    			add_location(table, file$b, 13, 0, 291);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, table, anchor);
    			append_dev(table, tr);
    			append_dev(tr, td);
    			append_dev(table, t1);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(table, null);
    			}

    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*Object, craft, rul*/ 1) {
    				each_value = Object.entries(/*craft*/ ctx[0]).sort(func$1);
    				let i;

    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context$8(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block$8(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(table, null);
    					}
    				}

    				group_outros();

    				for (i = each_value.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;

    			for (let i = 0; i < each_value.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},
    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(table);
    			destroy_each(each_blocks, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$d.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    const func$1 = (a, b) => a[0] > b[0] ? 1 : -1;

    function instance$c($$self, $$props, $$invalidate) {
    	let { craft } = $$props;
    	const writable_props = ["craft"];

    	Object_1$5.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1$4.warn(`<Craft> was created with unknown prop '${key}'`);
    	});

    	const func_1 = slot => rul.str(slot).replace(">{ALT}{0}", "");

    	$$self.$set = $$props => {
    		if ("craft" in $$props) $$invalidate(0, craft = $$props.craft);
    	};

    	$$self.$capture_state = () => {
    		return { craft };
    	};

    	$$self.$inject_state = $$props => {
    		if ("craft" in $$props) $$invalidate(0, craft = $$props.craft);
    	};

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty & /*craft*/ 1) {
    			$: {
    				console.info(craft);
    			}
    		}
    	};

    	return [craft, func_1];
    }

    class Craft$1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$c, create_fragment$d, safe_not_equal, { craft: 0 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Craft",
    			options,
    			id: create_fragment$d.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || ({});

    		if (/*craft*/ ctx[0] === undefined && !("craft" in props)) {
    			console_1$4.warn("<Craft> was created without expected prop 'craft'");
    		}
    	}

    	get craft() {
    		throw new Error("<Craft>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set craft(value) {
    		throw new Error("<Craft>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\CraftWeapon.svelte generated by Svelte v3.16.7 */

    const { Object: Object_1$6, console: console_1$5 } = globals;
    const file$c = "src\\CraftWeapon.svelte";

    function get_each_context$9(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[1] = list[i];
    	return child_ctx;
    }

    // (30:10) {#if !['type'].includes(prop[0])}
    function create_if_block_2$6(ctx) {
    	let tr;
    	let td0;
    	let raw_value = rul.decamelize(/*prop*/ ctx[1][0]) + "";
    	let t0;
    	let td1;
    	let t1;
    	let current;

    	const value = new Value({
    			props: { val: /*prop*/ ctx[1][1] },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			tr = element("tr");
    			td0 = element("td");
    			t0 = space();
    			td1 = element("td");
    			create_component(value.$$.fragment);
    			t1 = space();
    			attr_dev(td0, "class", "padding-right svelte-8df2j8");
    			add_location(td0, file$c, 31, 14, 654);
    			attr_dev(td1, "class", "svelte-8df2j8");
    			add_location(td1, file$c, 34, 14, 766);
    			add_location(tr, file$c, 30, 12, 634);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, tr, anchor);
    			append_dev(tr, td0);
    			td0.innerHTML = raw_value;
    			append_dev(tr, t0);
    			append_dev(tr, td1);
    			mount_component(value, td1, null);
    			append_dev(tr, t1);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if ((!current || dirty & /*weapon*/ 1) && raw_value !== (raw_value = rul.decamelize(/*prop*/ ctx[1][0]) + "")) td0.innerHTML = raw_value;			const value_changes = {};
    			if (dirty & /*weapon*/ 1) value_changes.val = /*prop*/ ctx[1][1];
    			value.$set(value_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(value.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(value.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(tr);
    			destroy_component(value);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_2$6.name,
    		type: "if",
    		source: "(30:10) {#if !['type'].includes(prop[0])}",
    		ctx
    	});

    	return block;
    }

    // (27:8) {#each Object.entries(weapon).sort((a, b) =>            a[0] > b[0] ? 1 : -1          ) as prop}
    function create_each_block$9(ctx) {
    	let show_if = !["type"].includes(/*prop*/ ctx[1][0]);
    	let if_block_anchor;
    	let current;
    	let if_block = show_if && create_if_block_2$6(ctx);

    	const block = {
    		c: function create() {
    			if (if_block) if_block.c();
    			if_block_anchor = empty();
    		},
    		m: function mount(target, anchor) {
    			if (if_block) if_block.m(target, anchor);
    			insert_dev(target, if_block_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*weapon*/ 1) show_if = !["type"].includes(/*prop*/ ctx[1][0]);

    			if (show_if) {
    				if (if_block) {
    					if_block.p(ctx, dirty);
    					transition_in(if_block, 1);
    				} else {
    					if_block = create_if_block_2$6(ctx);
    					if_block.c();
    					transition_in(if_block, 1);
    					if_block.m(if_block_anchor.parentNode, if_block_anchor);
    				}
    			} else if (if_block) {
    				group_outros();

    				transition_out(if_block, 1, 1, () => {
    					if_block = null;
    				});

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (if_block) if_block.d(detaching);
    			if (detaching) detach_dev(if_block_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block$9.name,
    		type: "each",
    		source: "(27:8) {#each Object.entries(weapon).sort((a, b) =>            a[0] > b[0] ? 1 : -1          ) as prop}",
    		ctx
    	});

    	return block;
    }

    // (45:4) {#if weapon.launcher}
    function create_if_block_1$6(ctx) {
    	let current;

    	const item = new Item$1({
    			props: {
    				item: rul.items[/*weapon*/ ctx[0].launcher],
    				title: "Launcher: " + rul.str(/*weapon*/ ctx[0].launcher)
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(item.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(item, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const item_changes = {};
    			if (dirty & /*weapon*/ 1) item_changes.item = rul.items[/*weapon*/ ctx[0].launcher];
    			if (dirty & /*weapon*/ 1) item_changes.title = "Launcher: " + rul.str(/*weapon*/ ctx[0].launcher);
    			item.$set(item_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(item.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(item.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(item, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_1$6.name,
    		type: "if",
    		source: "(45:4) {#if weapon.launcher}",
    		ctx
    	});

    	return block;
    }

    // (48:4) {#if weapon.clip}
    function create_if_block$9(ctx) {
    	let current;

    	const item = new Item$1({
    			props: {
    				item: rul.items[/*weapon*/ ctx[0].clip],
    				title: "Clip: " + rul.str(/*weapon*/ ctx[0].clip)
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(item.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(item, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const item_changes = {};
    			if (dirty & /*weapon*/ 1) item_changes.item = rul.items[/*weapon*/ ctx[0].clip];
    			if (dirty & /*weapon*/ 1) item_changes.title = "Clip: " + rul.str(/*weapon*/ ctx[0].clip);
    			item.$set(item_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(item.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(item.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(item, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$9.name,
    		type: "if",
    		source: "(48:4) {#if weapon.clip}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$e(ctx) {
    	let table2;
    	let tr1;
    	let td1;
    	let table0;
    	let tr0;
    	let td0;
    	let t1;
    	let t2;
    	let td2;
    	let table1;
    	let t3;
    	let current;
    	let each_value = Object.entries(/*weapon*/ ctx[0]).sort(func$2);
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block$9(get_each_context$9(ctx, each_value, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	let if_block0 = /*weapon*/ ctx[0].launcher && create_if_block_1$6(ctx);
    	let if_block1 = /*weapon*/ ctx[0].clip && create_if_block$9(ctx);

    	const block = {
    		c: function create() {
    			table2 = element("table");
    			tr1 = element("tr");
    			td1 = element("td");
    			table0 = element("table");
    			tr0 = element("tr");
    			td0 = element("td");
    			td0.textContent = "Weapon";
    			t1 = space();

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			t2 = space();
    			td2 = element("td");
    			table1 = element("table");
    			if (if_block0) if_block0.c();
    			t3 = space();
    			if (if_block1) if_block1.c();
    			attr_dev(td0, "colspan", "2");
    			attr_dev(td0, "class", "table-header svelte-8df2j8");
    			add_location(td0, file$c, 24, 10, 406);
    			add_location(tr0, file$c, 23, 8, 390);
    			attr_dev(table0, "class", "main-table");
    			add_location(table0, file$c, 22, 6, 354);
    			attr_dev(td1, "class", "svelte-8df2j8");
    			add_location(td1, file$c, 21, 4, 342);
    			attr_dev(table1, "class", "main-table");
    			add_location(table1, file$c, 43, 4, 928);
    			attr_dev(td2, "class", "svelte-8df2j8");
    			add_location(td2, file$c, 42, 4, 918);
    			add_location(tr1, file$c, 20, 2, 332);
    			attr_dev(table2, "class", "panels3 svelte-8df2j8");
    			add_location(table2, file$c, 19, 0, 305);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, table2, anchor);
    			append_dev(table2, tr1);
    			append_dev(tr1, td1);
    			append_dev(td1, table0);
    			append_dev(table0, tr0);
    			append_dev(tr0, td0);
    			append_dev(table0, t1);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(table0, null);
    			}

    			append_dev(tr1, t2);
    			append_dev(tr1, td2);
    			append_dev(td2, table1);
    			if (if_block0) if_block0.m(table1, null);
    			append_dev(table1, t3);
    			if (if_block1) if_block1.m(table1, null);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*Object, weapon, rul*/ 1) {
    				each_value = Object.entries(/*weapon*/ ctx[0]).sort(func$2);
    				let i;

    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context$9(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block$9(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(table0, null);
    					}
    				}

    				group_outros();

    				for (i = each_value.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}

    				check_outros();
    			}

    			if (/*weapon*/ ctx[0].launcher) {
    				if (if_block0) {
    					if_block0.p(ctx, dirty);
    					transition_in(if_block0, 1);
    				} else {
    					if_block0 = create_if_block_1$6(ctx);
    					if_block0.c();
    					transition_in(if_block0, 1);
    					if_block0.m(table1, t3);
    				}
    			} else if (if_block0) {
    				group_outros();

    				transition_out(if_block0, 1, 1, () => {
    					if_block0 = null;
    				});

    				check_outros();
    			}

    			if (/*weapon*/ ctx[0].clip) {
    				if (if_block1) {
    					if_block1.p(ctx, dirty);
    					transition_in(if_block1, 1);
    				} else {
    					if_block1 = create_if_block$9(ctx);
    					if_block1.c();
    					transition_in(if_block1, 1);
    					if_block1.m(table1, null);
    				}
    			} else if (if_block1) {
    				group_outros();

    				transition_out(if_block1, 1, 1, () => {
    					if_block1 = null;
    				});

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;

    			for (let i = 0; i < each_value.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			transition_in(if_block0);
    			transition_in(if_block1);
    			current = true;
    		},
    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			transition_out(if_block0);
    			transition_out(if_block1);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(table2);
    			destroy_each(each_blocks, detaching);
    			if (if_block0) if_block0.d();
    			if (if_block1) if_block1.d();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$e.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    const func$2 = (a, b) => a[0] > b[0] ? 1 : -1;

    function instance$d($$self, $$props, $$invalidate) {
    	let { weapon } = $$props;
    	const writable_props = ["weapon"];

    	Object_1$6.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1$5.warn(`<CraftWeapon> was created with unknown prop '${key}'`);
    	});

    	$$self.$set = $$props => {
    		if ("weapon" in $$props) $$invalidate(0, weapon = $$props.weapon);
    	};

    	$$self.$capture_state = () => {
    		return { weapon };
    	};

    	$$self.$inject_state = $$props => {
    		if ("weapon" in $$props) $$invalidate(0, weapon = $$props.weapon);
    	};

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty & /*weapon*/ 1) {
    			$: {
    				console.log(weapon);
    			}
    		}
    	};

    	return [weapon];
    }

    class CraftWeapon$1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$d, create_fragment$e, safe_not_equal, { weapon: 0 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "CraftWeapon",
    			options,
    			id: create_fragment$e.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || ({});

    		if (/*weapon*/ ctx[0] === undefined && !("weapon" in props)) {
    			console_1$5.warn("<CraftWeapon> was created without expected prop 'weapon'");
    		}
    	}

    	get weapon() {
    		throw new Error("<CraftWeapon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set weapon(value) {
    		throw new Error("<CraftWeapon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\Unit.svelte generated by Svelte v3.16.7 */

    const { Object: Object_1$7, console: console_1$6 } = globals;
    const file$d = "src\\Unit.svelte";

    function get_each_context_2$2(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[8] = list[i];
    	child_ctx[10] = i;
    	return child_ctx;
    }

    function get_each_context_1$2(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[5] = list[i];
    	child_ctx[7] = i;
    	return child_ctx;
    }

    function get_each_context$a(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[1] = list[i][0];
    	child_ctx[2] = list[i][1];
    	return child_ctx;
    }

    // (16:4) {#if !['type', 'deathSound', 'scripts'].includes(key)}
    function create_if_block$a(ctx) {
    	let tr;
    	let td0;
    	let raw_value = rul.decamelize(/*key*/ ctx[1]) + "";
    	let t0;
    	let td1;
    	let show_if;
    	let current_block_type_index;
    	let if_block;
    	let t1;
    	let current;
    	const if_block_creators = [create_if_block_1$7, create_else_block$6];
    	const if_blocks = [];

    	function select_block_type(ctx, dirty) {
    		if (dirty & /*unit*/ 1) show_if = !!["builtInWeaponSets"].includes(/*prop*/ ctx[2][0]);
    		if (show_if) return 0;
    		return 1;
    	}

    	current_block_type_index = select_block_type(ctx, -1);
    	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

    	const block = {
    		c: function create() {
    			tr = element("tr");
    			td0 = element("td");
    			t0 = space();
    			td1 = element("td");
    			if_block.c();
    			t1 = space();
    			attr_dev(td0, "class", "padding-right");
    			add_location(td0, file$d, 17, 8, 448);
    			add_location(td1, file$d, 18, 8, 516);
    			add_location(tr, file$d, 16, 6, 434);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, tr, anchor);
    			append_dev(tr, td0);
    			td0.innerHTML = raw_value;
    			append_dev(tr, t0);
    			append_dev(tr, td1);
    			if_blocks[current_block_type_index].m(td1, null);
    			append_dev(tr, t1);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if ((!current || dirty & /*unit*/ 1) && raw_value !== (raw_value = rul.decamelize(/*key*/ ctx[1]) + "")) td0.innerHTML = raw_value;			let previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type(ctx, dirty);

    			if (current_block_type_index === previous_block_index) {
    				if_blocks[current_block_type_index].p(ctx, dirty);
    			} else {
    				group_outros();

    				transition_out(if_blocks[previous_block_index], 1, 1, () => {
    					if_blocks[previous_block_index] = null;
    				});

    				check_outros();
    				if_block = if_blocks[current_block_type_index];

    				if (!if_block) {
    					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    					if_block.c();
    				}

    				transition_in(if_block, 1);
    				if_block.m(td1, null);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(tr);
    			if_blocks[current_block_type_index].d();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$a.name,
    		type: "if",
    		source: "(16:4) {#if !['type', 'deathSound', 'scripts'].includes(key)}",
    		ctx
    	});

    	return block;
    }

    // (28:10) {:else}
    function create_else_block$6(ctx) {
    	let current;

    	const value = new Value({
    			props: { val: /*prop*/ ctx[2] },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(value.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(value, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const value_changes = {};
    			if (dirty & /*unit*/ 1) value_changes.val = /*prop*/ ctx[2];
    			value.$set(value_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(value.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(value.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(value, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block$6.name,
    		type: "else",
    		source: "(28:10) {:else}",
    		ctx
    	});

    	return block;
    }

    // (20:10) {#if ['builtInWeaponSets'].includes(prop[0])}
    function create_if_block_1$7(ctx) {
    	let each_1_anchor;
    	let current;
    	let each_value_1 = Object.values(/*prop*/ ctx[2]);
    	let each_blocks = [];

    	for (let i = 0; i < each_value_1.length; i += 1) {
    		each_blocks[i] = create_each_block_1$2(get_each_context_1$2(ctx, each_value_1, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			each_1_anchor = empty();
    		},
    		m: function mount(target, anchor) {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(target, anchor);
    			}

    			insert_dev(target, each_1_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*Object, unit*/ 1) {
    				each_value_1 = Object.values(/*prop*/ ctx[2]);
    				let i;

    				for (i = 0; i < each_value_1.length; i += 1) {
    					const child_ctx = get_each_context_1$2(ctx, each_value_1, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block_1$2(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
    					}
    				}

    				group_outros();

    				for (i = each_value_1.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;

    			for (let i = 0; i < each_value_1.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},
    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_each(each_blocks, detaching);
    			if (detaching) detach_dev(each_1_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_1$7.name,
    		type: "if",
    		source: "(20:10) {#if ['builtInWeaponSets'].includes(prop[0])}",
    		ctx
    	});

    	return block;
    }

    // (22:14) {#if i != 0}
    function create_if_block_3$4(ctx) {
    	let br;

    	const block = {
    		c: function create() {
    			br = element("br");
    			add_location(br, file$d, 21, 26, 656);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, br, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(br);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_3$4.name,
    		type: "if",
    		source: "(22:14) {#if i != 0}",
    		ctx
    	});

    	return block;
    }

    // (24:16) {#if j != 0}
    function create_if_block_2$7(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text(",");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_2$7.name,
    		type: "if",
    		source: "(24:16) {#if j != 0}",
    		ctx
    	});

    	return block;
    }

    // (23:14) {#each set as field, j}
    function create_each_block_2$2(ctx) {
    	let t;
    	let current;
    	let if_block = /*j*/ ctx[10] != 0 && create_if_block_2$7(ctx);

    	const link = new Link({
    			props: { href: /*field*/ ctx[8] },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			if (if_block) if_block.c();
    			t = space();
    			create_component(link.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			if (if_block) if_block.m(target, anchor);
    			insert_dev(target, t, anchor);
    			mount_component(link, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const link_changes = {};
    			if (dirty & /*unit*/ 1) link_changes.href = /*field*/ ctx[8];
    			link.$set(link_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(link.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(link.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (if_block) if_block.d(detaching);
    			if (detaching) detach_dev(t);
    			destroy_component(link, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block_2$2.name,
    		type: "each",
    		source: "(23:14) {#each set as field, j}",
    		ctx
    	});

    	return block;
    }

    // (21:12) {#each Object.values(prop) as set, i}
    function create_each_block_1$2(ctx) {
    	let t;
    	let each_1_anchor;
    	let current;
    	let if_block = /*i*/ ctx[7] != 0 && create_if_block_3$4(ctx);
    	let each_value_2 = /*set*/ ctx[5];
    	let each_blocks = [];

    	for (let i = 0; i < each_value_2.length; i += 1) {
    		each_blocks[i] = create_each_block_2$2(get_each_context_2$2(ctx, each_value_2, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			if (if_block) if_block.c();
    			t = space();

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			each_1_anchor = empty();
    		},
    		m: function mount(target, anchor) {
    			if (if_block) if_block.m(target, anchor);
    			insert_dev(target, t, anchor);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(target, anchor);
    			}

    			insert_dev(target, each_1_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*Object, unit*/ 1) {
    				each_value_2 = /*set*/ ctx[5];
    				let i;

    				for (i = 0; i < each_value_2.length; i += 1) {
    					const child_ctx = get_each_context_2$2(ctx, each_value_2, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block_2$2(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
    					}
    				}

    				group_outros();

    				for (i = each_value_2.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;

    			for (let i = 0; i < each_value_2.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},
    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (if_block) if_block.d(detaching);
    			if (detaching) detach_dev(t);
    			destroy_each(each_blocks, detaching);
    			if (detaching) detach_dev(each_1_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block_1$2.name,
    		type: "each",
    		source: "(21:12) {#each Object.values(prop) as set, i}",
    		ctx
    	});

    	return block;
    }

    // (15:2) {#each Object.entries(unit).sort((a, b) => (a[0] > b[0] ? 1 : -1)) as [key, prop]}
    function create_each_block$a(ctx) {
    	let show_if = !["type", "deathSound", "scripts"].includes(/*key*/ ctx[1]);
    	let if_block_anchor;
    	let current;
    	let if_block = show_if && create_if_block$a(ctx);

    	const block = {
    		c: function create() {
    			if (if_block) if_block.c();
    			if_block_anchor = empty();
    		},
    		m: function mount(target, anchor) {
    			if (if_block) if_block.m(target, anchor);
    			insert_dev(target, if_block_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*unit*/ 1) show_if = !["type", "deathSound", "scripts"].includes(/*key*/ ctx[1]);

    			if (show_if) {
    				if (if_block) {
    					if_block.p(ctx, dirty);
    					transition_in(if_block, 1);
    				} else {
    					if_block = create_if_block$a(ctx);
    					if_block.c();
    					transition_in(if_block, 1);
    					if_block.m(if_block_anchor.parentNode, if_block_anchor);
    				}
    			} else if (if_block) {
    				group_outros();

    				transition_out(if_block, 1, 1, () => {
    					if_block = null;
    				});

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (if_block) if_block.d(detaching);
    			if (detaching) detach_dev(if_block_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block$a.name,
    		type: "each",
    		source: "(15:2) {#each Object.entries(unit).sort((a, b) => (a[0] > b[0] ? 1 : -1)) as [key, prop]}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$f(ctx) {
    	let tr;
    	let td;
    	let t1;
    	let each_1_anchor;
    	let current;
    	let each_value = Object.entries(/*unit*/ ctx[0]).sort(func$3);
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block$a(get_each_context$a(ctx, each_value, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			tr = element("tr");
    			td = element("td");
    			td.textContent = "Unit";
    			t1 = space();

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			each_1_anchor = empty();
    			attr_dev(td, "colspan", "2");
    			attr_dev(td, "class", "table-header");
    			add_location(td, file$d, 13, 7, 228);
    			add_location(tr, file$d, 13, 2, 223);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, tr, anchor);
    			append_dev(tr, td);
    			insert_dev(target, t1, anchor);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(target, anchor);
    			}

    			insert_dev(target, each_1_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*Object, unit, rul*/ 1) {
    				each_value = Object.entries(/*unit*/ ctx[0]).sort(func$3);
    				let i;

    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context$a(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block$a(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
    					}
    				}

    				group_outros();

    				for (i = each_value.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;

    			for (let i = 0; i < each_value.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},
    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(tr);
    			if (detaching) detach_dev(t1);
    			destroy_each(each_blocks, detaching);
    			if (detaching) detach_dev(each_1_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$f.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    const func$3 = (a, b) => a[0] > b[0] ? 1 : -1;

    function instance$e($$self, $$props, $$invalidate) {
    	let { unit } = $$props;
    	const writable_props = ["unit"];

    	Object_1$7.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1$6.warn(`<Unit> was created with unknown prop '${key}'`);
    	});

    	$$self.$set = $$props => {
    		if ("unit" in $$props) $$invalidate(0, unit = $$props.unit);
    	};

    	$$self.$capture_state = () => {
    		return { unit };
    	};

    	$$self.$inject_state = $$props => {
    		if ("unit" in $$props) $$invalidate(0, unit = $$props.unit);
    	};

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty & /*unit*/ 1) {
    			$: {
    				console.log(unit);
    			}
    		}
    	};

    	return [unit];
    }

    class Unit$1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$e, create_fragment$f, safe_not_equal, { unit: 0 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Unit",
    			options,
    			id: create_fragment$f.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || ({});

    		if (/*unit*/ ctx[0] === undefined && !("unit" in props)) {
    			console_1$6.warn("<Unit> was created without expected prop 'unit'");
    		}
    	}

    	get unit() {
    		throw new Error("<Unit>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set unit(value) {
    		throw new Error("<Unit>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\Research.svelte generated by Svelte v3.16.7 */

    const { Object: Object_1$8, console: console_1$7 } = globals;

    const file$e = "src\\Research.svelte";

    function get_each_context_2$3(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[4] = list[i];
    	return child_ctx;
    }

    function get_each_context_1$3(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[8] = list[i];
    	child_ctx[10] = i;
    	return child_ctx;
    }

    function get_each_context$b(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[4] = list[i][0];
    	child_ctx[5] = list[i][1];
    	return child_ctx;
    }

    // (36:6) {#if !['name'].includes(key)}
    function create_if_block_3$5(ctx) {
    	let tr;
    	let td0;
    	let raw_value = rul.decamelize(/*key*/ ctx[4]) + "";
    	let t0;
    	let td1;
    	let t1;
    	let current;

    	const value = new Value({
    			props: { val: /*prop*/ ctx[5] },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			tr = element("tr");
    			td0 = element("td");
    			t0 = space();
    			td1 = element("td");
    			create_component(value.$$.fragment);
    			t1 = space();
    			add_location(td0, file$e, 37, 12, 1424);
    			add_location(td1, file$e, 40, 12, 1504);
    			add_location(tr, file$e, 36, 8, 1398);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, tr, anchor);
    			append_dev(tr, td0);
    			td0.innerHTML = raw_value;
    			append_dev(tr, t0);
    			append_dev(tr, td1);
    			mount_component(value, td1, null);
    			append_dev(tr, t1);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if ((!current || dirty & /*research*/ 1) && raw_value !== (raw_value = rul.decamelize(/*key*/ ctx[4]) + "")) td0.innerHTML = raw_value;			const value_changes = {};
    			if (dirty & /*research*/ 1) value_changes.val = /*prop*/ ctx[5];
    			value.$set(value_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(value.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(value.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(tr);
    			destroy_component(value);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_3$5.name,
    		type: "if",
    		source: "(36:6) {#if !['name'].includes(key)}",
    		ctx
    	});

    	return block;
    }

    // (30:43) 
    function create_if_block_2$8(ctx) {
    	let tr;
    	let td;
    	let t0_value = rul.decamelize(/*key*/ ctx[4]) + "";
    	let t0;
    	let t1;
    	let each_1_anchor;
    	let current;
    	let each_value_2 = Object.keys(/*prop*/ ctx[5]);
    	let each_blocks = [];

    	for (let i = 0; i < each_value_2.length; i += 1) {
    		each_blocks[i] = create_each_block_2$3(get_each_context_2$3(ctx, each_value_2, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			tr = element("tr");
    			td = element("td");
    			t0 = text(t0_value);
    			t1 = space();

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			each_1_anchor = empty();
    			attr_dev(td, "colspan", "2");
    			attr_dev(td, "class", "table-subheader");
    			add_location(td, file$e, 30, 10, 1129);
    			add_location(tr, file$e, 30, 6, 1125);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, tr, anchor);
    			append_dev(tr, td);
    			append_dev(td, t0);
    			insert_dev(target, t1, anchor);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(target, anchor);
    			}

    			insert_dev(target, each_1_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if ((!current || dirty & /*research*/ 1) && t0_value !== (t0_value = rul.decamelize(/*key*/ ctx[4]) + "")) set_data_dev(t0, t0_value);

    			if (dirty & /*Object, research, longLists*/ 5) {
    				each_value_2 = Object.keys(/*prop*/ ctx[5]);
    				let i;

    				for (i = 0; i < each_value_2.length; i += 1) {
    					const child_ctx = get_each_context_2$3(ctx, each_value_2, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block_2$3(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
    					}
    				}

    				group_outros();

    				for (i = each_value_2.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;

    			for (let i = 0; i < each_value_2.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},
    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(tr);
    			if (detaching) detach_dev(t1);
    			destroy_each(each_blocks, detaching);
    			if (detaching) detach_dev(each_1_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_2$8.name,
    		type: "if",
    		source: "(30:43) ",
    		ctx
    	});

    	return block;
    }

    // (28:50) 
    function create_if_block_1$8(ctx) {
    	let current;

    	const baseservicelist = new BaseServiceList({
    			props: { items: /*prop*/ ctx[5], vertical: true },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(baseservicelist.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(baseservicelist, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const baseservicelist_changes = {};
    			if (dirty & /*research*/ 1) baseservicelist_changes.items = /*prop*/ ctx[5];
    			baseservicelist.$set(baseservicelist_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(baseservicelist.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(baseservicelist.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(baseservicelist, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_1$8.name,
    		type: "if",
    		source: "(28:50) ",
    		ctx
    	});

    	return block;
    }

    // (19:4) {#if longLists.includes(key) && prop && prop.length>0}
    function create_if_block$b(ctx) {
    	let tr;
    	let td;
    	let div0;
    	let t0_value = rul.decamelize(/*key*/ ctx[4]) + "";
    	let t0;
    	let t1;
    	let div1;
    	let t2;
    	let current;
    	let each_value_1 = /*prop*/ ctx[5];
    	let each_blocks = [];

    	for (let i = 0; i < each_value_1.length; i += 1) {
    		each_blocks[i] = create_each_block_1$3(get_each_context_1$3(ctx, each_value_1, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			tr = element("tr");
    			td = element("td");
    			div0 = element("div");
    			t0 = text(t0_value);
    			t1 = space();
    			div1 = element("div");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			t2 = space();
    			attr_dev(div0, "class", "table-subheader");
    			add_location(div0, file$e, 20, 10, 723);
    			attr_dev(div1, "class", "cols");
    			set_style(div1, "columns", "2");
    			add_location(div1, file$e, 21, 10, 791);
    			attr_dev(td, "colspan", "2");
    			add_location(td, file$e, 19, 27, 695);
    			attr_dev(tr, "class", "subtable");
    			add_location(tr, file$e, 19, 6, 674);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, tr, anchor);
    			append_dev(tr, td);
    			append_dev(td, div0);
    			append_dev(div0, t0);
    			append_dev(td, t1);
    			append_dev(td, div1);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(div1, null);
    			}

    			append_dev(td, t2);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if ((!current || dirty & /*research*/ 1) && t0_value !== (t0_value = rul.decamelize(/*key*/ ctx[4]) + "")) set_data_dev(t0, t0_value);

    			if (dirty & /*Object, research, longLists*/ 5) {
    				each_value_1 = /*prop*/ ctx[5];
    				let i;

    				for (i = 0; i < each_value_1.length; i += 1) {
    					const child_ctx = get_each_context_1$3(ctx, each_value_1, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block_1$3(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(div1, null);
    					}
    				}

    				group_outros();

    				for (i = each_value_1.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;

    			for (let i = 0; i < each_value_1.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},
    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(tr);
    			destroy_each(each_blocks, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$b.name,
    		type: "if",
    		source: "(19:4) {#if longLists.includes(key) && prop && prop.length>0}",
    		ctx
    	});

    	return block;
    }

    // (32:6) {#each Object.keys(prop) as key}
    function create_each_block_2$3(ctx) {
    	let tr;
    	let td0;
    	let td1;
    	let current;

    	const link = new Link({
    			props: { href: /*key*/ ctx[4] },
    			$$inline: true
    		});

    	const linkslist = new LinksList({
    			props: { items: /*prop*/ ctx[5][/*key*/ ctx[4]] },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			tr = element("tr");
    			td0 = element("td");
    			create_component(link.$$.fragment);
    			td1 = element("td");
    			create_component(linkslist.$$.fragment);
    			add_location(td0, file$e, 32, 10, 1252);
    			add_location(td1, file$e, 32, 37, 1279);
    			add_location(tr, file$e, 32, 6, 1248);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, tr, anchor);
    			append_dev(tr, td0);
    			mount_component(link, td0, null);
    			append_dev(tr, td1);
    			mount_component(linkslist, td1, null);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const link_changes = {};
    			if (dirty & /*research*/ 1) link_changes.href = /*key*/ ctx[4];
    			link.$set(link_changes);
    			const linkslist_changes = {};
    			if (dirty & /*research*/ 1) linkslist_changes.items = /*prop*/ ctx[5][/*key*/ ctx[4]];
    			linkslist.$set(linkslist_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(link.$$.fragment, local);
    			transition_in(linkslist.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(link.$$.fragment, local);
    			transition_out(linkslist.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(tr);
    			destroy_component(link);
    			destroy_component(linkslist);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block_2$3.name,
    		type: "each",
    		source: "(32:6) {#each Object.keys(prop) as key}",
    		ctx
    	});

    	return block;
    }

    // (23:10) {#each prop as field, i}
    function create_each_block_1$3(ctx) {
    	let div;
    	let current;

    	const link = new Link({
    			props: { href: /*field*/ ctx[8] },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			div = element("div");
    			create_component(link.$$.fragment);
    			add_location(div, file$e, 23, 12, 878);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			mount_component(link, div, null);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const link_changes = {};
    			if (dirty & /*research*/ 1) link_changes.href = /*field*/ ctx[8];
    			link.$set(link_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(link.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(link.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			destroy_component(link);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block_1$3.name,
    		type: "each",
    		source: "(23:10) {#each prop as field, i}",
    		ctx
    	});

    	return block;
    }

    // (18:2) {#each Object.entries(research).sort((a, b) => (longLists.includes(b[0])?-10:10) + (a[0] > b[0] ? 1 : -1)) as [key, prop]}
    function create_each_block$b(ctx) {
    	let show_if;
    	let show_if_1;
    	let show_if_2;
    	let current_block_type_index;
    	let if_block;
    	let if_block_anchor;
    	let current;
    	const if_block_creators = [create_if_block$b, create_if_block_1$8, create_if_block_2$8, create_if_block_3$5];
    	const if_blocks = [];

    	function select_block_type(ctx, dirty) {
    		if (dirty & /*research*/ 1) show_if = !!(/*longLists*/ ctx[2].includes(/*key*/ ctx[4]) && /*prop*/ ctx[5] && /*prop*/ ctx[5].length > 0);
    		if (show_if) return 0;
    		if (dirty & /*research*/ 1) show_if_1 = !!["requiresBaseFunc"].includes(/*key*/ ctx[4]);
    		if (show_if_1) return 1;
    		if (/*key*/ ctx[4] == "getOneFreeProtected") return 2;
    		if (dirty & /*research*/ 1) show_if_2 = !!!["name"].includes(/*key*/ ctx[4]);
    		if (show_if_2) return 3;
    		return -1;
    	}

    	if (~(current_block_type_index = select_block_type(ctx, -1))) {
    		if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    	}

    	const block = {
    		c: function create() {
    			if (if_block) if_block.c();
    			if_block_anchor = empty();
    		},
    		m: function mount(target, anchor) {
    			if (~current_block_type_index) {
    				if_blocks[current_block_type_index].m(target, anchor);
    			}

    			insert_dev(target, if_block_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			let previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type(ctx, dirty);

    			if (current_block_type_index === previous_block_index) {
    				if (~current_block_type_index) {
    					if_blocks[current_block_type_index].p(ctx, dirty);
    				}
    			} else {
    				if (if_block) {
    					group_outros();

    					transition_out(if_blocks[previous_block_index], 1, 1, () => {
    						if_blocks[previous_block_index] = null;
    					});

    					check_outros();
    				}

    				if (~current_block_type_index) {
    					if_block = if_blocks[current_block_type_index];

    					if (!if_block) {
    						if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    						if_block.c();
    					}

    					transition_in(if_block, 1);
    					if_block.m(if_block_anchor.parentNode, if_block_anchor);
    				} else {
    					if_block = null;
    				}
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (~current_block_type_index) {
    				if_blocks[current_block_type_index].d(detaching);
    			}

    			if (detaching) detach_dev(if_block_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block$b.name,
    		type: "each",
    		source: "(18:2) {#each Object.entries(research).sort((a, b) => (longLists.includes(b[0])?-10:10) + (a[0] > b[0] ? 1 : -1)) as [key, prop]}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$g(ctx) {
    	let tr;
    	let td;
    	let t0;
    	let t1;
    	let each_1_anchor;
    	let current;
    	let each_value = Object.entries(/*research*/ ctx[0]).sort(/*func*/ ctx[3]);
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block$b(get_each_context$b(ctx, each_value, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			tr = element("tr");
    			td = element("td");
    			t0 = text(/*title*/ ctx[1]);
    			t1 = space();

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			each_1_anchor = empty();
    			attr_dev(td, "colspan", "2");
    			attr_dev(td, "class", "table-header");
    			add_location(td, file$e, 15, 4, 422);
    			add_location(tr, file$e, 14, 2, 412);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, tr, anchor);
    			append_dev(tr, td);
    			append_dev(td, t0);
    			insert_dev(target, t1, anchor);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(target, anchor);
    			}

    			insert_dev(target, each_1_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (!current || dirty & /*title*/ 2) set_data_dev(t0, /*title*/ ctx[1]);

    			if (dirty & /*longLists, Object, research, rul*/ 5) {
    				each_value = Object.entries(/*research*/ ctx[0]).sort(/*func*/ ctx[3]);
    				let i;

    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context$b(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block$b(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
    					}
    				}

    				group_outros();

    				for (i = each_value.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;

    			for (let i = 0; i < each_value.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},
    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(tr);
    			if (detaching) detach_dev(t1);
    			destroy_each(each_blocks, detaching);
    			if (detaching) detach_dev(each_1_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$g.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$f($$self, $$props, $$invalidate) {
    	let { research } = $$props;
    	let { title = rul.str("Research") } = $$props;

    	let longLists = [
    		"seeAlso",
    		"requiresBaseFunc",
    		"manufacture",
    		"getOneFree",
    		"freeFrom",
    		"unlocks",
    		"dependencies",
    		"leadsTo",
    		"disables"
    	];

    	const writable_props = ["research", "title"];

    	Object_1$8.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1$7.warn(`<Research> was created with unknown prop '${key}'`);
    	});

    	const func = (a, b) => (longLists.includes(b[0]) ? -10 : 10) + (a[0] > b[0] ? 1 : -1);

    	$$self.$set = $$props => {
    		if ("research" in $$props) $$invalidate(0, research = $$props.research);
    		if ("title" in $$props) $$invalidate(1, title = $$props.title);
    	};

    	$$self.$capture_state = () => {
    		return { research, title, longLists };
    	};

    	$$self.$inject_state = $$props => {
    		if ("research" in $$props) $$invalidate(0, research = $$props.research);
    		if ("title" in $$props) $$invalidate(1, title = $$props.title);
    		if ("longLists" in $$props) $$invalidate(2, longLists = $$props.longLists);
    	};

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty & /*research*/ 1) {
    			$: {
    				console.log(research);
    			}
    		}
    	};

    	return [research, title, longLists, func];
    }

    class Research$1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$f, create_fragment$g, safe_not_equal, { research: 0, title: 1 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Research",
    			options,
    			id: create_fragment$g.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || ({});

    		if (/*research*/ ctx[0] === undefined && !("research" in props)) {
    			console_1$7.warn("<Research> was created without expected prop 'research'");
    		}
    	}

    	get research() {
    		throw new Error("<Research>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set research(value) {
    		throw new Error("<Research>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get title() {
    		throw new Error("<Research>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set title(value) {
    		throw new Error("<Research>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\Manufacture.svelte generated by Svelte v3.16.7 */

    const { Object: Object_1$9, console: console_1$8 } = globals;
    const file$f = "src\\Manufacture.svelte";

    function get_each_context_1$4(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[4] = list[i];
    	child_ctx[6] = i;
    	return child_ctx;
    }

    function get_each_context$c(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[1] = list[i];
    	return child_ctx;
    }

    function get_each_context_3$2(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[4] = list[i];
    	child_ctx[6] = i;
    	return child_ctx;
    }

    function get_each_context_2$4(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[7] = list[i];
    	return child_ctx;
    }

    // (20:2) {#if 'randomProducedItems' in manufacture}
    function create_if_block_3$6(ctx) {
    	let tr0;
    	let td0;
    	let t1;
    	let tr1;
    	let td1;
    	let table;
    	let current;
    	let each_value_2 = /*manufacture*/ ctx[0].randomProducedItems;
    	let each_blocks = [];

    	for (let i = 0; i < each_value_2.length; i += 1) {
    		each_blocks[i] = create_each_block_2$4(get_each_context_2$4(ctx, each_value_2, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			tr0 = element("tr");
    			td0 = element("td");
    			td0.textContent = `${rul.decamelize("randomProducedItems")}`;
    			t1 = space();
    			tr1 = element("tr");
    			td1 = element("td");
    			table = element("table");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			attr_dev(td0, "colspan", "2");
    			attr_dev(td0, "class", "table-subheader");
    			add_location(td0, file$f, 20, 8, 418);
    			add_location(tr0, file$f, 20, 4, 414);
    			attr_dev(table, "class", "number-table");
    			attr_dev(table, "width", "100%");
    			set_style(table, "margin", "0px");
    			add_location(table, file$f, 22, 6, 541);
    			attr_dev(td1, "colspan", "2");
    			add_location(td1, file$f, 21, 8, 517);
    			add_location(tr1, file$f, 21, 4, 513);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, tr0, anchor);
    			append_dev(tr0, td0);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, tr1, anchor);
    			append_dev(tr1, td1);
    			append_dev(td1, table);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(table, null);
    			}

    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*manufacture, Object*/ 1) {
    				each_value_2 = /*manufacture*/ ctx[0].randomProducedItems;
    				let i;

    				for (i = 0; i < each_value_2.length; i += 1) {
    					const child_ctx = get_each_context_2$4(ctx, each_value_2, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block_2$4(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(table, null);
    					}
    				}

    				group_outros();

    				for (i = each_value_2.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;

    			for (let i = 0; i < each_value_2.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},
    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(tr0);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(tr1);
    			destroy_each(each_blocks, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_3$6.name,
    		type: "if",
    		source: "(20:2) {#if 'randomProducedItems' in manufacture}",
    		ctx
    	});

    	return block;
    }

    // (25:8) {#if Object.keys(chance[1]).length == 0}
    function create_if_block_4$2(ctx) {
    	let tr;
    	let td;

    	const block = {
    		c: function create() {
    			tr = element("tr");
    			td = element("td");
    			td.textContent = "NOTHING";
    			attr_dev(td, "colspan", "2");
    			set_style(td, "text-align", "center");
    			add_location(td, file$f, 25, 14, 724);
    			add_location(tr, file$f, 25, 10, 720);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, tr, anchor);
    			append_dev(tr, td);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(tr);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_4$2.name,
    		type: "if",
    		source: "(25:8) {#if Object.keys(chance[1]).length == 0}",
    		ctx
    	});

    	return block;
    }

    // (28:8) {#each Object.keys(chance[1]).sort() as field, i}
    function create_each_block_3$2(ctx) {
    	let tr;
    	let td0;
    	let t_value = /*chance*/ ctx[7][1][/*field*/ ctx[4]] + "";
    	let t;
    	let td1;
    	let current;

    	const link = new Link({
    			props: { href: /*field*/ ctx[4] },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			tr = element("tr");
    			td0 = element("td");
    			t = text(t_value);
    			td1 = element("td");
    			create_component(link.$$.fragment);
    			add_location(td0, file$f, 28, 14, 874);
    			add_location(td1, file$f, 28, 41, 901);
    			add_location(tr, file$f, 28, 10, 870);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, tr, anchor);
    			append_dev(tr, td0);
    			append_dev(td0, t);
    			append_dev(tr, td1);
    			mount_component(link, td1, null);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if ((!current || dirty & /*manufacture*/ 1) && t_value !== (t_value = /*chance*/ ctx[7][1][/*field*/ ctx[4]] + "")) set_data_dev(t, t_value);
    			const link_changes = {};
    			if (dirty & /*manufacture*/ 1) link_changes.href = /*field*/ ctx[4];
    			link.$set(link_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(link.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(link.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(tr);
    			destroy_component(link);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block_3$2.name,
    		type: "each",
    		source: "(28:8) {#each Object.keys(chance[1]).sort() as field, i}",
    		ctx
    	});

    	return block;
    }

    // (24:6) {#each manufacture.randomProducedItems as chance}
    function create_each_block_2$4(ctx) {
    	let show_if = Object.keys(/*chance*/ ctx[7][1]).length == 0;
    	let t0;
    	let t1;
    	let tr;
    	let td;
    	let t2;
    	let t3_value = /*chance*/ ctx[7][0] + "";
    	let t3;
    	let t4;
    	let t5_value = (/*chance*/ ctx[7][0] / /*manufacture*/ ctx[0].chanceSum * 100).toFixed(3) + "";
    	let t5;
    	let t6;
    	let current;
    	let if_block = show_if && create_if_block_4$2(ctx);
    	let each_value_3 = Object.keys(/*chance*/ ctx[7][1]).sort();
    	let each_blocks = [];

    	for (let i = 0; i < each_value_3.length; i += 1) {
    		each_blocks[i] = create_each_block_3$2(get_each_context_3$2(ctx, each_value_3, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			if (if_block) if_block.c();
    			t0 = space();

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			t1 = space();
    			tr = element("tr");
    			td = element("td");
    			t2 = text("×");
    			t3 = text(t3_value);
    			t4 = text(" / ");
    			t5 = text(t5_value);
    			t6 = text("%");
    			attr_dev(td, "colspan", "2");
    			set_style(td, "text-align", "center");
    			set_style(td, "border-bottom", "solid 0.3px #382C44");
    			add_location(td, file$f, 30, 12, 966);
    			add_location(tr, file$f, 30, 8, 962);
    		},
    		m: function mount(target, anchor) {
    			if (if_block) if_block.m(target, anchor);
    			insert_dev(target, t0, anchor);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(target, anchor);
    			}

    			insert_dev(target, t1, anchor);
    			insert_dev(target, tr, anchor);
    			append_dev(tr, td);
    			append_dev(td, t2);
    			append_dev(td, t3);
    			append_dev(td, t4);
    			append_dev(td, t5);
    			append_dev(td, t6);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*manufacture*/ 1) show_if = Object.keys(/*chance*/ ctx[7][1]).length == 0;

    			if (show_if) {
    				if (!if_block) {
    					if_block = create_if_block_4$2(ctx);
    					if_block.c();
    					if_block.m(t0.parentNode, t0);
    				}
    			} else if (if_block) {
    				if_block.d(1);
    				if_block = null;
    			}

    			if (dirty & /*Object, manufacture*/ 1) {
    				each_value_3 = Object.keys(/*chance*/ ctx[7][1]).sort();
    				let i;

    				for (i = 0; i < each_value_3.length; i += 1) {
    					const child_ctx = get_each_context_3$2(ctx, each_value_3, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block_3$2(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(t1.parentNode, t1);
    					}
    				}

    				group_outros();

    				for (i = each_value_3.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}

    				check_outros();
    			}

    			if ((!current || dirty & /*manufacture*/ 1) && t3_value !== (t3_value = /*chance*/ ctx[7][0] + "")) set_data_dev(t3, t3_value);
    			if ((!current || dirty & /*manufacture*/ 1) && t5_value !== (t5_value = (/*chance*/ ctx[7][0] / /*manufacture*/ ctx[0].chanceSum * 100).toFixed(3) + "")) set_data_dev(t5, t5_value);
    		},
    		i: function intro(local) {
    			if (current) return;

    			for (let i = 0; i < each_value_3.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},
    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (if_block) if_block.d(detaching);
    			if (detaching) detach_dev(t0);
    			destroy_each(each_blocks, detaching);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(tr);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block_2$4.name,
    		type: "each",
    		source: "(24:6) {#each manufacture.randomProducedItems as chance}",
    		ctx
    	});

    	return block;
    }

    // (40:4) {#if !['name', 'randomProducedItems'].includes(prop[0])}
    function create_if_block$c(ctx) {
    	let tr;
    	let td0;
    	let raw_value = rul.decamelize(/*prop*/ ctx[1][0]) + "";
    	let t0;
    	let td1;
    	let show_if;
    	let show_if_1;
    	let current_block_type_index;
    	let if_block;
    	let t1;
    	let current;
    	const if_block_creators = [create_if_block_1$9, create_if_block_2$9, create_else_block$7];
    	const if_blocks = [];

    	function select_block_type(ctx, dirty) {
    		if (dirty & /*manufacture*/ 1) show_if = !!["requiresBaseFunc"].includes(/*prop*/ ctx[1][0]);
    		if (show_if) return 0;
    		if (dirty & /*manufacture*/ 1) show_if_1 = !!["producedItems", "requiredItems"].includes(/*prop*/ ctx[1][0]);
    		if (show_if_1) return 1;
    		return 2;
    	}

    	current_block_type_index = select_block_type(ctx, -1);
    	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

    	const block = {
    		c: function create() {
    			tr = element("tr");
    			td0 = element("td");
    			t0 = space();
    			td1 = element("td");
    			if_block.c();
    			t1 = space();
    			attr_dev(td0, "class", "padding-right");
    			add_location(td0, file$f, 41, 8, 1356);
    			add_location(td1, file$f, 44, 8, 1450);
    			add_location(tr, file$f, 40, 6, 1342);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, tr, anchor);
    			append_dev(tr, td0);
    			td0.innerHTML = raw_value;
    			append_dev(tr, t0);
    			append_dev(tr, td1);
    			if_blocks[current_block_type_index].m(td1, null);
    			append_dev(tr, t1);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if ((!current || dirty & /*manufacture*/ 1) && raw_value !== (raw_value = rul.decamelize(/*prop*/ ctx[1][0]) + "")) td0.innerHTML = raw_value;			let previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type(ctx, dirty);

    			if (current_block_type_index === previous_block_index) {
    				if_blocks[current_block_type_index].p(ctx, dirty);
    			} else {
    				group_outros();

    				transition_out(if_blocks[previous_block_index], 1, 1, () => {
    					if_blocks[previous_block_index] = null;
    				});

    				check_outros();
    				if_block = if_blocks[current_block_type_index];

    				if (!if_block) {
    					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    					if_block.c();
    				}

    				transition_in(if_block, 1);
    				if_block.m(td1, null);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(tr);
    			if_blocks[current_block_type_index].d();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$c.name,
    		type: "if",
    		source: "(40:4) {#if !['name', 'randomProducedItems'].includes(prop[0])}",
    		ctx
    	});

    	return block;
    }

    // (54:10) {:else}
    function create_else_block$7(ctx) {
    	let current;

    	const value = new Value({
    			props: { val: /*prop*/ ctx[1][1] },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(value.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(value, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const value_changes = {};
    			if (dirty & /*manufacture*/ 1) value_changes.val = /*prop*/ ctx[1][1];
    			value.$set(value_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(value.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(value.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(value, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block$7.name,
    		type: "else",
    		source: "(54:10) {:else}",
    		ctx
    	});

    	return block;
    }

    // (48:73) 
    function create_if_block_2$9(ctx) {
    	let table;
    	let current;
    	let each_value_1 = Object.keys(/*prop*/ ctx[1][1]).sort();
    	let each_blocks = [];

    	for (let i = 0; i < each_value_1.length; i += 1) {
    		each_blocks[i] = create_each_block_1$4(get_each_context_1$4(ctx, each_value_1, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			table = element("table");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			attr_dev(table, "class", "number-table");
    			add_location(table, file$f, 48, 12, 1664);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, table, anchor);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(table, null);
    			}

    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*Object, manufacture*/ 1) {
    				each_value_1 = Object.keys(/*prop*/ ctx[1][1]).sort();
    				let i;

    				for (i = 0; i < each_value_1.length; i += 1) {
    					const child_ctx = get_each_context_1$4(ctx, each_value_1, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block_1$4(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(table, null);
    					}
    				}

    				group_outros();

    				for (i = each_value_1.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;

    			for (let i = 0; i < each_value_1.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},
    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(table);
    			destroy_each(each_blocks, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_2$9.name,
    		type: "if",
    		source: "(48:73) ",
    		ctx
    	});

    	return block;
    }

    // (46:10) {#if ['requiresBaseFunc' ].includes(prop[0])}
    function create_if_block_1$9(ctx) {
    	let current;

    	const baseservicelist = new BaseServiceList({
    			props: {
    				items: /*prop*/ ctx[1][1],
    				vertical: true
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(baseservicelist.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(baseservicelist, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const baseservicelist_changes = {};
    			if (dirty & /*manufacture*/ 1) baseservicelist_changes.items = /*prop*/ ctx[1][1];
    			baseservicelist.$set(baseservicelist_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(baseservicelist.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(baseservicelist.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(baseservicelist, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_1$9.name,
    		type: "if",
    		source: "(46:10) {#if ['requiresBaseFunc' ].includes(prop[0])}",
    		ctx
    	});

    	return block;
    }

    // (50:12) {#each Object.keys(prop[1]).sort() as field, i}
    function create_each_block_1$4(ctx) {
    	let tr;
    	let td0;
    	let t_value = /*prop*/ ctx[1][1][/*field*/ ctx[4]] + "";
    	let t;
    	let td1;
    	let current;

    	const link = new Link({
    			props: { href: /*field*/ ctx[4] },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			tr = element("tr");
    			td0 = element("td");
    			t = text(t_value);
    			td1 = element("td");
    			create_component(link.$$.fragment);
    			add_location(td0, file$f, 50, 18, 1773);
    			add_location(td1, file$f, 50, 43, 1798);
    			add_location(tr, file$f, 50, 14, 1769);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, tr, anchor);
    			append_dev(tr, td0);
    			append_dev(td0, t);
    			append_dev(tr, td1);
    			mount_component(link, td1, null);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if ((!current || dirty & /*manufacture*/ 1) && t_value !== (t_value = /*prop*/ ctx[1][1][/*field*/ ctx[4]] + "")) set_data_dev(t, t_value);
    			const link_changes = {};
    			if (dirty & /*manufacture*/ 1) link_changes.href = /*field*/ ctx[4];
    			link.$set(link_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(link.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(link.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(tr);
    			destroy_component(link);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block_1$4.name,
    		type: "each",
    		source: "(50:12) {#each Object.keys(prop[1]).sort() as field, i}",
    		ctx
    	});

    	return block;
    }

    // (37:2) {#each Object.entries(manufacture).sort((a, b) =>      a[0] > b[0] ? 1 : -1    ) as prop}
    function create_each_block$c(ctx) {
    	let show_if = !["name", "randomProducedItems"].includes(/*prop*/ ctx[1][0]);
    	let if_block_anchor;
    	let current;
    	let if_block = show_if && create_if_block$c(ctx);

    	const block = {
    		c: function create() {
    			if (if_block) if_block.c();
    			if_block_anchor = empty();
    		},
    		m: function mount(target, anchor) {
    			if (if_block) if_block.m(target, anchor);
    			insert_dev(target, if_block_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*manufacture*/ 1) show_if = !["name", "randomProducedItems"].includes(/*prop*/ ctx[1][0]);

    			if (show_if) {
    				if (if_block) {
    					if_block.p(ctx, dirty);
    					transition_in(if_block, 1);
    				} else {
    					if_block = create_if_block$c(ctx);
    					if_block.c();
    					transition_in(if_block, 1);
    					if_block.m(if_block_anchor.parentNode, if_block_anchor);
    				}
    			} else if (if_block) {
    				group_outros();

    				transition_out(if_block, 1, 1, () => {
    					if_block = null;
    				});

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (if_block) if_block.d(detaching);
    			if (detaching) detach_dev(if_block_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block$c.name,
    		type: "each",
    		source: "(37:2) {#each Object.entries(manufacture).sort((a, b) =>      a[0] > b[0] ? 1 : -1    ) as prop}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$h(ctx) {
    	let tr;
    	let td;
    	let t1;
    	let t2;
    	let each_1_anchor;
    	let current;
    	let if_block = "randomProducedItems" in /*manufacture*/ ctx[0] && create_if_block_3$6(ctx);
    	let each_value = Object.entries(/*manufacture*/ ctx[0]).sort(func$4);
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block$c(get_each_context$c(ctx, each_value, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			tr = element("tr");
    			td = element("td");
    			td.textContent = `${rul.str("Manufacture")}`;
    			t1 = space();
    			if (if_block) if_block.c();
    			t2 = space();

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			each_1_anchor = empty();
    			attr_dev(td, "colspan", "2");
    			attr_dev(td, "class", "table-header");
    			add_location(td, file$f, 16, 4, 285);
    			add_location(tr, file$f, 15, 2, 275);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, tr, anchor);
    			append_dev(tr, td);
    			insert_dev(target, t1, anchor);
    			if (if_block) if_block.m(target, anchor);
    			insert_dev(target, t2, anchor);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(target, anchor);
    			}

    			insert_dev(target, each_1_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if ("randomProducedItems" in /*manufacture*/ ctx[0]) {
    				if (if_block) {
    					if_block.p(ctx, dirty);
    					transition_in(if_block, 1);
    				} else {
    					if_block = create_if_block_3$6(ctx);
    					if_block.c();
    					transition_in(if_block, 1);
    					if_block.m(t2.parentNode, t2);
    				}
    			} else if (if_block) {
    				group_outros();

    				transition_out(if_block, 1, 1, () => {
    					if_block = null;
    				});

    				check_outros();
    			}

    			if (dirty & /*Object, manufacture, rul*/ 1) {
    				each_value = Object.entries(/*manufacture*/ ctx[0]).sort(func$4);
    				let i;

    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context$c(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block$c(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
    					}
    				}

    				group_outros();

    				for (i = each_value.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block);

    			for (let i = 0; i < each_value.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block);
    			each_blocks = each_blocks.filter(Boolean);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(tr);
    			if (detaching) detach_dev(t1);
    			if (if_block) if_block.d(detaching);
    			if (detaching) detach_dev(t2);
    			destroy_each(each_blocks, detaching);
    			if (detaching) detach_dev(each_1_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$h.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    const func$4 = (a, b) => a[0] > b[0] ? 1 : -1;

    function instance$g($$self, $$props, $$invalidate) {
    	let { manufacture } = $$props;
    	const writable_props = ["manufacture"];

    	Object_1$9.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1$8.warn(`<Manufacture> was created with unknown prop '${key}'`);
    	});

    	$$self.$set = $$props => {
    		if ("manufacture" in $$props) $$invalidate(0, manufacture = $$props.manufacture);
    	};

    	$$self.$capture_state = () => {
    		return { manufacture };
    	};

    	$$self.$inject_state = $$props => {
    		if ("manufacture" in $$props) $$invalidate(0, manufacture = $$props.manufacture);
    	};

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty & /*manufacture*/ 1) {
    			$: {
    				console.log(manufacture);
    			}
    		}
    	};

    	return [manufacture];
    }

    class Manufacture$1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$g, create_fragment$h, safe_not_equal, { manufacture: 0 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Manufacture",
    			options,
    			id: create_fragment$h.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || ({});

    		if (/*manufacture*/ ctx[0] === undefined && !("manufacture" in props)) {
    			console_1$8.warn("<Manufacture> was created without expected prop 'manufacture'");
    		}
    	}

    	get manufacture() {
    		throw new Error("<Manufacture>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set manufacture(value) {
    		throw new Error("<Manufacture>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\Conditions.svelte generated by Svelte v3.16.7 */

    function create_fragment$i(ctx) {
    	let t0;
    	let t1;
    	let t2;
    	let t3;
    	let current;

    	const linkspage0 = new LinksPage({
    			props: {
    				links: /*conditions*/ ctx[0].allowedCraft,
    				title: rul.str("Allowed Craft")
    			},
    			$$inline: true
    		});

    	const linkspage1 = new LinksPage({
    			props: {
    				links: /*conditions*/ ctx[0].allowedItemCategories,
    				title: rul.str("Allowed Item Categories")
    			},
    			$$inline: true
    		});

    	const linkspage2 = new LinksPage({
    			props: {
    				links: /*conditions*/ ctx[0].allowedArmors,
    				title: rul.str("Allowed Armors")
    			},
    			$$inline: true
    		});

    	const linkspage3 = new LinksPage({
    			props: {
    				links: /*conditions*/ ctx[0].allowedVehicles,
    				title: rul.str("Allowed Vehicles")
    			},
    			$$inline: true
    		});

    	const linkspage4 = new LinksPage({
    			props: {
    				links: /*conditions*/ ctx[0].deployments,
    				title: rul.str("Deployments")
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(linkspage0.$$.fragment);
    			t0 = space();
    			create_component(linkspage1.$$.fragment);
    			t1 = space();
    			create_component(linkspage2.$$.fragment);
    			t2 = space();
    			create_component(linkspage3.$$.fragment);
    			t3 = space();
    			create_component(linkspage4.$$.fragment);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			mount_component(linkspage0, target, anchor);
    			insert_dev(target, t0, anchor);
    			mount_component(linkspage1, target, anchor);
    			insert_dev(target, t1, anchor);
    			mount_component(linkspage2, target, anchor);
    			insert_dev(target, t2, anchor);
    			mount_component(linkspage3, target, anchor);
    			insert_dev(target, t3, anchor);
    			mount_component(linkspage4, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			const linkspage0_changes = {};
    			if (dirty & /*conditions*/ 1) linkspage0_changes.links = /*conditions*/ ctx[0].allowedCraft;
    			linkspage0.$set(linkspage0_changes);
    			const linkspage1_changes = {};
    			if (dirty & /*conditions*/ 1) linkspage1_changes.links = /*conditions*/ ctx[0].allowedItemCategories;
    			linkspage1.$set(linkspage1_changes);
    			const linkspage2_changes = {};
    			if (dirty & /*conditions*/ 1) linkspage2_changes.links = /*conditions*/ ctx[0].allowedArmors;
    			linkspage2.$set(linkspage2_changes);
    			const linkspage3_changes = {};
    			if (dirty & /*conditions*/ 1) linkspage3_changes.links = /*conditions*/ ctx[0].allowedVehicles;
    			linkspage3.$set(linkspage3_changes);
    			const linkspage4_changes = {};
    			if (dirty & /*conditions*/ 1) linkspage4_changes.links = /*conditions*/ ctx[0].deployments;
    			linkspage4.$set(linkspage4_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(linkspage0.$$.fragment, local);
    			transition_in(linkspage1.$$.fragment, local);
    			transition_in(linkspage2.$$.fragment, local);
    			transition_in(linkspage3.$$.fragment, local);
    			transition_in(linkspage4.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(linkspage0.$$.fragment, local);
    			transition_out(linkspage1.$$.fragment, local);
    			transition_out(linkspage2.$$.fragment, local);
    			transition_out(linkspage3.$$.fragment, local);
    			transition_out(linkspage4.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(linkspage0, detaching);
    			if (detaching) detach_dev(t0);
    			destroy_component(linkspage1, detaching);
    			if (detaching) detach_dev(t1);
    			destroy_component(linkspage2, detaching);
    			if (detaching) detach_dev(t2);
    			destroy_component(linkspage3, detaching);
    			if (detaching) detach_dev(t3);
    			destroy_component(linkspage4, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$i.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$h($$self, $$props, $$invalidate) {
    	let { conditions } = $$props;
    	const writable_props = ["conditions"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Conditions> was created with unknown prop '${key}'`);
    	});

    	$$self.$set = $$props => {
    		if ("conditions" in $$props) $$invalidate(0, conditions = $$props.conditions);
    	};

    	$$self.$capture_state = () => {
    		return { conditions };
    	};

    	$$self.$inject_state = $$props => {
    		if ("conditions" in $$props) $$invalidate(0, conditions = $$props.conditions);
    	};

    	return [conditions];
    }

    class Conditions extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$h, create_fragment$i, safe_not_equal, { conditions: 0 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Conditions",
    			options,
    			id: create_fragment$i.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || ({});

    		if (/*conditions*/ ctx[0] === undefined && !("conditions" in props)) {
    			console.warn("<Conditions> was created without expected prop 'conditions'");
    		}
    	}

    	get conditions() {
    		throw new Error("<Conditions>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set conditions(value) {
    		throw new Error("<Conditions>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\Ufo.svelte generated by Svelte v3.16.7 */

    const { Object: Object_1$a, console: console_1$9 } = globals;
    const file$g = "src\\Ufo.svelte";

    function get_each_context_2$5(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[8] = list[i];
    	child_ctx[10] = i;
    	return child_ctx;
    }

    function get_each_context_1$5(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[5] = list[i];
    	child_ctx[7] = i;
    	return child_ctx;
    }

    function get_each_context$d(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[1] = list[i][0];
    	child_ctx[2] = list[i][1];
    	return child_ctx;
    }

    // (16:4) {#if !['type', 'battlescapeTerrainData', 'craftInventoryTile', 'deployment'].includes(key)}
    function create_if_block$d(ctx) {
    	let tr;
    	let td0;
    	let raw_value = rul.decamelize(/*key*/ ctx[1]) + "";
    	let t0;
    	let td1;
    	let show_if;
    	let current_block_type_index;
    	let if_block;
    	let t1;
    	let current;
    	const if_block_creators = [create_if_block_1$a, create_if_block_2$a, create_else_block$8];
    	const if_blocks = [];

    	function select_block_type(ctx, dirty) {
    		if (dirty & /*ufo*/ 1) show_if = !!["modSprite"].includes(/*key*/ ctx[1]);
    		if (show_if) return 0;
    		if (/*key*/ ctx[1] == "raceBonus") return 1;
    		return 2;
    	}

    	current_block_type_index = select_block_type(ctx, -1);
    	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

    	const block = {
    		c: function create() {
    			tr = element("tr");
    			td0 = element("td");
    			t0 = space();
    			td1 = element("td");
    			if_block.c();
    			t1 = space();
    			attr_dev(td0, "class", "padding-right");
    			add_location(td0, file$g, 17, 8, 514);
    			add_location(td1, file$g, 18, 8, 582);
    			add_location(tr, file$g, 16, 6, 500);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, tr, anchor);
    			append_dev(tr, td0);
    			td0.innerHTML = raw_value;
    			append_dev(tr, t0);
    			append_dev(tr, td1);
    			if_blocks[current_block_type_index].m(td1, null);
    			append_dev(tr, t1);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if ((!current || dirty & /*ufo*/ 1) && raw_value !== (raw_value = rul.decamelize(/*key*/ ctx[1]) + "")) td0.innerHTML = raw_value;			let previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type(ctx, dirty);

    			if (current_block_type_index === previous_block_index) {
    				if_blocks[current_block_type_index].p(ctx, dirty);
    			} else {
    				group_outros();

    				transition_out(if_blocks[previous_block_index], 1, 1, () => {
    					if_blocks[previous_block_index] = null;
    				});

    				check_outros();
    				if_block = if_blocks[current_block_type_index];

    				if (!if_block) {
    					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    					if_block.c();
    				}

    				transition_in(if_block, 1);
    				if_block.m(td1, null);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(tr);
    			if_blocks[current_block_type_index].d();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$d.name,
    		type: "if",
    		source: "(16:4) {#if !['type', 'battlescapeTerrainData', 'craftInventoryTile', 'deployment'].includes(key)}",
    		ctx
    	});

    	return block;
    }

    // (32:10) {:else}
    function create_else_block$8(ctx) {
    	let current;

    	const value = new Value({
    			props: { val: /*prop*/ ctx[2] },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(value.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(value, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const value_changes = {};
    			if (dirty & /*ufo*/ 1) value_changes.val = /*prop*/ ctx[2];
    			value.$set(value_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(value.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(value.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(value, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block$8.name,
    		type: "else",
    		source: "(32:10) {:else}",
    		ctx
    	});

    	return block;
    }

    // (22:39) 
    function create_if_block_2$a(ctx) {
    	let table;
    	let current;
    	let each_value_1 = Object.keys(/*prop*/ ctx[2]).sort();
    	let each_blocks = [];

    	for (let i = 0; i < each_value_1.length; i += 1) {
    		each_blocks[i] = create_each_block_1$5(get_each_context_1$5(ctx, each_value_1, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			table = element("table");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			attr_dev(table, "class", "number-table");
    			add_location(table, file$g, 22, 12, 805);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, table, anchor);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(table, null);
    			}

    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*Object, ufo, rul*/ 1) {
    				each_value_1 = Object.keys(/*prop*/ ctx[2]).sort();
    				let i;

    				for (i = 0; i < each_value_1.length; i += 1) {
    					const child_ctx = get_each_context_1$5(ctx, each_value_1, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block_1$5(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(table, null);
    					}
    				}

    				group_outros();

    				for (i = each_value_1.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;

    			for (let i = 0; i < each_value_1.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},
    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(table);
    			destroy_each(each_blocks, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_2$a.name,
    		type: "if",
    		source: "(22:39) ",
    		ctx
    	});

    	return block;
    }

    // (20:10) {#if ['modSprite'].includes(key)}
    function create_if_block_1$a(ctx) {
    	let img;
    	let img_src_value;

    	const block = {
    		c: function create() {
    			img = element("img");
    			attr_dev(img, "class", "sprite");
    			attr_dev(img, "alt", "X");
    			if (img.src !== (img_src_value = rul.sprite(/*prop*/ ctx[2]))) attr_dev(img, "src", img_src_value);
    			attr_dev(img, "onerror", "this.onerror=null; this.src='xpedia/0.jpg'");
    			add_location(img, file$g, 20, 12, 645);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, img, anchor);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*ufo*/ 1 && img.src !== (img_src_value = rul.sprite(/*prop*/ ctx[2]))) {
    				attr_dev(img, "src", img_src_value);
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(img);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_1$a.name,
    		type: "if",
    		source: "(20:10) {#if ['modSprite'].includes(key)}",
    		ctx
    	});

    	return block;
    }

    // (26:16) {#each Object.keys(prop[field]).sort() as field2, i2}
    function create_each_block_2$5(ctx) {
    	let t0_value = rul.decamelize(/*field2*/ ctx[8]) + "";
    	let t0;
    	let t1;
    	let em;
    	let br;
    	let current;

    	const link = new Link({
    			props: {
    				href: /*prop*/ ctx[2][/*field*/ ctx[5]][/*field2*/ ctx[8]]
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			t0 = text(t0_value);
    			t1 = text(": ");
    			em = element("em");
    			create_component(link.$$.fragment);
    			br = element("br");
    			add_location(em, file$g, 26, 49, 1062);
    			add_location(br, file$g, 26, 92, 1105);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t0, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, em, anchor);
    			mount_component(link, em, null);
    			insert_dev(target, br, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if ((!current || dirty & /*ufo*/ 1) && t0_value !== (t0_value = rul.decamelize(/*field2*/ ctx[8]) + "")) set_data_dev(t0, t0_value);
    			const link_changes = {};
    			if (dirty & /*ufo*/ 1) link_changes.href = /*prop*/ ctx[2][/*field*/ ctx[5]][/*field2*/ ctx[8]];
    			link.$set(link_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(link.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(link.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t0);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(em);
    			destroy_component(link);
    			if (detaching) detach_dev(br);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block_2$5.name,
    		type: "each",
    		source: "(26:16) {#each Object.keys(prop[field]).sort() as field2, i2}",
    		ctx
    	});

    	return block;
    }

    // (24:12) {#each Object.keys(prop).sort() as field, i}
    function create_each_block_1$5(ctx) {
    	let tr;
    	let td0;
    	let t0_value = rul.str(/*field*/ ctx[5]) + "";
    	let t0;
    	let td1;
    	let t1;
    	let current;
    	let each_value_2 = Object.keys(/*prop*/ ctx[2][/*field*/ ctx[5]]).sort();
    	let each_blocks = [];

    	for (let i = 0; i < each_value_2.length; i += 1) {
    		each_blocks[i] = create_each_block_2$5(get_each_context_2$5(ctx, each_value_2, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			tr = element("tr");
    			td0 = element("td");
    			t0 = text(t0_value);
    			td1 = element("td");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			t1 = space();
    			add_location(td0, file$g, 24, 18, 911);
    			add_location(td1, file$g, 24, 43, 936);
    			add_location(tr, file$g, 24, 14, 907);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, tr, anchor);
    			append_dev(tr, td0);
    			append_dev(td0, t0);
    			append_dev(tr, td1);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(td1, null);
    			}

    			append_dev(td1, t1);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if ((!current || dirty & /*ufo*/ 1) && t0_value !== (t0_value = rul.str(/*field*/ ctx[5]) + "")) set_data_dev(t0, t0_value);

    			if (dirty & /*Object, ufo, rul*/ 1) {
    				each_value_2 = Object.keys(/*prop*/ ctx[2][/*field*/ ctx[5]]).sort();
    				let i;

    				for (i = 0; i < each_value_2.length; i += 1) {
    					const child_ctx = get_each_context_2$5(ctx, each_value_2, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block_2$5(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(td1, t1);
    					}
    				}

    				group_outros();

    				for (i = each_value_2.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;

    			for (let i = 0; i < each_value_2.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},
    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(tr);
    			destroy_each(each_blocks, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block_1$5.name,
    		type: "each",
    		source: "(24:12) {#each Object.keys(prop).sort() as field, i}",
    		ctx
    	});

    	return block;
    }

    // (15:2) {#each Object.entries(ufo).sort((a, b) => (a[0] > b[0] ? 1 : -1)) as [key, prop]}
    function create_each_block$d(ctx) {
    	let show_if = !["type", "battlescapeTerrainData", "craftInventoryTile", "deployment"].includes(/*key*/ ctx[1]);
    	let if_block_anchor;
    	let current;
    	let if_block = show_if && create_if_block$d(ctx);

    	const block = {
    		c: function create() {
    			if (if_block) if_block.c();
    			if_block_anchor = empty();
    		},
    		m: function mount(target, anchor) {
    			if (if_block) if_block.m(target, anchor);
    			insert_dev(target, if_block_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*ufo*/ 1) show_if = !["type", "battlescapeTerrainData", "craftInventoryTile", "deployment"].includes(/*key*/ ctx[1]);

    			if (show_if) {
    				if (if_block) {
    					if_block.p(ctx, dirty);
    					transition_in(if_block, 1);
    				} else {
    					if_block = create_if_block$d(ctx);
    					if_block.c();
    					transition_in(if_block, 1);
    					if_block.m(if_block_anchor.parentNode, if_block_anchor);
    				}
    			} else if (if_block) {
    				group_outros();

    				transition_out(if_block, 1, 1, () => {
    					if_block = null;
    				});

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (if_block) if_block.d(detaching);
    			if (detaching) detach_dev(if_block_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block$d.name,
    		type: "each",
    		source: "(15:2) {#each Object.entries(ufo).sort((a, b) => (a[0] > b[0] ? 1 : -1)) as [key, prop]}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$j(ctx) {
    	let table;
    	let tr;
    	let td;
    	let t1;
    	let current;
    	let each_value = Object.entries(/*ufo*/ ctx[0]).sort(func$5);
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block$d(get_each_context$d(ctx, each_value, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			table = element("table");
    			tr = element("tr");
    			td = element("td");
    			td.textContent = "Craft";
    			t1 = space();

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			attr_dev(td, "colspan", "2");
    			attr_dev(td, "class", "table-header");
    			add_location(td, file$g, 13, 7, 257);
    			add_location(tr, file$g, 13, 2, 252);
    			attr_dev(table, "class", "main-table");
    			add_location(table, file$g, 12, 0, 222);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, table, anchor);
    			append_dev(table, tr);
    			append_dev(tr, td);
    			append_dev(table, t1);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(table, null);
    			}

    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*Object, ufo, rul*/ 1) {
    				each_value = Object.entries(/*ufo*/ ctx[0]).sort(func$5);
    				let i;

    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context$d(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block$d(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(table, null);
    					}
    				}

    				group_outros();

    				for (i = each_value.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;

    			for (let i = 0; i < each_value.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},
    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(table);
    			destroy_each(each_blocks, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$j.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    const func$5 = (a, b) => a[0] > b[0] ? 1 : -1;

    function instance$i($$self, $$props, $$invalidate) {
    	let { ufo } = $$props;
    	const writable_props = ["ufo"];

    	Object_1$a.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1$9.warn(`<Ufo> was created with unknown prop '${key}'`);
    	});

    	$$self.$set = $$props => {
    		if ("ufo" in $$props) $$invalidate(0, ufo = $$props.ufo);
    	};

    	$$self.$capture_state = () => {
    		return { ufo };
    	};

    	$$self.$inject_state = $$props => {
    		if ("ufo" in $$props) $$invalidate(0, ufo = $$props.ufo);
    	};

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty & /*ufo*/ 1) {
    			$: {
    				console.info(ufo);
    			}
    		}
    	};

    	return [ufo];
    }

    class Ufo$1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$i, create_fragment$j, safe_not_equal, { ufo: 0 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Ufo",
    			options,
    			id: create_fragment$j.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || ({});

    		if (/*ufo*/ ctx[0] === undefined && !("ufo" in props)) {
    			console_1$9.warn("<Ufo> was created without expected prop 'ufo'");
    		}
    	}

    	get ufo() {
    		throw new Error("<Ufo>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set ufo(value) {
    		throw new Error("<Ufo>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\Facility.svelte generated by Svelte v3.16.7 */

    const { Object: Object_1$b, console: console_1$a } = globals;
    const file$h = "src\\Facility.svelte";

    function get_each_context_3$3(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[11] = list[i];
    	child_ctx[15] = i;
    	return child_ctx;
    }

    function get_each_context_2$6(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[11] = list[i];
    	child_ctx[13] = i;
    	return child_ctx;
    }

    function get_each_context_1$6(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[8] = list[i];
    	child_ctx[10] = i;
    	return child_ctx;
    }

    function get_each_context$e(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[4] = list[i][0];
    	child_ctx[5] = list[i][1];
    	return child_ctx;
    }

    // (33:4) {#if !['type', 'battlescapeTerrainData', 'craftInventoryTile', 'deployment'].includes(key)}
    function create_if_block$e(ctx) {
    	let tr;
    	let td0;
    	let raw_value = rul.decamelize(/*key*/ ctx[4]) + "";
    	let t0;
    	let td1;
    	let show_if;
    	let show_if_1;
    	let show_if_2;
    	let show_if_3;
    	let current_block_type_index;
    	let if_block;
    	let t1;
    	let current;

    	const if_block_creators = [
    		create_if_block_1$b,
    		create_if_block_3$7,
    		create_if_block_5$2,
    		create_if_block_6$2,
    		create_else_block$9
    	];

    	const if_blocks = [];

    	function select_block_type(ctx, dirty) {
    		if (dirty & /*facility*/ 1) show_if = !!["buildCostItems"].includes(/*key*/ ctx[4]);
    		if (show_if) return 0;
    		if (dirty & /*facility*/ 1) show_if_1 = !!["storageTiles"].includes(/*key*/ ctx[4]);
    		if (show_if_1) return 1;
    		if (dirty & /*facility*/ 1) show_if_2 = !!["provideBaseFunc", "requiresBaseFunc", "forbiddenBaseFunc"].includes(/*key*/ ctx[4]);
    		if (show_if_2) return 2;
    		if (dirty & /*facility*/ 1) show_if_3 = !!["spriteFacility", "spriteShape"].includes(/*key*/ ctx[4]);
    		if (show_if_3) return 3;
    		return 4;
    	}

    	current_block_type_index = select_block_type(ctx, -1);
    	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

    	const block = {
    		c: function create() {
    			tr = element("tr");
    			td0 = element("td");
    			t0 = space();
    			td1 = element("td");
    			if_block.c();
    			t1 = space();
    			attr_dev(td0, "class", "padding-right");
    			add_location(td0, file$h, 34, 8, 863);
    			add_location(td1, file$h, 37, 8, 953);
    			add_location(tr, file$h, 33, 6, 849);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, tr, anchor);
    			append_dev(tr, td0);
    			td0.innerHTML = raw_value;
    			append_dev(tr, t0);
    			append_dev(tr, td1);
    			if_blocks[current_block_type_index].m(td1, null);
    			append_dev(tr, t1);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if ((!current || dirty & /*facility*/ 1) && raw_value !== (raw_value = rul.decamelize(/*key*/ ctx[4]) + "")) td0.innerHTML = raw_value;			let previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type(ctx, dirty);

    			if (current_block_type_index === previous_block_index) {
    				if_blocks[current_block_type_index].p(ctx, dirty);
    			} else {
    				group_outros();

    				transition_out(if_blocks[previous_block_index], 1, 1, () => {
    					if_blocks[previous_block_index] = null;
    				});

    				check_outros();
    				if_block = if_blocks[current_block_type_index];

    				if (!if_block) {
    					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    					if_block.c();
    				}

    				transition_in(if_block, 1);
    				if_block.m(td1, null);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(tr);
    			if_blocks[current_block_type_index].d();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$e.name,
    		type: "if",
    		source: "(33:4) {#if !['type', 'battlescapeTerrainData', 'craftInventoryTile', 'deployment'].includes(key)}",
    		ctx
    	});

    	return block;
    }

    // (78:10) {:else}
    function create_else_block$9(ctx) {
    	let current;

    	const value = new Value({
    			props: { val: /*prop*/ ctx[5] },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(value.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(value, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const value_changes = {};
    			if (dirty & /*facility*/ 1) value_changes.val = /*prop*/ ctx[5];
    			value.$set(value_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(value.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(value.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(value, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block$9.name,
    		type: "else",
    		source: "(78:10) {:else}",
    		ctx
    	});

    	return block;
    }

    // (66:68) 
    function create_if_block_6$2(ctx) {
    	let div;
    	let each_value_2 = { length: /*size*/ ctx[2] };
    	let each_blocks = [];

    	for (let i = 0; i < each_value_2.length; i += 1) {
    		each_blocks[i] = create_each_block_2$6(get_each_context_2$6(ctx, each_value_2, i));
    	}

    	const block = {
    		c: function create() {
    			div = element("div");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			attr_dev(div, "class", "tight");
    			set_style(div, "columns", /*size*/ ctx[2]);
    			set_style(div, "width", 64 * /*size*/ ctx[2] + "px");
    			add_location(div, file$h, 66, 12, 2057);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(div, null);
    			}
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*size, rul, Object, facility*/ 5) {
    				each_value_2 = { length: /*size*/ ctx[2] };
    				let i;

    				for (i = 0; i < each_value_2.length; i += 1) {
    					const child_ctx = get_each_context_2$6(ctx, each_value_2, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    					} else {
    						each_blocks[i] = create_each_block_2$6(child_ctx);
    						each_blocks[i].c();
    						each_blocks[i].m(div, null);
    					}
    				}

    				for (; i < each_blocks.length; i += 1) {
    					each_blocks[i].d(1);
    				}

    				each_blocks.length = each_value_2.length;
    			}

    			if (dirty & /*size*/ 4) {
    				set_style(div, "columns", /*size*/ ctx[2]);
    			}

    			if (dirty & /*size*/ 4) {
    				set_style(div, "width", 64 * /*size*/ ctx[2] + "px");
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			destroy_each(each_blocks, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_6$2.name,
    		type: "if",
    		source: "(66:68) ",
    		ctx
    	});

    	return block;
    }

    // (64:95) 
    function create_if_block_5$2(ctx) {
    	let current;

    	const baseservicelist = new BaseServiceList({
    			props: { items: /*prop*/ ctx[5], vertical: true },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(baseservicelist.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(baseservicelist, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const baseservicelist_changes = {};
    			if (dirty & /*facility*/ 1) baseservicelist_changes.items = /*prop*/ ctx[5];
    			baseservicelist.$set(baseservicelist_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(baseservicelist.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(baseservicelist.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(baseservicelist, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_5$2.name,
    		type: "if",
    		source: "(64:95) ",
    		ctx
    	});

    	return block;
    }

    // (47:51) 
    function create_if_block_3$7(ctx) {
    	let div2;
    	let div0;
    	let button;
    	let t1;
    	let div1;
    	let current;
    	let dispose;
    	let if_block = /*seeStorageTiles*/ ctx[1] && create_if_block_4$3(ctx);

    	const block = {
    		c: function create() {
    			div2 = element("div");
    			div0 = element("div");
    			button = element("button");
    			button.textContent = "Expand";
    			t1 = space();
    			div1 = element("div");
    			if (if_block) if_block.c();
    			attr_dev(button, "class", "button");
    			add_location(button, file$h, 49, 16, 1367);
    			add_location(div0, file$h, 48, 14, 1344);
    			add_location(div1, file$h, 55, 14, 1572);
    			add_location(div2, file$h, 47, 12, 1323);
    			dispose = listen_dev(button, "click", /*click_handler*/ ctx[3], false, false, false);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div2, anchor);
    			append_dev(div2, div0);
    			append_dev(div0, button);
    			append_dev(div2, t1);
    			append_dev(div2, div1);
    			if (if_block) if_block.m(div1, null);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (/*seeStorageTiles*/ ctx[1]) {
    				if (if_block) {
    					if_block.p(ctx, dirty);
    					transition_in(if_block, 1);
    				} else {
    					if_block = create_if_block_4$3(ctx);
    					if_block.c();
    					transition_in(if_block, 1);
    					if_block.m(div1, null);
    				}
    			} else if (if_block) {
    				group_outros();

    				transition_out(if_block, 1, 1, () => {
    					if_block = null;
    				});

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div2);
    			if (if_block) if_block.d();
    			dispose();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_3$7.name,
    		type: "if",
    		source: "(47:51) ",
    		ctx
    	});

    	return block;
    }

    // (39:10) {#if ['buildCostItems'].includes(key)}
    function create_if_block_1$b(ctx) {
    	let each_1_anchor;
    	let current;
    	let each_value_1 = Object.keys(/*prop*/ ctx[5]).sort();
    	let each_blocks = [];

    	for (let i = 0; i < each_value_1.length; i += 1) {
    		each_blocks[i] = create_each_block_1$6(get_each_context_1$6(ctx, each_value_1, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			each_1_anchor = empty();
    		},
    		m: function mount(target, anchor) {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(target, anchor);
    			}

    			insert_dev(target, each_1_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*Object, facility*/ 1) {
    				each_value_1 = Object.keys(/*prop*/ ctx[5]).sort();
    				let i;

    				for (i = 0; i < each_value_1.length; i += 1) {
    					const child_ctx = get_each_context_1$6(ctx, each_value_1, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block_1$6(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
    					}
    				}

    				group_outros();

    				for (i = each_value_1.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;

    			for (let i = 0; i < each_value_1.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},
    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_each(each_blocks, detaching);
    			if (detaching) detach_dev(each_1_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_1$b.name,
    		type: "if",
    		source: "(39:10) {#if ['buildCostItems'].includes(key)}",
    		ctx
    	});

    	return block;
    }

    // (69:16) {#each { length: size } as _, x}
    function create_each_block_3$3(ctx) {
    	let img;
    	let img_src_value;

    	const block = {
    		c: function create() {
    			img = element("img");
    			attr_dev(img, "class", "facility sprite");
    			attr_dev(img, "onerror", "this.onerror=null; this.src='xpedia/0.jpg'");
    			attr_dev(img, "alt", "X");
    			if (img.src !== (img_src_value = rul.specialSprite("baseSprite", /*prop*/ ctx[5] * 1 + /*x*/ ctx[15] * /*size*/ ctx[2] + /*y*/ ctx[13]))) attr_dev(img, "src", img_src_value);
    			add_location(img, file$h, 69, 18, 2238);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, img, anchor);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*facility, size*/ 5 && img.src !== (img_src_value = rul.specialSprite("baseSprite", /*prop*/ ctx[5] * 1 + /*x*/ ctx[15] * /*size*/ ctx[2] + /*y*/ ctx[13]))) {
    				attr_dev(img, "src", img_src_value);
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(img);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block_3$3.name,
    		type: "each",
    		source: "(69:16) {#each { length: size } as _, x}",
    		ctx
    	});

    	return block;
    }

    // (68:14) {#each { length: size } as _, y}
    function create_each_block_2$6(ctx) {
    	let each_1_anchor;
    	let each_value_3 = { length: /*size*/ ctx[2] };
    	let each_blocks = [];

    	for (let i = 0; i < each_value_3.length; i += 1) {
    		each_blocks[i] = create_each_block_3$3(get_each_context_3$3(ctx, each_value_3, i));
    	}

    	const block = {
    		c: function create() {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			each_1_anchor = empty();
    		},
    		m: function mount(target, anchor) {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(target, anchor);
    			}

    			insert_dev(target, each_1_anchor, anchor);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*rul, Object, facility, size*/ 5) {
    				each_value_3 = { length: /*size*/ ctx[2] };
    				let i;

    				for (i = 0; i < each_value_3.length; i += 1) {
    					const child_ctx = get_each_context_3$3(ctx, each_value_3, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    					} else {
    						each_blocks[i] = create_each_block_3$3(child_ctx);
    						each_blocks[i].c();
    						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
    					}
    				}

    				for (; i < each_blocks.length; i += 1) {
    					each_blocks[i].d(1);
    				}

    				each_blocks.length = each_value_3.length;
    			}
    		},
    		d: function destroy(detaching) {
    			destroy_each(each_blocks, detaching);
    			if (detaching) detach_dev(each_1_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block_2$6.name,
    		type: "each",
    		source: "(68:14) {#each { length: size } as _, y}",
    		ctx
    	});

    	return block;
    }

    // (57:16) {#if seeStorageTiles}
    function create_if_block_4$3(ctx) {
    	let div;
    	let current;

    	const linkslist = new LinksList({
    			props: { items: /*prop*/ ctx[5], vertical: true },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			div = element("div");
    			create_component(linkslist.$$.fragment);
    			set_style(div, "columns", "6");
    			add_location(div, file$h, 57, 18, 1636);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			mount_component(linkslist, div, null);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const linkslist_changes = {};
    			if (dirty & /*facility*/ 1) linkslist_changes.items = /*prop*/ ctx[5];
    			linkslist.$set(linkslist_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(linkslist.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(linkslist.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			destroy_component(linkslist);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_4$3.name,
    		type: "if",
    		source: "(57:16) {#if seeStorageTiles}",
    		ctx
    	});

    	return block;
    }

    // (41:14) {#if i != 0}
    function create_if_block_2$b(ctx) {
    	let br;

    	const block = {
    		c: function create() {
    			br = element("br");
    			add_location(br, file$h, 41, 16, 1111);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, br, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(br);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_2$b.name,
    		type: "if",
    		source: "(41:14) {#if i != 0}",
    		ctx
    	});

    	return block;
    }

    // (40:12) {#each Object.keys(prop).sort() as field, i}
    function create_each_block_1$6(ctx) {
    	let t0;
    	let t1;
    	let t2_value = /*prop*/ ctx[5][/*field*/ ctx[8]].build + "";
    	let t2;
    	let t3;
    	let t4_value = /*prop*/ ctx[5][/*field*/ ctx[8]].refund + "";
    	let t4;
    	let current;
    	let if_block = /*i*/ ctx[10] != 0 && create_if_block_2$b(ctx);

    	const link = new Link({
    			props: { href: /*field*/ ctx[8] },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			if (if_block) if_block.c();
    			t0 = space();
    			create_component(link.$$.fragment);
    			t1 = text("\r\n              : ");
    			t2 = text(t2_value);
    			t3 = text(" / ");
    			t4 = text(t4_value);
    		},
    		m: function mount(target, anchor) {
    			if (if_block) if_block.m(target, anchor);
    			insert_dev(target, t0, anchor);
    			mount_component(link, target, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, t2, anchor);
    			insert_dev(target, t3, anchor);
    			insert_dev(target, t4, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const link_changes = {};
    			if (dirty & /*facility*/ 1) link_changes.href = /*field*/ ctx[8];
    			link.$set(link_changes);
    			if ((!current || dirty & /*facility*/ 1) && t2_value !== (t2_value = /*prop*/ ctx[5][/*field*/ ctx[8]].build + "")) set_data_dev(t2, t2_value);
    			if ((!current || dirty & /*facility*/ 1) && t4_value !== (t4_value = /*prop*/ ctx[5][/*field*/ ctx[8]].refund + "")) set_data_dev(t4, t4_value);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(link.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(link.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (if_block) if_block.d(detaching);
    			if (detaching) detach_dev(t0);
    			destroy_component(link, detaching);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(t2);
    			if (detaching) detach_dev(t3);
    			if (detaching) detach_dev(t4);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block_1$6.name,
    		type: "each",
    		source: "(40:12) {#each Object.keys(prop).sort() as field, i}",
    		ctx
    	});

    	return block;
    }

    // (30:2) {#each Object.entries(facility).sort((a, b) =>      a[0] > b[0] && a[0] != 'storageTiles' ? 1 : -1    ) as [key, prop]}
    function create_each_block$e(ctx) {
    	let show_if = !["type", "battlescapeTerrainData", "craftInventoryTile", "deployment"].includes(/*key*/ ctx[4]);
    	let if_block_anchor;
    	let current;
    	let if_block = show_if && create_if_block$e(ctx);

    	const block = {
    		c: function create() {
    			if (if_block) if_block.c();
    			if_block_anchor = empty();
    		},
    		m: function mount(target, anchor) {
    			if (if_block) if_block.m(target, anchor);
    			insert_dev(target, if_block_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*facility*/ 1) show_if = !["type", "battlescapeTerrainData", "craftInventoryTile", "deployment"].includes(/*key*/ ctx[4]);

    			if (show_if) {
    				if (if_block) {
    					if_block.p(ctx, dirty);
    					transition_in(if_block, 1);
    				} else {
    					if_block = create_if_block$e(ctx);
    					if_block.c();
    					transition_in(if_block, 1);
    					if_block.m(if_block_anchor.parentNode, if_block_anchor);
    				}
    			} else if (if_block) {
    				group_outros();

    				transition_out(if_block, 1, 1, () => {
    					if_block = null;
    				});

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (if_block) if_block.d(detaching);
    			if (detaching) detach_dev(if_block_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block$e.name,
    		type: "each",
    		source: "(30:2) {#each Object.entries(facility).sort((a, b) =>      a[0] > b[0] && a[0] != 'storageTiles' ? 1 : -1    ) as [key, prop]}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$k(ctx) {
    	let table;
    	let tr;
    	let td;
    	let t1;
    	let current;
    	let each_value = Object.entries(/*facility*/ ctx[0]).sort(func$6);
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block$e(get_each_context$e(ctx, each_value, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			table = element("table");
    			tr = element("tr");
    			td = element("td");
    			td.textContent = `${rul.str("Facility")}`;
    			t1 = space();

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			attr_dev(td, "colspan", "2");
    			attr_dev(td, "class", "table-header");
    			add_location(td, file$h, 27, 4, 549);
    			add_location(tr, file$h, 26, 2, 539);
    			attr_dev(table, "class", "main-table");
    			add_location(table, file$h, 25, 0, 509);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, table, anchor);
    			append_dev(table, tr);
    			append_dev(tr, td);
    			append_dev(table, t1);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(table, null);
    			}

    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*Object, facility, seeStorageTiles, size, rul*/ 7) {
    				each_value = Object.entries(/*facility*/ ctx[0]).sort(func$6);
    				let i;

    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context$e(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block$e(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(table, null);
    					}
    				}

    				group_outros();

    				for (i = each_value.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;

    			for (let i = 0; i < each_value.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},
    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(table);
    			destroy_each(each_blocks, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$k.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    const func$6 = (a, b) => a[0] > b[0] && a[0] != "storageTiles" ? 1 : -1;

    function instance$j($$self, $$props, $$invalidate) {
    	let { facility } = $$props;
    	let seeStorageTiles = false;
    	let size = 1;
    	const writable_props = ["facility"];

    	Object_1$b.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1$a.warn(`<Facility> was created with unknown prop '${key}'`);
    	});

    	const click_handler = e => $$invalidate(1, seeStorageTiles = !seeStorageTiles);

    	$$self.$set = $$props => {
    		if ("facility" in $$props) $$invalidate(0, facility = $$props.facility);
    	};

    	$$self.$capture_state = () => {
    		return { facility, seeStorageTiles, size };
    	};

    	$$self.$inject_state = $$props => {
    		if ("facility" in $$props) $$invalidate(0, facility = $$props.facility);
    		if ("seeStorageTiles" in $$props) $$invalidate(1, seeStorageTiles = $$props.seeStorageTiles);
    		if ("size" in $$props) $$invalidate(2, size = $$props.size);
    	};

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty & /*facility, size*/ 5) {
    			$: {
    				$$invalidate(2, size = facility.size || 1);
    				console.log(size);
    				console.info(facility);
    			}
    		}
    	};

    	return [facility, seeStorageTiles, size, click_handler];
    }

    class Facility$1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$j, create_fragment$k, safe_not_equal, { facility: 0 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Facility",
    			options,
    			id: create_fragment$k.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || ({});

    		if (/*facility*/ ctx[0] === undefined && !("facility" in props)) {
    			console_1$a.warn("<Facility> was created without expected prop 'facility'");
    		}
    	}

    	get facility() {
    		throw new Error("<Facility>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set facility(value) {
    		throw new Error("<Facility>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\BaseService.svelte generated by Svelte v3.16.7 */

    const { Object: Object_1$c } = globals;
    const file$i = "src\\BaseService.svelte";

    function get_each_context$f(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[1] = list[i];
    	return child_ctx;
    }

    // (15:4) {#if !['id'].includes(prop[0])}
    function create_if_block$f(ctx) {
    	let tr;
    	let td0;
    	let t0_value = rul.decamelize(/*prop*/ ctx[1][0]) + "";
    	let t0;
    	let t1;
    	let td1;
    	let current;

    	const linkslist = new LinksList({
    			props: { items: /*prop*/ ctx[1][1] },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			tr = element("tr");
    			td0 = element("td");
    			t0 = text(t0_value);
    			t1 = space();
    			td1 = element("td");
    			create_component(linkslist.$$.fragment);
    			add_location(td0, file$i, 15, 10, 364);
    			add_location(td1, file$i, 16, 6, 406);
    			add_location(tr, file$i, 15, 6, 360);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, tr, anchor);
    			append_dev(tr, td0);
    			append_dev(td0, t0);
    			append_dev(tr, t1);
    			append_dev(tr, td1);
    			mount_component(linkslist, td1, null);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if ((!current || dirty & /*service*/ 1) && t0_value !== (t0_value = rul.decamelize(/*prop*/ ctx[1][0]) + "")) set_data_dev(t0, t0_value);
    			const linkslist_changes = {};
    			if (dirty & /*service*/ 1) linkslist_changes.items = /*prop*/ ctx[1][1];
    			linkslist.$set(linkslist_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(linkslist.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(linkslist.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(tr);
    			destroy_component(linkslist);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$f.name,
    		type: "if",
    		source: "(15:4) {#if !['id'].includes(prop[0])}",
    		ctx
    	});

    	return block;
    }

    // (14:2) {#each Object.entries(service).sort((a, b) => (a[0]=="providedBy"?-10:10) + (a[0] > b[0] ? 1 : -1)) as prop}
    function create_each_block$f(ctx) {
    	let show_if = !["id"].includes(/*prop*/ ctx[1][0]);
    	let if_block_anchor;
    	let current;
    	let if_block = show_if && create_if_block$f(ctx);

    	const block = {
    		c: function create() {
    			if (if_block) if_block.c();
    			if_block_anchor = empty();
    		},
    		m: function mount(target, anchor) {
    			if (if_block) if_block.m(target, anchor);
    			insert_dev(target, if_block_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*service*/ 1) show_if = !["id"].includes(/*prop*/ ctx[1][0]);

    			if (show_if) {
    				if (if_block) {
    					if_block.p(ctx, dirty);
    					transition_in(if_block, 1);
    				} else {
    					if_block = create_if_block$f(ctx);
    					if_block.c();
    					transition_in(if_block, 1);
    					if_block.m(if_block_anchor.parentNode, if_block_anchor);
    				}
    			} else if (if_block) {
    				group_outros();

    				transition_out(if_block, 1, 1, () => {
    					if_block = null;
    				});

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (if_block) if_block.d(detaching);
    			if (detaching) detach_dev(if_block_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block$f.name,
    		type: "each",
    		source: "(14:2) {#each Object.entries(service).sort((a, b) => (a[0]==\\\"providedBy\\\"?-10:10) + (a[0] > b[0] ? 1 : -1)) as prop}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$l(ctx) {
    	let table;
    	let current;
    	let each_value = Object.entries(/*service*/ ctx[0]).sort(func$7);
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block$f(get_each_context$f(ctx, each_value, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			table = element("table");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			attr_dev(table, "class", "main-table");
    			add_location(table, file$i, 11, 0, 175);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, table, anchor);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(table, null);
    			}

    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*Object, service, rul*/ 1) {
    				each_value = Object.entries(/*service*/ ctx[0]).sort(func$7);
    				let i;

    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context$f(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block$f(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(table, null);
    					}
    				}

    				group_outros();

    				for (i = each_value.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;

    			for (let i = 0; i < each_value.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},
    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(table);
    			destroy_each(each_blocks, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$l.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    const func$7 = (a, b) => (a[0] == "providedBy" ? -10 : 10) + (a[0] > b[0] ? 1 : -1);

    function instance$k($$self, $$props, $$invalidate) {
    	let { service } = $$props;
    	const writable_props = ["service"];

    	Object_1$c.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<BaseService> was created with unknown prop '${key}'`);
    	});

    	$$self.$set = $$props => {
    		if ("service" in $$props) $$invalidate(0, service = $$props.service);
    	};

    	$$self.$capture_state = () => {
    		return { service };
    	};

    	$$self.$inject_state = $$props => {
    		if ("service" in $$props) $$invalidate(0, service = $$props.service);
    	};

    	return [service];
    }

    class BaseService extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$k, create_fragment$l, safe_not_equal, { service: 0 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "BaseService",
    			options,
    			id: create_fragment$l.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || ({});

    		if (/*service*/ ctx[0] === undefined && !("service" in props)) {
    			console.warn("<BaseService> was created without expected prop 'service'");
    		}
    	}

    	get service() {
    		throw new Error("<BaseService>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set service(value) {
    		throw new Error("<BaseService>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\BaseServices.svelte generated by Svelte v3.16.7 */

    const { Object: Object_1$d, console: console_1$b } = globals;
    const file$j = "src\\BaseServices.svelte";

    function get_each_context$g(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[1] = list[i];
    	return child_ctx;
    }

    // (21:2) {#each Object.entries(rul.baseServices) as service}
    function create_each_block$g(ctx) {
    	let tr;
    	let td0;
    	let a;
    	let raw_value = rul.str(/*service*/ ctx[1][0]) + "";
    	let a_href_value;
    	let t0;
    	let td1;
    	let t1;
    	let tr_class_value;
    	let current;

    	const linkslist = new LinksList({
    			props: { items: /*service*/ ctx[1][1].providedBy },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			tr = element("tr");
    			td0 = element("td");
    			a = element("a");
    			t0 = space();
    			td1 = element("td");
    			create_component(linkslist.$$.fragment);
    			t1 = space();
    			attr_dev(a, "color", "cyan");
    			attr_dev(a, "href", a_href_value = "#" + /*service*/ ctx[1][0]);
    			attr_dev(a, "class", "svelte-edz6kn");
    			add_location(a, file$j, 22, 10, 416);
    			attr_dev(td0, "class", "svelte-edz6kn");
    			add_location(td0, file$j, 22, 6, 412);
    			attr_dev(td1, "class", "svelte-edz6kn");
    			add_location(td1, file$j, 23, 6, 498);

    			attr_dev(tr, "class", tr_class_value = "" + (null_to_empty(/*service*/ ctx[1][0] == /*query*/ ctx[0]
    			? "highlight"
    			: "") + " svelte-edz6kn"));

    			add_location(tr, file$j, 21, 4, 357);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, tr, anchor);
    			append_dev(tr, td0);
    			append_dev(td0, a);
    			a.innerHTML = raw_value;
    			append_dev(tr, t0);
    			append_dev(tr, td1);
    			mount_component(linkslist, td1, null);
    			append_dev(tr, t1);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (!current || dirty & /*query*/ 1 && tr_class_value !== (tr_class_value = "" + (null_to_empty(/*service*/ ctx[1][0] == /*query*/ ctx[0]
    			? "highlight"
    			: "") + " svelte-edz6kn"))) {
    				attr_dev(tr, "class", tr_class_value);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(linkslist.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(linkslist.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(tr);
    			destroy_component(linkslist);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block$g.name,
    		type: "each",
    		source: "(21:2) {#each Object.entries(rul.baseServices) as service}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$m(ctx) {
    	let table;
    	let current;
    	let each_value = Object.entries(rul.baseServices);
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block$g(get_each_context$g(ctx, each_value, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			table = element("table");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			attr_dev(table, "class", "main-table");
    			add_location(table, file$j, 18, 0, 268);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, table, anchor);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(table, null);
    			}

    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*Object, rul, query*/ 1) {
    				each_value = Object.entries(rul.baseServices);
    				let i;

    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context$g(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block$g(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(table, null);
    					}
    				}

    				group_outros();

    				for (i = each_value.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;

    			for (let i = 0; i < each_value.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},
    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(table);
    			destroy_each(each_blocks, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$m.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$l($$self, $$props, $$invalidate) {
    	let { query = null } = $$props;
    	console.log(query);
    	const writable_props = ["query"];

    	Object_1$d.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1$b.warn(`<BaseServices> was created with unknown prop '${key}'`);
    	});

    	$$self.$set = $$props => {
    		if ("query" in $$props) $$invalidate(0, query = $$props.query);
    	};

    	$$self.$capture_state = () => {
    		return { query };
    	};

    	$$self.$inject_state = $$props => {
    		if ("query" in $$props) $$invalidate(0, query = $$props.query);
    	};

    	return [query];
    }

    class BaseServices extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$l, create_fragment$m, safe_not_equal, { query: 0 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "BaseServices",
    			options,
    			id: create_fragment$m.name
    		});
    	}

    	get query() {
    		throw new Error("<BaseServices>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set query(value) {
    		throw new Error("<BaseServices>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\Article.svelte generated by Svelte v3.16.7 */
    const file$k = "src\\Article.svelte";

    // (55:0) {#if !(article.id in rul.units)}
    function create_if_block_17$1(ctx) {
    	let current;

    	const illustration = new Illustration({
    			props: { id: /*article*/ ctx[0].image_id },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(illustration.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(illustration, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const illustration_changes = {};
    			if (dirty & /*article*/ 1) illustration_changes.id = /*article*/ ctx[0].image_id;
    			illustration.$set(illustration_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(illustration.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(illustration.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(illustration, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_17$1.name,
    		type: "if",
    		source: "(55:0) {#if !(article.id in rul.units)}",
    		ctx
    	});

    	return block;
    }

    // (59:0) {#if textwithHighlights}
    function create_if_block_15$1(ctx) {
    	let div;
    	let t;
    	let html_tag;
    	let current;
    	let if_block = /*article*/ ctx[0].id in rul.items && create_if_block_16$1(ctx);

    	const block = {
    		c: function create() {
    			div = element("div");
    			if (if_block) if_block.c();
    			t = space();
    			html_tag = new HtmlTag(/*textwithHighlights*/ ctx[2], null);
    			attr_dev(div, "class", "article-text");
    			add_location(div, file$k, 59, 2, 1796);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			if (if_block) if_block.m(div, null);
    			append_dev(div, t);
    			html_tag.m(div);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (/*article*/ ctx[0].id in rul.items) {
    				if (if_block) {
    					if_block.p(ctx, dirty);
    					transition_in(if_block, 1);
    				} else {
    					if_block = create_if_block_16$1(ctx);
    					if_block.c();
    					transition_in(if_block, 1);
    					if_block.m(div, t);
    				}
    			} else if (if_block) {
    				group_outros();

    				transition_out(if_block, 1, 1, () => {
    					if_block = null;
    				});

    				check_outros();
    			}

    			if (!current || dirty & /*textwithHighlights*/ 4) html_tag.p(/*textwithHighlights*/ ctx[2]);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			if (if_block) if_block.d();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_15$1.name,
    		type: "if",
    		source: "(59:0) {#if textwithHighlights}",
    		ctx
    	});

    	return block;
    }

    // (61:4) {#if article.id in rul.items}
    function create_if_block_16$1(ctx) {
    	let current;

    	const canvasimage = new CanvasImage({
    			props: {
    				item: rul.items[/*article*/ ctx[0].id],
    				zoom: "2"
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(canvasimage.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(canvasimage, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const canvasimage_changes = {};
    			if (dirty & /*article*/ 1) canvasimage_changes.item = rul.items[/*article*/ ctx[0].id];
    			canvasimage.$set(canvasimage_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(canvasimage.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(canvasimage.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(canvasimage, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_16$1.name,
    		type: "if",
    		source: "(61:4) {#if article.id in rul.items}",
    		ctx
    	});

    	return block;
    }

    // (77:66) 
    function create_if_block_14$2(ctx) {
    	let current;

    	const linkspage = new LinksPage({
    			props: {
    				links: rul.sections[/*article*/ ctx[0].id].articles.map(func$8)
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(linkspage.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(linkspage, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const linkspage_changes = {};
    			if (dirty & /*article*/ 1) linkspage_changes.links = rul.sections[/*article*/ ctx[0].id].articles.map(func$8);
    			linkspage.$set(linkspage_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(linkspage.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(linkspage.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(linkspage, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_14$2.name,
    		type: "if",
    		source: "(77:66) ",
    		ctx
    	});

    	return block;
    }

    // (75:42) 
    function create_if_block_13$2(ctx) {
    	let current;

    	const linkspage = new LinksPage({
    			props: {
    				links: rul.categories[/*article*/ ctx[0].id]
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(linkspage.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(linkspage, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const linkspage_changes = {};
    			if (dirty & /*article*/ 1) linkspage_changes.links = rul.categories[/*article*/ ctx[0].id];
    			linkspage.$set(linkspage_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(linkspage.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(linkspage.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(linkspage, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_13$2.name,
    		type: "if",
    		source: "(75:42) ",
    		ctx
    	});

    	return block;
    }

    // (73:42) 
    function create_if_block_12$2(ctx) {
    	let current;

    	const conditions = new Conditions({
    			props: {
    				conditions: rul.startingConditions[/*article*/ ctx[0].id]
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(conditions.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(conditions, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const conditions_changes = {};
    			if (dirty & /*article*/ 1) conditions_changes.conditions = rul.startingConditions[/*article*/ ctx[0].id];
    			conditions.$set(conditions_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(conditions.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(conditions.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(conditions, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_12$2.name,
    		type: "if",
    		source: "(73:42) ",
    		ctx
    	});

    	return block;
    }

    // (71:0) {#if article.id == 'SERVICES'}
    function create_if_block_11$2(ctx) {
    	let current;
    	const baseservices = new BaseServices({ $$inline: true });

    	const block = {
    		c: function create() {
    			create_component(baseservices.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(baseservices, target, anchor);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(baseservices.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(baseservices.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(baseservices, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_11$2.name,
    		type: "if",
    		source: "(71:0) {#if article.id == 'SERVICES'}",
    		ctx
    	});

    	return block;
    }

    // (85:4) {#if article.id in rul.units}
    function create_if_block_10$2(ctx) {
    	let current;

    	const unit = new Unit$1({
    			props: { unit: rul.units[/*article*/ ctx[0].id] },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(unit.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(unit, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const unit_changes = {};
    			if (dirty & /*article*/ 1) unit_changes.unit = rul.units[/*article*/ ctx[0].id];
    			unit.$set(unit_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(unit.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(unit.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(unit, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_10$2.name,
    		type: "if",
    		source: "(85:4) {#if article.id in rul.units}",
    		ctx
    	});

    	return block;
    }

    // (88:4) {#if article.id in rul.items}
    function create_if_block_9$2(ctx) {
    	let current;

    	const item = new Item$1({
    			props: { item: rul.items[/*article*/ ctx[0].id] },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(item.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(item, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const item_changes = {};
    			if (dirty & /*article*/ 1) item_changes.item = rul.items[/*article*/ ctx[0].id];
    			item.$set(item_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(item.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(item.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(item, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_9$2.name,
    		type: "if",
    		source: "(88:4) {#if article.id in rul.items}",
    		ctx
    	});

    	return block;
    }

    // (95:67) 
    function create_if_block_8$2(ctx) {
    	let current;

    	const armor = new Armor$1({
    			props: {
    				armor: rul.armors[rul.units[/*article*/ ctx[0].id].armor]
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(armor.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(armor, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const armor_changes = {};
    			if (dirty & /*article*/ 1) armor_changes.armor = rul.armors[rul.units[/*article*/ ctx[0].id].armor];
    			armor.$set(armor_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(armor.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(armor.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(armor, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_8$2.name,
    		type: "if",
    		source: "(95:67) ",
    		ctx
    	});

    	return block;
    }

    // (93:2) {#if article.id in rul.armors}
    function create_if_block_7$2(ctx) {
    	let current;

    	const armor = new Armor$1({
    			props: { armor: rul.armors[/*article*/ ctx[0].id] },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(armor.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(armor, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const armor_changes = {};
    			if (dirty & /*article*/ 1) armor_changes.armor = rul.armors[/*article*/ ctx[0].id];
    			armor.$set(armor_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(armor.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(armor.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(armor, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_7$2.name,
    		type: "if",
    		source: "(93:2) {#if article.id in rul.armors}",
    		ctx
    	});

    	return block;
    }

    // (99:2) {#if article.id in rul.baseServices}
    function create_if_block_6$3(ctx) {
    	let current;

    	const baseservice = new BaseService({
    			props: {
    				service: rul.baseServices[/*article*/ ctx[0].id]
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(baseservice.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(baseservice, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const baseservice_changes = {};
    			if (dirty & /*article*/ 1) baseservice_changes.service = rul.baseServices[/*article*/ ctx[0].id];
    			baseservice.$set(baseservice_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(baseservice.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(baseservice.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(baseservice, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_6$3.name,
    		type: "if",
    		source: "(99:2) {#if article.id in rul.baseServices}",
    		ctx
    	});

    	return block;
    }

    // (103:2) {#if article.id in rul.crafts}
    function create_if_block_5$3(ctx) {
    	let current;

    	const craft = new Craft$1({
    			props: { craft: rul.crafts[/*article*/ ctx[0].id] },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(craft.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(craft, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const craft_changes = {};
    			if (dirty & /*article*/ 1) craft_changes.craft = rul.crafts[/*article*/ ctx[0].id];
    			craft.$set(craft_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(craft.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(craft.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(craft, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_5$3.name,
    		type: "if",
    		source: "(103:2) {#if article.id in rul.crafts}",
    		ctx
    	});

    	return block;
    }

    // (107:2) {#if article.id in rul.craftWeapons}
    function create_if_block_4$4(ctx) {
    	let current;

    	const craftweapon = new CraftWeapon$1({
    			props: {
    				weapon: rul.craftWeapons[/*article*/ ctx[0].id]
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(craftweapon.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(craftweapon, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const craftweapon_changes = {};
    			if (dirty & /*article*/ 1) craftweapon_changes.weapon = rul.craftWeapons[/*article*/ ctx[0].id];
    			craftweapon.$set(craftweapon_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(craftweapon.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(craftweapon.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(craftweapon, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_4$4.name,
    		type: "if",
    		source: "(107:2) {#if article.id in rul.craftWeapons}",
    		ctx
    	});

    	return block;
    }

    // (111:2) {#if article.id in rul.ufos}
    function create_if_block_3$8(ctx) {
    	let current;

    	const ufo = new Ufo$1({
    			props: { ufo: rul.ufos[/*article*/ ctx[0].id] },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(ufo.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(ufo, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const ufo_changes = {};
    			if (dirty & /*article*/ 1) ufo_changes.ufo = rul.ufos[/*article*/ ctx[0].id];
    			ufo.$set(ufo_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(ufo.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(ufo.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(ufo, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_3$8.name,
    		type: "if",
    		source: "(111:2) {#if article.id in rul.ufos}",
    		ctx
    	});

    	return block;
    }

    // (115:2) {#if article.id in rul.facilities}
    function create_if_block_2$c(ctx) {
    	let current;

    	const facility = new Facility$1({
    			props: {
    				facility: rul.facilities[/*article*/ ctx[0].id]
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(facility.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(facility, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const facility_changes = {};
    			if (dirty & /*article*/ 1) facility_changes.facility = rul.facilities[/*article*/ ctx[0].id];
    			facility.$set(facility_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(facility.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(facility.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(facility, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_2$c.name,
    		type: "if",
    		source: "(115:2) {#if article.id in rul.facilities}",
    		ctx
    	});

    	return block;
    }

    // (121:6) {#if article.id in rul.manufacture}
    function create_if_block_1$c(ctx) {
    	let current;

    	const manufacture = new Manufacture$1({
    			props: {
    				manufacture: rul.manufacture[/*article*/ ctx[0].id]
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(manufacture.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(manufacture, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const manufacture_changes = {};
    			if (dirty & /*article*/ 1) manufacture_changes.manufacture = rul.manufacture[/*article*/ ctx[0].id];
    			manufacture.$set(manufacture_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(manufacture.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(manufacture.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(manufacture, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_1$c.name,
    		type: "if",
    		source: "(121:6) {#if article.id in rul.manufacture}",
    		ctx
    	});

    	return block;
    }

    // (125:6) {#if article.id in rul.research}
    function create_if_block$g(ctx) {
    	let current;

    	const research = new Research$1({
    			props: {
    				research: rul.research[/*article*/ ctx[0].id]
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(research.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(research, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const research_changes = {};
    			if (dirty & /*article*/ 1) research_changes.research = rul.research[/*article*/ ctx[0].id];
    			research.$set(research_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(research.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(research.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(research, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$g.name,
    		type: "if",
    		source: "(125:6) {#if article.id in rul.research}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$n(ctx) {
    	let title_value;
    	let t0;
    	let h1;
    	let nobr;
    	let t1_value = (/*article*/ ctx[0].title || /*article*/ ctx[0].id) + "";
    	let t1;
    	let t2;
    	let span;
    	let t3;
    	let button0;
    	let t5;
    	let button1;
    	let t7;
    	let t8;
    	let t9;
    	let current_block_type_index;
    	let if_block2;
    	let t10;
    	let div1;
    	let t11;
    	let table0;
    	let t12;
    	let t13;
    	let current_block_type_index_1;
    	let if_block5;
    	let t14;
    	let t15;
    	let t16;
    	let t17;
    	let t18;
    	let t19;
    	let div0;
    	let table1;
    	let t20;
    	let current;
    	let dispose;
    	document.title = title_value = rul.str(/*article*/ ctx[0].title || "XPedia");
    	let if_block0 = !(/*article*/ ctx[0].id in rul.units) && create_if_block_17$1(ctx);
    	let if_block1 = /*textwithHighlights*/ ctx[2] && create_if_block_15$1(ctx);
    	const if_block_creators = [create_if_block_11$2, create_if_block_12$2, create_if_block_13$2, create_if_block_14$2];
    	const if_blocks = [];

    	function select_block_type(ctx, dirty) {
    		if (/*article*/ ctx[0].id == "SERVICES") return 0;
    		if (/*article*/ ctx[0].type_id == "CONDITIONS") return 1;
    		if (/*article*/ ctx[0].type_id == "CATEGORIES") return 2;
    		if (/*article*/ ctx[0].type_id == "PEDIA" || /*article*/ ctx[0].type_id == "TYPE") return 3;
    		return -1;
    	}

    	if (~(current_block_type_index = select_block_type(ctx))) {
    		if_block2 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    	}

    	var switch_value = /*other*/ ctx[3];

    	function switch_props(ctx) {
    		return {
    			props: { query: /*query*/ ctx[1] },
    			$$inline: true
    		};
    	}

    	if (switch_value) {
    		var switch_instance = new switch_value(switch_props(ctx));
    	}

    	let if_block3 = /*article*/ ctx[0].id in rul.units && create_if_block_10$2(ctx);
    	let if_block4 = /*article*/ ctx[0].id in rul.items && create_if_block_9$2(ctx);
    	const if_block_creators_1 = [create_if_block_7$2, create_if_block_8$2];
    	const if_blocks_1 = [];

    	function select_block_type_1(ctx, dirty) {
    		if (/*article*/ ctx[0].id in rul.armors) return 0;
    		if (/*article*/ ctx[0].id in rul.units && rul.units[/*article*/ ctx[0].id].armor) return 1;
    		return -1;
    	}

    	if (~(current_block_type_index_1 = select_block_type_1(ctx))) {
    		if_block5 = if_blocks_1[current_block_type_index_1] = if_block_creators_1[current_block_type_index_1](ctx);
    	}

    	let if_block6 = /*article*/ ctx[0].id in rul.baseServices && create_if_block_6$3(ctx);
    	let if_block7 = /*article*/ ctx[0].id in rul.crafts && create_if_block_5$3(ctx);
    	let if_block8 = /*article*/ ctx[0].id in rul.craftWeapons && create_if_block_4$4(ctx);
    	let if_block9 = /*article*/ ctx[0].id in rul.ufos && create_if_block_3$8(ctx);
    	let if_block10 = /*article*/ ctx[0].id in rul.facilities && create_if_block_2$c(ctx);
    	let if_block11 = /*article*/ ctx[0].id in rul.manufacture && create_if_block_1$c(ctx);
    	let if_block12 = /*article*/ ctx[0].id in rul.research && create_if_block$g(ctx);

    	const block = {
    		c: function create() {
    			t0 = space();
    			h1 = element("h1");
    			nobr = element("nobr");
    			t1 = text(t1_value);
    			t2 = space();
    			span = element("span");
    			t3 = space();
    			button0 = element("button");
    			button0.textContent = "<";
    			t5 = space();
    			button1 = element("button");
    			button1.textContent = ">";
    			t7 = space();
    			if (if_block0) if_block0.c();
    			t8 = space();
    			if (if_block1) if_block1.c();
    			t9 = space();
    			if (if_block2) if_block2.c();
    			t10 = space();
    			div1 = element("div");
    			if (switch_instance) create_component(switch_instance.$$.fragment);
    			t11 = space();
    			table0 = element("table");
    			if (if_block3) if_block3.c();
    			t12 = space();
    			if (if_block4) if_block4.c();
    			t13 = space();
    			if (if_block5) if_block5.c();
    			t14 = space();
    			if (if_block6) if_block6.c();
    			t15 = space();
    			if (if_block7) if_block7.c();
    			t16 = space();
    			if (if_block8) if_block8.c();
    			t17 = space();
    			if (if_block9) if_block9.c();
    			t18 = space();
    			if (if_block10) if_block10.c();
    			t19 = space();
    			div0 = element("div");
    			table1 = element("table");
    			if (if_block11) if_block11.c();
    			t20 = space();
    			if (if_block12) if_block12.c();
    			add_location(nobr, file$k, 48, 2, 1451);
    			set_style(span, "flex", "1");
    			add_location(span, file$k, 49, 2, 1497);
    			attr_dev(button0, "class", "page-turn");
    			add_location(button0, file$k, 50, 2, 1524);
    			attr_dev(button1, "class", "page-turn");
    			add_location(button1, file$k, 51, 2, 1600);
    			add_location(h1, file$k, 47, 0, 1443);
    			attr_dev(table0, "class", "main-table");
    			add_location(table0, file$k, 83, 2, 2501);
    			attr_dev(table1, "class", "main-table");
    			add_location(table1, file$k, 119, 4, 3483);
    			attr_dev(div0, "class", "flex-vertical");
    			add_location(div0, file$k, 118, 2, 3450);
    			attr_dev(div1, "class", "flex-horisontal");
    			add_location(div1, file$k, 80, 0, 2419);

    			dispose = [
    				listen_dev(button0, "click", /*click_handler*/ ctx[5], false, false, false),
    				listen_dev(button1, "click", /*click_handler_1*/ ctx[6], false, false, false)
    			];
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t0, anchor);
    			insert_dev(target, h1, anchor);
    			append_dev(h1, nobr);
    			append_dev(nobr, t1);
    			append_dev(h1, t2);
    			append_dev(h1, span);
    			append_dev(h1, t3);
    			append_dev(h1, button0);
    			append_dev(h1, t5);
    			append_dev(h1, button1);
    			insert_dev(target, t7, anchor);
    			if (if_block0) if_block0.m(target, anchor);
    			insert_dev(target, t8, anchor);
    			if (if_block1) if_block1.m(target, anchor);
    			insert_dev(target, t9, anchor);

    			if (~current_block_type_index) {
    				if_blocks[current_block_type_index].m(target, anchor);
    			}

    			insert_dev(target, t10, anchor);
    			insert_dev(target, div1, anchor);

    			if (switch_instance) {
    				mount_component(switch_instance, div1, null);
    			}

    			append_dev(div1, t11);
    			append_dev(div1, table0);
    			if (if_block3) if_block3.m(table0, null);
    			append_dev(table0, t12);
    			if (if_block4) if_block4.m(table0, null);
    			append_dev(div1, t13);

    			if (~current_block_type_index_1) {
    				if_blocks_1[current_block_type_index_1].m(div1, null);
    			}

    			append_dev(div1, t14);
    			if (if_block6) if_block6.m(div1, null);
    			append_dev(div1, t15);
    			if (if_block7) if_block7.m(div1, null);
    			append_dev(div1, t16);
    			if (if_block8) if_block8.m(div1, null);
    			append_dev(div1, t17);
    			if (if_block9) if_block9.m(div1, null);
    			append_dev(div1, t18);
    			if (if_block10) if_block10.m(div1, null);
    			append_dev(div1, t19);
    			append_dev(div1, div0);
    			append_dev(div0, table1);
    			if (if_block11) if_block11.m(table1, null);
    			append_dev(table1, t20);
    			if (if_block12) if_block12.m(table1, null);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if ((!current || dirty & /*rul, article*/ 1) && title_value !== (title_value = rul.str(/*article*/ ctx[0].title || "XPedia"))) {
    				document.title = title_value;
    			}

    			if ((!current || dirty & /*article*/ 1) && t1_value !== (t1_value = (/*article*/ ctx[0].title || /*article*/ ctx[0].id) + "")) set_data_dev(t1, t1_value);

    			if (!(/*article*/ ctx[0].id in rul.units)) {
    				if (if_block0) {
    					if_block0.p(ctx, dirty);
    					transition_in(if_block0, 1);
    				} else {
    					if_block0 = create_if_block_17$1(ctx);
    					if_block0.c();
    					transition_in(if_block0, 1);
    					if_block0.m(t8.parentNode, t8);
    				}
    			} else if (if_block0) {
    				group_outros();

    				transition_out(if_block0, 1, 1, () => {
    					if_block0 = null;
    				});

    				check_outros();
    			}

    			if (/*textwithHighlights*/ ctx[2]) {
    				if (if_block1) {
    					if_block1.p(ctx, dirty);
    					transition_in(if_block1, 1);
    				} else {
    					if_block1 = create_if_block_15$1(ctx);
    					if_block1.c();
    					transition_in(if_block1, 1);
    					if_block1.m(t9.parentNode, t9);
    				}
    			} else if (if_block1) {
    				group_outros();

    				transition_out(if_block1, 1, 1, () => {
    					if_block1 = null;
    				});

    				check_outros();
    			}

    			let previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type(ctx);

    			if (current_block_type_index === previous_block_index) {
    				if (~current_block_type_index) {
    					if_blocks[current_block_type_index].p(ctx, dirty);
    				}
    			} else {
    				if (if_block2) {
    					group_outros();

    					transition_out(if_blocks[previous_block_index], 1, 1, () => {
    						if_blocks[previous_block_index] = null;
    					});

    					check_outros();
    				}

    				if (~current_block_type_index) {
    					if_block2 = if_blocks[current_block_type_index];

    					if (!if_block2) {
    						if_block2 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    						if_block2.c();
    					}

    					transition_in(if_block2, 1);
    					if_block2.m(t10.parentNode, t10);
    				} else {
    					if_block2 = null;
    				}
    			}

    			const switch_instance_changes = {};
    			if (dirty & /*query*/ 2) switch_instance_changes.query = /*query*/ ctx[1];

    			if (switch_value !== (switch_value = /*other*/ ctx[3])) {
    				if (switch_instance) {
    					group_outros();
    					const old_component = switch_instance;

    					transition_out(old_component.$$.fragment, 1, 0, () => {
    						destroy_component(old_component, 1);
    					});

    					check_outros();
    				}

    				if (switch_value) {
    					switch_instance = new switch_value(switch_props(ctx));
    					create_component(switch_instance.$$.fragment);
    					transition_in(switch_instance.$$.fragment, 1);
    					mount_component(switch_instance, div1, t11);
    				} else {
    					switch_instance = null;
    				}
    			} else if (switch_value) {
    				switch_instance.$set(switch_instance_changes);
    			}

    			if (/*article*/ ctx[0].id in rul.units) {
    				if (if_block3) {
    					if_block3.p(ctx, dirty);
    					transition_in(if_block3, 1);
    				} else {
    					if_block3 = create_if_block_10$2(ctx);
    					if_block3.c();
    					transition_in(if_block3, 1);
    					if_block3.m(table0, t12);
    				}
    			} else if (if_block3) {
    				group_outros();

    				transition_out(if_block3, 1, 1, () => {
    					if_block3 = null;
    				});

    				check_outros();
    			}

    			if (/*article*/ ctx[0].id in rul.items) {
    				if (if_block4) {
    					if_block4.p(ctx, dirty);
    					transition_in(if_block4, 1);
    				} else {
    					if_block4 = create_if_block_9$2(ctx);
    					if_block4.c();
    					transition_in(if_block4, 1);
    					if_block4.m(table0, null);
    				}
    			} else if (if_block4) {
    				group_outros();

    				transition_out(if_block4, 1, 1, () => {
    					if_block4 = null;
    				});

    				check_outros();
    			}

    			let previous_block_index_1 = current_block_type_index_1;
    			current_block_type_index_1 = select_block_type_1(ctx);

    			if (current_block_type_index_1 === previous_block_index_1) {
    				if (~current_block_type_index_1) {
    					if_blocks_1[current_block_type_index_1].p(ctx, dirty);
    				}
    			} else {
    				if (if_block5) {
    					group_outros();

    					transition_out(if_blocks_1[previous_block_index_1], 1, 1, () => {
    						if_blocks_1[previous_block_index_1] = null;
    					});

    					check_outros();
    				}

    				if (~current_block_type_index_1) {
    					if_block5 = if_blocks_1[current_block_type_index_1];

    					if (!if_block5) {
    						if_block5 = if_blocks_1[current_block_type_index_1] = if_block_creators_1[current_block_type_index_1](ctx);
    						if_block5.c();
    					}

    					transition_in(if_block5, 1);
    					if_block5.m(div1, t14);
    				} else {
    					if_block5 = null;
    				}
    			}

    			if (/*article*/ ctx[0].id in rul.baseServices) {
    				if (if_block6) {
    					if_block6.p(ctx, dirty);
    					transition_in(if_block6, 1);
    				} else {
    					if_block6 = create_if_block_6$3(ctx);
    					if_block6.c();
    					transition_in(if_block6, 1);
    					if_block6.m(div1, t15);
    				}
    			} else if (if_block6) {
    				group_outros();

    				transition_out(if_block6, 1, 1, () => {
    					if_block6 = null;
    				});

    				check_outros();
    			}

    			if (/*article*/ ctx[0].id in rul.crafts) {
    				if (if_block7) {
    					if_block7.p(ctx, dirty);
    					transition_in(if_block7, 1);
    				} else {
    					if_block7 = create_if_block_5$3(ctx);
    					if_block7.c();
    					transition_in(if_block7, 1);
    					if_block7.m(div1, t16);
    				}
    			} else if (if_block7) {
    				group_outros();

    				transition_out(if_block7, 1, 1, () => {
    					if_block7 = null;
    				});

    				check_outros();
    			}

    			if (/*article*/ ctx[0].id in rul.craftWeapons) {
    				if (if_block8) {
    					if_block8.p(ctx, dirty);
    					transition_in(if_block8, 1);
    				} else {
    					if_block8 = create_if_block_4$4(ctx);
    					if_block8.c();
    					transition_in(if_block8, 1);
    					if_block8.m(div1, t17);
    				}
    			} else if (if_block8) {
    				group_outros();

    				transition_out(if_block8, 1, 1, () => {
    					if_block8 = null;
    				});

    				check_outros();
    			}

    			if (/*article*/ ctx[0].id in rul.ufos) {
    				if (if_block9) {
    					if_block9.p(ctx, dirty);
    					transition_in(if_block9, 1);
    				} else {
    					if_block9 = create_if_block_3$8(ctx);
    					if_block9.c();
    					transition_in(if_block9, 1);
    					if_block9.m(div1, t18);
    				}
    			} else if (if_block9) {
    				group_outros();

    				transition_out(if_block9, 1, 1, () => {
    					if_block9 = null;
    				});

    				check_outros();
    			}

    			if (/*article*/ ctx[0].id in rul.facilities) {
    				if (if_block10) {
    					if_block10.p(ctx, dirty);
    					transition_in(if_block10, 1);
    				} else {
    					if_block10 = create_if_block_2$c(ctx);
    					if_block10.c();
    					transition_in(if_block10, 1);
    					if_block10.m(div1, t19);
    				}
    			} else if (if_block10) {
    				group_outros();

    				transition_out(if_block10, 1, 1, () => {
    					if_block10 = null;
    				});

    				check_outros();
    			}

    			if (/*article*/ ctx[0].id in rul.manufacture) {
    				if (if_block11) {
    					if_block11.p(ctx, dirty);
    					transition_in(if_block11, 1);
    				} else {
    					if_block11 = create_if_block_1$c(ctx);
    					if_block11.c();
    					transition_in(if_block11, 1);
    					if_block11.m(table1, t20);
    				}
    			} else if (if_block11) {
    				group_outros();

    				transition_out(if_block11, 1, 1, () => {
    					if_block11 = null;
    				});

    				check_outros();
    			}

    			if (/*article*/ ctx[0].id in rul.research) {
    				if (if_block12) {
    					if_block12.p(ctx, dirty);
    					transition_in(if_block12, 1);
    				} else {
    					if_block12 = create_if_block$g(ctx);
    					if_block12.c();
    					transition_in(if_block12, 1);
    					if_block12.m(table1, null);
    				}
    			} else if (if_block12) {
    				group_outros();

    				transition_out(if_block12, 1, 1, () => {
    					if_block12 = null;
    				});

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block0);
    			transition_in(if_block1);
    			transition_in(if_block2);
    			if (switch_instance) transition_in(switch_instance.$$.fragment, local);
    			transition_in(if_block3);
    			transition_in(if_block4);
    			transition_in(if_block5);
    			transition_in(if_block6);
    			transition_in(if_block7);
    			transition_in(if_block8);
    			transition_in(if_block9);
    			transition_in(if_block10);
    			transition_in(if_block11);
    			transition_in(if_block12);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block0);
    			transition_out(if_block1);
    			transition_out(if_block2);
    			if (switch_instance) transition_out(switch_instance.$$.fragment, local);
    			transition_out(if_block3);
    			transition_out(if_block4);
    			transition_out(if_block5);
    			transition_out(if_block6);
    			transition_out(if_block7);
    			transition_out(if_block8);
    			transition_out(if_block9);
    			transition_out(if_block10);
    			transition_out(if_block11);
    			transition_out(if_block12);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t0);
    			if (detaching) detach_dev(h1);
    			if (detaching) detach_dev(t7);
    			if (if_block0) if_block0.d(detaching);
    			if (detaching) detach_dev(t8);
    			if (if_block1) if_block1.d(detaching);
    			if (detaching) detach_dev(t9);

    			if (~current_block_type_index) {
    				if_blocks[current_block_type_index].d(detaching);
    			}

    			if (detaching) detach_dev(t10);
    			if (detaching) detach_dev(div1);
    			if (switch_instance) destroy_component(switch_instance);
    			if (if_block3) if_block3.d();
    			if (if_block4) if_block4.d();

    			if (~current_block_type_index_1) {
    				if_blocks_1[current_block_type_index_1].d();
    			}

    			if (if_block6) if_block6.d();
    			if (if_block7) if_block7.d();
    			if (if_block8) if_block8.d();
    			if (if_block9) if_block9.d();
    			if (if_block10) if_block10.d();
    			if (if_block11) if_block11.d();
    			if (if_block12) if_block12.d();
    			run_all(dispose);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$n.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    const func$8 = a => a.id;

    function instance$m($$self, $$props, $$invalidate) {
    	const dispatch = createEventDispatcher();
    	let { article } = $$props;
    	let { query } = $$props;
    	let textwithHighlights;
    	let other = false;
    	const writable_props = ["article", "query"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Article> was created with unknown prop '${key}'`);
    	});

    	const click_handler = e => dispatch("prev");
    	const click_handler_1 = e => dispatch("next");

    	$$self.$set = $$props => {
    		if ("article" in $$props) $$invalidate(0, article = $$props.article);
    		if ("query" in $$props) $$invalidate(1, query = $$props.query);
    	};

    	$$self.$capture_state = () => {
    		return {
    			article,
    			query,
    			textwithHighlights,
    			other
    		};
    	};

    	$$self.$inject_state = $$props => {
    		if ("article" in $$props) $$invalidate(0, article = $$props.article);
    		if ("query" in $$props) $$invalidate(1, query = $$props.query);
    		if ("textwithHighlights" in $$props) $$invalidate(2, textwithHighlights = $$props.textwithHighlights);
    		if ("other" in $$props) $$invalidate(3, other = $$props.other);
    	};

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty & /*article, query, textwithHighlights*/ 7) {
    			$: {
    				$$invalidate(2, textwithHighlights = article.text || "");

    				$$invalidate(3, other = article.type_id == "OTHER"
    				? ({ BaseServices })[article.id]
    				: false);

    				if (query) {
    					for (let word of query.split()) {
    						let regEx = new RegExp(word, "ig");
    						$$invalidate(2, textwithHighlights = textwithHighlights.replace(regEx, "<span class='queried'>$&</span>"));
    					}
    				}
    			}
    		}
    	};

    	return [
    		article,
    		query,
    		textwithHighlights,
    		other,
    		dispatch,
    		click_handler,
    		click_handler_1
    	];
    }

    class Article$1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$m, create_fragment$n, safe_not_equal, { article: 0, query: 1 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Article",
    			options,
    			id: create_fragment$n.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || ({});

    		if (/*article*/ ctx[0] === undefined && !("article" in props)) {
    			console.warn("<Article> was created without expected prop 'article'");
    		}

    		if (/*query*/ ctx[1] === undefined && !("query" in props)) {
    			console.warn("<Article> was created without expected prop 'query'");
    		}
    	}

    	get article() {
    		throw new Error("<Article>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set article(value) {
    		throw new Error("<Article>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get query() {
    		throw new Error("<Article>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set query(value) {
    		throw new Error("<Article>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\App.svelte generated by Svelte v3.16.7 */

    const { console: console_1$c, document: document_1 } = globals;
    const file$l = "src\\App.svelte";

    function get_each_context_1$7(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[44] = list[i];
    	return child_ctx;
    }

    function get_each_context$h(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[41] = list[i];
    	return child_ctx;
    }

    function get_each_context_2$7(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[47] = list[i];
    	return child_ctx;
    }

    function get_each_context_3$4(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[41] = list[i];
    	child_ctx[51] = i;
    	return child_ctx;
    }

    function get_each_context_4$2(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[41] = list[i];
    	child_ctx[51] = i;
    	return child_ctx;
    }

    // (175:2) {#if !article}
    function create_if_block_11$3(ctx) {
    	const block = {
    		c: function create() {
    			document_1.title = "XPedia";
    		},
    		m: noop,
    		d: noop
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_11$3.name,
    		type: "if",
    		source: "(175:2) {#if !article}",
    		ctx
    	});

    	return block;
    }

    // (1:0) <script>   import { tick, afterUpdate }
    function create_catch_block(ctx) {
    	const block = {
    		c: noop,
    		m: noop,
    		p: noop,
    		i: noop,
    		o: noop,
    		d: noop
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_catch_block.name,
    		type: "catch",
    		source: "(1:0) <script>   import { tick, afterUpdate }",
    		ctx
    	});

    	return block;
    }

    // (186:0) {:then}
    function create_then_block(ctx) {
    	let nav;
    	let div6;
    	let div0;
    	let img;
    	let img_src_value;
    	let t0;
    	let nobr;
    	let span0;
    	let t3;
    	let span1;
    	let t5;
    	let t6;
    	let div5;
    	let div4;
    	let div2;
    	let a0;
    	let t8;
    	let div1;
    	let t9;
    	let t10;
    	let div3;
    	let div5_style_value;
    	let t11;
    	let a1;

    	let t12_value = (/*currentSection*/ ctx[3]
    	? /*currentSection*/ ctx[3].title
    	: "") + "";

    	let t12;
    	let a1_href_value;
    	let t13;
    	let div7;
    	let t14;
    	let t15;
    	let t16;
    	let div8;
    	let input;
    	let input_placeholder_value;
    	let t17;
    	let t18;
    	let button;
    	let span2;
    	let button_style_value;
    	let t20;
    	let div9;
    	let current_block_type_index;
    	let if_block3;
    	let div9_style_value;
    	let t21;
    	let div10;
    	let current;
    	let dispose;
    	let each_value_4 = rul.typeSectionsOrder;
    	let each_blocks_1 = [];

    	for (let i = 0; i < each_value_4.length; i += 1) {
    		each_blocks_1[i] = create_each_block_4$2(get_each_context_4$2(ctx, each_value_4, i));
    	}

    	let each_value_3 = rul.sectionsOrder;
    	let each_blocks = [];

    	for (let i = 0; i < each_value_3.length; i += 1) {
    		each_blocks[i] = create_each_block_3$4(get_each_context_3$4(ctx, each_value_3, i));
    	}

    	let if_block0 = rul.config && rul.config.languages && rul.config.languages.length > 1 && create_if_block_10$3(ctx);
    	let if_block1 = /*allowHugeFont*/ ctx[15] && create_if_block_9$3(ctx);
    	let if_block2 = /*seeSide*/ ctx[8] && create_if_block_6$4(ctx);
    	const if_block_creators = [create_if_block$h, create_if_block_1$d, create_if_block_5$4];
    	const if_blocks = [];

    	function select_block_type_1(ctx, dirty) {
    		if (/*article*/ ctx[0]) return 0;
    		if (/*query*/ ctx[2]) return 1;
    		if (!/*query*/ ctx[2]) return 2;
    		return -1;
    	}

    	if (~(current_block_type_index = select_block_type_1(ctx))) {
    		if_block3 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    	}

    	const block = {
    		c: function create() {
    			nav = element("nav");
    			div6 = element("div");
    			div0 = element("div");
    			img = element("img");
    			t0 = space();
    			nobr = element("nobr");
    			span0 = element("span");
    			span0.textContent = `${rul.str("BootyPedia")} `;
    			t3 = space();
    			span1 = element("span");
    			span1.textContent = "v";
    			t5 = text("\n           ");
    			t6 = space();
    			div5 = element("div");
    			div4 = element("div");
    			div2 = element("div");
    			a0 = element("a");
    			a0.textContent = `${rul.str("HOME")}`;
    			t8 = space();
    			div1 = element("div");
    			t9 = space();

    			for (let i = 0; i < each_blocks_1.length; i += 1) {
    				each_blocks_1[i].c();
    			}

    			t10 = space();
    			div3 = element("div");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			t11 = space();
    			a1 = element("a");
    			t12 = text(t12_value);
    			t13 = space();
    			div7 = element("div");
    			t14 = space();
    			if (if_block0) if_block0.c();
    			t15 = space();
    			if (if_block1) if_block1.c();
    			t16 = space();
    			div8 = element("div");
    			input = element("input");
    			t17 = space();
    			if (if_block2) if_block2.c();
    			t18 = space();
    			button = element("button");
    			span2 = element("span");
    			span2.textContent = "≡";
    			t20 = space();
    			div9 = element("div");
    			if (if_block3) if_block3.c();
    			t21 = space();
    			div10 = element("div");
    			div10.textContent = "Tooltip";
    			if (img.src !== (img_src_value = "xpedia/favicon.png")) attr_dev(img, "src", img_src_value);
    			attr_dev(img, "alt", "XPedia");
    			attr_dev(img, "class", "xpedia-icon");
    			add_location(img, file$l, 193, 8, 4387);
    			attr_dev(span0, "class", "on-wide");
    			add_location(span0, file$l, 195, 10, 4478);
    			set_style(span1, "transform", "scale(1.5,0.75)");
    			set_style(span1, "display", "inline-block");
    			add_location(span1, file$l, 196, 10, 4547);
    			add_location(nobr, file$l, 194, 8, 4461);
    			attr_dev(div0, "class", "navbar-button");
    			add_location(div0, file$l, 192, 6, 4320);
    			attr_dev(a0, "href", "##MAIN");
    			set_style(a0, "text-decoration", "underline");
    			add_location(a0, file$l, 208, 12, 4931);
    			set_style(div1, "height", "0.5em");
    			add_location(div1, file$l, 211, 12, 5045);
    			attr_dev(div2, "class", "navbar-auto navbar-list");
    			add_location(div2, file$l, 207, 10, 4881);
    			attr_dev(div3, "class", "navbar-custom navbar-list");
    			add_location(div3, file$l, 216, 10, 5240);
    			attr_dev(div4, "class", "flex-horisontal");
    			set_style(div4, "flex-wrap", "nowrap");
    			add_location(div4, file$l, 206, 8, 4816);
    			attr_dev(div5, "class", "navbar-dropdown");

    			attr_dev(div5, "style", div5_style_value = /*showDropdown*/ ctx[10]
    			? "visibility:visible"
    			: "visibility:hidden");

    			add_location(div5, file$l, 203, 6, 4696);
    			attr_dev(div6, "class", "navbar-dropdown-container");
    			add_location(div6, file$l, 188, 4, 4186);
    			attr_dev(a1, "class", "navbar-button navbar-current-article");

    			attr_dev(a1, "href", a1_href_value = "##" + (/*currentSection*/ ctx[3]
    			? /*currentSection*/ ctx[3].id
    			: "MAIN"));

    			add_location(a1, file$l, 226, 4, 5476);
    			attr_dev(div7, "class", "stretcher");
    			add_location(div7, file$l, 232, 4, 5662);
    			attr_dev(input, "class", "input");
    			attr_dev(input, "type", "text");
    			attr_dev(input, "placeholder", input_placeholder_value = rul.str("Search..."));
    			add_location(input, file$l, 262, 6, 6681);
    			attr_dev(div8, "class", "navbar-search");
    			add_location(div8, file$l, 261, 4, 6647);
    			attr_dev(nav, "class", "navbar flex-horisontal");
    			add_location(nav, file$l, 186, 2, 4144);
    			set_style(span2, "font-size", "150%");
    			add_location(span2, file$l, 316, 4, 8234);
    			attr_dev(button, "class", "side-hide-button");
    			attr_dev(button, "style", button_style_value = /*seeSide*/ ctx[8] ? "" : "left:1em;");
    			add_location(button, file$l, 310, 2, 8080);
    			attr_dev(div9, "class", "main");
    			attr_dev(div9, "style", div9_style_value = /*seeSide*/ ctx[8] ? "" : "padding-left:3rem;");
    			add_location(div9, file$l, 319, 2, 8287);
    			attr_dev(div10, "class", "tooltip fadein");
    			add_location(div10, file$l, 351, 2, 9110);

    			dispose = [
    				listen_dev(div0, "mousedown", /*mousedown_handler*/ ctx[26], false, false, false),
    				listen_dev(div6, "mouseover", /*mouseover_handler*/ ctx[27], false, false, false),
    				listen_dev(div6, "mouseout", /*mouseout_handler*/ ctx[28], false, false, false),
    				listen_dev(input, "input", /*input_input_handler*/ ctx[33]),
    				listen_dev(input, "keyup", /*searchKeyUp*/ ctx[19], false, false, false),
    				listen_dev(button, "click", /*click_handler_3*/ ctx[37], false, false, false)
    			];
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, nav, anchor);
    			append_dev(nav, div6);
    			append_dev(div6, div0);
    			append_dev(div0, img);
    			append_dev(div0, t0);
    			append_dev(div0, nobr);
    			append_dev(nobr, span0);
    			append_dev(nobr, t3);
    			append_dev(nobr, span1);
    			append_dev(nobr, t5);
    			append_dev(div6, t6);
    			append_dev(div6, div5);
    			append_dev(div5, div4);
    			append_dev(div4, div2);
    			append_dev(div2, a0);
    			append_dev(div2, t8);
    			append_dev(div2, div1);
    			append_dev(div2, t9);

    			for (let i = 0; i < each_blocks_1.length; i += 1) {
    				each_blocks_1[i].m(div2, null);
    			}

    			append_dev(div4, t10);
    			append_dev(div4, div3);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(div3, null);
    			}

    			append_dev(nav, t11);
    			append_dev(nav, a1);
    			append_dev(a1, t12);
    			append_dev(nav, t13);
    			append_dev(nav, div7);
    			append_dev(nav, t14);
    			if (if_block0) if_block0.m(nav, null);
    			append_dev(nav, t15);
    			if (if_block1) if_block1.m(nav, null);
    			append_dev(nav, t16);
    			append_dev(nav, div8);
    			append_dev(div8, input);
    			set_input_value(input, /*query*/ ctx[2]);
    			insert_dev(target, t17, anchor);
    			if (if_block2) if_block2.m(target, anchor);
    			insert_dev(target, t18, anchor);
    			insert_dev(target, button, anchor);
    			append_dev(button, span2);
    			insert_dev(target, t20, anchor);
    			insert_dev(target, div9, anchor);

    			if (~current_block_type_index) {
    				if_blocks[current_block_type_index].m(div9, null);
    			}

    			insert_dev(target, t21, anchor);
    			insert_dev(target, div10, anchor);
    			/*div10_binding*/ ctx[40](div10);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*rul*/ 0) {
    				each_value_4 = rul.typeSectionsOrder;
    				let i;

    				for (i = 0; i < each_value_4.length; i += 1) {
    					const child_ctx = get_each_context_4$2(ctx, each_value_4, i);

    					if (each_blocks_1[i]) {
    						each_blocks_1[i].p(child_ctx, dirty);
    					} else {
    						each_blocks_1[i] = create_each_block_4$2(child_ctx);
    						each_blocks_1[i].c();
    						each_blocks_1[i].m(div2, null);
    					}
    				}

    				for (; i < each_blocks_1.length; i += 1) {
    					each_blocks_1[i].d(1);
    				}

    				each_blocks_1.length = each_value_4.length;
    			}

    			if (dirty & /*rul*/ 0) {
    				each_value_3 = rul.sectionsOrder;
    				let i;

    				for (i = 0; i < each_value_3.length; i += 1) {
    					const child_ctx = get_each_context_3$4(ctx, each_value_3, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    					} else {
    						each_blocks[i] = create_each_block_3$4(child_ctx);
    						each_blocks[i].c();
    						each_blocks[i].m(div3, null);
    					}
    				}

    				for (; i < each_blocks.length; i += 1) {
    					each_blocks[i].d(1);
    				}

    				each_blocks.length = each_value_3.length;
    			}

    			if (!current || dirty[0] & /*showDropdown*/ 1024 && div5_style_value !== (div5_style_value = /*showDropdown*/ ctx[10]
    			? "visibility:visible"
    			: "visibility:hidden")) {
    				attr_dev(div5, "style", div5_style_value);
    			}

    			if ((!current || dirty[0] & /*currentSection*/ 8) && t12_value !== (t12_value = (/*currentSection*/ ctx[3]
    			? /*currentSection*/ ctx[3].title
    			: "") + "")) set_data_dev(t12, t12_value);

    			if (!current || dirty[0] & /*currentSection*/ 8 && a1_href_value !== (a1_href_value = "##" + (/*currentSection*/ ctx[3]
    			? /*currentSection*/ ctx[3].id
    			: "MAIN"))) {
    				attr_dev(a1, "href", a1_href_value);
    			}

    			if (rul.config && rul.config.languages && rul.config.languages.length > 1) if_block0.p(ctx, dirty);
    			if (/*allowHugeFont*/ ctx[15]) if_block1.p(ctx, dirty);

    			if (dirty[0] & /*query*/ 4 && input.value !== /*query*/ ctx[2]) {
    				set_input_value(input, /*query*/ ctx[2]);
    			}

    			if (/*seeSide*/ ctx[8]) {
    				if (if_block2) {
    					if_block2.p(ctx, dirty);
    				} else {
    					if_block2 = create_if_block_6$4(ctx);
    					if_block2.c();
    					if_block2.m(t18.parentNode, t18);
    				}
    			} else if (if_block2) {
    				if_block2.d(1);
    				if_block2 = null;
    			}

    			if (!current || dirty[0] & /*seeSide*/ 256 && button_style_value !== (button_style_value = /*seeSide*/ ctx[8] ? "" : "left:1em;")) {
    				attr_dev(button, "style", button_style_value);
    			}

    			let previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type_1(ctx);

    			if (current_block_type_index === previous_block_index) {
    				if (~current_block_type_index) {
    					if_blocks[current_block_type_index].p(ctx, dirty);
    				}
    			} else {
    				if (if_block3) {
    					group_outros();

    					transition_out(if_blocks[previous_block_index], 1, 1, () => {
    						if_blocks[previous_block_index] = null;
    					});

    					check_outros();
    				}

    				if (~current_block_type_index) {
    					if_block3 = if_blocks[current_block_type_index];

    					if (!if_block3) {
    						if_block3 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    						if_block3.c();
    					}

    					transition_in(if_block3, 1);
    					if_block3.m(div9, null);
    				} else {
    					if_block3 = null;
    				}
    			}

    			if (!current || dirty[0] & /*seeSide*/ 256 && div9_style_value !== (div9_style_value = /*seeSide*/ ctx[8] ? "" : "padding-left:3rem;")) {
    				attr_dev(div9, "style", div9_style_value);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block3);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block3);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(nav);
    			destroy_each(each_blocks_1, detaching);
    			destroy_each(each_blocks, detaching);
    			if (if_block0) if_block0.d();
    			if (if_block1) if_block1.d();
    			if (detaching) detach_dev(t17);
    			if (if_block2) if_block2.d(detaching);
    			if (detaching) detach_dev(t18);
    			if (detaching) detach_dev(button);
    			if (detaching) detach_dev(t20);
    			if (detaching) detach_dev(div9);

    			if (~current_block_type_index) {
    				if_blocks[current_block_type_index].d();
    			}

    			if (detaching) detach_dev(t21);
    			if (detaching) detach_dev(div10);
    			/*div10_binding*/ ctx[40](null);
    			run_all(dispose);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_then_block.name,
    		type: "then",
    		source: "(186:0) {:then}",
    		ctx
    	});

    	return block;
    }

    // (213:12) {#each rul.typeSectionsOrder as section, i}
    function create_each_block_4$2(ctx) {
    	let a;
    	let t_value = /*section*/ ctx[41].title + "";
    	let t;
    	let a_href_value;

    	const block = {
    		c: function create() {
    			a = element("a");
    			t = text(t_value);
    			attr_dev(a, "href", a_href_value = "##" + /*section*/ ctx[41].id);
    			add_location(a, file$l, 213, 14, 5145);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, a, anchor);
    			append_dev(a, t);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(a);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block_4$2.name,
    		type: "each",
    		source: "(213:12) {#each rul.typeSectionsOrder as section, i}",
    		ctx
    	});

    	return block;
    }

    // (218:12) {#each rul.sectionsOrder as section, i}
    function create_each_block_3$4(ctx) {
    	let a;
    	let t_value = /*section*/ ctx[41].title + "";
    	let t;
    	let a_href_value;

    	const block = {
    		c: function create() {
    			a = element("a");
    			t = text(t_value);
    			attr_dev(a, "href", a_href_value = "##" + /*section*/ ctx[41].id);
    			add_location(a, file$l, 218, 14, 5346);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, a, anchor);
    			append_dev(a, t);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(a);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block_3$4.name,
    		type: "each",
    		source: "(218:12) {#each rul.sectionsOrder as section, i}",
    		ctx
    	});

    	return block;
    }

    // (235:4) {#if rul.config && rul.config.languages && rul.config.languages.length > 1}
    function create_if_block_10$3(ctx) {
    	let div2;
    	let div0;
    	let big;
    	let t1;
    	let div1;
    	let div1_style_value;
    	let dispose;
    	let each_value_2 = rul.config.languages;
    	let each_blocks = [];

    	for (let i = 0; i < each_value_2.length; i += 1) {
    		each_blocks[i] = create_each_block_2$7(get_each_context_2$7(ctx, each_value_2, i));
    	}

    	const block = {
    		c: function create() {
    			div2 = element("div");
    			div0 = element("div");
    			big = element("big");
    			big.textContent = "Aあ";
    			t1 = space();
    			div1 = element("div");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			add_location(big, file$l, 242, 10, 6100);
    			attr_dev(div0, "class", "navbar-button");
    			add_location(div0, file$l, 239, 8, 5973);
    			attr_dev(div1, "class", "navbar-dropdown");

    			attr_dev(div1, "style", div1_style_value = /*showLanguagesDropdown*/ ctx[11]
    			? "visibility:visible"
    			: "visibility:hidden");

    			add_location(div1, file$l, 244, 8, 6137);
    			attr_dev(div2, "class", "navbar-dropdown-container");
    			add_location(div2, file$l, 235, 6, 5775);

    			dispose = [
    				listen_dev(div0, "mousedown", /*mousedown_handler_1*/ ctx[29], false, false, false),
    				listen_dev(div2, "mouseover", /*mouseover_handler_1*/ ctx[30], false, false, false),
    				listen_dev(div2, "mouseout", /*mouseout_handler_1*/ ctx[31], false, false, false)
    			];
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div2, anchor);
    			append_dev(div2, div0);
    			append_dev(div0, big);
    			append_dev(div2, t1);
    			append_dev(div2, div1);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(div1, null);
    			}
    		},
    		p: function update(ctx, dirty) {
    			if (dirty[0] & /*id*/ 64) {
    				each_value_2 = rul.config.languages;
    				let i;

    				for (i = 0; i < each_value_2.length; i += 1) {
    					const child_ctx = get_each_context_2$7(ctx, each_value_2, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    					} else {
    						each_blocks[i] = create_each_block_2$7(child_ctx);
    						each_blocks[i].c();
    						each_blocks[i].m(div1, null);
    					}
    				}

    				for (; i < each_blocks.length; i += 1) {
    					each_blocks[i].d(1);
    				}

    				each_blocks.length = each_value_2.length;
    			}

    			if (dirty[0] & /*showLanguagesDropdown*/ 2048 && div1_style_value !== (div1_style_value = /*showLanguagesDropdown*/ ctx[11]
    			? "visibility:visible"
    			: "visibility:hidden")) {
    				attr_dev(div1, "style", div1_style_value);
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div2);
    			destroy_each(each_blocks, detaching);
    			run_all(dispose);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_10$3.name,
    		type: "if",
    		source: "(235:4) {#if rul.config && rul.config.languages && rul.config.languages.length > 1}",
    		ctx
    	});

    	return block;
    }

    // (248:10) {#each rul.config.languages as lang}
    function create_each_block_2$7(ctx) {
    	let a;
    	let t_value = /*lang*/ ctx[47].name + "";
    	let t;
    	let a_href_value;

    	const block = {
    		c: function create() {
    			a = element("a");
    			t = text(t_value);
    			attr_dev(a, "href", a_href_value = "" + (/*lang*/ ctx[47].save_as + "##" + /*id*/ ctx[6]));
    			add_location(a, file$l, 248, 12, 6321);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, a, anchor);
    			append_dev(a, t);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty[0] & /*id*/ 64 && a_href_value !== (a_href_value = "" + (/*lang*/ ctx[47].save_as + "##" + /*id*/ ctx[6]))) {
    				attr_dev(a, "href", a_href_value);
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(a);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block_2$7.name,
    		type: "each",
    		source: "(248:10) {#each rul.config.languages as lang}",
    		ctx
    	});

    	return block;
    }

    // (255:4) {#if allowHugeFont}
    function create_if_block_9$3(ctx) {
    	let button;
    	let span0;
    	let t1;
    	let span1;
    	let dispose;

    	const block = {
    		c: function create() {
    			button = element("button");
    			span0 = element("span");
    			span0.textContent = "A";
    			t1 = space();
    			span1 = element("span");
    			span1.textContent = "A";
    			set_style(span0, "font-size", "150%");
    			add_location(span0, file$l, 256, 8, 6533);
    			set_style(span1, "font-size", "75%");
    			add_location(span1, file$l, 257, 8, 6579);
    			attr_dev(button, "class", "navbar-button");
    			add_location(button, file$l, 255, 6, 6455);
    			dispose = listen_dev(button, "click", /*click_handler*/ ctx[32], false, false, false);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, button, anchor);
    			append_dev(button, span0);
    			append_dev(button, t1);
    			append_dev(button, span1);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(button);
    			dispose();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_9$3.name,
    		type: "if",
    		source: "(255:4) {#if allowHugeFont}",
    		ctx
    	});

    	return block;
    }

    // (273:2) {#if seeSide}
    function create_if_block_6$4(ctx) {
    	let nav;
    	let button;
    	let t0_value = rul.str("A-Z") + "";
    	let t0;
    	let button_style_value;
    	let t1;
    	let t2;
    	let br;
    	let dispose;

    	let each_value = /*article*/ ctx[0] && /*article*/ ctx[0].section && /*article*/ ctx[0].section.isType()
    	? rul.typeSectionsOrder
    	: rul.sectionsOrder;

    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block$h(get_each_context$h(ctx, each_value, i));
    	}

    	const block = {
    		c: function create() {
    			nav = element("nav");
    			button = element("button");
    			t0 = text(t0_value);
    			t1 = space();

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			t2 = space();
    			br = element("br");
    			attr_dev(button, "class", "side-sort-button");

    			attr_dev(button, "style", button_style_value = /*sortArticles*/ ctx[13]
    			? ""
    			: "text-decoration:line-through");

    			add_location(button, file$l, 275, 6, 6905);
    			add_location(br, file$l, 306, 6, 8051);
    			attr_dev(nav, "class", "sidebar");
    			add_location(nav, file$l, 273, 4, 6876);
    			dispose = listen_dev(button, "click", /*click_handler_1*/ ctx[34], false, false, false);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, nav, anchor);
    			append_dev(nav, button);
    			append_dev(button, t0);
    			append_dev(nav, t1);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(nav, null);
    			}

    			append_dev(nav, t2);
    			append_dev(nav, br);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty[0] & /*sortArticles*/ 8192 && button_style_value !== (button_style_value = /*sortArticles*/ ctx[13]
    			? ""
    			: "text-decoration:line-through")) {
    				attr_dev(button, "style", button_style_value);
    			}

    			if (dirty[0] & /*currentSection, article, sortedArticles, activeOption, ignoreNextAutoscroll*/ 16441) {
    				each_value = /*article*/ ctx[0] && /*article*/ ctx[0].section && /*article*/ ctx[0].section.isType()
    				? rul.typeSectionsOrder
    				: rul.sectionsOrder;

    				let i;

    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context$h(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    					} else {
    						each_blocks[i] = create_each_block$h(child_ctx);
    						each_blocks[i].c();
    						each_blocks[i].m(nav, t2);
    					}
    				}

    				for (; i < each_blocks.length; i += 1) {
    					each_blocks[i].d(1);
    				}

    				each_blocks.length = each_value.length;
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(nav);
    			destroy_each(each_blocks, detaching);
    			dispose();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_6$4.name,
    		type: "if",
    		source: "(273:2) {#if seeSide}",
    		ctx
    	});

    	return block;
    }

    // (284:8) {#if !currentSection || section.id == currentSection.id}
    function create_if_block_7$3(ctx) {
    	let p;
    	let t0_value = /*section*/ ctx[41].title + "";
    	let t0;
    	let t1;
    	let div;
    	let each_value_1 = /*sortedArticles*/ ctx[14](/*section*/ ctx[41].articles);
    	let each_blocks = [];

    	for (let i = 0; i < each_value_1.length; i += 1) {
    		each_blocks[i] = create_each_block_1$7(get_each_context_1$7(ctx, each_value_1, i));
    	}

    	const block = {
    		c: function create() {
    			p = element("p");
    			t0 = text(t0_value);
    			t1 = space();
    			div = element("div");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			attr_dev(p, "class", "menu-label");
    			add_location(p, file$l, 284, 10, 7310);
    			attr_dev(div, "class", "menu-list");
    			add_location(div, file$l, 285, 10, 7362);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, p, anchor);
    			append_dev(p, t0);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, div, anchor);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(div, null);
    			}
    		},
    		p: function update(ctx, dirty) {
    			if (dirty[0] & /*article*/ 1 && t0_value !== (t0_value = /*section*/ ctx[41].title + "")) set_data_dev(t0, t0_value);

    			if (dirty[0] & /*article, sortedArticles, activeOption, ignoreNextAutoscroll*/ 16433) {
    				each_value_1 = /*sortedArticles*/ ctx[14](/*section*/ ctx[41].articles);
    				let i;

    				for (i = 0; i < each_value_1.length; i += 1) {
    					const child_ctx = get_each_context_1$7(ctx, each_value_1, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    					} else {
    						each_blocks[i] = create_each_block_1$7(child_ctx);
    						each_blocks[i].c();
    						each_blocks[i].m(div, null);
    					}
    				}

    				for (; i < each_blocks.length; i += 1) {
    					each_blocks[i].d(1);
    				}

    				each_blocks.length = each_value_1.length;
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(p);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(div);
    			destroy_each(each_blocks, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_7$3.name,
    		type: "if",
    		source: "(284:8) {#if !currentSection || section.id == currentSection.id}",
    		ctx
    	});

    	return block;
    }

    // (295:14) {:else}
    function create_else_block_1$2(ctx) {
    	let a;
    	let t_value = /*option*/ ctx[44].title + "";
    	let t;
    	let a_href_value;
    	let dispose;

    	const block = {
    		c: function create() {
    			a = element("a");
    			t = text(t_value);
    			attr_dev(a, "class", "side-link");
    			attr_dev(a, "href", a_href_value = "##" + /*option*/ ctx[44].id);
    			add_location(a, file$l, 295, 16, 7759);
    			dispose = listen_dev(a, "click", /*click_handler_2*/ ctx[36], false, false, false);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, a, anchor);
    			append_dev(a, t);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty[0] & /*sortedArticles, article*/ 16385 && t_value !== (t_value = /*option*/ ctx[44].title + "")) set_data_dev(t, t_value);

    			if (dirty[0] & /*sortedArticles, article*/ 16385 && a_href_value !== (a_href_value = "##" + /*option*/ ctx[44].id)) {
    				attr_dev(a, "href", a_href_value);
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(a);
    			dispose();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block_1$2.name,
    		type: "else",
    		source: "(295:14) {:else}",
    		ctx
    	});

    	return block;
    }

    // (288:14) {#if article && article.id == option.id}
    function create_if_block_8$3(ctx) {
    	let a;
    	let t_value = /*option*/ ctx[44].title + "";
    	let t;
    	let a_href_value;

    	const block = {
    		c: function create() {
    			a = element("a");
    			t = text(t_value);
    			attr_dev(a, "href", a_href_value = "##" + /*option*/ ctx[44].id);
    			attr_dev(a, "class", "active-article-option side-link");
    			add_location(a, file$l, 288, 16, 7520);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, a, anchor);
    			append_dev(a, t);
    			/*a_binding*/ ctx[35](a);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty[0] & /*sortedArticles, article*/ 16385 && t_value !== (t_value = /*option*/ ctx[44].title + "")) set_data_dev(t, t_value);

    			if (dirty[0] & /*sortedArticles, article*/ 16385 && a_href_value !== (a_href_value = "##" + /*option*/ ctx[44].id)) {
    				attr_dev(a, "href", a_href_value);
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(a);
    			/*a_binding*/ ctx[35](null);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_8$3.name,
    		type: "if",
    		source: "(288:14) {#if article && article.id == option.id}",
    		ctx
    	});

    	return block;
    }

    // (287:12) {#each sortedArticles(section.articles) as option}
    function create_each_block_1$7(ctx) {
    	let if_block_anchor;

    	function select_block_type(ctx, dirty) {
    		if (/*article*/ ctx[0] && /*article*/ ctx[0].id == /*option*/ ctx[44].id) return create_if_block_8$3;
    		return create_else_block_1$2;
    	}

    	let current_block_type = select_block_type(ctx);
    	let if_block = current_block_type(ctx);

    	const block = {
    		c: function create() {
    			if_block.c();
    			if_block_anchor = empty();
    		},
    		m: function mount(target, anchor) {
    			if_block.m(target, anchor);
    			insert_dev(target, if_block_anchor, anchor);
    		},
    		p: function update(ctx, dirty) {
    			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
    				if_block.p(ctx, dirty);
    			} else {
    				if_block.d(1);
    				if_block = current_block_type(ctx);

    				if (if_block) {
    					if_block.c();
    					if_block.m(if_block_anchor.parentNode, if_block_anchor);
    				}
    			}
    		},
    		d: function destroy(detaching) {
    			if_block.d(detaching);
    			if (detaching) detach_dev(if_block_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block_1$7.name,
    		type: "each",
    		source: "(287:12) {#each sortedArticles(section.articles) as option}",
    		ctx
    	});

    	return block;
    }

    // (283:6) {#each article && article.section && article.section.isType() ? rul.typeSectionsOrder : rul.sectionsOrder as section}
    function create_each_block$h(ctx) {
    	let if_block_anchor;
    	let if_block = (!/*currentSection*/ ctx[3] || /*section*/ ctx[41].id == /*currentSection*/ ctx[3].id) && create_if_block_7$3(ctx);

    	const block = {
    		c: function create() {
    			if (if_block) if_block.c();
    			if_block_anchor = empty();
    		},
    		m: function mount(target, anchor) {
    			if (if_block) if_block.m(target, anchor);
    			insert_dev(target, if_block_anchor, anchor);
    		},
    		p: function update(ctx, dirty) {
    			if (!/*currentSection*/ ctx[3] || /*section*/ ctx[41].id == /*currentSection*/ ctx[3].id) {
    				if (if_block) {
    					if_block.p(ctx, dirty);
    				} else {
    					if_block = create_if_block_7$3(ctx);
    					if_block.c();
    					if_block.m(if_block_anchor.parentNode, if_block_anchor);
    				}
    			} else if (if_block) {
    				if_block.d(1);
    				if_block = null;
    			}
    		},
    		d: function destroy(detaching) {
    			if (if_block) if_block.d(detaching);
    			if (detaching) detach_dev(if_block_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block$h.name,
    		type: "each",
    		source: "(283:6) {#each article && article.section && article.section.isType() ? rul.typeSectionsOrder : rul.sectionsOrder as section}",
    		ctx
    	});

    	return block;
    }

    // (342:21) 
    function create_if_block_5$4(ctx) {
    	let current;
    	const intro = new Intro({ $$inline: true });

    	const block = {
    		c: function create() {
    			create_component(intro.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(intro, target, anchor);
    			current = true;
    		},
    		p: noop,
    		i: function intro$1(local) {
    			if (current) return;
    			transition_in(intro.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(intro.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(intro, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_5$4.name,
    		type: "if",
    		source: "(342:21) ",
    		ctx
    	});

    	return block;
    }

    // (328:20) 
    function create_if_block_1$d(ctx) {
    	let t0;
    	let em;
    	let t1;
    	let t2;
    	let br;
    	let t3;
    	let current_block_type_index;
    	let if_block;
    	let if_block_anchor;
    	let current;
    	const if_block_creators = [create_if_block_2$d, create_if_block_3$9, create_if_block_4$5, create_else_block$a];
    	const if_blocks = [];

    	function select_block_type_2(ctx, dirty) {
    		if (/*found*/ ctx[1] && /*found*/ ctx[1].length > 0) return 0;
    		if (/*query*/ ctx[2].length < 2) return 1;
    		if (/*searchDelayHandle*/ ctx[7]) return 2;
    		return 3;
    	}

    	current_block_type_index = select_block_type_2(ctx);
    	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

    	const block = {
    		c: function create() {
    			t0 = text("Searching \"\n      ");
    			em = element("em");
    			t1 = text(/*query*/ ctx[2]);
    			t2 = text("\n      \":\n      ");
    			br = element("br");
    			t3 = space();
    			if_block.c();
    			if_block_anchor = empty();
    			add_location(em, file$l, 329, 6, 8543);
    			add_location(br, file$l, 331, 6, 8575);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t0, anchor);
    			insert_dev(target, em, anchor);
    			append_dev(em, t1);
    			insert_dev(target, t2, anchor);
    			insert_dev(target, br, anchor);
    			insert_dev(target, t3, anchor);
    			if_blocks[current_block_type_index].m(target, anchor);
    			insert_dev(target, if_block_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (!current || dirty[0] & /*query*/ 4) set_data_dev(t1, /*query*/ ctx[2]);
    			let previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type_2(ctx);

    			if (current_block_type_index === previous_block_index) {
    				if_blocks[current_block_type_index].p(ctx, dirty);
    			} else {
    				group_outros();

    				transition_out(if_blocks[previous_block_index], 1, 1, () => {
    					if_blocks[previous_block_index] = null;
    				});

    				check_outros();
    				if_block = if_blocks[current_block_type_index];

    				if (!if_block) {
    					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    					if_block.c();
    				}

    				transition_in(if_block, 1);
    				if_block.m(if_block_anchor.parentNode, if_block_anchor);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t0);
    			if (detaching) detach_dev(em);
    			if (detaching) detach_dev(t2);
    			if (detaching) detach_dev(br);
    			if (detaching) detach_dev(t3);
    			if_blocks[current_block_type_index].d(detaching);
    			if (detaching) detach_dev(if_block_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_1$d.name,
    		type: "if",
    		source: "(328:20) ",
    		ctx
    	});

    	return block;
    }

    // (322:4) {#if article}
    function create_if_block$h(ctx) {
    	let current;

    	const article_1 = new Article$1({
    			props: {
    				article: /*article*/ ctx[0],
    				query: /*query*/ ctx[2]
    			},
    			$$inline: true
    		});

    	article_1.$on("prev", /*prev_handler*/ ctx[38]);
    	article_1.$on("next", /*next_handler*/ ctx[39]);

    	const block = {
    		c: function create() {
    			create_component(article_1.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(article_1, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const article_1_changes = {};
    			if (dirty[0] & /*article*/ 1) article_1_changes.article = /*article*/ ctx[0];
    			if (dirty[0] & /*query*/ 4) article_1_changes.query = /*query*/ ctx[2];
    			article_1.$set(article_1_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(article_1.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(article_1.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(article_1, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$h.name,
    		type: "if",
    		source: "(322:4) {#if article}",
    		ctx
    	});

    	return block;
    }

    // (339:6) {:else}
    function create_else_block$a(ctx) {
    	let i;

    	const block = {
    		c: function create() {
    			i = element("i");
    			i.textContent = "Nothing found";
    			add_location(i, file$l, 339, 8, 8790);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, i, anchor);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(i);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block$a.name,
    		type: "else",
    		source: "(339:6) {:else}",
    		ctx
    	});

    	return block;
    }

    // (337:34) 
    function create_if_block_4$5(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("...");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_4$5.name,
    		type: "if",
    		source: "(337:34) ",
    		ctx
    	});

    	return block;
    }

    // (335:33) 
    function create_if_block_3$9(ctx) {
    	let i;

    	const block = {
    		c: function create() {
    			i = element("i");
    			i.textContent = "Query too short";
    			add_location(i, file$l, 335, 8, 8698);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, i, anchor);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(i);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_3$9.name,
    		type: "if",
    		source: "(335:33) ",
    		ctx
    	});

    	return block;
    }

    // (333:6) {#if found && found.length > 0}
    function create_if_block_2$d(ctx) {
    	let current;

    	const linkspage = new LinksPage({
    			props: { links: /*found*/ ctx[1] },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(linkspage.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(linkspage, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const linkspage_changes = {};
    			if (dirty[0] & /*found*/ 2) linkspage_changes.links = /*found*/ ctx[1];
    			linkspage.$set(linkspage_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(linkspage.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(linkspage.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(linkspage, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_2$d.name,
    		type: "if",
    		source: "(333:6) {#if found && found.length > 0}",
    		ctx
    	});

    	return block;
    }

    // (180:20)    <div class="centered">     {rul.str('Loading...')}
    function create_pending_block(ctx) {
    	let div;
    	let t0_value = rul.str("Loading...") + "";
    	let t0;
    	let t1;
    	let hr;
    	let t2;
    	let img;
    	let img_alt_value;
    	let img_src_value;

    	const block = {
    		c: function create() {
    			div = element("div");
    			t0 = text(t0_value);
    			t1 = space();
    			hr = element("hr");
    			t2 = space();
    			img = element("img");
    			add_location(hr, file$l, 182, 4, 4053);
    			attr_dev(img, "alt", img_alt_value = rul.str("Loading..."));
    			if (img.src !== (img_src_value = "xpedia/spinner.svg")) attr_dev(img, "src", img_src_value);
    			add_location(img, file$l, 183, 4, 4064);
    			attr_dev(div, "class", "centered svelte-1bo6p5d");
    			add_location(div, file$l, 180, 2, 3998);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, t0);
    			append_dev(div, t1);
    			append_dev(div, hr);
    			append_dev(div, t2);
    			append_dev(div, img);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_pending_block.name,
    		type: "pending",
    		source: "(180:20)    <div class=\\\"centered\\\">     {rul.str('Loading...')}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$o(ctx) {
    	let if_block_anchor;
    	let t;
    	let await_block_anchor;
    	let promise;
    	let current;
    	let if_block = !/*article*/ ctx[0] && create_if_block_11$3(ctx);

    	let info = {
    		ctx,
    		current: null,
    		token: null,
    		pending: create_pending_block,
    		then: create_then_block,
    		catch: create_catch_block,
    		blocks: [,,,]
    	};

    	handle_promise(promise = /*rulesLoaded*/ ctx[17], info);

    	const block = {
    		c: function create() {
    			if (if_block) if_block.c();
    			if_block_anchor = empty();
    			t = space();
    			await_block_anchor = empty();
    			info.block.c();
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			if (if_block) if_block.m(document_1.head, null);
    			append_dev(document_1.head, if_block_anchor);
    			insert_dev(target, t, anchor);
    			insert_dev(target, await_block_anchor, anchor);
    			info.block.m(target, info.anchor = anchor);
    			info.mount = () => await_block_anchor.parentNode;
    			info.anchor = await_block_anchor;
    			current = true;
    		},
    		p: function update(new_ctx, dirty) {
    			ctx = new_ctx;

    			if (!/*article*/ ctx[0]) {
    				if (!if_block) {
    					if_block = create_if_block_11$3(ctx);
    					if_block.c();
    					if_block.m(if_block_anchor.parentNode, if_block_anchor);
    				}
    			} else if (if_block) {
    				if_block.d(1);
    				if_block = null;
    			}

    			{
    				const child_ctx = ctx.slice();
    				info.block.p(child_ctx, dirty);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(info.block);
    			current = true;
    		},
    		o: function outro(local) {
    			for (let i = 0; i < 3; i += 1) {
    				const block = info.blocks[i];
    				transition_out(block);
    			}

    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (if_block) if_block.d(detaching);
    			detach_dev(if_block_anchor);
    			if (detaching) detach_dev(t);
    			if (detaching) detach_dev(await_block_anchor);
    			info.block.d(detaching);
    			info.token = null;
    			info = null;
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$o.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function goTo(id) {
    	window.location.hash = "##" + id;
    }

    function instance$n($$self, $$props, $$invalidate) {
    	let { source } = $$props;
    	let article = null;
    	let found = null;
    	let query = "";
    	let currentSection = null;
    	let activeOption;
    	let ignoreNextAutoscroll = false;
    	let id = "";
    	let searchDelayHandle = null;
    	let seeSide = true;
    	let hugeFont = false;
    	let allowHugeFont = false;
    	let showDropdown = false;
    	let showLanguagesDropdown = false;
    	let tooltip;
    	let isTouch = "ontouchstart" in window;

    	async function loadRules() {
    		await rul.load(source);
    	}

    	let rulesLoaded = loadRules();

    	function checkHash() {
    		$$invalidate(10, showDropdown = $$invalidate(11, showLanguagesDropdown = false));
    		let hash = decodeURI(document.location.hash);
    		if (hash.substr(0, 2) != "##") return;
    		$$invalidate(6, id = hash.substr(2));

    		if (id == "MAIN") {
    			$$invalidate(2, query = "");
    		}

    		if (id) {
    			let dd = id.indexOf("::");

    			if (dd != -1) {
    				$$invalidate(2, query = id.substr(dd + 2));
    				$$invalidate(6, id = id.substr(0, dd));
    			}

    			if (id == "SEARCH") {
    				if (query.length >= 2) $$invalidate(1, found = rul.search.findArticles(query).map(a => a.id)); else $$invalidate(1, found = 0);
    				$$invalidate(0, article = null);
    			} else {
    				$$invalidate(1, found = null);
    				if (!article || article.id != id) $$invalidate(0, article = rul.article(id));
    			}

    			console.log(id);
    			console.log(article);
    		}

    		if (article) {
    			if (article.section && currentSection != article.section) $$invalidate(3, currentSection = article.section);
    		} else {
    			$$invalidate(3, currentSection = null);
    		}

    		if (activeOption) {
    			activeOption.scrollIntoView({ behavior: "auto", block: "center" });
    		}
    	}

    	function nextArticle(delta) {
    		let nextArticle = rul.findNextArticle(article, delta);

    		if (nextArticle) {
    			goTo(nextArticle.id);
    		}
    	}

    	document.addEventListener("keydown", event => {
    		const keyName = event.key;
    		if (keyName == "ArrowRight") nextArticle(1);
    		if (keyName == "ArrowLeft") nextArticle(-1);
    	});

    	function searchKeyUp(e) {
    		if (searchDelayHandle) clearTimeout(searchDelayHandle);

    		$$invalidate(7, searchDelayHandle = setTimeout(
    			() => {
    				goTo("SEARCH::" + e.target.value);
    				$$invalidate(7, searchDelayHandle = null);
    			},
    			e.key == "Enter" ? 10 : 1000
    		));
    	}

    	function selectSection(id) {
    		$$invalidate(3, currentSection = rul.sections[id]);
    	}

    	window.onhashchange = checkHash;
    	rulesLoaded.then(checkHash);
    	let sortArticles = false;

    	function dropdown(val = null) {
    		if (val === null) {
    			$$invalidate(10, showDropdown = !showDropdown);
    		} else {
    			if (!isTouch) $$invalidate(10, showDropdown = val);
    		}
    	}

    	window.addEventListener("mousemove", async e => {
    		if (tooltip) {
    			if (e.target.attributes.tooltip) {
    				let rect = e.target.getBoundingClientRect();
    				$$invalidate(12, tooltip.style.left = rect.left + rect.width / 2 + "px", tooltip);
    				$$invalidate(12, tooltip.style.top = rect.top + "px", tooltip);
    				let t = e.target.attributes.tooltip.value;
    				toggleTooltip(t in rul.lang && !e.shiftKey ? rul.lang[t] : t.substr(4));
    			} else {
    				toggleTooltip(null);
    			}
    		}
    	});

    	function toggleTooltip(text) {
    		$$invalidate(12, tooltip.innerHTML = text, tooltip);
    		let classes = tooltip.classList;

    		if (text) {
    			classes.add("visible");
    		} else {
    			classes.remove("visible");
    		}
    	}

    	const writable_props = ["source"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1$c.warn(`<App> was created with unknown prop '${key}'`);
    	});

    	const mousedown_handler = e => dropdown();
    	const mouseover_handler = e => dropdown(true);
    	const mouseout_handler = e => dropdown(false);
    	const mousedown_handler_1 = e => $$invalidate(11, showLanguagesDropdown = !showLanguagesDropdown);
    	const mouseover_handler_1 = e => !isTouch && $$invalidate(11, showLanguagesDropdown = true);
    	const mouseout_handler_1 = e => !isTouch && $$invalidate(11, showLanguagesDropdown = false);
    	const click_handler = e => $$invalidate(9, hugeFont = !hugeFont);

    	function input_input_handler() {
    		query = this.value;
    		$$invalidate(2, query);
    	}

    	const click_handler_1 = e => $$invalidate(13, sortArticles = !sortArticles);

    	function a_binding($$value) {
    		binding_callbacks[$$value ? "unshift" : "push"](() => {
    			$$invalidate(4, activeOption = $$value);
    		});
    	}

    	const click_handler_2 = () => $$invalidate(5, ignoreNextAutoscroll = true);

    	const click_handler_3 = e => {
    		if (e.button == 0) $$invalidate(8, seeSide = !seeSide);
    	};

    	const prev_handler = e => nextArticle(-1);
    	const next_handler = e => nextArticle(1);

    	function div10_binding($$value) {
    		binding_callbacks[$$value ? "unshift" : "push"](() => {
    			$$invalidate(12, tooltip = $$value);
    		});
    	}

    	$$self.$set = $$props => {
    		if ("source" in $$props) $$invalidate(21, source = $$props.source);
    	};

    	$$self.$capture_state = () => {
    		return {
    			source,
    			article,
    			found,
    			query,
    			currentSection,
    			activeOption,
    			ignoreNextAutoscroll,
    			id,
    			searchDelayHandle,
    			seeSide,
    			hugeFont,
    			allowHugeFont,
    			showDropdown,
    			showLanguagesDropdown,
    			tooltip,
    			isTouch,
    			rulesLoaded,
    			sortArticles,
    			sortedArticles
    		};
    	};

    	$$self.$inject_state = $$props => {
    		if ("source" in $$props) $$invalidate(21, source = $$props.source);
    		if ("article" in $$props) $$invalidate(0, article = $$props.article);
    		if ("found" in $$props) $$invalidate(1, found = $$props.found);
    		if ("query" in $$props) $$invalidate(2, query = $$props.query);
    		if ("currentSection" in $$props) $$invalidate(3, currentSection = $$props.currentSection);
    		if ("activeOption" in $$props) $$invalidate(4, activeOption = $$props.activeOption);
    		if ("ignoreNextAutoscroll" in $$props) $$invalidate(5, ignoreNextAutoscroll = $$props.ignoreNextAutoscroll);
    		if ("id" in $$props) $$invalidate(6, id = $$props.id);
    		if ("searchDelayHandle" in $$props) $$invalidate(7, searchDelayHandle = $$props.searchDelayHandle);
    		if ("seeSide" in $$props) $$invalidate(8, seeSide = $$props.seeSide);
    		if ("hugeFont" in $$props) $$invalidate(9, hugeFont = $$props.hugeFont);
    		if ("allowHugeFont" in $$props) $$invalidate(15, allowHugeFont = $$props.allowHugeFont);
    		if ("showDropdown" in $$props) $$invalidate(10, showDropdown = $$props.showDropdown);
    		if ("showLanguagesDropdown" in $$props) $$invalidate(11, showLanguagesDropdown = $$props.showLanguagesDropdown);
    		if ("tooltip" in $$props) $$invalidate(12, tooltip = $$props.tooltip);
    		if ("isTouch" in $$props) $$invalidate(16, isTouch = $$props.isTouch);
    		if ("rulesLoaded" in $$props) $$invalidate(17, rulesLoaded = $$props.rulesLoaded);
    		if ("sortArticles" in $$props) $$invalidate(13, sortArticles = $$props.sortArticles);
    		if ("sortedArticles" in $$props) $$invalidate(14, sortedArticles = $$props.sortedArticles);
    	};

    	let sortedArticles;

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty[0] & /*article*/ 1) {
    			$: {
    				console.info(article || "no article");
    			}
    		}

    		if ($$self.$$.dirty[0] & /*sortArticles*/ 8192) {
    			$: $$invalidate(14, sortedArticles = articles => sortArticles
    			? articles.slice().sort((a, b) => a.title > b.title ? 1 : -1)
    			: articles);
    		}
    	};

    	return [
    		article,
    		found,
    		query,
    		currentSection,
    		activeOption,
    		ignoreNextAutoscroll,
    		id,
    		searchDelayHandle,
    		seeSide,
    		hugeFont,
    		showDropdown,
    		showLanguagesDropdown,
    		tooltip,
    		sortArticles,
    		sortedArticles,
    		allowHugeFont,
    		isTouch,
    		rulesLoaded,
    		nextArticle,
    		searchKeyUp,
    		dropdown,
    		source,
    		loadRules,
    		checkHash,
    		selectSection,
    		toggleTooltip,
    		mousedown_handler,
    		mouseover_handler,
    		mouseout_handler,
    		mousedown_handler_1,
    		mouseover_handler_1,
    		mouseout_handler_1,
    		click_handler,
    		input_input_handler,
    		click_handler_1,
    		a_binding,
    		click_handler_2,
    		click_handler_3,
    		prev_handler,
    		next_handler,
    		div10_binding
    	];
    }

    class App extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$n, create_fragment$o, safe_not_equal, { source: 21 }, [-1, -1]);

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "App",
    			options,
    			id: create_fragment$o.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || ({});

    		if (/*source*/ ctx[21] === undefined && !("source" in props)) {
    			console_1$c.warn("<App> was created without expected prop 'source'");
    		}
    	}

    	get source() {
    		throw new Error("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set source(value) {
    		throw new Error("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    function unescape(s) {
      let lookup = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">"
      };
      return s.replace(/&amp;|&quot;|&lt;|&gt;/g, c => lookup[c]);
    }

    window.onload = function() {
      let rulesText = unescape(document.body.textContent);
      document.body.innerHTML = "";
      document.body.style.display = "block";

      new Ruleset();
      app = new App({
        props: { source: rulesText },
        target: document.body
      });
    };

    return app;

}());
