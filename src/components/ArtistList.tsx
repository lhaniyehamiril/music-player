import { Link } from "react-router-dom"
import { artists } from "../data/artists"

const ArtistList = () => {
  return (
    <div className="flex gap-5 items-center justify-center flex-col md:justify-start md:items-start mt-8">
        {artists.map((item,i) =>
         <Link to={`/artist/${item.id}`} key={i} className=" rounded-3xl relative gap-4 bg-[#202020] w-[94%] h-20 md:w-60 flex items-center pl-3">

           <img src={item.img} alt={item.artist} className="w-15 h-15 object-cover rounded-full" />

            <h2 className="font-semibold text-white">
              {item.artist}
            </h2>
            
         </Link>)}
    </div>
  )
}

export default ArtistList
