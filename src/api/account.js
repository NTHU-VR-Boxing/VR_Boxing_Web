import axios from 'axios';
import { func } from 'prop-types';

const baseUrl = 'https://140.114.88.33/api';

export function createAccount() {
    let el = document.querySelector("#register");
    let formData = new FormData(el);   

    console.log(`Making POST request to: ${baseUrl}/register`);
    // console.log(formData.get('cname'));
    // console.log(formData.get('password'));

    axios({
        method: "post",
        baseURL: baseUrl,
        url: '/register',
        data: formData,
        headers: { "Content-Type": "multipart/form-data" }
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

export function login() {
    let el = document.querySelector("#register");
    let formData = new FormData(el);   

    console.log(`Making POST request to: ${baseUrl}/register`);
    // console.log(formData.get('cname'));
    // console.log(formData.get('password'));

    axios({
        method: "post",
        baseURL: baseUrl,
        url: '/register',
        data: formData,
        headers: { "Content-Type": "multipart/form-data" }
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