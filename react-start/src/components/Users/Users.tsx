import React from 'react';
import { FilterType } from '../../redux/users-reducer';
import { UsersDataType } from '../../types/types';
import SearchForm from './FormType';
import User from './User/User';
import cl from './Users.module.css';


export type PropsType = {
    usersGenerate: Array<UsersDataType>
    doFollow: (id: number) => void 
    doUnfollow: (id: number) => void 
    followingInProgress: Array<number>
    filter: FilterType
    onFilterChange: (filter: FilterType) => void
}


let Users: React.FC<PropsType> = (props) => {
    return(
        <>
        <div>
        <SearchForm onFilterChange={props.onFilterChange} filter={props.filter}/>
        </div>
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

