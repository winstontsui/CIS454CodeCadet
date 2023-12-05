import React, { useState } from 'react';
import Topbar from "@/components/Topbar/Topbar";
import SideBar from '@/components/CatalogPageSideBar/SideBar'; // Check the file path and casing
import SocialMediaLinks from '@/components/SocialMediaLinks/SocialMediaLinks';


const CatalogPage: React.FC = () => {

  return (
    <main>
      <Topbar />
      <div className="bg-purple-200 min-h-screen text-white flex">
        <SideBar></SideBar>
        
        <SocialMediaLinks></SocialMediaLinks>
        
      </div>

      
    </main>
  );
};

export default CatalogPage;