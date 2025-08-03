import { motion } from 'framer-motion'
import { Aperture, Clapperboard, MicVocal, Headphones } from 'lucide-react'

const DiagonalStrips = () => {
  return (
    <>
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
    </>
  )
}

export default DiagonalStrips
