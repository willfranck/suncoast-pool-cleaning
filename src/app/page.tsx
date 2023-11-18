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

        <div className='flex flex-1 items-center px-4 pb-20'>
          <Image 
            src={'/spc_logo_full.png'}
            alt='Suncoast Pool Cleaning logo and title'
            loading='eager'
            width={854}
            height={0}
          />
        </div>
      </section>

      <section className='flex flex-col items-center w-5/6'>
        <Services />
      </section>

      <section className='flex flex-col items-center w-full'>
        <QuoteForm />
      </section>

      <Footer />
    </main>
  )
}
