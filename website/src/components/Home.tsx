import { Copy, Github, LibraryBig } from "lucide-react";
import { Button, buttonVariants } from "./ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useCallback } from "react";
import HelmetWrapper from "./HelmetWrapper";

export const handleCopyClick = (text: string) =>
  navigator.clipboard.writeText(text);

const Home = () => {
  const downloadFile = useCallback((path: string, name: string) => {
    const filePath = path;
    const link = document.createElement("a");
    link.href = filePath;
    link.setAttribute("download", name);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <HelmetWrapper
      title="Calculation Toolkit & npm library"
      description="Calculation & Simple Statistic & Math Toolkit | npm library"
    >
      <div className="w-full flex items-center flex-col  p-5">
        <div className="w-full flex max-w-[1500px] flex-col gap-5 items-center mt-10">
          <h1 className="text-6xl font-bold max-w-[1000px] text-center leading-[4rem] max-md:text-4xl">
            Your Ultimate Calculation and Conversion Library
          </h1>
          <p className="w-full text-center text-xl max-w-[900px] max-md:text-sm">
            Calculation Toolkit is a powerful JavaScript library for performing
            various calculations and conversions. It provides a wide range of
            functions and utilities to make complex calculations and unit
            conversions easier for developers.
          </p>
          <div className="w-full flex items-center justify-center gap-5 select-none">
            <Link
              to="/docs"
              className={cn(buttonVariants({ variant: "default" }))}
            >
              Get Started
            </Link>
            <Link
              to="https://github.com/ferhataltundal/calculation-toolkit.git"
              target="_blank"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "flex gap-2"
              )}
            >
              <Github strokeWidth={1} size={22} /> Github
            </Link>
          </div>

          <div className="w-full mt-10 max-w-[1200px]">
            <h3 className="text-4xl font-bold leading-[4rem] max-md:text-3xl">
              Features
            </h3>
            <ul className="flex flex-col gap-2">
              <li className="flex flex-row gap-3">
                <p>
                  • From basic arithmetic to advanced calculations,
                  calculation-toolkit offers a rich set of functions.
                </p>
              </li>
              <li className="flex flex-row gap-3">
                <p>
                  • Convert between units like a pro – from temperature to
                  currency, it's all here.
                </p>
              </li>
              <li className="flex flex-row gap-3">
                <p>
                  • Designed for ease of use and flexibility, you can choose the
                  functions that fit your needs.
                </p>
              </li>
              <li className="flex flex-row gap-3">
                <p>
                  • calculation-toolkit is open source and welcomes
                  contributions from the developer community.
                </p>
              </li>
            </ul>
          </div>
          <div className="flex flex-row items-center justify-center gap-5 max-w-[1200px] mt-10">
            <Link
              to="https://github.com/ferhataltundal/calculation-toolkit.git"
              target="_blank"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "flex gap-2"
              )}
            >
              <Github strokeWidth={1} size={22} /> Give a star
            </Link>
            <Link
              to="https://www.npmjs.com/package/calculation-toolkit"
              target="_blank"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "flex gap-2"
              )}
            >
              <LibraryBig strokeWidth={1} size={22} /> NPM
            </Link>
          </div>
          <div className="w-full mt-10 max-w-[1200px]">
            <h3 className="text-2xl font-bold leading-[4rem] max-md:text-3xl max-md:text-center">
              Installation
            </h3>
            <div className="w-full flex flex-row gap-5 max-md:flex-wrap max-md:items-center max-md:justify-center mt-5">
              <div className="w-full flex flex-col text-center gap-5 max-w-[400px]">
                <span className="flex items-center justify-between border border-muted-foreground h-[50px] rounded-md p-3 gap-10">
                  <pre className="text-black">
                    npm{" "}
                    <code className="text-muted-foreground">
                      install calculation-toolkit
                    </code>
                  </pre>
                  <Button
                    className="w-10 h-10 p-1 rounded-full"
                    variant="ghost"
                    onClick={() =>
                      handleCopyClick("npm install calculation-toolkit")
                    }
                  >
                    <Copy strokeWidth={1} size={22} />
                  </Button>
                </span>
                or
                <span className="flex items-center justify-between border border-muted-foreground h-[50px] rounded-md p-3 gap-10">
                  <pre className="text-black">
                    yarn{" "}
                    <code className="text-muted-foreground">
                      add calculation-toolkit
                    </code>
                  </pre>
                  <Button
                    className="w-10 h-10 p-1 rounded-full"
                    variant="ghost"
                    onClick={() =>
                      handleCopyClick("yarn add calculation-toolkit")
                    }
                  >
                    <Copy strokeWidth={1} size={22} />
                  </Button>
                </span>
              </div>
              <div className="w-0.5 h-[250px] bg-muted-foreground max-md:w-full max-md:h-0.5" />
              <div className="w-full flex flex-col gap-4 max-md:items-center max-md:justify-center">
                <Button
                  onClick={() =>
                    downloadFile(
                      "https://calculation-toolkit.org/package/calculation-toolkit.js",
                      "calculation-toolkit.js"
                    )
                  }
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "flex gap-2 max-w-[300px]"
                  )}
                >
                  Download &nbsp; calculation-toolkit.js
                </Button>
                or
                <Button
                  onClick={() =>
                    downloadFile(
                      "https://calculation-toolkit.org/package/calculation-toolkit.min.js",
                      "calculation-toolkit.min.js"
                    )
                  }
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "flex gap-2 max-w-[300px]"
                  )}
                >
                  Download &nbsp; calculation-toolkit.min.js
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HelmetWrapper>
  );
};

export default Home;
