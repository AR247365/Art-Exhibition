import { Canvas } from "@react-three/fiber"
import Model from "./Model"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import Layout from "./Layout."

gsap.registerPlugin(ScrollTrigger)

function App() {
  return (
    <>
      <main>
        <div className="h-screen w-full fixed top-0  ">
          <Canvas
            shadows
            className="r3f"
            camera={{
              fov: 45,
              near: 2.1,
              far: 200,
              position: [0, 1, 6],
            }}
          >
            <Model />
          </Canvas>
        </div>
        <Layout />
      </main>
    </>
  )
}

export default App
