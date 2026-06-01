export default function Benefits() {
  const products = [
    { name: 'Caramel Cold Coffee',   src: '/cup8.png',          badge: 'BESTSELLER', badgeColor: '#e6a15c' },
    { name: 'Madurai Filter Kapi',   src: '/filter_kapi.png',   badge: 'HOT',        badgeColor: '#E07A5F' },
    { name: 'Chocolate Frappe',      src: '/cup7.png',          badge: 'MUST TRY',   badgeColor: '#b08968' },
    { name: 'Matcha Green Latte',    src: '/cup2.png',          badge: 'HEALTHY',    badgeColor: '#4CAF50' },
    { name: 'Signature Iced Coffee', src: '/cup1.png',          badge: 'SIGNATURE',  badgeColor: '#E65F2B' },
    { name: 'Strawberry Milk',       src: '/cup4.png',          badge: 'POPULAR',    badgeColor: '#E91E63' },
    { name: 'Blue Lagoon',           src: '/cup5.png',          badge: 'REFRESHING', badgeColor: '#00BCD4' },
    { name: 'Watermelon Refresher',  src: '/cup6.png',          badge: 'NEW',        badgeColor: '#FF5722' },
    { name: 'Mint Mojito',           src: '/cup3.png',          badge: 'CLASSIC',    badgeColor: '#388E3C' },
  ]

  // Double for seamless infinite loop
  const doubled = [...products, ...products]

  return (
    <section style={{
      width: '100vw',
      backgroundColor: '#ffffff',
      padding: '0',
      overflow: 'hidden',
      borderTop: '2.5px solid var(--ink)',
      borderBottom: '2.5px solid var(--ink)',
      position: 'relative',
      zIndex: 10,
    }}>

      {/* Top label strip */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '16px',
        padding: '18px 20px 10px',
        borderBottom: '1.5px dashed #ddd',
      }}>
        <span style={{
          fontSize: '0.75rem',
          fontWeight: 900,
          textTransform: 'uppercase',
          letterSpacing: '3px',
          color: '#999',
        }}>
          ✦ Our Specialty Drinks ✦
        </span>
      </div>

      {/* Auto-scrolling product strip */}
      <div style={{ overflow: 'hidden', padding: '24px 0 28px' }}>
        <div className="products-marquee-track">
          {doubled.map((p, i) => (
            <div key={i} className="product-chip">
              {/* Drink image */}
              <div style={{
                width: '88px',
                height: '100px',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <img
                  src={p.src}
                  alt={p.name}
                  style={{
                    maxHeight: '95px',
                    width: 'auto',
                    filter: 'drop-shadow(0 6px 10px rgba(0,0,0,0.13))',
                    objectFit: 'contain',
                  }}
                />
              </div>

              {/* Name + badge */}
              <div style={{ textAlign: 'center', marginTop: '10px' }}>
                <span style={{
                  display: 'inline-block',
                  backgroundColor: p.badgeColor,
                  color: '#fff',
                  fontSize: '0.65rem',
                  fontWeight: 900,
                  padding: '3px 10px',
                  borderRadius: '20px',
                  border: '1.5px solid var(--ink)',
                  marginBottom: '5px',
                  textTransform: 'uppercase',
                }}>
                  {p.badge}
                </span>
                <p style={{
                  fontSize: '0.82rem',
                  fontWeight: 800,
                  color: 'var(--ink)',
                  fontFamily: 'var(--font-display)',
                  lineHeight: 1.2,
                  whiteSpace: 'nowrap',
                }}>
                  {p.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .products-marquee-track {
          display: flex;
          gap: 40px;
          width: max-content;
          animation: productScroll 30s linear infinite;
          padding: 0 24px;
        }
        .products-marquee-track:hover {
          animation-play-state: paused;
        }
        .product-chip {
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;
          transition: transform 0.25s ease;
          flex-shrink: 0;
          width: 130px;
        }
        .product-chip:hover {
          transform: translateY(-6px) scale(1.04);
        }
        @keyframes productScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (max-width: 600px) {
          .product-chip {
            width: 100px;
          }
          .product-chip img {
            max-height: 75px !important;
          }
        }
      `}} />

    </section>
  )
}
