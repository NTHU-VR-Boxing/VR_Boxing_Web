import { listStudent as listStudentFromApi} from "../api/account.js";

export function toggleModalAddStudent() {
    return {
        type: '@MODAL/ADD_STUDENT'
    };
};

function endListStudent(students) {
    return {
        type: '@STUDENT/LIST',
        students: students
    }
}

export function listStudent() {
    console.log("Start listing student...");
    return (dispatch) =>{
        listStudentFromApi().then((res) => {
            dispatch(endListStudent(res));
        }).catch((err) => {
            console.log('Error listing students', err);
        }).then(console.log("End loading students."));
    } 
}