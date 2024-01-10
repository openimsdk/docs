"use strict";
exports.id = 6303;
exports.ids = [6303];
exports.modules = {

/***/ 36303:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_participants_stage_queue: () => (/* binding */ DyteParticipantsStaged)
/* harmony export */ });
/* harmony import */ var _index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65733);
/* harmony import */ var _default_ui_config_e3c1cd21_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37692);
/* harmony import */ var _pipStore_5d9dd8bf_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21237);
/* harmony import */ var _livestream_8c64d895_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24555);
/* harmony import */ var _default_icon_pack_a3227c63_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96633);
/* harmony import */ var _index_29bc5d44_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20336);
/* harmony import */ var _graceful_storage_33bc316d_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(60804);








const dyteParticipantsStageQueueCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{margin-top:var(--dyte-space-2, 8px);display:flex;width:100%;flex-direction:column;font-size:14px}.stage-requested-participants{margin-bottom:var(--dyte-space-8, 32px)}.stage-requested-participants .bulk-actions{display:flex;gap:var(--dyte-space-2, 8px)}.stage-requested-participants .bulk-actions .accept-all-button{--tw-text-opacity:1;color:rgba(var(--dyte-colors-success, 98 165 4) / var(--tw-text-opacity))}.stage-requested-participants .bulk-actions dyte-button{flex:1 1 0%}h3,.heading-count{margin:var(--dyte-space-0, 0px);display:flex;align-items:center;justify-content:center;padding:var(--dyte-space-0, 0px);font-size:16px;font-weight:400;color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88));text-align:center}.heading-count{font-size:14px}.participants{margin-top:var(--dyte-space-2, 8px);padding:var(--dyte-space-0, 0px)}.waiting-participant{margin-top:var(--dyte-space-2, 8px);margin-bottom:var(--dyte-space-2, 8px);display:flex;align-items:center;color:rgb(var(--dyte-colors-text-on-brand-1000, var(--dyte-colors-text-1000, 255 255 255)))}.waiting-participant .participant-details{margin-right:auto;display:flex;align-items:center}.waiting-participant .participant-details dyte-avatar{margin-right:var(--dyte-space-2, 8px);height:var(--dyte-space-8, 32px);width:var(--dyte-space-8, 32px);flex-shrink:0;font-size:14px}.waiting-participant .participant-details .name{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media (min-width: 1080px){.waiting-participant .participant-details .name{max-width:var(--dyte-space-40, 160px)}}.waiting-participant .waitlist-controls{display:flex}.waiting-participant .waitlist-controls dyte-button{margin-left:var(--dyte-space-2, 8px);cursor:pointer;border-radius:var(--dyte-border-radius-sm, 4px)}.waiting-participant .waitlist-controls dyte-icon.accept{--tw-text-opacity:1;color:rgba(var(--dyte-colors-success, 98 165 4) / var(--tw-text-opacity))}.waiting-participant .waitlist-controls dyte-icon.deny{--tw-text-opacity:1;color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-text-opacity))}";

