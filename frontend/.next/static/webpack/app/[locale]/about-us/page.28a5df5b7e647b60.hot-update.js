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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   axiosGetAboutUs: function() { return /* binding */ axiosGetAboutUs; },\n/* harmony export */   axiosGetAboutUsImages: function() { return /* binding */ axiosGetAboutUsImages; },\n/* harmony export */   axiosGetFaqs: function() { return /* binding */ axiosGetFaqs; },\n/* harmony export */   axiosGetOurProjects: function() { return /* binding */ axiosGetOurProjects; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _constants_default_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/constants/default_api */ \"(app-pages-browser)/./src/constants/default_api.ts\");\n/* harmony import */ var _cities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cities */ \"(app-pages-browser)/./src/services/cities.ts\");\n\n\n\nconst axiosGetAboutUs = async ()=>{\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"\".concat(_constants_default_api__WEBPACK_IMPORTED_MODULE_0__.API_BASE_URL, \"about-us/\"));\n        const data = response.data;\n        return data;\n    } catch (error) {\n        console.error(\"Ошибка при загрузке about-us:\", error);\n        return [];\n    }\n};\nconst axiosGetAboutUsImages = async ()=>{\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"\".concat(_constants_default_api__WEBPACK_IMPORTED_MODULE_0__.API_BASE_URL, \"about-us-images/\"));\n        const data = response.data;\n        return data;\n    } catch (error) {\n        console.error(\"Ошибка при загрузке about-us-images:\", error);\n        return [];\n    }\n};\n// export const axiosGetOurProjects = async () => {\n//   try {\n//     const response = await axios.get(`${API_BASE_URL}our-projects/`);\n//     const data = response.data;\n//     const projects = [];\n//     if (data.tours && Array.isArray(data.tours)) {\n//       const cityIds = data.tours.map((tour: any) => tour.to_city);\n//       const citiesData = await Promise.all(\n//         cityIds.map(async (id: string) => await axiosGetCity(id))\n//       );\n//       const toursWithLink = data.tours.map((tour: any, index: number) => ({\n//         ...tour,\n//         linkTo: \"tours\",\n//         cityInfo: citiesData[index],\n//       }));\n//       projects.push(...toursWithLink);\n//     }\n//     if (data.flights && Array.isArray(data.flights)) {\n//       const flightsWithLink = await Promise.all(\n//         data.flights.map(async (flight: any) => {\n//           const cityData = await axiosGetCity(flight.to_city);\n//           return {\n//             ...flight,\n//             linkTo: \"flights\",\n//             cityInfo: cityData,\n//           };\n//         })\n//       );\n//       projects.push(...flightsWithLink);\n//     }\n//     if (data.hotels && Array.isArray(data.hotels)) {\n//       const hotelsWithLink = await Promise.all(\n//         data.hotels.map(async (hotel: any) => {\n//           const cityData = await axiosGetCity(hotel.city);\n//           return {\n//             ...hotel,\n//             linkTo: \"hotels\",\n//             cityInfo: cityData,\n//           };\n//         })\n//       );\n//       projects.push(...hotelsWithLink);\n//     }\n//     if (data.transfers && Array.isArray(data.transfers)) {\n//       const transfersWithLink = await Promise.all(\n//         data.transfers.map(async (transfer: any) => {\n//           const cityData = await axiosGetCity(transfer.city);\n//           return {\n//             ...transfer,\n//             linkTo: \"car-rental\",\n//             cityInfo: cityData,\n//           };\n//         })\n//       );\n//       projects.push(...transfersWithLink);\n//     }\n//     return { ...data, projects };\n//   } catch (error) {\n//     console.error(\"Ошибка при загрузке home:\", error);\n//     return [];\n//   }\n// };\nconst axiosGetOurProjects = async ()=>{\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"\".concat(_constants_default_api__WEBPACK_IMPORTED_MODULE_0__.API_BASE_URL, \"our-projects/\"));\n        const data = response.data;\n        const projects = []; // Массив, который будет содержать все проекты\n        // Обработка туров\n        if (data.tours && Array.isArray(data.tours)) {\n            const cityIds = data.tours.map((tour)=>tour.to_city);\n            const citiesData = await Promise.all(cityIds.map(async (id)=>await (0,_cities__WEBPACK_IMPORTED_MODULE_1__.axiosGetCity)(id)));\n            const toursWithLink = data.tours.map((tour, index)=>({\n                    ...tour,\n                    linkTo: \"tours\",\n                    cityInfo: citiesData[index]\n                }));\n            projects.push(...toursWithLink); // Добавляем в массив projects\n        }\n        // Обработка авиабилетов\n        if (data.flights && Array.isArray(data.flights)) {\n            const flightsWithLink = await Promise.all(data.flights.map(async (flight)=>{\n                const cityData = await (0,_cities__WEBPACK_IMPORTED_MODULE_1__.axiosGetCity)(flight.to_city);\n                return {\n                    ...flight,\n                    linkTo: \"flights\",\n                    cityInfo: cityData\n                };\n            }));\n            projects.push(...flightsWithLink); // Добавляем в массив projects\n        }\n        // Обработка отелей\n        if (data.hotels && Array.isArray(data.hotels)) {\n            const hotelsWithLink = await Promise.all(data.hotels.map(async (hotel)=>{\n                const cityData = await (0,_cities__WEBPACK_IMPORTED_MODULE_1__.axiosGetCity)(hotel.city);\n                return {\n                    ...hotel,\n                    linkTo: \"hotels\",\n                    cityInfo: cityData\n                };\n            }));\n            projects.push(...hotelsWithLink); // Добавляем в массив projects\n        }\n        // Обработка трансферов\n        if (data.transfers && Array.isArray(data.transfers)) {\n            const transfersWithLink = await Promise.all(data.transfers.map(async (transfer)=>{\n                const cityData = await (0,_cities__WEBPACK_IMPORTED_MODULE_1__.axiosGetCity)(transfer.city);\n                return {\n                    ...transfer,\n                    linkTo: \"car-rental\",\n                    cityInfo: cityData\n                };\n            }));\n            projects.push(...transfersWithLink); // Добавляем в массив projects\n        }\n        return {\n            ...data,\n            projects\n        }; // Возвращаем весь объект с добавленным массивом projects\n    } catch (error) {\n        console.error(\"Ошибка при загрузке данных:\", error);\n        return [];\n    }\n};\nconst axiosGetFaqs = async ()=>{\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"\".concat(_constants_default_api__WEBPACK_IMPORTED_MODULE_0__.API_BASE_URL, \"faqs/\"));\n        const data = response.data;\n        return data;\n    } catch (error) {\n        console.error(\"Ошибка при загрузке faqs:\", error);\n        return [];\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zZXJ2aWNlcy9hYm91dC11cy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTBCO0FBQzZCO0FBQ2Y7QUFFakMsTUFBTUcsa0JBQWtCO0lBQzdCLElBQUk7UUFDRixNQUFNQyxXQUFXLE1BQU1KLDZDQUFLQSxDQUFDSyxHQUFHLENBQUMsR0FBZ0IsT0FBYkosZ0VBQVlBLEVBQUM7UUFDakQsTUFBTUssT0FBT0YsU0FBU0UsSUFBSTtRQUMxQixPQUFPQTtJQUNULEVBQUUsT0FBT0MsT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMsaUNBQWlDQTtRQUMvQyxPQUFPLEVBQUU7SUFDWDtBQUNGLEVBQUU7QUFFSyxNQUFNRSx3QkFBd0I7SUFDbkMsSUFBSTtRQUNGLE1BQU1MLFdBQVcsTUFBTUosNkNBQUtBLENBQUNLLEdBQUcsQ0FBQyxHQUFnQixPQUFiSixnRUFBWUEsRUFBQztRQUNqRCxNQUFNSyxPQUFPRixTQUFTRSxJQUFJO1FBQzFCLE9BQU9BO0lBQ1QsRUFBRSxPQUFPQyxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQyx3Q0FBd0NBO1FBQ3RELE9BQU8sRUFBRTtJQUNYO0FBQ0YsRUFBRTtBQUVGLG1EQUFtRDtBQUNuRCxVQUFVO0FBQ1Ysd0VBQXdFO0FBQ3hFLGtDQUFrQztBQUVsQywyQkFBMkI7QUFFM0IscURBQXFEO0FBQ3JELHFFQUFxRTtBQUVyRSw4Q0FBOEM7QUFDOUMsb0VBQW9FO0FBQ3BFLFdBQVc7QUFFWCw4RUFBOEU7QUFDOUUsbUJBQW1CO0FBQ25CLDJCQUEyQjtBQUMzQix1Q0FBdUM7QUFDdkMsYUFBYTtBQUNiLHlDQUF5QztBQUN6QyxRQUFRO0FBRVIseURBQXlEO0FBQ3pELG1EQUFtRDtBQUNuRCxvREFBb0Q7QUFDcEQsaUVBQWlFO0FBQ2pFLHFCQUFxQjtBQUNyQix5QkFBeUI7QUFDekIsaUNBQWlDO0FBQ2pDLGtDQUFrQztBQUNsQyxlQUFlO0FBQ2YsYUFBYTtBQUNiLFdBQVc7QUFDWCwy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U0FBU0gsSUFBSTtnQkFDakQsT0FBTztvQkFDTCxHQUFHRyxRQUFRO29CQUNYYixRQUFRO29CQUNSQyxVQUFVSztnQkFDWjtZQUNGO1lBRUZwQixTQUFTZ0IsSUFBSSxJQUFJVSxvQkFBb0IsOEJBQThCO1FBQ3JFO1FBRUEsT0FBTztZQUFFLEdBQUcvQixJQUFJO1lBQUVLO1FBQVMsR0FBRyx5REFBeUQ7SUFDekYsRUFBRSxPQUFPSixPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQywrQkFBK0JBO1FBQzdDLE9BQU8sRUFBRTtJQUNYO0FBQ0YsRUFBRTtBQUdHLE1BQU1nQyxlQUFlO0lBQzFCLElBQUk7UUFDRixNQUFNbkMsV0FBVyxNQUFNSiw2Q0FBS0EsQ0FBQ0ssR0FBRyxDQUFDLEdBQWdCLE9BQWJKLGdFQUFZQSxFQUFDO1FBQ2pELE1BQU1LLE9BQU9GLFNBQVNFLElBQUk7UUFDMUIsT0FBT0E7SUFDVCxFQUFFLE9BQU9DLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDLDZCQUE2QkE7UUFDM0MsT0FBTyxFQUFFO0lBQ1g7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zZXJ2aWNlcy9hYm91dC11cy50cz8yYWVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IEFQSV9CQVNFX1VSTCB9IGZyb20gXCJAL2NvbnN0YW50cy9kZWZhdWx0X2FwaVwiO1xuaW1wb3J0IHsgYXhpb3NHZXRDaXR5IH0gZnJvbSBcIi4vY2l0aWVzXCI7XG5cbmV4cG9ydCBjb25zdCBheGlvc0dldEFib3V0VXMgPSBhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYCR7QVBJX0JBU0VfVVJMfWFib3V0LXVzL2ApO1xuICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5kYXRhO1xuICAgIHJldHVybiBkYXRhO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCLQntGI0LjQsdC60LAg0L/RgNC4INC30LDQs9GA0YPQt9C60LUgYWJvdXQtdXM6XCIsIGVycm9yKTtcbiAgICByZXR1cm4gW107XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBheGlvc0dldEFib3V0VXNJbWFnZXMgPSBhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYCR7QVBJX0JBU0VfVVJMfWFib3V0LXVzLWltYWdlcy9gKTtcbiAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuZGF0YTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwi0J7RiNC40LHQutCwINC/0YDQuCDQt9Cw0LPRgNGD0LfQutC1IGFib3V0LXVzLWltYWdlczpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufTtcblxuLy8gZXhwb3J0IGNvbnN0IGF4aW9zR2V0T3VyUHJvamVjdHMgPSBhc3luYyAoKSA9PiB7XG4vLyAgIHRyeSB7XG4vLyAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYCR7QVBJX0JBU0VfVVJMfW91ci1wcm9qZWN0cy9gKTtcbi8vICAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuZGF0YTtcblxuLy8gICAgIGNvbnN0IHByb2plY3RzID0gW107XG5cbi8vICAgICBpZiAoZGF0YS50b3VycyAmJiBBcnJheS5pc0FycmF5KGRhdGEudG91cnMpKSB7XG4vLyAgICAgICBjb25zdCBjaXR5SWRzID0gZGF0YS50b3Vycy5tYXAoKHRvdXI6IGFueSkgPT4gdG91ci50b19jaXR5KTtcblxuLy8gICAgICAgY29uc3QgY2l0aWVzRGF0YSA9IGF3YWl0IFByb21pc2UuYWxsKFxuLy8gICAgICAgICBjaXR5SWRzLm1hcChhc3luYyAoaWQ6IHN0cmluZykgPT4gYXdhaXQgYXhpb3NHZXRDaXR5KGlkKSlcbi8vICAgICAgICk7XG5cbi8vICAgICAgIGNvbnN0IHRvdXJzV2l0aExpbmsgPSBkYXRhLnRvdXJzLm1hcCgodG91cjogYW55LCBpbmRleDogbnVtYmVyKSA9PiAoe1xuLy8gICAgICAgICAuLi50b3VyLFxuLy8gICAgICAgICBsaW5rVG86IFwidG91cnNcIixcbi8vICAgICAgICAgY2l0eUluZm86IGNpdGllc0RhdGFbaW5kZXhdLFxuLy8gICAgICAgfSkpO1xuLy8gICAgICAgcHJvamVjdHMucHVzaCguLi50b3Vyc1dpdGhMaW5rKTtcbi8vICAgICB9XG5cbi8vICAgICBpZiAoZGF0YS5mbGlnaHRzICYmIEFycmF5LmlzQXJyYXkoZGF0YS5mbGlnaHRzKSkge1xuLy8gICAgICAgY29uc3QgZmxpZ2h0c1dpdGhMaW5rID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4vLyAgICAgICAgIGRhdGEuZmxpZ2h0cy5tYXAoYXN5bmMgKGZsaWdodDogYW55KSA9PiB7XG4vLyAgICAgICAgICAgY29uc3QgY2l0eURhdGEgPSBhd2FpdCBheGlvc0dldENpdHkoZmxpZ2h0LnRvX2NpdHkpO1xuLy8gICAgICAgICAgIHJldHVybiB7XG4vLyAgICAgICAgICAgICAuLi5mbGlnaHQsXG4vLyAgICAgICAgICAgICBsaW5rVG86IFwiZmxpZ2h0c1wiLFxuLy8gICAgICAgICAgICAgY2l0eUluZm86IGNpdHlEYXRhLFxuLy8gICAgICAgICAgIH07XG4vLyAgICAgICAgIH0pXG4vLyAgICAgICApO1xuLy8gICAgICAgcHJvamVjdHMucHVzaCguLi5mbGlnaHRzV2l0aExpbmspO1xuLy8gICAgIH1cblxuLy8gICAgIGlmIChkYXRhLmhvdGVscyAmJiBBcnJheS5pc0FycmF5KGRhdGEuaG90ZWxzKSkge1xuLy8gICAgICAgY29uc3QgaG90ZWxzV2l0aExpbmsgPSBhd2FpdCBQcm9taXNlLmFsbChcbi8vICAgICAgICAgZGF0YS5ob3RlbHMubWFwKGFzeW5jIChob3RlbDogYW55KSA9PiB7XG4vLyAgICAgICAgICAgY29uc3QgY2l0eURhdGEgPSBhd2FpdCBheGlvc0dldENpdHkoaG90ZWwuY2l0eSk7XG4vLyAgICAgICAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgICAgIC4uLmhvdGVsLFxuLy8gICAgICAgICAgICAgbGlua1RvOiBcImhvdGVsc1wiLFxuLy8gICAgICAgICAgICAgY2l0eUluZm86IGNpdHlEYXRhLFxuLy8gICAgICAgICAgIH07XG4vLyAgICAgICAgIH0pXG4vLyAgICAgICApO1xuLy8gICAgICAgcHJvamVjdHMucHVzaCguLi5ob3RlbHNXaXRoTGluayk7XG4vLyAgICAgfVxuXG4vLyAgICAgaWYgKGRhdGEudHJhbnNmZXJzICYmIEFycmF5LmlzQXJyYXkoZGF0YS50cmFuc2ZlcnMpKSB7XG4vLyAgICAgICBjb25zdCB0cmFuc2ZlcnNXaXRoTGluayA9IGF3YWl0IFByb21pc2UuYWxsKFxuLy8gICAgICAgICBkYXRhLnRyYW5zZmVycy5tYXAoYXN5bmMgKHRyYW5zZmVyOiBhbnkpID0+IHtcbi8vICAgICAgICAgICBjb25zdCBjaXR5RGF0YSA9IGF3YWl0IGF4aW9zR2V0Q2l0eSh0cmFuc2Zlci5jaXR5KTtcbi8vICAgICAgICAgICByZXR1cm4ge1xuLy8gICAgICAgICAgICAgLi4udHJhbnNmZXIsXG4vLyAgICAgICAgICAgICBsaW5rVG86IFwiY2FyLXJlbnRhbFwiLFxuLy8gICAgICAgICAgICAgY2l0eUluZm86IGNpdHlEYXRhLFxuLy8gICAgICAgICAgIH07XG4vLyAgICAgICAgIH0pXG4vLyAgICAgICApO1xuLy8gICAgICAgcHJvamVjdHMucHVzaCguLi50cmFuc2ZlcnNXaXRoTGluayk7XG4vLyAgICAgfVxuXG4vLyAgICAgcmV0dXJuIHsgLi4uZGF0YSwgcHJvamVjdHMgfTtcbi8vICAgfSBjYXRjaCAoZXJyb3IpIHtcbi8vICAgICBjb25zb2xlLmVycm9yKFwi0J7RiNC40LHQutCwINC/0YDQuCDQt9Cw0LPRgNGD0LfQutC1IGhvbWU6XCIsIGVycm9yKTtcbi8vICAgICByZXR1cm4gW107XG4vLyAgIH1cbi8vIH07XG5cblxuZXhwb3J0IGNvbnN0IGF4aW9zR2V0T3VyUHJvamVjdHMgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGAke0FQSV9CQVNFX1VSTH1vdXItcHJvamVjdHMvYCk7XG4gICAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuZGF0YTtcbiAgXG4gICAgICBjb25zdCBwcm9qZWN0czogYW55W10gPSBbXTsgLy8g0JzQsNGB0YHQuNCyLCDQutC+0YLQvtGA0YvQuSDQsdGD0LTQtdGCINGB0L7QtNC10YDQttCw0YLRjCDQstGB0LUg0L/RgNC+0LXQutGC0YtcbiAgXG4gICAgICAvLyDQntCx0YDQsNCx0L7RgtC60LAg0YLRg9GA0L7QslxuICAgICAgaWYgKGRhdGEudG91cnMgJiYgQXJyYXkuaXNBcnJheShkYXRhLnRvdXJzKSkge1xuICAgICAgICBjb25zdCBjaXR5SWRzID0gZGF0YS50b3Vycy5tYXAoKHRvdXI6IGFueSkgPT4gdG91ci50b19jaXR5KTtcbiAgICAgICAgY29uc3QgY2l0aWVzRGF0YSA9IGF3YWl0IFByb21pc2UuYWxsKGNpdHlJZHMubWFwKGFzeW5jIChpZDogc3RyaW5nKSA9PiBhd2FpdCBheGlvc0dldENpdHkoaWQpKSk7XG4gIFxuICAgICAgICBjb25zdCB0b3Vyc1dpdGhMaW5rID0gZGF0YS50b3Vycy5tYXAoKHRvdXI6IGFueSwgaW5kZXg6IG51bWJlcikgPT4gKHtcbiAgICAgICAgICAuLi50b3VyLFxuICAgICAgICAgIGxpbmtUbzogXCJ0b3Vyc1wiLFxuICAgICAgICAgIGNpdHlJbmZvOiBjaXRpZXNEYXRhW2luZGV4XSxcbiAgICAgICAgfSkpO1xuICAgICAgICBwcm9qZWN0cy5wdXNoKC4uLnRvdXJzV2l0aExpbmspOyAvLyDQlNC+0LHQsNCy0LvRj9C10Lwg0LIg0LzQsNGB0YHQuNCyIHByb2plY3RzXG4gICAgICB9XG4gIFxuICAgICAgLy8g0J7QsdGA0LDQsdC+0YLQutCwINCw0LLQuNCw0LHQuNC70LXRgtC+0LJcbiAgICAgIGlmIChkYXRhLmZsaWdodHMgJiYgQXJyYXkuaXNBcnJheShkYXRhLmZsaWdodHMpKSB7XG4gICAgICAgIGNvbnN0IGZsaWdodHNXaXRoTGluayA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgICAgIGRhdGEuZmxpZ2h0cy5tYXAoYXN5bmMgKGZsaWdodDogYW55KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjaXR5RGF0YSA9IGF3YWl0IGF4aW9zR2V0Q2l0eShmbGlnaHQudG9fY2l0eSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAuLi5mbGlnaHQsXG4gICAgICAgICAgICAgIGxpbmtUbzogXCJmbGlnaHRzXCIsXG4gICAgICAgICAgICAgIGNpdHlJbmZvOiBjaXR5RGF0YSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgICAgcHJvamVjdHMucHVzaCguLi5mbGlnaHRzV2l0aExpbmspOyAvLyDQlNC+0LHQsNCy0LvRj9C10Lwg0LIg0LzQsNGB0YHQuNCyIHByb2plY3RzXG4gICAgICB9XG4gIFxuICAgICAgLy8g0J7QsdGA0LDQsdC+0YLQutCwINC+0YLQtdC70LXQuVxuICAgICAgaWYgKGRhdGEuaG90ZWxzICYmIEFycmF5LmlzQXJyYXkoZGF0YS5ob3RlbHMpKSB7XG4gICAgICAgIGNvbnN0IGhvdGVsc1dpdGhMaW5rID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgZGF0YS5ob3RlbHMubWFwKGFzeW5jIChob3RlbDogYW55KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjaXR5RGF0YSA9IGF3YWl0IGF4aW9zR2V0Q2l0eShob3RlbC5jaXR5KTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIC4uLmhvdGVsLFxuICAgICAgICAgICAgICBsaW5rVG86IFwiaG90ZWxzXCIsXG4gICAgICAgICAgICAgIGNpdHlJbmZvOiBjaXR5RGF0YSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgICAgcHJvamVjdHMucHVzaCguLi5ob3RlbHNXaXRoTGluayk7IC8vINCU0L7QsdCw0LLQu9GP0LXQvCDQsiDQvNCw0YHRgdC40LIgcHJvamVjdHNcbiAgICAgIH1cbiAgXG4gICAgICAvLyDQntCx0YDQsNCx0L7RgtC60LAg0YLRgNCw0L3RgdGE0LXRgNC+0LJcbiAgICAgIGlmIChkYXRhLnRyYW5zZmVycyAmJiBBcnJheS5pc0FycmF5KGRhdGEudHJhbnNmZXJzKSkge1xuICAgICAgICBjb25zdCB0cmFuc2ZlcnNXaXRoTGluayA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgICAgIGRhdGEudHJhbnNmZXJzLm1hcChhc3luYyAodHJhbnNmZXI6IGFueSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2l0eURhdGEgPSBhd2FpdCBheGlvc0dldENpdHkodHJhbnNmZXIuY2l0eSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAuLi50cmFuc2ZlcixcbiAgICAgICAgICAgICAgbGlua1RvOiBcImNhci1yZW50YWxcIixcbiAgICAgICAgICAgICAgY2l0eUluZm86IGNpdHlEYXRhLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgICBwcm9qZWN0cy5wdXNoKC4uLnRyYW5zZmVyc1dpdGhMaW5rKTsgLy8g0JTQvtCx0LDQstC70Y/QtdC8INCyINC80LDRgdGB0LjQsiBwcm9qZWN0c1xuICAgICAgfVxuICBcbiAgICAgIHJldHVybiB7IC4uLmRhdGEsIHByb2plY3RzIH07IC8vINCS0L7Qt9Cy0YDQsNGJ0LDQtdC8INCy0LXRgdGMINC+0LHRitC10LrRgiDRgSDQtNC+0LHQsNCy0LvQtdC90L3Ri9C8INC80LDRgdGB0LjQstC+0LwgcHJvamVjdHNcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcItCe0YjQuNCx0LrQsCDQv9GA0Lgg0LfQsNCz0YDRg9C30LrQtSDQtNCw0L3QvdGL0YU6XCIsIGVycm9yKTtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH07XG5cbiAgXG5leHBvcnQgY29uc3QgYXhpb3NHZXRGYXFzID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGAke0FQSV9CQVNFX1VSTH1mYXFzL2ApO1xuICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5kYXRhO1xuICAgIHJldHVybiBkYXRhO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCLQntGI0LjQsdC60LAg0L/RgNC4INC30LDQs9GA0YPQt9C60LUgZmFxczpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufTtcbiJdLCJuYW1lcyI6WyJheGlvcyIsIkFQSV9CQVNFX1VSTCIsImF4aW9zR2V0Q2l0eSIsImF4aW9zR2V0QWJvdXRVcyIsInJlc3BvbnNlIiwiZ2V0IiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImF4aW9zR2V0QWJvdXRVc0ltYWdlcyIsImF4aW9zR2V0T3VyUHJvamVjdHMiLCJwcm9qZWN0cyIsInRvdXJzIiwiQXJyYXkiLCJpc0FycmF5IiwiY2l0eUlkcyIsIm1hcCIsInRvdXIiLCJ0b19jaXR5IiwiY2l0aWVzRGF0YSIsIlByb21pc2UiLCJhbGwiLCJpZCIsInRvdXJzV2l0aExpbmsiLCJpbmRleCIsImxpbmtUbyIsImNpdHlJbmZvIiwicHVzaCIsImZsaWdodHMiLCJmbGlnaHRzV2l0aExpbmsiLCJmbGlnaHQiLCJjaXR5RGF0YSIsImhvdGVscyIsImhvdGVsc1dpdGhMaW5rIiwiaG90ZWwiLCJjaXR5IiwidHJhbnNmZXJzIiwidHJhbnNmZXJzV2l0aExpbmsiLCJ0cmFuc2ZlciIsImF4aW9zR2V0RmFxcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/services/about-us.ts\n"));

/***/ })

});