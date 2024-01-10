"use strict";
exports.id = 9413;
exports.ids = [9413];
exports.modules = {

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

/***/ 39413:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_channel_header: () => (/* binding */ DyteChannelHeader),
/* harmony export */   dyte_channel_selector_ui: () => (/* binding */ DyteChannelSelectorUi),
/* harmony export */   dyte_chat_composer_ui: () => (/* binding */ DyteChatComposerUi),
/* harmony export */   dyte_chat_messages_ui: () => (/* binding */ DyteChatMessagesUi),
/* harmony export */   dyte_chat_messages_ui_paginated: () => (/* binding */ DyteChatMessagesUiPaginated),
/* harmony export */   dyte_chat_search_results: () => (/* binding */ DyteChatSearchResults),
/* harmony export */   dyte_chat_selector_ui: () => (/* binding */ DyteChatSelectorUi),
/* harmony export */   dyte_dialog_manager: () => (/* binding */ DyteDialogManager),
/* harmony export */   dyte_notifications: () => (/* binding */ DyteNotifications)
/* harmony export */ });
/* harmony import */ var _index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65733);
/* harmony import */ var _pipStore_5d9dd8bf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21237);
/* harmony import */ var _livestream_8c64d895_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24555);
/* harmony import */ var _default_icon_pack_a3227c63_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96633);
/* harmony import */ var _index_29bc5d44_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20336);
/* harmony import */ var _graceful_storage_33bc316d_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60804);
/* harmony import */ var _chat_88f12485_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57037);
/* harmony import */ var _user_prefs_f52d234f_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85114);
/* harmony import */ var _date_8c24cfe1_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(72729);
/* harmony import */ var _scroll_8cc79809_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(82321);
/* harmony import */ var _default_ui_config_e3c1cd21_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(37692);
/* harmony import */ var _index_37247bff_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(85371);
/* harmony import */ var _store_56e792d0_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(46503);
/* harmony import */ var _dyte_client_faf935bd_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(43367);
/* harmony import */ var _notification_8c0067e0_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(91007);
/* harmony import */ var _string_8aa800b0_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(22906);


















const dyteChannelHeaderCss = "header{height:var(--dyte-space-8, 32px);padding:var(--dyte-space-4, 16px);padding-left:var(--dyte-space-12, 48px);display:flex;justify-content:space-between;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity));border-left-width:var(--dyte-border-width-none, 0);border-right-width:var(--dyte-border-width-none, 0);border-bottom-width:var(--dyte-border-width-sm, 1px);border-top-width:var(--dyte-border-width-none, 0);border-style:solid;--tw-border-opacity:1;border-bottom-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-border-opacity))}header.searching{justify-content:flex-end}header.searching .channel-details{display:none}header .channel-details{display:flex;flex-direction:column;justify-content:center;height:var(--dyte-space-9, 36px);width:50vw}header .channel-details .name{font-weight:500}header .channel-details .members{margin-top:var(--dyte-space-0\\.5, 2px);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:12px;color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52))}header .channel-tools{display:flex}header .search-input{width:var(--dyte-space-52, 208px);padding-left:var(--dyte-space-2, 8px);padding-right:var(--dyte-space-2, 8px);border-width:var(--dyte-border-width-none, 0);border-style:none;outline:2px solid transparent;outline-offset:2px;border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255))}header .name{font-size:16px}header .br-primary-btn{background-color:transparent}header .br-primary-btn:hover{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity))}@media (orientation: landscape) and (min-width: 400px){header{padding-left:var(--dyte-space-4, 16px)}header.searching{display:flex;justify-content:space-between}header.searching .channel-details{display:flex;flex-direction:column}}";

const DyteChannelHeader = class {
  constructor(hostRef) {
    (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.search = (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "search", 7);
    this.searchDismissed = (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "searchDismissed", 7);
    this.onSearchClickHanlder = () => {
      this.showSearchBar = !this.showSearchBar;
      if (this.showSearchBar) {
        (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.w)(() => {
          this.$searchInput.focus();
        });
      }
      else {
        this.searchDismissed.emit();
      }
    };
    this.onKeyDownHandler = (e) => {
      if (e.key === 'Enter') {
        this.search.emit(this.$searchInput.value);
        this.$searchInput.blur();
      }
      else if (e.key === 'Escape') {
        this.$searchInput.value = '';
        this.showSearchBar = false;
      }
    };
    this.meeting = undefined;
    this.channel = undefined;
    this.iconPack = _default_icon_pack_a3227c63_js__WEBPACK_IMPORTED_MODULE_3__.d;
    this.t = (0,_index_29bc5d44_js__WEBPACK_IMPORTED_MODULE_4__.u)();
    this.showChannelDetailsDialog = false;
    this.showSearchBar = false;
    this.members = [];
  }
  onChannelChanged() {
    if (this.$searchInput)
      this.$searchInput.value = '';
    this.showSearchBar = false;
    if (!this.channel.isDirectMessage) {
      this.meeting.chat.getChannelMembers(this.channel.id).then((members) => {
        this.members = members;
      });
    }
  }
  connectedCallback() {
    this.onChannelChanged();
  }
  renderChannelDetails() {
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-dialog", { open: true, onDyteDialogClose: () => {
        this.showChannelDetailsDialog = false;
      }, iconPack: this.iconPack, t: this.t }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-channel-details", { members: this.members, channel: this.channel })));
  }
  render() {
    if (!this.channel) {
      return null;
    }
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.H, null, this.showChannelDetailsDialog && this.renderChannelDetails(), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("header", { class: {
        searching: this.showSearchBar,
      } }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "channel-details" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "name" }, this.channel.displayName), !this.channel.isDirectMessage && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "members" }, this.members.map((member) => member.name).join(', ')))), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "channel-tools" }, this.showSearchBar && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("input", { class: "search-input", type: "text", placeholder: this.t('chat.search_msgs'), ref: (el) => (this.$searchInput = el), onKeyDown: (e) => this.onKeyDownHandler(e) })), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tooltip", { label: this.showSearchBar ? this.t('close') : this.t('chat.search_msgs'), iconPack: this.iconPack, t: this.t, variant: "primary" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { iconPack: this.iconPack, t: this.t, kind: "button", variant: "secondary", size: "md", onClick: this.onSearchClickHanlder, class: "br-primary-btn" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.showSearchBar ? this.iconPack.dismiss : this.iconPack.search, iconPack: this.iconPack, t: this.t }))), !this.channel.isDirectMessage && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tooltip", { label: this.t('chat.channel_members'), iconPack: this.iconPack, t: this.t, variant: "primary" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { iconPack: this.iconPack, t: this.t, kind: "button", variant: "secondary", size: "md", onClick: () => {
        this.showChannelDetailsDialog = !this.showChannelDetailsDialog;
      }, class: "br-primary-btn" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.people, iconPack: this.iconPack, t: this.t }))))))));
  }
  static get watchers() { return {
    "channel": ["onChannelChanged"]
  }; }
};
DyteChannelHeader.style = dyteChannelHeaderCss;

const dyteChannelSelectorUiCss = ":host{display:flex}.container{display:flex;height:100%;width:var(--dyte-space-96, 384px);flex-direction:column;position:absolute;--tw-translate-x:calc(var(--dyte-space-96, 384px) * -1);transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity));border-top-width:var(--dyte-border-width-none, 0);border-bottom-width:var(--dyte-border-width-none, 0);border-right-width:var(--dyte-border-width-sm, 1px);border-left-width:var(--dyte-border-width-none, 0);border-style:solid;--tw-border-opacity:1;border-right-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-border-opacity));transition-property:color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}@-webkit-keyframes fade{0%{opacity:0}100%{opacity:1}}@keyframes fade{0%{opacity:0}100%{opacity:1}}.overlay-container{width:100vw;--tw-translate-x:var(--dyte-space-96, 384px);transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity));transition-property:color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;-webkit-animation:fade 0.8s;animation:fade 0.8s}.overlay-container .sidebar-btn{position:static;padding:var(--dyte-space-4, 16px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity))}.sidebar-btn{position:absolute;right:calc(var(--dyte-space-9, 36px) * -1);top:var(--dyte-space-4, 16px);height:var(--dyte-space-8, 32px);width:var(--dyte-space-7, 28px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity));border-radius:var(--dyte-border-radius-sm, 4px)}@media (orientation: landscape) and (min-width: 400px){.container{position:static;--tw-translate-x:var(--dyte-space-0, 0px);transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.sidebar-btn,.overlay-container{display:none}}.search-wrapper{display:flex;align-items:center;gap:var(--dyte-space-2, 8px);padding:var(--dyte-space-2, 8px);border-top-width:var(--dyte-border-width-sm, 1px);border-bottom-width:var(--dyte-border-width-sm, 1px);border-left-width:var(--dyte-border-width-none, 0);border-right-width:var(--dyte-border-width-none, 0);border-style:solid;--tw-border-opacity:1;border-top-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-border-opacity));border-bottom-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-border-opacity))}.search{position:-webkit-sticky;position:sticky;box-sizing:border-box;display:flex;align-items:center;border-radius:var(--dyte-border-radius-sm, 4px);margin-top:var(--dyte-space-0, 0px);margin-bottom:var(--dyte-space-0, 0px);height:var(--dyte-space-8, 32px);width:100%}.search .search-icon{height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px);padding:var(--dyte-space-2, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52));border-top-right-radius:var(--dyte-border-radius-sm, 4px);border-bottom-right-radius:var(--dyte-border-radius-sm, 4px)}.search input{box-sizing:border-box;width:100%;padding-top:var(--dyte-space-2, 8px);padding-bottom:var(--dyte-space-2, 8px);padding-left:var(--dyte-space-2, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255));border-width:var(--dyte-border-width-none, 0);border-style:none;outline:2px solid transparent;outline-offset:2px;font-size:14px;line-height:1.25rem}.search input::-moz-placeholder{color:rgb(var(--dyte-colors-text-800, 255 255 255 / 0.76))}.search input::placeholder{color:rgb(var(--dyte-colors-text-800, 255 255 255 / 0.76))}.search input{border-top-left-radius:var(--dyte-border-radius-sm, 4px);border-bottom-left-radius:var(--dyte-border-radius-sm, 4px)}.channel-container{box-sizing:border-box;display:flex;flex-direction:column;padding-top:var(--dyte-space-2, 8px);padding-bottom:var(--dyte-space-2, 8px);overflow-y:scroll}.channel-container .channel{display:flex;align-items:center;justify-content:space-between;gap:var(--dyte-space-2, 8px);padding:var(--dyte-space-0, 0px);border-left-width:var(--dyte-border-width-none, 0);border-right-width:var(--dyte-border-width-none, 0);border-bottom-width:var(--dyte-border-width-sm, 1px);border-top-width:var(--dyte-border-width-none, 0);border-style:solid;--tw-border-opacity:1;border-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-border-opacity))}.channel-container .channel:hover{cursor:pointer;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-on-brand-900, var(--dyte-colors-text-900, 255 255 255 / 0.88)))}.channel-container .channel:hover .latest-msg-time,.channel-container .channel:hover .latest-msg,.channel-container .channel:hover .latest-msg.new{color:rgb(var(--dyte-colors-text-on-brand-700, var(--dyte-colors-text-700, 255 255 255 / 0.64)))}.channel-container .channel-display{display:flex;gap:var(--dyte-space-2, 8px);align-self:center;padding-left:var(--dyte-space-2, 8px);padding-right:var(--dyte-space-0, 0px)}.channel-container .channel-display dyte-avatar{height:var(--dyte-space-9, 36px);width:var(--dyte-space-9, 36px);flex-shrink:0;font-size:12px}.channel-container .channel-display dyte-icon{height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px);flex-shrink:0;padding:var(--dyte-space-2, 8px);border-radius:9999px;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-on-brand-1000, var(--dyte-colors-text-1000, 255 255 255)))}.channel-container .channel-card{width:100%;padding-top:var(--dyte-space-2, 8px);padding-bottom:var(--dyte-space-2, 8px);padding-right:var(--dyte-space-2, 8px);padding-left:var(--dyte-space-1, 4px)}.channel-container .channel-card span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:14px;font-weight:500}.channel-container .channel-card .latest-msg{margin:var(--dyte-space-0, 0px);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:var(--dyte-space-56, 224px);font-size:14px}.channel-container .channel-card .latest-msg.new{font-weight:200;font-style:italic;color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}.channel-container .channel-card .latest-msg-time{font-size:12px;color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88))}.channel-container .channel-meta{width:var(--dyte-space-12, 48px);display:flex;flex-direction:column;align-items:flex-end;justify-content:space-between;gap:var(--dyte-space-1\\.5, 6px);font-size:12px;font-weight:600}.channel-container .new-msgs-count{height:var(--dyte-space-4, 16px);min-width:var(--dyte-space-4, 16px);padding-top:1px;padding-bottom:1px;padding-left:2px;padding-right:2px;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-success, 98 165 4) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-on-brand-1000, var(--dyte-colors-text-1000, 255 255 255)));border-radius:var(--dyte-border-radius-sm, 4px);text-align:center;font-size:12px}.channel-container .selected{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-on-brand-900, var(--dyte-colors-text-900, 255 255 255 / 0.88)))}.channel-container .selected .latest-msg-time,.channel-container .selected .latest-msg,.channel-container .selected .latest-msg.new{color:rgb(var(--dyte-colors-text-on-brand-700, var(--dyte-colors-text-700, 255 255 255 / 0.64)))}.channel-container .highlight .channel-title span{font-weight:700}.recent-message-row{margin-bottom:var(--dyte-space-2, 8px);display:flex;width:100%;flex-direction:row;justify-content:space-between}";

