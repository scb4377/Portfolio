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

/***/ "(app-pages-browser)/./components/ui/BentoGrid.tsx":
/*!*************************************!*\
  !*** ./components/ui/BentoGrid.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BentoGrid: function() { return /* binding */ BentoGrid; },\n/* harmony export */   BentoGridItem: function() { return /* binding */ BentoGridItem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _utils_cn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/cn */ \"(app-pages-browser)/./utils/cn.ts\");\n/* harmony import */ var _GradientBg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GradientBg */ \"(app-pages-browser)/./components/ui/GradientBg.tsx\");\n/* harmony import */ var _GridGlobe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GridGlobe */ \"(app-pages-browser)/./components/ui/GridGlobe.tsx\");\n/* harmony import */ var react_lottie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-lottie */ \"(app-pages-browser)/./node_modules/react-lottie/dist/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _data_confetti_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/data/confetti.json */ \"(app-pages-browser)/./data/confetti.json\");\n/* harmony import */ var _MagicButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MagicButton */ \"(app-pages-browser)/./components/ui/MagicButton.tsx\");\n/* harmony import */ var _barrel_optimize_names_IoCopyOutline_react_icons_io5__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=IoCopyOutline!=!react-icons/io5 */ \"(app-pages-browser)/./node_modules/react-icons/io5/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ BentoGrid,BentoGridItem auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst BentoGrid = (param)=>{\n    let { className, children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_1__.cn)(\"grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto \", className),\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\nechi\\\\Projects\\\\portfolio-v3\\\\components\\\\ui\\\\BentoGrid.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_c = BentoGrid;\nconst BentoGridItem = (param)=>{\n    let { id, className, title, description, img, imgClassName, titleClassName, spareImg } = param;\n    _s();\n    const [copied, setCopied] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    const handleCopy = ()=>{\n        navigator.clipboard.writeText(\"scbdev2021@gmail.com\");\n        setCopied(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_1__.cn)(\"row-span-1 rounded-3xl relative overflow-hidden group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none border border-white/[0.1] justify-between flex flex-col space-y-4\", className),\n        style: {\n            // background: \"rgb(4,7,29)\",\n            background: \"#0C161F\",\n            backgroundColor: \"linear-gradient(90deg, rgba(12, 22, 31, 1) 0%, rgba(12,14,35,1) 100%)\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\".concat(id === 6 && \"flex justify-center\", \" h-full\"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"absolute right-0 -bottom-5 \".concat(id === 5 && \"w-full opactiy-80\"),\n                    children: spareImg && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: spareImg,\n                        alt: spareImg,\n                        className: \"object-cover, object-center w-full h-full\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\nechi\\\\Projects\\\\portfolio-v3\\\\components\\\\ui\\\\BentoGrid.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\nechi\\\\Projects\\\\portfolio-v3\\\\components\\\\ui\\\\BentoGrid.tsx\",\n                    lineNumber: 85,\n                    columnNumber: 9\n                }, undefined),\n                id === 6 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GradientBg__WEBPACK_IMPORTED_MODULE_2__.BackgroundGradientAnimation, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\nechi\\\\Projects\\\\portfolio-v3\\\\components\\\\ui\\\\BentoGrid.tsx\",\n                        lineNumber: 99,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\nechi\\\\Projects\\\\portfolio-v3\\\\components\\\\ui\\\\BentoGrid.tsx\",\n                    lineNumber: 98,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_1__.cn)(titleClassName, \"group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"font-sans font-extraLight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10\",\n                            children: description\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\nechi\\\\Projects\\\\portfolio-v3\\\\components\\\\ui\\\\BentoGrid.tsx\",\n                            lineNumber: 108,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"font-sans font-bold text-lg lg:text-3xl max-w-96 z-10\",\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\nechi\\\\Projects\\\\portfolio-v3\\\\components\\\\ui\\\\BentoGrid.tsx\",\n                            lineNumber: 113,\n                            columnNumber: 11\n                        }, undefined),\n                        id === 2 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GridGlobe__WEBPACK_IMPORTED_MODULE_3__.GlobeDemo, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\nechi\\\\Projects\\\\portfolio-v3\\\\components\\\\ui\\\\BentoGrid.tsx\",\n                            lineNumber: 118,\n                            columnNumber: 24\n                        }, undefined),\n                        id === 3 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-col gap-3 lg:gap-8\",\n                                    children: [\n                                        [\n                                            \"React.js\",\n                                            \"Next.js\",\n                                            \"TypeScript\"\n                                        ].map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#1A3044]\",\n                                                children: item\n                                            }, item, false, {\n                                                fileName: \"C:\\\\Users\\\\nechi\\\\Projects\\\\portfolio-v3\\\\components\\\\ui\\\\BentoGrid.tsx\",\n                                                lineNumber: 128,\n                                                columnNumber: 19\n                                            }, undefined)),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"py-4 px-3 rounded-lg text-center bg-[#1A3044]\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\nechi\\\\Projects\\\\portfolio-v3\\\\components\\\\ui\\\\BentoGrid.tsx\",\n                                            lineNumber: 132,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\nechi\\\\Projects\\\\portfolio-v3\\\\components\\\\ui\\\\BentoGrid.tsx\",\n                                    lineNumber: 124,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-col gap-3 lg:gap-8\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"py-4 px-3 rounded-lg text-center bg-[#1A3044]\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\nechi\\\\Projects\\\\portfolio-v3\\\\components\\\\ui\\\\BentoGrid.tsx\",\n                                            lineNumber: 138,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        [\n                                            \"Java\",\n                                            \"AWS\",\n                                            \"MongoDB\"\n                                        ].map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#1A3044]\",\n                                                children: item\n                                            }, item, false, {\n                                                fileName: \"C:\\\\Users\\\\nechi\\\\Projects\\\\portfolio-v3\\\\components\\\\ui\\\\BentoGrid.tsx\",\n                                                lineNumber: 140,\n                                                columnNumber: 19\n                                            }, undefined))\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\nechi\\\\Projects\\\\portfolio-v3\\\\components\\\\ui\\\\BentoGrid.tsx\",\n                                    lineNumber: 135,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\nechi\\\\Projects\\\\portfolio-v3\\\\components\\\\ui\\\\BentoGrid.tsx\",\n                            lineNumber: 121,\n                            columnNumber: 13\n                        }, undefined),\n                        id === 6 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mt-5 relative\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"absolute -bottom-5 right-0\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_lottie__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        options: {\n                                            loop: copied,\n                                            autoplay: copied,\n                                            animationData: _data_confetti_json__WEBPACK_IMPORTED_MODULE_6__,\n                                            rendererSettings: {\n                                                preserveAspectRatio: \"xMidYmid slice\"\n                                            }\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\nechi\\\\Projects\\\\portfolio-v3\\\\components\\\\ui\\\\BentoGrid.tsx\",\n                                        lineNumber: 152,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\nechi\\\\Projects\\\\portfolio-v3\\\\components\\\\ui\\\\BentoGrid.tsx\",\n                                    lineNumber: 151,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MagicButton__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                    title: copied ? \"Email copied\" : \"Copy my email\",\n                                    icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoCopyOutline_react_icons_io5__WEBPACK_IMPORTED_MODULE_8__.IoCopyOutline, {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\nechi\\\\Projects\\\\portfolio-v3\\\\components\\\\ui\\\\BentoGrid.tsx\",\n                                        lineNumber: 164,\n                                        columnNumber: 23\n                                    }, void 0),\n                                    position: \"left\",\n                                    handleClick: handleCopy\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\nechi\\\\Projects\\\\portfolio-v3\\\\components\\\\ui\\\\BentoGrid.tsx\",\n                                    lineNumber: 162,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\nechi\\\\Projects\\\\portfolio-v3\\\\components\\\\ui\\\\BentoGrid.tsx\",\n                            lineNumber: 150,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\nechi\\\\Projects\\\\portfolio-v3\\\\components\\\\ui\\\\BentoGrid.tsx\",\n                    lineNumber: 103,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\nechi\\\\Projects\\\\portfolio-v3\\\\components\\\\ui\\\\BentoGrid.tsx\",\n            lineNumber: 71,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\nechi\\\\Projects\\\\portfolio-v3\\\\components\\\\ui\\\\BentoGrid.tsx\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, undefined);\n};\n_s(BentoGridItem, \"NE86rL3vg4NVcTTWDavsT0hUBJs=\");\n_c1 = BentoGridItem;\nvar _c, _c1;\n$RefreshReg$(_c, \"BentoGrid\");\n$RefreshReg$(_c1, \"BentoGridItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvdWkvQmVudG9HcmlkLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVnQztBQUMyQjtBQUNwQjtBQUNMO0FBQ0Q7QUFDZTtBQUNSO0FBQ1E7QUFFekMsTUFBTVEsWUFBWTtRQUFDLEVBQ3hCQyxTQUFTLEVBQ1RDLFFBQVEsRUFJVDtJQUNDLHFCQUNFLDhEQUFDQztRQUNDRixXQUFXVCw2Q0FBRUEsQ0FDWCx3RkFDQVM7a0JBR0RDOzs7Ozs7QUFHUCxFQUFFO0tBakJXRjtBQW1CTixNQUFNSSxnQkFBZ0I7UUFBQyxFQUM1QkMsRUFBRSxFQUNGSixTQUFTLEVBQ1RLLEtBQUssRUFDTEMsV0FBVyxFQUNYQyxHQUFHLEVBQ0hDLFlBQVksRUFDWkMsY0FBYyxFQUNkQyxRQUFRLEVBVVQ7O0lBQ0MsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUVyQyxNQUFNa0IsYUFBYTtRQUNqQkMsVUFBVUMsU0FBUyxDQUFDQyxTQUFTLENBQUM7UUFFOUJKLFVBQVU7SUFDWjtJQUVBLHFCQUNFLDhEQUFDVjtRQUNDRixXQUFXVCw2Q0FBRUEsQ0FDWCx1TUFDQVM7UUFFRmlCLE9BQU87WUFDTCw2QkFBNkI7WUFDN0JDLFlBQVk7WUFDWkMsaUJBQ0U7UUFDSjtrQkFFQSw0RUFBQ2pCO1lBQ0NGLFdBQVcsR0FBcUMsT0FBbENJLE9BQU8sS0FBSyx1QkFBc0I7OzhCQWFoRCw4REFBQ0Y7b0JBQ0NGLFdBQVcsOEJBQThELE9BQWhDSSxPQUFPLEtBQUs7OEJBRXBETSwwQkFDQyw4REFBQ0g7d0JBQ0NhLEtBQUtWO3dCQUNMVyxLQUFLWDt3QkFDTFYsV0FBVTs7Ozs7Ozs7Ozs7Z0JBS2ZJLE9BQU8sbUJBQ04sOERBQUNaLG9FQUEyQkE7OEJBQzFCLDRFQUFDVTt3QkFBSUYsV0FBVTs7Ozs7Ozs7Ozs7OEJBSW5CLDhEQUFDRTtvQkFDQ0YsV0FBV1QsNkNBQUVBLENBQ1hrQixnQkFBZ0I7O3NDQUdsQiw4REFBQ1A7NEJBQ0NGLFdBQVU7c0NBRVRNOzs7Ozs7c0NBRUgsOERBQUNKOzRCQUFJRixXQUFVO3NDQUNaSzs7Ozs7O3dCQUlGRCxPQUFPLG1CQUFLLDhEQUFDWCxpREFBU0E7Ozs7O3dCQUV0QlcsT0FBTyxtQkFDTiw4REFBQ0Y7NEJBQ0NGLFdBQVU7OzhDQUVWLDhEQUFDRTtvQ0FDQ0YsV0FBVTs7d0NBRVQ7NENBQUM7NENBQVk7NENBQVc7eUNBQWEsQ0FBQ3NCLEdBQUcsQ0FBQ0MsQ0FBQUEscUJBQ3pDLDhEQUFDQztnREFBZ0J4QixXQUFVOzBEQUN4QnVCOytDQURRQTs7Ozs7c0RBSWIsOERBQUNDOzRDQUFLeEIsV0FBVTs7Ozs7Ozs7Ozs7OzhDQUdsQiw4REFBQ0U7b0NBQ0NGLFdBQVU7O3NEQUVWLDhEQUFDd0I7NENBQUt4QixXQUFVOzs7Ozs7d0NBQ2Y7NENBQUM7NENBQVE7NENBQU87eUNBQVUsQ0FBQ3NCLEdBQUcsQ0FBQ0MsQ0FBQUEscUJBQzlCLDhEQUFDQztnREFBZ0J4QixXQUFVOzBEQUN4QnVCOytDQURRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBU2xCbkIsT0FBTyxtQkFDTiw4REFBQ0Y7NEJBQUlGLFdBQVU7OzhDQUNiLDhEQUFDRTtvQ0FBSUYsV0FBWTs4Q0FDZiw0RUFBQ04sb0RBQU1BO3dDQUFDK0IsU0FBUzs0Q0FDZkMsTUFBTWY7NENBQ05nQixVQUFVaEI7NENBQ1ZmLGVBQWVBLGdEQUFhQTs0Q0FDNUJnQyxrQkFBa0I7Z0RBQ2hCQyxxQkFBcUI7NENBQ3ZCO3dDQUNGOzs7Ozs7Ozs7Ozs4Q0FHRiw4REFBQ2hDLG9EQUFXQTtvQ0FDVlEsT0FBT00sU0FBUyxpQkFBaUI7b0NBQ2pDbUIsb0JBQU0sOERBQUNoQywrRkFBYUE7Ozs7O29DQUNwQmlDLFVBQVM7b0NBQ1RDLGFBQWFuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRN0IsRUFBRTtHQS9JV1Y7TUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91aS9CZW50b0dyaWQudHN4PzVlY2MiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcblxyXG5pbXBvcnQgeyBjbiB9IGZyb20gXCJAL3V0aWxzL2NuXCI7XHJcbmltcG9ydCB7IEJhY2tncm91bmRHcmFkaWVudEFuaW1hdGlvbiB9IGZyb20gXCIuL0dyYWRpZW50QmdcIjtcclxuaW1wb3J0IHsgR2xvYmVEZW1vIH0gZnJvbSBcIi4vR3JpZEdsb2JlXCJcclxuaW1wb3J0IExvdHRpZSBmcm9tIFwicmVhY3QtbG90dGllXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBhbmltYXRpb25EYXRhIGZyb20gJ0AvZGF0YS9jb25mZXR0aS5qc29uJ1xyXG5pbXBvcnQgTWFnaWNCdXR0b24gZnJvbSBcIi4vTWFnaWNCdXR0b25cIjtcclxuaW1wb3J0IHsgSW9Db3B5T3V0bGluZSB9IGZyb20gXCJyZWFjdC1pY29ucy9pbzVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBCZW50b0dyaWQgPSAoe1xyXG4gIGNsYXNzTmFtZSxcclxuICBjaGlsZHJlbixcclxufToge1xyXG4gIGNsYXNzTmFtZT86IHN0cmluZztcclxuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZTtcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgXCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy02IGxnOmdyaWQtY29scy01IG1kOmdyaWQtcm93LTcgZ2FwLTQgbGc6Z2FwLTggbXgtYXV0byBcIixcclxuICAgICAgICBjbGFzc05hbWVcclxuICAgICAgKX1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBCZW50b0dyaWRJdGVtID0gKHtcclxuICBpZCxcclxuICBjbGFzc05hbWUsXHJcbiAgdGl0bGUsXHJcbiAgZGVzY3JpcHRpb24sXHJcbiAgaW1nLFxyXG4gIGltZ0NsYXNzTmFtZSxcclxuICB0aXRsZUNsYXNzTmFtZSxcclxuICBzcGFyZUltZyxcclxufToge1xyXG4gIGlkOiBudW1iZXIsXHJcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gIHRpdGxlPzogc3RyaW5nIHwgUmVhY3QuUmVhY3ROb2RlO1xyXG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgUmVhY3QuUmVhY3ROb2RlO1xyXG4gIGltZz86IHN0cmluZztcclxuICBpbWdDbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgdGl0bGVDbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgc3BhcmVJbWc/OiBzdHJpbmc7XHJcbn0pID0+IHtcclxuICBjb25zdCBbY29waWVkLCBzZXRDb3BpZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDb3B5ID0gKCkgPT4ge1xyXG4gICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoJ3NjYmRldjIwMjFAZ21haWwuY29tJyk7XHJcblxyXG4gICAgc2V0Q29waWVkKHRydWUpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICBcInJvdy1zcGFuLTEgcm91bmRlZC0zeGwgcmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuIGdyb3VwL2JlbnRvIGhvdmVyOnNoYWRvdy14bCB0cmFuc2l0aW9uIGR1cmF0aW9uLTIwMCBzaGFkb3ctaW5wdXQgZGFyazpzaGFkb3ctbm9uZSBib3JkZXIgYm9yZGVyLXdoaXRlL1swLjFdIGp1c3RpZnktYmV0d2VlbiBmbGV4IGZsZXgtY29sIHNwYWNlLXktNFwiLFxyXG4gICAgICAgIGNsYXNzTmFtZVxyXG4gICAgICApfVxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQ6IFwicmdiKDQsNywyOSlcIixcclxuICAgICAgICBiYWNrZ3JvdW5kOiBcIiMwQzE2MUZcIixcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XHJcbiAgICAgICAgICBcImxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgxMiwgMjIsIDMxLCAxKSAwJSwgcmdiYSgxMiwxNCwzNSwxKSAxMDAlKVwiLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtpZCA9PT0gNiAmJiAnZmxleCBqdXN0aWZ5LWNlbnRlcid9IGgtZnVsbGB9XHJcbiAgICAgID5cclxuICAgICAgICB7LyogPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBhYnNvbHV0ZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2ltZyAmJiAoXHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9e2ltZ31cclxuICAgICAgICAgICAgICBhbHQ9e2ltZ31cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuKGltZ0NsYXNzTmFtZSwgJ29iamVjdC1jb3Zlciwgb2JqZWN0LWNlbnRlcicpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgYWJzb2x1dGUgcmlnaHQtMCAtYm90dG9tLTUgJHtpZCA9PT0gNSAmJiAndy1mdWxsIG9wYWN0aXktODAnfWB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3NwYXJlSW1nICYmIChcclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHNyYz17c3BhcmVJbWd9XHJcbiAgICAgICAgICAgICAgYWx0PXtzcGFyZUltZ31cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9J29iamVjdC1jb3Zlciwgb2JqZWN0LWNlbnRlciB3LWZ1bGwgaC1mdWxsJ1xyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAge2lkID09PSA2ICYmIChcclxuICAgICAgICAgIDxCYWNrZ3JvdW5kR3JhZGllbnRBbmltYXRpb24+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgei01MCBpbnNldC0wIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtd2hpdGUgZm9udC1ib2xkIHB4LTQgcG9pbnRlci1ldmVudHMtbm9uZSB0ZXh0LTN4bCB0ZXh0LWNlbnRlciBtZDp0ZXh0LTR4bCBsZzp0ZXh0LTd4bFwiPjwvZGl2PlxyXG4gICAgICAgICAgPC9CYWNrZ3JvdW5kR3JhZGllbnRBbmltYXRpb24+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICAgICAgdGl0bGVDbGFzc05hbWUsICdncm91cC1ob3Zlci9iZW50bzp0cmFuc2xhdGUteC0yIHRyYW5zaXRpb24gZHVyYXRpb24tMjAwIHJlbGF0aXZlIG1kOmgtZnVsbCBtaW4taC00MCBmbGV4IGZsZXgtY29sIHB4LTUgcC01IGxnOnAtMTAnXHJcbiAgICAgICAgICApfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1zYW5zIGZvbnQtZXh0cmFMaWdodCB0ZXh0LVsjYzFjMmQzXSB0ZXh0LXNtIG1kOnRleHQteHMgbGc6dGV4dC1iYXNlIHotMTBcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7ZGVzY3JpcHRpb259XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1zYW5zIGZvbnQtYm9sZCB0ZXh0LWxnIGxnOnRleHQtM3hsIG1heC13LTk2IHotMTBcIj5cclxuICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgIHtpZCA9PT0gMiAmJiA8R2xvYmVEZW1vIC8+fVxyXG5cclxuICAgICAgICAgIHtpZCA9PT0gMyAmJiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGdhcC0xIGxnOmdhcC01IHctZml0IGFic29sdXRlIC1yaWdodC0zIGxnOi1yaWdodC0yXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTMgbGc6Z2FwLThcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtbJ1JlYWN0LmpzJywgJ05leHQuanMnLCAnVHlwZVNjcmlwdCddLm1hcChpdGVtID0+IChcclxuICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtpdGVtfSBjbGFzc05hbWU9XCJweS0yIGxnOnB5LTQgbGc6cHgtMyBweC0zIHRleHQteHMgbGc6dGV4dC1iYXNlIG9wYWNpdHktNTAgbGc6b3BhY2l0eS0xMDAgcm91bmRlZC1sZyB0ZXh0LWNlbnRlciBiZy1bIzFBMzA0NF1cIj5cclxuICAgICAgICAgICAgICAgICAgICB7aXRlbX1cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJweS00IHB4LTMgcm91bmRlZC1sZyB0ZXh0LWNlbnRlciBiZy1bIzFBMzA0NF1cIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC0zIGxnOmdhcC04XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJweS00IHB4LTMgcm91bmRlZC1sZyB0ZXh0LWNlbnRlciBiZy1bIzFBMzA0NF1cIiAvPlxyXG4gICAgICAgICAgICAgICAge1snSmF2YScsICdBV1MnLCAnTW9uZ29EQiddLm1hcChpdGVtID0+IChcclxuICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtpdGVtfSBjbGFzc05hbWU9XCJweS0yIGxnOnB5LTQgbGc6cHgtMyBweC0zIHRleHQteHMgbGc6dGV4dC1iYXNlIG9wYWNpdHktNTAgbGc6b3BhY2l0eS0xMDAgcm91bmRlZC1sZyB0ZXh0LWNlbnRlciBiZy1bIzFBMzA0NF1cIj5cclxuICAgICAgICAgICAgICAgICAgICB7aXRlbX1cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcblxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAge2lkID09PSA2ICYmIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC01IHJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BhYnNvbHV0ZSAtYm90dG9tLTUgcmlnaHQtMGB9PlxyXG4gICAgICAgICAgICAgICAgPExvdHRpZSBvcHRpb25zPXt7XHJcbiAgICAgICAgICAgICAgICAgIGxvb3A6IGNvcGllZCxcclxuICAgICAgICAgICAgICAgICAgYXV0b3BsYXk6IGNvcGllZCxcclxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uRGF0YTogYW5pbWF0aW9uRGF0YSxcclxuICAgICAgICAgICAgICAgICAgcmVuZGVyZXJTZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW86ICd4TWlkWW1pZCBzbGljZScsXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH19IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxNYWdpY0J1dHRvblxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e2NvcGllZCA/ICdFbWFpbCBjb3BpZWQnIDogJ0NvcHkgbXkgZW1haWwnfVxyXG4gICAgICAgICAgICAgICAgaWNvbj17PElvQ29weU91dGxpbmUgLz59XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgICAgICAgICAgaGFuZGxlQ2xpY2s9e2hhbmRsZUNvcHl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJjbiIsIkJhY2tncm91bmRHcmFkaWVudEFuaW1hdGlvbiIsIkdsb2JlRGVtbyIsIkxvdHRpZSIsInVzZVN0YXRlIiwiYW5pbWF0aW9uRGF0YSIsIk1hZ2ljQnV0dG9uIiwiSW9Db3B5T3V0bGluZSIsIkJlbnRvR3JpZCIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwiZGl2IiwiQmVudG9HcmlkSXRlbSIsImlkIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltZyIsImltZ0NsYXNzTmFtZSIsInRpdGxlQ2xhc3NOYW1lIiwic3BhcmVJbWciLCJjb3BpZWQiLCJzZXRDb3BpZWQiLCJoYW5kbGVDb3B5IiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0Iiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwiYmFja2dyb3VuZENvbG9yIiwic3JjIiwiYWx0IiwibWFwIiwiaXRlbSIsInNwYW4iLCJvcHRpb25zIiwibG9vcCIsImF1dG9wbGF5IiwicmVuZGVyZXJTZXR0aW5ncyIsInByZXNlcnZlQXNwZWN0UmF0aW8iLCJpY29uIiwicG9zaXRpb24iLCJoYW5kbGVDbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ui/BentoGrid.tsx\n"));

/***/ })

});