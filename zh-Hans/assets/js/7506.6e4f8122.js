"use strict";
exports.id = 7506;
exports.ids = [7506];
exports.modules = {

/***/ 47506:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_participants_waiting_list: () => (/* binding */ DyteParticipantsWaitlisted)
/* harmony export */ });
/* harmony import */ var _index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65733);
/* harmony import */ var _default_ui_config_e3c1cd21_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37692);
/* harmony import */ var _pipStore_5d9dd8bf_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21237);
/* harmony import */ var _livestream_8c64d895_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24555);
/* harmony import */ var _default_icon_pack_a3227c63_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96633);
/* harmony import */ var _index_29bc5d44_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20336);
/* harmony import */ var _graceful_storage_33bc316d_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(60804);








const dyteParticipantsWaitingListCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{margin-top:var(--dyte-space-4, 16px);margin-bottom:calc(var(--dyte-space-2, 8px) * -1);display:flex;width:100%;flex-direction:column;font-size:14px}.waiting-participants{margin-bottom:var(--dyte-space-8, 32px)}.waiting-participants .accept-all-button{--tw-text-opacity:1;color:rgba(var(--dyte-colors-success, 98 165 4) / var(--tw-text-opacity))}h3,.heading-count{margin:var(--dyte-space-0, 0px);display:flex;align-items:center;justify-content:center;padding:var(--dyte-space-0, 0px);font-size:16px;font-weight:400;color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88));text-align:center}.heading-count{font-size:14px}.participants{margin-top:var(--dyte-space-2, 8px);padding:var(--dyte-space-0, 0px)}.waiting-participant{margin-top:var(--dyte-space-2, 8px);margin-bottom:var(--dyte-space-2, 8px);display:flex;align-items:center;color:rgb(var(--dyte-colors-text-on-brand-1000, var(--dyte-colors-text-1000, 255 255 255)))}.waiting-participant .participant-details{margin-right:auto;display:flex;align-items:center}.waiting-participant .participant-details dyte-avatar{margin-right:var(--dyte-space-2, 8px);height:var(--dyte-space-8, 32px);width:var(--dyte-space-8, 32px);flex-shrink:0;font-size:14px}.waiting-participant .participant-details .name{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media (min-width: 1080px){.waiting-participant .participant-details .name{max-width:var(--dyte-space-40, 160px)}}.waiting-participant .waitlist-controls{display:flex}.waiting-participant .waitlist-controls dyte-button{margin-left:var(--dyte-space-2, 8px);cursor:pointer;border-radius:var(--dyte-border-radius-sm, 4px)}.waiting-participant .waitlist-controls dyte-icon.accept{--tw-text-opacity:1;color:rgba(var(--dyte-colors-success, 98 165 4) / var(--tw-text-opacity))}.waiting-participant .waitlist-controls dyte-icon.deny{--tw-text-opacity:1;color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-text-opacity))}";

const DyteParticipantsWaitlisted = class {
  constructor(hostRef) {
    (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.acceptWaitingRoomRequest = async (id) => {
      await this.meeting.participants.acceptWaitingRoomRequest(id);
    };
    this.acceptAllWaitingRoomRequests = async () => {
      const requestPromises = this.waitlistedParticipants.map((participant) => this.meeting.participants.acceptWaitingRoomRequest(participant.id));
      await Promise.all(requestPromises);
    };
    this.rejectWaitingRoomRequest = async (id) => {
      await this.meeting.participants.rejectWaitingRoomRequest(id);
    };
    this.shouldShowWaitlist = () => {
      if (this.meeting.meta.viewType === 'LIVESTREAM')
        return false;
      return (this.meeting.self.permissions.acceptWaitingRequests &&
        this.waitlistedParticipants.length !== 0);
    };
    this.meeting = undefined;
    this.config = _default_ui_config_e3c1cd21_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.size = undefined;
    this.iconPack = _default_icon_pack_a3227c63_js__WEBPACK_IMPORTED_MODULE_4__.d;
    this.view = 'sidebar';
    this.t = (0,_index_29bc5d44_js__WEBPACK_IMPORTED_MODULE_5__.u)();
    this.waitlistedParticipants = [];
  }
  disconnectedCallback() {
    const { participants } = this.meeting;
    this.waitlistedParticipantJoinedListener &&
      participants.waitlisted.removeListener('participantJoined', this.waitlistedParticipantJoinedListener);
    this.waitlistedParticipantLeftListener &&
      participants.waitlisted.removeListener('participantLeft', this.waitlistedParticipantLeftListener);
  }
  connectedCallback() {
    this.meetingChanged(this.meeting);
  }
  meetingChanged(meeting) {
    if (meeting == null)
      return;
    this.waitlistedParticipants = meeting.participants.waitlisted.toArray();
    this.waitlistedParticipantJoinedListener = (participant) => {
      if (!this.waitlistedParticipants.some((p) => p.id === participant.id)) {
        this.waitlistedParticipants = [...this.waitlistedParticipants, participant];
      }
    };
    this.waitlistedParticipantLeftListener = (participant) => {
      this.waitlistedParticipants = this.waitlistedParticipants.filter((p) => p.id !== participant.id);
    };
    meeting.participants.waitlisted.addListener('participantJoined', this.waitlistedParticipantJoinedListener);
    meeting.participants.waitlisted.addListener('participantLeft', this.waitlistedParticipantLeftListener);
  }
  render() {
    if (this.view !== 'sidebar' || !this.shouldShowWaitlist())
      return;
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "waiting-participants" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "heading-count", part: "waitlisted-heading-count" }, this.t('waitlist.header_title'), " (", this.waitlistedParticipants.length, ")"), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul", { class: "participants", part: "waitlisted-participants" }, this.waitlistedParticipants.map((participant) => ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("li", { class: "waiting-participant", key: participant.id }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "participant-details" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-avatar", { participant: participant, size: "sm", iconPack: this.iconPack, t: this.t }), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", { class: "name", title: participant.name }, participant.name)), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "waitlist-controls" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tooltip", { label: this.t('waitlist.deny_request'), variant: "secondary", iconPack: this.iconPack, t: this.t }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { variant: "secondary", kind: "icon", iconPack: this.iconPack, t: this.t, onClick: () => this.rejectWaitingRoomRequest(participant.id) }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { class: "deny", icon: this.iconPack.dismiss, iconPack: this.iconPack, t: this.t }))), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tooltip", { label: this.t('waitlist.accept_request'), variant: "secondary", iconPack: this.iconPack, t: this.t }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { variant: "secondary", kind: "icon", iconPack: this.iconPack, t: this.t, onClick: () => this.acceptWaitingRoomRequest(participant.id) }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { class: "accept", icon: this.iconPack.checkmark, iconPack: this.iconPack, t: this.t })))))))), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { class: "accept-all-button", variant: "secondary", kind: "wide", iconPack: this.iconPack, t: this.t, onClick: this.acceptAllWaitingRoomRequests }, this.t('waitlist.accept_all'))));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"]
  }; }
};
DyteParticipantsWaitlisted.style = dyteParticipantsWaitingListCss;




/***/ })

};
;