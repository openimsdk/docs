"use strict";
exports.id = 5305;
exports.ids = [5305,8421];
exports.modules = {

/***/ 84764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ ChatHead)
/* harmony export */ });
/* harmony import */ var _index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65733);
/* harmony import */ var _date_8c24cfe1_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72729);
/* harmony import */ var _string_8aa800b0_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22906);




const ChatHead = ({ name, time, now }) => {
  return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "head" },
    (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "name" }, (0,_string_8aa800b0_js__WEBPACK_IMPORTED_MODULE_1__.s)((0,_string_8aa800b0_js__WEBPACK_IMPORTED_MODULE_1__.f)(name), 20)),
    (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "time", title: (0,_date_8c24cfe1_js__WEBPACK_IMPORTED_MODULE_2__.f)(time) }, (0,_date_8c24cfe1_js__WEBPACK_IMPORTED_MODULE_2__.e)(time, now))));
};




/***/ }),

/***/ 46871:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ TextMessageView)
/* harmony export */ });
/* harmony import */ var _index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65733);


function parseRichText(text) {
  const boldPattern = /\*([^*]*)\*/g;
  const italicsPattern = /_([^_]*)_/g;
  const strikethroughPattern = /~([^~]*)~/g;
  const linkPattern = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
  let boldText = boldPattern.exec(text);
  while (boldText) {
    text = text.replace(boldText[0], `<b>${boldText[1]}</b>`);
    boldText = boldPattern.exec(text);
  }
  let italicsText = italicsPattern.exec(text);
  while (italicsText) {
    text = text.replace(italicsText[0], `<i>${italicsText[1]}</i>`);
    italicsText = italicsPattern.exec(text);
  }
  let strikethroughText = strikethroughPattern.exec(text);
  while (strikethroughText) {
    text = text.replace(strikethroughText[0], `<s>${strikethroughText[1]}</s>`);
    strikethroughText = strikethroughPattern.exec(text);
  }
  text = text
    .split(' ')
    .map((word) => {
    if (linkPattern.test(word)) {
      const res = linkPattern.exec(word);
      return word.replace(res[0], `<a class="link" href="${res[0]}">${res[0]}</a>`);
    }
    return word;
  })
    .join(' ');
  text = text
    .split('\n')
    .map((line) => {
    return line
      .split(' ')
      .map((word, idx) => {
      if (word === '>' && (idx === 0 || word[idx - 1] === '>')) {
        return `<span class="block-quote"></span>`;
      }
      return word;
    })
      .join(' ');
  })
    .join('\n');
  text = text
    .split('\n')
    .map((line) => `<p>${line}</p>`)
    .join('\n');
  return text;
}
const TextMessageView = ({ message }) => {
  return (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", { innerHTML: parseRichText(message) });
};




/***/ }),

/***/ 72729:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ differenceInMinutes),
/* harmony export */   e: () => (/* binding */ elapsedDuration),
/* harmony export */   f: () => (/* binding */ formatDateTime)
/* harmony export */ });
const differenceInMinutes = (oldDate, newDate) => {
  // difference in milliseconds
  const diff = newDate.getTime() - oldDate.getTime();
  return Math.round(Math.abs(diff / 1000 / 60));
};
const elapsedDuration = (oldDate, newDate) => {
  const minutes = differenceInMinutes(oldDate, newDate);
  if (minutes < 2) {
    return 'just now';
  }
  if (minutes < 60) {
    return `${minutes}m ago`;
  }
  const hours = Math.round(minutes / 60);
  if (minutes < 90) {
    return `about ${hours}h ago`;
  }
  if (hours < 24) {
    return `${hours}h ago`;
  }
  const days = Math.round(hours / 24);
  if (days < 7) {
    return `${days}d ago`;
  }
  const weeks = Math.round(days / 7);
  return `${weeks}w ago`;
};
const formatDateTime = (date) => {
  return date.toDateString() + ' ' + date.toLocaleTimeString();
};




/***/ }),

/***/ 48421:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_chat_message: () => (/* binding */ DyteChatMessage),
/* harmony export */   dyte_file_message: () => (/* binding */ DyteFileMessage),
/* harmony export */   dyte_image_message: () => (/* binding */ DyteImageMessage),
/* harmony export */   dyte_paginated_list: () => (/* binding */ DytePaginatedList),
/* harmony export */   dyte_text_message: () => (/* binding */ DyteTextMessage)
/* harmony export */ });
/* harmony import */ var _index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65733);
/* harmony import */ var _pipStore_5d9dd8bf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21237);
/* harmony import */ var _livestream_8c64d895_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24555);
/* harmony import */ var _default_icon_pack_a3227c63_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96633);
/* harmony import */ var _index_29bc5d44_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20336);
/* harmony import */ var _graceful_storage_33bc316d_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60804);
/* harmony import */ var _ChatHead_176c5d04_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(84764);
/* harmony import */ var _string_8aa800b0_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(22906);
/* harmony import */ var _file_a11c6818_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(96396);
/* harmony import */ var _store_56e792d0_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(46503);
/* harmony import */ var _scroll_8cc79809_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(82321);
/* harmony import */ var _isObjectLike_b5266db7_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(49797);
/* harmony import */ var _TextMessage_5d3b1de6_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(46871);















const dyteChatMessageCss = ".message-wrapper{display:flex;gap:var(--dyte-space-2, 8px);margin-left:var(--dyte-space-4, 16px);margin-right:var(--dyte-space-4, 16px)}.message-wrapper.align-right{flex-direction:row-reverse}.avatar{display:none}.file-picker{display:none}.message{position:relative;display:flex}.show-on-hover dyte-menu{visibility:hidden}.show-on-hover:hover dyte-menu{visibility:visible}.align-right .message{justify-content:flex-end;margin-left:auto}.align-right .message .head{margin-right:var(--dyte-space-1, 4px);margin-left:var(--dyte-space-0, 0px);flex-direction:row-reverse;gap:var(--dyte-space-4, 16px)}.align-right .message dyte-text-message .bubble,.align-right .message dyte-image-message .bubble,.align-right .message dyte-file-message .bubble{padding-right:var(--dyte-space-5, 20px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-on-brand-1000, var(--dyte-colors-text-1000, 255 255 255)))}.align-right .message .actions dyte-icon{color:rgb(var(--dyte-colors-text-on-brand-1000, var(--dyte-colors-text-1000, 255 255 255)))}.align-right dyte-menu{left:auto;right:var(--dyte-space-0, 0px)}.head{margin-bottom:var(--dyte-space-2, 8px);margin-left:var(--dyte-space-1, 4px);display:flex;align-items:center;gap:var(--dyte-space-2, 8px)}.head .name{font-size:14px;font-weight:600}.head .time{font-size:12px;color:rgb(var(--dyte-colors-text-800, 255 255 255 / 0.76))}dyte-menu{position:absolute;left:var(--dyte-space-0, 0px);top:var(--dyte-space-6, 24px);border-radius:var(--dyte-border-radius-lg, 12px)}dyte-menu dyte-icon{height:var(--dyte-space-4, 16px);width:var(--dyte-space-4, 16px);cursor:pointer}[is-continued] dyte-menu{top:var(--dyte-space-2, 8px)}.actions{display:flex;align-items:center;justify-content:center;padding:var(--dyte-space-0\\.5, 2px);border-width:var(--dyte-border-width-none, 0);border-style:none;background-color:transparent}.actions dyte-icon{height:var(--dyte-space-4, 16px);width:var(--dyte-space-4, 16px)}.body{margin-top:var(--dyte-space-1, 4px);margin-bottom:var(--dyte-space-1, 4px);overflow-wrap:break-word;font-size:14px;line-height:1.375}.body .emoji{font-size:24px}.body.bubble{margin-top:var(--dyte-space-0, 0px);margin-bottom:var(--dyte-space-1, 4px);padding-top:var(--dyte-space-3, 12px);padding-bottom:var(--dyte-space-3, 12px);padding-left:var(--dyte-space-5, 20px);padding-right:var(--dyte-space-5, 20px);overflow-wrap:break-word;font-size:14px;line-height:1.375;border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity))}.body.bubble p{margin:var(--dyte-space-0, 0px)}p{margin-top:var(--dyte-space-0, 0px);margin-bottom:var(--dyte-space-3, 12px)}dyte-text-message,dyte-image-message,dyte-file-message{display:block;font-family:var(--dyte-font-family, sans-serif);color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88));box-sizing:border-box}*[is-continued]{margin-top:var(--dyte-space-0, 0px)}.image{position:relative;height:var(--dyte-space-40, 160px);max-width:var(--dyte-space-64, 256px);cursor:pointer}.image img{display:none;height:100%;width:100%;border-radius:var(--dyte-border-radius-sm, 4px);-o-object-fit:cover;object-fit:cover}.image .image-spinner{display:flex;height:100%;width:100%;flex-direction:column;align-items:center;justify-content:center;border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity))}.image .image-spinner dyte-spinner{--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-text-opacity))}.image .image-errored{display:flex;height:100%;width:100%;flex-direction:column;align-items:center;justify-content:center;border-radius:var(--dyte-border-radius-sm, 4px);background-color:rgba(var(--dyte-colors-danger, 255 45 45) / 0.1);--tw-text-opacity:1;color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-text-opacity))}.image .actions{display:none;height:var(--dyte-space-8, 32px);align-items:center;position:absolute;top:var(--dyte-space-2, 8px);right:var(--dyte-space-2, 8px);border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255));overflow:hidden;--tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.image .actions .action{height:var(--dyte-space-8, 32px);width:var(--dyte-space-8, 32px);border-radius:var(--dyte-border-radius-none, 0);border-width:var(--dyte-border-width-none, 0);border-style:none;background-color:transparent;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.image .actions .action:hover{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity))}.image.loaded img{display:block}.image.loaded .image-spinner{display:none}.image:hover .actions,.image:focus .actions{display:flex}.file{display:flex;align-items:center;gap:var(--dyte-space-1, 4px);padding-left:var(--dyte-space-2, 8px);padding-right:var(--dyte-space-2, 8px);padding-top:var(--dyte-space-1\\.5, 6px);padding-bottom:var(--dyte-space-1\\.5, 6px);border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}.file .file-data{flex:1 1 0%}.file .file-data .name{word-break:break-all;color:rgb(var(--dyte-colors-text-1000, 255 255 255));overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1}.file .file-data .file-data-split{margin-top:var(--dyte-space-0\\.5, 2px);display:flex;align-items:center;font-size:12px}.file .file-data .file-data-split .ext{margin-right:var(--dyte-space-2, 8px);text-transform:uppercase;overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1}.file .file-data .file-data-split .divider{height:var(--dyte-space-4, 16px);width:var(--dyte-space-0\\.5, 2px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity))}.file .file-data .file-data-split .size{margin-left:var(--dyte-space-2, 8px)}a{--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-text-opacity));-webkit-text-decoration-line:none;text-decoration-line:none}a:hover{-webkit-text-decoration-line:underline;text-decoration-line:underline}.new-chat-marker{display:flex;width:100%;align-items:center;gap:var(--dyte-space-2, 8px);--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-text-opacity))}.new-chat-marker::before{content:'';height:1px;flex:1 1 0%;background-color:rgba(var(--dyte-colors-brand-300, 73 124 253) / 0.5)}.show-new-messages-ctr{pointer-events:none;display:flex;justify-content:flex-end;padding:var(--dyte-space-3, 12px);z-index:0;margin-top:calc(var(--dyte-space-14, 56px) * -1)}.show-new-messages{pointer-events:auto;--tw-translate-y:calc(var(--dyte-space-6, 24px) * -1);transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity:0;transition-property:color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.show-new-messages.active{--tw-translate-y:var(--dyte-space-0, 0px);transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity:1}.block-quote{--tw-border-spacing-x:1px;--tw-border-spacing-y:1px;border-spacing:var(--tw-border-spacing-x) var(--tw-border-spacing-y);border-top-width:var(--dyte-border-width-none, 0);border-bottom-width:var(--dyte-border-width-none, 0);border-left-width:var(--dyte-border-width-md, 2px);border-right-width:var(--dyte-border-width-none, 0);border-style:solid;border-left-color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88));--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity));padding:var(--dyte-space-0\\.5, 2px);padding-left:var(--dyte-space-2, 8px);margin-bottom:var(--dyte-space-2, 8px) !important;border-radius:var(--dyte-border-radius-sm, 4px);border-top-left-radius:var(--dyte-border-radius-none, 0);border-bottom-left-radius:var(--dyte-border-radius-none, 0)}.link{color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88))}.align-right .block-quote{border-color:rgb(var(--dyte-colors-text-on-brand-600, var(--dyte-colors-text-600, 255 255 255 / 0.52)));--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-bg-opacity))}.align-right .link{color:rgb(var(--dyte-colors-text-on-brand-1000, var(--dyte-colors-text-1000, 255 255 255)))}.align-right .image .actions dyte-icon{--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-text-opacity))}@media (orientation: landscape) and (min-width: 400px){.avatar{display:flex;width:var(--dyte-space-10, 40px)}.avatar dyte-avatar{height:var(--dyte-space-9, 36px);width:var(--dyte-space-9, 36px)}.message{width:75%}}";

const DyteChatMessage = class {
  constructor(hostRef) {
    (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.edit = (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "edit", 7);
    this.reply = (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "reply", 7);
    this.delete = (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "delete", 7);
    this.renderMessage = () => {
      switch (this.message.type) {
        case 'text':
          return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "is-continued": this.isContinued, key: this.message.id }, this.isUnread && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "new-chat-marker", part: "new-chat-marker" }, this.t('chat.new'))), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-text-message", { message: this.message, now: this.now, isContinued: this.isContinued, "data-timestamp": this.message.time.getTime(), iconPack: this.iconPack, t: this.t, showBubble: true })));
        case 'image':
          return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "is-continued": this.isContinued, key: this.message.id }, this.isUnread && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "new-chat-marker", part: "new-chat-marker" }, this.t('chat.new'))), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-image-message", { message: this.message, now: this.now, isContinued: this.isContinued, iconPack: this.iconPack, "data-timestamp": this.message.time.getTime(), t: this.t, showBubble: true })));
        case 'file':
          return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "is-continued": this.isContinued, key: this.message.id }, this.isUnread && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "new-chat-marker", part: "new-chat-marker" }, this.t('chat.new'))), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-file-message", { message: this.message, now: this.now, isContinued: this.isContinued, iconPack: this.iconPack, t: this.t, "data-timestamp": this.message.time.getTime(), showBubble: true })));
      }
    };
    this.onReply = () => {
      this.reply.emit(this.message);
    };
    this.onDelete = () => {
      this.delete.emit(this.message);
    };
    this.onEdit = async () => {
      this.edit.emit(this.message);
    };
    this.isTouchDevice = () => {
      return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    };
    this.message = undefined;
    this.isContinued = undefined;
    this.isUnread = undefined;
    this.size = undefined;
    this.iconPack = _default_icon_pack_a3227c63_js__WEBPACK_IMPORTED_MODULE_3__.d;
    this.t = (0,_index_29bc5d44_js__WEBPACK_IMPORTED_MODULE_4__.u)();
    this.isSelf = false;
    this.canEdit = false;
    this.canDelete = false;
    this.disableControls = false;
    this.alignRight = false;
    this.senderDisplayPicture = undefined;
    this.hideAvatar = false;
    this.now = new Date();
  }
  renderControls() {
    if (this.disableControls)
      return;
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-menu", { placement: this.alignRight ? 'bottom-end' : 'bottom-start' }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { slot: "trigger", class: "actions" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.chevron_down })), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-menu-list", null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-menu-item", { onClick: this.onReply }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.back, slot: "start" }), this.t('chat.reply')), this.canEdit && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-menu-item", { onClick: this.onEdit }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.edit, slot: "start" }), this.t('chat.edit_msg'))), this.canDelete && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-menu-item", { onClick: this.onDelete }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.delete, slot: "start" }), this.t('chat.delete_msg'))))));
  }
  renderAvatar() {
    if (this.hideAvatar)
      return;
    if (this.isContinued) {
      return (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "avatar" });
    }
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "avatar" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-avatar", { size: "sm", participant: {
        name: this.message.displayName,
        picture: this.senderDisplayPicture,
      } })));
  }
  render() {
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: { 'message-wrapper': true, 'align-right': this.alignRight } }, this.renderAvatar(), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: { message: true, 'show-on-hover': !this.isTouchDevice() }, "is-continued": this.isContinued }, this.renderMessage(), this.renderControls()))));
  }
  get $el() { return (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
DyteChatMessage.style = dyteChatMessageCss;

const DyteFileMessage = class {
  constructor(hostRef) {
    (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.message = undefined;
    this.now = new Date();
    this.isContinued = false;
    this.iconPack = _default_icon_pack_a3227c63_js__WEBPACK_IMPORTED_MODULE_3__.d;
    this.t = (0,_index_29bc5d44_js__WEBPACK_IMPORTED_MODULE_4__.u)();
    this.showBubble = false;
  }
  render() {
    const link = (0,_string_8aa800b0_js__WEBPACK_IMPORTED_MODULE_10__.a)(this.message.link);
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.H, null, !this.isContinued && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_ChatHead_176c5d04_js__WEBPACK_IMPORTED_MODULE_6__.C, { name: this.message.displayName, time: this.message.time, now: this.now })), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: {
        body: true,
        bubble: this.showBubble,
      }, part: "body" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "file" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "file-data" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "name" }, this.message.name), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "file-data-split" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "ext" }, (0,_file_a11c6818_js__WEBPACK_IMPORTED_MODULE_11__.g)(this.message.name)), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "divider" }), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "size" }, (0,_file_a11c6818_js__WEBPACK_IMPORTED_MODULE_11__.a)(this.message.size)))), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { variant: "secondary", kind: "icon", iconPack: this.iconPack, t: this.t, onClick: () => (0,_file_a11c6818_js__WEBPACK_IMPORTED_MODULE_11__.d)(link, { name: this.message.name, fallbackName: 'file' }), part: "button" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.download, iconPack: this.iconPack, t: this.t }))))));
  }
};

const dyteImageMessageCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.image-spinner{cursor:wait}.image-errored{cursor:not-allowed}";

const DyteImageMessage = class {
  constructor(hostRef) {
    (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.stateUpdate = (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteStateUpdate", 7);
    this.message = undefined;
    this.now = new Date();
    this.isContinued = false;
    this.iconPack = _default_icon_pack_a3227c63_js__WEBPACK_IMPORTED_MODULE_3__.d;
    this.t = (0,_index_29bc5d44_js__WEBPACK_IMPORTED_MODULE_4__.u)();
    this.showBubble = false;
    this.status = 'loading';
  }
  render() {
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.H, null, !this.isContinued && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_ChatHead_176c5d04_js__WEBPACK_IMPORTED_MODULE_6__.C, { name: this.message.displayName, time: this.message.time, now: this.now })), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: {
        body: true,
        bubble: this.showBubble,
      }, part: "body" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: { image: true, loaded: this.status === 'loaded' } }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("img", { src: (0,_string_8aa800b0_js__WEBPACK_IMPORTED_MODULE_10__.a)(this.message.link), onLoad: () => {
        this.status = 'loaded';
      }, onError: () => {
        this.status = 'errored';
      }, onClick: () => {
        if (this.status === 'loaded') {
          this.stateUpdate.emit({ image: this.message });
          _store_56e792d0_js__WEBPACK_IMPORTED_MODULE_7__.s.image = this.message;
        }
      } }), this.status === 'loading' && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "image-spinner", title: this.t('chat.img.loading'), "aria-label": this.t('chat.img.loading') }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-spinner", { iconPack: this.iconPack, t: this.t }))), this.status === 'errored' && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "image-errored", title: this.t('chat.error.img_not_found'), "aria-label": this.t('chat.error.img_not_found') }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.image_off, iconPack: this.iconPack, t: this.t }))), this.status === 'loaded' && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "actions" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { class: "action", variant: "secondary", kind: "icon", onClick: () => {
        this.stateUpdate.emit({ image: this.message });
        _store_56e792d0_js__WEBPACK_IMPORTED_MODULE_7__.s.image = this.message;
      }, iconPack: this.iconPack, t: this.t }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.full_screen_maximize })), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { class: "action", variant: "secondary", kind: "icon", onClick: () => (0,_file_a11c6818_js__WEBPACK_IMPORTED_MODULE_11__.d)(this.message.link, { fallbackName: 'image' }), iconPack: this.iconPack, t: this.t }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.download, iconPack: this.iconPack, t: this.t }))))))));
  }
};
DyteImageMessage.style = dyteImageMessageCss;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    ((0,_isObjectLike_b5266db7_js__WEBPACK_IMPORTED_MODULE_8__.a)(value) && (0,_isObjectLike_b5266db7_js__WEBPACK_IMPORTED_MODULE_8__.b)(value) == symbolTag);
}

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if ((0,_isObjectLike_b5266db7_js__WEBPACK_IMPORTED_MODULE_8__.i)(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = (0,_isObjectLike_b5266db7_js__WEBPACK_IMPORTED_MODULE_8__.i)(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return _isObjectLike_b5266db7_js__WEBPACK_IMPORTED_MODULE_8__.r.Date.now();
};

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if ((0,_isObjectLike_b5266db7_js__WEBPACK_IMPORTED_MODULE_8__.i)(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

const dytePaginatedListCss = ".scrollbar{scrollbar-width:thin;scrollbar-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))\n    var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar{height:var(--dyte-space-1\\.5, 6px);width:var(--dyte-space-1\\.5, 6px);border-radius:9999px;background-color:var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar-thumb{border-radius:9999px;background-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))}:host{position:relative;display:flex;flex-direction:column;flex:1}.container{box-sizing:border-box;display:flex;flex-direction:column-reverse;padding-top:var(--dyte-space-4, 16px);padding-bottom:var(--dyte-space-4, 16px);flex:1 0 0px;overflow-y:scroll;}.file-picker{display:none}.chat *:first-child{margin-top:var(--dyte-space-0, 0px)}.chat .head{display:flex;align-items:center}.chat .head .name{margin-right:var(--dyte-space-4, 16px);font-size:12px;font-weight:700}.chat .head .time{font-size:12px;color:rgb(var(--dyte-colors-text-800, 255 255 255 / 0.76))}.chat .body{margin-top:var(--dyte-space-2, 8px);margin-bottom:var(--dyte-space-2, 8px);overflow-wrap:break-word;font-size:14px;line-height:1.375}.chat .body .emoji{font-size:24px}p{margin-top:var(--dyte-space-0, 0px);margin-bottom:var(--dyte-space-3, 12px)}dyte-text-message,dyte-image-message,dyte-file-message{margin-top:var(--dyte-space-4, 16px);display:block;padding-left:var(--dyte-space-3, 12px);padding-right:var(--dyte-space-3, 12px);font-family:var(--dyte-font-family, sans-serif);color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88));box-sizing:border-box}*[is-continued]{margin-top:var(--dyte-space-3, 12px)}dyte-text-message[is-continued]{margin-top:var(--dyte-space-2, 8px)}.chat .image{position:relative;height:var(--dyte-space-40, 160px);max-width:var(--dyte-space-64, 256px);cursor:pointer}.chat .image img{display:none;height:100%;width:100%;border-radius:var(--dyte-border-radius-sm, 4px);-o-object-fit:cover;object-fit:cover}.chat .image .image-spinner{display:flex;height:100%;width:100%;flex-direction:column;align-items:center;justify-content:center;border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity))}.chat .image .image-spinner dyte-spinner{--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-text-opacity))}.chat .image .image-errored{display:flex;height:100%;width:100%;flex-direction:column;align-items:center;justify-content:center;border-radius:var(--dyte-border-radius-sm, 4px);background-color:rgba(var(--dyte-colors-danger, 255 45 45) / 0.1);--tw-text-opacity:1;color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-text-opacity))}.chat .image .actions{display:none;height:var(--dyte-space-8, 32px);align-items:center;position:absolute;top:var(--dyte-space-2, 8px);right:var(--dyte-space-2, 8px);border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255));overflow:hidden;--tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.chat .image .actions .action{height:var(--dyte-space-8, 32px);width:var(--dyte-space-8, 32px);border-radius:var(--dyte-border-radius-none, 0);border-width:var(--dyte-border-width-none, 0);border-style:none;background-color:transparent;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.chat .image .actions .action:hover{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity))}.image.loaded img{display:block}.image.loaded .image-spinner{display:none}.image:hover .actions,.image:focus .actions{display:flex}.chat .file{display:flex;align-items:center;gap:var(--dyte-space-1, 4px);padding-left:var(--dyte-space-2, 8px);padding-right:var(--dyte-space-2, 8px);padding-top:var(--dyte-space-1\\.5, 6px);padding-bottom:var(--dyte-space-1\\.5, 6px);border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}.chat .file .file-data{flex:1 1 0%}.chat .file .file-data .name{word-break:break-all;color:rgb(var(--dyte-colors-text-1000, 255 255 255));overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1}.chat .file .file-data .file-data-split{margin-top:var(--dyte-space-0\\.5, 2px);display:flex;align-items:center;font-size:12px}.chat .file .file-data .file-data-split .ext{margin-right:var(--dyte-space-2, 8px);text-transform:uppercase;overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1}.chat .file .file-data .file-data-split .divider{height:var(--dyte-space-4, 16px);width:var(--dyte-space-0\\.5, 2px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity))}.chat .file .file-data .file-data-split .size{margin-left:var(--dyte-space-2, 8px)}.smallest-dom-element{width:1px}#top-scroll{transform:translateY(20vh)}#bottom-scroll{transform:translateY(-20vh)}a{--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-text-opacity));-webkit-text-decoration-line:none;text-decoration-line:none}a:hover{-webkit-text-decoration-line:underline;text-decoration-line:underline}.show-new-messages-ctr{pointer-events:none;position:absolute;bottom:var(--dyte-space-2, 8px);right:var(--dyte-space-4, 16px);z-index:0;margin-top:calc(var(--dyte-space-14, 56px) * -1)}.show-new-messages{pointer-events:auto;--tw-translate-y:calc(var(--dyte-space-6, 24px) * -1);transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity:0;transition-property:color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.show-new-messages.active{--tw-translate-y:var(--dyte-space-0, 0px);transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity:1}dyte-spinner,.empty-list{margin:auto}";

const DytePaginatedList = class {
  constructor(hostRef) {
    (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    /**
     * This is a private variable not a state
     * since we want to debounce rerenders
     *
     * A list of pages where each page contains a number of Nodes
     * [
     *  [Node 1, Node 2, Node 3.... Node N],
     *  [Node 1, Node 2, Node 3.... Node N],
     * ]
     */
    this.pagesToRender = [[]];
    this.currentTime = () => {
      return new Date().getTime();
    };
    this.observe = (el) => {
      if (!el)
        return;
      this.intersectionObserver.observe(el);
    };
    this.pageSize = undefined;
    this.pagesAllowed = undefined;
    this.fetchData = undefined;
    this.createNodes = undefined;
    this.selectedItemId = undefined;
    this.autoScroll = true;
    this.iconPack = _default_icon_pack_a3227c63_js__WEBPACK_IMPORTED_MODULE_3__.d;
    this.t = (0,_index_29bc5d44_js__WEBPACK_IMPORTED_MODULE_4__.u)();
    this.emptyListLabel = null;
    this.isLoading = false;
    this.rerenderBoolean = false;
    this.shouldRenderNewNodes = true;
    this.hasNewNodesToRender = false;
    this.showEmptyListLabel = false;
  }
  /**
   * On a new node created
   */
  async onNewNode(node) {
    if (!this.shouldRenderNewNodes) {
      this.hasNewNodesToRender = true;
      return;
    }
    this.addNodeToRender(node, false);
    this.rerender();
  }
  /**
   * On node deleted
   */
  async onNodeDelete(key) {
    const oldLength = this.pagesToRender.flat().length;
    this.pagesToRender = this.pagesToRender.map((page) => page.filter((item) => item.id !== key));
    if (oldLength !== this.pagesToRender.flat().length) {
      this.rerender();
    }
  }
  /**
   * On node updated
   */
  async onNodeUpdate(key, newItem) {
    let shouldRerender = false;
    this.pagesToRender = this.pagesToRender.map((page) => page.map((item) => {
      if (item.id === key) {
        shouldRerender = true;
        return newItem;
      }
      return item;
    }));
    if (shouldRerender)
      this.rerender();
  }
  onItemChanged(newItemId, oldItemId) {
    if (newItemId !== oldItemId) {
      this.pagesToRender = [[]];
      this.loadFirstPage().then(() => this.rerender());
    }
  }
  connectedCallback() {
    this.rerender = debounce(this.rerender.bind(this), 50, { maxWait: 200 });
    this.loadFirstPage();
    this.intersectionObserver = new IntersectionObserver((entries) => {
      (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.w)(() => {
        for (const entry of entries) {
          if (entry.target.id === 'bottom-scroll') {
            if (entry.isIntersecting)
              this.loadBottom();
            else
              this.shouldRenderNewNodes = false;
          }
          if (entry.target.id === 'top-scroll' && entry.isIntersecting) {
            this.loadTop();
          }
        }
      });
    });
  }
  disconnectedCallback() {
    this.intersectionObserver.disconnect();
  }
  componentDidLoad() {
    /**
     * Adding observes here so that on the first render we scroll down
     * and shouldRenderNewNodes remains true
     */
    this.observe(this.$topRef);
    this.observe(this.$bottomRef);
  }
  componentDidRender() {
    if (this.shouldRenderNewNodes && this.autoScroll)
      (0,_scroll_8cc79809_js__WEBPACK_IMPORTED_MODULE_12__.s)(this.$paginatedList);
  }
  loadFirstPage() {
    return this.loadPage(this.currentTime(), this.pageSize, true, (data) => {
      if (data.length === 0) {
        this.showEmptyListLabel = true;
      }
    });
  }
  loadTop() {
    /**
     * If there is only one unfilled page or no page, no need to check
     * for top since it will be empty
     */
    if (this.pagesToRender.length === 0)
      return;
    if (this.pagesToRender.length === 1 && this.pagesToRender[0].length < this.pageSize)
      return;
    /**
     * TODO: Make this more flexible currently this only works with chat
     */
    const oldestVNode = this.pagesToRender[0][0];
    const oldestTimestamp = oldestVNode.timeMs;
    // TODO: scrollIntoView
    const onPageRendered = () => { }; // oldestVNode.$elm$?.scrollIntoView();
    this.loadPage(oldestTimestamp - 1, this.pageSize, true, onPageRendered);
  }
  loadBottom() {
    /**
     * If there is only one unfilled page or no page, no need to check
     * for top since it will be empty
     */
    if (this.pagesToRender.length === 0) {
      this.shouldRenderNewNodes = true;
      return;
    }
    if (this.pagesToRender.length === 1 && this.pagesToRender[0].length < this.pageSize) {
      this.shouldRenderNewNodes = true;
      return;
    }
    const newestVNode = this.pagesToRender.at(-1).at(-1);
    const newestTimestamp = newestVNode.timeMs;
    // TODO: scrollIntoView
    const onPageRendered = () => (0,_scroll_8cc79809_js__WEBPACK_IMPORTED_MODULE_12__.s)(this.$paginatedList);
    this.loadPage(newestTimestamp + 1, this.pageSize, false, onPageRendered);
  }
  addNodeToRender(node, addToStart) {
    if (addToStart) {
      const firstPage = this.pagesToRender[0];
      if (firstPage && (firstPage === null || firstPage === void 0 ? void 0 : firstPage.length) < this.pageSize) {
        /**
         * If first page is not full then just add to that page
         */
        firstPage.unshift(node);
      }
      else {
        /**
         * If first page is full then add a new page to the start
         */
        const newPage = [node];
        this.pagesToRender.unshift(newPage);
        this.removeLastPageIfNeeded(false);
      }
    }
    else {
      const [lastPage] = this.pagesToRender.slice(-1);
      if (lastPage && (lastPage === null || lastPage === void 0 ? void 0 : lastPage.length) < this.pageSize) {
        /**
         * If last page is not full then just add it
         */
        lastPage.push(node);
      }
      else {
        /**
         * If last page is full add a new page with just
         * this node
         */
        const newPage = [node];
        this.pagesToRender.push(newPage);
        this.removeLastPageIfNeeded(true);
      }
    }
  }
  /**
   * @param start
   * @param end
   * @param reversed Defines whether to add the page at the beginning or the end
   * @param onPageLoaded Callback for when all new nodes are rendered
   */
  async loadPage(timestamp, size, reversed, onPageRendered = () => { }) {
    this.isLoading = true;
    const data = (await this.fetchData(timestamp, size, reversed));
    this.isLoading = false;
    if (!(data === null || data === void 0 ? void 0 : data.length)) {
      /**
       * While scrolling down if there were no new items found
       * then start rendering new nodes;
       */
      if (!reversed) {
        this.hasNewNodesToRender = false;
        this.shouldRenderNewNodes = true;
      }
      onPageRendered([]);
      return;
    }
    // const page = this.createNodes(data);
    // const lastNodeToBeRendered = page[page.length - 1];
    // let lastNodeToBeRenderedProxy = new Proxy(lastNodeToBeRendered, {
    //   set(obj, prop, value) {
    //     /**
    //      * Whenever the last node has the 'elm' property added to it
    //      * we can assume it has been rendered
    //      */
    //     if (prop === '$elm$' && value && !obj.$elm$) onPageRendered();
    //     obj[prop] = value;
    //     return true;
    //   },
    // });
    // page[page.length - 1] = lastNodeToBeRenderedProxy;
    data.forEach((node) => this.addNodeToRender(node, reversed));
    this.rerender();
    onPageRendered(data);
  }
  rerender() {
    this.rerenderBoolean = !this.rerenderBoolean;
  }
  removeLastPageIfNeeded(removeFromStart) {
    if (this.pagesToRender.length > this.pagesAllowed) {
      if (removeFromStart)
        this.pagesToRender.shift();
      else
        this.pagesToRender.pop();
    }
  }
  onDownArrowClicked() {
    /**
     * Load the freshest pages
     */
    this.loadBottom();
  }
  render() {
    var _a;
    /**
     * div.container is flex=column-reverse
     * which is why div#bottom-scroll comes before div#top-scroll
     * div.page-wrapper prevents reversal of messages
     */
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "scrollbar container", part: "container", ref: (el) => (this.$paginatedList = el) }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "show-new-messages-ctr" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { class: {
        'show-new-messages': true,
        active: !this.shouldRenderNewNodes,
      }, kind: "icon", part: "show-new-messages", onClick: () => this.onDownArrowClicked(), iconPack: this.iconPack, t: this.t }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.chevron_down, iconPack: this.iconPack, t: this.t }))), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "smallest-dom-element", id: "bottom-scroll", ref: (el) => (this.$bottomRef = el) }), this.isLoading && this.pagesToRender.flat().length === 0 && (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-spinner", { size: "lg" }), this.pagesToRender.flat().length === 0 && this.showEmptyListLabel ? ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "empty-list" }, (_a = this.emptyListLabel) !== null && _a !== void 0 ? _a : this.t('list.empty'))) : ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "page-wrapper" }, this.pagesToRender.map((page) => this.createNodes(page)))), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "smallest-dom-element", id: "top-scroll", ref: (el) => (this.$topRef = el) }))));
  }
  static get watchers() { return {
    "selectedItemId": ["onItemChanged"]
  }; }
};
DytePaginatedList.style = dytePaginatedListCss;

