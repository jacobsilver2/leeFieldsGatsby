'use client'

import { useEffect, useRef, useCallback, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { FadeWrapper } from './FadeWrapper'
import { SEO as Seo } from './seo'
import { Shows } from './shows'
import { Video } from './video'
import { useGlobalDispatch } from '../hooks'
import { VideoRecord, ShowRecord } from '../types'
import { fetchVideosData, fetchShowsData } from '../lib/airtable'
import styles from '../styles/BigLogo.module.css'

export const HomeClient = () => {
  const dispatch = useGlobalDispatch()
  const [animateRef, animateInView] = useInView({ threshold: 0.7 })
  const scrollHandlerRef = useRef<(() => void) | undefined>(undefined)
  const [videos, setVideos] = useState<VideoRecord[]>([])
  const [shows, setShows] = useState<ShowRecord[]>([])
  const [loading, setLoading] = useState(true)

  const setMobileOverrideOff = useCallback(() => {
    dispatch({ type: 'MOBILE_LOGO_OVERRIDE_OFF' })
  }, [dispatch])

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    const debouncedHandler = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(setMobileOverrideOff, 100)
    }

    scrollHandlerRef.current = debouncedHandler
    window.addEventListener('scroll', debouncedHandler)

    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener('scroll', debouncedHandler)
    }
  }, [setMobileOverrideOff])

  useEffect(() => {
    dispatch({ type: animateInView ? 'CNN_ON' : 'CNN_OFF' })
  }, [animateInView, dispatch])

  useEffect(() => {
    const loadHomeData = async () => {
      try {
        const [videosData, showsData] = await Promise.all([
          fetchVideosData(),
          fetchShowsData()
        ])
        setVideos(videosData)
        setShows(showsData)
      } catch (error) {
        console.error('Failed to fetch home data:', error)
      } finally {
        setLoading(false)
      }
    }
    loadHomeData()
  }, [])

  const featuredVideo = videos[0]

  if (loading) {
    return (
      <FadeWrapper>
        <Seo title="Lee Fields" />
        <div style={{ padding: '2rem' }}>
          <p>Loading...</p>
        </div>
      </FadeWrapper>
    )
  }

  return (
    <>
      <FadeWrapper>
        <Seo title="Lee Fields" />
        <div className={styles.bigLogoWrapper}>
          <h1 className={styles.bigLogo} ref={animateRef}>LEE FIELDS</h1>
        </div>
        {featuredVideo && (
          <Video
            hoverImg="/images/playVid.png"
            video={featuredVideo.url}
          />
        )}
        <Shows shows={shows} />
      </FadeWrapper>
    </>
  )
}
