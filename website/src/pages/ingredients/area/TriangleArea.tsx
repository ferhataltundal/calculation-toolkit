import HelmetWrapper from "@/components/HelmetWrapper";
import { handleCopyClick } from "@/components/Home";
import { Button } from "@/components/ui/button";
import { ActionDoubleButton } from "@/pages/Docs";
import { Copy } from "lucide-react";

export default function TriangleArea() {
  return (
    <HelmetWrapper
      title="Triangle Area"
      description="triangle area calculation"
    >
      <div className="w-full flex flex-col mb-20">
        <h2 className="text-4xl font-bold mb-3">Triangle Area</h2>
        <p className="text-gray-700">
          A function that calculates the area of a given triangle.
        </p>
        <div className="w-full mt-10 gap-2 flex flex-col">
          <div className="w-full py-5">
            <h4 className="w-full border-b border-gray-300 text-xl font-medium mb-4 ">
              Syntax
            </h4>
            <span className="inline-flex items-center px-4 py-1 rounded-md bg-gray-200 text-sm">
              triangleArea({<em>base length</em>},&nbsp;&nbsp;{<em>height</em>})
            </span>
            <p className="mt-5">
              This function calculates the area of the given triangle based on
              its base length (b) and height (h) and returns the result. The
              area of the triangle is calculated using the formula (1/2) * b * h
              (half of the product of the base length and height). The area of a
              triangle cannot be calculated if the base length or height is
              negative or zero. The time complexity is constant, O(1).
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
                    import {triangleArea} from 'calculation-toolkit';

                    //Returns a numeric value
                    triangleArea(5, 4); //10
                    `
                  )
                }
              >
                <Copy strokeWidth={1} size={22} />
              </Button>
            </div>
            <div className="w-full px-5 py-4 flex flex-col gap-2">
              <pre className="text-sm font-medium">
                <code className="text-blue-700">import</code> {"{triangleArea}"}
                <code className="text-blue-700"> from</code>
                <code className="text-green-800"> 'calculation-toolkit';</code>
              </pre>
              <pre className="text-sm font-medium mt-5">
                <code className="text-gray-500">
                  {"//Returns a numeric value"}
                </code>
                <br />
                <code className="text-red-700">triangleArea</code>(
                {<code className="text-green-800">5, 4</code>}
                ); <code className="text-gray-500">{"//10"}</code>
              </pre>
            </div>
          </div>
        </div>
        <ActionDoubleButton
          firstName="Square Area"
          firstPath="square-area"
          secondName="Cone Volume"
          secondPath="cone-volume"
        />
      </div>
    </HelmetWrapper>
  );
}
