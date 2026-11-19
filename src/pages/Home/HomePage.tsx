import { Select } from "@/shared/ui";
import { useState } from "react";

const options = [
  { name: "Опция 1", value: "option1" },
  { name: "Опция 2", value: "option2" },
  { name: "Опция 3", value: "option3" },
];

export function HomePage() {
  const [state, setState] = useState(options[1]);
  console.log(state);

  return (
    <div>
      <Select
        label="Все метки"
        icon="ChevronDown"
        options={options}
        selectedOption={state}
        onChange={setState}
      />
    </div>
  );
}
