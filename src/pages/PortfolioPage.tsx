import { useState, useEffect } from 'react'
import { ArrowLeft, Grid, List, Search, ChevronDown, ChevronUp } from 'lucide-react'
import { Link } from 'react-router-dom'
import AudioGrid from '../components/AudioGrid'
import VisualGrid from '../components/VisualGrid'
import '../components/Portfolio.css'
import wedding1 from '../assets/wedding/wedding_1.jpg'
import wedding2 from '../assets/wedding/wedding_2.jpg'
import wedding3 from '../assets/wedding/wedding_3.jpg'

// Utility functions for category-specific effects
const getRandomWeddingFont = () => {
  const fonts = ['Luxurious Script', 'Instrument Serif']
  return fonts[Math.floor(Math.random() * fonts.length)]
}

const getRandomExperimentalColor = () => {
  const colors = ['#6ADD6A', '#EE98BC', '#3066BE', '#70E4EF', '#B337EC']
  return colors[Math.floor(Math.random() * colors.length)]
}

const applyExperimentalTextEffect = (element: HTMLElement) => {
  const titleElements = element.querySelectorAll('h3')
  
  titleElements.forEach((title) => {
    const text = title.textContent || ''
    const chars = text.split('')
    
    // Apply Sedgwick Ave font to ~10% of characters randomly
    const newHTML = chars.map((char) => {
      if (char !== ' ' && Math.random() < 0.2) { // 20% chance for non-space characters
        const color = getRandomExperimentalColor()
        return `<span style="font-family: 'Sedgwick Ave', cursive; color: ${color}; ">${char}</span>`
      }
      return char
    }).join('')
    
    title.innerHTML = newHTML
  })
}

interface AudioItem {
  id: string
  type: 'audio'
  title: string
  description: string
  audioUrl: string
  duration?: string
  category: string
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
  category: string
}

type PortfolioItem = AudioItem | VisualItem

