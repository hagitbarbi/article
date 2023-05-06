const axios = require('axios');
const keyword = 'candy';
const length = 'short'; // You can set it to 'short', 'medium', or 'long'
const rytrAPIKey = 'VU0SACNDUU6QFPMGP8E5U';
const rytrEndpoint = 'https://app.rytr.me/create';

axios
  .post(rytrEndpoint, {
    apiKey: rytrAPIKey,
    data: {
      title: '',
      content: '',
      length: length,
      prompt: keyword,
    },
  })
  .then((response) => {
    // Handle the response from Rytr
    const article = response.data.data.generatedDocument.content;
    console.log(article);
  })
  .catch((error) => {
    // Handle any errors that occur
    console.error('Error:', error);
  });
