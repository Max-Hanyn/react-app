import {getAuthUserTC} from "./auth-reducer";

const SET_INITIALIZED = 'SET_INITIALIZED';


let initialState = {
    initializedInfo: false,

}

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_INITIALIZED: {
            return {
                ...state,
                initializedInfo: true,

            }
        }

        default:
            return state;
    }
}


export let initialedSuccess = () => {
    return {type: SET_INITIALIZED}
}
export let initialedSuccessTC = () => (dispatch) => {
    let promise = dispatch(getAuthUserTC());
    promise.then( () => {
        dispatch(initialedSuccess())
    }
    );
}


export default appReducer;