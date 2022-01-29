import { Select, createFilterable } from "@thisbeyond/solid-select";
import "@thisbeyond/solid-select/style.css";

export const FilterableObjectsExample = () => (
  <Select
    {...createFilterable(
      [
        { name: "apple" },
        { name: "banana" },
        { name: "pear" },
        { name: "pineapple" },
        { name: "kiwi" },
      ],
      "name"
    )}
  />
);
