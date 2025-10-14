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
  var _Number;
  var apiURL = 'https://fav-prom.com/api_shakhtar_new_game_universe';
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
    loader = document.querySelector(".spinner-overlay"),
    closePopups = document.querySelectorAll('.popup__close'),
    prizeItems = document.querySelectorAll('[data-amount-points]'),
    takeBonusBtns = document.querySelectorAll('[data-action="takeBonus"]');
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

  // let locale = "en"
  var locale = sessionStorage.getItem("locale") || "uk";
  if (ukLeng) locale = 'uk';
  if (enLeng) locale = 'en';
  var debug = false;
  if (debug) {
    hideLoader();
  }
  var i18nData = {};
  var translateState = true;
  // let userId = null;
  var userId = (_Number = Number(sessionStorage.getItem("userId"))) !== null && _Number !== void 0 ? _Number : null;
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
  function setWonItem(item) {
    var _item$querySelector;
    item.classList.add('won');
    item.classList.remove('active');
    var points = (_item$querySelector = item.querySelector('.prize__amount-points')) !== null && _item$querySelector !== void 0 ? _item$querySelector : item.querySelector('.prize__item-points');
    points.textContent = translateKey("won");
  }
  function setLockItem(item) {
    var _item$querySelector2;
    item.classList.remove('won');
    item.classList.remove('active');
    var amount = item.getAttribute('data-amount-points');
    var points = (_item$querySelector2 = item.querySelector('.prize__amount-points')) !== null && _item$querySelector2 !== void 0 ? _item$querySelector2 : item.querySelector('.prize__item-points');
    points.textContent = "".concat(amount, " ").concat(translateKey("points"));
  }
  function setActiveItem(item) {
    var _item$querySelector3;
    item.classList.remove('won');
    item.classList.add('active');
    var amount = item.getAttribute('data-amount-points');
    var points = (_item$querySelector3 = item.querySelector('.prize__amount-points')) !== null && _item$querySelector3 !== void 0 ? _item$querySelector3 : item.querySelector('.prize__item-points');
    points.textContent = "".concat(amount, " ").concat(translateKey("points"));
  }
  function confirmPrize(popup, item) {
    var confirmButton = popup.querySelector('[data-confirm="confirmed"]');
    var unconfirmButtons = popup.querySelectorAll('[data-confirm="unconfirmed"]');
    var title = popup.querySelector('.popup__title');
    var text = popup.querySelector('.popup__text');
    setActiveItem(item);
    popup.classList.add("confirmed");
    title.innerHTML = translateKey("popupTitleYouChose");
    text.innerHTML = translateKey("popupTextYouChose");
    confirmButton.classList.remove('hide');
    unconfirmButtons.forEach(function (el, i) {
      el.classList.add('hide');
    });
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
              checkUserAuth()
              // .then(loadUsers)
              .then(function () {
                setTimeout(hideLoader, 300);
                document.querySelectorAll(".table__tabs-item").forEach(function (tab, i) {
                  tab.classList.remove('active');
                  if (i === activeWeek - 1) tab.classList.add('active');
                });
                // renderUsers(activeWeek, tableData);
                participateBtns.forEach(function (btn) {
                  return btn.addEventListener('click', participate);
                });
                document.querySelector('.popups').addEventListener('click', function (e) {
                  var openPopupEl = document.querySelector('.popup.active');
                  if (openPopupEl) {
                    // console.log(openPopupEl)
                    var contentWrap = openPopupEl.querySelector('.popup__wrap');
                    // console.log(contentWrap);
                    var closeBtn = openPopupEl.querySelector('.popup__close');
                    var cancelBtn = openPopupEl.querySelector('.btn-cancel');
                    if (contentWrap && !contentWrap.contains(e.target)) {
                      closeAllPopups();
                    }
                    if (e.target === closeBtn || e.target === cancelBtn) {
                      closeAllPopups();
                    }
                  }
                });
                prizeItems.forEach(function (btn) {
                  btn.addEventListener('click', function (e) {
                    var points = btn.getAttribute('data-amount-points');
                    if (e.target.closest('.prize__item-btn')) {
                      openPopupByAttr("".concat(points, "PointsPopup"));
                    } else {
                      openPopupByAttr("".concat(points, "PointsPopupInfo"));
                    }
                  });
                });
                takeBonusBtns.forEach(function (btn) {
                  console.log(btn);
                  btn.addEventListener('click', function (e) {
                    var popup = document.querySelector(".popup.active");
                    var popupAmount = popup.getAttribute('data-popup-amount');
                    var itemPrize = null;
                    prizeItems.forEach(function (item) {
                      var itemAmount = item.getAttribute('data-amount-points');
                      if (itemAmount === popupAmount) {
                        itemPrize = item;
                      }
                    });
                    confirmPrize(popup, itemPrize);
                  });
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
    return request("/new-translates/".concat(locale, "?nocache=1")).then(function (json) {
      i18nData = json;
      translate();
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
    var baseCssClass = "";
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
  function openPopupByAttr(popupAttr) {
    var allPopups = document.querySelectorAll('.popup');
    allPopups.forEach(function (p) {
      return p.classList.remove('active');
    });
    mainPage.classList.add('overlay');
    var targetPopup = document.querySelector(".popup[data-popup=\"".concat(popupAttr, "\"]"));
    console.log(targetPopup);
    console.log(popupAttr);
    if (targetPopup) {
      document.body.style.overflow = 'hidden';
      targetPopup.classList.add('active');
      // mainPage.classList.add('overlay');
      document.querySelector('.popups').classList.remove('_opacity');
    }
  }
  function closeAllPopups() {
    document.querySelectorAll('.popup').forEach(function (p) {
      return p.classList.remove('active');
    });
    document.querySelector('.popups').classList.add('_opacity');
    document.body.style.overflow = 'auto';
    mainPage.classList.remove('overlay');
  }
  loadTranslations().then(init); // запуск ініту сторінки

  // setTimeout(hideLoader, 600);

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

  // TEST

  document.addEventListener("DOMContentLoaded", function () {
    var _document$querySelect;
    (_document$querySelect = document.querySelector(".menu-btn")) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.addEventListener("click", function () {
      var _document$querySelect2;
      (_document$querySelect2 = document.querySelector(".menu-test")) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.classList.toggle("hide");
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    var _document$querySelect3;
    (_document$querySelect3 = document.querySelector(".menu-btn-popup")) === null || _document$querySelect3 === void 0 ? void 0 : _document$querySelect3.addEventListener("click", function () {
      var _document$querySelect4;
      (_document$querySelect4 = document.querySelector(".menu-test-popup")) === null || _document$querySelect4 === void 0 ? void 0 : _document$querySelect4.classList.toggle("hide");
    });
  });
  document.querySelectorAll(".popup-test").forEach(function (el) {
    el.addEventListener("click", function () {
      var attr = el.getAttribute("data-popup");
      openPopupByAttr(attr);
    });
  });
  var lngBtn = document.querySelector(".lng-btn");
  lngBtn.addEventListener("click", function () {
    if (sessionStorage.getItem("locale")) {
      sessionStorage.removeItem("locale");
    } else {
      sessionStorage.setItem("locale", "en");
    }
    window.location.reload();
  });
  var authBtn = document.querySelector(".auth-btn");
  var betBtn = document.querySelector(".btn-bet-online");
  authBtn.addEventListener("click", function () {
    if (userId) {
      sessionStorage.removeItem("userId");
    } else {
      sessionStorage.setItem("userId", "777777");
    }
    window.location.reload();
  });
  var btnActiveAll = document.querySelector('.active-all');
  var btnLockAll = document.querySelector('.lock-all');
  var btnWonAll = document.querySelector('.won-all');
  btnActiveAll.addEventListener('click', function () {
    prizeItems.forEach(function (item) {
      return setActiveItem(item);
    });
  });
  btnLockAll.addEventListener('click', function () {
    prizeItems.forEach(function (item) {
      return setLockItem(item);
    });
  });
  btnWonAll.addEventListener('click', function () {
    prizeItems.forEach(function (item) {
      return setWonItem(item);
    });
  });
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwiZ2V0QWN0aXZlV2VlayIsInByb21vU3RhcnREYXRlIiwid2Vla0R1cmF0aW9uIiwiY3VycmVudERhdGUiLCJEYXRlIiwid2Vla0RhdGVzIiwiRGF5IiwiV2VlayIsImZvcm1hdERhdGUiLCJkYXRlIiwiZ2V0RGF0ZSIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJnZXRNb250aCIsImNhbGN1bGF0ZVdlZWtQZXJpb2QiLCJ3ZWVrSW5kZXgiLCJiYXNlU3RhcnQiLCJnZXRUaW1lIiwic3RhcnQiLCJlbmQiLCJhY3RpdmVXZWVrSW5kZXgiLCJpIiwiaXNWZXJpZmllZFVzZXIiLCJwZXJpb2RBbW91bnQiLCJ0YWJsZURhdGEiLCJhY3RpdmVXZWVrIiwibWFpblBhZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ1bmF1dGhNc2dzIiwicXVlcnlTZWxlY3RvckFsbCIsInBhcnRpY2lwYXRlQnRucyIsInJlZGlyZWN0QnRucyIsImxvYWRlciIsImNsb3NlUG9wdXBzIiwicHJpemVJdGVtcyIsInRha2VCb251c0J0bnMiLCJ1a0xlbmciLCJlbkxlbmciLCJ0b2dnbGVDbGFzc2VzIiwiZWxlbWVudHMiLCJjbGFzc05hbWUiLCJmb3JFYWNoIiwiZWwiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJ0b2dnbGVUcmFuc2xhdGVzIiwiZGF0YUF0dHIiLCJzZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJpMThuRGF0YSIsInJlbW92ZUF0dHJpYnV0ZSIsImxvYWRlckJ0biIsImxvY2FsZSIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsImRlYnVnIiwiaGlkZUxvYWRlciIsInRyYW5zbGF0ZVN0YXRlIiwidXNlcklkIiwiTnVtYmVyIiwicmVxdWVzdCIsImxpbmsiLCJleHRyYU9wdGlvbnMiLCJmZXRjaCIsImhlYWRlcnMiLCJ0aGVuIiwicmVzIiwib2siLCJFcnJvciIsImpzb24iLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJyZXBvcnRFcnJvciIsInN0eWxlIiwiZGlzcGxheSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInN0YXJ0c1dpdGgiLCJQcm9taXNlIiwicmVqZWN0IiwiYWRkIiwiYm9keSIsIm92ZXJmbG93IiwicmVtb3ZlIiwic2V0V29uSXRlbSIsIml0ZW0iLCJwb2ludHMiLCJ0ZXh0Q29udGVudCIsInRyYW5zbGF0ZUtleSIsInNldExvY2tJdGVtIiwiYW1vdW50IiwiZ2V0QXR0cmlidXRlIiwic2V0QWN0aXZlSXRlbSIsImNvbmZpcm1Qcml6ZSIsInBvcHVwIiwiY29uZmlybUJ1dHRvbiIsInVuY29uZmlybUJ1dHRvbnMiLCJ0aXRsZSIsInRleHQiLCJpbml0IiwidHJ5RGV0ZWN0VXNlcklkIiwicXVpY2tDaGVja0FuZFJlbmRlciIsImNoZWNrVXNlckF1dGgiLCJzZXRUaW1lb3V0IiwidGFiIiwiYnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhcnRpY2lwYXRlIiwiZSIsIm9wZW5Qb3B1cEVsIiwiY29udGVudFdyYXAiLCJjbG9zZUJ0biIsImNhbmNlbEJ0biIsImNvbnRhaW5zIiwidGFyZ2V0IiwiY2xvc2VBbGxQb3B1cHMiLCJjbG9zZXN0Iiwib3BlblBvcHVwQnlBdHRyIiwibG9nIiwicG9wdXBBbW91bnQiLCJpdGVtUHJpemUiLCJpdGVtQW1vdW50Iiwic3RvcmUiLCJzdGF0ZSIsImdldFN0YXRlIiwiYXV0aCIsImlzQXV0aG9yaXplZCIsImlkIiwiZ191c2VyX2lkIiwiYXR0ZW1wdHMiLCJtYXhBdHRlbXB0cyIsImF0dGVtcHRJbnRlcnZhbCIsIndhaXRGb3JVc2VySWQiLCJyZXNvbHZlIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJsb2FkVHJhbnNsYXRpb25zIiwidHJhbnNsYXRlIiwidW5hdXRoTWVzIiwidXNlcmlkIiwicmVkaXJlY3RCdG4iLCJwYXJ0aWNpcGF0ZUJ0biIsInJlcG9ydERhdGEiLCJvcmlnaW4iLCJlcnJvclRleHQiLCJtZXNzYWdlIiwidHlwZSIsIm5hbWUiLCJzdGFjayIsIm1ldGhvZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ3YXJuIiwiZWxlbXMiLCJsZW5ndGgiLCJlbGVtIiwia2V5IiwicmVmcmVzaExvY2FsaXplZENsYXNzIiwiZWxlbWVudCIsImJhc2VDc3NDbGFzcyIsImxhbmciLCJyZW5kZXJVc2VycyIsIndlZWtOdW0iLCJ1c2VyRGF0YSIsImZpbmQiLCJ3ZWVrIiwidXNlcnMiLCJjdXJyZW50VXNlciIsInVzZXIiLCJwb3B1bGF0ZVVzZXJzVGFibGUiLCJjdXJyZW50VXNlcklkIiwicmVzdWx0c1RhYmxlIiwicmVzdWx0c1RhYmxlT3RoZXIiLCJpc1RvcEN1cnJlbnRVc2VyIiwic2xpY2UiLCJzb21lIiwidG9wVXNlcnNMZW5ndGgiLCJ0b3BVc2VycyIsImRpc3BsYXlVc2VyIiwiaXNDdXJyZW50VXNlciIsInRhYmxlIiwicmVuZGVyUm93Iiwib3B0aW9ucyIsImhpZ2hsaWdodCIsIm5laWdoYm9yIiwidXNlclJvdyIsImNyZWF0ZUVsZW1lbnQiLCJ1c2VyUGxhY2UiLCJpbmRleE9mIiwicHJpemVLZXkiLCJnZXRQcml6ZVRyYW5zbGF0aW9uS2V5IiwibWFza1VzZXJJZCIsInRvRml4ZWQiLCJhcHBlbmQiLCJpbmRleCIsImRlZmF1bHRWYWx1ZSIsIm5lZWRLZXkiLCJwbGFjZSIsInBhcmFtcyIsImxvYWRVc2VycyIsInBhcmFtZXRyIiwicmVxdWVzdHMiLCJyZXEiLCJkYXRhIiwicHVzaCIsImFsbCIsInBvcHVwQXR0ciIsImFsbFBvcHVwcyIsInAiLCJ0YXJnZXRQb3B1cCIsImluaXRDb3VudGRvd24iLCJzZWxlY3RvciIsInN0YXJ0VGltZSIsImVuZFRpbWUiLCJjb250YWluZXIiLCJkYXlzRWwiLCJob3Vyc0VsIiwibWludXRlc0VsIiwicHJvZ3Jlc3NCYXIiLCJ0b3RhbCIsInVwZGF0ZSIsIm5vdyIsImRpZmYiLCJ3aWR0aCIsImRheXMiLCJNYXRoIiwiZmxvb3IiLCJob3VycyIsIm1pbnV0ZXMiLCJTdHJpbmciLCJlbGFwc2VkIiwicGVyY2VudCIsIm1pbiIsIm1heCIsInNldFByb2dyZXNzIiwiZmlsbCIsImxhYmVsIiwiaGVpZ2h0IiwiYmFyIiwiYXR0ciIsImxuZ0J0biIsInJlbW92ZUl0ZW0iLCJzZXRJdGVtIiwicmVsb2FkIiwiYXV0aEJ0biIsImJldEJ0biIsImJ0bkFjdGl2ZUFsbCIsImJ0bkxvY2tBbGwiLCJidG5Xb25BbGwiXSwibWFwcGluZ3MiOiI7OzsrQ0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQSxDQUFDLFlBQVk7RUFBQTtFQUVULElBQU1BLE1BQU0sR0FBRyxxREFBcUQ7RUFFcEUsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFhLENBQUlDLGNBQWMsRUFBRUMsWUFBWSxFQUFLO0lBQ3BELElBQU1DLFdBQVcsR0FBRyxJQUFJQyxJQUFJLEVBQUU7SUFDOUIsSUFBSUMsU0FBUyxHQUFHLEVBQUU7SUFFbEIsSUFBTUMsR0FBRyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUk7SUFDL0IsSUFBTUMsSUFBSSxHQUFHTCxZQUFZLEdBQUdJLEdBQUc7SUFHL0IsSUFBTUUsVUFBVSxHQUFHLFNBQWJBLFVBQVUsQ0FBSUMsSUFBSTtNQUFBLGlCQUNqQkEsSUFBSSxDQUFDQyxPQUFPLEVBQUUsQ0FBQ0MsUUFBUSxFQUFFLENBQUNDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLGNBQUksQ0FBQ0gsSUFBSSxDQUFDSSxRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQUVGLFFBQVEsRUFBRSxDQUFDQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztJQUFBLENBQUU7SUFFeEcsSUFBTUUsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFtQixDQUFJQyxTQUFTLEVBQUs7TUFDdkMsSUFBTUMsU0FBUyxHQUFHZixjQUFjLENBQUNnQixPQUFPLEVBQUU7TUFDMUMsSUFBTUMsS0FBSyxHQUFH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ZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xuXG4gICAgY29uc3QgYXBpVVJMID0gJ2h0dHBzOi8vZmF2LXByb20uY29tL2FwaV9zaGFraHRhcl9uZXdfZ2FtZV91bml2ZXJzZSdcblxuICAgIGNvbnN0IGdldEFjdGl2ZVdlZWsgPSAocHJvbW9TdGFydERhdGUsIHdlZWtEdXJhdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGxldCB3ZWVrRGF0ZXMgPSBbXTtcblxuICAgICAgICBjb25zdCBEYXkgPSAyNCAqIDYwICogNjAgKiAxMDAwO1xuICAgICAgICBjb25zdCBXZWVrID0gd2Vla0R1cmF0aW9uICogRGF5O1xuXG5cbiAgICAgICAgY29uc3QgZm9ybWF0RGF0ZSA9IChkYXRlKSA9PlxuICAgICAgICAgICAgYCR7ZGF0ZS5nZXREYXRlKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIil9LiR7KGRhdGUuZ2V0TW9udGgoKSArIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpfWA7XG5cbiAgICAgICAgY29uc3QgY2FsY3VsYXRlV2Vla1BlcmlvZCA9ICh3ZWVrSW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJhc2VTdGFydCA9IHByb21vU3RhcnREYXRlLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gbmV3IERhdGUoYmFzZVN0YXJ0ICsgd2Vla0luZGV4ICogV2Vlayk7XG4gICAgICAgICAgICBsZXQgZW5kID0gbmV3IERhdGUoc3RhcnQuZ2V0VGltZSgpICsgKHdlZWtEdXJhdGlvbiAqIERheSAtIDEpKTtcbiAgICAgICAgICAgIHJldHVybiB7IHN0YXJ0LCBlbmQgfTtcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgYWN0aXZlV2Vla0luZGV4ID0gbnVsbDtcblxuICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNC60LAg0L/QvtGC0L7Rh9C90L7Qs9C+INGC0LjQttC90Y9cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7IC8vINCe0LHQvNC10LbRg9GU0LzQviAxMCDRgtC40LbQvdGP0LzQuCAo0Y/QutGJ0L4g0L/QvtGC0YDRltCx0L3QviDQsdGW0LvRjNGI0LUsINC/0YDQvtGB0YLQviDQt9C80ZbQvdGW0YLRjCDQu9GW0YfQuNC70YzQvdC40LopXG4gICAgICAgICAgICBjb25zdCB7IHN0YXJ0LCBlbmQgfSA9IGNhbGN1bGF0ZVdlZWtQZXJpb2QoaSk7XG4gICAgICAgICAgICBpZiAoY3VycmVudERhdGUgPj0gc3RhcnQgJiYgY3VycmVudERhdGUgPD0gZW5kKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlV2Vla0luZGV4ID0gaSArIDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYWN0aXZlV2Vla0luZGV4O1xuICAgIH07XG5cbiAgICBjb25zdCBwcm9tb1N0YXJ0RGF0ZSA9IG5ldyBEYXRlKFwiMjAyNS0wNS0wNVQwMDowMDowMFwiKTtcbiAgICBjb25zdCB3ZWVrRHVyYXRpb24gPSAxMDtcblxuICAgIGxldCBpc1ZlcmlmaWVkVXNlciA9IGZhbHNlO1xuXG4gICAgbGV0IHBlcmlvZEFtb3VudCA9IDIgLy8g0LrRltC70YzQutGW0YHRgtGMINC/0LXRgNGW0L7QtNGW0LIg0LIg0LDQutGG0ZbRlywg0YLRgNC10LHQsCDQtNC70Y8g0LrQtdGI0YPQstCw0L3QvdGPINGW0L3RhNC4INC3INGC0LDQsdC70LhcblxuICAgIGxldCB0YWJsZURhdGEgPSBbXVxuICAgIGxldCBhY3RpdmVXZWVrID0gZ2V0QWN0aXZlV2Vlayhwcm9tb1N0YXJ0RGF0ZSwgd2Vla0R1cmF0aW9uKSB8fCAxO1xuICAgIC8vIGxldCBhY3RpdmVXZWVrID0gMlxuXG4gICAgaWYgKGFjdGl2ZVdlZWsgPiAyKSBhY3RpdmVXZWVrID0gMlxuXG5cbiAgICBjb25zdCBtYWluUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmF2LXBhZ2VcIiksXG4gICAgICAgIHVuYXV0aE1zZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudW5hdXRoLW1zZycpLFxuICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFydC1idG4nKSxcbiAgICAgICAgcmVkaXJlY3RCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi1qb2luJyksXG4gICAgICAgIGxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3Bpbm5lci1vdmVybGF5XCIpLFxuICAgICAgICBjbG9zZVBvcHVwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3B1cF9fY2xvc2UnKSxcbiAgICAgICAgcHJpemVJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWFtb3VudC1wb2ludHNdJyksXG4gICAgICAgIHRha2VCb251c0J0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1hY3Rpb249XCJ0YWtlQm9udXNcIl0nKTtcblxuXG4gICAgY29uc3QgdWtMZW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VrTGVuZycpO1xuICAgIGNvbnN0IGVuTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbkxlbmcnKTtcblxuICAgIGNvbnN0IHRvZ2dsZUNsYXNzZXMgPSAoZWxlbWVudHMsIGNsYXNzTmFtZSkgPT4gZWxlbWVudHMuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QudG9nZ2xlKGAke2NsYXNzTmFtZX1gKSk7XG4gICAgY29uc3QgdG9nZ2xlVHJhbnNsYXRlcyA9IChlbGVtZW50cywgZGF0YUF0dHIpID0+IGVsZW1lbnRzLmZvckVhY2goZWwgPT4ge1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJywgYCR7ZGF0YUF0dHJ9YClcbiAgICAgICAgZWwuaW5uZXJIVE1MID0gaTE4bkRhdGFbZGF0YUF0dHJdIHx8ICcqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qICAga2V5OiAgJyArIGRhdGFBdHRyO1xuICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgfSk7XG5cbiAgICBsZXQgbG9hZGVyQnRuID0gZmFsc2VcblxuICAgIC8vIGxldCBsb2NhbGUgPSBcImVuXCJcbiAgICBsZXQgbG9jYWxlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsZVwiKSB8fCBcInVrXCJcblxuICAgIGlmICh1a0xlbmcpIGxvY2FsZSA9ICd1ayc7XG4gICAgaWYgKGVuTGVuZykgbG9jYWxlID0gJ2VuJztcblxuICAgIGxldCBkZWJ1ZyA9IGZhbHNlXG5cbiAgICBpZiAoZGVidWcpIHtcbiAgICAgICAgaGlkZUxvYWRlcigpXG4gICAgfVxuXG4gICAgbGV0IGkxOG5EYXRhID0ge307XG4gICAgY29uc3QgdHJhbnNsYXRlU3RhdGUgPSB0cnVlO1xuICAgIC8vIGxldCB1c2VySWQgPSBudWxsO1xuICAgIGxldCB1c2VySWQgPSBOdW1iZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKSkgPz8gbnVsbFxuXG4gICAgY29uc3QgcmVxdWVzdCA9IGZ1bmN0aW9uIChsaW5rLCBleHRyYU9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKGFwaVVSTCArIGxpbmssIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAuLi4oZXh0cmFPcHRpb25zIHx8IHt9KVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKCdBUEkgZXJyb3InKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdBUEkgcmVxdWVzdCBmYWlsZWQ6JywgZXJyKTtcblxuICAgICAgICAgICAgICAgIHJlcG9ydEVycm9yKGVycik7XG5cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmF2LXBhZ2UnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZi5zdGFydHNXaXRoKFwiaHR0cHM6Ly93d3cuZmF2YmV0LmhyL1wiKSkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJvbW9jaWplL3Byb21vY2lqYS9zdHViLyc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3Byb21vcy9wcm9tby9zdHViLyc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XG4gICAgICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpZGVMb2FkZXIoKXtcbiAgICAgICAgbG9hZGVyLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIlxuICAgICAgICBtYWluUGFnZS5jbGFzc0xpc3QucmVtb3ZlKFwibG9hZGluZ1wiKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldFdvbkl0ZW0oaXRlbSl7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnd29uJyk7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG5cbiAgICAgICAgY29uc3QgcG9pbnRzID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcucHJpemVfX2Ftb3VudC1wb2ludHMnKSA/PyBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5wcml6ZV9faXRlbS1wb2ludHMnKTtcblxuICAgICAgICBwb2ludHMudGV4dENvbnRlbnQgPSB0cmFuc2xhdGVLZXkoXCJ3b25cIilcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRMb2NrSXRlbShpdGVtKXtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCd3b24nKTtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcblxuICAgICAgICBjb25zdCBhbW91bnQgPSBpdGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1hbW91bnQtcG9pbnRzJyk7XG5cbiAgICAgICAgY29uc3QgcG9pbnRzID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcucHJpemVfX2Ftb3VudC1wb2ludHMnKSA/PyBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5wcml6ZV9faXRlbS1wb2ludHMnKTtcblxuICAgICAgICBwb2ludHMudGV4dENvbnRlbnQgPSBgJHthbW91bnR9ICR7dHJhbnNsYXRlS2V5KFwicG9pbnRzXCIpfWBcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldEFjdGl2ZUl0ZW0oaXRlbSl7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnd29uJyk7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cbiAgICAgICAgY29uc3QgYW1vdW50ID0gaXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtYW1vdW50LXBvaW50cycpO1xuXG4gICAgICAgIGNvbnN0IHBvaW50cyA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLnByaXplX19hbW91bnQtcG9pbnRzJykgPz8gaXRlbS5xdWVyeVNlbGVjdG9yKCcucHJpemVfX2l0ZW0tcG9pbnRzJyk7XG5cbiAgICAgICAgcG9pbnRzLnRleHRDb250ZW50ID0gYCR7YW1vdW50fSAke3RyYW5zbGF0ZUtleShcInBvaW50c1wiKX1gXG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb25maXJtUHJpemUocG9wdXAsIGl0ZW0pe1xuICAgICAgICBjb25zdCBjb25maXJtQnV0dG9uID0gcG9wdXAucXVlcnlTZWxlY3RvcignW2RhdGEtY29uZmlybT1cImNvbmZpcm1lZFwiXScpO1xuICAgICAgICBjb25zdCB1bmNvbmZpcm1CdXR0b25zID0gcG9wdXAucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtY29uZmlybT1cInVuY29uZmlybWVkXCJdJyk7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gcG9wdXAucXVlcnlTZWxlY3RvcignLnBvcHVwX190aXRsZScpO1xuICAgICAgICBjb25zdCB0ZXh0ID0gcG9wdXAucXVlcnlTZWxlY3RvcignLnBvcHVwX190ZXh0Jyk7XG5cbiAgICAgICAgc2V0QWN0aXZlSXRlbShpdGVtKTtcblxuICAgICAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKFwiY29uZmlybWVkXCIpO1xuXG4gICAgICAgIHRpdGxlLmlubmVySFRNTCA9IHRyYW5zbGF0ZUtleShcInBvcHVwVGl0bGVZb3VDaG9zZVwiKVxuICAgICAgICB0ZXh0LmlubmVySFRNTCA9IHRyYW5zbGF0ZUtleShcInBvcHVwVGV4dFlvdUNob3NlXCIpXG5cbiAgICAgICAgY29uZmlybUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG5cbiAgICAgICAgdW5jb25maXJtQnV0dG9ucy5mb3JFYWNoKChlbCwgaSkgPT4ge1xuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgbGV0IGF0dGVtcHRzID0gMDtcbiAgICAgICAgY29uc3QgbWF4QXR0ZW1wdHMgPSAyMDtcbiAgICAgICAgY29uc3QgYXR0ZW1wdEludGVydmFsID0gNTA7XG5cbiAgICAgICAgZnVuY3Rpb24gdHJ5RGV0ZWN0VXNlcklkKCkge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5zdG9yZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gd2luZG93LnN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgICAgICAgICAgdXNlcklkID0gc3RhdGUuYXV0aC5pc0F1dGhvcml6ZWQgJiYgc3RhdGUuYXV0aC5pZCB8fCAnJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAod2luZG93LmdfdXNlcl9pZCkge1xuICAgICAgICAgICAgICAgIHVzZXJJZCA9IHdpbmRvdy5nX3VzZXJfaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIGZ1bmN0aW9uIHF1aWNrQ2hlY2tBbmRSZW5kZXIoKSB7XG4gICAgICAgICAgICBjaGVja1VzZXJBdXRoKClcbiAgICAgICAgICAgICAgICAvLyAudGhlbihsb2FkVXNlcnMpXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT57XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoaGlkZUxvYWRlciwgMzAwKTtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YWJsZV9fdGFicy1pdGVtXCIpLmZvckVhY2goKHRhYiwgaSkgPT57XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihpID09PSBhY3RpdmVXZWVrIC0gMSkgdGFiLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAvLyByZW5kZXJVc2VycyhhY3RpdmVXZWVrLCB0YWJsZURhdGEpO1xuICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChidG4gPT4gYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGFydGljaXBhdGUpKTtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwcycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wZW5Qb3B1cEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwLmFjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYob3BlblBvcHVwRWwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG9wZW5Qb3B1cEVsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRXcmFwID0gb3BlblBvcHVwRWwucXVlcnlTZWxlY3RvcignLnBvcHVwX193cmFwJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY29udGVudFdyYXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNsb3NlQnRuID0gb3BlblBvcHVwRWwucXVlcnlTZWxlY3RvcignLnBvcHVwX19jbG9zZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhbmNlbEJ0biA9IG9wZW5Qb3B1cEVsLnF1ZXJ5U2VsZWN0b3IoJy5idG4tY2FuY2VsJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRlbnRXcmFwICYmICFjb250ZW50V3JhcC5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VBbGxQb3B1cHMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZS50YXJnZXQgPT09IGNsb3NlQnRuIHx8IGUudGFyZ2V0ID09PSBjYW5jZWxCdG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VBbGxQb3B1cHMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHByaXplSXRlbXMuZm9yRWFjaChidG4gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwb2ludHMgPSBidG4uZ2V0QXR0cmlidXRlKCdkYXRhLWFtb3VudC1wb2ludHMnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQuY2xvc2VzdCgnLnByaXplX19pdGVtLWJ0bicpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5Qb3B1cEJ5QXR0cihgJHtwb2ludHN9UG9pbnRzUG9wdXBgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuUG9wdXBCeUF0dHIoYCR7cG9pbnRzfVBvaW50c1BvcHVwSW5mb2ApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICB0YWtlQm9udXNCdG5zLmZvckVhY2goYnRuID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGJ0bilcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwLmFjdGl2ZVwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvcHVwQW1vdW50ID0gcG9wdXAuZ2V0QXR0cmlidXRlKCdkYXRhLXBvcHVwLWFtb3VudCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW1Qcml6ZSA9IG51bGxcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaXplSXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbUFtb3VudCA9IGl0ZW0uZ2V0QXR0cmlidXRlKCdkYXRhLWFtb3VudC1wb2ludHMnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpdGVtQW1vdW50ID09PSBwb3B1cEFtb3VudCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtUHJpemUgPSBpdGVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtUHJpemUocG9wdXAsIGl0ZW1Qcml6ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHdhaXRGb3JVc2VySWQgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5RGV0ZWN0VXNlcklkKCk7XG4gICAgICAgICAgICAgICAgaWYgKHVzZXJJZCB8fCBhdHRlbXB0cyA+PSBtYXhBdHRlbXB0cykge1xuICAgICAgICAgICAgICAgICAgICBxdWlja0NoZWNrQW5kUmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGF0dGVtcHRzKys7XG4gICAgICAgICAgICB9LCBhdHRlbXB0SW50ZXJ2YWwpO1xuICAgICAgICB9KTtcblxuICAgICAgICBhd2FpdCB3YWl0Rm9yVXNlcklkO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWRUcmFuc2xhdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiByZXF1ZXN0KGAvbmV3LXRyYW5zbGF0ZXMvJHtsb2NhbGV9P25vY2FjaGU9MWApXG4gICAgICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgICAgICBpMThuRGF0YSA9IGpzb247XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIGNoZWNrVXNlckF1dGgoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJJZClcbiAgICAgICAgaWYgKHVzZXJJZCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCB1bmF1dGhNZXMgb2YgdW5hdXRoTXNncykge1xuICAgICAgICAgICAgICAgIHVuYXV0aE1lcy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVxdWVzdChgL2ZhdnVzZXIvJHt1c2VySWR9P25vY2FjaGU9MWApXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy51c2VyaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3RCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc1ZlcmlmaWVkVXNlciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpc1ZlcmlmaWVkVXNlcilcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3RCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc1ZlcmlmaWVkVXNlciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgcmVkaXJlY3RCdG4gb2YgcmVkaXJlY3RCdG5zKSB7XG4gICAgICAgICAgICAgICAgcmVkaXJlY3RCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgcGFydGljaXBhdGVCdG4gb2YgcGFydGljaXBhdGVCdG5zKSB7XG4gICAgICAgICAgICAgICAgcGFydGljaXBhdGVCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChjb25zdCB1bmF1dGhNZXMgb2YgdW5hdXRoTXNncykge1xuICAgICAgICAgICAgICAgIHVuYXV0aE1lcy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVwb3J0RXJyb3IoZXJyKSB7XG4gICAgICAgIGNvbnN0IHJlcG9ydERhdGEgPSB7XG4gICAgICAgICAgICBvcmlnaW46IHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuICAgICAgICAgICAgdXNlcmlkOiB1c2VySWQsXG4gICAgICAgICAgICBlcnJvclRleHQ6IGVycj8uZXJyb3IgfHwgZXJyPy50ZXh0IHx8IGVycj8ubWVzc2FnZSB8fCAnVW5rbm93biBlcnJvcicsXG4gICAgICAgICAgICB0eXBlOiBlcnI/Lm5hbWUgfHwgJ1Vua25vd25FcnJvcicsXG4gICAgICAgICAgICBzdGFjazogZXJyPy5zdGFjayB8fCAnJ1xuICAgICAgICB9O1xuXG4gICAgICAgIGZldGNoKCdodHRwczovL2Zhdi1wcm9tLmNvbS9hcGktY21zL3JlcG9ydHMvYWRkJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcG9ydERhdGEpXG4gICAgICAgIH0pLmNhdGNoKGNvbnNvbGUud2Fybik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlKCkge1xuICAgICAgICBjb25zdCBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRyYW5zbGF0ZV0nKVxuICAgICAgICBpZiAoZWxlbXMgJiYgZWxlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZih0cmFuc2xhdGVTdGF0ZSl7XG4gICAgICAgICAgICAgICAgZWxlbXMuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0uaW5uZXJIVE1MID0gaTE4bkRhdGFba2V5XSB8fCAnKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiAgIGtleTogICcgKyBrZXk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpMThuRGF0YVtrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRyYW5zbGF0aW9uIHdvcmtzIVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChsb2NhbGUgPT09ICdlbicpIHtcbiAgICAgICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5hZGQoJ2VuJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmVmcmVzaExvY2FsaXplZENsYXNzKG1haW5QYWdlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWZyZXNoTG9jYWxpemVkQ2xhc3MoZWxlbWVudCkge1xuICAgICAgICBsZXQgYmFzZUNzc0NsYXNzID0gXCJcIlxuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGxhbmcgb2YgWyd1aycsICdlbiddKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoYmFzZUNzc0NsYXNzICsgbGFuZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGJhc2VDc3NDbGFzcyArIGxvY2FsZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyVXNlcnMod2Vla051bSwgdXNlckRhdGEgPSBbXSkge1xuICAgICAgICB3ZWVrTnVtID0gTnVtYmVyKHdlZWtOdW0pO1xuICAgICAgICB1c2VyRGF0YSA9IHVzZXJEYXRhLmZpbmQod2VlayA9PiB7XG4gICAgICAgICAgICByZXR1cm4gd2Vlay53ZWVrID09PSB3ZWVrTnVtXG4gICAgICAgIH0pLnVzZXJzO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJEYXRhKTtcblxuICAgICAgICBjb25zdCBjdXJyZW50VXNlciA9IHVzZXJEYXRhLmZpbmQodXNlciA9PiB1c2VyLnVzZXJpZCA9PT0gdXNlcklkKTtcblxuICAgICAgICBjb25zb2xlLmxvZyh1c2VySWQpXG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRVc2VyKVxuICAgICAgICBjb25zb2xlLmxvZyhpc1ZlcmlmaWVkVXNlcilcblxuICAgICAgICBpZih1c2VySWQgJiYgIWN1cnJlbnRVc2VyICYmIGlzVmVyaWZpZWRVc2VyKXtcbiAgICAgICAgICAgIHVzZXJEYXRhID0gWy4uLnVzZXJEYXRhLCB7dXNlcmlkOiB1c2VySWQsIHBvaW50czogMH1dXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2codXNlckRhdGEpO1xuXG4gICAgICAgIHBvcHVsYXRlVXNlcnNUYWJsZSh1c2VyRGF0YSwgdXNlcklkLCB3ZWVrTnVtLCBjdXJyZW50VXNlciwgaXNWZXJpZmllZFVzZXIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBvcHVsYXRlVXNlcnNUYWJsZSh1c2VycywgY3VycmVudFVzZXJJZCwgd2VlaywgY3VycmVudFVzZXIsIGlzVmVyaWZpZWRVc2VyKSB7XG5cbiAgICAgICAgY29uc29sZS5sb2codXNlcnMpO1xuICAgICAgICByZXN1bHRzVGFibGUuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHJlc3VsdHNUYWJsZU90aGVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBpZiAoIXVzZXJzPy5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICBjb25zdCBpc1RvcEN1cnJlbnRVc2VyID0gY3VycmVudFVzZXIgJiYgdXNlcnMuc2xpY2UoMCwgMTApLnNvbWUodXNlciA9PiB1c2VyLnVzZXJpZCA9PT0gY3VycmVudFVzZXJJZCk7XG5cbiAgICAgICAgY29uc3QgdG9wVXNlcnNMZW5ndGggPSAhdXNlcklkIHx8IGlzVG9wQ3VycmVudFVzZXIgID8gMTMgOiAxMDtcblxuICAgICAgICBjb25zdCB0b3BVc2VycyA9IHVzZXJzLnNsaWNlKDAsIHRvcFVzZXJzTGVuZ3RoKTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyh1c2Vycyk7XG4gICAgICAgIHRvcFVzZXJzLmZvckVhY2godXNlciA9PiB7XG4gICAgICAgICAgICBkaXNwbGF5VXNlcih1c2VyLCB1c2VyLnVzZXJpZCA9PT0gY3VycmVudFVzZXJJZCwgcmVzdWx0c1RhYmxlLCB0b3BVc2VycywgaXNUb3BDdXJyZW50VXNlciwgd2Vlayk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhpc1RvcEN1cnJlbnRVc2VyKVxuICAgICAgICBjb25zb2xlLmxvZyhpc1ZlcmlmaWVkVXNlcilcbiAgICAgICAgaWYoaXNWZXJpZmllZFVzZXIgJiYgIWN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygndXNlciB2ZXJpZmllZCcpO1xuICAgICAgICAgICAgZGlzcGxheVVzZXIoY3VycmVudFVzZXIsIHRydWUsIHJlc3VsdHNUYWJsZU90aGVyLCB1c2VycywgZmFsc2UsIHdlZWspO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNUb3BDdXJyZW50VXNlciAmJiBjdXJyZW50VXNlcikge1xuICAgICAgICAgICAgaXNWZXJpZmllZFVzZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIGRpc3BsYXlVc2VyKGN1cnJlbnRVc2VyLCB0cnVlLCByZXN1bHRzVGFibGVPdGhlciwgdXNlcnMsIGZhbHNlLCB3ZWVrKTtcbiAgICAgICAgfVxuXG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5VXNlcih1c2VyLCBpc0N1cnJlbnRVc2VyLCB0YWJsZSwgdXNlcnMsIGlzVG9wQ3VycmVudFVzZXIsIHdlZWspIHtcblxuICAgICAgICBjb25zdCByZW5kZXJSb3cgPSAodXNlckRhdGEsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBoaWdobGlnaHQgPSBmYWxzZSwgbmVpZ2hib3IgPSBmYWxzZSB9ID0gb3B0aW9ucztcbiAgICAgICAgICAgIGNvbnN0IHVzZXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZCgndGFibGVfX3JvdycpO1xuXG4gICAgICAgICAgICBjb25zdCB1c2VyUGxhY2UgPSB1c2Vycy5pbmRleE9mKHVzZXJEYXRhKSArIDE7XG4gICAgICAgICAgICBjb25zdCBwcml6ZUtleSA9IGRlYnVnID8gbnVsbCA6IGdldFByaXplVHJhbnNsYXRpb25LZXkodXNlclBsYWNlLCB3ZWVrKTtcblxuICAgICAgICAgICAgaWYgKHVzZXJQbGFjZSA8PSAzKSB7XG4gICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKGBwbGFjZSR7dXNlclBsYWNlfWApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaGlnaGxpZ2h0IHx8IGlzQ3VycmVudFVzZXIgJiYgIW5laWdoYm9yKSB7XG4gICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKCd5b3UnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmVpZ2hib3IpIHtcbiAgICAgICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoJ19uZWlnaGJvcicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1c2VyUm93LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke3VzZXJQbGFjZSA8IDEwID8gJzAnICsgdXNlclBsYWNlIDogdXNlclBsYWNlfVxuICAgICAgICAgICAgICAgICR7aXNDdXJyZW50VXNlciAmJiAhbmVpZ2hib3IgPyAnPHNwYW4gY2xhc3M9XCJ5b3VcIj4nICsgdHJhbnNsYXRlS2V5KFwieW91XCIpICsgJzwvc3Bhbj4nIDogJyd9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke2lzQ3VycmVudFVzZXIgJiYgIW5laWdoYm9yID8gdXNlckRhdGEudXNlcmlkIDogbWFza1VzZXJJZCh1c2VyRGF0YS51c2VyaWQpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHtOdW1iZXIodXNlckRhdGEucG9pbnRzKS50b0ZpeGVkKDIpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHtwcml6ZUtleSA/IHRyYW5zbGF0ZUtleShwcml6ZUtleSkgOiAnIC0gJ31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuXG4gICAgICAgICAgICB0YWJsZS5hcHBlbmQodXNlclJvdyk7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChpc0N1cnJlbnRVc2VyICYmICFpc1RvcEN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHVzZXJzLmluZGV4T2YodXNlcik7XG4gICAgICAgICAgICBpZiAodXNlcnNbaW5kZXggLSAxXSkge1xuICAgICAgICAgICAgICAgIHJlbmRlclJvdyh1c2Vyc1tpbmRleCAtIDFdLCB7IG5laWdoYm9yOiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVuZGVyUm93KHVzZXIsIHsgaGlnaGxpZ2h0OiB0cnVlIH0pO1xuICAgICAgICAgICAgaWYgKHVzZXJzW2luZGV4ICsgMV0pIHtcbiAgICAgICAgICAgICAgICByZW5kZXJSb3codXNlcnNbaW5kZXggKyAxXSwgeyBuZWlnaGJvcjogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlbmRlclJvdyh1c2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlS2V5KGtleSwgZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgIGlmICgha2V5KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5lZWRLZXkgPSBkZWJ1ZyA/IGtleSA6IGAqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qIGtleTogJHtrZXl9YFxuXG4gICAgICAgIGRlZmF1bHRWYWx1ZSA9ICBuZWVkS2V5IHx8IGtleTtcbiAgICAgICAgcmV0dXJuIGkxOG5EYXRhW2tleV0gfHwgZGVmYXVsdFZhbHVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1hc2tVc2VySWQodXNlcklkKSB7XG4gICAgICAgIHJldHVybiBcIioqXCIgKyB1c2VySWQudG9TdHJpbmcoKS5zbGljZSgyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQcml6ZVRyYW5zbGF0aW9uS2V5KHBsYWNlLCB3ZWVrKSB7XG4gICAgICAgIGlmIChwbGFjZSA8PSAzKSByZXR1cm4gYHByaXplXyR7d2Vla30tJHtwbGFjZX1gO1xuICAgICAgICBpZiAocGxhY2UgPD0gMTApIHJldHVybiBgcHJpemVfJHt3ZWVrfS00LTEwYDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDI1KSByZXR1cm4gYHByaXplXyR7d2Vla30tMTEtMjVgO1xuICAgICAgICBpZiAocGxhY2UgPD0gNTApIHJldHVybiBgcHJpemVfJHt3ZWVrfS0yNi01MGA7XG4gICAgICAgIGlmIChwbGFjZSA8PSA3NSkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTUxLTc1YDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDEwMCkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTc2LTEwMGA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAxMjUpIHJldHVybiBgcHJpemVfJHt3ZWVrfS0xMDEtMTI1YDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDE1MCkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTEyNi0xNTBgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMTc1KSByZXR1cm4gYHByaXplXyR7d2Vla30tMTUxLTE3NWA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAyMDApIHJldHVybiBgcHJpemVfJHt3ZWVrfS0xNzYtMjAwYDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwYXJ0aWNpcGF0ZSgpIHtcbiAgICAgICAgaWYgKCF1c2VySWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7IHVzZXJpZDogdXNlcklkIH07XG4gICAgICAgIGZldGNoKGFwaVVSTCArICcvdXNlci8nLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXJhbXMpXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgICAgICAgbG9hZGVyQnRuID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHRvZ2dsZUNsYXNzZXMocGFydGljaXBhdGVCdG5zLCBcImxvYWRlclwiKVxuICAgICAgICAgICAgICAgIHRvZ2dsZVRyYW5zbGF0ZXMocGFydGljaXBhdGVCdG5zLCBcImxvYWRlclwiKVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZVRyYW5zbGF0ZXMocGFydGljaXBhdGVCdG5zLCBcImxvYWRlcl9yZWFkeVwiKVxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVDbGFzc2VzKHBhcnRpY2lwYXRlQnRucywgXCJkb25lXCIpXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUNsYXNzZXMocGFydGljaXBhdGVCdG5zLCBcImxvYWRlclwiKVxuICAgICAgICAgICAgICAgIH0sIDUwMClcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrVXNlckF1dGgoKVxuICAgICAgICAgICAgICAgICAgICBsb2FkVXNlcnMoXCI/bm9jYWNoZT0xXCIpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlclVzZXJzKGFjdGl2ZVdlZWssIHRhYmxlRGF0YSlcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9LCAxMDAwKVxuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQVBJIHJlcXVlc3QgZmFpbGVkOicsIGVycik7XG5cbiAgICAgICAgICAgICAgICByZXBvcnRFcnJvcihlcnIpO1xuXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhdi1wYWdlJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuc3RhcnRzV2l0aChcImh0dHBzOi8vd3d3LmZhdmJldC5oci9cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3Byb21vY2lqZS9wcm9tb2NpamEvc3R1Yi8nO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcm9tb3MvcHJvbW8vc3R1Yi8nO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGxvYWRVc2VycyhwYXJhbWV0cikge1xuICAgICAgICBjb25zdCByZXF1ZXN0cyA9IFtdO1xuICAgICAgICB0YWJsZURhdGEubGVuZ3RoID0gMFxuXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHBlcmlvZEFtb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCB3ZWVrID0gaTsgLy8g0LDQsdC+INCx0YPQtNGMLdGP0LrQsCDQu9C+0LPRltC60LAg0LTQu9GPINGE0L7RgNC80YPQstCw0L3QvdGPINC90L7QvNC10YDQsCDRgtC40LbQvdGPXG4gICAgICAgICAgICBjb25zdCByZXEgPSByZXF1ZXN0KGAvdXNlcnMvJHt3ZWVrfSR7cGFyYW1ldHIgPyBwYXJhbWV0ciA6IFwiXCJ9YCkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICB0YWJsZURhdGEucHVzaCh7IHdlZWssIHVzZXJzOiBkYXRhIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJlcXVlc3RzLnB1c2gocmVxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChyZXF1ZXN0cylcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvYWRpbmcgdXNlcnM6JywgZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvcGVuUG9wdXBCeUF0dHIocG9wdXBBdHRyKSB7XG5cbiAgICAgICAgY29uc3QgYWxsUG9wdXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvcHVwJyk7XG4gICAgICAgIGFsbFBvcHVwcy5mb3JFYWNoKHAgPT4gcC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XG4gICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5hZGQoJ292ZXJsYXknKTtcblxuICAgICAgICBjb25zdCB0YXJnZXRQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wb3B1cFtkYXRhLXBvcHVwPVwiJHtwb3B1cEF0dHJ9XCJdYCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRhcmdldFBvcHVwKVxuICAgICAgICBjb25zb2xlLmxvZyhwb3B1cEF0dHIpXG4gICAgICAgIGlmICh0YXJnZXRQb3B1cCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgdGFyZ2V0UG9wdXAuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICAvLyBtYWluUGFnZS5jbGFzc0xpc3QuYWRkKCdvdmVybGF5Jyk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBzJykuY2xhc3NMaXN0LnJlbW92ZSgnX29wYWNpdHknKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBjbG9zZUFsbFBvcHVwcygpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvcHVwJykuZm9yRWFjaChwID0+IHAuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBzJykuY2xhc3NMaXN0LmFkZCgnX29wYWNpdHknKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdhdXRvJztcbiAgICAgICAgbWFpblBhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcmxheScpO1xuICAgIH1cblxuICAgIGxvYWRUcmFuc2xhdGlvbnMoKVxuICAgICAgICAudGhlbihpbml0KSAvLyDQt9Cw0L/Rg9GB0Log0ZbQvdGW0YLRgyDRgdGC0L7RgNGW0L3QutC4XG5cblxuICAgIC8vIHNldFRpbWVvdXQoaGlkZUxvYWRlciwgNjAwKTtcblxuICAgIGZ1bmN0aW9uIGluaXRDb3VudGRvd24oc2VsZWN0b3IsIHN0YXJ0VGltZSwgZW5kVGltZSkge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxuICAgICAgICBpZiAoIWNvbnRhaW5lcikgcmV0dXJuXG5cbiAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwidGltZXJcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZGF5c1wiPjAwPC9zcGFuPtCUIDpcbiAgICAgIDxzcGFuIGNsYXNzPVwiaG91cnNcIj4wMDwvc3Bhbj7QkyA6XG4gICAgICA8c3BhbiBjbGFzcz1cIm1pbnV0ZXNcIj4wMDwvc3Bhbj7QpVxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzc1wiPlxuICAgICAgPGRpdiBjbGFzcz1cInByb2dyZXNzX19iYXJcIj48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYFxuXG4gICAgICAgIGNvbnN0IGRheXNFbCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuZGF5cycpXG4gICAgICAgIGNvbnN0IGhvdXJzRWwgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmhvdXJzJylcbiAgICAgICAgY29uc3QgbWludXRlc0VsID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5taW51dGVzJylcbiAgICAgICAgY29uc3QgcHJvZ3Jlc3NCYXIgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignLnByb2dyZXNzX19iYXInKVxuXG4gICAgICAgIGNvbnN0IHRvdGFsID0gbmV3IERhdGUoZW5kVGltZSkuZ2V0VGltZSgpIC0gbmV3IERhdGUoc3RhcnRUaW1lKS5nZXRUaW1lKClcblxuICAgICAgICBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgICAgICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpXG4gICAgICAgICAgICBjb25zdCBkaWZmID0gbmV3IERhdGUoZW5kVGltZSkuZ2V0VGltZSgpIC0gbm93XG5cbiAgICAgICAgICAgIGlmIChkaWZmIDw9IDApIHtcbiAgICAgICAgICAgICAgICBkYXlzRWwudGV4dENvbnRlbnQgPSAnMDAnXG4gICAgICAgICAgICAgICAgaG91cnNFbC50ZXh0Q29udGVudCA9ICcwMCdcbiAgICAgICAgICAgICAgICBtaW51dGVzRWwudGV4dENvbnRlbnQgPSAnMDAnXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3NCYXIuc3R5bGUud2lkdGggPSAnMTAwJSdcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKVxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBkYXlzID0gTWF0aC5mbG9vcihkaWZmIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKVxuICAgICAgICAgICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKChkaWZmIC8gKDEwMDAgKiA2MCAqIDYwKSkgJSAyNClcbiAgICAgICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKChkaWZmIC8gKDEwMDAgKiA2MCkpICUgNjApXG5cbiAgICAgICAgICAgIGRheXNFbC50ZXh0Q29udGVudCA9IFN0cmluZyhkYXlzKS5wYWRTdGFydCgyLCAnMCcpXG4gICAgICAgICAgICBob3Vyc0VsLnRleHRDb250ZW50ID0gU3RyaW5nKGhvdXJzKS5wYWRTdGFydCgyLCAnMCcpXG4gICAgICAgICAgICBtaW51dGVzRWwudGV4dENvbnRlbnQgPSBTdHJpbmcobWludXRlcykucGFkU3RhcnQoMiwgJzAnKVxuXG4gICAgICAgICAgICBjb25zdCBlbGFwc2VkID0gbm93IC0gbmV3IERhdGUoc3RhcnRUaW1lKS5nZXRUaW1lKClcbiAgICAgICAgICAgIGNvbnN0IHBlcmNlbnQgPSBNYXRoLm1pbihNYXRoLm1heCgoZWxhcHNlZCAvIHRvdGFsKSAqIDEwMCwgMCksIDEwMClcbiAgICAgICAgICAgIHByb2dyZXNzQmFyLnN0eWxlLndpZHRoID0gcGVyY2VudCArICclJ1xuICAgICAgICB9XG5cbiAgICAgICAgdXBkYXRlKClcbiAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh1cGRhdGUsIDEwMDApXG4gICAgfVxuXG5cbiAgICBpbml0Q291bnRkb3duKCcuaW5mb19fbWF0Y2gtbmV4dC10aW1lJywgJzIwMjUtMTAtMDFUMTI6MDA6MDAnLCAnMjAyNS0xMC0yMFQxMjowMDowMCcpXG5cblxuXG4gICAgZnVuY3Rpb24gc2V0UHJvZ3Jlc3MoZWwsIHBlcmNlbnQpIHtcbiAgICAgICAgY29uc3QgZmlsbCA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5wcm9ncmVzcy1maWxsJyk7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gZWwucXVlcnlTZWxlY3RvcignLnByb2dyZXNzLWxhYmVsJyk7XG4gICAgICAgIGZpbGwuc3R5bGUuaGVpZ2h0ID0gcGVyY2VudCArIFwiJVwiO1xuICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9IGAke3BlcmNlbnR9LzEwMGA7XG4gICAgfVxuXG4vLyDQv9GA0LjQutC70LDQtCDQstC40LrQvtGA0LjRgdGC0LDQvdC90Y86XG4gICAgY29uc3QgYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2dyZXNzLWJhcicpO1xuICAgIHNldFByb2dyZXNzKGJhciwgNzUpO1xuXG4vLyBURVNUXG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1idG5cIik/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtdGVzdFwiKT8uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWJ0bi1wb3B1cFwiKT8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS10ZXN0LXBvcHVwXCIpPy5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBvcHVwLXRlc3RcIikuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGF0dHIgPSBlbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBvcHVwXCIpO1xuICAgICAgICAgICAgb3BlblBvcHVwQnlBdHRyKGF0dHIpO1xuICAgICAgICB9KVxuICAgIH0pXG5cbiAgICBjb25zdCBsbmdCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxuZy1idG5cIilcblxuICAgIGxuZ0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBpZiAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsZVwiKSkge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcImxvY2FsZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJsb2NhbGVcIiwgXCJlblwiKTtcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBhdXRoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hdXRoLWJ0blwiKVxuICAgIGNvbnN0IGJldEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLWJldC1vbmxpbmVcIilcblxuICAgIGF1dGhCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBpZih1c2VySWQpe1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcInVzZXJJZFwiKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJ1c2VySWRcIiwgXCI3Nzc3NzdcIilcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgICB9KTtcblxuXG4gICAgY29uc3QgYnRuQWN0aXZlQWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZS1hbGwnKTtcbiAgICBjb25zdCBidG5Mb2NrQWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvY2stYWxsJyk7XG4gICAgY29uc3QgYnRuV29uQWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndvbi1hbGwnKTtcblxuICAgIGJ0bkFjdGl2ZUFsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcHJpemVJdGVtcy5mb3JFYWNoKGl0ZW0gPT4gc2V0QWN0aXZlSXRlbShpdGVtKSk7XG4gICAgfSk7XG5cbiAgICBidG5Mb2NrQWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBwcml6ZUl0ZW1zLmZvckVhY2goaXRlbSA9PiBzZXRMb2NrSXRlbShpdGVtKSk7XG4gICAgfSk7XG5cbiAgICBidG5Xb25BbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHByaXplSXRlbXMuZm9yRWFjaChpdGVtID0+IHNldFdvbkl0ZW0oaXRlbSkpO1xuICAgIH0pO1xuXG59KSgpO1xuIl19
