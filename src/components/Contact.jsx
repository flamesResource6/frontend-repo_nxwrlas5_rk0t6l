import { Mail, MapPin, Phone } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Visit us</h2>
            <p className="mt-2 text-white/70">Swing by for a cup or order ahead. We’d love to see you.</p>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-white/80">
                <MapPin className="h-5 w-5 text-amber-300" />
                21 Roast Street, Brewtown
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Phone className="h-5 w-5 text-amber-300" />
                +44 20 1234 5678
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Mail className="h-5 w-5 text-amber-300" />
                hello@wheycoffe.com
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6">
            <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
              <p className="text-sm text-white/60">Opening hours</p>
              <div className="mt-3 grid grid-cols-2 gap-3 text-white/80">
                <p>Mon–Fri</p>
                <p className="text-right">7:00 – 18:00</p>
                <p>Sat</p>
                <p className="text-right">8:00 – 17:00</p>
                <p>Sun</p>
                <p className="text-right">8:00 – 15:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    </section>
  )
}
