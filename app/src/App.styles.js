import { mergeStyleSets } from '@uifabric/merge-styles';
import { NeutralColors, FontSizes } from '@uifabric/fluent-theme/lib/fluent';

export const getClassNames = (searching) => {
  return mergeStyleSets({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    header: {
      fontSize: FontSizes.size28,
      margin: "0",
      marginBottom: "25px"
    },
    mainWrapper: {
      display: 'flex',
      flex: '1 1 auto'
    },
    content: {
      flex: '1 1 auto',
      padding: '48px',
      overflow: 'scroll'
    },
    pivotsAndSearch: {
      display: 'flex',
      flexDirection: 'row-reverse',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    pivotContainer: {
      display: searching ? 'none' : 'block',
      selectors: {
        'div:first-of-type': {
          display: 'inline-flex'
        }
      }
    },
    footer: {
      height: '200px',
      backgroundColor: NeutralColors.gray170
    },
    searchBar: {
      transition: '300ms all',
      width: searching ? '100%' : '200px'
    }
  });
};