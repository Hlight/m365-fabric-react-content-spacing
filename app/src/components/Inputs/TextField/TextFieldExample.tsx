import * as React from "react";
import {
  TextField,
  MaskedTextField
} from "office-ui-fabric-react/lib/TextField";
import { Stack, IStackProps } from "office-ui-fabric-react/lib/Stack";

export const TextFieldBasicExample: React.StatelessComponent = () => {
  // TextFields don't have to be inside Stacks, we're just using Stacks for layout
  const columnProps: Partial<IStackProps> = {
    tokens: { childrenGap: 15 },
    styles: { root: { width: 300 } }
  };

  const getTextField = () => {
    const randomNum = Math.ceil(Math.random() * 10);
    switch (randomNum) {
      case 1: return (<TextField label="Standard" />);
      case 2: return (<TextField label="Disabled" disabled defaultValue="I am disabled" />);
      case 3: return (<TextField label="Read-only" readOnly defaultValue="I am read-only" />);
      case 4: return (<TextField label="Required " required />);
      case 5: return (<TextField required />);
      case 6: return (<TextField label="With error message" errorMessage="Error message" />);
      case 7: return (
        <MaskedTextField
          label="With input mask"
          mask="m\ask: (999) 999 - 9999"
        />
      );
      case 8: return (
        <TextField label="With an icon" iconProps={{ iconName: "Calendar" }} />
      );
      case 9: return (
        <TextField
          label="With placeholder"
          placeholder="Please enter text here"
        />
      );
      case 10: return (
        <TextField
          label="Disabled with placeholder"
          disabled
          placeholder="I am disabled"
        />
      );
    }
  }

  return (
    <Stack
      horizontal
      tokens={{ childrenGap: 50 }}
      styles={{ root: { width: "100%" } }}
    >
      <Stack {...columnProps}>
        {getTextField()}
      </Stack>
    </Stack>
  );
};
