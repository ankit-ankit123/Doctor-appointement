import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../store/authReducer'
import { Navigate } from 'react-router-dom'

export default function LoginPage() {
  const dispatch = useDispatch()
  const { user, loading, error } = useSelector((state) => state.auth)
  const [credentials, setCredentials] = useState({ email: '', password: '' })

  if (user) {
    return <Navigate to="/profile" replace />
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(loginUser(credentials))
  }

  return (
    <div className="mx-auto max-w-md rounded-3xl bg-white p-8 shadow-soft border border-slate-200">
      <h1 className="text-3xl font-semibold text-slate-900">Login</h1>
      <p className="mt-2 text-slate-600">Access your doctor appointment dashboard.</p>
      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <label className="block text-sm text-slate-700">
          Email Address
          <input
            required
            type="email"
            value={credentials.email}
            onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
            className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-primary focus:outline-none"
          />
        </label>
        <label className="block text-sm text-slate-700">
          Password
          <input
            required
            type="password"
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-primary focus:outline-none"
          />
        </label>
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-full bg-primary px-6 py-4 text-sm font-semibold text-white shadow-sm hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? 'Signing in...' : 'Login'}
        </button>
        {error && <p className="rounded-3xl bg-rose-50 px-4 py-3 text-sm text-rose-700">{error}</p>}
      </form>
    </div>
  )
}
