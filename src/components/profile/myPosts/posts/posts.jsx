import React from "react";
import classes from './posts.module.css';



const Post = (props) => {

    return (
        <div>
            {props.message}
        </div>

    );
}

export default Post;