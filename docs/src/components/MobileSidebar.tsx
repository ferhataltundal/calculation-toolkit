import { Link, NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { AlignJustify, Heart } from "lucide-react";
import SearchDialog from "./SearchDialog";
const MobileSidebar = () => {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="w-8 h-8 p-0">
            <AlignJustify size={16} />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="flex flex-col p-0 w-[250px] max-xs:w-full md:hidden"
        >
          <div className="flex w-full flex-col mt-10 p-5 gap-5">
            <SearchDialog />
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
            <Link
              to="https://www.buymeacoffee.com/ferhat.altundal"
              className="flex rounded-md w-max flex-row flex-nowrap items-center justify-center gap-3 text-xs hover:text-red-900 transition-all"
              target="_blank"
            >
              <Heart size={15} strokeWidth={1} className="" />
              Support Developer
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileSidebar;
