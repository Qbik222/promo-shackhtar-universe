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
  var apiURL = 'https://fav-prom.com/api_shakhtar_new_game_universe';
  var isVerifiedUser = false;
  var promoStartDate = new Date("2025-10-14");
  var matches = [{
    date: '2025-10-23T19:45:00',
    id: 1
  },
  // Ліга конференцій: Шахтар - Легія
  {
    date: '2025-10-25T18:00:00',
    id: 2
  },
  // УПЛ: Шахтар - Кудрівка
  {
    date: '2025-10-28T17:00:00',
    id: 3
  },
  // Кубок України: Динамо - Шахтар
  {
    date: '2025-11-01T18:00:00',
    id: 4
  },
  // УПЛ: Шахтар - Динамо
  {
    date: '2025-11-06T19:45:00',
    id: 5
  },
  // Ліга конференцій: Шахтар - Брейдаблік
  {
    date: '2025-11-08T18:00:00',
    id: 6
  },
  // УПЛ: Шахтар - СК Полтава
  {
    date: '2025-11-22T18:00:00',
    id: 7
  },
  // УПЛ: Оболонь - Шахтар
  {
    date: '2025-11-27T22:00:00',
    id: 8
  },
  // Ліга конференцій: Шемрок Роверс - Шахтар
  {
    date: '2025-11-29T18:00:00',
    id: 9
  },
  // УПЛ: Шахтар - Кривбас
  {
    date: '2025-12-06T18:00:00',
    id: 10
  },
  // УПЛ: Колос - Шахтар
  {
    date: '2025-12-11T22:00:00',
    id: 11
  },
  // Ліга конференцій: Хамрун Спартанс - Шахтар
  {
    date: '2025-12-13T18:00:00',
    id: 12
  },
  // УПЛ: Шахтар - Епіцентр
  {
    date: '2025-12-18T22:00:00',
    id: 13
  } // Ліга конференцій: Шахтар - Рієка
  ];

  var mainPage = document.querySelector(".fav-page"),
    unauthMsgs = document.querySelectorAll('.unauth-msg'),
    participateBtns = document.querySelectorAll('.part-btn'),
    redirectBtns = document.querySelectorAll('.btn-join'),
    loader = document.querySelector(".spinner-overlay"),
    prizeItems = document.querySelectorAll('[data-amount-points]'),
    pointsBar = document.querySelector('.progress-bar'),
    prizeBlock = document.querySelector('.prize'),
    popups = document.querySelector('.popups'),
    lastUpd = document.querySelector('.prize__last-upd');
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

  // let locale = "en"
  var locale = sessionStorage.getItem("locale") || "uk";
  if (ukLeng) locale = 'uk';
  if (enLeng) locale = 'en';
  var debug = false;
  if (debug) {
    hideLoader();
  }
  var userPoints = 0;
  var i18nData = {};
  var translateState = true;
  var userId = null;
  // let userId = Number(sessionStorage.getItem("userId")) ?? null
  userId = 100300268;
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
  function showNextMatch(testId) {
    var now = new Date("2025-10-23T19:44:40");
    var nextMatch = matches.find(function (match) {
      return new Date(match.date) > now;
    }) || matches[matches.length - 1];
    var prevMatchIndex = matches.findIndex(function (match) {
      return match.id === nextMatch.id;
    }) - 1;
    var prevMatchDate = prevMatchIndex >= 0 ? new Date(matches[prevMatchIndex].date) : promoStartDate;
    document.querySelectorAll('[data-match]').forEach(function (el) {
      var matchId = Number(el.getAttribute('data-match'));
      if (testId) {
        var _matches;
        nextMatch = matches.find(function (m) {
          return m.id === testId;
        }) || matches[0];
        prevMatchDate = ((_matches = matches[nextMatch.id - 2]) === null || _matches === void 0 ? void 0 : _matches.date) || promoStartDate;
      }
      if (matchId === nextMatch.id) {
        el.classList.remove('hide');
        initCountdown('.info__match-next-time', prevMatchDate, nextMatch.date, el);
      } else {
        el.classList.add('hide');
      }
    });
  }

  // function showNextMatch(testId) {
  //
  //     const now = new Date();
  //
  //     let nextMatch = matches.find(match => new Date(match.date) > now) || matches[matches.length - 1];
  //
  //     const prevMatchIndex = matches.findIndex(match => match.id === nextMatch.id) - 1;
  //     let prevMatchDate = prevMatchIndex >= 0
  //         ? new Date(matches[prevMatchIndex].date)
  //         : promoStartDate;
  //
  //     document.querySelectorAll('[data-match]').forEach(el => {
  //         const matchId = Number(el.getAttribute('data-match'));
  //
  //         nextMatch = matches[3]
  //         prevMatchDate = matches[nextMatch.id - 1].date || promoStartDate
  //
  //         if (matchId === nextMatch.id) {
  //             el.classList.remove('hide');
  //             initCountdown('.info__match-next-time', prevMatchDate, nextMatch.date, el)
  //         } else {
  //             el.classList.add('hide');
  //         }
  //     });
  // }

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
    console.log(item);
    var amount = item.getAttribute('data-amount-points');
    var points = (_item$querySelector3 = item.querySelector('.prize__amount-points')) !== null && _item$querySelector3 !== void 0 ? _item$querySelector3 : item.querySelector('.prize__item-points');
    points.textContent = "".concat(amount, " ").concat(translateKey("points"));
  }
  function confirmPrize(popup, item) {
    console.log(item);

    // request('/user/prize', {
    //     method: 'POST'
    //     body: JSON.stringify({
    //         userid: userId,
    //         prizeid
    //     })
    //
    // })

    var confirmButton = popup.querySelector('[data-confirm="confirmed"]');
    var unconfirmButtons = popup.querySelectorAll('[data-confirm="unconfirmed"]');
    var title = popup.querySelector('.popup__title');
    var text = popup.querySelector('.popup__text');
    setWonItem(item);
    popup.classList.add("confirmed");
    title.innerHTML = translateKey("popupTitleYouChose");
    text.innerHTML = translateKey("popupTextYouChose");
    confirmButton.classList.remove('hide');
    unconfirmButtons.forEach(function (el, i) {
      el.classList.add('hide');
    });
  }
  function setLastUpdatedText(element, dateString, locale) {
    var lastUpdLocale = locale === 'uk' ? 'uk-UA' : 'en-US';
    var formattedDate = new Date(dateString).toLocaleString(lastUpdLocale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
    element.textContent = formattedDate;
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
              checkUserAuth().then(function () {
                setTimeout(hideLoader, 300);
                showNextMatch();
                prizeBlock.addEventListener('click', function (e) {
                  var prizeItem = e.target.closest('[data-amount-points]');

                  // Якщо натиснули на приз
                  if (prizeItem) {
                    var points = prizeItem.getAttribute('data-amount-points');
                    if (e.target.closest('.prize__item-btn')) {
                      openPopupByAttr("".concat(points, "PointsPopup"));
                    } else {
                      openPopupByAttr("".concat(points, "PointsPopupInfo"));
                    }
                  }
                });
                mainPage.addEventListener('click', function (e) {
                  var participateBtn = e.target.closest('.part-btn');
                  if (participateBtn) {
                    // логіка участі
                    participate();
                    return;
                  }
                });
                popups.addEventListener('click', function (e) {
                  var takeBtn = e.target.closest('[data-action="takeBonus"]');
                  var closeBtn = e.target.closest('.popup__close');
                  var openPopupEl = document.querySelector('.popup.active');

                  // Якщо натиснули на кнопку "Взяти бонус"
                  if (takeBtn) {
                    var popup = document.querySelector(".popup.active");
                    if (!popup) return;
                    var popupAmount = Number(popup.getAttribute('data-popup-amount'));
                    var itemPrize = prizeBlock.querySelector("[data-amount-points=\"".concat(popupAmount, "\"]"));
                    if (userPoints >= popupAmount) {
                      toggleClasses([takeBtn], "loader");
                      toggleTranslates([takeBtn], "loader");
                      request('/user/prize', {
                        method: "POST",
                        body: JSON.stringify({
                          userid: userId,
                          prizeid: popupAmount
                        })
                      }).then(function (res) {
                        setTimeout(function () {
                          toggleTranslates([takeBtn], "loader_ready");
                          toggleClasses([takeBtn], "done");
                          setCardState(prizeItems, res.user.prizes, res.user.points);
                          setLastUpdatedText(lastUpd, res.user.lastUpdated, locale);
                          setTimeout(function () {
                            confirmPrize(popup, itemPrize);
                          }, 100);
                        }, 500);
                      });
                    }
                    return;
                  }

                  // хрестик щоб закривав попап
                  if (closeBtn) {
                    closeAllPopups();
                    return;
                  }

                  // закриваєм попап якщо клікнули за його межами
                  if (openPopupEl) {
                    // console.log(openPopupEl)
                    var contentWrap = openPopupEl.querySelector('.popup__wrap');
                    // console.log(contentWrap);
                    var _closeBtn = openPopupEl.querySelector('.popup__close');
                    var cancelBtn = openPopupEl.querySelector('.btn-cancel');
                    if (contentWrap && !contentWrap.contains(e.target)) {
                      closeAllPopups();
                    }
                    if (e.target === _closeBtn || e.target === cancelBtn) {
                      closeAllPopups();
                    }
                  }
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
    lastUpd.classList.add('hide');
    setProgress(pointsBar, 0);
    setCardState(prizeItems, [], 0);
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
          userPoints = res.points;
          participateBtns.forEach(function (item) {
            return item.classList.add('hide');
          });
          redirectBtns.forEach(function (item) {
            return item.classList.remove('hide');
          });
          isVerifiedUser = true;
          setProgress(pointsBar, userPoints);
          var lastUpdLocale = locale === "uk" ? 'uk-UA' : "en-US";
          lastUpd.classList.remove('hide');
          setLastUpdatedText(lastUpd, res.lastUpdated, locale);
          setCardState(prizeItems, res.prizes, userPoints);
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
      toggleClasses(participateBtns, "loader");
      toggleTranslates(participateBtns, "loader");
      setTimeout(function () {
        toggleTranslates(participateBtns, "loader_ready");
        toggleClasses(participateBtns, "done");
        toggleClasses(participateBtns, "loader");
      }, 500);
      setTimeout(function () {
        checkUserAuth();
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

  function initCountdown(selector, startTime, endTime, elem) {
    var container = elem.querySelector(selector);
    console.log(container);
    if (!container) return;
    container.innerHTML = "\n        <div class=\"timer\">\n            <span class=\"days\">00</span>\u0414 :\n            <span class=\"hours\">00</span>\u0413 :\n            <span class=\"minutes\">00</span>\u0425\n        </div>\n        <div class=\"progress\">\n            <div class=\"progress__bar\"></div>\n        </div>\n    ";
    var daysEl = container.querySelector('.days');
    var hoursEl = container.querySelector('.hours');
    var minutesEl = container.querySelector('.minutes');
    var progressBar = container.querySelector('.progress__bar');
    var start = new Date(startTime).getTime();
    var end = new Date(endTime).getTime();
    var total = end - start;
    function update() {
      var now = Date.now();
      var diff = end - now;

      // Якщо таймер закінчився
      if (diff <= 0) {
        console.log("end");
        daysEl.textContent = '00';
        hoursEl.textContent = '00';
        minutesEl.textContent = '00';
        progressBar.style.width = '100%';
        clearInterval(interval);
        showNextMatch();
        return;
      }

      // Таймер: скільки залишилось до кінця
      var days = Math.floor(diff / (1000 * 60 * 60 * 24));
      var hours = Math.floor(diff / (1000 * 60 * 60) % 24);
      var minutes = Math.floor(diff / (1000 * 60) % 60);
      daysEl.textContent = String(days).padStart(2, '0');
      hoursEl.textContent = String(hours).padStart(2, '0');
      minutesEl.textContent = String(minutes).padStart(2, '0');

      // Прогрес: скільки вже минуло від startTime до endTime
      var elapsed = now - start;
      var percent = Math.min(Math.max(elapsed / total * 100, 0), 100);
      progressBar.style.width = percent + '%';
    }
    update();
    var interval = setInterval(update, 1000);
  }
  function setProgress(el, points) {
    var checkpoints = [{
      p: 0,
      v: 0
    }, {
      p: 5,
      v: 8.4
    }, {
      p: 10,
      v: 21.2
    }, {
      p: 25,
      v: 34.1
    }, {
      p: 40,
      v: 46.8
    }, {
      p: 45,
      v: 59.4
    }, {
      p: 50,
      v: 72.2
    }, {
      p: 85,
      v: 85
    }, {
      p: 100,
      v: 96
    }];
    if (window.innerWidth <= 600) {
      var newValues = [8, 20.9, 33.9, 46.9, 59.8, 72.8, 85.6, 98.3];
      checkpoints.forEach(function (point, index) {
        if (index > 0) point.v = newValues[index - 1];
      });
    }
    var getProgress = function getProgress(points) {
      if (points <= checkpoints[0].p) return checkpoints[0].v;
      if (points >= checkpoints.at(-1).p) return checkpoints.at(-1).v;
      for (var i = 0; i < checkpoints.length - 1; i++) {
        var _checkpoints$i = checkpoints[i],
          p1 = _checkpoints$i.p,
          v1 = _checkpoints$i.v;
        var _checkpoints = checkpoints[i + 1],
          p2 = _checkpoints.p,
          v2 = _checkpoints.v;
        if (points >= p1 && points <= p2) {
          var ratio = (points - p1) / (p2 - p1);
          return v1 + ratio * (v2 - v1);
        }
      }
      return 0; // запасний варіант, щоб уникнути undefined
    };

    var progressValue = getProgress(points);
    var percent = Number.isFinite(progressValue) ? progressValue.toFixed(2) : "0";
    var topCounterOfPoints = document.querySelector(".progress-top");
    var fadeValue = window.innerWidth <= 600 ? 98 : 91;
    if (points >= fadeValue) {
      topCounterOfPoints.classList.add('hide');
    }
    var fill = el.querySelector('.progress-fill');
    var label = el.querySelector('.progress-label');
    fill.style.height = percent + "%";
    topCounterOfPoints.textContent = "".concat(points, "/100");
    label.textContent = "".concat(points, "/100");
  }
  function setCardState(cards) {
    var userPrizes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var userPoints = arguments.length > 2 ? arguments[2] : undefined;
    cards.forEach(function (card) {
      var pointsCardValue = Number(card.getAttribute('data-amount-points'));
      var isTakenPrize = userPrizes.includes(function (id) {
        return id === pointsCardValue;
      });
      if (userPoints >= pointsCardValue) {
        if (isTakenPrize) {
          setWonItem(card);
        }
        setActiveItem(card);
      } else {
        setLockItem(card);
      }
    });
  }

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
  document.querySelectorAll('[data-test-id]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var id = Number(btn.getAttribute('data-test-id'));
      showNextMatch(id);
    });
  });
  document.querySelector(".match-test").addEventListener('click', function () {
    document.querySelector(".menu-test-match").classList.toggle("hide");
  });
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwiaXNWZXJpZmllZFVzZXIiLCJwcm9tb1N0YXJ0RGF0ZSIsIkRhdGUiLCJtYXRjaGVzIiwiZGF0ZSIsImlkIiwibWFpblBhZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ1bmF1dGhNc2dzIiwicXVlcnlTZWxlY3RvckFsbCIsInBhcnRpY2lwYXRlQnRucyIsInJlZGlyZWN0QnRucyIsImxvYWRlciIsInByaXplSXRlbXMiLCJwb2ludHNCYXIiLCJwcml6ZUJsb2NrIiwicG9wdXBzIiwibGFzdFVwZCIsInVrTGVuZyIsImVuTGVuZyIsInRvZ2dsZUNsYXNzZXMiLCJlbGVtZW50cyIsImNsYXNzTmFtZSIsImZvckVhY2giLCJlbCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInRvZ2dsZVRyYW5zbGF0ZXMiLCJkYXRhQXR0ciIsInNldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsImkxOG5EYXRhIiwicmVtb3ZlQXR0cmlidXRlIiwibG9jYWxlIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiZGVidWciLCJoaWRlTG9hZGVyIiwidXNlclBvaW50cyIsInRyYW5zbGF0ZVN0YXRlIiwidXNlcklkIiwicmVxdWVzdCIsImxpbmsiLCJleHRyYU9wdGlvbnMiLCJmZXRjaCIsImhlYWRlcnMiLCJ0aGVuIiwicmVzIiwib2siLCJFcnJvciIsImpzb24iLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJyZXBvcnRFcnJvciIsInN0eWxlIiwiZGlzcGxheSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInN0YXJ0c1dpdGgiLCJQcm9taXNlIiwicmVqZWN0IiwiYWRkIiwiYm9keSIsIm92ZXJmbG93IiwicmVtb3ZlIiwic2hvd05leHRNYXRjaCIsInRlc3RJZCIsIm5vdyIsIm5leHRNYXRjaCIsImZpbmQiLCJtYXRjaCIsImxlbmd0aCIsInByZXZNYXRjaEluZGV4IiwiZmluZEluZGV4IiwicHJldk1hdGNoRGF0ZSIsIm1hdGNoSWQiLCJOdW1iZXIiLCJnZXRBdHRyaWJ1dGUiLCJtIiwiaW5pdENvdW50ZG93biIsInNldFdvbkl0ZW0iLCJpdGVtIiwicG9pbnRzIiwidGV4dENvbnRlbnQiLCJ0cmFuc2xhdGVLZXkiLCJzZXRMb2NrSXRlbSIsImFtb3VudCIsInNldEFjdGl2ZUl0ZW0iLCJsb2ciLCJjb25maXJtUHJpemUiLCJwb3B1cCIsImNvbmZpcm1CdXR0b24iLCJ1bmNvbmZpcm1CdXR0b25zIiwidGl0bGUiLCJ0ZXh0IiwiaSIsInNldExhc3RVcGRhdGVkVGV4dCIsImVsZW1lbnQiLCJkYXRlU3RyaW5nIiwibGFzdFVwZExvY2FsZSIsImZvcm1hdHRlZERhdGUiLCJ0b0xvY2FsZVN0cmluZyIsInllYXIiLCJtb250aCIsImRheSIsImhvdXIiLCJtaW51dGUiLCJpbml0IiwidHJ5RGV0ZWN0VXNlcklkIiwicXVpY2tDaGVja0FuZFJlbmRlciIsImNoZWNrVXNlckF1dGgiLCJzZXRUaW1lb3V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcml6ZUl0ZW0iLCJ0YXJnZXQiLCJjbG9zZXN0Iiwib3BlblBvcHVwQnlBdHRyIiwicGFydGljaXBhdGVCdG4iLCJwYXJ0aWNpcGF0ZSIsInRha2VCdG4iLCJjbG9zZUJ0biIsIm9wZW5Qb3B1cEVsIiwicG9wdXBBbW91bnQiLCJpdGVtUHJpemUiLCJtZXRob2QiLCJKU09OIiwic3RyaW5naWZ5IiwidXNlcmlkIiwicHJpemVpZCIsInNldENhcmRTdGF0ZSIsInVzZXIiLCJwcml6ZXMiLCJsYXN0VXBkYXRlZCIsImNsb3NlQWxsUG9wdXBzIiwiY29udGVudFdyYXAiLCJjYW5jZWxCdG4iLCJjb250YWlucyIsInN0b3JlIiwic3RhdGUiLCJnZXRTdGF0ZSIsImF1dGgiLCJpc0F1dGhvcml6ZWQiLCJnX3VzZXJfaWQiLCJhdHRlbXB0cyIsIm1heEF0dGVtcHRzIiwiYXR0ZW1wdEludGVydmFsIiwid2FpdEZvclVzZXJJZCIsInJlc29sdmUiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImxvYWRUcmFuc2xhdGlvbnMiLCJ0cmFuc2xhdGUiLCJzZXRQcm9ncmVzcyIsInVuYXV0aE1lcyIsInJlZGlyZWN0QnRuIiwicmVwb3J0RGF0YSIsIm9yaWdpbiIsImVycm9yVGV4dCIsIm1lc3NhZ2UiLCJ0eXBlIiwibmFtZSIsInN0YWNrIiwid2FybiIsImVsZW1zIiwiZWxlbSIsImtleSIsInJlZnJlc2hMb2NhbGl6ZWRDbGFzcyIsImJhc2VDc3NDbGFzcyIsImxhbmciLCJyZW5kZXJVc2VycyIsIndlZWtOdW0iLCJ1c2VyRGF0YSIsIndlZWsiLCJ1c2VycyIsImN1cnJlbnRVc2VyIiwicG9wdWxhdGVVc2Vyc1RhYmxlIiwiY3VycmVudFVzZXJJZCIsInJlc3VsdHNUYWJsZSIsInJlc3VsdHNUYWJsZU90aGVyIiwiaXNUb3BDdXJyZW50VXNlciIsInNsaWNlIiwic29tZSIsInRvcFVzZXJzTGVuZ3RoIiwidG9wVXNlcnMiLCJkaXNwbGF5VXNlciIsImlzQ3VycmVudFVzZXIiLCJ0YWJsZSIsInJlbmRlclJvdyIsIm9wdGlvbnMiLCJoaWdobGlnaHQiLCJuZWlnaGJvciIsInVzZXJSb3ciLCJjcmVhdGVFbGVtZW50IiwidXNlclBsYWNlIiwiaW5kZXhPZiIsInByaXplS2V5IiwiZ2V0UHJpemVUcmFuc2xhdGlvbktleSIsIm1hc2tVc2VySWQiLCJ0b0ZpeGVkIiwiYXBwZW5kIiwiaW5kZXgiLCJkZWZhdWx0VmFsdWUiLCJuZWVkS2V5IiwidG9TdHJpbmciLCJwbGFjZSIsInBhcmFtcyIsInBvcHVwQXR0ciIsImFsbFBvcHVwcyIsInAiLCJ0YXJnZXRQb3B1cCIsInNlbGVjdG9yIiwic3RhcnRUaW1lIiwiZW5kVGltZSIsImNvbnRhaW5lciIsImRheXNFbCIsImhvdXJzRWwiLCJtaW51dGVzRWwiLCJwcm9ncmVzc0JhciIsInN0YXJ0IiwiZ2V0VGltZSIsImVuZCIsInRvdGFsIiwidXBkYXRlIiwiZGlmZiIsIndpZHRoIiwiZGF5cyIsIk1hdGgiLCJmbG9vciIsImhvdXJzIiwibWludXRlcyIsIlN0cmluZyIsInBhZFN0YXJ0IiwiZWxhcHNlZCIsInBlcmNlbnQiLCJtaW4iLCJtYXgiLCJjaGVja3BvaW50cyIsInYiLCJpbm5lcldpZHRoIiwibmV3VmFsdWVzIiwicG9pbnQiLCJnZXRQcm9ncmVzcyIsImF0IiwicDEiLCJ2MSIsInAyIiwidjIiLCJyYXRpbyIsInByb2dyZXNzVmFsdWUiLCJpc0Zpbml0ZSIsInRvcENvdW50ZXJPZlBvaW50cyIsImZhZGVWYWx1ZSIsImZpbGwiLCJsYWJlbCIsImhlaWdodCIsImNhcmRzIiwidXNlclByaXplcyIsImNhcmQiLCJwb2ludHNDYXJkVmFsdWUiLCJpc1Rha2VuUHJpemUiLCJpbmNsdWRlcyIsImF0dHIiLCJsbmdCdG4iLCJyZW1vdmVJdGVtIiwic2V0SXRlbSIsInJlbG9hZCIsImF1dGhCdG4iLCJiZXRCdG4iLCJidG5BY3RpdmVBbGwiLCJidG5Mb2NrQWxsIiwiYnRuV29uQWxsIiwiYnRuIl0sIm1hcHBpbmdzIjoiOzs7K0NBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREEsQ0FBQyxZQUFZO0VBRVQsSUFBTUEsTUFBTSxHQUFHLHFEQUFxRDtFQUlwRSxJQUFJQyxjQUFjLEdBQUcsS0FBSztFQUUxQixJQUFNQyxjQUFjLEdBQUcsSUFBSUMsSUFBSSxDQUFDLFlBQVksQ0FBQztFQUs3QyxJQUFNQyxPQUFPLEdBQUcsQ0FDWjtJQUFFQyxJQUFJLEVBQUUscUJBQXFCO0lBQUVDLEVBQUUsRUFBRTtFQUFFLENBQUM7RUFBRztFQUN6QztJQUFFRCxJQUFJLEVBQUUscUJBQXFCO0lBQUVDLEVBQUUsRUFBRTtFQUFFLENBQUM7RUFBRztFQUN6QztJQUFFRCxJQUFJLEVBQUUscUJBQXFCO0lBQUVDLEVBQUUsRUFBRTtFQUFFLENBQUM7RUFBRztFQUN6QztJQUFFRCxJQUFJLEVBQUUscUJBQXFCO0lBQUVDLEVBQUUsRUFBRTtFQUFFLENBQUM7RUFBRztFQUN6QztJQUFFRCxJQUFJLEVBQUUscUJBQXFCO0lBQUVDLEVBQUUsRUFBRTtFQUFFLENBQUM7RUFBRztFQUN6QztJQUFFRCxJQUFJLEVBQUUscUJBQXFCO0lBQUVDLEVBQUUsRUFBRTtFQUFFLENBQUM7RUFBRztFQUN6QztJQUFFRCxJQUFJLEVBQUUscUJBQXFCO0lBQUVDLEVBQUUsRUFBRTtFQUFFLENBQUM7RUFBRztFQUN6QztJQUFFRCxJQUFJLEVBQUUscUJBQXFCO0lBQUVDLEVBQUUsRUFBRTtFQUFFLENBQUM7RUFBRztFQUN6QztJQUFFRCxJQUFJLEVBQUUscUJBQXFCO0lBQUVDLEVBQUUsRUFBRTtFQUFFLENBQUM7RUFBRztFQUN6QztJQUFFRCxJQUFJLEVBQUUscUJBQXFCO0lBQUVDLEVBQUUsRUFBRTtFQUFHLENBQUM7RUFBRTtFQUN6QztJQUFFRCxJQUFJLEVBQUUscUJBQXFCO0lBQUVDLEVBQUUsRUFBRTtFQUFHLENBQUM7RUFBRTtFQUN6QztJQUFFRCxJQUFJLEVBQUUscUJBQXFCO0lBQUVDLEVBQUUsRUFBRTtFQUFHLENBQUM7RUFBRTtFQUN6QztJQUFFRCxJQUFJLEVBQUUscUJBQXFCO0lBQUVDLEVBQUUsRUFBRTtFQUFHLENBQUMsQ0FBRTtFQUFBLENBQzVDOztFQUlELElBQU1DLFFBQVEsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsV0FBVyxDQUFDO0lBQ2hEQyxVQUFVLEdBQUdGLFFBQVEsQ0FBQ0csZ0JBQWdCLENBQUMsYUFBYSxDQUFDO0lBQ3JEQyxlQUFlLEdBQUdKLFFBQVEsQ0FBQ0csZ0JBQWdCLENBQUMsV0FBVyxDQUFDO0lBQ3hERSxZQUFZLEdBQUdMLFFBQVEsQ0FBQ0csZ0JBQWdCLENBQUMsV0FBVyxDQUFDO0lBQ3JERyxNQUFNLEdBQUdOLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGtCQUFrQixDQUFDO0lBQ25ETSxVQUFVLEdBQUdQLFFBQVEsQ0FBQ0csZ0JBQWdCLENBQUMsc0JBQXNCLENBQUM7SUFDOURLLFNBQVMsR0FBR1IsUUFBUSxDQUFDQyxhQUFhLENBQUMsZUFBZSxDQUFDO0lBQ25EUSxVQUFVLEdBQUdULFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsQ0FBQztJQUM3Q1MsTUFBTSxHQUFHVixRQUFRLENBQUNDLGFBQWEsQ0FBQyxTQUFTLENBQUM7SUFDMUNVLE9BQU8sR0FBR1gsUUFBUSxDQUFDQyxhQUFhLENBQUMsa0JBQWtCLENBQUM7RUFHeEQsSUFBTVcsTUFBTSxHQUFHWixRQUFRLENBQUNDLGFBQWEsQ0FBQyxTQUFTLENBQUM7RUFDaEQsSUFBTVksTUFBTSxHQUFHYixRQUFRLENBQUNDLGFBQWEsQ0FBQyxTQUFTLENBQUM7RUFFaEQsSUFBTWEsYUFBYSxHQUFHLFNBQWhCQSxhQUFhLENBQUlDLFFBQVEsRUFBRUMsU0FBUztJQUFBLE9BQUtELFFBQVEsQ0FBQ0UsT0FBTyxDQUFDLFVBQUFDLEVBQUU7TUFBQSxPQUFJQSxFQUFFLENBQUNDLFNBQVMsQ0FBQ0MsTUFBTSxXQUFJSixTQUFTLEVBQUc7SUFBQSxFQUFDO0VBQUE7RUFDMUcsSUFBTUssZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFnQixDQUFJTixRQUFRLEVBQUVPLFFBQVE7SUFBQSxPQUFLUCxRQUFRLENBQUNFLE9BQU8sQ0FBQyxVQUFBQyxFQUFFLEVBQUk7TUFDcEVBLEVBQUUsQ0FBQ0ssWUFBWSxDQUFDLGdCQUFnQixZQUFLRCxRQUFRLEVBQUc7TUFDaERKLEVBQUUsQ0FBQ00sU0FBUyxHQUFHQyxRQUFRLENBQUNILFFBQVEsQ0FBQyxJQUFJLDBDQUEwQyxHQUFHQSxRQUFRO01BQzFGSixFQUFFLENBQUNRLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQztJQUN4QyxDQUFDLENBQUM7RUFBQTs7RUFHRjtFQUNBLElBQUlDLE1BQU0sR0FBR0MsY0FBYyxDQUFDQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSTtFQUVyRCxJQUFJakIsTUFBTSxFQUFFZSxNQUFNLEdBQUcsSUFBSTtFQUN6QixJQUFJZCxNQUFNLEVBQUVjLE1BQU0sR0FBRyxJQUFJO0VBRXpCLElBQUlHLEtBQUssR0FBRyxLQUFLO0VBRWpCLElBQUlBLEtBQUssRUFBRTtJQUNQQyxVQUFVLEVBQUU7RUFDaEI7RUFFQSxJQUFJQyxVQUFVLEdBQUcsQ0FBQztFQUVsQixJQUFJUCxRQUFRLEdBQUcsQ0FBQyxDQUFDO0VBQ2pCLElBQU1RLGNBQWMsR0FBRyxJQUFJO0VBQzNCLElBQUlDLE1BQU0sR0FBRyxJQUFJO0VBQ2pCO0VBQ0FBLE1BQU0sR0FBRyxTQUFTO0VBRWxCLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFPLENBQWFDLElBQUksRUFBRUMsWUFBWSxFQUFFO0lBQzFDLE9BQU9DLEtBQUssQ0FBQzlDLE1BQU0sR0FBRzRDLElBQUk7TUFDdEJHLE9BQU8sRUFBRTtRQUNMLFFBQVEsRUFBRSxrQkFBa0I7UUFDNUIsY0FBYyxFQUFFO01BQ3BCO0lBQUMsR0FDR0YsWUFBWSxJQUFJLENBQUMsQ0FBQyxFQUN4QixDQUNHRyxJQUFJLENBQUMsVUFBQUMsR0FBRyxFQUFJO01BQ1QsSUFBSSxDQUFDQSxHQUFHLENBQUNDLEVBQUUsRUFBRSxNQUFNLElBQUlDLEtBQUssQ0FBQyxXQUFXLENBQUM7TUFDekMsT0FBT0YsR0FBRyxDQUFDRyxJQUFJLEVBQUU7SUFDckIsQ0FBQyxDQUFDLFNBQ0ksQ0FBQyxVQUFBQyxHQUFHLEVBQUk7TUFDVkMsT0FBTyxDQUFDQyxLQUFLLENBQUMscUJBQXFCLEVBQUVGLEdBQUcsQ0FBQztNQUV6Q0csV0FBVyxDQUFDSCxHQUFHLENBQUM7TUFFaEI3QyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQ2dELEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE1BQU07TUFDMUQsSUFBSUMsTUFBTSxDQUFDQyxRQUFRLENBQUNDLElBQUksQ0FBQ0MsVUFBVSxDQUFDLHdCQUF3QixDQUFDLEVBQUU7UUFDM0RILE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxJQUFJLEdBQUcsNEJBQTRCO01BQ3ZELENBQUMsTUFBTTtRQUNIRixNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsSUFBSSxHQUFHLHFCQUFxQjtNQUNoRDtNQUVBLE9BQU9FLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDWCxHQUFHLENBQUM7SUFDOUIsQ0FBQyxDQUFDO0VBRVYsQ0FBQztFQUVELFNBQVNkLFVBQVUsR0FBRTtJQUNqQnpCLE1BQU0sQ0FBQ2EsU0FBUyxDQUFDc0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUM1QnpELFFBQVEsQ0FBQzBELElBQUksQ0FBQ1QsS0FBSyxDQUFDVSxRQUFRLEdBQUcsTUFBTTtJQUNyQzVELFFBQVEsQ0FBQ29CLFNBQVMsQ0FBQ3lDLE1BQU0sQ0FBQyxTQUFTLENBQUM7RUFDeEM7RUFFQSxTQUFTQyxhQUFhLENBQUNDLE1BQU0sRUFBRTtJQUMzQixJQUFNQyxHQUFHLEdBQUcsSUFBSXBFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztJQUMzQyxJQUFJcUUsU0FBUyxHQUFHcEUsT0FBTyxDQUFDcUUsSUFBSSxDQUFDLFVBQUFDLEtBQUs7TUFBQSxPQUFJLElBQUl2RSxJQUFJLENBQUN1RSxLQUFLLENBQUNyRSxJQUFJLENBQUMsR0FBR2tFLEdBQUc7SUFBQSxFQUFDLElBQUluRSxPQUFPLENBQUNBLE9BQU8sQ0FBQ3VFLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFFaEcsSUFBTUMsY0FBYyxHQUFHeEUsT0FBTyxDQUFDeUUsU0FBUyxDQUFDLFVBQUFILEtBQUs7TUFBQSxPQUFJQSxLQUFLLENBQUNwRSxFQUFFLEtBQUtrRSxTQUFTLENBQUNsRSxFQUFFO0lBQUEsRUFBQyxHQUFHLENBQUM7SUFDaEYsSUFBSXdFLGFBQWEsR0FBR0YsY0FBYyxJQUFJLENBQUMsR0FDakMsSUFBSXpFLElBQUksQ0FBQ0MsT0FBTyxDQUFDd0UsY0FBYyxDQUFDLENBQUN2RSxJQUFJLENBQUMsR0FDdENILGNBQWM7SUFFcEJNLFFBQVEsQ0FBQ0csZ0JBQWdCLENBQUMsY0FBYyxDQUFDLENBQUNjLE9BQU8sQ0FBQyxVQUFBQyxFQUFFLEVBQUk7TUFDcEQsSUFBTXFELE9BQU8sR0FBR0MsTUFBTSxDQUFDdEQsRUFBRSxDQUFDdUQsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDO01BRXJELElBQUlYLE1BQU0sRUFBRTtRQUFBO1FBQ1JFLFNBQVMsR0FBR3BFLE9BQU8sQ0FBQ3FFLElBQUksQ0FBQyxVQUFBUyxDQUFDO1VBQUEsT0FBSUEsQ0FBQyxDQUFDNUUsRUFBRSxLQUFLZ0UsTUFBTTtRQUFBLEVBQUMsSUFBSWxFLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDNUQwRSxhQUFhLEdBQUcsYUFBQTFFLE9BQU8sQ0FBQ29FLFNBQVMsQ0FBQ2xFLEVBQUUsR0FBRyxDQUFDLENBQUMsNkNBQXpCLFNBQTJCRCxJQUFJLEtBQUlILGNBQWM7TUFDckU7TUFFQSxJQUFJNkUsT0FBTyxLQUFLUCxTQUFTLENBQUNsRSxFQUFFLEVBQUU7UUFDMUJvQixFQUFFLENBQUNDLFNBQVMsQ0FBQ3lDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDM0JlLGFBQWEsQ0FBQyx3QkFBd0IsRUFBRUwsYUFBYSxFQUFFTixTQUFTLENBQUNuRSxJQUFJLEVBQUVxQixFQUFFLENBQUM7TUFDOUUsQ0FBQyxNQUFNO1FBQ0hBLEVBQUUsQ0FBQ0MsU0FBUyxDQUFDc0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztNQUM1QjtJQUNKLENBQUMsQ0FBQztFQUNOOztFQUdBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUdBLFNBQVNtQixVQUFVLENBQUNDLElBQUksRUFBQztJQUFBO0lBQ3JCQSxJQUFJLENBQUMxRCxTQUFTLENBQUNzQyxHQUFHLENBQUMsS0FBSyxDQUFDO0lBQ3pCb0IsSUFBSSxDQUFDMUQsU0FBUyxDQUFDeUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUUvQixJQUFNa0IsTUFBTSwwQkFBR0QsSUFBSSxDQUFDNUUsYUFBYSxDQUFDLHVCQUF1QixDQUFDLHFFQUFJNEUsSUFBSSxDQUFDNUUsYUFBYSxDQUFDLHFCQUFxQixDQUFDO0lBRXZHNkUsTUFBTSxDQUFDQyxXQUFXLEdBQUdDLFlBQVksQ0FBQyxLQUFLLENBQUM7RUFDNUM7RUFFQSxTQUFTQyxXQUFXLENBQUNKLElBQUksRUFBQztJQUFBO0lBQ3RCQSxJQUFJLENBQUMxRCxTQUFTLENBQUN5QyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQzVCaUIsSUFBSSxDQUFDMUQsU0FBUyxDQUFDeUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUUvQixJQUFNc0IsTUFBTSxHQUFHTCxJQUFJLENBQUNKLFlBQVksQ0FBQyxvQkFBb0IsQ0FBQztJQUV0RCxJQUFNSyxNQUFNLDJCQUFHRCxJQUFJLENBQUM1RSxhQUFhLENBQUMsdUJBQXVCLENBQUMsdUVBQUk0RSxJQUFJLENBQUM1RSxhQUFhLENBQUMscUJBQXFCLENBQUM7SUFFdkc2RSxNQUFNLENBQUNDLFdBQVcsYUFBTUcsTUFBTSxjQUFJRixZQUFZLENBQUMsUUFBUSxDQUFDLENBQUU7RUFFOUQ7RUFFQSxTQUFTRyxhQUFhLENBQUNOLElBQUksRUFBQztJQUFBO0lBQ3hCQSxJQUFJLENBQUMxRCxTQUFTLENBQUN5QyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQzVCaUIsSUFBSSxDQUFDMUQsU0FBUyxDQUFDc0MsR0FBRyxDQUFDLFFBQVEsQ0FBQztJQUU1QlgsT0FBTyxDQUFDc0MsR0FBRyxDQUFDUCxJQUFJLENBQUM7SUFDakIsSUFBTUssTUFBTSxHQUFHTCxJQUFJLENBQUNKLFlBQVksQ0FBQyxvQkFBb0IsQ0FBQztJQUV0RCxJQUFNSyxNQUFNLDJCQUFHRCxJQUFJLENBQUM1RSxhQUFhLENBQUMsdUJBQXVCLENBQUMsdUVBQUk0RSxJQUFJLENBQUM1RSxhQUFhLENBQUMscUJBQXFCLENBQUM7SUFFdkc2RSxNQUFNLENBQUNDLFdBQVcsYUFBTUcsTUFBTSxjQUFJRixZQUFZLENBQUMsUUFBUSxDQUFDLENBQUU7RUFFOUQ7RUFFQSxTQUFTSyxZQUFZLENBQUNDLEtBQUssRUFBRVQsSUFBSSxFQUFDO0lBQzlCL0IsT0FBTyxDQUFDc0MsR0FBRyxDQUFDUCxJQUFJLENBQUM7O0lBRWpCO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7O0lBRUEsSUFBTVUsYUFBYSxHQUFHRCxLQUFLLENBQUNyRixhQUFhLENBQUMsNEJBQTRCLENBQUM7SUFDdkUsSUFBTXVGLGdCQUFnQixHQUFHRixLQUFLLENBQUNuRixnQkFBZ0IsQ0FBQyw4QkFBOEIsQ0FBQztJQUMvRSxJQUFNc0YsS0FBSyxHQUFHSCxLQUFLLENBQUNyRixhQUFhLENBQUMsZUFBZSxDQUFDO0lBQ2xELElBQU15RixJQUFJLEdBQUdKLEtBQUssQ0FBQ3JGLGFBQWEsQ0FBQyxjQUFjLENBQUM7SUFFaEQyRSxVQUFVLENBQUNDLElBQUksQ0FBQztJQUVoQlMsS0FBSyxDQUFDbkUsU0FBUyxDQUFDc0MsR0FBRyxDQUFDLFdBQVcsQ0FBQztJQUVoQ2dDLEtBQUssQ0FBQ2pFLFNBQVMsR0FBR3dELFlBQVksQ0FBQyxvQkFBb0IsQ0FBQztJQUNwRFUsSUFBSSxDQUFDbEUsU0FBUyxHQUFHd0QsWUFBWSxDQUFDLG1CQUFtQixDQUFDO0lBRWxETyxhQUFhLENBQUNwRSxTQUFTLENBQUN5QyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBRXRDNEIsZ0JBQWdCLENBQUN2RSxPQUFPLENBQUMsVUFBQ0MsRUFBRSxFQUFFeUUsQ0FBQyxFQUFLO01BQ2hDekUsRUFBRSxDQUFDQyxTQUFTLENBQUNzQyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQzVCLENBQUMsQ0FBQztFQUVOO0VBRUEsU0FBU21DLGtCQUFrQixDQUFDQyxPQUFPLEVBQUVDLFVBQVUsRUFBRW5FLE1BQU0sRUFBRTtJQUNyRCxJQUFNb0UsYUFBYSxHQUFHcEUsTUFBTSxLQUFLLElBQUksR0FBRyxPQUFPLEdBQUcsT0FBTztJQUN6RCxJQUFNcUUsYUFBYSxHQUFHLElBQUlyRyxJQUFJLENBQUNtRyxVQUFVLENBQUMsQ0FBQ0csY0FBYyxDQUFDRixhQUFhLEVBQUU7TUFDckVHLElBQUksRUFBRSxTQUFTO01BQ2ZDLEtBQUssRUFBRSxNQUFNO01BQ2JDLEdBQUcsRUFBRSxTQUFTO01BQ2RDLElBQUksRUFBRSxTQUFTO01BQ2ZDLE1BQU0sRUFBRTtJQUNaLENBQUMsQ0FBQztJQUNGVCxPQUFPLENBQUNkLFdBQVcsR0FBR2lCLGFBQWE7RUFDdkM7RUFBQyxTQUdjTyxJQUFJO0lBQUE7RUFBQTtFQUFBO0lBQUEsbUVBQW5CO01BQUEsNENBS2FDLGVBQWUsRUFVZkMsbUJBQW1CO01BQUE7UUFBQTtVQUFBO1lBQW5CQSxtQkFBbUIsbUNBQUc7Y0FDM0JDLGFBQWEsRUFBRSxDQUNWbEUsSUFBSSxDQUFDLFlBQUs7Z0JBQ1BtRSxVQUFVLENBQUM1RSxVQUFVLEVBQUUsR0FBRyxDQUFDO2dCQUUzQjhCLGFBQWEsRUFBRTtnQkFFZnBELFVBQVUsQ0FBQ21HLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDQyxDQUFDLEVBQUs7a0JBQ3hDLElBQU1DLFNBQVMsR0FBR0QsQ0FBQyxDQUFDRSxNQUFNLENBQUNDLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQzs7a0JBRTFEO2tCQUNBLElBQUlGLFNBQVMsRUFBRTtvQkFDWCxJQUFNaEMsTUFBTSxHQUFHZ0MsU0FBUyxDQUFDckMsWUFBWSxDQUFDLG9CQUFvQixDQUFDO29CQUUzRCxJQUFJb0MsQ0FBQyxDQUFDRSxNQUFNLENBQUNDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFO3NCQUN0Q0MsZUFBZSxXQUFJbkMsTUFBTSxpQkFBYztvQkFDM0MsQ0FBQyxNQUFNO3NCQUNIbUMsZUFBZSxXQUFJbkMsTUFBTSxxQkFBa0I7b0JBQy9DO2tCQUNKO2dCQUNKLENBQUMsQ0FBQztnQkFFRi9FLFFBQVEsQ0FBQzZHLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDQyxDQUFDLEVBQUs7a0JBQ3RDLElBQU1LLGNBQWMsR0FBR0wsQ0FBQyxDQUFDRSxNQUFNLENBQUNDLE9BQU8sQ0FBQyxXQUFXLENBQUM7a0JBQ3BELElBQUlFLGNBQWMsRUFBRTtvQkFDaEI7b0JBQ0FDLFdBQVcsRUFBRTtvQkFDYjtrQkFDSjtnQkFFSixDQUFDLENBQUM7Z0JBRUZ6RyxNQUFNLENBQUNrRyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQ0MsQ0FBQyxFQUFLO2tCQUNwQyxJQUFNTyxPQUFPLEdBQUdQLENBQUMsQ0FBQ0UsTUFBTSxDQUFDQyxPQUFPLENBQUMsMkJBQTJCLENBQUM7a0JBQzdELElBQU1LLFFBQVEsR0FBR1IsQ0FBQyxDQUFDRSxNQUFNLENBQUNDLE9BQU8sQ0FBQyxlQUFlLENBQUM7a0JBQ2xELElBQU1NLFdBQVcsR0FBR3RILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGVBQWUsQ0FBQzs7a0JBRzNEO2tCQUNBLElBQUltSCxPQUFPLEVBQUU7b0JBQ1QsSUFBTTlCLEtBQUssR0FBR3RGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGVBQWUsQ0FBQztvQkFDckQsSUFBSSxDQUFDcUYsS0FBSyxFQUFFO29CQUVaLElBQU1pQyxXQUFXLEdBQUcvQyxNQUFNLENBQUNjLEtBQUssQ0FBQ2IsWUFBWSxDQUFDLG1CQUFtQixDQUFDLENBQUM7b0JBQ25FLElBQU0rQyxTQUFTLEdBQUcvRyxVQUFVLENBQUNSLGFBQWEsaUNBQXlCc0gsV0FBVyxTQUFLO29CQUVuRixJQUFHdkYsVUFBVSxJQUFJdUYsV0FBVyxFQUFDO3NCQUN6QnpHLGFBQWEsQ0FBQyxDQUFDc0csT0FBTyxDQUFDLEVBQUUsUUFBUSxDQUFDO3NCQUNsQy9GLGdCQUFnQixDQUFDLENBQUMrRixPQUFPLENBQUMsRUFBRSxRQUFRLENBQUM7c0JBQ3JDakYsT0FBTyxDQUFDLGFBQWEsRUFBRTt3QkFDbkJzRixNQUFNLEVBQUUsTUFBTTt3QkFDZC9ELElBQUksRUFBRWdFLElBQUksQ0FBQ0MsU0FBUyxDQUFDOzBCQUNqQkMsTUFBTSxFQUFFMUYsTUFBTTswQkFDZDJGLE9BQU8sRUFBRU47d0JBQ2IsQ0FBQztzQkFDTCxDQUFDLENBQUMsQ0FBQy9FLElBQUksQ0FBQyxVQUFBQyxHQUFHLEVBQUc7d0JBQ1ZrRSxVQUFVLENBQUMsWUFBSzswQkFDWnRGLGdCQUFnQixDQUFDLENBQUMrRixPQUFPLENBQUMsRUFBRSxjQUFjLENBQUM7MEJBQzNDdEcsYUFBYSxDQUFDLENBQUNzRyxPQUFPLENBQUMsRUFBRSxNQUFNLENBQUM7MEJBQ2hDVSxZQUFZLENBQUN2SCxVQUFVLEVBQUVrQyxHQUFHLENBQUNzRixJQUFJLENBQUNDLE1BQU0sRUFBRXZGLEdBQUcsQ0FBQ3NGLElBQUksQ0FBQ2pELE1BQU0sQ0FBQzswQkFDMURjLGtCQUFrQixDQUFDakYsT0FBTyxFQUFFOEIsR0FBRyxDQUFDc0YsSUFBSSxDQUFDRSxXQUFXLEVBQUV0RyxNQUFNLENBQUM7MEJBQ3pEZ0YsVUFBVSxDQUFDLFlBQUs7NEJBQ1p0QixZQUFZLENBQUNDLEtBQUssRUFBRWtDLFNBQVMsQ0FBQzswQkFDbEMsQ0FBQyxFQUFFLEdBQUcsQ0FBQzt3QkFDWCxDQUFDLEVBQUUsR0FBRyxDQUFDO3NCQUNYLENBQUMsQ0FBQztvQkFFTjtvQkFFQTtrQkFDSjs7a0JBRUE7a0JBQ0EsSUFBSUgsUUFBUSxFQUFFO29CQUNWYSxjQUFjLEVBQUU7b0JBQ2hCO2tCQUNKOztrQkFFQTtrQkFDQSxJQUFHWixXQUFXLEVBQUM7b0JBQ1g7b0JBQ0EsSUFBTWEsV0FBVyxHQUFHYixXQUFXLENBQUNySCxhQUFhLENBQUMsY0FBYyxDQUFDO29CQUM3RDtvQkFDQSxJQUFNb0gsU0FBUSxHQUFHQyxXQUFXLENBQUNySCxhQUFhLENBQUMsZUFBZSxDQUFDO29CQUMzRCxJQUFNbUksU0FBUyxHQUFHZCxXQUFXLENBQUNySCxhQUFhLENBQUMsYUFBYSxDQUFDO29CQUMxRCxJQUFJa0ksV0FBVyxJQUFJLENBQUNBLFdBQVcsQ0FBQ0UsUUFBUSxDQUFDeEIsQ0FBQyxDQUFDRSxNQUFNLENBQUMsRUFBRTtzQkFDaERtQixjQUFjLEVBQUU7b0JBQ3BCO29CQUNBLElBQUdyQixDQUFDLENBQUNFLE1BQU0sS0FBS00sU0FBUSxJQUFJUixDQUFDLENBQUNFLE1BQU0sS0FBS3FCLFNBQVMsRUFBRTtzQkFDaERGLGNBQWMsRUFBRTtvQkFDcEI7a0JBQ0o7Z0JBQ0osQ0FBQyxDQUFDO2NBRU4sQ0FBQyxDQUFDO1lBQ04sQ0FBQztZQXpHSTFCLGVBQWUsK0JBQUc7Y0FDdkIsSUFBSXJELE1BQU0sQ0FBQ21GLEtBQUssRUFBRTtnQkFDZCxJQUFNQyxLQUFLLEdBQUdwRixNQUFNLENBQUNtRixLQUFLLENBQUNFLFFBQVEsRUFBRTtnQkFDckN0RyxNQUFNLEdBQUdxRyxLQUFLLENBQUNFLElBQUksQ0FBQ0MsWUFBWSxJQUFJSCxLQUFLLENBQUNFLElBQUksQ0FBQzNJLEVBQUUsSUFBSSxFQUFFO2NBQzNELENBQUMsTUFBTSxJQUFJcUQsTUFBTSxDQUFDd0YsU0FBUyxFQUFFO2dCQUN6QnpHLE1BQU0sR0FBR2lCLE1BQU0sQ0FBQ3dGLFNBQVM7Y0FDN0I7WUFDSixDQUFDO1lBWEdDLFFBQVEsR0FBRyxDQUFDO1lBQ1ZDLFdBQVcsR0FBRyxFQUFFO1lBQ2hCQyxlQUFlLEdBQUcsRUFBRTtZQTZHcEJDLGFBQWEsR0FBRyxJQUFJeEYsT0FBTyxDQUFDLFVBQUN5RixPQUFPLEVBQUs7Y0FDM0MsSUFBTUMsUUFBUSxHQUFHQyxXQUFXLENBQUMsWUFBTTtnQkFDL0IxQyxlQUFlLEVBQUU7Z0JBQ2pCLElBQUl0RSxNQUFNLElBQUkwRyxRQUFRLElBQUlDLFdBQVcsRUFBRTtrQkFDbkNwQyxtQkFBbUIsRUFBRTtrQkFDckIwQyxhQUFhLENBQUNGLFFBQVEsQ0FBQztrQkFDdkJELE9BQU8sRUFBRTtnQkFDYjtnQkFDQUosUUFBUSxFQUFFO2NBQ2QsQ0FBQyxFQUFFRSxlQUFlLENBQUM7WUFDdkIsQ0FBQyxDQUFDO1lBQUE7WUFBQSxPQUVJQyxhQUFhO1VBQUE7VUFBQTtZQUFBO1FBQUE7TUFBQTtJQUFBLENBQ3RCO0lBQUE7RUFBQTtFQUVELFNBQVNLLGdCQUFnQixHQUFHO0lBQ3hCLE9BQU9qSCxPQUFPLDJCQUFvQlIsTUFBTSxnQkFBYSxDQUNoRGEsSUFBSSxDQUFDLFVBQUFJLElBQUksRUFBSTtNQUNWbkIsUUFBUSxHQUFHbUIsSUFBSTtNQUNmeUcsU0FBUyxFQUFFO0lBQ2YsQ0FBQyxDQUFDO0VBQ1Y7RUFFQSxTQUFTM0MsYUFBYSxHQUFHO0lBQ3JCNUQsT0FBTyxDQUFDc0MsR0FBRyxDQUFDbEQsTUFBTSxDQUFDO0lBQ25CdkIsT0FBTyxDQUFDUSxTQUFTLENBQUNzQyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQzdCNkYsV0FBVyxDQUFDOUksU0FBUyxFQUFFLENBQUMsQ0FBQztJQUN6QnNILFlBQVksQ0FBQ3ZILFVBQVUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQy9CLElBQUkyQixNQUFNLEVBQUU7TUFBQSwyQ0FDZ0JoQyxVQUFVO1FBQUE7TUFBQTtRQUFsQyxvREFBb0M7VUFBQSxJQUF6QnFKLFNBQVM7VUFDaEJBLFNBQVMsQ0FBQ3BJLFNBQVMsQ0FBQ3NDLEdBQUcsQ0FBQyxNQUFNLENBQUM7UUFDbkM7TUFBQztRQUFBO01BQUE7UUFBQTtNQUFBO01BQ0QsT0FBT3RCLE9BQU8sb0JBQWFELE1BQU0sZ0JBQWEsQ0FDekNNLElBQUksQ0FBQyxVQUFBQyxHQUFHLEVBQUk7UUFDVCxJQUFJQSxHQUFHLENBQUNtRixNQUFNLEVBQUU7VUFDWjVGLFVBQVUsR0FBR1MsR0FBRyxDQUFDcUMsTUFBTTtVQUN2QjFFLGVBQWUsQ0FBQ2EsT0FBTyxDQUFDLFVBQUE0RCxJQUFJO1lBQUEsT0FBSUEsSUFBSSxDQUFDMUQsU0FBUyxDQUFDc0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztVQUFBLEVBQUM7VUFDM0RwRCxZQUFZLENBQUNZLE9BQU8sQ0FBQyxVQUFBNEQsSUFBSTtZQUFBLE9BQUlBLElBQUksQ0FBQzFELFNBQVMsQ0FBQ3lDLE1BQU0sQ0FBQyxNQUFNLENBQUM7VUFBQSxFQUFDO1VBQzNEbkUsY0FBYyxHQUFHLElBQUk7VUFDckI2SixXQUFXLENBQUM5SSxTQUFTLEVBQUV3QixVQUFVLENBQUM7VUFFbEMsSUFBTStELGFBQWEsR0FBR3BFLE1BQU0sS0FBSyxJQUFJLEdBQUcsT0FBTyxHQUFHLE9BQU87VUFFekRoQixPQUFPLENBQUNRLFNBQVMsQ0FBQ3lDLE1BQU0sQ0FBQyxNQUFNLENBQUM7VUFDaENnQyxrQkFBa0IsQ0FBQ2pGLE9BQU8sRUFBRThCLEdBQUcsQ0FBQ3dGLFdBQVcsRUFBRXRHLE1BQU0sQ0FBQztVQUNwRG1HLFlBQVksQ0FBQ3ZILFVBQVUsRUFBRWtDLEdBQUcsQ0FBQ3VGLE1BQU0sRUFBRWhHLFVBQVUsQ0FBQztRQUVwRCxDQUFDLE1BQU07VUFDSDVCLGVBQWUsQ0FBQ2EsT0FBTyxDQUFDLFVBQUE0RCxJQUFJO1lBQUEsT0FBSUEsSUFBSSxDQUFDMUQsU0FBUyxDQUFDeUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztVQUFBLEVBQUM7VUFDOUR2RCxZQUFZLENBQUNZLE9BQU8sQ0FBQyxVQUFBNEQsSUFBSTtZQUFBLE9BQUlBLElBQUksQ0FBQzFELFNBQVMsQ0FBQ3NDLEdBQUcsQ0FBQyxNQUFNLENBQUM7VUFBQSxFQUFDO1VBQ3hEaEUsY0FBYyxHQUFHLEtBQUs7UUFDMUI7TUFFSixDQUFDLENBQUM7SUFDVixDQUFDLE1BQU07TUFBQSw0Q0FDcUJZLFlBQVk7UUFBQTtNQUFBO1FBQXBDLHVEQUFzQztVQUFBLElBQTdCbUosV0FBVztVQUNoQkEsV0FBVyxDQUFDckksU0FBUyxDQUFDc0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUNyQztNQUFDO1FBQUE7TUFBQTtRQUFBO01BQUE7TUFBQSw0Q0FDMEJyRCxlQUFlO1FBQUE7TUFBQTtRQUExQyx1REFBNEM7VUFBQSxJQUFuQzhHLGNBQWM7VUFDbkJBLGNBQWMsQ0FBQy9GLFNBQVMsQ0FBQ3NDLEdBQUcsQ0FBQyxNQUFNLENBQUM7UUFDeEM7TUFBQztRQUFBO01BQUE7UUFBQTtNQUFBO01BQUEsNENBQ3VCdkQsVUFBVTtRQUFBO01BQUE7UUFBbEMsdURBQW9DO1VBQUEsSUFBekJxSixVQUFTO1VBQ2hCQSxVQUFTLENBQUNwSSxTQUFTLENBQUN5QyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ3RDO01BQUM7UUFBQTtNQUFBO1FBQUE7TUFBQTtNQUVELE9BQU9MLE9BQU8sQ0FBQ3lGLE9BQU8sQ0FBQyxLQUFLLENBQUM7SUFDakM7RUFDSjtFQUVBLFNBQVNoRyxXQUFXLENBQUNILEdBQUcsRUFBRTtJQUN0QixJQUFNNEcsVUFBVSxHQUFHO01BQ2ZDLE1BQU0sRUFBRXZHLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxJQUFJO01BQzVCdUUsTUFBTSxFQUFFMUYsTUFBTTtNQUNkeUgsU0FBUyxFQUFFLENBQUE5RyxHQUFHLGFBQUhBLEdBQUcsdUJBQUhBLEdBQUcsQ0FBRUUsS0FBSyxNQUFJRixHQUFHLGFBQUhBLEdBQUcsdUJBQUhBLEdBQUcsQ0FBRTZDLElBQUksTUFBSTdDLEdBQUcsYUFBSEEsR0FBRyx1QkFBSEEsR0FBRyxDQUFFK0csT0FBTyxLQUFJLGVBQWU7TUFDckVDLElBQUksRUFBRSxDQUFBaEgsR0FBRyxhQUFIQSxHQUFHLHVCQUFIQSxHQUFHLENBQUVpSCxJQUFJLEtBQUksY0FBYztNQUNqQ0MsS0FBSyxFQUFFLENBQUFsSCxHQUFHLGFBQUhBLEdBQUcsdUJBQUhBLEdBQUcsQ0FBRWtILEtBQUssS0FBSTtJQUN6QixDQUFDO0lBRUR6SCxLQUFLLENBQUMsMENBQTBDLEVBQUU7TUFDOUNtRixNQUFNLEVBQUUsTUFBTTtNQUNkbEYsT0FBTyxFQUFFO1FBQ0wsY0FBYyxFQUFFO01BQ3BCLENBQUM7TUFDRG1CLElBQUksRUFBRWdFLElBQUksQ0FBQ0MsU0FBUyxDQUFDOEIsVUFBVTtJQUNuQyxDQUFDLENBQUMsU0FBTSxDQUFDM0csT0FBTyxDQUFDa0gsSUFBSSxDQUFDO0VBQzFCO0VBRUEsU0FBU1gsU0FBUyxHQUFHO0lBQ2pCLElBQU1ZLEtBQUssR0FBR2pLLFFBQVEsQ0FBQ0csZ0JBQWdCLENBQUMsa0JBQWtCLENBQUM7SUFDM0QsSUFBSThKLEtBQUssSUFBSUEsS0FBSyxDQUFDOUYsTUFBTSxFQUFFO01BQ3ZCLElBQUdsQyxjQUFjLEVBQUM7UUFDZGdJLEtBQUssQ0FBQ2hKLE9BQU8sQ0FBQyxVQUFBaUosSUFBSSxFQUFJO1VBQ2xCLElBQU1DLEdBQUcsR0FBR0QsSUFBSSxDQUFDekYsWUFBWSxDQUFDLGdCQUFnQixDQUFDO1VBQy9DeUYsSUFBSSxDQUFDMUksU0FBUyxHQUFHQyxRQUFRLENBQUMwSSxHQUFHLENBQUMsSUFBSSwwQ0FBMEMsR0FBR0EsR0FBRztVQUNsRixJQUFJMUksUUFBUSxDQUFDMEksR0FBRyxDQUFDLEVBQUU7WUFDZkQsSUFBSSxDQUFDeEksZUFBZSxDQUFDLGdCQUFnQixDQUFDO1VBQzFDO1FBQ0osQ0FBQyxDQUFDO01BQ04sQ0FBQyxNQUFJO1FBQ0RvQixPQUFPLENBQUNzQyxHQUFHLENBQUMsb0JBQW9CLENBQUM7TUFDckM7SUFDSjtJQUNBLElBQUl6RCxNQUFNLEtBQUssSUFBSSxFQUFFO01BQ2pCNUIsUUFBUSxDQUFDb0IsU0FBUyxDQUFDc0MsR0FBRyxDQUFDLElBQUksQ0FBQztJQUNoQztJQUNBMkcscUJBQXFCLENBQUNySyxRQUFRLENBQUM7RUFDbkM7RUFFQSxTQUFTcUsscUJBQXFCLENBQUN2RSxPQUFPLEVBQUU7SUFDcEMsSUFBSXdFLFlBQVksR0FBRyxFQUFFO0lBQ3JCLElBQUksQ0FBQ3hFLE9BQU8sRUFBRTtNQUNWO0lBQ0o7SUFDQSx3QkFBbUIsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLDBCQUFFO01BQTVCLElBQU15RSxJQUFJO01BQ1h6RSxPQUFPLENBQUMxRSxTQUFTLENBQUN5QyxNQUFNLENBQUN5RyxZQUFZLEdBQUdDLElBQUksQ0FBQztJQUNqRDtJQUNBekUsT0FBTyxDQUFDMUUsU0FBUyxDQUFDc0MsR0FBRyxDQUFDNEcsWUFBWSxHQUFHMUksTUFBTSxDQUFDO0VBQ2hEO0VBRUEsU0FBUzRJLFdBQVcsQ0FBQ0MsT0FBTyxFQUFpQjtJQUFBLElBQWZDLFFBQVEsdUVBQUcsRUFBRTtJQUN2Q0QsT0FBTyxHQUFHaEcsTUFBTSxDQUFDZ0csT0FBTyxDQUFDO0lBQ3pCQyxRQUFRLEdBQUdBLFFBQVEsQ0FBQ3hHLElBQUksQ0FBQyxVQUFBeUcsSUFBSSxFQUFJO01BQzdCLE9BQU9BLElBQUksQ0FBQ0EsSUFBSSxLQUFLRixPQUFPO0lBQ2hDLENBQUMsQ0FBQyxDQUFDRyxLQUFLO0lBRVI3SCxPQUFPLENBQUNzQyxHQUFHLENBQUNxRixRQUFRLENBQUM7SUFFckIsSUFBTUcsV0FBVyxHQUFHSCxRQUFRLENBQUN4RyxJQUFJLENBQUMsVUFBQThELElBQUk7TUFBQSxPQUFJQSxJQUFJLENBQUNILE1BQU0sS0FBSzFGLE1BQU07SUFBQSxFQUFDO0lBRWpFWSxPQUFPLENBQUNzQyxHQUFHLENBQUNsRCxNQUFNLENBQUM7SUFDbkJZLE9BQU8sQ0FBQ3NDLEdBQUcsQ0FBQ3dGLFdBQVcsQ0FBQztJQUN4QjlILE9BQU8sQ0FBQ3NDLEdBQUcsQ0FBQzNGLGNBQWMsQ0FBQztJQUUzQixJQUFHeUMsTUFBTSxJQUFJLENBQUMwSSxXQUFXLElBQUluTCxjQUFjLEVBQUM7TUFDeENnTCxRQUFRLGdDQUFPQSxRQUFRLElBQUU7UUFBQzdDLE1BQU0sRUFBRTFGLE1BQU07UUFBRTRDLE1BQU0sRUFBRTtNQUFDLENBQUMsRUFBQztJQUN6RDtJQUNBaEMsT0FBTyxDQUFDc0MsR0FBRyxDQUFDcUYsUUFBUSxDQUFDO0lBRXJCSSxrQkFBa0IsQ0FBQ0osUUFBUSxFQUFFdkksTUFBTSxFQUFFc0ksT0FBTyxFQUFFSSxXQUFXLEVBQUVuTCxjQUFjLENBQUM7RUFDOUU7RUFFQSxTQUFTb0wsa0JBQWtCLENBQUNGLEtBQUssRUFBRUcsYUFBYSxFQUFFSixJQUFJLEVBQUVFLFdBQVcsRUFBRW5MLGNBQWMsRUFBRTtJQUVqRnFELE9BQU8sQ0FBQ3NDLEdBQUcsQ0FBQ3VGLEtBQUssQ0FBQztJQUNsQkksWUFBWSxDQUFDdkosU0FBUyxHQUFHLEVBQUU7SUFDM0J3SixpQkFBaUIsQ0FBQ3hKLFNBQVMsR0FBRyxFQUFFO0lBQ2hDLElBQUksRUFBQ21KLEtBQUssYUFBTEEsS0FBSyxlQUFMQSxLQUFLLENBQUV4RyxNQUFNLEdBQUU7SUFFcEIsSUFBTThHLGdCQUFnQixHQUFHTCxXQUFXLElBQUlELEtBQUssQ0FBQ08sS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLFVBQUFwRCxJQUFJO01BQUEsT0FBSUEsSUFBSSxDQUFDSCxNQUFNLEtBQUtrRCxhQUFhO0lBQUEsRUFBQztJQUV0RyxJQUFNTSxjQUFjLEdBQUcsQ0FBQ2xKLE1BQU0sSUFBSStJLGdCQUFnQixHQUFJLEVBQUUsR0FBRyxFQUFFO0lBRTdELElBQU1JLFFBQVEsR0FBR1YsS0FBSyxDQUFDTyxLQUFLLENBQUMsQ0FBQyxFQUFFRSxjQUFjLENBQUM7O0lBRS9DO0lBQ0FDLFFBQVEsQ0FBQ3BLLE9BQU8sQ0FBQyxVQUFBOEcsSUFBSSxFQUFJO01BQ3JCdUQsV0FBVyxDQUFDdkQsSUFBSSxFQUFFQSxJQUFJLENBQUNILE1BQU0sS0FBS2tELGFBQWEsRUFBRUMsWUFBWSxFQUFFTSxRQUFRLEVBQUVKLGdCQUFnQixFQUFFUCxJQUFJLENBQUM7SUFDcEcsQ0FBQyxDQUFDO0lBQ0Y7SUFDQTVILE9BQU8sQ0FBQ3NDLEdBQUcsQ0FBQzNGLGNBQWMsQ0FBQztJQUMzQixJQUFHQSxjQUFjLElBQUksQ0FBQ21MLFdBQVcsRUFBRTtNQUMvQjlILE9BQU8sQ0FBQ3NDLEdBQUcsQ0FBQyxlQUFlLENBQUM7TUFDNUJrRyxXQUFXLENBQUNWLFdBQVcsRUFBRSxJQUFJLEVBQUVJLGlCQUFpQixFQUFFTCxLQUFLLEVBQUUsS0FBSyxFQUFFRCxJQUFJLENBQUM7SUFDekU7SUFDQSxJQUFJLENBQUNPLGdCQUFnQixJQUFJTCxXQUFXLEVBQUU7TUFDbENuTCxjQUFjLEdBQUcsS0FBSztNQUN0QjZMLFdBQVcsQ0FBQ1YsV0FBVyxFQUFFLElBQUksRUFBRUksaUJBQWlCLEVBQUVMLEtBQUssRUFBRSxLQUFLLEVBQUVELElBQUksQ0FBQztJQUN6RTtFQUdKO0VBRUEsU0FBU1ksV0FBVyxDQUFDdkQsSUFBSSxFQUFFd0QsYUFBYSxFQUFFQyxLQUFLLEVBQUViLEtBQUssRUFBRU0sZ0JBQWdCLEVBQUVQLElBQUksRUFBRTtJQUU1RSxJQUFNZSxTQUFTLEdBQUcsU0FBWkEsU0FBUyxDQUFJaEIsUUFBUSxFQUFtQjtNQUFBLElBQWpCaUIsT0FBTyx1RUFBRyxDQUFDLENBQUM7TUFDckMseUJBQWdEQSxPQUFPLENBQS9DQyxTQUFTO1FBQVRBLFNBQVMsbUNBQUcsS0FBSztRQUFBLG9CQUF1QkQsT0FBTyxDQUE1QkUsUUFBUTtRQUFSQSxRQUFRLGtDQUFHLEtBQUs7TUFDM0MsSUFBTUMsT0FBTyxHQUFHN0wsUUFBUSxDQUFDOEwsYUFBYSxDQUFDLEtBQUssQ0FBQztNQUM3Q0QsT0FBTyxDQUFDMUssU0FBUyxDQUFDc0MsR0FBRyxDQUFDLFlBQVksQ0FBQztNQUVuQyxJQUFNc0ksU0FBUyxHQUFHcEIsS0FBSyxDQUFDcUIsT0FBTyxDQUFDdkIsUUFBUSxDQUFDLEdBQUcsQ0FBQztNQUM3QyxJQUFNd0IsUUFBUSxHQUFHbkssS0FBSyxHQUFHLElBQUksR0FBR29LLHNCQUFzQixDQUFDSCxTQUFTLEVBQUVyQixJQUFJLENBQUM7TUFFdkUsSUFBSXFCLFNBQVMsSUFBSSxDQUFDLEVBQUU7UUFDaEJGLE9BQU8sQ0FBQzFLLFNBQVMsQ0FBQ3NDLEdBQUcsZ0JBQVNzSSxTQUFTLEVBQUc7TUFDOUM7TUFFQSxJQUFJSixTQUFTLElBQUlKLGFBQWEsSUFBSSxDQUFDSyxRQUFRLEVBQUU7UUFDekNDLE9BQU8sQ0FBQzFLLFNBQVMsQ0FBQ3NDLEdBQUcsQ0FBQyxLQUFLLENBQUM7TUFDaEMsQ0FBQyxNQUFNLElBQUltSSxRQUFRLEVBQUU7UUFDakJDLE9BQU8sQ0FBQzFLLFNBQVMsQ0FBQ3NDLEdBQUcsQ0FBQyxXQUFXLENBQUM7TUFDdEM7TUFFQW9JLE9BQU8sQ0FBQ3JLLFNBQVMsNEVBRVh1SyxTQUFTLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBR0EsU0FBUyxHQUFHQSxTQUFTLCtCQUM1Q1IsYUFBYSxJQUFJLENBQUNLLFFBQVEsR0FBRyxvQkFBb0IsR0FBRzVHLFlBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxTQUFTLEdBQUcsRUFBRSxnR0FHeEZ1RyxhQUFhLElBQUksQ0FBQ0ssUUFBUSxHQUFHbkIsUUFBUSxDQUFDN0MsTUFBTSxHQUFHdUUsVUFBVSxDQUFDMUIsUUFBUSxDQUFDN0MsTUFBTSxDQUFDLGdHQUcxRXBELE1BQU0sQ0FBQ2lHLFFBQVEsQ0FBQzNGLE1BQU0sQ0FBQyxDQUFDc0gsT0FBTyxDQUFDLENBQUMsQ0FBQyxnR0FHbENILFFBQVEsR0FBR2pILFlBQVksQ0FBQ2lILFFBQVEsQ0FBQyxHQUFHLEtBQUssbUNBRWxEO01BRUdULEtBQUssQ0FBQ2EsTUFBTSxDQUFDUixPQUFPLENBQUM7SUFDekIsQ0FBQztJQUNELElBQUlOLGFBQWEsSUFBSSxDQUFDTixnQkFBZ0IsRUFBRTtNQUNwQyxJQUFNcUIsS0FBSyxHQUFHM0IsS0FBSyxDQUFDcUIsT0FBTyxDQUFDakUsSUFBSSxDQUFDO01BQ2pDLElBQUk0QyxLQUFLLENBQUMyQixLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUU7UUFDbEJiLFNBQVMsQ0FBQ2QsS0FBSyxDQUFDMkIsS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFO1VBQUVWLFFBQVEsRUFBRTtRQUFLLENBQUMsQ0FBQztNQUNuRDtNQUNBSCxTQUFTLENBQUMxRCxJQUFJLEVBQUU7UUFBRTRELFNBQVMsRUFBRTtNQUFLLENBQUMsQ0FBQztNQUNwQyxJQUFJaEIsS0FBSyxDQUFDMkIsS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFO1FBQ2xCYixTQUFTLENBQUNkLEtBQUssQ0FBQzJCLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRTtVQUFFVixRQUFRLEVBQUU7UUFBSyxDQUFDLENBQUM7TUFDbkQ7SUFDSixDQUFDLE1BQU07TUFDSEgsU0FBUyxDQUFDMUQsSUFBSSxDQUFDO0lBQ25CO0VBQ0o7RUFHQSxTQUFTL0MsWUFBWSxDQUFDbUYsR0FBRyxFQUFFb0MsWUFBWSxFQUFFO0lBQ3JDLElBQUksQ0FBQ3BDLEdBQUcsRUFBRTtNQUNOO0lBQ0o7SUFDQSxJQUFJcUMsT0FBTyxHQUFHMUssS0FBSyxHQUFHcUksR0FBRyxrREFBMkNBLEdBQUcsQ0FBRTtJQUV6RW9DLFlBQVksR0FBSUMsT0FBTyxJQUFJckMsR0FBRztJQUM5QixPQUFPMUksUUFBUSxDQUFDMEksR0FBRyxDQUFDLElBQUlvQyxZQUFZO0VBQ3hDO0VBRUEsU0FBU0osVUFBVSxDQUFDakssTUFBTSxFQUFFO0lBQ3hCLE9BQU8sSUFBSSxHQUFHQSxNQUFNLENBQUN1SyxRQUFRLEVBQUUsQ0FBQ3ZCLEtBQUssQ0FBQyxDQUFDLENBQUM7RUFDNUM7RUFFQSxTQUFTZ0Isc0JBQXNCLENBQUNRLEtBQUssRUFBRWhDLElBQUksRUFBRTtJQUN6QyxJQUFJZ0MsS0FBSyxJQUFJLENBQUMsRUFBRSx1QkFBZ0JoQyxJQUFJLGNBQUlnQyxLQUFLO0lBQzdDLElBQUlBLEtBQUssSUFBSSxFQUFFLEVBQUUsdUJBQWdCaEMsSUFBSTtJQUNyQyxJQUFJZ0MsS0FBSyxJQUFJLEVBQUUsRUFBRSx1QkFBZ0JoQyxJQUFJO0lBQ3JDLElBQUlnQyxLQUFLLElBQUksRUFBRSxFQUFFLHVCQUFnQmhDLElBQUk7SUFDckMsSUFBSWdDLEtBQUssSUFBSSxFQUFFLEVBQUUsdUJBQWdCaEMsSUFBSTtJQUNyQyxJQUFJZ0MsS0FBSyxJQUFJLEdBQUcsRUFBRSx1QkFBZ0JoQyxJQUFJO0lBQ3RDLElBQUlnQyxLQUFLLElBQUksR0FBRyxFQUFFLHVCQUFnQmhDLElBQUk7SUFDdEMsSUFBSWdDLEtBQUssSUFBSSxHQUFHLEVBQUUsdUJBQWdCaEMsSUFBSTtJQUN0QyxJQUFJZ0MsS0FBSyxJQUFJLEdBQUcsRUFBRSx1QkFBZ0JoQyxJQUFJO0lBQ3RDLElBQUlnQyxLQUFLLElBQUksR0FBRyxFQUFFLHVCQUFnQmhDLElBQUk7RUFDMUM7RUFFQSxTQUFTdkQsV0FBVyxHQUFHO0lBQ25CLElBQUksQ0FBQ2pGLE1BQU0sRUFBRTtNQUNUO0lBQ0o7SUFDQSxJQUFNeUssTUFBTSxHQUFHO01BQUUvRSxNQUFNLEVBQUUxRjtJQUFPLENBQUM7SUFDakNJLEtBQUssQ0FBQzlDLE1BQU0sR0FBRyxRQUFRLEVBQUU7TUFDckIrQyxPQUFPLEVBQUU7UUFDTCxRQUFRLEVBQUUsa0JBQWtCO1FBQzVCLGNBQWMsRUFBRTtNQUNwQixDQUFDO01BQ0RrRixNQUFNLEVBQUUsTUFBTTtNQUNkL0QsSUFBSSxFQUFFZ0UsSUFBSSxDQUFDQyxTQUFTLENBQUNnRixNQUFNO0lBQy9CLENBQUMsQ0FBQyxDQUFDbkssSUFBSSxDQUFDLFVBQUFDLEdBQUc7TUFBQSxPQUFJQSxHQUFHLENBQUNHLElBQUksRUFBRTtJQUFBLEVBQUMsQ0FDckJKLElBQUksQ0FBQyxVQUFBQyxHQUFHLEVBQUk7TUFDVDNCLGFBQWEsQ0FBQ1YsZUFBZSxFQUFFLFFBQVEsQ0FBQztNQUN4Q2lCLGdCQUFnQixDQUFDakIsZUFBZSxFQUFFLFFBQVEsQ0FBQztNQUMzQ3VHLFVBQVUsQ0FBQyxZQUFLO1FBQ1p0RixnQkFBZ0IsQ0FBQ2pCLGVBQWUsRUFBRSxjQUFjLENBQUM7UUFDakRVLGFBQWEsQ0FBQ1YsZUFBZSxFQUFFLE1BQU0sQ0FBQztRQUN0Q1UsYUFBYSxDQUFDVixlQUFlLEVBQUUsUUFBUSxDQUFDO01BQzVDLENBQUMsRUFBRSxHQUFHLENBQUM7TUFDUHVHLFVBQVUsQ0FBQyxZQUFJO1FBQ1hELGFBQWEsRUFBRTtNQUNuQixDQUFDLEVBQUUsSUFBSSxDQUFDO0lBRVosQ0FBQyxDQUFDLFNBQ0ksQ0FBQyxVQUFBN0QsR0FBRyxFQUFJO01BQ1ZDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDLHFCQUFxQixFQUFFRixHQUFHLENBQUM7TUFFekNHLFdBQVcsQ0FBQ0gsR0FBRyxDQUFDO01BRWhCN0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUNnRCxLQUFLLENBQUNDLE9BQU8sR0FBRyxNQUFNO01BQzFELElBQUlDLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxJQUFJLENBQUNDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQyxFQUFFO1FBQzNESCxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsSUFBSSxHQUFHLDRCQUE0QjtNQUN2RCxDQUFDLE1BQU07UUFDSEYsTUFBTSxDQUFDQyxRQUFRLENBQUNDLElBQUksR0FBRyxxQkFBcUI7TUFDaEQ7TUFFQSxPQUFPRSxPQUFPLENBQUNDLE1BQU0sQ0FBQ1gsR0FBRyxDQUFDO0lBQzlCLENBQUMsQ0FBQztFQUNWO0VBQ0EsU0FBU29FLGVBQWUsQ0FBQzJGLFNBQVMsRUFBRTtJQUVoQyxJQUFNQyxTQUFTLEdBQUc3TSxRQUFRLENBQUNHLGdCQUFnQixDQUFDLFFBQVEsQ0FBQztJQUNyRDBNLFNBQVMsQ0FBQzVMLE9BQU8sQ0FBQyxVQUFBNkwsQ0FBQztNQUFBLE9BQUlBLENBQUMsQ0FBQzNMLFNBQVMsQ0FBQ3lDLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFBQSxFQUFDO0lBQ3BEN0QsUUFBUSxDQUFDb0IsU0FBUyxDQUFDc0MsR0FBRyxDQUFDLFNBQVMsQ0FBQztJQUVqQyxJQUFNc0osV0FBVyxHQUFHL00sUUFBUSxDQUFDQyxhQUFhLCtCQUF1QjJNLFNBQVMsU0FBSztJQUMvRTlKLE9BQU8sQ0FBQ3NDLEdBQUcsQ0FBQzJILFdBQVcsQ0FBQztJQUN4QmpLLE9BQU8sQ0FBQ3NDLEdBQUcsQ0FBQ3dILFNBQVMsQ0FBQztJQUN0QixJQUFJRyxXQUFXLEVBQUU7TUFDYi9NLFFBQVEsQ0FBQzBELElBQUksQ0FBQ1QsS0FBSyxDQUFDVSxRQUFRLEdBQUcsUUFBUTtNQUN2Q29KLFdBQVcsQ0FBQzVMLFNBQVMsQ0FBQ3NDLEdBQUcsQ0FBQyxRQUFRLENBQUM7TUFDbkM7TUFDQXpELFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDa0IsU0FBUyxDQUFDeUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztJQUNsRTtFQUNKO0VBQ0EsU0FBU3NFLGNBQWMsR0FBRztJQUN0QmxJLFFBQVEsQ0FBQ0csZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUNjLE9BQU8sQ0FBQyxVQUFBNkwsQ0FBQztNQUFBLE9BQUlBLENBQUMsQ0FBQzNMLFNBQVMsQ0FBQ3lDLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFBQSxFQUFDO0lBQzlFNUQsUUFBUSxDQUFDQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUNrQixTQUFTLENBQUNzQyxHQUFHLENBQUMsVUFBVSxDQUFDO0lBQzNEekQsUUFBUSxDQUFDMEQsSUFBSSxDQUFDVCxLQUFLLENBQUNVLFFBQVEsR0FBRyxNQUFNO0lBQ3JDNUQsUUFBUSxDQUFDb0IsU0FBUyxDQUFDeUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztFQUN4QztFQUVBd0YsZ0JBQWdCLEVBQUUsQ0FDYjVHLElBQUksQ0FBQytELElBQUksQ0FBQyxFQUFDOztFQUdoQjs7RUFFQSxTQUFTNUIsYUFBYSxDQUFDcUksUUFBUSxFQUFFQyxTQUFTLEVBQUVDLE9BQU8sRUFBRWhELElBQUksRUFBRTtJQUN2RCxJQUFNaUQsU0FBUyxHQUFHakQsSUFBSSxDQUFDakssYUFBYSxDQUFDK00sUUFBUSxDQUFDO0lBQzlDbEssT0FBTyxDQUFDc0MsR0FBRyxDQUFDK0gsU0FBUyxDQUFDO0lBQ3RCLElBQUksQ0FBQ0EsU0FBUyxFQUFFO0lBRWhCQSxTQUFTLENBQUMzTCxTQUFTLDJUQVN0QjtJQUVHLElBQU00TCxNQUFNLEdBQUdELFNBQVMsQ0FBQ2xOLGFBQWEsQ0FBQyxPQUFPLENBQUM7SUFDL0MsSUFBTW9OLE9BQU8sR0FBR0YsU0FBUyxDQUFDbE4sYUFBYSxDQUFDLFFBQVEsQ0FBQztJQUNqRCxJQUFNcU4sU0FBUyxHQUFHSCxTQUFTLENBQUNsTixhQUFhLENBQUMsVUFBVSxDQUFDO0lBQ3JELElBQU1zTixXQUFXLEdBQUdKLFNBQVMsQ0FBQ2xOLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztJQUU3RCxJQUFNdU4sS0FBSyxHQUFHLElBQUk3TixJQUFJLENBQUNzTixTQUFTLENBQUMsQ0FBQ1EsT0FBTyxFQUFFO0lBQzNDLElBQU1DLEdBQUcsR0FBRyxJQUFJL04sSUFBSSxDQUFDdU4sT0FBTyxDQUFDLENBQUNPLE9BQU8sRUFBRTtJQUN2QyxJQUFNRSxLQUFLLEdBQUdELEdBQUcsR0FBR0YsS0FBSztJQUV6QixTQUFTSSxNQUFNLEdBQUc7TUFDZCxJQUFNN0osR0FBRyxHQUFHcEUsSUFBSSxDQUFDb0UsR0FBRyxFQUFFO01BQ3RCLElBQU04SixJQUFJLEdBQUdILEdBQUcsR0FBRzNKLEdBQUc7O01BRXRCO01BQ0EsSUFBSThKLElBQUksSUFBSSxDQUFDLEVBQUU7UUFDWC9LLE9BQU8sQ0FBQ3NDLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFDbEJnSSxNQUFNLENBQUNySSxXQUFXLEdBQUcsSUFBSTtRQUN6QnNJLE9BQU8sQ0FBQ3RJLFdBQVcsR0FBRyxJQUFJO1FBQzFCdUksU0FBUyxDQUFDdkksV0FBVyxHQUFHLElBQUk7UUFDNUJ3SSxXQUFXLENBQUN0SyxLQUFLLENBQUM2SyxLQUFLLEdBQUcsTUFBTTtRQUNoQzNFLGFBQWEsQ0FBQ0YsUUFBUSxDQUFDO1FBQ3ZCcEYsYUFBYSxFQUFFO1FBQ2Y7TUFDSjs7TUFFQTtNQUNBLElBQU1rSyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDSixJQUFJLElBQUksSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7TUFDckQsSUFBTUssS0FBSyxHQUFHRixJQUFJLENBQUNDLEtBQUssQ0FBRUosSUFBSSxJQUFJLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUksRUFBRSxDQUFDO01BQ3hELElBQU1NLE9BQU8sR0FBR0gsSUFBSSxDQUFDQyxLQUFLLENBQUVKLElBQUksSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLEdBQUksRUFBRSxDQUFDO01BRXJEVCxNQUFNLENBQUNySSxXQUFXLEdBQUdxSixNQUFNLENBQUNMLElBQUksQ0FBQyxDQUFDTSxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztNQUNsRGhCLE9BQU8sQ0FBQ3RJLFdBQVcsR0FBR3FKLE1BQU0sQ0FBQ0YsS0FBSyxDQUFDLENBQUNHLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO01BQ3BEZixTQUFTLENBQUN2SSxXQUFXLEdBQUdxSixNQUFNLENBQUNELE9BQU8sQ0FBQyxDQUFDRSxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQzs7TUFFeEQ7TUFDQSxJQUFNQyxPQUFPLEdBQUd2SyxHQUFHLEdBQUd5SixLQUFLO01BQzNCLElBQU1lLE9BQU8sR0FBR1AsSUFBSSxDQUFDUSxHQUFHLENBQUNSLElBQUksQ0FBQ1MsR0FBRyxDQUFFSCxPQUFPLEdBQUdYLEtBQUssR0FBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO01BQ25FSixXQUFXLENBQUN0SyxLQUFLLENBQUM2SyxLQUFLLEdBQUdTLE9BQU8sR0FBRyxHQUFHO0lBQzNDO0lBRUFYLE1BQU0sRUFBRTtJQUNSLElBQU0zRSxRQUFRLEdBQUdDLFdBQVcsQ0FBQzBFLE1BQU0sRUFBRSxJQUFJLENBQUM7RUFDOUM7RUFHQSxTQUFTdEUsV0FBVyxDQUFDcEksRUFBRSxFQUFFNEQsTUFBTSxFQUFFO0lBQzdCLElBQU00SixXQUFXLEdBQUcsQ0FDaEI7TUFBRTVCLENBQUMsRUFBRSxDQUFDO01BQUU2QixDQUFDLEVBQUU7SUFBRSxDQUFDLEVBQ2Q7TUFBRTdCLENBQUMsRUFBRSxDQUFDO01BQUU2QixDQUFDLEVBQUU7SUFBSSxDQUFDLEVBQ2hCO01BQUU3QixDQUFDLEVBQUUsRUFBRTtNQUFFNkIsQ0FBQyxFQUFFO0lBQUssQ0FBQyxFQUNsQjtNQUFFN0IsQ0FBQyxFQUFFLEVBQUU7TUFBRTZCLENBQUMsRUFBRTtJQUFLLENBQUMsRUFDbEI7TUFBRTdCLENBQUMsRUFBRSxFQUFFO01BQUU2QixDQUFDLEVBQUU7SUFBSyxDQUFDLEVBQ2xCO01BQUU3QixDQUFDLEVBQUUsRUFBRTtNQUFFNkIsQ0FBQyxFQUFFO0lBQUssQ0FBQyxFQUNsQjtNQUFFN0IsQ0FBQyxFQUFFLEVBQUU7TUFBRTZCLENBQUMsRUFBRTtJQUFLLENBQUMsRUFDbEI7TUFBRTdCLENBQUMsRUFBRSxFQUFFO01BQUU2QixDQUFDLEVBQUU7SUFBRyxDQUFDLEVBQ2hCO01BQUU3QixDQUFDLEVBQUUsR0FBRztNQUFFNkIsQ0FBQyxFQUFFO0lBQUcsQ0FBQyxDQUNwQjtJQUVELElBQUl4TCxNQUFNLENBQUN5TCxVQUFVLElBQUksR0FBRyxFQUFFO01BQzFCLElBQU1DLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7TUFDL0RILFdBQVcsQ0FBQ3pOLE9BQU8sQ0FBQyxVQUFDNk4sS0FBSyxFQUFFeEMsS0FBSyxFQUFLO1FBQ2xDLElBQUlBLEtBQUssR0FBRyxDQUFDLEVBQUV3QyxLQUFLLENBQUNILENBQUMsR0FBR0UsU0FBUyxDQUFDdkMsS0FBSyxHQUFHLENBQUMsQ0FBQztNQUNqRCxDQUFDLENBQUM7SUFDTjtJQUVBLElBQU15QyxXQUFXLEdBQUcsU0FBZEEsV0FBVyxDQUFJakssTUFBTSxFQUFLO01BQzVCLElBQUlBLE1BQU0sSUFBSTRKLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQzVCLENBQUMsRUFBRSxPQUFPNEIsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxDQUFDO01BQ3ZELElBQUk3SixNQUFNLElBQUk0SixXQUFXLENBQUNNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDbEMsQ0FBQyxFQUFFLE9BQU80QixXQUFXLENBQUNNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDTCxDQUFDO01BRS9ELEtBQUssSUFBSWhKLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRytJLFdBQVcsQ0FBQ3ZLLE1BQU0sR0FBRyxDQUFDLEVBQUV3QixDQUFDLEVBQUUsRUFBRTtRQUM3QyxxQkFBeUIrSSxXQUFXLENBQUMvSSxDQUFDLENBQUM7VUFBNUJzSixFQUFFLGtCQUFMbkMsQ0FBQztVQUFTb0MsRUFBRSxrQkFBTFAsQ0FBQztRQUNoQixtQkFBeUJELFdBQVcsQ0FBQy9JLENBQUMsR0FBRyxDQUFDLENBQUM7VUFBaEN3SixFQUFFLGdCQUFMckMsQ0FBQztVQUFTc0MsRUFBRSxnQkFBTFQsQ0FBQztRQUNoQixJQUFJN0osTUFBTSxJQUFJbUssRUFBRSxJQUFJbkssTUFBTSxJQUFJcUssRUFBRSxFQUFFO1VBQzlCLElBQU1FLEtBQUssR0FBRyxDQUFDdkssTUFBTSxHQUFHbUssRUFBRSxLQUFLRSxFQUFFLEdBQUdGLEVBQUUsQ0FBQztVQUN2QyxPQUFPQyxFQUFFLEdBQUdHLEtBQUssSUFBSUQsRUFBRSxHQUFHRixFQUFFLENBQUM7UUFDakM7TUFDSjtNQUNBLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDZCxDQUFDOztJQUVELElBQU1JLGFBQWEsR0FBR1AsV0FBVyxDQUFDakssTUFBTSxDQUFDO0lBQ3pDLElBQU15SixPQUFPLEdBQUcvSixNQUFNLENBQUMrSyxRQUFRLENBQUNELGFBQWEsQ0FBQyxHQUFHQSxhQUFhLENBQUNsRCxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRztJQUMvRSxJQUFNb0Qsa0JBQWtCLEdBQUd4UCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxlQUFlLENBQUM7SUFHbEUsSUFBTXdQLFNBQVMsR0FBR3RNLE1BQU0sQ0FBQ3lMLFVBQVUsSUFBSSxHQUFHLEdBQUcsRUFBRSxHQUFHLEVBQUU7SUFFcEQsSUFBRzlKLE1BQU0sSUFBSTJLLFNBQVMsRUFBQztNQUNuQkQsa0JBQWtCLENBQUNyTyxTQUFTLENBQUNzQyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQzVDO0lBRUEsSUFBTWlNLElBQUksR0FBR3hPLEVBQUUsQ0FBQ2pCLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztJQUMvQyxJQUFNMFAsS0FBSyxHQUFHek8sRUFBRSxDQUFDakIsYUFBYSxDQUFDLGlCQUFpQixDQUFDO0lBRWpEeVAsSUFBSSxDQUFDek0sS0FBSyxDQUFDMk0sTUFBTSxHQUFHckIsT0FBTyxHQUFHLEdBQUc7SUFDakNpQixrQkFBa0IsQ0FBQ3pLLFdBQVcsYUFBTUQsTUFBTSxTQUFNO0lBQ2hENkssS0FBSyxDQUFDNUssV0FBVyxhQUFNRCxNQUFNLFNBQU07RUFDdkM7RUFFQSxTQUFTZ0QsWUFBWSxDQUFDK0gsS0FBSyxFQUE4QjtJQUFBLElBQTVCQyxVQUFVLHVFQUFHLEVBQUU7SUFBQSxJQUFFOU4sVUFBVTtJQUNwRDZOLEtBQUssQ0FBQzVPLE9BQU8sQ0FBQyxVQUFBOE8sSUFBSSxFQUFJO01BQ2xCLElBQU1DLGVBQWUsR0FBR3hMLE1BQU0sQ0FBQ3VMLElBQUksQ0FBQ3RMLFlBQVksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO01BQ3ZFLElBQUl3TCxZQUFZLEdBQUdILFVBQVUsQ0FBQ0ksUUFBUSxDQUFDLFVBQUFwUSxFQUFFO1FBQUEsT0FBSUEsRUFBRSxLQUFLa1EsZUFBZTtNQUFBLEVBQUM7TUFFcEUsSUFBR2hPLFVBQVUsSUFBSWdPLGVBQWUsRUFBQztRQUM3QixJQUFHQyxZQUFZLEVBQUM7VUFDWnJMLFVBQVUsQ0FBQ21MLElBQUksQ0FBQztRQUNwQjtRQUNBNUssYUFBYSxDQUFDNEssSUFBSSxDQUFDO01BQ3ZCLENBQUMsTUFBSTtRQUNEOUssV0FBVyxDQUFDOEssSUFBSSxDQUFDO01BQ3JCO0lBRUosQ0FBQyxDQUFDO0VBQ047O0VBR0o7O0VBRUkvUCxRQUFRLENBQUM0RyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFNO0lBQUE7SUFDaEQseUJBQUE1RyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxXQUFXLENBQUMsMERBQW5DLHNCQUFxQzJHLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO01BQUE7TUFDakUsMEJBQUE1RyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxZQUFZLENBQUMsMkRBQXBDLHVCQUFzQ2tCLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNsRSxDQUFDLENBQUM7RUFDTixDQUFDLENBQUM7RUFDRnBCLFFBQVEsQ0FBQzRHLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQU07SUFBQTtJQUNoRCwwQkFBQTVHLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGlCQUFpQixDQUFDLDJEQUF6Qyx1QkFBMkMyRyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtNQUFBO01BQ3ZFLDBCQUFBNUcsUUFBUSxDQUFDQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsMkRBQTFDLHVCQUE0Q2tCLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUN4RSxDQUFDLENBQUM7RUFDTixDQUFDLENBQUM7RUFFRnBCLFFBQVEsQ0FBQ0csZ0JBQWdCLENBQUMsYUFBYSxDQUFDLENBQUNjLE9BQU8sQ0FBQyxVQUFDQyxFQUFFLEVBQUs7SUFDckRBLEVBQUUsQ0FBQzBGLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO01BQy9CLElBQU11SixJQUFJLEdBQUdqUCxFQUFFLENBQUN1RCxZQUFZLENBQUMsWUFBWSxDQUFDO01BQzFDd0MsZUFBZSxDQUFDa0osSUFBSSxDQUFDO0lBQ3pCLENBQUMsQ0FBQztFQUNOLENBQUMsQ0FBQztFQUVGLElBQU1DLE1BQU0sR0FBR3BRLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFVBQVUsQ0FBQztFQUVqRG1RLE1BQU0sQ0FBQ3hKLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0lBQ25DLElBQUloRixjQUFjLENBQUNDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtNQUNsQ0QsY0FBYyxDQUFDeU8sVUFBVSxDQUFDLFFBQVEsQ0FBQztJQUN2QyxDQUFDLE1BQU07TUFDSHpPLGNBQWMsQ0FBQzBPLE9BQU8sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDO0lBQzFDO0lBQ0FuTixNQUFNLENBQUNDLFFBQVEsQ0FBQ21OLE1BQU0sRUFBRTtFQUM1QixDQUFDLENBQUM7RUFFRixJQUFNQyxPQUFPLEdBQUd4USxRQUFRLENBQUNDLGFBQWEsQ0FBQyxXQUFXLENBQUM7RUFDbkQsSUFBTXdRLE1BQU0sR0FBR3pRLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGlCQUFpQixDQUFDO0VBRXhEdVEsT0FBTyxDQUFDNUosZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQUs7SUFDbkMsSUFBRzFFLE1BQU0sRUFBQztNQUNOTixjQUFjLENBQUN5TyxVQUFVLENBQUMsUUFBUSxDQUFDO0lBQ3ZDLENBQUMsTUFBSTtNQUNEek8sY0FBYyxDQUFDME8sT0FBTyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7SUFDOUM7SUFDQW5OLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDbU4sTUFBTSxFQUFFO0VBQzVCLENBQUMsQ0FBQztFQUdGLElBQU1HLFlBQVksR0FBRzFRLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGFBQWEsQ0FBQztFQUMxRCxJQUFNMFEsVUFBVSxHQUFHM1EsUUFBUSxDQUFDQyxhQUFhLENBQUMsV0FBVyxDQUFDO0VBQ3RELElBQU0yUSxTQUFTLEdBQUc1USxRQUFRLENBQUNDLGFBQWEsQ0FBQyxVQUFVLENBQUM7RUFFcER5USxZQUFZLENBQUM5SixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtJQUN6Q3JHLFVBQVUsQ0FBQ1UsT0FBTyxDQUFDLFVBQUE0RCxJQUFJO01BQUEsT0FBSU0sYUFBYSxDQUFDTixJQUFJLENBQUM7SUFBQSxFQUFDO0VBQ25ELENBQUMsQ0FBQztFQUVGOEwsVUFBVSxDQUFDL0osZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07SUFDdkNyRyxVQUFVLENBQUNVLE9BQU8sQ0FBQyxVQUFBNEQsSUFBSTtNQUFBLE9BQUlJLFdBQVcsQ0FBQ0osSUFBSSxDQUFDO0lBQUEsRUFBQztFQUNqRCxDQUFDLENBQUM7RUFFRitMLFNBQVMsQ0FBQ2hLLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0lBQ3RDckcsVUFBVSxDQUFDVSxPQUFPLENBQUMsVUFBQTRELElBQUk7TUFBQSxPQUFJRCxVQUFVLENBQUNDLElBQUksQ0FBQztJQUFBLEVBQUM7RUFDaEQsQ0FBQyxDQUFDO0VBRUY3RSxRQUFRLENBQUNHLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDLENBQUNjLE9BQU8sQ0FBQyxVQUFBNFAsR0FBRyxFQUFJO0lBQ3ZEQSxHQUFHLENBQUNqSyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtNQUNoQyxJQUFNOUcsRUFBRSxHQUFHMEUsTUFBTSxDQUFDcU0sR0FBRyxDQUFDcE0sWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDO01BQ25EWixhQUFhLENBQUMvRCxFQUFFLENBQUM7SUFDckIsQ0FBQyxDQUFDO0VBQ04sQ0FBQyxDQUFDO0VBRUZFLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDMkcsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07SUFDbEU1RyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDa0IsU0FBUyxDQUFDQyxNQUFNLENBQUMsTUFBTSxDQUFDO0VBQ3ZFLENBQUMsQ0FBQztBQUdOLENBQUMsR0FBRyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcblxuICAgIGNvbnN0IGFwaVVSTCA9ICdodHRwczovL2Zhdi1wcm9tLmNvbS9hcGlfc2hha2h0YXJfbmV3X2dhbWVfdW5pdmVyc2UnXG5cblxuXG4gICAgbGV0IGlzVmVyaWZpZWRVc2VyID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcm9tb1N0YXJ0RGF0ZSA9IG5ldyBEYXRlKFwiMjAyNS0xMC0xNFwiKTtcblxuXG5cblxuICAgIGNvbnN0IG1hdGNoZXMgPSBbXG4gICAgICAgIHsgZGF0ZTogJzIwMjUtMTAtMjNUMTk6NDU6MDAnLCBpZDogMSB9LCAgLy8g0JvRltCz0LAg0LrQvtC90YTQtdGA0LXQvdGG0ZbQuTog0KjQsNGF0YLQsNGAIC0g0JvQtdCz0ZbRj1xuICAgICAgICB7IGRhdGU6ICcyMDI1LTEwLTI1VDE4OjAwOjAwJywgaWQ6IDIgfSwgIC8vINCj0J/Qmzog0KjQsNGF0YLQsNGAIC0g0JrRg9C00YDRltCy0LrQsFxuICAgICAgICB7IGRhdGU6ICcyMDI1LTEwLTI4VDE3OjAwOjAwJywgaWQ6IDMgfSwgIC8vINCa0YPQsdC+0Log0KPQutGA0LDRl9C90Lg6INCU0LjQvdCw0LzQviAtINCo0LDRhdGC0LDRgFxuICAgICAgICB7IGRhdGU6ICcyMDI1LTExLTAxVDE4OjAwOjAwJywgaWQ6IDQgfSwgIC8vINCj0J/Qmzog0KjQsNGF0YLQsNGAIC0g0JTQuNC90LDQvNC+XG4gICAgICAgIHsgZGF0ZTogJzIwMjUtMTEtMDZUMTk6NDU6MDAnLCBpZDogNSB9LCAgLy8g0JvRltCz0LAg0LrQvtC90YTQtdGA0LXQvdGG0ZbQuTog0KjQsNGF0YLQsNGAIC0g0JHRgNC10LnQtNCw0LHQu9GW0LpcbiAgICAgICAgeyBkYXRlOiAnMjAyNS0xMS0wOFQxODowMDowMCcsIGlkOiA2IH0sICAvLyDQo9Cf0Js6INCo0LDRhdGC0LDRgCAtINCh0Jog0J/QvtC70YLQsNCy0LBcbiAgICAgICAgeyBkYXRlOiAnMjAyNS0xMS0yMlQxODowMDowMCcsIGlkOiA3IH0sICAvLyDQo9Cf0Js6INCe0LHQvtC70L7QvdGMIC0g0KjQsNGF0YLQsNGAXG4gICAgICAgIHsgZGF0ZTogJzIwMjUtMTEtMjdUMjI6MDA6MDAnLCBpZDogOCB9LCAgLy8g0JvRltCz0LAg0LrQvtC90YTQtdGA0LXQvdGG0ZbQuTog0KjQtdC80YDQvtC6INCg0L7QstC10YDRgSAtINCo0LDRhdGC0LDRgFxuICAgICAgICB7IGRhdGU6ICcyMDI1LTExLTI5VDE4OjAwOjAwJywgaWQ6IDkgfSwgIC8vINCj0J/Qmzog0KjQsNGF0YLQsNGAIC0g0JrRgNC40LLQsdCw0YFcbiAgICAgICAgeyBkYXRlOiAnMjAyNS0xMi0wNlQxODowMDowMCcsIGlkOiAxMCB9LCAvLyDQo9Cf0Js6INCa0L7Qu9C+0YEgLSDQqNCw0YXRgtCw0YBcbiAgICAgICAgeyBkYXRlOiAnMjAyNS0xMi0xMVQyMjowMDowMCcsIGlkOiAxMSB9LCAvLyDQm9GW0LPQsCDQutC+0L3RhNC10YDQtdC90YbRltC5OiDQpdCw0LzRgNGD0L0g0KHQv9Cw0YDRgtCw0L3RgSAtINCo0LDRhdGC0LDRgFxuICAgICAgICB7IGRhdGU6ICcyMDI1LTEyLTEzVDE4OjAwOjAwJywgaWQ6IDEyIH0sIC8vINCj0J/Qmzog0KjQsNGF0YLQsNGAIC0g0JXQv9GW0YbQtdC90YLRgFxuICAgICAgICB7IGRhdGU6ICcyMDI1LTEyLTE4VDIyOjAwOjAwJywgaWQ6IDEzIH0sIC8vINCb0ZbQs9CwINC60L7QvdGE0LXRgNC10L3RhtGW0Lk6INCo0LDRhdGC0LDRgCAtINCg0ZbRlNC60LBcbiAgICBdO1xuXG5cblxuICAgIGNvbnN0IG1haW5QYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mYXYtcGFnZVwiKSxcbiAgICAgICAgdW5hdXRoTXNncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy51bmF1dGgtbXNnJyksXG4gICAgICAgIHBhcnRpY2lwYXRlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYXJ0LWJ0bicpLFxuICAgICAgICByZWRpcmVjdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLWpvaW4nKSxcbiAgICAgICAgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zcGlubmVyLW92ZXJsYXlcIiksXG4gICAgICAgIHByaXplSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1hbW91bnQtcG9pbnRzXScpLFxuICAgICAgICBwb2ludHNCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZ3Jlc3MtYmFyJyksXG4gICAgICAgIHByaXplQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpemUnKSxcbiAgICAgICAgcG9wdXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwcycpLFxuICAgICAgICBsYXN0VXBkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaXplX19sYXN0LXVwZCcpXG5cblxuICAgIGNvbnN0IHVrTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1a0xlbmcnKTtcbiAgICBjb25zdCBlbkxlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW5MZW5nJyk7XG5cbiAgICBjb25zdCB0b2dnbGVDbGFzc2VzID0gKGVsZW1lbnRzLCBjbGFzc05hbWUpID0+IGVsZW1lbnRzLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnRvZ2dsZShgJHtjbGFzc05hbWV9YCkpO1xuICAgIGNvbnN0IHRvZ2dsZVRyYW5zbGF0ZXMgPSAoZWxlbWVudHMsIGRhdGFBdHRyKSA9PiBlbGVtZW50cy5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScsIGAke2RhdGFBdHRyfWApXG4gICAgICAgIGVsLmlubmVySFRNTCA9IGkxOG5EYXRhW2RhdGFBdHRyXSB8fCAnKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiAgIGtleTogICcgKyBkYXRhQXR0cjtcbiAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgIH0pO1xuXG5cbiAgICAvLyBsZXQgbG9jYWxlID0gXCJlblwiXG4gICAgbGV0IGxvY2FsZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJsb2NhbGVcIikgfHwgXCJ1a1wiXG5cbiAgICBpZiAodWtMZW5nKSBsb2NhbGUgPSAndWsnO1xuICAgIGlmIChlbkxlbmcpIGxvY2FsZSA9ICdlbic7XG5cbiAgICBsZXQgZGVidWcgPSBmYWxzZVxuXG4gICAgaWYgKGRlYnVnKSB7XG4gICAgICAgIGhpZGVMb2FkZXIoKVxuICAgIH1cblxuICAgIGxldCB1c2VyUG9pbnRzID0gMFxuXG4gICAgbGV0IGkxOG5EYXRhID0ge307XG4gICAgY29uc3QgdHJhbnNsYXRlU3RhdGUgPSB0cnVlO1xuICAgIGxldCB1c2VySWQgPSBudWxsO1xuICAgIC8vIGxldCB1c2VySWQgPSBOdW1iZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKSkgPz8gbnVsbFxuICAgIHVzZXJJZCA9IDEwMDMwMDI2OFxuXG4gICAgY29uc3QgcmVxdWVzdCA9IGZ1bmN0aW9uIChsaW5rLCBleHRyYU9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKGFwaVVSTCArIGxpbmssIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAuLi4oZXh0cmFPcHRpb25zIHx8IHt9KVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKCdBUEkgZXJyb3InKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdBUEkgcmVxdWVzdCBmYWlsZWQ6JywgZXJyKTtcblxuICAgICAgICAgICAgICAgIHJlcG9ydEVycm9yKGVycik7XG5cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmF2LXBhZ2UnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZi5zdGFydHNXaXRoKFwiaHR0cHM6Ly93d3cuZmF2YmV0LmhyL1wiKSkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJvbW9jaWplL3Byb21vY2lqYS9zdHViLyc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3Byb21vcy9wcm9tby9zdHViLyc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XG4gICAgICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpZGVMb2FkZXIoKXtcbiAgICAgICAgbG9hZGVyLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIlxuICAgICAgICBtYWluUGFnZS5jbGFzc0xpc3QucmVtb3ZlKFwibG9hZGluZ1wiKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3dOZXh0TWF0Y2godGVzdElkKSB7XG4gICAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKFwiMjAyNS0xMC0yM1QxOTo0NDo0MFwiKTtcbiAgICAgICAgbGV0IG5leHRNYXRjaCA9IG1hdGNoZXMuZmluZChtYXRjaCA9PiBuZXcgRGF0ZShtYXRjaC5kYXRlKSA+IG5vdykgfHwgbWF0Y2hlc1ttYXRjaGVzLmxlbmd0aCAtIDFdO1xuXG4gICAgICAgIGNvbnN0IHByZXZNYXRjaEluZGV4ID0gbWF0Y2hlcy5maW5kSW5kZXgobWF0Y2ggPT4gbWF0Y2guaWQgPT09IG5leHRNYXRjaC5pZCkgLSAxO1xuICAgICAgICBsZXQgcHJldk1hdGNoRGF0ZSA9IHByZXZNYXRjaEluZGV4ID49IDBcbiAgICAgICAgICAgID8gbmV3IERhdGUobWF0Y2hlc1twcmV2TWF0Y2hJbmRleF0uZGF0ZSlcbiAgICAgICAgICAgIDogcHJvbW9TdGFydERhdGU7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbWF0Y2hdJykuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaElkID0gTnVtYmVyKGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1tYXRjaCcpKTtcblxuICAgICAgICAgICAgaWYgKHRlc3RJZCkge1xuICAgICAgICAgICAgICAgIG5leHRNYXRjaCA9IG1hdGNoZXMuZmluZChtID0+IG0uaWQgPT09IHRlc3RJZCkgfHwgbWF0Y2hlc1swXTtcbiAgICAgICAgICAgICAgICBwcmV2TWF0Y2hEYXRlID0gbWF0Y2hlc1tuZXh0TWF0Y2guaWQgLSAyXT8uZGF0ZSB8fCBwcm9tb1N0YXJ0RGF0ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG1hdGNoSWQgPT09IG5leHRNYXRjaC5pZCkge1xuICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICBpbml0Q291bnRkb3duKCcuaW5mb19fbWF0Y2gtbmV4dC10aW1lJywgcHJldk1hdGNoRGF0ZSwgbmV4dE1hdGNoLmRhdGUsIGVsKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIC8vIGZ1bmN0aW9uIHNob3dOZXh0TWF0Y2godGVzdElkKSB7XG4gICAgLy9cbiAgICAvLyAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgICAvL1xuICAgIC8vICAgICBsZXQgbmV4dE1hdGNoID0gbWF0Y2hlcy5maW5kKG1hdGNoID0+IG5ldyBEYXRlKG1hdGNoLmRhdGUpID4gbm93KSB8fCBtYXRjaGVzW21hdGNoZXMubGVuZ3RoIC0gMV07XG4gICAgLy9cbiAgICAvLyAgICAgY29uc3QgcHJldk1hdGNoSW5kZXggPSBtYXRjaGVzLmZpbmRJbmRleChtYXRjaCA9PiBtYXRjaC5pZCA9PT0gbmV4dE1hdGNoLmlkKSAtIDE7XG4gICAgLy8gICAgIGxldCBwcmV2TWF0Y2hEYXRlID0gcHJldk1hdGNoSW5kZXggPj0gMFxuICAgIC8vICAgICAgICAgPyBuZXcgRGF0ZShtYXRjaGVzW3ByZXZNYXRjaEluZGV4XS5kYXRlKVxuICAgIC8vICAgICAgICAgOiBwcm9tb1N0YXJ0RGF0ZTtcbiAgICAvL1xuICAgIC8vICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1tYXRjaF0nKS5mb3JFYWNoKGVsID0+IHtcbiAgICAvLyAgICAgICAgIGNvbnN0IG1hdGNoSWQgPSBOdW1iZXIoZWwuZ2V0QXR0cmlidXRlKCdkYXRhLW1hdGNoJykpO1xuICAgIC8vXG4gICAgLy8gICAgICAgICBuZXh0TWF0Y2ggPSBtYXRjaGVzWzNdXG4gICAgLy8gICAgICAgICBwcmV2TWF0Y2hEYXRlID0gbWF0Y2hlc1tuZXh0TWF0Y2guaWQgLSAxXS5kYXRlIHx8IHByb21vU3RhcnREYXRlXG4gICAgLy9cbiAgICAvLyAgICAgICAgIGlmIChtYXRjaElkID09PSBuZXh0TWF0Y2guaWQpIHtcbiAgICAvLyAgICAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgLy8gICAgICAgICAgICAgaW5pdENvdW50ZG93bignLmluZm9fX21hdGNoLW5leHQtdGltZScsIHByZXZNYXRjaERhdGUsIG5leHRNYXRjaC5kYXRlLCBlbClcbiAgICAvLyAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9KTtcbiAgICAvLyB9XG5cblxuICAgIGZ1bmN0aW9uIHNldFdvbkl0ZW0oaXRlbSl7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnd29uJyk7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG5cbiAgICAgICAgY29uc3QgcG9pbnRzID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcucHJpemVfX2Ftb3VudC1wb2ludHMnKSA/PyBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5wcml6ZV9faXRlbS1wb2ludHMnKTtcblxuICAgICAgICBwb2ludHMudGV4dENvbnRlbnQgPSB0cmFuc2xhdGVLZXkoXCJ3b25cIilcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRMb2NrSXRlbShpdGVtKXtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCd3b24nKTtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcblxuICAgICAgICBjb25zdCBhbW91bnQgPSBpdGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1hbW91bnQtcG9pbnRzJyk7XG5cbiAgICAgICAgY29uc3QgcG9pbnRzID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcucHJpemVfX2Ftb3VudC1wb2ludHMnKSA/PyBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5wcml6ZV9faXRlbS1wb2ludHMnKTtcblxuICAgICAgICBwb2ludHMudGV4dENvbnRlbnQgPSBgJHthbW91bnR9ICR7dHJhbnNsYXRlS2V5KFwicG9pbnRzXCIpfWBcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldEFjdGl2ZUl0ZW0oaXRlbSl7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnd29uJyk7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cbiAgICAgICAgY29uc29sZS5sb2coaXRlbSlcbiAgICAgICAgY29uc3QgYW1vdW50ID0gaXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtYW1vdW50LXBvaW50cycpO1xuXG4gICAgICAgIGNvbnN0IHBvaW50cyA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLnByaXplX19hbW91bnQtcG9pbnRzJykgPz8gaXRlbS5xdWVyeVNlbGVjdG9yKCcucHJpemVfX2l0ZW0tcG9pbnRzJyk7XG5cbiAgICAgICAgcG9pbnRzLnRleHRDb250ZW50ID0gYCR7YW1vdW50fSAke3RyYW5zbGF0ZUtleShcInBvaW50c1wiKX1gXG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb25maXJtUHJpemUocG9wdXAsIGl0ZW0pe1xuICAgICAgICBjb25zb2xlLmxvZyhpdGVtKTtcblxuICAgICAgICAvLyByZXF1ZXN0KCcvdXNlci9wcml6ZScsIHtcbiAgICAgICAgLy8gICAgIG1ldGhvZDogJ1BPU1QnXG4gICAgICAgIC8vICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIC8vICAgICAgICAgdXNlcmlkOiB1c2VySWQsXG4gICAgICAgIC8vICAgICAgICAgcHJpemVpZFxuICAgICAgICAvLyAgICAgfSlcbiAgICAgICAgLy9cbiAgICAgICAgLy8gfSlcblxuICAgICAgICBjb25zdCBjb25maXJtQnV0dG9uID0gcG9wdXAucXVlcnlTZWxlY3RvcignW2RhdGEtY29uZmlybT1cImNvbmZpcm1lZFwiXScpO1xuICAgICAgICBjb25zdCB1bmNvbmZpcm1CdXR0b25zID0gcG9wdXAucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtY29uZmlybT1cInVuY29uZmlybWVkXCJdJyk7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gcG9wdXAucXVlcnlTZWxlY3RvcignLnBvcHVwX190aXRsZScpO1xuICAgICAgICBjb25zdCB0ZXh0ID0gcG9wdXAucXVlcnlTZWxlY3RvcignLnBvcHVwX190ZXh0Jyk7XG5cbiAgICAgICAgc2V0V29uSXRlbShpdGVtKTtcblxuICAgICAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKFwiY29uZmlybWVkXCIpO1xuXG4gICAgICAgIHRpdGxlLmlubmVySFRNTCA9IHRyYW5zbGF0ZUtleShcInBvcHVwVGl0bGVZb3VDaG9zZVwiKVxuICAgICAgICB0ZXh0LmlubmVySFRNTCA9IHRyYW5zbGF0ZUtleShcInBvcHVwVGV4dFlvdUNob3NlXCIpXG5cbiAgICAgICAgY29uZmlybUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG5cbiAgICAgICAgdW5jb25maXJtQnV0dG9ucy5mb3JFYWNoKChlbCwgaSkgPT4ge1xuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0TGFzdFVwZGF0ZWRUZXh0KGVsZW1lbnQsIGRhdGVTdHJpbmcsIGxvY2FsZSkge1xuICAgICAgICBjb25zdCBsYXN0VXBkTG9jYWxlID0gbG9jYWxlID09PSAndWsnID8gJ3VrLVVBJyA6ICdlbi1VUyc7XG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBuZXcgRGF0ZShkYXRlU3RyaW5nKS50b0xvY2FsZVN0cmluZyhsYXN0VXBkTG9jYWxlLCB7XG4gICAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICAgICAgICBtb250aDogJ2xvbmcnLFxuICAgICAgICAgICAgZGF5OiAnbnVtZXJpYycsXG4gICAgICAgICAgICBob3VyOiAnMi1kaWdpdCcsXG4gICAgICAgICAgICBtaW51dGU6ICcyLWRpZ2l0JyxcbiAgICAgICAgfSk7XG4gICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBmb3JtYXR0ZWREYXRlO1xuICAgIH1cblxuXG4gICAgYXN5bmMgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgbGV0IGF0dGVtcHRzID0gMDtcbiAgICAgICAgY29uc3QgbWF4QXR0ZW1wdHMgPSAyMDtcbiAgICAgICAgY29uc3QgYXR0ZW1wdEludGVydmFsID0gNTA7XG5cbiAgICAgICAgZnVuY3Rpb24gdHJ5RGV0ZWN0VXNlcklkKCkge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5zdG9yZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gd2luZG93LnN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgICAgICAgICAgdXNlcklkID0gc3RhdGUuYXV0aC5pc0F1dGhvcml6ZWQgJiYgc3RhdGUuYXV0aC5pZCB8fCAnJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAod2luZG93LmdfdXNlcl9pZCkge1xuICAgICAgICAgICAgICAgIHVzZXJJZCA9IHdpbmRvdy5nX3VzZXJfaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIGZ1bmN0aW9uIHF1aWNrQ2hlY2tBbmRSZW5kZXIoKSB7XG4gICAgICAgICAgICBjaGVja1VzZXJBdXRoKClcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChoaWRlTG9hZGVyLCAzMDApO1xuXG4gICAgICAgICAgICAgICAgICAgIHNob3dOZXh0TWF0Y2goKVxuXG4gICAgICAgICAgICAgICAgICAgIHByaXplQmxvY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJpemVJdGVtID0gZS50YXJnZXQuY2xvc2VzdCgnW2RhdGEtYW1vdW50LXBvaW50c10nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g0K/QutGJ0L4g0L3QsNGC0LjRgdC90YPQu9C4INC90LAg0L/RgNC40LdcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcml6ZUl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwb2ludHMgPSBwcml6ZUl0ZW0uZ2V0QXR0cmlidXRlKCdkYXRhLWFtb3VudC1wb2ludHMnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5jbG9zZXN0KCcucHJpemVfX2l0ZW0tYnRuJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlblBvcHVwQnlBdHRyKGAke3BvaW50c31Qb2ludHNQb3B1cGApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5Qb3B1cEJ5QXR0cihgJHtwb2ludHN9UG9pbnRzUG9wdXBJbmZvYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBtYWluUGFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJ0aWNpcGF0ZUJ0biA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5wYXJ0LWJ0bicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnRpY2lwYXRlQnRuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g0LvQvtCz0ZbQutCwINGD0YfQsNGB0YLRllxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcG9wdXBzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRha2VCdG4gPSBlLnRhcmdldC5jbG9zZXN0KCdbZGF0YS1hY3Rpb249XCJ0YWtlQm9udXNcIl0nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNsb3NlQnRuID0gZS50YXJnZXQuY2xvc2VzdCgnLnBvcHVwX19jbG9zZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3BlblBvcHVwRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAuYWN0aXZlJyk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g0K/QutGJ0L4g0L3QsNGC0LjRgdC90YPQu9C4INC90LAg0LrQvdC+0L/QutGDIFwi0JLQt9GP0YLQuCDQsdC+0L3Rg9GBXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YWtlQnRuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwLmFjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXBvcHVwKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3B1cEFtb3VudCA9IE51bWJlcihwb3B1cC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcG9wdXAtYW1vdW50JykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1Qcml6ZSA9IHByaXplQmxvY2sucXVlcnlTZWxlY3RvcihgW2RhdGEtYW1vdW50LXBvaW50cz1cIiR7cG9wdXBBbW91bnR9XCJdYCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih1c2VyUG9pbnRzID49IHBvcHVwQW1vdW50KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3NlcyhbdGFrZUJ0bl0sIFwibG9hZGVyXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZVRyYW5zbGF0ZXMoW3Rha2VCdG5dLCBcImxvYWRlclwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0KCcvdXNlci9wcml6ZScsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcmlkOiB1c2VySWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpemVpZDogcG9wdXBBbW91bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVUcmFuc2xhdGVzKFt0YWtlQnRuXSwgXCJsb2FkZXJfcmVhZHlcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVDbGFzc2VzKFt0YWtlQnRuXSwgXCJkb25lXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2FyZFN0YXRlKHByaXplSXRlbXMsIHJlcy51c2VyLnByaXplcywgcmVzLnVzZXIucG9pbnRzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldExhc3RVcGRhdGVkVGV4dChsYXN0VXBkLCByZXMudXNlci5sYXN0VXBkYXRlZCwgbG9jYWxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtUHJpemUocG9wdXAsIGl0ZW1Qcml6ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgNTAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDRhdGA0LXRgdGC0LjQuiDRidC+0LEg0LfQsNC60YDQuNCy0LDQsiDQv9C+0L/QsNC/XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2xvc2VCdG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZUFsbFBvcHVwcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g0LfQsNC60YDQuNCy0LDRlNC8INC/0L7Qv9Cw0L8g0Y/QutGJ0L4g0LrQu9GW0LrQvdGD0LvQuCDQt9CwINC50L7Qs9C+INC80LXQttCw0LzQuFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYob3BlblBvcHVwRWwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG9wZW5Qb3B1cEVsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRXcmFwID0gb3BlblBvcHVwRWwucXVlcnlTZWxlY3RvcignLnBvcHVwX193cmFwJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY29udGVudFdyYXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNsb3NlQnRuID0gb3BlblBvcHVwRWwucXVlcnlTZWxlY3RvcignLnBvcHVwX19jbG9zZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhbmNlbEJ0biA9IG9wZW5Qb3B1cEVsLnF1ZXJ5U2VsZWN0b3IoJy5idG4tY2FuY2VsJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRlbnRXcmFwICYmICFjb250ZW50V3JhcC5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VBbGxQb3B1cHMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZS50YXJnZXQgPT09IGNsb3NlQnRuIHx8IGUudGFyZ2V0ID09PSBjYW5jZWxCdG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VBbGxQb3B1cHMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHdhaXRGb3JVc2VySWQgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5RGV0ZWN0VXNlcklkKCk7XG4gICAgICAgICAgICAgICAgaWYgKHVzZXJJZCB8fCBhdHRlbXB0cyA+PSBtYXhBdHRlbXB0cykge1xuICAgICAgICAgICAgICAgICAgICBxdWlja0NoZWNrQW5kUmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGF0dGVtcHRzKys7XG4gICAgICAgICAgICB9LCBhdHRlbXB0SW50ZXJ2YWwpO1xuICAgICAgICB9KTtcblxuICAgICAgICBhd2FpdCB3YWl0Rm9yVXNlcklkO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWRUcmFuc2xhdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiByZXF1ZXN0KGAvbmV3LXRyYW5zbGF0ZXMvJHtsb2NhbGV9P25vY2FjaGU9MWApXG4gICAgICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgICAgICBpMThuRGF0YSA9IGpzb247XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja1VzZXJBdXRoKCkge1xuICAgICAgICBjb25zb2xlLmxvZyh1c2VySWQpXG4gICAgICAgIGxhc3RVcGQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICBzZXRQcm9ncmVzcyhwb2ludHNCYXIsIDApXG4gICAgICAgIHNldENhcmRTdGF0ZShwcml6ZUl0ZW1zLCBbXSwgMClcbiAgICAgICAgaWYgKHVzZXJJZCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCB1bmF1dGhNZXMgb2YgdW5hdXRoTXNncykge1xuICAgICAgICAgICAgICAgIHVuYXV0aE1lcy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVxdWVzdChgL2ZhdnVzZXIvJHt1c2VySWR9P25vY2FjaGU9MWApXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy51c2VyaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJQb2ludHMgPSByZXMucG9pbnRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGVCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWRpcmVjdEJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVmVyaWZpZWRVc2VyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFByb2dyZXNzKHBvaW50c0JhciwgdXNlclBvaW50cylcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFzdFVwZExvY2FsZSA9IGxvY2FsZSA9PT0gXCJ1a1wiID8gJ3VrLVVBJyA6IFwiZW4tVVNcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0VXBkLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldExhc3RVcGRhdGVkVGV4dChsYXN0VXBkLCByZXMubGFzdFVwZGF0ZWQsIGxvY2FsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRDYXJkU3RhdGUocHJpemVJdGVtcywgcmVzLnByaXplcywgdXNlclBvaW50cylcblxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGVCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWRpcmVjdEJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVmVyaWZpZWRVc2VyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCByZWRpcmVjdEJ0biBvZiByZWRpcmVjdEJ0bnMpIHtcbiAgICAgICAgICAgICAgICByZWRpcmVjdEJ0bi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBwYXJ0aWNpcGF0ZUJ0biBvZiBwYXJ0aWNpcGF0ZUJ0bnMpIHtcbiAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHVuYXV0aE1lcyBvZiB1bmF1dGhNc2dzKSB7XG4gICAgICAgICAgICAgICAgdW5hdXRoTWVzLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXBvcnRFcnJvcihlcnIpIHtcbiAgICAgICAgY29uc3QgcmVwb3J0RGF0YSA9IHtcbiAgICAgICAgICAgIG9yaWdpbjogd2luZG93LmxvY2F0aW9uLmhyZWYsXG4gICAgICAgICAgICB1c2VyaWQ6IHVzZXJJZCxcbiAgICAgICAgICAgIGVycm9yVGV4dDogZXJyPy5lcnJvciB8fCBlcnI/LnRleHQgfHwgZXJyPy5tZXNzYWdlIHx8ICdVbmtub3duIGVycm9yJyxcbiAgICAgICAgICAgIHR5cGU6IGVycj8ubmFtZSB8fCAnVW5rbm93bkVycm9yJyxcbiAgICAgICAgICAgIHN0YWNrOiBlcnI/LnN0YWNrIHx8ICcnXG4gICAgICAgIH07XG5cbiAgICAgICAgZmV0Y2goJ2h0dHBzOi8vZmF2LXByb20uY29tL2FwaS1jbXMvcmVwb3J0cy9hZGQnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVwb3J0RGF0YSlcbiAgICAgICAgfSkuY2F0Y2goY29uc29sZS53YXJuKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmFuc2xhdGUoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdHJhbnNsYXRlXScpXG4gICAgICAgIGlmIChlbGVtcyAmJiBlbGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmKHRyYW5zbGF0ZVN0YXRlKXtcbiAgICAgICAgICAgICAgICBlbGVtcy5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5pbm5lckhUTUwgPSBpMThuRGF0YVtrZXldIHx8ICcqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qICAga2V5OiAgJyArIGtleTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkxOG5EYXRhW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidHJhbnNsYXRpb24gd29ya3MhXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxvY2FsZSA9PT0gJ2VuJykge1xuICAgICAgICAgICAgbWFpblBhZ2UuY2xhc3NMaXN0LmFkZCgnZW4nKTtcbiAgICAgICAgfVxuICAgICAgICByZWZyZXNoTG9jYWxpemVkQ2xhc3MobWFpblBhZ2UpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlZnJlc2hMb2NhbGl6ZWRDbGFzcyhlbGVtZW50KSB7XG4gICAgICAgIGxldCBiYXNlQ3NzQ2xhc3MgPSBcIlwiXG4gICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgbGFuZyBvZiBbJ3VrJywgJ2VuJ10pIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShiYXNlQ3NzQ2xhc3MgKyBsYW5nKTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYmFzZUNzc0NsYXNzICsgbG9jYWxlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJVc2Vycyh3ZWVrTnVtLCB1c2VyRGF0YSA9IFtdKSB7XG4gICAgICAgIHdlZWtOdW0gPSBOdW1iZXIod2Vla051bSk7XG4gICAgICAgIHVzZXJEYXRhID0gdXNlckRhdGEuZmluZCh3ZWVrID0+IHtcbiAgICAgICAgICAgIHJldHVybiB3ZWVrLndlZWsgPT09IHdlZWtOdW1cbiAgICAgICAgfSkudXNlcnM7XG5cbiAgICAgICAgY29uc29sZS5sb2codXNlckRhdGEpO1xuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gdXNlckRhdGEuZmluZCh1c2VyID0+IHVzZXIudXNlcmlkID09PSB1c2VySWQpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJJZClcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudFVzZXIpXG4gICAgICAgIGNvbnNvbGUubG9nKGlzVmVyaWZpZWRVc2VyKVxuXG4gICAgICAgIGlmKHVzZXJJZCAmJiAhY3VycmVudFVzZXIgJiYgaXNWZXJpZmllZFVzZXIpe1xuICAgICAgICAgICAgdXNlckRhdGEgPSBbLi4udXNlckRhdGEsIHt1c2VyaWQ6IHVzZXJJZCwgcG9pbnRzOiAwfV1cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyh1c2VyRGF0YSk7XG5cbiAgICAgICAgcG9wdWxhdGVVc2Vyc1RhYmxlKHVzZXJEYXRhLCB1c2VySWQsIHdlZWtOdW0sIGN1cnJlbnRVc2VyLCBpc1ZlcmlmaWVkVXNlcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcG9wdWxhdGVVc2Vyc1RhYmxlKHVzZXJzLCBjdXJyZW50VXNlcklkLCB3ZWVrLCBjdXJyZW50VXNlciwgaXNWZXJpZmllZFVzZXIpIHtcblxuICAgICAgICBjb25zb2xlLmxvZyh1c2Vycyk7XG4gICAgICAgIHJlc3VsdHNUYWJsZS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgcmVzdWx0c1RhYmxlT3RoZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGlmICghdXNlcnM/Lmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGlzVG9wQ3VycmVudFVzZXIgPSBjdXJyZW50VXNlciAmJiB1c2Vycy5zbGljZSgwLCAxMCkuc29tZSh1c2VyID0+IHVzZXIudXNlcmlkID09PSBjdXJyZW50VXNlcklkKTtcblxuICAgICAgICBjb25zdCB0b3BVc2Vyc0xlbmd0aCA9ICF1c2VySWQgfHwgaXNUb3BDdXJyZW50VXNlciAgPyAxMyA6IDEwO1xuXG4gICAgICAgIGNvbnN0IHRvcFVzZXJzID0gdXNlcnMuc2xpY2UoMCwgdG9wVXNlcnNMZW5ndGgpO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHVzZXJzKTtcbiAgICAgICAgdG9wVXNlcnMuZm9yRWFjaCh1c2VyID0+IHtcbiAgICAgICAgICAgIGRpc3BsYXlVc2VyKHVzZXIsIHVzZXIudXNlcmlkID09PSBjdXJyZW50VXNlcklkLCByZXN1bHRzVGFibGUsIHRvcFVzZXJzLCBpc1RvcEN1cnJlbnRVc2VyLCB3ZWVrKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGlzVG9wQ3VycmVudFVzZXIpXG4gICAgICAgIGNvbnNvbGUubG9nKGlzVmVyaWZpZWRVc2VyKVxuICAgICAgICBpZihpc1ZlcmlmaWVkVXNlciAmJiAhY3VycmVudFVzZXIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1c2VyIHZlcmlmaWVkJyk7XG4gICAgICAgICAgICBkaXNwbGF5VXNlcihjdXJyZW50VXNlciwgdHJ1ZSwgcmVzdWx0c1RhYmxlT3RoZXIsIHVzZXJzLCBmYWxzZSwgd2Vlayk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc1RvcEN1cnJlbnRVc2VyICYmIGN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICBpc1ZlcmlmaWVkVXNlciA9IGZhbHNlO1xuICAgICAgICAgICAgZGlzcGxheVVzZXIoY3VycmVudFVzZXIsIHRydWUsIHJlc3VsdHNUYWJsZU90aGVyLCB1c2VycywgZmFsc2UsIHdlZWspO1xuICAgICAgICB9XG5cblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlVc2VyKHVzZXIsIGlzQ3VycmVudFVzZXIsIHRhYmxlLCB1c2VycywgaXNUb3BDdXJyZW50VXNlciwgd2Vlaykge1xuXG4gICAgICAgIGNvbnN0IHJlbmRlclJvdyA9ICh1c2VyRGF0YSwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGhpZ2hsaWdodCA9IGZhbHNlLCBuZWlnaGJvciA9IGZhbHNlIH0gPSBvcHRpb25zO1xuICAgICAgICAgICAgY29uc3QgdXNlclJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKCd0YWJsZV9fcm93Jyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHVzZXJQbGFjZSA9IHVzZXJzLmluZGV4T2YodXNlckRhdGEpICsgMTtcbiAgICAgICAgICAgIGNvbnN0IHByaXplS2V5ID0gZGVidWcgPyBudWxsIDogZ2V0UHJpemVUcmFuc2xhdGlvbktleSh1c2VyUGxhY2UsIHdlZWspO1xuXG4gICAgICAgICAgICBpZiAodXNlclBsYWNlIDw9IDMpIHtcbiAgICAgICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoYHBsYWNlJHt1c2VyUGxhY2V9YCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChoaWdobGlnaHQgfHwgaXNDdXJyZW50VXNlciAmJiAhbmVpZ2hib3IpIHtcbiAgICAgICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoJ3lvdScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChuZWlnaGJvcikge1xuICAgICAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZCgnX25laWdoYm9yJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVzZXJSb3cuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7dXNlclBsYWNlIDwgMTAgPyAnMCcgKyB1c2VyUGxhY2UgOiB1c2VyUGxhY2V9XG4gICAgICAgICAgICAgICAgJHtpc0N1cnJlbnRVc2VyICYmICFuZWlnaGJvciA/ICc8c3BhbiBjbGFzcz1cInlvdVwiPicgKyB0cmFuc2xhdGVLZXkoXCJ5b3VcIikgKyAnPC9zcGFuPicgOiAnJ31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7aXNDdXJyZW50VXNlciAmJiAhbmVpZ2hib3IgPyB1c2VyRGF0YS51c2VyaWQgOiBtYXNrVXNlcklkKHVzZXJEYXRhLnVzZXJpZCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke051bWJlcih1c2VyRGF0YS5wb2ludHMpLnRvRml4ZWQoMil9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke3ByaXplS2V5ID8gdHJhbnNsYXRlS2V5KHByaXplS2V5KSA6ICcgLSAnfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG5cbiAgICAgICAgICAgIHRhYmxlLmFwcGVuZCh1c2VyUm93KTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGlzQ3VycmVudFVzZXIgJiYgIWlzVG9wQ3VycmVudFVzZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdXNlcnMuaW5kZXhPZih1c2VyKTtcbiAgICAgICAgICAgIGlmICh1c2Vyc1tpbmRleCAtIDFdKSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyUm93KHVzZXJzW2luZGV4IC0gMV0sIHsgbmVpZ2hib3I6IHRydWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZW5kZXJSb3codXNlciwgeyBoaWdobGlnaHQ6IHRydWUgfSk7XG4gICAgICAgICAgICBpZiAodXNlcnNbaW5kZXggKyAxXSkge1xuICAgICAgICAgICAgICAgIHJlbmRlclJvdyh1c2Vyc1tpbmRleCArIDFdLCB7IG5laWdoYm9yOiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVuZGVyUm93KHVzZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiB0cmFuc2xhdGVLZXkoa2V5LCBkZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgaWYgKCFrZXkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbmVlZEtleSA9IGRlYnVnID8ga2V5IDogYCotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSoga2V5OiAke2tleX1gXG5cbiAgICAgICAgZGVmYXVsdFZhbHVlID0gIG5lZWRLZXkgfHwga2V5O1xuICAgICAgICByZXR1cm4gaTE4bkRhdGFba2V5XSB8fCBkZWZhdWx0VmFsdWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFza1VzZXJJZCh1c2VySWQpIHtcbiAgICAgICAgcmV0dXJuIFwiKipcIiArIHVzZXJJZC50b1N0cmluZygpLnNsaWNlKDIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFByaXplVHJhbnNsYXRpb25LZXkocGxhY2UsIHdlZWspIHtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDMpIHJldHVybiBgcHJpemVfJHt3ZWVrfS0ke3BsYWNlfWA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAxMCkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTQtMTBgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMjUpIHJldHVybiBgcHJpemVfJHt3ZWVrfS0xMS0yNWA7XG4gICAgICAgIGlmIChwbGFjZSA8PSA1MCkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTI2LTUwYDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDc1KSByZXR1cm4gYHByaXplXyR7d2Vla30tNTEtNzVgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMTAwKSByZXR1cm4gYHByaXplXyR7d2Vla30tNzYtMTAwYDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDEyNSkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTEwMS0xMjVgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMTUwKSByZXR1cm4gYHByaXplXyR7d2Vla30tMTI2LTE1MGA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAxNzUpIHJldHVybiBgcHJpemVfJHt3ZWVrfS0xNTEtMTc1YDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDIwMCkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTE3Ni0yMDBgO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhcnRpY2lwYXRlKCkge1xuICAgICAgICBpZiAoIXVzZXJJZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHsgdXNlcmlkOiB1c2VySWQgfTtcbiAgICAgICAgZmV0Y2goYXBpVVJMICsgJy91c2VyLycsIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcmFtcylcbiAgICAgICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3NlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwibG9hZGVyXCIpXG4gICAgICAgICAgICAgICAgdG9nZ2xlVHJhbnNsYXRlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwibG9hZGVyXCIpXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlVHJhbnNsYXRlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwibG9hZGVyX3JlYWR5XCIpXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUNsYXNzZXMocGFydGljaXBhdGVCdG5zLCBcImRvbmVcIilcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3NlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwibG9hZGVyXCIpXG4gICAgICAgICAgICAgICAgfSwgNTAwKVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tVc2VyQXV0aCgpXG4gICAgICAgICAgICAgICAgfSwgMTAwMClcblxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0FQSSByZXF1ZXN0IGZhaWxlZDonLCBlcnIpO1xuXG4gICAgICAgICAgICAgICAgcmVwb3J0RXJyb3IoZXJyKTtcblxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXYtcGFnZScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLnN0YXJ0c1dpdGgoXCJodHRwczovL3d3dy5mYXZiZXQuaHIvXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcm9tb2NpamUvcHJvbW9jaWphL3N0dWIvJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJvbW9zL3Byb21vL3N0dWIvJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvcGVuUG9wdXBCeUF0dHIocG9wdXBBdHRyKSB7XG5cbiAgICAgICAgY29uc3QgYWxsUG9wdXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvcHVwJyk7XG4gICAgICAgIGFsbFBvcHVwcy5mb3JFYWNoKHAgPT4gcC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XG4gICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5hZGQoJ292ZXJsYXknKTtcblxuICAgICAgICBjb25zdCB0YXJnZXRQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wb3B1cFtkYXRhLXBvcHVwPVwiJHtwb3B1cEF0dHJ9XCJdYCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRhcmdldFBvcHVwKVxuICAgICAgICBjb25zb2xlLmxvZyhwb3B1cEF0dHIpXG4gICAgICAgIGlmICh0YXJnZXRQb3B1cCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgdGFyZ2V0UG9wdXAuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICAvLyBtYWluUGFnZS5jbGFzc0xpc3QuYWRkKCdvdmVybGF5Jyk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBzJykuY2xhc3NMaXN0LnJlbW92ZSgnX29wYWNpdHknKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBjbG9zZUFsbFBvcHVwcygpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvcHVwJykuZm9yRWFjaChwID0+IHAuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBzJykuY2xhc3NMaXN0LmFkZCgnX29wYWNpdHknKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdhdXRvJztcbiAgICAgICAgbWFpblBhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcmxheScpO1xuICAgIH1cblxuICAgIGxvYWRUcmFuc2xhdGlvbnMoKVxuICAgICAgICAudGhlbihpbml0KSAvLyDQt9Cw0L/Rg9GB0Log0ZbQvdGW0YLRgyDRgdGC0L7RgNGW0L3QutC4XG5cblxuICAgIC8vIHNldFRpbWVvdXQoaGlkZUxvYWRlciwgNjAwKTtcblxuICAgIGZ1bmN0aW9uIGluaXRDb3VudGRvd24oc2VsZWN0b3IsIHN0YXJ0VGltZSwgZW5kVGltZSwgZWxlbSkge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBlbGVtLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpXG4gICAgICAgIGNvbnNvbGUubG9nKGNvbnRhaW5lcilcbiAgICAgICAgaWYgKCFjb250YWluZXIpIHJldHVyblxuXG4gICAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lclwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkYXlzXCI+MDA8L3NwYW4+0JQgOlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJob3Vyc1wiPjAwPC9zcGFuPtCTIDpcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWludXRlc1wiPjAwPC9zcGFuPtClXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3NcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzc19fYmFyXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcblxuICAgICAgICBjb25zdCBkYXlzRWwgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmRheXMnKVxuICAgICAgICBjb25zdCBob3Vyc0VsID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5ob3VycycpXG4gICAgICAgIGNvbnN0IG1pbnV0ZXNFbCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubWludXRlcycpXG4gICAgICAgIGNvbnN0IHByb2dyZXNzQmFyID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5wcm9ncmVzc19fYmFyJylcblxuICAgICAgICBjb25zdCBzdGFydCA9IG5ldyBEYXRlKHN0YXJ0VGltZSkuZ2V0VGltZSgpXG4gICAgICAgIGNvbnN0IGVuZCA9IG5ldyBEYXRlKGVuZFRpbWUpLmdldFRpbWUoKVxuICAgICAgICBjb25zdCB0b3RhbCA9IGVuZCAtIHN0YXJ0XG5cbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgICAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKVxuICAgICAgICAgICAgY29uc3QgZGlmZiA9IGVuZCAtIG5vd1xuXG4gICAgICAgICAgICAvLyDQr9C60YnQviDRgtCw0LnQvNC10YAg0LfQsNC60ZbQvdGH0LjQstGB0Y9cbiAgICAgICAgICAgIGlmIChkaWZmIDw9IDApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVuZFwiKVxuICAgICAgICAgICAgICAgIGRheXNFbC50ZXh0Q29udGVudCA9ICcwMCdcbiAgICAgICAgICAgICAgICBob3Vyc0VsLnRleHRDb250ZW50ID0gJzAwJ1xuICAgICAgICAgICAgICAgIG1pbnV0ZXNFbC50ZXh0Q29udGVudCA9ICcwMCdcbiAgICAgICAgICAgICAgICBwcm9ncmVzc0Jhci5zdHlsZS53aWR0aCA9ICcxMDAlJ1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpXG4gICAgICAgICAgICAgICAgc2hvd05leHRNYXRjaCgpXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vINCi0LDQudC80LXRgDog0YHQutGW0LvRjNC60Lgg0LfQsNC70LjRiNC40LvQvtGB0Ywg0LTQviDQutGW0L3RhtGPXG4gICAgICAgICAgICBjb25zdCBkYXlzID0gTWF0aC5mbG9vcihkaWZmIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKVxuICAgICAgICAgICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKChkaWZmIC8gKDEwMDAgKiA2MCAqIDYwKSkgJSAyNClcbiAgICAgICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKChkaWZmIC8gKDEwMDAgKiA2MCkpICUgNjApXG5cbiAgICAgICAgICAgIGRheXNFbC50ZXh0Q29udGVudCA9IFN0cmluZyhkYXlzKS5wYWRTdGFydCgyLCAnMCcpXG4gICAgICAgICAgICBob3Vyc0VsLnRleHRDb250ZW50ID0gU3RyaW5nKGhvdXJzKS5wYWRTdGFydCgyLCAnMCcpXG4gICAgICAgICAgICBtaW51dGVzRWwudGV4dENvbnRlbnQgPSBTdHJpbmcobWludXRlcykucGFkU3RhcnQoMiwgJzAnKVxuXG4gICAgICAgICAgICAvLyDQn9GA0L7Qs9GA0LXRgTog0YHQutGW0LvRjNC60Lgg0LLQttC1INC80LjQvdGD0LvQviDQstGW0LQgc3RhcnRUaW1lINC00L4gZW5kVGltZVxuICAgICAgICAgICAgY29uc3QgZWxhcHNlZCA9IG5vdyAtIHN0YXJ0XG4gICAgICAgICAgICBjb25zdCBwZXJjZW50ID0gTWF0aC5taW4oTWF0aC5tYXgoKGVsYXBzZWQgLyB0b3RhbCkgKiAxMDAsIDApLCAxMDApXG4gICAgICAgICAgICBwcm9ncmVzc0Jhci5zdHlsZS53aWR0aCA9IHBlcmNlbnQgKyAnJSdcbiAgICAgICAgfVxuXG4gICAgICAgIHVwZGF0ZSgpXG4gICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwodXBkYXRlLCAxMDAwKVxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gc2V0UHJvZ3Jlc3MoZWwsIHBvaW50cykge1xuICAgICAgICBjb25zdCBjaGVja3BvaW50cyA9IFtcbiAgICAgICAgICAgIHsgcDogMCwgdjogMCB9LFxuICAgICAgICAgICAgeyBwOiA1LCB2OiA4LjQgfSxcbiAgICAgICAgICAgIHsgcDogMTAsIHY6IDIxLjIgfSxcbiAgICAgICAgICAgIHsgcDogMjUsIHY6IDM0LjEgfSxcbiAgICAgICAgICAgIHsgcDogNDAsIHY6IDQ2LjggfSxcbiAgICAgICAgICAgIHsgcDogNDUsIHY6IDU5LjQgfSxcbiAgICAgICAgICAgIHsgcDogNTAsIHY6IDcyLjIgfSxcbiAgICAgICAgICAgIHsgcDogODUsIHY6IDg1IH0sXG4gICAgICAgICAgICB7IHA6IDEwMCwgdjogOTYgfSxcbiAgICAgICAgXTtcblxuICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPD0gNjAwKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdWYWx1ZXMgPSBbOCwgMjAuOSwgMzMuOSwgNDYuOSwgNTkuOCwgNzIuOCwgODUuNiwgOTguM107XG4gICAgICAgICAgICBjaGVja3BvaW50cy5mb3JFYWNoKChwb2ludCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPiAwKSBwb2ludC52ID0gbmV3VmFsdWVzW2luZGV4IC0gMV07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGdldFByb2dyZXNzID0gKHBvaW50cykgPT4ge1xuICAgICAgICAgICAgaWYgKHBvaW50cyA8PSBjaGVja3BvaW50c1swXS5wKSByZXR1cm4gY2hlY2twb2ludHNbMF0udjtcbiAgICAgICAgICAgIGlmIChwb2ludHMgPj0gY2hlY2twb2ludHMuYXQoLTEpLnApIHJldHVybiBjaGVja3BvaW50cy5hdCgtMSkudjtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGVja3BvaW50cy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHA6IHAxLCB2OiB2MSB9ID0gY2hlY2twb2ludHNbaV07XG4gICAgICAgICAgICAgICAgY29uc3QgeyBwOiBwMiwgdjogdjIgfSA9IGNoZWNrcG9pbnRzW2kgKyAxXTtcbiAgICAgICAgICAgICAgICBpZiAocG9pbnRzID49IHAxICYmIHBvaW50cyA8PSBwMikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByYXRpbyA9IChwb2ludHMgLSBwMSkgLyAocDIgLSBwMSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2MSArIHJhdGlvICogKHYyIC0gdjEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAwOyAvLyDQt9Cw0L/QsNGB0L3QuNC5INCy0LDRgNGW0LDQvdGCLCDRidC+0LEg0YPQvdC40LrQvdGD0YLQuCB1bmRlZmluZWRcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByb2dyZXNzVmFsdWUgPSBnZXRQcm9ncmVzcyhwb2ludHMpO1xuICAgICAgICBjb25zdCBwZXJjZW50ID0gTnVtYmVyLmlzRmluaXRlKHByb2dyZXNzVmFsdWUpID8gcHJvZ3Jlc3NWYWx1ZS50b0ZpeGVkKDIpIDogXCIwXCI7XG4gICAgICAgIGNvbnN0IHRvcENvdW50ZXJPZlBvaW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZ3Jlc3MtdG9wXCIpXG5cblxuICAgICAgICBjb25zdCBmYWRlVmFsdWUgPSB3aW5kb3cuaW5uZXJXaWR0aCA8PSA2MDAgPyA5OCA6IDkxXG5cbiAgICAgICAgaWYocG9pbnRzID49IGZhZGVWYWx1ZSl7XG4gICAgICAgICAgICB0b3BDb3VudGVyT2ZQb2ludHMuY2xhc3NMaXN0LmFkZCgnaGlkZScpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmaWxsID0gZWwucXVlcnlTZWxlY3RvcignLnByb2dyZXNzLWZpbGwnKTtcbiAgICAgICAgY29uc3QgbGFiZWwgPSBlbC5xdWVyeVNlbGVjdG9yKCcucHJvZ3Jlc3MtbGFiZWwnKTtcblxuICAgICAgICBmaWxsLnN0eWxlLmhlaWdodCA9IHBlcmNlbnQgKyBcIiVcIjtcbiAgICAgICAgdG9wQ291bnRlck9mUG9pbnRzLnRleHRDb250ZW50ID0gYCR7cG9pbnRzfS8xMDBgXG4gICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gYCR7cG9pbnRzfS8xMDBgO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldENhcmRTdGF0ZShjYXJkcywgdXNlclByaXplcyA9IFtdLCB1c2VyUG9pbnRzKXtcbiAgICAgICAgY2FyZHMuZm9yRWFjaChjYXJkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBvaW50c0NhcmRWYWx1ZSA9IE51bWJlcihjYXJkLmdldEF0dHJpYnV0ZSgnZGF0YS1hbW91bnQtcG9pbnRzJykpO1xuICAgICAgICAgICAgbGV0IGlzVGFrZW5Qcml6ZSA9IHVzZXJQcml6ZXMuaW5jbHVkZXMoaWQgPT4gaWQgPT09IHBvaW50c0NhcmRWYWx1ZSlcblxuICAgICAgICAgICAgaWYodXNlclBvaW50cyA+PSBwb2ludHNDYXJkVmFsdWUpe1xuICAgICAgICAgICAgICAgIGlmKGlzVGFrZW5Qcml6ZSl7XG4gICAgICAgICAgICAgICAgICAgIHNldFdvbkl0ZW0oY2FyZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2V0QWN0aXZlSXRlbShjYXJkKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgc2V0TG9ja0l0ZW0oY2FyZClcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KVxuICAgIH1cblxuXG4vLyBURVNUXG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1idG5cIik/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtdGVzdFwiKT8uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWJ0bi1wb3B1cFwiKT8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS10ZXN0LXBvcHVwXCIpPy5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBvcHVwLXRlc3RcIikuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGF0dHIgPSBlbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBvcHVwXCIpO1xuICAgICAgICAgICAgb3BlblBvcHVwQnlBdHRyKGF0dHIpO1xuICAgICAgICB9KVxuICAgIH0pXG5cbiAgICBjb25zdCBsbmdCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxuZy1idG5cIilcblxuICAgIGxuZ0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBpZiAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsZVwiKSkge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcImxvY2FsZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJsb2NhbGVcIiwgXCJlblwiKTtcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBhdXRoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hdXRoLWJ0blwiKVxuICAgIGNvbnN0IGJldEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLWJldC1vbmxpbmVcIilcblxuICAgIGF1dGhCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBpZih1c2VySWQpe1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcInVzZXJJZFwiKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJ1c2VySWRcIiwgXCI3Nzc3NzdcIilcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgICB9KTtcblxuXG4gICAgY29uc3QgYnRuQWN0aXZlQWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZS1hbGwnKTtcbiAgICBjb25zdCBidG5Mb2NrQWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvY2stYWxsJyk7XG4gICAgY29uc3QgYnRuV29uQWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndvbi1hbGwnKTtcblxuICAgIGJ0bkFjdGl2ZUFsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcHJpemVJdGVtcy5mb3JFYWNoKGl0ZW0gPT4gc2V0QWN0aXZlSXRlbShpdGVtKSk7XG4gICAgfSk7XG5cbiAgICBidG5Mb2NrQWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBwcml6ZUl0ZW1zLmZvckVhY2goaXRlbSA9PiBzZXRMb2NrSXRlbShpdGVtKSk7XG4gICAgfSk7XG5cbiAgICBidG5Xb25BbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHByaXplSXRlbXMuZm9yRWFjaChpdGVtID0+IHNldFdvbkl0ZW0oaXRlbSkpO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdGVzdC1pZF0nKS5mb3JFYWNoKGJ0biA9PiB7XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gTnVtYmVyKGJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVzdC1pZCcpKTtcbiAgICAgICAgICAgIHNob3dOZXh0TWF0Y2goaWQpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWF0Y2gtdGVzdFwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LXRlc3QtbWF0Y2hcIikuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XG4gICAgfSlcblxuXG59KSgpO1xuIl19
