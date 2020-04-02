const routes = [
  { path: '/', redirect: '/consultative' },
  {
    path: '/consultative',
    name: '资讯管理',
    icon: 'home',
    routes: [
      { path: '/consultative', redirect: '/consultative/consultative' },
      {
        path: '/consultative/consultative',
        name: '资讯管理',
        icon: 'home',
        component: '../pages/Consultative/Consultative',
      },
      {
        path: '/consultative/column',
        name: '栏目管理',
        icon: 'home',
        component: '../pages/Consultative/Column',
      },
      {
        path: '/consultative/push',
        name: '推送管理',
        icon: 'home',
        component: '../pages/Consultative/Push',
      },
      {
        path: '/consultative/live',
        name: '直播管理',
        icon: 'home',
        component: '../pages/Consultative/Live',
      },
      {
        path: '/consultative/live/comment',
        name: '评论',
        hide: true,
        component: '../pages/Consultative/Comment',
      },
      {
        path: '/consultative/sensitiveWords',
        name: '评论敏感词管理',
        icon: 'home',
        component: '../pages/Consultative/SensitiveWords',
      },
    ],
  },
  {
    path: '/member',
    name: '会员管理',
    icon: 'home',
    routes: [
      { path: '/member', redirect: '/member/list' },
      {
        path: '/member/list',
        name: '会员列表',
        icon: 'home',
        component: '../pages/Member/Member',
      },
      {
        path: '/member/setttings',
        name: '会员配置',
        icon: 'home',
        component: '../pages/Member/Settings',
      },
      {
        path: '/member/list/follow',
        name: '会员关注股票',
        hide: true,
        component: '../pages/Member/Follow',
      },
      {
        path: '/member/list/buy',
        name: '会员购买股票',
        hide: true,
        component: '../pages/Member/Buy',
      },
      {
        path: '/member/list/analysis',
        name: '数据分析',
        hide: true,
        component: '../pages/Member/Analysis',
      },
    ],
  },
  {
    path: '/overPipe',
    name: '超管管理',
    icon: 'home',
    routes: [
      { path: '/overPipe', redirect: '/overPipe/list' },
      {
        path: '/overPipe/list',
        name: '超管列表',
        icon: 'home',
        component: '../pages/OverPipe/List',
      },
      {
        path: '/overPipe/list/consultative',
        name: '超管资讯',
        hide: true,
        component: '../pages/OverPipe/Consultative',
      },
      {
        path: '/overPipe/list/recommendStock',
        name: '超管荐股',
        hide: true,
        component: '../pages/OverPipe/RecommendStock',
      },
    ],
  },
  {
    path: '/shares',
    name: '股票管理',
    icon: 'home',
    routes: [
      { path: '/shares', redirect: '/shares/list' },
      {
        path: '/shares/list',
        name: '股票列表',
        icon: 'home',
        component: '../pages/Shares/List',
      },
      {
        path: '/shares/recommend',
        name: '股票推荐',
        icon: 'home',
        component: '../pages/Shares/Recommend',
      },
    ],
  },
];

module.exports = routes;
