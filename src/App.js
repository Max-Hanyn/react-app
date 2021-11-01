import './App.css';
import React from "react";
import NavBar from "./components/navBar/navBar";
import Dialogs from "./components/dialogs/dialogs";
import {Route, withRouter} from "react-router-dom";
import UsersContainer from "./components/users/usersContainer";
import ProfileContainer from "./components/profile/profileContainer";
import HeaderComponent from "./components/header/headerContainer";
import Login from "./components/login/login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initialedSuccessTC} from "./redux/app-reducer";


class App extends React.Component {

    componentDidMount() {
        this.props.initialedSuccessTC();
    }

    render() {

        if (!this.props.initialized) {
            return <div> waiting </div>
        }
        return (

            <div className="grid">
                <HeaderComponent/>
                <NavBar/>

                <div className='content'>
                    <Route
                        path='/dialogs'
                        render={() => <Dialogs/>}
                    />

                    <Route
                        path='/profile/:userId?'
                        render={() => <ProfileContainer/>}
                    />
                    <Route
                        path='/users'
                        render={() => <UsersContainer/>}
                    />
                    <Route
                        path='/login'
                        render={() => <Login/>}
                    />
                </div>

            </div>

        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initializedInfo,
})

export default compose(
    withRouter,
    connect(mapStateToProps, {
            initialedSuccessTC
        }
    )
)(App)
