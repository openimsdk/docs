"use strict";
exports.id = 1976;
exports.ids = [1976];
exports.modules = {

/***/ 21976:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_webinar_stage_toggle: () => (/* binding */ DyteWebinarStageToggle)
/* harmony export */ });
/* harmony import */ var _index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65733);
/* harmony import */ var _default_icon_pack_a3227c63_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96633);
/* harmony import */ var _index_29bc5d44_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20336);




const dyteWebinarStageToggleCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:block}";

const DyteWebinarStageToggle = class {
  constructor(hostRef) {
    (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.requestToJoinAcceptedListener = () => {
      this.stageStatus = 'ACCEPTED';
    };
    this.requestToJoinRejectedListener = () => {
      this.stageStatus = 'DENIED';
    };
    this.stageJoinedListener = () => {
      this.stageStatus = 'ACCEPTED';
    };
    this.removeFromStageListener = () => {
      this.stageStatus = 'NOT_REQUESTED';
    };
    this.selfStageLeftListener = () => {
      this.stageStatus = 'NOT_REQUESTED';
    };
    this.requestStageListener = () => {
      this.stageStatus = 'PENDING';
    };
    this.stageCallback = async () => {
      var _a;
      const self = (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.self;
      if (self == null || (!this.requestProduce && !this.canPresent)) {
        return;
      }
      if (this.stageStatus === 'PENDING') {
        await self.withdrawRequestToJoinStage();
        return;
      }
      if (this.stageStatus === 'ACCEPTED') {
        await self.leaveStage();
        this.stageStatus = 'NOT_REQUESTED';
        return;
      }
      if (this.canPresent) {
        await self.joinStage();
        this.stageStatus = 'ACCEPTED';
      }
      else {
        await self.requestToJoinStage();
        this.stageStatus = 'PENDING';
      }
    };
    this.variant = 'button';
    this.meeting = undefined;
    this.size = undefined;
    this.iconPack = _default_icon_pack_a3227c63_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.t = (0,_index_29bc5d44_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    this.stageStatus = 'NOT_REQUESTED';
    this.canPresent = false;
    this.requestProduce = false;
  }
  connectedCallback() {
    this.meetingChanged(this.meeting);
    this.meeting.self.addListener('joinStageRequestAccepted', this.requestToJoinAcceptedListener);
    this.meeting.self.addListener('joinStageRequestRejected', this.requestToJoinRejectedListener);
    this.meeting.self.addListener('stageJoined', this.stageJoinedListener);
    this.meeting.self.addListener('removedFromStage', this.removeFromStageListener);
    this.meeting.self.addListener('stageLeft', this.selfStageLeftListener);
    this.meeting.self.addListener('peerRequestToJoinStage', this.requestStageListener);
  }
  disconnectedCallback() {
    this.meeting.self.removeListener('joinStageRequestAccepted', this.requestToJoinAcceptedListener);
    this.meeting.self.removeListener('joinStageRequestRejected', this.requestToJoinRejectedListener);
    this.meeting.self.removeListener('removedFromStage', this.removeFromStageListener);
    this.meeting.self.removeListener('stageJoined', this.stageJoinedListener);
    this.meeting.self.removeListener('stageLeft', this.selfStageLeftListener);
    this.meeting.self.removeListener('peerRequestToJoinStage', this.requestStageListener);
  }
  meetingChanged(meeting) {
    if (meeting != null) {
      this.requestProduce = meeting.self.permissions.requestProduce;
      this.canPresent = meeting.self.permissions.canPresent;
      if (this.canPresent || meeting.self.webinarStageStatus === 'ON_STAGE') {
        this.stageStatus = 'ACCEPTED';
      }
    }
  }
  getState() {
    let tooltipLabel = '';
    let label = '';
    let icon = '';
    let classList = {};
    let disabled = false;
    if (this.stageStatus === 'PENDING') {
      label = this.t('stage_request.cancel_request');
      tooltipLabel = this.t('stage_request.pending_tip');
      icon = this.iconPack.leave_stage;
      classList['red-icon'] = false;
    }
    else if (this.stageStatus === 'ACCEPTED') {
      label = this.t('stage_request.leave_stage');
      tooltipLabel = this.t('stage_request.leave_tip');
      icon = this.iconPack.leave_stage;
      classList['red-icon'] = false;
      disabled = false;
    }
    else if (this.stageStatus === 'DENIED') {
      label = this.t('stage_request.denied');
      tooltipLabel = this.t('stage_request.denied_tip');
      icon = this.iconPack.join_stage;
      classList['red-icon'] = false;
      disabled = true;
    }
    else {
      label = this.t('stage_request.request');
      if (this.canPresent) {
        tooltipLabel = this.t('stage_request.request');
      }
      else {
        tooltipLabel = this.t('stage_request.request_tip');
      }
      icon = this.iconPack.join_stage;
      disabled = false;
    }
    return { tooltipLabel, label, icon, classList, disabled };
  }
  render() {
    if (!this.requestProduce && !this.canPresent) {
      return null;
    }
    if (this.meeting.self.config.viewType !== 'WEBINAR') {
      return null;
    }
    const { tooltipLabel, label, icon, classList, disabled } = this.getState();
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.H, { title: label }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tooltip", { placement: "top", kind: "block", label: tooltipLabel, delay: 600, part: "tooltip", iconPack: this.iconPack, t: this.t }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-controlbar-button", { part: "controlbar-button", size: this.size, iconPack: this.iconPack, t: this.t, variant: this.variant, label: label, icon: icon, class: classList, onClick: this.stageCallback, disabled: disabled, showWarning: false }))));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"]
  }; }
};
DyteWebinarStageToggle.style = dyteWebinarStageToggleCss;




/***/ })

};
;