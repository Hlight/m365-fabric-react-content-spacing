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
    "Design is thinking made visual.",
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

export const getUniqueLabel = (history: number[]): string => {
  const index: number = Math.floor(Math.random() * dummyContent.labels.length);
  // index already in history so recursively call again.
  if (history.includes(index)) {
    // If our history is as long as the dummy length reset history.
    if (history.length === dummyContent.labels.length) {
      history.length = 0;
    }
    return getUniqueLabel(history);
  } else {
    // Put index in history and return label.
    history.push(index);
    const label = dummyContent.labels[index];
    return label;
  }
};
export const getUniqueDesc = (history: number[]): string => {
  const index: number = Math.floor(
    Math.random() * dummyContent.descriptions.length
  );
  if (history.includes(index)) {
    if (history.length === dummyContent.descriptions.length) {
      history.length = 0;
    }
    return getUniqueDesc(history);
  } else {
    history.push(index);
    const label = dummyContent.descriptions[index];
    return label;
  }
};