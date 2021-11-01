import {applyMiddleware, combineReducers, createStore} from "redux";
import userReducer from "./user-reducer";
import profileReducer from "./profile-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import appReducer from "./app-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    usersPage: userReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
});
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;