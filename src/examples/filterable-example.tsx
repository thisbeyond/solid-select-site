import { Select, createFilterable } from "@thisbeyond/solid-select";
import "@thisbeyond/solid-select/style.css";

export const FilterableExample = () => (
  <Select
    {...createFilterable(["apple", "banana", "pear", "pineapple", "kiwi"])}
  />
);
