const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const DATA = 'SETUSERS';

export let doFollow = (id) => ({ type: FOLLOW, id });
export let doUnfollow = (id) => ({ type: UNFOLLOW, id });
export let setUsers = (usersData) => ({ type: DATA, usersData });

let initialState = {
    usersData: [

    ]


};

let usersReducer = (state = initialState, action) => {


    switch (action.type) {
        case FOLLOW:

            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.id) {
                        return {...u, statusFollow: true }
                    }
                    return u;
                })
            };


        case UNFOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.id) {
                        return {...u, statusFollow: false }
                    }
                    return u;
                })
            };
        case DATA:
            return {
                ...state,
                usersData: [...state.usersData, ...action.usersData]
            };
        default:
            return state;
    }
}

export default usersReducer;