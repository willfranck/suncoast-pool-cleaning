import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import content from '@data/content'
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons'


export default function Services() {
  const serviceSectionTitle = content.services.mainTitle
  const services = content.services.serviceInfo

  return (
    <>
      <div className='flex flex-col sm:flex-row items-end py-10'>
        <span className='flex-1 px-4 py-0.5 italic'>...from the bay to the beach...</span>
        <h3>{serviceSectionTitle}</h3>
      </div>

      <FontAwesomeIcon icon={faAnglesDown} className='w-6 h-6 my-4 scale-x-400' />
      
      <ul className='flex flex-col py-10 space-y-4'>
        {services && services.map((service, index) => (
          <li key={index}>
            <div className='flex'>
              <FontAwesomeIcon icon={service.serviceIcon} className='w-6 h-6 mr-3 mt-1' />
              <h3>
                {service.serviceTitle}
              </h3>
            </div>
            <p>{service.serviceDesc}</p>
          </li>
        ))}
      </ul>
    </>
  )
}
