import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { InputComp } from '../../common/InputChecker/InputChecker';
import { maxLengthC, required } from '../../common/Validators/Validators';
import cl from './MyPosts.module.css';
import { FormPostType } from './MyPosts';

let maxLength20 = maxLengthC(20);
//<InjectedFormProps<FormPostType, OwnProps> & OwnProps>
let FormMyPost: React.FC<InjectedFormProps<FormPostType>> = (props) => {
    return <>
        <form onSubmit={props.handleSubmit}>
            <Field component={InputComp} name='newPostText' type="text" validate={[required, maxLength20]} placeholder={'Write your post here...'} />
            <button type="submit" className={cl.addPost}>Add post</button>
        </form>
    </>
}

export let FormMyPostR = reduxForm<FormPostType>({
    form: 'post'
})(FormMyPost)
