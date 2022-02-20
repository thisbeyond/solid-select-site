import { Select, createOptions } from "@thisbeyond/solid-select";

export const MultipleFilterableExample = () => (
  <Select
    multiple
    {...createOptions(["apple", "banana", "pear", "pineapple", "kiwi"])}
  />
);