const DyteTextMessage = class {
  constructor(hostRef) {
    (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.message = undefined;
    this.now = new Date();
    this.isContinued = false;
    this.iconPack = _default_icon_pack_a3227c63_js__WEBPACK_IMPORTED_MODULE_3__.d;
    this.t = (0,_index_29bc5d44_js__WEBPACK_IMPORTED_MODULE_4__.u)();
    this.showBubble = false;
  }
  render() {
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.H, null, !this.isContinued && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_ChatHead_176c5d04_js__WEBPACK_IMPORTED_MODULE_6__.C, { name: this.message.displayName, time: this.message.time, now: this.now })), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: {
        body: true,
        bubble: this.showBubble,
      }, part: "body" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: { text: true, emoji: (0,_string_8aa800b0_js__WEBPACK_IMPORTED_MODULE_10__.h)(this.message.message) } }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_TextMessage_5d3b1de6_js__WEBPACK_IMPORTED_MODULE_9__.T, { message: this.message.message })))));
  }
};




/***/ }),

/***/ 96396:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ getFileSize),
/* harmony export */   d: () => (/* binding */ downloadFile),
/* harmony export */   g: () => (/* binding */ getExtension)
/* harmony export */ });
/* harmony import */ var _string_8aa800b0_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22906);


const getExtension = (name) => {
  // split query and hash from url, then get the filename
  return name.split(/[#?]/)[0].split('.').pop().trim();
};
/**
 * Formats size in bytes to human readable formats
 * @param size Size in bytes
 * @returns Human readable file size
 */
const getFileSize = (size) => {
  if (!size)
    return '0 B';
  const i = Math.floor(Math.log(size) / Math.log(1024));
  return `${(size / 1024 ** i).toFixed(2)} ${['B', 'kB', 'MB', 'GB', 'TB'][i]}`;
};
/**
 * Extracts the file name from a URL.
 * @param link The URL of the file
 * @param fallback Fallback filename
 * @returns File name
 */
const getFileName = (link, fallback = 'file') => {
  try {
    const url = new URL(link);
    const name = url.pathname.split('/').pop();
    return name !== '/' ? name : fallback;
  }
  catch (_) {
    return fallback;
  }
};
/**
 * Downloads file from a given URL without leaving the current page
 * @param link URL of the file to download
 * @param options Optional Options for file download - `name` and `fallbackName`
 */
const downloadFile = async (link, options) => {
  link = (0,_string_8aa800b0_js__WEBPACK_IMPORTED_MODULE_0__.a)(link);
  let name = options === null || options === void 0 ? void 0 : options.name;
  const res = await fetch(link);
  if (!res.ok) {
    // if unable to download file (CORS or some other error)
    // open the URL in new tab
    window.open(link, '_blank');
    return;
  }
  const blobURL = URL.createObjectURL(await res.blob());
  // Creates an anchor tag and simulates download
  const a = document.createElement('a');
  a.href = blobURL;
  a.download = name !== null && name !== void 0 ? name : getFileName(link, options === null || options === void 0 ? void 0 : options.fallbackName);
  a.click();
};




/***/ }),

/***/ 65733:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ Fragment),
/* harmony export */   H: () => (/* binding */ Host),
/* harmony export */   a: () => (/* binding */ getRenderingRef),
/* harmony export */   c: () => (/* binding */ createEvent),
/* harmony export */   f: () => (/* binding */ forceUpdate),
/* harmony export */   g: () => (/* binding */ getElement),
/* harmony export */   h: () => (/* binding */ h),
/* harmony export */   r: () => (/* binding */ registerInstance),
/* harmony export */   w: () => (/* binding */ writeTask)
/* harmony export */ });
/* unused harmony exports b, p */
const NAMESPACE = 'dyte-ui-kit';

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/snabbdom/snabbdom/blob/master/LICENSE
 *
 * Modified for Stencil's renderer and slot projection
 */
let scopeId;
let contentRef;
let hostTagName;
let useNativeShadowDom = false;
let checkSlotFallbackVisibility = false;
let checkSlotRelocate = false;
let isSvgMode = false;
let renderingRef = null;
let queuePending = false;
const createTime = (fnName, tagName = '') => {
    {
        return () => {
            return;
        };
    }
};
const uniqueTime = (key, measureText) => {
    {
        return () => {
            return;
        };
    }
};
const HYDRATED_CSS = '{visibility:hidden}.hydrated{visibility:inherit}';
const XLINK_NS = 'http://www.w3.org/1999/xlink';
/**
 * Default style mode id
 */
/**
 * Reusable empty obj/array
 * Don't add values to these!!
 */
const EMPTY_OBJ = {};
const isDef = (v) => v != null;
const isComplexType = (o) => {
    // https://jsperf.com/typeof-fn-object/5
    o = typeof o;
    return o === 'object' || o === 'function';
};
/**
 * Production h() function based on Preact by
 * Jason Miller (@developit)
 * Licensed under the MIT License
 * https://github.com/developit/preact/blob/master/LICENSE
 *
 * Modified for Stencil's compiler and vdom
 */
// const stack: any[] = [];
// export function h(nodeName: string | d.FunctionalComponent, vnodeData: d.PropsType, child?: d.ChildType): d.VNode;
// export function h(nodeName: string | d.FunctionalComponent, vnodeData: d.PropsType, ...children: d.ChildType[]): d.VNode;
const h = (nodeName, vnodeData, ...children) => {
    let child = null;
    let key = null;
    let slotName = null;
    let simple = false;
    let lastSimple = false;
    const vNodeChildren = [];
    const walk = (c) => {
        for (let i = 0; i < c.length; i++) {
            child = c[i];
            if (Array.isArray(child)) {
                walk(child);
            }
            else if (child != null && typeof child !== 'boolean') {
                if ((simple = typeof nodeName !== 'function' && !isComplexType(child))) {
                    child = String(child);
                }
                if (simple && lastSimple) {
                    // If the previous child was simple (string), we merge both
                    vNodeChildren[vNodeChildren.length - 1].$text$ += child;
                }
                else {
                    // Append a new vNode, if it's text, we create a text vNode
                    vNodeChildren.push(simple ? newVNode(null, child) : child);
                }
                lastSimple = simple;
            }
        }
    };
    walk(children);
    if (vnodeData) {
        // normalize class / classname attributes
        if (vnodeData.key) {
            key = vnodeData.key;
        }
        if (vnodeData.name) {
            slotName = vnodeData.name;
        }
        {
            const classData = vnodeData.className || vnodeData.class;
            if (classData) {
                vnodeData.class =
                    typeof classData !== 'object'
                        ? classData
                        : Object.keys(classData)
                            .filter((k) => classData[k])
                            .join(' ');
            }
        }
    }
    if (typeof nodeName === 'function') {
        // nodeName is a functional component
        return nodeName(vnodeData === null ? {} : vnodeData, vNodeChildren, vdomFnUtils);
    }
    const vnode = newVNode(nodeName, null);
    vnode.$attrs$ = vnodeData;
    if (vNodeChildren.length > 0) {
        vnode.$children$ = vNodeChildren;
    }
    {
        vnode.$key$ = key;
    }
    {
        vnode.$name$ = slotName;
    }
    return vnode;
};
const newVNode = (tag, text) => {
    const vnode = {
        $flags$: 0,
        $tag$: tag,
        $text$: text,
        $elm$: null,
        $children$: null,
    };
    {
        vnode.$attrs$ = null;
    }
    {
        vnode.$key$ = null;
    }
    {
        vnode.$name$ = null;
    }
    return vnode;
};
const Host = {};
const isHost = (node) => node && node.$tag$ === Host;
const vdomFnUtils = {
    forEach: (children, cb) => children.map(convertToPublic).forEach(cb),
    map: (children, cb) => children.map(convertToPublic).map(cb).map(convertToPrivate),
};
const convertToPublic = (node) => ({
    vattrs: node.$attrs$,
    vchildren: node.$children$,
    vkey: node.$key$,
    vname: node.$name$,
    vtag: node.$tag$,
    vtext: node.$text$,
});
const convertToPrivate = (node) => {
    if (typeof node.vtag === 'function') {
        const vnodeData = Object.assign({}, node.vattrs);
        if (node.vkey) {
            vnodeData.key = node.vkey;
        }
        if (node.vname) {
            vnodeData.name = node.vname;
        }
        return h(node.vtag, vnodeData, ...(node.vchildren || []));
    }
    const vnode = newVNode(node.vtag, node.vtext);
    vnode.$attrs$ = node.vattrs;
    vnode.$children$ = node.vchildren;
    vnode.$key$ = node.vkey;
    vnode.$name$ = node.vname;
    return vnode;
};
/**
 * Parse a new property value for a given property type.
 *
 * While the prop value can reasonably be expected to be of `any` type as far as TypeScript's type checker is concerned,
 * it is not safe to assume that the string returned by evaluating `typeof propValue` matches:
 *   1. `any`, the type given to `propValue` in the function signature
 *   2. the type stored from `propType`.
 *
 * This function provides the capability to parse/coerce a property's value to potentially any other JavaScript type.
 *
 * Property values represented in TSX preserve their type information. In the example below, the number 0 is passed to
 * a component. This `propValue` will preserve its type information (`typeof propValue === 'number'`). Note that is
 * based on the type of the value being passed in, not the type declared of the class member decorated with `@Prop`.
 * ```tsx
 * <my-cmp prop-val={0}></my-cmp>
 * ```
 *
 * HTML prop values on the other hand, will always a string
 *
 * @param propValue the new value to coerce to some type
 * @param propType the type of the prop, expressed as a binary number
 * @returns the parsed/coerced value
 */
const parsePropertyValue = (propValue, propType) => {
    // ensure this value is of the correct prop type
    if (propValue != null && !isComplexType(propValue)) {
        if (propType & 4 /* MEMBER_FLAGS.Boolean */) {
            // per the HTML spec, any string value means it is a boolean true value
            // but we'll cheat here and say that the string "false" is the boolean false
            return propValue === 'false' ? false : propValue === '' || !!propValue;
        }
        if (propType & 2 /* MEMBER_FLAGS.Number */) {
            // force it to be a number
            return parseFloat(propValue);
        }
        if (propType & 1 /* MEMBER_FLAGS.String */) {
            // could have been passed as a number or boolean
            // but we still want it as a string
            return String(propValue);
        }
        // redundant return here for better minification
        return propValue;
    }
    // not sure exactly what type we want
    // so no need to change to a different type
    return propValue;
};
const getElement = (ref) => (getHostRef(ref).$hostElement$ );
const createEvent = (ref, name, flags) => {
    const elm = getElement(ref);
    return {
        emit: (detail) => {
            return emitEvent(elm, name, {
                bubbles: !!(flags & 4 /* EVENT_FLAGS.Bubbles */),
                composed: !!(flags & 2 /* EVENT_FLAGS.Composed */),
                cancelable: !!(flags & 1 /* EVENT_FLAGS.Cancellable */),
                detail,
            });
        },
    };
};
/**
 * Helper function to create & dispatch a custom Event on a provided target
 * @param elm the target of the Event
 * @param name the name to give the custom Event
 * @param opts options for configuring a custom Event
 * @returns the custom Event
 */
const emitEvent = (elm, name, opts) => {
    const ev = plt.ce(name, opts);
    elm.dispatchEvent(ev);
    return ev;
};
const rootAppliedStyles = /*@__PURE__*/ new WeakMap();
const registerStyle = (scopeId, cssText, allowCS) => {
    let style = styles.get(scopeId);
    if (supportsConstructableStylesheets && allowCS) {
        style = (style || new CSSStyleSheet());
        if (typeof style === 'string') {
            style = cssText;
        }
        else {
            style.replaceSync(cssText);
        }
    }
    else {
        style = cssText;
    }
    styles.set(scopeId, style);
};
const addStyle = (styleContainerNode, cmpMeta, mode, hostElm) => {
    let scopeId = getScopeId(cmpMeta);
    const style = styles.get(scopeId);
    // if an element is NOT connected then getRootNode() will return the wrong root node
    // so the fallback is to always use the document for the root node in those cases
    styleContainerNode = styleContainerNode.nodeType === 11 /* NODE_TYPE.DocumentFragment */ ? styleContainerNode : doc;
    if (style) {
        if (typeof style === 'string') {
            styleContainerNode = styleContainerNode.head || styleContainerNode;
            let appliedStyles = rootAppliedStyles.get(styleContainerNode);
            let styleElm;
            if (!appliedStyles) {
                rootAppliedStyles.set(styleContainerNode, (appliedStyles = new Set()));
            }
            if (!appliedStyles.has(scopeId)) {
                {
                    {
                        styleElm = doc.createElement('style');
                        styleElm.innerHTML = style;
                    }
                    styleContainerNode.insertBefore(styleElm, styleContainerNode.querySelector('link'));
                }
                if (appliedStyles) {
                    appliedStyles.add(scopeId);
                }
            }
        }
        else if (!styleContainerNode.adoptedStyleSheets.includes(style)) {
            styleContainerNode.adoptedStyleSheets = [...styleContainerNode.adoptedStyleSheets, style];
        }
    }
    return scopeId;
};
const attachStyles = (hostRef) => {
    const cmpMeta = hostRef.$cmpMeta$;
    const elm = hostRef.$hostElement$;
    const flags = cmpMeta.$flags$;
    const endAttachStyles = createTime('attachStyles', cmpMeta.$tagName$);
    const scopeId = addStyle(elm.shadowRoot ? elm.shadowRoot : elm.getRootNode(), cmpMeta);
    if (flags & 10 /* CMP_FLAGS.needsScopedEncapsulation */) {
        // only required when we're NOT using native shadow dom (slot)
        // or this browser doesn't support native shadow dom
        // and this host element was NOT created with SSR
        // let's pick out the inner content for slot projection
        // create a node to represent where the original
        // content was first placed, which is useful later on
        // DOM WRITE!!
        elm['s-sc'] = scopeId;
        elm.classList.add(scopeId + '-h');
    }
    endAttachStyles();
};
const getScopeId = (cmp, mode) => 'sc-' + (cmp.$tagName$);
/**
 * Production setAccessor() function based on Preact by
 * Jason Miller (@developit)
 * Licensed under the MIT License
 * https://github.com/developit/preact/blob/master/LICENSE
 *
 * Modified for Stencil's compiler and vdom
 */
