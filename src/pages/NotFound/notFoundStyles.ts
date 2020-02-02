import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: theme.spacing(7),
      paddingBottom: theme.spacing(7),
      textAlign: 'center',
    },
    appLogoContainer: {
      marginBottom: theme.spacing(2),
    },
  }),
);
