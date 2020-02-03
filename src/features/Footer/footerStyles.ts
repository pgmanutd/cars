import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { FOOTER_HEIGHT } from 'constants/styleConstants';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: FOOTER_HEIGHT,
      borderTop: `1px solid ${theme.palette.divider}`,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  }),
);
