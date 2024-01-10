"use strict";
exports.id = 969;
exports.ids = [969];
exports.modules = {

/***/ 60969:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_livestream_indicator: () => (/* binding */ DyteLivestreamIndicator)
/* harmony export */ });
/* harmony import */ var _index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65733);
/* harmony import */ var _pipStore_5d9dd8bf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21237);
/* harmony import */ var _livestream_8c64d895_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24555);
/* harmony import */ var _default_icon_pack_a3227c63_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96633);
/* harmony import */ var _index_29bc5d44_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20336);
/* harmony import */ var _graceful_storage_33bc316d_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60804);







const dyteLivestreamIndicatorCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{margin-left:var(--dyte-space-2, 8px);margin-right:var(--dyte-space-2, 8px);display:block}:host[size='sm']{margin-left:var(--dyte-space-1, 4px);margin-right:var(--dyte-space-1, 4px)}.indicator{display:flex;flex-direction:row;align-items:center;min-width:var(--dyte-space-14, 56px) !important;font-size:14px;--tw-text-opacity:1;color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-text-opacity))}dyte-icon{margin-right:var(--dyte-space-1, 4px);height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px);-webkit-animation:blink 4s linear infinite;animation:blink 4s linear infinite}:host([size='sm']) dyte-icon{height:var(--dyte-space-4, 16px);width:var(--dyte-space-4, 16px)}:host([size='sm']) .indicator span{display:none}@-webkit-keyframes blink{0%,10%{opacity:0}11%,100%{opacity:1}}@keyframes blink{0%,10%{opacity:0}11%,100%{opacity:1}}";

const DyteLivestreamIndicator = class {
  constructor(hostRef) {
    (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.setIsLivestreaming = (state) => {
      this.isLivestreaming = state === 'LIVESTREAMING';
    };
    this.meeting = undefined;
    this.size = undefined;
    this.t = (0,_index_29bc5d44_js__WEBPACK_IMPORTED_MODULE_4__.u)();
    this.isLivestreaming = undefined;
    this.iconPack = _default_icon_pack_a3227c63_js__WEBPACK_IMPORTED_MODULE_3__.d;
  }
  connectedCallback() {
    this.meetingChanged(this.meeting);
  }
  disconnectedCallback() {
    var _a, _b;
    (_b = (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.livestream) === null || _b === void 0 ? void 0 : _b.removeListener('livestreamUpdate', this.setIsLivestreaming);
  }
  meetingChanged(meeting) {
    var _a, _b;
    if (meeting == null)
      return;
    this.setIsLivestreaming((_a = this.meeting.livestream) === null || _a === void 0 ? void 0 : _a.state);
    (_b = this.meeting.livestream) === null || _b === void 0 ? void 0 : _b.on('livestreamUpdate', this.setIsLivestreaming);
  }
  render() {
    if (!(0,_livestream_8c64d895_js__WEBPACK_IMPORTED_MODULE_2__.s)(this.meeting) || !this.isLivestreaming)
      return;
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "indicator", "aria-label": this.t('livestream.indicator'), part: "indicator" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.start_livestream }), "LIVE")));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"]
  }; }
};
DyteLivestreamIndicator.style = dyteLivestreamIndicatorCss;




/***/ })

};
;