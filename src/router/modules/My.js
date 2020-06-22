import Layout from '@/layout'

const myRouter = {
  path: '/myManage',
  component: Layout,
  alwaysShow: true,
  meta: {
    title: '我的'
  },
  children: [
    {
      path: 'my',
      component: () => import('@/views/My/index'),
      name: 'My',
      meta: {
        title: '我的'
      }
    }
  ]
}
export default myRouter
