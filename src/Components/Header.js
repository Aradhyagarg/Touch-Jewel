
import React from 'react';
import { Search, Heart, ShoppingCart, User, Menu, X } from 'lucide-react';
const Header = ({ mobileMenuOpen, setMobileMenuOpen }) => {
    return (
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="bg-red-900 text-white text-center py-2 text-sm">
          SIGNUP AND GET 10% OFF
        </div>
  
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className="text-2xl font-serif tracking-widest">NIORA</div>
  
            <nav className="hidden md:flex items-center space-x-8 text-sm uppercase tracking-wide">
              <a href="#" className="hover:text-gray-600">Engagement</a>
              <a href="#" className="hover:text-gray-600">Wedding</a>
              <a href="#" className="hover:text-gray-600">Fine Jewelry</a>
              <a href="#" className="hover:text-gray-600">Try at Home</a>
              <a href="#" className="hover:text-gray-600">Customize</a>
              <a href="#" className="hover:text-gray-600">About</a>
            </nav>
  
            <div className="flex items-center space-x-4">
              <button className="hover:text-gray-600">
                <Search size={20} />
              </button>
              <button className="hover:text-gray-600">
                <Heart size={20} />
              </button>
              <button className="hover:text-gray-600">
                <User size={20} />
              </button>
              <button className="hover:text-gray-600">
                <ShoppingCart size={20} />
              </button>
            </div>
          </div>
  
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 space-y-3 text-sm uppercase tracking-wide">
              <a href="#" className="block hover:text-gray-600">Engagement</a>
              <a href="#" className="block hover:text-gray-600">Wedding</a>
              <a href="#" className="block hover:text-gray-600">Fine Jewelry</a>
              <a href="#" className="block hover:text-gray-600">Try at Home</a>
              <a href="#" className="block hover:text-gray-600">Customize</a>
              <a href="#" className="block hover:text-gray-600">About</a>
            </nav>
          )}
        </div>
      </header>
    );
  };

  export default Header