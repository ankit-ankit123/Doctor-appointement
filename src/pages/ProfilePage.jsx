import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function ProfilePage() {
  const { user } = useSelector((state) => state.auth)
  return (
    <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
      <aside className="rounded-3xl bg-white p-6 shadow-soft border border-slate-200">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 text-4xl font-semibold text-primary">
            {user?.name?.[0] || 'P'}
          </div>
          <div>
            <h2 className="text-xl font-semibold text-slate-900">{user?.name || 'Patient'}</h2>
            <p className="text-sm text-slate-500">Patient</p>
          </div>
        </div>
        <div className="mt-8 space-y-4">
          <Link to="/book" className="block rounded-3xl bg-slate-50 px-4 py-3 text-center font-semibold text-primary hover:bg-primary/5">
            Book Appointment
          </Link>
          <Link to="/appointments" className="block rounded-3xl bg-slate-50 px-4 py-3 text-center font-semibold text-primary hover:bg-primary/5">
            My Appointments
          </Link>
          <Link to="/" className="block rounded-3xl bg-slate-50 px-4 py-3 text-center font-semibold text-primary hover:bg-primary/5">
            Services
          </Link>
        </div>
      </aside>

      <section className="rounded-3xl bg-white p-6 shadow-soft border border-slate-200">
        <h1 className="text-3xl font-semibold text-slate-900">My Profile</h1>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl bg-slate-50 p-5">
            <p className="text-sm text-slate-500">Full Name</p>
            <p className="mt-2 font-medium text-slate-900">{user?.name || 'John Doe'}</p>
          </div>
          <div className="rounded-3xl bg-slate-50 p-5">
            <p className="text-sm text-slate-500">Email</p>
            <p className="mt-2 font-medium text-slate-900">{user?.email || 'john@example.com'}</p>
          </div>
          <div className="rounded-3xl bg-slate-50 p-5">
            <p className="text-sm text-slate-500">Phone</p>
            <p className="mt-2 font-medium text-slate-900">{user?.phone || '+91 98765 43210'}</p>
          </div>
          <div className="rounded-3xl bg-slate-50 p-5">
            <p className="text-sm text-slate-500">Status</p>
            <p className="mt-2 font-medium text-primary">Active Patient</p>
          </div>
        </div>
      </section>
    </div>
  )
}
