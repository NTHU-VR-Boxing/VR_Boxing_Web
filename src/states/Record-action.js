import { 
    listRecord as listRecordFromApi,
    listFeedback as listFeedbackFromApi
 } from "../api/record.js";

export function changeSelect(id) {
    return {
        type: '@STUDENT/RECORD/SELECT',
        id
    }
}

export function listRecord(sname) {
    console.log("Start listing records...");
    return (dispatch) =>{
        listRecordFromApi(sname).then((records) => {
            dispatch(endListRecord(records));
        }).catch((err) => {
            console.log('Error listing records', err);
        }).then(console.log("End listing records."));
    } 
}

function endListRecord(records){ // update state
    return {
        type: '@RECORD/LIST',
        records: records
    }
}

export function changeSwitch() {
    return {
        type: '@SWITCH/TOGGLE'
    }
}

export function listFeedback(cname) {
    console.log("Start listing feedbacks...");
    return (dispatch) =>{
        listFeedbackFromApi(cname).then((feedbacks) => {
            dispatch(endListFeedback(feedbacks));
        }).catch((err) => {
            console.log('Error listing feedbacks', err);
        }).then(console.log("End listing feedbacks."));
    } 
}

function endListFeedback(feedbacks){ // update state
    return {
        type: '@FEEDBACK/LIST',
        feedbacks: feedbacks
    }
}
