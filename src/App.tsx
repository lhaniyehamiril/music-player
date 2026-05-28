import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Artist from "./components/Artist"

function App() {
  return (
   <Routes>
     <Route path="/" element={<Home />} /> 
     <Route path="artist/:id" element={<Artist />} /> 
   </Routes>
  )
}

export default App
