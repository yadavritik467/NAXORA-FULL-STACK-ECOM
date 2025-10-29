import { Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import Footer from "./layouts/Footer"
import Navbar from "./layouts/Navbar"
import Cart from "./pages/Cart"
import Home from "./pages/Home"

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App