import { handleCopyClick } from "@/components/Home";
import { Button } from "@/components/ui/button";
import { ActionDoubleButton } from "@/pages/Docs";
import { Copy } from "lucide-react";
import { Link } from "react-router-dom";

export default function Installation() {
  return (
    <div className="w-full flex flex-col mb-20">
      <h2 className="text-4xl font-bold mb-3">Installation</h2>

      <div className="w-full mt-10 gap-2 flex flex-col">
        <h4 className="w-full border-b border-gray-300 text-xl font-medium mb-1 py-2">
          Prerequisites
        </h4>
        <p>
          Before installing the library, make sure you have the latest version
          of Node.js installed on your system. If Node.js is not installed, you
          can download and install it from the{" "}
          <Link
            to="https://nodejs.org/en"
            target="_blank"
            className="text-blue-500"
          >
            Node.js official website.
          </Link>
        </p>
      </div>

      <div className="w-full mt-10 gap-2 flex flex-col">
        <h4 className="w-full border-b border-gray-300 text-xl font-medium mb-1 py-2">
          Install the Package
        </h4>

        <div className="w-full px-5 py-2 bg-gray-100 rounded-md flex items-center justify-between flex-row">
          <pre className="text-black">
            npm{" "}
            <code className="text-muted-foreground">
              install calculation-toolkit
            </code>
          </pre>
          <Button
            className="w-10 h-10 p-1 rounded-full"
            variant="ghost"
            onClick={() => handleCopyClick("npm install calculation-toolkit")}
          >
            <Copy strokeWidth={1} size={22} />
          </Button>
        </div>
        <div className="w-full text-center p-5">or</div>
        <div className="w-full px-5 py-2 bg-gray-100 rounded-md flex items-center justify-between flex-row">
          <pre className="text-black">
            yarn{" "}
            <code className="text-muted-foreground">
              add calculation-toolkit
            </code>
          </pre>
          <Button
            className="w-10 h-10 p-1 rounded-full"
            variant="ghost"
            onClick={() => handleCopyClick("yarn add calculation-toolkit")}
          >
            <Copy strokeWidth={1} size={22} />
          </Button>
        </div>
        <span className="mt-10 text-gray-700">
          This command installs the library into your project's node_modules
          folder and adds it as a dependency in your package.json file.
        </span>
      </div>

      <div className="w-full mt-10 gap-2 flex flex-col">
        <h4 className="w-full border-b border-gray-300 text-xl font-medium mb-1 py-2">
          Use the Library in the Project
        </h4>
        <div className="w-full bg-gray-200 rounded-md flex items-center justify-between flex-col overflow-hidden">
          <div className="flex w-full justify-between items-center px-2 py-1 bg-gray-700">
            <span className="text-sm text-white">javascript</span>
            <Button
              className="w-10 h-10 p-1 rounded-full"
              variant="secondary"
              onClick={() =>
                handleCopyClick("const calc = require('calculation-toolkit');")
              }
            >
              <Copy strokeWidth={1} size={22} />
            </Button>
          </div>
          <div className="w-full px-5 py-4 flex flex-col">
            <pre className="text-sm font-medium">
              <code className="text-blue-700">const</code> calc =
              <code className="text-orange-600"> require</code>(
              <code className="text-green-800">'calculation-toolkit'</code>);
            </pre>
          </div>
        </div>
        <div className="w-full text-center p-5">
          or include it as an ES6 module.
        </div>
        <div className="w-full bg-gray-200 rounded-md flex items-center justify-between flex-col overflow-hidden">
          <div className="flex w-full justify-between items-center px-2 py-1 bg-gray-700">
            <span className="text-sm text-white">javascript</span>
            <Button
              className="w-10 h-10 p-1 rounded-full"
              variant="secondary"
              onClick={() =>
                handleCopyClick("import calc from 'calculation-toolkit'")
              }
            >
              <Copy strokeWidth={1} size={22} />
            </Button>
          </div>
          <div className="w-full px-5 py-4 flex flex-col">
            <pre className="text-sm font-medium">
              <code className="text-blue-700">import</code> calc
              <code className="text-blue-700"> from</code>
              <code className="text-green-800"> 'calculation-toolkit';</code>
            </pre>
          </div>
        </div>
        <div className="w-full py-5">Call the function directly</div>
        <div className="w-full bg-gray-200 rounded-md flex items-center justify-between flex-col overflow-hidden">
          <div className="flex w-full justify-between items-center px-2 py-1 bg-gray-700">
            <span className="text-sm text-white">javascript</span>
            <Button
              className="w-10 h-10 p-1 rounded-full"
              variant="secondary"
              onClick={() =>
                handleCopyClick(
                  "import {factorial, tempCalc} from 'calculation-toolkit'"
                )
              }
            >
              <Copy strokeWidth={1} size={22} />
            </Button>
          </div>
          <div className="w-full px-5 py-4 flex flex-col gap-2">
            <pre className="text-sm font-medium">
              <code className="text-blue-700">import</code>{" "}
              {"{factorial, tempCalc}"}
              <code className="text-blue-700"> from</code>
              <code className="text-green-800"> 'calculation-toolkit';</code>
            </pre>
          </div>
        </div>
        <div className="w-full py-5">
          Now you can start performing calculations using the library. An
          example calculation:
        </div>
        <div className="w-full bg-gray-200 rounded-md flex items-center justify-between flex-col overflow-hidden">
          <div className="flex w-full justify-between items-center px-2 py-1 bg-gray-700">
            <span className="text-sm text-white">javascript</span>
            <Button
              className="w-10 h-10 p-1 rounded-full"
              variant="secondary"
              onClick={() =>
                handleCopyClick(
                  `
                  const result = factorial(5);
                  console.log(result); //120
                  `
                )
              }
            >
              <Copy strokeWidth={1} size={22} />
            </Button>
          </div>
          <div className="w-full px-5 py-4 flex flex-col gap-2">
            <pre className="text-sm font-medium">
              <code className="text-blue-700">const</code> result =
              <code className="text-red-700"> factorial</code>(
              {<code className="text-green-800">5</code>});
            </pre>
            <pre className="text-sm font-medium">
              <code className="text-yellow-700">console</code>.log(result);{" "}
              <code className="text-gray-500">{"//120"}</code>
            </pre>
          </div>
        </div>

        <div className="w-full py-5">
          This is an example of a simple addition operation. Check out the
          relevant sections of the documentation to discover other functions and
          features the library offers.
        </div>
      </div>

      <ActionDoubleButton
        firstName="Introduction"
        firstPath=""
        secondName="Temperature"
        secondPath="temperature-converter"
      />
    </div>
  );
}
