import HelmetWrapper from "@/components/HelmetWrapper";
import { handleCopyClick } from "@/components/Home";
import { Button } from "@/components/ui/button";
import { ActionDoubleButton } from "@/pages/Docs";
import { Copy } from "lucide-react";

export default function Currency() {
  return (
    <HelmetWrapper title="Currency" description="currency calculation">
      <div className="w-full flex flex-col mb-20">
        <h2 className="text-4xl font-bold mb-3">Currency</h2>
        <p className="text-gray-700">
          Convert an amount to multiple currency units with a specified fixed
          decimal precision.
        </p>
        <div className="w-full mt-10 gap-2 flex flex-col">
          <div className="w-full py-5">
            <h4 className="w-full border-b border-gray-300 text-xl font-medium mb-4 ">
              Syntax
            </h4>
            <span className="inline-flex items-center px-4 py-1 rounded-md bg-gray-200 text-sm">
              currency({<em>amount</em>},&nbsp;&nbsp;{<em>units</em>}
              ,&nbsp;&nbsp;{<em>fixed (default is 2)</em>})
            </span>
            <p className="mt-5">
              This function takes an `amount` and a dictionary of `units`
              representing different currency units and their conversion rates.
              It calculates the equivalent amount in each currency unit and
              rounds the results to a specified number of decimal places
              (default is 2). The result is returned as an object where each key
              is a currency unit and its value is the converted amount.
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
                    import {currency} from 'calculation-toolkit';

                    //Returns a object value
                    currency(100, { USD: 1.18, EUR: 1.00, GBP: 0.85 });
                    // { USD: 118.00, EUR: 100.00, GBP: 85.00 }
                    `
                  )
                }
              >
                <Copy strokeWidth={1} size={22} />
              </Button>
            </div>
            <div className="w-full px-5 py-4 flex flex-col gap-2">
              <pre className="text-sm font-medium">
                <code className="text-blue-700">import</code> {"{currency}"}
                <code className="text-blue-700"> from</code>
                <code className="text-green-800"> 'calculation-toolkit';</code>
              </pre>
              <pre className="text-sm font-medium mt-5">
                <code className="text-gray-500">
                  {"//Returns a object value"}
                </code>
                <br />
                <code className="text-red-700">currency</code>(
                {<code className="text-green-800">100</code>},{" "}
                {"{ USD: 1.18, EUR: 1.00, GBP: 0.85 }"}
                ); <br />
                <code className="text-gray-500">
                  {"// { USD: 118.00, EUR: 100.00, GBP: 85.00 }"}
                </code>
              </pre>
            </div>
          </div>
        </div>
        <ActionDoubleButton
          firstName="Square Perimeter"
          firstPath="square-perimeter"
          secondName="Parity"
          secondPath="parity"
        />
      </div>
    </HelmetWrapper>
  );
}
