"use strict";
exports.id = 7394;
exports.ids = [7394];
exports.modules = {

/***/ 57394:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_polls: () => (/* binding */ DytePolls)
/* harmony export */ });
/* harmony import */ var _index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65733);
/* harmony import */ var _default_ui_config_e3c1cd21_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37692);
/* harmony import */ var _pipStore_5d9dd8bf_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21237);
/* harmony import */ var _livestream_8c64d895_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24555);
/* harmony import */ var _default_icon_pack_a3227c63_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96633);
/* harmony import */ var _index_29bc5d44_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20336);
/* harmony import */ var _graceful_storage_33bc316d_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(60804);
/* harmony import */ var _scroll_8cc79809_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(82321);









const dytePollsCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.scrollbar{scrollbar-width:thin;scrollbar-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))\n    var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar{height:var(--dyte-space-1\\.5, 6px);width:var(--dyte-space-1\\.5, 6px);border-radius:9999px;background-color:var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar-thumb{border-radius:9999px;background-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))}:host{margin-top:var(--dyte-space-2, 8px);display:flex;height:100%;width:100%;flex-direction:column;font-size:14px}*{box-sizing:border-box}.ctr{box-sizing:border-box;padding:var(--dyte-space-3, 12px);padding-top:var(--dyte-space-0, 0px);display:flex;flex:1 1 0%;flex-direction:column}.polls-view{overflow-y:auto;flex:1 1 0%;flex-basis:0}";

const DytePolls = class {
  constructor(hostRef) {
    (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.onPollsUpdate = (data) => {
      this.polls = [...data.polls];
    };
    this.meeting = undefined;
    this.config = _default_ui_config_e3c1cd21_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.size = undefined;
    this.iconPack = _default_icon_pack_a3227c63_js__WEBPACK_IMPORTED_MODULE_4__.d;
    this.t = (0,_index_29bc5d44_js__WEBPACK_IMPORTED_MODULE_5__.u)();
    this.create = false;
    this.polls = undefined;
  }
  connectedCallback() {
    this.meetingChanged(this.meeting);
  }
  disconnectedCallback() {
    var _a;
    if (this.meeting == null)
      return;
    (_a = this.meeting.polls) === null || _a === void 0 ? void 0 : _a.removeListener('pollsUpdate', this.onPollsUpdate);
  }
  meetingChanged(meeting) {
    if (meeting == undefined)
      return;
    if (meeting && !meeting.polls)
      return;
    this.polls = [...meeting.polls.items];
    meeting.polls.addListener('pollsUpdate', this.onPollsUpdate);
    this.onCreate = async (data) => {
      this.create = false;
      await meeting.polls.create(data.question, data.options, data.anonymous, data.hideVotes);
    };
    this.onVote = async (id, index) => {
      await meeting.polls.vote(id, index);
    };
  }
  toggleCreateState() {
    this.create = !this.create;
  }
  componentDidRender() {
    (0,_scroll_8cc79809_js__WEBPACK_IMPORTED_MODULE_7__.s)(this.pollEl);
  }
  render() {
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "ctr", part: "container" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "polls-view scrollbar", ref: (el) => (this.pollEl = el), part: "polls" }, this.polls.map((item) => {
      var _a;
      return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-poll", { key: item.id, poll: item, onDyteVotePoll: (e) => {
          this.onVote(e.detail.id, e.detail.index);
        }, self: (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.self.userId, iconPack: this.iconPack, t: this.t, permissions: this.meeting.self.permissions }));
    }), this.create && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-poll-form", { part: "poll-form", onDyteCreatePoll: (e) => {
        this.onCreate(e.detail);
      }, iconPack: this.iconPack, t: this.t }))), this.meeting.self.permissions.polls.canCreate && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { kind: "wide", onClick: () => this.toggleCreateState(), variant: this.create ? 'secondary' : 'primary', part: "button", iconPack: this.iconPack, t: this.t }, this.create ? this.t('polls.cancel') : this.t('polls.create'))))));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"]
  }; }
};
DytePolls.style = dytePollsCss;




/***/ }),

/***/ 82321:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ smoothScrollToBottom)
/* harmony export */ });
/**
 * Scroll to bottom of an element.
 *
 * Works in all browsers - just that in Safari, the smooth scrolling doesn't work.
 * @param el The bottom of which element you want to scroll down to
 */
const smoothScrollToBottom = (el, smooth = true) => {
  if (el == null)
    return;
  el.scrollTo({ top: el.scrollHeight, behavior: smooth ? 'smooth' : 'auto' });
};




/***/ })

};
;