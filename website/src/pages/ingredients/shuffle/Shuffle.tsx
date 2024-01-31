import HelmetWrapper from "@/components/HelmetWrapper";
import { handleCopyClick } from "@/components/Home";
import { Button } from "@/components/ui/button";
import { ActionSingleLeftButton } from "@/pages/Docs";
import { Copy } from "lucide-react";

export default function Shuffle() {
  return (
    <HelmetWrapper title="Shuffle" description="shuffle calculation">
      <div className="w-full flex flex-col mb-20">
        <h2 className="text-4xl font-bold mb-3">Shuffle</h2>
        <p className="text-gray-700">
          A function that shuffles an array of numbers randomly.
        </p>
        <div className="w-full mt-10 gap-2 flex flex-col">
          <div className="w-full py-5">
            <h4 className="w-full border-b border-gray-300 text-xl font-medium mb-4 ">
              Syntax
            </h4>
            <span className="inline-flex items-center px-4 py-1 rounded-md bg-gray-200 text-sm">
              shuffle({<em>the array to be shuffled (Array{"<number>"})</em>})
            </span>
            <p className="mt-5">
              This function takes an array of numbers and shuffles it randomly,
              returning the shuffled array.
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
                    import {shuffle} from 'calculation-toolkit';

                    //Returns an shuffled number array
                    shuffle([1, 2, 3, 4, 5]); // An example shuffled array
                    `
                  )
                }
              >
                <Copy strokeWidth={1} size={22} />
              </Button>
            </div>
            <div className="w-full px-5 py-4 flex flex-col gap-2">
              <pre className="text-sm font-medium">
                <code className="text-blue-700">import</code> {"{shuffle}"}
                <code className="text-blue-700"> from</code>
                <code className="text-green-800"> 'calculation-toolkit';</code>
              </pre>
              <pre className="text-sm font-medium mt-5">
                <code className="text-gray-500">
                  {"//Returns an shuffled number array"}
                </code>
                <br />
                <code className="text-red-700">shuffle</code>(
                {<code className="text-green-800">[1, 2, 3, 4, 5]</code>}
                );{" "}
                <code className="text-gray-500">
                  {"// An example shuffled array"}
                </code>
              </pre>
            </div>
          </div>
        </div>
        <ActionSingleLeftButton name="Sample" path="sample" />
      </div>
    </HelmetWrapper>
  );
}
