import React, { useState } from 'react';
import { Search, Heart, ShoppingCart, User, Menu, X, ChevronDown } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { CURRENCY_RATES_EXPORT } from '../context/AppContext';

const Header = ({ setCurrentPage, setSearchQuery }) => {
  const { cart, wishlist, user, logout, currency, setCurrency } = useAppContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = (e) => {
    if (e) e.preventDefault();
    if (searchInput.trim()) {
      setSearchQuery(searchInput);
      setCurrentPage('search');
      setMobileMenuOpen(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="bg-red-900 text-white text-center py-2 text-sm">
        SIGNUP AND GET 10% OFF
      </div>

      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div 
            className="text-2xl font-serif tracking-widest cursor-pointer"
            onClick={() => setCurrentPage('home')}
          >
            NIORA
          </div>

          <div className="hidden md:flex items-center flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Search products..."
                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
              <button onClick={handleSearch} className="absolute right-3 top-1/2 -translate-y-1/2">
                <Search size={18} />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <button 
                onClick={() => setShowCurrencyDropdown(!showCurrencyDropdown)}
                className="flex items-center gap-1 text-sm hover:text-gray-600"
              >
                {CURRENCY_RATES_EXPORT[currency].symbol}
                <ChevronDown size={16} />
              </button>
              {showCurrencyDropdown && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg">
                  {Object.entries(CURRENCY_RATES_EXPORT).map(([code, data]) => (
                    <button
                      key={code}
                      onClick={() => {
                        setCurrency(code);
                        setShowCurrencyDropdown(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${currency === code ? 'bg-gray-50 font-medium' : ''}`}
                    >
                      {data.symbol} {code}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button 
              onClick={() => setCurrentPage('wishlist')}
              className="hover:text-gray-600 relative"
            >
              <Heart size={20} fill={wishlist.length > 0 ? 'currentColor' : 'none'} />
              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>

            <button 
              onClick={() => user ? logout() : setCurrentPage('login')}
              className="hover:text-gray-600"
              title={user ? 'Logout' : 'Login'}
            >
              <User size={20} />
            </button>

            <button 
              onClick={() => setCurrentPage('cart')}
              className="hover:text-gray-600 relative"
            >
              <ShoppingCart size={20} />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cart.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <div className="mb-4">
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Search products..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;