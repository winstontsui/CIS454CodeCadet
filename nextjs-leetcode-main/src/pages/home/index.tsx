import React from "react";
import { authModalState } from "@/atoms/authModalAtom";
import AuthModal from "@/components/Modals/AuthModal";
import Navbar from "@/components/Navbar/Navbar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase";
import { useRecoilValue } from "recoil";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

type HomePageProps = {};

const HomePage: React.FC<HomePageProps> = () => {
    const authModal = useRecoilValue(authModalState);
	const [user, loading, error] = useAuthState(auth);	//checks if user is loged in
	const [pageLoading, setPageLoading] = useState(true);
	const router = useRouter();

    /* if a user exists, directs them to root home page */
	useEffect(() => {
		if (user) router.push("/");
		if (!loading && !user) setPageLoading(false);
	}, [user, router, loading]);

	if (pageLoading) return null;

    return (
        <div className='bg-gradient-to-b from-gray-600 to-black h-screen relative'>
            <h1>Home Page</h1>
            <p>Welcome to the Code Cadet!</p>
            <h2>
                hi there
            </h2>
        </div>
    );
}
export default HomePage;