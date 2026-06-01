export default function Menu() {
  const menuSections = [
    {
      title: "Signature Picks",
      items: [
        { name: 'Caramel Cold Coffee',  desc: 'Smooth caramel swirl with whipped cream', imgSrc: '/cup8.png',        bgColor: '#FAF0E6', badge: 'BESTSELLER', badgeColor: '#e6a15c' },
        { name: 'Madurai Filter Kapi',  desc: 'Authentic rich South Indian brew',        imgSrc: '/filter_kapi.png', bgColor: '#FFF5EE', badge: 'HOT',        badgeColor: '#E07A5F' },
        { name: 'Chocolate Frappe',     desc: 'Thick chocolate with whipped cream',      imgSrc: '/cup7.png',        bgColor: '#F5EBE6', badge: 'MUST TRY',   badgeColor: '#b08968' },
      ]
    },
    {
      title: "Cold Brew & Lattes",
      items: [
        { name: 'Matcha Green Latte',    desc: 'Premium matcha with fresh mint',          imgSrc: '/cup2.png',  bgColor: '#F0FDF4', badge: 'HEALTHY',   badgeColor: '#4CAF50' },
        { name: 'Signature Iced Coffee', desc: 'Chocolate syrup swirl & ice',            imgSrc: '/cup1.png',  bgColor: '#FFF9E6', badge: 'SIGNATURE', badgeColor: '#E65F2B' },
        { name: 'Strawberry Milk',       desc: 'Pink strawberry chunks & ice',            imgSrc: '/cup4.png',  bgColor: '#FFF5F7', badge: 'POPULAR',   badgeColor: '#E91E63' },
      ]
    },
    {
      title: "Mojitos & Coolers",
      items: [
        { name: 'Blue Lagoon',           desc: 'Electric blue drink with lemon',          imgSrc: '/cup5.png',  bgColor: '#ECFEFF', badge: 'REFRESHING', badgeColor: '#00BCD4' },
        { name: 'Watermelon Refresher',  desc: 'Fresh watermelon blend with crushed ice', imgSrc: '/cup6.png',  bgColor: '#FEF2F2', badge: 'NEW',        badgeColor: '#FF5722' },
        { name: 'Mint Mojito',           desc: 'Lime slices, mint leaves, crushed ice',   imgSrc: '/cup3.png',  bgColor: '#F2FDF5', badge: 'CLASSIC',    badgeColor: '#388E3C' },
      ]
    }
  ]

  return (
    <section style={{ width: '100vw', padding: '80px 0', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '60px', padding: '0 20px' }}>
        <div style={{ display: 'inline-block', backgroundColor: 'var(--accent)', padding: '8px 24px', borderRadius: '50px', transform: 'rotate(-2deg)', marginBottom: '14px', border: '2px solid var(--ink)', boxShadow: '2px 2px 0 var(--ink)' }}>
          <span style={{ fontSize: '0.9rem', fontWeight: 900, color: 'var(--ink)', textTransform: 'uppercase', letterSpacing: '1px' }}>Artisanal Flavors</span>
        </div>
        <h2 style={{ fontSize: '3.5rem', fontFamily: 'var(--font-display)', fontWeight: 900, color: 'var(--ink)', textTransform: 'uppercase', letterSpacing: '-1px', marginBottom: '10px', lineHeight: 1 }}>
          THE COLLECTION
        </h2>
        <p style={{ color: '#555', fontSize: '1.1rem', fontWeight: 600 }}>Artisan crafted beverages for your creative workshops.</p>
      </div>

      {/* Menu Sections */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '60px', width: '100%', maxWidth: '1200px', padding: '0 20px' }}>
        {menuSections.map((section, sIdx) => (
          <div key={sIdx}>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--ink)', borderBottom: '3px solid var(--ink)', paddingBottom: '12px', marginBottom: '32px', fontFamily: 'var(--font-display)', display: 'inline-block', paddingRight: '32px' }}>
              {section.title}
            </h3>
            <div className="menu-cards-grid">
              {section.items.map((item, iIdx) => (
                <div
                  key={iIdx}
                  className="menu-card"
                  style={{ backgroundColor: item.bgColor, borderRadius: '28px', padding: '32px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', border: '2px solid var(--ink)', boxShadow: '4px 4px 0px var(--ink)', cursor: 'pointer', position: 'relative', transition: 'transform 0.3s, box-shadow 0.3s' }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-8px) rotate(1deg)'
                    e.currentTarget.style.boxShadow = '8px 8px 0px var(--ink)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0) rotate(0)'
                    e.currentTarget.style.boxShadow = '4px 4px 0px var(--ink)'
                  }}
                >
                  {/* Badge */}
                  <span style={{ position: 'absolute', top: '16px', right: '16px', backgroundColor: item.badgeColor, color: 'white', padding: '5px 12px', borderRadius: '20px', fontSize: '0.7rem', fontWeight: 900, textTransform: 'uppercase', border: '1.5px solid var(--ink)', boxShadow: '2px 2px 0px var(--ink)' }}>
                    {item.badge}
                  </span>

                  {/* Cup image */}
                  <div style={{ height: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                    <img
                      className={item.name === 'Signature Iced Coffee' ? 'iced-coffee-placeholder' : ''}
                      src={item.imgSrc}
                      alt={item.name}
                      style={{ maxHeight: '210px', width: 'auto', transition: 'transform 0.3s ease-in-out', filter: 'drop-shadow(0 12px 12px rgba(0,0,0,0.1))', opacity: item.name === 'Signature Iced Coffee' ? 0 : 1 }}
                    />
                  </div>

                  <h4 style={{ color: 'var(--ink)', fontSize: '1.35rem', fontWeight: 900, marginBottom: '6px', textAlign: 'center' }}>{item.name}</h4>
                  <p style={{ color: '#555', textAlign: 'center', fontSize: '0.9rem', lineHeight: 1.5, fontWeight: 600 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Workshop Special Banner */}
        <div className="workshop-banner" style={{ marginTop: '20px', backgroundColor: 'var(--soft-yellow)', borderRadius: '32px', padding: '50px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '3px solid var(--ink)', boxShadow: '6px 6px 0px var(--ink)', flexWrap: 'wrap', gap: '32px' }}>
          <div style={{ flex: '1 1 400px', minWidth: '260px' }}>
            <div style={{ display: 'inline-block', backgroundColor: 'var(--accent-dim)', padding: '5px 14px', borderRadius: '20px', color: 'white', fontWeight: 900, fontSize: '0.75rem', border: '1.5px solid var(--ink)', marginBottom: '14px' }}>
              SPECIAL EDITION
            </div>
            <h3 style={{ color: 'var(--ink)', fontSize: '2.4rem', fontFamily: 'var(--font-display)', marginBottom: '14px', lineHeight: 0.95 }}>
              WORKSHOP SPECIAL DRINK
            </h3>
            <p style={{ color: '#444', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '24px', fontWeight: 600 }}>
              An art-themed colorful layered beverage matching the creative vibe of Articafe workshops. Served with a custom polaroid of your creation.
            </p>
            <button className="btn-primary" style={{ border: '2px solid var(--ink)', boxShadow: '3px 3px 0 var(--ink)' }}>
              PRE-ORDER NOW
            </button>
          </div>

          <div style={{ flex: '0 0 300px', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff', borderRadius: '24px', border: '2px solid var(--ink)', boxShadow: '4px 4px 0px var(--ink)', padding: '16px', overflow: 'hidden' }}>
            <img src="/cup10.png" alt="Workshop Special" style={{ maxHeight: '270px', width: 'auto', filter: 'drop-shadow(0 12px 12px rgba(0,0,0,0.1))', transform: 'rotate(-5deg)' }} />
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .menu-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        @media (max-width: 900px) {
          .menu-cards-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px !important;
          }
          section { padding: 60px 0 !important; }
          .workshop-banner {
            flex-direction: column !important;
            padding: 32px 24px !important;
            border-radius: 24px !important;
          }
          .workshop-banner > div:last-child {
            flex: unset !important;
            width: 100% !important;
            height: 240px !important;
          }
        }
        @media (max-width: 600px) {
          .menu-cards-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 14px !important;
          }
          .menu-card {
            padding: 20px 14px !important;
            border-radius: 20px !important;
          }
          .menu-card > div { height: 150px !important; }
          .menu-card > div img { max-height: 140px !important; }
          .menu-card h4 { font-size: 1rem !important; }
          .menu-card p  { font-size: 0.78rem !important; }
          .menu-card span { font-size: 0.6rem !important; padding: 3px 8px !important; top: 10px !important; right: 10px !important; }
        }
      `}} />
    </section>
  )
}
