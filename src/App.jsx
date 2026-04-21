import { useLenis } from './hooks/useLenis'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Propositions from './components/sections/Propositions'
import Histoire from './components/sections/Histoire'
import Menu from './components/sections/Menu'
import Contact from './components/sections/Contact'

/**
 * Root application component.
 * Initialises Lenis smooth-scroll and composes the full single-page layout.
 */
function App() {
  useLenis()

  return (
    <div className="relative" style={{ backgroundColor: '#FFFAF1', color: '#043e91' }}>
      <Header />

      <main>
        <Hero />
        <Histoire />
        <Propositions />
        <Menu />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App

