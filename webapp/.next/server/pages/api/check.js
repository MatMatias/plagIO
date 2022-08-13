"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/check";
exports.ids = ["pages/api/check"];
exports.modules = {

/***/ "fast-xml-parser":
/*!**********************************!*\
  !*** external "fast-xml-parser" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("fast-xml-parser");

/***/ }),

/***/ "sqlite3":
/*!**************************!*\
  !*** external "sqlite3" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("sqlite3");

/***/ }),

/***/ "sqlite":
/*!*************************!*\
  !*** external "sqlite" ***!
  \*************************/
/***/ ((module) => {

module.exports = import("sqlite");;

/***/ }),

/***/ "fs/promises":
/*!******************************!*\
  !*** external "fs/promises" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("fs/promises");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./database/open-database.ts":
/*!***********************************!*\
  !*** ./database/open-database.ts ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"openDb\": () => (/* binding */ openDb)\n/* harmony export */ });\n/* harmony import */ var sqlite3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sqlite3 */ \"sqlite3\");\n/* harmony import */ var sqlite3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sqlite3__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var sqlite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sqlite */ \"sqlite\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sqlite__WEBPACK_IMPORTED_MODULE_1__]);\nsqlite__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nsqlite3__WEBPACK_IMPORTED_MODULE_0___default().verbose();\nasync function openDb() {\n    const db = await (0,sqlite__WEBPACK_IMPORTED_MODULE_1__.open)({\n        filename: \"./database.db\",\n        driver: (sqlite3__WEBPACK_IMPORTED_MODULE_0___default().Database)\n    });\n    await db.migrate();\n    return db;\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYXRhYmFzZS9vcGVuLWRhdGFiYXNlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBOEI7QUFDQTtBQUU5QkEsc0RBQWUsRUFBRSxDQUFDO0FBRVgsZUFBZUcsTUFBTSxHQUFHO0lBQzdCLE1BQU1DLEVBQUUsR0FBRyxNQUFNSCw0Q0FBSSxDQUFDO1FBQ3BCSSxRQUFRLEVBQUUsZUFBZTtRQUN6QkMsTUFBTSxFQUFFTix5REFBZ0I7S0FDekIsQ0FBQztJQUVGLE1BQU1JLEVBQUUsQ0FBQ0ksT0FBTyxFQUFFLENBQUM7SUFFbkIsT0FBT0osRUFBRSxDQUFDO0NBQ1giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL2RhdGFiYXNlL29wZW4tZGF0YWJhc2UudHM/MWZjNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3FsaXRlMyBmcm9tIFwic3FsaXRlM1wiO1xuaW1wb3J0IHsgb3BlbiB9IGZyb20gXCJzcWxpdGVcIjtcblxuc3FsaXRlMy52ZXJib3NlKCk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBvcGVuRGIoKSB7XG4gIGNvbnN0IGRiID0gYXdhaXQgb3Blbih7XG4gICAgZmlsZW5hbWU6IFwiLi9kYXRhYmFzZS5kYlwiLFxuICAgIGRyaXZlcjogc3FsaXRlMy5EYXRhYmFzZSxcbiAgfSk7XG5cbiAgYXdhaXQgZGIubWlncmF0ZSgpO1xuXG4gIHJldHVybiBkYjtcbn1cbiJdLCJuYW1lcyI6WyJzcWxpdGUzIiwib3BlbiIsInZlcmJvc2UiLCJvcGVuRGIiLCJkYiIsImZpbGVuYW1lIiwiZHJpdmVyIiwiRGF0YWJhc2UiLCJtaWdyYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./database/open-database.ts\n");

/***/ }),

