import { useState } from 'react'

function DeviceHero() {
  return (
    <div style={{
      background: 'linear-gradient(160deg, #F8F8F8 0%, #F0EEE9 100%)',
      borderRadius: 20,
      padding: '28px 20px 20px',
      marginBottom: 24,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute',
        width: 180,
        height: 180,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(244,121,32,0.12) 0%, transparent 70%)',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }} />

      <svg viewBox="0 0 180 360" width="150" height="300" fill="none" style={{ position: 'relative', zIndex: 1 }}>
        {/* Y-probe left arm */}
        <line x1="90" y1="135" x2="55" y2="42" stroke="#1A1A1A" strokeWidth="16" strokeLinecap="round" />
        {/* Y-probe right arm */}
        <line x1="90" y1="135" x2="125" y2="42" stroke="#1A1A1A" strokeWidth="16" strokeLinecap="round" />
        {/* Left tip bulb */}
        <circle cx="55" cy="36" r="16" fill="#222222" />
        <circle cx="55" cy="36" r="8" fill="#333333" />
        {/* Right tip bulb */}
        <circle cx="125" cy="36" r="16" fill="#222222" />
        <circle cx="125" cy="36" r="8" fill="#333333" />
        {/* Cable connector */}
        <rect x="78" y="110" width="24" height="32" rx="6" fill="#1A1A1A" />

        {/* Device body */}
        <rect x="18" y="128" width="144" height="220" rx="26" fill="#111111" />
        {/* Body highlight edge */}
        <rect x="18" y="128" width="144" height="4" rx="2" fill="#444444" opacity="0.6" />
        {/* Left edge gloss */}
        <rect x="18" y="132" width="4" height="212" rx="2" fill="#2A2A2A" opacity="0.5" />

        {/* Brand strip at top of body */}
        <rect x="34" y="144" width="112" height="32" rx="6" fill="#1A1A1A" />
        <text x="90" y="163" textAnchor="middle" fontSize="11" fontWeight="800" letterSpacing="2" fill="#FFFFFF" fontFamily="system-ui, sans-serif">VOLT</text>
        <text x="117" y="163" textAnchor="middle" fontSize="11" fontWeight="800" fill="#F47920" fontFamily="system-ui, sans-serif">É</text>

        {/* POWER / INTENSITY label row */}
        <text x="90" y="197" textAnchor="middle" fontSize="7" fill="#666666" letterSpacing="1.5" fontFamily="system-ui, sans-serif">POWER</text>
        {/* Power dots */}
        {[44, 63, 82, 101, 120, 136].map((cx, i) => (
          <circle key={i} cx={cx} cy={208} r="4.5" fill={i < 4 ? '#F47920' : '#2A2A2A'} />
        ))}
        <text x="90" y="226" textAnchor="middle" fontSize="7" fill="#666666" letterSpacing="1.5" fontFamily="system-ui, sans-serif">INTENSITY</text>

        {/* Divider line */}
        <line x1="34" y1="233" x2="146" y2="233" stroke="#2A2A2A" strokeWidth="1" />

        {/* Mode buttons — 2×2 grid */}
        {/* STIMULATE button */}
        <rect x="30" y="241" width="54" height="30" rx="7" fill="#1E1E1E" stroke="#333" strokeWidth="1" />
        <text x="57" y="252" textAnchor="middle" fontSize="6" fill="#F47920" letterSpacing="0.8" fontFamily="system-ui, sans-serif">STIMULATE</text>
        <text x="57" y="263" textAnchor="middle" fontSize="5.5" fill="#888888" fontFamily="system-ui, sans-serif">Face · Body · Scalp</text>

        {/* SMOOTH button */}
        <rect x="96" y="241" width="54" height="30" rx="7" fill="#1E1E1E" stroke="#333" strokeWidth="1" />
        <text x="123" y="252" textAnchor="middle" fontSize="6.5" fill="#FFFFFF" letterSpacing="0.8" fontFamily="system-ui, sans-serif">SMOOTH</text>
        <text x="123" y="263" textAnchor="middle" fontSize="5.5" fill="#888888" fontFamily="system-ui, sans-serif">Face · Body</text>

        {/* EYE mode button */}
        <rect x="30" y="279" width="54" height="26" rx="7" fill="#F47920" />
        <text x="57" y="296" textAnchor="middle" fontSize="7" fill="#FFFFFF" letterSpacing="1" fontWeight="700" fontFamily="system-ui, sans-serif">EYE MODE</text>

        {/* OFF button */}
        <rect x="96" y="279" width="54" height="26" rx="7" fill="#1E1E1E" stroke="#2A2A2A" strokeWidth="1" />
        <text x="123" y="296" textAnchor="middle" fontSize="7" fill="#555555" letterSpacing="1" fontFamily="system-ui, sans-serif">POWER OFF</text>

        {/* Bottom brand text */}
        <text x="90" y="328" textAnchor="middle" fontSize="7.5" fill="#555555" letterSpacing="1.5" fontFamily="system-ui, sans-serif">SMART // ReactiV™</text>

        {/* Bottom rounded edge highlight */}
        <path d="M18 320 Q18 348 44 348 L136 348 Q162 348 162 320" stroke="#1E1E1E" strokeWidth="1" fill="none" />
      </svg>

      <div style={{ position: 'absolute', bottom: 16, left: 0, right: 0, textAlign: 'center' }}>
        <span style={{ fontSize: 11, fontWeight: 600, color: '#888', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          Galvanic Lift Technology
        </span>
      </div>
    </div>
  )
}

function HowItWorks() {
  const steps = [
    {
      num: '01',
      label: 'Choose your zone',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#F47920" strokeWidth="2" strokeLinecap="round">
          <circle cx="12" cy="12" r="3" />
          <circle cx="12" cy="12" r="8" />
          <line x1="12" y1="2" x2="12" y2="5" />
          <line x1="12" y1="19" x2="12" y2="22" />
          <line x1="2" y1="12" x2="5" y2="12" />
          <line x1="19" y1="12" x2="22" y2="12" />
        </svg>
      ),
    },
    {
      num: '02',
      label: 'Follow the video',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#F47920" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <polygon points="10 8 16 12 10 16" fill="#F47920" stroke="none" />
        </svg>
      ),
    },
    {
      num: '03',
      label: 'Track your results',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#F47920" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      ),
    },
  ]

  return (
    <div style={{ marginBottom: 24 }}>
      <p className="section-label">How it works</p>
      <div style={{ display: 'flex', gap: 10 }}>
        {steps.map((step, i) => (
          <div key={i} style={{
            flex: 1,
            background: '#fff',
            border: '1px solid #EBEBEB',
            borderRadius: 14,
            padding: '16px 12px',
            textAlign: 'center',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
          }}>
            <div style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              background: '#FFF3EB',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 10px',
            }}>
              {step.icon}
            </div>
            <div style={{ fontSize: 10, fontWeight: 700, color: '#F47920', letterSpacing: '0.08em', marginBottom: 4 }}>
              {step.num}
            </div>
            <div style={{ fontSize: 12, fontWeight: 600, color: '#1A1A1A', lineHeight: 1.3 }}>
              {step.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function FlameStreakCard() {
  const WEEKLY = [
    { day: 'M', done: true },
    { day: 'T', done: true },
    { day: 'W', done: true },
    { day: 'T', done: false },
    { day: 'F', done: true },
    { day: 'S', done: false },
    { day: 'S', done: false, today: true },
  ]

  return (
    <div className="card" style={{ background: 'linear-gradient(135deg, #FFF3EB 0%, #FFF8F3 100%)', border: '1px solid rgba(244,121,32,0.2)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
        {/* Flame SVG */}
        <svg width="32" height="40" viewBox="0 0 32 40" fill="none">
          <path d="M16 1C16 1 24 10 24 18C24 22 22 25.5 19 27.5C19 21.5 16 18.5 16 18.5C16 18.5 13 21.5 13 27.5C10 25.5 8 22 8 18C8 10 16 1 16 1Z" fill="#F47920" />
          <path d="M16 21C16 21 20 25 20 29C20 33 18.2 35.5 16 36.5C13.8 35.5 12 33 12 29C12 25 16 21 16 21Z" fill="#FFB347" />
          <ellipse cx="16" cy="38" rx="5" ry="2.5" fill="#F47920" opacity="0.2" />
        </svg>
        <div>
          <div style={{ fontSize: 42, fontWeight: 800, color: '#F47920', lineHeight: 1 }}>12</div>
          <div style={{ fontSize: 13, color: '#888', fontWeight: 500 }}>Day Streak 🔥</div>
        </div>
        <div style={{ marginLeft: 'auto', textAlign: 'center' }}>
          {/* Mini progress ring toward next milestone (14 days) */}
          <svg width="48" height="48" viewBox="0 0 48 48">
            <circle cx="24" cy="24" r="19" fill="none" stroke="#EBEBEB" strokeWidth="4" />
            <circle
              cx="24" cy="24" r="19"
              fill="none"
              stroke="#F47920"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 19 * (12 / 14)} ${2 * Math.PI * 19}`}
              transform="rotate(-90 24 24)"
            />
            <text x="24" y="29" textAnchor="middle" fontSize="10" fontWeight="700" fill="#1A1A1A" fontFamily="system-ui">14d</text>
          </svg>
          <div style={{ fontSize: 10, color: '#888', marginTop: 2 }}>next goal</div>
        </div>
      </div>
      {/* Week dots */}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {WEEKLY.map((d, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <div style={{
              width: 28,
              height: 28,
              borderRadius: '50%',
              background: d.done ? '#F47920' : d.today ? '#FFF3EB' : '#F0F0F0',
              border: d.today ? '2px solid #F47920' : '2px solid transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              {d.done && (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
            <span style={{ fontSize: 10, color: '#888', fontWeight: 600 }}>{d.day}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  const [reminderVisible, setReminderVisible] = useState(true)

  return (
    <div className="page">
      <div className="page-header">
        <h1>Good morning, Sofia 👋</h1>
        <p>Ready to train? Here&apos;s your day.</p>
      </div>

      <DeviceHero />
      <HowItWorks />

      <FlameStreakCard />

      <div className="stat-row" style={{ marginTop: 12 }}>
        <div className="stat-box">
          <div className="stat-value">3</div>
          <div className="stat-label">This Week</div>
        </div>
        <div className="stat-box">
          <div className="stat-value">28</div>
          <div className="stat-label">Sessions</div>
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

      {/* Daily reminder banner */}
      {reminderVisible && (
        <div style={{
          background: 'linear-gradient(135deg, #FFF3EB 0%, #FFF8F4 100%)',
          border: '1px solid rgba(244,121,32,0.25)',
          borderRadius: 14,
          padding: '14px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          marginTop: 8,
          boxShadow: '0 2px 10px rgba(244,121,32,0.08)',
        }}>
          <span style={{ fontSize: 22, flexShrink: 0 }}>⚡</span>
          <p style={{ flex: 1, fontSize: 13, fontWeight: 500, color: '#1A1A1A', lineHeight: 1.4 }}>
            Today&apos;s session is waiting — <strong>10 minutes</strong> to charged skin
          </p>
          <button
            onClick={() => setReminderVisible(false)}
            style={{ color: '#888', fontSize: 18, flexShrink: 0, lineHeight: 1 }}
            aria-label="Dismiss"
          >
            ×
          </button>
        </div>
      )}
    </div>
  )
}
