import { atom } from "recoil";

type AuthModalState = {
	isOpen: boolean;
	type: "login" | "register" | "forgotPassword";
};

const initalAuthModalState: AuthModalState = {
	isOpen: false,
	type: "login",
};

export const authModalState = atom<AuthModalState>({
	/* the key that allows the recoil to know which state its using*/
	key: "authModalState",
	default: initalAuthModalState,	//our inital state for authentication is always the login state
});
