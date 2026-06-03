import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import WelcomeBackPopup from './components/WelcomeBackPopup'
import StreakMilestonePopup from './components/StreakMilestonePopup'
import Home from './pages/Home'
import Library from './pages/Library'
import FaceMap from './pages/FaceMap'
import Progress from './pages/Progress'
import Profile from './pages/Profile'
import './index.css'
import './App.css'

const PAGES = {
  home: Home,
  library: Library,
  facemap: FaceMap,
  progress: Progress,
  profile: Profile,
}

const STREAK = 12
const MILESTONES = [7, 14, 30]
const TWO_DAYS_MS = 172800000

function App() {
  const [activePage, setActivePage] = useState('home')
  const [showWelcomeBack, setShowWelcomeBack] = useState(false)
  const [milestoneStreak, setMilestoneStreak] = useState(null)

  useEffect(() => {
    const last = localStorage.getItem('vlp_lastVisit')
    const now = Date.now()
    localStorage.setItem('vlp_lastVisit', now)
    if (!last || now - Number(last) > TWO_DAYS_MS) {
      setShowWelcomeBack(true)
    }
  }, [])

  useEffect(() => {
    const unshown = [...MILESTONES]
      .filter((m) => STREAK >= m && !localStorage.getItem(`vlp_milestone_${m}`))
      .sort((a, b) => b - a)
    if (unshown.length > 0) {
      const delay = showWelcomeBack ? 1200 : 400
      const t = setTimeout(() => setMilestoneStreak(unshown[0]), delay)
      return () => clearTimeout(t)
    }
  }, [showWelcomeBack])

  const dismissWelcomeBack = () => setShowWelcomeBack(false)

  const dismissMilestone = () => {
    if (milestoneStreak) localStorage.setItem(`vlp_milestone_${milestoneStreak}`, 'true')
    setMilestoneStreak(null)
  }

  const Page = PAGES[activePage]

  return (
    <div className="app-shell">
      {showWelcomeBack && <WelcomeBackPopup onDismiss={dismissWelcomeBack} />}
      {!showWelcomeBack && milestoneStreak && (
        <StreakMilestonePopup streak={milestoneStreak} onDismiss={dismissMilestone} />
      )}
      <Nav activePage={activePage} onNavigate={setActivePage} />
      <main className="page-content">
        <Page />
      </main>
    </div>
  )
}

export default App
