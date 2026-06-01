import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Hero() {
  const containerRef = useRef(null)
  
  useEffect(() => {
    const isMobile = window.innerWidth <= 768

    if (!isMobile) {
      gsap.to('.hero-blob-yellow', {
        y: -150, ease: 'none',
        scrollTrigger: { trigger: containerRef.current, scrub: true, start: 'top top', end: 'bottom top' }
      })
      gsap.to('.hero-coffee-bg-1', {
        y: -120, rotation: -8, ease: 'none',
        scrollTrigger: { trigger: containerRef.current, scrub: true, start: 'top top', end: 'bottom top' }
      })
      gsap.to('.hero-coffee-bg-2', {
        y: -160, rotation: 8, ease: 'none',
        scrollTrigger: { trigger: containerRef.current, scrub: true, start: 'top top', end: 'bottom top' }
      })
      gsap.to('.hero-matcha', {
        y: -180, rotation: -35, ease: 'none',
        scrollTrigger: { trigger: containerRef.current, scrub: true, start: 'top top', end: 'bottom top' }
      })
      gsap.to('.hero-lagoon', {
        y: -140, rotation: 35, ease: 'none',
        scrollTrigger: { trigger: containerRef.current, scrub: true, start: 'top top', end: 'bottom top' }
      })
      gsap.to('.hero-watermelon', {
        y: -100, rotation: -20, ease: 'none',
        scrollTrigger: { trigger: containerRef.current, scrub: true, start: 'top top', end: 'bottom top' }
      })
      gsap.to('.hero-coffee-bg-1', { x: '+=8px', y: '-=12px', rotation: '+=3', duration: 3.2, yoyo: true, repeat: -1, ease: 'sine.inOut' })
      gsap.to('.hero-coffee-bg-2', { x: '-=10px', y: '+=15px', rotation: '-=4', duration: 2.8, yoyo: true, repeat: -1, ease: 'sine.inOut' })
      gsap.to('.hero-matcha', { y: '+=10px', x: '+=5px', rotation: '+=5', duration: 2.5, yoyo: true, repeat: -1, ease: 'sine.inOut' })
      gsap.to('.hero-lagoon', { y: '-=12px', x: '-=8px', rotation: '-=5', duration: 2.9, yoyo: true, repeat: -1, ease: 'sine.inOut' })
      gsap.to('.hero-watermelon', { y: '+=15px', x: '-=5px', rotation: '+=4', duration: 3.4, yoyo: true, repeat: -1, ease: 'sine.inOut' })
      gsap.to('.hero-bean-1', { y: '+=15px', rotation: '+=20', duration: 2.1, yoyo: true, repeat: -1, ease: 'sine.inOut' })
      gsap.to('.hero-bean-2', { y: '-=12px', rotation: '-=30', duration: 2.5, yoyo: true, repeat: -1, ease: 'sine.inOut' })
      gsap.fromTo('.drag-line',
        { strokeDashoffset: 500 },
        { strokeDashoffset: 0, ease: 'none', scrollTrigger: { trigger: containerRef.current, scrub: 0.5, start: 'top top', end: 'bottom top' } }
      )
    } else {
      // Mobile: gentle float for signature cup only
      gsap.to('.hero-mobile-cup', { y: '-=10px', duration: 3, yoyo: true, repeat: -1, ease: 'sine.inOut' })
    }
  }, [])

  return (
    <section ref={containerRef} style={{ position: 'relative', width: '100vw', minHeight: '100vh', overflow: 'hidden', marginBottom: '-2px' }}>
      
      {/* Background blue */}
      <div style={{ position: 'absolute', inset: 0, backgroundColor: 'var(--blue-bg)', zIndex: -2 }}></div>

      {/* Yellow wave blob */}
      <div className="hero-blob-yellow" style={{ 
        position: 'absolute', top: '38%', left: '-10%', width: '120%', height: '110%',
        backgroundColor: 'var(--accent)', borderRadius: '50% 50% 0 0 / 25% 25% 0 0',
        zIndex: -1, boxShadow: 'inset 0 10px 30px rgba(0,0,0,0.03)'
      }}></div>

      {/* ── DESKTOP NAV ── */}
      <nav className="hero-nav-desktop" style={{ 
        position: 'absolute', top: 0, width: '100%', 
        padding: 'var(--size-xl) var(--size-3xl)', 
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
        zIndex: 30, color: 'white', fontWeight: 600, fontSize: 'var(--size-sm)' 
      }}>
        <div style={{ display: 'flex', gap: 'var(--size-xl)' }}>
          <span style={{ cursor: 'pointer' }}>HOME</span>
          <span style={{ cursor: 'pointer' }}>WORKSHOPS</span>
          <span style={{ cursor: 'pointer' }}>MENU</span>
        </div>
        <div style={{ fontSize: 'var(--size-xl)', fontFamily: 'var(--font-display)', fontWeight: 900, letterSpacing: '2px' }}>
          ARTI CAFE
        </div>
        <div style={{ display: 'flex', gap: 'var(--size-xl)' }}>
          <span style={{ cursor: 'pointer' }}>REVIEWS</span>
          <span style={{ cursor: 'pointer' }}>LOCATION</span>
        </div>
      </nav>

      {/* ── MOBILE NAV ── */}
      <nav className="hero-nav-mobile" style={{
        position: 'absolute', top: 0, width: '100%',
        padding: '18px 22px',
        display: 'none', justifyContent: 'center', alignItems: 'center',
        zIndex: 30,
      }}>
        <div style={{ fontSize: '1.4rem', fontFamily: 'var(--font-display)', fontWeight: 900, letterSpacing: '3px', color: 'white' }}>
          ARTI CAFE
        </div>
      </nav>

      {/* ── DESKTOP DECORATIVE CUPS ── */}
      <div className="hero-desktop-only" style={{ position: 'absolute', bottom: '0%', left: '3%', width: '380px', zIndex: 10 }}>
        <img className="hero-coffee-bg-1" src="/filter_kapi_top.png" alt="Filter Kappi"
          style={{ width: '100%', height: 'auto', transform: 'rotate(-18deg)', filter: 'drop-shadow(0 20px 35px rgba(0,0,0,0.22))' }} />
      </div>
      <svg className="hero-desktop-only" style={{ position: 'absolute', bottom: '30%', left: '11%', width: '120px', height: '180px', pointerEvents: 'none', zIndex: 12, overflow: 'visible' }} viewBox="0 0 100 150">
        <path className="steam-line steam-1" d="M 35,150 Q 20,110 40,70 T 30,0" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="3" strokeLinecap="round" />
        <path className="steam-line steam-2" d="M 50,150 Q 65,100 45,60 T 55,0" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="3.5" strokeLinecap="round" />
        <path className="steam-line steam-3" d="M 65,150 Q 50,115 70,75 T 60,0" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="3" strokeLinecap="round" />
      </svg>
      <img className="hero-coffee-bg-2 hero-desktop-only" src="/cup4.png" alt="Strawberry Milk"
        style={{ position: 'absolute', bottom: '4%', right: '3%', width: '280px', height: 'auto', transform: 'rotate(16deg)', opacity: 0.95, zIndex: 10, filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.18))' }} />
      <img className="hero-matcha hero-desktop-only" src="/cup2.png" alt="Mint Mojito"
        style={{ position: 'absolute', top: '18%', left: '8%', width: '150px', height: 'auto', transform: 'rotate(-20deg)', opacity: 0.9, zIndex: 10, filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.12))' }} />
      <img className="hero-lagoon hero-desktop-only" src="/cup5.png" alt="Blue Lagoon"
        style={{ position: 'absolute', top: '15%', right: '10%', width: '150px', height: 'auto', transform: 'rotate(22deg)', opacity: 0.9, zIndex: 10, filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.12))' }} />
      <img className="hero-watermelon hero-desktop-only" src="/cup6.png" alt="Watermelon Refresher"
        style={{ position: 'absolute', bottom: '8%', right: '22%', width: '160px', height: 'auto', transform: 'rotate(-12deg)', opacity: 0.9, zIndex: 10, filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.12))' }} />
      <svg className="hero-desktop-only" style={{ position: 'absolute', top: '50%', left: '20%', width: '30vw', height: '40vh', zIndex: 1, pointerEvents: 'none', overflow: 'visible' }}>
        <path className="drag-line" d="M 0,0 Q 150,150 250,300" fill="none" stroke="var(--ink)" strokeWidth="3" strokeDasharray="10 15" strokeLinecap="round" />
        <path d="M 240,290 L 250,300 L 235,305" fill="none" stroke="var(--ink)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <svg className="hero-bean-1 hero-desktop-only" style={{ position: 'absolute', top: '25%', left: '33%', width: '32px', height: '22px', zIndex: 1, filter: 'drop-shadow(0 5px 5px rgba(0,0,0,0.15))', pointerEvents: 'none' }} viewBox="0 0 30 20">
        <ellipse cx="15" cy="10" rx="15" ry="10" fill="#4e2c0e" />
        <path d="M 0,10 Q 15,18 30,10" stroke="#2e1505" strokeWidth="2" fill="none" />
      </svg>
      <svg className="hero-bean-2 hero-desktop-only" style={{ position: 'absolute', top: '56%', left: '37%', width: '28px', height: '18px', zIndex: 1, filter: 'drop-shadow(0 5px 5px rgba(0,0,0,0.15))', pointerEvents: 'none' }} viewBox="0 0 30 20">
        <ellipse cx="15" cy="10" rx="15" ry="10" fill="#4e2c0e" />
        <path d="M 0,10 Q 15,18 30,10" stroke="#2e1505" strokeWidth="2" fill="none" />
      </svg>

      {/* ── DESKTOP HERO TEXT ── */}
      <div className="hero-desktop-only" style={{ position: 'relative', zIndex: 5, paddingTop: '22vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 style={{ fontSize: '6.5vw', color: '#ffffff', fontWeight: 900, fontFamily: 'var(--font-display)', letterSpacing: '-2px', textAlign: 'center', lineHeight: 0.9, textShadow: '0 8px 16px rgba(0,0,0,0.08)' }}>PICK YOUR</h1>
        <h1 style={{ fontSize: '8.5vw', color: '#ffffff', fontWeight: 900, fontFamily: 'var(--font-display)', letterSpacing: '-2px', textAlign: 'center', lineHeight: 0.9, marginTop: '5px', textShadow: '0 8px 16px rgba(0,0,0,0.08)' }}>FAVORITE BREW</h1>
        <p style={{ textAlign: 'center', maxWidth: '650px', fontSize: '1.25rem', marginTop: '30px', lineHeight: 1.6, color: 'var(--ink)', fontWeight: 600, padding: '0 20px' }}>
          Beat the summer heat at Madurai's premier art café! Fuel your creativity with our refreshing summer drinks, crafted with hydration, cooling & antioxidant benefits to keep your inspiration flowing.
        </p>
        <button className="btn-primary" style={{ marginTop: '35px', backgroundColor: 'var(--accent-dim)', color: 'white', fontSize: '1.1rem', fontWeight: 800, padding: '16px 40px', borderRadius: '50px', border: '2px solid var(--ink)', boxShadow: '4px 4px 0 var(--ink)', cursor: 'pointer' }}>
          EXPLORE SPECIALTIES
        </button>
      </div>

      {/* ── MOBILE HERO LAYOUT ── */}
      <div className="hero-mobile-layout" style={{
        display: 'none',
        position: 'relative',
        zIndex: 5,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '90px 24px 60px',
        textAlign: 'center',
      }}>
        {/* Tag pill */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          backgroundColor: 'rgba(255,255,255,0.25)',
          backdropFilter: 'blur(8px)',
          border: '1.5px solid rgba(255,255,255,0.5)',
          borderRadius: '50px', padding: '6px 18px',
          marginBottom: '20px',
        }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'white', letterSpacing: '2px', textTransform: 'uppercase' }}>
            ✦ Madurai's Art Café
          </span>
        </div>

        {/* Headline */}
        <h1 style={{
          fontSize: '13vw',
          color: '#ffffff',
          fontWeight: 900,
          fontFamily: 'var(--font-display)',
          letterSpacing: '-1px',
          lineHeight: 0.95,
          textShadow: '0 4px 12px rgba(0,0,0,0.1)',
          marginBottom: '6px',
        }}>PICK YOUR</h1>
        <h1 style={{
          fontSize: '13vw',
          color: '#ffffff',
          fontWeight: 900,
          fontFamily: 'var(--font-display)',
          letterSpacing: '-1px',
          lineHeight: 0.95,
          textShadow: '0 4px 12px rgba(0,0,0,0.1)',
        }}>FAVORITE</h1>
        <h1 style={{
          fontSize: '13vw',
          color: 'var(--ink)',
          fontWeight: 900,
          fontFamily: 'var(--font-display)',
          letterSpacing: '-1px',
          lineHeight: 0.95,
        }}>BREW</h1>

        {/* Signature cup image */}
        <img
          className="hero-mobile-cup"
          src="/cup1.png"
          alt="Signature Iced Coffee"
          style={{
            width: '200px',
            height: 'auto',
            marginTop: '30px',
            marginBottom: '10px',
            filter: 'drop-shadow(0 15px 25px rgba(0,0,0,0.2))',
          }}
        />

        {/* Subtext */}
        <p style={{
          fontSize: '0.95rem',
          lineHeight: 1.65,
          color: 'var(--ink)',
          fontWeight: 600,
          maxWidth: '320px',
          marginBottom: '28px',
        }}>
          Sip on cooling, antioxidant-rich summer drinks designed to keep you hydrated and creative while you workshop at Madurai's first art café!
        </p>

        {/* CTA */}
        <button className="btn-primary" style={{
          backgroundColor: 'var(--accent-dim)',
          color: 'white',
          fontSize: '1rem',
          fontWeight: 800,
          padding: '15px 36px',
          borderRadius: '50px',
          border: '2px solid var(--ink)',
          boxShadow: '3px 3px 0 var(--ink)',
          cursor: 'pointer',
        }}>
          EXPLORE SPECIALTIES
        </button>

        {/* Two small side cups on mobile */}
        <img src="/cup2.png" alt="" style={{
          position: 'absolute', top: '12%', left: '-5%',
          width: '90px', opacity: 0.85,
          transform: 'rotate(-18deg)',
          filter: 'drop-shadow(0 8px 12px rgba(0,0,0,0.15))',
          pointerEvents: 'none',
        }} />
        <img src="/cup4.png" alt="" style={{
          position: 'absolute', top: '10%', right: '-5%',
          width: '90px', opacity: 0.85,
          transform: 'rotate(20deg)',
          filter: 'drop-shadow(0 8px 12px rgba(0,0,0,0.15))',
          pointerEvents: 'none',
        }} />
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes steamWave {
          0%   { stroke-dashoffset: 300; opacity: 0; transform: translateY(0) scaleX(1); }
          15%  { opacity: 0.7; }
          50%  { transform: translateY(-40px) scaleX(1.2); }
          85%  { opacity: 0.7; }
          100% { stroke-dashoffset: 0; opacity: 0; transform: translateY(-100px) scaleX(1.4); }
        }
        .steam-line { stroke-dasharray: 150; animation: steamWave 5s infinite ease-in-out; }
        .steam-1 { animation-delay: 0s; }
        .steam-2 { animation-delay: 1.6s; }
        .steam-3 { animation-delay: 3.2s; }

        @media (max-width: 768px) {
          .hero-desktop-only { display: none !important; }
          .hero-nav-desktop  { display: none !important; }
          .hero-nav-mobile   { display: flex !important; }
          .hero-mobile-layout { display: flex !important; }
        }
        @media (min-width: 769px) {
          .hero-nav-mobile   { display: none !important; }
          .hero-mobile-layout { display: none !important; }
        }
      `}} />

    </section>
  )
}
