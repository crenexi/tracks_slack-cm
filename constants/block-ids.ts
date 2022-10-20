const blockIds = {
  template: 'input_template',
  conversation: 'input_convo',
  taskSingle: {
    actionType: 'action-type',
    taskRequest: 'task-request',
    taskZone: 'task-zone',
    taskNote: 'task-note',
    timing: 'timing',
  },
  taskBulk: {
    pretext: 'pretext',
    toAdd: 'tasks-add',
    toRemove: 'tasks-remove',
    toUpdate: 'tasks-update',
    toReorder: 'tasks-order',
    refPicsLink: 'ref-pics-link',
    refPicsText: 'ref-pics-text',
  },
  taskRefPic: {
    site: 'site',
    zone: 'zone',
    task: 'task',
    picsPrompt: 'pics-prompt',
    picsLink: 'pics-link',
    currPic: 'curr-pic',
  },
  signage: {
    site: 'site',
    zone: 'zone',
    quantity: 'quantity',
    request: 'request',
    tags: 'tags',
  },
  equipment: {
    equipDesc: 'equipment-desc',
    equipZone: 'equipment-zone',
    equipIssue: 'equipment-issue',
    accountManager: 'account-manager',
    tehnicians: 'technicians',
    picsReminder: 'next-steps',
  },
  qcStarting: {
    greeting: 'greeting',
    memo: 'memo',
  },
  qcRemarks: {
    infoRemarks: 'info-remarks',
    infoChecklist: 'info-checklist',
    infoOpts: {
      infoSync: 'info-sync',
      clientSync: 'client-sync',
      access: 'access',
    },
    placeRemarks: 'place-remarks',
    placeChecklist: 'place-checklist',
    placeOpts: {
      signage: 'signage',
      equipment: 'equipment',
      shelving: 'shelving',
      icUtils: 'ic-utils',
    },
    systemRemarks: 'system-remarks',
    systemChecklist: 'system-checklist',
    systemOpts: {
      taskList: 'task-list',
      icLevels: 'ic-levels',
      timing: 'timing',
    },
    accountManager: 'account-manager',
    otherTags: 'other-tags',
  },
  trainee: {
    operator: 'operator',
    trainDate: 'train-date',
    listTrainScope: 'list-train-scope',
    listTrainNext: 'list-train-next',
    listWentWell: 'list-went-well',
  },
  order: {
    orderId: 'order-id',
    orderRecap: 'order-recap',
    deliveryDate: 'delivery-date',
    listUnavailable: 'items-unavailable',
    listChained: 'list-chained',
    listICNeeds: 'list-adjustment-needs',
    listEdits: 'list-edits-made',
    itemsPickup: 'items-pickup',
    auditCheck: 'audit-check',
  },
  dro: {
    opsGeneralMemo: 'ops-general-memo',
    opsClientMemo: 'ops-client-memo',
    opsDoneMemo: 'ops-done-memo',
    deliveryMissing: 'delivery-missing',
    deliveryDiscarded: 'delivery-discarded',
    deliveryReturned: 'delivery-returned',
    prodAdjustments: 'prod-adjustments',
    prodExpired: 'prod-expired',
    prodPickup: 'prod-pickup',
  },
};

export default blockIds;