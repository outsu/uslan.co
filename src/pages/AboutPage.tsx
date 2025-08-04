import { Terminal, AlertTriangle } from 'lucide-react'

const AboutPage = () => {
  return (
    <main className="about-main">
      {/* Modern Anti-design Error Overlay */}
      <div className="about-error-overlay">
        [PROFILE_LOADING_ERROR]
      </div>

      <div className="about-container">
        {/* Minimalist Title Section */}
        <section className="about-hero">
          <h1 className="about-title">
            hakkımda.
          </h1>
        </section>

        {/* Profile Section */}
        <section className="about-profile">
          <div className="profile-grid">
            {/* Main profile card */}
            <div className="profile-card main-card">
              <div className="profile-header">
                <Terminal size={48} className="profile-icon-main" />
                <h3 className="profile-title">CREATIVE_PROFILE.EXE</h3>
              </div>
              
              <p className="profile-text">
                Ben Mehmet Efe Uslan; müziğiyle hissettiren, kamerasıyla anlatan ve dijital sanatın her alanına tutkuyla yaklaşan çok yönlü bir sanatçıyım.
                <span className="corrupted-text">[CREATIVE_MIND_ACTIVE]</span>
              </p>
              
              {/* Modern progress indicator */}
              <div className="skill-metrics">
                <div className="metric-item">
                  <span className="metric-label">creativity.level</span>
                  <div className="metric-bar">
                    <div className="metric-fill metric-fill-red"></div>
                  </div>
                  <span className="metric-error">[MAX_EXCEEDED]</span>
                </div>
                <div className="metric-item">
                  <span className="metric-label">projects.completed</span>
                  <div className="metric-bar">
                    <div className="metric-fill metric-fill-green"></div>
                  </div>
                  <span className="metric-value">400+</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Bio Terminal - First */}
        <section className="about-bio">
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-buttons">
                <span className="terminal-btn red"></span>
                <span className="terminal-btn yellow"></span>
                <span className="terminal-btn green"></span>
              </div>
              <span className="terminal-title">about_me.exe</span>
              <span className="terminal-status">[RUNNING]</span>
            </div>
            <div className="terminal-body">
              <div className="terminal-line">
                <span className="terminal-prompt">uslan@creativity:~$</span> 
                <span className="terminal-command">cat personal_info.txt</span>
              </div>
              
              <div className="terminal-output">
                <p>
                  Ben Mehmet Efe Uslan, 24 yaşındayım ve Muğla'nın Menteşe ilçesinde doğdum. Muğla Sıtkı Koçman Üniversitesi Radyo Televizyon Programcılığı bölümünden mezun oldum. Uzun yıllardır müzik, fotoğraf, video ve tasarım alanlarında profesyonel içerikler üretiyorum.
                </p>
                <p>
                  Çocukluk yıllarımdan bu yana bilgisayarlarla iç içeyim ve video oyunlarına büyük bir ilgi duyuyorum. Bu dijital dünyaya olan ilgim, görsel sanatlara bakış açımı ve üretim tarzımı da şekillendirdi.
                </p>
                <p>
                  <span className="terminal-highlight">
                    Özellikle fotoğraf çekerken karanlık, sinematik ve estetik ögelere önem veriyorum.
                  </span>
                </p>
                <p>
                  Ayrıca müziğe olan tutkumla YouTube kanalımda kendi seslendirdiğim şarkılara çektiğim klipleri paylaşıyorum. Görsel hikâye anlatımı, yaratıcı projeler ve dijital içerik üretimi konularında kendimi sürekli geliştiriyor; her yeni projeye tutkuyla yaklaşıyorum.
                <div className="terminal-cursor">█</div></p>
              </div>
            </div>
          </div>
        </section>

        {/* Works Terminal - Second */}
        <section className="about-bio">
          <div className="terminal-window terminal-window-2">
            <div className="terminal-header">
              <div className="terminal-buttons">
                <span className="terminal-btn red"></span>
                <span className="terminal-btn yellow"></span>
                <span className="terminal-btn green"></span>
              </div>
              <span className="terminal-title">portfolio.exe</span>
              <span className="terminal-status">[WORK_IN_PROGRESS]</span>
            </div>
            <div className="terminal-body">
              <div className="terminal-line">
                <span className="terminal-prompt">uslan@creativity:~$</span> 
                <span className="terminal-command">cat work_experience.txt</span>
              </div>
              
              <div className="terminal-output">
                <p>
                  Bugüne kadar 100'ün üzerinde düğün klibi çektim ve düğün fotoğrafçılığı yaptım. Görsel anlatımın gücüne inandığım her projede, estetik ve duyguyu ön planda tuttum.
                </p>
                <p>
                  Kendi kayıt stüdyomda birçok sanatçının kayıt almasına yardımcı oldum. Kayıt sonrası süreçte ise mix & mastering çalışmalarını hem bireysel olarak hem de ekibimle birlikte titizlikle gerçekleştirdim.
                </p>
                <p>
                  <span className="terminal-highlight">
                    Müzik kariyerime 2022 yılında, tüm dijital platformlarda yayımlanan ilk şarkım "Metaverse" ile adım attım.
                  </span>
                </p>
                <p>
                  2023 yılında üniversite eğitimim kapsamında iki kısa film çekerek kurgu, senaryo ve görüntü yönetimi alanlarında deneyim kazandım. Ayrıca, çeşitli mekanların sosyal medya yönetimini üstlendim.
                </p>
                <p>
                  Her projeye hem teknik bilgi hem de yaratıcı bakış açısıyla yaklaşıyor; görsel ve işitsel üretimde kaliteyi daima ön planda tutuyorum.
                <div className="terminal-cursor">█</div></p>    
              </div>
            </div>
          </div>
        </section>

        {/* Minimal chaos elements */}
        <div className="chaos-elements">
          <div className="status-indicator">
            <AlertTriangle size={16} />
            <span>CREATIVE_OVERFLOW_DETECTED</span>
          </div>
        </div>
      </div>
    </main>
  )
}

export default AboutPage
