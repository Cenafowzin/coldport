import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Divider from './components/Divider'
import Features from './components/Features'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Navbar />
      <Hero />
      <Divider />
      <Projects />
      <Divider />
      <Features />
      <Divider />
      <CTA />
      <Divider />
      <Footer />
    </div>
  )
}
