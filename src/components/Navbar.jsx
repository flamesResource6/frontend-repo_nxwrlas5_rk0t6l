import { useState } from 'react'
import { Menu, X, Coffee } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Menu', href: '#menu' },
    { label: 'Payments', href: '#payments' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl p-3">
          <a href="#home" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20 text-amber-300">
              <Coffee className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <p className="text-sm text-amber-200">Whey Coffe</p>
              <p className="text-xs text-white/70">Small batch • Big flavor</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-white/80 hover:text-white transition">
                {item.label}
              </a>
            ))}
            <a href="#payments" className="inline-flex items-center gap-2 rounded-xl bg-amber-400 text-slate-900 px-4 py-2 font-semibold shadow hover:bg-amber-300 transition">
              Order now
            </a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 text-white/90">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mt-2 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl p-3">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-2 text-white/90 hover:bg-white/10">
                  {item.label}
                </a>
              ))}
              <a href="#payments" onClick={() => setOpen(false)} className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-400 text-slate-900 px-4 py-2 font-semibold shadow hover:bg-amber-300 transition">
                Order now
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
