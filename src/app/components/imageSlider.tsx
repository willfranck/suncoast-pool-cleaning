'use client'
import { useCallback, useState } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperClass } from 'swiper/types'
import { EffectCreative, Grid, Thumbs, Autoplay } from 'swiper/modules'
import 'swiper/css/bundle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong, faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import content from '@data/content'


export default function ImageSlider() {
  const [swiperMain, setSwiperMain] = useState<SwiperClass>()
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass>()
  const sliderImages = content.slider.img


  return (
    <article className='flex flex-col items-center w-full px-6 py-20 overflow-hidden'>
      <p className='self-start w-full md:w-1/2 pb-1'>
        {content.slider.subtitle}
      </p>
      <hr className='self-start w-full md:w-1/2 border-t-1 border-gray-500'></hr>

      <div className='flex flex-col md:flex-row items-center md:items-start my-6 md:space-x-4'>
        <div className='w-[20rem] sm:w-[25rem] lg:w-[30rem] rounded-sm overflow-hidden'>
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
            initialSlide={1}
            loop={true}
            speed={600}
            autoplay={{
              delay: 4000,
            }}
          >
            {sliderImages && sliderImages.map((image, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={image}
                  alt={`Featured pool project # ${index}`}
                  width={480}
                  height={0}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className='flex justify-center items-center py-1 bg-black'>
            <FontAwesomeIcon icon={faArrowLeftLong} className='w-10 h-5' />
            <span>Swipe</span>
            <FontAwesomeIcon icon={faArrowRightLong} className='w-10 h-5' />
          </div>
        </div>

        <div className='flex justify-center items-center max-w-sm px-6 mt-6 md:mt-0'>
          <Swiper
            onSwiper={setThumbsSwiper}
            modules={[ Grid ]}
            grid={{
              rows: 3,
              fill: 'row',
            }}
            slidesPerView={3}
            initialSlide={1}
            spaceBetween={10}
            className='swiper-thumbs'
          >
            {sliderImages && sliderImages.map((image, index) => (
              <SwiperSlide key={index} className='thumb-slide'>
                <Image
                  src={image}
                  alt={`Featured pool project # ${index} thumbnail`}
                  width={80}
                  height={0}
                  className='w-full max-w-[7rem] h-full max-h-[7rem] object-cover rounded-sm'
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </article>
  )
}
