import HelmetWrapper from "@/components/HelmetWrapper";
import { handleCopyClick } from "@/components/Home";
import { Button } from "@/components/ui/button";
import { ActionDoubleButton } from "@/pages/Docs";
import { Copy } from "lucide-react";

export default function Sample() {
  return (
    <HelmetWrapper title="Sample" description="sample calculation">
      <div className="w-full flex flex-col mb-20">
        <h2 className="text-4xl font-bold mb-3">Sample</h2>
        <p className="text-gray-700">
          A function that samples values from an array with replacement.
        </p>
        <div className="w-full mt-10 gap-2 flex flex-col">
          <div className="w-full py-5">
            <h4 className="w-full border-b border-gray-300 text-xl font-medium mb-4 ">
              Syntax
            </h4>
            <span className="inline-flex items-center px-4 py-1 rounded-md bg-gray-200 text-sm">
              sample({<em>the array to sample values</em>},&nbsp;&nbsp;
              {<em>the number of values (with replacement)</em>}
              ,&nbsp;&nbsp;{<em>fixed (default is 4)</em>})
            </span>
            <p className="mt-5">
              This function takes an array and the number of values to sample
              (with replacement), and it returns an array of randomly selected
              values from the original array.
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
                    import {sample} from 'calculation-toolkit';

                    //Returns an array of randomly selected values
                    sample([1, 2, 3, 4], 2); // An array of 2 random values, e.g., [2, 4]
                    `
                  )
                }
              >
                <Copy strokeWidth={1} size={22} />
              </Button>
            </div>
            <div className="w-full px-5 py-4 flex flex-col gap-2">
              <pre className="text-sm font-medium">
                <code className="text-blue-700">import</code> {"{sample}"}
                <code className="text-blue-700"> from</code>
                <code className="text-green-800"> 'calculation-toolkit';</code>
              </pre>
              <pre className="text-sm font-medium mt-5">
                <code className="text-gray-500">
                  {"//Returns an array of randomly selected values"}
                </code>
                <br />
                <code className="text-red-700">sample</code>(
                {<code className="text-green-800">[1, 2, 3, 4], 2</code>}
                );{" "}
                <code className="text-gray-500">
                  {"// An array of 2 random values, e.g., [2, 4]"}
                </code>
              </pre>
            </div>
          </div>
        </div>
        <ActionDoubleButton
          firstName="Parity"
          firstPath="parity"
          secondName="Shuffle"
          secondPath="shuffle"
        />
      </div>
    </HelmetWrapper>
  );
}
