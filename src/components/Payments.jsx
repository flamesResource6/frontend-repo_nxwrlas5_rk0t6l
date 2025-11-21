import { useState } from 'react'
import { CreditCard, ExternalLink, ShieldCheck } from 'lucide-react'

const gateways = [
  {
    name: 'Pay with Visa / MasterCard',
    description: 'Secure checkout handled by Stripe',
    cta: 'Continue to checkout',
    url: 'https://checkout.stripe.com/pay',
  },
  {
    name: 'Direct bank transfer',
    description: 'We’ll redirect you to your banking app/site',
    cta: 'Generate payment details',
    url: '#bank',
  },
]

export default function Payments() {
  const [method, setMethod] = useState('card')

  const handlePay = (g) => {
    if (g.url.startsWith('http')) {
      window.open(g.url, '_blank', 'noopener,noreferrer')
    } else {
      const iban = 'GB29 NWBK 6016 1331 9268 19'
      const ref = 'WHEYCOFFE-' + Math.random().toString(36).slice(2, 8).toUpperCase()
      navigator.clipboard?.writeText(`${ref}`)
      alert(`Use bank transfer:\nIBAN: ${iban}\nReference: ${ref}\nAmount: based on your order.`)
    }
  }

  return (
    <section id="payments" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Order & pay</h2>
            <p className="mt-2 text-white/70">Choose how you’d like to pay. We’ll handle the rest securely.</p>

            <div className="mt-6 space-y-3">
              <label className={`flex cursor-pointer items-center gap-3 rounded-2xl border ${method==='card'?'border-amber-400/40 bg-white/10':'border-white/10 bg-white/5'} p-4`}>
                <input type="radio" name="method" className="hidden" checked={method==='card'} onChange={() => setMethod('card')} />
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20 text-amber-300">
                  <CreditCard className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-white">Card checkout</p>
                  <p className="text-sm text-white/70">Fast, secure payment via Stripe</p>
                </div>
              </label>

              <label className={`flex cursor-pointer items-center gap-3 rounded-2xl border ${method==='bank'?'border-amber-400/40 bg-white/10':'border-white/10 bg-white/5'} p-4`}>
                <input type="radio" name="method" className="hidden" checked={method==='bank'} onChange={() => setMethod('bank')} />
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20 text-amber-300">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-white">Direct bank</p>
                  <p className="text-sm text-white/70">We provide bank details and reference</p>
                </div>
              </label>
            </div>

            <div className="mt-6">
              {gateways.map((g) => (
                <button key={g.name} onClick={() => handlePay(g)} className="group mt-3 inline-flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 text-left hover:bg-white/10">
                  <div>
                    <p className="font-semibold text-white">{g.name}</p>
                    <p className="text-sm text-white/70">{g.description}</p>
                  </div>
                  <ExternalLink className="h-5 w-5 text-white/70 group-hover:text-white" />
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6">
            <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
              <p className="text-sm text-white/60">Quick order</p>
              <form className="mt-4 grid gap-3">
                <input placeholder="Your name" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 focus:outline-none" />
                <input placeholder="Email (receipt)" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 focus:outline-none" />
                <select className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:outline-none">
                  <option className="bg-slate-900">Whey Latte</option>
                  <option className="bg-slate-900">Espresso Shot</option>
                  <option className="bg-slate-900">Iced Whey Mocha</option>
                </select>
                <button type="button" onClick={() => alert('This is a demo. Connect Stripe for live payments.')} className="mt-2 rounded-xl bg-amber-400 px-4 py-3 font-semibold text-slate-900 hover:bg-amber-300">Proceed to payment</button>
              </form>
              <p className="mt-3 text-xs text-white/50">Payments are securely processed. We never store card details.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    </section>
  )
}
