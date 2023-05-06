// const Rytr = require('rytr');
// const client = new Rytr('UOJEZZUM-D3XDGEQS33KW', 'https://api.rytr.me/v1');
// const request = {
//     topic: 'candy',
//     tone: 'Informal',
//     length: 500
// };
// client.generateDocument(request)
//     .then(response => {
//         // Retrieve the generated text from the response
//         const generatedText = response.generatedDocument;
//         console.log(generatedText);
//     })
//     .catch(error => {
//         console.error(error);
//     });



    const axios = require('axios');

// Set up the API endpoint and headers
const API_ENDPOINT = 'https://api.rytr.me/v1/generate';
const API_KEY = 'UOJEZZUM-D3XDGEQS33KW';
const headers = {
    'Authorization': `Bearer ${API_KEY}`,
    'Content-Type': 'application/json'
};

// Set up the request object
const requestData = {
    "documentType": "Article",
    "length": 500,
    "tone": "Conversational",
    "prompt": "candy"
};

// Send the request to the API endpoint
axios.post(API_ENDPOINT, requestData, { headers })
    .then(response => {
        // Retrieve the generated text from the response
        const generatedText = response.data.generatedDocument;
        console.log(generatedText);
    })
    .catch(error => {
        console.error(error);
    });
