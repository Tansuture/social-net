import { applyMiddleware, combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import authReducer  from "./authReducer";
import usersReducer from "./usersReducer";
import thunk from "redux-thunk";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage : dialogsReducer,
    usersPage:usersReducer,
    authMe:authReducer 
})
let store = createStore(reducers,applyMiddleware(thunk))


export default store
