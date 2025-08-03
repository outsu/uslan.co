import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import AudioGrid from './AudioGrid'
import VisualGrid from './VisualGrid'
import './Portfolio.css'

interface AudioItem {
  id: string
  type: 'audio'
  title: string
  description: string
  audioUrl: string
  duration?: string
}

interface VisualItem {
  id: string
  type: 'visual'
  title: string
  description: string
  assets: {
    type: 'image' | 'video'
    url: string
    thumbnail?: string
  }[]
  layout: 'horizontal' | 'vertical'
}

type PortfolioItem = AudioItem | VisualItem

const Portfolio = () => {
  const [portfolioItems] = useState<PortfolioItem[]>([
    // Sample data with placeholder content
    {
      id: '1',
      type: 'audio',
      title: 'Midnight Echoes',
      description: 'A haunting ambient piece recorded in the depths of winter, exploring the liminal spaces between sound and silence.',
      audioUrl: 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEcBjiR2O/KeycGKn/K7+GNPQ0ViLrq2+NQFQ1JqOnkun8/Ej2X4MdyJwgld8nw'
    },
    {
      id: '2',
      type: 'visual',
      title: 'Urban Decay',
      description: 'A photographic exploration of abandoned spaces in the city, where nature reclaims what humanity left behind.',
      assets: [
        { 
          type: 'image', 
          url: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZGllbnQxIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzMzMzsgc3RvcC1vcGFjaXR5OjEiIC8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzY2Njsgc3RvcC1vcGFjaXR5OjEiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyYWRpZW50MSkiLz4KICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiBmaWxsPSIjZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+VXJiYW4gRGVjYXkgIzE8L3RleHQ+Cjwvc3ZnPgo=' 
        },
        { 
          type: 'image', 
          url: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZGllbnQyIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzIyMjsgc3RvcC1vcGFjaXR5OjEiIC8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzU1NTsgc3RvcC1vcGFjaXR5OjEiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyYWRpZW50MikiLz4KICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiBmaWxsPSIjZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+VXJiYW4gRGVjYXkgIzI8L3RleHQ+Cjwvc3ZnPgo=' 
        },
        { 
          type: 'image', 
          url: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZGllbnQzIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzExMTsgc3RvcC1vcGFjaXR5OjEiIC8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzQ0NDsgc3RvcC1vcGFjaXR5OjEiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyYWRpZW50MykiLz4KICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiBmaWxsPSIjZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+VXJiYW4gRGVjYXkgIzM8L3RleHQ+Cjwvc3ZnPgo=' 
        }
      ],
      layout: 'horizontal'
    },
    {
      id: '3',
      type: 'visual',
      title: 'Motion Study',
      description: 'Time-lapse capturing the chaos of modern life, where individual stories merge into collective movement.',
      assets: [
        { 
          type: 'image', 
          url: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZGllbnQ0IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzAwZmY4ODsgc3RvcC1vcGFjaXR5OjAuOCIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI1MCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNmZjAwNjY7IHN0b3Atb3BhY2l0eTowLjgiIC8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzRlY2RjNDsgc3RvcC1vcGFjaXR5OjAuOCIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhZGllbnQ0KSIvPgogIDx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiNmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Nb3Rpb24gU3R1ZHk8L3RleHQ+CiAgPGNpcmNsZSBjeD0iMTUwIiBjeT0iMjUwIiByPSI1MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9IjAuNSI+CiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjUwOzEwMDs1MCIgZHVyPSIycyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz4KICA8L2NpcmNsZT4KPC9zdmc+Cg==',
          thumbnail: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZGllbnQ0IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzAwZmY4ODsgc3RvcC1vcGFjaXR5OjAuOCIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI1MCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNmZjAwNjY7IHN0b3Atb3BhY2l0eTowLjgiIC8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzRlY2RjNDsgc3RvcC1vcGFjaXR5OjAuOCIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhZGllbnQ0KSIvPgogIDx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiNmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5WaWRlbyBUaHVtYm5haWw8L3RleHQ+Cjwvc3ZnPgo=' 
        }
      ],
      layout: 'vertical'
    },
    {
      id: '4',
      type: 'audio',
      title: 'Broken Frequencies',
      description: 'Experimental sound design pushing the boundaries of what music can be, embracing chaos and imperfection.',
      audioUrl: 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEcBjiR2O/KeycGKn/K7+GNPQ0ViLrq4',
      duration: '5:18'
    },
    {
      id: '5',
      type: 'visual',
      title: 'Digital Fragments',
      description: 'Exploring the intersection of digital and physical realms through abstract visual compositions.',
      assets: [
        { 
          type: 'image', 
          url: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxyYWRpYWxHcmFkaWVudCBpZD0iZ3JhZGllbnQ1IiBjeD0iNTAlIiBjeT0iNTAlIiByPSI1MCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmYzYjNiOyBzdG9wLW9wYWNpdHk6MSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI1MCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNmZjAwNjY7IHN0b3Atb3BhY2l0eTowLjgiIC8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzAwMDsgc3RvcC1vcGFjaXR5OjEiIC8+CiAgICA8L3JhZGlhbEdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyYWRpZW50NSkiLz4KICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiBmaWxsPSIjZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+RGlnaXRhbCBGcmFnbWVudHM8L3RleHQ+CiAgPHBvbHlnb24gcG9pbnRzPSIxMDAsMTAwIDIwMCw1MCAzMDAsMTUwIDI1MCwyNTAgMTUwLDIwMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNGVjZGM0IiBzdHJva2Utd2lkdGg9IjMiIG9wYWNpdHk9IjAuNyIvPgo8L3N2Zz4K' 
        }
      ],
      layout: 'horizontal'
    },
    {
      id: '6',
      type: 'audio',
      title: 'Atmospheric Depths',
      description: 'Deep ambient soundscapes that transport listeners to otherworldly realms of consciousness.',
      audioUrl: 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEcBj',
      duration: '7:23'
    }
  ])

  const [masonryLayout, setMasonryLayout] = useState<PortfolioItem[][]>([])

  useEffect(() => {
    // Simple masonry layout algorithm - distribute items across columns
    const organizeIntoColumns = (items: PortfolioItem[], columnCount: number = 3) => {
      const columns: PortfolioItem[][] = Array(columnCount).fill(null).map(() => [])
      
      items.forEach((item, index) => {
        const columnIndex = index % columnCount
        columns[columnIndex].push(item)
      })
      
      return columns
    }

    const columns = organizeIntoColumns(portfolioItems)
    setMasonryLayout(columns)
  }, [portfolioItems])

  return (
    <motion.section 
      id="portfolio"
      className="portfolio-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.div 
        className="portfolio-header"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="portfolio-title">
          PORTFOLIO
          <motion.span 
            className="anti-design-marker"
            animate={{
              rotate: [0, 15, -15, 8, 0],
              scale: [1, 1.3, 0.7, 1.2, 1]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >◊</motion.span>
        </h2>
        <div className="portfolio-subtitle">
          <span className="glitch-text">Audio</span>
          <span className="separator">×</span>
          <span className="glitch-text">Visual</span>
        </div>
      </motion.div>

      <div className="masonry-container">
        {masonryLayout.map((column, columnIndex) => (
          <motion.div 
            key={columnIndex}
            className="masonry-column"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: columnIndex * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {column.map((item, itemIndex) => (
              <motion.div
                key={item.id}
                className="portfolio-item-wrapper"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: (columnIndex * 0.1) + (itemIndex * 0.2), 
                  duration: 0.5,
                  ease: "backOut"
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                {item.type === 'audio' ? (
                  <AudioGrid item={item as AudioItem} />
                ) : (
                  <VisualGrid item={item as VisualItem} />
                )}
              </motion.div>
            ))}
          </motion.div>
        ))}
      </div>

      {/* Anti-design broken element */}
      <motion.div 
        className="portfolio-corruption"
        animate={{
          x: [0, 5, -5, 2, 0],
          rotate: [0, -1, 1, -0.5, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        [PORTFOLIO_OVERFLOW_ERROR]
      </motion.div>
    </motion.section>
  )
}

export default Portfolio
