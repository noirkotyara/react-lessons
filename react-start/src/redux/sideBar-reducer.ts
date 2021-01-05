
let initialState = {
    friendsList: [
        { id: 1, name: 'Zorro' },
        { id: 2, name: 'Lyubov' },
        { id: 3, name: 'Kuscherenko' }
    ] as Array<FriendsList>
};


const sideBarReducer = (state = initialState, action: any):initialStateType => {
    return state;
}
export default sideBarReducer;

//types
export type FriendsList = {
    id: number
    name: string
}
export type initialStateType = typeof initialState