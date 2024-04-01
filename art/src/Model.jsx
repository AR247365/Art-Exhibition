import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useLayoutEffect, useRef } from "react"
import { useControls } from "leva"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

export default function Model() {
  const { nodes } = useGLTF("./graces-draco2.glb")
  const light = useRef()
  const ref = useRef()
  const tl = gsap.timeline()

  //LEVA
  const { position, rotation } = useControls({
    position: {
      value: { x: 0, y: -3, z: 0 },
      step: 0.01,
    },
    rotation: {
      value: { x: 0, y: -0.1, z: 0 },
      step: 0.01,
    },
  })

  useLayoutEffect(() => {
    new ScrollTrigger({})

    tl.to(ref.current.rotation, {
      x: 0,
      y: -1.5,
      z: 0,
      scrollTrigger: {
        trigger: "#part2",
        start: "top bottom",
        end: "top top",
        scrub: 3,
        immediateRender: false,
        markers: false,
      },
    })
    tl.to(ref.current.position, {
      x: 2.74,
      y: -2.44,
      z: 2.47,
      scrollTrigger: {
        trigger: "#part2",
        start: "top bottom",
        end: "top top",
        scrub: 3,
        immediateRender: false,
        markers: false,
      },
    })
  }, [])

  useFrame((state, delta) => {
    const x = state.pointer.x * 3
    const y = state.pointer.y * 3

    light.current.position.set(x, y, 6)
  })
  return (
    <>
      <mesh
        ref={ref}
        castShadow
        receiveShadow
        geometry={nodes.Node_3.geometry}
        position={[position.x, position.y, position.z]}
        rotation={[rotation.x, rotation.y, rotation.z]}
      >
        <meshLambertMaterial color="#404044" />
      </mesh>
      <pointLight ref={light} intensity={250} position={[3, 2, 1]} />
    </>
  )
}
