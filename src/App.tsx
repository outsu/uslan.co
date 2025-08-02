import './App.css'
import homeBackground from './assets/home-background.jpg'
import outDarkLogo from './assets/out-dark.png'
import { MicVocal, Headphones, Aperture, Clapperboard, ChevronDown } from 'lucide-react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

function App() {
  const controlsGlitch = useAnimation()
  const controlsHero = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref)
  const [isSocialsOpen, setIsSocialsOpen] = useState(false)

  // Chaotic glitch animation for anti-design - runs once then disappears
  useEffect(() => {
    const glitchSequence = async () => {
      // Initial glitch animation
      await controlsGlitch.start({
        opacity: 1,
        x: [0, -10, 15, -5, 0],
        y: [0, 8, -12, 3, 0],
        rotate: [0, -2, 3, -1, 0],
        scale: [1, 0.98, 1.05, 0.99, 1],
        transition: { duration: 0.8, ease: "easeInOut" }
      })
      
      // Wait a moment then fade out
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Fade out animation
      await controlsGlitch.start({
        opacity: 0,
        scale: 0.8,
        transition: { duration: 0.5, ease: "easeOut" }
      })
    }
    glitchSequence()
  }, [controlsGlitch])

  // Hero entrance animation
  useEffect(() => {
    if (isInView) {
      controlsHero.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1.2, ease: "easeOut" }
      })
    }
  }, [isInView, controlsHero])

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

  return (
    <div className="coming-soon-container">
      <div 
        className="background-animation" 
        style={{ backgroundImage: `url(${homeBackground})` }}
      ></div>
      
      <motion.header 
        className="header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="header-top">
          <div className="logo">
            MEHMET EFE USLAN
            <motion.span 
              className="pixelated-cursor"
              animate={{
                opacity: [1, 0, 1],
                scale: [1, 0.8, 1.2, 1]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >█</motion.span>
          </div>
          <div className="contact-nav">
            <motion.a 
              href="#contact" 
              className="contact-button"
              whileHover={{ 
                scale: 1.05,
                rotate: [0, -1, 1, 0],
                boxShadow: "0 0 20px rgba(78, 205, 196, 0.6)"
              }}
              whileTap={{ scale: 0.95 }}
              // Better mobile touch handling
              onTouchStart={() => {}}
              style={{ touchAction: 'manipulation' }}
            >
              Contact
              <motion.span 
                className="button-glitch"
                animate={{
                  rotate: [0, 10, -10, 5, 0],
                  scale: [1, 1.2, 0.8, 1.1, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >※</motion.span>
            </motion.a>
          </div>
        </div>
        <motion.nav 
          className="nav-links"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {['Portfolio', 'About'].map((item, index) => (
            <motion.a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="nav-link"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              whileHover={{ 
                scale: 1.1,
                color: "#ffffff",
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              // Better mobile interaction
              onTouchStart={() => {}}
              style={{ touchAction: 'manipulation' }}
            >
              {item}
            </motion.a>
          ))}
          
          {/* Anti-design Socials Dropdown */}
          <div className="socials-dropdown-container">
            <motion.button
              className="socials-dropdown-trigger"
              onClick={() => setIsSocialsOpen(!isSocialsOpen)}
              whileHover={{ 
                scale: 1.1,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Socials
              <motion.span
                className="dropdown-arrow"
                animate={{ 
                  rotate: isSocialsOpen ? 180 : 0,
                  color: isSocialsOpen ? "#ff0066" : "#ff3b3b"
                }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={16} />
              </motion.span>
            </motion.button>
            
            <motion.div
              className="socials-dropdown-menu"
              initial={{ opacity: 0, y: -10, scale: 0.8 }}
              animate={{ 
                opacity: isSocialsOpen ? 1 : 0,
                y: isSocialsOpen ? 0 : -10,
                scale: isSocialsOpen ? 1 : 0.8,
                pointerEvents: isSocialsOpen ? 'auto' : 'none'
              }}
              transition={{ duration: 0.3, ease: "backOut" }}
            >
              <motion.a
                href="https://www.instagram.com/efeuslan/"
                className="dropdown-link"
                whileHover={{ 
                  x: 5,
                  color: "#ff0066",
                  backgroundColor: "rgba(255, 0, 102, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="glitch-text">Instagram</span>
                <span className="link-corruption">◐</span>
              </motion.a>
              <motion.a
                href="#"
                className="dropdown-link"
                whileHover={{ 
                  x: 5,
                  color: "#00ff88",
                  backgroundColor: "rgba(0, 255, 136, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="glitch-text">Discord</span>
                <span className="link-corruption">※</span>
              </motion.a>
              {/* Anti-design broken option */}
              <div className="dropdown-broken">
                <span className="broken-option">[LINK_ERROR_404]</span>
              </div>
            </motion.div>
          </div>
          
          <span 
            className="broken-link"
          >[LINK_BROKEN]</span>
        </motion.nav>
        <motion.div 
          className="floating-nonsense"
          animate={{
            rotate: [0, 360],
            x: [0, 10, -10, 5, 0],
            y: [0, -5, 5, -2, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
        >⟐</motion.div>
      </motion.header>

      <main className="main-content" ref={ref}>
        <motion.div 
          className="hero-section"
          initial={{ opacity: 0, y: 50 }}
          animate={controlsHero}
        >
          {/* Anti-design glitch text with initial animation then disappears */}
          <motion.div 
            className="glitch-overlay"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={controlsGlitch}
          >ERROR_CREATIVITY_EXCEEDED</motion.div>
          
          <motion.h1 
            className="hero-title"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: "backOut" }}
            whileHover={{
              scale: 1.05,
              textShadow: "0 0 30px rgba(255, 59, 59, 0.8)",
              transition: { duration: 0.3 }
            }}
          >
            USLAN
            <motion.span 
              className="anti-design-marker"
              animate={{
                rotate: [0, 10, -10, 5, 0],
                scale: [1, 1.3, 0.7, 1.2, 1]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >©</motion.span>
          </motion.h1>
          
          {/* Mobile-friendly misaligned text with chaotic animations */}
          <motion.div 
            className="broken-text-mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.span 
              className="glitch-word-1"
              animate={{
                x: [0, -3, 3, -1, 0],
                y: [0, 2, -2, 1, 0],
                rotate: [0, -2, 2, -1, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileHover={{
                scale: 1.1,
                rotate: [0, 5, -5, 0],
                transition: { duration: 0.3 }
              }}
            >BREAKING</motion.span>
            <motion.span 
              className="glitch-word-2"
              animate={{
                x: [0, 2, -2, 1, 0],
                y: [0, -1, 1, -0.5, 0],
                rotate: [0, 1, -1, 0.5, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
              whileHover={{
                scale: 1.15,
                boxShadow: "0 0 15px rgba(255, 170, 0, 0.8)",
                transition: { duration: 0.2 }
              }}
            >THE RULES</motion.span>
            <motion.span 
              className="glitch-word-3"
              animate={{
                x: [0, -1, 1, -0.5, 0],
                y: [0, 3, -3, 1.5, 0],
                rotate: [0, -1.5, 1.5, -0.7, 0]
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              whileHover={{
                scale: 1.2,
                rotate: [0, 10, -10, 0],
                transition: { duration: 0.4 }
              }}
            >OF ART</motion.span>
          </motion.div>
          
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            bazen bilemezsin.
            <motion.span 
              className="anti-design-scribble"
              animate={{
                rotate: [0, 15, -15, 8, 0],
                scale: [1, 1.4, 0.6, 1.2, 1]
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >⚡</motion.span>
          </motion.p>

          {/* Raw, unfinished elements with jittery motion */}
          <motion.div 
            className="unfinished-elements"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            <div className="debug-info">[DEBUG: creativity_level = MAX]</div>
            <motion.div 
              className="intentional-typo"
              animate={{
                y: [0, -1, 1, -0.5, 0],
                scale: [1, 1.02, 0.98, 1.01, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
              whileHover={{
                scale: 1.05,
                color: "#ff0066",
                transition: { duration: 0.2 }
              }}
            >art is my pasion</motion.div>
          </motion.div>

        </motion.div>
      </main>

      <motion.footer 
        className="footer"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="footer-content">
          <motion.div 
            className="copyright"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Anti-design: deliberately awkward credit */}
            <div 
              className="broken-credit designer-credit-container"
            >
              <span className="designer-credit-default">
                designed by: <img src={outDarkLogo} alt="Designer Logo" className="designer-logo" /> (ØBVSLY) | © 2025 Mehmet Efe Uslan. All rights reserved.
              </span>
              <span className="designer-credit-hover">
                designed by: Öğüt Su Karagün (ØBVSLY) | © 2025 Mehmet Efe Uslan
              </span>
            </div>
            <div 
              className="terminal-nonsense"
            >
              C:\&gt; creativity.exe --mode=chaos
            </div>
          </motion.div>
        </div>
        {/* Chaotic floating error popup */}
        <div 
          className="error-popup"
        >⚠ AESTHETIC_ERROR ⚠</div>
      </motion.footer>

      {/* Diagonal Strip with chaotic motion */}
      <motion.div 
        className="diagonal-strip"
        animate={{
          rotate: [-5, -4.5, -5.5, -4.8, -5],
          y: [40, 45, 35, 42, 40]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <motion.div 
          className="strip-content"
          animate={{
            x: [0, -50]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {[
            { text: "Photography", icon: Aperture },
            { text: "Videography", icon: Clapperboard },
            { text: "Audio Recording", icon: MicVocal },
            { text: "Mix & Mastering", icon: Headphones }
          ].map((item, index) => (
            <motion.div
              key={`${item.text}-${index}`}
              style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
              whileHover={{
                scale: 1.1,
                color: "#ff0066",
                transition: { duration: 0.2 }
              }}
            >
              <span>{item.text}</span>
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                  delay: index * 0.5
                }}
              >
                <item.icon size={32} />
              </motion.div>
            </motion.div>
          )).concat(
            // Repeat for infinite scroll effect
            [
              { text: "Photography", icon: Aperture },
              { text: "Videography", icon: Clapperboard },
              { text: "Audio Recording", icon: MicVocal },
              { text: "Mix & Mastering", icon: Headphones }
            ].map((item, index) => (
              <motion.div
                key={`${item.text}-repeat-${index}`}
                style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
                whileHover={{
                  scale: 1.1,
                  color: "#ff0066",
                  transition: { duration: 0.2 }
                }}
              >
                <span>{item.text}</span>
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                    delay: (index + 4) * 0.5
                  }}
                >
                  <item.icon size={32} />
                </motion.div>
              </motion.div>
            ))
          )}
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="diagonal-strip-2"
        animate={{
          rotate: [-5, -4.2, -5.8, -4.5, -5],
          y: [40, 38, 42, 39, 40]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      ></motion.div>
    </div>
  )
}

export default App
