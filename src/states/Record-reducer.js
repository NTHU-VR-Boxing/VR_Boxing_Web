const initRecordState = {
    students: [],
    select: 's-all',
    records: [],
    switch: false
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
        case '@SWITCH/TOGGLE':
            return {
                ...state,
                switch: !state.switch
            }
        default:
            return state;
    }
}