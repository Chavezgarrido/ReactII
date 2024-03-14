import { Routes, Route } from "react-router";
import "./App.css"
import Home from "./assets/views/Home"
import Contact from "./assets/views/Contact"
import NotFound from "./assets/views/NotFound"
import Navbar from "./components/Navbar"

function App(){
    return(
        <>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
        </>
    )
}

export default App