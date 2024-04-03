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
      </section>

      <section
        id="part-3"
        className="h-screen w-1/2 flex flex-col justify-center py-10"
      >
        <h1 className="text-white text-7xl py-8 font-allura underline decoration-1 underline-offset-4">
          Thalia
        </h1>
        <p className="text-white text-4xl font-allura">
          Thalia, in Greek religion, one of the nine Muses, patron of comedy;
          also, according to the Greek poet Hesiod, a Grace (one of a group of
          goddesses of fertility). She is the mother of the Corybantes,
          celebrants of the Great Mother of the Gods, Cybele, the father being
          Apollo, a god related to music and dance. In her hands she carried the
          comic mask and the shepherd's staff.
        </p>
      </section>

      <section id="part-4" className="h-screen flex flex-row-reverse py-10 ">
        <div className="w-1/2 flex flex-col justify-center">
          <h1 className="text-white text-7xl py-8 font-allura underline decoration-1 underline-offset-4">
            Euphre
          </h1>
          <p className="text-white text-4xl font-allura">
            Euphrosyne is a Goddess of Good Cheer, Joy and Mirth. Her name is
            the female version of a Greek word euphrosynos, which means
            "merriment". The Greek poet Pindar states that these goddesses were
            created to fill the world with pleasant moments and good will.
            Usually the Charites attended the goddess of beauty Aphrodite.
          </p>
        </div>
      </section>

      <section id="about" className="h-screen flex flex-col items-center py-10">
        <h1 className="text-white text-7xl font-allura underline decoration-1 underline-offset-4 py-5">
          About
        </h1>
        <p className="text-white text-4xl font-allura py-5">
          Antonio Canova's statue 'The Three Graces' is a Neoclassical sculpture
          of the mythological three Charites. Daughters of Zeus identified on
          some engravings of the statue as Aglaea Thalia and Euphrosyne who were
          said to represent 'Elegance', 'Beauty' & 'Mirth'. The Graces presided
          over banquets and gatherings, to delight the guests of the gods.
        </p>
        <p className="text-white text-4xl font-allura py-5">
          Canova's assistants roughly blocked out the marble, leaving Canova to
          perform the final carving and shape the stone to highlight the Graces
          soft flesh. This was a trademark of the artist, and the piece shows a
          strong allegiance to the Neo-Classical movement in sculpture, of which
          Canova is the prime exponent.
        </p>
        <p className="text-white text-4xl font-allura py-5">
          The three goddesses are shown nude, huddled together, their heads
          almost touching in what many have referred to as an erotically charged
          piece. They stand, leaning slightly inward — perhaps discussing a
          common issue, or simply enjoying their closeness. Their hair-styles
          are similar, braided atop their heads in a knot.
        </p>
      </section>
    </div>
  )
}

export default Layout
