import { useState, useEffect } from "react";
import { AiOutlineFullscreen, AiOutlineFullscreenExit, AiOutlineSetting } from "react-icons/ai";
import { ISettings } from "../Playground";
import SettingsModal from "@/components/Modals/SettingsModal";

type PreferenceNavProps = {
	settings: ISettings;
	setSettings: React.Dispatch<React.SetStateAction<ISettings>>;
	handleLanguageChange: (language: string) => void;
};

const PreferenceNav: React.FC<PreferenceNavProps> = ({ setSettings, settings, handleLanguageChange }) => {
	const [isFullScreen, setIsFullScreen] = useState(false);
	const [showLanguages, setShowLanguages] = useState(false);

	const handleFullScreen = () => {
		if (isFullScreen) {
			document.exitFullscreen();
		} else {
			document.documentElement.requestFullscreen();
		}
		setIsFullScreen(!isFullScreen);
	};

	const toggleLanguages = () => {
		setShowLanguages((prev) => !prev);
	  };

	useEffect(() => {
		function exitHandler(e: any) {
			if (!document.fullscreenElement) {
				setIsFullScreen(false);
				return;
			}
			setIsFullScreen(true);
		}

		if (document.addEventListener) {
			document.addEventListener("fullscreenchange", exitHandler);
			document.addEventListener("webkitfullscreenchange", exitHandler);
			document.addEventListener("mozfullscreenchange", exitHandler);
			document.addEventListener("MSFullscreenChange", exitHandler);
		}
	}, [isFullScreen]);

	return (
		<div className='flex items-center justify-between bg-dark-layer-2 h-11 w-full '>
			<div className='flex items-center text-white'>
			<div className='relative inline-block text-left'>
          <button
            onClick={toggleLanguages}
            className='flex cursor-pointer items-center rounded focus:outline-none bg-dark-fill-3 text-dark-label-2 hover:bg-dark-fill-2 px-2 py-1.5 font-medium'
          >
            <div className='flex items-center px-1'>
              <div className='text-xs text-label-2 dark:text-dark-label-2'>{settings.language}</div>
            </div>
            <svg
              className='w-3 h-3 ml-2 -mr-1 fill-current dark:text-dark-label-2'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 320 512'
            >
              <path
                fill='currentColor'
                d='M160 496l160-160H0l160 160zm0-320L0 336h320L160 176z'
              ></path>
            </svg>
          </button>
          {showLanguages && (
            <div className='origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-dark-layer-2 ring-1 ring-black ring-opacity-5'>
              <div
                className='py-1'
                role='menu'
                aria-orientation='vertical'
                aria-labelledby='options-menu'
              >
                <div
                  onClick={() => {
                    handleLanguageChange("javascript");
                    toggleLanguages();
                  }}
                  className='px-4 py-2 cursor-pointer hover:bg-dark-fill-2'
                >
                  JavaScript
                </div>
                <div
                  onClick={() => {
                    handleLanguageChange("python");
                    toggleLanguages();
                  }}
                  className='px-4 py-2 cursor-pointer hover:bg-dark-fill-2'
                >
                  Python
                </div>
                <div
                  onClick={() => {
                    handleLanguageChange("java");
                    toggleLanguages();
                  }}
                  className='px-4 py-2 cursor-pointer hover:bg-dark-fill-2'
                >
                  Java
                </div>
              </div>
            </div>
          )}
        </div>
      </div>


			<div className='flex items-center m-2'>
				<button
					className='preferenceBtn group'
					onClick={() => setSettings({ ...settings, settingsModalIsOpen: true })}
				>
					<div className='h-4 w-4 text-dark-gray-6 font-bold text-lg'>
						<AiOutlineSetting />
					</div>
					<div className='preferenceBtn-tooltip'>Settings</div>
				</button>

				<button className='preferenceBtn group' onClick={handleFullScreen}>
					<div className='h-4 w-4 text-dark-gray-6 font-bold text-lg'>
						{!isFullScreen ? <AiOutlineFullscreen /> : <AiOutlineFullscreenExit />}
					</div>
					<div className='preferenceBtn-tooltip'>Full Screen</div>
				</button>
			</div>
			{settings.settingsModalIsOpen && <SettingsModal settings={settings} setSettings={setSettings} />}
		</div>
	);
};
export default PreferenceNav;
