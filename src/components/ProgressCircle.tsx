type ProgressCircleProps = {
  image: string
  isPlaying: boolean
  radius: number
  circumference: number
  strokeDashoffset: number
}

const ProgressCircle = ({
  image,
  isPlaying,
  radius,
  circumference,
  strokeDashoffset,
}: ProgressCircleProps) => {
  return (
    <div className="relative -ml-2 w-[260px] h-[260px]">

      <svg
        className="absolute top-0 left-0 -rotate-90"
        width="260"
        height="260"
      >
        <circle
          cx="130"
          cy="130"
          r={radius}
          stroke="#e0e0e0"
          strokeWidth="10"
          fill="transparent"
        />

        <circle
          cx="130"
          cy="130"
          r={radius}
          stroke="#222"
          strokeWidth="10"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>

      <img
        src={image}
        alt=""
        className={`
          w-44
          h-44
          rounded-full
          object-cover
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          shadow-2xl
          ${isPlaying ? "animate-spin" : ""}
        `}
      />
    </div>
  )
}

export default ProgressCircle