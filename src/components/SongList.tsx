import type { ArtistsType } from "../data/artists"
import { HiPlay } from "react-icons/hi";
type songListProps = {
    findArtist: ArtistsType | undefined
}

const SongList = ({findArtist} : songListProps) => {
  return (
    <div className="flex items-center flex-col justify-center mt-6 gap-5">
      {findArtist?.songs.map((item,i) => 
        <div key={i} className="bg-white w-[95%] gap-1 h-13 flex items-center rounded-full relative">
          
          <img src={item.img} className="w-14 h-14 p-2 object-cover rounded-full" />
          <span className="text-black font-semibold">{item.title}</span>

          <HiPlay color="#000" size={35} className="absolute right-2"/>
        </div>
      )}
    </div>
  )
}

export default SongList
