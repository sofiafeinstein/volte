export default function WelcomeBackPopup({ onDismiss }) {
  return (
    <div className="overlay" onClick={onDismiss}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onDismiss} aria-label="Close">×</button>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>⚡</div>
          <h2 style={{ fontSize: 22, fontWeight: 800, color: '#1A1A1A', marginBottom: 8 }}>
            Your skin misses you
          </h2>
          <p style={{ fontSize: 15, color: '#888', lineHeight: 1.6, marginBottom: 28 }}>
            It&apos;s been a couple of days. Pick up where you left off — your muscles are ready to activate.
          </p>
          <button className="btn-primary" onClick={onDismiss} style={{ borderRadius: 12 }}>
            Start Today&apos;s Session
          </button>
          <button
            onClick={onDismiss}
            style={{ display: 'block', margin: '14px auto 0', fontSize: 14, color: '#888' }}
          >
            Remind me later
          </button>
        </div>
      </div>
    </div>
  )
}
