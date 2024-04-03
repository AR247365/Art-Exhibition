import React, { useState, useEffect } from "react"

const Headphone = () => {
  const [isBlackScreenVisible, setIsBlackScreenVisible] = useState(true)

  useEffect(() => {
    const hideBlackScreen = () => {
      setIsBlackScreenVisible(false)
    }

    if (isBlackScreenVisible) {
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
  }, [isBlackScreenVisible])
  return (
    <>
      {isBlackScreenVisible && (
        <div
          className=" fixed top-0 left-0 h-screen w-screen bg-black z-50 flex flex-col justify-center"
          onClick={() => setIsBlackScreenVisible(false)}
        >
          <h1 className="text-white text-7xl font-allura text-center">
            Use Headphones for better experience.
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
