import React from "react";
// import { Checkbox, ChoiceGroup, getId } from "office-ui-fabric-react";
import "./Panel.content.css";
// import { mergeStyleSets } from "@uifabric/merge-styles";
// import { getClassNames } from "../Inputs/Inputs.styles";
import { dummyContent } from "../../data/dummyContent";

import { genCheckboxes, genCheckboxDesc, genRadio } from "../Inputs/Inputs";


const ChoiceFieldGroup = (props: any) => {
  const getControls = (type: string) => {
    return type === "radio"
      ? genRadio(props.length, defaultSelected)
      : genCheckboxes(props.length);
  };

  const type = !!props.type ? props.type :
   (Math.round(Math.random() * 1) === 0) ? "radio" : "checkbox";

  const defaultSelected = props.defaultSelected || Math.round(Math.random() * props.length);
  return (
    <div className="ms-ChoiceFieldGroup">
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
const createContentItem = ({type, length, defaultSelected}: IContentItem = {}) => {
  type = type || (() => {
    const types = ["ChoiceFieldGroup"];
    const randomIndex = Math.round(Math.random() * (types.length-1));
    console.log(randomIndex, types[randomIndex]);
    return types[randomIndex];
  })();
  const types = type.split("--");
  const typeField = types[0];
  const typeInput = types[1];
  const inputCount = (length) ? length : Math.round(Math.random() * 12);
  switch (typeField) {
    case "ChoiceFieldGroup":
      return <ChoiceFieldGroup type={typeInput} length={inputCount} />;
    // case ""      
  }
};
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
    };
}

function panel01() {
  return (
    <React.Fragment>
      <p>
        Ask why until it becomes painful, until you’re sick of the word. And
        give it character — there’s enough ‘nice’ design in the world. Whether
        sublime, exuberant, minimal or maximal, give your work personality.
        Don’t be afraid to be awkward — what feels comfortable today, will be
        boring tomorrow.
      </p>
      <div className="ms-ChoiceFieldGroup">
       {genCheckboxes(12)}
      </div>
    </React.Fragment>
  );
}
function panel02() {
  return (
    <React.Fragment>
      <p>
        Ask why until it becomes painful, until you’re sick of the word. And
        give it character — there’s enough ‘nice’ design in the world. Whether
        sublime, exuberant, minimal or maximal, give your work personality.
        Don’t be afraid to be awkward — what feels comfortable today, will be
        boring tomorrow.
      </p>
      <div className="ms-ChoiceFieldGroup">
        <p>If you can design one thing, you can design everything.</p>

       {genCheckboxes(6)}
      </div>
      <div className="ms-ChoiceFieldGroup">
        <p>If you can design one thing, you can design everything.</p>
        {genCheckboxes(3)}
      </div>
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
      <div className="ms-ChoiceFieldGroup">
        <p>If you can design one thing, you can design everything. </p>
        {genCheckboxDesc(4)}
      </div>
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



