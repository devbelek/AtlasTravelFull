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

/***/ "(app-pages-browser)/./src/services/about-us.ts":
/*!**********************************!*\
  !*** ./src/services/about-us.ts ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   axiosGetAboutUs: function() { return /* binding */ axiosGetAboutUs; },\n/* harmony export */   axiosGetAboutUsImages: function() { return /* binding */ axiosGetAboutUsImages; },\n/* harmony export */   axiosGetFaqs: function() { return /* binding */ axiosGetFaqs; },\n/* harmony export */   axiosGetOurProjects: function() { return /* binding */ axiosGetOurProjects; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _constants_default_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/constants/default_api */ \"(app-pages-browser)/./src/constants/default_api.ts\");\n/* harmony import */ var _cities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cities */ \"(app-pages-browser)/./src/services/cities.ts\");\n\n\n\nconst axiosGetAboutUs = async ()=>{\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"\".concat(\"http://84.247.162.72/api/\", \"about-us/\"));\n        const data = response.data;\n        return data;\n    } catch (error) {\n        console.error(\"Ошибка при загрузке about-us:\", error);\n        return [];\n    }\n};\nconst axiosGetAboutUsImages = async ()=>{\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"\".concat(_constants_default_api__WEBPACK_IMPORTED_MODULE_0__.API_BASE_URL, \"about-us-images/\"));\n        const data = response.data;\n        return data;\n    } catch (error) {\n        console.error(\"Ошибка при загрузке about-us-images:\", error);\n        return [];\n    }\n};\nconst axiosGetOurProjects = async ()=>{\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"\".concat(_constants_default_api__WEBPACK_IMPORTED_MODULE_0__.API_BASE_URL, \"our-projects/\"));\n        const data = response.data[0];\n        const projects = [];\n        if (data.tours && Array.isArray(data.tours)) {\n            const cityIds = data.tours.map((tour)=>tour.to_city);\n            const citiesData = await Promise.all(cityIds.map(async (id)=>await (0,_cities__WEBPACK_IMPORTED_MODULE_1__.axiosGetCity)(id)));\n            const toursWithLink = data.tours.map((tour, index)=>({\n                    ...tour,\n                    linkTo: \"tours\",\n                    cityInfo: citiesData[index]\n                }));\n            projects.push(...toursWithLink);\n        }\n        if (data.flights && Array.isArray(data.flights)) {\n            const flightsWithLink = await Promise.all(data.flights.map(async (flight)=>{\n                const cityData = await (0,_cities__WEBPACK_IMPORTED_MODULE_1__.axiosGetCity)(flight.to_city);\n                return {\n                    ...flight,\n                    linkTo: \"flights\",\n                    cityInfo: cityData\n                };\n            }));\n            projects.push(...flightsWithLink);\n        }\n        if (data.hotels && Array.isArray(data.hotels)) {\n            const hotelsWithLink = await Promise.all(data.hotels.map(async (hotel)=>{\n                const cityData = await (0,_cities__WEBPACK_IMPORTED_MODULE_1__.axiosGetCity)(hotel.city);\n                return {\n                    ...hotel,\n                    linkTo: \"hotels\",\n                    cityInfo: cityData\n                };\n            }));\n            projects.push(...hotelsWithLink);\n        }\n        if (data.transfers && Array.isArray(data.transfers)) {\n            const transfersWithLink = await Promise.all(data.transfers.map(async (transfer)=>{\n                const cityData = await (0,_cities__WEBPACK_IMPORTED_MODULE_1__.axiosGetCity)(transfer.city);\n                return {\n                    ...transfer,\n                    linkTo: \"car-rental\",\n                    cityInfo: cityData\n                };\n            }));\n            projects.push(...transfersWithLink);\n        }\n        return {\n            ...data,\n            projects\n        };\n    } catch (error) {\n        console.error(\"Ошибка при загрузке данных:\", error);\n        return [];\n    }\n};\nconst axiosGetFaqs = async ()=>{\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"\".concat(_constants_default_api__WEBPACK_IMPORTED_MODULE_0__.API_BASE_URL, \"faqs/\"));\n        const data = response.data;\n        return data;\n    } catch (error) {\n        console.error(\"Ошибка при загрузке faqs:\", error);\n        return [];\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zZXJ2aWNlcy9hYm91dC11cy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTBCO0FBQzZCO0FBQ2Y7QUFFakMsTUFBTUcsa0JBQWtCO0lBQzdCLElBQUk7UUFDRixNQUFNQyxXQUFXLE1BQU1KLDZDQUFLQSxDQUFDSyxHQUFHLENBQUMsR0FBd0MsT0FBckNDLDJCQUFvQyxFQUFDO1FBQ3pFLE1BQU1HLE9BQU9MLFNBQVNLLElBQUk7UUFDMUIsT0FBT0E7SUFDVCxFQUFFLE9BQU9DLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDLGlDQUFpQ0E7UUFDL0MsT0FBTyxFQUFFO0lBQ1g7QUFDRixFQUFFO0FBRUssTUFBTUUsd0JBQXdCO0lBQ25DLElBQUk7UUFDRixNQUFNUixXQUFXLE1BQU1KLDZDQUFLQSxDQUFDSyxHQUFHLENBQUMsR0FBZ0IsT0FBYkosZ0VBQVlBLEVBQUM7UUFDakQsTUFBTVEsT0FBT0wsU0FBU0ssSUFBSTtRQUMxQixPQUFPQTtJQUNULEVBQUUsT0FBT0MsT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMsd0NBQXdDQTtRQUN0RCxPQUFPLEVBQUU7SUFDWDtBQUNGLEVBQUU7QUFFSyxNQUFNRyxzQkFBc0I7SUFDakMsSUFBSTtRQUNGLE1BQU1ULFdBQVcsTUFBTUosNkNBQUtBLENBQUNLLEdBQUcsQ0FBQyxHQUFnQixPQUFiSixnRUFBWUEsRUFBQztRQUNqRCxNQUFNUSxPQUFPTCxTQUFTSyxJQUFJLENBQUMsRUFBRTtRQUU3QixNQUFNSyxXQUFrQixFQUFFO1FBRTFCLElBQUlMLEtBQUtNLEtBQUssSUFBSUMsTUFBTUMsT0FBTyxDQUFDUixLQUFLTSxLQUFLLEdBQUc7WUFDM0MsTUFBTUcsVUFBVVQsS0FBS00sS0FBSyxDQUFDSSxHQUFHLENBQUMsQ0FBQ0MsT0FBY0EsS0FBS0MsT0FBTztZQUMxRCxNQUFNQyxhQUFhLE1BQU1DLFFBQVFDLEdBQUcsQ0FDbENOLFFBQVFDLEdBQUcsQ0FBQyxPQUFPTSxLQUFlLE1BQU12QixxREFBWUEsQ0FBQ3VCO1lBR3ZELE1BQU1DLGdCQUFnQmpCLEtBQUtNLEtBQUssQ0FBQ0ksR0FBRyxDQUFDLENBQUNDLE1BQVdPLFFBQW1CO29CQUNsRSxHQUFHUCxJQUFJO29CQUNQUSxRQUFRO29CQUNSQyxVQUFVUCxVQUFVLENBQUNLLE1BQU07Z0JBQzdCO1lBQ0FiLFNBQVNnQixJQUFJLElBQUlKO1FBQ25CO1FBRUEsSUFBSWpCLEtBQUtzQixPQUFPLElBQUlmLE1BQU1DLE9BQU8sQ0FBQ1IsS0FBS3NCLE9BQU8sR0FBRztZQUMvQyxNQUFNQyxrQkFBa0IsTUFBTVQsUUFBUUMsR0FBRyxDQUN2Q2YsS0FBS3NCLE9BQU8sQ0FBQ1osR0FBRyxDQUFDLE9BQU9jO2dCQUN0QixNQUFNQyxXQUFXLE1BQU1oQyxxREFBWUEsQ0FBQytCLE9BQU9aLE9BQU87Z0JBQ2xELE9BQU87b0JBQ0wsR0FBR1ksTUFBTTtvQkFDVEwsUUFBUTtvQkFDUkMsVUFBVUs7Z0JBQ1o7WUFDRjtZQUVGcEIsU0FBU2dCLElBQUksSUFBSUU7UUFDbkI7UUFFQSxJQUFJdkIsS0FBSzBCLE1BQU0sSUFBSW5CLE1BQU1DLE9BQU8sQ0FBQ1IsS0FBSzBCLE1BQU0sR0FBRztZQUM3QyxNQUFNQyxpQkFBaUIsTUFBTWIsUUFBUUMsR0FBRyxDQUN0Q2YsS0FBSzBCLE1BQU0sQ0FBQ2hCLEdBQUcsQ0FBQyxPQUFPa0I7Z0JBQ3JCLE1BQU1ILFdBQVcsTUFBTWhDLHFEQUFZQSxDQUFDbUMsTUFBTUMsSUFBSTtnQkFDOUMsT0FBTztvQkFDTCxHQUFHRCxLQUFLO29CQUNSVCxRQUFRO29CQUNSQyxVQUFVSztnQkFDWjtZQUNGO1lBRUZwQixTQUFTZ0IsSUFBSSxJQUFJTTtRQUNuQjtRQUVBLElBQUkzQixLQUFLOEIsU0FBUyxJQUFJdkIsTUFBTUMsT0FBTyxDQUFDUixLQUFLOEIsU0FBUyxHQUFHO1lBQ25ELE1BQU1DLG9CQUFvQixNQUFNakIsUUFBUUMsR0FBRyxDQUN6Q2YsS0FBSzhCLFNBQVMsQ0FBQ3BCLEdBQUcsQ0FBQyxPQUFPc0I7Z0JBQ3hCLE1BQU1QLFdBQVcsTUFBTWhDLHFEQUFZQSxDQUFDdUMsU0FBU0gsSUFBSTtnQkFDakQsT0FBTztvQkFDTCxHQUFHRyxRQUFRO29CQUNYYixRQUFRO29CQUNSQyxVQUFVSztnQkFDWjtZQUNGO1lBRUZwQixTQUFTZ0IsSUFBSSxJQUFJVTtRQUNuQjtRQUVBLE9BQU87WUFBRSxHQUFHL0IsSUFBSTtZQUFFSztRQUFTO0lBQzdCLEVBQUUsT0FBT0osT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMsK0JBQStCQTtRQUM3QyxPQUFPLEVBQUU7SUFDWDtBQUNGLEVBQUU7QUFFSyxNQUFNZ0MsZUFBZTtJQUMxQixJQUFJO1FBQ0YsTUFBTXRDLFdBQVcsTUFBTUosNkNBQUtBLENBQUNLLEdBQUcsQ0FBQyxHQUFnQixPQUFiSixnRUFBWUEsRUFBQztRQUNqRCxNQUFNUSxPQUFPTCxTQUFTSyxJQUFJO1FBQzFCLE9BQU9BO0lBQ1QsRUFBRSxPQUFPQyxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQyw2QkFBNkJBO1FBQzNDLE9BQU8sRUFBRTtJQUNYO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc2VydmljZXMvYWJvdXQtdXMudHM/MmFlZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBBUElfQkFTRV9VUkwgfSBmcm9tIFwiQC9jb25zdGFudHMvZGVmYXVsdF9hcGlcIjtcbmltcG9ydCB7IGF4aW9zR2V0Q2l0eSB9IGZyb20gXCIuL2NpdGllc1wiO1xuXG5leHBvcnQgY29uc3QgYXhpb3NHZXRBYm91dFVzID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9CQVNFX1VSTH1hYm91dC11cy9gKTtcbiAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuZGF0YTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwi0J7RiNC40LHQutCwINC/0YDQuCDQt9Cw0LPRgNGD0LfQutC1IGFib3V0LXVzOlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgYXhpb3NHZXRBYm91dFVzSW1hZ2VzID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGAke0FQSV9CQVNFX1VSTH1hYm91dC11cy1pbWFnZXMvYCk7XG4gICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcItCe0YjQuNCx0LrQsCDQv9GA0Lgg0LfQsNCz0YDRg9C30LrQtSBhYm91dC11cy1pbWFnZXM6XCIsIGVycm9yKTtcbiAgICByZXR1cm4gW107XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBheGlvc0dldE91clByb2plY3RzID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGAke0FQSV9CQVNFX1VSTH1vdXItcHJvamVjdHMvYCk7XG4gICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmRhdGFbMF07XG5cbiAgICBjb25zdCBwcm9qZWN0czogYW55W10gPSBbXTtcblxuICAgIGlmIChkYXRhLnRvdXJzICYmIEFycmF5LmlzQXJyYXkoZGF0YS50b3VycykpIHtcbiAgICAgIGNvbnN0IGNpdHlJZHMgPSBkYXRhLnRvdXJzLm1hcCgodG91cjogYW55KSA9PiB0b3VyLnRvX2NpdHkpO1xuICAgICAgY29uc3QgY2l0aWVzRGF0YSA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgICBjaXR5SWRzLm1hcChhc3luYyAoaWQ6IHN0cmluZykgPT4gYXdhaXQgYXhpb3NHZXRDaXR5KGlkKSlcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IHRvdXJzV2l0aExpbmsgPSBkYXRhLnRvdXJzLm1hcCgodG91cjogYW55LCBpbmRleDogbnVtYmVyKSA9PiAoe1xuICAgICAgICAuLi50b3VyLFxuICAgICAgICBsaW5rVG86IFwidG91cnNcIixcbiAgICAgICAgY2l0eUluZm86IGNpdGllc0RhdGFbaW5kZXhdLFxuICAgICAgfSkpO1xuICAgICAgcHJvamVjdHMucHVzaCguLi50b3Vyc1dpdGhMaW5rKTtcbiAgICB9XG5cbiAgICBpZiAoZGF0YS5mbGlnaHRzICYmIEFycmF5LmlzQXJyYXkoZGF0YS5mbGlnaHRzKSkge1xuICAgICAgY29uc3QgZmxpZ2h0c1dpdGhMaW5rID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICAgIGRhdGEuZmxpZ2h0cy5tYXAoYXN5bmMgKGZsaWdodDogYW55KSA9PiB7XG4gICAgICAgICAgY29uc3QgY2l0eURhdGEgPSBhd2FpdCBheGlvc0dldENpdHkoZmxpZ2h0LnRvX2NpdHkpO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5mbGlnaHQsXG4gICAgICAgICAgICBsaW5rVG86IFwiZmxpZ2h0c1wiLFxuICAgICAgICAgICAgY2l0eUluZm86IGNpdHlEYXRhLFxuICAgICAgICAgIH07XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgICAgcHJvamVjdHMucHVzaCguLi5mbGlnaHRzV2l0aExpbmspO1xuICAgIH1cblxuICAgIGlmIChkYXRhLmhvdGVscyAmJiBBcnJheS5pc0FycmF5KGRhdGEuaG90ZWxzKSkge1xuICAgICAgY29uc3QgaG90ZWxzV2l0aExpbmsgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgICAgZGF0YS5ob3RlbHMubWFwKGFzeW5jIChob3RlbDogYW55KSA9PiB7XG4gICAgICAgICAgY29uc3QgY2l0eURhdGEgPSBhd2FpdCBheGlvc0dldENpdHkoaG90ZWwuY2l0eSk7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLmhvdGVsLFxuICAgICAgICAgICAgbGlua1RvOiBcImhvdGVsc1wiLFxuICAgICAgICAgICAgY2l0eUluZm86IGNpdHlEYXRhLFxuICAgICAgICAgIH07XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgICAgcHJvamVjdHMucHVzaCguLi5ob3RlbHNXaXRoTGluayk7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEudHJhbnNmZXJzICYmIEFycmF5LmlzQXJyYXkoZGF0YS50cmFuc2ZlcnMpKSB7XG4gICAgICBjb25zdCB0cmFuc2ZlcnNXaXRoTGluayA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgICBkYXRhLnRyYW5zZmVycy5tYXAoYXN5bmMgKHRyYW5zZmVyOiBhbnkpID0+IHtcbiAgICAgICAgICBjb25zdCBjaXR5RGF0YSA9IGF3YWl0IGF4aW9zR2V0Q2l0eSh0cmFuc2Zlci5jaXR5KTtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4udHJhbnNmZXIsXG4gICAgICAgICAgICBsaW5rVG86IFwiY2FyLXJlbnRhbFwiLFxuICAgICAgICAgICAgY2l0eUluZm86IGNpdHlEYXRhLFxuICAgICAgICAgIH07XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgICAgcHJvamVjdHMucHVzaCguLi50cmFuc2ZlcnNXaXRoTGluayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgLi4uZGF0YSwgcHJvamVjdHMgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwi0J7RiNC40LHQutCwINC/0YDQuCDQt9Cw0LPRgNGD0LfQutC1INC00LDQvdC90YvRhTpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGF4aW9zR2V0RmFxcyA9IGFzeW5jICgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgJHtBUElfQkFTRV9VUkx9ZmFxcy9gKTtcbiAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuZGF0YTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwi0J7RiNC40LHQutCwINC/0YDQuCDQt9Cw0LPRgNGD0LfQutC1IGZhcXM6XCIsIGVycm9yKTtcbiAgICByZXR1cm4gW107XG4gIH1cbn07XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJBUElfQkFTRV9VUkwiLCJheGlvc0dldENpdHkiLCJheGlvc0dldEFib3V0VXMiLCJyZXNwb25zZSIsImdldCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfQkFTRV9VUkwiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwiYXhpb3NHZXRBYm91dFVzSW1hZ2VzIiwiYXhpb3NHZXRPdXJQcm9qZWN0cyIsInByb2plY3RzIiwidG91cnMiLCJBcnJheSIsImlzQXJyYXkiLCJjaXR5SWRzIiwibWFwIiwidG91ciIsInRvX2NpdHkiLCJjaXRpZXNEYXRhIiwiUHJvbWlzZSIsImFsbCIsImlkIiwidG91cnNXaXRoTGluayIsImluZGV4IiwibGlua1RvIiwiY2l0eUluZm8iLCJwdXNoIiwiZmxpZ2h0cyIsImZsaWdodHNXaXRoTGluayIsImZsaWdodCIsImNpdHlEYXRhIiwiaG90ZWxzIiwiaG90ZWxzV2l0aExpbmsiLCJob3RlbCIsImNpdHkiLCJ0cmFuc2ZlcnMiLCJ0cmFuc2ZlcnNXaXRoTGluayIsInRyYW5zZmVyIiwiYXhpb3NHZXRGYXFzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/services/about-us.ts\n"));

/***/ })

});