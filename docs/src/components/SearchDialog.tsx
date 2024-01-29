/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Search } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Terms } from "../constants/terms";
import { Link } from "react-router-dom";
import {
  KeyboardEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

const SearchDialog = () => {
  const [searchInput, setSearchInput] = useState("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onClickOpen = useCallback(() => {
    let newValue = isOpen;
    if (isOpen) {
      newValue = false;
    } else {
      newValue = true;
    }
    setIsOpen(newValue);
  }, [isOpen]);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key === "k") {
        event.preventDefault();
        setIsOpen((p) => !p);
      }
    };
    //@ts-expect-error
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      //@ts-expect-error
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const searchResult = useMemo(() => {
    const searchTerm = searchInput.toLowerCase();
    return Terms.filter(
      (terms) =>
        terms.items.find(
          (v) =>
            v.name.toLowerCase().includes(searchTerm) ||
            v.path.toLowerCase().includes(searchTerm)
        ) ||
        terms.categoryName.toLowerCase().includes(searchTerm) ||
        terms.keywords.find((v) => v.toLowerCase().includes(searchTerm))
    );
  }, [searchInput]);
  return (
    <Dialog open={isOpen} onOpenChange={onClickOpen}>
      <DialogTrigger className="relative max-w-[250px] w-full">
        <span className="search-button">
          Search in...
          <span>⌘ K</span>
        </span>
      </DialogTrigger>
      <DialogContent className="p-2">
        <DialogHeader className="w-full absolute top-0">
          <Search
            size={20}
            strokeWidth={1.5}
            className="absolute left-2.5 top-4 text-muted-foreground"
          />
          <Input
            placeholder="Enter keyword(s)"
            onChange={(e) => setSearchInput(e.target.value)}
            value={searchInput}
            className="h-[43px] w-full focus-visible:ring-0 px-10 border-x-0 border-t-0 bg-background border-b-2 border-muted rounded-none"
          />
        </DialogHeader>
        <div className="w-full flex flex-col mt-12 max-h-[500px] overflow-auto use-custom-scroll">
          {searchResult.length > 0 ? (
            searchResult.map((item, idx) => (
              <div className="flex flex-col w-full" key={idx}>
                <span className="text-xs text-muted-foreground p-2 select-none">
                  {item.categoryName}
                </span>
                {item.items
                  .filter(
                    (v) =>
                      v.name
                        .toLowerCase()
                        .includes(searchInput.toLowerCase()) ||
                      item.keywords.find((i) =>
                        i.toLowerCase().includes(searchInput.toLowerCase())
                      )
                  )
                  .map((items, idx) => (
                    <Link
                      key={idx}
                      className={cn(
                        buttonVariants({
                          variant: "ghost",
                        }),
                        "flex justify-start items-center w-full h-[35px] gap-3 hover:background-muted-foreground"
                      )}
                      to={items.path}
                    >
                      <items.icon size={15} strokeWidth={1.5} />
                      {items.name}
                    </Link>
                  ))}
              </div>
            ))
          ) : (
            <div className="w-full text-center p-3 text-md text-muted-foreground select-none">
              No result
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;
