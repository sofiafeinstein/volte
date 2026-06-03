import { useState } from 'react'

const CATEGORIES = ['All', 'Jawline', 'Cheeks', 'Eyes', 'Forehead', 'Neck']

const EXERCISES = [
  { title: 'Jaw Activator', category: 'Jawline', duration: '8 min', level: 'Beginner' },
  { title: 'Chin Tuck & Lift', category: 'Jawline', duration: '6 min', level: 'Intermediate' },
  { title: 'Cheekbone Sculptor', category: 'Cheeks', duration: '10 min', level: 'Beginner' },
  { title: 'Smile Line Smoothing', category: 'Cheeks', duration: '7 min', level: 'Beginner' },
  { title: 'Under-Eye Firming', category: 'Eyes', duration: '5 min', level: 'Intermediate' },
  { title: 'Brow Lift Sequence', category: 'Eyes', duration: '8 min', level: 'Advanced' },
  { title: 'Forehead Relaxer', category: 'Forehead', duration: '6 min', level: 'Beginner' },
  { title: 'Frontalis Toning', category: 'Forehead', duration: '9 min', level: 'Intermediate' },
  { title: 'Neck & Décolleté Lift', category: 'Neck', duration: '12 min', level: 'Beginner' },
  { title: 'Platysma Band Release', category: 'Neck', duration: '8 min', level: 'Advanced' },
]

const LEVEL_COLORS = {
  Beginner: '#34C759',
  Intermediate: '#F47920',
  Advanced: '#FF3B30',
}

function ZoneFaceIcon({ category }) {
  return (
    <svg viewBox="0 0 44 56" width="44" height="56" fill="none">
      {/* Face oval */}
      <ellipse cx="22" cy="26" rx="16" ry="20" fill="#F5F5F5" stroke="#DDDDDD" strokeWidth="1.2" />
      {/* Eyes */}
      <ellipse cx="16" cy="22" rx="3" ry="2" fill="#CCCCCC" />
      <ellipse cx="28" cy="22" rx="3" ry="2" fill="#CCCCCC" />
      {/* Nose hint */}
      <path d="M22 24 L20 30 Q22 32 24 30 L22 24Z" fill="#DDDDDD" />

      {/* Zone highlight */}
      {category === 'Jawline' && (
        <path d="M10 36 Q22 48 34 36" stroke="#F47920" strokeWidth="3" strokeLinecap="round" fill="none" />
      )}
      {category === 'Cheeks' && (
        <>
          <ellipse cx="12" cy="30" rx="4" ry="3" fill="#F47920" opacity="0.5" />
          <ellipse cx="32" cy="30" rx="4" ry="3" fill="#F47920" opacity="0.5" />
        </>
      )}
      {category === 'Eyes' && (
        <>
          <ellipse cx="16" cy="22" rx="5" ry="3.5" fill="#F47920" opacity="0.5" />
          <ellipse cx="28" cy="22" rx="5" ry="3.5" fill="#F47920" opacity="0.5" />
        </>
      )}
      {category === 'Forehead' && (
        <rect x="10" y="8" width="24" height="10" rx="5" fill="#F47920" opacity="0.5" />
      )}
      {category === 'Neck' && (
        <rect x="17" y="44" width="10" height="10" rx="3" fill="#F47920" opacity="0.5" />
      )}
      {category === 'All' && (
        <ellipse cx="22" cy="26" rx="15" ry="19" fill="#F47920" opacity="0.1" stroke="#F47920" strokeWidth="1.5" strokeDasharray="3 2" />
      )}
    </svg>
  )
}

function LibraryHero() {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #FFF3EB 0%, #FFF8F4 60%, #FFFFFF 100%)',
      border: '1px solid rgba(244,121,32,0.15)',
      borderRadius: 18,
      padding: '24px 20px',
      marginBottom: 24,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      overflow: 'hidden',
      position: 'relative',
    }}>
      <div style={{ flex: 1, zIndex: 1 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: '#F47920', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>
          Exercise Library
        </div>
        <h2 style={{ fontSize: 20, fontWeight: 800, color: '#1A1A1A', lineHeight: 1.25, marginBottom: 8 }}>
          Train every zone.<br />See real results.
        </h2>
        <p style={{ fontSize: 13, color: '#888', lineHeight: 1.5 }}>
          10 targeted routines across<br />6 facial muscle groups
        </p>
      </div>

      {/* Stylized device + face illustration */}
      <div style={{ flexShrink: 0, zIndex: 1 }}>
        <svg viewBox="0 0 90 110" width="90" height="110" fill="none">
          {/* Face silhouette */}
          <ellipse cx="45" cy="52" rx="30" ry="38" fill="#F0EDE8" />
          {/* Hair suggestion */}
          <ellipse cx="45" cy="20" rx="30" ry="16" fill="#D4C4B0" />
          {/* Eye */}
          <ellipse cx="35" cy="46" rx="5" ry="3" fill="#A09080" />
          <ellipse cx="55" cy="46" rx="5" ry="3" fill="#A09080" />
          {/* Mouth */}
          <path d="M37 62 Q45 68 53 62" stroke="#C4B0A0" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          {/* Cheekbone glow (device treatment area) */}
          <ellipse cx="30" cy="56" rx="7" ry="5" fill="#F47920" opacity="0.3" />

          {/* Device being held */}
          <rect x="4" y="42" width="26" height="46" rx="6" fill="#1A1A1A" />
          {/* Device Y-tip */}
          <line x1="17" y1="42" x2="10" y2="28" stroke="#1A1A1A" strokeWidth="5" strokeLinecap="round" />
          <line x1="17" y1="42" x2="24" y2="28" stroke="#1A1A1A" strokeWidth="5" strokeLinecap="round" />
          <circle cx="10" cy="25" r="5" fill="#222" />
          <circle cx="24" cy="25" r="5" fill="#222" />
          {/* Orange power dot */}
          <circle cx="17" cy="62" r="3" fill="#F47920" />
          {/* Orange glow */}
          <circle cx="30" cy="56" r="12" fill="#F47920" opacity="0.08" />
        </svg>
      </div>
    </div>
  )
}

export default function Library() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? EXERCISES
    : EXERCISES.filter((e) => e.category === activeCategory)

  return (
    <div className="page" style={{ paddingTop: 16 }}>
      <LibraryHero />

      <div className="filter-row">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`filter-pill${activeCategory === cat ? ' active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.map((ex) => (
        <div className="card" key={ex.title} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{
            width: 48,
            height: 56,
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#FAF8F6',
            borderRadius: 10,
            border: '1px solid #F0EDE8',
          }}>
            <ZoneFaceIcon category={ex.category} />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div className="card-title">{ex.title}</div>
            <div className="card-meta">{ex.category} · {ex.duration}</div>
          </div>
          <span
            className="badge"
            style={{
              color: LEVEL_COLORS[ex.level],
              background: `${LEVEL_COLORS[ex.level]}14`,
              borderColor: `${LEVEL_COLORS[ex.level]}40`,
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
          >
            {ex.level}
          </span>
        </div>
      ))}

      <style>{`
        .filter-row {
          display: flex;
          gap: 8px;
          overflow-x: auto;
          padding-bottom: 14px;
          scrollbar-width: none;
        }
        .filter-row::-webkit-scrollbar { display: none; }
        .filter-pill {
          white-space: nowrap;
          padding: 7px 16px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 600;
          border: 1.5px solid #EBEBEB;
          color: #888;
          background: #fff;
          transition: all 0.15s;
        }
        .filter-pill.active {
          background: #F47920;
          border-color: #F47920;
          color: #fff;
        }
      `}</style>
    </div>
  )
}
