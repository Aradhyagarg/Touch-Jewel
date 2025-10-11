import React from 'react';
import { Search } from 'lucide-react';
import ProductCard from '../Components/ProductCard';

const SearchPage = ({ searchQuery }) => {
  const allProducts = [
    { id: 1, name: 'Lab Diamond Eternity Ring', price: 95000, image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80', category: 'rings', shape: 'round' },
    { id: 2, name: 'Petite Stud Earrings', price: 45000, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80', category: 'earrings', shape: 'round' },
    { id: 3, name: 'Diamond Tennis Necklace', price: 185000, image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80', category: 'necklaces', shape: 'round' },
    { id: 4, name: 'Classic Diamond Bracelet', price: 75000, image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80', category: 'bracelets', shape: 'round' },
    { id: 5, name: 'Halo Stud Earrings', price: 65000, image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&q=80', category: 'earrings', shape: 'round' },
    { id: 6, name: 'Solitaire Pendant', price: 125000, image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80', category: 'necklaces', shape: 'round' },
    { id: 7, name: 'Emerald Cut Diamond Ring', price: 155000, image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80', category: 'rings', shape: 'emerald' },
    { id: 8, name: 'Pearl Drop Earrings', price: 35000, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80', category: 'earrings', shape: 'round' },
  ];

  const filteredProducts = allProducts.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.shape.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-light mb-2">Search Results</h1>
        <p className="text-gray-600 mb-8">
          Found {filteredProducts.length} result{filteredProducts.length !== 1 ? 's' : ''} for "{searchQuery}"
        </p>
        
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <Search size={64} className="mx-auto mb-4 text-gray-300" />
            <h2 className="text-2xl font-light mb-2">No products found</h2>
            <p className="text-gray-600 mb-4">Try searching with different keywords</p>
            <p className="text-sm text-gray-500">
              Try searching for: rings, earrings, necklaces, bracelets, diamond, round, emerald
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;