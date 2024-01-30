import { handleCopyClick } from "@/components/Home";
import { Button } from "@/components/ui/button";
import { ActionDoubleButton } from "@/pages/Docs";
import { Copy } from "lucide-react";

export default function Temperature() {
  return (
    <div className="w-full flex flex-col mb-20">
      <h2 className="text-4xl font-bold mb-3">Temperature Converter</h2>
      <p className="text-gray-700">
        Perform temperature conversions with a single function.
      </p>

      <div className="w-full mt-10 gap-2 flex flex-col">
        <h4 className="w-full border-b border-gray-300 text-xl font-medium mb-1 ">
          Conversions
        </h4>
        <ul className="list-disc py-2 text-gray-700">
          <li>
            Kelvin (Syntax:{" "}
            <span className="text-red-800 font-bold">kelvin</span>)
          </li>
          <li>
            Fahrenheit (Syntax:{" "}
            <span className="text-red-800 font-bold">fahrenheit</span>)
          </li>
          <li>
            Celsius (Syntax:{" "}
            <span className="text-red-800 font-bold">celsius</span>)
          </li>
          <li>
            Rankine (Syntax:{" "}
            <span className="text-red-800 font-bold">rankine</span>)
          </li>
          <li>
            Reaumur (Syntax:{" "}
            <span className="text-red-800 font-bold">reaumur</span>)
          </li>
          <li>
            Triple Point Of Water (Syntax:{" "}
            <span className="text-red-800 font-bold">tpw</span>)
          </li>
        </ul>
      </div>

      <div className="w-full mt-10 gap-2 flex flex-col">
        <div className="w-full py-5">
          <h4 className="w-full border-b border-gray-300 text-xl font-medium mb-4 ">
            Syntax
          </h4>
          <span className="inline-flex items-center px-4 py-1 rounded-md bg-gray-200 text-sm">
            tempCalc({<em>amount</em>}&nbsp;{<em>unit1</em>}&nbsp;{<em>to</em>}
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
                  import {tempCalc} from 'calculation-toolkit';

                  //Returns a numeric value
                  tempCalc('275 fahrenheit to celsius'); //135

                  //Or request a string value
                  tempCalc('35 kelvin to rankine', 'result'); //63 rankine
                  `
                )
              }
            >
              <Copy strokeWidth={1} size={22} />
            </Button>
          </div>
          <div className="w-full px-5 py-4 flex flex-col gap-2">
            <pre className="text-sm font-medium">
              <code className="text-blue-700">import</code> {"{tempCalc}"}
              <code className="text-blue-700"> from</code>
              <code className="text-green-800"> 'calculation-toolkit';</code>
            </pre>
            <pre className="text-sm font-medium mt-5">
              <code className="text-gray-500">
                {"//Returns a numeric value"}
              </code>
              <br />
              <code className="text-red-700">tempCalc</code>(
              {
                <code className="text-green-800">
                  '275 fahrenheit to celsius'
                </code>
              }
              ); <code className="text-gray-500">{"//135"}</code>
            </pre>

            <pre className="text-sm font-medium mt-5">
              <code className="text-gray-500">
                {"//Or request a string value"}
              </code>
              <br />
              <code className="text-red-700">tempCalc</code>(
              {
                <code className="text-green-800">
                  '35 kelvin to rankine', 'result'
                </code>
              }
              ); <code className="text-gray-500">{"//63 rankine"}</code>
            </pre>
          </div>
        </div>
      </div>
      <ActionDoubleButton
        firstName="Installation"
        firstPath="installation"
        secondName="Length"
        secondPath="length-converter"
      />
    </div>
  );
}
