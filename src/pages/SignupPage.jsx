import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../store/authReducer'
import { Navigate } from 'react-router-dom'

export default function SignupPage() {
  const dispatch = useDispatch()
  const { user, loading, error } = useSelector((state) => state.auth)
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '' })

  if (user) {
    return <Navigate to="/profile" replace />
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(registerUser(form))
  }

  return (
    <div className="mx-auto max-w-md rounded-3xl bg-white p-8 shadow-soft border border-slate-200">
      <h1 className="text-3xl font-semibold text-slate-900">Signup</h1>
      <p className="mt-2 text-slate-600">Create a new patient account to manage appointments.</p>
      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <label className="block text-sm text-slate-700">
          Full Name
          <input
            required
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-primary focus:outline-none"
          />
        </label>
        <label className="block text-sm text-slate-700">
          Email Address
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-primary focus:outline-none"
          />
        </label>
        <label className="block text-sm text-slate-700">
          Phone Number
          <input
            required
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-primary focus:outline-none"
          />
        </label>
        <label className="block text-sm text-slate-700">
          Password
          <input
            required
            type="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-primary focus:outline-none"
          />
        </label>
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-full bg-primary px-6 py-4 text-sm font-semibold text-white shadow-sm hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? 'Creating account...' : 'Signup'}
        </button>
        {error && <p className="rounded-3xl bg-rose-50 px-4 py-3 text-sm text-rose-700">{error}</p>}
      </form>
    </div>
  )
}
