import React from "react";
// import { getClassNames } from "./Inputs.styles";
import { Checkbox, ChoiceGroup, getId } from "office-ui-fabric-react";
import { mergeStyleSets } from "@uifabric/merge-styles";
import { dummyContent } from "../../data/dummyContent";

// export const CheckboxDefault: React.FC = () => {
//   return (
//     <div>checkbox</div>
//   )
// }
// export const CheckboxInfo: React.FC = () => {
//   return <div>checkbox</div>;
// };
// export const CheckboxGroup: React.FC = (props) => {
//   return (
//   <div className="checkbox-group">
//     <p>checkbox group</p>
//     {props.children}
//   </div>
//   );
// }
// export const RadialDefault: React.FC = () => {
//   return (
//     <div>radial default</div>
//   )
// }


const checkboxStyles: any = (): any => {
  return {
    root: {
      marginTop: "10px",
      lineHeight: "1.46",
      fontWeight: "bold"
    },
    selectors: {
      "& + p": ""
    }
  };
};

const getClassNames = () =>
  mergeStyleSets({
    checkboxDesc: {
      fontWeight: "bold",
      selectors: {
        p: {
          lineHeight: "1.46",
          fontWeight: "normal",
          marginLeft: "28px",
          marginTop: "2px"
        },
        "& label": {
          fontWeight: "bold"
        }
      }
    }
  });
const CheckboxDesc = (props: any) => {
  return (
    <div className={getClassNames().checkboxDesc}>
      <Checkbox
        label={props.label}
        defaultChecked={true}
        styles={checkboxStyles}
      />
      <p>{props.desc}</p>
    </div>
  );
};
export const genCheckboxDesc = (amount: number): any[] => {
  const out: any[] = [];
  const historyLabels: number[] = [];
  const historyDescs: number[] = [];
  const getUniqueLabel = (): string => {
    const index: number = Math.floor(
      Math.random() * dummyContent.labels.length
    );
    if (historyLabels.includes(index)) {
      if (historyLabels.length === dummyContent.labels.length) {
        historyLabels.length = 0;
      }
      return getUniqueLabel();
    } else {
      historyLabels.push(index);
      const label = dummyContent.labels[index];
      return label;
    }
  };
  const getUniqueDesc = (): string => {
    const index: number = Math.floor(
      Math.random() * dummyContent.descriptions.length
    );
    if (historyDescs.includes(index)) {
      if (historyDescs.length === dummyContent.descriptions.length) {
        historyDescs.length = 0;
      }
      return getUniqueDesc();
    } else {
      historyDescs.push(index);
      const label = dummyContent.descriptions[index];
      return label;
    }
  };
  for (let i = 0; i < amount; i++) {
    const label: string = getUniqueLabel();
    const desc: string = getUniqueDesc();
    out.push(<CheckboxDesc label={label} desc={desc} />);
  }
  return out;
};

// Generate checkboxes with random labels
export const genCheckboxes = (amount: number): JSX.Element[] => {
  const out: JSX.Element[] = [];
  const history: number[] = [];
  // Get random label while reducing duplicates
  const getUniqueContent = (): string => {
    const index: number = Math.floor(
      Math.random() * dummyContent.labels.length
    );
    // index already in history so recursively call again.
    if (history.includes(index)) {
      // If our history is as long as the dummy length reset history.
      if (history.length === dummyContent.labels.length) {
        history.length = 0;
      }
      return getUniqueContent();
    } else {
      // Put index in history and return label.
      history.push(index);
      const label = dummyContent.labels[index];
      // console.log(label);
      return label;
    }
  };
  // Create checkboxes.
  for (let i = 0; i < amount; i++) {
    const label: string = getUniqueContent();
    const defaultChecked: boolean = !!Math.round(Math.random() * 1);
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
         defaultOption: number
       ): JSX.Element[] => {
         const out: JSX.Element[] = [];
         const history: number[] = [];
         const getUniqueLabel = (): string => {
           const index: number = Math.floor(
             Math.random() * dummyContent.labels.length
           );
           // index already in history so recursively call again.
           if (history.includes(index)) {
             // If our history is as long as the dummy length reset history.
             if (history.length === dummyContent.labels.length) {
               history.length = 0;
             }
             return getUniqueLabel();
           } else {
             // Put index in history and return label.
             history.push(index);
             const label = dummyContent.labels[index];
             return label;
           }
         };
         // Create checkboxes.
         let defaultSelectedKey: string = "";
         const options: any[] = [];
         for (let i = 0; i < amount; i++) {
           const option: { key: string; text: string; disabled?: boolean } = {
             key: getId(String(i)),
             text: getUniqueLabel()
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
           />
         );
         return out;
       };