/***/ "(api)/./pages/api/check.ts":
/*!****************************!*\
  !*** ./pages/api/check.ts ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/index */ \"(api)/./utils/index.ts\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var database_open_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! database/open-database */ \"(api)/./database/open-database.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([database_open_database__WEBPACK_IMPORTED_MODULE_2__]);\ndatabase_open_database__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nasync function handler(req, res) {\n    const database = await (0,database_open_database__WEBPACK_IMPORTED_MODULE_2__.openDb)();\n    if (req.method === \"POST\") {\n        await database.exec(`INSERT INTO Plagiarism (text) VALUES (\"${req.body}\")`);\n        res.status(200).json({\n            status: 200,\n            message: \"File sent\"\n        });\n    } else if (req.method === \"GET\") {\n        /*** SEND TEXT (req.body) TO THE NEURAL NET ***/ /*** GET THE XML OUTPUTED FROM THE NEURAL NET AND SEND IT AS A RESPONSE ***/ const testDir = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"test\");\n        const xmlJson = await (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.parseXML)(`${testDir}/suspicious-document00001.xml`);\n        const plagiarisms = (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.getPlagiarisms)(xmlJson);\n        const { text  } = await database.get(`SELECT text FROM Plagiarism WHERE id = (SELECT MAX(id) FROM Plagiarism)`);\n        res.status(201).json({\n            status: 201,\n            message: \"Text and plagiarisms received\",\n            data: {\n                text: text,\n                plagiarisms: plagiarisms\n            }\n        });\n    } else if (req.method === \"DELETE\") {\n        await database.exec(`DELETE FROM Plagiarism WHERE id = (SELECT MAX(id) FROM Plagiarism)`);\n        res.status(200).json({\n            status: 200,\n            message: \"Last plagiarism deleted\"\n        });\n    } else {\n        res.status(405).send({\n            status: 405,\n            message: \"Only GET or POST requests allowed\"\n        });\n    }\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2hlY2sudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFeUQ7QUFDakM7QUFDd0I7QUFPakMsZUFBZUksT0FBTyxDQUNuQ0MsR0FBbUIsRUFDbkJDLEdBQXNFLEVBQ3RFO0lBQ0EsTUFBTUMsUUFBUSxHQUFHLE1BQU1KLDhEQUFNLEVBQUU7SUFFL0IsSUFBSUUsR0FBRyxDQUFDRyxNQUFNLEtBQUssTUFBTSxFQUFFO1FBQ3pCLE1BQU1ELFFBQVEsQ0FBQ0UsSUFBSSxDQUFDLENBQUMsdUNBQXVDLEVBQUVKLEdBQUcsQ0FBQ0ssSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDNUVKLEdBQUcsQ0FBQ0ssTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUQsTUFBTSxFQUFFLEdBQUc7WUFBRUUsT0FBTyxFQUFFLFdBQVc7U0FBRSxDQUFDLENBQUM7S0FDN0QsTUFBTSxJQUFJUixHQUFHLENBQUNHLE1BQU0sS0FBSyxLQUFLLEVBQUU7UUFDL0IsZ0RBQWdELENBQ2hELDRFQUE0RSxDQUM1RSxNQUFNTSxPQUFPLEdBQUdaLGdEQUFTLENBQUNjLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFLEVBQUUsTUFBTSxDQUFDO1FBQ2hELE1BQU1DLE9BQU8sR0FBRyxNQUFNakIsc0RBQVEsQ0FBQyxDQUFDLEVBQUVhLE9BQU8sQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1FBQ3pFLE1BQU1LLFdBQVcsR0FBR25CLDREQUFjLENBQUNrQixPQUFPLENBQUM7UUFFM0MsTUFBTSxFQUFFRSxJQUFJLEdBQUUsR0FBRyxNQUFNYixRQUFRLENBQUNjLEdBQUcsQ0FDakMsQ0FBQyx1RUFBdUUsQ0FBQyxDQUMxRTtRQUVEZixHQUFHLENBQUNLLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQ25CRCxNQUFNLEVBQUUsR0FBRztZQUNYRSxPQUFPLEVBQUUsK0JBQStCO1lBQ3hDUyxJQUFJLEVBQUU7Z0JBQUVGLElBQUksRUFBRUEsSUFBSTtnQkFBRUQsV0FBVyxFQUFFQSxXQUFXO2FBQUU7U0FDL0MsQ0FBQyxDQUFDO0tBQ0osTUFBTSxJQUFJZCxHQUFHLENBQUNHLE1BQU0sS0FBSyxRQUFRLEVBQUU7UUFDbEMsTUFBTUQsUUFBUSxDQUFDRSxJQUFJLENBQ2pCLENBQUMsa0VBQWtFLENBQUMsQ0FDckUsQ0FBQztRQUNGSCxHQUFHLENBQUNLLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVELE1BQU0sRUFBRSxHQUFHO1lBQUVFLE9BQU8sRUFBRSx5QkFBeUI7U0FBRSxDQUFDLENBQUM7S0FDM0UsTUFBTTtRQUNMUCxHQUFHLENBQ0FLLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FDWFksSUFBSSxDQUFDO1lBQUVaLE1BQU0sRUFBRSxHQUFHO1lBQUVFLE9BQU8sRUFBRSxtQ0FBbUM7U0FBRSxDQUFDLENBQUM7S0FDeEU7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vcGFnZXMvYXBpL2NoZWNrLnRzPzA4ZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB0eXBlIHsgUGxhZ2lhcmlzbSB9IGZyb20gXCJAL3R5cGVzL3R5cGVzXCI7XG5pbXBvcnQgeyBnZXRQbGFnaWFyaXNtcywgcGFyc2VYTUwgfSBmcm9tIFwiQC91dGlscy9pbmRleFwiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCB7IG9wZW5EYiB9IGZyb20gXCJkYXRhYmFzZS9vcGVuLWRhdGFiYXNlXCI7XG5cbnR5cGUgRGF0YSA9IHtcbiAgdGV4dDogc3RyaW5nO1xuICBwbGFnaWFyaXNtczogUGxhZ2lhcmlzbVtdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8eyBzdGF0dXM6IG51bWJlcjsgbWVzc2FnZTogc3RyaW5nOyBkYXRhPzogRGF0YSB9PlxuKSB7XG4gIGNvbnN0IGRhdGFiYXNlID0gYXdhaXQgb3BlbkRiKCk7XG5cbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgYXdhaXQgZGF0YWJhc2UuZXhlYyhgSU5TRVJUIElOVE8gUGxhZ2lhcmlzbSAodGV4dCkgVkFMVUVTIChcIiR7cmVxLmJvZHl9XCIpYCk7XG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdGF0dXM6IDIwMCwgbWVzc2FnZTogXCJGaWxlIHNlbnRcIiB9KTtcbiAgfSBlbHNlIGlmIChyZXEubWV0aG9kID09PSBcIkdFVFwiKSB7XG4gICAgLyoqKiBTRU5EIFRFWFQgKHJlcS5ib2R5KSBUTyBUSEUgTkVVUkFMIE5FVCAqKiovXG4gICAgLyoqKiBHRVQgVEhFIFhNTCBPVVRQVVRFRCBGUk9NIFRIRSBORVVSQUwgTkVUIEFORCBTRU5EIElUIEFTIEEgUkVTUE9OU0UgKioqL1xuICAgIGNvbnN0IHRlc3REaXIgPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgXCJ0ZXN0XCIpO1xuICAgIGNvbnN0IHhtbEpzb24gPSBhd2FpdCBwYXJzZVhNTChgJHt0ZXN0RGlyfS9zdXNwaWNpb3VzLWRvY3VtZW50MDAwMDEueG1sYCk7XG4gICAgY29uc3QgcGxhZ2lhcmlzbXMgPSBnZXRQbGFnaWFyaXNtcyh4bWxKc29uKTtcblxuICAgIGNvbnN0IHsgdGV4dCB9ID0gYXdhaXQgZGF0YWJhc2UuZ2V0KFxuICAgICAgYFNFTEVDVCB0ZXh0IEZST00gUGxhZ2lhcmlzbSBXSEVSRSBpZCA9IChTRUxFQ1QgTUFYKGlkKSBGUk9NIFBsYWdpYXJpc20pYFxuICAgICk7XG5cbiAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7XG4gICAgICBzdGF0dXM6IDIwMSxcbiAgICAgIG1lc3NhZ2U6IFwiVGV4dCBhbmQgcGxhZ2lhcmlzbXMgcmVjZWl2ZWRcIixcbiAgICAgIGRhdGE6IHsgdGV4dDogdGV4dCwgcGxhZ2lhcmlzbXM6IHBsYWdpYXJpc21zIH0sXG4gICAgfSk7XG4gIH0gZWxzZSBpZiAocmVxLm1ldGhvZCA9PT0gXCJERUxFVEVcIikge1xuICAgIGF3YWl0IGRhdGFiYXNlLmV4ZWMoXG4gICAgICBgREVMRVRFIEZST00gUGxhZ2lhcmlzbSBXSEVSRSBpZCA9IChTRUxFQ1QgTUFYKGlkKSBGUk9NIFBsYWdpYXJpc20pYFxuICAgICk7XG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdGF0dXM6IDIwMCwgbWVzc2FnZTogXCJMYXN0IHBsYWdpYXJpc20gZGVsZXRlZFwiIH0pO1xuICB9IGVsc2Uge1xuICAgIHJlc1xuICAgICAgLnN0YXR1cyg0MDUpXG4gICAgICAuc2VuZCh7IHN0YXR1czogNDA1LCBtZXNzYWdlOiBcIk9ubHkgR0VUIG9yIFBPU1QgcmVxdWVzdHMgYWxsb3dlZFwiIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsiZ2V0UGxhZ2lhcmlzbXMiLCJwYXJzZVhNTCIsInBhdGgiLCJvcGVuRGIiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiZGF0YWJhc2UiLCJtZXRob2QiLCJleGVjIiwiYm9keSIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwidGVzdERpciIsImpvaW4iLCJwcm9jZXNzIiwiY3dkIiwieG1sSnNvbiIsInBsYWdpYXJpc21zIiwidGV4dCIsImdldCIsImRhdGEiLCJzZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/check.ts\n");

