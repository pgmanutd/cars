import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { CONTAINER_MAX_WIDTH } from 'constants/styleConstants';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: CONTAINER_MAX_WIDTH,
      paddingTop: theme.spacing(7),
      paddingBottom: theme.spacing(7),
      textAlign: 'center',
    },
    appLogoContainer: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: theme.spacing(2),
    },
  }),
);
