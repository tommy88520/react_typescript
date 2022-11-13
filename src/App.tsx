import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import Name from './components/com1'

import { Button } from 'antd';
import { FastBackwardOutlined } from "@ant-design/icons"
import 'antd/dist/antd.css'

import { useRoutes, Link } from "react-router-dom"
import routes from "./router"
function App() {
  const outlet = useRoutes(routes)
  return (
    <React.Suspense fallback={<div>Loading</div> } >
      <div className="App">
        {/* <Button type="primary">Primary Button</Button>
        test22
        <FastBackwardOutlined />
      <Name></Name> */}
      <Link to="/home">home</Link> /br
      <Link to="/about">aboout</Link>
      {outlet}
      </div>
    </React.Suspense>
  )
}

export default App
