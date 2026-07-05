import { Link } from 'react-router-dom'

export default function DashboardPage() {
  return (
    <section className="space-y-8">
      <div className="rounded-[2rem] bg-gradient-to-r from-primary via-secondary to-pink-500 px-8 py-10 text-white shadow-soft">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-semibold sm:text-5xl">Your Doctor Appointment Hub</h1>
            <p className="mt-4 max-w-xl text-lg text-white/90">
              Book appointments, track visits, and manage your patient profile with one easy-to-use dashboard.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/book"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-lg shadow-white/20 transition hover:bg-slate-100"
              >
                Book Appointment
              </Link>
              <Link
                to="/appointments"
                className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                View My Appointments
              </Link>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[2rem] bg-white/10 p-6"> 
              <p className="text-sm uppercase tracking-[0.3em] text-white/70">Upcoming</p>
              <p className="mt-4 text-3xl font-semibold">2 Appointments</p>
            </div>
            <div className="rounded-[2rem] bg-white/10 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-white/70">Next visit</p>
              <p className="mt-4 text-3xl font-semibold">11 Sept 2024</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
        <aside className="rounded-3xl bg-white p-6 shadow-soft border border-slate-200">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-slate-900">Patient Details</h2>
            <p className="text-sm text-slate-500">View your profile and appointment actions.</p>
          </div>
          <ul className="space-y-3 text-sm text-slate-600">
            <li className="rounded-2xl bg-slate-50 p-4">Name: John Doe</li>
            <li className="rounded-2xl bg-slate-50 p-4">Email: john@example.com</li>
            <li className="rounded-2xl bg-slate-50 p-4">Phone: +91 98765 43210</li>
            <li className="rounded-2xl bg-slate-50 p-4">Patient ID: P-1001</li>
          </ul>
          <Link
            to="/book"
            className="mt-6 inline-flex w-full justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-secondary"
          >
            Book New Appointment
          </Link>
        </aside>
        <div className="space-y-8">
          <div className="rounded-3xl bg-white p-6 shadow-soft border border-slate-200">
            <h2 className="text-2xl font-semibold text-slate-900">Welcome to DrCareHub</h2>
            <p className="mt-3 text-slate-600">
              Your personalized doctor appointment dashboard. Manage your profile, book appointments, and track your visits in one place.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {['Regular healthcare package', 'CT-SCAN | X-RAY', 'Lab Test', 'gynae health', 'Ayurveda Treatment', 'Dental Checkup'].map((service) => (
              <div key={service} className="rounded-3xl bg-slate-50 p-6 text-center shadow-soft border border-slate-200">
                <p className="text-base font-medium text-slate-900">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
