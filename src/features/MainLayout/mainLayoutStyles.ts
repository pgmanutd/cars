import { makeStyles, createStyles } from '@material-ui/core/styles';

import { HEADER_HEIGHT, FOOTER_HEIGHT } from 'constants/styleConstants';

export const useStyles = makeStyles(() =>
  createStyles({
    root: {
      minHeight: `calc(100vh - ${HEADER_HEIGHT + FOOTER_HEIGHT}px)`,
    },
  }),
);
