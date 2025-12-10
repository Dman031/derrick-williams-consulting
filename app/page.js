import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import AnimatedStats from '@/components/AnimatedStats'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Chatbot from '@/components/Chatbot'
import LoadingScreen from '@/components/LoadingScreen'

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main className="relative">
        <section id="hero">
          <Hero />
        </section>
        <AnimatedStats />
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Chatbot />
    </>
  )
}