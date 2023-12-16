import { windsong } from '@utils/fonts'
import content from '@data/content'


export default function Testimonials() {
  const testimonials = content.testimonials


  return (
    <article className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 px-6 py-20'>
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
    </article>
  )
}
