export default function Home() {
  return (
    <div className="page">
      <div className="page-header">
        <h1>Good morning, Sofia 👋</h1>
        <p>Ready to train? Here&apos;s your day.</p>
      </div>

      <div className="stat-row">
        <div className="stat-box">
          <div className="stat-value">12</div>
          <div className="stat-label">Day Streak</div>
        </div>
        <div className="stat-box">
          <div className="stat-value">3</div>
          <div className="stat-label">This Week</div>
        </div>
        <div className="stat-box">
          <div className="stat-value">87%</div>
          <div className="stat-label">Completion</div>
        </div>
      </div>

      <p className="section-label">Today&apos;s Session</p>
      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <div className="card-title">Upper Lift — Full Activation</div>
            <div className="card-meta">32 min · 18 exercises</div>
          </div>
          <span className="badge">New</span>
        </div>
        <div className="progress-track" style={{ marginTop: 14 }}>
          <div className="progress-fill" style={{ width: '0%' }} />
        </div>
        <div style={{ marginTop: 16 }}>
          <button className="btn-primary">Start Session</button>
        </div>
      </div>

      <p className="section-label">Recent Activity</p>
      {[
        { title: 'Jaw & Chin Contour', meta: 'Yesterday · 24 min', pct: 100 },
        { title: 'Cheekbone Lift', meta: '2 days ago · 18 min', pct: 100 },
        { title: 'Eye Area Sculpt', meta: '4 days ago · 15 min', pct: 85 },
      ].map((item) => (
        <div className="card" key={item.title}>
          <div className="card-title">{item.title}</div>
          <div className="card-meta">{item.meta}</div>
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${item.pct}%` }} />
          </div>
        </div>
      ))}
    </div>
  )
}
