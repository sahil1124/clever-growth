import DetailReducer from './reducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    detail: DetailReducer,
})

export default rootReducer