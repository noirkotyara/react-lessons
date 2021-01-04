
import { connect } from 'react-redux';
import { actions } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

let mapStateToProps = (state) => {
    return {
        postsGenerate: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}


let MyPostsContainer = connect(mapStateToProps, {postForm: actions.postForm})(MyPosts);

export default MyPostsContainer;