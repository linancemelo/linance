import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '@/views/back/Login'
import Dashboard from '@/views/back/Dashboard'
import Products from '@/views/back/Products'
import Coupons from '@/views/back/Coupons'
import Orders from '@/views/back/Orders'

import Home from '@/views/front/Home'
import Store from '@/views/front/Store'
import Product from '@/views/front/ProductBoard'
import ProductInfo from '@/views/front/ProductInfo'
import Cart from '@/views/front/Cart'
import UserInfo from '@/views/front/UserInfo'
import Order from '@/views/front/Order'
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
    name: 'Home'
  },
  {
    path: '/store',
    component: Store,
  },
  {
    path: '/product',
    component: Product,
    children: [
      {
        path: ':id',
        component: ProductInfo,
      }
    ]
  },
  {
    path: '/cart',
    component: Cart,
    children: [
      {
        path:'userinfo',
        component: UserInfo,
      }
    ]
  },
  {
    path: '/order/:id',
    component: Order
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
