import { useParams } from "react-router-dom"
import { artists } from "../data/artists"
import SongList from "../components/SongList"



const ArtistPage = () => {
 const {id} = useParams() 

 const findArtist = artists.find(i => i.id === Number(id)) 

  return (
   <div className=" min-h-screen p-5 text-white bg-[#111] relative">
    <h2 className="text-xl font-bold">{findArtist?.artist}</h2>

    <div className="flex items-center justify-center">
      <img src={findArtist?.img} className="w-[93%] md:w-50 md:h-50 h-60 rounded-2xl object-cover mt-6" />
    </div>
     
     <SongList findArtist={findArtist} />
    </div>
  )
}

export default ArtistPage
