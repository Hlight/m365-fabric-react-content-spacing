import React from "react";
import { getClassNames } from "./Inputs.styles";
import {
  Checkbox,
  ChoiceGroup,
  getId,
  IChoiceGroupOptionProps
} from "office-ui-fabric-react";
import { getUniqueLabel, getUniqueDesc } from "../../data/dummyContent";


const checkboxStyles: any = (): any => {
  return {
    root: {
      marginTop: "10px",
      lineHeight: "1.46",
      fontWeight: "600"
    },
    selectors: {
      "&": {
      fontSize: "14px",
      fontWeight: "400",
      minHeight: "36px",
      marginBottom: "4px"
    },
    "& + p": {
      marginTop: "-6px"
    }
    }
  };
};


const CheckboxDesc = (props: any) => {
  return (
    <div className={getClassNames().checkboxDesc}>
      <Checkbox
        label={props.label}
        defaultChecked={props.isChecked}
        styles={checkboxStyles}
      />
      <p>{props.desc}</p>
    </div>
  );
};
export const genCheckboxDesc = (
         amount: number = 2,
         isChecked?: boolean
       ): any[] => {
         const out: any[] = [];
         const historyLabels: number[] = [];
         const historyDescs: number[] = [];
         for (let i = 0; i < amount; i++) {
           const label: string = getUniqueLabel(historyLabels);
           const desc: string = getUniqueDesc(historyDescs);
          const isCheckedEnabled =
            typeof isChecked === "undefined"
              ? !!Math.round(Math.random() * 1)
              : isChecked;
           out.push(
             <CheckboxDesc
               label={label}
               desc={desc}
               isChecked={isCheckedEnabled}
             />
           );
         }
         return out;
       };

// Generate checkboxes with random labels
export const genCheckboxes = (amount: number = 2, isChecked?: boolean): JSX.Element[] => {
  const out: JSX.Element[] = [];
  const history: number[] = [];
  for (let i = 0; i < amount; i++) {
    const label: string = getUniqueLabel(history);
    const defaultChecked: boolean = (typeof isChecked !== "undefined") ? isChecked : !!Math.round(Math.random() * 1);
    out.push(
      <Checkbox
        label={label}
        defaultChecked={defaultChecked}
        styles={checkboxStyles}
      />
    );
  }
  return out;
};


export const genRadio = (
  amount: number,
  defaultOption: number,
  isDescEnabled?: boolean
): JSX.Element[] => {
  const out: JSX.Element[] = [];
  const history: number[] = [];
  const historyDesc: number[] = [];
  isDescEnabled = (typeof isDescEnabled === "undefined") ? false : isDescEnabled;
  const options: any[] = [];
  let defaultSelectedKey: string = "";
  for (let i = 0; i < amount; i++) {
    const labelDesc = getUniqueDesc(historyDesc);
    const option: {
      key: string;
      text: string;
      disabled?: boolean;
      onRenderLabel?: any;
    } = {
      key: getId(String(i)),
      text: getUniqueLabel(history),
      onRenderLabel: (props: IChoiceGroupOptionProps): JSX.Element => {
        return (
          <div style={{marginBottom: "4px"}}>
            <span
              id={props.labelId}
              className={
                "ms-ChoiceFieldLabel "+ (isDescEnabled ? getClassNames().msChoiceOptionDescLabel : "")
              }
            >
              {props.text}
            </span>
            {isDescEnabled ? <span className={getClassNames().msLabelDesc}>{labelDesc}</span> : ""}
          </div>
        );
      }
    };
    if (i === defaultOption - 1) {
      defaultSelectedKey = option.key;
    }
    options.push(option);
  }

  out.push(
    <ChoiceGroup
      className="defaultChoiceGroup"
      defaultSelectedKey={defaultSelectedKey}
      options={options}
      onChange={ev => {
        console.log(ev);
      }}
      label="Pick one"
      required={true}
      styles={{
        root: {
          minHeight: "36px",
          selectors: {
            ".ms-ChoiceField": {
              minHeight: "36px",
              marginTop: "0",
              marginBottom: "4px"
            }
          }
        }
      }}
    />
  );
  return out;
};
