import React, { useState } from 'react';
import MedicineList from './MedicineList';

const categories = [
  { name: 'All', icon: '🏥', count: null },
  { name: 'Gyne', icon: '👩‍⚕️'},
  { name: 'Ortho', icon: '🦴'},
  { name: 'General', icon: '💊' }
];

export default function CategoriesPage() {
  const [cat, setCat] = useState('All');

  return (
    <div>
      {/* Header Section */}
      <div style={{
        background: 'var(--glass-2)',
        padding: '32px',
        borderRadius: 'var(--card-radius)',
        marginBottom: '32px',
        border: '1px solid var(--border)',
        backdropFilter: 'blur(8px)'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '24px',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div>
            <h1 style={{
              margin: '0 0 8px',
              fontSize: '32px',
              fontWeight: '800',
              color: 'var(--text)',
              lineHeight: '1.2'
            }}>
              Medicine Catalog
            </h1>
            <p style={{
              margin: '0',
              color: 'var(--text-light)',
              fontSize: '16px',
              maxWidth: '500px',
              lineHeight: '1.5'
            }}>
              Browse through our comprehensive collection of quality medicines. 
              Filter by category to find exactly what you need.
            </p>
          </div>
{/*           
          <div style={{
            position: 'relative',
            minWidth: '280px'
          }}>
            <input
              type="text"
              placeholder="Search medicines..."
              style={{
                width: '100%',
                padding: '12px 16px 12px 44px',
                border: '2px solid var(--border)',
                borderRadius: '12px',
                fontSize: '14px',
                background: 'white',
                transition: 'all 0.2s ease'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = 'var(--accent)';
                e.target.style.boxShadow = '0 0 0 3px rgba(11, 118, 255, 0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'var(--border)';
                e.target.style.boxShadow = 'none';
              }}
            />
            <span style={{
              position: 'absolute',
              left: '14px',
              top: '50%',
              transform: 'translateY(-50%)',
              fontSize: '16px',
              color: 'var(--muted)'
            }}>
              🔍
            </span>
          </div> */}
        </div>

        {/* Category Filters */}
        <div>
          <div style={{
            fontSize: '14px',
            fontWeight: '600',
            color: 'var(--text-light)',
            marginBottom: '12px',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            Filter by Category
          </div>
          
          <div className="categories-row">
            {categories.map(c => (
              <button
                key={c.name}
                onClick={() => setCat(c.name)}
                className={`category-chip ${cat === c.name ? 'active' : ''}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  position: 'relative'
                }}
              >
                <span style={{ fontSize: '16px' }}>{c.icon}</span>
                {c.name}
                {c.count && (
                  <span style={{
                    background: cat === c.name ? 'rgba(255,255,255,0.2)' : 'var(--accent-light)',
                    color: cat === c.name ? 'white' : 'var(--accent)',
                    fontSize: '11px',
                    padding: '2px 8px',
                    borderRadius: '10px',
                    fontWeight: '600'
                  }}>
                    {c.count}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Summary */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '24px',
        padding: '0 4px'
      }}>
        <div style={{
          color: 'var(--text-light)',
          fontSize: '14px'
        }}>
          {cat === 'All' ? 'Showing all medicines' : `Showing medicines in ${cat} category`}
        </div>
        
        <div style={{
          display: 'flex',
          gap: '8px',
          alignItems: 'center'
        }}>
          {/* <span style={{
            fontSize: '12px',
            color: 'var(--muted)',
            fontWeight: '500'
          }}>
            Sort by:
          </span>
          <select style={{
            padding: '6px 12px',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            fontSize: '12px',
            background: 'white',
            color: 'var(--text)',
            cursor: 'pointer'
          }}>
            <option>Name (A-Z)</option>
            <option>Price (Low to High)</option>
            <option>Price (High to Low)</option>
            <option>Recently Added</option>
          </select> */}
        </div>
      </div>

      {/* Medicine List */}
      <MedicineList category={cat === 'All' ? null : cat} />
      
     
    </div>
  );
}