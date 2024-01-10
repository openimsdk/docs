"use strict";
exports.id = 4310;
exports.ids = [4310];
exports.modules = {

/***/ 84310:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_livestream_player: () => (/* binding */ DyteLivestreamPlayer)
/* harmony export */ });
/* harmony import */ var _index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65733);
/* harmony import */ var _pipStore_5d9dd8bf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21237);
/* harmony import */ var _livestream_8c64d895_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24555);
/* harmony import */ var _default_icon_pack_a3227c63_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96633);
/* harmony import */ var _index_29bc5d44_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20336);
/* harmony import */ var _graceful_storage_33bc316d_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60804);







const dyteLivestreamPlayerCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{margin-left:var(--dyte-space-2, 8px);margin-right:var(--dyte-space-2, 8px);display:flex;height:100%;width:100%;border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity))}.player-container{position:relative;margin:var(--dyte-space-4, 16px);display:flex;flex-grow:1;align-items:center;justify-content:center;overflow:hidden;border-radius:var(--dyte-border-radius-md, 8px)}video{z-index:0;height:100%;width:100%;border-radius:var(--dyte-border-radius-md, 8px);border-width:var(--dyte-border-width-none, 0);border-style:none;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity))}.loader{position:absolute;z-index:10;height:100%;width:100%;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity));display:flex;flex-direction:column;align-items:center;justify-content:center}p{margin-top:var(--dyte-space-1, 4px);margin-bottom:var(--dyte-space-1, 4px);font-size:16px;color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}.latency-controls{position:absolute;bottom:var(--dyte-space-4, 16px);right:var(--dyte-space-4, 16px);z-index:20;display:flex;flex-direction:row;align-items:center}.sync-live-stream{cursor:pointer;border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-bg-opacity));padding-left:var(--dyte-space-2, 8px);padding-right:var(--dyte-space-2, 8px);padding-top:var(--dyte-space-1, 4px);padding-bottom:var(--dyte-space-1, 4px);font-size:12px}.unmute-popup{position:absolute;z-index:30 !important;display:flex;width:var(--dyte-space-72, 288px);flex-direction:column;border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));padding:var(--dyte-space-4, 16px);text-align:center;max-width:70%}.unmute-popup h3{margin:var(--dyte-space-0, 0px);font-size:16px;font-weight:500}.unmute-popup p{margin-top:var(--dyte-space-3, 12px);margin-bottom:var(--dyte-space-3, 12px);font-size:14px}";

