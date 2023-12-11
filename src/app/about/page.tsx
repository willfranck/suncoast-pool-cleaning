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
      <section className='relative flex flex-col items-center w-full min-h-hero bg-about bg-cover bg-center isolate before:-z-10 before:absolute before:content-[""] before:inset-0 before:bg-tintBlack'>
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
            
            <div className='flex justify-center w-full lg:max-w-[60rem] bg-tintBlack'>
              <div className='px-4 sm:px-10 py-10 space-y-10'>
                <h2>{content.about.title}</h2>
                <p>&emsp;{content.about.paragraph1}</p>
                <p>&emsp;{content.about.paragraph2}</p>
                <p className='text-end'>{content.about.paragraph3}</p>
              </div>
            </div>
          </div>
        </article>
      </section>

      <section className='flex justify-center items-center bg-[#016A70]'>
        <ServiceArea />
      </section>

      <section className='flex justify-center items-center bg-[#081E2F]'>
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
