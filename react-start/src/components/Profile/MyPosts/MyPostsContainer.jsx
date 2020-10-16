import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, uploadPoststateActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

// const MyPostsContainer = (props) => {

// let profilePage = props.store.getState().profilePage;

//     let addPost = () => {

//         if (profilePage.newPostText.length !== 0) {
//             props.store.dispatch(addPostActionCreator());
//             props.store.dispatch(uploadPoststateActionCreator(''));
//         }

//     };

//     let onChange = (postLink) => {

//         let text = postLink.current.value;
//         props.store.dispatch(uploadPoststateActionCreator(text));

//     };

//     let postsGenerate = profilePage.postsData;
//     return (

//         <MyPosts 
//                 postsGenerate={postsGenerate}
//                 onChange={onChange}
//                 addPost={addPost}
//                 newPostText={profilePage.newPostText}
//                 />
//     );
// }

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