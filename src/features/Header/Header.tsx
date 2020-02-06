import React from 'react';
import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';

import routePaths from 'constants/routePaths';

import { useTranslate, LanguageSelector } from 'features/Translate';
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
          <Link
            color="textPrimary"
            href="#"
            className={classes.toolBarChildren}
          >
            {translate('features.Header.purchaseNavLinkText')}
          </Link>
          <Link
            color="textPrimary"
            href={routePaths.favorites}
            className={classes.toolBarChildren}
          >
            {translate('features.Header.myOrdersNavLinkText')}
          </Link>
          <Link
            color="textPrimary"
            href="#"
            className={classes.toolBarChildren}
          >
            {translate('features.Header.sellNavLinkText')}
          </Link>
        </nav>
        <Box className={classes.toolBarChildren}>
          <LanguageSelector />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
