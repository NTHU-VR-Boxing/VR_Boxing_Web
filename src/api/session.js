import axios from 'axios';

const baseUrl = 'https://140.114.88.33/api';

export function createSession(timeline) {
    let el = document.querySelector("#session-goal");
    let formData = new FormData(el);   

    console.log(formData.get('name'));
    console.log(formData.get('hit'));
    console.log(formData.get('block'));
    console.log(formData.get('dodge'));

    // timeline
    timeline.forEach(element => {
        delete element.id;
    });
    console.log(timeline);

    console.log(`Making POST request to: ${baseUrl}/practices/session`);

    return axios({
        method: "post",
        baseURL: baseUrl,
        url: '/practices/session',
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
