const initPostEditState = {
    text: '',
    inputDanger: false,
    imgUrl: '',
    ts: new Date()
};
export function postEdit(state = initPostEditState, action) {
    switch (action.type) {
        case 'INPUT_TEXT':
            return {
                ...state,
                text: action.text
            };
        case 'INPUT_DANGER':
            return {
                ...state,
                inputDanger: action.danger
            };
        case 'INPUT_IMG':
            return {
                ...state,
                imgUrl: action.imgUrl
            };
        case 'INPUT_TIME':
            return {
                ...state,
                ts: action.time
            };
        // case 'INPUT_LOCATION':
        //     return {
        //         ...state,
        //         location: action.location
        //     };
        default:
            return state;
    }
}