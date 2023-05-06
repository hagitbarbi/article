const axios = require('axios');

const API_KEY = 'UOJEZZUM-D3XDGEQS33KW';
const text ="Write an article about the benefits of yoga";

axios.post('https://api.rytr.me/v1', {
  api_key: API_KEY,
  prompt: text,
}).then((response) => {
  console.log(response.data.data.text);
}).catch((error) => {
  console.error(error);
});

// axios.post('https://api.rytr.me/v1/write', {
//   api_key: API_KEY,
//   prompt: text,
// }).then((response) => {
//   if (response.data && response.data.data && response.data.data.text) {
//     console.log(response.data.data.text);
//   } else {
//     console.log("Response data is missing the 'text' property.");
//   }
// }).catch((error) => {
//   console.error(error);
// });