/***/ }),

/***/ "(api)/./utils/getPlagiarisms.ts":
/*!*********************************!*\
  !*** ./utils/getPlagiarisms.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPlagiarisms\": () => (/* binding */ getPlagiarisms)\n/* harmony export */ });\nfunction getPlagiarisms(xmlJson) {\n    return xmlJson.document.feature.slice(2);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9nZXRQbGFnaWFyaXNtcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBRU8sU0FBU0EsY0FBYyxDQUFDQyxPQUFnQixFQUFFO0lBQy9DLE9BQU9BLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDQyxPQUFPLENBQUNDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUMxQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vdXRpbHMvZ2V0UGxhZ2lhcmlzbXMudHM/MjhmZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IFhNTEpzb24gfSBmcm9tIFwiQC90eXBlcy90eXBlc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGxhZ2lhcmlzbXMoeG1sSnNvbjogWE1MSnNvbikge1xuICByZXR1cm4geG1sSnNvbi5kb2N1bWVudC5mZWF0dXJlLnNsaWNlKDIpO1xufVxuIl0sIm5hbWVzIjpbImdldFBsYWdpYXJpc21zIiwieG1sSnNvbiIsImRvY3VtZW50IiwiZmVhdHVyZSIsInNsaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./utils/getPlagiarisms.ts\n");

/***/ }),

