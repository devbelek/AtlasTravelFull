"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[locale]/about-us/page",{

/***/ "(app-pages-browser)/./src/app/[locale]/components/pages/about_page/faq_component/FaqComponent.tsx":
/*!*************************************************************************************!*\
  !*** ./src/app/[locale]/components/pages/about_page/faq_component/FaqComponent.tsx ***!
  \*************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _faq_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./faq.module.css */ \"(app-pages-browser)/./src/app/[locale]/components/pages/about_page/faq_component/faq.module.css\");\n/* harmony import */ var _faq_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_faq_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst FAQItem = (param)=>{\n    let { question, answer } = param;\n    _s();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggleOpen = ()=>{\n        setIsOpen(!isOpen);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_faq_module_css__WEBPACK_IMPORTED_MODULE_2___default().faqItem),\n        onClick: toggleOpen,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_faq_module_css__WEBPACK_IMPORTED_MODULE_2___default().question),\n                children: [\n                    question,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"\".concat(isOpen ? (_faq_module_css__WEBPACK_IMPORTED_MODULE_2___default().arrowOpen) : (_faq_module_css__WEBPACK_IMPORTED_MODULE_2___default().arrowClosed), \" \").concat((_faq_module_css__WEBPACK_IMPORTED_MODULE_2___default().arrow))\n                    }, void 0, false, {\n                        fileName: \"/Users/rustemibraimov/Desktop/atlas/src/app/[locale]/components/pages/about_page/faq_component/FaqComponent.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rustemibraimov/Desktop/atlas/src/app/[locale]/components/pages/about_page/faq_component/FaqComponent.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: isOpen ? (_faq_module_css__WEBPACK_IMPORTED_MODULE_2___default().answerOpen) : (_faq_module_css__WEBPACK_IMPORTED_MODULE_2___default().answerClosed),\n                style: {\n                    maxHeight: isOpen ? \"500px\" : \"0px\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: (_faq_module_css__WEBPACK_IMPORTED_MODULE_2___default().answer),\n                    children: answer\n                }, void 0, false, {\n                    fileName: \"/Users/rustemibraimov/Desktop/atlas/src/app/[locale]/components/pages/about_page/faq_component/FaqComponent.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/rustemibraimov/Desktop/atlas/src/app/[locale]/components/pages/about_page/faq_component/FaqComponent.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rustemibraimov/Desktop/atlas/src/app/[locale]/components/pages/about_page/faq_component/FaqComponent.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FAQItem, \"+sus0Lb0ewKHdwiUhiTAJFoFyQ0=\");\n_c = FAQItem;\nconst FAQ = ()=>{\n    const faqData = [\n        {\n            question: \"Какие направления вы предлагаете?\",\n            answer: \"Мы предлагаем туры по всему миру, включая пляжные, экскурсионные, горнолыжные и круизные маршруты...\"\n        },\n        {\n            question: \"Как можно оплатить тур?\",\n            answer: \"Вы можете оплатить тур различными способами: банковской картой (Visa, MasterCard, Мир), через банковский перевод, а также в рассрочку или с помощью электронных платежных систем. Для получения более подробной информации о способах оплаты свяжитесь с нашими менеджерами.\"\n        },\n        {\n            question: \"Можно ли изменить даты или маршрут поездки?\",\n            answer: \"Да, вы можете изменить даты или маршрут поездки. Однако это может зависеть от доступности новых дат и условий бронирования. Мы рекомендуем связываться с нами как можно раньше, чтобы минимизировать возможные штрафы и получить наилучшие варианты для изменения.\"\n        },\n        {\n            question: \"Есть ли поддержка во время поездки?\",\n            answer: \"Да, мы предоставляем круглосуточную поддержку нашим клиентам во время всей поездки. Вы можете связаться с нами по телефону или через мессенджеры, если возникнут вопросы или непредвиденные ситуации.\"\n        },\n        {\n            question: \"Вы помогаете с оформлением виз?\",\n            answer: \"Да, мы предоставляем помощь в оформлении виз для большинства направлений. Наши специалисты помогут вам собрать все необходимые документы, а также проконсультируют по требованиям консульств и срокам подачи заявок.\"\n        },\n        {\n            question: \"Предоставляете ли вы страховку для путешествий?\",\n            answer: \"Мы предлагаем туристические страховки, которые покрывают широкий спектр рисков: от медицинских расходов до страхования багажа и отмены поездки. Вы можете выбрать страховой пакет, который наиболее соответствует вашим потребностям.\"\n        },\n        {\n            question: \"Есть ли у вас специальные предложения и скидки?\",\n            answer: \"Да, у нас регулярно действуют специальные предложения и скидки на различные направления. Мы рекомендуем подписаться на нашу рассылку или следить за обновлениями на сайте, чтобы быть в курсе всех акций.\"\n        },\n        {\n            question: \"Что делать, если поездка отменяется?\",\n            answer: \"В случае отмены поездки, вы должны как можно быстрее связаться с нами. Мы поможем вам урегулировать все вопросы, связанные с возвратом средств, возможными штрафами и перенесением тура на другие даты. Условия возврата зависят от политики конкретных отелей и авиакомпаний, а также от времени отмены.\"\n        }\n    ];\n    const half = Math.ceil(faqData.length / 2);\n    const firstHalfData = faqData.slice(0, half);\n    const secondHalfData = faqData.slice(half, faqData.length);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_faq_module_css__WEBPACK_IMPORTED_MODULE_2___default().faqContainer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_faq_module_css__WEBPACK_IMPORTED_MODULE_2___default().faqContainerInner),\n                children: firstHalfData.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FAQItem, {\n                        question: item.question,\n                        answer: item.answer\n                    }, index, false, {\n                        fileName: \"/Users/rustemibraimov/Desktop/atlas/src/app/[locale]/components/pages/about_page/faq_component/FaqComponent.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/rustemibraimov/Desktop/atlas/src/app/[locale]/components/pages/about_page/faq_component/FaqComponent.tsx\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_faq_module_css__WEBPACK_IMPORTED_MODULE_2___default().faqContainerInner),\n                children: secondHalfData.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FAQItem, {\n                        question: item.question,\n                        answer: item.answer\n                    }, index, false, {\n                        fileName: \"/Users/rustemibraimov/Desktop/atlas/src/app/[locale]/components/pages/about_page/faq_component/FaqComponent.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/rustemibraimov/Desktop/atlas/src/app/[locale]/components/pages/about_page/faq_component/FaqComponent.tsx\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rustemibraimov/Desktop/atlas/src/app/[locale]/components/pages/about_page/faq_component/FaqComponent.tsx\",\n        lineNumber: 88,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = FAQ;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FAQ);\nvar _c, _c1;\n$RefreshReg$(_c, \"FAQItem\");\n$RefreshReg$(_c1, \"FAQ\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvW2xvY2FsZV0vY29tcG9uZW50cy9wYWdlcy9hYm91dF9wYWdlL2ZhcV9jb21wb25lbnQvRmFxQ29tcG9uZW50LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFpQztBQUNLO0FBT3RDLE1BQU1FLFVBQWtDO1FBQUMsRUFBRUMsUUFBUSxFQUFFQyxNQUFNLEVBQUU7O0lBQzNELE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUVyQyxNQUFNTyxhQUFhO1FBQ2pCRCxVQUFVLENBQUNEO0lBQ2I7SUFFQSxxQkFDRSw4REFBQ0c7UUFBSUMsV0FBV1IsZ0VBQWM7UUFBRVUsU0FBU0o7OzBCQUN2Qyw4REFBQ0M7Z0JBQUlDLFdBQVdSLGlFQUFlOztvQkFDNUJFO2tDQUNELDhEQUFDUzt3QkFBS0gsV0FBVyxHQUFxRFIsT0FBbERJLFNBQVNKLGtFQUFnQixHQUFHQSxvRUFBa0IsRUFBQyxLQUFnQixPQUFiQSw4REFBWTs7Ozs7Ozs7Ozs7OzBCQUlwRiw4REFBQ087Z0JBQ0NDLFdBQVdKLFNBQVNKLG1FQUFpQixHQUFHQSxxRUFBbUI7Z0JBQzNEaUIsT0FBTztvQkFBRUMsV0FBV2QsU0FBUyxVQUFVO2dCQUFNOzBCQUU3Qyw0RUFBQ2U7b0JBQUVYLFdBQVdSLCtEQUFhOzhCQUFHRzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJdEM7R0F2Qk1GO0tBQUFBO0FBOEJOLE1BQU1tQixNQUFnQjtJQUNwQixNQUFNQyxVQUFxQjtRQUN6QjtZQUNFbkIsVUFBVTtZQUNWQyxRQUNFO1FBQ0o7UUFDQTtZQUNFRCxVQUFVO1lBQ1ZDLFFBQ0U7UUFDSjtRQUNBO1lBQ0VELFVBQVU7WUFDVkMsUUFDRTtRQUNKO1FBQ0E7WUFDRUQsVUFBVTtZQUNWQyxRQUNFO1FBQ0o7UUFDQTtZQUNFRCxVQUFVO1lBQ1ZDLFFBQ0U7UUFDSjtRQUNBO1lBQ0VELFVBQVU7WUFDVkMsUUFDRTtRQUNKO1FBQ0E7WUFDRUQsVUFBVTtZQUNWQyxRQUNFO1FBQ0o7UUFDQTtZQUNFRCxVQUFVO1lBQ1ZDLFFBQ0U7UUFDSjtLQUNEO0lBRUQsTUFBTW1CLE9BQU9DLEtBQUtDLElBQUksQ0FBQ0gsUUFBUUksTUFBTSxHQUFHO0lBQ3hDLE1BQU1DLGdCQUFnQkwsUUFBUU0sS0FBSyxDQUFDLEdBQUdMO0lBQ3ZDLE1BQU1NLGlCQUFpQlAsUUFBUU0sS0FBSyxDQUFDTCxNQUFNRCxRQUFRSSxNQUFNO0lBRXpELHFCQUNFLDhEQUFDbEI7UUFBSUMsV0FBV1IscUVBQW1COzswQkFDakMsOERBQUNPO2dCQUFJQyxXQUFXUiwwRUFBd0I7MEJBQ3JDMEIsY0FBY0ssR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUN4Qiw4REFBQ2hDO3dCQUFvQkMsVUFBVThCLEtBQUs5QixRQUFRO3dCQUFFQyxRQUFRNkIsS0FBSzdCLE1BQU07dUJBQW5EOEI7Ozs7Ozs7Ozs7MEJBR2xCLDhEQUFDMUI7Z0JBQUlDLFdBQVdSLDBFQUF3QjswQkFDckM0QixlQUFlRyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ3pCLDhEQUFDaEM7d0JBQW9CQyxVQUFVOEIsS0FBSzlCLFFBQVE7d0JBQUVDLFFBQVE2QixLQUFLN0IsTUFBTTt1QkFBbkQ4Qjs7Ozs7Ozs7Ozs7Ozs7OztBQUt4QjtNQTlETWI7QUFnRU4sK0RBQWVBLEdBQUdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9bbG9jYWxlXS9jb21wb25lbnRzL3BhZ2VzL2Fib3V0X3BhZ2UvZmFxX2NvbXBvbmVudC9GYXFDb21wb25lbnQudHN4P2Y0ODQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vZmFxLm1vZHVsZS5jc3NcIjtcblxuaW50ZXJmYWNlIEZBUUl0ZW1Qcm9wcyB7XG4gIHF1ZXN0aW9uOiBzdHJpbmc7XG4gIGFuc3dlcjogc3RyaW5nO1xufVxuXG5jb25zdCBGQVFJdGVtOiBSZWFjdC5GQzxGQVFJdGVtUHJvcHM+ID0gKHsgcXVlc3Rpb24sIGFuc3dlciB9KSA9PiB7XG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgdG9nZ2xlT3BlbiA9ICgpID0+IHtcbiAgICBzZXRJc09wZW4oIWlzT3Blbik7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZhcUl0ZW19IG9uQ2xpY2s9e3RvZ2dsZU9wZW59PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5xdWVzdGlvbn0+XG4gICAgICAgIHtxdWVzdGlvbn1cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgJHtpc09wZW4gPyBzdHlsZXMuYXJyb3dPcGVuIDogc3R5bGVzLmFycm93Q2xvc2VkfSAke3N0eWxlcy5hcnJvd31gfT5cbiAgICAgICAgICBcbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17aXNPcGVuID8gc3R5bGVzLmFuc3dlck9wZW4gOiBzdHlsZXMuYW5zd2VyQ2xvc2VkfVxuICAgICAgICBzdHlsZT17eyBtYXhIZWlnaHQ6IGlzT3BlbiA/IFwiNTAwcHhcIiA6IFwiMHB4XCIgfX1cbiAgICAgID5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuYW5zd2VyfT57YW5zd2VyfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuaW50ZXJmYWNlIEZBUURhdGEge1xuICBxdWVzdGlvbjogc3RyaW5nO1xuICBhbnN3ZXI6IHN0cmluZztcbn1cblxuY29uc3QgRkFROiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgZmFxRGF0YTogRkFRRGF0YVtdID0gW1xuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcItCa0LDQutC40LUg0L3QsNC/0YDQsNCy0LvQtdC90LjRjyDQstGLINC/0YDQtdC00LvQsNCz0LDQtdGC0LU/XCIsXG4gICAgICBhbnN3ZXI6XG4gICAgICAgIFwi0JzRiyDQv9GA0LXQtNC70LDQs9Cw0LXQvCDRgtGD0YDRiyDQv9C+INCy0YHQtdC80YMg0LzQuNGA0YMsINCy0LrQu9GO0YfQsNGPINC/0LvRj9C20L3Ri9C1LCDRjdC60YHQutGD0YDRgdC40L7QvdC90YvQtSwg0LPQvtGA0L3QvtC70YvQttC90YvQtSDQuCDQutGA0YPQuNC30L3Ri9C1INC80LDRgNGI0YDRg9GC0YsuLi5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcItCa0LDQuiDQvNC+0LbQvdC+INC+0L/Qu9Cw0YLQuNGC0Ywg0YLRg9GAP1wiLFxuICAgICAgYW5zd2VyOlxuICAgICAgICBcItCS0Ysg0LzQvtC20LXRgtC1INC+0L/Qu9Cw0YLQuNGC0Ywg0YLRg9GAINGA0LDQt9C70LjRh9C90YvQvNC4INGB0L/QvtGB0L7QsdCw0LzQuDog0LHQsNC90LrQvtCy0YHQutC+0Lkg0LrQsNGA0YLQvtC5IChWaXNhLCBNYXN0ZXJDYXJkLCDQnNC40YApLCDRh9C10YDQtdC3INCx0LDQvdC60L7QstGB0LrQuNC5INC/0LXRgNC10LLQvtC0LCDQsCDRgtCw0LrQttC1INCyINGA0LDRgdGB0YDQvtGH0LrRgyDQuNC70Lgg0YEg0L/QvtC80L7RidGM0Y4g0Y3Qu9C10LrRgtGA0L7QvdC90YvRhSDQv9C70LDRgtC10LbQvdGL0YUg0YHQuNGB0YLQtdC8LiDQlNC70Y8g0L/QvtC70YPRh9C10L3QuNGPINCx0L7Qu9C10LUg0L/QvtC00YDQvtCx0L3QvtC5INC40L3RhNC+0YDQvNCw0YbQuNC4INC+INGB0L/QvtGB0L7QsdCw0YUg0L7Qv9C70LDRgtGLINGB0LLRj9C20LjRgtC10YHRjCDRgSDQvdCw0YjQuNC80Lgg0LzQtdC90LXQtNC20LXRgNCw0LzQuC5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcItCc0L7QttC90L4g0LvQuCDQuNC30LzQtdC90LjRgtGMINC00LDRgtGLINC40LvQuCDQvNCw0YDRiNGA0YPRgiDQv9C+0LXQt9C00LrQuD9cIixcbiAgICAgIGFuc3dlcjpcbiAgICAgICAgXCLQlNCwLCDQstGLINC80L7QttC10YLQtSDQuNC30LzQtdC90LjRgtGMINC00LDRgtGLINC40LvQuCDQvNCw0YDRiNGA0YPRgiDQv9C+0LXQt9C00LrQuC4g0J7QtNC90LDQutC+INGN0YLQviDQvNC+0LbQtdGCINC30LDQstC40YHQtdGC0Ywg0L7RgiDQtNC+0YHRgtGD0L/QvdC+0YHRgtC4INC90L7QstGL0YUg0LTQsNGCINC4INGD0YHQu9C+0LLQuNC5INCx0YDQvtC90LjRgNC+0LLQsNC90LjRjy4g0JzRiyDRgNC10LrQvtC80LXQvdC00YPQtdC8INGB0LLRj9C30YvQstCw0YLRjNGB0Y8g0YEg0L3QsNC80Lgg0LrQsNC6INC80L7QttC90L4g0YDQsNC90YzRiNC1LCDRh9GC0L7QsdGLINC80LjQvdC40LzQuNC30LjRgNC+0LLQsNGC0Ywg0LLQvtC30LzQvtC20L3Ri9C1INGI0YLRgNCw0YTRiyDQuCDQv9C+0LvRg9GH0LjRgtGMINC90LDQuNC70YPRh9GI0LjQtSDQstCw0YDQuNCw0L3RgtGLINC00LvRjyDQuNC30LzQtdC90LXQvdC40Y8uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCLQldGB0YLRjCDQu9C4INC/0L7QtNC00LXRgNC20LrQsCDQstC+INCy0YDQtdC80Y8g0L/QvtC10LfQtNC60Lg/XCIsXG4gICAgICBhbnN3ZXI6XG4gICAgICAgIFwi0JTQsCwg0LzRiyDQv9GA0LXQtNC+0YHRgtCw0LLQu9GP0LXQvCDQutGA0YPQs9C70L7RgdGD0YLQvtGH0L3Rg9GOINC/0L7QtNC00LXRgNC20LrRgyDQvdCw0YjQuNC8INC60LvQuNC10L3RgtCw0Lwg0LLQviDQstGA0LXQvNGPINCy0YHQtdC5INC/0L7QtdC30LTQutC4LiDQktGLINC80L7QttC10YLQtSDRgdCy0Y/Qt9Cw0YLRjNGB0Y8g0YEg0L3QsNC80Lgg0L/QviDRgtC10LvQtdGE0L7QvdGDINC40LvQuCDRh9C10YDQtdC3INC80LXRgdGB0LXQvdC00LbQtdGA0YssINC10YHQu9C4INCy0L7Qt9C90LjQutC90YPRgiDQstC+0L/RgNC+0YHRiyDQuNC70Lgg0L3QtdC/0YDQtdC00LLQuNC00LXQvdC90YvQtSDRgdC40YLRg9Cw0YbQuNC4LlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwi0JLRiyDQv9C+0LzQvtCz0LDQtdGC0LUg0YEg0L7RhNC+0YDQvNC70LXQvdC40LXQvCDQstC40Lc/XCIsXG4gICAgICBhbnN3ZXI6XG4gICAgICAgIFwi0JTQsCwg0LzRiyDQv9GA0LXQtNC+0YHRgtCw0LLQu9GP0LXQvCDQv9C+0LzQvtGJ0Ywg0LIg0L7RhNC+0YDQvNC70LXQvdC40Lgg0LLQuNC3INC00LvRjyDQsdC+0LvRjNGI0LjQvdGB0YLQstCwINC90LDQv9GA0LDQstC70LXQvdC40LkuINCd0LDRiNC4INGB0L/QtdGG0LjQsNC70LjRgdGC0Ysg0L/QvtC80L7Qs9GD0YIg0LLQsNC8INGB0L7QsdGA0LDRgtGMINCy0YHQtSDQvdC10L7QsdGF0L7QtNC40LzRi9C1INC00L7QutGD0LzQtdC90YLRiywg0LAg0YLQsNC60LbQtSDQv9GA0L7QutC+0L3RgdGD0LvRjNGC0LjRgNGD0Y7RgiDQv9C+INGC0YDQtdCx0L7QstCw0L3QuNGP0Lwg0LrQvtC90YHRg9C70YzRgdGC0LIg0Lgg0YHRgNC+0LrQsNC8INC/0L7QtNCw0YfQuCDQt9Cw0Y/QstC+0LouXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCLQn9GA0LXQtNC+0YHRgtCw0LLQu9GP0LXRgtC1INC70Lgg0LLRiyDRgdGC0YDQsNGF0L7QstC60YMg0LTQu9GPINC/0YPRgtC10YjQtdGB0YLQstC40Lk/XCIsXG4gICAgICBhbnN3ZXI6XG4gICAgICAgIFwi0JzRiyDQv9GA0LXQtNC70LDQs9Cw0LXQvCDRgtGD0YDQuNGB0YLQuNGH0LXRgdC60LjQtSDRgdGC0YDQsNGF0L7QstC60LgsINC60L7RgtC+0YDRi9C1INC/0L7QutGA0YvQstCw0Y7RgiDRiNC40YDQvtC60LjQuSDRgdC/0LXQutGC0YAg0YDQuNGB0LrQvtCyOiDQvtGCINC80LXQtNC40YbQuNC90YHQutC40YUg0YDQsNGB0YXQvtC00L7QsiDQtNC+INGB0YLRgNCw0YXQvtCy0LDQvdC40Y8g0LHQsNCz0LDQttCwINC4INC+0YLQvNC10L3RiyDQv9C+0LXQt9C00LrQuC4g0JLRiyDQvNC+0LbQtdGC0LUg0LLRi9Cx0YDQsNGC0Ywg0YHRgtGA0LDRhdC+0LLQvtC5INC/0LDQutC10YIsINC60L7RgtC+0YDRi9C5INC90LDQuNCx0L7Qu9C10LUg0YHQvtC+0YLQstC10YLRgdGC0LLRg9C10YIg0LLQsNGI0LjQvCDQv9C+0YLRgNC10LHQvdC+0YHRgtGP0LwuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCLQldGB0YLRjCDQu9C4INGDINCy0LDRgSDRgdC/0LXRhtC40LDQu9GM0L3Ri9C1INC/0YDQtdC00LvQvtC20LXQvdC40Y8g0Lgg0YHQutC40LTQutC4P1wiLFxuICAgICAgYW5zd2VyOlxuICAgICAgICBcItCU0LAsINGDINC90LDRgSDRgNC10LPRg9C70Y/RgNC90L4g0LTQtdC50YHRgtCy0YPRjtGCINGB0L/QtdGG0LjQsNC70YzQvdGL0LUg0L/RgNC10LTQu9C+0LbQtdC90LjRjyDQuCDRgdC60LjQtNC60Lgg0L3QsCDRgNCw0LfQu9C40YfQvdGL0LUg0L3QsNC/0YDQsNCy0LvQtdC90LjRjy4g0JzRiyDRgNC10LrQvtC80LXQvdC00YPQtdC8INC/0L7QtNC/0LjRgdCw0YLRjNGB0Y8g0L3QsCDQvdCw0YjRgyDRgNCw0YHRgdGL0LvQutGDINC40LvQuCDRgdC70LXQtNC40YLRjCDQt9CwINC+0LHQvdC+0LLQu9C10L3QuNGP0LzQuCDQvdCwINGB0LDQudGC0LUsINGH0YLQvtCx0Ysg0LHRi9GC0Ywg0LIg0LrRg9GA0YHQtSDQstGB0LXRhSDQsNC60YbQuNC5LlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwi0KfRgtC+INC00LXQu9Cw0YLRjCwg0LXRgdC70Lgg0L/QvtC10LfQtNC60LAg0L7RgtC80LXQvdGP0LXRgtGB0Y8/XCIsXG4gICAgICBhbnN3ZXI6XG4gICAgICAgIFwi0JIg0YHQu9GD0YfQsNC1INC+0YLQvNC10L3RiyDQv9C+0LXQt9C00LrQuCwg0LLRiyDQtNC+0LvQttC90Ysg0LrQsNC6INC80L7QttC90L4g0LHRi9GB0YLRgNC10LUg0YHQstGP0LfQsNGC0YzRgdGPINGBINC90LDQvNC4LiDQnNGLINC/0L7QvNC+0LbQtdC8INCy0LDQvCDRg9GA0LXQs9GD0LvQuNGA0L7QstCw0YLRjCDQstGB0LUg0LLQvtC/0YDQvtGB0YssINGB0LLRj9C30LDQvdC90YvQtSDRgSDQstC+0LfQstGA0LDRgtC+0Lwg0YHRgNC10LTRgdGC0LIsINCy0L7Qt9C80L7QttC90YvQvNC4INGI0YLRgNCw0YTQsNC80Lgg0Lgg0L/QtdGA0LXQvdC10YHQtdC90LjQtdC8INGC0YPRgNCwINC90LAg0LTRgNGD0LPQuNC1INC00LDRgtGLLiDQo9GB0LvQvtCy0LjRjyDQstC+0LfQstGA0LDRgtCwINC30LDQstC40YHRj9GCINC+0YIg0L/QvtC70LjRgtC40LrQuCDQutC+0L3QutGA0LXRgtC90YvRhSDQvtGC0LXQu9C10Lkg0Lgg0LDQstC40LDQutC+0LzQv9Cw0L3QuNC5LCDQsCDRgtCw0LrQttC1INC+0YIg0LLRgNC10LzQtdC90Lgg0L7RgtC80LXQvdGLLlwiLFxuICAgIH0sXG4gIF07XG5cbiAgY29uc3QgaGFsZiA9IE1hdGguY2VpbChmYXFEYXRhLmxlbmd0aCAvIDIpO1xuICBjb25zdCBmaXJzdEhhbGZEYXRhID0gZmFxRGF0YS5zbGljZSgwLCBoYWxmKTtcbiAgY29uc3Qgc2Vjb25kSGFsZkRhdGEgPSBmYXFEYXRhLnNsaWNlKGhhbGYsIGZhcURhdGEubGVuZ3RoKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmFxQ29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmFxQ29udGFpbmVySW5uZXJ9PlxuICAgICAgICB7Zmlyc3RIYWxmRGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgPEZBUUl0ZW0ga2V5PXtpbmRleH0gcXVlc3Rpb249e2l0ZW0ucXVlc3Rpb259IGFuc3dlcj17aXRlbS5hbnN3ZXJ9IC8+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZhcUNvbnRhaW5lcklubmVyfT5cbiAgICAgICAge3NlY29uZEhhbGZEYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8RkFRSXRlbSBrZXk9e2luZGV4fSBxdWVzdGlvbj17aXRlbS5xdWVzdGlvbn0gYW5zd2VyPXtpdGVtLmFuc3dlcn0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZBUTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInN0eWxlcyIsIkZBUUl0ZW0iLCJxdWVzdGlvbiIsImFuc3dlciIsImlzT3BlbiIsInNldElzT3BlbiIsInRvZ2dsZU9wZW4iLCJkaXYiLCJjbGFzc05hbWUiLCJmYXFJdGVtIiwib25DbGljayIsInNwYW4iLCJhcnJvd09wZW4iLCJhcnJvd0Nsb3NlZCIsImFycm93IiwiYW5zd2VyT3BlbiIsImFuc3dlckNsb3NlZCIsInN0eWxlIiwibWF4SGVpZ2h0IiwicCIsIkZBUSIsImZhcURhdGEiLCJoYWxmIiwiTWF0aCIsImNlaWwiLCJsZW5ndGgiLCJmaXJzdEhhbGZEYXRhIiwic2xpY2UiLCJzZWNvbmRIYWxmRGF0YSIsImZhcUNvbnRhaW5lciIsImZhcUNvbnRhaW5lcklubmVyIiwibWFwIiwiaXRlbSIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/[locale]/components/pages/about_page/faq_component/FaqComponent.tsx\n"));

/***/ })

});