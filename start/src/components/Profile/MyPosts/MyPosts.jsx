import React from 'react';
import { addPostActionCreator, uploadPoststateActionCreator } from '../../../redux/state';
import cl from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postLink = React.createRef();
    let addPost = () => {

        if (props.profilePage.newPostText.length !== 0) {
            props.dispatch(addPostActionCreator());
            props.dispatch(uploadPoststateActionCreator(''));
        }

    };

    let onChange = () => {

        let text = postLink.current.value;
        props.dispatch(uploadPoststateActionCreator(text));

    };

    let postsGenerate = props.profilePage.postsData.map(p => <Post message={p.message} likes={p.likes} />);
    return (
        <div>
            <div>
                <textarea ref={postLink} onChange={onChange} value={props.profilePage.newPostText} name="" id="" cols="30" rows="4"></textarea>
                <button onClick={addPost} className={cl.addPost}>Add post</button>
            </div>
            <div className={cl.posts}>
                {postsGenerate}
            </div>
        </div>
    );
}

    export default MyPosts;