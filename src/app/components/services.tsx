import content from '@data/content'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons'


export default function Services() {
  const serviceSectionTitle = content.services.mainTitle
  const services = content.services.serviceInfo

  return (
    <article className='flex flex-col items-center w-full'>
      <div className='flex flex-col sm:flex-row justify-center w-full px-4 sm:pt-10 pb-10'>
        <span className='mt-2 px-4 py-0.5 text-end italic'>...from the bay to the beach...</span>
        <h3 className='text-center'>{serviceSectionTitle}</h3>
      </div>
      
      <div className='flex justify-center w-full'>
        <FontAwesomeIcon icon={faAnglesDown} className='w-6 h-6 my-4 scale-x-400' />
      </div>

      <ul className='flex flex-col px-4 py-10 space-y-10'>
        {services && services.map((service, index) => (
          <li key={index}>
            <div className='flex py-2'>
              <FontAwesomeIcon icon={service.serviceIcon} className='w-6 h-6 mr-3' />
              <h3>
                {service.serviceTitle}
              </h3>
            </div>
            <p>{service.serviceDesc}</p>
          </li>
        ))}
      </ul>
    </article>
  )
}
