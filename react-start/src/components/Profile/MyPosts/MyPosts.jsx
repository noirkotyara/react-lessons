import React from 'react';
import { Field, reduxForm } from 'redux-form';
import cl from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postLink = React.createRef();
    let postsGenerate = props.postsGenerate.map(p => <Post key={p.id} message={p.message} likes={p.likes} />);

    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <Field component={'textarea'} name='newPostText' type="text" placeholder={'Write your post here...'}/>
                <button type="submit" className={cl.addPost}>Add post</button>
            </form>
            <div className={cl.posts}>
                {postsGenerate}
            </div>
        </div>
    );
    
}
let MyPostsRedux = reduxForm({
    form:'post'
})(MyPosts);
    export default MyPostsRedux;