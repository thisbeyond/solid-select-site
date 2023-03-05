import { createOptions, Select } from "@thisbeyond/solid-select";
import { Show } from "solid-js";

export const CustomTemplateExample = () => {
  const props = createOptions(
    [
      { fruit: "apple", icon: "🍎", new: true },
      { fruit: "banana", icon: "🍌", new: true },
      { fruit: "pear", icon: "🍐", new: false },
      { fruit: "pineapple", icon: "🍍", new: false },
      { fruit: "kiwi", icon: "🥝", new: false },
    ],
    { key: "fruit", filterable: true }
  );

  const customFormat = (data: any, type: "option" | "value"): any =>
    type === "option" ? (
      <CustomOption
        label={data.label}
        new={data.value.new}
        icon={data.value.icon}
      />
    ) : (
      <CustomOption label={data.fruit} new={data.new} icon={data.icon} />
    );

  return <Select {...props} format={customFormat} />;
};

const CustomOption = (props: { label: string; icon: string; new: boolean }) => (
  <>
    <Show when={props.new}>
      <span
        style={{
          background: "cornflowerblue",
          color: "white",
          "border-radius": "4px",
          padding: "4px",
          margin: "0 4px",
          "font-size": "12px",
        }}
      >
        NEW
      </span>
    </Show>
    <span>{props.label}</span>
    <span>{props.icon}</span>
  </>
);
