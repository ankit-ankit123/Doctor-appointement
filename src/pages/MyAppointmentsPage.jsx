import { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAppointments } from '../store/appointmentReducer'

const years = ['2024', '2025', '2026']

export default function MyAppointmentsPage() {
  const dispatch = useDispatch()
  const { appointments, loading } = useSelector((state) => state.appointments)
  const { token } = useSelector((state) => state.auth)
  const [year, setYear] = useState(years[0])

  useEffect(() => {
    if (token) {
      dispatch(fetchAppointments(token))
    }
  }, [dispatch, token])

  const filtered = useMemo(
    () => appointments.filter((item) => item.date?.startsWith(year)),
    [appointments, year],
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 rounded-3xl bg-white p-6 shadow-soft border border-slate-200 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">My Appointments</h1>
          <p className="text-sm text-slate-600">Review your booked appointments and join your next consultation.</p>
        </div>
        <select
          className="max-w-xs rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 focus:border-primary focus:outline-none"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        >
          {years.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      {loading && <div className="rounded-3xl bg-slate-50 p-6 text-slate-700">Loading appointments...</div>}
      {!loading && !token && (
        <div className="rounded-3xl bg-amber-50 p-6 text-amber-700">Login to view your appointments.</div>
      )}
      {!loading && token && filtered.length === 0 && (
        <div className="rounded-3xl bg-slate-50 p-6 text-slate-700">No appointments found for {year}.</div>
      )}

      {token && (
        <div className="grid gap-6 xl:grid-cols-2">
          {filtered.map((appointment) => (
            <article key={appointment.id} className="rounded-3xl bg-white p-6 shadow-soft border border-slate-200">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-slate-500">{appointment.department}</p>
                  <h2 className="mt-3 text-xl font-semibold text-slate-900">{appointment.date}</h2>
                  <p className="mt-1 text-sm text-slate-500">{appointment.time}</p>
                </div>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">Booked</span>
              </div>
              <p className="mt-4 text-slate-600">{appointment.comments || 'No additional comments'}</p>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}
