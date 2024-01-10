"use strict";
exports.id = 3570;
exports.ids = [3570];
exports.modules = {

/***/ 3570:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_viewer_count: () => (/* binding */ DyteViewerCount)
/* harmony export */ });
/* harmony import */ var _index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65733);
/* harmony import */ var _default_icon_pack_a3227c63_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96633);
/* harmony import */ var _index_29bc5d44_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20336);
/* harmony import */ var _livestream_8c64d895_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24555);





const dyteViewerCountCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{margin-left:var(--dyte-space-2, 8px);margin-right:var(--dyte-space-2, 8px);display:inline-flex;height:var(--dyte-space-10, 40px);-webkit-user-select:none;-moz-user-select:none;user-select:none;align-items:center}:host([size='sm']){margin-left:var(--dyte-space-1, 4px);margin-right:var(--dyte-space-1, 4px);font-size:12px}dyte-icon{margin-right:var(--dyte-space-1, 4px);height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px)}:host([size='sm']) dyte-icon{height:var(--dyte-space-4, 16px);width:var(--dyte-space-4, 16px)}";

const DyteViewerCount = class {
  constructor(hostRef) {
    (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.disconnectMeeting = (meeting) => {
      var _a;
      if (meeting != null && this.countListener != null) {
        (_a = meeting.livestream) === null || _a === void 0 ? void 0 : _a.removeListener('viewerCountUpdate', this.countListener);
      }
    };
    this.meeting = undefined;
    this.iconPack = _default_icon_pack_a3227c63_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.t = (0,_index_29bc5d44_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    this.viewerCount = 0;
  }
  connectedCallback() {
    this.meetingChanged(this.meeting);
  }
  disconnectedCallback() {
    this.disconnectMeeting(this.meeting);
  }
  meetingChanged(meeting, oldMeeting) {
    var _a;
    this.disconnectMeeting(oldMeeting);
    if (meeting != null) {
      this.countListener = () => {
        var _a;
        this.viewerCount = (_a = meeting.livestream) === null || _a === void 0 ? void 0 : _a.viewerCount;
      };
      this.countListener();
      (_a = meeting.livestream) === null || _a === void 0 ? void 0 : _a.addListener('viewerCountUpdate', this.countListener);
    }
  }
  render() {
    if (!(0,_livestream_8c64d895_js__WEBPACK_IMPORTED_MODULE_3__.s)(this.meeting))
      return null;
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.H, { tabIndex: 0, role: "log", "aria-label": `${this.viewerCount} ${this.t('viewers')}` }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.viewers, tabIndex: -1, "aria-hidden": true, part: "icon", iconPack: this.iconPack, t: this.t }), this.viewerCount, " ", this.t('viewers')));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"]
  }; }
};
DyteViewerCount.style = dyteViewerCountCss;




/***/ })

};
;