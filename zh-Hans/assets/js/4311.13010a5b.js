"use strict";
exports.id = 4311;
exports.ids = [4311];
exports.modules = {

/***/ 14311:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_participant: () => (/* binding */ DyteParticipant)
/* harmony export */ });
/* harmony import */ var _index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65733);
/* harmony import */ var _default_icon_pack_a3227c63_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96633);
/* harmony import */ var _index_29bc5d44_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20336);
/* harmony import */ var _string_8aa800b0_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22906);





const dyteParticipantCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{position:relative;display:flex;height:var(--dyte-space-14, 56px);align-items:center;justify-content:space-between;cursor:pointer;color:rgb(var(--dyte-colors-text-1000, 255 255 255))}:host dyte-avatar{height:var(--dyte-space-8, 32px);width:var(--dyte-space-8, 32px);font-size:14px}.left{display:flex;align-items:center}.left>*{margin-right:var(--dyte-space-2, 8px)}.left>*:last-child{margin-right:var(--dyte-space-0, 0px)}.right{display:flex;align-items:center;justify-content:flex-end}.right>*{margin-left:var(--dyte-space-2, 8px)}.right>*:first-child{margin-left:var(--dyte-space-0, 0px)}.name{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1}dyte-icon{height:var(--dyte-space-6, 24px);width:var(--dyte-space-6, 24px)}dyte-icon.red{--tw-text-opacity:1;color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-text-opacity))}dyte-icon.more{cursor:pointer}";

