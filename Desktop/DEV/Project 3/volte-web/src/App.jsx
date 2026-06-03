import { useState } from 'react'
import Nav from './components/Nav'
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

function App() {
  const [activePage, setActivePage] = useState('home')
  const Page = PAGES[activePage]

  return (
    <div className="app-shell">
      <Nav activePage={activePage} onNavigate={setActivePage} />
      <main className="page-content">
        <Page />
      </main>
    </div>
  )
}

export default App
