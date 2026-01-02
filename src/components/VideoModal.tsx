'use client'

import { useState, useEffect } from 'react'
import { useGlobalDispatch, useWindowSize } from '../hooks'
import { FadeWrapper } from './FadeWrapper'
import { Portal } from './portal'
import { VideoModalDesktop } from './VideoModalDesktop'
import { VideoModalMobileComponent as VideoModalMobile } from './VideoModalMobile'
import { fetchVideosData } from '../lib/airtable'
import { VideoRecord } from '../types'

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
}

export const VideoModal = ({ isOpen, onClose }: VideoModalProps) => {
  const [videos, setVideos] = useState<VideoRecord[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const size = useWindowSize()
  const dispatch = useGlobalDispatch()

  useEffect(() => {
    if (isOpen && videos.length === 0 && !isLoading) {
      const loadVideos = async () => {
        setIsLoading(true)
        try {
          const data = await fetchVideosData()
          setVideos(data)
        } catch (error) {
          console.error('Failed to fetch videos:', error)
        } finally {
          setIsLoading(false)
        }
      }
      loadVideos()
    }
  }, [isOpen, videos.length, isLoading])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleClose = () => {
    dispatch({ type: 'SECONDARY_MENU_OFF' })
    dispatch({ type: 'CNN_OFF' })
    onClose()
  }

  if (!isOpen || videos.length === 0) {
    return null
  }

  const formattedVideos = videos.map(video => ({
    node: {
      id: video.id,
      data: {
        Video_Title: video.title,
        Video_URL: video.url,
      }
    }
  }))

  return (
    <Portal>
      <FadeWrapper transition={0.5}>
        {size.width <= 828 ? (
          <VideoModalMobile videos={formattedVideos} handleClose={handleClose} />
        ) : (
          <VideoModalDesktop handleClose={handleClose} videos={formattedVideos} />
        )}
      </FadeWrapper>
    </Portal>
  )
}

VideoModal.displayName = 'VideoModal'
