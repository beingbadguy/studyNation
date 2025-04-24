"use client";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        <div>
          <h2 className="text-xl font-[400]">
            Edu<span className="text-green-500 ">Nation</span>
          </h2>
          <p className="mt-2 text-gray-600">
            Your all-in-one CBSE learning hub. Smarter. Faster. Together.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:text-green-700">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-700">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-700">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-700">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Resources</h3>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:text-green-700">
                Sample Papers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-700">
                Quizzes
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-700">
                Assignments
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-700">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4 text-green-700">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 py-4 border-t border-gray-200">
        © {new Date().getFullYear()} EduNation. All rights reserved.
      </div>
    </footer>
  );
}
