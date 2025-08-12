import React from 'react';

const Footer = () => {
  return (
    <footer style={{ background: '#003366', color: 'white', padding: '2rem 1rem', marginTop: 'auto' }}>
      {/* Main Footer Content */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '40px',
          marginBottom: '32px'
        }}
      >
        {/* Company Info */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div
              style={{
                width: '48px',
                height: '48px',
                background: 'white',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px'
              }}
            >
              💊
            </div>
            <h3 style={{ margin: 0, fontSize: '24px', fontWeight: '700', color: 'white' }}>HyCure</h3>
          </div>
          <p style={{ margin: '0 0 20px', color: '#cbd5e1', lineHeight: '1.6', fontSize: '14px' }}>
            Your trusted pharmaceutical partner providing quality medicines with complete transparency. 
            Serving the community with dedication since 2020.
          </p>

          {/* Social Links */}
          <div style={{ display: 'flex', gap: '12px' }}>
            {['📘', '📧', '📱', '📞'].map((icon, i) => (
              <button
                key={i}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  border: '1px solid #475569',
                  background: 'transparent',
                  color: 'white',
                  fontSize: '16px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#475569';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                {icon}
              </button>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div>
          <h4 style={{ margin: '0 0 16px', fontSize: '18px', fontWeight: '600', color: 'white' }}>
            Medicine Categories
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {[
              { name: 'Gynae Medicines' },
              { name: 'Ortho Medicines' },
              { name: 'General Medicines' }
            ].map((category, i) => (
              <li key={i} style={{ marginBottom: '8px' }}>
                <a
                  href="#"
                  style={{
                    color: '#cbd5e1',
                    textDecoration: 'none',
                    fontSize: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.target.style.color = '#60a5fa')}
                  onMouseLeave={(e) => (e.target.style.color = '#cbd5e1')}
                >
                  <span>{category.name}</span>
                  <span
                    style={{
                      background: '#475569',
                      color: 'white',
                      padding: '2px 8px',
                      borderRadius: '10px',
                      fontSize: '11px'
                    }}
                  >
                    {category.count}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 style={{ margin: '0 0 16px', fontSize: '18px', fontWeight: '600', color: 'white' }}>
            Contact Information
          </h4>

          <div style={{ marginBottom: '16px' }}>
            {/* Address */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '12px' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  background: '#475569',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                📍
              </div>
              <p style={{ margin: 0, color: '#cbd5e1', fontSize: '14px', lineHeight: '1.5' }}>
                Building No.101, First Floor,<br />
                Industrial Area, Khojkipur,<br />
                Ambala Cantt-133001 (Haryana)
              </p>
            </div>

            {/* Email */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  background: '#475569',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                📧
              </div>
              <a href="mailto:hycurepvtltd@gmail.com" style={{ color: '#60a5fa', fontSize: '14px' }}>
                hycurepvtltd@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  background: '#475569',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                📞
              </div>
              <div>
                <a href="tel:18008890467" style={{ color: '#60a5fa', fontSize: '14px', fontWeight: '500' }}>
                  1800-889-0467
                </a>
                <div style={{ color: '#94a3b8', fontSize: '12px' }}>Toll-Free (9 AM - 7 PM)</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          borderTop: '1px solid #475569',
          paddingTop: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
          fontSize: '14px',
          color: '#94a3b8'
        }}
      >
        <p style={{ margin: 0 }}>© {new Date().getFullYear()} HyCure Pvt Ltd. All rights reserved.</p>
        <div style={{ display: 'flex', gap: '16px', fontSize: '12px' }}>
          <a href="#" style={{ color: '#60a5fa', textDecoration: 'none' }}>Privacy Policy</a>
          <a href="#" style={{ color: '#60a5fa', textDecoration: 'none' }}>Terms of Service</a>
          <a href="#" style={{ color: '#60a5fa', textDecoration: 'none' }}>Refund Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
