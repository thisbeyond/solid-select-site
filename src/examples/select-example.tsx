import { Select } from "@thisbeyond/solid-select";
import "@thisbeyond/solid-select/style.css";

export const SelectExample = () => {
  return (
    <Select
      readonly
      class="bg-white text-xl"
      options={["apple", "banana", "pear", "pineapple", "kiwi"]}
    />
  );
};
