import React, { useEffect, useRef, useState } from "react"
import Navbar from "./components/navbar"
import Hero from "./components/Hero"
import TrustedBy from "./components/Trustedby"
import Services from "./components/Services"
import Title from "./components/Title"
import ServiceCard from "./components/ServiceCard"
import OurWork from "./components/OurWork"
import Teams from "./components/Teams"
import ContactUs from "./components/ContactUs"
import Footer from "./components/Footer"
import { Toaster } from "react-hot-toast"

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "Light"
  )

  const dotRef = useRef(null)
  const ringRef = useRef(null)

  const mouse = useRef({ x: 0, y: 0 })
  const position = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (window.innerWidth < 768) return

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }

    document.addEventListener("mousemove", handleMouseMove)

    let animationFrame

    const animate = () => {
      position.current.x += (mouse.current.x - position.current.x) * 0.15
      position.current.y += (mouse.current.y - position.current.y) * 0.15

      if (dotRef.current && ringRef.current) {
        dotRef.current.style.transform =
          `translate3d(${mouse.current.x - 6}px, ${mouse.current.y - 6}px, 0)`

        ringRef.current.style.transform =
          `translate3d(${position.current.x - 20}px, ${position.current.y - 20}px, 0)`
      }

      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <div className="dark:bg-black relative">
      <Toaster />
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <TrustedBy />
      <Services />
     {/* <Title /> */ } 
      {/*<ServiceCard />*/}
      <OurWork />
      <Teams />
      <ContactUs />
      <Footer theme={theme} />

      {/* Cursor Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 h-10 w-10 rounded-full border border-primary
                   pointer-events-none z-[9999] transition-transform duration-75"
                                                     style={{transition:'transform 0.1s ease out'}}/>

      {/* Cursor Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 h-3 w-3 rounded-full bg-primary
                   pointer-events-none z-[9999]"
      />
    </div>
  )
}

export default App