
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h4 className="text-xl font-bold text-white mb-4">CS — Ticket System</h4>
            <p className="text-sm">
              Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h5 className="font-semibold text-white mb-4">Company</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Mission</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Sales</a></li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h5 className="font-semibold text-white mb-4">Services</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Products & Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Customer Stories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Download Apps</a></li>
            </ul>
          </div>

          {/* Information Links */}
          <div>
            <h5 className="font-semibold text-white mb-4">Information</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Join Us</a></li>
            </ul>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center">
                     <p className="text-sm text-gray-400 order-2 sm:order-1 mt-4 sm:mt-0">© 2025 CS — Ticket System. All rights reserved.</p>
                     <div className="flex space-x-4 order-1 sm:order-2">
                         <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-dribbble"></i> CS — Ticket System</a>
                         <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f"></i> BCS — Ticket System</a>
                         <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i> @CS — Ticket System</a>
                         <a href="#" className="text-gray-400 hover:text-white"><i className="fas fa-envelope"></i> support@cst.com</a>
                    </div>
                </div>
        </div>

        
  
      </div>
    </footer>
  );
};

export default Footer;
