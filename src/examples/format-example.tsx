import { Select } from "@thisbeyond/solid-select";
import { createSignal } from "solid-js";

export const FormatExample = () => {
  const options = [
    { name: "apple", label: "🍏 Apple" },
    { name: "banana", label: "🍌 Banana" },
    { name: "pear", label: "🍐 Pear" },
    { name: "pineapple", label: "🍍 Pineappe" },
    { name: "kiwi", label: "🥝 Kiwi" },
  ];

  const format = (item, type) => (type === "option" ? item.label : item.name);

  const [value, setValue] = createSignal(null);

  return (
    <div class="flex flex-1 flex-col max-w-100 gap-3">
      <Select options={options} format={format} onChange={setValue} />
      <div class="text-sm">Current value: {JSON.stringify(value())}</div>
    </div>
  );
};
