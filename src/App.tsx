import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import WallpaperGenerator from './pages/WallpaperGenerator'
import Home from './pages/Home'
import Layout from './components/Layout'

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/generate" element={<WallpaperGenerator />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  )
}

export default App