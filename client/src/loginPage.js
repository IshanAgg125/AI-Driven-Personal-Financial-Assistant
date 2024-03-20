import React, { useState } from 'react';

const LoginPage = ({ onLogin }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const isAuthenticated = true; // This should come from your auth logic
      if(isAuthenticated) {
        onLogin(true); // Inform App component about successful login
        const userObject = { username: username, password: password };
        const credentialsJson = JSON.stringify(userObject);
        // localStorage.setItem('userInfo', credentialsJson);
        console.log(credentialsJson);

        //alert('Login Successful');
      } else {
        alert('Login Failed');
      }
    };
  
    // Inline styles
    const formStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh', // Takes full height of the viewport
    };
  
    const inputStyle = {
      marginBottom: '10px', // Adds space between the inputs
      padding: '10px', // Makes the input box a bit larger
      border: '2px solid black', // Adds a black outline to the box
      borderRadius: '5px', // Optionally adds a slight roundness to the corners
      width: '20%', // Optionally controls the width to be more responsive
      minWidth: '250px', // Ensures a minimum width for smaller screens
    };
  
    const welcomeTextStyle = {
      margin: '0px', // Adds some space below the text
      fontSize: '24px', // Larger text
      fontWeight: 'bold', // Bold text
      textAlign: "center",
    };
  
    return (
      <main>
        <div style={welcomeTextStyle}>Welcome to Financial Assistance</div>
        <form onSubmit={handleSubmit} style={formStyle}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={inputStyle}
          />
          <input
            type="password" // Changed to type="password" to hide input
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />
          <button type="submit" style={{ padding: '10px', border: '2px solid black', borderRadius: '5px', cursor: 'pointer' }}>Login</button>
        </form>
      </main>
    );
};


  
export default LoginPage;
