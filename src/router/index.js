import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
 *                                if not set alwaysShow, only more than one route under the children
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
 **/
export const constantRouterMap = [
  {path: '/login', component: () => import('@/views/login/index'), hidden: true},
  {path: '/404', component: () => import('@/views/404'), hidden: true},
  {
    path: '',
    component: Layout,
    redirect: '/home',
    children: [{
      path: 'home',
      name: 'home',
      component: () => import('@/views/home/index'),
      meta: {title: '首页', icon: 'home'}
    }]
  },
  // {
  //   path: '/oms',
  //   component: Layout,
  //   redirect: '/oms/order',
  //   name: 'oms',
  //   meta: {title: '订单', icon: 'order'},
  //   children: [
  //     {
  //       path: 'order',
  //       name: 'order',
  //       component: () => import('@/views/oms/order/index'),
  //       meta: {title: '订单列表', icon: 'product-list'}
  //     },
  //     {
  //       path: 'orderDetail',
  //       name: 'orderDetail',
  //       component: () => import('@/views/oms/order/orderDetail'),
  //       meta: {title: '订单详情'},
  //       hidden:true
  //     },
  //     {
  //       path: 'deliverOrderList',
  //       name: 'deliverOrderList',
  //       component: () => import('@/views/oms/order/deliverOrderList'),
  //       meta: {title: '发货列表'},
  //       hidden:true
  //     },
  //     {
  //       path: 'orderSetting',
  //       name: 'orderSetting',
  //       component: () => import('@/views/oms/order/setting'),
  //       meta: {title: '订单设置', icon: 'order-setting'}
  //     },
  //     {
  //       path: 'returnApply',
  //       name: 'returnApply',
  //       component: () => import('@/views/oms/apply/index'),
  //       meta: {title: '退货申请处理', icon: 'order-return'}
  //     },
  //     {
  //       path: 'returnReason',
  //       name: 'returnReason',
  //       component: () => import('@/views/oms/apply/reason'),
  //       meta: {title: '退货原因设置', icon: 'order-return-reason'}
  //     },
  //     {
  //       path: 'returnApplyDetail',
  //       name: 'returnApplyDetail',
  //       component: () => import('@/views/oms/apply/applyDetail'),
  //       meta: {title: '退货原因详情'},
  //       hidden:true
  //     }
  //   ]
  // },
  {
    path: '/log',
    component: Layout,
    redirect: '/log/manage',
    name: 'log',
    meta: {title: '日志', icon: 'order'},
    children: [
      {
        path: 'manage',
        name: 'manage',
        component: () => import('@/views/log/manage/index'),
        meta: {title: '日志列表', icon: 'product-list'}
      },
      {
        path: 'manage',
        name: 'manage',
        component: () => import('@/views/log/manage/index'),
        meta: {title: '日志列表1', icon: 'product-list'}
      }
    ]
  },
  {path: '*', redirect: '/404', hidden: true}
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({y: 0}),
  routes: constantRouterMap
})

