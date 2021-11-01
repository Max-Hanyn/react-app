import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,

}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
            }
        }

        default:
            return state;
    }
}


export let setUserData = (userId, email, login, isAuth) => {
    return {type: SET_USER_DATA, data: {userId, email, login, isAuth}}
}
export const getAuthUserTC = () => (dispatch) => {
    return authAPI.authMe()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(setUserData(id, email, login, true));
            }
        });
}

export const loginUserTC = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserTC());
        }
    })
}

export const logoutTC = () => (dispatch) => {
    authAPI.logout().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setUserData(null, null, null, false));
        }
    })
}


export default authReducer;