import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '@/views/back/Login'
import Dashboard from '@/views/back/Dashboard'
import Products from '@/views/back/Products'
import Coupons from '@/views/back/Coupons'
import Orders from '@/views/back/Orders'

import Home from '@/views/front/Home'
import CarInfo from '@/views/front/CarInfo'
import ModelS from '@/components/front/ModelS'
import Model3 from '@/components/front/Model3'
import ModelX from '@/components/front/ModelX'
import ModelY from '@/components/front/ModelY'
import About from '@/views/front/About'
import AboutUs from '@/components/front/AboutUs'
import Team from '@/components/front/Team'
import Contact from '@/components/front/Contact'
import Store from '@/views/front/Store'
import Product from '@/views/front/ProductBoard'
import ProductInfo from '@/components/front/ProductInfo'
import User from '@/views/front/User'
import Cart from '@/components/front/Cart'
import UserInfo from '@/components/front/UserInfo'
import Order from '@/components/front/Order'
import Test from '@/views/front/Test'
const routes = [
  {
    path: '/test',
    component: Test
  },
  // 前台
  {
    path: '/',
    component: Home,
    name: 'Home',
    meta: {
      title: 'Linance'
    }
  },
  {
    path: '/carinfo',
    component: CarInfo,
    children: [
      {
        path: 'models',
        component: ModelS,
        name: 'models'
      },
      {
        path: 'model3',
        component: Model3,
        name: 'model3'
      },
      {
        path: 'modelx',
        component: ModelX,
        name: 'modelx'
      },
      {
        path: 'modely',
        component: ModelY,
        name: 'modely'
      }
    ]
  },
  {
    path: '/about',
    component: About,
    redirect: '/about/aboutus',
    children: [
      {
        path: 'aboutus',
        component: AboutUs
      },
      {
        path: 'team',
        component: Team
      },
      {
        path: 'contact',
        component: Contact
      }
    ]
  },
  {
    path: '/store',
    component: Store,
    name: 'store'
  },
  {
    path: '/product',
    component: Product,
    children: [
      {
        path: ':id',
        component: ProductInfo
      }
    ]
  },
  {
    path: '/user',
    component: User,
    redirect: '/user/cart',
    children: [
      {
        path: 'cart',
        component: Cart
      },
      {
        path: 'userinfo',
        component: UserInfo
      },
      {
        path: 'order/:id',
        component: Order
      }
    ]
  },

  // 後台
  {
    path: '/login',
    component: Login
  },
  {
    path: '/dashboard',
    redirect: '/dashboard/products',
    component: Dashboard,
    children: [
      {
        path: 'products',
        component: Products
      },
      {
        path: 'coupons',
        component: Coupons
      },
      {
        path: 'orders',
        component: Orders
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
