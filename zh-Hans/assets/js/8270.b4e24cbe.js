"use strict";
exports.id = 8270;
exports.ids = [8270];
exports.modules = {

/***/ 18270:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_screen_share_toggle: () => (/* binding */ DyteScreenShareToggle)
/* harmony export */ });
/* harmony import */ var _index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65733);
/* harmony import */ var _default_icon_pack_a3227c63_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96633);
/* harmony import */ var _index_29bc5d44_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20336);
/* harmony import */ var _logger_8eaa31ac_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86386);
/* harmony import */ var _store_56e792d0_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46503);






const dyteScreenShareToggleCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:block}";

const deviceCanScreenShare = () => {
  return (typeof navigator !== 'undefined' &&
    typeof navigator.mediaDevices !== 'undefined' &&
    'getDisplayMedia' in navigator.mediaDevices);
};
const DyteScreenShareToggle = class {
  constructor(hostRef) {
    (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.stateUpdate = (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteStateUpdate", 7);
    this.dyteAPIError = (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteAPIError", 7);
    this.selfScreenShareListener = ({ screenShareEnabled }) => {
      this.screenShareEnabled = screenShareEnabled;
      const currentCount = this.screenShareCount + (screenShareEnabled ? 1 : -1);
      this.screenShareCount = Math.max(currentCount, 0);
      this.getState();
      this.meeting.__internals__.logger.info('dyteScreenShare::screenShareUpdate', {
        media: {
          screenshare: {
            enabled: this.screenShareEnabled,
            count: this.screenShareCount,
          },
        },
      });
    };
    this.screenShareListener = ({ screenShareEnabled }) => {
      const currentCount = this.screenShareCount + (screenShareEnabled ? 1 : -1);
      this.screenShareCount = Math.max(currentCount, 0);
      this.getState();
      this.meeting.__internals__.logger.info('dyteScreenShare::screenShareUpdate', {
        media: {
          screenshare: {
            enabled: this.screenShareEnabled,
            count: this.screenShareCount,
          },
        },
      });
    };
    this.participantLeftListener = ({ screenShareEnabled }) => {
      if (screenShareEnabled) {
        // decrement count if participant who left had screenShareEnabled
        // and don't let it go below 0 (just a failsafe)
        this.screenShareCount = Math.max(this.screenShareCount - 1, 0);
        this.getState();
        this.meeting.__internals__.logger.info('dyteScreenShare::screenShareUpdate', {
          media: {
            screenshare: {
              enabled: this.screenShareEnabled,
              count: this.screenShareCount,
            },
          },
        });
      }
    };
    this.selfJoinStateListener = () => {
      this.updateCanProduce(this.meeting);
    };
    this.selfStageLeftListener = () => {
      this.canScreenShare = false;
    };
    this.selfJoinStateRejectedListener = () => {
      this.updateCanProduce(this.meeting);
    };
    this.mediaPermissionUpdateListener = ({ kind, message }) => {
      if (kind === 'screenshare') {
        this.shareScreenPermission = message;
        this.getState();
        if (message === 'COULD_NOT_START') {
          this.dyteAPIError.emit({
            trace: this.t('screenshare.permissions'),
            message: this.t('screenshare.error.unknown'),
          });
        }
        if (this.hasPermissionError()) {
          const permissionModalSettings = {
            enabled: true,
            kind: 'screenshare',
          };
          this.stateUpdate.emit({ activePermissionsMessage: permissionModalSettings });
          _store_56e792d0_js__WEBPACK_IMPORTED_MODULE_3__.s.activePermissionsMessage = permissionModalSettings;
        }
      }
    };
    this.reachedMaxScreenShares = () => {
      // checks if a limit exists, and if limit is reached
      return this.maxScreenShareCount > 0 && this.screenShareCount >= this.maxScreenShareCount;
    };
    this.toggleScreenShare = async () => {
      var _a;
      if (this.screenShareState.disable)
        return;
      if (this.hasPermissionError()) {
        const permissionModalSettings = {
          enabled: true,
          kind: 'screenshare',
        };
        this.stateUpdate.emit({ activePermissionsMessage: permissionModalSettings });
        _store_56e792d0_js__WEBPACK_IMPORTED_MODULE_3__.s.activePermissionsMessage = permissionModalSettings;
        return false;
      }
      const self = (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.self;
      if (this.screenShareEnabled) {
        self.disableScreenShare();
        return;
      }
      if (self == null ||
        !this.canScreenShare ||
        this.reachedMaxScreenShares() ||
        this.hasPermissionError())
        return;
      this.screenShareState = Object.assign(Object.assign({}, this.screenShareState), { disable: true });
      await self.enableScreenShare();
      this.screenShareState = Object.assign(Object.assign({}, this.screenShareState), { disable: false });
      this.stateUpdate.emit({ activeMoreMenu: false });
      _store_56e792d0_js__WEBPACK_IMPORTED_MODULE_3__.s.activeMoreMenu = false;
    };
    this.states = undefined;
    this.variant = 'button';
    this.meeting = undefined;
    this.size = undefined;
    this.iconPack = _default_icon_pack_a3227c63_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.t = (0,_index_29bc5d44_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    this.maxScreenShareCount = -1;
    this.screenShareCount = 0;
    this.screenShareEnabled = false;
    this.canScreenShare = false;
    this.shareScreenPermission = 'NOT_REQUESTED';
    this.screenShareState = {
      tooltipLabel: this.t('screenshare.start'),
      label: this.t('screenshare.start'),
      icon: this.iconPack.share_screen_start,
      classList: {},
      showWarning: false,
      disable: false,
    };
  }
  connectedCallback() {
    if (!deviceCanScreenShare()) {
      _logger_8eaa31ac_js__WEBPACK_IMPORTED_MODULE_4__.l.error('[dyte-screenshare-toggle] Device does not support screensharing.');
      return;
    }
    this.meetingChanged(this.meeting);
  }
  disconnectedCallback() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.participants.joined.removeListener('screenShareUpdate', this.screenShareListener);
    (_b = this.meeting) === null || _b === void 0 ? void 0 : _b.participants.joined.removeListener('participantLeft', this.participantLeftListener);
    (_c = this.meeting) === null || _c === void 0 ? void 0 : _c.self.removeListener('screenShareUpdate', this.selfScreenShareListener);
    (_d = this.meeting) === null || _d === void 0 ? void 0 : _d.self.removeListener('mediaPermissionUpdate', this.mediaPermissionUpdateListener);
    (_e = this.meeting) === null || _e === void 0 ? void 0 : _e.self.removeListener('joinStageRequestAccepted', this.selfJoinStateListener);
    (_f = this.meeting) === null || _f === void 0 ? void 0 : _f.self.removeListener('joinStageRequestRejected', this.selfJoinStateRejectedListener);
    (_g = this.meeting) === null || _g === void 0 ? void 0 : _g.self.removeListener('stageJoined', this.selfJoinStateListener);
    (_h = this.meeting) === null || _h === void 0 ? void 0 : _h.self.removeListener('stageLeft', this.selfStageLeftListener);
    (_j = this.meeting) === null || _j === void 0 ? void 0 : _j.self.removeListener('removedFromStage', this.selfJoinStateListener);
    (_l = (_k = this.meeting) === null || _k === void 0 ? void 0 : _k.stage) === null || _l === void 0 ? void 0 : _l.removeListener('stageStatusUpdate', this.selfJoinStateListener);
  }
  meetingChanged(meeting) {
    if (meeting != null) {
      const { self, stage } = meeting;
      this.updateCanProduce(meeting);
      this.maxScreenShareCount = self.config.maxScreenShareCount;
      this.screenShareEnabled = self.screenShareEnabled;
      let screenShareCount = 0;
      for (const participant of meeting.participants.joined.toArray()) {
        if (participant.screenShareEnabled) {
          screenShareCount++;
        }
      }
      this.screenShareCount = screenShareCount;
      this.getState();
      meeting.__internals__.logger.info('dyteScreenShare::initialise', {
        media: {
          screenshare: {
            enabled: this.screenShareEnabled,
            count: this.screenShareCount,
            maxAllowedCount: this.maxScreenShareCount,
          },
        },
      });
      meeting.participants.joined.addListener('screenShareUpdate', this.screenShareListener);
      meeting.participants.joined.addListener('participantLeft', this.participantLeftListener);
      self.addListener('screenShareUpdate', this.selfScreenShareListener);
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
    const canProduceScreenshare = self.permissions.canProduceScreenshare === 'ALLOWED';
    const isWebinar = meta.viewType === 'WEBINAR';
    const isLiveStream = meta.viewType === 'LIVESTREAM';
    this.canScreenShare = false;
    if (canProduceScreenshare && !isLiveStream) {
      this.canScreenShare = true;
    }
    else if (isWebinar || isLiveStream) {
      if (canProduceScreenshare &&
        stage.status !== 'OFF_STAGE' &&
        stage.status !== 'REQUESTED_TO_JOIN_STAGE')
        this.canScreenShare = true;
      const canRequestScreenshare = self.permissions.canProduceScreenshare === 'CAN_REQUEST';
      // If the peer has approved request to present
      if (canRequestScreenshare &&
        ((isWebinar &&
          (self.webinarStageStatus === 'ON_STAGE' ||
            self.webinarStageStatus === 'ACCEPTED_TO_JOIN_STAGE')) ||
          (isLiveStream &&
            (stage.status === 'ON_STAGE' || stage.status === 'ACCEPTED_TO_JOIN_STAGE')))) {
        this.canScreenShare = true;
      }
    }
  }
  hasPermissionError() {
    return (this.shareScreenPermission === 'SYSTEM_DENIED' || this.shareScreenPermission === 'DENIED');
  }
  getState() {
    let tooltipLabel = '';
    let label = '';
    let icon = '';
    let classList = {};
    const hasError = this.hasPermissionError() && !this.screenShareEnabled;
    const limitReached = this.reachedMaxScreenShares() && !this.screenShareEnabled;
    const couldNotStart = this.shareScreenPermission === 'COULD_NOT_START';
    if (this.screenShareEnabled && !hasError) {
      label = this.t('screenshare.stop');
      icon = this.iconPack.share_screen_stop;
      classList['red-icon'] = true;
    }
    else {
      label = this.t('screenshare.start');
      icon = this.iconPack.share_screen_start;
    }
    if (this.shareScreenPermission === 'SYSTEM_DENIED') {
      tooltipLabel = this.t('perm_sys_denied.screenshare');
      classList['red-icon'] = true;
    }
    else if (this.shareScreenPermission === 'DENIED') {
      tooltipLabel = this.t('perm_denied.screenshare');
      classList['red-icon'] = true;
    }
    else {
      tooltipLabel = label;
    }
    if (limitReached) {
      tooltipLabel = this.t('screenshare.error.max_count');
    }
    if (couldNotStart) {
      tooltipLabel = this.t('screenshare.error.unknown');
    }
    this.screenShareState = {
      tooltipLabel,
      label,
      icon,
      classList,
      disable: hasError || limitReached,
      showWarning: hasError || limitReached || couldNotStart,
    };
  }
  render() {
    if (!deviceCanScreenShare() || !this.canScreenShare) {
      return null;
    }
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.H, { title: this.screenShareState.label }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tooltip", { placement: "top", kind: "block", label: this.screenShareState.tooltipLabel, delay: 600, part: "tooltip", iconPack: this.iconPack, t: this.t }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-controlbar-button", { part: "controlbar-button", size: this.size, iconPack: this.iconPack, t: this.t, variant: this.variant, label: this.screenShareState.label, icon: this.screenShareState.icon, class: this.screenShareState.classList, onClick: this.toggleScreenShare, disabled: this.screenShareState.disable, showWarning: this.screenShareState.showWarning }))));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"]
  }; }
};
DyteScreenShareToggle.style = dyteScreenShareToggleCss;




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