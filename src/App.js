import React, { useState } from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';


const App = () => {
  const [currentPage, setCurrentPage] = useState('login');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      {currentPage === 'login' ? (
        <LoginPage setCurrentPage={setCurrentPage} />
      ) : (
        <SignupPage setCurrentPage={setCurrentPage} />
      )}
      <Footer />
    </div>
  );
};
export default App;
