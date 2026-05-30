import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"

import SongPage from "./pages/SongPage"
import ArtistPage from "./pages/ArtistPage"

function App() {
  return (
   <Routes>
     <Route path="/" element={<Home />} /> 
     <Route path="artist/:id" element={<ArtistPage/>} /> 
     <Route path="/artist/:id/song/:songId" element={<SongPage />} /> 
   </Routes>
  )
}

export default App
