import { Select, createFilterable } from "@thisbeyond/solid-select";

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
      { key: "name" }
    )}
  />
);
