import Layout from '@/layout'

const applicationRouter = {
  path: '/applicationManage',
  component: Layout,
  alwaysShow: true, // will always show the root menu
  meta: {
    title: '我的'
  },
  children: [
    {
      path: 'application',
      component: () => import('@/views/Application/index'),
      name: 'Application',
      meta: {
        title: '应用'
      }
    }
  ]
}
export default applicationRouter
