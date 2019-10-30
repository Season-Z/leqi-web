const dashboard = [
  {
    path: '/dashboard',
    name: '首页',
    icon: 'home',
    component: '../pages/Dashboard',
  },
];

const platform = [
  { path: '/platform', redirect: '/platform/basicSetting' },
  {
    path: '/platform/basicSetting',
    name: '基本设置',
    icon: 'home',
    component: '../pages/platform/BasicSetting',
  },
  {
    path: '/platform/pageSetting',
    name: '页面配置',
    icon: 'home',
    component: '../pages/platform/PageSetting',
  },
  {
    path: '/platform/manager',
    name: '平台管理员',
    icon: 'home',
    component: '../pages/platform/Manager',
  },
  {
    path: '/platform/pageUrl',
    name: '页面地址',
    icon: 'home',
    component: '../pages/platform/PageUrl',
  },
  {
    path: '/platform/download',
    name: 'APP下载',
    icon: 'home',
    component: '../pages/platform/Download',
  },
  {
    path: '/platform/bill',
    name: '储备金账单',
    icon: 'home',
    component: '../pages/platform/Bill',
  },
];

const order = [
  {
    path: '/order/all',
    name: '所有订单',
    icon: 'home',
    component: '../pages/order/All',
  },
  {
    path: '/order/refund',
    name: '退款订单',
    icon: 'home',
    component: '../pages/order/Refund',
  },
  {
    path: '/order/closeApply',
    name: '订单关闭申请',
    icon: 'home',
    component: '../pages/order/CloseApply',
  },
  {
    path: '/order/assignScan',
    name: '指派、扫码抢',
    icon: 'home',
    component: '../pages/order/AssignScan',
  },
  {
    path: '/order/businessStatistics',
    name: '营业统计',
    icon: 'home',
    component: '../pages/order/BusinessStatistics',
  },
  {
    path: '/order/saleStatistics',
    name: '商品销量统计',
    icon: 'home',
    component: '../pages/order/SaleStatistics',
  },
  {
    path: '/order/appraise',
    name: '评价管理',
    icon: 'home',
    component: '../pages/order/Appraise',
  },
];

const program = [
  {
    path: '/program/weChat',
    name: '微信小程序',
    icon: 'home',
    component: '../pages/program/WeChat',
  },
  {
    path: '/program/errands',
    name: '快递跑腿',
    icon: 'home',
    component: '../pages/program/Errands',
  },
];

const usfans = [
  {
    path: '/usfans/fans',
    name: '粉丝管理',
    icon: 'home',
    component: '../pages/usfans/Fans',
  },
  {
    path: '/usfans/weChatPush',
    name: '微信推送',
    icon: 'home',
    component: '../pages/usfans/WeChatPush',
  },
  {
    path: '/usfans/userList',
    name: '用户排行榜',
    icon: 'home',
    component: '../pages/usfans/UserList',
  },
  {
    path: '/usfans/cashWithdraw',
    name: '提现打款',
    icon: 'home',
    component: '../pages/usfans/CashWithdraw',
  },
];

const merchant = [
  {
    path: '/merchant/category',
    name: '店铺分类',
    icon: 'home',
    component: '../pages/merchant/Category',
  },
  {
    path: '/merchant/list',
    name: '所有店铺',
    icon: 'home',
    component: '../pages/merchant/List',
  },
  {
    path: '/merchant/recommend',
    name: '店铺排序',
    icon: 'home',
    component: '../pages/merchant/Recommend',
  },
  {
    path: '/merchant/cashWithdraw',
    name: '提现打款',
    icon: 'home',
    component: '../pages/merchant/CashWithdraw',
  },
  {
    path: '/merchant/audit',
    name: '商户审核',
    icon: 'home',
    component: '../pages/merchant/Audit',
  },
  {
    path: '/merchant/message',
    name: '商户消息规则',
    icon: 'home',
    component: '../pages/merchant/Message',
  },
];

