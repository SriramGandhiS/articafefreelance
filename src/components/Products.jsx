import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Products() {
  const containerRef = useRef()

  const products = [
    {
      name: "ICED COFFEE",
      desc: "Signature cold brew with chocolate swirl",
      imgSrc: "/cup1.png", // Will be created by python script
      bgColor: "#fff4e6",
      btnColor: "#ffd200"
    },
    {
      name: "MATCHA LATTE", // The Tumbling Cup lands here
      desc: "Premium green tea matcha",
      imgSrc: "/cup2.png", 
      bgColor: "#f3fbf3",
      btnColor: "#ffd200",
      isPlaceholder: true // Tells App.jsx where to land
    },
    {
      name: "STRAWBERRY MILK",
      desc: "Fresh strawberry chunks and milk",
      imgSrc: "/cup3.png",
      bgColor: "#fff0f3",
      btnColor: "#ffd200"
    }
  ]

  useEffect(() => {
    // Parallax floating cards effect
    gsap.fromTo('.product-card', 
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    )
  }, [])

  return (
    <section ref={containerRef} className="products-section" style={{ width: '100vw', padding: 'var(--size-6xl) var(--size-4xl)', backgroundColor: '#ffffff', position: 'relative', zIndex: 50, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '80px', width: '100%', maxWidth: '1200px' }}>
        <h2 style={{ fontSize: '4rem', fontFamily: 'var(--font-display)', fontWeight: 900, color: 'var(--ink)' }}>OUR PRODUCTS</h2>
        <p style={{ color: 'var(--accent-dim)', fontSize: '1.2rem', maxWidth: '400px' }}>We make drinks with real fruits and ingredients. Say Hello to Summer with our refreshing drinks!</p>
      </div>

      <div style={{ display: 'flex', gap: '30px', width: '100%', maxWidth: '1200px', justifyContent: 'center' }}>
        {products.map((p, i) => (
          <div key={i} className="product-card" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', paddingTop: '150px' }}>
            
            {/* The Cup Image */}
            <img 
              className={p.isPlaceholder ? "matcha-cup-placeholder" : ""}
              src={p.imgSrc} 
              alt={p.name}
              style={{ 
                width: '180px', 
                height: 'auto',
                position: 'absolute', 
                top: '-40px', 
                zIndex: 10,
                filter: 'drop-shadow(0 20px 20px rgba(0,0,0,0.1))',
                opacity: p.isPlaceholder ? 0 : 1 // Hide placeholder initially
              }} 
            />

            {/* The Card Background */}
            <div style={{ 
              backgroundColor: '#fff', 
              border: `2px solid ${p.btnColor}`, 
              borderRadius: '32px', 
              padding: '120px 30px 40px', 
              width: '100%', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
            }}>
              <h3 style={{ color: p.btnColor, fontSize: '1.5rem', fontWeight: 900, marginBottom: '10px' }}>{p.name}</h3>
              <p style={{ color: 'var(--accent-dim)', textAlign: 'center', fontSize: '0.9rem', marginBottom: '20px' }}>{p.desc}</p>
              
              <button style={{ backgroundColor: p.bgColor, color: '#000', padding: '12px 30px', borderRadius: '30px', border: 'none', fontWeight: 800, fontSize: '0.8rem', cursor: 'pointer' }}>
                VIEW DETAILS
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
