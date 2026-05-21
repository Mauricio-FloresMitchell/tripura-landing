import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

function App() {
  return (
    <main className="bg-white text-slate-900 overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}

export default App