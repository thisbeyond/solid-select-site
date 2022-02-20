import { Select, createOptions } from "@thisbeyond/solid-select";

export const FilterableObjectsExample = () => (
  <Select
    {...createOptions(
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
