import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'


export default function QuoteForm() {
  return (
    <form className='flex flex-col items-center w-full max-w-[44rem] px-6 py-10'>
      <div className='flex flex-col sm:flex-row justify-between items-center w-full'>
        <div className='max-w-[40rem]'>
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
  )
}
