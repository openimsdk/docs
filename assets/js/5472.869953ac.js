"use strict";
exports.id = 5472;
exports.ids = [5472];
exports.modules = {

/***/ 25472:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_plugin_main: () => (/* binding */ DytePluginMain)
/* harmony export */ });
/* harmony import */ var _index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65733);
/* harmony import */ var _default_icon_pack_a3227c63_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96633);
/* harmony import */ var _index_29bc5d44_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20336);




const dytePluginMainCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:flex;height:100%;width:100%;flex-direction:column;overflow:hidden;border-radius:var(--dyte-border-radius-lg, 12px);color:rgb(var(--dyte-colors-text-1000, 255 255 255))}header{display:flex;height:var(--dyte-space-8, 32px);align-items:center;justify-content:space-between;padding-left:var(--dyte-space-3, 12px);padding-right:var(--dyte-space-3, 12px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity))}header>div{display:flex;align-items:center}dyte-button{display:flex;height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px);flex-direction:column;align-items:center;border-radius:9999px}dyte-button dyte-icon{height:var(--dyte-space-3, 12px);width:var(--dyte-space-3, 12px)}iframe{display:block;flex:1 1 0%;margin:var(--dyte-space-0, 0px);border-width:var(--dyte-border-width-none, 0);border-style:none;padding:var(--dyte-space-0, 0px);outline:2px solid transparent;outline-offset:2px;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-video-bg, 24 24 24) / var(--tw-bg-opacity))}.iframe-container{position:relative;height:100%;width:100%}.block-inputs{position:absolute;z-index:10;height:100%;width:100%;border-left-width:var(--dyte-border-width-none, 0);border-top-width:var(--dyte-border-width-lg, 4px);border-style:solid;--tw-border-opacity:1;border-color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-border-opacity))}iframe{height:100%;width:100%}";

const DytePluginMain = class {
  constructor(hostRef) {
    (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.meeting = undefined;
    this.plugin = undefined;
    this.iconPack = _default_icon_pack_a3227c63_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.t = (0,_index_29bc5d44_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    this.canClosePlugin = false;
    this.canControl = true;
    this.viewModeEnabled = false;
  }
  componentDidLoad() {
    this.meetingChanged(this.meeting);
    this.pluginChanged(this.plugin);
  }
  meetingChanged(meeting) {
    var _a;
    if (meeting != null) {
      const permissions = meeting.self.permissions;
      const canEditACL = permissions.isV2
        ? permissions.plugins.canEditConfig
        : permissions.plugins.canEditAcl;
      if (permissions.plugins.config !== undefined) {
        // camelcase ts normalizer in webcore also normalize uuid
        // temp hack
        Object.keys(permissions.plugins.config || {}).forEach((k) => {
          permissions.plugins.config[k.toLowerCase()] = permissions.plugins.config[k];
        });
        const normalizedPluginId = this.plugin.id.replace(new RegExp('-', 'g'), '');
        const whitelistedControl = (((_a = permissions.plugins.config[normalizedPluginId]) === null || _a === void 0 ? void 0 : _a.defaultAccess) || 'blacklist') ===
          'whitelist';
        if (this.plugin.enabledBy === meeting.self.userId || canEditACL) {
          this.canControl = true;
        }
        else if (whitelistedControl) {
          this.canControl = false;
        }
        this.viewModeEnabled = !this.canControl;
      }
      (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.w)(() => {
        this.canClosePlugin = meeting.self.permissions.plugins.canClose;
      });
    }
  }
  pluginChanged(plugin) {
    this.toggleViewModeListener = (enable) => {
      this.viewModeEnabled = enable;
    };
    if (plugin != null) {
      plugin.addPluginView(this.iframeEl);
      plugin.addListener('toggleViewMode', this.toggleViewModeListener);
    }
  }
  disconnectedCallback() {
    var _a;
    (_a = this.plugin) === null || _a === void 0 ? void 0 : _a.removeListener('toggleViewMode', this.toggleViewModeListener);
  }
  render() {
    if (this.plugin == null)
      return null;
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("header", { part: "header" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, this.plugin.name), this.canClosePlugin && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { kind: "icon", onClick: () => this.plugin.deactivate(), part: "button", iconPack: this.iconPack, t: this.t }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.dismiss, iconPack: this.iconPack, t: this.t }))))), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: 'iframe-container' }, !this.canControl && (this.viewModeEnabled ? (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "block-inputs" }) : null), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("iframe", { ref: (el) => (this.iframeEl = el), part: "iframe" }))));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"],
    "plugin": ["pluginChanged"]
  }; }
};
DytePluginMain.style = dytePluginMainCss;




/***/ })

};
;