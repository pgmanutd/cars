import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 800,
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
