import React from 'react';
import cl from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    // props
    // postsGenerate={postsGenerate}
    //             onChange={onChange}
    //             addPost={addPost}

    let postLink = React.createRef();
    let postsGenerate = props.postsGenerate.map(p => <Post message={p.message} likes={p.likes} />);
    
    let onChange = () =>{
        props.onChange(postLink);
    } 

    return (
        <div>
            <div>
                <textarea ref={postLink} onChange={onChange} value={props.newPostText}  cols="30" rows="4"></textarea>
                <button onClick={props.addPost} className={cl.addPost}>Add post</button>
            </div>
            <div className={cl.posts}>
                {postsGenerate}
            </div>
        </div>
    );
}

    export default MyPosts;