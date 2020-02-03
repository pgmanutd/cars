import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    carImageContainer: {
      display: 'flex',
      justifyContent: 'center',
    },
    carImage: {
      height: 250,
      width: 300,
    },
    favoriteBox: {
      border: `1px solid ${theme.palette.divider}`,
      padding: theme.spacing(3),
    },
    favoriteButtonContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginTop: theme.spacing(2),
    },
  }),
);
