const axios = require('axios');
const express = require('express');
const router = express.Router();
    
router.get('', (req, res) => {

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://www.goldapi.io/api/XAU/USD',
        headers: { 'x-access-token': 'goldapi-1jpism92pvoea-io' }
    };

    axios.request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
            res.json(response.data);
        })
        .catch((error) => {
            console.log(error);
            res.status(500).send('Error fetching data');
        });
});

module.exports = router;