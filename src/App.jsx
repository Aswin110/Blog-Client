// import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// import Layout from './assets/components/layout'
import SignUp from './assets/components/signup'
import LogIn from './assets/components/login'
import HomePage from './assets/components/homepage'
import Post from './assets/components/post'

const router = createBrowserRouter([
  {
    path:'/',
    element: <HomePage/>
  },
  {
    path:'login',
    element:<LogIn/>
  },
  {
    path:'signup',
    element:<SignUp/>
  },
  {
    path:'posts/:post',
    element: <Post/>
  }
])

export default router
