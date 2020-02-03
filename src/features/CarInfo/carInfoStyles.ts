import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    carImageContainer: {
      display: 'flex',
      justifyContent: 'center',
    },
    carImage: {
      height: 250,
      width: 300,
    },
  }),
);
