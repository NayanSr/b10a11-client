import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              {/* Left Section: Description */}
              <div className="mb-6 md:mb-0">
                <h2 className="text-xl font-bold mb-2">Historical Artifact</h2>
                <p className="text-sm text-gray-400 max-w-md">
                  Discover the rich history and cultural significance of ancient artifacts from around the world.
                </p>
              </div>
    
              {/* Right Section: Links */}
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  About
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  Contact
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  Privacy Policy
                </a>
              </div>
            </div>
    
            {/* Copyright */}
            <div className="border-t-2 border-purple-800 mt-6 pt-6 text-center text-gray-400 text-sm">
              &copy; 2023 Historical Artifact. All rights reserved.
            </div>
          </div>
        </footer>
      );
};

export default Footer;