const PortfolioPage = () => {
  const portfolioItems: PortfolioItem[] = [
    {
      id: '1',
      type: 'audio',
      title: 'Midnight Echoes',
      description: 'A haunting ambient piece recorded in the depths of winter, exploring the liminal spaces between sound and silence.',
      audioUrl: 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEcBjiR2O/KeycGKn/K7+GNPQ0ViLrq2+NQFQ1JqOnkun8/Ej2X4MdyJwgld8nw',
      category: 'ambient'
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
          url: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZGllbnQyIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzU1NTsgc3RvcC1vcGFjaXR5OjEiIC8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzIyMjsgc3RvcC1vcGFjaXR5OjEiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyYWRpZW50MikiLz4KICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiBmaWxsPSIjZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+VXJiYW4gRGVjYXkgIzI8L3RleHQ+Cjwvc3ZnPgo=' 
        }
      ],
      layout: 'horizontal',
      category: 'photography'
    },
    {
      id: '3',
      type: 'audio',
      title: 'Digital Fragments',
      description: 'Experimental soundscape combining field recordings with digital manipulation and glitch elements.',
      audioUrl: 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEcBjiR2O/KeycGKn/K7+GNPQ0ViLrq2+NQFQ1JqOnkun8/Ej2X4MdyJwgld8nw',
      category: 'experimental'
    },
    {
      id: '4',
      type: 'visual',
      title: 'Neon Dreams',
      description: 'Cyberpunk-inspired visual compositions exploring the intersection of technology and humanity.',
      assets: [
        { 
          type: 'image', 
          url: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxyYWRpYWxHcmFkaWVudCBpZD0ibmVvbjEiIGN4PSI1MCUiIGN5PSI1MCUiIHI9IjUwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNmZjAwNjY7IHN0b3Atb3BhY2l0eTowLjgiIC8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzBhMGEwYTsgc3RvcC1vcGFjaXR5OjEiIC8+CiAgICA8L3JhZGlhbEdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI25lb24xKSIvPgogIDx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQ291cmllciBOZXcsIG1vbm9zcGFjZSIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzAwZmY4OCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk5lb24gRHJlYW1zICMxPC90ZXh0Pgo8L3N2Zz4K' 
        }
      ],
      layout: 'vertical',
      category: 'experimental'
    },
    {
      id: '5',
      type: 'audio',
      title: 'GINTONIC',
      description: 'A refreshing blend of electronic beats and organic sounds, perfect for late-night listening.',
      audioUrl: 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEcBjiR2O/KeycGKn/K7+GNPQ0ViLrq2+NQFQ1JqOnkun8/Ej2X4MdyJwgld8nw',
      category: 'music'
    },
    {
      id: '6',
      type: 'visual',
      title: 'Asya & Tanju',
      description: 'A wedding visual story capturing the essence of love and celebration through vibrant imagery.',
      assets: [
        { 
          type: 'image', 
          url: wedding1 
        },
        { 
          type: 'image', 
          url: wedding2 
        },
        { 
          type: 'image', 
          url: wedding3 
        }
      ],
      layout: 'horizontal',
      category: 'wedding'
    }
  ]

  const [filteredItems, setFilteredItems] = useState<PortfolioItem[]>(portfolioItems)
  const [selectedFilter, setSelectedFilter] = useState<string>('all')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'title'>('newest')
  const [searchTerm, setSearchTerm] = useState('')
  const [columns, setColumns] = useState(3)
  const [isControlsExpanded, setIsControlsExpanded] = useState(false)

  const categories = ['all', 'audio', 'visual', 'ambient', 'experimental', 'photography', 'digital-art', 'abstract', 'wedding', 'music']

  // Auto-collapse mobile accordion when filters change (for better UX)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsControlsExpanded(false) // Reset mobile state on desktop
      }
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Apply category-specific styles
  useEffect(() => {
    // Set random wedding font
    const weddingItems = document.querySelectorAll('.category-wedding')
    weddingItems.forEach((item) => {
      const randomFont = getRandomWeddingFont()
      ;(item as HTMLElement).style.setProperty('--wedding-font', randomFont)
    })

    // Set random experimental colors and apply text effects
    const experimentalItems = document.querySelectorAll('.category-experimental')
    experimentalItems.forEach((item) => {
      const randomColor = getRandomExperimentalColor()
      ;(item as HTMLElement).style.setProperty('--experimental-color', randomColor)
      
      // Apply experimental text effect to titles
      applyExperimentalTextEffect(item as HTMLElement)
    })
  }, [filteredItems])

  // Masonry layout calculation
  const masonryLayout = () => {
    const columnArray: PortfolioItem[][] = Array(columns).fill(null).map(() => [])
    const columnHeights = Array(columns).fill(0)

    filteredItems.forEach((item) => {
      const shortestColumnIndex = columnHeights.indexOf(Math.min(...columnHeights))
      columnArray[shortestColumnIndex].push(item)
      // Simulate height for layout (audio items are typically shorter than visual items)
      columnHeights[shortestColumnIndex] += item.type === 'audio' ? 300 : 400
    })

    return columnArray
  }

  useEffect(() => {
    let filtered = portfolioItems

    // Filter by category
    if (selectedFilter !== 'all') {
      if (selectedFilter === 'audio' || selectedFilter === 'visual') {
        filtered = filtered.filter(item => item.type === selectedFilter)
      } else {
        filtered = filtered.filter(item => item.category === selectedFilter)
      }
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Sort items
    filtered = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'title':
          return a.title.localeCompare(b.title)
        case 'oldest':
          return parseInt(a.id) - parseInt(b.id)
        case 'newest':
        default:
          return parseInt(b.id) - parseInt(a.id)
      }
    })

    setFilteredItems(filtered)
  }, [selectedFilter, searchTerm, sortBy])

  return (
    <div className="portfolio-page">
      {/* Header */}
      <div className="portfolio-header">
        <div className="header-top">
          <Link to="/" className="back-link">
            <ArrowLeft size={20} />
            <span>back</span>
          </Link>
          <div className="status-text">status: viewing all work</div>
        </div>

        <div className="header-main">
          <h1 className="portfolio-title">
            bütün çalışmalar
            <span className="title-meta">({portfolioItems.length} eser)</span>
          </h1>
          <p className="portfolio-subtitle">
            bütün sanatsal çalışmalarımı keşfedin. 
          </p>
        </div>
      </div>

      {/* Controls */}
      <div className="portfolio-controls">
        {/* Mobile Accordion Header */}
        <div className="mobile-controls-header">
          <button 
            className="accordion-toggle"
            onClick={() => setIsControlsExpanded(!isControlsExpanded)}
          >
            <span>
              filtreler ve ayarlar
              {(selectedFilter !== 'all' || searchTerm) && (
                <span className="active-filters-indicator">●</span>
              )}
            </span>
            {isControlsExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>

        {/* Controls Content */}
        <div className={`controls-content ${isControlsExpanded ? 'expanded' : ''}`}>
          {/* Search */}
          <div className="control-group">
            <div className="search-wrapper">
              <Search size={18} />
              <input
                type="text"
                placeholder="ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="control-group">
            <span className="control-label">filtrele</span>
            <div className="filter-buttons">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`filter-btn ${selectedFilter === category ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedFilter(category)
                    // Auto-collapse on mobile after selection
                    if (window.innerWidth <= 768) {
                      setTimeout(() => setIsControlsExpanded(false), 300)
                    }
                  }}
                >
                  {category.replace('-', '_')}
                </button>
              ))}
            </div>
          </div>

          {/* View & Sort Controls */}
          <div className="control-group">
            <div className="view-controls">
              <span className="control-label">görüntüleme modu</span>
              <div className="view-buttons">
                <button
                  className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                  onClick={() => setViewMode('grid')}
                >
                  <Grid size={16} />
                </button>
                <button
                  className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                  onClick={() => setViewMode('list')}
                >
                  <List size={16} />
                </button>
              </div>
            </div>

            <div className="sort-controls">
              <span className="control-label">sırala</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'newest' | 'oldest' | 'title')}
                className="sort-select"
              >
                <option value="newest">önce en yeni</option>
                <option value="oldest">önce en eski</option>
                <option value="title">başlığa göre</option>
              </select>
            </div>

            <div className="column-controls">
              <span className="control-label">sütunlar</span>
              <div className="column-buttons">
                {[1, 2, 3, 4].map((num) => (
                  <button
                    key={num}
                    className={`column-btn ${columns === num ? 'active' : ''}`}
                    onClick={() => setColumns(num)}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results Info */}
      <div className="results-info">
        <span className="results-count">
          showing {filteredItems.length} of {portfolioItems.length} items
        </span>
        {(selectedFilter !== 'all' || searchTerm) && (
          <button
            className="clear-filters"
            onClick={() => {
              setSelectedFilter('all')
              setSearchTerm('')
            }}
          >
            clear filters
          </button>
        )}
      </div>

      {/* Portfolio Content */}
      <div className={`portfolio-content ${viewMode}`}>
        {filteredItems.length > 0 ? (
          viewMode === 'grid' ? (
            <div className={`portfolio-masonry columns-${columns}`}>
              {masonryLayout().map((column, columnIndex) => (
                <div key={columnIndex} className="masonry-column">
                  {column.map((item) => (
                    <div key={item.id} className={`portfolio-item category-${item.category}`}>
                      {item.type === 'audio' ? (
                        <AudioGrid item={item} />
                      ) : (
                        <VisualGrid item={item} />
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ) : (
            <div className="portfolio-list">
              {filteredItems.map((item) => (
                <div key={item.id} className={`portfolio-item category-${item.category}`}>
                  {item.type === 'audio' ? (
                    <AudioGrid item={item} />
                  ) : (
                    <VisualGrid item={item} />
                  )}
                </div>
              ))}
            </div>
          )
        ) : (
          <div className="no-results">
            <div className="no-results-icon">¯\\_(ツ)_/¯</div>
            <h3>nothing found</h3>
            <p>try adjusting your search or filter criteria</p>
            <button
              className="reset-btn"
              onClick={() => {
                setSelectedFilter('all')
                setSearchTerm('')
              }}
            >
              reset filters
            </button>
          </div>
        )}
      </div>

      {/* Footer Stats */}
      <div className="portfolio-footer">
        <div className="stats">
          <div className="stat">
            <span className="stat-number">{portfolioItems.filter(item => item.type === 'audio').length}</span>
            <span className="stat-label">ses</span>
          </div>
          <div className="stat">
            <span className="stat-number">{portfolioItems.filter(item => item.type === 'visual').length}</span>
            <span className="stat-label">görsel</span>
          </div>
          <div className="stat">
            <span className="stat-number">{categories.length - 1}</span>
            <span className="stat-label">kategori</span>
          </div>
        </div>
        <div className="footer-debug">
          son_değişiklik: {new Date().toISOString().split('T')[0]}
        </div>
      </div>
    </div>
  )
}

export default PortfolioPage
