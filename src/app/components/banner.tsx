'use client'
import { useState, useEffect, useRef } from 'react'


export default function Banner() {
  const [scrollY, setScrollY] = useState(0)
  const articleRef = useRef<HTMLDivElement>(null)
  const [articleHeight, setArticleHeight] = useState(0)

  useEffect(() => {
    let animationFrameId: number
    
    const handleScroll = () => {
      animationFrameId = requestAnimationFrame(() => {
        if (articleRef.current) {
          const scrollTop = window.scrollY
          const articleTop = articleRef.current.getBoundingClientRect().top + scrollTop
          setScrollY(scrollTop - articleTop)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  useEffect(() => {
    const updateArticleHeight = () => {
      if (articleRef.current) {
        setArticleHeight(articleRef.current.clientHeight)
      }
    }

    updateArticleHeight()

    window.addEventListener('resize', updateArticleHeight)

    return () => {
      window.removeEventListener('resize', updateArticleHeight)
    }
  }, [])

  const translateY = (scrollY - 600) * 0.3


  return (
    <article 
      ref={articleRef} 
      className='relative h-[70vh] overflow-hidden'
    >
      <div
        style={{ transform: `translateY(${translateY}px)` }}
        className='inner absolute top-0 w-full h-[100vh] bg-banner bg-center bg-cover'
      ></div>
    </article>
  )
}
