const initialState = {
  appointments: [],
  loading: false,
  error: null,
}

export const appointmentActions = {
  setAppointments: (appointments) => ({ type: 'SET_APPOINTMENTS', payload: appointments }),
  addAppointment: (appointment) => ({ type: 'ADD_APPOINTMENT', payload: appointment }),
  setLoading: (loading) => ({ type: 'SET_LOADING', payload: loading }),
  setError: (error) => ({ type: 'SET_ERROR', payload: error }),
}

export const fetchAppointments = (token, patientId) => async (dispatch) => {
  dispatch(appointmentActions.setLoading(true))
  try {
    const url = new URL('http://localhost:5000/api/appointments')
    if (patientId) {
      url.searchParams.append('patientId', patientId)
    }
    const response = await fetch(url.toString(), {
      headers: { Authorization: `Bearer ${token}` },
    })
    const data = await response.json()
    if (!response.ok) {
      throw new Error(data.message || 'Could not load appointments')
    }
    dispatch(appointmentActions.setAppointments(data))
    return { data }
  } catch (error) {
    dispatch(appointmentActions.setError(error.message))
    return { error: error.message }
  } finally {
    dispatch(appointmentActions.setLoading(false))
  }
}

export const createAppointment = (token, appointment) => async (dispatch) => {
  dispatch(appointmentActions.setLoading(true))
  try {
    const response = await fetch('http://localhost:5000/api/appointments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify(appointment),
    })
    const data = await response.json()
    if (!response.ok) {
      throw new Error(data.message || 'Could not create appointment')
    }
    dispatch(appointmentActions.addAppointment(data))
    return { data }
  } catch (error) {
    dispatch(appointmentActions.setError(error.message))
    return { error: error.message }
  } finally {
    dispatch(appointmentActions.setLoading(false))
  }
}

export default function appointmentReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_APPOINTMENTS':
      return { ...state, appointments: action.payload, error: null }
    case 'ADD_APPOINTMENT':
      return { ...state, appointments: [...state.appointments, action.payload], error: null }
    case 'SET_LOADING':
      return { ...state, loading: action.payload }
    case 'SET_ERROR':
      return { ...state, error: action.payload }
    default:
      return state
  }
}
