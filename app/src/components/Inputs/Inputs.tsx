import React from "react";
import { getClassNames } from "./Inputs.styles";

export const CheckboxDefault: React.FC = () => {
  return (
    <div>checkbox</div>
  )
}
export const CheckboxInfo: React.FC = () => {
  return <div>checkbox</div>;
};
export const CheckboxGroup: React.FC = (props) => {
  return (
  <div className="checkbox-group">
    <p>checkbox group</p>
    {props.children}
  </div>
  );
}
export const RadialDefault: React.FC = () => {
  return (
    <div>radial default</div>
  )
}