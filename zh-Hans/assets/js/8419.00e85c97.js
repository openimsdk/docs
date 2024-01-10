"use strict";
exports.id = 8419;
exports.ids = [8419];
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

/***/ 88419:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_ai_home: () => (/* binding */ DyteAiHome)
/* harmony export */ });
/* harmony import */ var _index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65733);
/* harmony import */ var _ChatHead_176c5d04_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84764);
/* harmony import */ var _scroll_8cc79809_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82321);






const dyteAiHomeCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.head{display:flex;align-items:center}.head .name{margin-right:var(--dyte-space-4, 16px);font-size:12px;font-weight:700}.head .time{font-size:12px;color:rgb(var(--dyte-colors-text-800, 255 255 255 / 0.76))}.scrollbar{scrollbar-width:thin;scrollbar-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))\n    var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar{height:var(--dyte-space-1\\.5, 6px);width:var(--dyte-space-1\\.5, 6px);border-radius:9999px;background-color:var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar-thumb{border-radius:9999px;background-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))}*{box-sizing:border-box;border-width:0;border-style:solid}:host{display:flex;flex-direction:column}.public-message{text-align:center;font-size:12px;color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52));margin-top:var(--dyte-space-8, 32px);margin-bottom:var(--dyte-space-8, 32px);margin-left:var(--dyte-space-10, 40px);margin-right:var(--dyte-space-10, 40px)}.content{box-sizing:border-box;display:flex;flex-direction:column;padding:var(--dyte-space-3, 12px);flex:1 0 0px;overflow-y:scroll;}.subtitle{margin-top:var(--dyte-space-1, 4px);font-size:12px;color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52))}.hint-message{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;flex:1 1 0%;font-size:14px;line-height:1.5;color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}i{font-weight:500;font-style:italic;color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88))}.actions{padding-left:var(--dyte-space-3, 12px);padding-right:var(--dyte-space-3, 12px);padding-top:var(--dyte-space-3, 12px);padding-bottom:var(--dyte-space-3, 12px);display:flex;align-items:center;justify-content:space-between;font-size:12px}.actions div{display:flex;align-items:center;gap:var(--dyte-space-2, 8px)}.actions button{display:inline-flex;cursor:pointer;border-radius:var(--dyte-border-radius-md, 8px);padding-top:var(--dyte-space-1, 4px);padding-bottom:var(--dyte-space-1, 4px);padding-left:var(--dyte-space-2, 8px);padding-right:var(--dyte-space-2, 8px);background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / 0.5);color:rgb(var(--dyte-colors-text-on-brand-1000, var(--dyte-colors-text-1000, 255 255 255)))}.prompt{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity))}.prompt input{height:var(--dyte-space-12, 48px);width:100%;resize:none;background-color:transparent;padding:var(--dyte-space-4, 16px);font-family:var(--dyte-font-family, sans-serif);color:rgb(var(--dyte-colors-text-1000, 255 255 255));outline:2px solid transparent;outline-offset:2px}.message .body{margin-top:var(--dyte-space-2, 8px);margin-bottom:var(--dyte-space-2, 8px);white-space:pre-wrap;font-size:14px}.message .loader{display:flex;padding-top:var(--dyte-space-2, 8px);padding-bottom:var(--dyte-space-2, 8px);font-size:12px}.message{margin-bottom:var(--dyte-space-3, 12px)}.message:last-child{margin-bottom:var(--dyte-space-0, 0px)}.prompt-text{margin-top:var(--dyte-space-2, 8px);margin-left:var(--dyte-space-1, 4px);border-left-width:var(--dyte-border-width-sm, 1px);border-left-color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64));padding-left:var(--dyte-space-2, 8px);padding-right:var(--dyte-space-2, 8px);font-size:12px;color:rgb(var(--dyte-colors-text-800, 255 255 255 / 0.76))}";

