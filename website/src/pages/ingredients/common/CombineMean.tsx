import HelmetWrapper from "@/components/HelmetWrapper";
import { handleCopyClick } from "@/components/Home";
import { Button } from "@/components/ui/button";
import { ActionDoubleButton } from "@/pages/Docs";
import { Copy } from "lucide-react";

export default function CombineMean() {
  return (
    <HelmetWrapper title="Combine Mean" description="combine mean calculation">
      <div className="w-full flex flex-col mb-20">
        <h2 className="text-4xl font-bold mb-3">Combine Mean</h2>
        <p className="text-gray-700">
          Combine means of two datasets weighted by their sizes.
        </p>
        <div className="w-full mt-10 gap-2 flex flex-col">
          <div className="w-full py-5">
            <h4 className="w-full border-b border-gray-300 text-xl font-medium mb-4 ">
              Syntax
            </h4>
            <span className="inline-flex items-center px-4 py-1 rounded-md bg-gray-200 text-sm">
              combineMean({<em>mean1{"<number>"}</em>}&nbsp;&nbsp;
              {<em>size1{"<number>"}</em>}&nbsp;&nbsp;
              {<em>mean2{"<number>"}</em>}&nbsp;&nbsp;
              {<em>size2{"<number>"}</em>})
            </span>
            <p className="mt-5">
              This function takes the means and sizes of two datasets and
              combines them to compute the weighted average mean. It is useful
              when you want to calculate the overall mean of two datasets while
              taking their sample sizes into account.
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
          import {combineMean} from 'calculation-toolkit';

          //Returns a numeric value
          combineMean(45, 30, 60, 20); //51
          `
                  )
                }
              >
                <Copy strokeWidth={1} size={22} />
              </Button>
            </div>
            <div className="w-full px-5 py-4 flex flex-col gap-2">
              <pre className="text-sm font-medium">
                <code className="text-blue-700">import</code> {"{combineMean}"}
                <code className="text-blue-700"> from</code>
                <code className="text-green-800"> 'calculation-toolkit';</code>
              </pre>
              <pre className="text-sm font-medium mt-5">
                <code className="text-gray-500">
                  {"//Returns a numeric value"}
                </code>
                <br />
                <code className="text-red-700">combineMean</code>(
                {<code className="text-green-800">45, 30, 60, 20</code>}
                ); <code className="text-gray-500">{"//51"}</code>
              </pre>
            </div>
          </div>
        </div>
        <ActionDoubleButton
          firstName="Harmonic Mean"
          firstPath="harmonic-mean"
          secondName="Combination"
          secondPath="combination"
        />
      </div>
    </HelmetWrapper>
  );
}
