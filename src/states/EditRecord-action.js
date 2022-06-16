import { func } from "prop-types"

export function initRecordId(recordId) {
    return {
        type: 'INIT_RECORDID',
        recordId
    }
}

export function inputMin(min) {
    return {
        type: 'INPUT_MIN',
        min: min
    }
}

export function inputSec(sec) {
    return {
        type: 'INPUT_SEC',
        sec: sec
    }
}

export function inputText(text) {
    return {
        type: 'INPUT_TEXT',
        text: text
    }
}

export function submitByTime(min, sec, text) {
    return {
        type: 'SEND_BY_TIME',
        min: min,
        sec: sec,
        text: text
    }
}

export function inputTotal(total) {
    return {
        type: 'INPUT_TOTAL',
        total
    }
}