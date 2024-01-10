"use strict";
exports.id = 4667;
exports.ids = [4667];
exports.modules = {

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

/***/ 4667:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_chat: () => (/* binding */ DyteChat)
/* harmony export */ });
/* harmony import */ var _index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65733);
/* harmony import */ var _default_icon_pack_a3227c63_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96633);
/* harmony import */ var _index_29bc5d44_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20336);
/* harmony import */ var _chat_88f12485_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57037);
/* harmony import */ var _user_prefs_f52d234f_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85114);
/* harmony import */ var _flags_33c46e09_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(27637);
/* harmony import */ var _TextMessage_5d3b1de6_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(46871);
/* harmony import */ var _default_ui_config_e3c1cd21_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(37692);
/* harmony import */ var _pipStore_5d9dd8bf_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(21237);
/* harmony import */ var _livestream_8c64d895_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(24555);
/* harmony import */ var _store_56e792d0_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(46503);
/* harmony import */ var _graceful_storage_33bc316d_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(60804);













const dyteChatCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:flex;height:100%;width:100%;flex-direction:column;font-size:14px;color:rgb(var(--dyte-colors-text-1000, 255 255 255))}h3{margin:var(--dyte-space-0, 0px);display:flex;height:var(--dyte-space-12, 48px);align-items:center;justify-content:center;font-size:16px;font-weight:400;color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88));text-align:center}#dropzone{position:absolute;top:var(--dyte-space-0, 0px);right:var(--dyte-space-0, 0px);bottom:var(--dyte-space-0, 0px);left:var(--dyte-space-0, 0px);z-index:10;display:none;flex-direction:column;align-items:center;justify-content:center;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}#dropzone.active{display:flex;-webkit-animation:0.2s slide-up ease-in;animation:0.2s slide-up ease-in}dyte-chat-messages-ui,dyte-chat-messages-ui-paginated{flex:1 0 0}.chat-container{display:flex;height:100%;width:100%;flex-direction:row}.chat{display:flex;flex:1 1 0%;flex-direction:column}.banner{height:100%;width:100%;display:flex;flex-direction:column;align-items:center;justify-content:center}.banner .welcome-new-channel{width:var(--dyte-space-48, 192px)}.banner .create-channel-illustration{height:var(--dyte-space-40, 160px);width:var(--dyte-space-40, 160px)}.quoted-message-container{display:flex;justify-content:space-between;padding-left:var(--dyte-space-2, 8px);padding-right:var(--dyte-space-2, 8px);padding-top:var(--dyte-space-2, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255))}.quoted-message-container .quoted-message{flex:1 1 0%;padding:var(--dyte-space-2, 8px);border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity))}.quoted-message-container dyte-icon.dismiss{margin-left:auto;height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px);padding:var(--dyte-space-2, 8px);border-radius:var(--dyte-border-radius-md, 8px);color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52))}.quoted-message-container dyte-icon.dismiss:hover{cursor:pointer;color:rgb(var(--dyte-colors-text-1000, 255 255 255))}.quoted-message-container dyte-icon.dismiss{transition-property:color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.channel-selector-header{height:var(--dyte-space-8, 32px);padding:var(--dyte-space-4, 16px);display:flex;justify-content:space-between}.channel-selector-header .channel-create-btn{width:var(--dyte-space-8, 32px);justify-content:center}.channel-selector-header .channel-create-btn:hover{--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-text-opacity))}";

