import { Canvas } from "@react-three/fiber"
import Model from "./Model"
import { Environment, OrbitControls } from "@react-three/drei"
import Overlay from "./Overlay"

function App() {
  return (
    <>
      <main>
        <div className="h-screen w-full fixed top-0 z-10 ">
          <Canvas
            shadows
            className="r3f"
            camera={{
              fov: 45,
              near: 0.1,
              far: 200,
              position: [0, 1, 6],
            }}
          >
            {/* <color args={["black"]} attach="background" /> */}

            {/* <OrbitControls makeDefault /> */}

            {/* <pointLight position={[-3, 3, 3]} intensity={50} />
            <pointLight position={[3, 3, 3]} intensity={50} /> */}

            {/* <Environment preset="city" /> */}

            {/* <fog attach="fog" args={["black", 0, 20]} /> */}

            <Model />
          </Canvas>
        </div>
        <Overlay />
      </main>
    </>
  )
}

export default App
