import { 
    listStudent as listStudentFromApi,
    addStudent as addStudentFromApi
} from "../api/account.js";
import { listSession as listSessionFromApi } from "../api/session.js";


export function toggleModalAddStudent() {
    return {
        type: '@MODAL/ADD_STUDENT'
    };
};

export function listStudent() {
    console.log("Start listing student...");
    return (dispatch) =>{
        listStudentFromApi().then((res) => {
            dispatch(endListStudent(res));
        }).catch((err) => {
            console.log('Error listing students', err);
        }).then(console.log("End listing students."));
    } 
}

function endListStudent(students) { // update state
    return {
        type: '@STUDENT/LIST',
        students: students
    }
}

export function AddStudent(sname) {
    console.log("Start adding student...");
    return (dispatch) => {
        addStudentFromApi(sname).then(() => {
            console.log("End adding student.");
            dispatch(listStudent());
        }).catch((err) => {
            console.log('Error listing students', err);
        }).then(console.log("End listing students."));
    }
}


function endListSession(sessions){ // update state
    return {
        type: '@SESSION/LIST',
        sessions: sessions
    }
}

export function listSession(username) {
    console.log("Start listing sessions...");
    return (dispatch) =>{
        listSessionFromApi(username).then((sessions) => {
            dispatch(endListSession(sessions));
        }).catch((err) => {
            console.log('Error listing sessions', err);
        }).then(console.log("End listing sessions."));
    } 
}
