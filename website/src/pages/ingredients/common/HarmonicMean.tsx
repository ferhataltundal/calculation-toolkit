import { handleCopyClick } from "@/components/Home";
import { Button } from "@/components/ui/button";
import { ActionDoubleButton } from "@/pages/Docs";
import { Copy } from "lucide-react";

export default function HarmonicMean() {
  return (
    <div className="w-full flex flex-col mb-20">
      <h2 className="text-4xl font-bold mb-3">Harmonic Mean</h2>
      <p className="text-gray-700">
        A function that calculates the harmonic mean of a given array of
        numbers.
      </p>
      <div className="w-full mt-10 gap-2 flex flex-col">
        <div className="w-full py-5">
          <h4 className="w-full border-b border-gray-300 text-xl font-medium mb-4 ">
            Syntax
          </h4>
          <span className="inline-flex items-center px-4 py-1 rounded-md bg-gray-200 text-sm">
            harmonicMean({<em>array{"<number>"}</em>})
          </span>
          <p className="mt-5">
            This function calculates the harmonic mean of the given array of
            numbers and returns the result. Harmonic mean is the average of the
            reciprocals of the numbers. Harmonic mean cannot be calculated for
            arrays containing negative or zero values. The time complexity is
            linear with respect to the length of the array, O(n).
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
          import {harmonicMean} from 'calculation-toolkit';

          //Returns a numeric value
          harmonicMean([2, 4, 8]); //4
          `
                )
              }
            >
              <Copy strokeWidth={1} size={22} />
            </Button>
          </div>
          <div className="w-full px-5 py-4 flex flex-col gap-2">
            <pre className="text-sm font-medium">
              <code className="text-blue-700">import</code> {"{harmonicMean}"}
              <code className="text-blue-700"> from</code>
              <code className="text-green-800"> 'calculation-toolkit';</code>
            </pre>
            <pre className="text-sm font-medium mt-5">
              <code className="text-gray-500">
                {"//Returns a numeric value"}
              </code>
              <br />
              <code className="text-red-700">harmonicMean</code>(
              {<code className="text-green-800">[2, 4, 8]</code>}
              ); <code className="text-gray-500">{"//4"}</code>
            </pre>
          </div>
        </div>
      </div>
      <ActionDoubleButton
        firstName="Geometric Mean"
        firstPath="geometric-Mean"
        secondName="Combine Mean"
        secondPath="combine-mean"
      />
    </div>
  );
}
