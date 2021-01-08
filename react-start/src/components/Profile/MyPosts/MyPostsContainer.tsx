
import { connect } from 'react-redux';
import { actions, PostsDataType } from '../../../redux/profile-reducer';
import { AppStateType, BasicComponentType } from '../../../redux/redux-store';
import MyPosts from './MyPosts';

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        postsGenerate: state.profilePage.postsData,
        // newPostText: state.profilePage.newPostText
    }
}


let MyPostsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(
    mapStateToProps,
    { postForm: actions.postForm }
)(MyPosts);

export default MyPostsContainer;

//types
export type MapStateToPropsType = {
    postsGenerate: Array<PostsDataType>
}
export type MapDispatchToPropsType = {
    postForm: (newPostText: string) => void
}