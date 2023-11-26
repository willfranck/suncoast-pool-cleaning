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
      <div className='flex flex-col items-center lg:items-start w-full'>
        <p className='w-1/3 lg:w-1/2 pb-1'>{content.slider.subtitle}</p>
        <hr className='w-1/3 lg:w-1/2 pb-6 border-t-1 border-gray-500'></hr>
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
