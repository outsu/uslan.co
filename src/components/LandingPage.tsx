import { motion } from 'framer-motion'
import { Aperture, Clapperboard, MicVocal, Headphones } from 'lucide-react'

interface LandingPageProps {
  controlsHero: any
  controlsGlitch: any
}

const LandingPage = ({ controlsHero, controlsGlitch }: LandingPageProps) => {
  return (
    <main className="main-content">
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
    </main>
  )
}

export default LandingPage
