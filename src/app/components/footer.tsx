import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'


export default function Footer() {
  return (
    <footer className='flex justify-center items-center w-full py-10'>
      <div className='flex justify-between items-center w-[400px]'>
        <Image
          src={'/spc_logo.png'}
          alt='Suncoast Pool Cleaning logo'
          width={128}
          height={0}
        />
        <div>
          <Link
            href={'/'}
            className='flex items-center'
          >
            <FontAwesomeIcon icon={faFacebook} className='w-10 h-10' />
            <span>&ensp;Find us on Facebook</span>      
          </Link>
        </div>
      </div>
    </footer>
  )
}