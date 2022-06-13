const initRegisterState = {
    modalOpen: false
};

export function register(state = initRegisterState, action) {
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