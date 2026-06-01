import { Award } from 'lucide-react'

export default function Reviews() {
  const row1 = [
    { name: "@priya_madurai", initial: "PM", rating: 5, text: "Madurai's first art cafe is an absolute gem. The workshop space is peaceful and the handcrafted lattes are unmatched." },
    { name: "@karthik_ram", initial: "KR", rating: 5, text: "Extremely unique experience. Blending art workshops with high-grade specialty coffee. The brass filter coffee is exceptional." },
    { name: "@ananya_n", initial: "AN", rating: 5, text: "An aesthetic haven. The clay flower modeling session was incredible. A perfect spot to unwind and create." },
    { name: "@sanjay_creative", initial: "SC", rating: 5, text: "The attention to detail in their beverages is amazing. High-quality ingredients and a wonderful creative community." },
    { name: "@divya_t", initial: "DT", rating: 5, text: "A breath of fresh air in Madurai. Excellent brews, lovely staff, and the weekend tote bag painting is therapeutic." },
  ]
  const row2 = [
    { name: "@arun_k", initial: "AK", rating: 5, text: "Best specialty coffee in the city. The workspace is inspiring and the ceramic workshops are highly curated." },
    { name: "@sowmya_r", initial: "SR", rating: 5, text: "Perfect workspace for creators. High-speed internet, premium coffee, and a very inspiring community vibe." },
    { name: "@vijay_d", initial: "VD", rating: 5, text: "Outstanding attention to detail. Every drink is a work of art. The workshops are a must-try for everyone." },
    { name: "@meera_art", initial: "MA", rating: 5, text: "Cozy atmosphere, stellar brews, and very engaging paint sessions. Madurai desperately needed a space like this." },
    { name: "@rohit_j", initial: "RJ", rating: 5, text: "The Cookie Butter Latte is out of this world. Highly recommend attending their weekend workshops." },
  ]

  const doubled1 = [...row1, ...row1]
  const doubled2 = [...row2, ...row2]

  const Card = ({ r }) => (
    <div className="review-card">
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--accent)', border: '1.5px solid var(--ink)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '0.8rem', color: 'var(--ink)', flexShrink: 0 }}>
          {r.initial}
        </div>
        <div>
          <h4 style={{ fontSize: '0.95rem', fontWeight: 900, color: 'var(--ink)' }}>{r.name}</h4>
          <div style={{ display: 'flex', gap: '2px', marginTop: '2px' }}>
            {[...Array(r.rating)].map((_, i) => (
              <svg key={i} width="11" height="11" viewBox="0 0 24 24" fill="var(--ink)" stroke="var(--ink)" strokeWidth="1">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
          </div>
        </div>
      </div>
      <p style={{ fontSize: '0.85rem', lineHeight: 1.5, color: '#444', fontWeight: 600 }}>
        "{r.text}"
      </p>
    </div>
  )

  return (
    <section style={{ width: '100vw', padding: '80px 0', backgroundColor: 'var(--paper)', display: 'flex', flexDirection: 'column', alignItems: 'center', overflow: 'hidden', position: 'relative', zIndex: 10 }}>

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '50px', padding: '0 20px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'var(--accent)', padding: '8px 20px', borderRadius: '50px', transform: 'rotate(-1deg)', border: '2px solid var(--ink)', boxShadow: '2px 2px 0 var(--ink)', marginBottom: '14px' }}>
          <Award size={18} strokeWidth={2.5} />
          <span style={{ fontSize: '0.85rem', fontWeight: 900, color: 'var(--ink)', textTransform: 'uppercase' }}>Community Love</span>
        </div>
        <h2 style={{ fontSize: '3rem', fontFamily: 'var(--font-display)', fontWeight: 900, color: 'var(--ink)', textTransform: 'uppercase', letterSpacing: '-1px', lineHeight: 1 }}>
          GUEST EXPERIENCES
        </h2>
        <p style={{ color: '#555', fontSize: '1.1rem', fontWeight: 600, marginTop: '8px' }}>Stories of art and artisan coffee from our lovely creators.</p>
      </div>

      {/* Marquee Tracks */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100vw', overflow: 'hidden' }}>
        <div style={{ overflow: 'hidden' }}>
          <div className="marquee-track-1">
            {doubled1.map((r, i) => <Card key={`a-${i}`} r={r} />)}
          </div>
        </div>
        <div style={{ overflow: 'hidden' }}>
          <div className="marquee-track-2">
            {doubled2.map((r, i) => <Card key={`b-${i}`} r={r} />)}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marqueeLeft  { 0% { transform: translateX(0); }    100% { transform: translateX(-50%); } }
        @keyframes marqueeRight { 0% { transform: translateX(-50%); } 100% { transform: translateX(0);   } }
        .marquee-track-1 {
          display: flex; gap: 20px; width: max-content;
          animation: marqueeLeft 35s linear infinite; padding-left: 20px;
        }
        .marquee-track-1:hover { animation-play-state: paused; }
        .marquee-track-2 {
          display: flex; gap: 20px; width: max-content;
          animation: marqueeRight 35s linear infinite; padding-left: 20px;
        }
        .marquee-track-2:hover { animation-play-state: paused; }
        .review-card {
          width: 320px;
          background: #fff;
          border: 2px solid var(--ink);
          border-radius: 20px;
          padding: 20px;
          box-shadow: 4px 4px 0 var(--ink);
          display: flex; flex-direction: column; gap: 12px;
          flex-shrink: 0;
          transition: transform 0.2s;
          cursor: pointer;
        }
        .review-card:hover { transform: translateY(-4px); }
        @media (max-width: 768px) {
          .review-card {
            width: 260px !important;
            padding: 16px !important;
            border-radius: 16px !important;
          }
          .review-card p { font-size: 0.8rem !important; }
          .marquee-track-1, .marquee-track-2 { gap: 14px !important; }
          section { padding: 60px 0 !important; }
        }
      `}} />
    </section>
  )
}
