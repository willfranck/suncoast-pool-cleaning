import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NavBar from '@components/navBar'
import content from '@data/content'


export default function Home() {
  const serviceSectionTitle = content.services.mainTitle
  const services = content.services.serviceInfo

  return (
    <main className="flex flex-col items-center min-h-screen">
      <div className='relative flex flex-col items-center w-full h-hero bg-hero bg-cover bg-center isolate before:-z-10 before:absolute before:content-[""] before:inset-0 before:bg-tintBlack'>
        <NavBar />

        <div className='flex flex-1 items-center px-4 pb-20'>
          <Image 
            src={'/spc_logo_full.png'}
            alt='Suncoast Pool Cleaning logo and title'
            loading='eager'
            width={1280}
            height={0}
          />
        </div>

      </div>

      <section className='flex flex-col items-center w-5/6'>
        <div className='flex items-end py-10'>
          <span className='px-4 py-0.5 italic'>...from the bay to the beach...</span>
          <h3>{serviceSectionTitle}</h3>
        </div>

        <ul className='flex flex-col py-10 space-y-4'>
          {services && services.map((service, index) => (
            <li key={index}>
              <div className='flex'>
                <h3>
                  <span>{index + 1}.&ensp;</span>
                  {service.serviceTitle}
                </h3>
                <FontAwesomeIcon icon={service.serviceIcon} className='w-6 h-6 ml-4' />
              </div>
              <p>{service.serviceDesc}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
