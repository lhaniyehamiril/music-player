type SeekBarProps = {
  currentTime: number
  duration: number
  handleSeek: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void
}

const SeekBar = ({
  currentTime,
  duration,
  handleSeek,
}: SeekBarProps) => {

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)

    return `${minutes}:${String(seconds).padStart(2, "0")}`
  }

  return (
    <div className="w-[80%] translate-y-3">

      <input
        type="range"
        min={0}
        max={duration || 0}
        value={currentTime}
        onChange={handleSeek}
        className="w-full cursor-pointer accent-[#222] focus:outline-0"
      />

      <div className="flex justify-between mt-2">

        <span className="-mt-3">
          {formatTime(currentTime)}
        </span>

        <span className="-mt-3">
          {formatTime(duration)}
        </span>

      </div>

    </div>
  )
}

export default SeekBar