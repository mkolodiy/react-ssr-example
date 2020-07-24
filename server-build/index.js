/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/App */ \"./src/App.js\");\n\n\n\n\n\n\nconst PORT = process.env.PORT || 3006;\nconst app = express__WEBPACK_IMPORTED_MODULE_3___default()();\napp.get('/', (req, res) => {\n  const app = react_dom_server__WEBPACK_IMPORTED_MODULE_4___default.a.renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_App__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null));\n  const indexFile = path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve('./build/index.html');\n  fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFile(indexFile, 'utf8', (err, data) => {\n    if (err) {\n      console.error('Something went wrong:', err);\n      return res.status(500).send('Oops, better luck next time!');\n    }\n\n    return res.send(data.replace('<div id=\"root\"></div>', `<div id=\"root\">${app}</div>`));\n  });\n});\napp.use(express__WEBPACK_IMPORTED_MODULE_3___default.a.static('./build'));\napp.listen(PORT, () => {\n  console.log(`Server is listening on port ${PORT}`);\n});\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_useGetJobs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hooks/useGetJobs */ \"./src/hooks/useGetJobs.js\");\n/* harmony import */ var _components_Jobs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Jobs */ \"./src/components/Jobs.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_JobsPagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/JobsPagination */ \"./src/components/JobsPagination.js\");\n/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Search */ \"./src/components/Search.js\");\n\n\n\n\n\n\n\nfunction App() {\n  const [params, setParams] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({});\n  const [page, setPage] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(1);\n  const {\n    jobs,\n    loading,\n    error,\n    hasNextPage\n  } = Object(_hooks_useGetJobs__WEBPACK_IMPORTED_MODULE_1__[\"useGetJobs\"])(params, page);\n\n  const handleParamChange = e => {\n    const param = e.target.name;\n    const value = e.target.value;\n    setPage(1);\n    setParams(prevParams => ({ ...prevParams,\n      [param]: value\n    }));\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Container\"], {\n    className: \"my-4\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n    className: \"mb-4\"\n  }, \"GitHubJobs\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Search__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    params: params,\n    onParamChange: handleParamChange\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_JobsPagination__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    page: page,\n    setPage: setPage,\n    hasNextPage: hasNextPage\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Jobs__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    jobs: jobs,\n    loading: loading,\n    error: error\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_JobsPagination__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    page: page,\n    setPage: setPage,\n    hasNextPage: hasNextPage\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/components/Job.js":
/*!*******************************!*\
  !*** ./src/components/Job.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-markdown */ \"react-markdown\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst Job = ({\n  job\n}) => {\n  const [open, setOpen] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const {\n    title,\n    company,\n    created_at,\n    type,\n    location,\n    how_to_apply,\n    company_logo,\n    description\n  } = job;\n  const date = new Date(created_at).toLocaleDateString();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n    className: \"mb-3\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"d-flex justify-content-between\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Title, null, title, \" -\", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"text-muted font-weight-light\"\n  }, company)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Subtitle, {\n    className: \"text-muted mb-2\"\n  }, date), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Badge\"], {\n    variant: \"secondary\",\n    className: \"mr-2\"\n  }, type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Badge\"], {\n    variant: \"secondary\"\n  }, location), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      wordBreak: 'break-all'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    source: how_to_apply\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    className: \"d-none d-md-block\",\n    height: \"50\",\n    alt: company,\n    src: company_logo\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Text, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    onClick: () => setOpen(prevOpen => !prevOpen),\n    variant: \"primary\"\n  }, open ? 'Hide Details' : 'View Details')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Collapse\"], {\n    in: open\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"mt-4\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    source: description\n  })))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Job);\n\n//# sourceURL=webpack:///./src/components/Job.js?");

/***/ }),

/***/ "./src/components/Jobs.js":
/*!********************************!*\
  !*** ./src/components/Jobs.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Job__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Job */ \"./src/components/Job.js\");\n\n\n\nconst Jobs = ({\n  jobs,\n  loading,\n  error\n}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Loading...\"), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Error. Try refreshing.\"), jobs.map(job => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Job__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n  key: job.id,\n  job: job\n})));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Jobs);\n\n//# sourceURL=webpack:///./src/components/Jobs.js?");

/***/ }),

/***/ "./src/components/JobsPagination.js":
/*!******************************************!*\
  !*** ./src/components/JobsPagination.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst JobsPagination = ({\n  page,\n  setPage,\n  hasNextPage\n}) => {\n  const adjustPage = amount => {\n    setPage(prevPage => prevPage + amount);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Pagination\"], null, page !== 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Pagination\"].Prev, {\n    onClick: () => adjustPage(-1)\n  }), page !== 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Pagination\"].Item, {\n    onClick: () => setPage(1)\n  }, \"1\"), page > 2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Pagination\"].Ellipsis, null), page > 2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Pagination\"].Item, {\n    onClick: () => adjustPage(-1)\n  }, page - 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Pagination\"].Item, {\n    active: true\n  }, page), hasNextPage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Pagination\"].Item, {\n    onClick: () => adjustPage(1)\n  }, page + 1), hasNextPage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Pagination\"].Next, {\n    onClick: () => adjustPage(1)\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (JobsPagination);\n\n//# sourceURL=webpack:///./src/components/JobsPagination.js?");

/***/ }),

