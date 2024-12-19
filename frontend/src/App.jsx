import HomePage from "./HomePage"
import './App.css'
import { Route, Routes } from "react-router"
import AboutUs from "./pages/AboutUs/AboutUs"
import Navbar from "./components/Navbar/Navbar"
import Register from "./pages/Register/Register"
import Login from "./pages/Login/Login"
import { AuthProvider } from "./helpers/AuthContext"
import OrderForm from "./pages/OrderForm/OrderForm"
import ContactUs from "./pages/ContactUs/ContactUs"

const App = () => {
  return (
    <>
    <AuthProvider>
    <Navbar/>
    <Routes>
      <Route path="/"  element={ <HomePage/>}/>
      <Route path="/about-us"  element={ <AboutUs/>}/>
      <Route path="/contact-us"  element={ <ContactUs/>}/>
      <Route path="/register"  element={ <Register/>}/>
      <Route path="/login"  element={ <Login/>}/>
      <Route path="/order-form/:id"  element={ <OrderForm/>}/>
    </Routes>
    </AuthProvider>
    </>
  )
}

export default App