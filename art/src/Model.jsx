import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

export default function Model() {
  const { nodes } = useGLTF("./graces-draco2.glb")
  const light = useRef()

  useFrame((state, delta) => {
    light.current.position,
      [state.pointer.x * 12, 0, 8 + state.pointer.y * 4],
      0.2,
      delta
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
      <spotLight
        angle={0.5}
        penumbra={0.5}
        ref={light}
        castShadow
        intensity={10}
        shadow-mapSize={1024}
        shadow-bias={-0.001}
      >
        <orthographicCamera
          attach="shadow-camera"
          args={[-10, 10, -10, 10, 0.1, 50]}
        />
      </spotLight>
    </>
  )
}
