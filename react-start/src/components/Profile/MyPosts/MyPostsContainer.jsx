import React from 'react';
import { addPostActionCreator, uploadPoststateActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {

let profilePage = props.store.getState().profilePage;

    let addPost = () => {

        if (profilePage.newPostText.length !== 0) {
            props.store.dispatch(addPostActionCreator());
            props.store.dispatch(uploadPoststateActionCreator(''));
        }

    };

    let onChange = (postLink) => {
        
        let text = postLink.current.value;
        props.store.dispatch(uploadPoststateActionCreator(text));

    };

    let postsGenerate = profilePage.postsData;
    return (
        
        <MyPosts 
                postsGenerate={postsGenerate}
                onChange={onChange}
                addPost={addPost}
                newPostText={profilePage.newPostText}
                />
    );
}

    export default MyPostsContainer;