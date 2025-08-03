import { useState, useRef } from 'react'
import { Play, ChevronLeft, ChevronRight } from 'lucide-react'

interface VisualGridProps {
  item: {
    id: string
    title: string
    description: string
    assets: {
      type: 'image' | 'video'
      url: string
      thumbnail?: string
    }[]
    layout: 'horizontal' | 'vertical'
  }
}

const VisualGrid = ({ item }: VisualGridProps) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [currentAssetIndex, setCurrentAssetIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Swipe detection
  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0) // Reset touchEnd
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe && item.assets.length > 1) {
      nextAsset()
    }
    if (isRightSwipe && item.assets.length > 1) {
      prevAsset()
    }
  }

  const toggleVideoPlay = () => {
    const video = videoRef.current
    if (!video) return

    if (isVideoPlaying) {
      video.pause()
    } else {
      video.play()
    }
    setIsVideoPlaying(!isVideoPlaying)
  }

  const nextAsset = () => {
    setCurrentAssetIndex((prev) => (prev + 1) % item.assets.length)
    setIsVideoPlaying(false)
  }

  const prevAsset = () => {
    setCurrentAssetIndex((prev) => (prev - 1 + item.assets.length) % item.assets.length)
    setIsVideoPlaying(false)
  }

  const goToAsset = (index: number) => {
    setCurrentAssetIndex(index)
    setIsVideoPlaying(false)
  }

  const currentAsset = item.assets[currentAssetIndex]
  const hasMultipleAssets = item.assets.length > 1

  return (
    <div className="visual-grid-item">
      <div className="visual-carousel">
        <div 
          className="visual-main-asset"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {currentAsset.type === 'image' ? (
            <img
              src={currentAsset.url}
              alt={`${item.title} - ${currentAssetIndex + 1}`}
              className="visual-image"
            />
          ) : (
            <div className="video-container">
              <video
                ref={videoRef}
                src={currentAsset.url}
                poster={currentAsset.thumbnail}
                className="visual-image"
                loop
                muted
                onClick={toggleVideoPlay}
              />
              {!isVideoPlaying && (
                <div className="video-overlay">
                  <button
                    className="video-play-button"
                    onClick={toggleVideoPlay}
                  >
                    <Play size={24} />
                  </button>
                </div>
              )}
            </div>
          )}
          
          {hasMultipleAssets && (
            <>
              <button className="carousel-btn carousel-prev desktop-only" onClick={prevAsset}>
                <ChevronLeft size={20} />
              </button>
              <button className="carousel-btn carousel-next desktop-only" onClick={nextAsset}>
                <ChevronRight size={20} />
              </button>
              <div className="carousel-counter">
                {currentAssetIndex + 1} / {item.assets.length}
              </div>
            </>
          )}
        </div>

        {hasMultipleAssets && (
          <div className="visual-thumbnails">
            {item.assets.map((asset, index) => (
              <button
                key={index}
                className={`thumbnail-btn ${index === currentAssetIndex ? 'active' : ''}`}
                onClick={() => goToAsset(index)}
              >
                {asset.type === 'image' ? (
                  <img
                    src={asset.url}
                    alt={`${item.title} thumbnail ${index + 1}`}
                    className="thumbnail-image"
                  />
                ) : (
                  <div className="thumbnail-video">
                    <img
                      src={asset.thumbnail || asset.url}
                      alt={`${item.title} video thumbnail ${index + 1}`}
                      className="thumbnail-image"
                    />
                    <div className="thumbnail-play-icon">
                      <Play size={12} />
                    </div>
                  </div>
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="visual-content">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <div className="visual-meta">
          <span className="visual-category">{item.layout}</span>
          <span>{item.assets.length} asset{item.assets.length !== 1 ? 's' : ''}</span>
        </div>
      </div>
    </div>
  )
}

export default VisualGrid
