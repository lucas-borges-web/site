/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/main.js":
/*!***************************!*\
  !*** ./assets/js/main.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll-suave.js */ "./assets/js/modules/scroll-suave.js");
/* harmony import */ var _modules_scroll_animacao_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scroll-animacao.js */ "./assets/js/modules/scroll-animacao.js");
/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/accordion.js */ "./assets/js/modules/accordion.js");
/* harmony import */ var _modules_tabnav_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabnav.js */ "./assets/js/modules/tabnav.js");
/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal.js */ "./assets/js/modules/modal.js");
/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tooltip.js */ "./assets/js/modules/tooltip.js");
/* harmony import */ var _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/dropdown-menu.js */ "./assets/js/modules/dropdown-menu.js");
/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/menu-mobile.js */ "./assets/js/modules/menu-mobile.js");
/* harmony import */ var _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/funcionamento.js */ "./assets/js/modules/funcionamento.js");
/* harmony import */ var _modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/fetch-animais.js */ "./assets/js/modules/fetch-animais.js");
/* harmony import */ var _modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/fetch-bitcoin.js */ "./assets/js/modules/fetch-bitcoin.js");











Object(_modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
Object(_modules_scroll_animacao_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
Object(_modules_accordion_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
Object(_modules_tabnav_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
Object(_modules_modal_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
Object(_modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
Object(_modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__["default"])();
Object(_modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__["default"])();
Object(_modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__["default"])();
Object(_modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_9__["default"])();
Object(_modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__["default"])();

/***/ }),

/***/ "./assets/js/modules/accordion.js":
/*!****************************************!*\
  !*** ./assets/js/modules/accordion.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initAccordion; });
function initAccordion() {
  var accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
  var activeClass = 'ativo';

  function activeAccordion() {
    this.classList.toggle(activeClass);
    this.nextElementSibling.classList.toggle(activeClass);
  }

  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);
    accordionList.forEach(function (item) {
      item.addEventListener('click', activeAccordion);
    });
  }
}

/***/ }),

/***/ "./assets/js/modules/anima-numeros.js":
/*!********************************************!*\
  !*** ./assets/js/modules/anima-numeros.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initAnimaNumeros; });
function initAnimaNumeros() {
  function animaNumeros() {
    var numeros = document.querySelectorAll('[data-numero]');
    numeros.forEach(function (numero) {
      var total = +numero.innerText;
      var inscremento = Math.floor(total / 100);
      var start = 0;
      var timer = setInterval(function () {
        start += inscremento;
        numero.innerText = start;

        if (start > total) {
          numero.innerText = total;
          clearInterval(timer);
        }
      }, 25 * Math.random());
    });
  }

  var observer;

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('ativo')) {
      observer.disconnect();
      animaNumeros();
    }
  }

  observer = new MutationObserver(handleMutation);
  var observerTarget = document.querySelector('.numeros');
  observer.observe(observerTarget, {
    attributes: true
  });
}

/***/ }),

/***/ "./assets/js/modules/dropdown-menu.js":
/*!********************************************!*\
  !*** ./assets/js/modules/dropdown-menu.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initDropdownMenu; });
/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ "./assets/js/modules/outsideclick.js");

function initDropdownMenu() {
  var dropdownMenus = document.querySelectorAll('[data-dropdown]');

  function handleClick(event) {
    var _this = this;

    event.preventDefault();
    this.classList.add('active');
    Object(_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ['touchstart', 'click'], function () {
      _this.classList.remove('active');
    });
  }

  dropdownMenus.forEach(function (menu) {
    ['touchstart', 'click'].forEach(function (userEvent) {
      menu.addEventListener(userEvent, handleClick);
    });
  });
}

/***/ }),

/***/ "./assets/js/modules/fetch-animais.js":
/*!********************************************!*\
  !*** ./assets/js/modules/fetch-animais.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initFetchAnimais; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _anima_numeros_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./anima-numeros.js */ "./assets/js/modules/anima-numeros.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


function initFetchAnimais() {
  function createAnimal(animal) {
    var div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = "<h3>".concat(animal.specie, "</h3><span data-numero>").concat(animal.total, "</span>");
    return div;
  }

  function fetchAnimais(_x) {
    return _fetchAnimais.apply(this, arguments);
  }

  function _fetchAnimais() {
    _fetchAnimais = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(url) {
      var animaisResponse, animaisJSON, numerosGrid;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return fetch(url);

            case 3:
              animaisResponse = _context.sent;
              _context.next = 6;
              return animaisResponse.json();

            case 6:
              animaisJSON = _context.sent;
              numerosGrid = document.querySelector('.numeros-grid');
              animaisJSON.forEach(function (animal) {
                var divAnimal = createAnimal(animal);
                numerosGrid.appendChild(divAnimal);
              });
              Object(_anima_numeros_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 12]]);
    }));
    return _fetchAnimais.apply(this, arguments);
  }

  fetchAnimais('./animaisapi.json');
}

