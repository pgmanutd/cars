import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    root: {
      minHeight: `calc(100vh - 160px)`,
    },
  }),
);