const DyteChannelSelectorUi = class {
  constructor(hostRef) {
    (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.channelChanged = (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "channelChanged", 7);
    this.handleResize = (e) => {
      this.isHidden = !e.matches;
    };
    this.channelSelected = (channelId) => {
      this.channelChanged.emit(channelId);
      this.onRevealClicked();
    };
    this.onSearchInput = (e) => {
      this.searchQuery = e.target.value;
    };
    this.onRevealClicked = () => {
      if (this.matchMedia.matches)
        return;
      this.isHidden = !this.isHidden;
    };
    this.renderChannelDisplayPic = (channel) => {
      const hasDisplayPic = channel.displayPictureUrl && channel.displayPictureUrl.length !== 0;
      if (channel.isDirectMessage || hasDisplayPic) {
        return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "channel-display" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-avatar", { participant: {
            name: channel.displayName,
            picture: channel.displayPictureUrl,
          } })));
      }
      else {
        return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "channel-display" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.people, slot: "start" })));
      }
    };
    this.renderRecentMessage = (channel) => {
      if (!channel.latestMessage)
        return (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", { class: "latest-msg new" }, this.t('chat.start_conversation'));
      let senderFragment = channel.isDirectMessage ? '' : `${channel.latestMessage.displayName}: `;
      let messageFragment = '';
      if (channel.latestMessage.type === 'text') {
        messageFragment = channel.latestMessage.message;
      }
      else if (channel.latestMessage.type === 'image') {
        messageFragment = this.t('image');
      }
      else if (channel.latestMessage.type === 'file') {
        messageFragment = this.t('file');
      }
      return (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", { class: "latest-msg" }, `${senderFragment}${messageFragment}`);
    };
    this.channels = undefined;
    this.selectedChannelId = undefined;
    this.iconPack = _default_icon_pack_a3227c63_js__WEBPACK_IMPORTED_MODULE_3__.d;
    this.t = (0,_index_29bc5d44_js__WEBPACK_IMPORTED_MODULE_4__.u)();
    this.showRecentMessage = false;
    this.isHidden = false;
    this.searchQuery = '';
  }
  connectedCallback() {
    this.matchMedia = window.matchMedia(`(orientation: landscape) and (min-width: 400px)`);
    this.matchMedia.addEventListener('change', this.handleResize);
    this.isHidden = !this.matchMedia.matches;
  }
  disconnectedCallback() {
    this.matchMedia.removeEventListener('change', this.handleResize);
  }
  componentDidRender() {
    this.$el.style.transform = this.isHidden ? 'translateX(-380px)' : 'translateX(0)';
  }
  getTimeLabel(message) {
    const messageDate = message.time;
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    const firstDayOfWeek = new Date(today);
    firstDayOfWeek.setDate(today.getDate() - today.getDay() - 1);
    if (messageDate.toDateString() === today.toDateString()) {
      return messageDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
    else if (messageDate.toDateString() === yesterday.toDateString()) {
      return this.t('date.yesteday');
    }
    else if (messageDate > firstDayOfWeek) {
      const weekdays = [
        'date.sunday',
        'date.monday',
        'date.tuesday',
        'date.wednesday',
        'date.thursday',
        'date.friday',
        'date.saturday',
      ];
      return this.t(weekdays[messageDate.getDay()]);
    }
    else {
      return Intl.DateTimeFormat([], {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit',
      }).format(messageDate);
    }
  }
  render() {
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "container", ref: (el) => (this.$el = el) }, this.isHidden && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { iconPack: this.iconPack, t: this.t, kind: "icon", variant: "ghost", size: "md", onClick: this.onRevealClicked, class: "sidebar-btn" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.isHidden ? this.iconPack.chevron_left : this.iconPack.dismiss, iconPack: this.iconPack, t: this.t }))), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: "header" }), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "search-wrapper" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "search" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("input", { type: "search", autocomplete: "off", placeholder: this.t('chat.search_conversations'), onInput: this.onSearchInput }), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.search, iconPack: this.iconPack, t: this.t, class: "search-icon" }))), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "channel-container", role: "list" }, this.channels
      .filter((channel) => this.searchQuery === '' || channel.displayName.includes(this.searchQuery))
      .map((channel) => {
      return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: {
          channel: true,
          selected: channel.id === this.selectedChannelId,
          highlight: !!channel.unreadCount,
        }, role: "listitem", onClick: () => {
          this.channelSelected(channel.id);
        } }, this.renderChannelDisplayPic(channel), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "channel-card", "is-direct-message": channel.isDirectMessage }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: 'recent-message-row' }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, channel.displayName), channel.latestMessage && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "latest-msg-time" }, this.getTimeLabel(channel.latestMessage)))), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: 'recent-message-row' }, this.renderRecentMessage(channel), channel.unreadCount > 0 ? ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "new-msgs-count" }, channel.unreadCount < 99 ? channel.unreadCount : '99+')) : null))));
    }))), !this.isHidden && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "overlay-container" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { iconPack: this.iconPack, t: this.t, kind: "icon", variant: "ghost", size: "md", onClick: this.onRevealClicked, class: "sidebar-btn" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.isHidden ? this.iconPack.chevron_left : this.iconPack.dismiss, iconPack: this.iconPack, t: this.t }))))));
  }
};
DyteChannelSelectorUi.style = dyteChannelSelectorUiCss;

const dyteChatComposerUiCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.scrollbar{scrollbar-width:thin;scrollbar-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))\n    var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar{height:var(--dyte-space-1\\.5, 6px);width:var(--dyte-space-1\\.5, 6px);border-radius:9999px;background-color:var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar-thumb{border-radius:9999px;background-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))}:host{display:flex;flex-direction:column;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity))}.chat-input{position:relative;margin:var(--dyte-space-2, 8px);z-index:10;box-sizing:border-box;display:flex;flex-direction:column;border-radius:var(--dyte-border-radius-md, 8px);border:var(--dyte-border-width-sm, 1px) solid rgb(var(--dyte-colors-background-600, 60 60 60))}textarea{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));box-sizing:border-box;padding:var(--dyte-space-3, 12px);color:rgb(var(--dyte-colors-text-1000, 255 255 255))}textarea::-moz-placeholder{color:rgb(var(--dyte-colors-text-1000, 255 255 255))}textarea::placeholder{color:rgb(var(--dyte-colors-text-1000, 255 255 255))}textarea{border-top-left-radius:var(--dyte-border-radius-md, 8px);border-top-right-radius:var(--dyte-border-radius-md, 8px);font-family:var(--dyte-font-family, sans-serif);outline:2px solid transparent;outline-offset:2px;resize:none;overflow-y:auto;border-width:var(--dyte-border-width-none, 0);border-style:none;min-height:60px;font-size:14px}.chat-buttons{border-bottom-right-radius:var(--dyte-border-radius-md, 8px);border-bottom-left-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));display:flex;height:var(--dyte-space-8, 32px);align-items:center;justify-content:space-between;padding-left:var(--dyte-space-3, 12px);padding-right:var(--dyte-space-3, 12px);padding-top:var(--dyte-space-2, 8px);padding-bottom:var(--dyte-space-2, 8px)}.chat-buttons .left dyte-button{margin-right:var(--dyte-space-1, 4px)}.chat-buttons .left dyte-button dyte-icon{height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px)}.chat-buttons .right{z-index:10}.chat-buttons .right .edit-buttons{display:flex;gap:var(--dyte-space-2, 8px)}.chat-buttons>div{display:flex;align-items:center}dyte-emoji-picker{z-index:0;border-top:var(--dyte-border-width-sm, 1px) solid rgb(var(--dyte-colors-background-600, 60 60 60));-webkit-animation:0.3s slide-up ease;animation:0.3s slide-up ease}@-webkit-keyframes slide-up{from{transform:translateY(100%)}to{transform:translateY(0%)}}@keyframes slide-up{from{transform:translateY(100%)}to{transform:translateY(0%)}}.member-list{margin:var(--dyte-space-0, 0px);margin-top:var(--dyte-space-1, 4px);max-height:var(--dyte-space-28, 112px);min-width:var(--dyte-space-40, 160px);max-width:var(--dyte-space-64, 256px);padding:var(--dyte-space-0, 0px);position:absolute;bottom:var(--dyte-space-28, 112px);list-style-type:none;overflow-y:auto;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity));border-radius:var(--dyte-border-radius-sm, 4px);--tw-border-spacing-x:var(--dyte-space-2, 8px);--tw-border-spacing-y:var(--dyte-space-2, 8px);border-spacing:var(--tw-border-spacing-x) var(--tw-border-spacing-y);border-style:solid;border-color:rgba(var(--dyte-colors-brand-300, 73 124 253) / 0.5)}.member-list .member{display:flex;align-items:center;gap:var(--dyte-space-1, 4px);padding:var(--dyte-space-2, 8px);padding-right:var(--dyte-space-4, 16px);cursor:pointer}.member-list .member dyte-avatar{flex-shrink:0;height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px);font-size:14px;color:rgb(var(--dyte-colors-text-on-brand-1000, var(--dyte-colors-text-1000, 255 255 255)))}.member-list .member span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.member-list .member:hover,.member-list .member.selected{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-700, 2 70 253) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-on-brand-1000, var(--dyte-colors-text-1000, 255 255 255)))}.suggested-replies{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-3, 12px);display:flex;flex-wrap:nowrap;gap:var(--dyte-space-2, 8px);list-style-type:none;overflow-x:auto}.suggested-replies dyte-tooltip{flex-shrink:0}.suggested-replies li{padding:var(--dyte-space-2, 8px);border-radius:var(--dyte-border-radius-md, 8px);background-color:rgba(var(--dyte-colors-brand-300, 73 124 253) / 0.75);color:rgb(var(--dyte-colors-text-on-brand-1000, var(--dyte-colors-text-1000, 255 255 255)));cursor:pointer}.suggested-replies li:hover{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-bg-opacity))}.preview-overlay{position:absolute;top:var(--dyte-space-0, 0px);right:var(--dyte-space-0, 0px);bottom:var(--dyte-space-0, 0px);left:var(--dyte-space-0, 0px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity));border-radius:var(--dyte-border-radius-md, 8px)}.file-preview{position:absolute;top:var(--dyte-space-4, 16px);right:var(--dyte-space-4, 16px);bottom:var(--dyte-space-4, 16px);left:var(--dyte-space-4, 16px);max-width:-webkit-fit-content;max-width:-moz-fit-content;max-width:fit-content;height:var(--dyte-space-20, 80px)}.file-preview dyte-tooltip{position:absolute;top:calc(var(--dyte-space-1, 4px) * -1);left:calc(var(--dyte-space-1, 4px) * -1);margin-left:calc(var(--dyte-space-1, 4px) * -1);margin-top:calc(var(--dyte-space-1, 4px) * -1)}.file-preview dyte-button{display:flex;height:var(--dyte-space-4, 16px);width:var(--dyte-space-4, 16px);align-items:center;justify-content:center;border-radius:9999px;border:2px solid rgb(var(--dyte-colors-background-1000, 8 8 8))}.file-preview dyte-icon{height:var(--dyte-space-3, 12px);width:var(--dyte-space-3, 12px)}.preview-image{height:var(--dyte-space-16, 64px);width:var(--dyte-space-16, 64px);-o-object-fit:cover;object-fit:cover;max-height:100%;max-width:100%;overflow:clip;border-radius:var(--dyte-border-radius-md, 8px)}.preview-file{padding-left:var(--dyte-space-4, 16px);padding-right:var(--dyte-space-4, 16px);padding-top:var(--dyte-space-2, 8px);padding-bottom:var(--dyte-space-2, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));overflow:hidden;text-overflow:ellipsis;white-space:nowrap;border-radius:var(--dyte-border-radius-md, 8px)}.preview-file:hover span,.preview-file:focus span{display:inline-block;-webkit-animation:scroll-text 12s ease 0s infinite normal;animation:scroll-text 12s ease 0s infinite normal}@-webkit-keyframes scroll-text{0%{transform:translateX(0%)}70%{transform:translateX(-100%)}80%{transform:translateX(0%)}100%{transform:translateX(0%)}}@keyframes scroll-text{0%{transform:translateX(0%)}70%{transform:translateX(-100%)}80%{transform:translateX(0%)}100%{transform:translateX(0%)}}";

