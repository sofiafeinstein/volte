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

export default function Library() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? EXERCISES
    : EXERCISES.filter((e) => e.category === activeCategory)

  return (
    <div className="page">
      <div className="page-header">
        <h1>Exercise Library</h1>
        <p>{EXERCISES.length} exercises across 6 muscle groups</p>
      </div>

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
        <div className="card" key={ex.title} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div className="ex-icon" />
          <div style={{ flex: 1 }}>
            <div className="card-title">{ex.title}</div>
            <div className="card-meta">{ex.category} · {ex.duration}</div>
          </div>
          <span
            className="badge"
            style={{
              color: LEVEL_COLORS[ex.level],
              background: `${LEVEL_COLORS[ex.level]}18`,
              borderColor: `${LEVEL_COLORS[ex.level]}44`,
              whiteSpace: 'nowrap',
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
          padding-bottom: 16px;
          scrollbar-width: none;
        }
        .filter-row::-webkit-scrollbar { display: none; }
        .filter-pill {
          white-space: nowrap;
          padding: 7px 16px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 500;
          border: 1px solid var(--border);
          color: var(--text-muted);
          background: var(--bg-card);
          transition: all 0.15s;
        }
        .filter-pill.active {
          background: var(--accent);
          border-color: var(--accent);
          color: #fff;
        }
        .ex-icon {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: var(--accent-dim);
          border: 1px solid var(--accent-border);
          flex-shrink: 0;
        }
      `}</style>
    </div>
  )
}
