import React, { useEffect, useState } from 'react';
import CartPage from './Components/CartPage';
import Footer from './Components/Footer';
import Header from './Components/Header';
import SearchPage from './Components/SearchPage';
import WishlistPage from './Components/Wishlist';
import { AppProvider } from './context/AppContext';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';


const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    console.log('%c⚠️ PROPRIETARY CODE', 'color: red; font-size: 20px; font-weight: bold;');
    console.log('%cDeveloped by: Aradhya Garg', 'color: blue; font-size: 14px;');
    console.log('%cSubmission Date: ' + new Date().toLocaleDateString(), 'color: green;');
    console.log('%cSubmission ID: ' + 'aradhya.gargag89@gmail.com', 'color: orange;');
  }, []);

  return (
    <AppProvider>
      <div className="min-h-screen bg-white">
        <Header setCurrentPage={setCurrentPage} setSearchQuery={setSearchQuery} />
        
        {currentPage === 'home' && <HomePage setCurrentPage={setCurrentPage} />}
        {currentPage === 'login' && <LoginPage setCurrentPage={setCurrentPage} />}
        {currentPage === 'signup' && <SignupPage setCurrentPage={setCurrentPage} />}
        {currentPage === 'cart' && <CartPage />}
        {currentPage === 'wishlist' && <WishlistPage />}
        {currentPage === 'search' && <SearchPage searchQuery={searchQuery} />}
        
        <Footer />
      </div>
    </AppProvider>
  );
};

export default App;