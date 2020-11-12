import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { TextareaComp } from '../../common/InputChecker/InputChecker';
import { maxLengthC, required } from '../../common/Validators/Validators';
import cl from './MyPosts.module.css';
import Post from './Post/Post';
let maxLength20 = maxLengthC(20);

const MyPosts = (props) => {

    let postsGenerate = props.postsGenerate.map(p => <Post key={p.id} message={p.message} likes={p.likes} />);
    let onSubmit = (formData) => {
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
let FormMyPost = (props) => {
    return <>
        <form onSubmit={props.handleSubmit}>
            <Field component={TextareaComp} name='newPostText' type="text" validate={[required, maxLength20]} placeholder={'Write your post here...'} />
            <button type="submit" className={cl.addPost}>Add post</button>
        </form>
    </>
}

let FormMyPostR = reduxForm({
    form: 'post'
})(FormMyPost);

export default MyPosts;