import React from 'react';
import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import routePaths from 'constants/routePaths';

import { useTranslate } from 'features/Translate';
import AppLogo from 'features/AppLogo';

import { useStyles } from './headerStyles';

const Header: React.FC = props => {
  const classes = useStyles();
  const { translate } = useTranslate();

  return (
    <AppBar
      data-testid="Header"
      {...props}
      color="default"
      elevation={0}
      className={classes.root}
    >
      <Toolbar className={classes.toolbar}>
        <Link
          color="textPrimary"
          href={routePaths.cars}
          className={classes.toolbarLogo}
        >
          <AppLogo />
        </Link>
        <nav>
          <Link color="textPrimary" href="#" className={classes.link}>
            {translate('features.Header.purchaseNavLinkText')}
          </Link>
          <Link
            color="textPrimary"
            href={routePaths.favorites}
            className={classes.link}
          >
            {translate('features.Header.myOrdersNavLinkText')}
          </Link>
          <Link color="textPrimary" href="#" className={classes.link}>
            {translate('features.Header.sellNavLinkText')}
          </Link>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
