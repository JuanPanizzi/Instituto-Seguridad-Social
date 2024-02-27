import { Outlet } from "react-router-dom"
import Navvbar from "../components/Navbar"

export const MainLayout = () => {
  return (
    <div>
        <Navvbar/>
        <Outlet/>
    </div>
  )
}
