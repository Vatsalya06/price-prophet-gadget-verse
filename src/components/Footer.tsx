
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-8">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Price Prophet</h3>
            <p className="text-sm text-gray-600">
              Compare and track prices of electronics across major platforms.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-prophet-blue">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/trends" className="text-sm text-gray-600 hover:text-prophet-blue">
                  Price Trends
                </Link>
              </li>
              <li>
                <Link to="/alerts" className="text-sm text-gray-600 hover:text-prophet-blue">
                  Price Alerts
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><span className="text-sm text-gray-600">Smartphones</span></li>
              <li><span className="text-sm text-gray-600">Laptops</span></li>
              <li><span className="text-sm text-gray-600">Tablets</span></li>
              <li><span className="text-sm text-gray-600">Headphones</span></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><span className="text-sm text-gray-600">Help Center</span></li>
              <li><span className="text-sm text-gray-600">Privacy Policy</span></li>
              <li><span className="text-sm text-gray-600">Terms of Service</span></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} Price Prophet. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
