import Image from "next/image";
import FbLogo from "../assets/5168781.png";
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

function Header() {
  return (
    <div>
      <div>Header</div>
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

      {/* Right */}
    </div>
  );
}
export default Header;