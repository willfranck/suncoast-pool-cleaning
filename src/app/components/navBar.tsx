import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faHouse, faCircleInfo } from '@fortawesome/free-solid-svg-icons'


export default function NavBar() {
  return (
    <nav className='flex justify-between items-center w-full max-w-[120rem] h-20 px-4'>
      <div>
        <Link
          href={'tel:+17272665144'}
          aria-label='Call us'
          className='flex items-center p-2'
        >
          <FontAwesomeIcon icon={faPhone} className='w-6 h-6' />
          &ensp;Call Us
        </Link>
      </div>
      
      <div className='flex justify-between w-24'>
        <Link 
          href={'/'}
          aria-label='Homepage'
          className='p-2'
        >
          <FontAwesomeIcon icon={faHouse} className='w-6 h-6' />
        </Link>

        <Link 
          href={'/about'}
          aria-label='Learn more about us'
          className='p-2'
        >
          <FontAwesomeIcon icon={faCircleInfo} className='w-6 h-6' />
        </Link>
      </div>
    </nav>
  )
}
