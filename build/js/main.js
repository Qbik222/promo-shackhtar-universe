"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(function () {
  var apiURL = 'https://fav-prom.com/api_your_promo';
  var getActiveWeek = function getActiveWeek(promoStartDate, weekDuration) {
    var currentDate = new Date();
    var weekDates = [];
    var Day = 24 * 60 * 60 * 1000;
    var Week = weekDuration * Day;
    var formatDate = function formatDate(date) {
      return "".concat(date.getDate().toString().padStart(2, "0"), ".").concat((date.getMonth() + 1).toString().padStart(2, "0"));
    };
    var calculateWeekPeriod = function calculateWeekPeriod(weekIndex) {
      var baseStart = promoStartDate.getTime();
      var start = new Date(baseStart + weekIndex * Week);
      var end = new Date(start.getTime() + (weekDuration * Day - 1));
      return {
        start: start,
        end: end
      };
    };
    var activeWeekIndex = null;

    // Перевірка поточного тижня
    for (var i = 0; i < 10; i++) {
      // Обмежуємо 10 тижнями (якщо потрібно більше, просто змініть лічильник)
      var _calculateWeekPeriod = calculateWeekPeriod(i),
        start = _calculateWeekPeriod.start,
        end = _calculateWeekPeriod.end;
      if (currentDate >= start && currentDate <= end) {
        activeWeekIndex = i + 1;
        break;
      }
    }
    return activeWeekIndex;
  };
  var promoStartDate = new Date("2025-05-05T00:00:00");
  var weekDuration = 10;
  var isVerifiedUser = false;
  var periodAmount = 2; // кількість періодів в акції, треба для кешування інфи з табли

  var tableData = [];
  var activeWeek = getActiveWeek(promoStartDate, weekDuration) || 1;
  // let activeWeek = 2

  if (activeWeek > 2) activeWeek = 2;
  var mainPage = document.querySelector(".fav-page"),
    unauthMsgs = document.querySelectorAll('.unauth-msg'),
    participateBtns = document.querySelectorAll('.part-btn'),
    redirectBtns = document.querySelectorAll('.btn-join'),
    loader = document.querySelector(".spinner-overlay");
  var ukLeng = document.querySelector('#ukLeng');
  var enLeng = document.querySelector('#enLeng');
  var toggleClasses = function toggleClasses(elements, className) {
    return elements.forEach(function (el) {
      return el.classList.toggle("".concat(className));
    });
  };
  var toggleTranslates = function toggleTranslates(elements, dataAttr) {
    return elements.forEach(function (el) {
      el.setAttribute('data-translate', "".concat(dataAttr));
      el.innerHTML = i18nData[dataAttr] || '*----NEED TO BE TRANSLATED----*   key:  ' + dataAttr;
      el.removeAttribute('data-translate');
    });
  };
  var loaderBtn = false;
  var locale = "en";
  // let locale = sessionStorage.getItem("locale") || "uk"

  if (ukLeng) locale = 'uk';
  if (enLeng) locale = 'en';
  var debug = true;
  if (debug) hideLoader();
  var i18nData = {};
  var translateState = true;
  var userId = null;
  // let userId = Number(sessionStorage.getItem("userId")) ?? null

  var request = function request(link, extraOptions) {
    return fetch(apiURL + link, _objectSpread({
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }, extraOptions || {})).then(function (res) {
      if (!res.ok) throw new Error('API error');
      return res.json();
    })["catch"](function (err) {
      console.error('API request failed:', err);
      reportError(err);
      document.querySelector('.fav-page').style.display = 'none';
      if (window.location.href.startsWith("https://www.favbet.hr/")) {
        window.location.href = '/promocije/promocija/stub/';
      } else {
        window.location.href = '/promos/promo/stub/';
      }
      return Promise.reject(err);
    });
  };
  function hideLoader() {
    loader.classList.add("hide");
    document.body.style.overflow = "auto";
    mainPage.classList.remove("loading");
  }
  function init() {
    return _init.apply(this, arguments);
  }
  function _init() {
    _init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var attempts, maxAttempts, attemptInterval, tryDetectUserId, quickCheckAndRender, waitForUserId;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            quickCheckAndRender = function _quickCheckAndRender() {
              checkUserAuth().then(loadUsers).then(function () {
                setTimeout(hideLoader, 300);
                document.querySelectorAll(".table__tabs-item").forEach(function (tab, i) {
                  tab.classList.remove('active');
                  if (i === activeWeek - 1) tab.classList.add('active');
                });
                // renderUsers(activeWeek, tableData);
                participateBtns.forEach(function (btn) {
                  return btn.addEventListener('click', participate);
                });
              });
            };
            tryDetectUserId = function _tryDetectUserId() {
              if (window.store) {
                var state = window.store.getState();
                userId = state.auth.isAuthorized && state.auth.id || '';
              } else if (window.g_user_id) {
                userId = window.g_user_id;
              }
            };
            attempts = 0;
            maxAttempts = 20;
            attemptInterval = 50;
            waitForUserId = new Promise(function (resolve) {
              var interval = setInterval(function () {
                tryDetectUserId();
                if (userId || attempts >= maxAttempts) {
                  quickCheckAndRender();
                  clearInterval(interval);
                  resolve();
                }
                attempts++;
              }, attemptInterval);
            });
            _context.next = 8;
            return waitForUserId;
          case 8:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _init.apply(this, arguments);
  }
  function loadTranslations() {
    return request("/new-translates/".concat(locale)).then(function (json) {
      i18nData = json;
      translate();
      var mutationObserver = new MutationObserver(function (mutations) {
        mutationObserver.disconnect();
        translate();
        mutationObserver.observe(targetNode, {
          childList: true,
          subtree: true
        });
      });
      mutationObserver.observe(document.getElementById("hardcoreTennis"), {
        childList: true,
        subtree: true
      });
    });
  }
  function checkUserAuth() {
    console.log(userId);
    if (userId) {
      var _iterator = _createForOfIteratorHelper(unauthMsgs),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var unauthMes = _step.value;
          unauthMes.classList.add('hide');
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return request("/favuser/".concat(userId, "?nocache=1")).then(function (res) {
        if (res.userid) {
          participateBtns.forEach(function (item) {
            return item.classList.add('hide');
          });
          redirectBtns.forEach(function (item) {
            return item.classList.remove('hide');
          });
          isVerifiedUser = true;
          console.log(isVerifiedUser);
        } else {
          participateBtns.forEach(function (item) {
            return item.classList.remove('hide');
          });
          redirectBtns.forEach(function (item) {
            return item.classList.add('hide');
          });
          isVerifiedUser = false;
        }
      });
    } else {
      var _iterator2 = _createForOfIteratorHelper(redirectBtns),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var redirectBtn = _step2.value;
          redirectBtn.classList.add('hide');
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      var _iterator3 = _createForOfIteratorHelper(participateBtns),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var participateBtn = _step3.value;
          participateBtn.classList.add('hide');
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      var _iterator4 = _createForOfIteratorHelper(unauthMsgs),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var _unauthMes = _step4.value;
          _unauthMes.classList.remove('hide');
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      return Promise.resolve(false);
    }
  }
  function reportError(err) {
    var reportData = {
      origin: window.location.href,
      userid: userId,
      errorText: (err === null || err === void 0 ? void 0 : err.error) || (err === null || err === void 0 ? void 0 : err.text) || (err === null || err === void 0 ? void 0 : err.message) || 'Unknown error',
      type: (err === null || err === void 0 ? void 0 : err.name) || 'UnknownError',
      stack: (err === null || err === void 0 ? void 0 : err.stack) || ''
    };
    fetch('https://fav-prom.com/api-cms/reports/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reportData)
    })["catch"](console.warn);
  }
  function translate() {
    var elems = document.querySelectorAll('[data-translate]');
    if (elems && elems.length) {
      if (translateState) {
        elems.forEach(function (elem) {
          var key = elem.getAttribute('data-translate');
          elem.innerHTML = i18nData[key] || '*----NEED TO BE TRANSLATED----*   key:  ' + key;
          if (i18nData[key]) {
            elem.removeAttribute('data-translate');
          }
        });
      } else {
        console.log("translation works!");
      }
    }
    if (locale === 'en') {
      mainPage.classList.add('en');
    }
    refreshLocalizedClass(mainPage);
  }
  function refreshLocalizedClass(element) {
    if (!element) {
      return;
    }
    for (var _i = 0, _arr = ['uk', 'en']; _i < _arr.length; _i++) {
      var lang = _arr[_i];
      element.classList.remove(baseCssClass + lang);
    }
    element.classList.add(baseCssClass + locale);
  }
  function renderUsers(weekNum) {
    var userData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    weekNum = Number(weekNum);
    userData = userData.find(function (week) {
      return week.week === weekNum;
    }).users;
    console.log(userData);
    var currentUser = userData.find(function (user) {
      return user.userid === userId;
    });
    console.log(userId);
    console.log(currentUser);
    console.log(isVerifiedUser);
    if (userId && !currentUser && isVerifiedUser) {
      userData = [].concat(_toConsumableArray(userData), [{
        userid: userId,
        points: 0
      }]);
    }
    console.log(userData);
    populateUsersTable(userData, userId, weekNum, currentUser, isVerifiedUser);
  }
  function populateUsersTable(users, currentUserId, week, currentUser, isVerifiedUser) {
    console.log(users);
    resultsTable.innerHTML = '';
    resultsTableOther.innerHTML = '';
    if (!(users !== null && users !== void 0 && users.length)) return;
    var isTopCurrentUser = currentUser && users.slice(0, 10).some(function (user) {
      return user.userid === currentUserId;
    });
    var topUsersLength = !userId || isTopCurrentUser ? 13 : 10;
    var topUsers = users.slice(0, topUsersLength);

    // console.log(users);
    topUsers.forEach(function (user) {
      displayUser(user, user.userid === currentUserId, resultsTable, topUsers, isTopCurrentUser, week);
    });
    // console.log(isTopCurrentUser)
    console.log(isVerifiedUser);
    if (isVerifiedUser && !currentUser) {
      console.log('user verified');
      displayUser(currentUser, true, resultsTableOther, users, false, week);
    }
    if (!isTopCurrentUser && currentUser) {
      isVerifiedUser = false;
      displayUser(currentUser, true, resultsTableOther, users, false, week);
    }
  }
  function displayUser(user, isCurrentUser, table, users, isTopCurrentUser, week) {
    var renderRow = function renderRow(userData) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _options$highlight = options.highlight,
        highlight = _options$highlight === void 0 ? false : _options$highlight,
        _options$neighbor = options.neighbor,
        neighbor = _options$neighbor === void 0 ? false : _options$neighbor;
      var userRow = document.createElement('div');
      userRow.classList.add('table__row');
      var userPlace = users.indexOf(userData) + 1;
      var prizeKey = debug ? null : getPrizeTranslationKey(userPlace, week);
      if (userPlace <= 3) {
        userRow.classList.add("place".concat(userPlace));
      }
      if (highlight || isCurrentUser && !neighbor) {
        userRow.classList.add('you');
      } else if (neighbor) {
        userRow.classList.add('_neighbor');
      }
      userRow.innerHTML = "\n            <div class=\"table__row-item\">\n                ".concat(userPlace < 10 ? '0' + userPlace : userPlace, "\n                ").concat(isCurrentUser && !neighbor ? '<span class="you">' + translateKey("you") + '</span>' : '', "\n            </div>\n            <div class=\"table__row-item\">\n                ").concat(isCurrentUser && !neighbor ? userData.userid : maskUserId(userData.userid), "\n            </div>\n            <div class=\"table__row-item\">\n                ").concat(Number(userData.points).toFixed(2), "\n            </div>\n            <div class=\"table__row-item\">\n                ").concat(prizeKey ? translateKey(prizeKey) : ' - ', "\n            </div>\n        ");
      table.append(userRow);
    };
    if (isCurrentUser && !isTopCurrentUser) {
      var index = users.indexOf(user);
      if (users[index - 1]) {
        renderRow(users[index - 1], {
          neighbor: true
        });
      }
      renderRow(user, {
        highlight: true
      });
      if (users[index + 1]) {
        renderRow(users[index + 1], {
          neighbor: true
        });
      }
    } else {
      renderRow(user);
    }
  }
  function translateKey(key, defaultValue) {
    if (!key) {
      return;
    }
    var needKey = debug ? key : "*----NEED TO BE TRANSLATED----* key: ".concat(key);
    defaultValue = needKey || key;
    return i18nData[key] || defaultValue;
  }
  function maskUserId(userId) {
    return "**" + userId.toString().slice(2);
  }
  function getPrizeTranslationKey(place, week) {
    if (place <= 3) return "prize_".concat(week, "-").concat(place);
    if (place <= 10) return "prize_".concat(week, "-4-10");
    if (place <= 25) return "prize_".concat(week, "-11-25");
    if (place <= 50) return "prize_".concat(week, "-26-50");
    if (place <= 75) return "prize_".concat(week, "-51-75");
    if (place <= 100) return "prize_".concat(week, "-76-100");
    if (place <= 125) return "prize_".concat(week, "-101-125");
    if (place <= 150) return "prize_".concat(week, "-126-150");
    if (place <= 175) return "prize_".concat(week, "-151-175");
    if (place <= 200) return "prize_".concat(week, "-176-200");
  }
  function participate() {
    if (!userId) {
      return;
    }
    var params = {
      userid: userId
    };
    fetch(apiURL + '/user/', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(params)
    }).then(function (res) {
      return res.json();
    }).then(function (res) {
      console.log(res);
      loaderBtn = true;
      toggleClasses(participateBtns, "loader");
      toggleTranslates(participateBtns, "loader");
      setTimeout(function () {
        toggleTranslates(participateBtns, "loader_ready");
        toggleClasses(participateBtns, "done");
        toggleClasses(participateBtns, "loader");
      }, 500);
      setTimeout(function () {
        checkUserAuth();
        loadUsers("?nocache=1").then(function (res) {
          renderUsers(activeWeek, tableData);
        });
      }, 1000);
    })["catch"](function (err) {
      console.error('API request failed:', err);
      reportError(err);
      document.querySelector('.fav-page').style.display = 'none';
      if (window.location.href.startsWith("https://www.favbet.hr/")) {
        window.location.href = '/promocije/promocija/stub/';
      } else {
        window.location.href = '/promos/promo/stub/';
      }
      return Promise.reject(err);
    });
  }
  function loadUsers(parametr) {
    var requests = [];
    tableData.length = 0;
    var _loop = function _loop() {
      var week = i; // або будь-яка логіка для формування номера тижня
      var req = request("/users/".concat(week).concat(parametr ? parametr : "")).then(function (data) {
        console.log(data);
        tableData.push({
          week: week,
          users: data
        });
      });
      requests.push(req);
    };
    for (var i = 1; i <= periodAmount; i++) {
      _loop();
    }
    return Promise.all(requests)["catch"](function (error) {
      console.error('Error loading users:', error);
    });
  }

  // loadTranslations()
  //     .then(init) // запуск ініту сторінки

  function initCountdown(selector, startTime, endTime) {
    var container = document.querySelector(selector);
    if (!container) return;
    container.innerHTML = "\n    <div class=\"timer\">\n      <span class=\"days\">00</span>\u0414 :\n      <span class=\"hours\">00</span>\u0413 :\n      <span class=\"minutes\">00</span>\u0425\n    </div>\n    <div class=\"progress\">\n      <div class=\"progress__bar\"></div>\n    </div>\n  ";
    var daysEl = container.querySelector('.days');
    var hoursEl = container.querySelector('.hours');
    var minutesEl = container.querySelector('.minutes');
    var progressBar = container.querySelector('.progress__bar');
    var total = new Date(endTime).getTime() - new Date(startTime).getTime();
    function update() {
      var now = Date.now();
      var diff = new Date(endTime).getTime() - now;
      if (diff <= 0) {
        daysEl.textContent = '00';
        hoursEl.textContent = '00';
        minutesEl.textContent = '00';
        progressBar.style.width = '100%';
        clearInterval(interval);
        return;
      }
      var days = Math.floor(diff / (1000 * 60 * 60 * 24));
      var hours = Math.floor(diff / (1000 * 60 * 60) % 24);
      var minutes = Math.floor(diff / (1000 * 60) % 60);
      daysEl.textContent = String(days).padStart(2, '0');
      hoursEl.textContent = String(hours).padStart(2, '0');
      minutesEl.textContent = String(minutes).padStart(2, '0');
      var elapsed = now - new Date(startTime).getTime();
      var percent = Math.min(Math.max(elapsed / total * 100, 0), 100);
      progressBar.style.width = percent + '%';
    }
    update();
    var interval = setInterval(update, 1000);
  }
  initCountdown('.info__match-next-time', '2025-10-01T12:00:00', '2025-10-20T12:00:00');
  function setProgress(el, percent) {
    var fill = el.querySelector('.progress-fill');
    var label = el.querySelector('.progress-label');
    fill.style.height = percent + "%";
    label.textContent = "".concat(percent, "/100");
  }

  // приклад використання:
  var bar = document.querySelector('.progress-bar');
  setProgress(bar, 75);
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwiZ2V0QWN0aXZlV2VlayIsInByb21vU3RhcnREYXRlIiwid2Vla0R1cmF0aW9uIiwiY3VycmVudERhdGUiLCJEYXRlIiwid2Vla0RhdGVzIiwiRGF5IiwiV2VlayIsImZvcm1hdERhdGUiLCJkYXRlIiwiZ2V0RGF0ZSIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJnZXRNb250aCIsImNhbGN1bGF0ZVdlZWtQZXJpb2QiLCJ3ZWVrSW5kZXgiLCJiYXNlU3RhcnQiLCJnZXRUaW1lIiwic3RhcnQiLCJlbmQiLCJhY3RpdmVXZWVrSW5kZXgiLCJpIiwiaXNWZXJpZmllZFVzZXIiLCJwZXJpb2RBbW91bnQiLCJ0YWJsZURhdGEiLCJhY3RpdmVXZWVrIiwibWFpblBhZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ1bmF1dGhNc2dzIiwicXVlcnlTZWxlY3RvckFsbCIsInBhcnRpY2lwYXRlQnRucyIsInJlZGlyZWN0QnRucyIsImxvYWRlciIsInVrTGVuZyIsImVuTGVuZyIsInRvZ2dsZUNsYXNzZXMiLCJlbGVtZW50cyIsImNsYXNzTmFtZSIsImZvckVhY2giLCJlbCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInRvZ2dsZVRyYW5zbGF0ZXMiLCJkYXRhQXR0ciIsInNldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsImkxOG5EYXRhIiwicmVtb3ZlQXR0cmlidXRlIiwibG9hZGVyQnRuIiwibG9jYWxlIiwiZGVidWciLCJoaWRlTG9hZGVyIiwidHJhbnNsYXRlU3RhdGUiLCJ1c2VySWQiLCJyZXF1ZXN0IiwibGluayIsImV4dHJhT3B0aW9ucyIsImZldGNoIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJvayIsIkVycm9yIiwianNvbiIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsInJlcG9ydEVycm9yIiwic3R5bGUiLCJkaXNwbGF5Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwic3RhcnRzV2l0aCIsIlByb21pc2UiLCJyZWplY3QiLCJhZGQiLCJib2R5Iiwib3ZlcmZsb3ciLCJyZW1vdmUiLCJpbml0IiwidHJ5RGV0ZWN0VXNlcklkIiwicXVpY2tDaGVja0FuZFJlbmRlciIsImNoZWNrVXNlckF1dGgiLCJsb2FkVXNlcnMiLCJzZXRUaW1lb3V0IiwidGFiIiwiYnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhcnRpY2lwYXRlIiwic3RvcmUiLCJzdGF0ZSIsImdldFN0YXRlIiwiYXV0aCIsImlzQXV0aG9yaXplZCIsImlkIiwiZ191c2VyX2lkIiwiYXR0ZW1wdHMiLCJtYXhBdHRlbXB0cyIsImF0dGVtcHRJbnRlcnZhbCIsIndhaXRGb3JVc2VySWQiLCJyZXNvbHZlIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJsb2FkVHJhbnNsYXRpb25zIiwidHJhbnNsYXRlIiwibXV0YXRpb25PYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJtdXRhdGlvbnMiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZSIsInRhcmdldE5vZGUiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwiZ2V0RWxlbWVudEJ5SWQiLCJsb2ciLCJ1bmF1dGhNZXMiLCJ1c2VyaWQiLCJpdGVtIiwicmVkaXJlY3RCdG4iLCJwYXJ0aWNpcGF0ZUJ0biIsInJlcG9ydERhdGEiLCJvcmlnaW4iLCJlcnJvclRleHQiLCJ0ZXh0IiwibWVzc2FnZSIsInR5cGUiLCJuYW1lIiwic3RhY2siLCJtZXRob2QiLCJKU09OIiwic3RyaW5naWZ5Iiwid2FybiIsImVsZW1zIiwibGVuZ3RoIiwiZWxlbSIsImtleSIsImdldEF0dHJpYnV0ZSIsInJlZnJlc2hMb2NhbGl6ZWRDbGFzcyIsImVsZW1lbnQiLCJsYW5nIiwiYmFzZUNzc0NsYXNzIiwicmVuZGVyVXNlcnMiLCJ3ZWVrTnVtIiwidXNlckRhdGEiLCJOdW1iZXIiLCJmaW5kIiwid2VlayIsInVzZXJzIiwiY3VycmVudFVzZXIiLCJ1c2VyIiwicG9pbnRzIiwicG9wdWxhdGVVc2Vyc1RhYmxlIiwiY3VycmVudFVzZXJJZCIsInJlc3VsdHNUYWJsZSIsInJlc3VsdHNUYWJsZU90aGVyIiwiaXNUb3BDdXJyZW50VXNlciIsInNsaWNlIiwic29tZSIsInRvcFVzZXJzTGVuZ3RoIiwidG9wVXNlcnMiLCJkaXNwbGF5VXNlciIsImlzQ3VycmVudFVzZXIiLCJ0YWJsZSIsInJlbmRlclJvdyIsIm9wdGlvbnMiLCJoaWdobGlnaHQiLCJuZWlnaGJvciIsInVzZXJSb3ciLCJjcmVhdGVFbGVtZW50IiwidXNlclBsYWNlIiwiaW5kZXhPZiIsInByaXplS2V5IiwiZ2V0UHJpemVUcmFuc2xhdGlvbktleSIsInRyYW5zbGF0ZUtleSIsIm1hc2tVc2VySWQiLCJ0b0ZpeGVkIiwiYXBwZW5kIiwiaW5kZXgiLCJkZWZhdWx0VmFsdWUiLCJuZWVkS2V5IiwicGxhY2UiLCJwYXJhbXMiLCJwYXJhbWV0ciIsInJlcXVlc3RzIiwicmVxIiwiZGF0YSIsInB1c2giLCJhbGwiLCJpbml0Q291bnRkb3duIiwic2VsZWN0b3IiLCJzdGFydFRpbWUiLCJlbmRUaW1lIiwiY29udGFpbmVyIiwiZGF5c0VsIiwiaG91cnNFbCIsIm1pbnV0ZXNFbCIsInByb2dyZXNzQmFyIiwidG90YWwiLCJ1cGRhdGUiLCJub3ciLCJkaWZmIiwidGV4dENvbnRlbnQiLCJ3aWR0aCIsImRheXMiLCJNYXRoIiwiZmxvb3IiLCJob3VycyIsIm1pbnV0ZXMiLCJTdHJpbmciLCJlbGFwc2VkIiwicGVyY2VudCIsIm1pbiIsIm1heCIsInNldFByb2dyZXNzIiwiZmlsbCIsImxhYmVsIiwiaGVpZ2h0IiwiYmFyIl0sIm1hcHBpbmdzIjoiOzs7K0NBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREEsQ0FBQyxZQUFZO0VBRVQsSUFBTUEsTUFBTSxHQUFHLHFDQUFxQztFQUVwRCxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWEsQ0FBSUMsY0FBYyxFQUFFQyxZ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TyxHQUFHLENBQUNQLElBQUksQ0FBQ1EsR0FBRyxDQUFFSCxPQUFPLEdBQUdaLEtBQUssR0FBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO01BQ25FRCxXQUFXLENBQUNsSSxLQUFLLENBQUN3SSxLQUFLLEdBQUdRLE9BQU8sR0FBRyxHQUFHO0lBQzNDO0lBRUFaLE1BQU0sRUFBRTtJQUNSLElBQU1sRyxRQUFRLEdBQUdDLFdBQVcsQ0FBQ2lHLE1BQU0sRUFBRSxJQUFJLENBQUM7RUFDOUM7RUFHQVYsYUFBYSxDQUFDLHdCQUF3QixFQUFFLHFCQUFxQixFQUFFLHFCQUFxQixDQUFDO0VBSXJGLFNBQVN5QixXQUFXLENBQUNoTCxFQUFFLEVBQUU2SyxPQUFPLEVBQUU7SUFDOUIsSUFBTUksSUFBSSxHQUFHakwsRUFBRSxDQUFDWixhQUFhLENBQUMsZ0JBQWdCLENBQUM7SUFDL0MsSUFBTThMLEtBQUssR0FBR2xMLEVBQUUsQ0FBQ1osYUFBYSxDQUFDLGlCQUFpQixDQUFDO0lBQ2pENkwsSUFBSSxDQUFDcEosS0FBSyxDQUFDc0osTUFBTSxHQUFHTixPQUFPLEdBQUcsR0FBRztJQUNqQ0ssS0FBSyxDQUFDZCxXQUFXLGFBQU1TLE9BQU8sU0FBTTtFQUN4Qzs7RUFFSjtFQUNJLElBQU1PLEdBQUcsR0FBR2pNLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGVBQWUsQ0FBQztFQUNuRDRMLFdBQVcsQ0FBQ0ksR0FBRyxFQUFFLEVBQUUsQ0FBQztBQUl4QixDQUFDLEdBQUciLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XG5cbiAgICBjb25zdCBhcGlVUkwgPSAnaHR0cHM6Ly9mYXYtcHJvbS5jb20vYXBpX3lvdXJfcHJvbW8nXG5cbiAgICBjb25zdCBnZXRBY3RpdmVXZWVrID0gKHByb21vU3RhcnREYXRlLCB3ZWVrRHVyYXRpb24pID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBsZXQgd2Vla0RhdGVzID0gW107XG5cbiAgICAgICAgY29uc3QgRGF5ID0gMjQgKiA2MCAqIDYwICogMTAwMDtcbiAgICAgICAgY29uc3QgV2VlayA9IHdlZWtEdXJhdGlvbiAqIERheTtcblxuICAgICAgICBjb25zdCBmb3JtYXREYXRlID0gKGRhdGUpID0+XG4gICAgICAgICAgICBgJHtkYXRlLmdldERhdGUoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKX0uJHsoZGF0ZS5nZXRNb250aCgpICsgMSkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIil9YDtcblxuICAgICAgICBjb25zdCBjYWxjdWxhdGVXZWVrUGVyaW9kID0gKHdlZWtJbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYmFzZVN0YXJ0ID0gcHJvbW9TdGFydERhdGUuZ2V0VGltZSgpO1xuICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBuZXcgRGF0ZShiYXNlU3RhcnQgKyB3ZWVrSW5kZXggKiBXZWVrKTtcbiAgICAgICAgICAgIGxldCBlbmQgPSBuZXcgRGF0ZShzdGFydC5nZXRUaW1lKCkgKyAod2Vla0R1cmF0aW9uICogRGF5IC0gMSkpO1xuICAgICAgICAgICAgcmV0dXJuIHsgc3RhcnQsIGVuZCB9O1xuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBhY3RpdmVXZWVrSW5kZXggPSBudWxsO1xuXG4gICAgICAgIC8vINCf0LXRgNC10LLRltGA0LrQsCDQv9C+0YLQvtGH0L3QvtCz0L4g0YLQuNC20L3Rj1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHsgLy8g0J7QsdC80LXQttGD0ZTQvNC+IDEwINGC0LjQttC90Y/QvNC4ICjRj9C60YnQviDQv9C+0YLRgNGW0LHQvdC+INCx0ZbQu9GM0YjQtSwg0L/RgNC+0YHRgtC+INC30LzRltC90ZbRgtGMINC70ZbRh9C40LvRjNC90LjQuilcbiAgICAgICAgICAgIGNvbnN0IHsgc3RhcnQsIGVuZCB9ID0gY2FsY3VsYXRlV2Vla1BlcmlvZChpKTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50RGF0ZSA+PSBzdGFydCAmJiBjdXJyZW50RGF0ZSA8PSBlbmQpIHtcbiAgICAgICAgICAgICAgICBhY3RpdmVXZWVrSW5kZXggPSBpICsgMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhY3RpdmVXZWVrSW5kZXg7XG4gICAgfTtcblxuICAgIGNvbnN0IHByb21vU3RhcnREYXRlID0gbmV3IERhdGUoXCIyMDI1LTA1LTA1VDAwOjAwOjAwXCIpO1xuICAgIGNvbnN0IHdlZWtEdXJhdGlvbiA9IDEwO1xuXG4gICAgbGV0IGlzVmVyaWZpZWRVc2VyID0gZmFsc2U7XG5cbiAgICBsZXQgcGVyaW9kQW1vdW50ID0gMiAvLyDQutGW0LvRjNC60ZbRgdGC0Ywg0L/QtdGA0ZbQvtC00ZbQsiDQsiDQsNC60YbRltGXLCDRgtGA0LXQsdCwINC00LvRjyDQutC10YjRg9Cy0LDQvdC90Y8g0ZbQvdGE0Lgg0Lcg0YLQsNCx0LvQuFxuXG4gICAgbGV0IHRhYmxlRGF0YSA9IFtdXG4gICAgbGV0IGFjdGl2ZVdlZWsgPSBnZXRBY3RpdmVXZWVrKHByb21vU3RhcnREYXRlLCB3ZWVrRHVyYXRpb24pIHx8IDE7XG4gICAgLy8gbGV0IGFjdGl2ZVdlZWsgPSAyXG5cbiAgICBpZiAoYWN0aXZlV2VlayA+IDIpIGFjdGl2ZVdlZWsgPSAyXG5cblxuICAgIGNvbnN0IG1haW5QYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mYXYtcGFnZVwiKSxcbiAgICAgICAgdW5hdXRoTXNncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy51bmF1dGgtbXNnJyksXG4gICAgICAgIHBhcnRpY2lwYXRlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYXJ0LWJ0bicpLFxuICAgICAgICByZWRpcmVjdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLWpvaW4nKSxcbiAgICAgICAgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zcGlubmVyLW92ZXJsYXlcIilcblxuICAgIGNvbnN0IHVrTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1a0xlbmcnKTtcbiAgICBjb25zdCBlbkxlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW5MZW5nJyk7XG5cbiAgICBjb25zdCB0b2dnbGVDbGFzc2VzID0gKGVsZW1lbnRzLCBjbGFzc05hbWUpID0+IGVsZW1lbnRzLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnRvZ2dsZShgJHtjbGFzc05hbWV9YCkpO1xuICAgIGNvbnN0IHRvZ2dsZVRyYW5zbGF0ZXMgPSAoZWxlbWVudHMsIGRhdGFBdHRyKSA9PiBlbGVtZW50cy5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScsIGAke2RhdGFBdHRyfWApXG4gICAgICAgIGVsLmlubmVySFRNTCA9IGkxOG5EYXRhW2RhdGFBdHRyXSB8fCAnKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiAgIGtleTogICcgKyBkYXRhQXR0cjtcbiAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgIH0pO1xuXG4gICAgbGV0IGxvYWRlckJ0biA9IGZhbHNlXG5cbiAgICBsZXQgbG9jYWxlID0gXCJlblwiXG4gICAgLy8gbGV0IGxvY2FsZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJsb2NhbGVcIikgfHwgXCJ1a1wiXG5cbiAgICBpZiAodWtMZW5nKSBsb2NhbGUgPSAndWsnO1xuICAgIGlmIChlbkxlbmcpIGxvY2FsZSA9ICdlbic7XG5cbiAgICBsZXQgZGVidWcgPSB0cnVlXG5cbiAgICBpZiAoZGVidWcpIGhpZGVMb2FkZXIoKVxuXG4gICAgbGV0IGkxOG5EYXRhID0ge307XG4gICAgY29uc3QgdHJhbnNsYXRlU3RhdGUgPSB0cnVlO1xuICAgIGxldCB1c2VySWQgPSBudWxsO1xuICAgIC8vIGxldCB1c2VySWQgPSBOdW1iZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKSkgPz8gbnVsbFxuXG4gICAgY29uc3QgcmVxdWVzdCA9IGZ1bmN0aW9uIChsaW5rLCBleHRyYU9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKGFwaVVSTCArIGxpbmssIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAuLi4oZXh0cmFPcHRpb25zIHx8IHt9KVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKCdBUEkgZXJyb3InKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdBUEkgcmVxdWVzdCBmYWlsZWQ6JywgZXJyKTtcblxuICAgICAgICAgICAgICAgIHJlcG9ydEVycm9yKGVycik7XG5cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmF2LXBhZ2UnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZi5zdGFydHNXaXRoKFwiaHR0cHM6Ly93d3cuZmF2YmV0LmhyL1wiKSkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJvbW9jaWplL3Byb21vY2lqYS9zdHViLyc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3Byb21vcy9wcm9tby9zdHViLyc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XG4gICAgICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpZGVMb2FkZXIoKXtcbiAgICAgICAgbG9hZGVyLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIlxuICAgICAgICBtYWluUGFnZS5jbGFzc0xpc3QucmVtb3ZlKFwibG9hZGluZ1wiKVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIGxldCBhdHRlbXB0cyA9IDA7XG4gICAgICAgIGNvbnN0IG1heEF0dGVtcHRzID0gMjA7XG4gICAgICAgIGNvbnN0IGF0dGVtcHRJbnRlcnZhbCA9IDUwO1xuXG4gICAgICAgIGZ1bmN0aW9uIHRyeURldGVjdFVzZXJJZCgpIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuc3RvcmUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHdpbmRvdy5zdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgICAgIHVzZXJJZCA9IHN0YXRlLmF1dGguaXNBdXRob3JpemVkICYmIHN0YXRlLmF1dGguaWQgfHwgJyc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdy5nX3VzZXJfaWQpIHtcbiAgICAgICAgICAgICAgICB1c2VySWQgPSB3aW5kb3cuZ191c2VyX2lkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcXVpY2tDaGVja0FuZFJlbmRlcigpIHtcbiAgICAgICAgICAgIGNoZWNrVXNlckF1dGgoKVxuICAgICAgICAgICAgICAgIC50aGVuKGxvYWRVc2VycylcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChoaWRlTG9hZGVyLCAzMDApO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYmxlX190YWJzLWl0ZW1cIikuZm9yRWFjaCgodGFiLCBpKSA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGkgPT09IGFjdGl2ZVdlZWsgLSAxKSB0YWIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlbmRlclVzZXJzKGFjdGl2ZVdlZWssIHRhYmxlRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRucy5mb3JFYWNoKGJ0biA9PiBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwYXJ0aWNpcGF0ZSkpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgd2FpdEZvclVzZXJJZCA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0cnlEZXRlY3RVc2VySWQoKTtcbiAgICAgICAgICAgICAgICBpZiAodXNlcklkIHx8IGF0dGVtcHRzID49IG1heEF0dGVtcHRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHF1aWNrQ2hlY2tBbmRSZW5kZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXR0ZW1wdHMrKztcbiAgICAgICAgICAgIH0sIGF0dGVtcHRJbnRlcnZhbCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGF3YWl0IHdhaXRGb3JVc2VySWQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9hZFRyYW5zbGF0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3QoYC9uZXctdHJhbnNsYXRlcy8ke2xvY2FsZX1gKVxuICAgICAgICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICAgICAgaTE4bkRhdGEgPSBqc29uO1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAobXV0YXRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIG11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKHRhcmdldE5vZGUsIHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhhcmRjb3JlVGVubmlzXCIpLCB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgc3VidHJlZTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIGNoZWNrVXNlckF1dGgoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJJZClcbiAgICAgICAgaWYgKHVzZXJJZCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCB1bmF1dGhNZXMgb2YgdW5hdXRoTXNncykge1xuICAgICAgICAgICAgICAgIHVuYXV0aE1lcy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVxdWVzdChgL2ZhdnVzZXIvJHt1c2VySWR9P25vY2FjaGU9MWApXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy51c2VyaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3RCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc1ZlcmlmaWVkVXNlciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpc1ZlcmlmaWVkVXNlcilcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3RCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc1ZlcmlmaWVkVXNlciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgcmVkaXJlY3RCdG4gb2YgcmVkaXJlY3RCdG5zKSB7XG4gICAgICAgICAgICAgICAgcmVkaXJlY3RCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgcGFydGljaXBhdGVCdG4gb2YgcGFydGljaXBhdGVCdG5zKSB7XG4gICAgICAgICAgICAgICAgcGFydGljaXBhdGVCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChjb25zdCB1bmF1dGhNZXMgb2YgdW5hdXRoTXNncykge1xuICAgICAgICAgICAgICAgIHVuYXV0aE1lcy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVwb3J0RXJyb3IoZXJyKSB7XG4gICAgICAgIGNvbnN0IHJlcG9ydERhdGEgPSB7XG4gICAgICAgICAgICBvcmlnaW46IHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuICAgICAgICAgICAgdXNlcmlkOiB1c2VySWQsXG4gICAgICAgICAgICBlcnJvclRleHQ6IGVycj8uZXJyb3IgfHwgZXJyPy50ZXh0IHx8IGVycj8ubWVzc2FnZSB8fCAnVW5rbm93biBlcnJvcicsXG4gICAgICAgICAgICB0eXBlOiBlcnI/Lm5hbWUgfHwgJ1Vua25vd25FcnJvcicsXG4gICAgICAgICAgICBzdGFjazogZXJyPy5zdGFjayB8fCAnJ1xuICAgICAgICB9O1xuXG4gICAgICAgIGZldGNoKCdodHRwczovL2Zhdi1wcm9tLmNvbS9hcGktY21zL3JlcG9ydHMvYWRkJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcG9ydERhdGEpXG4gICAgICAgIH0pLmNhdGNoKGNvbnNvbGUud2Fybik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlKCkge1xuICAgICAgICBjb25zdCBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRyYW5zbGF0ZV0nKVxuICAgICAgICBpZiAoZWxlbXMgJiYgZWxlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZih0cmFuc2xhdGVTdGF0ZSl7XG4gICAgICAgICAgICAgICAgZWxlbXMuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0uaW5uZXJIVE1MID0gaTE4bkRhdGFba2V5XSB8fCAnKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiAgIGtleTogICcgKyBrZXk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpMThuRGF0YVtrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRyYW5zbGF0aW9uIHdvcmtzIVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChsb2NhbGUgPT09ICdlbicpIHtcbiAgICAgICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5hZGQoJ2VuJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmVmcmVzaExvY2FsaXplZENsYXNzKG1haW5QYWdlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWZyZXNoTG9jYWxpemVkQ2xhc3MoZWxlbWVudCkge1xuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGxhbmcgb2YgWyd1aycsICdlbiddKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoYmFzZUNzc0NsYXNzICsgbGFuZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGJhc2VDc3NDbGFzcyArIGxvY2FsZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyVXNlcnMod2Vla051bSwgdXNlckRhdGEgPSBbXSkge1xuICAgICAgICB3ZWVrTnVtID0gTnVtYmVyKHdlZWtOdW0pO1xuICAgICAgICB1c2VyRGF0YSA9IHVzZXJEYXRhLmZpbmQod2VlayA9PiB7XG4gICAgICAgICAgICByZXR1cm4gd2Vlay53ZWVrID09PSB3ZWVrTnVtXG4gICAgICAgIH0pLnVzZXJzO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJEYXRhKTtcblxuICAgICAgICBjb25zdCBjdXJyZW50VXNlciA9IHVzZXJEYXRhLmZpbmQodXNlciA9PiB1c2VyLnVzZXJpZCA9PT0gdXNlcklkKTtcblxuICAgICAgICBjb25zb2xlLmxvZyh1c2VySWQpXG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRVc2VyKVxuICAgICAgICBjb25zb2xlLmxvZyhpc1ZlcmlmaWVkVXNlcilcblxuICAgICAgICBpZih1c2VySWQgJiYgIWN1cnJlbnRVc2VyICYmIGlzVmVyaWZpZWRVc2VyKXtcbiAgICAgICAgICAgIHVzZXJEYXRhID0gWy4uLnVzZXJEYXRhLCB7dXNlcmlkOiB1c2VySWQsIHBvaW50czogMH1dXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2codXNlckRhdGEpO1xuXG4gICAgICAgIHBvcHVsYXRlVXNlcnNUYWJsZSh1c2VyRGF0YSwgdXNlcklkLCB3ZWVrTnVtLCBjdXJyZW50VXNlciwgaXNWZXJpZmllZFVzZXIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBvcHVsYXRlVXNlcnNUYWJsZSh1c2VycywgY3VycmVudFVzZXJJZCwgd2VlaywgY3VycmVudFVzZXIsIGlzVmVyaWZpZWRVc2VyKSB7XG5cbiAgICAgICAgY29uc29sZS5sb2codXNlcnMpO1xuICAgICAgICByZXN1bHRzVGFibGUuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHJlc3VsdHNUYWJsZU90aGVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBpZiAoIXVzZXJzPy5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICBjb25zdCBpc1RvcEN1cnJlbnRVc2VyID0gY3VycmVudFVzZXIgJiYgdXNlcnMuc2xpY2UoMCwgMTApLnNvbWUodXNlciA9PiB1c2VyLnVzZXJpZCA9PT0gY3VycmVudFVzZXJJZCk7XG5cbiAgICAgICAgY29uc3QgdG9wVXNlcnNMZW5ndGggPSAhdXNlcklkIHx8IGlzVG9wQ3VycmVudFVzZXIgID8gMTMgOiAxMDtcblxuICAgICAgICBjb25zdCB0b3BVc2VycyA9IHVzZXJzLnNsaWNlKDAsIHRvcFVzZXJzTGVuZ3RoKTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyh1c2Vycyk7XG4gICAgICAgIHRvcFVzZXJzLmZvckVhY2godXNlciA9PiB7XG4gICAgICAgICAgICBkaXNwbGF5VXNlcih1c2VyLCB1c2VyLnVzZXJpZCA9PT0gY3VycmVudFVzZXJJZCwgcmVzdWx0c1RhYmxlLCB0b3BVc2VycywgaXNUb3BDdXJyZW50VXNlciwgd2Vlayk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhpc1RvcEN1cnJlbnRVc2VyKVxuICAgICAgICBjb25zb2xlLmxvZyhpc1ZlcmlmaWVkVXNlcilcbiAgICAgICAgaWYoaXNWZXJpZmllZFVzZXIgJiYgIWN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygndXNlciB2ZXJpZmllZCcpO1xuICAgICAgICAgICAgZGlzcGxheVVzZXIoY3VycmVudFVzZXIsIHRydWUsIHJlc3VsdHNUYWJsZU90aGVyLCB1c2VycywgZmFsc2UsIHdlZWspO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNUb3BDdXJyZW50VXNlciAmJiBjdXJyZW50VXNlcikge1xuICAgICAgICAgICAgaXNWZXJpZmllZFVzZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIGRpc3BsYXlVc2VyKGN1cnJlbnRVc2VyLCB0cnVlLCByZXN1bHRzVGFibGVPdGhlciwgdXNlcnMsIGZhbHNlLCB3ZWVrKTtcbiAgICAgICAgfVxuXG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5VXNlcih1c2VyLCBpc0N1cnJlbnRVc2VyLCB0YWJsZSwgdXNlcnMsIGlzVG9wQ3VycmVudFVzZXIsIHdlZWspIHtcblxuICAgICAgICBjb25zdCByZW5kZXJSb3cgPSAodXNlckRhdGEsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBoaWdobGlnaHQgPSBmYWxzZSwgbmVpZ2hib3IgPSBmYWxzZSB9ID0gb3B0aW9ucztcbiAgICAgICAgICAgIGNvbnN0IHVzZXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZCgndGFibGVfX3JvdycpO1xuXG4gICAgICAgICAgICBjb25zdCB1c2VyUGxhY2UgPSB1c2Vycy5pbmRleE9mKHVzZXJEYXRhKSArIDE7XG4gICAgICAgICAgICBjb25zdCBwcml6ZUtleSA9IGRlYnVnID8gbnVsbCA6IGdldFByaXplVHJhbnNsYXRpb25LZXkodXNlclBsYWNlLCB3ZWVrKTtcblxuICAgICAgICAgICAgaWYgKHVzZXJQbGFjZSA8PSAzKSB7XG4gICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKGBwbGFjZSR7dXNlclBsYWNlfWApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaGlnaGxpZ2h0IHx8IGlzQ3VycmVudFVzZXIgJiYgIW5laWdoYm9yKSB7XG4gICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKCd5b3UnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmVpZ2hib3IpIHtcbiAgICAgICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoJ19uZWlnaGJvcicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1c2VyUm93LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke3VzZXJQbGFjZSA8IDEwID8gJzAnICsgdXNlclBsYWNlIDogdXNlclBsYWNlfVxuICAgICAgICAgICAgICAgICR7aXNDdXJyZW50VXNlciAmJiAhbmVpZ2hib3IgPyAnPHNwYW4gY2xhc3M9XCJ5b3VcIj4nICsgdHJhbnNsYXRlS2V5KFwieW91XCIpICsgJzwvc3Bhbj4nIDogJyd9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke2lzQ3VycmVudFVzZXIgJiYgIW5laWdoYm9yID8gdXNlckRhdGEudXNlcmlkIDogbWFza1VzZXJJZCh1c2VyRGF0YS51c2VyaWQpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHtOdW1iZXIodXNlckRhdGEucG9pbnRzKS50b0ZpeGVkKDIpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHtwcml6ZUtleSA/IHRyYW5zbGF0ZUtleShwcml6ZUtleSkgOiAnIC0gJ31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuXG4gICAgICAgICAgICB0YWJsZS5hcHBlbmQodXNlclJvdyk7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChpc0N1cnJlbnRVc2VyICYmICFpc1RvcEN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHVzZXJzLmluZGV4T2YodXNlcik7XG4gICAgICAgICAgICBpZiAodXNlcnNbaW5kZXggLSAxXSkge1xuICAgICAgICAgICAgICAgIHJlbmRlclJvdyh1c2Vyc1tpbmRleCAtIDFdLCB7IG5laWdoYm9yOiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVuZGVyUm93KHVzZXIsIHsgaGlnaGxpZ2h0OiB0cnVlIH0pO1xuICAgICAgICAgICAgaWYgKHVzZXJzW2luZGV4ICsgMV0pIHtcbiAgICAgICAgICAgICAgICByZW5kZXJSb3codXNlcnNbaW5kZXggKyAxXSwgeyBuZWlnaGJvcjogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlbmRlclJvdyh1c2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlS2V5KGtleSwgZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgIGlmICgha2V5KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5lZWRLZXkgPSBkZWJ1ZyA/IGtleSA6IGAqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qIGtleTogJHtrZXl9YFxuXG4gICAgICAgIGRlZmF1bHRWYWx1ZSA9ICBuZWVkS2V5IHx8IGtleTtcbiAgICAgICAgcmV0dXJuIGkxOG5EYXRhW2tleV0gfHwgZGVmYXVsdFZhbHVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1hc2tVc2VySWQodXNlcklkKSB7XG4gICAgICAgIHJldHVybiBcIioqXCIgKyB1c2VySWQudG9TdHJpbmcoKS5zbGljZSgyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQcml6ZVRyYW5zbGF0aW9uS2V5KHBsYWNlLCB3ZWVrKSB7XG4gICAgICAgIGlmIChwbGFjZSA8PSAzKSByZXR1cm4gYHByaXplXyR7d2Vla30tJHtwbGFjZX1gO1xuICAgICAgICBpZiAocGxhY2UgPD0gMTApIHJldHVybiBgcHJpemVfJHt3ZWVrfS00LTEwYDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDI1KSByZXR1cm4gYHByaXplXyR7d2Vla30tMTEtMjVgO1xuICAgICAgICBpZiAocGxhY2UgPD0gNTApIHJldHVybiBgcHJpemVfJHt3ZWVrfS0yNi01MGA7XG4gICAgICAgIGlmIChwbGFjZSA8PSA3NSkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTUxLTc1YDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDEwMCkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTc2LTEwMGA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAxMjUpIHJldHVybiBgcHJpemVfJHt3ZWVrfS0xMDEtMTI1YDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDE1MCkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTEyNi0xNTBgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMTc1KSByZXR1cm4gYHByaXplXyR7d2Vla30tMTUxLTE3NWA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAyMDApIHJldHVybiBgcHJpemVfJHt3ZWVrfS0xNzYtMjAwYDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwYXJ0aWNpcGF0ZSgpIHtcbiAgICAgICAgaWYgKCF1c2VySWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7IHVzZXJpZDogdXNlcklkIH07XG4gICAgICAgIGZldGNoKGFwaVVSTCArICcvdXNlci8nLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXJhbXMpXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgICAgICAgbG9hZGVyQnRuID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHRvZ2dsZUNsYXNzZXMocGFydGljaXBhdGVCdG5zLCBcImxvYWRlclwiKVxuICAgICAgICAgICAgICAgIHRvZ2dsZVRyYW5zbGF0ZXMocGFydGljaXBhdGVCdG5zLCBcImxvYWRlclwiKVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZVRyYW5zbGF0ZXMocGFydGljaXBhdGVCdG5zLCBcImxvYWRlcl9yZWFkeVwiKVxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVDbGFzc2VzKHBhcnRpY2lwYXRlQnRucywgXCJkb25lXCIpXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUNsYXNzZXMocGFydGljaXBhdGVCdG5zLCBcImxvYWRlclwiKVxuICAgICAgICAgICAgICAgIH0sIDUwMClcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrVXNlckF1dGgoKVxuICAgICAgICAgICAgICAgICAgICBsb2FkVXNlcnMoXCI/bm9jYWNoZT0xXCIpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlclVzZXJzKGFjdGl2ZVdlZWssIHRhYmxlRGF0YSlcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9LCAxMDAwKVxuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQVBJIHJlcXVlc3QgZmFpbGVkOicsIGVycik7XG5cbiAgICAgICAgICAgICAgICByZXBvcnRFcnJvcihlcnIpO1xuXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhdi1wYWdlJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuc3RhcnRzV2l0aChcImh0dHBzOi8vd3d3LmZhdmJldC5oci9cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3Byb21vY2lqZS9wcm9tb2NpamEvc3R1Yi8nO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcm9tb3MvcHJvbW8vc3R1Yi8nO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGxvYWRVc2VycyhwYXJhbWV0cikge1xuICAgICAgICBjb25zdCByZXF1ZXN0cyA9IFtdO1xuICAgICAgICB0YWJsZURhdGEubGVuZ3RoID0gMFxuXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHBlcmlvZEFtb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCB3ZWVrID0gaTsgLy8g0LDQsdC+INCx0YPQtNGMLdGP0LrQsCDQu9C+0LPRltC60LAg0LTQu9GPINGE0L7RgNC80YPQstCw0L3QvdGPINC90L7QvNC10YDQsCDRgtC40LbQvdGPXG4gICAgICAgICAgICBjb25zdCByZXEgPSByZXF1ZXN0KGAvdXNlcnMvJHt3ZWVrfSR7cGFyYW1ldHIgPyBwYXJhbWV0ciA6IFwiXCJ9YCkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICB0YWJsZURhdGEucHVzaCh7IHdlZWssIHVzZXJzOiBkYXRhIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJlcXVlc3RzLnB1c2gocmVxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChyZXF1ZXN0cylcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvYWRpbmcgdXNlcnM6JywgZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBsb2FkVHJhbnNsYXRpb25zKClcbiAgICAvLyAgICAgLnRoZW4oaW5pdCkgLy8g0LfQsNC/0YPRgdC6INGW0L3RltGC0YMg0YHRgtC+0YDRltC90LrQuFxuXG5cbiAgICBmdW5jdGlvbiBpbml0Q291bnRkb3duKHNlbGVjdG9yLCBzdGFydFRpbWUsIGVuZFRpbWUpIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcbiAgICAgICAgaWYgKCFjb250YWluZXIpIHJldHVyblxuXG4gICAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz1cInRpbWVyXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cImRheXNcIj4wMDwvc3Bhbj7QlCA6XG4gICAgICA8c3BhbiBjbGFzcz1cImhvdXJzXCI+MDA8L3NwYW4+0JMgOlxuICAgICAgPHNwYW4gY2xhc3M9XCJtaW51dGVzXCI+MDA8L3NwYW4+0KVcbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3NcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzc19fYmFyXCI+PC9kaXY+XG4gICAgPC9kaXY+XG4gIGBcblxuICAgICAgICBjb25zdCBkYXlzRWwgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmRheXMnKVxuICAgICAgICBjb25zdCBob3Vyc0VsID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5ob3VycycpXG4gICAgICAgIGNvbnN0IG1pbnV0ZXNFbCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubWludXRlcycpXG4gICAgICAgIGNvbnN0IHByb2dyZXNzQmFyID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5wcm9ncmVzc19fYmFyJylcblxuICAgICAgICBjb25zdCB0b3RhbCA9IG5ldyBEYXRlKGVuZFRpbWUpLmdldFRpbWUoKSAtIG5ldyBEYXRlKHN0YXJ0VGltZSkuZ2V0VGltZSgpXG5cbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgICAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKVxuICAgICAgICAgICAgY29uc3QgZGlmZiA9IG5ldyBEYXRlKGVuZFRpbWUpLmdldFRpbWUoKSAtIG5vd1xuXG4gICAgICAgICAgICBpZiAoZGlmZiA8PSAwKSB7XG4gICAgICAgICAgICAgICAgZGF5c0VsLnRleHRDb250ZW50ID0gJzAwJ1xuICAgICAgICAgICAgICAgIGhvdXJzRWwudGV4dENvbnRlbnQgPSAnMDAnXG4gICAgICAgICAgICAgICAgbWludXRlc0VsLnRleHRDb250ZW50ID0gJzAwJ1xuICAgICAgICAgICAgICAgIHByb2dyZXNzQmFyLnN0eWxlLndpZHRoID0gJzEwMCUnXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbClcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgZGF5cyA9IE1hdGguZmxvb3IoZGlmZiAvICgxMDAwICogNjAgKiA2MCAqIDI0KSlcbiAgICAgICAgICAgIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcigoZGlmZiAvICgxMDAwICogNjAgKiA2MCkpICUgMjQpXG4gICAgICAgICAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcigoZGlmZiAvICgxMDAwICogNjApKSAlIDYwKVxuXG4gICAgICAgICAgICBkYXlzRWwudGV4dENvbnRlbnQgPSBTdHJpbmcoZGF5cykucGFkU3RhcnQoMiwgJzAnKVxuICAgICAgICAgICAgaG91cnNFbC50ZXh0Q29udGVudCA9IFN0cmluZyhob3VycykucGFkU3RhcnQoMiwgJzAnKVxuICAgICAgICAgICAgbWludXRlc0VsLnRleHRDb250ZW50ID0gU3RyaW5nKG1pbnV0ZXMpLnBhZFN0YXJ0KDIsICcwJylcblxuICAgICAgICAgICAgY29uc3QgZWxhcHNlZCA9IG5vdyAtIG5ldyBEYXRlKHN0YXJ0VGltZSkuZ2V0VGltZSgpXG4gICAgICAgICAgICBjb25zdCBwZXJjZW50ID0gTWF0aC5taW4oTWF0aC5tYXgoKGVsYXBzZWQgLyB0b3RhbCkgKiAxMDAsIDApLCAxMDApXG4gICAgICAgICAgICBwcm9ncmVzc0Jhci5zdHlsZS53aWR0aCA9IHBlcmNlbnQgKyAnJSdcbiAgICAgICAgfVxuXG4gICAgICAgIHVwZGF0ZSgpXG4gICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwodXBkYXRlLCAxMDAwKVxuICAgIH1cblxuXG4gICAgaW5pdENvdW50ZG93bignLmluZm9fX21hdGNoLW5leHQtdGltZScsICcyMDI1LTEwLTAxVDEyOjAwOjAwJywgJzIwMjUtMTAtMjBUMTI6MDA6MDAnKVxuXG5cblxuICAgIGZ1bmN0aW9uIHNldFByb2dyZXNzKGVsLCBwZXJjZW50KSB7XG4gICAgICAgIGNvbnN0IGZpbGwgPSBlbC5xdWVyeVNlbGVjdG9yKCcucHJvZ3Jlc3MtZmlsbCcpO1xuICAgICAgICBjb25zdCBsYWJlbCA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5wcm9ncmVzcy1sYWJlbCcpO1xuICAgICAgICBmaWxsLnN0eWxlLmhlaWdodCA9IHBlcmNlbnQgKyBcIiVcIjtcbiAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSBgJHtwZXJjZW50fS8xMDBgO1xuICAgIH1cblxuLy8g0L/RgNC40LrQu9Cw0LQg0LLQuNC60L7RgNC40YHRgtCw0L3QvdGPOlxuICAgIGNvbnN0IGJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9ncmVzcy1iYXInKTtcbiAgICBzZXRQcm9ncmVzcyhiYXIsIDc1KTtcblxuXG5cbn0pKCk7XG4iXX0=
