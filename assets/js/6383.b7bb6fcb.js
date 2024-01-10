"use strict";
exports.id = 6383;
exports.ids = [6383];
exports.modules = {

/***/ 56383:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_participant_tile: () => (/* binding */ DyteParticipantTile)
/* harmony export */ });
/* harmony import */ var _index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65733);
/* harmony import */ var _store_56e792d0_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46503);
/* harmony import */ var _default_icon_pack_a3227c63_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96633);
/* harmony import */ var _index_29bc5d44_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20336);
/* harmony import */ var _pipStore_5d9dd8bf_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21237);
/* harmony import */ var _flags_33c46e09_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(27637);
/* harmony import */ var _default_ui_config_e3c1cd21_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(37692);
/* harmony import */ var _livestream_8c64d895_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(24555);
/* harmony import */ var _graceful_storage_33bc316d_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(60804);










const dyteParticipantTileCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{position:relative;display:flex;align-items:center;justify-content:center;aspect-ratio:16 / 9;height:var(--dyte-space-56, 224px);overflow:hidden;border-radius:var(--dyte-border-radius-lg, 12px);-webkit-user-select:none;-moz-user-select:none;user-select:none;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-video-bg, 24 24 24) / var(--tw-bg-opacity));transition-property:var(--dyte-transition-property, all);transition-duration:150ms}@media (prefers-reduced-motion){:host{--dyte-transition-property:none}}::slotted(dyte-name-tag){position:absolute;left:var(--dyte-space-3, 12px);bottom:var(--dyte-space-3, 12px)}:host([size='sm'][variant='solid']) ::slotted(dyte-name-tag){left:var(--dyte-space-2, 8px);bottom:var(--dyte-space-2, 8px);height:var(--dyte-space-4, 16px)}::slotted(dyte-network-indicator){position:absolute;right:var(--dyte-space-3, 12px);bottom:var(--dyte-space-3, 12px)}:host([size='sm']) ::slotted(dyte-network-indicator){right:var(--dyte-space-2, 8px);bottom:var(--dyte-space-2, 8px)}video{display:none;position:absolute;height:100%;width:100%;border-radius:var(--dyte-border-radius-lg, 12px)}video.contain{-o-object-fit:contain;object-fit:contain}video.cover{-o-object-fit:cover;object-fit:cover}video.visible{display:block}video::-webkit-media-controls{display:none !important}.pinned-icon{position:absolute;left:var(--dyte-space-3, 12px);top:var(--dyte-space-3, 12px);height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px);padding:var(--dyte-space-1, 4px);border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity))}:host([size='sm']) .pinned-icon{top:var(--dyte-space-2, 8px);left:var(--dyte-space-2, 8px)}:host([variant='gradient']) ::slotted(dyte-audio-visualizer){position:absolute;top:var(--dyte-space-2, 8px);right:var(--dyte-space-2, 8px);border-radius:9999px;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-bg-opacity));padding:var(--dyte-space-2, 8px)}:host([variant='gradient']) ::slotted(dyte-name-tag){bottom:var(--dyte-space-0, 0px);left:var(--dyte-space-0, 0px);display:flex;width:100%;align-items:center;justify-content:center;text-align:center;background-color:transparent;background-image:linear-gradient(to top, var(--tw-gradient-stops));--tw-gradient-from:rgb(var(--dyte-colors-background-1000, 8 8 8));--tw-gradient-to:rgba(var(--dyte-colors-background-1000, 8 8 8) / 0);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to);--tw-gradient-to:transparent}video.mirror{transform:scaleX(-1)}:host([name-tag-position='bottom-right']) ::slotted(dyte-name-tag){left:auto;right:var(--dyte-space-3, 12px)}:host([name-tag-position='bottom-center']) ::slotted(dyte-name-tag){left:auto;right:auto}:host([name-tag-position='top-left']) ::slotted(dyte-name-tag){top:var(--dyte-space-3, 12px);bottom:auto}:host([name-tag-position='top-right']) ::slotted(dyte-name-tag){top:var(--dyte-space-3, 12px);right:var(--dyte-space-3, 12px);left:auto;bottom:auto}:host([name-tag-position='top-center']) ::slotted(dyte-name-tag){left:auto;right:auto;bottom:auto;top:var(--dyte-space-3, 12px)}";

