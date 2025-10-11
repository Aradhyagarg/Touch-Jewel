import { createContext, useContext, useState, useEffect } from 'react';
import Toast from '../Components/Toast';

const CURRENCY_RATES = {
  INR: { symbol: '₹', rate: 1, name: 'Indian Rupee' },
  USD: { symbol: '$', rate: 0.012, name: 'US Dollar' },
  EUR: { symbol: '€', rate: 0.011, name: 'Euro' },
  GBP: { symbol: '£', rate: 0.0095, name: 'British Pound' },
  AED: { symbol: 'د.إ', rate: 0.044, name: 'UAE Dirham' }
};

const AppContext = createContext();

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext must be used within AppProvider');
  return context;
};

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  const [currency, setCurrency] = useState(() => {
    const savedCurrency = localStorage.getItem('currency');
    return savedCurrency || 'INR';
  });

  const [toast, setToast] = useState(null);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem('currency', currency);
  }, [currency]);

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  const showToast = (message, type = 'info') => {
    setToast({ message, type });
  };

  const login = (userData) => {
    setUser(userData);
    showToast('Login successful!', 'success');
  };

  const logout = () => {
    setUser(null);
    showToast('Logged out successfully', 'info');
  };

  const addToCart = (product, quantity = 1) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
      ));
      showToast('Cart updated', 'success');
    } else {
      setCart([...cart, { ...product, quantity }]);
      showToast('Added to cart', 'success');
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
    showToast('Removed from cart', 'info');
  };

  const updateCartQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      setCart(cart.map(item =>
        item.id === productId ? { ...item, quantity } : item
      ));
    }
  };

  const toggleWishlist = (product) => {
    const isInWishlist = wishlist.some(item => item.id === product.id);
    if (isInWishlist) {
      setWishlist(wishlist.filter(item => item.id !== product.id));
      showToast('Removed from wishlist', 'info');
    } else {
      setWishlist([...wishlist, product]);
      showToast('Added to wishlist', 'success');
    }
  };

  const isInWishlist = (productId) => {
    return wishlist.some(item => item.id === productId);
  };

  const convertPrice = (price) => {
    const numPrice = typeof price === 'string' ? parseInt(price.replace(/[^0-9]/g, '')) : price;
    const rate = CURRENCY_RATES[currency].rate;
    const convertedPrice = Math.round(numPrice * rate);
    return `${CURRENCY_RATES[currency].symbol} ${convertedPrice.toLocaleString()}`;
  };

  const value = {
    user,
    cart,
    wishlist,
    currency,
    login,
    logout,
    addToCart,
    removeFromCart,
    updateCartQuantity,
    toggleWishlist,
    isInWishlist,
    setCurrency,
    convertPrice,
    showToast
  };

  return (
    <AppContext.Provider value={value}>
      {children}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </AppContext.Provider>
  );
};

export const CURRENCY_RATES_EXPORT = CURRENCY_RATES;