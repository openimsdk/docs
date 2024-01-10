"use strict";
exports.id = 9246;
exports.ids = [9246];
exports.modules = {

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

/***/ 89246:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_screenshare_view: () => (/* binding */ DyteScreenshareView)
/* harmony export */ });
/* harmony import */ var _index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65733);
/* harmony import */ var _default_icon_pack_a3227c63_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96633);
/* harmony import */ var _index_29bc5d44_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20336);
/* harmony import */ var _dyte_client_faf935bd_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43367);
/* harmony import */ var _full_screen_05839220_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30099);






const dyteScreenshareViewCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{height:100%;width:100%;position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;overflow:hidden;border-radius:var(--dyte-border-radius-lg, 12px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-video-bg, 24 24 24) / var(--tw-bg-opacity))}::slotted(dyte-name-tag){position:absolute;left:var(--dyte-space-3, 12px);bottom:var(--dyte-space-3, 12px);opacity:0.8}#video-container{position:absolute;display:block;height:100%;width:100%}#video-container .fit-in-container{-o-object-fit:fill;object-fit:fill}video{height:100%;width:100%;-o-object-fit:contain;object-fit:contain}:host([variant='gradient']) ::slotted(dyte-audio-visualizer){position:absolute;top:var(--dyte-space-2, 8px);right:var(--dyte-space-2, 8px);border-radius:9999px;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-bg-opacity));padding:var(--dyte-space-2, 8px)}:host([variant='gradient']) ::slotted(dyte-name-tag){bottom:var(--dyte-space-0, 0px);left:var(--dyte-space-0, 0px);display:flex;width:100%;align-items:center;justify-content:center;text-align:center;background-color:transparent;background-image:linear-gradient(to top, var(--tw-gradient-stops));--tw-gradient-from:rgb(var(--dyte-colors-background-1000, 8 8 8));--tw-gradient-to:rgba(var(--dyte-colors-background-1000, 8 8 8) / 0);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to);--tw-gradient-to:transparent}:host([size='sm'][variant='gradient']) ::slotted(dyte-audio-visualizer){height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px)}video.visible{-webkit-animation:video-fadein 0.4s ease;animation:video-fadein 0.4s ease}#controls{display:none;position:absolute;top:var(--dyte-space-3, 12px);right:var(--dyte-space-3, 12px);align-items:center;justify-content:flex-end;gap:var(--dyte-space-2, 8px)}:host(:hover) #controls,:host(:active) #controls,:host(:focus-visible) #controls{display:flex}#full-screen-btn{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity))}h3{margin-top:var(--dyte-space-10, 40px);margin-bottom:var(--dyte-space-6, 24px);text-align:center;font-size:20px;font-weight:500}:host([size='sm']) h3{font-size:16px}#self-message{padding-left:var(--dyte-space-4, 16px);padding-right:var(--dyte-space-4, 16px)}:host(.isSelf) #self-view{flex:1 1 0%}:host(.isSelf) #video-container{position:static;aspect-ratio:auto;height:auto;width:50%;max-width:var(--dyte-space-96, 384px);border-radius:var(--dyte-border-radius-md, 8px);transition:0.6s ease}:host(.isSelf) #video-container.expand{width:60%;max-width:100%}.actions{display:flex;align-items:center;justify-content:center;gap:var(--dyte-space-2, 8px)}:host([size='sm'].isSelf) #video-container,:host([size='md'].isSelf) #video-container,:host([size='sm'].isSelf) #expand-btn,:host([size='md'].isSelf) #expand-btn{display:none}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.remote-control{z-index:10;height:100%;max-height:100%;flex:0 1 auto}#remote-control-self{position:absolute;top:var(--dyte-space-0, 0px);left:50%;z-index:10;width:-webkit-max-content;width:-moz-max-content;width:max-content;max-width:100%;box-sizing:border-box;display:flex;height:var(--dyte-space-8, 32px);align-items:center;overflow:hidden;border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-warning, 255 205 7) / var(--tw-bg-opacity));font-size:12px;color:rgb(var(--dyte-colors-text-1000, 255 255 255));transform:translateX(-50%)}#remote-control-self p{padding-left:var(--dyte-space-3, 12px);padding-right:var(--dyte-space-3, 12px);padding-top:var(--dyte-space-2, 8px);padding-bottom:var(--dyte-space-2, 8px)}#remote-control-self dyte-button{height:100%;border-radius:var(--dyte-border-radius-none, 0);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-bg-opacity));font-size:12px}:host([size='sm']) #remote-control-self{height:auto;flex-direction:column}:host([size='sm']) #remote-control-self dyte-button{width:100%;padding-top:var(--dyte-space-1, 4px);padding-bottom:var(--dyte-space-1, 4px)}:host([name-tag-position='bottom-right']) ::slotted(dyte-name-tag){left:auto;right:var(--dyte-space-3, 12px)}:host([name-tag-position='bottom-center']) ::slotted(dyte-name-tag){left:auto;right:auto}:host([name-tag-position='top-left']) ::slotted(dyte-name-tag){top:var(--dyte-space-3, 12px);bottom:auto}:host([name-tag-position='top-right']) ::slotted(dyte-name-tag){top:var(--dyte-space-3, 12px);right:var(--dyte-space-3, 12px);left:auto;bottom:auto}:host([name-tag-position='top-center']) ::slotted(dyte-name-tag){left:auto;right:auto;bottom:auto;top:var(--dyte-space-3, 12px)}@-webkit-keyframes video-fadein{0%{opacity:0;transform:scale(1.4) translateY(20px)}100%{opacity:1;transform:scale(1) translateY(0)}}@keyframes video-fadein{0%{opacity:0;transform:scale(1.4) translateY(20px)}100%{opacity:1;transform:scale(1) translateY(0)}}::slotted(dyte-network-indicator){position:absolute;right:var(--dyte-space-3, 12px);bottom:var(--dyte-space-3, 12px)}";

