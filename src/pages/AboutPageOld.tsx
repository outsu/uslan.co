import { motion } from 'framer-motion'
import { AlertTriangle, Bug } from 'lucide-react'

const AboutPage = () => {
  return (
    <main className="about-main">
      {/* Anti-design Error Overlay */}
      <motion.div 
        className="about-error-overlay"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        [PROFILE_LOADING_ERROR]
      </motion.div>

      <div className="about-container">
        {/* Broken Title Section */}
        <motion.section 
          className="about-hero"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1 
            className="about-title"
            whileHover={{
              scale: 1.02,
              textShadow: "0 0 30px rgba(255, 59, 59, 0.8)",
              transition: { duration: 0.3 }
            }}
          >
            hakkımda.
            <motion.span 
              className="about-corruption"
              animate={{
                rotate: [0, 15, -15, 8, 0],
                scale: [1, 1.3, 0.7, 1.2, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >⚡</motion.span>
          </motion.h1>

          {/* Intentionally misaligned subtitle */}
          <motion.div 
            className="about-subtitle-container"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.span 
              className="about-subtitle-glitch"
              animate={{
                x: [0, -2, 3, -1, 0],
                y: [0, 1, -2, 1, 0],
                rotate: [0, -1, 1, -0.5, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >WHO AM I?</motion.span>
          </motion.div>
        </motion.section>

        {/* Profile Section with intentional chaos */}
        <motion.section 
          className="about-profile"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="profile-grid">
            {/* Main profile card */}
            <motion.div 
              className="profile-card main-card"
              whileHover={{ 
                scale: 1.02,
                rotate: [0, -1, 1, 0],
                transition: { duration: 0.3 }
              }}
            >
              <p className="profile-text">
                Ben Mehmet Efe Uslan; müziğiyle hissettiren, kamerasıyla anlatan ve dijital sanatın her alanına tutkuyla yaklaşan çok yönlü bir sanatçıyım.
                <motion.span 
                  className="corrupted-text"
                  animate={{
                    color: ["#ff0066", "#00ff88", "#ff3b3b", "#ff0066"],
                    textShadow: ["0 0 5px #ff0066", "0 0 10px #00ff88", "0 0 5px #ff3b3b", "0 0 5px #ff0066"]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                > [CREATIVE_MIND]</motion.span>
              </p>
              
              {/* Anti-design progress bar */}
              <div className="fake-progress-bar">
                <div className="progress-label">creativity_level.exe</div>
                <div className="progress-track">
                  <motion.div 
                    className="progress-fill"
                    animate={{
                      width: ["0%", "100%", "80%", "95%", "100%"],
                      backgroundColor: ["#ff0066", "#00ff88", "#ff3b3b", "#feca57", "#ff0066"]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
                <div className="progress-error">[ERROR: VALUE_EXCEEDS_MAXIMUM]</div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Bio Section with terminal aesthetic */}
        <motion.section 
          className="about-bio"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-buttons">
                <span className="terminal-btn red"></span>
                <span className="terminal-btn yellow"></span>
                <span className="terminal-btn green"></span>
              </div>
              <span className="terminal-title">about_me.exe</span>
              <motion.span 
                className="terminal-error"
                animate={{
                  opacity: [0, 1, 0],
                  color: ["#ff0066", "#ff3b3b", "#ff0066"]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >[UNSTABLE]</motion.span>
            </div>
            <div className="terminal-body">
              <motion.div 
                className="terminal-line"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
              >
                <span className="terminal-prompt">uslan@creativity:~$</span> 
                <span className="terminal-command">ef_bio.txt</span>
              </motion.div>
              
              <motion.div 
                className="terminal-output"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 0.8 }}
              >
                <p>
                  Ben Mehmet Efe Uslan, 24 yaşındayım ve Muğla'nın Menteşe ilçesinde doğdum. Muğla Sıtkı Koçman Üniversitesi Radyo Televizyon Programcılığı bölümünden mezun oldum. Uzun yıllardır müzik, fotoğraf, video ve tasarım alanlarında profesyonel içerikler üretiyorum.
Çocukluk yıllarımdan bu yana bilgisayarlarla iç içeyim ve video oyunlarına büyük bir ilgi duyuyorum. Bu dijital dünyaya olan ilgim, görsel sanatlara bakış açımı ve üretim tarzımı da şekillendirdi. 

                </p>
                <p>
                  <motion.span 
                    className="terminal-highlight"
                    animate={{
                      backgroundColor: ["rgba(255, 0, 102, 0.2)", "rgba(0, 255, 136, 0.2)", "rgba(255, 59, 59, 0.2)", "rgba(255, 0, 102, 0.2)"]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    Özellikle fotoğraf çekerken karanlık, sinematik ve estetik ögelere önem veriyorum.
                  </motion.span>
                </p>
                <p>
                  
                    Ayrıca müziğe olan tutkumla YouTube kanalımda kendi seslendirdiğim şarkılara çektiğim klipleri paylaşıyorum. Görsel hikâye anlatımı, yaratıcı projeler ve dijital içerik üretimi konularında kendimi sürekli geliştiriyor; her yeni projeye tutkuyla yaklaşıyorum.
                
                <motion.div 
                  className="terminal-cursor"
                  animate={{
                    opacity: [1, 0, 1],
                    scale: [1, 0.8, 1.2, 1]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >█</motion.div></p>
                
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Bio Section with terminal aesthetic */}
        <motion.section 
          className="about-bio"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="terminal-window-2">
            <div className="terminal-header">
              <div className="terminal-buttons">
                <span className="terminal-btn red"></span>
                <span className="terminal-btn yellow"></span>
                <span className="terminal-btn green"></span>
              </div>
              <span className="terminal-title">works.exe</span>
              <motion.span 
                className="terminal-error"
                animate={{
                  opacity: [0, 1, 0],
                  color: ["#ff0066", "#ff3b3b", "#ff0066"]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >[WORK_IN_PROGRESS]</motion.span>
            </div>
            <div className="terminal-body">
              <motion.div 
                className="terminal-line"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
              >
                <span className="terminal-prompt">uslan@creativity:~$</span> 
                <span className="terminal-command">ef_works.txt</span>
              </motion.div>
              
              <motion.div 
                className="terminal-output"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 0.8 }}
              >
                <p>
                  Bugüne kadar 100’ün üzerinde düğün klibi çektim ve düğün fotoğrafçılığı yaptım. Görsel anlatımın gücüne inandığım her projede, estetik ve duyguyu ön planda tuttum. </p>
                <p>
                Kendi kayıt stüdyomda birçok sanatçının kayıt almasına yardımcı oldum. Kayıt sonrası süreçte ise mix & mastering çalışmalarını hem bireysel olarak hem de ekibimle birlikte titizlikle gerçekleştirdim. </p>
                
                <p>
                  <motion.span 
                    className="terminal-highlight"
                    animate={{
                      backgroundColor: ["rgba(255, 0, 102, 0.2)", "rgba(0, 255, 136, 0.2)", "rgba(255, 59, 59, 0.2)", "rgba(255, 0, 102, 0.2)"]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    Müzik kariyerime 2022 yılında, tüm dijital platformlarda yayımlanan ilk şarkım “Metaverse” ile adım attım.
                  </motion.span>
                </p>
                <p>
                 Aynı yıl “MNTFLX” adlı şarkıma klip çektim ve tüm dijital platformlarda paylaştım. 2023’te ise “Olsun Sabret” adlı şarkımızın video klibini yayınladık. SoundCloud platformunda ise sürekli olarak yeni demolarımı paylaşıyor, kendi tarzımı müzikal anlamda geliştirmeye devam ediyorum.</p>
                <p>
                2023 yılında üniversite eğitimim kapsamında iki kısa film çekerek kurgu, senaryo ve görüntü yönetimi alanlarında deneyim kazandım. 2024’te ise “IPA34 X CEVO252 - Kurarız Trap” adlı şarkının video klibini hazırlayarak yayınladım. </p>
                <p>
                Ayrıca, çeşitli mekanların sosyal medya yönetimini üstlendim. Bu süreçte hem görsel içerik üretimi hem de dijital pazarlama stratejileri üzerine çalışarak markaların dijital kimliklerini güçlendirmelerine katkı sağladım. </p>
                <p>
                Her projeye hem teknik bilgi hem de yaratıcı bakış açısıyla yaklaşıyor; görsel ve işitsel üretimde kaliteyi daima ön planda tutuyorum.  
                
                <motion.div 
                  className="terminal-cursor"
                  animate={{
                    opacity: [1, 0, 1],
                    scale: [1, 0.8, 1.2, 1]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >█</motion.div></p>
                
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Anti-design chaos elements */}
        <motion.div 
          className="chaos-elements"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.6 }}
        >
          <motion.div 
            className="floating-bug-1"
            animate={{
              x: [0, 50, -30, 20, 0],
              y: [0, -20, 10, -15, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Bug size={20} color="#ff0066" />
          </motion.div>
          
          <motion.div 
            className="floating-warning"
            animate={{
              x: [0, -40, 30, -10, 0],
              y: [0, 15, -25, 5, 0],
              scale: [1, 1.2, 0.8, 1.1, 1]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            <AlertTriangle size={24} color="#feca57" />
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
}

export default AboutPage
