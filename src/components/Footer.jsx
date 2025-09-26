import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-16 mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Column 1: Logo & Description */}
        <div>
          <h2 className="text-xl font-bold mb-4">CS — Ticket System</h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
        </div>

        {/* Column 2: Company */}
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>About Us</li>
            <li>Our Mission</li>
            <li>Contact Sales</li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div>
          <h3 className="font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Products & Services</li>
            <li>Customer Stories</li>
            <li>Download Apps</li>
          </ul>
        </div>

        {/* Column 4: Information */}
        <div>
          <h3 className="font-semibold mb-4">Information</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Terms & Conditions</li>
            <li>Join Us</li>
          </ul>
        </div>

        {/* Column 5: Social Links */}
        <div>
          <h3 className="font-semibold mb-4">Social Links</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <FaFacebookF className="text-gray-400 hover:text-white text-xl" />
              @CS-TicketSystem
            </li>
            <li className="flex items-center gap-2">
              <FaTwitter className="text-gray-400 hover:text-white text-xl" />
              @CS-TicketSystem
            </li>
            <li className="flex items-center gap-2">
              <FaLinkedinIn className="text-gray-400 hover:text-white text-xl" />
              @CS-TicketSystem
            </li>
            <li className="flex items-center gap-2">
              <FaInstagram className="text-gray-400 hover:text-white text-xl" />
              Support: support@cst.com
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
        © 2025 CS — Ticket System. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

