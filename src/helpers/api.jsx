import axios from 'axios';

const getData = () => {
    axios({
        "method": "GET",
        "url":"https://api-dtp.yhxbb.uz/api/egov/open_data",
        "headers": {
            "content-type":"application/json",
            // 'x-rapidapi-host':'example.com',
            // 'x-rapidapi-key': process.env.RAPIDAPI_KEY
        },
        // 'params': {
        //     'search':'parameter',
        // },
    })
}

export default getData;