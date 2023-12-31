import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faHouse, faCircleInfo } from '@fortawesome/free-solid-svg-icons'


export default function Footer() {
  return (
    <footer className='flex flex-col justify-center items-center w-full py-10 bg-black'>
      <div className='flex justify-between items-center w-full max-w-[25rem] px-5 pb-10'>
        <Image
          src={'/spc_logo.webp'}
          alt='Suncoast Pool Cleaning logo'
          width={96}
          height={0}
        />

        <div className='flex flex-col space-y-4'>
          <Link
            href={'/'}
            aria-label='Homepage'
            className='flex items-center'
          >
            <FontAwesomeIcon icon={faHouse} className='w-8 h-8' />
            <span>&ensp;Home</span>      
          </Link>

          <Link
            href={'/about'}
            aria-label='Learn more about us'
            className='flex items-center'
          >
            <FontAwesomeIcon icon={faCircleInfo} className='w-8 h-8' />
            <span>&ensp;More About Us</span>      
          </Link>

          <Link
            href={'https://www.facebook.com/profile.php?id=100093613149972'}
            aria-label='Check out our Facebook page'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center'
          >
            <FontAwesomeIcon icon={faFacebook} className='w-8 h-8' />
            <span>&ensp;Find Us on Facebook</span>      
          </Link>
        </div>
      </div>

      <p className='text-xs'>
        Designed and built by 
        <Link 
          href={'https://www.linkedin.com/in/william-franck'}
          aria-label='Developer LinkedIn page'
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-400'
        >
          &ensp;willfranckcodes
        </Link>
      </p>
    </footer>
  )
}
