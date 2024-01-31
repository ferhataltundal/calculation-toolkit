import HelmetWrapper from "@/components/HelmetWrapper";
import { handleCopyClick } from "@/components/Home";
import { Button } from "@/components/ui/button";
import { ActionDoubleButton } from "@/pages/Docs";
import { Copy } from "lucide-react";

export default function ZScore() {
  return (
    <HelmetWrapper title="z-Score" description="z-score calculation">
      <div className="w-full flex flex-col mb-20">
        <h2 className="text-4xl font-bold mb-3">z-Score</h2>
        <p className="text-gray-700">
          Calculates and returns the z-score of a value in a given data set.
        </p>
        <div className="w-full mt-10 gap-2 flex flex-col">
          <div className="w-full py-5">
            <h4 className="w-full border-b border-gray-300 text-xl font-medium mb-4 ">
              Syntax
            </h4>
            <span className="inline-flex items-center px-4 py-1 rounded-md bg-gray-200 text-sm">
              zScore({<em>The value to calculate the z-score for</em>}
              ,&nbsp;&nbsp;
              {<em>The mean of the data set</em>},&nbsp;&nbsp;
              {<em>The standard deviation of the data set</em>})
            </span>
            <p className="mt-5">
              The z-score represents how many standard deviations a value (x) is
              from the mean (m) of its data set. This function calculates the
              z-score by subtracting the mean (m) from the value (x) and then
              dividing the result by the standard deviation (s). It's a useful
              measure in statistics to understand how far and in what direction
              a value deviates from the mean.
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
                  import {zScore} from 'calculation-toolkit';
const value = 30
const mean = 20
const standardDeviation = 5
zScore(value, mean, standardDeviation) // 2.0
`
                  )
                }
              >
                <Copy strokeWidth={1} size={22} />
              </Button>
            </div>
            <div className="w-full px-5 py-4 flex flex-col gap-2">
              <pre className="text-sm font-medium">
                <code className="text-blue-700">import</code> {"{zScore}"}
                <code className="text-blue-700"> from</code>
                <code className="text-green-800"> 'calculation-toolkit';</code>
              </pre>
              <pre className="text-sm font-medium mt-5">
                <code className="text-blue-700">const</code> value ={" "}
                <code className="text-red-700">30</code>
              </pre>
              <pre className="text-sm font-medium">
                <code className="text-blue-700">const</code> mean ={" "}
                <code className="text-red-700">20</code>
              </pre>
              <pre className="text-sm font-medium">
                <code className="text-blue-700">const</code> standardDeviation ={" "}
                <code className="text-red-700">5</code>
              </pre>

              <pre className="text-sm font-medium mt-2">
                <code className="text-blue-700">zScore</code>(value, mean,
                standardDeviation){" "}
                <code className="text-gray-500">{"// 2.0"}</code>
              </pre>
            </div>
          </div>
        </div>
        <ActionDoubleButton
          firstName="Range"
          firstPath="range"
          secondName="Gamma"
          secondPath="gamma"
        />
      </div>
    </HelmetWrapper>
  );
}