const DyteChat = class {
  constructor(hostRef) {
    (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.stateUpdate = (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteStateUpdate", 7);
    this.channelMap = new Map();
    this.disconnectMeeting = (meeting) => {
      var _a, _b, _c, _d;
      if (this.isPrivateChatSupported()) {
        meeting === null || meeting === void 0 ? void 0 : meeting.participants.joined.removeListener('participantsUpdate', this.onParticipantUpdate);
        meeting === null || meeting === void 0 ? void 0 : meeting.participants.joined.removeListener('participantLeft', this.onParticipantUpdate);
      }
      (_a = meeting === null || meeting === void 0 ? void 0 : meeting.chat) === null || _a === void 0 ? void 0 : _a.removeListener('chatUpdate', this.chatUpdateListener);
      (_b = meeting === null || meeting === void 0 ? void 0 : meeting.chat) === null || _b === void 0 ? void 0 : _b.removeListener('channelCreate', this.onChannelCreateOrUpdate);
      (_c = meeting === null || meeting === void 0 ? void 0 : meeting.chat) === null || _c === void 0 ? void 0 : _c.removeListener('channelUpdate', this.onChannelCreateOrUpdate);
      (_d = meeting === null || meeting === void 0 ? void 0 : meeting.chat) === null || _d === void 0 ? void 0 : _d.removeListener('channelMessageUpdate', this.onChannelCreateOrUpdate);
    };
    this.onParticipantUpdate = () => {
      this.participants = this.meeting.participants.joined
        .toArray()
        .filter((p) => this.privatePresetFilter.length === 0 || this.privatePresetFilter.includes(p.presetName));
      // if selected participant leaves, reset state to everyone
      if (this.selectedParticipant && !this.participants.includes(this.selectedParticipant)) {
        this.selectedParticipant = null;
        this.chatRecipientId = this.selectedGroup = 'everyone';
      }
    };
    this.usePaginatedChat = () => (0,_flags_33c46e09_js__WEBPACK_IMPORTED_MODULE_5__.u)(this.meeting);
    this.updateUnreadCountGroups = (obj) => {
      this.unreadCountGroups = Object.assign(Object.assign({}, this.unreadCountGroups), obj);
    };
    this.isPrivateChatSupported = () => {
      var _a, _b, _c;
      return (!this.isChatViewType &&
        this.canPrivateMessage &&
        !this.disablePrivateChat &&
        ((_c = (_b = (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.__internals__) === null || _b === void 0 ? void 0 : _b.features) === null || _c === void 0 ? void 0 : _c.getFeatureValue('chat_socket_server')) ===
          'socket-service');
    };
    this.updateRecipients = (event) => {
      if (typeof event.detail === 'string') {
        this.chatRecipientId = 'everyone';
        this.selectedParticipant = null;
      }
      else {
        const { userId } = event.detail;
        this.chatRecipientId = userId;
        this.selectedParticipant = this.participants.find((p) => p.userId === userId);
      }
      if (this.chatRecipientId !== 'everyone') {
        const allParticipants = [this.chatRecipientId, this.meeting.self.userId];
        const targetKey = (0,_chat_88f12485_js__WEBPACK_IMPORTED_MODULE_3__.g)(allParticipants);
        this.selectedGroup = targetKey;
      }
      else {
        this.selectedGroup = 'everyone';
      }
      this.updateUnreadCountGroups({ [this.selectedGroup]: 0 });
    };
    this.isTextMessagingAllowed = () => {
      if (this.chatRecipientId === 'everyone') {
        // public chat
        return this.canSend && this.canSendTextMessage;
      }
      // private chat
      return this.canPrivateMessage && this.canSendPrivateTexts;
    };
    this.isFileMessagingAllowed = () => {
      if (this.chatRecipientId === 'everyone') {
        // public chat
        return this.canSend && this.canSendFiles;
      }
      // private chat
      return this.canPrivateMessage && this.canSendPrivateFiles;
    };
    this.onChannelChanged = (e) => {
      if (e.detail.includes(_chat_88f12485_js__WEBPACK_IMPORTED_MODULE_3__.T)) {
        this.createDMChannel(e.detail.replace(_chat_88f12485_js__WEBPACK_IMPORTED_MODULE_3__.T, ''));
      }
      else {
        this.selectedChannelId = e.detail;
      }
    };
    this.createDMChannel = async (memberId) => {
      this.creatingChannel = true;
      const newChannel = await this.meeting.chat.createChannel('Direct Message', [memberId], {
        visibility: 'private',
        isDirectMessage: true,
      });
      this.creatingChannel = false;
      this.selectedChannelId = newChannel.id;
    };
    this.onChannelCreateOrUpdate = (channel) => {
      if (channel) {
        this.channelMap.set(channel.id, channel);
      }
      else {
        this.meeting.chat.channels.forEach((chan) => this.channelMap.set(chan.id, chan));
      }
      const channels = Array.from(this.channelMap.values())
        .filter((channel) => !(0,_chat_88f12485_js__WEBPACK_IMPORTED_MODULE_3__.i)(channel))
        .sort((a, b) => (0,_chat_88f12485_js__WEBPACK_IMPORTED_MODULE_3__.d)(a.displayName, b.displayName));
      const membersWithChannel = Array.from(this.channelMap.values())
        .filter(_chat_88f12485_js__WEBPACK_IMPORTED_MODULE_3__.i)
        .map((channel) => {
        return Object.assign(Object.assign({}, channel), { displayName: this.getMemberDisplayName(channel) });
      });
      const membersWithoutChannel = this.meeting.participants.all
        .filter((member) => {
        if (member.id === this.meeting.self.userId)
          return false;
        const matcher = (0,_chat_88f12485_js__WEBPACK_IMPORTED_MODULE_3__.e)([this.meeting.self.userId, member.id]);
        return membersWithChannel.every((channel) => (0,_chat_88f12485_js__WEBPACK_IMPORTED_MODULE_3__.e)(channel.memberIds) !== matcher);
      })
        .map((member) => {
        return {
          id: `${_chat_88f12485_js__WEBPACK_IMPORTED_MODULE_3__.T}${member.id}`,
          displayName: member.name,
          displayPictureUrl: member.picture,
          isDirectMessage: true,
          unreadCount: 0,
        };
      });
      const dms = [...membersWithChannel, ...membersWithoutChannel].sort((a, b) => (0,_chat_88f12485_js__WEBPACK_IMPORTED_MODULE_3__.d)(a.displayName, b.displayName));
      this.channels = [...channels, ...dms];
    };
    this.getMemberDisplayName = (channel) => {
      var _a;
      let id;
      if (channel.memberIds.length === 1) {
        // channel with self
        id = channel.memberIds[0];
      }
      else {
        id =
          channel.memberIds[0] === this.meeting.self.userId
            ? channel.memberIds[1]
            : channel.memberIds[0];
      }
      const member = this.meeting.participants.all.find((member) => member.id === id);
      return (_a = member === null || member === void 0 ? void 0 : member.name) !== null && _a !== void 0 ? _a : id;
    };
    this.onNewMessageHandler = async (e) => {
      const message = e.detail;
      if (this.isChatViewType) {
        await this.meeting.chat.sendMessageToChannel(message, this.selectedChannelId, this.replyMessage
          ? {
            replyTo: this.replyMessage,
          }
          : {});
        this.replyMessage = null;
      }
      else {
        this.meeting.chat.sendMessage(message, this.getRecipientPeerIds());
      }
    };
    this.onEditMessageHandler = async (e) => {
      var _a, _b;
      await ((_b = (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.chat) === null || _b === void 0 ? void 0 : _b.editTextMessage(e.detail.id, e.detail.message, e.detail.channelId));
      this.editingMessage = null;
    };
    this.onSearchHandler = async (e) => {
      this.searchQuery = e.detail;
    };
    this.onSearchDismissed = () => {
      this.searchQuery = '';
    };
    this.onChannelCreateClicked = () => {
      this.stateUpdate.emit({ activeChannelCreator: true });
      _store_56e792d0_js__WEBPACK_IMPORTED_MODULE_10__.s.activeChannelCreator = true;
    };
    this.meeting = undefined;
    this.config = _default_ui_config_e3c1cd21_js__WEBPACK_IMPORTED_MODULE_7__.d;
    this.size = undefined;
    this.iconPack = _default_icon_pack_a3227c63_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.t = (0,_index_29bc5d44_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    this.disablePrivateChat = false;
    this.privatePresetFilter = [];
    this.unreadCountGroups = {};
    this.chatGroups = { everyone: [] };
    this.selectedGroup = 'everyone';
    this.now = new Date();
    this.dropzoneActivated = false;
    this.showLatestMessageButton = false;
    this.canSend = false;
    this.canSendTextMessage = false;
    this.canSendFiles = false;
    this.canPrivateMessage = false;
    this.canSendPrivateTexts = false;
    this.canSendPrivateFiles = false;
    this.emojiPickerEnabled = false;
    this.chatRecipientId = 'everyone';
    this.participants = [];
    this.selectedParticipant = undefined;
    this.channels = [];
    this.selectedChannelId = undefined;
    this.editingMessage = null;
    this.replyMessage = null;
    this.searchQuery = '';
    this.creatingChannel = false;
  }
  connectedCallback() {
    if (!this.meeting)
      return;
    this.meetingChanged(this.meeting);
    if (this.meeting && !this.meeting.chat) {
      return;
    }
    if (this.isFileMessagingAllowed()) {
      this.host.addEventListener('dragover', (e) => {
        e.preventDefault();
        this.dropzoneActivated = true;
      });
      this.host.addEventListener('dragleave', () => {
        this.dropzoneActivated = false;
      });
      this.host.addEventListener('drop', (e) => {
        e.preventDefault();
        this.dropzoneActivated = false;
        (0,_chat_88f12485_js__WEBPACK_IMPORTED_MODULE_3__.h)(e.dataTransfer.items, (type, file) => {
          var _a, _b, _c, _d;
          switch (type) {
            case 'image':
              if (this.isFileMessagingAllowed()) {
                (_b = (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.chat) === null || _b === void 0 ? void 0 : _b.sendImageMessage(file, this.getRecipientPeerIds());
              }
              break;
            case 'file':
              if (this.isFileMessagingAllowed()) {
                (_d = (_c = this.meeting) === null || _c === void 0 ? void 0 : _c.chat) === null || _d === void 0 ? void 0 : _d.sendFileMessage(file, this.getRecipientPeerIds());
              }
              break;
          }
        });
      });
    }
  }
  onEditMessageInit(event) {
    if (event.detail.flags.isReply) {
      this.replyMessage = event.detail.payload;
    }
    else if (event.detail.flags.isEdit) {
      this.editingMessage = event.detail.payload;
    }
  }
  disconnectedCallback() {
    this.disconnectMeeting(this.meeting);
  }
  meetingChanged(meeting, oldMeeting) {
    var _a, _b, _c, _d, _e, _f;
    if (oldMeeting != undefined)
      this.disconnectMeeting(oldMeeting);
    if (meeting && !meeting.chat)
      return;
    if (meeting != null) {
      this.canSend = meeting.self.permissions.chatPublic.canSend;
      this.canSendTextMessage = meeting.self.permissions.chatPublic.text;
      this.canSendFiles = meeting.self.permissions.chatPublic.files;
      this.canPrivateMessage = !!(((_a = meeting.self.permissions.chatPrivate) === null || _a === void 0 ? void 0 : _a.canSend) ||
        ((_b = meeting.self.permissions.chatPrivate) === null || _b === void 0 ? void 0 : _b.canReceive));
      this.canSendPrivateTexts = !!((_c = meeting.self.permissions.chatPrivate) === null || _c === void 0 ? void 0 : _c.text);
      this.canSendPrivateFiles = !!((_d = meeting.self.permissions.chatPrivate) === null || _d === void 0 ? void 0 : _d.files);
      this.isChatViewType = meeting.meta.viewType === 'CHAT';
      if (this.isChatViewType) {
        this.onChannelCreateOrUpdate();
        if ((_e = this.channels) === null || _e === void 0 ? void 0 : _e.length)
          this.selectedChannelId = this.channels[0].id;
      }
      this.initializeChatGroups();
      // shallow copy to trigger render
      this.chatGroups = Object.assign({}, this.chatGroups);
      this.chatUpdateListener = ({ message }) => {
        if (message.channelId)
          return;
        this.addToChatGroup(message);
        // shallow copy to trigger render
        this.chatGroups = Object.assign({}, this.chatGroups);
      };
      this.onParticipantUpdate();
      if (!this.usePaginatedChat()) {
        (_f = meeting.chat) === null || _f === void 0 ? void 0 : _f.addListener('chatUpdate', this.chatUpdateListener);
      }
      if (this.isPrivateChatSupported()) {
        meeting.participants.joined.addListener('participantJoined', this.onParticipantUpdate);
        meeting.participants.joined.addListener('participantLeft', this.onParticipantUpdate);
      }
      if (this.isChatViewType) {
        meeting.chat.addListener('channelCreate', this.onChannelCreateOrUpdate);
        meeting.chat.addListener('channelUpdate', this.onChannelCreateOrUpdate);
        meeting.chat.addListener('channelMessageUpdate', this.onChannelCreateOrUpdate);
      }
    }
  }
  chatGroupsChanged(chatGroups) {
    var _a, _b;
    if (!this.isPrivateChatSupported()) {
      return;
    }
    const unreadCounts = {};
    for (const key in chatGroups) {
      const lastReadTimestamp = (_a = _user_prefs_f52d234f_js__WEBPACK_IMPORTED_MODULE_4__.c[key]) !== null && _a !== void 0 ? _a : 0;
      unreadCounts[key] = chatGroups[key].filter((c) => c.type == 'chat' &&
        c.message.time > lastReadTimestamp &&
        c.message.userId !== this.meeting.self.userId).length;
      if (key ===
        (0,_chat_88f12485_js__WEBPACK_IMPORTED_MODULE_3__.g)([this.meeting.self.userId, (_b = this.selectedParticipant) === null || _b === void 0 ? void 0 : _b.userId]) ||
        (key === 'everyone' && this.selectedParticipant === null)) {
        unreadCounts[key] = 0;
        _user_prefs_f52d234f_js__WEBPACK_IMPORTED_MODULE_4__.c[key] = new Date();
      }
    }
    this.updateUnreadCountGroups(unreadCounts);
  }
  initializeChatGroups() {
    var _a;
    (_a = this.meeting.chat) === null || _a === void 0 ? void 0 : _a.messages.forEach((message) => {
      this.addToChatGroup(message);
    });
  }
  addToChatGroup(message) {
    var _a;
    const parsedMessage = (0,_chat_88f12485_js__WEBPACK_IMPORTED_MODULE_3__.p)(message);
    let key = 'everyone';
    if (((_a = parsedMessage.targetUserIds) === null || _a === void 0 ? void 0 : _a.length) > 0) {
      const allParticipants = new Set([
        parsedMessage.userId,
        ...parsedMessage.targetUserIds,
      ]);
      key = (0,_chat_88f12485_js__WEBPACK_IMPORTED_MODULE_3__.g)(Array.from(allParticipants));
    }
    if (this.chatGroups[key] === undefined)
      this.chatGroups[key] = [];
    this.chatGroups[key] = [
      ...this.chatGroups[key],
      { type: 'chat', message: parsedMessage },
    ];
  }
  getRecipientPeerIds() {
    let peerIds = [];
    if (this.chatRecipientId !== 'everyone') {
      peerIds = [this.selectedParticipant.id];
    }
    return peerIds;
  }
  channelSwitchListener(e) {
    this.onChannelChanged(e);
  }
  renderHeadlessComponents() {
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.F, null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-dialog-manager", { meeting: this.meeting }), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-notifications", { meeting: this.meeting })));
  }
  renderComposerUI() {
    var _a, _b;
    if (this.isChatViewType && this.channels.length === 0)
      return null;
    if (this.isChatViewType && this.searchQuery !== '')
      return null;
    const uiProps = { iconPack: this.iconPack, t: this.t, size: this.size };
    const prefill = {};
    if (this.editingMessage) {
      prefill.editMessage = this.editingMessage;
    }
    else if (this.replyMessage) {
      prefill.replyMessage = this.replyMessage;
    }
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-chat-composer-ui", Object.assign({ canSendTextMessage: this.isTextMessagingAllowed(), canSendFiles: this.isFileMessagingAllowed(), disableEmojiPicker: !!((_b = (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.__internals__) === null || _b === void 0 ? void 0 : _b.features.hasFeature(_flags_33c46e09_js__WEBPACK_IMPORTED_MODULE_5__.F.DISABLE_EMOJI_PICKER)), members: this.meeting.participants.all, prefill: prefill, onDyteNewMessage: this.onNewMessageHandler, onDyteEditMessage: this.onEditMessageHandler, onDyteEditCancelled: () => (this.editingMessage = null) }, uiProps), this.replyMessage && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "quoted-message-container", slot: "chat-addon" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "quoted-message" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_TextMessage_5d3b1de6_js__WEBPACK_IMPORTED_MODULE_6__.T, { message: this.replyMessage.message })), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "quoted-message" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { "aria-label": this.t('dismiss'), class: "dismiss", icon: this.iconPack.dismiss, onClick: () => (this.replyMessage = null), iconPack: this.iconPack, t: this.t }))))));
  }
  renderFullChat() {
    if (this.creatingChannel) {
      return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "banner" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-spinner", { size: "lg" })));
    }
    if (this.channels.length === 0) {
      return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "banner" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.create_channel_illustration, iconPack: this.iconPack, t: this.t, slot: "start", class: 'create-channel-illustration' }), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { iconPack: this.iconPack, t: this.t, kind: "wide", variant: "primary", size: "md", onClick: this.onChannelCreateClicked, class: "welcome-new-channel" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.add, iconPack: this.iconPack, t: this.t, slot: "start" }), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, this.t('chat.new_channel')))));
    }
    const selectedChannel = this.channels.find((channel) => channel.id === this.selectedChannelId);
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "chat" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-channel-header", { slot: "header", meeting: this.meeting, channel: selectedChannel, onSearch: this.onSearchHandler, onSearchDismissed: this.onSearchDismissed }), this.searchQuery !== '' && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-chat-search-results", { meeting: this.meeting, query: this.searchQuery, channelId: this.selectedChannelId })), this.searchQuery === '' && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-chat-messages-ui-paginated", { meeting: this.meeting, size: this.size, iconPack: this.iconPack, t: this.t, selectedChannelId: this.selectedChannelId, selectedChannel: selectedChannel }))));
  }
  render() {
    var _a, _b;
    if (!this.meeting)
      return null;
    const uiProps = { iconPack: this.iconPack, t: this.t, size: this.size };
    const selfUserId = (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.self.userId;
    const chatMessages = this.chatGroups[this.selectedGroup] || [];
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.H, null, this.isChatViewType && this.renderHeadlessComponents(), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "chat-container" }, this.isChatViewType && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-channel-selector-ui", { channels: this.channels, onChannelChanged: this.onChannelChanged, selectedChannelId: this.selectedChannelId, showRecentMessage: true }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "channel-selector-header", slot: "header" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-logo", { meeting: this.meeting, config: this.config, t: this.t }), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tooltip", { label: this.t('chat.new_channel'), iconPack: this.iconPack, t: this.t }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { iconPack: this.iconPack, t: this.t, kind: "button", variant: "ghost", size: "md", onClick: this.onChannelCreateClicked, class: "channel-create-btn" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.add, iconPack: this.iconPack, t: this.t })))))), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "chat" }, this.isFileMessagingAllowed() && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { id: "dropzone", class: { active: this.dropzoneActivated }, part: "dropzone" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.attach, iconPack: this.iconPack, t: this.t }), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, this.t('chat.send_attachment')))), this.isPrivateChatSupported() && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-chat-selector-ui", Object.assign({ selfUserId: selfUserId, groups: this.participants, selectedGroupId: (_b = this.selectedParticipant) === null || _b === void 0 ? void 0 : _b.userId, unreadCounts: this.unreadCountGroups, onDyteChatGroupChanged: this.updateRecipients }, uiProps))), this.isChatViewType ? (this.renderFullChat()) : this.usePaginatedChat() ? ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-chat-messages-ui-paginated", { meeting: this.meeting, size: this.size, iconPack: this.iconPack, t: this.t })) : ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-chat-messages-ui", Object.assign({ messages: chatMessages, selfUserId: selfUserId, selectedGroup: this.selectedGroup }, uiProps))), this.renderComposerUI()))));
  }
  get host() { return (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
  static get watchers() { return {
    "meeting": ["meetingChanged"],
    "chatGroups": ["chatGroupsChanged"]
  }; }
};
DyteChat.style = dyteChatCss;




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




/***/ })

};
;