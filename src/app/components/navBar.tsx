import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone'
import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse"
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons/faCircleInfo"


export default function NavBar() {
  return (
    <nav className='flex justify-between items-center w-full max-w-[120rem] h-20 px-4'>
      <div>
        <Link
          href={'tel:+17272665144'}
          className='flex items-center p-2'
        >
          <FontAwesomeIcon icon={faPhone} className='w-6 h-6' />
          &ensp;Call Us
        </Link>
      </div>
      
      <div className='flex justify-between w-24'>
        <Link 
          href={'/'}
          className='p-2'
        >
          <FontAwesomeIcon icon={faHouse} className='w-6 h-6' />
        </Link>

        <Link 
          href={'/about'}
          className='p-2'
        >
          <FontAwesomeIcon icon={faCircleInfo} className='w-6 h-6' />
        </Link>
      </div>
    </nav>
  )
}
