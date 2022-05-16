import axios from 'axios';
import {getGeocode, getLatLng} from "use-places-autocomplete";

// Develop server URL
const postBaseUrl = 'http://localhost:3000/api';

// Staging server URL
// const postBaseUrl = 'http://weathermood-staging.us-west-2.elasticbeanstalk.com/api';

// Production server URL
// const postBaseUrl = 'http://weathermood-cloudprog-env2.mefye6uxcy.us-east-1.elasticbeanstalk.com/api';

export function listPosts(ts, id) {
    let url = `${postBaseUrl}/posts`;
    let query = [];
    if (ts)
        query.push(`ts=${ts.valueOf()}`);
    if (id)
    query.push(`id=${id}`);
    if (query.length)
        url += '?' + query.join('&');

    console.log(`Making GET request to: ${url}`);

    return axios.get(url).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);
        //console.log("list: ", res.data);
        console.log(res.data);
        res.data.ts = new Date(res.data.ts);
        //res.data = res.data.map((p) => (p.ts = new Date(p.ts)));
        //console.log(typeof(res.data.ts));
        return res.data;
    });
}

export function createPost(text, imgUrl, ts, location, id) {
    let url = `${postBaseUrl}/posts`;
    console.log(`Making POST request to: ${url}`);

    ts = ts.valueOf();

    if(location === '') {
        const lat = 500;
        const lng = 500;

        return axios.post(url, {
                text,
                imgUrl,
                ts,
                lat,
                lng,
                id
        }).then(function(res) {
            if (res.status !== 200)
                throw new Error(`Unexpected response code: ${res.status}`);
            //console.log(res.data);
            res.data.ts = new Date(res.data.ts);
            //res.data = res.data.map((p) => (p.ts = new Date(p.ts)));
            return res.data;
        })
        .catch((error) => {
            console.log("😱 Error: ", error);
        });
    }
    else {
        return getGeocode({ address: location })
        .then((results) => getLatLng(results[0]))
        .then(({ lat, lng }) => {
            //console.log(lat, lng);
            return axios.post(url, {
                text,
                imgUrl,
                ts,
                lat,
                lng,
                id
            });
        }).then(function(res) {
            if (res.status !== 200)
                throw new Error(`Unexpected response code: ${res.status}`);
    
            return res.data;
        })
        .catch((error) => {
            console.log("😱 Error: ", error);
        });
    }
}
        
        
        
    
