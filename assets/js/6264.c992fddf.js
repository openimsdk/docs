"use strict";
exports.id = 6264;
exports.ids = [6264];
exports.modules = {

/***/ 86264:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_recording_indicator: () => (/* binding */ DyteRecordingIndicator)
/* harmony export */ });
/* harmony import */ var _index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65733);
/* harmony import */ var _default_icon_pack_a3227c63_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96633);
/* harmony import */ var _index_29bc5d44_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20336);




const dyteRecordingIndicatorCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{margin-left:var(--dyte-space-2, 8px);margin-right:var(--dyte-space-2, 8px);display:block}:host[size='sm']{margin-left:var(--dyte-space-1, 4px);margin-right:var(--dyte-space-1, 4px)}.indicator{display:flex;flex-direction:row;align-items:center;font-size:14px;--tw-text-opacity:1;color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-text-opacity))}dyte-icon{margin-right:var(--dyte-space-1, 4px);height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px);-webkit-animation:blink 4s linear infinite;animation:blink 4s linear infinite}:host([size='sm']) dyte-icon{height:var(--dyte-space-4, 16px);width:var(--dyte-space-4, 16px)}:host([size='sm']) .indicator span{display:none}@-webkit-keyframes blink{0%,10%{opacity:0}11%,100%{opacity:1}}@keyframes blink{0%,10%{opacity:0}11%,100%{opacity:1}}";

const DyteRecordingIndicator = class {
  constructor(hostRef) {
    (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.setIsRecording = (recordingState) => {
      this.isRecording = recordingState === 'RECORDING';
    };
    this.meeting = undefined;
    this.size = undefined;
    this.t = (0,_index_29bc5d44_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    this.iconPack = _default_icon_pack_a3227c63_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.isRecording = undefined;
  }
  connectedCallback() {
    this.meetingChanged(this.meeting);
  }
  disconnectedCallback() {
    var _a;
    (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.recording.removeListener('recordingUpdate', this.updateRecordingStatus);
  }
  meetingChanged(meeting) {
    if (meeting != null) {
      this.setIsRecording(meeting.recording.recordingState);
      this.updateRecordingStatus = (recordingState) => {
        this.setIsRecording(recordingState);
      };
      meeting.recording.addListener('recordingUpdate', this.updateRecordingStatus);
    }
  }
  render() {
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.H, null, this.isRecording && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "indicator", "aria-label": this.t('recording.indicator'), part: "indicator" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.recording, "aria-hidden": true, tabIndex: -1, part: "icon", iconPack: this.iconPack, t: this.t }), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, this.t('recording.label'))))));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"]
  }; }
};
DyteRecordingIndicator.style = dyteRecordingIndicatorCss;




/***/ })

};
;