const marketing = [
  {
    path: '/marketing/activityManage',
    name: '活动管理',
    icon: 'home',
    component: '../pages/marketing/ActivityManage',
  },
  {
    path: '/marketing/platformActivities',
    name: '平台活动',
    icon: 'home',
    component: '../pages/marketing/PlatformActivities',
  },
  {
    path: '/marketing/registration',
    name: '报名审核',
    icon: 'home',
    component: '../pages/marketing/Registration',
  },
];

const increment = [
  {
    path: '/increment/flows',
    name: '流量大联盟',
    icon: 'home',
    component: '../pages/increment/Flows',
  },
  {
    path: '/increment/advertisement',
    name: '广告管理',
    icon: 'home',
    component: '../pages/increment/Advertisement',
  },
  {
    path: '/increment/profit',
    name: '收益',
    icon: 'home',
    component: '../pages/increment/Profit',
  },
];

const delivery = [
  {
    path: '/delivery/performanceStatistics',
    name: '业绩统计',
    icon: 'home',
    component: '../pages/delivery/PerformanceStatistics',
  },
  {
    path: '/delivery/basicSetting',
    name: '基本设置',
    icon: 'home',
    component: '../pages/delivery/BasicSetting',
  },
  {
    path: '/delivery/cashWithdraw',
    name: '提现打款',
    icon: 'home',
    component: '../pages/delivery/CashWithdraw',
  },
  {
    path: '/delivery/deliveryClerk',
    name: '配送员审核',
    icon: 'home',
    component: '../pages/delivery/DeliveryClerk',
  },
  {
    path: '/delivery/riderMessage',
    name: '骑手消息规则',
    icon: 'home',
    component: '../pages/delivery/RiderMessage',
  },
  {
    path: '/delivery/riderSalary',
    name: '骑手薪资',
    icon: 'home',
    component: '../pages/delivery/RiderSalary',
  },
];

const assistant = [
  {
    path: '/assistant/displaySettings',
    name: '显示设置',
    icon: 'home',
    component: '../pages/assistant/DisplaySettings',
  },
  {
    path: '/assistant/usingTutorials',
    name: '使用教程',
    icon: 'home',
    component: '../pages/assistant/UsingTutorials',
  },
];

const routes = [
  { path: '/', redirect: '/dashboard' },
  ...dashboard,
  {
    path: '/platform',
    name: '平台管理',
    icon: 'home',
    routes: [...platform],
  },
  {
    path: '/order',
    name: '订单管理',
    icon: 'home',
    routes: [{ path: '/order', redirect: '/order/all' }, ...order],
  },
  {
    path: '/program',
    name: '小程序&应用商店',
    icon: 'home',
    routes: [{ path: '/program', redirect: '/program/weChat' }, ...program],
  },
  {
    path: '/usfans',
    name: '用户&粉丝营销',
    icon: 'home',
    routes: [{ path: '/usfans', redirect: '/usfans/fans' }, ...usfans],
  },
  {
    path: '/merchant',
    name: '商户管理',
    icon: 'home',
    routes: [{ path: '/merchant', redirect: '/merchant/category' }, ...merchant],
  },
  {
    path: '/marketing',
    name: '营销管理',
    icon: 'home',
    routes: [{ path: '/marketing', redirect: '/marketing/activityManage' }, ...marketing],
  },
  {
    path: '/increment',
    name: '增值服务',
    icon: 'home',
    routes: [{ path: '/increment', redirect: '/increment/flows' }, ...increment],
  },
  {
    path: '/delivery',
    name: '配送管理',
    icon: 'home',
    routes: [{ path: '/delivery', redirect: '/delivery/performanceStatistics' }, ...delivery],
  },
  {
    path: '/assistant',
    name: '服务助手',
    icon: 'home',
    routes: [{ path: '/assistant', redirect: '/assistant/displaySettings' }, ...assistant],
  },
];

module.exports = routes;
