#!/usr/bin/node 

const apiUrl = 'https://www.hackercoop.dev/api/boop';
const accessToken = 'HackerSummer2023';
const requestData = {
  content: 'Message from the world'
};

const headers = {
  'Authorization': `Bearer ${accessToken}`,
  'Content-Type': 'application/json'
};

fetch(apiUrl, {
  method: 'POST',
  headers: headers,
  body: JSON.stringify(requestData)
})
  .then(response => response.json())
  .then(data => {
    // Process the returned data
    console.log(data);
  })
  .catch(error => {
    // Handle any errors that occurred during the request
    console.error('Error:', error);
  });