import axios from 'axios';
import { func } from 'prop-types';

const baseUrl = 'https://140.114.88.33/api';

export function listRecord(sname) {
    let url;
    if(sname === 'all') url = `${baseUrl}/practices/record/search`;  // list all students' record
    else url = `${baseUrl}/practices/record/search?sname=${sname}`;
    console.log(`Making GET request to: ${url}`);

    return axios.get(url)
    .then(function (response) {
        //handle success
        console.log(response);
        return response.data.result;
    })
    .catch(function (error) {
        //handle error
        console.log(error);
    });
}

export function listRecordContent(id) {
    const url = `${baseUrl}/practices/record?id=${id}`;
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

export function createFeedback(recordId, byTime, total) {
    console.log(`Making POST request to: ${baseUrl}/practices/feedback`);

    return axios({
        method: "post",
        baseURL: baseUrl,
        url: '/practices/feedback',
        data: {
            record_id: recordId,
            content: {
                byTime: byTime,
                total: total
            }
        },
        headers: { "Content-Type": "application/json" }
    })
    .then(function (response) {
        //handle success
        // console.log(response);
        return response;
    })
    .catch(function (error) {
        //handle error
        console.log(error);
    });
}

export function listFeedback(cname) {
    const url = `${baseUrl}/practices/feedback/search?cname=${cname}`;
    console.log(`Making GET request to: ${url}`);

    return axios.get(url)
    .then(function (response) {
        //handle success
        console.log(response);
        return response.data.result;
    })
    .catch(function (error) {
        //handle error
        console.log(error);
    });
}

export function listFeedbackContent(id) {
    const url = `${baseUrl}/practices/feedback?id=${id}`;
    console.log(`Making GET request to: ${url}`);

    return axios.get(url)
    .then(function (response) {
        //handle success
        // console.log(response);
        return response.data.result.content;
    })
    .catch(function (error) {
        //handle error
        console.log(error);
    });

}