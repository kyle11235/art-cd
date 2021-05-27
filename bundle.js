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
/******/ 	return __webpack_require__(__webpack_require__.s = 126);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.STORE = exports.GLOBAL_EVENTS = exports.FRONTEND_ROOT_PATH = exports.ONBOARDING = exports.VERSION_UPDATE = exports.PROJECTS = exports.NEW_RELIC = exports.MFA_COOKIES = exports.OPERATION_SYSTEM = exports.SERVICE_NAMES_TO_KEY = exports.SERVICES_NAMES = exports.FOOTER_FIELDS = exports.OAUTH_ERROR_QUERY_PARAM = exports.SERVICES_CONFIG_NOTIFY = exports.TOPOLOGY = exports.API_VERSION = exports.GENERAL = exports.JOIN_KEY = exports.PIPELINES = exports.EXCLUDED_CROWD_AUTHENTICATION_PATHS = exports.ARTIFACTORY_REALM_TYPES = exports.XSS_URLS_WHITELIST = exports.REALM = exports.SKIP_SLIDING_WINDOW_ROUTES = exports.OPEN_OR_AUTHENTICATED_ROUTES = exports.OPEN_ROUTES = exports.TEMP_SSO_HEADER_NAME = exports.CSRF_URLS_WHITELIST = exports.START_TASKS = exports.LOGGING = exports.ANONYMOUS = exports.PROXYING_HEADERS = exports.CROWD = exports.TRACE_ID_HEADER = exports.DEFAULT_VALUES = exports.TIME = exports.NODE_SERVER_PATH = exports.THREADLOCAL_NAMESPACE = exports.TOKEN_CONSTANTS = exports.PRODUCT_HOME = exports.STATUS_CODES = exports.SERVICES = exports.EVENTS = exports.CACHE = exports.ACCESS = exports.CUSTOM_HEADERS = exports.ARTIFACTORY_SESSION_COOKIE_NAME = exports.Constants = void 0;
const SERVICES_1 = __webpack_require__(55);
Object.defineProperty(exports, "SERVICE_NAMES_TO_KEY", { enumerable: true, get: function () { return SERVICES_1.SERVICE_NAMES_TO_KEY; } });
Object.defineProperty(exports, "SERVICES", { enumerable: true, get: function () { return SERVICES_1.SERVICES; } });
Object.defineProperty(exports, "SERVICES_NAMES", { enumerable: true, get: function () { return SERVICES_1.SERVICES_NAMES; } });
const NODE_SERVER_PATH_1 = __webpack_require__(129);
Object.defineProperty(exports, "API_VERSION", { enumerable: true, get: function () { return NODE_SERVER_PATH_1.API_VERSION; } });
Object.defineProperty(exports, "NODE_SERVER_PATH", { enumerable: true, get: function () { return NODE_SERVER_PATH_1.NODE_SERVER_PATH; } });
const ACCESS_1 = __webpack_require__(130);
exports.ACCESS = ACCESS_1.default;
const ARTIFACTORY_SESSION_COOKIE_NAME_1 = __webpack_require__(131);
exports.ARTIFACTORY_SESSION_COOKIE_NAME = ARTIFACTORY_SESSION_COOKIE_NAME_1.default;
const DEFAULT_VALUES_1 = __webpack_require__(132);
exports.DEFAULT_VALUES = DEFAULT_VALUES_1.default;
const TIME_1 = __webpack_require__(76);
exports.TIME = TIME_1.default;
const THREADLOCAL_NAMESPACE_1 = __webpack_require__(133);
exports.THREADLOCAL_NAMESPACE = THREADLOCAL_NAMESPACE_1.default;
const TOKEN_CONSTANTS_1 = __webpack_require__(75);
exports.TOKEN_CONSTANTS = TOKEN_CONSTANTS_1.default;
const PRODUCT_HOME_1 = __webpack_require__(77);
exports.PRODUCT_HOME = PRODUCT_HOME_1.default;
const CROWD_1 = __webpack_require__(134);
exports.CROWD = CROWD_1.default;
const LOGGING_1 = __webpack_require__(135);
exports.LOGGING = LOGGING_1.default;
const STATUS_CODES_1 = __webpack_require__(42);
exports.STATUS_CODES = STATUS_CODES_1.default;
const CACHE_1 = __webpack_require__(136);
exports.CACHE = CACHE_1.default;
const TRACE_ID_HEADER_1 = __webpack_require__(137);
exports.TRACE_ID_HEADER = TRACE_ID_HEADER_1.default;
const PROXYING_HEADERS_1 = __webpack_require__(138);
exports.PROXYING_HEADERS = PROXYING_HEADERS_1.default;
const ANONYMOUS_1 = __webpack_require__(139);
exports.ANONYMOUS = ANONYMOUS_1.default;
const START_TASKS_1 = __webpack_require__(140);
exports.START_TASKS = START_TASKS_1.default;
const CSRF_URLS_WHITELIST_1 = __webpack_require__(141);
exports.CSRF_URLS_WHITELIST = CSRF_URLS_WHITELIST_1.default;
const TOPOLOGY_1 = __webpack_require__(142);
exports.TOPOLOGY = TOPOLOGY_1.default;
const SERVICES_CONFIG_NOTIFY_1 = __webpack_require__(143);
exports.SERVICES_CONFIG_NOTIFY = SERVICES_CONFIG_NOTIFY_1.default;
const FOOTER_FIELDS_1 = __webpack_require__(207);
exports.FOOTER_FIELDS = FOOTER_FIELDS_1.default;
const NEW_RELIC_1 = __webpack_require__(208);
exports.NEW_RELIC = NEW_RELIC_1.default;
const MFA_COOKIES_1 = __webpack_require__(209);
exports.MFA_COOKIES = MFA_COOKIES_1.default;
const PROJECTS_1 = __webpack_require__(210);
exports.PROJECTS = PROJECTS_1.default;
const STORE_1 = __webpack_require__(212);
exports.STORE = STORE_1.default;
const FRONTEND_ROOT_PATH_1 = __webpack_require__(213);
Object.defineProperty(exports, "FRONTEND_ROOT_PATH", { enumerable: true, get: function () { return FRONTEND_ROOT_PATH_1.FRONTEND_ROOT_PATH; } });
const AUTHENTICATION_1 = __webpack_require__(214);
Object.defineProperty(exports, "EXCLUDED_CROWD_AUTHENTICATION_PATHS", { enumerable: true, get: function () { return AUTHENTICATION_1.EXCLUDED_CROWD_AUTHENTICATION_PATHS; } });
Object.defineProperty(exports, "OAUTH_ERROR_QUERY_PARAM", { enumerable: true, get: function () { return AUTHENTICATION_1.OAUTH_ERROR_QUERY_PARAM; } });
Object.defineProperty(exports, "OPEN_OR_AUTHENTICATED_ROUTES", { enumerable: true, get: function () { return AUTHENTICATION_1.OPEN_OR_AUTHENTICATED_ROUTES; } });
Object.defineProperty(exports, "OPEN_ROUTES", { enumerable: true, get: function () { return AUTHENTICATION_1.OPEN_ROUTES; } });
Object.defineProperty(exports, "REALM", { enumerable: true, get: function () { return AUTHENTICATION_1.REALM; } });
Object.defineProperty(exports, "SKIP_SLIDING_WINDOW_ROUTES", { enumerable: true, get: function () { return AUTHENTICATION_1.SKIP_SLIDING_WINDOW_ROUTES; } });
Object.defineProperty(exports, "TEMP_SSO_HEADER_NAME", { enumerable: true, get: function () { return AUTHENTICATION_1.TEMP_SSO_HEADER_NAME; } });
const XSS_URLS_WHITELIST_1 = __webpack_require__(215);
exports.XSS_URLS_WHITELIST = XSS_URLS_WHITELIST_1.default;
const ARTIFACTORY_REALM_TYPES_1 = __webpack_require__(216);
Object.defineProperty(exports, "ARTIFACTORY_REALM_TYPES", { enumerable: true, get: function () { return ARTIFACTORY_REALM_TYPES_1.ARTIFACTORY_REALM_TYPES; } });
const PIPELINES_1 = __webpack_require__(217);
exports.PIPELINES = PIPELINES_1.default;
const GENERAL_1 = __webpack_require__(218);
exports.GENERAL = GENERAL_1.default;
const JOIN_KEY_1 = __webpack_require__(219);
exports.JOIN_KEY = JOIN_KEY_1.default;
const CUSTOM_HEADERS_1 = __webpack_require__(80);
exports.CUSTOM_HEADERS = CUSTOM_HEADERS_1.default;
const OPERATION_SYSTEM_1 = __webpack_require__(224);
exports.OPERATION_SYSTEM = OPERATION_SYSTEM_1.default;
const VERSION_UPDATE_1 = __webpack_require__(225);
exports.VERSION_UPDATE = VERSION_UPDATE_1.default;
const ONBOARDING_1 = __webpack_require__(226);
exports.ONBOARDING = ONBOARDING_1.default;
const EVENTS_1 = __webpack_require__(227);
exports.EVENTS = EVENTS_1.default;
const GLOBAL_EVENTS_1 = __webpack_require__(228);
Object.defineProperty(exports, "GLOBAL_EVENTS", { enumerable: true, get: function () { return GLOBAL_EVENTS_1.GLOBAL_EVENTS; } });
/**
 * c is only used for backward compatibility,
 * DO NOT add new value here, instead, add them to the export object
 */
const c = {
    ARTIFACTORY_SESSION_COOKIE_NAME: ARTIFACTORY_SESSION_COOKIE_NAME_1.default,
    ACCESS: ACCESS_1.default,
    CACHE: CACHE_1.default,
    SERVICES: SERVICES_1.SERVICES,
    STATUS_CODES: STATUS_CODES_1.default,
    PRODUCT_HOME: PRODUCT_HOME_1.default,
    TOKEN_CONSTANTS: TOKEN_CONSTANTS_1.default,
    THREADLOCAL_NAMESPACE: THREADLOCAL_NAMESPACE_1.default,
    NODE_SERVER_PATH: NODE_SERVER_PATH_1.NODE_SERVER_PATH,
    CUSTOM_HEADERS: CUSTOM_HEADERS_1.default,
    TIME: TIME_1.default,
    DEFAULT_VALUES: DEFAULT_VALUES_1.default,
    TRACE_ID_HEADER: TRACE_ID_HEADER_1.default,
    CROWD: CROWD_1.default,
};
exports.Constants = c;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerFactory = void 0;
const winston = __webpack_require__(45);
const models_1 = __webpack_require__(26);
const Constants_1 = __webpack_require__(0);
const LoggerUtils_1 = __webpack_require__(81);
// add log level color
winston.addColors({
    service: Constants_1.LOGGING.COLORS.SERVICE,
    warn: Constants_1.LOGGING.COLORS.WARN,
    error: Constants_1.LOGGING.COLORS.ERROR,
    info: Constants_1.LOGGING.COLORS.INFO
});
class LoggerFactory {
    static getLogger(id, logType = models_1.LogType.APPLICATION) {
        if (winston.loggers.has(logType)) {
            return winston.loggers.get(logType);
        }
        const logger = LoggerUtils_1.LoggerUtils.createLogger(logType);
        LoggerUtils_1.LoggerUtils.addLoggerToList(logType, logger);
        return logger;
    }
}
exports.LoggerFactory = LoggerFactory;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(17), exports);
__exportStar(__webpack_require__(236), exports);
__exportStar(__webpack_require__(237), exports);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(59), exports);
__exportStar(__webpack_require__(27), exports);
__exportStar(__webpack_require__(278), exports);
__exportStar(__webpack_require__(279), exports);
__exportStar(__webpack_require__(280), exports);
__exportStar(__webpack_require__(289), exports);
__exportStar(__webpack_require__(291), exports);
__exportStar(__webpack_require__(106), exports);
__exportStar(__webpack_require__(292), exports);
__exportStar(__webpack_require__(105), exports);
__exportStar(__webpack_require__(293), exports);
__exportStar(__webpack_require__(294), exports);
__exportStar(__webpack_require__(295), exports);
__exportStar(__webpack_require__(296), exports);
__exportStar(__webpack_require__(297), exports);
__exportStar(__webpack_require__(32), exports);
__exportStar(__webpack_require__(298), exports);
__exportStar(__webpack_require__(104), exports);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* tslint:disable */
const defaultConfig_1 = __webpack_require__(128);
const configuration_manager_1 = __webpack_require__(229);
const Constants_1 = __webpack_require__(0);
const microservice = Constants_1.SERVICES.FRONTEND.NAME;
// aliases allow you to specify alternate names for some properties.
/*
  Remember, aliases have a hierarchy.

  In the example below, config.get("DISTRIBUTION_URL") and config.get('frontend.proxy.distribution.url')
  will return the value set for "DISTRIBUTION_URL"
  and if that is not found, the value set for 'proxy.distribution.url'
 */
const aliases = {
    DISTRIBUTION_URL: ['frontend.servicesUrls.distribution'],
    ARTIFACTORY_URL: ['frontend.servicesUrls.artifactory'],
    XRAY_URL: ['frontend.servicesUrls.xray'],
    MISSION_CONTROL_URL: ['frontend.servicesUrls.mc'],
    INSIGHT_URL: ['frontend.servicesUrls.insight'],
    METADATA_URL: ['frontend.servicesUrls.metadata'],
    PIPELINES_URL: ['frontend.servicesUrls.pipelines'],
    ACCESS_URL: ['frontend.servicesUrls.access'],
    JOIN_KEY: ['shared.security.joinKey'],
};
const productHome = process.env.JF_PRODUCT_HOME ? process.env.JF_PRODUCT_HOME : null;
/*
The config-manager will try to parse files in the following locations:
rootDir = productData;
1. IF `rootDir` is available, it attempts to read the file from the path `<rootDir>/var/etc/system.yaml`. Throws an error if the file is not found.
3. IF `rootDir` is not available, developers can use `config.use` to specify any valid yaml file to use as configuration (edited)
 */
const config = configuration_manager_1.default({ productHome, microservice, aliases, defaults: defaultConfig_1.default });
const routerPort = config.get('router.entrypoints.internalPort');
if (routerPort) {
    const routerBaseUrl = `localhost:${routerPort}`;
    const routerHttpUrl = `http://${routerBaseUrl}`;
    const { ARTIFACTORY, DISTRIBUTION, INSIGHT, METADATA, MISSION_CONTROL, ACCESS, XRAY, PIPELINES } = Constants_1.SERVICES;
    const servicesUrlsSettings = {
        [DISTRIBUTION.NAME]: `${routerHttpUrl}/${DISTRIBUTION.SUB_URL}`,
        [ARTIFACTORY.NAME]: `${routerHttpUrl}/${ARTIFACTORY.SUB_URL}`,
        [XRAY.NAME]: `${routerHttpUrl}/${XRAY.SUB_URL}`,
        [MISSION_CONTROL.NAME]: `${routerHttpUrl}/${MISSION_CONTROL.SUB_URL}`,
        [INSIGHT.NAME]: `${routerHttpUrl}/${INSIGHT.SUB_URL}`,
        [ACCESS.NAME]: `${routerHttpUrl}/${ACCESS.SUB_URL}`,
        [METADATA.NAME]: `${routerHttpUrl}/${METADATA.SUB_URL}`,
        [PIPELINES.NAME]: `${routerHttpUrl}/${PIPELINES.SUB_URL}`,
    };
    for (const serviceName of Object.keys(servicesUrlsSettings)) {
        const serviceUrlPath = `frontend.servicesUrls.${serviceName}`;
        if (config.get(serviceUrlPath) === defaultConfig_1.default.frontend.servicesUrls[serviceName]) {
            config.set(serviceUrlPath, servicesUrlsSettings[serviceName]);
        }
    }
    config.set('frontend.router.baseUrl.default', routerBaseUrl);
}
module.exports = config;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JFrogController = void 0;
const LoggerFactory_1 = __webpack_require__(1);
const Decorators_1 = __webpack_require__(2);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
const CLIENT_SPINNER_PARAM = '?jfLoader=true';
class JFrogController {
    static getLoginCtxFromReq(req) {
        const token = JFrogController.getTokenFromRequest(req);
        const { userName, sessionId, userScope } = req;
        return {
            userName,
            sessionId,
            userScope,
            ...(token && { token }),
        };
    }
    static getPasswordFromHeader(basicAuthHeader) {
        try {
            const trimmedAuthHeader = basicAuthHeader.replace(CLIENT_SPINNER_PARAM, '');
            const decodedCredentials = Buffer.from(trimmedAuthHeader.split(' ')[1], 'base64').toString();
            return decodedCredentials.split(':')[1];
        }
        catch (e) {
            logger.error(e);
            return null;
        }
    }
    static sendNoCacheResponse(res, target) {
        res.setHeader('Cache-Control', 'no-cache');
        res.writeHead(res.statusCode);
        res.write(JSON.stringify(target));
        res.end();
    }
    static addHeadersToResponse(headers, res) {
        Object.entries(headers).map(([key, value]) => {
            res.setHeader(key, value);
        });
    }
    static addTokenToRequest(req, token) {
        req.headers.Authorization = `Bearer ${token}`;
    }
    static getTokenFromRequest(req) {
        var _a, _b;
        return (_b = (_a = req.headers) === null || _a === void 0 ? void 0 : _a.Authorization) === null || _b === void 0 ? void 0 : _b.replace('Bearer ', '');
    }
    static removeAllHeadersFromResponse(res) {
        res.getHeaderNames().forEach((headerName) => res.removeHeader(headerName));
    }
}
__decorate([
    Decorators_1.methodLog({ logger })
], JFrogController, "getLoginCtxFromReq", null);
__decorate([
    Decorators_1.methodLog({ logger })
], JFrogController, "getPasswordFromHeader", null);
exports.JFrogController = JFrogController;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.API = void 0;
const events_1 = __webpack_require__(220);
const validator_1 = __webpack_require__(221);
const crypto = __webpack_require__(43);
const semver = __webpack_require__(44);
const nodejs_commons_1 = __webpack_require__(222);
let version;
try {
    const pj = __webpack_require__(223);
    version = pj.version;
}
catch (e) {
    version = null;
}
class API {
    static async sleep(ms) {
        return new Promise((resolve) => {
            setTimeout(resolve, ms);
        });
    }
    static async exitAppWithMessage(message, logger) {
        logger.info('Attempting to close app');
        return new Promise((resolve) => {
            logger[message instanceof Error ? 'error' : 'info'](message);
            process.emit('exit', 0);
            resolve();
        });
    }
    static getEnvironmentVariable(key) {
        return process.env[key];
    }
    static silentWinston() {
        const value = process.env.WINSTON_SILENT;
        return value === 'true' || value === 'TRUE' || value === 'True';
    }
    static stringToSnakeCase(str) {
        if (!str) {
            return '';
        }
        return str
            .replace(/[^\w\s]/g, '')
            .replace(/\s+/g, ' ')
            .toLowerCase()
            .split(' ')
            .join('_');
    }
    static getProjectVersion(logger) {
        if (version) {
            return version;
        }
        else {
            const error = new Error('Error getting father package json : not found');
            (logger ? logger : console).error(error);
            return null;
        }
    }
    static getNodeId() {
        return __webpack_require__(4).get('shared.node.id');
    }
    static isObject(n) {
        return API.getFieldType(n) === 'object';
    }
    static isStringsArray(value) {
        return Array.isArray(value) && !value.some((item) => typeof item !== 'string');
    }
    static removeArrDuplications(arr) {
        return [...new Set(arr)];
    }
    static getFieldType(field) {
        return {}.toString
            .call(field)
            .match(/\s([a-zA-Z]+)/)[1]
            .toLowerCase(); // don't even try to read it
    }
    static getGlobalEventEmitter() {
        return API.eventEmitter;
    }
    static getFunctionDetails(f) {
        const details = {
            isFunction: false,
            isAsync: false,
        };
        try {
            const functionType = f.constructor.name;
            if (functionType === 'AsyncFunction') {
                details.isAsync = true;
                details.isFunction = true;
            }
            else if (functionType === 'Function') {
                details.isFunction = true;
            }
            return details;
        }
        catch (e) {
            return details;
        }
    }
    static getSha1HashedString(str) {
        return crypto.createHash('sha1').update(str, 'utf8').digest('hex');
    }
    static cloneObject(o) {
        return Object.assign({}, o);
    }
    static isHex(str) {
        return validator_1.default.isHexadecimal(str);
    }
    static isValidProductionVersion(testedVersion) {
        return !!semver.valid(testedVersion);
    }
    static getArrayPowerSet(arr, includeEmpty = true) {
        let powerSet = arr.reduce((sets, value) => sets.concat(sets.map((set) => [value, ...set])), [[]]);
        if (!includeEmpty) {
            powerSet = powerSet.filter((a) => a.length > 0);
        }
        return powerSet;
    }
    static shuffleArray(arr) {
        return arr.sort(() => {
            return 0.5 - Math.random();
        });
    }
}
exports.API = API;
API.getRevision = (projectVersion = version) => {
    try {
        const { prerelease, patch } = semver.parse(projectVersion);
        const isMilestone = /m\d{3}/.test(prerelease.join(''));
        return isMilestone ? nodejs_commons_1.calcRevisionFromVersion(projectVersion) : `100${String(patch).padStart(5, '0')}`;
    }
    catch (e) {
        console.error('error trying to get project revision' + e);
        return projectVersion;
    }
};
API.eventEmitter = new events_1.EventEmitter();


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@jfrog/access-nodejs-client");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthError = void 0;
const CustomError_1 = __webpack_require__(16);
const Constants_1 = __webpack_require__(0);
class AuthError extends CustomError_1.CustomError {
    constructor(message, externalMessage = AuthError.defaultMessage, statusCode = Constants_1.STATUS_CODES.UNAUTHORIZED) {
        super(message, externalMessage);
        this.statusCode = statusCode;
    }
    static get defaultMessage() {
        return 'unauthorized';
    }
}
exports.AuthError = AuthError;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Services_1 = __webpack_require__(3);
const LoggerFactory_1 = __webpack_require__(1);
const Decorators_1 = __webpack_require__(2);
const Constants_1 = __webpack_require__(0);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
class PlatformConfiguration {
    static get anonAccessEnabled() {
        return PlatformConfiguration._anonAccessEnabled;
    }
    static set anonAccessEnabled(value) {
        PlatformConfiguration._anonAccessEnabled = value;
    }
    static get isSass() {
        return PlatformConfiguration._isSass;
    }
    static set isSass(value) {
        PlatformConfiguration._isSass = value;
    }
    static get accessConfig() {
        return PlatformConfiguration._accessConfig;
    }
    static set accessConfig(value) {
        PlatformConfiguration._accessConfig = value;
    }
    static get isHttps() {
        var _a, _b;
        return !!((_b = (_a = PlatformConfiguration._accessConfig) === null || _a === void 0 ? void 0 : _a.security) === null || _b === void 0 ? void 0 : _b.tls);
    }
    static get crowdEnabled() {
        return PlatformConfiguration._crowdEnabled;
    }
    static set crowdEnabled(value) {
        PlatformConfiguration._crowdEnabled = value;
    }
    static get crowdCookieName() {
        return PlatformConfiguration._crowdCookieName;
    }
    static set crowdCookieName(value) {
        PlatformConfiguration._crowdCookieName = value;
    }
    static set httpSsoProxied(value) {
        PlatformConfiguration._httpSsoProxied = value;
    }
    static get httpSsoProxied() {
        return PlatformConfiguration._httpSsoProxied;
    }
    static set httpSsoHeaderName(value) {
        PlatformConfiguration._httpSsoHeaderName = value;
    }
    static get httpSsoHeaderName() {
        return PlatformConfiguration._httpSsoHeaderName;
    }
    static get autoRedirectToSamlLogin() {
        return PlatformConfiguration._autoRedirectToSamlLogin;
    }
    static set autoRedirectToSamlLogin(value) {
        PlatformConfiguration._autoRedirectToSamlLogin = value;
    }
    static async fetchAndUpdateAllConfigurations() {
        if (!PlatformConfiguration._initialConfigurationReceived) {
            PlatformConfiguration.isSass = await PlatformConfiguration.getIsAOL();
        }
        const configurationsPromises = [
            PlatformConfiguration.fetchAndUpdateAnonAccessEnabled().catch((e) => {
                throw new Error(`fetchAndUpdateAnonAccessEnabled failed with error ${e.message}`);
            }),
            PlatformConfiguration.fetchAndUpdateCrowdConfigs().catch((e) => {
                throw new Error(`fetchAndUpdateCrowdConfigs failed with error ${e.message}`);
            }),
            !PlatformConfiguration.isSass ?
                PlatformConfiguration.fetchAndUpdateHttpSsoConfigs()
                    .catch((e) => {
                    throw new Error(`fetchAndUpdateHttpSsoConfigs failed with error ${e.message}`);
                }) : Promise.resolve(),
            !PlatformConfiguration._initialConfigurationReceived ?
                PlatformConfiguration.fetchAndUpdateAccessConfiguration()
                    .catch((e) => {
                    throw new Error(`fetchAndUpdateAccessConfiguration failed with error ${e.message}`);
                }) : Promise.resolve()
        ];
        await Promise.all(configurationsPromises);
        PlatformConfiguration._initialConfigurationReceived = true;
    }
    static async fetchAndUpdateAnonAccessEnabled() {
        const secConfig = await Services_1.ArtifactoryService.getSecurityConfig();
        PlatformConfiguration.anonAccessEnabled = secConfig.anonAccessEnabled;
    }
    static async fetchAndUpdateCrowdConfigs() {
        const crowdConfig = await Services_1.ArtifactoryService.getCrowdConfig();
        PlatformConfiguration.crowdEnabled = crowdConfig.enableIntegration;
        if (PlatformConfiguration.crowdEnabled) {
            PlatformConfiguration.crowdCookieName = crowdConfig.customCookieTokenKey || Constants_1.CROWD.COOKIE_NAME;
        }
    }
    static async fetchAndUpdateHttpSsoConfigs() {
        const httpSsoConfigs = await Services_1.ArtifactoryService.getHttpSsoConfig();
        PlatformConfiguration.httpSsoProxied = httpSsoConfigs.httpSsoProxied;
        PlatformConfiguration.httpSsoHeaderName = httpSsoConfigs.remoteUserRequestVariable;
    }
    static async fetchAndUpdateAutoRedirectToSamlLogin() {
        const samlConfig = await Services_1.ArtifactoryService.getSamlConfig();
        PlatformConfiguration.autoRedirectToSamlLogin = samlConfig.autoRedirect;
    }
    static async fetchAndUpdateAccessConfiguration() {
        PlatformConfiguration.accessConfig = await Services_1.AccessService.getConfig();
    }
    static async getIsAOL() {
        const footerResult = await Services_1.ArtifactoryService.getFooterWithAdminToken();
        return footerResult.isAol;
    }
}
PlatformConfiguration._anonAccessEnabled = true;
PlatformConfiguration._crowdEnabled = false;
PlatformConfiguration._crowdCookieName = Constants_1.CROWD.COOKIE_NAME;
PlatformConfiguration._httpSsoProxied = false;
PlatformConfiguration._autoRedirectToSamlLogin = false;
PlatformConfiguration._isSass = false;
PlatformConfiguration._initialConfigurationReceived = false;
PlatformConfiguration._accessConfig = {};
__decorate([
    Decorators_1.methodLog({ logger })
], PlatformConfiguration, "fetchAndUpdateAllConfigurations", null);
exports.default = PlatformConfiguration;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessAdminClient = void 0;
const Constants_1 = __webpack_require__(0);
const CacheDB_1 = __webpack_require__(35);
const LoggerFactory_1 = __webpack_require__(1);
const access_nodejs_client_1 = __webpack_require__(9);
const AccessJoinKeyUtils_1 = __webpack_require__(86);
const ServiceID_1 = __webpack_require__(25);
const API_1 = __webpack_require__(7);
const Services_1 = __webpack_require__(3);
const HeadersManager_1 = __webpack_require__(46);
const Decorators_1 = __webpack_require__(2);
const config = __webpack_require__(4);
let REJOIN_LOCKED = false;
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
class AccessAdminClient {
    static get client() {
        return new Promise(async (resolve, reject) => {
            try {
                if (!AccessAdminClient._client) {
                    await AccessAdminClient.initAccessClient();
                }
                resolve(AccessAdminClient._client);
            }
            catch (e) {
                logger.error(new Error(`Couldn't get access client instance, Error : [${e.message}]`));
                reject();
            }
        });
    }
    static get isConnected() {
        return !!this._client;
    }
    static async registerOnRouter() {
        try {
            logger.debug("Registering on router");
            const client = await AccessAdminClient.client;
            const frontEndContext = config.get("frontend.context");
            const port = config.get("frontend.port");
            const registerRequest = new access_nodejs_client_1.RegisterServiceRequest();
            registerRequest.setNodeId(API_1.API.getNodeId());
            registerRequest.setServiceId(ServiceID_1.ServiceID.getServiceId());
            const redirectPath = new access_nodejs_client_1.RoutePath();
            redirectPath.setMatch("/");
            redirectPath.setReplace("");
            const routePath = new access_nodejs_client_1.RoutePath();
            routePath.setMatch(`${frontEndContext}/(.*)`);
            routePath.setReplace("/$1");
            const routePathWithoutSlash = new access_nodejs_client_1.RoutePath();
            routePathWithoutSlash.setMatch(frontEndContext);
            routePathWithoutSlash.setReplace("/");
            const uiEndPoint = new access_nodejs_client_1.LocalEndpoint();
            uiEndPoint.setPort(port);
            uiEndPoint.setProtocol(access_nodejs_client_1.EndpointProtocol.HTTP1);
            uiEndPoint.setPathsList([routePath, routePathWithoutSlash, redirectPath]);
            const healthCheckEndpoint = new access_nodejs_client_1.HealthCheckEndpoint();
            healthCheckEndpoint.setPort(port);
            healthCheckEndpoint.setPath(config.get("frontend.router.healthPath"));
            registerRequest.setEndpointsList([uiEndPoint]);
            registerRequest.setHealthCheckEndpoint(healthCheckEndpoint);
            const ctx = await AccessAdminClient.getAccessAdminContext();
            await client.register(ctx, registerRequest);
            logger.info(`UI service successfully registered on router, serviceId: ${ServiceID_1.ServiceID.getServiceId()}`);
        }
        catch (e) {
            const err = new Error(`Cannot register service on router, error: ${e.message}`);
            logger.error(err);
            throw err;
        }
    }
    static async unregisterOnRouter() {
        try {
            const client = await AccessAdminClient.client;
            const registerRequest = new access_nodejs_client_1.UnregisterServiceRequest();
            registerRequest.setNodeId(API_1.API.getNodeId());
            registerRequest.setServiceId(ServiceID_1.ServiceID.getServiceId());
            const ctx = await AccessAdminClient.getAccessAdminContext();
            await client.unregister(ctx, registerRequest);
            logger.info(`UI service successfully unregistered on router, serviceId: ${ServiceID_1.ServiceID.getServiceId()}`);
        }
        catch (e) {
            const err = new Error(`Cannot register service on router, error: ${e.message}`);
            logger.error(err);
            throw err;
        }
    }
    static async getAdminToken() {
        logger.silly("getting admin token from cache");
        const cache = CacheDB_1.CacheDB.getTokenCacheDB();
        let token = await cache.get(Constants_1.CACHE.ADMIN_TOKEN_KEY);
        if (!token) {
            logger.silly("admin token was not found in cache, getting from access");
            token = await AccessAdminClient.getAdminTokenFromAccess();
            if (token) {
                await AccessAdminClient.saveAdminTokenToCache(token);
            }
        }
        return token || null;
    }
    static async wipeToken() {
        const cache = CacheDB_1.CacheDB.getTokenCacheDB();
        return cache.cleanAll();
    }
    static reset() {
        this._client = null;
    }
    static async close() {
        if (this._client) {
            await AccessAdminClient.unregisterOnRouter();
            logger.info("Closing access client");
            await this._client.close();
            this._client = undefined;
        }
        else {
            logger.info("Access client is already closed");
        }
    }
    static async getAccessAdminContext() {
        const headers = HeadersManager_1.HeadersManager.getContextHeaders();
        const token = await AccessAdminClient.getAdminToken();
        return { token, headers };
    }
    static async getAccessContext(authData) {
        const { userName, sessionId, userScope } = authData;
        const headers = HeadersManager_1.HeadersManager.getContextHeaders();
        const token = await Services_1.AccessTokenService.getImpersonationToken(Constants_1.SERVICES.ACCESS.NAME, userName, sessionId, userScope);
        return { token, headers };
    }
    static async getAdminTokenFromAccess() {
        logger.silly("Getting admin token from artifactory");
        try {
            const accessClient = await AccessAdminClient.client;
            const token = await accessClient.join({
                serviceName: Constants_1.SERVICES.FRONTEND.TYPE,
                serviceVersion: API_1.API.getProjectVersion(),
                serviceRevision: API_1.API.getRevision()
            });
            if (token && token.trim() !== "") {
                logger.debug(`Got admin token`);
            }
            return token || null;
        }
        catch (e) {
            const err = new Error(`Failed getting admin token; Error: [${e}]`);
            logger.error(err);
            throw e;
        }
    }
    static async rejoin() {
        if (REJOIN_LOCKED) {
            logger.debug(`rejoin is already in process, will not trigger a new rejoin`);
        }
        REJOIN_LOCKED = true;
        try {
            await AccessAdminClient.unregisterOnRouter();
            await AccessAdminClient.wipeToken();
            await AccessAdminClient.getAdminToken();
            await AccessAdminClient.registerOnRouter();
            REJOIN_LOCKED = false;
        }
        catch (e) {
            logger.error(`failed access rejoin : ${e.message}`);
            REJOIN_LOCKED = false;
            throw e;
        }
    }
    static async initAccessClient() {
        try {
            AccessAdminClient.subscribeOnRejoinEvent();
            const nodeId = API_1.API.getNodeId();
            const serviceId = ServiceID_1.ServiceID.getServiceId();
            const joinKey = await AccessJoinKeyUtils_1.AccessJoinKeyUtils.getJoinKey();
            const routerBaseUrl = config.get("frontend.router.baseUrl.default");
            const accessBaseUrl = config.get(`frontend.servicesUrls.${Constants_1.SERVICES.ACCESS.NAME}`);
            const accessGrpcBaseUrl = config.get("frontend.router.baseUrl.default");
            const numberOfRetries = config.get("frontend.bootstrap.retries");
            const headers = HeadersManager_1.HeadersManager.addUserAgentToHeaders({});
            const conf = {
                routerBaseUrl,
                accessBaseUrl,
                accessGrpcBaseUrl,
                joinKey,
                serviceId,
                nodeId,
                numberOfRetries,
                logger,
                headers
            };
            AccessAdminClient._client = new access_nodejs_client_1.AccessClient(conf);
        }
        catch (e) {
            throw new Error(`Cluster join: Failed init access client; Error: [${e.message}]`);
        }
    }
    static subscribeOnRejoinEvent() {
        const eventEmitter = API_1.API.getGlobalEventEmitter();
        eventEmitter.on(Constants_1.EVENTS.ACCESS.ADMIN_CLIENT_REJOIN, () => {
            AccessAdminClient.rejoin();
        });
    }
    static async saveAdminTokenToCache(token) {
        logger.debug("saving super admin token in cache");
        const adminTokenKey = Constants_1.CACHE.ADMIN_TOKEN_KEY;
        const cache = CacheDB_1.CacheDB.getTokenCacheDB();
        await cache.set(adminTokenKey, token, Constants_1.TIME.WEEK_MS * 4 * 12);
    }
}
__decorate([
    Decorators_1.handleAccessUnauthorized()
], AccessAdminClient, "unregisterOnRouter", null);
__decorate([
    Decorators_1.handleAccessUnauthorized()
], AccessAdminClient, "getAdminToken", null);
__decorate([
    Decorators_1.handleAccessUnauthorized()
], AccessAdminClient, "wipeToken", null);
__decorate([
    Decorators_1.methodLog({ logger })
], AccessAdminClient, "getAccessAdminContext", null);
__decorate([
    Decorators_1.methodLog({ logger })
], AccessAdminClient, "getAccessContext", null);
exports.AccessAdminClient = AccessAdminClient;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(10), exports);
__exportStar(__webpack_require__(248), exports);
__exportStar(__webpack_require__(249), exports);
__exportStar(__webpack_require__(250), exports);
__exportStar(__webpack_require__(251), exports);
__exportStar(__webpack_require__(252), exports);
__exportStar(__webpack_require__(253), exports);
__exportStar(__webpack_require__(254), exports);
__exportStar(__webpack_require__(255), exports);
__exportStar(__webpack_require__(256), exports);
__exportStar(__webpack_require__(257), exports);
__exportStar(__webpack_require__(95), exports);
__exportStar(__webpack_require__(258), exports);
__exportStar(__webpack_require__(259), exports);


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(116), exports);
__exportStar(__webpack_require__(73), exports);
__exportStar(__webpack_require__(342), exports);
__exportStar(__webpack_require__(343), exports);
__exportStar(__webpack_require__(116), exports);
__exportStar(__webpack_require__(122), exports);
__exportStar(__webpack_require__(344), exports);
__exportStar(__webpack_require__(345), exports);
__exportStar(__webpack_require__(350), exports);
__exportStar(__webpack_require__(352), exports);
__exportStar(__webpack_require__(40), exports);
__exportStar(__webpack_require__(353), exports);
__exportStar(__webpack_require__(354), exports);
__exportStar(__webpack_require__(355), exports);
__exportStar(__webpack_require__(356), exports);
__exportStar(__webpack_require__(361), exports);
__exportStar(__webpack_require__(362), exports);


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("express-validator");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomError = void 0;
class CustomError extends Error {
    constructor(message, externalMessage = '') {
        super(message);
        this.name = this.constructor.name;
        this.externalMessage = externalMessage;
    }
    get body() {
        return {
            message: this.externalMessage,
            errorCode: this.errorCode,
        };
    }
    get errorCode() {
        return this._errorCode;
    }
    set statusCode(code) {
        this._statusCode = code;
    }
    get statusCode() {
        return this._statusCode;
    }
    get externalMessage() {
        return this._externalMessage;
    }
    set externalMessage(externalMessage) {
        this._externalMessage = externalMessage;
    }
    get errorType() {
        return this._errorType;
    }
    set errorType(errorType) {
        this._errorType = errorType;
    }
}
exports.CustomError = CustomError;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.methodLog = void 0;
const LoggerFactory_1 = __webpack_require__(1);
const API_1 = __webpack_require__(7);
const fileLogger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
function methodLog(ctx) {
    return (target, propertyKey, descriptor) => {
        try {
            const logger = ctx && ctx.logger ? ctx.logger : fileLogger;
            const loggerLevels = logger.transports.map((transport) => transport.level);
            const shouldNotLog = !loggerLevels.includes('silly');
            if (shouldNotLog) {
                return;
            }
            const { isAsync, isFunction } = API_1.API.getFunctionDetails(descriptor.value);
            const className = target.name || target.constructor.name;
            const oldFunc = descriptor.value;
            // todo :: DRY
            if (isAsync) {
                descriptor.value = async function () {
                    const start = process.hrtime();
                    logger.silly(`in ${className}::${propertyKey}`);
                    const res = await oldFunc.apply(this, arguments);
                    const end = process.hrtime(start);
                    const calculatedTime = calculateTime(end);
                    logger.silly(`method ${className}::${propertyKey} returned and took ${calculatedTime}`);
                    return res;
                };
            }
            else if (isFunction) {
                descriptor.value = function () {
                    const start = process.hrtime();
                    logger.silly(`in ${className}::${propertyKey}`);
                    const res = oldFunc.apply(this, arguments);
                    const end = process.hrtime(start);
                    const calculatedTime = calculateTime(end);
                    logger.silly(`method ${className}::${propertyKey} returned and took ${calculatedTime}`);
                    return res;
                };
            }
        }
        catch (e) {
            fileLogger.warn(`logging decorator failed : ${e.message}`);
            return;
        }
    };
}
exports.methodLog = methodLog;
function calculateTime([seconds, nanoseconds]) {
    let time;
    let timeUnit;
    if (seconds > 0) {
        time = seconds + nanoseconds * 1e-9;
        timeUnit = 'seconds';
    }
    else {
        time = nanoseconds * 1e-6;
        timeUnit = 'ms';
    }
    return `${time.toPrecision(3)} ${timeUnit}`;
}


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientFactory = exports.ANONYMOUS_CTX = void 0;
const config = __webpack_require__(4);
const access_nodejs_client_1 = __webpack_require__(9);
const artifactory_nodejs_client_1 = __webpack_require__(61);
const metadata_nodejs_client_1 = __webpack_require__(62);
const distribution_nodejs_client_1 = __webpack_require__(84);
const pipelines_nodejs_client_1 = __webpack_require__(34);
const xray_nodejs_client_1 = __webpack_require__(85);
const event_nodejs_client_1 = __webpack_require__(234);
const Services_1 = __webpack_require__(3);
const Constants_1 = __webpack_require__(0);
const LoggerFactory_1 = __webpack_require__(1);
const AccessAdminClient_1 = __webpack_require__(12);
const HeadersManager_1 = __webpack_require__(46);
const mission_control_nodejs_client_1 = __webpack_require__(238);
const Decorators_1 = __webpack_require__(2);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
exports.ANONYMOUS_CTX = {};
class ClientFactory {
    constructor(serviceType) {
        this.serviceType = serviceType;
        this.serviceName = Constants_1.SERVICES[serviceType].NAME;
    }
    async getWithAuth(ctx) {
        const { userName, sessionId, userScope } = ctx;
        logger.silly(`getting ${this.serviceName} client with auth for username : ${userName} with sessionId ${sessionId} and scope : ${userScope}`);
        return this.get({ ...ctx, addAuth: true });
    }
    async getWithoutAuth(ctx) {
        const { userName, sessionId, userScope } = ctx;
        logger.silly(`getting ${this.serviceName} client without auth for username : ${userName} with sessionId ${sessionId} and scope : ${userScope}`);
        return this.get({ ...ctx, addAuth: false });
    }
    async getWithAdminToken() {
        logger.silly(`getting ${this.serviceName} client with admin token`);
        const token = await Services_1.AccessTokenService.getAdminToken(this.serviceName);
        return this.get({ userName: null, addAuth: true, token });
    }
    async getWithAccessToken() {
        logger.silly(`getting ${this.serviceName} client with access token`);
        const token = await AccessAdminClient_1.AccessAdminClient.getAdminToken();
        return this.get({ userName: null, addAuth: true, token });
    }
    async get(ctx) {
        const { addAuth, userName, sessionId, userScope } = ctx;
        logger.silly(`getting ${this.serviceName} client`);
        let token = null;
        const headers = HeadersManager_1.HeadersManager.getContextHeaders();
        HeadersManager_1.HeadersManager.addUserAgentToHeaders(headers);
        const clientsLogger = LoggerFactory_1.LoggerFactory.getLogger(this.serviceName + 'Client');
        if (addAuth) {
            token =
                ctx.token || (await Services_1.AccessTokenService.getImpersonationToken(this.serviceName, userName, sessionId, userScope));
        }
        const genericConfig = { serverUrl: null, token, logger: clientsLogger, headers };
        switch (this.serviceType) {
            case 'ARTIFACTORY':
                genericConfig.serverUrl = config.get(`frontend.servicesUrls.${Constants_1.SERVICES.ARTIFACTORY.NAME}`);
                return new artifactory_nodejs_client_1.ArtifactoryClient(genericConfig);
            case 'DISTRIBUTION':
                genericConfig.serverUrl = config.get(`frontend.servicesUrls.${Constants_1.SERVICES.DISTRIBUTION.NAME}`);
                return new distribution_nodejs_client_1.DistributionClient(genericConfig);
            case 'XRAY':
                genericConfig.serverUrl = config.get(`frontend.servicesUrls.${Constants_1.SERVICES.XRAY.NAME}`);
                return new xray_nodejs_client_1.XrayClient(genericConfig);
            case 'EVENT':
                genericConfig.serverUrl = config.get(`frontend.servicesUrls.${Constants_1.SERVICES.EVENT.NAME}`);
                return new event_nodejs_client_1.EventClient(genericConfig);
            case 'METADATA':
                genericConfig.serverUrl = config.get(`frontend.servicesUrls.${Constants_1.SERVICES.METADATA.NAME}`);
                return new metadata_nodejs_client_1.MetadataClient(genericConfig);
            case 'MISSION_CONTROL':
                genericConfig.serverUrl = config.get(`frontend.servicesUrls.${Constants_1.SERVICES.MISSION_CONTROL.NAME}`);
                return new mission_control_nodejs_client_1.MissionControlClient(genericConfig);
            case 'PIPELINES':
                genericConfig.serverUrl = config.get(`frontend.servicesUrls.${Constants_1.SERVICES.PIPELINES.NAME}`);
                return new pipelines_nodejs_client_1.PipelinesClient(genericConfig);
            case 'ACCESS':
                return new access_nodejs_client_1.AccessClient({
                    accessBaseUrl: config.get(`frontend.servicesUrls.${Constants_1.SERVICES.ACCESS.NAME}`),
                    accessGrpcBaseUrl: config.get(`frontend.router.baseUrl.default`),
                    routerBaseUrl: config.get(`frontend.router.baseUrl.default`),
                    logger: clientsLogger,
                    headers: genericConfig.headers,
                    token,
                });
        }
    }
}
__decorate([
    Decorators_1.methodLog({ logger })
], ClientFactory.prototype, "getWithAuth", null);
__decorate([
    Decorators_1.methodLog({ logger })
], ClientFactory.prototype, "getWithoutAuth", null);
__decorate([
    Decorators_1.methodLog({ logger })
], ClientFactory.prototype, "getWithAccessToken", null);
exports.ClientFactory = ClientFactory;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(70), exports);
__exportStar(__webpack_require__(325), exports);
var DistriburionRouteHandler_1 = __webpack_require__(328);
Object.defineProperty(exports, "DistributionRouteHandler", { enumerable: true, get: function () { return DistriburionRouteHandler_1.DistributionRouteHandler; } });
var InsightRouteHandler_1 = __webpack_require__(329);
Object.defineProperty(exports, "InsightRouteHandler", { enumerable: true, get: function () { return InsightRouteHandler_1.InsightRouteHandler; } });
var MissionControlRouteHandler_1 = __webpack_require__(330);
Object.defineProperty(exports, "MissionControlRouteHandler", { enumerable: true, get: function () { return MissionControlRouteHandler_1.MissionControlRouteHandler; } });
var ServiceLevelRouteHandler_1 = __webpack_require__(20);
Object.defineProperty(exports, "ServiceLevelRouteHandler", { enumerable: true, get: function () { return ServiceLevelRouteHandler_1.ServiceLevelRouteHandler; } });
var XrayRouteHandler_1 = __webpack_require__(331);
Object.defineProperty(exports, "XrayRouteHandler", { enumerable: true, get: function () { return XrayRouteHandler_1.XrayRouteHandler; } });
var PipelinesRouteHandler_1 = __webpack_require__(332);
Object.defineProperty(exports, "PipelinesRouteHandler", { enumerable: true, get: function () { return PipelinesRouteHandler_1.PipelinesRouteHandler; } });
var EventRouteHandler_1 = __webpack_require__(333);
Object.defineProperty(exports, "EventRouteHandler", { enumerable: true, get: function () { return EventRouteHandler_1.EventRouteHandler; } });
var ReplicatorRouteHandler_1 = __webpack_require__(334);
Object.defineProperty(exports, "ReplicatorRouteHandler", { enumerable: true, get: function () { return ReplicatorRouteHandler_1.ReplicatorRouteHandler; } });


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceLevelRouteHandler = void 0;
const http_proxy_middleware_1 = __webpack_require__(72);
const LoggerFactory_1 = __webpack_require__(1);
const Constants_1 = __webpack_require__(0);
const Services_1 = __webpack_require__(3);
const AuthenticationErrors_1 = __webpack_require__(13);
const Decorators_1 = __webpack_require__(2);
const Authentication_1 = __webpack_require__(23);
const JFrogController_1 = __webpack_require__(5);
const config = __webpack_require__(4);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
class ServiceLevelRouteHandler extends JFrogController_1.JFrogController {
    constructor(serviceName) {
        super();
        this.serviceName = serviceName;
    }
    async addServiceImpersonationTokenToHeader(req, res, next) {
        const { userName, sessionId, userScope, token } = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        if (token) {
            logger.debug(`user ${userName} already has token, will not add impesonation token`);
            return next();
        }
        else {
            logger.debug(`adding ${this.serviceName} impersonation token to header for user - ${userName} with sessionId - ${sessionId} with scope - ${userScope}`);
            const impersonationTokenValue = await Services_1.AccessTokenService.getImpersonationToken(this.serviceName, userName, sessionId, userScope);
            if (!impersonationTokenValue) {
                return next(new AuthenticationErrors_1.AuthErrorImpersonateFail());
            }
            ServiceLevelRouteHandler.addTokenToRequest(req, impersonationTokenValue);
        }
        Authentication_1.AuthenticationController.removeUiSessionCookieFromRequest(req);
        return next();
    }
    getProxyPath(userReq) {
        const resolvedPath = userReq.originalUrl.replace(this.serverPath, '').replace(Constants_1.API_VERSION, '');
        logger.debug(`Forwarding ${userReq.originalUrl} to ${resolvedPath}`);
        return resolvedPath;
    }
    getProxyUrl() {
        return this.proxyUrl;
    }
    get proxyHandler() {
        const proxyConfig = {
            target: this.getProxyUrl.bind(this)(),
            pathRewrite: (path) => {
                return path.replace(this.serverPath, '').replace(Constants_1.API_VERSION, '');
            },
            logProvider: () => logger,
            logLevel: 'warn',
            onProxyReq(proxyReq, req, res) {
                const contentType = req.get('Content-Type');
                if (req.body && contentType && !contentType.includes('multipart')) {
                    const bodyData = JSON.stringify(req.body);
                    proxyReq.setHeader('Content-Type', 'application/json');
                    proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData));
                    proxyReq.write(bodyData);
                }
            },
        };
        return http_proxy_middleware_1.createProxyMiddleware(proxyConfig);
    }
    get proxyUrl() {
        return config.get(`frontend.servicesUrls.${this.serviceName}`);
    }
    get serverPath() {
        return Constants_1.Constants.NODE_SERVER_PATH[this.serviceName];
    }
}
__decorate([
    Decorators_1.methodLog({ logger })
], ServiceLevelRouteHandler.prototype, "addServiceImpersonationTokenToHeader", null);
exports.ServiceLevelRouteHandler = ServiceLevelRouteHandler;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.addRouteToAllMethods = exports.registerProxiedRoutes = void 0;
const proxyRoutes = (router, routes, method, middlewareFunctions) => {
    routes.forEach((route) => {
        router[method.toLowerCase()](route, ...middlewareFunctions);
    });
};
const registerProxiedRoutes = (router, routes, middlewareFunctions) => {
    Object.keys(routes).forEach((method) => {
        proxyRoutes(router, routes[method], method, middlewareFunctions);
    });
};
exports.registerProxiedRoutes = registerProxiedRoutes;
// used for tests
exports.addRouteToAllMethods = (routes, newRoute) => {
    Object.keys(routes).forEach((method) => {
        routes[method].push(newRoute);
    });
    return routes;
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(66), exports);
__exportStar(__webpack_require__(39), exports);
__exportStar(__webpack_require__(113), exports);
__exportStar(__webpack_require__(31), exports);
__exportStar(__webpack_require__(114), exports);
__exportStar(__webpack_require__(29), exports);
__exportStar(__webpack_require__(65), exports);
__exportStar(__webpack_require__(312), exports);
__exportStar(__webpack_require__(313), exports);
__exportStar(__webpack_require__(318), exports);


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.REPLICATOR_PROXY_ROUTES = exports.EVENTS_PROXY_ROUTES = exports.XRAY_PROXY_ROUTES = exports.PIPELINES_PROXY_ROUTES = exports.MC_PROXY_ROUTES = exports.INSIGHT_PROXY_ROUTES = exports.DISTRIBUTION_PROXY_ROUTES = exports.ARTIFACTORY_PROXY_ROUTES = void 0;
const RouterProxyUtil_1 = __webpack_require__(21);
const ARTIFACTORY_PROXY_ROUTES_1 = __webpack_require__(363);
Object.defineProperty(exports, "ARTIFACTORY_PROXY_ROUTES", { enumerable: true, get: function () { return ARTIFACTORY_PROXY_ROUTES_1.ARTIFACTORY_PROXY_ROUTES; } });
const DISTRIBUTION_PROXY_ROUTES_1 = __webpack_require__(364);
Object.defineProperty(exports, "DISTRIBUTION_PROXY_ROUTES", { enumerable: true, get: function () { return DISTRIBUTION_PROXY_ROUTES_1.DISTRIBUTION_PROXY_ROUTES; } });
const INSIGHT_PROXY_ROUTES_1 = __webpack_require__(365);
Object.defineProperty(exports, "INSIGHT_PROXY_ROUTES", { enumerable: true, get: function () { return INSIGHT_PROXY_ROUTES_1.INSIGHT_PROXY_ROUTES; } });
const MC_PROXY_ROUTES_1 = __webpack_require__(366);
Object.defineProperty(exports, "MC_PROXY_ROUTES", { enumerable: true, get: function () { return MC_PROXY_ROUTES_1.MC_PROXY_ROUTES; } });
const PIPELINES_PROXY_ROUTES_1 = __webpack_require__(367);
Object.defineProperty(exports, "PIPELINES_PROXY_ROUTES", { enumerable: true, get: function () { return PIPELINES_PROXY_ROUTES_1.PIPELINES_PROXY_ROUTES; } });
const XRAY_PROXY_ROUTES_1 = __webpack_require__(368);
Object.defineProperty(exports, "XRAY_PROXY_ROUTES", { enumerable: true, get: function () { return XRAY_PROXY_ROUTES_1.XRAY_PROXY_ROUTES; } });
const EVENTS_PROXY_ROUTES_1 = __webpack_require__(369);
Object.defineProperty(exports, "EVENTS_PROXY_ROUTES", { enumerable: true, get: function () { return EVENTS_PROXY_ROUTES_1.EVENTS_PROXY_ROUTES; } });
const REPLICATOR_PROXY_ROUTES_1 = __webpack_require__(370);
Object.defineProperty(exports, "REPLICATOR_PROXY_ROUTES", { enumerable: true, get: function () { return REPLICATOR_PROXY_ROUTES_1.REPLICATOR_PROXY_ROUTES; } });
if (process.env.TEST_MODE) {
    RouterProxyUtil_1.addRouteToAllMethods(ARTIFACTORY_PROXY_ROUTES_1.ARTIFACTORY_PROXY_ROUTES, '/subroute');
    RouterProxyUtil_1.addRouteToAllMethods(DISTRIBUTION_PROXY_ROUTES_1.DISTRIBUTION_PROXY_ROUTES, '/subroute');
    RouterProxyUtil_1.addRouteToAllMethods(INSIGHT_PROXY_ROUTES_1.INSIGHT_PROXY_ROUTES, '/subroute');
    RouterProxyUtil_1.addRouteToAllMethods(PIPELINES_PROXY_ROUTES_1.PIPELINES_PROXY_ROUTES, '/subroute');
    RouterProxyUtil_1.addRouteToAllMethods(XRAY_PROXY_ROUTES_1.XRAY_PROXY_ROUTES, '/subroute');
    RouterProxyUtil_1.addRouteToAllMethods(MC_PROXY_ROUTES_1.MC_PROXY_ROUTES, '/subroute');
    RouterProxyUtil_1.addRouteToAllMethods(EVENTS_PROXY_ROUTES_1.EVENTS_PROXY_ROUTES, '/subroute');
}


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceID = void 0;
const config = __webpack_require__(4);
const Constants_1 = __webpack_require__(0);
const LoggerFactory_1 = __webpack_require__(1);
const LoggerDecorator_1 = __webpack_require__(17);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
const DEFAULT_SERVICE_ID = Constants_1.DEFAULT_VALUES.SERVICE_ID;
class ServiceID {
    static setRandomServiceID() {
        const currentServiceID = config.get('frontend.serviceId');
        if (currentServiceID !== DEFAULT_SERVICE_ID) {
            logger.warn(`service ID has already been set with - ${currentServiceID}`);
            return;
        }
        const serviceID = `${Constants_1.SERVICES.FRONTEND.TYPE}@000`;
        logger.info(`setting service id - ${serviceID}`);
        config.set('frontend.serviceId', serviceID);
    }
    static getServiceId() {
        const currentServiceID = config.get('frontend.serviceId');
        if (currentServiceID) {
            return currentServiceID;
        }
        logger.warn(`service ID was not set yet`);
    }
    static restart() {
        config.set('frontend.serviceId', null);
    }
}
__decorate([
    LoggerDecorator_1.methodLog({ logger })
], ServiceID, "setRandomServiceID", null);
__decorate([
    LoggerDecorator_1.methodLog({ logger })
], ServiceID, "getServiceId", null);
exports.ServiceID = ServiceID;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(144), exports);
__exportStar(__webpack_require__(56), exports);
__exportStar(__webpack_require__(150), exports);
__exportStar(__webpack_require__(151), exports);
__exportStar(__webpack_require__(161), exports);
__exportStar(__webpack_require__(163), exports);
__exportStar(__webpack_require__(78), exports);
__exportStar(__webpack_require__(184), exports);
__exportStar(__webpack_require__(79), exports);
__exportStar(__webpack_require__(78), exports);
__exportStar(__webpack_require__(196), exports);
__exportStar(__webpack_require__(205), exports);
__exportStar(__webpack_require__(206), exports);


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(87), exports);
__exportStar(__webpack_require__(28), exports);
__exportStar(__webpack_require__(239), exports);
__exportStar(__webpack_require__(241), exports);
__exportStar(__webpack_require__(90), exports);
__exportStar(__webpack_require__(89), exports);
__exportStar(__webpack_require__(268), exports);
__exportStar(__webpack_require__(270), exports);
__exportStar(__webpack_require__(271), exports);


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessService = void 0;
const AccessAdminClient_1 = __webpack_require__(12);
const Decorators_1 = __webpack_require__(2);
const LoggerFactory_1 = __webpack_require__(1);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
class AccessService {
    static async getTopology() {
        const client = await AccessService.getClient();
        const ctx = await AccessAdminClient_1.AccessAdminClient.getAccessAdminContext();
        return await client.getTopology(ctx);
    }
    static async getPasswordPolicy() {
        const client = await AccessService.getClient();
        const ctx = await AccessAdminClient_1.AccessAdminClient.getAccessAdminContext();
        return await client.getPasswordPolicy(ctx);
    }
    static async getEnrichedTopology() {
        const client = await AccessService.getClient();
        const ctx = await AccessAdminClient_1.AccessAdminClient.getAccessAdminContext();
        return await client.getEnrichedTopology(ctx);
    }
    static async getJoinKey() {
        const client = await AccessService.getClient();
        const ctx = await AccessAdminClient_1.AccessAdminClient.getAccessAdminContext();
        return await client.getJoinKey(ctx);
    }
    static async isUserAdmin(userName, groups) {
        const client = await AccessService.getClient();
        const ctx = await AccessAdminClient_1.AccessAdminClient.getAccessAdminContext();
        const shouldPassGroups = groups === null || groups === void 0 ? void 0 : groups.length;
        if (shouldPassGroups) {
            return await client.security().isAdmin(ctx, userName, true, groups);
        }
        return await client.security().isAdmin(ctx, userName, true);
    }
    static async getMfaConfig() {
        const client = await AccessService.getClient();
        const ctx = await AccessAdminClient_1.AccessAdminClient.getAccessAdminContext();
        return await client.mfa().getConfig(ctx);
    }
    static async setUserCustomData(authData, key, value) {
        const client = await AccessService.getClient();
        const ctx = await AccessAdminClient_1.AccessAdminClient.getAccessAdminContext();
        return await client.user().upsert(ctx, authData.userName, key, value);
    }
    static async getUserCustomData(authData, key) {
        const client = await AccessService.getClient();
        const ctx = await AccessAdminClient_1.AccessAdminClient.getAccessAdminContext();
        let userCustomData;
        try {
            userCustomData = await client.user().get(ctx, authData.userName, key);
        }
        catch (e) {
            userCustomData = "{}";
        }
        return JSON.parse(userCustomData);
    }
    static async setMfaConfig(authenticators) {
        const client = await AccessService.getClient();
        const ctx = await AccessAdminClient_1.AccessAdminClient.getAccessAdminContext();
        return await client.mfa().setConfig(ctx, authenticators);
    }
    static async isUserProjectAdmin(projectKey, userName, additionalGroups, userGroupsApply) {
        const client = await AccessService.getClient();
        const ctx = await AccessAdminClient_1.AccessAdminClient.getAccessAdminContext();
        return client.security().isProjectAdmin(ctx, userName, projectKey, additionalGroups, userGroupsApply);
    }
    static async isGroupProjectAdmin(projectKey, groupName) {
        const client = await AccessService.getClient();
        const ctx = await AccessAdminClient_1.AccessAdminClient.getAccessAdminContext();
        return await client.security().isGroupProjectAdmin(ctx, groupName, projectKey);
    }
    static async setUserAsProjectAdmin(authData, projectKey, userName) {
        const client = await AccessService.getClient();
        const ctx = await AccessAdminClient_1.AccessAdminClient.getAccessContext(authData);
        return await client.security().setUserAsProjectAdmin(ctx, userName, projectKey);
    }
    static async setGroupAsProjectAdmin(authData, projectKey, groupName) {
        const client = await AccessService.getClient();
        const ctx = await AccessAdminClient_1.AccessAdminClient.getAccessContext(authData);
        return await client.security().setGroupAsProjectAdmin(ctx, groupName, projectKey);
    }
    static async unsetUserAsProjectAdmin(authData, projectKey, userName) {
        const client = await AccessService.getClient();
        const ctx = await AccessAdminClient_1.AccessAdminClient.getAccessContext(authData);
        return await client.security().unsetUserAsProjectAdmin(ctx, userName, projectKey);
    }
    static async unsetGroupAsProjectAdmin(authData, projectKey, groupName) {
        const client = await AccessService.getClient();
        const ctx = await AccessAdminClient_1.AccessAdminClient.getAccessContext(authData);
        return await client.security().unsetGroupAsProjectAdmin(ctx, groupName, projectKey);
    }
    static async getConfig() {
        const client = await AccessService.getClient();
        const ctx = await AccessAdminClient_1.AccessAdminClient.getAccessAdminContext();
        return client.getAccessConfig(ctx);
    }
    static getClient() {
        return AccessAdminClient_1.AccessAdminClient.client;
    }
    static async deleteNode(authData, serviceId, nodeId) {
        const client = await AccessService.getClient();
        const ctx = await AccessAdminClient_1.AccessAdminClient.getAccessAdminContext();
        return await client.deleteNode(ctx, serviceId, nodeId);
    }
}
__decorate([
    Decorators_1.methodLog({ logger }),
    Decorators_1.handleAccessUnauthorized()
], AccessService, "getTopology", null);
__decorate([
    Decorators_1.handleAccessUnauthorized()
], AccessService, "getPasswordPolicy", null);
__decorate([
    Decorators_1.handleAccessUnauthorized()
], AccessService, "getEnrichedTopology", null);
__decorate([
    Decorators_1.handleAccessUnauthorized()
], AccessService, "getJoinKey", null);
__decorate([
    Decorators_1.handleAccessUnauthorized()
], AccessService, "isUserAdmin", null);
__decorate([
    Decorators_1.methodLog({ logger })
], AccessService, "getUserCustomData", null);
__decorate([
    Decorators_1.handleAccessUnauthorized()
], AccessService, "isUserProjectAdmin", null);
__decorate([
    Decorators_1.handleAccessUnauthorized()
], AccessService, "isGroupProjectAdmin", null);
__decorate([
    Decorators_1.handleAccessUnauthorized()
], AccessService, "deleteNode", null);
exports.AccessService = AccessService;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginController = void 0;
const SessionCookieUtil_1 = __webpack_require__(48);
const LoggerFactory_1 = __webpack_require__(1);
const Errors_1 = __webpack_require__(247);
const Services_1 = __webpack_require__(3);
const CrowdCookieUtil_1 = __webpack_require__(99);
const SpringSecurityRememberMeCookieUtil_1 = __webpack_require__(263);
const CrowdAuthenticationController_1 = __webpack_require__(31);
const Constants_1 = __webpack_require__(0);
const JFrogController_1 = __webpack_require__(5);
const artifactory_nodejs_client_1 = __webpack_require__(61);
const Decorators_1 = __webpack_require__(2);
const CryptoUtils_1 = __webpack_require__(100);
const TimeUtils_1 = __webpack_require__(38);
const config = __webpack_require__(4);
const PlatformConfiguration_1 = __webpack_require__(11);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
const sessionCookieUtil = new SessionCookieUtil_1.SessionCookieUtil();
const springSecurityRememberMeCookieUtil = new SpringSecurityRememberMeCookieUtil_1.SpringSecurityRememberMeCookieUtil();
class LoginController extends JFrogController_1.JFrogController {
    static getMiddlewares() {
        return [
            LoginController.loginToArtifactory,
            LoginController.setRememberMeCookie,
            LoginController.checkIfMFAIsNeeded,
            LoginController.getSessionIdAndUserInfo,
            LoginController.handleCrowdUser,
            LoginController.authenticateRequest,
            LoginController.doLoginCleanupAndSendResponse,
            LoginController.doLoginCleanupOnError,
        ];
    }
    static loginErrorHandler(e, res) {
        var _a, _b;
        if (!e.response || e.response.status === Constants_1.STATUS_CODES.INTERNAL_ERROR) {
            return res.sendStatus(Constants_1.STATUS_CODES.INTERNAL_ERROR);
        }
        LoginController.addHeadersToResponse(e.response.headers, res);
        sessionCookieUtil.clearTestedCookieFromResponse(res);
        if ((_a = e.response) === null || _a === void 0 ? void 0 : _a.data) {
            return res.status(e.response.status).send((_b = e.response) === null || _b === void 0 ? void 0 : _b.data);
        }
        return res.sendStatus(e.response.status);
    }
    static async loginToArtifactory(req, res, next) {
        const { user, password } = req.body;
        logger.debug(`attempting login for user ${user}`);
        try {
            // const isRememberMeRequest = await LoginController.isRememberMeRequest(req)
            const { data, headers } = await Services_1.ArtifactoryService.login(user, password, await LoginController.isRememberMeRequest(req));
            if (!Services_1.LoginService.verifyUserResponse(data)) {
                throw new Errors_1.LoginErrorReceivedAnonymous();
            }
            LoginController.addHeadersToResponse(headers, res);
            res.locals.data = data;
            next();
        }
        catch (e) {
            LoginController.loginErrorHandler(e, res);
        }
    }
    static async checkForOauthError(req, res, next) {
        const setCookieHeader = res.getHeader('set-cookie');
        if (!setCookieHeader) {
            const isOauthError = Services_1.LoginService.isOauthError(res.getHeader('location'));
            if (isOauthError) {
                res.setHeader('location', `/ui/login` + Services_1.LoginService.convertLocationToRelativeUrl(res.getHeader('location')));
            }
            await LoginController.cleanLogin(res, res.locals.platformUser, res.locals.sessionId);
            return res.status(Constants_1.STATUS_CODES.SSO_REDIRECT).send(res.locals.data);
        }
        next();
    }
    static async getSessionIdAndUserInfo(req, res, next) {
        const sessionId = sessionCookieUtil.getValueFromSetCookieHeader(res.getHeader('set-cookie'));
        if (!sessionId) {
            logger.debug(`no session info found in set-cookie header`);
            return res.send(res.locals.data);
        }
        res.locals.sessionId = sessionId;
        logger.debug(`trying to get session info from Artifactory using sessionId - ${sessionId}`);
        res.locals.platformUser = await Services_1.ArtifactoryLoginService
            .getUserInfoWithSessionId(sessionId, res.locals.isSamlUser);
        res.locals.platformUser.realm = res.locals.realm;
        logger.debug(`got user info from Artifactory using : ${sessionId}`);
        next();
    }
    static async setRememberMeCookie(req, res, next) {
        const rememberMeValue = springSecurityRememberMeCookieUtil.getValueFromSetCookieHeader(res.get('set-cookie'));
        springSecurityRememberMeCookieUtil.clearTestedCookieFromResponse(res);
        if (rememberMeValue) {
            res.cookie(Constants_1.CUSTOM_HEADERS.REMEMBER_ME_COOKIE, rememberMeValue, {
                ...LoginController.cookieOptions,
                maxAge: LoginController.getCookieMaxAge(config.get('frontend.rememberMe.timeMinutes'))
            });
        }
        next();
    }
    static async handleCrowdUser(req, res, next) {
        const crowdCookieUtil = new CrowdCookieUtil_1.CrowdCookieUtil(PlatformConfiguration_1.default.crowdCookieName);
        const isUsingCrowd = CrowdAuthenticationController_1.default.isCrowdOnResponse(res.get('set-cookie'));
        if (isUsingCrowd) {
            res.locals.platformUser.realm = Constants_1.REALM.CROWD;
            res.locals.platformUser.crowdCookie = crowdCookieUtil.getValueFromSetCookieHeader(res.getHeader('set-cookie'));
        }
        next();
    }
    static async authenticateRequest(req, res, next) {
        await LoginController.validateUserInfoAndAuthenticateRequest(res.locals.platformUser, res);
        next();
    }
    static setSsoRedirectLocation(req, res, next) {
        if (res.getHeader('location')) {
            res.setHeader('location', `/ui/login/`);
        }
        next();
    }
    static async doLoginCleanupAndSendResponse(req, res, _) {
        await LoginController.cleanLogin(res, res.locals.platformUser, res.locals.sessionId);
        res.clearCookie(Constants_1.MFA_COOKIES.data);
        res.clearCookie(Constants_1.MFA_COOKIES.headers);
        return res.send(res.locals.data);
    }
    static async doLoginCleanupOnError(error, req, res, next) {
        var _a, _b;
        if (((_a = res.locals) === null || _a === void 0 ? void 0 : _a.platformUser) && ((_b = res.locals) === null || _b === void 0 ? void 0 : _b.sessionId)) {
            await LoginController.cleanLogin(res, res.locals.platformUser, res.locals.sessionId);
        }
        next(error);
    }
    static async validateUserInfoAndAuthenticateRequest(user, res) {
        const validUser = Services_1.LoginService.verifyUserResponse(user);
        if (!validUser) {
            throw new Errors_1.LoginErrorReceivedAnonymous();
        }
        if (this.scopeGroupsAreOverTheLimit(user)) {
            res.setHeader(Constants_1.CUSTOM_HEADERS.UI_MESSAGES, 'scope-groups-over-limit');
        }
        const uiSessionToken = await Services_1.AccessTokenService.createUISessionToken(user);
        if (!uiSessionToken) {
            throw new Errors_1.AuthErrorAuthenticateRequest();
        }
        logger.debug(`Successfully logged in with user - ${user.name}`);
        LoginController.setUiSessionTokens(res, uiSessionToken);
    }
    static async reLoginWithRememberToken(res, uiSessionTokens, uiSessionJwtPayload) {
        if (!uiSessionTokens.rememberMeToken) {
            return;
        }
        const { rememberMeToken } = uiSessionTokens;
        const isSamlUser = uiSessionJwtPayload.parsedExtension.realm === Constants_1.REALM.SAML;
        const { headers } = await Services_1.ArtifactoryLoginService.getUserInfoWithSpringRememberMeCookie(rememberMeToken);
        const sessionId = sessionCookieUtil.getValueFromSetCookieHeader(headers['set-cookie']);
        if (sessionId) {
            const platformUser = await Services_1.ArtifactoryLoginService.getUserInfoWithSessionId(sessionId, isSamlUser);
            await LoginController.validateUserInfoAndAuthenticateRequest(platformUser, res);
            await LoginController.cleanLogin(res, platformUser, sessionId);
            return;
        }
        throw new Errors_1.AuthErrorSessionExpired();
    }
    static async reAuthenticateInternalUser(userName, isExternalUser) {
        if (isExternalUser) {
            return;
        }
        const reAuthenticateInternalUserResult = await Services_1.ArtifactoryLoginService.reAuthenticateInternalUser(userName);
        if (reAuthenticateInternalUserResult.status !== artifactory_nodejs_client_1.ReAuthenticateStatus.ENABLED) {
            throw new Errors_1.AuthErrorReAuthenticateInternalUser();
        }
    }
    static setUiSessionTokens(res, tokens) {
        try {
            logger.debug(`Adding cookies to response`);
            const expires = new Date(Date.now() +
                LoginController.getCookieMaxAge(config.get('frontend.session.timeMinutes') +
                    config.get('frontend.session.timeShift')));
            logger.debug(`Setting session cookie expiry to: ` + expires);
            res.cookie(Constants_1.TOKEN_CONSTANTS.COOKIE.ACCESS_TOKEN, tokens.accessToken, { ...LoginController.cookieOptions, expires });
            res.cookie(Constants_1.TOKEN_CONSTANTS.COOKIE.REFRESH_TOKEN, tokens.refreshToken, { ...LoginController.cookieOptions, expires });
        }
        catch (e) {
            logger.error(e);
        }
    }
    static async cleanLogin(res, user, sessionId) {
        sessionCookieUtil.clearTestedCookieFromResponse(res);
        if (sessionId) {
            await Services_1.ArtifactoryLogoutService.sessionLogout(sessionId);
        }
    }
    static async checkIfMFAIsNeeded(_, res, next) {
        if (!res.locals.data.existsInDB) {
            return next();
        }
        const mfaStatus = await Services_1.LoginService.getMfaStatusForUser(res.locals.data.name);
        if (mfaStatus === 'NONE') {
            return next();
        }
        logger.debug(`user ${res.locals.data.name} is required to ${mfaStatus} mfa`);
        LoginController.removeUselessArtifactoryLoginHeaders(res);
        const { encryptedData, encryptedHeaders } = await LoginController.getEncryptedLoginData(res);
        LoginController.removeAllHeadersFromResponse(res);
        const options = { ...LoginController.cookieOptions, maxAge: Constants_1.TIME.MINUTE_MS * config.get('frontend.session.timeShift') };
        res.cookie(Constants_1.MFA_COOKIES.headers, encryptedHeaders, options);
        res.cookie(Constants_1.MFA_COOKIES.data, encryptedData, options);
        logger.debug(`login mfa encrypted headers length : ${(encryptedHeaders + encryptedData).length}`);
        res.send({ mfaStatus });
    }
    static scopeGroupsAreOverTheLimit(user) {
        return !!user.scopeGroupsOverTheLimit;
    }
    static async isRememberMeRequest(req) {
        var _a;
        const rememberMeChecked = ((_a = req.query) === null || _a === void 0 ? void 0 : _a._spring_security_remember_me) === 'true';
        if (!rememberMeChecked) {
            return false;
        }
        const isRememberMeEnabled = await Services_1.ArtifactoryService.isRememberMeEnabled();
        logger.debug(`remember me is${isRememberMeEnabled ? '' : ' not'} enabled`);
        return isRememberMeEnabled;
    }
    static async getEncryptedLoginData(res) {
        const encryptedData = await CryptoUtils_1.default.encryptValue(JSON.stringify(res.locals.data));
        const encryptedHeaders = await CryptoUtils_1.default.encryptValue(JSON.stringify(res.getHeaders()));
        return { encryptedData, encryptedHeaders };
    }
    static async getDecryptedLoginData(req) {
        const data = JSON.parse(await CryptoUtils_1.default.decryptValue(req.cookies[Constants_1.MFA_COOKIES.data]));
        const headers = JSON
            .parse(await CryptoUtils_1.default.decryptValue(req.cookies[Constants_1.MFA_COOKIES.headers]));
        return { data, headers };
    }
    static get cookieOptions() {
        return { httpOnly: true, secure: PlatformConfiguration_1.default.isHttps, sameSite: 'lax' };
    }
    static getCookieMaxAge(time) {
        if (!time || isNaN(+time)) {
            time = 0;
        }
        return TimeUtils_1.TimeUtils.convertMinutesToMilliseconds(+time);
    }
    static removeUselessArtifactoryLoginHeaders(res) {
        const headersToOmit = [
            'content-security-policy',
            'x-content-security-policy',
            'x-frame-options',
            'x-content-type-options',
            'referrer-policy',
            'x-webkit-csp',
            'surrogate-control',
            'feature-policy',
            'cache-control',
            'pragma',
            'expires',
            'content-type',
            'access-control-allow-method',
            'access-control-allow-headers',
            'x-xss-protection',
        ];
        headersToOmit.forEach((headerName) => {
            res.removeHeader(headerName);
        });
    }
}
__decorate([
    Decorators_1.methodLog({ logger })
], LoginController, "loginToArtifactory", null);
__decorate([
    Decorators_1.methodLog({ logger }),
    Decorators_1.controllerErrorHandler()
], LoginController, "checkForOauthError", null);
__decorate([
    Decorators_1.methodLog({ logger }),
    Decorators_1.controllerErrorHandler()
], LoginController, "getSessionIdAndUserInfo", null);
__decorate([
    Decorators_1.methodLog({ logger }),
    Decorators_1.controllerErrorHandler()
], LoginController, "setRememberMeCookie", null);
__decorate([
    Decorators_1.methodLog({ logger }),
    Decorators_1.controllerErrorHandler()
], LoginController, "handleCrowdUser", null);
__decorate([
    Decorators_1.methodLog({ logger }),
    Decorators_1.controllerErrorHandler()
], LoginController, "setSsoRedirectLocation", null);
__decorate([
    Decorators_1.methodLog({ logger }),
    Decorators_1.controllerErrorHandler()
], LoginController, "doLoginCleanupAndSendResponse", null);
__decorate([
    Decorators_1.methodLog({ logger })
], LoginController, "doLoginCleanupOnError", null);
__decorate([
    Decorators_1.methodLog({ logger })
], LoginController, "reLoginWithRememberToken", null);
exports.LoginController = LoginController;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TOPOLOGY_EXPIRY_MS = void 0;
const LoggerFactory_1 = __webpack_require__(1);
const Constants_1 = __webpack_require__(0);
const Constants_2 = __webpack_require__(0);
const Services_1 = __webpack_require__(3);
const TimeUtils_1 = __webpack_require__(38);
const omit = __webpack_require__(281);
const isEqual = __webpack_require__(282);
const API_1 = __webpack_require__(7);
const config = __webpack_require__(4);
const TOPOLOGY_EXPIRY_MS = 500;
exports.TOPOLOGY_EXPIRY_MS = TOPOLOGY_EXPIRY_MS;
const BOOT_PERIOD_LIMIT_MS = config.get("frontend.bootstrap.bootTimeLimit");
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
class MothershipTopologyService {
    static get topology() {
        return MothershipTopologyService._topology;
    }
    static set topology(_topology) {
        MothershipTopologyService._topology = _topology;
    }
    static async get() {
        if (MothershipTopologyService.shouldUpdateTopology()) {
            await MothershipTopologyService.updateTopologyFromAccess();
        }
        return MothershipTopologyService.topology;
    }
    static serviceExists(serviceName) {
        logger.debug(`checking if ${serviceName} exist in topology`);
        if (!MothershipTopologyService.topology) {
            logger.warn("topology is missing, can't decide if service exists, will return false");
            return false;
        }
        if (!(serviceName in Constants_1.SERVICES)) {
            logger.warn(`wrong param provided as service name :  [${serviceName}], will now throw`);
            throw new Error(`${serviceName} is not a service name`);
        }
        const serviceType = Constants_1.SERVICES[serviceName].TYPE;
        logger.debug(`service type for ${serviceName} is ${serviceType}`);
        return !!(MothershipTopologyService.topology.services
            .filter((n) => n.service_id.includes(serviceType))
            .some((n) => n.state === 'HEALTHY'));
    }
    static async updateTopologyFromAccess() {
        logger.debug('updating topology from access');
        const topology = await Services_1.AccessService.getEnrichedTopology();
        try {
            if (topology) {
                const oldTopology = MothershipTopologyService.topology;
                logger.debug('setting new topology');
                MothershipTopologyService.topology = {
                    ...topology,
                    lastUpdated: Date.now()
                };
                MothershipTopologyService.checkForTopologyChanges(oldTopology, topology);
            }
        }
        catch (e) {
            logger.error(`error when trying to get topology ${e.message}`);
            throw e;
        }
    }
    static checkForTopologyChanges(oldTopology, newTopology) {
        const topologyChanged = MothershipTopologyService
            .isTopologyChanged(oldTopology, newTopology);
        if (!topologyChanged) {
            logger.debug('no change in topology');
            return;
        }
        logger.debug(`topology change detected. emitting global topology change event`);
        logger.debug(`new topology - ${JSON.stringify(newTopology)}`);
        API_1.API.getGlobalEventEmitter().emit(Constants_2.GLOBAL_EVENTS.TOPOLOGY_CHANGED);
    }
    static isTopologyChanged(oldTopology, newTopology) {
        const onlyTopologyChangeFields = (node) => omit(node, 'last_heartbeat', 'created');
        const oldNodes = ((oldTopology === null || oldTopology === void 0 ? void 0 : oldTopology.services) || []).map(onlyTopologyChangeFields);
        const newNodes = ((newTopology === null || newTopology === void 0 ? void 0 : newTopology.services) || []).map(onlyTopologyChangeFields);
        return !isEqual(oldNodes, newNodes);
    }
    static shouldUpdateTopology() {
        var _a, _b;
        const now = Date.now();
        const runtime = TimeUtils_1.TimeUtils.getAppRuntimeInMilliseconds();
        const lastUpdated = (_b = (_a = MothershipTopologyService === null || MothershipTopologyService === void 0 ? void 0 : MothershipTopologyService.topology) === null || _a === void 0 ? void 0 : _a.lastUpdated) !== null && _b !== void 0 ? _b : 0;
        const timePassedFromLastUpdate = now - lastUpdated;
        logger.debug(`checking if topology needs to be updated (last update was: ${timePassedFromLastUpdate} ms ago, now: ${now}, runtime: ${runtime})`);
        return (runtime < BOOT_PERIOD_LIMIT_MS) && (timePassedFromLastUpdate >= TOPOLOGY_EXPIRY_MS);
    }
}
exports.default = MothershipTopologyService;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Constants_1 = __webpack_require__(0);
const SessionCookieUtil_1 = __webpack_require__(48);
const LoggerFactory_1 = __webpack_require__(1);
const LoginController_1 = __webpack_require__(29);
const CrowdCookieUtil_1 = __webpack_require__(99);
const Access_1 = __webpack_require__(36);
const LogoutController_1 = __webpack_require__(65);
const ClientFactory_1 = __webpack_require__(18);
const Services_1 = __webpack_require__(3);
const PlatformConfiguration_1 = __webpack_require__(11);
const AuthenticationErrors_1 = __webpack_require__(13);
const AuthenticationController_1 = __webpack_require__(39);
const AnonymousAuthenticationController_1 = __webpack_require__(66);
const Decorators_1 = __webpack_require__(2);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
const sessionCookieUtil = new SessionCookieUtil_1.SessionCookieUtil();
const UI_LOGIN_CROWD_ROUTE = '/sso-login/crowd-login';
class CrowdAuthenticationController extends AuthenticationController_1.AuthenticationController {
    static getNextValidationTime(minutesToNextValidation) {
        return Date.now() + minutesToNextValidation * Constants_1.Constants.TIME.MINUTE_MS;
    }
    static async checkForCrowdCookieAuthentication(req, res) {
        const crowdCookieUtil = new CrowdCookieUtil_1.CrowdCookieUtil(PlatformConfiguration_1.default.crowdCookieName);
        if (!crowdCookieUtil.crowdCookieExistsOnRequest(req)) {
            return null;
        }
        const crowdCookieValue = crowdCookieUtil.getCrowdCookieValue(req);
        if (!crowdCookieValue) {
            throw new Error(`No crowd cookie value found`);
        }
        return CrowdAuthenticationController.authenticateUsingCrowdCookie(crowdCookieValue, req, res);
    }
    static doesCrowdNeedsValidation(uiSessionJwtPayload) {
        return Date.now() > uiSessionJwtPayload.parsedExtension.crowdNextValidation;
    }
    static async crowdCookieLogin(req, res, next) {
        try {
            const crowdCookieUtil = new CrowdCookieUtil_1.CrowdCookieUtil(PlatformConfiguration_1.default.crowdCookieName);
            if (AuthenticationController_1.AuthenticationController.skipAuthentication(req)) {
                return next();
            }
            if (!PlatformConfiguration_1.default.crowdEnabled) {
                return next();
            }
            const uiSessionTokens = Access_1.UiSessionTokens.getUiSessionTokensFromCookies(req.cookies);
            const crowdCookieExists = crowdCookieUtil.crowdCookieExistsOnRequest(req);
            if (!crowdCookieExists) {
                return next();
            }
            if (uiSessionTokens) {
                return next();
            }
            if (AnonymousAuthenticationController_1.AnonymousAuthenticationController.isOpenOrAuthenticatedPath(req)) {
                return next();
            }
            logger.debug(`working with CROWD. found crowd cookie with no ui session token. redirecting to ${UI_LOGIN_CROWD_ROUTE}`);
            res.header(Constants_1.CUSTOM_HEADERS.SPA_LOCATION, UI_LOGIN_CROWD_ROUTE);
            res.sendStatus(Constants_1.STATUS_CODES.SSO_LOGIN);
        }
        catch (e) {
            return AuthenticationController_1.AuthenticationController.handleAuthFiltersErrors(req, res, next, e);
        }
    }
    static doesCrowdCookieMatchUiSessionTokenCrowdCookie(req, uiSessionJwtPayload) {
        try {
            const crowdCookieUtil = new CrowdCookieUtil_1.CrowdCookieUtil(PlatformConfiguration_1.default.crowdCookieName);
            if (!crowdCookieUtil.crowdCookieExistsOnRequest(req)) {
                return false;
            }
            const crowdCookie = crowdCookieUtil.getCrowdCookieValue(req);
            const uiSessionTokenCrowdCookie = uiSessionJwtPayload.parsedExtension.crowdCookie;
            return crowdCookie === uiSessionTokenCrowdCookie;
        }
        catch (e) {
            logger.error(e);
            return false;
        }
    }
    static isCrowdOnResponse(cookies) {
        const crowdCookieUtil = new CrowdCookieUtil_1.CrowdCookieUtil(PlatformConfiguration_1.default.crowdCookieName);
        return cookies && crowdCookieUtil.doesCookieExists(cookies);
    }
    static async validateUiSessionAndSaveUserOnReqCROWD(req, res, next, uiSessionTokens, uiSessionJwtPayload) {
        try {
            const crowdCookieUtil = new CrowdCookieUtil_1.CrowdCookieUtil(PlatformConfiguration_1.default.crowdCookieName);
            const crowdCookieExists = crowdCookieUtil.crowdCookieExistsOnRequest(req);
            if (!crowdCookieExists) {
                // in case user logs out of crowd (removing the crowd cookie),
                // but UI session tokens still exist with CROWD login type
                return next(new AuthenticationErrors_1.AuthErrorNoCrowdCookie());
            }
            await CrowdAuthenticationController.checkIfCrowdCookieMatchUiSessionTokenCookie(req, res, uiSessionJwtPayload);
            const verifyTokenResponse = await Services_1.AccessTokenService.verifyToken(uiSessionTokens.accessToken);
            if (!verifyTokenResponse) {
                return next(new AuthenticationErrors_1.AuthErrorVerifyFail(`no verify token response`));
            }
            if (verifyTokenResponse.successful) {
                await CrowdAuthenticationController.checkAndValidateCrowd(uiSessionJwtPayload, req, res);
            }
            else {
                await CrowdAuthenticationController.handleFailedTokenVerifyResponse(verifyTokenResponse, req, res);
            }
            await CrowdAuthenticationController.authenticateRequestAndSaveUserInfo(req);
            return next();
        }
        catch (e) {
            logger.error(`Error in validateUiSessionAndSaveUserOnReqCROWD for url - ${req.originalUrl}`);
            return next(e);
        }
    }
    static async handleFailedTokenVerifyResponse(verifyTokenResponse, req, res) {
        if (verifyTokenResponse.reason === Constants_1.ACCESS.VERIFY_TOKEN_RESPONSE_REASONS.EXPIRED) {
            // recreate ui session tokens authenticating with crowd cookie
            return await CrowdAuthenticationController.checkForCrowdCookieAuthentication(req, res);
        }
        else {
            throw new AuthenticationErrors_1.AuthErrorVerifyFail(verifyTokenResponse.reason);
        }
    }
    static async checkAndValidateCrowd(uiSessionJwtPayload, req, res) {
        if (CrowdAuthenticationController.doesCrowdNeedsValidation(uiSessionJwtPayload)) {
            logger.debug(`crowd cookie requires validation`);
            return await CrowdAuthenticationController.checkForCrowdCookieAuthentication(req, res);
        }
    }
    static async checkIfCrowdCookieMatchUiSessionTokenCookie(req, res, uiSessionJwtPayload) {
        if (!CrowdAuthenticationController.doesCrowdCookieMatchUiSessionTokenCrowdCookie(req, uiSessionJwtPayload)) {
            logger.warn('Crowd cookie on request does not match Crowd cookie stored in ui session token');
            logger.warn(`Performing re-login with crowd cookie on request for user ${uiSessionJwtPayload.subject}`);
            return await CrowdAuthenticationController.checkForCrowdCookieAuthentication(req, res);
        }
    }
    static async authenticateUsingCrowdCookie(crowdCookie, req, res) {
        const client = await new ClientFactory_1.ClientFactory(Constants_1.SERVICES.ARTIFACTORY.KEY).getWithAdminToken();
        const ssoCrowdCookieLoginResponse = await client.login().ssoCrowdCookieLogin(crowdCookie);
        if (this.setCookieHeaderExists(ssoCrowdCookieLoginResponse.headers)) {
            const sessionId = sessionCookieUtil.getValueFromSetCookieHeader(ssoCrowdCookieLoginResponse.headers['set-cookie']);
            if (sessionId) {
                logger.debug(`authenticateUsingCrowdCookie - trying to get session info from Artifactory using sessionID - ${sessionId}`);
                const userInfo = await Services_1.ArtifactoryLoginService.getUserInfoWithSessionId(sessionId);
                userInfo.realm = Constants_1.REALM.CROWD;
                userInfo.crowdCookie = crowdCookie;
                await LoginController_1.LoginController.validateUserInfoAndAuthenticateRequest(userInfo, res);
                await LoginController_1.LoginController.cleanLogin(res, userInfo, sessionId);
                return userInfo;
            }
        }
        logger.debug(`could not log in using crowd cookie. crowd cookie - ${crowdCookie}`);
        await LogoutController_1.LogoutController.unauthorizedLogout(req, res);
        return null;
    }
    static setCookieHeaderExists(headers) {
        return headers && headers['set-cookie'];
    }
}
__decorate([
    Decorators_1.methodLog({ logger })
], CrowdAuthenticationController, "checkForCrowdCookieAuthentication", null);
__decorate([
    Decorators_1.methodLog({ logger })
], CrowdAuthenticationController, "crowdCookieLogin", null);
__decorate([
    Decorators_1.methodLog({ logger })
], CrowdAuthenticationController, "authenticateUsingCrowdCookie", null);
exports.default = CrowdAuthenticationController;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.JFrogService = void 0;
class JFrogService {
    static async getFrontendManifest() {
        return null;
    }
    static async getFrontendVersionStream(version, os) {
        return null;
    }
}
exports.JFrogService = JFrogService;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.routeLogger = void 0;
const LoggerFactory_1 = __webpack_require__(1);
const Constants_1 = __webpack_require__(0);
const axios_1 = __webpack_require__(371);
const fs = __webpack_require__(22);
const path = __webpack_require__(8);
const API_1 = __webpack_require__(7);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
const json = {};
function routeLogger(req, res, next) {
    const url = req.originalUrl;
    const method = req.method;
    logger.debug(`${method}:${url} is not mapped, will pass to proxy anyway`);
    if (shouldLog()) {
        notifySlack(req);
        writeToFile(req);
    }
    return next();
}
exports.routeLogger = routeLogger;
function writeToFile(req) {
    const key = getKeyFromReq(req);
    if (!requestExistsInJson(req)) {
        json[key] = key;
        fs.writeFile(path.join(Constants_1.PRODUCT_HOME, '/urls.json'), JSON.stringify(json, null, 4), () => {
            // do nothing
        });
    }
}
function notifySlack(req) {
    const message = `${req.method} : ${req.originalUrl} is not mapped`;
    if (requestExistsInJson(req)) {
        return;
    }
    const slackBotUrl = process.env.JF_SLACK_BOT_URL;
    if (!slackBotUrl) {
        logger.error('no JF_SLACK_BOT_URL env variable was provided, will not notify slack');
    }
    axios_1.default({
        url: 'https://hooks.slack.com/Services' + slackBotUrl,
        method: 'POST',
        data: buildSlackMessageFromReq(req),
    }).catch((e) => {
        logger.debug(`Failed to send slack message : ${message} with error : [${e.message}]`);
    });
}
function requestExistsInJson(req) {
    return getKeyFromReq(req) in json;
}
function getKeyFromReq(req) {
    return `${req.method}:${req.originalUrl}`;
}
function shouldLog() {
    return !!process.env.JF_FRONTEND_NOTIFY_BLOCKED_PROXIES;
}
function buildSlackMessageFromReq(req) {
    return {
        blocks: [
            {
                type: 'section',
                text: {
                    type: 'mrkdwn',
                    text: '*Url is not mapped:*',
                },
            },
            {
                type: 'section',
                fields: [
                    {
                        type: 'mrkdwn',
                        text: `*Method:*\n ${req.method}`,
                    },
                    {
                        type: 'mrkdwn',
                        text: `*URL:*\n ${req.originalUrl}`,
                    },
                    {
                        type: 'mrkdwn',
                        text: `When:* \n ${new Date().toISOString()}`,
                    },
                    {
                        type: 'mrkdwn',
                        text: `*Machine:*\n ${API_1.API.getNodeId()}`,
                    },
                    {
                        type: 'mrkdwn',
                        text: `*User:*\n ${req.userName}`,
                    },
                    {
                        type: 'mrkdwn',
                        text: `*User Scope:*\n ${req.userScope}`,
                    },
                    {
                        type: 'mrkdwn',
                        text: `*Referrer:*\n ${req.get('Referrer')}`,
                    },
                    {
                        type: 'mrkdwn',
                        text: `*Host:*\n ${req.hostname}`,
                    },
                ],
            },
            {
                type: 'actions',
                elements: [
                    {
                        type: 'button',
                        text: {
                            type: 'plain_text',
                            emoji: true,
                            text: 'New',
                        },
                        style: 'primary',
                        value: 'approve',
                    },
                    {
                        type: 'button',
                        text: {
                            type: 'plain_text',
                            emoji: true,
                            text: 'Already Exists',
                        },
                        style: 'danger',
                        value: 'decline',
                    },
                ],
            },
        ],
    };
}


/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("@jfrog/pipelines-nodejs-client");

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CacheDB = void 0;
const NodeCache = __webpack_require__(235);
const LoggerFactory_1 = __webpack_require__(1);
const config = __webpack_require__(4);
const Constants_1 = __webpack_require__(0);
class CacheDB {
    constructor() {
        this.logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
        const ttl = Constants_1.CACHE.TIME_TO_LEAVE;
        const checkPeriod = Constants_1.CACHE.CHECK_PERIOD;
        this.logger.debug(`Initiating Cache DB : { TTL : ${ttl} seconds,  Check period : ${checkPeriod} seconds }`);
        this.cache = new NodeCache({ stdTTL: ttl, checkperiod: checkPeriod });
    }
    static getTokenCacheDB() {
        if (this.tokenDB instanceof CacheDB) {
            return this.tokenDB;
        }
        this.tokenDB = new CacheDB();
        return this.tokenDB;
    }
    static getFooterCacheDB() {
        if (this.footerDB instanceof CacheDB) {
            return this.footerDB;
        }
        this.footerDB = new CacheDB();
        return this.footerDB;
    }
    async get(key) {
        this.logger.silly(`Getting key : [${key}]`);
        try {
            const value = this.cache.get(key);
            if (value === undefined) {
                this.logger.silly(`Key does not exist : [${key}]`);
                return null;
            }
            return value;
        }
        catch (e) {
            this.logger.warn(`Getting key : [${key}] failed Error : [${e.message}]`);
        }
    }
    async set(key, value, ttl = config.get('frontend.cache.ttl')) {
        const secondsTTL = this.msToSeconds(ttl);
        this.logger.debug(`Trying to set : ${key}`);
        try {
            if (value === null || value === undefined) {
                this.logger.warn(`Can't set key [${key}], invalid value : [${value}]`);
                return;
            }
            const strValue = typeof value === 'string' ? value : String(value);
            this.cache.set(key, strValue, secondsTTL);
            this.logger.debug(`Key [${key}] was set successfully`);
        }
        catch (e) {
            this.logger.error(new Error(`Error occurred when trying to set key : [${key}] , Error : ${e.message}`));
            return;
        }
    }
    async has(key) {
        try {
            this.logger.debug(`Checking if Key [${key}] exists`);
            const value = this.cache.get(key);
            return value !== undefined;
        }
        catch (e) {
            this.logger.warn(`Checking key : [${key}] failed Error : ${e.message}`);
        }
    }
    async delete(key) {
        this.logger.debug(`Attempting to delete [${key}]`);
        try {
            if (Array.isArray(key)) {
                this.logger.warn(`Expecting string but got array : ${key}`);
                return;
            }
            this.cache.del(key);
        }
        catch (e) {
            this.logger.warn(`Deleting key : [${key}] failed Error : ${e.message}`);
        }
    }
    async deleteMultiple(keys) {
        this.logger.debug(`Attempting to delete [${keys}]`);
        try {
            if (!Array.isArray(keys)) {
                this.logger.warn(`Expecting array but got ${typeof keys} : ${keys}`);
                return;
            }
            this.cache.del(keys);
        }
        catch (e) {
            this.logger.warn(`Deleting keys : [${keys}] failed Error : ${e.message}`);
        }
    }
    async getKeyTTLInMs(key) {
        try {
            this.logger.debug(`Attempting to get [${key}] ttl`);
            return this.cache.getTtl(key) - Date.now();
        }
        catch (e) {
            this.logger.warn(`Getting [${key}] ttl failed Error : ${e.message}`);
        }
    }
    async changeKeyTTLms(key, ttl) {
        try {
            this.logger.debug(`Attempting to change [${key}] ttl to [${ttl}] ms`);
            const secondsTTL = this.msToSeconds(ttl);
            this.cache.ttl(key, secondsTTL);
        }
        catch (e) {
            this.logger.warn(`Changing [${key}] ttl to [${ttl}] ms failed Error : ${e.message}`);
        }
    }
    cleanAll() {
        this.cache.flushAll();
    }
    msToSeconds(number) {
        return number / 1000;
    }
}
exports.CacheDB = CacheDB;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(86), exports);
__exportStar(__webpack_require__(242), exports);
__exportStar(__webpack_require__(93), exports);


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpRouteError = void 0;
const CustomError_1 = __webpack_require__(16);
class HttpRouteError extends CustomError_1.CustomError {
    constructor(message, externalMessage = 'Something went wrong', statusCode) {
        super(message, externalMessage);
        this.statusCode = statusCode;
        this._errorCode = statusCode;
    }
}
exports.HttpRouteError = HttpRouteError;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.NS_PER_SEC = exports.TimeUtils = void 0;
const Constants_1 = __webpack_require__(0);
const NS_PER_SEC = 1e9;
exports.NS_PER_SEC = NS_PER_SEC;
const NS_PER_MS = 1e6;
const appStartTime = process.hrtime();
class TimeUtils {
    static convertMillisecondsToSeconds(milliseconds) {
        return Math.round(milliseconds / Constants_1.TIME.SECOND_MS);
    }
    static convertMinutesToSeconds(minutes) {
        return minutes * Constants_1.TIME.MINUTE_S;
    }
    static convertMinutesToMilliseconds(minutes) {
        return minutes * Constants_1.TIME.MINUTE_MS;
    }
    static getAppRuntimeInNanoSeconds() {
        const hrtime = process.hrtime(appStartTime);
        return ((hrtime[0] * NS_PER_SEC) + hrtime[1]);
    }
    static getAppRuntimeInMilliseconds() {
        return TimeUtils.getAppRuntimeInNanoSeconds() / NS_PER_MS;
    }
    static getAppRuntimeInSeconds() {
        return TimeUtils.getAppRuntimeInNanoSeconds() / NS_PER_SEC;
    }
}
exports.TimeUtils = TimeUtils;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationController = void 0;
const Decorators_1 = __webpack_require__(2);
const LoggerFactory_1 = __webpack_require__(1);
const Constants_1 = __webpack_require__(0);
const Models_1 = __webpack_require__(47);
const Services_1 = __webpack_require__(3);
const AuthenticationErrors_1 = __webpack_require__(13);
const CrowdAuthenticationController_1 = __webpack_require__(31);
const access_nodejs_client_1 = __webpack_require__(9);
const LoginController_1 = __webpack_require__(29);
const PlatformConfiguration_1 = __webpack_require__(11);
const LogoutController_1 = __webpack_require__(65);
const TokenUtils_1 = __webpack_require__(101);
const config = __webpack_require__(4);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
const EXPIRED = Constants_1.ACCESS.VERIFY_TOKEN_RESPONSE_REASONS.EXPIRED;
const { SECOND_MS, MINUTE_MS } = Constants_1.TIME;
const WATER_MARK_MINUTES = Constants_1.TOKEN_CONSTANTS.WATER_MARK_MINUTES;
class AuthenticationController {
    static async validateUiSessionAndSaveUserOnReq(req, res, next) {
        var _a;
        try {
            let skipSlidingWindow = Constants_1.SKIP_SLIDING_WINDOW_ROUTES.some((url) => req.originalUrl.includes(url));
            if (AuthenticationController.skipAuthentication(req)) {
                return next();
            }
            const uiSessionTokens = Models_1.UiSessionTokens.getUiSessionTokensFromCookies(req.cookies);
            if (!uiSessionTokens) {
                throw new AuthenticationErrors_1.AuthErrorNoCookies();
            }
            const uiSessionJwtPayload = await Services_1.AccessTokenService.parseToken(uiSessionTokens.accessToken);
            if (!uiSessionJwtPayload) {
                throw new AuthenticationErrors_1.AuthErrorParseToken();
            }
            const isCrowd = Services_1.CrowdAuthenticationService.isInCrowdMode(uiSessionJwtPayload);
            if (isCrowd) {
                return await CrowdAuthenticationController_1.default.validateUiSessionAndSaveUserOnReqCROWD(req, res, next, uiSessionTokens, uiSessionJwtPayload);
            }
            const verifyTokenResponse = await Services_1.AccessTokenService.verifyToken(uiSessionTokens.accessToken);
            if (!verifyTokenResponse) {
                throw new AuthenticationErrors_1.AuthErrorVerifyFail(`no verify token response`);
            }
            if (!verifyTokenResponse.successful) {
                if (verifyTokenResponse.reason !== EXPIRED) {
                    throw new AuthenticationErrors_1.AuthErrorVerifyFail(verifyTokenResponse.reason);
                }
                if (!AuthenticationController.isRememberMeRequest(uiSessionTokens)) {
                    throw new AuthenticationErrors_1.AuthErrorSessionExpired();
                }
                await LoginController_1.LoginController.reLoginWithRememberToken(res, uiSessionTokens, uiSessionJwtPayload);
                skipSlidingWindow = true;
            }
            const isRefreshUiSessionNeeded = !skipSlidingWindow && AuthenticationController.isPastWatermarkTime(uiSessionJwtPayload.issuedAt);
            // kyle
            isRefreshUiSessionNeeded = false;
            if (isRefreshUiSessionNeeded) {
                const userName = (_a = uiSessionJwtPayload === null || uiSessionJwtPayload === void 0 ? void 0 : uiSessionJwtPayload.subject) === null || _a === void 0 ? void 0 : _a.split('/').pop();
                logger.debug(`refresh to ui session token for user - ${userName} needed`);
                await LoginController_1.LoginController.reAuthenticateInternalUser(userName, uiSessionJwtPayload.parsedExtension.externalUser);
                await AuthenticationController.refreshUiSessionToken(res, uiSessionTokens.refreshToken, uiSessionJwtPayload);
            }
            await AuthenticationController.authenticateRequestAndSaveUserInfo(req);
            logger.debug(`authenticated user : ${req.userName}`);
            return next();
        }
        catch (e) {
            return AuthenticationController.handleAuthFiltersErrors(req, res, next, e);
        }
    }
    static async handleAuthFiltersErrors(req, res, next, e) {
        const shouldRevoke = e instanceof AuthenticationErrors_1.AuthErrorVerifyFail && e.reason === 'revoked';
        await LogoutController_1.LogoutController.logout(req, res, shouldRevoke);
        if (e instanceof AuthenticationErrors_1.AuthErrorSessionExpired) {
            return next(e);
        }
        if (PlatformConfiguration_1.default.anonAccessEnabled || AuthenticationController.isOpenOrAuthenticatedPath(req)) {
            return next();
        }
        logger.debug(`Error in validateUiSessionAndSaveUserOnReq for url - ${req.originalUrl}`);
        return next(e);
    }
    static removeUiSessionCookieFromRequest(req) {
        delete req.headers.cookie;
    }
    static async authenticateRequestAndSaveUserInfo(req) {
        const userInfo = await TokenUtils_1.default.getUserInfoFromCookies(req.cookies);
        req.authenticated = userInfo.authenticated;
        req.userName = userInfo.userName;
        req.sessionId = userInfo.sessionId;
        req.jwtExtension = userInfo.jwtExtension;
        req.userScope = userInfo.userScope;
        Object.defineProperty(req, 'userGroups', {
            get: () => {
                return access_nodejs_client_1.Scope.parseScopeString(userInfo.userScope).groups;
            }
        });
    }
    static setOpenRequests(req, _, next) {
        const path = req.originalUrl;
        req.openPath = Constants_1.OPEN_ROUTES.some((openRoute) => path.startsWith(openRoute));
        next();
    }
    static isAuthenticatedRequest(req) {
        return !!req.userName && req.userName !== Constants_1.ANONYMOUS && req.authenticated;
    }
    static isOpenOrAuthenticatedPath(req) {
        const path = req.originalUrl;
        return Constants_1.OPEN_OR_AUTHENTICATED_ROUTES.includes(path);
    }
    static skipAuthentication(req) {
        return AuthenticationController.isAuthenticatedRequest(req) || AuthenticationController.isOpenRequest(req);
    }
    static isOpenRequest(req) {
        return !!req.openPath;
    }
    static isRememberMeRequest(uiSessionTokens) {
        return !!uiSessionTokens._rememberMeToken;
    }
    static isPastWatermarkTime(tokenIssueTime) {
        return tokenIssueTime * SECOND_MS + WATER_MARK_MINUTES * MINUTE_MS < Date.now();
    }
    static async refreshUiSessionToken(res, refreshTokenKey, uiSessionJwtPayload) {
        try {
            const uiSessionTokens = await Services_1.AccessTokenService.refreshUISessionToken(refreshTokenKey, uiSessionJwtPayload);
            if (uiSessionTokens) {
                LoginController_1.LoginController.setUiSessionTokens(res, uiSessionTokens);
            }
        }
        catch (e) {
            logger.warn(`could not refresh ui session token. request will still be accepted until the token expires. msg from access - ${e.message}`);
        }
    }
    static uiReAuthenticationNeeded(req, res) {
        const { lastLoginTime } = req.jwtExtension;
        if (!lastLoginTime) {
            throw new AuthenticationErrors_1.AuthErrorParseToken();
        }
        const shouldUiReAuthenticate = (new Date()).getTime() - lastLoginTime > this.DEFAULT_REAUTHENTICATION_TIME;
        return res.send({ shouldUiReAuthenticate });
    }
}
AuthenticationController.DEFAULT_REAUTHENTICATION_TIME = config.get('frontend.session.reAuthenticationMinutes') * MINUTE_MS;
__decorate([
    Decorators_1.methodLog({ logger })
], AuthenticationController, "validateUiSessionAndSaveUserOnReq", null);
__decorate([
    Decorators_1.methodLog({ logger })
], AuthenticationController, "refreshUiSessionToken", null);
exports.AuthenticationController = AuthenticationController;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewPipelinesController = void 0;
const LoggerFactory_1 = __webpack_require__(1);
const Services_1 = __webpack_require__(3);
const JFrogController_1 = __webpack_require__(5);
const HttpRouteError_1 = __webpack_require__(37);
const pipelines_nodejs_client_1 = __webpack_require__(34);
const LoggerDecorator_1 = __webpack_require__(17);
const url_1 = __webpack_require__(346);
const ParamValidationErrorInvalidObjectId_1 = __webpack_require__(347);
const ParamValidationErrorInvalidType_1 = __webpack_require__(348);
const ParamValidationErrorInvalidObjectName_1 = __webpack_require__(349);
const Pipelines_1 = __webpack_require__(79);
const Constants_1 = __webpack_require__(0);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
class ViewPipelinesController extends JFrogController_1.JFrogController {
    static async getViewPipelines(req, res, next) {
        try {
            const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
            const [pipelines, sources, systemCodes, incompleteRuns, identityFavorites,] = await ViewPipelinesController.fetchBasicViewPipelineData(authData);
            const pipeFavorites = identityFavorites.filter(({ objectType }) => objectType === 'Pipelines');
            const runIds = pipelines
                .map(({ latestCompletedRunId, latestRunId }) => latestCompletedRunId || latestRunId)
                .filter(Boolean)
                .map((runId) => runId.toString());
            const runs = await Services_1.PipelinesService.getRuns({
                runIds,
                light: true,
            }, authData).catch(() => {
                logger.error('failed getting runs, return empty array');
                return [];
            });
            const [latestRunResourceVersions, runningPipelines] = await ViewPipelinesController.fetchPipelinesRunningData(authData, runs, incompleteRuns);
            const viewPipelinesData = await ViewPipelinesController.getMappedViewPipelines(pipelines, sources, systemCodes, runs, latestRunResourceVersions, incompleteRuns, runningPipelines, pipeFavorites);
            JFrogController_1.JFrogController.sendNoCacheResponse(res, viewPipelinesData);
        }
        catch (e) {
            return ViewPipelinesController.handleError(e, next);
        }
    }
    static async getPipelinesStatistics(req, res, next) {
        try {
            const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
            const { pipelines, projects } = await ViewPipelinesController.fetchBasicPipelinesStatisticsData(authData);
            const defaultProject = projects.find(({ name }) => name === Constants_1.PIPELINES.DEFAULT_PROJECT_NAME);
            const statisticsResponse = [
                {
                    resourceType: "pipelines",
                    totalCount: pipelines.length,
                    unassignedCount: pipelines.filter(({ projectId }) => projectId === (defaultProject === null || defaultProject === void 0 ? void 0 : defaultProject.id)).length
                },
            ];
            JFrogController_1.JFrogController.sendNoCacheResponse(res, statisticsResponse);
        }
        catch (e) {
            return ViewPipelinesController.handleError(e, next);
        }
    }
    static async fetchBasicPipelinesStatisticsData(authData) {
        let apiPipelines = [];
        let currentFetchedPipelines = [];
        let isFetchAttempted = false;
        let pageCount = 0;
        while (currentFetchedPipelines.length === Constants_1.PIPELINES.PIPELINES_CALL_LIMIT || !isFetchAttempted) {
            isFetchAttempted = true;
            currentFetchedPipelines = await Services_1.PipelinesService.getPipelines({
                limit: Constants_1.PIPELINES.PIPELINES_CALL_LIMIT,
                skip: pageCount * Constants_1.PIPELINES.PIPELINES_CALL_LIMIT
            }, authData).catch(() => {
                logger.error('failed getting pipeline, return empty array');
                return [];
            });
            apiPipelines = apiPipelines.concat(currentFetchedPipelines);
            pageCount++;
        }
        const projects = await Services_1.PipelinesService.getProjects(authData).catch(() => {
            logger.error('failed getting projects, return empty array');
            return [];
        });
        return {
            pipelines: apiPipelines,
            projects,
        };
    }
    static async getPipelineYamlObjects(req, res, next) {
        try {
            const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
            const response = {
                pipeline: {},
                resources: [],
                error: '',
            };
            response.pipeline = await Services_1.PipelinesService.getPipelineById(req.params.id, authData).catch(() => {
                logger.error('failed getting pipeline by Id');
                return {};
            });
            if (response.pipeline.id) {
                const pipelineStepConnections = await Services_1.PipelinesService.getPipelineStepConnections({
                    pipelineIds: [response.pipeline.id.toString()],
                }, authData).catch(() => {
                    logger.error('failed getting pipelineStepConnections');
                    return [];
                });
                const resourcesIds = pipelineStepConnections
                    .map(({ operationResourceId }) => operationResourceId)
                    .filter((resourceId) => resourceId !== null);
                response.resources = resourcesIds.length
                    ? await Services_1.PipelinesService.getResources({
                        resourceIds: resourcesIds.map((id) => id.toString()),
                    }, authData)
                    : [];
            }
            else {
                response.error = `failed getting pipeline by Id for Id: ${req.params.id}`;
            }
            JFrogController_1.JFrogController.sendNoCacheResponse(res, response);
        }
        catch (e) {
            return ViewPipelinesController.handleError(e, next);
        }
    }
    static async redirectToPipelines(req, res, next) {
        logger.debug(`redirecting to pipelines UI`);
        try {
            ViewPipelinesController.validateRedirectParams(req);
        }
        catch (e) {
            return ViewPipelinesController.handleError(e, next);
        }
        try {
            const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
            const loginTokenResponse = await Services_1.PipelinesService.getLoginToken(authData);
            const pipelinesRedirectUrl = url_1.format({
                host: loginTokenResponse.pipelinesFrontendUrl,
                pathname: '/redirect',
                query: {
                    type: req.query.type,
                    objectId: req.query.objectId,
                    objectName: req.query.objectName,
                    stepName: req.query.stepName,
                    branch: req.query.branch,
                    runNumber: req.query.runNumber,
                    shortAccessToken: loginTokenResponse.accessToken,
                },
            });
            res.redirect(pipelinesRedirectUrl);
        }
        catch (e) {
            return ViewPipelinesController.handleError(e, next);
        }
    }
    static async getViewRuns(req, res, next) {
        try {
            const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
            const [systemCodes, inCompleteRuns] = await ViewPipelinesController.fetchBasicViewRunsData(authData);
            let viewRunsData = [];
            let pipelines = [];
            let runResourceVersions = [];
            let sources = [];
            if (inCompleteRuns.length > 0) {
                pipelines = await Services_1.PipelinesService.getPipelines({
                    pipelineIds: inCompleteRuns.map(({ pipelineId }) => pipelineId.toString()),
                }, authData);
                sources = await Services_1.PipelinesService.getSources({
                    pipelineSourceIds: pipelines.map(({ pipelineSourceId }) => pipelineSourceId.toString()),
                }, authData);
                let latestRunResourceVersionIds = inCompleteRuns.map(({ staticPropertyBag }) => +staticPropertyBag.triggeredByRunResourceVersionId);
                latestRunResourceVersionIds = latestRunResourceVersionIds.filter(Boolean);
                if (latestRunResourceVersionIds.length) {
                    let runResourceVersionIds = inCompleteRuns
                        .map(({ staticPropertyBag }) => staticPropertyBag === null || staticPropertyBag === void 0 ? void 0 : staticPropertyBag.triggeredByRunResourceVersionId)
                        .filter(Boolean);
                    runResourceVersionIds = runResourceVersionIds.map((id) => `${id}`);
                    runResourceVersions = await Services_1.PipelinesService.getRunResourceVersions({
                        runResourceVersionIds,
                    }, authData);
                }
            }
            if (pipelines.length > 0 && systemCodes.length > 0 && inCompleteRuns.length > 0) {
                viewRunsData = inCompleteRuns.map((run) => {
                    const mappedRun = new pipelines_nodejs_client_1.Run(run, systemCodes);
                    const pipeline = pipelines.find(({ id }) => id === run.pipelineId);
                    const runResourceVersion = runResourceVersions.find(({ id }) => id === run.staticPropertyBag.triggeredByRunResourceVersionId);
                    const source = sources.find(({ id }) => id === pipeline.pipelineSourceId);
                    return new Pipelines_1.ViewRun(pipeline.name, pipeline.pipelineSourceBranch || source.branch, mappedRun, runResourceVersion, pipeline.id);
                });
            }
            JFrogController_1.JFrogController.sendNoCacheResponse(res, viewRunsData);
        }
        catch (e) {
            return ViewPipelinesController.handleError(e, next);
        }
    }
    static async createIdentityFavorite(req, res, next) {
        try {
            const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
            const newFavorite = req.body;
            const identityFavoriteResponse = await Services_1.PipelinesService.createIdentityFavorite(newFavorite, authData);
            JFrogController_1.JFrogController.sendNoCacheResponse(res, identityFavoriteResponse);
        }
        catch (e) {
            return ViewPipelinesController.handleError(e, next);
        }
    }
    static async deleteFavorite(req, res, next) {
        try {
            const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
            const id = req.params.id;
            const response = await Services_1.PipelinesService.deleteIdentityFavorite(id, authData);
            JFrogController_1.JFrogController.sendNoCacheResponse(res, response || { id });
        }
        catch (e) {
            return ViewPipelinesController.handleError(e, next);
        }
    }
    static async toggleFavorites(req, res, next) {
        try {
            const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
            const isEnabled = req.body && req.body.isEnabled || false;
            res.cookie('isPipelinesFavoritesEnabled', isEnabled, {
                httpOnly: true,
                secure: false,
            });
            JFrogController_1.JFrogController.sendNoCacheResponse(res, isEnabled);
        }
        catch (e) {
            return ViewPipelinesController.handleError(e, next);
        }
    }
    static async toggleGraphView(req, res, next) {
        try {
            const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
            const isEnabled = req.body && req.body.isEnabled || false;
            res.cookie('isGraphViewEnabled', isEnabled, {
                httpOnly: true,
                secure: false,
            });
            JFrogController_1.JFrogController.sendNoCacheResponse(res, isEnabled);
        }
        catch (e) {
            return ViewPipelinesController.handleError(e, next);
        }
    }
    static async isGraphViewEnabled(req, res, next) {
        try {
            const isEnabled = req.cookies.isGraphViewEnabled === 'true';
            JFrogController_1.JFrogController.sendNoCacheResponse(res, isEnabled);
        }
        catch (e) {
            return ViewPipelinesController.handleError(e, next);
        }
    }
    static async viewPipelineFavorites(req, res, next) {
        try {
            const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
            const isEnabled = req.cookies.isPipelinesFavoritesEnabled === 'true';
            JFrogController_1.JFrogController.sendNoCacheResponse(res, isEnabled);
        }
        catch (e) {
            return ViewPipelinesController.handleError(e, next);
        }
    }
    static handleError(e, next, message) {
        logger.error(e);
        const errMsg = e.data && e.data.message;
        const error = new HttpRouteError_1.HttpRouteError(message || errMsg, errMsg, e.status);
        next(error);
        return;
    }
    static validateRedirectParams(req) {
        const { type, objectId, objectName } = req.query;
        if (objectName && typeof objectName !== 'string') {
            throw new ParamValidationErrorInvalidObjectName_1.ParamValidationErrorInvalidObjectName();
        }
        if (!objectName) {
            if (!type || typeof type !== 'string') {
                throw new ParamValidationErrorInvalidType_1.ParamValidationErrorInvalidType();
            }
            if (!objectId && typeof objectId !== 'number') {
                throw new ParamValidationErrorInvalidObjectId_1.ParamValidationErrorInvalidObjectId();
            }
        }
    }
    static async fetchBasicViewRunsData(authData) {
        const systemCodesCall = Services_1.PipelinesService.getSystemCodes(authData);
        const statusCodes = [pipelines_nodejs_client_1.STATUS_CODES.PROCESSING.TYPE, pipelines_nodejs_client_1.STATUS_CODES.READY.TYPE];
        const sortBy = ['createdAt'];
        const runsCall = Services_1.PipelinesService.getRuns({
            statusCodes,
            sortBy,
        }, authData);
        return Promise.all([systemCodesCall, runsCall]);
    }
    static async fetchBasicViewPipelineData(authData) {
        const pipelines = Services_1.PipelinesService.getPipelines({
            light: true,
            status: 'completed',
        }, authData);
        const sourcesCall = Services_1.PipelinesService.getSources({}, authData);
        const systemCodesCall = Services_1.PipelinesService.getSystemCodes(authData);
        const statusCodes = [pipelines_nodejs_client_1.STATUS_CODES.PROCESSING.TYPE, pipelines_nodejs_client_1.STATUS_CODES.READY.TYPE];
        const sortBy = ['createdAt'];
        const runsCall = Services_1.PipelinesService.getRuns({
            statusCodes,
            sortBy,
        }, authData);
        const identityFavoritesCall = Services_1.PipelinesService.getIdentityFavorites(authData);
        return Promise.all([pipelines, sourcesCall, systemCodesCall, runsCall, identityFavoritesCall]);
    }
    static async fetchPipelinesRunningData(authData, runs, incompleteRuns) {
        let latestRunResourceVersions = [];
        let runningPipelines = [];
        const runningPipelineIds = incompleteRuns.map(({ pipelineId }) => pipelineId + '').filter(Boolean);
        if (runningPipelineIds.length) {
            runningPipelines = await Services_1.PipelinesService.getPipelines({
                pipelineIds: runningPipelineIds,
            }, authData);
        }
        let latestRunResourceVersionIds = runs.map(({ staticPropertyBag }) => +staticPropertyBag.triggeredByRunResourceVersionId);
        latestRunResourceVersionIds = latestRunResourceVersionIds.filter(Boolean);
        if (latestRunResourceVersionIds.length) {
            let runResourceVersionIds = runs
                .map(({ staticPropertyBag }) => staticPropertyBag === null || staticPropertyBag === void 0 ? void 0 : staticPropertyBag.triggeredByRunResourceVersionId)
                .filter(Boolean);
            runResourceVersionIds = runResourceVersionIds.map((id) => `${id}`);
            latestRunResourceVersions = await Services_1.PipelinesService.getRunResourceVersions({
                runResourceVersionIds,
            }, authData);
        }
        return [latestRunResourceVersions, runningPipelines];
    }
    static getMappedViewPipelines(pipelines, sources, systemCodes, runs, runResourceVersions, incompleteRuns, runningPipelines, pipeFavorites) {
        if (pipelines.length === 0 || sources.length === 0 || systemCodes.length === 0) {
            return [];
        }
        const viewPipelinesData = [];
        const mappedIncompleteRuns = incompleteRuns.map((run) => {
            const runPipeline = runningPipelines.find(({ id }) => id === run.pipelineId);
            return {
                ...run,
                runPipeline,
            };
        });
        const processingRuns = mappedIncompleteRuns.filter(({ statusCode }) => statusCode === pipelines_nodejs_client_1.STATUS_CODES.PROCESSING.TYPE);
        const waitingRuns = mappedIncompleteRuns.filter(({ statusCode }) => statusCode === pipelines_nodejs_client_1.STATUS_CODES.READY.TYPE);
        for (const pipeline of pipelines) {
            const pipelineSource = sources.find(({ id }) => id === pipeline.pipelineSourceId);
            const repositoryFullName = pipelineSource.repositoryFullName;
            const processingRunsCount = processingRuns.filter(({ runPipeline }) => (runPipeline === null || runPipeline === void 0 ? void 0 : runPipeline.name) === pipeline.name &&
                ((runPipeline === null || runPipeline === void 0 ? void 0 : runPipeline.pipelineSourceBranch) === pipeline.pipelineSourceBranch ||
                    (runPipeline === null || runPipeline === void 0 ? void 0 : runPipeline.pipelineSourceBranch) === pipelineSource.branch)).length;
            const waitingRunsCount = waitingRuns.filter(({ runPipeline }) => (runPipeline === null || runPipeline === void 0 ? void 0 : runPipeline.name) === pipeline.name &&
                ((runPipeline === null || runPipeline === void 0 ? void 0 : runPipeline.pipelineSourceBranch) === pipeline.pipelineSourceBranch ||
                    (runPipeline === null || runPipeline === void 0 ? void 0 : runPipeline.pipelineSourceBranch) === pipelineSource.branch)).length;
            const favorite = pipeFavorites.find(({ objectId }) => objectId === pipeline.id);
            const isFavorite = !!favorite;
            const viewPipeline = new Pipelines_1.ViewPipeline(pipeline.name, pipeline.id, pipeline.pipelineSourceBranch || pipelineSource.branch, repositoryFullName, {
                processingRunsCount,
                waitingRunsCount,
            }, isFavorite, favorite && favorite.id || null);
            if (pipeline.latestCompletedRunId || pipeline.latestRunId) {
                const runIdToMatch = pipeline.latestCompletedRunId || pipeline.latestRunId;
                const run = runs.find(({ id }) => id === runIdToMatch);
                if (run) {
                    const mappedRun = new pipelines_nodejs_client_1.Run(run, systemCodes);
                    viewPipeline.updateLatestStatusInfo(mappedRun);
                    if (run.staticPropertyBag.triggeredByRunResourceVersionId) {
                        const runResourceVersion = runResourceVersions.find(({ id }) => id === run.staticPropertyBag.triggeredByRunResourceVersionId);
                        viewPipeline.updateCommitInfo(runResourceVersion, systemCodes);
                    }
                }
            }
            viewPipelinesData.push(viewPipeline);
        }
        return viewPipelinesData;
    }
}
__decorate([
    LoggerDecorator_1.methodLog({ logger })
], ViewPipelinesController, "getViewPipelines", null);
__decorate([
    LoggerDecorator_1.methodLog({ logger })
], ViewPipelinesController, "getPipelinesStatistics", null);
__decorate([
    LoggerDecorator_1.methodLog({ logger })
], ViewPipelinesController, "fetchBasicPipelinesStatisticsData", null);
__decorate([
    LoggerDecorator_1.methodLog({ logger })
], ViewPipelinesController, "getPipelineYamlObjects", null);
__decorate([
    LoggerDecorator_1.methodLog({ logger })
], ViewPipelinesController, "redirectToPipelines", null);
__decorate([
    LoggerDecorator_1.methodLog({ logger })
], ViewPipelinesController, "getViewRuns", null);
__decorate([
    LoggerDecorator_1.methodLog({ logger })
], ViewPipelinesController, "createIdentityFavorite", null);
__decorate([
    LoggerDecorator_1.methodLog({ logger })
], ViewPipelinesController, "deleteFavorite", null);
__decorate([
    LoggerDecorator_1.methodLog({ logger })
], ViewPipelinesController, "toggleFavorites", null);
__decorate([
    LoggerDecorator_1.methodLog({ logger })
], ViewPipelinesController, "toggleGraphView", null);
__decorate([
    LoggerDecorator_1.methodLog({ logger })
], ViewPipelinesController, "isGraphViewEnabled", null);
__decorate([
    LoggerDecorator_1.methodLog({ logger })
], ViewPipelinesController, "viewPipelineFavorites", null);
__decorate([
    LoggerDecorator_1.methodLog({ logger })
], ViewPipelinesController, "handleError", null);
__decorate([
    LoggerDecorator_1.methodLog({ logger })
], ViewPipelinesController, "fetchPipelinesRunningData", null);
exports.ViewPipelinesController = ViewPipelinesController;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const LoggerFactory_1 = __webpack_require__(1);
const AuthenticationErrors_1 = __webpack_require__(13);
const Services_1 = __webpack_require__(3);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
/*
   This middleware should NOT be used for high frequency API's, it's costly in performance due to it outgoing to access on every request
 */
const allowOnlyAdmin = async (req, res, next) => {
    const isAdmin = await Services_1.AccessService.isUserAdmin(req.userName, req.userGroups);
    if (isAdmin) {
        logger.debug(`${req.userName} is admin, will pass to next middleware`);
        return next();
    }
    logger.debug(`${req.userName} is not admin, will block request with 403 status code`);
    next(new AuthenticationErrors_1.AuthErrorNotAdmin());
};
exports.default = allowOnlyAdmin;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const STATUS_CODES = {
    OK: 200,
    ACCEPTED: 202,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    TIMEOUT: 408,
    BAD_REQUEST: 400,
    SSO_LOGIN: 420,
    NOT_FOUND: 404,
    CONFLICT: 409,
    SERVICE_UNAVAILABLE: 503,
    INTERNAL_ERROR: 500,
    NOT_IMPLEMENTED: 501,
    SSO_REDIRECT: 302,
};
exports.default = STATUS_CODES;


/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("semver");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("winston");

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.HeadersManager = void 0;
const ThreadLocal_1 = __webpack_require__(82);
const Constants_1 = __webpack_require__(0);
class HeadersManager {
    static middleware(req, res, next) {
        if (!HeadersManager.isThreadLocalActive()) {
            throw new Error('must initialize ThreadLocal');
        }
        Constants_1.PROXYING_HEADERS.forEach((headerName) => {
            const headerValue = req.get(headerName);
            const isValidHeaderValue = HeadersManager.isValidHeaderValue(headerValue);
            if (isValidHeaderValue) {
                HeadersManager.add(headerName, headerValue);
            }
        });
        next();
    }
    static get(headerName) {
        if (!HeadersManager.isThreadLocalActive()) {
            return null;
        }
        return ThreadLocal_1.ThreadLocal.get(headerName);
    }
    static entries() {
        if (!HeadersManager.isThreadLocalActive()) {
            return [];
        }
        return Constants_1.PROXYING_HEADERS.filter((headerName) => {
            return HeadersManager.isValidHeaderValue(ThreadLocal_1.ThreadLocal.get(headerName));
        }).map((headerName) => {
            const headerValue = ThreadLocal_1.ThreadLocal.get(headerName);
            return [headerName, headerValue];
        });
    }
    static add(header, value) {
        if (!HeadersManager.isThreadLocalActive()) {
            throw new Error('must initialize ThreadLocal');
        }
        ThreadLocal_1.ThreadLocal.set(header, value);
    }
    static getContextHeaders() {
        let headers = {};
        HeadersManager.entries().forEach(([key, value]) => {
            headers[key] = value;
        });
        const { TraceID } = __webpack_require__(57);
        const traceID = TraceID.get();
        if (traceID) {
            headers[Constants_1.TRACE_ID_HEADER] = traceID;
        }
        headers = HeadersManager.addUserAgentToHeaders(headers);
        return headers;
    }
    static isThreadLocalActive() {
        return ThreadLocal_1.ThreadLocal.isActive();
    }
    static isValidHeaderValue(headerValue) {
        return headerValue !== undefined && headerValue !== null && typeof headerValue === 'string';
    }
    static addUserAgentToHeaders(headers) {
        headers[Constants_1.CUSTOM_HEADERS.USER_AGENT] = Constants_1.CUSTOM_HEADERS.USER_AGENT_VALUE;
        return headers;
    }
}
exports.HeadersManager = HeadersManager;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(94), exports);
__exportStar(__webpack_require__(264), exports);
__exportStar(__webpack_require__(102), exports);


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionCookieUtil = void 0;
const CookieUtil_1 = __webpack_require__(49);
const Constants_1 = __webpack_require__(0);
class SessionCookieUtil extends CookieUtil_1.default {
    constructor() {
        super(Constants_1.ARTIFACTORY_SESSION_COOKIE_NAME);
    }
}
exports.SessionCookieUtil = SessionCookieUtil;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const LoggerFactory_1 = __webpack_require__(1);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
class CookieUtil {
    constructor(cookieKey) {
        this.cookieKey = cookieKey;
        this.getValueFromSetCookieHeader = this.getValueFromSetCookieHeader.bind(this);
        this.doesCookieExists = this.doesCookieExists.bind(this);
        this.clearTestedCookieFromResponse = this.clearTestedCookieFromResponse.bind(this);
        this.removeTestedCookie = this.removeTestedCookie.bind(this);
        this.getTestedCookie = this.getTestedCookie.bind(this);
        this.getTestedCookieFromSetHeader = this.getTestedCookieFromSetHeader.bind(this);
        this.isTestedCookie = this.isTestedCookie.bind(this);
        this.isNotTestedCookie = this.isNotTestedCookie.bind(this);
    }
    static findCookieByName(cookies, cookieName) {
        logger.debug('in CookieUtil::findCookieByNameFromArray');
        if (typeof cookies === 'string') {
            return cookies;
        }
        if (Array.isArray(cookies)) {
            return cookies.find((searchCookie) => searchCookie.startsWith(cookieName + '='));
        }
    }
    getValueFromSetCookieHeader(setCookieHeader) {
        let cookieValue = null;
        logger.debug(`CookieUtil - trying to get cookie value`);
        const cookie = this.getTestedCookie(setCookieHeader);
        if (!cookie) {
            logger.debug(`SessionCookieUtil - could not get cookieValue from cookie`);
            return null;
        }
        logger.debug(`SessionCookieUtil - found cookieValue. cookie - ${cookie}`);
        if (typeof cookie === 'string') {
            cookieValue = cookie.substring(cookie.indexOf('=') + 1);
        }
        logger.debug(`SessionCookieUtil - cookieValue - ${cookieValue}`);
        return cookieValue;
    }
    doesCookieExists(setCookieHeader) {
        return !!this.getTestedCookie(setCookieHeader);
    }
    clearTestedCookieFromResponse(response) {
        let setCookies = response.get('set-cookie');
        if (setCookies && Array.isArray(setCookies) && setCookies.length > 0) {
            setCookies = this.removeTestedCookie(response.get('set-cookie'));
            response.set('set-cookie', setCookies);
        }
    }
    removeTestedCookie(setCookies) {
        if (setCookies && Array.isArray(setCookies) && setCookies.length > 0) {
            setCookies = setCookies.filter(this.isNotTestedCookie);
        }
        return setCookies;
    }
    getTestedCookie(setCookieHeader) {
        const fullCookie = this.getTestedCookieFromSetHeader(setCookieHeader);
        if (!fullCookie && typeof fullCookie !== 'string') {
            return null;
        }
        return fullCookie.split(';')[0];
    }
    getTestedCookieFromSetHeader(setCookieHeader) {
        if (setCookieHeader && Array.isArray(setCookieHeader) && setCookieHeader.length > 0) {
            return setCookieHeader.find(this.isTestedCookie);
        }
        if (typeof setCookieHeader === 'string') {
            const cookiesArray = this.getTrimmedCookieArray(setCookieHeader.trim());
            return cookiesArray.find(this.isTestedCookie);
        }
        return null;
    }
    getTrimmedCookieArray(cookie) {
        const splittedCookies = cookie.split(';');
        return splittedCookies
            .map((item) => item.split(','))
            .join()
            .replace(/\s/g, '')
            .split(',');
    }
    isTestedCookie(cookie) {
        const regex = new RegExp(`^${this.cookieKey}=[^ |;]`);
        return regex.test(cookie);
    }
    isNotTestedCookie(cookie) {
        const regex = new RegExp(`^${this.cookieKey}=[^ |;]`);
        return !regex.test(cookie);
    }
}
exports.default = CookieUtil;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Constants_1 = __webpack_require__(0);
const config = __webpack_require__(4);
const avgUploadSpeed = 0.5;
const minUploadTimeMinutes = 15;
class ExpressTimeoutMiddleware {
    static default(req, res, next) {
        const isMultipart = ExpressTimeoutMiddleware.isMultipartRequest(req);
        let timeout = config.get('frontend.connectionTimeoutMinutes.default') * Constants_1.TIME.MINUTE_MS;
        if (isMultipart) {
            try {
                const size = Number(req.get('content-length'));
                timeout = ExpressTimeoutMiddleware.calculateTimeout(size) * Constants_1.TIME.MINUTE_MS;
            }
            catch (e) {
                timeout = config.get('frontend.connectionTimeoutMinutes.download') * Constants_1.TIME.MINUTE_MS;
            }
        }
        req.setTimeout(timeout, () => res.sendStatus(Constants_1.STATUS_CODES.TIMEOUT));
        next();
    }
    static download(req, res, next) {
        const timeout = config.get('frontend.connectionTimeoutMinutes.download') * Constants_1.TIME.MINUTE_MS;
        req.setTimeout(timeout, () => res.sendStatus(Constants_1.STATUS_CODES.TIMEOUT));
        next();
    }
    static isMultipartRequest(req) {
        const contentType = req.get('Content-Type');
        return contentType && contentType.includes('multipart');
    }
    static calculateTimeout(fileSizeBytes) {
        const mb = fileSizeBytes * 1e-6;
        const time = mb / avgUploadSpeed / Constants_1.TIME.MINUTE_S;
        return minUploadTimeMinutes < time ? time : minUploadTimeMinutes;
    }
}
exports.default = ExpressTimeoutMiddleware;


/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const LoggerFactory_1 = __webpack_require__(1);
const Services_1 = __webpack_require__(3);
const Constants_1 = __webpack_require__(0);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
const elevateUserTokenWithProjectAdmin = async (req, _, next) => {
    if (await Services_1.AccessService.isUserProjectAdmin(Constants_1.PROJECTS.DEFAULT_PROJECT_KEY, req.userName, req.userGroups)) {
        logger.debug(`passing ${req.originalUrl} with admin token`);
        req.userScope = Constants_1.TOKEN_CONSTANTS.SCOPE.APPLIED_PERMISSIONS_ADMIN;
    }
    next();
};
exports.default = elevateUserTokenWithProjectAdmin;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(50), exports);
__exportStar(__webpack_require__(377), exports);
__exportStar(__webpack_require__(378), exports);
__exportStar(__webpack_require__(380), exports);
__exportStar(__webpack_require__(124), exports);
__exportStar(__webpack_require__(41), exports);
__exportStar(__webpack_require__(381), exports);
__exportStar(__webpack_require__(52), exports);


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
var PipelinesValidator_1 = __webpack_require__(384);
Object.defineProperty(exports, "PipelinesValidator", { enumerable: true, get: function () { return PipelinesValidator_1.PipelinesValidator; } });
__exportStar(__webpack_require__(385), exports);
__exportStar(__webpack_require__(386), exports);


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SERVICES = exports.SERVICES_NAMES = exports.SERVICE_NAMES_TO_KEY = void 0;
const TOKEN_CONSTANTS_1 = __webpack_require__(75);
const SERVICES = Object.freeze({
    ARTIFACTORY: {
        KEY: 'ARTIFACTORY',
        NAME: 'artifactory',
        TYPE: 'jfrt',
        SUB_URL: 'artifactory',
        MICRO_SERVICE_OF: 'artifactory',
        AUDIENCE: TOKEN_CONSTANTS_1.default.AUDIENCE.ANY_ARTIFACTORY
    },
    DISTRIBUTION: {
        KEY: 'DISTRIBUTION',
        NAME: 'distribution',
        SUB_URL: 'distribution',
        TYPE: 'jfds',
        MICRO_SERVICE_OF: 'distribution',
        AUDIENCE: TOKEN_CONSTANTS_1.default.AUDIENCE.ANY_DISTRIBUTION
    },
    MISSION_CONTROL: {
        KEY: 'MISSION_CONTROL',
        NAME: 'mc',
        SUB_URL: 'mc',
        TYPE: 'jfmc',
        MICRO_SERVICE_OF: 'mc',
        AUDIENCE: TOKEN_CONSTANTS_1.default.AUDIENCE.ANY_MISSION_CONTROL
    },
    INSIGHT: {
        KEY: 'INSIGHT',
        NAME: 'insight',
        SUB_URL: 'insight',
        TYPE: 'jfisv',
        MICRO_SERVICE_OF: 'mc',
        AUDIENCE: TOKEN_CONSTANTS_1.default.AUDIENCE.ANY_INSIGHT
    },
    XRAY: {
        KEY: 'XRAY',
        NAME: 'xray',
        SUB_URL: 'xray',
        TYPE: 'jfxr',
        MICRO_SERVICE_OF: 'xray',
        AUDIENCE: TOKEN_CONSTANTS_1.default.AUDIENCE.ANY_XRAY
    },
    EVENT: {
        KEY: 'EVENT',
        NAME: 'event',
        SUB_URL: 'event',
        TYPE: 'jfevt',
        MICRO_SERVICE_OF: 'artifactory',
        AUDIENCE: TOKEN_CONSTANTS_1.default.AUDIENCE.ANY_EVENT
    },
    METADATA: {
        KEY: 'METADATA',
        NAME: 'metadata',
        SUB_URL: 'metadata',
        TYPE: 'jfmd',
        MICRO_SERVICE_OF: 'artifactory',
        AUDIENCE: TOKEN_CONSTANTS_1.default.AUDIENCE.ANY_METADATA
    },
    ACCESS: {
        KEY: 'ACCESS',
        NAME: 'access',
        SUB_URL: 'access',
        TYPE: 'jfac',
        MICRO_SERVICE_OF: 'artifactory',
        AUDIENCE: TOKEN_CONSTANTS_1.default.AUDIENCE.ANY_ACCESS
    },
    FRONTEND: {
        KEY: 'FRONTEND',
        NAME: 'frontend',
        TYPE: 'jffe',
        MICRO_SERVICE_OF: 'artifactory'
    },
    ANALYSIS: {
        KEY: 'ANALYSIS',
        NAME: 'analysis',
        TYPE: 'jfxana',
        MICRO_SERVICE_OF: 'xray'
    },
    PERSIST: {
        KEY: 'PERSIST',
        NAME: 'persist',
        TYPE: 'jfxpst',
        MICRO_SERVICE_OF: 'xray'
    },
    INDEXER: {
        KEY: 'INDEXER',
        NAME: 'indexer',
        TYPE: 'jfxidx',
        MICRO_SERVICE_OF: 'xray'
    },
    INSIGHT_SCHEDULER: {
        KEY: 'INSIGHT_SCHEDULER',
        NAME: 'insight_scheduler',
        TYPE: 'jfisc',
        MICRO_SERVICE_OF: 'mc'
    },
    INSIGHT_EXECUTOR: {
        KEY: 'INSIGHT_EXECUTOR',
        NAME: 'insight_executor',
        TYPE: 'jfiex',
        MICRO_SERVICE_OF: 'mc'
    },
    INSIGHT_SERVER2: {
        KEY: 'INSIGHT_SERVER2',
        NAME: 'insight_server2',
        TYPE: 'jfise',
        MICRO_SERVICE_OF: 'mc'
    },
    REPLICATOR: {
        KEY: 'REPLICATOR',
        NAME: 'replicator',
        SUB_URL: 'replicator',
        TYPE: 'jfxfer',
        MICRO_SERVICE_OF: 'artifactory',
        AUDIENCE: TOKEN_CONSTANTS_1.default.AUDIENCE.ANY_REPLICATOR
    },
    ROUTER: {
        KEY: 'ROUTER',
        NAME: 'router',
        TYPE: 'jfrou',
        MICRO_SERVICE_OF: 'artifactory'
    },
    OLD_ROUTER: {
        KEY: 'OLD_ROUTER',
        NAME: 'router',
        TYPE: 'jfrep',
        MICRO_SERVICE_OF: 'artifactory'
    },
    PIPELINES: {
        KEY: 'PIPELINES',
        NAME: 'pipelines',
        SUB_URL: 'pipelines',
        TYPE: 'jfpip',
        MICRO_SERVICE_OF: 'pipelines',
        AUDIENCE: TOKEN_CONSTANTS_1.default.AUDIENCE.ANY_PIPELINES
    },
    OLD_ARTIFACTORY: {
        KEY: 'OLD_ARTIFACTORY',
        NAME: 'artifactory',
        TYPE: 'jf-artifactory',
        MICRO_SERVICE_OF: 'artifactory',
        AUDIENCE: TOKEN_CONSTANTS_1.default.AUDIENCE.ANY_ARTIFACTORY
    },
    OLD_ACCESS: {
        KEY: 'OLD_ACCESS',
        NAME: 'access',
        TYPE: 'jf-access',
        MICRO_SERVICE_OF: 'artifactory',
        AUDIENCE: TOKEN_CONSTANTS_1.default.AUDIENCE.ANY_ACCESS
    }
});
exports.SERVICES = SERVICES;
const SERVICES_NAMES = Object.values(SERVICES).map((s) => s.NAME);
exports.SERVICES_NAMES = SERVICES_NAMES;
const SERVICE_NAMES_TO_KEY = Object.values(SERVICES).reduce((mapper, service) => {
    if (!['OLD_ARTIFACTORY', 'OLD_ACCESS'].includes(service.KEY)) {
        mapper[service.NAME] = service.KEY;
    }
    return mapper;
}, {});
exports.SERVICE_NAMES_TO_KEY = SERVICE_NAMES_TO_KEY;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
var LogType_1 = __webpack_require__(147);
Object.defineProperty(exports, "LogType", { enumerable: true, get: function () { return LogType_1.LogType; } });
__exportStar(__webpack_require__(148), exports);
__exportStar(__webpack_require__(149), exports);


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TraceID = void 0;
const Constants_1 = __webpack_require__(0);
const HeadersManager_1 = __webpack_require__(46);
class TraceID extends HeadersManager_1.HeadersManager {
    static middleware(req, res, next) {
        const headerValue = req.get(Constants_1.TRACE_ID_HEADER) || '';
        TraceID.set(headerValue);
        next();
    }
    static get() {
        return super.get(Constants_1.TRACE_ID_HEADER);
    }
    static set(value) {
        super.add(Constants_1.TRACE_ID_HEADER, value);
    }
}
exports.TraceID = TraceID;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggingConfig = void 0;
const Logger_1 = __webpack_require__(56);
const path = __webpack_require__(8);
const Constants_1 = __webpack_require__(0);
const config = __webpack_require__(4);
class LoggingConfig {
    constructor(logType) {
        this.logType = logType;
    }
    get maxFiles() {
        return config.getInt(`frontend.logging.${this.logType}.rotation.maxFiles`);
    }
    get maxSizeMB() {
        return config.getFloat(`frontend.logging.${this.logType}.rotation.maxSizeMb`);
    }
    get logsDirPath() {
        return path.join(Constants_1.PRODUCT_HOME, config.get(`frontend.logging.${this.logType}.dirPath`));
    }
    get archiveDirPath() {
        return path.join(this.logsDirPath, Constants_1.LOGGING.ARCHIVED_DIR_NAME);
    }
    get fileNameWithExt() {
        return `${this.fileName}.log`;
    }
    get fileName() {
        let filename = 'request';
        if (this.logType === Logger_1.LogType.APPLICATION) {
            filename = 'service';
        }
        return `${Constants_1.LOGGING.PREFIX}-${filename}`;
    }
}
exports.LoggingConfig = LoggingConfig;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(60), exports);
__exportStar(__webpack_require__(272), exports);
__exportStar(__webpack_require__(277), exports);


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtifactoryService = void 0;
const artifactory_nodejs_client_1 = __webpack_require__(61);
const LoggerFactory_1 = __webpack_require__(1);
const ClientFactory_1 = __webpack_require__(18);
const Constants_1 = __webpack_require__(0);
const Decorators_1 = __webpack_require__(2);
const Access_1 = __webpack_require__(27);
const { RE_AUTHENTICATE } = Constants_1.CUSTOM_HEADERS;
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
// todo :: add interface for all contexts
class ArtifactoryService {
    // level1
    static async searchBundles(ctx, authData) {
        const model = new artifactory_nodejs_client_1.BundlesSearchRequestModel(ctx.name, 'target', ctx.before, ctx.after, ctx.num_of_rows, ctx.order_by, ctx.direction);
        const client = await ArtifactoryService.getClient(authData);
        return await client.bundles().search(model);
    }
    static async searchBuildsProxy(body, authData) {
        const client = await ArtifactoryService.getClient(authData);
        return await client.builds().searchProxy(body);
    }
    // level2
    // ******************************
    //          Builds
    // ******************************
    static async getBuildVersionsByIds(name, buildRepo, ids, authData) {
        if (ids.length === 0) {
            return { versions: [] };
        }
        const model = new artifactory_nodejs_client_1.BuildByIdsRequestModel(name, buildRepo, ids);
        const client = await ArtifactoryService.getClient(authData);
        return await client.builds().getVersionsByIds(model);
    }
    static async getBuild(body, name, authData) {
        const model = new artifactory_nodejs_client_1.BuildEntityRequestModel(name, body.buildRepo, null, body.before, body.after, body.num_of_rows, body.order_by, body.direction);
        const client = await ArtifactoryService.getClient(authData);
        return await client.builds().getEntity(model);
    }
    // ******************************
    //          Bundles
    // ******************************
    static async getBundle(body, name, authData) {
        const model = new artifactory_nodejs_client_1.BundleEntityRequestModel(name, 'target', null, body.before, body.after, body.num_of_rows, body.order_by, body.direction);
        const client = await ArtifactoryService.getClient(authData);
        return await client.bundles().getEntity(model);
    }
    static async getTopology(authData) {
        const client = await ArtifactoryService.getClient(authData);
        return client.system().getNodesTopology();
    }
    static async getCurrentUserInfo(authData) {
        const client = await ArtifactoryService.getClient(authData);
        return await client.system().getCurrentUserInfo();
    }
    static async validateUserCredentials(authData, realm, reAuthenticateCredentials) {
        const client = await ArtifactoryService.getClient(authData);
        client.updateConfig({
            headers: {
                [RE_AUTHENTICATE]: reAuthenticateCredentials,
            },
        });
        return client.login().validateUserCredentials(realm);
    }
    static async getSignedUrl(repoKey, path, authData) {
        const client = await ArtifactoryService.getClient(authData);
        return await client.download().signUrl(repoKey, path);
    }
    static async getSecurityConfig() {
        const client = await ArtifactoryService.getAdminClient();
        return await client.config().getSecurityConfig();
    }
    static async getHighAvailabilityTopology(authData) {
        const client = await ArtifactoryService.getClient(authData);
        return await client.system().getHighAvailabilityTopology();
    }
    static async updateMailConfig(body, authData) {
        const client = await ArtifactoryService.getClient(authData);
        return client.config().updateMailConfig(body);
    }
    static async updateProxyConfig(id, body, authData) {
        const client = await ArtifactoryService.getClient(authData);
        return client.config().updateProxiesConfig(id, body);
    }
    static async createProxyConfig(body, authData) {
        const client = await ArtifactoryService.getClient(authData);
        return client.config().createProxiesConfig(body);
    }
    static async deleteProxyConfig(body, authData) {
        const client = await ArtifactoryService.getClient(authData);
        return client.config().deleteProxyConfig(body);
    }
    static async updateSecurityConfig(body, authData) {
        const client = await ArtifactoryService.getClient(authData);
        return client.config().updateSecurityConfig(body);
    }
    static async updateGeneralConfig(body, authData) {
        const client = await ArtifactoryService.getClient(authData);
        return client.config().updateGeneralConfig(body);
    }
    static async getCrowdConfig() {
        const client = await ArtifactoryService.getAdminClient();
        return await client.config().getCrowdConfig();
    }
    static async getHttpSsoConfig() {
        const client = await ArtifactoryService.getAdminClient();
        return await client.config().getHttpSsoConfig();
    }
    static async getFooter(authData) {
        const client = await ArtifactoryService.getClient(authData);
        return client.system().getFooter();
    }
    static async getFooterWithAdminToken() {
        const client = await ArtifactoryService.getAdminClient();
        return client.system().getFooter();
    }
    static async getSamlConfig() {
        const client = await ArtifactoryService.getAdminClient();
        return client.config().getSamlConfig();
    }
    static async ping() {
        const client = await ArtifactoryService.getAnonymousClient(ClientFactory_1.ANONYMOUS_CTX);
        return client.system().ping();
    }
    static async httpSsoLogin(httpSsoHeaderName, userName) {
        const client = await ArtifactoryService.getAnonymousClient(ClientFactory_1.ANONYMOUS_CTX);
        return client.login().httpSsoLogin(httpSsoHeaderName, userName);
    }
    static async getOnboardingInfo(authData) {
        const client = await ArtifactoryService.getClient(authData);
        return client.system().getOnboardingConfig();
    }
    static async deleteNode(id, authData) {
        const client = await ArtifactoryService.getClient(authData);
        return client.system().deleteNode(id);
    }
    static async getUserProfile(payload, authData, query) {
        const client = await ArtifactoryService.getClient(authData);
        return client.system().getUserProfile(payload, query);
    }
    static async setUserProfile(payload, authData, query) {
        const client = await ArtifactoryService.getClient(authData);
        return client.system().setUserProfile(payload, query);
    }
    static async generateUserApiKey(user, authData, query, headers) {
        const client = await ArtifactoryService.getClient(authData);
        return client.system().generateUserApiKey(user, query, headers);
    }
    static async reGenerateUserApiKey(user, authData, query, headers) {
        const client = await ArtifactoryService.getClient(authData);
        return client.system().reGenerateUserApiKey(user, query, headers);
    }
    static async deleteUserApiKey(user, authData, query, headers) {
        const client = await ArtifactoryService.getClient(authData);
        return client.system().deleteUserApiKey(user, query, headers);
    }
    static async setXrayEnabled(xrayEnabled, authData) {
        const client = await ArtifactoryService.getClient(authData);
        return client.xrayRepo().setXrayEnabled(xrayEnabled);
    }
    static async isHa(authData) {
        const client = await ArtifactoryService.getClient(authData);
        try {
            return (await client.system().getSystemStatus()).isHa;
        }
        catch (e) {
            return false;
        }
    }
    static async getClusterDump(authData, nodeId) {
        const client = await ArtifactoryService.getClient(authData);
        /**
         * this is used to create a request directly to a specific node in artifactory
         */
        if (nodeId) {
            client.updateConfig({
                headers: {
                    'X-Artifactory-Node-Id': nodeId,
                },
            });
        }
        return client.system().getClusterDump();
    }
    static async setAllowBlockedArtifactsDownload(xrayAllowBlocked, authData) {
        const client = await ArtifactoryService.getClient(authData);
        return client.xrayRepo().setAllowBlockedArtifactsDownload(xrayAllowBlocked);
    }
    static async setAllowWhenUnavailable(xrayAllowWhenUnavailable, authData) {
        const client = await ArtifactoryService.getClient(authData);
        return client.xrayRepo().setAllowWhenUnavailable(xrayAllowWhenUnavailable);
    }
    static async getVersion(authData, nodeId) {
        const client = await ArtifactoryService.getClient(authData);
        if (nodeId) {
            client.updateConfig({
                headers: { [Constants_1.CUSTOM_HEADERS.X_JFROG_ROUTE_TO]: nodeId },
            });
        }
        return client.system().getVersion();
    }
    static async getUnifiedLogsInfo(authData, nodeId) {
        const client = await ArtifactoryService.getClient(authData);
        if (nodeId) {
            client.updateConfig({
                headers: { [Constants_1.CUSTOM_HEADERS.X_JFROG_ROUTE_TO]: nodeId },
            });
        }
        return client.system().getLogsInfo();
    }
    static async getUnifiedLogsData(authData, nodeId, fileSize, id) {
        const client = await ArtifactoryService.getClient(authData);
        if (nodeId) {
            client.updateConfig({
                headers: { [Constants_1.CUSTOM_HEADERS.X_JFROG_ROUTE_TO]: nodeId },
            });
        }
        return client.system().getLogsData(fileSize, id);
    }
    static isArtifactoryAdmin(authUser) {
        return authUser && authUser.custom_data && authUser.custom_data.artifactory_admin === 'true';
    }
    static async changePassword(payload) {
        const client = await ArtifactoryService.getAnonymousClient();
        return client.system().changePassword(payload);
    }
    static async login(user, password, rememberMe) {
        const client = await ArtifactoryService.getAnonymousClient();
        return client.login().login(user, password, rememberMe);
    }
    static async samlLogin(data, headers, params) {
        const client = await ArtifactoryService.getAnonymousClient();
        return client.login().samlLogin(data, headers, params);
    }
    static async oauthLogin(body, headers, params) {
        const client = await ArtifactoryService.getAnonymousClient();
        return client.login().oauthLogin(body, headers, params);
    }
    static async getLoginRelatedData() {
        const client = await ArtifactoryService.getAdminClient();
        return client.login().loginRelatedData();
    }
    static async isRememberMeEnabled() {
        const loginRelatedData = await ArtifactoryService.getLoginRelatedData();
        return loginRelatedData.canRememberMe;
    }
    static async getProjectAdminFlags(authData, username, userGroups) {
        let isDefaultProjectAdmin = false;
        const { DEFAULT_PROJECT_KEY } = Constants_1.PROJECTS;
        try {
            isDefaultProjectAdmin = await Access_1.AccessService.isUserProjectAdmin(DEFAULT_PROJECT_KEY, username, userGroups, true);
        }
        catch (e) {
            logger.error(`getProjectAdminFlags Failed with the following error: ${e}`);
        }
        return { isDefaultProjectAdmin };
    }
    static async getAdminClient() {
        return new ClientFactory_1.ClientFactory(Constants_1.SERVICES.ARTIFACTORY.KEY).getWithAdminToken();
    }
    static async getAnonymousClient(ctx = { userScope: null }) {
        return new ClientFactory_1.ClientFactory(Constants_1.SERVICES.ARTIFACTORY.KEY).getWithoutAuth({
            userName: Constants_1.ANONYMOUS,
            userScope: ctx.userScope,
        });
    }
    static async getClient(ctx) {
        return new ClientFactory_1.ClientFactory(Constants_1.SERVICES.ARTIFACTORY.KEY).getWithAuth(ctx);
    }
}
__decorate([
    Decorators_1.methodLog({ logger })
], ArtifactoryService, "getCurrentUserInfo", null);
__decorate([
    Decorators_1.methodLog({ logger })
], ArtifactoryService, "ping", null);
__decorate([
    Decorators_1.methodLog({ logger })
], ArtifactoryService, "getOnboardingInfo", null);
__decorate([
    Decorators_1.methodLog({ logger })
], ArtifactoryService, "deleteNode", null);
__decorate([
    Decorators_1.methodLog({ logger })
], ArtifactoryService, "getUserProfile", null);
__decorate([
    Decorators_1.methodLog({ logger })
], ArtifactoryService, "setUserProfile", null);
__decorate([
    Decorators_1.methodLog({ logger })
], ArtifactoryService, "generateUserApiKey", null);
__decorate([
    Decorators_1.methodLog({ logger })
], ArtifactoryService, "reGenerateUserApiKey", null);
__decorate([
    Decorators_1.methodLog({ logger })
], ArtifactoryService, "deleteUserApiKey", null);
__decorate([
    Decorators_1.methodLog({ logger })
], ArtifactoryService, "setXrayEnabled", null);
__decorate([
    Decorators_1.methodLog({ logger })
], ArtifactoryService, "isHa", null);
__decorate([
    Decorators_1.methodLog({ logger })
], ArtifactoryService, "setAllowBlockedArtifactsDownload", null);
__decorate([
    Decorators_1.methodLog({ logger })
], ArtifactoryService, "setAllowWhenUnavailable", null);
__decorate([
    Decorators_1.methodLog({ logger })
], ArtifactoryService, "getVersion", null);
__decorate([
    Decorators_1.methodLog({ logger })
], ArtifactoryService, "getUnifiedLogsInfo", null);
__decorate([
    Decorators_1.methodLog({ logger })
], ArtifactoryService, "getUnifiedLogsData", null);
__decorate([
    Decorators_1.methodLog({ logger })
], ArtifactoryService, "getProjectAdminFlags", null);
exports.ArtifactoryService = ArtifactoryService;


/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("@jfrog/artifactory-nodejs-client");

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("@jfrog/metadata-nodejs-client");

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("@jfrog/access-nodejs-client/dist/__generated__/permission_pb");

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionUtils = void 0;
const permission_pb_1 = __webpack_require__(63);
const LoggerFactory_1 = __webpack_require__(1);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
const actionsMap = generateActionsMaps();
const REPOSITORIES = 'repositories';
const BUILDS = 'builds';
const BUNDLES = 'bundles';
const DESTINATIONS = 'destinations';
const PIPELINES = 'pipelines';
const RESOURCE_TYPE_STRINGS = [REPOSITORIES, BUILDS, BUNDLES, PIPELINES, DESTINATIONS];
const STRING_TO_RESOURCE_TYPE_MAP = new Map([
    [REPOSITORIES, permission_pb_1.ResourceType.REPO],
    [BUILDS, permission_pb_1.ResourceType.BUILD],
    [BUNDLES, permission_pb_1.ResourceType.RELEASE_BUNDLE],
    [DESTINATIONS, permission_pb_1.ResourceType.DESTINATION],
    [PIPELINES, permission_pb_1.ResourceType.PIPELINE_SOURCE],
]);
const RESOURCE_TYPE_TO_STRING_MAP = new Map([
    [permission_pb_1.ResourceType.REPO, REPOSITORIES],
    [permission_pb_1.ResourceType.BUILD, BUILDS],
    [permission_pb_1.ResourceType.RELEASE_BUNDLE, BUNDLES],
    [permission_pb_1.ResourceType.DESTINATION, DESTINATIONS],
    [permission_pb_1.ResourceType.PIPELINE_SOURCE, PIPELINES],
]);
class PermissionUtils {
    static getSortDirection(direction) {
        return direction === 'desc' ? permission_pb_1.Direction.DESC : permission_pb_1.Direction.ASC;
    }
    static getActionsForResourceConfig(resourceConfig) {
        return Object.entries(resourceConfig)
            .filter(([_, enabled]) => {
            return enabled;
        })
            .map(([actionName, _]) => {
            return PermissionUtils.getActionByName(actionName);
        });
    }
    static resourceTypeToString(resourceType) {
        return RESOURCE_TYPE_TO_STRING_MAP.get(resourceType);
    }
    static stringToResourceType(resourceType) {
        return STRING_TO_RESOURCE_TYPE_MAP.get(resourceType);
    }
    static isResourceType(str) {
        return RESOURCE_TYPE_STRINGS.includes(str);
    }
    static getActionByName(name) {
        return [...actionsMap.entries()].filter(({ 1: value }) => value === name).map(([key]) => key)[0];
    }
}
exports.PermissionUtils = PermissionUtils;
function generateActionsMaps() {
    logger.debug('in PermissionUtils::generateActionsMaps');
    const actionsMaps = new Map();
    actionsMaps.set(permission_pb_1.Action.READ, 'read');
    actionsMaps.set(permission_pb_1.Action.ANNOTATE, 'annotate');
    actionsMaps.set(permission_pb_1.Action.DELETE, 'delete');
    actionsMaps.set(permission_pb_1.Action.DEPLOY, 'deploy');
    actionsMaps.set(permission_pb_1.Action.DISTRIBUTE, 'distribute');
    actionsMaps.set(permission_pb_1.Action.MANAGE, 'manage');
    actionsMaps.set(permission_pb_1.Action.MANAGE_XRAY_MD, 'manage_xray_md');
    actionsMaps.set(permission_pb_1.Action.NO_ACTION, 'no_action');
    actionsMaps.set(permission_pb_1.Action.TRIGGER, 'trigger');
    return actionsMaps;
}


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LogoutController = void 0;
const LoggerFactory_1 = __webpack_require__(1);
const Constants_1 = __webpack_require__(0);
const CookieUtil_1 = __webpack_require__(49);
const SessionCookieUtil_1 = __webpack_require__(48);
const Models_1 = __webpack_require__(47);
const Services_1 = __webpack_require__(3);
const TOKEN_CONSTANTS = Constants_1.Constants.TOKEN_CONSTANTS;
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
const sessionCookieUtil = new SessionCookieUtil_1.SessionCookieUtil();
class LogoutController {
    static async logoutInterceptor(headers, userReq, userRes, proxyReq, proxyRes) {
        logger.debug('in LogoutController::logoutInterceptor');
        return new Promise(async (resolve, reject) => {
            try {
                headers['set-cookie'] = sessionCookieUtil.removeTestedCookie(headers['set-cookie']);
                await LogoutController.logout(userReq, userRes);
                /*
                  copy logout  user response headers to
                  headers object of express-http-proxy userResHeaderDecorator
                  this is needed since inside express-http-proxy the userRes 'set-cookie' header
                  is overridden by this 'headers' object
                */
                const cookies = userRes.get('set-cookie');
                const logoutSessionCookies = [
                    CookieUtil_1.default.findCookieByName(cookies, TOKEN_CONSTANTS.COOKIE.ACCESS_TOKEN),
                    CookieUtil_1.default.findCookieByName(cookies, TOKEN_CONSTANTS.COOKIE.REFRESH_TOKEN),
                    CookieUtil_1.default.findCookieByName(cookies, TOKEN_CONSTANTS.COOKIE.REMEMBER_ME_TOKEN),
                    CookieUtil_1.default.findCookieByName(cookies, 'isPipelinesFavoritesEnabled'),
                ];
                const setCookieHeaders = headers['set-cookie'] || [];
                // kyle, headers['set-cookie'] = setCookieHeaders.concat(logoutSessionCookies);
                return resolve(headers);
            }
            catch (e) {
                return reject(e);
            }
        });
    }
    static unauthorizedLogout(req, res) {
        logger.debug('in LogoutController::unauthorizedLogout');
        LogoutController.logout(req, res).then(() => {
            return res.send(401);
        });
    }
    static logoutMiddleware(req, res, next) {
        LogoutController.logout(req, res).then(() => {
            res.sendStatus(Constants_1.STATUS_CODES.OK);
        });
    }
    static async logout(req, res, shouldRevoke = true) {
        logger.debug('in LogoutController::logout');
        // kyle
        // res.clearCookie(TOKEN_CONSTANTS.COOKIE.REFRESH_TOKEN);
        // res.clearCookie(TOKEN_CONSTANTS.COOKIE.ACCESS_TOKEN);
        // res.clearCookie(TOKEN_CONSTANTS.COOKIE.REMEMBER_ME_TOKEN);
        // res.clearCookie('isPipelinesFavoritesEnabled');
        // if (shouldRevoke) {
        //     await LogoutController.revokeSessionToken(req);
        // }
    }
    static async revokeSessionToken(req) {
        const uiSessionTokens = Models_1.UiSessionTokens.getUiSessionTokensFromCookies(req.cookies);
        if (uiSessionTokens) {
            await Services_1.AccessTokenService.revokeUISessionToken(uiSessionTokens);
        }
    }
}
exports.LogoutController = LogoutController;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AnonymousAuthenticationController = void 0;
const Access_1 = __webpack_require__(36);
const PlatformConfiguration_1 = __webpack_require__(11);
const AuthenticationErrors_1 = __webpack_require__(13);
const LoggerFactory_1 = __webpack_require__(1);
const Constants_1 = __webpack_require__(0);
const AuthenticationController_1 = __webpack_require__(39);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
class AnonymousAuthenticationController extends AuthenticationController_1.AuthenticationController {
    // this is here for easier testing
    static get ANONYMOUS() {
        return Constants_1.ANONYMOUS;
    }
    static async anonymousHandler(req, res, next) {
        if (AuthenticationController_1.AuthenticationController.skipAuthentication(req)) {
            return next();
        }
        logger.debug('in AnonymousAuthenticationController::anonymousHandler');
        const uiSessionTokens = Access_1.UiSessionTokens.getUiSessionTokensFromCookies(req.cookies);
        if (uiSessionTokens) {
            return next();
        }
        if (PlatformConfiguration_1.default.anonAccessEnabled) {
            return next();
        }
        if (AnonymousAuthenticationController.isOpenOrAuthenticatedPath(req)) {
            return next();
        }
        return next(new AuthenticationErrors_1.AuthErrorAnonymousNotAllowed());
    }
    static setAnonymousRequest(req, res, next) {
        req.userName = AnonymousAuthenticationController.ANONYMOUS;
        next();
    }
    static isAnonymousRequest(req) {
        return !req.userName || req.userName === Constants_1.ANONYMOUS;
    }
}
exports.AnonymousAuthenticationController = AnonymousAuthenticationController;


/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.VersionUpdate = void 0;
const API_1 = __webpack_require__(7);
const path_1 = __webpack_require__(8);
const LoggerFactory_1 = __webpack_require__(1);
const Constants_1 = __webpack_require__(0);
const Services_1 = __webpack_require__(3);
const semver = __webpack_require__(44);
const VersionsJsonUtils_1 = __webpack_require__(109);
const ExtractUtil_1 = __webpack_require__(107);
const promiseAllSettled = __webpack_require__(286);
const Constants_2 = __webpack_require__(0);
const MothershipTopologyService_1 = __webpack_require__(30);
const VersionUpdateUtils_1 = __webpack_require__(110);
const TimeUtils_1 = __webpack_require__(38);
const config = __webpack_require__(4);
const readable_stream_clone_1 = __webpack_require__(287);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
const MIN_VERSION = '0.0.0';
const BOOT_PERIOD_LIMIT_MS = config.get("frontend.bootstrap.bootTimeLimit");
class VersionUpdate {
    static get currentVersion() {
        return API_1.API.getProjectVersion();
    }
    static registerToTopologyChangeEvent() {
        API_1.API.getGlobalEventEmitter()
            .on(Constants_1.GLOBAL_EVENTS.TOPOLOGY_CHANGED, VersionUpdate.checkForVersionUpdate);
    }
    static async checkForVersionUpdate() {
        try {
            const runtime = TimeUtils_1.TimeUtils.getAppRuntimeInMilliseconds();
            if (runtime < BOOT_PERIOD_LIMIT_MS) {
                logger.debug('topology changed during boot time. will not activate dynamic update');
                return;
            }
            logger.debug('fetching frontend versions from services');
            const extendedBundleManifest = await VersionUpdate.getMaxAvailableBundleManifest();
            const { serviceType, frontend_version: version } = extendedBundleManifest;
            logger.debug(`services highest version is : ${version} in service : ${serviceType} and current version is : ${VersionUpdate.currentVersion}`);
            const shouldUpdateVersion = VersionUpdate.shouldUpdateVersion(version);
            if (shouldUpdateVersion) {
                logger.info(`newer FE version detected in ${serviceType}, will restart with new version`);
                await VersionUpdate.downloadNewVersion(extendedBundleManifest);
                VersionUpdate.rewriteVersionsJsonFile(version);
                logger.info('exiting app gracefully');
                process.emit('exit', 0);
            }
            else {
                logger.debug('current frontend version is newer or equal, will not update');
            }
        }
        catch (e) {
            logger.error(`Version update failed : ${e}`);
        }
    }
    static shouldUpdateVersion(newVersion) {
        logger.debug(`shouldUpdateVersion: newVersion - ${newVersion}, currentVersion - ${VersionUpdate.currentVersion}`);
        const { currentVersion } = VersionUpdate;
        let shouldUpdate = semver.gt(semver.coerce(newVersion), semver.coerce(currentVersion));
        const isMilestone = semver.prerelease(newVersion) && semver.prerelease(currentVersion);
        if (isMilestone) {
            shouldUpdate =
                shouldUpdate ||
                    semver.eq(semver.coerce(newVersion), semver.coerce(currentVersion)) &&
                        VersionUpdate.extractMilestoneVersion(newVersion) > VersionUpdate.extractMilestoneVersion(currentVersion);
        }
        return shouldUpdate;
    }
    static extractMilestoneVersion(newVersion) {
        const [milestonePart] = semver.prerelease(newVersion) || [''];
        const milestoneNumberChars = milestonePart.match(/\d+/)[0];
        return Number(milestoneNumberChars);
    }
    static async downloadNewVersion({ serviceType, frontend_version: version, distributions }) {
        let readableStream;
        const checksum = distributions[Constants_1.OPERATION_SYSTEM].sha256;
        const params = [version, Constants_1.OPERATION_SYSTEM];
        switch (serviceType) {
            case Constants_1.SERVICES.XRAY.TYPE:
                readableStream = await Services_1.XrayService.getFrontendVersionStream(...params);
                break;
            case Constants_1.SERVICES.DISTRIBUTION.TYPE:
                readableStream = await Services_1.DistributionService.getFrontendVersionStream(...params);
                break;
            case Constants_1.SERVICES.PIPELINES.TYPE:
                readableStream = await Services_1.PipelinesService.getFrontendVersionStream(...params);
                break;
            case Constants_1.SERVICES.MISSION_CONTROL.TYPE:
                readableStream = await Services_1.MissionControlService.getFrontendVersionStream(...params);
                break;
        }
        if (!readableStream) {
            logger.error(`unknown error when fetching download stream for service : ${serviceType} and version : ${version}`);
        }
        logger.debug(`version ${version} stream was acquired successfully, attempting extraction`);
        const checksumStream = new readable_stream_clone_1.default(readableStream);
        const extractStream = new readable_stream_clone_1.default(readableStream);
        await VersionUpdateUtils_1.VersionUpdateUtils.validateChecksum(checksumStream, checksum);
        const binDirName = path_1.join(Constants_2.FRONTEND_ROOT_PATH, `bin-${version}`);
        logger.debug(`creating ${binDirName} directory with downloaded frontend`);
        await ExtractUtil_1.ExtractUtil.extractStream(extractStream, binDirName);
    }
    static async getMaxAvailableBundleManifest() {
        const isMajorSame = ([_, { frontend_version: version }]) => {
            return semver.diff(version, VersionUpdate.currentVersion) !== 'major';
        };
        const isValidVersion = ([name, { frontend_version: version }]) => {
            if (!API_1.API.isValidProductionVersion(version)) {
                logger.debug(`service ${name} has invalid version : ${version}`);
                return false;
            }
            return true;
        };
        const servicesVersions = await VersionUpdate.getServicesFrontendVersion();
        const listOfVersions = Object.entries(servicesVersions)
            .filter(isValidVersion)
            .filter(isMajorSame)
            .map(([_, { frontend_version: version }]) => version);
        if (listOfVersions.length === 0) {
            return { serviceType: null, frontend_version: MIN_VERSION, distributions: null };
        }
        const maxVersion = VersionsJsonUtils_1.VersionsJsonUtils.getHighestVersion(listOfVersions);
        const [serviceType, manifestData] = Object.entries(servicesVersions)
            .find(([_, { frontend_version: version }]) => version === maxVersion);
        return Object.assign(manifestData, { serviceType });
    }
    static async getServicesFrontendVersion() {
        const DEFAULT_VALUE = {
            frontend_version: MIN_VERSION,
            distributions: null
        };
        const serviceTypeToService = {
            jfxr: Services_1.XrayService,
            jfmc: Services_1.MissionControlService,
            jfds: Services_1.DistributionService,
            jfpip: Services_1.PipelinesService
        };
        const errorHandler = service => e => {
            logger.warn(`error fetching version.manifest from ${service} with error -  + ${e}`);
            return Promise.reject(e);
        };
        const availableServices = VersionUpdateUtils_1.VersionUpdateUtils
            .getAvailableServicesTypesFromTopology(MothershipTopologyService_1.default.topology);
        const getFrontendManifestPromises = availableServices
            .map(serviceType => serviceTypeToService[serviceType].getFrontendManifest().catch(errorHandler(serviceType)));
        let getFrontendManifestResults = await promiseAllSettled(getFrontendManifestPromises);
        getFrontendManifestResults = getFrontendManifestResults.map(result => {
            if (result.status === 'rejected') {
                return DEFAULT_VALUE;
            }
            return result.value || DEFAULT_VALUE;
        });
        const servicesResults = availableServices.reduce((accumulator, service, i) => {
            accumulator[service] = getFrontendManifestResults[i];
            return accumulator;
        }, {});
        return { ...servicesResults };
    }
    static rewriteVersionsJsonFile(version) {
        VersionsJsonUtils_1.VersionsJsonUtils.changeAndAddVersion(version);
    }
}
exports.VersionUpdate = VersionUpdate;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable
/**
 * Module dependencies.
 */
const http = __webpack_require__(301);
const app = __webpack_require__(302);
const API_1 = __webpack_require__(7);
const LoggerFactory_1 = __webpack_require__(1);
const Constants_1 = __webpack_require__(0);
const config = __webpack_require__(4);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(config.get('frontend.port'));
// @ts-ignore
app.set('port', port);
/**
 * Create HTTP server.
 */
const server = http.createServer(app);
/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, 'localhost');
server.on('error', onError);
server.on('listening', onListening);
/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        // named pipe
        return val;
    }
    if (port >= 0) {
        // port number
        return port;
    }
    return false;
}
/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;
    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            logger.error(`${bind} requires elevated privileges`);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            logger.error(`${bind} is already in use`);
            process.exit(1);
            break;
        default:
            throw error;
    }
}
/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
    API_1.API.getGlobalEventEmitter().emit(Constants_1.START_TASKS.SERVER_STARTED_EVENT, bind);
}
module.exports = server;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ArtifactoryRouteHandler_1 = __webpack_require__(71);
Object.defineProperty(exports, "ArtifactoryRouteHandler", { enumerable: true, get: function () { return ArtifactoryRouteHandler_1.ArtifactoryRouteHandler; } });
var ArtifactorySecurityConfigRouteHandler_1 = __webpack_require__(323);
Object.defineProperty(exports, "ArtifactorySecurityConfigRouteHandler", { enumerable: true, get: function () { return ArtifactorySecurityConfigRouteHandler_1.ArtifactorySecurityConfigRouteHandler; } });
var ArtifactoryCrowdConfigRouteHandler_1 = __webpack_require__(324);
Object.defineProperty(exports, "ArtifactoryCrowdConfigRouteHandler", { enumerable: true, get: function () { return ArtifactoryCrowdConfigRouteHandler_1.ArtifactoryCrowdConfigRouteHandler; } });


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtifactoryRouteHandler = void 0;
const proxy = __webpack_require__(51);
const http_proxy_middleware_1 = __webpack_require__(72);
const Constants_1 = __webpack_require__(0);
const LoggerFactory_1 = __webpack_require__(1);
const ServiceLevelRouteHandler_1 = __webpack_require__(20);
const Authentication_1 = __webpack_require__(23);
const SessionCookieUtil_1 = __webpack_require__(48);
const Decorators_1 = __webpack_require__(2);
const config = __webpack_require__(4);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
const sessionCookieUtil = new SessionCookieUtil_1.SessionCookieUtil();
const artifactoryServiceName = Constants_1.SERVICES.ARTIFACTORY.NAME;
class ArtifactoryRouteHandler extends ServiceLevelRouteHandler_1.ServiceLevelRouteHandler {
    get proxyHandler() {
        return this.proxyRouter.bind(this);
    }
    get getNewProxyHandler() {
        return this.newProxyHandler.bind(this);
    }
    get addImpersonationTokenToHeader() {
        return this.addServiceImpersonationTokenToHeader.bind(this);
    }
    getApiProxyPath(userReq) {
        let url = `/${artifactoryServiceName}`.concat(userReq.originalUrl).replace(Constants_1.API_VERSION, '');
        if (!this.shouldUseUiEndpoint(userReq)) {
            url = url.replace('ui', 'api');
        }
        logger.debug(`Forwarding ${userReq.originalUrl} to ${url}`);
        return url;
    }
    static proxyReqOptDecorator(proxyReqOpts, srcReq) {
        if (Authentication_1.AnonymousAuthenticationController.isAnonymousRequest(srcReq)) {
            // remove token authentication and send proxy request anonymously to Artifactory
            delete proxyReqOpts.headers.Authorization;
        }
        return proxyReqOpts;
    }
    static clearArtifactoryOldSession(headers) {
        try {
            const oldSessionExists = sessionCookieUtil.doesCookieExists(headers['set-cookie']);
            if (oldSessionExists) {
                headers['set-cookie'] = sessionCookieUtil.removeTestedCookie(headers['set-cookie']);
            }
            return headers;
        }
        catch (e) {
            logger.error(`ArtifactoryRouteHandler::clearArtifactoryOldSession ${e}`);
            return headers;
        }
    }
    constructor() {
        super(artifactoryServiceName);
    }
    /**
     * currently there are 2 proxies, express-http-proxy and http-proxy-middleware,
     * http-proxy-middleware will replace express-http-proxy right after the beta
     */
    newProxyHandler(req, res, next) {
        const proxyConfig = {
            target: super.getProxyUrl.bind(this)(),
            pathRewrite: (path) => {
                return path.replace('ui', 'api').replace(Constants_1.API_VERSION, '');
            },
            logProvider: () => logger,
            logLevel: 'debug',
            onProxyReq: (proxyReq) => {
                if (Authentication_1.AnonymousAuthenticationController.isAnonymousRequest(req)) {
                    proxyReq.removeHeader('Authorization');
                }
            },
        };
        return http_proxy_middleware_1.createProxyMiddleware(proxyConfig)(req, res, next);
    }
    proxyRouter(req, res, next) {
        const contentType = req.get('Content-Type');
        if (contentType && contentType.includes('multipart')) {
            logger.debug('going to proxy multipart');
            return this.newProxyHandler(req, res, next);
        }
        if (req.method === 'HEAD') {
            req.body = null;
        }
        return proxy(super.getProxyUrl.bind(this), {
            proxyReqPathResolver: this.getApiProxyPath.bind(this),
            proxyReqOptDecorator: ArtifactoryRouteHandler.proxyReqOptDecorator,
            // this interceptor ensures that no 'SESSION' cookie (used by Artifactory 6) will arrive to the browser
            userResHeaderDecorator: ArtifactoryRouteHandler.clearArtifactoryOldSession,
            ...this.proxyOptions,
        })(req, res, next);
    }
    get proxyOptions() {
        return {
            limit: config.get('frontend.proxy.sizeLimit') + 'mb',
        };
    }
    shouldUseUiEndpoint(req) {
        return Authentication_1.AnonymousAuthenticationController.isAnonymousRequest(req);
    }
}
__decorate([
    Decorators_1.methodLog({ logger })
], ArtifactoryRouteHandler, "clearArtifactoryOldSession", null);
exports.ArtifactoryRouteHandler = ArtifactoryRouteHandler;


/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = require("http-proxy-middleware");

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(336), exports);
__exportStar(__webpack_require__(118), exports);
__exportStar(__webpack_require__(338), exports);
__exportStar(__webpack_require__(341), exports);


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ParamValidatonError = void 0;
const CustomError_1 = __webpack_require__(16);
const Constants_1 = __webpack_require__(0);
class ParamValidatonError extends CustomError_1.CustomError {
    constructor(message = ParamValidatonError.defaultMessage, externalMessage) {
        super(message, externalMessage);
        this._statusCode = Constants_1.STATUS_CODES.BAD_REQUEST;
    }
    static get defaultMessage() {
        return 'Invalid param in request url';
    }
}
exports.ParamValidatonError = ParamValidatonError;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const TOKEN_CONSTANTS = {
    IMPERSONATION_TIME_MINUTE: 10,
    COOKIE: {
        ACCESS_TOKEN: 'ACCESSTOKEN',
        REFRESH_TOKEN: 'REFRESHTOKEN',
        REMEMBER_ME_TOKEN: 'SPRING_SECURITY_REMEMBER_ME_COOKIE',
    },
    WATER_MARK_MINUTES: 5,
    AUDIENCE: {
        ANY_ARTIFACTORY: 'jfrt@*',
        ANY_XRAY: 'jfxr@*',
        ANY_DISTRIBUTION: 'jfds@*',
        ANY_METADATA: 'jfmd@*',
        ANY_ACCESS: 'jfac@*',
        ANY_MISSION_CONTROL: 'jfmc@*',
        ANY_INSIGHT: 'jfisv@*',
        ANY_PIPELINES: 'jfpip@*',
        ANY_EVENT: 'jfevt@*',
        ANY_REPLICATOR: 'jfxfer@*',
    },
    SCOPE: {
        ANY_API: 'api:*',
        ANY_UI: 'ui:*',
        ANY_GROUP: 'member-of-groups:*',
        APPLIED_PERMISSIONS_USER: 'applied-permissions/user',
        APPLIED_PERMISSIONS_ADMIN: 'applied-permissions/admin',
        APPLIED_PERMISSIONS_GROUPS: 'applied-permissions/groups',
    },
    SCOPE_GROUPS_LENGTH_LIMIT: 1800,
};
exports.default = TOKEN_CONSTANTS;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TIME = void 0;
exports.TIME = {
    DAY_MS: 1000 * 60 * 60 * 24,
    HOUR_MS: 1000 * 60 * 60,
    MINUTE_MS: 1000 * 60,
    MINUTE_S: 60,
    MONTH_MS: 1000 * 60 * 60 * 24 * 7 * 4,
    SECOND_MS: 1000,
    WEEK_MS: 1000 * 60 * 60 * 24 * 7,
    YEAR_MS: 1000 * 60 * 60 * 24 * 7 * 4 * 12,
    YEAR_S: 60 * 60 * 24 * 7 * 4 * 12,
    DAYS_M: 24 * 60,
    msHoursFromNow: (date) => exports.TIME.HOUR_MS * Math.floor((Date.now() - new Date(date).getTime()) / exports.TIME.HOUR_MS)
};
exports.default = exports.TIME;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const path = __webpack_require__(8);
const PRODUCT_HOME = process.env.JF_PRODUCT_HOME || path.join(__dirname, '../..');
exports.default = PRODUCT_HOME;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(179), exports);
__exportStar(__webpack_require__(180), exports);
__exportStar(__webpack_require__(181), exports);
__exportStar(__webpack_require__(182), exports);
__exportStar(__webpack_require__(183), exports);


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(186), exports);
__exportStar(__webpack_require__(187), exports);
__exportStar(__webpack_require__(188), exports);
__exportStar(__webpack_require__(189), exports);
__exportStar(__webpack_require__(190), exports);
__exportStar(__webpack_require__(191), exports);
__exportStar(__webpack_require__(192), exports);
__exportStar(__webpack_require__(193), exports);
__exportStar(__webpack_require__(194), exports);
__exportStar(__webpack_require__(195), exports);


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CUSTOM_HEADERS = void 0;
const index_1 = __webpack_require__(0);
const API_1 = __webpack_require__(7);
const frontendArr = index_1.SERVICES.FRONTEND.NAME.split('');
frontendArr[0] = frontendArr[0].toUpperCase();
const capitalFrontendName = frontendArr.join('');
exports.CUSTOM_HEADERS = Object.freeze({
    RE_AUTHENTICATE: 'X-JFrog-Reauthentication',
    UI_MESSAGES: 'artifactory-ui-messages',
    X_REQUESTED_WITH: 'artUI',
    SPA_LOCATION: 'spa-location',
    USER_AGENT: 'User-Agent',
    USER_AGENT_VALUE: `JFrog-${capitalFrontendName}/${API_1.API.getProjectVersion()}`,
    X_JFROG_ROUTE_TO: 'X-JFrog-Route-To',
    REMEMBER_ME_COOKIE: 'SPRING_SECURITY_REMEMBER_ME_COOKIE',
});
exports.default = exports.CUSTOM_HEADERS;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerUtils = void 0;
const Logger_1 = __webpack_require__(56);
const winston = __webpack_require__(45);
const LoggerOptionsFactory_1 = __webpack_require__(230);
class LoggerUtils {
    static createLogger(logType = Logger_1.LogType.APPLICATION) {
        const loggerOptions = new LoggerOptionsFactory_1.LoggerOptionsFactory(logType);
        const options = loggerOptions.get();
        return winston.createLogger(options);
    }
    static addLoggerToList(key, logger) {
        winston.loggers.loggers.set(key, logger);
    }
    static async closeLoggers() {
        const waitForLoggers = [];
        winston.loggers.loggers.forEach((logger, _) => {
            waitForLoggers.push(LoggerUtils.asyncEndLogger(logger));
        });
        await Promise.all(waitForLoggers);
        console.log('Frontend : All loggers closed');
        return;
    }
    static asyncEndLogger(logger) {
        return new Promise(resolve => {
            logger.on('finish', () => {
                resolve();
            });
            logger.end();
        });
    }
}
exports.LoggerUtils = LoggerUtils;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadLocal = void 0;
const cls = __webpack_require__(232);
const Constants_1 = __webpack_require__(0);
class ThreadLocal {
    static middleware(req, res, next) {
        ThreadLocal.run(() => {
            ThreadLocal.ns.bindEmitter(req);
            ThreadLocal.ns.bindEmitter(res);
            next();
        });
    }
    static run(fn) {
        ThreadLocal.ns.run(fn);
    }
    static isActive() {
        return ThreadLocal.ns && !!ThreadLocal.ns.active;
    }
    static get(id) {
        return ThreadLocal.ns.get(id);
    }
    static set(id, value) {
        ThreadLocal.ns.set(id, value);
    }
}
exports.ThreadLocal = ThreadLocal;
ThreadLocal.ns = cls.createNamespace(Constants_1.Constants.THREADLOCAL_NAMESPACE);


/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = require("zlib");

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = require("@jfrog/distribution-nodejs-client");

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = require("@jfrog/xray-nodejs-client");

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessJoinKeyUtils = void 0;
const fs = __webpack_require__(22);
const API_1 = __webpack_require__(7);
const LoggerFactory_1 = __webpack_require__(1);
const Constants_1 = __webpack_require__(0);
const Decorators_1 = __webpack_require__(2);
const config = __webpack_require__(4);
const crypto = __webpack_require__(43);
const path = __webpack_require__(8);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
class AccessJoinKeyUtils {
    static async getJoinKey() {
        let joinKey;
        let error;
        logger.debug('Cluster join: Attempting to get join key from env variable');
        joinKey = this.getJoinKeyFromEnv();
        if (joinKey) {
            logger.debug('Cluster join: Got join key from env var');
            this.validateJoinKey(joinKey);
        }
        else {
            logger.debug('Cluster join: Failed getting join key from env, trying file');
            [joinKey, error] = await this.getJoinKeyFromDefaultPath();
            /* The join key got from the file may be encrypted. This can't be used as is
             Therefore, it is being put into an env variable and read again. This time,
             because the read happens through the configuration manager, the decrypted value
             is returned */
            process.env.JF_SHARED_SECURITY_JOINKEY = joinKey;
            joinKey = this.getJoinKeyFromEnv();
            this.validateJoinKey(joinKey);
            if (joinKey) {
                logger.debug('Cluster join: Got join key from file');
            }
        }
        if (joinKey) {
            this.logJoinKeyValue(joinKey);
            return joinKey;
        }
        else {
            logger.error('Cluster join: Failed getting join key from file');
            this.handleError(error);
        }
    }
    static getJoinKeyFromEnv() {
        try {
            const val = config.get('shared.security.joinKey');
            return this.getTrimmedKey(val);
        }
        catch (e) {
            logger.debug(`Cluster join: Failed to get join key from env variable ${e}`);
            return null;
        }
    }
    static logJoinKeyValue(str) {
        try {
            const shaValue = crypto.createHash('sha1').update(str, 'utf8').digest('hex');
            logger.debug(`Cluster join: Hashvalue of join key: [${shaValue}]`);
        }
        catch (e) {
            return null;
        }
    }
    static tryReadJoinKeyFile() {
        try {
            const data = fs.readFileSync(AccessJoinKeyUtils.joinKeyFilePath, 'utf-8');
            return [data, null];
        }
        catch (e) {
            return [null, e];
        }
    }
    static async getJoinKeyFromDefaultPath() {
        const retries = config.get('frontend.accessClient.joinKey.retries');
        const sleepTime = 1000;
        let error;
        for (let i = 1; i <= retries; i += 1) {
            const [fileData, fileError] = this.tryReadJoinKeyFile();
            error = fileError;
            if (fileData) {
                return [this.getTrimmedKey(fileData), null];
            }
            logger.info(`Cluster join: Join key is missing. Pending for ${(i * sleepTime) / Constants_1.TIME.SECOND_MS} seconds with 60 seconds timeout`);
            await API_1.API.sleep(sleepTime);
        }
        return [null, error];
    }
    static handleError(error) {
        let errorMessage = 'Cluster join: Failed resolving join key';
        if (error && error.code === 'ENOENT') {
            errorMessage = errorMessage.concat('; ' + Constants_1.JOIN_KEY.MESSAGES.MISSING);
        }
        throw new Error(errorMessage);
    }
    static getTrimmedKey(joinKey) {
        if (typeof joinKey === 'string') {
            return joinKey.trim().replace(/\s/g, '');
        }
        else {
            return null;
        }
    }
    static validateJoinKey(joinKey) {
        const isLengthBig32 = joinKey.length >= 32;
        const isHex = API_1.API.isHex(joinKey);
        if (!isLengthBig32) {
            throw new Error('JoinKey is less than 32 chars');
        }
        if (!isHex) {
            throw new Error('JoinKey is not hex format');
        }
        return true;
    }
    static get joinKeyFilePath() {
        let configJonKeyFilePath = config.get('shared.security.joinKeyFile');
        if (Constants_1.PRODUCT_HOME && !path.isAbsolute(configJonKeyFilePath)) {
            return path.join(Constants_1.PRODUCT_HOME, configJonKeyFilePath);
        }
        else {
            return configJonKeyFilePath;
        }
    }
}
__decorate([
    Decorators_1.methodLog({ logger })
], AccessJoinKeyUtils, "getJoinKey", null);
__decorate([
    Decorators_1.methodLog({ logger })
], AccessJoinKeyUtils, "getJoinKeyFromEnv", null);
__decorate([
    Decorators_1.methodLog({ logger })
], AccessJoinKeyUtils, "logJoinKeyValue", null);
__decorate([
    Decorators_1.methodLog({ logger })
], AccessJoinKeyUtils, "tryReadJoinKeyFile", null);
exports.AccessJoinKeyUtils = AccessJoinKeyUtils;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesService = void 0;
const AccessAdminClient_1 = __webpack_require__(12);
const LoggerFactory_1 = __webpack_require__(1);
const AccessService_1 = __webpack_require__(28);
const RoleUtils_1 = __webpack_require__(88);
const Decorators_1 = __webpack_require__(2);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
class RolesService extends AccessService_1.AccessService {
    static async create(authData, role) {
        const client = await RolesService.getClient();
        const ctx = await AccessAdminClient_1.AccessAdminClient.getAccessContext(authData);
        const roleModel = RoleUtils_1.RoleUtils.roleToRoleModel(role);
        return RoleUtils_1.RoleUtils.roleModelToRole(await client.roles().create(ctx, roleModel));
    }
    static async edit(authData, role) {
        const client = await RolesService.getClient();
        const ctx = await AccessAdminClient_1.AccessAdminClient.getAccessContext(authData);
        const roleModel = RoleUtils_1.RoleUtils.roleToRoleModel(role);
        return RoleUtils_1.RoleUtils.roleModelToRole(await client.roles().edit(ctx, roleModel));
    }
    static async getAll(authData) {
        const client = await RolesService.getClient();
        const ctx = await AccessAdminClient_1.AccessAdminClient.getAccessContext(authData);
        const roleModels = await client.roles().getAll(ctx);
        return RoleUtils_1.RoleUtils.roleModelsToRolesResponse(roleModels);
    }
    static async getByName(authData, roleName) {
        const client = await RolesService.getClient();
        const ctx = await AccessAdminClient_1.AccessAdminClient.getAccessContext(authData);
        const roleModel = await client.roles().get(ctx, roleName);
        return RoleUtils_1.RoleUtils.roleModelToRole(roleModel);
    }
    static async delete(authData, roleName) {
        const client = await RolesService.getClient();
        const ctx = await AccessAdminClient_1.AccessAdminClient.getAccessContext(authData);
        return await client.roles().delete(ctx, roleName);
    }
}
__decorate([
    Decorators_1.methodLog({ logger })
], RolesService, "create", null);
__decorate([
    Decorators_1.methodLog({ logger })
], RolesService, "edit", null);
__decorate([
    Decorators_1.methodLog({ logger })
], RolesService, "getAll", null);
__decorate([
    Decorators_1.methodLog({ logger })
], RolesService, "delete", null);
exports.RolesService = RolesService;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleUtils = exports.uiReadPipeline = exports.accessReadPipeline = exports.roleTypeToStringMap = exports.actionToStringMap = void 0;
const access_nodejs_client_1 = __webpack_require__(9);
exports.actionToStringMap = new Map();
Object.entries(access_nodejs_client_1.RoleAction).map(([key, value]) => {
    exports.actionToStringMap.set(value, key.toLowerCase());
});
exports.roleTypeToStringMap = new Map();
Object.entries(access_nodejs_client_1.RoleType).map(([key, value]) => {
    exports.roleTypeToStringMap.set(value, key.toLowerCase());
});
exports.accessReadPipeline = {
    read_integrations_pipeline: true,
    read_sources_pipeline: true,
    read_pools_pipeline: true,
};
exports.uiReadPipeline = {
    read_pipeline: true,
};
class RoleUtils {
    static roleToRoleModel(role) {
        const roleModel = new access_nodejs_client_1.RoleModel();
        const description = role.description == null ? '' : role.description;
        roleModel.setName(role.name);
        roleModel.setDescription(description);
        roleModel.setEnvironmentsList(role.environments || []);
        roleModel.setType(access_nodejs_client_1.RoleType[role.type.toUpperCase()]);
        const accessActions = RoleUtils.uiAdvancedActionsToAccessActions(role.actions);
        const roleActions = Object.entries(accessActions)
            .filter(([_, flag]) => flag)
            .map(([roleAction, _]) => access_nodejs_client_1.RoleAction[roleAction.toUpperCase()]);
        roleModel.setActionsList(roleActions);
        return roleModel;
    }
    static roleToProjectRoleModel(role, projectKey) {
        const projectRole = new access_nodejs_client_1.ProjectRole();
        projectRole.setRole(RoleUtils.roleToRoleModel(role));
        projectRole.setProjectKey(projectKey);
        return projectRole;
    }
    // Convert ui read_pipeline action to access read_pools_pipeline, read_sources_pipeline, read_integrations_pipeline
    static uiAdvancedActionsToAccessActions(actions) {
        const { read_pipeline, ...filteredActions } = actions;
        if (read_pipeline) {
            return { ...filteredActions, ...exports.accessReadPipeline };
        }
        return actions;
    }
    static roleModelToRole(roleModel, projectKey) {
        const role = {
            name: roleModel.getName(),
            description: roleModel.getDescription(),
            type: exports.roleTypeToStringMap.get(roleModel.getType()),
            environments: roleModel.getEnvironmentsList(),
            actions: {},
        };
        roleModel.getActionsList().forEach((action) => {
            role.actions[exports.actionToStringMap.get(action)] = true;
        });
        role.actions = RoleUtils.accessActionsToUiAdvancedActions(role.actions);
        if (projectKey) {
            role.projectKey = projectKey;
        }
        return role;
    }
    // Convert access read_pools_pipeline, read_sources_pipeline, read_integrations_pipeline to ui read_pipeline action
    static accessActionsToUiAdvancedActions(actions) {
        const { read_integrations_pipeline: readIntegrations, read_sources_pipeline: readSources, read_pools_pipeline: readPools, ...filteredActions } = actions;
        const allReadPipelineActions = readIntegrations && readSources && readPools;
        if (allReadPipelineActions) {
            return { ...filteredActions, ...exports.uiReadPipeline };
        }
        return actions;
    }
    static roleModelsToRolesResponse(roleModels, projectKey) {
        const response = {
            custom: [],
            predefined: [],
            admin: [],
        };
        return roleModels.reduce((map, roleModel) => {
            const role = RoleUtils.roleModelToRole(roleModel, projectKey);
            response[role.type].push(role);
            return map;
        }, response);
    }
}
exports.RoleUtils = RoleUtils;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsRolesService = void 0;
const AccessAdminClient_1 = __webpack_require__(12);
const AccessService_1 = __webpack_require__(28);
const RoleUtils_1 = __webpack_require__(88);
class ProjectsRolesService extends AccessService_1.AccessService {
    static async get(authData, projectKey, roleName) {
        const client = await ProjectsRolesService.getClient();
        const ctx = await AccessAdminClient_1.AccessAdminClient.getAccessContext(authData);
        const roleModel = await client.projects().roles().get(ctx, projectKey, roleName);
        return RoleUtils_1.RoleUtils.roleModelToRole(roleModel, projectKey);
    }
    static async getAll(authData, projectKey) {
        const client = await ProjectsRolesService.getClient();
        const ctx = await AccessAdminClient_1.AccessAdminClient.getAccessContext(authData);
        const roleModels = await client.projects().roles().getAll(ctx, projectKey);
        return RoleUtils_1.RoleUtils.roleModelsToRolesResponse(roleModels, projectKey);
    }
    static async create(authData, projectKey, role) {
        // todo add validator, check role name and project name mismatch
        const client = await ProjectsRolesService.getClient();
        const ctx = await AccessAdminClient_1.AccessAdminClient.getAccessContext(authData);
        const projectRole = RoleUtils_1.RoleUtils.roleToProjectRoleModel(role, projectKey);
        const response = await client.projects().roles().create(ctx, projectRole);
        return RoleUtils_1.RoleUtils.roleModelToRole(response.getRole(), response.getProjectKey());
    }
    static async edit(authData, projectKey, role) {
        // todo add validator, check role name and project name mismatch
        const client = await ProjectsRolesService.getClient();
        const ctx = await AccessAdminClient_1.AccessAdminClient.getAccessContext(authData);
        const projectRole = RoleUtils_1.RoleUtils.roleToProjectRoleModel(role, projectKey);
        const response = await client.projects().roles().edit(ctx, projectRole);
        return RoleUtils_1.RoleUtils.roleModelToRole(response.getRole(), response.getProjectKey());
    }
    static async delete(authData, projectKey, roleName) {
        const client = await ProjectsRolesService.getClient();
        const ctx = await AccessAdminClient_1.AccessAdminClient.getAccessContext(authData);
        await client.projects().roles().delete(ctx, projectKey, roleName);
    }
}
exports.ProjectsRolesService = ProjectsRolesService;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessTokenService = void 0;
const AccessAdminClient_1 = __webpack_require__(12);
const access_nodejs_client_1 = __webpack_require__(9);
const Access_1 = __webpack_require__(36);
const Constants_1 = __webpack_require__(0);
const LoggerFactory_1 = __webpack_require__(1);
const CacheDB_1 = __webpack_require__(35);
const config = __webpack_require__(4);
const ServiceID_1 = __webpack_require__(25);
const TimeUtils_1 = __webpack_require__(38);
const Decorators_1 = __webpack_require__(2);
const uid = __webpack_require__(267);
const GrpcErrorUtil_1 = __webpack_require__(103);
const cache = CacheDB_1.CacheDB.getTokenCacheDB();
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
const SESSION_DURATION_S = TimeUtils_1.TimeUtils.convertMinutesToSeconds(config.get('frontend.session.timeMinutes'));
const IMPERSONATION_TIME_S = TimeUtils_1.TimeUtils.convertMinutesToSeconds(Constants_1.TOKEN_CONSTANTS.IMPERSONATION_TIME_MINUTE);
const IMPERSONATION_TIME_MS = TimeUtils_1.TimeUtils.convertMinutesToMilliseconds(Constants_1.TOKEN_CONSTANTS.IMPERSONATION_TIME_MINUTE);
class AccessTokenService {
    static async createUISessionToken(user) {
        try {
            const accessClient = await AccessAdminClient_1.AccessAdminClient.client;
            logger.debug(`about to create UI session token for user - ${user.name}`);
            const scope = await AccessTokenService.getUiTokenScope(user);
            const refreshable = true;
            const subject = `${ServiceID_1.ServiceID.getServiceId()}/users/${user.name}`;
            const audience = ServiceID_1.ServiceID.getServiceId();
            const expiration = SESSION_DURATION_S;
            const extension = AccessTokenService.getTokenExtension(user).build();
            const accessRequest = new access_nodejs_client_1.CreateTokenRequestModel(scope, refreshable, subject, audience, expiration, extension);
            const ctx = await AccessAdminClient_1.AccessAdminClient.getAccessAdminContext();
            const accessResponse = await accessClient.createToken(ctx, accessRequest);
            logger.debug(`successfully created UI session token for user - ${user.name}`);
            return new Access_1.UiSessionTokens(accessResponse.accessToken, accessResponse.refreshToken);
        }
        catch (e) {
            logger.error(new Error(`error creating UI session token for user - ${user.name}`));
            GrpcErrorUtil_1.GrpcErrorUtil.handleError(e, logger);
        }
    }
    static async revokeUISessionToken(uiSessionTokens) {
        const accessToken = uiSessionTokens.accessToken;
        try {
            const accessClient = await AccessAdminClient_1.AccessAdminClient.client;
            logger.debug('about to revoke the UI session token');
            const ctx = await AccessAdminClient_1.AccessAdminClient.getAccessAdminContext();
            const revokeResponse = await accessClient.revokeUiSessionToken(ctx, accessToken);
            logger.debug(`${JSON.stringify(revokeResponse)} successfully revoked the session token - ${accessToken}`);
        }
        catch (e) {
            // Token not exists, noting to revoke
            if (e.response && e.response.status === 404) {
                return;
            }
            logger.error(`error in revoking UI session token ${e.message}`);
            logger.debug(`${accessToken}`);
            GrpcErrorUtil_1.GrpcErrorUtil.handleError(e, logger);
        }
    }
    static async verifyToken(tokenToVerify) {
        try {
            const accessClient = await AccessAdminClient_1.AccessAdminClient.client;
            const ctx = await AccessAdminClient_1.AccessAdminClient.getAccessAdminContext();
            return await accessClient.verifyToken(ctx, tokenToVerify, ServiceID_1.ServiceID.getServiceId());
        }
        catch (e) {
            logger.error(new Error(`error verifying token :: ${e.message}`));
            GrpcErrorUtil_1.GrpcErrorUtil.handleError(e, logger);
        }
    }
    static async refreshUISessionToken(refreshToken, uiSessionJwtPayload) {
        const { scope, subject, extension } = uiSessionJwtPayload;
        const refreshable = true;
        const audience = ServiceID_1.ServiceID.getServiceId();
        const expiration = SESSION_DURATION_S;
        logger.debug(`about to refresh UI session token for user - ${subject}`);
        const accessClient = await AccessAdminClient_1.AccessAdminClient.client;
        const accessRequest = new access_nodejs_client_1.RefreshTokenRequestModel(scope, refreshable, refreshToken, subject, audience, expiration);
        if (extension) {
            accessRequest.extension = extension;
        }
        const ctx = await AccessAdminClient_1.AccessAdminClient.getAccessAdminContext();
        const accessResponse = await accessClient.refreshToken(ctx, accessRequest);
        logger.debug(`successfully refreshed UI session token for user - ${uiSessionJwtPayload.subject}`);
        return new Access_1.UiSessionTokens(accessResponse.accessToken, accessResponse.refreshToken);
    }
    static async createImpersonationToken(serviceName, user, scopeFromUiSessionToken) {
        try {
            logger.debug(`about to create ${serviceName} impersonation token for user - ${user} with scope - ${scopeFromUiSessionToken}`);
            const accessClient = await AccessAdminClient_1.AccessAdminClient.client;
            const accessRequest = AccessTokenService.getImpersonationTokenRequest(user, serviceName, scopeFromUiSessionToken);
            const ctx = await AccessAdminClient_1.AccessAdminClient.getAccessAdminContext();
            const tokenResponse = await accessClient.createToken(ctx, accessRequest);
            logger.debug(`successfully created impersonation token for user - ${user} for service - ${serviceName}`);
            return tokenResponse;
        }
        catch (e) {
            logger.error(new Error(`error creating impersonation token for user - ${user} for service - ${serviceName}`));
            throw e;
        }
    }
    static async createUnlimitedTimeAdminToken(services, username) {
        return AccessTokenService.createAdminToken(services, { expiry: 0, username });
    }
    static async createAdminToken(services, options = {}) {
        try {
            logger.debug(`about to create admin token for services - ${services}`);
            const accessClient = await AccessAdminClient_1.AccessAdminClient.client;
            const accessRequest = AccessTokenService.getAdminTokenRequest(services, options);
            const ctx = await AccessAdminClient_1.AccessAdminClient.getAccessAdminContext();
            const tokenResponse = await accessClient.createToken(ctx, accessRequest);
            logger.debug(`successfully created admin token for services - ${services}`);
            return tokenResponse;
        }
        catch (e) {
            logger.error(new Error(`error creating admin token for user for services - ${services}`));
            GrpcErrorUtil_1.GrpcErrorUtil.handleError(e, logger);
        }
    }
    static async getImpersonationToken(serviceName, user = Constants_1.ANONYMOUS, sessionId = '', scopeFromUiSessionToken = '') {
        try {
            logger.debug(`getting impersonation token for service - ${serviceName} for user - ${user} with sessionId - ${sessionId} with scope - ${scopeFromUiSessionToken}`);
            if (scopeFromUiSessionToken && access_nodejs_client_1.Scope.parseScopeString(scopeFromUiSessionToken).admin) {
                return await AccessTokenService.getAdminToken(serviceName);
            }
            const tokenKey = Access_1.ImpersonationTokenKey.getKey(serviceName, user, sessionId);
            const token = await cache.get(tokenKey);
            if (token) {
                logger.debug(`found impersonation token in local cache for key - ${tokenKey}`);
                return token;
            }
            else {
                logger.debug(`creating impersonation token for user - ${user} with sessionId - ${sessionId} for service - ${serviceName}`);
                const impersonationToken = await AccessTokenService.createImpersonationToken(serviceName, user, scopeFromUiSessionToken);
                logger.debug(`setting impersonation token in cacheDB for key - ${tokenKey}`);
                await cache.set(tokenKey, impersonationToken.accessToken, IMPERSONATION_TIME_MS - Constants_1.TIME.SECOND_MS);
                return impersonationToken.accessToken;
            }
        }
        catch (e) {
            logger.error(new Error(`error getting impersonation token for user - ${user} with sessionId - ${sessionId} for service ${serviceName}`));
            GrpcErrorUtil_1.GrpcErrorUtil.handleError(e, logger);
            return null;
        }
    }
    static async parseToken(tokenToParse) {
        try {
            const accessClient = await AccessAdminClient_1.AccessAdminClient.client;
            const parsedTokenPayload = await accessClient.parseToken(tokenToParse);
            return new Access_1.PlatformJwtToken(parsedTokenPayload);
        }
        catch (e) {
            logger.error(new Error(`error parsing token :: ${e.message}`));
            GrpcErrorUtil_1.GrpcErrorUtil.handleError(e, logger);
        }
    }
    static async getAdminToken(serviceName) {
        try {
            const tokenKey = Access_1.ImpersonationTokenKey.getAdminKey(serviceName);
            const token = await cache.get(tokenKey);
            if (token) {
                logger.debug(`found impersonation token in local cache for key - ${tokenKey}`);
                return token;
            }
            else {
                logger.debug(`creating admin token for service - ${serviceName}`);
                const adminModel = await AccessTokenService.createAdminToken([Constants_1.SERVICE_NAMES_TO_KEY[serviceName]]);
                logger.debug(`setting admin token in cacheDB for key - ${tokenKey}`);
                await cache.set(tokenKey, adminModel.accessToken, IMPERSONATION_TIME_MS - Constants_1.TIME.SECOND_MS);
                return adminModel.accessToken;
            }
        }
        catch (e) {
            logger.error(new Error(`error getting admin token for service ${serviceName}`));
            GrpcErrorUtil_1.GrpcErrorUtil.handleError(e, logger);
        }
    }
    static getImpersonationTokenRequest(user, serviceName, scopeFromUiSessionToken) {
        const { ANY_API, APPLIED_PERMISSIONS_USER, APPLIED_PERMISSIONS_ADMIN } = Constants_1.TOKEN_CONSTANTS.SCOPE;
        // in case of anonymous user that doesn't have ui session tokens
        if (!scopeFromUiSessionToken) {
            scopeFromUiSessionToken = APPLIED_PERMISSIONS_USER;
        }
        switch (serviceName) {
            case Constants_1.SERVICES.ARTIFACTORY.NAME:
                return new access_nodejs_client_1.CreateTokenRequestModel(scopeFromUiSessionToken + ' ' + ANY_API, false, `${ServiceID_1.ServiceID.getServiceId()}/users/${user}`, Constants_1.TOKEN_CONSTANTS.AUDIENCE.ANY_ARTIFACTORY, IMPERSONATION_TIME_S);
            case Constants_1.SERVICES.XRAY.NAME:
                return new access_nodejs_client_1.CreateTokenRequestModel(scopeFromUiSessionToken, false, `${ServiceID_1.ServiceID.getServiceId()}/users/${user}`, Constants_1.TOKEN_CONSTANTS.AUDIENCE.ANY_XRAY, IMPERSONATION_TIME_S);
            case Constants_1.SERVICES.DISTRIBUTION.NAME:
                return new access_nodejs_client_1.CreateTokenRequestModel(scopeFromUiSessionToken, false, user, Constants_1.TOKEN_CONSTANTS.AUDIENCE.ANY_DISTRIBUTION, IMPERSONATION_TIME_S);
            case Constants_1.SERVICES.METADATA.NAME:
                return new access_nodejs_client_1.CreateTokenRequestModel(scopeFromUiSessionToken, false, `${ServiceID_1.ServiceID.getServiceId()}/users/${user}`, Constants_1.TOKEN_CONSTANTS.AUDIENCE.ANY_METADATA, IMPERSONATION_TIME_S);
            case Constants_1.SERVICES.MISSION_CONTROL.NAME:
                return new access_nodejs_client_1.CreateTokenRequestModel(scopeFromUiSessionToken, false, user, Constants_1.TOKEN_CONSTANTS.AUDIENCE.ANY_MISSION_CONTROL, IMPERSONATION_TIME_S);
            case Constants_1.SERVICES.INSIGHT.NAME:
                return new access_nodejs_client_1.CreateTokenRequestModel(scopeFromUiSessionToken, false, user, Constants_1.TOKEN_CONSTANTS.AUDIENCE.ANY_INSIGHT, IMPERSONATION_TIME_S);
            case Constants_1.SERVICES.ACCESS.NAME:
                return new access_nodejs_client_1.CreateTokenRequestModel(scopeFromUiSessionToken, false, `${ServiceID_1.ServiceID.getServiceId()}/users/${user}`, Constants_1.TOKEN_CONSTANTS.AUDIENCE.ANY_ACCESS, IMPERSONATION_TIME_S);
            case Constants_1.SERVICES.PIPELINES.NAME:
                return new access_nodejs_client_1.CreateTokenRequestModel(scopeFromUiSessionToken, false, user, Constants_1.TOKEN_CONSTANTS.AUDIENCE.ANY_PIPELINES, IMPERSONATION_TIME_S);
            case Constants_1.SERVICES.EVENT.NAME:
                return new access_nodejs_client_1.CreateTokenRequestModel(scopeFromUiSessionToken, false, `${ServiceID_1.ServiceID.getServiceId()}/users/${user}`, Constants_1.TOKEN_CONSTANTS.AUDIENCE.ANY_EVENT, IMPERSONATION_TIME_S);
            case Constants_1.SERVICES.REPLICATOR.NAME:
                return new access_nodejs_client_1.CreateTokenRequestModel(scopeFromUiSessionToken, false, `${ServiceID_1.ServiceID.getServiceId()}/users/${user}`, Constants_1.TOKEN_CONSTANTS.AUDIENCE.ANY_REPLICATOR, IMPERSONATION_TIME_S);
        }
    }
    static getAdminTokenRequest(services, options = {}) {
        var _a;
        options.expiry = (_a = options.expiry) !== null && _a !== void 0 ? _a : IMPERSONATION_TIME_S;
        options.username = options.username || ServiceID_1.ServiceID.getServiceId();
        options.username = `${ServiceID_1.ServiceID.getServiceId()}/users/${options.username}`;
        let scope = Constants_1.TOKEN_CONSTANTS.SCOPE.APPLIED_PERMISSIONS_ADMIN;
        if (services.includes(Constants_1.SERVICES.ARTIFACTORY.KEY)) {
            scope = scope.concat(' ', Constants_1.TOKEN_CONSTANTS.SCOPE.ANY_API);
        }
        return new access_nodejs_client_1.CreateTokenRequestModel(scope, false, options.username, AccessTokenService.getAudience(services), options.expiry);
    }
    static getTokenExtension(user) {
        const extension = new Access_1.JwtTokenExtension();
        extension.rememberMe = user.rememberMe;
        extension.sessionId = AccessTokenService.generateSessionId();
        extension.revocable = true;
        extension.lastLoginTime = (new Date()).getTime();
        if (user.realm) {
            extension.realm = user.realm;
        }
        if (user.realm === Constants_1.REALM.CROWD) {
            extension.setNextValidationTime(user.crowdNextValidationTime);
            extension.crowdCookie = user.crowdCookie;
        }
        if (user.httpSsoUserName) {
            extension.httpSsoUserName = user.httpSsoUserName;
        }
        if (user.scopeGroupsOverTheLimit) {
            extension.scopeGroupsOverLimit = true;
        }
        if (!user.existsInDB) {
            extension.externalUser = true;
        }
        if (user.samlSessionIndex) {
            extension.samlSessionIndex = user.samlSessionIndex;
        }
        if (user.scopeGroupsAreCompressed) {
            extension.compressedGroups = true;
        }
        if (user.requireProfilePassword) {
            extension.requireProfilePassword = true;
        }
        if (user.requireProfileUnlock) {
            extension.requireProfileUnlock = true;
        }
        if (user.realm) {
            extension.realm = user.realm;
        }
        return extension;
    }
    static async getUiTokenScope(user) {
        const { APPLIED_PERMISSIONS_USER } = Constants_1.TOKEN_CONSTANTS.SCOPE;
        const isSaml = user.realm === Constants_1.REALM.SAML;
        const transientUser = user.existsInDB === false;
        if (isSaml && !transientUser) {
            return await AccessTokenService.getSamlScope(user);
        }
        if (transientUser) {
            return await AccessTokenService.getTransientScope(user);
        }
        return APPLIED_PERMISSIONS_USER;
    }
    static async getSamlScope(user) {
        const { APPLIED_PERMISSIONS_USER } = Constants_1.TOKEN_CONSTANTS.SCOPE;
        let scope = APPLIED_PERMISSIONS_USER;
        const hasGroups = AccessTokenService.userHasGroups(user);
        if (hasGroups) {
            const scopeGroups = await Access_1.TokenScopeUtils.getGroupsScope(user.groups);
            scope += ' ' + scopeGroups.groups;
            user.scopeGroupsAreCompressed = scopeGroups.compressed;
            user.scopeGroupsOverTheLimit = scopeGroups.overTheLimit;
        }
        return scope;
    }
    static async getTransientScope(user) {
        const hasGroups = AccessTokenService.userHasGroups(user);
        if (!hasGroups) {
            logger.error(`transient user - ${user.name} has no permission groups`);
        }
        const scopeGroups = await Access_1.TokenScopeUtils.getGroupsScope(user.groups);
        user.scopeGroupsAreCompressed = scopeGroups.compressed;
        user.scopeGroupsOverTheLimit = scopeGroups.overTheLimit;
        return scopeGroups.groups;
    }
    static userHasGroups(user) {
        return Array.isArray(user.groups) && user.groups.length > 0;
    }
    static getAudience(services) {
        return services.map(serviceName => {
            return Constants_1.SERVICES[serviceName].AUDIENCE;
        }).join(' ');
    }
    static generateSessionId() {
        return uid.sync(24);
    }
}
__decorate([
    Decorators_1.handleAccessUnauthorized()
], AccessTokenService, "createUISessionToken", null);
__decorate([
    Decorators_1.handleAccessUnauthorized()
], AccessTokenService, "revokeUISessionToken", null);
__decorate([
    Decorators_1.methodLog({ logger }),
    Decorators_1.handleAccessUnauthorized()
], AccessTokenService, "verifyToken", null);
__decorate([
    Decorators_1.handleAccessUnauthorized()
], AccessTokenService, "refreshUISessionToken", null);
__decorate([
    Decorators_1.methodLog({ logger }),
    Decorators_1.handleAccessUnauthorized()
], AccessTokenService, "createImpersonationToken", null);
__decorate([
    Decorators_1.handleAccessUnauthorized()
], AccessTokenService, "createAdminToken", null);
__decorate([
    Decorators_1.methodLog({ logger }),
    Decorators_1.handleAccessUnauthorized()
], AccessTokenService, "getImpersonationToken", null);
__decorate([
    Decorators_1.methodLog({ logger })
], AccessTokenService, "parseToken", null);
__decorate([
    Decorators_1.methodLog({ logger }),
    Decorators_1.handleAccessUnauthorized()
], AccessTokenService, "getAdminToken", null);
__decorate([
    Decorators_1.methodLog({ logger })
], AccessTokenService, "getImpersonationTokenRequest", null);
__decorate([
    Decorators_1.methodLog({ logger })
], AccessTokenService, "getAdminTokenRequest", null);
exports.AccessTokenService = AccessTokenService;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionViewModelTransformer = void 0;
const permission_pb_1 = __webpack_require__(63);
const LoggerFactory_1 = __webpack_require__(1);
const PermissionUtils_1 = __webpack_require__(64);
const Decorators_1 = __webpack_require__(2);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
class PermissionViewModelTransformer {
    constructor(_viewModel) {
        this._viewModel = _viewModel;
    }
    get viewModel() {
        return this._viewModel;
    }
    get availablePermissionResources() {
        return Object.keys(this.viewModel.config).filter(PermissionUtils_1.PermissionUtils.isResourceType);
    }
    toGrpcPermissions() {
        return this.availablePermissionResources
            .map(PermissionUtils_1.PermissionUtils.stringToResourceType)
            .map(this.createSinglePermission.bind(this));
    }
    toViewPermission() {
        return this.viewModel;
    }
    createSinglePermission(resourceType) {
        logger.debug('creating single permission');
        const createPermissionRequest = new permission_pb_1.CreatePermissionRequest();
        logger.debug('setting permission resource type');
        createPermissionRequest.setResourceType(resourceType);
        logger.debug('setting permission display name');
        createPermissionRequest.setDisplayName(this.viewModel.name);
        logger.debug('setting permission group actions');
        createPermissionRequest.setGroupActionsList(this.getGroupsActions(resourceType));
        logger.debug('setting permission user actions');
        createPermissionRequest.setUserActionsList(this.getUsersActions(resourceType));
        const config = this.viewModel.config[PermissionUtils_1.PermissionUtils.resourceTypeToString(resourceType)];
        if (!config) {
            return createPermissionRequest;
        }
        const customDataViewModel = Object.keys(config).reduce((obj, key) => {
            obj[key] = config[key];
            return obj;
        }, {});
        logger.debug('setting permission custom viewModel');
        createPermissionRequest.setCustomData(JSON.stringify(customDataViewModel));
        return createPermissionRequest;
    }
    getGroupsActions(resourceType) {
        return this.getEntityActions(this.viewModel.config.groups, resourceType);
    }
    getUsersActions(resourceType) {
        return this.getEntityActions(this.viewModel.config.users, resourceType);
    }
    getEntityActions(entityPermissions, resourceType) {
        if (!entityPermissions || entityPermissions.length === 0) {
            return [];
        }
        const resourceTypeString = PermissionUtils_1.PermissionUtils.resourceTypeToString(resourceType);
        const generateActionsFromEntity = (entityPermission) => {
            const permissionAction = new permission_pb_1.PermissionAction();
            const resourceConfig = entityPermission.resourcesConfig[resourceTypeString];
            const actions = PermissionUtils_1.PermissionUtils.getActionsForResourceConfig(resourceConfig);
            permissionAction.setName(entityPermission.name);
            permissionAction.setActionsList(actions);
            return permissionAction;
        };
        const filterByResourceType = (singleEntity) => {
            return resourceTypeString in singleEntity.resourcesConfig;
        };
        return entityPermissions.filter(filterByResourceType).map(generateActionsFromEntity);
    }
}
__decorate([
    Decorators_1.methodLog({ logger })
], PermissionViewModelTransformer.prototype, "toGrpcPermissions", null);
__decorate([
    Decorators_1.methodLog({ logger })
], PermissionViewModelTransformer.prototype, "createSinglePermission", null);
__decorate([
    Decorators_1.methodLog({ logger })
], PermissionViewModelTransformer.prototype, "getGroupsActions", null);
__decorate([
    Decorators_1.methodLog({ logger })
], PermissionViewModelTransformer.prototype, "getUsersActions", null);
__decorate([
    Decorators_1.methodLog({ logger })
], PermissionViewModelTransformer.prototype, "getEntityActions", null);
exports.PermissionViewModelTransformer = PermissionViewModelTransformer;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionGrpcTransformer = void 0;
const PermissionUtils_1 = __webpack_require__(64);
const permission_pb_1 = __webpack_require__(63);
const LoggerFactory_1 = __webpack_require__(1);
const Decorators_1 = __webpack_require__(2);
const API_1 = __webpack_require__(7);
const Constants_1 = __webpack_require__(0);
const pick = __webpack_require__(245);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
const { DELETE, DISTRIBUTE, DEPLOY, MANAGE_XRAY_MD, MANAGE, TRIGGER, ANNOTATE, READ, } = Constants_1.ACCESS.PERMISSIONS.RESOURCE_CONFIG;
class PermissionGrpcTransformer {
    constructor(_data) {
        this._data = _data;
        this.validatePermissions();
    }
    get data() {
        return this._data;
    }
    static generateResourceConfig(resourceTypeEnum, actionList) {
        const resourceConfig = {
            ...(actionList.includes(permission_pb_1.Action.READ) && { [READ]: true }),
            ...(actionList.includes(permission_pb_1.Action.DEPLOY) && { [DEPLOY]: true }),
            ...(actionList.includes(permission_pb_1.Action.DELETE) && { [DELETE]: true }),
            ...(actionList.includes(permission_pb_1.Action.MANAGE) && { [MANAGE]: true }),
            ...(actionList.includes(permission_pb_1.Action.TRIGGER) && { [TRIGGER]: true }),
            ...(actionList.includes(permission_pb_1.Action.ANNOTATE) && { [ANNOTATE]: true }),
            ...(actionList.includes(permission_pb_1.Action.DISTRIBUTE) && { [DISTRIBUTE]: true }),
            ...(actionList.includes(permission_pb_1.Action.MANAGE_XRAY_MD) && { [MANAGE_XRAY_MD]: true }),
        };
        switch (resourceTypeEnum) {
            case permission_pb_1.ResourceType.BUILD:
            case permission_pb_1.ResourceType.REPO:
                return pick(resourceConfig, [ANNOTATE, DELETE, DEPLOY, MANAGE, MANAGE_XRAY_MD, READ]);
            case permission_pb_1.ResourceType.RELEASE_BUNDLE:
                return pick(resourceConfig, [ANNOTATE, DELETE, DEPLOY, MANAGE, MANAGE_XRAY_MD, READ, DISTRIBUTE]);
            case permission_pb_1.ResourceType.PIPELINE_SOURCE:
                return pick(resourceConfig, [MANAGE, TRIGGER, READ]);
            case permission_pb_1.ResourceType.DESTINATION:
                return pick(resourceConfig, [MANAGE, DISTRIBUTE, DELETE]);
        }
    }
    static mergeEntitiesByName(entityPermissions) {
        const resourcesFromResourcesConfigArray = (resources, resourcesConfig) => resources.concat(...Object.keys(resourcesConfig));
        const fillEmptyPermissionResourceConfig = (resourceConfig, name) => {
            resourceConfig[name] = {};
            return resourceConfig;
        };
        const mergeEntities = (newEntityArr, name) => {
            const eligibleEntities = entityPermissions.filter((e) => e.name === name);
            const resourcesConfigs = eligibleEntities.map((e) => e.resourcesConfig);
            const resources = API_1.API.removeArrDuplications(resourcesConfigs.reduce(resourcesFromResourcesConfigArray, []));
            const joinedResource = resources.reduce(fillEmptyPermissionResourceConfig, {});
            resourcesConfigs.forEach((resourcesConfig) => {
                resources.forEach((resourceName) => {
                    joinedResource[resourceName] = Object.assign(joinedResource[resourceName], resourcesConfig[resourceName]);
                });
            });
            newEntityArr.push({ name, resourcesConfig: joinedResource });
            return newEntityArr;
        };
        const uniqueNames = API_1.API.removeArrDuplications(entityPermissions.map((e) => e.name));
        return uniqueNames.reduce(mergeEntities, []);
    }
    static getEntityPermission(resourceTypeEnum, permission) {
        const resourceTypeStr = PermissionUtils_1.PermissionUtils.resourceTypeToString(resourceTypeEnum);
        return {
            name: permission.getName(),
            resourcesConfig: {
                [resourceTypeStr]: PermissionGrpcTransformer.generateResourceConfig(resourceTypeEnum, permission.getActionsList()),
            },
        };
    }
    toViewPermission() {
        const viewModel = {
            name: this.data[0].getDisplayName(),
            config: this.data.reduce(this.generatePermissionConfig.bind(this), { users: [], groups: [] }),
        };
        viewModel.config.groups = PermissionGrpcTransformer.mergeEntitiesByName(viewModel.config.groups);
        viewModel.config.users = PermissionGrpcTransformer.mergeEntitiesByName(viewModel.config.users);
        return viewModel;
    }
    generatePermissionConfig(config, permission) {
        const resTypeEnum = permission.getResourceType();
        const resTypeString = PermissionUtils_1.PermissionUtils.resourceTypeToString(permission.getResourceType());
        if (permission.getCustomData() !== '') {
            config[resTypeString] = JSON.parse(permission.getCustomData());
        }
        const groups = permission.getGroupActionsList();
        const users = permission.getUserActionsList();
        config.groups = config.groups.concat(groups.map(PermissionGrpcTransformer.getEntityPermission.bind(this, resTypeEnum)));
        config.users = config.users.concat(users.map(PermissionGrpcTransformer.getEntityPermission.bind(this, resTypeEnum)));
        return config;
    }
    toGrpcPermissions() {
        return this.data;
    }
    validatePermissions() {
        if (!Array.isArray(this.data)) {
            throw new Error(`PermissionGrpcTransformer must be initialized with a non-empty array`);
        }
        const isPermissionType = this.data.every((i) => i instanceof permission_pb_1.Permission);
        const isCreatePermissionType = !this.data.every((i) => i instanceof permission_pb_1.CreatePermissionRequest);
        if (!isPermissionType && !isCreatePermissionType) {
            throw new Error(`PermissionGrpcTransformer must be initialized with an array of Permission or CreatePermissionRequest`);
        }
        const numberOfUniqueNames = API_1.API.removeArrDuplications(this.data.map((p) => p.getDisplayName())).length;
        if (numberOfUniqueNames > 1) {
            throw new Error(`PermissionGrpcTransformer permissions should have the same display name`);
        }
    }
}
__decorate([
    Decorators_1.methodLog({ logger })
], PermissionGrpcTransformer.prototype, "toViewPermission", null);
exports.PermissionGrpcTransformer = PermissionGrpcTransformer;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(47), exports);
__exportStar(__webpack_require__(265), exports);
__exportStar(__webpack_require__(266), exports);


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtTokenExtension = void 0;
const CrowdAuthenticationController_1 = __webpack_require__(31);
class JwtTokenExtension {
    constructor(payload) {
        if (payload) {
            const parsedPayload = JSON.parse(payload);
            const { cnv, crc, hsu, rmm, sgo, exu, ssi, cgr, rpp, rpu, rlm, sid, revocable, llt } = parsedPayload;
            if (cnv) {
                this.crowdNextValidation = parseInt(cnv, 10);
                this.crowdCookie = crc;
            }
            this.httpSsoUserName = hsu;
            this.rememberMe = rmm;
            this.scopeGroupsOverLimit = sgo;
            this.externalUser = exu;
            this.samlSessionIndex = ssi;
            this.compressedGroups = cgr;
            this.requireProfilePassword = rpp;
            this.requireProfileUnlock = rpu;
            this.realm = rlm;
            this.sessionId = sid;
            this.revocable = revocable;
            this.lastLoginTime = llt;
        }
    }
    build() {
        const minifiedExtension = {
            cnv: this.crowdNextValidation,
            crc: this.crowdCookie,
            hsu: this.httpSsoUserName,
            sgo: this.scopeGroupsOverLimit,
            exu: this.externalUser,
            ssi: this.samlSessionIndex,
            cgr: this.compressedGroups,
            rpp: this.requireProfilePassword,
            rpu: this.requireProfileUnlock,
            rlm: this.realm,
            rmm: this.rememberMe,
            sid: this.sessionId,
            revocable: this.revocable,
            llt: this.lastLoginTime
        };
        return JSON.stringify(minifiedExtension);
    }
    setNextValidationTime(minutes) {
        this.crowdNextValidation = CrowdAuthenticationController_1.default.getNextValidationTime(minutes);
    }
}
exports.JwtTokenExtension = JwtTokenExtension;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthErrorAuthenticateRequest = void 0;
const AuthError_1 = __webpack_require__(10);
class AuthErrorAuthenticateRequest extends AuthError_1.AuthError {
    constructor(message = AuthErrorAuthenticateRequest.defaultMessage) {
        super(message);
    }
    static get defaultMessage() {
        return `error onAfterSuccessful login`;
    }
}
exports.AuthErrorAuthenticateRequest = AuthErrorAuthenticateRequest;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DownloadErrorNoSignedUrl = void 0;
const CustomError_1 = __webpack_require__(16);
const Constants_1 = __webpack_require__(0);
class DownloadErrorNoSignedUrl extends CustomError_1.CustomError {
    constructor(message = DownloadErrorNoSignedUrl.defaultMessage) {
        super(message);
        this.statusCode = Constants_1.STATUS_CODES.INTERNAL_ERROR;
    }
    static get defaultMessage() {
        return `error from Artifactory trying to get signed url`;
    }
}
exports.DownloadErrorNoSignedUrl = DownloadErrorNoSignedUrl;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DownloadErrorNoPathOrRepoKey = void 0;
const CustomError_1 = __webpack_require__(16);
const Constants_1 = __webpack_require__(0);
class DownloadErrorNoPathOrRepoKey extends CustomError_1.CustomError {
    constructor(message = DownloadErrorNoPathOrRepoKey.defaultMessage) {
        super(message);
        this.statusCode = Constants_1.STATUS_CODES.INTERNAL_ERROR;
    }
    static get defaultMessage() {
        return `no repo key or path in request`;
    }
}
exports.DownloadErrorNoPathOrRepoKey = DownloadErrorNoPathOrRepoKey;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CsrfError = void 0;
const CustomError_1 = __webpack_require__(16);
const STATUS_CODES_1 = __webpack_require__(42);
class CsrfError extends CustomError_1.CustomError {
    constructor() {
        super('No XHR Header');
        this._errorCode = 40200;
        this._statusCode = STATUS_CODES_1.default.FORBIDDEN;
    }
}
exports.CsrfError = CsrfError;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CrowdCookieUtil = void 0;
const CookieUtil_1 = __webpack_require__(49);
const Constants_1 = __webpack_require__(0);
class CrowdCookieUtil extends CookieUtil_1.default {
    constructor(customCrowdCookieName = Constants_1.CROWD.COOKIE_NAME) {
        super(customCrowdCookieName);
    }
    crowdCookieExistsOnRequest(req) {
        const cookie = req.get('cookie');
        return this.doesCookieExists(cookie);
    }
    getCrowdCookieValue(req) {
        const cookie = req.get('cookie');
        return this.getValueFromSetCookieHeader(cookie);
    }
}
exports.CrowdCookieUtil = CrowdCookieUtil;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const crypto = __webpack_require__(43);
const Services_1 = __webpack_require__(3);
const CacheDB_1 = __webpack_require__(35);
const CRYPTO_UTILS_KEY_CACHE = 'CryptoUtilsKey';
class CryptoUtils {
    static async encryptValue(data) {
        if (typeof data !== 'string') {
            throw new Error(`encrypted data must be a string`);
        }
        const cipher = await CryptoUtils.getCipher();
        return cipher.update(data, 'utf8', 'hex') + cipher.final('hex');
    }
    static async decryptValue(data) {
        const decipher = await CryptoUtils.getDecipher();
        return decipher.update(data, 'hex', 'utf8') + decipher.final('utf8');
    }
    static async getBaseKey() {
        const cache = CacheDB_1.CacheDB.getTokenCacheDB();
        let key = await cache.get(CRYPTO_UTILS_KEY_CACHE);
        if (!key) {
            key = await Services_1.AccessService.getJoinKey();
            await cache.set(CRYPTO_UTILS_KEY_CACHE, key);
        }
        return key;
    }
    static async getCryptoKeys() {
        const joinKey = await CryptoUtils.getBaseKey();
        return {
            SECRET_IV: joinKey.substring(0, 16).padEnd(16, joinKey),
            SECRET_KEY: joinKey.substring(0, 32).padEnd(32, joinKey),
        };
    }
    static async getCipher() {
        const { SECRET_KEY, SECRET_IV } = await CryptoUtils.getCryptoKeys();
        return crypto.createCipheriv('aes-256-cbc', SECRET_KEY, SECRET_IV);
    }
    static async getDecipher() {
        const { SECRET_KEY, SECRET_IV } = await CryptoUtils.getCryptoKeys();
        return crypto.createDecipheriv('aes-256-cbc', SECRET_KEY, SECRET_IV);
    }
}
exports.default = CryptoUtils;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Constants_1 = __webpack_require__(0);
const Models_1 = __webpack_require__(47);
const AuthenticationErrors_1 = __webpack_require__(13);
const Services_1 = __webpack_require__(3);
const access_nodejs_client_1 = __webpack_require__(9);
const Tokens_1 = __webpack_require__(93);
const { APPLIED_PERMISSIONS_GROUPS } = Constants_1.TOKEN_CONSTANTS.SCOPE;
class TokenUtils {
    static getAppliedPermissionsGroupsScope(scope) {
        if (!scope || typeof scope !== 'string') {
            return null;
        }
        const splitScope = scope.split(' ');
        return splitScope.find(TokenUtils.appliedPermissionsGroupsExists);
    }
    static appliedPermissionsGroupsExists(scope) {
        return scope.indexOf(APPLIED_PERMISSIONS_GROUPS) > -1;
    }
    static async getUserInfoFromCookies(cookies) {
        let userInfo = {
            authenticated: null,
            userName: null,
            sessionId: null,
            jwtExtension: null,
            userScope: null,
            userGroups: null,
        };
        const uiSessionTokens = Models_1.UiSessionTokens.getUiSessionTokensFromCookies(cookies);
        if (!uiSessionTokens) {
            throw new AuthenticationErrors_1.AuthErrorNoCookies();
        }
        const uiSessionJwtPayload = await Services_1.AccessTokenService.parseToken(uiSessionTokens.accessToken);
        if (!uiSessionJwtPayload) {
            throw new AuthenticationErrors_1.AuthErrorParseToken();
        }
        const { scope, subject, parsedExtension } = uiSessionJwtPayload;
        userInfo.authenticated = true;
        userInfo.userName = subject.split('/').pop();
        userInfo.sessionId = parsedExtension.sessionId;
        if (parsedExtension.compressedGroups) {
            const parsedScope = access_nodejs_client_1.Scope.parseScopeString(scope);
            const decompressedGroups = await Tokens_1.TokenScopeUtils.decompressGroups(parsedScope.groups.join(','));
            parsedScope.groups = decompressedGroups.split(',');
            userInfo.userScope = parsedScope.toString();
        }
        else {
            userInfo.userScope = scope;
        }
        userInfo.jwtExtension = parsedExtension;
        return userInfo;
    }
}
exports.default = TokenUtils;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.UiSessionTokens = void 0;
const Constants_1 = __webpack_require__(0);
const TOKEN_CONSTANTS = Constants_1.Constants.TOKEN_CONSTANTS;
class UiSessionTokens {
    constructor(_accessToken, _refreshToken, _rememberMeToken) {
        this._accessToken = _accessToken;
        this._refreshToken = _refreshToken;
        this._rememberMeToken = _rememberMeToken;
    }
    get accessToken() {
        return this._accessToken;
    }
    get refreshToken() {
        return this._refreshToken;
    }
    get rememberMeToken() {
        return this._rememberMeToken;
    }
    static getUiSessionTokensFromCookies(cookiesObj) {
        if (cookiesObj) {
            const accessToken = cookiesObj[TOKEN_CONSTANTS.COOKIE.ACCESS_TOKEN];
            const refreshToken = cookiesObj[TOKEN_CONSTANTS.COOKIE.REFRESH_TOKEN];
            const rememberMeToken = cookiesObj[Constants_1.CUSTOM_HEADERS.REMEMBER_ME_COOKIE];
            if (accessToken && refreshToken) {
                return new UiSessionTokens(accessToken, refreshToken, rememberMeToken);
            }
        }
        return null;
    }
}
exports.UiSessionTokens = UiSessionTokens;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GrpcErrorUtil = void 0;
const access_nodejs_client_1 = __webpack_require__(9);
class GrpcErrorUtil {
    static handleError(e, logger) {
        if (e instanceof access_nodejs_client_1.GrpcError) {
            logger.error(new Error(`GRPC error - ${access_nodejs_client_1.GrpcErrorType[e.code]} ${e.message ? e.message : ''}`));
        }
        else {
            logger.error(e);
        }
    }
}
exports.GrpcErrorUtil = GrpcErrorUtil;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(273), exports);
__exportStar(__webpack_require__(274), exports);
__exportStar(__webpack_require__(275), exports);
__exportStar(__webpack_require__(276), exports);


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.XrayService = void 0;
const xray_nodejs_client_1 = __webpack_require__(85);
const LoggerFactory_1 = __webpack_require__(1);
const ClientFactory_1 = __webpack_require__(18);
const Decorators_1 = __webpack_require__(2);
const MothershipTopologyService_1 = __webpack_require__(30);
const Constants_1 = __webpack_require__(0);
const JFrogService_1 = __webpack_require__(32);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
class XrayService extends JFrogService_1.JFrogService {
    static async getBuildByName(xrayConfig, authData) {
        const model = XrayService.reqToVersionsRequestModel(xrayConfig);
        const client = await XrayService.getClient(authData);
        return client.builds().searchVersions(model);
    }
    static async getBundleByName(xrayConfig, authData) {
        const model = XrayService.reqToVersionsRequestModel(xrayConfig);
        const client = await XrayService.getClient(authData);
        return client.bundles().searchVersions(model);
    }
    static async getPackageByName(xrayConfig, pkgType, authData) {
        const model = XrayService.reqToVersionsRequestModel(xrayConfig);
        const client = await XrayService.getClient(authData);
        return client.pkgSpecificType(pkgType).searchVersions(model);
    }
    static async getVersionsByIds(name, ids, service, authData, buildRepo) {
        if (ids.length === 0) {
            return { versions: [] };
        }
        const versions = ids.map((id) => {
            return { version: id };
        });
        const model = new xray_nodejs_client_1.VersionsByIdRequestModel(name, versions, buildRepo);
        const client = await XrayService.getClient(authData);
        return await client[service]().getVersionsByIds(model);
    }
    static exists() {
        logger.debug('in XrayService::exists');
        return MothershipTopologyService_1.default.serviceExists('XRAY');
    }
    static getRequestXrayInformation(ctx) {
        var _a, _b;
        let xrayExists;
        logger.debug('checking xray exists');
        xrayExists = XrayService.exists();
        logger.debug(`xray exists : ${xrayExists}`);
        let isXrayRequest = false;
        logger.debug('checking if is xray request');
        if (ctx && (ctx.cve || ((_a = ctx.licenses) === null || _a === void 0 ? void 0 : _a.length) || ((_b = ctx.severities) === null || _b === void 0 ? void 0 : _b.length))) {
            isXrayRequest = true;
        }
        return {
            isXrayRequest,
            xrayExists,
        };
    }
    static async getTopology(authData) {
        const client = await XrayService.getClient(authData);
        // todo delete the casting after client will change it type
        // @ts-ignore
        return client.system().getNodesTopology();
    }
    static async getCurrentUserInfo(authData) {
        const client = await XrayService.getClient(authData);
        return client.system().getCurrentUserInfo();
    }
    static async getFooter(authData) {
        const client = await XrayService.getClient(authData);
        return await client.system().getFooter();
    }
    static async getReports(authData, filters, pagination) {
        // TODO: Add IFilter type and IXrayPagination type
        const client = await XrayService.getClient(authData);
        return await client.reports().getAllReports(filters, pagination);
    }
    static async getVulnerabilityReportResults(authData, id, params, body) {
        const client = await XrayService.getClient(authData);
        return await client.reports().getVulnerabilityReportResults(id, params, body);
    }
    static async generateVulnerabilityReport(authData, payload) {
        const client = await XrayService.getClient(authData);
        return await client.reports().generateVulnerabilityReport(payload);
    }
    static async notifyConfigChanges(configEvent, authData) {
        logger.silly(`notifying xray of ${configEvent} config changes`);
        const client = await XrayService.getClient(authData);
        return await client.system().notifyConfigChange(configEvent);
    }
    static async isOnboarding(authData) {
        const client = await XrayService.getClient(authData);
        const res = await client.system().getOnboardingConfig();
        return !res.finished;
    }
    static async getOnboardingInfo(authData) {
        const client = await XrayService.getClient(authData);
        try {
            await client.system().ping();
            return await client.system().getOnboardingConfig();
        }
        catch (e) {
            return null;
        }
    }
    // currently here,
    // if there will be more changes, make it accept a dedicated body and not req obj
    // the request can come from metadata or global search
    // the only diff is in the name parameter,
    // GS : req.params.name
    // METADATA : body.pkgid
    static reqToXrayConfig(req) {
        var _a;
        const body = ((_a = req.body) === null || _a === void 0 ? void 0 : _a.searchModel) || req.body;
        return {
            name: req.params.name || body.pkgid,
            severities: body.severities,
            licenses: body.licenses,
            cve: body.cve,
            before: body.before,
            after: body.after,
            num_of_rows: body.num_of_rows || 500,
            order_by: body.order_by || 'created',
            direction: body.direction || 'asc',
        };
    }
    static async deleteNode(serviceId, nodeId, authData) {
        const client = await XrayService.getClient(authData);
        return client.system().deleteNode(serviceId, nodeId);
    }
    static async getFrontendManifest() {
        const client = await XrayService.getAdminClient();
        return client.frontEnd().getFrontEndVersionManifest();
    }
    static async getFrontendVersionStream(version, os) {
        const client = await XrayService.getAdminClient();
        return client.frontEnd().downloadFrontEndVersion(version, os);
    }
    static reqToVersionsRequestModel(reqVersionsConfig) {
        const { name, severities, licenses, cve, before, after, num_of_rows, direction, order_by } = reqVersionsConfig;
        return new xray_nodejs_client_1.VersionsRequestModel(name, severities, licenses, cve, before, after, num_of_rows, order_by, direction);
    }
    static async getClient(ctx) {
        return new ClientFactory_1.ClientFactory(Constants_1.SERVICES.XRAY.KEY).getWithAuth(ctx);
    }
    static async getAdminClient() {
        return new ClientFactory_1.ClientFactory(Constants_1.SERVICES.XRAY.KEY).getWithAdminToken();
    }
    static async getUnifiedLogsInfo(authData, nodeId) {
        const client = await XrayService.getClient(authData);
        if (nodeId) {
            client.updateConfig({
                headers: { [Constants_1.CUSTOM_HEADERS.X_JFROG_ROUTE_TO]: nodeId },
            });
        }
        return client.system().getLogsInfo();
    }
    static async getUnifiedLogsData(authData, nodeId, fileSize, id) {
        const client = await XrayService.getClient(authData);
        if (nodeId) {
            client.updateConfig({
                headers: { [Constants_1.CUSTOM_HEADERS.X_JFROG_ROUTE_TO]: nodeId },
            });
        }
        return client.system().getLogsData(fileSize, id);
    }
}
__decorate([
    Decorators_1.methodLog({ logger })
], XrayService, "getBuildByName", null);
__decorate([
    Decorators_1.methodLog({ logger })
], XrayService, "getBundleByName", null);
__decorate([
    Decorators_1.methodLog({ logger })
], XrayService, "getPackageByName", null);
__decorate([
    Decorators_1.methodLog({ logger })
], XrayService, "getVersionsByIds", null);
__decorate([
    Decorators_1.methodLog({ logger })
], XrayService, "exists", null);
__decorate([
    Decorators_1.methodLog({ logger })
], XrayService, "getRequestXrayInformation", null);
__decorate([
    Decorators_1.methodLog({ logger })
], XrayService, "getTopology", null);
__decorate([
    Decorators_1.methodLog({ logger })
], XrayService, "getCurrentUserInfo", null);
__decorate([
    Decorators_1.methodLog({ logger })
], XrayService, "getFooter", null);
__decorate([
    Decorators_1.methodLog({ logger })
], XrayService, "getReports", null);
__decorate([
    Decorators_1.methodLog({ logger })
], XrayService, "getVulnerabilityReportResults", null);
__decorate([
    Decorators_1.methodLog({ logger })
], XrayService, "generateVulnerabilityReport", null);
__decorate([
    Decorators_1.methodLog({ logger })
], XrayService, "notifyConfigChanges", null);
__decorate([
    Decorators_1.methodLog({ logger })
], XrayService, "isOnboarding", null);
__decorate([
    Decorators_1.methodLog({ logger })
], XrayService, "getOnboardingInfo", null);
__decorate([
    Decorators_1.methodLog({ logger })
], XrayService, "deleteNode", null);
__decorate([
    Decorators_1.methodLog({ logger })
], XrayService, "getFrontendManifest", null);
__decorate([
    Decorators_1.methodLog({ logger })
], XrayService, "getFrontendVersionStream", null);
__decorate([
    Decorators_1.methodLog({ logger })
], XrayService, "reqToVersionsRequestModel", null);
__decorate([
    Decorators_1.methodLog({ logger })
], XrayService, "getClient", null);
__decorate([
    Decorators_1.methodLog({ logger })
], XrayService, "getAdminClient", null);
__decorate([
    Decorators_1.methodLog({ logger })
], XrayService, "getUnifiedLogsInfo", null);
__decorate([
    Decorators_1.methodLog({ logger })
], XrayService, "getUnifiedLogsData", null);
exports.XrayService = XrayService;


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MissionControlService = void 0;
const ClientFactory_1 = __webpack_require__(18);
const LoggerFactory_1 = __webpack_require__(1);
const Decorators_1 = __webpack_require__(2);
const Constants_1 = __webpack_require__(0);
const JFrogService_1 = __webpack_require__(32);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
class MissionControlService extends JFrogService_1.JFrogService {
    static async notifyConfigChanges(configEvent, authData) {
        logger.silly(`notifying mission control of ${configEvent} config changes`);
        const client = await MissionControlService.getClient(authData);
        return await client.system().notifyConfigChange(configEvent);
    }
    static async getFooter(authData) {
        const client = await MissionControlService.getClient(authData);
        return await client.system().getFooter();
    }
    static async getOnboardingInfo(authData) {
        const client = await MissionControlService.getClient(authData);
        return client.system().getOnboardingConfig();
    }
    static async getFrontendManifest() {
        const client = await MissionControlService.getAdminClient();
        return client.frontEnd().getFrontEndVersionManifest();
    }
    static async getFrontendVersionStream(version, os) {
        const client = await MissionControlService.getAdminClient();
        return client.frontEnd().downloadFrontEndVersion(version, os);
    }
    static async getClient(ctx) {
        return new ClientFactory_1.ClientFactory(Constants_1.SERVICES.MISSION_CONTROL.KEY).getWithAuth(ctx);
    }
    static async getUnifiedLogsInfo(authData, nodeId) {
        const client = await MissionControlService.getClient(authData);
        if (nodeId) {
            client.updateConfig({
                headers: { [Constants_1.CUSTOM_HEADERS.X_JFROG_ROUTE_TO]: nodeId },
            });
        }
        return client.system().getLogsInfo();
    }
    static async getUnifiedLogsData(authData, nodeId, fileSize, id) {
        const client = await MissionControlService.getClient(authData);
        if (nodeId) {
            client.updateConfig({
                headers: { [Constants_1.CUSTOM_HEADERS.X_JFROG_ROUTE_TO]: nodeId },
            });
        }
        return client.system().getLogsData(fileSize, id);
    }
    static async getAdminClient() {
        return new ClientFactory_1.ClientFactory(Constants_1.SERVICES.MISSION_CONTROL.KEY).getWithAdminToken();
    }
}
__decorate([
    Decorators_1.methodLog()
], MissionControlService, "notifyConfigChanges", null);
__decorate([
    Decorators_1.methodLog({ logger })
], MissionControlService, "getFooter", null);
__decorate([
    Decorators_1.methodLog({ logger })
], MissionControlService, "getOnboardingInfo", null);
__decorate([
    Decorators_1.methodLog({ logger })
], MissionControlService, "getFrontendManifest", null);
__decorate([
    Decorators_1.methodLog()
], MissionControlService, "getClient", null);
__decorate([
    Decorators_1.methodLog({ logger })
], MissionControlService, "getUnifiedLogsInfo", null);
__decorate([
    Decorators_1.methodLog({ logger })
], MissionControlService, "getUnifiedLogsData", null);
__decorate([
    Decorators_1.methodLog({ logger })
], MissionControlService, "getAdminClient", null);
exports.MissionControlService = MissionControlService;


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtractUtil = void 0;
const path_1 = __webpack_require__(8);
const AdmZip = __webpack_require__(284);
const fs_1 = __webpack_require__(22);
const tar_1 = __webpack_require__(285);
const Constants_1 = __webpack_require__(0);
const stream = __webpack_require__(108);
const util_1 = __webpack_require__(67);
const pipeline = util_1.promisify(stream.pipeline);
class ExtractUtil {
    static async extractStream(stream, distName) {
        if (Constants_1.OPERATION_SYSTEM === "windows") {
            return await this.extractZip(stream, distName);
        }
        else {
            return await this.extractTar(stream, distName);
        }
    }
    static async extractTar(readStream, distName) {
        if (!fs_1.existsSync(distName)) {
            fs_1.mkdirSync(distName);
        }
        const extractStream = tar_1.extract({
            cwd: distName,
            filter: path => path.includes("frontend/bin"),
            strip: 2
        });
        await pipeline(readStream, extractStream);
    }
    static async extractZip(stream, distName) {
        const extractedFileLocation = path_1.join(__dirname, 'temp.zip');
        try {
            await this.downloadZip(stream, extractedFileLocation);
            const zip = new AdmZip(extractedFileLocation);
            const allowedDirectories = ["frontend/bin/server", "frontend/bin/client"];
            zip.getEntries()
                .filter(this.shouldExtractFactory(allowedDirectories))
                .forEach(entry => {
                zip.extractEntryTo(entry, this.getFileName(distName, entry), false, true);
            });
        }
        finally {
            if (fs_1.existsSync(extractedFileLocation)) {
                fs_1.unlinkSync(extractedFileLocation);
            }
        }
    }
    static async downloadZip(readStream, extractedFileLocation) {
        const ws = fs_1.createWriteStream(extractedFileLocation);
        await pipeline(readStream, ws);
    }
    ;
    static getFileName(root, entry) {
        return path_1.dirname(path_1.join(root, entry.entryName.replace('frontend/bin', "")));
    }
    static shouldExtractFactory(allowedDirectories) {
        return (entry) => !entry.isDirectory &&
            allowedDirectories.some(dirName => entry.entryName.includes(dirName));
    }
}
exports.ExtractUtil = ExtractUtil;


/***/ }),
/* 108 */
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.VersionsJsonUtils = void 0;
const fs_1 = __webpack_require__(22);
const path_1 = __webpack_require__(8);
const semver = __webpack_require__(44);
const LoggerFactory_1 = __webpack_require__(1);
const Constants_1 = __webpack_require__(0);
const VERSIONS_JSON_PATH = path_1.join(Constants_1.FRONTEND_ROOT_PATH, 'versions.json');
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
class VersionsJsonUtils {
    static get json() {
        const jsonString = fs_1.readFileSync(VERSIONS_JSON_PATH, 'utf-8');
        return JSON.parse(jsonString);
    }
    static get available() {
        const exists = fs_1.existsSync(VERSIONS_JSON_PATH);
        logger.debug(`versions.json ${exists ? '' : 'doe\'s not'} exists in ${VERSIONS_JSON_PATH}`);
        return exists;
    }
    static get current() {
        return VersionsJsonUtils.json.currentVersion;
    }
    static get previous() {
        if (VersionsJsonUtils.json.availableVersions.length <= 1) {
            return null;
        }
        return VersionsJsonUtils.getHighestVersion(VersionsJsonUtils.json.availableVersions
            .filter((v) => v !== VersionsJsonUtils.json.currentVersion));
    }
    static getLowestVersion(versions) {
        if (versions.length === 0) {
            return null;
        }
        if (versions.length === 1) {
            return versions[0];
        }
        return versions.reduce((lowest, current) => (semver.lt(current, lowest) ? current : lowest));
    }
    static getHighestVersion(versions) {
        if (versions.length < 2) {
            return versions.pop();
        }
        return versions.reduce((highest, current) => (semver.gt(current, highest) ? current : highest));
    }
    static getVersionJsonLowestVersion() {
        const versions = VersionsJsonUtils.json.availableVersions;
        return VersionsJsonUtils.getLowestVersion(versions);
    }
    static getVersionJsonHighestVersion() {
        const versions = VersionsJsonUtils.json.availableVersions;
        return VersionsJsonUtils.getHighestVersion(versions);
    }
    getVersionJsonCurrentVersion() {
        return VersionsJsonUtils.json.currentVersion;
    }
    static changeAndAddVersion(version) {
        if (!semver.valid(version)) {
            throw new Error(`Invalid semver : (${version}) will not add to versions.json`);
        }
        logger.info(`rewriting ${VERSIONS_JSON_PATH} file with new version : ${version}`);
        const json = VersionsJsonUtils.json;
        json.availableVersions.push(version);
        json.availableVersions = [...new Set(json.availableVersions)];
        json.currentVersion = version;
        const stringifyJson = JSON.stringify(json);
        logger.info(`writing ${stringifyJson} to versions.json`);
        fs_1.writeFileSync(VERSIONS_JSON_PATH, stringifyJson, 'utf-8');
    }
}
exports.VersionsJsonUtils = VersionsJsonUtils;


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.VersionUpdateUtils = exports.VERSION_UPDATE_SERVICES = void 0;
const crypto_1 = __webpack_require__(43);
const util_1 = __webpack_require__(67);
const stream = __webpack_require__(108);
const LoggerFactory_1 = __webpack_require__(1);
const semver = __webpack_require__(44);
const VersionUpdate_1 = __webpack_require__(68);
const Constants_1 = __webpack_require__(0);
const uniq = __webpack_require__(288);
const pipeline = util_1.promisify(stream.pipeline);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
exports.VERSION_UPDATE_SERVICES = [
    Constants_1.SERVICES.XRAY.TYPE,
    Constants_1.SERVICES.MISSION_CONTROL.TYPE,
    Constants_1.SERVICES.DISTRIBUTION.TYPE,
    Constants_1.SERVICES.PIPELINES.TYPE
];
class VersionUpdateUtils {
    static getAvailableServicesTypesFromTopology(topology) {
        const serviceTypes = (node) => {
            return node.service_id.split('@')[0];
        };
        const onlyVersionUpdateServices = (topologyServiceType) => {
            return exports.VERSION_UPDATE_SERVICES
                .some(serviceType => serviceType === topologyServiceType);
        };
        const availableServices = topology.services
            .map(serviceTypes)
            .filter(onlyVersionUpdateServices);
        return uniq(availableServices);
    }
    static isMajorSame([_, { frontend_version: version }]) {
        return semver.diff(version, VersionUpdate_1.VersionUpdate.currentVersion) !== 'major';
    }
    ;
    static async validateChecksum(rs, checksum) {
        if (!checksum) {
            logger.debug(`checksum [${checksum}] is not available, will not validate`);
            return;
        }
        const streamChecksum = await VersionUpdateUtils.getStreamChecksum(rs);
        if (streamChecksum !== checksum) {
            throw new Error(`downloaded bundle checksum (${streamChecksum}) doe's not equal given checksum(${checksum})`);
        }
        logger.debug(`frontend bundle checksum matches given checksum`);
        return;
    }
    static async getStreamChecksum(rs) {
        const hash = crypto_1.createHash('sha256');
        hash.setEncoding('hex');
        await pipeline(rs, hash);
        return hash.read();
    }
}
exports.VersionUpdateUtils = VersionUpdateUtils;


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const LoggerFactory_1 = __webpack_require__(1);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
// todo, all the job run by default, maybe set them to idle and only run them on command
class JobIntervals {
    static add(ctx) {
        ctx.coldStart = ctx.coldStart || 0;
        ctx.args = ctx.args || [];
        const { fn, interval, coldStart, id, args } = ctx;
        if (!JobIntervals.jobs.has(id)) {
            setTimeout(() => {
                fn(...args);
                JobIntervals.jobs.set(id, setInterval(() => {
                    logger.silly(`JobIntervals running [id : ${id} :: function  id : ${fn.name}`);
                    try {
                        fn(...args);
                    }
                    catch (e) {
                        logger.error(`Function ${fn.name} failed with error : ${e}`);
                    }
                }, interval));
            }, coldStart);
        }
    }
    static remove(id) {
        if (JobIntervals.jobs.has(id)) {
            clearInterval(JobIntervals.jobs.get(id));
            JobIntervals.jobs.delete(id);
        }
    }
    static clearAll() {
        JobIntervals.jobs.clear();
    }
}
exports.default = JobIntervals;
JobIntervals.jobs = new Map();


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DistributionRoute_1 = __webpack_require__(311);
Object.defineProperty(exports, "distributionRouter", { enumerable: true, get: function () { return DistributionRoute_1.distributionRouter; } });
var MissionControlRoute_1 = __webpack_require__(372);
Object.defineProperty(exports, "missionControlRouter", { enumerable: true, get: function () { return MissionControlRoute_1.missionControlRouter; } });
var InsightRoute_1 = __webpack_require__(373);
Object.defineProperty(exports, "insightRouter", { enumerable: true, get: function () { return InsightRoute_1.insightRouter; } });
var XrayRoute_1 = __webpack_require__(374);
Object.defineProperty(exports, "xrayRouter", { enumerable: true, get: function () { return XrayRoute_1.xrayRouter; } });
var MetadataRoute_1 = __webpack_require__(376);
Object.defineProperty(exports, "metadataRouter", { enumerable: true, get: function () { return MetadataRoute_1.metadataRouter; } });
var AccessRoute_1 = __webpack_require__(382);
Object.defineProperty(exports, "accessRouter", { enumerable: true, get: function () { return AccessRoute_1.accessRouter; } });
var GlobalSearchRoute_1 = __webpack_require__(390);
Object.defineProperty(exports, "globalSearchRouter", { enumerable: true, get: function () { return GlobalSearchRoute_1.globalSearchRouter; } });
var LoginRoutes_1 = __webpack_require__(392);
Object.defineProperty(exports, "loginRouter", { enumerable: true, get: function () { return LoginRoutes_1.loginRouter; } });
var SystemRoute_1 = __webpack_require__(397);
Object.defineProperty(exports, "systemRouter", { enumerable: true, get: function () { return SystemRoute_1.systemRouter; } });
var ArtifactoryRoute_1 = __webpack_require__(400);
Object.defineProperty(exports, "artifactoryRouter", { enumerable: true, get: function () { return ArtifactoryRoute_1.artifactoryRouter; } });
var DownloadRoute_1 = __webpack_require__(402);
Object.defineProperty(exports, "downloadRouter", { enumerable: true, get: function () { return DownloadRoute_1.downloadRouter; } });
var PipelinesRoute_1 = __webpack_require__(403);
Object.defineProperty(exports, "pipelinesRouter", { enumerable: true, get: function () { return PipelinesRoute_1.pipelinesRouter; } });
var ProjectsRoute_1 = __webpack_require__(404);
Object.defineProperty(exports, "projectsRouter", { enumerable: true, get: function () { return ProjectsRoute_1.projectsRouter; } });
var EventRoute_1 = __webpack_require__(405);
Object.defineProperty(exports, "eventRouter", { enumerable: true, get: function () { return EventRoute_1.eventRouter; } });
var ReplicatorRoute_1 = __webpack_require__(406);
Object.defineProperty(exports, "replicatorRouter", { enumerable: true, get: function () { return ReplicatorRoute_1.replicatorRouter; } });
var ApiRoute_1 = __webpack_require__(407);
Object.defineProperty(exports, "apiRouter", { enumerable: true, get: function () { return ApiRoute_1.apiRouter; } });
var AccessEntitiesRoute_1 = __webpack_require__(125);
Object.defineProperty(exports, "accessEntitiesRouter", { enumerable: true, get: function () { return AccessEntitiesRoute_1.accessEntitiesRouter; } });


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const HttpSsoAuthenticationController_1 = __webpack_require__(114);
const CrowdAuthenticationController_1 = __webpack_require__(31);
const AuthenticationController_1 = __webpack_require__(39);
const AnonymousAuthenticationController_1 = __webpack_require__(66);
const authenticationFilters = [
    AnonymousAuthenticationController_1.AnonymousAuthenticationController.setAnonymousRequest,
    AuthenticationController_1.AuthenticationController.setOpenRequests,
    HttpSsoAuthenticationController_1.HttpSsoAuthenticationController.httpSsoAuthentication,
    CrowdAuthenticationController_1.default.crowdCookieLogin,
    AuthenticationController_1.AuthenticationController.validateUiSessionAndSaveUserOnReq,
];
exports.default = authenticationFilters;


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpSsoAuthenticationController = exports.UI_LOGIN_HTTP_SSO_ROUTE = void 0;
const Constants_1 = __webpack_require__(0);
const LoggerFactory_1 = __webpack_require__(1);
const UiSessionTokens_1 = __webpack_require__(102);
const PlatformConfiguration_1 = __webpack_require__(11);
const Services_1 = __webpack_require__(3);
const AuthErrorAuthenticateRequest_1 = __webpack_require__(95);
const AuthenticationController_1 = __webpack_require__(39);
const LoginController_1 = __webpack_require__(29);
const LoggerDecorator_1 = __webpack_require__(17);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
exports.UI_LOGIN_HTTP_SSO_ROUTE = '/sso-login/http-sso-login';
const NO_UI_SESSION_TOKEN = 'http sso header exists but no ui session token';
const ACCESS_VERIFY_FAILED = 'http sso ui session token verify failed';
const NO_MATCH = "http sso header username doesn't match ui session token extension";
class HttpSsoAuthenticationController extends AuthenticationController_1.AuthenticationController {
    static async httpSsoAuthentication(req, res, next) {
        try {
            if (AuthenticationController_1.AuthenticationController.skipAuthentication(req) || !PlatformConfiguration_1.default.httpSsoProxied) {
                return next();
            }
            const httpSsoUserName = HttpSsoAuthenticationController.getHttpSsoUserName(req);
            if (!httpSsoUserName) {
                return next();
            }
            const uiSessionTokens = UiSessionTokens_1.UiSessionTokens.getUiSessionTokensFromCookies(req.cookies);
            const shouldRedirectToAuthMask = await HttpSsoAuthenticationController.shouldRedirectToAuthMask(uiSessionTokens, httpSsoUserName);
            if (shouldRedirectToAuthMask.result) {
                return HttpSsoAuthenticationController.redirectToUiHttpSsoLoginMask(res, shouldRedirectToAuthMask.reason);
            }
            await AuthenticationController_1.AuthenticationController.authenticateRequestAndSaveUserInfo(req);
            return next();
        }
        catch (e) {
            return AuthenticationController_1.AuthenticationController.handleAuthFiltersErrors(req, res, next, e);
        }
    }
    static async authenticateUsingHttpSso(req, res) {
        const httpSsoHeaderName = PlatformConfiguration_1.default.httpSsoHeaderName;
        const userName = req.get(httpSsoHeaderName);
        const { data: getCurrentUserResult } = await Services_1.ArtifactoryService.httpSsoLogin(httpSsoHeaderName, userName);
        const platformUser = getCurrentUserResult;
        const isValidUser = Services_1.LoginService.verifyUserResponse(getCurrentUserResult);
        if (isValidUser) {
            platformUser.httpSsoUserName = userName;
            platformUser.realm = Constants_1.REALM.HTTP_SSO;
            await HttpSsoAuthenticationController.createAndSetUiSessionTokenOnResponse(platformUser, res);
            return platformUser;
        }
        else {
            return null;
        }
    }
    static async shouldRedirectToAuthMask(uiSessionTokens, httpSsoUserName) {
        if (!uiSessionTokens) {
            return {
                result: true,
                reason: NO_UI_SESSION_TOKEN,
            };
        }
        const verifyTokenResponse = await Services_1.AccessTokenService.verifyToken(uiSessionTokens.accessToken);
        if (!verifyTokenResponse.successful) {
            return {
                result: true,
                reason: ACCESS_VERIFY_FAILED,
            };
        }
        const userNameSameAsUiSessionToken = await HttpSsoAuthenticationController.userNameMatchesUiSessionToken(uiSessionTokens, httpSsoUserName);
        if (!userNameSameAsUiSessionToken) {
            return {
                result: true,
                reason: NO_MATCH,
            };
        }
        return {
            result: false,
        };
    }
    static redirectToUiHttpSsoLoginMask(res, reason) {
        logger.debug(`${reason}. redirecting to ${exports.UI_LOGIN_HTTP_SSO_ROUTE}`);
        res.header(Constants_1.CUSTOM_HEADERS.SPA_LOCATION, exports.UI_LOGIN_HTTP_SSO_ROUTE);
        res.sendStatus(Constants_1.STATUS_CODES.SSO_LOGIN);
    }
    static async userNameMatchesUiSessionToken(uiSessionTokens, httpSsoUserName) {
        const accessToken = await Services_1.AccessTokenService.parseToken(uiSessionTokens.accessToken);
        const tokenUserName = accessToken.parsedExtension.httpSsoUserName;
        return httpSsoUserName === tokenUserName;
    }
    static getHttpSsoUserName(req) {
        const httpSsoHeaderName = PlatformConfiguration_1.default.httpSsoHeaderName;
        return req.get(httpSsoHeaderName);
    }
    static async createAndSetUiSessionTokenOnResponse(user, res) {
        const uiSessionToken = await Services_1.AccessTokenService.createUISessionToken(user);
        if (uiSessionToken) {
            await LoginController_1.LoginController.setUiSessionTokens(res, uiSessionToken);
        }
        else {
            throw new AuthErrorAuthenticateRequest_1.AuthErrorAuthenticateRequest();
        }
    }
}
__decorate([
    LoggerDecorator_1.methodLog({ logger })
], HttpSsoAuthenticationController, "httpSsoAuthentication", null);
__decorate([
    LoggerDecorator_1.methodLog({ logger })
], HttpSsoAuthenticationController, "authenticateUsingHttpSso", null);
exports.HttpSsoAuthenticationController = HttpSsoAuthenticationController;


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CrowdLoginRouteHandler = void 0;
const CrowdAuthenticationController_1 = __webpack_require__(31);
const AuthErrorFailedCrowdCookieLogin_1 = __webpack_require__(327);
const LoggerFactory_1 = __webpack_require__(1);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
class CrowdLoginRouteHandler {
    static async crowdLogin(req, res, next) {
        try {
            let authenticatedUser;
            authenticatedUser = await CrowdAuthenticationController_1.default.checkForCrowdCookieAuthentication(req, res);
            if (authenticatedUser) {
                return res.send(authenticatedUser);
            }
            return next(new AuthErrorFailedCrowdCookieLogin_1.AuthErrorFailedCrowdCookieLogin());
        }
        catch (e) {
            logger.error('exception in crowd login - ' + e);
            return next(new AuthErrorFailedCrowdCookieLogin_1.AuthErrorFailedCrowdCookieLogin());
        }
    }
}
exports.CrowdLoginRouteHandler = CrowdLoginRouteHandler;


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ArtifactoryController_1 = __webpack_require__(335);
Object.defineProperty(exports, "ArtifactoryController", { enumerable: true, get: function () { return ArtifactoryController_1.ArtifactoryController; } });


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonController = void 0;
const JFrogController_1 = __webpack_require__(5);
const LoggerFactory_1 = __webpack_require__(1);
const Decorators_1 = __webpack_require__(2);
/**
 * this class is used to group similar Controller functions only differentiating in the service used
 */
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
class CommonController extends JFrogController_1.JFrogController {
    constructor(service) {
        super();
        this.service = service;
    }
    async deleteNode(req, res, next) {
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        const id = req.params.id;
        logger.debug(`about to delete ${id} node`);
        res.send(await this.service.deleteNode(id, authData));
    }
}
__decorate([
    Decorators_1.controllerErrorHandler()
], CommonController.prototype, "deleteNode", null);
exports.CommonController = CommonController;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsController = void 0;
const JFrogController_1 = __webpack_require__(5);
const Decorators_1 = __webpack_require__(2);
const Access_1 = __webpack_require__(27);
const express_validator_1 = __webpack_require__(15);
const Constants_1 = __webpack_require__(0);
const Services_1 = __webpack_require__(3);
const ProjectsRolesController_1 = __webpack_require__(337);
const { DEFAULT_PROJECT_KEY } = Constants_1.PROJECTS;
class ProjectsController extends JFrogController_1.JFrogController {
    static roles() {
        return ProjectsRolesController_1.ProjectsRolesController;
    }
    static async isUserProjectAdmin(req, res, _) {
        const errors = express_validator_1.validationResult(req);
        if (!errors.isEmpty()) {
            res.status(Constants_1.STATUS_CODES.BAD_REQUEST).json({ errors: errors.array() });
            return;
        }
        const additionalGroups = req.userGroups;
        const { userName } = req.params;
        const userGroupsApply = req.query.userGroupsApply !== 'false';
        const result = await Access_1.AccessService.isUserProjectAdmin(DEFAULT_PROJECT_KEY, userName, additionalGroups, userGroupsApply);
        res.json(result);
    }
    static async isGroupProjectAdmin(req, res, _) {
        const errors = express_validator_1.validationResult(req);
        if (!errors.isEmpty()) {
            res.status(Constants_1.STATUS_CODES.BAD_REQUEST).json({ errors: errors.array() });
            return;
        }
        const { groupName } = req.params;
        const result = await Access_1.AccessService.isGroupProjectAdmin(DEFAULT_PROJECT_KEY, groupName);
        res.json(result);
    }
    static async setUserAsProjectAdmin(req, res, _) {
        const errors = express_validator_1.validationResult(req);
        if (!errors.isEmpty()) {
            res.status(Constants_1.STATUS_CODES.BAD_REQUEST).json({ errors: errors.array() });
            return;
        }
        const { userName } = req.params;
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        const result = await Access_1.AccessService.setUserAsProjectAdmin(authData, DEFAULT_PROJECT_KEY, userName);
        res.json(result);
    }
    static async setGroupAsProjectAdmin(req, res, _) {
        const errors = express_validator_1.validationResult(req);
        if (!errors.isEmpty()) {
            res.status(Constants_1.STATUS_CODES.BAD_REQUEST).json({ errors: errors.array() });
            return;
        }
        const { groupName } = req.params;
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        const result = await Access_1.AccessService.setGroupAsProjectAdmin(authData, DEFAULT_PROJECT_KEY, groupName);
        res.json(result);
    }
    static async unsetUserAsProjectAdmin(req, res, _) {
        const errors = express_validator_1.validationResult(req);
        if (!errors.isEmpty()) {
            res.status(Constants_1.STATUS_CODES.BAD_REQUEST).json({ errors: errors.array() });
            return;
        }
        const { userName } = req.params;
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        const result = await Access_1.AccessService.unsetUserAsProjectAdmin(authData, DEFAULT_PROJECT_KEY, userName);
        res.json(result);
    }
    static async unsetGroupAsProjectAdmin(req, res, _) {
        const errors = express_validator_1.validationResult(req);
        if (!errors.isEmpty()) {
            res.status(Constants_1.STATUS_CODES.BAD_REQUEST).json({ errors: errors.array() });
            return;
        }
        const { groupName } = req.params;
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        const result = await Access_1.AccessService.unsetGroupAsProjectAdmin(authData, DEFAULT_PROJECT_KEY, groupName);
        res.json(result);
    }
    static async get(req, res, _) {
        const { projectKey } = req.params;
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        const getProjectResponse = await Services_1.ProjectsService.get(authData, projectKey);
        res.json(getProjectResponse);
    }
    static async getAll(req, res, _) {
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        const getProjectsResponse = await Services_1.ProjectsService.getAll(authData);
        res.json(getProjectsResponse);
    }
    static async create(req, res, _) {
        const project = req.body;
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        const projectResponse = await Services_1.ProjectsService.create(authData, project);
        res.json(projectResponse);
    }
    static async edit(req, res, _) {
        const project = req.body;
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        const allEditPromises = await Services_1.ProjectsService.edit(authData, project);
        res.json(allEditPromises);
    }
    static async assignReposToProject(req, res, _) {
        const assignments = req.body;
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        await Services_1.ProjectsService.assignReposToProject(authData, assignments);
        res.send(Constants_1.STATUS_CODES.OK);
    }
    static async shareRepoWithProjects(req, res) {
        const resourceSharingInfo = req.body;
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        await Services_1.ProjectsService.shareRepoWithProjects(authData, resourceSharingInfo);
        res.send(Constants_1.STATUS_CODES.OK);
    }
    static async editDescription(req, res, _) {
        const { description } = req.body;
        const { projectKey } = req.params;
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        const editDescriptionResponse = await Services_1.ProjectsService.editDescription(authData, description, projectKey);
        res.json(editDescriptionResponse);
    }
    static async editUsers(req, res, _) {
        const { entities: users } = req.body;
        const { projectKey } = req.params;
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        const editUsersResponse = await Services_1.ProjectsService.editUsers(authData, users, projectKey);
        res.json(editUsersResponse);
    }
    static async editGroups(req, res, _) {
        const { entities: groups } = req.body;
        const { projectKey } = req.params;
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        const editGroupsResponse = await Services_1.ProjectsService.editGroups(authData, groups, projectKey);
        res.json(editGroupsResponse);
    }
    static async delete(req, res, _) {
        const { projectKey } = req.params;
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        const deleteProjectResponse = await Services_1.ProjectsService.delete(authData, projectKey);
        res.json(deleteProjectResponse);
    }
    static async batchDeleteUsersFromProject(req, res, _) {
        const { entities: users } = req.body;
        const { projectKey } = req.params;
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        const deleteUsersResponse = await Services_1.ProjectsService.deleteUsers(authData, projectKey, users);
        res.json(deleteUsersResponse);
    }
    static async deleteUserFromProject(req, res, _) {
        const { projectKey, userName } = req.params;
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        const deleteUserResponse = await Services_1.ProjectsService.deleteGroups(authData, projectKey, [userName]);
        res.json(deleteUserResponse);
    }
    static async batchDeleteGroupsFromProject(req, res, _) {
        const { entities: groups } = req.body;
        const { projectKey } = req.params;
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        const deleteGroupsResponse = await Services_1.ProjectsService.deleteGroups(authData, projectKey, groups);
        res.json(deleteGroupsResponse);
    }
    static async deleteGroupFromProject(req, res, _) {
        const { projectKey, groupName } = req.params;
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        const deleteGroupResponse = await Services_1.ProjectsService.deleteGroups(authData, projectKey, [groupName]);
        res.json(deleteGroupResponse);
    }
}
__decorate([
    Decorators_1.controllerErrorHandler()
], ProjectsController, "isUserProjectAdmin", null);
__decorate([
    Decorators_1.controllerErrorHandler()
], ProjectsController, "isGroupProjectAdmin", null);
__decorate([
    Decorators_1.controllerErrorHandler()
], ProjectsController, "setUserAsProjectAdmin", null);
__decorate([
    Decorators_1.controllerErrorHandler()
], ProjectsController, "setGroupAsProjectAdmin", null);
__decorate([
    Decorators_1.controllerErrorHandler()
], ProjectsController, "unsetUserAsProjectAdmin", null);
__decorate([
    Decorators_1.controllerErrorHandler()
], ProjectsController, "unsetGroupAsProjectAdmin", null);
__decorate([
    Decorators_1.controllerErrorHandler()
], ProjectsController, "get", null);
__decorate([
    Decorators_1.controllerErrorHandler()
], ProjectsController, "getAll", null);
__decorate([
    Decorators_1.controllerErrorHandler()
], ProjectsController, "create", null);
__decorate([
    Decorators_1.controllerErrorHandler()
], ProjectsController, "edit", null);
__decorate([
    Decorators_1.controllerErrorHandler()
], ProjectsController, "assignReposToProject", null);
__decorate([
    Decorators_1.controllerErrorHandler()
], ProjectsController, "shareRepoWithProjects", null);
__decorate([
    Decorators_1.controllerErrorHandler()
], ProjectsController, "editDescription", null);
__decorate([
    Decorators_1.controllerErrorHandler()
], ProjectsController, "editUsers", null);
__decorate([
    Decorators_1.controllerErrorHandler()
], ProjectsController, "editGroups", null);
__decorate([
    Decorators_1.controllerErrorHandler()
], ProjectsController, "delete", null);
__decorate([
    Decorators_1.controllerErrorHandler()
], ProjectsController, "batchDeleteUsersFromProject", null);
__decorate([
    Decorators_1.controllerErrorHandler()
], ProjectsController, "deleteUserFromProject", null);
__decorate([
    Decorators_1.controllerErrorHandler()
], ProjectsController, "batchDeleteGroupsFromProject", null);
__decorate([
    Decorators_1.controllerErrorHandler()
], ProjectsController, "deleteGroupFromProject", null);
exports.ProjectsController = ProjectsController;


/***/ }),
/* 119 */
/***/ (function(module, exports) {

module.exports = require("@jfrog/access-nodejs-client/dist/model/user/SearchUserRequest");

/***/ }),
/* 120 */
/***/ (function(module, exports) {

module.exports = require("@jfrog/access-nodejs-client/dist/__generated__/group_pb");

/***/ }),
/* 121 */
/***/ (function(module, exports) {

module.exports = require("@jfrog/access-nodejs-client/dist/model/user/EntityTypes");

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalSearchController = void 0;
const LoggerFactory_1 = __webpack_require__(1);
const Services_1 = __webpack_require__(3);
const JFrogController_1 = __webpack_require__(5);
const Decorators_1 = __webpack_require__(2);
const Constants_1 = __webpack_require__(0);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
class GlobalSearchController extends JFrogController_1.JFrogController {
    // Level 1
    static async searchBuilds(req, res, next) {
        logger.debug('searching builds in artifactory');
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        const artifactoryResponse = await Services_1.ArtifactoryService.searchBuildsProxy(req.body, authData);
        const formattedVersions = GlobalSearchController.formatBuild(artifactoryResponse.builds);
        res.send({ builds: formattedVersions });
    }
    static async searchDistributableBundles(req, res, next) {
        logger.debug('searching distributable bundles');
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        const rbResponse = await Services_1.DistributionService.searchBundles(req.body, authData);
        res.send(rbResponse);
    }
    static async searchReceivedBundles(req, res, next) {
        logger.debug('searching received bundles');
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        const rbResponse = await Services_1.ArtifactoryService.searchBundles(req.body, authData);
        res.send(rbResponse);
    }
    // Level 2
    static async getBuildByName(req, res, next) {
        logger.debug(`getting build by name : [${req.params.name}]`);
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        const name = req.params.name;
        const { buildRepo, searchModel } = req.body;
        const body = { buildRepo, ...searchModel };
        const xrayStatus = Services_1.XrayService.getRequestXrayInformation(body);
        logger.debug(`xrayExists : ${xrayStatus.xrayExists} || isXrayRequest : ${xrayStatus.isXrayRequest}`);
        let response;
        if (!xrayStatus.xrayExists) {
            response = await Services_1.ArtifactoryService.getBuild(body, name, authData);
        }
        else {
            if (xrayStatus.isXrayRequest) {
                const xrayConfig = Services_1.XrayService.reqToXrayConfig(req);
                response = await Services_1.GlobalSearchService.getBuildFilteredByXray(name, buildRepo, xrayConfig, authData);
            }
            else {
                response = await Services_1.GlobalSearchService.getBuildWithXrayData(body, name, authData);
            }
        }
        if (!response.versions.length) {
            return res.sendStatus(Constants_1.STATUS_CODES.NOT_FOUND);
        }
        const formattedVersions = GlobalSearchController.formatBuild(response.versions);
        res.send({ versions: formattedVersions });
    }
    static async getReceivedBundleByName(req, res, next) {
        logger.debug('in GlobalSearchController::getReceivedBundleByName');
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        let rbResponse;
        rbResponse = await Services_1.ArtifactoryService.getBundle(req.body, req.params.name, authData);
        res.send(rbResponse);
    }
    static async getDistributableBundleByName(req, res, next) {
        logger.debug('in GlobalSearchController::getDistributableBundleByName');
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        const name = req.params.name;
        const xrayStatus = Services_1.XrayService.getRequestXrayInformation(req.body);
        logger.debug(`xrayExists : ${xrayStatus.xrayExists} || isXrayRequest : ${xrayStatus.isXrayRequest}`);
        let rbResponse;
        if (!xrayStatus.xrayExists) {
            rbResponse = await Services_1.DistributionService.getBundle(req.body, name, authData);
        }
        else {
            if (xrayStatus.isXrayRequest) {
                const xrayConfig = Services_1.XrayService.reqToXrayConfig(req);
                rbResponse = await Services_1.GlobalSearchService.getDistributableBundleFilteredByXray(name, xrayConfig, authData);
            }
            else {
                rbResponse = await Services_1.GlobalSearchService.getDistributableBundleWithXrayData(req.body, name, authData);
            }
        }
        res.send(rbResponse);
    }
    static formatBuild(res) {
        logger.debug('formatting build results');
        if (!res) {
            return [];
        }
        return res.map((version) => {
            const { buildNumber, buildStat, buildTime, ciUrl, xray_status, lastBuildNumber, buildName, buildRepo, lastBuildTime, canDelete, time, } = version;
            return {
                ...(buildNumber && { build_id: buildNumber }),
                ...(buildStat && { status: buildStat }),
                ...(buildTime && { build_time: buildTime }),
                ...(ciUrl && { ci_server: ciUrl }),
                ...(buildName && { build_name: buildName }),
                ...(buildRepo && { build_repo: buildRepo }),
                ...(lastBuildNumber && { last_build_number: lastBuildNumber }),
                ...(lastBuildTime && { last_build_time: lastBuildTime }),
                ...(canDelete && { can_delete: canDelete }),
                ...(xray_status && { xray_status }),
                ...(time && { time }),
            };
        });
    }
}
__decorate([
    Decorators_1.controllerErrorHandler()
], GlobalSearchController, "searchBuilds", null);
__decorate([
    Decorators_1.controllerErrorHandler()
], GlobalSearchController, "searchDistributableBundles", null);
__decorate([
    Decorators_1.controllerErrorHandler()
], GlobalSearchController, "searchReceivedBundles", null);
__decorate([
    Decorators_1.controllerErrorHandler()
], GlobalSearchController, "getBuildByName", null);
__decorate([
    Decorators_1.controllerErrorHandler()
], GlobalSearchController, "getReceivedBundleByName", null);
__decorate([
    Decorators_1.controllerErrorHandler()
], GlobalSearchController, "getDistributableBundleByName", null);
exports.GlobalSearchController = GlobalSearchController;


/***/ }),
/* 123 */
/***/ (function(module, exports) {

module.exports = require("lodash.difference");

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Constants_1 = __webpack_require__(0);
const LoggerFactory_1 = __webpack_require__(1);
const AuthenticationErrors_1 = __webpack_require__(13);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
const dontAllowAnonymous = (req, res, next) => {
    if (req.userName === Constants_1.ANONYMOUS) {
        logger.silly(`anonymous access for route : ${req.path} is not allowed`);
        return next(new AuthenticationErrors_1.AuthErrorAnonymousNotAllowed());
    }
    next();
};
exports.default = dontAllowAnonymous;


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.accessEntitiesRouter = void 0;
const express = __webpack_require__(6);
const Access_1 = __webpack_require__(73);
const router = express.Router();
exports.accessEntitiesRouter = router;
router.route('/users').get(Access_1.AccessController.searchUsers);
router.route('/users/admins').get(Access_1.AccessController.getAdminUsers);
router.route('/groups').get(Access_1.AccessController.searchGroups);
router.route('/groups/admins').get(Access_1.AccessController.getAdminGroups);


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(127);
const ServiceID_1 = __webpack_require__(25);
const PlatformConfiguration_1 = __webpack_require__(11);
const API_1 = __webpack_require__(7);
const Services_1 = __webpack_require__(3);
const LoggerFactory_1 = __webpack_require__(1);
const ExitHandler_1 = __webpack_require__(300);
const JobIntervals_1 = __webpack_require__(111);
const MothershipTopologyService_1 = __webpack_require__(30);
const config = __webpack_require__(4);
const Constants_1 = __webpack_require__(0);
const PRODUCT_HOME_1 = __webpack_require__(77);
const NewRelic_1 = __webpack_require__(410);
const AccessAdminClient_1 = __webpack_require__(12);
const VersionUpdate_1 = __webpack_require__(68);
const TimeUtils_1 = __webpack_require__(38);
const schedule = __webpack_require__(413);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
const { FRONTEND } = Constants_1.SERVICES;
const BOOT_PERIOD_LIMIT_MS = Number(config.get("frontend.bootstrap.bootTimeLimit"));
const BOOT_PERIOD_BUFFER = 10000;
let appStartTime;
if (NewRelic_1.shouldActivateNewRelic()) {
    try {
        NewRelic_1.writeNewRelicJsFile();
        // tslint:disable-next-line
        __webpack_require__(414);
    }
    catch (e) {
        NewRelic_1.writeNewrelicToLog(e);
    }
    NewRelic_1.writeNewrelicToLog();
}
if (false) {}
(() => {
    appStartTime = process.hrtime();
    startApplication();
    async function startApplication() {
        ExitHandler_1.default.init();
        logStartMessage();
        try {
            await waitForArtifactory();
            await runStartTasks();
            activateDynamicUpdate();
            startRecurringTasks();
            startScheduledTasks();
            startExpressServer();
            API_1.API.getGlobalEventEmitter().once(Constants_1.START_TASKS.SERVER_STARTED_EVENT, logFinishedMessage);
        }
        catch (e) {
            logger.error('Error starting application - ' + e);
            process.exit(0);
        }
    }
    function activateDynamicUpdate() {
        const enableDynamicUpdate = Constants_1.OPERATION_SYSTEM !== 'windows'
            && config.getBool("frontend.featureToggler.dynamicUpdate")
            && !PlatformConfiguration_1.default.isSass;
        if (enableDynamicUpdate) {
            VersionUpdate_1.VersionUpdate.registerToTopologyChangeEvent();
            setTimeout(VersionUpdate_1.VersionUpdate.checkForVersionUpdate, BOOT_PERIOD_LIMIT_MS + BOOT_PERIOD_BUFFER);
        }
    }
    async function runStartTasks() {
        ServiceID_1.ServiceID.setRandomServiceID();
        const topology = await Services_1.AccessService.getTopology();
        logger.debug(`Access Topology: ${JSON.stringify(topology)}`);
        await AccessAdminClient_1.AccessAdminClient.registerOnRouter();
        await retryFn(PlatformConfiguration_1.default.fetchAndUpdateAllConfigurations);
    }
    async function waitForArtifactory() {
        let errorResponse;
        const checkIntervalMS = config.get("frontend.startup.ping.intervalMS");
        const retries = config.get("frontend.startup.ping.retries");
        logger.info(`attempting pinging artifactory for ${retries} retires and ${(checkIntervalMS / Constants_1.TIME.SECOND_MS).toPrecision(2)}s interval for total of ${(retries * checkIntervalMS) / Constants_1.TIME.MINUTE_MS} minutes`);
        for (let i = 1; i <= retries; i++) {
            try {
                logger[i % 10 === 0 ? "info" : "debug"](`pinging artifactory, attempt number ${i}`);
                await Services_1.ArtifactoryService.ping();
                logger.info(`artifactory was pinged successfully`);
                return;
            }
            catch (e) {
                logger[i % 10 === 0 ? "info" : "debug"](`pinging artifactory attempt number ${i} failed with code : ${e.code}`);
                errorResponse = e;
                await API_1.API.sleep(checkIntervalMS);
            }
        }
        errorResponse.message = `Failed pinging artifactory for ${retries}`.concat(errorResponse.message);
        throw errorResponse;
    }
    function startRecurringTasks() {
        logger.debug(`starting recurring tasks`);
        JobIntervals_1.default.add({
            id: "PlatformConfiguration.fetchAndUpdateAllConfigurations",
            fn: PlatformConfiguration_1.default.fetchAndUpdateAllConfigurations,
            args: [],
            interval: config.get("frontend.jobIntervals.platformConfig.intervalMills"),
            coldStart: config.get("frontend.jobIntervals.platformConfig.coldStartMills")
        });
        logger.info("Recurring tasks started");
    }
    function startScheduledTasks() {
        logger.debug("Starting scheduled tasks");
        schedule.scheduleJob('0/30 * * * * *', () => {
            MothershipTopologyService_1.default.updateTopologyFromAccess();
        });
    }
    async function retryFn(fn) {
        let error;
        const retries = Constants_1.START_TASKS.FUNCTION_RETRIES;
        for (let i = 0; i <= retries; i++) {
            logger.debug(`running ${fn.name}, retry number [${i}]`);
            try {
                await fn();
                return;
            }
            catch (e) {
                await API_1.API.sleep(retries);
                error = e;
            }
        }
        const message = `Failed function : ${fn.name} after ${retries} retries, reason : ${error.message}`;
        await API_1.API.exitAppWithMessage(message, LoggerFactory_1.LoggerFactory.getLogger(__filename));
    }
    function startExpressServer() {
        __webpack_require__(69);
    }
    function logStartMessage() {
        logger.info(`${FRONTEND.NAME} (${FRONTEND.TYPE}) service initialization started. Version: ${API_1.API.getProjectVersion(logger)} Revision: ${API_1.API.getRevision()} PID: ${process.pid} Home: ${PRODUCT_HOME_1.default}`);
    }
    function logFinishedMessage(port) {
        const time = (TimeUtils_1.TimeUtils.getAppRuntimeInSeconds().toFixed(2));
        logger.info(`${FRONTEND.NAME} (${FRONTEND.TYPE}) service initialization completed in ${time} seconds. Listening on port: ${port}`);
    }
})();


/***/ }),
/* 127 */
/***/ (function(module, exports) {

module.exports = require("source-map-support/register");

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Constants_1 = __webpack_require__(0);
const shared = {
    security: {
        joinKeyFile: 'var/etc/security/join.key',
        joinKey: '',
        masterKeyFile: 'var/etc/security/master.key',
    },
    node: {
        id: 'abc',
    },
};
const router = {
    entrypoints: {
        internalPort: 8046,
    },
    topology: {
        external: {
            refresh: {
                maxStaleHeartbeat: 30,
            },
        },
    },
};
const routerUrl = `localhost:${router.entrypoints.internalPort}`;
const routerHttpUrl = `http://${routerUrl}`;
const { ARTIFACTORY, DISTRIBUTION, INSIGHT, METADATA, MISSION_CONTROL, ACCESS, XRAY, PIPELINES, EVENT, REPLICATOR } = Constants_1.SERVICES;
const logsDir = 'var/log';
const frontend = {
    port: '8070',
    context: '/ui',
    node: {
        id: 'frontend-node1',
    },
    startup: {
        ping: {
            intervalMS: 1000,
            retries: 180
        }
    },
    connectionTimeoutMinutes: {
        default: 5,
        download: 15,
    },
    router: {
        baseUrl: {
            default: routerUrl,
            envName: 'ROUTER_URL',
        },
        healthPath: '/health',
    },
    security: {
        deleteLoginWrongPassword: true,
    },
    session: {
        timeMinutes: 30,
        timeShift: 10,
        reAuthenticationMinutes: 2
    },
    rememberMe: {
        timeMinutes: 20160
    },
    logging: {
        application: {
            dirPath: logsDir,
            level: 'info',
            rotation: {
                maxSizeMb: 25,
                maxFiles: 10,
            },
        },
        request: {
            dirPath: logsDir,
            level: 'info',
            rotation: {
                maxSizeMb: 25,
                maxFiles: 10,
            },
        },
    },
    jobIntervals: {
        platformConfig: {
            intervalMills: 30000,
            coldStartMills: 2000,
        },
        mothershipTopology: {
            intervalMills: 30000,
            coldStartMills: 1,
        },
    },
    accessClient: {
        joinKey: {
            retries: 60,
        },
    },
    servicesUrls: {
        [DISTRIBUTION.NAME]: `${routerHttpUrl}/${DISTRIBUTION.SUB_URL}`,
        [ARTIFACTORY.NAME]: `${routerHttpUrl}/${ARTIFACTORY.SUB_URL}`,
        [XRAY.NAME]: `${routerHttpUrl}/${XRAY.SUB_URL}`,
        [MISSION_CONTROL.NAME]: `${routerHttpUrl}/${MISSION_CONTROL.SUB_URL}`,
        [INSIGHT.NAME]: `${routerHttpUrl}/${INSIGHT.SUB_URL}`,
        [ACCESS.NAME]: `${routerHttpUrl}/${ACCESS.SUB_URL}`,
        [METADATA.NAME]: `${routerHttpUrl}/${METADATA.SUB_URL}`,
        [PIPELINES.NAME]: `${routerHttpUrl}/${PIPELINES.SUB_URL}`,
        [EVENT.NAME]: `${routerHttpUrl}/${EVENT.SUB_URL}`,
        [REPLICATOR.NAME]: `${routerHttpUrl}/${REPLICATOR.SUB_URL}`,
    },
    cache: {
        ttl: 1500000,
    },
    bootstrap: {
        retries: 120,
        bootTimeLimit: 120000
    },
    versionUpdate: {
        checkInterval: 300000,
        coldStart: 30000,
    },
    serviceId: Constants_1.DEFAULT_VALUES.SERVICE_ID,
    proxy: {
        sizeLimit: '5',
    },
    featureToggler: {
        /* commonUserOnboarding: true,
         artifactoryArtifactsBrowser: false,
         commonProjects: false,*/
        dynamicUpdate: false
    },
    toggle: {
        allowNewOnboarding: false,
    }
};
exports.default = {
    shared,
    router,
    frontend,
};


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.API_VERSION = exports.NODE_SERVER_PATH = void 0;
const SERVICES_1 = __webpack_require__(55);
const API_VERSION = '/api/v1';
exports.API_VERSION = API_VERSION;
const NODE_SERVER_PATH = {
    [SERVICES_1.SERVICES.ARTIFACTORY.NAME]: '/ui',
    [SERVICES_1.SERVICES.XRAY.NAME]: '/xray',
    [SERVICES_1.SERVICES.METADATA.NAME]: '/mds',
    [SERVICES_1.SERVICES.MISSION_CONTROL.NAME]: '/mc',
    [SERVICES_1.SERVICES.INSIGHT.NAME]: '/insight',
    [SERVICES_1.SERVICES.ACCESS.NAME]: '/access',
    [SERVICES_1.SERVICES.DISTRIBUTION.NAME]: '/distribution',
    [SERVICES_1.SERVICES.PIPELINES.NAME]: '/pipe',
    [SERVICES_1.SERVICES.EVENT.NAME]: '/event',
    [SERVICES_1.SERVICES.REPLICATOR.NAME]: '/replicator',
};
exports.NODE_SERVER_PATH = NODE_SERVER_PATH;


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ACCESS = void 0;
exports.ACCESS = {
    USER_CUSTOM_DATA: 'userCustomData',
    JOIN_ADMIN: '/api/v1/registry/join',
    JOIN_SERVICE: '',
    VERIFY_TOKEN_RESPONSE_REASONS: {
        EXPIRED: 'expired',
    },
    PERMISSIONS: {
        RESOURCE_CONFIG: {
            READ: 'read',
            DELETE: 'delete',
            DEPLOY: 'deploy',
            MANAGE: 'manage',
            TRIGGER: 'trigger',
            ANNOTATE: 'annotate',
            DISTRIBUTE: 'distribute',
            MANAGE_XRAY_MD: 'manage_xray_md',
        },
    },
};
exports.default = exports.ACCESS;


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ARTIFACTORY_SESSION_COOKIE_NAME = void 0;
exports.ARTIFACTORY_SESSION_COOKIE_NAME = 'SESSION';
exports.default = exports.ARTIFACTORY_SESSION_COOKIE_NAME;


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_VALUES = void 0;
exports.DEFAULT_VALUES = {
    SERVICE_ID: 'SERVICE_ID',
    SHARED: 'shared',
};
exports.default = exports.DEFAULT_VALUES;


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const THREADLOCAL_NAMESPACE = 'com.jfrog.frontend';
exports.default = THREADLOCAL_NAMESPACE;


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const CROWD = {
    COOKIE_NAME: 'crowd.token_key',
    VALIDATION_HEADER: 'x-jfrog-crowd-validation',
    DEFAULT_VALIDATION_MINUTES: 30,
};
exports.default = CROWD;


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const SERVICES_1 = __webpack_require__(55);
const LOGGING = {
    COLORS: {
        INFO: 'blue',
        ERROR: 'bold red',
        WARN: 'red',
        SERVICE: 'yellow',
        TRACE_ID: 'bold',
    },
    PADDING: {
        SERVICE_NAME: 5,
        LEVEL: 5,
        TRACE_ID: 16,
        THREAD: 20,
        FILE_NAME: 30,
    },
    PREFIX: SERVICES_1.SERVICES.FRONTEND.NAME,
    EXTENSION: '.log',
    LOG_ARCHIVED_EXTENSION: '.log.gz',
    GZIP_EXTENSION: '.gz',
    ARCHIVED_DIR_NAME: 'archived',
    LEVELS: ['error', 'warn', 'info', 'debug', 'silly'],
};
exports.default = LOGGING;


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const CACHE = {
    ADMIN_TOKEN_KEY: 'adminTokenKey',
    JOIN_KEY_KEY: 'joinKeyKey',
    TIME_TO_LEAVE: 25 * 60,
    CHECK_PERIOD: 120,
};
exports.default = CACHE;


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const TRACE_ID_HEADER = 'uber-trace-id';
exports.default = TRACE_ID_HEADER;


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const PROXYING_HEADERS = [
    'x-forwarded-for',
    'x-forwarded-host',
    'x-forwarded-port',
    'x-forwarded-prefix',
    'x-forwarded-proto',
    'x-forwarded-server',
];
exports.default = PROXYING_HEADERS;


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ANONYMOUS = 'anonymous';
exports.default = ANONYMOUS;


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const START_TASKS = Object.freeze({
    FUNCTION_RETRIES: 180,
    SERVER_STARTED_EVENT: 'SERVER_STARTED_EVENT',
});
exports.default = START_TASKS;


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __webpack_require__(0);
const CSRF_URLS_WHITELIST = ['/auth/saml/loginResponse', '/auth/saml/loginResponsePlatform', '/health'].map(url => index_1.API_VERSION + url);
exports.default = CSRF_URLS_WHITELIST;


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const TOPOLOGY = Object.freeze({
    STATUS: {
        DOWN: 'Down',
        STALE: 'Stale',
        ONLINE: 'Online',
        OFFLINE: 'Offline',
        PARTIALLY_ONLINE: 'Partially Online',
    },
    STATE: {
        HEALTHY: 'HEALTHY',
        STALE: 'Stale',
        UNHEALTHY: 'UNHEALTHY',
        SHUTTING_DOWN: 'SHUTTING_DOWN',
        UNHEALTHY_PEER: 'UNHEALTHY_PEER',
        SERVICE_STATE_UNSPECIFIED: 'SERVICE_STATE_UNSPECIFIED',
    },
});
exports.default = TOPOLOGY;


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = __webpack_require__(26);
const SERVICES_CONFIG_NOTIFY = Object.freeze({
    XRAY: [models_1.ConfigEvents.BASE_URL, models_1.ConfigEvents.MAIL, models_1.ConfigEvents.PROXY, models_1.ConfigEvents.SECURITY],
    DISTRIBUTION: [
        models_1.ConfigEvents.BASE_URL,
        models_1.ConfigEvents.MAIL,
        models_1.ConfigEvents.PROXY,
        models_1.ConfigEvents.SECURITY,
        models_1.ConfigEvents.XRAY,
    ],
    MISSION_CONTROL: [models_1.ConfigEvents.BASE_URL, models_1.ConfigEvents.PROXY],
});
exports.default = SERVICES_CONFIG_NOTIFY;


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(145), exports);
__exportStar(__webpack_require__(146), exports);


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LogType = void 0;
var LogType;
(function (LogType) {
    LogType["REQUEST"] = "request";
    LogType["APPLICATION"] = "application";
})(LogType = exports.LogType || (exports.LogType = {}));


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(152), exports);
__exportStar(__webpack_require__(157), exports);
__exportStar(__webpack_require__(158), exports);
__exportStar(__webpack_require__(159), exports);
__exportStar(__webpack_require__(160), exports);


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(153), exports);
__exportStar(__webpack_require__(154), exports);
__exportStar(__webpack_require__(155), exports);
__exportStar(__webpack_require__(156), exports);


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.uiEnvironments = void 0;
var uiEnvironments;
(function (uiEnvironments) {
    uiEnvironments["DEV"] = "DEV";
    uiEnvironments["PROD"] = "PROD";
})(uiEnvironments = exports.uiEnvironments || (exports.uiEnvironments = {}));


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(162), exports);


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(164), exports);
__exportStar(__webpack_require__(165), exports);
__exportStar(__webpack_require__(169), exports);
__exportStar(__webpack_require__(170), exports);
__exportStar(__webpack_require__(171), exports);
__exportStar(__webpack_require__(172), exports);
__exportStar(__webpack_require__(173), exports);
__exportStar(__webpack_require__(174), exports);
__exportStar(__webpack_require__(175), exports);
__exportStar(__webpack_require__(176), exports);
__exportStar(__webpack_require__(177), exports);
__exportStar(__webpack_require__(178), exports);


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(166), exports);
__exportStar(__webpack_require__(167), exports);
__exportStar(__webpack_require__(168), exports);


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(185), exports);


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewPipeline = void 0;
class ViewPipeline {
    constructor(name, id, branchName, pipelineSource, incompleteRunsInfo, isFavorite, favoriteId) {
        this.name = name;
        this.id = id;
        this.branchName = branchName;
        this.pipelineSource = pipelineSource;
        this.status = 'notbuilt';
        this.incompleteRunsInfo = incompleteRunsInfo;
        this.isFavorite = isFavorite;
        this.favoriteId = favoriteId;
    }
    updateLatestStatusInfo(latestRun) {
        this.status = latestRun.status;
        this.duration = latestRun.duration;
        this.date = latestRun.date;
        this.triggeredBy = latestRun.triggeredBy;
    }
    updateCommitInfo(runResourceVersion, systemCodes) {
        var _a, _b, _c;
        const versionInfo = runResourceVersion === null || runResourceVersion === void 0 ? void 0 : runResourceVersion.resourceVersionContentPropertyBag;
        const shaData = versionInfo === null || versionInfo === void 0 ? void 0 : versionInfo.shaData;
        if (shaData) {
            this.commitSha = versionInfo === null || versionInfo === void 0 ? void 0 : versionInfo.commitSha;
            this.commitMessage = versionInfo === null || versionInfo === void 0 ? void 0 : versionInfo.commitMessage;
            const triggeredBy = ((_a = shaData === null || shaData === void 0 ? void 0 : shaData.lastAuthor) === null || _a === void 0 ? void 0 : _a.login) || ((_b = shaData === null || shaData === void 0 ? void 0 : shaData.lastAuthor) === null || _b === void 0 ? void 0 : _b.displayName);
            this.triggeredBy = triggeredBy;
        }
        const systemCodeGroup = 'resource';
        const buildInfoResourceCode = systemCodes.find(({ name, group }) => name === 'BuildInfo' && group === systemCodeGroup);
        if (runResourceVersion.resourceTypeCode === buildInfoResourceCode.code) {
            this.commitMessage = `${versionInfo === null || versionInfo === void 0 ? void 0 : versionInfo.buildName}:${versionInfo === null || versionInfo === void 0 ? void 0 : versionInfo.buildNumber}`;
        }
        const imageResourceCode = systemCodes.find(({ name, group }) => name === 'Image' && group === systemCodeGroup);
        if (runResourceVersion.resourceTypeCode === imageResourceCode.code) {
            this.commitMessage = `${(_c = runResourceVersion === null || runResourceVersion === void 0 ? void 0 : runResourceVersion.resourceStaticPropertyBag) === null || _c === void 0 ? void 0 : _c.imageName}:
        ${versionInfo === null || versionInfo === void 0 ? void 0 : versionInfo.imageTag}`;
        }
        const releaseBundleResourceCode = systemCodes.find(({ name, group }) => name === 'ReleaseBundle' && group === systemCodeGroup);
        if (runResourceVersion.resourceTypeCode === releaseBundleResourceCode.code) {
            this.commitMessage = `${versionInfo === null || versionInfo === void 0 ? void 0 : versionInfo.name}:${versionInfo === null || versionInfo === void 0 ? void 0 : versionInfo.version}`;
        }
    }
}
exports.ViewPipeline = ViewPipeline;


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewRun = void 0;
class ViewRun {
    constructor(name, branchName, run, runResourceVersion, pipelineId) {
        this.name = name;
        this.status = run.status;
        this.runNumber = run.runNumber;
        this.date = run.date;
        this.triggeredBy = run.triggeredBy;
        this.duration = run.duration;
        this.id = run.id;
        this.pipelineId = pipelineId;
        this.branchName = branchName;
        if (runResourceVersion) {
            const commitInfo = runResourceVersion.resourceVersionContentPropertyBag;
            this.commitSha = commitInfo.commitSha;
            this.commitMessage = commitInfo.commitMessage;
            this.triggeredBy = commitInfo.lastAuthorLogin;
        }
    }
}
exports.ViewRun = ViewRun;


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(197), exports);
__exportStar(__webpack_require__(198), exports);
__exportStar(__webpack_require__(199), exports);
__exportStar(__webpack_require__(200), exports);
__exportStar(__webpack_require__(201), exports);
__exportStar(__webpack_require__(202), exports);
__exportStar(__webpack_require__(203), exports);
__exportStar(__webpack_require__(204), exports);


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigEvents = void 0;
var ConfigEvents;
(function (ConfigEvents) {
    ConfigEvents["MAIL"] = "mail";
    ConfigEvents["PROXY"] = "proxy";
    ConfigEvents["SECURITY"] = "security";
    ConfigEvents["BASE_URL"] = "baseUrl";
    ConfigEvents["XRAY"] = "xray";
})(ConfigEvents = exports.ConfigEvents || (exports.ConfigEvents = {}));


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const FOOTER_FIELDS = Object.freeze({
    TRIAL: 'Trial',
    XRAY_SUPPORTED_LICENSES: ['COMMERCIAL_X', 'ENTERPRISE_X', 'ENTERPRISE_PLUS_TRIAL', 'ENTERPRISE_PLUS'],
    IS_XRAY_TRIAL_FIELD: 'isXrayTrial',
    MC_LICENSE: 'mcLicense',
});
exports.default = FOOTER_FIELDS;


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const NEW_RELIC = {
    FILE_NAME: 'newrelic.js',
};
exports.default = NEW_RELIC;


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const MFA_COOKIES = {
    headers: 'hdr',
    data: 'dta',
};
exports.default = MFA_COOKIES;


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const projects_1 = __webpack_require__(211);
const PROJECTS = {
    DEFAULT_PROJECT_KEY: projects_1.GLOBAL_PROJECT_NAME,
};
exports.default = PROJECTS;


/***/ }),
/* 211 */
/***/ (function(module, exports) {

module.exports = require("@jfrog/access-nodejs-client/dist/model/projects");

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const STORE = Object.freeze({
    NAME: 'store',
    ANONYMOUS_MESSAGE: 'Log in to the the JFrog Platform to activate JFrog Pipelines.',
});
exports.default = STORE;


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.FRONTEND_ROOT_PATH = void 0;
const path_1 = __webpack_require__(8);
const index_1 = __webpack_require__(0);
const FRONTEND_ROOT_PATH = path_1.join(index_1.PRODUCT_HOME, 'app', 'frontend');
exports.FRONTEND_ROOT_PATH = FRONTEND_ROOT_PATH;


/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.OAUTH_ERROR_QUERY_PARAM = exports.SKIP_SLIDING_WINDOW_ROUTES = exports.OPEN_OR_AUTHENTICATED_ROUTES = exports.OPEN_ROUTES = exports.EXCLUDED_CROWD_AUTHENTICATION_PATHS = exports.TEMP_SSO_HEADER_NAME = exports.REALM = void 0;
const index_1 = __webpack_require__(0);
var REALM;
(function (REALM) {
    REALM["SAML"] = "saml";
    REALM["OAUTH"] = "oauth";
    REALM["CROWD"] = "crowd";
    REALM["HTTP_SSO"] = "http-sso";
    REALM["LDAP"] = "ldap";
    REALM["ACCESS"] = "access";
    REALM["INTERNAL"] = "internal";
})(REALM || (REALM = {}));
exports.REALM = REALM;
const TEMP_SSO_HEADER_NAME = 'x-jfrog-sso-type';
exports.TEMP_SSO_HEADER_NAME = TEMP_SSO_HEADER_NAME;
const SKIP_SLIDING_WINDOW_ROUTES = [
    '/ui/auth/screen/globalState',
    '/ui/storagesummary/projects',
    '/api/v1/pipe/api/v1/nodes',
    '/api/v1/pipe/api/v1/nodes',
    '/api/v1/pipe/api/v1/runs',
    '/api/v1/pipe/api/v1/pipelineSteps',
    '/api/v1/pipe/api/v1/pipelineSources',
    '/api/v1/pipe/api/v1/runResourceVersions',
];
exports.SKIP_SLIDING_WINDOW_ROUTES = SKIP_SLIDING_WINDOW_ROUTES;
const EXCLUDED_CROWD_AUTHENTICATION_PATHS = [
    '/system/status/nodes',
    '/ui/auth/screen/footer',
    '/ui/auth/current',
    '/ui/auth/loginRelatedData',
    '/xray/ui/permissions/current',
    '/ui/oauth2/loginRequestPlatform',
    '/system/auth/current',
    '/system/onboarding',
].map((url) => index_1.API_VERSION + url);
exports.EXCLUDED_CROWD_AUTHENTICATION_PATHS = EXCLUDED_CROWD_AUTHENTICATION_PATHS;
const OPEN_ROUTES = [
    '/health',
    '/auth/logout',
    '/auth/crowd-login',
    '/auth/http-sso-login',
    '/auth/oauth2/loginResponse',
    '/auth/saml/loginResponse',
    '/auth/mfa/enroll',
    '/auth/mfa/verify',
    '/ui/auth/login',
    '/ui/auth/logout',
    '/ui/auth/reset-password',
    '/ui/auth/changePassword',
    '/ui/auth/forgotpassword',
    '/ui/auth/loginRelatedData',
    '/ui/auth/validatetoken',
    '/ui/auth/resetpassword',
    '/system/status/nodes',
    '/system/support/bundle',
    '/system/status/nodes',
    '/system/version',
].map((url) => index_1.API_VERSION + url);
exports.OPEN_ROUTES = OPEN_ROUTES;
const OPEN_OR_AUTHENTICATED_ROUTES = [
    '/ui/auth/screen/footer',
    '/ui/auth/current',
    '/ui/auth/screen/systemMessages',
    '/xray/ui/permissions/current',
    '/auth/issaml',
    '/ui/oauth2/loginRequestPlatform',
].map((url) => index_1.API_VERSION + url);
exports.OPEN_OR_AUTHENTICATED_ROUTES = OPEN_OR_AUTHENTICATED_ROUTES;
const OAUTH_ERROR_QUERY_PARAM = 'oauthMessage';
exports.OAUTH_ERROR_QUERY_PARAM = OAUTH_ERROR_QUERY_PARAM;


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const XSS_URLS_WHITELIST = [
    '/api/v1/ui/admin/artifactory/advanced/config_descriptor',
    '/api/v1/ui/artifact/deploy',
    '/api/v1/ui/artifact/upload',
    '/api/v1/ui/configdescriptor',
];
exports.default = XSS_URLS_WHITELIST;


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ARTIFACTORY_REALM_TYPES = void 0;
var ARTIFACTORY_REALM_TYPES;
(function (ARTIFACTORY_REALM_TYPES) {
    ARTIFACTORY_REALM_TYPES["LDAP"] = "ldap";
    ARTIFACTORY_REALM_TYPES["INTERNAL"] = "internal";
    ARTIFACTORY_REALM_TYPES["HTTP_SSO"] = "http-sso";
    ARTIFACTORY_REALM_TYPES["SAML"] = "saml";
    ARTIFACTORY_REALM_TYPES["CROWD"] = "crowd";
    ARTIFACTORY_REALM_TYPES["ACCESS"] = "access";
})(ARTIFACTORY_REALM_TYPES = exports.ARTIFACTORY_REALM_TYPES || (exports.ARTIFACTORY_REALM_TYPES = {}));


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const PIPELINES = {
    PROJECT_INTEGRATION: 'projectIntegration',
    NODE_POOL: 'nodePool',
    IS_TRUE_TEXT: 'Yes',
    IS_FALSE_TEXT: 'No',
    AUTO_INITIALIZED: 'Auto (needs SSH access)',
    MANUAL_INITIALIZED: 'Manual',
    DYNAMIC: 'Dynamic',
    STATIC: 'Static',
    DEFAULT_PROJECT_NAME: 'default',
    NO_LIMIT: 'No Limit',
    NODE_STATS_LIMIT: 120,
    NODE_INIT_SCRIPT_FILE_NAME: 'node_init_',
    RESOURCE_VERSIONS_CALL_LIMIT: 300,
    PIPELINES_CALL_LIMIT: 500,
    SYNC_STATUSES_CALL_LIMIT: 1000,
};
exports.default = PIPELINES;


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const GENERAL = {
    DECIMAL: 10,
};
exports.default = GENERAL;


/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const JOIN_KEY = Object.freeze({
    MESSAGES: {
        MISSING: 'Missing join key',
        TOO_SHORT: 'Corrupted join key',
    },
    LENGTH: 32,
});
exports.default = JOIN_KEY;


/***/ }),
/* 220 */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),
/* 221 */
/***/ (function(module, exports) {

module.exports = require("validator");

/***/ }),
/* 222 */
/***/ (function(module, exports) {

module.exports = require("@jfrog/nodejs-commons");

/***/ }),
/* 223 */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"@jfrog/ui-platform\",\"version\":\"1.18.6\",\"description\":\"\",\"private\":true,\"bin\":\"server/app.js\",\"main\":\"server/app.js\",\"engines\":{\"node\":\">= 10.24.0 < 11.0.0\"},\"scripts\":{\"ci\":\"concurrently \\\"npm run ci:server\\\" \\\"npm run ci:client\\\"\",\"ci:server\":\"cd server && npm ci\",\"ci:client\":\"cd client && npm run ci\",\"install:server\":\"cd server && npm install\",\"install:client\":\"cd client && npm install && npm run install\",\"start\":\"concurrently \\\"npm run start:server\\\" \\\"npm run start:client\\\"\",\"start:server\":\"cd server && npm run start\",\"start:client\":\"cd client && npm start\",\"start:server:production\":\"cd server && npm run start:prod\",\"start:production\":\"concurrently \\\"npm run start:server:production\\\" \\\"npm run start:client\\\"\",\"serve:server\":\"cd server && npm run serve\",\"start:local-mothership\":\"cd local-mothership && docker-compose up\",\"serve:staging\":\"cd server && npm run start:staging\",\"build\":\"concurrently \\\"npm run build:server\\\" \\\"npm run build:client\\\"\",\"build:server\":\"cd server && npm run build\",\"build:client\":\"cd client && npm run build\",\"build:client:stub\":\"cd client && npm run build-stub\",\"build-stub\":\"concurrently \\\"npm run build:server\\\" \\\"npm run build:client:stub\\\"\",\"test\":\"concurrently \\\"npm run test:server\\\" \\\"npm run test:client\\\"\",\"test:server\":\"cd server && npm test\",\"test:client\":\"cd client && npm run test\",\"audit\":\"npm run audit:server && npm run audit:client\",\"audit:server\":\"cd server && npm run audit\",\"audit:client\":\"cd client && npm run audit\",\"package\":\"make package\",\"reset\":\"concurrently \\\"npm run reset:server\\\" \\\"npm run reset:client\\\"\",\"reset:server\":\"cd server && npm run reset\",\"reset:client\":\"cd client && npm run reset\"},\"pkg\":{\"assets\":[\"client/dist/**/*\",\"client/ng-webapp/dist/**/*\",\"server/**/*.json\",\"server/**/*.yaml\",\"node_modules/**/*\"]},\"dependencies\":{},\"devDependencies\":{\"concurrently\":\"^5.3.0\"}}");

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * THIS CONSTANT IS ONLY USED FOR VERSION UPDATE
 **/
const OPERATION_SYSTEM = getOS();
function getOS() {
    const os = process.platform;
    if (os === 'win32') {
        return 'windows';
    }
    if (['aix', 'freebsd', 'openbsd', 'sunos', 'cygwin', 'netbsd'].includes(os)) {
        return 'linux';
    }
    return os;
}
exports.default = OPERATION_SYSTEM;


/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __webpack_require__(0);
const path_1 = __webpack_require__(8);
const VERSION_UPDATE = Object.freeze({
    VERSIONS_JSON_PATH: path_1.join(index_1.PRODUCT_HOME, '..', 'versions.json')
});
exports.default = VERSION_UPDATE;


/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ONBOARDING = {
    IS_AOL: 'isAol',
    IS_AOL_ONBOARDING_ALLOWED_FLAG: 'frontend.toggle.allowNewOnboarding',
};
exports.default = ONBOARDING;


/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ACCESS = {
    ADMIN_CLIENT_REJOIN: "AccessAdminClient:rejoin"
};
exports.default = { ACCESS };


/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GLOBAL_EVENTS = void 0;
exports.GLOBAL_EVENTS = {
    TOPOLOGY_CHANGED: 'topology:changed'
};


/***/ }),
/* 229 */
/***/ (function(module, exports) {

module.exports = require("@jfrog/configuration-manager");

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerOptionsFactory = void 0;
const models_1 = __webpack_require__(26);
const winston = __webpack_require__(45);
const Constants_1 = __webpack_require__(0);
const config = __webpack_require__(4);
const API_1 = __webpack_require__(7);
const customFormats_1 = __webpack_require__(231);
const LoggingUtils_1 = __webpack_require__(233);
const LoggingConfig_1 = __webpack_require__(58);
const { combine, printf, timestamp, errors } = winston.format;
class LoggerOptionsFactory {
    constructor(logType) {
        this.logType = logType;
        this.loggingConfig = new LoggingConfig_1.LoggingConfig(logType);
    }
    static mbToBytes(n) {
        return n * Math.pow(1024, 2);
    }
    static getApplicationFormat(isConsole = false) {
        return combine(timestamp(), errors({ stack: true }), customFormats_1.serviceName({ addBrackets: true, isConsole }), customFormats_1.levelFormat({
            colorLevels: ['error', 'warn', 'info'],
            upperCase: true,
            pad: Constants_1.LOGGING.PADDING.LEVEL,
            isConsole,
            addBrackets: true
        }), customFormats_1.traceId({ addBrackets: true, addBold: true }), customFormats_1.thread(), customFormats_1.fileName(), printf((info) => {
            const message = info.stack ? info.stack : info.message;
            return `${info.timestamp} ${info.serviceName} ${info.level} ${info.traceId} [${info.fileName}] [${info.thread}] - ${message}`.trim();
        }));
    }
    static getRequestFormat() {
        return combine(timestamp(), customFormats_1.traceId(), printf((info) => {
            return `${info.timestamp}|${info.traceId}|${info.message}`.trim();
        }));
    }
    static parseLogLevel(logLevel) {
        let level = 'info';
        logLevel = logLevel.toLowerCase();
        if (logLevel === 'trace') {
            logLevel = 'silly';
        }
        if (typeof logLevel === 'string' && Constants_1.LOGGING.LEVELS.includes(logLevel)) {
            level = logLevel.toLowerCase();
        }
        return level;
    }
    maxFiles() {
        config.getInt(`frontend.logging.${this.logType}.rotation.maxFiles`);
    }
    get() {
        const fileTransport = new winston.transports.File(this.getLogFileTransport());
        let consoleTransport = null;
        if (this.logType === models_1.LogType.APPLICATION) {
            consoleTransport = new winston.transports.Console(this.getLogConsoleTransport());
        }
        new LoggingUtils_1.LoggingUtils(this.logType).startTransportListeners(fileTransport);
        return {
            exitOnError: false,
            format: this.getFormatByLogType(!!consoleTransport),
            transports: [fileTransport, ...(!!consoleTransport ? [consoleTransport] : [])],
        };
    }
    getLogFileTransport() {
        const configLoggingName = this.logType;
        const level = config.get(`frontend.logging.${configLoggingName}.level`);
        return {
            filename: this.loggingConfig.fileNameWithExt,
            dirname: this.loggingConfig.logsDirPath,
            level: LoggerOptionsFactory.parseLogLevel(level),
            maxFiles: this.loggingConfig.maxFiles,
            maxsize: LoggerOptionsFactory.mbToBytes(this.loggingConfig.maxSizeMB),
            options: {
                mode: 0o640
            },
            format: this.getFormatByLogType(),
            tailable: true
        };
    }
    getLogConsoleTransport() {
        const level = config.get(`frontend.logging.application.level`);
        return {
            level: LoggerOptionsFactory.parseLogLevel(level),
            silent: API_1.API.silentWinston()
        };
    }
    getFormatByLogType(isConsole = false) {
        if (this.logType === models_1.LogType.REQUEST) {
            return LoggerOptionsFactory.getRequestFormat();
        }
        if (this.logType === models_1.LogType.APPLICATION) {
            return LoggerOptionsFactory.getApplicationFormat(isConsole);
        }
    }
}
exports.LoggerOptionsFactory = LoggerOptionsFactory;


/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.fileName = exports.thread = exports.traceId = exports.levelFormat = exports.serviceName = void 0;
const winston = __webpack_require__(45);
const Constants_1 = __webpack_require__(0);
const TraceID_1 = __webpack_require__(57);
const { colorize } = winston.format;
const colorizer = colorize().colorize;
exports.serviceName = winston.format((info, opts) => {
    let paddedName = Constants_1.SERVICES.FRONTEND.TYPE.padEnd(Constants_1.LOGGING.PADDING.SERVICE_NAME);
    if (opts.addBrackets) {
        paddedName = `[${paddedName}]`;
    }
    info.serviceName = opts.isConsole ? colorizer('service', paddedName) : paddedName;
    return info;
});
exports.levelFormat = winston.format((info, opts) => {
    let level = info.level;
    if (opts.upperCase) {
        level = level.toUpperCase();
    }
    if (opts.pad) {
        level = level.padEnd(opts.pad);
    }
    if (opts.addBrackets) {
        level = `[${level}]`;
    }
    if (opts.colorLevels.includes(info.level)) {
        level = opts.isConsole ? colorizer(info.level, level) : level;
    }
    info.level = level;
    return info;
});
exports.traceId = winston.format((info, opts) => {
    const traceID = TraceID_1.TraceID.get();
    let partTraceID = traceID ? `${traceID.split(':')[0]}` : '';
    partTraceID = partTraceID.padEnd(Constants_1.LOGGING.PADDING.TRACE_ID);
    if (opts.addBrackets) {
        partTraceID = `[${partTraceID}]`;
    }
    info.traceId = partTraceID;
    return info;
});
exports.thread = winston.format((info) => {
    info.thread = 'main'.padEnd(Constants_1.LOGGING.PADDING.THREAD);
    return info;
});
exports.fileName = winston.format((info) => {
    info.fileName = ''.padEnd(Constants_1.LOGGING.PADDING.FILE_NAME);
    return info;
});


/***/ }),
/* 232 */
/***/ (function(module, exports) {

module.exports = require("cls-hooked");

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggingUtils = void 0;
const fs = __webpack_require__(22);
const path = __webpack_require__(8);
const zlib_1 = __webpack_require__(83);
const LoggingConfig_1 = __webpack_require__(58);
const Constants_1 = __webpack_require__(0);
class LoggingUtils {
    constructor(logType) {
        this.archiveFolderExists = false;
        this.loggingConfig = new LoggingConfig_1.LoggingConfig(logType);
    }
    startTransportListeners(transport) {
        this.startZipRotationsListener(transport);
    }
    startZipRotationsListener(transport) {
        transport.on('open', (oldFileName) => {
            const newFilename = oldFileName.replace(Constants_1.LOGGING.EXTENSION, `1${Constants_1.LOGGING.EXTENSION}`);
            fs.stat(newFilename, async (err) => {
                if (!err) {
                    const date = new Date().toISOString().replace('Z', '');
                    const gzipPath = path.join(this.loggingConfig.archiveDirPath, `frontend-service-${date}${Constants_1.LOGGING.LOG_ARCHIVED_EXTENSION}`);
                    this.makeSureArchiveFolderExists();
                    this.handleMaxFiles();
                    await this.writeGzip(newFilename, gzipPath)
                        .then(() => {
                        fs.unlink(newFilename, (err) => {
                            if (err) {
                                console.error(err);
                            }
                        });
                    })
                        .catch(console.error);
                }
            });
        });
    }
    handleMaxFiles() {
        fs.readdir(this.loggingConfig.archiveDirPath, (err, allFiles) => {
            if (!err) {
                const files = allFiles.filter((name) => {
                    return name.includes(this.loggingConfig.fileName);
                });
                if (files.length === this.loggingConfig.maxFiles - 1) {
                    const fileDates = this.getDateFromFileNames(files);
                    const minDate = this.getMinDateFromDateStrings(fileDates);
                    const fileToRemove = `${this.loggingConfig.fileName}-${minDate.toISOString().replace('Z', '')}${Constants_1.LOGGING.LOG_ARCHIVED_EXTENSION}`;
                    fs.unlink(path.join(this.loggingConfig.archiveDirPath, fileToRemove), (err) => {
                        if (err) {
                            console.error(err);
                        }
                    });
                }
            }
        });
    }
    writeGzip(inpPath, gzipPath) {
        return new Promise((resolve, reject) => {
            const gzip = zlib_1.createGzip();
            const input = fs.createReadStream(inpPath);
            const output = fs.createWriteStream(gzipPath, { mode: 0o640 });
            input
                .pipe(gzip)
                .on('error', reject)
                .pipe(output)
                .on('finish', (err) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve();
                }
            });
        });
    }
    makeSureArchiveFolderExists() {
        if (this.archiveFolderExists) {
            return true;
        }
        if (!fs.existsSync(this.loggingConfig.archiveDirPath)) {
            fs.mkdirSync(this.loggingConfig.archiveDirPath);
        }
        this.archiveFolderExists = true;
    }
    getMinDateFromDateStrings(fileDates) {
        return new Date(Math.min.apply(null, fileDates.map((e) => {
            return new Date(e + 'Z');
        })));
    }
    getDateFromFileNames(files) {
        return files.map((name) => {
            return name.replace(`${Constants_1.LOGGING.LOG_ARCHIVED_EXTENSION}`, '').replace(`${this.loggingConfig.fileName}-`, '');
        });
    }
}
exports.LoggingUtils = LoggingUtils;


/***/ }),
/* 234 */
/***/ (function(module, exports) {

module.exports = require("@jfrog/event-nodejs-client");

/***/ }),
/* 235 */
/***/ (function(module, exports) {

module.exports = require("node-cache");

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.controllerErrorHandler = void 0;
const API_1 = __webpack_require__(7);
function controllerErrorHandler() {
    return (target, propertyKey, descriptor) => {
        const { isFunction, isAsync } = API_1.API.getFunctionDetails(descriptor.value);
        const oldFunc = descriptor.value;
        if (isAsync) {
            descriptor.value = async function () {
                try {
                    return await oldFunc.apply(this, arguments);
                }
                catch (e) {
                    return arguments[2](e);
                }
            };
        }
        else if (isFunction) {
            descriptor.value = function () {
                return oldFunc.apply(this, arguments);
            };
        }
    };
}
exports.controllerErrorHandler = controllerErrorHandler;


/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.handleAccessUnauthorized = void 0;
const API_1 = __webpack_require__(7);
const Constants_1 = __webpack_require__(0);
const LoggerFactory_1 = __webpack_require__(1);
const Constants_2 = __webpack_require__(0);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
function handleAccessUnauthorized() {
    return (target, propertyKey, descriptor) => {
        const { isFunction, isAsync } = API_1.API.getFunctionDetails(descriptor.value);
        const oldFunc = descriptor.value;
        if (isAsync) {
            descriptor.value = async function () {
                try {
                    return await oldFunc.apply(this, arguments);
                }
                catch (e) {
                    handle401(e);
                    throw e;
                }
            };
        }
        else if (isFunction) {
            descriptor.value = function () {
                return oldFunc.apply(this, arguments);
            };
        }
    };
}
exports.handleAccessUnauthorized = handleAccessUnauthorized;
function handle401(e) {
    var _a;
    if (((_a = e === null || e === void 0 ? void 0 : e.response) === null || _a === void 0 ? void 0 : _a.status) === Constants_1.STATUS_CODES.UNAUTHORIZED) {
        logger.warn("access client got disconnected, attempting reconnect");
        const eventEmitter = API_1.API.getGlobalEventEmitter();
        eventEmitter.emit(Constants_2.EVENTS.ACCESS.ADMIN_CLIENT_REJOIN);
    }
}


/***/ }),
/* 238 */
/***/ (function(module, exports) {

module.exports = require("@jfrog/mission-control-nodejs-client");

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsService = void 0;
const access_nodejs_client_1 = __webpack_require__(9);
const AccessAdminClient_1 = __webpack_require__(12);
const AccessService_1 = __webpack_require__(28);
const ProjectUtils_1 = __webpack_require__(240);
const ProjectsRolesService_1 = __webpack_require__(89);
class ProjectsService extends AccessService_1.AccessService {
    static roles() {
        return ProjectsRolesService_1.ProjectsRolesService;
    }
    static async getAll(authData) {
        const client = await ProjectsService.getClient();
        const ctx = await AccessAdminClient_1.AccessAdminClient.getAccessContext(authData);
        const projects = await client.projects().getUserContextProjects(ctx);
        return projects.map(project => ProjectUtils_1.ProjectUtils.projectModelToLeanProject(project));
    }
    static async get(authData, projectKey) {
        const client = await ProjectsService.getClient();
        const ctx = await AccessAdminClient_1.AccessAdminClient.getAccessContext(authData);
        const projectModel = await client.projects().get(ctx, projectKey);
        return ProjectUtils_1.ProjectUtils.projectModelToProject(projectModel);
    }
    static async create(authData, project) {
        const client = await ProjectsService.getClient();
        const ctx = await AccessAdminClient_1.AccessAdminClient.getAccessContext(authData);
        const projectModel = ProjectUtils_1.ProjectUtils.projectToProjectModel(project);
        const projectModelResponse = await client.projects().create(ctx, projectModel);
        return ProjectUtils_1.ProjectUtils.projectModelToProject(projectModelResponse);
    }
    static async edit(authData, project) {
        const client = await ProjectsService.getClient();
        const ctx = await AccessAdminClient_1.AccessAdminClient.getAccessContext(authData);
        const projectModel = ProjectUtils_1.ProjectUtils.projectToProjectModel(project);
        const { projectKey } = project;
        const promises = [
            client.projects().editAttributes(ctx, projectModel),
            client.projects().editMembers(ctx, access_nodejs_client_1.MemberType.USER, projectKey, projectModel.getUsersMap()),
            client.projects().editMembers(ctx, access_nodejs_client_1.MemberType.GROUP, projectKey, projectModel.getGroupsMap()),
        ]; // todo :: maybe add retry
        return Promise.all(promises);
    }
    static async editDescription(authData, description, projectKey) {
        const client = await ProjectsService.getClient();
        const ctx = await AccessAdminClient_1.AccessAdminClient.getAccessContext(authData);
        await client.projects().editDescription(ctx, projectKey, description);
        return { description };
    }
    static async editUsers(authData, users, projectKey) {
        const client = await ProjectsService.getClient();
        const ctx = await AccessAdminClient_1.AccessAdminClient.getAccessContext(authData);
        const membersMap = ProjectUtils_1.ProjectUtils.convertArrayOfEntitiesToMembersMap(users);
        await client.projects().editMembers(ctx, access_nodejs_client_1.MemberType.USER, projectKey, membersMap);
        return { users };
    }
    static async editGroups(authData, groups, projectKey) {
        const client = await ProjectsService.getClient();
        const ctx = await AccessAdminClient_1.AccessAdminClient.getAccessContext(authData);
        const membersMap = ProjectUtils_1.ProjectUtils.convertArrayOfEntitiesToMembersMap(groups);
        await client.projects().editMembers(ctx, access_nodejs_client_1.MemberType.GROUP, projectKey, membersMap);
        return { groups };
    }
    static async delete(authData, projectKey) {
        const client = await ProjectsService.getClient();
        const ctx = await AccessAdminClient_1.AccessAdminClient.getAccessContext(authData);
        return client.projects().delete(ctx, projectKey);
    }
    static async deleteUsers(authData, projectKey, users) {
        const client = await ProjectsService.getClient();
        const ctx = await AccessAdminClient_1.AccessAdminClient.getAccessContext(authData);
        return client.projects().deleteMembers(ctx, access_nodejs_client_1.MemberType.USER, projectKey, users);
    }
    static async deleteGroups(authData, projectKey, groups) {
        const client = await ProjectsService.getClient();
        const ctx = await AccessAdminClient_1.AccessAdminClient.getAccessContext(authData);
        return client.projects().deleteMembers(ctx, access_nodejs_client_1.MemberType.GROUP, projectKey, groups);
    }
    static async assignReposToProject(authData, assignments) {
        const client = await ProjectsService.getClient();
        const ctx = await AccessAdminClient_1.AccessAdminClient.getAccessContext(authData);
        const moveProjectResourcesRequestList = ProjectUtils_1.ProjectUtils.assignmentToMoveProjectsResourcesRequest(assignments);
        return client.projects().moveResources(ctx, moveProjectResourcesRequestList);
    }
    static async shareRepoWithProjects(authData, resourceSharingRequests) {
        const client = await ProjectsService.getClient();
        const ctx = await AccessAdminClient_1.AccessAdminClient.getAccessContext(authData);
        const shareResourceRequest = ProjectUtils_1.ProjectUtils.resourceShareToResourceShareRequest(resourceSharingRequests);
        return client.projects().shareResource(ctx, shareResourceRequest);
    }
}
exports.ProjectsService = ProjectsService;


/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectUtils = exports.resourceTypeToUIResourceTypeMap = exports.defaultProject = exports.projectAdminRoleName = void 0;
const access_nodejs_client_1 = __webpack_require__(9);
const LoggerFactory_1 = __webpack_require__(1);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
exports.projectAdminRoleName = 'Project Admin';
exports.defaultProject = 'default';
exports.resourceTypeToUIResourceTypeMap = new Map([
    ['repo', 'repos'],
    ['build', 'builds'],
    ['release_bundle', 'releaseBundles'],
    ['destination', 'destinations'],
    ['pipeline_source', 'pipelineSources'],
    ['pipeline_integration', 'pipelineIntegrations'],
    ['pipeline_node_pool', 'pipelineNodePools'],
]);
class ProjectUtils {
    static projectToProjectModel(project) {
        const projectModel = new access_nodejs_client_1.ProjectModel();
        projectModel.setName(project.name);
        projectModel.setDescription(project.description);
        projectModel.setProjectAdminCanManageMembers(project.canAdminsManageMembers);
        projectModel.setProjectAdminCanManageResources(project.canProjectAdminsManageResources);
        projectModel.setProjectAdminCanIndexResources(project.canAdminsIndexResources);
        projectModel.setProjectAdminCanAllowIgnoreRules(project.canAdminsIgnoreRules);
        projectModel.setProjectAdminCanManageSecurityAssets(project.canAdminsManageSecurityAssets);
        projectModel.setStorageQuotaBytes(project.storageQuota);
        projectModel.setSoftLimit(project.softLimit);
        projectModel.setProjectKey(project.projectKey);
        const usersMap = projectModel.getUsersMap();
        const groupsMap = projectModel.getGroupsMap();
        const { users, groups, resources } = project;
        users === null || users === void 0 ? void 0 : users.forEach((user) => usersMap.set(user.name, ProjectUtils.getMembership(user)));
        groups === null || groups === void 0 ? void 0 : groups.forEach((group) => groupsMap.set(group.name, ProjectUtils.getMembership(group)));
        if (resources) {
            ProjectUtils.setProjectModelResources(resources, projectModel);
        }
        return projectModel;
    }
    static setProjectModelResources(projectResources, projectModel) {
        const resourcesMap = projectModel.getResourcesMap();
        Object.entries(projectResources).forEach(([type, resources]) => {
            resourcesMap.set(ProjectUtils.getResourcesTypeKeyByMapValue(type), ProjectUtils.getProjectResourcesEntity(resources));
        });
    }
    static setProjectRequestResources(resourceType, resources, moveProjectResourcesRequest) {
        const resourcesMap = moveProjectResourcesRequest.getResourcesMap();
        resourcesMap.set(ProjectUtils.getResourcesTypeKeyByMapValue(resourceType), ProjectUtils.getProjectResourcesEntity(resources));
    }
    static assignmentToMoveProjectsResourcesRequest(assignments) {
        const { resources, targetProject, resourcesType } = assignments;
        return resources.map(resource => {
            var _a;
            const moveProjectResourcesRequest = new access_nodejs_client_1.MoveProjectResourcesRequest();
            moveProjectResourcesRequest.setSourceProject((_a = resource.sourceProject) !== null && _a !== void 0 ? _a : exports.defaultProject);
            moveProjectResourcesRequest.setTargetProject(targetProject);
            ProjectUtils.setProjectRequestResources(resourcesType, [resource.resource], moveProjectResourcesRequest);
            return moveProjectResourcesRequest;
        });
    }
    static resourceShareToResourceShareRequest(resourceSharingRequests) {
        const shareRequests = [];
        resourceSharingRequests.forEach(request => {
            const { resourceName, resourceType, sourceProject, targetProjects, shareWithAllProjects } = request;
            const projectResourceType = ProjectUtils.getResourcesTypeKeyByMapValue(resourceType);
            const resourceShareRequest = new access_nodejs_client_1.ResourceShareRequest(sourceProject, resourceName, projectResourceType, targetProjects, shareWithAllProjects);
            shareRequests.push(resourceShareRequest);
        });
        return shareRequests;
    }
    static projectModelToProject(projectModel) {
        const project = {
            name: projectModel.getName(),
            description: projectModel.getDescription(),
            canProjectAdminsManageResources: projectModel.getProjectAdminCanManageResources(),
            canAdminsManageMembers: projectModel.getProjectAdminCanManageMembers(),
            canAdminsIndexResources: projectModel.getProjectAdminCanIndexResources(),
            canAdminsIgnoreRules: projectModel.getProjectAdminCanAllowIgnoreRules(),
            canAdminsManageSecurityAssets: projectModel.getProjectAdminCanManageSecurityAssets(),
            storageQuota: projectModel.getStorageQuotaBytes(),
            projectKey: projectModel.getProjectKey(),
            softLimit: projectModel.getSoftLimit(),
        };
        project.users = ProjectUtils.convertMembersMapToArrayOfEntities(projectModel.getUsersMap());
        project.groups = ProjectUtils.convertMembersMapToArrayOfEntities(projectModel.getGroupsMap());
        project.admins = ProjectUtils.getProjectAdmins(project);
        project.resources = ProjectUtils.convertResourcesMapToResourcesObject(projectModel.getResourcesMap());
        return project;
    }
    static projectModelToLeanProject(project) {
        const adminPrivileges = project.getAdminPrivileges();
        const storageQuota = project.getStorageQuota();
        const admins = project.getAdminMembers();
        return {
            name: project.getName(),
            description: project.getDescription(),
            canProjectAdminsManageResources: adminPrivileges.getCanManageResources(),
            canAdminsManageMembers: adminPrivileges.getCanManageMembers(),
            canAdminsIndexResources: adminPrivileges.getCanIndexResources(),
            canAdminsIgnoreRules: adminPrivileges.getCanAllowIgnoreRules(),
            canAdminsManageSecurityAssets: adminPrivileges.getCanManageSecurityAssets(),
            isCurrentUserProjectAdmin: adminPrivileges.getIsProjectAdmin(),
            admins: {
                users: admins.getUsersList(),
                groups: admins.getGroupsList(),
            },
            projectKey: project.getProjectKey(),
            storageQuota: storageQuota === null || storageQuota === void 0 ? void 0 : storageQuota.getStorageQuotaBytes(),
        };
    }
    static getMembership(entity) {
        const projectMembership = new access_nodejs_client_1.ProjectMembership();
        const roleList = entity.roles.map((role) => role.name);
        projectMembership.setRolesList(roleList);
        return projectMembership;
    }
    static getProjectResourcesEntity(resources) {
        const projectResourcesEntity = new access_nodejs_client_1.ProjectResourcesEntity();
        projectResourcesEntity.setResourcesList(resources.map((resource) => {
            const projectResourceEntity = new access_nodejs_client_1.ProjectResourceEntity();
            projectResourceEntity.setResourceName(resource.name);
            projectResourceEntity.setEnvironmentsList(resource.environments);
            return projectResourceEntity;
        }));
        return projectResourcesEntity;
    }
    static getProjectAdmins(project) {
        const users = ProjectUtils.getAdminsFromEntities(project.users);
        const groups = ProjectUtils.getAdminsFromEntities(project.groups);
        return { users, groups };
    }
    static getAdminsFromEntities(entities) {
        return entities
            .filter((entity) => entity.roles.map((role) => role.name).includes(exports.projectAdminRoleName))
            .map((entity) => entity.name);
    }
    static convertMembersMapToArrayOfEntities(membersMap) {
        const entities = [];
        membersMap === null || membersMap === void 0 ? void 0 : membersMap.forEach((projectMembership, memberName) => {
            const roles = projectMembership.getRolesList().map((roleName) => {
                return { name: roleName };
            });
            entities.push({
                name: memberName,
                roles,
            });
        });
        return entities;
    }
    static convertArrayOfEntitiesToMembersMap(entities) {
        const projectMembersRequest = new access_nodejs_client_1.ProjectMembersRequest();
        const membersMap = projectMembersRequest.getMembersMap();
        entities.forEach((entity) => {
            const projectMembership = new access_nodejs_client_1.ProjectMembership();
            const roleList = entity.roles.map((role) => role.name);
            projectMembership.setRolesList(roleList);
            membersMap.set(entity.name, projectMembership);
        });
        return membersMap;
    }
    static convertResourcesMapToResourcesObject(resourcesMap) {
        const resources = {
            repos: [],
            pipelineSources: [],
            pipelineIntegrations: [],
            pipelineNodePools: [],
        };
        resourcesMap === null || resourcesMap === void 0 ? void 0 : resourcesMap.forEach((projectResources, resourceType) => {
            const uiResourceType = exports.resourceTypeToUIResourceTypeMap.get(resourceType);
            resources[uiResourceType] = projectResources.getResourcesList().map((projectResource) => {
                return {
                    name: projectResource.getResourceName(),
                    environments: projectResource.getEnvironmentsList(),
                };
            });
        });
        return resources;
    }
    static getResourcesTypeKeyByMapValue(searchValue) {
        return [...exports.resourceTypeToUIResourceTypeMap].find(([_, val]) => val === searchValue)[0];
    }
}
exports.ProjectUtils = ProjectUtils;


/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionListMethod = void 0;
var ActionListMethod;
(function (ActionListMethod) {
    ActionListMethod["USER"] = "getUserActionsList";
    ActionListMethod["GROUP"] = "getGroupActionsList";
})(ActionListMethod = exports.ActionListMethod || (exports.ActionListMethod = {}));


/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(243), exports);
__exportStar(__webpack_require__(64), exports);


/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(244), exports);
__exportStar(__webpack_require__(246), exports);
__exportStar(__webpack_require__(92), exports);
__exportStar(__webpack_require__(91), exports);


/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionTransformer = void 0;
const PermissionViewModelTransformer_1 = __webpack_require__(91);
const PermissionGrpcTransformer_1 = __webpack_require__(92);
class PermissionTransformer {
    constructor(data) {
        if (!Array.isArray(data)) {
            this._transformer = new PermissionViewModelTransformer_1.PermissionViewModelTransformer(data);
        }
        else if (Array.isArray(data)) {
            this._transformer = new PermissionGrpcTransformer_1.PermissionGrpcTransformer(data);
        }
        else {
            throw new Error(`PermissionTransformer parameter must be of type PermissionViewModel or array of Permissions`);
        }
    }
    toGrpcPermissions() {
        return this._transformer.toGrpcPermissions();
    }
    toViewPermission() {
        return this._transformer.toViewPermission();
    }
}
exports.PermissionTransformer = PermissionTransformer;


/***/ }),
/* 245 */
/***/ (function(module, exports) {

module.exports = require("lodash.pick");

/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(13), exports);
__exportStar(__webpack_require__(260), exports);
__exportStar(__webpack_require__(261), exports);
__exportStar(__webpack_require__(98), exports);
__exportStar(__webpack_require__(37), exports);


/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthErrorNoCookies = void 0;
const AuthError_1 = __webpack_require__(10);
class AuthErrorNoCookies extends AuthError_1.AuthError {
    constructor(message = AuthErrorNoCookies.defaultMessage) {
        super(message);
    }
    static get defaultMessage() {
        return 'No ui sessions were found in request cookies.';
    }
}
exports.AuthErrorNoCookies = AuthErrorNoCookies;


/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthErrorNotAdmin = void 0;
const AuthError_1 = __webpack_require__(10);
const Constants_1 = __webpack_require__(0);
class AuthErrorNotAdmin extends AuthError_1.AuthError {
    constructor(message = AuthError_1.AuthError.defaultMessage) {
        super(message, Constants_1.STATUS_CODES.FORBIDDEN);
    }
    static get defaultMessage() {
        return 'Only admin is authorized to access this route';
    }
}
exports.AuthErrorNotAdmin = AuthErrorNotAdmin;


/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthErrorSessionExpired = void 0;
const AuthError_1 = __webpack_require__(10);
class AuthErrorSessionExpired extends AuthError_1.AuthError {
    constructor(message = AuthErrorSessionExpired.defaultMessage) {
        super(message);
    }
    static get defaultMessage() {
        return 'ui session token expired';
    }
}
exports.AuthErrorSessionExpired = AuthErrorSessionExpired;


/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthErrorVerifyFail = void 0;
const AuthError_1 = __webpack_require__(10);
class AuthErrorVerifyFail extends AuthError_1.AuthError {
    constructor(reason, message = AuthErrorVerifyFail.defaultMessage) {
        super(message + reason);
        this.reason = reason;
    }
    static get defaultMessage() {
        return `UI session token not valid. tried to verify the token with Access with no success, the reason is `;
    }
}
exports.AuthErrorVerifyFail = AuthErrorVerifyFail;


/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthErrorImpersonateFail = void 0;
const AuthError_1 = __webpack_require__(10);
class AuthErrorImpersonateFail extends AuthError_1.AuthError {
    constructor(message = AuthErrorImpersonateFail.defaultMessage) {
        super(message);
    }
    static get defaultMessage() {
        return `failed getting impersonation token from access.`;
    }
}
exports.AuthErrorImpersonateFail = AuthErrorImpersonateFail;


/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthErrorParseToken = void 0;
const AuthError_1 = __webpack_require__(10);
class AuthErrorParseToken extends AuthError_1.AuthError {
    constructor(message = AuthErrorParseToken.defaultMessage) {
        super(message);
    }
    static get defaultMessage() {
        return 'failed parsing token in access';
    }
}
exports.AuthErrorParseToken = AuthErrorParseToken;


/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthErrorGetCurrentUser = void 0;
const AuthError_1 = __webpack_require__(10);
class AuthErrorGetCurrentUser extends AuthError_1.AuthError {
    constructor(message = AuthErrorGetCurrentUser.defaultMessage) {
        super(message);
    }
    static get defaultMessage() {
        return `failed parsing or getting current user from Artifactory`;
    }
}
exports.AuthErrorGetCurrentUser = AuthErrorGetCurrentUser;


/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginErrorReceivedAnonymous = void 0;
const AuthError_1 = __webpack_require__(10);
class LoginErrorReceivedAnonymous extends AuthError_1.AuthError {
    constructor(message = LoginErrorReceivedAnonymous.defaultMessage) {
        super(message);
    }
    static get defaultMessage() {
        return 'got \'anonymous\' user name from Artifactory';
    }
}
exports.LoginErrorReceivedAnonymous = LoginErrorReceivedAnonymous;


/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthErrorCrowdCookieNoMatch = void 0;
const AuthError_1 = __webpack_require__(10);
class AuthErrorCrowdCookieNoMatch extends AuthError_1.AuthError {
    constructor(message = AuthErrorCrowdCookieNoMatch.defaultMessage) {
        super(message);
    }
    static get defaultMessage() {
        return `Crowd cookie doesn't match the crowd cookie stored in the ui session token`;
    }
}
exports.AuthErrorCrowdCookieNoMatch = AuthErrorCrowdCookieNoMatch;


/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthErrorAnonymousNotAllowed = void 0;
const AuthError_1 = __webpack_require__(10);
const Constants_1 = __webpack_require__(0);
class AuthErrorAnonymousNotAllowed extends AuthError_1.AuthError {
    constructor() {
        const response = {
            errors: [
                {
                    status: Constants_1.STATUS_CODES.UNAUTHORIZED,
                    message: 'Authentication is required',
                },
            ],
        };
        super(AuthErrorAnonymousNotAllowed.defaultMessage, response);
    }
    static get defaultMessage() {
        return `anonymous access not allowed`;
    }
}
exports.AuthErrorAnonymousNotAllowed = AuthErrorAnonymousNotAllowed;


/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthErrorNoCrowdCookie = void 0;
const AuthError_1 = __webpack_require__(10);
class AuthErrorNoCrowdCookie extends AuthError_1.AuthError {
    constructor(message = AuthErrorNoCrowdCookie.defaultMessage) {
        super(message);
    }
    static get defaultMessage() {
        return `Crowd cookie doesn\'t exist even though UI session tokens on request were created using crowd`;
    }
}
exports.AuthErrorNoCrowdCookie = AuthErrorNoCrowdCookie;


/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthErrorReAuthenticateInternalUser = void 0;
const AuthError_1 = __webpack_require__(10);
class AuthErrorReAuthenticateInternalUser extends AuthError_1.AuthError {
    constructor() {
        super(AuthErrorReAuthenticateInternalUser.defaultMessage);
    }
    static get defaultMessage() {
        return `Failed to re-authenticate internal user in Artifactory`;
    }
}
exports.AuthErrorReAuthenticateInternalUser = AuthErrorReAuthenticateInternalUser;


/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(96), exports);
__exportStar(__webpack_require__(97), exports);


/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(262), exports);


/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SassOnlyError = void 0;
const CustomError_1 = __webpack_require__(16);
const Constants_1 = __webpack_require__(0);
class SassOnlyError extends CustomError_1.CustomError {
    constructor(message = SassOnlyError.defaultMessage) {
        super(message, SassOnlyError.defaultMessage);
        this.statusCode = Constants_1.STATUS_CODES.FORBIDDEN;
    }
    static get defaultMessage() {
        return `route is only allowed for SASS`;
    }
}
exports.SassOnlyError = SassOnlyError;


/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SpringSecurityRememberMeCookieUtil = void 0;
const CookieUtil_1 = __webpack_require__(49);
const Constants_1 = __webpack_require__(0);
class SpringSecurityRememberMeCookieUtil extends CookieUtil_1.default {
    constructor() {
        super(Constants_1.CUSTOM_HEADERS.REMEMBER_ME_COOKIE);
    }
}
exports.SpringSecurityRememberMeCookieUtil = SpringSecurityRememberMeCookieUtil;


/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatformJwtToken = void 0;
const access_nodejs_client_1 = __webpack_require__(9);
const JwtTokenExtension_1 = __webpack_require__(94);
class PlatformJwtToken extends access_nodejs_client_1.JwtPayload {
    constructor(jwtPayload) {
        super();
        for (const key in jwtPayload) {
            if (key in jwtPayload) {
                this[key] = jwtPayload[key];
            }
        }
        this.parsedExtension = new JwtTokenExtension_1.JwtTokenExtension(jwtPayload.extension);
    }
}
exports.PlatformJwtToken = PlatformJwtToken;


/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenScopeUtils = void 0;
const Constants_1 = __webpack_require__(0);
const LoggerFactory_1 = __webpack_require__(1);
const util = __webpack_require__(67);
const zlib = __webpack_require__(83);
const access_nodejs_client_1 = __webpack_require__(9);
const deflate = util.promisify(zlib.deflate);
const inflate = util.promisify(zlib.inflate);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
const { APPLIED_PERMISSIONS_GROUPS } = Constants_1.TOKEN_CONSTANTS.SCOPE;
const { SCOPE_GROUPS_LENGTH_LIMIT } = Constants_1.TOKEN_CONSTANTS;
class TokenScopeUtils {
    static async getGroupsScope(groups) {
        const scopeGroups = {
            groups: APPLIED_PERMISSIONS_GROUPS + ':',
            overTheLimit: false,
            compressed: false,
        };
        if (!Array.isArray(groups)) {
            logger.error(`AccessTokenService::getGroups getGroupsScope received a group which is not an Array`);
            return scopeGroups;
        }
        const groupsInScope = groups.join(',');
        if (groupsInScope.length > TokenScopeUtils.groupsLengthLimit) {
            logger.warn(`AccessTokenService::getGroups groups length is  higher than the limit - ${TokenScopeUtils.groupsLengthLimit}. \nTrying to compress groups`);
            const compressedGroups = await TokenScopeUtils.compressGroups(groupsInScope);
            if (compressedGroups.length > TokenScopeUtils.groupsLengthLimit) {
                // after trying to compress groups scope, the length is still over the limit
                logger.error(`AccessTokenService::getGroups groups length is higher than the limit - ${TokenScopeUtils.groupsLengthLimit} after trying to compress them\ngroups will be truncated!`);
                scopeGroups.overTheLimit = true;
                scopeGroups.groups += access_nodejs_client_1.Scope.generateGroupsString(TokenScopeUtils.cutGroups(groupsInScope));
                return scopeGroups;
            }
            // groups in scope will be compressed
            scopeGroups.compressed = true;
            scopeGroups.groups += compressedGroups;
            return scopeGroups;
        }
        // groups in scope will not be compressed
        scopeGroups.groups += access_nodejs_client_1.Scope.generateGroupsString(groups);
        return scopeGroups;
    }
    static async decompressGroups(groupsFromTokenPayload) {
        const buffer = Buffer.from(groupsFromTokenPayload, 'base64');
        const inflated = await inflate(buffer);
        // @ts-ignore
        return inflated.toString();
    }
    static async compressGroups(groupsInScope) {
        const compressedBuffer = await deflate(groupsInScope);
        // @ts-ignore
        return compressedBuffer.toString('base64');
    }
    static cutGroups(groupsInScope) {
        const partOfTheGroups = groupsInScope.slice(0, TokenScopeUtils.groupsLengthLimit);
        const indexOfLastComma = partOfTheGroups.lastIndexOf(',');
        return partOfTheGroups.slice(0, indexOfLastComma).split(',');
    }
}
exports.TokenScopeUtils = TokenScopeUtils;
TokenScopeUtils.groupsLengthLimit = SCOPE_GROUPS_LENGTH_LIMIT;


/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ImpersonationTokenKey = void 0;
const ServiceID_1 = __webpack_require__(25);
class ImpersonationTokenKey {
    static getKey(serviceName, user, sessionId = '') {
        return `${serviceName}-${user}${sessionId ? '-' + sessionId : ''}`;
    }
    static getAdminKey(serviceName) {
        return `${serviceName}-admin-${ServiceID_1.ServiceID.getServiceId()}`;
    }
}
exports.ImpersonationTokenKey = ImpersonationTokenKey;


/***/ }),
/* 267 */
/***/ (function(module, exports) {

module.exports = require("uid-safe");

/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessSearchTokensService = void 0;
const Decorators_1 = __webpack_require__(2);
const token_pb_1 = __webpack_require__(269);
const AccessAdminClient_1 = __webpack_require__(12);
const LoggerFactory_1 = __webpack_require__(1);
const GrpcErrorUtil_1 = __webpack_require__(103);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
class AccessSearchTokensService {
    static async searchForTokens(ctx, searchTokenRequest) {
        try {
            const accessClient = await AccessAdminClient_1.AccessAdminClient.client;
            return await accessClient.searchUserTokens(ctx, searchTokenRequest);
        }
        catch (e) {
            GrpcErrorUtil_1.GrpcErrorUtil.handleError(e, logger);
        }
    }
    static getSearchTokenRequestFromQuery(query) {
        const searchTokenRequest = new token_pb_1.SearchTokenRequest();
        const { cursor, sortBy, sortDir, search, showNonRevokable } = query;
        if (cursor) {
            searchTokenRequest.setCursor(Number(cursor));
        }
        if (sortBy && sortDir) {
            const orderBy = new token_pb_1.OrderBy();
            orderBy.setOrderByCol(token_pb_1.OrderBy.ColumnOrder[sortBy]);
            orderBy.setDirection(token_pb_1.OrderBy.Direction[sortDir]);
            searchTokenRequest.setOrderBy(orderBy);
        }
        if (search) {
            searchTokenRequest.setFilter(search);
        }
        searchTokenRequest.setOnlyRevocable(showNonRevokable !== 'true');
        return searchTokenRequest;
    }
}
__decorate([
    Decorators_1.methodLog({ logger })
], AccessSearchTokensService, "searchForTokens", null);
__decorate([
    Decorators_1.methodLog({ logger })
], AccessSearchTokensService, "getSearchTokenRequestFromQuery", null);
exports.AccessSearchTokensService = AccessSearchTokensService;


/***/ }),
/* 269 */
/***/ (function(module, exports) {

module.exports = require("@jfrog/access-nodejs-client/dist/__generated__/token_pb");

/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessPermissionsService = void 0;
const AccessService_1 = __webpack_require__(28);
const LoggerFactory_1 = __webpack_require__(1);
const access_nodejs_client_1 = __webpack_require__(9);
const AccessAdminClient_1 = __webpack_require__(12);
const Access_1 = __webpack_require__(36);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
const ALL_RESOURCE_TYPES_ARR = [
    access_nodejs_client_1.ResourceType.REPO,
    access_nodejs_client_1.ResourceType.BUILD,
    access_nodejs_client_1.ResourceType.RELEASE_BUNDLE,
    access_nodejs_client_1.ResourceType.DESTINATION,
    access_nodejs_client_1.ResourceType.PIPELINE_SOURCE
];
class AccessPermissionsService extends AccessService_1.AccessService {
    static async createPermission(permissionView, authData) {
        try {
            const accessClient = await AccessPermissionsService.getClient();
            const transformer = new Access_1.PermissionTransformer(permissionView);
            const permissionList = transformer.toGrpcPermissions();
            const ctx = await AccessAdminClient_1.AccessAdminClient.getAccessContext(authData);
            return await accessClient.permissions().create(ctx, permissionList);
        }
        catch (e) {
            logger.error(e);
        }
    }
    static async editPermission(permissionView, authData) {
        try {
            const accessClient = await AccessPermissionsService.getClient();
            const transformer = new Access_1.PermissionTransformer(permissionView);
            const permissionList = transformer.toGrpcPermissions();
            const ctx = await AccessAdminClient_1.AccessAdminClient.getAccessContext(authData);
            return await accessClient.permissions().upsert(ctx, permissionList);
        }
        catch (e) {
            logger.error(e);
        }
    }
    static async deletePermissions(permissionIds, authData) {
        logger.debug('attempting to delete permission : ', permissionIds);
        try {
            const accessClient = await AccessPermissionsService.getClient();
            const ctx = await AccessAdminClient_1.AccessAdminClient.getAccessContext(authData);
            return await accessClient.permissions().delete(ctx, permissionIds);
        }
        catch (e) {
            logger.error(e);
        }
    }
    static async searchPermissions(searchContext, authData) {
        logger.debug('start searchPermissions', searchContext);
        try {
            const accessClient = await AccessPermissionsService.getClient();
            const ctx = await AccessAdminClient_1.AccessAdminClient.getAccessContext(authData);
            const permissionsResponse = await accessClient.permissions().search(ctx, searchContext);
            const permissions = permissionsResponse.getPermissionsList();
            const permissionsView = permissions.map((singlePermission) => {
                return {
                    name: singlePermission.getDisplayName(),
                    groups: singlePermission.getGroupsList(),
                    users: singlePermission.getUsersList(),
                    pids: singlePermission.getIdandtypesList().map((res) => res.getId())
                };
            });
            const totalGroupsAndUsers = permissionsView.reduce((acc, item) => acc + item.groups.length + item.users.length, 0);
            return {
                totalCount: totalGroupsAndUsers,
                filteredCount: totalGroupsAndUsers,
                data: permissionsView,
                continueState: permissionsResponse.getContinueState()
            };
        }
        catch (e) {
            logger.error(e);
        }
    }
    static async getPermissionByTarget(permissionTargetName, authData) {
        logger.debug(`start getPermissionByTarget; permissionTargetName: ${permissionTargetName}`);
        try {
            const accessClient = await AccessPermissionsService.getClient();
            const ctx = await AccessAdminClient_1.AccessAdminClient.getAccessContext(authData);
            const permissions = await accessClient
                .permissions()
                .getTarget(ctx, permissionTargetName, ALL_RESOURCE_TYPES_ARR);
            const transformer = new Access_1.PermissionTransformer(permissions);
            return permissions.length ? transformer.toViewPermission() : null;
        }
        catch (e) {
            logger.error(e);
        }
    }
}
exports.AccessPermissionsService = AccessPermissionsService;


/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessVaultService = void 0;
const Decorators_1 = __webpack_require__(2);
const AccessService_1 = __webpack_require__(28);
const AccessAdminClient_1 = __webpack_require__(12);
class AccessVaultService extends AccessService_1.AccessService {
    static async get(authData, key) {
        const client = await AccessVaultService.getClient();
        const ctx = await AccessAdminClient_1.AccessAdminClient.getAccessContext(authData);
        return await client.vault().getConfig(ctx, key);
    }
    static async set(authData, config, key) {
        const client = await AccessVaultService.getClient();
        const ctx = await AccessAdminClient_1.AccessAdminClient.getAccessContext(authData);
        const prepared = {
            type: config.type,
            key,
            config
        };
        return await client.vault().setConfig(ctx, key, prepared);
    }
    static async delete(authData, key) {
        const client = await AccessVaultService.getClient();
        const ctx = await AccessAdminClient_1.AccessAdminClient.getAccessContext(authData);
        return await client.vault().deleteConfig(ctx, key);
    }
}
__decorate([
    Decorators_1.handleAccessUnauthorized()
], AccessVaultService, "get", null);
__decorate([
    Decorators_1.handleAccessUnauthorized()
], AccessVaultService, "set", null);
__decorate([
    Decorators_1.handleAccessUnauthorized()
], AccessVaultService, "delete", null);
exports.AccessVaultService = AccessVaultService;


/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtifactoryLoginService = void 0;
const AuthenticationErrors_1 = __webpack_require__(13);
const ArtifactoryService_1 = __webpack_require__(60);
const Constants_1 = __webpack_require__(0);
const LoggerFactory_1 = __webpack_require__(1);
const ClientFactory_1 = __webpack_require__(18);
const Decorators_1 = __webpack_require__(2);
const Authentication_1 = __webpack_require__(104);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
class ArtifactoryLoginService extends ArtifactoryService_1.ArtifactoryService {
    static async getUserInfoWithSessionId(sessionId, isSamlUser = false) {
        if (!sessionId) {
            throw new AuthenticationErrors_1.AuthErrorGetCurrentUser();
        }
        logger.debug(`getting current user from artifactory with session if - ${sessionId}`);
        const artifactoryLoginClient = await ArtifactoryService_1.ArtifactoryService.getAnonymousClient(ClientFactory_1.ANONYMOUS_CTX);
        const userInfoResults = await artifactoryLoginClient.login().getUserInfoWithSessionId(sessionId);
        const platformUser = userInfoResults.data;
        const headers = userInfoResults.headers;
        if (!platformUser) {
            throw new AuthenticationErrors_1.AuthErrorGetCurrentUser();
        }
        if (headers[Constants_1.CROWD.VALIDATION_HEADER]) {
            platformUser.crowdNextValidationTime = headers[Constants_1.CROWD.VALIDATION_HEADER];
        }
        if (isSamlUser) {
            logger.debug(`fetching SAML session index for user - ${platformUser.name}`);
            platformUser.samlSessionIndex = await ArtifactoryLoginService.getSamlSessionIndex(sessionId);
        }
        const shouldReturnGroups = Authentication_1.LoginService.shouldReturnGroups(platformUser, isSamlUser);
        if (shouldReturnGroups) {
            logger.debug(`fetching groups for user - ${platformUser.name}`);
            platformUser.groups = await ArtifactoryLoginService.getUserGroups(sessionId);
        }
        return platformUser;
    }
    static async getUserGroups(sessionId) {
        const artifactoryLoginClient = await ArtifactoryService_1.ArtifactoryService.getAnonymousClient(ClientFactory_1.ANONYMOUS_CTX);
        const userInfoResults = await artifactoryLoginClient.login().getUserInfoWithSessionId(sessionId, true);
        const platformUser = userInfoResults.data;
        if (!platformUser) {
            throw new AuthenticationErrors_1.AuthErrorGetCurrentUser();
        }
        logger.debug(`found groups for user for user - ${platformUser.name}: ${platformUser.groups}`);
        return platformUser.groups || [];
    }
    static async getSamlSessionIndex(sessionId) {
        const artifactoryLoginClient = await ArtifactoryLoginService.getAnonymousClient(ClientFactory_1.ANONYMOUS_CTX);
        const isSamlResponse = await artifactoryLoginClient.login().getIsSamlWithSessionId(sessionId);
        logger.debug(`got isSaml response with SAML session index of - ${isSamlResponse.samlSessionIndex}`);
        return isSamlResponse.samlSessionIndex;
    }
    static async reAuthenticateInternalUser(userName) {
        const internalUserRealm = Constants_1.ARTIFACTORY_REALM_TYPES.ACCESS;
        const adminClient = await ArtifactoryService_1.ArtifactoryService.getAdminClient();
        logger.debug(`about to re-authenticate user - ${userName}`);
        return await adminClient.login().reAuthenticateUser(internalUserRealm, userName);
    }
    static async getUserInfoWithSpringRememberMeCookie(rememberMeToken) {
        const client = await ArtifactoryService_1.ArtifactoryService.getAnonymousClient(ClientFactory_1.ANONYMOUS_CTX);
        return await client.login().getUserInfoWithSpringRememberMeCookie(rememberMeToken);
    }
}
__decorate([
    Decorators_1.methodLog({ logger })
], ArtifactoryLoginService, "getUserInfoWithSpringRememberMeCookie", null);
exports.ArtifactoryLoginService = ArtifactoryLoginService;


/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CrowdAuthenticationService = void 0;
const Constants_1 = __webpack_require__(0);
class CrowdAuthenticationService {
    static isInCrowdMode(parsedToken) {
        return parsedToken.parsedExtension.realm === Constants_1.REALM.CROWD;
    }
}
exports.CrowdAuthenticationService = CrowdAuthenticationService;


/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginService = void 0;
const Access_1 = __webpack_require__(27);
const Constants_1 = __webpack_require__(0);
const AccessAdminClient_1 = __webpack_require__(12);
const Decorators_1 = __webpack_require__(2);
class LoginService extends Access_1.AccessService {
    static verifyUserResponse(getCurrentUserResult) {
        return (getCurrentUserResult &&
            typeof getCurrentUserResult === 'object' &&
            getCurrentUserResult.name &&
            getCurrentUserResult.name !== Constants_1.ANONYMOUS);
    }
    static shouldReturnGroups(platformUser, isSamlUser = false) {
        const transientUser = !platformUser.existsInDB;
        return transientUser || isSamlUser;
    }
    static isOauthError(location) {
        return location === null || location === void 0 ? void 0 : location.includes(Constants_1.OAUTH_ERROR_QUERY_PARAM);
    }
    static convertLocationToRelativeUrl(location) {
        const query = location.split('?')[1];
        return query ? '/?' + query : '/?';
    }
    static async getMfaStatusForUser(username = '') {
        const client = await Access_1.AccessService.getClient();
        const ctx = await AccessAdminClient_1.AccessAdminClient.getAccessAdminContext();
        const { status } = await client.mfa().getUserStatus(ctx, username.toLowerCase());
        return status;
    }
    static async enrollUser(authenticator, username = '') {
        const client = await Access_1.AccessService.getClient();
        const ctx = await AccessAdminClient_1.AccessAdminClient.getAccessAdminContext();
        return await client.mfa().getEnrollmentData(ctx, username.toLowerCase(), authenticator);
    }
    static async verifyMfaUser(authenticator, username = '', code) {
        const client = await Access_1.AccessService.getClient();
        const ctx = await AccessAdminClient_1.AccessAdminClient.getAccessAdminContext();
        return await client.mfa().verifyUser(ctx, username.toLowerCase(), authenticator, code);
    }
}
__decorate([
    Decorators_1.handleAccessUnauthorized()
], LoginService, "getMfaStatusForUser", null);
__decorate([
    Decorators_1.handleAccessUnauthorized()
], LoginService, "enrollUser", null);
__decorate([
    Decorators_1.handleAccessUnauthorized()
], LoginService, "verifyMfaUser", null);
exports.LoginService = LoginService;


/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenVerificationService = void 0;
const Constants_1 = __webpack_require__(0);
class TokenVerificationService {
    static isServiceAdmin(token) {
        const self = TokenVerificationService;
        return self.isServiceAudience(token.audience) && self.isAdminScope(token.scope);
    }
    static isAdminScope(scope) {
        return scope && scope === Constants_1.TOKEN_CONSTANTS.SCOPE.APPLIED_PERMISSIONS_ADMIN;
    }
    static isServiceAudience(audience) {
        return audience && TokenVerificationService.jffeServiceIdRegexTest.test(audience);
    }
}
exports.TokenVerificationService = TokenVerificationService;
TokenVerificationService.jffeServiceIdRegexTest = new RegExp(`${Constants_1.SERVICES.FRONTEND.TYPE}@(\\*|[a-zA-Z0-9_\\-]+)$`);


/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
class UserService {
    static setUserFieldsFromJwtExtention(userInfo, jwtExtension) {
        try {
            const { requireProfileUnlock, requireProfilePassword, externalUser: externalUser, realm } = jwtExtension;
            return {
                ...userInfo,
                requireProfileUnlock: !!requireProfileUnlock,
                requireProfilePassword: !!requireProfilePassword,
                existsInDB: !externalUser,
                realm,
            };
        }
        catch (e) {
            return userInfo;
        }
    }
}
exports.UserService = UserService;


/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtifactoryLogoutService = void 0;
const ArtifactoryService_1 = __webpack_require__(60);
const LoggerFactory_1 = __webpack_require__(1);
const ClientFactory_1 = __webpack_require__(18);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
class ArtifactoryLogoutService extends ArtifactoryService_1.ArtifactoryService {
    static async sessionLogout(sessionId) {
        logger.debug(`sending internal logout to artifactory for session id - ${sessionId}`);
        const client = await ArtifactoryLogoutService.getAnonymousClient(ClientFactory_1.ANONYMOUS_CTX);
        await client.logout().logout(sessionId, true);
    }
    static async getSamlLogoutRequest(samlSessionIndex, authData) {
        logger.debug(`getting saml logout request from Artifactory for samlSessionIndex - ${samlSessionIndex}`);
        const client = await ArtifactoryLogoutService.getClient(authData);
        return await client.logout().samlLogoutRequest(samlSessionIndex);
    }
}
exports.ArtifactoryLogoutService = ArtifactoryLogoutService;


/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DistributionService = void 0;
const LoggerFactory_1 = __webpack_require__(1);
const distribution_nodejs_client_1 = __webpack_require__(84);
const ClientFactory_1 = __webpack_require__(18);
const Decorators_1 = __webpack_require__(2);
const Constants_1 = __webpack_require__(0);
const JFrogService_1 = __webpack_require__(32);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
class DistributionService extends JFrogService_1.JFrogService {
    static async searchBundles(body, authData) {
        if (body.name && typeof body.name === 'string') {
            body.name += body.name.endsWith('*') ? '' : '*';
        }
        const model = new distribution_nodejs_client_1.BundlesSearchRequestModel(body.name, body.before, body.after, body.num_of_rows, body.order_by, body.direction);
        logger.debug('creating distribution client');
        const client = await DistributionService.getClient(authData);
        return await client.bundles().search(model);
    }
    static async getBundle(body, name, authData) {
        logger.debug(`getting distribution bundle : ${name}`);
        const model = new distribution_nodejs_client_1.BundleEntityRequestModel(name, body.before, body.after, body.num_of_rows, body.order_by, body.direction, null);
        const client = await DistributionService.getClient(authData);
        return await client.bundles().getEntity(model);
    }
    static async getBundleVersionsByIds(name, ids, authData) {
        if (ids.length === 0) {
            logger.debug(`got 0 ids for search bundle by version bundle ${name}, returning default`);
            return {
                name,
                versions: [],
                permissions: [],
            };
        }
        const model = new distribution_nodejs_client_1.VersionsByIdsRequestModel(name, ids);
        const client = await DistributionService.getClient(authData);
        return client.bundles().getVersionsByIds(model);
    }
    static async getTopology(authData) {
        const client = await DistributionService.getClient(authData);
        return (await client.system().getNodesTopology());
    }
    static async notifyConfigChanges(configEvent, authData) {
        logger.silly(`notifying distribution of ${configEvent} config changes`);
        const client = await DistributionService.getClient(authData);
        return await client.system().notifyConfigChange(configEvent);
    }
    static async deleteNode(id, authData) {
        const client = await DistributionService.getClient(authData);
        return client.system().deleteNode(id);
    }
    static async getFrontendVersion() {
        // todo implement
        return null;
    }
    static async getFrontendVersionStream(version, os) {
        // todo implement
        return null;
    }
    static async getClient(ctx) {
        return new ClientFactory_1.ClientFactory(Constants_1.SERVICES.DISTRIBUTION.KEY).getWithAuth(ctx);
    }
    static async getUnifiedLogsInfo(authData, nodeId) {
        const client = await DistributionService.getClient(authData);
        if (nodeId) {
            client.updateConfig({
                headers: { [Constants_1.CUSTOM_HEADERS.X_JFROG_ROUTE_TO]: nodeId },
            });
        }
        return client.system().getLogsInfo();
    }
    static async getUnifiedLogsData(authData, nodeId, fileSize, id) {
        const client = await DistributionService.getClient(authData);
        if (nodeId) {
            client.updateConfig({
                headers: { [Constants_1.CUSTOM_HEADERS.X_JFROG_ROUTE_TO]: nodeId },
            });
        }
        return client.system().getLogsData(fileSize, id);
    }
}
__decorate([
    Decorators_1.methodLog({ logger })
], DistributionService, "searchBundles", null);
__decorate([
    Decorators_1.methodLog({ logger })
], DistributionService, "getBundle", null);
__decorate([
    Decorators_1.methodLog({ logger })
], DistributionService, "getBundleVersionsByIds", null);
__decorate([
    Decorators_1.methodLog({ logger })
], DistributionService, "getTopology", null);
__decorate([
    Decorators_1.methodLog({ logger })
], DistributionService, "notifyConfigChanges", null);
__decorate([
    Decorators_1.methodLog({ logger })
], DistributionService, "deleteNode", null);
__decorate([
    Decorators_1.methodLog({ logger })
], DistributionService, "getFrontendVersion", null);
__decorate([
    Decorators_1.methodLog({ logger })
], DistributionService, "getClient", null);
__decorate([
    Decorators_1.methodLog({ logger })
], DistributionService, "getUnifiedLogsInfo", null);
__decorate([
    Decorators_1.methodLog({ logger })
], DistributionService, "getUnifiedLogsData", null);
exports.DistributionService = DistributionService;


/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystemHAService = void 0;
const Constants_1 = __webpack_require__(0);
const Access_1 = __webpack_require__(27);
const LoggerFactory_1 = __webpack_require__(1);
const Decorators_1 = __webpack_require__(2);
const Artifactory_1 = __webpack_require__(59);
const API_1 = __webpack_require__(7);
const config = __webpack_require__(4);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
const masterServiceNames = [...new Set(Object.values(Constants_1.SERVICES).map((s) => s.MICRO_SERVICE_OF))];
const PRIMARY_ROLE = 'Primary';
const serviceTypeToNameMap = new Map();
const serviceNameToMasterName = new Map();
Object.values(Constants_1.SERVICES).forEach((s) => {
    serviceTypeToNameMap.set(s.TYPE, s.NAME);
    serviceNameToMasterName.set(s.NAME, s.MICRO_SERVICE_OF);
});
const NODE_URL_WILDCARD = '(.*)';
class SystemHAService {
    static async getSortedServicesNodes() {
        const distinctNodesMap = {};
        const globalTopology = await Access_1.AccessService.getEnrichedTopology();
        const nodeToResponse = (node) => {
            return {
                service_id: SystemHAService.serviceTypeFromId(node.service_id),
                name: SystemHAService.getServiceNameFromServiceId(node.service_id),
                node_id: node.node_id,
                last_heartbeat: node.last_heartbeat,
                state: node.state,
                version: node.version,
            };
        };
        return globalTopology.services
            .filter(SystemHAService.filterOutOwnServer)
            .map(SystemHAService.setNodeState)
            .sort(SystemHAService.sortHealthyOnTop)
            .filter((node) => {
            const id = SystemHAService.getServiceNameFromServiceId(node.service_id);
            if (id in distinctNodesMap) {
                return false;
            }
            distinctNodesMap[id] = id;
            return true;
        })
            .sort((serviceA, serviceB) => serviceA.last_heartbeat - serviceB.last_heartbeat)
            .reverse()
            .map(nodeToResponse);
    }
    static async getHaStatus(authData) {
        const highAvailabilityTopology = {};
        const topology = await SystemHAService.getMergedTopologies(authData);
        logger.debug(`got merged topology with services :  [${topology.services.map((n) => n.service_id).join(',')}]`);
        const nodeIdToNodeMap = this.getNodeIdToNodeMap(topology);
        logger.debug(`high availability status : nodes list [${[...nodeIdToNodeMap.keys()]}]`);
        const primaryNode = await SystemHAService.getPrimaryNode(authData);
        for (const masterNode of topology.services) {
            const masterServiceName = SystemHAService.getServiceName(masterNode);
            if (SystemHAService.shouldAddServiceToTopology(highAvailabilityTopology, masterServiceName)) {
                highAvailabilityTopology[masterServiceName] = {
                    service_id: masterNode.service_id,
                    custom_base_url: SystemHAService.getUrlFromNode(masterNode),
                    nodes: await SystemHAService.buildHaNodesResponse(masterServiceName, nodeIdToNodeMap, primaryNode),
                };
            }
        }
        return highAvailabilityTopology;
    }
    static async getMergedTopologies(authData) {
        const topology = await Access_1.AccessService.getEnrichedTopology();
        const artifactoryTopology = await SystemHAService.getArtifactoryTopology(authData);
        const getKey = (node) => `${node.node_id}:${node.service_id}`;
        const mappedNodeIdServiceIdToNode = new Map();
        topology.services.forEach((node) => {
            mappedNodeIdServiceIdToNode.set(getKey(node), node);
        });
        artifactoryTopology.nodes.forEach((node) => {
            const key = getKey(node);
            if (mappedNodeIdServiceIdToNode.get(key)) {
                let tempNode = mappedNodeIdServiceIdToNode.get(key);
                const { start_time: uptime, url } = node;
                tempNode = Object.assign(tempNode, { uptime, url });
                tempNode.version = tempNode.version || node.version;
                tempNode.revision = tempNode.revision || node.revision;
                mappedNodeIdServiceIdToNode.set(key, tempNode);
            }
        });
        return { services: [...mappedNodeIdServiceIdToNode.values()] };
    }
    static async getPrimaryNode(authData) {
        const topology = await Artifactory_1.ArtifactoryService.getHighAvailabilityTopology(authData);
        const primaryNode = topology.find((node) => node.role === PRIMARY_ROLE);
        return primaryNode ? primaryNode.id : null;
    }
    static shouldAddServiceToTopology(topology, masterServiceName) {
        return masterServiceNames.includes(masterServiceName) && !topology.hasOwnProperty(masterServiceName);
    }
    static async getArtifactoryTopology(authData) {
        const topology = await Artifactory_1.ArtifactoryService.getTopology(authData);
        const nodeIds = API_1.API.removeArrDuplications(topology.nodes.map((n) => n.node_id));
        const versionsP = nodeIds.map((nodeId) => Artifactory_1.ArtifactoryService.getVersion(authData, nodeId).catch(() => null));
        const nodeIdToRevisionMap = {};
        const versions = await Promise.all(versionsP);
        for (let i = 0; i < nodeIds.length; i++) {
            const id = nodeIds[i];
            const version = versions[i];
            if (version) {
                nodeIdToRevisionMap[id] = version.revision;
            }
        }
        return {
            nodes: topology.nodes.map((node) => {
                node.revision = null;
                if (node.node_id in nodeIdToRevisionMap) {
                    node.revision = nodeIdToRevisionMap[node.node_id];
                }
                return node;
            }),
        };
    }
    static filterOutOwnServer(node) {
        return !node.service_id.includes(Constants_1.SERVICES.FRONTEND.TYPE);
    }
    static sortHealthyOnTop(a, b) {
        return (a.state === Constants_1.TOPOLOGY.STATE.HEALTHY ? 0 : 1) - (b.state === Constants_1.TOPOLOGY.STATE.HEALTHY ? 0 : 1);
    }
    static getServiceNameFromServiceId(serviceId) {
        return serviceTypeToNameMap.get(SystemHAService.serviceTypeFromId(serviceId));
    }
    static getMasterServiceName(node) {
        return serviceNameToMasterName.get(SystemHAService.getServiceName(node));
    }
    static getServiceName(node) {
        const serviceType = node.service_id.split('@')[0];
        return serviceTypeToNameMap.get(serviceType);
    }
    static getUrlFromNode(node) {
        if ('url' in node) {
            return node.url;
        }
        let subUrl = node.endpoints[0].paths[0].replace(NODE_URL_WILDCARD, '');
        subUrl = subUrl.endsWith('/') ? subUrl.slice(0, subUrl.length - 1) : subUrl;
        subUrl = subUrl.startsWith('/') ? subUrl : `/${subUrl}`;
        return node.ip + ':' + node.endpoints[0].port + subUrl;
    }
    static async buildHaNodesResponse(masterServiceName, nodeIdToNodeMap, primaryNode) {
        const nodePromiseArr = [...nodeIdToNodeMap.values()]
            .filter((nodeMap) => nodeMap.has(masterServiceName))
            .map(async (nodeMap) => {
            const nodes = nodeMap.get(masterServiceName);
            return await SystemHAService.buildSingleHaNode({ nodes, primaryNode });
        });
        return (await Promise.all(nodePromiseArr)).filter((n) => !!n);
    }
    static async buildSingleHaNode({ nodes, primaryNode, }) {
        if (nodes.length === 0) {
            return null;
        }
        const nodeId = nodes[0].node_id;
        const masterNode = nodes.find((n) => masterServiceNames.includes(SystemHAService.getServiceName(n)));
        if (!masterNode) {
            logger.debug(`high availability status : no master node for node-id ${nodeId}} for service : ${nodes[0].service_id}`);
            return null;
        }
        const micro_services = {};
        nodes.forEach((n) => {
            micro_services[SystemHAService.getServiceName(n)] = {
                last_heartbeat: n.last_heartbeat,
                revision: n.revision || null,
                status: SystemHAService.getMicroNodeStatusFromNode(n),
                status_details: null,
                uptime: n.uptime || n.created || null,
                version: n.version || null,
            };
        });
        return {
            node_id: nodeId,
            is_primary: primaryNode ? primaryNode === nodeId : false,
            status: SystemHAService.getNodesTotalStatus(nodes),
            uptime: masterNode.uptime || null,
            url: SystemHAService.getUrlFromNode(masterNode),
            version: masterNode.version || null,
            micro_services,
        };
    }
    static getNodesTotalStatus(nodes) {
        const states = [...new Set(nodes.map(SystemHAService.getMicroNodeStatusFromNode))];
        if (states.length > 1 && states.includes(Constants_1.TOPOLOGY.STATE.HEALTHY)) {
            return Constants_1.TOPOLOGY.STATUS.PARTIALLY_ONLINE;
        }
        if (states[0] === Constants_1.TOPOLOGY.STATE.HEALTHY) {
            return Constants_1.TOPOLOGY.STATUS.ONLINE;
        }
        return Constants_1.TOPOLOGY.STATUS.OFFLINE;
    }
    static getNodeIdToNodeMap(topology) {
        const map = new Map();
        topology.services.forEach((node) => {
            const nodeId = node.node_id;
            if (!map.has(nodeId)) {
                map.set(nodeId, new Map());
            }
            const masterServiceName = SystemHAService.getMasterServiceName(node);
            if (!map.get(nodeId).has(masterServiceName)) {
                map.get(nodeId).set(masterServiceName, []);
            }
            map.get(nodeId).get(masterServiceName).push(node);
        });
        return map;
    }
    static serviceTypeFromId(id) {
        return id.split('@')[0];
    }
    static setNodeState(node) {
        node.state = SystemHAService.getMicroNodeStatusFromNode(node);
        return node;
    }
    static getMicroNodeStatusFromNode(node) {
        if (node.state !== Constants_1.TOPOLOGY.STATE.HEALTHY) {
            return node.state;
        }
        const isStale = SystemHAService.isNodeStale(node);
        return isStale ? Constants_1.TOPOLOGY.STATE.STALE : node.state;
    }
    static isNodeStale(node) {
        const staleTimeoutSeconds = config.get('router.topology.external.refresh.maxStaleHeartbeat');
        return Date.now() - node.last_heartbeat > staleTimeoutSeconds * Constants_1.TIME.SECOND_MS;
    }
}
__decorate([
    Decorators_1.methodLog({ logger })
], SystemHAService, "getHaStatus", null);
__decorate([
    Decorators_1.methodLog({ logger })
], SystemHAService, "getMergedTopologies", null);
__decorate([
    Decorators_1.methodLog({ logger })
], SystemHAService, "shouldAddServiceToTopology", null);
__decorate([
    Decorators_1.methodLog({ logger })
], SystemHAService, "getArtifactoryTopology", null);
__decorate([
    Decorators_1.methodLog({ logger })
], SystemHAService, "filterOutOwnServer", null);
__decorate([
    Decorators_1.methodLog({ logger })
], SystemHAService, "sortHealthyOnTop", null);
__decorate([
    Decorators_1.methodLog({ logger })
], SystemHAService, "getServiceNameFromServiceId", null);
__decorate([
    Decorators_1.methodLog({ logger })
], SystemHAService, "getMasterServiceName", null);
__decorate([
    Decorators_1.methodLog({ logger })
], SystemHAService, "getServiceName", null);
__decorate([
    Decorators_1.methodLog({ logger })
], SystemHAService, "getUrlFromNode", null);
__decorate([
    Decorators_1.methodLog({ logger })
], SystemHAService, "buildHaNodesResponse", null);
__decorate([
    Decorators_1.methodLog({ logger })
], SystemHAService, "buildSingleHaNode", null);
__decorate([
    Decorators_1.methodLog({ logger })
], SystemHAService, "getNodesTotalStatus", null);
exports.SystemHAService = SystemHAService;


/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystemService = void 0;
const XrayService_1 = __webpack_require__(105);
const Access_1 = __webpack_require__(27);
const Artifactory_1 = __webpack_require__(59);
const LoggerFactory_1 = __webpack_require__(1);
const Decorators_1 = __webpack_require__(2);
const MothershipTopologyService_1 = __webpack_require__(30);
const MissionControlService_1 = __webpack_require__(106);
const API_1 = __webpack_require__(7);
const VersionUpdate_1 = __webpack_require__(283);
const Constants_1 = __webpack_require__(0);
const CacheDB_1 = __webpack_require__(35);
const config = __webpack_require__(4);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
const footerCache = CacheDB_1.CacheDB.getFooterCacheDB();
class SystemService {
    static async getUnifiedCurrentUserInfo(authData) {
        const xrayUserInfoP = XrayService_1.XrayService.getCurrentUserInfo(authData).catch(() => {
            logger.error('failed getting xray current user info,return empty object');
            return {};
        });
        const artifactoryUserInfoP = Artifactory_1.ArtifactoryService.getCurrentUserInfo(authData).catch(() => {
            logger.error('failed getting artifactory current user info,return empty object');
            return {};
        });
        const [artifactoryUserInfo, xrayUserInfo] = await Promise.all([artifactoryUserInfoP, xrayUserInfoP]);
        return Object.assign(artifactoryUserInfo, { xray: xrayUserInfo });
    }
    static async getUnifiedOnboardingStatus(authData) {
        const emptyObjPromise = Promise.resolve(null);
        let xrayOnboardingInfoP = emptyObjPromise;
        let mcOnboardingInfoP = emptyObjPromise;
        const artifactoryOnboardingInfoP = Artifactory_1.ArtifactoryService.getOnboardingInfo(authData).catch((e) => {
            logger.warn(`failed getting artifactory onboarding info with message : ${e.message}, returning empty object`);
            return {};
        });
        if (MothershipTopologyService_1.default.serviceExists('XRAY')) {
            xrayOnboardingInfoP = XrayService_1.XrayService.getOnboardingInfo(authData).catch((e) => {
                logger.warn(`failed getting xray onboarding info with message : ${e.message}, returning empty object`);
                return null;
            });
        }
        if (MothershipTopologyService_1.default.serviceExists('MISSION_CONTROL')) {
            mcOnboardingInfoP = MissionControlService_1.MissionControlService.getOnboardingInfo(authData).catch((e) => {
                logger.warn(`failed getting xray onboarding info with message : ${e.message}, returning empty object`);
                return null;
            });
        }
        const [artifactoryOnboardingInfo, xrayOnboardingInfo, mcOnboardingInfo] = await Promise.all([
            artifactoryOnboardingInfoP,
            xrayOnboardingInfoP,
            mcOnboardingInfoP,
        ]);
        const userCustomData = await Access_1.AccessService.getUserCustomData(authData, Constants_1.ACCESS.USER_CUSTOM_DATA);
        const getIsAol = await footerCache.get(Constants_1.ONBOARDING.IS_AOL);
        const isAol = (getIsAol === null || getIsAol === void 0 ? void 0 : getIsAol.toString().toLowerCase()) === 'true';
        logger.debug(`Validating cloud env - ${isAol} `);
        let adminUserOnboarding = !!artifactoryOnboardingInfo.shouldShowAdminOnBoarding;
        if (isAol && adminUserOnboarding) {
            const isAOLNewOnboardingExperience = config.get(Constants_1.ONBOARDING.IS_AOL_ONBOARDING_ALLOWED_FLAG);
            logger.debug(`Cloud Env - checking allowNewOnboarding flag - ${isAOLNewOnboardingExperience}`);
            adminUserOnboarding = (isAOLNewOnboardingExperience === null || isAOLNewOnboardingExperience === void 0 ? void 0 : isAOLNewOnboardingExperience.toString().toLowerCase()) === 'true';
        }
        return {
            ...(xrayOnboardingInfo && { xray: xrayOnboardingInfo }),
            ...(mcOnboardingInfo && { mc: mcOnboardingInfo }),
            artifactory: artifactoryOnboardingInfo,
            userCustomData,
            adminUserOnboarding
        };
    }
    static getVersion() {
        const versions = { current: null };
        if (VersionUpdate_1.VersionsJsonUtils.available) {
            versions.current = VersionUpdate_1.VersionsJsonUtils.current;
            if (VersionUpdate_1.VersionsJsonUtils.previous) {
                versions.previous = VersionUpdate_1.VersionsJsonUtils.previous;
            }
        }
        else {
            versions.current = API_1.API.getProjectVersion();
        }
        return versions;
    }
}
__decorate([
    Decorators_1.methodLog({ logger })
], SystemService, "getUnifiedCurrentUserInfo", null);
__decorate([
    Decorators_1.methodLog({ logger })
], SystemService, "getUnifiedOnboardingStatus", null);
__decorate([
    Decorators_1.methodLog()
], SystemService, "getVersion", null);
exports.SystemService = SystemService;


/***/ }),
/* 281 */
/***/ (function(module, exports) {

module.exports = require("lodash.omit");

/***/ }),
/* 282 */
/***/ (function(module, exports) {

module.exports = require("lodash.isequal");

/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(107), exports);
__exportStar(__webpack_require__(109), exports);
__exportStar(__webpack_require__(110), exports);
__exportStar(__webpack_require__(68), exports);


/***/ }),
/* 284 */
/***/ (function(module, exports) {

module.exports = require("adm-zip");

/***/ }),
/* 285 */
/***/ (function(module, exports) {

module.exports = require("tar");

/***/ }),
/* 286 */
/***/ (function(module, exports) {

module.exports = require("promise.allsettled");

/***/ }),
/* 287 */
/***/ (function(module, exports) {

module.exports = require("readable-stream-clone");

/***/ }),
/* 288 */
/***/ (function(module, exports) {

module.exports = require("lodash.uniq");

/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BundleCollector = void 0;
const LoggerFactory_1 = __webpack_require__(1);
const ServiceID_1 = __webpack_require__(25);
const archiver = __webpack_require__(290);
const Constants_1 = __webpack_require__(0);
const models_1 = __webpack_require__(26);
const API_1 = __webpack_require__(7);
const path = __webpack_require__(8);
const fs_1 = __webpack_require__(22);
const LoggingConfig_1 = __webpack_require__(58);
let isRunning = false;
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
const SYSTEM_INFO_NAME = 'system_info.json';
const NODE_MANIFEST_NAME = 'node_manifest.json';
class BundleCollector {
    static async generateStreamable(sbConfig) {
        if (isRunning) {
            logger.warn(`generateStreamable is already running`);
            return null;
        }
        try {
            isRunning = true;
            // add better lock
            const { logFolders, bundleName, zipFileStructure } = BundleCollector.getConfigurations(sbConfig);
            const logFiles = await BundleCollector.getListFilesMatching(logFolders, sbConfig.from, sbConfig.to);
            const stream = BundleCollector.getStreamableZip(sbConfig, logFiles, zipFileStructure);
            isRunning = false;
            return { stream, name: bundleName };
        }
        catch (e) {
            isRunning = false;
            throw e;
        }
    }
    static getListFilesMatching(logFolders, from, to) {
        const fileHandles = [];
        const matchingFilesP = logFolders.map((folder) => {
            // flag r : Open file for reading. An exception occurs if the file does not exist.
            const fileHandle = fs_1.promises.open(folder, 'r');
            fileHandles.push(fileHandle);
            return (fileHandle
                // returning an array with all the folder's files
                .then(() => fs_1.promises.readdir(folder))
                .catch((_) => Promise.resolve([]))
                .then((files) => files
                // iterating over each folder's files
                .map((logFilePath) => path.join(folder, logFilePath))
                .filter(BundleCollector.filterOutNonFrontendLogs.bind(this, from, to))));
        });
        // flattening array
        const flattenedFiles = Promise.all(matchingFilesP).then((fileArr) => {
            return fileArr.reduce((a, b) => a.concat(b), []);
        });
        Promise.all(fileHandles).then(results => results.forEach(fileHandle => fileHandle.close().catch()));
        return flattenedFiles;
    }
    static filterOutNonFrontendLogs(from, to, logFilePath) {
        const isLogOrGzFile = path.extname(logFilePath) === Constants_1.LOGGING.EXTENSION || path.extname(logFilePath) === Constants_1.LOGGING.GZIP_EXTENSION;
        if (!isLogOrGzFile) {
            return false;
        }
        const isFrontendFile = path.basename(logFilePath).includes(Constants_1.LOGGING.PREFIX);
        if (!isFrontendFile) {
            return false;
        }
        return BundleCollector.isFileIsInRange(logFilePath, from, to);
    }
    static getStreamableZip(sbConfig, filesLocationsToStream, zipStructure = '') {
        const archive = archiver('zip');
        const nodeManifest = sbConfig.nodeManifestJson;
        const systemInfo = sbConfig.systemInfo;
        filesLocationsToStream.forEach((filePath) => {
            archive.file(filePath, { name: path.join(zipStructure, 'logs', path.basename(filePath)) });
        });
        archive.append(jsonBeautify(nodeManifest), { name: path.join(zipStructure, NODE_MANIFEST_NAME) });
        if (sbConfig.system) {
            archive.append(jsonBeautify(systemInfo), { name: path.join(zipStructure, 'system', SYSTEM_INFO_NAME) });
        }
        archive.finalize();
        return archive;
    }
    static isFileIsInRange(filePath, from, to) {
        const fileStat = fs_1.statSync(filePath);
        let lastChangedBefore = Math.abs(Date.now() - (path.extname(filePath) === Constants_1.LOGGING.EXTENSION ? fileStat.ctimeMs : fileStat.birthtimeMs));
        return lastChangedBefore <= from && lastChangedBefore >= to;
    }
    static getConfigurations(sbConfig) {
        const applicationLoggingConfig = new LoggingConfig_1.LoggingConfig(models_1.LogType.APPLICATION);
        const requestLoggingConfig = new LoggingConfig_1.LoggingConfig(models_1.LogType.REQUEST);
        const logFolders = !sbConfig.includeLogs ? [] : API_1.API.removeArrDuplications([
            applicationLoggingConfig.archiveDirPath,
            requestLoggingConfig.archiveDirPath,
            applicationLoggingConfig.logsDirPath,
            requestLoggingConfig.logsDirPath
        ]);
        logger.debug(`BundleCollector : log folders : [${logFolders.join(', ')}]`);
        return {
            logFolders,
            bundleName: `${sbConfig.name}-${sbConfig.id}_${sbConfig.serviceType}_${ServiceID_1.ServiceID.getServiceId()}.zip`,
            zipFileStructure: path.join(sbConfig.serviceType, ServiceID_1.ServiceID.getServiceId(), API_1.API.getNodeId(), Constants_1.SERVICES.FRONTEND.TYPE)
        };
    }
}
exports.BundleCollector = BundleCollector;
function jsonBeautify(json) {
    return JSON.stringify(json, null, 2);
}


/***/ }),
/* 290 */
/***/ (function(module, exports) {

module.exports = require("archiver");

/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityService = void 0;
const AccessTokenService_1 = __webpack_require__(90);
class SecurityService {
    static async getAdminServiceTokenModel(services, username, expirySeconds) {
        const tokenResponseModel = await AccessTokenService_1.AccessTokenService.createAdminToken(services, {
            username,
            expiry: expirySeconds,
        });
        return tokenResponseModel.accessToken;
    }
}
exports.SecurityService = SecurityService;


/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalSearchService = void 0;
const _1 = __webpack_require__(3);
const LoggerFactory_1 = __webpack_require__(1);
const LoggerDecorator_1 = __webpack_require__(17);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
const XRAY_ERROR_MESSAGE = 'Xray Is Unavailable';
const NOT_SCANNED_MESSAGE = 'Not Scanned';
class GlobalSearchService {
    // ***********************************
    //        Distributable Bundle
    // ***********************************
    static async getDistributableBundleWithXrayData(body, name, authData) {
        const distResponse = await _1.DistributionService.getBundle(body, name, authData);
        const versionIds = distResponse.versions.map((version) => version.version);
        const xrayResponse = await _1.XrayService.getVersionsByIds(name, versionIds, 'bundles', authData).catch(GlobalSearchService.handleXrayByIdsError);
        const versions = GlobalSearchService.getJoinedXrayToVersions(distResponse, xrayResponse);
        return { versions, name: distResponse.name, permissions: distResponse.permissions };
    }
    static async getDistributableBundleFilteredByXray(name, xrayConfig, authData) {
        const xrayResponse = await _1.XrayService.getBundleByName(xrayConfig, authData).catch(GlobalSearchService.handleXrayError);
        const versionIds = xrayResponse.versions.map((version) => version.version);
        logger.debug(`getting distribution getBundleVersionsByIds for ${versionIds.length} versions`);
        const distResponse = await _1.DistributionService.getBundleVersionsByIds(name, versionIds, authData);
        const versions = GlobalSearchService.getJoinedXrayToVersions(distResponse, xrayResponse);
        return { versions, name: distResponse.name, permissions: distResponse.permissions };
    }
    // ***********************************
    //            Builds
    // ***********************************
    static async getBuildFilteredByXray(name, buildRepo, xrayConfig, authData) {
        const xrayResponse = await _1.XrayService.getBuildByName(xrayConfig, authData).catch(GlobalSearchService.handleXrayError);
        const versionIds = xrayResponse.versions.map((version) => version.version);
        logger.debug(`getting artifactory getBuildVersionsByIds for ${versionIds.length} versions`);
        const artiResponse = await _1.ArtifactoryService.getBuildVersionsByIds(name, buildRepo, versionIds, authData);
        const versions = GlobalSearchService.getJoinedXrayToVersions(artiResponse, xrayResponse);
        return { versions };
    }
    static async getBuildWithXrayData(body, name, authData) {
        logger.debug('getting build with xray data');
        const artiResponse = await _1.ArtifactoryService.getBuild(body, name, authData);
        if (!artiResponse.versions) {
            logger.warn(`couldn't find artifactory build ${name} , returning empty build`);
            return { versions: [] };
        }
        const ids = artiResponse.versions.map((version) => version.buildNumber);
        logger.debug(`getting xray getVersionsByIds for ${ids.length} versions`);
        const xrayResponse = await _1.XrayService.getVersionsByIds(name, ids, 'builds', authData, body.buildRepo).catch(GlobalSearchService.handleXrayByIdsError);
        logger.debug(`getting xray getVersionsByIds for ${ids.length} versions`);
        const versions = GlobalSearchService.getJoinedXrayToVersions(artiResponse, xrayResponse);
        return { versions };
    }
    static handleXrayError(e) {
        logger.error(new Error(`Failed at XrayService : ${e.message} , returning default value`));
        return { versions: [] };
    }
    static handleXrayByIdsError(e) {
        logger.error(new Error(`Failed at XrayService : ${e.message} , returning default value`));
        return null;
    }
    static getJoinedXrayToVersions(bundle, xrayBundle) {
        logger.debug('adding xray data to versions');
        const xrayBundleMappedIds = {};
        if (!bundle || !bundle.versions) {
            return [];
        }
        if (xrayBundle && xrayBundle.versions) {
            xrayBundle.versions.forEach((version) => (xrayBundleMappedIds[version.version] = version));
        }
        return bundle.versions.map((version) => {
            const id = version.version || version.buildNumber;
            const xrayData = xrayBundleMappedIds[id];
            if (xrayBundle === null) {
                version.xray_status = XRAY_ERROR_MESSAGE;
            }
            else {
                version.xray_status = xrayData && xrayData.top_severity ? xrayData.top_severity : NOT_SCANNED_MESSAGE;
            }
            return version;
        });
    }
}
__decorate([
    LoggerDecorator_1.methodLog({ logger })
], GlobalSearchService, "getDistributableBundleWithXrayData", null);
__decorate([
    LoggerDecorator_1.methodLog({ logger })
], GlobalSearchService, "getDistributableBundleFilteredByXray", null);
__decorate([
    LoggerDecorator_1.methodLog({ logger })
], GlobalSearchService, "getBuildFilteredByXray", null);
__decorate([
    LoggerDecorator_1.methodLog({ logger })
], GlobalSearchService, "getBuildWithXrayData", null);
__decorate([
    LoggerDecorator_1.methodLog({ logger })
], GlobalSearchService, "handleXrayError", null);
__decorate([
    LoggerDecorator_1.methodLog({ logger })
], GlobalSearchService, "getJoinedXrayToVersions", null);
exports.GlobalSearchService = GlobalSearchService;


/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventService = void 0;
const LoggerFactory_1 = __webpack_require__(1);
const ClientFactory_1 = __webpack_require__(18);
const Decorators_1 = __webpack_require__(2);
const Constants_1 = __webpack_require__(0);
const JFrogService_1 = __webpack_require__(32);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
class EventService extends JFrogService_1.JFrogService {
    static async getAllSubscriptions(authData) {
        const client = await EventService.getClient(authData);
        return client.subscription().get();
    }
    static async getSpecificSubscription(authData, subscriptionKey) {
        const client = await EventService.getClient(authData);
        return client.subscription().getSubscription(subscriptionKey);
    }
    static async getClient(ctx) {
        return new ClientFactory_1.ClientFactory(Constants_1.SERVICES.EVENT.KEY).getWithAuth(ctx);
    }
}
__decorate([
    Decorators_1.methodLog({ logger })
], EventService, "getAllSubscriptions", null);
__decorate([
    Decorators_1.methodLog({ logger })
], EventService, "getSpecificSubscription", null);
__decorate([
    Decorators_1.methodLog({ logger })
], EventService, "getClient", null);
exports.EventService = EventService;


/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetadataService = void 0;
const LoggerFactory_1 = __webpack_require__(1);
const metadata_nodejs_client_1 = __webpack_require__(62);
const ClientFactory_1 = __webpack_require__(18);
const Decorators_1 = __webpack_require__(2);
const Constants_1 = __webpack_require__(0);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
//  todo move aql build to Metadata service instead of controller
class MetadataService {
    static async searchPackages(aqlSearch, projectKey, authData) {
        const metadataClient = await MetadataService.getClient(authData);
        const params = { ...(projectKey && { projectKey }) };
        return await metadataClient.search().packages(aqlSearch, params);
    }
    static async searchVersion(aqlSearch, projectKey, authData) {
        const metadataClient = await MetadataService.getClient(authData);
        const params = { ...(projectKey && { projectKey }) };
        return await metadataClient.search().versions(aqlSearch, params);
    }
    static async getVersionByIdAndName(packageId, versionName, authData) {
        const metadataClient = await MetadataService.getClient(authData);
        return await metadataClient.version().getVersionsByPkgidAndName(packageId, versionName);
    }
    static async getPackageById(id, authData) {
        const metadataClient = await MetadataService.getClient(authData);
        return await metadataClient.package().getPackageByPkgid(id);
    }
    static async getPackageVersionsByIds(pkgid, projectKey, versionsIds, authData) {
        const metadataClient = await MetadataService.getClient(authData);
        const aqlSearch = metadata_nodejs_client_1.AqlSearchParams.buildForVersionsSearch({
            name: versionsIds,
            pkgid,
            limit: versionsIds.length,
        });
        const params = { ...(projectKey && { project: projectKey }) };
        return await metadataClient.search().versions(aqlSearch, params);
    }
    static async getClient(ctx) {
        return new ClientFactory_1.ClientFactory(Constants_1.SERVICES.METADATA.KEY).getWithAuth(ctx);
    }
}
__decorate([
    Decorators_1.methodLog({ logger })
], MetadataService, "searchPackages", null);
__decorate([
    Decorators_1.methodLog({ logger })
], MetadataService, "searchVersion", null);
__decorate([
    Decorators_1.methodLog({ logger })
], MetadataService, "getVersionByIdAndName", null);
__decorate([
    Decorators_1.methodLog({ logger })
], MetadataService, "getPackageById", null);
__decorate([
    Decorators_1.methodLog({ logger })
], MetadataService, "getPackageVersionsByIds", null);
__decorate([
    Decorators_1.methodLog({ logger })
], MetadataService, "getClient", null);
exports.MetadataService = MetadataService;


/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ProxyService = void 0;
const Constants_1 = __webpack_require__(0);
const config = __webpack_require__(4);
class ProxyService {
    static getArtifactoryProxyUrl() {
        return config.get(`frontend.servicesUrls.${Constants_1.SERVICES.ARTIFACTORY.NAME}`);
    }
}
exports.ProxyService = ProxyService;


/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DownloadService = void 0;
const DownloadErrorNoPathOrRepoKey_1 = __webpack_require__(97);
class DownloadService {
    static getRepoKeyAndPath(req) {
        const repoKey = req.query.repoKey;
        const path = req.query.path;
        if (!repoKey || !path) {
            throw new DownloadErrorNoPathOrRepoKey_1.DownloadErrorNoPathOrRepoKey();
        }
        return {
            repoKey,
            path,
        };
    }
    static getDownloadPath(originalPath, request) {
        const { repoKey, path } = DownloadService.getRepoKeyAndPath(request);
        return `/${repoKey}/${path}`;
    }
    static getExportPath(originalPath, request) {
        return request.query.path;
    }
}
exports.DownloadService = DownloadService;


/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PipelinesService = void 0;
const LoggerFactory_1 = __webpack_require__(1);
const ClientFactory_1 = __webpack_require__(18);
const Decorators_1 = __webpack_require__(2);
const Constants_1 = __webpack_require__(0);
const JFrogService_1 = __webpack_require__(32);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
class PipelinesService extends JFrogService_1.JFrogService {
    static async getSources(requestModel, authData) {
        const client = await PipelinesService.getClient(authData);
        return await client.sources().get(requestModel);
    }
    static async getLoginToken(authData) {
        const client = await PipelinesService.getClient(authData);
        return await client.loginToken().get();
    }
    static async checkProjectAdmin(id, authData) {
        const client = await PipelinesService.getClient(authData);
        return await client.projectAdmin().getIsProjectAdmin(id);
    }
    static async getPipelines(requestModel, authData) {
        const client = await PipelinesService.getClient(authData);
        return await client.pipelines().getPipelines(requestModel);
    }
    static async getLatestPipelines(requestModel, authData) {
        const client = await PipelinesService.getClient(authData);
        return await client.pipelines().getLatest(requestModel);
    }
    static async getNodePools(requestModel, authData) {
        const client = await PipelinesService.getClient(authData);
        return await client.nodes().pools().get(requestModel);
    }
    static async getNodeById(id, authData) {
        const client = await PipelinesService.getClient(authData);
        return await client.nodes().getById(id);
    }
    static async getNodeInitScriptById(id, authData) {
        const client = await PipelinesService.getClient(authData);
        return await client.nodes().streamInitScriptById(id);
    }
    static async updateNodeById(id, payload, authData) {
        const client = await PipelinesService.getClient(authData);
        return await client.nodes().update(id, payload);
    }
    static async createNode(body, authData) {
        const client = await PipelinesService.getClient(authData);
        return await client.nodes().create(body);
    }
    static async deleteNodeById(id, authData) {
        const client = await PipelinesService.getClient(authData);
        return await client.nodes().delete(id);
    }
    static async getNodeConsolesByNodeId(id, authData) {
        const client = await PipelinesService.getClient(authData);
        return await client.nodes().consoles().getByNodeId(id);
    }
    static async getNodeStats(requestModel, authData) {
        const client = await PipelinesService.getClient(authData);
        return await client.nodes().stats().get(requestModel);
    }
    static async getNodes(requestModel, authData) {
        const client = await PipelinesService.getClient(authData);
        return await client.nodes().get(requestModel);
    }
    static async getNodeMetaDataMap(authData) {
        const client = await PipelinesService.getClient(authData);
        return await client.nodes().metaData().get();
    }
    static async getPipelineById(id, authData) {
        const client = await PipelinesService.getClient(authData);
        return await client.pipelines().getById(id);
    }
    static async getPipelineStepConnections(requestModel, authData) {
        const client = await PipelinesService.getClient(authData);
        return await client.pipelineStepConnections().get(requestModel);
    }
    static async getRuns(requestModel, authData) {
        const client = await PipelinesService.getClient(authData);
        return await client.runs().getRuns(requestModel);
    }
    static async getSteps(requestModel, authData) {
        const client = await PipelinesService.getClient(authData);
        return await client.steps().getSteps(requestModel);
    }
    static async getMasterResources(requestModel, authData) {
        const client = await PipelinesService.getClient(authData);
        return await client.masterResources().getMasterResources(requestModel);
    }
    static async updateMasterResources(id, body, authData) {
        const client = await PipelinesService.getClient(authData);
        return await client.masterResources().update(id, body);
    }
    static async getResources(requestModel, authData) {
        const client = await PipelinesService.getClient(authData);
        return await client.resources().getResources(requestModel);
    }
    static async getRunResourceVersions(requestModel, authData) {
        const client = await PipelinesService.getClient(authData);
        return await client.runResourceVersions().get(requestModel);
    }
    static async getResourceVersions(requestModel, authData) {
        const client = await PipelinesService.getClient(authData);
        return await client.resourceVersions().get(requestModel);
    }
    static async getProjects(authData) {
        const client = await PipelinesService.getClient(authData);
        return await client.projects().getProjects();
    }
    static async getTemplates(authData) {
        const client = await PipelinesService.getClient(authData);
        return await client.templates().getTemplates();
    }
    static async getIntegrations(authData) {
        const client = await PipelinesService.getClient(authData);
        return await client.integrations().getIntegrations();
    }
    static async getIntegrationById(id, authData) {
        const client = await PipelinesService.getClient(authData);
        return await client.integrations().getById(id);
    }
    static async updateProject(id, body, authData) {
        const client = await PipelinesService.getClient(authData);
        return await client.projects().update(id, body);
    }
    static async createIntegration(body, authData) {
        const client = await PipelinesService.getClient(authData);
        return await client.integrations().create(body);
    }
    static async createIdentityFavorite(body, authData) {
        const client = await PipelinesService.getClient(authData);
        return await client.identityFavorites().create(body);
    }
    static async getIdentityFavorites(authData) {
        const client = await PipelinesService.getClient(authData);
        return await client.identityFavorites().getIdentityFavorites();
    }
    static async deleteIdentityFavorite(id, authData) {
        const client = await PipelinesService.getClient(authData);
        return await client.identityFavorites().delete(id);
    }
    static async createNodePool(body, authData) {
        const client = await PipelinesService.getClient(authData);
        return await client.nodes().pools().create(body);
    }
    static async updateNodePool(id, body, authData) {
        const client = await PipelinesService.getClient(authData);
        return await client.nodes().pools().update(id, body);
    }
    static async deleteNodePool(id, authData) {
        const client = await PipelinesService.getClient(authData);
        return await client.nodes().pools().delete(id);
    }
    static async updateIntegration(id, body, authData) {
        const client = await PipelinesService.getClient(authData);
        return await client.integrations().update(id, body);
    }
    static async deleteIntegration(id, authData) {
        const client = await PipelinesService.getClient(authData);
        return await client.integrations().delete(id);
    }
    static async getSystemCodes(authData) {
        const client = await PipelinesService.getClient(authData);
        return await client.systemCodes().getSystemCodes();
    }
    static async getSourceById(id, requestModel, authData) {
        const client = await PipelinesService.getClient(authData);
        return await client.sources().getById(id, requestModel);
    }
    static async getPipelineSyncStatuses(requestModel, authData) {
        const client = await PipelinesService.getClient(authData);
        return await client.pipelineSyncStatuses().get(requestModel);
    }
    static async deleteSource(id, authData) {
        const client = await PipelinesService.getClient(authData);
        return await client.sources().delete(id);
    }
    static async getMasterIntegrations(authData) {
        const client = await PipelinesService.getClient(authData);
        return await client.masterIntegrations().getMasterIntegrations();
    }
    static async createPipelineSource(body, authData) {
        const client = await PipelinesService.getClient(authData);
        return await client.sources().create(body);
    }
    static async updatePipelineSource(id, body, authData) {
        const client = await PipelinesService.getClient(authData);
        return await client.sources().update(id, body);
    }
    static async getExtensionSources(requestModel, authData) {
        const client = await PipelinesService.getClient(authData);
        return await client.extensionSources().get(requestModel);
    }
    static async getExtensionSourceById(id, requestModel, authData) {
        const client = await PipelinesService.getClient(authData);
        return await client.extensionSources().getById(id, requestModel);
    }
    static async createExtensionSource(body, authData) {
        const client = await PipelinesService.getClient(authData);
        return await client.extensionSources().create(body);
    }
    static async updateExtensionSource(id, body, authData) {
        const client = await PipelinesService.getClient(authData);
        return await client.extensionSources().update(id, body);
    }
    static async deleteExtensionSource(id, authData) {
        const client = await PipelinesService.getClient(authData);
        return await client.extensionSources().delete(id);
    }
    static async getTemplateSources(requestModel, authData) {
        const client = await PipelinesService.getClient(authData);
        return await client.templateSources().get(requestModel);
    }
    static async getTemplateSourceById(id, requestModel, authData) {
        const client = await PipelinesService.getClient(authData);
        return await client.templateSources().getById(id, requestModel);
    }
    static async createTemplateSource(body, authData) {
        const client = await PipelinesService.getClient(authData);
        return await client.templateSources().create(body);
    }
    static async updateTemplateSource(id, body, authData) {
        const client = await PipelinesService.getClient(authData);
        return await client.templateSources().update(id, body);
    }
    static async deleteTemplateSource(id, authData) {
        const client = await PipelinesService.getClient(authData);
        return await client.templateSources().delete(id);
    }
    static async updateTemplate(id, body, authData) {
        const client = await PipelinesService.getClient(authData);
        return await client.templates().update(id, body);
    }
    static async getBuildPlaneImages(authData) {
        const client = await PipelinesService.getClient(authData);
        return await client.buildPlaneImages().get();
    }
    static async getPipelineSourceObjectPermissions(requestModel, authData) {
        const client = await PipelinesService.getClient(authData);
        return await client.pipelineSourceObjectPermissions().get(requestModel);
    }
    static async postPipelineSourceObjectPermissions(body, authData) {
        const client = await PipelinesService.getClient(authData);
        return await client.pipelineSourceObjectPermissions().post(body);
    }
    static async deletePipelineSourceObjectPermissionsById(id, authData) {
        const client = await PipelinesService.getClient(authData);
        return await client.pipelineSourceObjectPermissions().deleteById(id);
    }
    static async getFrontendManifest() {
        const client = await PipelinesService.getAdminClient();
        return client.frontendResource().getFrontEndVersionManifest();
    }
    static async getFrontendVersionStream(version, os) {
        const client = await PipelinesService.getAdminClient();
        return client.frontendResource().downloadFrontEndVersion(version, os);
    }
    static async getUnifiedLogsInfo(authData, nodeId) {
        const client = await PipelinesService.getClient(authData);
        if (nodeId) {
            client.updateConfig({
                headers: { [Constants_1.CUSTOM_HEADERS.X_JFROG_ROUTE_TO]: nodeId },
            });
        }
        return client.logData().getLogsInfo();
    }
    static async getUnifiedLogsData(authData, nodeId, fileSize, id) {
        const client = await PipelinesService.getClient(authData);
        if (nodeId) {
            client.updateConfig({
                headers: { [Constants_1.CUSTOM_HEADERS.X_JFROG_ROUTE_TO]: nodeId },
            });
        }
        return client.logData().getLogsData(fileSize, id);
    }
    static async getClient(ctx) {
        return new ClientFactory_1.ClientFactory("PIPELINES").getWithAuth(ctx);
    }
    static async getAdminClient() {
        return new ClientFactory_1.ClientFactory("PIPELINES").getWithAdminToken();
    }
}
__decorate([
    Decorators_1.methodLog({ logger })
], PipelinesService, "getSources", null);
__decorate([
    Decorators_1.methodLog({ logger })
], PipelinesService, "getLoginToken", null);
__decorate([
    Decorators_1.methodLog({ logger })
], PipelinesService, "checkProjectAdmin", null);
__decorate([
    Decorators_1.methodLog({ logger })
], PipelinesService, "getPipelines", null);
__decorate([
    Decorators_1.methodLog({ logger })
], PipelinesService, "getLatestPipelines", null);
__decorate([
    Decorators_1.methodLog({ logger })
], PipelinesService, "getNodePools", null);
__decorate([
    Decorators_1.methodLog({ logger })
], PipelinesService, "getNodeById", null);
__decorate([
    Decorators_1.methodLog({ logger })
], PipelinesService, "getNodeInitScriptById", null);
__decorate([
    Decorators_1.methodLog({ logger })
], PipelinesService, "updateNodeById", null);
__decorate([
    Decorators_1.methodLog({ logger })
], PipelinesService, "createNode", null);
__decorate([
    Decorators_1.methodLog({ logger })
], PipelinesService, "deleteNodeById", null);
__decorate([
    Decorators_1.methodLog({ logger })
], PipelinesService, "getNodeConsolesByNodeId", null);
__decorate([
    Decorators_1.methodLog({ logger })
], PipelinesService, "getNodeStats", null);
__decorate([
    Decorators_1.methodLog({ logger })
], PipelinesService, "getNodes", null);
__decorate([
    Decorators_1.methodLog({ logger })
], PipelinesService, "getNodeMetaDataMap", null);
__decorate([
    Decorators_1.methodLog({ logger })
], PipelinesService, "getPipelineById", null);
__decorate([
    Decorators_1.methodLog({ logger })
], PipelinesService, "getPipelineStepConnections", null);
__decorate([
    Decorators_1.methodLog({ logger })
], PipelinesService, "getRuns", null);
__decorate([
    Decorators_1.methodLog({ logger })
], PipelinesService, "getSteps", null);
__decorate([
    Decorators_1.methodLog({ logger })
], PipelinesService, "getMasterResources", null);
__decorate([
    Decorators_1.methodLog({ logger })
], PipelinesService, "updateMasterResources", null);
__decorate([
    Decorators_1.methodLog({ logger })
], PipelinesService, "getResources", null);
__decorate([
    Decorators_1.methodLog({ logger })
], PipelinesService, "getRunResourceVersions", null);
__decorate([
    Decorators_1.methodLog({ logger })
], PipelinesService, "getResourceVersions", null);
__decorate([
    Decorators_1.methodLog({ logger })
], PipelinesService, "getProjects", null);
__decorate([
    Decorators_1.methodLog({ logger })
], PipelinesService, "getTemplates", null);
__decorate([
    Decorators_1.methodLog({ logger })
], PipelinesService, "getIntegrations", null);
__decorate([
    Decorators_1.methodLog({ logger })
], PipelinesService, "getIntegrationById", null);
__decorate([
    Decorators_1.methodLog({ logger })
], PipelinesService, "updateProject", null);
__decorate([
    Decorators_1.methodLog({ logger })
], PipelinesService, "createIntegration", null);
__decorate([
    Decorators_1.methodLog({ logger })
], PipelinesService, "createIdentityFavorite", null);
__decorate([
    Decorators_1.methodLog({ logger })
], PipelinesService, "getIdentityFavorites", null);
__decorate([
    Decorators_1.methodLog({ logger })
], PipelinesService, "deleteIdentityFavorite", null);
__decorate([
    Decorators_1.methodLog({ logger })
], PipelinesService, "createNodePool", null);
__decorate([
    Decorators_1.methodLog({ logger })
], PipelinesService, "updateNodePool", null);
__decorate([
    Decorators_1.methodLog({ logger })
], PipelinesService, "deleteNodePool", null);
__decorate([
    Decorators_1.methodLog({ logger })
], PipelinesService, "updateIntegration", null);
__decorate([
    Decorators_1.methodLog({ logger })
], PipelinesService, "deleteIntegration", null);
__decorate([
    Decorators_1.methodLog({ logger })
], PipelinesService, "getSystemCodes", null);
__decorate([
    Decorators_1.methodLog({ logger })
], PipelinesService, "getSourceById", null);
__decorate([
    Decorators_1.methodLog({ logger })
], PipelinesService, "getPipelineSyncStatuses", null);
__decorate([
    Decorators_1.methodLog({ logger })
], PipelinesService, "getExtensionSources", null);
__decorate([
    Decorators_1.methodLog({ logger })
], PipelinesService, "getExtensionSourceById", null);
__decorate([
    Decorators_1.methodLog({ logger })
], PipelinesService, "createExtensionSource", null);
__decorate([
    Decorators_1.methodLog({ logger })
], PipelinesService, "updateExtensionSource", null);
__decorate([
    Decorators_1.methodLog({ logger })
], PipelinesService, "deleteExtensionSource", null);
__decorate([
    Decorators_1.methodLog({ logger })
], PipelinesService, "getTemplateSources", null);
__decorate([
    Decorators_1.methodLog({ logger })
], PipelinesService, "getTemplateSourceById", null);
__decorate([
    Decorators_1.methodLog({ logger })
], PipelinesService, "createTemplateSource", null);
__decorate([
    Decorators_1.methodLog({ logger })
], PipelinesService, "updateTemplateSource", null);
__decorate([
    Decorators_1.methodLog({ logger })
], PipelinesService, "deleteTemplateSource", null);
__decorate([
    Decorators_1.methodLog({ logger })
], PipelinesService, "updateTemplate", null);
__decorate([
    Decorators_1.methodLog({ logger })
], PipelinesService, "getPipelineSourceObjectPermissions", null);
__decorate([
    Decorators_1.methodLog({ logger })
], PipelinesService, "postPipelineSourceObjectPermissions", null);
__decorate([
    Decorators_1.methodLog({ logger })
], PipelinesService, "deletePipelineSourceObjectPermissionsById", null);
__decorate([
    Decorators_1.methodLog({ logger })
], PipelinesService, "getFrontendManifest", null);
__decorate([
    Decorators_1.methodLog({ logger })
], PipelinesService, "getFrontendVersionStream", null);
__decorate([
    Decorators_1.methodLog({ logger })
], PipelinesService, "getUnifiedLogsInfo", null);
__decorate([
    Decorators_1.methodLog({ logger })
], PipelinesService, "getUnifiedLogsData", null);
exports.PipelinesService = PipelinesService;


/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(299), exports);


/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FooterUtil = void 0;
const PlatformConfiguration_1 = __webpack_require__(11);
const Decorators_1 = __webpack_require__(2);
const MothershipTopologyService_1 = __webpack_require__(30);
const Services_1 = __webpack_require__(3);
const LoggerFactory_1 = __webpack_require__(1);
const config = __webpack_require__(4);
const Constants_1 = __webpack_require__(0);
const API_1 = __webpack_require__(7);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
class FooterUtil {
    static async getFooter(authData) {
        const [footer, xrayFooter, mcFooter, versionResponse] = await Promise.all([
            Services_1.ArtifactoryService.getFooter(authData),
            FooterUtil.getXrayFooter(authData),
            FooterUtil.getMissionControlFooter(authData),
            Services_1.ArtifactoryService.getVersion(authData).catch((e) => {
                logger.warn(e);
                return null;
            }),
        ]);
        let unifiedFooter = footer;
        const version = versionResponse ? versionResponse.version : null;
        const jfrogUrl = config.get('shared.jfrogUrl');
        unifiedFooter.samlRedirectEnabled = PlatformConfiguration_1.default.autoRedirectToSamlLogin;
        if (jfrogUrl) {
            unifiedFooter.jfrogUrl = jfrogUrl;
        }
        if (version) {
            unifiedFooter.version = API_1.API.getSha1HashedString(version);
        }
        if (versionResponse === null || versionResponse === void 0 ? void 0 : versionResponse.license) {
            unifiedFooter.license = versionResponse.license;
        }
        unifiedFooter.deleteLoginWrongPassword = config.get('frontend.security.deleteLoginWrongPassword');
        unifiedFooter = FooterUtil.addXrayFooter(xrayFooter, API_1.API.cloneObject(unifiedFooter));
        unifiedFooter = FooterUtil.addMCFooter(mcFooter, API_1.API.cloneObject(unifiedFooter));
        return unifiedFooter;
    }
    static addMCFooter(mcFooter, footer) {
        if (mcFooter) {
            logger.debug(`adding ${Constants_1.FOOTER_FIELDS.MC_LICENSE} to footer`);
            footer = Object.assign(footer, { [Constants_1.FOOTER_FIELDS.MC_LICENSE]: mcFooter.license });
        }
        return footer;
    }
    static addXrayFooter(xrayFooter, footer) {
        if (xrayFooter) {
            const isXrayTrial = FooterUtil.isXrayTrial(footer, xrayFooter);
            if (!isXrayTrial) {
                logger.debug(`xray status is ${xrayFooter.license_status} and not trial`);
            }
            else {
                logger.debug(`adding ${Constants_1.FOOTER_FIELDS.IS_XRAY_TRIAL_FIELD} to footer`);
                footer = Object.assign(footer, { [Constants_1.FOOTER_FIELDS.IS_XRAY_TRIAL_FIELD]: isXrayTrial });
            }
        }
        return footer;
    }
    static async getXrayFooter(authData) {
        try {
            const xrayInTopology = MothershipTopologyService_1.default.serviceExists('XRAY');
            if (!xrayInTopology) {
                logger.debug('xray is not in topology, will not return footer');
                return null;
            }
            const xrayFooter = await Services_1.XrayService.getFooter(authData);
            if (!xrayFooter) {
                logger.debug('failed getting xray footer, will not return footer');
                return null;
            }
            logger.debug('xray is in topology and xray footer is ok');
            return xrayFooter;
        }
        catch (e) {
            e.message = `xray footer error: ${e.message}`;
            logger.warn(e);
        }
        return null;
    }
    static async getMissionControlFooter(authData) {
        try {
            const missionControlInTopology = MothershipTopologyService_1.default.serviceExists('MISSION_CONTROL');
            if (!missionControlInTopology) {
                logger.debug('Mission Control is not in topology, returning null');
                return null;
            }
            const missionControlFooter = await Services_1.MissionControlService.getFooter(authData);
            if (!missionControlFooter) {
                logger.debug('failed getting mission control footer, returning null');
                return null;
            }
            logger.debug('Mission Control is in topology and Mission Control footer is ok');
            return missionControlFooter;
        }
        catch (e) {
            e.message = `Mission Control footer error: ${e.message}`;
            logger.debug(e.message);
            return null;
        }
    }
    static isXrayTrial(footer, xrayFooter) {
        const isLicenseSupportXray = Constants_1.FOOTER_FIELDS.XRAY_SUPPORTED_LICENSES.includes(footer.platformId);
        if (isLicenseSupportXray) {
            logger.debug(`license [${footer.platformId}] support xray`);
        }
        const isXrayTrial = xrayFooter.license_status === Constants_1.FOOTER_FIELDS.TRIAL;
        if (isXrayTrial) {
            logger.debug(`xray footer has license_status field set to ${xrayFooter.license_status}`);
        }
        return !isLicenseSupportXray && isXrayTrial;
    }
}
__decorate([
    Decorators_1.methodLog({ logger })
], FooterUtil, "addMCFooter", null);
__decorate([
    Decorators_1.methodLog({ logger })
], FooterUtil, "addXrayFooter", null);
__decorate([
    Decorators_1.methodLog({ logger })
], FooterUtil, "getXrayFooter", null);
__decorate([
    Decorators_1.methodLog({ logger })
], FooterUtil, "getMissionControlFooter", null);
__decorate([
    Decorators_1.methodLog({ logger })
], FooterUtil, "isXrayTrial", null);
exports.FooterUtil = FooterUtil;


/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ExitHandler = void 0;
const LoggerFactory_1 = __webpack_require__(1);
const AccessAdminClient_1 = __webpack_require__(12);
const LoggerUtils_1 = __webpack_require__(81);
let exitLock = true;
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
class ExitHandler {
    static async cleanup(exitCode) {
        logger.info('doing clean');
        logger.info('unregistering from router');
        if (AccessAdminClient_1.AccessAdminClient.isConnected) {
            await AccessAdminClient_1.AccessAdminClient.close().catch();
        }
        else {
            logger.info('client is already unregistered from router');
        }
        logger.info(`exit code : ${String(exitCode)}`);
        logger.info('closing recurring jobs');
        __webpack_require__(111).default.clearAll();
        logger.info('closing recurring jobs');
        await ExitHandler.closeExpress(logger);
        logger.info('exiting app');
        return LoggerUtils_1.LoggerUtils.closeLoggers();
    }
    static init() {
        process.stdin.resume();
        process.on('exit', (code) => {
            if (exitLock) {
                exitLock = false;
                logger.info(`exit detected`);
                ExitHandler.cleanup(code).finally(() => {
                    setImmediate(() => process.exit(0));
                });
            }
        });
        //  catches ctrl+c event
        process.on('SIGINT', () => {
            logger.info(`SIGINT detected`);
            process.emit('exit', 0);
        });
        // catches "kill pid"
        process.on('SIGUSR1', () => {
            logger.info(`SIGUSR1 detected, doing nothing`);
        });
        process.on('SIGUSR2', () => {
            logger.info(`SIGUSR2 detected, doing nothing`);
        });
        // todo, check if should crash the app here
        process.on('unhandledRejection', (error) => {
            throw error;
        });
        process.on('uncaughtException', (error) => {
            try {
                error.message += '||  uncaughtException detected';
                logger.error(error);
            }
            catch (e) {
                /* tslint:disable-next-line */
                console.error(`uncaughtException detected : [${error.message}]`);
            }
        });
    }
    static async closeExpress(logger) {
        const server = __webpack_require__(69);
        if (!server) {
            logger.debug(`Http was not initiated`);
            return;
        }
        logger.info(`Waiting for Express to close all connections`);
        return new Promise(resolve => __webpack_require__(69).close((err) => {
            if (err) {
                logger.error(`Error occurred when trying to close express connections : ${err.message}`);
                resolve();
            }
            logger.info(`All express connections closed`);
            resolve();
        }));
    }
}
exports.ExitHandler = ExitHandler;
exports.default = ExitHandler;


/***/ }),
/* 301 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const LoggerFactory_1 = __webpack_require__(1);
const express = __webpack_require__(6);
const path = __webpack_require__(8);
const ExpressLoaders_1 = __webpack_require__(303);
const Middlewares_1 = __webpack_require__(53);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
const server = express();
ExpressLoaders_1.ExpressLoaders.middlewares(server);
ExpressLoaders_1.ExpressLoaders.assets(server);
ExpressLoaders_1.ExpressLoaders.routes(server);
server.get('/*', (req, res) => {
    logger.debug(`request didn't match any route - ${req.originalUrl}`);
    res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
});
server.use(Middlewares_1.ErrorHandler);
module.exports = server;


/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpressLoaders = void 0;
const express = __webpack_require__(6);
const RequestLogger_1 = __webpack_require__(304);
const ThreadLocal_1 = __webpack_require__(82);
const TraceID_1 = __webpack_require__(57);
const HeadersManager_1 = __webpack_require__(46);
const ExpressTimeoutMiddleware_1 = __webpack_require__(50);
const CsrfHeaderProtection_1 = __webpack_require__(307);
const helmet = __webpack_require__(308);
const compression = __webpack_require__(309);
const cookieParser = __webpack_require__(310);
const Constants_1 = __webpack_require__(0);
const routes_1 = __webpack_require__(112);
const path = __webpack_require__(8);
const PlatformConfiguration_1 = __webpack_require__(11);
const DIR_PATH_CLIENT = '../../client';
const DIR_PATH_WEBAPP_DIST = path.join(DIR_PATH_CLIENT, 'ng-webapp/dist');
const DIR_PATH_IMAGES = path.join(DIR_PATH_CLIENT, 'ng-webapp/dist/images');
const DIR_PATH_DIST = path.join(DIR_PATH_CLIENT, 'dist');
class ExpressLoaders {
    static middlewares(app) {
        app.disable('x-powered-by');
        app.use(compression());
        app.use(express.urlencoded({ limit: '10mb', extended: true }));
        app.use(express.json({ limit: '100mb' }));
        app.use(cookieParser());
        app.use(RequestLogger_1.RequestLogger.log());
        app.use(express.json());
        ExpressLoaders.addSecurityHeaders(app);
        app.use(express.urlencoded({ extended: false }));
        app.use(ThreadLocal_1.ThreadLocal.middleware);
        // TraceID Middleware must come after ThreadLocal
        app.use(TraceID_1.TraceID.middleware);
        app.use(HeadersManager_1.HeadersManager.middleware);
        app.use(ExpressTimeoutMiddleware_1.default.default);
    }
    static assets(app) {
        app.use(express.static(path.join(__dirname, DIR_PATH_DIST)));
        app.use('/images', express.static(path.join(__dirname, DIR_PATH_IMAGES)));
        app.use('/webapp', express.static(path.join(__dirname, DIR_PATH_WEBAPP_DIST)));
    }
    static routes(app) {
        app.get('/health', (req, res) => res.send('Ok'));
        app.use(Constants_1.API_VERSION, routes_1.apiRouter);
    }
    static addSecurityHeaders(app) {
        app.use(helmet.xssFilter());
        app.use(helmet.frameguard());
        app.use(helmet.noSniff());
        app.use(helmet.referrerPolicy());
        app.use(helmet.contentSecurityPolicy({
            directives: {
                //imgSrc: ["'self'", 'data:'],
                fontSrc: ['\'self\'', 'data:', 'https://heapanalytics.com'],
                baseUri: ['\'self\''],
                styleSrc: ['\'self\'', '\'unsafe-inline\'', 'https://heapanalytics.com'],
                formAction: ['\'self\''],
                frameAncestors: ['\'self\''],
            },
        }));
        app.use(helmet.featurePolicy({
            features: {
                geolocation: ['\'none\''],
                microphone: ['\'none\''],
                camera: ['\'none\''],
                payment: ['\'none\''],
            },
        }));
        if (PlatformConfiguration_1.default.isHttps) {
            app.use(helmet.hsts({
                includeSubDomains: true,
                maxAge: Constants_1.TIME.YEAR_S,
            }));
        }
        app.use(CsrfHeaderProtection_1.csrfHeaderProtection(Constants_1.CSRF_URLS_WHITELIST));
    }
}
exports.ExpressLoaders = ExpressLoaders;


/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestLogger = void 0;
const morgan = __webpack_require__(305);
const LoggerFactory_1 = __webpack_require__(1);
const models_1 = __webpack_require__(26);
const Constants_1 = __webpack_require__(0);
const ua_parser_js_1 = __webpack_require__(306);
const loggingStrategy = ':remote-addr|:user-name|:method|:url|:status|:res[content-length]|:req[content-length]|:response-time|:user-data';
class RequestLogger {
    static log() {
        morgan.token('user-name', (req) => req.userName || Constants_1.ANONYMOUS);
        morgan.token('user-data', (req) => {
            const details = new ua_parser_js_1.UAParser(req.get('user-agent'));
            const browser = details.getBrowser();
            const os = details.getOS();
            return `${browser.name}|${browser.version}|${os.name}|${os.version}`;
        });
        return morgan(loggingStrategy, { stream: this.stream, skip: RequestLogger.skip });
    }
    static get stream() {
        return {
            write(text) {
                RequestLogger.logger.info(text);
            },
        };
    }
    static skip(req, _) {
        return !req.originalUrl.includes(Constants_1.API_VERSION);
    }
}
exports.RequestLogger = RequestLogger;
RequestLogger.logger = LoggerFactory_1.LoggerFactory.getLogger(__filename, models_1.LogType.REQUEST);


/***/ }),
/* 305 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 306 */
/***/ (function(module, exports) {

module.exports = require("ua-parser-js");

/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.csrfHeaderProtection = void 0;
const CsrfError_1 = __webpack_require__(98);
const LoggerFactory_1 = __webpack_require__(1);
const CUSTOM_HEADERS_1 = __webpack_require__(80);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
const isTest = () => process.env.TEST_MODE === 'true';
const isGetMethod = (req) => req.method === 'GET';
const isHavingCsrfCustomHeaders = ({ xhr, headers }) => {
    return xhr || headers['x-requested-with'] === CUSTOM_HEADERS_1.default.X_REQUESTED_WITH; // TODO: remove 'artUI' when NG will die
};
const isWhitelisted = (requestedUrl, whitelistUrls) => {
    return whitelistUrls.includes(requestedUrl);
};
const isRouterHeadCheck = (requestedUrl, requestedMethod) => {
    return requestedUrl === '/' && requestedMethod === 'HEAD';
};
exports.csrfHeaderProtection = (whitelistUrls) => (req, res, next) => {
    const permittedConditions = [
        isGetMethod(req),
        isHavingCsrfCustomHeaders(req),
        isTest(),
        isWhitelisted(req.url, whitelistUrls),
        isRouterHeadCheck(req.url, req.method),
    ];
    if (permittedConditions.includes(true)) {
        return next();
    }
    logger.warn(`Request blocked by CSRF protection, missing XHR header, blocked url : "${req.url}"`);
    return next(new CsrfError_1.CsrfError());
};


/***/ }),
/* 308 */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),
/* 309 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 310 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.distributionRouter = void 0;
const express_1 = __webpack_require__(6);
const RouteHandlers_1 = __webpack_require__(19);
const Controllers_1 = __webpack_require__(14);
const LoggerFactory_1 = __webpack_require__(1);
const RouterProxyUtil_1 = __webpack_require__(21);
const ProxyRoutes_1 = __webpack_require__(24);
const RouteLogger_1 = __webpack_require__(33);
const ElevateUserTokenWithProjectAdmin_1 = __webpack_require__(52);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
const router = express_1.Router();
exports.distributionRouter = router;
const routeHandler = new RouteHandlers_1.DistributionRouteHandler();
const authenticatedProxyMiddlewares = [routeHandler.addImpersonationTokenToHeader, routeHandler.proxyHandler];
router.delete('/system/nodes/:id', Controllers_1.DistributionController.deleteNode);
router.delete('/system/nodes/:id', Controllers_1.DistributionController.deleteNode);
router.get('api/ui/distribution/edge_nodes', async (req, res, next) => {
    var _a;
    if ((_a = req.query) === null || _a === void 0 ? void 0 : _a.permission) {
        return await ElevateUserTokenWithProjectAdmin_1.default(req, res, next);
    }
    next();
}, authenticatedProxyMiddlewares);
// proxied routes
RouterProxyUtil_1.registerProxiedRoutes(router, ProxyRoutes_1.DISTRIBUTION_PROXY_ROUTES, authenticatedProxyMiddlewares);
router.use('/*', RouteLogger_1.routeLogger, authenticatedProxyMiddlewares);
router.use('/*', (req, res) => {
    logger.warn(`Distribution router, could not find - ${req.method.toUpperCase()} ${req.originalUrl}`);
    res.status(404).send('Not Found');
});


/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SamlController = void 0;
const JFrogController_1 = __webpack_require__(5);
const Services_1 = __webpack_require__(3);
const PlatformConfiguration_1 = __webpack_require__(11);
class SamlController extends JFrogController_1.JFrogController {
    static async samlLogoutRequest(req, res, next) {
        const samlSessionIndex = req.jwtExtension.samlSessionIndex;
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        const logoutUrl = await Services_1.ArtifactoryLogoutService.getSamlLogoutRequest(samlSessionIndex, authData);
        res.send(logoutUrl);
    }
    static updatePlatformConfig(req, res, next) {
        var _a;
        PlatformConfiguration_1.default.autoRedirectToSamlLogin = (_a = req.body) === null || _a === void 0 ? void 0 : _a.autoRedirect;
        next();
    }
}
exports.SamlController = SamlController;


/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicesAuthenticationController = void 0;
const ServiceAuthErrorNoBearerToken_1 = __webpack_require__(314);
const AuthenticationUtil_1 = __webpack_require__(315);
const Services_1 = __webpack_require__(3);
const LoggerFactory_1 = __webpack_require__(1);
const ServiceAuthErrorTokenVerifyFail_1 = __webpack_require__(316);
const ServiceAuthErrorNotServiceAdmin_1 = __webpack_require__(317);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
class ServicesAuthenticationController {
    static async authenticateService(req, res, next) {
        logger.debug('in ServicesAuthenticationController::authenticateService');
        const bearerToken = AuthenticationUtil_1.AuthenticationUtil.getBearerTokenFromPayload(req.get('Authorization'));
        if (!bearerToken) {
            return next(new ServiceAuthErrorNoBearerToken_1.ServiceAuthErrorNoBearerToken());
        }
        const verifyResponseModel = await Services_1.AccessTokenService.verifyToken(bearerToken);
        if (!verifyResponseModel || !verifyResponseModel.successful) {
            return next(new ServiceAuthErrorTokenVerifyFail_1.ServiceAuthErrorTokenVerifyFail(verifyResponseModel ? verifyResponseModel.reason : null));
        }
        const tokenPayload = await Services_1.AccessTokenService.parseToken(bearerToken);
        const isServiceAdmin = Services_1.TokenVerificationService.isServiceAdmin(tokenPayload);
        if (isServiceAdmin) {
            return next();
        }
        return next(new ServiceAuthErrorNotServiceAdmin_1.ServiceAuthErrorNotServiceAdmin());
    }
}
exports.ServicesAuthenticationController = ServicesAuthenticationController;


/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceAuthErrorNoBearerToken = void 0;
const CustomError_1 = __webpack_require__(16);
const Constants_1 = __webpack_require__(0);
class ServiceAuthErrorNoBearerToken extends CustomError_1.CustomError {
    constructor(message = ServiceAuthErrorNoBearerToken.defaultMessage) {
        super(message);
        this.statusCode = Constants_1.STATUS_CODES.FORBIDDEN;
    }
    static get defaultMessage() {
        return `no bearer token on request`;
    }
}
exports.ServiceAuthErrorNoBearerToken = ServiceAuthErrorNoBearerToken;


/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationUtil = void 0;
class AuthenticationUtil {
    static getBearerTokenFromPayload(payload) {
        if (payload && payload.startsWith('Bearer ')) {
            return payload.split(' ')[1];
        }
    }
}
exports.AuthenticationUtil = AuthenticationUtil;


/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceAuthErrorTokenVerifyFail = void 0;
const CustomError_1 = __webpack_require__(16);
const Constants_1 = __webpack_require__(0);
class ServiceAuthErrorTokenVerifyFail extends CustomError_1.CustomError {
    constructor(reason = 'unknown') {
        super(`failed verifying token for this reason - ${reason}`);
        this.statusCode = Constants_1.STATUS_CODES.FORBIDDEN;
    }
}
exports.ServiceAuthErrorTokenVerifyFail = ServiceAuthErrorTokenVerifyFail;


/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceAuthErrorNotServiceAdmin = void 0;
const CustomError_1 = __webpack_require__(16);
const Constants_1 = __webpack_require__(0);
class ServiceAuthErrorNotServiceAdmin extends CustomError_1.CustomError {
    constructor(message = ServiceAuthErrorNotServiceAdmin.defaultMessage) {
        super(message);
        this.statusCode = Constants_1.STATUS_CODES.FORBIDDEN;
    }
    static get defaultMessage() {
        return `not a service admin. should be --> scope - applied-permissions/admin. audience - jfxx@* `;
    }
}
exports.ServiceAuthErrorNotServiceAdmin = ServiceAuthErrorNotServiceAdmin;


/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(319), exports);
__exportStar(__webpack_require__(320), exports);
__exportStar(__webpack_require__(322), exports);


/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginOauthController = void 0;
const LoggerFactory_1 = __webpack_require__(1);
const Services_1 = __webpack_require__(3);
const Constants_1 = __webpack_require__(0);
const Decorators_1 = __webpack_require__(2);
const LoginController_1 = __webpack_require__(29);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
class LoginOauthController extends LoginController_1.LoginController {
    static getOauthMiddlewares() {
        return [LoginOauthController.loginToArtifactory,
            LoginOauthController.checkForOauthError,
            LoginOauthController.getSessionIdAndUserInfo,
            LoginController_1.LoginController.authenticateRequest,
            LoginController_1.LoginController.setSsoRedirectLocation,
            LoginOauthController.doLoginCleanupAndSendResponse,
            LoginOauthController.doLoginCleanupOnError];
    }
    static async loginToArtifactory(req, res, next) {
        try {
            const response = await Services_1.ArtifactoryService.oauthLogin(req.body, req.headers, req.query)
                .catch(err => {
                var _a;
                if (((_a = err.response) === null || _a === void 0 ? void 0 : _a.status) === 302) {
                    res.status(302);
                    return { data: err.response.data, headers: err.response.headers };
                }
                else {
                    throw err;
                }
            });
            LoginController_1.LoginController.addHeadersToResponse(response.headers, res);
            res.locals.realm = Constants_1.REALM.OAUTH;
            res.locals.data = response.data;
            next();
        }
        catch (e) {
            LoginController_1.LoginController.loginErrorHandler(e, res);
        }
    }
}
__decorate([
    Decorators_1.methodLog({ logger })
], LoginOauthController, "loginToArtifactory", null);
exports.LoginOauthController = LoginOauthController;


/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginMfaController = void 0;
const Services_1 = __webpack_require__(3);
const LoginController_1 = __webpack_require__(29);
const Decorators_1 = __webpack_require__(2);
const LoggerFactory_1 = __webpack_require__(1);
const Constants_1 = __webpack_require__(0);
const qrcode = __webpack_require__(321);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
class LoginMfaController extends LoginController_1.LoginController {
    static getMfaMiddlewares() {
        return [
            LoginMfaController.verify,
            LoginController_1.LoginController.getSessionIdAndUserInfo,
            LoginController_1.LoginController.handleCrowdUser,
            LoginController_1.LoginController.authenticateRequest,
            LoginController_1.LoginController.doLoginCleanupAndSendResponse,
            LoginController_1.LoginController.doLoginCleanupOnError
        ];
    }
    static async verify(req, res, next) {
        var _a, _b, _c, _d;
        const authenticator = req.params.authenticator;
        const otp = req.body.otp;
        const { data, headers } = await LoginMfaController.getDecryptedLoginData(req);
        const username = data.name;
        logger.debug(`validating verify code : ${otp} for user : ${username}`);
        try {
            await Services_1.LoginService.verifyMfaUser(authenticator, username, otp);
            logger.debug(`user ${username} verified successfully`);
            res.locals.data = data;
            LoginMfaController.addHeadersToResponse(headers, res);
            for (const cookieName of Object.values(Constants_1.MFA_COOKIES)) {
                res.cookie(cookieName, '', { maxAge: 0 });
            }
            return next();
        }
        catch (e) {
            const errMessage = (_d = (_c = (_b = (_a = e === null || e === void 0 ? void 0 : e.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.errors) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.message;
            res.status(Constants_1.STATUS_CODES.UNAUTHORIZED).send(errMessage || 'Bad verify code');
        }
    }
    static async enroll(req, res, next) {
        var _a, _b, _c, _d;
        const authenticator = req.params.authenticator;
        const { data: userInfo } = await LoginMfaController.getDecryptedLoginData(req);
        const username = userInfo.name;
        logger.debug(`getting enrollment data for user : ${username} for authenticator : ${authenticator}`);
        try {
            const { barcode } = await Services_1.LoginService.enrollUser(authenticator, username);
            const enrollQrImageBase64 = await qrcode.toDataURL(decodeURIComponent(barcode), { type: 'image/png' });
            logger.debug(`got qr code for user :${username}`);
            res.json({ enrollQrImageBase64 });
        }
        catch (e) {
            const errMessage = (_d = (_c = (_b = (_a = e === null || e === void 0 ? void 0 : e.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.errors) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.message;
            next(new Error(`getting enroll data for user failed ${errMessage || ''}`));
        }
    }
    static validateCookiesExists(req, res, next) {
        const cookies = req.cookies;
        if (Constants_1.MFA_COOKIES.headers in cookies && Constants_1.MFA_COOKIES.data in cookies) {
            return next();
        }
        logger.warn(`user requested ${req.originalUrl} without login headers`);
        return res.status(Constants_1.STATUS_CODES.FORBIDDEN).send('Session expired. Please try again.');
    }
}
__decorate([
    Decorators_1.controllerErrorHandler()
], LoginMfaController, "enroll", null);
exports.LoginMfaController = LoginMfaController;


/***/ }),
/* 321 */
/***/ (function(module, exports) {

module.exports = require("qrcode");

/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginSamlController = void 0;
const LoggerFactory_1 = __webpack_require__(1);
const Services_1 = __webpack_require__(3);
const Constants_1 = __webpack_require__(0);
const Decorators_1 = __webpack_require__(2);
const LoginController_1 = __webpack_require__(29);
const STATUS_CODES_1 = __webpack_require__(42);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
class LoginSamlController extends LoginController_1.LoginController {
    static getSamlMiddlewares() {
        return [
            LoginSamlController.loginToArtifactory,
            LoginSamlController.getSessionIdAndUserInfo,
            LoginController_1.LoginController.authenticateRequest,
            LoginController_1.LoginController.setSsoRedirectLocation,
            LoginSamlController.doLoginCleanupAndSendResponse,
            LoginSamlController.doLoginCleanupOnError,
        ];
    }
    static async loginToArtifactory(req, res, next) {
        var _a, _b;
        try {
            const encodedSamlResponse = encodeURIComponent((_a = req.body) === null || _a === void 0 ? void 0 : _a.SAMLResponse);
            const encodedRelayState = encodeURIComponent((_b = req.body) === null || _b === void 0 ? void 0 : _b.RelayState);
            const data = `SAMLResponse=${encodedSamlResponse}&RelayState=${encodedRelayState}`;
            const response = await Services_1.ArtifactoryService.samlLogin(data, req.headers, req.query).catch((err) => {
                var _a;
                if (((_a = err.response) === null || _a === void 0 ? void 0 : _a.status) === STATUS_CODES_1.default.SSO_REDIRECT) {
                    res.status(STATUS_CODES_1.default.SSO_REDIRECT);
                    return { data: err.response.data, headers: err.response.headers };
                }
                else {
                    throw err;
                }
            });
            LoginController_1.LoginController.addHeadersToResponse(response.headers, res);
            res.locals.data = response.data;
            res.locals.realm = Constants_1.REALM.SAML;
            res.locals.isSamlUser = true;
            next();
        }
        catch (e) {
            LoginController_1.LoginController.loginErrorHandler(e, res);
        }
    }
}
__decorate([
    Decorators_1.methodLog({ logger })
], LoginSamlController, "loginToArtifactory", null);
exports.LoginSamlController = LoginSamlController;


/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtifactorySecurityConfigRouteHandler = void 0;
const proxy = __webpack_require__(51);
const ArtifactoryRouteHandler_1 = __webpack_require__(71);
const LoggerFactory_1 = __webpack_require__(1);
const PlatformConfiguration_1 = __webpack_require__(11);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
class ArtifactorySecurityConfigRouteHandler extends ArtifactoryRouteHandler_1.ArtifactoryRouteHandler {
    get proxyHandler() {
        return proxy(super.getProxyUrl.bind(this), {
            proxyReqPathResolver: this.getApiProxyPath.bind(this),
            // @ts-ignore
            userResHeaderDecorator: ArtifactorySecurityConfigRouteHandler.userResHeaderDecorator,
            ...this.proxyOptions,
        });
    }
    static userResHeaderDecorator(headers, userReq, userRes, proxyReq, proxyRes) {
        if (proxyRes.statusCode === 200) {
            const securityConfigChange = userReq.body;
            if ('anonAccessEnabled' in securityConfigChange) {
                logger.debug('changing Config:anonAccessEnabled from file ArtifactorySecurityConfigRouteHandler');
                PlatformConfiguration_1.default.anonAccessEnabled = securityConfigChange.anonAccessEnabled;
            }
        }
    }
}
exports.ArtifactorySecurityConfigRouteHandler = ArtifactorySecurityConfigRouteHandler;


/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtifactoryCrowdConfigRouteHandler = void 0;
const proxy = __webpack_require__(51);
const ArtifactoryRouteHandler_1 = __webpack_require__(71);
const LoggerFactory_1 = __webpack_require__(1);
const PlatformConfiguration_1 = __webpack_require__(11);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
class ArtifactoryCrowdConfigRouteHandler extends ArtifactoryRouteHandler_1.ArtifactoryRouteHandler {
    get proxyHandler() {
        return proxy(super.getProxyUrl.bind(this), {
            proxyReqPathResolver: this.getApiProxyPath.bind(this),
            // @ts-ignore
            userResHeaderDecorator: ArtifactoryCrowdConfigRouteHandler.userResHeaderDecorator,
            ...this.proxyOptions,
        });
    }
    static userResHeaderDecorator(headers, userReq, userRes, proxyReq, proxyRes) {
        if (proxyRes.statusCode === 200) {
            const crowdConfigChange = userReq.body;
            if ('enableIntegration' in crowdConfigChange) {
                logger.debug('changing Config:crowdEnabled from file ArtifactoryCrowdConfigRouteHandler');
                PlatformConfiguration_1.default.crowdEnabled = crowdConfigChange.enableIntegration;
            }
        }
    }
}
exports.ArtifactoryCrowdConfigRouteHandler = ArtifactoryCrowdConfigRouteHandler;


/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(326), exports);
__exportStar(__webpack_require__(115), exports);
__exportStar(__webpack_require__(115), exports);


/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtifactoryLogoutRouteHandler = void 0;
const proxy = __webpack_require__(51);
const Artifactory_1 = __webpack_require__(70);
const Authentication_1 = __webpack_require__(23);
class ArtifactoryLogoutRouteHandler extends Artifactory_1.ArtifactoryRouteHandler {
    get proxyHandler() {
        return proxy(super.getProxyUrl.bind(this), {
            proxyReqPathResolver: this.getApiProxyPath.bind(this),
            userResHeaderDecorator: Authentication_1.LogoutController.logoutInterceptor.bind(this),
        });
    }
    shouldUseUiEndpoint() {
        return true;
    }
}
exports.ArtifactoryLogoutRouteHandler = ArtifactoryLogoutRouteHandler;


/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthErrorFailedCrowdCookieLogin = void 0;
const AuthError_1 = __webpack_require__(10);
class AuthErrorFailedCrowdCookieLogin extends AuthError_1.AuthError {
    constructor(message = AuthErrorFailedCrowdCookieLogin.defaultMessage) {
        super(message);
    }
    static get defaultMessage() {
        return 'Failed to authenticate using crowd cookie';
    }
}
exports.AuthErrorFailedCrowdCookieLogin = AuthErrorFailedCrowdCookieLogin;


/***/ }),
/* 328 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DistributionRouteHandler = void 0;
const Constants_1 = __webpack_require__(0);
const ServiceLevelRouteHandler_1 = __webpack_require__(20);
const distributionServiceName = Constants_1.SERVICES.DISTRIBUTION.NAME;
class DistributionRouteHandler extends ServiceLevelRouteHandler_1.ServiceLevelRouteHandler {
    get addImpersonationTokenToHeader() {
        return this.addServiceImpersonationTokenToHeader.bind(this);
    }
    constructor() {
        super(distributionServiceName);
    }
}
exports.DistributionRouteHandler = DistributionRouteHandler;


/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.InsightRouteHandler = void 0;
const Constants_1 = __webpack_require__(0);
const ServiceLevelRouteHandler_1 = __webpack_require__(20);
const insightServiceName = Constants_1.SERVICES.INSIGHT.NAME;
class InsightRouteHandler extends ServiceLevelRouteHandler_1.ServiceLevelRouteHandler {
    get addImpersonationTokenToHeader() {
        return this.addServiceImpersonationTokenToHeader.bind(this);
    }
    constructor() {
        super(insightServiceName);
    }
}
exports.InsightRouteHandler = InsightRouteHandler;


/***/ }),
/* 330 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MissionControlRouteHandler = void 0;
const Constants_1 = __webpack_require__(0);
const ServiceLevelRouteHandler_1 = __webpack_require__(20);
const LoggerFactory_1 = __webpack_require__(1);
const mcServiceName = Constants_1.SERVICES.MISSION_CONTROL.NAME;
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
class MissionControlRouteHandler extends ServiceLevelRouteHandler_1.ServiceLevelRouteHandler {
    get addImpersonationTokenToHeader() {
        return this.addServiceImpersonationTokenToHeader.bind(this);
    }
    constructor() {
        super(mcServiceName);
    }
}
exports.MissionControlRouteHandler = MissionControlRouteHandler;


/***/ }),
/* 331 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.XrayRouteHandler = void 0;
const Constants_1 = __webpack_require__(0);
const ServiceLevelRouteHandler_1 = __webpack_require__(20);
const xrayServiceName = Constants_1.SERVICES.XRAY.NAME;
class XrayRouteHandler extends ServiceLevelRouteHandler_1.ServiceLevelRouteHandler {
    get addImpersonationTokenToHeader() {
        return this.addServiceImpersonationTokenToHeader.bind(this);
    }
    constructor() {
        super(xrayServiceName);
    }
}
exports.XrayRouteHandler = XrayRouteHandler;


/***/ }),
/* 332 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PipelinesRouteHandler = void 0;
const Constants_1 = __webpack_require__(0);
const ServiceLevelRouteHandler_1 = __webpack_require__(20);
const pipelinesServiceName = Constants_1.SERVICES.PIPELINES.NAME;
class PipelinesRouteHandler extends ServiceLevelRouteHandler_1.ServiceLevelRouteHandler {
    get addImpersonationTokenToHeader() {
        return this.addServiceImpersonationTokenToHeader.bind(this);
    }
    constructor() {
        super(pipelinesServiceName);
    }
}
exports.PipelinesRouteHandler = PipelinesRouteHandler;


/***/ }),
/* 333 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EventRouteHandler = void 0;
const Constants_1 = __webpack_require__(0);
const ServiceLevelRouteHandler_1 = __webpack_require__(20);
const eventServiceName = Constants_1.SERVICES.EVENT.NAME;
class EventRouteHandler extends ServiceLevelRouteHandler_1.ServiceLevelRouteHandler {
    get addImpersonationTokenToHeader() {
        return this.addServiceImpersonationTokenToHeader.bind(this);
    }
    constructor() {
        super(eventServiceName);
    }
}
exports.EventRouteHandler = EventRouteHandler;


/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplicatorRouteHandler = void 0;
const Constants_1 = __webpack_require__(0);
const ServiceLevelRouteHandler_1 = __webpack_require__(20);
const replicatorServiceName = Constants_1.SERVICES.REPLICATOR.NAME;
class ReplicatorRouteHandler extends ServiceLevelRouteHandler_1.ServiceLevelRouteHandler {
    get addImpersonationTokenToHeader() {
        return this.addServiceImpersonationTokenToHeader.bind(this);
    }
    constructor() {
        super(replicatorServiceName);
    }
}
exports.ReplicatorRouteHandler = ReplicatorRouteHandler;


/***/ }),
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtifactoryController = void 0;
const LoggerFactory_1 = __webpack_require__(1);
const CacheDB_1 = __webpack_require__(35);
const index_1 = __webpack_require__(0);
const Services_1 = __webpack_require__(3);
const JFrogController_1 = __webpack_require__(5);
const models_1 = __webpack_require__(26);
const Decorators_1 = __webpack_require__(2);
const PlatformConfiguration_1 = __webpack_require__(11);
const MothershipTopologyService_1 = __webpack_require__(30);
const Constants_1 = __webpack_require__(0);
const CommonController_1 = __webpack_require__(117);
const AuthenticationErrors_1 = __webpack_require__(13);
const CryptoUtils_1 = __webpack_require__(100);
const TIME_1 = __webpack_require__(76);
// tslint:disable-next-line:no-var-requires
const config = __webpack_require__(4);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
const cache = CacheDB_1.CacheDB.getFooterCacheDB();
const HALF_HOUR_MS = (0.5 * TIME_1.default.HOUR_MS);
const USER_PROFILE_TOKEN = 'USER_PROFILE_TOKEN';
const RE_AUTH_HEADER = Constants_1.CUSTOM_HEADERS.RE_AUTHENTICATE.toLowerCase();
class ArtifactoryController extends JFrogController_1.JFrogController {
    static async getFooter(req, res, _) {
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        const unifiedFooter = await Services_1.FooterUtil.getFooter(authData);
        const isAol = await cache.get(index_1.ONBOARDING.IS_AOL);
        if (!isAol) {
            logger.debug(`Setting AOL flag to cache - ${unifiedFooter.isAol}`);
            await cache.set('isAol', unifiedFooter.isAol.toString());
        }
        return res.send(unifiedFooter);
    }
    static async getCurrent(req, res, _) {
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        const userInfo = await Services_1.ArtifactoryService.getCurrentUserInfo(authData);
        const platformUser = Services_1.UserService.setUserFieldsFromJwtExtention(userInfo, req.jwtExtension);
        const { isDefaultProjectAdmin } = await Services_1.ArtifactoryService.getProjectAdminFlags(authData, userInfo.name, req.userGroups);
        platformUser.isDefaultProjectAdmin = isDefaultProjectAdmin;
        return res.send(platformUser);
    }
    static async updateMailConfig(req, res, _) {
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        const response = await Services_1.ArtifactoryService.updateMailConfig(req.body, authData);
        ArtifactoryController.notifyConfigChanges(models_1.ConfigEvents.MAIL, authData);
        res.send(response);
    }
    static async createProxyConfig(req, res, _) {
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        const response = await Services_1.ArtifactoryService.createProxyConfig(req.body, authData);
        ArtifactoryController.notifyConfigChanges(models_1.ConfigEvents.PROXY, authData);
        res.send(response);
    }
    static async updateProxyConfig(req, res, _) {
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        const response = await Services_1.ArtifactoryService.updateProxyConfig(req.params.id, req.body, authData);
        ArtifactoryController.notifyConfigChanges(models_1.ConfigEvents.PROXY, authData);
        res.send(response);
    }
    static async deleteProxyConfig(req, res, _) {
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        const response = await Services_1.ArtifactoryService.deleteProxyConfig(req.body, authData);
        ArtifactoryController.notifyConfigChanges(models_1.ConfigEvents.PROXY, authData);
        res.send(response);
    }
    static async updateSecurityConfig(req, res, _) {
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        const response = await Services_1.ArtifactoryService.updateSecurityConfig(req.body, authData);
        ArtifactoryController.notifyConfigChanges(models_1.ConfigEvents.SECURITY, authData);
        res.send(response);
    }
    static async updateGeneralConfig(req, res, _) {
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        const response = await Services_1.ArtifactoryService.updateGeneralConfig(req.body, authData);
        ArtifactoryController.notifyConfigChanges(models_1.ConfigEvents.BASE_URL, authData);
        res.send(response);
    }
    static async setXrayEnabled(req, res, _) {
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        const response = await Services_1.ArtifactoryService.setXrayEnabled(req.body.xrayEnabled, authData);
        ArtifactoryController.notifyConfigChanges(models_1.ConfigEvents.XRAY, authData);
        res.send(response);
    }
    static async setAllowBlockedArtifactsDownload(req, res, _) {
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        const response = await Services_1.ArtifactoryService.setAllowBlockedArtifactsDownload(req.body.xrayAllowBlocked, authData);
        ArtifactoryController.notifyConfigChanges(models_1.ConfigEvents.XRAY, authData);
        res.send(response);
    }
    static async setAllowWhenUnavailable(req, res, _) {
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        const response = await Services_1.ArtifactoryService.setAllowWhenUnavailable(req.body.xrayAllowWhenUnavailable, authData);
        ArtifactoryController.notifyConfigChanges(models_1.ConfigEvents.XRAY, authData);
        res.send(response);
    }
    static async getJoinKey(req, res, _) {
        try {
            const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
            const reAuthenticateHeaders = req.get(Constants_1.CUSTOM_HEADERS.RE_AUTHENTICATE);
            const realm = req.jwtExtension.realm;
            if (!!req.jwtExtension.requireProfilePassword && !!req.jwtExtension.requireProfileUnlock) {
                // artifactory client will reject the promise if it didn't get a 200 status
                await Services_1.ArtifactoryService.validateUserCredentials(authData, realm, reAuthenticateHeaders);
            }
            const joinKey = await Services_1.AccessService.getJoinKey();
            return res.send({ joinKey });
        }
        catch (err) {
            logger.error(err);
            res.sendStatus(Constants_1.STATUS_CODES.BAD_REQUEST);
        }
    }
    static async onboardingChangePassword(req, res, next) {
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        await ArtifactoryController.validateTokenNotExpiredAndValidUser(authData);
        await ArtifactoryController.changePassword(req, res, next);
    }
    static async changePassword(req, res, _) {
        const payload = req.body;
        res.send(await Services_1.ArtifactoryService.changePassword(payload));
    }
    static deleteNode(req, res, _) {
        ArtifactoryController.common.deleteNode(req, res, _);
    }
    static async getUserProfile(req, res, _) {
        var _a;
        const realm = ((_a = req === null || req === void 0 ? void 0 : req.jwtExtension) === null || _a === void 0 ? void 0 : _a.realm) || null;
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        const { userName } = authData;
        const payload = req.body;
        logger.debug(`ArtifactoryCtrl.getUserProfile user: ${userName} realm: ${realm}`);
        const profile = await Services_1.ArtifactoryService.getUserProfile(payload, authData, { realm });
        const encryptedData = await CryptoUtils_1.default.encryptValue(`${userName}:${Date.now()}`);
        res.cookie(USER_PROFILE_TOKEN, encryptedData, {
            maxAge: HALF_HOUR_MS,
            httpOnly: true,
            secure: false,
        });
        res.send(profile);
    }
    static async setUserProfile(req, res, _) {
        var _a;
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        const { userName } = authData;
        const profile = req.body;
        const realm = ((_a = req === null || req === void 0 ? void 0 : req.jwtExtension) === null || _a === void 0 ? void 0 : _a.realm) || null;
        const hasValidEncryptedData = await ArtifactoryController.hasValidEncryptedData(req.cookies[USER_PROFILE_TOKEN], userName);
        logger.debug(`ArtifactoryCtrl.setUserProfile realm: ${realm}, userName: ${userName}`);
        if (hasValidEncryptedData) {
            res.send(await Services_1.ArtifactoryService.setUserProfile(profile, authData, { realm }));
        }
        else {
            res.sendStatus(Constants_1.STATUS_CODES.FORBIDDEN);
        }
    }
    static async generateUserApiKey(req, res, _) {
        var _a, _b, _c;
        const realm = (_b = (_a = req.jwtExtension) === null || _a === void 0 ? void 0 : _a.realm) !== null && _b !== void 0 ? _b : null;
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        const { userName } = authData;
        const hasValidEncryptedData = await ArtifactoryController.hasValidEncryptedData(req.cookies[USER_PROFILE_TOKEN], userName);
        const userInfo = await Services_1.ArtifactoryService.getCurrentUserInfo(authData);
        const authHeader = (_c = req.headers) === null || _c === void 0 ? void 0 : _c[RE_AUTH_HEADER];
        logger.debug(`ArtifactoryCtrl.generateUserApiKey realm: ${realm}, user: ${userName}, authHeader: ${authHeader}`);
        if (hasValidEncryptedData && authHeader && userInfo.profileUpdatable) {
            const headers = { [Constants_1.CUSTOM_HEADERS.RE_AUTHENTICATE]: authHeader };
            res.send(await Services_1.ArtifactoryService.generateUserApiKey(userName, authData, { realm }, headers));
        }
        else {
            res.sendStatus(Constants_1.STATUS_CODES.FORBIDDEN);
        }
    }
    static async reGenerateUserApiKey(req, res, _) {
        var _a, _b, _c;
        const realm = (_b = (_a = req.jwtExtension) === null || _a === void 0 ? void 0 : _a.realm) !== null && _b !== void 0 ? _b : null;
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        const { userName } = authData;
        const hasValidEncryptedData = await ArtifactoryController.hasValidEncryptedData(req.cookies[USER_PROFILE_TOKEN], userName);
        const userInfo = await Services_1.ArtifactoryService.getCurrentUserInfo(authData);
        const authHeader = (_c = req.headers) === null || _c === void 0 ? void 0 : _c[RE_AUTH_HEADER];
        logger.debug(`ArtifactoryCtrl.reGenerateUserApiKey realm: ${realm}, user: ${userName}, authHeader: ${authHeader}`);
        if (hasValidEncryptedData && authHeader && userInfo.profileUpdatable) {
            const headers = { [Constants_1.CUSTOM_HEADERS.RE_AUTHENTICATE]: authHeader };
            res.send(await Services_1.ArtifactoryService.reGenerateUserApiKey(userName, authData, { realm }, headers));
        }
        else {
            res.sendStatus(Constants_1.STATUS_CODES.FORBIDDEN);
        }
    }
    static async deleteUserApiKey(req, res, _) {
        var _a, _b, _c;
        const realm = (_b = (_a = req.jwtExtension) === null || _a === void 0 ? void 0 : _a.realm) !== null && _b !== void 0 ? _b : null;
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        const { userName } = authData;
        const hasValidEncryptedData = await ArtifactoryController.hasValidEncryptedData(req.cookies[USER_PROFILE_TOKEN], userName);
        const userInfo = await Services_1.ArtifactoryService.getCurrentUserInfo(authData);
        const authHeader = (_c = req.headers) === null || _c === void 0 ? void 0 : _c[RE_AUTH_HEADER];
        logger.debug(`ArtifactoryCtrl.deleteUserApiKey realm: ${realm}, user: ${userName}, authHeader: ${authHeader}`);
        if (hasValidEncryptedData && authHeader && userInfo.profileUpdatable) {
            const headers = { [Constants_1.CUSTOM_HEADERS.RE_AUTHENTICATE]: authHeader };
            res.send(await Services_1.ArtifactoryService.deleteUserApiKey(userName, authData, { realm }, headers));
        }
        else {
            res.sendStatus(Constants_1.STATUS_CODES.FORBIDDEN);
        }
    }
    static async hasValidEncryptedData(encryptedData, currentlyLoggedInUser) {
        if (!encryptedData)
            return false;
        const decryptedData = await CryptoUtils_1.default.decryptValue(encryptedData);
        const [userName, timestamp] = decryptedData.split(':');
        const isRequestWithinTimeLimit = timestamp && (Date.now() - parseInt(timestamp) < HALF_HOUR_MS);
        const isLoggedInUser = userName === currentlyLoggedInUser;
        return isRequestWithinTimeLimit && isLoggedInUser;
    }
    static async validateTokenNotExpiredAndValidUser(authData) {
        try {
            const currentUser = await Services_1.ArtifactoryService.getCurrentUserInfo(authData);
            if (currentUser.name === Constants_1.ANONYMOUS) {
                throw new Error();
            }
            return true;
        }
        catch (e) {
            throw new AuthenticationErrors_1.AuthErrorAnonymousNotAllowed();
        }
    }
    static notifyConfigChanges(configEvent, authData) {
        const shouldNotifyMissionControl = ArtifactoryController.shouldNotify(Constants_1.SERVICES.MISSION_CONTROL.KEY, configEvent);
        const shouldNotifyXray = ArtifactoryController.shouldNotify(Constants_1.SERVICES.XRAY.KEY, configEvent);
        const shouldNotifyDistribution = ArtifactoryController.shouldNotify(Constants_1.SERVICES.DISTRIBUTION.KEY, configEvent);
        logger.info(`notifying all client about ${configEvent} config changes`);
        if (shouldNotifyXray) {
            Services_1.XrayService.notifyConfigChanges(configEvent, authData).catch((e) => {
                logger.warn(`notifying xray failed ${e.message}`);
            });
        }
        if (shouldNotifyDistribution) {
            Services_1.DistributionService.notifyConfigChanges(configEvent, authData).catch((e) => {
                logger.warn(`notifying distribution failed ${e.message}`);
            });
        }
        if (shouldNotifyMissionControl) {
            Services_1.MissionControlService.notifyConfigChanges(configEvent, authData).catch((e) => {
                logger.warn(`notifying mission control failed ${e.message}`);
            });
        }
        if (configEvent === models_1.ConfigEvents.SECURITY) {
            PlatformConfiguration_1.default.fetchAndUpdateAnonAccessEnabled().catch(() => {
                return;
            });
        }
    }
    static shouldNotify(serviceName, configEvent) {
        const exists = MothershipTopologyService_1.default.serviceExists(serviceName);
        let hasAPI = false;
        if (serviceName in Constants_1.SERVICES_CONFIG_NOTIFY) {
            hasAPI = Constants_1.SERVICES_CONFIG_NOTIFY[serviceName].includes(configEvent);
        }
        return exists && hasAPI;
    }
}
ArtifactoryController.common = new CommonController_1.CommonController(Services_1.ArtifactoryService);
__decorate([
    Decorators_1.methodLog({ logger }),
    Decorators_1.controllerErrorHandler()
], ArtifactoryController, "getFooter", null);
__decorate([
    Decorators_1.methodLog({ logger }),
    Decorators_1.controllerErrorHandler()
], ArtifactoryController, "getCurrent", null);
__decorate([
    Decorators_1.methodLog({ logger }),
    Decorators_1.controllerErrorHandler()
], ArtifactoryController, "updateMailConfig", null);
__decorate([
    Decorators_1.methodLog({ logger }),
    Decorators_1.controllerErrorHandler()
], ArtifactoryController, "createProxyConfig", null);
__decorate([
    Decorators_1.methodLog({ logger }),
    Decorators_1.controllerErrorHandler()
], ArtifactoryController, "updateProxyConfig", null);
__decorate([
    Decorators_1.methodLog({ logger }),
    Decorators_1.controllerErrorHandler()
], ArtifactoryController, "deleteProxyConfig", null);
__decorate([
    Decorators_1.methodLog({ logger }),
    Decorators_1.controllerErrorHandler()
], ArtifactoryController, "updateSecurityConfig", null);
__decorate([
    Decorators_1.methodLog({ logger }),
    Decorators_1.controllerErrorHandler()
], ArtifactoryController, "updateGeneralConfig", null);
__decorate([
    Decorators_1.methodLog({ logger }),
    Decorators_1.controllerErrorHandler()
], ArtifactoryController, "setXrayEnabled", null);
__decorate([
    Decorators_1.methodLog({ logger }),
    Decorators_1.controllerErrorHandler()
], ArtifactoryController, "setAllowBlockedArtifactsDownload", null);
__decorate([
    Decorators_1.methodLog({ logger }),
    Decorators_1.controllerErrorHandler()
], ArtifactoryController, "setAllowWhenUnavailable", null);
__decorate([
    Decorators_1.methodLog({ logger })
], ArtifactoryController, "getJoinKey", null);
__decorate([
    Decorators_1.controllerErrorHandler()
], ArtifactoryController, "onboardingChangePassword", null);
__decorate([
    Decorators_1.controllerErrorHandler()
], ArtifactoryController, "changePassword", null);
__decorate([
    Decorators_1.methodLog({ logger })
], ArtifactoryController, "deleteNode", null);
__decorate([
    Decorators_1.methodLog({ logger }),
    Decorators_1.controllerErrorHandler()
], ArtifactoryController, "getUserProfile", null);
__decorate([
    Decorators_1.methodLog({ logger }),
    Decorators_1.controllerErrorHandler()
], ArtifactoryController, "setUserProfile", null);
__decorate([
    Decorators_1.methodLog({ logger }),
    Decorators_1.controllerErrorHandler()
], ArtifactoryController, "generateUserApiKey", null);
__decorate([
    Decorators_1.methodLog({ logger }),
    Decorators_1.controllerErrorHandler()
], ArtifactoryController, "reGenerateUserApiKey", null);
__decorate([
    Decorators_1.methodLog({ logger }),
    Decorators_1.controllerErrorHandler()
], ArtifactoryController, "deleteUserApiKey", null);
__decorate([
    Decorators_1.methodLog({ logger })
], ArtifactoryController, "notifyConfigChanges", null);
exports.ArtifactoryController = ArtifactoryController;


/***/ }),
/* 336 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesController = void 0;
const JFrogController_1 = __webpack_require__(5);
const Decorators_1 = __webpack_require__(2);
const RolesService_1 = __webpack_require__(87);
class RolesController extends JFrogController_1.JFrogController {
    static async create(req, res, _) {
        const role = req.body;
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        const response = await RolesService_1.RolesService.create(authData, role);
        res.send(response);
    }
    static async edit(req, res, _) {
        const role = req.body;
        role.name = req.params.name;
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        res.send(await RolesService_1.RolesService.edit(authData, role));
    }
    static async getAll(req, res, _) {
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        res.send(await RolesService_1.RolesService.getAll(authData));
    }
    static async getByName(req, res, _) {
        const roleName = req.params.name;
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        const response = await RolesService_1.RolesService.getByName(authData, roleName);
        res.send(response);
    }
    static async delete(req, res, _) {
        const roleName = req.params.name;
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        res.send(await RolesService_1.RolesService.delete(authData, roleName));
    }
}
__decorate([
    Decorators_1.controllerErrorHandler()
], RolesController, "create", null);
__decorate([
    Decorators_1.controllerErrorHandler()
], RolesController, "edit", null);
__decorate([
    Decorators_1.controllerErrorHandler()
], RolesController, "getAll", null);
__decorate([
    Decorators_1.controllerErrorHandler()
], RolesController, "getByName", null);
__decorate([
    Decorators_1.controllerErrorHandler()
], RolesController, "delete", null);
exports.RolesController = RolesController;


/***/ }),
/* 337 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsRolesController = void 0;
const JFrogController_1 = __webpack_require__(5);
const Decorators_1 = __webpack_require__(2);
const Access_1 = __webpack_require__(27);
class ProjectsRolesController extends JFrogController_1.JFrogController {
    static async get(req, res, _) {
        const { projectKey, roleName } = req.params;
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        const role = await Access_1.ProjectsService.roles().get(authData, projectKey, roleName);
        res.json(role);
    }
    static async getAll(req, res, _) {
        const { projectKey } = req.params;
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        const getProjectResponse = await Access_1.ProjectsService.roles().getAll(authData, projectKey);
        res.json(getProjectResponse);
    }
    static async create(req, res, _) {
        const role = req.body;
        const { projectKey } = req.params;
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        res.json(await Access_1.ProjectsService.roles().create(authData, projectKey, role));
    }
    static async edit(req, res, _) {
        const role = req.body;
        const { projectKey } = req.params;
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        res.json(await Access_1.ProjectsService.roles().edit(authData, projectKey, role));
    }
    static async delete(req, res, _) {
        const { projectKey, roleName } = req.params;
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        const deleteProjectResponse = await Access_1.ProjectsService.roles().delete(authData, projectKey, roleName);
        res.json(deleteProjectResponse);
    }
}
__decorate([
    Decorators_1.controllerErrorHandler()
], ProjectsRolesController, "get", null);
__decorate([
    Decorators_1.controllerErrorHandler()
], ProjectsRolesController, "getAll", null);
__decorate([
    Decorators_1.controllerErrorHandler()
], ProjectsRolesController, "create", null);
__decorate([
    Decorators_1.controllerErrorHandler()
], ProjectsRolesController, "edit", null);
__decorate([
    Decorators_1.controllerErrorHandler()
], ProjectsRolesController, "delete", null);
exports.ProjectsRolesController = ProjectsRolesController;


/***/ }),
/* 338 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessController = void 0;
const Services_1 = __webpack_require__(3);
const JFrogController_1 = __webpack_require__(5);
const models_1 = __webpack_require__(26);
const Access_1 = __webpack_require__(36);
const Decorators_1 = __webpack_require__(2);
const express_validator_1 = __webpack_require__(15);
const Constants_1 = __webpack_require__(0);
const Services_2 = __webpack_require__(3);
const AccessAdminClient_1 = __webpack_require__(12);
const EnvironmentsError_1 = __webpack_require__(339);
const SearchUserRequest_1 = __webpack_require__(119);
const AccessEntitiesService_1 = __webpack_require__(340);
const group_pb_1 = __webpack_require__(120);
const EntityTypes_1 = __webpack_require__(121);
class AccessController extends JFrogController_1.JFrogController {
    static async searchPermission(req, res, _) {
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        const searchContext = {
            query: req.query.name,
            limit: Number(req.query.limit),
            continueState: req.query.continueState,
            direction: Access_1.PermissionUtils.getSortDirection(req.query.direction),
        };
        const result = await Services_1.AccessPermissionsService.searchPermissions(searchContext, authData);
        AccessController.sendNoCacheResponse(res, result);
    }
    static async deletePermissions(req, res, _) {
        const permissionIds = req.body.permissionIds;
        if (!permissionIds) {
            return res.status(Constants_1.STATUS_CODES.BAD_REQUEST).send('Wrong body, must provide permissionIds');
        }
        if (!Array.isArray(permissionIds)) {
            return res.status(Constants_1.STATUS_CODES.BAD_REQUEST).send('Wrong body, permissionIds must be an array');
        }
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        await Services_1.AccessPermissionsService.deletePermissions(permissionIds, authData);
        res.send(permissionIds);
    }
    static async createPermissions(req, res, _) {
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        const permissionView = req.body;
        const permissions = await Services_1.AccessPermissionsService.createPermission(permissionView, authData);
        const response = permissions.map((p) => p.toObject());
        res.send(response);
    }
    static async editPermissions(req, res, _) {
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        const permissionView = req.body;
        const permissions = await Services_1.AccessPermissionsService.editPermission(permissionView, authData);
        const response = permissions.map((p) => p.toObject());
        res.send(response);
    }
    static async getPermission(req, res, _) {
        const target = req.params.permissionTarget;
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        const result = await Services_1.AccessPermissionsService.getPermissionByTarget(target, authData);
        if (result) {
            AccessController.sendNoCacheResponse(res, result);
        }
        else {
            res.status(404).send('Not Found');
        }
    }
    static async getMfaConfig(req, res, _) {
        const result = await Services_1.AccessService.getMfaConfig();
        res.json(result);
    }
    static async setMfaConfig(req, res, _) {
        const errors = express_validator_1.validationResult(req);
        if (!errors.isEmpty()) {
            res.status(Constants_1.STATUS_CODES.BAD_REQUEST).json({ errors: errors.array() });
            return;
        }
        const { authenticators } = req.body;
        await Services_1.AccessService.setMfaConfig(authenticators);
        res.sendStatus(Constants_1.STATUS_CODES.ACCEPTED);
    }
    static async setUserCustomFields(req, res, _) {
        // TODO: Validate that body is a valid json
        const errors = express_validator_1.validationResult(req);
        if (!errors.isEmpty()) {
            res.status(Constants_1.STATUS_CODES.BAD_REQUEST).json({ errors: errors.array() });
            return;
        }
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        const resp = await Services_1.AccessService.setUserCustomData(authData, Constants_1.ACCESS.USER_CUSTOM_DATA, JSON.stringify(req.body));
        res.send(resp);
    }
    static async getPasswordPolicy(req, res, _) {
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        res.send(await Services_1.AccessService.getPasswordPolicy());
    }
    static async getUserCustomFields(req, res, _) {
        const errors = express_validator_1.validationResult(req);
        if (!errors.isEmpty()) {
            res.status(Constants_1.STATUS_CODES.BAD_REQUEST).json({ errors: errors.array() });
            return;
        }
        const { authenticators } = req.body;
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        const resp = await Services_1.AccessService.getUserCustomData(authData, Constants_1.ACCESS.USER_CUSTOM_DATA);
        res.send(resp);
    }
    static async deleteNode(req, res, _) {
        const { serviceId, nodeId } = req.params;
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        await Services_1.AccessService.deleteNode(authData, serviceId, nodeId);
        res.sendStatus(Constants_1.STATUS_CODES.OK);
    }
    static async getUserTokens(req, res, _) {
        const { getSearchTokenRequestFromQuery, searchForTokens } = Services_2.AccessSearchTokensService;
        const searchTokenRequest = getSearchTokenRequestFromQuery(req.query);
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        const ctx = await AccessAdminClient_1.AccessAdminClient.getAccessContext(authData);
        const tokenResults = await searchForTokens(ctx, searchTokenRequest);
        res.send(tokenResults);
    }
    static async getEnvironments(req, res, _) {
        try {
            const environmentsKeys = Object.keys(models_1.uiEnvironments);
            const environmentsValues = environmentsKeys.map((envK) => models_1.uiEnvironments[envK]);
            res.json(environmentsValues);
        }
        catch (e) {
            throw new EnvironmentsError_1.EnvironmentsError();
        }
    }
    static async getAdminUsers(req, res, _) {
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        const ctx = await AccessAdminClient_1.AccessAdminClient.getAccessContext(authData);
        const result = await AccessEntitiesService_1.AccessEntitiesService.getAdminUsers(ctx);
        res.json(result);
    }
    static async getAdminGroups(req, res, _) {
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        const ctx = await AccessAdminClient_1.AccessAdminClient.getAccessContext(authData);
        const result = await AccessEntitiesService_1.AccessEntitiesService.getAdminGroups(ctx);
        res.json(result);
    }
    static async searchUsers(req, res, _) {
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        const ctx = await AccessAdminClient_1.AccessAdminClient.getAccessContext(authData);
        const { filter, direction, limit, cursor } = AccessEntitiesService_1.AccessEntitiesService.getEntitySearchContext(req.query, EntityTypes_1.ENTITY_TYPES.USER);
        const searchContext = new SearchUserRequest_1.SearchUserRequest(filter, direction, cursor, limit);
        const result = await AccessEntitiesService_1.AccessEntitiesService.searchUsers(searchContext, ctx);
        res.json(result);
    }
    static async searchGroups(req, res, _) {
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        const ctx = await AccessAdminClient_1.AccessAdminClient.getAccessContext(authData);
        const { filter, direction, limit, cursor } = AccessEntitiesService_1.AccessEntitiesService.getEntitySearchContext(req.query, EntityTypes_1.ENTITY_TYPES.GROUP);
        const searchContext = new group_pb_1.SearchGroupsRequest();
        searchContext.setFilter(filter);
        searchContext.setLimit(limit);
        searchContext.setDirection(direction);
        searchContext.setCursor(cursor);
        const result = await AccessEntitiesService_1.AccessEntitiesService.searchGroups(searchContext, ctx);
        res.json(result);
    }
}
__decorate([
    Decorators_1.controllerErrorHandler()
], AccessController, "searchPermission", null);
__decorate([
    Decorators_1.controllerErrorHandler()
], AccessController, "deletePermissions", null);
__decorate([
    Decorators_1.controllerErrorHandler()
], AccessController, "createPermissions", null);
__decorate([
    Decorators_1.controllerErrorHandler()
], AccessController, "editPermissions", null);
__decorate([
    Decorators_1.controllerErrorHandler()
], AccessController, "getPermission", null);
__decorate([
    Decorators_1.controllerErrorHandler()
], AccessController, "getMfaConfig", null);
__decorate([
    Decorators_1.controllerErrorHandler()
], AccessController, "setMfaConfig", null);
__decorate([
    Decorators_1.controllerErrorHandler()
], AccessController, "setUserCustomFields", null);
__decorate([
    Decorators_1.controllerErrorHandler()
], AccessController, "getUserCustomFields", null);
__decorate([
    Decorators_1.controllerErrorHandler()
], AccessController, "deleteNode", null);
__decorate([
    Decorators_1.controllerErrorHandler()
], AccessController, "getUserTokens", null);
__decorate([
    Decorators_1.controllerErrorHandler()
], AccessController, "getEnvironments", null);
__decorate([
    Decorators_1.controllerErrorHandler()
], AccessController, "getAdminUsers", null);
__decorate([
    Decorators_1.controllerErrorHandler()
], AccessController, "getAdminGroups", null);
__decorate([
    Decorators_1.controllerErrorHandler()
], AccessController, "searchUsers", null);
__decorate([
    Decorators_1.controllerErrorHandler()
], AccessController, "searchGroups", null);
exports.AccessController = AccessController;


/***/ }),
/* 339 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvironmentsError = void 0;
const CustomError_1 = __webpack_require__(16);
const Constants_1 = __webpack_require__(0);
class EnvironmentsError extends CustomError_1.CustomError {
    constructor(message = EnvironmentsError.defaultMessage, externalMessage = EnvironmentsError.defaultMessage, statusCode = Constants_1.STATUS_CODES.NOT_FOUND) {
        super(message, externalMessage);
        this.statusCode = statusCode;
    }
    static get defaultMessage() {
        return `Could not get environments`;
    }
}
exports.EnvironmentsError = EnvironmentsError;


/***/ }),
/* 340 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessEntitiesService = void 0;
const LoggerFactory_1 = __webpack_require__(1);
const AccessService_1 = __webpack_require__(28);
const SearchUserRequest_1 = __webpack_require__(119);
const access_nodejs_client_1 = __webpack_require__(9);
const group_pb_1 = __webpack_require__(120);
const EntityTypes_1 = __webpack_require__(121);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
class AccessEntitiesService extends AccessService_1.AccessService {
    static async searchUsers(searchContext, ctx) {
        logger.debug('start searchUser', searchContext);
        try {
            const accessClient = await AccessEntitiesService.getClient();
            const response = await accessClient.user().searchUsers(ctx, searchContext);
            const entities = response.getUsersList();
            const cursor = response.getCursor();
            return {
                cursor,
                entities: entities.map(user => user.getUsername())
            };
        }
        catch (e) {
            AccessEntitiesService.handleError(e);
        }
    }
    static async searchGroups(searchContext, ctx) {
        logger.debug('start searchGroup', searchContext);
        try {
            const accessClient = await AccessEntitiesService.getClient();
            const response = await accessClient.group().searchGroups(ctx, searchContext);
            const entities = response.getGroupsList();
            const cursor = response.getCursor();
            return {
                cursor,
                entities: entities.map(group => group.getName())
            };
        }
        catch (e) {
            AccessEntitiesService.handleError(e);
        }
    }
    static async getAdminUsers(ctx) {
        logger.debug('start getAdminUsers');
        try {
            const accessClient = await AccessEntitiesService.getClient();
            return accessClient.user().getAdminUsers(ctx);
        }
        catch (e) {
            AccessEntitiesService.handleError(e);
        }
    }
    static async getAdminGroups(ctx) {
        logger.debug('start getAdminUsers');
        try {
            const accessClient = await AccessEntitiesService.getClient();
            return accessClient.group().getAdminGroups(ctx);
        }
        catch (e) {
            AccessEntitiesService.handleError(e);
        }
    }
    static handleError(e) {
        e.message = `GRPC error - ${access_nodejs_client_1.GrpcErrorType[e.code]} ${e}`;
        logger.error(e);
        throw e;
    }
    static getEntitySearchContext(params, entityType) {
        // TODO: move this const
        const DIRECTIONS = {
            [EntityTypes_1.ENTITY_TYPES.USER]: {
                desc: SearchUserRequest_1.Direction.DESC,
                asc: SearchUserRequest_1.Direction.ASC
            },
            [EntityTypes_1.ENTITY_TYPES.GROUP]: {
                desc: group_pb_1.GroupSortDirection.DESC,
                asc: group_pb_1.GroupSortDirection.ASC
            }
        };
        return {
            filter: params.filter,
            direction: DIRECTIONS[entityType][params.direction],
            limit: Number(params.limit),
            cursor: params.cursor,
        };
    }
}
exports.AccessEntitiesService = AccessEntitiesService;


/***/ }),
/* 341 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VaultController = void 0;
const JFrogController_1 = __webpack_require__(5);
const Decorators_1 = __webpack_require__(2);
const Services_1 = __webpack_require__(3);
const LoggerFactory_1 = __webpack_require__(1);
const Constants_1 = __webpack_require__(0);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
class VaultController extends JFrogController_1.JFrogController {
    static async getConfig(req, res, _) {
        var _a;
        try {
            const { params: { key } } = req;
            const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
            const data = await Services_1.AccessVaultService.get(authData, key);
            res.send({ data });
        }
        catch (e) {
            const error = ((_a = e === null || e === void 0 ? void 0 : e.response) === null || _a === void 0 ? void 0 : _a.data) || null;
            res.status(Constants_1.STATUS_CODES.BAD_REQUEST).send(error);
        }
    }
    static async setConfig(req, res, _) {
        var _a;
        try {
            const { body, params: { key } } = req;
            const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
            const data = await Services_1.AccessVaultService.set(authData, body, key);
            res.send({ data });
        }
        catch (e) {
            const error = ((_a = e === null || e === void 0 ? void 0 : e.response) === null || _a === void 0 ? void 0 : _a.data) || null;
            res.status(Constants_1.STATUS_CODES.BAD_REQUEST).send(error);
        }
    }
    static async deleteConfig(req, res, _) {
        var _a;
        try {
            const { params: { key } } = req;
            const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
            const { errors } = await Services_1.AccessVaultService.delete(authData, key);
            if (errors) {
                return res.status(Constants_1.STATUS_CODES.NOT_FOUND).send({ errors });
            }
            res.sendStatus(Constants_1.STATUS_CODES.OK);
        }
        catch (e) {
            const error = ((_a = e === null || e === void 0 ? void 0 : e.response) === null || _a === void 0 ? void 0 : _a.data) || null;
            res.status(Constants_1.STATUS_CODES.BAD_REQUEST).send(error);
        }
    }
}
__decorate([
    Decorators_1.methodLog({ logger }),
    Decorators_1.controllerErrorHandler()
], VaultController, "getConfig", null);
__decorate([
    Decorators_1.methodLog({ logger }),
    Decorators_1.controllerErrorHandler()
], VaultController, "setConfig", null);
__decorate([
    Decorators_1.methodLog({ logger }),
    Decorators_1.controllerErrorHandler()
], VaultController, "deleteConfig", null);
exports.VaultController = VaultController;


/***/ }),
/* 342 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DistributionController = void 0;
const JFrogController_1 = __webpack_require__(5);
const Decorators_1 = __webpack_require__(2);
const Services_1 = __webpack_require__(3);
const LoggerFactory_1 = __webpack_require__(1);
const CommonController_1 = __webpack_require__(117);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
class DistributionController extends JFrogController_1.JFrogController {
    static deleteNode(req, res, next) {
        DistributionController.common.deleteNode(req, res, next);
    }
}
DistributionController.common = new CommonController_1.CommonController(Services_1.DistributionService);
__decorate([
    Decorators_1.methodLog({ logger })
], DistributionController, "deleteNode", null);
exports.DistributionController = DistributionController;


/***/ }),
/* 343 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DownloadController = void 0;
const Services_1 = __webpack_require__(3);
const LoggerFactory_1 = __webpack_require__(1);
const DownloadErrorNoSignedUrl_1 = __webpack_require__(96);
const http_proxy_middleware_1 = __webpack_require__(72);
const JFrogController_1 = __webpack_require__(5);
const Decorators_1 = __webpack_require__(2);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
// MUST BE LOWER CASE
const X_ARTIFACTORY_FILENAME = 'x-artifactory-filename';
const CONTENT_DISPOSITION = 'content-disposition';
class DownloadController extends JFrogController_1.JFrogController {
    static async signUrl(req, res, next) {
        logger.debug(`in DownloadController::signUrl`);
        const { repoKey, path } = Services_1.DownloadService.getRepoKeyAndPath(req);
        logger.debug(`calling Artifactory Node.js client to get signed download url`);
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        const downloadSignedUrl = await Services_1.ArtifactoryService.getSignedUrl(repoKey, path, authData);
        const isSignedUrlAvailable = !(downloadSignedUrl && downloadSignedUrl.downloadPath);
        if (isSignedUrlAvailable) {
            return next(new DownloadErrorNoSignedUrl_1.DownloadErrorNoSignedUrl());
        }
        logger.debug(`received signed url from Artifactory - ${downloadSignedUrl.downloadPath}`);
        res.redirect(downloadSignedUrl.downloadPath);
    }
    static getDownloadProxyConfig() {
        return {
            target: Services_1.ProxyService.getArtifactoryProxyUrl(),
            onProxyRes: DownloadController.addContentDispositionHeader,
            logProvider: () => logger,
            logLevel: 'debug',
        };
    }
    static proxyHandler(req, res, next) {
        const proxyConfig = DownloadController.getDownloadProxyConfig();
        return http_proxy_middleware_1.createProxyMiddleware({
            ...proxyConfig,
            pathRewrite: Services_1.DownloadService.getDownloadPath,
        })(req, res, next);
    }
    static exportProxyHandler(req, res, next) {
        const proxyConfig = DownloadController.getDownloadProxyConfig();
        return http_proxy_middleware_1.createProxyMiddleware({
            ...proxyConfig,
            pathRewrite: Services_1.DownloadService.getExportPath,
        })(req, res, next);
    }
    static addContentDispositionHeader(proxyRes, _, __) {
        if (CONTENT_DISPOSITION in proxyRes.headers) {
            logger.silly(`request contains ${CONTENT_DISPOSITION} header, will not alter header`);
            return;
        }
        if (X_ARTIFACTORY_FILENAME in proxyRes.headers) {
            const filename = proxyRes.headers[X_ARTIFACTORY_FILENAME];
            logger.debug(`found header [${X_ARTIFACTORY_FILENAME}] with value [${filename}], will set to ${CONTENT_DISPOSITION} header`);
            proxyRes.headers[CONTENT_DISPOSITION] = `attachment; filename="${filename}"`;
        }
        else {
            logger.debug(`header unavailable [${X_ARTIFACTORY_FILENAME}] will not set ${CONTENT_DISPOSITION} header`);
        }
    }
}
__decorate([
    Decorators_1.controllerErrorHandler()
], DownloadController, "signUrl", null);
exports.DownloadController = DownloadController;


/***/ }),
/* 344 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetadataController = void 0;
const metadata_nodejs_client_1 = __webpack_require__(62);
const LoggerFactory_1 = __webpack_require__(1);
const Services_1 = __webpack_require__(3);
const HttpRouteError_1 = __webpack_require__(37);
const JFrogController_1 = __webpack_require__(5);
const Decorators_1 = __webpack_require__(2);
const config = __webpack_require__(4);
const BAD_REQUEST_MSG = 'Bad Request';
const PKG_TYPES_TO_REPLACE = { debian: 'deb' };
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
class MetadataController extends JFrogController_1.JFrogController {
    static formatSearchParams(body) {
        const replacementPkg = PKG_TYPES_TO_REPLACE[body === null || body === void 0 ? void 0 : body.package_type];
        if (replacementPkg === null || replacementPkg === void 0 ? void 0 : replacementPkg.length) {
            return { ...body, package_type: replacementPkg };
        }
        return body;
    }
    static async searchPackagesHandler(req, res, next) {
        logger.debug('in MetadataController::searchPackagesHandler');
        const { projectKey } = req.query;
        let aqlSearch;
        try {
            const formattedParams = MetadataController.formatSearchParams(req.body);
            aqlSearch = metadata_nodejs_client_1.AqlSearchParams.buildForPackagesSearch(formattedParams);
        }
        catch (e) {
            return MetadataController.handleBadRequest(e, next);
        }
        logger.debug(`Searching packages for ${JSON.stringify(aqlSearch)}`);
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        const metadataData = await Services_1.MetadataService.searchPackages(aqlSearch, projectKey, authData);
        res.send(metadataData);
    }
    static async searchVersionHandler(req, res, next) {
        logger.debug(`Searching versions for ${JSON.stringify(req.body)}`);
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        const xrayStatus = Services_1.XrayService.getRequestXrayInformation(req.body);
        const { projectKey } = req.query;
        let metadataData;
        if (xrayStatus.xrayExists && xrayStatus.isXrayRequest) {
            const xrayConfig = Services_1.XrayService.reqToXrayConfig(req);
            const xrayRes = await Services_1.XrayService.getPackageByName(xrayConfig, req.pkg_type, authData);
            const versions = xrayRes.versions.map((version) => version.version);
            metadataData = await Services_1.MetadataService.getPackageVersionsByIds(req.body.pkgid, projectKey, versions, authData);
        }
        else {
            const aqlSearch = metadata_nodejs_client_1.AqlSearchParams.buildForVersionsSearch(req.body);
            metadataData = await Services_1.MetadataService.searchVersion(aqlSearch, projectKey, authData);
        }
        res.send(metadataData);
    }
    static async getSpecificVersionHandler(req, res, next) {
        const { versionName, packageId } = req.params;
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        const versionResponse = await Services_1.MetadataService.getVersionByIdAndName(packageId, versionName, authData);
        res.send(versionResponse);
    }
    static async getSpecificPackageHandler(req, res, next) {
        const { packageId } = req.params;
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        const packageResponse = await Services_1.MetadataService.getPackageById(packageId, authData);
        res.send(packageResponse);
    }
    static handleBadRequest(e, next, message) {
        logger.error(e);
        const error = new HttpRouteError_1.HttpRouteError(message || e.message, BAD_REQUEST_MSG, 400);
        next(error);
        return;
    }
    static constructNpmUrl(resource, path) {
        return `${config.get('frontend.servicesUrls.artifactory')}/${MetadataController.npmPropsSubUrl}/${resource}?path=${path}`;
    }
}
MetadataController.npmPropsSubUrl = 'ui/v1/native/versions/npm';
__decorate([
    Decorators_1.controllerErrorHandler()
], MetadataController, "searchPackagesHandler", null);
__decorate([
    Decorators_1.methodLog({ logger }),
    Decorators_1.controllerErrorHandler()
], MetadataController, "searchVersionHandler", null);
__decorate([
    Decorators_1.controllerErrorHandler()
], MetadataController, "getSpecificVersionHandler", null);
__decorate([
    Decorators_1.controllerErrorHandler()
], MetadataController, "getSpecificPackageHandler", null);
exports.MetadataController = MetadataController;


/***/ }),
/* 345 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminIntegrationsController = void 0;
const LoggerFactory_1 = __webpack_require__(1);
const Services_1 = __webpack_require__(3);
const JFrogController_1 = __webpack_require__(5);
const ViewPipelinesController_1 = __webpack_require__(40);
const pipelines_nodejs_client_1 = __webpack_require__(34);
const LoggerDecorator_1 = __webpack_require__(17);
const Constants_1 = __webpack_require__(0);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
class AdminIntegrationsController extends JFrogController_1.JFrogController {
    static async getViewAdminIntegrations(req, res, next) {
        try {
            const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
            const masterIntegrationsCall = Services_1.PipelinesService.getMasterIntegrations(authData);
            const integrationsCall = Services_1.PipelinesService.getIntegrations(authData);
            const [masterIntegrations, integrations] = await Promise.all([masterIntegrationsCall, integrationsCall]);
            let viewIntegrationsData = [];
            if (integrations.length > 0) {
                viewIntegrationsData = integrations
                    .filter((integration) => integration['isInternal'] === true)
                    .map((integration) => {
                    const masterInt = masterIntegrations.find(({ id: integrationId }) => integrationId === integration.masterIntegrationId);
                    const type = masterInt && masterInt.displayName;
                    const masterIntName = masterInt && masterInt.name;
                    const { id, name, createdByUserName, updatedByUserName, updatedAt, masterIntegrationId, masterIntegrationType } = integration;
                    return {
                        id,
                        type,
                        name,
                        createdByUserName,
                        updatedByUserName,
                        updatedAt,
                        masterIntName,
                        masterIntegrationId,
                        masterIntegrationType,
                    };
                });
            }
            JFrogController_1.JFrogController.sendNoCacheResponse(res, viewIntegrationsData);
        }
        catch (e) {
            return ViewPipelinesController_1.ViewPipelinesController.handleError(e, next);
        }
    }
    static async getAdminIntegrationById(req, res, next) {
        try {
            const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
            const integration = await Services_1.PipelinesService.getIntegrationById(req.params.id, authData);
            if (integration && integration.isInternal) {
                const nodePools = await AdminIntegrationsController.mapAndGetViewNodePools(authData);
                integration.dynamicNodePools = nodePools.filter((nodePool) => nodePool.projectIntegrationId === integration.id);
            }
            JFrogController_1.JFrogController.sendNoCacheResponse(res, integration);
        }
        catch (e) {
            return ViewPipelinesController_1.ViewPipelinesController.handleError(e, next);
        }
    }
    static async createAdminIntegration(req, res, next) {
        try {
            const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
            const projects = await Services_1.PipelinesService.getProjects(authData);
            const integration = req.body;
            if (Array.isArray(projects) && projects.length > 0) {
                const defaultProject = projects.find(({ name }) => name === Constants_1.PIPELINES.DEFAULT_PROJECT_NAME);
                integration.projectId = defaultProject === null || defaultProject === void 0 ? void 0 : defaultProject.id;
            }
            integration.isInternal = true;
            const integrationResponse = await Services_1.PipelinesService.createIntegration(integration, authData);
            JFrogController_1.JFrogController.sendNoCacheResponse(res, { integrationResponse });
        }
        catch (e) {
            return ViewPipelinesController_1.ViewPipelinesController.handleError(e, next);
        }
    }
    static async getAllMasterAdminIntegrations(req, res, next) {
        try {
            const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
            const nodeMetadataMap = await Services_1.PipelinesService.getNodeMetaDataMap(authData);
            const MASTER_INTEGRATIONS_NAMES = Object.keys(nodeMetadataMap.instanceSizesMap);
            const masterIntegrations = await Services_1.PipelinesService.getMasterIntegrations(authData);
            const masterAdminIntegrations = masterIntegrations.filter(({ name, type }) => {
                return MASTER_INTEGRATIONS_NAMES.includes(name) || type === 'scm';
            });
            const masterIntegrationsData = masterAdminIntegrations.map(({ id, name, type, displayName }) => ({
                id,
                name,
                type,
                displayName,
            }));
            JFrogController_1.JFrogController.sendNoCacheResponse(res, masterIntegrationsData);
        }
        catch (e) {
            return ViewPipelinesController_1.ViewPipelinesController.handleError(e, next);
        }
    }
    static async checkIsProjectAdmin(req, res, next) {
        try {
            const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
            const projects = await Services_1.PipelinesService.getProjects(authData);
            let projectId = null;
            if (Array.isArray(projects) && projects.length > 0) {
                const defaultProject = projects.find(({ name }) => name === Constants_1.PIPELINES.DEFAULT_PROJECT_NAME);
                projectId = defaultProject === null || defaultProject === void 0 ? void 0 : defaultProject.id;
            }
            const isProjectAdmin = await Services_1.PipelinesService.checkProjectAdmin(projectId, authData);
            JFrogController_1.JFrogController.sendNoCacheResponse(res, isProjectAdmin);
        }
        catch (e) {
            return ViewPipelinesController_1.ViewPipelinesController.handleError(e, next);
        }
    }
    static async mapAndGetViewNodePools(authData) {
        var _a, _b;
        const nodePoolsCall = Services_1.PipelinesService.getNodePools({}, authData).catch(() => {
            logger.error('failed getting nodePools, return empty array');
            return [];
        });
        const nodesCall = Services_1.PipelinesService.getNodes({}, authData).catch(() => {
            logger.error('failed getting nodePools, return empty array');
            return [];
        });
        const systemCodesCall = Services_1.PipelinesService.getSystemCodes(authData).catch(() => {
            logger.error('failed getting system codes, return empty array');
            return [];
        });
        const [nodePools, nodes, systemCodes] = await Promise.all([nodePoolsCall, nodesCall, systemCodesCall]);
        const processingStatusCode = (_a = systemCodes.find(({ code }) => code === pipelines_nodejs_client_1.STATUS_CODES.PROCESSING.TYPE)) === null || _a === void 0 ? void 0 : _a.code;
        const waitingStatusCode = (_b = systemCodes.find(({ code }) => code === pipelines_nodejs_client_1.STATUS_CODES.WAITING.TYPE)) === null || _b === void 0 ? void 0 : _b.code;
        const viewNodePools = nodePools.map(({ id, name, architecture, operatingSystem: os, isOnDemand, numberOfNodes, projectIntegrationId, projectId }) => {
            const { length: nodesUsed } = nodes.filter(({ nodePoolId }) => nodePoolId === id);
            const { length: processingNodes } = nodes.filter(({ statusCode, nodePoolId }) => ((statusCode === processingStatusCode) || (statusCode === waitingStatusCode)) && (nodePoolId === id));
            return {
                id,
                name,
                architecture,
                os,
                type: isOnDemand ? Constants_1.PIPELINES.DYNAMIC : Constants_1.PIPELINES.STATIC,
                nodesAllocated: numberOfNodes || Constants_1.PIPELINES.NO_LIMIT,
                nodesUsed,
                processingNodes,
                projectIntegrationId,
                projectId,
            };
        });
        return viewNodePools;
    }
}
__decorate([
    LoggerDecorator_1.methodLog({ logger })
], AdminIntegrationsController, "getViewAdminIntegrations", null);
__decorate([
    LoggerDecorator_1.methodLog({ logger })
], AdminIntegrationsController, "getAdminIntegrationById", null);
__decorate([
    LoggerDecorator_1.methodLog({ logger })
], AdminIntegrationsController, "createAdminIntegration", null);
__decorate([
    LoggerDecorator_1.methodLog({ logger })
], AdminIntegrationsController, "getAllMasterAdminIntegrations", null);
__decorate([
    LoggerDecorator_1.methodLog({ logger })
], AdminIntegrationsController, "checkIsProjectAdmin", null);
exports.AdminIntegrationsController = AdminIntegrationsController;


/***/ }),
/* 346 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 347 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ParamValidationErrorInvalidObjectId = void 0;
const ParamValidatonError_1 = __webpack_require__(74);
class ParamValidationErrorInvalidObjectId extends ParamValidatonError_1.ParamValidatonError {
    constructor() {
        super(ParamValidationErrorInvalidObjectId.defaultMessage, ParamValidationErrorInvalidObjectId.defaultMessage);
    }
    static get defaultMessage() {
        return `Invalid param in request url: objectId, objectId must be a string`;
    }
}
exports.ParamValidationErrorInvalidObjectId = ParamValidationErrorInvalidObjectId;


/***/ }),
/* 348 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ParamValidationErrorInvalidType = void 0;
const ParamValidatonError_1 = __webpack_require__(74);
class ParamValidationErrorInvalidType extends ParamValidatonError_1.ParamValidatonError {
    constructor() {
        super(ParamValidationErrorInvalidType.defaultMessage, ParamValidationErrorInvalidType.defaultMessage);
    }
    static get defaultMessage() {
        return `Invalid param in request url: type, type must be a string`;
    }
}
exports.ParamValidationErrorInvalidType = ParamValidationErrorInvalidType;


/***/ }),
/* 349 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ParamValidationErrorInvalidObjectName = void 0;
const ParamValidatonError_1 = __webpack_require__(74);
class ParamValidationErrorInvalidObjectName extends ParamValidatonError_1.ParamValidatonError {
    constructor() {
        super(ParamValidationErrorInvalidObjectName.defaultMessage, ParamValidationErrorInvalidObjectName.defaultMessage);
    }
    static get defaultMessage() {
        return `Invalid param in request url: objectName, objectName must be a string`;
    }
}
exports.ParamValidationErrorInvalidObjectName = ParamValidationErrorInvalidObjectName;


/***/ }),
/* 350 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodePoolsController = void 0;
const LoggerFactory_1 = __webpack_require__(1);
const Services_1 = __webpack_require__(3);
const JFrogController_1 = __webpack_require__(5);
const ViewPipelinesController_1 = __webpack_require__(40);
const express_validator_1 = __webpack_require__(15);
const pipelines_nodejs_client_1 = __webpack_require__(34);
const Decorators_1 = __webpack_require__(2);
const Status_1 = __webpack_require__(351);
const Constants_1 = __webpack_require__(0);
const difference = __webpack_require__(123);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
class NodePoolsController extends JFrogController_1.JFrogController {
    static async getNodeMetaDataMap(req, res, next) {
        try {
            const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
            const nodeMetaDataMap = await Services_1.PipelinesService.getNodeMetaDataMap(authData);
            JFrogController_1.JFrogController.sendNoCacheResponse(res, nodeMetaDataMap);
        }
        catch (e) {
            return ViewPipelinesController_1.ViewPipelinesController.handleError(e, next);
        }
    }
    static async getProjects(req, res, next) {
        try {
            const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
            const projects = await Services_1.PipelinesService.getProjects(authData);
            JFrogController_1.JFrogController.sendNoCacheResponse(res, projects);
        }
        catch (e) {
            return ViewPipelinesController_1.ViewPipelinesController.handleError(e, next);
        }
    }
    static async createNode(req, res, next) {
        try {
            const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
            const projects = await Services_1.PipelinesService.getProjects(authData);
            const nodePool = req.body;
            if (Array.isArray(projects) && projects.length > 0) {
                const defaultProject = projects.find(({ name }) => name === Constants_1.PIPELINES.DEFAULT_PROJECT_NAME);
                nodePool.projectId = defaultProject === null || defaultProject === void 0 ? void 0 : defaultProject.id;
            }
            const createdNode = await Services_1.PipelinesService.createNode(nodePool, authData);
            JFrogController_1.JFrogController.sendNoCacheResponse(res, createdNode);
        }
        catch (e) {
            return ViewPipelinesController_1.ViewPipelinesController.handleError(e, next);
        }
    }
    static async getViewNodePools(req, res, next) {
        try {
            const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
            const viewNodePools = await NodePoolsController.mapAndGetViewNodePools(authData);
            logger.debug(`getViewNodePools call is done, returning ${viewNodePools.length} node pools`);
            JFrogController_1.JFrogController.sendNoCacheResponse(res, viewNodePools);
        }
        catch (e) {
            return ViewPipelinesController_1.ViewPipelinesController.handleError(e, next);
        }
    }
    static async getNodePoolById(req, res, next) {
        var _a, _b;
        try {
            const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
            const nodePoolsCall = Services_1.PipelinesService.getNodePools({
                nodePoolIds: [req.params.id.toString()],
            }, authData).catch(() => {
                logger.error('failed getting nodePools, return empty array');
                return [];
            });
            const nodesCall = Services_1.PipelinesService.getNodes({
                nodePoolIds: [req.params.id.toString()],
            }, authData).catch(() => {
                logger.error('failed getting nodePools, return empty array');
                return [];
            });
            const systemCodesCall = Services_1.PipelinesService.getSystemCodes(authData).catch(() => {
                logger.error('failed getting pipelines system codes, return empty array');
                return [];
            });
            const [apiNodePools, apiNodes, systemCodes] = await Promise.all([nodePoolsCall, nodesCall, systemCodesCall]);
            const mappedNodes = await NodePoolsController.getMappedNode(apiNodes, systemCodes, req);
            const mappedViewNodePool = NodePoolsController.getMappedViewNodePool(apiNodePools, mappedNodes, systemCodes);
            logger.debug(`getNodePoolById call is done, returning ${mappedViewNodePool.nodes.length} nodes, for node pool ID ${req.params.id}`);
            const projects = await Services_1.PipelinesService.getProjects(authData);
            if (Array.isArray(projects) && projects.length > 0) {
                const defaultProject = projects.find(({ name }) => name === Constants_1.PIPELINES.DEFAULT_PROJECT_NAME);
                const isDefaultNodePool = ((_a = defaultProject === null || defaultProject === void 0 ? void 0 : defaultProject.configPropertyBag) === null || _a === void 0 ? void 0 : _a.defaultNodePoolId) === mappedViewNodePool.id;
                mappedViewNodePool.isDefaultNodePool = !!isDefaultNodePool;
            }
            // As we are doing get by param call,
            // it will return array of object which will have the nodepool for the requested Id.
            // it will always return singal object as array of objects
            if (Array.isArray(apiNodePools) && apiNodePools.length > 0) {
                const apiNodePoolId = apiNodePools[0].id;
                if ((_b = mappedViewNodePool === null || mappedViewNodePool === void 0 ? void 0 : mappedViewNodePool.permissions) === null || _b === void 0 ? void 0 : _b.allowAllPipelineSources) {
                    mappedViewNodePool.selectedPipelineSources = [];
                }
                else {
                    mappedViewNodePool.selectedPipelineSources = await NodePoolsController.getSelectedPipelineSources(authData, Constants_1.PIPELINES.NODE_POOL, apiNodePoolId);
                }
            }
            JFrogController_1.JFrogController.sendNoCacheResponse(res, mappedViewNodePool);
        }
        catch (e) {
            return ViewPipelinesController_1.ViewPipelinesController.handleError(e, next);
        }
    }
    static async getViewNode(req, res, next) {
        try {
            const [node, systemCodes] = await NodePoolsController.getViewNodeContextFromRequest(req);
            if (!node.id) {
                return JFrogController_1.JFrogController.sendNoCacheResponse(res, {});
            }
            const viewNode = {
                id: node.id,
                name: node.friendlyName,
                version: node.currentBuildPlaneVersion,
                workload: {
                    stepId: node.stepId,
                },
                nodePoolId: node.nodePoolId,
                createdAt: node.createdAt,
                updatedAt: node.updatedAt,
                lastCheckIn: node.statusLastUpdatedAt,
                lastInitializedAt: node.lastInitializedAt,
                status: Status_1.getStatusText(node.statusCode, systemCodes),
            };
            const mappedViewNode = {
                ...viewNode,
                ipAddress: node.IPAddress,
                sshPort: node.sshPort,
                isSwapSpaceEnabled: node.isSwapEnabled ? Constants_1.PIPELINES.IS_TRUE_TEXT : Constants_1.PIPELINES.IS_FALSE_TEXT,
                initializationMethod: node.isAutoInitialized ? Constants_1.PIPELINES.AUTO_INITIALIZED : Constants_1.PIPELINES.MANUAL_INITIALIZED,
            };
            logger.debug(`getViewNode call is done, returning node for ID: ${req.params.id}`);
            JFrogController_1.JFrogController.sendNoCacheResponse(res, mappedViewNode);
        }
        catch (e) {
            return ViewPipelinesController_1.ViewPipelinesController.handleError(e, next);
        }
    }
    static async deleteNode(req, res, next) {
        try {
            const errors = express_validator_1.validationResult(req);
            if (!errors.isEmpty()) {
                res.status(400).json({ errors: errors.array() });
                return;
            }
            const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
            JFrogController_1.JFrogController.sendNoCacheResponse(res, await Services_1.PipelinesService.deleteNodeById(req.params.id, authData));
        }
        catch (e) {
            return ViewPipelinesController_1.ViewPipelinesController.handleError(e, next);
        }
    }
    static async getNodeById(req, res, next) {
        try {
            const errors = express_validator_1.validationResult(req);
            if (!errors.isEmpty()) {
                res.status(400).json({ errors: errors.array() });
                return;
            }
            const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
            JFrogController_1.JFrogController.sendNoCacheResponse(res, await Services_1.PipelinesService.getNodeById(req.params.id, authData));
        }
        catch (e) {
            return ViewPipelinesController_1.ViewPipelinesController.handleError(e, next);
        }
    }
    static async getNodeInitScriptById(req, res, next) {
        try {
            const errors = express_validator_1.validationResult(req);
            if (!errors.isEmpty()) {
                res.status(400).json({ errors: errors.array() });
                return;
            }
            const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
            const id = req.params.id;
            res.setHeader('Content-type', 'application/octet-stream');
            if (req.query.isWindowsOS) {
                res.setHeader('Content-disposition', `attachment; filename=${Constants_1.PIPELINES.NODE_INIT_SCRIPT_FILE_NAME}${id}.ps1;`);
            }
            else {
                res.setHeader('Content-disposition', `attachment; filename=${Constants_1.PIPELINES.NODE_INIT_SCRIPT_FILE_NAME}${id}.sh;`);
            }
            const response = await Services_1.PipelinesService.getNodeInitScriptById(id, authData);
            response.pipe(res);
        }
        catch (e) {
            return ViewPipelinesController_1.ViewPipelinesController.handleError(e, next);
        }
    }
    static async updateNode(req, res, next) {
        try {
            const errors = express_validator_1.validationResult(req);
            if (!errors.isEmpty()) {
                res.status(400).json({ errors: errors.array() });
                return;
            }
            const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
            const id = req.params.id;
            JFrogController_1.JFrogController.sendNoCacheResponse(res, await Services_1.PipelinesService.updateNodeById(id, req.body, authData));
        }
        catch (e) {
            return ViewPipelinesController_1.ViewPipelinesController.handleError(e, next);
        }
    }
    static async getNodeConsoles(req, res, next) {
        try {
            const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
            const nodeConsoles = await Services_1.PipelinesService.getNodeConsolesByNodeId(req.params.id, authData).catch(() => {
                logger.error('failed getting node consoles, return empty object');
                return {};
            });
            logger.debug(`getNodeConsoles call is done, returning consoles for node ID: ${req.params.id}`);
            JFrogController_1.JFrogController.sendNoCacheResponse(res, nodeConsoles);
        }
        catch (e) {
            return ViewPipelinesController_1.ViewPipelinesController.handleError(e, next);
        }
    }
    static async getBuildPlaneImages(req, res, next) {
        try {
            const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
            JFrogController_1.JFrogController.sendNoCacheResponse(res, await Services_1.PipelinesService.getBuildPlaneImages(authData));
        }
        catch (e) {
            return ViewPipelinesController_1.ViewPipelinesController.handleError(e, next);
        }
    }
    static async getNodeStats(req, res, next) {
        try {
            const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
            const nodeStats = await Services_1.PipelinesService.getNodeStats({
                nodeIds: [req.params.id],
                limit: Constants_1.PIPELINES.NODE_STATS_LIMIT,
            }, authData);
            logger.debug(`getNodeStats call is done, returning ${nodeStats.length} stats for node ID: ${req.params.id}`);
            JFrogController_1.JFrogController.sendNoCacheResponse(res, nodeStats);
        }
        catch (e) {
            return ViewPipelinesController_1.ViewPipelinesController.handleError(e, next);
        }
    }
    static async createNodePool(req, res, next) {
        try {
            const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
            const projects = await Services_1.PipelinesService.getProjects(authData);
            const nodePool = req.body;
            let permissionsResponse;
            // As we getProjects call will return array of project,
            // currentlty we are having only 1 project per license. so it will always having single object.
            if (Array.isArray(projects) && projects.length > 0) {
                const defaultProject = projects.find(({ name }) => name === Constants_1.PIPELINES.DEFAULT_PROJECT_NAME);
                nodePool.projectId = defaultProject === null || defaultProject === void 0 ? void 0 : defaultProject.id;
            }
            const nodePoolResponse = await Services_1.PipelinesService.createNodePool(nodePool, authData);
            if (nodePool.isDefaultNodePool) {
                await NodePoolsController.updateDefaultNodePoolId(authData, nodePool.projectId, nodePoolResponse.id);
            }
            const isNotAllowAllPipelineSources = nodePool.permissions && !nodePool.permissions.allowAllPipelineSources && nodePool.selectedPipelineSources;
            if (isNotAllowAllPipelineSources) {
                const objectType = Constants_1.PIPELINES.NODE_POOL;
                if (nodePool.isByPattern) {
                    permissionsResponse = await NodePoolsController.validatePipelineSourceObjectPermissions(authData, nodePoolResponse.id, objectType, nodePool);
                }
                else {
                    permissionsResponse = await NodePoolsController.createPipelineSourceObjectPermissions(authData, nodePool.selectedPipelineSources, objectType, nodePoolResponse.id);
                }
            }
            JFrogController_1.JFrogController.sendNoCacheResponse(res, { nodePoolResponse, permissionsResponse });
        }
        catch (e) {
            return ViewPipelinesController_1.ViewPipelinesController.handleError(e, next);
        }
    }
    static async updateNodePool(req, res, next) {
        var _a;
        try {
            const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
            const nodePool = req.body;
            let permissionsResponse;
            let shouldUpdateDefaultNodePoolId = false;
            const nodePoolResponse = await Services_1.PipelinesService.updateNodePool(req.params.id, nodePool, authData);
            if (nodePool.isDefaultNodePool) {
                shouldUpdateDefaultNodePoolId = true;
            }
            else {
                const projects = await Services_1.PipelinesService.getProjects(authData);
                if (Array.isArray(projects) && projects.length > 0) {
                    const defaultProject = projects.find(({ name }) => name === Constants_1.PIPELINES.DEFAULT_PROJECT_NAME);
                    shouldUpdateDefaultNodePoolId =
                        ((_a = defaultProject === null || defaultProject === void 0 ? void 0 : defaultProject.configPropertyBag) === null || _a === void 0 ? void 0 : _a.defaultNodePoolId) === parseInt(req.params.id, Constants_1.GENERAL.DECIMAL);
                }
            }
            if (shouldUpdateDefaultNodePoolId) {
                const nodePoolId = nodePool.isDefaultNodePool ? nodePoolResponse.id : null;
                await NodePoolsController.updateDefaultNodePoolId(authData, nodePoolResponse.projectId, nodePoolId);
            }
            const isByPattern = nodePool.permissions && (nodePool.permissions.includePatterns || nodePool.permissions.excludePatterns) &&
                nodePool.selectedPipelineSources;
            if (nodePool.permissions && nodePool.permissions.allowAllPipelineSources === false) {
                if (nodePool.isByPattern) {
                    permissionsResponse = await NodePoolsController.validatePipelineSourceObjectPermissions(authData, nodePool.id, Constants_1.PIPELINES.NODE_POOL, nodePool);
                }
                else {
                    permissionsResponse = await NodePoolsController.modifyPipelineSourceObjectPermissions(authData, nodePool.id, Constants_1.PIPELINES.NODE_POOL, nodePool.selectedPipelineSources);
                }
            }
            JFrogController_1.JFrogController.sendNoCacheResponse(res, { nodePoolResponse, permissionsResponse });
        }
        catch (e) {
            return ViewPipelinesController_1.ViewPipelinesController.handleError(e, next);
        }
    }
    static async deleteNodePool(req, res, next) {
        try {
            const errors = express_validator_1.validationResult(req);
            if (!errors.isEmpty()) {
                res.status(400).json({ errors: errors.array() });
                return;
            }
            const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
            const id = req.params.id;
            const response = await Services_1.PipelinesService.deleteNodePool(id, authData);
            JFrogController_1.JFrogController.sendNoCacheResponse(res, response || { id });
        }
        catch (e) {
            return ViewPipelinesController_1.ViewPipelinesController.handleError(e, next);
        }
    }
    static async mapAndGetViewNodePools(authData) {
        var _a, _b;
        const nodePoolsCall = Services_1.PipelinesService.getNodePools({}, authData).catch(() => {
            logger.error('failed getting nodePools, return empty array');
            return [];
        });
        const nodesCall = Services_1.PipelinesService.getNodes({}, authData).catch(() => {
            logger.error('failed getting nodePools, return empty array');
            return [];
        });
        const systemCodesCall = Services_1.PipelinesService.getSystemCodes(authData).catch(() => {
            logger.error('failed getting system codes, return empty array');
            return [];
        });
        const projectsCall = await Services_1.PipelinesService.getProjects(authData);
        const [nodePools, nodes, projects, systemCodes] = await Promise.all([
            nodePoolsCall,
            nodesCall,
            projectsCall,
            systemCodesCall
        ]);
        const processingStatusCode = (_a = systemCodes.find(({ code }) => code === pipelines_nodejs_client_1.STATUS_CODES.PROCESSING.TYPE)) === null || _a === void 0 ? void 0 : _a.code;
        const waitingStatusCode = (_b = systemCodes.find(({ code }) => code === pipelines_nodejs_client_1.STATUS_CODES.WAITING.TYPE)) === null || _b === void 0 ? void 0 : _b.code;
        const viewNodePools = nodePools.map(({ id, name, architecture, operatingSystem: os, isOnDemand, numberOfNodes, projectIntegrationId, projectId }) => {
            var _a;
            const { length: nodesUsed } = nodes.filter(({ nodePoolId }) => nodePoolId === id);
            const { length: processingNodes } = nodes.filter(({ statusCode, nodePoolId }) => ((statusCode === processingStatusCode) || (statusCode === waitingStatusCode)) && (nodePoolId === id));
            let isDefaultNodePool;
            if (Array.isArray(projects) && projects.length > 0) {
                const defaultProject = projects.find(({ name }) => name === Constants_1.PIPELINES.DEFAULT_PROJECT_NAME);
                const isDefault = ((_a = defaultProject === null || defaultProject === void 0 ? void 0 : defaultProject.configPropertyBag) === null || _a === void 0 ? void 0 : _a.defaultNodePoolId) === id;
                isDefaultNodePool = !!isDefault;
            }
            return {
                id,
                name,
                architecture,
                os,
                type: isOnDemand ? Constants_1.PIPELINES.DYNAMIC : Constants_1.PIPELINES.STATIC,
                nodesAllocated: numberOfNodes || Constants_1.PIPELINES.NO_LIMIT,
                nodesUsed,
                processingNodes,
                projectId,
                projectIntegrationId,
                isDefaultNodePool,
            };
        });
        return viewNodePools;
    }
    static async getViewNodeContextFromRequest(req) {
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        const nodeCall = Services_1.PipelinesService.getNodeById(req.params.id, authData).catch(() => {
            logger.error('failed getting nodeById, return empty object');
            return {};
        });
        const systemCodesCall = Services_1.PipelinesService.getSystemCodes(authData).catch(() => {
            logger.error('failed getting pipelines system codes, return empty array');
            return [];
        });
        return await Promise.all([nodeCall, systemCodesCall]);
    }
    static async getMappedNode(apiNodes, systemCodes, req) {
        const stepIds = apiNodes.filter(({ stepId }) => stepId !== null).map(({ stepId }) => stepId.toString());
        let workload;
        if (stepIds && stepIds.length) {
            workload = await NodePoolsController.getWorkload(stepIds, req);
        }
        const nodes = apiNodes.map(({ id, friendlyName: name, stepId, currentBuildPlaneVersion: version, createdAt, updatedAt, statusLastUpdatedAt: lastCheckIn, lastInitializedAt, statusCode, nodePoolId, }) => {
            let step;
            let run;
            let pipeline;
            if (stepId) {
                step = Object.values(workload.steps).find(({ id }) => id === stepId);
                run = Object.values(workload.runs).find(({ id }) => id === step.runId);
                pipeline = Object.values(workload.pipelines).find(({ id }) => id === step.pipelineId);
            }
            return {
                id,
                name,
                version,
                workload: {
                    stepId,
                    stepName: step && step.name,
                    runNumber: run && run.runNumber,
                    pipelineId: run && run.pipelineId,
                    pipelineName: pipeline && pipeline.name,
                    pipelineSourceBranch: pipeline && pipeline.pipelineSourceBranch,
                },
                nodePoolId,
                createdAt,
                updatedAt,
                lastCheckIn,
                lastInitializedAt,
                status: Status_1.getStatusText(statusCode, systemCodes),
            };
        });
        return nodes;
    }
    static async getWorkload(stepIds, req) {
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        const steps = await Services_1.PipelinesService.getSteps({ stepIds }, authData).catch(() => {
            logger.error('failed getting steps, return empty array');
            return [];
        });
        const runIds = steps.filter(({ runId }) => runId !== null).map(({ runId }) => runId.toString());
        const pipelineIds = steps
            .filter(({ pipelineId }) => pipelineId !== null)
            .map(({ pipelineId }) => pipelineId.toString());
        const runsCall = Services_1.PipelinesService.getRuns({
            runIds,
            light: true,
        }, authData).catch(() => {
            logger.error('failed getting runs, return empty array');
            return [];
        });
        const pipelinesCall = Services_1.PipelinesService.getPipelines({
            pipelineIds,
            light: true,
        }, authData);
        const [runs, pipelines] = await Promise.all([runsCall, pipelinesCall]);
        return {
            steps,
            runs,
            pipelines,
        };
    }
    static getMappedViewNodePool(apiNodePools, mappedNodes, systemCodes) {
        var _a, _b;
        const processingStatusCode = (_a = systemCodes.find(({ code }) => code === pipelines_nodejs_client_1.STATUS_CODES.PROCESSING.TYPE)) === null || _a === void 0 ? void 0 : _a.code;
        const waitingStatusCode = (_b = systemCodes.find(({ code }) => code === pipelines_nodejs_client_1.STATUS_CODES.WAITING.TYPE)) === null || _b === void 0 ? void 0 : _b.code;
        const viewNodePools = apiNodePools.map(({ id, name, architecture, operatingSystem: os, isOnDemand, numberOfNodes, permissions, maxDiskUsagePercentage, timeoutMS, diskSizeinGB, nodeIdleIntervalInMins, cacheSettingsPropertyBag, providerMetadataPropertyBag, initPropertyBag, buildPlaneImageId, projectIntegrationId, isCacheEnabled, projectId, }) => {
            const { length: nodesUsed } = mappedNodes.filter(({ nodePoolId }) => nodePoolId === id);
            const { length: processingNodes } = mappedNodes.filter(({ statusCode, nodePoolId }) => ((statusCode === processingStatusCode) || (statusCode === waitingStatusCode)) && (nodePoolId === id));
            return {
                id,
                name,
                architecture,
                os,
                type: isOnDemand ? Constants_1.PIPELINES.DYNAMIC : Constants_1.PIPELINES.STATIC,
                nodesAllocated: numberOfNodes || Constants_1.PIPELINES.NO_LIMIT,
                nodesUsed,
                processingNodes,
                projectId,
                permissions,
                maxDiskUsagePercentage,
                timeoutMS,
                diskSizeinGB,
                nodeIdleIntervalInMins,
                cacheSettingsPropertyBag,
                providerMetadataPropertyBag,
                initPropertyBag,
                projectIntegrationId,
                buildPlaneImageId,
                isCacheEnabled,
            };
        });
        const viewNodePool = viewNodePools[0];
        const nodes = mappedNodes;
        return {
            ...viewNodePool,
            nodes,
        };
    }
    static async updateDefaultNodePoolId(authData, projectId, nodePoolId) {
        const reqBody = {
            configPropertyBag: {
                defaultNodePoolId: nodePoolId,
            },
        };
        return await Services_1.PipelinesService.updateProject(projectId, reqBody, authData);
    }
    static async createPipelineSourceObjectPermissions(authData, selectedPipelineSourcesIds, objectType, objectId) {
        const pipelineSourceObjectPermissionsObject = {
            objectType,
            objectId: objectId.toString(),
            pipelineSourceId: null,
        };
        const response = [];
        for (const updatedPipelineSourcesId of selectedPipelineSourcesIds) {
            pipelineSourceObjectPermissionsObject.pipelineSourceId = updatedPipelineSourcesId;
            const permissionsCreateResponse = await Services_1.PipelinesService.postPipelineSourceObjectPermissions(pipelineSourceObjectPermissionsObject, authData);
            response.push(permissionsCreateResponse);
        }
        return response;
    }
    static async validatePipelineSourceObjectPermissions(authData, objectId, objectType, nodePool) {
        const response = [];
        const fetchedPipelineSourceObjectPermissions = await Services_1.PipelinesService.getPipelineSourceObjectPermissions({
            objectIds: [objectId.toString()],
            objectTypes: [objectType],
        }, authData);
        if (nodePool.pipelineSourcesToCreate) {
            const permissionsCreateResponse = await NodePoolsController.createPipelineSourceObjectPermissions(authData, nodePool.pipelineSourcesToCreate, objectType, objectId);
            response.push(permissionsCreateResponse);
        }
        if (nodePool.pipelineSourcesToDelete) {
            const permissionsDeleteResponse = await NodePoolsController.deletePipelineSourceObjectPermissions(authData, nodePool.pipelineSourcesToDelete, fetchedPipelineSourceObjectPermissions);
            response.push(permissionsDeleteResponse);
        }
        return response;
    }
    static async modifyPipelineSourceObjectPermissions(authData, objectId, objectType, selectedPipelineSourcesIds) {
        const response = [];
        const fetchedPipelineSourceObjectPermissions = await Services_1.PipelinesService.getPipelineSourceObjectPermissions({
            objectIds: [objectId.toString()],
            objectTypes: [objectType],
        }, authData);
        const existingPipelineSourcesIds = fetchedPipelineSourceObjectPermissions.map((obj) => obj.pipelineSourceId);
        const pipelineSourceObjectPermissionsToDelete = difference(existingPipelineSourcesIds, selectedPipelineSourcesIds);
        const pipelineSourceObjectPermissionsToCreate = difference(selectedPipelineSourcesIds, existingPipelineSourcesIds);
        if (pipelineSourceObjectPermissionsToCreate) {
            const permissionsCreateResponse = await NodePoolsController.createPipelineSourceObjectPermissions(authData, pipelineSourceObjectPermissionsToCreate, objectType, objectId);
            response.push(permissionsCreateResponse);
        }
        if (pipelineSourceObjectPermissionsToDelete) {
            const permissionsDeleteResponse = await NodePoolsController.deletePipelineSourceObjectPermissions(authData, pipelineSourceObjectPermissionsToDelete, fetchedPipelineSourceObjectPermissions);
            response.push(permissionsDeleteResponse);
        }
        return response;
    }
    static async deletePipelineSourceObjectPermissions(authData, existingPipelineSourcesIds, fetchedPipelineSourceObjectPermissions) {
        const response = [];
        for (const existingPipelineSourcesId of existingPipelineSourcesIds) {
            const permissionObject = fetchedPipelineSourceObjectPermissions.find(({ pipelineSourceId }) => pipelineSourceId === existingPipelineSourcesId);
            const permissionsDeleteResponse = await Services_1.PipelinesService.deletePipelineSourceObjectPermissionsById(permissionObject.id.toString(), authData);
            response.push(permissionsDeleteResponse);
        }
        return response;
    }
    static async getSelectedPipelineSources(authData, objectType, objectId) {
        const pipelineSourceObjectPermissions = await Services_1.PipelinesService.getPipelineSourceObjectPermissions({
            objectIds: [objectId.toString()],
            objectTypes: [objectType],
        }, authData);
        const pipelineSources = await Services_1.PipelinesService.getSources({}, authData);
        return pipelineSourceObjectPermissions
            .filter((item) => item.objectId === objectId)
            .map((item) => pipelineSources.find(({ id }) => id === item.pipelineSourceId))
            .filter((item) => item !== undefined);
    }
}
__decorate([
    Decorators_1.methodLog({ logger })
], NodePoolsController, "getNodeMetaDataMap", null);
__decorate([
    Decorators_1.methodLog({ logger })
], NodePoolsController, "getProjects", null);
__decorate([
    Decorators_1.methodLog({ logger })
], NodePoolsController, "createNode", null);
__decorate([
    Decorators_1.methodLog({ logger })
], NodePoolsController, "getViewNodePools", null);
__decorate([
    Decorators_1.methodLog({ logger })
], NodePoolsController, "getNodePoolById", null);
__decorate([
    Decorators_1.methodLog({ logger })
], NodePoolsController, "getViewNode", null);
__decorate([
    Decorators_1.methodLog({ logger })
], NodePoolsController, "deleteNode", null);
__decorate([
    Decorators_1.methodLog({ logger })
], NodePoolsController, "getNodeById", null);
__decorate([
    Decorators_1.methodLog({ logger })
], NodePoolsController, "getNodeInitScriptById", null);
__decorate([
    Decorators_1.methodLog({ logger })
], NodePoolsController, "updateNode", null);
__decorate([
    Decorators_1.methodLog({ logger })
], NodePoolsController, "getNodeConsoles", null);
__decorate([
    Decorators_1.methodLog({ logger })
], NodePoolsController, "getNodeStats", null);
__decorate([
    Decorators_1.methodLog({ logger })
], NodePoolsController, "createNodePool", null);
__decorate([
    Decorators_1.methodLog({ logger })
], NodePoolsController, "updateNodePool", null);
__decorate([
    Decorators_1.methodLog({ logger })
], NodePoolsController, "deleteNodePool", null);
exports.NodePoolsController = NodePoolsController;


/***/ }),
/* 351 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getStatusText = void 0;
const pipelines_nodejs_client_1 = __webpack_require__(34);
function getStatusText(statusCode, systemCodes) {
    const systemCode = systemCodes.find(({ code }) => code === statusCode);
    let statusText = systemCode ? systemCode.name.toString() : '';
    if (statusText === pipelines_nodejs_client_1.STATUS_CODES.READY.NAME) {
        statusText = pipelines_nodejs_client_1.STATUS_CODES.WAITING.NAME;
    }
    return statusText;
}
exports.getStatusText = getStatusText;


/***/ }),
/* 352 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewIntegrationsController = void 0;
const LoggerFactory_1 = __webpack_require__(1);
const Services_1 = __webpack_require__(3);
const JFrogController_1 = __webpack_require__(5);
const ViewPipelinesController_1 = __webpack_require__(40);
const express_validator_1 = __webpack_require__(15);
const LoggerDecorator_1 = __webpack_require__(17);
const Constants_1 = __webpack_require__(0);
const difference = __webpack_require__(123);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
class ViewIntegrationsController extends JFrogController_1.JFrogController {
    static async getViewIntegrations(req, res, next) {
        try {
            const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
            const masterIntegrationsCall = Services_1.PipelinesService.getMasterIntegrations(authData);
            const integrationsCall = Services_1.PipelinesService.getIntegrations(authData);
            const [masterIntegrations, integrations] = await Promise.all([masterIntegrationsCall, integrationsCall]);
            let viewIntegrationsData = [];
            if (integrations.length > 0) {
                viewIntegrationsData = integrations
                    .filter((integration) => !integration['isInternal'])
                    .map((integration) => {
                    const masterInt = masterIntegrations.find(({ id: integrationId }) => integrationId === integration.masterIntegrationId);
                    const type = masterInt && masterInt.displayName;
                    const { id, name, createdByUserName, updatedByUserName, updatedAt, projectId } = integration;
                    return { id, name, type, createdByUserName, updatedByUserName, updatedAt, projectId };
                });
            }
            JFrogController_1.JFrogController.sendNoCacheResponse(res, viewIntegrationsData);
        }
        catch (e) {
            return ViewPipelinesController_1.ViewPipelinesController.handleError(e, next);
        }
    }
    static async getProjects(req, res, next) {
        try {
            const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
            const projects = await Services_1.PipelinesService.getProjects(authData);
            JFrogController_1.JFrogController.sendNoCacheResponse(res, projects);
        }
        catch (e) {
            return ViewPipelinesController_1.ViewPipelinesController.handleError(e, next);
        }
    }
    static async getIntegrationById(req, res, next) {
        var _a;
        try {
            const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
            const integration = await Services_1.PipelinesService.getIntegrationById(req.params.id, authData);
            if ((_a = integration === null || integration === void 0 ? void 0 : integration.permissions) === null || _a === void 0 ? void 0 : _a.allowAllPipelineSources) {
                integration.selectedPipelineSources = [];
            }
            else {
                integration.selectedPipelineSources = await ViewIntegrationsController.getSelectedPipelineSources(authData, Constants_1.PIPELINES.PROJECT_INTEGRATION, integration.id);
            }
            JFrogController_1.JFrogController.sendNoCacheResponse(res, integration);
        }
        catch (e) {
            return ViewPipelinesController_1.ViewPipelinesController.handleError(e, next);
        }
    }
    static async createIntegration(req, res, next) {
        try {
            const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
            const projects = await Services_1.PipelinesService.getProjects(authData);
            const integration = req.body;
            if (Array.isArray(projects) && projects.length > 0) {
                const defaultProject = projects.find(({ name }) => name === Constants_1.PIPELINES.DEFAULT_PROJECT_NAME);
                integration.projectId = defaultProject === null || defaultProject === void 0 ? void 0 : defaultProject.id;
            }
            const integrationResponse = await Services_1.PipelinesService.createIntegration(integration, authData);
            let permissionsResponse;
            const isNotAllowAllPipelineSources = integration.permissions &&
                !integration.permissions.allowAllPipelineSources &&
                integration.selectedPipelineSources;
            if (isNotAllowAllPipelineSources) {
                const objectType = Constants_1.PIPELINES.PROJECT_INTEGRATION;
                if (integration.isByPattern) {
                    permissionsResponse = await ViewIntegrationsController.validatePipelineSourceObjectPermissions(authData, integrationResponse.id, Constants_1.PIPELINES.PROJECT_INTEGRATION, integration);
                }
                else {
                    permissionsResponse = await ViewIntegrationsController.createPipelineSourceObjectPermissions(authData, integration.selectedPipelineSources, objectType, integrationResponse.id);
                }
            }
            JFrogController_1.JFrogController.sendNoCacheResponse(res, { integrationResponse, permissionsResponse });
        }
        catch (e) {
            return ViewPipelinesController_1.ViewPipelinesController.handleError(e, next);
        }
    }
    static async updateIntegration(req, res, next) {
        try {
            const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
            const integration = req.body;
            const integrationResponse = await Services_1.PipelinesService.updateIntegration(req.params.id, integration, authData);
            let permissionsResponse = [];
            if (integration.permissions && integration.permissions.allowAllPipelineSources === false) {
                if (integration.isByPattern) {
                    permissionsResponse = await ViewIntegrationsController.validatePipelineSourceObjectPermissions(authData, integration.id, Constants_1.PIPELINES.PROJECT_INTEGRATION, integration);
                }
                else {
                    permissionsResponse = await ViewIntegrationsController.modifyPipelineSourceObjectPermissions(authData, integration.id, Constants_1.PIPELINES.PROJECT_INTEGRATION, integration.selectedPipelineSources);
                }
            }
            JFrogController_1.JFrogController.sendNoCacheResponse(res, { integrationResponse, permissionsResponse });
        }
        catch (e) {
            return ViewPipelinesController_1.ViewPipelinesController.handleError(e, next);
        }
    }
    static async deleteIntegration(req, res, next) {
        try {
            const errors = express_validator_1.validationResult(req);
            if (!errors.isEmpty()) {
                res.status(400).json({ errors: errors.array() });
                return;
            }
            const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
            const id = req.params.id;
            const response = await Services_1.PipelinesService.deleteIntegration(id, authData);
            JFrogController_1.JFrogController.sendNoCacheResponse(res, response || { id });
        }
        catch (e) {
            return ViewPipelinesController_1.ViewPipelinesController.handleError(e, next);
        }
    }
    static async getAllMasterIntegrations(req, res, next) {
        try {
            const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
            const masterIntegrations = await Services_1.PipelinesService.getMasterIntegrations(authData);
            const masterIntegrationsData = masterIntegrations
                .map(({ id, name, type, displayName, isEnabled }) => ({
                id,
                name,
                type,
                displayName,
                isEnabled,
            }));
            JFrogController_1.JFrogController.sendNoCacheResponse(res, masterIntegrationsData);
        }
        catch (e) {
            return ViewPipelinesController_1.ViewPipelinesController.handleError(e, next);
        }
    }
    static async modifyPipelineSourceObjectPermissions(authData, objectId, objectType, selectedPipelineSourcesIds) {
        const response = [];
        const fetchedPipelineSourceObjectPermissions = await Services_1.PipelinesService.getPipelineSourceObjectPermissions({
            objectIds: [objectId.toString()],
            objectTypes: [objectType],
        }, authData);
        const existingPipelineSourcesIds = fetchedPipelineSourceObjectPermissions.map((obj) => obj.pipelineSourceId);
        const pipelineSourceObjectPermissionsToDelete = difference(existingPipelineSourcesIds, selectedPipelineSourcesIds);
        const pipelineSourceObjectPermissionsToCreate = difference(selectedPipelineSourcesIds, existingPipelineSourcesIds);
        if (pipelineSourceObjectPermissionsToCreate) {
            const permissionsCreateResponse = await ViewIntegrationsController.createPipelineSourceObjectPermissions(authData, pipelineSourceObjectPermissionsToCreate, objectType, objectId);
            response.push(permissionsCreateResponse);
        }
        if (pipelineSourceObjectPermissionsToDelete) {
            const permissionsDeleteResponse = await ViewIntegrationsController.deletePipelineSourceObjectPermissions(authData, pipelineSourceObjectPermissionsToDelete, fetchedPipelineSourceObjectPermissions);
            response.push(permissionsDeleteResponse);
        }
        return response;
    }
    static async validatePipelineSourceObjectPermissions(authData, objectId, objectType, integration) {
        const response = [];
        const fetchedPipelineSourceObjectPermissions = await Services_1.PipelinesService.getPipelineSourceObjectPermissions({
            objectIds: [objectId.toString()],
            objectTypes: [objectType],
        }, authData);
        if (integration.pipelineSourcesToCreate) {
            const permissionsCreateResponse = await ViewIntegrationsController.createPipelineSourceObjectPermissions(authData, integration.pipelineSourcesToCreate, objectType, objectId);
            response.push(permissionsCreateResponse);
        }
        if (integration.pipelineSourcesToDelete) {
            const permissionsDeleteResponse = await ViewIntegrationsController.deletePipelineSourceObjectPermissions(authData, integration.pipelineSourcesToDelete, fetchedPipelineSourceObjectPermissions);
            response.push(permissionsDeleteResponse);
        }
        return response;
    }
    static async createPipelineSourceObjectPermissions(authData, selectedPipelineSourcesIds, objectType, objectId) {
        const pipelineSourceObjectPermissionsObject = {
            objectType,
            objectId: objectId.toString(),
            pipelineSourceId: null,
        };
        const response = [];
        for (const updatedPipelineSourcesId of selectedPipelineSourcesIds) {
            pipelineSourceObjectPermissionsObject.pipelineSourceId = updatedPipelineSourcesId;
            const permissionsCreateResponse = await Services_1.PipelinesService.postPipelineSourceObjectPermissions(pipelineSourceObjectPermissionsObject, authData);
            response.push(permissionsCreateResponse);
        }
        return response;
    }
    static async deletePipelineSourceObjectPermissions(authData, existingPipelineSourcesIds, fetchedPipelineSourceObjectPermissions) {
        const response = [];
        for (const existingPipelineSourcesId of existingPipelineSourcesIds) {
            const permissionObject = fetchedPipelineSourceObjectPermissions.find(({ pipelineSourceId }) => pipelineSourceId === existingPipelineSourcesId);
            const permissionsDeleteResponse = await Services_1.PipelinesService.deletePipelineSourceObjectPermissionsById(permissionObject.id.toString(), authData);
            response.push(permissionsDeleteResponse);
        }
        return response;
    }
    static async getSelectedPipelineSources(authData, objectType, objectId) {
        const pipelineSourceObjectPermissions = await Services_1.PipelinesService.getPipelineSourceObjectPermissions({
            objectIds: [objectId.toString()],
            objectTypes: [objectType],
        }, authData);
        const pipelineSources = await Services_1.PipelinesService.getSources({}, authData);
        const selectedPipelineSources = pipelineSourceObjectPermissions
            .filter((item) => item.objectId === objectId)
            .map((item) => pipelineSources.find(({ id }) => id === item.pipelineSourceId))
            .filter((item) => item !== undefined);
        return selectedPipelineSources;
    }
}
__decorate([
    LoggerDecorator_1.methodLog({ logger })
], ViewIntegrationsController, "getViewIntegrations", null);
__decorate([
    LoggerDecorator_1.methodLog({ logger })
], ViewIntegrationsController, "getProjects", null);
__decorate([
    LoggerDecorator_1.methodLog({ logger })
], ViewIntegrationsController, "getIntegrationById", null);
__decorate([
    LoggerDecorator_1.methodLog({ logger })
], ViewIntegrationsController, "createIntegration", null);
__decorate([
    LoggerDecorator_1.methodLog({ logger })
], ViewIntegrationsController, "updateIntegration", null);
__decorate([
    LoggerDecorator_1.methodLog({ logger })
], ViewIntegrationsController, "deleteIntegration", null);
__decorate([
    LoggerDecorator_1.methodLog({ logger })
], ViewIntegrationsController, "getAllMasterIntegrations", null);
exports.ViewIntegrationsController = ViewIntegrationsController;


/***/ }),
/* 353 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewSourcesController = void 0;
const LoggerFactory_1 = __webpack_require__(1);
const Services_1 = __webpack_require__(3);
const JFrogController_1 = __webpack_require__(5);
const ViewPipelinesController_1 = __webpack_require__(40);
const Constants_1 = __webpack_require__(0);
const API_1 = __webpack_require__(7);
const LoggerDecorator_1 = __webpack_require__(17);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
class ViewSourcesController extends JFrogController_1.JFrogController {
    static async getSources(req, res, next) {
        if (!ViewSourcesController.validateQueryParams(req, res)) {
            return;
        }
        const { includeNamesPattern, excludeNamesPattern } = req.query;
        try {
            const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
            const response = await Services_1.PipelinesService.getSources({
                includeNamesPattern,
                excludeNamesPattern,
            }, authData);
            JFrogController_1.JFrogController.sendNoCacheResponse(res, response);
        }
        catch (e) {
            return ViewPipelinesController_1.ViewPipelinesController.handleError(e, next);
        }
    }
    static async getViewPipelineSources(req, res, next) {
        try {
            const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
            const [pipelineSources, integrations, systemCodes] = await ViewSourcesController.fetchBasicPipelineSourcesData(authData);
            const pipelineSourceIds = pipelineSources.map((source) => source.id.toString());
            let apiSyncStatuses = [];
            let currentFetchedSyncStatuses = [];
            let isFetchAttempted = false;
            let pageCount = 0;
            while (currentFetchedSyncStatuses.length === Constants_1.PIPELINES.SYNC_STATUSES_CALL_LIMIT || !isFetchAttempted) {
                isFetchAttempted = true;
                currentFetchedSyncStatuses = await Services_1.PipelinesService.getPipelineSyncStatuses({
                    pipelineSourceIds,
                    light: true,
                    limit: Constants_1.PIPELINES.SYNC_STATUSES_CALL_LIMIT,
                    skip: pageCount * Constants_1.PIPELINES.SYNC_STATUSES_CALL_LIMIT
                }, authData).catch(() => {
                    logger.error('failed getting pipelineSyncStatuses, return empty array');
                    return [];
                });
                apiSyncStatuses = apiSyncStatuses.concat(currentFetchedSyncStatuses);
                pageCount++;
            }
            const resourceVersionIds = apiSyncStatuses
                .map(({ triggeredByResourceVersionId }) => triggeredByResourceVersionId === null || triggeredByResourceVersionId === void 0 ? void 0 : triggeredByResourceVersionId.toString())
                .filter(Boolean);
            const resourceVersions = await ViewSourcesController.fetchResourceVersions(resourceVersionIds, authData);
            const viewPipelineSources = ViewSourcesController.mapViewPipelineSource(pipelineSources, systemCodes, integrations, apiSyncStatuses, resourceVersions);
            JFrogController_1.JFrogController.sendNoCacheResponse(res, viewPipelineSources);
        }
        catch (e) {
            return ViewPipelinesController_1.ViewPipelinesController.handleError(e, next);
        }
    }
    static async fetchResourceVersions(resourceVersionIds, authData) {
        let apiResourceVersions = [];
        let currentFetchedResourceVersions = [];
        let resourceVersionBatches = [];
        var batchCount = 0;
        while (batchCount < resourceVersionIds.length) {
            resourceVersionBatches.push(resourceVersionIds.slice(batchCount, batchCount + Constants_1.PIPELINES.RESOURCE_VERSIONS_CALL_LIMIT));
            batchCount += Constants_1.PIPELINES.RESOURCE_VERSIONS_CALL_LIMIT;
        }
        for (const batchIds of resourceVersionBatches) {
            currentFetchedResourceVersions = await Services_1.PipelinesService.getResourceVersions({
                resourceVersionIds: batchIds,
                limit: Constants_1.PIPELINES.RESOURCE_VERSIONS_CALL_LIMIT,
            }, authData).catch(() => {
                logger.error('failed getting resourceVersions, return empty array');
                return [];
            });
            apiResourceVersions = apiResourceVersions.concat(currentFetchedResourceVersions);
        }
        return apiResourceVersions;
    }
    static async syncPipelineSource(req, res, next) {
        try {
            const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
            const sync = true;
            const branch = req.query.branch;
            JFrogController_1.JFrogController.sendNoCacheResponse(res, await Services_1.PipelinesService.getSourceById(req.params.id, { sync, branch }, authData));
        }
        catch (e) {
            return ViewPipelinesController_1.ViewPipelinesController.handleError(e, next);
        }
    }
    static async deletePipelineSource(req, res, next) {
        try {
            const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
            JFrogController_1.JFrogController.sendNoCacheResponse(res, await Services_1.PipelinesService.deleteSource(req.params.id, authData));
        }
        catch (e) {
            return ViewPipelinesController_1.ViewPipelinesController.handleError(e, next);
        }
    }
    static async getScmIntegrations(req, res, next) {
        try {
            const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
            const [integrations, projects] = await Promise.all([Services_1.PipelinesService.getIntegrations(authData),
                Services_1.PipelinesService.getProjects(authData)]);
            const defaultProject = projects.find(({ name }) => name === Constants_1.PIPELINES.DEFAULT_PROJECT_NAME);
            const scmIntegrations = integrations.filter(({ masterIntegrationType, isInternal, projectId }) => masterIntegrationType === 'scm' && !isInternal && projectId === (defaultProject === null || defaultProject === void 0 ? void 0 : defaultProject.id));
            JFrogController_1.JFrogController.sendNoCacheResponse(res, scmIntegrations);
        }
        catch (e) {
            return ViewPipelinesController_1.ViewPipelinesController.handleError(e, next);
        }
    }
    static async getTemplates(req, res, next) {
        try {
            const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
            const templates = await Services_1.PipelinesService.getTemplates(authData);
            JFrogController_1.JFrogController.sendNoCacheResponse(res, templates);
        }
        catch (e) {
            return ViewPipelinesController_1.ViewPipelinesController.handleError(e, next);
        }
    }
    static async createPipelineSource(req, res, next) {
        try {
            const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
            const projects = await Services_1.PipelinesService.getProjects(authData);
            const newSource = req.body || {};
            if (Array.isArray(projects) && projects.length > 0) {
                const defaultProject = projects.find(({ name }) => name === Constants_1.PIPELINES.DEFAULT_PROJECT_NAME);
                newSource.projectId = defaultProject === null || defaultProject === void 0 ? void 0 : defaultProject.id;
            }
            const response = await Services_1.PipelinesService.createPipelineSource(newSource, authData);
            JFrogController_1.JFrogController.sendNoCacheResponse(res, response);
        }
        catch (e) {
            return ViewPipelinesController_1.ViewPipelinesController.handleError(e, next);
        }
    }
    static async updatePipelineSource(req, res, next) {
        try {
            const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
            const updateSource = req.body;
            const response = await Services_1.PipelinesService.updatePipelineSource(req.params.id, updateSource, authData);
            JFrogController_1.JFrogController.sendNoCacheResponse(res, response);
        }
        catch (e) {
            return ViewPipelinesController_1.ViewPipelinesController.handleError(e, next);
        }
    }
    static async getSourceSyncLogsByBranch(req, res, next) {
        try {
            const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
            const pipelineSourceIds = [req.query.sourceId];
            const pipelineSourceBranches = [req.query.branch];
            const apiBranchSyncStatuses = await Services_1.PipelinesService.getPipelineSyncStatuses({
                pipelineSourceIds,
                pipelineSourceBranches,
            }, authData).catch(() => {
                logger.error('failed getting pipelineSyncStatuses, return empty array');
                return [];
            });
            JFrogController_1.JFrogController.sendNoCacheResponse(res, apiBranchSyncStatuses);
        }
        catch (e) {
            return ViewPipelinesController_1.ViewPipelinesController.handleError(e, next);
        }
    }
    static validateQueryParams(req, res) {
        const { includeNamesPattern, excludeNamesPattern } = req.query;
        if (includeNamesPattern && !API_1.API.isStringsArray(includeNamesPattern)) {
            res.status(400).send('Wrong param, includeNamesPattern must be an array of strings');
            return false;
        }
        if (excludeNamesPattern && !API_1.API.isStringsArray(excludeNamesPattern)) {
            res.status(400).send('Wrong param, excludeNamesPattern must be an array of strings');
            return false;
        }
        return true;
    }
    static fetchBasicPipelineSourcesData(authData) {
        const pipelineSourceCall = Services_1.PipelinesService.getSources({}, authData).catch(() => {
            logger.error('failed getting pipelineSources, return empty array');
            return [];
        });
        const integrationsCall = Services_1.PipelinesService.getIntegrations(authData).catch(() => {
            logger.error('failed getting integrations, return empty array');
            return [];
        });
        const systemCodesCall = Services_1.PipelinesService.getSystemCodes(authData).catch(() => {
            logger.error('failed getting pipelines system codes, return empty array');
            return [];
        });
        return Promise.all([pipelineSourceCall, integrationsCall, systemCodesCall]);
    }
    static mapViewPipelineSource(pipelineSources, systemCodes, integrations, syncStatuses, resourceVersions) {
        if (pipelineSources.length === 0 || systemCodes.length === 0 || integrations.length === 0) {
            return [];
        }
        // TODO: Remove this once groupBy generic function is implemented
        const branchLogsBySourceIds = syncStatuses.reduce((r, v, i, a, k = v.pipelineSourceId) => ((r[k] || (r[k] = [])).push(v), r), {});
        return pipelineSources.map((source) => {
            const integration = integrations.find(({ id }) => id === source.projectIntegrationId);
            let syncStatus = '';
            if (!source.isSyncing && source.lastSyncStatusCode) {
                const syncStatusCode = systemCodes.find(({ code }) => code === source.lastSyncStatusCode);
                syncStatus = syncStatusCode && syncStatusCode.name;
            }
            else if (source.isSyncing) {
                syncStatus = 'syncing';
            }
            else {
                syncStatus = 'notbuilt';
            }
            let mappedSyncStatuses = [];
            const branchLogsBySourceId = branchLogsBySourceIds[source.id];
            mappedSyncStatuses = branchLogsBySourceId && branchLogsBySourceId.map((current) => {
                var _a, _b, _c, _d;
                const shaData = (_b = (_a = resourceVersions.find(({ id }) => id === current.triggeredByResourceVersionId)) === null || _a === void 0 ? void 0 : _a.contentPropertyBag) === null || _b === void 0 ? void 0 : _b.shaData;
                const currentLogs = {
                    branch: current.pipelineSourceBranch,
                    isSyncing: current.isSyncing,
                    lastSyncEndedAt: current.lastSyncEndedAt,
                    lastSyncStatusCode: current.lastSyncStatusCode,
                    triggeredByResourceVersionId: current.triggeredByResourceVersionId,
                    triggeredBy: ((_c = shaData === null || shaData === void 0 ? void 0 : shaData.lastAuthor) === null || _c === void 0 ? void 0 : _c.login) || ((_d = shaData === null || shaData === void 0 ? void 0 : shaData.lastAuthor) === null || _d === void 0 ? void 0 : _d.displayName),
                    commitSha: shaData === null || shaData === void 0 ? void 0 : shaData.commitSha,
                    commitMessage: shaData === null || shaData === void 0 ? void 0 : shaData.commitMessage,
                };
                return currentLogs;
            });
            const viewSource = {
                id: source.id,
                repositoryFullName: source.repositoryFullName,
                branch: source.branch,
                fileFilter: source.fileFilter,
                projectId: source.projectId,
                status: syncStatus,
                integration: integration && integration.name,
                integrationId: integration && integration.id,
                lastSyncLogs: source.lastSyncLogs,
                lastSyncEndedAt: source.lastSyncEndedAt,
                isMultiBranch: source.isMultiBranch,
                syncStatuses: mappedSyncStatuses,
                branchIncludePattern: source.branchIncludePattern,
                branchExcludePattern: source.branchExcludePattern,
                templateId: source.templateId,
            };
            return viewSource;
        });
    }
}
__decorate([
    LoggerDecorator_1.methodLog({ logger })
], ViewSourcesController, "getSources", null);
__decorate([
    LoggerDecorator_1.methodLog({ logger })
], ViewSourcesController, "getTemplates", null);
exports.ViewSourcesController = ViewSourcesController;


/***/ }),
/* 354 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtensionSourcesController = void 0;
const LoggerFactory_1 = __webpack_require__(1);
const Services_1 = __webpack_require__(3);
const JFrogController_1 = __webpack_require__(5);
const HttpRouteError_1 = __webpack_require__(37);
const LoggerDecorator_1 = __webpack_require__(17);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
class ExtensionSourcesController extends JFrogController_1.JFrogController {
    static async getViewExtensions(req, res, next) {
        try {
            const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
            const masterResourcesCall = await Services_1.PipelinesService.getMasterResources({}, authData);
            const extensionSourcesCall = await Services_1.PipelinesService.getExtensionSources({}, authData);
            const [masterResources, extensionSources] = await Promise.all([masterResourcesCall, extensionSourcesCall]);
            const viewExtensions = ExtensionSourcesController.mapViewExtension(masterResources, extensionSources);
            JFrogController_1.JFrogController.sendNoCacheResponse(res, viewExtensions);
        }
        catch (e) {
            return ExtensionSourcesController.handleError(e, next);
        }
    }
    static async getExtensionSources(req, res, next) {
        try {
            const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
            const response = await Services_1.PipelinesService.getExtensionSources({}, authData);
            JFrogController_1.JFrogController.sendNoCacheResponse(res, response);
        }
        catch (e) {
            return ExtensionSourcesController.handleError(e, next);
        }
    }
    static async getViewExtensionSources(req, res, next) {
        try {
            const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
            const [extensionSources, integrations, systemCodes] = await ExtensionSourcesController.fetchBasicExtensionSourcesData(authData);
            const resourcesIds = extensionSources
                .map(({ resourceId }) => resourceId)
                .filter((resourceId) => resourceId !== null);
            const resources = await Services_1.PipelinesService.getResources({ resourceIds: resourcesIds.map((id) => id.toString()) }, authData);
            const resourceVersionIds = resources
                .map(({ latestResourceVersionId }) => latestResourceVersionId === null || latestResourceVersionId === void 0 ? void 0 : latestResourceVersionId.toString())
                .filter(Boolean);
            const resourceVersions = await Services_1.PipelinesService.getResourceVersions({ resourceVersionIds }, authData);
            const viewExtensionSources = ExtensionSourcesController.mapViewExtensionSource(extensionSources, systemCodes, integrations, resourceVersions);
            JFrogController_1.JFrogController.sendNoCacheResponse(res, viewExtensionSources);
        }
        catch (e) {
            return ExtensionSourcesController.handleError(e, next);
        }
    }
    static async createExtensionSource(req, res, next) {
        try {
            const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
            const newSource = req.body || {};
            const response = await Services_1.PipelinesService.createExtensionSource(newSource, authData);
            JFrogController_1.JFrogController.sendNoCacheResponse(res, response);
        }
        catch (e) {
            return ExtensionSourcesController.handleError(e, next);
        }
    }
    static async updateExtensionSource(req, res, next) {
        try {
            const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
            const response = await Services_1.PipelinesService.updateExtensionSource(req.params.id, req.body, authData);
            JFrogController_1.JFrogController.sendNoCacheResponse(res, response);
        }
        catch (e) {
            return ExtensionSourcesController.handleError(e, next);
        }
    }
    static async updateExtension(req, res, next) {
        try {
            const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
            const response = await Services_1.PipelinesService.updateMasterResources(req.params.id, req.body, authData);
            JFrogController_1.JFrogController.sendNoCacheResponse(res, response);
        }
        catch (e) {
            return ExtensionSourcesController.handleError(e, next);
        }
    }
    static async syncExtensionSource(req, res, next) {
        try {
            const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
            JFrogController_1.JFrogController.sendNoCacheResponse(res, await Services_1.PipelinesService.getExtensionSourceById(req.params.id, { sync: true }, authData));
        }
        catch (e) {
            return ExtensionSourcesController.handleError(e, next);
        }
    }
    static async deleteExtensionSource(req, res, next) {
        try {
            const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
            JFrogController_1.JFrogController.sendNoCacheResponse(res, await Services_1.PipelinesService.deleteExtensionSource(req.params.id, authData));
        }
        catch (e) {
            return ExtensionSourcesController.handleError(e, next);
        }
    }
    static fetchBasicExtensionSourcesData(authData) {
        const extensionSourcesCall = Services_1.PipelinesService.getExtensionSources({}, authData).catch(() => {
            logger.error('failed getting extensionSources, return empty array');
            return [];
        });
        const integrationsCall = Services_1.PipelinesService.getIntegrations(authData).catch(() => {
            logger.error('failed getting integrations, return empty array');
            return [];
        });
        const systemCodesCall = Services_1.PipelinesService.getSystemCodes(authData).catch(() => {
            logger.error('failed getting pipelines system codes, return empty array');
            return [];
        });
        return Promise.all([extensionSourcesCall, integrationsCall, systemCodesCall]);
    }
    static mapViewExtension(masterResources, extensionSources) {
        if (masterResources.length === 0) {
            return [];
        }
        return masterResources.map((masterResource) => {
            let extensionSourceDisplayValue = null;
            if (extensionSources.length && masterResource.extensionSourceId) {
                const extensionSource = extensionSources.find(({ id }) => id === masterResource.extensionSourceId);
                extensionSourceDisplayValue = `${extensionSource === null || extensionSource === void 0 ? void 0 : extensionSource.repositoryFullName}:${extensionSource === null || extensionSource === void 0 ? void 0 : extensionSource.repositoryBranch}`;
            }
            const viewExtension = {
                id: masterResource.id,
                name: masterResource.name,
                resourceType: masterResource.resourceType,
                isInternal: masterResource.isInternal,
                lifecycleStage: masterResource.lifecycleStage,
                syntaxVersion: masterResource.syntaxVersion,
                extensionSourceId: masterResource.extensionSourceId,
                extensionSource: extensionSourceDisplayValue,
                retiredAt: masterResource.retiredAt,
            };
            return viewExtension;
        });
    }
    static mapViewExtensionSource(extensionSources, systemCodes, integrations, resourceVersions) {
        if (extensionSources.length === 0 || systemCodes.length === 0 || integrations.length === 0) {
            return [];
        }
        return extensionSources.map((source) => {
            var _a, _b, _c, _d;
            const integration = integrations.find(({ id }) => id === source.projectIntegrationId);
            let syncStatus = '';
            if (!source.isSyncing && source.lastSyncStatusCode) {
                const syncStatusCode = systemCodes.find(({ code }) => code === source.lastSyncStatusCode);
                syncStatus = syncStatusCode && syncStatusCode.name;
            }
            else if (source.isSyncing) {
                syncStatus = 'syncing';
            }
            else {
                syncStatus = 'notbuilt';
            }
            const shaData = (_b = (_a = resourceVersions.find(({ resourceId }) => resourceId === source.resourceId)) === null || _a === void 0 ? void 0 : _a.contentPropertyBag) === null || _b === void 0 ? void 0 : _b.shaData;
            const viewSource = {
                id: source.id,
                repositoryFullName: source.repositoryFullName,
                repositoryBranch: source.repositoryBranch,
                status: syncStatus,
                integration: integration && integration.name,
                integrationId: integration && integration.id,
                resourceId: source.resourceId,
                lastSyncLogs: source.lastSyncLogs,
                lastSyncEndedAt: source.lastSyncEndedAt,
                triggeredBy: ((_c = shaData === null || shaData === void 0 ? void 0 : shaData.lastAuthor) === null || _c === void 0 ? void 0 : _c.login) || ((_d = shaData === null || shaData === void 0 ? void 0 : shaData.lastAuthor) === null || _d === void 0 ? void 0 : _d.displayName),
                commitSha: shaData === null || shaData === void 0 ? void 0 : shaData.commitSha,
                commitMessage: shaData === null || shaData === void 0 ? void 0 : shaData.commitMessage,
            };
            return viewSource;
        });
    }
    static handleError(e, next, message) {
        logger.error(e);
        const errMsg = e.data && e.data.message;
        const error = new HttpRouteError_1.HttpRouteError(message || errMsg, errMsg, e.status);
        next(error);
        return;
    }
}
__decorate([
    LoggerDecorator_1.methodLog({ logger })
], ExtensionSourcesController, "getViewExtensions", null);
__decorate([
    LoggerDecorator_1.methodLog({ logger })
], ExtensionSourcesController, "handleError", null);
exports.ExtensionSourcesController = ExtensionSourcesController;


/***/ }),
/* 355 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateSourcesController = void 0;
const LoggerFactory_1 = __webpack_require__(1);
const Services_1 = __webpack_require__(3);
const JFrogController_1 = __webpack_require__(5);
const HttpRouteError_1 = __webpack_require__(37);
const LoggerDecorator_1 = __webpack_require__(17);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
class TemplateSourcesController extends JFrogController_1.JFrogController {
    static async getViewTemplates(req, res, next) {
        try {
            const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
            const templatesCall = await Services_1.PipelinesService.getTemplates(authData);
            const templateSourcesCall = await Services_1.PipelinesService.getTemplateSources({}, authData);
            const [templates, templateSources] = await Promise.all([templatesCall, templateSourcesCall]);
            const viewTemplates = TemplateSourcesController.mapViewTemplate(templates, templateSources);
            JFrogController_1.JFrogController.sendNoCacheResponse(res, viewTemplates);
        }
        catch (e) {
            return TemplateSourcesController.handleError(e, next);
        }
    }
    static async getTemplateSources(req, res, next) {
        try {
            const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
            const response = await Services_1.PipelinesService.getTemplateSources({}, authData);
            JFrogController_1.JFrogController.sendNoCacheResponse(res, response);
        }
        catch (e) {
            return TemplateSourcesController.handleError(e, next);
        }
    }
    static async getViewTemplateSources(req, res, next) {
        try {
            const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
            const [templateSources, integrations, systemCodes] = await TemplateSourcesController.fetchBasicTemplateSourcesData(authData);
            const resourcesIds = templateSources
                .map(({ resourceId }) => resourceId)
                .filter((resourceId) => resourceId !== null);
            const resources = await Services_1.PipelinesService.getResources({ resourceIds: resourcesIds.map((id) => id.toString()) }, authData);
            const resourceVersionIds = resources
                .map(({ latestResourceVersionId }) => latestResourceVersionId === null || latestResourceVersionId === void 0 ? void 0 : latestResourceVersionId.toString())
                .filter(Boolean);
            const resourceVersions = await Services_1.PipelinesService.getResourceVersions({ resourceVersionIds }, authData);
            const viewTemplateSources = TemplateSourcesController.mapViewTemplateSource(templateSources, systemCodes, integrations, resourceVersions);
            JFrogController_1.JFrogController.sendNoCacheResponse(res, viewTemplateSources);
        }
        catch (e) {
            return TemplateSourcesController.handleError(e, next);
        }
    }
    static async createTemplateSource(req, res, next) {
        try {
            const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
            const newSource = req.body || {};
            const response = await Services_1.PipelinesService.createTemplateSource(newSource, authData);
            JFrogController_1.JFrogController.sendNoCacheResponse(res, response);
        }
        catch (e) {
            return TemplateSourcesController.handleError(e, next);
        }
    }
    static async updateTemplateSource(req, res, next) {
        try {
            const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
            const response = await Services_1.PipelinesService.updateTemplateSource(req.params.id, req.body, authData);
            JFrogController_1.JFrogController.sendNoCacheResponse(res, response);
        }
        catch (e) {
            return TemplateSourcesController.handleError(e, next);
        }
    }
    static async updateTemplate(req, res, next) {
        try {
            const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
            const response = await Services_1.PipelinesService.updateTemplate(req.params.id, req.body, authData);
            JFrogController_1.JFrogController.sendNoCacheResponse(res, response);
        }
        catch (e) {
            return TemplateSourcesController.handleError(e, next);
        }
    }
    static async syncTemplateSource(req, res, next) {
        try {
            const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
            JFrogController_1.JFrogController.sendNoCacheResponse(res, await Services_1.PipelinesService.getTemplateSourceById(req.params.id, { sync: true }, authData));
        }
        catch (e) {
            return TemplateSourcesController.handleError(e, next);
        }
    }
    static async deleteTemplateSource(req, res, next) {
        try {
            const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
            JFrogController_1.JFrogController.sendNoCacheResponse(res, await Services_1.PipelinesService.deleteTemplateSource(req.params.id, authData));
        }
        catch (e) {
            return TemplateSourcesController.handleError(e, next);
        }
    }
    static fetchBasicTemplateSourcesData(authData) {
        const templateSourcesCall = Services_1.PipelinesService.getTemplateSources({}, authData).catch(() => {
            logger.error('failed getting templateSources, return empty array');
            return [];
        });
        const integrationsCall = Services_1.PipelinesService.getIntegrations(authData).catch(() => {
            logger.error('failed getting integrations, return empty array');
            return [];
        });
        const systemCodesCall = Services_1.PipelinesService.getSystemCodes(authData).catch(() => {
            logger.error('failed getting pipelines system codes, return empty array');
            return [];
        });
        return Promise.all([templateSourcesCall, integrationsCall, systemCodesCall]);
    }
    static mapViewTemplate(templates, templateSources) {
        if (templates.length === 0) {
            return [];
        }
        return templates.map((template) => {
            let templateSourceDisplayValue = null;
            if (templateSources.length && template.templateSourceId) {
                const templateSource = templateSources.find(({ id }) => id === template.templateSourceId);
                templateSourceDisplayValue = `${templateSource === null || templateSource === void 0 ? void 0 : templateSource.repositoryFullName}:${templateSource === null || templateSource === void 0 ? void 0 : templateSource.repositoryBranch}`;
            }
            const viewTemplate = {
                id: template.id,
                name: template.name,
                namespace: template.namespace,
                syntaxVersion: template.syntaxVersion,
                templateSourceId: template.templateSourceId,
                templateSource: templateSourceDisplayValue,
                retiredAt: template.retiredAt,
                isSyncing: template.isSyncing,
            };
            return viewTemplate;
        });
    }
    static mapViewTemplateSource(templateSources, systemCodes, integrations, resourceVersions) {
        if (templateSources.length === 0 || systemCodes.length === 0 || integrations.length === 0) {
            return [];
        }
        return templateSources.map((source) => {
            var _a, _b, _c, _d;
            const integration = integrations.find(({ id }) => id === source.projectIntegrationId);
            let syncStatus = '';
            if (!source.isSyncing && source.lastSyncStatusCode) {
                const syncStatusCode = systemCodes.find(({ code }) => code === source.lastSyncStatusCode);
                syncStatus = syncStatusCode && syncStatusCode.name;
            }
            else if (source.isSyncing) {
                syncStatus = 'syncing';
            }
            else {
                syncStatus = 'notbuilt';
            }
            const shaData = (_b = (_a = resourceVersions.find(({ resourceId }) => resourceId === source.resourceId)) === null || _a === void 0 ? void 0 : _a.contentPropertyBag) === null || _b === void 0 ? void 0 : _b.shaData;
            const viewSource = {
                id: source.id,
                repositoryFullName: source.repositoryFullName,
                repositoryBranch: source.repositoryBranch,
                status: syncStatus,
                integration: integration && integration.name,
                integrationId: integration && integration.id,
                resourceId: source.resourceId,
                lastSyncLogs: source.lastSyncLogs,
                lastSyncEndedAt: source.lastSyncEndedAt,
                triggeredBy: ((_c = shaData === null || shaData === void 0 ? void 0 : shaData.lastAuthor) === null || _c === void 0 ? void 0 : _c.login) || ((_d = shaData === null || shaData === void 0 ? void 0 : shaData.lastAuthor) === null || _d === void 0 ? void 0 : _d.displayName),
                commitSha: shaData === null || shaData === void 0 ? void 0 : shaData.commitSha,
                commitMessage: shaData === null || shaData === void 0 ? void 0 : shaData.commitMessage,
            };
            return viewSource;
        });
    }
    static handleError(e, next, message) {
        logger.error(e);
        const errMsg = e.data && e.data.message;
        const error = new HttpRouteError_1.HttpRouteError(message || errMsg, errMsg, e.status);
        next(error);
        return;
    }
}
__decorate([
    LoggerDecorator_1.methodLog({ logger })
], TemplateSourcesController, "getViewTemplates", null);
__decorate([
    LoggerDecorator_1.methodLog({ logger })
], TemplateSourcesController, "handleError", null);
exports.TemplateSourcesController = TemplateSourcesController;


/***/ }),
/* 356 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystemController = void 0;
const Services_1 = __webpack_require__(3);
const LoggerFactory_1 = __webpack_require__(1);
const fs = __webpack_require__(22);
const path = __webpack_require__(8);
const ServiceID_1 = __webpack_require__(25);
const JFrogController_1 = __webpack_require__(5);
const Decorators_1 = __webpack_require__(2);
const SupportBundleConfig_1 = __webpack_require__(357);
const config = __webpack_require__(4);
const Constants_1 = __webpack_require__(0);
const StoreService_1 = __webpack_require__(359);
const AuthenticationErrors_1 = __webpack_require__(13);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
class SystemController extends JFrogController_1.JFrogController {
    static async getSortedServicesNodes(req, res, _) {
        res.send(await Services_1.SystemHAService.getSortedServicesNodes());
    }
    static async getHaStatus(req, res, _) {
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        res.send(await Services_1.SystemHAService.getHaStatus(authData));
    }
    static getFeaturesConfig(req, res, _) {
        const featureTogglerConfig = {
            commonProjects: config.getBool('frontend.featureToggler.commonProjects'),
            dynamicUpdate: config.getBool('frontend.featureToggler.dynamicUpdate'),
            artifactoryArtifactsBrowser: config.getBool('frontend.featureToggler.artifactoryArtifactsBrowser'),
            commonUserOnboarding: config.getBool('frontend.featureToggler.commonUserOnboarding'),
        };
        res.send(featureTogglerConfig);
    }
    static async getUnifiedCurrentUserInfo(req, res, _) {
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        logger.debug('getting unifiedCurrentUserInfo');
        const unifiedCurrentUserInfo = await Services_1.SystemService.getUnifiedCurrentUserInfo(authData);
        res.send(unifiedCurrentUserInfo);
    }
    static async getUnifiedOnboardingInfo(req, res, _) {
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        logger.debug('getting unifiedOnboardingInfo');
        const unifiedOnboardingInfo = await Services_1.SystemService.getUnifiedOnboardingStatus(authData);
        res.send(unifiedOnboardingInfo);
    }
    static async getVersion(req, res, _) {
        res.json(Services_1.SystemService.getVersion());
    }
    static async getRememberMeEnabledStatus(req, res, _) {
        const enabled = await Services_1.ArtifactoryService.isRememberMeEnabled();
        res.json({ enabled });
    }
    static async sendOnboardingData(req, res, _) {
        res.sendStatus(Constants_1.STATUS_CODES.OK);
    }
    static async supportBundle(req, res, _) {
        const ctx = req.body;
        ctx.id = req.params.id;
        ctx.service_type = req.get('X-JFrog-Service-Id');
        logger.debug(`creating support bundle with config : ${JSON.stringify(ctx)}`);
        const supportBundleConfig = new SupportBundleConfig_1.SupportBundleConfig(ctx);
        const { stream, name } = await Services_1.BundleCollector.generateStreamable(supportBundleConfig);
        stream.on('error', () => {
            SystemController.createZipIfStreamFailed(stream, name);
            throw new Error('Failed streaming file, zip was saved in fs');
        });
        stream.on('end', () => {
            res.end();
        });
        res.attachment(name);
        res.append('X-JFrog-Service-Id', ServiceID_1.ServiceID.getServiceId());
        stream.pipe(res, { end: false });
    }
    static async getStoreStatusForService(req, res, _) {
        var _a;
        let status;
        const serviceName = req.params.serviceName;
        try {
            status = await StoreService_1.StoreService.getServicesStoreStatus();
        }
        catch (e) {
            logger.error(`error connecting to store : ${e.message}`);
            return res.sendStatus(Constants_1.STATUS_CODES.SERVICE_UNAVAILABLE);
        }
        if ((_a = status === null || status === void 0 ? void 0 : status.products) === null || _a === void 0 ? void 0 : _a[serviceName]) {
            return res.json({ status: status.products[serviceName] });
        }
        res.sendStatus(Constants_1.STATUS_CODES.NOT_FOUND);
    }
    static async getServicesStoreStatus(req, res, _) {
        try {
            res.send(await StoreService_1.StoreService.getServicesStoreStatus());
        }
        catch (e) {
            logger.error(`error connecting to store : ${e.message}`);
            res.sendStatus(Constants_1.STATUS_CODES.SERVICE_UNAVAILABLE);
        }
    }
    static async activateService(req, res, _) {
        const serviceName = req.params.serviceName;
        if (serviceName !== Constants_1.SERVICES.PIPELINES.NAME) {
            return res.status(Constants_1.STATUS_CODES.BAD_REQUEST).send(`service name must be ${Constants_1.SERVICES.PIPELINES.NAME}`);
        }
        try {
            res.send(await StoreService_1.StoreService.activateService(serviceName));
        }
        catch (e) {
            logger.error(`error connecting to store : ${e.message}`);
            res.sendStatus(Constants_1.STATUS_CODES.SERVICE_UNAVAILABLE);
        }
    }
    static createZipIfStreamFailed(stream, zipName) {
        logger.debug('in SystemController::createZipIfStreamFailed');
        const tempDir = path.join(__dirname, 'tmp');
        if (!fs.existsSync(tempDir)) {
            fs.mkdirSync(tempDir);
        }
        const fileStream = fs.createWriteStream(path.join(tempDir, zipName));
        stream.on('error', (err) => {
            logger.error(err.message);
        });
        stream.pipe(fileStream);
    }
    static async getUnifiedLogsInfo(req, res, _) {
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        logger.debug('getting unifiedLogsInfo');
        let unifiedLogsInfo;
        /*
         ** Re route the service based on the serviceName sent in the param
         ** Note: The serviceName param sent from the UI should have the service names correctly as given in the constants
         */
        const selectedService = req.params.serviceName;
        const { nodeId } = req.query;
        if (!selectedService) {
            res.sendStatus(Constants_1.STATUS_CODES.BAD_REQUEST);
            return;
        }
        else {
            switch (selectedService) {
                case Constants_1.SERVICES.ARTIFACTORY.NAME:
                    unifiedLogsInfo = await Services_1.ArtifactoryService.getUnifiedLogsInfo(authData, nodeId);
                    break;
                case Constants_1.SERVICES.DISTRIBUTION.NAME:
                    unifiedLogsInfo = await Services_1.DistributionService.getUnifiedLogsInfo(authData, nodeId);
                    break;
                case Constants_1.SERVICES.MISSION_CONTROL.NAME:
                    unifiedLogsInfo = await Services_1.MissionControlService.getUnifiedLogsInfo(authData, nodeId);
                    break;
                case Constants_1.SERVICES.PIPELINES.NAME:
                    unifiedLogsInfo = await Services_1.PipelinesService.getUnifiedLogsInfo(authData, nodeId);
                    break;
                case Constants_1.SERVICES.XRAY.NAME:
                    unifiedLogsInfo = await Services_1.XrayService.getUnifiedLogsInfo(authData, nodeId);
                    break;
            }
            res.send(unifiedLogsInfo);
        }
    }
    static async getUnifiedLogsData(req, res, _) {
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        logger.debug('getting unifiedLogsData');
        const { file_size, id, nodeId } = req.query;
        let unifiedLogsData;
        /*
         ** Re route the service based on the serviceName sent in the param
         ** Note: The serviceName param sent from the UI should have the service names correctly as given in the constants
         */
        const serviceName = req.params.serviceName;
        if (!serviceName) {
            res.sendStatus(Constants_1.STATUS_CODES.BAD_REQUEST);
            return;
        }
        else {
            switch (serviceName) {
                case Constants_1.SERVICES.ARTIFACTORY.NAME:
                    unifiedLogsData = await Services_1.ArtifactoryService.getUnifiedLogsData(authData, nodeId, file_size, id);
                    break;
                case Constants_1.SERVICES.DISTRIBUTION.NAME:
                    unifiedLogsData = await Services_1.DistributionService.getUnifiedLogsData(authData, nodeId, file_size, id);
                    break;
                case Constants_1.SERVICES.MISSION_CONTROL.NAME:
                    unifiedLogsData = await Services_1.MissionControlService.getUnifiedLogsData(authData, nodeId, file_size, id);
                    break;
                case Constants_1.SERVICES.PIPELINES.NAME:
                    unifiedLogsData = await Services_1.PipelinesService.getUnifiedLogsData(authData, nodeId, file_size, id);
                    break;
                case Constants_1.SERVICES.XRAY.NAME:
                    unifiedLogsData = await Services_1.XrayService.getUnifiedLogsData(authData, nodeId, file_size, id);
                    break;
            }
            res.send(unifiedLogsData);
        }
    }
    static handleStoreActivateAnonError(err, req, res, next) {
        if (err instanceof AuthenticationErrors_1.AuthErrorAnonymousNotAllowed) {
            return res.status(Constants_1.STATUS_CODES.UNAUTHORIZED).send(Constants_1.STORE.ANONYMOUS_MESSAGE);
        }
        next(err);
    }
}
__decorate([
    Decorators_1.controllerErrorHandler(),
    Decorators_1.methodLog({ logger })
], SystemController, "getSortedServicesNodes", null);
__decorate([
    Decorators_1.methodLog({ logger }),
    Decorators_1.controllerErrorHandler()
], SystemController, "getHaStatus", null);
__decorate([
    Decorators_1.methodLog({ logger })
], SystemController, "getFeaturesConfig", null);
__decorate([
    Decorators_1.controllerErrorHandler()
], SystemController, "getUnifiedCurrentUserInfo", null);
__decorate([
    Decorators_1.controllerErrorHandler()
], SystemController, "getUnifiedOnboardingInfo", null);
__decorate([
    Decorators_1.controllerErrorHandler()
], SystemController, "getVersion", null);
__decorate([
    Decorators_1.controllerErrorHandler()
], SystemController, "getRememberMeEnabledStatus", null);
__decorate([
    Decorators_1.controllerErrorHandler()
], SystemController, "supportBundle", null);
__decorate([
    Decorators_1.controllerErrorHandler()
], SystemController, "getStoreStatusForService", null);
__decorate([
    Decorators_1.controllerErrorHandler()
], SystemController, "getServicesStoreStatus", null);
__decorate([
    Decorators_1.controllerErrorHandler()
], SystemController, "activateService", null);
__decorate([
    Decorators_1.controllerErrorHandler()
], SystemController, "getUnifiedLogsInfo", null);
__decorate([
    Decorators_1.controllerErrorHandler()
], SystemController, "getUnifiedLogsData", null);
exports.SystemController = SystemController;


/***/ }),
/* 357 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SupportBundleConfig = void 0;
const ServiceID_1 = __webpack_require__(25);
const Constants_1 = __webpack_require__(0);
const API_1 = __webpack_require__(7);
const os = __webpack_require__(358);
class SupportBundleConfig {
    constructor(ctx) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        this._includeLogs = true;
        this._configuration = true;
        this._system = true;
        this._threadDumpCount = 1;
        this._threadDumpInterval = 0;
        this._startDate = ((_b = (_a = ctx === null || ctx === void 0 ? void 0 : ctx.parameters) === null || _a === void 0 ? void 0 : _a.logs) === null || _b === void 0 ? void 0 : _b.start_date) || SupportBundleConfig.defaultStartDate;
        this._endDate = ((_d = (_c = ctx === null || ctx === void 0 ? void 0 : ctx.parameters) === null || _c === void 0 ? void 0 : _c.logs) === null || _d === void 0 ? void 0 : _d.end_date) || SupportBundleConfig.defaultEndDate;
        if (((_f = (_e = ctx === null || ctx === void 0 ? void 0 : ctx.parameters) === null || _e === void 0 ? void 0 : _e.logs) === null || _f === void 0 ? void 0 : _f.include) === false) {
            this._includeLogs = false;
        }
        if (((_g = ctx === null || ctx === void 0 ? void 0 : ctx.parameters) === null || _g === void 0 ? void 0 : _g.configuration) === false) {
            this._configuration = false;
        }
        if (ctx.parameters.system === false) {
            this._system = false;
        }
        this._threadDumpCount = (_h = ctx === null || ctx === void 0 ? void 0 : ctx.parameters.thread_dump.count) !== null && _h !== void 0 ? _h : this._threadDumpCount;
        this._threadDumpInterval = (_j = ctx === null || ctx === void 0 ? void 0 : ctx.parameters.thread_dump.interval) !== null && _j !== void 0 ? _j : this._threadDumpInterval;
        this._id = ctx.id;
        this._serviceType = (ctx === null || ctx === void 0 ? void 0 : ctx.service_type) || Constants_1.SERVICES.ARTIFACTORY.TYPE;
        this.setDateRange();
    }
    get endDate() {
        return this._endDate;
    }
    get startDate() {
        return this._startDate;
    }
    get includeLogs() {
        return this._includeLogs;
    }
    get configuration() {
        return this._configuration;
    }
    get system() {
        return this._system;
    }
    get threadDumpCount() {
        return this._threadDumpCount;
    }
    get threadDumpInterval() {
        return this._threadDumpInterval;
    }
    get from() {
        return this._from;
    }
    get to() {
        return this._to;
    }
    get id() {
        return this._id;
    }
    get description() {
        return this._description;
    }
    get name() {
        return this._name;
    }
    get serviceType() {
        return this._serviceType;
    }
    get systemInfo() {
        return {
            cpu: os.cpus(),
            total_memory: os.totalmem(),
            process_memory: os.totalmem() - os.freemem(),
            host: os.hostname(),
            os_arch: os.arch(),
            os_name: os.platform(),
            os_version: os.release()
        };
    }
    get nodeManifestJson() {
        return {
            service_type: this.serviceType,
            microservice_name: Constants_1.SERVICES.FRONTEND.NAME,
            microservice_version: API_1.API.getProjectVersion(),
            service_id: ServiceID_1.ServiceID.getServiceId(),
            node_id: API_1.API.getNodeId(),
            bundle_info: {
                id: `${this.name}_${this.id}`,
                name: this.name,
                description: this.description,
                created: new Date().toISOString(),
                status: 'success'
            }
        };
    }
    setDateRange() {
        const endDate = new Date(this._endDate);
        const isEndDateOnlyYMD = endDate.getUTCHours() === endDate.getUTCMinutes() && endDate.getUTCMinutes() === endDate.getUTCSeconds();
        this._to = isEndDateOnlyYMD ? 0 : Constants_1.TIME.msHoursFromNow(this._endDate);
        this._from = Constants_1.TIME.msHoursFromNow(this._startDate);
    }
    static get defaultStartDate() {
        return new Date(Date.now() - Constants_1.TIME.DAY_MS).toISOString();
    }
    static get defaultEndDate() {
        return new Date().toISOString();
    }
    ;
}
exports.SupportBundleConfig = SupportBundleConfig;


/***/ }),
/* 358 */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),
/* 359 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreService = void 0;
const Decorators_1 = __webpack_require__(2);
const store_nodejs_client_1 = __webpack_require__(360);
const Constants_1 = __webpack_require__(0);
const LoggerFactory_1 = __webpack_require__(1);
const config = __webpack_require__(4);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
class StoreService {
    static async activateService(serviceName) {
        // store supports activating all the product,
        // the product requirements for now are only for pipelines so the rest are disabled.
        if (serviceName !== Constants_1.SERVICES.PIPELINES.NAME) {
            throw new Error('can only activate pipelines');
        }
        return StoreService.client.platform().activateProduct(serviceName);
    }
    static async getServicesStoreStatus() {
        return StoreService.client.platform().getStatus();
    }
    static getClient() {
        const username = config.get(`frontend.security.store.username`);
        const password = config.get(`frontend.security.store.password`);
        const serverUrl = config.get(`frontend.servicesUrls.store`);
        const customerName = config.get('frontend.system.customerName');
        if (!serverUrl) {
            throw new Error("server url for store was not provided");
        }
        if (!username) {
            throw new Error("username for store was not provided");
        }
        if (!customerName) {
            throw new Error("customer name for store was not provided");
        }
        const credentials = { username, password };
        const clientConfig = {
            serverUrl,
            customerName,
            credentials,
            logger,
        };
        return new store_nodejs_client_1.StoreClient(clientConfig);
    }
    static get client() {
        if (StoreService._client) {
            return StoreService._client;
        }
        try {
            StoreService._client = StoreService.getClient();
            return StoreService._client;
        }
        catch (e) {
            e.message = `failed creating store client : ${e.message}`;
            logger.error(e);
            throw new Error('Internal Error');
        }
    }
    /*
        Used for testing
     */
    static resetClient() {
        StoreService._client = StoreService.getClient();
    }
}
__decorate([
    Decorators_1.methodLog()
], StoreService, "activateService", null);
__decorate([
    Decorators_1.methodLog()
], StoreService, "getServicesStoreStatus", null);
exports.StoreService = StoreService;


/***/ }),
/* 360 */
/***/ (function(module, exports) {

module.exports = require("@jfrog/store-nodejs-client");

/***/ }),
/* 361 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.XrayController = void 0;
const JFrogController_1 = __webpack_require__(5);
const Decorators_1 = __webpack_require__(2);
const Services_1 = __webpack_require__(3);
const LoggerFactory_1 = __webpack_require__(1);
const express_validator_1 = __webpack_require__(15);
const Constants_1 = __webpack_require__(0);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
class XrayController extends JFrogController_1.JFrogController {
    static async deleteNode(req, res, next) {
        const errors = express_validator_1.validationResult(req);
        if (!errors.isEmpty()) {
            res.status(Constants_1.STATUS_CODES.BAD_REQUEST).json({ errors: errors.array() });
            return;
        }
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        const nodeId = req.query.nodeId;
        const serviceId = req.query.serviceId;
        logger.debug(`about to delete ${nodeId} :: ${serviceId} node from xray`);
        res.send(await Services_1.XrayService.deleteNode(serviceId, nodeId, authData));
    }
    static async getReports(req, res, next) {
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        logger.debug(`Getting Xray Reports`);
        const filters = req.body;
        const pagination = req.query;
        logger.debug(`Pagination: ${JSON.stringify(pagination)}`);
        logger.debug(`Filters: ${JSON.stringify(filters)}`);
        res.send(await Services_1.XrayService.getReports(authData, filters, pagination));
    }
    static async getVulnerabilityReportResults(req, res, next) {
        const body = req.body;
        const { id } = req.params;
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        logger.debug(`Getting Xray Report Results`);
        res.send(await Services_1.XrayService.getVulnerabilityReportResults(authData, id, req.params, body));
    }
    static async generateVulnerabilityReport(req, res, next) {
        const reportReq = req.body;
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        logger.debug(`Generating Xray Report`);
        res.send(await Services_1.XrayService.generateVulnerabilityReport(authData, reportReq));
    }
}
__decorate([
    Decorators_1.methodLog({ logger }),
    Decorators_1.controllerErrorHandler()
], XrayController, "deleteNode", null);
__decorate([
    Decorators_1.methodLog({ logger }),
    Decorators_1.controllerErrorHandler()
], XrayController, "getReports", null);
__decorate([
    Decorators_1.methodLog({ logger }),
    Decorators_1.controllerErrorHandler()
], XrayController, "getVulnerabilityReportResults", null);
__decorate([
    Decorators_1.methodLog({ logger }),
    Decorators_1.controllerErrorHandler()
], XrayController, "generateVulnerabilityReport", null);
exports.XrayController = XrayController;


/***/ }),
/* 362 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventController = void 0;
const JFrogController_1 = __webpack_require__(5);
const Decorators_1 = __webpack_require__(2);
const Services_1 = __webpack_require__(3);
const LoggerFactory_1 = __webpack_require__(1);
const express_validator_1 = __webpack_require__(15);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
class EventController extends JFrogController_1.JFrogController {
    static async getSubscriptions(req, res, next) {
        const errors = express_validator_1.validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() });
            return;
        }
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        logger.debug(`about to get subscriptions`);
        res.send(await Services_1.EventService.getAllSubscriptions(authData));
    }
    static async getSpecificSubscription(req, res, next) {
        const errors = express_validator_1.validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() });
            return;
        }
        const { subscriptionKey } = req.params;
        const authData = JFrogController_1.JFrogController.getLoginCtxFromReq(req);
        logger.debug(`about to get  specific subscription`);
        res.send(await Services_1.EventService.getSpecificSubscription(authData, subscriptionKey));
    }
}
__decorate([
    Decorators_1.methodLog({ logger }),
    Decorators_1.controllerErrorHandler()
], EventController, "getSubscriptions", null);
__decorate([
    Decorators_1.methodLog({ logger }),
    Decorators_1.controllerErrorHandler()
], EventController, "getSpecificSubscription", null);
exports.EventController = EventController;


/***/ }),
/* 363 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ARTIFACTORY_PROXY_ROUTES = void 0;
exports.ARTIFACTORY_PROXY_ROUTES = {
    GET: [
        '/ldapgroups',
        '/ldapgroups/*',
        '/ldap',
        '/oauth',
        '/auth/canAnnotate',
        '/treebrowser',
        '/treebrowser/*',
        '/treebrowser/repoOrder',
        '/oauth2/loginRequestPlatform',
        '/artifactwatches/:name',
        '/artifactwatches/status',
        '/artifactactions/:action',
        '/artifactactions/deleteversions',
        '/artifactxray',
        '/artifactxray/isBlocked',
        '/onboarding/:param',
        '/httpsso',
        '/securityconfig',
        '/groups/:prefix/:name',
        '/groupPermission',
        '/sshserver',
        '/ssh/key/public',
        '/licenses/:action/:name',
        '/licenses',
        '/licenses/*',
        '/manageLicenses/:action',
        '/mail',
        '/crypto/:action',
        '/proxies/:prefix/:key',
        '/reverseProxies/:prefix/:key',
        '/registerlicense',
        '/users/:prefix/:name',
        '/saml/config',
        '/saml/config/key/public',
        '/bintraysetting',
        '/bintraysetting/info',
        '/propertysets',
        '/propertysets/:action/:name',
        '/propertysets/*',
        '/backup/:key/:action',
        '/browsefilesystem',
        '/systeminfo',
        '/securitydescriptor',
        '/configdescriptor',
        '/indexer',
        '/storagesummary',
        '/repodata',
        '/crontime',
        '/validations/dateformat',
        '/validations/name',
        '/validations/uniqueid',
        '/validations/xmlname',
        '/artifactgeneral',
        '/artifactpermissions',
        '/artifactbuilds',
        '/artifactbuilds/json',
        '/archiveViewSource',
        '/artifactproperties/:name',
        '/predefinevalues/:name',
        '/repopropertyset',
        '/artifactsearch/:search/:action',
        '/artifactsearch/pkg/:param',
        '/dependencydeclaration',
        '/artifact/:action',
        '/views/:view',
        '/views/dockerproxy/:repoKey',
        '/crowd',
        '/artifactexport/:action',
        '/artifactimport/:action',
        '/maintenance',
        '/maintenance/:module',
        '/ldap/:action/:key',
        '/ldapgroups/*',
        '/ldapgroups/:name/:action/:username',
        '/pushToBintray/:param1/:param2/:param3/:param4',
        '/distribution/:action',
        '/generalConfig/:param',
        '/generalConfig/data',
        '/signingkeys/:action',
        '/security/trustedKeys',
        '/admin/security/accesstokens/:action',
        '/keystore/:action',
        '/builds/*',
        '/bundles/*',
        '/bundles/:type/:name/:version',
        '/bundles/:type',
        '/bundles/effectivePermission/:repoKey/:name/:version',
        '/userProfile',
        '/userApiKey',
        '/userApiKey/:user',
        '/permissiontargets/:action/:name',
        '/checksums/:action',
        '/filteredResource',
        '/generalTabLicenses/:action',
        '/generalTabLicenses/scanArtifact',
        '/generalTabLicenses/getArchiveLicenseFile',
        '/home/widget/:widgetName',
        '/setMeUp',
        '/setMeUp/mavenSettings',
        '/setMeUp/gradleSettings',
        '/setMeUp/ivySettings',
        '/setMeUp/mavenDistributionManagement',
        '/setMeUp/reverseProxyData',
        '/setMeUp/downloadBuildMaven',
        '/setMeUp/downloadBuildGradle',
        '/setMeUp/downloadBuildIvy',
        '/systemlogs/:action',
        '/admin/repositories',
        '/admin/repositories/:type/info',
        '/admin/repositories/:type/:repoKey',
        '/admin/repositories/availablechoices',
        '/admin/repositories/defaultvalues',
        '/admin/repositories/validatereponame',
        '/admin/repositories/remoteUrlMap',
        '/admin/repositories/availablerepositories',
        '/admin/repositories/indexeravailablerepositories',
        '/admin/repositories/isjcenterconfigured',
        '/admin/repositories/checkbintrayrepauth',
        '/admin/repositories/getdockerstatus',
        '/admin/repolayouts/:action/:name',
        '/admin/repolayouts',
        '/admin/repolayouts/*',
        '/stashResults',
        '/userSupport/:action/:filename',
        '/system/serverTime',
        '/storagesummary/:action/:status',
        '/sshClient',
        '/binary/providers/info',
        '/global/replications/config',
        '/xrayRepo/:action',
        '/xrayConfig',
        '/sumologic/auth_callback/:user/:setup',
        '/admin/security/certificates/:action',
        '/v1/native',
        '/v1/native/packages/show_extra_info',
        '/v1/native/repos/:packageType',
        '/v1/native/packages/:packageType/total_downloads',
        '/v1/native/packages/:packageType/extra_info',
        '/v1/native/versions/:packageType/total_downloads/:repo',
        '/v1/native/versions/:packageType/:repo',
        '/v1/native/versions/:packageType/:dataType',
        '/v1/native/versions/:packageType/:repo',
        '/highAvailability/:id',
        '/builds',
        '/xrayRepo/getNoneIndex',
        '/xrayRepo/getIndex',
        '/xrayRepo/getIntegrationConfig',
        '/generalConfig',
        '/crontime/:cron',
        '/crypto',
        '/securityconfig/joinKey',
        '/groups',
        '/v1/native/versions/npm/dependencies',
        '/v1/native/versions/npm/props',
        '/v1/native/versions/npm/readme',
        '/builds/names',
        '/bundles/repositories',
        '/permissiontargets/allUsersGroups',
        '/builds/repository',
        '/userSupport/listBundles',
        '/auth/screen/systemMessages',
        '/auth/screen/logo',
        '/admin/security/accesstokens/tokens',
        '/generalConfig',
        '/users',
        '/users/:userId',
        '/users/groups',
        '/oauth/user/tokens',
        '/proxies',
        '/proxies/*',
        '/home/widget/artifactCount',
        '/subscription/getUpgradeInfo',
        '/subscription/blockedUsages'
    ],
    POST: [
        '/crowd/refresh',
        '/oauth/provider',
        '/oauth',
        '/users',
        '/treebrowser',
        '/treebrowser/*',
        '/treebrowser/tabsAndActions',
        '/permissiontargets/buildPatterns',
        '/permissiontargets/releaseBundles',
        '/views/dockerv2',
        '/userSupport/generateBundle',
        '/userSupport/listBundles/generateBundle',
        '/admin/security/accesstokens/revokeTokens',
        '/auth/changePassword',
        '/users/userDelete',
        '/securityconfig/unlockUsers',
        '/users/externalStatus',
        '/oauth/:p1/:p2/:p3/:p4',
        '/groups',
        '/groups/*',
        '/groups/delete',
        '/auth/forgotpassword',
        '/auth/resetpassword',
        '/auth/validatetoken',
        '/auth/loginRelatedData',
        '/oauth2/loginRequestPlatform',
        '/auth/logout',
        '/artifactactions/emptytrash',
        '/securityconfig/unlockAllUsers',
        '/users/expirePasswordForAllUsers',
        '/users/unexpirePasswordForAllUsers',
        '/artifactsearch/quick',
        '/artifactsearch/checksum',
        '/artifactsearch/remote',
        '/artifactsearch/trash',
        '/artifactsearch/class',
        '/artifactsearch/property',
        '/artifactsearch/pkg',
        '/artifactsearch/gavc',
        '/artifactsearch/deleteArtifact',
        '/artifactactions/view',
        '/builds/deleteAllBuilds',
        '/builds/buildsDelete',
        '/xrayRepo/removeIndex',
        '/predefinevalues/:name',
        '/repopropertyset',
        '/artifactsearch/:search/:action',
        '/artifactsearch/pkg/:param',
        '/dependencydeclaration',
        '/artifact/:action',
        '/artifact/deploy/multi',
        '/artifact/cancelupload',
        '/artifact/:action/bundle',
        '/views/:view',
        '/crowd',
        '/crowd/test',
        '/crowd/refresh/:name',
        '/crowd/import',
        '/artifactexport/:action',
        '/artifactimport/:action',
        '/maintenance',
        '/maintenance/:module',
        '/ldap/:action/:key',
        '/ldap/reorder',
        '/ldapgroups/*',
        '/ldapgroups/:name/:action/:username',
        '/pushToBintray/:param1/:param2/:param3/:param4',
        '/distribution/:action',
        '/generalConfig/:param',
        '/signingkeys/:action',
        '/security/trustedKeys',
        '/security/trustedKeys/delete',
        '/admin/security/accesstokens/:action',
        '/keystore/:action',
        '/builds/:action/:subAction/:name/:number/:time/:moduleId',
        '/bundles/:type/:name/:version',
        '/bundles/effectivePermission/:repoKey/:name/:version',
        '/userApiKey',
        '/permissiontargets/:action/:name',
        '/checksums/:action',
        '/filteredResource',
        '/generalTabLicenses/:action',
        '/generalTabLicenses/queryCodeCenter',
        '/home/widget/:widgetName',
        '/setMeUp',
        '/setMeUp/*',
        '/setMeUp/mavenSnippet',
        '/setMeUp/gradleSnippet',
        '/setMeUp/ivySnippet',
        '/systemlogs/:action',
        '/admin/repositories',
        '/admin/repositories/testremote',
        '/admin/repositories/discoversmartrepocapabilities',
        '/admin/repositories/testlocalreplication',
        '/admin/repositories/testremotereplication',
        '/admin/repositories/executereplicationnow',
        '/admin/repositories/exeucteremotereplication',
        '/admin/repositories/executeall',
        '/admin/repositories/resolvedrepositories',
        '/admin/repositories/validatelocalreplication',
        '/admin/repositories/:repoType/reorderrepositories',
        '/admin/repositories/createdefaultjcenterrepo',
        '/admin/repositories/testdistributionrule',
        '/admin/repositories/getdockerstatus',
        '/admin/repolayouts/:action/:name',
        '/stashResults',
        '/stashResults/add',
        '/stashResults/subtract',
        '/stashResults/intersect',
        '/stashResults/export',
        '/stashResults/discard',
        '/stashResults/copy',
        '/stashResults/move',
        '/stashResults/copy',
        '/stashResults/move',
        '/oauth/:p1/:p2/:p3/:p4',
        '/userSupport/:action/:filename',
        '/system/serverTime',
        '/storagesummary/:action/:status',
        '/sshClient',
        '/binary/providers/info',
        '/global/replications/config',
        '/xrayRepo/:action',
        '/sumologic/:action',
        '/admin/security/certificates/:action',
        '/v1/native',
        '/v1/native/packages/:packageType',
        '/v1/native/packages/:packageType/count_packages',
        '/v1/native/versions/:packageType',
        '/v1/native/packages/:packageType/summary',
        '/v1/native/packages/:packageType/summary/extra_info',
        '/v1/native/packages/:packageType/extra_info',
        '/v1/native/versions/:packageType/extra_info',
        '/v1/native/versions/:packageType/summary',
        '/v1/native/versions/:packageType/summary/extra_info',
        '/highAvailability/:id',
        '/artifactwatches/:name',
        '/artifactwatches/remove',
        '/artifactactions/:action',
        '/artifactactions/addSha256',
        '/artifactxray',
        '/onboarding/:param',
        '/httpsso',
        '/securityconfig',
        '/securityconfig/lockUsers',
        '/securityconfig/unlockUsers',
        '/securityconfig/unlockAllUsers',
        '/groups/:prefix/:name',
        '/groupPermission',
        '/sshserver',
        '/sshserver/install',
        '/licenses/:action/:name',
        '/manageLicenses/:action',
        '/mail',
        '/crypto/:action',
        '/proxies/:prefix/:key',
        '/reverseProxies/:prefix/:key',
        '/registerlicense',
        '/users/:prefix/:name',
        '/auth/changePassword',
        '/saml/config',
        '/bintraysetting',
        '/propertysets/:action/:name',
        '/propertysets',
        '/propertysets/*',
        '/backup/:key/:action',
        '/browsefilesystem',
        '/systeminfo',
        '/securitydescriptor',
        '/configdescriptor',
        '/indexer',
        '/storagesummary',
        '/repodata',
        '/crontime',
        '/validations/dateformat',
        '/validations/name',
        '/validations/uniqueid',
        '/validations/xmlname',
        '/artifactgeneral',
        '/artifactgeneral/bintray',
        '/artifactgeneral/bintray/dist',
        '/artifactgeneral/artifactsCount',
        '/artifactpermissions',
        '/artifactbuilds',
        '/archiveViewSource',
        '/artifactproperties/:name',
        '/deleteproperties',
    ],
    DELETE: [
        '/oauth/provider/:providerName',
        '/treebrowser',
        '/treebrowser/*',
        '/artifactwatches/:name',
        '/artifactactions/:action',
        '/artifactxray',
        '/onboarding/:param',
        '/httpsso',
        '/securityconfig',
        '/groups/:prefix/:name',
        '/groupPermission',
        '/sshserver',
        '/licenses/:action/:name',
        '/manageLicenses/:action',
        '/mail',
        '/crypto/:action',
        '/proxies/:prefix/:key',
        '/reverseProxies/:prefix/:key',
        '/registerlicense',
        '/users/:prefix/:name',
        '/saml/config',
        '/bintraysetting',
        '/propertysets/:action/:name',
        '/backup/:key/:action',
        '/browsefilesystem',
        '/systeminfo',
        '/securitydescriptor',
        '/configdescriptor',
        '/indexer',
        '/storagesummary',
        '/repodata',
        '/crontime',
        '/validations/dateformat',
        '/validations/name',
        '/validations/uniqueid',
        '/validations/xmlname',
        '/artifactgeneral',
        '/artifactpermissions',
        '/artifactbuilds',
        '/archiveViewSource',
        '/artifactproperties/:name',
        '/predefinevalues/:name',
        '/repopropertyset',
        '/artifactsearch/:search/:action',
        '/artifactsearch/pkg/:param',
        '/dependencydeclaration',
        '/artifact/:action',
        '/views/:view',
        '/crowd',
        '/artifactexport/:action',
        '/artifactimport/:action',
        '/maintenance',
        '/maintenance/:module',
        '/ldap/:action/:key',
        '/ldapgroups/*',
        '/ldapgroups/:name/:action/:username',
        '/pushToBintray/:param1/:param2/:param3/:param4',
        '/distribution/:action',
        '/generalConfig/:param',
        '/signingkeys/:action',
        '/security/trustedKeys',
        '/admin/security/accesstokens/:action',
        '/keystore/:action',
        '/builds/:action/:subAction/:name/:number/:time/:moduleId',
        '/bundles/:type/:name/:version',
        '/bundles/effectivePermission/:repoKey/:name/:version',
        '/userProfile',
        '/permissiontargets/:action/:name',
        '/checksums/:action',
        '/filteredResource',
        '/generalTabLicenses/:action',
        '/home/widget/:widgetName',
        '/setMeUp',
        '/systemlogs/:action',
        '/admin/repositories',
        '/admin/repositories/:repoKey/delete',
        '/admin/repositories/getdockerstatus',
        '/admin/repolayouts/:action/:name',
        '/stashResults',
        '/oauth/:p1/:p2/:p3/:p4',
        '/userSupport/:action/:filename',
        '/system/serverTime',
        '/storagesummary/:action/:status',
        '/sshClient',
        '/binary/providers/info',
        '/global/replications/config',
        '/xrayRepo/:action',
        '/sumologic/:action',
        '/admin/security/certificates/:action',
        '/v1/native',
        '/highAvailability/:id',
        '/userSupport/listBundles/deleteBundle',
        '/users',
    ],
    PUT: [
        '/oauth/provider',
        '/users/:userId',
        '/treebrowser',
        '/treebrowser/*',
        '/artifactwatches/:name',
        '/artifactactions/:action',
        '/artifactxray',
        '/onboarding/:param',
        '/httpsso',
        '/securityconfig',
        '/groups/:prefix/:name',
        '/groupPermission',
        '/sshserver',
        '/licenses/:action/:name',
        '/manageLicenses/:action',
        '/crypto/:action',
        '/proxies/:prefix/:key',
        '/reverseProxies/:prefix/:key',
        '/registerlicense',
        '/users/:prefix/:name',
        '/saml/config',
        '/saml/config/key/public/regenerate',
        '/bintraysetting',
        '/propertysets/:action/:name',
        '/backup/:key/:action',
        '/browsefilesystem',
        '/systeminfo',
        '/securitydescriptor',
        '/configdescriptor',
        '/indexer',
        '/storagesummary',
        '/repodata',
        '/crontime',
        '/validations/dateformat',
        '/validations/name',
        '/validations/uniqueid',
        '/validations/xmlname',
        '/artifactgeneral',
        '/artifactpermissions',
        '/artifactbuilds',
        '/archiveViewSource',
        '/artifactproperties/:name',
        '/predefinevalues/:name',
        '/repopropertyset',
        '/artifactsearch/:search/:action',
        '/artifactsearch/pkg/:param',
        '/dependencydeclaration',
        '/artifact/:action',
        '/views/:view',
        '/artifactexport/:action',
        '/artifactimport/:action',
        '/maintenance',
        '/maintenance/:module',
        '/ldap/:action/:key',
        '/ldapgroups/*',
        '/ldapgroups/:name/:action/:username',
        '/pushToBintray/:param1/:param2/:param3/:param4',
        '/distribution/:action',
        '/generalConfig/:param',
        '/signingkeys/:action',
        '/security/trustedKeys',
        '/admin/security/accesstokens/:action',
        '/keystore/:action',
        '/builds/:action/:subAction/:name/:number/:time/:moduleId',
        '/bundles/:type/:name/:version',
        '/bundles/effectivePermission/:repoKey/:name/:version',
        '/userApiKey',
        '/permissiontargets/:action/:name',
        '/checksums/:action',
        '/filteredResource',
        '/generalTabLicenses/:action',
        '/generalTabLicenses/setLicensesOnPath',
        '/home/widget/:widgetName',
        '/setMeUp',
        '/systemlogs/:action',
        '/admin/repositories',
        '/admin/repositories/savebintrayoauthconfig',
        '/admin/repositories/getdockerstatus',
        '/admin/repolayouts/:action/:name',
        '/stashResults',
        '/oauth/:p1/:p2/:p3/:p4',
        '/userSupport/:action/:filename',
        '/system/serverTime',
        '/storagesummary/:action/:status',
        '/sshClient',
        '/binary/providers/info',
        '/global/replications/config',
        '/xrayRepo/:action',
        '/sumologic/:action',
        '/admin/security/certificates/:action',
        '/v1/native',
        '/highAvailability/:id',
        '/generalConfig',
        '/saml/config/key/public/regenerate',
        '/generalConfig',
        '/xrayRepo/indexRepos',
    ],
    HEAD: [
        '/userApiKey/:user',
        '/userApiKey'
    ],
};


/***/ }),
/* 364 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DISTRIBUTION_PROXY_ROUTES = void 0;
exports.DISTRIBUTION_PROXY_ROUTES = {
    GET: [
        '/api/ui/release_bundle',
        '/api/v1/system/config/xray_config',
        '/api/ui/distribution/distribution/edge_nodes',
        '/api/ui/distribution/edge_nodes',
        '/api/ui/release_bundle/checksum/:checkSum',
        '/api/ui/release_bundle/repositories',
        '/api/ui/pgp/info',
        '/api/ui/release_bundle/*',
        '/api/v1/ui/bundles/target/*',
    ],
    POST: [
        '/api/ui/release_bundle',
        '/api/ui/distribution/:bundle/:version',
        '/api/ui/distribution/:bundle/:version/delete',
        '/ui/release_bundle/spec_preview',
        '/api/v1/system/support/bundle',
        '/api/v1/system/config/xray_config',
        '/api/ui/security/effective_permissions',
    ],
    DELETE: ['/api/ui/distribution/:bundle/:version', '/api/ui/distribution/bundles/target'],
};


/***/ }),
/* 365 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.INSIGHT_PROXY_ROUTES = void 0;
exports.INSIGHT_PROXY_ROUTES = {
    GET: ['/api/v1/tasks/TASKPULLINSIGHT/runs/_latest'],
    POST: [
        '/api/v1/jpu/replication_info',
        '/api/v1/jpu/replication_info_v2',
        '/api/v1/jpu/artifactory_storage_info',
        '/api/v1/metrics/topology_info',
        '/api/v1/jpu/:id/replication_status',
        '/api/v1/metrics/list_repositories',
        '/api/v1/jpu/list_package_types',
        '/api/v1/metrics/storage_summary_info',
        '/api/v1/metrics/list_replication_targets',
        '/api/v1/metrics/replication_metrics_info',
        '/api/v1/metrics/list_replication_source',
        '/api/v1/metrics/distribution_summary_info',
        '/api/v1/metrics/xray_violation_info',
        '/api/v1/metrics/gc_metrics_info',
        '/api/v1/metrics/list_request_apis',
        '/api/v1/metrics/list_request_sources',
        '/api/v1/metrics/list_request_users',
        '/api/v1/metrics/list_node_ids',
        '/api/v1/metrics/artifactory_request',
        '/api/v1/metrics/artifactory_performance',
        '/api/v1/metrics/list_micro_services_performance',
        '/api/v1/metrics/list_node_ids_performance',
        '/api/v1/metrics/xray_performance',
        '/api/v1/metrics/xray_data_metrics',
        '/api/v1/metrics/artifactory_optimization_info',
        '/api/v1/metrics/scanned_xray_components_v2',
        '/api/v1/metrics/artifactory_api_download_upload_size_last_day',
        '/api/v1/metrics/p2p_usage_metrics_info',
    ],
};


/***/ }),
/* 366 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MC_PROXY_ROUTES = void 0;
exports.MC_PROXY_ROUTES = {
    GET: [
        '/api/ui/v1/federation',
        '/api/ui/v1/jpds',
        '/api/ui/v1/jpds/:id',
        '/api/ui/v1/jpds/jfmc',
        '/api/ui/v1/jpds/test_connectivity',
        '/api/ui/v1/jpds/server_details',
        '/api/ui/v1/tags',
        '/api/v4/system/ping',
    ],
    POST: ['/api/ui/v1/jpds', '/api/ui/v1/tags', '/api/v1/system/support/bundle', '/replications', '/api/ui/v1/buckets'],
    DELETE: ['/api/ui/v1/jpds'],
    PUT: ['/api/ui/v1/jpds', '/api/ui/v1/jpds/:unitId', '/api/ui/v1/onboarding'],
};


/***/ }),
/* 367 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PIPELINES_PROXY_ROUTES = void 0;
exports.PIPELINES_PROXY_ROUTES = {
    GET: ['/ui/api/v1/pipe/api/effectivePermissions'],
    POST: ['/ui/api/v1/pipe/api/effectivePermissions', '/api/effectivePermissions'],
    DELETE: ['/ui/api/v1/pipe/api/effectivePermissions'],
    PUT: ['/ui/api/v1/pipe/api/effectivePermissions'],
};


/***/ }),
/* 368 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.XRAY_PROXY_ROUTES = void 0;
exports.XRAY_PROXY_ROUTES = {
    GET: [
        '/ui/unified/component',
        '/ui/webhooks',
        '/ui/ignoreRules',
        '/ui/unified/projects/resources',
        '/ui/policies',
        '/ui/unified/watches',
        '/ui/userIssues/countByWatch/:watchId',
        '/ui/unified/watches/:watchName',
        '/ui/maintenance/retryQueuesCount',
        '/ui/failedMessages/stepStats',
        '/ui/unified/binMgr/indexedReleaseBundles',
        '/ui/unified/binMgr/indexedBuilds',
        '/ui/licensesNames',
        '/ui/general',
        '/ui/monitor',
        '/ui/policies/:name',
        '/ui/configuration/systemParameters',
        '/ui/settings',
        '/ui/integration',
        '/ui/homepage/getXrayVersion',
        '/ui/events/:issueId',
        '/ui/updates/getStatus',
        '/ui/db/sync/generate',
        '/ui/reports/vulnerabilities/spec/:reportId'
    ],
    POST: [
        '/ui/permissions/current',
        '/ui/unified/component',
        '/ui/unified/search',
        '/ui/unified/binMgr/removeIndexedReleaseBundles',
        '/ui/unified/binMgr/setIndexedReleaseBundles',
        '/ui/unified/binMgr/removeIndexedBuilds',
        '/ui/unified/binMgr/setIndexedBuilds',
        '/ui/unified/indexBinMgr',
        '/ui/unified/stats/indexStatus',
        '/ui/policies',
        '/ui/unified/artifactViolationsByPackage',
        '/ui/component/paginatedsearch',
        '/ui/component/details/general',
        '/api/v1/system/support/bundle',
        '/ui/licensesNames',
        '/ui/binMr',
        '/ui/userIssues/details',
        '/ui/component/details/tabs',
        '/ui/component/resources',
        '/ui/component/details/paginatedIssues',
        '/ui/component/navigator',
        '/ui/component/data',
        '/ui/component/aboutBox',
        '/ui/licenses',
        '/ui/events',
        '/ui/component/issueDetails',
        '/ui/impactPath',
        '/ui/scanArtifact',
        '/ui/ignoreRules/allIssues',
        '/ui/ignoreRules',
        '/ui/updates/start',
        '/ui/updates/pause',
        '/ui/updates/abort',
        '/ui/update',
        '/ui/integration/validateAuth',
        '/ui/integration',
        '/ui/maintenance/retry',
        '/ui/failedMessages/retry',
        '/ui/failedMessages/delete',
        '/ui/failedMessages',
        '/ui/unified/historyScan',
        '/ui/unified/watches',
        '/ui/userIssues/byWatch/:watcherId',
        '/ui/webhooks',
        '/ui/unified/component',
        '/ui/reports',
        '/ui/licensesReport/status',
    ],
    DELETE: [
        '/ui/unified/component',
        '/ui/unified/watches/:watchName',
        '/ui/licenses',
        '/ui/events/:customIssueId',
        '/ui/integration/:integrationName',
        '/ui/policies/:name',
        '/ui/ignoreRules/:id',
        '/ui/webhooks/:webHookName',
    ],
    PUT: [
        '/ui/unified/component',
        '/ui/webhooks/:/webhookName',
        '/ui/unified/watches/:watchName',
        '/ui/policies/:name',
        '/ui/license',
        '/ui/events/:issueId',
        '/ui/configuration/systemParameters',
        '/ui/settings',
    ],
};


/***/ }),
/* 369 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EVENTS_PROXY_ROUTES = void 0;
exports.EVENTS_PROXY_ROUTES = {
    GET: ['/api/v1/subscriptions', '/api/v1/subscriptions/:key', '/api/v1/domains'],
    POST: ['/api/v1/subscriptions', '/api/v1/subscriptions/test'],
    DELETE: ['/api/v1/subscriptions/:key'],
    PUT: ['/api/v1/subscriptions/:key'],
};


/***/ }),
/* 370 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.REPLICATOR_PROXY_ROUTES = void 0;
const PREFIX = '/api/v3/p2p';
//http://localhost:8082/replicator/api/v3/p2p/tracker/peers/configuration
exports.REPLICATOR_PROXY_ROUTES = {
    GET: [
        `${PREFIX}/tracker/join`,
        `${PREFIX}/tracker/usage`,
        `${PREFIX}/tracker/peers`,
        `${PREFIX}/tracker/peers/configuration`,
        `${PREFIX}/configuration`,
    ],
    POST: [
        `${PREFIX}/tracker/configuration`,
        `${PREFIX}/tracker/peers/configuration`,
    ],
};


/***/ }),
/* 371 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 372 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.missionControlRouter = void 0;
const express_1 = __webpack_require__(6);
const RouteHandlers_1 = __webpack_require__(19);
const LoggerFactory_1 = __webpack_require__(1);
const RouterProxyUtil_1 = __webpack_require__(21);
const ProxyRoutes_1 = __webpack_require__(24);
const RouteLogger_1 = __webpack_require__(33);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
const router = express_1.Router();
exports.missionControlRouter = router;
const routeHandler = new RouteHandlers_1.MissionControlRouteHandler();
const authenticatedProxyMiddlewares = [routeHandler.addImpersonationTokenToHeader, routeHandler.proxyHandler];
// proxied routes
RouterProxyUtil_1.registerProxiedRoutes(router, ProxyRoutes_1.MC_PROXY_ROUTES, authenticatedProxyMiddlewares);
router.use('/*', RouteLogger_1.routeLogger, authenticatedProxyMiddlewares);
router.use('/*', (req, res) => {
    logger.warn(`Mission Control router, could not find - ${req.method.toUpperCase()} ${req.originalUrl}`);
    res.status(404).send('Not Found');
});


/***/ }),
/* 373 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.insightRouter = void 0;
const express_1 = __webpack_require__(6);
const RouteHandlers_1 = __webpack_require__(19);
const LoggerFactory_1 = __webpack_require__(1);
const RouterProxyUtil_1 = __webpack_require__(21);
const ProxyRoutes_1 = __webpack_require__(24);
const RouteLogger_1 = __webpack_require__(33);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
const router = express_1.Router();
exports.insightRouter = router;
const routeHandler = new RouteHandlers_1.InsightRouteHandler();
const authenticatedProxyMiddlewares = [routeHandler.addImpersonationTokenToHeader, routeHandler.proxyHandler];
// proxied routes
RouterProxyUtil_1.registerProxiedRoutes(router, ProxyRoutes_1.INSIGHT_PROXY_ROUTES, authenticatedProxyMiddlewares);
router.use('/*', RouteLogger_1.routeLogger, authenticatedProxyMiddlewares);
router.use('/*', (req, res) => {
    logger.warn(`Insight router, could not find - ${req.method.toUpperCase()} ${req.originalUrl}`);
    res.status(404).send('Not Found');
});


/***/ }),
/* 374 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.xrayRouter = void 0;
const express_1 = __webpack_require__(6);
const RouteHandlers_1 = __webpack_require__(19);
const Controllers_1 = __webpack_require__(14);
const XrayValidator_1 = __webpack_require__(375);
const LoggerFactory_1 = __webpack_require__(1);
const RouterProxyUtil_1 = __webpack_require__(21);
const ProxyRoutes_1 = __webpack_require__(24);
const RouteLogger_1 = __webpack_require__(33);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
const router = express_1.Router();
exports.xrayRouter = router;
const routeHandler = new RouteHandlers_1.XrayRouteHandler();
const authenticatedProxyMiddlewares = [routeHandler.addImpersonationTokenToHeader, routeHandler.proxyHandler];
// DELETE
router.delete('/system/nodes', XrayValidator_1.XrayValidator.deleteNode(), Controllers_1.XrayController.deleteNode);
// POST
//router.post('/reports', XrayController.getReports);
router.post('/reports/vulnerabilities/', Controllers_1.XrayController.generateVulnerabilityReport);
router.post('/reports/vulnerabilities/:id', Controllers_1.XrayController.getVulnerabilityReportResults);
// proxied routes
RouterProxyUtil_1.registerProxiedRoutes(router, ProxyRoutes_1.XRAY_PROXY_ROUTES, authenticatedProxyMiddlewares);
router.use('/*', RouteLogger_1.routeLogger, authenticatedProxyMiddlewares);
router.use('/*', (req, res) => {
    logger.warn(`Xray router, could not find - ${req.method.toUpperCase()} ${req.originalUrl}`);
    res.status(404).send('Not Found');
});


/***/ }),
/* 375 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.XrayValidator = void 0;
const express_validator_1 = __webpack_require__(15);
class XrayValidator {
    static deleteNode() {
        return [express_validator_1.query('nodeId', 'Must be a string').isString(), express_validator_1.query('serviceId', 'Must be a string').isString()];
    }
}
exports.XrayValidator = XrayValidator;


/***/ }),
/* 376 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.metadataRouter = void 0;
const express = __webpack_require__(6);
const Controllers_1 = __webpack_require__(14);
const Middlewares_1 = __webpack_require__(53);
const router = express.Router();
exports.metadataRouter = router;
router.use(Middlewares_1.omitEmptyBodyNQuery);
router.post('/packages', Controllers_1.MetadataController.searchPackagesHandler);
router.post('/versions', Controllers_1.MetadataController.searchVersionHandler);
router.get('/packages/:packageId', Controllers_1.MetadataController.getSpecificPackageHandler);
router.get('/packages/:packageId/versions/:versionName', Controllers_1.MetadataController.getSpecificVersionHandler);
router.use('/*', (req, res) => {
    res.status(404).send('Not Found');
});


/***/ }),
/* 377 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.omitEmptyBodyNQuery = void 0;
exports.omitEmptyBodyNQuery = (req, res, next) => {
    req.body = omitEmptyOrNull(req.body);
    req.query = omitEmptyOrNull(req.query);
    next();
};
function omitEmptyOrNull(obj) {
    if (typeof obj !== 'object') {
        throw new Error(`Must provide an object, got ${obj}`);
    }
    const clonedObj = Object.assign({}, obj);
    Object.keys(obj).forEach((key) => {
        if (!obj[key] || obj[key] === '') {
            delete clonedObj[key];
        }
        else if (obj[key] && isEmptyArray(obj[key])) {
            delete clonedObj[key];
        }
        else if (obj[key] && isEmptyObject(obj[key])) {
            delete clonedObj[key];
        }
    });
    return clonedObj;
}
function isEmptyArray(item) {
    return Array.isArray(item) && item.length === 0;
}
function isEmptyObject(item) {
    return typeof item === 'object' && Object.entries(item).length === 0 && item.constructor === Object;
}


/***/ }),
/* 378 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandler = void 0;
const LoggerFactory_1 = __webpack_require__(1);
const AuthenticationErrors_1 = __webpack_require__(13);
const Constants_1 = __webpack_require__(0);
const Authentication_1 = __webpack_require__(23);
const access_nodejs_client_1 = __webpack_require__(9);
const grpc_js_1 = __webpack_require__(379);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
function ErrorHandler(err, req, res, _) {
    const isAuthenticated = Authentication_1.AuthenticationController.isAuthenticatedRequest(req);
    if (err instanceof access_nodejs_client_1.GrpcError || isGrpcServiceError(err)) {
        err = err;
        err.statusCode = getGrpcErrorCode(err.code);
        err.message = err.details || 'Not Found';
    }
    // all the clients are using axios so this is used to handle error coming from the client
    if (err.response && err.response.data) {
        const axiosError = err;
        err.statusCode = axiosError.response.status || err.statusCode;
        err.message += axiosError.response.data.reason ? ` || ${axiosError.response.data.reason}` : '';
    }
    const isAuthError = err instanceof AuthenticationErrors_1.AuthError;
    logger[isAuthError ? 'debug' : 'error'](err);
    const message = err.body || err.message;
    if (err.statusCode) {
        if (err instanceof AuthenticationErrors_1.AuthError) {
            return res.sendStatus(Constants_1.STATUS_CODES.UNAUTHORIZED);
        }
        return isAuthenticated ? res.status(err.statusCode).json(message) : res.sendStatus(err.statusCode);
    }
    else {
        return res.sendStatus(Constants_1.STATUS_CODES.INTERNAL_ERROR);
    }
}
exports.ErrorHandler = ErrorHandler;
function getGrpcErrorCode(code) {
    switch (code) {
        case grpc_js_1.status.INVALID_ARGUMENT:
            return Constants_1.STATUS_CODES.BAD_REQUEST;
        case grpc_js_1.status.UNAUTHENTICATED:
            return Constants_1.STATUS_CODES.UNAUTHORIZED;
        case grpc_js_1.status.PERMISSION_DENIED:
            return Constants_1.STATUS_CODES.FORBIDDEN;
        case grpc_js_1.status.UNIMPLEMENTED:
            return Constants_1.STATUS_CODES.NOT_IMPLEMENTED;
        case grpc_js_1.status.NOT_FOUND:
            return Constants_1.STATUS_CODES.NOT_FOUND;
        case grpc_js_1.status.ALREADY_EXISTS:
            return Constants_1.STATUS_CODES.CONFLICT;
        default:
            return Constants_1.STATUS_CODES.INTERNAL_ERROR;
    }
}
function isGrpcServiceError(error) {
    return error instanceof Error && 'code' in error && error.code in grpc_js_1.status;
}


/***/ }),
/* 379 */
/***/ (function(module, exports) {

module.exports = require("@grpc/grpc-js");

/***/ }),
/* 380 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const AuthenticationErrors_1 = __webpack_require__(13);
const Constants_1 = __webpack_require__(0);
const LoggerFactory_1 = __webpack_require__(1);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
const allowUnauthorized = (err, req, res, next) => {
    if (err instanceof AuthenticationErrors_1.AuthError) {
        logger.debug(`ignore auth error for path : ${req.originalUrl}`);
        req.userName = Constants_1.ANONYMOUS;
        next();
    }
    else {
        next(err);
    }
};
exports.default = allowUnauthorized;


/***/ }),
/* 381 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.disableCacheMiddleware = void 0;
exports.disableCacheMiddleware = (req, res, next) => {
    res.header('Surrogate-Control', 'no-store');
    res.header('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0');
    res.header('Pragma', 'no-cache');
    res.header('Expires', '0');
    next();
};


/***/ }),
/* 382 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.accessRouter = void 0;
const express = __webpack_require__(6);
const Controllers_1 = __webpack_require__(14);
const AccessProjectsRoute_1 = __webpack_require__(383);
const AccessRolesRoute_1 = __webpack_require__(387);
const AccessPermissionsRoute_1 = __webpack_require__(388);
const AccessEntitiesRoute_1 = __webpack_require__(125);
const AccessVaultRoute_1 = __webpack_require__(389);
const router = express.Router();
exports.accessRouter = router;
router.get('/accesstokens/tokens', Controllers_1.AccessController.getUserTokens);
router.get('/environments', Controllers_1.AccessController.getEnvironments);
router.use('/permissions', AccessPermissionsRoute_1.accessPermissionsRouter);
router.use('/projects', AccessProjectsRoute_1.accessProjectsRouter);
router.use('/roles', AccessRolesRoute_1.accessRoleRouter);
router.use('/entities', AccessEntitiesRoute_1.accessEntitiesRouter);
router.use('/vault', AccessVaultRoute_1.accessVaultRouter);
router.delete('/api/v1/topology/:serviceId/:nodeId', Controllers_1.AccessController.deleteNode);
router.use('/*', (req, res) => {
    res.status(404).send('Not Found');
});


/***/ }),
/* 383 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.accessProjectsRouter = void 0;
const express = __webpack_require__(6);
const Validators_1 = __webpack_require__(54);
const ProjectsController_1 = __webpack_require__(118);
const router = express.Router();
exports.accessProjectsRouter = router;
router
    .route('/user/:userName/admin')
    .get(Validators_1.AccessValidator.userProjectAdmin(), ProjectsController_1.ProjectsController.isUserProjectAdmin)
    .post(Validators_1.AccessValidator.userProjectAdmin(), ProjectsController_1.ProjectsController.setUserAsProjectAdmin)
    .delete(Validators_1.AccessValidator.userProjectAdmin(), ProjectsController_1.ProjectsController.unsetUserAsProjectAdmin);
router
    .route('/group/:groupName/admin')
    .get(Validators_1.AccessValidator.groupProjectAdmin(), ProjectsController_1.ProjectsController.isGroupProjectAdmin)
    .post(Validators_1.AccessValidator.groupProjectAdmin(), ProjectsController_1.ProjectsController.setGroupAsProjectAdmin)
    .delete(Validators_1.AccessValidator.groupProjectAdmin(), ProjectsController_1.ProjectsController.unsetGroupAsProjectAdmin);


/***/ }),
/* 384 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PipelinesValidator = void 0;
const express_validator_1 = __webpack_require__(15);
class PipelinesValidator {
    static validateId() {
        return [express_validator_1.param('id', 'Must be an integer').toInt().isInt()];
    }
}
exports.PipelinesValidator = PipelinesValidator;


/***/ }),
/* 385 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityValidator = void 0;
const express_validator_1 = __webpack_require__(15);
const Constants_1 = __webpack_require__(0);
class SecurityValidator {
    static getAdminServiceToken() {
        return [
            express_validator_1.query('expiry', 'Must be a positive integer').optional().isInt({ gt: -1 }),
            express_validator_1.oneOf([
                express_validator_1.query('services', 'Must be an array of service names').isArray()
                    .custom((input) => input.every(s => Constants_1.SERVICES_NAMES.includes(s))),
                express_validator_1.query('services', 'Must be an array of service names').isString().isIn(Constants_1.SERVICES_NAMES),
            ]),
        ];
    }
}
exports.SecurityValidator = SecurityValidator;


/***/ }),
/* 386 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessValidator = void 0;
const express_validator_1 = __webpack_require__(15);
const access_nodejs_client_1 = __webpack_require__(9);
const authenticators = Object.values(access_nodejs_client_1.MfaAuthenticator);
class AccessValidator {
    static setMfaConfig() {
        return [express_validator_1.body('authenticators', `must be an array and contain only : ${authenticators}`).custom((input) => {
                return input && Array.isArray(input) && input.every((item) => authenticators.includes(item));
            })];
    }
    static userProjectAdmin() {
        return [express_validator_1.param('userName', `User name must be a non-empty string`).not().isEmpty()];
    }
    static groupProjectAdmin() {
        return [express_validator_1.param('groupName', `Group name must be a non-empty string`).not().isEmpty()];
    }
}
exports.AccessValidator = AccessValidator;


/***/ }),
/* 387 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.accessRoleRouter = void 0;
const express = __webpack_require__(6);
const Controllers_1 = __webpack_require__(14);
const router = express.Router();
exports.accessRoleRouter = router;
router.route('/').get(Controllers_1.RolesController.getAll).post(Controllers_1.RolesController.create);
router.route('/:name').put(Controllers_1.RolesController.edit).get(Controllers_1.RolesController.getByName).delete(Controllers_1.RolesController.delete);


/***/ }),
/* 388 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.accessPermissionsRouter = void 0;
const ElevateUserTokenWithProjectAdmin_1 = __webpack_require__(52);
const Controllers_1 = __webpack_require__(14);
const express = __webpack_require__(6);
const router = express.Router();
exports.accessPermissionsRouter = router;
router.post('/delete', ElevateUserTokenWithProjectAdmin_1.default, Controllers_1.AccessController.deletePermissions);
router.post('/create', ElevateUserTokenWithProjectAdmin_1.default, Controllers_1.AccessController.createPermissions);
router.post('/edit', ElevateUserTokenWithProjectAdmin_1.default, Controllers_1.AccessController.editPermissions);
router.get('/:permissionTarget', Controllers_1.AccessController.getPermission);
router
    .route('/')
    .all(ElevateUserTokenWithProjectAdmin_1.default)
    .get(Controllers_1.AccessController.searchPermission);


/***/ }),
/* 389 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.accessVaultRouter = void 0;
const express = __webpack_require__(6);
const Controllers_1 = __webpack_require__(14);
const router = express.Router();
exports.accessVaultRouter = router;
router.route('/configs/:key').get(Controllers_1.VaultController.getConfig).delete(Controllers_1.VaultController.deleteConfig).put(Controllers_1.VaultController.setConfig);


/***/ }),
/* 390 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.globalSearchRouter = void 0;
const express = __webpack_require__(6);
const GlobalSearchController_1 = __webpack_require__(122);
const GlobalSearchValidator_1 = __webpack_require__(391);
const Middlewares_1 = __webpack_require__(53);
const router = express.Router();
exports.globalSearchRouter = router;
router.use(Middlewares_1.omitEmptyBodyNQuery);
router.post('/builds', GlobalSearchValidator_1.GlobalSearchValidator.searchBuilds, GlobalSearchController_1.GlobalSearchController.searchBuilds);
router.post('/builds/:name', GlobalSearchValidator_1.GlobalSearchValidator.getBuildByName, GlobalSearchController_1.GlobalSearchController.getBuildByName);
router.post('/bundles/distributable', GlobalSearchValidator_1.GlobalSearchValidator.searchDistributableBundles, GlobalSearchController_1.GlobalSearchController.searchDistributableBundles);
router.post('/bundles/distributable/:name', GlobalSearchValidator_1.GlobalSearchValidator.getDistributableBundlesByName, GlobalSearchController_1.GlobalSearchController.getDistributableBundleByName);
router.post('/bundles/received', GlobalSearchValidator_1.GlobalSearchValidator.searchReceivedBundles, GlobalSearchController_1.GlobalSearchController.searchReceivedBundles);
router.post('/bundles/received/:name', GlobalSearchValidator_1.GlobalSearchValidator.getReceivedBundleByName, GlobalSearchController_1.GlobalSearchController.getReceivedBundleByName);
router.use('/*', (req, res) => {
    res.status(404).send('Not Found');
});


/***/ }),
/* 391 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalSearchValidator = void 0;
class GlobalSearchValidator {
    static searchDistributableBundles(req, res, next) {
        // do something,
        // res.send();
        next();
    }
    static searchReceivedBundles(req, res, next) {
        // do something,
        // res.send();
        next();
    }
    static searchBuilds(req, res, next) {
        // do something,
        // res.send();
        next();
    }
    static getBuildByName(req, res, next) {
        // do something,
        // res.send();
        next();
    }
    static getDistributableBundlesByName(req, res, next) {
        // do something,
        // res.send();
        next();
    }
    static getReceivedBundleByName(req, res, next) {
        // do something,
        // res.send();
        next();
    }
}
exports.GlobalSearchValidator = GlobalSearchValidator;


/***/ }),
/* 392 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRouter = void 0;
const express = __webpack_require__(6);
const path = __webpack_require__(8);
const RouteHandlers_1 = __webpack_require__(19);
const Authentication_1 = __webpack_require__(23);
const HttpSsoLoginRouteHandler_1 = __webpack_require__(393);
const Access_1 = __webpack_require__(73);
const Validators_1 = __webpack_require__(54);
const LoginValidator_1 = __webpack_require__(395);
const AllowOnlyAdmin_1 = __webpack_require__(41);
const router = express.Router();
exports.loginRouter = router;
router.get('/logout', Authentication_1.LogoutController.logoutMiddleware);
router.get('/crowd-login', RouteHandlers_1.CrowdLoginRouteHandler.crowdLogin);
router.get('/http-sso-login', HttpSsoLoginRouteHandler_1.HttpSsoLoginRouteHandler.httpSsoLogin);
router.get('/reset-password', (_, res) => {
    res.sendFile(path.join(__dirname, '../../../client/dist/index.html'));
});
router.get('/oauth2/loginResponse', Authentication_1.LoginOauthController.getOauthMiddlewares());
router.post('/saml/loginResponse', Authentication_1.LoginSamlController.getSamlMiddlewares());
router.get('/mfa/enroll/:authenticator', LoginValidator_1.LoginValidator.enroll(), Authentication_1.LoginMfaController.enroll);
router.post('/mfa/verify/:authenticator', LoginValidator_1.LoginValidator.verify(), Authentication_1.LoginMfaController.getMfaMiddlewares());
router.get('/mfa/config', AllowOnlyAdmin_1.default, Access_1.AccessController.getMfaConfig);
router.post('/mfa/config', AllowOnlyAdmin_1.default, Validators_1.AccessValidator.setMfaConfig(), Access_1.AccessController.setMfaConfig);
router.get('/saml/logoutRequest', Authentication_1.SamlController.samlLogoutRequest);
router.get('/reAuthenticationNeeded', Authentication_1.AuthenticationController.uiReAuthenticationNeeded);
router.use('/*', (req, res) => {
    res.status(404).send('Not Found');
});


/***/ }),
/* 393 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpSsoLoginRouteHandler = void 0;
const Authentication_1 = __webpack_require__(23);
const AuthErrorFailedHttpSsoLogin_1 = __webpack_require__(394);
class HttpSsoLoginRouteHandler {
    static async httpSsoLogin(req, res, next) {
        try {
            let authenticatedUser;
            authenticatedUser = await Authentication_1.HttpSsoAuthenticationController.authenticateUsingHttpSso(req, res);
            if (!!authenticatedUser) {
                return res.send(authenticatedUser);
            }
            else {
                return next(new AuthErrorFailedHttpSsoLogin_1.AuthErrorFailedHttpSsoLogin());
            }
        }
        catch (e) {
            next(e);
        }
    }
}
exports.HttpSsoLoginRouteHandler = HttpSsoLoginRouteHandler;


/***/ }),
/* 394 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthErrorFailedHttpSsoLogin = void 0;
const AuthError_1 = __webpack_require__(10);
class AuthErrorFailedHttpSsoLogin extends AuthError_1.AuthError {
    constructor(message = AuthErrorFailedHttpSsoLogin.defaultMessage) {
        super(message);
    }
    static get defaultMessage() {
        return 'Failed to authenticate using http sso';
    }
}
exports.AuthErrorFailedHttpSsoLogin = AuthErrorFailedHttpSsoLogin;


/***/ }),
/* 395 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginValidator = void 0;
const express_validator_1 = __webpack_require__(15);
const access_nodejs_client_1 = __webpack_require__(9);
const Validator_1 = __webpack_require__(396);
const Constants_1 = __webpack_require__(0);
class LoginValidator extends Validator_1.Validator {
    static verify() {
        return [
            express_validator_1.body('otp', 'Bad Request').exists().isInt(),
            LoginValidator.authenticator,
            ...LoginValidator.cookies,
            LoginValidator.handleErrors,
        ];
    }
    static enroll() {
        return [
            LoginValidator.authenticator,
            ...LoginValidator.cookies,
            LoginValidator.handleErrors,
        ];
    }
    static get authenticator() {
        return express_validator_1.param('authenticator', 'Bad Request').exists().isIn(Object.values(access_nodejs_client_1.MfaAuthenticator));
    }
    static get cookies() {
        return [
            express_validator_1.cookie(Constants_1.MFA_COOKIES.data, 'Bad Request').exists(),
            express_validator_1.cookie(Constants_1.MFA_COOKIES.headers, 'Bad Request').exists(),
        ];
    }
    static handleErrors(req, res, next) {
        const errors = express_validator_1.validationResult(req);
        if (!errors.isEmpty()) {
            return res.sendStatus(Constants_1.STATUS_CODES.BAD_REQUEST);
        }
        else {
            next();
        }
    }
}
exports.LoginValidator = LoginValidator;


/***/ }),
/* 396 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Validator = void 0;
const express_validator_1 = __webpack_require__(15);
const Constants_1 = __webpack_require__(0);
class Validator {
    static handleErrors(req, res, next) {
        const errors = express_validator_1.validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(Constants_1.STATUS_CODES.BAD_REQUEST).json({ errors: errors.array() });
        }
        else {
            next();
        }
    }
}
exports.Validator = Validator;


/***/ }),
/* 397 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.systemRouter = void 0;
const express = __webpack_require__(6);
const Controllers_1 = __webpack_require__(14);
const DontAllowAnonymous_1 = __webpack_require__(124);
const SecurityController_1 = __webpack_require__(398);
const AllowOnlyAdmin_1 = __webpack_require__(41);
const Validators_1 = __webpack_require__(54);
const Authentication_1 = __webpack_require__(23);
const HideRouteForOnPrem_1 = __webpack_require__(399);
const router = express.Router();
exports.systemRouter = router;
router.get('/version', Controllers_1.SystemController.getVersion);
router.get('/status/nodes', Controllers_1.SystemController.getSortedServicesNodes);
router.get('/status/ha', DontAllowAnonymous_1.default, Controllers_1.SystemController.getHaStatus);
router.get('/rememberme', Controllers_1.SystemController.getRememberMeEnabledStatus);
router.get('/featuresConfig', Controllers_1.SystemController.getFeaturesConfig);
router.get('/getUserCustomFields', DontAllowAnonymous_1.default, Controllers_1.AccessController.getUserCustomFields);
router.get('/getPasswordPolicy', DontAllowAnonymous_1.default, Controllers_1.AccessController.getPasswordPolicy);
router.post('/setUserCustomFields', DontAllowAnonymous_1.default, Controllers_1.AccessController.setUserCustomFields);
router.get('/services/status', HideRouteForOnPrem_1.default, Controllers_1.SystemController.getServicesStoreStatus);
router.get('/services/status/:serviceName', HideRouteForOnPrem_1.default, Controllers_1.SystemController.getStoreStatusForService);
router.post('/services/activate/:serviceName', HideRouteForOnPrem_1.default, DontAllowAnonymous_1.default, Controllers_1.SystemController.handleStoreActivateAnonError, Controllers_1.SystemController.activateService);
router.put('/support/bundle/:id', Authentication_1.ServicesAuthenticationController.authenticateService, Controllers_1.SystemController.supportBundle);
router.get('/security/token', AllowOnlyAdmin_1.default, Validators_1.SecurityValidator.getAdminServiceToken(), SecurityController_1.SecurityController.getAdminServiceToken);
router.get('/auth/current', Controllers_1.SystemController.getUnifiedCurrentUserInfo);
router.get('/onboarding', Controllers_1.SystemController.getUnifiedOnboardingInfo);
router.get('/onboarding/data/:action/:type/:identifier', Controllers_1.SystemController.sendOnboardingData);
// Live Log Viewer Routes
router.get('/logs/config/:serviceName', Controllers_1.SystemController.getUnifiedLogsInfo);
router.get('/logs/data/:serviceName', Controllers_1.SystemController.getUnifiedLogsData);
router.use('/*', (req, res) => {
    res.status(404).send('Not Found');
});


/***/ }),
/* 398 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityController = void 0;
const Services_1 = __webpack_require__(3);
const express_validator_1 = __webpack_require__(15);
const Constants_1 = __webpack_require__(0);
class SecurityController {
    static async getAdminServiceToken(req, res, _) {
        const errors = express_validator_1.validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() });
            return;
        }
        let { services: servicesQ } = req.query;
        const expiryHours = Number(req.query.expiry) || 0;
        const expirySeconds = expiryHours * 3600;
        servicesQ = typeof servicesQ === 'string' ? [servicesQ] : servicesQ;
        const services = servicesQ.map(serviceName => Constants_1.SERVICE_NAMES_TO_KEY[serviceName]);
        const token = await Services_1.SecurityService.getAdminServiceTokenModel(services, req.userName, expirySeconds);
        res.send(token);
    }
}
exports.SecurityController = SecurityController;


/***/ }),
/* 399 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const PlatformConfiguration_1 = __webpack_require__(11);
const Constants_1 = __webpack_require__(0);
async function HideRouteForOnPrem(req, res, next) {
    if (!PlatformConfiguration_1.default.isSass) {
        return res.sendStatus(Constants_1.STATUS_CODES.NOT_FOUND);
    }
    next();
}
exports.default = HideRouteForOnPrem;


/***/ }),
/* 400 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.artifactoryRouter = void 0;
const express = __webpack_require__(6);
const RouteHandlers_1 = __webpack_require__(19);
const ExpressTimeoutMiddleware_1 = __webpack_require__(50);
const Controllers_1 = __webpack_require__(14);
const LoggerFactory_1 = __webpack_require__(1);
const RouterProxyUtil_1 = __webpack_require__(21);
const ProxyRoutes_1 = __webpack_require__(24);
const RouteLogger_1 = __webpack_require__(33);
const AllowOnlyAdmin_1 = __webpack_require__(41);
const AddUsernameToRequest_1 = __webpack_require__(401);
const Authentication_1 = __webpack_require__(23);
const ElevateUserTokenWithProjectAdmin_1 = __webpack_require__(52);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
const router = express.Router();
exports.artifactoryRouter = router;
const artifactoryRouteHandler = new RouteHandlers_1.ArtifactoryRouteHandler();
const logoutHandler = new RouteHandlers_1.ArtifactoryLogoutRouteHandler();
const crowdConfigRouteHandler = new RouteHandlers_1.ArtifactoryCrowdConfigRouteHandler();
const authenticatedProxyMiddlewares = [
    artifactoryRouteHandler.addImpersonationTokenToHeader,
    artifactoryRouteHandler.proxyHandler
];
// GET
router.get("/auth/current", Controllers_1.ArtifactoryController.getCurrent);
router.get("/auth/screen/footer", Controllers_1.ArtifactoryController.getFooter);
router.get("/securityconfig/joinKey", AllowOnlyAdmin_1.default, Controllers_1.ArtifactoryController.getJoinKey);
router.get("/artifactactions/downloadfolder", ExpressTimeoutMiddleware_1.default.download, artifactoryRouteHandler.addImpersonationTokenToHeader, artifactoryRouteHandler.getNewProxyHandler);
// POST
router.post("/proxies", Controllers_1.ArtifactoryController.createProxyConfig);
router.post("/proxies/deleteProxies", Controllers_1.ArtifactoryController.deleteProxyConfig);
router.post("/xrayRepo/setXrayEnabled", Controllers_1.ArtifactoryController.setXrayEnabled);
router.post("/xrayRepo/setAllowBlockedArtifactsDownload", Controllers_1.ArtifactoryController.setAllowBlockedArtifactsDownload);
router.post("/xrayRepo/setAllowWhenUnavailable", Controllers_1.ArtifactoryController.setAllowWhenUnavailable);
router.post("/auth/changePassword", Controllers_1.ArtifactoryController.changePassword);
router.post("/onboarding/changePassword", Controllers_1.ArtifactoryController.onboardingChangePassword);
router.post("/auth/login", Authentication_1.LoginController.getMiddlewares());
router.post("/auth/logout", AddUsernameToRequest_1.default, logoutHandler.proxyHandler);
router.post("/userProfile", Controllers_1.ArtifactoryController.getUserProfile);
router.post("/userApiKey/:user", Controllers_1.ArtifactoryController.generateUserApiKey);
// PUT
router.put("/mail", Controllers_1.ArtifactoryController.updateMailConfig);
router.put("/proxies/:id", Controllers_1.ArtifactoryController.updateProxyConfig);
router.put("/securityconfig", Controllers_1.ArtifactoryController.updateSecurityConfig);
router.put("/generalConfig", Controllers_1.ArtifactoryController.updateGeneralConfig);
router.put("/crowd", crowdConfigRouteHandler.addImpersonationTokenToHeader, crowdConfigRouteHandler.proxyHandler);
router.put("/saml/config", Authentication_1.SamlController.updatePlatformConfig, authenticatedProxyMiddlewares);
router.put("/userProfile", Controllers_1.ArtifactoryController.setUserProfile);
router.put("/userApiKey/:user", Controllers_1.ArtifactoryController.reGenerateUserApiKey);
// DELETE
router.delete("/system/nodes/:id", Controllers_1.ArtifactoryController.deleteNode);
router.delete("/userApiKey/:user", Controllers_1.ArtifactoryController.deleteUserApiKey);
// proxied routes
router.use("/systemlogs/downloadFile", ExpressTimeoutMiddleware_1.default.download, ...authenticatedProxyMiddlewares);
router.use(['/userSupport/downloadBundle/*', 'userSupport/downloadBundle'], ExpressTimeoutMiddleware_1.default.download, ...authenticatedProxyMiddlewares);
// project admin user groups
router.get("/repodata", async (req, res, next) => {
    var _a;
    if ((_a = req.query) === null || _a === void 0 ? void 0 : _a.permission) {
        return await ElevateUserTokenWithProjectAdmin_1.default(req, res, next);
    }
    next();
}, authenticatedProxyMiddlewares);
router.get(["/builds/(|names|repository)", "/bundles/repositories", "/permissiontargets/(|releaseBundles|buildPatterns|allUsersGroups)"], ElevateUserTokenWithProjectAdmin_1.default, authenticatedProxyMiddlewares);
router.post("/permissiontargets/(|releaseBundles|buildPatterns)", ElevateUserTokenWithProjectAdmin_1.default, authenticatedProxyMiddlewares);
RouterProxyUtil_1.registerProxiedRoutes(router, ProxyRoutes_1.ARTIFACTORY_PROXY_ROUTES, authenticatedProxyMiddlewares);
router.use("/*", RouteLogger_1.routeLogger, authenticatedProxyMiddlewares);
router.use("/*", (req, res) => {
    logger.warn(`Artifactory router, could not find - ${req.method.toUpperCase()} ${req.originalUrl}`);
    res.status(404).send("Not Found");
});


/***/ }),
/* 401 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Constants_1 = __webpack_require__(0);
const TokenUtils_1 = __webpack_require__(101);
const addUsernameToRequest = async (req, _, next) => {
    if (req.userName && req.userName !== Constants_1.ANONYMOUS) {
        next();
    }
    try {
        const { userName } = await TokenUtils_1.default.getUserInfoFromCookies(req.cookies);
        req.userName = userName;
    }
    catch (e) {
        req.userName = Constants_1.ANONYMOUS;
    }
    next();
};
exports.default = addUsernameToRequest;


/***/ }),
/* 402 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.downloadRouter = void 0;
const express = __webpack_require__(6);
const Controllers_1 = __webpack_require__(14);
const ExpressTimeoutMiddleware_1 = __webpack_require__(50);
const Artifactory_1 = __webpack_require__(70);
const router = express.Router();
exports.downloadRouter = router;
const artifactoryRouteHandler = new Artifactory_1.ArtifactoryRouteHandler();
const downloadMiddlewares = [ExpressTimeoutMiddleware_1.default.download, artifactoryRouteHandler.addImpersonationTokenToHeader];
router.get('/export_release_bundle', ...downloadMiddlewares, Controllers_1.DownloadController.exportProxyHandler);
router.get('/', ...downloadMiddlewares, Controllers_1.DownloadController.proxyHandler);
router.use('/*', (req, res) => {
    res.status(404).send('Not Found');
});


/***/ }),
/* 403 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.pipelinesRouter = void 0;
const express_1 = __webpack_require__(6);
const RouteHandlers_1 = __webpack_require__(19);
const Validators_1 = __webpack_require__(54);
const Controllers_1 = __webpack_require__(14);
const LoggerFactory_1 = __webpack_require__(1);
const RouterProxyUtil_1 = __webpack_require__(21);
const ProxyRoutes_1 = __webpack_require__(24);
const RouteLogger_1 = __webpack_require__(33);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
const router = express_1.Router();
exports.pipelinesRouter = router;
const routeHandler = new RouteHandlers_1.PipelinesRouteHandler();
const authenticatedProxyMiddlewares = [routeHandler.addImpersonationTokenToHeader, routeHandler.proxyHandler];
// GET
router.get('/viewPipelinesData', Controllers_1.ViewPipelinesController.getViewPipelines);
router.get('/pipelinesStatistics', Controllers_1.ViewPipelinesController.getPipelinesStatistics);
router.get('/redirectToPipelines', Controllers_1.ViewPipelinesController.redirectToPipelines);
router.get('/pipelineYamlObjects/:id', Controllers_1.ViewPipelinesController.getPipelineYamlObjects);
router.get('/viewRunsData', Controllers_1.ViewPipelinesController.getViewRuns);
router.get('/viewNodePools', Controllers_1.NodePoolsController.getViewNodePools);
router.get('/nodeMetaDataMap', Controllers_1.NodePoolsController.getNodeMetaDataMap);
router.get('/viewNodePool/:id', Controllers_1.NodePoolsController.getNodePoolById);
router.get('/projects', Controllers_1.NodePoolsController.getProjects);
router.get('/viewNode/:id', Controllers_1.NodePoolsController.getViewNode);
router.get('/viewIntegrations', Controllers_1.ViewIntegrationsController.getViewIntegrations);
router.get('/nodeStats/:id', Controllers_1.NodePoolsController.getNodeStats);
router.get('/nodeConsoles/:id', Controllers_1.NodePoolsController.getNodeConsoles);
router.get('/scmIntegrations', Controllers_1.ViewSourcesController.getScmIntegrations);
router.get('/pipelineSources', Controllers_1.ViewSourcesController.getSources);
router.get('/templates', Controllers_1.ViewSourcesController.getTemplates);
router.get('/syncPipelineSource/:id', Controllers_1.ViewSourcesController.syncPipelineSource);
router.get('/viewPipelineSources', Controllers_1.ViewSourcesController.getViewPipelineSources);
router.get('/integrations/:id', Controllers_1.ViewIntegrationsController.getIntegrationById);
router.get('/masterIntegrations', Controllers_1.ViewIntegrationsController.getAllMasterIntegrations);
router.get('/nodes/:id', Validators_1.PipelinesValidator.validateId(), Controllers_1.NodePoolsController.getNodeById);
router.get('/nodeInitScript/:id', Validators_1.PipelinesValidator.validateId(), Controllers_1.NodePoolsController.getNodeInitScriptById);
router.get('/multiBranchSyncLogs', Controllers_1.ViewSourcesController.getSourceSyncLogsByBranch);
router.get('/internalIntegrations', Controllers_1.AdminIntegrationsController.getViewAdminIntegrations);
router.get('/internalIntegrations/:id', Controllers_1.AdminIntegrationsController.getAdminIntegrationById);
router.get('/internalMasterIntegrations', Controllers_1.AdminIntegrationsController.getAllMasterAdminIntegrations);
router.get('/buildPlaneImages', Controllers_1.NodePoolsController.getBuildPlaneImages);
router.get('/pipelineFavorites', Controllers_1.ViewPipelinesController.viewPipelineFavorites);
router.get('/isGraphViewEnabled', Controllers_1.ViewPipelinesController.isGraphViewEnabled);
router.get('/viewExtensionSources', Controllers_1.ExtensionSourcesController.getViewExtensionSources);
router.get('/extensionSources', Controllers_1.ExtensionSourcesController.getExtensionSources);
router.get('/syncExtensionSource/:id', Controllers_1.ExtensionSourcesController.syncExtensionSource);
router.get('/viewExtensions', Controllers_1.ExtensionSourcesController.getViewExtensions);
router.get('/viewTemplateSources', Controllers_1.TemplateSourcesController.getViewTemplateSources);
router.get('/templateSources', Controllers_1.TemplateSourcesController.getTemplateSources);
router.get('/syncTemplateSource/:id', Controllers_1.TemplateSourcesController.syncTemplateSource);
router.get('/viewTemplates', Controllers_1.TemplateSourcesController.getViewTemplates);
router.get('/checkIsProjectAdmin', Controllers_1.AdminIntegrationsController.checkIsProjectAdmin);
// POST
router.post('/nodePools', Controllers_1.NodePoolsController.createNodePool);
router.post('/integrations', Controllers_1.ViewIntegrationsController.createIntegration);
router.post('/nodes', Controllers_1.NodePoolsController.createNode);
router.post('/pipelineSources', Controllers_1.ViewSourcesController.createPipelineSource);
router.post('/internalIntegrations', Controllers_1.AdminIntegrationsController.createAdminIntegration);
router.post('/pipelineFavorites', Controllers_1.ViewPipelinesController.createIdentityFavorite);
router.post('/toggleFavorites', Controllers_1.ViewPipelinesController.toggleFavorites);
router.post('/toggleGraphView', Controllers_1.ViewPipelinesController.toggleGraphView);
router.post('/extensionSources', Controllers_1.ExtensionSourcesController.createExtensionSource);
router.post('/templateSources', Controllers_1.TemplateSourcesController.createTemplateSource);
// PUT
router.put('/nodes/:id', Validators_1.PipelinesValidator.validateId(), Controllers_1.NodePoolsController.updateNode);
router.put('/integrations/:id', Controllers_1.ViewIntegrationsController.updateIntegration);
router.put('/nodePools/:id', Controllers_1.NodePoolsController.updateNodePool);
router.put('/pipelineSources/:id', Controllers_1.ViewSourcesController.updatePipelineSource);
router.put('/extensionSources/:id', Controllers_1.ExtensionSourcesController.updateExtensionSource);
router.put('/extensions/:id', Controllers_1.ExtensionSourcesController.updateExtension);
router.put('/templateSources/:id', Controllers_1.TemplateSourcesController.updateTemplateSource);
// router.put('/templates/:id', TemplateSourcesController.updateTemplate);
// DELETE
router.delete('/nodes/:id', Validators_1.PipelinesValidator.validateId(), Controllers_1.NodePoolsController.deleteNode);
router.delete('/nodePools/:id', Validators_1.PipelinesValidator.validateId(), Controllers_1.NodePoolsController.deleteNodePool);
router.delete('/integrations/:id', Validators_1.PipelinesValidator.validateId(), Controllers_1.ViewIntegrationsController.deleteIntegration);
router.delete('/pipelineSources/:id', Controllers_1.ViewSourcesController.deletePipelineSource);
router.delete('/pipelineFavorites/:id', Controllers_1.ViewPipelinesController.deleteFavorite);
router.delete('/extensionSources/:id', Controllers_1.ExtensionSourcesController.deleteExtensionSource);
router.delete('/templateSources/:id', Controllers_1.TemplateSourcesController.deleteTemplateSource);
// proxied routes
RouterProxyUtil_1.registerProxiedRoutes(router, ProxyRoutes_1.PIPELINES_PROXY_ROUTES, authenticatedProxyMiddlewares);
router.use('/*', RouteLogger_1.routeLogger, authenticatedProxyMiddlewares);
router.use('/*', (req, res) => {
    logger.warn(`Pipelines router, could not find - ${req.method.toUpperCase()} ${req.originalUrl}`);
    res.status(404).send('Not Found');
});


/***/ }),
/* 404 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.projectsRouter = void 0;
const express = __webpack_require__(6);
const Controllers_1 = __webpack_require__(14);
const router = express.Router();
exports.projectsRouter = router;
router
    .route('/')
    .get(Controllers_1.ProjectsController.getAll)
    .post(Controllers_1.ProjectsController.create);
router
    .route('/:projectKey')
    .get(Controllers_1.ProjectsController.get)
    .put(Controllers_1.ProjectsController.edit)
    .delete(Controllers_1.ProjectsController.delete);
router
    .route('/:projectKey/roles')
    .get(Controllers_1.ProjectsController.roles().getAll)
    .post(Controllers_1.ProjectsController.roles().create);
router.put('/resources/assign', Controllers_1.ProjectsController.assignReposToProject);
router.put('/resources/share', Controllers_1.ProjectsController.shareRepoWithProjects);
router
    .route('/:projectKey/roles/:roleName')
    .get(Controllers_1.ProjectsController.roles().get)
    .put(Controllers_1.ProjectsController.roles().edit)
    .delete(Controllers_1.ProjectsController.roles().delete);
router.patch('/:projectKey/description', Controllers_1.ProjectsController.editDescription);
router.patch('/:projectKey/users', Controllers_1.ProjectsController.editUsers);
router.post('/:projectKey/users', Controllers_1.ProjectsController.editUsers);
router.patch('/:projectKey/groups', Controllers_1.ProjectsController.editGroups);
router.post('/:projectKey/groups', Controllers_1.ProjectsController.editGroups);
router.delete('/:projectKey/users', Controllers_1.ProjectsController.batchDeleteUsersFromProject);
router.delete('/:projectKey/groups', Controllers_1.ProjectsController.batchDeleteGroupsFromProject);
router.delete('/:projectKey/users/:userName', Controllers_1.ProjectsController.deleteUserFromProject);
router.delete('/:projectKey/groups/:groupName', Controllers_1.ProjectsController.deleteGroupFromProject);


/***/ }),
/* 405 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.eventRouter = void 0;
const express_1 = __webpack_require__(6);
const RouteHandlers_1 = __webpack_require__(19);
const Controllers_1 = __webpack_require__(14);
const LoggerFactory_1 = __webpack_require__(1);
const RouterProxyUtil_1 = __webpack_require__(21);
const ProxyRoutes_1 = __webpack_require__(24);
const AllowOnlyAdmin_1 = __webpack_require__(41);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
const router = express_1.Router();
exports.eventRouter = router;
const routeHandler = new RouteHandlers_1.EventRouteHandler();
const authenticatedProxyMiddlewares = [AllowOnlyAdmin_1.default, routeHandler.addImpersonationTokenToHeader, routeHandler.proxyHandler];
// GET
// todo:: this route is not used by the UI - check why
router.get('/subscriptions', AllowOnlyAdmin_1.default, Controllers_1.EventController.getSubscriptions);
router.get('/subscriptions/:subscriptionKey', AllowOnlyAdmin_1.default, Controllers_1.EventController.getSpecificSubscription);
// proxied routes
RouterProxyUtil_1.registerProxiedRoutes(router, ProxyRoutes_1.EVENTS_PROXY_ROUTES, authenticatedProxyMiddlewares);
router.use('/*', (req, res) => {
    logger.warn(`Event router, could not find - ${req.method.toUpperCase()} ${req.originalUrl}`);
    res.status(404).send('Not Found');
});


/***/ }),
/* 406 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.replicatorRouter = void 0;
const express_1 = __webpack_require__(6);
const RouteHandlers_1 = __webpack_require__(19);
const LoggerFactory_1 = __webpack_require__(1);
const RouterProxyUtil_1 = __webpack_require__(21);
const ProxyRoutes_1 = __webpack_require__(24);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
const router = express_1.Router();
exports.replicatorRouter = router;
const routeHandler = new RouteHandlers_1.ReplicatorRouteHandler();
// Adds impersonation token & proxy
const authenticatedProxyMiddlewares = [routeHandler.addImpersonationTokenToHeader, routeHandler.proxyHandler];
// Proxied routes
RouterProxyUtil_1.registerProxiedRoutes(router, ProxyRoutes_1.REPLICATOR_PROXY_ROUTES, authenticatedProxyMiddlewares);
router.use('/*', (req, res) => {
    logger.warn(`Replicator router, could not find - ${req.method.toUpperCase()} ${req.originalUrl}`);
    res.status(404).send('Not Found');
});


/***/ }),
/* 407 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.apiRouter = void 0;
const express = __webpack_require__(6);
const AuthenticationFilters_1 = __webpack_require__(113);
const Constants_1 = __webpack_require__(0);
const _1 = __webpack_require__(112);
const Middlewares_1 = __webpack_require__(53);
const ServiceAvailability_1 = __webpack_require__(408);
const { DISTRIBUTION, METADATA, INSIGHT, MISSION_CONTROL, XRAY, PIPELINES, EVENT, REPLICATOR } = Constants_1.SERVICES;
const router = express.Router();
exports.apiRouter = router;
router.use(Middlewares_1.disableCacheMiddleware);
router.use(...AuthenticationFilters_1.default);
router.use('/auth', _1.loginRouter);
router.use(Constants_1.NODE_SERVER_PATH.distribution, ServiceAvailability_1.ServiceAvailability(DISTRIBUTION.KEY), _1.distributionRouter);
router.use(Constants_1.NODE_SERVER_PATH.artifactory, _1.artifactoryRouter);
router.use(Constants_1.NODE_SERVER_PATH.xray, ServiceAvailability_1.ServiceAvailability(XRAY.KEY), _1.xrayRouter);
router.use(Constants_1.NODE_SERVER_PATH.mc, ServiceAvailability_1.ServiceAvailability(MISSION_CONTROL.KEY), _1.missionControlRouter);
router.use(Constants_1.NODE_SERVER_PATH.insight, ServiceAvailability_1.ServiceAvailability(INSIGHT.KEY), _1.insightRouter);
router.use(Constants_1.NODE_SERVER_PATH.pipelines, ServiceAvailability_1.ServiceAvailability(PIPELINES.KEY), _1.pipelinesRouter);
router.use(Constants_1.NODE_SERVER_PATH.metadata, ServiceAvailability_1.ServiceAvailability(METADATA.KEY), _1.metadataRouter);
router.use(Constants_1.NODE_SERVER_PATH.event, ServiceAvailability_1.ServiceAvailability(EVENT.KEY), _1.eventRouter);
router.use(Constants_1.NODE_SERVER_PATH.replicator, ServiceAvailability_1.ServiceAvailability(REPLICATOR.KEY), _1.replicatorRouter);
router.use(Constants_1.NODE_SERVER_PATH.access, _1.accessRouter);
router.use('/projects', _1.projectsRouter);
router.use('/download', _1.downloadRouter);
router.use('/global-search', _1.globalSearchRouter);
router.use('/system', _1.systemRouter);


/***/ }),
/* 408 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceAvailability = void 0;
const MothershipTopologyService_1 = __webpack_require__(30);
const ServiceUnavailableError_1 = __webpack_require__(409);
function ServiceAvailability(serviceName) {
    return async (req, res, next) => {
        const isTopologyAvailable = !!await MothershipTopologyService_1.default.get();
        const exists = MothershipTopologyService_1.default.serviceExists(serviceName);
        if (!isTopologyAvailable || exists) {
            return next();
        }
        next(new ServiceUnavailableError_1.ServiceUnavailableError());
    };
}
exports.ServiceAvailability = ServiceAvailability;


/***/ }),
/* 409 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceUnavailableError = void 0;
const CustomError_1 = __webpack_require__(16);
const STATUS_CODES_1 = __webpack_require__(42);
class ServiceUnavailableError extends CustomError_1.CustomError {
    constructor() {
        super('Service Unavailable');
        this._errorCode = 0;
        this._statusCode = STATUS_CODES_1.default.SERVICE_UNAVAILABLE;
    }
}
exports.ServiceUnavailableError = ServiceUnavailableError;


/***/ }),
/* 410 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(411), exports);


/***/ }),
/* 411 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.writeNewrelicToLog = exports.writeNewRelicJsFile = exports.shouldActivateNewRelic = void 0;
const config = __webpack_require__(4);
const LoggerFactory_1 = __webpack_require__(1);
const Constants_1 = __webpack_require__(0);
const NewRelicConfigTemplate_1 = __webpack_require__(412);
const Constants_2 = __webpack_require__(0);
const logger = LoggerFactory_1.LoggerFactory.getLogger(__filename);
// todo add logging rotation
function shouldActivateNewRelic() {
    var _a;
    const isNewrelicEnabled = ((_a = config.get('shared.newrelic.enabled')) === null || _a === void 0 ? void 0 : _a.toString().toLowerCase()) === 'true';
    const hasAppName = !!config.get('shared.newrelic.appName');
    return isNewrelicEnabled && hasAppName;
}
exports.shouldActivateNewRelic = shouldActivateNewRelic;
function writeNewRelicJsFile() {
    var _a;
    logger.info(`writing ${Constants_1.NEW_RELIC.FILE_NAME} file`);
    NewRelicConfigTemplate_1.default.app_name = `${config.get('shared.newrelic.appName')}_${Constants_2.SERVICES.FRONTEND.TYPE}`;
    NewRelicConfigTemplate_1.default.agent_enabled = shouldActivateNewRelic();
    NewRelicConfigTemplate_1.default.license_key = config.get('shared.newrelic.licenseKey');
    NewRelicConfigTemplate_1.default.distributed_tracing = (_a = config.get('shared.newrelic.distributedTracerEnabled')) !== null && _a !== void 0 ? _a : false;
    __webpack_require__(22).writeFileSync(__webpack_require__(8).join(__dirname, Constants_1.NEW_RELIC.FILE_NAME), `exports.config = ${JSON.stringify(NewRelicConfigTemplate_1.default)};`);
}
exports.writeNewRelicJsFile = writeNewRelicJsFile;
function writeNewrelicToLog(error) {
    if (error) {
        logger.debug(`Newrelic isn't connected. error: ${error.message}`);
    }
    else {
        logger.info(`Application connected -  app: ${NewRelicConfigTemplate_1.default.app_name}`);
    }
}
exports.writeNewrelicToLog = writeNewrelicToLog;


/***/ }),
/* 412 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    app_name: '',
    license_key: '',
    agent_enabled: false,
    distributed_tracing: false,
    logging: {
        enabled: false,
    },
    allow_all_headers: true,
    attributes: {
        exclude: [
            'request.headers.cookie',
            'request.headers.authorization',
            'request.headers.proxyAuthorization',
            'request.headers.setCookie*',
            'request.headers.x*',
            'response.headers.cookie',
            'response.headers.authorization',
            'response.headers.proxyAuthorization',
            'response.headers.setCookie*',
            'response.headers.x*',
        ],
    },
};


/***/ }),
/* 413 */
/***/ (function(module, exports) {

module.exports = require("node-schedule");

/***/ }),
/* 414 */
/***/ (function(module, exports) {

module.exports = require("newrelic");

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map