const setAccessor = (elm, memberName, oldValue, newValue, isSvg, flags) => {
    if (oldValue !== newValue) {
        let isProp = isMemberInElement(elm, memberName);
        let ln = memberName.toLowerCase();
        if (memberName === 'class') {
            const classList = elm.classList;
            const oldClasses = parseClassList(oldValue);
            const newClasses = parseClassList(newValue);
            classList.remove(...oldClasses.filter((c) => c && !newClasses.includes(c)));
            classList.add(...newClasses.filter((c) => c && !oldClasses.includes(c)));
        }
        else if (memberName === 'style') {
            // update style attribute, css properties and values
            {
                for (const prop in oldValue) {
                    if (!newValue || newValue[prop] == null) {
                        if (prop.includes('-')) {
                            elm.style.removeProperty(prop);
                        }
                        else {
                            elm.style[prop] = '';
                        }
                    }
                }
            }
            for (const prop in newValue) {
                if (!oldValue || newValue[prop] !== oldValue[prop]) {
                    if (prop.includes('-')) {
                        elm.style.setProperty(prop, newValue[prop]);
                    }
                    else {
                        elm.style[prop] = newValue[prop];
                    }
                }
            }
        }
        else if (memberName === 'key')
            ;
        else if (memberName === 'ref') {
            // minifier will clean this up
            if (newValue) {
                newValue(elm);
            }
        }
        else if ((!isProp ) &&
            memberName[0] === 'o' &&
            memberName[1] === 'n') {
            // Event Handlers
            // so if the member name starts with "on" and the 3rd characters is
            // a capital letter, and it's not already a member on the element,
            // then we're assuming it's an event listener
            if (memberName[2] === '-') {
                // on- prefixed events
                // allows to be explicit about the dom event to listen without any magic
                // under the hood:
                // <my-cmp on-click> // listens for "click"
                // <my-cmp on-Click> // listens for "Click"
                // <my-cmp on-ionChange> // listens for "ionChange"
                // <my-cmp on-EVENTS> // listens for "EVENTS"
                memberName = memberName.slice(3);
            }
            else if (isMemberInElement(win, ln)) {
                // standard event
                // the JSX attribute could have been "onMouseOver" and the
                // member name "onmouseover" is on the window's prototype
                // so let's add the listener "mouseover", which is all lowercased
                memberName = ln.slice(2);
            }
            else {
                // custom event
                // the JSX attribute could have been "onMyCustomEvent"
                // so let's trim off the "on" prefix and lowercase the first character
                // and add the listener "myCustomEvent"
                // except for the first character, we keep the event name case
                memberName = ln[2] + memberName.slice(3);
            }
            if (oldValue) {
                plt.rel(elm, memberName, oldValue, false);
            }
            if (newValue) {
                plt.ael(elm, memberName, newValue, false);
            }
        }
        else {
            // Set property if it exists and it's not a SVG
            const isComplex = isComplexType(newValue);
            if ((isProp || (isComplex && newValue !== null)) && !isSvg) {
                try {
                    if (!elm.tagName.includes('-')) {
                        const n = newValue == null ? '' : newValue;
                        // Workaround for Safari, moving the <input> caret when re-assigning the same valued
                        if (memberName === 'list') {
                            isProp = false;
                        }
                        else if (oldValue == null || elm[memberName] != n) {
                            elm[memberName] = n;
                        }
                    }
                    else {
                        elm[memberName] = newValue;
                    }
                }
                catch (e) { }
            }
            /**
             * Need to manually update attribute if:
             * - memberName is not an attribute
             * - if we are rendering the host element in order to reflect attribute
             * - if it's a SVG, since properties might not work in <svg>
             * - if the newValue is null/undefined or 'false'.
             */
            let xlink = false;
            {
                if (ln !== (ln = ln.replace(/^xlink\:?/, ''))) {
                    memberName = ln;
                    xlink = true;
                }
            }
            if (newValue == null || newValue === false) {
                if (newValue !== false || elm.getAttribute(memberName) === '') {
                    if (xlink) {
                        elm.removeAttributeNS(XLINK_NS, memberName);
                    }
                    else {
                        elm.removeAttribute(memberName);
                    }
                }
            }
            else if ((!isProp || flags & 4 /* VNODE_FLAGS.isHost */ || isSvg) && !isComplex) {
                newValue = newValue === true ? '' : newValue;
                if (xlink) {
                    elm.setAttributeNS(XLINK_NS, memberName, newValue);
                }
                else {
                    elm.setAttribute(memberName, newValue);
                }
            }
        }
    }
};
const parseClassListRegex = /\s/;
const parseClassList = (value) => (!value ? [] : value.split(parseClassListRegex));
const updateElement = (oldVnode, newVnode, isSvgMode, memberName) => {
    // if the element passed in is a shadow root, which is a document fragment
    // then we want to be adding attrs/props to the shadow root's "host" element
    // if it's not a shadow root, then we add attrs/props to the same element
    const elm = newVnode.$elm$.nodeType === 11 /* NODE_TYPE.DocumentFragment */ && newVnode.$elm$.host
        ? newVnode.$elm$.host
        : newVnode.$elm$;
    const oldVnodeAttrs = (oldVnode && oldVnode.$attrs$) || EMPTY_OBJ;
    const newVnodeAttrs = newVnode.$attrs$ || EMPTY_OBJ;
    {
        // remove attributes no longer present on the vnode by setting them to undefined
        for (memberName in oldVnodeAttrs) {
            if (!(memberName in newVnodeAttrs)) {
                setAccessor(elm, memberName, oldVnodeAttrs[memberName], undefined, isSvgMode, newVnode.$flags$);
            }
        }
    }
    // add new & update changed attributes
    for (memberName in newVnodeAttrs) {
        setAccessor(elm, memberName, oldVnodeAttrs[memberName], newVnodeAttrs[memberName], isSvgMode, newVnode.$flags$);
    }
};
/**
 * Create a DOM Node corresponding to one of the children of a given VNode.
 *
 * @param oldParentVNode the parent VNode from the previous render
 * @param newParentVNode the parent VNode from the current render
 * @param childIndex the index of the VNode, in the _new_ parent node's
 * children, for which we will create a new DOM node
 * @param parentElm the parent DOM node which our new node will be a child of
 * @returns the newly created node
 */
const createElm = (oldParentVNode, newParentVNode, childIndex, parentElm) => {
    // tslint:disable-next-line: prefer-const
    const newVNode = newParentVNode.$children$[childIndex];
    let i = 0;
    let elm;
    let childNode;
    let oldVNode;
    if (!useNativeShadowDom) {
        // remember for later we need to check to relocate nodes
        checkSlotRelocate = true;
        if (newVNode.$tag$ === 'slot') {
            if (scopeId) {
                // scoped css needs to add its scoped id to the parent element
                parentElm.classList.add(scopeId + '-s');
            }
            newVNode.$flags$ |= newVNode.$children$
                ? // slot element has fallback content
                    2 /* VNODE_FLAGS.isSlotFallback */
                : // slot element does not have fallback content
                    1 /* VNODE_FLAGS.isSlotReference */;
        }
    }
    if (newVNode.$text$ !== null) {
        // create text node
        elm = newVNode.$elm$ = doc.createTextNode(newVNode.$text$);
    }
    else if (newVNode.$flags$ & 1 /* VNODE_FLAGS.isSlotReference */) {
        // create a slot reference node
        elm = newVNode.$elm$ =
            doc.createTextNode('');
    }
    else {
        // create element
        elm = newVNode.$elm$ = (doc.createElement(newVNode.$flags$ & 2 /* VNODE_FLAGS.isSlotFallback */
                ? 'slot-fb'
                : newVNode.$tag$));
        // add css classes, attrs, props, listeners, etc.
        {
            updateElement(null, newVNode, isSvgMode);
        }
        if (isDef(scopeId) && elm['s-si'] !== scopeId) {
            // if there is a scopeId and this is the initial render
            // then let's add the scopeId as a css class
            elm.classList.add((elm['s-si'] = scopeId));
        }
        if (newVNode.$children$) {
            for (i = 0; i < newVNode.$children$.length; ++i) {
                // create the node
                childNode = createElm(oldParentVNode, newVNode, i, elm);
                // return node could have been null
                if (childNode) {
                    // append our new node
                    elm.appendChild(childNode);
                }
            }
        }
    }
    {
        elm['s-hn'] = hostTagName;
        if (newVNode.$flags$ & (2 /* VNODE_FLAGS.isSlotFallback */ | 1 /* VNODE_FLAGS.isSlotReference */)) {
            // remember the content reference comment
            elm['s-sr'] = true;
            // remember the content reference comment
            elm['s-cr'] = contentRef;
            // remember the slot name, or empty string for default slot
            elm['s-sn'] = newVNode.$name$ || '';
            // check if we've got an old vnode for this slot
            oldVNode = oldParentVNode && oldParentVNode.$children$ && oldParentVNode.$children$[childIndex];
            if (oldVNode && oldVNode.$tag$ === newVNode.$tag$ && oldParentVNode.$elm$) {
                // we've got an old slot vnode and the wrapper is being replaced
                // so let's move the old slot content back to it's original location
                putBackInOriginalLocation(oldParentVNode.$elm$, false);
            }
        }
    }
    return elm;
};
const putBackInOriginalLocation = (parentElm, recursive) => {
    plt.$flags$ |= 1 /* PLATFORM_FLAGS.isTmpDisconnected */;
    const oldSlotChildNodes = parentElm.childNodes;
    for (let i = oldSlotChildNodes.length - 1; i >= 0; i--) {
        const childNode = oldSlotChildNodes[i];
        if (childNode['s-hn'] !== hostTagName && childNode['s-ol']) {
            // // this child node in the old element is from another component
            // // remove this node from the old slot's parent
            // childNode.remove();
            // and relocate it back to it's original location
            parentReferenceNode(childNode).insertBefore(childNode, referenceNode(childNode));
            // remove the old original location comment entirely
            // later on the patch function will know what to do
            // and move this to the correct spot in need be
            childNode['s-ol'].remove();
            childNode['s-ol'] = undefined;
            checkSlotRelocate = true;
        }
        if (recursive) {
            putBackInOriginalLocation(childNode, recursive);
        }
    }
    plt.$flags$ &= ~1 /* PLATFORM_FLAGS.isTmpDisconnected */;
};
const addVnodes = (parentElm, before, parentVNode, vnodes, startIdx, endIdx) => {
    let containerElm = ((parentElm['s-cr'] && parentElm['s-cr'].parentNode) || parentElm);
    let childNode;
    if (containerElm.shadowRoot && containerElm.tagName === hostTagName) {
        containerElm = containerElm.shadowRoot;
    }
    for (; startIdx <= endIdx; ++startIdx) {
        if (vnodes[startIdx]) {
            childNode = createElm(null, parentVNode, startIdx, parentElm);
            if (childNode) {
                vnodes[startIdx].$elm$ = childNode;
                containerElm.insertBefore(childNode, referenceNode(before) );
            }
        }
    }
};
const removeVnodes = (vnodes, startIdx, endIdx, vnode, elm) => {
    for (; startIdx <= endIdx; ++startIdx) {
        if ((vnode = vnodes[startIdx])) {
            elm = vnode.$elm$;
            callNodeRefs(vnode);
            {
                // we're removing this element
                // so it's possible we need to show slot fallback content now
                checkSlotFallbackVisibility = true;
                if (elm['s-ol']) {
                    // remove the original location comment
                    elm['s-ol'].remove();
                }
                else {
                    // it's possible that child nodes of the node
                    // that's being removed are slot nodes
                    putBackInOriginalLocation(elm, true);
                }
            }
            // remove the vnode's element from the dom
            elm.remove();
        }
    }
};
/**
 * Reconcile the children of a new VNode with the children of an old VNode by
 * traversing the two collections of children, identifying nodes that are
 * conserved or changed, calling out to `patch` to make any necessary
 * updates to the DOM, and rearranging DOM nodes as needed.
 *
 * The algorithm for reconciling children works by analyzing two 'windows' onto
 * the two arrays of children (`oldCh` and `newCh`). We keep track of the
 * 'windows' by storing start and end indices and references to the
 * corresponding array entries. Initially the two 'windows' are basically equal
 * to the entire array, but we progressively narrow the windows until there are
 * no children left to update by doing the following:
 *
 * 1. Skip any `null` entries at the beginning or end of the two arrays, so
 *    that if we have an initial array like the following we'll end up dealing
 *    only with a window bounded by the highlighted elements:
 *
 *    [null, null, VNode1 , ... , VNode2, null, null]
 *                 ^^^^^^         ^^^^^^
 *
 * 2. Check to see if the elements at the head and tail positions are equal
 *    across the windows. This will basically detect elements which haven't
 *    been added, removed, or changed position, i.e. if you had the following
 *    VNode elements (represented as HTML):
 *
 *    oldVNode: `<div><p><span>HEY</span></p></div>`
 *    newVNode: `<div><p><span>THERE</span></p></div>`
 *
 *    Then when comparing the children of the `<div>` tag we check the equality
 *    of the VNodes corresponding to the `<p>` tags and, since they are the
 *    same tag in the same position, we'd be able to avoid completely
 *    re-rendering the subtree under them with a new DOM element and would just
 *    call out to `patch` to handle reconciling their children and so on.
 *
 * 3. Check, for both windows, to see if the element at the beginning of the
 *    window corresponds to the element at the end of the other window. This is
 *    a heuristic which will let us identify _some_ situations in which
 *    elements have changed position, for instance it _should_ detect that the
 *    children nodes themselves have not changed but merely moved in the
 *    following example:
 *
 *    oldVNode: `<div><element-one /><element-two /></div>`
 *    newVNode: `<div><element-two /><element-one /></div>`
 *
 *    If we find cases like this then we also need to move the concrete DOM
 *    elements corresponding to the moved children to write the re-order to the
 *    DOM.
 *
 * 4. Finally, if VNodes have the `key` attribute set on them we check for any
 *    nodes in the old children which have the same key as the first element in
 *    our window on the new children. If we find such a node we handle calling
 *    out to `patch`, moving relevant DOM nodes, and so on, in accordance with
 *    what we find.
 *
 * Finally, once we've narrowed our 'windows' to the point that either of them
 * collapse (i.e. they have length 0) we then handle any remaining VNode
 * insertion or deletion that needs to happen to get a DOM state that correctly
 * reflects the new child VNodes. If, for instance, after our window on the old
 * children has collapsed we still have more nodes on the new children that
 * we haven't dealt with yet then we need to add them, or if the new children
 * collapse but we still have unhandled _old_ children then we need to make
 * sure the corresponding DOM nodes are removed.
 *
 * @param parentElm the node into which the parent VNode is rendered
 * @param oldCh the old children of the parent node
 * @param newVNode the new VNode which will replace the parent
 * @param newCh the new children of the parent node
 */
