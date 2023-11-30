'use client'
import { useState } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'


export default function QuoteForm() {
  const [comments, setComments] = useState('')

  function handleCommentChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const inputValue = e.target.value
    setComments(inputValue.slice(0, 500))
  }

  return (
    <form className='flex flex-col items-center w-full max-w-[45rem] px-6 py-20 bg-tintBlack shadow-xBlack'>
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
    
          <hr className='w-full my-4 text-center text-gray-400 border-t-1 border-gray-400 overflow-visible before:relative before:content-["or"] before:bottom-3.5 before:text-white'></hr>

          <h3 className='text-end'>
            Send us an email for a FREE quote or with questions
          </h3>
        </div>

        <div className='flex flex-col w-full sm:max-w-[15rem] sm:ml-6'>
          <label 
            htmlFor='subject'
            className='text-sm text-gray-400 leading-loose'
          >
            Subject
          </label>
          <select
            name='Subject'
            className='mb-1 px-2 py-1 text-gray-800 rounded-sm'
          >
            <option>Get a Quote</option>
            <option>General Question</option>
          </select>

          <label 
            htmlFor='email'
            className='text-sm text-gray-400 leading-loose'
          >
            Email
          </label>
          <input
            name='email'
            type='email'
            required
            autoComplete='on'
            placeholder='Enter your email address'
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
          value={comments}
          onChange={handleCommentChange}
          className='h-[10rem] px-2 py-1 text-gray-800 rounded-sm resize-none'
        ></textarea>
        
        <span className='text-end'>
          Characters: {comments.length}/500
        </span>
      </div>

      <button
        type='submit'
        aria-label='Submit quote form'
        className='flex justify-around items-center w-40 mt-3 py-1 bg-blue-700 text-white font-semibold leading-6 rounded-sm shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500'
      >
        Send
      </button>
    </form>
  )
}
