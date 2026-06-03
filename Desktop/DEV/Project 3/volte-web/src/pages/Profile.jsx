import { useState } from 'react'

const SETTINGS = [
  { label: 'Daily Reminder', detail: '8:00 AM', toggle: true, on: true },
  { label: 'Session Music', detail: 'Ambient', toggle: true, on: false },
  { label: 'Show Streak Alerts', detail: '', toggle: true, on: true },
  { label: 'Language', detail: 'English', toggle: false },
  { label: 'Notifications', detail: 'Enabled', toggle: false },
]

export default function Profile() {
  const [settings, setSettings] = useState(SETTINGS)

  const toggle = (i) => {
    setSettings((prev) =>
      prev.map((s, idx) => (idx === i ? { ...s, on: !s.on } : s))
    )
  }

  return (
    <div className="page">
      <div className="page-header">
        <h1>Profile</h1>
      </div>

      <div className="profile-avatar-wrap">
        <div className="profile-avatar">SF</div>
        <div>
          <div style={{ fontWeight: 700, fontSize: 18 }}>Sofia Feinstein</div>
          <div style={{ color: 'var(--text-muted)', fontSize: 14, marginTop: 2 }}>sofiafeinstein24@gmail.com</div>
        </div>
      </div>

      <div className="stat-row">
        <div className="stat-box">
          <div className="stat-value">Pro</div>
          <div className="stat-label">Plan</div>
        </div>
        <div className="stat-box">
          <div className="stat-value">12</div>
          <div className="stat-label">Day Streak</div>
        </div>
        <div className="stat-box">
          <div className="stat-value">28</div>
          <div className="stat-label">Sessions</div>
        </div>
      </div>

      <p className="section-label">Settings</p>
      {settings.map((s, i) => (
        <div className="card" key={s.label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div className="card-title">{s.label}</div>
            {s.detail && <div className="card-meta">{s.detail}</div>}
          </div>
          {s.toggle ? (
            <button
              className={`toggle${s.on ? ' on' : ''}`}
              onClick={() => toggle(i)}
              aria-label={`Toggle ${s.label}`}
            >
              <span className="toggle-thumb" />
            </button>
          ) : (
            <span style={{ color: 'var(--text-muted)', fontSize: 13 }}>›</span>
          )}
        </div>
      ))}

      <p className="section-label">Account</p>
      <div className="card" style={{ padding: '4px 20px' }}>
        {['Edit Profile', 'Change Password', 'Privacy Settings', 'Help & Support'].map((item) => (
          <div key={item} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 0', borderBottom: '1px solid var(--border)' }}>
            <span style={{ fontSize: 15 }}>{item}</span>
            <span style={{ color: 'var(--text-muted)' }}>›</span>
          </div>
        ))}
        <div style={{ padding: '14px 0' }}>
          <button style={{ color: '#FF3B30', fontSize: 15, fontWeight: 500 }}>Sign Out</button>
        </div>
      </div>

      <style>{`
        .profile-avatar-wrap {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
        }
        .profile-avatar {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: var(--accent);
          color: #fff;
          font-size: 22px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .toggle {
          width: 46px;
          height: 26px;
          border-radius: 13px;
          background: var(--border);
          position: relative;
          transition: background 0.2s;
          flex-shrink: 0;
        }
        .toggle.on {
          background: var(--accent);
        }
        .toggle-thumb {
          position: absolute;
          top: 3px;
          left: 3px;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #fff;
          transition: left 0.2s;
        }
        .toggle.on .toggle-thumb {
          left: 23px;
        }
      `}</style>
    </div>
  )
}
