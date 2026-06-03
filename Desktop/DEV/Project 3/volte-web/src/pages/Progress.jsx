const WEEKLY = [
  { day: 'M', done: true },
  { day: 'T', done: true },
  { day: 'W', done: true },
  { day: 'T', done: false },
  { day: 'F', done: true },
  { day: 'S', done: false },
  { day: 'S', done: false, today: true },
]

const MILESTONES = [
  { label: '7-Day Streak', achieved: true },
  { label: '14-Day Streak', achieved: true },
  { label: '30-Day Streak', achieved: false },
  { label: '50 Sessions', achieved: false },
  { label: 'All Zones Unlocked', achieved: true },
]

const HISTORY = [
  { title: 'Jaw & Chin Contour', date: 'Jun 2', duration: '24 min', zones: ['Jawline'] },
  { title: 'Cheekbone Lift', date: 'Jun 1', duration: '18 min', zones: ['Cheeks'] },
  { title: 'Eye Area Sculpt', date: 'May 30', duration: '15 min', zones: ['Eyes'] },
  { title: 'Full Face Reset', date: 'May 29', duration: '32 min', zones: ['All zones'] },
]

export default function Progress() {
  return (
    <div className="page">
      <div className="page-header">
        <h1>Your Progress</h1>
        <p>Tracking since May 20, 2026</p>
      </div>

      <div className="stat-row">
        <div className="stat-box">
          <div className="stat-value">12</div>
          <div className="stat-label">Streak</div>
        </div>
        <div className="stat-box">
          <div className="stat-value">28</div>
          <div className="stat-label">Sessions</div>
        </div>
        <div className="stat-box">
          <div className="stat-value">9.4h</div>
          <div className="stat-label">Total</div>
        </div>
      </div>

      <p className="section-label">This Week</p>
      <div className="card">
        <div className="week-grid">
          {WEEKLY.map((day, i) => (
            <div key={i} className="week-day">
              <div className={`week-dot${day.done ? ' done' : ''}${day.today ? ' today' : ''}`} />
              <div className="week-day-label">{day.day}</div>
            </div>
          ))}
        </div>
        <div className="divider" style={{ margin: '16px 0 8px' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: 'var(--text-muted)' }}>
          <span>4 / 7 days completed</span>
          <span style={{ color: 'var(--accent)', fontWeight: 600 }}>57%</span>
        </div>
        <div className="progress-track">
          <div className="progress-fill" style={{ width: '57%' }} />
        </div>
      </div>

      <p className="section-label">Milestones</p>
      {MILESTONES.map((m) => (
        <div className="card" key={m.label} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div className={`milestone-icon${m.achieved ? ' achieved' : ''}`}>
            {m.achieved ? '✓' : '○'}
          </div>
          <div className="card-title" style={{ opacity: m.achieved ? 1 : 0.5 }}>{m.label}</div>
        </div>
      ))}

      <p className="section-label">Session History</p>
      {HISTORY.map((s) => (
        <div className="card" key={s.title}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div className="card-title">{s.title}</div>
              <div className="card-meta">{s.date} · {s.duration}</div>
            </div>
            <span className="badge">{s.zones[0]}</span>
          </div>
        </div>
      ))}

      <style>{`
        .week-grid {
          display: flex;
          justify-content: space-between;
        }
        .week-day {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
        }
        .week-dot {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--border);
          border: 2px solid transparent;
        }
        .week-dot.done {
          background: var(--accent);
          border-color: var(--accent);
        }
        .week-dot.today {
          border-color: var(--accent);
          background: var(--accent-dim);
        }
        .week-day-label {
          font-size: 12px;
          color: var(--text-muted);
        }
        .milestone-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 700;
          border: 2px solid var(--border);
          color: var(--text-muted);
          flex-shrink: 0;
        }
        .milestone-icon.achieved {
          border-color: var(--accent);
          color: var(--accent);
          background: var(--accent-dim);
        }
      `}</style>
    </div>
  )
}
