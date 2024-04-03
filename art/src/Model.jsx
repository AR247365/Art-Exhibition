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
  // const { position, rotation } = useControls({
  //   position: {
  //     value: { x: 2.5, y: -2.75, z: 2.3 },
  //     step: 0.01,
  //   },
  //   rotation: {
  //     value: { x: 0, y: -0.32, z: 0 },
  //     step: 0.01,
  //   },
  // })

  useLayoutEffect(() => {
    new ScrollTrigger({})

    tl.to(ref.current.position, {
      x: 2.74,
      y: -2.44,
      z: 2.47,
      scrollTrigger: {
        trigger: "#part-2",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
        markers: false,
      },
    })
    tl.to(ref.current.rotation, {
      x: 0,
      y: -1.5,
      z: 0,
      scrollTrigger: {
        trigger: "#part-2",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
        markers: false,
      },
    })

    tl.to(ref.current.rotation, {
      x: 0,
      y: -0.32,
      z: 0,
      scrollTrigger: {
        trigger: "#part-3",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
        markers: false,
      },
    })

    tl.to(ref.current.position, {
      x: 2.5,
      y: -2.75,
      z: 2.3,
      scrollTrigger: {
        trigger: "#part-3",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
        markers: false,
      },
    })

    tl.to(ref.current.rotation, {
      x: 0,
      y: 0.68,
      z: 0,
      scrollTrigger: {
        trigger: "#part-4",
        start: "top center",
        end: "top top",
        scrub: true,
        immediateRender: false,
        markers: false,
      },
    })

    tl.to(ref.current.position, {
      x: -3.45,
      y: -2.32,
      z: 2.3,
      scrollTrigger: {
        trigger: "#part-4",
        start: "top center",
        end: "top top",
        scrub: true,
        immediateRender: false,
        markers: false,
      },
    })

    tl.to(ref.current.rotation, {
      x: 0,
      y: 0.68,
      z: 0,
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
        end: "top top",
        scrub: true,
        immediateRender: false,
        markers: false,
      },
    })

    tl.to(ref.current.position, {
      x: -9.45,
      y: -2.32,
      z: 2.3,
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
        end: "top top",
        scrub: true,
        immediateRender: false,
        markers: false,
      },
    })
  }, [])

  // useFrame((state, delta) => {
  //   const x = state.pointer.x * 3
  //   const y = state.pointer.y * 3

  //   light.current.position.set(x, y, 6)
  // })

  useFrame((state, delta) => {
    const targetX = state.pointer.x * 3
    const targetY = state.pointer.y * 3
    const targetZ = 6
    const lerpFactor = 0.03 // Adjust this value to control the speed and trailing effect

    // Manually interpolate the light's position towards the target position
    light.current.position.set(
      light.current.position.x +
        (targetX - light.current.position.x) * lerpFactor,
      light.current.position.y +
        (targetY - light.current.position.y) * lerpFactor,
      light.current.position.z +
        (targetZ - light.current.position.z) * lerpFactor
    )
  })

  return (
    <>
      <mesh
        ref={ref}
        castShadow
        receiveShadow
        geometry={nodes.Node_3.geometry}
        // position={[position.x, position.y, position.z]}
        // rotation={[rotation.x, rotation.y, rotation.z]}
        position={[0, -3, 0]}
        rotation={[0, -0.1, 0]}
      >
        {/* <meshLambertMaterial color="#404044" /> */}
        <meshPhongMaterial specular="#404044" shininess={50} />
      </mesh>

      <pointLight
        ref={light}
        intensity={40}
        //power={8000}
        //position={[0, 0, 0]}
      />
    </>
  )
}
