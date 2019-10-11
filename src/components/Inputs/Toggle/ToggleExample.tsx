import * as React from "react";
import { Toggle } from "office-ui-fabric-react/lib/Toggle";
import { Stack, IStackTokens } from "office-ui-fabric-react/lib/Stack";

const stackTokens: IStackTokens = { childrenGap: 10 };

export const ToggleBasicExample: React.FunctionComponent = () => {
  const getToggle = () => {
    const randomNum = Math.ceil(Math.random() * 8);
      switch (randomNum) {
        case 1: return (
        <Toggle
        label="Enabled and checked"
        defaultChecked
        onText="On"
        offText="Off"
        onChange={_onChange}
      />);
      case 2: return (
      <Toggle
        label="Enabled and unchecked"
        onText="On"
        offText="Off"
        onChange={_onChange}
      />);
      case 3: return (
      <Toggle
        label="Disabled and checked"
        defaultChecked
        disabled
        onText="On"
        offText="Off"
      />);
      case 4: return (
      <Toggle
        label="Disabled and unchecked"
        disabled
        onText="On"
        offText="Off"
      />);
      case 5: return (
      <Toggle
        label="With inline label"
        inlineLabel
        onText="On"
        offText="Off"
        onChange={_onChange}
      />);
      case 6: return (
      <Toggle
        label="Disabled with inline label"
        inlineLabel
        disabled
        onText="On"
        offText="Off"
      />);
      case 7: return (
      <Toggle
        label="With inline label and without onText and offText"
        inlineLabel
        onChange={_onChange}
      />);
      case 8: return (
      <Toggle
        label="Disabled with inline label and without onText and offText"
        inlineLabel
        disabled
      />);
    }
  }
  return (
    <Stack tokens={stackTokens}>
      {getToggle()}
    </Stack>
  );
};

function _onChange(ev: React.MouseEvent<HTMLElement>, checked?: boolean) {
  console.log("toggle is " + (checked ? "checked" : "not checked"));
}
