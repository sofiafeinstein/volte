import { useState } from 'react'

const ZONES = [
  { id: 'forehead', label: 'Forehead', x: 45, y: 8, exercises: 4, lastTrained: '3 days ago' },
  { id: 'eyes', label: 'Eye Area', x: 45, y: 24, exercises: 6, lastTrained: 'Yesterday' },
  { id: 'cheeks', label: 'Cheeks', x: 45, y: 40, exercises: 5, lastTrained: '2 days ago' },
  { id: 'jawline', label: 'Jawline', x: 45, y: 56, exercises: 4, lastTrained: 'Today' },
  { id: 'neck', label: 'Neck', x: 45, y: 72, exercises: 3, lastTrained: '4 days ago' },
]

export default function FaceMap() {
  const [selectedZone, setSelectedZone] = useState(null)
  const active = ZONES.find((z) => z.id === selectedZone)

  return (
    <div className="page">
      <div className="page-header">
        <h1>Face Map</h1>
        <p>Tap a zone to explore targeted exercises</p>
      </div>

      <div className="face-map-wrap">
        <div className="face-silhouette">
          {ZONES.map((zone) => (
            <button
              key={zone.id}
              className={`zone-dot${selectedZone === zone.id ? ' selected' : ''}`}
              style={{ left: `${zone.x}%`, top: `${zone.y}%` }}
              onClick={() => setSelectedZone(selectedZone === zone.id ? null : zone.id)}
              aria-label={zone.label}
            >
              <span className="zone-pulse" />
            </button>
          ))}

          <div className="face-labels">
            {ZONES.map((zone) => (
              <div
                key={zone.id}
                className={`zone-label${selectedZone === zone.id ? ' selected' : ''}`}
                style={{ top: `calc(${zone.y}% - 2px)` }}
                onClick={() => setSelectedZone(selectedZone === zone.id ? null : zone.id)}
              >
                {zone.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {active ? (
        <div className="card" style={{ borderColor: 'var(--accent-border)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <div className="card-title" style={{ fontSize: 18 }}>{active.label}</div>
            <span className="badge">{active.exercises} exercises</span>
          </div>
          <div className="card-meta" style={{ marginBottom: 16 }}>Last trained: {active.lastTrained}</div>
          <button className="btn-primary">Train This Zone</button>
        </div>
      ) : (
        <div className="card" style={{ textAlign: 'center', padding: 28 }}>
          <div style={{ color: 'var(--text-muted)', fontSize: 14 }}>
            Select a zone above to see targeted exercises
          </div>
        </div>
      )}

      <p className="section-label">All Zones</p>
      {ZONES.map((zone) => (
        <div
          className={`card${selectedZone === zone.id ? ' card-selected' : ''}`}
          key={zone.id}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            cursor: 'pointer',
            borderColor: selectedZone === zone.id ? 'var(--accent-border)' : undefined,
          }}
          onClick={() => setSelectedZone(selectedZone === zone.id ? null : zone.id)}
        >
          <div>
            <div className="card-title">{zone.label}</div>
            <div className="card-meta">Last: {zone.lastTrained}</div>
          </div>
          <span className="badge">{zone.exercises}</span>
        </div>
      ))}

      <style>{`
        .face-map-wrap {
          display: flex;
          justify-content: center;
          margin-bottom: 24px;
        }
        .face-silhouette {
          position: relative;
          width: 220px;
          height: 300px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 50% 50% 40% 40% / 60% 60% 40% 40%;
          overflow: visible;
        }
        .zone-dot {
          position: absolute;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: var(--accent);
          border: 2px solid var(--bg);
          transform: translateX(-50%);
          transition: transform 0.15s;
          z-index: 2;
        }
        .zone-dot.selected {
          transform: translateX(-50%) scale(1.3);
          box-shadow: 0 0 0 4px var(--accent-dim);
        }
        .zone-pulse {
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          border: 2px solid var(--accent);
          opacity: 0.4;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.5); opacity: 0; }
        }
        .face-labels {
          position: absolute;
          right: -110px;
          top: 0;
          bottom: 0;
          width: 100px;
        }
        .zone-label {
          position: absolute;
          font-size: 12px;
          font-weight: 500;
          color: var(--text-muted);
          cursor: pointer;
          white-space: nowrap;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: color 0.15s;
        }
        .zone-label::before {
          content: '';
          display: block;
          width: 20px;
          height: 1px;
          background: var(--border);
        }
        .zone-label.selected {
          color: var(--accent);
        }
        .zone-label.selected::before {
          background: var(--accent);
        }
      `}</style>
    </div>
  )
}
