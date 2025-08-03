import './App.css'
import homeBackground from './assets/home-background.jpg'
import { useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Showcase from './components/Showcase'
import Footer from './components/Footer'
import PortfolioPage from './pages/PortfolioPage'

function App() {
  const [isSocialsOpen, setIsSocialsOpen] = useState(false)

  // Font loading optimization
  useEffect(() => {
    // Ensure fonts are loaded before animations start
    document.fonts.ready.then(() => {
      document.body.classList.add('fonts-loaded')
    })
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isSocialsOpen && !(event.target as Element).closest('.socials-dropdown-container')) {
        setIsSocialsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isSocialsOpen])

  // Home page component with location-aware animations
  const HomePage = () => {
    const controlsGlitch = useAnimation()
    const controlsHero = useAnimation()

    // Reset and trigger animations when component mounts
    useEffect(() => {
      const initializeAnimations = async () => {
        // Reset animations first
        await controlsGlitch.set({ opacity: 0, scale: 0.8 })
        await controlsHero.set({ opacity: 0, y: 50 })

        // Wait for fonts to be ready before starting animations
        await document.fonts.ready

        // Glitch sequence
        const glitchSequence = async () => {
          await controlsGlitch.start({
            opacity: 1,
            x: [0, -10, 15, -5, 0],
            y: [0, 8, -12, 3, 0],
            rotate: [0, -2, 3, -1, 0],
            scale: [1, 0.98, 1.05, 0.99, 1],
            transition: { duration: 0.8, ease: "easeInOut" }
          })
          
          await new Promise(resolve => setTimeout(resolve, 1000))
          
          await controlsGlitch.start({
            opacity: 0,
            scale: 0.8,
            transition: { duration: 0.5, ease: "easeOut" }
          })
        }

        // Hero entrance
        controlsHero.start({
          opacity: 1,
          y: 0,
          transition: { duration: 1.2, ease: "easeOut" }
        })

        // Start glitch sequence
        glitchSequence()
      }

      initializeAnimations()
    }, [controlsGlitch, controlsHero])

    return (
      <>
        <LandingPage 
          controlsHero={controlsHero}
          controlsGlitch={controlsGlitch}
        />
        <Showcase />
      </>
    )
  }

  // App content component that has access to useLocation
  const AppContent = () => {
    const location = useLocation()
    const isHomePage = location.pathname === '/'

    return (
      <div className="container">
        {isHomePage && (
          <div 
            className="background-animation" 
            style={{ backgroundImage: `url(${homeBackground})` }}
          ></div>
        )}
        
        <Navbar 
          isSocialsOpen={isSocialsOpen}
          setIsSocialsOpen={setIsSocialsOpen}
        />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>

        <Footer />
      </div>
    )
  }

  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
