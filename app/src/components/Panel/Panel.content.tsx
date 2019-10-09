import React from "react";
// import { Checkbox, ChoiceGroup, getId } from "office-ui-fabric-react";
import "./Panel.content.css";
import { mergeStyleSets } from "@uifabric/merge-styles";
// import { getClassNames } from "../Inputs/Inputs.styles";
import { dummyContent } from "../../data/dummyContent";

import { genCheckboxes, genCheckboxDesc, genRadio } from "../Inputs/Inputs";

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
          textAlign: "justify"
        },
        "& + .ms-ChoiceFieldGroup": {
          marginTop: "46px"
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
    console.log("props.isChecked");
    console.log(props.isChecked)
    return type === "radio"
    ? genRadio(props.length, defaultSelected, true)
    : genCheckboxDesc(props.length);
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
const createContentItem = ({type, length, defaultSelected}: IContentItem = {}) => {
  type = type || (() => {
    const types = ["ChoiceFieldGroup", "ChoiceField", "ChoiceFieldGroupDesc"];
    const randomIndex = Math.round(Math.random() * (types.length-1));
    console.log(randomIndex, types[randomIndex]);
    return types[randomIndex];
  })();
  const randomNum = getRandomizer(2, 12);
  const types = type.split("--");
  const typeField = types[0];
  const typeInput = types[1];
  const inputCount = length ? length : randomNum();
  switch (typeField) {
    case "ChoiceFieldGroup":
      return <ChoiceFieldGroup type={typeInput} length={inputCount} />;
    case "ChoiceField":
      return <ChoiceField type={typeInput} length={inputCount} />
    case "ChoiceFieldGroupDesc":
      return <ChoiceFieldGroupDesc type={typeInput} length={inputCount} />
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
      <p>{dummyContent.leads[0]}</p>
      <ChoiceFieldGroup length="12" isChecked={true} type="checkbox" />
    </React.Fragment>
  );
}
function panel02() {
  return (
    <React.Fragment>
      <p>{dummyContent.leads[0]}</p>
      <ChoiceFieldGroup type="checkbox" length="6" isChecked={false} />
      <ChoiceFieldGroup length="3" isChecked={true} type="checkbox" />
    </React.Fragment>
  );
}
function panel03() {
  return (
    <React.Fragment>
      <p>
        Ask why until it becomes painful, until you’re sick of the word. And
        give it character — there’s enough ‘nice’ design in the world. Whether
        sublime, exuberant, minimal or maximal, give your work personality.
        Don’t be afraid to be awkward — what feels comfortable today, will be
        boring tomorrow.
      </p>
      <ChoiceFieldGroupDesc length="4" type="radio" />
      <ChoiceFieldGroup length="4" isChecked={true} type="checkbox" />
    </React.Fragment>
  );
}
function panel04() {
  return genCheckboxes(5);
}
function panel05() {
  return (<>
    <p>{dummyContent.leads[0]}</p>
    { genRadio(12, 1) }
  </>)
}
function panel06() {
  console.log("panel06");
  const genContentItems = (limit:number) => {
    const items: any[] = [];
    for(let i=0; i < limit; i++) {
      items.push(createContentItem())
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
        items.push(createContentItem());
      }
      return items;
    };
    return <>{genContentItems(2)}</>;
}



