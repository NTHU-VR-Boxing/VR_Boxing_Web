import axios from 'axios';
import { func } from 'prop-types';

const baseUrl = 'https://140.114.88.33/api';

export function createAccount() {
    let el = document.querySelector("#register");
    let formData = new FormData(el);   

    console.log(`Making POST request to: ${baseUrl}/register`);
    // console.log(formData.get('cname'));
    // console.log(formData.get('password'));

    return axios({
        method: "post",
        baseURL: baseUrl,
        url: '/register',
        data: formData,
        headers: { "Content-Type": "multipart/form-data" }
    })
    .then(function (response) {
        //handle success
        return{
            success: response.data.success,
            reason: response.data.success ? "" : response.data.reason
        };
    })
    .catch(function (error) {
        //handle error
        console.log(error);
    });
}

export function login() {
    let el = document.querySelector("#login");
    let formData = new FormData(el);   

    console.log(`Making POST request to: ${baseUrl}/login/coach`);

    return axios({
        method: "post",
        baseURL: baseUrl,
        url: '/login/coach',
        data: formData,
        headers: { "Content-Type": "multipart/form-data" }
    })
    .then(function (response) {
        //handle success
        return{
            success: response.data.success,
            reason: response.data.success ? "" : response.data.reason
        };
    })
    .catch(function (error) {
        //handle error
        console.log(error);
    });
}

export function logout() {
    const url = `${baseUrl}/logout`;
    console.log(`Making POST request to: ${url}`);

    return axios.post(url)
    .then(function (response) {
        //handle success
        console.log("success to logout!");
    })
    .catch(function (error) {
        //handle error
        console.log(error);
    });
}

export function listStudent() {
    const url = `${baseUrl}/users/student`;
    console.log(`Making GET request to: ${url}`);

    return axios.get(url)
    .then(function (response) {
        //handle success
        return response.data.result;
    })
    .catch(function (error) {
        //handle error
        console.log(error);
    });
}

export function addStudent(sname) {
    console.log(`Making POST request to: ${baseUrl}/users/student`);

    return axios({
        method: "post",
        baseURL: baseUrl,
        url: '/users/student',
        data: {sname: sname},
        headers: { "Content-Type": "application/json" }
    })
    .then(function (response) {
        //handle success
        console.log(response);
    })
    .catch(function (error) {
        //handle error
        console.log(error);
    });
}