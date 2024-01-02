'use client'
import { Parallax } from 'react-scroll-parallax'


export default function Banner() {
  return (
    <article className='relative h-[75vh] overflow-hidden'>
      <Parallax translateY={[-30, 30]}>
        <div className='h-[100vh] bg-banner bg-center bg-cover'></div>
      </Parallax>
    </article>
  )
}
