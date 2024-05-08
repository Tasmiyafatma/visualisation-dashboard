import searchIcon from "../assets/search.png";
import commandIcon from "../assets/command.png";
import languageIcon from "../assets/language.png";
import lightModeIcon from "../assets/light-mode.png";
import shortcutIcon from "../assets/shortcut.png";
import bellIcon from "../assets/bell.png";
import userProfile from "../assets/user-profile.jpg";

const Header = () => {
  return (
    <div className="w-[78%] p-2 bg-white shadow-lg rounded-md border border-gray-100 flex fixed top-4 left-[18%]">
      <div className="flex-1 flex justify-start items-center gap-4">
        <img src={searchIcon} alt="search-icon" width={26} />
        <p className="text-gray-400">Search</p>
        <img src={commandIcon} alt="command-icon" width={26} />
      </div>
      <div className="flex-1 flex justify-end items-center gap-4">
        <img src={languageIcon} alt="language-icon" width={30} />
        <img src={lightModeIcon} alt="light-mode-icon" width={30} />
        <img src={shortcutIcon} alt="shortcut-icon" width={30} />
        <img src={bellIcon} alt="bell-icon" width={30} />
        <div className="w-14 h-14 rounded-full">
          <img src={userProfile} alt="user-profile" className="w-full h-full object-fill rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Header;
