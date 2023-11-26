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
    <article className='flex flex-col items-center lg:w-full max-w-[75rem] px-4 py-20'>
      <ul className='flex flex-col w-full px-2 space-y-10'>
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
