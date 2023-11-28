'use client'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Autoplay } from 'swiper/modules'
import 'swiper/css/bundle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong, faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import content from '@data/content'


export default function ImageSlider() {
  const sliderImages = content.slider.img


  return (
    <article className='flex flex-col max-w-[60rem] py-20 overflow-hidden'>
      <div className='flex flex-col items-center md:items-start px-6'>
        <p className='w-full md:w-1/2 pb-1'>
          {content.slider.subtitle}
        </p>
        <hr className='w-full md:w-1/2 border-t-1 border-gray-500'></hr>
      </div>

      <div className='mb-6 py-4 pl-4 md:pl-0'>
        <Swiper
          modules={[ EffectCoverflow, Autoplay ]}
          effect='coverflow'
          coverflowEffect={{
            rotate: 30,
            depth: 0,
            scale: 0.9,
          }}
          grabCursor={true}
          initialSlide={1}
          slidesPerView={1}
          spaceBetween={-100}
          loop={true}
          loopAdditionalSlides={5}
          autoplay={{
            delay: 4000,
          }}
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
              coverflowEffect: {
                depth: 10,
              },
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 30,
              coverflowEffect: {
                rotate: 15,
                depth: 100,
                stretch: 30,
                scale: 1,
              },
            },
          }}
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
      </div>

      <div className='flex items-center self-center'>
        <FontAwesomeIcon icon={faArrowLeftLong} className='w-10 h-5' />
        <span>Swipe</span>
        <FontAwesomeIcon icon={faArrowRightLong} className='w-10 h-5' />
      </div>
    </article>
  )
}