const MENTION_CHAR = '@';
const DyteChatComposerUi = class {
  constructor(hostRef) {
    (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.onNewMessage = (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteNewMessage", 7);
    this.onEditMessage = (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteEditMessage", 7);
    this.onEditCancelled = (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteEditCancelled", 7);
    this.fileReader = new FileReader();
    this.fileToUpload = null;
    this.handleKeyDown = (e) => {
      if (e.key === MENTION_CHAR) {
        this.mentionQuery = MENTION_CHAR;
      }
      if (e.key === 'ArrowDown') {
        this.focusedMemberIndex = Math.min(this.focusedMemberIndex + 1, this.getFilteredMembers().length - 1);
      }
      if (e.key === 'ArrowUp') {
        this.focusedMemberIndex = Math.max(0, this.focusedMemberIndex - 1);
      }
      if (e.key === 'Escape' || (e.key === 'Backspace' && this.mentionQuery === MENTION_CHAR)) {
        this.mentionQuery = '';
      }
      if (['Enter', 'Tab', ' '].includes(e.key) && this.mentionQuery !== '') {
        const member = this.getFilteredMembers()[this.focusedMemberIndex];
        this.onMemberSelect(member);
        e.preventDefault();
        return;
      }
      // slack like typing experience
      if (e.key === 'Enter' && e.shiftKey) {
        const height = this.$textArea.clientHeight;
        if (height < 200) {
          this.$textArea.style.height = this.$textArea.clientHeight + 20 + 'px';
        }
      }
      else if (e.key === 'Enter') {
        e.preventDefault();
        if (this.prefill.editMessage) {
          this.handleEditMessage();
        }
        else {
          this.handleSendMessage();
        }
      }
      else if (e.key === 'Backspace') {
        if (this.$textArea.value.endsWith('\n')) {
          this.$textArea.style.height = this.$textArea.clientHeight - 20 + 'px';
        }
        else if (this.$textArea.value === '') {
          this.$textArea.style.height = 'auto';
        }
      }
    };
    this.handleKeyUp = (_e) => {
      if (this.mentionQuery !== '') {
        const reversed = (0,_chat_88f12485_js__WEBPACK_IMPORTED_MODULE_6__.r)(this.$textArea.value.trim());
        const query = reversed.substring(0, reversed.indexOf(MENTION_CHAR));
        this.mentionQuery = `${MENTION_CHAR}${(0,_chat_88f12485_js__WEBPACK_IMPORTED_MODULE_6__.r)(query)}`;
      }
    };
    this.onPaste = (e) => {
      const data = e.clipboardData || e.originalEvent.clipboardData;
      (0,_chat_88f12485_js__WEBPACK_IMPORTED_MODULE_6__.h)(data.items, this.generateFilePreview);
      (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.w)(() => {
        if (data.items.length > 0) {
          this.$textArea.value = '';
        }
      });
    };
    this.generateFilePreview = (type, file) => {
      this.fileToUpload = { type, image: file, file };
      if (type === 'image') {
        this.fileReader.readAsDataURL(file);
      }
      else if (type === 'file') {
        this.filePreview = file.name;
      }
    };
    this.sendFile = () => {
      if (!this.canSendFiles) {
        return;
      }
      if (this.fileToUpload.type === 'image') {
        this.onNewMessage.emit({
          type: 'image',
          file: this.fileToUpload.image,
          image: this.fileToUpload.image,
        });
      }
      else {
        this.onNewMessage.emit({ type: 'file', file: this.fileToUpload.file });
      }
      this.cleanUpFileUpload();
    };
    this.handleSendMessage = () => {
      if (!this.canSendTextMessage) {
        return;
      }
      if (this.fileToUpload !== null) {
        this.sendFile();
        return;
      }
      const message = this.$textArea.value.trim();
      if (message.length > 0) {
        if (this.prefill.replyMessage) {
          this.onNewMessage.emit({
            type: 'text',
            message,
            replyTo: this.prefill.replyMessage,
          });
        }
        else {
          this.onNewMessage.emit({ type: 'text', message });
        }
        this.cleanup();
      }
    };
    this.cleanup = () => {
      this.mentionQuery = '';
      this.focusedMemberIndex = 0;
      this.$textArea.value = '';
      this.$textArea.style.height = 'auto';
      _graceful_storage_33bc316d_js__WEBPACK_IMPORTED_MODULE_5__.g.setItem('dyte-text-message', '');
    };
    this.handleEditMessage = () => {
      this.onEditMessage.emit({
        id: this.prefill.editMessage.id,
        message: this.$textArea.value.trim(),
        channelId: this.prefill.editMessage.channelId,
      });
      this.cleanup();
    };
    this.handleEditCancel = () => {
      this.onEditCancelled.emit();
      this.cleanup();
    };
    this.initializeTextField = (el) => {
      this.$textArea = el;
      const message = _graceful_storage_33bc316d_js__WEBPACK_IMPORTED_MODULE_5__.g.getItem('dyte-text-message') || '';
      this.$textArea.value = message;
    };
    this.onMemberSelect = (member) => {
      const reversedQuery = (0,_chat_88f12485_js__WEBPACK_IMPORTED_MODULE_6__.r)(this.mentionQuery);
      const reversed = (0,_chat_88f12485_js__WEBPACK_IMPORTED_MODULE_6__.r)(this.$textArea.value.trim()).replace(reversedQuery, '');
      this.$textArea.value = (0,_chat_88f12485_js__WEBPACK_IMPORTED_MODULE_6__.r)(reversed) + `${MENTION_CHAR}${member.name} `;
      this.mentionQuery = '';
      this.focusedMemberIndex = 0;
      (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.w)(() => this.$textArea.focus());
    };
    this.getFilteredMembers = () => {
      const query = this.mentionQuery.replace(MENTION_CHAR, '');
      return this.members.filter((member) => member.name.toLowerCase().includes(query.toLowerCase()));
    };
    this.cleanUpFileUpload = () => {
      this.filePreview = null;
      this.fileToUpload = null;
    };
    this.renderSuggestedReplies = () => {
      if (!this.prefill.suggestedReplies)
        return;
      if (this.prefill.suggestedReplies.length === 0)
        return;
      return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul", { class: "suggested-replies scrollbar" }, this.prefill.suggestedReplies.map((reply) => ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tooltip", { label: this.t('chat.click_to_send') }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("li", { onClick: () => this.onNewMessage.emit({ type: 'text', message: reply }) }, reply))))));
    };
    this.renderMenu = () => {
      if (this.mentionQuery.length === 0)
        return;
      const filteredMembers = this.getFilteredMembers();
      if (filteredMembers.length === 0)
        return;
      return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul", { class: "member-list scrollbar" }, filteredMembers.map((member, index) => ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("li", { class: { member: true, selected: index === this.focusedMemberIndex }, onClick: () => this.onMemberSelect(member), ref: ($li) => {
          if (index === this.focusedMemberIndex) {
            (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.w)(() => {
              if ($li)
                $li.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
            });
          }
        } }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-avatar", { participant: {
          name: member.name,
          picture: member.picture,
        }, size: "sm" }), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, member.name))))));
    };
    this.canSendTextMessage = false;
    this.canSendFiles = false;
    this.size = undefined;
    this.iconPack = _default_icon_pack_a3227c63_js__WEBPACK_IMPORTED_MODULE_3__.d;
    this.t = (0,_index_29bc5d44_js__WEBPACK_IMPORTED_MODULE_4__.u)();
    this.disableEmojiPicker = false;
    this.prefill = {};
    this.members = [];
    this.emojiPickerActive = false;
    this.mentionQuery = '';
    this.focusedMemberIndex = 0;
    this.filePreview = null;
  }
  connectedCallback() {
    this.fileReader.onload = (e) => {
      if (typeof e.target.result === 'string') {
        this.filePreview = e.target.result;
      }
    };
    // this.fileReader.onloadstart = () => {};
    // this.fileReader.onloadend = () => {};
  }
  componentDidRender() {
    if (this.prefill.editMessage || this.prefill.replyMessage) {
      (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.w)(() => this.$textArea.focus());
    }
  }
  uploadFile(type) {
    const input = document.createElement('input');
    input.type = 'file';
    if (type === 'image') {
      input.accept = 'image/*';
    }
    input.onchange = (e) => {
      const { validity, files: [file], } = e.target;
      if (validity.valid) {
        this.generateFilePreview(type, file);
      }
    };
    input.click();
  }
  renderFilePreview() {
    if (typeof this.filePreview !== 'string')
      return;
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "preview-overlay" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "file-preview" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tooltip", { label: this.t('chat.cancel_upload') }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { variant: "secondary", kind: "icon", onClick: this.cleanUpFileUpload }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.dismiss }))), this.fileToUpload.type === 'image' ? ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("img", { class: "preview-image", src: this.filePreview })) : ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "preview-file" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, this.filePreview))))));
  }
  render() {
    var _a;
    const uiProps = { iconPack: this.iconPack, t: this.t, size: this.size };
    const defautlValue = (_a = this.prefill.editMessage) === null || _a === void 0 ? void 0 : _a.message;
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.H, null, this.canSendTextMessage && this.emojiPickerActive && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-emoji-picker", { part: "emoji-picker", onDyteEmojiClicked: (e) => {
        this.$textArea.value += e.detail;
        this.$textArea.focus();
      }, t: this.t })), this.renderSuggestedReplies(), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: "chat-addon" }), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "chat-input", part: "chat-input" }, this.renderMenu(), this.canSendTextMessage && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("textarea", { class: "scrollbar", part: "textarea", ref: this.initializeTextField, autoFocus: true, placeholder: this.fileToUpload ? '' : this.t('chat.message_placeholder'), value: defautlValue, onPaste: this.onPaste, onKeyDown: this.handleKeyDown, onKeyUp: this.handleKeyUp, onInput: (e) => {
        _graceful_storage_33bc316d_js__WEBPACK_IMPORTED_MODULE_5__.g.setItem('dyte-text-message', e.target.value);
      }, disabled: !!this.filePreview })), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "chat-buttons", part: "chat-buttons" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "left", part: "chat-buttons-left" }, !this.prefill.editMessage &&
      this.canSendFiles && [
      (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tooltip", Object.assign({ label: this.t('chat.send_file') }, uiProps), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { variant: "ghost", kind: "icon", onClick: () => this.uploadFile('file'), title: this.t('chat.send_file'), iconPack: this.iconPack, t: this.t }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.attach }))),
      (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tooltip", Object.assign({ label: this.t('chat.send_img') }, uiProps), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { variant: "ghost", kind: "icon", onClick: () => this.uploadFile('image'), title: this.t('chat.send_img'), iconPack: this.iconPack, t: this.t }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.image }))),
    ], !this.prefill.editMessage && this.canSendTextMessage && !this.disableEmojiPicker && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tooltip", Object.assign({ label: this.t('chat.send_emoji') }, uiProps), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { variant: "ghost", kind: "icon", class: { active: this.emojiPickerActive }, title: this.t('chat.send_emoji'), iconPack: this.iconPack, t: this.t, onClick: () => {
        this.emojiPickerActive = !this.emojiPickerActive;
      } }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.emoji_multiple }))))), !!this.filePreview && this.renderFilePreview(), this.canSendTextMessage && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "right", part: "chat-buttons-right" }, !this.prefill.editMessage && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tooltip", Object.assign({ variant: "primary", label: this.t('chat.send_msg'), delay: 2000 }, uiProps), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { kind: "icon", onClick: () => this.handleSendMessage(), title: this.t('chat.send_msg'), iconPack: this.iconPack, t: this.t }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.send })))), this.prefill.editMessage && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "edit-buttons" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tooltip", Object.assign({ variant: "secondary", label: this.t('cancel'), delay: 2000 }, uiProps), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { kind: "icon", variant: "secondary", onClick: () => this.handleEditCancel(), title: this.t('cancel'), iconPack: this.iconPack, t: this.t }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.dismiss }))), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tooltip", Object.assign({ variant: "primary", label: this.t('chat.update_msg'), delay: 2000 }, uiProps), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { kind: "icon", onClick: () => this.handleEditMessage(), title: this.t('chat.send_msg'), iconPack: this.iconPack, t: this.t }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.checkmark })))))))))));
  }
};
DyteChatComposerUi.style = dyteChatComposerUiCss;

const dyteChatMessagesUiCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.scrollbar{scrollbar-width:thin;scrollbar-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))\n    var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar{height:var(--dyte-space-1\\.5, 6px);width:var(--dyte-space-1\\.5, 6px);border-radius:9999px;background-color:var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar-thumb{border-radius:9999px;background-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))}:host{position:relative;display:flex;flex-direction:column;word-break:break-word}.chat-container{box-sizing:border-box;display:flex;flex-direction:column;padding-top:var(--dyte-space-4, 16px);padding-bottom:var(--dyte-space-4, 16px);flex:1 0 0px;overflow-y:scroll}.chat-container .spacer{flex:1 1 auto}.chat-container .chat{flex:0 0 auto}.file-picker{display:none}.chat *:first-child{margin-top:var(--dyte-space-0, 0px)}.chat .head{display:flex;align-items:center}.chat .head .name{margin-right:var(--dyte-space-4, 16px);font-size:12px;font-weight:700}.chat .head .time{font-size:12px;color:rgb(var(--dyte-colors-text-800, 255 255 255 / 0.76))}.chat .body{margin-top:var(--dyte-space-2, 8px);margin-bottom:var(--dyte-space-2, 8px);overflow-wrap:break-word;font-size:14px;line-height:1.375}.chat .body .emoji{font-size:24px}p{margin-top:var(--dyte-space-0, 0px);margin-bottom:var(--dyte-space-3, 12px)}dyte-text-message,dyte-image-message,dyte-file-message{margin-top:var(--dyte-space-4, 16px);display:block;padding-left:var(--dyte-space-3, 12px);padding-right:var(--dyte-space-3, 12px);color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88));box-sizing:border-box}*[is-continued]{margin-top:var(--dyte-space-3, 12px)}dyte-text-message[is-continued]{margin-top:var(--dyte-space-2, 8px)}.chat .image{position:relative;height:var(--dyte-space-40, 160px);max-width:var(--dyte-space-64, 256px);cursor:pointer}.chat .image img{display:none;height:100%;width:100%;border-radius:var(--dyte-border-radius-sm, 4px);-o-object-fit:cover;object-fit:cover}.chat .image .image-spinner{display:flex;height:100%;width:100%;flex-direction:column;align-items:center;justify-content:center;border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity))}.chat .image .image-spinner dyte-spinner{--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-text-opacity))}.chat .image .image-errored{display:flex;height:100%;width:100%;flex-direction:column;align-items:center;justify-content:center;border-radius:var(--dyte-border-radius-sm, 4px);background-color:rgba(var(--dyte-colors-danger, 255 45 45) / 0.1);--tw-text-opacity:1;color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-text-opacity))}.chat .image .actions{display:none;height:var(--dyte-space-8, 32px);align-items:center;position:absolute;top:var(--dyte-space-2, 8px);right:var(--dyte-space-2, 8px);border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255));overflow:hidden;--tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.chat .image .actions .action{height:var(--dyte-space-8, 32px);width:var(--dyte-space-8, 32px);border-radius:var(--dyte-border-radius-none, 0);border-width:var(--dyte-border-width-none, 0);border-style:none;background-color:transparent;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.chat .image .actions .action:hover{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity))}.image.loaded img{display:block}.image.loaded .image-spinner{display:none}.image:hover .actions,.image:focus .actions{display:flex}.chat .file{display:flex;align-items:center;gap:var(--dyte-space-1, 4px);padding-left:var(--dyte-space-2, 8px);padding-right:var(--dyte-space-2, 8px);padding-top:var(--dyte-space-1\\.5, 6px);padding-bottom:var(--dyte-space-1\\.5, 6px);border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}.chat .file .file-data{flex:1 1 0%}.chat .file .file-data .name{word-break:break-all;color:rgb(var(--dyte-colors-text-1000, 255 255 255));overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1}.chat .file .file-data .file-data-split{margin-top:var(--dyte-space-0\\.5, 2px);display:flex;align-items:center;font-size:12px}.chat .file .file-data .file-data-split .ext{margin-right:var(--dyte-space-2, 8px);text-transform:uppercase;overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1}.chat .file .file-data .file-data-split .divider{height:var(--dyte-space-4, 16px);width:var(--dyte-space-0\\.5, 2px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity))}.chat .file .file-data .file-data-split .size{margin-left:var(--dyte-space-2, 8px)}a{--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-text-opacity));-webkit-text-decoration-line:none;text-decoration-line:none}a:hover{-webkit-text-decoration-line:underline;text-decoration-line:underline}.new-chat-marker{display:flex;width:100%;align-items:center;gap:var(--dyte-space-2, 8px);--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-text-opacity))}.new-chat-marker::before{content:'';height:1px;flex:1 1 0%;background-color:rgba(var(--dyte-colors-brand-300, 73 124 253) / 0.5)}.show-new-messages-ctr{pointer-events:none;display:flex;justify-content:flex-end;padding:var(--dyte-space-3, 12px);z-index:0;margin-top:calc(var(--dyte-space-14, 56px) * -1)}.show-new-messages{pointer-events:auto;--tw-translate-y:calc(var(--dyte-space-6, 24px) * -1);transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity:0;transition-property:color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.show-new-messages.active{--tw-translate-y:var(--dyte-space-0, 0px);transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity:1}";

const DyteChatMessagesUi = class {
  constructor(hostRef) {
    (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.observingEl = [];
    this.onScroll = (e) => {
      const target = e.target;
      (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.w)(() => {
        const { scrollTop, clientHeight, scrollHeight } = target;
        const fromTop = scrollTop + clientHeight;
        if (fromTop + 10 >= scrollHeight) {
          // at bottom
          this.autoScrollEnabled = true;
          this.showLatestMessageButton = false;
        }
        else {
          // not at bottom
          this.autoScrollEnabled = false;
        }
      });
    };
    this.scrollToBottom = () => {
      (0,_scroll_8cc79809_js__WEBPACK_IMPORTED_MODULE_13__.s)(this.$chat);
    };
    this.observeMessage = (el) => {
      if (el) {
        this.observingEl.push(el);
      }
      try {
        this.intersectionObserver.observe(el);
      }
      catch (_a) { }
    };
    this.selectedGroup = undefined;
    this.messages = [];
    this.selfUserId = undefined;
    this.size = undefined;
    this.iconPack = _default_icon_pack_a3227c63_js__WEBPACK_IMPORTED_MODULE_3__.d;
    this.t = (0,_index_29bc5d44_js__WEBPACK_IMPORTED_MODULE_4__.u)();
    this.now = new Date();
    this.showLatestMessageButton = false;
  }
  connectedCallback() {
    var _a;
    this.lastReadTimestamp = (_a = _user_prefs_f52d234f_js__WEBPACK_IMPORTED_MODULE_7__.c['everyone']) !== null && _a !== void 0 ? _a : new Date('0001-01-01T00:00:00Z');
    this.intersectionObserver = new IntersectionObserver((entries) => {
      if (!document.hasFocus())
        return;
      (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.w)(() => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const currTimestamp = parseInt(entry.target.getAttribute('data-timestamp'));
            if (currTimestamp > this.lastReadTimestamp.getTime()) {
              // this.lastReadTimestamp = new Date();
              _user_prefs_f52d234f_js__WEBPACK_IMPORTED_MODULE_7__.c[this.selectedGroup] = new Date();
            }
          }
        }
      });
    });
    // update current time every minute
    const updateNow = () => {
      this.now = new Date();
      this.timeout = setTimeout(() => {
        if (this.request != null) {
          this.request = requestAnimationFrame(updateNow);
        }
      }, 60 * 1000);
    };
    this.request = requestAnimationFrame(updateNow);
    this.chatChanged(this.messages);
  }
  componentDidLoad() {
    this.$chat.addEventListener('scroll', this.onScroll);
  }
  componentDidRender() {
    if (this.autoScrollEnabled) {
      (0,_scroll_8cc79809_js__WEBPACK_IMPORTED_MODULE_13__.s)(this.$chat);
    }
    else if (this.autoScrollEnabled == null) {
      // scroll to bottom on first render
      (0,_scroll_8cc79809_js__WEBPACK_IMPORTED_MODULE_13__.s)(this.$chat, false);
    }
  }
  chatChanged(messages) {
    if (this.$chat == null)
      return;
    if (this.autoScrollEnabled || this.$chat.clientHeight === this.$chat.scrollHeight)
      return;
    for (let i = messages.length - 1; i >= 0; i--) {
      if (messages[i].message.time > this.lastReadTimestamp &&
        messages[i].message.userId !== this.selfUserId) {
        // show latest message button when you have new messages
        // and chat container is scrollable and autoscroll is not enabled
        this.showLatestMessageButton = true;
        break;
      }
    }
  }
  selectedBucketChanged() {
    this.autoScrollEnabled = undefined;
    this.observingEl.forEach((el) => {
      this.intersectionObserver.unobserve(el);
    });
    this.observingEl = [];
  }
  disconnectedCallback() {
    this.$chat.removeEventListener('scroll', this.onScroll);
    this.intersectionObserver.disconnect();
    clearTimeout(this.timeout);
    cancelAnimationFrame(this.request);
  }
  render() {
    var _a;
    let prevMessage = null;
    let reachedFirstUnread = false;
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "chat-container scrollbar", ref: (el) => (this.$chat = el), part: "container" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "spacer", part: "spacer" }), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "chat", part: "chat" }, (_a = this.messages) === null || _a === void 0 ? void 0 : _a.map((item) => {
      if (item.type === 'chat') {
        const { message } = item;
        const isSelfMessage = message.userId === this.selfUserId;
        const isUnread = !isSelfMessage &&
          !this.autoScrollEnabled &&
          !reachedFirstUnread &&
          message.time > this.lastReadTimestamp;
        if (isUnread)
          reachedFirstUnread = isUnread;
        const isContinued = !isUnread &&
          message.userId === (prevMessage === null || prevMessage === void 0 ? void 0 : prevMessage.userId) &&
          (0,_date_8c24cfe1_js__WEBPACK_IMPORTED_MODULE_14__.d)(message.time, prevMessage === null || prevMessage === void 0 ? void 0 : prevMessage.time) < 2;
        prevMessage = message;
        switch (message.type) {
          case 'text':
            return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "is-continued": isContinued, key: item.message.id }, isUnread && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "new-chat-marker", part: "new-chat-marker" }, this.t('chat.new'))), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-text-message", { message: message, now: this.now, isContinued: isContinued, "data-timestamp": message.time.getTime(), ref: this.observeMessage, iconPack: this.iconPack, t: this.t })));
          case 'image':
            return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "is-continued": isContinued, key: item.message.id }, isUnread && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "new-chat-marker", part: "new-chat-marker" }, this.t('chat.new'))), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-image-message", { message: message, now: this.now, isContinued: isContinued, iconPack: this.iconPack, "data-timestamp": message.time.getTime(), ref: this.observeMessage, t: this.t })));
          case 'file':
            return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "is-continued": isContinued, key: item.message.id }, isUnread && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "new-chat-marker", part: "new-chat-marker" }, this.t('chat.new'))), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-file-message", { message: message, now: this.now, isContinued: isContinued, iconPack: this.iconPack, t: this.t, "data-timestamp": message.time.getTime(), ref: this.observeMessage })));
        }
      }
      return null;
    }))), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "show-new-messages-ctr" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { class: {
        'show-new-messages': true,
        active: this.showLatestMessageButton,
      }, kind: "icon", part: "show-new-messages", onClick: this.scrollToBottom, iconPack: this.iconPack, t: this.t }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.chevron_down, iconPack: this.iconPack, t: this.t })))));
  }
  static get watchers() { return {
    "messages": ["chatChanged"],
    "selectedGroup": ["selectedBucketChanged"]
  }; }
};
DyteChatMessagesUi.style = dyteChatMessagesUiCss;

const dyteChatMessagesUiPaginatedCss = ":host{display:flex;flex-direction:column;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity));flex:1 0 0px}";

const DyteChatMessagesUiPaginated = class {
  constructor(hostRef) {
    (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.editMessageInit = (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "editMessageInit", 7);
    this.pageSize = 25;
    this.lastReadMessageIndex = -1;
    this.maybeMarkChannelAsRead = (messages) => {
      if (!this.selectedChannelId)
        return;
      if (messages.length === 0)
        return;
      if (this.lastReadMessageIndex !== -1)
        return;
      const latestMsg = messages.at(0).time > messages.at(-1).time ? messages.at(0) : messages.at(-1);
      if (!latestMsg.channelIndex)
        return;
      this.lastReadMessageIndex = parseInt(latestMsg.channelIndex, 10);
      this.meeting.chat.markLastReadMessage(this.selectedChannelId, latestMsg);
    };
    this.getChatMessages = async (timestamp, size, reversed) => {
      const { messages } = await this.meeting.chat.getMessages(timestamp, size, reversed, undefined, this.selectedChannelId);
      this.maybeMarkChannelAsRead(messages);
      return messages;
    };
    this.createChatNodes = (data) => {
      /**
       * NOTE(callmetarush): When between pages the message's isContinued
       * will fail in current implementation
       */
      return data.map((message, idx) => {
        var _a;
        const isContinued = message.userId === ((_a = data[idx - 1]) === null || _a === void 0 ? void 0 : _a.userId);
        return this.createChatNode(message, isContinued);
      });
    };
    this.disconnectMeeting = (meeting) => {
      var _a;
      (_a = meeting === null || meeting === void 0 ? void 0 : meeting.chat) === null || _a === void 0 ? void 0 : _a.removeListener('chatUpdate', this.chatUpdateListener);
    };
    this.createChatNode = (message, isContinued) => {
      var _a, _b;
      const isSelf = this.meeting.self.userId === message.userId;
      return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-chat-message", { message: message, isContinued: isContinued, isUnread: false, size: this.size, iconPack: this.iconPack, key: message.id, isSelf: isSelf, alignRight: isSelf, disableControls: this.meeting.meta.viewType !== 'CHAT', senderDisplayPicture: (_a = this.meeting.participants.all.find((member) => member.id === message.userId)) === null || _a === void 0 ? void 0 : _a.picture, hideAvatar: isSelf || ((_b = this.selectedChannel) === null || _b === void 0 ? void 0 : _b.isDirectMessage), canEdit: isSelf && message.type === 'text', canDelete: isSelf, onEdit: () => {
          if (message.type !== 'text')
            return;
          this.editMessageInit.emit({ payload: message, flags: { isEdit: true } });
        }, onReply: () => {
          if (message.type !== 'text')
            return;
          this.editMessageInit.emit({
            payload: message,
            flags: { isReply: true },
          });
        }, onDelete: async () => {
          var _a;
          await this.meeting.chat.deleteMessage(message.id, (_a = this.selectedChannel) === null || _a === void 0 ? void 0 : _a.id).catch(() => {
            // log failure
          });
        } }));
    };
    this.chatUpdateListener = (data) => {
      if (this.selectedChannelId && data.message.channelId !== this.selectedChannelId)
        return;
      if (data.action === 'add') {
        this.$paginatedListRef.onNewNode(data.message);
        this.lastReadMessageIndex = -1;
        this.maybeMarkChannelAsRead([data.message]);
      }
      else if (data.action === 'delete') {
        this.$paginatedListRef.onNodeDelete(data.message.id);
      }
      else if (data.action === 'edit') {
        this.$paginatedListRef.onNodeUpdate(data.message.id, data.message);
      }
    };
    this.meeting = undefined;
    this.selectedChannel = undefined;
    this.selectedChannelId = undefined;
    this.size = undefined;
    this.iconPack = _default_icon_pack_a3227c63_js__WEBPACK_IMPORTED_MODULE_3__.d;
    this.t = (0,_index_29bc5d44_js__WEBPACK_IMPORTED_MODULE_4__.u)();
  }
  connectedCallback() {
    this.meetingChanged(this.meeting);
  }
  disconnectedCallback() {
    this.disconnectMeeting(this.meeting);
  }
  meetingChanged(meeting, oldMeeting) {
    var _a;
    if (oldMeeting != undefined)
      this.disconnectMeeting(oldMeeting);
    if (meeting && !meeting.chat)
      return;
    if (meeting != null) {
      (_a = meeting.chat) === null || _a === void 0 ? void 0 : _a.addListener('chatUpdate', this.chatUpdateListener);
    }
  }
  channelChanged() {
    this.lastReadMessageIndex = -1;
  }
  render() {
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-paginated-list", { ref: (el) => (this.$paginatedListRef = el), pageSize: this.pageSize, pagesAllowed: 3, fetchData: this.getChatMessages, createNodes: this.createChatNodes, selectedItemId: this.selectedChannelId, emptyListLabel: this.t('chat.empty_channel') })));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"],
    "selectedChannelId": ["channelChanged"]
  }; }
};
DyteChatMessagesUiPaginated.style = dyteChatMessagesUiPaginatedCss;

const dyteChatSearchResultsCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:flex;height:100%;flex-direction:column;position:relative;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity))}";

const DyteChatSearchResults = class {
  constructor(hostRef) {
    (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.pageSize = 50;
    this.searchMessages = async (timestamp, size, reversed) => {
      return this.meeting.chat.searchMessages(this.query, {
        channelId: this.channelId,
        timestamp,
        size,
        reversed,
      });
    };
    this.nodeRenderer = (messages) => {
      return messages.map((message) => ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-chat-message", { key: message.id, message: message, disableControls: true })));
    };
    this.meeting = undefined;
    this.query = undefined;
    this.channelId = undefined;
    this.iconPack = _default_icon_pack_a3227c63_js__WEBPACK_IMPORTED_MODULE_3__.d;
    this.t = (0,_index_29bc5d44_js__WEBPACK_IMPORTED_MODULE_4__.u)();
  }
  render() {
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-paginated-list", { pageSize: this.pageSize, pagesAllowed: 3, fetchData: this.searchMessages, createNodes: this.nodeRenderer, selectedItemId: this.query })));
  }
};
DyteChatSearchResults.style = dyteChatSearchResultsCss;

const dyteChatSelectorUiCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.scrollbar{scrollbar-width:thin;scrollbar-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))\n    var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar{height:var(--dyte-space-1\\.5, 6px);width:var(--dyte-space-1\\.5, 6px);border-radius:9999px;background-color:var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar-thumb{border-radius:9999px;background-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))}:host{display:flex;flex-direction:column}.chat-scope-selector{position:relative;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity));z-index:10}.chat-scope-selector button{width:100%;border-width:var(--dyte-border-width-none, 0);border-style:none;padding:var(--dyte-space-4, 16px);display:flex;align-items:center;justify-content:space-between;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255));font-size:14px;cursor:pointer;height:var(--dyte-space-12, 48px)}.chat-scope-selector button span{display:flex;align-items:center;justify-content:flex-start}.chat-scope-selector button dyte-icon{height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px)}.chat-scope-selector .search{position:-webkit-sticky;position:sticky;box-sizing:border-box;display:flex;align-items:center;border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));margin-left:var(--dyte-space-3, 12px);margin-right:var(--dyte-space-3, 12px);margin-top:var(--dyte-space-3, 12px);margin-bottom:var(--dyte-space-0, 0px)}.chat-scope-selector .search dyte-icon{margin-left:var(--dyte-space-2, 8px);margin-right:var(--dyte-space-2, 8px);height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px);color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52))}.chat-scope-selector .search input{box-sizing:border-box;height:var(--dyte-space-9, 36px);width:100%;padding-right:var(--dyte-space-2, 8px);border-width:var(--dyte-border-width-none, 0);border-style:none;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255));outline:2px solid transparent;outline-offset:2px;border-radius:var(--dyte-border-radius-sm, 4px);font-size:14px}.chat-scope-selector .search input::-moz-placeholder{color:rgb(var(--dyte-colors-text-800, 255 255 255 / 0.76))}.chat-scope-selector .search input::placeholder{color:rgb(var(--dyte-colors-text-800, 255 255 255 / 0.76))}.chat-scope-selector .participants-container{position:absolute;width:100%;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));top:var(--dyte-space-12, 48px);-webkit-animation:0.3s slide-down ease;animation:0.3s slide-down ease}@-webkit-keyframes slide-down{from{transform:translateY(-50px)}to{transform:translateY(0%)}}@keyframes slide-down{from{transform:translateY(-50px)}to{transform:translateY(0%)}}.chat-scope-selector .scope-list{margin-top:var(--dyte-space-0, 0px);margin-bottom:var(--dyte-space-0, 0px);list-style-type:none;padding-left:var(--dyte-space-0, 0px);padding-right:var(--dyte-space-0, 0px);overflow:auto;max-height:375px}.chat-scope-selector .scope-list .scope{position:relative;display:flex;flex-direction:row;align-items:center;padding-left:var(--dyte-space-3, 12px);padding-right:var(--dyte-space-3, 12px);padding-top:var(--dyte-space-4, 16px);padding-bottom:var(--dyte-space-4, 16px)}.chat-scope-selector .scope-list .scope:hover{cursor:pointer;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity))}.chat-scope-selector .scope-list .scope-special{margin-top:var(--dyte-space-4, 16px);--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-text-opacity))}.chat-scope-selector .scope-list .everyone-icon>dyte-icon{height:var(--dyte-space-6, 24px);width:var(--dyte-space-6, 24px);color:rgb(var(--dyte-colors-text-on-brand-1000, var(--dyte-colors-text-1000, 255 255 255)))}.chat-scope-selector .scope-list .everyone-icon{display:flex;height:100%;width:100%;align-items:center;justify-content:center;margin-right:var(--dyte-space-2, 8px);height:var(--dyte-space-8, 32px);width:var(--dyte-space-8, 32px);border-radius:9999px;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-bg-opacity));font-size:12px}.unread-count.selector{position:unset;margin-left:var(--dyte-space-2, 8px)}.unread-count{position:absolute;right:var(--dyte-space-3, 12px);box-sizing:border-box;padding:var(--dyte-space-0\\.5, 2px);-webkit-user-select:none;-moz-user-select:none;user-select:none;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-bg-opacity));font-size:12px;color:rgb(var(--dyte-colors-text-on-brand-1000, var(--dyte-colors-text-1000, 255 255 255)));display:flex;height:var(--dyte-space-5, 20px);min-width:var(--dyte-space-5, 20px);align-items:center;justify-content:center;border-radius:9999px;z-index:1}dyte-avatar{height:var(--dyte-space-8, 32px);width:var(--dyte-space-8, 32px)}";

const DyteChatSelectorUi = class {
  constructor(hostRef) {
    (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.groupChanged = (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteChatGroupChanged", 7);
    this.onScopeClick = (scope) => {
      this.showParticipantsPanel = false;
      this.groupChanged.emit(scope);
    };
    this.selfUserId = undefined;
    this.selectedGroupId = undefined;
    this.unreadCounts = {};
    this.groups = [];
    this.iconPack = _default_icon_pack_a3227c63_js__WEBPACK_IMPORTED_MODULE_3__.d;
    this.t = (0,_index_29bc5d44_js__WEBPACK_IMPORTED_MODULE_4__.u)();
    this.showParticipantsPanel = false;
    this.query = '';
  }
  toggleParticipants() {
    this.showParticipantsPanel = !this.showParticipantsPanel;
  }
  getGroups() {
    return this.groups.filter((participant) => participant.name.toLowerCase().includes(this.query.toLowerCase()));
  }
  getName() {
    if (!this.selectedGroupId || this.selectedGroupId === 'everyone') {
      return this.t('everyone');
    }
    const group = this.groups.find((g) => g.userId === this.selectedGroupId);
    if (group) {
      return group.name;
    }
    return this.t('everyone');
  }
  render() {
    const unreadCountTotal = Object.keys(this.unreadCounts).reduce((total, key) => {
      return total + this.unreadCounts[key];
    }, 0);
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "chat-scope-selector" }, this.showParticipantsPanel && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "participants-container" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "search", part: "search" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.search, part: "search-icon" }), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("input", { type: "search", autocomplete: "off", placeholder: "Search", value: this.query, onInput: (e) => {
        this.query = e.target.value;
      }, part: "search-input" })), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul", { class: "scope-list scrollbar" }, this.query === '' && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("li", { class: "scope scope-special", onClick: () => this.onScopeClick('everyone') }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "everyone-icon" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.participants })), "Everyone", this.unreadCounts['everyone'] > 0 && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "unread-count", part: "unread-count" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, this.unreadCounts['everyone']))))), this.getGroups().map((group) => {
      const count = this.unreadCounts[(0,_chat_88f12485_js__WEBPACK_IMPORTED_MODULE_6__.g)([this.selfUserId, group.userId])];
      return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("li", { class: "scope", onClick: () => this.onScopeClick(group), key: group.userId }, group.name, count > 0 && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "unread-count", part: "unread-count" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, count)))));
    })))), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { onClick: () => this.toggleParticipants() }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, `${this.t('to')} ${this.getName()}`, '  ', unreadCountTotal > 0 && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "unread-count selector" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, unreadCountTotal)))), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.showParticipantsPanel ? this.iconPack.chevron_up : this.iconPack.chevron_down })))));
  }
};
DyteChatSelectorUi.style = dyteChatSelectorUiCss;

const dyteDialogManagerCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:block}";

