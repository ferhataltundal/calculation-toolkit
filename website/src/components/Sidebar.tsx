import { docLinks } from "@/constants/links";
import { NavLink } from "react-router-dom";

const CustomNavLink = ({ name, path }: { path: string; name: string }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive, isPending }) =>
        isPending
          ? "text-muted-foreground hover:text-gray-600 text-sm"
          : isActive
          ? "text-gray-800 font-medium  text-sm"
          : "text-muted-foreground hover:text-gray-600  text-sm"
      }
    >
      {name}
    </NavLink>
  );
};

const DocumentationSide = ({
  menu,
  links,
}: {
  menu: string;
  links: {
    name: string;
    path: string;
  }[];
}) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <h3 className="font-bold  text-gray-600 mt-5">{menu}</h3>
      {links.map((item, idx) => (
        <CustomNavLink key={idx} name={item.name} path={item.path} />
      ))}
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="sticky h-screen left-0 border border-gray-200 w-full max-w-[250px] overflow-auto p-5 use-custom-scroll">
      <DocumentationSide
        menu="Getting Started"
        links={docLinks.gettingStarted}
      />
      <DocumentationSide menu="Converters" links={docLinks.converters} />
      <DocumentationSide menu="Commons" links={docLinks.commons} />
      <DocumentationSide menu="Area Calculation" links={docLinks.areas} />
      <DocumentationSide menu="Volume Calculation" links={docLinks.volumes} />
      <DocumentationSide
        menu="Perimeter Calculation"
        links={docLinks.perimeters}
      />
      <DocumentationSide
        menu="Currency Calculation"
        links={docLinks.currency}
      />
      <DocumentationSide menu="Shuffle Calculation" links={docLinks.shuffle} />
    </div>
  );
};

export default Sidebar;
