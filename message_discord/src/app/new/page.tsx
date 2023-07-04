export default function getUserName() {
    var nameField = document.getElementById('nameField').value;
    var result = document.getElementById('result');

    if (nameField.length > 0) {
            result.textContent = 'Your username is: ' + nameField;
            callApi(nameField)

    }
}

var subButton = document.getElementById('subButton');
subButton.addEventListener('click', getUserName, false); 

function callApi(mymessage){
const apiUrl = 'https://www.hackercoop.dev/api/boop';
const accessToken = 'HackerSummer2023';
const requestData = {
content: 'Message here: ' + mymessage
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
};