/***/ "(api)/./utils/index.ts":
/*!************************!*\
  !*** ./utils/index.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPlagiarisms\": () => (/* reexport safe */ _getPlagiarisms__WEBPACK_IMPORTED_MODULE_0__.getPlagiarisms),\n/* harmony export */   \"parseXML\": () => (/* reexport safe */ _parseXML__WEBPACK_IMPORTED_MODULE_1__.parseXML)\n/* harmony export */ });\n/* harmony import */ var _getPlagiarisms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPlagiarisms */ \"(api)/./utils/getPlagiarisms.ts\");\n/* harmony import */ var _parseXML__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parseXML */ \"(api)/./utils/parseXML.ts\");\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWtEO0FBQ1o7QUFFRiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vdXRpbHMvaW5kZXgudHM/NTZkNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRQbGFnaWFyaXNtcyB9IGZyb20gXCIuL2dldFBsYWdpYXJpc21zXCI7XG5pbXBvcnQgeyBwYXJzZVhNTCB9IGZyb20gXCIuL3BhcnNlWE1MXCI7XG5cbmV4cG9ydCB7IGdldFBsYWdpYXJpc21zLCBwYXJzZVhNTCB9O1xuIl0sIm5hbWVzIjpbImdldFBsYWdpYXJpc21zIiwicGFyc2VYTUwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./utils/index.ts\n");

