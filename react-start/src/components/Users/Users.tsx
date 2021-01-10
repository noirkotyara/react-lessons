import React from 'react';
import { useSelector } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';
import { FilterType } from '../../redux/users-reducer';
import { getUsersData } from '../../redux/users-selectors';
import { UsersDataType } from '../../types/types';
import { User } from './User/User';
import cl from './Users.module.css';



let Users: React.FC<PropsType> = (props) => {

    const usersGenerate = useSelector<AppStateType, Array<UsersDataType>>(getUsersData)

    return (
        <>
            <div className={cl.usersItem}>
                {usersGenerate.map((user) =>
                    <User
                        key={user.id}
                        user={user}
                    />)}
            </div>
        </>
    );

}


export default Users;

//types
export type PropsType = {
    filter: FilterType
    onFilterChange: (filter: FilterType) => void
}

