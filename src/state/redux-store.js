import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import authReducer  from "./authReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage : dialogsReducer,
    usersPage:usersReducer,
    authMe:authReducer 
})
let store = createStore(reducers)


export default store
