import { useParams } from "react-router-dom"
import { artists } from "../data/artists"
import MusicPlayer from "../components/MusicPlayer"

const SongPage = () => {

  const { id, songId } = useParams()

  const artist = artists.find(
    artist => artist.id === Number(id)
  )

  const song = artist?.songs.find(
    song => song.id === Number(songId)
  )

  if (!song) {
    return <h1>Song not found</h1>
  }

  return (
    <div className="mt-10 h-[70vh] flex items-center justify-center -ml-3">

      <MusicPlayer
        image={song.img}
        title={song.title}
        song={song.song}
      />

    </div>
  )
}

export default SongPage