const initLoginState = {
    modalOpen: false
};

export function login(state = initLoginState, action) {
    switch (action.type) {
        case "@MODAL/REASON":
            return{
                ...state,
                modalOpen: !state.modalOpen,
                reason: action.reason
            };
        default:
            return state;
    }
}