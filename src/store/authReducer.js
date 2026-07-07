const storage = typeof window !== 'undefined' ? window.localStorage : null

const savedAuth = storage?.getItem('doctor-appointment-auth')
const initialState = savedAuth
  ? JSON.parse(savedAuth)
  : {
      user: null,
      token: null,
      loading: false,
      error: null,
    }

const saveAuth = (state) => {
  if (storage) {
    storage.setItem('doctor-appointment-auth', JSON.stringify(state))
  }
}

export const authActions = {
  loginSuccess: (user, token) => ({ type: 'LOGIN_SUCCESS', payload: { user, token } }),
  logout: () => ({ type: 'LOGOUT' }),
  setLoading: (loading) => ({ type: 'SET_LOADING', payload: loading }),
  setError: (error) => ({ type: 'SET_ERROR', payload: error }),
}

export const loginUser = (credentials) => async (dispatch) => {
  dispatch(authActions.setLoading(true))
  try {
    const response = await fetch('https://doctor-appointement-pmxz.onrender.com/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    })
    const data = await response.json()
    if (!response.ok) {
      throw new Error(data.message || 'Login failed')
    }
    dispatch(authActions.loginSuccess(data.user, data.token))
  } catch (error) {
    dispatch(authActions.setError(error.message))
  } finally {
    dispatch(authActions.setLoading(false))
  }
}

export const registerUser = (payload) => async (dispatch) => {
  dispatch(authActions.setLoading(true))
  try {
    const response = await fetch('https://doctor-appointement-pmxz.onrender.com/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    const data = await response.json()
    if (!response.ok) {
      throw new Error(data.message || 'Register failed')
    }
    dispatch(authActions.loginSuccess(data.user, data.token))
  } catch (error) {
    dispatch(authActions.setError(error.message))
  } finally {
    dispatch(authActions.setLoading(false))
  }
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS': {
      const nextState = { ...state, user: action.payload.user, token: action.payload.token, error: null }
      saveAuth(nextState)
      return nextState
    }
    case 'LOGOUT': {
      if (storage) storage.removeItem('doctor-appointment-auth')
      return { user: null, token: null, loading: false, error: null }
    }
    case 'SET_LOADING':
      return { ...state, loading: action.payload }
    case 'SET_ERROR':
      return { ...state, error: action.payload }
    default:
      return state
  }
}
