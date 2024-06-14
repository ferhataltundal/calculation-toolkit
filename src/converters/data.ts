import type { OptionsType, DataStorageTypes } from "../types/type";

export default function dataStorageConverter({
  from,
  to,
  input,
  output = "raw",
}: OptionsType<DataStorageTypes>) {
  if (!input) {
    return new Error("Invalid value!");
  }

  try {
    switch (from) {
      case "bit":
        return;
      default:
        return SyntaxError("Unit not found!");
    }
  } catch (e) {
    return new Error("Invalid value!");
  }
}
