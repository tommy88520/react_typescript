import Home from "@/views/Home"
import About from "@/views/About"

import { Navigate } from "react-router-dom"
const routes = [
  {
    path:  "/",
    element: <Navigate to="/home"/>
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/home",
    element: <Home />
  }
]
export default routes