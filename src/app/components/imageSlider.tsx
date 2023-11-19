'use client'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, EffectCoverflow } from 'swiper/modules'
import 'swiper/css/bundle'


export default function ImageSlider() {
  return (
    <article className='flex justify-center items-center max-w-[60rem] py-20'>
      <Swiper
        modules={[ Navigation, EffectCoverflow ]}
        effect='coverflow'
        coverflowEffect={{
          rotate: 10,
          stretch: 10,
        }}
        navigation
        slidesPerView={3}
        loop={true}
      >
        <SwiperSlide>
          <Image
            src={'/spc_slider_img_1.jpg'}
            alt='Pictures'
            width={300}
            height={0}
            className='rounded-xl'
          ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={'/spc_slider_img_2.jpg'}
            alt='Pictures'
            width={300}
            height={0}
            className='rounded-xl'
          ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={'/spc_slider_img_3.jpg'}
            alt='Pictures'
            width={300}
            height={0}
            className='rounded-xl'
            ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={'/spc_slider_img_4.jpg'}
            alt='Pictures'
            width={300}
            height={0}
            className='rounded-xl'
            ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={'/spc_slider_img_5.jpg'}
            alt='Pictures'
            width={300}
            height={0}
            className='rounded-xl'
            ></Image>
        </SwiperSlide>
        {/* <SwiperSlide>
          <Image
            src={'/spc_slider_img_6.jpg'}
            alt='Pictures'
            width={300}
            height={0}
            className='rounded-xl'
          ></Image>
        </SwiperSlide> */}
        <SwiperSlide>
          <Image
            src={'/spc_slider_img_7.jpg'}
            alt='Pictures'
            width={300}
            height={0}
            className='rounded-xl'
            ></Image>
        </SwiperSlide>
      </Swiper>
    </article>
  )
}