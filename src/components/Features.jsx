// [✨ IMPECCABLE] Features.jsx
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Features() {
  const containerRef = useRef(null)

  return (
    <section ref={containerRef} style={{ position: 'relative', width: '100vw', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--size-4xl)', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundColor: 'var(--accent)', zIndex: -2 }}></div>
      
      {/* Curved white blob container */}
      <div className="blob-white" style={{ position: 'relative', width: '90%', maxWidth: '1200px', padding: 'var(--size-5xl)', display: 'flex', gap: 'var(--size-4xl)', zIndex: 1, alignItems: 'center', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
        
        {/* Left text: About Us */}
        <div style={{ flex: 1, zIndex: 2 }}>
          <h2 style={{ fontSize: 'var(--size-4xl)', color: 'var(--ink)', marginBottom: 'var(--size-xl)' }}>ABOUT US</h2>
          <p style={{ fontSize: 'var(--size-base)', lineHeight: 1.6, marginBottom: 'var(--size-base)', color: '#444' }}>
            <strong style={{ color: 'var(--ink)' }}>Art Based Cafe:</strong> Madurai's first cafe that blends incredible artisanal coffee with creative workshops. From clay flower molding to pichwai painting, our space is designed to help you explore with Shif.
          </p>
          <p style={{ fontSize: 'var(--size-base)', lineHeight: 1.6, color: '#444' }}>
            <strong style={{ color: 'var(--ink)' }}>Sip, Create, Repeat:</strong> Our signature Vanilla Espresso Coconut and Cookie Butter Lattes perfectly accompany a relaxing afternoon of tote bag painting or mirror decorating.
          </p>
        </div>

        {/* Center: Space for the 3D Coffee Cup to land */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
          {/* Curved text decoration */}
          <svg style={{ position: 'absolute', width: '300px', height: '300px', animation: 'rotate 20s linear infinite' }} viewBox="0 0 100 100">
            <path id="curve" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="transparent"/>
            <text fontSize="8" fontWeight="bold" letterSpacing="2" fill="var(--accent-dim)">
              <textPath href="#curve" startOffset="0%">Pick your Favorite Brew • Pick your Favorite Brew •</textPath>
            </text>
          </svg>
        </div>

        {/* Right: List of features */}
        <div style={{ flex: 1, zIndex: 2, paddingLeft: 'var(--size-3xl)' }}>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--size-base)', fontSize: 'var(--size-lg)', fontWeight: 600 }}>
            {['Signature Picks', 'Hot Brew', 'Cold Brew', 'Mojitos', 'Pastries', 'Creative Workshops', 'Art Supplies'].map((item, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 12l3 3 5-5"></path>
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes rotate { 100% { transform: rotate(360deg); } }
      `}} />
    </section>
  )
}
