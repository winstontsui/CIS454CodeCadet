import React, { useState } from 'react';
import Topbar from "@/components/Topbar/Topbar";
import SideBar from '@/components/CatalogPageSideBar/SideBar'; // Check the file path and casing
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faFacebook,
  faInstagram,
  faTwitter,
  faPatreon,
} from "@fortawesome/free-brands-svg-icons";

const CatalogPage: React.FC = () => {

  return (
    <main>
      <Topbar />
      <div className="bg-purple-200 min-h-screen text-white flex">
        {/* Sidebar */}
        <SideBar></SideBar>

        {/* Main Content */}
        <div className="w-4/5">
          <div
            className="flex justify-center items-center h-44 bg-cover bg-center"
            style={{ backgroundImage: 'url("/community-background.jpg")' }}
          >
            {/* Replace "/community-background.jpg" with the actual path to your background image */}
            <h1 className="text-4xl font-bold text-black">
              Catalog Page
            </h1>
          </div>
          <div className="container mx-auto mt">
            {/* Social Media Icons */}
            <div className="flex justify-center space-x-4 mb-8">
            <a
              href="https://discord.gg/YFTnyWDW"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faDiscord}
                size="2x"
                className="text-blue-500 hover:text-blue-400"
              />
            </a>
            <a
              href="https://www.facebook.com/winston.tsui.796"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                size="2x"
                className="text-blue-500 hover:text-blue-400"
              />
            </a>
            <a
              href="https://www.instagram.com/lawrencee_chen/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                size="2x"
                className="text-pink-500 hover:text-pink-400"
              />
            </a>
            <a
              href="https://twitter.com/elonmusk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faTwitter}
                size="2x"
                className="text-blue-400 hover:text-blue-300"
              />
            </a>
            <a
              href="https://www.patreon.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faPatreon}
                size="2x"
                className="text-orange-500 hover:text-orange-400"
              />
            </a>
          </div>
            <h4 className="mb-4 ml-8 text-2xl font-semi-bold text-black">
              Current Courses:
            </h4>
            {/* Content */}
          </div>
        </div>
      </div>

      
    </main>
  );
};

export default CatalogPage;