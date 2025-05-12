import React from 'react';

const Contact = () => {
    return (
         <div className="space-y-3 lg:w-[1400px]">
      <h3 className="text-lg font-semibold text-gray-900">Contact Us</h3>
      <p className="text-gray-900 text-sm">
        Have questions about our collection or want to collaborate? Reach out to our team.
      </p>
      
      <ul className="space-y-2 text-gray-900 text-sm">
        <li className="flex items-start gap-2">
          <span className="">📧</span>
          <a 
            href="mailto:contact@artifactsarchive.com" 
            className="hover: transition-colors"
          >
            contact@artifactsarchive.com
          </a>
        </li>
        <li className="flex items-start gap-2">
          <span className="">🏛️</span>
          <span>123 Museum Way, Heritage City</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="">🕒</span>
          <span>Mon-Fri: 9AM-5PM</span>
        </li>
      </ul>

      <div className="pt-2 flex gap-4">
        <a 
          href="/contact" 
          className=" hover:text-amber-200 text-sm font-medium transition-colors"
        >
          Contact Form →
        </a>
        <div className="flex gap-3">
          <a href="#" className=" hover:text-gray-300 transition-colors">
            <span className="sr-only">Twitter</span>
            <span aria-hidden="true">𝕏</span>
          </a>
          <a href="#" className=" hover:text-gray-300 transition-colors">
            <span className="sr-only">Instagram</span>
            <span aria-hidden="true">📸</span>
          </a>
        </div>
      </div>
    </div>
    );
};

export default Contact;