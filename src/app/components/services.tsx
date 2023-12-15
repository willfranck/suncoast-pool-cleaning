import Image from 'next/image'
import content from '@data/content'


export default function Services() {
  const services = content.services.serviceInfo


  return (
    <article className='flex flex-col items-center lg:w-full max-w-[75rem] px-4 py-20'>
      <ul className='flex flex-col w-full px-2 space-y-5'>
        {services && services.map((service, index) => (
          <>
            <li 
              key={index} 
              className={`lg:flex lg:${service.flexDirection} justify-between items-center py-10`}
            >
              <Image 
                src={service.img}
                alt='Image'
                width={456}
                height={0}
                className='mx-auto lg:mx-10 mb-6 lg:mb-0 rounded-tr-[40%] rounded-bl-[40%] shadow-serviceImg'
              />

              <div className='flex-1 max-w-[31rem] lg:mx-10'>
                <h3 className='px-2 pb-4 text-end lg:text-center'>
                  {service.title}
                </h3>
                <span>{service.desc}</span>
              </div>
            </li>

            <hr className='self-center w-full border-t-1 border-gray-500 last:hidden'></hr>
          </>
        ))}
      </ul>
    </article>
  )
}
