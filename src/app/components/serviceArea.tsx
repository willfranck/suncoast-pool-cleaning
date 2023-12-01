import Image from 'next/image'
import { WindSong } from 'next/font/google'
import content from '@data/content'

const windsong = WindSong({
  subsets: ['latin'], 
  weight: '500' 
})


export default function ServiceArea() {
  return (
    <article className='flex flex-col lg:flex-row justify-center items-center'>
      <div className='flex flex-col flex-1 lg:flex-none items-center px-20 py-10 lg:space-y-10'>
        <h3 className='md:max-w-[14rem] text-center'>
          {content.serviceArea.title}
        </h3>

        <div className='flex flex-col justify-center items-center mt-10 space-y-4'>
          <p className={windsong.className + ' text-3xl lg:text-4xl -skew-y-6'}>
            {content.serviceArea.paragraph1}
          </p>
          <p className={windsong.className + ' text-3xl lg:text-4xl -skew-y-6'}>
            {content.serviceArea.paragraph2}
          </p>
        </div>
      </div>

      <div>
        <Image 
          src={'/spc_service_area.png'}
          alt="Map of our service area"
          width={912}
          height={0}
          className='w-full lg:shadow-xBlack'
        />
      </div>
    </article>
  )
}
