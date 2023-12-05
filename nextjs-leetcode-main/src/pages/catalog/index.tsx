import React, { useState } from 'react';
import Topbar from "@/components/Topbar/Topbar";
import SideBar from '@/components/CatalogPageSideBar/SideBar'; // Check the file path and casing

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