const DyteDialogManager = class {
  constructor(hostRef) {
    (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.stateUpdate = (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteStateUpdate", 7);
    this.onDyteDialogClose = (state$1, value) => {
      _store_56e792d0_js__WEBPACK_IMPORTED_MODULE_10__.s[state$1] = value;
      this.stateUpdate.emit({ [state$1]: value });
    };
    this.leaveStage = async () => {
      var _a, _b, _c;
      if (this.meeting.meta.viewType === 'LIVESTREAM' &&
        ((_a = this.meeting.stage) === null || _a === void 0 ? void 0 : _a.status) === 'ACCEPTED_TO_JOIN_STAGE') {
        await ((_c = (_b = this.meeting) === null || _b === void 0 ? void 0 : _b.stage) === null || _c === void 0 ? void 0 : _c.leave());
      }
      if (this.meeting.meta.viewType === 'WEBINAR') {
        await this.meeting.self.leaveStage();
      }
      this.onDyteDialogClose('activeJoinStage', false);
    };
    this.joinStage = async () => {
      if (this.meeting.meta.viewType === 'LIVESTREAM') {
        await this.meeting.stage.join();
      }
      if (this.meeting.meta.viewType === 'WEBINAR') {
        await this.meeting.self.joinStage();
      }
      this.onDyteDialogClose('activeJoinStage', false);
    };
    this.meeting = undefined;
    this.config = _default_ui_config_e3c1cd21_js__WEBPACK_IMPORTED_MODULE_8__.d;
    this.states = undefined;
    this.size = undefined;
    this.iconPack = _default_icon_pack_a3227c63_js__WEBPACK_IMPORTED_MODULE_3__.d;
    this.t = (0,_index_29bc5d44_js__WEBPACK_IMPORTED_MODULE_4__.u)();
  }
  render() {
    var _a, _b, _c, _d;
    const defaults = {
      meeting: this.meeting,
      states: this.states || _store_56e792d0_js__WEBPACK_IMPORTED_MODULE_10__.s,
      config: this.config,
      size: this.size,
      iconPack: this.iconPack,
      t: this.t,
    };
    const states = this.states || _store_56e792d0_js__WEBPACK_IMPORTED_MODULE_10__.s;
    if ((states === null || states === void 0 ? void 0 : states.image) != null) {
      const image = states.image;
      const onImageClose = () => {
        this.stateUpdate.emit({ image: null });
        _store_56e792d0_js__WEBPACK_IMPORTED_MODULE_10__.s.image = null;
      };
      return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-dialog", { open: true, onDyteDialogClose: onImageClose, hideCloseButton: true, iconPack: this.iconPack, t: this.t }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_37247bff_js__WEBPACK_IMPORTED_MODULE_9__.R, { element: "dyte-image-viewer", defaults: defaults, props: { image, onClose: onImageClose } }))));
    }
    else if ((states === null || states === void 0 ? void 0 : states.activeSettings) === true) {
      return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-dialog", { open: true, onDyteDialogClose: () => this.onDyteDialogClose('activeSettings', false), iconPack: this.iconPack, t: this.t }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_37247bff_js__WEBPACK_IMPORTED_MODULE_9__.R, { element: "dyte-settings", defaults: defaults }))));
    }
    else if ((states === null || states === void 0 ? void 0 : states.activeLeaveConfirmation) === true) {
      return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-dialog", { open: true, onDyteDialogClose: () => this.onDyteDialogClose('activeLeaveConfirmation', false), iconPack: this.iconPack, t: this.t }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_37247bff_js__WEBPACK_IMPORTED_MODULE_9__.R, { element: "dyte-leave-meeting", defaults: defaults }))));
    }
    else if (((_a = states === null || states === void 0 ? void 0 : states.activePermissionsMessage) === null || _a === void 0 ? void 0 : _a.enabled) === true) {
      return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-dialog", { open: true, onDyteDialogClose: () => this.onDyteDialogClose('activePermissionsMessage', { enabled: false }), iconPack: this.iconPack, t: this.t }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_37247bff_js__WEBPACK_IMPORTED_MODULE_9__.R, { element: "dyte-permissions-message", defaults: defaults }))));
    }
    else if ((states === null || states === void 0 ? void 0 : states.activeRemoteAccessManager) === true) {
      return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-dialog", { open: true, onDyteDialogClose: () => this.onDyteDialogClose('activeRemoteAccessManager', false), iconPack: this.iconPack, t: this.t }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_37247bff_js__WEBPACK_IMPORTED_MODULE_9__.R, { element: "dyte-remote-access-manager", defaults: defaults }))));
    }
    else if (((_b = states === null || states === void 0 ? void 0 : states.activeBreakoutRoomsManager) === null || _b === void 0 ? void 0 : _b.active) === true) {
      return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-dialog", { open: true, onDyteDialogClose: () => this.onDyteDialogClose('activeBreakoutRoomsManager', {
          active: false,
          data: undefined,
        }), iconPack: this.iconPack, t: this.t }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_37247bff_js__WEBPACK_IMPORTED_MODULE_9__.R, { element: "dyte-breakout-rooms-manager", defaults: defaults, props: { mode: this.meeting.connectedMeetings.isActive ? 'view' : 'create' } }))));
    }
    else if (((_c = states === null || states === void 0 ? void 0 : states.activeConfirmationModal) === null || _c === void 0 ? void 0 : _c.active) === true) {
      return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-dialog", { open: true, onDyteDialogClose: () => this.onDyteDialogClose('activeConfirmationModal', false), iconPack: this.iconPack, t: this.t }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_37247bff_js__WEBPACK_IMPORTED_MODULE_9__.R, { element: "dyte-confirmation-modal", defaults: defaults }))));
    }
    else if (((_d = states === null || states === void 0 ? void 0 : states.activeOverlayModal) === null || _d === void 0 ? void 0 : _d.active) === true) {
      return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-overlay-modal", { meeting: this.meeting, states: this.states, iconPack: this.iconPack, t: this.t })));
    }
    else if (states === null || states === void 0 ? void 0 : states.activeBroadcastMessageModal) {
      return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-dialog", { open: true, onDyteDialogClose: () => this.onDyteDialogClose('activeBroadcastMessageModal', false), iconPack: this.iconPack, t: this.t }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_37247bff_js__WEBPACK_IMPORTED_MODULE_9__.R, { element: "dyte-broadcast-message-modal", defaults: defaults }))));
    }
    else if ((states === null || states === void 0 ? void 0 : states.activeJoinStage) === true) {
      const dataState = {
        title: this.t('stage.join_title'),
        label: {
          accept: this.t('stage.join_confirm'),
          reject: this.t('stage.join_cancel'),
        },
        description: this.t('stage.join_summary'),
      };
      return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-dialog", { open: true, onDyteDialogClose: this.leaveStage, iconPack: this.iconPack, t: this.t }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-join-stage", Object.assign({ dataConfig: dataState, onDyteJoinStage: this.joinStage, onDyteLeaveStage: this.leaveStage }, defaults)))));
    }
    else if ((states === null || states === void 0 ? void 0 : states.activeMuteAllConfirmation) === true) {
      return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-dialog", { open: true, onDyteDialogClose: () => {
          this.onDyteDialogClose('activeMuteAllConfirmation', false);
        }, iconPack: this.iconPack, t: this.t }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_37247bff_js__WEBPACK_IMPORTED_MODULE_9__.R, { element: "dyte-mute-all-confirmation", defaults: defaults }))));
    }
    else if (states === null || states === void 0 ? void 0 : states.activeChannelCreator) {
      return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-dialog", { open: true, onDyteDialogClose: () => {
          this.onDyteDialogClose('activeChannelCreator', false);
        }, iconPack: this.iconPack, t: this.t }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_37247bff_js__WEBPACK_IMPORTED_MODULE_9__.R, { element: "dyte-channel-creator", defaults: defaults }))));
    }
    return null;
  }
};
DyteDialogManager.style = dyteDialogManagerCss;

const DEFAULT_NOTIFICATION_DURATION = 2000;
const DEFAULT_NOTIFICATION_CONFIG = Object.freeze({
  notifications: {
    participant_joined: true,
    participant_left: true,
    participant_joined_waitlist: true,
    chat: true,
    polls: true,
    webinar: true,
    tab_sync: true,
  },
  notification_sounds: {
    participant_joined: true,
    participant_left: true,
    chat: true,
    polls: true,
    webinar: true,
    participant_joined_waitlist: true,
  },
  notification_duration: {
    participant_joined: 2100,
    participant_left: 2100,
    participant_joined_waitlist: 4000,
    chat: DEFAULT_NOTIFICATION_DURATION,
    polls: DEFAULT_NOTIFICATION_DURATION,
    webinar: DEFAULT_NOTIFICATION_DURATION,
    tab_sync: DEFAULT_NOTIFICATION_DURATION,
  },
  participant_joined_sound_notification_limit: 10,
  participant_chat_message_sound_notification_limit: 10,
});

const dyteNotificationsCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{position:absolute;top:var(--dyte-space-4, 16px);right:var(--dyte-space-4, 16px);bottom:var(--dyte-space-4, 16px);left:var(--dyte-space-4, 16px);top:auto;display:flex;flex-direction:column;pointer-events:none;z-index:100}dyte-notification{margin-top:var(--dyte-space-2, 8px)}";

