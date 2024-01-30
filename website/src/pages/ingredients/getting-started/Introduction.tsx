import { ActionSingleButton } from "@/pages/Docs";

export default function Introduction() {
  return (
    <div className="w-full flex flex-col">
      <h2 className="text-4xl font-bold mb-3">Introduction</h2>
      <p>
        Welcome to "Calculation-Toolkit"! This library is designed to simplify
        mathematical calculations and save developers time. Our extensive range
        of functions is tailored to meet all your needs, from simple addition to
        complex statistical analysis. With our user-friendly interface and
        detailed documentation, you can quickly and effectively integrate these
        tools into your projects. Follow the sections below to get started and
        enjoy more efficient mathematical computations!
      </p>
      <ActionSingleButton name="Installation" path="installation" />
    </div>
  );
}
