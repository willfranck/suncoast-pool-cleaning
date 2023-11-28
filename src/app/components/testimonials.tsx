import content from '@data/content'
import { WindSong } from 'next/font/google'

const windsong = WindSong({
  subsets: ['latin'], 
  weight: '500' 
})


export default function Testimonials() {
  const testimonials = content.testimonials


  return (
    <article className='grid grid-cols-1 md:grid-cols-2 gap-10 px-6 py-20'>
      {testimonials && testimonials.map((testimonial, index) => (
        <div 
          key={index}
          className='flex flex-col justify-between max-w-[30rem] px-10 py-4 text-black bg-[#59e1e8] rounded-md shadow-testimonial'
        >
          <p className='mb-4'>{testimonial.comments}</p>
          <span className={windsong.className + ' text-lg self-end'}>-&ensp;{testimonial.name}</span>
        </div>
      ))}
    </article>
  )
}
