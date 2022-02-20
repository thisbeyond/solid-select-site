import { Select, createOptions } from "@thisbeyond/solid-select";

export const FilterableExample = () => (
  <Select
    {...createOptions(["apple", "banana", "pear", "pineapple", "kiwi"])}
  />
);
