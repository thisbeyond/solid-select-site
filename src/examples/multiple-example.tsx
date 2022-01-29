import { Select } from "@thisbeyond/solid-select";
import "@thisbeyond/solid-select/style.css";

export const MultipleExample = () => (
  <Select multiple options={["apple", "banana", "pear", "pineapple", "kiwi"]} />
);
