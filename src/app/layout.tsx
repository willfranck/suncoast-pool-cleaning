import type { Metadata } from 'next'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { Manrope } from 'next/font/google'
import './globals.css'

library.add(fas, fab)

const manrope = Manrope({ 
  subsets: ['latin'],
  weight: ['400', '600'] 
})


export const metadata: Metadata = {
  title: 'Suncoast Pool Cleaning',
  description: 'Transform your swimming pool into a crystal clear oasis with our expert pool cleaning service. Weekly maintenance, chemical balancing, and algae removal in the St Petersburg area',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true} 
        className={manrope.className}
      >
        {children}
      </body>
    </html>
  )
}
