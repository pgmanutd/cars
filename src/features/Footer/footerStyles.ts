import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 80,
      borderTop: `1px solid ${theme.palette.divider}`,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  }),
);
