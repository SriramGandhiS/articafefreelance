import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="site-footer">

      {/* 3-Column Grid */}
      <div className="footer-grid">

        {/* Col 1: Location */}
        <div className="footer-card">
          <div className="footer-badge">
            <MapPin size={15} strokeWidth={2.5} />
            <span>FIND US</span>
          </div>
          <h3>MADURAI CAFE</h3>
          <p>16, Bypass Road, Thathaneri,<br />Madurai, Tamil Nadu 625018, India</p>
          <a
            href="https://www.google.com/maps/place/9%C2%B056'33.7%22N+78%C2%B005'59.2%22E/@9.9426963,78.0997635,17z"
            target="_blank" rel="noopener noreferrer"
            className="btn-primary footer-btn"
          >
            GOOGLE MAPS ➔
          </a>
        </div>

        {/* Col 2: Hours */}
        <div className="footer-card">
          <div className="footer-badge">
            <Clock size={15} strokeWidth={2.5} />
            <span>TIMINGS</span>
          </div>
          <h3>CAFE HOURS</h3>
          <p>
            <strong>Café Open:</strong><br />
            Daily: 11:00 AM – 10:00 PM<br /><br />
            <strong>Workshops:</strong><br />
            Sat & Sun: Slots dynamic by Shif
          </p>
        </div>

        {/* Col 3: Contact */}
        <div className="footer-card">
          <div className="footer-badge">
            <Phone size={15} strokeWidth={2.5} />
            <span>CONTACT</span>
          </div>
          <h3>GET IN TOUCH</h3>
          <ul>
            <li><Phone size={15} /> +91 94432 12345</li>
            <li><Mail size={15} /> hello@articafe.in</li>
            <li>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              @articafe_madurai
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copy">
        © 2026 ARTI CAFE · Crafted with passion for Art & Coffee Lovers in Madurai.
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .site-footer {
          position: relative; width: 100vw;
          padding: 70px 60px 36px;
          background: #fff; border-top: 3px solid var(--ink);
          display: flex; flex-direction: column; align-items: center; gap: 50px;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px; width: 100%; max-width: 1200px;
        }
        .footer-card {
          background: #fff;
          border: 2px solid var(--ink);
          border-radius: 20px;
          padding: 28px;
          box-shadow: 4px 4px 0 var(--ink);
          display: flex; flex-direction: column; align-items: flex-start;
        }
        .footer-badge {
          display: inline-flex; align-items: center; gap: 6px;
          background: var(--accent); padding: 5px 12px;
          border-radius: 20px; border: 1.5px solid var(--ink);
          margin-bottom: 14px;
        }
        .footer-badge span {
          font-size: 0.75rem; font-weight: 900;
          text-transform: uppercase; color: var(--ink);
        }
        .footer-card h3 {
          color: var(--ink); font-size: 1.35rem; margin-bottom: 10px;
        }
        .footer-card p {
          color: #555; font-size: 0.92rem; line-height: 1.65; font-weight: 600;
          margin-bottom: 18px;
        }
        .footer-card ul {
          list-style: none; padding: 0;
          display: flex; flex-direction: column; gap: 12px;
          font-size: 0.92rem; font-weight: 600; color: #555;
        }
        .footer-card ul li {
          display: flex; align-items: center; gap: 8px;
        }
        .footer-btn {
          background: var(--accent-dim) !important;
          color: white !important;
          font-size: 0.82rem !important; font-weight: 800 !important;
          padding: 10px 20px !important;
          border: 1.5px solid var(--ink) !important;
          box-shadow: 2.5px 2.5px 0 var(--ink) !important;
          text-decoration: none !important;
        }
        .footer-copy {
          width: 100%; max-width: 1200px;
          border-top: 2px solid #eee; padding-top: 24px;
          text-align: center; color: #777;
          font-size: 0.85rem; font-weight: 600;
        }

        /* ── TABLET ── */
        @media (max-width: 900px) {
          .site-footer { padding: 50px 24px 30px !important; gap: 36px !important; }
          .footer-grid { grid-template-columns: 1fr !important; gap: 20px !important; }
          .footer-card { padding: 22px !important; border-radius: 16px !important; }
        }

        /* ── MOBILE ── */
        @media (max-width: 600px) {
          .site-footer { padding: 40px 16px 24px !important; }
          .footer-card h3 { font-size: 1.15rem !important; }
          .footer-card p, .footer-card ul { font-size: 0.85rem !important; }
          .footer-copy { font-size: 0.78rem !important; }
        }
      `}} />
    </footer>
  )
}
