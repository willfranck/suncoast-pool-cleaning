'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperClass } from 'swiper/types'
import { EffectCreative, Grid, Thumbs, Autoplay } from 'swiper/modules'
import 'swiper/css/bundle'
import content from '@data/content'


export default function ImageSlider() {
  const [swiperMain, setSwiperMain] = useState<SwiperClass>()
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass>()
  const sliderImages = content.slider.img

  function scrollToTop() {
    const scrollToArticle = document.getElementById('galleryTitle')
    scrollToArticle?.scrollIntoView()
  }


  return (
    <article className='flex flex-col items-center w-full max-w-[80rem] px-6 py-20 overflow-hidden'>
      <div className='flex flex-col md:flex-row justify-between items-end w-full md:w-3/4 px-3'>
        <h3 id='galleryTitle'>{content.slider.title}</h3>
        <p className='pb-1 text-center'>
          {content.slider.subtitle}
        </p>
      </div>
      <hr className='w-full md:w-3/4 border-t-1 border-gray-500'></hr>

      <div className='flex flex-col md:flex-row items-center md:items-start'>
        <div className='w-full max-w-[20rem] sm:max-w-[22.5rem] lg:max-w-[32rem] mt-6 md:mr-6 rounded-md overflow-hidden'>
          <Swiper
            onSwiper={setSwiperMain}
            modules={[ EffectCreative, Thumbs, Autoplay ]}
            effect={'creative'}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: [0, 0, -1],
              },
              next: {
                translate: ['100%', 0, 0],
              },
            }}
            thumbs={{
              swiper: thumbsSwiper,
            }}
            grabCursor={true}
            slidesPerView={1}
            initialSlide={0}
            loop={true}
            speed={600}
            autoplay={{
              delay: 4000,
              disableOnInteraction: true,
            }}
            className='swiper-main'
          >
            {sliderImages && sliderImages.map((image, index) => (
              <SwiperSlide 
                key={index}
                className='main-slide'
              >
                <Image
                  src={image}
                  alt={`Featured pool project ${index + 1}`}
                  width={512}
                  height={0}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className='flex justify-center items-center max-w-[20rem] mt-6'>
          <Swiper
            onSwiper={setThumbsSwiper}
            modules={[ Grid ]}
            grid={{
              rows: 3,
              fill: 'row',
            }}
            slidesPerView={3}
            spaceBetween={10}
            className='swiper-thumbs'
          >
            {sliderImages && sliderImages.map((image, index) => (
              <SwiperSlide 
                key={index} 
                onClick={scrollToTop} 
                className='thumb-slide'
              >
                <Image
                  src={image}
                  alt={`Featured pool project ${index + 1} thumbnail`}
                  width={80}
                  height={0}
                  className='w-full max-w-[6.3rem] h-full max-h-[6.3rem] object-cover rounded-sm'
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </article>
  )
}
