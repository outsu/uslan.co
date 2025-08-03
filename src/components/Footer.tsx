import { motion } from 'framer-motion'
import outDarkLogo from '../assets/out-dark.png'

const Footer = () => {
  return (
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
              onClick={() => window.open('https://ogut.su', '_blank')}
              style={{ cursor: 'pointer' }}
            >
              <span className="designer-credit-default">
                tasarım: <img src={outDarkLogo} alt="Designer Logo" className="designer-logo" /> (ØBVSLY.) | © 2025 Mehmet Efe Uslan. Tüm hakları saklıdır.
              </span>
              <span className="designer-credit-hover">
                tasarım: Öğüt Su Karagün | © 2025 Mehmet Efe Uslan. Tüm hakları saklıdır.
              </span>
            </div>
          <div 
            className="terminal-nonsense"
          >
            C:\&gt; outsu.exe --mode=chaos
          </div>
        </motion.div>
      </div>
      {/* Chaotic floating error popup */}
      <div 
        className="error-popup"
      >⚠ FROM_AN_ARTIST_TO_ARTIST: EXPORT_FAILED_BEAUTIFULLY ⚠</div>
    </motion.footer>
  )
}

export default Footer
