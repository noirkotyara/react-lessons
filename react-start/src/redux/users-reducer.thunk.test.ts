import { UsersAPIResponseType } from './../api/api';
import { FollowUnfollowResponseType, ResultCodeType, usersAPI } from "../api/api"
import { actions, changeCurPageThunk, followThunk, setUsersThunk, unFollowThunk } from "./users-reducer"

let result: FollowUnfollowResponseType = {
    data: {},
    resultCode: ResultCodeType.Success,
    messages: []
}
let resultGetUser: UsersAPIResponseType = {
    error: null,
    items: [{
        name: "Aaaaaaa",
        id: 13892,
        photos: {
          small: null,
          large: null
        },
        status: null,
        followed: true
      },
      {
        name: "Dmitiy_Yakovlev",
        id: 13889,
        photos: {
          small: null,
          large: null
        },
        status: null,
        followed: false
      }],
      totalCount: 50
}

jest.mock('../api/api')
let usersAPIMock = usersAPI as jest.Mocked<typeof usersAPI>

usersAPIMock.followPostRequest.mockReturnValue(Promise.resolve(result))
usersAPIMock.unFollowDeleteRequest.mockReturnValue(Promise.resolve(result))
usersAPIMock.getUsers.mockReturnValue(Promise.resolve(resultGetUser))
usersAPIMock.changeCurPage.mockReturnValue(Promise.resolve(resultGetUser))

const dispatch = jest.fn()
const getState = jest.fn()

beforeEach( () => {
    dispatch.mockClear()
    getState.mockClear()
    usersAPIMock.followPostRequest.mockClear()
    usersAPIMock.unFollowDeleteRequest.mockClear()
    usersAPIMock.getUsers.mockClear()
    usersAPIMock.changeCurPage.mockClear()
} )

test ( 'followThunk is called 3 times when Promise.resolved successfully ' , async () => {
    const thunk = followThunk(1)
    
    //dispatch getStateMock extraArguments
    await thunk(dispatch, getState, {})
    expect(dispatch).toBeCalledTimes(3)
} )


test ( 'followThunk --> dispatch called for the right userId ' , async () => {
    const thunk = followThunk(1)
    
    await thunk(dispatch, getState, {})
    expect(dispatch).toHaveBeenNthCalledWith(1, actions.toggleFollowing(true, 1))
    expect(dispatch).toHaveBeenNthCalledWith(2, actions.doFollow(1))
    expect(dispatch).toHaveBeenNthCalledWith(3, actions.toggleFollowing(false, 1))
} )

test ( 'unFollowThunk is called 3 times when Promise.resolved successfully ' , async () => {
    const thunk = unFollowThunk(1)
    
    //dispatch getStateMock extraArguments
    await thunk(dispatch, getState, {})
    expect(dispatch).toBeCalledTimes(3)
} )

test ( 'unFollowThunk --> dispatch called for the right userId ' , async () => {
    const thunk = unFollowThunk(2)
    
    await thunk(dispatch, getState, {})
    expect(dispatch).toHaveBeenNthCalledWith(1, actions.toggleFollowing(true, 2))
    expect(dispatch).toHaveBeenNthCalledWith(2, actions.doUnfollow(2))
    expect(dispatch).toHaveBeenNthCalledWith(3, actions.toggleFollowing(false, 2))
} )

test ( 'setUsersThunk --> is called 4 times when Promise.resolved successfully ' , async () => {
    const thunk = setUsersThunk( 2, 5, {term: '', friend: null})
    
    await thunk(dispatch, getState, {})
    expect(dispatch).toBeCalledTimes(4)
} )

test ( 'setUsersThunk --> dispatch called for the right userId ' , async () => {
    const thunk = setUsersThunk(2,5, {term: '', friend: null})
    
    await thunk(dispatch, getState, {})
    expect(dispatch).toHaveBeenNthCalledWith(1, actions.toggleFetching(true))
    expect(dispatch).toHaveBeenNthCalledWith(2, actions.toggleFetching(false))
    expect(dispatch).toHaveBeenNthCalledWith(3, actions.setUsers(resultGetUser.items))
    expect(dispatch).toHaveBeenNthCalledWith(4, actions.setTotalCount(resultGetUser.totalCount))

} )

test ( 'changeCurPageThunk --> is called 4 times when Promise.resolved successfully ' , async () => {
    const thunk = changeCurPageThunk(1,5)
    
    await thunk(dispatch, getState, {})
    expect(dispatch).toBeCalledTimes(4)
} )
test ( 'changeCurPageThunk --> dispatch called for the right userId  ' , async () => {
    const thunk = changeCurPageThunk(1,5)
    
    await thunk(dispatch, getState, {})
    expect(dispatch).toHaveBeenNthCalledWith(1, actions.setCurPage(1))
    expect(dispatch).toHaveBeenNthCalledWith(2, actions.toggleFetching(true))
    expect(dispatch).toHaveBeenNthCalledWith(3, actions.toggleFetching(false))
    expect(dispatch).toHaveBeenNthCalledWith(4, actions.setUsers(resultGetUser.items))

} )



