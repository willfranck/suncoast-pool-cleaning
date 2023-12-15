'use client'
import { useState } from 'react'
import Link from 'next/link'
import toast, { Toaster } from 'react-hot-toast'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'


export default function QuoteForm() {
  const [subject, setSubject] = useState('Get a Quote')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    
    try {
      const res = await fetch('/api/quoteFormContact', {
        method: 'POST',
        body: JSON.stringify({
          subject, email, message
        }),
        headers: {
          'content-type': 'application/json'
        },
      })

      if (res.ok) {
        const toastNotify = () => toast('Your message is on its way!')
        toastNotify()

      } else {
          const toastNotify = () => toast('Something went wrong')
          toastNotify()
      }

    } catch (err: any) {
        console.error(err)
    }
  }


  return (
    <article>
      <div>
        <Toaster
          position='top-center'
          toastOptions={{
            duration: 4000,
          }}
        />
      </div>

      <form
        onSubmit={handleSubmit} 
        className='flex flex-col items-center w-full max-w-[45rem] px-6 py-20 bg-tintBlack shadow-xBlack'
      >
        <div className='flex flex-col sm:flex-row justify-between items-center w-full'>
          <div className='max-w-[40rem]'>
            <Link
              href={'tel:+17272665144'}
              aria-label='Phone number link'
              className='flex justify-center items-center py-2'
            >
              Give us a call&ensp;
              <FontAwesomeIcon icon={faPhone} className='w-6 h-6' />
              &ensp;727.266.5144
            </Link>
      
            <hr className='w-full my-4 text-center text-gray-400 border-t-1 border-gray-400 overflow-visible before:relative before:content-["or"] before:bottom-3.5 before:text-white'></hr>
            
            <Link
              href={'mailto:suncoastpoolclean@gmail.com'}
              aria-label='Email link'
              className='text-center sm:text-end'
            >
              <p className='font-bold text-xl'>
                Send us an email for a FREE quote or with questions &ensp;
                <FontAwesomeIcon icon={faUpRightFromSquare} className='w-5 h-5' />
              </p>
            </Link>
          </div>

          <div className='relative flex flex-col w-full sm:max-w-[15rem] sm:ml-6 before:bg-tintblack'>
            <label 
              htmlFor='subject'
              className='text-sm text-gray-400 leading-loose'
            >
              Subject
            </label>
            <select
              name='Subject'
              aria-label='Subject dropdown menu'
              value={subject}
              disabled
              onChange={(e) => setSubject(e.target.value)}
              className='mb-1 px-2 py-1 text-gray-800 rounded-sm'
            >
              <option 
                aria-label='Get a Quote option'
                value={'Get a Quote'} 
              >
                Get a Quote
              </option>
              <option 
                aria-label='General Question option'
                value={'General Question'}
              >
                General Question
              </option>
            </select>

            <label 
              htmlFor='email'
              className='text-sm text-gray-400 leading-loose'
            >
              Email
            </label>
            <input
              name='Email'
              aria-label='Email input'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled
              autoComplete='on'
              // placeholder='Enter your email address'
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
            name='Message'
            aria-label='Email comments text area'
            required
            disabled
            value={message}
            placeholder='Email Form Coming Soon! - Click the text above or the "Email Us" button to open your mail app'
            onChange={(e) => setMessage(e.target.value.slice(0, 500))}
            className='h-[10rem] px-6 py-3 text-gray-800 rounded-sm resize-none'
          ></textarea>
          
          <span className='text-end'>
            Characters: {message.length}/500
          </span>
        </div>

        <Link
          href={'mailto:suncoastpoolclean@gmail.com'}
        >
          <button
            type='submit'
            aria-label='Submit quote form'
            className='flex justify-center items-center w-40 mt-3 py-2 bg-blue-700 text-white font-semibold leading-6 rounded-sm shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500'
          >
              Email Us &ensp;
              <FontAwesomeIcon icon={faUpRightFromSquare} className='h-4' />
          </button>
        </Link>
      </form>
    </article>
  )
}
