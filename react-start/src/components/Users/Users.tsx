import React from 'react';
import User from './User/User';
import cl from './Users.module.css';
import {PropsType} from './UsersContainer';



let Users: React.FC<PropsType> = (props) => {
    return(
        <>                
                <div className={cl.usersItem}>
                    {props.usersGenerate.map((user) =>
                    // I need to fix this shit
                    //@ts-ignore
                        <User key={user.id}
                            user={user}
                            doFollow={props.doFollow}
                            doUnfollow={props.doUnfollow}
                            followingInProgress={props.followingInProgress}
                        />)}
                </div>
            </>
    );

}

export default Users;

