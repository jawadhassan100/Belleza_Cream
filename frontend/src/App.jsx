import HomePage from "./HomePage"
import './App.css'
import { Route, Routes } from "react-router"
import AboutUs from "./pages/AboutUs/AboutUs"
import Navbar from "./components/Navbar/Navbar"

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/"  element={ <HomePage/>}/>
      <Route path="/about-us"  element={ <AboutUs/>}/>
      
    </Routes>
    </>
  )
}

export default App