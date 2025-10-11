import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';

const Footer = () => {
  const { showToast } = useAppContext();
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && /\S+@\S+\.\S+/.test(email)) {
      showToast('Successfully subscribed to newsletter!', 'success');
      setEmail('');
    } else {
      showToast('Please enter a valid email', 'error');
    }
  };

  return (
    <footer className="bg-white border-t border-gray-200 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 text-center">
          <h3 className="font-medium mb-4">BECOME A MEMBER AND GET EXCLUSIVE DEALS</h3>
          <div className="flex max-w-md mx-auto gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email here"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
            <button 
              onClick={handleSubscribe}
              className="bg-red-900 text-white px-6 py-3 rounded-md hover:bg-red-800"
            >
              →
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-medium mb-4 uppercase text-sm tracking-wide">Company</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900">About us</a></li>
              <li><a href="#" className="hover:text-gray-900">Sustainability promise</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4 uppercase text-sm tracking-wide">Information</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Track your order</a></li>
              <li><a href="#" className="hover:text-gray-900">Return policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4 uppercase text-sm tracking-wide">Services</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Custom order</a></li>
              <li><a href="#" className="hover:text-gray-900">Try at home</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4 uppercase text-sm tracking-wide">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Live chat</a></li>
              <li><a href="#" className="hover:text-gray-900">Email us</a></li>
            </ul>
          </div>
        </div>

        <div className="text-center text-sm text-gray-500 pt-6 border-t border-gray-200">
          © 2025 NIORA — All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;