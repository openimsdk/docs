"use strict";
exports.id = 3182;
exports.ids = [3182];
exports.modules = {

/***/ 43182:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_spotlight_indicator: () => (/* binding */ DyteSpotlightIndicator)
/* harmony export */ });
/* harmony import */ var _index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65733);
/* harmony import */ var _index_29bc5d44_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20336);
/* harmony import */ var _default_icon_pack_a3227c63_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96633);




const dyteSpotlightIndicatorCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{font-size:12px}#sync-button{flex-direction:row;border-radius:var(--dyte-border-radius-sm, 4px);padding-left:var(--dyte-space-1, 4px);display:flex;height:var(--dyte-space-16, 64px);width:100%;align-items:center;justify-content:center;margin-bottom:var(--dyte-space-2, 8px);font-size:12px;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity))}:host([size='sm']) #sync-button{flex-direction:column-reverse;display:flex;height:var(--dyte-space-10, 40px);width:var(--dyte-space-16, 64px);align-items:center;justify-content:center}:host([size='md']) #sync-button{flex-direction:column-reverse;display:flex;height:var(--dyte-space-16, 64px);width:var(--dyte-space-16, 64px);align-items:center;justify-content:center}:host([size='lg']) #sync-button{flex-direction:row;display:flex;height:var(--dyte-space-8, 32px);width:var(--dyte-space-16, 64px);align-items:center;justify-content:center}@media (orientation: portrait){:host([size='lg']) #sync-button{flex-direction:column-reverse;display:flex;height:var(--dyte-space-16, 64px);width:var(--dyte-space-16, 64px);align-items:center;justify-content:center}:host([size='sm']) #sync-button{height:var(--dyte-space-10, 40px);width:var(--dyte-space-16, 64px);flex-direction:row}}#sync-button>dyte-icon{max-height:14px}#sync-button dyte-icon{--tw-text-opacity:1;color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-text-opacity))}#sync-button.active dyte-icon{color:rgb(var(--dyte-colors-text-1000, 255 255 255))}div{align-content:center;line-height:2rem}dyte-icon{height:var(--dyte-space-6, 24px);width:var(--dyte-space-8, 32px)}#sync-button.active{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-success, 98 165 4) / var(--tw-bg-opacity))}";

const DyteSpotlightIndicator = class {
  constructor(hostRef) {
    (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.meeting = undefined;
    this.iconPack = _default_icon_pack_a3227c63_js__WEBPACK_IMPORTED_MODULE_2__.d;
    this.t = (0,_index_29bc5d44_js__WEBPACK_IMPORTED_MODULE_1__.u)();
    this.size = undefined;
    this.canSpotlight = undefined;
    this.isSpotlighted = undefined;
  }
  connectedCallback() {
    this.meetingChanged(this.meeting);
  }
  meetingChanged(meeting) {
    var _a, _b;
    if (meeting != null) {
      this.canSpotlight = meeting.self.permissions.canSpotlight;
      this.isSpotlighted = (_b = (_a = meeting.spotlight) === null || _a === void 0 ? void 0 : _a.spotlighted) !== null && _b !== void 0 ? _b : false;
    }
  }
  updateSpotlightState(spotlighted) {
    var _a;
    try {
      (_a = this.meeting.spotlight) === null || _a === void 0 ? void 0 : _a.setSpotlighted(spotlighted);
      this.isSpotlighted = spotlighted;
    }
    catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  }
  render() {
    if (!this.canSpotlight)
      return;
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tooltip", { size: 'md', iconPack: this.iconPack, t: this.t, label: this.t('remote_access.indicator') }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { id: "sync-button", class: {
        tab: true,
        active: this.isSpotlighted,
      }, onClick: () => this.updateSpotlightState(!this.isSpotlighted) }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "name" }, "Sync"), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { id: "icon", iconPack: this.iconPack, t: this.t, icon: this.isSpotlighted ? this.iconPack.checkmark : this.iconPack.warning, tabIndex: -1, "aria-hidden": true })))));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"]
  }; }
};
DyteSpotlightIndicator.style = dyteSpotlightIndicatorCss;




/***/ })

};
;