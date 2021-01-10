import React from 'react';
import cl from './Post.module.css';

type PropsType = {
    key: number
    message: string
    likes: number
}

const Post: React.FC<PropsType> = (props) => {
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