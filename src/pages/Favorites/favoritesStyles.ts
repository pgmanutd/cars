import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { CONTAINER_MAX_WIDTH } from 'constants/styleConstants';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: CONTAINER_MAX_WIDTH,
      padding: theme.spacing(4),
    },
  }),
);
