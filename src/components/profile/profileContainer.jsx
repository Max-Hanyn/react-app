import React from "react";
import Profile from "./profile";
import {connect} from "react-redux";
import {getStatusTC, getUserProfileTC, updateStatusTC} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/authRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.userId;
        }
        this.props.getUserProfileTC(userId);
        this.props.getUserStatus(userId);

    }

    render() {
        return (
            <Profile {...this.props} status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userId: state.auth.userId,
})
let dispatchMethods = {
    getUserProfileTC,
    getUserStatus: getStatusTC,
    updateStatus: updateStatusTC,
}

export default compose(
    connect(mapStateToProps, dispatchMethods),
    withAuthRedirect,
    withRouter,
)(ProfileContainer)