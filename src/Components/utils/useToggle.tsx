import React, { useState } from "react";

export default function useToggle(defaultValue: boolean = false) {
  const [value, setValue] = useState(defaultValue);

  function toggleValue(value: boolean) {
    setValue((currentValue: boolean) =>
      typeof defaultValue === "boolean" ? value : !currentValue
    );
  }
  return [value, toggleValue] as const;
}
