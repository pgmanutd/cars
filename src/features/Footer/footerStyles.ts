import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      borderTop: `1px solid ${theme.palette.divider}`,
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
  }),
);
