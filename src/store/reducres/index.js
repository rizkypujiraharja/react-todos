import { combineReducers } from "redux"
import todoReducer from "./todo"

const rootReducer = combineReducers({
    lists: todoReducer
})

export default rootReducer