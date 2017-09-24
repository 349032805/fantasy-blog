
import home from '../views/home.vue'
import blogs from '../views/blogs.vue'
import test from '../views/test.vue'
export default [
  {
    path: '/',
    component: home
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/blogs',
    name: 'blogs',
    component: blogs
  },
  {
    path: 'test',
    name: "test",
    component: test
  }
];
