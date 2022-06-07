const initListState = {
    modalAddStudent: false
};

export function list(state = initListState, action) {
    switch (action.type) {
        case "@MODAL/ADD_STUDENT":
            return{
                ...state,
                modalAddStudent: !state.modalAddStudent
            };
        default:
            return state;
    }
}