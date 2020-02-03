import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      width: '100%',
      marginBottom: theme.spacing(3),
    },
    selectEmpty: {
      marginTop: theme.spacing(3),
    },
  }),
);
