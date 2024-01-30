import { handleCopyClick } from "@/components/Home";
import { Button } from "@/components/ui/button";
import { ActionDoubleButton } from "@/pages/Docs";
import { Copy } from "lucide-react";

export default function Length() {
  return (
    <div className="w-full flex flex-col mb-20">
      <h2 className="text-4xl font-bold mb-3">Length Converter</h2>
      <p className="text-gray-700">
        Perform length conversions with a single function.
      </p>

      <div className="w-full mt-10 gap-2 flex flex-col">
        <h4 className="w-full border-b border-gray-300 text-xl font-medium mb-1 ">
          Conversions
        </h4>
        <ul className="list-disc py-2 text-gray-700">
          <li>
            Micrometer (Syntax:{" "}
            <span className="text-red-800 font-bold">µm</span>)
          </li>
          <li>
            Nanometer (Syntax:{" "}
            <span className="text-red-800 font-bold">nm</span>)
          </li>
          <li>
            Milimeter (Syntax:{" "}
            <span className="text-red-800 font-bold">mm</span>)
          </li>
          <li>
            Centimeter (Syntax:{" "}
            <span className="text-red-800 font-bold">cm</span>)
          </li>
          <li>
            Meter (Syntax: <span className="text-red-800 font-bold">m</span>)
          </li>
          <li>
            Decimeter (Syntax:{" "}
            <span className="text-red-800 font-bold">dm</span>)
          </li>
          <li>
            Decameter (Syntax:{" "}
            <span className="text-red-800 font-bold">dam</span>)
          </li>
          <li>
            Hectometer (Syntax:{" "}
            <span className="text-red-800 font-bold">hm</span>)
          </li>
          <li>
            Inch (Syntax: <span className="text-red-800 font-bold">in</span>)
          </li>
          <li>
            Kilometer (Syntax:{" "}
            <span className="text-red-800 font-bold">km</span>)
          </li>
          <li>
            Mile (Syntax: <span className="text-red-800 font-bold">mile</span>)
          </li>
          <li>
            Mil (Syntax: <span className="text-red-800 font-bold">mil</span>)
          </li>
          <li>
            Yard (Syntax: <span className="text-red-800 font-bold">yard</span>)
          </li>
          <li>
            Feet (Syntax: <span className="text-red-800 font-bold">feet</span>)
          </li>
          <li>
            Femtometer (Syntax:{" "}
            <span className="text-red-800 font-bold">fm</span>)
          </li>
          <li>
            Attometer (Syntax:{" "}
            <span className="text-red-800 font-bold">am</span>)
          </li>
          <li>
            Light year (Syntax:{" "}
            <span className="text-red-800 font-bold">ly</span>)
          </li>
        </ul>
      </div>

  
      <div className="w-full mt-10 gap-2 flex flex-col">
        <div className="w-full py-5">
          <h4 className="w-full border-b border-gray-300 text-xl font-medium mb-4 ">
            Syntax
          </h4>
          <span className="inline-flex items-center px-4 py-1 rounded-md bg-gray-200 text-sm">
          lengthCalc({<em>amount</em>}&nbsp;{<em>unit1</em>}&nbsp;{<em>to</em>}
            &nbsp;{<em>unit2</em>}, &nbsp; raw | result)
          </span>
          <p className="mt-5">
            The raw parameter returns a numerical value. The default parameter
            is raw. The result parameter returns a string expression.
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
                  import {lengthCalc} from 'calculation-toolkit';

                  //Returns a numeric value
                  lengthCalc('275 in to yard'); //7.6388888889

                  //Or request a string value
                  lengthCalc('10 cm to ly', 'result'); //1.057000834e-17 ly
                  `
                )
              }
            >
              <Copy strokeWidth={1} size={22} />
            </Button>
          </div>
          <div className="w-full px-5 py-4 flex flex-col gap-2">
            <pre className="text-sm font-medium">
              <code className="text-blue-700">import</code> {"{lengthCalc}"}
              <code className="text-blue-700"> from</code>
              <code className="text-green-800"> 'calculation-toolkit';</code>
            </pre>
            <pre className="text-sm font-medium mt-5">
              <code className="text-gray-500">
                {"//Returns a numeric value"}
              </code>
              <br />
              <code className="text-red-700">lengthCalc</code>(
              {
                <code className="text-green-800">
                  '275 in to yard'
                </code>
              }
              ); <code className="text-gray-500">{"//7.6388888889"}</code>
            </pre>

            <pre className="text-sm font-medium mt-5">
              <code className="text-gray-500">
                {"//Or request a string value"}
              </code>
              <br />
              <code className="text-red-700">lengthCalc</code>(
              {
                <code className="text-green-800">
                  '10 cm to ly', 'result'
                </code>
              }
              ); <code className="text-gray-500">{"//1.057000834e-17 ly"}</code>
            </pre>
          </div>
        </div>
      </div>
      <ActionDoubleButton
        firstName="Temperature"
        firstPath="temperature-converter"
        secondName="Arithmetic Mean"
        secondPath="arithmetic-mean"
      />
    </div>
  );
}
