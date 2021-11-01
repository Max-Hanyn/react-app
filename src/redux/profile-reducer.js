import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';


let initialState = {

    posts: [
        {id: 1, message: 'Hi1', likesCount: 1},
        {id: 2, message: 'Hi2', likesCount: 3},
        {id: 3, message: 'Hi3', likesCount: 5}
    ],
    newPostText: 'test',
    profile: null,
    status: '',

}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.newPostText;
            return stateCopy;
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        default:
            return state;
    }
}

export let addPostAC = () => {
    return {
        type: ADD_POST
    }
}
export let updateNewPostTextAC = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newPostText: text}
}

export let setUserProfile = (profile) => {
    return {type: SET_USER_PROFILE, profile: profile}
}
export let setStatus = (status) => {
    return {type: SET_STATUS, status: status}
}

export const getUserProfileTC = (userId) => (dispatch) => {

    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));

        });
}

export const getStatusTC = (userId) => (dispatch) => {

    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data));

        });
}
export const updateStatusTC = (status) => (dispatch) => {

    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0){
                dispatch(setStatus(status));
            }


        });
}

export default profileReducer;