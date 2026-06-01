import { useState } from 'react'
import { ArrowLeft, ArrowRight, Camera } from 'lucide-react'

export default function Crusol() {
  const slides = [
    { title: "CLAY FLOWER MOLDING",   desc: "Handcrafted yellow clay flower created during the 'Explore with Shif' workshop session.", imgSrc: "/workshop_flyer_0.png", bgColor: "#FFF5F7", rotate: "-3deg" },
    { title: "CRAFTING IN PROGRESS",  desc: "Creative hands shaping and detailing miniature petals alongside a signature iced coffee.", imgSrc: "/workshop_flyer_1.png", bgColor: "#ECFEFF", rotate: "2deg" },
    { title: "WORKSHOP DIRECTORY",    desc: "Family & decor workshops from sculpture painting and 3D moon lamps to brush pen art.", imgSrc: "/workshop_flyer_2.png", bgColor: "#FFF8D6", rotate: "-2deg" },
    { title: "SIGNATURE COFFEE ART",  desc: "Premium hot coffee served with a rich chocolate syrup swirl, handcrafted by our baristas.", imgSrc: "/workshop_flyer_3.png", bgColor: "#FAF0E6", rotate: "4deg" },
    { title: "THE ARTICAFE MENU",     desc: "Aesthetic printed menu detailing our hot brews, cold lattes, pastries, and signature mocktails.", imgSrc: "/workshop_flyer_4.png", bgColor: "#FFF9E6", rotate: "-1deg" },
    { title: "ART ON DISPLAY",        desc: "Beautiful landscape canvases and hand-drawn portraits exhibited on easels inside the cafe.", imgSrc: "/workshop_flyer_5.png", bgColor: "#F3E8FF", rotate: "3deg" },
    { title: "COZY CAFE WALLS",       desc: "Visual wall gallery displaying abstract artwork alongside our signature beverage recipes.", imgSrc: "/workshop_flyer_6.png", bgColor: "#ECFEFF", rotate: "-2deg" },
    { title: "ARTICAFE STOREFRONT",   desc: "Our signature lit storefront neon sign and welcoming blue door structure at night.", imgSrc: "/workshop_flyer_7.png", bgColor: "#F1F5F9", rotate: "2deg" },
    { title: "CONNECT WITH ARTICAFE", desc: "Follow our creative space, dynamic workshops, and fresh supplies on Instagram @articafe.in.", imgSrc: "/workshop_flyer_8.png", bgColor: "#E0F2FE", rotate: "-3deg" },
  ]

  const [currIdx, setCurrIdx] = useState(0)
  const next = () => setCurrIdx(p => (p + 1) % slides.length)
  const prev = () => setCurrIdx(p => (p - 1 + slides.length) % slides.length)

  const NavBtn = ({ onClick, children }) => (
    <button onClick={onClick} className="crusol-nav-btn">
      {children}
    </button>
  )

  return (
    <section style={{ width: '100vw', padding: '80px 0 80px', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 10, overflow: 'hidden' }}>

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '50px', padding: '0 20px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'var(--accent)', padding: '8px 20px', borderRadius: '50px', transform: 'rotate(1deg)', border: '2px solid var(--ink)', boxShadow: '2px 2px 0 var(--ink)', marginBottom: '14px' }}>
          <Camera size={18} strokeWidth={2.5} />
          <span style={{ fontSize: '0.85rem', fontWeight: 900, color: 'var(--ink)', textTransform: 'uppercase' }}>Polaroid Gallery</span>
        </div>
        <h2 style={{ fontSize: '3rem', fontFamily: 'var(--font-display)', fontWeight: 900, color: 'var(--ink)', textTransform: 'uppercase', letterSpacing: '-1px', lineHeight: 1 }}>
          WORKSHOP GALLERY
        </h2>
        <p style={{ color: '#555', fontSize: '1.1rem', fontWeight: 600, marginTop: '8px' }}>
          Moments of art, craft, and specialty coffee captured live at Articafe.
        </p>
      </div>

      {/* Carousel */}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', width: '100%', maxWidth: '1100px', justifyContent: 'center', gap: '24px', padding: '0 20px' }}>

        <NavBtn onClick={prev}><ArrowLeft size={22} strokeWidth={2.5} /></NavBtn>

        <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', alignItems: 'center', flex: 1, minHeight: '480px' }}>

          {/* Prev — desktop only */}
          <div className="crusol-side-card" style={{ flex: 0.75, backgroundColor: '#ffffff', border: '2px solid var(--ink)', borderRadius: '16px', padding: '12px 12px 24px', boxShadow: '3px 3px 0px var(--ink)', transform: 'scale(0.85) rotate(-5deg)', opacity: 0.35, pointerEvents: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', userSelect: 'none', transition: 'all 0.5s ease-in-out' }}>
            <div style={{ width: '100%', height: '240px', backgroundColor: slides[(currIdx - 1 + slides.length) % slides.length].bgColor, borderRadius: '8px', border: '1.5px solid var(--ink)', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
              <img src={slides[(currIdx - 1 + slides.length) % slides.length].imgSrc} style={{ maxHeight: '220px', width: 'auto', objectFit: 'contain' }} />
            </div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, marginTop: '12px', fontSize: '0.9rem', color: 'var(--ink)', textAlign: 'center' }}>
              {slides[(currIdx - 1 + slides.length) % slides.length].title}
            </h4>
          </div>

          {/* Active card */}
          <div style={{ flex: 1.3, backgroundColor: '#ffffff', border: '3px solid var(--ink)', borderRadius: '24px', padding: '20px 20px 32px', boxShadow: '8px 8px 0px var(--ink)', transform: `rotate(${slides[currIdx].rotate}) scale(1.02)`, transition: 'all 0.5s ease-in-out', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 5 }}>
            {/* Tape strip */}
            <div style={{ position: 'absolute', top: '-14px', width: '80px', height: '26px', backgroundColor: 'rgba(255, 210, 0, 0.88)', transform: 'rotate(-2deg)', border: '1.5px solid var(--ink)', zIndex: 10 }}></div>

            <div style={{ width: '100%', height: '300px', backgroundColor: slides[currIdx].bgColor, borderRadius: '12px', border: '2px solid var(--ink)', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
              <img src={slides[currIdx].imgSrc} alt={slides[currIdx].title} style={{ maxHeight: '280px', width: 'auto', objectFit: 'contain', animation: 'floatSlow 4s ease-in-out infinite' }} />
            </div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, marginTop: '18px', fontSize: '1.2rem', color: 'var(--ink)', textAlign: 'center' }}>
              {slides[currIdx].title}
            </h4>
            <p style={{ color: '#555', textAlign: 'center', fontSize: '0.85rem', padding: '0 8px', marginTop: '6px', lineHeight: 1.4, fontWeight: 600 }}>
              {slides[currIdx].desc}
            </p>
          </div>

          {/* Next — desktop only */}
          <div className="crusol-side-card" style={{ flex: 0.75, backgroundColor: '#ffffff', border: '2px solid var(--ink)', borderRadius: '16px', padding: '12px 12px 24px', boxShadow: '3px 3px 0px var(--ink)', transform: 'scale(0.85) rotate(5deg)', opacity: 0.35, pointerEvents: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', userSelect: 'none', transition: 'all 0.5s ease-in-out' }}>
            <div style={{ width: '100%', height: '240px', backgroundColor: slides[(currIdx + 1) % slides.length].bgColor, borderRadius: '8px', border: '1.5px solid var(--ink)', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
              <img src={slides[(currIdx + 1) % slides.length].imgSrc} style={{ maxHeight: '220px', width: 'auto', objectFit: 'contain' }} />
            </div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, marginTop: '12px', fontSize: '0.9rem', color: 'var(--ink)', textAlign: 'center' }}>
              {slides[(currIdx + 1) % slides.length].title}
            </h4>
          </div>

        </div>

        <NavBtn onClick={next}><ArrowRight size={22} strokeWidth={2.5} /></NavBtn>
      </div>

      {/* Dot indicators */}
      <div style={{ display: 'flex', gap: '8px', marginTop: '28px', justifyContent: 'center' }}>
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrIdx(i)} style={{
            width: i === currIdx ? '24px' : '8px',
            height: '8px',
            borderRadius: '50px',
            backgroundColor: i === currIdx ? 'var(--ink)' : '#ccc',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            transition: 'all 0.3s ease',
          }} />
        ))}
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50%       { transform: translateY(-8px) rotate(1deg); }
        }
        .crusol-nav-btn {
          width: 52px; height: 52px;
          border-radius: 50%;
          background: #fff;
          border: 2px solid var(--ink);
          box-shadow: 4px 4px 0 var(--ink);
          display: flex; justify-content: center; align-items: center;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
          flex-shrink: 0;
        }
        .crusol-nav-btn:hover {
          transform: translate(-2px,-2px);
          box-shadow: 6px 6px 0 var(--ink);
        }
        .crusol-nav-btn:active {
          transform: translate(1px,1px);
          box-shadow: 2px 2px 0 var(--ink);
        }
        @media (max-width: 768px) {
          .crusol-side-card { display: none !important; }
          section { padding: 60px 0 60px !important; }
        }
      `}} />
    </section>
  )
}
