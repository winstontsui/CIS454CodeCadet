import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faFacebook, faInstagram, faTwitter, faPatreon } from '@fortawesome/free-brands-svg-icons';
import Topbar from "@/components/Topbar/Topbar";

const CommunityPage: React.FC = () => {
  return (
    <main>
      <Topbar />
      <div className="bg-gray-900 min-h-screen text-white">
        <div className="flex justify-center items-center h-64 bg-cover bg-center" style={{ backgroundImage: 'url("/community-background.jpg")' }}>
          {/* Replace "/community-background.jpg" with the actual path to your background image */}
          <h1 className="text-4xl font-bold text-white">Welcome to Our Community</h1>
        </div>
        <div className="container mx-auto mt-8">
          {/* Social Media Icons */}
          <div className="flex justify-center space-x-4 mb-8">
            <a href="https://discord.gg/YFTnyWDW" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faDiscord} size="2x" className="text-blue-500 hover:text-blue-400" />
            </a>
            <a href="https://www.facebook.com/winston.tsui.796" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} size="2x" className="text-blue-500 hover:text-blue-400" />
            </a>
            <a href="https://www.instagram.com/lawrencee_chen/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" className="text-pink-500 hover:text-pink-400" />
            </a>
            <a href="https://twitter.com/elonmusk" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} size="2x" className="text-blue-400 hover:text-blue-300" />
            </a>
            <a href="https://www.patreon.com/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faPatreon} size="2x" className="text-orange-500 hover:text-orange-400" />
            </a>
          </div>
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Add your community content here, e.g., cards, posts, etc. */}
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">Community Event 1</h2>
              <p className="text-gray-700">Description of the event...</p>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Read More</button>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">Community Event 2</h2>
              <p className="text-gray-700">Description of the event...</p>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Read More</button>
            </div>
            {/* Repeat similar blocks for more events */}
          </section>
        </div>
      </div>
    </main>
  );
};

export default CommunityPage;