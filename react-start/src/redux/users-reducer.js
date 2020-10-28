const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const DATA = 'SETUSERS';
const CURPAGE = 'CURPAGE';
const TOTALCOUNT = 'TOTALCOUNT';


export let doFollow = (id) => ({ type: FOLLOW, id });
export let doUnfollow = (id) => ({ type: UNFOLLOW, id });
export let setUsers = (usersData) => ({ type: DATA, usersData });
export let setCurPage = (currentPage) => ({ type: CURPAGE, currentPage });
export let settotalCount = (totalCount) => ({ type: TOTALCOUNT, totalCount });

let initialState = {
    usersData: [],
    currentPage: 1,
    pageSize: 90,
    totalCount: 10
};

let usersReducer = (state = initialState, action) => {


    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: true }
                    }
                    return u;
                })
            };


        case UNFOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: false }
                    }
                    return u;
                })
            };
        case DATA:
            return {
                ...state,
                usersData: [...action.usersData] // [...state.usersData, ...action.usersData] склеюємо старих і нових юзерів
                    //[...action.usersData] затираэмо старих юзерыв новими якы прийшли з action
            };
        case CURPAGE:

            return {
                ...state,
                currentPage: action.currentPage
            };
        case TOTALCOUNT:

            return {
                ...state,
                totalCount: action.totalCount
            };
        default:
            return state;
    }
}

export default usersReducer;