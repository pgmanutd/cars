import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      marginRight: theme.spacing(1),
      marginLeft: theme.spacing(1),
    },
  }),
);
