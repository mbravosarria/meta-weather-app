import React from "react";
import Button from "@/components/Atoms/Button";
import { useUnit } from "@/context/unit/unit.context";

function UnitSwitcher() {
  const { setUnit, unit } = useUnit();

  return (
    <div className="flex flex-row space-x-2">
      <Button
        className={`rounded-full ${
          unit == "" ? "bg-white text-purple-dark" : "bg-gray text-white"
        } py-1 px-[0.6rem] text-lg shadow-lg`}
        onClick={() => setUnit({ unit: "" })}
      >
        °C
      </Button>
      <Button
        className={`rounded-full ${
          unit == "I" ? "bg-white text-purple-dark" : "bg-gray text-white"
        } py-1 px-[0.6rem] text-lg shadow-lg`}
        onClick={() => setUnit({ unit: "I" })}
      >
        °F
      </Button>
    </div>
  );
}

export default UnitSwitcher;
