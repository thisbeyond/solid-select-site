import { Select, createFilterable } from "@thisbeyond/solid-select";

export const FilterableExample = () => (
  <Select
    {...createFilterable(["apple", "banana", "pear", "pineapple", "kiwi"])}
  />
);
