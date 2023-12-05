import { authModalState } from "@/atoms/authModalAtom";
import AuthModal from "@/components/Modals/AuthModal";
import Topbar from "@/components/Topbar/Topbar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase";
import { useRecoilValue } from "recoil";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
type AuthPageProps = {};

const AuthPage: React.FC<AuthPageProps> = () => {
	const authModal = useRecoilValue(authModalState);
	const [user, loading, error] = useAuthState(auth);
	const [pageLoading, setPageLoading] = useState(true);
	const router = useRouter();

	/* if a user is authenticated, directs them to home page */
	useEffect(() => {
		if (user) router.push("/");
		if (!loading && !user) setPageLoading(false);
	}, [user, router, loading]);

	if (pageLoading) {
		return (
		  <main>
			{/* Loading state, you can render a loader here if needed */}
			Loading...
			{authModal.isOpen && <AuthModal />}
		  </main>
		);
	  }

	return (
		<>
      {/* Separate rendering for Topbar outside the main element */}
      <Topbar />

      <main>
        <div className="bg-gradient-to-b from-gray-600 to-black h-screen relative">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-extrabold text-white text-center mt-8 mb-8"></h1>
            {authModal.isOpen && <AuthModal />}
          </div>
        </div>
      </main>
    </>
	);
};
export default AuthPage;
