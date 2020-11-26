import React from 'react';
import User from './User/User';
import cl from './Users.module.css';

let Users = (props) => {
    return(
        <>
                
                <div className={cl.usersItem}>
                    {props.usersGenerate.map(user =>
                        <User key={user.id}
                            user={user}
                            doFollow={props.doFollow}
                            doUnfollow={props.doUnfollow}
                            followingInProgress={props.followingInProgress}
                            toggleFollowing={props.toggleFollowing}

                        />)}
                </div>
            </>
    );

}

export default Users;

