import React, { useState } from "react"

const Overlay = () => {
  const [activeTab, setActiveTab] = useState("Tab1")

  return (
    <div className="px-14 py-9 ">
      <section className="h-screen">
        <h1 className="text-white text-7xl font-allura text-center ">
          The Three Graces
        </h1>
      </section>
      <section id="part2" className="h-screen ">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="w-1/2 bg-black  flex flex-col ">
          <div className=" py-4 z-50 ">
            <button
              onClick={() => setActiveTab("Tab1")}
              className={` px-6 text-5xl font-allura ${
                activeTab === "Tab1" ? " text-white" : " text-gray-500"
              }`}
            >
              Agleae
            </button>
            <button
              onClick={() => setActiveTab("Tab2")}
              className={` px-6 text-5xl font-allura${
                activeTab === "Tab2" ? " text-white" : " text-gray-500"
              }`}
            >
              Thalia
            </button>
            <button
              onClick={() => setActiveTab("Tab3")}
              className={` px-6 text-5xl font-allura${
                activeTab === "Tab3" ? " text-white" : " text-gray-500"
              }`}
            >
              Euphre
            </button>
          </div>

          <div className="">
            {activeTab === "Tab1" && (
              <p className="text-white text-xl ">
                She was venerated as the goddess of beauty, splendor, glory,
                magnificence, and adornment. She is the youngest of the Charites
                according to Hesiod. Aglaea is one of three daughters of Zeus
                and either the Oceanid Eurynome, or of Eunomia, the goddess of
                good order and lawful conduct.
              </p>
            )}
            {activeTab === "Tab2" && (
              <p className="text-white text-xl">
                Thalia, in Greek religion, one of the nine Muses, patron of
                comedy; also, according to the Greek poet Hesiod, a Grace (one
                of a group of goddesses of fertility). She is the mother of the
                Corybantes, celebrants of the Great Mother of the Gods, Cybele,
                the father being Apollo, a god related to music and dance. In
                her hands she carried the comic mask and the shepherd's staff.
              </p>
            )}
            {activeTab === "Tab3" && (
              <p className="text-white text-xl">
                Euphrosyne is a Goddess of Good Cheer, Joy and Mirth. Her name
                is the female version of a Greek word euphrosynos, which means
                "merriment". The Greek poet Pindar states that these goddesses
                were created to fill the world with pleasant moments and good
                will. Usually the Charites attended the goddess of beauty
                Aphrodite.
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Overlay
