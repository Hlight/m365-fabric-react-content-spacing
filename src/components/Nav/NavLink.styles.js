import { mergeStyleSets } from '@uifabric/merge-styles';
import { DefaultPalette } from '@uifabric/styling';
import { NeutralColors, FontSizes } from '@uifabric/fluent-theme/lib/fluent';

export const getClassNames = (selected) => {
  return mergeStyleSets({
    root: {
      display: 'flex',
      flex: '1 1 auto',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      alignItems: 'center',
      cursor: 'pointer',
      transition: 'background-color 200ms',
      backgroundColor: 'transparent',
      textDecoration: 'none',
      position: 'relative',
      selectors: {
        ':hover': {
          backgroundColor: NeutralColors.gray50
        },
        ':active': {
          backgroundColor: NeutralColors.gray80
        },
        ':before': {
          position: 'absolute',
          display: selected ? 'block' : 'none',
          top: '11px',
          left: '4px',
          content: '""',
          height: '26px',
          width: '2px',
          backgroundColor: DefaultPalette.accent
        }
      }
    },
    icon: {
      display: 'flex',
      fontSize: FontSizes.icon,
      lineHeight: '48px',
      color: DefaultPalette.black,
      justifyContent: 'center',
      alignItems: 'center',
      flex: '0 0 48px'
    },
    navItemText: {
      flex: '1 1 auto',
      lineHeight: '48px',
      textOverflow: 'ellipsis',
      overflowX: 'hidden',
      whiteSpace: 'nowrap',
      color: DefaultPalette.black,
      fontSize: FontSizes.size14
    }
  });
};