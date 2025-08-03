import { ArrowRight, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import './Showcase.css'

interface ShowcaseItem {
  id: string
  type: 'ses' | 'görsel'
  title: string
  description: string
  thumbnail: string
  category: string
  featured?: boolean
}

const Showcase = () => {

  // Featured works for showcase
  const showcaseItems: ShowcaseItem[] = [
    {
      id: '1',
      type: 'ses',
      title: 'Midnight Echoes',
      description: 'A haunting ambient piece exploring liminal spaces',
      thumbnail: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxyYWRpYWxHcmFkaWVudCBpZD0iYXVkaW9HcmFkaWVudCIgY3g9IjUwJSIgY3k9IjUwJSIgcj0iNTAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzQ0NDE7IHN0b3Atb3BhY2l0eToxIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxMTE7IHN0b3Atb3BhY2l0eToxIiAvPgogICAgPC9yYWRpYWxHcmFkaWVudD4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNhdWRpb0dyYWRpZW50KSIvPgogIDxjaXJjbGUgY3g9IjIwMCIgY3k9IjE1MCIgcj0iODAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwZmY4OCIgc3Ryb2tlLXdpZHRoPSIzIiBvcGFjaXR5PSIwLjYiLz4KICA8Y2lyY2xlIGN4PSIyMDAiIGN5PSIxNTAiIHI9IjUwIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZjNiM2IiIHN0cm9rZS13aWR0aD0iMiIgb3BhY2l0eT0iMC44Ii8+CiAgPHRleHQgeD0iNTAlIiB5PSI1NSUiIGZvbnQtZmFtaWx5PSJDb3VyaWVyIE5ldywgbW9ub3NwYWNlIiBmb250LXNpemU9IjE0IiBmaWxsPSIjZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+QVVESU9fU1RSRUFNPC90ZXh0Pgo8L3N2Zz4K',
      category: 'ambient',
      featured: true
    },
    {
      id: '2',
      type: 'görsel',
      title: 'Urban Decay',
      description: 'Photographic exploration of abandoned spaces',
      thumbnail: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0idmlzdWFsR3JhZGllbnQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMzMzOyBzdG9wLW9wYWNpdHk6MSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNjY2OyBzdG9wLW9wYWNpdHk6MSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjdmlzdWFsR3JhZGllbnQpIi8+CiAgPHJlY3QgeD0iNTAiIHk9IjUwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDBmZjg4IiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9IjAuNyIvPgogIDx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQ291cmllciBOZXcsIG1vbm9zcGFjZSIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPklNQUdFX0NPUlJVUFRFRDwvdGV4dD4KPC9zdmc+Cg==',
      category: 'photography',
      featured: true
    },
    {
      id: '3',
      type: 'ses',
      title: 'Digital Fragments',
      description: 'Experimental soundscape with glitch elements',
      thumbnail: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZ2xpdGNoR3JhZGllbnQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6I2ZmMDA2Njsgc3RvcC1vcGFjaXR5OjEiIC8+CiAgICAgIDxzdG9wIG9mZnNldD0iNTAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDAmIzBmZjg4OyBzdG9wLW9wYWNpdHk6MSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmYzYjNiOyBzdG9wLW9wYWNpdHk6MSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMxMTEiLz4KICA8cmVjdCB4PSIwIiB5PSI1MCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAiIGZpbGw9InVybCgjZ2xpdGNoR3JhZGllbnQpIiBvcGFjaXR5PSIwLjgiLz4KICA8cmVjdCB4PSIwIiB5PSIxMDAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjUiIGZpbGw9IiMwMGZmODgiIG9wYWNpdHk9IjAuNiIvPgogIDxyZWN0IHg9IjAiIHk9IjIwMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iOCIgZmlsbD0iI2ZmMDA2NiIgb3BhY2l0eT0iMC43Ii8+CiAgPHRleHQgeD0iNTAlIiB5PSI2MCUiIGZvbnQtZmFtaWx5PSJDb3VyaWVyIE5ldywgbW9ub3NwYWNlIiBmb250LXNpemU9IjEyIiBmaWxsPSIjZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+RlJBR01FTlRfREFUQTwvdGV4dD4KPC9zdmc+Cg==',
      category: 'experimental'
    },
    {
      id: '4',
      type: 'görsel',
      title: 'Neon Dreams',
      description: 'Cyberpunk-inspired visual compositions',
      thumbnail: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxyYWRpYWxHcmFkaWVudCBpZD0ibmVvbjEiIGN4PSI1MCUiIGN5PSI1MCUiIHI9IjUwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNmZjAwNjY7IHN0b3Atb3BhY2l0eTowLjgiIC8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzBhMGEwYTsgc3RvcC1vcGFjaXR5OjEiIC8+CiAgICA8L3JhZGlhbEdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI25lb24xKSIvPgogIDx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQ291cmllciBOZXcsIG1vbm9zcGFjZSIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzAwZmY4OCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk5lb24gRHJlYW1zICMxPC90ZXh0Pgo8L3N2Zz4K',
      category: 'digital-art',
      featured: true
    }
  ]

  return (
    <section className="showcase-section">
      <div className="showcase-container">
        {/* Header */}
        <div className="showcase-header">
          <h2 className="showcase-title">
            seçili çalışmalar
            <span className="title-corruption">_v2.1</span>
          </h2>
          <p className="showcase-subtitle">
            seçilen bazı projeler.
          </p>
          <div className="header-noise">[NOISE_LEVEL: 127%]</div>
        </div>

        {/* Showcase Grid */}
        <div className="showcase-grid">
          {showcaseItems.map((item, index) => (
            <div
              key={item.id}
              className={`showcase-card ${item.type} ${index % 3 === 0 ? 'wide' : ''}`}
            >
              {/* Card Header */}
              <div className="card-header">
                <span className="card-type">[{item.type.toUpperCase()}]</span>
                {item.featured && <span className="featured-badge">★</span>}
              </div>

              {/* Thumbnail */}
              <div className="card-thumbnail">
                <img src={item.thumbnail} alt={item.title} />
                <div className="thumbnail-overlay">
                  <span className="overlay-text">
                    {item.type === 'ses' ? 'PLAY' : 'VIEW'}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="card-content">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-description">{item.description}</p>
                <div className="card-meta">
                  <span className="meta-category">#{item.category}</span>
                  <div className="meta-actions">
                    <button className="action-btn">
                      <ExternalLink size={14} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Glitch Effect */}
              <div className="card-glitch"></div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="showcase-footer">
          <Link to="/portfolio" className="view-all-btn">
            <span>bütün çalışmaları görüntüle</span>
            <ArrowRight size={20} />
            <div className="btn-corruption">[MORE_DATA]</div>
          </Link>
          
          {/* Anti-design elements */}
          <div className="footer-artifacts">
            <span className="artifact">ERR: boring_wedding_pictures.jpg not found</span>
            <span className="artifact">creativity.exe maxed out</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Showcase
