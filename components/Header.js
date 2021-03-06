import Image from "next/image";
import FbLogo from "../assets/5168781.png";
import HeaderIcon from "./HeaderIcon";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

const rIconsStyle =
  "hidden xl:inline-flex p-2 h-10 w-10 bg-gray-200 rounded-full text-gray-70 cursor-pointer hover:bg-gray-300";

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
      {/* Left */}
      <div className="flex items-center">
        <Image src={FbLogo} width={40} height={40} layout="fixed" />
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 text-gray-600" />

          <input
            type="text"
            placeholder="Search Facebook"
            className="flex ml-2 items-center bg-transparent outline-none placeholder-gray-500"
          />
        </div>
      </div>
      {/* Center */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon active={true} Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>
      {/* Right */}
      <div className="flex items-center sm:space-x-2 justify-end">
        {/* profile pic later */}
        <p className="whitespace-nowrap font-semibold pr-3">Med D. Bouthuri</p>
        <ViewGridIcon className={rIconsStyle} />
        <ChatIcon className={rIconsStyle} />
        <BellIcon className={rIconsStyle} />
        <ChevronDownIcon className={rIconsStyle} />
      </div>
    </header>
  );
}
export default Header;
