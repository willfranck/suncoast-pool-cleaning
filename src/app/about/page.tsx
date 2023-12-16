import Image from 'next/image'
import NavBar from '@components/navBar'
import ServiceArea from '@components/serviceArea'
import ImageSlider from '@components/imageSlider'
import Testimonials from '@components/testimonials'
import QuoteForm from '@components/quoteForm'
import Footer from '@components/footer'
import content from '@data/content'


export default function AboutPage() {
  return (
    <main>
      <section className='relative flex flex-col items-center w-full min-h-hero pb-20 bg-about bg-cover bg-center isolate before:absolute before:inset-0 before:-z-10 before:bg-tintBlack'>
        <NavBar />

        <article className='flex justify-center items-center flex-1 w-full'>
          <div className='flex flex-col lg:flex-row justify-around items-center w-full max-w-[100rem]'>
            <Image
              src={'/spc_logo.webp'}
              alt='Suncoast Pool Cleaning logo and title'
              loading='eager'
              width={256}
              height={0}
              className='m-20'
            />
            
            <div className='flex flex-col justify-center w-full lg:max-w-[60rem] px-6 sm:px-10 space-y-10 text-white'>
              <h2>{content.about.title}</h2>
              <p>{content.about.paragraph1}</p>
              <p>{content.about.paragraph2}</p>
              <p className='text-end'>{content.about.paragraph3}</p>
            </div>
          </div>
        </article>
      </section>

      <section className='flex justify-center items-center bg-[#90DAEE]'>
        <ServiceArea />
      </section>

      <section className='flex justify-center items-center bg-gradientBlue'>
        <ImageSlider />
      </section>

      <section className='flex justify-center items-center bg-[#016A70]'>
        <Testimonials />
      </section>

      <section className='relative flex flex-col items-center bg-form bg-center bg-cover isolate before:-z-10 before:absolute before:content-[""] before:inset-0 before:bg-tintBlack overflow-hidden'>
        <QuoteForm />
      </section>

      <Footer />
    </main>
  )
}
