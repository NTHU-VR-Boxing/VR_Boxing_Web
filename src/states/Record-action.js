import { listRecord as listRecordFromApi } from "../api/record.js";

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