/***/ }),

/***/ "(api)/./utils/parseXML.ts":
/*!***************************!*\
  !*** ./utils/parseXML.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"parseXML\": () => (/* binding */ parseXML)\n/* harmony export */ });\n/* harmony import */ var fast_xml_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fast-xml-parser */ \"fast-xml-parser\");\n/* harmony import */ var fast_xml_parser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fast_xml_parser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs/promises */ \"fs/promises\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function parseXML(path) {\n    const options = {\n        ignoreAttributes: false\n    };\n    const parser = new fast_xml_parser__WEBPACK_IMPORTED_MODULE_0__.XMLParser(options);\n    const data = await fs_promises__WEBPACK_IMPORTED_MODULE_1___default().readFile(path, {\n        encoding: \"utf-8\"\n    });\n    const jsonObj = parser.parse(data);\n    return jsonObj;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9wYXJzZVhNTC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE0QztBQUNmO0FBRXRCLGVBQWVFLFFBQVEsQ0FBQ0MsSUFBWSxFQUFFO0lBQzNDLE1BQU1DLE9BQU8sR0FBRztRQUNkQyxnQkFBZ0IsRUFBRSxLQUFLO0tBQ3hCO0lBQ0QsTUFBTUMsTUFBTSxHQUFHLElBQUlOLHNEQUFTLENBQUNJLE9BQU8sQ0FBQztJQUVyQyxNQUFNRyxJQUFJLEdBQUcsTUFBTU4sMkRBQVcsQ0FBQ0UsSUFBSSxFQUFFO1FBQUVNLFFBQVEsRUFBRSxPQUFPO0tBQUUsQ0FBQztJQUMzRCxNQUFNQyxPQUFPLEdBQUdKLE1BQU0sQ0FBQ0ssS0FBSyxDQUFDSixJQUFJLENBQUM7SUFFbEMsT0FBT0csT0FBTyxDQUFDO0NBQ2hCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi91dGlscy9wYXJzZVhNTC50cz9iZGNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFhNTFBhcnNlciB9IGZyb20gXCJmYXN0LXhtbC1wYXJzZXJcIjtcbmltcG9ydCBmcyBmcm9tIFwiZnMvcHJvbWlzZXNcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBhcnNlWE1MKHBhdGg6IHN0cmluZykge1xuICBjb25zdCBvcHRpb25zID0ge1xuICAgIGlnbm9yZUF0dHJpYnV0ZXM6IGZhbHNlLFxuICB9O1xuICBjb25zdCBwYXJzZXIgPSBuZXcgWE1MUGFyc2VyKG9wdGlvbnMpO1xuXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBmcy5yZWFkRmlsZShwYXRoLCB7IGVuY29kaW5nOiBcInV0Zi04XCIgfSk7XG4gIGNvbnN0IGpzb25PYmogPSBwYXJzZXIucGFyc2UoZGF0YSk7XG5cbiAgcmV0dXJuIGpzb25PYmo7XG59XG4iXSwibmFtZXMiOlsiWE1MUGFyc2VyIiwiZnMiLCJwYXJzZVhNTCIsInBhdGgiLCJvcHRpb25zIiwiaWdub3JlQXR0cmlidXRlcyIsInBhcnNlciIsImRhdGEiLCJyZWFkRmlsZSIsImVuY29kaW5nIiwianNvbk9iaiIsInBhcnNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./utils/parseXML.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/check.ts"));
module.exports = __webpack_exports__;

})();