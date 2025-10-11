import { Heart } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const ProductCard = ({ product }) => {
  const { addToCart, toggleWishlist, isInWishlist, convertPrice } = useAppContext();

  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
        <img 
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <button 
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product);
          }}
          className="absolute top-3 right-3 bg-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-pink-50 transition-colors"
        >
          <Heart 
            size={16} 
            className={isInWishlist(product.id) ? 'text-red-500 fill-red-500' : 'text-gray-600'} 
          />
        </button>
      </div>
      <h3 className="text-sm font-medium text-gray-900 mb-1">{product.name}</h3>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-gray-600">{convertPrice(product.price)}</span>
        <div className="flex text-yellow-400 text-xs">
          {'★'.repeat(5)}
        </div>
      </div>
      <button
        onClick={() => addToCart(product)}
        className="w-full bg-gray-900 text-white py-2 rounded-md hover:bg-gray-800 transition-colors text-sm"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;