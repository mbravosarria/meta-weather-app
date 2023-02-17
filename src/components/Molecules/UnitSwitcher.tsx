import React from "react";
import Button from "@/components/Atoms/Button";

function UnitSwitcher() {
  return (
    <div className="flex flex-row space-x-2">
      <Button className="rounded-full bg-white py-1 px-[0.7rem] text-lg text-purple-dark shadow-lg">
        °C
      </Button>
      <Button className="rounded-full bg-gray py-1 px-[0.7rem] text-lg text-white shadow-lg">
        °F
      </Button>
    </div>
  );
}

export default UnitSwitcher;
