import React from 'react';
import CardMedia from '@material-ui/core/CardMedia';

import Logo from 'assets/images/logo.png';

import { useStyles } from './appLogoStyles';

const AppLogo: React.FC = (props) => {
  const classes = useStyles();

  return (
    <CardMedia
      data-testid="AppLogo"
      image={Logo}
      title="AppLogo"
      {...props}
      className={classes.root}
    />
  );
};

export default AppLogo;
