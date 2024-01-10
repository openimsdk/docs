"use strict";
exports.id = 9660;
exports.ids = [9660];
exports.modules = {

/***/ 49660:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_channel_creator: () => (/* binding */ DyteChannelCreator)
/* harmony export */ });
/* harmony import */ var _index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65733);
/* harmony import */ var _pipStore_5d9dd8bf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21237);
/* harmony import */ var _livestream_8c64d895_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24555);
/* harmony import */ var _default_icon_pack_a3227c63_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96633);
/* harmony import */ var _index_29bc5d44_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20336);
/* harmony import */ var _graceful_storage_33bc316d_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60804);
/* harmony import */ var _store_56e792d0_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(46503);








const dyteChannelCreatorCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.scrollbar{scrollbar-width:thin;scrollbar-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))\n    var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar{height:var(--dyte-space-1\\.5, 6px);width:var(--dyte-space-1\\.5, 6px);border-radius:9999px;background-color:var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar-thumb{border-radius:9999px;background-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))}:host{border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity));display:flex;flex-direction:column;width:var(--dyte-space-96, 384px);padding-left:var(--dyte-space-9, 36px);padding-right:var(--dyte-space-9, 36px);padding-top:var(--dyte-space-10, 40px);padding-bottom:var(--dyte-space-10, 40px)}header{margin-bottom:var(--dyte-space-8, 32px);display:flex;align-items:center;gap:var(--dyte-space-2, 8px);font-size:24px;font-weight:600}.channel-name-input{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255));border-radius:var(--dyte-border-radius-sm, 4px);border-width:var(--dyte-border-width-none, 0);border-style:none;padding:var(--dyte-space-3, 12px);font-size:16px;-webkit-appearance:none;-moz-appearance:none;appearance:none;line-height:1.25;outline:2px solid transparent;outline-offset:2px}.channel-name-input:focus{outline-width:2px;outline-color:rgba(var(--dyte-colors-brand-300, 73 124 253) / 0.5)}footer{margin-top:var(--dyte-space-5, 20px);display:flex;justify-content:flex-end}.member{display:flex;align-items:center;gap:var(--dyte-space-1, 4px);padding:var(--dyte-space-2, 8px)}.member dyte-avatar{height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px);font-size:14px;color:rgb(var(--dyte-colors-text-1000, 255 255 255))}.input-container{position:relative;-webkit-appearance:none;-moz-appearance:none;appearance:none;line-height:1.25;outline:2px solid transparent;outline-offset:2px;outline-width:2px;outline-color:rgba(var(--dyte-colors-brand-300, 73 124 253) / 0.5);border-radius:var(--dyte-border-radius-sm, 4px)}.input-container .members{margin:var(--dyte-space-0, 0px);max-height:var(--dyte-space-28, 112px);border-radius:var(--dyte-border-radius-sm, 4px);padding:var(--dyte-space-2, 8px);list-style-type:none;display:flex;flex-wrap:wrap;gap:var(--dyte-space-1, 4px);cursor:text;font-size:16px;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity));overflow-y:auto}.input-container .pill{display:flex;align-items:center;gap:var(--dyte-space-1, 4px);border-radius:var(--dyte-border-radius-sm, 4px);padding:var(--dyte-space-2, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity))}.input-container .pill dyte-avatar{height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px);font-size:14px;color:rgb(var(--dyte-colors-text-on-brand-1000, var(--dyte-colors-text-1000, 255 255 255)))}.input-container .pill span{max-width:var(--dyte-space-32, 128px);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.input-container .pill dyte-icon{height:var(--dyte-space-4, 16px);width:var(--dyte-space-4, 16px);cursor:pointer}.input-container input{width:var(--dyte-space-24, 96px);border-radius:var(--dyte-border-radius-sm, 4px);border-width:var(--dyte-border-width-none, 0);border-style:none;padding:var(--dyte-space-1, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255));outline:2px solid transparent;outline-offset:2px;font-size:16px;line-height:1.25rem}.input-container input.wide-input{width:100%}.search-results{margin:var(--dyte-space-0, 0px);margin-top:var(--dyte-space-1, 4px);max-height:var(--dyte-space-28, 112px);width:100%;padding:var(--dyte-space-0, 0px);position:absolute;list-style-type:none;overflow-y:auto;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity));border-radius:var(--dyte-border-radius-md, 8px);--tw-border-spacing-x:var(--dyte-space-2, 8px);--tw-border-spacing-y:var(--dyte-space-2, 8px);border-spacing:var(--tw-border-spacing-x) var(--tw-border-spacing-y);border-style:solid;border-color:rgba(var(--dyte-colors-brand-300, 73 124 253) / 0.5)}.search-results .member{cursor:pointer}.search-results .member dyte-avatar{color:rgb(var(--dyte-colors-text-on-brand-1000, var(--dyte-colors-text-1000, 255 255 255)))}.search-results .member:hover,.search-results .member.selected{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-700, 2 70 253) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-on-brand-1000, var(--dyte-colors-text-1000, 255 255 255)))}";