const DyteScreenshareView = class {
  constructor(hostRef) {
    (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.stateUpdate = (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteStateUpdate", 7);
    this.fullScreenListener = () => {
      this.isFullScreen = (0,_full_screen_05839220_js__WEBPACK_IMPORTED_MODULE_4__.i)();
    };
    this.onRemoteUpdate = ({ payload, type }) => {
      var _a, _b;
      let remoteControlInfo = '';
      if (type === _dyte_client_faf935bd_js__WEBPACK_IMPORTED_MODULE_3__.R.INCOMING_REQUEST_ACCEPTED) {
        const remotePeer = this.meeting.participants.joined.get(payload.request.remotePeerId);
        remoteControlInfo = `${remotePeer.name} is controlling your screen.`;
      }
      if (type === _dyte_client_faf935bd_js__WEBPACK_IMPORTED_MODULE_3__.R.OUTGOING_REQUEST_ACCEPTED) {
        const hostPeer = this.meeting.participants.joined.get(payload.request.hostPeerId);
        remoteControlInfo = `You are controlling ${hostPeer.name}'s screen.`;
      }
      if (type === _dyte_client_faf935bd_js__WEBPACK_IMPORTED_MODULE_3__.R.INCOMING_REQUEST_ENDED ||
        type === _dyte_client_faf935bd_js__WEBPACK_IMPORTED_MODULE_3__.R.OUTGOING_REQUEST_ENDED) {
        remoteControlInfo = '';
      }
      if (type === _dyte_client_faf935bd_js__WEBPACK_IMPORTED_MODULE_3__.R.REQUEST_RECEIVED && !Boolean((_b = (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.remote) === null || _b === void 0 ? void 0 : _b.active)) {
        this.stateUpdate.emit({ activeRemoteAccessManager: true });
      }
      this.remoteControlInfo = remoteControlInfo;
    };
    this.onMouseEvent = (event) => {
      var _a, _b;
      if (this.shouldSkipEventTrigger()) {
        return;
      }
      event.stopPropagation();
      event.preventDefault();
      (_b = (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.remote) === null || _b === void 0 ? void 0 : _b.mouseEvent(event, this.videoEl);
    };
    this.onKeyDown = (event) => {
      var _a, _b;
      if (this.shouldSkipEventTrigger()) {
        return;
      }
      (_b = (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.remote) === null || _b === void 0 ? void 0 : _b.keyboardEvent(event);
    };
    this.toggleFullScreen = () => {
      if (!this.isFullScreen) {
        (0,_full_screen_05839220_js__WEBPACK_IMPORTED_MODULE_4__.r)(this.host);
        this.isFullScreen = true;
      }
      else {
        (0,_full_screen_05839220_js__WEBPACK_IMPORTED_MODULE_4__.e)();
        this.isFullScreen = false;
      }
    };
    this.hideFullScreenButton = false;
    this.nameTagPosition = 'bottom-left';
    this.participant = undefined;
    this.meeting = undefined;
    this.variant = 'solid';
    this.size = undefined;
    this.iconPack = _default_icon_pack_a3227c63_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.t = (0,_index_29bc5d44_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    this.videoExpanded = false;
    this.screenShareEnabled = false;
    this.isFullScreen = false;
    this.remoteControlInfo = undefined;
  }
  connectedCallback() {
    window === null || window === void 0 ? void 0 : window.addEventListener('fullscreenchange', this.fullScreenListener);
    window === null || window === void 0 ? void 0 : window.addEventListener('webkitfullscreenchange', this.fullScreenListener);
  }
  componentDidLoad() {
    this.participantChanged(this.participant);
  }
  disconnectedCallback() {
    var _a, _b, _c;
    this.screenShareListener &&
      ((_a = this.participant) === null || _a === void 0 ? void 0 : _a.removeListener('screenShareUpdate', this.screenShareListener));
    (_c = (_b = this.meeting) === null || _b === void 0 ? void 0 : _b.remote) === null || _c === void 0 ? void 0 : _c.removeListener('remoteUpdate', this.onRemoteUpdate);
    window === null || window === void 0 ? void 0 : window.removeEventListener('fullscreenchange', this.fullScreenListener);
    window === null || window === void 0 ? void 0 : window.removeEventListener('webkitfullscreenchange', this.fullScreenListener);
  }
  participantChanged(participant) {
    var _a, _b, _c, _d, _e;
    if (participant != null) {
      this.screenShareListener = ({ screenShareEnabled, screenShareTracks }) => {
        const enabled = screenShareEnabled && screenShareTracks.video != null;
        (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.w)(() => {
          this.screenShareEnabled = enabled;
        });
        if (enabled) {
          const stream = new MediaStream();
          stream.addTrack(screenShareTracks.video);
          if (this.videoEl != null) {
            this.videoEl.srcObject = stream;
            this.videoEl.play();
          }
        }
        else if (this.videoEl != null) {
          this.videoEl.srcObject = undefined;
        }
      };
      this.screenShareListener(participant);
      if (Boolean((_b = (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.remote) === null || _b === void 0 ? void 0 : _b.active) &&
        [this.meeting.remote.active.hostPeerId, this.meeting.remote.active.remotePeerId].includes(participant === null || participant === void 0 ? void 0 : participant.id)) {
        this.onRemoteUpdate({
          payload: { request: this.meeting.remote.active },
          type: ((_c = this.meeting.remote.active) === null || _c === void 0 ? void 0 : _c.hostPeerId) === this.meeting.self.id
            ? 'INCOMING_REQUEST_ACCEPTED'
            : 'OUTGOING_REQUEST_ACCEPTED',
        });
      }
      participant.addListener('screenShareUpdate', this.screenShareListener);
      (_e = (_d = this.meeting) === null || _d === void 0 ? void 0 : _d.remote) === null || _e === void 0 ? void 0 : _e.addListener('remoteUpdate', this.onRemoteUpdate);
    }
  }
  shouldSkipEventTrigger() {
    var _a, _b, _c;
    if (this.meeting == null || this.participant == null)
      return true;
    return (!Boolean((_a = this.meeting.remote) === null || _a === void 0 ? void 0 : _a.active) ||
      // It is you, who is moving over your own shared screen
      !Boolean(this.meeting.participants.joined.get((_b = this.meeting.remote) === null || _b === void 0 ? void 0 : _b.active.hostPeerId)) ||
      // Skip nonactive screenshare events, Redundant check
      ((_c = this.meeting.remote) === null || _c === void 0 ? void 0 : _c.active.hostPeerId) != this.participant.id);
  }
  render() {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const isSelf = ((_a = this.participant) === null || _a === void 0 ? void 0 : _a.id) === ((_b = this.meeting) === null || _b === void 0 ? void 0 : _b.self.id);
    const text = this.isFullScreen ? this.t('full_screen.exit') : this.t('full_screen');
    const icon = this.isFullScreen
      ? this.iconPack.full_screen_minimize
      : this.iconPack.full_screen_maximize;
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.H, { class: { isSelf } }, Boolean(((_d = (_c = this.meeting) === null || _c === void 0 ? void 0 : _c.remote) === null || _d === void 0 ? void 0 : _d.active) && this.remoteControlInfo) && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { id: "remote-control-self", key: "remote-control-self" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", { class: "remote-control-message" }, this.remoteControlInfo), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { onClick: () => { var _a; return (_a = this.meeting.remote) === null || _a === void 0 ? void 0 : _a.endControl(); }, iconPack: this.iconPack, t: this.t }, ((_f = (_e = this.meeting.remote) === null || _e === void 0 ? void 0 : _e.active) === null || _f === void 0 ? void 0 : _f.hostPeerId) === this.meeting.self.id
      ? 'Revoke access'
      : 'Stop'))), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: "video-container", id: "video-container", class: { expand: this.videoExpanded }, contentEditable: Boolean((_g = this.meeting.remote) === null || _g === void 0 ? void 0 : _g.active), onKeyDown: this.onKeyDown }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("video", { ref: (el) => (this.videoEl = el), class: {
        visible: this.screenShareEnabled,
        'fit-in-container': this.participant.supportsRemoteControl,
      }, playsInline: true, autoPlay: true, muted: true, id: `screen-share-video-${this.participant.id}`, onMouseMove: this.onMouseEvent, onClick: this.onMouseEvent, onContextMenu: this.onMouseEvent })), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { id: "controls", key: "controls" }, !this.hideFullScreenButton && !isSelf && (0,_full_screen_05839220_js__WEBPACK_IMPORTED_MODULE_4__.a)() && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tooltip", { label: text, iconPack: this.iconPack, t: this.t }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { id: "full-screen-btn", kind: "icon", onClick: this.toggleFullScreen, title: text, iconPack: this.iconPack, t: this.t }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: icon, "aria-hidden": true, tabIndex: -1, iconPack: this.iconPack, t: this.t })))), ((_h = this.participant) === null || _h === void 0 ? void 0 : _h.supportsRemoteControl) === true && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-menu", { id: "menu", key: "menu", iconPack: this.iconPack, t: this.t }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { variant: "secondary", kind: "icon", slot: "trigger", iconPack: this.iconPack, t: this.t }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.more_vertical, iconPack: this.iconPack, t: this.t })), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-menu-list", { iconPack: this.iconPack, t: this.t }, !isSelf && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-menu-item", { style: {
        cursor: this.participant.supportsRemoteControl ? 'pointer' : 'not-allowed',
      }, iconPack: this.iconPack, t: this.t, onClick: () => {
        var _a, _b;
        if ((_a = this.participant) === null || _a === void 0 ? void 0 : _a.supportsRemoteControl) {
          (_b = this.meeting.remote) === null || _b === void 0 ? void 0 : _b.requestControl(this.participant.id);
        }
      } }, "Request remote control")), isSelf && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-menu-item", { iconPack: this.iconPack, t: this.t, onClick: () => this.stateUpdate.emit({ activeRemoteAccessManager: true }) }, "Manage remote control requests")))))), isSelf && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { id: "self-message", key: "self-message" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("h3", null, this.t('screenshare.shared')), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "actions" }, this.meeting != null && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { variant: "danger", onClick: () => {
        this.meeting.self.disableScreenShare();
      }, iconPack: this.iconPack, t: this.t }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.share_screen_stop, slot: "start", iconPack: this.iconPack, t: this.t }), this.t('screenshare.stop'))), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { variant: "secondary", id: "expand-btn", iconPack: this.iconPack, t: this.t, onClick: () => {
        this.videoExpanded = !this.videoExpanded;
      } }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.videoExpanded
        ? this.iconPack.full_screen_minimize
        : this.iconPack.full_screen_maximize, slot: "start", iconPack: this.iconPack, t: this.t }), this.videoExpanded
      ? this.t('screenshare.min_preview')
      : this.t('screenshare.max_preview'))))), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null)));
  }
  get host() { return (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
  static get watchers() { return {
    "participant": ["participantChanged"]
  }; }
};
DyteScreenshareView.style = dyteScreenshareViewCss;




/***/ }),

