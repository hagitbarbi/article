const axios = require('axios');

const keyword = 'candy';

const length = 'short'; // You can set it to 'short', 'medium', or 'long'

const rytrAPIKey = 'VU0SACNDUU6QFPMGP8E5U';

const rytrEndpoint = 'https://app.rytr.me/create';
const http=require('http');
const response = makeHttpRequest()
.then((response) => {
  if (response && response.data && response.data.generatedDocument && response.data.generatedDocument.text) {
    // Access the text property
    console.log(response.data.generatedDocument.text);
  } else {
    // Handle the case when text is undefined
    console.log('Text is undefined');
  }
})
.catch((error) => {
  console.log(error);
});

axios.post(rytrEndpoint, {

apiKey: rytrAPIKey,

data: {

text: `Write a ${length} paragraph about ${keyword}`,

output: 'text'

}

}).then((response) => {

const generatedText = response.data.data.text;

console.log(generatedText);

}).catch((error) => {

console.log(error);

});

if (response && response.data && response.data.generatedDocument && response.data.generatedDocument.text) {
    // Access the text property
    console.log(response.data.generatedDocument.text);
  } else {
    // Handle the case when text is undefined
    console.log('text is undefined');
  }
  