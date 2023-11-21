import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons'
import content from '@data/content'


export default function Services() {
  const services = content.services.serviceInfo


  return (
    <article className='flex flex-col items-center w-full'>
      <div className='flex flex-col sm:flex-row justify-center w-full px-4 pt-4 lg:pt-10 pb-6'>
        <span className='mt-2 px-4 py-0.5 text-end italic'>...from the bay to the beach...</span>
        <h3 className='text-center'>{content.services.heroTitle}</h3>
      </div>
      
      <div className='flex justify-center w-full'>
        <FontAwesomeIcon icon={faAnglesDown} className='w-8 h-8 my-4 scale-x-400' />
      </div>

      <ul className='flex flex-col px-10 pt-10 pb-20'>
        {services && services.map((service, index) => (
          <li key={index} className='flex flex-col lg:flex-row lg:items-center min-h-[200px] py-10 border-t-2 border-gray-700'>
            <div className='flex items-center lg:w-[360px] pb-4'>
              <FontAwesomeIcon icon={service.serviceIcon} className='w-10 h-10 mr-3' />
              <h3>
                {service.serviceTitle}
              </h3>
            </div>
            <p className='px-2'>{service.serviceDesc}</p>
          </li>
        ))}
      </ul>
    </article>
  )
}
