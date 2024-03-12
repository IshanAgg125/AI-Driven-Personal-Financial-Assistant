import React, { useState } from 'react';
import LoginPage from './components/loginPage'; // Adjust the path as necessary
import Navbar from './components/navbar'; // Ensure the path is correct
import MainContent from './components/MainContent';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (loginStatus) => {
    setIsLoggedIn(loginStatus);
  };

  return (
      <div>
        {isLoggedIn ? (
          <>
            <Navbar />
            <MainContent /> {/* Render MainContent after login */}
          </>
        ) : (
          <LoginPage onLogin={handleLogin} />
        )}
      </div>
    );
  };

export default App;