const DyteParticipantsStaged = class {
  constructor(hostRef) {
    (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.peerPresentingUpdateListener = () => {
      this.stageRequestedParticipants = [
        this.meeting.self,
        ...this.meeting.participants.joined.toArray(),
      ].filter((p) => p.webinarStageStatus === 'REQUESTED_TO_JOIN_STAGE');
    };
    this.updateStageRequestedParticipants = () => {
      this.stageRequestedParticipants = this.meeting.participants.joined
        .toArray()
        .filter((p) => p.webinarStageStatus === 'REQUESTED_TO_JOIN_STAGE');
    };
    this.acceptStageRequest = async (p) => {
      if (this.meeting.meta.viewType === 'WEBINAR') {
        const { id } = p;
        const participant = this.meeting.participants.joined.get(id);
        if (participant !== undefined)
          await participant.acceptJoinStageRequest();
        this.updateStageRequestedParticipants();
      }
      else if (this.meeting.meta.viewType === 'LIVESTREAM') {
        const { userId } = p;
        await this.meeting.stage.grantAccess([userId]);
      }
    };
    this.rejectStageRequest = async (p) => {
      if (this.meeting.meta.viewType === 'WEBINAR') {
        const { id } = p;
        const participant = this.meeting.participants.joined.get(id);
        if (participant !== undefined)
          await participant.rejectRequestToJoinStage();
        this.updateStageRequestedParticipants();
      }
      else if (this.meeting.meta.viewType === 'LIVESTREAM') {
        const { userId } = p;
        await this.meeting.stage.denyAccess([userId]);
      }
    };
    this.acceptAllStageRequest = async () => {
      if (this.meeting.meta.viewType === 'WEBINAR') {
        const payload = this.meeting.participants.joined
          .toArray()
          .filter((p) => p.webinarStageStatus === 'REQUESTED_TO_JOIN_STAGE')
          .map((p) => ({
          id: p.id,
          requestToJoinType: 'REQUEST_TO_PRESENT',
        }));
        await this.meeting.participants.acceptAllRequestToJoinStageRequests(payload);
        this.updateStageRequestedParticipants();
      }
      else if (this.meeting.meta.viewType === 'LIVESTREAM') {
        await this.meeting.stage.grantAccess(this.stageRequestedParticipants.map((p) => p.userId));
      }
    };
    this.denyAllStageRequest = async () => {
      var _a;
      if (this.meeting.meta.viewType === 'WEBINAR') {
        const participants = this.meeting.participants.joined
          .toArray()
          .filter((p) => p.webinarStageStatus === 'REQUESTED_TO_JOIN_STAGE');
        // TODO (@madhugb): move this to single call once backend supports it
        await Promise.all(participants.map(async (p) => await p.rejectRequestToJoinStage()));
        this.updateStageRequestedParticipants();
      }
      else if (this.meeting.meta.viewType === 'LIVESTREAM') {
        await ((_a = this.meeting.stage) === null || _a === void 0 ? void 0 : _a.denyAccess(this.stageRequestedParticipants.map((p) => p.userId)));
      }
    };
    this.shouldShowStageRequests = () => {
      return (this.meeting.self.permissions.acceptPresentRequests &&
        this.stageRequestedParticipants.length > 0);
    };
    this.updateRequestList = async (stageRequests) => {
      var _a, _b, _c, _d;
      if (this.meeting.meta.viewType === 'WEBINAR') {
        this.stageRequestedParticipants = (_a = [
          this.meeting.self,
          ...this.meeting.participants.joined.toArray(),
        ]) === null || _a === void 0 ? void 0 : _a.filter((p) => p.webinarStageStatus === 'REQUESTED_TO_JOIN_STAGE');
      }
      else if (this.meeting.meta.viewType === 'LIVESTREAM') {
        if (!stageRequests) {
          stageRequests = (_d = (_c = (await ((_b = this.meeting.stage) === null || _b === void 0 ? void 0 : _b.getAccessRequests()))) === null || _c === void 0 ? void 0 : _c.stageRequests) !== null && _d !== void 0 ? _d : [];
        }
        /**
         * NOTE(ishita1805): Temporarily mapping `displayName` to `name` till socket service sends the correct key.
         */
        this.stageRequestedParticipants = stageRequests.map((p) => {
          return Object.assign(Object.assign({}, p), { name: p.displayName });
        });
      }
    };
    this.meeting = undefined;
    this.config = _default_ui_config_e3c1cd21_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.size = undefined;
    this.iconPack = _default_icon_pack_a3227c63_js__WEBPACK_IMPORTED_MODULE_4__.d;
    this.view = 'sidebar';
    this.t = (0,_index_29bc5d44_js__WEBPACK_IMPORTED_MODULE_5__.u)();
    this.stageRequestedParticipants = [];
  }
  connectedCallback() {
    this.meetingChanged(this.meeting);
  }
  disconnectedCallback() {
    const { participants, self } = this.meeting;
    this.participantLeftListener &&
      participants.joined.removeListener('participantLeft', this.participantLeftListener);
    this.peerRequestToJoinStageListener &&
      participants.joined.removeListener('peerRequestToJoinStage', this.peerRequestToJoinStageListener);
    this.peerAcceptedToJoinStageListener &&
      participants.joined.removeListener('peerAcceptedToJoinStage', this.peerAcceptedToJoinStageListener);
    this.peerRejectedToJoinStageListener &&
      participants.joined.removeListener('peerRejectedToJoinStage', this.peerRejectedToJoinStageListener);
    participants.joined.removeListener('peerStartedPresenting', this.peerPresentingUpdateListener);
    participants.joined.removeListener('peerStoppedPresenting', this.peerPresentingUpdateListener);
    self.removeListener('stageJoined', this.peerPresentingUpdateListener);
    self.removeListener('stageLeft', this.peerPresentingUpdateListener);
    self.removeListener('removedFromStage', this.peerPresentingUpdateListener);
  }
  meetingChanged(meeting) {
    var _a;
    if (meeting == null)
      return;
    this.participantLeftListener = (participant) => {
      this.stageRequestedParticipants = this.stageRequestedParticipants.filter((p) => p.id !== participant.id);
    };
    this.peerRequestToJoinStageListener = ({ id }) => {
      this.stageRequestedParticipants = this.stageRequestedParticipants.filter((p) => p.id != id);
      const participant = meeting.participants.joined.get(id);
      if (participant !== undefined)
        this.stageRequestedParticipants = [...this.stageRequestedParticipants, participant];
    };
    this.peerAcceptedToJoinStageListener = ({ id }) => {
      this.stageRequestedParticipants = this.stageRequestedParticipants.filter((p) => p.id != id);
    };
    this.peerRejectedToJoinStageListener = ({ id }) => {
      this.stageRequestedParticipants = this.stageRequestedParticipants.filter((p) => p.id != id);
    };
    this.updateRequestList();
    meeting.participants.joined.addListener('peerRequestToJoinStage', this.peerRequestToJoinStageListener);
    meeting.participants.joined.addListener('peerAcceptedToJoinStage', this.peerAcceptedToJoinStageListener);
    meeting.participants.joined.addListener('peerRejectedToJoinStage', this.peerRejectedToJoinStageListener);
    meeting.participants.joined.addListener('peerStartedPresenting', this.peerPresentingUpdateListener);
    meeting.participants.joined.addListener('peerStoppedPresenting', this.peerPresentingUpdateListener);
    (_a = meeting.stage) === null || _a === void 0 ? void 0 : _a.on('stageAccessRequestUpdate', this.updateRequestList);
    meeting.participants.joined.addListener('participantLeft', this.participantLeftListener);
    meeting.self.addListener('stageJoined', this.peerPresentingUpdateListener);
    meeting.self.addListener('stageLeft', this.peerPresentingUpdateListener);
    meeting.self.addListener('removedFromStage', this.peerPresentingUpdateListener);
  }
  render() {
    if (this.view !== 'sidebar' || !this.shouldShowStageRequests())
      return;
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "stage-requested-participants" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "heading-count", part: "staged-heading-count" }, this.t('stage_request.header_title'), " (", this.stageRequestedParticipants.length, ")"), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul", { class: "participants", part: "staged-participants" }, this.stageRequestedParticipants.map((participant) => ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("li", { class: "waiting-participant", key: participant.id }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "participant-details" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-avatar", { participant: participant, size: "sm", iconPack: this.iconPack, t: this.t }), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", { class: "name", title: participant.name }, participant.name)), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "waitlist-controls" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tooltip", { label: this.t('stage_request.deny_request'), variant: "secondary", iconPack: this.iconPack, t: this.t }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { variant: "secondary", kind: "icon", onClick: () => this.rejectStageRequest(participant), iconPack: this.iconPack, t: this.t }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { class: "deny", icon: this.iconPack.dismiss, iconPack: this.iconPack, t: this.t }))), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tooltip", { label: this.t('stage_request.accept_request'), variant: "secondary", iconPack: this.iconPack, t: this.t }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { variant: "secondary", kind: "icon", iconPack: this.iconPack, t: this.t, onClick: () => this.acceptStageRequest(participant) }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { class: "accept", icon: this.iconPack.checkmark })))))))), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "bulk-actions" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { class: "accept-all-button", variant: "secondary", iconPack: this.iconPack, t: this.t, onClick: this.acceptAllStageRequest }, this.t('stage_request.accept_all')), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { class: "deny-all-button", variant: "danger", iconPack: this.iconPack, t: this.t, onClick: this.denyAllStageRequest }, this.t('stage_request.deny_all')))));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"]
  }; }
};
DyteParticipantsStaged.style = dyteParticipantsStageQueueCss;




/***/ })

};
;