const DyteChannelCreator = class {
  constructor(hostRef) {
    (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.stateUpdate = (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteStateUpdate", 7);
    this.switchChannel = (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "switchChannel", 7);
    this.allMembers = new Map();
    this.inputTextRef = null;
    this.searchInputTextRef = null;
    this.focusOnSearch = (selectText = false) => {
      this.focusedMemberIndex = -1;
      (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.w)(() => {
        var _a, _b;
        (_a = this.searchInputTextRef) === null || _a === void 0 ? void 0 : _a.focus();
        if (selectText)
          (_b = this.searchInputTextRef) === null || _b === void 0 ? void 0 : _b.select();
      });
    };
    this.onClickHandler = async () => {
      if (this.channelName.length === 0)
        return;
      if (this.step === 1) {
        const members = this.meeting.participants.all;
        const selfId = this.meeting.self.userId;
        const nonSelfMembers = members.filter((member) => member.id !== selfId);
        nonSelfMembers.forEach((member) => this.allMembers.set(member.id, member));
        this.step = 2;
        this.focusOnSearch();
        return;
      }
      // step 2 - add members and create channel
      await this.createChannel();
    };
    this.createChannel = async () => {
      const members = Array.from(this.selectedMemberIds);
      const newChannel = await this.meeting.chat.createChannel(this.channelName, members, {
        displayPictureUrl: '',
        visibility: 'public',
        isDirectMessage: false,
      });
      this.switchChannel.emit(newChannel.id);
      this.stateUpdate.emit({ activeChannelCreator: false });
      _store_56e792d0_js__WEBPACK_IMPORTED_MODULE_6__.s.activeChannelCreator = false;
    };
    this.onMemberAdd = (id) => {
      this.showAllMembersList = false;
      this.selectedMemberIds.add(id);
      this.searchQuery = '';
      this.focusOnSearch();
    };
    this.keyDownHandler = (e, filteredMembers) => {
      if (e.key === 'ArrowDown') {
        this.focusedMemberIndex = Math.min(this.focusedMemberIndex + 1, filteredMembers.length - 1);
      }
      else if (e.key === 'ArrowUp') {
        if (this.focusedMemberIndex === -1)
          return;
        if (this.focusedMemberIndex === 0) {
          this.focusOnSearch(true);
          return;
        }
        this.focusedMemberIndex = Math.max(this.focusedMemberIndex - 1, 0);
      }
      else if (e.key === 'Enter') {
        this.onMemberAdd(filteredMembers[this.focusedMemberIndex].id);
      }
      else if (e.key === 'Backspace') {
        if (this.searchQuery.length !== 0)
          return;
        if (this.selectedMemberIds.size === 0)
          return;
        const lastMemberId = Array.from(this.selectedMemberIds.values()).at(-1);
        this.selectedMemberIds.delete(lastMemberId);
        (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.f)(this.$el);
      }
    };
    this.renderMemberSelector = () => {
      const filteredMembers = Array.from(this.allMembers.values()).filter((member) => !this.selectedMemberIds.has(member.id) &&
        member.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
      const selectedMembers = Array.from(this.selectedMemberIds.values()).map((id) => this.allMembers.get(id));
      const disableInput = this.selectedMemberIds.size === this.allMembers.size;
      return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "input-container" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul", { class: "members", onClick: () => {
          var _a;
          (_a = this.searchInputTextRef) === null || _a === void 0 ? void 0 : _a.focus();
        } }, selectedMembers.map((member) => ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("li", { class: "pill" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-avatar", { participant: {
          name: member.name,
          picture: member.picture,
        }, size: "sm" }), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, member.name), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.dismiss, iconPack: this.iconPack, t: this.t, onClick: () => {
          this.selectedMemberIds.delete(member.id);
          (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.f)(this.$el);
          this.focusOnSearch();
        } })))), !disableInput && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("input", { type: "text", ref: (el) => (this.searchInputTextRef = el), value: this.searchQuery, placeholder: this.selectedMemberIds.size === 0 ? this.t('chat.member_name') : '', class: {
          'wide-input': this.selectedMemberIds.size === 0,
        }, onInput: (e) => {
          this.searchQuery = e.target.value.trim();
        }, onClick: () => {
          this.showAllMembersList = !this.showAllMembersList;
        }, onKeyDown: (e) => this.keyDownHandler(e, filteredMembers) }))), (this.searchQuery.length !== 0 || this.showAllMembersList) && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul", { class: "search-results" }, filteredMembers.map((member, index) => ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("li", { class: { member: true, selected: index === this.focusedMemberIndex }, onClick: () => this.onMemberAdd(member.id), ref: ($li) => {
          if (index === this.focusedMemberIndex) {
            (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.w)(() => {
              if ($li)
                $li.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
            });
          }
        } }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-avatar", { participant: {
          name: member.name,
          picture: member.picture,
        }, size: "sm" }), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, member.name)))), filteredMembers.length === 0 && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("li", { class: "member" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, this.t('chat.error.empty_results'))))))));
    };
    this.meeting = undefined;
    this.t = (0,_index_29bc5d44_js__WEBPACK_IMPORTED_MODULE_4__.u)();
    this.iconPack = _default_icon_pack_a3227c63_js__WEBPACK_IMPORTED_MODULE_3__.d;
    this.channelName = '';
    this.searchQuery = '';
    this.step = 1;
    this.loading = false;
    this.selectedMemberIds = new Set();
    this.focusedMemberIndex = -1;
    this.showAllMembersList = false;
  }
  componentDidLoad() {
    var _a;
    (_a = this.inputTextRef) === null || _a === void 0 ? void 0 : _a.focus();
  }
  render() {
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("header", null, this.step === 1 ? this.t('chat.new_channel') : this.t('chat.add_members')), this.step === 1 && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("input", { class: "channel-name-input", type: "text", placeholder: this.t('chat.channel_name'), ref: (el) => (this.inputTextRef = el), onInput: (e) => {
        this.channelName = e.target.value.trim();
      } })), this.step === 2 && this.renderMemberSelector(), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("footer", null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { kind: "button", iconPack: this.iconPack, t: this.t, size: "lg", disabled: this.channelName.length === 0, onClick: this.onClickHandler }, this.step === 1 ? this.t('chat.add_members') : this.t('create')))));
  }
  get $el() { return (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
DyteChannelCreator.style = dyteChannelCreatorCss;




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