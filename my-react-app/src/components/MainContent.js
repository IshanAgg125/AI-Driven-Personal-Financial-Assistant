// MainContent.js
import React, { useEffect, useState } from 'react';

const MainContent = () => {
  const [backendMessage, setBackendMessage] = useState('');

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/data') // Adjust the URL as necessary
      .then(response => response.json())
      .then(data => {
        console.log('Received data:', data); // Check the received data
        setBackendMessage(data.message);
      })
  }, []);

  return (
    <div>
      <p>Message from Backend: {backendMessage}</p>
      {/* Other main content */}
    </div>
  );
};

export default MainContent;
