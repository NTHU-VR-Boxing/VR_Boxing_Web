const initEditRecordState = {
    recordId: '',
    feedbackId: '',
    byTime: [],
    total: '',
    inputMin: '',
    inputSec: '',
    inputText: '',
    v_url: '',
    session_name: '',
    sname: '',
    date: '',
    hit: 0,
    block: 0,
    dodge: 0
};

export function editRecord(state = initEditRecordState, action) {
    switch (action.type) {
        case 'INIT_RECORDID':
            return {
                ...state,
                recordId: action.recordId
            }
            case 'INIT_FID':
                return {
                    ...state,
                    feedbackId: action.feedbackId
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
        case '@RECORD/INIT':
            return {
                ...state,
                session_name: action.session_name,
                sname: action.sname,
                date: action.time,
                hit: action.hit,
                block: action.block,
                dodge: action.dodge,
                v_url: action.video_url
            }
        case '@FEEDBACK/INIT':
            return {
                ...state,
                byTime: action.byTime,
                total: action.total
            }
        default:
            return state;
    }
}