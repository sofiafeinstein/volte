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

const CIRCUMFERENCE = 2 * Math.PI * 19

function FlameStreakHero() {
  const progress = 12 / 14

  return (
    <div className="card" style={{
      background: 'linear-gradient(135deg, #FFF3EB 0%, #FFF8F4 100%)',
      border: '1px solid rgba(244,121,32,0.2)',
      marginBottom: 20,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        {/* Flame + number */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <svg width="40" height="50" viewBox="0 0 40 50" fill="none">
            <path d="M20 2C20 2 30 12 30 22C30 27 28 31 24 33C24 26 20 23 20 23C20 23 16 26 16 33C12 31 10 27 10 22C10 12 20 2 20 2Z" fill="#F47920" />
            <path d="M20 25C20 25 25 30 25 35C25 40 22.5 43 20 44C17.5 43 15 40 15 35C15 30 20 25 20 25Z" fill="#FFB347" />
            <ellipse cx="20" cy="47" rx="7" ry="3" fill="#F47920" opacity="0.2" />
          </svg>
          <div>
            <div style={{ fontSize: 56, fontWeight: 800, color: '#F47920', lineHeight: 1 }}>12</div>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#888' }}>Day Streak 🔥</div>
          </div>
        </div>

        <div style={{ marginLeft: 'auto', textAlign: 'center' }}>
          {/* Progress ring to next milestone */}
          <svg width="56" height="56" viewBox="0 0 48 48">
            <circle cx="24" cy="24" r="19" fill="none" stroke="#F0EDE8" strokeWidth="4" />
            <circle
              cx="24" cy="24" r="19"
              fill="none"
              stroke="#F47920"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray={`${CIRCUMFERENCE * progress} ${CIRCUMFERENCE}`}
              transform="rotate(-90 24 24)"
            />
            <text x="24" y="21" textAnchor="middle" fontSize="9" fontWeight="700" fill="#1A1A1A" fontFamily="system-ui">12/14</text>
            <text x="24" y="31" textAnchor="middle" fontSize="7.5" fill="#888" fontFamily="system-ui">days</text>
          </svg>
          <div style={{ fontSize: 10, color: '#888', fontWeight: 500, marginTop: 2 }}>next milestone</div>
        </div>
      </div>

      {/* Week calendar */}
      <div style={{ marginTop: 18, display: 'flex', justifyContent: 'space-between' }}>
        {WEEKLY.map((d, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5 }}>
            <div style={{
              width: 32,
              height: 32,
              borderRadius: '50%',
              background: d.done ? '#F47920' : d.today ? '#FFF3EB' : '#F0F0F0',
              border: d.today ? '2px solid #F47920' : '2px solid transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              {d.done && (
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M2.5 6.5l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
            <span style={{ fontSize: 10, color: d.done ? '#F47920' : '#BBBBBB', fontWeight: 600 }}>{d.day}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Progress() {
  return (
    <div className="page">
      <div className="page-header">
        <h1>Your Progress</h1>
        <p>Tracking since May 20, 2026</p>
      </div>

      <FlameStreakHero />

      <div className="stat-row">
        <div className="stat-box">
          <div className="stat-value">28</div>
          <div className="stat-label">Sessions</div>
        </div>
        <div className="stat-box">
          <div className="stat-value">9.4h</div>
          <div className="stat-label">Total Time</div>
        </div>
        <div className="stat-box">
          <div className="stat-value">87%</div>
          <div className="stat-label">Completion</div>
        </div>
      </div>

      <p className="section-label">Milestones</p>
      {MILESTONES.map((m) => (
        <div className="card" key={m.label} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 18px' }}>
          <div style={{
            width: 34,
            height: 34,
            borderRadius: '50%',
            border: `2px solid ${m.achieved ? '#F47920' : '#EBEBEB'}`,
            background: m.achieved ? '#FFF3EB' : '#FAFAFA',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}>
            {m.achieved ? (
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7l3.5 3.5 5.5-6" stroke="#F47920" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#DDD' }} />
            )}
          </div>
          <div className="card-title" style={{ opacity: m.achieved ? 1 : 0.45, marginBottom: 0 }}>{m.label}</div>
          {m.achieved && <span className="badge" style={{ marginLeft: 'auto' }}>Done</span>}
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
    </div>
  )
}
