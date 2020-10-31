import React from 'react';
import User from './User/User';
import cl from './Users.module.css';

let Users = (props) => {
    let pagesQuantity = Math.ceil(props.whatWeHave.totalCount / props.whatWeHave.pageSize);
    let pA = [];
    for (let i = 1; i <= pagesQuantity; i++) {
        pA.push(i);
    }
    return(
        <>
                <div className={cl.menuName}>Users.jsx</div>

                <div className={cl.pages}>
                    {pA.map(page => {
                        return (
                            <span onClick={() => { props.changeCurPage(page) }} className={props.whatWeHave.currentPage === page && cl.pageSelected} key={page}>{page} </span>
                        );
                    })}
                </div>
                <div className={cl.usersItem}>
                    {props.whatWeHave.usersGenerate.map(user =>
                        <User key={user.id}
                            user={user}
                            doFollow={props.whatWeHave.doFollow}
                            doUnfollow={props.whatWeHave.doUnfollow}
                        />)}
                </div>
            </>
    );

}

export default Users;

