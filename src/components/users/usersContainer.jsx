import React from "react";
import {connect} from "react-redux";
import {
    followingInProgressAC,
    followTC,
    getUsersThunkCreator,
    setCurrentPageAC,
    unFollowTC
} from "../../redux/user-reducer";
import Users from "./usersС";

class UsersAPIContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);

        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);

    }

    render() {
        return <Users currentPage={this.props.currentPage}
                      totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      onPageChanged={this.onPageChanged}
                      users={this.props.users}
                      follow={this.props.follow}
                      unFollow={this.props.unFollow}
                      followingInProgress={this.props.followingInProgress}
        />
    }
}


let mapStateToProps = (state) => {

    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followTC(userId));
        },
        unFollow: (userId) => {
            dispatch(unFollowTC(userId));
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage));
        },
        getUsersThunkCreator: (currentPage, pageSize) => {
            dispatch(getUsersThunkCreator(currentPage, pageSize))
        }

    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer);

export default UsersContainer;