'use client'

import { useEffect, useRef, useCallback } from 'react'
import { useInView } from 'react-intersection-observer'
import { FadeWrapper } from './FadeWrapper'
import { SEO as Seo } from './seo'
import { Shows } from './shows'
import { Video } from './video'
import { useGlobalDispatch } from '../hooks'
import { VideoRecord, ShowRecord } from '../types'
import styles from '../styles/BigLogo.module.css'

interface HomeClientProps {
  videos: VideoRecord[]
  shows: ShowRecord[]
}

export const HomeClient = ({ videos, shows }: HomeClientProps) => {
  const dispatch = useGlobalDispatch()
  const [animateRef, animateInView] = useInView({ threshold: 0.7 })
  const scrollHandlerRef = useRef<(() => void) | undefined>(undefined)

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

  const featuredVideo = videos[0]

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
