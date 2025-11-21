import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MenuSection from './components/MenuSection'
import Payments from './components/Payments'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <main>
        <MenuSection />
        <Payments />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-white/60">
          © {new Date().getFullYear()} Whey Coffe. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
