const initListState = {
    modalAddStudent: false,
    students: [],
    sessions: [],
    select: 's-all'
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
        case '@STUDENT/LIST/SELECT':
            return {
                ...state,
                select: action.id
            }
        case '@STUDENT/INIT':
            return {
                ...state,
                select: 's-all'
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