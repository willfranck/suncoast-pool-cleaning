import Image from 'next/image'
import { WindSong } from 'next/font/google'
import content from '@data/content'

const windsong = WindSong({
  subsets: ['latin'], 
  weight: '500' 
})


export default function ServiceArea() {
  return (
    <article className='flex flex-col lg:flex-row justify-center items-center px-6 py-10'>
      <div className='flex flex-col pb-10 lg:py-20 lg:px-10 lg:space-y-10'>
        <h2>{content.serviceArea.title}</h2>

        <div className='flex flex-col justify-center items-center lg:h-32 mt-10 space-y-4'>
          <p className={windsong.className + ' text-3xl lg:text-4xl -skew-y-6'}>
            {content.serviceArea.paragraph1}
          </p>
          <p className={windsong.className + ' text-3xl lg:text-4xl -skew-y-6'}>
            {content.serviceArea.paragraph2}
          </p>
        </div>
      </div>

      <Image 
        src={'/spc_service_area.png'}
        alt="Map of our service area"
        width={456}
        height={0}
        className='rounded-full shadow-mapImg'
      />
    </article>
  )
}
