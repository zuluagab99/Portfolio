"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./lib/theme.js":
/*!**********************!*\
  !*** ./lib/theme.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/theme-tools */ \"./node_modules/@chakra-ui/theme-tools/dist/chakra-ui-theme-tools.esm.js\");\n\n\nvar styles = {\n    global: function(props) {\n        return {\n            body: {\n                bg: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__.mode)(\"#edeae5\", \"#151f27\")(props)\n            }\n        };\n    }\n};\nvar components = {\n    Heading: {\n        variants: {\n            \"section-title\": {\n                textDecoration: \"underline\",\n                fontSize: 30,\n                textUnderlineOffset: 6,\n                textDecorationColor: \"#88CEF6\",\n                textDecorationThickness: 5,\n                marginTop: 3,\n                marginBottom: 4\n            }\n        }\n    },\n    Link: {\n        baseStyle: function(props) {\n            return {\n                color: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__.mode)(\"#151f27\", \"#edeae5\")(props),\n                textUnderlineOffset: 3\n            };\n        }\n    }\n};\nvar fonts = {\n    heading: \"'Dosis'\"\n};\nvar colors = {\n    grassTeal: \"#88CEF6\"\n};\nvar config = {\n    initialColorMode: \"dark\",\n    useSystemColorMode: true\n};\nvar theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.extendTheme)({\n    config: config,\n    styles: styles,\n    components: components,\n    fonts: fonts,\n    colors: colors\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (theme);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvdGhlbWUuanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQThDO0FBQ0Q7QUFFN0MsSUFBTUUsTUFBTSxHQUFHO0lBQ2JDLE1BQU0sRUFBRUMsU0FBQUEsS0FBSztlQUFLO1lBQ2hCQyxJQUFJLEVBQUU7Z0JBQ0pDLEVBQUUsRUFBRUwsNERBQUksQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUNHLEtBQUssQ0FBQzthQUN0QztTQUNGO0tBQUM7Q0FDSDtBQUVELElBQU1HLFVBQVUsR0FBRztJQUNqQkMsT0FBTyxFQUFFO1FBQ1BDLFFBQVEsRUFBRTtZQUNSLGVBQWUsRUFBRTtnQkFDZkMsY0FBYyxFQUFFLFdBQVc7Z0JBQzNCQyxRQUFRLEVBQUUsRUFBRTtnQkFDWkMsbUJBQW1CLEVBQUUsQ0FBQztnQkFDdEJDLG1CQUFtQixFQUFFLFNBQVM7Z0JBQzlCQyx1QkFBdUIsRUFBRSxDQUFDO2dCQUMxQkMsU0FBUyxFQUFFLENBQUM7Z0JBQ1pDLFlBQVksRUFBRSxDQUFDO2FBQ2hCO1NBQ0Y7S0FDRjtJQUNEQyxJQUFJLEVBQUU7UUFDSkMsU0FBUyxFQUFFZCxTQUFBQSxLQUFLO21CQUFLO2dCQUNuQmUsS0FBSyxFQUFFbEIsNERBQUksQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUNHLEtBQUssQ0FBQztnQkFDeENRLG1CQUFtQixFQUFFLENBQUM7YUFDdkI7U0FBQztLQUNIO0NBQ0Y7QUFFRCxJQUFNUSxLQUFLLEdBQUc7SUFDWkMsT0FBTyxFQUFFLFNBQVM7Q0FDbkI7QUFFRCxJQUFNQyxNQUFNLEdBQUc7SUFDYkMsU0FBUyxFQUFFLFNBQVM7Q0FDckI7QUFFRCxJQUFNQyxNQUFNLEdBQUc7SUFDYkMsZ0JBQWdCLEVBQUUsTUFBTTtJQUN4QkMsa0JBQWtCLEVBQUUsSUFBSTtDQUN6QjtBQUVELElBQU1DLEtBQUssR0FBRzNCLDZEQUFXLENBQUM7SUFBRXdCLE1BQU0sRUFBTkEsTUFBTTtJQUFFdEIsTUFBTSxFQUFOQSxNQUFNO0lBQUVLLFVBQVUsRUFBVkEsVUFBVTtJQUFFYSxLQUFLLEVBQUxBLEtBQUs7SUFBRUUsTUFBTSxFQUFOQSxNQUFNO0NBQUUsQ0FBQztBQUN4RSwrREFBZUssS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9saWIvdGhlbWUuanM/MzMzMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBleHRlbmRUaGVtZSB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgeyBtb2RlIH0gZnJvbSAnQGNoYWtyYS11aS90aGVtZS10b29scydcblxuY29uc3Qgc3R5bGVzID0ge1xuICBnbG9iYWw6IHByb3BzID0+ICh7XG4gICAgYm9keToge1xuICAgICAgYmc6IG1vZGUoJyNlZGVhZTUnLCAnIzE1MWYyNycpKHByb3BzKVxuICAgIH1cbiAgfSlcbn1cblxuY29uc3QgY29tcG9uZW50cyA9IHtcbiAgSGVhZGluZzoge1xuICAgIHZhcmlhbnRzOiB7XG4gICAgICAnc2VjdGlvbi10aXRsZSc6IHtcbiAgICAgICAgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnLFxuICAgICAgICBmb250U2l6ZTogMzAsXG4gICAgICAgIHRleHRVbmRlcmxpbmVPZmZzZXQ6IDYsXG4gICAgICAgIHRleHREZWNvcmF0aW9uQ29sb3I6ICcjODhDRUY2JyxcbiAgICAgICAgdGV4dERlY29yYXRpb25UaGlja25lc3M6IDUsXG4gICAgICAgIG1hcmdpblRvcDogMyxcbiAgICAgICAgbWFyZ2luQm90dG9tOiA0XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBMaW5rOiB7XG4gICAgYmFzZVN0eWxlOiBwcm9wcyA9PiAoe1xuICAgICAgY29sb3I6IG1vZGUoJyMxNTFmMjcnLCAnI2VkZWFlNScpKHByb3BzKSxcbiAgICAgIHRleHRVbmRlcmxpbmVPZmZzZXQ6IDNcbiAgICB9KVxuICB9XG59XG5cbmNvbnN0IGZvbnRzID0ge1xuICBoZWFkaW5nOiBcIidEb3NpcydcIlxufVxuXG5jb25zdCBjb2xvcnMgPSB7XG4gIGdyYXNzVGVhbDogJyM4OENFRjYnXG59XG5cbmNvbnN0IGNvbmZpZyA9IHtcbiAgaW5pdGlhbENvbG9yTW9kZTogJ2RhcmsnLFxuICB1c2VTeXN0ZW1Db2xvck1vZGU6IHRydWVcbn1cblxuY29uc3QgdGhlbWUgPSBleHRlbmRUaGVtZSh7IGNvbmZpZywgc3R5bGVzLCBjb21wb25lbnRzLCBmb250cywgY29sb3JzIH0pXG5leHBvcnQgZGVmYXVsdCB0aGVtZVxuIl0sIm5hbWVzIjpbImV4dGVuZFRoZW1lIiwibW9kZSIsInN0eWxlcyIsImdsb2JhbCIsInByb3BzIiwiYm9keSIsImJnIiwiY29tcG9uZW50cyIsIkhlYWRpbmciLCJ2YXJpYW50cyIsInRleHREZWNvcmF0aW9uIiwiZm9udFNpemUiLCJ0ZXh0VW5kZXJsaW5lT2Zmc2V0IiwidGV4dERlY29yYXRpb25Db2xvciIsInRleHREZWNvcmF0aW9uVGhpY2tuZXNzIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiTGluayIsImJhc2VTdHlsZSIsImNvbG9yIiwiZm9udHMiLCJoZWFkaW5nIiwiY29sb3JzIiwiZ3Jhc3NUZWFsIiwiY29uZmlnIiwiaW5pdGlhbENvbG9yTW9kZSIsInVzZVN5c3RlbUNvbG9yTW9kZSIsInRoZW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/theme.js\n");

/***/ })

});