import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { HEADER_HEIGHT } from 'constants/styleConstants';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minHeight: HEADER_HEIGHT,
      position: 'sticky',
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
      flexWrap: 'wrap',
      justifyContent: 'flex-end',
    },
    toolbarLogoContainer: {
      flexGrow: 1,
    },
    toolbarLogo: {
      display: 'inline-block',
      margin: theme.spacing(1, 1.5),
    },
    toolBarChildren: {
      margin: theme.spacing(1, 1.5),
    },
  }),
);
