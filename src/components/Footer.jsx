import React from "react";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-2 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
          cupiditate.
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <FaFacebookSquare className="hover:cursor-pointer hover:text-[#00df9a] hover:scale-125" size={30} />
          <FaInstagram className="hover:cursor-pointer hover:text-[#00df9a] hover:scale-125" size={30} />
          <FaTwitterSquare className="hover:cursor-pointer hover:text-[#00df9a] hover:scale-125" size={30} />
          <FaGithubSquare className="hover:cursor-pointer hover:text-[#00df9a] hover:scale-125" size={30} />
        </div>
      </div>
      <div className="lg-col-span-3 flex justify-between mt-6">
        <div className="mx-3">
            <h6 className="font-medium text-gray-400">Solutions</h6>
            <ul>
                <li className="py-2 text-sm">Analytics</li>
                <li className="py-2 text-sm">Marketing</li>
                <li className="py-2 text-sm">Commerce</li>
                <li className="py-2 text-sm">Insights</li>
            </ul>
        </div>
        <div className="mx-3">
            <h6 className="font-medium text-gray-400">Support</h6>
            <ul>
                <li className="py-2 text-sm">Pricing</li>
                <li className="py-2 text-sm">Documentation</li>
                <li className="py-2 text-sm">Guides</li>
                <li className="py-2 text-sm">API Status</li>
            </ul>
        </div>
        <div className="mx-3">
            <h6 className="font-medium text-gray-400">Company</h6>
            <ul>
                <li className="py-2 text-sm">About</li>
                <li className="py-2 text-sm">Blog</li>
                <li className="py-2 text-sm">Jobs</li>
                <li className="py-2 text-sm">Press</li>
                <li className="py-2 text-sm">Careers</li>
            </ul>
        </div>
        <div className="mx-3">
            <h6 className="font-medium text-gray-400">Legal</h6>
            <ul>
                <li className="py-2 text-sm">Claim</li>
                <li className="py-2 text-sm">Policy</li>
                <li className="py-2 text-sm">Terms</li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
