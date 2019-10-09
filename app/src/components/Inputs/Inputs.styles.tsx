import { mergeStyleSets } from "@uifabric/merge-styles";
import { NeutralColors, FontSizes } from "@uifabric/fluent-theme/lib/fluent";

export const getClassNames = () => {
  return mergeStyleSets({
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
    },
    msCheckBox: {
      fontSize: "14px",
      fontWeight: "400",
      minHeight: "36px"
    },
    msLabelDesc: {
      display: "block",
      marginLeft: "25px"
    },
    msChoiceOptionDescLabel: {
      fontWeight: "bold",
      lineHeight: "1.46"
    }
  });
};
