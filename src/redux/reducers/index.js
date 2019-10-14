import { combineReducers, createStore } from 'redux'

import todos from "./todos"
import visibilityFilter from "./visibilityFilter"

const reducer = combineReducers({ visibilityFilter, todos })
const store = createStore(reducer)