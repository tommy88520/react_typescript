import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './Router'
import "reset-css"
import 'antd/dist/antd.css'

import "@/assets/styles/global.scss"


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
)