function parseConfig(config) {
  const permissions = Object.assign({}, DEFAULT_NOTIFICATION_CONFIG);
  if (config == null)
    return permissions;
  Object.assign(permissions.notification_sounds, config.notification_sounds);
  Object.assign(permissions.notifications, config.notifications);
  Object.assign(permissions.notification_duration, config.notification_duration);
  permissions.participant_chat_message_sound_notification_limit =
    config.participant_chat_message_sound_notification_limit;
  permissions.participant_joined_sound_notification_limit =
    config.participant_joined_sound_notification_limit;
  return permissions;
}
function getEnabledSounds(sounds) {
  return Object.keys(sounds).filter((key) => sounds[key]);
}
const DyteNotifications = class {
  constructor(hostRef) {
    (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.permissions = DEFAULT_NOTIFICATION_CONFIG;
    this.enabledSounds = getEnabledSounds(DEFAULT_NOTIFICATION_CONFIG.notification_sounds);
    this.addStagePeersListeners = (meeting) => {
      meeting.participants.joined.addListener('participantJoined', this.participantJoinedListener);
      meeting.meta.addListener('disconnected', this.networkDisconnectedListener);
      meeting.meta.addListener('connected', this.networkConnectedListener);
      meeting.participants.joined.addListener('participantLeft', this.participantLeftListener);
    };
    this.removeStagePeersListeners = (meeting) => {
      meeting.participants.joined.removeListener('participantJoined', this.participantJoinedListener);
      meeting.meta.removeListener('disconnected', this.networkDisconnectedListener);
      meeting.meta.removeListener('connected', this.networkConnectedListener);
      meeting.participants.joined.removeListener('participantLeft', this.participantLeftListener);
    };
    this.onRemoteUpdate = ({ payload, type }) => {
      if (type === _dyte_client_faf935bd_js__WEBPACK_IMPORTED_MODULE_11__.R.INCOMING_REQUEST_ACCEPTED) {
        let remotePeer = this.meeting.participants.joined.get(payload.request.remotePeerId);
        this.add({
          id: `message-${Math.random().toString(36)}`,
          icon: this.iconPack.chat,
          message: `Granted remote control to ${remotePeer.name}`,
          duration: DEFAULT_NOTIFICATION_DURATION,
        });
      }
      if (type === _dyte_client_faf935bd_js__WEBPACK_IMPORTED_MODULE_11__.R.OUTGOING_REQUEST_ACCEPTED) {
        let hostPeer = this.meeting.participants.joined.get(payload.request.hostPeerId);
        this.add({
          id: `message-${Math.random().toString(36)}`,
          icon: this.iconPack.chat,
          message: `${hostPeer.name} has granted remote control.`,
          duration: DEFAULT_NOTIFICATION_DURATION,
        });
      }
      if (type === _dyte_client_faf935bd_js__WEBPACK_IMPORTED_MODULE_11__.R.REQUEST_RECEIVED) {
        let remotePeer = this.meeting.participants.joined.get(payload.request.remotePeerId);
        this.add({
          id: `message-${Math.random().toString(36)}`,
          icon: this.iconPack.chat,
          message: `${remotePeer.name} has requested for remote control.`,
          duration: DEFAULT_NOTIFICATION_DURATION,
        });
      }
      if (type === _dyte_client_faf935bd_js__WEBPACK_IMPORTED_MODULE_11__.R.INCOMING_REQUEST_ENDED ||
        type === _dyte_client_faf935bd_js__WEBPACK_IMPORTED_MODULE_11__.R.OUTGOING_REQUEST_ENDED) {
        this.add({
          id: `message-${Math.random().toString(36)}`,
          icon: this.iconPack.chat,
          message: `Existing remote control has been terminated.`,
          duration: DEFAULT_NOTIFICATION_DURATION,
        });
      }
      if (type === _dyte_client_faf935bd_js__WEBPACK_IMPORTED_MODULE_11__.R.REQUEST_SENT) {
        let hostPeer = this.meeting.participants.joined.get(payload.request.hostPeerId);
        this.add({
          id: `message-${Math.random().toString(36)}`,
          icon: this.iconPack.chat,
          message: `Sent remote control request to ${hostPeer.name}`,
          duration: DEFAULT_NOTIFICATION_DURATION,
        });
      }
    };
    this.onDyteNotification = (e) => {
      this.add(e.detail);
      const playSound = e.detail.playSound;
      if (playSound != undefined)
        this.audio.play(playSound);
    };
    this.onRecordingUpdate = (recordingState) => {
      if (recordingState === 'RECORDING') {
        this.add({
          id: 'recording-started',
          icon: this.iconPack.recording,
          message: this.t('recording.started'),
          duration: DEFAULT_NOTIFICATION_DURATION,
        });
      }
      else if (recordingState === 'STOPPING') {
        this.add({
          id: 'recording-stopped',
          icon: this.iconPack.stop_recording,
          message: this.t('recording.stopped'),
          duration: DEFAULT_NOTIFICATION_DURATION,
        });
      }
    };
    this.meeting = undefined;
    this.states = undefined;
    this.config = _default_ui_config_e3c1cd21_js__WEBPACK_IMPORTED_MODULE_8__.d;
    this.t = (0,_index_29bc5d44_js__WEBPACK_IMPORTED_MODULE_4__.u)();
    this.size = undefined;
    this.iconPack = _default_icon_pack_a3227c63_js__WEBPACK_IMPORTED_MODULE_3__.d;
    this.notifications = [];
  }
  connectedCallback() {
    if (typeof document !== 'undefined') {
      document === null || document === void 0 ? void 0 : document.addEventListener('dyteNotification', this.onDyteNotification);
    }
    this.meetingChanged(this.meeting);
    this.configChanged(this.config);
    this.statesChanged(this.states);
  }
  clearListeners(meeting) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    const isLivestream = meeting.meta.viewType === 'LIVESTREAM';
    if ((isLivestream && ((_a = meeting.stage) === null || _a === void 0 ? void 0 : _a.status) === 'ON_STAGE') || !isLivestream) {
      this.removeStagePeersListeners(meeting);
    }
    this.chatUpdateListener && ((_b = meeting.chat) === null || _b === void 0 ? void 0 : _b.removeListener('chatUpdate', this.chatUpdateListener));
    this.pollUpdateListener &&
      ((_c = meeting.polls) === null || _c === void 0 ? void 0 : _c.removeListener('pollsUpdate', this.pollUpdateListener));
    this.socketDisconnectedListener &&
      meeting.meta.removeListener('socketDisconnected', this.socketDisconnectedListener);
    this.socketReconnectFailureListener &&
      meeting.meta.removeListener('socketReconnectFailure', this.socketReconnectFailureListener);
    this.socketReconnectedListener &&
      meeting.meta.removeListener('socketReconnected', this.socketReconnectedListener);
    this.socketReconnectingListener &&
      meeting.meta.removeListener('socketReconnecting', this.socketReconnectingListener);
    this.socketFailureListener &&
      meeting.meta.removeListener('socketFailure', this.socketFailureListener);
    this.stageRequestAccepted &&
      ((_d = meeting.stage) === null || _d === void 0 ? void 0 : _d.removeListener('stageRequestApproved', this.stageRequestAccepted));
    this.stageRequestRejected &&
      ((_e = meeting.stage) === null || _e === void 0 ? void 0 : _e.removeListener('stageRequestRejected', this.stageRequestRejected));
    this.newStageRequests &&
      ((_f = meeting.stage) === null || _f === void 0 ? void 0 : _f.removeListener('newStageRequest', this.newStageRequests));
    this.stageStatusUpdateListener &&
      ((_g = meeting.stage) === null || _g === void 0 ? void 0 : _g.removeListener('stageStatusUpdate', this.stageStatusUpdateListener));
    (_h = meeting.remote) === null || _h === void 0 ? void 0 : _h.removeListener('remoteUpdate', this.onRemoteUpdate);
    (_j = meeting.recording) === null || _j === void 0 ? void 0 : _j.removeListener('recordingUpdate', this.onRecordingUpdate);
    clearTimeout(this.disconnectTimeout);
  }
  disconnectedCallback() {
    var _a;
    if (typeof document !== 'undefined') {
      document === null || document === void 0 ? void 0 : document.removeEventListener('dyteNotification', this.onDyteNotification);
    }
    if (this.meeting == null)
      return;
    this.clearListeners(this.meeting);
    this.waitlistedParticipantJoinedListener &&
      this.meeting.participants.waitlisted.removeListener('participantJoined', this.waitlistedParticipantJoinedListener);
    this.spotlightTabUpdateListener &&
      ((_a = this.meeting.spotlight) === null || _a === void 0 ? void 0 : _a.removeListener('activeTabUpdate', this.spotlightTabUpdateListener));
    this.peerRequestToJoinStateListener &&
      this.meeting.participants.joined.removeListener('peerRequestToJoinStage', this.peerRequestToJoinStateListener);
    this.peerAcceptedToJoinStageListener &&
      this.meeting.participants.joined.removeListener('peerAcceptedToJoinStage', this.peerAcceptedToJoinStageListener);
    this.peerRejectedToJoinStageListener &&
      this.meeting.participants.joined.removeListener('peerRejectedToJoinStage', this.peerRejectedToJoinStageListener);
  }
  meetingChanged(meeting, oldMeeting) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    clearTimeout(this.disconnectTimeout);
    if (oldMeeting !== undefined)
      this.clearListeners(oldMeeting);
    if (meeting == null)
      return;
    const isLivestream = meeting.meta.viewType === 'LIVESTREAM';
    this.audio = new _notification_8c0067e0_js__WEBPACK_IMPORTED_MODULE_12__.D();
    const { notifications, notification_duration, notification_sounds } = this.permissions;
    this.participantJoinedListener = (participant) => {
      if (notifications.participant_joined) {
        this.add({
          id: `${participant.id}-joined`,
          message: `${(0,_string_8aa800b0_js__WEBPACK_IMPORTED_MODULE_15__.f)(participant.name)} just joined`,
          image: participant.picture,
          duration: notification_duration.participant_joined,
        });
      }
      if (notification_sounds.participant_joined && this.canPlayParticipantJoinedSound()) {
        this.audio.play('joined');
      }
    };
    this.participantLeftListener = (participant) => {
      if (notifications.participant_left) {
        this.add({
          id: `${participant.id}-left`,
          message: `${(0,_string_8aa800b0_js__WEBPACK_IMPORTED_MODULE_15__.f)(participant.name)} left`,
          image: participant.picture,
          duration: notification_duration.participant_left,
        });
      }
      if (notification_sounds.participant_left && this.canPlayParticipantJoinedSound()) {
        this.audio.play('left');
      }
    };
    this.waitlistedParticipantJoinedListener = (participant) => {
      const id = `${participant.id}-joined-waitlist`;
      this.add({
        id,
        message: `${(0,_string_8aa800b0_js__WEBPACK_IMPORTED_MODULE_15__.f)(participant.name)} is requesting to join the meeting`,
        image: participant.picture,
        duration: notification_duration.participant_joined_waitlist,
        button: {
          text: 'Accept',
          variant: 'secondary',
          onClick: async () => {
            await this.meeting.participants.acceptWaitingRoomRequest(participant.id);
            this.remove(id);
          },
        },
      });
      if (notification_sounds.participant_joined_waitlist && this.canPlayParticipantJoinedSound()) {
        this.audio.play('message');
      }
    };
    this.chatUpdateListener = ({ message }) => {
      const parsedMessage = (0,_chat_88f12485_js__WEBPACK_IMPORTED_MODULE_6__.p)(message);
      if (parsedMessage != null) {
        if (parsedMessage.userId === meeting.self.userId) {
          return;
        }
        if (parsedMessage.type === 'text') {
          if (notifications.chat) {
            this.add({
              id: `message-${Math.random().toString(36)}`,
              icon: this.iconPack.chat,
              message: `${parsedMessage.displayName}: ${(0,_string_8aa800b0_js__WEBPACK_IMPORTED_MODULE_15__.s)(parsedMessage.message, 20)}`,
              duration: notification_duration.chat,
            });
          }
          if (notification_sounds.chat && this.canPlayChatSound()) {
            this.audio.play('message');
          }
        }
      }
    };
    this.pollUpdateListener = ({ polls, newPoll }) => {
      if (newPoll === false)
        return;
      if (notifications.polls &&
        this.meeting.self.userId !== polls[polls.length - 1].createdByUserId) {
        this.add({
          id: `poll-${Math.random().toString(36)}`,
          icon: this.iconPack.poll,
          message: `New poll created by ${polls[polls.length - 1].createdBy}`,
          duration: notification_duration.polls,
        });
      }
      if (notification_sounds.polls &&
        this.meeting.self.userId !== polls[polls.length - 1].createdByUserId &&
        this.canPlayChatSound()) {
        this.audio.play('message');
      }
    };
    this.deviceUpdateListener = ({ device, preview }) => {
      if (preview)
        return;
      if (device.kind === 'audiooutput') {
        this.audio.setDevice(device.deviceId);
        this.add({
          id: `speaker-switched-${device.deviceId}`,
          message: `Connected to ${device.label}`,
          icon: this.iconPack.speaker,
          duration: 5000,
        });
      }
      else if (device.kind === 'videoinput') {
        this.add({
          id: `camera-switched-${device.deviceId}`,
          message: `Connected to ${device.label}`,
          icon: this.iconPack.speaker,
          duration: 5000,
        });
      }
      else {
        this.add({
          id: `mic-switched-${device.deviceId}`,
          message: `Connected to ${device.label}`,
          icon: this.iconPack.mic_on,
          duration: 5000,
        });
      }
    };
    this.networkDisconnectedListener = () => {
      this.remove('network');
      let reconnectDuration;
      reconnectDuration = 20000;
      this.add({
        id: 'network',
        icon: this.iconPack.disconnected,
        message: this.t('network.reconnecting'),
        duration: reconnectDuration,
      });
      this.disconnectTimeout = setTimeout(() => {
        this.add({
          id: 'network-lost',
          icon: this.iconPack.disconnected,
          message: this.t('network.delay'),
          button: {
            text: this.t('end'),
            variant: 'danger',
            onClick: () => { var _a; return (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.leaveRoom(); },
          },
        });
      }, reconnectDuration);
    };
    this.networkConnectedListener = () => {
      this.remove('network');
      let reconnectDuration;
      this.remove('network-lost');
      reconnectDuration = 3000;
      this.add({
        id: `network`,
        icon: this.iconPack.wifi,
        message: this.t('network.restored'),
        duration: reconnectDuration,
      });
      clearTimeout(this.disconnectTimeout);
    };
    this.socketUpdateListener = ({ event, attempt }) => {
      this.remove('socket');
      if (event === 'reconnected') {
        this.remove('socketReconnecting');
        this.add({
          id: `socket`,
          icon: this.iconPack.wifi,
          message: this.t('network.restored'),
          duration: 3000,
        });
      }
      else if (event === 'disconnected') {
        this.add({
          id: 'socket',
          icon: this.iconPack.disconnected,
          message: this.t('network.lost'),
          duration: 3000,
        });
      }
      else if (event === 'reconnecting') {
        this.add({
          id: 'socketReconnecting',
          icon: this.iconPack.disconnected,
          message: this.t('network.lost_extended'),
        });
      }
      else if (event === 'reconnectFailure') {
        if (attempt > 5) {
          this.remove('socketReconnecting');
          this.add({
            id: 'socketReconnecting',
            icon: this.iconPack.disconnected,
            message: this.t('network.delay_extended'),
            button: {
              text: this.t('end'),
              variant: 'danger',
              onClick: () => { var _a; return (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.leaveRoom(); },
            },
          });
        }
      }
      else if (event === 'failed') {
        this.remove('socketReconnecting');
        this.add({
          id: 'socketFailed',
          icon: this.iconPack.disconnected,
          message: this.t('network.disconnected'),
        });
        this.add({
          id: 'leaveMeeting',
          icon: this.iconPack.warning,
          message: this.t('network.leaving'),
        });
        setTimeout(() => {
          var _a;
          (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.leaveRoom('disconnected');
        }, 10000);
      }
    };
    this.spotlightTabUpdateListener = (spotlightTab) => {
      if (!notifications.tab_sync)
        return;
      switch (spotlightTab.type) {
        case 'plugin':
          const spotlightPlugin = meeting.plugins.active
            .toArray()
            .find((plugin) => plugin.id == spotlightTab.id);
          if (spotlightPlugin != undefined) {
            this.add({
              id: 'spotlight',
              message: `Plugin switched to ${spotlightPlugin.name}`,
              duration: notification_duration.participant_joined,
            });
          }
          break;
        case 'screenshare':
          const screenShareParticipant = meeting.participants.joined
            .toArray()
            .filter((participant) => participant.screenShareEnabled)
            .find((participant) => participant.id == spotlightTab.id);
          if (screenShareParticipant != undefined) {
            this.add({
              id: 'spotlight',
              message: `Now watching ${screenShareParticipant.name}'s screen`,
              duration: notification_duration.webinar,
            });
          }
          break;
      }
    };
    this.peerRequestToJoinStateListener = ({ id }) => {
      if (!notifications.webinar)
        return;
      const participant = this.meeting.participants.joined.get(id);
      if (participant !== undefined) {
        this.add({
          id: `webinar-request-${id}`,
          message: `${participant.name} is requesting to be on stage`,
          duration: notification_duration.webinar,
          button: {
            text: 'Accept',
            variant: 'primary',
            onClick: async () => {
              await this.meeting.participants.acceptAllRequestToJoinStageRequests([
                {
                  id,
                  requestToJoinType: 'REQUEST_TO_PRESENT',
                },
              ]);
              this.remove(`webinar-request-${id}`);
            },
          },
        });
        if (notification_sounds.webinar) {
          this.audio.play('joined');
        }
      }
    };
    this.peerAcceptedToJoinStageListener = (request) => {
      if (!notifications.webinar)
        return;
      const participant = this.meeting.participants.joined.get(request.id);
      if (participant !== undefined) {
        this.add({
          id: `webinar-accepted-${request.id}`,
          message: `Approved ${participant.name}'s request to join stage.`,
          duration: notification_duration.webinar,
        });
        if (notification_sounds.webinar) {
          this.audio.play('joined');
        }
      }
    };
    this.peerRejectedToJoinStageListener = (request) => {
      if (!notifications.webinar)
        return;
      const participant = this.meeting.participants.joined.get(request.id);
      if (participant !== undefined) {
        this.add({
          id: `webinar-rejected-${request.id}`,
          message: `Rejected ${participant.name}'s request to join stage.`,
          duration: notification_duration.webinar,
        });
      }
    };
    this.stageRequestAccepted = () => {
      this.add({
        id: 'stage-request-accepted',
        message: 'Request to join accepted',
        duration: 3000,
      });
    };
    this.stageRequestRejected = () => {
      this.add({
        id: 'stage-request-rejected',
        message: 'Request to join rejected',
        duration: 3000,
      });
    };
    this.newStageRequests = ({ count }) => {
      this.add({
        id: 'new-stage-request',
        message: `You have ${count} pending request${count === 1 ? '' : 's'}`,
        duration: 3000,
      });
    };
    this.stageStatusUpdateListener = (status) => {
      if (status === 'ON_STAGE')
        this.addStagePeersListeners(meeting);
      else
        this.removeStagePeersListeners(meeting);
    };
    this.socketReconnectedListener = () => this.socketUpdateListener({ event: 'reconnected' });
    this.socketDisconnectedListener = () => this.socketUpdateListener({ event: 'disconnected' });
    this.socketReconnectingListener = () => this.socketUpdateListener({ event: 'reconnecting' });
    this.socketFailureListener = () => this.socketUpdateListener({ event: 'failed' });
    this.socketReconnectFailureListener = ({ attempt }) => this.socketUpdateListener({
      event: 'reconnectFailure',
      attempt,
    });
    !(0,_livestream_8c64d895_js__WEBPACK_IMPORTED_MODULE_2__.s)(meeting) && ((_a = meeting.chat) === null || _a === void 0 ? void 0 : _a.addListener('chatUpdate', this.chatUpdateListener));
    if (meeting.self.config.viewType === 'CHAT') {
      return;
    }
    // all non Chat viewtype code from here
    const currentDevices = meeting.self.getCurrentDevices();
    if (currentDevices.speaker != null) {
      this.audio.setDevice(currentDevices.speaker.deviceId);
    }
    if (isLivestream)
      (_b = meeting.stage) === null || _b === void 0 ? void 0 : _b.on('stageStatusUpdate', this.stageStatusUpdateListener);
    else
      this.addStagePeersListeners(meeting);
    meeting.participants.joined.addListener('peerRequestToJoinStage', this.peerRequestToJoinStateListener);
    meeting.participants.joined.addListener('peerAcceptedToJoinStage', this.peerAcceptedToJoinStageListener);
    meeting.participants.joined.addListener('peerRejectedToJoinStage', this.peerRejectedToJoinStageListener);
    if (this.canAcceptWaitingRequests()) {
      meeting.participants.waitlisted.addListener('participantJoined', this.waitlistedParticipantJoinedListener);
    }
    (_c = meeting.polls) === null || _c === void 0 ? void 0 : _c.addListener('pollsUpdate', this.pollUpdateListener);
    meeting.self.addListener('deviceUpdate', this.deviceUpdateListener);
    meeting.meta.addListener('socketReconnected', this.socketReconnectedListener);
    meeting.meta.addListener('socketDisconnected', this.socketDisconnectedListener);
    meeting.meta.addListener('socketReconnecting', this.socketReconnectingListener);
    meeting.meta.addListener('socketFailure', this.socketFailureListener);
    meeting.meta.addListener('socketReconnectFailure', this.socketReconnectFailureListener);
    (_d = meeting.remote) === null || _d === void 0 ? void 0 : _d.addListener('remoteUpdate', this.onRemoteUpdate);
    (_e = meeting.spotlight) === null || _e === void 0 ? void 0 : _e.addListener('activeTabUpdate', this.spotlightTabUpdateListener);
    (_f = meeting.recording) === null || _f === void 0 ? void 0 : _f.addListener('recordingUpdate', this.onRecordingUpdate);
    (_g = meeting.stage) === null || _g === void 0 ? void 0 : _g.addListener('stageRequestApproved', this.stageRequestAccepted);
    (_h = meeting.stage) === null || _h === void 0 ? void 0 : _h.addListener('stageRequestRejected', this.stageRequestRejected);
    if (meeting.self.permissions.acceptPresentRequests)
      (_j = meeting.stage) === null || _j === void 0 ? void 0 : _j.addListener('newStageRequest', this.newStageRequests);
  }
  configChanged(config) {
    if (config != null) {
      if ((config === null || config === void 0 ? void 0 : config.config) != null) {
        this.permissions = parseConfig(config.config);
        this.enabledSounds = getEnabledSounds(this.permissions.notification_sounds);
      }
    }
  }
  statesChanged(states) {
    var _a;
    if (states != null) {
      const notificationSoundsEnabled = !((_a = states === null || states === void 0 ? void 0 : states.prefs) === null || _a === void 0 ? void 0 : _a.muteNotificationSounds);
      // toggle only the notification sounds values which were enabled in the first place
      for (const permission of this.enabledSounds) {
        if (permission in this.permissions.notification_sounds) {
          this.permissions.notification_sounds[permission] = notificationSoundsEnabled;
        }
      }
    }
  }
  apiErrorListener({ detail }) {
    const { trace, message } = detail;
    this.add({
      id: trace,
      message,
      duration: DEFAULT_NOTIFICATION_DURATION,
      icon: this.iconPack.warning,
    });
  }
  add(notification) {
    // show notifications only if tab is in focus and a maximum of 5 at a time
    if (document.visibilityState === 'visible' && this.notifications.length < 5) {
      // adds new notification to start of array so they appear at the bottom
      this.notifications = [...this.notifications, notification];
    }
  }
  remove(id) {
    this.notifications = this.notifications.filter((notification) => notification.id !== id);
  }
  handleDismiss(e) {
    e.stopPropagation();
    const id = e.detail;
    const el = this.host.shadowRoot.querySelector(`[data-id="${id}"]`);
    // exit animation
    el === null || el === void 0 ? void 0 : el.classList.add('exit');
    setTimeout(() => {
      (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.w)(() => {
        this.remove(id);
      });
    }, 400);
  }
  canPlayParticipantJoinedSound() {
    return (this.permissions.participant_joined_sound_notification_limit == undefined ||
      this.permissions.participant_joined_sound_notification_limit <= 0 ||
      this.meeting.participants.count <=
        this.permissions.participant_joined_sound_notification_limit);
  }
  canPlayChatSound() {
    return (this.permissions.participant_chat_message_sound_notification_limit == undefined ||
      this.permissions.participant_chat_message_sound_notification_limit <= 0 ||
      this.meeting.participants.count <=
        this.permissions.participant_chat_message_sound_notification_limit);
  }
  canAcceptWaitingRequests() {
    return (this.permissions.notifications.participant_joined_waitlist &&
      this.meeting.self.permissions.acceptWaitingRequests);
  }
  render() {
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.H, null, this.notifications.map((notification) => ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-notification", { size: this.size, key: notification.id, "data-id": notification.id, notification: notification, onDyteNotificationDismiss: (e) => this.handleDismiss(e), iconPack: this.iconPack, t: this.t })))));
  }
  get host() { return (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
  static get watchers() { return {
    "meeting": ["meetingChanged"],
    "config": ["configChanged"],
    "states": ["statesChanged"]
  }; }
};
DyteNotifications.style = dyteNotificationsCss;




/***/ }),

/***/ 43367:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ RemoteUpdateType)
/* harmony export */ });
var RemoteUpdateType;
(function (RemoteUpdateType) {
  RemoteUpdateType["REQUEST_RECEIVED"] = "REQUEST_RECEIVED";
  RemoteUpdateType["REQUEST_SENT"] = "REQUEST_SENT";
  RemoteUpdateType["INCOMING_REQUEST_ACCEPTED"] = "INCOMING_REQUEST_ACCEPTED";
  RemoteUpdateType["OUTGOING_REQUEST_ACCEPTED"] = "OUTGOING_REQUEST_ACCEPTED";
  RemoteUpdateType["INCOMING_REQUEST_ENDED"] = "INCOMING_REQUEST_ENDED";
  RemoteUpdateType["OUTGOING_REQUEST_ENDED"] = "OUTGOING_REQUEST_ENDED";
})(RemoteUpdateType || (RemoteUpdateType = {}));




