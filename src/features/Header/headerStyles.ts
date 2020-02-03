import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 80,
      position: 'sticky',
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
      justifyContent: 'space-between',
    },
    toolbarLogo: {
      margin: theme.spacing(1, 1.5),
    },
    link: {
      margin: theme.spacing(1, 1.5),
    },
  }),
);
