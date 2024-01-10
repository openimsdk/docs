"use strict";
exports.id = 9680;
exports.ids = [9680];
exports.modules = {

/***/ 69680:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_breakout_rooms_manager: () => (/* binding */ DyteBreakoutRoomsManager)
/* harmony export */ });
/* harmony import */ var _index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65733);
/* harmony import */ var _index_29bc5d44_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20336);
/* harmony import */ var _default_icon_pack_a3227c63_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96633);
/* harmony import */ var _store_56e792d0_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46503);
/* harmony import */ var _breakout_rooms_def907fe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19656);
/* harmony import */ var _flags_33c46e09_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(27637);
/* harmony import */ var _livestream_8c64d895_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24555);








var __classPrivateFieldSet = ( false) || function (receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = ( false) || function (receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __rest = ( false) || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
var _DraftStateManager_instances, _DraftStateManager_hasLocalChanges, _DraftStateManager_state, _DraftStateManager_participantsNewMeetingMap, _DraftStateManager_participantsOldMeetingMap, _DraftStateManager_meetingParticipantsMap, _DraftStateManager_allParticipantsMap, _DraftStateManager_allMeetingsMap, _DraftStateManager_meetingsToUpdate, _DraftStateManager_meetingsToDelete, _DraftStateManager_init, _DraftStateManager_addNewMeetingToState, _DraftStateManager_addNewParticipantToState, _DraftStateManager_replaceDraftMeetingIds, _DraftStateManager_getMeetingParticipants;
class DraftStateManager {
  constructor() {
    _DraftStateManager_instances.add(this);
    _DraftStateManager_hasLocalChanges.set(this, false);
    _DraftStateManager_state.set(this, void 0);
    _DraftStateManager_participantsNewMeetingMap.set(this, void 0);
    _DraftStateManager_participantsOldMeetingMap.set(this, void 0);
    _DraftStateManager_meetingParticipantsMap.set(this, void 0);
    _DraftStateManager_allParticipantsMap.set(this, void 0);
    _DraftStateManager_allMeetingsMap.set(this, void 0);
    _DraftStateManager_meetingsToUpdate.set(this, void 0);
    _DraftStateManager_meetingsToDelete.set(this, void 0);
  }
  get hasLocalChanges() {
    return __classPrivateFieldGet(this, _DraftStateManager_hasLocalChanges, "f");
  }
  get currentState() {
    let parentMeeting;
    let meetings = [];
    Array.from(__classPrivateFieldGet(this, _DraftStateManager_meetingParticipantsMap, "f").keys()).forEach((meetingId) => {
      const meeting = __classPrivateFieldGet(this, _DraftStateManager_allMeetingsMap, "f").get(meetingId);
      if (meeting.isParent) {
        parentMeeting = Object.assign(Object.assign({}, meeting), { participants: __classPrivateFieldGet(this, _DraftStateManager_instances, "m", _DraftStateManager_getMeetingParticipants).call(this, meetingId) });
      }
      else {
        meetings.push(Object.assign(Object.assign({}, meeting), { participants: __classPrivateFieldGet(this, _DraftStateManager_instances, "m", _DraftStateManager_getMeetingParticipants).call(this, meetingId) }));
      }
    });
    return {
      parentMeeting,
      meetings,
    };
  }
  get allConnectedMeetings() {
    return this.currentState.meetings.sort((a, b) => a.title.localeCompare(b.title));
  }
  get allParticipants() {
    return Array.from(__classPrivateFieldGet(this, _DraftStateManager_allParticipantsMap, "f").values());
  }
  get unassignedParticipants() {
    return __classPrivateFieldGet(this, _DraftStateManager_instances, "m", _DraftStateManager_getMeetingParticipants).call(this, __classPrivateFieldGet(this, _DraftStateManager_state, "f").parentMeeting.id);
  }
  /**
   * get participants of a meeting
   */
  getParticipantsForMeeting(meetingId) {
    return __classPrivateFieldGet(this, _DraftStateManager_instances, "m", _DraftStateManager_getMeetingParticipants).call(this, meetingId);
  }
  /**
   * add a new connected meeting
   */
  addNewMeeting() {
    __classPrivateFieldSet(this, _DraftStateManager_hasLocalChanges, true, "f");
    const _a = (0,_breakout_rooms_def907fe_js__WEBPACK_IMPORTED_MODULE_4__.a)(), meeting = __rest(_a, ["participants"]);
    __classPrivateFieldGet(this, _DraftStateManager_instances, "m", _DraftStateManager_addNewMeetingToState).call(this, Object.assign(Object.assign({}, meeting), { isParent: false }));
    return meeting;
  }
  /**
   * add multiple new connected meetings
   */
  addNewMeetings(count) {
    return Array.from({ length: count }).map(() => this.addNewMeeting());
  }
  /**
   * update a meeting's title
   */
  updateMeetingTitle(meetingId, newTitle) {
    __classPrivateFieldGet(this, _DraftStateManager_allMeetingsMap, "f").get(meetingId).title = newTitle;
    if (!(0,_breakout_rooms_def907fe_js__WEBPACK_IMPORTED_MODULE_4__.i)(meetingId)) {
      __classPrivateFieldGet(this, _DraftStateManager_meetingsToUpdate, "f").add(meetingId);
    }
  }
  /**
   * deleteMeeting
   */
  deleteMeeting(meetingId) {
    __classPrivateFieldSet(this, _DraftStateManager_hasLocalChanges, true, "f");
    const meeting = __classPrivateFieldGet(this, _DraftStateManager_allMeetingsMap, "f").get(meetingId);
    const participants = __classPrivateFieldGet(this, _DraftStateManager_instances, "m", _DraftStateManager_getMeetingParticipants).call(this, meeting.id).map(_breakout_rooms_def907fe_js__WEBPACK_IMPORTED_MODULE_4__.p);
    this.assignParticipantsToMeeting(participants, __classPrivateFieldGet(this, _DraftStateManager_state, "f").parentMeeting.id);
    __classPrivateFieldGet(this, _DraftStateManager_allMeetingsMap, "f").delete(meeting.id);
    __classPrivateFieldGet(this, _DraftStateManager_meetingParticipantsMap, "f").delete(meeting.id);
    if (!(0,_breakout_rooms_def907fe_js__WEBPACK_IMPORTED_MODULE_4__.i)(meeting.id)) {
      __classPrivateFieldGet(this, _DraftStateManager_meetingsToDelete, "f").add(meeting.id);
    }
  }
  /**
   * assign participants to a meeting
   */
  assignParticipantsToMeeting(customParticipantIds, destinationMeetingId) {
    __classPrivateFieldSet(this, _DraftStateManager_hasLocalChanges, true, "f");
    customParticipantIds.forEach((participantId) => {
      const currentMeetingId = __classPrivateFieldGet(this, _DraftStateManager_participantsNewMeetingMap, "f").get(participantId);
      __classPrivateFieldGet(this, _DraftStateManager_meetingParticipantsMap, "f").get(currentMeetingId).delete(participantId);
      __classPrivateFieldGet(this, _DraftStateManager_meetingParticipantsMap, "f").get(destinationMeetingId).add(participantId);
      __classPrivateFieldGet(this, _DraftStateManager_participantsNewMeetingMap, "f").set(participantId, destinationMeetingId);
    });
    return this.currentState;
  }
  /**
   * assign participants randomly
   */
  assignParticipantsRandomly() {
    const splits = (0,_breakout_rooms_def907fe_js__WEBPACK_IMPORTED_MODULE_4__.s)(this.unassignedParticipants, this.allConnectedMeetings.length);
    this.allConnectedMeetings.forEach((meeting, index) => {
      const toAssign = splits[index];
      if (toAssign && toAssign.length !== 0) {
        this.assignParticipantsToMeeting(toAssign.map((participant) => participant.customParticipantId), meeting.id);
      }
    });
    return this.currentState;
  }
  /**
   * unassign participants
   */
  unassignParticipants(customParticipantIds) {
    const destinationMeetingId = __classPrivateFieldGet(this, _DraftStateManager_state, "f").parentMeeting.id;
    return this.assignParticipantsToMeeting(customParticipantIds, destinationMeetingId);
  }
  /**
   * unassign all participants
   */
  unassignAllParticipants() {
    const destinationMeetingId = __classPrivateFieldGet(this, _DraftStateManager_state, "f").parentMeeting.id;
    const customParticipantIds = this.allParticipants.map(_breakout_rooms_def907fe_js__WEBPACK_IMPORTED_MODULE_4__.p);
    return this.assignParticipantsToMeeting(customParticipantIds, destinationMeetingId);
  }
  /**
   * update current state
   */
  updateCurrentState(state) {
    if (!__classPrivateFieldGet(this, _DraftStateManager_hasLocalChanges, "f")) {
      __classPrivateFieldGet(this, _DraftStateManager_instances, "m", _DraftStateManager_init).call(this, state);
    }
    [state.parentMeeting, ...state.meetings].forEach((meeting, index) => {
      const draftMeeting = Object.assign(Object.assign({}, meeting), { isParent: index === 0 });
      __classPrivateFieldGet(this, _DraftStateManager_instances, "m", _DraftStateManager_addNewMeetingToState).call(this, draftMeeting);
      meeting.participants.forEach((participant) => {
        __classPrivateFieldGet(this, _DraftStateManager_instances, "m", _DraftStateManager_addNewParticipantToState).call(this, participant, draftMeeting);
      });
    });
  }
  get meetingsToCreate() {
    return this.allConnectedMeetings
      .filter((meeting) => (0,_breakout_rooms_def907fe_js__WEBPACK_IMPORTED_MODULE_4__.i)(meeting.id))
      .map(({ id, title }) => ({ id, title }));
  }
  get meetingsToUpdate() {
    return this.allConnectedMeetings
      .filter((meeting) => __classPrivateFieldGet(this, _DraftStateManager_meetingsToUpdate, "f").has(meeting.id))
      .map(({ id, title }) => ({ id, title }));
  }
  get meetingsToDelete() {
    return Array.from(__classPrivateFieldGet(this, _DraftStateManager_meetingsToDelete, "f"));
  }
  get participantsToMove() {
    // gather participants
    const moveMap = new Map();
    Array.from(__classPrivateFieldGet(this, _DraftStateManager_participantsNewMeetingMap, "f").keys()).forEach((participantId) => {
      const sourceMeetingId = __classPrivateFieldGet(this, _DraftStateManager_participantsOldMeetingMap, "f").get(participantId);
      const destinationMeetingId = __classPrivateFieldGet(this, _DraftStateManager_participantsNewMeetingMap, "f").get(participantId);
      if (sourceMeetingId === destinationMeetingId)
        return;
      const key = `${sourceMeetingId}__${destinationMeetingId}`;
      if (!moveMap.has(key)) {
        moveMap.set(key, []);
      }
      const participantDetails = __classPrivateFieldGet(this, _DraftStateManager_allParticipantsMap, "f").get(participantId);
      moveMap.get(key).push(participantDetails.id);
    });
    return Array.from(moveMap.keys()).map((key) => {
      const [sourceMeetingId, destinationMeetingId] = key.split('__');
      return {
        sourceMeetingId,
        destinationMeetingId,
        participantIds: moveMap.get(key),
      };
    });
  }
  async applyChanges(meeting) {
    // create new rooms
    const createMeetingsPromise = this.meetingsToCreate.length !== 0
      ? meeting.connectedMeetings.createMeetings(this.meetingsToCreate)
      : Promise.resolve([]);
    // update old rooms titles
    const updateMeetingsPromise = this.meetingsToUpdate.length !== 0
      ? meeting.connectedMeetings.updateMeetings(this.meetingsToUpdate)
      : Promise.resolve();
    const [createMeetingsResponse] = await Promise.all([
      createMeetingsPromise,
      updateMeetingsPromise,
    ]);
    // replace temporary ids
    if (createMeetingsResponse) {
      createMeetingsResponse.forEach((meeting) => {
        this.meetingsToCreate.forEach((draftMeeting) => {
          if (draftMeeting.title === meeting.title) {
            __classPrivateFieldGet(this, _DraftStateManager_instances, "m", _DraftStateManager_replaceDraftMeetingIds).call(this, __classPrivateFieldGet(this, _DraftStateManager_allMeetingsMap, "f").get(draftMeeting.id), meeting.id);
          }
        });
      });
    }
    // move participants (no async)
    if (this.participantsToMove.length !== 0) {
      this.participantsToMove.forEach(({ sourceMeetingId, destinationMeetingId, participantIds }) => {
        meeting.connectedMeetings.moveParticipants(sourceMeetingId, destinationMeetingId, participantIds);
      });
    }
    // delete rooms
    if (this.meetingsToDelete.length !== 0) {
      meeting.connectedMeetings.deleteMeetings(this.meetingsToDelete);
    }
  }
  /**
   * discard local changes
   */
  discardChanges() {
    __classPrivateFieldSet(this, _DraftStateManager_hasLocalChanges, false, "f");
    this.updateCurrentState(__classPrivateFieldGet(this, _DraftStateManager_state, "f"));
    return this.currentState;
  }
}
_DraftStateManager_hasLocalChanges = new WeakMap(), _DraftStateManager_state = new WeakMap(), _DraftStateManager_participantsNewMeetingMap = new WeakMap(), _DraftStateManager_participantsOldMeetingMap = new WeakMap(), _DraftStateManager_meetingParticipantsMap = new WeakMap(), _DraftStateManager_allParticipantsMap = new WeakMap(), _DraftStateManager_allMeetingsMap = new WeakMap(), _DraftStateManager_meetingsToUpdate = new WeakMap(), _DraftStateManager_meetingsToDelete = new WeakMap(), _DraftStateManager_instances = new WeakSet(), _DraftStateManager_init = function _DraftStateManager_init(state) {
  __classPrivateFieldSet(this, _DraftStateManager_state, state, "f");
  __classPrivateFieldSet(this, _DraftStateManager_allMeetingsMap, new Map(), "f");
  __classPrivateFieldSet(this, _DraftStateManager_allParticipantsMap, new Map(), "f");
  __classPrivateFieldSet(this, _DraftStateManager_meetingsToUpdate, new Set(), "f");
  __classPrivateFieldSet(this, _DraftStateManager_meetingsToDelete, new Set(), "f");
  __classPrivateFieldSet(this, _DraftStateManager_meetingParticipantsMap, new Map(), "f");
  __classPrivateFieldSet(this, _DraftStateManager_participantsNewMeetingMap, new Map(), "f");
  __classPrivateFieldSet(this, _DraftStateManager_participantsOldMeetingMap, new Map(), "f");
  __classPrivateFieldSet(this, _DraftStateManager_participantsOldMeetingMap, new Map(), "f");
  __classPrivateFieldGet(this, _DraftStateManager_state, "f").parentMeeting.participants.forEach((participant) => {
    __classPrivateFieldGet(this, _DraftStateManager_participantsOldMeetingMap, "f").set((0,_breakout_rooms_def907fe_js__WEBPACK_IMPORTED_MODULE_4__.p)(participant), __classPrivateFieldGet(this, _DraftStateManager_state, "f").parentMeeting.id);
  });
  __classPrivateFieldGet(this, _DraftStateManager_state, "f").meetings.forEach((meeting) => {
    meeting.participants.forEach((participant) => {
      __classPrivateFieldGet(this, _DraftStateManager_participantsOldMeetingMap, "f").set((0,_breakout_rooms_def907fe_js__WEBPACK_IMPORTED_MODULE_4__.p)(participant), meeting.id);
    });
  });
}, _DraftStateManager_addNewMeetingToState = function _DraftStateManager_addNewMeetingToState(meeting) {
  if (!__classPrivateFieldGet(this, _DraftStateManager_allMeetingsMap, "f").has(meeting.id)) {
    __classPrivateFieldGet(this, _DraftStateManager_allMeetingsMap, "f").set(meeting.id, meeting);
    __classPrivateFieldGet(this, _DraftStateManager_meetingParticipantsMap, "f").set(meeting.id, new Set());
  }
}, _DraftStateManager_addNewParticipantToState = function _DraftStateManager_addNewParticipantToState(participant, meeting) {
  if (__classPrivateFieldGet(this, _DraftStateManager_allParticipantsMap, "f").has((0,_breakout_rooms_def907fe_js__WEBPACK_IMPORTED_MODULE_4__.p)(participant))) {
    return;
  }
  __classPrivateFieldGet(this, _DraftStateManager_allParticipantsMap, "f").set((0,_breakout_rooms_def907fe_js__WEBPACK_IMPORTED_MODULE_4__.p)(participant), participant);
  __classPrivateFieldGet(this, _DraftStateManager_participantsNewMeetingMap, "f").set((0,_breakout_rooms_def907fe_js__WEBPACK_IMPORTED_MODULE_4__.p)(participant), meeting.id);
  __classPrivateFieldGet(this, _DraftStateManager_meetingParticipantsMap, "f").get(meeting.id).add((0,_breakout_rooms_def907fe_js__WEBPACK_IMPORTED_MODULE_4__.p)(participant));
}, _DraftStateManager_replaceDraftMeetingIds = function _DraftStateManager_replaceDraftMeetingIds(draftMeeting, realId) {
  const draftId = draftMeeting.id;
  __classPrivateFieldGet(this, _DraftStateManager_instances, "m", _DraftStateManager_addNewMeetingToState).call(this, Object.assign(Object.assign({}, draftMeeting), { id: realId }));
  __classPrivateFieldGet(this, _DraftStateManager_allMeetingsMap, "f").delete(draftId);
  const participantSet = __classPrivateFieldGet(this, _DraftStateManager_meetingParticipantsMap, "f").get(draftId);
  __classPrivateFieldGet(this, _DraftStateManager_meetingParticipantsMap, "f").set(realId, participantSet);
  __classPrivateFieldGet(this, _DraftStateManager_meetingParticipantsMap, "f").delete(draftId);
  Array.from(__classPrivateFieldGet(this, _DraftStateManager_participantsNewMeetingMap, "f").keys()).forEach((participantId) => {
    if (__classPrivateFieldGet(this, _DraftStateManager_participantsNewMeetingMap, "f").get(participantId) === draftId) {
      __classPrivateFieldGet(this, _DraftStateManager_participantsNewMeetingMap, "f").set(participantId, realId);
    }
  });
}, _DraftStateManager_getMeetingParticipants = function _DraftStateManager_getMeetingParticipants(meetingId) {
  const participantIds = Array.from(__classPrivateFieldGet(this, _DraftStateManager_meetingParticipantsMap, "f").get(meetingId));
  return participantIds.map((id) => __classPrivateFieldGet(this, _DraftStateManager_allParticipantsMap, "f").get(id));
};

const dyteBreakoutRoomsManagerCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.color-brand{--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-text-opacity))}.color-danger{--tw-text-opacity:1;color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-text-opacity))}.loading-content{height:var(--dyte-space-60, 240px);width:var(--dyte-space-96, 384px);padding:var(--dyte-space-9, 36px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity));display:flex;align-items:center;justify-content:center}.room-config{overflow:hidden;border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity));display:flex;flex-direction:column;width:var(--dyte-space-96, 384px);padding-left:var(--dyte-space-9, 36px);padding-right:var(--dyte-space-9, 36px);padding-top:var(--dyte-space-10, 40px);padding-bottom:var(--dyte-space-10, 40px)}header{margin-bottom:var(--dyte-space-8, 32px);display:flex;align-items:center;gap:var(--dyte-space-2, 8px);font-size:24px;font-weight:600}header dyte-icon{height:var(--dyte-space-7, 28px);width:var(--dyte-space-7, 28px)}.create-room{margin-bottom:var(--dyte-space-4, 16px);display:flex;align-items:center;gap:var(--dyte-space-3, 12px);width:100%}.create-room p{margin:var(--dyte-space-0, 0px);margin-bottom:var(--dyte-space-1, 4px);font-size:16px}.distribution-hint{margin-bottom:var(--dyte-space-8, 32px);font-size:14px;font-weight:400;color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52))}.distribution-hint em{font-style:normal;color:rgb(var(--dyte-colors-text-800, 255 255 255 / 0.76))}footer{display:flex;flex-direction:row;vertical-align:middle;justify-content:center}footer dyte-button{width:100%;color:rgb(var(--dyte-colors-text-1000, 255 255 255))}label{margin-bottom:var(--dyte-space-3, 12px);font-weight:400;color:rgb(var(--dyte-colors-text-1000, 255 255 255));opacity:0.4}.participant-config-wrapper{width:850px;height:595px;max-width:100%;max-height:100%;border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity));display:flex;flex-direction:column}.participant-config-actions{display:flex;justify-content:space-between;padding-left:var(--dyte-space-8, 32px);padding-right:var(--dyte-space-8, 32px);padding-top:var(--dyte-space-5, 20px);padding-bottom:var(--dyte-space-5, 20px);border-bottom-right-radius:var(--dyte-border-radius-md, 8px);border-bottom-left-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity))}.participant-config{display:flex;flex-grow:1;flex-direction:row;overflow:hidden}aside{box-sizing:border-box;display:flex;width:var(--dyte-space-96, 384px);flex-grow:1;flex-direction:column;padding-left:var(--dyte-space-8, 32px);padding-right:var(--dyte-space-4, 16px);border-right-width:var(--dyte-border-width-sm, 1px);border-top-width:var(--dyte-border-width-none, 0);border-bottom-width:var(--dyte-border-width-none, 0);border-left-width:var(--dyte-border-width-none, 0);border-style:solid;--tw-border-opacity:1;border-right-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-border-opacity))}aside header{margin-bottom:var(--dyte-space-4, 16px);width:100%;padding-left:var(--dyte-space-0, 0px);padding-right:var(--dyte-space-0, 0px);padding-top:var(--dyte-space-8, 32px);font-size:20px;font-weight:500;line-height:2rem}.shuffle-button{display:flex;flex-direction:row;align-items:center}.shuffle-button dyte-icon{height:var(--dyte-space-8, 32px)}.participants-assign-actions{display:flex;flex-direction:row;align-items:center;justify-content:space-between;font-size:14px;padding-left:var(--dyte-space-8, 32px);padding-right:var(--dyte-space-2, 8px);margin-left:calc(var(--dyte-space-8, 32px) * -1);margin-right:calc(var(--dyte-space-4, 16px) * -1);padding-top:var(--dyte-space-0\\.5, 2px);padding-bottom:var(--dyte-space-0\\.5, 2px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity))}.participants-assign-actions .deselect-button{height:var(--dyte-space-6, 24px)}.participants-assign-actions .deselect-button:hover{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity))}.assign-rooms{padding:var(--dyte-space-8, 32px);display:flex;width:100%;flex-direction:column}.assign-rooms .disabled{opacity:0.2}.assign-rooms .back{display:flex;cursor:pointer;flex-direction:row;align-items:center;justify-content:flex-start;padding:var(--dyte-space-4, 16px);padding-bottom:var(--dyte-space-0, 0px);font-size:14px;color:rgb(var(--dyte-colors-text-800, 255 255 255 / 0.76))}.assign-rooms .back dyte-icon{height:var(--dyte-space-5, 20px)}.assign-rooms .row{display:flex;flex-direction:row;align-items:center;justify-content:flex-start;gap:var(--dyte-space-3, 12px);margin-bottom:var(--dyte-space-4, 16px);font-size:14px}.assign-rooms .row-header{margin:var(--dyte-space-0, 0px);font-size:16px;line-height:2rem}.assign-rooms .cta-buttons{display:flex;align-items:center;justify-content:flex-start;gap:var(--dyte-space-2, 8px)}.assign-rooms .cta-buttons dyte-button div{display:flex;flex-direction:row;align-items:center}.assign-rooms .cta-buttons dyte-button div dyte-icon{height:var(--dyte-space-4, 16px);width:var(--dyte-space-4, 16px)}.rooms{margin-bottom:var(--dyte-space-2, 8px);padding-right:var(--dyte-space-1, 4px);display:flex;flex-grow:1;flex-direction:column;gap:var(--dyte-space-2, 8px);overflow-y:auto;max-height:500px}.rooms::-webkit-scrollbar{width:var(--dyte-space-1\\.5, 6px);border-radius:var(--dyte-border-radius-sm, 4px)}.rooms::-webkit-scrollbar-thumb{border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity))}.rooms::-webkit-scrollbar-track{border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity))}.breakout-actions{display:flex;flex-direction:row;align-items:center;justify-content:flex-end;gap:var(--dyte-space-2, 8px)}.breakout-actions .start-breakout-button{color:rgb(var(--dyte-colors-text-1000, 255 255 255))}.breakout-actions .close-breakout-button{color:rgb(var(--dyte-colors-text-1000, 255 255 255));--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-bg-opacity))}.breakout-actions .update-breakout-button{background-color:transparent;--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-text-opacity));border-width:var(--dyte-border-width-sm, 1px);border-style:solid;--tw-border-opacity:1;border-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-border-opacity))}.status-bar{display:flex;align-items:center;font-size:14px;color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64));width:var(--dyte-space-80, 320px)}.ephemeral-status{--tw-text-opacity:1;color:rgba(var(--dyte-colors-success, 98 165 4) / var(--tw-text-opacity))}.ephemeral-status dyte-icon{height:var(--dyte-space-4, 16px);width:var(--dyte-space-4, 16px)}.room-switcher-container{border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity));width:468px;padding:var(--dyte-space-8, 32px)}.add-room-jumbo-btn div{display:flex;align-items:center;gap:var(--dyte-space-1, 4px);font-size:14px;--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-text-opacity))}.add-room-jumbo-btn div dyte-icon{height:var(--dyte-space-4, 16px);width:var(--dyte-space-4, 16px)}.br-primary-btn:not([disabled]){--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity))}.br-primary-btn:not([disabled]):hover{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-600, 13 81 253) / var(--tw-bg-opacity))}.br-secondary-btn:not([disabled]){--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity))}.br-secondary-btn:not([disabled]):hover{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity))}";

