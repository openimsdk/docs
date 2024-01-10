"use strict";
exports.id = 6041;
exports.ids = [6041];
exports.modules = {

/***/ 96041:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_logo: () => (/* binding */ DyteLogo)
/* harmony export */ });
/* harmony import */ var _index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65733);
/* harmony import */ var _index_29bc5d44_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20336);
/* harmony import */ var _default_ui_config_e3c1cd21_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37692);
/* harmony import */ var _pipStore_5d9dd8bf_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21237);
/* harmony import */ var _livestream_8c64d895_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24555);
/* harmony import */ var _graceful_storage_33bc316d_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60804);







const dyteLogoCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:flex;flex-direction:column;align-items:center;justify-content:center;color:rgb(var(--dyte-colors-text-1000, 255 255 255));height:100%;width:auto}svg,img{height:100%;width:auto}.brand-color{--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-text-opacity))}";

const DyteLogo = class {
  constructor(hostRef) {
    (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.logoUrl = undefined;
    this.config = _default_ui_config_e3c1cd21_js__WEBPACK_IMPORTED_MODULE_2__.d;
    this.meeting = undefined;
    this.t = (0,_index_29bc5d44_js__WEBPACK_IMPORTED_MODULE_1__.u)();
  }
  connectedCallback() {
    this.configChanged(this.config);
    this.meetingChanged(this.meeting);
  }
  configChanged(config) {
    var _a;
    if (config != null) {
      const configLogo = (_a = config === null || config === void 0 ? void 0 : config.designTokens) === null || _a === void 0 ? void 0 : _a.logo;
      // NOTE(callmetarush): Only update logo if not passed via prop
      if (configLogo != null && this.logoUrl == null) {
        this.logoUrl = configLogo;
      }
    }
  }
  meetingChanged(meeting) {
    var _a, _b, _c, _d;
    if (meeting != null) {
      const meetingLogo = (_d = (_c = (_b = (_a = meeting.self) === null || _a === void 0 ? void 0 : _a.config) === null || _b === void 0 ? void 0 : _b.header) === null || _c === void 0 ? void 0 : _c.elements) === null || _d === void 0 ? void 0 : _d.logo;
      if (meetingLogo != null && this.logoUrl == null) {
        this.logoUrl = meetingLogo;
      }
    }
  }
  render() {
    if (!this.logoUrl || this.logoUrl === '') {
      return null;
    }
    const logo = this.logoUrl;
    const text = this.t('logo');
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("img", { src: logo, alt: text })));
  }
  static get watchers() { return {
    "config": ["configChanged"],
    "meeting": ["meetingChanged"]
  }; }
};
DyteLogo.style = dyteLogoCss;




/***/ })

};
;