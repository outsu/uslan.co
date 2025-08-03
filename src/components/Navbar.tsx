import { motion } from 'framer-motion'
import { ChevronDown, Phone } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

interface NavbarProps {
  isSocialsOpen: boolean
  setIsSocialsOpen: (open: boolean) => void
}

const Navbar = ({ isSocialsOpen, setIsSocialsOpen }: NavbarProps) => {
  const location = useLocation()
  
  const navItems = [
    { name: 'Anasayfa', path: '/' },
    { name: 'Portfolyo', path: '/portfolio' },
    { name: 'Hakkında', path: '/about' }
  ]

  return (
    <motion.header 
      className="header"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="header-top">
        <Link to="/" className="logo">
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
        </Link>
        <motion.nav 
        className="nav-links desktop-only"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {navItems.map((item, index) => (
          <motion.div key={item.name}>
            {item.path.startsWith('/#') ? (
              <motion.a 
                href={item.path} 
                className={`nav-link ${location.pathname === '/' && item.name === 'Home' ? 'active' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.1,
                  color: "#ffffff",
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                onTouchStart={() => {}}
                style={{ touchAction: 'manipulation' }}
              >
                {item.name}
              </motion.a>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to={item.path} 
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  style={{ touchAction: 'manipulation' }}
                >
                  {item.name}
                </Link>
              </motion.div>
            )}
          </motion.div>
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
            Sosyal Medya
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
            İLETİŞİM
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
            >
              <Phone size={12} style={{ marginLeft: '0.5rem' }} />
            </motion.span>
          </motion.a>
        </div>
      </div>
      <motion.nav 
        className="nav-links mobile-only"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {navItems.filter(item => item.path !== '/').map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
            whileHover={{ 
              scale: 1.1,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to={item.path} 
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              style={{ touchAction: 'manipulation' }}
            >
              {item.name}
            </Link>
          </motion.div>
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
            Sosyal Medya
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
  )
}

export default Navbar
