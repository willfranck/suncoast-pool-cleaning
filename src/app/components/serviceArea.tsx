import Image from 'next/image'
import { WindSong } from 'next/font/google'
import serviceAreaInfo from '@data/content'

const windsong = WindSong({
  subsets: ['latin'], 
  weight: '500' 
})


export default function ServiceArea() {
  return (
    <article className='flex flex-col lg:flex-row justify-center items-center'>
      <div className='flex flex-col pb-10 lg:py-20 lg:px-10 lg:space-y-10'>
        <div className='flex flex-col justify-center'>
          <h2>{serviceAreaInfo.serviceArea.title}</h2>
          <span>{serviceAreaInfo.serviceArea.paragraph1}</span>
        </div>
        <div className='flex flex-col justify-center items-center lg:h-32 mt-10 space-y-4'>
          <p className={windsong.className + ' text-3xl lg:text-4xl -skew-y-6'}>{serviceAreaInfo.serviceArea.paragraph2}</p>
          <p className={windsong.className + ' text-3xl lg:text-4xl -skew-y-6'}>{serviceAreaInfo.serviceArea.paragraph3}</p>
        </div>
      </div>

      <Image 
        src={'/spc_service_area.png'}
        alt="Map of our service area"
        width={500}
        height={0}
        className='rounded-full shadow-map'
      />
    </article>
  )
}
