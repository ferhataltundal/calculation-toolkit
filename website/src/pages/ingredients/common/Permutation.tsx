import { handleCopyClick } from "@/components/Home";
import { Button } from "@/components/ui/button";
import { ActionDoubleButton } from "@/pages/Docs";
import { Copy } from "lucide-react";
export default function Permutation() {
  return (
    <div className="w-full flex flex-col mb-20">
      <h2 className="text-4xl font-bold mb-3">Permutation</h2>
      <p className="text-gray-700">
        A function that calculates permutation based on given n and r values.
      </p>
      <div className="w-full mt-10 gap-2 flex flex-col">
        <div className="w-full py-5">
          <h4 className="w-full border-b border-gray-300 text-xl font-medium mb-4 ">
            Syntax
          </h4>
          <span className="inline-flex items-center px-4 py-1 rounded-md bg-gray-200 text-sm">
            permutation({<em>total number of elements{"<number>"}</em>}
            ,&nbsp;&nbsp;<em>number of elements to be selected{"<number>"}</em>)
          </span>
          <p className="mt-5">
            This function calculates permutation based on the given n and r
            values and returns the result. Permutation represents how many
            different ways you can select r ordered elements from a set of n
            elements. The time complexity depends on the size of the permutation
            to be calculated.
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
        import {permutation} from 'calculation-toolkit';

        //Returns a numeric value
        permutation(5, 3); //60
        `
                )
              }
            >
              <Copy strokeWidth={1} size={22} />
            </Button>
          </div>
          <div className="w-full px-5 py-4 flex flex-col gap-2">
            <pre className="text-sm font-medium">
              <code className="text-blue-700">import</code> {"{permutation}"}
              <code className="text-blue-700"> from</code>
              <code className="text-green-800"> 'calculation-toolkit';</code>
            </pre>
            <pre className="text-sm font-medium mt-5">
              <code className="text-gray-500">
                {"//Returns a numeric value"}
              </code>
              <br />
              <code className="text-red-700">permutation</code>(
              {<code className="text-green-800">5, 3</code>}
              ); <code className="text-gray-500">{"//60"}</code>
            </pre>
          </div>
        </div>
      </div>
      <ActionDoubleButton
        firstName="Combination"
        firstPath="combination"
        secondName="Factorial"
        secondPath="factorial"
      />
    </div>
  );
}
