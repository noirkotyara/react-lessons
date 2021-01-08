import profileReducer, { actions , setStatusThunk } from './redux/profile-reducer';

// test('renders learn react link', () => {
//     const { getByText } = render( < App / > );
//     const linkElement = getByText(/learn react/i);
//     expect(linkElement).toBeInTheDocument();
// });

let state = {
    postsData: [
        { id: 1, message: 'Hello', likes: 15 },
        { id: 2, message: 'Bonjour', likes: 30 },
        { id: 3, message: 'Привет', likes: 15000 },
    ],
    // newPostText: '',
    profile: null,
    status: 'no status'

};

test('PostForm text', () => {
    let action = actions.postForm('hello');
    let newState = profileReducer(state, action);

    expect(newState.postsData[3].message).toBe('hello');
});


test('Do not post empty PostForm', () => {
    let action = actions.postForm('hello');
    let newState = profileReducer(state, action);
    expect(newState.postsData.length).toBe(4);
});

test('UpdateStatus anonymous user text', () => {
    let action2 = setStatusThunk('ok');
    let state = {
        status: 'no status'
    };
    //@ts-ignore
    let newState = profileReducer(state, action2);
    expect(newState.status).toBe('no status');
});