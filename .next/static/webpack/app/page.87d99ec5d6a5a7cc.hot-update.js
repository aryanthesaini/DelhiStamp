"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./components/BackgroundCircles.tsx":
/*!******************************************!*\
  !*** ./components/BackgroundCircles.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"(app-client)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nfunction BackgroundCircles(param) {\n    let {} = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n        initial: {\n            opacity: 0\n        },\n        animate: {\n            scale: [\n                1,\n                2,\n                2,\n                3,\n                1\n            ],\n            opacity: [\n                0.1,\n                0.2,\n                0.4,\n                0.8,\n                0.1,\n                1.0\n            ],\n            borderRadius: [\n                \"20%\",\n                \"20%\",\n                \"50%\",\n                \"80%\",\n                \"20%\"\n            ]\n        },\n        transition: {\n            duration: 2\n        },\n        className: \"relative flex justify-center items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute  border  border-[#bg-[#fbeaeb]] rounded-full h-[200px] w-[200px] mt-52 animate-ping \"\n            }, void 0, false, {\n                fileName: \"/Users/aryan/Desktop/Delhi Stamp/components/BackgroundCircles.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" rounded-full border border-[#333333] h-[300px] w-[300px] absolute mt-52\"\n            }, void 0, false, {\n                fileName: \"/Users/aryan/Desktop/Delhi Stamp/components/BackgroundCircles.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"rounded-full border border-[#333333] opacity-20 h-[650px] w-[650px] absolute mt-52 animate-pulse \"\n            }, void 0, false, {\n                fileName: \"/Users/aryan/Desktop/Delhi Stamp/components/BackgroundCircles.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"rounded-full border border-[#333333] h-[800px] w-[800px] absolute mt-52 \"\n            }, void 0, false, {\n                fileName: \"/Users/aryan/Desktop/Delhi Stamp/components/BackgroundCircles.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/aryan/Desktop/Delhi Stamp/components/BackgroundCircles.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n_c = BackgroundCircles;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BackgroundCircles);\nvar _c;\n$RefreshReg$(_c, \"BackgroundCircles\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9CYWNrZ3JvdW5kQ2lyY2xlcy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRTBCO0FBQ2E7QUFHdkMsU0FBU0Usa0JBQWtCLEtBQVM7UUFBVCxFQUFTLEdBQVQ7SUFDekIscUJBQ0UsOERBQUNELHFEQUFVRTtRQUNUQyxTQUFTO1lBQ1BDLFNBQVM7UUFDWDtRQUNBQyxTQUFTO1lBQ1BDLE9BQU87Z0JBQUM7Z0JBQUc7Z0JBQUc7Z0JBQUc7Z0JBQUc7YUFBRTtZQUN0QkYsU0FBUztnQkFBQztnQkFBSztnQkFBSztnQkFBSztnQkFBSztnQkFBSzthQUFJO1lBQ3ZDRyxjQUFjO2dCQUFDO2dCQUFPO2dCQUFPO2dCQUFPO2dCQUFPO2FBQU07UUFDbkQ7UUFDQUMsWUFBWTtZQUNWQyxVQUFVO1FBQ1o7UUFDQUMsV0FBVTs7MEJBQ1YsOERBQUNSO2dCQUFJUSxXQUFVOzs7Ozs7MEJBQ2YsOERBQUNSO2dCQUFJUSxXQUFVOzs7Ozs7MEJBQ2YsOERBQUNSO2dCQUFJUSxXQUFVOzs7Ozs7MEJBQ2YsOERBQUNSO2dCQUFJUSxXQUFVOzs7Ozs7Ozs7Ozs7QUFHckI7S0FyQlNUO0FBdUJULCtEQUFlQSxpQkFBaUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CYWNrZ3JvdW5kQ2lyY2xlcy50c3g/Y2NhNCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbnR5cGUgUHJvcHMgPSB7fTtcblxuZnVuY3Rpb24gQmFja2dyb3VuZENpcmNsZXMoe306IFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5kaXZcbiAgICAgIGluaXRpYWw9e3tcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgIH19XG4gICAgICBhbmltYXRlPXt7XG4gICAgICAgIHNjYWxlOiBbMSwgMiwgMiwgMywgMV0sXG4gICAgICAgIG9wYWNpdHk6IFswLjEsIDAuMiwgMC40LCAwLjgsIDAuMSwgMS4wXSxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBbJzIwJScsICcyMCUnLCAnNTAlJywgJzgwJScsICcyMCUnXSxcbiAgICAgIH19XG4gICAgICB0cmFuc2l0aW9uPXt7XG4gICAgICAgIGR1cmF0aW9uOiAyLFxuICAgICAgfX1cbiAgICAgIGNsYXNzTmFtZT0ncmVsYXRpdmUgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXInPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Fic29sdXRlICBib3JkZXIgIGJvcmRlci1bI2JnLVsjZmJlYWViXV0gcm91bmRlZC1mdWxsIGgtWzIwMHB4XSB3LVsyMDBweF0gbXQtNTIgYW5pbWF0ZS1waW5nICcgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPScgcm91bmRlZC1mdWxsIGJvcmRlciBib3JkZXItWyMzMzMzMzNdIGgtWzMwMHB4XSB3LVszMDBweF0gYWJzb2x1dGUgbXQtNTInIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncm91bmRlZC1mdWxsIGJvcmRlciBib3JkZXItWyMzMzMzMzNdIG9wYWNpdHktMjAgaC1bNjUwcHhdIHctWzY1MHB4XSBhYnNvbHV0ZSBtdC01MiBhbmltYXRlLXB1bHNlICcgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3VuZGVkLWZ1bGwgYm9yZGVyIGJvcmRlci1bIzMzMzMzM10gaC1bODAwcHhdIHctWzgwMHB4XSBhYnNvbHV0ZSBtdC01MiAnIC8+XG4gICAgPC9tb3Rpb24uZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBCYWNrZ3JvdW5kQ2lyY2xlcztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIm1vdGlvbiIsIkJhY2tncm91bmRDaXJjbGVzIiwiZGl2IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwic2NhbGUiLCJib3JkZXJSYWRpdXMiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./components/BackgroundCircles.tsx\n"));

/***/ })

});