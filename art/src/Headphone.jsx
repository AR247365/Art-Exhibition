import React, { useState, useEffect } from "react"

const Headphone = () => {
  const audio = new Audio("./clouds-northwestern.mp3")
  audio.loop = true

  const [isBlackScreen, setIsBlackScreen] = useState(true)

  useEffect(() => {
    audio.play()
  }, [isBlackScreen])

  useEffect(() => {
    const hideBlackScreen = () => {
      setIsBlackScreen(false)
    }

    if (isBlackScreen) {
      window.addEventListener("click", hideBlackScreen)
      document.body.classList.add("overflow-hidden") // Disable scrolling
    } else {
      window.removeEventListener("click", hideBlackScreen)
      document.body.classList.remove("overflow-hidden") // Enable scrolling
    }

    return () => {
      window.removeEventListener("click", hideBlackScreen)
      document.body.classList.remove("overflow-hidden") // Ensure scrolling is enabled when component unmounts
    }
  }, [isBlackScreen])

  return (
    <>
      {isBlackScreen && (
        <div
          className={`fixed top-0 left-0 h-screen w-screen bg-black z-50 flex flex-col justify-center `}
          onClick={() => setIsBlackScreen(false)}
        >
          <h1 className="text-white text-7xl font-allura text-center">
            Use Headphones for immersive experience.
          </h1>
          <h1 className="text-white text-7xl font-allura text-center">
            Click anywhere to continue.
          </h1>
        </div>
      )}
    </>
  )
}

export default Headphone
