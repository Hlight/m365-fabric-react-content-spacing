import React from "react";
// import { Checkbox, ChoiceGroup, getId } from "office-ui-fabric-react";
import "./Panel.content.css";
import { mergeStyleSets } from "@uifabric/merge-styles";
// import { getClassNames } from "../Inputs/Inputs.styles";
import { dummyContent } from "../../data/dummyContent";

import { genCheckboxes, genCheckboxDesc, genRadio } from "../Inputs/Inputs";
import { DropdownBasicExample } from "../Inputs/DropDown/DropDownExample";
import { TextFieldBasicExample } from "../Inputs/TextField/TextFieldExample";
import { ToggleBasicExample } from "../Inputs/Toggle/ToggleExample";
import { ButtonAnchorExample } from "../Inputs/Button/ButtonAnchor"; 
import { RandomLink } from "../Inputs/Link/LinkExample";
import "./weighted-random.d";
import weightedRandom from "weighted-random";

const LeadP = (): JSX.Element => {
  return (
    <p className="lead">{dummyContent.leads[0]}</p>
  )
};

function getRandomizer(bottom: number, top: number) {
  return function() {
    return Math.floor(Math.random() * (1 + top - bottom)) + bottom;
  };
}

const getClassNames = () =>
  mergeStyleSets({
    choiceFieldGroup: {
      selectors: {
        "& > p": {
          lineHeight: "20px",
          textAlign: "justify",
          fontWeight: "600",
          color: "#333",
          marginBottom: "20px"
        },
        "& + .ms-ChoiceFieldGroup": {
          marginTop: "46px"
        },
        "&":{
          marginBottom: "27px"
        }
      }
    }
  });

// TODO: combine shared logic of ChoiceField & ChoiceFieldGroup
// Group of choice fields (checkbox or radios)
// If checkbox defaultSelected is ignored
const ChoiceFieldGroup = (props: any) => {
  const getControls = (type: string) => {
    return type === "radio"
      ? genRadio(props.length, defaultSelected)
      : genCheckboxes(props.length, props.isChecked);
  };

  const type = !!props.type ? props.type :
   (Math.round(Math.random() * 1) === 0) ? "radio" : "checkbox";

  const defaultSelected = props.defaultSelected || Math.round(Math.random() * props.length);
  return (
    <div className={"ms-ChoiceFieldGroup " + getClassNames().choiceFieldGroup}>
      <p>If you can design one thing, you can design everything.</p>
      {getControls(type)}
    </div>
  );
};
// Single Choice Field 
const ChoiceField = (props: any) => {
  const getControls = (type: string) => {
    return type === "radio"
      ? genRadio(props.length, defaultSelected)
      : genCheckboxes(props.length, props.isChecked);
  };
  const type = !!props.type ? props.type : (Math.round(Math.random() * 1) === 0) ? "radio" : "checkbox";
  const defaultSelected = props.defaultSelected || Math.round(Math.random() * props.length);
  return <>{getControls(type)}</>;
}
// Groups of choices with descriptions after each label
const ChoiceFieldGroupDesc = (props: any) => {
  const getControls = (type: string) => {
    // console.log("props.isChecked");
    // console.log(props.isChecked)
    return type === "radio"
    ? genRadio(props.length, defaultSelected, true)
    : genCheckboxDesc(props.length, props.isChecked);
  }
  const type = !!props.type ? props.type :
   (Math.round(Math.random() * 1) === 0) ? "radio" : "checkbox";

  const defaultSelected = props.defaultSelected || Math.round(Math.random() * props.length);
  return (
    <div className={"ms-ChoiceFieldGroup " + getClassNames().choiceFieldGroup}>
      <p>If you can design one thing, you can design everything.</p>
      {getControls(type)}
    </div>
  );
};

