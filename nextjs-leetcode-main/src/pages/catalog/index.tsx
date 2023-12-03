import React from 'react';
import Topbar from "@/components/Topbar/Topbar";

const CatalogPage: React.FC = () => {
  return (
    <main>
        <Topbar />
    <div className="bg-black min-h-screen text-white">
      <h1 className="text-2xl text-center pt-10">Catalog Page</h1>
      {/* Add your content for the Catalog page here */}
    </div>
    </main>
  );
};

export default CatalogPage;