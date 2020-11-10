
import { connect } from 'react-redux';
import { postForm } from '../../../redux/profile-reducer';
import MyPostsRedux from './MyPosts';

let mapStateToProps = (state) => {
    return {
        postsGenerate: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}


let MyPostsContainer = connect(mapStateToProps, {postForm: postForm})(MyPostsRedux);

export default MyPostsContainer;