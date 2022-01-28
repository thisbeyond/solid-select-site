import { Select } from "@thisbeyond/solid-select";
import "@thisbeyond/solid-select/style.css";
import { createSignal } from "solid-js";

export const DynamicExample = () => {
  const optionSets = {
    fruit: ["apple", "banana", "pear", "pineapple", "kiwi"],
    starwars: ["jedi", "sith", "stormtrooper", "luke", "leia"],
  };
  const [activeSet, setActiveSet] = createSignal("fruit");

  return (
    <Select
      options={optionSets[activeSet()]}
      onChange={() =>
        setActiveSet(activeSet() === "fruit" ? "starwars" : "fruit")
      }
    />
  );
};
