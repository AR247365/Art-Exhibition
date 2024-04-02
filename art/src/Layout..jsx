import React, { useState } from "react"

const Layout = () => {
  return (
    <div className="px-14 py-9 ">
      <section className="h-screen">
        <h1 className="text-white text-7xl font-allura text-center underline decoration-1 underline-offset-4">
          The Three Graces
        </h1>
      </section>
      <section
        id="part-2"
        className="h-screen w-1/2 flex flex-col justify-center"
      >
        <h1 className="text-white text-7xl py-8 font-allura underline decoration-1 underline-offset-4">
          Agleae
        </h1>
        <p className="text-white text-4xl font-allura">
          She was venerated as the goddess of beauty, splendor, glory,
          magnificence, and adornment. She is the youngest of the Charites
          according to Hesiod. Aglaea is one of three daughters of Zeus and
          either the Oceanid Eurynome, or of Eunomia, the goddess of good order
          and lawful conduct.
        </p>
        <div>03</div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <section
        id="part-3"
        className="h-screen w-1/2 flex flex-col justify-center"
      >
        <h1 className="text-white text-7xl py-8 font-allura underline decoration-1 underline-offset-4">
          Thalia{" "}
        </h1>
        <p className="text-white text-4xl font-allura">
          Thalia, in Greek religion, one of the nine Muses, patron of comedy;
          also, according to the Greek poet Hesiod, a Grace (one of a group of
          goddesses of fertility). She is the mother of the Corybantes,
          celebrants of the Great Mother of the Gods, Cybele, the father being
          Apollo, a god related to music and dance. In her hands she carried the
          comic mask and the shepherd's staff.
        </p>
        <div>03</div>
      </section>
    </div>
  )
}

export default Layout