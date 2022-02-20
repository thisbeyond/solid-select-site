import { Select, createOptions } from "@thisbeyond/solid-select";

export const CreateableExample = () => (
  <Select
    {...createOptions(["apple", "banana", "pear", "pineapple", "kiwi"], {
      createable: true,
    })}
  />
);
