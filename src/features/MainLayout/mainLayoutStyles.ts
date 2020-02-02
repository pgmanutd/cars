import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minHeight: `calc(100vh - ${theme.spacing(20)}px)`,
    },
  }),
);
