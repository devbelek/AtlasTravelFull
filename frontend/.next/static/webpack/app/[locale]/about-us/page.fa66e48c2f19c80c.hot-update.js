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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   axiosGetAboutUs: function() { return /* binding */ axiosGetAboutUs; },\n/* harmony export */   axiosGetAboutUsImages: function() { return /* binding */ axiosGetAboutUsImages; },\n/* harmony export */   axiosGetFaqs: function() { return /* binding */ axiosGetFaqs; },\n/* harmony export */   axiosGetOurProjects: function() { return /* binding */ axiosGetOurProjects; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _constants_default_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/constants/default_api */ \"(app-pages-browser)/./src/constants/default_api.ts\");\n/* harmony import */ var _cities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cities */ \"(app-pages-browser)/./src/services/cities.ts\");\n\n\n\nconst axiosGetAboutUs = async ()=>{\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"\".concat(_constants_default_api__WEBPACK_IMPORTED_MODULE_0__.API_BASE_URL, \"about-us/\"));\n        const data = response.data;\n        return data;\n    } catch (error) {\n        console.error(\"Ошибка при загрузке about-us:\", error);\n        return [];\n    }\n};\nconst axiosGetAboutUsImages = async ()=>{\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"\".concat(_constants_default_api__WEBPACK_IMPORTED_MODULE_0__.API_BASE_URL, \"about-us-images/\"));\n        const data = response.data;\n        return data;\n    } catch (error) {\n        console.error(\"Ошибка при загрузке about-us-images:\", error);\n        return [];\n    }\n};\nconst axiosGetOurProjects = async ()=>{\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"\".concat(_constants_default_api__WEBPACK_IMPORTED_MODULE_0__.API_BASE_URL, \"our-projects/\"));\n        const data = response.data.rest_ideas;\n        const rest_ideas = [];\n        if (data.tours && Array.isArray(data.tours)) {\n            const cityIds = data.tours.map((tour)=>tour.to_city);\n            const citiesData = await Promise.all(cityIds.map(async (id)=>await (0,_cities__WEBPACK_IMPORTED_MODULE_1__.axiosGetCity)(id)));\n            const toursWithLink = data.tours.map((tour, index)=>({\n                    ...tour,\n                    linkTo: \"tours\",\n                    cityInfo: citiesData[index]\n                }));\n            rest_ideas.push(...toursWithLink);\n        }\n        if (data.flights && Array.isArray(data.flights)) {\n            const flightsWithLink = await Promise.all(data.flights.map(async (flight)=>{\n                const cityData = await (0,_cities__WEBPACK_IMPORTED_MODULE_1__.axiosGetCity)(flight.to_city);\n                return {\n                    ...flight,\n                    linkTo: \"flights\",\n                    cityInfo: cityData\n                };\n            }));\n            rest_ideas.push(...flightsWithLink);\n        }\n        if (data.hotels && Array.isArray(data.hotels)) {\n            const hotelsWithLink = await Promise.all(data.hotels.map(async (hotel)=>{\n                const cityData = await (0,_cities__WEBPACK_IMPORTED_MODULE_1__.axiosGetCity)(hotel.city);\n                return {\n                    ...hotel,\n                    linkTo: \"hotels\",\n                    cityInfo: cityData\n                };\n            }));\n            rest_ideas.push(...hotelsWithLink);\n        }\n        if (data.transfers && Array.isArray(data.transfers)) {\n            const transfersWithLink = await Promise.all(data.transfers.map(async (transfer)=>{\n                const cityData = await (0,_cities__WEBPACK_IMPORTED_MODULE_1__.axiosGetCity)(transfer.city);\n                return {\n                    ...transfer,\n                    linkTo: \"car-rental\",\n                    cityInfo: cityData\n                };\n            }));\n            rest_ideas.push(...transfersWithLink);\n        }\n        return {\n            ...data,\n            rest_ideas\n        };\n    } catch (error) {\n        console.error(\"Ошибка при загрузке home:\", error);\n        return [];\n    }\n};\nconst axiosGetFaqs = async ()=>{\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"\".concat(_constants_default_api__WEBPACK_IMPORTED_MODULE_0__.API_BASE_URL, \"faqs/\"));\n        const data = response.data;\n        return data;\n    } catch (error) {\n        console.error(\"Ошибка при загрузке faqs:\", error);\n        return [];\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zZXJ2aWNlcy9hYm91dC11cy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTBCO0FBQzZCO0FBQ2Y7QUFFakMsTUFBTUcsa0JBQWtCO0lBQzdCLElBQUk7UUFDRixNQUFNQyxXQUFXLE1BQU1KLDZDQUFLQSxDQUFDSyxHQUFHLENBQUMsR0FBZ0IsT0FBYkosZ0VBQVlBLEVBQUM7UUFDakQsTUFBTUssT0FBT0YsU0FBU0UsSUFBSTtRQUMxQixPQUFPQTtJQUNULEVBQUUsT0FBT0MsT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMsaUNBQWlDQTtRQUMvQyxPQUFPLEVBQUU7SUFDWDtBQUNGLEVBQUU7QUFFSyxNQUFNRSx3QkFBd0I7SUFDbkMsSUFBSTtRQUNGLE1BQU1MLFdBQVcsTUFBTUosNkNBQUtBLENBQUNLLEdBQUcsQ0FBQyxHQUFnQixPQUFiSixnRUFBWUEsRUFBQztRQUNqRCxNQUFNSyxPQUFPRixTQUFTRSxJQUFJO1FBQzFCLE9BQU9BO0lBQ1QsRUFBRSxPQUFPQyxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQyx3Q0FBd0NBO1FBQ3RELE9BQU8sRUFBRTtJQUNYO0FBQ0YsRUFBRTtBQUVLLE1BQU1HLHNCQUFzQjtJQUNqQyxJQUFJO1FBQ0YsTUFBTU4sV0FBVyxNQUFNSiw2Q0FBS0EsQ0FBQ0ssR0FBRyxDQUFDLEdBQWdCLE9BQWJKLGdFQUFZQSxFQUFDO1FBQ2pELE1BQU1LLE9BQU9GLFNBQVNFLElBQUksQ0FBQ0ssVUFBVTtRQUVyQyxNQUFNQSxhQUFhLEVBQUU7UUFFckIsSUFBSUwsS0FBS00sS0FBSyxJQUFJQyxNQUFNQyxPQUFPLENBQUNSLEtBQUtNLEtBQUssR0FBRztZQUMzQyxNQUFNRyxVQUFVVCxLQUFLTSxLQUFLLENBQUNJLEdBQUcsQ0FBQyxDQUFDQyxPQUFjQSxLQUFLQyxPQUFPO1lBRTFELE1BQU1DLGFBQWEsTUFBTUMsUUFBUUMsR0FBRyxDQUNsQ04sUUFBUUMsR0FBRyxDQUFDLE9BQU9NLEtBQWUsTUFBTXBCLHFEQUFZQSxDQUFDb0I7WUFHdkQsTUFBTUMsZ0JBQWdCakIsS0FBS00sS0FBSyxDQUFDSSxHQUFHLENBQUMsQ0FBQ0MsTUFBV08sUUFBbUI7b0JBQ2xFLEdBQUdQLElBQUk7b0JBQ1BRLFFBQVE7b0JBQ1JDLFVBQVVQLFVBQVUsQ0FBQ0ssTUFBTTtnQkFDN0I7WUFDQWIsV0FBV2dCLElBQUksSUFBSUo7UUFDckI7UUFFQSxJQUFJakIsS0FBS3NCLE9BQU8sSUFBSWYsTUFBTUMsT0FBTyxDQUFDUixLQUFLc0IsT0FBTyxHQUFHO1lBQy9DLE1BQU1DLGtCQUFrQixNQUFNVCxRQUFRQyxHQUFHLENBQ3ZDZixLQUFLc0IsT0FBTyxDQUFDWixHQUFHLENBQUMsT0FBT2M7Z0JBQ3RCLE1BQU1DLFdBQVcsTUFBTTdCLHFEQUFZQSxDQUFDNEIsT0FBT1osT0FBTztnQkFDbEQsT0FBTztvQkFDTCxHQUFHWSxNQUFNO29CQUNUTCxRQUFRO29CQUNSQyxVQUFVSztnQkFDWjtZQUNGO1lBRUZwQixXQUFXZ0IsSUFBSSxJQUFJRTtRQUNyQjtRQUVBLElBQUl2QixLQUFLMEIsTUFBTSxJQUFJbkIsTUFBTUMsT0FBTyxDQUFDUixLQUFLMEIsTUFBTSxHQUFHO1lBQzdDLE1BQU1DLGlCQUFpQixNQUFNYixRQUFRQyxHQUFHLENBQ3RDZixLQUFLMEIsTUFBTSxDQUFDaEIsR0FBRyxDQUFDLE9BQU9rQjtnQkFDckIsTUFBTUgsV0FBVyxNQUFNN0IscURBQVlBLENBQUNnQyxNQUFNQyxJQUFJO2dCQUM5QyxPQUFPO29CQUNMLEdBQUdELEtBQUs7b0JBQ1JULFFBQVE7b0JBQ1JDLFVBQVVLO2dCQUNaO1lBQ0Y7WUFFRnBCLFdBQVdnQixJQUFJLElBQUlNO1FBQ3JCO1FBRUEsSUFBSTNCLEtBQUs4QixTQUFTLElBQUl2QixNQUFNQyxPQUFPLENBQUNSLEtBQUs4QixTQUFTLEdBQUc7WUFDbkQsTUFBTUMsb0JBQW9CLE1BQU1qQixRQUFRQyxHQUFHLENBQ3pDZixLQUFLOEIsU0FBUyxDQUFDcEIsR0FBRyxDQUFDLE9BQU9zQjtnQkFDeEIsTUFBTVAsV0FBVyxNQUFNN0IscURBQVlBLENBQUNvQyxTQUFTSCxJQUFJO2dCQUNqRCxPQUFPO29CQUNMLEdBQUdHLFFBQVE7b0JBQ1hiLFFBQVE7b0JBQ1JDLFVBQVVLO2dCQUNaO1lBQ0Y7WUFFRnBCLFdBQVdnQixJQUFJLElBQUlVO1FBQ3JCO1FBRUEsT0FBTztZQUFFLEdBQUcvQixJQUFJO1lBQUVLO1FBQVc7SUFDL0IsRUFBRSxPQUFPSixPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQyw2QkFBNkJBO1FBQzNDLE9BQU8sRUFBRTtJQUNYO0FBQ0YsRUFBRTtBQUVLLE1BQU1nQyxlQUFlO0lBQzFCLElBQUk7UUFDRixNQUFNbkMsV0FBVyxNQUFNSiw2Q0FBS0EsQ0FBQ0ssR0FBRyxDQUFDLEdBQWdCLE9BQWJKLGdFQUFZQSxFQUFDO1FBQ2pELE1BQU1LLE9BQU9GLFNBQVNFLElBQUk7UUFDMUIsT0FBT0E7SUFDVCxFQUFFLE9BQU9DLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDLDZCQUE2QkE7UUFDM0MsT0FBTyxFQUFFO0lBQ1g7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zZXJ2aWNlcy9hYm91dC11cy50cz8yYWVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IEFQSV9CQVNFX1VSTCB9IGZyb20gXCJAL2NvbnN0YW50cy9kZWZhdWx0X2FwaVwiO1xuaW1wb3J0IHsgYXhpb3NHZXRDaXR5IH0gZnJvbSBcIi4vY2l0aWVzXCI7XG5cbmV4cG9ydCBjb25zdCBheGlvc0dldEFib3V0VXMgPSBhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYCR7QVBJX0JBU0VfVVJMfWFib3V0LXVzL2ApO1xuICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5kYXRhO1xuICAgIHJldHVybiBkYXRhO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCLQntGI0LjQsdC60LAg0L/RgNC4INC30LDQs9GA0YPQt9C60LUgYWJvdXQtdXM6XCIsIGVycm9yKTtcbiAgICByZXR1cm4gW107XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBheGlvc0dldEFib3V0VXNJbWFnZXMgPSBhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYCR7QVBJX0JBU0VfVVJMfWFib3V0LXVzLWltYWdlcy9gKTtcbiAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuZGF0YTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwi0J7RiNC40LHQutCwINC/0YDQuCDQt9Cw0LPRgNGD0LfQutC1IGFib3V0LXVzLWltYWdlczpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGF4aW9zR2V0T3VyUHJvamVjdHMgPSBhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYCR7QVBJX0JBU0VfVVJMfW91ci1wcm9qZWN0cy9gKTtcbiAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuZGF0YS5yZXN0X2lkZWFzO1xuXG4gICAgY29uc3QgcmVzdF9pZGVhcyA9IFtdO1xuXG4gICAgaWYgKGRhdGEudG91cnMgJiYgQXJyYXkuaXNBcnJheShkYXRhLnRvdXJzKSkge1xuICAgICAgY29uc3QgY2l0eUlkcyA9IGRhdGEudG91cnMubWFwKCh0b3VyOiBhbnkpID0+IHRvdXIudG9fY2l0eSk7XG5cbiAgICAgIGNvbnN0IGNpdGllc0RhdGEgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgICAgY2l0eUlkcy5tYXAoYXN5bmMgKGlkOiBzdHJpbmcpID0+IGF3YWl0IGF4aW9zR2V0Q2l0eShpZCkpXG4gICAgICApO1xuXG4gICAgICBjb25zdCB0b3Vyc1dpdGhMaW5rID0gZGF0YS50b3Vycy5tYXAoKHRvdXI6IGFueSwgaW5kZXg6IG51bWJlcikgPT4gKHtcbiAgICAgICAgLi4udG91cixcbiAgICAgICAgbGlua1RvOiBcInRvdXJzXCIsXG4gICAgICAgIGNpdHlJbmZvOiBjaXRpZXNEYXRhW2luZGV4XSxcbiAgICAgIH0pKTtcbiAgICAgIHJlc3RfaWRlYXMucHVzaCguLi50b3Vyc1dpdGhMaW5rKTtcbiAgICB9XG5cbiAgICBpZiAoZGF0YS5mbGlnaHRzICYmIEFycmF5LmlzQXJyYXkoZGF0YS5mbGlnaHRzKSkge1xuICAgICAgY29uc3QgZmxpZ2h0c1dpdGhMaW5rID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICAgIGRhdGEuZmxpZ2h0cy5tYXAoYXN5bmMgKGZsaWdodDogYW55KSA9PiB7XG4gICAgICAgICAgY29uc3QgY2l0eURhdGEgPSBhd2FpdCBheGlvc0dldENpdHkoZmxpZ2h0LnRvX2NpdHkpO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5mbGlnaHQsXG4gICAgICAgICAgICBsaW5rVG86IFwiZmxpZ2h0c1wiLFxuICAgICAgICAgICAgY2l0eUluZm86IGNpdHlEYXRhLFxuICAgICAgICAgIH07XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgICAgcmVzdF9pZGVhcy5wdXNoKC4uLmZsaWdodHNXaXRoTGluayk7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEuaG90ZWxzICYmIEFycmF5LmlzQXJyYXkoZGF0YS5ob3RlbHMpKSB7XG4gICAgICBjb25zdCBob3RlbHNXaXRoTGluayA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgICBkYXRhLmhvdGVscy5tYXAoYXN5bmMgKGhvdGVsOiBhbnkpID0+IHtcbiAgICAgICAgICBjb25zdCBjaXR5RGF0YSA9IGF3YWl0IGF4aW9zR2V0Q2l0eShob3RlbC5jaXR5KTtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uaG90ZWwsXG4gICAgICAgICAgICBsaW5rVG86IFwiaG90ZWxzXCIsXG4gICAgICAgICAgICBjaXR5SW5mbzogY2l0eURhdGEsXG4gICAgICAgICAgfTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgICByZXN0X2lkZWFzLnB1c2goLi4uaG90ZWxzV2l0aExpbmspO1xuICAgIH1cblxuICAgIGlmIChkYXRhLnRyYW5zZmVycyAmJiBBcnJheS5pc0FycmF5KGRhdGEudHJhbnNmZXJzKSkge1xuICAgICAgY29uc3QgdHJhbnNmZXJzV2l0aExpbmsgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgICAgZGF0YS50cmFuc2ZlcnMubWFwKGFzeW5jICh0cmFuc2ZlcjogYW55KSA9PiB7XG4gICAgICAgICAgY29uc3QgY2l0eURhdGEgPSBhd2FpdCBheGlvc0dldENpdHkodHJhbnNmZXIuY2l0eSk7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnRyYW5zZmVyLFxuICAgICAgICAgICAgbGlua1RvOiBcImNhci1yZW50YWxcIixcbiAgICAgICAgICAgIGNpdHlJbmZvOiBjaXR5RGF0YSxcbiAgICAgICAgICB9O1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICAgIHJlc3RfaWRlYXMucHVzaCguLi50cmFuc2ZlcnNXaXRoTGluayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgLi4uZGF0YSwgcmVzdF9pZGVhcyB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCLQntGI0LjQsdC60LAg0L/RgNC4INC30LDQs9GA0YPQt9C60LUgaG9tZTpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGF4aW9zR2V0RmFxcyA9IGFzeW5jICgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgJHtBUElfQkFTRV9VUkx9ZmFxcy9gKTtcbiAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuZGF0YTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwi0J7RiNC40LHQutCwINC/0YDQuCDQt9Cw0LPRgNGD0LfQutC1IGZhcXM6XCIsIGVycm9yKTtcbiAgICByZXR1cm4gW107XG4gIH1cbn07XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJBUElfQkFTRV9VUkwiLCJheGlvc0dldENpdHkiLCJheGlvc0dldEFib3V0VXMiLCJyZXNwb25zZSIsImdldCIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJheGlvc0dldEFib3V0VXNJbWFnZXMiLCJheGlvc0dldE91clByb2plY3RzIiwicmVzdF9pZGVhcyIsInRvdXJzIiwiQXJyYXkiLCJpc0FycmF5IiwiY2l0eUlkcyIsIm1hcCIsInRvdXIiLCJ0b19jaXR5IiwiY2l0aWVzRGF0YSIsIlByb21pc2UiLCJhbGwiLCJpZCIsInRvdXJzV2l0aExpbmsiLCJpbmRleCIsImxpbmtUbyIsImNpdHlJbmZvIiwicHVzaCIsImZsaWdodHMiLCJmbGlnaHRzV2l0aExpbmsiLCJmbGlnaHQiLCJjaXR5RGF0YSIsImhvdGVscyIsImhvdGVsc1dpdGhMaW5rIiwiaG90ZWwiLCJjaXR5IiwidHJhbnNmZXJzIiwidHJhbnNmZXJzV2l0aExpbmsiLCJ0cmFuc2ZlciIsImF4aW9zR2V0RmFxcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/services/about-us.ts\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/services/cities.ts":
/*!********************************!*\
  !*** ./src/services/cities.ts ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   axiosGetCities: function() { return /* binding */ axiosGetCities; },\n/* harmony export */   axiosGetCity: function() { return /* binding */ axiosGetCity; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _constants_default_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/constants/default_api */ \"(app-pages-browser)/./src/constants/default_api.ts\");\n\n\nconst axiosGetCity = async (id)=>{\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"\".concat(_constants_default_api__WEBPACK_IMPORTED_MODULE_0__.API_BASE_URL, \"cities/\") + id);\n        const data = response.data;\n        return data;\n    } catch (error) {\n        console.error(\"Ошибка при загрузке city:\", error);\n        return [];\n    }\n};\nconst axiosGetCities = async ()=>{\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"\".concat(_constants_default_api__WEBPACK_IMPORTED_MODULE_0__.API_BASE_URL, \"cities/\"));\n        const data = response.data;\n        return data;\n    } catch (error) {\n        console.error(\"Ошибка при загрузке cities:\", error);\n        return [];\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zZXJ2aWNlcy9jaXRpZXMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEwQjtBQUM2QjtBQUdoRCxNQUFNRSxlQUFlLE9BQU9DO0lBQy9CLElBQUk7UUFDRixNQUFNQyxXQUFXLE1BQU1KLDZDQUFLQSxDQUFDSyxHQUFHLENBQUMsR0FBZ0IsT0FBYkosZ0VBQVlBLEVBQUMsYUFBV0U7UUFDNUQsTUFBTUcsT0FBT0YsU0FBU0UsSUFBSTtRQUMxQixPQUFPQTtJQUNULEVBQUUsT0FBT0MsT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMsNkJBQTZCQTtRQUMzQyxPQUFPLEVBQUU7SUFDWDtBQUNGLEVBQUU7QUFFSyxNQUFNRSxpQkFBaUI7SUFDNUIsSUFBSTtRQUNGLE1BQU1MLFdBQVcsTUFBTUosNkNBQUtBLENBQUNLLEdBQUcsQ0FBQyxHQUFnQixPQUFiSixnRUFBWUEsRUFBQztRQUNqRCxNQUFNSyxPQUFPRixTQUFTRSxJQUFJO1FBQzFCLE9BQU9BO0lBQ1QsRUFBRSxPQUFPQyxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQywrQkFBK0JBO1FBQzdDLE9BQU8sRUFBRTtJQUNYO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc2VydmljZXMvY2l0aWVzLnRzPzdjMjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgQVBJX0JBU0VfVVJMIH0gZnJvbSBcIkAvY29uc3RhbnRzL2RlZmF1bHRfYXBpXCI7XG5cblxuZXhwb3J0IGNvbnN0IGF4aW9zR2V0Q2l0eSA9IGFzeW5jIChpZDogc3RyaW5nKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGAke0FQSV9CQVNFX1VSTH1jaXRpZXMvYCArIGlkKTtcbiAgICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5kYXRhO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCLQntGI0LjQsdC60LAg0L/RgNC4INC30LDQs9GA0YPQt9C60LUgY2l0eTpcIiwgZXJyb3IpO1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgfTtcblxuICBleHBvcnQgY29uc3QgYXhpb3NHZXRDaXRpZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGAke0FQSV9CQVNFX1VSTH1jaXRpZXMvYCk7XG4gICAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwi0J7RiNC40LHQutCwINC/0YDQuCDQt9Cw0LPRgNGD0LfQutC1IGNpdGllczpcIiwgZXJyb3IpO1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgfTsiXSwibmFtZXMiOlsiYXhpb3MiLCJBUElfQkFTRV9VUkwiLCJheGlvc0dldENpdHkiLCJpZCIsInJlc3BvbnNlIiwiZ2V0IiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImF4aW9zR2V0Q2l0aWVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/services/cities.ts\n"));

/***/ })

});