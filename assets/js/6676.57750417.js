"use strict";
exports.id = 6676;
exports.ids = [6676];
exports.modules = {

/***/ 66676:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_mic_toggle: () => (/* binding */ DyteMicToggle)
/* harmony export */ });
/* harmony import */ var _index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65733);
/* harmony import */ var _default_icon_pack_a3227c63_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96633);
/* harmony import */ var _index_29bc5d44_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20336);
/* harmony import */ var _store_56e792d0_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46503);





const dyteMicToggleCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:block}:host(.audioDisabled) :slotted(dyte-icon){--tw-text-opacity:1;color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-text-opacity))}";

const DyteMicToggle = class {
  constructor(hostRef) {
    (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.stateUpdate = (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteStateUpdate", 7);
    this.audioUpdateListener = ({ audioEnabled }) => {
      this.audioEnabled = audioEnabled;
    };
    this.selfJoinStateListener = () => {
      this.updateCanProduce(this.meeting);
    };
    this.selfStageLeftListener = () => {
      this.canProduceAudio = false;
    };
    this.selfJoinStateRejectedListener = () => {
      this.updateCanProduce(this.meeting);
    };
    this.mediaPermissionUpdateListener = ({ kind, message }) => {
      if (kind === 'audio') {
        this.micPermission = message;
      }
    };
    this.toggleMic = () => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
      (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.__internals__.logger.info('dyteMicToggle::toggleMic', {
        media: {
          audio: {
            enabled: Boolean((_c = (_b = this.meeting) === null || _b === void 0 ? void 0 : _b.self) === null || _c === void 0 ? void 0 : _c.audioEnabled),
            permission: this.micPermission,
            canProduce: (_f = (_e = (_d = this.meeting) === null || _d === void 0 ? void 0 : _d.self) === null || _e === void 0 ? void 0 : _e.permissions) === null || _f === void 0 ? void 0 : _f.canProduceAudio,
          },
        },
        webinar: {
          stageStatus: (_h = (_g = this.meeting) === null || _g === void 0 ? void 0 : _g.self) === null || _h === void 0 ? void 0 : _h.webinarStageStatus,
        },
        livestream: {
          stageStatus: (_k = (_j = this.meeting) === null || _j === void 0 ? void 0 : _j.stage) === null || _k === void 0 ? void 0 : _k.status,
        },
        moduleExists: {
          self: Boolean((_l = this.meeting) === null || _l === void 0 ? void 0 : _l.self),
        },
      });
      if (this.hasPermissionError()) {
        const permissionModalSettings = {
          enabled: true,
          kind: 'audio',
        };
        this.stateUpdate.emit({ activePermissionsMessage: permissionModalSettings });
        _store_56e792d0_js__WEBPACK_IMPORTED_MODULE_3__.s.activePermissionsMessage = permissionModalSettings;
        return false;
      }
      const self = (_m = this.meeting) === null || _m === void 0 ? void 0 : _m.self;
      if (self == null || !this.canProduceAudio) {
        return;
      }
      if (self.audioEnabled) {
        self.disableAudio();
      }
      else {
        self.enableAudio();
      }
    };
    this.variant = 'button';
    this.meeting = undefined;
    this.size = undefined;
    this.iconPack = _default_icon_pack_a3227c63_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.t = (0,_index_29bc5d44_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    this.audioEnabled = false;
    this.canProduceAudio = false;
    this.micPermission = 'NOT_REQUESTED';
  }
  connectedCallback() {
    this.meetingChanged(this.meeting);
  }
  disconnectedCallback() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.self.removeListener('audioUpdate', this.audioUpdateListener);
    (_b = this.meeting) === null || _b === void 0 ? void 0 : _b.self.removeListener('mediaPermissionUpdate', this.mediaPermissionUpdateListener);
    (_c = this.meeting) === null || _c === void 0 ? void 0 : _c.self.removeListener('joinStageRequestAccepted', this.selfJoinStateListener);
    (_d = this.meeting) === null || _d === void 0 ? void 0 : _d.self.removeListener('joinStageRequestRejected', this.selfJoinStateRejectedListener);
    (_e = this.meeting) === null || _e === void 0 ? void 0 : _e.self.removeListener('stageJoined', this.selfJoinStateListener);
    (_f = this.meeting) === null || _f === void 0 ? void 0 : _f.self.removeListener('stageLeft', this.selfStageLeftListener);
    (_g = this.meeting) === null || _g === void 0 ? void 0 : _g.self.removeListener('removedFromStage', this.selfJoinStateListener);
    (_j = (_h = this.meeting) === null || _h === void 0 ? void 0 : _h.stage) === null || _j === void 0 ? void 0 : _j.removeListener('stageStatusUpdate', this.selfJoinStateListener);
  }
  meetingChanged(meeting) {
    if (meeting != null) {
      const { self, stage } = meeting;
      this.updateCanProduce(meeting);
      this.micPermission = meeting.self.mediaPermissions.audio || 'NOT_REQUESTED';
      this.audioEnabled = self.audioEnabled;
      self.addListener('audioUpdate', this.audioUpdateListener);
      self.addListener('mediaPermissionUpdate', this.mediaPermissionUpdateListener);
      self.addListener('joinStageRequestAccepted', this.selfJoinStateListener);
      self.addListener('joinStageRequestRejected', this.selfJoinStateRejectedListener);
      self.addListener('stageJoined', this.selfJoinStateListener);
      self.addListener('stageLeft', this.selfStageLeftListener);
      self.addListener('removedFromStage', this.selfJoinStateListener);
      stage === null || stage === void 0 ? void 0 : stage.addListener('stageStatusUpdate', this.selfJoinStateListener);
    }
  }
  updateCanProduce(meeting) {
    const { self, meta, stage } = meeting;
    const canProduceAudio = self.permissions.canProduceAudio === 'ALLOWED';
    const isWebinar = meta.viewType === 'WEBINAR';
    const isLiveStream = meta.viewType === 'LIVESTREAM';
    this.canProduceAudio = false;
    if (canProduceAudio && !isLiveStream) {
      this.canProduceAudio = true;
    }
    else if (isWebinar || isLiveStream) {
      if (canProduceAudio &&
        stage.status !== 'OFF_STAGE' &&
        stage.status !== 'REQUESTED_TO_JOIN_STAGE')
        this.canProduceAudio = true;
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
  hasPermissionError() {
    return this.micPermission === 'DENIED' || this.micPermission === 'SYSTEM_DENIED';
  }
  getState() {
    let tooltipLabel = '';
    let label = '';
    let icon = '';
    let classList = {};
    let hasError = this.hasPermissionError();
    let couldNotStart = this.micPermission === 'COULD_NOT_START';
    if (this.audioEnabled && !hasError) {
      label = this.t('mic_on');
      icon = this.iconPack.mic_on;
    }
    else {
      label = this.t('mic_off');
      icon = this.iconPack.mic_off;
      classList['red-icon'] = true;
    }
    if (couldNotStart) {
      tooltipLabel = this.t('perm_could_not_start.audio');
    }
    else if (this.micPermission === 'SYSTEM_DENIED') {
      tooltipLabel = this.t('perm_sys_denied.audio');
    }
    else if (this.micPermission === 'DENIED') {
      tooltipLabel = this.t('perm_denied.audio');
    }
    else {
      tooltipLabel = this.audioEnabled ? this.t('disable_mic') : this.t('enable_mic');
    }
    return {
      tooltipLabel,
      label,
      icon,
      classList,
      showWarning: hasError || couldNotStart,
      disable: hasError,
    };
  }
  render() {
    if (!this.canProduceAudio) {
      return null;
    }
    const { tooltipLabel, label, icon, classList, showWarning, disable } = this.getState();
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.H, { title: label }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tooltip", { kind: "block", label: tooltipLabel, part: "tooltip", iconPack: this.iconPack, t: this.t }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-controlbar-button", { part: "controlbar-button", icon: icon, label: label, size: this.size, iconPack: this.iconPack, t: this.t, variant: this.variant, class: classList, onClick: this.toggleMic, showWarning: showWarning, disabled: disable }))));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"]
  }; }
};
DyteMicToggle.style = dyteMicToggleCss;




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