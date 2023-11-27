'use client'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, EffectCoverflow, Autoplay } from 'swiper/modules'
import 'swiper/css/bundle'
import content from '@data/content'


export default function ImageSlider() {
  const sliderImages = content.slider.img


  return (
    <article className='max-w-[60rem] py-20 overflow-hidden'>
      <div className='flex flex-col items-center md:items-start px-6'>
        <p className='w-full md:w-1/2 pb-1'>{content.slider.subtitle}</p>
        <hr className='w-full md:w-1/2 pb-6 border-t-1 border-gray-500'></hr>
      </div>

      <Swiper
        modules={[ Navigation, EffectCoverflow, Autoplay ]}
        effect='coverflow'
        coverflowEffect={{
          rotate: 15,
          stretch: 50,
        }}
        navigation
        initialSlide={1}
        slidesPerView={3}
        spaceBetween={0}
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
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
