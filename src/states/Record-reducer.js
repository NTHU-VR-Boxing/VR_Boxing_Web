const initRecordState = {
    students: [],
    select: 's-all'
};

export function record(state = initRecordState, action) {
    switch (action.type) {
        case '@STUDENT/LIST':
            return {
                ...state,
                students: action.students
            }
        case '@STUDENT/SELECT':
            return {
                ...state,
                select: action.id
            }
        default:
            return state;
    }
}