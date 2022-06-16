import { func } from "prop-types"

export function initRecordId(recordId) {
    return {
        type: 'INIT_RECORDID',
        recordId
    }
}

export function initFeedbackId(feedbackID) {
    return {
        type: 'INIT_FID',
        feedbackID: feedbackID
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

export function initRecord(session_name, sname, time, hit, block, dodge, video_url){
    return {
        type: '@RECORD/INIT',
        session_name: session_name,
        sname: sname,
        time: time,
        hit: hit,
        block: block,
        dodge: dodge,
        video_url: video_url
    }
}

export function initFeedback(byTime, total) {
    return {
        type: '@FEEDBACK/INIT',
        byTime,
        total
    }
}