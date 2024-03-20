import React, { useState } from 'react';

// The Axios library, a promise-based HTTP client used to make requests to external
//resources, in this case, your backedn, server.
import axios from 'axios';

function FinancialDashboard() {
  const [name, setName] = useState("");
  // initialize name with empty string. setName will be used to update

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/message', { name });
      console.log(response.data); // Log the response from the server
      alert('Name submitted successfully');
    } catch (error) {
      console.error('There was an error submitting the form:', error);
      alert('Error submitting name');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FinancialDashboard;
