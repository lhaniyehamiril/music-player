import { useEffect, useRef, useState } from "react"
import SeekBar from "./SeekBar"
import ProgressCircle from "./ProgressCircle"
import { HiPlay } from "react-icons/hi2";

type MusicPlayerProps = {
  image: string
  title: string
  song: string
}

const MusicPlayer = ({
  image,
  title,
  song,
}: MusicPlayerProps) => {

  const audioRef = useRef<HTMLAudioElement | null>(null)

  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  const radius = 100
  const circumference = 2 * Math.PI * radius

  const progress =
    duration > 0
      ? currentTime / duration
      : 0

  const strokeDashoffset =
    circumference - progress * circumference

  useEffect(() => {

    const audio = audioRef.current

    if (!audio) return

    const updateTime = () => {
      setCurrentTime(audio.currentTime)
      setDuration(audio.duration || 0)
    }


    audio.addEventListener(
      "timeupdate",
      updateTime
    )

   return () => {
    audio.removeEventListener("timeupdate", updateTime)

     }

  }, [])

  const handlePlay = () => {

    const audio = audioRef.current

    if (!audio) return

    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }

    setIsPlaying(prev => !prev)
  }

  const handleSeek = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {

    const audio = audioRef.current

    if (!audio) return

    const newTime = Number(e.target.value)

    audio.currentTime = newTime

    setCurrentTime(newTime)
  }

  return (
    <div className="relative flex flex-col items-center justify-center">
  
     <h2 className="text-xl -ml-3 font-bold">
        {title}
      </h2>
      <ProgressCircle
        image={image}
        isPlaying={isPlaying}
        radius={radius}
        circumference={circumference}
        strokeDashoffset={strokeDashoffset}
      />

   
      <button
       onClick={handlePlay}
       className="
        absolute
        bottom-20
        right-10
        bg-[#222]
        text-white
        w-13
        h-13
        rounded-full
        flex
        items-center
        justify-center
        border-none
        outline-none
        "
       >
       {
        isPlaying
        ? "❚❚"
        : <HiPlay size={24} color="#fff" className="ml-1" />
       }
      </button>



      <SeekBar
        currentTime={currentTime}
        duration={duration}
        handleSeek={handleSeek}
      />

      <audio
        ref={audioRef}
        src={song}
      />

    </div>
  )
}

export default MusicPlayer