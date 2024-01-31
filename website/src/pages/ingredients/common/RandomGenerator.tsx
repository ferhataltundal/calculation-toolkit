import HelmetWrapper from "@/components/HelmetWrapper";
import { handleCopyClick } from "@/components/Home";
import { Button } from "@/components/ui/button";
import { ActionDoubleButton } from "@/pages/Docs";
import { Copy } from "lucide-react";

export default function RandomGenerator() {
  return (
    <HelmetWrapper
      title="Random Generator"
      description="random generator calculation"
    >
      <div className="w-full flex flex-col mb-20">
        <h2 className="text-4xl font-bold mb-3">Random Generator</h2>
        <p className="text-gray-700">
          A function that generates random strings or numbers of a specified
          length and type.
        </p>
        <div className="w-full mt-10 gap-2 flex flex-col">
          <div className="w-full py-5">
            <h4 className="w-full border-b border-gray-300 text-xl font-medium mb-4 ">
              Syntax
            </h4>
            <span className="inline-flex items-center px-4 py-1 rounded-md bg-gray-200 text-sm">
              randomGenerator(
              {<em>length</em>}
              ,&nbsp;&nbsp;
              {<em>type (number | string | both)</em>}
              ,&nbsp;&nbsp;
              {<em>options{"<object, specialCharacter, customCharacter>"}</em>})
            </span>
            <p className="mt-5">
              This function generates random values of a specified length and
              type.
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
                  import {randomGenerator} from 'calculation-toolkit';

                  randomGenerator(10, "string", { 
                     specialCharacter: true //Optional  Default: false
                  }); //An example random string with special characters

                  randomGenerator(6, "number")//An example random number

                  randomGenerator(10, "string", { 
                     specialCharacter: true, //Optional  Default: false
                     customCharacter: "£æ!&" //Optional  Default: none
                  }); //An example random string with custom characters
                  
                  randomGenerator(5)// Example output: hd33G
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
                {"{randomGenerator}"}
                <code className="text-blue-700"> from</code>
                <code className="text-green-800"> 'calculation-toolkit';</code>
              </pre>

              <pre className="text-sm font-medium mt-2">
                <code className="text-red-700">randomGenerator</code>(10,{" "}
                <code className="text-blue-600">"string"</code>, {"{"} <br />
                &nbsp;&nbsp;&nbsp;specialCharacter:{" "}
                <code className="text-blue-700">true</code>{" "}
                <code className="text-gray-500">
                  {"//Optional  Default: false"}
                </code>
                <br />
                {"}"});{" "}
                <code className="text-gray-500">
                  {"//An example random string with special characters"}
                </code>
              </pre>

              <pre className="text-sm font-medium mt-2">
                <code className="text-red-700">randomGenerator</code>(6,{" "}
                <code className="text-blue-600">"number"</code>)
                <code className="text-gray-500">
                  {"//An example random number"}
                </code>
              </pre>

              <pre className="text-sm font-medium mt-2">
                <code className="text-red-700">randomGenerator</code>(10,{" "}
                <code className="text-blue-600">"string"</code>, {"{"} <br />
                &nbsp;&nbsp;&nbsp;specialCharacter:{" "}
                <code className="text-blue-700">true</code>,{" "}
                <code className="text-gray-500">
                  {"//Optional  Default: false"}
                </code>
                <br />
                &nbsp;&nbsp;&nbsp;customCharacter:{" "}
                <code className="text-blue-700">"£æ!&"</code>{" "}
                <code className="text-gray-500">
                  {"//Optional  Default: none"}
                </code>
                <br />
                {"}"});{" "}
                <code className="text-gray-500">
                  {"//An example random string with custom characters"}
                </code>
              </pre>

              <pre className="text-sm font-medium mt-2">
                <code className="text-red-700">randomGenerator</code>(5)
                <code className="text-gray-500">
                  {"// Example output: hd33G"}
                </code>
              </pre>
            </div>
          </div>
        </div>
        <ActionDoubleButton
          firstName="Gamma"
          firstPath="gamma"
          secondName="Circle Area"
          secondPath="circle-area"
        />
      </div>
    </HelmetWrapper>
  );
}
