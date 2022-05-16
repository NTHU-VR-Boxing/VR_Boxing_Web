export function inputText(text) {
    return {
        type: 'INPUT_TEXT',
        text
    };
}

export function inputDanger(danger) {
    return {
        type: 'INPUT_DANGER',
        danger
    };
};

export function inputImg(imgUrl) {
    return {
        type: 'INPUT_IMG',
        imgUrl
    };
}

export function inputTime(time) {
    return {
        type: 'INPUT_TIME',
        time
    };
}

// export function inputLocation(location) {
//     return {
//         type: 'INPUT_LOCATION',
//         location
//     };
// }