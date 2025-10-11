import React from 'react';
import { Heart } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import ProductCard from '../Components/ProductCard';

const WishlistPage = () => {
  const { wishlist } = useAppContext();

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center py-12">
          <Heart size={64} className="mx-auto mb-4 text-gray-300" />
          <h2 className="text-2xl font-light mb-2">Your wishlist is empty</h2>
          <p className="text-gray-600">Save items you love for later</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-light mb-2">My Wishlist</h1>
        <p className="text-gray-600 mb-8">{wishlist.length} item{wishlist.length !== 1 ? 's' : ''} saved</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlist.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;