/***/ }),

/***/ "./assets/js/modules/fetch-bitcoin.js":
/*!********************************************!*\
  !*** ./assets/js/modules/fetch-bitcoin.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initFetchBitcoin; });
function initFetchBitcoin() {
  fetch('https://blockchain.info/ticker').then(function (response) {
    return response.json();
  }).then(function (bitcoin) {
    var btcPreco = document.querySelector('.btc-preco');
    btcPreco.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);
  })["catch"](function (erro) {
    return console.log(Error(erro));
  });
}

/***/ }),

/***/ "./assets/js/modules/funcionamento.js":
/*!********************************************!*\
  !*** ./assets/js/modules/funcionamento.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initFuncionamento; });
function initFuncionamento() {
  var funcionamento = document.querySelector('[data-semana]');
  var diasSemana = funcionamento.dataset.semana.split(',').map(Number);
  var horarioSemana = funcionamento.dataset.horario.split(',').map(Number);
  var dataAgora = new Date();
  var diaAgora = dataAgora.getDay();
  var horarioAgora = dataAgora.getHours();
  var semanaAberto = diasSemana.indexOf(diaAgora) !== -1;
  var horarioAberto = horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];

  if (semanaAberto && horarioAberto) {
    funcionamento.classList.add('aberto');
  }
}

/***/ }),

/***/ "./assets/js/modules/menu-mobile.js":
/*!******************************************!*\
  !*** ./assets/js/modules/menu-mobile.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initMenuMobile; });
/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ "./assets/js/modules/outsideclick.js");

function initMenuMobile() {
  var menuButton = document.querySelector('[data-menu="button"]');
  var menuList = document.querySelector('[data-menu="list"]');
  var eventos = ['click', 'touchstart'];

  function openMenu() {
    menuList.classList.add('active');
    menuButton.classList.add('active');
    Object(_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__["default"])(menuList, eventos, function () {
      menuList.classList.remove('active');
      menuButton.classList.remove('active');
    });
  }

  if (menuButton) {
    eventos.forEach(function (evento) {
      return menuButton.addEventListener(evento, openMenu);
    });
  }
}

/***/ }),

/***/ "./assets/js/modules/modal.js":
/*!************************************!*\
  !*** ./assets/js/modules/modal.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initModal; });
function initModal() {
  var botaoAbrir = document.querySelector('[data-modal="abrir"]');
  var botaoFechar = document.querySelector('[data-modal="fechar"]');
  var containerModal = document.querySelector('[data-modal="container"]');

  function toggleModal(event) {
    event.preventDefault();
    containerModal.classList.toggle('ativo');
  }

  function cliqueForaModal(event) {
    if (event.target === this) {
      toggleModal(event);
    }
  }

  if (botaoAbrir && botaoFechar && containerModal) {
    botaoAbrir.addEventListener('click', toggleModal);
    botaoFechar.addEventListener('click', toggleModal);
    containerModal.addEventListener('click', cliqueForaModal);
  }
}

/***/ }),

/***/ "./assets/js/modules/outsideclick.js":
/*!*******************************************!*\
  !*** ./assets/js/modules/outsideclick.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return outsideClick; });
function outsideClick(element, events, callback) {
  var html = document.documentElement;
  var outside = 'data-outside';

  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      events.forEach(function (userEvent) {
        html.removeEventListener(userEvent, handleOutsideClick);
      });
      callback();
    }
  }

  if (!element.hasAttribute(outside)) {
    events.forEach(function (userEvent) {
      setTimeout(function () {
        return html.addEventListener(userEvent, handleOutsideClick);
      });
    });
    element.setAttribute(outside, '');
  }
}

/***/ }),

/***/ "./assets/js/modules/scroll-animacao.js":
/*!**********************************************!*\
  !*** ./assets/js/modules/scroll-animacao.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initAnimacaoScroll; });
function initAnimacaoScroll() {
  var sections = document.querySelectorAll('[data-anime="scroll"]');
  var windowMetade = window.innerHeight * 0.6;

  function animaScroll() {
    sections.forEach(function (section) {
      var sectionTop = section.getBoundingClientRect().top;
      var isSectionVisible = sectionTop - windowMetade < 0;

      if (isSectionVisible) {
        section.classList.add('ativo');
      } else if (section.classList.contains('ativo')) {
        section.classList.remove('ativo');
      }
    });
  }

  if (sections.length) {
    animaScroll();
    window.addEventListener('scroll', animaScroll);
  }
}

/***/ }),

/***/ "./assets/js/modules/scroll-suave.js":
/*!*******************************************!*\
  !*** ./assets/js/modules/scroll-suave.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initScrollSuave; });
function initScrollSuave() {
  var linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    var href = event.currentTarget.getAttribute('href');
    var section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  linksInternos.forEach(function (link) {
    link.addEventListener('click', scrollToSection);
  });
}

/***/ }),

