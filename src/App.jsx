import { useEffect, useRef } from 'react'
import { ReactLenis } from 'lenis/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Crusol from './components/Crusol'
import Menu from './components/Menu'
import Reviews from './components/Reviews'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const lenisRef = useRef()
  const mainCupRef = useRef()
  const floatingWrapperRef = useRef()

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }
    gsap.ticker.add(update)
    gsap.ticker.lagSmoothing(0)
    return () => gsap.ticker.remove(update)
  }, [])

  useEffect(() => {
    // Infinite gentle organic float/sway for the main cup (micro-shaking/floating)
    gsap.to(floatingWrapperRef.current, {
      y: "+=12px",
      rotation: "+=3",
      duration: 2.5,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1
    })
  }, [])

  useEffect(() => {
    // On mobile, skip all scroll animations — they don't work well on touch screens
    const isMobile = window.innerWidth <= 900;

    // Background color shifts — removed (each section handles its own bg)

    if (isMobile) {
      // On mobile: hide the fixed cup entirely
      if (mainCupRef.current) mainCupRef.current.style.display = 'none';
      if (floatingWrapperRef.current) floatingWrapperRef.current.style.display = 'none';
      // Make sure the placeholder is visible on mobile
      gsap.set('.iced-coffee-placeholder', { opacity: 1 });
      return;
    }

    // Set initial position explicitly via GSAP
    gsap.set(mainCupRef.current, {
      x: "10vw",
      y: "15vh",
      rotation: 5,
      scale: 1
    })

    // Master timeline for the tumbling coffee cup
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".content-layer",
        start: "top top",
        endTrigger: ".iced-coffee-placeholder",
        end: "top 40%",
        scrub: 1,
        onUpdate: (self) => {
          if (self.progress > 0.99) {
            if(mainCupRef.current) mainCupRef.current.style.opacity = 0;
            gsap.set('.iced-coffee-placeholder', { opacity: 1 });
          } else {
            if(mainCupRef.current) mainCupRef.current.style.opacity = 1;
            gsap.set('.iced-coffee-placeholder', { opacity: 0 });
          }
        }
      }
    })

    tl.to(mainCupRef.current, {
      x: "-12vw", 
      y: "30vh", 
      rotation: -25,
      scale: 0.9,
      ease: "power1.inOut"
    })

    tl.to(mainCupRef.current, {
      x: "0vw",
      y: "48vh", 
      rotation: 10,
      scale: 0.95,
      ease: "power1.inOut"
    })

    tl.to(mainCupRef.current, {
      x: "0vw",
      y: "3.5vh",
      rotation: 0,
      scale: 0.58,
      ease: "power1.inOut"
    })

  }, [])

  return (
    <ReactLenis root ref={lenisRef} autoRaf={false} options={{ lerp: 0.1, duration: 1.2 }}>
      <div style={{ isolation: 'isolate', position: 'relative' }}>
        {/* Lightweight animated background layer */}
        <div className="canvas-container">
          <div className="bg-gradient-orb orb-1"></div>
          <div className="bg-gradient-orb orb-2"></div>
        </div>

        {/* The Master Tumbling Coffee Cup (Fixed Layer) — Desktop only */}
        <div className="desktop-cup-wrapper" style={{ position: 'fixed', inset: 0, zIndex: 100, pointerEvents: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div ref={floatingWrapperRef} style={{ width: '260px', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
            <img 
              ref={mainCupRef}
              src="/cup1.png"
              style={{ 
                position: 'absolute',
                width: '260px',
                height: 'auto',
                filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.15))',
              }} 
            />
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="content-layer" style={{ backgroundColor: 'transparent', transition: 'background-color 0.5s ease' }}>
          <Hero />
          <AboutUs />
          <Crusol />
          <Menu />
          <Reviews />
          <Footer />
        </div>
      </div>
    </ReactLenis>
  )
}
