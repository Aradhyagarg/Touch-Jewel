import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const CartPage = () => {
  const { cart, removeFromCart, updateCartQuantity, convertPrice } = useAppContext();

  const total = cart.reduce((sum, item) => {
    const price = typeof item.price === 'string' ? parseInt(item.price.replace(/[^0-9]/g, '')) : item.price;
    return sum + (price * item.quantity);
  }, 0);

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center py-12">
          <ShoppingCart size={64} className="mx-auto mb-4 text-gray-300" />
          <h2 className="text-2xl font-light mb-2">Your cart is empty</h2>
          <p className="text-gray-600">Add some items to get started</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-light mb-8">Shopping Cart</h1>
        
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          {cart.map((item) => (
            <div key={item.id} className="flex gap-4 py-4 border-b last:border-b-0">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-24 h-24 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="font-medium mb-1">{item.name}</h3>
                <p className="text-gray-600 mb-2">{convertPrice(item.price)}</p>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                    className="w-8 h-8 border border-gray-300 rounded hover:bg-gray-100 flex items-center justify-center"
                  >
                    -
                  </button>
                  <span className="w-12 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                    className="w-8 h-8 border border-gray-300 rounded hover:bg-gray-100 flex items-center justify-center"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex flex-col justify-between items-end">
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 text-sm"
                >
                  Remove
                </button>
                <p className="font-medium">
                  {convertPrice(
                    (typeof item.price === 'string' ? parseInt(item.price.replace(/[^0-9]/g, '')) : item.price) * item.quantity
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600">Subtotal:</span>
            <span>{convertPrice(total)}</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600">Shipping:</span>
            <span className="text-green-600">FREE</span>
          </div>
          <div className="border-t pt-4 mt-4">
            <div className="flex justify-between items-center text-xl font-medium mb-6">
              <span>Total:</span>
              <span>{convertPrice(total)}</span>
            </div>
            <button className="w-full bg-red-900 text-white py-3 rounded-md hover:bg-red-800 transition-colors font-medium">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;