const DyteLivestreamPlayer = class {
  constructor(hostRef) {
    (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.dyteAPIError = (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteAPIError", 7);
    this.showLatencyIndicator = false;
    this.LoadPlayer = (player = this.ivsPlayer) => {
      if (this.player && player) {
        player.attachHTMLVideoElement(this.player);
        player.setAutoplay(true);
        player.setVolume(1);
      }
    };
    this.livestreamUpdateListener = (state) => {
      var _a, _b;
      this.livestreamState = state;
      if (state === 'LIVESTREAMING') {
        this.LoadPlayer();
        this.getPlaybackUrl();
        if (!((_b = (_a = this.meeting.__internals__) === null || _a === void 0 ? void 0 : _a.browserSpecs) === null || _b === void 0 ? void 0 : _b.isIOSMobile())) {
          this.fetchLatency();
          this.updateLatency = setInterval(this.fetchLatency, 2000);
        }
        _pipStore_5d9dd8bf_js__WEBPACK_IMPORTED_MODULE_1__.s.enableSource('livestream-player');
      }
      else {
        this.showLatencyIndicator = false;
        if (this.updateLatency)
          clearInterval(this.updateLatency);
        _pipStore_5d9dd8bf_js__WEBPACK_IMPORTED_MODULE_1__.s.disableSource('livestream-player');
      }
    };
    this.getLoadingState = () => {
      let loadingMessage = '';
      let isLoading = false;
      let showIcon = false;
      switch (this.livestreamState) {
        case 'IDLE':
          loadingMessage = this.t('livestream.idle');
          isLoading = true;
          showIcon = false;
          break;
        case 'STARTING':
          loadingMessage = this.t('livestream.starting');
          isLoading = true;
          showIcon = true;
          break;
        case 'STOPPING':
          loadingMessage = this.t('livestream.stopping');
          isLoading = true;
          showIcon = true;
          break;
        case 'LIVESTREAMING':
          if (this.playerState !== _livestream_8c64d895_js__WEBPACK_IMPORTED_MODULE_2__.P.PLAYING) {
            loadingMessage = this.t('livestream.starting');
            showIcon = true;
            isLoading = true;
          }
          break;
        default:
          isLoading = false;
          loadingMessage = this.t('');
          showIcon = true;
          break;
      }
      return { isLoading, loadingMessage, showIcon };
    };
    this.getErrorState = () => {
      var _a, _b;
      let isError = false;
      let errorMessage = '';
      if (this.livestreamState !== 'LIVESTREAMING') {
        isError = false;
        errorMessage = this.t('');
        return { isError, errorMessage };
      }
      if (!this.isSupported) {
        isError = true;
        errorMessage = this.t('livestream.error.not_supported');
      }
      if (!this.playbackUrl) {
        isError = true;
        errorMessage = this.t('livestream.error.not_found');
      }
      if (this.playerError) {
        isError = true;
        errorMessage = this.t((_b = (_a = this.playerError) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : 'livestream.error.unknown');
      }
      return { isError, errorMessage };
    };
    this.fetchLatency = () => {
      if (this.ivsPlayer) {
        this.latency = this.ivsPlayer.getLiveLatency();
      }
    };
    this.stopRebuffer = (latency) => {
      this.ivsPlayer.setRebufferToLive(false);
      this.latency = latency;
      clearInterval(this.updateLatency);
      this.updateLatency = setInterval(this.fetchLatency, 2000);
    };
    this.resetSyncLivestream = () => {
      const latency = this.ivsPlayer.getLiveLatency();
      this.stopRebuffer(latency);
      this.dyteAPIError.emit({
        trace: this.t('livestreamPlayer.rebuffer.error'),
        message: this.t('livestream.error.sync'),
      });
    };
    this.syncLiveStream = () => {
      clearInterval(this.updateLatency);
      // set latency to -1, to show loading icon
      this.latency = -1;
      this.ivsPlayer.setRebufferToLive(true);
      // Reset after 15 seconds
      const resetTimeout = setTimeout(this.resetSyncLivestream, 15000);
      this.updateLatency = setInterval(() => {
        const latency = this.ivsPlayer.getLiveLatency();
        if (latency < 10) {
          // Stop dropping frames
          this.stopRebuffer(latency);
          clearTimeout(resetTimeout);
        }
      }, 1000);
    };
    this.meeting = undefined;
    this.size = undefined;
    this.t = (0,_index_29bc5d44_js__WEBPACK_IMPORTED_MODULE_4__.u)();
    this.iconPack = _default_icon_pack_a3227c63_js__WEBPACK_IMPORTED_MODULE_3__.d;
    this.playbackUrl = undefined;
    this.isSupported = true;
    this.playerState = _livestream_8c64d895_js__WEBPACK_IMPORTED_MODULE_2__.P.IDLE;
    this.livestreamState = 'IDLE';
    this.playerError = undefined;
    this.latency = 0;
    this.audioPlaybackError = false;
  }
  AddPlayerListeners(player = this.ivsPlayer) {
    Object.values(Object.assign(Object.assign({}, _livestream_8c64d895_js__WEBPACK_IMPORTED_MODULE_2__.d), _livestream_8c64d895_js__WEBPACK_IMPORTED_MODULE_2__.P)).forEach((key) => {
      if (_livestream_8c64d895_js__WEBPACK_IMPORTED_MODULE_2__.e.includes(key))
        return;
      player === null || player === void 0 ? void 0 : player.addEventListener(key, (event) => {
        var _a, _b, _c;
        if (key === _livestream_8c64d895_js__WEBPACK_IMPORTED_MODULE_2__.P.IDLE ||
          key === _livestream_8c64d895_js__WEBPACK_IMPORTED_MODULE_2__.P.PLAYING ||
          key === _livestream_8c64d895_js__WEBPACK_IMPORTED_MODULE_2__.d.ERROR ||
          key === _livestream_8c64d895_js__WEBPACK_IMPORTED_MODULE_2__.P.READY)
          this.playerState = key;
        if (key === _livestream_8c64d895_js__WEBPACK_IMPORTED_MODULE_2__.d.ERROR) {
          this.playerError = event;
        }
        if (key === _livestream_8c64d895_js__WEBPACK_IMPORTED_MODULE_2__.P.IDLE && player.isPaused()) {
          player.play();
        }
        if (key === _livestream_8c64d895_js__WEBPACK_IMPORTED_MODULE_2__.d.AUDIO_BLOCKED) {
          this.audioPlaybackError = true;
        }
        if (this.playerState === _livestream_8c64d895_js__WEBPACK_IMPORTED_MODULE_2__.P.PLAYING &&
          !((_b = (_a = this.meeting.__internals__) === null || _a === void 0 ? void 0 : _a.browserSpecs) === null || _b === void 0 ? void 0 : _b.isIOSMobile())) {
          this.showLatencyIndicator = true;
        }
        else
          this.showLatencyIndicator = false;
        this.meeting.__internals__.logger.info(`IVS.Player.${key}`, event);
        // Send selected data to CallStats
        if (_livestream_8c64d895_js__WEBPACK_IMPORTED_MODULE_2__.f.includes(key)) {
          (_c = this.meeting.__internals__.callStats) === null || _c === void 0 ? void 0 : _c.ivsPlayerEvent(key, event);
        }
      });
    });
  }
  getPlaybackUrl(player = this.ivsPlayer) {
    this.playbackUrl = this.meeting.livestream.playbackUrl;
    if (this.playbackUrl && player) {
      player.load(this.playbackUrl);
      player.play();
    }
  }
  onPlayerRef(el) {
    this.player = el;
    _pipStore_5d9dd8bf_js__WEBPACK_IMPORTED_MODULE_1__.s.addSource('livestream-player', this.player, this.playbackUrl ? true : false);
    if (this.playbackUrl)
      _pipStore_5d9dd8bf_js__WEBPACK_IMPORTED_MODULE_1__.s.enableSource('livestream-player');
  }
  connectedCallback() {
    this.meetingChanged(this.meeting);
    window.onDyteLivestreamPlayer = (player) => {
      if (player) {
        this.isSupported = true;
        this.ivsPlayer = player;
        this.AddPlayerListeners(player);
        this.LoadPlayer(player);
        this.getPlaybackUrl(player);
      }
      else
        this.isSupported = false;
    };
    this.sendLatencyToCallStats = setInterval(() => {
      var _a;
      this.fetchLatency();
      (_a = this.meeting.__internals__.callStats) === null || _a === void 0 ? void 0 : _a.livestreamLatency(this.latency);
    }, 10000);
  }
  disconnectedCallback() {
    window.onDyteLivestreamPlayer = undefined;
    this.meeting.livestream.removeListener('livestreamUpdate', this.livestreamUpdateListener);
    clearInterval(this.sendLatencyToCallStats);
    this.ivsPlayer.load('');
    this.ivsPlayer = undefined;
    this.player = undefined;
  }
  async componentDidLoad() {
    const IVSPlayerImport = `
    import IVSPlayer from 'https://cdn.jsdelivr.net/npm/amazon-ivs-player@1.16.0/+esm'
    let player = undefined;
    if (IVSPlayer.isPlayerSupported) {
      player = IVSPlayer.create({
        wasmBinary:
          'https://unpkg.com/amazon-ivs-player@1.11.0/dist/assets/amazon-ivs-wasmworker.min.wasm',
        wasmWorker:
          'https://unpkg.com/amazon-ivs-player@1.11.0/dist/assets/amazon-ivs-wasmworker.min.js',
      });
    }
    window.onDyteLivestreamPlayer && window.onDyteLivestreamPlayer(player);
    `;
    const pScript = document.createElement('script');
    pScript.type = 'module';
    pScript.innerHTML = IVSPlayerImport;
    document.body.appendChild(pScript);
  }
  meetingChanged(meeting) {
    if (meeting == null)
      return;
    this.livestreamState = this.meeting.livestream.state;
    if (this.livestreamState === 'LIVESTREAMING') {
      this.LoadPlayer();
      this.getPlaybackUrl();
      _pipStore_5d9dd8bf_js__WEBPACK_IMPORTED_MODULE_1__.s.enableSource('livestream-player');
    }
    this.meeting.livestream.on('livestreamUpdate', this.livestreamUpdateListener);
  }
  render() {
    if (!(0,_livestream_8c64d895_js__WEBPACK_IMPORTED_MODULE_2__.s)(this.meeting))
      return;
    const { isError, errorMessage } = this.getErrorState();
    const { isLoading, loadingMessage, showIcon } = this.getLoadingState();
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "player-container" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("video", { ref: (el) => this.onPlayerRef(el), playsInline: true }), this.audioPlaybackError && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "unmute-popup" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("h3", null, this.t('audio_playback.title')), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, this.t('audio_playback.description')), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { kind: "wide", onClick: () => {
        this.player.muted = false;
        this.audioPlaybackError = false;
      }, title: this.t('audio_playback'), iconPack: this.iconPack, t: this.t }, this.t('audio_playback')))), this.showLatencyIndicator && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "latency-controls" }, (this.latency > 10 || this.latency < 0) && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "sync-live-stream", onClick: this.syncLiveStream }, this.latency === -1 ? ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-spinner", { id: "icon", part: "spinner", iconPack: this.iconPack, t: this.t, size: "sm" })) : (this.t('livestream.skip')))))), isError && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "loader" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.warning, t: this.t }), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, errorMessage))), !isError && isLoading && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "loader" }, showIcon && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-spinner", { id: "icon", part: "spinner", iconPack: this.iconPack, t: this.t, size: "md" })), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, loadingMessage))))));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"]
  }; }
};
DyteLivestreamPlayer.style = dyteLivestreamPlayerCss;




/***/ })

};
;