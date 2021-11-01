import React from "react";
import classes from './header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {

    return (
        <div className={classes.header}>
            Header
            <div className={classes.loginBlock}>
                {
                    props.isAuth ? <div> {props.login} - <button onClick={props.logout}>Logout</button></div> : <NavLink to={'/login'}>Login</NavLink>
                }

            </div>
        </div>
    );
}

export default Header;