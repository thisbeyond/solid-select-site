import { Select } from "@thisbeyond/solid-select";
import "@thisbeyond/solid-select/style.css";

export const AutocompleteExample = () => {
  return (
    <Select
      options={(inputValue: string) =>
        ["apple", "banana", "pear", "pineapple", "kiwi"].filter((fruit) =>
          fruit.startsWith(inputValue)
        )
      }
    />
  );
};
