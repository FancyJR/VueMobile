import Layout from '@/layout'

const unitRouter = {
  path: '/unitProjectManage',
  component: Layout,
  alwaysShow: true,
  meta: {
    title: '单位工程'
  },
  children: [
    {
      path: 'unit',
      component: () => import('@/views/UnitProject/index'),
      name: 'UnitProject',
      meta: {
        title: '单位工程'
      }
    }
  ]
}
export default unitRouter
