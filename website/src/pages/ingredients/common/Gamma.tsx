import { handleCopyClick } from "@/components/Home";
import { Button } from "@/components/ui/button";
import { ActionDoubleButton } from "@/pages/Docs";
import { Copy } from "lucide-react";
export default function Gamma() {
  return (
    <div className="w-full flex flex-col mb-20">
      <h2 className="text-4xl font-bold mb-3">Gamma</h2>
      <p className="text-gray-700">
        A function that calculates the gamma function.
      </p>
      <div className="w-full mt-10 gap-2 flex flex-col">
        <div className="w-full py-5">
          <h4 className="w-full border-b border-gray-300 text-xl font-medium mb-4 ">
            Syntax
          </h4>
          <span className="inline-flex items-center px-4 py-1 rounded-md bg-gray-200 text-sm">
            gamma({<em>gamma function is to be calculated</em>}
            ,&nbsp;&nbsp;
            {<em>step size for numerical integration</em>},&nbsp;&nbsp;
            {<em>max number of iterations</em>})
          </span>
          <p className="mt-5">
            This function uses numerical integration to calculate the gamma
            function. The gamma function is represented as Γ(x) = ∫(0 to ∞)
            t^(x-1) * e^(-t) dt. It uses a numerical integration approach with a
            specified step size and a maximum number of iterations. Increasing
            the number of iterations improves the calculation accuracy. The time
            complexity depends on the length of the integral range and the
            number of iterations.
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
                  import {gamma} from 'calculation-toolkit';
                  
                  gamma(5, 0.001, 1000) //(Approximately) 24
`
                )
              }
            >
              <Copy strokeWidth={1} size={22} />
            </Button>
          </div>
          <div className="w-full px-5 py-4 flex flex-col gap-2">
            <pre className="text-sm font-medium">
              <code className="text-blue-700">import</code> {"{gamma}"}
              <code className="text-blue-700"> from</code>
              <code className="text-green-800"> 'calculation-toolkit';</code>
            </pre>

            <pre className="text-sm font-medium mt-2">
              <code className="text-red-700">gamma</code>(5, 0.001, 1000){" "}
              <code className="text-gray-500">{"//(Approximately) 24"}</code>
            </pre>
          </div>
        </div>
      </div>
      <ActionDoubleButton
        firstName="z-Score"
        firstPath="z-score"
        secondName="Random Generator"
        secondPath="random-generator"
      />
    </div>
  );
}
