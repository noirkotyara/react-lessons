import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, uploadPoststateActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

let mapStateToProps = (state) => {
    return {
        postsGenerate: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onChange: (text) => {
            
            dispatch(uploadPoststateActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator());
            dispatch(uploadPoststateActionCreator(''));
        }
    }
}

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;