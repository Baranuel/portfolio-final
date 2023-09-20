'use client'
import Image from 'next/image'
import { Hero } from './_Components/HeroSection/Hero'
import { IntroSign } from './_Components/Intro-Sign/IntroSign'
import { ToolsSection } from './_Components/ToolsSection/ToolsSection'
import { WorkSection } from './_Components/WorkSection/WorkSection'

export default function Home() {

  const createData = async () => {
    const res = await fetch('/api/create', {method: 'POST'})
    const data = await res.json()
  }


  return (
    <main className="w-full px-52 lg:px-24 md:px-12 sm:px-4 overflow-hidden max-w-[100vw] ">
      <Hero />
      <IntroSign />
      <ToolsSection />
      <WorkSection /> 
    </main>
  )
}