interface IContentItem {
  type?: string;
  length?: string;
  defaultSelected?: string;
}
// Function to return content item 
// if type, length or defaultSelected not provided 
// then they are assigned at random.
const createContentItem = ({type, length, defaultSelected}: IContentItem = {}): { component: any, adjust: number } => {
  let itemCountAdjust: number = 0;
  type = type || (() => {
    // giving components a weight to give some control to the randomness of certain elements.
    const components = [
      { weight: 5.0, type: "ChoiceFieldGroup", adjust: 0 },
      { weight: 1.0, type: "ChoiceField", adjust: 0 },
      { weight: 3.0, type: "ChoiceFieldGroupDesc", adjust: 0 },
      { weight: 1.0, type: "LeadP", adjust: -1 },
      { weight: 1.0, type: "DropdownBasicExample", adjust: -1 },
      { weight: 1.5, type: "TextFieldBasicExample", adjust: -1 },
      { weight: 1.5, type: "ToggleBasicExample", adjust: -1 },
      { weight: 0.75, type: "ButtonAnchorExample", adjust: -1 },
      { weight: 1, type: "Link", adjust: -1 }
    ];
    var weights = components.map(function(component) {
      return component.weight;
    });
    var selectionIndex = weightedRandom(weights); // 0, 1, or 2

    var componentToRender = components[selectionIndex].type;
    itemCountAdjust = components[selectionIndex].adjust
    return componentToRender;

  })();
  const randomNum = getRandomizer(2, 12);
  
  const types = type.split("--");
  const typeField = types[0];
  const typeInput = types[1];
  const inputCount = length ? length : randomNum();
  switch (typeField) {
    case "ChoiceFieldGroup":
      return {
        component: <ChoiceFieldGroup type={typeInput} length={inputCount} />,
        adjust: itemCountAdjust
      };
    case "ChoiceField":
      return {
        component: <ChoiceField type={typeInput} length={inputCount} />,
        adjust: itemCountAdjust
      };
    case "ChoiceFieldGroupDesc":
      return {
        component: (
          <ChoiceFieldGroupDesc type={typeInput} length={inputCount} />
        ),
        adjust: itemCountAdjust
      };
    case "LeadP":
      return {
        component: <LeadP />,
        adjust: itemCountAdjust
      };
    case "DropdownBasicExample":
      return {
        component: <DropdownBasicExample />,
        adjust: itemCountAdjust
      };
    case "TextFieldBasicExample":
      return {
        component: <TextFieldBasicExample />,
        adjust: itemCountAdjust
      };
    case "ToggleBasicExample":
      return {
        component: <ToggleBasicExample />,
        adjust: itemCountAdjust
      };
    case "ButtonAnchorExample":
      return {
        component: <ButtonAnchorExample />,
        adjust: itemCountAdjust
      };
    case "Link":
      return {
        component: RandomLink(),
        adjust: itemCountAdjust
      }
    default:
      return { component: "", adjust: 0 };
  }
};
//
// Function to get configured panel content
export const getPanelContent = (num: any) => {
  num = parseInt(num);
  switch (num) {
    case 1:
      return panel01();
    case 2:
      return panel02();
    case 3:
      return panel03();
    case 4:
      return panel04();
    case 5:
      return panel05();
    case 6:
      return panel06();
    case 7:
      return randomContentItems();
  };
}

function panel01() {
  return (
    <React.Fragment>
      <LeadP />
      <ChoiceFieldGroup length="12" isChecked={true} type="checkbox" />
    </React.Fragment>
  );
}
function panel02() {
  return (
    <React.Fragment>
      <LeadP />
      <ChoiceFieldGroup type="checkbox" length="6" isChecked={true} />
      <ChoiceFieldGroup length="3" isChecked={true} type="checkbox" />
    </React.Fragment>
  );
}
function panel03() {
  return (
    <React.Fragment>
      <LeadP />
      <ChoiceFieldGroupDesc length="4" type="checkbox" isChecked={true} />
      <ChoiceFieldGroup length="4" isChecked={true} type="checkbox" />
    </React.Fragment>
  );
}
function panel04() {
  return genCheckboxes(5);
}
function panel05() {
  return (
    <>
      <LeadP />
      <ChoiceFieldGroup length="12" defaultSelected="1" type="radio" />
    </>
  );
}
function panel06() {
  console.log("panel06");
  const genContentItems = (limit:number) => {
    const items: any[] = [];
    for(let i=0; i < limit; i++) {
      const { component, adjust } = createContentItem();
      items.push(component);
      limit = limit - adjust;
    }
    return items;
  }
  return <>{genContentItems(2)}</>;
}

function randomContentItems() {
    console.log("panel07");
    const genContentItems = (limit: number) => {
      const items: any[] = [];
      for (let i = 0; i < limit; i++) {
        const { component, adjust } = createContentItem();
        items.push(component);
        // when components are only one line use adjust to add to the limit 
        // this allows more components to be rendered per panel.
        limit = limit - adjust;
      }
      return items;
    };
    return <>{genContentItems(2)}</>;
}



