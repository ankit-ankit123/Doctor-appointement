import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createAppointment } from '../store/appointmentReducer'

const departments = ['Cardiologist', 'Dermatologist', 'Gynecologist', 'Pediatrics', 'Orthopedics']

export default function BookAppointmentPage() {
  const dispatch = useDispatch()
  const { token, user } = useSelector((state) => state.auth)
  const [form, setForm] = useState({ date: '', time: '', department: departments[0], comments: '' })
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')
    if (!token || !user) {
      setError('Please login before booking an appointment.')
      return
    }
    const result = await dispatch(createAppointment(token, form))
    if (result?.error) {
      setError(result.error)
    } else {
      setSuccess('Appointment requested successfully!')
      setForm({ date: '', time: '', department: departments[0], comments: '' })
    }
  }

  return (
    <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-soft border border-slate-200">
      <h1 className="text-3xl font-semibold text-slate-900">Book an Appointment</h1>
      <p className="mt-2 text-slate-600">Choose a date, doctor department, and share additional details.</p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="space-y-2 text-sm text-slate-700">
            Select Date
            <input
              required
              type="date"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-primary focus:outline-none"
            />
          </label>
          <label className="space-y-2 text-sm text-slate-700">
            Select Time
            <input
              required
              type="time"
              value={form.time}
              onChange={(e) => setForm({ ...form, time: e.target.value })}
              className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-primary focus:outline-none"
            />
          </label>
        </div>

        <label className="space-y-2 text-sm text-slate-700 block">
          Department
          <select
            value={form.department}
            onChange={(e) => setForm({ ...form, department: e.target.value })}
            className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-primary focus:outline-none"
          >
            {departments.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>

        <div className="grid gap-4 sm:grid-cols-[1fr_auto] items-end">
          <label className="space-y-2 text-sm text-slate-700">
            Comments
            <textarea
              value={form.comments}
              onChange={(e) => setForm({ ...form, comments: e.target.value })}
              placeholder="Explain about the problem."
              rows="5"
              className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-primary focus:outline-none"
            />
          </label>
          <button
            type="button"
            className="inline-flex h-14 w-full items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-4 text-slate-700 hover:border-primary hover:text-primary"
          >
            Upload Reports
          </button>
        </div>

        <button
          type="submit"
          className="inline-flex w-full justify-center rounded-full bg-primary px-6 py-4 text-sm font-semibold text-white shadow-sm hover:bg-secondary"
        >
          Submit
        </button>

        {error && <p className="rounded-3xl bg-rose-50 px-4 py-3 text-sm text-rose-700">{error}</p>}
        {success && <p className="rounded-3xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700">{success}</p>}
      </form>
    </div>
  )
}
