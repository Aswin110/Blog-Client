import { useState } from 'react'
import './App.css'
import Layout from './assets/components/layout'
import {Helmet} from 'react-helmet'

function App() {

  return (
    <>
      <Helmet>
        <title>App Title</title>
      </Helmet>
      <Layout/>
    </>
  )
}

export default App
