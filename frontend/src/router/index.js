import { createRouter, createWebHistory } from 'vue-router'

// route level code-splitting
// this generates a separate chunk ([VIEWNAME].[hash].js) for this route
// which is lazy-loaded when the route is visited.
const Home = () => import('../views/Home.vue')
const Login = () => import('../views/Login.vue')
const Register = () => import('../views/Register.vue')
const GroupsView = () => import('../views/GroupsView.vue')
const Predictions = () => import('../views/Predictions.vue')
const About = () => import('../views/About.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      props: {
        "msg": "EL PRODE DEL MUNDIAL"
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/groups',
      name: 'groups',
      component: GroupsView
    },
    {
      path: '/predictions',
      name: 'predictions',
      component: Predictions
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})

export default router
