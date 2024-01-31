import HelmetWrapper from "@/components/HelmetWrapper";
import { handleCopyClick } from "@/components/Home";
import { Button } from "@/components/ui/button";
import { ActionDoubleButton } from "@/pages/Docs";
import { Copy } from "lucide-react";

export default function Range() {
  return (
    <HelmetWrapper title="Range" description="range calculation">
      <div className="w-full flex flex-col mb-20">
        <h2 className="text-4xl font-bold mb-3">Range</h2>
        <p className="text-gray-700">
          A generator function that creates an iterable range of numbers.
        </p>
        <div className="w-full mt-10 gap-2 flex flex-col">
          <div className="w-full py-5">
            <h4 className="w-full border-b border-gray-300 text-xl font-medium mb-4 ">
              Syntax
            </h4>
            <span className="inline-flex items-center px-4 py-1 rounded-md bg-gray-200 text-sm">
              range({<em>starting number</em>},&nbsp;&nbsp;
              {<em>ending number (exclusive)</em>},&nbsp;&nbsp;
              {<em>increment the range (default is 1)</em>})
            </span>
            <p className="mt-5">
              This function generates an iterable range of numbers, similar to
              Python's `range` function. It takes a starting number, an ending
              number, and an optional step value. The generated range includes
              the starting number but excludes the ending number.
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
                  import {range} from 'calculation-toolkit';
                  
                  const myRange = range(1, 5, 2);
                  for(const value of myRange) { 
                     console.log(value); //Outputs: 1, 3
                  }
`
                  )
                }
              >
                <Copy strokeWidth={1} size={22} />
              </Button>
            </div>
            <div className="w-full px-5 py-4 flex flex-col gap-2">
              <pre className="text-sm font-medium">
                <code className="text-blue-700">import</code> {"{range}"}
                <code className="text-blue-700"> from</code>
                <code className="text-green-800"> 'calculation-toolkit';</code>
              </pre>
              <pre className="text-sm font-medium mt-5">
                <code className="text-blue-700">const</code> myRange ={" "}
                <code className="text-red-700">range</code>(
                {<code className="text-green-800">1, 5, 2</code>}
                );
              </pre>

              <pre className="text-sm font-medium mt-5">
                <code className="text-blue-700">for</code>(
                <code className="text-blue-700">const</code> value{" "}
                <code className="text-blue-700">of</code>{" "}
                <code className="text-yellow-700">myRange</code>){" {"} <br />
                &nbsp;&nbsp;&nbsp;console.
                <code className="text-red-700">log</code>(
                {<code className="text-green-800">value</code>});{" "}
                <code className="text-gray-500">{"//Outputs: 1, 3"}</code>
                <br />
                {"}"}
              </pre>
            </div>
          </div>
        </div>
        <ActionDoubleButton
          firstName="Mode"
          firstPath="mode"
          secondName="z-Score"
          secondPath="z-score"
        />
      </div>
    </HelmetWrapper>
  );
}
