import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from './store/authReducer'
import DashboardPage from './pages/DashboardPage'
import BookAppointmentPage from './pages/BookAppointmentPage'
import MyAppointmentsPage from './pages/MyAppointmentsPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import ProfilePage from './pages/ProfilePage'
import ServicesPage from './pages/ServicesPage'

function App() {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const handleLogout = () => {
    dispatch(authActions.logout())
  }

  return (
    <Router>
      <div className="min-h-screen bg-surface text-slate-900">
        <header className="sticky top-0 z-20 bg-white/90 backdrop-blur shadow-sm border-b border-slate-200">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6">
            <div>
              <Link to="/" className="text-xl font-semibold text-primary">
                DrCareHub
              </Link>
              <p className="text-sm text-slate-500">Patient Appointment System</p>
            </div>
            <nav className="flex flex-wrap items-center gap-3 text-sm font-medium text-slate-700">
              <Link className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 hover:bg-primary hover:text-white" to="/services">
                Services
              </Link>
              <Link className="rounded-full border border-slate-200 bg-primary px-4 py-2 text-white hover:bg-secondary" to="/book">
                Book an Appointment
              </Link>
              <Link className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 hover:bg-primary hover:text-white" to="/appointments">
                My Appointments
              </Link>
              {user ? (
                <>
                  <Link className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 hover:bg-primary hover:text-white" to="/profile">
                    {user.name}
                  </Link>
                  <button onClick={handleLogout} className="rounded-full border border-rose-200 bg-rose-50 px-4 py-2 text-rose-700 hover:bg-rose-100">
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 hover:bg-primary hover:text-white" to="/login">
                    Login
                  </Link>
                  <Link className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 hover:bg-primary hover:text-white" to="/signup">
                    Signup
                  </Link>
                </>
              )}
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/book" element={<BookAppointmentPage />} />
            <Route path="/appointments" element={<MyAppointmentsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/services" element={<ServicesPage />} />
          </Routes>
        </main>

        <footer className="border-t border-slate-200 bg-white py-6">
          <div className="mx-auto max-w-7xl px-4 text-sm text-slate-500 sm:px-6">
            Built with React, Redux, Tailwind CSS and Node/Express.
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App
