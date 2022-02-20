import { Select, createOptions } from "@thisbeyond/solid-select";

export const MultipleCreateableExample = () => (
  <Select
    multiple
    {...createOptions(["apple", "banana", "pear", "pineapple", "kiwi"], {
      createable: true,
    })}
  />
);
