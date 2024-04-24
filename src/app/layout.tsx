import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { Header } from '@/components/header'
import { Provider } from '@/components/providers'

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  preload: true,
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME || "Grun's AI",
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='scroll-smooth' suppressHydrationWarning>
      <body className={cn('font-sans md:mx-16 xl:mx-[25%]', poppins.variable)}>
        <Provider.Theme attribute='class' enableSystem defaultTheme='system'>
          <Provider.Name>
            <Header />
            {children}
          </Provider.Name>
        </Provider.Theme>
      </body>
    </html>
  )
}
