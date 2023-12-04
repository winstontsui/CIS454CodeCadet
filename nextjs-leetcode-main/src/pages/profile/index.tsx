import React from 'react';
import Image from "next/image";
import { FaEnvelope, FaBell, FaSignOutAlt, FaPen, FaFacebook, FaTwitter, FaInstagram, FaInvision, FaGithub, FaWhatsapp, FaSnapchat } from "react-icons/fa";

import Topbar from "@/components/Topbar/Topbar";

const ProfilePage: React.FC = () => {
  return (
    <main>
        <Topbar />
    <div className="bg-black min-h-screen text-white">
      <h1 className="text-2xl text-center pt-10">Profile Page</h1>
      {/* Add your content for the Profile page here */}
      <div className="flex h-screen bg-gray-50">
      {/* Sidenav */}
      <div className="w-1/6 bg-gray-800 text-white p-4">
        <div className="flex items-center justify-center">
        <img src="/pfp.png" alt="Profile" className="rounded-full" width={150} height={150} />
        </div>
        <div className="mt-4">
          <div className="mb-2">
            <a href="#profile" className="block text-gray-300 hover:text-white">Profile</a>
          </div>
          <div className="mb-2">
            <a href="#settings" className="block text-gray-300 hover:text-white">Settings</a>
          </div>
        </div>
      </div>
      {/* End Sidenav */}

      {/* Main Content */}
      <div className="w-3/4 p-8">
        {/* Navbar top */}
        <div className="flex justify-between items-center bg-gray-700 text-white p-4">
          <div className="text-2xl font-bold">Profile</div>
          <ul className="flex">
            <li className="mr-4">
              <a href="#message" className="flex items-center">
                <span className="mr-2">29</span>
                <FaEnvelope className="text-2xl" />
              </a>
            </li>
            <li className="mr-4">
              <a href="#notification" className="flex items-center">
                <span className="mr-2">59</span>
                <FaBell className="text-2xl" />
              </a>
            </li>
            <li>
              <a href="#sign-out" className="flex items-center">
                <FaSignOutAlt className="text-2xl" />
              </a>
            </li>
          </ul>
        </div>
        {/* End Navbar top */}

        {/* Identity */}
        <div className="mt-8">
          <h2 className="text-2xl mb-4">IDENTITY</h2>
          <div className="card bg-white p-4 relative">
            <FaPen className="absolute top-2 right-2 text-gray-500 cursor-pointer" />
            <table className="w-full">
              <tbody>
                <tr>
                  <td className="font-bold">Name</td>
                  <td>:</td>
                  <td>ImDezCode</td>
                </tr>
                <tr>
                  <td className="font-bold">Email</td>
                  <td>:</td>
                  <td>imdezcode@gmail.com</td>
                </tr>
                <tr>
                  <td className="font-bold">Address</td>
                  <td>:</td>
                  <td>Bali, Indonesia</td>
                </tr>
                <tr>
                  <td className="font-bold">Hobbies</td>
                  <td>:</td>
                  <td>Diving, Reading Book</td>
                </tr>
                <tr>
                  <td className="font-bold">Job</td>
                  <td>:</td>
                  <td>Web Developer</td>
                </tr>
                <tr>
                  <td className="font-bold">Skill</td>
                  <td>:</td>
                  <td>PHP, HTML, CSS, Java</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* End Identity */}

        {/* Social Media */}
        <div className="mt-8">
          <h2 className="text-2xl mb-4">SOCIAL MEDIA</h2>
          <div className="card bg-white p-4 relative">
            <FaPen className="absolute top-2 right-2 text-gray-500 cursor-pointer" />
            <div className="social-media flex items-center space-x-4">
              <span className="fa-stack fa-sm">
                <i className="fas fa-circle fa-stack-2x"></i>
                <FaFacebook className="text-white fa-stack-1x fa-inverse" />
              </span>
              <span className="fa-stack fa-sm">
                <i className="fas fa-circle fa-stack-2x"></i>
                <FaTwitter className="text-white fa-stack-1x fa-inverse" />
              </span>
              <span className="fa-stack fa-sm">
                <i className="fas fa-circle fa-stack-2x"></i>
                <FaInstagram className="text-white fa-stack-1x fa-inverse" />
              </span>
              <span className="fa-stack fa-sm">
                <i className="fas fa-circle fa-stack-2x"></i>
                <FaInvision className="text-white fa-stack-1x fa-inverse" />
              </span>
              <span className="fa-stack fa-sm">
                <i className="fas fa-circle fa-stack-2x"></i>
                <FaGithub className="text-white fa-stack-1x fa-inverse" />
              </span>
              <span className="fa-stack fa-sm">
                <i className="fas fa-circle fa-stack-2x"></i>
                <FaWhatsapp className="text-white fa-stack-1x fa-inverse" />
              </span>
              <span className="fa-stack fa-sm">
                <i className="fas fa-circle fa-stack-2x"></i>
                <FaSnapchat className="text-white fa-stack-1x fa-inverse" />
              </span>
            </div>
          </div>
        </div>
        {/* End Social Media */}
      </div>
      </div>
      
    </div>
    </main>
  );
};

export default ProfilePage;