import { handleCopyClick } from "@/components/Home";
import { Button } from "@/components/ui/button";
import { ActionDoubleButton } from "@/pages/Docs";
import { Copy } from "lucide-react";

export default function Median() {
  return (
    <div className="w-full flex flex-col mb-20">
      <h2 className="text-4xl font-bold mb-3">Median</h2>
      <p className="text-gray-700">
        A function that calculates the median of an array.
      </p>
      <div className="w-full mt-10 gap-2 flex flex-col">
        <div className="w-full py-5">
          <h4 className="w-full border-b border-gray-300 text-xl font-medium mb-4 ">
            Syntax
          </h4>
          <span className="inline-flex items-center px-4 py-1 rounded-md bg-gray-200 text-sm">
            median({<em>array{"<number>"}</em>})
          </span>
          <p className="mt-5">
            This function calculates and returns the median of the given array
            of numerical data. The median is the middle value of the data when
            sorted, or the arithmetic average of the two middle values. The
            function assumes that the data in the array is numerical. If the
            array is empty or contains non-numeric values, an error is thrown.
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
import {median} from 'calculation-toolkit';

//Returns a numeric value
median([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]); //4
`
                )
              }
            >
              <Copy strokeWidth={1} size={22} />
            </Button>
          </div>
          <div className="w-full px-5 py-4 flex flex-col gap-2">
            <pre className="text-sm font-medium">
              <code className="text-blue-700">import</code> {"{median}"}
              <code className="text-blue-700"> from</code>
              <code className="text-green-800"> 'calculation-toolkit';</code>
            </pre>
            <pre className="text-sm font-medium mt-5">
              <code className="text-gray-500">
                {"//Returns a numeric value"}
              </code>
              <br />
              <code className="text-red-700">median</code>(
              {
                <code className="text-green-800">
                  [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
                </code>
              }
              ); <code className="text-gray-500">{"//4"}</code>
            </pre>
          </div>
        </div>
      </div>
      <ActionDoubleButton
        firstName="Sum"
        firstPath="sum"
        secondName="Mode"
        secondPath="mode"
      />
    </div>
  );
}