const DyteParticipantTile = class {
  constructor(hostRef) {
    (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.onVideoUpdate = (videoState) => {
      this.videoState = videoState;
      if (this.participant == null)
        return;
      if (videoState.videoEnabled) {
        _pipStore_5d9dd8bf_js__WEBPACK_IMPORTED_MODULE_4__.s.enableSource(this.participant.id);
      }
      else {
        _pipStore_5d9dd8bf_js__WEBPACK_IMPORTED_MODULE_4__.s.disableSource(this.participant.id);
      }
    };
    this.onPinned = ({ isPinned }) => {
      this.isPinned = isPinned;
    };
    this.isSelf = () => { var _a; return this.isPreview || this.participant.id === ((_a = this.meeting) === null || _a === void 0 ? void 0 : _a.self.id); };
    this.videoState = undefined;
    this.isPinned = false;
    this.nameTagPosition = 'bottom-left';
    this.isPreview = false;
    this.participant = undefined;
    this.meeting = undefined;
    this.states = undefined;
    this.config = _default_ui_config_e3c1cd21_js__WEBPACK_IMPORTED_MODULE_6__.d;
    this.variant = 'solid';
    this.size = undefined;
    this.iconPack = _default_icon_pack_a3227c63_js__WEBPACK_IMPORTED_MODULE_2__.d;
    this.t = (0,_index_29bc5d44_js__WEBPACK_IMPORTED_MODULE_3__.u)();
  }
  onVideoRef(el) {
    this.videoEl = el;
    if (this.isPreview || this.participant == null) {
      return;
    }
    _pipStore_5d9dd8bf_js__WEBPACK_IMPORTED_MODULE_4__.s.addSource(this.participant.id, this.videoEl, this.participant.videoEnabled);
    if (this.participant.videoEnabled) {
      _pipStore_5d9dd8bf_js__WEBPACK_IMPORTED_MODULE_4__.s.enableSource(this.participant.id);
    }
  }
  connectedCallback() {
    // set videoState before initial render and initialize listeners
    this.participantsChanged(this.participant);
  }
  componentDidLoad() {
    // load videoState into video element after first render
    this.videoStateChanged(this.videoState);
  }
  disconnectedCallback() {
    if (this.playTimeout)
      clearTimeout(this.playTimeout);
    if (this.participant == null)
      return;
    this.participant.removeListener('videoUpdate', this.onVideoUpdate);
    this.participant.removeListener('pinned', this.onPinned);
    this.participant.removeListener('unpinned', this.onPinned);
    _pipStore_5d9dd8bf_js__WEBPACK_IMPORTED_MODULE_4__.s.removeSource(this.participant.id);
  }
  participantsChanged(participant) {
    if (participant != null) {
      this.videoState = {
        videoEnabled: participant.videoEnabled,
        videoTrack: participant.videoTrack,
      };
      this.isPinned = participant.isPinned;
      participant.addListener('videoUpdate', this.onVideoUpdate);
      participant.addListener('pinned', this.onPinned);
      participant.addListener('unpinned', this.onPinned);
    }
  }
  videoStateChanged(videoState) {
    var _a;
    if (videoState != null && this.videoEl != null) {
      if (videoState.videoEnabled) {
        if ((_a = this.meeting) === null || _a === void 0 ? void 0 : _a.__internals__.features.hasFeature(_flags_33c46e09_js__WEBPACK_IMPORTED_MODULE_5__.F.LOG_PLAYING_FAILURES)) {
          if (this.playTimeout)
            clearTimeout(this.playTimeout);
          this.playTimeout = setTimeout(() => {
            var _a;
            (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.__internals__.logger.log('dyte-participant-tile::playing_timeout');
          }, 6000);
        }
        const stream = new MediaStream();
        if (videoState.videoTrack == null)
          return;
        stream.addTrack(videoState.videoTrack);
        this.videoEl.srcObject = stream;
      }
      else {
        if (this.playTimeout)
          clearTimeout(this.playTimeout);
        this.videoEl.srcObject = undefined;
      }
    }
  }
  isMirrored() {
    var _a;
    if (this.participant != null) {
      if (this.isSelf()) {
        const states = this.states || _store_56e792d0_js__WEBPACK_IMPORTED_MODULE_1__.s;
        const mirrorVideo = (_a = states === null || states === void 0 ? void 0 : states.prefs) === null || _a === void 0 ? void 0 : _a.mirrorVideo;
        if (typeof mirrorVideo === 'boolean') {
          return mirrorVideo;
        }
      }
    }
    return false;
  }
  render() {
    var _a, _b, _c, _d;
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("video", { ref: (el) => this.onVideoRef(el), class: {
        visible: (_a = this.videoState) === null || _a === void 0 ? void 0 : _a.videoEnabled,
        mirror: this.isMirrored(),
        [(_d = (_c = (_b = this.config) === null || _b === void 0 ? void 0 : _b.config) === null || _c === void 0 ? void 0 : _c.videoFit) !== null && _d !== void 0 ? _d : 'cover']: true,
      }, onPlaying: () => {
        if (this.playTimeout)
          clearTimeout(this.playTimeout);
      }, onPause: (event) => {
        var _a, _b;
        if (this.isSelf() &&
          ((_a = this.meeting) === null || _a === void 0 ? void 0 : _a.__internals__.features.hasFeature(_flags_33c46e09_js__WEBPACK_IMPORTED_MODULE_5__.F.PLAY_PARTICIPANT_TILE_VIDEO_ON_PAUSE))) {
          this.meeting.__internals__.logger.warn(`Video player paused for ${this.participant.id} isSelf: ${this.isSelf()}`);
          // @ts-ignore
          (_b = event === null || event === void 0 ? void 0 : event.target) === null || _b === void 0 ? void 0 : _b.play();
        }
      }, autoPlay: true, playsInline: true, muted: true }), this.isPinned && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { class: "pinned-icon", icon: this.iconPack.pin, "aria-label": this.t('pinned'), iconPack: this.iconPack, t: this.t })), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null)));
  }
  static get watchers() { return {
    "participant": ["participantsChanged"],
    "videoState": ["videoStateChanged"]
  }; }
};
DyteParticipantTile.style = dyteParticipantTileCss;




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