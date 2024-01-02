import type { Metadata } from 'next'
import { Providers } from 'providers'
import { Analytics } from '@vercel/analytics/react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { manrope } from '@utils/fonts'
import './globals.css'

library.add(fas, fab)


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
        <Providers>
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  )
}
