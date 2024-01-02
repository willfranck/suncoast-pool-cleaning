'use client'
import { Parallax } from 'react-scroll-parallax'
// import { useState, useEffect, useRef } from 'react'


export default function Banner() {
  // const [scrollY, setScrollY] = useState(0)
  // const articleRef = useRef<HTMLDivElement>(null)
  // const [articleHeight, setArticleHeight] = useState(0)

  // useEffect(() => {
  //   let animationFrameId: number
    
  //   const handleScroll = () => {
  //     animationFrameId = requestAnimationFrame(() => {
  //       if (articleRef.current) {
  //         const scrollTop = window.scrollY
  //         const articleTop = articleRef.current.getBoundingClientRect().top + scrollTop
  //         setScrollY(scrollTop - articleTop)
  //       }
  //     })
  //   }
  //   window.addEventListener('scroll', handleScroll)

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll)
  //     cancelAnimationFrame(animationFrameId)
  //   }
  // }, [])

  // useEffect(() => {
  //   const updateArticleHeight = () => {
  //     if (articleRef.current) {
  //       setArticleHeight(articleRef.current.clientHeight)
  //     }
  //   }
  //   updateArticleHeight()

  //   window.addEventListener('resize', updateArticleHeight)

  //   return () => {
  //     window.removeEventListener('resize', updateArticleHeight)
  //   }
  // }, [])

  // const translateY = scrollY * 0.3


  return (
    <article 
      // ref={articleRef} 
      className='relative h-[75vh] overflow-hidden'
    >
      <Parallax translateY={[-20, 20]}>
        <div
          // style={{ transform: `translateY(${translateY}px)` }}
          className='h-[100vh] bg-banner bg-center bg-cover'
        >
        </div>
      </Parallax>
    </article>
  )
}
