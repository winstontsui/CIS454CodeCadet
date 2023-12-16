import { authModalState } from "@/atoms/authModalAtom";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSetRecoilState } from "recoil";
type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
	const setAuthModalState = useSetRecoilState(authModalState);
	const handleClick = () => {
		setAuthModalState((prev) => ({ ...prev, isOpen: true }));
	};
	return (
		<div className='flex items-center justify-between sm:px-12 px-2 md:px-24'>
			<Link href='/' className='flex items-center justify-center h-20'>
				<Image src='/logo.png' alt='Code Cadet' height={75} width={75} style={{marginTop: '40px'}}/>
			</Link>
		<table className="text-sm text-left text-gray-500 dark:text-gray-400 sm:w-7/12 w-full max-w-[1200px] mx-auto">
        
		<table className="mx-20 text-sm text-left text-gray-500 dark:text-gray-400 sm:w-7/12 w-full max-w-[1200px]">
          <thead className="text-xs text-white dark:text-gray-400 border-b w-full">
            <tr>
              <th
                scope="col"
                className="px-10 py-4 font-medium mb-2 mt-4 whitespace-nowrap text-center hover:text-blue-500"
              >
                <h1 className="community-title">
                  <Link href="/community">Community</Link>
                </h1>
              </th>
              <th
                scope="col"
                className="px-10 py-4 font-medium mb-2 mt-4 whitespace-nowrap text-center hover:text-blue-500"
              >
                <h1 className="catalog-title">
                  <Link href="/catalog">Catalog</Link>
                </h1>
              </th>
            </tr>
          </thead>
        </table>

        </table>
			<div className='flex items-center'>
				<button
					className='bg-brand-orange text-white px-2 py-1 sm:px-4 rounded-md text-sm font-medium
                hover:text-brand-orange hover:bg-white hover:border-2 hover:border-brand-orange border-2 border-transparent
                transition duration-300 ease-in-out
                '
					onClick={handleClick}
				>
					Sign In
				</button>
			</div>
		</div>
	);
};
export default Navbar;
