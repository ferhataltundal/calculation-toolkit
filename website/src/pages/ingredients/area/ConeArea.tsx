import HelmetWrapper from "@/components/HelmetWrapper";
import { handleCopyClick } from "@/components/Home";
import { Button } from "@/components/ui/button";
import { ActionDoubleButton } from "@/pages/Docs";
import { Copy } from "lucide-react";

export default function ConeArea() {
  return (
    <HelmetWrapper title="Cone Area" description="cone area calculation">
      <div className="w-full flex flex-col mb-20">
        <h2 className="text-4xl font-bold mb-3">Cone Area</h2>
        <p className="text-gray-700">
          A function that calculates the surface area of a given cone.
        </p>
        <div className="w-full mt-10 gap-2 flex flex-col">
          <div className="w-full py-5">
            <h4 className="w-full border-b border-gray-300 text-xl font-medium mb-4 ">
              Syntax
            </h4>
            <span className="inline-flex items-center px-4 py-1 rounded-md bg-gray-200 text-sm">
              coneSurfaceArea({<em>radius</em>},&nbsp;&nbsp;{<em>height</em>})
            </span>
            <p className="mt-5">
              This function calculates the surface area of the given cone based
              on its base radius (r) and height (h) and returns the result. The
              surface area of the cone is calculated using the formula π (Pi)
              constant, the radius, and the square root of the sum of the radius
              squared and the height squared. The surface area of a cone cannot
              be calculated if the radius or height is negative or zero. The
              time complexity is constant, O(1).
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
                    import {coneSurfaceArea} from 'calculation-toolkit';

                    //Returns a numeric value
                    coneSurfaceArea(3, 4); //75.4
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
                {"{coneSurfaceArea}"}
                <code className="text-blue-700"> from</code>
                <code className="text-green-800"> 'calculation-toolkit';</code>
              </pre>
              <pre className="text-sm font-medium mt-5">
                <code className="text-gray-500">
                  {"//Returns a numeric value"}
                </code>
                <br />
                <code className="text-red-700">coneSurfaceArea</code>(
                {<code className="text-green-800">3, 4</code>}
                ); <code className="text-gray-500">{"//75.4"}</code>
              </pre>
            </div>
          </div>
        </div>
        <ActionDoubleButton
          firstName="Circle Area"
          firstPath="circle-area"
          secondName="Cube Area"
          secondPath="cube-area"
        />
      </div>
    </HelmetWrapper>
  );
}