const updateChildren = (parentElm, oldCh, newVNode, newCh) => {
    let oldStartIdx = 0;
    let newStartIdx = 0;
    let idxInOld = 0;
    let i = 0;
    let oldEndIdx = oldCh.length - 1;
    let oldStartVnode = oldCh[0];
    let oldEndVnode = oldCh[oldEndIdx];
    let newEndIdx = newCh.length - 1;
    let newStartVnode = newCh[0];
    let newEndVnode = newCh[newEndIdx];
    let node;
    let elmToMove;
    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        if (oldStartVnode == null) {
            // VNode might have been moved left
            oldStartVnode = oldCh[++oldStartIdx];
        }
        else if (oldEndVnode == null) {
            oldEndVnode = oldCh[--oldEndIdx];
        }
        else if (newStartVnode == null) {
            newStartVnode = newCh[++newStartIdx];
        }
        else if (newEndVnode == null) {
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldStartVnode, newStartVnode)) {
            // if the start nodes are the same then we should patch the new VNode
            // onto the old one, and increment our `newStartIdx` and `oldStartIdx`
            // indices to reflect that. We don't need to move any DOM Nodes around
            // since things are matched up in order.
            patch(oldStartVnode, newStartVnode);
            oldStartVnode = oldCh[++oldStartIdx];
            newStartVnode = newCh[++newStartIdx];
        }
        else if (isSameVnode(oldEndVnode, newEndVnode)) {
            // likewise, if the end nodes are the same we patch new onto old and
            // decrement our end indices, and also likewise in this case we don't
            // need to move any DOM Nodes.
            patch(oldEndVnode, newEndVnode);
            oldEndVnode = oldCh[--oldEndIdx];
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldStartVnode, newEndVnode)) {
            // case: "Vnode moved right"
            //
            // We've found that the last node in our window on the new children is
            // the same VNode as the _first_ node in our window on the old children
            // we're dealing with now. Visually, this is the layout of these two
            // nodes:
            //
            // newCh: [..., newStartVnode , ... , newEndVnode , ...]
            //                                    ^^^^^^^^^^^
            // oldCh: [..., oldStartVnode , ... , oldEndVnode , ...]
            //              ^^^^^^^^^^^^^
            //
            // In this situation we need to patch `newEndVnode` onto `oldStartVnode`
            // and move the DOM element for `oldStartVnode`.
            if ((oldStartVnode.$tag$ === 'slot' || newEndVnode.$tag$ === 'slot')) {
                putBackInOriginalLocation(oldStartVnode.$elm$.parentNode, false);
            }
            patch(oldStartVnode, newEndVnode);
            // We need to move the element for `oldStartVnode` into a position which
            // will be appropriate for `newEndVnode`. For this we can use
            // `.insertBefore` and `oldEndVnode.$elm$.nextSibling`. If there is a
            // sibling for `oldEndVnode.$elm$` then we want to move the DOM node for
            // `oldStartVnode` between `oldEndVnode` and it's sibling, like so:
            //
            // <old-start-node />
            // <some-intervening-node />
            // <old-end-node />
            // <!-- ->              <-- `oldStartVnode.$elm$` should be inserted here
            // <next-sibling />
            //
            // If instead `oldEndVnode.$elm$` has no sibling then we just want to put
            // the node for `oldStartVnode` at the end of the children of
            // `parentElm`. Luckily, `Node.nextSibling` will return `null` if there
            // aren't any siblings, and passing `null` to `Node.insertBefore` will
            // append it to the children of the parent element.
            parentElm.insertBefore(oldStartVnode.$elm$, oldEndVnode.$elm$.nextSibling);
            oldStartVnode = oldCh[++oldStartIdx];
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldEndVnode, newStartVnode)) {
            // case: "Vnode moved left"
            //
            // We've found that the first node in our window on the new children is
            // the same VNode as the _last_ node in our window on the old children.
            // Visually, this is the layout of these two nodes:
            //
            // newCh: [..., newStartVnode , ... , newEndVnode , ...]
            //              ^^^^^^^^^^^^^
            // oldCh: [..., oldStartVnode , ... , oldEndVnode , ...]
            //                                    ^^^^^^^^^^^
            //
            // In this situation we need to patch `newStartVnode` onto `oldEndVnode`
            // (which will handle updating any changed attributes, reconciling their
            // children etc) but we also need to move the DOM node to which
            // `oldEndVnode` corresponds.
            if ((oldStartVnode.$tag$ === 'slot' || newEndVnode.$tag$ === 'slot')) {
                putBackInOriginalLocation(oldEndVnode.$elm$.parentNode, false);
            }
            patch(oldEndVnode, newStartVnode);
            // We've already checked above if `oldStartVnode` and `newStartVnode` are
            // the same node, so since we're here we know that they are not. Thus we
            // can move the element for `oldEndVnode` _before_ the element for
            // `oldStartVnode`, leaving `oldStartVnode` to be reconciled in the
            // future.
            parentElm.insertBefore(oldEndVnode.$elm$, oldStartVnode.$elm$);
            oldEndVnode = oldCh[--oldEndIdx];
            newStartVnode = newCh[++newStartIdx];
        }
        else {
            // Here we do some checks to match up old and new nodes based on the
            // `$key$` attribute, which is set by putting a `key="my-key"` attribute
            // in the JSX for a DOM element in the implementation of a Stencil
            // component.
            //
            // First we check to see if there are any nodes in the array of old
            // children which have the same key as the first node in the new
            // children.
            idxInOld = -1;
            {
                for (i = oldStartIdx; i <= oldEndIdx; ++i) {
                    if (oldCh[i] && oldCh[i].$key$ !== null && oldCh[i].$key$ === newStartVnode.$key$) {
                        idxInOld = i;
                        break;
                    }
                }
            }
            if (idxInOld >= 0) {
                // We found a node in the old children which matches up with the first
                // node in the new children! So let's deal with that
                elmToMove = oldCh[idxInOld];
                if (elmToMove.$tag$ !== newStartVnode.$tag$) {
                    // the tag doesn't match so we'll need a new DOM element
                    node = createElm(oldCh && oldCh[newStartIdx], newVNode, idxInOld, parentElm);
                }
                else {
                    patch(elmToMove, newStartVnode);
                    // invalidate the matching old node so that we won't try to update it
                    // again later on
                    oldCh[idxInOld] = undefined;
                    node = elmToMove.$elm$;
                }
                newStartVnode = newCh[++newStartIdx];
            }
            else {
                // We either didn't find an element in the old children that matches
                // the key of the first new child OR the build is not using `key`
                // attributes at all. In either case we need to create a new element
                // for the new node.
                node = createElm(oldCh && oldCh[newStartIdx], newVNode, newStartIdx, parentElm);
                newStartVnode = newCh[++newStartIdx];
            }
            if (node) {
                // if we created a new node then handle inserting it to the DOM
                {
                    parentReferenceNode(oldStartVnode.$elm$).insertBefore(node, referenceNode(oldStartVnode.$elm$));
                }
            }
        }
    }
    if (oldStartIdx > oldEndIdx) {
        // we have some more new nodes to add which don't match up with old nodes
        addVnodes(parentElm, newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].$elm$, newVNode, newCh, newStartIdx, newEndIdx);
    }
    else if (newStartIdx > newEndIdx) {
        // there are nodes in the `oldCh` array which no longer correspond to nodes
        // in the new array, so lets remove them (which entails cleaning up the
        // relevant DOM nodes)
        removeVnodes(oldCh, oldStartIdx, oldEndIdx);
    }
};
/**
 * Compare two VNodes to determine if they are the same
 *
 * **NB**: This function is an equality _heuristic_ based on the available
 * information set on the two VNodes and can be misleading under certain
 * circumstances. In particular, if the two nodes do not have `key` attrs
 * (available under `$key$` on VNodes) then the function falls back on merely
 * checking that they have the same tag.
 *
 * So, in other words, if `key` attrs are not set on VNodes which may be
 * changing order within a `children` array or something along those lines then
 * we could obtain a false positive and then have to do needless re-rendering.
 *
 * @param leftVNode the first VNode to check
 * @param rightVNode the second VNode to check
 * @returns whether they're equal or not
 */
const isSameVnode = (leftVNode, rightVNode) => {
    // compare if two vnode to see if they're "technically" the same
    // need to have the same element tag, and same key to be the same
    if (leftVNode.$tag$ === rightVNode.$tag$) {
        if (leftVNode.$tag$ === 'slot') {
            return leftVNode.$name$ === rightVNode.$name$;
        }
        // this will be set if components in the build have `key` attrs set on them
        {
            return leftVNode.$key$ === rightVNode.$key$;
        }
    }
    return false;
};
const referenceNode = (node) => {
    // this node was relocated to a new location in the dom
    // because of some other component's slot
    // but we still have an html comment in place of where
    // it's original location was according to it's original vdom
    return (node && node['s-ol']) || node;
};
const parentReferenceNode = (node) => (node['s-ol'] ? node['s-ol'] : node).parentNode;
/**
 * Handle reconciling an outdated VNode with a new one which corresponds to
 * it. This function handles flushing updates to the DOM and reconciling the
 * children of the two nodes (if any).
 *
 * @param oldVNode an old VNode whose DOM element and children we want to update
 * @param newVNode a new VNode representing an updated version of the old one
 */
const patch = (oldVNode, newVNode) => {
    const elm = (newVNode.$elm$ = oldVNode.$elm$);
    const oldChildren = oldVNode.$children$;
    const newChildren = newVNode.$children$;
    const tag = newVNode.$tag$;
    const text = newVNode.$text$;
    let defaultHolder;
    if (text === null) {
        {
            if (tag === 'slot')
                ;
            else {
                // either this is the first render of an element OR it's an update
                // AND we already know it's possible it could have changed
                // this updates the element's css classes, attrs, props, listeners, etc.
                updateElement(oldVNode, newVNode, isSvgMode);
            }
        }
        if (oldChildren !== null && newChildren !== null) {
            // looks like there's child vnodes for both the old and new vnodes
            // so we need to call `updateChildren` to reconcile them
            updateChildren(elm, oldChildren, newVNode, newChildren);
        }
        else if (newChildren !== null) {
            // no old child vnodes, but there are new child vnodes to add
            if (oldVNode.$text$ !== null) {
                // the old vnode was text, so be sure to clear it out
                elm.textContent = '';
            }
            // add the new vnode children
            addVnodes(elm, null, newVNode, newChildren, 0, newChildren.length - 1);
        }
        else if (oldChildren !== null) {
            // no new child vnodes, but there are old child vnodes to remove
            removeVnodes(oldChildren, 0, oldChildren.length - 1);
        }
    }
    else if ((defaultHolder = elm['s-cr'])) {
        // this element has slotted content
        defaultHolder.parentNode.textContent = text;
    }
    else if (oldVNode.$text$ !== text) {
        // update the text content for the text only vnode
        // and also only if the text is different than before
        elm.data = text;
    }
};
const updateFallbackSlotVisibility = (elm) => {
    // tslint:disable-next-line: prefer-const
    const childNodes = elm.childNodes;
    let childNode;
    let i;
    let ilen;
    let j;
    let slotNameAttr;
    let nodeType;
    for (i = 0, ilen = childNodes.length; i < ilen; i++) {
        childNode = childNodes[i];
        if (childNode.nodeType === 1 /* NODE_TYPE.ElementNode */) {
            if (childNode['s-sr']) {
                // this is a slot fallback node
                // get the slot name for this slot reference node
                slotNameAttr = childNode['s-sn'];
                // by default always show a fallback slot node
                // then hide it if there are other slots in the light dom
                childNode.hidden = false;
                for (j = 0; j < ilen; j++) {
                    nodeType = childNodes[j].nodeType;
                    if (childNodes[j]['s-hn'] !== childNode['s-hn'] || slotNameAttr !== '') {
                        // this sibling node is from a different component OR is a named fallback slot node
                        if (nodeType === 1 /* NODE_TYPE.ElementNode */ && slotNameAttr === childNodes[j].getAttribute('slot')) {
                            childNode.hidden = true;
                            break;
                        }
                    }
                    else {
                        // this is a default fallback slot node
                        // any element or text node (with content)
                        // should hide the default fallback slot node
                        if (nodeType === 1 /* NODE_TYPE.ElementNode */ ||
                            (nodeType === 3 /* NODE_TYPE.TextNode */ && childNodes[j].textContent.trim() !== '')) {
                            childNode.hidden = true;
                            break;
                        }
                    }
                }
            }
            // keep drilling down
            updateFallbackSlotVisibility(childNode);
        }
    }
};
const relocateNodes = [];
const relocateSlotContent = (elm) => {
    // tslint:disable-next-line: prefer-const
    let childNode;
    let node;
    let hostContentNodes;
    let slotNameAttr;
    let relocateNodeData;
    let j;
    let i = 0;
    const childNodes = elm.childNodes;
    const ilen = childNodes.length;
    for (; i < ilen; i++) {
        childNode = childNodes[i];
        if (childNode['s-sr'] && (node = childNode['s-cr']) && node.parentNode) {
            // first got the content reference comment node
            // then we got it's parent, which is where all the host content is in now
            hostContentNodes = node.parentNode.childNodes;
            slotNameAttr = childNode['s-sn'];
            for (j = hostContentNodes.length - 1; j >= 0; j--) {
                node = hostContentNodes[j];
                if (!node['s-cn'] && !node['s-nr'] && node['s-hn'] !== childNode['s-hn']) {
                    // let's do some relocating to its new home
                    // but never relocate a content reference node
                    // that is suppose to always represent the original content location
                    if (isNodeLocatedInSlot(node, slotNameAttr)) {
                        // it's possible we've already decided to relocate this node
                        relocateNodeData = relocateNodes.find((r) => r.$nodeToRelocate$ === node);
                        // made some changes to slots
                        // let's make sure we also double check
                        // fallbacks are correctly hidden or shown
                        checkSlotFallbackVisibility = true;
                        node['s-sn'] = node['s-sn'] || slotNameAttr;
                        if (relocateNodeData) {
                            // previously we never found a slot home for this node
                            // but turns out we did, so let's remember it now
                            relocateNodeData.$slotRefNode$ = childNode;
                        }
                        else {
                            // add to our list of nodes to relocate
                            relocateNodes.push({
                                $slotRefNode$: childNode,
                                $nodeToRelocate$: node,
                            });
                        }
                        if (node['s-sr']) {
                            relocateNodes.map((relocateNode) => {
                                if (isNodeLocatedInSlot(relocateNode.$nodeToRelocate$, node['s-sn'])) {
                                    relocateNodeData = relocateNodes.find((r) => r.$nodeToRelocate$ === node);
                                    if (relocateNodeData && !relocateNode.$slotRefNode$) {
                                        relocateNode.$slotRefNode$ = relocateNodeData.$slotRefNode$;
                                    }
                                }
                            });
                        }
                    }
                    else if (!relocateNodes.some((r) => r.$nodeToRelocate$ === node)) {
                        // so far this element does not have a slot home, not setting slotRefNode on purpose
                        // if we never find a home for this element then we'll need to hide it
                        relocateNodes.push({
                            $nodeToRelocate$: node,
                        });
                    }
                }
            }
        }
        if (childNode.nodeType === 1 /* NODE_TYPE.ElementNode */) {
            relocateSlotContent(childNode);
        }
    }
};
const isNodeLocatedInSlot = (nodeToRelocate, slotNameAttr) => {
    if (nodeToRelocate.nodeType === 1 /* NODE_TYPE.ElementNode */) {
        if (nodeToRelocate.getAttribute('slot') === null && slotNameAttr === '') {
            return true;
        }
        if (nodeToRelocate.getAttribute('slot') === slotNameAttr) {
            return true;
        }
        return false;
    }
    if (nodeToRelocate['s-sn'] === slotNameAttr) {
        return true;
    }
    return slotNameAttr === '';
};
const callNodeRefs = (vNode) => {
    {
        vNode.$attrs$ && vNode.$attrs$.ref && vNode.$attrs$.ref(null);
        vNode.$children$ && vNode.$children$.map(callNodeRefs);
    }
};
const renderVdom = (hostRef, renderFnResults) => {
    const hostElm = hostRef.$hostElement$;
    const cmpMeta = hostRef.$cmpMeta$;
    const oldVNode = hostRef.$vnode$ || newVNode(null, null);
    const rootVnode = isHost(renderFnResults) ? renderFnResults : h(null, null, renderFnResults);
    hostTagName = hostElm.tagName;
    if (cmpMeta.$attrsToReflect$) {
        rootVnode.$attrs$ = rootVnode.$attrs$ || {};
        cmpMeta.$attrsToReflect$.map(([propName, attribute]) => (rootVnode.$attrs$[attribute] = hostElm[propName]));
    }
    rootVnode.$tag$ = null;
    rootVnode.$flags$ |= 4 /* VNODE_FLAGS.isHost */;
    hostRef.$vnode$ = rootVnode;
    rootVnode.$elm$ = oldVNode.$elm$ = (hostElm.shadowRoot || hostElm );
    {
        scopeId = hostElm['s-sc'];
    }
    {
        contentRef = hostElm['s-cr'];
        useNativeShadowDom = (cmpMeta.$flags$ & 1 /* CMP_FLAGS.shadowDomEncapsulation */) !== 0;
        // always reset
        checkSlotFallbackVisibility = false;
    }
    // synchronous patch
    patch(oldVNode, rootVnode);
    {
        // while we're moving nodes around existing nodes, temporarily disable
        // the disconnectCallback from working
        plt.$flags$ |= 1 /* PLATFORM_FLAGS.isTmpDisconnected */;
        if (checkSlotRelocate) {
            relocateSlotContent(rootVnode.$elm$);
            let relocateData;
            let nodeToRelocate;
            let orgLocationNode;
            let parentNodeRef;
            let insertBeforeNode;
            let refNode;
            let i = 0;
            for (; i < relocateNodes.length; i++) {
                relocateData = relocateNodes[i];
                nodeToRelocate = relocateData.$nodeToRelocate$;
                if (!nodeToRelocate['s-ol']) {
                    // add a reference node marking this node's original location
                    // keep a reference to this node for later lookups
                    orgLocationNode =
                        doc.createTextNode('');
                    orgLocationNode['s-nr'] = nodeToRelocate;
                    nodeToRelocate.parentNode.insertBefore((nodeToRelocate['s-ol'] = orgLocationNode), nodeToRelocate);
                }
            }
            for (i = 0; i < relocateNodes.length; i++) {
                relocateData = relocateNodes[i];
                nodeToRelocate = relocateData.$nodeToRelocate$;
                if (relocateData.$slotRefNode$) {
                    // by default we're just going to insert it directly
                    // after the slot reference node
                    parentNodeRef = relocateData.$slotRefNode$.parentNode;
                    insertBeforeNode = relocateData.$slotRefNode$.nextSibling;
                    orgLocationNode = nodeToRelocate['s-ol'];
                    while ((orgLocationNode = orgLocationNode.previousSibling)) {
                        refNode = orgLocationNode['s-nr'];
                        if (refNode && refNode['s-sn'] === nodeToRelocate['s-sn'] && parentNodeRef === refNode.parentNode) {
                            refNode = refNode.nextSibling;
                            if (!refNode || !refNode['s-nr']) {
                                insertBeforeNode = refNode;
                                break;
                            }
                        }
                    }
                    if ((!insertBeforeNode && parentNodeRef !== nodeToRelocate.parentNode) ||
                        nodeToRelocate.nextSibling !== insertBeforeNode) {
                        // we've checked that it's worth while to relocate
                        // since that the node to relocate
                        // has a different next sibling or parent relocated
                        if (nodeToRelocate !== insertBeforeNode) {
                            if (!nodeToRelocate['s-hn'] && nodeToRelocate['s-ol']) {
                                // probably a component in the index.html that doesn't have it's hostname set
                                nodeToRelocate['s-hn'] = nodeToRelocate['s-ol'].parentNode.nodeName;
                            }
                            // add it back to the dom but in its new home
                            parentNodeRef.insertBefore(nodeToRelocate, insertBeforeNode);
                        }
                    }
                }
                else {
                    // this node doesn't have a slot home to go to, so let's hide it
                    if (nodeToRelocate.nodeType === 1 /* NODE_TYPE.ElementNode */) {
                        nodeToRelocate.hidden = true;
                    }
                }
            }
        }
        if (checkSlotFallbackVisibility) {
            updateFallbackSlotVisibility(rootVnode.$elm$);
        }
        // done moving nodes around
        // allow the disconnect callback to work again
        plt.$flags$ &= ~1 /* PLATFORM_FLAGS.isTmpDisconnected */;
        // always reset
        relocateNodes.length = 0;
    }
};
const attachToAncestor = (hostRef, ancestorComponent) => {
    if (ancestorComponent && !hostRef.$onRenderResolve$ && ancestorComponent['s-p']) {
        ancestorComponent['s-p'].push(new Promise((r) => (hostRef.$onRenderResolve$ = r)));
    }
};
const scheduleUpdate = (hostRef, isInitialLoad) => {
    {
        hostRef.$flags$ |= 16 /* HOST_FLAGS.isQueuedForUpdate */;
    }
    if (hostRef.$flags$ & 4 /* HOST_FLAGS.isWaitingForChildren */) {
        hostRef.$flags$ |= 512 /* HOST_FLAGS.needsRerender */;
        return;
    }
    attachToAncestor(hostRef, hostRef.$ancestorComponent$);
    // there is no ancestor component or the ancestor component
    // has already fired off its lifecycle update then
    // fire off the initial update
    const dispatch = () => dispatchHooks(hostRef, isInitialLoad);
    return writeTask(dispatch) ;
};
const dispatchHooks = (hostRef, isInitialLoad) => {
    const endSchedule = createTime('scheduleUpdate', hostRef.$cmpMeta$.$tagName$);
    const instance = hostRef.$lazyInstance$ ;
    let promise;
    if (isInitialLoad) {
        {
            hostRef.$flags$ |= 256 /* HOST_FLAGS.isListenReady */;
            if (hostRef.$queuedListeners$) {
                hostRef.$queuedListeners$.map(([methodName, event]) => safeCall(instance, methodName, event));
                hostRef.$queuedListeners$ = null;
            }
        }
        {
            promise = safeCall(instance, 'componentWillLoad');
        }
    }
    endSchedule();
    return then(promise, () => updateComponent(hostRef, instance, isInitialLoad));
};
const updateComponent = async (hostRef, instance, isInitialLoad) => {
    // updateComponent
    const elm = hostRef.$hostElement$;
    const endUpdate = createTime('update', hostRef.$cmpMeta$.$tagName$);
    const rc = elm['s-rc'];
    if (isInitialLoad) {
        // DOM WRITE!
        attachStyles(hostRef);
    }
    const endRender = createTime('render', hostRef.$cmpMeta$.$tagName$);
    {
        callRender(hostRef, instance);
    }
    if (rc) {
        // ok, so turns out there are some child host elements
        // waiting on this parent element to load
        // let's fire off all update callbacks waiting
        rc.map((cb) => cb());
        elm['s-rc'] = undefined;
    }
    endRender();
    endUpdate();
    {
        const childrenPromises = elm['s-p'];
        const postUpdate = () => postUpdateComponent(hostRef);
        if (childrenPromises.length === 0) {
            postUpdate();
        }
        else {
            Promise.all(childrenPromises).then(postUpdate);
            hostRef.$flags$ |= 4 /* HOST_FLAGS.isWaitingForChildren */;
            childrenPromises.length = 0;
        }
    }
};
const callRender = (hostRef, instance, elm) => {
    try {
        renderingRef = instance;
        instance = instance.render() ;
        {
            hostRef.$flags$ &= ~16 /* HOST_FLAGS.isQueuedForUpdate */;
        }
        {
            hostRef.$flags$ |= 2 /* HOST_FLAGS.hasRendered */;
        }
        {
            {
                // looks like we've got child nodes to render into this host element
                // or we need to update the css class/attrs on the host element
                // DOM WRITE!
                {
                    renderVdom(hostRef, instance);
                }
            }
        }
    }
    catch (e) {
        consoleError(e, hostRef.$hostElement$);
    }
    renderingRef = null;
    return null;
};
const getRenderingRef = () => renderingRef;
const postUpdateComponent = (hostRef) => {
    const tagName = hostRef.$cmpMeta$.$tagName$;
    const elm = hostRef.$hostElement$;
    const endPostUpdate = createTime('postUpdate', tagName);
    const instance = hostRef.$lazyInstance$ ;
    const ancestorComponent = hostRef.$ancestorComponent$;
    {
        safeCall(instance, 'componentDidRender');
    }
    if (!(hostRef.$flags$ & 64 /* HOST_FLAGS.hasLoadedComponent */)) {
        hostRef.$flags$ |= 64 /* HOST_FLAGS.hasLoadedComponent */;
        {
            // DOM WRITE!
            addHydratedFlag(elm);
        }
        {
            safeCall(instance, 'componentDidLoad');
        }
        endPostUpdate();
        {
            hostRef.$onReadyResolve$(elm);
            if (!ancestorComponent) {
                appDidLoad();
            }
        }
    }
    else {
        endPostUpdate();
    }
    {
        hostRef.$onInstanceResolve$(elm);
    }
    // load events fire from bottom to top
    // the deepest elements load first then bubbles up
    {
        if (hostRef.$onRenderResolve$) {
            hostRef.$onRenderResolve$();
            hostRef.$onRenderResolve$ = undefined;
        }
        if (hostRef.$flags$ & 512 /* HOST_FLAGS.needsRerender */) {
            nextTick(() => scheduleUpdate(hostRef, false));
        }
        hostRef.$flags$ &= ~(4 /* HOST_FLAGS.isWaitingForChildren */ | 512 /* HOST_FLAGS.needsRerender */);
    }
    // ( •_•)
    // ( •_•)>⌐■-■
    // (⌐■_■)
};
const forceUpdate = (ref) => {
    {
        const hostRef = getHostRef(ref);
        const isConnected = hostRef.$hostElement$.isConnected;
        if (isConnected &&
            (hostRef.$flags$ & (2 /* HOST_FLAGS.hasRendered */ | 16 /* HOST_FLAGS.isQueuedForUpdate */)) === 2 /* HOST_FLAGS.hasRendered */) {
            scheduleUpdate(hostRef, false);
        }
        // Returns "true" when the forced update was successfully scheduled
        return isConnected;
    }
};
const appDidLoad = (who) => {
    // on appload
    // we have finish the first big initial render
    {
        addHydratedFlag(doc.documentElement);
    }
    nextTick(() => emitEvent(win, 'appload', { detail: { namespace: NAMESPACE } }));
};
const safeCall = (instance, method, arg) => {
    if (instance && instance[method]) {
        try {
            return instance[method](arg);
        }
        catch (e) {
            consoleError(e);
        }
    }
    return undefined;
};
const then = (promise, thenFn) => {
    return promise && promise.then ? promise.then(thenFn) : thenFn();
};
const addHydratedFlag = (elm) => elm.classList.add('hydrated')
    ;
