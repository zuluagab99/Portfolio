/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/icons/helmet.js":
/*!************************************!*\
  !*** ./components/icons/helmet.js ***!
  \************************************/
/***/ (function(module) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./components/logo.js":
/*!****************************!*\
  !*** ./components/logo.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n/* harmony import */ var _icons_helmet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/helmet */ \"./components/icons/helmet.js\");\n/* harmony import */ var _icons_helmet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_icons_helmet__WEBPACK_IMPORTED_MODULE_4__);\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  font-weight: bold;\\n  font-size: 18px;\\n  display: inline-flex;\\n  align-items: center;\\n  height: 30px;\\n  line-height: 20px;\\n  padding: 10px;\\n\\n  img {\\n    transition: 200ms ease;\\n  }\\n\\n  &:hover img {\\n    transform: rotate(20deg);\\n  }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar LogoBox = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__[\"default\"].span(_templateObject());\n_c = LogoBox;\nvar Logo = function() {\n    _s();\n    var footPrintImg = \"/images/helmet\".concat((0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useColorModeValue)(\"\", \"-dark\"), \".png\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: \"/\",\n        scroll: false,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LogoBox, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: footPrintImg,\n                        width: 20,\n                        height: 20,\n                        alt: \"logo\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alejandrozuluagabaron/Portfolio/components/logo.js\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: \"/helmet.svg\",\n                        width: 20,\n                        height: 20,\n                        alt: \"logo\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alejandrozuluagabaron/Portfolio/components/logo.js\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_icons_helmet__WEBPACK_IMPORTED_MODULE_4___default()), {}, void 0, false, {\n                        fileName: \"/Users/alejandrozuluagabaron/Portfolio/components/logo.js\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                        color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useColorModeValue)(\"gray.800\", \"whiteAlpha.900\"),\n                        // fontFamily='M PLUS Rounded 1c\", sans-serif'\n                        fontWeight: \"bold\",\n                        ml: 3,\n                        children: \"Alejandro Zuluaga\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alejandrozuluagabaron/Portfolio/components/logo.js\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alejandrozuluagabaron/Portfolio/components/logo.js\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/alejandrozuluagabaron/Portfolio/components/logo.js\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/alejandrozuluagabaron/Portfolio/components/logo.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, _this);\n};\n_s(Logo, \"5rxRexUsrrZIvnjV+vC1pFVSBPE=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useColorModeValue,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useColorModeValue\n    ];\n});\n_c1 = Logo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Logo);\nvar _c, _c1;\n$RefreshReg$(_c, \"LogoBox\");\n$RefreshReg$(_c1, \"Logo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xvZ28uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRCO0FBQ0U7QUFDNEI7QUFDdEI7QUFDRDs7QUFFbkMsSUFBTU0sT0FBTyxHQUFHRiw0REFBVyxtQkFnQjFCO0FBaEJLRSxLQUFBQSxPQUFPO0FBa0JiLElBQU1FLElBQUksR0FBRyxXQUFNOztJQUNqQixJQUFNQyxZQUFZLEdBQUcsZ0JBQWUsQ0FBaUMsTUFBSSxDQUFuQ04sbUVBQWlCLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxFQUFDLE1BQUksQ0FBQztJQUUxRSxxQkFDRSw4REFBQ0gsa0RBQUk7UUFBQ1UsSUFBSSxFQUFDLEdBQUc7UUFBQ0MsTUFBTSxFQUFFLEtBQUs7a0JBQzFCLDRFQUFDQyxHQUFDO3NCQUNBLDRFQUFDTixPQUFPOztrQ0FDTiw4REFBQ0wsbURBQUs7d0JBQUNZLEdBQUcsRUFBRUosWUFBWTt3QkFBRUssS0FBSyxFQUFFLEVBQUU7d0JBQUVDLE1BQU0sRUFBRSxFQUFFO3dCQUFFQyxHQUFHLEVBQUMsTUFBTTs7Ozs7NkJBQUc7a0NBQzlELDhEQUFDZixtREFBSzt3QkFBQ1ksR0FBRyxFQUFDLGFBQWE7d0JBQUNDLEtBQUssRUFBRSxFQUFFO3dCQUFFQyxNQUFNLEVBQUUsRUFBRTt3QkFBRUMsR0FBRyxFQUFDLE1BQU07Ozs7OzZCQUFHO2tDQUM3RCw4REFBQ1gsc0RBQU07Ozs7NkJBQVU7a0NBQ2pCLDhEQUFDSCxrREFBSTt3QkFDSGUsS0FBSyxFQUFFZCxtRUFBaUIsQ0FBQyxVQUFVLEVBQUUsZ0JBQWdCLENBQUM7d0JBQ3RELDhDQUE4Qzt3QkFDOUNlLFVBQVUsRUFBQyxNQUFNO3dCQUNqQkMsRUFBRSxFQUFFLENBQUM7a0NBQ04sbUJBRUQ7Ozs7OzZCQUFPOzs7Ozs7cUJBQ0M7Ozs7O2lCQUNSOzs7OzthQUNDLENBQ1I7Q0FDRjtHQXRCS1gsSUFBSTs7UUFDOEJMLCtEQUFpQjtRQVV0Q0EsK0RBQWlCOzs7QUFYOUJLLE1BQUFBLElBQUk7QUF3QlYsK0RBQWVBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sb2dvLmpzP2E2NjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgeyBUZXh0LCB1c2VDb2xvck1vZGVWYWx1ZSB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCBIZWxtZXQgZnJvbSAnLi9pY29ucy9oZWxtZXQnXG5cbmNvbnN0IExvZ29Cb3ggPSBzdHlsZWQuc3BhbmBcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG5cbiAgaW1nIHtcbiAgICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlO1xuICB9XG5cbiAgJjpob3ZlciBpbWcge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDIwZGVnKTtcbiAgfVxuYFxuXG5jb25zdCBMb2dvID0gKCkgPT4ge1xuICBjb25zdCBmb290UHJpbnRJbWcgPSBgL2ltYWdlcy9oZWxtZXQke3VzZUNvbG9yTW9kZVZhbHVlKCcnLCAnLWRhcmsnKX0ucG5nYFxuXG4gIHJldHVybiAoXG4gICAgPExpbmsgaHJlZj1cIi9cIiBzY3JvbGw9e2ZhbHNlfT5cbiAgICAgIDxhPlxuICAgICAgICA8TG9nb0JveD5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtmb290UHJpbnRJbWd9IHdpZHRoPXsyMH0gaGVpZ2h0PXsyMH0gYWx0PVwibG9nb1wiIC8+XG4gICAgICAgICAgPEltYWdlIHNyYz0nL2hlbG1ldC5zdmcnIHdpZHRoPXsyMH0gaGVpZ2h0PXsyMH0gYWx0PVwibG9nb1wiIC8+XG4gICAgICAgICAgPEhlbG1ldD48L0hlbG1ldD5cbiAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgY29sb3I9e3VzZUNvbG9yTW9kZVZhbHVlKCdncmF5LjgwMCcsICd3aGl0ZUFscGhhLjkwMCcpfVxuICAgICAgICAgICAgLy8gZm9udEZhbWlseT0nTSBQTFVTIFJvdW5kZWQgMWNcIiwgc2Fucy1zZXJpZidcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkXCJcbiAgICAgICAgICAgIG1sPXszfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEFsZWphbmRybyBadWx1YWdhXG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8L0xvZ29Cb3g+XG4gICAgICA8L2E+XG4gICAgPC9MaW5rPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ29cbiJdLCJuYW1lcyI6WyJMaW5rIiwiSW1hZ2UiLCJUZXh0IiwidXNlQ29sb3JNb2RlVmFsdWUiLCJzdHlsZWQiLCJIZWxtZXQiLCJMb2dvQm94Iiwic3BhbiIsIkxvZ28iLCJmb290UHJpbnRJbWciLCJocmVmIiwic2Nyb2xsIiwiYSIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwiY29sb3IiLCJmb250V2VpZ2h0IiwibWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/logo.js\n");

/***/ })

});