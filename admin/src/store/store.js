import { applyMiddleware, combineReducers, legacy_createStore } from "redux"
import {reducer as Authreducer} from "./Authreducer/reducer" 
import {reducer as Appreducer} from "./Appreducer/reducer" 
import {isOpen} from "./isOpen/isOpen.Reducer"
import thunk from 'redux-thunk'

const rootReducer=combineReducers({Authreducer,isOpen,Appreducer})

export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))