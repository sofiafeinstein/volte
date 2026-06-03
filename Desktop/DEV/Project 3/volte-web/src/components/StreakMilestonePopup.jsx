const CONFETTI_COLORS = ['#F47920', '#FFB347', '#FF6B35', '#FFF3EB', '#FF8C42', '#FFAD60', '#E8621A', '#FFC67A']

export default function StreakMilestonePopup({ streak, onDismiss }) {
  return (
    <div className="overlay" onClick={onDismiss}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()} style={{ overflow: 'hidden' }}>
        <button className="modal-close" onClick={onDismiss} aria-label="Close">×</button>

        {/* Confetti dots */}
        {CONFETTI_COLORS.map((color, i) => (
          <span
            key={i}
            style={{
              position: 'absolute',
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: color,
              left: `${10 + i * 11}%`,
              top: -8,
              animation: `confettiFall 1.2s ease ${i * 0.1}s forwards`,
            }}
          />
        ))}

        <div style={{ textAlign: 'center', paddingTop: 8 }}>
          {/* Flame + number */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 4 }}>
            <svg width="36" height="44" viewBox="0 0 36 44" fill="none">
              <path
                d="M18 2C18 2 26 10 26 18C26 22 24 25 21 27C21 21 18 18 18 18C18 18 15 21 15 27C12 25 10 22 10 18C10 10 18 2 18 2Z"
                fill="#F47920"
              />
              <path
                d="M18 22C18 22 22 26 22 30C22 34.4 20.2 37 18 38C15.8 37 14 34.4 14 30C14 26 18 22 18 22Z"
                fill="#FFB347"
              />
              <ellipse cx="18" cy="40" rx="5" ry="3" fill="#F47920" opacity="0.25" />
            </svg>
            <div style={{ fontSize: 64, fontWeight: 800, color: '#F47920', lineHeight: 1 }}>
              {streak}
            </div>
          </div>

          <h2 style={{ fontSize: 22, fontWeight: 800, color: '#1A1A1A', marginBottom: 8 }}>
            🔥 {streak}-Day Streak!
          </h2>
          <p style={{ fontSize: 15, color: '#888', lineHeight: 1.6, marginBottom: 28 }}>
            You&apos;ve been showing up for yourself every day. That consistency is building real results.
          </p>
          <button className="btn-primary" onClick={onDismiss} style={{ borderRadius: 12 }}>
            Keep the Streak Going
          </button>
        </div>

        <style>{`
          @keyframes confettiFall {
            0%   { transform: translateY(0) rotate(0deg); opacity: 1; }
            100% { transform: translateY(300px) rotate(720deg); opacity: 0; }
          }
        `}</style>
      </div>
    </div>
  )
}
