import React, { useState } from 'react';
const LoginPage = ({ setCurrentPage }) => {
    const [formData, setFormData] = useState({
      email: '',
      password: '',
      rememberMe: false
    });
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
  
    const validateForm = () => {
      const newErrors = {};
      
      if (!formData.email) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email is invalid';
      }
      
      if (!formData.password) {
        newErrors.password = 'Password is required';
      } else if (formData.password.length < 6) {
        newErrors.password = 'Password must be at least 6 characters';
      }
      
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (validateForm()) {
        alert('Login successful!');
      }
    };
  
    return (
      <div className="min-h-screen flex">
        <div className="hidden lg:block lg:w-1/2 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-stone-100">
            <div className="h-full flex items-center justify-center text-9xl opacity-20">
              💍
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80" 
              alt="Jewelry" 
              className="w-3/4 h-3/4 object-cover rounded-lg shadow-2xl"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.style.background = 'linear-gradient(to bottom right, #fef3c7, #d6d3d1)';
              }}
            />
          </div>
        </div>
  
        <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12">
          <div className="w-full max-w-md">
            <h1 className="text-4xl font-light mb-2 text-center tracking-wide">Log In</h1>
            
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter Email Here"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>
  
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter Password"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    className={`w-full px-4 py-3 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-1 text-sm text-red-500">{errors.password}</p>
                )}
              </div>
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.rememberMe}
                    onChange={(e) => setFormData({...formData, rememberMe: e.target.checked})}
                    className="mr-2 w-4 h-4"
                  />
                  <span className="text-gray-700">Show password</span>
                </label>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Forgot password?
                </a>
              </div>
  
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-red-900 text-white py-3 rounded-md hover:bg-red-800 transition-colors font-medium"
              >
                LOG IN
              </button>
              <p className="text-center text-sm text-gray-600">
                Don't have an account?{' '}
                <button
                  type="button"
                  onClick={() => setCurrentPage('signup')}
                  className="text-gray-900 font-medium hover:underline"
                >
                  Register Here
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
      </div>
    );
  };

  export default LoginPage