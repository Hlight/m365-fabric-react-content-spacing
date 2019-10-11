import { mergeStyleSets } from "@uifabric/merge-styles";
import { NeutralColors, FontSizes } from "@uifabric/fluent-theme/lib/fluent";

export const getClassNames = () => {
  return mergeStyleSets({
    checkboxDesc: {
      fontWeight: "600",
      selectors: {
        p: {
          lineHeight: "1.46",
          fontWeight: "normal",
          marginLeft: "28px",
          marginTop: "-15px"
        },
        "& label": {
          fontWeight: "600"
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
      fontWeight: "600",
      lineHeight: "1.46"
    }
  });
};
