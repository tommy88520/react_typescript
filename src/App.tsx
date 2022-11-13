import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Name from './components/com1'

import { Button } from 'antd';
import { FastBackwardOutlined } from "@ant-design/icons"
import 'antd/dist/antd.css'

import { Outlet, Link } from "react-router-dom"
function App() {

  return (
    <div className="App">
      {/* <Button type="primary">Primary Button</Button>
      test22
      <FastBackwardOutlined />
    <Name></Name> */}
    <Link to="/home">home</Link> /br
    <Link to="/about">aboout</Link>
    <Outlet></Outlet>
    </div>
  )
}

export default App
