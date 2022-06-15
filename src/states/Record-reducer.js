const initRecordState = {
    students: [],
    select: 's-all',
    records: []
};

export function record(state = initRecordState, action) {
    switch (action.type) {
        case '@STUDENT/LIST':
            return {
                ...state,
                students: action.students
            }
        case '@STUDENT/RECORD/SELECT':
            return {
                ...state,
                select: action.id
            }
        case '@STUDENT/INIT':
            return {
                ...state,
                select: 's-all'
            }
        case '@RECORD/LIST':
            return {
                ...state,
                records: action.records
            }
        default:
            return state;
    }
}