/***/ "./assets/js/modules/tabnav.js":
/*!*************************************!*\
  !*** ./assets/js/modules/tabnav.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initTabNav; });
function initTabNav() {
  var tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  var tabContent = document.querySelectorAll('[data-tab="content"] section');

  function activeTab(index) {
    tabContent.forEach(function (section) {
      section.classList.remove('ativo');
    });
    var direcao = tabContent[index].dataset.anime;
    tabContent[index].classList.add('ativo', direcao);
  }

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo');
    tabMenu.forEach(function (itemMenu, index) {
      itemMenu.addEventListener('click', function () {
        activeTab(index);
      });
    });
  }
}

/***/ }),

/***/ "./assets/js/modules/tooltip.js":
/*!**************************************!*\
  !*** ./assets/js/modules/tooltip.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initTooltip; });
function initTooltip() {
  var tooltips = document.querySelectorAll('[data-tooltip]');
  var onMouseMove = {
    handleEvent: function handleEvent(event) {
      this.tooltipBox.style.top = "".concat(event.pageY + 20, "px");
      this.tooltipBox.style.left = "".concat(event.pageX + 20, "px");
    }
  };
  var onMouseLeave = {
    handleEvent: function handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListener('mouseleave', onMouseLeave);
      this.element.removeEventListener('mousemove', onMouseMove);
    }
  };

  function criarTooltipBox(element) {
    var tooltipBox = document.createElement('div');
    var text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }

  function onMouseOver() {
    var tooltipBox = criarTooltipBox(this);
    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener('mousemove', onMouseMove);
    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this;
    this.addEventListener('mouseleave', onMouseLeave);
  }

  tooltips.forEach(function (item) {
    item.addEventListener('mouseover', onMouseOver);
  });
}

/***/ }),

/***/ "./assets/sass/style.scss":
/*!********************************!*\
  !*** ./assets/sass/style.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ 0:
/*!**********************************************************!*\
  !*** multi ./assets/js/main.js ./assets/sass/style.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Applications/MAMP/htdocs/site/assets/js/main.js */"./assets/js/main.js");
