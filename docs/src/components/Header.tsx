import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { Heart } from "lucide-react";
import SearchDialog from "./SearchDialog";
import MobileSidebar from "./MobileSidebar";

const Header = () => {
  return (
    <header className="flex items-center justify-center flex-row w-full h-[50px] p-5 sticky top-0 left-0 z-[10] border border-gray-200">
      <div className="flex flex-row items-center justify-between w-full max-w-[1400px] gap-10">
        <Link to="/">
          <div className="max-w-[60px] ">
            <img src={logo} alt="logo" />
          </div>
        </Link>
        <div className="w-full flex items-center gap-5 text-muted-foreground text-sm font-medium transition-all max-md:hidden">
          <NavLink
            to="/docs"
            className={({ isActive, isPending }) =>
              isPending
                ? "text-muted-foreground hover:text-gray-600"
                : isActive
                ? "text-gray-800"
                : "text-muted-foreground hover:text-gray-600"
            }
          >
            Docs
          </NavLink>
          <NavLink
            to="/examples"
            className={({ isActive, isPending }) =>
              isPending
                ? "text-muted-foreground hover:text-gray-600"
                : isActive
                ? "text-gray-800"
                : "text-muted-foreground hover:text-gray-600"
            }
          >
            Examples
          </NavLink>
          <NavLink
            to="/developers"
            className={({ isActive, isPending }) =>
              isPending
                ? "text-muted-foreground hover:text-gray-600"
                : isActive
                ? "text-gray-800"
                : "text-muted-foreground hover:text-gray-600"
            }
          >
            Developers
          </NavLink>
          <Link
            to="https://github.com/ferhataltundal/calculation-toolkit.git"
            target="_blank"
            className="hover:text-gray-600"
          >
            Github
          </Link>
          <Link
            to="https://www.npmjs.com/package/calculation-toolkit"
            target="_blank"
            className="hover:text-gray-600"
          >
            NPM
          </Link>
        </div>
        <div className="w-full max-w-[400px] flex items-center justify-between max-md:hidden">
          <SearchDialog />
          <Link
            to="https://www.buymeacoffee.com/ferhat.altundal"
            className="flex rounded-md w-max flex-row flex-nowrap items-center justify-center gap-3 text-xs hover:text-red-900 transition-all"
            target="_blank"
          >
            <Heart size={15} strokeWidth={1} className="" />
            Support Developer
          </Link>
        </div>

        <div className="hidden max-md:flex items-center justify-center p-1">
          <MobileSidebar />
        </div>
      </div>
    </header>
  );
};

export default Header;
