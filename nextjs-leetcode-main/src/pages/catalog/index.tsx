import React from "react";
import {Link} from 'react-router-dom';

type CatalogPageProps = {};

const CatalogPage: React.FC<CatalogPageProps> = () => {
    return (
        <div className='bg-gradient-to-b from-gray-600 to-black h-screen relative'>
            <h1>Catalog Page</h1>
            <p>Welcome to the Code Cadet Community!</p>
            <h2>
            <Link to="/">Back to home</Link>
            </h2>
        </div>
    );
}
export default CatalogPage;