import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function MedicineCard({ medicine }) {
  const [imageError, setImageError] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const toggleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };

  // Generate category color
  const getCategoryColor = (category) => {
    const colors = {
      'Gyne': '#ec4899',
      'Ortho': '#0b76ff', 
      'General': '#22c55e'
    };
    return colors[category] || '#64748b';
  };

  return (
    <Link to={`/medicine/${medicine.id}`} className="medicine-card-link">
      <div className="card" role="button" aria-label={`Open ${medicine.name}`}>
        {/* Image Section */}
        <div className="img-wrap">
          {!imageError ? (
            <img
              src={medicine.image}
              alt={medicine.name}
              loading="lazy"
              onError={handleImageError}
            />
          ) : (
            <div style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, #f8fafc, #e2e8f0)',
              color: 'var(--muted)',
              fontSize: '48px'
            }}>
              💊
            </div>
          )}
          
          {/* Wishlist Button */}
          <button
            onClick={toggleWishlist}
            style={{
              position: 'absolute',
              top: '12px',
              right: '12px',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              border: 'none',
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(4px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
            }}
          >
            <span style={{
              fontSize: '16px',
              color: isWishlisted ? '#ef4444' : '#64748b'
            }}>
              {isWishlisted ? '❤️' : '🤍'}
            </span>
          </button>

          {/* Category Badge */}
          <div style={{
            position: 'absolute',
            top: '12px',
            left: '12px',
            background: getCategoryColor(medicine.category),
            color: 'white',
            padding: '4px 10px',
            borderRadius: '12px',
            fontSize: '11px',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            {medicine.category}
          </div>
        </div>

        {/* Content Section */}
        <div className="card-content">
          <h3 style={{
            margin: '0 0 8px 0',
            fontSize: '18px',
            fontWeight: '700',
            color: 'var(--text)',
            lineHeight: '1.3',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}>
            {medicine.name}
          </h3>
          
          <p className="composition" style={{
            color: 'var(--text-light)',
            fontSize: '14px',
            margin: '0 0 16px 0',
            lineHeight: '1.4',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}>
            {medicine.salt || medicine.composition || 'Composition details available'}
          </p>

          

          <div className="meta">
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '4px'
            }}>
              <span className="weight" style={{
                fontSize: '12px',
                color: 'var(--muted)',
                background: 'var(--accent-light)',
                padding: '4px 10px',
                borderRadius: '12px',
                fontWeight: '500',
                width: 'fit-content'
              }}>
                {medicine.weight}
              </span>
              
              {/* Stock Status */}
              <span style={{
                fontSize: '11px',
                color: '#22c55e',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}>
                <span style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: '#22c55e'
                }}></span>
                In Stock
              </span>
            </div>

           
          </div>

         
        </div>
      </div>
    </Link>
  );
}