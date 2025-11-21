import { Coffee, Milk, Sparkles } from 'lucide-react'

const items = [
  { icon: Coffee, name: 'Espresso Shot', desc: 'Rich and bold, pulled to perfection', price: 3.0, tag: 'Classic' },
  { icon: Milk, name: 'Whey Latte', desc: 'Creamy whey protein with smooth espresso', price: 5.5, tag: 'Signature' },
  { icon: Sparkles, name: 'Iced Whey Mocha', desc: 'Chocolate, espresso, chilled energy', price: 6.0, tag: 'Fan favorite' },
]

export default function MenuSection() {
  return (
    <section id="menu" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Menu highlights</h2>
          <p className="mt-2 text-white/70">Small-batch beans. Whey-enhanced blends. Always fresh.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, name, desc, price, tag }) => (
            <div key={name} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:bg-white/10 transition">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20 text-amber-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{name}</p>
                    <p className="text-sm text-white/70">{desc}</p>
                  </div>
                </div>
                <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs text-amber-300">{tag}</span>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <p className="text-white/80">${price.toFixed(2)}</p>
                <a href="#payments" className="text-amber-300 hover:text-amber-200">Order</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    </section>
  )
}
