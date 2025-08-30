import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import WallpaperGenerator from './pages/WallpaperGenerator'
import Home from './pages/Home'
import About from './pages/About'
import TermsAndConditions from './pages/TermsAndConditions'
import Layout from './components/Layout'

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/generate" element={<WallpaperGenerator />} />
            <Route path="/about" element={<About />} />
            <Route path="/terms" element={<TermsAndConditions />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  )
}

export default App