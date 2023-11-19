import Image from 'next/image'
import NavBar from '@components/navBar'
import Footer from '@components/footer'
import aboutContent from '@data/content'
import ImageSlider from '@components/imageSlider'


export default function AboutPage() {
  const aboutInfo = aboutContent.about


  return (
    <main>
      <section className='relative flex flex-col items-center w-full min-h-hero bg-about bg-cover bg-center isolate before:-z-10 before:absolute before:content-[""] before:inset-0 before:bg-tintBlack'>
        <NavBar />

        <div className='flex flex-col sm:flex-row flex-1 items-center px-4 pb-20'>
          <Image
            src={'/spc_logo.png'}
            alt='Suncoast Pool Cleaning logo and title'
            loading='eager'
            width={160}
            height={0}
            className='m-10'
          />
          
          <div className='mt-10 p-6 space-y-10 bg-tintBlack rounded-3xl'>
            <h2>From the owner :</h2>
            <p>&ensp;{aboutInfo.paragraph1}</p>
            <p>&ensp;{aboutInfo.paragraph2}</p>
            <p>&ensp;{aboutInfo.paragraph3}</p>
          </div>
        </div>
      </section>

      <section className='flex justify-center items-center'>
        <ImageSlider />
      </section>

      <Footer />
    </main>
  )
}
