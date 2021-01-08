import usersReducer, { actions, InitialStateType } from "./users-reducer"

let state: InitialStateType

beforeEach(() => {
    state = {
        usersData: [
            {
                id: 0,
                name: '0',
                followed: false,
                photos: { small: '00', large: '00' },
                status: '0000'
            },
            {
                id: 1,
                name: '1',
                followed: false,
                photos: { small: '11', large: '11' },
                status: '1111'
            },
            {
                id: 2,
                name: '2',
                followed: true,
                photos: { small: '22', large: '22' },
                status: '2222'
            },
            {
                id: 3,
                name: '3',
                followed: true,
                photos: { small: '33', large: '33' },
                status: '3333'
            }
        ],
        currentPage: 1,
        pageSize: 90,
        totalCount: 10,
        isFetching: false,
        followingInProgress: []
    }
})

test('followAction is succeeded', () => {
    let action = actions.doFollow(1)
    let newAction = usersReducer(state, action)
    expect(newAction.usersData[0].followed).toBeFalsy()
    expect(newAction.usersData[1]).toBeTruthy()
})
test('unFollowAction is succeeded', () => {
    let action = actions.doUnfollow(3)
    let newAction = usersReducer(state, action)
    expect(newAction.usersData[2].followed).toBeTruthy()
    expect(newAction.usersData[3].followed).toBeFalsy()
})