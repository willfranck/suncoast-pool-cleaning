import Link from 'next/link'
import Image from 'next/image'
import NavBar from '@components/navBar'
import Services from '@components/services'
import QuoteForm from '@components/quoteForm'
import Footer from '@components/footer'


export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen">
      <section className='relative flex flex-col items-center w-full min-h-hero bg-hero bg-cover bg-center isolate before:-z-10 before:absolute before:content-[""] before:inset-0 before:bg-tintBlack'>
        <NavBar />

        <div className='flex flex-1 items-center px-4 md:px-20 pt-10 pb-32'>
          <Link 
            href={'tel:+17272665144'}
          >
            <Image 
              src={'/spc_logo_full.png'}
              alt='Suncoast Pool Cleaning logo and title'
              loading='eager'
              width={1280}
              height={0}
            />
          </Link>
        </div>
      </section>

      <section className='w-full flex flex-col items-center bg-[#016A70]'>
        <Services />
      </section>

      <section className='relative flex flex-col items-center w-full bg-form bg-center bg-cover isolate before:-z-10 before:absolute before:content-[""] before:inset-0 before:bg-tintBlack overflow-hidden'>
        <QuoteForm />
      </section>

      <Footer />
    </main>
  )
}
