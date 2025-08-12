import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section" style={{
        display: 'flex',
        gap: 32,
        alignItems: 'center',
        padding: '40px',
        borderRadius: 20,
        boxShadow: '0 12px 40px rgba(12,38,76,0.08)',
        flexWrap: 'wrap',
        marginBottom: 40
      }}>
        <div style={{ flex: 1, minWidth: '320px' }}>
          <div style={{
            display: 'inline-block',
            background: 'linear-gradient(90deg, #0b76ff, #22c55e)',
            color: 'white',
            padding: '6px 16px',
            borderRadius: '20px',
            fontSize: '12px',
            fontWeight: '700',
            letterSpacing: '0.05em',
            marginBottom: '16px',
            textTransform: 'uppercase'
          }}>
            Trusted Since 2020
          </div>
          
          <h1 style={{ 
            margin: '0 0 16px', 
            fontSize: '36px',
            fontWeight: '800',
            lineHeight: '1.2',
            background: 'linear-gradient(135deg, #1e293b, #0b76ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            HyCure — Your Trusted Pharmaceutical Partner
          </h1>
          
          <p style={{ 
            margin: '0 0 24px', 
            color: '#475569',
            fontSize: '18px',
            lineHeight: '1.6',
            maxWidth: '500px'
          }}>
            Quality medicines with complete transparency. Access detailed information about composition, 
            dosage, and pricing - all available offline for your convenience.
          </p>
          
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link to="/categories">
              <button className="btn-primary" style={{
                padding: '16px 32px',
                fontSize: '16px',
                fontWeight: '700',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span>🔍</span>
                Browse Medicines
              </button>
            </Link>
            
            {/* <button className="btn-secondary" style={{
              padding: '16px 32px',
              fontSize: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <span>📱</span>
              Download App
            </button> */}
          </div>
          
          {/* Trust Indicators */}
          <div style={{
            display: 'flex',
            gap: '32px',
            marginTop: '32px',
            paddingTop: '24px',
            borderTop: '1px solid rgba(0,0,0,0.08)'
          }}>
            <div>
              <div style={{ fontSize: '24px', fontWeight: '700', color: '#0b76ff' }}>500+</div>
              <div style={{ fontSize: '12px', color: '#64748b', fontWeight: '500' }}>Medicines</div>
            </div>
            <div>
              <div style={{ fontSize: '24px', fontWeight: '700', color: '#22c55e' }}>99.9%</div>
              <div style={{ fontSize: '12px', color: '#64748b', fontWeight: '500' }}>Uptime</div>
            </div>
            <div>
              <div style={{ fontSize: '24px', fontWeight: '700', color: '#f59e0b' }}>24/7</div>
              <div style={{ fontSize: '12px', color: '#64748b', fontWeight: '500' }}>Support</div>
            </div>
          </div>
        </div>
        
        <div style={{ 
          width: '400px', 
          flex: '0 0 auto',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            top: '-20px',
            right: '-20px',
            width: '80px',
            height: '80px',
            background: 'linear-gradient(135deg, #22c55e, #0b76ff)',
            borderRadius: '50%',
            opacity: '0.1'
          }}></div>
          
          <img src="/images/Background.jpg" alt="Quality medicines"
            style={{
              width: '100%',
              borderRadius: 16,
              boxShadow: '0 20px 60px rgba(12,38,76,0.15)',
              border: '4px solid rgba(255,255,255,0.8)'
            }} 
          />
        </div>
      </section>

      {/* Features Section */}
      <section style={{ marginBottom: 40 }}>
        <div style={{
          textAlign: 'center',
          marginBottom: 32
        }}>
          <h2 style={{ 
            fontSize: '28px', 
            fontWeight: '700', 
            margin: '0 0 12px',
            color: '#1e293b'
          }}>
            Why Choose HyCure?
          </h2>
          <p style={{ 
            color: '#64748b', 
            fontSize: '16px',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            We provide comprehensive pharmaceutical solutions with a focus on quality, transparency, and accessibility.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: 24 
        }}>
          {[
            {
              icon: "💊",
              title: "Quality Assured",
              desc: "All medicines sourced from certified manufacturers with proper quality checks",
              color: "#0b76ff"
            },
            {
              icon: "📋",
              title: "Detailed Information",
              desc: "Complete composition, dosage, and usage instructions for every medicine",
              color: "#22c55e"
            },
            {
              icon: "📱",
              title: "Offline Access",
              desc: "Browse and access medicine information even without internet connection",
              color: "#f59e0b"
            },
            {
              icon: "🚚",
              title: "Fast Delivery",
              desc: "Quick and reliable delivery to your doorstep across Haryana",
              color: "#ef4444"
            }
          ].map((feature, i) => (
            <div key={i} className="card" style={{
              textAlign: 'center',
              padding: 32
            }}>
              <div style={{
                fontSize: '48px',
                marginBottom: 16,
                background: `${feature.color}15`,
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px'
              }}>
                {feature.icon}
              </div>
              <h3 style={{ 
                margin: '0 0 12px', 
                color: '#1e293b',
                fontSize: '20px',
                fontWeight: '700'
              }}>
                {feature.title}
              </h3>
              <p style={{ 
                margin: 0, 
                color: '#64748b',
                lineHeight: '1.5'
              }}>
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 24
        }}>
          <div>
            <h3 style={{ 
              margin: '0 0 8px', 
              fontSize: '24px',
              fontWeight: '700',
              color: '#1e293b'
            }}>
              Medicine Categories
            </h3>
            <p style={{
              margin: 0,
              color: '#64748b',
              fontSize: '16px'
            }}>
              Browse medicines by specialized categories
            </p>
          </div>
          <Link to="/categories" style={{
            color: '#0b76ff',
            fontWeight: '600',
            fontSize: '14px',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}>
            View All <span>→</span>
          </Link>
        </div>

        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 20
        }}>
          {[
            { 
              name: "Gyne", 
              desc: "Women's health & prenatal supplements", 
              img: "/images/gyne.jpg",
            //   count: "45+ medicines",
              color: "#ec4899"
            },
            { 
              name: "Ortho", 
              desc: "Bone & joint care solutions", 
              img: "/images/ortho.jpg",
            //   count: "/32+ medicines",
              color: "#0b76ff"
            },
            { 
              name: "General", 
              desc: "Everyday essentials & pain relief", 
              img: "/images/genral.jpg",
            //   count: "68+ medicines",
              color: "#22c55e"
            }
          ].map((cat, i) => (
            <Link key={i} to="/categories" style={{ textDecoration: 'none' }}>
              <div className="card" style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 20,
                padding: 24,
                cursor: 'pointer'
              }}>
                <div style={{
                  width: 80,
                  height: 80,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 16,
                  background: `linear-gradient(135deg, ${cat.color}15, ${cat.color}08)`,
                  border: `2px solid ${cat.color}20`
                }}>
                  <img 
                    src={cat.img} 
                    alt={cat.name} 
                    style={{ 
                      width: 48,
                      height: 48,
                      objectFit: 'contain'
                    }} 
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <h4 style={{ 
                    margin: '0 0 6px', 
                    color: '#1e293b',
                    fontSize: '18px',
                    fontWeight: '700'
                  }}>
                    {cat.name}
                  </h4>
                  <p style={{ 
                    margin: '0 0 8px', 
                    color: '#64748b',
                    lineHeight: '1.4'
                  }}>
                    {cat.desc}
                  </p>
                  <div style={{
                    fontSize: '12px',
                    color: cat.color,
                    fontWeight: '600',
                    background: `${cat.color}10`,
                    padding: '4px 12px',
                    borderRadius: '12px',
                    display: 'inline-block'
                  }}>
                    {cat.count}
                  </div>
                </div>
                <div style={{
                  color: cat.color,
                  fontSize: '20px',
                  fontWeight: '600'
                }}>
                  →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}