"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[locale]/flights/page",{

/***/ "(app-pages-browser)/./src/app/[locale]/flights/page.tsx":
/*!*******************************************!*\
  !*** ./src/app/[locale]/flights/page.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Flights; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page.module.css */ \"(app-pages-browser)/./src/app/[locale]/flights/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_pages_main_page_date_picker_section_TicketFormComponent_FlightForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/pages/main_page/date_picker_section/TicketFormComponent/FlightForm */ \"(app-pages-browser)/./src/app/[locale]/components/pages/main_page/date_picker_section/TicketFormComponent/FlightForm.tsx\");\n/* harmony import */ var _components_layout_container_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout/container/Container */ \"(app-pages-browser)/./src/app/[locale]/components/layout/container/Container.tsx\");\n/* harmony import */ var _components_pages_main_page_offer_section_OfferBlock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/pages/main_page/offer_section/OfferBlock */ \"(app-pages-browser)/./src/app/[locale]/components/pages/main_page/offer_section/OfferBlock.tsx\");\n/* harmony import */ var _components_darker_filter_DarkerFilter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/darker_filter/DarkerFilter */ \"(app-pages-browser)/./src/app/[locale]/components/darker_filter/DarkerFilter.tsx\");\n/* harmony import */ var _components_cards_main_cards_MainCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/cards/main_cards/MainCard */ \"(app-pages-browser)/./src/app/[locale]/components/cards/main_cards/MainCard.tsx\");\n/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next-intl */ \"(app-pages-browser)/./node_modules/next-intl/dist/development/index.react-client.js\");\n/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_intl__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _services_tours__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/services/tours */ \"(app-pages-browser)/./src/services/tours.ts\");\n/* harmony import */ var _services_home__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/services/home */ \"(app-pages-browser)/./src/services/home.ts\");\n/* harmony import */ var _constants_default_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/constants/default_api */ \"(app-pages-browser)/./src/constants/default_api.ts\");\n/* harmony import */ var _constants_content__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/constants/content */ \"(app-pages-browser)/./src/constants/content.ts\");\n/* harmony import */ var _constants_locale__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/constants/locale */ \"(app-pages-browser)/./src/constants/locale.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Flights() {\n    _s();\n    const t = (0,next_intl__WEBPACK_IMPORTED_MODULE_14__.useTranslations)(\"OffersSwiperTitle\");\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_8__.usePathname)();\n    let locale;\n    if (pathname.includes(\"ru\")) {\n        locale = \"/ru\";\n    } else if (pathname.includes(\"en\")) {\n        locale = \"/en\";\n    } else {\n        locale = \"/kg\";\n    }\n    const [flights, setFlights] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [homeResultsArr, setHomeResultsArr] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const loadData = async ()=>{\n            try {\n                const flightsArr = await (0,_services_tours__WEBPACK_IMPORTED_MODULE_9__.axiosGetTours)(_constants_content__WEBPACK_IMPORTED_MODULE_12__.flightsApi);\n                setFlights(flightsArr);\n                const homeResults = await (0,_services_home__WEBPACK_IMPORTED_MODULE_10__.axiosGetBestOffers)();\n                setHomeResultsArr(homeResults.best_choices);\n            } catch (error) {\n                console.error(\"Ошибка загрузки данных: \", error);\n                setError(\"Не удалось загрузить данные\");\n            }\n        };\n        loadData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().air_tickets_page_main),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().ticket_picker_block),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_darker_filter_DarkerFilter__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/rustemibraimov/Desktop/atlas/src/app/[locale]/flights/page.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_container_Container__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pages_main_page_date_picker_section_TicketFormComponent_FlightForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/rustemibraimov/Desktop/atlas/src/app/[locale]/flights/page.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/rustemibraimov/Desktop/atlas/src/app/[locale]/flights/page.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rustemibraimov/Desktop/atlas/src/app/[locale]/flights/page.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().cards_section),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_container_Container__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    isVisible: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().cards_flex),\n                        children: flights && flights.map((offer, index)=>{\n                            let title;\n                            if (locale === \"/kg\") {\n                                title = offer.title_ky;\n                            } else if (locale === \"/ru\") {\n                                title = offer.title_ru;\n                            } else {\n                                title = offer.title_en;\n                            }\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_cards_main_cards_MainCard__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                imageSrc: _constants_default_api__WEBPACK_IMPORTED_MODULE_11__.IMAGE_API_URL + offer.image.image,\n                                title: (0,_constants_locale__WEBPACK_IMPORTED_MODULE_13__.translate)(offer.title_ru, offer.title_ky, offer.title_en),\n                                rating: offer.rating,\n                                commentQuantity: offer.rating_quantity,\n                                desc: (0,_constants_locale__WEBPACK_IMPORTED_MODULE_13__.translate)(offer.cityInfo.country.name_ru, offer.cityInfo.country.name_ky, offer.cityInfo.country.name_en),\n                                linkTo: offer.linkTo,\n                                index: offer.id\n                            }, offer.linkTo + offer.id, false, {\n                                fileName: \"/Users/rustemibraimov/Desktop/atlas/src/app/[locale]/flights/page.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 19\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/rustemibraimov/Desktop/atlas/src/app/[locale]/flights/page.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/rustemibraimov/Desktop/atlas/src/app/[locale]/flights/page.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/rustemibraimov/Desktop/atlas/src/app/[locale]/flights/page.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_container_Container__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    children: homeResultsArr && homeResultsArr.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pages_main_page_offer_section_OfferBlock__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        offerTitle: t(\"bestOffer\"),\n                        slides: homeResultsArr\n                    }, void 0, false, {\n                        fileName: \"/Users/rustemibraimov/Desktop/atlas/src/app/[locale]/flights/page.tsx\",\n                        lineNumber: 109,\n                        columnNumber: 13\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false)\n                }, void 0, false, {\n                    fileName: \"/Users/rustemibraimov/Desktop/atlas/src/app/[locale]/flights/page.tsx\",\n                    lineNumber: 107,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/rustemibraimov/Desktop/atlas/src/app/[locale]/flights/page.tsx\",\n                lineNumber: 106,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rustemibraimov/Desktop/atlas/src/app/[locale]/flights/page.tsx\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, this);\n}\n_s(Flights, \"8to3MKE8FffpdJo2Wbs0in059ao=\", false, function() {\n    return [\n        next_intl__WEBPACK_IMPORTED_MODULE_14__.useTranslations,\n        next_navigation__WEBPACK_IMPORTED_MODULE_8__.usePathname\n    ];\n});\n_c = Flights;\nvar _c;\n$RefreshReg$(_c, \"Flights\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvW2xvY2FsZV0vZmxpZ2h0cy9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbUQ7QUFDWjtBQUNtRTtBQUN6QztBQUNnQjtBQUViO0FBQ0w7QUFFbkI7QUFDRTtBQUNHO0FBRWtCO0FBQ1g7QUFDRztBQUNaO0FBRWhDLFNBQVNnQjs7SUFDdEIsTUFBTUMsSUFBSVIsMkRBQWVBLENBQUM7SUFFMUIsTUFBTVMsV0FBV1IsNERBQVdBO0lBRTVCLElBQUlTO0lBRUosSUFBSUQsU0FBU0UsUUFBUSxDQUFDLE9BQU87UUFDM0JELFNBQVM7SUFDWCxPQUFPLElBQUlELFNBQVNFLFFBQVEsQ0FBQyxPQUFPO1FBQ2xDRCxTQUFTO0lBQ1gsT0FBTztRQUNMQSxTQUFTO0lBQ1g7SUFFQSxNQUFNLENBQUNFLFNBQVNDLFdBQVcsR0FBR3BCLCtDQUFRQSxDQUFXLEVBQUU7SUFDbkQsTUFBTSxDQUFDcUIsZ0JBQWdCQyxrQkFBa0IsR0FBR3RCLCtDQUFRQSxDQUFRLEVBQUU7SUFDOUQsTUFBTSxDQUFDdUIsT0FBT0MsU0FBUyxHQUFHeEIsK0NBQVFBLENBQUM7SUFFbkNELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTTBCLFdBQVc7WUFDZixJQUFJO2dCQUNGLE1BQU1DLGFBQWEsTUFBTWpCLDhEQUFhQSxDQUFDRywyREFBVUE7Z0JBQ2pEUSxXQUFXTTtnQkFFWCxNQUFNQyxjQUFjLE1BQU1qQixtRUFBa0JBO2dCQUM1Q1ksa0JBQWtCSyxZQUFZQyxZQUFZO1lBQzVDLEVBQUUsT0FBT0wsT0FBTztnQkFDZE0sUUFBUU4sS0FBSyxDQUFDLDRCQUE0QkE7Z0JBQzFDQyxTQUFTO1lBQ1g7UUFDRjtRQUVBQztJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDSztRQUFLQyxXQUFXOUIsK0VBQTRCOzswQkFDM0MsOERBQUNnQztnQkFBUUYsV0FBVzlCLDZFQUEwQjs7a0NBQzVDLDhEQUFDSSw4RUFBWUE7Ozs7O2tDQUNiLDhEQUFDRiw4RUFBU0E7a0NBQ1IsNEVBQUNELHNIQUFVQTs7Ozs7Ozs7Ozs7Ozs7OzswQkFJZiw4REFBQytCO2dCQUFRRixXQUFXOUIsdUVBQW9COzBCQUN0Qyw0RUFBQ0UsOEVBQVNBO29CQUFDaUMsV0FBVzs4QkFDcEIsNEVBQUNDO3dCQUFJTixXQUFXOUIsb0VBQWlCO2tDQUM5QmtCLFdBQ0NBLFFBQVFvQixHQUFHLENBQUMsQ0FBQ0MsT0FBT0M7NEJBQ2xCLElBQUlDOzRCQUVKLElBQUl6QixXQUFXLE9BQU87Z0NBQ3BCeUIsUUFBUUYsTUFBTUcsUUFBUTs0QkFDeEIsT0FBTyxJQUFJMUIsV0FBVyxPQUFPO2dDQUMzQnlCLFFBQVFGLE1BQU1JLFFBQVE7NEJBQ3hCLE9BQU87Z0NBQ0xGLFFBQVFGLE1BQU1LLFFBQVE7NEJBQ3hCOzRCQUVBLHFCQUNFLDhEQUFDdkMsNkVBQVFBO2dDQUVQd0MsVUFBVW5DLGtFQUFhQSxHQUFHNkIsTUFBTU8sS0FBSyxDQUFDQSxLQUFLO2dDQUMzQ0wsT0FBTzdCLDZEQUFTQSxDQUNkMkIsTUFBTUksUUFBUSxFQUNkSixNQUFNRyxRQUFRLEVBQ2RILE1BQU1LLFFBQVE7Z0NBRWhCRyxRQUFRUixNQUFNUSxNQUFNO2dDQUNwQkMsaUJBQWlCVCxNQUFNVSxlQUFlO2dDQUN0Q0MsTUFBTXRDLDZEQUFTQSxDQUNiMkIsTUFBTVksUUFBUSxDQUFDQyxPQUFPLENBQUNDLE9BQU8sRUFDOUJkLE1BQU1ZLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDRSxPQUFPLEVBQzlCZixNQUFNWSxRQUFRLENBQUNDLE9BQU8sQ0FBQ0csT0FBTztnQ0FFaENDLFFBQVFqQixNQUFNaUIsTUFBTTtnQ0FDcEJoQixPQUFPRCxNQUFNa0IsRUFBRTsrQkFmVmxCLE1BQU1pQixNQUFNLEdBQUdqQixNQUFNa0IsRUFBRTs7Ozs7d0JBa0JsQzs7Ozs7Ozs7Ozs7Ozs7OzswQkFLUiw4REFBQ3pCOzBCQUNDLDRFQUFDOUIsOEVBQVNBOzhCQUNQa0Isa0JBQWtCQSxlQUFlc0MsTUFBTSxHQUFHLGtCQUN6Qyw4REFBQ3ZELDRGQUFXQTt3QkFBQ3dELFlBQVk3QyxFQUFFO3dCQUFjOEMsUUFBUXhDOzs7Ozs2Q0FFakQ7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTVo7R0FoR3dCUDs7UUFDWlAsdURBQWVBO1FBRVJDLHdEQUFXQTs7O0tBSE5NIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvW2xvY2FsZV0vZmxpZ2h0cy9wYWdlLnRzeD80MjlkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9wYWdlLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBUaWNrZXRGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL3BhZ2VzL21haW5fcGFnZS9kYXRlX3BpY2tlcl9zZWN0aW9uL1RpY2tldEZvcm1Db21wb25lbnQvRmxpZ2h0Rm9ybVwiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXQvY29udGFpbmVyL0NvbnRhaW5lclwiO1xuaW1wb3J0IE9mZmVyc0Jsb2NrIGZyb20gXCIuLi9jb21wb25lbnRzL3BhZ2VzL21haW5fcGFnZS9vZmZlcl9zZWN0aW9uL09mZmVyQmxvY2tcIjtcblxuaW1wb3J0IERhcmtlckZpbHRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9kYXJrZXJfZmlsdGVyL0RhcmtlckZpbHRlclwiO1xuaW1wb3J0IE1haW5DYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL2NhcmRzL21haW5fY2FyZHMvTWFpbkNhcmRcIjtcblxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb25zIH0gZnJvbSBcIm5leHQtaW50bFwiO1xuaW1wb3J0IHsgdXNlUGF0aG5hbWUgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyBheGlvc0dldFRvdXJzIH0gZnJvbSBcIkAvc2VydmljZXMvdG91cnNcIjtcbmltcG9ydCB7IEZsaWdodCwgVG91ciB9IGZyb20gXCJAL3R5cGVzL3RvdXJcIjtcbmltcG9ydCB7IGF4aW9zR2V0QmVzdE9mZmVycywgYXhpb3NHZXRIb21lIH0gZnJvbSBcIkAvc2VydmljZXMvaG9tZVwiO1xuaW1wb3J0IHsgSU1BR0VfQVBJX1VSTCB9IGZyb20gXCJAL2NvbnN0YW50cy9kZWZhdWx0X2FwaVwiO1xuaW1wb3J0IHsgZmxpZ2h0c0FwaSwgdG91cnNBcGkgfSBmcm9tIFwiQC9jb25zdGFudHMvY29udGVudFwiO1xuaW1wb3J0IHsgdHJhbnNsYXRlIH0gZnJvbSBcIkAvY29uc3RhbnRzL2xvY2FsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGbGlnaHRzKCkge1xuICBjb25zdCB0ID0gdXNlVHJhbnNsYXRpb25zKFwiT2ZmZXJzU3dpcGVyVGl0bGVcIik7XG5cbiAgY29uc3QgcGF0aG5hbWUgPSB1c2VQYXRobmFtZSgpO1xuXG4gIGxldCBsb2NhbGU6IHN0cmluZztcblxuICBpZiAocGF0aG5hbWUuaW5jbHVkZXMoXCJydVwiKSkge1xuICAgIGxvY2FsZSA9IFwiL3J1XCI7XG4gIH0gZWxzZSBpZiAocGF0aG5hbWUuaW5jbHVkZXMoXCJlblwiKSkge1xuICAgIGxvY2FsZSA9IFwiL2VuXCI7XG4gIH0gZWxzZSB7XG4gICAgbG9jYWxlID0gXCIva2dcIjtcbiAgfVxuXG4gIGNvbnN0IFtmbGlnaHRzLCBzZXRGbGlnaHRzXSA9IHVzZVN0YXRlPEZsaWdodFtdPihbXSk7XG4gIGNvbnN0IFtob21lUmVzdWx0c0Fyciwgc2V0SG9tZVJlc3VsdHNBcnJdID0gdXNlU3RhdGU8YW55W10+KFtdKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGxvYWREYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZmxpZ2h0c0FyciA9IGF3YWl0IGF4aW9zR2V0VG91cnMoZmxpZ2h0c0FwaSk7XG4gICAgICAgIHNldEZsaWdodHMoZmxpZ2h0c0Fycik7XG5cbiAgICAgICAgY29uc3QgaG9tZVJlc3VsdHMgPSBhd2FpdCBheGlvc0dldEJlc3RPZmZlcnMoKTtcbiAgICAgICAgc2V0SG9tZVJlc3VsdHNBcnIoaG9tZVJlc3VsdHMuYmVzdF9jaG9pY2VzKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCLQntGI0LjQsdC60LAg0LfQsNCz0YDRg9C30LrQuCDQtNCw0L3QvdGL0YU6IFwiLCBlcnJvcik7XG4gICAgICAgIHNldEVycm9yKFwi0J3QtSDRg9C00LDQu9C+0YHRjCDQt9Cw0LPRgNGD0LfQuNGC0Ywg0LTQsNC90L3Ri9C1XCIpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBsb2FkRGF0YSgpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5haXJfdGlja2V0c19wYWdlX21haW59PlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMudGlja2V0X3BpY2tlcl9ibG9ja30+XG4gICAgICAgIDxEYXJrZXJGaWx0ZXIgLz5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICA8VGlja2V0Rm9ybSAvPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuY2FyZHNfc2VjdGlvbn0+XG4gICAgICAgIDxDb250YWluZXIgaXNWaXNpYmxlPXt0cnVlfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRzX2ZsZXh9PlxuICAgICAgICAgICAge2ZsaWdodHMgJiZcbiAgICAgICAgICAgICAgZmxpZ2h0cy5tYXAoKG9mZmVyLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB0aXRsZTtcblxuICAgICAgICAgICAgICAgIGlmIChsb2NhbGUgPT09IFwiL2tnXCIpIHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlID0gb2ZmZXIudGl0bGVfa3k7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChsb2NhbGUgPT09IFwiL3J1XCIpIHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlID0gb2ZmZXIudGl0bGVfcnU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlID0gb2ZmZXIudGl0bGVfZW47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxNYWluQ2FyZFxuICAgICAgICAgICAgICAgICAgICBrZXk9e29mZmVyLmxpbmtUbyArIG9mZmVyLmlkfVxuICAgICAgICAgICAgICAgICAgICBpbWFnZVNyYz17SU1BR0VfQVBJX1VSTCArIG9mZmVyLmltYWdlLmltYWdlfVxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17dHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgIG9mZmVyLnRpdGxlX3J1LFxuICAgICAgICAgICAgICAgICAgICAgIG9mZmVyLnRpdGxlX2t5LFxuICAgICAgICAgICAgICAgICAgICAgIG9mZmVyLnRpdGxlX2VuXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIHJhdGluZz17b2ZmZXIucmF0aW5nfVxuICAgICAgICAgICAgICAgICAgICBjb21tZW50UXVhbnRpdHk9e29mZmVyLnJhdGluZ19xdWFudGl0eX1cbiAgICAgICAgICAgICAgICAgICAgZGVzYz17dHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgIG9mZmVyLmNpdHlJbmZvLmNvdW50cnkubmFtZV9ydSxcbiAgICAgICAgICAgICAgICAgICAgICBvZmZlci5jaXR5SW5mby5jb3VudHJ5Lm5hbWVfa3ksXG4gICAgICAgICAgICAgICAgICAgICAgb2ZmZXIuY2l0eUluZm8uY291bnRyeS5uYW1lX2VuXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIGxpbmtUbz17b2ZmZXIubGlua1RvfVxuICAgICAgICAgICAgICAgICAgICBpbmRleD17b2ZmZXIuaWR9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAge2hvbWVSZXN1bHRzQXJyICYmIGhvbWVSZXN1bHRzQXJyLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgICA8T2ZmZXJzQmxvY2sgb2ZmZXJUaXRsZT17dChcImJlc3RPZmZlclwiKX0gc2xpZGVzPXtob21lUmVzdWx0c0Fycn0gLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPD48Lz5cbiAgICAgICAgICApfVxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L21haW4+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIlRpY2tldEZvcm0iLCJDb250YWluZXIiLCJPZmZlcnNCbG9jayIsIkRhcmtlckZpbHRlciIsIk1haW5DYXJkIiwidXNlVHJhbnNsYXRpb25zIiwidXNlUGF0aG5hbWUiLCJheGlvc0dldFRvdXJzIiwiYXhpb3NHZXRCZXN0T2ZmZXJzIiwiSU1BR0VfQVBJX1VSTCIsImZsaWdodHNBcGkiLCJ0cmFuc2xhdGUiLCJGbGlnaHRzIiwidCIsInBhdGhuYW1lIiwibG9jYWxlIiwiaW5jbHVkZXMiLCJmbGlnaHRzIiwic2V0RmxpZ2h0cyIsImhvbWVSZXN1bHRzQXJyIiwic2V0SG9tZVJlc3VsdHNBcnIiLCJlcnJvciIsInNldEVycm9yIiwibG9hZERhdGEiLCJmbGlnaHRzQXJyIiwiaG9tZVJlc3VsdHMiLCJiZXN0X2Nob2ljZXMiLCJjb25zb2xlIiwibWFpbiIsImNsYXNzTmFtZSIsImFpcl90aWNrZXRzX3BhZ2VfbWFpbiIsInNlY3Rpb24iLCJ0aWNrZXRfcGlja2VyX2Jsb2NrIiwiY2FyZHNfc2VjdGlvbiIsImlzVmlzaWJsZSIsImRpdiIsImNhcmRzX2ZsZXgiLCJtYXAiLCJvZmZlciIsImluZGV4IiwidGl0bGUiLCJ0aXRsZV9reSIsInRpdGxlX3J1IiwidGl0bGVfZW4iLCJpbWFnZVNyYyIsImltYWdlIiwicmF0aW5nIiwiY29tbWVudFF1YW50aXR5IiwicmF0aW5nX3F1YW50aXR5IiwiZGVzYyIsImNpdHlJbmZvIiwiY291bnRyeSIsIm5hbWVfcnUiLCJuYW1lX2t5IiwibmFtZV9lbiIsImxpbmtUbyIsImlkIiwibGVuZ3RoIiwib2ZmZXJUaXRsZSIsInNsaWRlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/[locale]/flights/page.tsx\n"));

/***/ })

});