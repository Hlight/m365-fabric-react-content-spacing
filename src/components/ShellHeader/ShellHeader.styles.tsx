import { mergeStyleSets } from '@uifabric/merge-styles';
import { DefaultPalette } from '@uifabric/styling';
import { NeutralColors } from '@uifabric/fluent-theme/lib/fluent';
import { FontSizes } from '@uifabric/fluent-theme';

export const getClassNames = () => {
  return mergeStyleSets({
    root: {
        display: 'flex',
        height: '48px',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: NeutralColors.gray170,
        zIndex: 1
    },
    waffleWrapper: {
      display: 'flex',
      alignItems: 'center'
    },
    waffle: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '48px',
      width: '48px',
      backgroundColor: 'transparent',
      selectors: {
        button: {
          backgroundColor: 'transparent',
          color: 'white',
          selectors: {
            ':hover': {
              backgroundColor: 'transparent',
              color: 'white',
            }
          }
        },
        ':hover': {
          backgroundColor: NeutralColors.gray150
        }

      }
    },
    logo: {
      color: DefaultPalette.white,
      fontSize: FontSizes.size14,
      marginLeft: 16
    },
    search: {
      display: 'none',
      selectors: {
        '.ms-SearchBox': {
          borderRadius: '2px',
          border: 0
        }
      }
    },
    user: {
      display: 'flex',
      flexDirection: 'row-reverse',
      alignItems: 'center',
      selectors: {
        '.ms-Button': {
          height: '48px',
          width: '48px',
          backgroundColor: 'transparent',
          color: DefaultPalette.white,
          selectors: {
            ':hover': {
              backgroundColor: NeutralColors.gray150,
              color: DefaultPalette.white
            }
          }
        },
        '.ms-Button-menuIcon': {
          fontSize: '18px',
          height: '18px',
          lineHeight: '18px'
        },
        '.ms-Persona': {
          width: '48px',
          height: '48px',
          justifyContent: 'center',
          selectors: {
            ':hover': {
              backgroundColor: NeutralColors.gray150,
            }
          }
        }
      }
    }
  });
};