module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/site/assets/sass/style.scss */"./assets/sass/style.scss");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL21vZHVsZXMvYWNjb3JkaW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tb2R1bGVzL2FuaW1hLW51bWVyb3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL21vZHVsZXMvZHJvcGRvd24tbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbW9kdWxlcy9mZXRjaC1hbmltYWlzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tb2R1bGVzL2ZldGNoLWJpdGNvaW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL21vZHVsZXMvZnVuY2lvbmFtZW50by5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbW9kdWxlcy9tZW51LW1vYmlsZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbW9kdWxlcy9tb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbW9kdWxlcy9vdXRzaWRlY2xpY2suanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL21vZHVsZXMvc2Nyb2xsLWFuaW1hY2FvLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tb2R1bGVzL3Njcm9sbC1zdWF2ZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbW9kdWxlcy90YWJuYXYuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL21vZHVsZXMvdG9vbHRpcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2Fzcy9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyJdLCJuYW1lcyI6WyJpbml0QWNjb3JkaW9uIiwiYWNjb3JkaW9uTGlzdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImFjdGl2ZUNsYXNzIiwiYWN0aXZlQWNjb3JkaW9uIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwibGVuZ3RoIiwiYWRkIiwiZm9yRWFjaCIsIml0ZW0iLCJhZGRFdmVudExpc3RlbmVyIiwiaW5pdEFuaW1hTnVtZXJvcyIsImFuaW1hTnVtZXJvcyIsIm51bWVyb3MiLCJudW1lcm8iLCJ0b3RhbCIsImlubmVyVGV4dCIsImluc2NyZW1lbnRvIiwiTWF0aCIsImZsb29yIiwic3RhcnQiLCJ0aW1lciIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInJhbmRvbSIsIm9ic2VydmVyIiwiaGFuZGxlTXV0YXRpb24iLCJtdXRhdGlvbiIsInRhcmdldCIsImNvbnRhaW5zIiwiZGlzY29ubmVjdCIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJvYnNlcnZlclRhcmdldCIsInF1ZXJ5U2VsZWN0b3IiLCJvYnNlcnZlIiwiYXR0cmlidXRlcyIsImluaXREcm9wZG93bk1lbnUiLCJkcm9wZG93bk1lbnVzIiwiaGFuZGxlQ2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwib3V0c2lkZUNsaWNrIiwicmVtb3ZlIiwibWVudSIsInVzZXJFdmVudCIsImluaXRGZXRjaEFuaW1haXMiLCJjcmVhdGVBbmltYWwiLCJhbmltYWwiLCJkaXYiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwic3BlY2llIiwiZmV0Y2hBbmltYWlzIiwidXJsIiwiZmV0Y2giLCJhbmltYWlzUmVzcG9uc2UiLCJqc29uIiwiYW5pbWFpc0pTT04iLCJudW1lcm9zR3JpZCIsImRpdkFuaW1hbCIsImFwcGVuZENoaWxkIiwiY29uc29sZSIsImxvZyIsImluaXRGZXRjaEJpdGNvaW4iLCJ0aGVuIiwicmVzcG9uc2UiLCJiaXRjb2luIiwiYnRjUHJlY28iLCJCUkwiLCJzZWxsIiwidG9GaXhlZCIsImVycm8iLCJFcnJvciIsImluaXRGdW5jaW9uYW1lbnRvIiwiZnVuY2lvbmFtZW50byIsImRpYXNTZW1hbmEiLCJkYXRhc2V0Iiwic2VtYW5hIiwic3BsaXQiLCJtYXAiLCJOdW1iZXIiLCJob3JhcmlvU2VtYW5hIiwiaG9yYXJpbyIsImRhdGFBZ29yYSIsIkRhdGUiLCJkaWFBZ29yYSIsImdldERheSIsImhvcmFyaW9BZ29yYSIsImdldEhvdXJzIiwic2VtYW5hQWJlcnRvIiwiaW5kZXhPZiIsImhvcmFyaW9BYmVydG8iLCJpbml0TWVudU1vYmlsZSIsIm1lbnVCdXR0b24iLCJtZW51TGlzdCIsImV2ZW50b3MiLCJvcGVuTWVudSIsImV2ZW50byIsImluaXRNb2RhbCIsImJvdGFvQWJyaXIiLCJib3Rhb0ZlY2hhciIsImNvbnRhaW5lck1vZGFsIiwidG9nZ2xlTW9kYWwiLCJjbGlxdWVGb3JhTW9kYWwiLCJlbGVtZW50IiwiZXZlbnRzIiwiY2FsbGJhY2siLCJodG1sIiwiZG9jdW1lbnRFbGVtZW50Iiwib3V0c2lkZSIsImhhbmRsZU91dHNpZGVDbGljayIsInJlbW92ZUF0dHJpYnV0ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJoYXNBdHRyaWJ1dGUiLCJzZXRUaW1lb3V0Iiwic2V0QXR0cmlidXRlIiwiaW5pdEFuaW1hY2FvU2Nyb2xsIiwic2VjdGlvbnMiLCJ3aW5kb3dNZXRhZGUiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImFuaW1hU2Nyb2xsIiwic2VjdGlvbiIsInNlY3Rpb25Ub3AiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJpc1NlY3Rpb25WaXNpYmxlIiwiaW5pdFNjcm9sbFN1YXZlIiwibGlua3NJbnRlcm5vcyIsInNjcm9sbFRvU2VjdGlvbiIsImhyZWYiLCJjdXJyZW50VGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImJsb2NrIiwibGluayIsImluaXRUYWJOYXYiLCJ0YWJNZW51IiwidGFiQ29udGVudCIsImFjdGl2ZVRhYiIsImluZGV4IiwiZGlyZWNhbyIsImFuaW1lIiwiaXRlbU1lbnUiLCJpbml0VG9vbHRpcCIsInRvb2x0aXBzIiwib25Nb3VzZU1vdmUiLCJoYW5kbGVFdmVudCIsInRvb2x0aXBCb3giLCJzdHlsZSIsInBhZ2VZIiwibGVmdCIsInBhZ2VYIiwib25Nb3VzZUxlYXZlIiwiY3JpYXJUb29sdGlwQm94IiwidGV4dCIsImJvZHkiLCJvbk1vdXNlT3ZlciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsd0VBQWU7QUFDZiwyRUFBa0I7QUFDbEIscUVBQWE7QUFDYixrRUFBVTtBQUNWLGlFQUFTO0FBQ1QsbUVBQVc7QUFDWCx5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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLGNBQWM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLGtCQUFrQjtBQUNuRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxLQUEwQixvQkFBb0IsU0FBRTtBQUNsRDs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3J0QkEsaUJBQWlCLG1CQUFPLENBQUMsc0dBQXFCIiwiZmlsZSI6Ii9zY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IGluaXRTY3JvbGxTdWF2ZSBmcm9tICcuL21vZHVsZXMvc2Nyb2xsLXN1YXZlLmpzJztcbmltcG9ydCBpbml0QW5pbWFjYW9TY3JvbGwgZnJvbSAnLi9tb2R1bGVzL3Njcm9sbC1hbmltYWNhby5qcyc7XG5pbXBvcnQgaW5pdEFjY29yZGlvbiBmcm9tICcuL21vZHVsZXMvYWNjb3JkaW9uLmpzJztcbmltcG9ydCBpbml0VGFiTmF2IGZyb20gJy4vbW9kdWxlcy90YWJuYXYuanMnO1xuaW1wb3J0IGluaXRNb2RhbCBmcm9tICcuL21vZHVsZXMvbW9kYWwuanMnO1xuaW1wb3J0IGluaXRUb29sdGlwIGZyb20gJy4vbW9kdWxlcy90b29sdGlwLmpzJztcbmltcG9ydCBpbml0RHJvcGRvd25NZW51IGZyb20gJy4vbW9kdWxlcy9kcm9wZG93bi1tZW51LmpzJztcbmltcG9ydCBpbml0TWVudU1vYmlsZSBmcm9tICcuL21vZHVsZXMvbWVudS1tb2JpbGUuanMnO1xuaW1wb3J0IGluaXRGdW5jaW9uYW1lbnRvIGZyb20gJy4vbW9kdWxlcy9mdW5jaW9uYW1lbnRvLmpzJztcbmltcG9ydCBpbml0RmV0Y2hBbmltYWlzIGZyb20gJy4vbW9kdWxlcy9mZXRjaC1hbmltYWlzLmpzJztcbmltcG9ydCBpbml0RmV0Y2hCaXRjb2luIGZyb20gJy4vbW9kdWxlcy9mZXRjaC1iaXRjb2luLmpzJztcblxuaW5pdFNjcm9sbFN1YXZlKCk7XG5pbml0QW5pbWFjYW9TY3JvbGwoKTtcbmluaXRBY2NvcmRpb24oKTtcbmluaXRUYWJOYXYoKTtcbmluaXRNb2RhbCgpO1xuaW5pdFRvb2x0aXAoKTtcbmluaXREcm9wZG93bk1lbnUoKTtcbmluaXRNZW51TW9iaWxlKCk7XG5pbml0RnVuY2lvbmFtZW50bygpO1xuaW5pdEZldGNoQW5pbWFpcygpO1xuaW5pdEZldGNoQml0Y29pbigpO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdEFjY29yZGlvbigpIHtcbiAgY29uc3QgYWNjb3JkaW9uTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWFuaW1lPVwiYWNjb3JkaW9uXCJdIGR0Jyk7XG4gIGNvbnN0IGFjdGl2ZUNsYXNzID0gJ2F0aXZvJztcblxuICBmdW5jdGlvbiBhY3RpdmVBY2NvcmRpb24oKSB7XG4gICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKGFjdGl2ZUNsYXNzKTtcbiAgICB0aGlzLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QudG9nZ2xlKGFjdGl2ZUNsYXNzKTtcbiAgfVxuXG4gIGlmIChhY2NvcmRpb25MaXN0Lmxlbmd0aCkge1xuICAgIGFjY29yZGlvbkxpc3RbMF0uY2xhc3NMaXN0LmFkZChhY3RpdmVDbGFzcyk7XG4gICAgYWNjb3JkaW9uTGlzdFswXS5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZChhY3RpdmVDbGFzcyk7XG5cbiAgICBhY2NvcmRpb25MaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhY3RpdmVBY2NvcmRpb24pO1xuICAgIH0pO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0QW5pbWFOdW1lcm9zKCkge1xuICBmdW5jdGlvbiBhbmltYU51bWVyb3MoKSB7XG4gICAgY29uc3QgbnVtZXJvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW51bWVyb10nKTtcblxuICAgIG51bWVyb3MuZm9yRWFjaCgobnVtZXJvKSA9PiB7XG4gICAgICBjb25zdCB0b3RhbCA9ICtudW1lcm8uaW5uZXJUZXh0O1xuICAgICAgY29uc3QgaW5zY3JlbWVudG8gPSBNYXRoLmZsb29yKHRvdGFsIC8gMTAwKTtcbiAgICAgIGxldCBzdGFydCA9IDA7XG4gICAgICBjb25zdCB0aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgc3RhcnQgKz0gaW5zY3JlbWVudG87XG4gICAgICAgIG51bWVyby5pbm5lclRleHQgPSBzdGFydDtcbiAgICAgICAgaWYgKHN0YXJ0ID4gdG90YWwpIHtcbiAgICAgICAgICBudW1lcm8uaW5uZXJUZXh0ID0gdG90YWw7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gICAgICAgIH1cbiAgICAgIH0sIDI1ICogTWF0aC5yYW5kb20oKSk7XG4gICAgfSk7XG4gIH1cblxuICBsZXQgb2JzZXJ2ZXI7XG4gIGZ1bmN0aW9uIGhhbmRsZU11dGF0aW9uKG11dGF0aW9uKSB7XG4gICAgaWYgKG11dGF0aW9uWzBdLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2F0aXZvJykpIHtcbiAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgIGFuaW1hTnVtZXJvcygpO1xuICAgIH1cbiAgfVxuICBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGhhbmRsZU11dGF0aW9uKTtcblxuICBjb25zdCBvYnNlcnZlclRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5udW1lcm9zJyk7XG4gIG9ic2VydmVyLm9ic2VydmUob2JzZXJ2ZXJUYXJnZXQsIHsgYXR0cmlidXRlczogdHJ1ZSB9KTtcbn1cbiIsImltcG9ydCBvdXRzaWRlQ2xpY2sgZnJvbSAnLi9vdXRzaWRlY2xpY2suanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0RHJvcGRvd25NZW51KCkge1xuICBjb25zdCBkcm9wZG93bk1lbnVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZHJvcGRvd25dJyk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgb3V0c2lkZUNsaWNrKHRoaXMsIFsndG91Y2hzdGFydCcsICdjbGljayddLCAoKSA9PiB7XG4gICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH0pO1xuICB9XG5cbiAgZHJvcGRvd25NZW51cy5mb3JFYWNoKChtZW51KSA9PiB7XG4gICAgWyd0b3VjaHN0YXJ0JywgJ2NsaWNrJ10uZm9yRWFjaCgodXNlckV2ZW50KSA9PiB7XG4gICAgICBtZW51LmFkZEV2ZW50TGlzdGVuZXIodXNlckV2ZW50LCBoYW5kbGVDbGljayk7XG4gICAgfSk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IGluaXRBbmltYU51bWVyb3MgZnJvbSAnLi9hbmltYS1udW1lcm9zLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdEZldGNoQW5pbWFpcygpIHtcbiAgZnVuY3Rpb24gY3JlYXRlQW5pbWFsKGFuaW1hbCkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdudW1lcm8tYW5pbWFsJyk7XG4gICAgZGl2LmlubmVySFRNTCA9IGA8aDM+JHthbmltYWwuc3BlY2llfTwvaDM+PHNwYW4gZGF0YS1udW1lcm8+JHthbmltYWwudG90YWx9PC9zcGFuPmA7XG4gICAgcmV0dXJuIGRpdjtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGZldGNoQW5pbWFpcyh1cmwpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgYW5pbWFpc1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICAgIGNvbnN0IGFuaW1haXNKU09OID0gYXdhaXQgYW5pbWFpc1Jlc3BvbnNlLmpzb24oKTtcbiAgICAgIGNvbnN0IG51bWVyb3NHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm51bWVyb3MtZ3JpZCcpO1xuICAgICAgYW5pbWFpc0pTT04uZm9yRWFjaCgoYW5pbWFsKSA9PiB7XG4gICAgICAgIGNvbnN0IGRpdkFuaW1hbCA9IGNyZWF0ZUFuaW1hbChhbmltYWwpO1xuICAgICAgICBudW1lcm9zR3JpZC5hcHBlbmRDaGlsZChkaXZBbmltYWwpO1xuICAgICAgfSk7XG4gICAgICBpbml0QW5pbWFOdW1lcm9zKCk7XG4gICAgfSBjYXRjaCAoZXJybykge1xuICAgICAgY29uc29sZS5sb2coZXJybyk7XG4gICAgfVxuICB9XG5cbiAgZmV0Y2hBbmltYWlzKCcuL2FuaW1haXNhcGkuanNvbicpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdEZldGNoQml0Y29pbigpIHtcbiAgZmV0Y2goJ2h0dHBzOi8vYmxvY2tjaGFpbi5pbmZvL3RpY2tlcicpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKChiaXRjb2luKSA9PiB7XG4gICAgICBjb25zdCBidGNQcmVjbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idGMtcHJlY28nKTtcbiAgICAgIGJ0Y1ByZWNvLmlubmVyVGV4dCA9ICgxMDAwIC8gYml0Y29pbi5CUkwuc2VsbCkudG9GaXhlZCg0KTtcbiAgICB9KS5jYXRjaChlcnJvID0+IGNvbnNvbGUubG9nKEVycm9yKGVycm8pKSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0RnVuY2lvbmFtZW50bygpIHtcbiAgY29uc3QgZnVuY2lvbmFtZW50byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXNlbWFuYV0nKTtcbiAgY29uc3QgZGlhc1NlbWFuYSA9IGZ1bmNpb25hbWVudG8uZGF0YXNldC5zZW1hbmEuc3BsaXQoJywnKS5tYXAoTnVtYmVyKTtcbiAgY29uc3QgaG9yYXJpb1NlbWFuYSA9IGZ1bmNpb25hbWVudG8uZGF0YXNldC5ob3JhcmlvLnNwbGl0KCcsJykubWFwKE51bWJlcik7XG5cbiAgY29uc3QgZGF0YUFnb3JhID0gbmV3IERhdGUoKTtcbiAgY29uc3QgZGlhQWdvcmEgPSBkYXRhQWdvcmEuZ2V0RGF5KCk7XG4gIGNvbnN0IGhvcmFyaW9BZ29yYSA9IGRhdGFBZ29yYS5nZXRIb3VycygpO1xuXG4gIGNvbnN0IHNlbWFuYUFiZXJ0byA9IGRpYXNTZW1hbmEuaW5kZXhPZihkaWFBZ29yYSkgIT09IC0xO1xuICBjb25zdCBob3JhcmlvQWJlcnRvID0gKGhvcmFyaW9BZ29yYSA+PSBob3JhcmlvU2VtYW5hWzBdICYmIGhvcmFyaW9BZ29yYSA8IGhvcmFyaW9TZW1hbmFbMV0pO1xuXG4gIGlmIChzZW1hbmFBYmVydG8gJiYgaG9yYXJpb0FiZXJ0bykge1xuICAgIGZ1bmNpb25hbWVudG8uY2xhc3NMaXN0LmFkZCgnYWJlcnRvJyk7XG4gIH1cbn1cbiIsImltcG9ydCBvdXRzaWRlQ2xpY2sgZnJvbSAnLi9vdXRzaWRlY2xpY2suanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0TWVudU1vYmlsZSgpIHtcbiAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW1lbnU9XCJidXR0b25cIl0nKTtcbiAgY29uc3QgbWVudUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1tZW51PVwibGlzdFwiXScpO1xuICBjb25zdCBldmVudG9zID0gWydjbGljaycsICd0b3VjaHN0YXJ0J107XG5cbiAgZnVuY3Rpb24gb3Blbk1lbnUoKSB7XG4gICAgbWVudUxpc3QuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgbWVudUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICBvdXRzaWRlQ2xpY2sobWVudUxpc3QsIGV2ZW50b3MsICgpID0+IHtcbiAgICAgIG1lbnVMaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgbWVudUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChtZW51QnV0dG9uKSB7XG4gICAgZXZlbnRvcy5mb3JFYWNoKGV2ZW50byA9PiBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRvLCBvcGVuTWVudSkpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0TW9kYWwoKSB7XG4gIGNvbnN0IGJvdGFvQWJyaXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1tb2RhbD1cImFicmlyXCJdJyk7XG4gIGNvbnN0IGJvdGFvRmVjaGFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtbW9kYWw9XCJmZWNoYXJcIl0nKTtcbiAgY29uc3QgY29udGFpbmVyTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1tb2RhbD1cImNvbnRhaW5lclwiXScpO1xuXG4gIGZ1bmN0aW9uIHRvZ2dsZU1vZGFsKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb250YWluZXJNb2RhbC5jbGFzc0xpc3QudG9nZ2xlKCdhdGl2bycpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xpcXVlRm9yYU1vZGFsKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gdGhpcykge1xuICAgICAgdG9nZ2xlTW9kYWwoZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChib3Rhb0FicmlyICYmIGJvdGFvRmVjaGFyICYmIGNvbnRhaW5lck1vZGFsKSB7XG4gICAgYm90YW9BYnJpci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZU1vZGFsKTtcbiAgICBib3Rhb0ZlY2hhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZU1vZGFsKTtcbiAgICBjb250YWluZXJNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaXF1ZUZvcmFNb2RhbCk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG91dHNpZGVDbGljayhlbGVtZW50LCBldmVudHMsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIGNvbnN0IG91dHNpZGUgPSAnZGF0YS1vdXRzaWRlJztcbiAgZnVuY3Rpb24gaGFuZGxlT3V0c2lkZUNsaWNrKGV2ZW50KSB7XG4gICAgaWYgKCFlbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG91dHNpZGUpO1xuICAgICAgZXZlbnRzLmZvckVhY2goKHVzZXJFdmVudCkgPT4ge1xuICAgICAgICBodG1sLnJlbW92ZUV2ZW50TGlzdGVuZXIodXNlckV2ZW50LCBoYW5kbGVPdXRzaWRlQ2xpY2spO1xuICAgICAgfSk7XG4gICAgICBjYWxsYmFjaygpO1xuICAgIH1cbiAgfVxuXG4gIGlmICghZWxlbWVudC5oYXNBdHRyaWJ1dGUob3V0c2lkZSkpIHtcbiAgICBldmVudHMuZm9yRWFjaCgodXNlckV2ZW50KSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IGh0bWwuYWRkRXZlbnRMaXN0ZW5lcih1c2VyRXZlbnQsIGhhbmRsZU91dHNpZGVDbGljaykpO1xuICAgIH0pO1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKG91dHNpZGUsICcnKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdEFuaW1hY2FvU2Nyb2xsKCkge1xuICBjb25zdCBzZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWFuaW1lPVwic2Nyb2xsXCJdJyk7XG4gIGNvbnN0IHdpbmRvd01ldGFkZSA9IHdpbmRvdy5pbm5lckhlaWdodCAqIDAuNjtcblxuICBmdW5jdGlvbiBhbmltYVNjcm9sbCgpIHtcbiAgICBzZWN0aW9ucy5mb3JFYWNoKChzZWN0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzZWN0aW9uVG9wID0gc2VjdGlvbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgICBjb25zdCBpc1NlY3Rpb25WaXNpYmxlID0gKHNlY3Rpb25Ub3AgLSB3aW5kb3dNZXRhZGUpIDwgMDtcbiAgICAgIGlmIChpc1NlY3Rpb25WaXNpYmxlKSB7XG4gICAgICAgIHNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnYXRpdm8nKTtcbiAgICAgIH0gZWxzZSBpZiAoc2VjdGlvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2F0aXZvJykpIHtcbiAgICAgICAgc2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdhdGl2bycpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGlmIChzZWN0aW9ucy5sZW5ndGgpIHtcbiAgICBhbmltYVNjcm9sbCgpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBhbmltYVNjcm9sbCk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRTY3JvbGxTdWF2ZSgpIHtcbiAgY29uc3QgbGlua3NJbnRlcm5vcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW1lbnU9XCJzdWF2ZVwiXSBhW2hyZWZePVwiI1wiXScpO1xuXG4gIGZ1bmN0aW9uIHNjcm9sbFRvU2VjdGlvbihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgaHJlZiA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaHJlZik7XG4gICAgc2VjdGlvbi5zY3JvbGxJbnRvVmlldyh7XG4gICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXG4gICAgICBibG9jazogJ3N0YXJ0JyxcbiAgICB9KTtcbiAgfVxuXG4gIGxpbmtzSW50ZXJub3MuZm9yRWFjaCgobGluaykgPT4ge1xuICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzY3JvbGxUb1NlY3Rpb24pO1xuICB9KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRUYWJOYXYoKSB7XG4gIGNvbnN0IHRhYk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10YWI9XCJtZW51XCJdIGxpJyk7XG4gIGNvbnN0IHRhYkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10YWI9XCJjb250ZW50XCJdIHNlY3Rpb24nKTtcblxuICBmdW5jdGlvbiBhY3RpdmVUYWIoaW5kZXgpIHtcbiAgICB0YWJDb250ZW50LmZvckVhY2goKHNlY3Rpb24pID0+IHtcbiAgICAgIHNlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgnYXRpdm8nKTtcbiAgICB9KTtcbiAgICBjb25zdCBkaXJlY2FvID0gdGFiQ29udGVudFtpbmRleF0uZGF0YXNldC5hbmltZTtcbiAgICB0YWJDb250ZW50W2luZGV4XS5jbGFzc0xpc3QuYWRkKCdhdGl2bycsIGRpcmVjYW8pO1xuICB9XG5cbiAgaWYgKHRhYk1lbnUubGVuZ3RoICYmIHRhYkNvbnRlbnQubGVuZ3RoKSB7XG4gICAgdGFiQ29udGVudFswXS5jbGFzc0xpc3QuYWRkKCdhdGl2bycpO1xuICAgIHRhYk1lbnUuZm9yRWFjaCgoaXRlbU1lbnUsIGluZGV4KSA9PiB7XG4gICAgICBpdGVtTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgYWN0aXZlVGFiKGluZGV4KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0VG9vbHRpcCgpIHtcbiAgY29uc3QgdG9vbHRpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10b29sdGlwXScpO1xuXG4gIGNvbnN0IG9uTW91c2VNb3ZlID0ge1xuICAgIGhhbmRsZUV2ZW50KGV2ZW50KSB7XG4gICAgICB0aGlzLnRvb2x0aXBCb3guc3R5bGUudG9wID0gYCR7ZXZlbnQucGFnZVkgKyAyMH1weGA7XG4gICAgICB0aGlzLnRvb2x0aXBCb3guc3R5bGUubGVmdCA9IGAke2V2ZW50LnBhZ2VYICsgMjB9cHhgO1xuICAgIH0sXG4gIH07XG5cbiAgY29uc3Qgb25Nb3VzZUxlYXZlID0ge1xuICAgIGhhbmRsZUV2ZW50KCkge1xuICAgICAgdGhpcy50b29sdGlwQm94LnJlbW92ZSgpO1xuICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBvbk1vdXNlTGVhdmUpO1xuICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcbiAgICB9LFxuICB9O1xuXG4gIGZ1bmN0aW9uIGNyaWFyVG9vbHRpcEJveChlbGVtZW50KSB7XG4gICAgY29uc3QgdG9vbHRpcEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRleHQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpO1xuICAgIHRvb2x0aXBCb3guY2xhc3NMaXN0LmFkZCgndG9vbHRpcCcpO1xuICAgIHRvb2x0aXBCb3guaW5uZXJUZXh0ID0gdGV4dDtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRvb2x0aXBCb3gpO1xuICAgIHJldHVybiB0b29sdGlwQm94O1xuICB9XG5cbiAgZnVuY3Rpb24gb25Nb3VzZU92ZXIoKSB7XG4gICAgY29uc3QgdG9vbHRpcEJveCA9IGNyaWFyVG9vbHRpcEJveCh0aGlzKTtcblxuICAgIG9uTW91c2VNb3ZlLnRvb2x0aXBCb3ggPSB0b29sdGlwQm94O1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xuXG4gICAgb25Nb3VzZUxlYXZlLnRvb2x0aXBCb3ggPSB0b29sdGlwQm94O1xuICAgIG9uTW91c2VMZWF2ZS5lbGVtZW50ID0gdGhpcztcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBvbk1vdXNlTGVhdmUpO1xuICB9XG5cbiAgdG9vbHRpcHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgb25Nb3VzZU92ZXIpO1xuICB9KTtcbn1cbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9XG4gICAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdClcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIEdwW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yXCI7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==