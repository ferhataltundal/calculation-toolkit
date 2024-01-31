import HelmetWrapper from "@/components/HelmetWrapper";
import { handleCopyClick } from "@/components/Home";
import { Button } from "@/components/ui/button";
import { ActionDoubleButton } from "@/pages/Docs";
import { Copy } from "lucide-react";

export default function SphereVolume() {
  return (
    <HelmetWrapper
      title="Sphere Volume"
      description="sphere volume calculation"
    >
      <div className="w-full flex flex-col mb-20">
        <h2 className="text-4xl font-bold mb-3">Sphere Volume</h2>
        <p className="text-gray-700">
          A function that calculates the volume of a given sphere.
        </p>
        <div className="w-full mt-10 gap-2 flex flex-col">
          <div className="w-full py-5">
            <h4 className="w-full border-b border-gray-300 text-xl font-medium mb-4 ">
              Syntax
            </h4>
            <span className="inline-flex items-center px-4 py-1 rounded-md bg-gray-200 text-sm">
              sphereVolume({<em>length of one edge</em>})
            </span>
            <p className="mt-5">
              This function calculates the volume of the given sphere based on
              its radius (r) and returns the result. The volume of the sphere is
              calculated using the formula (4/3) * π * r^3 (the cube of the
              radius multiplied by four-thirds of π (Pi) constant). The volume
              of a sphere cannot be calculated if the radius is negative or
              zero. The time complexity is constant, O(1).
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
                    import {sphereVolume} from 'calculation-toolkit';

                    //Returns a numeric value
                    sphereVolume(3); //113.097
                    `
                  )
                }
              >
                <Copy strokeWidth={1} size={22} />
              </Button>
            </div>
            <div className="w-full px-5 py-4 flex flex-col gap-2">
              <pre className="text-sm font-medium">
                <code className="text-blue-700">import</code> {"{sphereVolume}"}
                <code className="text-blue-700"> from</code>
                <code className="text-green-800"> 'calculation-toolkit';</code>
              </pre>
              <pre className="text-sm font-medium mt-5">
                <code className="text-gray-500">
                  {"//Returns a numeric value"}
                </code>
                <br />
                <code className="text-red-700">sphereVolume</code>(
                {<code className="text-green-800">3</code>}
                ); <code className="text-gray-500">{"//113.097"}</code>
              </pre>
            </div>
          </div>
        </div>
        <ActionDoubleButton
          firstName="Regular Tetrahedron Volume"
          firstPath="regular-tetrahedron-volume"
          secondName="Square Prism Volume"
          secondPath="square-prism-volume"
        />
      </div>
    </HelmetWrapper>
  );
}
