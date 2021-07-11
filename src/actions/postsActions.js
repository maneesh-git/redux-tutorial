// Create redux action types
export const GET_POSTS = 'GET_POSTS';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE';


// Creating the action creators : functions that return actions ( type and payload)
export const getPosts = () => ({
    type : GET_POSTS
})

export const getPostsSuccess = posts => ({
    type : GET_POSTS_SUCCESS,
    payload : posts
})

export const getPostsFailure = () => ({
    type : GET_POSTS_FAILURE
})


// Combining all actions in an asynchronous thunk.

// export function fetchPosts() {
//     return async dispatch => {

//         dispatch(getPosts())

//         try{
//             let response = await fetch('https://jsonplaceholder.typicode.com/posts')
//             const data = await response.json()

//             dispatch(getPostsSuccess(data))
//         }
//         catch(err) {
//             dispatch(getPostsFailure)
//         }
//     }
// }

// This is just a function that combines all actions into one and dispatches two different action creators in one call.

export const fetchPosts = () => async (dispatch) => {
 
    dispatch(getPosts())

    try{
        let response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        dispatch(getPostsSuccess(data))
    }
    catch(err) {
        dispatch(getPostsFailure)
    }
}