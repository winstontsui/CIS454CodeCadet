import { authModalState } from "@/atoms/authModalAtom";
import { auth, firestore } from "@/firebase/firebase";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

type SignupProps = {};

const Signup: React.FC<SignupProps> = () => {
	const setAuthModalState = useSetRecoilState(authModalState);
	const handleClick = () => {
		setAuthModalState((prev) => ({ ...prev, type: "login" }));
	};
	//signup states, such as email, dispplayName, and password
	const [inputs, setInputs] = useState({ email: "", displayName: "", password: "" });
	const router = useRouter();
	//states for creating the user with email and password
	//user
	//loading <- when the user info is processing
	//error <- when user inputs any invalid credentials, such as duplicate email for new user
	const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
	/*	
		handleChangInput function: 
		-> used to handle user inputs
		-> would only update the specifc input state
		-> if user inputs email, only email will be updated 
		-> other two state values would not be updated. Updates seperately
	*/
	const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	/*	
		handleRegister function: 
		-> used to handle registeration
		-> if input is not valid, alert message is shown
		-> else, if there isn't a user, simply returns, 
		->		-> else, 
	*/
	const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!inputs.email || !inputs.password || !inputs.displayName) return alert("Please fill all fields");
		try {
			toast.loading("Creating your account", { position: "top-center", toastId: "loadingToast" });
			const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password);
			if (!newUser) return;
			const userData = {
				uid: newUser.user.uid,
				email: newUser.user.email,
				displayName: inputs.displayName,
				createdAt: Date.now(),
				updatedAt: Date.now(),
				likedProblems: [],
				dislikedProblems: [],
				solvedProblems: [],
				starredProblems: [],
			};
			await setDoc(doc(firestore, "users", newUser.user.uid), userData);
			router.push("/");	//redirects user to root homepage
		} catch (error: any) {
			toast.error(error.message, { position: "top-center" });
		} finally {
			toast.dismiss("loadingToast");
		}
	};

	/* For error handling */
	useEffect(() => {
		if (error) alert(error.message);
	}, [error]);

	return (
		<form className='space-y-6 px-6 pb-4' onSubmit={handleRegister}>
			<h3 className='text-xl font-medium text-white'>Register to Code Cadet</h3>
			<div>
				<label htmlFor='email' className='text-sm font-medium block mb-2 text-gray-300'>
					Email
				</label>
				<input
					onChange={handleChangeInput}
					type='email'
					name='email'
					id='email'
					className='
        border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
        bg-gray-600 border-gray-500 placeholder-gray-400 text-white
    '
					placeholder='name@email.com'
				/>
			</div>
			<div>
				<label htmlFor='displayName' className='text-sm font-medium block mb-2 text-gray-300'>
					Display Name
				</label>
				<input
					onChange={handleChangeInput}
					type='displayName'
					name='displayName'
					id='displayName'
					className='
        border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
        bg-gray-600 border-gray-500 placeholder-gray-400 text-white
    '
					placeholder='Cadet'
				/>
			</div>
			<div>
				<label htmlFor='password' className='text-sm font-medium block mb-2 text-gray-300'>
					Password
				</label>
				<input
					onChange={handleChangeInput}
					type='password'
					name='password'
					id='password'
					className='
        border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
        bg-gray-600 border-gray-500 placeholder-gray-400 text-white
    '
					placeholder='*******'
				/>
			</div>

			<button
				type='submit'
				className='w-full text-white focus:ring-blue-300 font-medium rounded-lg
            text-sm px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s
        '
			>
				{/*loading states. If its loading, outputs "Registering", else, "Register"*/}
				{loading ? "Registering..." : "Register"}
			</button>

			<div className='text-sm font-medium text-gray-300'>
				Already have an account?{" "}
				<a href='#' className='text-blue-700 hover:underline' onClick={handleClick}>
					Log In
				</a>
			</div>
		</form>
	);
};
export default Signup;