const MIN_ROOMS = 1;
const DyteBreakoutRoomsManager = class {
  constructor(hostRef) {
    (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.stateUpdate = (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteStateUpdate", 7);
    this.updateLocalState = (payload) => {
      this.stateManager.updateCurrentState(payload);
      this.draftState = this.stateManager.currentState;
      if (this.meeting.connectedMeetings.isActive) {
        this.roomConfig = Object.assign(Object.assign({}, this.roomConfig), { mode: 'edit' });
      }
      if (this.roomConfig.mode === 'create' && !this.meeting.connectedMeetings.isActive) {
        (0,_breakout_rooms_def907fe_js__WEBPACK_IMPORTED_MODULE_4__.r)();
      }
      if (['edit', 'view'].includes(this.roomConfig.mode)) {
        this.roomConfig = Object.assign(Object.assign({}, this.roomConfig), { rooms: payload.meetings.length, step: 'participants-config' });
        this.selectedParticipants = [];
      }
    };
    this.onAddNewRoom = () => {
      this.stateManager.addNewMeeting();
      this.draftState = this.stateManager.currentState;
      this.selectorRef.scrollTo({ top: this.selectorRef.scrollHeight, behavior: 'smooth' });
    };
    this.onRoomUpdate = (event) => {
      const { detail } = event;
      this.stateManager.updateMeetingTitle(detail.id, detail.title);
      this.draftState = this.stateManager.currentState;
    };
    this.onRoomDelete = (id) => {
      const toDelete = this.stateManager.allConnectedMeetings.find((meeting) => meeting.id === id);
      if (toDelete) {
        this.stateManager.deleteMeeting(id);
        this.draftState = this.stateManager.currentState;
      }
    };
    this.unassignParticipant = (id) => {
      this.stateManager.unassignParticipants([id]);
      this.draftState = this.stateManager.currentState;
    };
    this.onUnassignAll = () => {
      this.stateManager.unassignAllParticipants();
      this.draftState = this.stateManager.currentState;
    };
    this.assignParticipantsToRoom = (destinationMeetingId) => {
      if (this.selectedParticipants.length === 0 || this.assigningParticipants == false)
        return;
      this.stateManager.assignParticipantsToMeeting(this.selectedParticipants, destinationMeetingId);
      this.draftState = this.stateManager.currentState;
      this.selectedParticipants = [];
      this.assigningParticipants = false;
      this.setEphemeralStatus(this.t('breakout_rooms.ephemeral_status.participants_assigned'));
    };
    this.handleClose = (stateUpdate, store) => {
      stateUpdate.emit({
        activeBreakoutRoomsManager: {
          active: true,
        },
      });
      store.activeBreakoutRoomsManager = {
        active: true,
      };
    };
    this.enableConfirmationModal = (modalType = 'start-breakout') => {
      let activeConfirmationModal = {
        active: true,
        header: 'breakout_rooms.confirm_modal.start_breakout.header',
        content: 'breakout_rooms.confirm_modal.start_breakout.content',
        variant: 'primary',
        cancelText: 'breakout_rooms.confirm_modal.start_breakout.cancelText',
        ctaText: 'breakout_rooms.confirm_modal.start_breakout.ctaText',
        onClick: () => this.applyChanges(),
        onClose: this.handleClose,
      };
      if (modalType === 'close-breakout') {
        activeConfirmationModal = {
          active: true,
          header: 'breakout_rooms.confirm_modal.close_breakout.header',
          content: 'breakout_rooms.confirm_modal.close_breakout.content',
          variant: 'danger',
          cancelText: 'cancel',
          ctaText: 'breakout_rooms.confirm_modal.close_breakout.ctaText',
          onClick: () => this.closeBreakout(),
          onClose: this.handleClose,
        };
      }
      this.stateUpdate.emit({
        activeBreakoutRoomsManager: { active: false },
        activeConfirmationModal,
      });
      _store_56e792d0_js__WEBPACK_IMPORTED_MODULE_3__.s.activeBreakoutRoomsManager = { active: false };
      _store_56e792d0_js__WEBPACK_IMPORTED_MODULE_3__.s.activeConfirmationModal = activeConfirmationModal;
    };
    this.close = () => {
      var _a;
      this.stateManager.discardChanges();
      (_a = this.stateUpdate) === null || _a === void 0 ? void 0 : _a.emit({
        activeBreakoutRoomsManager: {
          active: false,
        },
      });
      _store_56e792d0_js__WEBPACK_IMPORTED_MODULE_3__.s.activeBreakoutRoomsManager = { active: false };
    };
    this.applyChanges = async () => {
      this.roomConfig = Object.assign(Object.assign({}, this.roomConfig), { applyingChanges: true });
      await this.stateManager.applyChanges(this.meeting);
      this.close();
      this.roomConfig = Object.assign(Object.assign({}, this.roomConfig), { applyingChanges: false });
    };
    this.loading = false;
    this.roomConfig = {
      rooms: 2,
      step: 'room-config',
      mode: 'create',
      applyingChanges: false,
    };
    this.draftState = undefined;
    this.assigningParticipants = false;
    this.selectedParticipants = [];
    this.ephemeralStatusText = '';
    this.isDragMode = false;
    this.meeting = undefined;
    this.states = undefined;
    this.iconPack = _default_icon_pack_a3227c63_js__WEBPACK_IMPORTED_MODULE_2__.d;
    this.t = (0,_index_29bc5d44_js__WEBPACK_IMPORTED_MODULE_1__.u)();
  }
  onSelectedParticipantsChanged(participants) {
    if (participants.length > 0)
      this.assigningParticipants = true;
    else
      this.assigningParticipants = false;
  }
  connectedCallback() {
    this.permissions = this.meeting.self.permissions.connectedMeetings;
    this.meeting.connectedMeetings.on('stateUpdate', this.updateLocalState);
    this.meeting.connectedMeetings.on('changingMeeting', this.close);
    this.stateManager = new DraftStateManager();
    this.fetchRoomState();
  }
  disconnectedCallback() {
    this.meeting.connectedMeetings.off('stateUpdate', this.updateLocalState);
    this.meeting.connectedMeetings.off('changingMeeting', this.close);
  }
  async fetchRoomState() {
    this.loading = true;
    await this.meeting.connectedMeetings.getConnectedMeetings();
    this.loading = false;
  }
  setEphemeralStatus(text) {
    this.ephemeralStatusText = text;
    setTimeout(() => {
      this.ephemeralStatusText = '';
    }, 3000);
  }
  onCreateRooms() {
    this.selectedParticipants = [];
    this.stateManager.addNewMeetings(this.roomConfig.rooms);
    this.draftState = this.stateManager.currentState;
    // move to next step -> participants-config
    this.roomConfig = Object.assign(Object.assign({}, this.roomConfig), { step: 'participants-config' });
  }
  onParticipantDelete(event) {
    const { detail } = event;
    const id = (0,_breakout_rooms_def907fe_js__WEBPACK_IMPORTED_MODULE_4__.p)(detail);
    if (id == null)
      return;
    this.unassignParticipant(id);
  }
  toggleDragMode(e) {
    this.isDragMode = e.detail;
  }
  assignParticipantsRandomly() {
    if (this.stateManager.unassignedParticipants.length === 0)
      return;
    this.stateManager.assignParticipantsRandomly();
    this.draftState = this.stateManager.currentState;
    this.setEphemeralStatus(this.t('breakout_rooms.ephemeral_status.participants_assigned_randomly'));
  }
  async joinRoom(destinationMeetingId) {
    const participantId = (0,_breakout_rooms_def907fe_js__WEBPACK_IMPORTED_MODULE_4__.p)(this.meeting.self);
    this.stateManager.assignParticipantsToMeeting([participantId], destinationMeetingId);
    await this.applyChanges();
  }
  async closeBreakout() {
    this.stateManager.allConnectedMeetings.forEach((meeting) => this.stateManager.deleteMeeting(meeting.id));
    await this.applyChanges();
  }
  updateSelectedParticipants(e) {
    this.selectedParticipants = e.detail;
  }
  updateAllParticipants(e) {
    this.selectedParticipants = e.detail;
  }
  getStatusText() {
    if (this.ephemeralStatusText !== '')
      return this.ephemeralStatusText;
    let statusText = '';
    if (this.roomConfig.mode === 'create') {
      statusText = this.t('breakout_rooms.status.assign_multiple');
      if (this.selectedParticipants.length !== 0) {
        statusText = this.t('breakout_rooms.status.select_room');
      }
    }
    return statusText;
  }
  getApproxDistribution() {
    const num = this.stateManager.unassignedParticipants.length / (this.roomConfig.rooms || MIN_ROOMS);
    return Math.max(MIN_ROOMS, Math.round(num));
  }
  deselectAll() {
    this.selectedParticipants = [];
  }
  async discardChanges() {
    this.stateManager.discardChanges();
    await this.fetchRoomState();
    this.setEphemeralStatus(this.t('breakout_rooms.ephemeral_status.changes_discarded'));
  }
  shouldShowOnlyRoomSwitcher() {
    return this.permissions.canAlterConnectedMeetings === false;
  }
  getPermittedRooms() {
    if (this.permissions.canAlterConnectedMeetings || this.permissions.canSwitchConnectedMeetings) {
      return this.stateManager.allConnectedMeetings;
    }
    return this.stateManager.allConnectedMeetings.filter((cMeeting) => cMeeting.id === this.meeting.meta.roomName);
  }
  renderMainRoomMaybe() {
    if (!(this.meeting.connectedMeetings.isActive && this.permissions.canSwitchToParentMeeting)) {
      return null;
    }
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-breakout-room-manager", { key: this.stateManager.currentState.parentMeeting['id'], assigningParticipants: this.assigningParticipants, isDragMode: this.isDragMode, meeting: this.meeting, mode: this.roomConfig.mode, onParticipantsAdd: () => this.assignParticipantsToRoom(this.stateManager.currentState.parentMeeting['id']), onRoomJoin: () => this.joinRoom(this.stateManager.currentState.parentMeeting['id']), onUpdate: this.onRoomUpdate, states: this.states, room: Object.assign({}, this.stateManager.currentState.parentMeeting), iconPack: this.iconPack, t: this.t }));
  }
  renderRoomSwitcher() {
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "room-switcher-container" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("header", null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.breakout_rooms }), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, this.t('breakout_rooms.join_breakout_header'))), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "rooms", ref: (el) => (this.selectorRef = el) }, this.renderMainRoomMaybe(), this.getPermittedRooms().map((room, idx) => {
      return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-breakout-room-manager", { key: room['id'], assigningParticipants: this.assigningParticipants, isDragMode: this.isDragMode, defaultExpanded: idx === 0, meeting: this.meeting, mode: this.roomConfig.mode, onDelete: () => this.onRoomDelete(room['id']), onParticipantsAdd: () => this.assignParticipantsToRoom(room['id']), onRoomJoin: () => this.joinRoom(room['id']), states: this.states, room: Object.assign({}, room), iconPack: this.iconPack, t: this.t, allowDelete: false }));
    })))));
  }
  renderLoading() {
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "loading-content" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-spinner", { size: "xl" }))));
  }
  renderRoomConfig() {
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "room-config" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("header", null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.breakout_rooms }), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, this.t('breakout_rooms.room_config_header'))), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "create-room" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, this.t('breakout_rooms.num_of_rooms')), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-counter", { value: this.roomConfig.rooms, minValue: MIN_ROOMS, iconPack: this.iconPack, t: this.t, onValueChange: (val) => {
        this.roomConfig = Object.assign(Object.assign({}, this.roomConfig), { rooms: Math.max(+val.detail, MIN_ROOMS) });
      } })), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "distribution-hint" }, `${this.t('breakout_rooms.approx')}${' '}`, ' ', (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("em", null, this.getApproxDistribution(), " ", this.t('breakout_rooms.participants_per_room')), ' ', this.t('breakout_rooms.division_text')), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("footer", null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { kind: "button", iconPack: this.iconPack, t: this.t, size: "lg", title: this.t('create'), disabled: this.roomConfig.rooms === 0, onClick: () => this.onCreateRooms() }, this.t('create'))))));
  }
  render() {
    if (this.loading) {
      return this.renderLoading();
    }
    if (this.shouldShowOnlyRoomSwitcher()) {
      return this.renderRoomSwitcher();
    }
    if (this.roomConfig.step === 'room-config') {
      return this.renderRoomConfig();
    }
    // participant config
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "participant-config-wrapper" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "participant-config" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("aside", { part: "menu" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("header", null, this.t('breakout_rooms.assign_participants')), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-breakout-room-participants", { meeting: this.meeting, iconPack: this.iconPack, t: this.t, participantIds: this.stateManager.unassignedParticipants.map(_breakout_rooms_def907fe_js__WEBPACK_IMPORTED_MODULE_4__.p), selectedParticipantIds: this.selectedParticipants }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tooltip", { label: this.t('breakout_rooms.shuffle_participants'), iconPack: this.iconPack, t: this.t, slot: "shuffle-button" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { disabled: this.roomConfig.mode === 'edit' ||
        this.stateManager.unassignedParticipants.length === 0, iconPack: this.iconPack, t: this.t, kind: "button", variant: "secondary", size: "md", onClick: () => this.assignParticipantsRandomly(), class: "shuffle-button br-primary-btn" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.shuffle, iconPack: this.iconPack, t: this.t })))), this.selectedParticipants.length !== 0 && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "participants-assign-actions" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, `${this.selectedParticipants.length} ${this.t('breakout_rooms.selected')}`), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { disabled: this.roomConfig.mode === 'edit', iconPack: this.iconPack, t: this.t, kind: "button", variant: "ghost", size: "md", onClick: () => this.deselectAll(), class: "deselect-button color-danger" }, this.t('breakout_rooms.deselect'))))), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "assign-rooms" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "row" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", { class: "row-header" }, this.t('breakout_rooms.rooms'), " (", this.stateManager.allConnectedMeetings.length, ")"), !this.assigningParticipants && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "cta-buttons" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { kind: "button", variant: "secondary", iconPack: this.iconPack, t: this.t, class: "br-primary-btn" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { onClick: this.onAddNewRoom }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.add, iconPack: this.iconPack, t: this.t }), this.t('breakout_rooms.add_room'))), this.stateManager.allConnectedMeetings.flatMap((m) => m.participants)
      .length !== 0 && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { kind: "button", variant: "ghost", onClick: this.onUnassignAll, iconPack: this.iconPack, t: this.t }, this.t('breakout_rooms.unassign_all')))))), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "rooms", ref: (el) => (this.selectorRef = el) }, this.renderMainRoomMaybe(), this.getPermittedRooms().map((room, idx) => {
      return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-breakout-room-manager", { key: room['id'], assigningParticipants: this.assigningParticipants, isDragMode: this.isDragMode, defaultExpanded: idx === 0, meeting: this.meeting, mode: this.roomConfig.mode, onDelete: () => this.onRoomDelete(room['id']), onParticipantsAdd: () => this.assignParticipantsToRoom(room['id']), onRoomJoin: () => this.joinRoom(room['id']), onUpdate: this.onRoomUpdate, states: this.states, room: Object.assign({}, room), iconPack: this.iconPack, t: this.t, allowDelete: this.stateManager.allConnectedMeetings.length > MIN_ROOMS }));
    }), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { kind: "button", variant: "secondary", iconPack: this.iconPack, t: this.t, onClick: this.onAddNewRoom, class: "add-room-jumbo-btn br-secondary-btn" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.add, iconPack: this.iconPack, t: this.t }), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, this.t('breakout_rooms.add_room_brief'))))))), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "participant-config-actions" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: { 'status-bar': true, 'ephemeral-status': this.ephemeralStatusText !== '' } }, this.ephemeralStatusText !== '' && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.checkmark, iconPack: this.iconPack, t: this.t })), this.getStatusText()), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "breakout-actions" }, this.roomConfig.mode === 'create' && this.permissions.canAlterConnectedMeetings && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { size: "md", iconPack: this.iconPack, t: this.t, class: "start-breakout-button", onClick: () => this.enableConfirmationModal('start-breakout') }, this.t('breakout_rooms.start_breakout'))), this.roomConfig.mode === 'edit' &&
      this.stateManager.hasLocalChanges &&
      this.permissions.canAlterConnectedMeetings && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { size: "md", iconPack: this.iconPack, t: this.t, class: "color-danger", variant: "ghost", onClick: () => this.discardChanges() }, this.t('breakout_rooms.discard_changes'))), this.roomConfig.mode === 'edit' &&
      this.stateManager.hasLocalChanges &&
      this.permissions.canAlterConnectedMeetings && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { size: "md", iconPack: this.iconPack, t: this.t, class: "update-breakout-button", onClick: this.applyChanges }, this.t('breakout_rooms.update_breakout'))), this.roomConfig.mode === 'edit' &&
      !this.stateManager.hasLocalChanges &&
      this.permissions.canAlterConnectedMeetings && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { size: "md", iconPack: this.iconPack, t: this.t, class: "close-breakout-button", onClick: () => this.enableConfirmationModal('close-breakout') }, this.t('breakout_rooms.close_breakout'))))))));
  }
  static get watchers() { return {
    "selectedParticipants": ["onSelectedParticipantsChanged"]
  }; }
};
DyteBreakoutRoomsManager.style = dyteBreakoutRoomsManagerCss;




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