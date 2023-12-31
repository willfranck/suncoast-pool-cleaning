import Link from 'next/link'
import Image from 'next/image'
import NavBar from '@components/navBar'
import Banner from '@components/banner'
import Services from '@components/services'
import QuoteForm from '@components/quoteForm'
import Footer from '@components/footer'


export default function Home() {
  return (
    <main className='flex flex-col items-center'>
      <section className='relative flex flex-col items-center w-full min-h-hero bg-hero bg-cover bg-center isolate before:absolute before:inset-0 before:-z-10 before:bg-tintBlack'>
        <NavBar />

        <div className='flex flex-1 items-center px-4 md:px-20 pt-10 pb-32'>
          <Link 
            href={'tel:+17272665144'}
            aria-label='Suncoast Pool Cleaning. Call us for a quote or with questions'
          >
            <Image 
              src={'/spc_logo_full.webp'}
              alt='Suncoast Pool Cleaning logo and title'
              loading='eager'
              width={1280}
              height={0}
            />
          </Link>
        </div>
      </section>

      <section className='flex flex-col items-center w-full bg-[#016A70]'>
        <Services />
      </section>
      
      <section className='w-full'>
        <Banner />
      </section>

      <section className='relative flex flex-col items-center w-full bg-form bg-center bg-cover overflow-hidden isolate before:absolute before:inset-0 before:-z-10 before:bg-tintBlack'>
        <QuoteForm />
      </section>

      <Footer />
    </main>
  )
}
