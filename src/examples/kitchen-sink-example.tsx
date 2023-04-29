import { For, createSignal, createUniqueId } from "solid-js";

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

  const [options, setOptions] = createSignal(candidates);
  const [selectedValues, setSelectedValues] = createSignal(initialValue);

  const onChange = (selected) => {
    setSelectedValues(selected);

    const lastValue = selected[selected.length - 1];
    if (lastValue && !options().includes(lastValue)) {
      setOptions([...options(), lastValue]);
    }
  };

  const props = createOptions(options, {
    key: "name",
    disable: (value) => selectedValues().includes(value),
    filterable: true, // Default
    createable: createValue,
  });

  return (
    <div class="flex flex-1 flex-col max-w-100 gap-3">
      <Select
        multiple
        initialValue={selectedValues()}
        onChange={onChange}
        {...props}
      />
      <div class="flex gap-3 text-sm items-center">
        Quick pick:
        <For
          each={options()
            .filter((option) => !selectedValues().includes(option))
            .slice(0, 3)}
        >
          {(option) => (
            <button
              class="bg-blue-500 text-white px-2 py-1 rounded"
              onClick={() => setSelectedValues([...selectedValues(), option])}
            >
              {option.name}
            </button>
          )}
        </For>
      </div>
    </div>
  );
};