/***/ 30099:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ isFullScreenSupported),
/* harmony export */   e: () => (/* binding */ exitFullSreen),
/* harmony export */   i: () => (/* binding */ isFullScreenEnabled),
/* harmony export */   r: () => (/* binding */ requestFullScreen)
/* harmony export */ });
const requestFullScreen = (el) => {
  if (el == null)
    return;
  if (el.requestFullscreen != null) {
    el.requestFullscreen();
  }
  else if (el.mozRequestFullScreen != null) {
    /* Firefox */
    el.mozRequestFullScreen();
  }
  else if (el.webkitRequestFullscreen != null) {
    /* Chrome, Safari & Opera */
    el.webkitRequestFullscreen();
  }
  else if (el.msRequestFullscreen != null) {
    /* IE/Edge */
    el.msRequestFullscreen();
  }
};
const exitFullSreen = () => {
  if (document.exitFullscreen != null) {
    document.exitFullscreen();
  }
  else if (document.mozExitFullScreen != null) {
    /* Firefox */
    document.mozExitFullScreen();
  }
  else if (document.webkitExitFullscreen != null) {
    /* Chrome, Safari & Opera */
    document.webkitExitFullscreen();
  }
  else if (document.msExitFullscreen != null) {
    /* IE/Edge */
    document.msExitFullscreen();
  }
};
const isFullScreenEnabled = () => {
  return document.fullscreenElement != null || document.webkitCurrentFullScreenElement != null;
};
const isFullScreenSupported = () => {
  if (typeof document !== 'undefined') {
    return (document.fullscreenEnabled ||
      document.mozFullscreenEnabled ||
      document.webkitFullscreenEnabled ||
      document.msFullscreenEnabled);
  }
  return false;
};




/***/ })

};
;