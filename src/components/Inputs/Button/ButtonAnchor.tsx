import * as React from "react";
import { DefaultButton } from "office-ui-fabric-react";

export interface IButtonExampleProps {
  // These are set based on the toggles shown above the examples (not needed in real code)
  disabled?: boolean;
  checked?: boolean;
}

export const ButtonAnchorExample: React.FunctionComponent<
  IButtonExampleProps
> = props => {
  const { disabled, checked } = props;

  // The href causes this button to be rendered as an anchor.
  return (
    <DefaultButton
      href="http://bing.com"
      target="_blank"
      title="let us bing!"
      disabled={disabled}
      checked={checked}
      styles={{
        root: {
          display: "inline-block",
          margin: "14px 14px 14px 0"
        }
      }}
    >
      Bing
    </DefaultButton>
  );
};
