import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { InputComp } from '../../common/InputChecker/InputChecker';
import { maxLengthC, required } from '../../common/Validators/Validators';
import cl from './MyPosts.module.css';
import { MapDispatchToPropsType, MapStateToPropsType } from './MyPostsContainer';
import Post from './Post/Post';
let maxLength20 = maxLengthC(20);

const MyPosts: React.FC<PropsType> = (props) => {

    let postsGenerate = props.postsGenerate.map(p => <Post key={p.id} message={p.message} likes={p.likes} />);
    let onSubmit = (formData: FormPostType) => {
        props.postForm(formData.newPostText);
    }
    return (
        <div>
            <FormMyPostR {...props} onSubmit={onSubmit} />
            <div className={cl.posts}>
                {postsGenerate}
            </div>
        </div>
    );

}
let FormMyPost: React.FC<InjectedFormProps<FormPostType, OwnPropsType> & OwnPropsType> = (props) => {
    return <>
        <form onSubmit={props.handleSubmit}>
            <Field component={InputComp} name='newPostText' type="text" validate={[required, maxLength20]} placeholder={'Write your post here...'} />
            <button type="submit" className={cl.addPost}>Add post</button>
        </form>
    </>
}

let FormMyPostR = reduxForm<FormPostType, OwnPropsType>({
    form: 'post'
})(FormMyPost);

export default MyPosts;

//types 
type FormPostType = {
    newPostText: string
}
type OwnPropsType = {}
type PropsType = MapStateToPropsType & MapDispatchToPropsType