/***/ "./src/components/Search.js":
/*!**********************************!*\
  !*** ./src/components/Search.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst Search = ({\n  params,\n  onParamChange\n}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Form\"], {\n  className: \"mb-4\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Form\"].Row, {\n  className: \"align-items-end\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Form\"].Group, {\n  as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"]\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Form\"].Label, null, \"Description\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Form\"].Control, {\n  onChange: onParamChange,\n  value: params.description,\n  name: \"description\",\n  type: \"text\"\n})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Form\"].Group, {\n  as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"]\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Form\"].Label, null, \"Location\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Form\"].Control, {\n  onChange: onParamChange,\n  value: params.location,\n  name: \"location\",\n  type: \"text\"\n})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Form\"].Group, {\n  as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"],\n  xs: \"auto\",\n  className: \"ml-2\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Form\"].Check, {\n  onChange: onParamChange,\n  value: params.full_time,\n  name: \"full_time\",\n  id: \"full-time\",\n  label: \"Only Full Time\",\n  type: \"checkbox\",\n  className: \"mb-2\"\n}))));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Search);\n\n//# sourceURL=webpack:///./src/components/Search.js?");

/***/ }),

/***/ "./src/hooks/useGetJobs.js":
/*!*********************************!*\
  !*** ./src/hooks/useGetJobs.js ***!
  \*********************************/
/*! exports provided: useGetJobs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useGetJobs\", function() { return useGetJobs; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst BASE_URL = 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json';\nconst initialState = {\n  jobs: [],\n  loading: false,\n  error: false,\n  hasNextPage: false\n};\nconst ACTIONS = {\n  GET_JOBS_START: 'GET_JOBS_START',\n  GET_JOBS_SUCCESS: 'GET_JOBS_SUCCESS',\n  GET_JOBS_ERROR: 'GET_JOBS_ERROR',\n  SET_HAS_NEXT_PAGE: 'SET_HAS_NEXT_PAGE'\n};\n\nconst reducer = (state, action) => {\n  switch (action.type) {\n    case ACTIONS.GET_JOBS_START:\n      return { ...initialState,\n        loading: true\n      };\n\n    case ACTIONS.GET_JOBS_SUCCESS:\n      return { ...initialState,\n        jobs: action.payload.jobs\n      };\n\n    case ACTIONS.GET_JOBS_ERROR:\n      return { ...initialState,\n        error: action.payload.error\n      };\n\n    case ACTIONS.SET_HAS_NEXT_PAGE:\n      return { ...state,\n        hasNextPage: action.payload.hasNextPage\n      };\n\n    default:\n      return state;\n  }\n};\n\nconst useGetJobs = (params, page) => {\n  const [state, dispatch] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useReducer\"])(reducer, initialState);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    const cancelToken1 = axios__WEBPACK_IMPORTED_MODULE_1___default.a.CancelToken.source();\n    const cancelToken2 = axios__WEBPACK_IMPORTED_MODULE_1___default.a.CancelToken.source();\n    dispatch({\n      type: ACTIONS.GET_JOBS_START\n    });\n    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(BASE_URL, {\n      cancelToken: cancelToken1.token,\n      params: {\n        markdown: true,\n        page,\n        ...params\n      }\n    }).then(res => dispatch({\n      type: ACTIONS.GET_JOBS_SUCCESS,\n      payload: {\n        jobs: res.data\n      }\n    })).catch(err => {\n      if (axios__WEBPACK_IMPORTED_MODULE_1___default.a.isCancel(err)) return;\n      dispatch({\n        type: ACTIONS.GET_JOBS_ERROR,\n        payload: {\n          error: err\n        }\n      });\n    });\n    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(BASE_URL, {\n      cancelToken: cancelToken2.token,\n      params: {\n        markdown: true,\n        page: page + 1,\n        ...params\n      }\n    }).then(res => dispatch({\n      type: ACTIONS.SET_HAS_NEXT_PAGE,\n      payload: {\n        hasNextPage: res.data.length !== 0\n      }\n    })).catch(err => {\n      if (axios__WEBPACK_IMPORTED_MODULE_1___default.a.isCancel(err)) return;\n      dispatch({\n        type: ACTIONS.GET_JOBS_ERROR,\n        payload: {\n          error: err\n        }\n      });\n    });\n    return () => {\n      cancelToken1.cancel();\n      cancelToken2.cancel();\n    };\n  }, [params, page]);\n  return state;\n};\n\n//# sourceURL=webpack:///./src/hooks/useGetJobs.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-bootstrap\");\n\n//# sourceURL=webpack:///external_%22react-bootstrap%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-markdown":
/*!*********************************!*\
  !*** external "react-markdown" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-markdown\");\n\n//# sourceURL=webpack:///external_%22react-markdown%22?");

/***/ })

/******/ });