import axios from 'axios';
import { func } from 'prop-types';

const baseUrl = 'https://140.114.88.33/api';

export function listRecord(sname, cname) {
    let url;
    if(sname === 'all') url = `${baseUrl}/practices/record/search?cname=${cname}`;  // list all students' record
    else url = `${baseUrl}/practices/record/search?sname=${sname}&cname=${cname}`;
    // if(sname === 'all') url = `${baseUrl}/practices/record/search`;  // list all students' record
    // else url = `${baseUrl}/practices/record/search?sname=${sname}`;
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

export function createFeedback(recordId, byTime, total, fid) {
    let url;
    if(fid === '') {
        url = '/practices/feedback';
    }
    else url = `/practices/feedback?id=${fid}`;
    console.log(`Making POST request to: ${baseUrl}${url}`);

    return axios({
        method: "post",
        baseURL: baseUrl,
        url: url,
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

export function deleteFeedback(fid) {
    const url = `${baseUrl}/practices/feedback?id=${fid}`;
    console.log(`Making DELETE request to: ${url}`);

    return axios.delete(url)
    .then(function (response) {
        //handle success
        console.log(response);
    })
    .catch(function (error) {
        //handle error
        console.log(error);
    });
}