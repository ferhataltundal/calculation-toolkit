import { docLinks } from "@/constants/links";
import { DocumentationSide } from "./DocSidebar";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { MenuSquare } from "lucide-react";
export default function MobileDocSidebar() {
  return (
    <div className="hidden max-md:block ml-3 mt-3">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            className="flex justify-between items-center gap-4"
          >
            <MenuSquare size={16} /> Docs
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="flex flex-col p-0 w-[250px] max-xs:w-full md:hidden overflow-auto use-custom-scroll"
        >
          <div className="flex w-full flex-col mt-10 p-5 gap-5">
            <DocumentationSide
              menu="Getting Started"
              links={docLinks.gettingStarted}
            />
            <DocumentationSide menu="Converters" links={docLinks.converters} />
            <DocumentationSide menu="Commons" links={docLinks.commons} />
            <DocumentationSide menu="Area Calculation" links={docLinks.areas} />
            <DocumentationSide
              menu="Volume Calculation"
              links={docLinks.volumes}
            />
            <DocumentationSide
              menu="Perimeter Calculation"
              links={docLinks.perimeters}
            />
            <DocumentationSide
              menu="Currency Calculation"
              links={docLinks.currency}
            />
            <DocumentationSide
              menu="Shuffle Calculation"
              links={docLinks.shuffle}
            />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
