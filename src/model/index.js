import {combineReducers} from "redux"
import client from "./reducers/client"
import auth from "./reducers/auth"

export default combineReducers({
    client,auth
})