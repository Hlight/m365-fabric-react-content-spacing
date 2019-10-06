import { mergeStyleSets } from '@uifabric/merge-styles';
import { NeutralColors } from '@uifabric/fluent-theme/lib/fluent';

export const getClassNames = (isNavCollapsed) => {
  return mergeStyleSets({
    root: {
        width: isNavCollapsed ? '48px' : '270px',
        order: -1,
        zIndex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: NeutralColors.gray20,
        transition: 'width 200ms'
    },
    navList: {
      listStyle: 'none',
      margin: '0',
      padding: 0
    }
  });
};