import {Route, Routes} from "react-router-dom"
import Landing from "../pages/Landing"
import Detalle from "../pages/Detalle"
import Header from "../components/Header"
import Footer from "../components/Footer"

const AppRoutes = () => {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/detalle/:id" element={<Detalle />} />
    </Routes>
    <Footer />
    </>
  )
}

export default AppRoutes