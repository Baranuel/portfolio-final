import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navigation } from './_Components/Navigation/Navigation'
import ReactQueryProvider from './Providers/ReactQueryProvider'
import { ProjectPreviewOutPortal } from './_Components/WorkSection/ProjectPreviewOutPortal'
import { Analytics } from '@vercel/analytics/react';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Samuel Baran',
  description: 'Web Developer specializing in React and Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
  
      <body className={inter.className}>
        <ProjectPreviewOutPortal />
      <Navigation />
        <ReactQueryProvider>{children}</ReactQueryProvider>
        <footer className='bg-stone-950 min-h-[17vh]  border-t-[1px] border-stone-700 flex items-center justify-center'>
        <span className='text-stone-300'>Designed and Developed by Samuel Baran </span>
        </footer>
        <Analytics />
        </body>
    </html>
  )
}
