import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Projects from '@/components/sections/Projects'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'
import ScrollProgress from '@/components/motion/ScrollProgress'
import { getAllStats } from '@/lib/posthog'

export default async function Home() {
  const stats = await getAllStats()

  return (
    <>
      <ScrollProgress />
      <Nav />
      <main className="flex-1">
        <Hero />
        <Projects stats={stats} />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
