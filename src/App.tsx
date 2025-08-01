import './App.css'
import homeBackground from './assets/home-background.jpg'
import outDarkLogo from './assets/out-dark.png'
import { MicVocal, Headphones, Aperture, Clapperboard, Palette } from 'lucide-react'

function App() {

  return (
    <div className="coming-soon-container">
      <div 
        className="background-animation" 
        style={{ backgroundImage: `url(${homeBackground})` }}
      ></div>
      
      <header className="header">
        <div className="logo">MEHMET EFE USLAN</div>
      </header>

      <main className="main-content">
        <div className="hero-section">
          <h1 className="hero-title">
            USLAN
          </h1>
          
          <p className="hero-description">
            bazen bilemezsin.
          </p>

        </div>
      </main>

      <footer className="footer">
        <div className="social-links">
          <a href="https://www.instagram.com/efeuslan/" className="social-link">Instagram</a>
          <a href="#" className="social-link">Discord</a>
          <a href="mailto:" className="social-link">Contact Us</a>
        </div>
        <div className="copyright">
          <p>© 2025 Mehmet Efe Uslan. All rights reserved.</p>
          <div className="designer-credit-container">
            <p className="designer-credit-default">
              uslan.co was <span style={{ verticalAlign: 'middle', marginLeft: 4 }}><Palette size={18} /></span> by{' '}
              <img src={outDarkLogo} alt="Designer Logo" className="designer-logo" />
            </p>
            <p className="designer-credit-hover">
              uslan.co was <span style={{ verticalAlign: 'middle', marginLeft: 4 }}><Palette size={18} /></span> by Öğüt Su Karagün
            </p>
          </div>
        </div>

      </footer>

      {/* Diagonal Strip */}
      <div className="diagonal-strip">
        <div className="strip-content">
          <span>PhotographY</span>
          <Aperture size={32} />
          <span>VideographY</span>
          <Clapperboard size={32} />
          <span>Audio Recording</span>
          <MicVocal size={32} />
          <span>Mix & Mastering</span>
          <Headphones size={32} />
          <span>Photography</span>
          <Aperture size={32} />
          <span>Videography</span>
          <Clapperboard size={32} />
          <span>Audio Recording</span>
          <MicVocal size={32} />
          <span>Mix & Mastering</span>
          <Headphones size={32} />
          <span>Photography</span>
          <Aperture size={32} />
          <span>Videography</span>
          <Clapperboard size={32} />
          <span>Audio Recording</span>
          <MicVocal size={32} />
          <span>Mix & Mastering</span>
          <Headphones size={32} />
          <span>Photography</span>
          <Aperture size={32} />
          <span>Videography</span>
          <Clapperboard size={32} />
          <span>Audio Recording</span>
          <MicVocal size={32} />
          <span>Mix & Mastering</span>
        </div>
      </div>
      
      <div className="diagonal-strip-2"></div>
    </div>
  )
}

export default App
