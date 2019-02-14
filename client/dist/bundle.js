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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/index.jsx":
/*!******************************!*\
  !*** ./client/src/index.jsx ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /home/steve/Documents/FEC/steve-component-agent-contact/client/src/index.jsx: Unexpected token (16:1)\\n\\n\\u001b[0m \\u001b[90m 14 | \\u001b[39m}\\u001b[0m\\n\\u001b[0m \\u001b[90m 15 | \\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 16 | \\u001b[39m\\u001b[33m<<\\u001b[39m\\u001b[33m<<\\u001b[39m\\u001b[33m<<\\u001b[39m\\u001b[33m<\\u001b[39m \\u001b[33mHEAD\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 17 | \\u001b[39m\\u001b[33mReactDOM\\u001b[39m\\u001b[33m.\\u001b[39mrender(\\u001b[33m<\\u001b[39m\\u001b[33mApp\\u001b[39m houseId\\u001b[33m=\\u001b[39m\\u001b[32m\\\"101\\\"\\u001b[39m \\u001b[33m/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33m,\\u001b[39m document\\u001b[33m.\\u001b[39mgetElementById(\\u001b[32m'app'\\u001b[39m))\\u001b[0m\\n\\u001b[0m \\u001b[90m 18 | \\u001b[39m\\u001b[33m===\\u001b[39m\\u001b[33m===\\u001b[39m\\u001b[33m=\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 19 | \\u001b[39m\\u001b[33mReactDOM\\u001b[39m\\u001b[33m.\\u001b[39mrender(\\u001b[33m<\\u001b[39m\\u001b[33mApp\\u001b[39m houseId\\u001b[33m=\\u001b[39m\\u001b[32m\\\"100\\\"\\u001b[39m \\u001b[33m/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33m,\\u001b[39m document\\u001b[33m.\\u001b[39mgetElementById(\\u001b[32m'app'\\u001b[39m))\\u001b[0m\\n    at raise (/home/steve/Documents/FEC/steve-component-agent-contact/node_modules/@babel/parser/lib/index.js:3831:17)\\n    at unexpected (/home/steve/Documents/FEC/steve-component-agent-contact/node_modules/@babel/parser/lib/index.js:5143:16)\\n    at jsxParseIdentifier (/home/steve/Documents/FEC/steve-component-agent-contact/node_modules/@babel/parser/lib/index.js:3332:12)\\n    at jsxParseNamespacedName (/home/steve/Documents/FEC/steve-component-agent-contact/node_modules/@babel/parser/lib/index.js:3342:23)\\n    at jsxParseElementName (/home/steve/Documents/FEC/steve-component-agent-contact/node_modules/@babel/parser/lib/index.js:3353:21)\\n    at jsxParseOpeningElementAt (/home/steve/Documents/FEC/steve-component-agent-contact/node_modules/@babel/parser/lib/index.js:3438:22)\\n    at jsxParseElementAt (/home/steve/Documents/FEC/steve-component-agent-contact/node_modules/@babel/parser/lib/index.js:3471:33)\\n    at jsxParseElement (/home/steve/Documents/FEC/steve-component-agent-contact/node_modules/@babel/parser/lib/index.js:3540:17)\\n    at parseExprAtom (/home/steve/Documents/FEC/steve-component-agent-contact/node_modules/@babel/parser/lib/index.js:3547:19)\\n    at parseExprSubscripts (/home/steve/Documents/FEC/steve-component-agent-contact/node_modules/@babel/parser/lib/index.js:5862:23)\\n    at parseMaybeUnary (/home/steve/Documents/FEC/steve-component-agent-contact/node_modules/@babel/parser/lib/index.js:5842:21)\\n    at parseExprOps (/home/steve/Documents/FEC/steve-component-agent-contact/node_modules/@babel/parser/lib/index.js:5729:23)\\n    at parseMaybeConditional (/home/steve/Documents/FEC/steve-component-agent-contact/node_modules/@babel/parser/lib/index.js:5702:23)\\n    at parseMaybeAssign (/home/steve/Documents/FEC/steve-component-agent-contact/node_modules/@babel/parser/lib/index.js:5647:21)\\n    at parseExpression (/home/steve/Documents/FEC/steve-component-agent-contact/node_modules/@babel/parser/lib/index.js:5595:23)\\n    at parseStatementContent (/home/steve/Documents/FEC/steve-component-agent-contact/node_modules/@babel/parser/lib/index.js:7375:23)\\n    at parseStatement (/home/steve/Documents/FEC/steve-component-agent-contact/node_modules/@babel/parser/lib/index.js:7248:17)\\n    at parseBlockOrModuleBlockBody (/home/steve/Documents/FEC/steve-component-agent-contact/node_modules/@babel/parser/lib/index.js:7812:25)\\n    at parseBlockBody (/home/steve/Documents/FEC/steve-component-agent-contact/node_modules/@babel/parser/lib/index.js:7799:10)\\n    at parseTopLevel (/home/steve/Documents/FEC/steve-component-agent-contact/node_modules/@babel/parser/lib/index.js:7181:10)\\n    at parse (/home/steve/Documents/FEC/steve-component-agent-contact/node_modules/@babel/parser/lib/index.js:8660:17)\\n    at parse (/home/steve/Documents/FEC/steve-component-agent-contact/node_modules/@babel/parser/lib/index.js:10643:38)\\n    at parser (/home/steve/Documents/FEC/steve-component-agent-contact/node_modules/@babel/core/lib/transformation/normalize-file.js:170:34)\\n    at normalizeFile (/home/steve/Documents/FEC/steve-component-agent-contact/node_modules/@babel/core/lib/transformation/normalize-file.js:138:11)\\n    at runSync (/home/steve/Documents/FEC/steve-component-agent-contact/node_modules/@babel/core/lib/transformation/index.js:44:43)\\n    at runAsync (/home/steve/Documents/FEC/steve-component-agent-contact/node_modules/@babel/core/lib/transformation/index.js:35:14)\\n    at process.nextTick.err (/home/steve/Documents/FEC/steve-component-agent-contact/node_modules/@babel/core/lib/transform.js:34:34)\\n    at _combinedTickCallback (internal/process/next_tick.js:73:7)\\n    at process._tickCallback (internal/process/next_tick.js:104:9)\");\n\n//# sourceURL=webpack:///./client/src/index.jsx?");

/***/ })

/******/ });