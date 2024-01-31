import HelmetWrapper from "@/components/HelmetWrapper";
import { handleCopyClick } from "@/components/Home";
import { Button } from "@/components/ui/button";
import { ActionDoubleButton } from "@/pages/Docs";
import { Copy } from "lucide-react";

export default function RectanglePerimeter() {
  return (
    <HelmetWrapper
      title="Rectangle Perimeter"
      description="rectangle perimeter calculation"
    >
      <div className="w-full flex flex-col mb-20">
        <h2 className="text-4xl font-bold mb-3">Rectangle Perimeter</h2>
        <p className="text-gray-700">
          A function that calculates the perimeter of a given rectangle.
        </p>
        <div className="w-full mt-10 gap-2 flex flex-col">
          <div className="w-full py-5">
            <h4 className="w-full border-b border-gray-300 text-xl font-medium mb-4 ">
              Syntax
            </h4>
            <span className="inline-flex items-center px-4 py-1 rounded-md bg-gray-200 text-sm">
              rectanglePerimeter({<em>length of the first side</em>}
              ,&nbsp;&nbsp;{<em>length of the second side</em>})
            </span>
            <p className="mt-5">
              This function calculates the perimeter of the given rectangle
              based on the lengths of its two sides (a and b) and returns the
              result. The perimeter of the rectangle is calculated using the
              formula 2 * (a + b) (twice the sum of the two sides). The
              perimeter of a rectangle cannot be calculated if either side
              length is negative or zero. The time complexity is constant, O(1).
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
                    import {rectanglePerimeter} from 'calculation-toolkit';

                    //Returns a numeric value
                    rectanglePerimeter(4, 6); //20
                    `
                  )
                }
              >
                <Copy strokeWidth={1} size={22} />
              </Button>
            </div>
            <div className="w-full px-5 py-4 flex flex-col gap-2">
              <pre className="text-sm font-medium">
                <code className="text-blue-700">import</code>{" "}
                {"{rectanglePerimeter}"}
                <code className="text-blue-700"> from</code>
                <code className="text-green-800"> 'calculation-toolkit';</code>
              </pre>
              <pre className="text-sm font-medium mt-5">
                <code className="text-gray-500">
                  {"//Returns a numeric value"}
                </code>
                <br />
                <code className="text-red-700">rectanglePerimeter</code>(
                {<code className="text-green-800">4, 6</code>}
                ); <code className="text-gray-500">{"//20"}</code>
              </pre>
            </div>
          </div>
        </div>
        <ActionDoubleButton
          firstName="Non-Isosceles Triangle Perimeter"
          firstPath="non-isosceles-triangle-perimeter"
          secondName="Square Perimeter"
          secondPath="square-perimeter"
        />
      </div>
    </HelmetWrapper>
  );
}
