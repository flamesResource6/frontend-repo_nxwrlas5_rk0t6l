import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
              Freshly brewed daily
            </div>
            <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
              Whey Coffe
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-white/80">
              Honest coffee, crafted with care. From creamy whey-infused lattes to bold espressos, we blend flavor and feel-good energy for your day.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#menu" className="inline-flex items-center gap-2 rounded-xl bg-white/90 text-slate-900 px-5 py-3 font-semibold shadow hover:bg-white">
                Explore menu
              </a>
              <a href="#payments" className="inline-flex items-center gap-2 rounded-xl bg-amber-400 text-slate-900 px-5 py-3 font-semibold shadow hover:bg-amber-300">
                Order & pay
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/30 to-transparent"></div>
    </section>
  )
}
