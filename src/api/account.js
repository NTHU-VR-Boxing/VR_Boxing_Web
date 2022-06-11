import axios from 'axios';

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

    // if(location === '') {
    //     const lat = 500;
    //     const lng = 500;

    //     return axios.post(url, {
    //             text,
    //             imgUrl,
    //             ts,
    //             lat,
    //             lng,
    //             id
    //     }).then(function(res) {
    //         if (res.status !== 200)
    //             throw new Error(`Unexpected response code: ${res.status}`);
    //         //console.log(res.data);
    //         res.data.ts = new Date(res.data.ts);
    //         //res.data = res.data.map((p) => (p.ts = new Date(p.ts)));
    //         return res.data;
    //     })
    //     .catch((error) => {
    //         console.log("😱 Error: ", error);
    //     });
    // }
    // else {
    //     return getGeocode({ address: location })
    //     .then((results) => getLatLng(results[0]))
    //     .then(({ lat, lng }) => {
    //         //console.log(lat, lng);
    //         return axios.post(url, {
    //             text,
    //             imgUrl,
    //             ts,
    //             lat,
    //             lng,
    //             id
    //         });
    //     }).then(function(res) {
    //         if (res.status !== 200)
    //             throw new Error(`Unexpected response code: ${res.status}`);
    
    //         return res.data;
    //     })
    //     .catch((error) => {
    //         console.log("😱 Error: ", error);
    //     });
    // }
}