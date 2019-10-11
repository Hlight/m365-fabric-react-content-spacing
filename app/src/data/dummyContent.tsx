import * as React from "react";
import { Link } from "office-ui-fabric-react/lib/Link";
export const dummyContent = {
  leads: [
    "Ask why until it becomes painful, until you’re sick of the word. And give it character — there’s enough ‘nice’ design in the world. Whether sublime, exuberant, minimal or maximal, give your work personality. Don’t be afraid to be awkward — what feels comfortable today, will be boring tomorrow."
  ],
  groupHeadings: ["If you can design one thing, you can design everything."],
  labels: [
    "Design can be art.",
    "Design can be aesthetics.",
    "Design is so simple, that’s why it is so complicated.",
    "Practice safe design: Use a concept.",
    "Good design is obvious. Great design is transparent.",
    "Design is thinking made visual."
  ],
  descriptions: [
    "Good design is obvious. Great design is transparent.",
    "Design is so simple, that’s why it is so complicated.",
    "Styles come and go. Good design is a language, not a style. Good design is obvious. Great design is transparent."
  ],
  names: [
    "El Lissitzky",
    "Joseph Müller Brockmann",
    "Emil Ruder",
    "Wolfgang Weingart"
  ]
};

export const getUniqueName = (history: number[] = []): string =>{
  const strings: string[] = dummyContent.names;
  const index: number = Math.floor(Math.random() * strings.length);
  if (history.includes(index)) {
    if (history.length === strings.length) {
      history.length = 0;
    }
    return getUniqueName(history);
  } else {
    history.push(index);
    const name = strings[index];
    return name;
  }
}
export const getUniqueLabel = (history: number[] = []): string => {
  const strings: string[] = dummyContent.labels;
  const index: number = Math.floor(Math.random() * strings.length);
  // index already in history so recursively call again.
  if (history.includes(index)) {
    // If our history is as long as the dummy length reset history.
    if (history.length === strings.length) {
      history.length = 0;
    }
    return getUniqueLabel(history);
  } else {
    // Put index in history and return label.
    history.push(index);
    const label = strings[index];
    return label;
  }
};
export const getUniqueDesc = (history: number[] = []): string => {
  const strings: string[] = dummyContent.descriptions;
  const index: number = Math.floor(
    Math.random() * strings.length
  );
  if (history.includes(index)) {
    if (history.length === strings.length) {
      history.length = 0;
    }
    return getUniqueDesc(history);
  } else {
    history.push(index);
    const label = strings[index];
    return label;
  }
};