/***/ }),

/***/ 85371:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ Render)
/* harmony export */ });
/* harmony import */ var _index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65733);


/**
 * Computes selectors and returns them based on their priority.
 */
const computeSelectors = ({ element, size, states = {}, config = {}, }) => {
  let selectors = [];
  const data = config === null || config === void 0 ? void 0 : config.root[element];
  const add = (selector) => {
    selectors.push(selector);
    if (typeof size === 'string') {
      selectors.push(`${selector}.${size}`);
    }
  };
  add(element);
  if (typeof data === 'object' && !Array.isArray(data) && data !== null) {
    // check if the data variable is an object, strictly and not an array or just null
    const { state, states: elementStates } = data;
    let selector = element;
    let activeStates = [];
    if (Array.isArray(elementStates)) {
      activeStates = elementStates.filter((state) => states[state]);
      activeStates.sort();
      for (const state of activeStates) {
        add(`${selector}.${state}`);
      }
      if (activeStates.length > 1) {
        const booleanStateSelector = [selector, ...activeStates].join('.');
        add(booleanStateSelector);
      }
    }
    if (typeof state === 'string') {
      // dyte-meeting[meeting=joined]
      const keyValueSelector = `${element}[${state}=${states[state]}]`;
      add(keyValueSelector);
      for (const state of activeStates) {
        add(`${keyValueSelector}.${state}`);
      }
      if (activeStates.length > 1) {
        const withBooleanStateSelector = [keyValueSelector, ...activeStates].join('.');
        add(withBooleanStateSelector);
      }
    }
  }
  return selectors;
};
/**
 * Returns the computed styles - styles obtained from combining styles from all computed selectors
 * on the basis of their priorities.
 */
const getComputedStyles = ({ selectors, styles }) => {
  if (!Array.isArray(selectors) || styles == null)
    return {};
  const computedStyles = {};
  for (const selector of selectors) {
    const style = styles[selector];
    if (style != null) {
      Object.assign(computedStyles, style);
    }
  }
  return computedStyles;
};
/**
 * Returns the computed children which are to be rendered inside an element
 */
const getComputedChildren = ({ selectors, root }) => {
  if (!root || !Array.isArray(selectors))
    return [];
  let children = [];
  for (const selector of selectors) {
    const el = root[selector];
    if (Array.isArray(el)) {
      children = [...el];
    }
    else if (el) {
      if (el.children) {
        children = [...el.children];
      }
      if (Array.isArray(el.remove)) {
        for (const toRemove of el.remove) {
          children = children.filter((child) => {
            if (typeof child === 'string') {
              return child !== toRemove;
            }
            else if (Array.isArray(child)) {
              return child[0] !== toRemove;
            }
            return true;
          });
        }
      }
      if (el.addBefore) {
        for (const [beforeEl, toAdd] of Object.entries(el.addBefore)) {
          const idx = children.findIndex((child) => {
            if (typeof child === 'string') {
              return child === beforeEl;
            }
            else if (Array.isArray(child)) {
              return child[0] === beforeEl;
            }
            return false;
          });
          if (idx >= 0) {
            children.splice(idx, 0, ...toAdd);
          }
        }
      }
      if (Array.isArray(el.add)) {
        children = children.concat(el.add);
      }
      if (Array.isArray(el.prepend)) {
        children = el.prepend.concat(children);
      }
    }
  }
  return children;
};

/**
 * Renders the children of an element.
 */
const RenderChildren = ({ elements, defaults, props = {}, deepProps = false, elementProps = {}, }) => {
  if (!Array.isArray(elements) || elements.length === 0)
    return null;
  return elements.map((element) => {
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(Render, { element: element, defaults: defaults, props: props, childProps: deepProps && props, elementProps: elementProps }));
  });
};
/**
 * Renders an element from UI Config
 */
const Render = ({ element, defaults, childProps = {}, props = {}, onlyChildren = false, asHost = false, deepProps = false, elementProps = {}, }, children) => {
  var _a;
  const { config, size, states } = defaults;
  let Tag, configProps = {};
  if (Array.isArray(element)) {
    // get props if element is passed in array form:
    // ['dyte-participant-tile', { variant: 'gradient' }]
    [Tag, configProps] = element;
  }
  else {
    Tag = element;
  }
  const elemData = (_a = config === null || config === void 0 ? void 0 : config.root) === null || _a === void 0 ? void 0 : _a[Tag];
  if (elemData != null && 'props' in elemData) {
    props = Object.assign(Object.assign({}, elemData['props']), props);
  }
  props = Object.assign(Object.assign({}, props), configProps);
  if (Tag in elementProps) {
    props = Object.assign(Object.assign({}, props), elementProps[Tag]);
  }
  const selectors = computeSelectors({ element: Tag, size, states, config });
  const computedChildren = getComputedChildren({ selectors, root: config.root });
  if (onlyChildren) {
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(RenderChildren, { elements: computedChildren, defaults: defaults, props: childProps, deepProps: deepProps, elementProps: elementProps }));
  }
  const styles = getComputedStyles({ selectors, styles: config.styles });
  if (asHost) {
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.H, Object.assign({}, defaults, { style: styles }, props),
      (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(RenderChildren, { elements: computedChildren, defaults: defaults, props: childProps, deepProps: deepProps, elementProps: elementProps }),
      children));
  }
  if (['dyte-header', 'dyte-controlbar'].includes(Tag)) {
    props['disableRender'] = true;
  }
  if (Tag.startsWith('dyte-')) {
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(Tag, Object.assign({}, defaults, { style: styles }, props),
      (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(RenderChildren, { elements: computedChildren, defaults: defaults, props: childProps, deepProps: deepProps, elementProps: elementProps }),
      children));
  }
  else {
    const [HTMLTag, id] = Tag.split('#');
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(HTMLTag, { id: id, style: styles },
      (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(RenderChildren, { elements: computedChildren, defaults: defaults, props: childProps, deepProps: deepProps, elementProps: elementProps }),
      children));
  }
};




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