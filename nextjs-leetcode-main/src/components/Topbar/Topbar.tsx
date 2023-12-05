import { auth } from "@/firebase/firebase";
import Link from "next/link";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Logout from "../Buttons/Logout";
import { useSetRecoilState } from "recoil";
import { authModalState } from "@/atoms/authModalAtom";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BsList } from "react-icons/bs";
import Timer from "../Timer/Timer";
import { useRouter } from "next/router";
import { problems } from "@/utils/problems";
import { Problem } from "@/utils/types/problem";

type TopbarProps = {
  problemPage?: boolean;
};

const Topbar: React.FC<TopbarProps> = ({ problemPage }) => {
  const [user] = useAuthState(auth);
  const setAuthModalState = useSetRecoilState(authModalState);
  const router = useRouter();

  /* 
 		handleProblemChange function 
   		--> based on the three conditions, router.push will display the corresponding problem to the workspace 
   	*/
  const handleProblemChange = (isForward: boolean) => {
    const { order } = problems[router.query.pid as string] as Problem;
    const direction = isForward ? 1 : -1;
    const nextProblemOrder = order + direction;
    const nextProblemKey = Object.keys(problems).find(
      (key) => problems[key].order === nextProblemOrder
    );

    if (isForward && !nextProblemKey) {
      const firstProblemKey = Object.keys(problems).find(
        (key) => problems[key].order === 1
      );
      router.push(`/problems/${firstProblemKey}`);
    } else if (!isForward && !nextProblemKey) {
      const lastProblemKey = Object.keys(problems).find(
        (key) => problems[key].order === Object.keys(problems).length
      );
      router.push(`/problems/${lastProblemKey}`);
    } else {
      router.push(`/problems/${nextProblemKey}`);
    }
  };

  return (
    <nav className="fixed flex h-[50px] w-full shrink-0 items-center px-5 bg-dark-layer-1 text-dark-gray-7">
      <div className="flex w-full items-center justify-between max-w-[1200px] mx-auto">
        <div className="relative top-2 left-2">
          <Link href="/">
            <Image src="/logo-full.png" alt="Logo" height={40} width={120} />
          </Link>
        </div>

        <table className="mx-12 text-sm text-left text-gray-500 dark:text-gray-400 sm:w-7/12 w-full max-w-[1200px]">
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

        {problemPage && (
          <div className="flex items-center gap-4 flex-1 justify-center">
            <div
              className="flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 h-8 w-8 cursor-pointer"
              onClick={() => handleProblemChange(false)}
            >
              <FaChevronLeft /> {/* react icons */}
            </div>
            <Link
              href="/"
              className="flex items-center gap-2 font-medium max-w-[170px] text-dark-gray-8 cursor-pointer"
            >
              <div>
                <BsList />
              </div>
              <p>Problem List</p>
            </Link>
            <div
              className="flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 h-8 w-8 cursor-pointer"
              onClick={() => handleProblemChange(true)}
            >
              <FaChevronRight /> {/* react icons */}
            </div>
          </div>
        )}

        <div className="flex items-center space-x-4 flex-1 justify-end">
          {/* when user is not signed in yet */}
          {!user && (
            <Link
              href="/auth"
              onClick={() =>
                setAuthModalState((prev) => ({
                  ...prev,
                  isOpen: true,
                  type: "login",
                }))
              }
            >
              <button className="bg-dark-fill-3 py-1 px-2 cursor-pointer rounded ">
                Sign In
              </button>
            </Link>
          )}
          {user && problemPage && <Timer />}
          {/* if the user is authenticated, there will be a avatar of the user, when hovered over, user email will appear */}
          {user && (
            <div style={{ position: "relative", top: "20px", right: "-100px", zIndex: "999" }}>
              <Link href="/profile">
                <Image
                  src="/avatar.png"
                  alt="Avatar"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </Link>

              <div
                className="top-10 left-2/4 -translate-x-2/4  mx-auto bg-dark-layer-1 text-brand-orange p-2 rounded shadow-lg 
								z-40 group-hover:scale-100 scale-0 
								transition-all duration-300 ease-in-out"
              >
                <p className="text-sm">{user.email}</p>
              </div>
            </div>
          )}
          {user && <Logout />}
        </div>
      </div>
    </nav>
  );
};
export default Topbar;
