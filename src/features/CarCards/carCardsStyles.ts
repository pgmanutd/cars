import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    carImageContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    carImage: {
      height: 80,
      width: 80,
    },
    carContainer: {
      border: `1px solid ${theme.palette.divider}`,
      padding: theme.spacing(2),
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
  }),
);
