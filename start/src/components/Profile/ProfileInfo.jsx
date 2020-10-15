import React from 'react';

import cl from './ProfileInfo.module.css';



const ProfileInfo = () =>{
    return(
        <div className={cl.content}>
                <div>
                    <img className={cl.back} src="https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png" alt='background'></img>
                </div>
                <div className={cl.description}>
                    ava + description
                </div>
               
            </div>
    );
}

export default ProfileInfo;