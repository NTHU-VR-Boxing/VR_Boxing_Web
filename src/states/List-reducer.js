const initListState = {
    modalAddStudent: false,
    students: [],
    sessions: []
};

export function list(state = initListState, action) {
    switch (action.type) {
        case "@MODAL/ADD_STUDENT":
            return {
                ...state,
                modalAddStudent: !state.modalAddStudent
            };
        case '@STUDENT/LIST':
            return {
                ...state,
                students: action.students
            }
        case '@SESSION/LIST':
            return {
                ...state,
                sessions: action.sessions
            }
        default:
            return state;
    }
}