import { handleCopyClick } from "@/components/Home";
import { Button } from "@/components/ui/button";
import { ActionDoubleButton } from "@/pages/Docs";
import { Copy } from "lucide-react";

export default function Mode() {
  return (
    <div className="w-full flex flex-col mb-20">
      <h2 className="text-4xl font-bold mb-3">Mode</h2>
      <p className="text-gray-700">
        Calculate the mode (most frequent value) of an array of numbers.
      </p>
      <div className="w-full mt-10 gap-2 flex flex-col">
        <div className="w-full py-5">
          <h4 className="w-full border-b border-gray-300 text-xl font-medium mb-4 ">
            Syntax
          </h4>
          <span className="inline-flex items-center px-4 py-1 rounded-md bg-gray-200 text-sm">
            mode({<em>array{"<number>"}</em>})
          </span>
          <p className="mt-5">
            This function takes an array of numbers and calculates the mode,
            which is the value that appears most frequently in the array. If
            there are multiple modes (multiple values with the same highest
            frequency), all modes are returned. If there is no mode (all values
            occur with the same frequency), an empty array is returned.
          </p>
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
import {mode} from 'calculation-toolkit';

//Returns a numeric array value
mode([0, 0, 1, 2, 2, 3, 3]); //[0, 2, 3]
`
                )
              }
            >
              <Copy strokeWidth={1} size={22} />
            </Button>
          </div>
          <div className="w-full px-5 py-4 flex flex-col gap-2">
            <pre className="text-sm font-medium">
              <code className="text-blue-700">import</code> {"{mode}"}
              <code className="text-blue-700"> from</code>
              <code className="text-green-800"> 'calculation-toolkit';</code>
            </pre>
            <pre className="text-sm font-medium mt-5">
              <code className="text-gray-500">
                {"//Returns a numeric array value"}
              </code>
              <br />
              <code className="text-red-700">mode</code>(
              {<code className="text-green-800">[0, 0, 1, 2, 2, 3, 3]</code>}
              ); <code className="text-gray-500">{"//[0, 2, 3]"}</code>
            </pre>
          </div>
        </div>
      </div>
      <ActionDoubleButton
        firstName="Median"
        firstPath="median"
        secondName="Range"
        secondPath="range"
      />
    </div>
  );
}
