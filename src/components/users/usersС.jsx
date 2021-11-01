import React from "react";
import classes from "./users.module.css"
import userPhoto from "../../assets/images/75-756814_login-user-imagen-user-png-clipart.png"
import {NavLink} from "react-router-dom";


export let Users = (props) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    return (
        <div>

            Users
            <div>{pages.map(page => {
                return <span className={props.currentPage === page && classes.selectedPageActive}
                             onClick={() => {
                                 props.onPageChanged(page)
                             }}>{page}</span>
            })}</div>
            {
                props.users.map(user => <div key={user.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + user.id}>
                                <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="photo"
                                     className={classes.photo}/>
                            </NavLink>

                            <div>
                                {
                                    user.followed
                                        ? <button disabled={props.followingInProgress.some(id => id === user.id)}
                                                  onClick={() => {
                                                      props.unFollow(user.id)

                                                  }}>Unfollow</button>
                                        : <button disabled={props.followingInProgress.some(id => id === user.id)}
                                                  onClick={() => {
                                                      props.follow(user.id)
                                                  }}>Follow</button>
                                }
                            </div>
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{"user.location.city"}</div>
                            <div>{"user.location.country"}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}
export default Users;