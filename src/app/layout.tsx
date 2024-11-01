import './globals.css'
import type { Metadata } from 'next'
import { Inter, Pixelify_Sans, Roboto_Mono, DM_Sans } from 'next/font/google'
import { Navigation } from './_Components/Navigation/Navigation'
import ReactQueryProvider from './Providers/ReactQueryProvider'
import { ProjectPreviewOutPortal } from './_Components/WorkSection/ProjectPreviewOutPortal'
import { cn } from '@/lib/utils'
import { SpeedInsights } from "@vercel/speed-insights/next"


const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})
const pixelify = Pixelify_Sans({
  subsets: ['latin'],
  variable: '--font-pixelify-sans',
})
const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
})
const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://samuelbaran.dev'),
  title: 'Samuel Baran | React & Next.js Developer | Vývojár',
  description: 'Experienced React developer crafting modern web applications with Next.js, TypeScript and best practices. Skúsený React vývojár vytvárajúci moderné webové aplikácie s Next.js, TypeScript a najlepšími postupmi.',
  keywords: ['React Developer', 'Next.js', 'Frontend Development', 'Web Developer', 'TypeScript', 'JavaScript', 'Portfolio', 'Vývojár', 'Webový vývojár', 'React vývojár'],
  authors: [{ name: 'Samuel Baran' }],
  creator: 'Samuel Baran',
  openGraph: {
    title: 'Samuel Baran | React & Next.js Developer | Vývojár',
    description: 'Experienced React developer crafting modern web applications with Next.js, TypeScript and best practices. Skúsený React vývojár.',
    type: 'website',
    locale: 'sk_SK',
    alternateLocale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Samuel Baran | React & Next.js Developer | Vývojár',
    description: 'Experienced React developer crafting modern web applications with Next.js, TypeScript and best practices. Skúsený React vývojár.',
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
  alternates: {
    languages: {
      'en-US': '/en',
      'sk-SK': '/sk'
    }
  }
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en" className={cn(inter.variable, pixelify.variable, robotoMono.variable)}>
  
      <head>
        <link rel="icon" href="/samuel.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/samuel.svg" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </head>
  
      <body className={cn(inter.variable, pixelify.variable, dmSans.variable, robotoMono.variable)}>
        <ProjectPreviewOutPortal />
      <Navigation />
        <ReactQueryProvider>
          {children}
        <SpeedInsights />
          </ReactQueryProvider>
        <footer className='bg-stone-950 min-h-[17vh]  border-t-[1px] border-stone-700 flex items-center justify-center'>
        <span className='text-stone-300'>Designed and Developed by Samuel Baran </span>
        </footer>
        </body>
    </html>
  )
}
