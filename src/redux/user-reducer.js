import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const FOLLOWING_IN_PROGRESS = "FOLLOWING_IN_PROGRESS";
let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
}

const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:

            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:

            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS: {

            return {...state, users: [...action.users]}

        }
        case SET_CURRENT_PAGE: {

            return {...state, currentPage: action.currentPage}

        }
        case SET_TOTAL_USERS_COUNT: {

            return {...state, totalUsersCount: action.totalUsersCount}

        }
        case FOLLOWING_IN_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId] : state.followingInProgress.filter(id => id !== action.userId)
            }
        }


        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unFollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersAC = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const followingInProgressAC = (isFetching, userId) => ({type: FOLLOWING_IN_PROGRESS, isFetching, userId});

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {

        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setUsersAC(data.items));
            dispatch(setTotalUsersAC(40));

        })
    };
}
export const followTC = (userId) => {
    return (dispatch) => {

        dispatch(followingInProgressAC(true, userId));

        usersAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followAC(userId));
                }
                dispatch(followingInProgressAC(false, userId));

            });
    };
}
export const unFollowTC = (userId) => {
    return (dispatch) => {

        dispatch(followingInProgressAC(true, userId));

        usersAPI.unFollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unFollowAC(userId));
                }
                dispatch(followingInProgressAC(false, userId));

            });
    };
}
export default userReducer;