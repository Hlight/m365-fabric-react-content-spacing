import React from "react";
// import { Checkbox, ChoiceGroup, getId } from "office-ui-fabric-react";
import "./Panel.content.css";
// import { mergeStyleSets } from "@uifabric/merge-styles";
// import { getClassNames } from "../Inputs/Inputs.styles";
import { dummyContent } from "../../dummy/dummyContent";

import { genCheckboxes, genCheckboxDesc, genRadio } from "../Inputs/Inputs";


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
function panel06() {}

