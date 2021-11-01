import React from "react";
import classes from './navBar.module.css';
import {NavLink} from "react-router-dom";
const NavBar = () => {

    return (

        <div className={classes.sidebar}>
            <div className={classes.item}>
                <NavLink to='/profile' activeClassName={classes.active}>Profile</NavLink>

            </div>
            <div className={classes.item}>
                <NavLink to='/dialogs' activeClassName={classes.active}> Dialogs</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/users' activeClassName={classes.active}> Users</NavLink>
            </div>
        </div>
    );
}

export default NavBar;