import Image from 'next/image'
import { WindSong } from 'next/font/google'
import content from '@data/content'

const windsong = WindSong({
  subsets: ['latin'], 
  weight: '500' 
})


export default function Services() {
  const services = content.services.serviceInfo


  return (
    <article className='flex flex-col items-center w-full'>
      <div className='flex flex-col sm:flex-row justify-center w-full px-4 pt-4 lg:pt-10'>
        <span className={windsong.className + ' px-6 pt-4 text-lg text-end'}>
          {content.services.heroSpan}
        </span>
        <h2 className='text-center'>{content.services.heroTitle}</h2>
      </div>
      
      <ul className='flex flex-col w-full lg:max-w-[75%] px-10 pt-10 pb-20'>
        {services && services.map((service, index) => (
          <li key={index} className={service.flexDirection + ' lg:flex justify-between items-center py-10'}>
            <Image 
              src={service.img}
              alt='Image'
              width={456}
              height={0}
              className='mb-6 lg:mb-0 lg:mx-10 rounded-tr-[40%] rounded-bl-[40%]'
            />

            <div className='flex-1 max-w-[500px]'>
              <h3 className='px-2 pb-4 text-end lg:text-center'>{service.title}</h3>
              <span>{service.desc}</span>
            </div>
          </li>
        ))}
      </ul>
    </article>
  )
}
