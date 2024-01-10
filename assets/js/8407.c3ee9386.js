"use strict";
exports.id = 8407;
exports.ids = [8407];
exports.modules = {

/***/ 28407:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_settings_audio: () => (/* binding */ DyteSettingsAudio),
/* harmony export */   dyte_settings_video: () => (/* binding */ DyteSettingsVideo)
/* harmony export */ });
/* harmony import */ var _index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65733);
/* harmony import */ var _default_icon_pack_a3227c63_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96633);
/* harmony import */ var _index_29bc5d44_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20336);
/* harmony import */ var _user_prefs_f52d234f_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85114);
/* harmony import */ var _store_56e792d0_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46503);
/* harmony import */ var _graceful_storage_33bc316d_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60804);







const dyteSettingsAudioCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.dyte-select{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255))}.dyte-select:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)}.dyte-select{display:block;border-radius:var(--dyte-border-radius-sm, 4px);border-width:var(--dyte-border-width-none, 0);border-style:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:var(--dyte-space-3, 12px);font-size:16px;--icon-size:var(--dyte-select-chevron-size, var(--dyte-space-6, 24px));--icon-right-position:var(--dyte-select-chevron-right-position, var(--dyte-space-2, 8px));background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\");background-position:right var(--icon-right-position) center;background-repeat:no-repeat;background-size:var(--icon-size) var(--icon-size);padding-right:calc(var(--icon-right-position) * 5)}:host{display:flex;width:100%;flex-direction:column}audio{visibility:hidden}label{-webkit-user-select:none;-moz-user-select:none;user-select:none;font-size:14px}.group{margin-top:var(--dyte-space-2, 8px);margin-bottom:var(--dyte-space-2, 8px)}.group>*{margin-bottom:var(--dyte-space-2, 8px)}.group>*:last-child{margin-bottom:var(--dyte-space-0, 0px)}.group select{flex:1 1 0%}.row{display:flex;align-items:center;justify-content:space-between;gap:var(--dyte-space-3, 12px)}.dyte-select{width:100%;max-width:100%}dyte-audio-visualizer{flex-shrink:0}dyte-button{border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}dyte-button dyte-icon{margin-right:var(--dyte-space-2, 8px)}";

const DyteSettingsAudio = class {
  constructor(hostRef) {
    (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.stateUpdate = (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteStateUpdate", 7);
    this.stageStateListener = () => {
      this.updateCanProduce(this.meeting);
    };
    this.selfStageLeftListener = () => {
      this.canProduceAudio = false;
    };
    this.deviceListUpdateListener = ({ added, removed }) => {
      added.map((device) => {
        if (device.kind === 'audioinput')
          this.audioDevices = [...this.audioDevices, device];
        if (device.kind === 'audiooutput')
          this.speakerDevices = [...this.speakerDevices, device];
      });
      removed.map((device) => {
        if (device.kind === 'audioinput')
          this.audioDevices = this.audioDevices.filter((x) => x.deviceId !== device.deviceId);
        if (device.kind === 'audiooutput')
          this.speakerDevices = this.speakerDevices.filter((x) => x.deviceId !== device.deviceId);
      });
    };
    this.deviceUpdateListener = ({ device }) => {
      if (device.kind === 'audioinput') {
        this.audioDevices = [
          device,
          ...this.audioDevices.filter((x) => x.deviceId !== device.deviceId),
        ];
      }
      if (device.kind === 'audiooutput') {
        this.speakerDevices = [
          device,
          ...this.speakerDevices.filter((x) => x.deviceId !== device.deviceId),
        ];
      }
    };
    this.meeting = undefined;
    this.states = undefined;
    this.size = undefined;
    this.iconPack = _default_icon_pack_a3227c63_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.t = (0,_index_29bc5d44_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    this.audioDevices = [];
    this.speakerDevices = [];
    this.canProduceAudio = true;
  }
  connectedCallback() {
    this.meetingChanged(this.meeting);
  }
  disconnectedCallback() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.self.removeListener('joinStageRequestAccepted', this.stageStateListener);
    (_b = this.meeting) === null || _b === void 0 ? void 0 : _b.self.removeListener('stageJoined', this.stageStateListener);
    (_c = this.meeting) === null || _c === void 0 ? void 0 : _c.self.removeListener('removedFromStage', this.stageStateListener);
    (_e = (_d = this.meeting) === null || _d === void 0 ? void 0 : _d.stage) === null || _e === void 0 ? void 0 : _e.removeListener('stageStatusUpdate', this.stageStateListener);
    (_f = this.meeting) === null || _f === void 0 ? void 0 : _f.self.removeListener('stageLeft', this.selfStageLeftListener);
    (_g = this.meeting) === null || _g === void 0 ? void 0 : _g.self.removeListener('joinStageRequestRejected', this.stageStateListener);
    (_h = this.meeting) === null || _h === void 0 ? void 0 : _h.self.removeListener('deviceListUpdate', this.deviceListUpdateListener);
    (_j = this.meeting) === null || _j === void 0 ? void 0 : _j.self.removeListener('deviceUpdate', this.deviceUpdateListener);
  }
  updateCanProduce(meeting) {
    const { self, meta, stage } = meeting;
    const canProduceAudio = self.permissions.canProduceAudio === 'ALLOWED';
    const isWebinar = meta.viewType === 'WEBINAR';
    const isLiveStream = meta.viewType === 'LIVESTREAM';
    this.canProduceAudio = false;
    if (canProduceAudio) {
      this.canProduceAudio = true;
    }
    else if (isWebinar || isLiveStream) {
      const canRequestAudio = self.permissions.canProduceAudio === 'CAN_REQUEST';
      // If the peer can present or has approved request to present
      if (canRequestAudio &&
        ((isWebinar &&
          (self.webinarStageStatus === 'ON_STAGE' ||
            self.webinarStageStatus === 'ACCEPTED_TO_JOIN_STAGE')) ||
          (isLiveStream &&
            (stage.status === 'ON_STAGE' || stage.status === 'ACCEPTED_TO_JOIN_STAGE')))) {
        this.canProduceAudio = true;
      }
    }
  }
  meetingChanged(meeting) {
    if (meeting == null)
      return;
    (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.w)(async () => {
      var _a, _b, _c, _d;
      const { self, stage } = meeting;
      const audioDevices = await meeting.self.getAudioDevices();
      const speakerDevices = await meeting.self.getSpeakerDevices();
      const currentAudioDevice = (_a = meeting.self.getCurrentDevices()) === null || _a === void 0 ? void 0 : _a.audio;
      const currentSpeakerDevice = (_b = meeting.self.getCurrentDevices()) === null || _b === void 0 ? void 0 : _b.speaker;
      this.updateCanProduce(meeting);
      self.addListener('joinStageRequestAccepted', this.stageStateListener);
      self.addListener('stageJoined', this.stageStateListener);
      self.addListener('removedFromStage', this.stageStateListener);
      stage === null || stage === void 0 ? void 0 : stage.addListener('stageStatusUpdate', this.stageStateListener);
      self.addListener('stageLeft', this.selfStageLeftListener);
      self.addListener('joinStageRequestRejected', this.stageStateListener);
      self.addListener('deviceListUpdate', this.deviceListUpdateListener);
      self.addListener('deviceUpdate', this.deviceUpdateListener);
      if (currentAudioDevice != undefined) {
        this.audioDevices = [
          (_c = audioDevices.find((device) => device.deviceId === currentAudioDevice.deviceId)) !== null && _c !== void 0 ? _c : currentAudioDevice,
          ...audioDevices.filter((device) => device.deviceId !== currentAudioDevice.deviceId),
        ];
      }
      else {
        this.audioDevices = audioDevices;
      }
      if (currentSpeakerDevice != undefined) {
        this.speakerDevices = [
          (_d = speakerDevices.find((device) => device.deviceId === currentSpeakerDevice.deviceId)) !== null && _d !== void 0 ? _d : currentSpeakerDevice,
          ...speakerDevices.filter((device) => device.deviceId !== currentSpeakerDevice.deviceId),
        ];
      }
      else {
        this.speakerDevices = speakerDevices;
      }
    });
  }
  testAudio() {
    var _a;
    (_a = this.testAudioEl) === null || _a === void 0 ? void 0 : _a.play();
  }
  setDevice(kind, deviceId) {
    var _a, _b;
    const device = kind === 'audio'
      ? this.audioDevices.find((d) => d.deviceId === deviceId)
      : this.speakerDevices.find((d) => d.deviceId === deviceId);
    if (device != null) {
      (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.self.setDevice(device);
      if (device.kind === 'audiooutput') {
        (_b = this.testAudioEl) === null || _b === void 0 ? void 0 : _b.setSinkId(device.deviceId);
      }
    }
  }
  render() {
    var _a, _b, _c;
    if (this.meeting == null)
      return null;
    let unnamedMicCount = 0;
    let unnamedSpeakerCount = 0;
    const currentDevices = (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.self.getCurrentDevices();
    const states = this.states || _store_56e792d0_js__WEBPACK_IMPORTED_MODULE_4__.s;
    const initialNotificationSoundsPreference = ((_b = states === null || states === void 0 ? void 0 : states.prefs) === null || _b === void 0 ? void 0 : _b.muteNotificationSounds) === true ||
      (0,_user_prefs_f52d234f_js__WEBPACK_IMPORTED_MODULE_3__.a)('mute-notification-sounds') === 'true';
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("audio", { preload: "auto", src: "https://assets.dyte.io/ui-kit/speaker-test.mp3", ref: (el) => (this.testAudioEl = el) }), this.canProduceAudio && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "group", part: "microphone-selection" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("label", null, "Microphone (input)"), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "row" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("select", { class: "dyte-select", onChange: (e) => this.setDevice('audio', e.target.value) }, this.audioDevices.map(({ deviceId, label }) => {
      var _a;
      return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("option", { value: deviceId, selected: ((_a = currentDevices.audio) === null || _a === void 0 ? void 0 : _a.deviceId) === deviceId }, label || `Microphone ${++unnamedMicCount}`));
    })), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-audio-visualizer", { participant: (_c = this.meeting) === null || _c === void 0 ? void 0 : _c.self, iconPack: this.iconPack, t: this.t })))), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "group", part: "speaker-selection" }, this.speakerDevices.length > 0 && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("label", null, "Speaker (output)"), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "row" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("select", { class: "dyte-select", onChange: (e) => this.setDevice('speaker', e.target.value) }, this.speakerDevices.map(({ deviceId, label }) => {
      var _a;
      return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("option", { value: deviceId, selected: ((_a = currentDevices.speaker) === null || _a === void 0 ? void 0 : _a.deviceId) === deviceId }, label || `Speaker ${++unnamedSpeakerCount}`));
    }))))), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { variant: "secondary", onClick: () => this.testAudio(), iconPack: this.iconPack, t: this.t }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.speaker, slot: "start", iconPack: this.iconPack, t: this.t }), "Test")), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "group", part: "notification-toggle" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "row" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("label", { htmlFor: "notification-toggle" }, "Notification sound"), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-switch", { id: "notification-toggle", checked: !initialNotificationSoundsPreference, onDyteChange: (e) => {
        var _a;
        const { checked } = e.target;
        const muteNotificationSounds = !checked;
        this.stateUpdate.emit({ prefs: { muteNotificationSounds } });
        _store_56e792d0_js__WEBPACK_IMPORTED_MODULE_4__.s.prefs = Object.assign(Object.assign({}, ((_a = _store_56e792d0_js__WEBPACK_IMPORTED_MODULE_4__.s.prefs) !== null && _a !== void 0 ? _a : {})), { muteNotificationSounds });
        (0,_user_prefs_f52d234f_js__WEBPACK_IMPORTED_MODULE_3__.s)('mute-notification-sounds', muteNotificationSounds);
      }, iconPack: this.iconPack, t: this.t })))));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"]
  }; }
};
DyteSettingsAudio.style = dyteSettingsAudioCss;

const dyteSettingsVideoCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.dyte-select{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255))}.dyte-select:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)}.dyte-select{display:block;border-radius:var(--dyte-border-radius-sm, 4px);border-width:var(--dyte-border-width-none, 0);border-style:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:var(--dyte-space-3, 12px);font-size:16px;--icon-size:var(--dyte-select-chevron-size, var(--dyte-space-6, 24px));--icon-right-position:var(--dyte-select-chevron-right-position, var(--dyte-space-2, 8px));background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\");background-position:right var(--icon-right-position) center;background-repeat:no-repeat;background-size:var(--icon-size) var(--icon-size);padding-right:calc(var(--icon-right-position) * 5)}:host{display:flex;width:100%;flex-direction:column}dyte-participant-tile{margin-left:auto;margin-right:auto;margin-bottom:var(--dyte-space-4, 16px);max-width:100%}#icon{padding-bottom:var(--dyte-space-1, 4px)}.apply-button{height:var(--dyte-space-10, 40px)}label{-webkit-user-select:none;-moz-user-select:none;user-select:none;font-size:14px}.group{margin-top:var(--dyte-space-2, 8px);margin-bottom:var(--dyte-space-2, 8px)}.group>*{margin-bottom:var(--dyte-space-2, 8px)}.group>*:last-child{margin-bottom:var(--dyte-space-0, 0px)}.group select{flex:1 1 0%}.row{display:flex;align-items:center;justify-content:space-between;gap:var(--dyte-space-3, 12px)}";

const DyteSettingsVideo = class {
  constructor(hostRef) {
    (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.stateUpdate = (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteStateUpdate", 7);
    this.onVideoUpdate = (videoState) => {
      this.videoEnabled = videoState.videoEnabled;
    };
    this.deviceListUpdateListener = ({ added, removed }) => {
      added.map((device) => {
        if (device.kind !== 'videoinput')
          return;
        this.videoDevices = [...this.videoDevices, device];
      });
      removed.map((device) => {
        if (device.kind !== 'videoinput')
          return;
        this.videoDevices = this.videoDevices.filter((x) => x.deviceId !== device.deviceId);
      });
    };
    this.deviceUpdateListener = ({ device }) => {
      if (device.kind !== 'videoinput')
        return;
      this.videoDevices = [
        device,
        ...this.videoDevices.filter((x) => x.deviceId !== device.deviceId),
      ];
    };
    this.meeting = undefined;
    this.states = undefined;
    this.size = undefined;
    this.iconPack = _default_icon_pack_a3227c63_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.t = (0,_index_29bc5d44_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    this.videoDevices = [];
    this.currentDevice = undefined;
    this.videoEnabled = undefined;
  }
  componentDidLoad() {
    this.meetingChanged(this.meeting);
  }
  meetingChanged(meeting) {
    var _a, _b, _c;
    if (meeting == null)
      return;
    this.videoEnabled = meeting.self.videoEnabled;
    (_a = meeting.self) === null || _a === void 0 ? void 0 : _a.addListener('videoUpdate', this.onVideoUpdate);
    (_b = meeting.self) === null || _b === void 0 ? void 0 : _b.addListener('deviceListUpdate', this.deviceListUpdateListener);
    (_c = meeting.self) === null || _c === void 0 ? void 0 : _c.addListener('deviceUpdate', this.deviceUpdateListener);
    (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.w)(async () => {
      var _a, _b;
      const videoDevices = await meeting.self.getVideoDevices();
      const currentVideoDevice = (_a = meeting.self.getCurrentDevices()) === null || _a === void 0 ? void 0 : _a.video;
      //  NOTE(callmetarush): Setting current video device to show on top of list
      if (currentVideoDevice != undefined) {
        this.videoDevices = [
          (_b = videoDevices.find((device) => device.deviceId === currentVideoDevice.deviceId)) !== null && _b !== void 0 ? _b : currentVideoDevice,
          ...videoDevices.filter((device) => device.deviceId !== currentVideoDevice.deviceId),
        ];
      }
      else {
        this.videoDevices = videoDevices;
      }
    });
  }
  disconnectedCallback() {
    var _a, _b, _c;
    (_a = this.meeting.self) === null || _a === void 0 ? void 0 : _a.removeListener('videoUpdate', this.onVideoUpdate);
    (_b = this.meeting) === null || _b === void 0 ? void 0 : _b.self.removeListener('deviceListUpdate', this.deviceListUpdateListener);
    (_c = this.meeting) === null || _c === void 0 ? void 0 : _c.self.removeListener('deviceUpdate', this.deviceUpdateListener);
  }
  async setDevice(deviceId) {
    var _a;
    const device = this.videoDevices.find((d) => d.deviceId === deviceId);
    this.currentDevice = device;
    if (device != null) {
      await ((_a = this.meeting) === null || _a === void 0 ? void 0 : _a.self.setDevice(device));
    }
  }
  render() {
    var _a, _b;
    if (this.meeting == null)
      return null;
    let unnamedVideoCount = 0;
    const states = this.states || _store_56e792d0_js__WEBPACK_IMPORTED_MODULE_4__.s;
    const initialMirrorPreference = ((_a = states === null || states === void 0 ? void 0 : states.prefs) === null || _a === void 0 ? void 0 : _a.mirrorVideo) === true || (0,_user_prefs_f52d234f_js__WEBPACK_IMPORTED_MODULE_3__.a)('mirror-video') === 'true';
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "group", part: "tile-preview" }, this.videoEnabled === true ? ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-participant-tile", { participant: (_b = this.meeting) === null || _b === void 0 ? void 0 : _b.self, iconPack: this.iconPack, t: this.t, states: states, isPreview: true })) : ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "camera-off-helper" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-participant-tile", { participant: undefined }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { id: "icon", icon: this.iconPack.video_off, tabIndex: -1, "aria-hidden": true, iconPack: this.iconPack, t: this.t }), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, "Camera is off")))))), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "group", part: "camera-selection" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("label", null, "Camera"), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "row" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("select", { class: "dyte-select", onChange: (e) => this.setDevice(e.target.value) }, this.videoDevices.map(({ deviceId, label }) => ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("option", { value: deviceId }, label || `Camera ${++unnamedVideoCount}`)))))), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "group", part: "mirror-toggle" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "row" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("label", { htmlFor: "mirror-toggle" }, "Mirror my Video"), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-switch", { checked: initialMirrorPreference, iconPack: this.iconPack, t: this.t, onDyteChange: (e) => {
        var _a;
        const { checked } = e.target;
        this.stateUpdate.emit({ prefs: { mirrorVideo: checked } });
        _store_56e792d0_js__WEBPACK_IMPORTED_MODULE_4__.s.prefs = Object.assign(Object.assign({}, ((_a = _store_56e792d0_js__WEBPACK_IMPORTED_MODULE_4__.s.prefs) !== null && _a !== void 0 ? _a : {})), { mirrorVideo: checked });
        (0,_user_prefs_f52d234f_js__WEBPACK_IMPORTED_MODULE_3__.s)('mirror-video', checked);
      } })))));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"]
  }; }
};
DyteSettingsVideo.style = dyteSettingsVideoCss;




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