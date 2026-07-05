import { useState } from 'react'
import { services, faqs } from '../services/serviceData'

export default function ServicesPage() {
  const [activeIndex, setActiveIndex] = useState(null)

  return (
    <div className="space-y-8">
      <section className="rounded-3xl bg-white p-8 shadow-soft border border-slate-200">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-slate-900">Hospital Services</h1>
            <p className="mt-2 text-slate-600">Explore the healthcare services available for patients and families.</p>
          </div>
          <div className="rounded-full bg-primary/10 px-5 py-3 text-sm font-semibold text-primary">Best care for every patient</div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <article key={service.id} className="rounded-3xl bg-slate-50 p-6 shadow-soft border border-slate-200 transition hover:-translate-y-1 hover:shadow-lg">
            <h2 className="text-xl font-semibold text-slate-900">{service.title}</h2>
            <p className="mt-3 text-slate-600">{service.description}</p>
          </article>
        ))}
      </section>

      <section className="rounded-3xl bg-white p-8 shadow-soft border border-slate-200">
        <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
        <div className="mt-6 space-y-4">
          {faqs.map((item, index) => (
            <button
              key={item.question}
              type="button"
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-6 py-5 text-left shadow-sm transition hover:border-primary"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="font-medium text-slate-900">{item.question}</span>
                <span className="text-slate-500">{activeIndex === index ? '−' : '+'}</span>
              </div>
              {activeIndex === index && <p className="mt-4 text-slate-600">{item.answer}</p>}
            </button>
          ))}
        </div>
      </section>
    </div>
  )
}
