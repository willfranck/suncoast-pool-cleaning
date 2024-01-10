'use client'
import { Reveal } from 'react-awesome-reveal'
import { fadeInFromLeft } from '@utils/keyframes' 
import { windsong } from '@utils/fonts'
import content from '@data/content'


export default function Testimonials() {
  const testimonials = content.testimonials


  return (
    <article className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 px-6 py-20'>
      <Reveal 
        keyframes={fadeInFromLeft}
        fraction={0.7}
        cascade={true}
        damping={0.1}
        triggerOnce={true}
      >
       {testimonials && testimonials.map((testimonial, index) => (
          <div
            key={index}
            className='flex flex-col justify-between w-full max-w-[18rem] min-h-[20rem] px-6 py-4 text-black bg-[#59e1e8] rounded-tr-[15%] rounded-bl-[15%] shadow-testimonial'
          >
            <p className='mb-4'>
              {testimonial.comments}
            </p>
            <span className={`${windsong.className} text-lg self-end`}>
              -&ensp;{testimonial.name}
            </span>
          </div>
        ))}
      </Reveal>
    </article>
  )
}
