import React, { lazy } from "react"
import Home from "@/views/Home"
const About = lazy(()=> import("@/views/About"));

import { Navigate } from "react-router-dom"
const routes = [
  {
    path:  "/",
    element: <Navigate to="/home"/>
  },
  {
    path: "/home",
    element: <About />
  },
  {
    path: "/home",
    element: <Home />
  }
]
export default routes