import httpRequest from '@/api'

export function getMenuListApi() {
  return [
    {
      id: 1,
      pid: 0,
      resCode: 'ComplianceAlarm',
      resName: 'ComplianceAlarm',
      resType: '1',
      resUrl: '/auditRecords',
      resOrder: 1,
      icon: 'icon-shenhejilu'
    },
    {
      id: 9,
      pid: 8,
      resCode: 'UserList',
      resName: 'UserList',
      resType: '1',
      resUrl: '/systemManage/user',
      resOrder: 1,
      icon: 'icon-yonghu-yuan'
    },
    {
      id: 13,
      pid: 12,
      resCode: '_allReview',
      resName: 'allReview',
      resType: '1',
      resUrl: '/all',
      resOrder: 1,
      icon: 'icon-a-quanbusuoyou-06'
    },
    {
      id: 17,
      pid: 16,
      resCode: 'allReview_bankReport',
      resName: 'allReview',
      resType: '1',
      resUrl: '/reportAll',
      resOrder: 1,
      icon: 'icon-a-quanbusuoyou-06'
    },
    {
      id: 20,
      pid: 19,
      resCode: 'transferAll',
      resName: 'allReview',
      resType: '1',
      resUrl: '/transferAll',
      resOrder: 1,
      icon: 'icon-a-quanbusuoyou-06'
    },
    {
      id: 23,
      pid: 22,
      resCode: 'CourtOrderAll',
      resName: 'allReview',
      resType: '1',
      resUrl: '/court-order-all',
      resOrder: 1,
      icon: 'icon-a-quanbusuoyou-06'
    },
    {
      id: 25,
      pid: 26,
      resCode: 'AMLUnfreezeALL',
      resName: 'allReview',
      resType: '1',
      resUrl: '/aml-unfreeze-all',
      resOrder: 1,
      icon: 'icon-a-quanbusuoyou-06'
    },
    {
      id: 29,
      pid: 28,
      resCode: 'ReportCenterAll',
      resName: 'allReview',
      resType: '1',
      resUrl: '/reportCenter',
      resOrder: 1,
      icon: 'icon-a-quanbusuoyou-06'
    },
    {
      id: 32,
      pid: 31,
      resCode: 'FreezeAllReview',
      resName: 'allReview',
      resType: '1',
      resUrl: '/freeze-all-review',
      resOrder: 1,
      icon: 'icon-a-quanbusuoyou-06'
    },
    {
      id: 33,
      pid: 31,
      resCode: 'FreezePendingReview',
      resName: 'PendingReview',
      resType: '1',
      resUrl: '/freeze-pending-review',
      resOrder: 1,
      icon: 'icon-daichulirenwu'
    },
    {
      id: 35,
      pid: 34,
      resCode: 'allReviewUNfreeze',
      resName: 'allReview',
      resType: '1',
      resUrl: '/unfreeze-all-review',
      resOrder: 1,
      icon: 'icon-a-quanbusuoyou-06'
    },
    {
      id: 39,
      pid: 41,
      resCode: 'EventList',
      resName: 'EventList',
      resType: '1',
      resUrl: '/riskCase',
      resOrder: 1,
      icon: 'icon-guizezujian'
    },
    {
      id: 72,
      pid: 70,
      resCode: 'SanctionPEPScreeningAll',
      resName: 'allReview',
      resType: '1',
      resUrl: '/sanction-screening-all',
      resOrder: 1,
      icon: 'icon-a-quanbusuoyou-06'
    },
    {
      id: 79,
      pid: 78,
      resCode: 'HighRiskMerchant-All',
      resName: 'allReview',
      resType: '1',
      resUrl: '/high-risk-merchant-all',
      resOrder: 1,
      icon: 'icon-a-quanbusuoyou-06'
    },
    {
      id: 2,
      pid: 0,
      resCode: 'AppealCard',
      resName: 'AgentRebate',
      resType: '1',
      resUrl: '/agentAppeal',
      resOrder: 2,
      icon: 'icon-qia'
    },
    {
      id: 5,
      pid: 3,
      resCode: 'allReview',
      resName: 'allReview',
      resType: '1',
      resUrl: '/rule/all',
      resOrder: 2,
      icon: 'icon-a-quanbusuoyou-06'
    },
    {
      id: 10,
      pid: 8,
      resCode: 'RoleList',
      resName: 'RoleList',
      resType: '1',
      resUrl: '/systemManage/role',
      resOrder: 2,
      icon: 'icon-jiaoseguanli'
    },
    {
      id: 14,
      pid: 12,
      resCode: '_PendingReview',
      resName: 'PendingReview',
      resType: '1',
      resUrl: '/pendingReview',
      resOrder: 2,
      icon: 'icon-daichulirenwu'
    },
    {
      id: 18,
      pid: 16,
      resCode: 'PendingReview_bankReport',
      resName: 'PendingReview',
      resType: '1',
      resUrl: '/reportPendingReview',
      resOrder: 2,
      icon: 'icon-daichulirenwu'
    },
    {
      id: 21,
      pid: 19,
      resCode: 'transferPendingReview',
      resName: 'PendingReview',
      resType: '1',
      resUrl: '/transferPendingReview',
      resOrder: 2,
      icon: 'icon-daichulirenwu'
    },
    {
      id: 24,
      pid: 22,
      resCode: 'orderPendingReview',
      resName: 'PendingReview',
      resType: '1',
      resUrl: '/court-order-review',
      resOrder: 2,
      icon: 'icon-daichulirenwu'
    },
    {
      id: 27,
      pid: 26,
      resCode: 'AML-UnfreezePendingReview',
      resName: 'PendingReview',
      resType: '1',
      resUrl: '/aml-unfreeze-pending-review',
      resOrder: 2,
      icon: 'icon-daichulirenwu'
    },
    {
      id: 30,
      pid: 28,
      resCode: 'ReportCenterPendingReview',
      resName: 'PendingReview',
      resType: '1',
      resUrl: '/reportCenterPendingReview',
      resOrder: 2,
      icon: 'icon-daichulirenwu'
    },
    {
      id: 36,
      pid: 34,
      resCode: 'UNFreezePending',
      resName: 'PendingReview',
      resType: '1',
      resUrl: '/unfreeze-pending-review',
      resOrder: 2,
      icon: 'icon-daichulirenwu'
    },
    {
      id: 40,
      pid: 41,
      resCode: 'HitLimitRules',
      resName: 'HitLimitRules',
      resType: '1',
      resUrl: '/hitLimitRule',
      resOrder: 2,
      icon: 'icon-guanlianguize'
    },
    {
      id: 71,
      pid: 70,
      resCode: 'SanctionPending',
      resName: 'PendingReview',
      resType: '1',
      resUrl: '/sanction-pending-review',
      resOrder: 2,
      icon: 'icon-daichulirenwu'
    },
    {
      id: 80,
      pid: 78,
      resCode: 'HighRiskMerchant-Pending',
      resName: 'PendingReview',
      resType: '1',
      resUrl: '/high-risk-merchant-pending',
      resOrder: 2,
      icon: 'icon-daichulirenwu'
    },
    {
      id: 3,
      pid: 0,
      resCode: 'AntifraudAudit',
      resName: 'AntiFraudReview',
      resType: '1',
      resUrl: '/antiFraud',
      resOrder: 3,
      icon: 'icon-anquan'
    },
    {
      id: 6,
      pid: 3,
      resCode: 'PendingReview',
      resName: 'PendingReview',
      resType: '1',
      resUrl: '/rule/pendingReview',
      resOrder: 3,
      icon: 'icon-daichulirenwu'
    },
    {
      id: 11,
      pid: 8,
      resCode: 'MenuList',
      resName: 'MenuList',
      resType: '1',
      resUrl: '/systemManage/menu',
      resOrder: 3,
      icon: 'icon-caidan1'
    },
    {
      id: 42,
      pid: 41,
      resCode: 'NAMLRules',
      resName: 'NAMLRules',
      resType: '1',
      resUrl: '/namlRules',
      resOrder: 3,
      icon: 'icon-id'
    },
    {
      id: 12,
      pid: 0,
      resCode: 'AntiMoneyReview',
      resName: 'AntiMoneyReview',
      resType: '1',
      resUrl: '/antiMoneyReview',
      resOrder: 4,
      icon: 'icon-anquan'
    },
    {
      id: 15,
      pid: 8,
      resCode: 'process',
      resName: 'Process',
      resType: '1',
      resUrl: '/process',
      resOrder: 4,
      icon: 'icon-flowChart'
    },
    {
      id: 16,
      pid: 0,
      resCode: 'BankReport',
      resName: 'BankReport',
      resType: '1',
      resUrl: '#',
      resOrder: 5,
      icon: 'icon-yinhang1'
    },
    {
      id: 64,
      pid: 16,
      resCode: 'EvidenceUnderReviewFinal',
      resName: 'EvidenceUnderReviewFinal',
      resType: '1',
      resUrl: '/evidence-under-review-final',
      resOrder: 5,
      icon: 'icon-daichulirenwu'
    },
    {
      id: 66,
      pid: 28,
      resCode: 'ReportEvidenceUnderReviewFinal',
      resName: 'EvidenceUnderReviewFinal',
      resType: '1',
      resUrl: '/re-evidence-under-review-final',
      resOrder: 5,
      icon: 'icon-daichulirenwu'
    },
    {
      id: 68,
      pid: 26,
      resCode: 'AMLEvidenceUnderReviewFinal',
      resName: 'EvidenceUnderReviewFinal',
      resType: '1',
      resUrl: '/aml-evidence-under-review-final',
      resOrder: 5,
      icon: 'icon-daichulirenwu'
    },
    {
      id: 75,
      pid: 70,
      resCode: 'ComplianceList',
      resName: 'NonComplianceList',
      resType: '1',
      resUrl: '/compliance-list',
      resOrder: 5,
      icon: 'icon-buhegui'
    },
    {
      id: 84,
      pid: 78,
      resCode: 'HighRiskComplianceList',
      resName: 'NonComplianceList',
      resType: '1',
      resUrl: '/high-risk-nocompliance-list',
      resOrder: 5,
      icon: 'icon-buhegui'
    },
    {
      id: 19,
      pid: 0,
      resCode: 'ErroneousTransfer',
      resName: 'ErroneousTransfer',
      resType: '1',
      resUrl: '/erroneousTransfer',
      resOrder: 6,
      icon: 'icon-kehutousu'
    },
    {
      id: 65,
      pid: 16,
      resCode: 'DeductionReview',
      resName: 'DeductionReview',
      resType: '1',
      resUrl: '/deduction-review',
      resOrder: 6,
      icon: 'icon-daichulirenwu'
    },
    {
      id: 67,
      pid: 28,
      resCode: 'ReportCenterDeductionReview',
      resName: 'DeductionReview',
      resType: '1',
      resUrl: '/rc-deduction-review',
      resOrder: 6,
      icon: 'icon-daichulirenwu'
    },
    {
      id: 31,
      pid: 38,
      resCode: 'AccountFreeze',
      resName: 'AccountFreeze',
      resType: '1',
      resUrl: '/freeze-manage',
      resOrder: 7,
      icon: 'icon-24gl-unlock2'
    },
    {
      id: 38,
      pid: 0,
      resCode: 'AccountFreeze/Unfreeze',
      resName: 'AccountFreeze/Unfreeze',
      resType: '1',
      resUrl: '/freezeAndUnFreeze',
      resOrder: 7,
      icon: 'icon-suo'
    },
    {
      id: 34,
      pid: 38,
      resCode: 'AccountUnFreeze',
      resName: 'AccountUnFreeze',
      resType: '1',
      resUrl: '/unfreeze-manage',
      resOrder: 8,
      icon: 'icon-24gl-unlock4'
    },
    {
      id: 22,
      pid: 0,
      resCode: 'CourtOrder',
      resName: 'CourtOrder',
      resType: '1',
      resUrl: '/courtOrder',
      resOrder: 9,
      icon: 'icon-jingwuicon_svg-'
    },
    {
      id: 26,
      pid: 0,
      resCode: 'AML-Unfreeze',
      resName: 'AML-Unfreeze',
      resType: '1',
      resUrl: '/aml-unfreeze',
      resOrder: 9,
      icon: 'icon-wrench'
    },
    {
      id: 28,
      pid: 0,
      resCode: 'ReportCenter',
      resName: 'ReportCenter',
      resType: '1',
      resUrl: '#reportCenter',
      resOrder: 9,
      icon: 'icon-tousu'
    },
    {
      id: 37,
      pid: 38,
      resCode: 'AuthorityManage',
      resName: 'SystemSetting',
      resType: '1',
      resUrl: '/authority-manage',
      resOrder: 9,
      icon: 'icon-shouye'
    },
    {
      id: 69,
      pid: 0,
      resCode: 'FaceAttributesQuery',
      resName: 'Face Attributes Query',
      resType: '1',
      resUrl: '/face-attributes-query',
      resOrder: 9,
      icon: 'icon-renlianshibie'
    },
    {
      id: 70,
      pid: 0,
      resCode: 'SanctionPEPScreening',
      resName: 'Sanction&PEP Screening',
      resType: '1',
      resUrl: '/sanction-screening',
      resOrder: 10,
      icon: 'icon-a-UserName'
    },
    {
      id: 76,
      pid: 0,
      resCode: 'CTR',
      resName: 'CTR',
      resType: '1',
      resUrl: '/ctr-xml',
      resOrder: 11,
      icon: 'icon-xml3'
    },
    {
      id: 83,
      pid: 0,
      resCode: 'STR',
      resName: 'STR',
      resType: '1',
      resUrl: '/str-xml',
      resOrder: 12,
      icon: 'icon-xml3'
    },
    {
      id: 78,
      pid: 0,
      resCode: 'HighRiskMerchant',
      resName: 'HighRiskMerchant',
      resType: '1',
      resUrl: '/high-risk-merchant',
      resOrder: 13,
      icon: 'icon-a'
    },
    {
      id: 41,
      pid: 0,
      resCode: 'Event',
      resName: 'Event',
      resType: '1',
      resUrl: '/event',
      resOrder: 14,
      icon: 'icon-dunpai-anquan'
    },
    {
      id: 8,
      pid: 0,
      resCode: 'SystemManage',
      resName: 'SystemManage',
      resType: '1',
      resUrl: '/systemManage',
      resOrder: 15,
      icon: 'icon-xitong'
    }
  ]
  return httpRequest.get('/menu')
}
