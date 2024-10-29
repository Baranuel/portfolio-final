import './globals.css'
import type { Metadata } from 'next'
import { Inter, Pixelify_Sans } from 'next/font/google'
import { Navigation } from './_Components/Navigation/Navigation'
import ReactQueryProvider from './Providers/ReactQueryProvider'
import { ProjectPreviewOutPortal } from './_Components/WorkSection/ProjectPreviewOutPortal'


const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})
const pixelify = Pixelify_Sans({
  subsets: ['latin'],
  variable: '--font-pixelify-sans',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://samuelbaran.dev'),
  title: 'Samuel Baran | React & Next.js Developer',
  description: 'Experienced React developer crafting modern web applications with Next.js, TypeScript and best practices. View my portfolio of responsive, performant websites and applications.',
  keywords: ['React Developer', 'Next.js', 'Frontend Development', 'Web Developer', 'TypeScript', 'JavaScript', 'Portfolio'],
  authors: [{ name: 'Samuel Baran' }],
  creator: 'Samuel Baran',
  openGraph: {
    title: 'Samuel Baran | React & Next.js Developer',
    description: 'Experienced React developer crafting modern web applications with Next.js, TypeScript and best practices.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Samuel Baran | React & Next.js Developer',
    description: 'Experienced React developer crafting modern web applications with Next.js, TypeScript and best practices.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/samuel.svg',
    shortcut: '/samuel.svg',
    apple: '/apple-icon.png',
  },
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
  
      <head>
        <link rel="icon" href="/samuel.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/samuel.svg" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </head>
  
      <body className={`${inter.variable} ${pixelify.variable}`}>
        <ProjectPreviewOutPortal />
      <Navigation />
        <ReactQueryProvider>{children}</ReactQueryProvider>
        <footer className='bg-stone-950 min-h-[17vh]  border-t-[1px] border-stone-700 flex items-center justify-center'>
        <span className='text-stone-300'>Designed and Developed by Samuel Baran </span>
        </footer>
        </body>
    </html>
  )
}
