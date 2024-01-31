import HelmetWrapper from "@/components/HelmetWrapper";
import { handleCopyClick } from "@/components/Home";
import { Button } from "@/components/ui/button";
import { ActionDoubleButton } from "@/pages/Docs";
import { Copy } from "lucide-react";

export default function NonIsoscelesTrianglePerimeter() {
  return (
    <HelmetWrapper
      title="Non-Isosceles Triangle Perimeter"
      description="non-isosceles triangle perimeter calculation"
    >
      <div className="w-full flex flex-col mb-20">
        <h2 className="text-4xl font-bold mb-3">
          Non-Isosceles Triangle Perimeter
        </h2>
        <p className="text-gray-700">
          A function that calculates the perimeter of a given non-isosceles
          triangle.
        </p>
        <div className="w-full mt-10 gap-2 flex flex-col">
          <div className="w-full py-5">
            <h4 className="w-full border-b border-gray-300 text-xl font-medium mb-4 ">
              Syntax
            </h4>
            <span className="inline-flex items-center px-4 py-1 rounded-md bg-gray-200 text-sm">
              nonIsoscelesTrianglePerimeter({<em>length of the first side</em>}
              ,&nbsp;&nbsp;{<em>length of the second side</em>},&nbsp;&nbsp;
              {<em>length of the third side</em>})
            </span>
            <p className="mt-5">
              This function calculates the perimeter of the given non-isosceles
              triangle based on the lengths of its three sides (a, b, and c) and
              returns the result. The perimeter of the triangle is calculated
              using the formula a + b + c (the sum of the lengths of the three
              sides). The perimeter of a triangle cannot be calculated if any
              side length is negative or zero, or if the sum of the lengths of
              any two sides is less than or equal to the length of the third
              side. The time complexity is constant, O(1).
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
                    import {nonIsoscelesTrianglePerimeter} from 'calculation-toolkit';

                    //Returns a numeric value
                    nonIsoscelesTrianglePerimeter(4, 5, 6); //15
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
                {"{nonIsoscelesTrianglePerimeter}"}
                <code className="text-blue-700"> from</code>
                <code className="text-green-800"> 'calculation-toolkit';</code>
              </pre>
              <pre className="text-sm font-medium mt-5">
                <code className="text-gray-500">
                  {"//Returns a numeric value"}
                </code>
                <br />
                <code className="text-red-700">
                  nonIsoscelesTrianglePerimeter
                </code>
                ({<code className="text-green-800">4, 5, 6</code>}
                ); <code className="text-gray-500">{"//15"}</code>
              </pre>
            </div>
          </div>
        </div>
        <ActionDoubleButton
          firstName="Isosceles Triangle Perimeter"
          firstPath="isosceles-triangle-perimeter"
          secondName="Rectangle Perimeter"
          secondPath="rectangle-perimeter"
        />
      </div>
    </HelmetWrapper>
  );
}
