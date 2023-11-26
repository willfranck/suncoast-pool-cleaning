'use client'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, EffectCoverflow, Autoplay } from 'swiper/modules'
import 'swiper/css/bundle'
import content from '@data/content'


export default function ImageSlider() {
  const sliderImages = content.slider.img


  return (
    <article className='max-w-[60rem] py-20'>
      <div className='flex flex-col items-center text-center pb-6'>
        <h2 className='max-w-[100vw] pb-4'>
          {content.slider.title}<br></br>
        </h2>
        <span className='italic'>
          {content.slider.subtitle}
        </span>
      </div>
      
      <Swiper
        modules={[ Pagination, EffectCoverflow, Autoplay ]}
        effect='coverflow'
        coverflowEffect={{
          rotate: 10,
          stretch: 30,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        initialSlide={1}
        slidesPerView={3}
        spaceBetween={30}
        lazyPreloadPrevNext={9}
        loop={true}
        autoplay={{
          delay: 4000,
        }}
        className='rounded-sm'
      >
        {sliderImages && sliderImages.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image}
              alt='Pictures'
              width={300}
              height={0}
              className='rounded-xl'
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </article>
  )
}
