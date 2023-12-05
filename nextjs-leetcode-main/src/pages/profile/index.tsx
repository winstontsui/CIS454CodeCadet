import React from 'react';
import { useState } from 'react';
import { auth, firestore} from '@/firebase/firebase'; // Import your Firebase configuration
import { updateEmail, updatePassword } from "firebase/auth";
import { doc, updateDoc } from 'firebase/firestore';

import Image from "next/image";
import { FaEnvelope, FaBell, FaSignOutAlt, FaPen, FaFacebook, FaTwitter, FaInstagram, FaInvision, FaGithub, FaWhatsapp, FaSnapchat } from "react-icons/fa";

import Topbar from "@/components/Topbar/Topbar";
import { FirebaseError } from 'firebase/app';

const ProfilePage: React.FC = () => {
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');

  // Get the current user using useAuthState
  const user = auth.currentUser

  const handleEmailChange = async () => {
    if (user) {
      try {
        await updateEmail(user, newEmail);
        // Update the email in Firestore if you store user data there
        const userDocRef = doc(firestore, 'users', user.uid);
        await updateDoc(userDocRef, { email: newEmail });
        alert('Email updated successfully!');
      } catch (error: any) {
        console.error('Error updating email:', error.message);
        alert('Error updating email. Please try again.');
      }
    } else {
      console.error('User is not authenticated');
      // Handle the case when the user is not authenticated
    }
  };

  const handlePasswordChange = async () => {
    if (user) {
      try {
        await updatePassword(user, newPassword);
        alert('Password updated successfully!');
      } catch (error: any) {
        console.error('Error updating password:', error.message);
        alert('Error updating password. Please try again.');
      }
    } else {
      console.error('User is not authenticated');
      // Handle the case when the user is not authenticated
    }
  };

  return (
    <main>
        <Topbar />
    <div className="bg-black min-h-screen text-black">
      <h1 className="text-2xl text-center pt-10"></h1>
      {/* Add your content for the Profile page here */}
      <div className="flex h-screen bg-gray-50">
      {/* Sidenav */}
      <div className="w-1/6 bg-gray-800 text-black p-4">
        <div className="flex items-center justify-center">
        <img src="/pfp.png" alt="Profile" className="rounded-full" width={150} height={150} />
        </div>
        <div className="mt-4">
          <div className="mb-2">
            <a href="#profile" className="block text-gray-300 hover:text-black">Profile</a>
          </div>
          <div className="mb-2">
            <a href="#settings" className="block text-gray-300 hover:text-black">Settings</a>
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
                <p>{user ? user.displayName : ''}</p>
              </tr>
              <tr>
                <td className="font-bold">Email</td>
                <td>:</td>
                <td>
                  {/*
                    Display the current email and provide an input field to change it
                  */}
                  <div className="flex items-center space-x-2">
                    <p>{user ? user.email : ''}</p>
                    <input
                      type="email"
                      value={newEmail}
                      onChange={(e) => setNewEmail(e.target.value)}
                      placeholder="New Email"
                      className="border p-1"
                    />
                    <button onClick={handleEmailChange} className="border p-1 bg-blue-500 text-white">
                      Change Email
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="font-bold">Password</td>
                <td>:</td>
                <td>
                  <div className="flex items-center space-x-2">
                    <input
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="New Password"
                      className="border p-1"
                    />
                    <button onClick={handlePasswordChange} className="border p-1 bg-blue-500 text-white">
                      Change Password
                    </button>
                  </div>
                </td>
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
                <FaFacebook className="text-black fa-stack-1x fa-inverse" />
              </span>
              <span className="fa-stack fa-sm">
                <i className="fas fa-circle fa-stack-2x"></i>
                <FaTwitter className="text-black fa-stack-1x fa-inverse" />
              </span>
              <span className="fa-stack fa-sm">
                <i className="fas fa-circle fa-stack-2x"></i>
                <FaInstagram className="text-black fa-stack-1x fa-inverse" />
              </span>
              <span className="fa-stack fa-sm">
                <i className="fas fa-circle fa-stack-2x"></i>
                <FaInvision className="text-black fa-stack-1x fa-inverse" />
              </span>
              <span className="fa-stack fa-sm">
                <i className="fas fa-circle fa-stack-2x"></i>
                <FaGithub className="text-black fa-stack-1x fa-inverse" />
              </span>
              <span className="fa-stack fa-sm">
                <i className="fas fa-circle fa-stack-2x"></i>
                <FaWhatsapp className="text-black fa-stack-1x fa-inverse" />
              </span>
              <span className="fa-stack fa-sm">
                <i className="fas fa-circle fa-stack-2x"></i>
                <FaSnapchat className="text-black fa-stack-1x fa-inverse" />
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