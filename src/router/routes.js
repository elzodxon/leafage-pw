export default [
  {
    path: '/',
    component: () => import('@/layouts/home/Index.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/home/Index.vue')
      },
      {
        path: 'blog',
        name: 'Blog',
        component: () => import('@/views/blog/Index.vue'),
        meta: { src: require('@/assets/blog.jpg') },
        children: [
          {
            path: '/',
            name: 'Profile',
            component: () => import('@/views/blog/Profile.vue'),
            props: true
          },
          {
            path: 'detail/:businessId',
            name: 'Detail',
            component: () => import('@/views/blog/Detail.vue'),
            props: true
          }
        ]
      },
      {
        path: 'portfolio',
        name: 'Portfolio',
        component: () => import('@/views/portfolio/Index.vue'),
        meta: { src: require('@/assets/portfolio.jpg') }
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('@/views/about/Index.vue'),
        meta: { src: require('@/assets/about.jpg') }
      },
      {
        path: 'contact',
        name: 'Contact',
        component: () => import('@/views/contact-us/Index.vue'),
        meta: { src: require('@/assets/contact.jpg') }
      },
      {
        path: '*',
        name: 'FourOhFour',
        component: () => import('@/views/404/Index.vue')
      }
    ]
  }
]
