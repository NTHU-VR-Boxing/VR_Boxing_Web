const initEditRecordState = {
    recordId: '',
    byTime: [],
    total: '',
    inputMin: '',
    inputSec: '',
    inputText: ''
};

export function editRecord(state = initEditRecordState, action) {
    switch (action.type) {
        case 'INIT_RECORDID':
            return {
                ...state,
                recordId: action.recordId
            }
        case 'INPUT_MIN':
            return {
                ...state,
                inputMin: action.min
            }
        case 'INPUT_SEC':
            return {
                ...state,
                inputSec: action.sec
            }
        case 'INPUT_TEXT':
            return {
                ...state,
                inputText: action.text
            }
        case 'SEND_BY_TIME':
            const new_post = {
                min: action.min,
                sec: action.sec,
                text: action.text
            };

            return {
                ...state,
                byTime: [...state.byTime, new_post]
            }
        case 'INPUT_TOTAL':
            return {
                ...state,
                total: action.total
            }
        default:
            return state;
    }
}