const Footer = () => {
    return (
      <footer className="bg-white border-t border-gray-200 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-medium mb-4 uppercase text-sm tracking-wide">Company</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">About us</a></li>
                <li><a href="#" className="hover:text-gray-900">Know your diamonds</a></li>
                <li><a href="#" className="hover:text-gray-900">Sustainability promise</a></li>
                <li><a href="#" className="hover:text-gray-900">Our craftsmanship</a></li>
                <li><a href="#" className="hover:text-gray-900">Media guide</a></li>
                <li><a href="#" className="hover:text-gray-900">Care guide</a></li>
                <li><a href="#" className="hover:text-gray-900">Size guide</a></li>
              </ul>
            </div>
  
            <div>
              <h3 className="font-medium mb-4 uppercase text-sm tracking-wide">Information</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Track your order</a></li>
                <li><a href="#" className="hover:text-gray-900">Return policy</a></li>
                <li><a href="#" className="hover:text-gray-900">Career</a></li>
                <li><a href="#" className="hover:text-gray-900">Shipping</a></li>
                <li><a href="#" className="hover:text-gray-900">Free resizing</a></li>
                <li><a href="#" className="hover:text-gray-900">Certifications</a></li>
                <li><a href="#" className="hover:text-gray-900">Blogs</a></li>
                <li><a href="#" className="hover:text-gray-900">FAQ</a></li>
              </ul>
            </div>
  
            <div>
              <h3 className="font-medium mb-4 uppercase text-sm tracking-wide">Services</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Custom order</a></li>
                <li><a href="#" className="hover:text-gray-900">Try at home</a></li>
                <li><a href="#" className="hover:text-gray-900">Buyback</a></li>
                <li><a href="#" className="hover:text-gray-900">Lifetime warranty</a></li>
              </ul>
            </div>
  
            <div>
              <h3 className="font-medium mb-4 uppercase text-sm tracking-wide">Contact</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Live chat</a></li>
                <li><a href="#" className="hover:text-gray-900">Email us</a></li>
                <li><a href="#" className="hover:text-gray-900">Book an appointment</a></li>
                <li><a href="#" className="hover:text-gray-900">+91-7027-07-07</a></li>
              </ul>
            </div>
          </div>
  
          <div className="flex items-center justify-center space-x-6 py-6 border-t border-gray-200">
            <span className="text-sm text-gray-500">💳</span>
            <span className="text-sm text-gray-500">UPI</span>
            <span className="text-sm text-gray-500">VISA</span>
            <span className="text-sm text-gray-500">MC</span>
          </div>
  
          <div className="text-center text-sm text-gray-500 pt-6 border-t border-gray-200">
            © 2025 — Copyright All Right Reserved
            <span className="mx-4">|</span>
            <a href="#" className="hover:text-gray-900">Privacy Policy</a>
          </div>
        </div>
      </footer>
    );
  };

  export default Footer