import Image from 'next/image'
import content from '@data/content'


export default function Services() {
  const services = content.services.serviceInfo


  return (
    <article className='flex flex-col items-center lg:w-full max-w-[75rem] px-4 py-10'>
      <ul
        aria-label='A list of our services' 
        className='flex flex-col w-full px-2'
      >
        {services && services.map((service, index) => (
          <li 
            key={index} 
            className={`lg:flex lg:${service.flexDirection} justify-between items-center py-14 border-b-[1px] border-gray-500 last:border-b-0`}
          >
            <Image 
              src={service.img}
              alt={`We offer a ${service.title} option`}
              width={456}
              height={0}
              className='mx-auto lg:mx-10 mb-6 lg:mb-0 rounded-tr-[40%] rounded-bl-[40%] shadow-serviceImg'
            />

            <div className='flex-1 max-w-[31rem] lg:mx-10 text-white'>
              <h3 className='px-2 pb-4 text-end lg:text-center'>
                {service.title}
              </h3>
              <span>{service.desc}</span>
            </div>
          </li>
        ))}
      </ul>
    </article>
  )
}