const getValue = (ref, propName) => getHostRef(ref).$instanceValues$.get(propName);
const setValue = (ref, propName, newVal, cmpMeta) => {
    // check our new property value against our internal value
    const hostRef = getHostRef(ref);
    const elm = hostRef.$hostElement$ ;
    const oldVal = hostRef.$instanceValues$.get(propName);
    const flags = hostRef.$flags$;
    const instance = hostRef.$lazyInstance$ ;
    newVal = parsePropertyValue(newVal, cmpMeta.$members$[propName][0]);
    // explicitly check for NaN on both sides, as `NaN === NaN` is always false
    const areBothNaN = Number.isNaN(oldVal) && Number.isNaN(newVal);
    const didValueChange = newVal !== oldVal && !areBothNaN;
    if ((!(flags & 8 /* HOST_FLAGS.isConstructingInstance */) || oldVal === undefined) && didValueChange) {
        // gadzooks! the property's value has changed!!
        // set our new value!
        hostRef.$instanceValues$.set(propName, newVal);
        if (instance) {
            // get an array of method names of watch functions to call
            if (cmpMeta.$watchers$ && flags & 128 /* HOST_FLAGS.isWatchReady */) {
                const watchMethods = cmpMeta.$watchers$[propName];
                if (watchMethods) {
                    // this instance is watching for when this property changed
                    watchMethods.map((watchMethodName) => {
                        try {
                            // fire off each of the watch methods that are watching this property
                            instance[watchMethodName](newVal, oldVal, propName);
                        }
                        catch (e) {
                            consoleError(e, elm);
                        }
                    });
                }
            }
            if ((flags & (2 /* HOST_FLAGS.hasRendered */ | 16 /* HOST_FLAGS.isQueuedForUpdate */)) === 2 /* HOST_FLAGS.hasRendered */) {
                // looks like this value actually changed, so we've got work to do!
                // but only if we've already rendered, otherwise just chill out
                // queue that we need to do an update, but don't worry about queuing
                // up millions cuz this function ensures it only runs once
                scheduleUpdate(hostRef, false);
            }
        }
    }
};
/**
 * Attach a series of runtime constructs to a compiled Stencil component
 * constructor, including getters and setters for the `@Prop` and `@State`
 * decorators, callbacks for when attributes change, and so on.
 *
 * @param Cstr the constructor for a component that we need to process
 * @param cmpMeta metadata collected previously about the component
 * @param flags a number used to store a series of bit flags
 * @returns a reference to the same constructor passed in (but now mutated)
 */
