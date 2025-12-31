'use client'

import dynamic from 'next/dynamic'

const Header = dynamic(() => import('@/components/Header'), { ssr: false })
const Hero = dynamic(() => import('@/components/Hero'), { ssr: false })
const About = dynamic(() => import('@/components/About'), { ssr: false })
const Projects = dynamic(() => import('@/components/Projects'), { ssr: false })
const Skills = dynamic(() => import('@/components/Skills'), { ssr: false })
const Contact = dynamic(() => import('@/components/Contact'), { ssr: false })
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false })

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}
