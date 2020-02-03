import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { HEADER_HEIGHT } from 'constants/styleConstants';

const pagePaddingFactor = 4;

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(pagePaddingFactor),
    },
    navFilterContainer: {
      position: 'sticky',
      top: HEADER_HEIGHT + theme.spacing(pagePaddingFactor),
    },
  }),
);
