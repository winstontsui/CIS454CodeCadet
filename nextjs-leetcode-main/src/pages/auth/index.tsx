import { authModalState } from "@/atoms/authModalAtom";
import AuthModal from "@/components/Modals/AuthModal";
import Navbar from "@/components/Navbar/Navbar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase";
import { useRecoilValue } from "recoil";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
type AuthPageProps = {};

const AuthPage: React.FC<AuthPageProps> = () => {
	const authModal = useRecoilValue(authModalState);
	const [user, loading, error] = useAuthState(auth);	//checks if user is loged in
	const [pageLoading, setPageLoading] = useState(true);
	const router = useRouter();

	/* if a user exists, directs them to root home page */
	useEffect(() => {
		if (user) router.push("/");		//changed from / to home
		if (!loading && !user) setPageLoading(false);
	}, [user, router, loading]);

	if (pageLoading) return null;

	return (
		<div className='bg-gradient-to-b from-gray-600 to-black h-screen relative'>
			<div className='max-w-7xl mx-auto'>
				<Navbar />
				<h1 className='text-4xl font-extrabold text-white text-center mt-20 mb-20'>Log out successful</h1>
				{authModal.isOpen && <AuthModal />} {/*only shows the auth modal components if its open*/}
			</div>
		</div>
	);
};
export default AuthPage;
