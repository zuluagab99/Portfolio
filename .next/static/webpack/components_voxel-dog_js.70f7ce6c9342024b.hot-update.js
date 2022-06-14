"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("components_voxel-dog_js",{

/***/ "./components/voxel-dog.js":
/*!*********************************!*\
  !*** ./components/voxel-dog.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var _lib_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/model */ \"./lib/model.js\");\n/* harmony import */ var _voxel_dog_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./voxel-dog-loader */ \"./components/voxel-dog-loader.js\");\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction easeOutCirc(x) {\n    return Math.sqrt(1 - Math.pow(x - 1, 4));\n}\nvar VoxelDog = function() {\n    _s();\n    var refContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), loading = ref[0], setLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), renderer = ref1[0], setRenderer = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), _camera = ref2[0], setCamera = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_5__.Vector3(-0.5, 1.2, 0)), target = ref3[0];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_5__.Vector3(25 * Math.sin(0.2 * Math.PI), 10, 25 * Math.cos(0.2 * Math.PI))), initialCameraPosition = ref4[0];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_5__.Scene()), scene = ref5[0];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), _controls = ref6[0], setControls = ref6[1];\n    var handleWindowResize = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function() {\n        var container = refContainer.current;\n        if (container && renderer) {\n            var scW = container.clientWidth;\n            var scH = container.clientHeight;\n            renderer.setSize(scW, scH);\n        }\n    }, [\n        renderer\n    ]);\n    /* eslint-disable react-hooks/exhaustive-deps */ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var container = refContainer.current;\n        if (container && !renderer) {\n            var scW = container.clientWidth;\n            var scH = container.clientHeight;\n            var renderer1 = new three__WEBPACK_IMPORTED_MODULE_5__.WebGLRenderer({\n                antialias: true,\n                alpha: true\n            });\n            renderer1.setPixelRatio(window.devicePixelRatio);\n            renderer1.setSize(scW, scH);\n            renderer1.outputEncoding = three__WEBPACK_IMPORTED_MODULE_5__.sRGBEncoding;\n            container.appendChild(renderer1.domElement);\n            setRenderer(renderer1);\n            // 640 -> 240\n            // 8   -> 6\n            var scale = scH * 0.005 + 4.8;\n            var camera = new three__WEBPACK_IMPORTED_MODULE_5__.OrthographicCamera(-scale, scale, scale, -scale, 0.01, 50000);\n            camera.position.copy(initialCameraPosition);\n            camera.lookAt(target);\n            setCamera(camera);\n            var ambientLight = new three__WEBPACK_IMPORTED_MODULE_5__.AmbientLight(0xcccccc, 1);\n            scene.add(ambientLight);\n            var controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__.OrbitControls(camera, renderer1.domElement);\n            controls.autoRotate = true;\n            controls.target = target;\n            setControls(controls);\n            (0,_lib_model__WEBPACK_IMPORTED_MODULE_3__.loadGLTFModel)(scene, \"/monster.glb\", {\n                receiveShadow: false,\n                castShadow: false\n            }).then(function() {\n                animate();\n                setLoading(false);\n            });\n            var req = null;\n            var frame = 0;\n            var animate = function() {\n                req = requestAnimationFrame(animate);\n                frame = frame <= 100 ? frame + 1 : frame;\n                if (frame <= 100) {\n                    var p = initialCameraPosition;\n                    var rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;\n                    camera.position.y = 10;\n                    camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);\n                    camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);\n                    camera.lookAt(target);\n                } else {\n                    controls.update();\n                }\n                renderer1.render(scene, camera);\n            };\n            return function() {\n                console.log(\"unmount\");\n                cancelAnimationFrame(req);\n                renderer1.dispose();\n            };\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        window.addEventListener(\"resize\", handleWindowResize, false);\n        return function() {\n            window.removeEventListener(\"resize\", handleWindowResize, false);\n        };\n    }, [\n        renderer,\n        handleWindowResize\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_voxel_dog_loader__WEBPACK_IMPORTED_MODULE_4__.DogContainer, {\n        ref: refContainer,\n        children: loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_voxel_dog_loader__WEBPACK_IMPORTED_MODULE_4__.DogSpinner, {}, void 0, false, {\n            fileName: \"/Users/alejandrozuluagabaron/Portfolio/components/voxel-dog.js\",\n            lineNumber: 125,\n            columnNumber: 50\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/alejandrozuluagabaron/Portfolio/components/voxel-dog.js\",\n        lineNumber: 125,\n        columnNumber: 5\n    }, _this);\n};\n_s(VoxelDog, \"ga1lasbHZxgm0brDnZ14q1v3rLE=\");\n_c = VoxelDog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VoxelDog);\nvar _c;\n$RefreshReg$(_c, \"VoxelDog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0JBQ1h1QixPQUFPLENBQUNDLEdBQUcsQ0FBQyxTQUFTLENBQUM7Z0JBQ3RCQyxvQkFBb0IsQ0FBQ1gsR0FBRyxDQUFDO2dCQUN6Qi9DLFNBQVEsQ0FBQzJELE9BQU8sRUFBRTthQUNuQjtTQUNGO0tBQ0YsRUFBRSxFQUFFLENBQUM7SUFFTjVFLGdEQUFTLENBQUMsV0FBTTtRQUNkMkMsTUFBTSxDQUFDa0MsZ0JBQWdCLENBQUMsUUFBUSxFQUFFOUMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDO1FBQzVELE9BQU8sV0FBTTtZQUNYWSxNQUFNLENBQUNtQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUvQyxrQkFBa0IsRUFBRSxLQUFLLENBQUM7U0FDaEU7S0FDRixFQUFFO1FBQUNkLFFBQVE7UUFBRWMsa0JBQWtCO0tBQUMsQ0FBQztJQUVsQyxxQkFDRSw4REFBQ3hCLDJEQUFZO1FBQUN3RSxHQUFHLEVBQUVqRSxZQUFZO2tCQUFHQyxPQUFPLGtCQUFJLDhEQUFDVCx5REFBVTs7OztpQkFBRzs7Ozs7YUFBZ0IsQ0FDNUU7Q0FDRjtHQXBIS08sUUFBUTtBQUFSQSxLQUFBQSxRQUFRO0FBc0hkLCtEQUFlQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdm94ZWwtZG9nLmpzP2NmNGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnXG5pbXBvcnQgeyBPcmJpdENvbnRyb2xzIH0gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL2NvbnRyb2xzL09yYml0Q29udHJvbHMnXG5pbXBvcnQgeyBsb2FkR0xURk1vZGVsIH0gZnJvbSAnLi4vbGliL21vZGVsJ1xuaW1wb3J0IHsgRG9nU3Bpbm5lciwgRG9nQ29udGFpbmVyIH0gZnJvbSAnLi92b3hlbC1kb2ctbG9hZGVyJ1xuXG5mdW5jdGlvbiBlYXNlT3V0Q2lyYyh4KSB7XG4gIHJldHVybiBNYXRoLnNxcnQoMSAtIE1hdGgucG93KHggLSAxLCA0KSlcbn1cblxuY29uc3QgVm94ZWxEb2cgPSAoKSA9PiB7XG4gIGNvbnN0IHJlZkNvbnRhaW5lciA9IHVzZVJlZigpXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXG4gIGNvbnN0IFtyZW5kZXJlciwgc2V0UmVuZGVyZXJdID0gdXNlU3RhdGUoKVxuICBjb25zdCBbX2NhbWVyYSwgc2V0Q2FtZXJhXSA9IHVzZVN0YXRlKClcbiAgY29uc3QgW3RhcmdldF0gPSB1c2VTdGF0ZShuZXcgVEhSRUUuVmVjdG9yMygtMC41LCAxLjIsIDApKVxuICBjb25zdCBbaW5pdGlhbENhbWVyYVBvc2l0aW9uXSA9IHVzZVN0YXRlKFxuICAgIG5ldyBUSFJFRS5WZWN0b3IzKFxuICAgICAgMjUgKiBNYXRoLnNpbigwLjIgKiBNYXRoLlBJKSxcbiAgICAgIDEwLFxuICAgICAgMjUgKiBNYXRoLmNvcygwLjIgKiBNYXRoLlBJKVxuICAgIClcbiAgKVxuICBjb25zdCBbc2NlbmVdID0gdXNlU3RhdGUobmV3IFRIUkVFLlNjZW5lKCkpXG4gIGNvbnN0IFtfY29udHJvbHMsIHNldENvbnRyb2xzXSA9IHVzZVN0YXRlKClcblxuICBjb25zdCBoYW5kbGVXaW5kb3dSZXNpemUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY29uc3QgeyBjdXJyZW50OiBjb250YWluZXIgfSA9IHJlZkNvbnRhaW5lclxuICAgIGlmIChjb250YWluZXIgJiYgcmVuZGVyZXIpIHtcbiAgICAgIGNvbnN0IHNjVyA9IGNvbnRhaW5lci5jbGllbnRXaWR0aFxuICAgICAgY29uc3Qgc2NIID0gY29udGFpbmVyLmNsaWVudEhlaWdodFxuXG4gICAgICByZW5kZXJlci5zZXRTaXplKHNjVywgc2NIKVxuICAgIH1cbiAgfSwgW3JlbmRlcmVyXSlcblxuICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHMgKi9cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB7IGN1cnJlbnQ6IGNvbnRhaW5lciB9ID0gcmVmQ29udGFpbmVyXG4gICAgaWYgKGNvbnRhaW5lciAmJiAhcmVuZGVyZXIpIHtcbiAgICAgIGNvbnN0IHNjVyA9IGNvbnRhaW5lci5jbGllbnRXaWR0aFxuICAgICAgY29uc3Qgc2NIID0gY29udGFpbmVyLmNsaWVudEhlaWdodFxuXG4gICAgICBjb25zdCByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHtcbiAgICAgICAgYW50aWFsaWFzOiB0cnVlLFxuICAgICAgICBhbHBoYTogdHJ1ZVxuICAgICAgfSlcbiAgICAgIHJlbmRlcmVyLnNldFBpeGVsUmF0aW8od2luZG93LmRldmljZVBpeGVsUmF0aW8pXG4gICAgICByZW5kZXJlci5zZXRTaXplKHNjVywgc2NIKVxuICAgICAgcmVuZGVyZXIub3V0cHV0RW5jb2RpbmcgPSBUSFJFRS5zUkdCRW5jb2RpbmdcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KVxuICAgICAgc2V0UmVuZGVyZXIocmVuZGVyZXIpXG5cbiAgICAgIC8vIDY0MCAtPiAyNDBcbiAgICAgIC8vIDggICAtPiA2XG4gICAgICBjb25zdCBzY2FsZSA9IHNjSCAqIDAuMDA1ICsgNC44XG4gICAgICBjb25zdCBjYW1lcmEgPSBuZXcgVEhSRUUuT3J0aG9ncmFwaGljQ2FtZXJhKFxuICAgICAgICAtc2NhbGUsXG4gICAgICAgIHNjYWxlLFxuICAgICAgICBzY2FsZSxcbiAgICAgICAgLXNjYWxlLFxuICAgICAgICAwLjAxLFxuICAgICAgICA1MDAwMFxuICAgICAgKVxuICAgICAgY2FtZXJhLnBvc2l0aW9uLmNvcHkoaW5pdGlhbENhbWVyYVBvc2l0aW9uKVxuICAgICAgY2FtZXJhLmxvb2tBdCh0YXJnZXQpXG4gICAgICBzZXRDYW1lcmEoY2FtZXJhKVxuXG4gICAgICBjb25zdCBhbWJpZW50TGlnaHQgPSBuZXcgVEhSRUUuQW1iaWVudExpZ2h0KDB4Y2NjY2NjLCAxKVxuICAgICAgc2NlbmUuYWRkKGFtYmllbnRMaWdodClcblxuICAgICAgY29uc3QgY29udHJvbHMgPSBuZXcgT3JiaXRDb250cm9scyhjYW1lcmEsIHJlbmRlcmVyLmRvbUVsZW1lbnQpXG4gICAgICBjb250cm9scy5hdXRvUm90YXRlID0gdHJ1ZVxuICAgICAgY29udHJvbHMudGFyZ2V0ID0gdGFyZ2V0XG4gICAgICBzZXRDb250cm9scyhjb250cm9scylcblxuICAgICAgbG9hZEdMVEZNb2RlbChzY2VuZSwgJy9tb25zdGVyLmdsYicsIHtcbiAgICAgICAgcmVjZWl2ZVNoYWRvdzogZmFsc2UsXG4gICAgICAgIGNhc3RTaGFkb3c6IGZhbHNlXG4gICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgYW5pbWF0ZSgpXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICB9KVxuXG4gICAgICBsZXQgcmVxID0gbnVsbFxuICAgICAgbGV0IGZyYW1lID0gMFxuICAgICAgY29uc3QgYW5pbWF0ZSA9ICgpID0+IHtcbiAgICAgICAgcmVxID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpXG5cbiAgICAgICAgZnJhbWUgPSBmcmFtZSA8PSAxMDAgPyBmcmFtZSArIDEgOiBmcmFtZVxuXG4gICAgICAgIGlmIChmcmFtZSA8PSAxMDApIHtcbiAgICAgICAgICBjb25zdCBwID0gaW5pdGlhbENhbWVyYVBvc2l0aW9uXG4gICAgICAgICAgY29uc3Qgcm90U3BlZWQgPSAtZWFzZU91dENpcmMoZnJhbWUgLyAxMjApICogTWF0aC5QSSAqIDIwXG5cbiAgICAgICAgICBjYW1lcmEucG9zaXRpb24ueSA9IDEwXG4gICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnggPVxuICAgICAgICAgICAgcC54ICogTWF0aC5jb3Mocm90U3BlZWQpICsgcC56ICogTWF0aC5zaW4ocm90U3BlZWQpXG4gICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnogPVxuICAgICAgICAgICAgcC56ICogTWF0aC5jb3Mocm90U3BlZWQpIC0gcC54ICogTWF0aC5zaW4ocm90U3BlZWQpXG4gICAgICAgICAgY2FtZXJhLmxvb2tBdCh0YXJnZXQpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29udHJvbHMudXBkYXRlKClcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygndW5tb3VudCcpXG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcSlcbiAgICAgICAgcmVuZGVyZXIuZGlzcG9zZSgpXG4gICAgICB9XG4gICAgfVxuICB9LCBbXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVXaW5kb3dSZXNpemUsIGZhbHNlKVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlV2luZG93UmVzaXplLCBmYWxzZSlcbiAgICB9XG4gIH0sIFtyZW5kZXJlciwgaGFuZGxlV2luZG93UmVzaXplXSlcblxuICByZXR1cm4gKFxuICAgIDxEb2dDb250YWluZXIgcmVmPXtyZWZDb250YWluZXJ9Pntsb2FkaW5nICYmIDxEb2dTcGlubmVyIC8+fTwvRG9nQ29udGFpbmVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFZveGVsRG9nXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VDYWxsYmFjayIsIlRIUkVFIiwiT3JiaXRDb250cm9scyIsImxvYWRHTFRGTW9kZWwiLCJEb2dTcGlubmVyIiwiRG9nQ29udGFpbmVyIiwiZWFzZU91dENpcmMiLCJ4IiwiTWF0aCIsInNxcnQiLCJwb3ciLCJWb3hlbERvZyIsInJlZkNvbnRhaW5lciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicmVuZGVyZXIiLCJzZXRSZW5kZXJlciIsIl9jYW1lcmEiLCJzZXRDYW1lcmEiLCJWZWN0b3IzIiwidGFyZ2V0Iiwic2luIiwiUEkiLCJjb3MiLCJpbml0aWFsQ2FtZXJhUG9zaXRpb24iLCJTY2VuZSIsInNjZW5lIiwiX2NvbnRyb2xzIiwic2V0Q29udHJvbHMiLCJoYW5kbGVXaW5kb3dSZXNpemUiLCJjdXJyZW50IiwiY29udGFpbmVyIiwic2NXIiwiY2xpZW50V2lkdGgiLCJzY0giLCJjbGllbnRIZWlnaHQiLCJzZXRTaXplIiwiV2ViR0xSZW5kZXJlciIsImFudGlhbGlhcyIsImFscGhhIiwic2V0UGl4ZWxSYXRpbyIsIndpbmRvdyIsImRldmljZVBpeGVsUmF0aW8iLCJvdXRwdXRFbmNvZGluZyIsInNSR0JFbmNvZGluZyIsImFwcGVuZENoaWxkIiwiZG9tRWxlbWVudCIsInNjYWxlIiwiY2FtZXJhIiwiT3J0aG9ncmFwaGljQ2FtZXJhIiwicG9zaXRpb24iLCJjb3B5IiwibG9va0F0IiwiYW1iaWVudExpZ2h0IiwiQW1iaWVudExpZ2h0IiwiYWRkIiwiY29udHJvbHMiLCJhdXRvUm90YXRlIiwicmVjZWl2ZVNoYWRvdyIsImNhc3RTaGFkb3ciLCJ0aGVuIiwiYW5pbWF0ZSIsInJlcSIsImZyYW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicCIsInJvdFNwZWVkIiwieSIsInoiLCJ1cGRhdGUiLCJyZW5kZXIiLCJjb25zb2xlIiwibG9nIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJkaXNwb3NlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/voxel-dog.js\n");

/***/ })

});