import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const baseUrl = 'https://140.114.88.33/api';

export function createSession(timeline, id) {
    let el = document.querySelector("#session-goal");
    let formData = new FormData(el);   

    let url;
    if(id === '') url = `/practices/session`;
    else url = `/practices/session?id=${id}`;

    // console.log(formData.get('name'));
    // console.log(formData.get('hit'));
    // console.log(formData.get('block'));
    // console.log(formData.get('dodge'));

    // timeline
    timeline.forEach(element => {
        delete element.id;
    });
    // console.log(timeline);

    console.log(`Making POST request to: ${baseUrl}${url}`);

    return axios({
        method: "post",
        baseURL: baseUrl,
        url: url,
        data: {
            arrangement: {
                name: formData.get('name'),
                timeline: timeline
            },
            goal: {
                hit: formData.get('hit'),
                block: formData.get('block'),
                dodge: formData.get('dodge')
            }
        },
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

export function listSession(cname, sname) {
    let url;
    if(sname === 'all') {
        url = `${baseUrl}/practices/session/search?cname=${cname}`;
    }
    else {
        url = `${baseUrl}/practices/session/search?cname=${cname}&sname=${sname}`;
    }
    console.log(`Making GET request to: ${url}`);

    return axios.get(url)
    .then(function (response) {
        //handle success
        // console.log(response);
        return response.data.result;
    })
    .catch(function (error) {
        //handle error
        console.log(error);
    });
}

export function listSessionContent(id) {
    const url = `${baseUrl}/practices/session?id=${id}`;
    console.log(`Making GET request to: ${url}`);

    return axios.get(url)
    .then(function (response) {
        //handle success
        // console.log(response);
        if(response.data.result.arrangement.timeline){ // to handle bad data with wrong spec
             if(response.data.result.arrangement.timeline.length > 0) {
                for(let i=0; i<response.data.result.arrangement.timeline.length; i++) {
                    response.data.result.arrangement.timeline[i].id = uuidv4();
                }
            }
        }
       
        return response.data.result;
    })
    .catch(function (error) {
        //handle error
        console.log(error);
    });
}

export function deleteSession(id) {
    const url = `${baseUrl}/practices/session?id=${id}`
    return axios.delete(url)
    .then((res) => {
        // console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })
}
