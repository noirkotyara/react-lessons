import React from 'react';
import cl from './Post.module.css';
import {PostsDataType} from './../../../../redux/profile-reducer'

const Post: React.FC<PostsDataType> = (props) => {
    return (
        <div className={cl.item}>

            <img src="https://static.tildacdn.com/tild3538-3762-4936-b162-656163363764/Icon.png" alt="avatar" />
            <span>{props.message}</span>
            <div>
    <div>Likes --&gt; {props.likes}</div>
            </div>
        </div>
    );
}

export default Post;