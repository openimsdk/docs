"use strict";
exports.id = 5213;
exports.ids = [5213];
exports.modules = {

/***/ 25213:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_name_tag: () => (/* binding */ DyteNameTag)
/* harmony export */ });
/* harmony import */ var _index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65733);
/* harmony import */ var _string_8aa800b0_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22906);
/* harmony import */ var _index_29bc5d44_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20336);
/* harmony import */ var _default_icon_pack_a3227c63_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96633);





const dyteNameTagCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:inline-flex;-webkit-user-select:none;-moz-user-select:none;user-select:none;align-items:center;padding-top:var(--dyte-space-1, 4px);padding-bottom:var(--dyte-space-1, 4px);padding-left:var(--dyte-space-1\\.5, 6px);padding-right:var(--dyte-space-1\\.5, 6px);font-size:14px;border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88))}span.name{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1}::slotted(dyte-audio-visualizer[slot='start']){margin-right:var(--dyte-space-1\\.5, 6px)}::slotted(dyte-audio-visualizer[slot='end']){margin-left:var(--dyte-space-1\\.5, 6px)}:host([size='sm']){font-size:12px;--tw-bg-opacity:0.6}";

const DyteNameTag = class {
  constructor(hostRef) {
    (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.participant = undefined;
    this.meeting = undefined;
    this.size = undefined;
    this.maxLength = 20;
    this.isScreenShare = false;
    this.iconPack = _default_icon_pack_a3227c63_js__WEBPACK_IMPORTED_MODULE_2__.d;
    this.t = (0,_index_29bc5d44_js__WEBPACK_IMPORTED_MODULE_1__.u)();
    this.length = 13;
  }
  sizeChanged(size) {
    this.length = size === 'sm' ? 8 : 13;
  }
  formatNameTag(name, isSelf) {
    return !this.isScreenShare
      ? isSelf
        ? `${(0,_string_8aa800b0_js__WEBPACK_IMPORTED_MODULE_3__.s)(name, this.length - 3)} (${this.t('you')})`
        : (0,_string_8aa800b0_js__WEBPACK_IMPORTED_MODULE_3__.s)(name, this.length)
      : isSelf
        ? `${this.t('screen')} - ${(0,_string_8aa800b0_js__WEBPACK_IMPORTED_MODULE_3__.s)(name, this.length - 3)} (${this.t('you')})`
        : `${this.t('screen')} - ${(0,_string_8aa800b0_js__WEBPACK_IMPORTED_MODULE_3__.s)(name, this.length)}`;
  }
  render() {
    var _a, _b, _c;
    const name = (0,_string_8aa800b0_js__WEBPACK_IMPORTED_MODULE_3__.f)(((_a = this.participant) === null || _a === void 0 ? void 0 : _a.name) || '');
    const isSelf = ((_b = this.participant) === null || _b === void 0 ? void 0 : _b.id) === ((_c = this.meeting) === null || _c === void 0 ? void 0 : _c.self.id);
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.H, { title: name }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: "start" }), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "name" }, this.formatNameTag(name, isSelf)), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: "end" })));
  }
  static get watchers() { return {
    "size": ["sizeChanged"]
  }; }
};
DyteNameTag.style = dyteNameTagCss;




/***/ }),

/***/ 22906:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ sanitizeLink),
/* harmony export */   f: () => (/* binding */ formatName),
/* harmony export */   g: () => (/* binding */ getInitials),
/* harmony export */   h: () => (/* binding */ hasOnlyEmojis),
/* harmony export */   s: () => (/* binding */ shorten)
/* harmony export */ });
/**
 * Shorten a string upto a maximum length of characters and add `...` as suffix if it exceeds the maximum length
 * @param str The The string you want to shorten
 * @param maxLength Maximum length of character
 * @returns Formatted shortedned string
 */
const shorten = (str, maxLength = 20) => {
  if (str == null)
    return '';
  if (str.length > maxLength) {
    return `${str.substring(0, maxLength)}...`;
  }
  return str;
};
/**
 * Checks if a given string consists of only emojis.
 *
 * However this classifies a string with numbers as emoji as well.
 * Which works in our favour for now in chat as it enlarges messages with just numbers.
 * @param str String on which to perform the check on
 * @returns A Boolean value which indicates if string consists of only emojis
 */
const hasOnlyEmojis = (str) => {
  const num = /^\d+$/;
  const re = /^\p{Emoji}+$/u;
  return re.test(str) && !num.test(str);
};
const sanitizeLink = (link) => {
  // TODO: needs more work
  if (link === null || link === void 0 ? void 0 : link.trim().toLowerCase().startsWith('javascript:')) {
    return 'https://dyte.io';
  }
  return link;
};
/**
 * Formats a given name and returns **Participant** for unnamed participants.
 * @param name Name of participant
 * @returns Name to use in the UI
 */
const formatName = (name) => {
  name = name === null || name === void 0 ? void 0 : name.trim();
  if (name === '')
    return 'Participant';
  return name;
};
function getInitials(name, maxInitials = 2) {
  // removes any character that is not a letter, number or whitespace
  const cleanedName = name.replace(/[^\u00BF-\u1FFF\u2C00-\uD7FF\w\s]/g, '');
  const words = cleanedName.trim().split(/\s+/).slice(0, maxInitials);
  return words
    .map((word) => word.charAt(0))
    .join('')
    .toUpperCase();
}




/***/ })

};
;