const proxyComponent = (Cstr, cmpMeta, flags) => {
    if (cmpMeta.$members$) {
        if (Cstr.watchers) {
            cmpMeta.$watchers$ = Cstr.watchers;
        }
        // It's better to have a const than two Object.entries()
        const members = Object.entries(cmpMeta.$members$);
        const prototype = Cstr.prototype;
        members.map(([memberName, [memberFlags]]) => {
            if ((memberFlags & 31 /* MEMBER_FLAGS.Prop */ ||
                    ((flags & 2 /* PROXY_FLAGS.proxyState */) && memberFlags & 32 /* MEMBER_FLAGS.State */))) {
                // proxyComponent - prop
                Object.defineProperty(prototype, memberName, {
                    get() {
                        // proxyComponent, get value
                        return getValue(this, memberName);
                    },
                    set(newValue) {
                        // proxyComponent, set value
                        setValue(this, memberName, newValue, cmpMeta);
                    },
                    configurable: true,
                    enumerable: true,
                });
            }
            else if (flags & 1 /* PROXY_FLAGS.isElementConstructor */ &&
                memberFlags & 64 /* MEMBER_FLAGS.Method */) {
                // proxyComponent - method
                Object.defineProperty(prototype, memberName, {
                    value(...args) {
                        const ref = getHostRef(this);
                        return ref.$onInstancePromise$.then(() => ref.$lazyInstance$[memberName](...args));
                    },
                });
            }
        });
        if ((flags & 1 /* PROXY_FLAGS.isElementConstructor */)) {
            const attrNameToPropName = new Map();
            prototype.attributeChangedCallback = function (attrName, _oldValue, newValue) {
                plt.jmp(() => {
                    const propName = attrNameToPropName.get(attrName);
                    //  In a web component lifecycle the attributeChangedCallback runs prior to connectedCallback
                    //  in the case where an attribute was set inline.
                    //  ```html
                    //    <my-component some-attribute="some-value"></my-component>
                    //  ```
                    //
                    //  There is an edge case where a developer sets the attribute inline on a custom element and then
                    //  programmatically changes it before it has been upgraded as shown below:
                    //
                    //  ```html
                    //    <!-- this component has _not_ been upgraded yet -->
                    //    <my-component id="test" some-attribute="some-value"></my-component>
                    //    <script>
                    //      // grab non-upgraded component
                    //      el = document.querySelector("#test");
                    //      el.someAttribute = "another-value";
                    //      // upgrade component
                    //      customElements.define('my-component', MyComponent);
                    //    </script>
                    //  ```
                    //  In this case if we do not unshadow here and use the value of the shadowing property, attributeChangedCallback
                    //  will be called with `newValue = "some-value"` and will set the shadowed property (this.someAttribute = "another-value")
                    //  to the value that was set inline i.e. "some-value" from above example. When
                    //  the connectedCallback attempts to unshadow it will use "some-value" as the initial value rather than "another-value"
                    //
                    //  The case where the attribute was NOT set inline but was not set programmatically shall be handled/unshadowed
                    //  by connectedCallback as this attributeChangedCallback will not fire.
                    //
                    //  https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
                    //
                    //  TODO(STENCIL-16) we should think about whether or not we actually want to be reflecting the attributes to
                    //  properties here given that this goes against best practices outlined here
                    //  https://developers.google.com/web/fundamentals/web-components/best-practices#avoid-reentrancy
                    if (this.hasOwnProperty(propName)) {
                        newValue = this[propName];
                        delete this[propName];
                    }
                    else if (prototype.hasOwnProperty(propName) &&
                        typeof this[propName] === 'number' &&
                        this[propName] == newValue) {
                        // if the propName exists on the prototype of `Cstr`, this update may be a result of Stencil using native
                        // APIs to reflect props as attributes. Calls to `setAttribute(someElement, propName)` will result in
                        // `propName` to be converted to a `DOMString`, which may not be what we want for other primitive props.
                        return;
                    }
                    this[propName] = newValue === null && typeof this[propName] === 'boolean' ? false : newValue;
                });
            };
            // create an array of attributes to observe
            // and also create a map of html attribute name to js property name
            Cstr.observedAttributes = members
                .filter(([_, m]) => m[0] & 15 /* MEMBER_FLAGS.HasAttribute */) // filter to only keep props that should match attributes
                .map(([propName, m]) => {
                const attrName = m[1] || propName;
                attrNameToPropName.set(attrName, propName);
                if (m[0] & 512 /* MEMBER_FLAGS.ReflectAttr */) {
                    cmpMeta.$attrsToReflect$.push([propName, attrName]);
                }
                return attrName;
            });
        }
    }
    return Cstr;
};
const initializeComponent = async (elm, hostRef, cmpMeta, hmrVersionId, Cstr) => {
    // initializeComponent
    if ((hostRef.$flags$ & 32 /* HOST_FLAGS.hasInitializedComponent */) === 0) {
        {
            // we haven't initialized this element yet
            hostRef.$flags$ |= 32 /* HOST_FLAGS.hasInitializedComponent */;
            // lazy loaded components
            // request the component's implementation to be
            // wired up with the host element
            Cstr = loadModule(cmpMeta);
            if (Cstr.then) {
                // Await creates a micro-task avoid if possible
                const endLoad = uniqueTime();
                Cstr = await Cstr;
                endLoad();
            }
            if (!Cstr.isProxied) {
                // we've never proxied this Constructor before
                // let's add the getters/setters to its prototype before
                // the first time we create an instance of the implementation
                {
                    cmpMeta.$watchers$ = Cstr.watchers;
                }
                proxyComponent(Cstr, cmpMeta, 2 /* PROXY_FLAGS.proxyState */);
                Cstr.isProxied = true;
            }
            const endNewInstance = createTime('createInstance', cmpMeta.$tagName$);
            // ok, time to construct the instance
            // but let's keep track of when we start and stop
            // so that the getters/setters don't incorrectly step on data
            {
                hostRef.$flags$ |= 8 /* HOST_FLAGS.isConstructingInstance */;
            }
            // construct the lazy-loaded component implementation
            // passing the hostRef is very important during
            // construction in order to directly wire together the
            // host element and the lazy-loaded instance
            try {
                new Cstr(hostRef);
            }
            catch (e) {
                consoleError(e);
            }
            {
                hostRef.$flags$ &= ~8 /* HOST_FLAGS.isConstructingInstance */;
            }
            {
                hostRef.$flags$ |= 128 /* HOST_FLAGS.isWatchReady */;
            }
            endNewInstance();
            fireConnectedCallback(hostRef.$lazyInstance$);
        }
        if (Cstr.style) {
            // this component has styles but we haven't registered them yet
            let style = Cstr.style;
            const scopeId = getScopeId(cmpMeta);
            if (!styles.has(scopeId)) {
                const endRegisterStyles = createTime('registerStyles', cmpMeta.$tagName$);
                registerStyle(scopeId, style, !!(cmpMeta.$flags$ & 1 /* CMP_FLAGS.shadowDomEncapsulation */));
                endRegisterStyles();
            }
        }
    }
    // we've successfully created a lazy instance
    const ancestorComponent = hostRef.$ancestorComponent$;
    const schedule = () => scheduleUpdate(hostRef, true);
    if (ancestorComponent && ancestorComponent['s-rc']) {
        // this is the initial load and this component it has an ancestor component
        // but the ancestor component has NOT fired its will update lifecycle yet
        // so let's just cool our jets and wait for the ancestor to continue first
        // this will get fired off when the ancestor component
        // finally gets around to rendering its lazy self
        // fire off the initial update
        ancestorComponent['s-rc'].push(schedule);
    }
    else {
        schedule();
    }
};
const fireConnectedCallback = (instance) => {
    {
        safeCall(instance, 'connectedCallback');
    }
};
const connectedCallback = (elm) => {
    if ((plt.$flags$ & 1 /* PLATFORM_FLAGS.isTmpDisconnected */) === 0) {
        const hostRef = getHostRef(elm);
        const cmpMeta = hostRef.$cmpMeta$;
        const endConnected = createTime('connectedCallback', cmpMeta.$tagName$);
        if (!(hostRef.$flags$ & 1 /* HOST_FLAGS.hasConnected */)) {
            // first time this component has connected
            hostRef.$flags$ |= 1 /* HOST_FLAGS.hasConnected */;
            {
                // initUpdate
                // if the slot polyfill is required we'll need to put some nodes
                // in here to act as original content anchors as we move nodes around
                // host element has been connected to the DOM
                if ((cmpMeta.$flags$ & (4 /* CMP_FLAGS.hasSlotRelocation */ | 8 /* CMP_FLAGS.needsShadowDomShim */))) {
                    setContentReference(elm);
                }
            }
            {
                // find the first ancestor component (if there is one) and register
                // this component as one of the actively loading child components for its ancestor
                let ancestorComponent = elm;
                while ((ancestorComponent = ancestorComponent.parentNode || ancestorComponent.host)) {
                    // climb up the ancestors looking for the first
                    // component that hasn't finished its lifecycle update yet
                    if (ancestorComponent['s-p']) {
                        // we found this components first ancestor component
                        // keep a reference to this component's ancestor component
                        attachToAncestor(hostRef, (hostRef.$ancestorComponent$ = ancestorComponent));
                        break;
                    }
                }
            }
            // Lazy properties
            // https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
            if (cmpMeta.$members$) {
                Object.entries(cmpMeta.$members$).map(([memberName, [memberFlags]]) => {
                    if (memberFlags & 31 /* MEMBER_FLAGS.Prop */ && elm.hasOwnProperty(memberName)) {
                        const value = elm[memberName];
                        delete elm[memberName];
                        elm[memberName] = value;
                    }
                });
            }
            {
                initializeComponent(elm, hostRef, cmpMeta);
            }
        }
        else {
            // not the first time this has connected
            // reattach any event listeners to the host
            // since they would have been removed when disconnected
            addHostEventListeners(elm, hostRef, cmpMeta.$listeners$);
            // fire off connectedCallback() on component instance
            fireConnectedCallback(hostRef.$lazyInstance$);
        }
        endConnected();
    }
};
const setContentReference = (elm) => {
    // only required when we're NOT using native shadow dom (slot)
    // or this browser doesn't support native shadow dom
    // and this host element was NOT created with SSR
    // let's pick out the inner content for slot projection
    // create a node to represent where the original
    // content was first placed, which is useful later on
    const contentRefElm = (elm['s-cr'] = doc.createComment(''));
    contentRefElm['s-cn'] = true;
    elm.insertBefore(contentRefElm, elm.firstChild);
};
const disconnectedCallback = (elm) => {
    if ((plt.$flags$ & 1 /* PLATFORM_FLAGS.isTmpDisconnected */) === 0) {
        const hostRef = getHostRef(elm);
        const instance = hostRef.$lazyInstance$ ;
        {
            if (hostRef.$rmListeners$) {
                hostRef.$rmListeners$.map((rmListener) => rmListener());
                hostRef.$rmListeners$ = undefined;
            }
        }
        {
            safeCall(instance, 'disconnectedCallback');
        }
    }
};
const bootstrapLazy = (lazyBundles, options = {}) => {
    const endBootstrap = createTime();
    const cmpTags = [];
    const exclude = options.exclude || [];
    const customElements = win.customElements;
    const head = doc.head;
    const metaCharset = /*@__PURE__*/ head.querySelector('meta[charset]');
    const visibilityStyle = /*@__PURE__*/ doc.createElement('style');
    const deferredConnectedCallbacks = [];
    let appLoadFallback;
    let isBootstrapping = true;
    Object.assign(plt, options);
    plt.$resourcesUrl$ = new URL(options.resourcesUrl || './', doc.baseURI).href;
    lazyBundles.map((lazyBundle) => {
        lazyBundle[1].map((compactMeta) => {
            const cmpMeta = {
                $flags$: compactMeta[0],
                $tagName$: compactMeta[1],
                $members$: compactMeta[2],
                $listeners$: compactMeta[3],
            };
            {
                cmpMeta.$members$ = compactMeta[2];
            }
            {
                cmpMeta.$listeners$ = compactMeta[3];
            }
            {
                cmpMeta.$attrsToReflect$ = [];
            }
            {
                cmpMeta.$watchers$ = {};
            }
            const tagName = cmpMeta.$tagName$;
            const HostElement = class extends HTMLElement {
                // StencilLazyHost
                constructor(self) {
                    // @ts-ignore
                    super(self);
                    self = this;
                    registerHost(self, cmpMeta);
                    if (cmpMeta.$flags$ & 1 /* CMP_FLAGS.shadowDomEncapsulation */) {
                        // this component is using shadow dom
                        // and this browser supports shadow dom
                        // add the read-only property "shadowRoot" to the host element
                        // adding the shadow root build conditionals to minimize runtime
                        {
                            {
                                self.attachShadow({ mode: 'open' });
                            }
                        }
                    }
                }
                connectedCallback() {
                    if (appLoadFallback) {
                        clearTimeout(appLoadFallback);
                        appLoadFallback = null;
                    }
                    if (isBootstrapping) {
                        // connectedCallback will be processed once all components have been registered
                        deferredConnectedCallbacks.push(this);
                    }
                    else {
                        plt.jmp(() => connectedCallback(this));
                    }
                }
                disconnectedCallback() {
                    plt.jmp(() => disconnectedCallback(this));
                }
                componentOnReady() {
                    return getHostRef(this).$onReadyPromise$;
                }
            };
            cmpMeta.$lazyBundleId$ = lazyBundle[0];
            if (!exclude.includes(tagName) && !customElements.get(tagName)) {
                cmpTags.push(tagName);
                customElements.define(tagName, proxyComponent(HostElement, cmpMeta, 1 /* PROXY_FLAGS.isElementConstructor */));
            }
        });
    });
    {
        visibilityStyle.innerHTML = cmpTags + HYDRATED_CSS;
        visibilityStyle.setAttribute('data-styles', '');
        head.insertBefore(visibilityStyle, metaCharset ? metaCharset.nextSibling : head.firstChild);
    }
    // Process deferred connectedCallbacks now all components have been registered
    isBootstrapping = false;
    if (deferredConnectedCallbacks.length) {
        deferredConnectedCallbacks.map((host) => host.connectedCallback());
    }
    else {
        {
            plt.jmp(() => (appLoadFallback = setTimeout(appDidLoad, 30)));
        }
    }
    // Fallback appLoad event
    endBootstrap();
};
const Fragment = (_, children) => children;
const addHostEventListeners = (elm, hostRef, listeners, attachParentListeners) => {
    if (listeners) {
        listeners.map(([flags, name, method]) => {
            const target = getHostListenerTarget(elm, flags) ;
            const handler = hostListenerProxy(hostRef, method);
            const opts = hostListenerOpts(flags);
            plt.ael(target, name, handler, opts);
            (hostRef.$rmListeners$ = hostRef.$rmListeners$ || []).push(() => plt.rel(target, name, handler, opts));
        });
    }
};
const hostListenerProxy = (hostRef, methodName) => (ev) => {
    try {
        {
            if (hostRef.$flags$ & 256 /* HOST_FLAGS.isListenReady */) {
                // instance is ready, let's call it's member method for this event
                hostRef.$lazyInstance$[methodName](ev);
            }
            else {
                (hostRef.$queuedListeners$ = hostRef.$queuedListeners$ || []).push([methodName, ev]);
            }
        }
    }
    catch (e) {
        consoleError(e);
    }
};
const getHostListenerTarget = (elm, flags) => {
    if (flags & 8 /* LISTENER_FLAGS.TargetWindow */)
        return win;
    return elm;
};
// prettier-ignore
const hostListenerOpts = (flags) => (flags & 2 /* LISTENER_FLAGS.Capture */) !== 0;
const hostRefs = /*@__PURE__*/ new WeakMap();
const getHostRef = (ref) => hostRefs.get(ref);
const registerInstance = (lazyInstance, hostRef) => hostRefs.set((hostRef.$lazyInstance$ = lazyInstance), hostRef);
const registerHost = (elm, cmpMeta) => {
    const hostRef = {
        $flags$: 0,
        $hostElement$: elm,
        $cmpMeta$: cmpMeta,
        $instanceValues$: new Map(),
    };
    {
        hostRef.$onInstancePromise$ = new Promise((r) => (hostRef.$onInstanceResolve$ = r));
    }
    {
        hostRef.$onReadyPromise$ = new Promise((r) => (hostRef.$onReadyResolve$ = r));
        elm['s-p'] = [];
        elm['s-rc'] = [];
    }
    addHostEventListeners(elm, hostRef, cmpMeta.$listeners$);
    return hostRefs.set(elm, hostRef);
};
const isMemberInElement = (elm, memberName) => memberName in elm;
const consoleError = (e, el) => (0, console.error)(e, el);
const cmpModules = /*@__PURE__*/ new Map();
const loadModule = (cmpMeta, hostRef, hmrVersionId) => {
    // loadModuleImport
    const exportName = cmpMeta.$tagName$.replace(/-/g, '_');
    const bundleId = cmpMeta.$lazyBundleId$;
    const module = cmpModules.get(bundleId) ;
    if (module) {
        return module[exportName];
    }
    
    if (!hmrVersionId || !BUILD.hotModuleReplacement) {
      const processMod = importedModule => {
        cmpModules.set(bundleId, importedModule);
        return importedModule[exportName];
      }
      switch(bundleId) {
        
        case 'dyte-meeting':
          return __webpack_require__.e(/* import() */ 9319).then(__webpack_require__.bind(__webpack_require__, 29319)).then(processMod, consoleError);
        case 'dyte-ai':
          return __webpack_require__.e(/* import() */ 8798).then(__webpack_require__.bind(__webpack_require__, 98798)).then(processMod, consoleError);
        case 'dyte-ai-chat':
          return __webpack_require__.e(/* import() */ 3343).then(__webpack_require__.bind(__webpack_require__, 83343)).then(processMod, consoleError);
        case 'dyte-ai-home':
          return __webpack_require__.e(/* import() */ 8419).then(__webpack_require__.bind(__webpack_require__, 88419)).then(processMod, consoleError);
        case 'dyte-ai-toggle':
          return __webpack_require__.e(/* import() */ 893).then(__webpack_require__.bind(__webpack_require__, 10893)).then(processMod, consoleError);
        case 'dyte-ai-transcriptions':
          return __webpack_require__.e(/* import() */ 3814).then(__webpack_require__.bind(__webpack_require__, 73814)).then(processMod, consoleError);
        case 'dyte-breakout-rooms-manager':
          return __webpack_require__.e(/* import() */ 9680).then(__webpack_require__.bind(__webpack_require__, 69680)).then(processMod, consoleError);
        case 'dyte-breakout-rooms-toggle':
          return __webpack_require__.e(/* import() */ 6545).then(__webpack_require__.bind(__webpack_require__, 16545)).then(processMod, consoleError);
        case 'dyte-broadcast-message-modal':
          return __webpack_require__.e(/* import() */ 5479).then(__webpack_require__.bind(__webpack_require__, 2691)).then(processMod, consoleError);
        case 'dyte-camera-toggle':
          return __webpack_require__.e(/* import() */ 5329).then(__webpack_require__.bind(__webpack_require__, 35329)).then(processMod, consoleError);
        case 'dyte-channel-creator':
          return __webpack_require__.e(/* import() */ 9660).then(__webpack_require__.bind(__webpack_require__, 49660)).then(processMod, consoleError);
        case 'dyte-chat':
          return __webpack_require__.e(/* import() */ 4667).then(__webpack_require__.bind(__webpack_require__, 4667)).then(processMod, consoleError);
        case 'dyte-chat-toggle':
          return __webpack_require__.e(/* import() */ 573).then(__webpack_require__.bind(__webpack_require__, 70573)).then(processMod, consoleError);
        case 'dyte-clock':
          return __webpack_require__.e(/* import() */ 3585).then(__webpack_require__.bind(__webpack_require__, 73585)).then(processMod, consoleError);
        case 'dyte-confirmation-modal':
          return __webpack_require__.e(/* import() */ 6348).then(__webpack_require__.bind(__webpack_require__, 66348)).then(processMod, consoleError);
        case 'dyte-controlbar':
          return __webpack_require__.e(/* import() */ 1717).then(__webpack_require__.bind(__webpack_require__, 41717)).then(processMod, consoleError);
        case 'dyte-ended-screen':
          return __webpack_require__.e(/* import() */ 7200).then(__webpack_require__.bind(__webpack_require__, 47200)).then(processMod, consoleError);
        case 'dyte-fullscreen-toggle':
          return __webpack_require__.e(/* import() */ 5486).then(__webpack_require__.bind(__webpack_require__, 5486)).then(processMod, consoleError);
        case 'dyte-grid':
          return __webpack_require__.e(/* import() */ 4737).then(__webpack_require__.bind(__webpack_require__, 74737)).then(processMod, consoleError);
        case 'dyte-grid-pagination':
          return __webpack_require__.e(/* import() */ 5203).then(__webpack_require__.bind(__webpack_require__, 55203)).then(processMod, consoleError);
        case 'dyte-header':
          return __webpack_require__.e(/* import() */ 5792).then(__webpack_require__.bind(__webpack_require__, 55792)).then(processMod, consoleError);
        case 'dyte-idle-screen':
          return __webpack_require__.e(/* import() */ 3505).then(__webpack_require__.bind(__webpack_require__, 13505)).then(processMod, consoleError);
        case 'dyte-image-viewer':
          return __webpack_require__.e(/* import() */ 7331).then(__webpack_require__.bind(__webpack_require__, 77331)).then(processMod, consoleError);
        case 'dyte-leave-button':
          return __webpack_require__.e(/* import() */ 7834).then(__webpack_require__.bind(__webpack_require__, 87834)).then(processMod, consoleError);
        case 'dyte-leave-meeting':
          return __webpack_require__.e(/* import() */ 8557).then(__webpack_require__.bind(__webpack_require__, 78557)).then(processMod, consoleError);
        case 'dyte-livestream-indicator':
          return __webpack_require__.e(/* import() */ 969).then(__webpack_require__.bind(__webpack_require__, 60969)).then(processMod, consoleError);
        case 'dyte-livestream-toggle':
          return __webpack_require__.e(/* import() */ 4482).then(__webpack_require__.bind(__webpack_require__, 54482)).then(processMod, consoleError);
        case 'dyte-meeting-title':
          return __webpack_require__.e(/* import() */ 3797).then(__webpack_require__.bind(__webpack_require__, 73797)).then(processMod, consoleError);
        case 'dyte-mic-toggle':
          return __webpack_require__.e(/* import() */ 6676).then(__webpack_require__.bind(__webpack_require__, 66676)).then(processMod, consoleError);
        case 'dyte-mixed-grid':
          return __webpack_require__.e(/* import() */ 7121).then(__webpack_require__.bind(__webpack_require__, 67121)).then(processMod, consoleError);
        case 'dyte-more-toggle':
          return __webpack_require__.e(/* import() */ 1196).then(__webpack_require__.bind(__webpack_require__, 98905)).then(processMod, consoleError);
        case 'dyte-mute-all-button':
          return __webpack_require__.e(/* import() */ 7904).then(__webpack_require__.bind(__webpack_require__, 27904)).then(processMod, consoleError);
        case 'dyte-mute-all-confirmation':
          return __webpack_require__.e(/* import() */ 8327).then(__webpack_require__.bind(__webpack_require__, 28327)).then(processMod, consoleError);
        case 'dyte-name-tag':
          return __webpack_require__.e(/* import() */ 5213).then(__webpack_require__.bind(__webpack_require__, 25213)).then(processMod, consoleError);
        case 'dyte-network-indicator':
          return __webpack_require__.e(/* import() */ 2047).then(__webpack_require__.bind(__webpack_require__, 22047)).then(processMod, consoleError);
        case 'dyte-participant-count':
          return __webpack_require__.e(/* import() */ 8915).then(__webpack_require__.bind(__webpack_require__, 78915)).then(processMod, consoleError);
        case 'dyte-participant-setup':
          return __webpack_require__.e(/* import() */ 4483).then(__webpack_require__.bind(__webpack_require__, 94483)).then(processMod, consoleError);
        case 'dyte-participants':
          return __webpack_require__.e(/* import() */ 1324).then(__webpack_require__.bind(__webpack_require__, 11324)).then(processMod, consoleError);
        case 'dyte-participants-audio':
          return __webpack_require__.e(/* import() */ 597).then(__webpack_require__.bind(__webpack_require__, 50597)).then(processMod, consoleError);
        case 'dyte-participants-stage-list':
          return __webpack_require__.e(/* import() */ 791).then(__webpack_require__.bind(__webpack_require__, 30791)).then(processMod, consoleError);
        case 'dyte-participants-stage-queue':
          return __webpack_require__.e(/* import() */ 6303).then(__webpack_require__.bind(__webpack_require__, 36303)).then(processMod, consoleError);
        case 'dyte-participants-toggle':
          return __webpack_require__.e(/* import() */ 6076).then(__webpack_require__.bind(__webpack_require__, 56076)).then(processMod, consoleError);
        case 'dyte-participants-viewer-list':
          return __webpack_require__.e(/* import() */ 1683).then(__webpack_require__.bind(__webpack_require__, 91683)).then(processMod, consoleError);
        case 'dyte-participants-waiting-list':
          return __webpack_require__.e(/* import() */ 7506).then(__webpack_require__.bind(__webpack_require__, 47506)).then(processMod, consoleError);
        case 'dyte-permissions-message':
          return __webpack_require__.e(/* import() */ 9542).then(__webpack_require__.bind(__webpack_require__, 29542)).then(processMod, consoleError);
        case 'dyte-pip-toggle':
          return __webpack_require__.e(/* import() */ 1001).then(__webpack_require__.bind(__webpack_require__, 1001)).then(processMod, consoleError);
        case 'dyte-plugin-main':
          return __webpack_require__.e(/* import() */ 5472).then(__webpack_require__.bind(__webpack_require__, 25472)).then(processMod, consoleError);
        case 'dyte-plugins':
          return __webpack_require__.e(/* import() */ 6870).then(__webpack_require__.bind(__webpack_require__, 66870)).then(processMod, consoleError);
        case 'dyte-plugins-toggle':
          return __webpack_require__.e(/* import() */ 4327).then(__webpack_require__.bind(__webpack_require__, 84327)).then(processMod, consoleError);
        case 'dyte-polls':
          return __webpack_require__.e(/* import() */ 7394).then(__webpack_require__.bind(__webpack_require__, 57394)).then(processMod, consoleError);
        case 'dyte-polls-toggle':
          return __webpack_require__.e(/* import() */ 9728).then(__webpack_require__.bind(__webpack_require__, 69728)).then(processMod, consoleError);
        case 'dyte-recording-indicator':
          return __webpack_require__.e(/* import() */ 6264).then(__webpack_require__.bind(__webpack_require__, 86264)).then(processMod, consoleError);
        case 'dyte-recording-toggle':
          return __webpack_require__.e(/* import() */ 8286).then(__webpack_require__.bind(__webpack_require__, 8286)).then(processMod, consoleError);
        case 'dyte-remote-access-manager':
          return __webpack_require__.e(/* import() */ 1908).then(__webpack_require__.bind(__webpack_require__, 21908)).then(processMod, consoleError);
        case 'dyte-screen-share-toggle':
          return __webpack_require__.e(/* import() */ 8270).then(__webpack_require__.bind(__webpack_require__, 18270)).then(processMod, consoleError);
        case 'dyte-screenshare-view':
          return __webpack_require__.e(/* import() */ 9246).then(__webpack_require__.bind(__webpack_require__, 89246)).then(processMod, consoleError);
        case 'dyte-settings':
          return __webpack_require__.e(/* import() */ 6253).then(__webpack_require__.bind(__webpack_require__, 96253)).then(processMod, consoleError);
        case 'dyte-settings-toggle':
          return __webpack_require__.e(/* import() */ 6350).then(__webpack_require__.bind(__webpack_require__, 66350)).then(processMod, consoleError);
        case 'dyte-setup-screen':
          return __webpack_require__.e(/* import() */ 605).then(__webpack_require__.bind(__webpack_require__, 70605)).then(processMod, consoleError);
        case 'dyte-sidebar':
          return __webpack_require__.e(/* import() */ 1742).then(__webpack_require__.bind(__webpack_require__, 41742)).then(processMod, consoleError);
        case 'dyte-simple-grid':
          return __webpack_require__.e(/* import() */ 9168).then(__webpack_require__.bind(__webpack_require__, 79168)).then(processMod, consoleError);
        case 'dyte-spotlight-grid':
          return __webpack_require__.e(/* import() */ 7987).then(__webpack_require__.bind(__webpack_require__, 87987)).then(processMod, consoleError);
        case 'dyte-stage':
          return __webpack_require__.e(/* import() */ 7279).then(__webpack_require__.bind(__webpack_require__, 17279)).then(processMod, consoleError);
        case 'dyte-stage-toggle':
          return __webpack_require__.e(/* import() */ 6406).then(__webpack_require__.bind(__webpack_require__, 16406)).then(processMod, consoleError);
        case 'dyte-text-field':
          return __webpack_require__.e(/* import() */ 1461).then(__webpack_require__.bind(__webpack_require__, 51461)).then(processMod, consoleError);
        case 'dyte-ui-provider':
          return __webpack_require__.e(/* import() */ 8863).then(__webpack_require__.bind(__webpack_require__, 48863)).then(processMod, consoleError);
        case 'dyte-viewer-count':
          return __webpack_require__.e(/* import() */ 3570).then(__webpack_require__.bind(__webpack_require__, 3570)).then(processMod, consoleError);
        case 'dyte-waiting-screen':
          return __webpack_require__.e(/* import() */ 2116).then(__webpack_require__.bind(__webpack_require__, 52116)).then(processMod, consoleError);
        case 'dyte-webinar-stage-toggle':
          return __webpack_require__.e(/* import() */ 1976).then(__webpack_require__.bind(__webpack_require__, 21976)).then(processMod, consoleError);
        case 'dyte-ai-caption':
          return __webpack_require__.e(/* import() */ 4627).then(__webpack_require__.bind(__webpack_require__, 34627)).then(processMod, consoleError);
        case 'dyte-breakout-room-manager_3':
          return __webpack_require__.e(/* import() */ 9851).then(__webpack_require__.bind(__webpack_require__, 79851)).then(processMod, consoleError);
        case 'dyte-channel-header_9':
          return __webpack_require__.e(/* import() */ 9413).then(__webpack_require__.bind(__webpack_require__, 39413)).then(processMod, consoleError);
        case 'dyte-livestream-player':
          return __webpack_require__.e(/* import() */ 4310).then(__webpack_require__.bind(__webpack_require__, 84310)).then(processMod, consoleError);
        case 'dyte-poll_2':
          return __webpack_require__.e(/* import() */ 1074).then(__webpack_require__.bind(__webpack_require__, 61074)).then(processMod, consoleError);
        case 'dyte-settings-audio_2':
          return __webpack_require__.e(/* import() */ 8407).then(__webpack_require__.bind(__webpack_require__, 28407)).then(processMod, consoleError);
        case 'dyte-tab-bar':
          return __webpack_require__.e(/* import() */ 6625).then(__webpack_require__.bind(__webpack_require__, 16625)).then(processMod, consoleError);
        case 'dyte-audio-visualizer_2':
          return __webpack_require__.e(/* import() */ 5103).then(__webpack_require__.bind(__webpack_require__, 15103)).then(processMod, consoleError);
        case 'dyte-channel-details':
          return __webpack_require__.e(/* import() */ 2662).then(__webpack_require__.bind(__webpack_require__, 62662)).then(processMod, consoleError);
        case 'dyte-emoji-picker':
          return __webpack_require__.e(/* import() */ 8165).then(__webpack_require__.bind(__webpack_require__, 28165)).then(processMod, consoleError);
        case 'dyte-join-stage_2':
          return __webpack_require__.e(/* import() */ 6154).then(__webpack_require__.bind(__webpack_require__, 66154)).then(processMod, consoleError);
        case 'dyte-notification':
          return __webpack_require__.e(/* import() */ 6409).then(__webpack_require__.bind(__webpack_require__, 56409)).then(processMod, consoleError);
        case 'dyte-participant':
          return __webpack_require__.e(/* import() */ 4311).then(__webpack_require__.bind(__webpack_require__, 14311)).then(processMod, consoleError);
        case 'dyte-participant-tile':
          return __webpack_require__.e(/* import() */ 6383).then(__webpack_require__.bind(__webpack_require__, 56383)).then(processMod, consoleError);
        case 'dyte-spotlight-indicator':
          return __webpack_require__.e(/* import() */ 3182).then(__webpack_require__.bind(__webpack_require__, 43182)).then(processMod, consoleError);
        case 'dyte-chat-message_5':
          return __webpack_require__.e(/* import() */ 8421).then(__webpack_require__.bind(__webpack_require__, 48421)).then(processMod, consoleError);
        case 'dyte-dialog':
          return __webpack_require__.e(/* import() */ 5838).then(__webpack_require__.bind(__webpack_require__, 95838)).then(processMod, consoleError);
        case 'dyte-logo':
          return __webpack_require__.e(/* import() */ 6041).then(__webpack_require__.bind(__webpack_require__, 96041)).then(processMod, consoleError);
        case 'dyte-menu_3':
          return __webpack_require__.e(/* import() */ 8861).then(__webpack_require__.bind(__webpack_require__, 38861)).then(processMod, consoleError);
        case 'dyte-avatar':
          return __webpack_require__.e(/* import() */ 7311).then(__webpack_require__.bind(__webpack_require__, 37311)).then(processMod, consoleError);
        case 'dyte-controlbar-button':
          return __webpack_require__.e(/* import() */ 3394).then(__webpack_require__.bind(__webpack_require__, 3394)).then(processMod, consoleError);
        case 'dyte-tooltip':
          return __webpack_require__.e(/* import() */ 6897).then(__webpack_require__.bind(__webpack_require__, 16897)).then(processMod, consoleError);
        case 'dyte-spinner':
          return __webpack_require__.e(/* import() */ 6013).then(__webpack_require__.bind(__webpack_require__, 6013)).then(processMod, consoleError);
        case 'dyte-button':
          return __webpack_require__.e(/* import() */ 3692).then(__webpack_require__.bind(__webpack_require__, 33692)).then(processMod, consoleError);
        case 'dyte-icon':
          return __webpack_require__.e(/* import() */ 8888).then(__webpack_require__.bind(__webpack_require__, 78888)).then(processMod, consoleError);
      }
    }
    return __webpack_require__(98654)(`./${bundleId}.entry.js`).then((importedModule) => {
        {
            cmpModules.set(bundleId, importedModule);
        }
        return importedModule[exportName];
    }, consoleError);
};
const styles = /*@__PURE__*/ new Map();
const win = typeof window !== 'undefined' ? window : {};
const doc = win.document || { head: {} };
const plt = {
    $flags$: 0,
    $resourcesUrl$: '',
    jmp: (h) => h(),
    raf: (h) => requestAnimationFrame(h),
    ael: (el, eventName, listener, opts) => el.addEventListener(eventName, listener, opts),
    rel: (el, eventName, listener, opts) => el.removeEventListener(eventName, listener, opts),
    ce: (eventName, opts) => new CustomEvent(eventName, opts),
};
const promiseResolve = (v) => Promise.resolve(v);
const supportsConstructableStylesheets = /*@__PURE__*/ (/* unused pure expression or super */ null && ((() => {
        try {
            new CSSStyleSheet();
            return typeof new CSSStyleSheet().replaceSync === 'function';
        }
        catch (e) { }
        return false;
    })()))
    ;
