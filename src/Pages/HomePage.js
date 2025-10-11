import React from 'react';
import ProductCard from '../Components/ProductCard';

const HomePage = ({ setCurrentPage }) => {
  const products = [
    { id: 1, name: 'Lab Diamond Eternity Ring', price: 95000, image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80', category: 'rings' },
    { id: 2, name: 'Petite Stud Earrings', price: 45000, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80', category: 'earrings' },
    { id: 3, name: 'Diamond Tennis Necklace', price: 185000, image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80', category: 'necklaces' },
    { id: 4, name: 'Classic Diamond Bracelet', price: 75000, image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80', category: 'bracelets' },
    { id: 5, name: 'Halo Stud Earrings', price: 65000, image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&q=80', category: 'earrings' },
    { id: 6, name: 'Solitaire Pendant', price: 125000, image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80', category: 'necklaces' }
  ];

  const testimonials = [
    { image: 'https://images.unsplash.com/photo-1603561596112-0a132b757442?w=300&q=80' },
    { image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&q=80' },
    { image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=300&q=80' }
  ];

  const blogs = [
    { 
      title: 'KNOW OUR STORY', 
      image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&q=80',
      description: 'Discover the journey behind our craftsmanship'
    },
    { 
      title: 'BEHIND THE DESIGNS', 
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80',
      description: 'Explore the artistry of our jewelry making'
    }
  ];


  const shapes = [
    { name: 'Round', emoji: '⚪' },
    { name: 'Oval', emoji: '⬭' },
    { name: 'Emerald', emoji: '◻️' },
    { name: 'Cushion', emoji: '▢' },
    { name: 'Pear', emoji: '💧' },
    { name: 'Princess', emoji: '◇' }
  ];

  return (
    <div className="bg-white">
      <section className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=1600&q=80')`,
            backgroundPosition: 'center 30%'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        </div>
        <div className="relative h-full flex flex-col items-start justify-center max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="text-white text-5xl md:text-7xl font-light tracking-wide mb-4">
            GIFT THE GLOW
          </h1>
          <p className="text-white text-lg md:text-xl mb-8 max-w-md">
            Discover luxurious treat designed to<br />make her shine bright
          </p>
          <button 
            onClick={() => setCurrentPage('signup')}
            className="bg-pink-500 text-white px-8 py-3 rounded-md hover:bg-pink-600 transition-colors font-medium"
          >
            SHOP NOW
          </button>
        </div>
      </section>

      <section className="py-16 px-4">
          <h2 className="text-3xl font-light text-center mb-12 tracking-wide">SHOP BY CATEGORY</h2>
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Rings', 'Earrings', 'Necklaces', 'Bracelets'].map((category, idx) => (
              <div key={idx} className="relative group cursor-pointer overflow-hidden rounded-lg">
                <div className="aspect-square bg-gradient-to-br from-stone-100 to-amber-50">
                  <img 
                    src={`https://images.unsplash.com/photo-${
                      idx === 0 ? '1605100804763-247f67b3557e' :
                      idx === 1 ? '1535632066927-ab7c9ab60908' :
                      idx === 2 ? '1599643478518-a784e5dc4c8f' :
                      '1611591437281-460bfbe1220a'
                    }?w=400&q=80`}
                    alt={category}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all flex items-end justify-center pb-4">
                  <span className="text-white font-medium text-lg">{category}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-50">
          <h2 className="text-3xl font-light text-center mb-4 tracking-wide">SHOP BY SHAPE</h2>
          <p className="text-gray-600 text-center mb-12">Find the diamond shape that's meant for you</p>
          <div className="max-w-5xl mx-auto flex justify-center items-center space-x-8 overflow-x-auto pb-4">
            {shapes.map((shape, idx) => (
              <div key={idx} className="flex flex-col items-center cursor-pointer group">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow mb-2">
                  <span className="text-3xl">{shape.emoji}</span>
                </div>
                <span className="text-sm text-gray-700">{shape.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="relative h-96">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1600&q=80')`
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
          <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-white text-4xl md:text-5xl font-light mb-4 tracking-wide">
              MAKE YOUR OWN
            </h2>
            <p className="text-white text-lg mb-6 max-w-2xl">
              Create an engagement ring that's uniquely yours with our expert guidance
            </p>
            <button className="bg-white text-gray-900 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors font-medium">
              START DESIGNING
            </button>
          </div>
        </section>

      <section className="py-16 px-4">
      <div className="flex justify-center space-x-6 mb-8 text-sm">
              <button className="text-gray-900 border-b-2 border-gray-900 pb-1 font-medium">NEW ARRIVAL</button>
              <button className="text-gray-500 hover:text-gray-900 pb-1">BEST SELLER</button>
              <button className="text-gray-500 hover:text-gray-900 pb-1">TRENDING</button>
            </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-8">
              <button className="border border-gray-900 text-gray-900 px-8 py-3 rounded-md hover:bg-gray-900 hover:text-white transition-colors font-medium">
                VIEW MORE
              </button>
            </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&q=80"
                alt="Lab Grown Diamonds"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div>
              <h2 className="text-4xl font-light mb-4 tracking-wide">
                BRILLIANCE OF LAB<br />GROWN DIAMONDS
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Just as sparkly and radiant as mined gems, they are chemically, physically, and optically identical to natural diamonds. These gems offer exceptional value, ethical sourcing, and environmental responsibility.
              </p>
              <button className="border border-gray-900 text-gray-900 px-6 py-2 rounded-md hover:bg-gray-900 hover:text-white transition-colors">
                DISCOVER
              </button>
            </div>
          </div>
        </section>

      <section className="py-16 px-4">
          <h2 className="text-3xl font-light text-center mb-12 tracking-wide">
            WHAT OUR CUSTOMERS SAY
          </h2>
          <div className="max-w-5xl mx-auto flex justify-center items-center space-x-4">
            <button className="text-gray-400 hover:text-gray-600 text-2xl">‹</button>
            <div className="grid grid-cols-3 gap-4 flex-1">
              {testimonials.map((item, idx) => (
                <div key={idx} className="aspect-square rounded-lg overflow-hidden">
                  <img 
                    src={item.image}
                    alt={`Customer ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <button className="text-gray-400 hover:text-gray-600 text-2xl">›</button>
          </div>
        </section>

      <section className="py-16 px-4 bg-gray-50">
          <h2 className="text-3xl font-light text-center mb-12 tracking-wide">RECENT BLOGS</h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {blogs.map((blog, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                  <img 
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-medium mb-2 tracking-wide">{blog.title}</h3>
                <p className="text-gray-600 text-sm">{blog.description}</p>
              </div>
            ))}
          </div>
        </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-3">📄</div>
            <h3 className="font-medium text-sm mb-2">CERTIFIED JEWELRY</h3>
            <p className="text-xs text-gray-600">BIS Hallmarked & IGI Certified</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">🚚</div>
            <h3 className="font-medium text-sm mb-2">FREE SHIPPING</h3>
            <p className="text-xs text-gray-600">On all prepaid orders</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">💎</div>
            <h3 className="font-medium text-sm mb-2">LIFETIME BUYBACK</h3>
            <p className="text-xs text-gray-600">100% Exchange Value</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">🛡️</div>
            <h3 className="font-medium text-sm mb-2">LIFETIME WARRANTY</h3>
            <p className="text-xs text-gray-600">On all manufacturing defects</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;