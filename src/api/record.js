import axios from 'axios';

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