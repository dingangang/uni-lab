(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],[
/* 0 */
/*!***********************************!*\
  !*** C:/works/lab-mobile/main.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createApp) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 5));
var _vant = _interopRequireDefault(__webpack_require__(/*! vant */ 11));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}


_vue.default.use(_vant.default);

_vue.default.config.productionTip = false;

_App.default.mpType = 'app';

var app = new _vue.default(_objectSpread({},
_App.default));

createApp(app).$mount();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createApp"]))

/***/ }),
/* 1 */
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance");}function _iterableToArrayLimit(arr, i) {var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter) {if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) {for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {arr2[i] = arr[i];}return arr2;}}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.then(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return res.then(function (res) {
      return res[1];
    }).catch(function (res) {
      return res[0];
    });
  } };


var SYNC_API_RE =
/^\$|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/;

var CONTEXT_API_RE = /^create|Manager$/;

var CALLBACK_API_RE = /^on/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name);
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name);
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name);
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
      /* eslint-disable no-extend-native */
      if (!Promise.prototype.finally) {
        Promise.prototype.finally = function (callback) {
          var promise = this.constructor;
          return this.then(
          function (value) {return promise.resolve(callback()).then(function () {return value;});},
          function (reason) {return promise.resolve(callback()).then(function () {
              throw reason;
            });});

        };
      }
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      return 1;
    } else {
      return 0.5;
    }
  }
  return number < 0 ? -result : result;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };




var baseApi = /*#__PURE__*/Object.freeze({
  upx2px: upx2px,
  interceptors: interceptors,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor });


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


var protocols = {
  previewImage: previewImage };

var todos = [];
var canIUses = [];

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F ".concat(methodName, "\u6682\u4E0D\u652F\u6301").concat(key));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F \u6682\u4E0D\u652F\u6301".concat(methodName));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      var returnValue = wx[options.name || methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail:\u6682\u4E0D\u652F\u6301 ").concat(name, " \u65B9\u6CD5") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail:服务[' + service + ']不存在' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  getProvider: getProvider });


var getEmitter = function () {
  if (typeof getUniEmitter === 'function') {
    /* eslint-disable no-undef */
    return getUniEmitter;
  }
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });




var api = /*#__PURE__*/Object.freeze({});



var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  {
    if (!wx.canIUse('nextTick')) {
      return;
    }
  }
  var oldTriggerEvent = mpInstance.triggerEvent;
  mpInstance.triggerEvent = function (event) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
}

function initHook(name, options) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {args[_key4] = arguments[_key4];}
      return oldHook.apply(this, args);
    };
  }
}

Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('onLoad', options);
  return MPPage(options);
};

Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('created', options);
  return MPComponent(options);
};

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
    vueOptions = VueComponent.extendOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions['behaviors'];
  var vueExtends = vueOptions['extends'];
  var vueMixins = vueOptions['mixins'];

  var vueProps = vueOptions['props'];

  if (!vueProps) {
    vueOptions['props'] = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps['name'] = {
            type: String,
            default: '' };

          vueProps['value'] = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts['default'];
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor = dataPath ? vm.__get_value(dataPath, context) : context;

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function handleEvent(event) {var _this = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn("\u4E8B\u4EF6\u4FE1\u606F\u4E0D\u5B58\u5728");
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn("\u4E8B\u4EF6\u4FE1\u606F\u4E0D\u5B58\u5728");
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this.$vm;
          if (
          handlerCtx.$options.generic &&
          handlerCtx.$parent &&
          handlerCtx.$parent.$parent)
          {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = handlerCtx.$parent.$parent;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          ret.push(handler.apply(handlerCtx, processEventArgs(
          _this.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName)));

        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound'];


function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  _vue.default.prototype.mpHost = "mp-weixin";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;

      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (!wx.canIUse('nextTick')) {// 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};

  initHooks(appOptions, hooks);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属
  var parentVm = $children.find(function (childVm) {return childVm.$scope._$vueId === vuePid;});
  if (parentVm) {
    return parentVm;
  }
  // 反向递归查找
  for (var i = $children.length - 1; i >= 0; i--) {
    parentVm = findVmByVueId($children[i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      var components = mpInstance.selectAllComponents('.vue-ref');
      components.forEach(function (component) {
        var ref = component.dataset.ref;
        $refs[ref] = component.$vm || component;
      });
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

function createApp(vm) {
  App(parseApp(vm));
  return vm;
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref5.isPage,initRelation = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var componentOptions = {
    options: {
      multipleSlots: true,
      addGlobalClass: true },

    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };



  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (args) {
    this.$vm.$mp.query = args; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', args);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;

/***/ }),
/* 2 */
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    {
      if(vm.$scope && vm.$scope.is){
        return vm.$scope.is
      }
    }
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
Dep.target = null;
var targetStack = [];

function pushTarget (target) {
  targetStack.push(target);
  Dep.target = target;
}

function popTarget () {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Techinically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length));
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a speical value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack becaues all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu'){//百度 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    vm.mpHost !== 'mp-toutiao' && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    vm.mpHost !== 'mp-toutiao' && initProvide(vm); // resolve provide after data/props
    vm.mpHost !== 'mp-toutiao' && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.10';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue != pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);
  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  vm.mpHost !== 'mp-toutiao' && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err) {
    console.error(err);
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      this.$scope['triggerEvent'](event, {
        __args__: toArray(arguments, 1)
      });
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope) {
        return this.$scope[method](args)
      }
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string,number
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onError',
    //Page
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),
/* 3 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 4 */
/*!**************************************!*\
  !*** C:/works/lab-mobile/pages.json ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 11 */
/*!*********************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, "ActionSheet", { enumerable: true, get: function get() {return _actionSheet.default;} });Object.defineProperty(exports, "AddressEdit", { enumerable: true, get: function get() {return _addressEdit.default;} });Object.defineProperty(exports, "AddressList", { enumerable: true, get: function get() {return _addressList.default;} });Object.defineProperty(exports, "Area", { enumerable: true, get: function get() {return _area.default;} });Object.defineProperty(exports, "Button", { enumerable: true, get: function get() {return _button.default;} });Object.defineProperty(exports, "Card", { enumerable: true, get: function get() {return _card.default;} });Object.defineProperty(exports, "Cell", { enumerable: true, get: function get() {return _cell.default;} });Object.defineProperty(exports, "CellGroup", { enumerable: true, get: function get() {return _cellGroup.default;} });Object.defineProperty(exports, "Checkbox", { enumerable: true, get: function get() {return _checkbox.default;} });Object.defineProperty(exports, "CheckboxGroup", { enumerable: true, get: function get() {return _checkboxGroup.default;} });Object.defineProperty(exports, "Circle", { enumerable: true, get: function get() {return _circle.default;} });Object.defineProperty(exports, "Col", { enumerable: true, get: function get() {return _col.default;} });Object.defineProperty(exports, "Collapse", { enumerable: true, get: function get() {return _collapse.default;} });Object.defineProperty(exports, "CollapseItem", { enumerable: true, get: function get() {return _collapseItem.default;} });Object.defineProperty(exports, "ContactCard", { enumerable: true, get: function get() {return _contactCard.default;} });Object.defineProperty(exports, "ContactEdit", { enumerable: true, get: function get() {return _contactEdit.default;} });Object.defineProperty(exports, "ContactList", { enumerable: true, get: function get() {return _contactList.default;} });Object.defineProperty(exports, "CountDown", { enumerable: true, get: function get() {return _countDown.default;} });Object.defineProperty(exports, "Coupon", { enumerable: true, get: function get() {return _coupon.default;} });Object.defineProperty(exports, "CouponCell", { enumerable: true, get: function get() {return _couponCell.default;} });Object.defineProperty(exports, "CouponList", { enumerable: true, get: function get() {return _couponList.default;} });Object.defineProperty(exports, "DatetimePicker", { enumerable: true, get: function get() {return _datetimePicker.default;} });Object.defineProperty(exports, "Dialog", { enumerable: true, get: function get() {return _dialog.default;} });Object.defineProperty(exports, "Divider", { enumerable: true, get: function get() {return _divider.default;} });Object.defineProperty(exports, "DropdownItem", { enumerable: true, get: function get() {return _dropdownItem.default;} });Object.defineProperty(exports, "DropdownMenu", { enumerable: true, get: function get() {return _dropdownMenu.default;} });Object.defineProperty(exports, "Field", { enumerable: true, get: function get() {return _field.default;} });Object.defineProperty(exports, "GoodsAction", { enumerable: true, get: function get() {return _goodsAction.default;} });Object.defineProperty(exports, "GoodsActionButton", { enumerable: true, get: function get() {return _goodsActionButton.default;} });Object.defineProperty(exports, "GoodsActionIcon", { enumerable: true, get: function get() {return _goodsActionIcon.default;} });Object.defineProperty(exports, "Grid", { enumerable: true, get: function get() {return _grid.default;} });Object.defineProperty(exports, "GridItem", { enumerable: true, get: function get() {return _gridItem.default;} });Object.defineProperty(exports, "Icon", { enumerable: true, get: function get() {return _icon.default;} });Object.defineProperty(exports, "Image", { enumerable: true, get: function get() {return _image.default;} });Object.defineProperty(exports, "ImagePreview", { enumerable: true, get: function get() {return _imagePreview.default;} });Object.defineProperty(exports, "IndexAnchor", { enumerable: true, get: function get() {return _indexAnchor.default;} });Object.defineProperty(exports, "IndexBar", { enumerable: true, get: function get() {return _indexBar.default;} });Object.defineProperty(exports, "Info", { enumerable: true, get: function get() {return _info.default;} });Object.defineProperty(exports, "Lazyload", { enumerable: true, get: function get() {return _lazyload.default;} });Object.defineProperty(exports, "List", { enumerable: true, get: function get() {return _list.default;} });Object.defineProperty(exports, "Loading", { enumerable: true, get: function get() {return _loading.default;} });Object.defineProperty(exports, "Locale", { enumerable: true, get: function get() {return _locale.default;} });Object.defineProperty(exports, "NavBar", { enumerable: true, get: function get() {return _navBar.default;} });Object.defineProperty(exports, "NoticeBar", { enumerable: true, get: function get() {return _noticeBar.default;} });Object.defineProperty(exports, "Notify", { enumerable: true, get: function get() {return _notify.default;} });Object.defineProperty(exports, "NumberKeyboard", { enumerable: true, get: function get() {return _numberKeyboard.default;} });Object.defineProperty(exports, "Overlay", { enumerable: true, get: function get() {return _overlay.default;} });Object.defineProperty(exports, "Pagination", { enumerable: true, get: function get() {return _pagination.default;} });Object.defineProperty(exports, "Panel", { enumerable: true, get: function get() {return _panel.default;} });Object.defineProperty(exports, "PasswordInput", { enumerable: true, get: function get() {return _passwordInput.default;} });Object.defineProperty(exports, "Picker", { enumerable: true, get: function get() {return _picker.default;} });Object.defineProperty(exports, "Popup", { enumerable: true, get: function get() {return _popup.default;} });Object.defineProperty(exports, "Progress", { enumerable: true, get: function get() {return _progress.default;} });Object.defineProperty(exports, "PullRefresh", { enumerable: true, get: function get() {return _pullRefresh.default;} });Object.defineProperty(exports, "Radio", { enumerable: true, get: function get() {return _radio.default;} });Object.defineProperty(exports, "RadioGroup", { enumerable: true, get: function get() {return _radioGroup.default;} });Object.defineProperty(exports, "Rate", { enumerable: true, get: function get() {return _rate.default;} });Object.defineProperty(exports, "Row", { enumerable: true, get: function get() {return _row.default;} });Object.defineProperty(exports, "Search", { enumerable: true, get: function get() {return _search.default;} });Object.defineProperty(exports, "Sidebar", { enumerable: true, get: function get() {return _sidebar.default;} });Object.defineProperty(exports, "SidebarItem", { enumerable: true, get: function get() {return _sidebarItem.default;} });Object.defineProperty(exports, "Skeleton", { enumerable: true, get: function get() {return _skeleton.default;} });Object.defineProperty(exports, "Sku", { enumerable: true, get: function get() {return _sku.default;} });Object.defineProperty(exports, "Slider", { enumerable: true, get: function get() {return _slider.default;} });Object.defineProperty(exports, "Step", { enumerable: true, get: function get() {return _step.default;} });Object.defineProperty(exports, "Stepper", { enumerable: true, get: function get() {return _stepper.default;} });Object.defineProperty(exports, "Steps", { enumerable: true, get: function get() {return _steps.default;} });Object.defineProperty(exports, "Sticky", { enumerable: true, get: function get() {return _sticky.default;} });Object.defineProperty(exports, "SubmitBar", { enumerable: true, get: function get() {return _submitBar.default;} });Object.defineProperty(exports, "Swipe", { enumerable: true, get: function get() {return _swipe.default;} });Object.defineProperty(exports, "SwipeCell", { enumerable: true, get: function get() {return _swipeCell.default;} });Object.defineProperty(exports, "SwipeItem", { enumerable: true, get: function get() {return _swipeItem.default;} });Object.defineProperty(exports, "Switch", { enumerable: true, get: function get() {return _switch.default;} });Object.defineProperty(exports, "SwitchCell", { enumerable: true, get: function get() {return _switchCell.default;} });Object.defineProperty(exports, "Tab", { enumerable: true, get: function get() {return _tab.default;} });Object.defineProperty(exports, "Tabbar", { enumerable: true, get: function get() {return _tabbar.default;} });Object.defineProperty(exports, "TabbarItem", { enumerable: true, get: function get() {return _tabbarItem.default;} });Object.defineProperty(exports, "Tabs", { enumerable: true, get: function get() {return _tabs.default;} });Object.defineProperty(exports, "Tag", { enumerable: true, get: function get() {return _tag.default;} });Object.defineProperty(exports, "Toast", { enumerable: true, get: function get() {return _toast.default;} });Object.defineProperty(exports, "TreeSelect", { enumerable: true, get: function get() {return _treeSelect.default;} });Object.defineProperty(exports, "Uploader", { enumerable: true, get: function get() {return _uploader.default;} });exports.default = exports.version = exports.install = void 0;
var _actionSheet = _interopRequireDefault(__webpack_require__(/*! ./action-sheet */ 12));
var _addressEdit = _interopRequireDefault(__webpack_require__(/*! ./address-edit */ 42));
var _addressList = _interopRequireDefault(__webpack_require__(/*! ./address-list */ 67));
var _area = _interopRequireDefault(__webpack_require__(/*! ./area */ 44));
var _button = _interopRequireDefault(__webpack_require__(/*! ./button */ 58));
var _card = _interopRequireDefault(__webpack_require__(/*! ./card */ 73));
var _cell = _interopRequireDefault(__webpack_require__(/*! ./cell */ 51));
var _cellGroup = _interopRequireDefault(__webpack_require__(/*! ./cell-group */ 75));
var _checkbox = _interopRequireDefault(__webpack_require__(/*! ./checkbox */ 76));
var _checkboxGroup = _interopRequireDefault(__webpack_require__(/*! ./checkbox-group */ 77));
var _circle = _interopRequireDefault(__webpack_require__(/*! ./circle */ 78));
var _col = _interopRequireDefault(__webpack_require__(/*! ./col */ 80));
var _collapse = _interopRequireDefault(__webpack_require__(/*! ./collapse */ 81));
var _collapseItem = _interopRequireDefault(__webpack_require__(/*! ./collapse-item */ 82));
var _contactCard = _interopRequireDefault(__webpack_require__(/*! ./contact-card */ 83));
var _contactEdit = _interopRequireDefault(__webpack_require__(/*! ./contact-edit */ 84));
var _contactList = _interopRequireDefault(__webpack_require__(/*! ./contact-list */ 85));
var _countDown = _interopRequireDefault(__webpack_require__(/*! ./count-down */ 86));
var _coupon = _interopRequireDefault(__webpack_require__(/*! ./coupon */ 88));
var _couponCell = _interopRequireDefault(__webpack_require__(/*! ./coupon-cell */ 89));
var _couponList = _interopRequireDefault(__webpack_require__(/*! ./coupon-list */ 90));
var _datetimePicker = _interopRequireDefault(__webpack_require__(/*! ./datetime-picker */ 98));
var _dialog = _interopRequireDefault(__webpack_require__(/*! ./dialog */ 59));
var _divider = _interopRequireDefault(__webpack_require__(/*! ./divider */ 104));
var _dropdownItem = _interopRequireDefault(__webpack_require__(/*! ./dropdown-item */ 105));
var _dropdownMenu = _interopRequireDefault(__webpack_require__(/*! ./dropdown-menu */ 106));
var _field = _interopRequireDefault(__webpack_require__(/*! ./field */ 50));
var _goodsAction = _interopRequireDefault(__webpack_require__(/*! ./goods-action */ 108));
var _goodsActionButton = _interopRequireDefault(__webpack_require__(/*! ./goods-action-button */ 109));
var _goodsActionIcon = _interopRequireDefault(__webpack_require__(/*! ./goods-action-icon */ 110));
var _grid = _interopRequireDefault(__webpack_require__(/*! ./grid */ 111));
var _gridItem = _interopRequireDefault(__webpack_require__(/*! ./grid-item */ 112));
var _icon = _interopRequireDefault(__webpack_require__(/*! ./icon */ 37));
var _image = _interopRequireDefault(__webpack_require__(/*! ./image */ 39));
var _imagePreview = _interopRequireDefault(__webpack_require__(/*! ./image-preview */ 113));
var _indexAnchor = _interopRequireDefault(__webpack_require__(/*! ./index-anchor */ 117));
var _indexBar = _interopRequireDefault(__webpack_require__(/*! ./index-bar */ 118));
var _info = _interopRequireDefault(__webpack_require__(/*! ./info */ 38));
var _lazyload = _interopRequireDefault(__webpack_require__(/*! ./lazyload */ 119));
var _list = _interopRequireDefault(__webpack_require__(/*! ./list */ 121));
var _loading = _interopRequireDefault(__webpack_require__(/*! ./loading */ 41));
var _locale = _interopRequireDefault(__webpack_require__(/*! ./locale */ 19));
var _navBar = _interopRequireDefault(__webpack_require__(/*! ./nav-bar */ 122));
var _noticeBar = _interopRequireDefault(__webpack_require__(/*! ./notice-bar */ 123));
var _notify = _interopRequireDefault(__webpack_require__(/*! ./notify */ 124));
var _numberKeyboard = _interopRequireDefault(__webpack_require__(/*! ./number-keyboard */ 126));
var _overlay = _interopRequireDefault(__webpack_require__(/*! ./overlay */ 35));
var _pagination = _interopRequireDefault(__webpack_require__(/*! ./pagination */ 128));
var _panel = _interopRequireDefault(__webpack_require__(/*! ./panel */ 129));
var _passwordInput = _interopRequireDefault(__webpack_require__(/*! ./password-input */ 130));
var _picker = _interopRequireDefault(__webpack_require__(/*! ./picker */ 45));
var _popup = _interopRequireDefault(__webpack_require__(/*! ./popup */ 40));
var _progress = _interopRequireDefault(__webpack_require__(/*! ./progress */ 131));
var _pullRefresh = _interopRequireDefault(__webpack_require__(/*! ./pull-refresh */ 132));
var _radio = _interopRequireDefault(__webpack_require__(/*! ./radio */ 71));
var _radioGroup = _interopRequireDefault(__webpack_require__(/*! ./radio-group */ 68));
var _rate = _interopRequireDefault(__webpack_require__(/*! ./rate */ 133));
var _row = _interopRequireDefault(__webpack_require__(/*! ./row */ 134));
var _search = _interopRequireDefault(__webpack_require__(/*! ./search */ 135));
var _sidebar = _interopRequireDefault(__webpack_require__(/*! ./sidebar */ 136));
var _sidebarItem = _interopRequireDefault(__webpack_require__(/*! ./sidebar-item */ 137));
var _skeleton = _interopRequireDefault(__webpack_require__(/*! ./skeleton */ 138));
var _sku = _interopRequireDefault(__webpack_require__(/*! ./sku */ 139));
var _slider = _interopRequireDefault(__webpack_require__(/*! ./slider */ 156));
var _step = _interopRequireDefault(__webpack_require__(/*! ./step */ 157));
var _stepper = _interopRequireDefault(__webpack_require__(/*! ./stepper */ 149));
var _steps = _interopRequireDefault(__webpack_require__(/*! ./steps */ 158));
var _sticky = _interopRequireDefault(__webpack_require__(/*! ./sticky */ 97));
var _submitBar = _interopRequireDefault(__webpack_require__(/*! ./submit-bar */ 159));
var _swipe = _interopRequireDefault(__webpack_require__(/*! ./swipe */ 115));
var _swipeCell = _interopRequireDefault(__webpack_require__(/*! ./swipe-cell */ 160));
var _swipeItem = _interopRequireDefault(__webpack_require__(/*! ./swipe-item */ 116));
var _switch = _interopRequireDefault(__webpack_require__(/*! ./switch */ 65));
var _switchCell = _interopRequireDefault(__webpack_require__(/*! ./switch-cell */ 64));
var _tab = _interopRequireDefault(__webpack_require__(/*! ./tab */ 91));
var _tabbar = _interopRequireDefault(__webpack_require__(/*! ./tabbar */ 161));
var _tabbarItem = _interopRequireDefault(__webpack_require__(/*! ./tabbar-item */ 162));
var _tabs = _interopRequireDefault(__webpack_require__(/*! ./tabs */ 92));
var _tag = _interopRequireDefault(__webpack_require__(/*! ./tag */ 74));
var _toast = _interopRequireDefault(__webpack_require__(/*! ./toast */ 56));
var _treeSelect = _interopRequireDefault(__webpack_require__(/*! ./tree-select */ 163));
var _uploader = _interopRequireDefault(__webpack_require__(/*! ./uploader */ 153));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // This file is auto gererated by build/build-entry.js
var version = '2.1.8';exports.version = version;
var components = [_actionSheet.default, _addressEdit.default, _addressList.default, _area.default, _button.default, _card.default, _cell.default, _cellGroup.default, _checkbox.default, _checkboxGroup.default, _circle.default, _col.default, _collapse.default, _collapseItem.default, _contactCard.default, _contactEdit.default, _contactList.default, _countDown.default, _coupon.default, _couponCell.default, _couponList.default, _datetimePicker.default, _dialog.default, _divider.default, _dropdownItem.default, _dropdownMenu.default, _field.default, _goodsAction.default, _goodsActionButton.default, _goodsActionIcon.default, _grid.default, _gridItem.default, _icon.default, _image.default, _imagePreview.default, _indexAnchor.default, _indexBar.default, _info.default, _list.default, _loading.default, _navBar.default, _noticeBar.default, _notify.default, _numberKeyboard.default, _overlay.default, _pagination.default, _panel.default, _passwordInput.default, _picker.default, _popup.default, _progress.default, _pullRefresh.default, _radio.default, _radioGroup.default, _rate.default, _row.default, _search.default, _sidebar.default, _sidebarItem.default, _skeleton.default, _sku.default, _slider.default, _step.default, _stepper.default, _steps.default, _sticky.default, _submitBar.default, _swipe.default, _swipeCell.default, _swipeItem.default, _switch.default, _switchCell.default, _tab.default, _tabbar.default, _tabbarItem.default, _tabs.default, _tag.default, _toast.default, _treeSelect.default, _uploader.default];

var install = function install(Vue) {
  components.forEach(function (Component) {
    Vue.use(Component);
  });
};
/* istanbul ignore if */exports.install = install;


if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}var _default =


{
  install: install,
  version: version };exports.default = _default;

/***/ }),
/* 12 */
/*!**********************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/action-sheet/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/esm/extends */ 13));
var _babelHelperVueJsxMergeProps = _interopRequireDefault(__webpack_require__(/*! @vue/babel-helper-vue-jsx-merge-props */ 14));
var _utils = __webpack_require__(/*! ../utils */ 15);
var _functional = __webpack_require__(/*! ../utils/functional */ 27);
var _constant = __webpack_require__(/*! ../utils/constant */ 28);
var _popup = __webpack_require__(/*! ../mixins/popup */ 29);
var _icon = _interopRequireDefault(__webpack_require__(/*! ../icon */ 37));
var _popup2 = _interopRequireDefault(__webpack_require__(/*! ../popup */ 40));
var _loading = _interopRequireDefault(__webpack_require__(/*! ../loading */ 41));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // Types

var _createNamespace = (0, _utils.createNamespace)('action-sheet'),
createComponent = _createNamespace[0],
bem = _createNamespace[1];

function ActionSheet(h, props, slots, ctx) {
  var title = props.title,
  cancelText = props.cancelText;

  function onCancel() {
    (0, _functional.emit)(ctx, 'input', false);
    (0, _functional.emit)(ctx, 'cancel');
  }

  function Header() {
    if (title) {
      return h("div", {
        "class": [bem('header'), _constant.BORDER_BOTTOM] },
      [title, h(_icon.default, {
        "attrs": {
          "name": "close" },

        "class": bem('close'),
        "on": {
          "click": onCancel } })]);


    }
  }

  function Content() {
    if (slots.default) {
      return h("div", {
        "class": bem('content') },
      [slots.default()]);
    }
  }

  function Option(item, index) {
    var disabled = item.disabled || item.loading;

    function onClickOption(event) {
      event.stopPropagation();

      if (item.disabled || item.loading) {
        return;
      }

      if (item.callback) {
        item.callback(item);
      }

      (0, _functional.emit)(ctx, 'select', item, index);

      if (props.closeOnClickAction) {
        (0, _functional.emit)(ctx, 'input', false);
      }
    }

    function OptionContent() {
      if (item.loading) {
        return h(_loading.default, {
          "attrs": {
            "size": "20px" } });


      }

      return [h("span", {
        "class": bem('name') },
      [item.name]), item.subname && h("span", {
        "class": bem('subname') },
      [item.subname])];
    }

    return h("div", {
      "class": [bem('item', {
        disabled: disabled }),
      item.className, _constant.BORDER_TOP],
      "style": {
        color: item.color },

      "on": {
        "click": onClickOption } },

    [OptionContent()]);
  }

  function CancelText() {
    if (cancelText) {
      return h("div", {
        "class": bem('cancel'),
        "on": {
          "click": onCancel } },

      [cancelText]);
    }
  }

  return h(_popup2.default, (0, _babelHelperVueJsxMergeProps.default)([{
    "class": bem({
      'safe-area-inset-bottom': props.safeAreaInsetBottom }),

    "attrs": {
      "position": "bottom",
      "round": props.round,
      "value": props.value,
      "overlay": props.overlay,
      "duration": props.duration,
      "lazyRender": props.lazyRender,
      "lockScroll": props.lockScroll,
      "getContainer": props.getContainer,
      "closeOnClickOverlay": props.closeOnClickOverlay } },

  (0, _functional.inherit)(ctx, true)]), [Header(), props.actions && props.actions.map(Option), Content(), CancelText()]);
}

ActionSheet.props = (0, _extends2.default)({}, _popup.PopupMixin.props, {
  title: String,
  round: Boolean,
  actions: Array,
  duration: Number,
  cancelText: String,
  getContainer: [String, Function],
  closeOnClickAction: Boolean,
  safeAreaInsetBottom: Boolean,
  overlay: {
    type: Boolean,
    default: true },

  closeOnClickOverlay: {
    type: Boolean,
    default: true } });var _default =


createComponent(ActionSheet);exports.default = _default;

/***/ }),
/* 13 */
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),
/* 14 */
/*!***************************************************************************!*\
  !*** ./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _extends(){return _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}var normalMerge=["attrs","props","domProps"],toArrayMerge=["class","style","directives"],functionalMerge=["on","nativeOn"],mergeJsxProps=function(a){return a.reduce(function(c,a){for(var b in a)if(!c[b])c[b]=a[b];else if(-1!==normalMerge.indexOf(b))c[b]=_extends({},c[b],a[b]);else if(-1!==toArrayMerge.indexOf(b)){var d=c[b]instanceof Array?c[b]:[c[b]],e=a[b]instanceof Array?a[b]:[a[b]];c[b]=d.concat(e)}else if(-1!==functionalMerge.indexOf(b)){for(var f in a[b])if(c[b][f]){var g=c[b][f]instanceof Array?c[b][f]:[c[b][f]],h=a[b][f]instanceof Array?a[b][f]:[a[b][f]];c[b][f]=g.concat(h)}else c[b][f]=a[b][f];}else if("hook"==b)for(var i in a[b])c[b][i]=c[b][i]?mergeFn(c[b][i],a[b][i]):a[b][i];else c[b]=a[b];return c},{})},mergeFn=function(a,b){return function(){a&&a.apply(this,arguments),b&&b.apply(this,arguments)}};module.exports=mergeJsxProps;


/***/ }),
/* 15 */
/*!***************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/utils/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.noop = noop;exports.isDef = isDef;exports.isObj = isObj;exports.get = get;Object.defineProperty(exports, "createNamespace", { enumerable: true, get: function get() {return _create.createNamespace;} });Object.defineProperty(exports, "addUnit", { enumerable: true, get: function get() {return _unit.addUnit;} });exports.isServer = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _create = __webpack_require__(/*! ./create */ 16);
var _unit = __webpack_require__(/*! ./format/unit */ 25);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
var isServer = _vue.default.prototype.$isServer;exports.isServer = isServer;
function noop() {}
function isDef(value) {
  return value !== undefined && value !== null;
}
function isObj(x) {
  var type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}
function get(object, path) {
  var keys = path.split('.');
  var result = object;
  keys.forEach(function (key) {
    result = isDef(result[key]) ? result[key] : '';
  });
  return result;
}

/***/ }),
/* 16 */
/*!**********************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/utils/create/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.createNamespace = createNamespace;var _bem = __webpack_require__(/*! ./bem */ 17);
var _component = __webpack_require__(/*! ./component */ 18);
var _i18n = __webpack_require__(/*! ./i18n */ 24);
function createNamespace(name) {
  name = 'van-' + name;
  return [(0, _component.createComponent)(name), (0, _bem.createBEM)(name), (0, _i18n.createI18N)(name)];
}

/***/ }),
/* 17 */
/*!********************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/utils/create/bem.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.createBEM = createBEM; /**
                                                                                                           * bem helper
                                                                                                           * b() // 'button'
                                                                                                           * b('text') // 'button__text'
                                                                                                           * b({ disabled }) // 'button button--disabled'
                                                                                                           * b('text', { disabled }) // 'button__text button__text--disabled'
                                                                                                           * b(['disabled', 'primary']) // 'button button--disabled button--primary'
                                                                                                           */
var ELEMENT = '__';
var MODS = '--';

function join(name, el, symbol) {
  return el ? name + symbol + el : name;
}

function prefix(name, mods) {
  if (typeof mods === 'string') {
    return join(name, mods, MODS);
  }

  if (Array.isArray(mods)) {
    return mods.map(function (item) {
      return prefix(name, item);
    });
  }

  var ret = {};

  if (mods) {
    Object.keys(mods).forEach(function (key) {
      ret[name + MODS + key] = mods[key];
    });
  }

  return ret;
}

function createBEM(name) {
  return function (el, mods) {
    if (el && typeof el !== 'string') {
      mods = el;
      el = '';
    }

    el = join(name, el, ELEMENT);
    return mods ? [el, prefix(el, mods)] : el;
  };
}

/***/ }),
/* 18 */
/*!**************************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/utils/create/component.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.unifySlots = unifySlots;exports.createComponent = createComponent;


__webpack_require__(/*! ../../locale */ 19);
var _string = __webpack_require__(/*! ../format/string */ 22);
var _slots = __webpack_require__(/*! ../../mixins/slots */ 23);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /**
                                                                                                                                                 * Create a basic component with common options
                                                                                                                                                 */function install(Vue) {
  var name = this.name;
  Vue.component(name, this);
  Vue.component((0, _string.camelize)("-" + name), this);
} // unify slots & scopedSlots


function unifySlots(context) {
  // use data.scopedSlots in lower Vue version
  var scopedSlots = context.scopedSlots || context.data.scopedSlots || {};
  var slots = context.slots();
  Object.keys(slots).forEach(function (key) {
    if (!scopedSlots[key]) {
      scopedSlots[key] = function () {
        return slots[key];
      };
    }
  });
  return scopedSlots;
} // should be removed after Vue 3

function transformFunctionComponent(pure) {
  return {
    functional: true,
    props: pure.props,
    model: pure.model,
    render: function render(h, context) {
      return pure(h, context.props, unifySlots(context), context);
    } };

}

function createComponent(name) {
  return function (sfc) {
    if (typeof sfc === 'function') {
      sfc = transformFunctionComponent(sfc);
    }

    if (!sfc.functional) {
      sfc.mixins = sfc.mixins || [];
      sfc.mixins.push(_slots.SlotsMixin);
    }

    sfc.name = name;
    sfc.install = install;
    return sfc;
  };
}

/***/ }),
/* 19 */
/*!****************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/locale/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _deepAssign = __webpack_require__(/*! ../utils/deep-assign */ 20);
var _zhCN = _interopRequireDefault(__webpack_require__(/*! ./lang/zh-CN */ 21));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
var proto = _vue.default.prototype;
var defineReactive = _vue.default.util.defineReactive;
defineReactive(proto, '$vantLang', 'zh-CN');
defineReactive(proto, '$vantMessages', {
  'zh-CN': _zhCN.default });var _default =

{
  messages: function messages() {
    return proto.$vantMessages[proto.$vantLang];
  },
  use: function use(lang, messages) {
    var _this$add;

    proto.$vantLang = lang;
    this.add((_this$add = {}, _this$add[lang] = messages, _this$add));
  },
  add: function add(messages) {
    if (messages === void 0) {
      messages = {};
    }

    (0, _deepAssign.deepAssign)(proto.$vantMessages, messages);
  } };exports.default = _default;

/***/ }),
/* 20 */
/*!*********************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/utils/deep-assign.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.deepAssign = deepAssign;var _ = __webpack_require__(/*! . */ 15);
var hasOwnProperty = Object.prototype.hasOwnProperty;

function assignKey(to, from, key) {
  var val = from[key];

  if (!(0, _.isDef)(val)) {
    return;
  }

  if (!hasOwnProperty.call(to, key) || !(0, _.isObj)(val) || typeof val === 'function') {
    to[key] = val;
  } else {
    // eslint-disable-next-line no-use-before-define
    to[key] = deepAssign(Object(to[key]), from[key]);
  }
}

function deepAssign(to, from) {
  Object.keys(from).forEach(function (key) {
    assignKey(to, from, key);
  });
  return to;
}

/***/ }),
/* 21 */
/*!*********************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/locale/lang/zh-CN.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  name: '姓名',
  tel: '电话',
  save: '保存',
  confirm: '确认',
  cancel: '取消',
  delete: '删除',
  complete: '完成',
  loading: '加载中...',
  telEmpty: '请填写电话',
  nameEmpty: '请填写姓名',
  confirmDelete: '确定要删除么',
  telInvalid: '请填写正确的电话',
  vanContactCard: {
    addText: '添加联系人' },

  vanContactList: {
    addText: '新建联系人' },

  vanPagination: {
    prev: '上一页',
    next: '下一页' },

  vanPullRefresh: {
    pulling: '下拉即可刷新...',
    loosing: '释放即可刷新...' },

  vanSubmitBar: {
    label: '合计：' },

  vanCoupon: {
    valid: '有效期',
    unlimited: '无使用门槛',
    discount: function discount(_discount) {
      return _discount + "\u6298";
    },
    condition: function condition(_condition) {
      return "\u6EE1" + _condition + "\u5143\u53EF\u7528";
    } },

  vanCouponCell: {
    title: '优惠券',
    tips: '使用优惠',
    count: function count(_count) {
      return _count + "\u5F20\u53EF\u7528";
    } },

  vanCouponList: {
    empty: '暂无优惠券',
    exchange: '兑换',
    close: '不使用优惠',
    enable: '可使用优惠券',
    disabled: '不可使用优惠券',
    placeholder: '请输入优惠码' },

  vanAddressEdit: {
    area: '地区',
    postal: '邮政编码',
    areaEmpty: '请选择地区',
    addressEmpty: '请填写详细地址',
    postalEmpty: '邮政编码格式不正确',
    defaultAddress: '设为默认收货地址',
    telPlaceholder: '收货人手机号',
    namePlaceholder: '收货人姓名',
    areaPlaceholder: '选择省 / 市 / 区' },

  vanAddressEditDetail: {
    label: '详细地址',
    placeholder: '街道门牌、楼层房间号等信息' },

  vanAddressList: {
    add: '新增地址' } };exports.default = _default;

/***/ }),
/* 22 */
/*!***********************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/utils/format/string.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.camelize = camelize;exports.padZero = padZero;var camelizeRE = /-(\w)/g;
function camelize(str) {
  return str.replace(camelizeRE, function (_, c) {
    return c.toUpperCase();
  });
}
function padZero(num, targetLength) {
  if (targetLength === void 0) {
    targetLength = 2;
  }

  var str = num + '';

  while (str.length < targetLength) {
    str = '0' + str;
  }

  return str;
}

/***/ }),
/* 23 */
/*!****************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/mixins/slots.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.SlotsMixin = void 0;



var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /**
                                                                                                                                                 * Use scopedSlots in Vue 2.6+
                                                                                                                                                 * downgrade to slots in lower version
                                                                                                                                                 */var SlotsMixin = _vue.default.extend({ methods: { slots: function slots(name, props) {
      if (name === void 0) {
        name = 'default';
      }

      var $slots = this.$slots,
      $scopedSlots = this.$scopedSlots;
      var scopedSlot = $scopedSlots[name];

      if (scopedSlot) {
        return scopedSlot(props);
      }

      return $slots[name];
    } } });exports.SlotsMixin = SlotsMixin;

/***/ }),
/* 24 */
/*!*********************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/utils/create/i18n.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.createI18N = createI18N;var _ = __webpack_require__(/*! .. */ 15);
var _string = __webpack_require__(/*! ../format/string */ 22);
var _locale = _interopRequireDefault(__webpack_require__(/*! ../../locale */ 19));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
function createI18N(name) {
  var prefix = (0, _string.camelize)(name) + '.';
  return function (path) {
    var message = (0, _.get)(_locale.default.messages(), prefix + path) || (0, _.get)(_locale.default.messages(), path);

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return typeof message === 'function' ? message.apply(void 0, args) : message;
  };
}

/***/ }),
/* 25 */
/*!*********************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/utils/format/unit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.addUnit = addUnit;var _ = __webpack_require__(/*! .. */ 15);
var _number = __webpack_require__(/*! ../validate/number */ 26);
function addUnit(value) {
  if (!(0, _.isDef)(value)) {
    return undefined;
  }

  value = String(value);
  return (0, _number.isNumber)(value) ? value + "px" : value;
}

/***/ }),
/* 26 */
/*!*************************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/utils/validate/number.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.isNumber = isNumber;exports.isNaN = isNaN;function isNumber(value) {
  return /^\d+(\.\d+)?$/.test(value);
}
function isNaN(value) {
  if (Number.isNaN) {
    return Number.isNaN(value);
  } // eslint-disable-next-line no-self-compare


  return value !== value;
}

/***/ }),
/* 27 */
/*!********************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/utils/functional.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.inherit = inherit;exports.emit = emit;exports.mount = mount;var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/esm/extends */ 13));
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
var inheritKey = ['ref', 'style', 'class', 'attrs', 'nativeOn', 'directives', 'staticClass', 'staticStyle'];
var mapInheritKey = {
  nativeOn: 'on' };
// inherit partial context, map nativeOn to on

function inherit(context, inheritListeners) {
  var result = inheritKey.reduce(function (obj, key) {
    if (context.data[key]) {
      obj[mapInheritKey[key] || key] = context.data[key];
    }

    return obj;
  }, {});

  if (inheritListeners) {
    result.on = result.on || {};

    (0, _extends2.default)(result.on, context.data.on);
  }

  return result;
} // emit event

function emit(context, eventName) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var listeners = context.listeners[eventName];

  if (listeners) {
    if (Array.isArray(listeners)) {
      listeners.forEach(function (listener) {
        listener.apply(void 0, args);
      });
    } else {
      listeners.apply(void 0, args);
    }
  }
} // mount functional component

function mount(Component, data) {
  var instance = new _vue.default({
    el: document.createElement('div'),
    props: Component.props,
    render: function render(h) {
      return h(Component, (0, _extends2.default)({
        props: this.$props },
      data));
    } });

  document.body.appendChild(instance.$el);
  return instance;
}

/***/ }),
/* 28 */
/*!******************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/utils/constant.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.BORDER_UNSET_TOP_BOTTOM = exports.BORDER_TOP_BOTTOM = exports.BORDER_SURROUND = exports.BORDER_BOTTOM = exports.BORDER_RIGHT = exports.BORDER_LEFT = exports.BORDER_TOP = exports.BORDER = exports.GRAY_DARK = exports.GRAY = exports.WHITE = exports.GREEN = exports.BLUE = exports.RED = void 0; // color
var RED = '#f44';exports.RED = RED;
var BLUE = '#1989fa';exports.BLUE = BLUE;
var GREEN = '#07c160';exports.GREEN = GREEN;
var WHITE = '#fff';exports.WHITE = WHITE;
var GRAY = '#c9c9c9';exports.GRAY = GRAY;
var GRAY_DARK = '#969799'; // border
exports.GRAY_DARK = GRAY_DARK;
var BORDER = 'van-hairline';exports.BORDER = BORDER;
var BORDER_TOP = BORDER + "--top";exports.BORDER_TOP = BORDER_TOP;
var BORDER_LEFT = BORDER + "--left";exports.BORDER_LEFT = BORDER_LEFT;
var BORDER_RIGHT = BORDER + "--right";exports.BORDER_RIGHT = BORDER_RIGHT;
var BORDER_BOTTOM = BORDER + "--bottom";exports.BORDER_BOTTOM = BORDER_BOTTOM;
var BORDER_SURROUND = BORDER + "--surround";exports.BORDER_SURROUND = BORDER_SURROUND;
var BORDER_TOP_BOTTOM = BORDER + "--top-bottom";exports.BORDER_TOP_BOTTOM = BORDER_TOP_BOTTOM;
var BORDER_UNSET_TOP_BOTTOM = BORDER + "-unset--top-bottom";exports.BORDER_UNSET_TOP_BOTTOM = BORDER_UNSET_TOP_BOTTOM;

/***/ }),
/* 29 */
/*!**********************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/mixins/popup/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.PopupMixin = void 0;var _context = __webpack_require__(/*! ./context */ 30);
var _touch = __webpack_require__(/*! ../touch */ 31);
var _portal = __webpack_require__(/*! ../portal */ 32);
var _event = __webpack_require__(/*! ../../utils/dom/event */ 33);
var _overlay = __webpack_require__(/*! ./overlay */ 34);
var _scroll = __webpack_require__(/*! ../../utils/dom/scroll */ 36);
var PopupMixin = {
  mixins: [_touch.TouchMixin, (0, _portal.PortalMixin)({
    afterPortal: function afterPortal() {
      if (this.overlay) {
        (0, _overlay.updateOverlay)();
      }
    } })],

  props: {
    // whether to show popup
    value: Boolean,
    // whether to show overlay
    overlay: Boolean,
    // overlay custom style
    overlayStyle: Object,
    // overlay custom class name
    overlayClass: String,
    // whether to close popup when click overlay
    closeOnClickOverlay: Boolean,
    // z-index
    zIndex: [Number, String],
    // prevent body scroll
    lockScroll: {
      type: Boolean,
      default: true },

    // whether to lazy render
    lazyRender: {
      type: Boolean,
      default: true } },


  data: function data() {
    return {
      inited: this.value };

  },
  computed: {
    shouldRender: function shouldRender() {
      return this.inited || !this.lazyRender;
    } },

  watch: {
    value: function value(val) {
      var type = val ? 'open' : 'close';
      this.inited = this.inited || this.value;
      this[type]();
      this.$emit(type);
    },
    overlay: 'renderOverlay' },

  mounted: function mounted() {
    if (this.value) {
      this.open();
    }
  },

  /* istanbul ignore next */
  activated: function activated() {
    if (this.value) {
      this.open();
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.close();

    if (this.getContainer && this.$parent && this.$parent.$el) {
      this.$parent.$el.appendChild(this.$el);
    }
  },

  /* istanbul ignore next */
  deactivated: function deactivated() {
    this.close();
  },
  methods: {
    open: function open() {
      /* istanbul ignore next */
      if (this.$isServer || this.opened) {
        return;
      } // cover default zIndex


      if (this.zIndex !== undefined) {
        _context.context.zIndex = this.zIndex;
      }

      this.opened = true;
      this.renderOverlay();

      if (this.lockScroll) {
        (0, _event.on)(document, 'touchstart', this.touchStart);
        (0, _event.on)(document, 'touchmove', this.onTouchMove);

        if (!_context.context.lockCount) {
          document.body.classList.add('van-overflow-hidden');
        }

        _context.context.lockCount++;
      }
    },
    close: function close() {
      if (!this.opened) {
        return;
      }

      if (this.lockScroll) {
        _context.context.lockCount--;
        (0, _event.off)(document, 'touchstart', this.touchStart);
        (0, _event.off)(document, 'touchmove', this.onTouchMove);

        if (!_context.context.lockCount) {
          document.body.classList.remove('van-overflow-hidden');
        }
      }

      this.opened = false;
      (0, _overlay.closeOverlay)(this);
      this.$emit('input', false);
    },
    onTouchMove: function onTouchMove(event) {
      this.touchMove(event);
      var direction = this.deltaY > 0 ? '10' : '01';
      var el = (0, _scroll.getScrollEventTarget)(event.target, this.$el);
      var scrollHeight = el.scrollHeight,
      offsetHeight = el.offsetHeight,
      scrollTop = el.scrollTop;
      var status = '11';
      /* istanbul ignore next */

      if (scrollTop === 0) {
        status = offsetHeight >= scrollHeight ? '00' : '01';
      } else if (scrollTop + offsetHeight >= scrollHeight) {
        status = '10';
      }
      /* istanbul ignore next */


      if (status !== '11' && this.direction === 'vertical' && !(parseInt(status, 2) & parseInt(direction, 2))) {
        (0, _event.preventDefault)(event, true);
      }
    },
    renderOverlay: function renderOverlay() {
      var _this = this;

      if (this.$isServer || !this.value) {
        return;
      }

      this.$nextTick(function () {
        _this.updateZIndex(_this.overlay ? 1 : 0);

        if (_this.overlay) {
          (0, _overlay.openOverlay)(_this, {
            zIndex: _context.context.zIndex++,
            duration: _this.duration,
            className: _this.overlayClass,
            customStyle: _this.overlayStyle });

        } else {
          (0, _overlay.closeOverlay)(_this);
        }
      });
    },
    updateZIndex: function updateZIndex(value) {
      if (value === void 0) {
        value = 0;
      }

      this.$el.style.zIndex = ++_context.context.zIndex + value;
    } } };exports.PopupMixin = PopupMixin;

/***/ }),
/* 30 */
/*!************************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/mixins/popup/context.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.context = void 0;var context = {
  zIndex: 2000,
  lockCount: 0,
  stack: [],

  get top() {
    return this.stack[this.stack.length - 1];
  } };exports.context = context;

/***/ }),
/* 31 */
/*!****************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/mixins/touch.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.TouchMixin = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
var MIN_DISTANCE = 10;

function getDirection(x, y) {
  if (x > y && x > MIN_DISTANCE) {
    return 'horizontal';
  }

  if (y > x && y > MIN_DISTANCE) {
    return 'vertical';
  }

  return '';
}

var TouchMixin = _vue.default.extend({
  data: function data() {
    return {
      direction: '' };

  },
  methods: {
    touchStart: function touchStart(event) {
      this.resetTouchStatus();
      this.startX = event.touches[0].clientX;
      this.startY = event.touches[0].clientY;
    },
    touchMove: function touchMove(event) {
      var touch = event.touches[0];
      this.deltaX = touch.clientX - this.startX;
      this.deltaY = touch.clientY - this.startY;
      this.offsetX = Math.abs(this.deltaX);
      this.offsetY = Math.abs(this.deltaY);
      this.direction = this.direction || getDirection(this.offsetX, this.offsetY);
    },
    resetTouchStatus: function resetTouchStatus() {
      this.direction = '';
      this.deltaX = 0;
      this.deltaY = 0;
      this.offsetX = 0;
      this.offsetY = 0;
    } } });exports.TouchMixin = TouchMixin;

/***/ }),
/* 32 */
/*!*****************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/mixins/portal.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.PortalMixin = PortalMixin;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

function getElement(selector) {
  if (typeof selector === 'string') {
    return document.querySelector(selector);
  }

  return selector();
}

function PortalMixin(_ref) {
  var afterPortal = _ref.afterPortal;
  return _vue.default.extend({
    props: {
      getContainer: [String, Function] },

    watch: {
      getContainer: 'portal' },

    mounted: function mounted() {
      if (this.getContainer) {
        this.portal();
      }
    },
    methods: {
      portal: function portal() {
        var getContainer = this.getContainer;
        var container;

        if (getContainer) {
          container = getElement(getContainer);
        } else if (this.$parent) {
          container = this.$parent.$el;
        }

        if (container && container !== this.$el.parentNode) {
          container.appendChild(this.$el);
        }

        if (afterPortal) {
          afterPortal.call(this);
        }
      } } });


}

/***/ }),
/* 33 */
/*!*******************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/utils/dom/event.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.on = on;exports.off = off;exports.stopPropagation = stopPropagation;exports.preventDefault = preventDefault;exports.supportsPassive = void 0;var _ = __webpack_require__(/*! .. */ 15);
// eslint-disable-next-line import/no-mutable-exports
var supportsPassive = false;exports.supportsPassive = supportsPassive;

if (!_.isServer) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', {
      // eslint-disable-next-line getter-return
      get: function get() {
        /* istanbul ignore next */
        exports.supportsPassive = supportsPassive = true;
      } });

    window.addEventListener('test-passive', null, opts); // eslint-disable-next-line no-empty
  } catch (e) {}
}

function on(target, event, handler, passive) {
  if (passive === void 0) {
    passive = false;
  }

  if (!_.isServer) {
    target.addEventListener(event, handler, supportsPassive ? {
      capture: false,
      passive: passive } :
    false);
  }
}
function off(target, event, handler) {
  if (!_.isServer) {
    target.removeEventListener(event, handler);
  }
}
function stopPropagation(event) {
  event.stopPropagation();
}
function preventDefault(event, isStopPropagation) {
  /* istanbul ignore else */
  if (typeof event.cancelable !== 'boolean' || event.cancelable) {
    event.preventDefault();
  }

  if (isStopPropagation) {
    stopPropagation(event);
  }
}

/***/ }),
/* 34 */
/*!************************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/mixins/popup/overlay.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.updateOverlay = updateOverlay;exports.openOverlay = openOverlay;exports.closeOverlay = closeOverlay;var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/esm/extends */ 13));
var _overlay = _interopRequireDefault(__webpack_require__(/*! ../../overlay */ 35));
var _context = __webpack_require__(/*! ./context */ 30);
var _functional = __webpack_require__(/*! ../../utils/functional */ 27);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
var defaultConfig = {
  className: '',
  customStyle: {} };

var overlay; // close popup when click overlay && closeOnClickOverlay is true

function onClickOverlay() {
  if (_context.context.top) {
    var vm = _context.context.top.vm;
    vm.$emit('click-overlay');

    if (vm.closeOnClickOverlay) {
      if (vm.onClickOverlay) {
        vm.onClickOverlay();
      } else {
        vm.close();
      }
    }
  }
}

function updateOverlay() {
  if (!overlay) {
    overlay = (0, _functional.mount)(_overlay.default, {
      on: {
        click: onClickOverlay } });


  }

  if (_context.context.top) {
    var _context$top = _context.context.top,
    vm = _context$top.vm,
    config = _context$top.config;
    var el = vm.$el;

    if (el && el.parentNode) {
      el.parentNode.insertBefore(overlay.$el, el);
    } else {
      document.body.appendChild(overlay.$el);
    }

    (0, _extends2.default)(overlay, defaultConfig, config, {
      show: true });

  } else {
    overlay.show = false;
  }
}
function openOverlay(vm, config) {
  if (!_context.context.stack.some(function (item) {
    return item.vm === vm;
  })) {
    _context.context.stack.push({
      vm: vm,
      config: config });

    updateOverlay();
  }
}
function closeOverlay(vm) {
  var stack = _context.context.stack;

  if (stack.length) {
    if (_context.context.top.vm === vm) {
      stack.pop();
      updateOverlay();
    } else {
      _context.context.stack = stack.filter(function (item) {
        return item.vm !== vm;
      });
    }
  }
}

/***/ }),
/* 35 */
/*!*****************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/overlay/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _babelHelperVueJsxMergeProps = _interopRequireDefault(__webpack_require__(/*! @vue/babel-helper-vue-jsx-merge-props */ 14));
var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/esm/extends */ 13));
var _utils = __webpack_require__(/*! ../utils */ 15);
var _functional = __webpack_require__(/*! ../utils/functional */ 27);
var _event = __webpack_require__(/*! ../utils/dom/event */ 33);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // Types

var _createNamespace = (0, _utils.createNamespace)('overlay'),
createComponent = _createNamespace[0],
bem = _createNamespace[1];

function preventTouchMove(event) {
  (0, _event.preventDefault)(event, true);
}

function Overlay(h, props, slots, ctx) {
  var style = (0, _extends2.default)({
    zIndex: props.zIndex },
  props.customStyle);

  if ((0, _utils.isDef)(props.duration)) {
    style.animationDuration = props.duration + "s";
  }

  return h("transition", {
    "attrs": {
      "name": "van-fade" } },

  [h("div", (0, _babelHelperVueJsxMergeProps.default)([{
    "directives": [{
      name: "show",
      value: props.show }],

    "style": style,
    "class": [bem(), props.className],
    "on": {
      "touchmove": preventTouchMove } },

  (0, _functional.inherit)(ctx, true)]))]);
}

Overlay.props = {
  show: Boolean,
  duration: [Number, String],
  className: null,
  customStyle: null,
  zIndex: {
    type: [Number, String],
    default: 1 } };var _default =


createComponent(Overlay);exports.default = _default;

/***/ }),
/* 36 */
/*!********************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/utils/dom/scroll.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.getScrollEventTarget = getScrollEventTarget;exports.getScrollTop = getScrollTop;exports.setScrollTop = setScrollTop;exports.getRootScrollTop = getRootScrollTop;exports.setRootScrollTop = setRootScrollTop;exports.getElementTop = getElementTop;exports.getVisibleHeight = getVisibleHeight; // get nearest scroll element
// http://w3help.org/zh-cn/causes/SD9013
// http://stackoverflow.com/questions/17016740/onscroll-function-is-not-working-for-chrome
var overflowScrollReg = /scroll|auto/i;
function getScrollEventTarget(element, rootParent) {
  if (rootParent === void 0) {
    rootParent = window;
  }

  var node = element;

  while (node && node.tagName !== 'HTML' && node.nodeType === 1 && node !== rootParent) {
    var _window$getComputedSt = window.getComputedStyle(node),
    overflowY = _window$getComputedSt.overflowY;

    if (overflowScrollReg.test(overflowY)) {
      if (node.tagName !== 'BODY') {
        return node;
      } // see: https://github.com/youzan/vant/issues/3823


      var _window$getComputedSt2 = window.getComputedStyle(node.parentNode),
      htmlOverflowY = _window$getComputedSt2.overflowY;

      if (overflowScrollReg.test(htmlOverflowY)) {
        return node;
      }
    }

    node = node.parentNode;
  }

  return rootParent;
}
function getScrollTop(element) {
  return 'scrollTop' in element ? element.scrollTop : element.pageYOffset;
}
function setScrollTop(element, value) {
  'scrollTop' in element ? element.scrollTop = value : element.scrollTo(element.scrollX, value);
}
function getRootScrollTop() {
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
}
function setRootScrollTop(value) {
  setScrollTop(window, value);
  setScrollTop(document.body, value);
} // get distance from element top to page top

function getElementTop(element) {
  return (element === window ? 0 : element.getBoundingClientRect().top) + getRootScrollTop();
}
function getVisibleHeight(element) {
  return element === window ? element.innerHeight : element.getBoundingClientRect().height;
}

/***/ }),
/* 37 */
/*!**************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/icon/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _babelHelperVueJsxMergeProps = _interopRequireDefault(__webpack_require__(/*! @vue/babel-helper-vue-jsx-merge-props */ 14));
var _utils = __webpack_require__(/*! ../utils */ 15);
var _functional = __webpack_require__(/*! ../utils/functional */ 27);
var _info = _interopRequireDefault(__webpack_require__(/*! ../info */ 38));
var _image = _interopRequireDefault(__webpack_require__(/*! ../image */ 39));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // Types

var _createNamespace = (0, _utils.createNamespace)('icon'),
createComponent = _createNamespace[0],
bem = _createNamespace[1];

function isImage(name) {
  return name ? name.indexOf('/') !== -1 : false;
}

function Icon(h, props, slots, ctx) {
  var imageIcon = isImage(props.name);
  return h(props.tag, (0, _babelHelperVueJsxMergeProps.default)([{
    "class": [props.classPrefix, imageIcon ? '' : props.classPrefix + "-" + props.name],
    "style": {
      color: props.color,
      fontSize: (0, _utils.addUnit)(props.size) } },

  (0, _functional.inherit)(ctx, true)]), [slots.default && slots.default(), imageIcon && h(_image.default, {
    "class": bem('image'),
    "attrs": {
      "fit": "contain",
      "src": props.name,
      "showLoading": false } }),

  h(_info.default, {
    "attrs": {
      "info": props.info } })]);


}

Icon.props = {
  name: String,
  size: [Number, String],
  info: [Number, String],
  color: String,
  tag: {
    type: String,
    default: 'i' },

  classPrefix: {
    type: String,
    default: bem() } };var _default =


createComponent(Icon);exports.default = _default;

/***/ }),
/* 38 */
/*!**************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/info/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _babelHelperVueJsxMergeProps = _interopRequireDefault(__webpack_require__(/*! @vue/babel-helper-vue-jsx-merge-props */ 14));
var _utils = __webpack_require__(/*! ../utils */ 15);
var _functional = __webpack_require__(/*! ../utils/functional */ 27);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // Types

var _createNamespace = (0, _utils.createNamespace)('info'),
createComponent = _createNamespace[0],
bem = _createNamespace[1];

function Info(h, props, slots, ctx) {
  if (!(0, _utils.isDef)(props.info) || props.info === '') {
    return;
  }

  return h("div", (0, _babelHelperVueJsxMergeProps.default)([{
    "class": bem() },
  (0, _functional.inherit)(ctx, true)]), [props.info]);
}

Info.props = {
  info: [Number, String] };var _default =

createComponent(Info);exports.default = _default;

/***/ }),
/* 39 */
/*!***************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/image/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _babelHelperVueJsxMergeProps = _interopRequireDefault(__webpack_require__(/*! @vue/babel-helper-vue-jsx-merge-props */ 14));

var _utils = __webpack_require__(/*! ../utils */ 15);
var _icon = _interopRequireDefault(__webpack_require__(/*! ../icon */ 37));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var _createNamespace = (0, _utils.createNamespace)('image'),
createComponent = _createNamespace[0],
bem = _createNamespace[1];var _default =

createComponent({
  props: {
    src: String,
    fit: String,
    alt: String,
    round: Boolean,
    width: [Number, String],
    height: [Number, String],
    radius: [Number, String],
    lazyLoad: Boolean,
    showError: {
      type: Boolean,
      default: true },

    showLoading: {
      type: Boolean,
      default: true } },


  data: function data() {
    return {
      loading: true,
      error: false };

  },
  watch: {
    src: function src() {
      this.loading = true;
      this.error = false;
    } },

  computed: {
    style: function style() {
      var style = {};

      if ((0, _utils.isDef)(this.width)) {
        style.width = (0, _utils.addUnit)(this.width);
      }

      if ((0, _utils.isDef)(this.height)) {
        style.height = (0, _utils.addUnit)(this.height);
      }

      if ((0, _utils.isDef)(this.radius)) {
        style.overflow = 'hidden';
        style.borderRadius = (0, _utils.addUnit)(this.radius);
      }

      return style;
    } },

  created: function created() {
    var $Lazyload = this.$Lazyload;

    if ($Lazyload) {
      $Lazyload.$on('loaded', this.onLazyLoaded);
      $Lazyload.$on('error', this.onLazyLoadError);
    }
  },
  beforeDestroy: function beforeDestroy() {
    var $Lazyload = this.$Lazyload;

    if ($Lazyload) {
      $Lazyload.$off('loaded', this.onLazyLoaded);
      $Lazyload.$off('error', this.onLazyLoadError);
    }
  },
  methods: {
    onLoad: function onLoad(event) {
      this.loading = false;
      this.$emit('load', event);
    },
    onLazyLoaded: function onLazyLoaded(_ref) {
      var el = _ref.el;

      if (el === this.$refs.image && this.loading) {
        this.onLoad();
      }
    },
    onLazyLoadError: function onLazyLoadError(_ref2) {
      var el = _ref2.el;

      if (el === this.$refs.image && !this.error) {
        this.onError();
      }
    },
    onError: function onError(event) {
      this.error = true;
      this.loading = false;
      this.$emit('error', event);
    },
    onClick: function onClick(event) {
      this.$emit('click', event);
    },
    renderPlaceholder: function renderPlaceholder() {
      var h = this.$createElement;

      if (this.loading && this.showLoading) {
        return h("div", {
          "class": bem('loading') },
        [this.slots('loading') || h(_icon.default, {
          "attrs": {
            "name": "photo-o",
            "size": "22" } })]);


      }

      if (this.error && this.showError) {
        return h("div", {
          "class": bem('error') },
        [this.slots('error') || h(_icon.default, {
          "attrs": {
            "name": "warning-o",
            "size": "22" } })]);


      }
    },
    renderImage: function renderImage() {
      var h = this.$createElement;
      var imgData = {
        class: bem('img'),
        attrs: {
          alt: this.alt },

        style: {
          objectFit: this.fit } };



      if (this.error) {
        return;
      }

      if (this.lazyLoad) {
        return h("img", (0, _babelHelperVueJsxMergeProps.default)([{
          "ref": "image",
          "directives": [{
            name: "lazy",
            value: this.src }] },

        imgData]));
      }

      return h("img", (0, _babelHelperVueJsxMergeProps.default)([{
        "attrs": {
          "src": this.src },

        "on": {
          "load": this.onLoad,
          "error": this.onError } },

      imgData]));
    } },

  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": bem({
        round: this.round }),

      "style": this.style,
      "on": {
        "click": this.onClick } },

    [this.renderImage(), this.renderPlaceholder()]);
  } });exports.default = _default;

/***/ }),
/* 40 */
/*!***************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/popup/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _utils = __webpack_require__(/*! ../utils */ 15);
var _popup = __webpack_require__(/*! ../mixins/popup */ 29);

var _createNamespace = (0, _utils.createNamespace)('popup'),
createComponent = _createNamespace[0],
bem = _createNamespace[1];var _default =

createComponent({
  mixins: [_popup.PopupMixin],
  props: {
    round: Boolean,
    duration: Number,
    transition: String,
    position: {
      type: String,
      default: 'center' },

    overlay: {
      type: Boolean,
      default: true },

    closeOnClickOverlay: {
      type: Boolean,
      default: true } },


  beforeCreate: function beforeCreate() {
    var _this = this;

    var createEmitter = function createEmitter(eventName) {
      return function (event) {
        return _this.$emit(eventName, event);
      };
    };

    this.onClick = createEmitter('click');
    this.onOpened = createEmitter('opened');
    this.onClosed = createEmitter('closed');
  },
  render: function render() {
    var _bem;

    var h = arguments[0];

    if (!this.shouldRender) {
      return;
    }

    var round = this.round,
    position = this.position,
    duration = this.duration;
    var transitionName = this.transition || (position === 'center' ? 'van-fade' : "van-popup-slide-" + position);
    var style = {};

    if ((0, _utils.isDef)(duration)) {
      style.transitionDuration = duration + "s";
    }

    return h("transition", {
      "attrs": {
        "name": transitionName },

      "on": {
        "afterEnter": this.onOpened,
        "afterLeave": this.onClosed } },

    [h("div", {
      "directives": [{
        name: "show",
        value: this.value }],

      "style": style,
      "class": bem((_bem = {
        round: round },
      _bem[position] = position, _bem)),
      "on": {
        "click": this.onClick } },

    [this.slots()])]);
  } });exports.default = _default;

/***/ }),
/* 41 */
/*!*****************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/loading/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _babelHelperVueJsxMergeProps = _interopRequireDefault(__webpack_require__(/*! @vue/babel-helper-vue-jsx-merge-props */ 14));
var _utils = __webpack_require__(/*! ../utils */ 15);
var _constant = __webpack_require__(/*! ../utils/constant */ 28);
var _functional = __webpack_require__(/*! ../utils/functional */ 27);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // Types

var _createNamespace = (0, _utils.createNamespace)('loading'),
createComponent = _createNamespace[0],
bem = _createNamespace[1];

function LoadingIcon(h, props) {
  if (props.type === 'spinner') {
    var Spin = [];

    for (var i = 0; i < 12; i++) {
      Spin.push(h("i"));
    }

    return Spin;
  }

  return h("svg", {
    "class": bem('circular'),
    "attrs": {
      "viewBox": "25 25 50 50" } },

  [h("circle", {
    "attrs": {
      "cx": "50",
      "cy": "50",
      "r": "20",
      "fill": "none" } })]);


}

function LoadingText(h, props, slots) {
  if (slots.default) {
    var style = props.textSize && {
      fontSize: (0, _utils.addUnit)(props.textSize) };

    return h("span", {
      "class": bem('text'),
      "style": style },
    [slots.default()]);
  }
}

function Loading(h, props, slots, ctx) {
  var color = props.color,
  size = props.size,
  type = props.type;
  var style = {
    color: color };


  if (size) {
    var iconSize = (0, _utils.addUnit)(size);
    style.width = iconSize;
    style.height = iconSize;
  }

  return h("div", (0, _babelHelperVueJsxMergeProps.default)([{
    "class": bem([type, {
      vertical: props.vertical }]) },

  (0, _functional.inherit)(ctx, true)]), [h("span", {
    "class": bem('spinner', type),
    "style": style },
  [LoadingIcon(h, props)]), LoadingText(h, props, slots)]);
}

Loading.props = {
  size: [Number, String],
  vertical: Boolean,
  textSize: [Number, String],
  type: {
    type: String,
    default: 'circular' },

  color: {
    type: String,
    default: _constant.GRAY } };var _default =


createComponent(Loading);exports.default = _default;

/***/ }),
/* 42 */
/*!**********************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/address-edit/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/esm/extends */ 13));
var _utils = __webpack_require__(/*! ../utils */ 15);
var _mobile = __webpack_require__(/*! ../utils/validate/mobile */ 43);
var _area = _interopRequireDefault(__webpack_require__(/*! ../area */ 44));
var _field = _interopRequireDefault(__webpack_require__(/*! ../field */ 50));
var _popup = _interopRequireDefault(__webpack_require__(/*! ../popup */ 40));
var _toast = _interopRequireDefault(__webpack_require__(/*! ../toast */ 56));
var _button = _interopRequireDefault(__webpack_require__(/*! ../button */ 58));
var _dialog = _interopRequireDefault(__webpack_require__(/*! ../dialog */ 59));
var _Detail = _interopRequireDefault(__webpack_require__(/*! ./Detail */ 63));
var _switchCell = _interopRequireDefault(__webpack_require__(/*! ../switch-cell */ 64));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var _createNamespace = (0, _utils.createNamespace)('address-edit'),
createComponent = _createNamespace[0],
bem = _createNamespace[1],
t = _createNamespace[2];

var defaultData = {
  name: '',
  tel: '',
  country: '',
  province: '',
  city: '',
  county: '',
  areaCode: '',
  postalCode: '',
  addressDetail: '',
  isDefault: false };


function isPostal(value) {
  return /^\d{6}$/.test(value);
}var _default2 =

createComponent({
  props: {
    areaList: Object,
    isSaving: Boolean,
    isDeleting: Boolean,
    validator: Function,
    showDelete: Boolean,
    showPostal: Boolean,
    searchResult: Array,
    showSetDefault: Boolean,
    showSearchResult: Boolean,
    saveButtonText: String,
    deleteButtonText: String,
    showArea: {
      type: Boolean,
      default: true },

    showDetail: {
      type: Boolean,
      default: true },

    detailRows: {
      type: Number,
      default: 1 },

    detailMaxlength: {
      type: Number,
      default: 200 },

    addressInfo: {
      type: Object,
      default: function _default() {
        return (0, _extends2.default)({}, defaultData);
      } },

    telValidator: {
      type: Function,
      default: _mobile.isMobile },

    postalValidator: {
      type: Function,
      default: isPostal } },


  data: function data() {
    return {
      data: {},
      showAreaPopup: false,
      detailFocused: false,
      errorInfo: {
        tel: false,
        name: false,
        postalCode: false,
        addressDetail: false } };


  },
  computed: {
    areaListLoaded: function areaListLoaded() {
      return (0, _utils.isObj)(this.areaList) && Object.keys(this.areaList).length;
    },
    areaText: function areaText() {
      var _this$data = this.data,
      country = _this$data.country,
      province = _this$data.province,
      city = _this$data.city,
      county = _this$data.county,
      areaCode = _this$data.areaCode;

      if (areaCode) {
        var arr = [country, province, city, county];

        if (province && province === city) {
          arr.splice(1, 1);
        }

        return arr.filter(function (text) {
          return text;
        }).join('/');
      }

      return '';
    } },

  watch: {
    addressInfo: {
      handler: function handler(val) {
        this.data = (0, _extends2.default)({}, defaultData, {}, val);
        this.setAreaCode(val.areaCode);
      },
      deep: true,
      immediate: true },

    areaList: function areaList() {
      this.setAreaCode(this.data.areaCode);
    } },

  methods: {
    onFocus: function onFocus(key) {
      this.errorInfo[key] = false;
      this.detailFocused = key === 'addressDetail';
      this.$emit('focus', key);
    },
    onChangeDetail: function onChangeDetail(val) {
      this.data.addressDetail = val;
      this.$emit('change-detail', val);
    },
    onAreaConfirm: function onAreaConfirm(values) {
      this.showAreaPopup = false;
      this.assignAreaValues();
      this.$emit('change-area', values);
    },
    assignAreaValues: function assignAreaValues() {
      var area = this.$refs.area;

      if (area) {
        var detail = area.getArea();
        detail.areaCode = detail.code;
        delete detail.code;

        (0, _extends2.default)(this.data, detail);
      }
    },
    onSave: function onSave() {
      var _this = this;

      var items = ['name', 'tel', 'areaCode', 'addressDetail'];

      if (this.showPostal) {
        items.push('postalCode');
      }

      var isValid = items.every(function (item) {
        var msg = _this.getErrorMessage(item);

        if (msg) {
          _this.errorInfo[item] = true;
          (0, _toast.default)(msg);
        }

        return !msg;
      });

      if (isValid && !this.isSaving) {
        this.$emit('save', this.data);
      }
    },
    getErrorMessage: function getErrorMessage(key) {
      var value = String(this.data[key] || '').trim();

      if (this.validator) {
        var message = this.validator(key, value);

        if (message) {
          return message;
        }
      }

      switch (key) {
        case 'name':
          return value ? '' : t('nameEmpty');

        case 'tel':
          return this.telValidator(value) ? '' : t('telInvalid');

        case 'areaCode':
          return value ? '' : t('areaEmpty');

        case 'addressDetail':
          return value ? '' : t('addressEmpty');

        case 'postalCode':
          return value && !this.postalValidator(value) ? t('postalEmpty') : '';}

    },
    onDelete: function onDelete() {
      var _this2 = this;

      _dialog.default.confirm({
        title: t('confirmDelete') }).
      then(function () {
        _this2.$emit('delete', _this2.data);
      }).catch(function () {
        _this2.$emit('cancel-delete', _this2.data);
      });
    },
    // get values of area component
    getArea: function getArea() {
      return this.$refs.area ? this.$refs.area.getValues() : [];
    },
    // set area code to area component
    setAreaCode: function setAreaCode(code) {
      this.data.areaCode = code || '';

      if (code) {
        this.$nextTick(this.assignAreaValues);
      }
    },
    setAddressDetail: function setAddressDetail(value) {
      this.data.addressDetail = value;
    },
    onDetailBlur: function onDetailBlur() {
      var _this3 = this;

      // await for click search event
      setTimeout(function () {
        _this3.detailFocused = false;
      });
    } },

  render: function render() {
    var _this4 = this;

    var h = arguments[0];
    var data = this.data,
    errorInfo = this.errorInfo,
    searchResult = this.searchResult;

    var onFocus = function onFocus(name) {
      return function () {
        return _this4.onFocus(name);
      };
    }; // hide bottom field when use search && detail get focused


    var hideBottomFields = searchResult && searchResult.length && this.detailFocused;
    return h("div", {
      "class": bem() },
    [h(_field.default, {
      "attrs": {
        "clearable": true,
        "label": t('name'),
        "placeholder": t('namePlaceholder'),
        "error": errorInfo.name },

      "on": {
        "focus": onFocus('name') },

      "model": {
        value: data.name,
        callback: function callback($$v) {
          data.name = $$v;
        } } }),

    h(_field.default, {
      "attrs": {
        "clearable": true,
        "type": "tel",
        "label": t('tel'),
        "placeholder": t('telPlaceholder'),
        "error": errorInfo.tel },

      "on": {
        "focus": onFocus('tel') },

      "model": {
        value: data.tel,
        callback: function callback($$v) {
          data.tel = $$v;
        } } }),

    h(_field.default, {
      "directives": [{
        name: "show",
        value: this.showArea }],

      "attrs": {
        "readonly": true,
        "label": t('area'),
        "placeholder": t('areaPlaceholder'),
        "value": this.areaText },

      "on": {
        "click": function click() {
          _this4.showAreaPopup = true;
        } } }),

    h(_Detail.default, {
      "directives": [{
        name: "show",
        value: this.showDetail }],

      "attrs": {
        "focused": this.detailFocused,
        "value": data.addressDetail,
        "error": errorInfo.addressDetail,
        "detailRows": this.detailRows,
        "detailMaxlength": this.detailMaxlength,
        "searchResult": this.searchResult,
        "showSearchResult": this.showSearchResult },

      "on": {
        "focus": onFocus('addressDetail'),
        "blur": this.onDetailBlur,
        "input": this.onChangeDetail,
        "select-search": function selectSearch(event) {
          _this4.$emit('select-search', event);
        } } }),

    this.showPostal && h(_field.default, {
      "directives": [{
        name: "show",
        value: !hideBottomFields }],

      "attrs": {
        "type": "tel",
        "maxlength": "6",
        "label": t('postal'),
        "placeholder": t('postal'),
        "error": errorInfo.postalCode },

      "on": {
        "focus": onFocus('postalCode') },

      "model": {
        value: data.postalCode,
        callback: function callback($$v) {
          data.postalCode = $$v;
        } } }),

    this.slots(), this.showSetDefault && h(_switchCell.default, {
      "directives": [{
        name: "show",
        value: !hideBottomFields }],

      "attrs": {
        "title": t('defaultAddress') },

      "on": {
        "change": function change(event) {
          _this4.$emit('change-default', event);
        } },

      "model": {
        value: data.isDefault,
        callback: function callback($$v) {
          data.isDefault = $$v;
        } } }),

    h("div", {
      "directives": [{
        name: "show",
        value: !hideBottomFields }],

      "class": bem('buttons') },
    [h(_button.default, {
      "attrs": {
        "block": true,
        "loading": this.isSaving,
        "type": "danger",
        "text": this.saveButtonText || t('save') },

      "on": {
        "click": this.onSave } }),

    this.showDelete && h(_button.default, {
      "attrs": {
        "block": true,
        "loading": this.isDeleting,
        "text": this.deleteButtonText || t('delete') },

      "on": {
        "click": this.onDelete } })]),

    h(_popup.default, {
      "attrs": {
        "position": "bottom",
        "lazyRender": false,
        "getContainer": "body" },

      "model": {
        value: _this4.showAreaPopup,
        callback: function callback($$v) {
          _this4.showAreaPopup = $$v;
        } } },

    [h(_area.default, {
      "ref": "area",
      "attrs": {
        "loading": !this.areaListLoaded,
        "value": data.areaCode,
        "areaList": this.areaList },

      "on": {
        "confirm": this.onAreaConfirm,
        "cancel": function cancel() {
          _this4.showAreaPopup = false;
        } } })])]);


  } });exports.default = _default2;

/***/ }),
/* 43 */
/*!*************************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/utils/validate/mobile.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.isMobile = isMobile;function isMobile(value) {
  value = value.replace(/[^-|\d]/g, '');
  return /^((\+86)|(86))?(1)\d{10}$/.test(value) || /^0[0-9-]{10,13}$/.test(value);
}

/***/ }),
/* 44 */
/*!**************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/area/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/esm/extends */ 13));
var _utils = __webpack_require__(/*! ../utils */ 15);
var _picker = _interopRequireDefault(__webpack_require__(/*! ../picker */ 45));
var _shared = __webpack_require__(/*! ../picker/shared */ 47);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var _createNamespace = (0, _utils.createNamespace)('area'),
createComponent = _createNamespace[0],
bem = _createNamespace[1];

function isOverseaCode(code) {
  return code[0] === '9';
}var _default2 =

createComponent({
  props: (0, _extends2.default)({}, _shared.pickerProps, {
    value: String,
    areaList: {
      type: Object,
      default: function _default() {
        return {};
      } },

    columnsNum: {
      type: [Number, String],
      default: 3 },

    isOverseaCode: {
      type: Function,
      default: isOverseaCode } }),


  data: function data() {
    return {
      code: this.value,
      columns: [{
        values: [] },
      {
        values: [] },
      {
        values: [] }] };


  },
  computed: {
    province: function province() {
      return this.areaList.province_list || {};
    },
    city: function city() {
      return this.areaList.city_list || {};
    },
    county: function county() {
      return this.areaList.county_list || {};
    },
    displayColumns: function displayColumns() {
      return this.columns.slice(0, +this.columnsNum);
    } },

  watch: {
    value: function value() {
      this.code = this.value;
      this.setValues();
    },
    areaList: {
      deep: true,
      handler: 'setValues' },

    columnsNum: function columnsNum() {
      var _this = this;

      this.$nextTick(function () {
        _this.setValues();
      });
    } },

  mounted: function mounted() {
    this.setValues();
  },
  methods: {
    // get list by code
    getList: function getList(type, code) {
      var result = [];

      if (type !== 'province' && !code) {
        return result;
      }

      var list = this[type];
      result = Object.keys(list).map(function (listCode) {
        return {
          code: listCode,
          name: list[listCode] };

      });

      if (code) {
        // oversea code
        if (this.isOverseaCode(code) && type === 'city') {
          code = '9';
        }

        result = result.filter(function (item) {
          return item.code.indexOf(code) === 0;
        });
      }

      return result;
    },
    // get index by code
    getIndex: function getIndex(type, code) {
      var compareNum = type === 'province' ? 2 : type === 'city' ? 4 : 6;
      var list = this.getList(type, code.slice(0, compareNum - 2)); // oversea code

      if (this.isOverseaCode(code) && type === 'province') {
        compareNum = 1;
      }

      code = code.slice(0, compareNum);

      for (var i = 0; i < list.length; i++) {
        if (list[i].code.slice(0, compareNum) === code) {
          return i;
        }
      }

      return 0;
    },
    onChange: function onChange(picker, values, index) {
      this.code = values[index].code;
      this.setValues();
      this.$emit('change', picker, picker.getValues(), index);
    },
    setValues: function setValues() {
      var code = this.code || Object.keys(this.county)[0] || '';
      var picker = this.$refs.picker;
      var province = this.getList('province');
      var city = this.getList('city', code.slice(0, 2));

      if (!picker) {
        return;
      }

      picker.setColumnValues(0, province);
      picker.setColumnValues(1, city);

      if (city.length && code.slice(2, 4) === '00' && !this.isOverseaCode(code)) {
        code = city[0].code;
      }

      picker.setColumnValues(2, this.getList('county', code.slice(0, 4)));
      picker.setIndexes([this.getIndex('province', code), this.getIndex('city', code), this.getIndex('county', code)]);
    },
    getValues: function getValues() {
      return this.$refs.picker ? this.$refs.picker.getValues().filter(function (value) {
        return !!value;
      }) : [];
    },
    getArea: function getArea() {
      var values = this.getValues();
      var area = {
        code: '',
        country: '',
        province: '',
        city: '',
        county: '' };


      if (!values.length) {
        return area;
      }

      var names = values.map(function (item) {
        return item.name;
      });
      area.code = values[values.length - 1].code;

      if (this.isOverseaCode(area.code)) {
        area.country = names[1] || '';
        area.province = names[2] || '';
      } else {
        area.province = names[0] || '';
        area.city = names[1] || '';
        area.county = names[2] || '';
      }

      return area;
    },
    reset: function reset(code) {
      this.code = code || '';
      this.setValues();
    } },

  render: function render() {
    var h = arguments[0];

    var on = (0, _extends2.default)({}, this.$listeners, {
      change: this.onChange });


    return h(_picker.default, {
      "ref": "picker",
      "class": bem(),
      "attrs": {
        "showToolbar": true,
        "valueKey": "name",
        "title": this.title,
        "loading": this.loading,
        "columns": this.displayColumns,
        "itemHeight": this.itemHeight,
        "visibleItemCount": this.visibleItemCount,
        "cancelButtonText": this.cancelButtonText,
        "confirmButtonText": this.confirmButtonText },

      "on": (0, _extends2.default)({}, on) });

  } });exports.default = _default2;

/***/ }),
/* 45 */
/*!****************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/picker/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/esm/extends */ 13));
var _utils = __webpack_require__(/*! ../utils */ 15);
var _event = __webpack_require__(/*! ../utils/dom/event */ 33);
var _deepClone = __webpack_require__(/*! ../utils/deep-clone */ 46);
var _shared = __webpack_require__(/*! ./shared */ 47);
var _constant = __webpack_require__(/*! ../utils/constant */ 28);
var _loading = _interopRequireDefault(__webpack_require__(/*! ../loading */ 41));
var _PickerColumn = _interopRequireDefault(__webpack_require__(/*! ./PickerColumn */ 48));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var _createNamespace = (0, _utils.createNamespace)('picker'),
createComponent = _createNamespace[0],
bem = _createNamespace[1],
t = _createNamespace[2];var _default2 =

createComponent({
  props: (0, _extends2.default)({}, _shared.pickerProps, {
    defaultIndex: {
      type: Number,
      default: 0 },

    columns: {
      type: Array,
      default: function _default() {
        return [];
      } },

    toolbarPosition: {
      type: String,
      default: 'top' },

    valueKey: {
      type: String,
      default: 'text' } }),


  data: function data() {
    return {
      children: [] };

  },
  computed: {
    simple: function simple() {
      return this.columns.length && !this.columns[0].values;
    } },

  watch: {
    columns: 'setColumns' },

  methods: {
    setColumns: function setColumns() {
      var _this = this;

      var columns = this.simple ? [{
        values: this.columns }] :
      this.columns;
      columns.forEach(function (column, index) {
        _this.setColumnValues(index, (0, _deepClone.deepClone)(column.values));
      });
    },
    emit: function emit(event) {
      if (this.simple) {
        this.$emit(event, this.getColumnValue(0), this.getColumnIndex(0));
      } else {
        this.$emit(event, this.getValues(), this.getIndexes());
      }
    },
    onChange: function onChange(columnIndex) {
      if (this.simple) {
        this.$emit('change', this, this.getColumnValue(0), this.getColumnIndex(0));
      } else {
        this.$emit('change', this, this.getValues(), columnIndex);
      }
    },
    // get column instance by index
    getColumn: function getColumn(index) {
      return this.children[index];
    },
    // get column value by index
    getColumnValue: function getColumnValue(index) {
      var column = this.getColumn(index);
      return column && column.getValue();
    },
    // set column value by index
    setColumnValue: function setColumnValue(index, value) {
      var column = this.getColumn(index);
      column && column.setValue(value);
    },
    // get column option index by column index
    getColumnIndex: function getColumnIndex(columnIndex) {
      return (this.getColumn(columnIndex) || {}).currentIndex;
    },
    // set column option index by column index
    setColumnIndex: function setColumnIndex(columnIndex, optionIndex) {
      var column = this.getColumn(columnIndex);
      column && column.setIndex(optionIndex);
    },
    // get options of column by index
    getColumnValues: function getColumnValues(index) {
      return (this.children[index] || {}).options;
    },
    // set options of column by index
    setColumnValues: function setColumnValues(index, options) {
      var column = this.children[index];

      if (column && JSON.stringify(column.options) !== JSON.stringify(options)) {
        column.options = options;
        column.setIndex(0);
      }
    },
    // get values of all columns
    getValues: function getValues() {
      return this.children.map(function (child) {
        return child.getValue();
      });
    },
    // set values of all columns
    setValues: function setValues(values) {
      var _this2 = this;

      values.forEach(function (value, index) {
        _this2.setColumnValue(index, value);
      });
    },
    // get indexes of all columns
    getIndexes: function getIndexes() {
      return this.children.map(function (child) {
        return child.currentIndex;
      });
    },
    // set indexes of all columns
    setIndexes: function setIndexes(indexes) {
      var _this3 = this;

      indexes.forEach(function (optionIndex, columnIndex) {
        _this3.setColumnIndex(columnIndex, optionIndex);
      });
    },
    onConfirm: function onConfirm() {
      this.children.map(function (child) {
        return child.stopMomentum();
      });
      this.emit('confirm');
    },
    onCancel: function onCancel() {
      this.emit('cancel');
    } },

  render: function render(h) {
    var _this4 = this;

    var itemHeight = this.itemHeight;
    var wrapHeight = itemHeight * this.visibleItemCount;
    var columns = this.simple ? [this.columns] : this.columns;
    var frameStyle = {
      height: itemHeight + "px" };

    var columnsStyle = {
      height: wrapHeight + "px" };

    var maskStyle = {
      backgroundSize: "100% " + (wrapHeight - itemHeight) / 2 + "px" };

    var Toolbar = this.showToolbar && h("div", {
      "class": [_constant.BORDER_TOP_BOTTOM, bem('toolbar')] },
    [this.slots() || [h("div", {
      "attrs": {
        "role": "button",
        "tabindex": "0" },

      "class": bem('cancel'),
      "on": {
        "click": this.onCancel } },

    [this.cancelButtonText || t('cancel')]), this.slots('title') || this.title && h("div", {
      "class": ['van-ellipsis', bem('title')] },
    [this.title]), h("div", {
      "attrs": {
        "role": "button",
        "tabindex": "0" },

      "class": bem('confirm'),
      "on": {
        "click": this.onConfirm } },

    [this.confirmButtonText || t('confirm')])]]);
    return h("div", {
      "class": bem() },
    [this.toolbarPosition === 'top' ? Toolbar : h(), this.loading ? h(_loading.default, {
      "class": bem('loading'),
      "attrs": {
        "color": _constant.BLUE } }) :

    h(), h("div", {
      "class": bem('columns'),
      "style": columnsStyle,
      "on": {
        "touchmove": _event.preventDefault } },

    [columns.map(function (item, index) {
      return h(_PickerColumn.default, {
        "attrs": {
          "valueKey": _this4.valueKey,
          "allowHtml": _this4.allowHtml,
          "className": item.className,
          "itemHeight": _this4.itemHeight,
          "defaultIndex": item.defaultIndex || _this4.defaultIndex,
          "visibleItemCount": _this4.visibleItemCount,
          "initialOptions": _this4.simple ? item : item.values },

        "on": {
          "change": function change() {
            _this4.onChange(index);
          } } });


    }), h("div", {
      "class": bem('mask'),
      "style": maskStyle }),
    h("div", {
      "class": [_constant.BORDER_UNSET_TOP_BOTTOM, bem('frame')],
      "style": frameStyle })]),
    this.toolbarPosition === 'bottom' ? Toolbar : h()]);
  } });exports.default = _default2;

/***/ }),
/* 46 */
/*!********************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/utils/deep-clone.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.deepClone = deepClone;var _deepAssign = __webpack_require__(/*! ./deep-assign */ 20);
function deepClone(obj) {
  if (Array.isArray(obj)) {
    return obj.map(function (item) {
      return deepClone(item);
    });
  }

  if (typeof obj === 'object') {
    return (0, _deepAssign.deepAssign)({}, obj);
  }

  return obj;
}

/***/ }),
/* 47 */
/*!*****************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/picker/shared.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.pickerProps = void 0;var pickerProps = {
  title: String,
  loading: Boolean,
  showToolbar: Boolean,
  cancelButtonText: String,
  confirmButtonText: String,
  allowHtml: {
    type: Boolean,
    default: true },

  visibleItemCount: {
    type: Number,
    default: 5 },

  itemHeight: {
    type: Number,
    default: 44 } };exports.pickerProps = pickerProps;

/***/ }),
/* 48 */
/*!***********************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/picker/PickerColumn.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _babelHelperVueJsxMergeProps = _interopRequireDefault(__webpack_require__(/*! @vue/babel-helper-vue-jsx-merge-props */ 14));
var _deepClone = __webpack_require__(/*! ../utils/deep-clone */ 46);
var _utils = __webpack_require__(/*! ../utils */ 15);
var _number = __webpack_require__(/*! ../utils/format/number */ 49);
var _event = __webpack_require__(/*! ../utils/dom/event */ 33);
var _touch = __webpack_require__(/*! ../mixins/touch */ 31);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
var DEFAULT_DURATION = 200; // 惯性滑动思路:
// 在手指离开屏幕时，如果和上一次 move 时的间隔小于 `MOMENTUM_LIMIT_TIME` 且 move
// 距离大于 `MOMENTUM_LIMIT_DISTANCE` 时，执行惯性滑动，持续 `MOMENTUM_DURATION`

var MOMENTUM_DURATION = 1000;
var MOMENTUM_LIMIT_TIME = 300;
var MOMENTUM_LIMIT_DISTANCE = 15;

var _createNamespace = (0, _utils.createNamespace)('picker-column'),
createComponent = _createNamespace[0],
bem = _createNamespace[1];

function getElementTranslateY(element) {
  var style = window.getComputedStyle(element);
  var transform = style.transform || style.webkitTransform;
  var translateY = transform.slice(7, transform.length - 1).split(', ')[5];
  return Number(translateY);
}

function isOptionDisabled(option) {
  return (0, _utils.isObj)(option) && option.disabled;
}var _default2 =

createComponent({
  mixins: [_touch.TouchMixin],
  props: {
    valueKey: String,
    allowHtml: Boolean,
    className: String,
    itemHeight: Number,
    defaultIndex: Number,
    visibleItemCount: Number,
    initialOptions: {
      type: Array,
      default: function _default() {
        return [];
      } } },


  data: function data() {
    return {
      offset: 0,
      duration: 0,
      options: (0, _deepClone.deepClone)(this.initialOptions),
      currentIndex: this.defaultIndex };

  },
  created: function created() {
    if (this.$parent.children) {
      this.$parent.children.push(this);
    }

    this.setIndex(this.currentIndex);
  },
  destroyed: function destroyed() {
    var children = this.$parent.children;

    if (children) {
      children.splice(children.indexOf(this), 1);
    }
  },
  watch: {
    defaultIndex: function defaultIndex() {
      this.setIndex(this.defaultIndex);
    } },

  computed: {
    count: function count() {
      return this.options.length;
    },
    baseOffset: function baseOffset() {
      return this.itemHeight * (this.visibleItemCount - 1) / 2;
    } },

  methods: {
    onTouchStart: function onTouchStart(event) {
      this.touchStart(event);

      if (this.moving) {
        var translateY = getElementTranslateY(this.$refs.wrapper);
        this.offset = Math.min(0, translateY - this.baseOffset);
        this.startOffset = this.offset;
      } else {
        this.startOffset = this.offset;
      }

      this.duration = 0;
      this.transitionEndTrigger = null;
      this.touchStartTime = Date.now();
      this.momentumOffset = this.startOffset;
    },
    onTouchMove: function onTouchMove(event) {
      this.moving = true;
      this.touchMove(event);

      if (this.direction === 'vertical') {
        (0, _event.preventDefault)(event, true);
      }

      this.offset = (0, _number.range)(this.startOffset + this.deltaY, -(this.count * this.itemHeight), this.itemHeight);
      var now = Date.now();

      if (now - this.touchStartTime > MOMENTUM_LIMIT_TIME) {
        this.touchStartTime = now;
        this.momentumOffset = this.offset;
      }
    },
    onTouchEnd: function onTouchEnd() {
      var distance = this.offset - this.momentumOffset;
      var duration = Date.now() - this.touchStartTime;
      var allowMomentum = duration < MOMENTUM_LIMIT_TIME && Math.abs(distance) > MOMENTUM_LIMIT_DISTANCE;

      if (allowMomentum) {
        this.momentum(distance, duration);
        return;
      }

      var index = this.getIndexByOffset(this.offset);
      this.moving = false;
      this.duration = DEFAULT_DURATION;
      this.setIndex(index, true);
    },
    onTransitionEnd: function onTransitionEnd() {
      this.stopMomentum();
    },
    onClickItem: function onClickItem(index) {
      if (this.moving) {
        return;
      }

      this.duration = DEFAULT_DURATION;
      this.setIndex(index, true);
    },
    adjustIndex: function adjustIndex(index) {
      index = (0, _number.range)(index, 0, this.count);

      for (var i = index; i < this.count; i++) {
        if (!isOptionDisabled(this.options[i])) return i;
      }

      for (var _i = index - 1; _i >= 0; _i--) {
        if (!isOptionDisabled(this.options[_i])) return _i;
      }
    },
    getOptionText: function getOptionText(option) {
      return (0, _utils.isObj)(option) && this.valueKey in option ? option[this.valueKey] : option;
    },
    setIndex: function setIndex(index, userAction) {
      var _this = this;

      index = this.adjustIndex(index) || 0;
      this.offset = -index * this.itemHeight;

      var trigger = function trigger() {
        if (index !== _this.currentIndex) {
          _this.currentIndex = index;

          if (userAction) {
            _this.$emit('change', index);
          }
        }
      }; // 若有触发过 `touchmove` 事件，那应该
      // 在 `transitionend` 后再触发 `change` 事件


      if (this.moving) {
        this.transitionEndTrigger = trigger;
      } else {
        trigger();
      }
    },
    setValue: function setValue(value) {
      var options = this.options;

      for (var i = 0; i < options.length; i++) {
        if (this.getOptionText(options[i]) === value) {
          return this.setIndex(i);
        }
      }
    },
    getValue: function getValue() {
      return this.options[this.currentIndex];
    },
    getIndexByOffset: function getIndexByOffset(offset) {
      return (0, _number.range)(Math.round(-offset / this.itemHeight), 0, this.count - 1);
    },
    momentum: function momentum(distance, duration) {
      var speed = Math.abs(distance / duration);
      distance = this.offset + speed / 0.002 * (distance < 0 ? -1 : 1);
      var index = this.getIndexByOffset(distance);
      this.duration = MOMENTUM_DURATION;
      this.setIndex(index, true);
    },
    stopMomentum: function stopMomentum() {
      this.moving = false;
      this.duration = 0;

      if (this.transitionEndTrigger) {
        this.transitionEndTrigger();
        this.transitionEndTrigger = null;
      }
    },
    genOptions: function genOptions() {
      var _this2 = this;

      var h = this.$createElement;
      var optionStyle = {
        height: this.itemHeight + "px" };

      return this.options.map(function (option, index) {
        var text = _this2.getOptionText(option);

        var data = {
          style: optionStyle,
          class: ['van-ellipsis', bem('item', {
            disabled: isOptionDisabled(option),
            selected: index === _this2.currentIndex })],

          on: {
            click: function click() {
              _this2.onClickItem(index);
            } } };



        if (_this2.allowHtml) {
          data.domProps = {
            innerHTML: text };

        }

        return h("li", (0, _babelHelperVueJsxMergeProps.default)([{}, data]), [_this2.allowHtml ? '' : text]);
      });
    } },

  render: function render() {
    var h = arguments[0];
    var wrapperStyle = {
      transform: "translate3d(0, " + (this.offset + this.baseOffset) + "px, 0)",
      transitionDuration: this.duration + "ms",
      transitionProperty: this.duration ? 'all' : 'none',
      lineHeight: this.itemHeight + "px" };

    return h("div", {
      "class": [bem(), this.className],
      "on": {
        "touchstart": this.onTouchStart,
        "touchmove": this.onTouchMove,
        "touchend": this.onTouchEnd,
        "touchcancel": this.onTouchEnd } },

    [h("ul", {
      "ref": "wrapper",
      "style": wrapperStyle,
      "class": bem('wrapper'),
      "on": {
        "transitionend": this.onTransitionEnd } },

    [this.genOptions()])]);
  } });exports.default = _default2;

/***/ }),
/* 49 */
/*!***********************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/utils/format/number.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.range = range;function range(num, min, max) {
  return Math.min(Math.max(num, min), max);
}

/***/ }),
/* 50 */
/*!***************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/field/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _babelHelperVueJsxMergeProps = _interopRequireDefault(__webpack_require__(/*! @vue/babel-helper-vue-jsx-merge-props */ 14));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/esm/extends */ 13));
var _icon = _interopRequireDefault(__webpack_require__(/*! ../icon */ 37));
var _cell = _interopRequireDefault(__webpack_require__(/*! ../cell */ 51));
var _shared = __webpack_require__(/*! ../cell/shared */ 52);
var _event = __webpack_require__(/*! ../utils/dom/event */ 33);
var _resetScroll = __webpack_require__(/*! ../utils/dom/reset-scroll */ 54);
var _utils = __webpack_require__(/*! ../utils */ 15);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var _createNamespace = (0, _utils.createNamespace)('field'),
createComponent = _createNamespace[0],
bem = _createNamespace[1];var _default =

createComponent({
  inheritAttrs: false,
  props: (0, _extends2.default)({}, _shared.cellProps, {
    error: Boolean,
    readonly: Boolean,
    autosize: [Boolean, Object],
    leftIcon: String,
    rightIcon: String,
    clearable: Boolean,
    labelClass: null,
    labelWidth: [Number, String],
    labelAlign: String,
    inputAlign: String,
    errorMessage: String,
    errorMessageAlign: String,
    type: {
      type: String,
      default: 'text' } }),


  data: function data() {
    return {
      focused: false };

  },
  watch: {
    value: function value() {
      this.$nextTick(this.adjustSize);
    } },

  mounted: function mounted() {
    this.format();
    this.$nextTick(this.adjustSize);
  },
  computed: {
    showClear: function showClear() {
      return this.clearable && this.focused && this.value !== '' && (0, _utils.isDef)(this.value) && !this.readonly;
    },
    listeners: function listeners() {
      var listeners = (0, _extends2.default)({}, this.$listeners, {
        input: this.onInput,
        keypress: this.onKeypress,
        focus: this.onFocus,
        blur: this.onBlur });


      delete listeners.click;
      return listeners;
    },
    labelStyle: function labelStyle() {
      var labelWidth = this.labelWidth;

      if (labelWidth) {
        return {
          width: (0, _utils.addUnit)(labelWidth) };

      }
    } },

  methods: {
    focus: function focus() {
      if (this.$refs.input) {
        this.$refs.input.focus();
      }
    },
    blur: function blur() {
      if (this.$refs.input) {
        this.$refs.input.blur();
      }
    },
    // native maxlength not work when type = number
    format: function format(target) {
      if (target === void 0) {
        target = this.$refs.input;
      }

      if (!target) {
        return;
      }

      var _target = target,
      value = _target.value;
      var maxlength = this.$attrs.maxlength;

      if (this.type === 'number' && (0, _utils.isDef)(maxlength) && value.length > maxlength) {
        value = value.slice(0, maxlength);
        target.value = value;
      }

      return value;
    },
    onInput: function onInput(event) {
      // not update v-model when composing
      if (event.target.composing) {
        return;
      }

      this.$emit('input', this.format(event.target));
    },
    onFocus: function onFocus(event) {
      this.focused = true;
      this.$emit('focus', event); // hack for safari

      /* istanbul ignore if */

      if (this.readonly) {
        this.blur();
      }
    },
    onBlur: function onBlur(event) {
      this.focused = false;
      this.$emit('blur', event);
      (0, _resetScroll.resetScroll)();
    },
    onClick: function onClick(event) {
      this.$emit('click', event);
    },
    onClickLeftIcon: function onClickLeftIcon(event) {
      this.$emit('click-left-icon', event);
    },
    onClickRightIcon: function onClickRightIcon(event) {
      this.$emit('click-right-icon', event);
    },
    onClear: function onClear(event) {
      (0, _event.preventDefault)(event);
      this.$emit('input', '');
      this.$emit('clear', event);
    },
    onKeypress: function onKeypress(event) {
      if (this.type === 'number') {
        var keyCode = event.keyCode;
        var allowPoint = String(this.value).indexOf('.') === -1;
        var isValidKey = keyCode >= 48 && keyCode <= 57 || keyCode === 46 && allowPoint || keyCode === 45;

        if (!isValidKey) {
          (0, _event.preventDefault)(event);
        }
      } // trigger blur after click keyboard search button

      /* istanbul ignore next */


      if (this.type === 'search' && event.keyCode === 13) {
        this.blur();
      }

      this.$emit('keypress', event);
    },
    adjustSize: function adjustSize() {
      var input = this.$refs.input;

      if (!(this.type === 'textarea' && this.autosize) || !input) {
        return;
      }

      input.style.height = 'auto';
      var height = input.scrollHeight;

      if ((0, _utils.isObj)(this.autosize)) {
        var _this$autosize = this.autosize,
        maxHeight = _this$autosize.maxHeight,
        minHeight = _this$autosize.minHeight;

        if (maxHeight) {
          height = Math.min(height, maxHeight);
        }

        if (minHeight) {
          height = Math.max(height, minHeight);
        }
      }

      if (height) {
        input.style.height = height + 'px';
      }
    },
    renderInput: function renderInput() {
      var h = this.$createElement;
      var inputSlot = this.slots('input');

      if (inputSlot) {
        return h("div", {
          "class": bem('control', this.inputAlign) },
        [inputSlot]);
      }

      var inputProps = {
        ref: 'input',
        class: bem('control', this.inputAlign),
        domProps: {
          value: this.value },

        attrs: (0, _extends2.default)({}, this.$attrs, {
          readonly: this.readonly }),

        on: this.listeners,
        // add model directive to skip IME composition
        directives: [{
          name: 'model',
          value: this.value }] };



      if (this.type === 'textarea') {
        return h("textarea", (0, _babelHelperVueJsxMergeProps.default)([{}, inputProps]));
      }

      return h("input", (0, _babelHelperVueJsxMergeProps.default)([{
        "attrs": {
          "type": this.type } },

      inputProps]));
    },
    renderLeftIcon: function renderLeftIcon() {
      var h = this.$createElement;
      var showLeftIcon = this.slots('left-icon') || this.leftIcon;

      if (showLeftIcon) {
        return h("div", {
          "class": bem('left-icon'),
          "on": {
            "click": this.onClickLeftIcon } },

        [this.slots('left-icon') || h(_icon.default, {
          "attrs": {
            "name": this.leftIcon } })]);


      }
    },
    renderRightIcon: function renderRightIcon() {
      var h = this.$createElement;
      var slots = this.slots;
      var showRightIcon = slots('right-icon') || this.rightIcon;

      if (showRightIcon) {
        return h("div", {
          "class": bem('right-icon'),
          "on": {
            "click": this.onClickRightIcon } },

        [slots('right-icon') || h(_icon.default, {
          "attrs": {
            "name": this.rightIcon } })]);


      }
    } },

  render: function render() {
    var _bem;

    var h = arguments[0];
    var slots = this.slots,
    labelAlign = this.labelAlign;
    var scopedSlots = {
      icon: this.renderLeftIcon };


    if (slots('label')) {
      scopedSlots.title = function () {
        return slots('label');
      };
    }

    return h(_cell.default, {
      "attrs": {
        "icon": this.leftIcon,
        "size": this.size,
        "title": this.label,
        "center": this.center,
        "border": this.border,
        "isLink": this.isLink,
        "required": this.required,
        "clickable": this.clickable,
        "titleStyle": this.labelStyle,
        "titleClass": [bem('label', labelAlign), this.labelClass],
        "arrowDirection": this.arrowDirection },

      "class": bem((_bem = {
        error: this.error,
        disabled: this.$attrs.disabled },
      _bem["label-" + labelAlign] = labelAlign, _bem['min-height'] = this.type === 'textarea' && !this.autosize, _bem)),
      "scopedSlots": scopedSlots,
      "on": {
        "click": this.onClick } },

    [h("div", {
      "class": bem('body') },
    [this.renderInput(), this.showClear && h(_icon.default, {
      "attrs": {
        "name": "clear" },

      "class": bem('clear'),
      "on": {
        "touchstart": this.onClear } }),

    this.renderRightIcon(), slots('button') && h("div", {
      "class": bem('button') },
    [slots('button')])]), this.errorMessage && h("div", {
      "class": bem('error-message', this.errorMessageAlign) },
    [this.errorMessage])]);
  } });exports.default = _default;

/***/ }),
/* 51 */
/*!**************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/cell/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/esm/extends */ 13));
var _babelHelperVueJsxMergeProps = _interopRequireDefault(__webpack_require__(/*! @vue/babel-helper-vue-jsx-merge-props */ 14));
var _utils = __webpack_require__(/*! ../utils */ 15);
var _shared = __webpack_require__(/*! ./shared */ 52);
var _functional = __webpack_require__(/*! ../utils/functional */ 27);
var _router = __webpack_require__(/*! ../utils/router */ 53);
var _icon = _interopRequireDefault(__webpack_require__(/*! ../icon */ 37));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // Types

var _createNamespace = (0, _utils.createNamespace)('cell'),
createComponent = _createNamespace[0],
bem = _createNamespace[1];

function Cell(h, props, slots, ctx) {
  var icon = props.icon,
  size = props.size,
  title = props.title,
  label = props.label,
  value = props.value,
  isLink = props.isLink,
  arrowDirection = props.arrowDirection;
  var showTitle = slots.title || (0, _utils.isDef)(title);
  var showValue = slots.default || (0, _utils.isDef)(value);
  var showLabel = slots.label || (0, _utils.isDef)(label);
  var Label = showLabel && h("div", {
    "class": [bem('label'), props.labelClass] },
  [slots.label ? slots.label() : label]);
  var Title = showTitle && h("div", {
    "class": [bem('title'), props.titleClass],
    "style": props.titleStyle },
  [slots.title ? slots.title() : h("span", [title]), Label]);
  var Value = showValue && h("div", {
    "class": [bem('value', {
      alone: !slots.title && !title }),
    props.valueClass] },
  [slots.default ? slots.default() : h("span", [value])]);
  var LeftIcon = slots.icon ? slots.icon() : icon && h(_icon.default, {
    "class": bem('left-icon'),
    "attrs": {
      "name": icon } });


  var rightIconSlot = slots['right-icon'];
  var RightIcon = rightIconSlot ? rightIconSlot() : isLink && h(_icon.default, {
    "class": bem('right-icon'),
    "attrs": {
      "name": arrowDirection ? "arrow-" + arrowDirection : 'arrow' } });



  function onClick(event) {
    (0, _functional.emit)(ctx, 'click', event);
    (0, _router.functionalRoute)(ctx);
  }

  var classes = {
    center: props.center,
    required: props.required,
    borderless: !props.border,
    clickable: isLink || props.clickable };


  if (size) {
    classes[size] = size;
  }

  return h("div", (0, _babelHelperVueJsxMergeProps.default)([{
    "class": bem(classes),
    "on": {
      "click": onClick } },

  (0, _functional.inherit)(ctx)]), [LeftIcon, Title, Value, RightIcon, slots.extra && slots.extra()]);
}

Cell.props = (0, _extends2.default)({}, _shared.cellProps, {}, _router.routeProps);var _default =
createComponent(Cell);exports.default = _default;

/***/ }),
/* 52 */
/*!***************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/cell/shared.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.cellProps = void 0;var cellProps = {
  icon: String,
  size: String,
  center: Boolean,
  isLink: Boolean,
  required: Boolean,
  clickable: Boolean,
  titleStyle: null,
  titleClass: null,
  valueClass: null,
  labelClass: null,
  title: [Number, String],
  value: [Number, String],
  label: [Number, String],
  arrowDirection: String,
  border: {
    type: Boolean,
    default: true } };exports.cellProps = cellProps;

/***/ }),
/* 53 */
/*!****************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/utils/router.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.route = route;exports.functionalRoute = functionalRoute;exports.routeProps = void 0; /**
                                                                                                                                                                         * Vue Router support
                                                                                                                                                                         */
function route(router, config) {
  var to = config.to,
  url = config.url,
  replace = config.replace;

  if (to && router) {
    var promise = router[replace ? 'replace' : 'push'](to);
    /* istanbul ignore else */

    if (promise && promise.catch) {
      promise.catch(function (err) {
        /* istanbul ignore if */
        if (err.name !== 'NavigationDuplicated') {
          throw err;
        }
      });
    }
  } else if (url) {
    replace ? location.replace(url) : location.href = url;
  }
}
function functionalRoute(context) {
  route(context.parent && context.parent.$router, context.props);
}
var routeProps = {
  url: String,
  replace: Boolean,
  to: [String, Object] };exports.routeProps = routeProps;

/***/ }),
/* 54 */
/*!**************************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/utils/dom/reset-scroll.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.resetScroll = resetScroll;



var _system = __webpack_require__(/*! ../validate/system */ 55);
var _scroll = __webpack_require__(/*! ./scroll */ 36); /**
                                    * Hack for iOS12 page scroll
                                    * https://developers.weixin.qq.com/community/develop/doc/00044ae90742f8c82fb78fcae56800
                                    */var isIOS = (0, _system.isIOS)(); /* istanbul ignore next */
function resetScroll() {
  if (isIOS) {
    (0, _scroll.setRootScrollTop)((0, _scroll.getRootScrollTop)());
  }
}

/***/ }),
/* 55 */
/*!*************************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/utils/validate/system.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.isAndroid = isAndroid;exports.isIOS = isIOS;var _ = __webpack_require__(/*! .. */ 15);
function isAndroid() {
  /* istanbul ignore next */
  return _.isServer ? false : /android/.test(navigator.userAgent.toLowerCase());
}
function isIOS() {
  /* istanbul ignore next */
  return _.isServer ? false : /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase());
}

/***/ }),
/* 56 */
/*!***************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/toast/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/esm/extends */ 13));
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _Toast = _interopRequireDefault(__webpack_require__(/*! ./Toast */ 57));
var _utils = __webpack_require__(/*! ../utils */ 15);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
var defaultOptions = {
  icon: '',
  type: 'text',
  mask: false,
  value: true,
  message: '',
  className: '',
  onClose: null,
  onOpened: null,
  duration: 3000,
  iconPrefix: undefined,
  position: 'middle',
  forbidClick: false,
  loadingType: undefined,
  getContainer: 'body',
  overlayStyle: null,
  closeOnClick: false };

var queue = [];
var multiple = false;

var currentOptions = (0, _extends2.default)({}, defaultOptions);

function parseOptions(message) {
  if ((0, _utils.isObj)(message)) {
    return message;
  }

  return {
    message: message };

}

function createInstance() {
  /* istanbul ignore if */
  if (_utils.isServer) {
    return {};
  }

  if (!queue.length || multiple) {
    var toast = new (_vue.default.extend(_Toast.default))({
      el: document.createElement('div') });

    toast.$on('input', function (value) {
      toast.value = value;
    });
    queue.push(toast);
  }

  return queue[queue.length - 1];
} // transform toast options to popup props


function transformOptions(options) {
  options = (0, _extends2.default)({}, options);
  options.overlay = options.mask;
  delete options.mask;
  delete options.duration;
  return options;
}

function Toast(options) {
  if (options === void 0) {
    options = {};
  }

  var toast = createInstance(); // should add z-index if previous toast has not disappeared

  if (toast.value) {
    toast.updateZIndex();
  }

  options = (0, _extends2.default)({}, currentOptions, {}, parseOptions(options), {
    clear: function clear() {
      toast.value = false;

      if (options.onClose) {
        options.onClose();
      }

      if (multiple && !_utils.isServer) {
        toast.$on('closed', function () {
          clearTimeout(toast.timer);
          queue = queue.filter(function (item) {
            return item !== toast;
          });
          var parent = toast.$el.parentNode;

          if (parent) {
            parent.removeChild(toast.$el);
          }

          toast.$destroy();
        });
      }
    } });


  (0, _extends2.default)(toast, transformOptions(options));

  clearTimeout(toast.timer);

  if (options.duration > 0) {
    toast.timer = setTimeout(function () {
      toast.clear();
    }, options.duration);
  }

  return toast;
}

var createMethod = function createMethod(type) {
  return function (options) {
    return Toast((0, _extends2.default)({
      type: type },
    parseOptions(options)));
  };
};

['loading', 'success', 'fail'].forEach(function (method) {
  Toast[method] = createMethod(method);
});

Toast.clear = function (all) {
  if (queue.length) {
    if (all) {
      queue.forEach(function (toast) {
        toast.clear();
      });
      queue = [];
    } else if (!multiple) {
      queue[0].clear();
    } else {
      queue.shift().clear();
    }
  }
};

Toast.setDefaultOptions = function (options) {
  (0, _extends2.default)(currentOptions, options);
};

Toast.resetDefaultOptions = function () {
  currentOptions = (0, _extends2.default)({}, defaultOptions);
};

Toast.allowMultiple = function (value) {
  if (value === void 0) {
    value = true;
  }

  multiple = value;
};

Toast.install = function () {
  _vue.default.use(_Toast.default);
};

_vue.default.prototype.$toast = Toast;var _default =
Toast;exports.default = _default;

/***/ }),
/* 57 */
/*!***************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/toast/Toast.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _utils = __webpack_require__(/*! ../utils */ 15);
var _popup = __webpack_require__(/*! ../mixins/popup */ 29);
var _icon = _interopRequireDefault(__webpack_require__(/*! ../icon */ 37));
var _loading = _interopRequireDefault(__webpack_require__(/*! ../loading */ 41));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var _createNamespace = (0, _utils.createNamespace)('toast'),
createComponent = _createNamespace[0],
bem = _createNamespace[1];var _default =

createComponent({
  mixins: [_popup.PopupMixin],
  props: {
    icon: String,
    className: null,
    iconPrefix: String,
    loadingType: String,
    forbidClick: Boolean,
    closeOnClick: Boolean,
    message: [Number, String],
    type: {
      type: String,
      default: 'text' },

    position: {
      type: String,
      default: 'middle' },

    lockScroll: {
      type: Boolean,
      default: false } },


  data: function data() {
    return {
      clickable: false };

  },
  mounted: function mounted() {
    this.toggleClickable();
  },
  destroyed: function destroyed() {
    this.toggleClickable();
  },
  watch: {
    value: 'toggleClickable',
    forbidClick: 'toggleClickable' },

  methods: {
    onClick: function onClick() {
      if (this.closeOnClick) {
        this.close();
      }
    },
    toggleClickable: function toggleClickable() {
      var clickable = this.value && this.forbidClick;

      if (this.clickable !== clickable) {
        this.clickable = clickable;
        var action = clickable ? 'add' : 'remove';
        document.body.classList[action]('van-toast--unclickable');
      }
    },

    /* istanbul ignore next */
    onAfterEnter: function onAfterEnter() {
      this.$emit('opened');

      if (this.onOpened) {
        this.onOpened();
      }
    },
    onAfterLeave: function onAfterLeave() {
      this.$emit('closed');
    } },

  render: function render() {
    var h = arguments[0];
    var type = this.type,
    icon = this.icon,
    message = this.message,
    iconPrefix = this.iconPrefix,
    loadingType = this.loadingType;
    var hasIcon = icon || type === 'success' || type === 'fail';

    function ToastIcon() {
      if (hasIcon) {
        return h(_icon.default, {
          "class": bem('icon'),
          "attrs": {
            "classPrefix": iconPrefix,
            "name": icon || type } });


      }

      if (type === 'loading') {
        return h(_loading.default, {
          "class": bem('loading'),
          "attrs": {
            "color": "white",
            "type": loadingType } });


      }
    }

    function Message() {
      if (!(0, _utils.isDef)(message) || message === '') {
        return;
      }

      if (type === 'html') {
        return h("div", {
          "class": bem('text'),
          "domProps": {
            "innerHTML": message } });


      }

      return h("div", {
        "class": bem('text') },
      [message]);
    }

    return h("transition", {
      "attrs": {
        "name": "van-fade" },

      "on": {
        "afterEnter": this.onAfterEnter,
        "afterLeave": this.onAfterLeave } },

    [h("div", {
      "directives": [{
        name: "show",
        value: this.value }],

      "class": [bem([this.position, {
        text: !hasIcon && type !== 'loading' }]),
      this.className],
      "on": {
        "click": this.onClick } },

    [ToastIcon(), Message()])]);
  } });exports.default = _default;

/***/ }),
/* 58 */
/*!****************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/button/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/esm/extends */ 13));
var _babelHelperVueJsxMergeProps = _interopRequireDefault(__webpack_require__(/*! @vue/babel-helper-vue-jsx-merge-props */ 14));
var _utils = __webpack_require__(/*! ../utils */ 15);
var _functional = __webpack_require__(/*! ../utils/functional */ 27);
var _constant = __webpack_require__(/*! ../utils/constant */ 28);
var _router = __webpack_require__(/*! ../utils/router */ 53);
var _icon = _interopRequireDefault(__webpack_require__(/*! ../icon */ 37));
var _loading = _interopRequireDefault(__webpack_require__(/*! ../loading */ 41));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // Types

var _createNamespace = (0, _utils.createNamespace)('button'),
createComponent = _createNamespace[0],
bem = _createNamespace[1];

function Button(h, props, slots, ctx) {
  var _ref;

  var tag = props.tag,
  icon = props.icon,
  type = props.type,
  color = props.color,
  plain = props.plain,
  disabled = props.disabled,
  loading = props.loading,
  hairline = props.hairline,
  loadingText = props.loadingText;
  var style = {};

  if (color) {
    style.borderColor = color;
    style.color = plain ? color : _constant.WHITE;

    if (!plain) {
      // Use background instead of backgroundColor to make linear-gradient work
      style.background = color;
    }
  }

  function onClick(event) {
    if (!loading && !disabled) {
      (0, _functional.emit)(ctx, 'click', event);
      (0, _router.functionalRoute)(ctx);
    }
  }

  function onTouchstart(event) {
    (0, _functional.emit)(ctx, 'touchstart', event);
  }

  var classes = [bem([type, props.size, {
    plain: plain,
    disabled: disabled,
    hairline: hairline,
    block: props.block,
    round: props.round,
    square: props.square }]), (
  _ref = {}, _ref[_constant.BORDER_SURROUND] = hairline, _ref)];

  function Content() {
    var content = [];

    if (loading) {
      content.push(h(_loading.default, {
        "class": bem('loading'),
        "attrs": {
          "size": props.loadingSize,
          "type": props.loadingType,
          "color": type === 'default' ? undefined : '' } }));


    } else if (icon) {
      content.push(h(_icon.default, {
        "attrs": {
          "name": icon },

        "class": bem('icon') }));

    }

    var text;

    if (loading) {
      text = loadingText;
    } else {
      text = slots.default ? slots.default() : props.text;
    }

    if (text) {
      content.push(h("span", {
        "class": bem('text') },
      [text]));
    }

    return content;
  }

  return h(tag, (0, _babelHelperVueJsxMergeProps.default)([{
    "style": style,
    "class": classes,
    "attrs": {
      "type": props.nativeType,
      "disabled": disabled },

    "on": {
      "click": onClick,
      "touchstart": onTouchstart } },

  (0, _functional.inherit)(ctx)]), [Content()]);
}

Button.props = (0, _extends2.default)({}, _router.routeProps, {
  text: String,
  icon: String,
  color: String,
  block: Boolean,
  plain: Boolean,
  round: Boolean,
  square: Boolean,
  loading: Boolean,
  hairline: Boolean,
  disabled: Boolean,
  nativeType: String,
  loadingText: String,
  loadingType: String,
  tag: {
    type: String,
    default: 'button' },

  type: {
    type: String,
    default: 'default' },

  size: {
    type: String,
    default: 'normal' },

  loadingSize: {
    type: String,
    default: '20px' } });var _default =


createComponent(Button);exports.default = _default;

/***/ }),
/* 59 */
/*!****************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/dialog/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/esm/extends */ 13));
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _Dialog = _interopRequireDefault(__webpack_require__(/*! ./Dialog */ 60));
var _utils = __webpack_require__(/*! ../utils */ 15);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
var instance;

function isInDocument(element) {
  return document.body.contains(element);
}

function initInstance() {
  if (instance) {
    instance.$destroy();
  }

  instance = new (_vue.default.extend(_Dialog.default))({
    el: document.createElement('div'),
    // avoid missing animation when first rendered
    propsData: {
      lazyRender: false } });


  instance.$on('input', function (value) {
    instance.value = value;
  });
}

function Dialog(options) {
  /* istanbul ignore if */
  if (_utils.isServer) {
    return Promise.resolve();
  }

  return new Promise(function (resolve, reject) {
    if (!instance || !isInDocument(instance.$el)) {
      initInstance();
    }

    (0, _extends2.default)(instance, Dialog.currentOptions, options, {
      resolve: resolve,
      reject: reject });

  });
}

Dialog.defaultOptions = {
  value: true,
  title: '',
  message: '',
  overlay: true,
  className: '',
  lockScroll: true,
  beforeClose: null,
  messageAlign: '',
  getContainer: 'body',
  cancelButtonText: '',
  cancelButtonColor: null,
  confirmButtonText: '',
  confirmButtonColor: null,
  showConfirmButton: true,
  showCancelButton: false,
  closeOnPopstate: false,
  closeOnClickOverlay: false,
  callback: function callback(action) {
    instance[action === 'confirm' ? 'resolve' : 'reject'](action);
  } };

Dialog.alert = Dialog;

Dialog.confirm = function (options) {
  return Dialog((0, _extends2.default)({
    showCancelButton: true },
  options));
};

Dialog.close = function () {
  if (instance) {
    instance.value = false;
  }
};

Dialog.setDefaultOptions = function (options) {
  (0, _extends2.default)(Dialog.currentOptions, options);
};

Dialog.resetDefaultOptions = function () {
  Dialog.currentOptions = (0, _extends2.default)({}, Dialog.defaultOptions);
};

Dialog.resetDefaultOptions();

Dialog.install = function () {
  _vue.default.use(_Dialog.default);
};

Dialog.Component = _Dialog.default;
_vue.default.prototype.$dialog = Dialog;var _default =
Dialog;exports.default = _default;

/***/ }),
/* 60 */
/*!*****************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/dialog/Dialog.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _utils = __webpack_require__(/*! ../utils */ 15);
var _constant = __webpack_require__(/*! ../utils/constant */ 28);
var _popup = __webpack_require__(/*! ../mixins/popup */ 29);
var _closeOnPopstate = __webpack_require__(/*! ../mixins/close-on-popstate */ 61);
var _button = _interopRequireDefault(__webpack_require__(/*! ../button */ 58));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var _createNamespace = (0, _utils.createNamespace)('dialog'),
createComponent = _createNamespace[0],
bem = _createNamespace[1],
t = _createNamespace[2];var _default =

createComponent({
  mixins: [_popup.PopupMixin, _closeOnPopstate.CloseOnPopstateMixin],
  props: {
    title: String,
    message: String,
    className: null,
    callback: Function,
    beforeClose: Function,
    messageAlign: String,
    cancelButtonText: String,
    cancelButtonColor: String,
    confirmButtonText: String,
    confirmButtonColor: String,
    showCancelButton: Boolean,
    showConfirmButton: {
      type: Boolean,
      default: true },

    overlay: {
      type: Boolean,
      default: true },

    closeOnClickOverlay: {
      type: Boolean,
      default: false } },


  data: function data() {
    return {
      loading: {
        confirm: false,
        cancel: false } };


  },
  methods: {
    onClickOverlay: function onClickOverlay() {
      this.handleAction('overlay');
    },
    handleAction: function handleAction(action) {
      var _this = this;

      this.$emit(action);

      if (this.beforeClose) {
        this.loading[action] = true;
        this.beforeClose(action, function (state) {
          if (state !== false) {
            _this.onClose(action);
          }

          _this.loading[action] = false;
        });
      } else {
        this.onClose(action);
      }
    },
    onClose: function onClose(action) {
      this.close();

      if (this.callback) {
        this.callback(action);
      }
    } },

  render: function render() {
    var _bem,
    _this2 = this,
    _ref;

    var h = arguments[0];

    if (!this.shouldRender) {
      return;
    }

    var message = this.message,
    messageAlign = this.messageAlign;
    var messageSlot = this.slots();
    var title = this.slots('title') || this.title;
    var Title = title && h("div", {
      "class": bem('header', {
        isolated: !message && !messageSlot }) },

    [title]);
    var Content = (messageSlot || message) && h("div", {
      "class": bem('content') },
    [messageSlot || h("div", {
      "domProps": {
        "innerHTML": message },

      "class": bem('message', (_bem = {
        'has-title': title },
      _bem[messageAlign] = messageAlign, _bem)) })]);

    var hasButtons = this.showCancelButton && this.showConfirmButton;
    var ButtonGroup = h("div", {
      "class": [_constant.BORDER_TOP, bem('footer', {
        buttons: hasButtons })] },

    [this.showCancelButton && h(_button.default, {
      "attrs": {
        "size": "large",
        "loading": this.loading.cancel,
        "text": this.cancelButtonText || t('cancel') },

      "class": bem('cancel'),
      "style": {
        color: this.cancelButtonColor },

      "on": {
        "click": function click() {
          _this2.handleAction('cancel');
        } } }),

    this.showConfirmButton && h(_button.default, {
      "attrs": {
        "size": "large",
        "loading": this.loading.confirm,
        "text": this.confirmButtonText || t('confirm') },

      "class": [bem('confirm'), (_ref = {}, _ref[_constant.BORDER_LEFT] = hasButtons, _ref)],
      "style": {
        color: this.confirmButtonColor },

      "on": {
        "click": function click() {
          _this2.handleAction('confirm');
        } } })]);


    return h("transition", {
      "attrs": {
        "name": "van-dialog-bounce" } },

    [h("div", {
      "directives": [{
        name: "show",
        value: this.value }],

      "attrs": {
        "role": "dialog",
        "aria-labelledby": this.title || message },

      "class": [bem(), this.className] },
    [Title, Content, ButtonGroup])]);
  } });exports.default = _default;

/***/ }),
/* 61 */
/*!****************************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/mixins/close-on-popstate.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.CloseOnPopstateMixin = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _event = __webpack_require__(/*! ../utils/dom/event */ 33);
var _bindEvent = __webpack_require__(/*! ./bind-event */ 62);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
var CloseOnPopstateMixin = _vue.default.extend({
  mixins: [(0, _bindEvent.BindEventMixin)(function (bind, isBind) {
    this.handlePopstate(isBind && this.closeOnPopstate);
  })],
  props: {
    closeOnPopstate: Boolean },

  data: function data() {
    return {
      bindStatus: false };

  },
  watch: {
    closeOnPopstate: function closeOnPopstate(val) {
      this.handlePopstate(val);
    } },

  methods: {
    handlePopstate: function handlePopstate(bind) {
      /* istanbul ignore if */
      if (this.$isServer) {
        return;
      }

      if (this.bindStatus !== bind) {
        this.bindStatus = bind;
        var action = bind ? _event.on : _event.off;
        action(window, 'popstate', this.close);
      }
    } } });exports.CloseOnPopstateMixin = CloseOnPopstateMixin;

/***/ }),
/* 62 */
/*!*********************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/mixins/bind-event.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.BindEventMixin = BindEventMixin;


var _event = __webpack_require__(/*! ../utils/dom/event */ 33); /**
                                             * Bind event when mounted or activated
                                             */function BindEventMixin(handler) {function bind() {
    if (!this.binded) {
      handler.call(this, _event.on, true);
      this.binded = true;
    }
  }

  function unbind() {
    if (this.binded) {
      handler.call(this, _event.off, false);
      this.binded = false;
    }
  }

  return {
    mounted: bind,
    activated: bind,
    deactivated: unbind,
    beforeDestroy: unbind };

}

/***/ }),
/* 63 */
/*!***********************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/address-edit/Detail.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/esm/extends */ 13));
var _utils = __webpack_require__(/*! ../utils */ 15);
var _system = __webpack_require__(/*! ../utils/validate/system */ 55);
var _cell = _interopRequireDefault(__webpack_require__(/*! ../cell */ 51));
var _field = _interopRequireDefault(__webpack_require__(/*! ../field */ 50));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var _createNamespace = (0, _utils.createNamespace)('address-edit-detail'),
createComponent = _createNamespace[0],
bem = _createNamespace[1],
t = _createNamespace[2];

var android = (0, _system.isAndroid)();var _default =
createComponent({
  props: {
    value: String,
    error: Boolean,
    focused: Boolean,
    detailRows: Number,
    searchResult: Array,
    detailMaxlength: Number,
    showSearchResult: Boolean },

  methods: {
    onSelect: function onSelect(express) {
      this.$emit('select-search', express);
      this.$emit('input', ((express.address || '') + " " + (express.name || '')).trim());
    },
    onFinish: function onFinish() {
      this.$refs.field.blur();
    },
    renderFinish: function renderFinish() {
      var h = this.$createElement;
      var show = this.value && this.focused && android;

      if (show) {
        return h("div", {
          "class": bem('finish'),
          "on": {
            "click": this.onFinish } },

        [t('complete')]);
      }
    },
    renderSearchResult: function renderSearchResult() {
      var _this = this;

      var h = this.$createElement;
      var searchResult = this.searchResult;
      var show = this.focused && searchResult && this.showSearchResult;

      if (show) {
        return searchResult.map(function (express) {
          return h(_cell.default, {
            "key": express.name + express.address,
            "attrs": {
              "title": express.name,
              "label": express.address,
              "icon": "location-o",
              "clickable": true },

            "on": {
              "click": function click() {
                _this.onSelect(express);
              } } });


        });
      }
    } },

  render: function render() {
    var h = arguments[0];
    return h(_cell.default, {
      "class": bem() },
    [h(_field.default, {
      "attrs": {
        "autosize": true,
        "rows": this.detailRows,
        "clearable": !android,
        "type": "textarea",
        "value": this.value,
        "error": this.error,
        "label": t('label'),
        "maxlength": this.detailMaxlength,
        "placeholder": t('placeholder') },

      "ref": "field",
      "scopedSlots": {
        icon: this.renderFinish },

      "on": (0, _extends2.default)({}, this.$listeners) }),
    this.renderSearchResult()]);
  } });exports.default = _default;

/***/ }),
/* 64 */
/*!*********************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/switch-cell/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/esm/extends */ 13));
var _babelHelperVueJsxMergeProps = _interopRequireDefault(__webpack_require__(/*! @vue/babel-helper-vue-jsx-merge-props */ 14));
var _utils = __webpack_require__(/*! ../utils */ 15);
var _functional = __webpack_require__(/*! ../utils/functional */ 27);
var _cell = _interopRequireDefault(__webpack_require__(/*! ../cell */ 51));
var _switch = _interopRequireDefault(__webpack_require__(/*! ../switch */ 65));
var _shared = __webpack_require__(/*! ../switch/shared */ 66);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // Types

var _createNamespace = (0, _utils.createNamespace)('switch-cell'),
createComponent = _createNamespace[0],
bem = _createNamespace[1];

function SwitchCell(h, props, slots, ctx) {
  return h(_cell.default, (0, _babelHelperVueJsxMergeProps.default)([{
    "attrs": {
      "center": true,
      "size": props.cellSize,
      "title": props.title,
      "border": props.border },

    "class": bem([props.cellSize]) },
  (0, _functional.inherit)(ctx)]), [h(_switch.default, {
    "props": (0, _extends2.default)({}, props),
    "on": (0, _extends2.default)({}, ctx.listeners) })]);

}

SwitchCell.props = (0, _extends2.default)({}, _shared.switchProps, {
  title: String,
  cellSize: String,
  border: {
    type: Boolean,
    default: true },

  size: {
    type: String,
    default: '24px' } });var _default =


createComponent(SwitchCell);exports.default = _default;

/***/ }),
/* 65 */
/*!****************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/switch/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _babelHelperVueJsxMergeProps = _interopRequireDefault(__webpack_require__(/*! @vue/babel-helper-vue-jsx-merge-props */ 14));
var _utils = __webpack_require__(/*! ../utils */ 15);
var _constant = __webpack_require__(/*! ../utils/constant */ 28);
var _shared = __webpack_require__(/*! ./shared */ 66);
var _functional = __webpack_require__(/*! ../utils/functional */ 27);
var _loading = _interopRequireDefault(__webpack_require__(/*! ../loading */ 41));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // Types

var _createNamespace = (0, _utils.createNamespace)('switch'),
createComponent = _createNamespace[0],
bem = _createNamespace[1];

function Switch(h, props, slots, ctx) {
  var size = props.size,
  value = props.value,
  loading = props.loading,
  disabled = props.disabled,
  activeColor = props.activeColor,
  activeValue = props.activeValue,
  inactiveColor = props.inactiveColor,
  inactiveValue = props.inactiveValue;
  var checked = value === activeValue;
  var switchStyle = {
    fontSize: size,
    backgroundColor: checked ? activeColor : inactiveColor };

  var loadingColor = checked ? activeColor || _constant.BLUE : inactiveColor || _constant.GRAY_DARK;

  function onClick() {
    if (!disabled && !loading) {
      var newValue = checked ? inactiveValue : activeValue;
      (0, _functional.emit)(ctx, 'input', newValue);
      (0, _functional.emit)(ctx, 'change', newValue);
    }
  }

  return h("div", (0, _babelHelperVueJsxMergeProps.default)([{
    "class": bem({
      on: checked,
      disabled: disabled }),

    "attrs": {
      "role": "switch",
      "aria-checked": String(checked) },

    "style": switchStyle,
    "on": {
      "click": onClick } },

  (0, _functional.inherit)(ctx)]), [h("div", {
    "class": bem('node') },
  [loading && h(_loading.default, {
    "class": bem('loading'),
    "attrs": {
      "color": loadingColor } })])]);


}

Switch.props = _shared.switchProps;var _default =
createComponent(Switch);exports.default = _default;

/***/ }),
/* 66 */
/*!*****************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/switch/shared.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.switchProps = void 0; /**
                                                                                                          * Common Switch Props
                                                                                                          */
var switchProps = {
  value: null,
  loading: Boolean,
  disabled: Boolean,
  activeColor: String,
  inactiveColor: String,
  activeValue: {
    type: null,
    default: true },

  inactiveValue: {
    type: null,
    default: false },

  size: {
    type: String,
    default: '30px' } };exports.switchProps = switchProps;

/***/ }),
/* 67 */
/*!**********************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/address-list/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _babelHelperVueJsxMergeProps = _interopRequireDefault(__webpack_require__(/*! @vue/babel-helper-vue-jsx-merge-props */ 14));
var _utils = __webpack_require__(/*! ../utils */ 15);
var _functional = __webpack_require__(/*! ../utils/functional */ 27);
var _button = _interopRequireDefault(__webpack_require__(/*! ../button */ 58));
var _radioGroup = _interopRequireDefault(__webpack_require__(/*! ../radio-group */ 68));
var _Item = _interopRequireDefault(__webpack_require__(/*! ./Item */ 70));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // Types

var _createNamespace = (0, _utils.createNamespace)('address-list'),
createComponent = _createNamespace[0],
bem = _createNamespace[1],
t = _createNamespace[2];

function AddressList(h, props, slots, ctx) {
  function renderList(list, disabled) {
    if (!list) {
      return;
    }

    return list.map(function (item, index) {
      return h(_Item.default, {
        "attrs": {
          "data": item,
          "disabled": disabled,
          "switchable": props.switchable },

        "key": item.id,
        "on": {
          "select": function select() {
            (0, _functional.emit)(ctx, disabled ? 'select-disabled' : 'select', item, index);

            if (!disabled) {
              (0, _functional.emit)(ctx, 'input', item.id);
            }
          },
          "edit": function edit() {
            (0, _functional.emit)(ctx, disabled ? 'edit-disabled' : 'edit', item, index);
          },
          "click": function click() {
            (0, _functional.emit)(ctx, 'click-item', item, index);
          } } });


    });
  }

  var List = renderList(props.list);
  var DisabledList = renderList(props.disabledList, true);
  return h("div", (0, _babelHelperVueJsxMergeProps.default)([{
    "class": bem() },
  (0, _functional.inherit)(ctx)]), [slots.top && slots.top(), h(_radioGroup.default, {
    "attrs": {
      "value": props.value },

    "on": {
      "input": function input(event) {
        (0, _functional.emit)(ctx, 'input', event);
      } } },

  [List]), props.disabledText && h("div", {
    "class": bem('disabled-text') },
  [props.disabledText]), DisabledList, slots.default && slots.default(), h(_button.default, {
    "attrs": {
      "square": true,
      "size": "large",
      "type": "danger",
      "text": props.addButtonText || t('add') },

    "class": bem('add'),
    "on": {
      "click": function click() {
        (0, _functional.emit)(ctx, 'add');
      } } })]);


}

AddressList.props = {
  list: Array,
  disabledList: Array,
  disabledText: String,
  addButtonText: String,
  value: [Number, String],
  switchable: {
    type: Boolean,
    default: true } };var _default =


createComponent(AddressList);exports.default = _default;

/***/ }),
/* 68 */
/*!*********************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/radio-group/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _utils = __webpack_require__(/*! ../utils */ 15);
var _relation = __webpack_require__(/*! ../mixins/relation */ 69);

var _createNamespace = (0, _utils.createNamespace)('radio-group'),
createComponent = _createNamespace[0],
bem = _createNamespace[1];var _default =

createComponent({
  mixins: [(0, _relation.ParentMixin)('vanRadio')],
  props: {
    value: null,
    disabled: Boolean },

  watch: {
    value: function value(_value) {
      this.$emit('change', _value);
    } },

  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": bem(),
      "attrs": {
        "role": "radiogroup" } },

    [this.slots()]);
  } });exports.default = _default;

/***/ }),
/* 69 */
/*!*******************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/mixins/relation.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.ChildrenMixin = ChildrenMixin;exports.ParentMixin = ParentMixin;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

function flattenVNodes(vnodes) {
  var result = [];

  function traverse(vnodes) {
    vnodes.forEach(function (vnode) {
      result.push(vnode);

      if (vnode.children) {
        traverse(vnode.children);
      }
    });
  }

  traverse(vnodes);
  return result;
}

function ChildrenMixin(_parent, options) {
  var _inject, _computed;

  if (options === void 0) {
    options = {};
  }

  var indexKey = options.indexKey || 'index';
  return _vue.default.extend({
    inject: (_inject = {}, _inject[_parent] = {
      default: null },
    _inject),
    computed: (_computed = {
      parent: function parent() {
        return this[_parent];
      } },
    _computed[indexKey] = function () {
      this.bindRelation();
      return this.parent.children.indexOf(this);
    }, _computed),
    mounted: function mounted() {
      this.bindRelation();
    },
    beforeDestroy: function beforeDestroy() {
      var _this = this;

      if (this.parent) {
        this.parent.children = this.parent.children.filter(function (item) {
          return item !== _this;
        });
      }
    },
    methods: {
      bindRelation: function bindRelation() {
        if (!this.parent || this.parent.children.indexOf(this) !== -1) {
          return;
        }

        var children = [].concat(this.parent.children, [this]);
        var vnodes = flattenVNodes(this.parent.slots());
        children.sort(function (a, b) {
          return vnodes.indexOf(a.$vnode) - vnodes.indexOf(b.$vnode);
        });
        this.parent.children = children;
      } } });


}
function ParentMixin(parent) {
  return {
    provide: function provide() {
      var _ref;

      return _ref = {}, _ref[parent] = this, _ref;
    },
    data: function data() {
      return {
        children: [] };

    } };

}

/***/ }),
/* 70 */
/*!*********************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/address-list/Item.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _babelHelperVueJsxMergeProps = _interopRequireDefault(__webpack_require__(/*! @vue/babel-helper-vue-jsx-merge-props */ 14));
var _utils = __webpack_require__(/*! ../utils */ 15);
var _constant = __webpack_require__(/*! ../utils/constant */ 28);
var _functional = __webpack_require__(/*! ../utils/functional */ 27);
var _icon = _interopRequireDefault(__webpack_require__(/*! ../icon */ 37));
var _cell = _interopRequireDefault(__webpack_require__(/*! ../cell */ 51));
var _radio = _interopRequireDefault(__webpack_require__(/*! ../radio */ 71));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // Types

var _createNamespace = (0, _utils.createNamespace)('address-item'),
createComponent = _createNamespace[0],
bem = _createNamespace[1];

function AddressItem(h, props, slots, ctx) {
  var disabled = props.disabled,
  switchable = props.switchable;

  function onClick() {
    if (switchable) {
      (0, _functional.emit)(ctx, 'select');
    }

    (0, _functional.emit)(ctx, 'click');
  }

  var renderRightIcon = function renderRightIcon() {
    return h(_icon.default, {
      "attrs": {
        "name": "edit" },

      "class": bem('edit'),
      "on": {
        "click": function click(event) {
          event.stopPropagation();
          (0, _functional.emit)(ctx, 'edit');
          (0, _functional.emit)(ctx, 'click');
        } } });


  };

  var renderContent = function renderContent() {
    var data = props.data;
    var Info = [h("div", {
      "class": bem('name') },
    [data.name + "\uFF0C" + data.tel]), h("div", {
      "class": bem('address') },
    [data.address])];
    return switchable && !disabled ? h(_radio.default, {
      "attrs": {
        "name": data.id,
        "iconSize": 16,
        "checkedColor": _constant.RED } },

    [Info]) : Info;
  };

  return h(_cell.default, (0, _babelHelperVueJsxMergeProps.default)([{
    "class": bem({
      disabled: disabled }),

    "attrs": {
      "valueClass": bem('value'),
      "clickable": switchable && !disabled },

    "scopedSlots": {
      default: renderContent,
      'right-icon': renderRightIcon },

    "on": {
      "click": onClick } },

  (0, _functional.inherit)(ctx)]));
}

AddressItem.props = {
  data: Object,
  disabled: Boolean,
  switchable: Boolean };var _default =

createComponent(AddressItem);exports.default = _default;

/***/ }),
/* 71 */
/*!***************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/radio/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _utils = __webpack_require__(/*! ../utils */ 15);
var _checkbox = __webpack_require__(/*! ../mixins/checkbox */ 72);

var _createNamespace = (0, _utils.createNamespace)('radio'),
createComponent = _createNamespace[0],
bem = _createNamespace[1];var _default =

createComponent({
  mixins: [(0, _checkbox.CheckboxMixin)({
    bem: bem,
    role: 'radio',
    parent: 'vanRadio' })],

  computed: {
    currentValue: {
      get: function get() {
        return this.parent ? this.parent.value : this.value;
      },
      set: function set(val) {
        (this.parent || this).$emit('input', val);
      } },

    checked: function checked() {
      return this.currentValue === this.name;
    } },

  methods: {
    toggle: function toggle() {
      this.currentValue = this.name;
    } } });exports.default = _default;

/***/ }),
/* 72 */
/*!*******************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/mixins/checkbox.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.CheckboxMixin = void 0;


var _icon = _interopRequireDefault(__webpack_require__(/*! ../icon */ 37));
var _relation = __webpack_require__(/*! ./relation */ 69);
var _utils = __webpack_require__(/*! ../utils */ 15);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /**
                                                                                                                                * Common part of Checkbox & Radio
                                                                                                                                */var CheckboxMixin = function CheckboxMixin(_ref) {var parent = _ref.parent,
  bem = _ref.bem,
  role = _ref.role;
  return {
    mixins: [(0, _relation.ChildrenMixin)(parent)],
    props: {
      name: null,
      value: null,
      disabled: Boolean,
      iconSize: [Number, String],
      checkedColor: String,
      labelPosition: String,
      labelDisabled: Boolean,
      shape: {
        type: String,
        default: 'round' } },


    computed: {
      isDisabled: function isDisabled() {
        return this.parent && this.parent.disabled || this.disabled;
      },
      iconStyle: function iconStyle() {
        var checkedColor = this.checkedColor;

        if (checkedColor && this.checked && !this.isDisabled) {
          return {
            borderColor: checkedColor,
            backgroundColor: checkedColor };

        }
      },
      tabindex: function tabindex() {
        if (this.isDisabled || role === 'radio' && !this.checked) {
          return -1;
        }

        return 0;
      } },

    methods: {
      onClick: function onClick(event) {
        var label = this.$refs.label;
        var target = event.target;
        var labelClicked = label && (label === target || label.contains(target));

        if (!this.isDisabled && !(labelClicked && this.labelDisabled)) {
          this.toggle();
        }

        this.$emit('click', event);
      } },

    render: function render() {
      var h = arguments[0];
      var slots = this.slots,
      checked = this.checked;
      var CheckIcon = slots('icon', {
        checked: checked }) ||
      h(_icon.default, {
        "attrs": {
          "name": "success" },

        "style": this.iconStyle });

      var Label = slots() && h("span", {
        "ref": "label",
        "class": bem('label', [this.labelPosition, {
          disabled: this.isDisabled }]) },

      [slots()]);
      var Children = [h("div", {
        "class": bem('icon', [this.shape, {
          disabled: this.isDisabled,
          checked: checked }]),

        "style": {
          fontSize: (0, _utils.addUnit)(this.iconSize) } },

      [CheckIcon])];

      if (this.labelPosition === 'left') {
        Children.unshift(Label);
      } else {
        Children.push(Label);
      }

      return h("div", {
        "attrs": {
          "role": role,
          "tabindex": this.tabindex,
          "aria-checked": String(this.checked) },

        "class": bem(),
        "on": {
          "click": this.onClick } },

      [Children]);
    } };

};exports.CheckboxMixin = CheckboxMixin;

/***/ }),
/* 73 */
/*!**************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/card/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _babelHelperVueJsxMergeProps = _interopRequireDefault(__webpack_require__(/*! @vue/babel-helper-vue-jsx-merge-props */ 14));
var _utils = __webpack_require__(/*! ../utils */ 15);
var _functional = __webpack_require__(/*! ../utils/functional */ 27);
var _tag = _interopRequireDefault(__webpack_require__(/*! ../tag */ 74));
var _image = _interopRequireDefault(__webpack_require__(/*! ../image */ 39));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // Types

var _createNamespace = (0, _utils.createNamespace)('card'),
createComponent = _createNamespace[0],
bem = _createNamespace[1];

function Card(h, props, slots, ctx) {
  var thumb = props.thumb;
  var showNum = slots.num || (0, _utils.isDef)(props.num);
  var showPrice = slots.price || (0, _utils.isDef)(props.price);
  var showOriginPrice = slots['origin-price'] || (0, _utils.isDef)(props.originPrice);
  var showBottom = showNum || showPrice || showOriginPrice;

  function onThumbClick(event) {
    (0, _functional.emit)(ctx, 'click-thumb', event);
  }

  function ThumbTag() {
    if (slots.tag || props.tag) {
      return h("div", {
        "class": bem('tag') },
      [slots.tag ? slots.tag() : h(_tag.default, {
        "attrs": {
          "mark": true,
          "type": "danger" } },

      [props.tag])]);
    }
  }

  function Thumb() {
    if (slots.thumb || thumb) {
      return h("a", {
        "attrs": {
          "href": props.thumbLink },

        "class": bem('thumb'),
        "on": {
          "click": onThumbClick } },

      [slots.thumb ? slots.thumb() : h(_image.default, {
        "attrs": {
          "src": thumb,
          "width": "100%",
          "height": "100%",
          "fit": "contain",
          "lazy-load": props.lazyLoad } }),

      ThumbTag()]);
    }
  }

  function Title() {
    if (slots.title) {
      return slots.title();
    }

    if (props.title) {
      return h("div", {
        "class": bem('title') },
      [props.title]);
    }
  }

  function Desc() {
    if (slots.desc) {
      return slots.desc();
    }

    if (props.desc) {
      return h("div", {
        "class": [bem('desc'), 'van-ellipsis'] },
      [props.desc]);
    }
  }

  function Price() {
    if (showPrice) {
      return h("div", {
        "class": bem('price') },
      [slots.price ? slots.price() : props.currency + " " + props.price]);
    }
  }

  function OriginPrice() {
    if (showOriginPrice) {
      var slot = slots['origin-price'];
      return h("div", {
        "class": bem('origin-price') },
      [slot ? slot() : props.currency + " " + props.originPrice]);
    }
  }

  function Num() {
    if (showNum) {
      return h("div", {
        "class": bem('num') },
      [slots.num ? slots.num() : "x " + props.num]);
    }
  }

  function Footer() {
    if (slots.footer) {
      return h("div", {
        "class": bem('footer') },
      [slots.footer()]);
    }
  }

  return h("div", (0, _babelHelperVueJsxMergeProps.default)([{
    "class": bem() },
  (0, _functional.inherit)(ctx, true)]), [h("div", {
    "class": bem('header') },
  [Thumb(), h("div", {
    "class": bem('content', {
      centered: props.centered }) },

  [Title(), Desc(), slots.tags && slots.tags(), showBottom && h("div", {
    "class": "van-card__bottom" },
  [Price(), OriginPrice(), Num(), slots.bottom && slots.bottom()])])]), Footer()]);
}

Card.props = {
  tag: String,
  desc: String,
  thumb: String,
  title: String,
  centered: Boolean,
  lazyLoad: Boolean,
  thumbLink: String,
  num: [Number, String],
  price: [Number, String],
  originPrice: [Number, String],
  currency: {
    type: String,
    default: '¥' } };var _default =


createComponent(Card);exports.default = _default;

/***/ }),
/* 74 */
/*!*************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/tag/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _babelHelperVueJsxMergeProps = _interopRequireDefault(__webpack_require__(/*! @vue/babel-helper-vue-jsx-merge-props */ 14));
var _utils = __webpack_require__(/*! ../utils */ 15);
var _functional = __webpack_require__(/*! ../utils/functional */ 27);
var _constant = __webpack_require__(/*! ../utils/constant */ 28);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // Types

var _createNamespace = (0, _utils.createNamespace)('tag'),
createComponent = _createNamespace[0],
bem = _createNamespace[1];

function Tag(h, props, slots, ctx) {
  var _style, _ref;

  var type = props.type,
  mark = props.mark,
  plain = props.plain,
  color = props.color,
  round = props.round,
  size = props.size;
  var key = plain ? 'color' : 'backgroundColor';
  var style = (_style = {}, _style[key] = color, _style);

  if (props.textColor) {
    style.color = props.textColor;
  }

  var classes = {
    mark: mark,
    plain: plain,
    round: round };


  if (size) {
    classes[size] = size;
  }

  return h("span", (0, _babelHelperVueJsxMergeProps.default)([{
    "style": style,
    "class": [bem([classes, type]), (_ref = {}, _ref[_constant.BORDER_SURROUND] = plain, _ref)] },
  (0, _functional.inherit)(ctx, true)]), [slots.default && slots.default()]);
}

Tag.props = {
  size: String,
  mark: Boolean,
  color: String,
  plain: Boolean,
  round: Boolean,
  textColor: String,
  type: {
    type: String,
    default: 'default' } };var _default =


createComponent(Tag);exports.default = _default;

/***/ }),
/* 75 */
/*!********************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/cell-group/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _babelHelperVueJsxMergeProps = _interopRequireDefault(__webpack_require__(/*! @vue/babel-helper-vue-jsx-merge-props */ 14));
var _utils = __webpack_require__(/*! ../utils */ 15);
var _functional = __webpack_require__(/*! ../utils/functional */ 27);
var _constant = __webpack_require__(/*! ../utils/constant */ 28);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // Types

var _createNamespace = (0, _utils.createNamespace)('cell-group'),
createComponent = _createNamespace[0],
bem = _createNamespace[1];

function CellGroup(h, props, slots, ctx) {
  var _ref;

  var Group = h("div", (0, _babelHelperVueJsxMergeProps.default)([{
    "class": [bem(), (_ref = {}, _ref[_constant.BORDER_TOP_BOTTOM] = props.border, _ref)] },
  (0, _functional.inherit)(ctx, true)]), [slots.default && slots.default()]);

  if (props.title || slots.title) {
    return h("div", [h("div", {
      "class": bem('title') },
    [slots.title ? slots.title() : props.title]), Group]);
  }

  return Group;
}

CellGroup.props = {
  title: String,
  border: {
    type: Boolean,
    default: true } };var _default =


createComponent(CellGroup);exports.default = _default;

/***/ }),
/* 76 */
/*!******************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/checkbox/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _utils = __webpack_require__(/*! ../utils */ 15);
var _checkbox = __webpack_require__(/*! ../mixins/checkbox */ 72);

var _createNamespace = (0, _utils.createNamespace)('checkbox'),
createComponent = _createNamespace[0],
bem = _createNamespace[1];var _default =

createComponent({
  mixins: [(0, _checkbox.CheckboxMixin)({
    bem: bem,
    role: 'checkbox',
    parent: 'vanCheckbox' })],

  computed: {
    checked: {
      get: function get() {
        return this.parent ? this.parent.value.indexOf(this.name) !== -1 : this.value;
      },
      set: function set(val) {
        if (this.parent) {
          this.setParentValue(val);
        } else {
          this.$emit('input', val);
        }
      } } },


  watch: {
    value: function value(val) {
      this.$emit('change', val);
    } },

  methods: {
    toggle: function toggle() {
      var _this = this;

      var checked = !this.checked; // When toggle method is called multiple times at the same time,
      // only the last call is valid.
      // This is a hack for usage inside Cell.

      clearTimeout(this.toggleTask);
      this.toggleTask = setTimeout(function () {
        _this.checked = checked;
      });
    },
    setParentValue: function setParentValue(val) {
      var parent = this.parent;
      var value = parent.value.slice();

      if (val) {
        if (parent.max && value.length >= parent.max) {
          return;
        }
        /* istanbul ignore else */


        if (value.indexOf(this.name) === -1) {
          value.push(this.name);
          parent.$emit('input', value);
        }
      } else {
        var index = value.indexOf(this.name);
        /* istanbul ignore else */

        if (index !== -1) {
          value.splice(index, 1);
          parent.$emit('input', value);
        }
      }
    } } });exports.default = _default;

/***/ }),
/* 77 */
/*!************************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/checkbox-group/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _utils = __webpack_require__(/*! ../utils */ 15);
var _relation = __webpack_require__(/*! ../mixins/relation */ 69);

var _createNamespace = (0, _utils.createNamespace)('checkbox-group'),
createComponent = _createNamespace[0],
bem = _createNamespace[1];var _default2 =

createComponent({
  mixins: [(0, _relation.ParentMixin)('vanCheckbox')],
  props: {
    max: Number,
    disabled: Boolean,
    value: {
      type: Array,
      default: function _default() {
        return [];
      } } },


  watch: {
    value: function value(val) {
      this.$emit('change', val);
    } },

  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": bem() },
    [this.slots()]);
  } });exports.default = _default2;

/***/ }),
/* 78 */
/*!****************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/circle/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _utils = __webpack_require__(/*! ../utils */ 15);
var _raf = __webpack_require__(/*! ../utils/dom/raf */ 79);
var _constant = __webpack_require__(/*! ../utils/constant */ 28);

var _createNamespace = (0, _utils.createNamespace)('circle'),
createComponent = _createNamespace[0],
bem = _createNamespace[1];

var PERIMETER = 3140;
var uid = 0;

function format(rate) {
  return Math.min(Math.max(rate, 0), 100);
}

function getPath(clockwise, viewBoxSize) {
  var sweepFlag = clockwise ? 1 : 0;
  return "M " + viewBoxSize / 2 + " " + viewBoxSize / 2 + " m 0, -500 a 500, 500 0 1, " + sweepFlag + " 0, 1000 a 500, 500 0 1, " + sweepFlag + " 0, -1000";
}var _default =

createComponent({
  props: {
    text: String,
    value: {
      type: Number,
      default: 0 },

    speed: {
      type: Number,
      default: 0 },

    size: {
      type: [String, Number],
      default: 100 },

    fill: {
      type: String,
      default: 'none' },

    rate: {
      type: Number,
      default: 100 },

    layerColor: {
      type: String,
      default: _constant.WHITE },

    color: {
      type: [String, Object],
      default: _constant.BLUE },

    strokeWidth: {
      type: Number,
      default: 40 },

    clockwise: {
      type: Boolean,
      default: true } },


  beforeCreate: function beforeCreate() {
    this.uid = "van-circle-gradient-" + uid++;
  },
  computed: {
    style: function style() {
      var size = (0, _utils.addUnit)(this.size);
      return {
        width: size,
        height: size };

    },
    path: function path() {
      return getPath(this.clockwise, this.viewBoxSize);
    },
    viewBoxSize: function viewBoxSize() {
      return 1000 + this.strokeWidth;
    },
    layerStyle: function layerStyle() {
      var offset = PERIMETER * this.value / 100;
      return {
        stroke: "" + this.color,
        strokeWidth: this.strokeWidth + 1 + "px",
        strokeDasharray: offset + "px " + PERIMETER + "px" };

    },
    hoverStyle: function hoverStyle() {
      return {
        fill: "" + this.fill,
        stroke: "" + this.layerColor,
        strokeWidth: this.strokeWidth + "px" };

    },
    gradient: function gradient() {
      return (0, _utils.isObj)(this.color);
    },
    LinearGradient: function LinearGradient() {
      var _this = this;

      var h = this.$createElement;

      if (!this.gradient) {
        return;
      }

      var Stops = Object.keys(this.color).sort(function (a, b) {
        return parseFloat(a) - parseFloat(b);
      }).map(function (key, index) {
        return h("stop", {
          "key": index,
          "attrs": {
            "offset": key,
            "stop-color": _this.color[key] } });


      });
      return h("defs", [h("linearGradient", {
        "attrs": {
          "id": this.uid,
          "x1": "100%",
          "y1": "0%",
          "x2": "0%",
          "y2": "0%" } },

      [Stops])]);
    } },

  watch: {
    rate: {
      handler: function handler() {
        this.startTime = Date.now();
        this.startRate = this.value;
        this.endRate = format(this.rate);
        this.increase = this.endRate > this.startRate;
        this.duration = Math.abs((this.startRate - this.endRate) * 1000 / this.speed);

        if (this.speed) {
          (0, _raf.cancelRaf)(this.rafId);
          this.rafId = (0, _raf.raf)(this.animate);
        } else {
          this.$emit('input', this.endRate);
        }
      },
      immediate: true } },


  methods: {
    animate: function animate() {
      var now = Date.now();
      var progress = Math.min((now - this.startTime) / this.duration, 1);
      var rate = progress * (this.endRate - this.startRate) + this.startRate;
      this.$emit('input', format(parseFloat(rate.toFixed(1))));

      if (this.increase ? rate < this.endRate : rate > this.endRate) {
        this.rafId = (0, _raf.raf)(this.animate);
      }
    } },

  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": bem(),
      "style": this.style },
    [h("svg", {
      "attrs": {
        "viewBox": "0 0 " + this.viewBoxSize + " " + this.viewBoxSize } },

    [this.LinearGradient, h("path", {
      "class": bem('hover'),
      "style": this.hoverStyle,
      "attrs": {
        "d": this.path } }),

    h("path", {
      "attrs": {
        "d": this.path,
        "stroke": this.gradient ? "url(#" + this.uid + ")" : this.color },

      "class": bem('layer'),
      "style": this.layerStyle })]),
    this.slots() || this.text && h("div", {
      "class": bem('text') },
    [this.text])]);
  } });exports.default = _default;

/***/ }),
/* 79 */
/*!*****************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/utils/dom/raf.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports, "__esModule", { value: true });exports.raf = raf;exports.doubleRaf = doubleRaf;exports.cancelRaf = cancelRaf;


var _ = __webpack_require__(/*! .. */ 15); /**
                        * requestAnimationFrame polyfill
                        */var prev = Date.now(); /* istanbul ignore next */

function fallback(fn) {
  var curr = Date.now();
  var ms = Math.max(0, 16 - (curr - prev));
  var id = setTimeout(fn, ms);
  prev = curr + ms;
  return id;
}
/* istanbul ignore next */


var root = _.isServer ? global : window;
/* istanbul ignore next */

var iRaf = root.requestAnimationFrame || fallback;
/* istanbul ignore next */

var iCancel = root.cancelAnimationFrame || root.clearTimeout;
function raf(fn) {
  return iRaf.call(root, fn);
} // double raf for animation

function doubleRaf(fn) {
  raf(function () {
    raf(fn);
  });
}
function cancelRaf(id) {
  iCancel.call(root, id);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/webpack/buildin/global.js */ 3)))

/***/ }),
/* 80 */
/*!*************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/col/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _utils = __webpack_require__(/*! ../utils */ 15);

var _createNamespace = (0, _utils.createNamespace)('col'),
createComponent = _createNamespace[0],
bem = _createNamespace[1];var _default =

createComponent({
  props: {
    span: [Number, String],
    offset: [Number, String],
    tag: {
      type: String,
      default: 'div' } },


  computed: {
    gutter: function gutter() {
      return this.$parent && Number(this.$parent.gutter) || 0;
    },
    style: function style() {
      var padding = this.gutter / 2 + "px";
      return this.gutter ? {
        paddingLeft: padding,
        paddingRight: padding } :
      {};
    } },

  methods: {
    onClick: function onClick(event) {
      this.$emit('click', event);
    } },

  render: function render() {
    var _bem;

    var h = arguments[0];
    var span = this.span,
    offset = this.offset;
    return h(this.tag, {
      "style": this.style,
      "class": bem((_bem = {}, _bem[span] = span, _bem["offset-" + offset] = offset, _bem)),
      "on": {
        "click": this.onClick } },

    [this.slots()]);
  } });exports.default = _default;

/***/ }),
/* 81 */
/*!******************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/collapse/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _utils = __webpack_require__(/*! ../utils */ 15);
var _relation = __webpack_require__(/*! ../mixins/relation */ 69);
var _constant = __webpack_require__(/*! ../utils/constant */ 28);

var _createNamespace = (0, _utils.createNamespace)('collapse'),
createComponent = _createNamespace[0],
bem = _createNamespace[1];var _default =

createComponent({
  mixins: [(0, _relation.ParentMixin)('vanCollapse')],
  props: {
    accordion: Boolean,
    value: [String, Number, Array],
    border: {
      type: Boolean,
      default: true } },


  methods: {
    switch: function _switch(name, expanded) {
      if (!this.accordion) {
        name = expanded ? this.value.concat(name) : this.value.filter(function (activeName) {
          return activeName !== name;
        });
      }

      this.$emit('change', name);
      this.$emit('input', name);
    } },

  render: function render() {
    var _ref;

    var h = arguments[0];
    return h("div", {
      "class": [bem(), (_ref = {}, _ref[_constant.BORDER_TOP_BOTTOM] = this.border, _ref)] },
    [this.slots()]);
  } });exports.default = _default;

/***/ }),
/* 82 */
/*!***********************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/collapse-item/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/esm/extends */ 13));
var _utils = __webpack_require__(/*! ../utils */ 15);
var _constant = __webpack_require__(/*! ../utils/constant */ 28);
var _raf = __webpack_require__(/*! ../utils/dom/raf */ 79);
var _cell = _interopRequireDefault(__webpack_require__(/*! ../cell */ 51));
var _shared = __webpack_require__(/*! ../cell/shared */ 52);
var _relation = __webpack_require__(/*! ../mixins/relation */ 69);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var _createNamespace = (0, _utils.createNamespace)('collapse-item'),
createComponent = _createNamespace[0],
bem = _createNamespace[1];

var CELL_SLOTS = ['title', 'icon', 'right-icon'];var _default =
createComponent({
  mixins: [(0, _relation.ChildrenMixin)('vanCollapse')],
  props: (0, _extends2.default)({}, _shared.cellProps, {
    name: [Number, String],
    disabled: Boolean,
    isLink: {
      type: Boolean,
      default: true } }),


  data: function data() {
    return {
      show: null,
      inited: null };

  },
  computed: {
    currentName: function currentName() {
      return (0, _utils.isDef)(this.name) ? this.name : this.index;
    },
    expanded: function expanded() {
      var _this = this;

      if (!this.parent) {
        return null;
      }

      var _this$parent = this.parent,
      value = _this$parent.value,
      accordion = _this$parent.accordion;

      if ( true && !accordion && !Array.isArray(value)) {
        console.error('[Vant] Collapse: type of prop "value" should be Array');
        return;
      }

      return accordion ? value === this.currentName : value.some(function (name) {
        return name === _this.currentName;
      });
    } },

  created: function created() {
    this.show = this.expanded;
    this.inited = this.expanded;
  },
  watch: {
    expanded: function expanded(_expanded, prev) {
      var _this2 = this;

      if (prev === null) {
        return;
      }

      if (_expanded) {
        this.show = true;
        this.inited = true;
      } // Use raf: flick when opened in safari
      // Use nextTick: closing animation failed when set `user-select: none`


      var nextTick = _expanded ? this.$nextTick : _raf.raf;
      nextTick(function () {
        var _this2$$refs = _this2.$refs,
        content = _this2$$refs.content,
        wrapper = _this2$$refs.wrapper;

        if (!content || !wrapper) {
          return;
        }

        var offsetHeight = content.offsetHeight;

        if (offsetHeight) {
          var contentHeight = offsetHeight + "px";
          wrapper.style.height = _expanded ? 0 : contentHeight; // use double raf to ensure animation can start in mobile safari

          (0, _raf.doubleRaf)(function () {
            wrapper.style.height = _expanded ? contentHeight : 0;
          });
        } else {
          _this2.onTransitionEnd();
        }
      });
    } },

  methods: {
    onClick: function onClick() {
      if (this.disabled) {
        return;
      }

      var parent = this.parent;
      var name = parent.accordion && this.currentName === parent.value ? '' : this.currentName;
      this.parent.switch(name, !this.expanded);
    },
    onTransitionEnd: function onTransitionEnd() {
      if (!this.expanded) {
        this.show = false;
      } else {
        this.$refs.wrapper.style.height = '';
      }
    } },

  render: function render() {
    var _this3 = this,
    _ref;

    var h = arguments[0];
    var disabled = this.disabled,
    expanded = this.expanded;
    var titleSlots = CELL_SLOTS.reduce(function (slots, name) {
      if (_this3.slots(name)) {
        slots[name] = function () {
          return _this3.slots(name);
        };
      }

      return slots;
    }, {});

    if (this.slots('value')) {
      titleSlots.default = function () {
        return _this3.slots('value');
      };
    }

    var Title = h(_cell.default, {
      "attrs": {
        "role": "button",
        "tabindex": disabled ? -1 : 0,
        "aria-expanded": String(expanded) },

      "class": bem('title', {
        disabled: disabled,
        expanded: expanded }),

      "on": {
        "click": this.onClick },

      "scopedSlots": titleSlots,
      "props": (0, _extends2.default)({}, this.$props) });

    var Content = this.inited && h("div", {
      "directives": [{
        name: "show",
        value: this.show }],

      "ref": "wrapper",
      "class": bem('wrapper'),
      "on": {
        "transitionend": this.onTransitionEnd } },

    [h("div", {
      "ref": "content",
      "class": bem('content') },
    [this.slots()])]);
    return h("div", {
      "class": [bem(), (_ref = {}, _ref[_constant.BORDER_TOP] = this.index, _ref)] },
    [Title, Content]);
  } });exports.default = _default;

/***/ }),
/* 83 */
/*!**********************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/contact-card/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _babelHelperVueJsxMergeProps = _interopRequireDefault(__webpack_require__(/*! @vue/babel-helper-vue-jsx-merge-props */ 14));
var _utils = __webpack_require__(/*! ../utils */ 15);
var _functional = __webpack_require__(/*! ../utils/functional */ 27);
var _cell = _interopRequireDefault(__webpack_require__(/*! ../cell */ 51));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // Types

var _createNamespace = (0, _utils.createNamespace)('contact-card'),
createComponent = _createNamespace[0],
bem = _createNamespace[1],
t = _createNamespace[2];

function ContactCard(h, props, slots, ctx) {
  var type = props.type,
  editable = props.editable;

  function onClick(event) {
    if (editable) {
      (0, _functional.emit)(ctx, 'click', event);
    }
  }

  return h(_cell.default, (0, _babelHelperVueJsxMergeProps.default)([{
    "attrs": {
      "center": true,
      "border": false,
      "isLink": editable,
      "valueClass": bem('value'),
      "icon": type === 'edit' ? 'contact' : 'add-square' },

    "class": bem([type]),
    "on": {
      "click": onClick } },

  (0, _functional.inherit)(ctx)]), [type === 'add' ? props.addText || t('addText') : [h("div", [t('name') + "\uFF1A" + props.name]), h("div", [t('tel') + "\uFF1A" + props.tel])]]);
}

ContactCard.props = {
  tel: String,
  name: String,
  addText: String,
  editable: {
    type: Boolean,
    default: true },

  type: {
    type: String,
    default: 'add' } };var _default =


createComponent(ContactCard);exports.default = _default;

/***/ }),
/* 84 */
/*!**********************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/contact-edit/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/esm/extends */ 13));
var _utils = __webpack_require__(/*! ../utils */ 15);
var _button = _interopRequireDefault(__webpack_require__(/*! ../button */ 58));
var _field = _interopRequireDefault(__webpack_require__(/*! ../field */ 50));
var _toast = _interopRequireDefault(__webpack_require__(/*! ../toast */ 56));
var _dialog = _interopRequireDefault(__webpack_require__(/*! ../dialog */ 59));
var _mobile = __webpack_require__(/*! ../utils/validate/mobile */ 43);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var _createNamespace = (0, _utils.createNamespace)('contact-edit'),
createComponent = _createNamespace[0],
bem = _createNamespace[1],
t = _createNamespace[2];

var defaultContact = {
  tel: '',
  name: '' };var _default2 =

createComponent({
  props: {
    isEdit: Boolean,
    isSaving: Boolean,
    isDeleting: Boolean,
    contactInfo: {
      type: Object,
      default: function _default() {
        return (0, _extends2.default)({}, defaultContact);
      } },

    telValidator: {
      type: Function,
      default: _mobile.isMobile } },


  data: function data() {
    return {
      data: (0, _extends2.default)({}, defaultContact, {}, this.contactInfo),
      errorInfo: {
        name: false,
        tel: false } };


  },
  watch: {
    contactInfo: function contactInfo(val) {
      this.data = (0, _extends2.default)({}, defaultContact, {}, val);
    } },

  methods: {
    onFocus: function onFocus(key) {
      this.errorInfo[key] = false;
    },
    getErrorMessageByKey: function getErrorMessageByKey(key) {
      var value = this.data[key].trim();

      switch (key) {
        case 'name':
          return value ? '' : t('nameEmpty');

        case 'tel':
          return this.telValidator(value) ? '' : t('telInvalid');}

    },
    onSave: function onSave() {
      var _this = this;

      var isValid = ['name', 'tel'].every(function (item) {
        var msg = _this.getErrorMessageByKey(item);

        if (msg) {
          _this.errorInfo[item] = true;
          (0, _toast.default)(msg);
        }

        return !msg;
      });

      if (isValid && !this.isSaving) {
        this.$emit('save', this.data);
      }
    },
    onDelete: function onDelete() {
      var _this2 = this;

      _dialog.default.confirm({
        message: t('confirmDelete') }).
      then(function () {
        _this2.$emit('delete', _this2.data);
      });
    } },

  render: function render() {
    var _this3 = this;

    var h = arguments[0];
    var data = this.data,
    errorInfo = this.errorInfo;

    var onFocus = function onFocus(name) {
      return function () {
        return _this3.onFocus(name);
      };
    };

    return h("div", {
      "class": bem() },
    [h(_field.default, {
      "attrs": {
        "clearable": true,
        "maxlength": "30",
        "label": t('name'),
        "placeholder": t('nameEmpty'),
        "error": errorInfo.name },

      "on": {
        "focus": onFocus('name') },

      "model": {
        value: data.name,
        callback: function callback($$v) {
          data.name = $$v;
        } } }),

    h(_field.default, {
      "attrs": {
        "clearable": true,
        "type": "tel",
        "label": t('tel'),
        "placeholder": t('telEmpty'),
        "error": errorInfo.tel },

      "on": {
        "focus": onFocus('tel') },

      "model": {
        value: data.tel,
        callback: function callback($$v) {
          data.tel = $$v;
        } } }),

    h("div", {
      "class": bem('buttons') },
    [h(_button.default, {
      "attrs": {
        "block": true,
        "type": "danger",
        "text": t('save'),
        "loading": this.isSaving },

      "on": {
        "click": this.onSave } }),

    this.isEdit && h(_button.default, {
      "attrs": {
        "block": true,
        "text": t('delete'),
        "loading": this.isDeleting },

      "on": {
        "click": this.onDelete } })])]);


  } });exports.default = _default2;

/***/ }),
/* 85 */
/*!**********************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/contact-list/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _babelHelperVueJsxMergeProps = _interopRequireDefault(__webpack_require__(/*! @vue/babel-helper-vue-jsx-merge-props */ 14));
var _utils = __webpack_require__(/*! ../utils */ 15);
var _constant = __webpack_require__(/*! ../utils/constant */ 28);
var _functional = __webpack_require__(/*! ../utils/functional */ 27);
var _icon = _interopRequireDefault(__webpack_require__(/*! ../icon */ 37));
var _cell = _interopRequireDefault(__webpack_require__(/*! ../cell */ 51));
var _button = _interopRequireDefault(__webpack_require__(/*! ../button */ 58));
var _radio = _interopRequireDefault(__webpack_require__(/*! ../radio */ 71));
var _radioGroup = _interopRequireDefault(__webpack_require__(/*! ../radio-group */ 68));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // Types

var _createNamespace = (0, _utils.createNamespace)('contact-list'),
createComponent = _createNamespace[0],
bem = _createNamespace[1],
t = _createNamespace[2];

function ContactList(h, props, slots, ctx) {
  var List = props.list && props.list.map(function (item, index) {
    function onClick() {
      (0, _functional.emit)(ctx, 'input', item.id);
      (0, _functional.emit)(ctx, 'select', item, index);
    }

    function Content() {
      return h(_radio.default, {
        "attrs": {
          "name": item.id,
          "iconSize": 16,
          "checkedColor": _constant.RED },

        "on": {
          "click": onClick } },

      [h("div", {
        "class": bem('name') },
      [item.name + "\uFF0C" + item.tel])]);
    }

    function RightIcon() {
      return h(_icon.default, {
        "attrs": {
          "name": "edit" },

        "class": bem('edit'),
        "on": {
          "click": function click(event) {
            event.stopPropagation();
            (0, _functional.emit)(ctx, 'edit', item, index);
          } } });


    }

    return h(_cell.default, {
      "key": item.id,
      "attrs": {
        "isLink": true,
        "valueClass": bem('item-value') },

      "class": bem('item'),
      "scopedSlots": {
        default: Content,
        'right-icon': RightIcon },

      "on": {
        "click": onClick } });


  });
  return h("div", (0, _babelHelperVueJsxMergeProps.default)([{
    "class": bem() },
  (0, _functional.inherit)(ctx)]), [h(_radioGroup.default, {
    "attrs": {
      "value": props.value },

    "class": bem('group') },
  [List]), h(_button.default, {
    "attrs": {
      "square": true,
      "size": "large",
      "type": "danger",
      "text": props.addText || t('addText') },

    "class": bem('add'),
    "on": {
      "click": function click() {
        (0, _functional.emit)(ctx, 'add');
      } } })]);


}

ContactList.props = {
  value: null,
  list: Array,
  addText: String };var _default =

createComponent(ContactList);exports.default = _default;

/***/ }),
/* 86 */
/*!********************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/count-down/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _utils = __webpack_require__(/*! ../utils */ 15);
var _raf = __webpack_require__(/*! ../utils/dom/raf */ 79);
var _utils2 = __webpack_require__(/*! ./utils */ 87);

var _createNamespace = (0, _utils.createNamespace)('count-down'),
createComponent = _createNamespace[0],
bem = _createNamespace[1];var _default =

createComponent({
  props: {
    millisecond: Boolean,
    time: {
      type: Number,
      default: 0 },

    format: {
      type: String,
      default: 'HH:mm:ss' },

    autoStart: {
      type: Boolean,
      default: true } },


  data: function data() {
    return {
      remain: 0 };

  },
  computed: {
    timeData: function timeData() {
      return (0, _utils2.parseTimeData)(this.remain);
    },
    formattedTime: function formattedTime() {
      return (0, _utils2.parseFormat)(this.format, this.timeData);
    } },

  watch: {
    time: {
      immediate: true,
      handler: 'reset' } },


  methods: {
    start: function start() {
      if (this.counting) {
        return;
      }

      this.counting = true;
      this.endTime = Date.now() + this.remain;
      this.tick();
    },
    pause: function pause() {
      this.counting = false;
      (0, _raf.cancelRaf)(this.rafId);
    },
    reset: function reset() {
      this.pause();
      this.remain = this.time;

      if (this.autoStart) {
        this.start();
      }
    },
    tick: function tick() {
      if (this.millisecond) {
        this.microTick();
      } else {
        this.macroTick();
      }
    },
    microTick: function microTick() {
      var _this = this;

      this.rafId = (0, _raf.raf)(function () {
        _this.setRemain(_this.getRemain());

        if (_this.remain !== 0) {
          _this.microTick();
        }
      });
    },
    macroTick: function macroTick() {
      var _this2 = this;

      this.rafId = (0, _raf.raf)(function () {
        var remain = _this2.getRemain();

        if (!(0, _utils2.isSameSecond)(remain, _this2.remain) || remain === 0) {
          _this2.setRemain(remain);
        }

        if (_this2.remain !== 0) {
          _this2.macroTick();
        }
      });
    },
    getRemain: function getRemain() {
      return Math.max(this.endTime - Date.now(), 0);
    },
    setRemain: function setRemain(remain) {
      this.remain = remain;

      if (remain === 0) {
        this.pause();
        this.$emit('finish');
      }
    } },

  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": bem() },
    [this.slots('default', this.timeData) || this.formattedTime]);
  } });exports.default = _default;

/***/ }),
/* 87 */
/*!********************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/count-down/utils.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.parseTimeData = parseTimeData;exports.parseFormat = parseFormat;exports.isSameSecond = isSameSecond;var _string = __webpack_require__(/*! ../utils/format/string */ 22);
var SECOND = 1000;
var MINUTE = 60 * SECOND;
var HOUR = 60 * MINUTE;
var DAY = 24 * HOUR;
function parseTimeData(time) {
  var days = Math.floor(time / DAY);
  var hours = Math.floor(time % DAY / HOUR);
  var minutes = Math.floor(time % HOUR / MINUTE);
  var seconds = Math.floor(time % MINUTE / SECOND);
  var milliseconds = Math.floor(time % SECOND);
  return {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
    milliseconds: milliseconds };

}
function parseFormat(format, timeData) {
  var days = timeData.days;
  var hours = timeData.hours,
  minutes = timeData.minutes,
  seconds = timeData.seconds,
  milliseconds = timeData.milliseconds;

  if (format.indexOf('DD') === -1) {
    hours += days * 24;
  } else {
    format = format.replace('DD', (0, _string.padZero)(days));
  }

  if (format.indexOf('HH') === -1) {
    minutes += hours * 60;
  } else {
    format = format.replace('HH', (0, _string.padZero)(hours));
  }

  if (format.indexOf('mm') === -1) {
    seconds += minutes * 60;
  } else {
    format = format.replace('mm', (0, _string.padZero)(minutes));
  }

  if (format.indexOf('ss') === -1) {
    milliseconds += seconds * 1000;
  } else {
    format = format.replace('ss', (0, _string.padZero)(seconds));
  }

  return format.replace('SSS', (0, _string.padZero)(milliseconds, 3));
}
function isSameSecond(time1, time2) {
  return Math.floor(time1 / 1000) === Math.floor(time2 / 1000);
}

/***/ }),
/* 88 */
/*!****************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/coupon/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _utils = __webpack_require__(/*! ../utils */ 15);
var _constant = __webpack_require__(/*! ../utils/constant */ 28);
var _string = __webpack_require__(/*! ../utils/format/string */ 22);
var _checkbox = _interopRequireDefault(__webpack_require__(/*! ../checkbox */ 76));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var _createNamespace = (0, _utils.createNamespace)('coupon'),
createComponent = _createNamespace[0],
bem = _createNamespace[1],
t = _createNamespace[2];

function getDate(timeStamp) {
  var date = new Date(timeStamp * 1000);
  return date.getFullYear() + "." + (0, _string.padZero)(date.getMonth() + 1) + "." + (0, _string.padZero)(date.getDate());
}

function formatDiscount(discount) {
  return (discount / 10).toFixed(discount % 10 === 0 ? 0 : 1);
}

function formatAmount(amount) {
  return (amount / 100).toFixed(amount % 100 === 0 ? 0 : amount % 10 === 0 ? 1 : 2);
}var _default =

createComponent({
  props: {
    coupon: Object,
    chosen: Boolean,
    disabled: Boolean,
    currency: {
      type: String,
      default: '¥' } },


  computed: {
    validPeriod: function validPeriod() {
      var _this$coupon = this.coupon,
      startAt = _this$coupon.startAt,
      endAt = _this$coupon.endAt;
      return t('valid') + "\uFF1A" + getDate(startAt) + " - " + getDate(endAt);
    },
    faceAmount: function faceAmount() {
      var coupon = this.coupon;

      if (coupon.valueDesc) {
        return coupon.valueDesc + "<span>" + (coupon.unitDesc || '') + "</span>";
      }

      if (coupon.denominations) {
        return "<span>" + this.currency + "</span> " + formatAmount(this.coupon.denominations);
      }

      if (coupon.discount) {
        return t('discount', formatDiscount(this.coupon.discount));
      }

      return '';
    },
    conditionMessage: function conditionMessage() {
      var condition = formatAmount(this.coupon.originCondition);
      return condition === '0' ? t('unlimited') : t('condition', condition);
    } },

  render: function render() {
    var h = arguments[0];
    var coupon = this.coupon,
    disabled = this.disabled;
    var description = disabled && coupon.reason || coupon.description;
    return h("div", {
      "class": bem({
        disabled: disabled }) },

    [h("div", {
      "class": bem('content') },
    [h("div", {
      "class": bem('head') },
    [h("h2", {
      "class": bem('amount'),
      "domProps": {
        "innerHTML": this.faceAmount } }),

    h("p", [this.coupon.condition || this.conditionMessage])]), h("div", {
      "class": bem('body') },
    [h("h2", {
      "class": bem('name') },
    [coupon.name]), h("p", [this.validPeriod]), this.chosen && h(_checkbox.default, {
      "attrs": {
        "value": true,
        "checked-color": _constant.RED },

      "class": bem('corner') })])]),
    description && h("p", {
      "class": bem('description') },
    [description])]);
  } });exports.default = _default;

/***/ }),
/* 89 */
/*!*********************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/coupon-cell/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _babelHelperVueJsxMergeProps = _interopRequireDefault(__webpack_require__(/*! @vue/babel-helper-vue-jsx-merge-props */ 14));
var _utils = __webpack_require__(/*! ../utils */ 15);
var _functional = __webpack_require__(/*! ../utils/functional */ 27);
var _cell = _interopRequireDefault(__webpack_require__(/*! ../cell */ 51));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // Types

var _createNamespace = (0, _utils.createNamespace)('coupon-cell'),
createComponent = _createNamespace[0],
bem = _createNamespace[1],
t = _createNamespace[2];

function formatValue(props) {
  var coupons = props.coupons,
  chosenCoupon = props.chosenCoupon,
  currency = props.currency;
  var coupon = coupons[chosenCoupon];

  if (coupon) {
    var value = coupon.denominations || coupon.value;
    return "-" + currency + (value / 100).toFixed(2);
  }

  return coupons.length === 0 ? t('tips') : t('count', coupons.length);
}

function CouponCell(h, props, slots, ctx) {
  var valueClass = props.coupons[props.chosenCoupon] ? 'van-coupon-cell--selected' : '';
  var value = formatValue(props);
  return h(_cell.default, (0, _babelHelperVueJsxMergeProps.default)([{
    "class": bem(),
    "attrs": {
      "value": value,
      "title": props.title || t('title'),
      "border": props.border,
      "isLink": props.editable,
      "valueClass": valueClass } },

  (0, _functional.inherit)(ctx, true)]));
}

CouponCell.model = {
  prop: 'chosenCoupon' };

CouponCell.props = {
  title: String,
  coupons: {
    type: Array,
    default: function _default() {
      return [];
    } },

  currency: {
    type: String,
    default: '¥' },

  border: {
    type: Boolean,
    default: true },

  editable: {
    type: Boolean,
    default: true },

  chosenCoupon: {
    type: Number,
    default: -1 } };var _default2 =


createComponent(CouponCell);exports.default = _default2;

/***/ }),
/* 90 */
/*!*********************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/coupon-list/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _utils = __webpack_require__(/*! ../utils */ 15);
var _tab = _interopRequireDefault(__webpack_require__(/*! ../tab */ 91));
var _tabs = _interopRequireDefault(__webpack_require__(/*! ../tabs */ 92));
var _field = _interopRequireDefault(__webpack_require__(/*! ../field */ 50));
var _button = _interopRequireDefault(__webpack_require__(/*! ../button */ 58));
var _coupon = _interopRequireDefault(__webpack_require__(/*! ../coupon */ 88));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var _createNamespace = (0, _utils.createNamespace)('coupon-list'),
createComponent = _createNamespace[0],
bem = _createNamespace[1],
t = _createNamespace[2];

var EMPTY_IMAGE = 'https://img.yzcdn.cn/vant/coupon-empty.png';var _default2 =
createComponent({
  model: {
    prop: 'code' },

  props: {
    code: String,
    closeButtonText: String,
    inputPlaceholder: String,
    enabledTitle: String,
    disabledTitle: String,
    exchangeButtonText: String,
    exchangeButtonLoading: Boolean,
    exchangeButtonDisabled: Boolean,
    exchangeMinLength: {
      type: Number,
      default: 1 },

    chosenCoupon: {
      type: Number,
      default: -1 },

    coupons: {
      type: Array,
      default: function _default() {
        return [];
      } },

    disabledCoupons: {
      type: Array,
      default: function _default() {
        return [];
      } },

    displayedCouponIndex: {
      type: Number,
      default: -1 },

    showExchangeBar: {
      type: Boolean,
      default: true },

    showCloseButton: {
      type: Boolean,
      default: true },

    currency: {
      type: String,
      default: '¥' },

    emptyImage: {
      type: String,
      default: EMPTY_IMAGE } },


  data: function data() {
    return {
      tab: 0,
      winHeight: window.innerHeight,
      currentCode: this.code || '' };

  },
  computed: {
    buttonDisabled: function buttonDisabled() {
      return !this.exchangeButtonLoading && (this.exchangeButtonDisabled || !this.currentCode || this.currentCode.length < this.exchangeMinLength);
    },
    listStyle: function listStyle() {
      return {
        height: this.winHeight - (this.showExchangeBar ? 140 : 94) + 'px' };

    } },

  watch: {
    code: function code(_code) {
      this.currentCode = _code;
    },
    currentCode: function currentCode(code) {
      this.$emit('input', code);
    },
    displayedCouponIndex: 'scrollToShowCoupon' },

  mounted: function mounted() {
    this.scrollToShowCoupon(this.displayedCouponIndex);
  },
  methods: {
    onClickExchangeButton: function onClickExchangeButton() {
      this.$emit('exchange', this.currentCode); // auto clear currentCode when not use vModel

      if (!this.code) {
        this.currentCode = '';
      }
    },
    // scroll to show specific coupon
    scrollToShowCoupon: function scrollToShowCoupon(index) {
      var _this = this;

      if (index === -1) {
        return;
      }

      this.$nextTick(function () {
        var _this$$refs = _this.$refs,
        card = _this$$refs.card,
        list = _this$$refs.list;
        /* istanbul ignore next */

        if (list && card && card[index]) {
          list.scrollTop = card[index].$el.offsetTop - 100;
        }
      });
    },
    renderEmpty: function renderEmpty() {
      var h = this.$createElement;
      return h("div", {
        "class": bem('empty') },
      [h("img", {
        "attrs": {
          "src": this.emptyImage } }),

      h("p", [t('empty')])]);
    },
    renderExchangeButton: function renderExchangeButton() {
      var h = this.$createElement;
      return h(_button.default, {
        "attrs": {
          "size": "small",
          "type": "danger",
          "text": this.exchangeButtonText || t('exchange'),
          "loading": this.exchangeButtonLoading,
          "disabled": this.buttonDisabled },

        "class": bem('exchange'),
        "on": {
          "click": this.onClickExchangeButton } });


    } },

  render: function render() {
    var _this2 = this;

    var h = arguments[0];
    var coupons = this.coupons,
    disabledCoupons = this.disabledCoupons;
    var title = (this.enabledTitle || t('enable')) + " (" + coupons.length + ")";
    var disabledTitle = (this.disabledTitle || t('disabled')) + " (" + disabledCoupons.length + ")";
    var ExchangeBar = this.showExchangeBar && h(_field.default, {
      "attrs": {
        "clearable": true,
        "border": false,
        "placeholder": this.inputPlaceholder || t('placeholder'),
        "maxlength": "20" },

      "class": bem('field'),
      "scopedSlots": {
        button: this.renderExchangeButton },

      "model": {
        value: _this2.currentCode,
        callback: function callback($$v) {
          _this2.currentCode = $$v;
        } } });



    var onChange = function onChange(index) {
      return function () {
        return _this2.$emit('change', index);
      };
    };

    var CouponTab = h(_tab.default, {
      "attrs": {
        "title": title } },

    [h("div", {
      "class": bem('list'),
      "style": this.listStyle },
    [coupons.map(function (coupon, index) {
      return h(_coupon.default, {
        "ref": "card",
        "key": coupon.id,
        "attrs": {
          "coupon": coupon,
          "currency": _this2.currency,
          "chosen": index === _this2.chosenCoupon },

        "nativeOn": {
          "click": onChange(index) } });


    }), !coupons.length && this.renderEmpty()])]);
    var DisabledCouponTab = h(_tab.default, {
      "attrs": {
        "title": disabledTitle } },

    [h("div", {
      "class": bem('list'),
      "style": this.listStyle },
    [disabledCoupons.map(function (coupon) {
      return h(_coupon.default, {
        "attrs": {
          "disabled": true,
          "coupon": coupon,
          "currency": _this2.currency },

        "key": coupon.id });

    }), !disabledCoupons.length && this.renderEmpty()])]);
    return h("div", {
      "class": bem() },
    [ExchangeBar, h(_tabs.default, {
      "class": bem('tab'),
      "attrs": {
        "line-width": 120 },

      "model": {
        value: _this2.tab,
        callback: function callback($$v) {
          _this2.tab = $$v;
        } } },

    [CouponTab, DisabledCouponTab]), h(_button.default, {
      "directives": [{
        name: "show",
        value: this.showCloseButton }],

      "attrs": {
        "size": "large",
        "text": this.closeButtonText || t('close') },

      "class": bem('close'),
      "on": {
        "click": onChange(-1) } })]);


  } });exports.default = _default2;

/***/ }),
/* 91 */
/*!*************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/tab/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _utils = __webpack_require__(/*! ../utils */ 15);
var _relation = __webpack_require__(/*! ../mixins/relation */ 69);

var _createNamespace = (0, _utils.createNamespace)('tab'),
createComponent = _createNamespace[0],
bem = _createNamespace[1];var _default =

createComponent({
  mixins: [(0, _relation.ChildrenMixin)('vanTabs')],
  props: {
    name: [Number, String],
    title: String,
    disabled: Boolean },

  data: function data() {
    return {
      inited: false };

  },
  computed: {
    computedName: function computedName() {
      return this.name || this.index;
    },
    isActive: function isActive() {
      return this.computedName === this.parent.currentName;
    } },

  watch: {
    // eslint-disable-next-line object-shorthand
    'parent.currentIndex': function parentCurrentIndex() {
      this.inited = this.inited || this.isActive;
    },
    title: function title() {
      this.parent.setLine();
    } },

  mounted: function mounted() {
    if (this.slots('title')) {
      this.parent.renderTitle(this.$refs.title, this.index);
    }
  },
  render: function render(h) {
    var slots = this.slots,
    isActive = this.isActive;
    var shouldRender = this.inited || !this.parent.lazyRender;
    var Content = [shouldRender ? slots() : h()];

    if (slots('title')) {
      Content.push(h("div", {
        "ref": "title" },
      [slots('title')]));
    }

    if (this.parent.animated) {
      return h("div", {
        "attrs": {
          "role": "tabpanel",
          "aria-hidden": !isActive },

        "class": bem('pane-wrapper', {
          inactive: !isActive }) },

      [h("div", {
        "class": bem('pane') },
      [Content])]);
    }

    return h("div", {
      "directives": [{
        name: "show",
        value: isActive }],

      "attrs": {
        "role": "tabpanel" },

      "class": bem('pane') },
    [Content]);
  } });exports.default = _default;

/***/ }),
/* 92 */
/*!**************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/tabs/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _utils = __webpack_require__(/*! ../utils */ 15);
var _utils2 = __webpack_require__(/*! ./utils */ 93);
var _style = __webpack_require__(/*! ../utils/dom/style */ 94);
var _relation = __webpack_require__(/*! ../mixins/relation */ 69);
var _bindEvent = __webpack_require__(/*! ../mixins/bind-event */ 62);
var _constant = __webpack_require__(/*! ../utils/constant */ 28);
var _scroll = __webpack_require__(/*! ../utils/dom/scroll */ 36);
var _Title = _interopRequireDefault(__webpack_require__(/*! ./Title */ 95));
var _Content = _interopRequireDefault(__webpack_require__(/*! ./Content */ 96));
var _sticky = _interopRequireDefault(__webpack_require__(/*! ../sticky */ 97));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var _createNamespace = (0, _utils.createNamespace)('tabs'),
createComponent = _createNamespace[0],
bem = _createNamespace[1];var _default =

createComponent({
  mixins: [(0, _relation.ParentMixin)('vanTabs'), (0, _bindEvent.BindEventMixin)(function (bind) {
    bind(window, 'resize', this.setLine, true);
  })],
  model: {
    prop: 'active' },

  props: {
    color: String,
    sticky: Boolean,
    animated: Boolean,
    swipeable: Boolean,
    background: String,
    lineWidth: [Number, String],
    lineHeight: [Number, String],
    titleActiveColor: String,
    titleInactiveColor: String,
    type: {
      type: String,
      default: 'line' },

    active: {
      type: [Number, String],
      default: 0 },

    border: {
      type: Boolean,
      default: true },

    ellipsis: {
      type: Boolean,
      default: true },

    duration: {
      type: Number,
      default: 0.3 },

    offsetTop: {
      type: Number,
      default: 0 },

    lazyRender: {
      type: Boolean,
      default: true },

    swipeThreshold: {
      type: Number,
      default: 4 } },


  data: function data() {
    return {
      position: '',
      currentIndex: null,
      lineStyle: {
        backgroundColor: this.color } };


  },
  computed: {
    // whether the nav is scrollable
    scrollable: function scrollable() {
      return this.children.length > this.swipeThreshold || !this.ellipsis;
    },
    navStyle: function navStyle() {
      return {
        borderColor: this.color,
        background: this.background };

    },
    currentName: function currentName() {
      var activeTab = this.children[this.currentIndex];

      if (activeTab) {
        return activeTab.computedName;
      }
    } },

  watch: {
    color: 'setLine',
    active: function active(name) {
      if (name !== this.currentName) {
        this.setCurrentIndexByName(name);
      }
    },
    children: function children() {
      var _this = this;

      this.setCurrentIndexByName(this.currentName || this.active);
      this.setLine();
      this.$nextTick(function () {
        _this.scrollIntoView(true);
      });
    },
    currentIndex: function currentIndex() {
      this.scrollIntoView();
      this.setLine(); // scroll to correct position

      if (this.stickyFixed) {
        (0, _scroll.setRootScrollTop)(Math.ceil((0, _scroll.getElementTop)(this.$el) - this.offsetTop));
      }
    } },

  mounted: function mounted() {
    this.onShow();
  },
  activated: function activated() {
    this.onShow();
    this.setLine();
  },
  methods: {
    onShow: function onShow() {
      var _this2 = this;

      this.$nextTick(function () {
        _this2.inited = true;

        _this2.scrollIntoView(true);
      });
    },
    // update nav bar style
    setLine: function setLine() {
      var _this3 = this;

      var shouldAnimate = this.inited;
      this.$nextTick(function () {
        var titles = _this3.$refs.titles;

        if (!titles || !titles[_this3.currentIndex] || _this3.type !== 'line' || (0, _style.isHidden)(_this3.$el)) {
          return;
        }

        var title = titles[_this3.currentIndex].$el;
        var lineWidth = _this3.lineWidth,
        lineHeight = _this3.lineHeight;
        var width = (0, _utils.isDef)(lineWidth) ? lineWidth : title.offsetWidth / 2;
        var left = title.offsetLeft + title.offsetWidth / 2;
        var lineStyle = {
          width: (0, _utils.addUnit)(width),
          backgroundColor: _this3.color,
          transform: "translateX(" + left + "px) translateX(-50%)" };


        if (shouldAnimate) {
          lineStyle.transitionDuration = _this3.duration + "s";
        }

        if ((0, _utils.isDef)(lineHeight)) {
          var height = (0, _utils.addUnit)(lineHeight);
          lineStyle.height = height;
          lineStyle.borderRadius = height;
        }

        _this3.lineStyle = lineStyle;
      });
    },
    // correct the index of active tab
    setCurrentIndexByName: function setCurrentIndexByName(name) {
      var matched = this.children.filter(function (tab) {
        return tab.computedName === name;
      });
      var defaultIndex = (this.children[0] || {}).index || 0;
      this.setCurrentIndex(matched.length ? matched[0].index : defaultIndex);
    },
    setCurrentIndex: function setCurrentIndex(currentIndex) {
      currentIndex = this.findAvailableTab(currentIndex);

      if ((0, _utils.isDef)(currentIndex) && currentIndex !== this.currentIndex) {
        var shouldEmitChange = this.currentIndex !== null;
        this.currentIndex = currentIndex;
        this.$emit('input', this.currentName);

        if (shouldEmitChange) {
          this.$emit('change', this.currentName, this.children[currentIndex].title);
        }
      }
    },
    findAvailableTab: function findAvailableTab(index) {
      var diff = index < this.currentIndex ? -1 : 1;

      while (index >= 0 && index < this.children.length) {
        if (!this.children[index].disabled) {
          return index;
        }

        index += diff;
      }
    },
    // emit event when clicked
    onClick: function onClick(index) {
      var _this$children$index = this.children[index],
      title = _this$children$index.title,
      disabled = _this$children$index.disabled,
      computedName = _this$children$index.computedName;

      if (disabled) {
        this.$emit('disabled', computedName, title);
      } else {
        this.setCurrentIndex(index);
        this.$emit('click', computedName, title);
      }
    },
    // scroll active tab into view
    scrollIntoView: function scrollIntoView(immediate) {
      var titles = this.$refs.titles;

      if (!this.scrollable || !titles || !titles[this.currentIndex]) {
        return;
      }

      var nav = this.$refs.nav;
      var title = titles[this.currentIndex].$el;
      var to = title.offsetLeft - (nav.offsetWidth - title.offsetWidth) / 2;
      (0, _utils2.scrollLeftTo)(nav, to, immediate ? 0 : this.duration);
    },
    // render title slot of child tab
    renderTitle: function renderTitle(el, index) {
      var _this4 = this;

      this.$nextTick(function () {
        _this4.$refs.titles[index].renderTitle(el);
      });
    },
    onScroll: function onScroll(params) {
      this.stickyFixed = params.isFixed;
      this.$emit('scroll', params);
    } },

  render: function render() {
    var _this5 = this,
    _ref;

    var h = arguments[0];
    var type = this.type,
    ellipsis = this.ellipsis,
    animated = this.animated,
    scrollable = this.scrollable;
    var Nav = this.children.map(function (item, index) {
      return h(_Title.default, {
        "ref": "titles",
        "refInFor": true,
        "attrs": {
          "type": type,
          "title": item.title,
          "color": _this5.color,
          "isActive": index === _this5.currentIndex,
          "ellipsis": ellipsis,
          "disabled": item.disabled,
          "scrollable": scrollable,
          "activeColor": _this5.titleActiveColor,
          "inactiveColor": _this5.titleInactiveColor,
          "swipeThreshold": _this5.swipeThreshold },

        "on": {
          "click": function click() {
            _this5.onClick(index);
          } } });


    });
    var Wrap = h("div", {
      "ref": "wrap",
      "class": [bem('wrap', {
        scrollable: scrollable }), (
      _ref = {}, _ref[_constant.BORDER_TOP_BOTTOM] = type === 'line' && this.border, _ref)] },
    [h("div", {
      "ref": "nav",
      "attrs": {
        "role": "tablist" },

      "class": bem('nav', [type]),
      "style": this.navStyle },
    [this.slots('nav-left'), Nav, type === 'line' && h("div", {
      "class": bem('line'),
      "style": this.lineStyle }),
    this.slots('nav-right')])]);
    return h("div", {
      "class": bem([type]) },
    [this.sticky ? h(_sticky.default, {
      "attrs": {
        "container": this.$el,
        "offsetTop": this.offsetTop },

      "on": {
        "scroll": this.onScroll } },

    [Wrap]) : Wrap, h(_Content.default, {
      "attrs": {
        "count": this.children.length,
        "animated": animated,
        "duration": this.duration,
        "swipeable": this.swipeable,
        "currentIndex": this.currentIndex },

      "on": {
        "change": this.setCurrentIndex } },

    [this.slots()])]);
  } });exports.default = _default;

/***/ }),
/* 93 */
/*!**************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/tabs/utils.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.scrollLeftTo = scrollLeftTo;var _raf = __webpack_require__(/*! ../utils/dom/raf */ 79);
function scrollLeftTo(el, to, duration) {
  var count = 0;
  var from = el.scrollLeft;
  var frames = duration === 0 ? 1 : Math.round(duration * 1000 / 16);

  function animate() {
    el.scrollLeft += (to - from) / frames;

    if (++count < frames) {
      (0, _raf.raf)(animate);
    }
  }

  animate();
}

/***/ }),
/* 94 */
/*!*******************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/utils/dom/style.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.isHidden = isHidden;function isHidden(element) {
  return window.getComputedStyle(element).display === 'none' || element.offsetParent === null;
}

/***/ }),
/* 95 */
/*!**************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/tabs/Title.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _utils = __webpack_require__(/*! ../utils */ 15);
var bem = (0, _utils.createNamespace)('tab')[1];var _default =
{
  props: {
    type: String,
    color: String,
    title: String,
    isActive: Boolean,
    ellipsis: Boolean,
    disabled: Boolean,
    scrollable: Boolean,
    activeColor: String,
    inactiveColor: String,
    swipeThreshold: Number },

  computed: {
    style: function style() {
      var style = {};
      var color = this.color,
      isActive = this.isActive;
      var isCard = this.type === 'card'; // card theme color

      if (color && isCard) {
        style.borderColor = color;

        if (!this.disabled) {
          if (isActive) {
            style.backgroundColor = color;
          } else {
            style.color = color;
          }
        }
      }

      var titleColor = isActive ? this.activeColor : this.inactiveColor;

      if (titleColor) {
        style.color = titleColor;
      }

      if (this.scrollable && this.ellipsis) {
        style.flexBasis = 88 / this.swipeThreshold + "%";
      }

      return style;
    } },

  methods: {
    onClick: function onClick() {
      this.$emit('click');
    },
    renderTitle: function renderTitle(el) {
      var title = this.$refs.title;
      title.innerHTML = '';
      title.appendChild(el);
    } },

  render: function render() {
    var h = arguments[0];
    return h("div", {
      "attrs": {
        "role": "tab",
        "aria-selected": this.isActive },

      "class": bem({
        active: this.isActive,
        disabled: this.disabled,
        complete: !this.ellipsis }),

      "style": this.style,
      "on": {
        "click": this.onClick } },

    [h("span", {
      "ref": "title",
      "class": {
        'van-ellipsis': this.ellipsis } },

    [this.title])]);
  } };exports.default = _default;

/***/ }),
/* 96 */
/*!****************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/tabs/Content.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/esm/extends */ 13));
var _utils = __webpack_require__(/*! ../utils */ 15);
var _touch = __webpack_require__(/*! ../mixins/touch */ 31);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var _createNamespace = (0, _utils.createNamespace)('tabs'),
createComponent = _createNamespace[0],
bem = _createNamespace[1];

var MIN_SWIPE_DISTANCE = 50;var _default =
createComponent({
  mixins: [_touch.TouchMixin],
  props: {
    count: Number,
    duration: Number,
    animated: Boolean,
    swipeable: Boolean,
    currentIndex: Number },

  computed: {
    style: function style() {
      if (this.animated) {
        return {
          transform: "translate3d(" + -1 * this.currentIndex * 100 + "%, 0, 0)",
          transitionDuration: this.duration + "s" };

      }
    },
    listeners: function listeners() {
      if (this.swipeable) {
        return {
          touchstart: this.touchStart,
          touchmove: this.touchMove,
          touchend: this.onTouchEnd,
          touchcancel: this.onTouchEnd };

      }
    } },

  methods: {
    // watch swipe touch end
    onTouchEnd: function onTouchEnd() {
      var direction = this.direction,
      deltaX = this.deltaX,
      currentIndex = this.currentIndex;
      /* istanbul ignore else */

      if (direction === 'horizontal' && this.offsetX >= MIN_SWIPE_DISTANCE) {
        /* istanbul ignore else */
        if (deltaX > 0 && currentIndex !== 0) {
          this.$emit('change', currentIndex - 1);
        } else if (deltaX < 0 && currentIndex !== this.count - 1) {
          this.$emit('change', currentIndex + 1);
        }
      }
    },
    renderChildren: function renderChildren() {
      var h = this.$createElement;

      if (this.animated) {
        return h("div", {
          "class": bem('track'),
          "style": this.style },
        [this.slots()]);
      }

      return this.slots();
    } },

  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": bem('content', {
        animated: this.animated }),

      "on": (0, _extends2.default)({}, this.listeners) },
    [this.renderChildren()]);
  } });exports.default = _default;

/***/ }),
/* 97 */
/*!****************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/sticky/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _utils = __webpack_require__(/*! ../utils */ 15);
var _bindEvent = __webpack_require__(/*! ../mixins/bind-event */ 62);
var _scroll = __webpack_require__(/*! ../utils/dom/scroll */ 36);

var _createNamespace = (0, _utils.createNamespace)('sticky'),
createComponent = _createNamespace[0],
bem = _createNamespace[1];var _default =

createComponent({
  mixins: [(0, _bindEvent.BindEventMixin)(function (bind) {
    if (!this.scroller) {
      this.scroller = (0, _scroll.getScrollEventTarget)(this.$el);
    }

    bind(this.scroller, 'scroll', this.onScroll, true);
    this.onScroll();
  })],
  props: {
    zIndex: Number,
    container: null,
    offsetTop: {
      type: Number,
      default: 0 } },


  data: function data() {
    return {
      fixed: false,
      height: 0,
      transform: 0 };

  },
  computed: {
    style: function style() {
      if (!this.fixed) {
        return;
      }

      var style = {};

      if ((0, _utils.isDef)(this.zIndex)) {
        style.zIndex = this.zIndex;
      }

      if (this.offsetTop && this.fixed) {
        style.top = this.offsetTop + "px";
      }

      if (this.transform) {
        style.transform = "translate3d(0, " + this.transform + "px, 0)";
      }

      return style;
    } },

  methods: {
    onScroll: function onScroll() {
      var _this = this;

      this.height = this.$el.offsetHeight;
      var container = this.container,
      offsetTop = this.offsetTop;
      var scrollTop = (0, _scroll.getScrollTop)(window);
      var topToPageTop = (0, _scroll.getElementTop)(this.$el);

      var emitScrollEvent = function emitScrollEvent() {
        _this.$emit('scroll', {
          scrollTop: scrollTop,
          isFixed: _this.fixed });

      }; // The sticky component should be kept inside the container element


      if (container) {
        var bottomToPageTop = topToPageTop + container.offsetHeight;

        if (scrollTop + offsetTop + this.height > bottomToPageTop) {
          var distanceToBottom = this.height + scrollTop - bottomToPageTop;

          if (distanceToBottom < this.height) {
            this.fixed = true;
            this.transform = -(distanceToBottom + offsetTop);
          } else {
            this.fixed = false;
          }

          emitScrollEvent();
          return;
        }
      }

      if (scrollTop + offsetTop > topToPageTop) {
        this.fixed = true;
        this.transform = 0;
      } else {
        this.fixed = false;
      }

      emitScrollEvent();
    } },

  render: function render() {
    var h = arguments[0];
    var fixed = this.fixed;
    var style = {
      height: fixed ? this.height + "px" : null };

    return h("div", {
      "style": style },
    [h("div", {
      "class": bem({
        fixed: fixed }),

      "style": this.style },
    [this.slots()])]);
  } });exports.default = _default;

/***/ }),
/* 98 */
/*!*************************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/datetime-picker/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/esm/extends */ 13));
var _utils = __webpack_require__(/*! ../utils */ 15);
var _TimePicker = _interopRequireDefault(__webpack_require__(/*! ./TimePicker */ 99));
var _DatePicker = _interopRequireDefault(__webpack_require__(/*! ./DatePicker */ 102));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var _createNamespace = (0, _utils.createNamespace)('datetime-picker'),
createComponent = _createNamespace[0],
bem = _createNamespace[1];var _default =

createComponent({
  props: (0, _extends2.default)({}, _TimePicker.default.props, {}, _DatePicker.default.props),
  render: function render() {
    var h = arguments[0];
    var Component = this.type === 'time' ? _TimePicker.default : _DatePicker.default;
    return h(Component, {
      "class": bem(),
      "props": (0, _extends2.default)({}, this.$props),
      "on": (0, _extends2.default)({}, this.$listeners) });

  } });exports.default = _default;

/***/ }),
/* 99 */
/*!******************************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/datetime-picker/TimePicker.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/esm/extends */ 13));
var _utils = __webpack_require__(/*! ../utils */ 15);
var _string = __webpack_require__(/*! ../utils/format/string */ 22);
var _number = __webpack_require__(/*! ../utils/format/number */ 49);
var _shared = __webpack_require__(/*! ./shared */ 100);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var _createNamespace = (0, _utils.createNamespace)('time-picker'),
createComponent = _createNamespace[0];var _default =

createComponent({
  mixins: [_shared.TimePickerMixin],
  props: (0, _extends2.default)({}, _shared.sharedProps, {
    minHour: {
      type: Number,
      default: 0 },

    maxHour: {
      type: Number,
      default: 23 },

    minMinute: {
      type: Number,
      default: 0 },

    maxMinute: {
      type: Number,
      default: 59 } }),


  computed: {
    ranges: function ranges() {
      return [{
        type: 'hour',
        range: [this.minHour, this.maxHour] },
      {
        type: 'minute',
        range: [this.minMinute, this.maxMinute] }];

    } },

  watch: {
    value: function value(val) {
      val = this.formatValue(val);

      if (val !== this.innerValue) {
        this.innerValue = val;
        this.updateColumnValue(val);
      }
    } },

  methods: {
    formatValue: function formatValue(value) {
      if (!value) {
        value = (0, _string.padZero)(this.minHour) + ":" + (0, _string.padZero)(this.minMinute);
      }

      var _value$split = value.split(':'),
      hour = _value$split[0],
      minute = _value$split[1];

      hour = (0, _string.padZero)((0, _number.range)(hour, this.minHour, this.maxHour));
      minute = (0, _string.padZero)((0, _number.range)(minute, this.minMinute, this.maxMinute));
      return hour + ":" + minute;
    },
    onChange: function onChange(picker) {
      var _this = this;

      var indexes = picker.getIndexes();
      var hour = this.originColumns[0].values[indexes[0]];
      var minute = this.originColumns[1].values[indexes[1]];
      var value = hour + ":" + minute;
      this.innerValue = this.formatValue(value);
      this.$nextTick(function () {
        _this.$nextTick(function () {
          _this.$emit('change', picker);
        });
      });
    },
    updateColumnValue: function updateColumnValue(value) {
      var _this2 = this;

      var formatter = this.formatter;
      var pair = value.split(':');
      var values = [formatter('hour', pair[0]), formatter('minute', pair[1])];
      this.$nextTick(function () {
        _this2.$refs.picker.setValues(values);
      });
    } } });exports.default = _default;

/***/ }),
/* 100 */
/*!**************************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/datetime-picker/shared.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.TimePickerMixin = exports.sharedProps = void 0;var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/esm/extends */ 13));
var _utils = __webpack_require__(/*! ./utils */ 101);
var _string = __webpack_require__(/*! ../utils/format/string */ 22);
var _shared = __webpack_require__(/*! ../picker/shared */ 47);
var _picker = _interopRequireDefault(__webpack_require__(/*! ../picker */ 45));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
var sharedProps = (0, _extends2.default)({}, _shared.pickerProps, {
  value: null,
  filter: Function,
  showToolbar: {
    type: Boolean,
    default: true },

  formatter: {
    type: Function,
    default: function _default(type, value) {
      return value;
    } } });exports.sharedProps = sharedProps;


var TimePickerMixin = {
  data: function data() {
    return {
      innerValue: this.formatValue(this.value) };

  },
  computed: {
    originColumns: function originColumns() {
      var _this = this;

      return this.ranges.map(function (_ref) {
        var type = _ref.type,
        rangeArr = _ref.range;
        var values = (0, _utils.times)(rangeArr[1] - rangeArr[0] + 1, function (index) {
          var value = (0, _string.padZero)(rangeArr[0] + index);
          return value;
        });

        if (_this.filter) {
          values = _this.filter(type, values);
        }

        return {
          type: type,
          values: values };

      });
    },
    columns: function columns() {
      var _this2 = this;

      return this.originColumns.map(function (column) {
        return {
          values: column.values.map(function (value) {
            return _this2.formatter(column.type, value);
          }) };

      });
    } },

  watch: {
    innerValue: function innerValue(val) {
      this.$emit('input', val);
    },
    columns: function columns() {
      this.updateColumnValue(this.innerValue);
    } },

  mounted: function mounted() {
    this.updateColumnValue(this.innerValue);
  },
  methods: {
    onConfirm: function onConfirm() {
      this.$emit('confirm', this.innerValue);
    },
    onCancel: function onCancel() {
      this.$emit('cancel');
    } },

  render: function render() {
    var _this3 = this;

    var h = arguments[0];
    var props = {};
    Object.keys(_shared.pickerProps).forEach(function (key) {
      props[key] = _this3[key];
    });
    return h(_picker.default, {
      "ref": "picker",
      "attrs": {
        "columns": this.columns },

      "on": {
        "change": this.onChange,
        "confirm": this.onConfirm,
        "cancel": this.onCancel },

      "props": (0, _extends2.default)({}, props) });

  } };exports.TimePickerMixin = TimePickerMixin;

/***/ }),
/* 101 */
/*!*************************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/datetime-picker/utils.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.times = times;exports.getTrueValue = getTrueValue;exports.getMonthEndDay = getMonthEndDay;var _number = __webpack_require__(/*! ../utils/validate/number */ 26);
function times(n, iteratee) {
  var index = -1;
  var result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }

  return result;
}
function getTrueValue(value) {
  if (!value) {
    return;
  }

  while ((0, _number.isNaN)(parseInt(value, 10))) {
    value = value.slice(1);
  }

  return parseInt(value, 10);
}
function getMonthEndDay(year, month) {
  return 32 - new Date(year, month - 1, 32).getDate();
}

/***/ }),
/* 102 */
/*!******************************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/datetime-picker/DatePicker.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/esm/extends */ 13));
var _utils = __webpack_require__(/*! ../utils */ 15);
var _date = __webpack_require__(/*! ../utils/validate/date */ 103);
var _string = __webpack_require__(/*! ../utils/format/string */ 22);
var _utils2 = __webpack_require__(/*! ./utils */ 101);
var _shared = __webpack_require__(/*! ./shared */ 100);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
var currentYear = new Date().getFullYear();

var _createNamespace = (0, _utils.createNamespace)('date-picker'),
createComponent = _createNamespace[0];var _default2 =

createComponent({
  mixins: [_shared.TimePickerMixin],
  props: (0, _extends2.default)({}, _shared.sharedProps, {
    type: {
      type: String,
      default: 'datetime' },

    minDate: {
      type: Date,
      default: function _default() {
        return new Date(currentYear - 10, 0, 1);
      },
      validator: _date.isDate },

    maxDate: {
      type: Date,
      default: function _default() {
        return new Date(currentYear + 10, 11, 31);
      },
      validator: _date.isDate } }),


  watch: {
    value: function value(val) {
      val = this.formatValue(val);

      if (val.valueOf() !== this.innerValue.valueOf()) {
        this.innerValue = val;
      }
    } },

  computed: {
    ranges: function ranges() {
      var _this$getBoundary = this.getBoundary('max', this.innerValue),
      maxYear = _this$getBoundary.maxYear,
      maxDate = _this$getBoundary.maxDate,
      maxMonth = _this$getBoundary.maxMonth,
      maxHour = _this$getBoundary.maxHour,
      maxMinute = _this$getBoundary.maxMinute;

      var _this$getBoundary2 = this.getBoundary('min', this.innerValue),
      minYear = _this$getBoundary2.minYear,
      minDate = _this$getBoundary2.minDate,
      minMonth = _this$getBoundary2.minMonth,
      minHour = _this$getBoundary2.minHour,
      minMinute = _this$getBoundary2.minMinute;

      var result = [{
        type: 'year',
        range: [minYear, maxYear] },
      {
        type: 'month',
        range: [minMonth, maxMonth] },
      {
        type: 'day',
        range: [minDate, maxDate] },
      {
        type: 'hour',
        range: [minHour, maxHour] },
      {
        type: 'minute',
        range: [minMinute, maxMinute] }];

      if (this.type === 'date') result.splice(3, 2);
      if (this.type === 'year-month') result.splice(2, 3);
      return result;
    } },

  methods: {
    formatValue: function formatValue(value) {
      if (!(0, _date.isDate)(value)) {
        value = this.minDate;
      }

      value = Math.max(value, this.minDate.getTime());
      value = Math.min(value, this.maxDate.getTime());
      return new Date(value);
    },
    getBoundary: function getBoundary(type, value) {
      var _ref;

      var boundary = this[type + "Date"];
      var year = boundary.getFullYear();
      var month = 1;
      var date = 1;
      var hour = 0;
      var minute = 0;

      if (type === 'max') {
        month = 12;
        date = (0, _utils2.getMonthEndDay)(value.getFullYear(), value.getMonth() + 1);
        hour = 23;
        minute = 59;
      }

      if (value.getFullYear() === year) {
        month = boundary.getMonth() + 1;

        if (value.getMonth() + 1 === month) {
          date = boundary.getDate();

          if (value.getDate() === date) {
            hour = boundary.getHours();

            if (value.getHours() === hour) {
              minute = boundary.getMinutes();
            }
          }
        }
      }

      return _ref = {}, _ref[type + "Year"] = year, _ref[type + "Month"] = month, _ref[type + "Date"] = date, _ref[type + "Hour"] = hour, _ref[type + "Minute"] = minute, _ref;
    },
    onChange: function onChange(picker) {
      var _this = this;

      var values = picker.getValues();
      var year = (0, _utils2.getTrueValue)(values[0]);
      var month = (0, _utils2.getTrueValue)(values[1]);
      var maxDate = (0, _utils2.getMonthEndDay)(year, month);
      var date = (0, _utils2.getTrueValue)(values[2]);

      if (this.type === 'year-month') {
        date = 1;
      }

      date = date > maxDate ? maxDate : date;
      var hour = 0;
      var minute = 0;

      if (this.type === 'datetime') {
        hour = (0, _utils2.getTrueValue)(values[3]);
        minute = (0, _utils2.getTrueValue)(values[4]);
      }

      var value = new Date(year, month - 1, date, hour, minute);
      this.innerValue = this.formatValue(value);
      this.$nextTick(function () {
        _this.$nextTick(function () {
          _this.$emit('change', picker);
        });
      });
    },
    updateColumnValue: function updateColumnValue(value) {
      var _this2 = this;

      var formatter = this.formatter;
      var values = [formatter('year', "" + value.getFullYear()), formatter('month', (0, _string.padZero)(value.getMonth() + 1)), formatter('day', (0, _string.padZero)(value.getDate()))];

      if (this.type === 'datetime') {
        values.push(formatter('hour', (0, _string.padZero)(value.getHours())), formatter('minute', (0, _string.padZero)(value.getMinutes())));
      }

      if (this.type === 'year-month') {
        values = values.slice(0, 2);
      }

      this.$nextTick(function () {
        _this2.$refs.picker.setValues(values);
      });
    } } });exports.default = _default2;

/***/ }),
/* 103 */
/*!***********************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/utils/validate/date.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.isDate = isDate;var _number = __webpack_require__(/*! ./number */ 26);
function isDate(date) {
  return Object.prototype.toString.call(date) === '[object Date]' && !(0, _number.isNaN)(date.getTime());
}

/***/ }),
/* 104 */
/*!*****************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/divider/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _babelHelperVueJsxMergeProps = _interopRequireDefault(__webpack_require__(/*! @vue/babel-helper-vue-jsx-merge-props */ 14));
var _utils = __webpack_require__(/*! ../utils */ 15);
var _functional = __webpack_require__(/*! ../utils/functional */ 27);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // Types

var _createNamespace = (0, _utils.createNamespace)('divider'),
createComponent = _createNamespace[0],
bem = _createNamespace[1];

function Divider(h, props, slots, ctx) {
  var _bem;

  return h("div", (0, _babelHelperVueJsxMergeProps.default)([{
    "attrs": {
      "role": "separator" },

    "style": {
      borderColor: props.borderColor },

    "class": bem((_bem = {
      dashed: props.dashed,
      hairline: props.hairline },
    _bem["content-" + props.contentPosition] = slots.default, _bem)) },
  (0, _functional.inherit)(ctx, true)]), [slots.default && slots.default()]);
}

Divider.props = {
  dashed: Boolean,
  hairline: {
    type: Boolean,
    default: true },

  contentPosition: {
    type: String,
    default: 'center' } };var _default =


createComponent(Divider);exports.default = _default;

/***/ }),
/* 105 */
/*!***********************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/dropdown-item/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _utils = __webpack_require__(/*! ../utils */ 15);
var _cell = _interopRequireDefault(__webpack_require__(/*! ../cell */ 51));
var _icon = _interopRequireDefault(__webpack_require__(/*! ../icon */ 37));
var _popup = _interopRequireDefault(__webpack_require__(/*! ../popup */ 40));
var _relation = __webpack_require__(/*! ../mixins/relation */ 69);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var _createNamespace = (0, _utils.createNamespace)('dropdown-item'),
createComponent = _createNamespace[0],
bem = _createNamespace[1];var _default2 =

createComponent({
  mixins: [(0, _relation.ChildrenMixin)('vanDropdownMenu')],
  props: {
    value: null,
    title: String,
    disabled: Boolean,
    titleClass: String,
    options: {
      type: Array,
      default: function _default() {
        return [];
      } } },


  data: function data() {
    return {
      transition: true,
      showPopup: false,
      showWrapper: false };

  },
  computed: {
    displayTitle: function displayTitle() {
      var _this = this;

      if (this.title) {
        return this.title;
      }

      var match = this.options.filter(function (option) {
        return option.value === _this.value;
      });
      return match.length ? match[0].text : '';
    } },

  methods: {
    toggle: function toggle(show, options) {
      if (show === void 0) {
        show = !this.showPopup;
      }

      if (options === void 0) {
        options = {};
      }

      if (show === this.showPopup) {
        return;
      }

      this.transition = !options.immediate;
      this.showPopup = show;

      if (show) {
        this.parent.updateOffset();
        this.showWrapper = true;
      }
    } },

  beforeCreate: function beforeCreate() {
    var _this2 = this;

    var createEmitter = function createEmitter(eventName) {
      return function () {
        return _this2.$emit(eventName);
      };
    };

    this.onOpen = createEmitter('open');
    this.onClose = createEmitter('close');
    this.onOpened = createEmitter('opened');
  },
  render: function render() {
    var _this3 = this;

    var h = arguments[0];
    var _this$parent = this.parent,
    zIndex = _this$parent.zIndex,
    offset = _this$parent.offset,
    overlay = _this$parent.overlay,
    duration = _this$parent.duration,
    direction = _this$parent.direction,
    activeColor = _this$parent.activeColor,
    closeOnClickOverlay = _this$parent.closeOnClickOverlay;
    var Options = this.options.map(function (option) {
      var active = option.value === _this3.value;
      return h(_cell.default, {
        "attrs": {
          "clickable": true,
          "icon": option.icon,
          "title": option.text },

        "key": option.value,
        "class": bem('option'),
        "style": {
          color: active ? activeColor : '' },

        "on": {
          "click": function click() {
            _this3.showPopup = false;

            if (option.value !== _this3.value) {
              _this3.$emit('input', option.value);

              _this3.$emit('change', option.value);
            }
          } } },

      [active && h(_icon.default, {
        "class": bem('icon'),
        "attrs": {
          "color": activeColor,
          "name": "success" } })]);


    });
    var style = {
      zIndex: zIndex };


    if (direction === 'down') {
      style.top = offset + "px";
    } else {
      style.bottom = offset + "px";
    }

    return h("div", {
      "directives": [{
        name: "show",
        value: this.showWrapper }],

      "style": style,
      "class": bem([direction]) },
    [h(_popup.default, {
      "attrs": {
        "overlay": overlay,
        "position": direction === 'down' ? 'top' : 'bottom',
        "duration": this.transition ? duration : 0,
        "closeOnClickOverlay": closeOnClickOverlay,
        "overlayStyle": {
          position: 'absolute' } },


      "class": bem('content'),
      "on": {
        "open": this.onOpen,
        "close": this.onClose,
        "opened": this.onOpened,
        "closed": function closed() {
          _this3.showWrapper = false;

          _this3.$emit('closed');
        } },

      "model": {
        value: _this3.showPopup,
        callback: function callback($$v) {
          _this3.showPopup = $$v;
        } } },

    [Options, this.slots('default')])]);
  } });exports.default = _default2;

/***/ }),
/* 106 */
/*!***********************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/dropdown-menu/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _utils = __webpack_require__(/*! ../utils */ 15);
var _constant = __webpack_require__(/*! ../utils/constant */ 28);
var _relation = __webpack_require__(/*! ../mixins/relation */ 69);
var _clickOutside = __webpack_require__(/*! ../mixins/click-outside */ 107);

var _createNamespace = (0, _utils.createNamespace)('dropdown-menu'),
createComponent = _createNamespace[0],
bem = _createNamespace[1];var _default =

createComponent({
  mixins: [(0, _relation.ParentMixin)('vanDropdownMenu'), (0, _clickOutside.ClickOutsideMixin)({
    event: 'click',
    method: 'onClickOutside' })],

  props: {
    activeColor: String,
    overlay: {
      type: Boolean,
      default: true },

    zIndex: {
      type: Number,
      default: 10 },

    duration: {
      type: Number,
      default: 0.2 },

    direction: {
      type: String,
      default: 'down' },

    closeOnClickOverlay: {
      type: Boolean,
      default: true } },


  data: function data() {
    return {
      offset: 0 };

  },
  methods: {
    updateOffset: function updateOffset() {
      var menu = this.$refs.menu;
      var rect = menu.getBoundingClientRect();

      if (this.direction === 'down') {
        this.offset = rect.bottom;
      } else {
        this.offset = window.innerHeight - rect.top;
      }
    },
    toggleItem: function toggleItem(active) {
      this.children.forEach(function (item, index) {
        if (index === active) {
          item.toggle();
        } else if (item.showPopup) {
          item.toggle(false, {
            immediate: true });

        }
      });
    },
    onClickOutside: function onClickOutside() {
      this.children.forEach(function (item) {
        item.toggle(false);
      });
    } },

  render: function render() {
    var _this = this;

    var h = arguments[0];
    var Titles = this.children.map(function (item, index) {
      return h("div", {
        "attrs": {
          "role": "button",
          "tabindex": item.disabled ? -1 : 0 },

        "class": bem('item', {
          disabled: item.disabled }),

        "on": {
          "click": function click() {
            if (!item.disabled) {
              _this.toggleItem(index);
            }
          } } },

      [h("span", {
        "class": [bem('title', {
          active: item.showPopup,
          down: item.showPopup === (_this.direction === 'down') }),
        item.titleClass],
        "style": {
          color: item.showPopup ? _this.activeColor : '' } },

      [h("div", {
        "class": "van-ellipsis" },
      [item.displayTitle])])]);
    });
    return h("div", {
      "ref": "menu",
      "class": [bem(), _constant.BORDER_TOP_BOTTOM] },
    [Titles, this.slots('default')]);
  } });exports.default = _default;

/***/ }),
/* 107 */
/*!************************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/mixins/click-outside.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.ClickOutsideMixin = void 0;


var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _event = __webpack_require__(/*! ../utils/dom/event */ 33);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /**
                                                                                                                                          * Listen to click outside event
                                                                                                                                          */var ClickOutsideMixin = function ClickOutsideMixin(config) {return _vue.default.extend({
    props: {
      closeOnClickOutside: {
        type: Boolean,
        default: true } },


    data: function data() {
      var _this = this;

      var clickOutsideHandler = function clickOutsideHandler(event) {
        if (_this.closeOnClickOutside && !_this.$el.contains(event.target)) {
          _this[config.method]();
        }
      };

      return {
        clickOutsideHandler: clickOutsideHandler };

    },
    mounted: function mounted() {
      (0, _event.on)(document, config.event, this.clickOutsideHandler);
    },
    beforeDestroy: function beforeDestroy() {
      (0, _event.off)(document, config.event, this.clickOutsideHandler);
    } });

};exports.ClickOutsideMixin = ClickOutsideMixin;

/***/ }),
/* 108 */
/*!**********************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/goods-action/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _utils = __webpack_require__(/*! ../utils */ 15);
var _relation = __webpack_require__(/*! ../mixins/relation */ 69);

var _createNamespace = (0, _utils.createNamespace)('goods-action'),
createComponent = _createNamespace[0],
bem = _createNamespace[1];var _default =

createComponent({
  mixins: [(0, _relation.ParentMixin)('vanGoodsAction')],
  props: {
    safeAreaInsetBottom: Boolean },

  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": bem({
        'safe-area-inset-bottom': this.safeAreaInsetBottom }) },

    [this.slots()]);
  } });exports.default = _default;

/***/ }),
/* 109 */
/*!*****************************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/goods-action-button/index.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/esm/extends */ 13));
var _utils = __webpack_require__(/*! ../utils */ 15);
var _router = __webpack_require__(/*! ../utils/router */ 53);
var _relation = __webpack_require__(/*! ../mixins/relation */ 69);
var _button = _interopRequireDefault(__webpack_require__(/*! ../button */ 58));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var _createNamespace = (0, _utils.createNamespace)('goods-action-button'),
createComponent = _createNamespace[0],
bem = _createNamespace[1];var _default =

createComponent({
  mixins: [(0, _relation.ChildrenMixin)('vanGoodsAction')],
  props: (0, _extends2.default)({}, _router.routeProps, {
    type: String,
    text: String,
    color: String,
    loading: Boolean,
    disabled: Boolean }),

  computed: {
    isFirst: function isFirst() {
      var prev = this.parent && this.parent.children[this.index - 1];
      return !prev || prev.$options.name !== this.$options.name;
    },
    isLast: function isLast() {
      var next = this.parent && this.parent.children[this.index + 1];
      return !next || next.$options.name !== this.$options.name;
    } },

  methods: {
    onClick: function onClick(event) {
      this.$emit('click', event);
      (0, _router.route)(this.$router, this);
    } },

  render: function render() {
    var h = arguments[0];
    return h(_button.default, {
      "class": bem([{
        first: this.isFirst,
        last: this.isLast },
      this.type]),
      "attrs": {
        "square": true,
        "size": "large",
        "type": this.type,
        "color": this.color,
        "loading": this.loading,
        "disabled": this.disabled },

      "on": {
        "click": this.onClick } },

    [this.slots() || this.text]);
  } });exports.default = _default;

/***/ }),
/* 110 */
/*!***************************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/goods-action-icon/index.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/esm/extends */ 13));
var _utils = __webpack_require__(/*! ../utils */ 15);
var _router = __webpack_require__(/*! ../utils/router */ 53);
var _relation = __webpack_require__(/*! ../mixins/relation */ 69);
var _icon = _interopRequireDefault(__webpack_require__(/*! ../icon */ 37));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var _createNamespace = (0, _utils.createNamespace)('goods-action-icon'),
createComponent = _createNamespace[0],
bem = _createNamespace[1];var _default =

createComponent({
  mixins: [(0, _relation.ChildrenMixin)('vanGoodsAction')],
  props: (0, _extends2.default)({}, _router.routeProps, {
    text: String,
    icon: String,
    info: [Number, String],
    iconClass: null }),

  methods: {
    onClick: function onClick(event) {
      this.$emit('click', event);
      (0, _router.route)(this.$router, this);
    } },

  render: function render() {
    var h = arguments[0];
    return h("div", {
      "attrs": {
        "role": "button",
        "tabindex": "0" },

      "class": bem(),
      "on": {
        "click": this.onClick } },

    [this.slots('icon') ? h("div", {
      "class": bem('icon') },
    [this.slots('icon')]) : h(_icon.default, {
      "class": [bem('icon'), this.iconClass],
      "attrs": {
        "tag": "div",
        "info": this.info,
        "name": this.icon } }),

    this.slots() || this.text]);
  } });exports.default = _default;

/***/ }),
/* 111 */
/*!**************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/grid/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _utils = __webpack_require__(/*! ../utils */ 15);
var _relation = __webpack_require__(/*! ../mixins/relation */ 69);
var _constant = __webpack_require__(/*! ../utils/constant */ 28);

var _createNamespace = (0, _utils.createNamespace)('grid'),
createComponent = _createNamespace[0],
bem = _createNamespace[1];var _default =

createComponent({
  mixins: [(0, _relation.ParentMixin)('vanGrid')],
  props: {
    square: Boolean,
    gutter: [Number, String],
    clickable: Boolean,
    columnNum: {
      type: Number,
      default: 4 },

    center: {
      type: Boolean,
      default: true },

    border: {
      type: Boolean,
      default: true } },


  computed: {
    style: function style() {
      var gutter = this.gutter;

      if (gutter) {
        return {
          paddingLeft: (0, _utils.addUnit)(gutter) };

      }
    } },

  render: function render() {
    var _ref;

    var h = arguments[0];
    return h("div", {
      "style": this.style,
      "class": [bem(), (_ref = {}, _ref[_constant.BORDER_TOP] = this.border && !this.gutter, _ref)] },
    [this.slots()]);
  } });exports.default = _default;

/***/ }),
/* 112 */
/*!*******************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/grid-item/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/esm/extends */ 13));
var _utils = __webpack_require__(/*! ../utils */ 15);
var _constant = __webpack_require__(/*! ../utils/constant */ 28);
var _relation = __webpack_require__(/*! ../mixins/relation */ 69);
var _router = __webpack_require__(/*! ../utils/router */ 53);
var _icon = _interopRequireDefault(__webpack_require__(/*! ../icon */ 37));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var _createNamespace = (0, _utils.createNamespace)('grid-item'),
createComponent = _createNamespace[0],
bem = _createNamespace[1];var _default =

createComponent({
  mixins: [(0, _relation.ChildrenMixin)('vanGrid')],
  props: (0, _extends2.default)({}, _router.routeProps, {
    icon: String,
    text: String }),

  computed: {
    style: function style() {
      var _this$parent = this.parent,
      square = _this$parent.square,
      gutter = _this$parent.gutter,
      columnNum = _this$parent.columnNum;
      var percent = 100 / columnNum + "%";
      var style = {
        flexBasis: percent };


      if (square) {
        style.paddingTop = percent;
      } else if (gutter) {
        var gutterValue = (0, _utils.addUnit)(gutter);
        style.paddingRight = gutterValue;

        if (this.index >= columnNum) {
          style.marginTop = gutterValue;
        }
      }

      return style;
    },
    contentStyle: function contentStyle() {
      var _this$parent2 = this.parent,
      square = _this$parent2.square,
      gutter = _this$parent2.gutter;

      if (square && gutter) {
        var gutterValue = (0, _utils.addUnit)(gutter);
        return {
          right: gutterValue,
          bottom: gutterValue,
          height: 'auto' };

      }
    } },

  methods: {
    onClick: function onClick(event) {
      this.$emit('click', event);
      (0, _router.route)(this.$router, this);
    },
    renderContent: function renderContent() {
      var h = this.$createElement;
      var slot = this.slots();

      if (slot) {
        return slot;
      }

      return [this.slots('icon') || this.icon && h(_icon.default, {
        "attrs": {
          "name": this.icon },

        "class": bem('icon') }),
      this.slots('text') || this.text && h("span", {
        "class": bem('text') },
      [this.text])];
    } },

  render: function render() {
    var _ref;

    var h = arguments[0];
    var _this$parent3 = this.parent,
    center = _this$parent3.center,
    border = _this$parent3.border,
    square = _this$parent3.square,
    gutter = _this$parent3.gutter,
    clickable = _this$parent3.clickable;
    return h("div", {
      "class": [bem({
        square: square })],

      "style": this.style,
      "on": {
        "click": this.onClick } },

    [h("div", {
      "style": this.contentStyle,
      "class": [bem('content', {
        center: center,
        square: square,
        clickable: clickable,
        surround: border && gutter }), (
      _ref = {}, _ref[_constant.BORDER] = border, _ref)] },
    [this.renderContent()])]);
  } });exports.default = _default;

/***/ }),
/* 113 */
/*!***********************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/image-preview/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/esm/extends */ 13));
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _ImagePreview = _interopRequireDefault(__webpack_require__(/*! ./ImagePreview */ 114));
var _utils = __webpack_require__(/*! ../utils */ 15);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
var instance;
var defaultConfig = {
  images: [],
  loop: true,
  swipeDuration: 500,
  value: true,
  minZoom: 1 / 3,
  maxZoom: 3,
  className: '',
  onClose: null,
  onChange: null,
  lazyLoad: false,
  showIndex: true,
  asyncClose: false,
  startPosition: 0,
  showIndicators: false,
  closeOnPopstate: false };


var initInstance = function initInstance() {
  instance = new (_vue.default.extend(_ImagePreview.default))({
    el: document.createElement('div') });

  document.body.appendChild(instance.$el);
  instance.$on('change', function (index) {
    if (instance.onChange) {
      instance.onChange(index);
    }
  });
};

var ImagePreview = function ImagePreview(images, startPosition) {
  if (startPosition === void 0) {
    startPosition = 0;
  }

  /* istanbul ignore if */
  if (_utils.isServer) {
    return;
  }

  if (!instance) {
    initInstance();
  }

  var options = Array.isArray(images) ? {
    images: images,
    startPosition: startPosition } :
  images;

  (0, _extends2.default)(instance, defaultConfig, options);

  instance.$once('input', function (show) {
    instance.value = show;
  });

  if (options.onClose) {
    instance.$once('close', options.onClose);
  }

  return instance;
};

ImagePreview.install = function () {
  _vue.default.use(_ImagePreview.default);
};var _default =

ImagePreview;exports.default = _default;

/***/ }),
/* 114 */
/*!******************************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/image-preview/ImagePreview.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _babelHelperVueJsxMergeProps = _interopRequireDefault(__webpack_require__(/*! @vue/babel-helper-vue-jsx-merge-props */ 14));

var _utils = __webpack_require__(/*! ../utils */ 15);
var _number = __webpack_require__(/*! ../utils/format/number */ 49);
var _event = __webpack_require__(/*! ../utils/dom/event */ 33);
var _popup = __webpack_require__(/*! ../mixins/popup */ 29);
var _touch = __webpack_require__(/*! ../mixins/touch */ 31);
var _closeOnPopstate = __webpack_require__(/*! ../mixins/close-on-popstate */ 61);
var _swipe = _interopRequireDefault(__webpack_require__(/*! ../swipe */ 115));
var _swipeItem = _interopRequireDefault(__webpack_require__(/*! ../swipe-item */ 116));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var _createNamespace = (0, _utils.createNamespace)('image-preview'),
createComponent = _createNamespace[0],
bem = _createNamespace[1];

function getDistance(touches) {
  return Math.sqrt(Math.abs((touches[0].clientX - touches[1].clientX) * (touches[0].clientY - touches[1].clientY)));
}var _default2 =

createComponent({
  mixins: [_popup.PopupMixin, _touch.TouchMixin, _closeOnPopstate.CloseOnPopstateMixin],
  props: {
    className: null,
    lazyLoad: Boolean,
    asyncClose: Boolean,
    showIndicators: Boolean,
    images: {
      type: Array,
      default: function _default() {
        return [];
      } },

    loop: {
      type: Boolean,
      default: true },

    swipeDuration: {
      type: Number,
      default: 500 },

    overlay: {
      type: Boolean,
      default: true },

    showIndex: {
      type: Boolean,
      default: true },

    startPosition: {
      type: Number,
      default: 0 },

    minZoom: {
      type: Number,
      default: 1 / 3 },

    maxZoom: {
      type: Number,
      default: 3 },

    overlayClass: {
      type: String,
      default: bem('overlay') },

    closeOnClickOverlay: {
      type: Boolean,
      default: true } },


  data: function data() {
    this.bindStatus = false;
    return {
      scale: 1,
      moveX: 0,
      moveY: 0,
      moving: false,
      zooming: false,
      active: 0,
      doubleClickTimer: null };

  },
  computed: {
    imageStyle: function imageStyle() {
      var scale = this.scale;
      var style = {
        transition: this.zooming || this.moving ? '' : '.3s all' };


      if (scale !== 1) {
        style.transform = "scale3d(" + scale + ", " + scale + ", 1) translate(" + this.moveX / scale + "px, " + this.moveY / scale + "px)";
      }

      return style;
    } },

  watch: {
    value: function value() {
      this.active = this.startPosition;
    },
    startPosition: function startPosition(active) {
      this.active = active;
    } },

  methods: {
    onWrapperTouchStart: function onWrapperTouchStart() {
      this.touchStartTime = new Date();
    },
    onWrapperTouchEnd: function onWrapperTouchEnd(event) {
      var _this = this;

      (0, _event.preventDefault)(event);
      var deltaTime = new Date() - this.touchStartTime;

      var _ref = this.$refs.swipe || {},
      _ref$offsetX = _ref.offsetX,
      offsetX = _ref$offsetX === void 0 ? 0 : _ref$offsetX,
      _ref$offsetY = _ref.offsetY,
      offsetY = _ref$offsetY === void 0 ? 0 : _ref$offsetY; // prevent long tap to close component


      if (deltaTime < 300 && offsetX < 10 && offsetY < 10) {
        if (!this.doubleClickTimer) {
          this.doubleClickTimer = setTimeout(function () {
            var index = _this.active;

            _this.resetScale();

            _this.$emit('close', {
              index: index,
              url: _this.images[index] });


            if (!_this.asyncClose) {
              _this.$emit('input', false);
            }

            _this.doubleClickTimer = null;
          }, 300);
        } else {
          clearTimeout(this.doubleClickTimer);
          this.doubleClickTimer = null;
          this.toggleScale();
        }
      }
    },
    startMove: function startMove(event) {
      var image = event.currentTarget;
      var rect = image.getBoundingClientRect();
      var winWidth = window.innerWidth;
      var winHeight = window.innerHeight;
      this.touchStart(event);
      this.moving = true;
      this.startMoveX = this.moveX;
      this.startMoveY = this.moveY;
      this.maxMoveX = Math.max(0, (rect.width - winWidth) / 2);
      this.maxMoveY = Math.max(0, (rect.height - winHeight) / 2);
    },
    startZoom: function startZoom(event) {
      this.moving = false;
      this.zooming = true;
      this.startScale = this.scale;
      this.startDistance = getDistance(event.touches);
    },
    onImageTouchStart: function onImageTouchStart(event) {
      var touches = event.touches;

      var _ref2 = this.$refs.swipe || {},
      _ref2$offsetX = _ref2.offsetX,
      offsetX = _ref2$offsetX === void 0 ? 0 : _ref2$offsetX;

      if (touches.length === 1 && this.scale !== 1) {
        this.startMove(event);
      }
      /* istanbul ignore else */else
        if (touches.length === 2 && !offsetX) {
          this.startZoom(event);
        }
    },
    onImageTouchMove: function onImageTouchMove(event) {
      var touches = event.touches;

      if (this.moving || this.zooming) {
        (0, _event.preventDefault)(event, true);
      }

      if (this.moving) {
        this.touchMove(event);
        var moveX = this.deltaX + this.startMoveX;
        var moveY = this.deltaY + this.startMoveY;
        this.moveX = (0, _number.range)(moveX, -this.maxMoveX, this.maxMoveX);
        this.moveY = (0, _number.range)(moveY, -this.maxMoveY, this.maxMoveY);
      }

      if (this.zooming && touches.length === 2) {
        var distance = getDistance(touches);
        var scale = this.startScale * distance / this.startDistance;
        this.scale = (0, _number.range)(scale, this.minZoom, this.maxZoom);
      }
    },
    onImageTouchEnd: function onImageTouchEnd(event) {
      /* istanbul ignore else */
      if (this.moving || this.zooming) {
        var stopPropagation = true;

        if (this.moving && this.startMoveX === this.moveX && this.startMoveY === this.moveY) {
          stopPropagation = false;
        }

        if (!event.touches.length) {
          this.moving = false;
          this.zooming = false;
          this.startMoveX = 0;
          this.startMoveY = 0;
          this.startScale = 1;

          if (this.scale < 1) {
            this.resetScale();
          }
        }

        if (stopPropagation) {
          (0, _event.preventDefault)(event, true);
        }
      }
    },
    onSwipeChange: function onSwipeChange(active) {
      this.resetScale();
      this.active = active;
      this.$emit('change', active);
    },
    resetScale: function resetScale() {
      this.scale = 1;
      this.moveX = 0;
      this.moveY = 0;
    },
    toggleScale: function toggleScale() {
      var scale = this.scale > 1 ? 1 : 2;
      this.scale = scale;
      this.moveX = 0;
      this.moveY = 0;
    } },

  render: function render() {
    var _this2 = this;

    var h = arguments[0];

    if (!this.value) {
      return;
    }

    var active = this.active,
    images = this.images;
    var Index = this.showIndex && h("div", {
      "class": bem('index') },
    [this.slots('index') || active + 1 + "/" + images.length]);
    var Images = h(_swipe.default, {
      "ref": "swipe",
      "attrs": {
        "loop": this.loop,
        "duration": this.swipeDuration,
        "indicatorColor": "white",
        "initialSwipe": this.startPosition,
        "showIndicators": this.showIndicators },

      "on": {
        "change": this.onSwipeChange } },

    [images.map(function (image, index) {
      var props = {
        class: bem('image'),
        style: index === active ? _this2.imageStyle : null,
        on: {
          touchstart: _this2.onImageTouchStart,
          touchmove: _this2.onImageTouchMove,
          touchend: _this2.onImageTouchEnd,
          touchcancel: _this2.onImageTouchEnd } };


      return h(_swipeItem.default, [_this2.lazyLoad ? h("img", (0, _babelHelperVueJsxMergeProps.default)([{
        "directives": [{
          name: "lazy",
          value: image }] },

      props])) : h("img", (0, _babelHelperVueJsxMergeProps.default)([{
        "attrs": {
          "src": image } },

      props]))]);
    })]);
    return h("transition", {
      "attrs": {
        "name": "van-fade" } },

    [h("div", {
      "class": [bem(), this.className],
      "on": {
        "touchstart": this.onWrapperTouchStart,
        "touchMove": _event.preventDefault,
        "touchend": this.onWrapperTouchEnd,
        "touchcancel": this.onWrapperTouchEnd } },

    [Images, Index])]);
  } });exports.default = _default2;

/***/ }),
/* 115 */
/*!***************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/swipe/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _utils = __webpack_require__(/*! ../utils */ 15);
var _event = __webpack_require__(/*! ../utils/dom/event */ 33);
var _touch = __webpack_require__(/*! ../mixins/touch */ 31);
var _bindEvent = __webpack_require__(/*! ../mixins/bind-event */ 62);
var _raf = __webpack_require__(/*! ../utils/dom/raf */ 79);
var _number = __webpack_require__(/*! ../utils/format/number */ 49);

var _createNamespace = (0, _utils.createNamespace)('swipe'),
createComponent = _createNamespace[0],
bem = _createNamespace[1];var _default =

createComponent({
  mixins: [_touch.TouchMixin, (0, _bindEvent.BindEventMixin)(function (bind, isBind) {
    bind(window, 'resize', this.onResize, true);

    if (isBind) {
      this.initialize();
    } else {
      this.clear();
    }
  })],
  props: {
    width: Number,
    height: Number,
    autoplay: Number,
    vertical: Boolean,
    indicatorColor: String,
    loop: {
      type: Boolean,
      default: true },

    duration: {
      type: Number,
      default: 500 },

    touchable: {
      type: Boolean,
      default: true },

    initialSwipe: {
      type: Number,
      default: 0 },

    showIndicators: {
      type: Boolean,
      default: true } },


  data: function data() {
    return {
      computedWidth: 0,
      computedHeight: 0,
      offset: 0,
      active: 0,
      deltaX: 0,
      deltaY: 0,
      swipes: [],
      swiping: false };

  },
  watch: {
    swipes: function swipes() {
      this.initialize();
    },
    initialSwipe: function initialSwipe() {
      this.initialize();
    },
    autoplay: function autoplay(_autoplay) {
      if (!_autoplay) {
        this.clear();
      } else {
        this.autoPlay();
      }
    } },

  computed: {
    count: function count() {
      return this.swipes.length;
    },
    delta: function delta() {
      return this.vertical ? this.deltaY : this.deltaX;
    },
    size: function size() {
      return this[this.vertical ? 'computedHeight' : 'computedWidth'];
    },
    trackSize: function trackSize() {
      return this.count * this.size;
    },
    activeIndicator: function activeIndicator() {
      return (this.active + this.count) % this.count;
    },
    isCorrectDirection: function isCorrectDirection() {
      var expect = this.vertical ? 'vertical' : 'horizontal';
      return this.direction === expect;
    },
    trackStyle: function trackStyle() {
      var _ref;

      var mainAxis = this.vertical ? 'height' : 'width';
      var crossAxis = this.vertical ? 'width' : 'height';
      return _ref = {}, _ref[mainAxis] = this.trackSize + "px", _ref[crossAxis] = this[crossAxis] ? this[crossAxis] + "px" : '', _ref.transitionDuration = (this.swiping ? 0 : this.duration) + "ms", _ref.transform = "translate" + (this.vertical ? 'Y' : 'X') + "(" + this.offset + "px)", _ref;
    },
    indicatorStyle: function indicatorStyle() {
      return {
        backgroundColor: this.indicatorColor };

    },
    minOffset: function minOffset() {
      var rect = this.$el.getBoundingClientRect();
      return (this.vertical ? rect.height : rect.width) - this.size * this.count;
    } },

  methods: {
    // initialize swipe position
    initialize: function initialize(active) {
      if (active === void 0) {
        active = this.initialSwipe;
      }

      clearTimeout(this.timer);

      if (this.$el) {
        var rect = this.$el.getBoundingClientRect();
        this.computedWidth = this.width || rect.width;
        this.computedHeight = this.height || rect.height;
      }

      this.swiping = true;
      this.active = active;
      this.offset = this.count > 1 ? -this.size * this.active : 0;
      this.swipes.forEach(function (swipe) {
        swipe.offset = 0;
      });
      this.autoPlay();
    },
    onResize: function onResize() {
      this.initialize(this.activeIndicator);
    },
    onTouchStart: function onTouchStart(event) {
      if (!this.touchable) return;
      this.clear();
      this.swiping = true;
      this.touchStart(event);
      this.correctPosition();
    },
    onTouchMove: function onTouchMove(event) {
      if (!this.touchable || !this.swiping) return;
      this.touchMove(event);

      if (this.isCorrectDirection) {
        (0, _event.preventDefault)(event, true);
        this.move({
          offset: this.delta });

      }
    },
    onTouchEnd: function onTouchEnd() {
      if (!this.touchable || !this.swiping) return;

      if (this.delta && this.isCorrectDirection) {
        var offset = this.vertical ? this.offsetY : this.offsetX;
        this.move({
          pace: offset > 0 ? this.delta > 0 ? -1 : 1 : 0,
          emitChange: true });

      }

      this.swiping = false;
      this.autoPlay();
    },
    getTargetActive: function getTargetActive(pace) {
      var active = this.active,
      count = this.count;

      if (pace) {
        if (this.loop) {
          return (0, _number.range)(active + pace, -1, count);
        }

        return (0, _number.range)(active + pace, 0, count - 1);
      }

      return active;
    },
    getTargetOffset: function getTargetOffset(targetActive, offset) {
      var currentPosition = targetActive * this.size;

      if (!this.loop) {
        currentPosition = Math.min(currentPosition, -this.minOffset);
      }

      var targetOffset = Math.round(offset - currentPosition);

      if (!this.loop) {
        targetOffset = (0, _number.range)(targetOffset, this.minOffset, 0);
      }

      return targetOffset;
    },
    move: function move(_ref2) {
      var _ref2$pace = _ref2.pace,
      pace = _ref2$pace === void 0 ? 0 : _ref2$pace,
      _ref2$offset = _ref2.offset,
      offset = _ref2$offset === void 0 ? 0 : _ref2$offset,
      emitChange = _ref2.emitChange;
      var loop = this.loop,
      count = this.count,
      active = this.active,
      swipes = this.swipes,
      trackSize = this.trackSize,
      minOffset = this.minOffset;

      if (count <= 1) {
        return;
      }

      var targetActive = this.getTargetActive(pace);
      var targetOffset = this.getTargetOffset(targetActive, offset); // auto move first and last swipe in loop mode

      if (loop) {
        if (swipes[0]) {
          var outRightBound = targetOffset < minOffset;
          swipes[0].offset = outRightBound ? trackSize : 0;
        }

        if (swipes[count - 1]) {
          var outLeftBound = targetOffset > 0;
          swipes[count - 1].offset = outLeftBound ? -trackSize : 0;
        }
      }

      this.active = targetActive;
      this.offset = targetOffset;

      if (emitChange && targetActive !== active) {
        this.$emit('change', this.activeIndicator);
      }
    },
    swipeTo: function swipeTo(index, options) {
      var _this = this;

      if (options === void 0) {
        options = {};
      }

      this.swiping = true;
      this.resetTouchStatus();
      this.correctPosition();
      (0, _raf.doubleRaf)(function () {
        _this.move({
          pace: index % _this.count - _this.active,
          emitChange: true });


        if (options.immediate) {
          (0, _raf.doubleRaf)(function () {
            _this.swiping = false;
          });
        } else {
          _this.swiping = false;
        }
      });
    },
    correctPosition: function correctPosition() {
      if (this.active <= -1) {
        this.move({
          pace: this.count });

      }

      if (this.active >= this.count) {
        this.move({
          pace: -this.count });

      }
    },
    clear: function clear() {
      clearTimeout(this.timer);
    },
    autoPlay: function autoPlay() {
      var _this2 = this;

      var autoplay = this.autoplay;

      if (autoplay && this.count > 1) {
        this.clear();
        this.timer = setTimeout(function () {
          _this2.swiping = true;

          _this2.resetTouchStatus();

          _this2.correctPosition();

          (0, _raf.doubleRaf)(function () {
            _this2.swiping = false;

            _this2.move({
              pace: 1,
              emitChange: true });


            _this2.autoPlay();
          });
        }, autoplay);
      }
    },
    renderIndicator: function renderIndicator() {
      var _this3 = this;

      var h = this.$createElement;
      var count = this.count,
      activeIndicator = this.activeIndicator;
      var slot = this.slots('indicator');

      if (slot) {
        return slot;
      }

      if (this.showIndicators && count > 1) {
        return h("div", {
          "class": bem('indicators', {
            vertical: this.vertical }) },

        [Array.apply(void 0, Array(count)).map(function (empty, index) {
          return h("i", {
            "class": bem('indicator', {
              active: index === activeIndicator }),

            "style": index === activeIndicator ? _this3.indicatorStyle : null });

        })]);
      }
    } },

  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": bem() },
    [h("div", {
      "ref": "track",
      "style": this.trackStyle,
      "class": bem('track'),
      "on": {
        "touchstart": this.onTouchStart,
        "touchmove": this.onTouchMove,
        "touchend": this.onTouchEnd,
        "touchcancel": this.onTouchEnd } },

    [this.slots()]), this.renderIndicator()]);
  } });exports.default = _default;

/***/ }),
/* 116 */
/*!********************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/swipe-item/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/esm/extends */ 13));
var _utils = __webpack_require__(/*! ../utils */ 15);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var _createNamespace = (0, _utils.createNamespace)('swipe-item'),
createComponent = _createNamespace[0],
bem = _createNamespace[1];var _default =

createComponent({
  data: function data() {
    return {
      offset: 0 };

  },
  beforeCreate: function beforeCreate() {
    this.$parent.swipes.push(this);
  },
  destroyed: function destroyed() {
    this.$parent.swipes.splice(this.$parent.swipes.indexOf(this), 1);
  },
  render: function render() {
    var h = arguments[0];
    var _this$$parent = this.$parent,
    vertical = _this$$parent.vertical,
    computedWidth = _this$$parent.computedWidth,
    computedHeight = _this$$parent.computedHeight;
    var style = {
      width: computedWidth + 'px',
      height: vertical ? computedHeight + 'px' : '100%',
      transform: "translate" + (vertical ? 'Y' : 'X') + "(" + this.offset + "px)" };

    return h("div", {
      "class": bem(),
      "style": style,
      "on": (0, _extends2.default)({}, this.$listeners) },
    [this.slots()]);
  } });exports.default = _default;

/***/ }),
/* 117 */
/*!**********************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/index-anchor/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _utils = __webpack_require__(/*! ../utils */ 15);
var _relation = __webpack_require__(/*! ../mixins/relation */ 69);
var _constant = __webpack_require__(/*! ../utils/constant */ 28);

var _createNamespace = (0, _utils.createNamespace)('index-anchor'),
createComponent = _createNamespace[0],
bem = _createNamespace[1];var _default =

createComponent({
  mixins: [(0, _relation.ChildrenMixin)('vanIndexBar', {
    indexKey: 'childrenIndex' })],

  props: {
    index: [Number, String] },

  data: function data() {
    return {
      top: 0,
      active: false,
      position: 'static' };

  },
  computed: {
    sticky: function sticky() {
      return this.active && this.parent.sticky;
    },
    anchorStyle: function anchorStyle() {
      if (this.sticky) {
        return {
          position: this.position,
          zIndex: "" + this.parent.zIndex,
          transform: "translate3d(0, " + this.top + "px, 0)",
          color: this.parent.highlightColor };

      }
    } },

  mounted: function mounted() {
    this.height = this.$el.offsetHeight;
  },
  methods: {
    scrollIntoView: function scrollIntoView() {
      this.$el.scrollIntoView();
    } },

  render: function render() {
    var _ref;

    var h = arguments[0];
    var sticky = this.sticky;
    return h("div", {
      "style": {
        height: sticky ? this.height + "px" : null } },

    [h("div", {
      "style": this.anchorStyle,
      "class": [bem({
        sticky: sticky }), (
      _ref = {}, _ref[_constant.BORDER_BOTTOM] = sticky, _ref)] },
    [this.slots('default') || this.index])]);
  } });exports.default = _default;

/***/ }),
/* 118 */
/*!*******************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/index-bar/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _utils = __webpack_require__(/*! ../utils */ 15);
var _touch = __webpack_require__(/*! ../mixins/touch */ 31);
var _relation = __webpack_require__(/*! ../mixins/relation */ 69);
var _bindEvent = __webpack_require__(/*! ../mixins/bind-event */ 62);
var _constant = __webpack_require__(/*! ../utils/constant */ 28);
var _scroll = __webpack_require__(/*! ../utils/dom/scroll */ 36);

var _createNamespace = (0, _utils.createNamespace)('index-bar'),
createComponent = _createNamespace[0],
bem = _createNamespace[1];var _default2 =

createComponent({
  mixins: [_touch.TouchMixin, (0, _relation.ParentMixin)('vanIndexBar'), (0, _bindEvent.BindEventMixin)(function (bind) {
    if (!this.scroller) {
      this.scroller = (0, _scroll.getScrollEventTarget)(this.$el);
    }

    bind(this.scroller, 'scroll', this.onScroll);
  })],
  props: {
    sticky: {
      type: Boolean,
      default: true },

    zIndex: {
      type: Number,
      default: 1 },

    highlightColor: {
      type: String,
      default: _constant.GREEN },

    stickyOffsetTop: {
      type: Number,
      default: 0 },

    indexList: {
      type: Array,
      default: function _default() {
        var indexList = [];
        var charCodeOfA = 'A'.charCodeAt(0);

        for (var i = 0; i < 26; i++) {
          indexList.push(String.fromCharCode(charCodeOfA + i));
        }

        return indexList;
      } } },


  data: function data() {
    return {
      activeAnchorIndex: null };

  },
  computed: {
    highlightStyle: function highlightStyle() {
      var highlightColor = this.highlightColor;

      if (highlightColor) {
        /* istanbul ignore else */
        return {
          color: highlightColor };

      }
    } },

  watch: {
    indexList: function indexList() {
      this.$nextTick(this.onScroll);
    } },

  methods: {
    onScroll: function onScroll() {
      var _this = this;

      var scrollTop = (0, _scroll.getScrollTop)(this.scroller);
      var scrollerRect = this.getScrollerRect();
      var rects = this.children.map(function (item) {
        return {
          height: item.height,
          top: _this.getElementTop(item.$el, scrollerRect) };

      });
      var active = this.getActiveAnchorIndex(scrollTop, rects);
      this.activeAnchorIndex = this.indexList[active];

      if (this.sticky) {
        var activeItemTop = 0;
        var isReachEdge = false;

        if (active !== -1) {
          activeItemTop = rects[active].top - scrollTop;
          isReachEdge = activeItemTop <= 0;
        }

        this.children.forEach(function (item, index) {
          if (index === active) {
            item.active = true;
            item.position = isReachEdge ? 'fixed' : 'relative';
            item.top = isReachEdge ? _this.stickyOffsetTop + scrollerRect.top : 0;
          } else if (index === active - 1) {
            item.active = !isReachEdge;
            item.position = 'relative';
            item.top = item.$el.parentElement.offsetHeight - item.height;
          } else {
            item.active = false;
            item.position = 'static';
          }
        });
      }
    },
    getScrollerRect: function getScrollerRect() {
      var scroller = this.scroller;
      var scrollerRect = {
        top: 0,
        left: 0 };


      if (scroller.getBoundingClientRect) {
        scrollerRect = scroller.getBoundingClientRect();
      }

      return scrollerRect;
    },
    getElementTop: function getElementTop(ele, scrollerRect) {
      var scroller = this.scroller;

      if (scroller === window || scroller === document.body) {
        return (0, _scroll.getElementTop)(ele);
      }

      var eleRect = ele.getBoundingClientRect();
      return eleRect.top - scrollerRect.top + (0, _scroll.getScrollTop)(scroller);
    },
    getActiveAnchorIndex: function getActiveAnchorIndex(scrollTop, rects) {
      for (var i = this.children.length - 1; i >= 0; i--) {
        var prevHeight = i > 0 ? rects[i - 1].height : 0;

        if (scrollTop + prevHeight + this.stickyOffsetTop >= rects[i].top) {
          return i;
        }
      }

      return -1;
    },
    onClick: function onClick(event) {
      this.scrollToElement(event.target);
    },
    onTouchMove: function onTouchMove(event) {
      this.touchMove(event);

      if (this.direction === 'vertical') {
        /* istanbul ignore else */
        if (event.cancelable) {
          event.preventDefault();
        }

        var _event$touches$ = event.touches[0],
        clientX = _event$touches$.clientX,
        clientY = _event$touches$.clientY;
        var target = document.elementFromPoint(clientX, clientY);

        if (target) {
          var index = target.dataset.index;
          /* istanbul ignore else */

          if (this.touchActiveIndex !== index) {
            this.touchActiveIndex = index;
            this.scrollToElement(target);
          }
        }
      }
    },
    scrollToElement: function scrollToElement(element) {
      var index = element.dataset.index;

      if (!index) {
        return;
      }

      var match = this.children.filter(function (item) {
        return String(item.index) === index;
      });

      if (match[0]) {
        match[0].scrollIntoView();

        if (this.stickyOffsetTop) {
          (0, _scroll.setRootScrollTop)((0, _scroll.getRootScrollTop)() - this.stickyOffsetTop);
        }

        this.$emit('select', match[0].index);
      }
    },
    onTouchEnd: function onTouchEnd() {
      this.active = null;
    } },

  render: function render() {
    var _this2 = this;

    var h = arguments[0];
    var Indexes = this.indexList.map(function (index) {
      var active = index === _this2.activeAnchorIndex;
      return h("span", {
        "class": bem('index', {
          active: active }),

        "style": active ? _this2.highlightStyle : null,
        "attrs": {
          "data-index": index } },

      [index]);
    });
    return h("div", {
      "class": bem() },
    [h("div", {
      "class": bem('sidebar'),
      "style": {
        zIndex: this.zIndex + 1 },

      "on": {
        "click": this.onClick,
        "touchstart": this.touchStart,
        "touchmove": this.onTouchMove,
        "touchend": this.onTouchEnd,
        "touchcancel": this.onTouchEnd } },

    [Indexes]), this.slots('default')]);
  } });exports.default = _default2;

/***/ }),
/* 119 */
/*!******************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/lazyload/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _vueLazyload = _interopRequireDefault(__webpack_require__(/*! vue-lazyload */ 120));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =
_vueLazyload.default;exports.default = _default;

/***/ }),
/* 120 */
/*!*********************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vue-lazyload/vue-lazyload.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 /*!
               * Vue-Lazyload.js v1.2.3
               * (c) 2018 Awe <hilongjw@gmail.com>
               * Released under the MIT License.
               */
!function (e, t) { true ? module.exports = t() : undefined;}(void 0, function () {"use strict";function e(e) {return e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e);}function t(e) {e = e || {};var t = arguments.length,i = 0;if (1 === t) return e;for (; ++i < t;) {var o = arguments[i];g(e) && (e = o), r(o) && n(e, o);}return e;}function n(e, n) {m(e, n);for (var o in n) {if ("__proto__" !== o && i(n, o)) {var a = n[o];r(a) ? ("undefined" === L(e[o]) && "function" === L(a) && (e[o] = a), e[o] = t(e[o] || {}, a)) : e[o] = a;}}return e;}function r(e) {return "object" === L(e) || "function" === L(e);}function i(e, t) {return Object.prototype.hasOwnProperty.call(e, t);}function o(e, t) {if (e.length) {var n = e.indexOf(t);return n > -1 ? e.splice(n, 1) : void 0;}}function a(e, t) {for (var n = !1, r = 0, i = e.length; r < i; r++) {if (t(e[r])) {n = !0;break;}}return n;}function s(e, t) {if ("IMG" === e.tagName && e.getAttribute("data-srcset")) {var n = e.getAttribute("data-srcset"),r = [],i = e.parentNode,o = i.offsetWidth * t,a = void 0,s = void 0,u = void 0;n = n.trim().split(","), n.map(function (e) {e = e.trim(), a = e.lastIndexOf(" "), -1 === a ? (s = e, u = 999998) : (s = e.substr(0, a), u = parseInt(e.substr(a + 1, e.length - a - 2), 10)), r.push([u, s]);}), r.sort(function (e, t) {if (e[0] < t[0]) return -1;if (e[0] > t[0]) return 1;if (e[0] === t[0]) {if (-1 !== t[1].indexOf(".webp", t[1].length - 5)) return 1;if (-1 !== e[1].indexOf(".webp", e[1].length - 5)) return -1;}return 0;});for (var l = "", d = void 0, c = r.length, h = 0; h < c; h++) {if (d = r[h], d[0] >= o) {l = d[1];break;}}return l;}}function u(e, t) {for (var n = void 0, r = 0, i = e.length; r < i; r++) {if (t(e[r])) {n = e[r];break;}}return n;}function l() {if (!k) return !1;var e = !0,t = document;try {var n = t.createElement("object");n.type = "image/webp", n.style.visibility = "hidden", n.innerHTML = "!", t.body.appendChild(n), e = !n.offsetWidth, t.body.removeChild(n);} catch (t) {e = !1;}return e;}function d(e, t) {var n = null,r = 0;return function () {if (!n) {var i = Date.now() - r,o = this,a = arguments,s = function s() {r = Date.now(), n = !1, e.apply(o, a);};i >= t ? s() : n = setTimeout(s, t);}};}function c(e) {return null !== e && "object" === (void 0 === e ? "undefined" : p(e));}function h(e) {if (!(e instanceof Object)) return [];if (Object.keys) return Object.keys(e);var t = [];for (var n in e) {e.hasOwnProperty(n) && t.push(n);}return t;}function f(e) {for (var t = e.length, n = [], r = 0; r < t; r++) {n.push(e[r]);}return n;}function v() {}var p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {return typeof e;} : function (e) {return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;},b = function b(e, t) {if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");},y = function () {function e(e, t) {for (var n = 0; n < t.length; n++) {var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);}}return function (t, n, r) {return n && e(t.prototype, n), r && e(t, r), t;};}(),g = function g(e) {return null == e || "function" != typeof e && "object" !== (void 0 === e ? "undefined" : p(e));},m = function m(e, t) {if (null === e || void 0 === e) throw new TypeError("expected first argument to be an object.");if (void 0 === t || "undefined" == typeof Symbol) return e;if ("function" != typeof Object.getOwnPropertySymbols) return e;for (var n = Object.prototype.propertyIsEnumerable, r = Object(e), i = arguments.length, o = 0; ++o < i;) {for (var a = Object(arguments[o]), s = Object.getOwnPropertySymbols(a), u = 0; u < s.length; u++) {var l = s[u];n.call(a, l) && (r[l] = a[l]);}}return r;},w = Object.prototype.toString,L = function L(t) {var n = void 0 === t ? "undefined" : p(t);return "undefined" === n ? "undefined" : null === t ? "null" : !0 === t || !1 === t || t instanceof Boolean ? "boolean" : "string" === n || t instanceof String ? "string" : "number" === n || t instanceof Number ? "number" : "function" === n || t instanceof Function ? void 0 !== t.constructor.name && "Generator" === t.constructor.name.slice(0, 9) ? "generatorfunction" : "function" : void 0 !== Array.isArray && Array.isArray(t) ? "array" : t instanceof RegExp ? "regexp" : t instanceof Date ? "date" : (n = w.call(t), "[object RegExp]" === n ? "regexp" : "[object Date]" === n ? "date" : "[object Arguments]" === n ? "arguments" : "[object Error]" === n ? "error" : "[object Promise]" === n ? "promise" : e(t) ? "buffer" : "[object Set]" === n ? "set" : "[object WeakSet]" === n ? "weakset" : "[object Map]" === n ? "map" : "[object WeakMap]" === n ? "weakmap" : "[object Symbol]" === n ? "symbol" : "[object Map Iterator]" === n ? "mapiterator" : "[object Set Iterator]" === n ? "setiterator" : "[object String Iterator]" === n ? "stringiterator" : "[object Array Iterator]" === n ? "arrayiterator" : "[object Int8Array]" === n ? "int8array" : "[object Uint8Array]" === n ? "uint8array" : "[object Uint8ClampedArray]" === n ? "uint8clampedarray" : "[object Int16Array]" === n ? "int16array" : "[object Uint16Array]" === n ? "uint16array" : "[object Int32Array]" === n ? "int32array" : "[object Uint32Array]" === n ? "uint32array" : "[object Float32Array]" === n ? "float32array" : "[object Float64Array]" === n ? "float64array" : "object");},_ = t,k = "undefined" != typeof window,E = k && "IntersectionObserver" in window,A = { event: "event", observer: "observer" },j = function () {function e(e, t) {t = t || { bubbles: !1, cancelable: !1, detail: void 0 };var n = document.createEvent("CustomEvent");return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n;}if (k) return "function" == typeof window.CustomEvent ? window.CustomEvent : (e.prototype = window.Event.prototype, e);}(),z = function z() {var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;return k ? window.devicePixelRatio || e : e;},T = function () {if (k) {var e = !1;try {var t = Object.defineProperty({}, "passive", { get: function get() {e = !0;} });window.addEventListener("test", null, t);} catch (e) {}return e;}}(),O = { on: function on(e, t, n) {var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];T ? e.addEventListener(t, n, { capture: r, passive: !0 }) : e.addEventListener(t, n, r);}, off: function off(e, t, n) {var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];e.removeEventListener(t, n, r);} },I = function I(e, t, n) {var r = new Image();r.src = e.src, r.onload = function () {t({ naturalHeight: r.naturalHeight, naturalWidth: r.naturalWidth, src: r.src });}, r.onerror = function (e) {n(e);};},x = function x(e, t) {return "undefined" != typeof getComputedStyle ? getComputedStyle(e, null).getPropertyValue(t) : e.style[t];},S = function S(e) {return x(e, "overflow") + x(e, "overflow-y") + x(e, "overflow-x");},$ = function $(e) {if (k) {if (!(e instanceof HTMLElement)) return window;for (var t = e; t && t !== document.body && t !== document.documentElement && t.parentNode;) {if (/(scroll|auto)/.test(S(t))) return t;t = t.parentNode;}return window;}},H = {},Q = function () {function e(t) {var n = t.el,r = t.src,i = t.error,o = t.loading,a = t.bindType,s = t.$parent,u = t.options,l = t.elRenderer;b(this, e), this.el = n, this.src = r, this.error = i, this.loading = o, this.bindType = a, this.attempt = 0, this.naturalHeight = 0, this.naturalWidth = 0, this.options = u, this.rect = null, this.$parent = s, this.elRenderer = l, this.performanceData = { init: Date.now(), loadStart: 0, loadEnd: 0 }, this.filter(), this.initState(), this.render("loading", !1);}return y(e, [{ key: "initState", value: function value() {this.el.dataset.src = this.src, this.state = { error: !1, loaded: !1, rendered: !1 };} }, { key: "record", value: function value(e) {this.performanceData[e] = Date.now();} }, { key: "update", value: function value(e) {var t = e.src,n = e.loading,r = e.error,i = this.src;this.src = t, this.loading = n, this.error = r, this.filter(), i !== this.src && (this.attempt = 0, this.initState());} }, { key: "getRect", value: function value() {this.rect = this.el.getBoundingClientRect();} }, { key: "checkInView", value: function value() {return this.getRect(), this.rect.top < window.innerHeight * this.options.preLoad && this.rect.bottom > this.options.preLoadTop && this.rect.left < window.innerWidth * this.options.preLoad && this.rect.right > 0;} }, { key: "filter", value: function value() {var e = this;h(this.options.filter).map(function (t) {e.options.filter[t](e, e.options);});} }, { key: "renderLoading", value: function value(e) {var t = this;I({ src: this.loading }, function (n) {t.render("loading", !1), e();}, function () {e(), t.options.silent || console.warn("VueLazyload log: load failed with loading image(" + t.loading + ")");});} }, { key: "load", value: function value() {var e = this,t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v;return this.attempt > this.options.attempt - 1 && this.state.error ? (this.options.silent || console.log("VueLazyload log: " + this.src + " tried too more than " + this.options.attempt + " times"), void t()) : this.state.loaded || H[this.src] ? (this.state.loaded = !0, t(), this.render("loaded", !0)) : void this.renderLoading(function () {e.attempt++, e.record("loadStart"), I({ src: e.src }, function (n) {e.naturalHeight = n.naturalHeight, e.naturalWidth = n.naturalWidth, e.state.loaded = !0, e.state.error = !1, e.record("loadEnd"), e.render("loaded", !1), H[e.src] = 1, t();}, function (t) {!e.options.silent && console.error(t), e.state.error = !0, e.state.loaded = !1, e.render("error", !1);});});} }, { key: "render", value: function value(e, t) {this.elRenderer(this, e, t);} }, { key: "performance", value: function value() {var e = "loading",t = 0;return this.state.loaded && (e = "loaded", t = (this.performanceData.loadEnd - this.performanceData.loadStart) / 1e3), this.state.error && (e = "error"), { src: this.src, state: e, time: t };} }, { key: "destroy", value: function value() {this.el = null, this.src = null, this.error = null, this.loading = null, this.bindType = null, this.attempt = 0;} }]), e;}(),C = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",R = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"],W = { rootMargin: "0px", threshold: 0 },D = function D(e) {return function () {function t(e) {var n = e.preLoad,r = e.error,i = e.throttleWait,o = e.preLoadTop,a = e.dispatchEvent,s = e.loading,u = e.attempt,c = e.silent,h = void 0 === c || c,f = e.scale,v = e.listenEvents,p = (e.hasbind, e.filter),y = e.adapter,g = e.observer,m = e.observerOptions;b(this, t), this.version = "1.2.3", this.mode = A.event, this.ListenerQueue = [], this.TargetIndex = 0, this.TargetQueue = [], this.options = { silent: h, dispatchEvent: !!a, throttleWait: i || 200, preLoad: n || 1.3, preLoadTop: o || 0, error: r || C, loading: s || C, attempt: u || 3, scale: f || z(f), ListenEvents: v || R, hasbind: !1, supportWebp: l(), filter: p || {}, adapter: y || {}, observer: !!g, observerOptions: m || W }, this._initEvent(), this.lazyLoadHandler = d(this._lazyLoadHandler.bind(this), this.options.throttleWait), this.setMode(this.options.observer ? A.observer : A.event);}return y(t, [{ key: "config", value: function value() {var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};_(this.options, e);} }, { key: "performance", value: function value() {var e = [];return this.ListenerQueue.map(function (t) {e.push(t.performance());}), e;} }, { key: "addLazyBox", value: function value(e) {this.ListenerQueue.push(e), k && (this._addListenerTarget(window), this._observer && this._observer.observe(e.el), e.$el && e.$el.parentNode && this._addListenerTarget(e.$el.parentNode));} }, { key: "add", value: function value(t, n, r) {var i = this;if (a(this.ListenerQueue, function (e) {return e.el === t;})) return this.update(t, n), e.nextTick(this.lazyLoadHandler);var o = this._valueFormatter(n.value),u = o.src,l = o.loading,d = o.error;e.nextTick(function () {u = s(t, i.options.scale) || u, i._observer && i._observer.observe(t);var o = Object.keys(n.modifiers)[0],a = void 0;o && (a = r.context.$refs[o], a = a ? a.$el || a : document.getElementById(o)), a || (a = $(t));var c = new Q({ bindType: n.arg, $parent: a, el: t, loading: l, error: d, src: u, elRenderer: i._elRenderer.bind(i), options: i.options });i.ListenerQueue.push(c), k && (i._addListenerTarget(window), i._addListenerTarget(a)), i.lazyLoadHandler(), e.nextTick(function () {return i.lazyLoadHandler();});});} }, { key: "update", value: function value(t, n) {var r = this,i = this._valueFormatter(n.value),o = i.src,a = i.loading,l = i.error;o = s(t, this.options.scale) || o;var d = u(this.ListenerQueue, function (e) {return e.el === t;});d && d.update({ src: o, loading: a, error: l }), this._observer && (this._observer.unobserve(t), this._observer.observe(t)), this.lazyLoadHandler(), e.nextTick(function () {return r.lazyLoadHandler();});} }, { key: "remove", value: function value(e) {if (e) {this._observer && this._observer.unobserve(e);var t = u(this.ListenerQueue, function (t) {return t.el === e;});t && (this._removeListenerTarget(t.$parent), this._removeListenerTarget(window), o(this.ListenerQueue, t) && t.destroy());}} }, { key: "removeComponent", value: function value(e) {e && (o(this.ListenerQueue, e), this._observer && this._observer.unobserve(e.el), e.$parent && e.$el.parentNode && this._removeListenerTarget(e.$el.parentNode), this._removeListenerTarget(window));} }, { key: "setMode", value: function value(e) {var t = this;E || e !== A.observer || (e = A.event), this.mode = e, e === A.event ? (this._observer && (this.ListenerQueue.forEach(function (e) {t._observer.unobserve(e.el);}), this._observer = null), this.TargetQueue.forEach(function (e) {t._initListen(e.el, !0);})) : (this.TargetQueue.forEach(function (e) {t._initListen(e.el, !1);}), this._initIntersectionObserver());} }, { key: "_addListenerTarget", value: function value(e) {if (e) {var t = u(this.TargetQueue, function (t) {return t.el === e;});return t ? t.childrenCount++ : (t = { el: e, id: ++this.TargetIndex, childrenCount: 1, listened: !0 }, this.mode === A.event && this._initListen(t.el, !0), this.TargetQueue.push(t)), this.TargetIndex;}} }, { key: "_removeListenerTarget", value: function value(e) {var t = this;this.TargetQueue.forEach(function (n, r) {n.el === e && (--n.childrenCount || (t._initListen(n.el, !1), t.TargetQueue.splice(r, 1), n = null));});} }, { key: "_initListen", value: function value(e, t) {var n = this;this.options.ListenEvents.forEach(function (r) {return O[t ? "on" : "off"](e, r, n.lazyLoadHandler);});} }, { key: "_initEvent", value: function value() {var e = this;this.Event = { listeners: { loading: [], loaded: [], error: [] } }, this.$on = function (t, n) {e.Event.listeners[t].push(n);}, this.$once = function (t, n) {function r() {i.$off(t, r), n.apply(i, arguments);}var i = e;e.$on(t, r);}, this.$off = function (t, n) {if (!n) return void (e.Event.listeners[t] = []);o(e.Event.listeners[t], n);}, this.$emit = function (t, n, r) {e.Event.listeners[t].forEach(function (e) {return e(n, r);});};} }, { key: "_lazyLoadHandler", value: function value() {var e = this,t = !1;this.ListenerQueue.forEach(function (n, r) {n.state.loaded || (t = n.checkInView()) && n.load(function () {!n.error && n.loaded && e.ListenerQueue.splice(r, 1);});});} }, { key: "_initIntersectionObserver", value: function value() {var e = this;E && (this._observer = new IntersectionObserver(this._observerHandler.bind(this), this.options.observerOptions), this.ListenerQueue.length && this.ListenerQueue.forEach(function (t) {e._observer.observe(t.el);}));} }, { key: "_observerHandler", value: function value(e, t) {var n = this;e.forEach(function (e) {e.isIntersecting && n.ListenerQueue.forEach(function (t) {if (t.el === e.target) {if (t.state.loaded) return n._observer.unobserve(t.el);t.load();}});});} }, { key: "_elRenderer", value: function value(e, t, n) {if (e.el) {var r = e.el,i = e.bindType,o = void 0;switch (t) {case "loading":o = e.loading;break;case "error":o = e.error;break;default:o = e.src;}if (i ? r.style[i] = 'url("' + o + '")' : r.getAttribute("src") !== o && r.setAttribute("src", o), r.setAttribute("lazy", t), this.$emit(t, e, n), this.options.adapter[t] && this.options.adapter[t](e, this.options), this.options.dispatchEvent) {var a = new j(t, { detail: e });r.dispatchEvent(a);}}} }, { key: "_valueFormatter", value: function value(e) {var t = e,n = this.options.loading,r = this.options.error;return c(e) && (e.src || this.options.silent || console.error("Vue Lazyload warning: miss src with " + e), t = e.src, n = e.loading || this.options.loading, r = e.error || this.options.error), { src: t, loading: n, error: r };} }]), t;}();},B = function B(e) {return { props: { tag: { type: String, default: "div" } }, render: function render(e) {return !1 === this.show ? e(this.tag) : e(this.tag, null, this.$slots.default);}, data: function data() {return { el: null, state: { loaded: !1 }, rect: {}, show: !1 };}, mounted: function mounted() {this.el = this.$el, e.addLazyBox(this), e.lazyLoadHandler();}, beforeDestroy: function beforeDestroy() {e.removeComponent(this);}, methods: { getRect: function getRect() {this.rect = this.$el.getBoundingClientRect();}, checkInView: function checkInView() {return this.getRect(), k && this.rect.top < window.innerHeight * e.options.preLoad && this.rect.bottom > 0 && this.rect.left < window.innerWidth * e.options.preLoad && this.rect.right > 0;}, load: function load() {this.show = !0, this.state.loaded = !0, this.$emit("show", this);} } };},V = function () {function e(t) {var n = t.lazy;b(this, e), this.lazy = n, n.lazyContainerMananger = this, this._queue = [];}return y(e, [{ key: "bind", value: function value(e, t, n) {var r = new N({ el: e, binding: t, vnode: n, lazy: this.lazy });this._queue.push(r);} }, { key: "update", value: function value(e, t, n) {var r = u(this._queue, function (t) {return t.el === e;});r && r.update({ el: e, binding: t, vnode: n });} }, { key: "unbind", value: function value(e, t, n) {var r = u(this._queue, function (t) {return t.el === e;});r && (r.clear(), o(this._queue, r));} }]), e;}(),M = { selector: "img" },N = function () {function e(t) {var n = t.el,r = t.binding,i = t.vnode,o = t.lazy;b(this, e), this.el = null, this.vnode = i, this.binding = r, this.options = {}, this.lazy = o, this._queue = [], this.update({ el: n, binding: r });}return y(e, [{ key: "update", value: function value(e) {var t = this,n = e.el,r = e.binding;this.el = n, this.options = _({}, M, r.value), this.getImgs().forEach(function (e) {t.lazy.add(e, _({}, t.binding, { value: { src: e.dataset.src, error: e.dataset.error, loading: e.dataset.loading } }), t.vnode);});} }, { key: "getImgs", value: function value() {return f(this.el.querySelectorAll(this.options.selector));} }, { key: "clear", value: function value() {var e = this;this.getImgs().forEach(function (t) {return e.lazy.remove(t);}), this.vnode = null, this.binding = null, this.lazy = null;} }]), e;}();return { install: function install(e) {var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},n = D(e),r = new n(t),i = new V({ lazy: r }),o = "2" === e.version.split(".")[0];e.prototype.$Lazyload = r, t.lazyComponent && e.component("lazy-component", B(r)), o ? (e.directive("lazy", { bind: r.add.bind(r), update: r.update.bind(r), componentUpdated: r.lazyLoadHandler.bind(r), unbind: r.remove.bind(r) }), e.directive("lazy-container", { bind: i.bind.bind(i), update: i.update.bind(i), unbind: i.unbind.bind(i) })) : (e.directive("lazy", { bind: r.lazyLoadHandler.bind(r), update: function update(e, t) {_(this.vm.$refs, this.vm.$els), r.add(this.el, { modifiers: this.modifiers || {}, arg: this.arg, value: e, oldValue: t }, { context: this.vm });}, unbind: function unbind() {r.remove(this.el);} }), e.directive("lazy-container", { update: function update(e, t) {i.update(this.el, { modifiers: this.modifiers || {}, arg: this.arg, value: e, oldValue: t }, { context: this.vm });}, unbind: function unbind() {i.unbind(this.el);} }));} };});

/***/ }),
/* 121 */
/*!**************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/list/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _utils = __webpack_require__(/*! ../utils */ 15);
var _style = __webpack_require__(/*! ../utils/dom/style */ 94);
var _bindEvent = __webpack_require__(/*! ../mixins/bind-event */ 62);
var _scroll = __webpack_require__(/*! ../utils/dom/scroll */ 36);
var _loading = _interopRequireDefault(__webpack_require__(/*! ../loading */ 41));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var _createNamespace = (0, _utils.createNamespace)('list'),
createComponent = _createNamespace[0],
bem = _createNamespace[1],
t = _createNamespace[2];var _default =

createComponent({
  mixins: [(0, _bindEvent.BindEventMixin)(function (bind) {
    if (!this.scroller) {
      this.scroller = (0, _scroll.getScrollEventTarget)(this.$el);
    }

    bind(this.scroller, 'scroll', this.check);
  })],
  model: {
    prop: 'loading' },

  props: {
    error: Boolean,
    loading: Boolean,
    finished: Boolean,
    errorText: String,
    loadingText: String,
    finishedText: String,
    immediateCheck: {
      type: Boolean,
      default: true },

    offset: {
      type: Number,
      default: 300 },

    direction: {
      type: String,
      default: 'down' } },


  mounted: function mounted() {
    if (this.immediateCheck) {
      this.check();
    }
  },
  watch: {
    loading: 'check',
    finished: 'check' },

  methods: {
    check: function check() {
      var _this = this;

      this.$nextTick(function () {
        if (_this.loading || _this.finished || _this.error) {
          return;
        }

        var el = _this.$el,
        scroller = _this.scroller,
        offset = _this.offset,
        direction = _this.direction;
        var scrollerRect;

        if (scroller.getBoundingClientRect) {
          scrollerRect = scroller.getBoundingClientRect();
        } else {
          scrollerRect = {
            top: 0,
            bottom: scroller.innerHeight };

        }

        var scrollerHeight = scrollerRect.bottom - scrollerRect.top;
        /* istanbul ignore next */

        if (!scrollerHeight || (0, _style.isHidden)(el)) {
          return false;
        }

        var isReachEdge = false;

        var placeholderRect = _this.$refs.placeholder.getBoundingClientRect();

        if (direction === 'up') {
          isReachEdge = placeholderRect.top - scrollerRect.top <= offset;
        } else {
          isReachEdge = placeholderRect.bottom - scrollerRect.bottom <= offset;
        }

        if (isReachEdge) {
          _this.$emit('input', true);

          _this.$emit('load');
        }
      });
    },
    clickErrorText: function clickErrorText() {
      this.$emit('update:error', false);
      this.check();
    } },

  render: function render() {
    var h = arguments[0];
    var Placeholder = h("div", {
      "ref": "placeholder",
      "class": bem('placeholder') });

    return h("div", {
      "class": bem(),
      "attrs": {
        "role": "feed",
        "aria-busy": this.loading } },

    [this.direction === 'down' ? this.slots() : Placeholder, this.loading && h("div", {
      "class": bem('loading'),
      "key": "loading" },
    [this.slots('loading') || h(_loading.default, {
      "attrs": {
        "size": "16" } },

    [this.loadingText || t('loading')])]), this.finished && this.finishedText && h("div", {
      "class": bem('finished-text') },
    [this.finishedText]), this.error && this.errorText && h("div", {
      "on": {
        "click": this.clickErrorText },

      "class": bem('error-text') },
    [this.errorText]), this.direction === 'up' ? this.slots() : Placeholder]);
  } });exports.default = _default;

/***/ }),
/* 122 */
/*!*****************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/nav-bar/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _babelHelperVueJsxMergeProps = _interopRequireDefault(__webpack_require__(/*! @vue/babel-helper-vue-jsx-merge-props */ 14));
var _utils = __webpack_require__(/*! ../utils */ 15);
var _functional = __webpack_require__(/*! ../utils/functional */ 27);
var _constant = __webpack_require__(/*! ../utils/constant */ 28);
var _icon = _interopRequireDefault(__webpack_require__(/*! ../icon */ 37));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // Types

var _createNamespace = (0, _utils.createNamespace)('nav-bar'),
createComponent = _createNamespace[0],
bem = _createNamespace[1];

function NavBar(h, props, slots, ctx) {
  var _ref;

  return h("div", (0, _babelHelperVueJsxMergeProps.default)([{
    "class": [bem({
      fixed: props.fixed }), (
    _ref = {}, _ref[_constant.BORDER_BOTTOM] = props.border, _ref)],
    "style": {
      zIndex: props.zIndex } },

  (0, _functional.inherit)(ctx)]), [h("div", {
    "class": bem('left'),
    "on": {
      "click": ctx.listeners['click-left'] || _utils.noop } },

  [slots.left ? slots.left() : [props.leftArrow && h(_icon.default, {
    "class": bem('arrow'),
    "attrs": {
      "name": "arrow-left" } }),

  props.leftText && h("span", {
    "class": bem('text') },
  [props.leftText])]]), h("div", {
    "class": [bem('title'), 'van-ellipsis'] },
  [slots.title ? slots.title() : props.title]), h("div", {
    "class": bem('right'),
    "on": {
      "click": ctx.listeners['click-right'] || _utils.noop } },

  [slots.right ? slots.right() : props.rightText && h("span", {
    "class": bem('text') },
  [props.rightText])])]);
}

NavBar.props = {
  title: String,
  fixed: Boolean,
  leftText: String,
  rightText: String,
  leftArrow: Boolean,
  border: {
    type: Boolean,
    default: true },

  zIndex: {
    type: Number,
    default: 1 } };var _default =


createComponent(NavBar);exports.default = _default;

/***/ }),
/* 123 */
/*!********************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/notice-bar/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _utils = __webpack_require__(/*! ../utils */ 15);
var _icon = _interopRequireDefault(__webpack_require__(/*! ../icon */ 37));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var _createNamespace = (0, _utils.createNamespace)('notice-bar'),
createComponent = _createNamespace[0],
bem = _createNamespace[1];var _default =

createComponent({
  props: {
    text: String,
    mode: String,
    color: String,
    leftIcon: String,
    wrapable: Boolean,
    background: String,
    delay: {
      type: [Number, String],
      default: 1 },

    scrollable: {
      type: Boolean,
      default: true },

    speed: {
      type: Number,
      default: 50 } },


  data: function data() {
    return {
      wrapWidth: 0,
      firstRound: true,
      duration: 0,
      offsetWidth: 0,
      showNoticeBar: true,
      animationClass: '' };

  },
  watch: {
    text: {
      handler: function handler() {
        var _this = this;

        this.$nextTick(function () {
          var _this$$refs = _this.$refs,
          wrap = _this$$refs.wrap,
          content = _this$$refs.content;

          if (!wrap || !content) {
            return;
          }

          var wrapWidth = wrap.getBoundingClientRect().width;
          var offsetWidth = content.getBoundingClientRect().width;

          if (_this.scrollable && offsetWidth > wrapWidth) {
            _this.wrapWidth = wrapWidth;
            _this.offsetWidth = offsetWidth;
            _this.duration = offsetWidth / _this.speed;
            _this.animationClass = bem('play');
          }
        });
      },
      immediate: true } },


  methods: {
    onClickIcon: function onClickIcon(event) {
      if (this.mode === 'closeable') {
        this.showNoticeBar = false;
        this.$emit('close', event);
      }
    },
    onAnimationEnd: function onAnimationEnd() {
      var _this2 = this;

      this.firstRound = false;
      this.$nextTick(function () {
        _this2.duration = (_this2.offsetWidth + _this2.wrapWidth) / _this2.speed;
        _this2.animationClass = bem('play--infinite');
      });
    } },

  render: function render() {
    var _this3 = this;

    var h = arguments[0];
    var slots = this.slots,
    mode = this.mode,
    leftIcon = this.leftIcon,
    onClickIcon = this.onClickIcon;
    var barStyle = {
      color: this.color,
      background: this.background };

    var contentStyle = {
      paddingLeft: this.firstRound ? 0 : this.wrapWidth + 'px',
      animationDelay: (this.firstRound ? this.delay : 0) + 's',
      animationDuration: this.duration + 's' };


    function LeftIcon() {
      var slot = slots('left-icon');

      if (slot) {
        return slot;
      }

      if (leftIcon) {
        return h(_icon.default, {
          "class": bem('left-icon'),
          "attrs": {
            "name": leftIcon } });


      }
    }

    function RightIcon() {
      var slot = slots('right-icon');

      if (slot) {
        return slot;
      }

      var iconName = mode === 'closeable' ? 'cross' : mode === 'link' ? 'arrow' : '';

      if (iconName) {
        return h(_icon.default, {
          "class": bem('right-icon'),
          "attrs": {
            "name": iconName },

          "on": {
            "click": onClickIcon } });


      }
    }

    return h("div", {
      "attrs": {
        "role": "alert" },

      "directives": [{
        name: "show",
        value: this.showNoticeBar }],

      "class": bem({
        wrapable: this.wrapable }),

      "style": barStyle,
      "on": {
        "click": function click(event) {
          _this3.$emit('click', event);
        } } },

    [LeftIcon(), h("div", {
      "ref": "wrap",
      "class": bem('wrap'),
      "attrs": {
        "role": "marquee" } },

    [h("div", {
      "ref": "content",
      "class": [bem('content'), this.animationClass, {
        'van-ellipsis': !this.scrollable && !this.wrapable }],

      "style": contentStyle,
      "on": {
        "animationend": this.onAnimationEnd,
        "webkitAnimationEnd": this.onAnimationEnd } },

    [this.slots() || this.text])]), RightIcon()]);
  } });exports.default = _default;

/***/ }),
/* 124 */
/*!****************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/notify/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/esm/extends */ 13));
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _Notify = _interopRequireDefault(__webpack_require__(/*! ./Notify */ 125));
var _constant = __webpack_require__(/*! ../utils/constant */ 28);
var _utils = __webpack_require__(/*! ../utils */ 15);
var _functional = __webpack_require__(/*! ../utils/functional */ 27);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
var timer;
var instance;

function parseOptions(message) {
  return (0, _utils.isObj)(message) ? message : {
    message: message };

}

function Notify(options) {
  /* istanbul ignore if */
  if (_utils.isServer) {
    return;
  }

  if (!instance) {
    instance = (0, _functional.mount)(_Notify.default, {
      on: {
        click: function click(event) {
          if (instance.onClick) {
            instance.onClick(event);
          }
        },
        close: function close() {
          if (instance.onClose) {
            instance.onClose();
          }
        },
        opened: function opened() {
          if (instance.onOpened) {
            instance.onOpened();
          }
        } } });


  }

  options = (0, _extends2.default)({}, Notify.currentOptions, {}, parseOptions(options));

  (0, _extends2.default)(instance, options);

  clearTimeout(timer);

  if (options.duration && options.duration > 0) {
    timer = setTimeout(Notify.clear, options.duration);
  }

  return instance;
}

function defaultOptions() {
  return {
    type: 'danger',
    value: true,
    message: '',
    color: _constant.WHITE,
    background: undefined,
    duration: 3000,
    className: '',
    onClose: null,
    onClick: null,
    onOpened: null };

}

Notify.clear = function () {
  if (instance) {
    instance.value = false;
  }
};

Notify.currentOptions = defaultOptions();

Notify.setDefaultOptions = function (options) {
  (0, _extends2.default)(Notify.currentOptions, options);
};

Notify.resetDefaultOptions = function () {
  Notify.currentOptions = defaultOptions();
};

Notify.install = function () {
  _vue.default.use(_Notify.default);
};

_vue.default.prototype.$notify = Notify;var _default =
Notify;exports.default = _default;

/***/ }),
/* 125 */
/*!*****************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/notify/Notify.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/esm/extends */ 13));
var _babelHelperVueJsxMergeProps = _interopRequireDefault(__webpack_require__(/*! @vue/babel-helper-vue-jsx-merge-props */ 14));
var _utils = __webpack_require__(/*! ../utils */ 15);
var _constant = __webpack_require__(/*! ../utils/constant */ 28);
var _functional = __webpack_require__(/*! ../utils/functional */ 27);
var _popup = __webpack_require__(/*! ../mixins/popup */ 29);
var _popup2 = _interopRequireDefault(__webpack_require__(/*! ../popup */ 40));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // Types

var _createNamespace = (0, _utils.createNamespace)('notify'),
createComponent = _createNamespace[0],
bem = _createNamespace[1];

function Notify(h, props, slots, ctx) {
  var style = {
    color: props.color,
    background: props.background };

  return h(_popup2.default, (0, _babelHelperVueJsxMergeProps.default)([{
    "attrs": {
      "value": props.value,
      "position": "top",
      "overlay": false,
      "lockScroll": false },

    "style": style,
    "class": [bem([props.type]), props.className] },
  (0, _functional.inherit)(ctx, true)]), [props.message]);
}

Notify.props = (0, _extends2.default)({}, _popup.PopupMixin.props, {
  background: String,
  className: null,
  message: [Number, String],
  getContainer: [String, Function],
  type: {
    type: String,
    default: 'danger' },

  color: {
    type: String,
    default: _constant.WHITE },

  duration: {
    type: Number,
    default: 3000 } });var _default =


createComponent(Notify);exports.default = _default;

/***/ }),
/* 126 */
/*!*************************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/number-keyboard/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _utils = __webpack_require__(/*! ../utils */ 15);
var _event = __webpack_require__(/*! ../utils/dom/event */ 33);
var _constant = __webpack_require__(/*! ../utils/constant */ 28);
var _bindEvent = __webpack_require__(/*! ../mixins/bind-event */ 62);
var _Key = _interopRequireDefault(__webpack_require__(/*! ./Key */ 127));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var _createNamespace = (0, _utils.createNamespace)('number-keyboard'),
createComponent = _createNamespace[0],
bem = _createNamespace[1],
t = _createNamespace[2];

var CLOSE_KEY_THEME = ['blue', 'big'];
var DELETE_KEY_THEME = ['delete', 'big', 'gray'];var _default =
createComponent({
  mixins: [(0, _bindEvent.BindEventMixin)(function (bind) {
    if (this.hideOnClickOutside) {
      bind(document.body, 'touchstart', this.onBlur);
    }
  })],
  model: {
    event: 'update:value' },

  props: {
    show: Boolean,
    title: String,
    closeButtonText: String,
    deleteButtonText: String,
    safeAreaInsetBottom: Boolean,
    theme: {
      type: String,
      default: 'default' },

    value: {
      type: String,
      default: '' },

    extraKey: {
      type: String,
      default: '' },

    maxlength: {
      type: [Number, String],
      default: Number.MAX_VALUE },

    zIndex: {
      type: Number,
      default: 100 },

    transition: {
      type: Boolean,
      default: true },

    showDeleteKey: {
      type: Boolean,
      default: true },

    hideOnClickOutside: {
      type: Boolean,
      default: true } },


  watch: {
    show: function show() {
      if (!this.transition) {
        this.$emit(this.show ? 'show' : 'hide');
      }
    } },

  computed: {
    keys: function keys() {
      var keys = [];

      for (var i = 1; i <= 9; i++) {
        keys.push({
          text: i });

      }

      switch (this.theme) {
        case 'default':
          keys.push({
            text: this.extraKey,
            theme: ['gray'] },
          {
            text: 0 },
          {
            text: this.deleteText,
            theme: ['gray'],
            type: 'delete' });

          break;

        case 'custom':
          keys.push({
            text: 0,
            theme: ['middle'] },
          {
            text: this.extraKey });

          break;}


      return keys;
    },
    deleteText: function deleteText() {
      return this.deleteButtonText || t('delete');
    } },

  methods: {
    onBlur: function onBlur() {
      this.$emit('blur');
    },
    onClose: function onClose() {
      this.$emit('close');
      this.onBlur();
    },
    onAnimationEnd: function onAnimationEnd() {
      this.$emit(this.show ? 'show' : 'hide');
    },
    onPress: function onPress(text, type) {
      if (text === '') {
        return;
      }

      var value = this.value;

      if (type === 'delete') {
        this.$emit('delete');
        this.$emit('update:value', value.slice(0, value.length - 1));
      } else if (type === 'close') {
        this.onClose();
      } else if (value.length < this.maxlength) {
        this.$emit('input', text);
        this.$emit('update:value', value + text);
      }
    } },

  render: function render() {
    var _this = this;

    var h = arguments[0];
    var title = this.title,
    theme = this.theme,
    onPress = this.onPress,
    closeButtonText = this.closeButtonText;
    var titleLeftSlot = this.slots('title-left');
    var showTitleClose = closeButtonText && theme === 'default';
    var showTitle = title || showTitleClose || titleLeftSlot;
    var Title = showTitle && h("div", {
      "class": [bem('title'), _constant.BORDER_TOP] },
    [titleLeftSlot && h("span", {
      "class": bem('title-left') },
    [titleLeftSlot]), title && h("span", [title]), showTitleClose && h("span", {
      "attrs": {
        "role": "button",
        "tabindex": "0" },

      "class": bem('close'),
      "on": {
        "click": this.onClose } },

    [closeButtonText])]);
    var Keys = this.keys.map(function (key) {
      return h(_Key.default, {
        "key": key.text,
        "attrs": {
          "text": key.text,
          "type": key.type,
          "theme": key.theme },

        "on": {
          "press": onPress } },

      [key.type === 'delete' && _this.slots('delete')]);
    });
    var Sidebar = theme === 'custom' && h("div", {
      "class": bem('sidebar') },
    [h(_Key.default, {
      "attrs": {
        "text": this.deleteText,
        "type": "delete",
        "theme": DELETE_KEY_THEME },

      "on": {
        "press": onPress } },

    [this.slots('delete')]), h(_Key.default, {
      "attrs": {
        "text": closeButtonText,
        "type": "close",
        "theme": CLOSE_KEY_THEME },

      "on": {
        "press": onPress } })]);


    return h("transition", {
      "attrs": {
        "name": this.transition ? 'van-slide-up' : '' } },

    [h("div", {
      "directives": [{
        name: "show",
        value: this.show }],

      "style": {
        zIndex: this.zIndex },

      "class": bem([theme, {
        'safe-area-inset-bottom': this.safeAreaInsetBottom }]),

      "on": {
        "touchstart": _event.stopPropagation,
        "animationend": this.onAnimationEnd,
        "webkitAnimationEnd": this.onAnimationEnd } },

    [Title, h("div", {
      "class": bem('body') },
    [Keys]), Sidebar])]);
  } });exports.default = _default;

/***/ }),
/* 127 */
/*!***********************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/number-keyboard/Key.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _utils = __webpack_require__(/*! ../utils */ 15);
var _touch = __webpack_require__(/*! ../mixins/touch */ 31);
var _constant = __webpack_require__(/*! ../utils/constant */ 28);

var _createNamespace = (0, _utils.createNamespace)('key'),
createComponent = _createNamespace[0],
bem = _createNamespace[1];var _default2 =

createComponent({
  mixins: [_touch.TouchMixin],
  props: {
    type: String,
    text: [Number, String],
    theme: {
      type: Array,
      default: function _default() {
        return [];
      } } },


  data: function data() {
    return {
      active: false };

  },
  computed: {
    className: function className() {
      var classNames = this.theme.slice(0);

      if (this.active) {
        classNames.push('active');
      }

      if (this.type) {
        classNames.push(this.type);
      }

      return bem(classNames);
    } },

  methods: {
    onTouchStart: function onTouchStart(event) {
      this.touchStart(event);
      this.active = true;
    },
    onTouchMove: function onTouchMove(event) {
      this.touchMove(event);

      if (this.direction) {
        this.active = false;
      }
    },
    onTouchEnd: function onTouchEnd() {
      if (this.active) {
        this.active = false;
        this.$emit('press', this.text, this.type);
      }
    } },

  render: function render() {
    var h = arguments[0];
    return h("i", {
      "attrs": {
        "role": "button",
        "tabindex": "0" },

      "class": [_constant.BORDER, this.className],
      "on": {
        "touchstart": this.onTouchStart,
        "touchmove": this.onTouchMove,
        "touchend": this.onTouchEnd,
        "touchcancel": this.onTouchEnd } },

    [this.slots('default') || this.text]);
  } });exports.default = _default2;

/***/ }),
/* 128 */
/*!********************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/pagination/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _utils = __webpack_require__(/*! ../utils */ 15);
var _constant = __webpack_require__(/*! ../utils/constant */ 28);

var _createNamespace = (0, _utils.createNamespace)('pagination'),
createComponent = _createNamespace[0],
bem = _createNamespace[1],
t = _createNamespace[2];

function makePage(number, text, active) {
  return {
    number: number,
    text: text,
    active: active };

}var _default =

createComponent({
  props: {
    prevText: String,
    nextText: String,
    forceEllipses: Boolean,
    value: {
      type: Number,
      default: 0 },

    pageCount: {
      type: Number,
      default: 0 },

    totalItems: {
      type: Number,
      default: 0 },

    mode: {
      type: String,
      default: 'multi' },

    itemsPerPage: {
      type: Number,
      default: 10 },

    showPageSize: {
      type: Number,
      default: 5 } },


  computed: {
    count: function count() {
      var count = this.pageCount || Math.ceil(this.totalItems / this.itemsPerPage);
      return Math.max(1, count);
    },
    pages: function pages() {
      var pages = [];
      var pageCount = this.count;

      if (this.mode !== 'multi') {
        return pages;
      } // Default page limits


      var startPage = 1;
      var endPage = pageCount;
      var isMaxSized = this.showPageSize !== undefined && this.showPageSize < pageCount; // recompute if showPageSize

      if (isMaxSized) {
        // Current page is displayed in the middle of the visible ones
        startPage = Math.max(this.value - Math.floor(this.showPageSize / 2), 1);
        endPage = startPage + this.showPageSize - 1; // Adjust if limit is exceeded

        if (endPage > pageCount) {
          endPage = pageCount;
          startPage = endPage - this.showPageSize + 1;
        }
      } // Add page number links


      for (var number = startPage; number <= endPage; number++) {
        var page = makePage(number, number, number === this.value);
        pages.push(page);
      } // Add links to move between page sets


      if (isMaxSized && this.showPageSize > 0 && this.forceEllipses) {
        if (startPage > 1) {
          var previousPageSet = makePage(startPage - 1, '...', false);
          pages.unshift(previousPageSet);
        }

        if (endPage < pageCount) {
          var nextPageSet = makePage(endPage + 1, '...', false);
          pages.push(nextPageSet);
        }
      }

      return pages;
    } },

  watch: {
    value: {
      handler: function handler(page) {
        this.select(page || this.value);
      },
      immediate: true } },


  methods: {
    select: function select(page, emitChange) {
      page = Math.min(this.count, Math.max(1, page));

      if (this.value !== page) {
        this.$emit('input', page);

        if (emitChange) {
          this.$emit('change', page);
        }
      }
    } },

  render: function render() {
    var _this = this;

    var h = arguments[0];
    var value = this.value;
    var simple = this.mode !== 'multi';

    var onSelect = function onSelect(value) {
      return function () {
        _this.select(value, true);
      };
    };

    return h("ul", {
      "class": bem({
        simple: simple }) },

    [h("li", {
      "class": [bem('item', {
        disabled: value === 1 }),
      bem('prev'), _constant.BORDER],
      "on": {
        "click": onSelect(value - 1) } },

    [this.prevText || t('prev')]), this.pages.map(function (page) {
      return h("li", {
        "class": [bem('item', {
          active: page.active }),
        bem('page'), _constant.BORDER],
        "on": {
          "click": onSelect(page.number) } },

      [page.text]);
    }), simple && h("li", {
      "class": bem('page-desc') },
    [this.slots('pageDesc') || value + "/" + this.count]), h("li", {
      "class": [bem('item', {
        disabled: value === this.count }),
      bem('next'), _constant.BORDER],
      "on": {
        "click": onSelect(value + 1) } },

    [this.nextText || t('next')])]);
  } });exports.default = _default;

/***/ }),
/* 129 */
/*!***************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/panel/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _babelHelperVueJsxMergeProps = _interopRequireDefault(__webpack_require__(/*! @vue/babel-helper-vue-jsx-merge-props */ 14));
var _utils = __webpack_require__(/*! ../utils */ 15);
var _functional = __webpack_require__(/*! ../utils/functional */ 27);
var _constant = __webpack_require__(/*! ../utils/constant */ 28);
var _cell = _interopRequireDefault(__webpack_require__(/*! ../cell */ 51));
var _cellGroup = _interopRequireDefault(__webpack_require__(/*! ../cell-group */ 75));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // Types

var _createNamespace = (0, _utils.createNamespace)('panel'),
createComponent = _createNamespace[0],
bem = _createNamespace[1];

function Panel(h, props, slots, ctx) {
  var Content = function Content() {
    return [slots.header ? slots.header() : h(_cell.default, {
      "attrs": {
        "icon": props.icon,
        "label": props.desc,
        "title": props.title,
        "value": props.status,
        "valueClass": bem('header-value') },

      "class": bem('header') }),
    h("div", {
      "class": bem('content') },
    [slots.default && slots.default()]), slots.footer && h("div", {
      "class": [bem('footer'), _constant.BORDER_TOP] },
    [slots.footer()])];
  };

  return h(_cellGroup.default, (0, _babelHelperVueJsxMergeProps.default)([{
    "class": bem(),
    "scopedSlots": {
      default: Content } },

  (0, _functional.inherit)(ctx, true)]));
}

Panel.props = {
  icon: String,
  desc: String,
  title: String,
  status: String };var _default =

createComponent(Panel);exports.default = _default;

/***/ }),
/* 130 */
/*!************************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/password-input/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _babelHelperVueJsxMergeProps = _interopRequireDefault(__webpack_require__(/*! @vue/babel-helper-vue-jsx-merge-props */ 14));
var _utils = __webpack_require__(/*! ../utils */ 15);
var _functional = __webpack_require__(/*! ../utils/functional */ 27);
var _constant = __webpack_require__(/*! ../utils/constant */ 28);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // Types

var _createNamespace = (0, _utils.createNamespace)('password-input'),
createComponent = _createNamespace[0],
bem = _createNamespace[1];

function PasswordInput(h, props, slots, ctx) {
  var _ref;

  var info = props.errorInfo || props.info;
  var Points = [];

  for (var i = 0; i < props.length; i++) {
    var _class;

    var _char = props.value[i];
    var showBorder = i !== 0 && !props.gutter;
    var showCursor = props.focused && i === props.value.length;
    var style = void 0;

    if (i !== 0 && props.gutter) {
      style = {
        marginLeft: (0, _utils.addUnit)(props.gutter) };

    }

    Points.push(h("li", {
      "class": (_class = {}, _class[_constant.BORDER_LEFT] = showBorder, _class),
      "style": style },
    [props.mask ? h("i", {
      "style": {
        visibility: _char ? 'visible' : 'hidden' } }) :

    _char, showCursor && h("div", {
      "class": bem('cursor') })]));

  }

  return h("div", {
    "class": bem() },
  [h("ul", (0, _babelHelperVueJsxMergeProps.default)([{
    "class": [bem('security'), (_ref = {}, _ref[_constant.BORDER_SURROUND] = !props.gutter, _ref)],
    "on": {
      "touchstart": function touchstart(event) {
        event.stopPropagation();
        (0, _functional.emit)(ctx, 'focus', event);
      } } },

  (0, _functional.inherit)(ctx, true)]), [Points]), info && h("div", {
    "class": bem(props.errorInfo ? 'error-info' : 'info') },
  [info])]);
}

PasswordInput.props = {
  info: String,
  gutter: [Number, String],
  focused: Boolean,
  errorInfo: String,
  mask: {
    type: Boolean,
    default: true },

  value: {
    type: String,
    default: '' },

  length: {
    type: Number,
    default: 6 } };var _default =


createComponent(PasswordInput);exports.default = _default;

/***/ }),
/* 131 */
/*!******************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/progress/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _utils = __webpack_require__(/*! ../utils */ 15);
var _constant = __webpack_require__(/*! ../utils/constant */ 28);

var _createNamespace = (0, _utils.createNamespace)('progress'),
createComponent = _createNamespace[0],
bem = _createNamespace[1];var _default =

createComponent({
  props: {
    inactive: Boolean,
    pivotText: String,
    pivotColor: String,
    percentage: {
      type: Number,
      required: true,
      validator: function validator(value) {
        return value >= 0 && value <= 100;
      } },

    showPivot: {
      type: Boolean,
      default: true },

    color: {
      type: String,
      default: _constant.BLUE },

    textColor: {
      type: String,
      default: _constant.WHITE } },


  data: function data() {
    return {
      pivotWidth: 0,
      progressWidth: 0 };

  },
  mounted: function mounted() {
    this.setWidth();
  },
  watch: {
    showPivot: 'setWidth',
    pivotText: 'setWidth' },

  methods: {
    setWidth: function setWidth() {
      var _this = this;

      this.$nextTick(function () {
        _this.progressWidth = _this.$el.offsetWidth;
        _this.pivotWidth = _this.$refs.pivot ? _this.$refs.pivot.offsetWidth : 0;
      });
    } },

  render: function render() {
    var h = arguments[0];
    var pivotText = this.pivotText,
    percentage = this.percentage;
    var text = (0, _utils.isDef)(pivotText) ? pivotText : percentage + '%';
    var showPivot = this.showPivot && text;
    var background = this.inactive ? '#cacaca' : this.color;
    var pivotStyle = {
      color: this.textColor,
      background: this.pivotColor || background };

    var portionStyle = {
      background: background,
      width: (this.progressWidth - this.pivotWidth) * percentage / 100 + 'px' };

    return h("div", {
      "class": bem() },
    [h("span", {
      "class": bem('portion', {
        'with-pivot': showPivot }),

      "style": portionStyle },
    [showPivot && h("span", {
      "ref": "pivot",
      "style": pivotStyle,
      "class": bem('pivot') },
    [text])])]);
  } });exports.default = _default;

/***/ }),
/* 132 */
/*!**********************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/pull-refresh/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _utils = __webpack_require__(/*! ../utils */ 15);
var _event = __webpack_require__(/*! ../utils/dom/event */ 33);
var _touch = __webpack_require__(/*! ../mixins/touch */ 31);
var _scroll = __webpack_require__(/*! ../utils/dom/scroll */ 36);
var _loading = _interopRequireDefault(__webpack_require__(/*! ../loading */ 41));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var _createNamespace = (0, _utils.createNamespace)('pull-refresh'),
createComponent = _createNamespace[0],
bem = _createNamespace[1],
t = _createNamespace[2];

var TEXT_STATUS = ['pulling', 'loosing', 'success'];var _default =
createComponent({
  mixins: [_touch.TouchMixin],
  props: {
    disabled: Boolean,
    successText: String,
    pullingText: String,
    loosingText: String,
    loadingText: String,
    value: {
      type: Boolean,
      required: true },

    successDuration: {
      type: Number,
      default: 500 },

    animationDuration: {
      type: Number,
      default: 300 },

    headHeight: {
      type: Number,
      default: 50 } },


  data: function data() {
    return {
      status: 'normal',
      distance: 0,
      duration: 0 };

  },
  computed: {
    untouchable: function untouchable() {
      return this.status === 'loading' || this.status === 'success' || this.disabled;
    } },

  watch: {
    value: function value(loading) {
      var _this = this;

      this.duration = this.animationDuration;

      if (!loading && this.successText) {
        this.status = 'success';
        setTimeout(function () {
          _this.setStatus(0);
        }, this.successDuration);
      } else {
        this.setStatus(loading ? this.headHeight : 0, loading);
      }
    } },

  mounted: function mounted() {
    this.scrollEl = (0, _scroll.getScrollEventTarget)(this.$el);
  },
  methods: {
    onTouchStart: function onTouchStart(event) {
      if (!this.untouchable && this.getCeiling()) {
        this.duration = 0;
        this.touchStart(event);
      }
    },
    onTouchMove: function onTouchMove(event) {
      if (this.untouchable) {
        return;
      }

      this.touchMove(event);

      if (!this.ceiling && this.getCeiling()) {
        this.duration = 0;
        this.startY = event.touches[0].clientY;
        this.deltaY = 0;
      }

      if (this.ceiling && this.deltaY >= 0) {
        if (this.direction === 'vertical') {
          this.setStatus(this.ease(this.deltaY));
          (0, _event.preventDefault)(event);
        }
      }
    },
    onTouchEnd: function onTouchEnd() {
      var _this2 = this;

      if (!this.untouchable && this.ceiling && this.deltaY) {
        this.duration = this.animationDuration;

        if (this.status === 'loosing') {
          this.setStatus(this.headHeight, true);
          this.$emit('input', true); // ensure value change can be watched

          this.$nextTick(function () {
            _this2.$emit('refresh');
          });
        } else {
          this.setStatus(0);
        }
      }
    },
    getCeiling: function getCeiling() {
      this.ceiling = (0, _scroll.getScrollTop)(this.scrollEl) === 0;
      return this.ceiling;
    },
    ease: function ease(distance) {
      var headHeight = this.headHeight;
      return Math.round(distance < headHeight ? distance : distance < headHeight * 2 ? headHeight + (distance - headHeight) / 2 : headHeight * 1.5 + (distance - headHeight * 2) / 4);
    },
    setStatus: function setStatus(distance, isLoading) {
      this.distance = distance;
      var status = isLoading ? 'loading' : distance === 0 ? 'normal' : distance < this.headHeight ? 'pulling' : 'loosing';

      if (status !== this.status) {
        this.status = status;
      }
    } },

  render: function render() {
    var h = arguments[0];
    var status = this.status,
    distance = this.distance;
    var text = this[status + "Text"] || t(status);
    var style = {
      transition: this.duration + "ms",
      transform: this.distance ? "translate3d(0," + this.distance + "px, 0)" : '' };

    var Status = this.slots(status, {
      distance: distance }) ||
    [TEXT_STATUS.indexOf(status) !== -1 && h("div", {
      "class": bem('text') },
    [text]), status === 'loading' && h(_loading.default, {
      "attrs": {
        "size": "16" } },

    [text])];
    return h("div", {
      "class": bem() },
    [h("div", {
      "class": bem('track'),
      "style": style,
      "on": {
        "touchstart": this.onTouchStart,
        "touchmove": this.onTouchMove,
        "touchend": this.onTouchEnd,
        "touchcancel": this.onTouchEnd } },

    [h("div", {
      "class": bem('head') },
    [Status]), this.slots()])]);
  } });exports.default = _default;

/***/ }),
/* 133 */
/*!**************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/rate/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _babelHelperVueJsxMergeProps = _interopRequireDefault(__webpack_require__(/*! @vue/babel-helper-vue-jsx-merge-props */ 14));
var _utils = __webpack_require__(/*! ../utils */ 15);
var _functional = __webpack_require__(/*! ../utils/functional */ 27);
var _event = __webpack_require__(/*! ../utils/dom/event */ 33);
var _icon = _interopRequireDefault(__webpack_require__(/*! ../icon */ 37));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // Types

var _createNamespace = (0, _utils.createNamespace)('rate'),
createComponent = _createNamespace[0],
bem = _createNamespace[1];

function getRateStatus(value, index, allowHalf) {
  if (value >= index) {
    return 'full';
  }

  if (value + 0.5 >= index && allowHalf) {
    return 'half';
  }

  return 'void';
}

function Rate(h, props, slots, ctx) {
  var icon = props.icon,
  color = props.color,
  count = props.count,
  voidIcon = props.voidIcon,
  readonly = props.readonly,
  disabled = props.disabled,
  voidColor = props.voidColor,
  disabledColor = props.disabledColor;
  var list = [];

  for (var i = 1; i <= count; i++) {
    list.push(getRateStatus(props.value, i, props.allowHalf));
  }

  function onSelect(index) {
    if (!disabled && !readonly) {
      (0, _functional.emit)(ctx, 'input', index);
      (0, _functional.emit)(ctx, 'change', index);
    }
  }

  function onTouchMove(event) {
    if (readonly || disabled || !document.elementFromPoint) {
      return;
    }

    (0, _event.preventDefault)(event);
    var _event$touches$ = event.touches[0],
    clientX = _event$touches$.clientX,
    clientY = _event$touches$.clientY;
    var target = document.elementFromPoint(clientX, clientY);

    if (target && target.dataset) {
      var score = target.dataset.score;
      /* istanbul ignore else */

      if (score) {
        onSelect(+score);
      }
    }
  }

  var gutter = (0, _utils.addUnit)(props.gutter);

  function renderStar(status, index) {
    var isFull = status === 'full';
    var isVoid = status === 'void';
    var score = index + 1;
    var size = (0, _utils.addUnit)(props.size);
    var style;

    if (gutter && score !== count) {
      style = {
        paddingRight: gutter };

    }

    return h("div", {
      "key": index,
      "attrs": {
        "role": "radio",
        "tabindex": "0",
        "aria-setsize": count,
        "aria-posinset": score,
        "aria-checked": String(!isVoid) },

      "style": style,
      "class": bem('item') },
    [h(_icon.default, {
      "attrs": {
        "size": size,
        "name": isFull ? icon : voidIcon,
        "data-score": score,
        "color": disabled ? disabledColor : isFull ? color : voidColor },

      "class": bem('icon'),
      "on": {
        "click": function click() {
          onSelect(score);
        } } }),

    props.allowHalf && h(_icon.default, {
      "attrs": {
        "size": size,
        "name": isVoid ? voidIcon : icon,
        "data-score": score - 0.5,
        "color": disabled ? disabledColor : isVoid ? voidColor : color },

      "class": bem('icon', 'half'),
      "on": {
        "click": function click() {
          onSelect(score - 0.5);
        } } })]);


  }

  return h("div", (0, _babelHelperVueJsxMergeProps.default)([{
    "class": bem(),
    "attrs": {
      "tabindex": "0",
      "role": "radiogroup" } },

  (0, _functional.inherit)(ctx), {
    "on": {
      "touchmove": onTouchMove } }]),

  [list.map(function (status, index) {
    return renderStar(status, index);
  })]);
}

Rate.props = {
  size: [Number, String],
  gutter: [Number, String],
  readonly: Boolean,
  disabled: Boolean,
  allowHalf: Boolean,
  value: {
    type: Number,
    default: 0 },

  icon: {
    type: String,
    default: 'star' },

  voidIcon: {
    type: String,
    default: 'star-o' },

  color: {
    type: String,
    default: '#ffd21e' },

  voidColor: {
    type: String,
    default: '#c7c7c7' },

  disabledColor: {
    type: String,
    default: '#bdbdbd' },

  count: {
    type: Number,
    default: 5 } };var _default =


createComponent(Rate);exports.default = _default;

/***/ }),
/* 134 */
/*!*************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/row/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _utils = __webpack_require__(/*! ../utils */ 15);

var _createNamespace = (0, _utils.createNamespace)('row'),
createComponent = _createNamespace[0],
bem = _createNamespace[1];var _default =

createComponent({
  props: {
    type: String,
    align: String,
    justify: String,
    tag: {
      type: String,
      default: 'div' },

    gutter: {
      type: [Number, String],
      default: 0 } },


  methods: {
    onClick: function onClick(event) {
      this.$emit('click', event);
    } },

  render: function render() {
    var _bem;

    var h = arguments[0];
    var align = this.align,
    justify = this.justify;
    var flex = this.type === 'flex';
    var margin = "-" + Number(this.gutter) / 2 + "px";
    var style = this.gutter ? {
      marginLeft: margin,
      marginRight: margin } :
    {};
    return h(this.tag, {
      "style": style,
      "class": bem((_bem = {
        flex: flex },
      _bem["align-" + align] = flex && align, _bem["justify-" + justify] = flex && justify, _bem)),
      "on": {
        "click": this.onClick } },

    [this.slots()]);
  } });exports.default = _default;

/***/ }),
/* 135 */
/*!****************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/search/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _babelHelperVueJsxMergeProps = _interopRequireDefault(__webpack_require__(/*! @vue/babel-helper-vue-jsx-merge-props */ 14));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/esm/extends */ 13));
var _utils = __webpack_require__(/*! ../utils */ 15);
var _functional = __webpack_require__(/*! ../utils/functional */ 27);
var _event = __webpack_require__(/*! ../utils/dom/event */ 33);
var _field = _interopRequireDefault(__webpack_require__(/*! ../field */ 50));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // Types

var _createNamespace = (0, _utils.createNamespace)('search'),
createComponent = _createNamespace[0],
bem = _createNamespace[1],
t = _createNamespace[2];

function Search(h, props, slots, ctx) {
  function Label() {
    if (slots.label || props.label) {
      return h("div", {
        "class": bem('label') },
      [slots.label ? slots.label() : props.label]);
    }
  }

  function Action() {
    if (!props.showAction) {
      return;
    }

    function onCancel() {
      (0, _functional.emit)(ctx, 'input', '');
      (0, _functional.emit)(ctx, 'cancel');
    }

    return h("div", {
      "class": bem('action') },
    [slots.action ? slots.action() : h("div", {
      "on": {
        "click": onCancel } },

    [t('cancel')])]);
  }

  var fieldData = {
    attrs: ctx.data.attrs,
    on: (0, _extends2.default)({}, ctx.listeners, {
      input: function input(value) {
        (0, _functional.emit)(ctx, 'input', value);
      },
      keypress: function keypress(event) {
        // press enter
        if (event.keyCode === 13) {
          (0, _event.preventDefault)(event);
          (0, _functional.emit)(ctx, 'search', props.value);
        }

        (0, _functional.emit)(ctx, 'keypress', event);
      } }) };


  var inheritData = (0, _functional.inherit)(ctx);
  delete inheritData.attrs;
  return h("div", (0, _babelHelperVueJsxMergeProps.default)([{
    "class": bem({
      'show-action': props.showAction }),

    "style": {
      background: props.background } },

  inheritData]), [h("div", {
    "class": bem('content', props.shape) },
  [Label(), h(_field.default, (0, _babelHelperVueJsxMergeProps.default)([{
    "attrs": {
      "type": "search",
      "border": false,
      "value": props.value,
      "leftIcon": props.leftIcon,
      "rightIcon": props.rightIcon,
      "clearable": props.clearable },

    "scopedSlots": {
      'left-icon': slots['left-icon'],
      'right-icon': slots['right-icon'] } },

  fieldData]))]), Action()]);
}

Search.props = {
  value: String,
  label: String,
  rightIcon: String,
  showAction: Boolean,
  shape: {
    type: String,
    default: 'square' },

  clearable: {
    type: Boolean,
    default: true },

  background: {
    type: String,
    default: '#fff' },

  leftIcon: {
    type: String,
    default: 'search' } };var _default =


createComponent(Search);exports.default = _default;

/***/ }),
/* 136 */
/*!*****************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/sidebar/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _utils = __webpack_require__(/*! ../utils */ 15);
var _relation = __webpack_require__(/*! ../mixins/relation */ 69);
var _constant = __webpack_require__(/*! ../utils/constant */ 28);

var _createNamespace = (0, _utils.createNamespace)('sidebar'),
createComponent = _createNamespace[0],
bem = _createNamespace[1];var _default =

createComponent({
  mixins: [(0, _relation.ParentMixin)('vanSidebar')],
  model: {
    prop: 'activeKey' },

  props: {
    activeKey: {
      type: [Number, String],
      default: 0 } },


  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": [bem(), _constant.BORDER_TOP_BOTTOM] },
    [this.slots()]);
  } });exports.default = _default;

/***/ }),
/* 137 */
/*!**********************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/sidebar-item/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/esm/extends */ 13));
var _utils = __webpack_require__(/*! ../utils */ 15);
var _relation = __webpack_require__(/*! ../mixins/relation */ 69);
var _router = __webpack_require__(/*! ../utils/router */ 53);
var _constant = __webpack_require__(/*! ../utils/constant */ 28);
var _info = _interopRequireDefault(__webpack_require__(/*! ../info */ 38));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var _createNamespace = (0, _utils.createNamespace)('sidebar-item'),
createComponent = _createNamespace[0],
bem = _createNamespace[1];var _default =

createComponent({
  mixins: [(0, _relation.ChildrenMixin)('vanSidebar')],
  props: (0, _extends2.default)({}, _router.routeProps, {
    info: [Number, String],
    title: String }),

  computed: {
    select: function select() {
      return this.index === +this.parent.activeKey;
    } },

  methods: {
    onClick: function onClick() {
      this.$emit('click', this.index);
      this.parent.$emit('input', this.index);
      this.parent.$emit('change', this.index);
      (0, _router.route)(this.$router, this);
    } },

  render: function render() {
    var h = arguments[0];
    return h("a", {
      "class": [bem({
        select: this.select }),
      _constant.BORDER],
      "on": {
        "click": this.onClick } },

    [h("div", {
      "class": bem('text') },
    [this.title, h(_info.default, {
      "attrs": {
        "info": this.info },

      "class": bem('info') })])]);

  } });exports.default = _default;

/***/ }),
/* 138 */
/*!******************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/skeleton/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _babelHelperVueJsxMergeProps = _interopRequireDefault(__webpack_require__(/*! @vue/babel-helper-vue-jsx-merge-props */ 14));
var _utils = __webpack_require__(/*! ../utils */ 15);
var _functional = __webpack_require__(/*! ../utils/functional */ 27);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // Types

var _createNamespace = (0, _utils.createNamespace)('skeleton'),
createComponent = _createNamespace[0],
bem = _createNamespace[1];

var DEFAULT_ROW_WIDTH = '100%';
var DEFAULT_LAST_ROW_WIDTH = '60%';

function Skeleton(h, props, slots, ctx) {
  if (!props.loading) {
    return slots.default && slots.default();
  }

  function Title() {
    if (props.title) {
      return h("h3", {
        "class": bem('title'),
        "style": {
          width: (0, _utils.addUnit)(props.titleWidth) } });


    }
  }

  function Rows() {
    var Rows = [];
    var rowWidth = props.rowWidth;

    function getRowWidth(index) {
      if (rowWidth === DEFAULT_ROW_WIDTH && index === props.row - 1) {
        return DEFAULT_LAST_ROW_WIDTH;
      }

      if (Array.isArray(rowWidth)) {
        return rowWidth[index];
      }

      return rowWidth;
    }

    for (var i = 0; i < props.row; i++) {
      Rows.push(h("div", {
        "class": bem('row'),
        "style": {
          width: (0, _utils.addUnit)(getRowWidth(i)) } }));


    }

    return Rows;
  }

  function Avatar() {
    if (props.avatar) {
      var size = (0, _utils.addUnit)(props.avatarSize);
      return h("div", {
        "class": bem('avatar', props.avatarShape),
        "style": {
          width: size,
          height: size } });


    }
  }

  return h("div", (0, _babelHelperVueJsxMergeProps.default)([{
    "class": bem({
      animate: props.animate }) },

  (0, _functional.inherit)(ctx)]), [Avatar(), h("div", {
    "class": bem('content') },
  [Title(), Rows()])]);
}

Skeleton.props = {
  title: Boolean,
  avatar: Boolean,
  row: {
    type: Number,
    default: 0 },

  loading: {
    type: Boolean,
    default: true },

  animate: {
    type: Boolean,
    default: true },

  avatarSize: {
    type: String,
    default: '32px' },

  avatarShape: {
    type: String,
    default: 'round' },

  titleWidth: {
    type: [Number, String],
    default: '40%' },

  rowWidth: {
    type: [Number, String, Array],
    default: DEFAULT_ROW_WIDTH } };var _default =


createComponent(Skeleton);exports.default = _default;

/***/ }),
/* 139 */
/*!*************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/sku/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _lang = _interopRequireDefault(__webpack_require__(/*! ./lang */ 140));
var _locale = _interopRequireDefault(__webpack_require__(/*! ../locale */ 19));
var _Sku = _interopRequireDefault(__webpack_require__(/*! ./Sku */ 141));
var _SkuActions = _interopRequireDefault(__webpack_require__(/*! ./components/SkuActions */ 155));
var _SkuHeader = _interopRequireDefault(__webpack_require__(/*! ./components/SkuHeader */ 142));
var _SkuHeaderItem = _interopRequireDefault(__webpack_require__(/*! ./components/SkuHeaderItem */ 143));
var _SkuMessages = _interopRequireDefault(__webpack_require__(/*! ./components/SkuMessages */ 150));
var _SkuStepper = _interopRequireDefault(__webpack_require__(/*! ./components/SkuStepper */ 148));
var _SkuRow = _interopRequireDefault(__webpack_require__(/*! ./components/SkuRow */ 144));
var _SkuRowItem = _interopRequireDefault(__webpack_require__(/*! ./components/SkuRowItem */ 145));
var _skuHelper = _interopRequireDefault(__webpack_require__(/*! ./utils/skuHelper */ 146));
var _constants = _interopRequireDefault(__webpack_require__(/*! ./constants */ 147));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
_locale.default.add(_lang.default);
_Sku.default.SkuActions = _SkuActions.default;
_Sku.default.SkuHeader = _SkuHeader.default;
_Sku.default.SkuHeaderItem = _SkuHeaderItem.default;
_Sku.default.SkuMessages = _SkuMessages.default;
_Sku.default.SkuStepper = _SkuStepper.default;
_Sku.default.SkuRow = _SkuRow.default;
_Sku.default.SkuRowItem = _SkuRowItem.default;
_Sku.default.skuHelper = _skuHelper.default;
_Sku.default.skuConstants = _constants.default;var _default =
_Sku.default;exports.default = _default;

/***/ }),
/* 140 */
/*!************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/sku/lang.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * Sku only provide zh-CN lang by default
                                                                                                      */var _default =
{
  'zh-CN': {
    vanSku: {
      select: '选择',
      selected: '已选',
      selectSku: '请先选择商品规格',
      soldout: '库存不足',
      originPrice: '原价',
      minusTip: '至少选择一件',
      unavailable: '商品已经无法购买啦',
      stock: function stock(_stock) {
        return "\u5269\u4F59 " + _stock + "\u4EF6";
      },
      quotaLimit: function quotaLimit(quota) {
        return "\u6BCF\u4EBA\u9650\u8D2D" + quota + "\u4EF6";
      },
      quotaCount: function quotaCount(count) {
        return "\u4F60\u5DF2\u8D2D\u4E70" + count + "\u4EF6";
      } },

    vanSkuActions: {
      buy: '立即购买',
      addCart: '加入购物车' },

    vanSkuImgUploader: {
      oversize: function oversize(maxSize) {
        return "\u6700\u5927\u53EF\u4E0A\u4F20\u56FE\u7247\u4E3A" + maxSize + "MB\uFF0C\u8BF7\u5C1D\u8BD5\u538B\u7F29\u56FE\u7247\u5C3A\u5BF8";
      },
      fail: '上传失败<br />重新上传' },

    vanSkuStepper: {
      num: '购买数量' },

    vanSkuMessages: {
      fill: '请填写',
      upload: '请上传',
      imageLabel: '仅限一张',
      invalid: {
        tel: '请填写正确的数字格式留言',
        mobile: '手机号长度为6-20位数字',
        email: '请填写正确的邮箱',
        id_no: '请填写正确的身份证号码' },

      placeholder: {
        id_no: '输入身份证号码',
        text: '输入文本',
        tel: '输入数字',
        email: '输入邮箱',
        date: '点击选择日期',
        time: '点击选择时间',
        textarea: '点击填写段落文本',
        mobile: '输入手机号码' } } } };exports.default = _default;

/***/ }),
/* 141 */
/*!***********************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/sku/Sku.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _extends4 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/esm/extends */ 13));
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _popup = _interopRequireDefault(__webpack_require__(/*! ../popup */ 40));
var _toast = _interopRequireDefault(__webpack_require__(/*! ../toast */ 56));
var _imagePreview = _interopRequireDefault(__webpack_require__(/*! ../image-preview */ 113));
var _SkuHeader = _interopRequireDefault(__webpack_require__(/*! ./components/SkuHeader */ 142));
var _SkuHeaderItem = _interopRequireDefault(__webpack_require__(/*! ./components/SkuHeaderItem */ 143));
var _SkuRow = _interopRequireDefault(__webpack_require__(/*! ./components/SkuRow */ 144));
var _SkuRowItem = _interopRequireDefault(__webpack_require__(/*! ./components/SkuRowItem */ 145));
var _SkuStepper = _interopRequireDefault(__webpack_require__(/*! ./components/SkuStepper */ 148));
var _SkuMessages = _interopRequireDefault(__webpack_require__(/*! ./components/SkuMessages */ 150));
var _SkuActions = _interopRequireDefault(__webpack_require__(/*! ./components/SkuActions */ 155));
var _utils = __webpack_require__(/*! ../utils */ 15);
var _skuHelper = __webpack_require__(/*! ./utils/skuHelper */ 146);
var _constants = __webpack_require__(/*! ./constants */ 147);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
var namespace = (0, _utils.createNamespace)('sku');
var createComponent = namespace[0];
var t = namespace[2];
var QUOTA_LIMIT = _constants.LIMIT_TYPE.QUOTA_LIMIT;var _default2 =
createComponent({
  props: {
    sku: Object,
    priceTag: String,
    goods: Object,
    value: Boolean,
    buyText: String,
    goodsId: [Number, String],
    hideStock: Boolean,
    addCartText: String,
    stepperTitle: String,
    getContainer: Function,
    hideQuotaText: Boolean,
    hideSelectedText: Boolean,
    resetStepperOnHide: Boolean,
    customSkuValidator: Function,
    closeOnClickOverlay: Boolean,
    disableStepperInput: Boolean,
    resetSelectedSkuOnHide: Boolean,
    quota: {
      type: Number,
      default: 0 },

    quotaUsed: {
      type: Number,
      default: 0 },

    initialSku: {
      type: Object,
      default: function _default() {
        return {};
      } },

    showSoldoutSku: {
      type: Boolean,
      default: true },

    showAddCartBtn: {
      type: Boolean,
      default: true },

    bodyOffsetTop: {
      type: Number,
      default: 200 },

    messageConfig: {
      type: Object,
      default: function _default() {
        return {
          placeholderMap: {},
          uploadImg: function uploadImg() {
            return Promise.resolve();
          },
          uploadMaxSize: 5 };

      } },

    customStepperConfig: {
      type: Object,
      default: function _default() {
        return {};
      } } },


  data: function data() {
    return {
      selectedSku: {},
      selectedNum: 1,
      show: this.value };

  },
  watch: {
    show: function show(val) {
      this.$emit('input', val);

      if (!val) {
        this.$emit('sku-close', {
          selectedSkuValues: this.selectedSkuValues,
          selectedNum: this.selectedNum,
          selectedSkuComb: this.selectedSkuComb });


        if (this.resetStepperOnHide) {
          this.resetStepper();
        }

        if (this.resetSelectedSkuOnHide) {
          this.resetSelectedSku(this.skuTree);
        }
      }
    },
    value: function value(val) {
      this.show = val;
    },
    skuTree: 'resetSelectedSku',
    initialSku: function initialSku() {
      this.resetStepper();
      this.resetSelectedSku(this.skuTree);
    } },

  computed: {
    skuGroupClass: function skuGroupClass() {
      return ['van-sku-group-container', {
        'van-sku-group-container--hide-soldout': !this.showSoldoutSku }];

    },
    bodyStyle: function bodyStyle() {
      if (this.$isServer) {
        return;
      } // header高度82px, sku actions高度50px，如果改动了样式自己传下bodyOffsetTop调整下


      var maxHeight = window.innerHeight - this.bodyOffsetTop;
      return {
        maxHeight: maxHeight + 'px' };

    },
    isSkuCombSelected: function isSkuCombSelected() {
      return (0, _skuHelper.isAllSelected)(this.sku.tree, this.selectedSku);
    },
    isSkuEmpty: function isSkuEmpty() {
      return Object.keys(this.sku).length === 0;
    },
    hasSku: function hasSku() {
      return !this.sku.none_sku;
    },
    selectedSkuComb: function selectedSkuComb() {
      if (!this.hasSku) {
        return {
          id: this.sku.collection_id,
          price: Math.round(this.sku.price * 100),
          stock_num: this.sku.stock_num };

      }

      if (this.isSkuCombSelected) {
        return (0, _skuHelper.getSkuComb)(this.sku.list, this.selectedSku);
      }

      return null;
    },
    selectedSkuValues: function selectedSkuValues() {
      return (0, _skuHelper.getSelectedSkuValues)(this.skuTree, this.selectedSku);
    },
    price: function price() {
      if (this.selectedSkuComb) {
        return (this.selectedSkuComb.price / 100).toFixed(2);
      } // sku.price是一个格式化好的价格区间


      return this.sku.price;
    },
    originPrice: function originPrice() {
      if (this.selectedSkuComb && this.selectedSkuComb.origin_price) {
        return (this.selectedSkuComb.origin_price / 100).toFixed(2);
      }

      return this.sku.origin_price;
    },
    skuTree: function skuTree() {
      return this.sku.tree || [];
    },
    imageList: function imageList() {
      var imageList = [this.goods.picture];

      if (this.skuTree.length > 0) {
        this.skuTree.forEach(function (treeItem) {
          if (!treeItem.v) {
            return;
          }

          treeItem.v.forEach(function (vItem) {
            var img = vItem.imgUrl || vItem.img_url;

            if (img) {
              imageList.push(img);
            }
          });
        });
      }

      return imageList;
    },
    stock: function stock() {
      var stockNum = this.customStepperConfig.stockNum;

      if (stockNum !== undefined) {
        return stockNum;
      }

      if (this.selectedSkuComb) {
        return this.selectedSkuComb.stock_num;
      }

      return this.sku.stock_num;
    },
    stockText: function stockText() {
      var stockFormatter = this.customStepperConfig.stockFormatter;
      if (stockFormatter) return stockFormatter(this.stock);
      return t('stock', this.stock);
    },
    quotaText: function quotaText() {
      var _this$customStepperCo = this.customStepperConfig,
      quotaText = _this$customStepperCo.quotaText,
      hideQuotaText = _this$customStepperCo.hideQuotaText;
      if (hideQuotaText) return '';
      var text = '';

      if (quotaText) {
        text = quotaText;
      } else if (this.quota > 0) {
        text = t('quotaLimit', this.quota);
      }

      return text;
    },
    selectedText: function selectedText() {
      var _this = this;

      if (this.selectedSkuComb) {
        return t('selected') + " " + this.selectedSkuValues.map(function (item) {
          return item.name;
        }).join('；');
      }

      var unselected = this.skuTree.filter(function (item) {
        return _this.selectedSku[item.k_s] === _constants.UNSELECTED_SKU_VALUE_ID;
      }).map(function (item) {
        return item.k;
      }).join('；');
      return t('select') + " " + unselected;
    } },

  created: function created() {
    var skuEventBus = new _vue.default();
    this.skuEventBus = skuEventBus;
    skuEventBus.$on('sku:close', this.onClose);
    skuEventBus.$on('sku:select', this.onSelect);
    skuEventBus.$on('sku:numChange', this.onNumChange);
    skuEventBus.$on('sku:previewImage', this.onPreviewImage);
    skuEventBus.$on('sku:overLimit', this.onOverLimit);
    skuEventBus.$on('sku:addCart', this.onAddCart);
    skuEventBus.$on('sku:buy', this.onBuy);
    this.resetStepper();
    this.resetSelectedSku(this.skuTree); // 组件初始化后的钩子，抛出skuEventBus

    this.$emit('after-sku-create', skuEventBus);
  },
  methods: {
    resetStepper: function resetStepper() {
      var skuStepper = this.$refs.skuStepper;
      var selectedNum = this.initialSku.selectedNum;
      var num = (0, _utils.isDef)(selectedNum) ? selectedNum : 1;

      if (skuStepper) {
        skuStepper.setCurrentNum(num);
      } else {
        this.selectedNum = num;
      }
    },
    resetSelectedSku: function resetSelectedSku(skuTree) {
      var _this2 = this;

      this.selectedSku = {}; // 重置 selectedSku

      skuTree.forEach(function (item) {
        _this2.selectedSku[item.k_s] = _this2.initialSku[item.k_s] || _constants.UNSELECTED_SKU_VALUE_ID;
      }); // 只有一个 sku 规格值时默认选中

      skuTree.forEach(function (item) {
        var key = item.k_s;
        var valueId = item.v[0].id;

        if (item.v.length === 1 && (0, _skuHelper.isSkuChoosable)(_this2.sku.list, _this2.selectedSku, {
          key: key,
          valueId: valueId }))
        {
          _this2.selectedSku[key] = valueId;
        }
      });
    },
    getSkuMessages: function getSkuMessages() {
      return this.$refs.skuMessages ? this.$refs.skuMessages.getMessages() : {};
    },
    getSkuCartMessages: function getSkuCartMessages() {
      return this.$refs.skuMessages ? this.$refs.skuMessages.getCartMessages() : {};
    },
    validateSkuMessages: function validateSkuMessages() {
      return this.$refs.skuMessages ? this.$refs.skuMessages.validateMessages() : '';
    },
    validateSku: function validateSku() {
      if (this.selectedNum === 0) {
        return t('unavailable');
      }

      if (this.isSkuCombSelected) {
        return this.validateSkuMessages();
      } // 自定义sku校验


      if (this.customSkuValidator) {
        var err = this.customSkuValidator(this);
        if (err) return err;
      }

      return t('selectSku');
    },
    onClose: function onClose() {
      this.show = false;
    },
    onSelect: function onSelect(skuValue) {
      var _extends2, _extends3;

      // 点击已选中的sku时则取消选中
      this.selectedSku = this.selectedSku[skuValue.skuKeyStr] === skuValue.id ? (0, _extends4.default)({}, this.selectedSku, (_extends2 = {}, _extends2[skuValue.skuKeyStr] = _constants.UNSELECTED_SKU_VALUE_ID, _extends2)) : (0, _extends4.default)({}, this.selectedSku, (_extends3 = {}, _extends3[skuValue.skuKeyStr] = skuValue.id, _extends3));
      this.$emit('sku-selected', {
        skuValue: skuValue,
        selectedSku: this.selectedSku,
        selectedSkuComb: this.selectedSkuComb });

    },
    onNumChange: function onNumChange(num) {
      this.selectedNum = num;
    },
    onPreviewImage: function onPreviewImage(indexImage) {
      var _this3 = this;

      var index = this.imageList.findIndex(function (image) {
        return image === indexImage;
      });
      var params = {
        index: index,
        imageList: this.imageList,
        indexImage: indexImage };

      this.$emit('open-preview', params);
      (0, _imagePreview.default)({
        images: this.imageList,
        startPosition: index,
        closeOnPopstate: true,
        onClose: function onClose() {
          _this3.$emit('close-preview', params);
        } });

    },
    onOverLimit: function onOverLimit(data) {
      var action = data.action,
      limitType = data.limitType,
      quota = data.quota,
      quotaUsed = data.quotaUsed;
      var handleOverLimit = this.customStepperConfig.handleOverLimit;

      if (handleOverLimit) {
        handleOverLimit(data);
        return;
      }

      if (action === 'minus') {
        (0, _toast.default)(t('minusTip'));
      } else if (action === 'plus') {
        if (limitType === QUOTA_LIMIT) {
          var msg = t('quotaLimit', quota);
          if (quotaUsed > 0) msg += "\uFF0C" + t('quotaCount', quotaUsed);
          (0, _toast.default)(msg);
        } else {
          (0, _toast.default)(t('soldout'));
        }
      }
    },
    onAddCart: function onAddCart() {
      this.onBuyOrAddCart('add-cart');
    },
    onBuy: function onBuy() {
      this.onBuyOrAddCart('buy-clicked');
    },
    onBuyOrAddCart: function onBuyOrAddCart(type) {
      var error = this.validateSku();

      if (error) {
        (0, _toast.default)(error);
      } else {
        this.$emit(type, this.getSkuData());
      }
    },
    getSkuData: function getSkuData() {
      return {
        goodsId: this.goodsId,
        selectedNum: this.selectedNum,
        selectedSkuComb: this.selectedSkuComb,
        messages: this.getSkuMessages(),
        cartMessages: this.getSkuCartMessages() };

    } },

  render: function render() {
    var _this4 = this;

    var h = arguments[0];

    if (this.isSkuEmpty) {
      return;
    }

    var sku = this.sku,
    goods = this.goods,
    price = this.price,
    originPrice = this.originPrice,
    skuEventBus = this.skuEventBus,
    selectedSku = this.selectedSku,
    selectedNum = this.selectedNum,
    stepperTitle = this.stepperTitle,
    hideQuotaText = this.hideQuotaText,
    selectedSkuComb = this.selectedSkuComb;
    var slotsProps = {
      price: price,
      originPrice: originPrice,
      selectedNum: selectedNum,
      skuEventBus: skuEventBus,
      selectedSku: selectedSku,
      selectedSkuComb: selectedSkuComb };


    var slots = function slots(name) {
      return _this4.slots(name, slotsProps);
    };

    var Header = slots('sku-header') || h(_SkuHeader.default, {
      "attrs": {
        "sku": sku,
        "goods": goods,
        "skuEventBus": skuEventBus,
        "selectedSku": selectedSku } },

    [slots('sku-header-price') || h("div", {
      "class": "van-sku__goods-price" },
    [h("span", {
      "class": "van-sku__price-symbol" },
    ["\uFFE5"]), h("span", {
      "class": "van-sku__price-num" },
    [price]), this.priceTag && h("span", {
      "class": "van-sku__price-tag" },
    [this.priceTag])]), slots('sku-header-origin-price') || originPrice && h(_SkuHeaderItem.default, [t('originPrice'), " \uFFE5", originPrice]), !this.hideStock && h(_SkuHeaderItem.default, [h("span", {
      "class": "van-sku__stock" },
    [this.stockText]), !hideQuotaText && this.quotaText && h("span", {
      "class": "van-sku__quota" },
    ["(", this.quotaText, ")"])]), this.hasSku && !this.hideSelectedText && h(_SkuHeaderItem.default, [this.selectedText]), slots('sku-header-extra')]);
    var Group = slots('sku-group') || this.hasSku && h("div", {
      "class": this.skuGroupClass },
    [this.skuTree.map(function (skuTreeItem) {
      return h(_SkuRow.default, {
        "attrs": {
          "skuRow": skuTreeItem } },

      [skuTreeItem.v.map(function (skuValue) {
        return h(_SkuRowItem.default, {
          "attrs": {
            "skuList": sku.list,
            "skuValue": skuValue,
            "selectedSku": selectedSku,
            "skuEventBus": skuEventBus,
            "skuKeyStr": skuTreeItem.k_s } });


      })]);
    })]);
    var Stepper = slots('sku-stepper') || h(_SkuStepper.default, {
      "ref": "skuStepper",
      "attrs": {
        "stock": this.stock,
        "quota": this.quota,
        "quotaUsed": this.quotaUsed,
        "skuEventBus": skuEventBus,
        "selectedNum": selectedNum,
        "selectedSku": selectedSku,
        "stepperTitle": stepperTitle,
        "skuStockNum": sku.stock_num,
        "disableStepperInput": this.disableStepperInput,
        "customStepperConfig": this.customStepperConfig },

      "on": {
        "change": function change(event) {
          _this4.$emit('stepper-change', event);
        } } });


    var Messages = slots('sku-messages') || h(_SkuMessages.default, {
      "ref": "skuMessages",
      "attrs": {
        "goodsId": this.goodsId,
        "messageConfig": this.messageConfig,
        "messages": sku.messages } });


    var Actions = slots('sku-actions') || h(_SkuActions.default, {
      "attrs": {
        "buyText": this.buyText,
        "skuEventBus": skuEventBus,
        "addCartText": this.addCartText,
        "showAddCartBtn": this.showAddCartBtn } });


    return h(_popup.default, {
      "attrs": {
        "position": "bottom",
        "getContainer": this.getContainer,
        "closeOnClickOverlay": this.closeOnClickOverlay,
        "round": true },

      "class": "van-sku-container",
      "model": {
        value: _this4.show,
        callback: function callback($$v) {
          _this4.show = $$v;
        } } },

    [Header, h("div", {
      "class": "van-sku-body",
      "style": this.bodyStyle },
    [slots('sku-body-top'), Group, slots('extra-sku-group'), Stepper, Messages]), Actions]);
  } });exports.default = _default2;

/***/ }),
/* 142 */
/*!****************************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/sku/components/SkuHeader.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _babelHelperVueJsxMergeProps = _interopRequireDefault(__webpack_require__(/*! @vue/babel-helper-vue-jsx-merge-props */ 14));
var _utils = __webpack_require__(/*! ../../utils */ 15);
var _functional = __webpack_require__(/*! ../../utils/functional */ 27);
var _constant = __webpack_require__(/*! ../../utils/constant */ 28);
var _icon = _interopRequireDefault(__webpack_require__(/*! ../../icon */ 37));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // Types

var _createNamespace = (0, _utils.createNamespace)('sku-header'),
createComponent = _createNamespace[0],
bem = _createNamespace[1];

function getSkuImg(sku, selectedSku) {
  var img;
  sku.tree.some(function (item) {
    var id = selectedSku[item.k_s];

    if (id && item.v) {
      var matchedSku = item.v.filter(function (skuValue) {
        return skuValue.id === id;
      })[0] || {};
      img = matchedSku.imgUrl || matchedSku.img_url;
      return img;
    }

    return false;
  });
  return img;
}

function SkuHeader(h, props, slots, ctx) {
  var sku = props.sku,
  goods = props.goods,
  skuEventBus = props.skuEventBus,
  selectedSku = props.selectedSku;
  var goodsImg = getSkuImg(sku, selectedSku) || goods.picture;

  var previewImage = function previewImage() {
    skuEventBus.$emit('sku:previewImage', goodsImg);
  };

  return h("div", (0, _babelHelperVueJsxMergeProps.default)([{
    "class": [bem(), _constant.BORDER_BOTTOM] },
  (0, _functional.inherit)(ctx)]), [h("div", {
    "class": bem('img-wrap'),
    "on": {
      "click": previewImage } },

  [h("img", {
    "attrs": {
      "src": goodsImg } })]),

  h("div", {
    "class": bem('goods-info') },
  [slots.default && slots.default(), h(_icon.default, {
    "attrs": {
      "name": "clear" },

    "class": "van-sku__close-icon",
    "on": {
      "click": function click() {
        skuEventBus.$emit('sku:close');
      } } })])]);


}

SkuHeader.props = {
  sku: Object,
  goods: Object,
  skuEventBus: Object,
  selectedSku: Object };var _default =

createComponent(SkuHeader);exports.default = _default;

/***/ }),
/* 143 */
/*!********************************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/sku/components/SkuHeaderItem.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _babelHelperVueJsxMergeProps = _interopRequireDefault(__webpack_require__(/*! @vue/babel-helper-vue-jsx-merge-props */ 14));
var _utils = __webpack_require__(/*! ../../utils */ 15);
var _functional = __webpack_require__(/*! ../../utils/functional */ 27);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // Types

var _createNamespace = (0, _utils.createNamespace)('sku-header-item'),
createComponent = _createNamespace[0],
bem = _createNamespace[1];

function SkuHeader(h, props, slots, ctx) {
  return h("div", (0, _babelHelperVueJsxMergeProps.default)([{
    "class": bem() },
  (0, _functional.inherit)(ctx)]), [slots.default && slots.default()]);
}var _default =

createComponent(SkuHeader);exports.default = _default;

/***/ }),
/* 144 */
/*!*************************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/sku/components/SkuRow.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _babelHelperVueJsxMergeProps = _interopRequireDefault(__webpack_require__(/*! @vue/babel-helper-vue-jsx-merge-props */ 14));
var _utils = __webpack_require__(/*! ../../utils */ 15);
var _functional = __webpack_require__(/*! ../../utils/functional */ 27);
var _constant = __webpack_require__(/*! ../../utils/constant */ 28);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // Types

var _createNamespace = (0, _utils.createNamespace)('sku-row'),
createComponent = _createNamespace[0],
bem = _createNamespace[1];

function SkuRow(h, props, slots, ctx) {
  return h("div", (0, _babelHelperVueJsxMergeProps.default)([{
    "class": [bem(), _constant.BORDER_BOTTOM] },
  (0, _functional.inherit)(ctx)]), [h("div", {
    "class": bem('title') },
  [props.skuRow.k]), slots.default && slots.default()]);
}

SkuRow.props = {
  skuRow: Object };var _default =

createComponent(SkuRow);exports.default = _default;

/***/ }),
/* 145 */
/*!*****************************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/sku/components/SkuRowItem.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/esm/extends */ 13));
var _utils = __webpack_require__(/*! ../../utils */ 15);
var _skuHelper = __webpack_require__(/*! ../utils/skuHelper */ 146);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var _createNamespace = (0, _utils.createNamespace)('sku-row-item'),
createComponent = _createNamespace[0];var _default2 =

createComponent({
  props: {
    skuValue: Object,
    skuKeyStr: String,
    skuEventBus: Object,
    selectedSku: Object,
    skuList: {
      type: Array,
      default: function _default() {
        return [];
      } } },


  computed: {
    choosable: function choosable() {
      return (0, _skuHelper.isSkuChoosable)(this.skuList, this.selectedSku, {
        key: this.skuKeyStr,
        valueId: this.skuValue.id });

    } },

  methods: {
    onSelect: function onSelect() {
      if (this.choosable) {
        this.skuEventBus.$emit('sku:select', (0, _extends2.default)({}, this.skuValue, {
          skuKeyStr: this.skuKeyStr }));

      }
    } },

  render: function render() {
    var h = arguments[0];
    var choosed = this.skuValue.id === this.selectedSku[this.skuKeyStr];
    var imgUrl = this.skuValue.imgUrl || this.skuValue.img_url;
    return h("span", {
      "class": ['van-sku-row__item', {
        'van-sku-row__item--active': choosed,
        'van-sku-row__item--disabled': !this.choosable }],

      "on": {
        "click": this.onSelect } },

    [imgUrl && h("img", {
      "class": "van-sku-row__item-img",
      "attrs": {
        "src": imgUrl } }),

    h("span", {
      "class": "van-sku-row__item-name" },
    [this.skuValue.name])]);
  } });exports.default = _default2;

/***/ }),
/* 146 */
/*!***********************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/sku/utils/skuHelper.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = exports.isSkuChoosable = exports.getSelectedSkuValues = exports.getSkuComb = exports.isAllSelected = exports.normalizeSkuTree = void 0;var _extends3 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/esm/extends */ 13));
var _constants = __webpack_require__(/*! ../constants */ 147);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
/*
                                                                                                                                         normalize sku tree
                                                                                                                                       
                                                                                                                                         [
                                                                                                                                           {
                                                                                                                                             count: 2,
                                                                                                                                             k: "品种", // 规格名称 skuKeyName
                                                                                                                                             k_id: "1200", // skuKeyId
                                                                                                                                             k_s: "s1" // skuKeyStr
                                                                                                                                             v: [ // skuValues
                                                                                                                                               { // skuValue
                                                                                                                                                 id: "1201", // skuValueId
                                                                                                                                                 name: "萌" // 具体的规格值 skuValueName
                                                                                                                                               }, {
                                                                                                                                                 id: "973",
                                                                                                                                                 name: "帅"
                                                                                                                                               }
                                                                                                                                             ]
                                                                                                                                           },
                                                                                                                                           ...
                                                                                                                                         ]
                                                                                                                                                       |
                                                                                                                                                       v
                                                                                                                                         {
                                                                                                                                           s1: [{
                                                                                                                                             id: "1201",
                                                                                                                                             name: "萌"
                                                                                                                                           }, {
                                                                                                                                             id: "973",
                                                                                                                                             name: "帅"
                                                                                                                                           }],
                                                                                                                                           ...
                                                                                                                                         }
                                                                                                                                        */

var normalizeSkuTree = function normalizeSkuTree(skuTree) {
  var normalizedTree = {};
  skuTree.forEach(function (treeItem) {
    normalizedTree[treeItem.k_s] = treeItem.v;
  });
  return normalizedTree;
}; // 判断是否所有的sku都已经选中
exports.normalizeSkuTree = normalizeSkuTree;
var isAllSelected = function isAllSelected(skuTree, selectedSku) {
  // 筛选selectedSku对象中key值不为空的值
  var selected = Object.keys(selectedSku).filter(function (skuKeyStr) {
    return selectedSku[skuKeyStr] !== _constants.UNSELECTED_SKU_VALUE_ID;
  });
  return skuTree.length === selected.length;
}; // 根据已选择的 sku 获取 skuComb
exports.isAllSelected = isAllSelected;
var getSkuComb = function getSkuComb(skuList, selectedSku) {
  var skuComb = skuList.filter(function (item) {
    return Object.keys(selectedSku).every(function (skuKeyStr) {
      return String(item[skuKeyStr]) === String(selectedSku[skuKeyStr]);
    });
  });
  return skuComb[0];
}; // 获取已选择的sku名称
exports.getSkuComb = getSkuComb;
var getSelectedSkuValues = function getSelectedSkuValues(skuTree, selectedSku) {
  var normalizedTree = normalizeSkuTree(skuTree);
  return Object.keys(selectedSku).reduce(function (selectedValues, skuKeyStr) {
    var skuValues = normalizedTree[skuKeyStr];
    var skuValueId = selectedSku[skuKeyStr];

    if (skuValueId !== _constants.UNSELECTED_SKU_VALUE_ID) {
      var skuValue = skuValues.filter(function (value) {
        return value.id === skuValueId;
      })[0];
      skuValue && selectedValues.push(skuValue);
    }

    return selectedValues;
  }, []);
}; // 判断sku是否可选
exports.getSelectedSkuValues = getSelectedSkuValues;
var isSkuChoosable = function isSkuChoosable(skuList, selectedSku, skuToChoose) {
  var _extends2;

  var key = skuToChoose.key,
  valueId = skuToChoose.valueId; // 先假设sku已选中，拼入已选中sku对象中

  var matchedSku = (0, _extends3.default)({}, selectedSku, (_extends2 = {}, _extends2[key] = valueId, _extends2)); // 再判断剩余sku是否全部不可选，若不可选则当前sku不可选中


  var skusToCheck = Object.keys(matchedSku).filter(function (skuKey) {
    return matchedSku[skuKey] !== _constants.UNSELECTED_SKU_VALUE_ID;
  });
  var filteredSku = skuList.filter(function (sku) {
    return skusToCheck.every(function (skuKey) {
      return String(matchedSku[skuKey]) === String(sku[skuKey]);
    });
  });
  var stock = filteredSku.reduce(function (total, sku) {
    total += sku.stock_num;
    return total;
  }, 0);
  return stock > 0;
};exports.isSkuChoosable = isSkuChoosable;var _default =
{
  normalizeSkuTree: normalizeSkuTree,
  getSkuComb: getSkuComb,
  getSelectedSkuValues: getSelectedSkuValues,
  isAllSelected: isAllSelected,
  isSkuChoosable: isSkuChoosable };exports.default = _default;

/***/ }),
/* 147 */
/*!*****************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/sku/constants.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = exports.UNSELECTED_SKU_VALUE_ID = exports.LIMIT_TYPE = void 0;var LIMIT_TYPE = {
  QUOTA_LIMIT: 0,
  STOCK_LIMIT: 1 };exports.LIMIT_TYPE = LIMIT_TYPE;

var UNSELECTED_SKU_VALUE_ID = '';exports.UNSELECTED_SKU_VALUE_ID = UNSELECTED_SKU_VALUE_ID;var _default =
{
  LIMIT_TYPE: LIMIT_TYPE,
  UNSELECTED_SKU_VALUE_ID: UNSELECTED_SKU_VALUE_ID };exports.default = _default;

/***/ }),
/* 148 */
/*!*****************************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/sku/components/SkuStepper.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _utils = __webpack_require__(/*! ../../utils */ 15);
var _stepper = _interopRequireDefault(__webpack_require__(/*! ../../stepper */ 149));
var _constants = __webpack_require__(/*! ../constants */ 147);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
var namespace = (0, _utils.createNamespace)('sku-stepper');
var createComponent = namespace[0];
var t = namespace[2];
var QUOTA_LIMIT = _constants.LIMIT_TYPE.QUOTA_LIMIT,
STOCK_LIMIT = _constants.LIMIT_TYPE.STOCK_LIMIT;var _default =
createComponent({
  props: {
    stock: Number,
    skuEventBus: Object,
    skuStockNum: Number,
    selectedNum: Number,
    stepperTitle: String,
    disableStepperInput: Boolean,
    customStepperConfig: Object,
    quota: {
      type: Number,
      default: 0 },

    quotaUsed: {
      type: Number,
      default: 0 } },


  data: function data() {
    return {
      currentNum: this.selectedNum,
      // 购买限制类型: 限购/库存
      limitType: STOCK_LIMIT };

  },
  watch: {
    currentNum: function currentNum(num) {
      this.skuEventBus.$emit('sku:numChange', num);
    },
    stepperLimit: function stepperLimit(limit) {
      if (limit < this.currentNum) {
        this.currentNum = limit;
      }
    } },

  computed: {
    stepperLimit: function stepperLimit() {
      var quotaLimit = this.quota - this.quotaUsed;
      var limit; // 无限购时直接取库存，有限购时取限购数和库存数中小的那个

      if (this.quota > 0 && quotaLimit <= this.stock) {
        // 修正负的limit
        limit = quotaLimit < 0 ? 0 : quotaLimit;
        this.limitType = QUOTA_LIMIT;
      } else {
        limit = this.stock;
        this.limitType = STOCK_LIMIT;
      }

      return limit;
    } },

  methods: {
    setCurrentNum: function setCurrentNum(num) {
      this.currentNum = num;
    },
    onOverLimit: function onOverLimit(action) {
      this.skuEventBus.$emit('sku:overLimit', {
        action: action,
        limitType: this.limitType,
        quota: this.quota,
        quotaUsed: this.quotaUsed });

    },
    onChange: function onChange(currentValue) {
      var handleStepperChange = this.customStepperConfig.handleStepperChange;
      handleStepperChange && handleStepperChange(currentValue);
      this.$emit('change', currentValue);
    } },

  render: function render() {
    var _this = this;

    var h = arguments[0];
    return h("div", {
      "class": "van-sku-stepper-stock" },
    [h("div", {
      "class": "van-sku-stepper-container" },
    [h("div", {
      "class": "van-sku__stepper-title" },
    [this.stepperTitle || t('num')]), h(_stepper.default, {
      "class": "van-sku__stepper",
      "attrs": {
        "max": this.stepperLimit,
        "disableInput": this.disableStepperInput },

      "on": {
        "overlimit": this.onOverLimit,
        "change": this.onChange },

      "model": {
        value: _this.currentNum,
        callback: function callback($$v) {
          _this.currentNum = $$v;
        } } })])]);


  } });exports.default = _default;

/***/ }),
/* 149 */
/*!*****************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/stepper/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _babelHelperVueJsxMergeProps = _interopRequireDefault(__webpack_require__(/*! @vue/babel-helper-vue-jsx-merge-props */ 14));

var _utils = __webpack_require__(/*! ../utils */ 15);
var _resetScroll = __webpack_require__(/*! ../utils/dom/reset-scroll */ 54);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var _createNamespace = (0, _utils.createNamespace)('stepper'),
createComponent = _createNamespace[0],
bem = _createNamespace[1];

var LONG_PRESS_START_TIME = 600;
var LONG_PRESS_INTERVAL = 200;var _default =
createComponent({
  props: {
    value: null,
    integer: Boolean,
    disabled: Boolean,
    inputWidth: [Number, String],
    buttonSize: [Number, String],
    asyncChange: Boolean,
    disableInput: Boolean,
    min: {
      type: [Number, String],
      default: 1 },

    max: {
      type: [Number, String],
      default: Infinity },

    step: {
      type: [Number, String],
      default: 1 },

    defaultValue: {
      type: [Number, String],
      default: 1 },

    showPlus: {
      type: Boolean,
      default: true },

    showMinus: {
      type: Boolean,
      default: true } },


  data: function data() {
    var value = this.range((0, _utils.isDef)(this.value) ? this.value : this.defaultValue);

    if (value !== +this.value) {
      this.$emit('input', value);
    }

    return {
      currentValue: value };

  },
  computed: {
    minusDisabled: function minusDisabled() {
      return this.disabled || this.currentValue <= this.min;
    },
    plusDisabled: function plusDisabled() {
      return this.disabled || this.currentValue >= this.max;
    },
    inputStyle: function inputStyle() {
      var style = {};

      if (this.inputWidth) {
        style.width = (0, _utils.addUnit)(this.inputWidth);
      }

      if (this.buttonSize) {
        style.height = (0, _utils.addUnit)(this.buttonSize);
      }

      return style;
    },
    buttonStyle: function buttonStyle() {
      var style = {};

      if (this.buttonSize) {
        var size = (0, _utils.addUnit)(this.buttonSize);
        style.width = size;
        style.height = size;
      }

      return style;
    } },

  watch: {
    value: function value(val) {
      if (val !== this.currentValue) {
        this.currentValue = this.format(val);
      }
    },
    currentValue: function currentValue(val) {
      this.$emit('input', val);
      this.$emit('change', val);
    } },

  methods: {
    // filter illegal characters
    format: function format(value) {
      value = String(value).replace(/[^0-9.-]/g, '');
      return value === '' ? 0 : this.integer ? Math.floor(value) : +value;
    },
    // limit value range
    range: function range(value) {
      return Math.max(Math.min(this.max, this.format(value)), this.min);
    },
    onInput: function onInput(event) {
      var value = event.target.value;
      var formatted = this.format(value);

      if (this.asyncChange) {
        event.target.value = this.currentValue;
        this.$emit('input', formatted);
        this.$emit('change', formatted);
      } else {
        if (+value !== formatted) {
          event.target.value = formatted;
        }

        this.currentValue = formatted;
      }
    },
    onChange: function onChange() {
      var type = this.type;

      if (this[type + "Disabled"]) {
        this.$emit('overlimit', type);
        return;
      }

      var diff = type === 'minus' ? -this.step : +this.step;
      var value = Math.round((this.currentValue + diff) * 100) / 100;

      if (this.asyncChange) {
        this.$emit('input', value);
        this.$emit('change', value);
      } else {
        this.currentValue = this.range(value);
      }

      this.$emit(type);
    },
    onFocus: function onFocus(event) {
      this.$emit('focus', event);
    },
    onBlur: function onBlur(event) {
      this.currentValue = this.range(this.currentValue);
      this.$emit('blur', event); // fix edge case when input is empty and min is 0

      if (this.currentValue === 0) {
        event.target.value = this.currentValue;
      }

      (0, _resetScroll.resetScroll)();
    },
    longPressStep: function longPressStep() {
      var _this = this;

      this.longPressTimer = setTimeout(function () {
        _this.onChange(_this.type);

        _this.longPressStep(_this.type);
      }, LONG_PRESS_INTERVAL);
    },
    onTouchStart: function onTouchStart() {
      var _this2 = this;

      clearTimeout(this.longPressTimer);
      this.isLongPress = false;
      this.longPressTimer = setTimeout(function () {
        _this2.isLongPress = true;

        _this2.onChange();

        _this2.longPressStep();
      }, LONG_PRESS_START_TIME);
    },
    onTouchEnd: function onTouchEnd(event) {
      clearTimeout(this.longPressTimer);

      if (this.isLongPress) {
        event.preventDefault();
      }
    } },

  render: function render() {
    var _this3 = this;

    var h = arguments[0];

    var createListeners = function createListeners(type) {
      return {
        on: {
          click: function click() {
            _this3.type = type;

            _this3.onChange();
          },
          touchstart: function touchstart() {
            _this3.type = type;

            _this3.onTouchStart(type);
          },
          touchend: _this3.onTouchEnd,
          touchcancel: _this3.onTouchEnd } };


    };

    return h("div", {
      "class": bem() },
    [h("button", (0, _babelHelperVueJsxMergeProps.default)([{
      "directives": [{
        name: "show",
        value: this.showMinus }],

      "style": this.buttonStyle,
      "class": bem('minus', {
        disabled: this.minusDisabled }) },

    createListeners('minus')])), h("input", {
      "attrs": {
        "type": "number",
        "role": "spinbutton",
        "aria-valuemax": this.max,
        "aria-valuemin": this.min,
        "aria-valuenow": this.currentValue,
        "disabled": this.disabled || this.disableInput },

      "class": bem('input'),
      "domProps": {
        "value": this.currentValue },

      "style": this.inputStyle,
      "on": {
        "input": this.onInput,
        "focus": this.onFocus,
        "blur": this.onBlur } }),

    h("button", (0, _babelHelperVueJsxMergeProps.default)([{
      "directives": [{
        name: "show",
        value: this.showPlus }],

      "style": this.buttonStyle,
      "class": bem('plus', {
        disabled: this.plusDisabled }) },

    createListeners('plus')]))]);
  } });exports.default = _default;

/***/ }),
/* 150 */
/*!******************************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/sku/components/SkuMessages.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _utils = __webpack_require__(/*! ../../utils */ 15);
var _cell = _interopRequireDefault(__webpack_require__(/*! ../../cell */ 51));
var _cellGroup = _interopRequireDefault(__webpack_require__(/*! ../../cell-group */ 75));
var _field = _interopRequireDefault(__webpack_require__(/*! ../../field */ 50));
var _email = __webpack_require__(/*! ../../utils/validate/email */ 151);
var _number = __webpack_require__(/*! ../../utils/validate/number */ 26);
var _SkuImgUploader = _interopRequireDefault(__webpack_require__(/*! ./SkuImgUploader */ 152));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var _createNamespace = (0, _utils.createNamespace)('sku-messages'),
createComponent = _createNamespace[0],
bem = _createNamespace[1],
t = _createNamespace[2];var _default2 =

createComponent({
  props: {
    messages: {
      type: Array,
      default: function _default() {
        return [];
      } },

    messageConfig: Object,
    goodsId: [Number, String] },

  data: function data() {
    return {
      messageValues: this.resetMessageValues(this.messages) };

  },
  watch: {
    messages: function messages(val) {
      this.messageValues = this.resetMessageValues(val);
    } },

  methods: {
    resetMessageValues: function resetMessageValues(messages) {
      return (messages || []).map(function () {
        return {
          value: '' };

      });
    },
    getType: function getType(message) {
      if (+message.multiple === 1) {
        return 'textarea';
      }

      if (message.type === 'id_no') {
        return 'text';
      }

      return message.datetime > 0 ? 'datetime-local' : message.type;
    },
    getMessages: function getMessages() {
      var _this = this;

      var messages = {};
      this.messageValues.forEach(function (item, index) {
        var value = item.value;

        if (_this.messages[index].datetime > 0) {
          value = value.replace(/T/g, ' ');
        }

        messages["message_" + index] = value;
      });
      return messages;
    },
    getCartMessages: function getCartMessages() {
      var _this2 = this;

      var messages = {};
      this.messageValues.forEach(function (item, index) {
        var value = item.value;
        var message = _this2.messages[index];

        if (message.datetime > 0) {
          value = value.replace(/T/g, ' ');
        }

        messages[message.name] = value;
      });
      return messages;
    },
    getPlaceholder: function getPlaceholder(message) {
      var type = +message.multiple === 1 ? 'textarea' : message.type;
      var map = this.messageConfig.placeholderMap || {};
      return message.placeholder || map[type] || t("placeholder." + type);
    },
    validateMessages: function validateMessages() {
      var values = this.messageValues;

      for (var i = 0; i < values.length; i++) {
        var value = values[i].value;
        var message = this.messages[i];

        if (value === '') {
          // 必填字段的校验
          if (String(message.required) === '1') {
            var textType = t(message.type === 'image' ? 'upload' : 'fill');
            return textType + message.name;
          }
        } else {
          if (message.type === 'tel' && !(0, _number.isNumber)(value)) {
            return t('invalid.tel');
          }

          if (message.type === 'mobile' && !/^\d{6,20}$/.test(value)) {
            return t('invalid.mobile');
          }

          if (message.type === 'email' && !(0, _email.isEmail)(value)) {
            return t('invalid.email');
          }

          if (message.type === 'id_no' && (value.length < 15 || value.length > 18)) {
            return t('invalid.id_no');
          }
        }
      }
    } },

  render: function render() {
    var _this3 = this;

    var h = arguments[0];
    return h(_cellGroup.default, {
      "class": bem() },
    [this.messages.map(function (message, index) {
      return message.type === 'image' ? h(_cell.default, {
        "class": bem('image-cell'),
        "attrs": {
          "value-class": bem('image-cell-value'),
          "label": t('imageLabel'),
          "title": message.name,
          "required": String(message.required) === '1' },

        "key": _this3.goodsId + "-" + index },
      [h(_SkuImgUploader.default, {
        "attrs": {
          "uploadImg": _this3.messageConfig.uploadImg,
          "maxSize": _this3.messageConfig.uploadMaxSize },

        "model": {
          value: _this3.messageValues[index].value,
          callback: function callback($$v) {
            _this3.messageValues[index].value = $$v;
          } } })]) :

      h(_field.default, {
        "attrs": {
          "maxlength": "200",
          "label": message.name,
          "required": String(message.required) === '1',
          "placeholder": _this3.getPlaceholder(message),
          "type": _this3.getType(message) },

        "key": _this3.goodsId + "-" + index,
        "model": {
          value: _this3.messageValues[index].value,
          callback: function callback($$v) {
            _this3.messageValues[index].value = $$v;
          } } });


    })]);
  } });exports.default = _default2;

/***/ }),
/* 151 */
/*!************************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/utils/validate/email.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.isEmail = isEmail; /* eslint-disable */
function isEmail(value) {
  var reg = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
  return reg.test(value);
}

/***/ }),
/* 152 */
/*!*********************************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/sku/components/SkuImgUploader.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _utils = __webpack_require__(/*! ../../utils */ 15);
var _icon = _interopRequireDefault(__webpack_require__(/*! ../../icon */ 37));
var _loading = _interopRequireDefault(__webpack_require__(/*! ../../loading */ 41));
var _uploader = _interopRequireDefault(__webpack_require__(/*! ../../uploader */ 153));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var _createNamespace = (0, _utils.createNamespace)('sku-img-uploader'),
createComponent = _createNamespace[0],
bem = _createNamespace[1],
t = _createNamespace[2];var _default =

createComponent({
  props: {
    value: String,
    uploadImg: Function,
    maxSize: {
      type: Number,
      default: 6 } },


  data: function data() {
    return {
      // 正在上传的图片 base64
      paddingImg: '',
      uploadFail: false };

  },
  methods: {
    afterReadFile: function afterReadFile(file) {
      var _this = this;

      // 上传文件
      this.paddingImg = file.content;
      this.uploadFail = false;
      this.uploadImg(file.file, file.content).then(function (img) {
        _this.$emit('input', img);

        _this.$nextTick(function () {
          _this.paddingImg = '';
        });
      }).catch(function () {
        _this.uploadFail = true;
      });
    },
    onOversize: function onOversize() {
      this.$toast(t('oversize', this.maxSize));
    },
    renderUploader: function renderUploader(content, disabled) {
      if (disabled === void 0) {
        disabled = false;
      }

      var h = this.$createElement;
      return h(_uploader.default, {
        "class": bem('uploader'),
        "attrs": {
          "disabled": disabled,
          "afterRead": this.afterReadFile,
          "maxSize": this.maxSize * 1024 * 1024 },

        "on": {
          "oversize": this.onOversize } },

      [h("div", {
        "class": bem('img') },
      [content])]);
    },
    renderMask: function renderMask() {
      var h = this.$createElement;
      return h("div", {
        "class": bem('mask') },
      [this.uploadFail ? [h(_icon.default, {
        "attrs": {
          "name": "warning-o",
          "size": "20px" } }),

      h("div", {
        "class": bem('warn-text'),
        "domProps": {
          "innerHTML": t('fail') } })] :

      h(_loading.default, {
        "attrs": {
          "type": "spinner",
          "size": "20px",
          "color": "white" } })]);


    } },

  render: function render() {
    var _this2 = this;

    var h = arguments[0];
    return h("div", {
      "class": bem() },
    [this.value && this.renderUploader([h("img", {
      "attrs": {
        "src": this.value } }),

    h(_icon.default, {
      "attrs": {
        "name": "clear" },

      "class": bem('delete'),
      "on": {
        "click": function click() {
          _this2.$emit('input', '');
        } } })],

    true), this.paddingImg && this.renderUploader([h("img", {
      "attrs": {
        "src": this.paddingImg } }),

    this.renderMask()], !this.uploadFail), !this.value && !this.paddingImg && this.renderUploader(h("div", {
      "class": bem('trigger') },
    [h(_icon.default, {
      "attrs": {
        "name": "photograph",
        "size": "22px" } })]))]);


  } });exports.default = _default;

/***/ }),
/* 153 */
/*!******************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/uploader/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/esm/extends */ 13));
var _utils = __webpack_require__(/*! ../utils */ 15);
var _utils2 = __webpack_require__(/*! ./utils */ 154);
var _icon = _interopRequireDefault(__webpack_require__(/*! ../icon */ 37));
var _image = _interopRequireDefault(__webpack_require__(/*! ../image */ 39));
var _imagePreview = _interopRequireDefault(__webpack_require__(/*! ../image-preview */ 113));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var _createNamespace = (0, _utils.createNamespace)('uploader'),
createComponent = _createNamespace[0],
bem = _createNamespace[1];var _default2 =

createComponent({
  inheritAttrs: false,
  model: {
    prop: 'fileList' },

  props: {
    disabled: Boolean,
    uploadText: String,
    afterRead: Function,
    beforeRead: Function,
    beforeDelete: Function,
    previewSize: [Number, String],
    name: {
      type: [Number, String],
      default: '' },

    accept: {
      type: String,
      default: 'image/*' },

    fileList: {
      type: Array,
      default: function _default() {
        return [];
      } },

    maxSize: {
      type: Number,
      default: Number.MAX_VALUE },

    maxCount: {
      type: Number,
      default: Number.MAX_VALUE },

    previewImage: {
      type: Boolean,
      default: true },

    previewFullImage: {
      type: Boolean,
      default: true },

    imageFit: {
      type: String,
      default: 'cover' },

    resultType: {
      type: String,
      default: 'dataUrl' } },


  computed: {
    detail: function detail() {
      return {
        name: this.name };

    },
    previewSizeWithUnit: function previewSizeWithUnit() {
      return (0, _utils.addUnit)(this.previewSize);
    } },

  methods: {
    onChange: function onChange(event) {
      var _this = this;

      var files = event.target.files;

      if (this.disabled || !files.length) {
        return;
      }

      files = files.length === 1 ? files[0] : [].slice.call(files);

      if (this.beforeRead) {
        var response = this.beforeRead(files, this.detail);

        if (!response) {
          this.resetInput();
          return;
        }

        if (response.then) {
          response.then(function () {
            _this.readFile(files);
          }).catch(this.resetInput);
          return;
        }
      }

      this.readFile(files);
    },
    readFile: function readFile(files) {
      var _this2 = this;

      var oversize = (0, _utils2.isOversize)(files, this.maxSize);

      if (Array.isArray(files)) {
        var maxCount = this.maxCount - this.fileList.length;

        if (files.length > maxCount) {
          files = files.slice(0, maxCount);
        }

        Promise.all(files.map(function (file) {
          return (0, _utils2.readFile)(file, _this2.resultType);
        })).then(function (contents) {
          var fileList = files.map(function (file, index) {
            return {
              file: file,
              content: contents[index] };

          });

          _this2.onAfterRead(fileList, oversize);
        });
      } else {
        (0, _utils2.readFile)(files, this.resultType).then(function (content) {
          _this2.onAfterRead({
            file: files,
            content: content },
          oversize);
        });
      }
    },
    onAfterRead: function onAfterRead(files, oversize) {
      if (oversize) {
        this.$emit('oversize', files, this.detail);
        return;
      }

      this.resetInput();
      this.$emit('input', [].concat(this.fileList, (0, _utils2.toArray)(files)));

      if (this.afterRead) {
        this.afterRead(files, this.detail);
      }
    },
    onDelete: function onDelete(file, index) {
      var _this3 = this;

      if (this.beforeDelete) {
        var response = this.beforeDelete(file, this.detail);

        if (!response) {
          return;
        }

        if (response.then) {
          response.then(function () {
            _this3.deleteFile(file, index);
          }).catch(_utils.noop);
          return;
        }
      }

      this.deleteFile(file, index);
    },
    deleteFile: function deleteFile(file, index) {
      var fileList = this.fileList.slice(0);
      fileList.splice(index, 1);
      this.$emit('input', fileList);
      this.$emit('delete', file);
    },
    resetInput: function resetInput() {
      /* istanbul ignore else */
      if (this.$refs.input) {
        this.$refs.input.value = '';
      }
    },
    onPreviewImage: function onPreviewImage(item) {
      if (!this.previewFullImage) {
        return;
      }

      var imageFiles = this.fileList.filter(function (item) {
        return (0, _utils2.isImageFile)(item);
      }).map(function (item) {
        return item.content || item.url;
      });
      (0, _imagePreview.default)({
        images: imageFiles,
        closeOnPopstate: true,
        startPosition: imageFiles.indexOf(item.content || item.url) });

    },
    onClickPreview: function onClickPreview(file) {
      this.$emit('click-preview', file, this.detail);
    },
    renderPreview: function renderPreview() {
      var _this4 = this;

      var h = this.$createElement;

      if (!this.previewImage) {
        return;
      }

      return this.fileList.map(function (item, index) {
        return h("div", {
          "class": bem('preview'),
          "on": {
            "click": function click() {
              _this4.onClickPreview(item);
            } } },

        [(0, _utils2.isImageFile)(item) ? h(_image.default, {
          "attrs": {
            "fit": _this4.imageFit,
            "src": item.content || item.url,
            "width": _this4.previewSize,
            "height": _this4.previewSize },

          "class": bem('preview-image'),
          "on": {
            "click": function click() {
              _this4.onPreviewImage(item);
            } } }) :

        h("div", {
          "class": bem('file'),
          "style": {
            width: _this4.previewSizeWithUnit,
            height: _this4.previewSizeWithUnit } },

        [h(_icon.default, {
          "class": bem('file-icon'),
          "attrs": {
            "name": "description" } }),

        h("div", {
          "class": [bem('file-name'), 'van-ellipsis'] },
        [item.file ? item.file.name : item.url])]), h(_icon.default, {
          "attrs": {
            "name": "delete" },

          "class": bem('preview-delete'),
          "on": {
            "click": function click() {
              _this4.onDelete(item, index);
            } } })]);


      });
    },
    renderUpload: function renderUpload() {
      var h = this.$createElement;

      if (this.fileList.length >= this.maxCount) {
        return;
      }

      var slot = this.slots();
      var Input = h("input", {
        "attrs": (0, _extends2.default)({}, this.$attrs, {
          "type": "file",
          "accept": this.accept,
          "disabled": this.disabled }),

        "ref": "input",
        "class": bem('input'),
        "on": {
          "change": this.onChange } });



      if (slot) {
        return h("div", {
          "class": bem('input-wrapper') },
        [slot, Input]);
      }

      var style;

      if (this.previewSize) {
        var size = this.previewSizeWithUnit;
        style = {
          width: size,
          height: size };

      }

      return h("div", {
        "class": bem('upload'),
        "style": style },
      [h(_icon.default, {
        "attrs": {
          "name": "plus" },

        "class": bem('upload-icon') }),
      this.uploadText && h("span", {
        "class": bem('upload-text') },
      [this.uploadText]), Input]);
    } },

  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": bem() },
    [h("div", {
      "class": bem('wrapper') },
    [this.renderPreview(), this.renderUpload()])]);
  } });exports.default = _default2;

/***/ }),
/* 154 */
/*!******************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/uploader/utils.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.toArray = toArray;exports.readFile = readFile;exports.isOversize = isOversize;exports.isImageUrl = isImageUrl;exports.isImageFile = isImageFile;function toArray(item) {
  if (Array.isArray(item)) {
    return item;
  }

  return [item];
}
function readFile(file, resultType) {
  return new Promise(function (resolve) {
    var reader = new FileReader();

    reader.onload = function (event) {
      resolve(event.target.result);
    };

    if (resultType === 'dataUrl') {
      reader.readAsDataURL(file);
    } else if (resultType === 'text') {
      reader.readAsText(file);
    }
  });
}
function isOversize(files, maxSize) {
  return toArray(files).some(function (file) {
    return file.size > maxSize;
  });
}
var IMAGE_REGEXP = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;
function isImageUrl(url) {
  return IMAGE_REGEXP.test(url);
}
function isImageFile(item) {
  // some special urls cannot be recognized
  // user can add `isImage` flag to mark it as an image url
  if (item.isImage) {
    return true;
  }

  if (item.file && item.file.type) {
    return item.file.type.indexOf('image') === 0;
  }

  if (item.url) {
    return isImageUrl(item.url);
  }

  if (item.content) {
    return item.content.indexOf('data:image') === 0;
  }

  return false;
}

/***/ }),
/* 155 */
/*!*****************************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/sku/components/SkuActions.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _babelHelperVueJsxMergeProps = _interopRequireDefault(__webpack_require__(/*! @vue/babel-helper-vue-jsx-merge-props */ 14));
var _utils = __webpack_require__(/*! ../../utils */ 15);
var _functional = __webpack_require__(/*! ../../utils/functional */ 27);
var _button = _interopRequireDefault(__webpack_require__(/*! ../../button */ 58));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // Types

var _createNamespace = (0, _utils.createNamespace)('sku-actions'),
createComponent = _createNamespace[0],
bem = _createNamespace[1],
t = _createNamespace[2];

function SkuActions(h, props, slots, ctx) {
  var createEmitter = function createEmitter(name) {
    return function () {
      props.skuEventBus.$emit(name);
    };
  };

  return h("div", (0, _babelHelperVueJsxMergeProps.default)([{
    "class": bem() },
  (0, _functional.inherit)(ctx)]), [props.showAddCartBtn && h(_button.default, {
    "attrs": {
      "size": "large",
      "type": "warning",
      "text": props.addCartText || t('addCart') },

    "on": {
      "click": createEmitter('sku:addCart') } }),

  h(_button.default, {
    "attrs": {
      "size": "large",
      "type": "danger",
      "text": props.buyText || t('buy') },

    "on": {
      "click": createEmitter('sku:buy') } })]);


}

SkuActions.props = {
  buyText: String,
  addCartText: String,
  skuEventBus: Object,
  showAddCartBtn: Boolean };var _default =

createComponent(SkuActions);exports.default = _default;

/***/ }),
/* 156 */
/*!****************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/slider/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _utils = __webpack_require__(/*! ../utils */ 15);
var _touch = __webpack_require__(/*! ../mixins/touch */ 31);
var _event = __webpack_require__(/*! ../utils/dom/event */ 33);

var _createNamespace = (0, _utils.createNamespace)('slider'),
createComponent = _createNamespace[0],
bem = _createNamespace[1];var _default =

createComponent({
  mixins: [_touch.TouchMixin],
  props: {
    disabled: Boolean,
    vertical: Boolean,
    activeColor: String,
    inactiveColor: String,
    min: {
      type: Number,
      default: 0 },

    max: {
      type: Number,
      default: 100 },

    step: {
      type: Number,
      default: 1 },

    value: {
      type: Number,
      default: 0 },

    barHeight: {
      type: [Number, String],
      default: 2 } },


  computed: {
    range: function range() {
      return this.max - this.min;
    } },

  methods: {
    onTouchStart: function onTouchStart(event) {
      if (this.disabled) {
        return;
      }

      this.touchStart(event);
      this.startValue = this.format(this.value);
      this.dragStatus = 'start';
    },
    onTouchMove: function onTouchMove(event) {
      if (this.disabled) {
        return;
      }

      if (this.dragStatus === 'start') {
        this.$emit('drag-start');
      }

      (0, _event.preventDefault)(event, true);
      this.touchMove(event);
      this.dragStatus = 'draging';
      var rect = this.$el.getBoundingClientRect();
      var delta = this.vertical ? this.deltaY : this.deltaX;
      var total = this.vertical ? rect.height : rect.width;
      var diff = delta / total * this.range;
      this.newValue = this.startValue + diff;
      this.updateValue(this.newValue);
    },
    onTouchEnd: function onTouchEnd() {
      if (this.disabled) {
        return;
      }

      if (this.dragStatus === 'draging') {
        this.updateValue(this.newValue, true);
        this.$emit('drag-end');
      }

      this.dragStatus = '';
    },
    onClick: function onClick(event) {
      event.stopPropagation();
      if (this.disabled) return;
      var rect = this.$el.getBoundingClientRect();
      var delta = this.vertical ? event.clientY - rect.top : event.clientX - rect.left;
      var total = this.vertical ? rect.height : rect.width;
      var value = delta / total * this.range + this.min;
      this.startValue = this.value;
      this.updateValue(value, true);
    },
    updateValue: function updateValue(value, end) {
      value = this.format(value);

      if (value !== this.value) {
        this.$emit('input', value);
      }

      if (end && value !== this.startValue) {
        this.$emit('change', value);
      }
    },
    format: function format(value) {
      return Math.round(Math.max(this.min, Math.min(value, this.max)) / this.step) * this.step;
    } },

  render: function render() {
    var _barStyle;

    var h = arguments[0];
    var vertical = this.vertical;
    var style = {
      background: this.inactiveColor };

    var mainAxis = vertical ? 'height' : 'width';
    var crossAxis = vertical ? 'width' : 'height';
    var barStyle = (_barStyle = {}, _barStyle[mainAxis] = (this.value - this.min) * 100 / this.range + "%", _barStyle[crossAxis] = (0, _utils.addUnit)(this.barHeight), _barStyle.background = this.activeColor, _barStyle);
    return h("div", {
      "style": style,
      "class": bem({
        disabled: this.disabled,
        vertical: vertical }),

      "on": {
        "click": this.onClick } },

    [h("div", {
      "class": bem('bar'),
      "style": barStyle },
    [h("div", {
      "attrs": {
        "role": "slider",
        "tabindex": this.disabled ? -1 : 0,
        "aria-valuemin": this.min,
        "aria-valuenow": this.value,
        "aria-valuemax": this.max,
        "aria-orientation": this.vertical ? 'vertical' : 'horizontal' },

      "class": bem('button-wrapper'),
      "on": {
        "touchstart": this.onTouchStart,
        "touchmove": this.onTouchMove,
        "touchend": this.onTouchEnd,
        "touchcancel": this.onTouchEnd } },

    [this.slots('button') || h("div", {
      "class": bem('button') })])])]);

  } });exports.default = _default;

/***/ }),
/* 157 */
/*!**************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/step/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _utils = __webpack_require__(/*! ../utils */ 15);
var _constant = __webpack_require__(/*! ../utils/constant */ 28);
var _icon = _interopRequireDefault(__webpack_require__(/*! ../icon */ 37));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var _createNamespace = (0, _utils.createNamespace)('step'),
createComponent = _createNamespace[0],
bem = _createNamespace[1];var _default =

createComponent({
  beforeCreate: function beforeCreate() {
    var steps = this.$parent.steps;
    var index = this.$parent.slots().indexOf(this.$vnode);
    steps.splice(index === -1 ? steps.length : index, 0, this);
  },
  beforeDestroy: function beforeDestroy() {
    var index = this.$parent.steps.indexOf(this);

    if (index > -1) {
      this.$parent.steps.splice(index, 1);
    }
  },
  computed: {
    status: function status() {
      var index = this.$parent.steps.indexOf(this);
      var active = this.$parent.active;

      if (index < active) {
        return 'finish';
      }

      if (index === active) {
        return 'process';
      }
    } },

  render: function render() {
    var _ref;

    var h = arguments[0];
    var slots = this.slots,
    status = this.status;
    var _this$$parent = this.$parent,
    activeIcon = _this$$parent.activeIcon,
    activeColor = _this$$parent.activeColor,
    inactiveIcon = _this$$parent.inactiveIcon,
    direction = _this$$parent.direction;
    var titleStyle = status === 'process' && {
      color: activeColor };


    function Circle() {
      if (status === 'process') {
        return slots('active-icon') || h(_icon.default, {
          "class": bem('icon'),
          "attrs": {
            "name": activeIcon,
            "color": activeColor } });


      }

      var inactiveIconSlot = slots('inactive-icon');

      if (inactiveIcon || inactiveIconSlot) {
        return inactiveIconSlot || h(_icon.default, {
          "class": bem('icon'),
          "attrs": {
            "name": inactiveIcon } });


      }

      return h("i", {
        "class": bem('circle') });

    }

    return h("div", {
      "class": [_constant.BORDER, bem([direction, (_ref = {}, _ref[status] = status, _ref)])] },
    [h("div", {
      "class": bem('title'),
      "style": titleStyle },
    [this.slots()]), h("div", {
      "class": bem('circle-container') },
    [Circle()]), h("div", {
      "class": bem('line') })]);

  } });exports.default = _default;

/***/ }),
/* 158 */
/*!***************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/steps/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _utils = __webpack_require__(/*! ../utils */ 15);
var _constant = __webpack_require__(/*! ../utils/constant */ 28);

var _createNamespace = (0, _utils.createNamespace)('steps'),
createComponent = _createNamespace[0],
bem = _createNamespace[1];var _default =

createComponent({
  props: {
    inactiveIcon: String,
    active: {
      type: Number,
      default: 0 },

    direction: {
      type: String,
      default: 'horizontal' },

    activeColor: {
      type: String,
      default: _constant.GREEN },

    activeIcon: {
      type: String,
      default: 'checked' } },


  data: function data() {
    return {
      steps: [] };

  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": bem([this.direction]) },
    [h("div", {
      "class": bem('items') },
    [this.slots()])]);
  } });exports.default = _default;

/***/ }),
/* 159 */
/*!********************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/submit-bar/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _babelHelperVueJsxMergeProps = _interopRequireDefault(__webpack_require__(/*! @vue/babel-helper-vue-jsx-merge-props */ 14));
var _utils = __webpack_require__(/*! ../utils */ 15);
var _functional = __webpack_require__(/*! ../utils/functional */ 27);
var _button = _interopRequireDefault(__webpack_require__(/*! ../button */ 58));
var _icon = _interopRequireDefault(__webpack_require__(/*! ../icon */ 37));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // Types

var _createNamespace = (0, _utils.createNamespace)('submit-bar'),
createComponent = _createNamespace[0],
bem = _createNamespace[1],
t = _createNamespace[2];

function SubmitBar(h, props, slots, ctx) {
  var tip = props.tip,
  price = props.price,
  tipIcon = props.tipIcon;

  function Text() {
    if (typeof price === 'number') {
      var priceText = props.currency + " " + (price / 100).toFixed(props.decimalLength);
      return h("div", {
        "class": bem('text') },
      [h("span", [props.label || t('label')]), h("span", {
        "class": bem('price') },
      [priceText]), props.suffixLabel && h("span", {
        "class": bem('suffix-label') },
      [props.suffixLabel])]);
    }
  }

  function Tip() {
    if (slots.tip || tip) {
      return h("div", {
        "class": bem('tip') },
      [tipIcon && h(_icon.default, {
        "class": bem('tip-icon'),
        "attrs": {
          "name": tipIcon } }),

      tip && h("span", {
        "class": bem('tip-text') },
      [tip]), slots.tip && slots.tip()]);
    }
  }

  return h("div", (0, _babelHelperVueJsxMergeProps.default)([{
    "class": bem({
      'safe-area-inset-bottom': props.safeAreaInsetBottom }) },

  (0, _functional.inherit)(ctx)]), [slots.top && slots.top(), Tip(), h("div", {
    "class": bem('bar') },
  [slots.default && slots.default(), Text(), h(_button.default, {
    "attrs": {
      "square": true,
      "size": "large",
      "type": props.buttonType,
      "loading": props.loading,
      "disabled": props.disabled,
      "text": props.loading ? '' : props.buttonText },

    "class": bem('button'),
    "on": {
      "click": function click() {
        (0, _functional.emit)(ctx, 'submit');
      } } })])]);


}

SubmitBar.props = {
  tip: String,
  label: String,
  price: Number,
  tipIcon: String,
  loading: Boolean,
  disabled: Boolean,
  buttonText: String,
  suffixLabel: String,
  safeAreaInsetBottom: Boolean,
  decimalLength: {
    type: Number,
    default: 2 },

  currency: {
    type: String,
    default: '¥' },

  buttonType: {
    type: String,
    default: 'danger' } };var _default =


createComponent(SubmitBar);exports.default = _default;

/***/ }),
/* 160 */
/*!********************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/swipe-cell/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _utils = __webpack_require__(/*! ../utils */ 15);
var _number = __webpack_require__(/*! ../utils/format/number */ 49);
var _event = __webpack_require__(/*! ../utils/dom/event */ 33);
var _touch = __webpack_require__(/*! ../mixins/touch */ 31);
var _clickOutside = __webpack_require__(/*! ../mixins/click-outside */ 107);

var _createNamespace = (0, _utils.createNamespace)('swipe-cell'),
createComponent = _createNamespace[0],
bem = _createNamespace[1];

var THRESHOLD = 0.15;var _default =
createComponent({
  mixins: [_touch.TouchMixin, (0, _clickOutside.ClickOutsideMixin)({
    event: 'touchstart',
    method: 'onClick' })],

  props: {
    onClose: Function,
    disabled: Boolean,
    leftWidth: Number,
    rightWidth: Number,
    stopPropagation: Boolean,
    name: {
      type: [Number, String],
      default: '' } },


  data: function data() {
    return {
      offset: 0,
      dragging: false };

  },
  computed: {
    computedLeftWidth: function computedLeftWidth() {
      return this.leftWidth || this.getWidthByRef('left');
    },
    computedRightWidth: function computedRightWidth() {
      return this.rightWidth || this.getWidthByRef('right');
    } },

  methods: {
    getWidthByRef: function getWidthByRef(ref) {
      if (this.$refs[ref]) {
        var rect = this.$refs[ref].getBoundingClientRect();
        return rect.width;
      }

      return 0;
    },
    open: function open(position) {
      var offset = position === 'left' ? this.computedLeftWidth : -this.computedRightWidth;
      this.swipeMove(offset);
      this.resetSwipeStatus();
    },
    close: function close() {
      this.offset = 0;
    },
    resetSwipeStatus: function resetSwipeStatus() {
      this.swiping = false;
      this.opened = true;
    },
    swipeMove: function swipeMove(offset) {
      if (offset === void 0) {
        offset = 0;
      }

      this.offset = (0, _number.range)(offset, -this.computedRightWidth, this.computedLeftWidth);

      if (this.offset) {
        this.swiping = true;
      } else {
        this.opened = false;
      }
    },
    swipeLeaveTransition: function swipeLeaveTransition(direction) {
      var offset = this.offset,
      computedLeftWidth = this.computedLeftWidth,
      computedRightWidth = this.computedRightWidth;
      var threshold = this.opened ? 1 - THRESHOLD : THRESHOLD; // right

      if (direction === 'right' && -offset > computedRightWidth * threshold && computedRightWidth > 0) {
        this.open('right'); // left
      } else if (direction === 'left' && offset > computedLeftWidth * threshold && computedLeftWidth > 0) {
        this.open('left'); // reset
      } else {
        this.swipeMove(0);
      }
    },
    startDrag: function startDrag(event) {
      if (this.disabled) {
        return;
      }

      this.dragging = true;
      this.startOffset = this.offset;
      this.touchStart(event);
    },
    onDrag: function onDrag(event) {
      if (this.disabled) {
        return;
      }

      this.touchMove(event);

      if (this.direction === 'horizontal') {
        var shouldPrevent = !this.opened || this.deltaX * this.startOffset < 0;

        if (shouldPrevent) {
          (0, _event.preventDefault)(event, this.stopPropagation);
        }

        this.swipeMove(this.deltaX + this.startOffset);
      }
    },
    endDrag: function endDrag() {
      if (this.disabled) {
        return;
      }

      this.dragging = false;

      if (this.swiping) {
        this.swipeLeaveTransition(this.offset > 0 ? 'left' : 'right');
      }
    },
    onClick: function onClick(position) {
      if (position === void 0) {
        position = 'outside';
      }

      this.$emit('click', position);

      if (!this.offset) {
        return;
      }

      if (this.onClose) {
        this.onClose(position, this, {
          name: this.name });

      } else {
        this.swipeMove(0);
      }
    } },

  render: function render() {
    var _this = this;

    var h = arguments[0];

    var onClick = function onClick(position, stop) {
      return function (event) {
        if (stop) {
          event.stopPropagation();
        }

        _this.onClick(position);
      };
    };

    var wrapperStyle = {
      transform: "translate3d(" + this.offset + "px, 0, 0)",
      transition: this.dragging ? 'none' : '.6s cubic-bezier(0.18, 0.89, 0.32, 1)' };

    return h("div", {
      "class": bem(),
      "on": {
        "click": onClick('cell'),
        "touchstart": this.startDrag,
        "touchmove": this.onDrag,
        "touchend": this.endDrag,
        "touchcancel": this.endDrag } },

    [h("div", {
      "class": bem('wrapper'),
      "style": wrapperStyle,
      "on": {
        "transitionend": function transitionend() {
          _this.swiping = false;
        } } },

    [this.slots('left') && h("div", {
      "ref": "left",
      "class": bem('left'),
      "on": {
        "click": onClick('left', true) } },

    [this.slots('left')]), this.slots(), this.slots('right') && h("div", {
      "ref": "right",
      "class": bem('right'),
      "on": {
        "click": onClick('right', true) } },

    [this.slots('right')])])]);
  } });exports.default = _default;

/***/ }),
/* 161 */
/*!****************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/tabbar/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _utils = __webpack_require__(/*! ../utils */ 15);
var _relation = __webpack_require__(/*! ../mixins/relation */ 69);
var _constant = __webpack_require__(/*! ../utils/constant */ 28);

var _createNamespace = (0, _utils.createNamespace)('tabbar'),
createComponent = _createNamespace[0],
bem = _createNamespace[1];var _default =

createComponent({
  mixins: [(0, _relation.ParentMixin)('vanTabbar')],
  props: {
    route: Boolean,
    activeColor: String,
    inactiveColor: String,
    safeAreaInsetBottom: Boolean,
    value: {
      type: [Number, String],
      default: 0 },

    border: {
      type: Boolean,
      default: true },

    fixed: {
      type: Boolean,
      default: true },

    zIndex: {
      type: Number,
      default: 1 } },


  watch: {
    value: 'setActiveItem',
    children: 'setActiveItem' },

  methods: {
    setActiveItem: function setActiveItem() {
      var _this = this;

      this.children.forEach(function (item, index) {
        item.active = (item.name || index) === _this.value;
      });
    },
    onChange: function onChange(active) {
      if (active !== this.value) {
        this.$emit('input', active);
        this.$emit('change', active);
      }
    } },

  render: function render() {
    var _ref;

    var h = arguments[0];
    return h("div", {
      "style": {
        zIndex: this.zIndex },

      "class": [(_ref = {}, _ref[_constant.BORDER_TOP_BOTTOM] = this.border, _ref), bem({
        fixed: this.fixed,
        'safe-area-inset-bottom': this.safeAreaInsetBottom })] },

    [this.slots()]);
  } });exports.default = _default;

/***/ }),
/* 162 */
/*!*********************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/tabbar-item/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/esm/extends */ 13));
var _utils = __webpack_require__(/*! ../utils */ 15);
var _icon = _interopRequireDefault(__webpack_require__(/*! ../icon */ 37));
var _info = _interopRequireDefault(__webpack_require__(/*! ../info */ 38));
var _router = __webpack_require__(/*! ../utils/router */ 53);
var _relation = __webpack_require__(/*! ../mixins/relation */ 69);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var _createNamespace = (0, _utils.createNamespace)('tabbar-item'),
createComponent = _createNamespace[0],
bem = _createNamespace[1];var _default =

createComponent({
  mixins: [(0, _relation.ChildrenMixin)('vanTabbar')],
  props: (0, _extends2.default)({}, _router.routeProps, {
    dot: Boolean,
    icon: String,
    name: [Number, String],
    info: [Number, String] }),

  data: function data() {
    return {
      active: false };

  },
  computed: {
    routeActive: function routeActive() {
      var to = this.to,
      $route = this.$route;

      if (to && $route) {
        var config = (0, _utils.isObj)(to) ? to : {
          path: to };

        var pathMatched = config.path === $route.path;
        var nameMatched = (0, _utils.isDef)(config.name) && config.name === $route.name;
        return pathMatched || nameMatched;
      }
    } },

  methods: {
    onClick: function onClick(event) {
      this.parent.onChange(this.name || this.index);
      this.$emit('click', event);
      (0, _router.route)(this.$router, this);
    } },

  render: function render() {
    var h = arguments[0];
    var icon = this.icon,
    slots = this.slots;
    var active = this.parent.route ? this.routeActive : this.active;
    var color = this.parent[active ? 'activeColor' : 'inactiveColor'];
    return h("div", {
      "class": bem({
        active: active }),

      "style": {
        color: color },

      "on": {
        "click": this.onClick } },

    [h("div", {
      "class": bem('icon', {
        dot: this.dot }) },

    [slots('icon', {
      active: active }) ||
    icon && h(_icon.default, {
      "attrs": {
        "name": icon } }),

    h(_info.default, {
      "attrs": {
        "info": this.info } })]),

    h("div", {
      "class": bem('text') },
    [slots('default', {
      active: active })])]);

  } });exports.default = _default;

/***/ }),
/* 163 */
/*!*********************************************************************!*\
  !*** C:/works/lab-mobile/node_modules/vant/es/tree-select/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _babelHelperVueJsxMergeProps = _interopRequireDefault(__webpack_require__(/*! @vue/babel-helper-vue-jsx-merge-props */ 14));
var _utils = __webpack_require__(/*! ../utils */ 15);
var _functional = __webpack_require__(/*! ../utils/functional */ 27);
var _icon = _interopRequireDefault(__webpack_require__(/*! ../icon */ 37));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // Types

var _createNamespace = (0, _utils.createNamespace)('tree-select'),
createComponent = _createNamespace[0],
bem = _createNamespace[1];

function TreeSelect(h, props, slots, ctx) {
  var height = props.height,
  items = props.items,
  mainActiveIndex = props.mainActiveIndex,
  activeId = props.activeId;
  var selectedItem = items[mainActiveIndex] || {};
  var subItems = selectedItem.children || [];
  var isMultiple = Array.isArray(activeId);

  function isActiveItem(id) {
    return isMultiple ? activeId.indexOf(id) !== -1 : activeId === id;
  }

  var Nav = items.map(function (item, index) {
    return h("div", {
      "key": index,
      "class": ['van-ellipsis', bem('nav-item', {
        active: mainActiveIndex === index,
        disabled: item.disabled })],

      "on": {
        "click": function click() {
          if (!item.disabled) {
            (0, _functional.emit)(ctx, 'click-nav', index);
            (0, _functional.emit)(ctx, 'update:main-active-index', index); // compatible for old usage, should be removed in next major version

            (0, _functional.emit)(ctx, 'navclick', index);
          }
        } } },

    [item.text]);
  });

  function Content() {
    if (slots.content) {
      return slots.content();
    }

    return subItems.map(function (item) {
      return h("div", {
        "key": item.id,
        "class": ['van-ellipsis', bem('item', {
          active: isActiveItem(item.id),
          disabled: item.disabled })],

        "on": {
          "click": function click() {
            if (!item.disabled) {
              var newActiveId = item.id;

              if (isMultiple) {
                newActiveId = activeId.slice();
                var index = newActiveId.indexOf(item.id);

                if (index !== -1) {
                  newActiveId.splice(index, 1);
                } else {
                  newActiveId.push(item.id);
                }
              }

              (0, _functional.emit)(ctx, 'click-item', item);
              (0, _functional.emit)(ctx, 'update:active-id', newActiveId); // compatible for old usage, should be removed in next major version

              (0, _functional.emit)(ctx, 'itemclick', item);
            }
          } } },

      [item.text, isActiveItem(item.id) && h(_icon.default, {
        "attrs": {
          "name": "checked",
          "size": "16px" },

        "class": bem('selected') })]);

    });
  }

  return h("div", (0, _babelHelperVueJsxMergeProps.default)([{
    "class": bem(),
    "style": {
      height: (0, _utils.addUnit)(height) } },

  (0, _functional.inherit)(ctx)]), [h("div", {
    "class": bem('nav') },
  [Nav]), h("div", {
    "class": bem('content') },
  [Content()])]);
}

TreeSelect.props = {
  items: {
    type: Array,
    default: function _default() {
      return [];
    } },

  height: {
    type: [Number, String],
    default: 300 },

  activeId: {
    type: [Number, String, Array],
    default: 0 },

  mainActiveIndex: {
    type: Number,
    default: 0 } };var _default2 =


createComponent(TreeSelect);exports.default = _default2;

/***/ }),
/* 164 */
/*!****************************************************************!*\
  !*** C:/works/lab-mobile/main.js?{"page":"pages%2Flab%2Flab"} ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _lab = _interopRequireDefault(__webpack_require__(/*! ./pages/lab/lab.vue */ 165));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_lab.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */
/*!**************************************************************************!*\
  !*** C:/works/lab-mobile/main.js?{"page":"pages%2Fapproval%2Fapproval"} ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _approval = _interopRequireDefault(__webpack_require__(/*! ./pages/approval/approval.vue */ 173));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_approval.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */
/*!********************************************************************************!*\
  !*** C:/works/lab-mobile/main.js?{"page":"pages%2Fconsumables%2Fconsumables"} ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _consumables = _interopRequireDefault(__webpack_require__(/*! ./pages/consumables/consumables.vue */ 179));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_consumables.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */
/*!******************************************************************!*\
  !*** C:/works/lab-mobile/main.js?{"page":"pages%2Fexam%2Fexam"} ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _exam = _interopRequireDefault(__webpack_require__(/*! ./pages/exam/exam.vue */ 185));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_exam.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ })
]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map