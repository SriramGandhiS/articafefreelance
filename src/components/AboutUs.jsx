import { MapPin } from 'lucide-react'

export default function AboutUs() {
  return (
    <section style={{ position: 'relative', width: '100vw', backgroundColor: 'var(--accent)', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: 'var(--size-6xl)' }}>

      {/* White rounded blob container */}
      <div className="blob-white" style={{ position: 'relative', width: '95%', maxWidth: '1400px', backgroundColor: 'var(--paper)', borderRadius: '100px', padding: 'var(--size-6xl)', display: 'flex', flexDirection: 'column', gap: 'var(--size-6xl)', marginTop: '-50px', zIndex: 1 }}>

        {/* Location Banner */}
        <div className="location-banner" style={{ width: '100%', maxWidth: '1000px', margin: '0 auto', backgroundColor: 'var(--accent)', borderRadius: '40px', padding: '30px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '3px solid var(--ink)', boxShadow: '6px 6px 0px var(--ink)', flexWrap: 'wrap', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <div style={{ width: '70px', height: '70px', backgroundColor: 'var(--accent-dim)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', border: '2px solid var(--ink)', boxShadow: '2px 2px 0 var(--ink)', flexShrink: 0 }}>
              <MapPin size={32} strokeWidth={2.5} />
            </div>
            <div>
              <h2 style={{ fontSize: '1.6rem', color: 'var(--ink)', fontFamily: 'var(--font-display)', fontWeight: 900, lineHeight: 1.1, marginBottom: '4px' }}>
                FIND US IN MADURAI
              </h2>
              <p style={{ color: '#444', fontSize: '0.9rem', fontWeight: 600 }}>
                Thathaneri, Madurai · Open Daily: 11 AM – 10 PM
              </p>
            </div>
          </div>
          <a
            href="https://www.google.com/maps/place/9%C2%B056'33.7%22N+78%C2%B005'59.2%22E/@9.9426963,78.0997635,17z"
            target="_blank" rel="noopener noreferrer"
            className="btn-primary"
            style={{ backgroundColor: 'var(--accent-dim)', color: 'white', fontSize: '0.95rem', fontWeight: 800, padding: '14px 28px', border: '2px solid var(--ink)', boxShadow: '3px 3px 0 var(--ink)', textDecoration: 'none', whiteSpace: 'nowrap' }}
          >
            NAVIGATE HERE ➔
          </a>
        </div>

        {/* About Us Split */}
        <div className="about-split" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>

          {/* Left: Text */}
          <div className="about-left" style={{ flex: 1, paddingRight: 'var(--size-6xl)' }}>
            <h2 style={{ fontSize: '3rem', color: 'var(--ink)', marginBottom: '20px' }}>ABOUT US</h2>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '16px', color: '#555' }}>
              <strong style={{ color: 'var(--ink)' }}>Art Based Cafe:</strong> Madurai's first cafe that blends incredible artisanal coffee with creative workshops. From clay flower molding to pichwai painting, our space is designed to help you explore with Shif.
            </p>
            <button className="btn-primary" style={{ marginTop: '20px', backgroundColor: 'var(--accent-dim)' }}>
              WANT TO KNOW MORE
            </button>
          </div>

          {/* Center: blank space for desktop cup */}
          <div className="about-center" style={{ flex: 0.5 }}></div>

          {/* Right: Checklist */}
          <div className="about-right" style={{ flex: 1, paddingLeft: 'var(--size-6xl)' }}>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '18px', fontSize: '1.1rem', fontWeight: 600 }}>
              {['Signature Picks', 'Hot Brew', 'Cold Brew', 'Mojitos', 'Pastries'].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
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
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .blob-white {
          padding: 5rem var(--size-6xl) !important;
        }

        /* ── TABLET ── */
        @media (max-width: 990px) {
          .blob-white {
            padding: 40px 28px !important;
            border-radius: 50px !important;
            gap: 40px !important;
            width: 100% !important;
            border-radius: 0 !important;
            margin-top: 0 !important;
          }
          .about-split {
            flex-direction: column !important;
            gap: 36px !important;
          }
          .about-left {
            padding-right: 0 !important;
            text-align: center !important;
          }
          .about-left .btn-primary {
            margin: 20px auto 0 !important;
            display: inline-flex !important;
          }
          .about-center { display: none !important; }
          .about-right {
            padding-left: 0 !important;
            width: 100% !important;
          }
          .about-right ul {
            align-items: flex-start !important;
            padding: 0 20px !important;
          }
          .location-banner {
            flex-direction: column !important;
            align-items: flex-start !important;
            padding: 24px 20px !important;
            border-radius: 24px !important;
            gap: 16px !important;
          }
          .location-banner a {
            width: 100% !important;
            justify-content: center !important;
            text-align: center !important;
          }
        }

        /* ── MOBILE ── */
        @media (max-width: 768px) {
          .blob-white {
            padding: 32px 20px !important;
            border-radius: 0 !important;
            margin-top: 0 !important;
            width: 100% !important;
          }
          section {
            padding-bottom: 40px !important;
          }
          .about-left h2 {
            font-size: 2.2rem !important;
          }
          .about-left p {
            font-size: 0.95rem !important;
          }
          .about-right ul {
            font-size: 1rem !important;
            gap: 14px !important;
          }
        }
      `}} />
    </section>
  )
}
