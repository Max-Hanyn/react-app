import React from "react";
import Post from "./posts/posts";


const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message}/>);
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        value={props.newPostText}
                        ref={newPostElement}>
                    </textarea>
                </div>
                <div>
                    <button
                        onClick={onAddPost}>
                        Add post
                    </button>
                </div>
            </div>
            {postsElements}
        </div>

    );
}

export default MyPosts;