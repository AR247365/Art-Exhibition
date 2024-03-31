import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

export default function Model() {
  const { nodes } = useGLTF("./graces-draco2.glb")
  const light = useRef()

  useFrame((state, delta) => {
    const x = state.pointer.x * 3
    const y = state.pointer.y * 3

    light.current.position.set(x, y, 6)
  })
  return (
    <>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Node_3.geometry}
        position={[0, -3, 0]}
        rotation={[0, -0.1, 0]}
      >
        <meshLambertMaterial color="#404044" />
      </mesh>
      <pointLight
        ref={light}
        intensity={250}
        // angle={0.5}
        // penumbra={0.5}
        // castShadow
        // shadow-mapSize={1024}
        //shadow-bias={-0.001}
        position={[3, 2, 1]}
      >
        {/* <orthographicCamera
          attach="shadow-camera"
          args={[-10, 10, -10, 10, 0.1, 50]}
        /> */}
      </pointLight>
    </>
  )
}
