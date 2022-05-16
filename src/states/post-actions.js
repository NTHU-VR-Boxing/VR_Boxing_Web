import {
    listPosts as listPostsFromApi,
    createPost as createPostFromApi,
} from 'api/posts.js';

/*  Posts */

function startLoading() {
    return {
        type: '@POST/START_LOADING'
    };
}

function endLoading() {
    return {
        type: '@POST/END_LOADING'
    };
}

function endListPosts(posts) {
    return {
        type: '@POST/END_LIST_POSTS',
        posts
    };
}

function endCreatePost(post) {
    return {
        type: '@POST/END_CREATE_POST',
        post
    };
}

export function listPosts(ts, id) {
    return (dispatch, getState) => {
        dispatch(startLoading());
        return listPostsFromApi(ts, id).then(posts => {
            dispatch(endListPosts(posts));
        }).catch(err => {
            console.error('Error listing posts', err);
        }).then(() => {
            dispatch(endLoading())
        });
    };
};

export function createPost(text, imgUrl, ts, location, id) {
    return (dispatch, getState) => {
        //TODO
        dispatch(startLoading());

        return createPostFromApi(text, imgUrl, ts, location, id).then(post => {
            dispatch(endCreatePost(post));
        }).catch(err => {
            console.error('Error creating post', err);
        }).then(() => dispatch(endLoading()));
    };
};

/* Diary */
