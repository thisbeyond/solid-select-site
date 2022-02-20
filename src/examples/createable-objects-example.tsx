import { Select, createOptions } from "@thisbeyond/solid-select";

export const CreateableObjectsExample = () => (
  <Select
    {...createOptions(
      [
        { name: "apple" },
        { name: "banana" },
        { name: "pear" },
        { name: "pineapple" },
        { name: "kiwi" },
      ],
      {
        key: "name",
        createable: true,
      }
    )}
  />
);
