import React, { useState } from 'react';
const SignupPage = ({ setCurrentPage }) => {
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      createPassword: '',
      confirmPassword: ''
    });
    const [errors, setErrors] = useState({});
  
    const validateForm = () => {
      const newErrors = {};
      
      if (!formData.firstName.trim()) {
        newErrors.firstName = 'First name is required';
      }
      
      if (!formData.lastName.trim()) {
        newErrors.lastName = 'Last name is required';
      }
      
      if (!formData.email) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email is invalid';
      }
      
      if (!formData.phoneNumber) {
        newErrors.phoneNumber = 'Phone number is required';
      } else if (!/^\+?[\d\s-]{10,}$/.test(formData.phoneNumber)) {
        newErrors.phoneNumber = 'Phone number is invalid';
      }
      
      if (!formData.createPassword) {
        newErrors.createPassword = 'Password is required';
      } else if (formData.createPassword.length < 8) {
        newErrors.createPassword = 'Password must be at least 8 characters';
      }
      
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = 'Please confirm your password';
      } else if (formData.createPassword !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
      
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (validateForm()) {
        alert('Account created successfully!');
        // Handle signup logic here
      }
    };
  
    return (
      <div className="min-h-screen flex">
        <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12">
          <div className="w-full max-w-md">
            <h1 className="text-4xl font-light mb-2 text-center tracking-wide">Sign Up</h1>
            
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First name
                </label>
                <input
                  type="text"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  className={`w-full px-4 py-3 border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900`}
                />
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last name
                </label>
                <input
                  type="text"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  className={`w-full px-4 py-3 border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900`}
                />
                {errors.lastName && (
                  <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter Email Here"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>
  
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone number
                </label>
                <div className="flex gap-2">
                  <select className="px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900">
                    <option>IN +91</option>
                    <option>US +1</option>
                    <option>UK +44</option>
                    <option>AE +971</option>
                  </select>
                  <input
                    type="tel"
                    placeholder="Enter phone number"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
                    className={`flex-1 px-4 py-3 border ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900`}
                  />
                </div>
                {errors.phoneNumber && (
                  <p className="mt-1 text-sm text-red-500">{errors.phoneNumber}</p>
                )}
              </div>
  
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Create Password
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  value={formData.createPassword}
                  onChange={(e) => setFormData({...formData, createPassword: e.target.value})}
                  className={`w-full px-4 py-3 border ${errors.createPassword ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900`}
                />
                {errors.createPassword && (
                  <p className="mt-1 text-sm text-red-500">{errors.createPassword}</p>
                )}
              </div>
 
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="Re-Enter Password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                  className={`w-full px-4 py-3 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900`}
                />
                {errors.confirmPassword && (
                  <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-red-900 text-white py-3 rounded-md hover:bg-red-800 transition-colors font-medium"
              >
                CREATE ACCOUNT
              </button>

              <p className="text-center text-sm text-gray-600">
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={() => setCurrentPage('login')}
                  className="text-gray-900 font-medium hover:underline"
                >
                  Click Here
                </button>
              </p>
            </form>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-center font-medium mb-4">
                BECOME A MEMBER AND GET EXCLUSIVE DEALS
              </h3>
              <p className="text-sm text-gray-600 text-center mb-4">
                Subscribe to our newsletter to stay in the loop.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter Your Email here"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
                />
                <button className="bg-red-900 text-white px-6 py-2 rounded-md hover:bg-red-800">
                  →
                </button>
              </div>
            </div>
 
            <div className="flex justify-center space-x-4 mt-8">
              <a href="#" className="w-10 h-10 border border-gray-300 rounded flex items-center justify-center hover:border-gray-900">
                <span className="text-gray-600">📷</span>
              </a>
              <a href="#" className="w-10 h-10 border border-gray-300 rounded flex items-center justify-center hover:border-gray-900">
                <span className="text-gray-600">f</span>
              </a>
              <a href="#" className="w-10 h-10 border border-gray-300 rounded flex items-center justify-center hover:border-gray-900">
                <span className="text-gray-600">🐦</span>
              </a>
              <a href="#" className="w-10 h-10 border border-gray-300 rounded flex items-center justify-center hover:border-gray-900">
                <span className="text-gray-600">▶️</span>
              </a>
            </div>
          </div>
        </div>
  
        <div className="hidden lg:block lg:w-1/2 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-stone-100 to-amber-50">
            <div className="h-full flex items-center justify-center text-9xl opacity-20">
              💎
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src="https://images.unsplash.com/photo-1603561596112-0a132b757442?w=800&q=80" 
              alt="Jewelry" 
              className="w-3/4 h-3/4 object-cover rounded-lg shadow-2xl"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.style.background = 'linear-gradient(to bottom right, #d6d3d1, #fef3c7)';
              }}
            />
          </div>
        </div>
      </div>
    );
  };

  export default SignupPage