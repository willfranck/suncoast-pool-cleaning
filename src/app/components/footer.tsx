import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'


export default function Footer() {
  return (
    <footer className='flex flex-col justify-center items-center w-full py-10'>
      <div className='flex justify-between items-center w-full max-w-[25rem] px-5 pb-10'>
        <Image
          src={'/spc_logo.png'}
          alt='Suncoast Pool Cleaning logo'
          width={96}
          height={0}
        />

        <div>
          <Link
            href={'/'}
            className='flex items-center'
          >
            <FontAwesomeIcon icon={faFacebook} className='w-8 h-8' />
            <span>&ensp;Find us on Facebook</span>      
          </Link>
        </div>
      </div>

      <p className='text-xs'>Designed and built by 
        <span className='text-xs text-blue-400'>&ensp;willfranckcodes</span>
      </p>
    </footer>
  )
}
