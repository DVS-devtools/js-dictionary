// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"Focm":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @class Dictionary
 * @description Library to get Dictionary values
 */
var Dictionary =
/*#__PURE__*/
function () {
  function Dictionary() {
    _classCallCheck(this, Dictionary);

    this.get = this.get.bind(this);
    this.list = this.list.bind(this);
  }
  /**
   * @memberOf Dictionary
   * @function init
   * @description Initialize the Dictionary class
   * @param {Object} options (see attributes below)
   * @param {Object} [options.dict = {}] dictionary object with the required translations
   * @param {String} [options.showKey = 'all'] flag to specify the behaviour
   * when no key is found:
   * 'all' = Show always the key (debug purpose);
   * 'missing' = Show the key only if no translation is found
   * false | null = Show empty string if no translation is found
   * @example
   * Dictionary.init({
   *     dict: dictObject,
   *     showKey: false
   * });
   */


  _createClass(Dictionary, [{
    key: "init",
    value: function init() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        dict: {},
        showKey: 'all'
      };

      if (options) {
        this.parameters = options;
      }
    }
    /**
     * @memberOf Dictionary
     * @function get
     * @description Search the given key,
     * return based on the showKey value
     * @see init
     * @param {String} key
     * @returns {*}
     */

  }, {
    key: "get",
    value: function get(key) {
      // convert key to upper case
      key = key.toUpperCase();

      if (this.parameters.showKey === 'all') {
        // 'all case':
        // valued keys : show key name
        // void keys : show key name
        return "[[".concat(key, "]]");
      }

      if (this.parameters.showKey === 'missing') {
        // 'missing' case:
        // valued keys : show value of key
        // void keys : show key name
        if (this.parameters.dict[key]) {
          return this.parameters.dict[key];
        }

        return "[[".concat(key, "]]");
      } // standard case
      // valued keys : show value of key
      // void keys : show void string


      if (this.parameters.dict[key]) {
        return this.parameters.dict[key];
      }

      return '';
    }
    /**
     * @memberOf Dictionary
     * @function list
     * @description Returns the entire dict object
     * @returns {Dictionary.options.dict|{}}
     */

  }, {
    key: "list",
    value: function list() {
      return this.parameters.dict;
    }
  }]);

  return Dictionary;
}();

var _default = new Dictionary();

exports.default = _default;
},{}]},{},["Focm"], null)