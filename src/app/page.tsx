import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NavBar from '@components/navBar'
import Footer from '@components/footer'
import content from '@data/content'
import { faAnglesDown, faPhone } from '@fortawesome/free-solid-svg-icons'


export default function Home() {
  const serviceSectionTitle = content.services.mainTitle
  const services = content.services.serviceInfo


  return (
    <main className="flex flex-col items-center min-h-screen">
      <div className='relative flex flex-col items-center w-full min-h-hero bg-hero bg-cover bg-center isolate before:-z-10 before:absolute before:content-[""] before:inset-0 before:bg-tintBlack'>
        <NavBar />

        <div className='flex flex-1 items-center px-4 pb-20'>
          <Image 
            src={'/spc_logo_full.png'}
            alt='Suncoast Pool Cleaning logo and title'
            loading='eager'
            width={854}
            height={0}
          />
        </div>

      </div>

      <section className='flex flex-col items-center w-5/6'>
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
      </section>

      <section className='flex flex-col items-center w-full'>
        <form className='flex flex-col items-center max-w-[44rem] px-6 py-10'>
          <div className='flex flex-col sm:flex-row justify-between items-center w-full'>
            <div className='w-[40rem]'>
              <Link
                href={'tel:+17272665144'}
                className='flex justify-center items-center py-2'
              >
                Give us a call&ensp;
                <FontAwesomeIcon icon={faPhone} className='w-6 h-6' />
                &ensp;727.266.5144
              </Link>
        
              <hr className="w-full my-4 text-center text-gray-400 border-t-1 border-gray-400 overflow-visible before:relative before:content-['or'] before:bottom-3.5 before:px-1 before:bg-black"></hr>

              <h3 className='text-end'>Send us an email for a FREE quote or with questions</h3>
            </div>

            <div className='flex flex-col w-full sm:w-auto sm:ml-6'>
              <label 
                htmlFor='name'
                className='text-sm text-gray-400 leading-loose'
              >
                Name
              </label>
              <input
                name='name'
                type='text'
                required
                autoComplete='on'
                className='mb-1 px-2 py-1 text-gray-800 rounded-sm'
              ></input>

              <label 
                htmlFor='email'
                className='text-sm text-gray-400 leading-loose'
              >
                Email
              </label>
              <input
                name='email'
                type='text'
                required
                autoComplete='on'
                className='mb-2 px-2 py-1 text-gray-800 rounded-sm'
                ></input>
            </div>
          </div>

          <div className='flex flex-col w-full'>
            <label 
              htmlFor='text'
              className='text-sm text-gray-400 leading-loose'
            >
              Comments
            </label>
            <textarea
              name='comments'
              required
              autoComplete='on'
              className='h-[10rem] px-2 py-1 text-gray-800 rounded-sm resize-none'
            ></textarea>
          </div>
        </form>
      </section>

      <Footer />
    </main>
  )
}
