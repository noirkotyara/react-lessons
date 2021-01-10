import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions, PostsDataType } from '../../../redux/profile-reducer';
import { getPostsData } from '../../../redux/profile-selectors';
import { AppStateType } from '../../../redux/redux-store';
import { FormMyPostR } from './FormMyPost';
import cl from './MyPosts.module.css';
import Post from './Post/Post';



export const MyPosts: React.FC<{}> = () => {

    const postsData = useSelector<AppStateType, Array<PostsDataType>>(getPostsData)
    const dispatchR = useDispatch() 
    let postsGenerate = postsData.map(p => <Post key={p.id} message={p.message} likes={p.likes} />);
    let onSubmit = (formData: FormPostType) => {
        dispatchR(actions.postForm(formData.newPostText))
    }
    return (
        <div>
            <FormMyPostR onSubmit={onSubmit} />
            <div className={cl.posts}>
                {postsGenerate}
            </div>
        </div>
    );

}

//types 
export type FormPostType = {
    newPostText: string
}
