import React, { useState } from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';


const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} setCurrentPage={setCurrentPage} />
      {currentPage === 'home' && <HomePage setCurrentPage={setCurrentPage} />}
      {currentPage === 'login' && <LoginPage setCurrentPage={setCurrentPage} />}
      {currentPage === 'signup' && <SignupPage setCurrentPage={setCurrentPage} />}
      <Footer />
    </div>
  );
};

export default App;
