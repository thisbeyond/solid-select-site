import { Select, createFilterable } from "@thisbeyond/solid-select";

export const MultipleFilterableExample = () => (
  <Select
    multiple
    {...createFilterable(["apple", "banana", "pear", "pineapple", "kiwi"])}
  />
);
