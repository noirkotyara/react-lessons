import React from 'react';
import { UsersDataType } from '../../types/types';
import User from './User/User';
import cl from './Users.module.css';


export type PropsType = {
    usersGenerate: Array<UsersDataType>
    doFollow: (id: number) => void 
    doUnfollow: (id: number) => void 
    followingInProgress: Array<number>
}


let Users: React.FC<PropsType> = (props) => {
    return(
        <>                
                <div className={cl.usersItem}>
                    {props.usersGenerate.map((user) =>               
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

