import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MainLayout } from "../pages/MainLayout"
import { HomePage } from "../pages/HomePage"
import {ObraSocialPage} from '../pages/ObraSocialPage'
import { Cartilla } from "../pages/Cartilla"
import { Nosotros } from "../pages/Nosotros"
import { Turismo } from "../pages/Turismo"
import { Jubilaciones } from "../pages/Jubilaciones"

export const Rutas = () => {

    return (
      <BrowserRouter>
        <Routes>

            <Route path="/" element={<MainLayout/>}>

            <Route index element={<HomePage />} />
            <Route path="obraSocial" element={<ObraSocialPage />} />
            <Route path="cartilla" element={<Cartilla />} />
            <Route path="nosotros" element={<Nosotros />} />
            <Route path="turismo" element={<Turismo />} />
            <Route path="jubilaciones" element={<Jubilaciones />} />


            </Route>
            
            
            
          {/* <Route path='/' element={<Register />} /> */}
  
        </Routes>
      </BrowserRouter>
    )
  }