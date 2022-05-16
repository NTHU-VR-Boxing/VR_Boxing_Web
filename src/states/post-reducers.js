/* Posts */

const initPostState = {
    postLoading: false,
    posts: [],
    hasMore: true
};
export function post(state = initPostState, action) {
    switch (action.type) {
        case '@POST/START_LOADING':
            return {
                ...state,
                postLoading: true
            };
        case '@POST/END_LOADING':
            return {
                ...state,
                postLoading: false
            };
        case '@POST/END_LIST_POSTS':
            return {
                ...state,
                posts: action.posts,
                hasMore: action.posts.length > 0
            };
        case '@POST/END_LIST_MORE_POSTS':
            return {
                ...state,
                posts: [...state.posts, ...action.posts],
                hasMore: action.posts.length > 0
            };
        case '@POST/END_CREATE_VOTE':
            var newPosts = state.posts.map(p => {
                if (p.id === action.post.id)
                    return action.post;
                return p;
            });
            return {
                ...state,
                posts: newPosts,
            };
        // TODO
        case '@POST/END_CREATE_POST':
            var newPosts = state.posts.slice();
            newPosts.unshift(action.post);
            return {
                ...state,
                posts: newPosts
            };
        default:
            return state;
    }
}

/* Diary */
const initDiaryState = {
    ts: new Date(new Date().setHours(0, 0, 0, 0))
};

export function diary(state = initDiaryState, action) {
    switch (action.type) {
        default:
            return state;
    }
}