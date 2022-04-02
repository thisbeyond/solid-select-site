import { createSignal, createUniqueId } from "solid-js";

import { Select, createOptions } from "@thisbeyond/solid-select";

export const KitchenSinkExample = () => {
  const createValue = (name) => {
    return { id: createUniqueId(), name };
  };

  const candidates = [
    createValue("apple"),
    createValue("banana"),
    createValue("pear"),
    createValue("pineapple"),
    createValue("kiwi"),
  ];

  const initialValue = [candidates[2]];

  const [values, setValues] = createSignal(candidates);
  const [selectedValues, setSelectedValues] = createSignal(initialValue);

  const onChange = (selected) => {
    setSelectedValues(selected);

    const lastValue = selected[selected.length - 1];
    if (lastValue && !values().includes(lastValue)) {
      setValues([...values(), lastValue]);
    }
  };

  const props = createOptions(values(), {
    key: "name",
    disable: (value) => selectedValues().includes(value),
    filterable: true, // Default
    createable: createValue,
  });

  return (
    <Select
      multiple
      initialValue={initialValue}
      onChange={onChange}
      {...props}
    />
  );
};