const DyteAiHome = class {
  constructor(hostRef) {
    (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.handleSubmit = (e) => {
      var _a, _b;
      e.preventDefault();
      e.stopPropagation();
      this.messages = [
        ...this.messages,
        {
          action: 'Prompt',
          participantName: this.meeting.self.name,
          createdAt: new Date(),
          prompt: this.prompt,
          loading: true,
        },
      ];
      (_b = (_a = this.middlewares) === null || _a === void 0 ? void 0 : _a.speech) === null || _b === void 0 ? void 0 : _b.sendMessageToChatGPT({ action: 'default', message: this.prompt });
      this.prompt = '';
    };
    this.handleSummarise = () => {
      var _a, _b;
      (_b = (_a = this.middlewares) === null || _a === void 0 ? void 0 : _a.speech) === null || _b === void 0 ? void 0 : _b.sendMessageToChatGPT({ action: 'summarization' });
    };
    this.handleAgenda = () => {
      var _a, _b;
      (_b = (_a = this.middlewares) === null || _a === void 0 ? void 0 : _a.speech) === null || _b === void 0 ? void 0 : _b.sendMessageToChatGPT({ action: 'agenda generation' });
    };
    this.handleMoM = () => {
      var _a, _b;
      (_b = (_a = this.middlewares) === null || _a === void 0 ? void 0 : _a.speech) === null || _b === void 0 ? void 0 : _b.sendMessageToChatGPT({ action: 'action items generation' });
    };
    this.prompt = '';
    this.messages = [];
    this.meeting = undefined;
    this.initialMessages = undefined;
    this.middlewares = {};
  }
  handleChatGPTReply(data) {
    const existingMessage = this.messages.find((message) => data.action === 'default'
      ? message.id === data.id
      : message.id === data.id || message.action === this.mapMessageAction(data.action));
    if (existingMessage &&
      (existingMessage.loading || existingMessage.action !== this.mapMessageAction('default'))) {
      this.messages = [
        ...this.messages.map((message) => message.id === data.id || message.action === this.mapMessageAction(data.action)
          ? Object.assign(Object.assign({}, data), { action: this.mapMessageAction(data.action) }) : message),
      ];
    }
    else {
      this.messages = [...this.messages, Object.assign(Object.assign({}, data), { action: this.mapMessageAction(data.action) })];
    }
  }
  connectedCallback() {
    var _a, _b, _c;
    if (this.initialMessages) {
      this.messages = this.initialMessages.map((message) => (Object.assign(Object.assign({}, message), { action: this.mapMessageAction(message.action) })));
    }
    else {
      /**
       * NOTE: There is a latency in aiClient.aiMessages that's why sometimes
       * initialMessages comes as undefined. This is a really hacky solution
       * to wait for the aiMessages to set. But probably we can refactor this
       * in future.
       */
      if ((_a = this.middlewares) === null || _a === void 0 ? void 0 : _a.speech) {
        setTimeout(() => {
          var _a;
          this.messages = (_a = this.middlewares.speech.aiMesssages) === null || _a === void 0 ? void 0 : _a.map((message) => (Object.assign(Object.assign({}, message), { action: this.mapMessageAction(message.action) })));
        }, 1000);
      }
    }
    (_c = (_b = this.middlewares) === null || _b === void 0 ? void 0 : _b.speech) === null || _c === void 0 ? void 0 : _c.on('chatGPTReply', (data) => this.handleChatGPTReply(data));
  }
  disconnectedCallback() {
    var _a, _b;
    (_b = (_a = this.middlewares) === null || _a === void 0 ? void 0 : _a.speech) === null || _b === void 0 ? void 0 : _b.off('chatGPTReply', (data) => this.handleChatGPTReply(data));
  }
  messagesUpdated() {
    // NOTE: I don't know why initially contentContainer ref is not set, That's
    // why this setTimeout. We can figure a better approach for this
    setTimeout(() => {
      (0,_scroll_8cc79809_js__WEBPACK_IMPORTED_MODULE_2__.s)(this.contentContainer, false);
    }, 100);
  }
  mapMessageAction(action) {
    switch (action) {
      case 'default':
        return 'Prompt';
      case 'summarization':
        return 'Summary';
      case 'agenda generation':
        return 'Agenda';
      case 'action items generation':
        return 'Action items';
    }
  }
  render() {
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "content scrollbar", ref: (el) => (this.contentContainer = el) }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", { class: "public-message" }, "This conversation will be visible to everyone on the call."), !this.messages.length && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "hint-message" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, "Ask ", (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("i", null, "\"Hey AI, summarise this call\""), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("br", null), " or ", (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("br", null), "Type ", (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("i", null, "\"Hey AI, what is today's agenda?\"")))), this.messages.length > 0 && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "" }, this.messages.map((message) => ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "message" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_ChatHead_176c5d04_js__WEBPACK_IMPORTED_MODULE_1__.C, { name: message.action, time: new Date(message.createdAt), now: new Date() }), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", { class: "subtitle" }, "Triggered by ", message.participantName), message.prompt && (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "prompt-text" }, message.prompt), message.loading ? ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "loader" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-spinner", { size: "sm" }), "\u00A0\u00A0Generating...")) : ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "body" }, message.response)))))))), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "actions" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, "Quick actions:"), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { onClick: this.handleSummarise }, "Summarise"), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { onClick: this.handleAgenda }, "Agenda"), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { onClick: this.handleMoM }, "MoM"))), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("form", { class: "prompt", onSubmit: this.handleSubmit }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("input", { value: this.prompt, onInput: (e) => {
        this.prompt = e.target.value;
      }, placeholder: "Type your prompt..." }))));
  }
  static get watchers() { return {
    "messages": ["messagesUpdated"]
  }; }
};
DyteAiHome.style = dyteAiHomeCss;




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