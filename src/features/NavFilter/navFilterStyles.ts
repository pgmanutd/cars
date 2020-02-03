import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      border: `1px solid ${theme.palette.divider}`,
      padding: theme.spacing(3),
    },
    formControl: {
      width: '100%',
      marginBottom: theme.spacing(3),
    },
    selectEmpty: {
      marginTop: theme.spacing(3),
    },
    filterButtonContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
  }),
);