const DyteParticipant = class {
  constructor(hostRef) {
    (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.pinnedListener = ({ isPinned }) => {
      this.isPinned = isPinned;
    };
    this.stageListener = ({ webinarStageStatus }) => {
      this.isOnStage = webinarStageStatus === 'ON_STAGE';
    };
    this.meeting = undefined;
    this.view = 'sidebar';
    this.participant = undefined;
    this.iconPack = _default_icon_pack_a3227c63_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.t = (0,_index_29bc5d44_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    this.audioEnabled = false;
    this.videoEnabled = false;
    this.isPinned = false;
    this.isOnStage = false;
    this.canDisableParticipantAudio = false;
    this.canDisableParticipantVideo = false;
    this.canKickParticipant = false;
    this.canPinParticipant = false;
    this.canAllowParticipantOnStage = false;
  }
  connectedCallback() {
    this.meetingChanged(this.meeting);
    this.participantChanged(this.participant);
  }
  disconnectedCallback() {
    if (this.participant == null || this.participant.removeListener == undefined)
      return;
    this.audioUpdateListener &&
      this.participant.removeListener('audioUpdate', this.audioUpdateListener);
    this.videoUpdateListener &&
      this.participant.removeListener('videoUpdate', this.videoUpdateListener);
    this.participant.removeListener('pinned', this.pinnedListener);
    this.participant.removeListener('unpinned', this.pinnedListener);
    this.participant.removeListener('peerStartedPresenting', this.stageListener);
    this.participant.removeListener('peerStoppedPresenting', this.stageListener);
  }
  meetingChanged(meeting) {
    if (meeting != null) {
      const { self } = meeting;
      this.canDisableParticipantAudio =
        self.permissions.canAllowParticipantAudio || self.permissions.canDisableParticipantAudio;
      this.canDisableParticipantVideo =
        self.permissions.canAllowParticipantVideo || self.permissions.canDisableParticipantVideo;
      this.canKickParticipant = self.permissions.kickParticipant;
      this.canPinParticipant = self.permissions.pinParticipant;
      this.canAllowParticipantOnStage = self.permissions.acceptPresentRequests;
    }
  }
  participantChanged(participant) {
    if (participant != null) {
      this.audioEnabled = participant.audioEnabled;
      this.videoEnabled = participant.videoEnabled;
      this.isPinned = participant.isPinned;
      this.isOnStage = participant.webinarStageStatus === 'ON_STAGE';
      this.audioUpdateListener = ({ audioEnabled }) => {
        this.audioEnabled = audioEnabled;
      };
      this.videoUpdateListener = ({ videoEnabled }) => {
        this.videoEnabled = videoEnabled;
      };
      if (participant.addListener == undefined)
        return;
      participant.addListener('audioUpdate', this.audioUpdateListener);
      participant.addListener('videoUpdate', this.videoUpdateListener);
      participant.addListener('pinned', this.pinnedListener);
      participant.addListener('unpinned', this.pinnedListener);
      participant.addListener('peerStartedPresenting', this.stageListener);
      participant.addListener('peerStoppedPresenting', this.stageListener);
    }
  }
  render() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    const showMenu = this.canDisableParticipantAudio ||
      this.canDisableParticipantVideo ||
      this.canKickParticipant ||
      this.canPinParticipant;
    const name = (0,_string_8aa800b0_js__WEBPACK_IMPORTED_MODULE_3__.f)(((_a = this.participant) === null || _a === void 0 ? void 0 : _a.name) || '');
    // NOTE(@madhugb): Show some actions for only on stage / non-webinar participants
    const isActiveParticipant = this.isOnStage || ((_c = (_b = this.meeting) === null || _b === void 0 ? void 0 : _b.meta) === null || _c === void 0 ? void 0 : _c.viewType) === 'GROUP_CALL';
    const isSelf = ((_d = this.meeting) === null || _d === void 0 ? void 0 : _d.self.id) === this.participant.id;
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "left" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-avatar", { participant: this.participant, size: "sm", iconPack: this.iconPack, t: this.t }), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", { class: "name", title: name }, (0,_string_8aa800b0_js__WEBPACK_IMPORTED_MODULE_3__.s)(name, 16), " ", ((_e = this.meeting) === null || _e === void 0 ? void 0 : _e.self.id) === ((_f = this.participant) === null || _f === void 0 ? void 0 : _f.id) && this.t('(you)'))), this.view === 'sidebar' && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "right" }, isActiveParticipant && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { class: {
        red: !this.audioEnabled,
      }, iconPack: this.iconPack, t: this.t, icon: this.audioEnabled ? this.iconPack.mic_on : this.iconPack.mic_off })), isActiveParticipant && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { class: {
        red: !this.videoEnabled,
      }, iconPack: this.iconPack, t: this.t, icon: this.videoEnabled ? this.iconPack.video_on : this.iconPack.video_off })), showMenu && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-menu", { iconPack: this.iconPack, t: this.t }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { variant: "ghost", kind: "icon", slot: "trigger", iconPack: this.iconPack, t: this.t }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { class: "more", icon: this.iconPack.more_vertical })), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-menu-list", { iconPack: this.iconPack, t: this.t }, this.canPinParticipant && isActiveParticipant && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-menu-item", { onClick: () => {
        if (this.isPinned) {
          this.participant.unpin();
        }
        else {
          this.participant.pin();
        }
      }, iconPack: this.iconPack, t: this.t }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.isPinned ? this.iconPack.pin_off : this.iconPack.pin, slot: "start", iconPack: this.iconPack, t: this.t }), this.isPinned ? this.t('unpin') : this.t('pin'))), this.canDisableParticipantAudio && isActiveParticipant && this.audioEnabled && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-menu-item", { iconPack: this.iconPack, t: this.t, onClick: () => {
        this.participant.disableAudio();
      } }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.mic_off, slot: "start" }), this.t('mute'))), this.canDisableParticipantVideo && isActiveParticipant && this.videoEnabled && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-menu-item", { iconPack: this.iconPack, t: this.t, onClick: () => {
        this.participant.disableVideo();
      } }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.video_off, slot: "start", iconPack: this.iconPack, t: this.t }), this.t('participants.turn_off_video'))), ((_g = this.meeting) === null || _g === void 0 ? void 0 : _g.meta.viewType) === 'WEBINAR' &&
      this.canAllowParticipantOnStage &&
      ((_h = this.participant) === null || _h === void 0 ? void 0 : _h.id) !== ((_j = this.meeting) === null || _j === void 0 ? void 0 : _j.self.id) && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-menu-item", { iconPack: this.iconPack, t: this.t, class: this.isOnStage ? 'red' : '', onClick: async () => {
        const p = this.participant;
        if (this.isOnStage) {
          // NOTE (@madhugb): when a pinned participnat is removed from stage, we need to unpin them manually
          if (p.isPinned)
            p.unpin();
          await p.removeFromStage();
        }
        else {
          await p.acceptJoinStageRequest();
        }
        this.isOnStage = !this.isOnStage;
      } }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { iconPack: this.iconPack, t: this.t, icon: this.isOnStage ? this.iconPack.leave_stage : this.iconPack.join_stage, slot: "start" }), this.isOnStage
      ? this.t('stage.remove_from_stage')
      : this.t('stage.add_to_stage'))), !isSelf && this.canKickParticipant && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-menu-item", { iconPack: this.iconPack, t: this.t, class: "red", onClick: () => {
        var _a, _b;
        (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.participants.kick((_b = this.participant) === null || _b === void 0 ? void 0 : _b.id);
      } }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.dismiss, slot: "start", iconPack: this.iconPack, t: this.t }), this.t('kick'))))))))));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"],
    "participant": ["participantChanged"]
  }; }
};
DyteParticipant.style = dyteParticipantCss;




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