const queueDomReads = [];
const queueDomWrites = [];
const queueTask = (queue, write) => (cb) => {
    queue.push(cb);
    if (!queuePending) {
        queuePending = true;
        if (write && plt.$flags$ & 4 /* PLATFORM_FLAGS.queueSync */) {
            nextTick(flush);
        }
        else {
            plt.raf(flush);
        }
    }
};
const consume = (queue) => {
    for (let i = 0; i < queue.length; i++) {
        try {
            queue[i](performance.now());
        }
        catch (e) {
            consoleError(e);
        }
    }
    queue.length = 0;
};
const flush = () => {
    // always force a bunch of medium callbacks to run, but still have
    // a throttle on how many can run in a certain time
    // DOM READS!!!
    consume(queueDomReads);
    // DOM WRITES!!!
    {
        consume(queueDomWrites);
        if ((queuePending = queueDomReads.length > 0)) {
            // still more to do yet, but we've run out of time
            // let's let this thing cool off and try again in the next tick
            plt.raf(flush);
        }
    }
};
const nextTick = /*@__PURE__*/ (cb) => promiseResolve().then(cb);
const writeTask = /*@__PURE__*/ queueTask(queueDomWrites, true);




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




/***/ }),

/***/ 46503:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ onChange),
/* harmony export */   s: () => (/* binding */ state)
/* harmony export */ });
/* harmony import */ var _index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65733);


const appendToMap = (map, propName, value) => {
    const items = map.get(propName);
    if (!items) {
        map.set(propName, [value]);
    }
    else if (!items.includes(value)) {
        items.push(value);
    }
};
const debounce = (fn, ms) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            timeoutId = 0;
            fn(...args);
        }, ms);
    };
};

/**
 * Check if a possible element isConnected.
 * The property might not be there, so we check for it.
 *
 * We want it to return true if isConnected is not a property,
 * otherwise we would remove these elements and would not update.
 *
 * Better leak in Edge than to be useless.
 */
const isConnected = (maybeElement) => !('isConnected' in maybeElement) || maybeElement.isConnected;
const cleanupElements = debounce((map) => {
    for (let key of map.keys()) {
        map.set(key, map.get(key).filter(isConnected));
    }
}, 2000);
const stencilSubscription = () => {
    if (typeof _index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.a !== 'function') {
        // If we are not in a stencil project, we do nothing.
        // This function is not really exported by @stencil/core.
        return {};
    }
    const elmsToUpdate = new Map();
    return {
        dispose: () => elmsToUpdate.clear(),
        get: (propName) => {
            const elm = (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.a)();
            if (elm) {
                appendToMap(elmsToUpdate, propName, elm);
            }
        },
        set: (propName) => {
            const elements = elmsToUpdate.get(propName);
            if (elements) {
                elmsToUpdate.set(propName, elements.filter(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.f));
            }
            cleanupElements(elmsToUpdate);
        },
        reset: () => {
            elmsToUpdate.forEach((elms) => elms.forEach(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.f));
            cleanupElements(elmsToUpdate);
        },
    };
};

const unwrap = (val) => (typeof val === 'function' ? val() : val);
const createObservableMap = (defaultState, shouldUpdate = (a, b) => a !== b) => {
    const unwrappedState = unwrap(defaultState);
    let states = new Map(Object.entries(unwrappedState !== null && unwrappedState !== void 0 ? unwrappedState : {}));
    const handlers = {
        dispose: [],
        get: [],
        set: [],
        reset: [],
    };
    const reset = () => {
        var _a;
        // When resetting the state, the default state may be a function - unwrap it to invoke it.
        // otherwise, the state won't be properly reset
        states = new Map(Object.entries((_a = unwrap(defaultState)) !== null && _a !== void 0 ? _a : {}));
        handlers.reset.forEach((cb) => cb());
    };
    const dispose = () => {
        // Call first dispose as resetting the state would
        // cause less updates ;)
        handlers.dispose.forEach((cb) => cb());
        reset();
    };
    const get = (propName) => {
        handlers.get.forEach((cb) => cb(propName));
        return states.get(propName);
    };
    const set = (propName, value) => {
        const oldValue = states.get(propName);
        if (shouldUpdate(value, oldValue, propName)) {
            states.set(propName, value);
            handlers.set.forEach((cb) => cb(propName, value, oldValue));
        }
    };
    const state = (typeof Proxy === 'undefined'
        ? {}
        : new Proxy(unwrappedState, {
            get(_, propName) {
                return get(propName);
            },
            ownKeys(_) {
                return Array.from(states.keys());
            },
            getOwnPropertyDescriptor() {
                return {
                    enumerable: true,
                    configurable: true,
                };
            },
            has(_, propName) {
                return states.has(propName);
            },
            set(_, propName, value) {
                set(propName, value);
                return true;
            },
        }));
    const on = (eventName, callback) => {
        handlers[eventName].push(callback);
        return () => {
            removeFromArray(handlers[eventName], callback);
        };
    };
    const onChange = (propName, cb) => {
        const unSet = on('set', (key, newValue) => {
            if (key === propName) {
                cb(newValue);
            }
        });
        // We need to unwrap the defaultState because it might be a function.
        // Otherwise we might not be sending the right reset value.
        const unReset = on('reset', () => cb(unwrap(defaultState)[propName]));
        return () => {
            unSet();
            unReset();
        };
    };
    const use = (...subscriptions) => {
        const unsubs = subscriptions.reduce((unsubs, subscription) => {
            if (subscription.set) {
                unsubs.push(on('set', subscription.set));
            }
            if (subscription.get) {
                unsubs.push(on('get', subscription.get));
            }
            if (subscription.reset) {
                unsubs.push(on('reset', subscription.reset));
            }
            if (subscription.dispose) {
                unsubs.push(on('dispose', subscription.dispose));
            }
            return unsubs;
        }, []);
        return () => unsubs.forEach((unsub) => unsub());
    };
    const forceUpdate = (key) => {
        const oldValue = states.get(key);
        handlers.set.forEach((cb) => cb(key, oldValue, oldValue));
    };
    return {
        state,
        get,
        set,
        on,
        onChange,
        use,
        dispose,
        reset,
        forceUpdate,
    };
};
const removeFromArray = (array, item) => {
    const index = array.indexOf(item);
    if (index >= 0) {
        array[index] = array[array.length - 1];
        array.length--;
    }
};

const createStore = (defaultState, shouldUpdate) => {
    const map = createObservableMap(defaultState, shouldUpdate);
    map.use(stencilSubscription());
    return map;
};

const { state, onChange } = createStore({});




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