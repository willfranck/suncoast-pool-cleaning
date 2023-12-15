import Image from 'next/image'
import { windsong } from '@utils/fonts'
import content from '@data/content'


export default function ServiceArea() {
  return (
    <article className='relative flex flex-col lg:flex-row-reverse justify-center items-center w-full max-w-[85rem]'>
      <div className='absolute inset-0 md:inset-auto md:left-[3%] md:bottom-[12%] lg:left-[10%] flex flex-col justify-center items-center space-y-4 text-black'>
        <h3 className='md:max-w-[14rem] text-center'>
          {content.serviceArea.title}
        </h3>

        <p className={windsong.className + ' text-3xl lg:text-4xl -skew-y-6'}>
          {content.serviceArea.paragraph1}
        </p>
        <p className={windsong.className + ' text-3xl lg:text-4xl -skew-y-6'}>
          {content.serviceArea.paragraph2}
        </p>
      </div>
      
      <div>
        <Image 
          src={'/spc_service_area.webp'}
          alt="Map of our service area"
          width={1024}
          height={0}
          className='w-full'
        />
      </div>
    </article>
  )
}
