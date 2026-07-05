import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { thunk } from 'redux-thunk'
import authReducer from './authReducer'
import appointmentReducer from './appointmentReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  appointments: appointmentReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export default store
