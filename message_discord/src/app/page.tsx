'use client'
import { useEffect, useState } from 'react';

export default function Home() {
  
  const [message, setMessage] = useState('');

  useEffect(() => {
    setMessage('');
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (message.length < 1){
      alert("Please enter a message")
    }
    else{
      alert(`Message sent successfully`);
      callApi(message)
      setMessage(''); // Clear the message field
    }
  };
  function callApi(mymessage: string){
    // Call the discord api setting message values
    const apiUrl = 'https://www.hackercoop.dev/api/boop';
    const accessToken = 'HackerSummer2023';
    const requestData = {
    content: 'Message from basilnjoga: ' + mymessage
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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //updates message field when new message is placed
    setMessage(event.target.value);
  };

  return (
    <>
      <header>
        <h1 className="text-3xl font-bold underline">Homework</h1>
      </header>
      <div className="border border-gray-700" />
      <form id="messageForm" onSubmit={handleSubmit}>
        <div className="flex gap-2 flex-col">
          <input
            type="text"
            id="messageField"
            name="message"
            className="border border-slate-300 bg-transparent text-slate-500"
            placeholder ="Enter a message..."
            onChange={handleChange}
          />
        </div>

        <div>
          <button className="bg-sky-500 hover:bg-sky-700" type="submit">
            Send message
          </button>
        </div>
      </form>
    </>
  );
}
