import DocSidebar from "@/components/DocSidebar";
import { Link, Outlet, useLocation } from "react-router-dom";
import { docLinks } from "@/constants/links";
import { useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import HelmetWrapper from "@/components/HelmetWrapper";
import MobileDocSidebar from "@/components/MobileDocSidebar";

export const ActionSingleLeftButton = ({
  name,
  path,
}: {
  name: string;
  path: string;
}) => {
  return (
    <div className="w-full mt-20 flex items-center justify-start">
      <Link
        to={`/docs/${path}`}
        className={cn(
          buttonVariants({
            variant: "outline",
          }),
          "text-gray-800 flex justify-between items-center gap-2"
        )}
      >
        <ChevronLeft size={24} strokeWidth={1} /> {name}
      </Link>
    </div>
  );
};

export const ActionSingleButton = ({
  name,
  path,
}: {
  name: string;
  path: string;
}) => {
  return (
    <div className="w-full mt-20 flex items-center justify-end">
      <Link
        to={`/docs/${path}`}
        className={cn(
          buttonVariants({
            variant: "outline",
          }),
          "text-gray-800 flex justify-between items-center gap-2"
        )}
      >
        {name} <ChevronRight size={24} strokeWidth={1} />
      </Link>
    </div>
  );
};

export const ActionDoubleButton = ({
  firstName,
  firstPath,
  secondName,
  secondPath,
}: {
  firstName: string;
  firstPath: string;
  secondName: string;
  secondPath: string;
}) => {
  return (
    <div className="w-full mt-20 flex items-center justify-between">
      <Link
        to={`/docs/${firstPath}`}
        className={cn(
          buttonVariants({
            variant: "outline",
          }),
          "text-gray-800 flex justify-between items-center gap-2"
        )}
      >
        <ChevronLeft size={24} strokeWidth={1} /> {firstName}
      </Link>

      <Link
        to={`/docs/${secondPath}`}
        className={cn(
          buttonVariants({
            variant: "outline",
          }),
          "text-gray-800 flex justify-between items-center gap-2"
        )}
      >
        {secondName} <ChevronRight size={24} strokeWidth={1} />
      </Link>
    </div>
  );
};
const Docs = () => {
  const { pathname } = useLocation();

  const findMenu = useMemo(() => {
    const allLinks = [];
    const filtered = [
      ...docLinks.gettingStarted,
      ...docLinks.areas,
      ...docLinks.commons,
      ...docLinks.converters,
      ...docLinks.perimeters,
      ...docLinks.shuffle,
      ...docLinks.volumes,
      ...docLinks.currency,
    ];
    for (const values of filtered) {
      allLinks.push(values);
    }
    const menuName = allLinks.find((item) => item.path === pathname)?.name;
    if (pathname === "docs") {
      return <span className="text-muted-foreground">Docs</span>;
    }
    return (
      <span className="w-full flex flex-row items-center gap-1 mb-5">
        <span className="text-muted-foreground">Docs</span>
        <ChevronRight size={18} strokeWidth={1} />
        <span className="text-gray-800">{menuName}</span>
      </span>
    );
  }, [pathname]);

  return (
    <HelmetWrapper
      title="Documentation"
      description="Docs to calculation-toolkit"
    >
      <MobileDocSidebar />
      <div className="relative w-full flex justify-center flex-row gap-10">
        <DocSidebar />
        <div className="w-full flex flex-col p-3 mt-10">
          <div className="max-w-[800px] w-full">
            {findMenu}
            <Outlet />
          </div>
        </div>
      </div>
    </HelmetWrapper>
  );
};

export default Docs;
