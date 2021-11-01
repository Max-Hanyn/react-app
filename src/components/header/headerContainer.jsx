import React from "react";
import Header from "./header";
import {connect} from "react-redux";
import {getAuthUserTC, logoutTC} from "../../redux/auth-reducer";

class HeaderComponent extends React.Component {

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,

})

const mapDispatchToProps = {
    logout: logoutTC,
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);