import { applyMiddleware, combineReducers, legacy_createStore } from "redux"
import thunk from 'redux-thunk'
import {reducer as Authreducer} from './Authreducer/reducer'
const rootreducer=combineReducers({
Authreducer
})


const store=legacy_createStore(rootreducer,applyMiddleware(thunk))

export {store}