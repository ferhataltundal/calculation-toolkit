import HelmetWrapper from "@/components/HelmetWrapper";
import { handleCopyClick } from "@/components/Home";
import { Button } from "@/components/ui/button";
import { ActionDoubleButton } from "@/pages/Docs";
import { Copy } from "lucide-react";

export default function CircleArea() {
  return (
    <HelmetWrapper title="Circle Area" description="circle area calculation">
      <div className="w-full flex flex-col mb-20">
        <h2 className="text-4xl font-bold mb-3">Circle Area</h2>
        <p className="text-gray-700">
          A function that calculates the area of a given circle.
        </p>
        <div className="w-full mt-10 gap-2 flex flex-col">
          <div className="w-full py-5">
            <h4 className="w-full border-b border-gray-300 text-xl font-medium mb-4 ">
              Syntax
            </h4>
            <span className="inline-flex items-center px-4 py-1 rounded-md bg-gray-200 text-sm">
              circleArea({<em>radius</em>})
            </span>
            <p className="mt-5">
              This function calculates the area of the given circle based on its
              radius and returns the result. The area calculation formula is:
              π * r^2 (the product of π (Pi) constant and the square of the
              radius).
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
                    import {circleArea} from 'calculation-toolkit';

                    //Returns a numeric value
                    circleArea(5); //78.54
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
                {"{circleArea}"}
                <code className="text-blue-700"> from</code>
                <code className="text-green-800"> 'calculation-toolkit';</code>
              </pre>
              <pre className="text-sm font-medium mt-5">
                <code className="text-gray-500">
                  {"//Returns a numeric value"}
                </code>
                <br />
                <code className="text-red-700">circleArea</code>(
                {<code className="text-green-800">5</code>}
                ); <code className="text-gray-500">{"//78.54"}</code>
              </pre>
            </div>
          </div>
        </div>
        <ActionDoubleButton
          firstName="Random Generator"
          firstPath="random-generator"
          secondName="Cone Area"
          secondPath="cone-area"
        />
      </div>
    </HelmetWrapper>
  );
}
