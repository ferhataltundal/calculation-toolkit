import { handleCopyClick } from "@/components/Home";
import { Button } from "@/components/ui/button";
import { ActionDoubleButton } from "@/pages/Docs";
import { Copy } from "lucide-react";

export default function AritmeticMean() {
  return (
    <div className="w-full flex flex-col mb-20">
      <h2 className="text-4xl font-bold mb-3">Arithmetic Mean</h2>
      <p className="text-gray-700">
        Take the arithmetic mean of the given numbers.
      </p>
      <div className="w-full mt-10 gap-2 flex flex-col">
        <div className="w-full py-5">
          <h4 className="w-full border-b border-gray-300 text-xl font-medium mb-4 ">
            Syntax
          </h4>
          <span className="inline-flex items-center px-4 py-1 rounded-md bg-gray-200 text-sm">
            arithmeticMean({<em>array{"<number>"}</em>})
          </span>
          <p className="mt-5">
            A function that calculates the arithmetic mean of a given array of
            numbers. This function calculates the arithmetic mean of the given
            array of numbers and returns the result. The arithmetic mean is
            obtained by dividing the sum of all numbers in the array by the
            number of elements. The time complexity is linear with respect to
            the length of the array, O(n).
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
              import {arithmeticMean} from 'calculation-toolkit';

              //Returns a numeric value
              arithmeticMean([30, 45, 54, 311, 44]); //96.8
              `
                )
              }
            >
              <Copy strokeWidth={1} size={22} />
            </Button>
          </div>
          <div className="w-full px-5 py-4 flex flex-col gap-2">
            <pre className="text-sm font-medium">
              <code className="text-blue-700">import</code> {"{arithmeticMean}"}
              <code className="text-blue-700"> from</code>
              <code className="text-green-800"> 'calculation-toolkit';</code>
            </pre>
            <pre className="text-sm font-medium mt-5">
              <code className="text-gray-500">
                {"//Returns a numeric value"}
              </code>
              <br />
              <code className="text-red-700">arithmeticMean</code>(
              {<code className="text-green-800">[30, 45, 54, 311, 44]</code>}
              ); <code className="text-gray-500">{"//96.8"}</code>
            </pre>
          </div>
        </div>
      </div>
      <ActionDoubleButton
        firstName="Length"
        firstPath="length-converter"
        secondName="Geometric Mean"
        secondPath="geometric-mean"
      />
    </div>
  );
}
