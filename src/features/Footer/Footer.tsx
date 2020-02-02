import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';

import routePaths from 'constants/routePaths';

import { useTranslate } from 'features/Translate';

import { useStyles } from './footerStyles';

const Footer: React.FC = () => {
  const classes = useStyles();
  const { translate } = useTranslate();

  return (
    <Box data-testid="Footer" component="footer" className={classes.root}>
      <Typography variant="body2" color="textPrimary" align="center">
        {translate('features.Footer.copyright')}{' '}
        <Link color="inherit" href={routePaths.cars}>
          {translate('features.Footer.homeLinkText')}
        </Link>{' '}
        {new Date().getFullYear()}.
      </Typography>
    </Box>
  );
};

export default Footer;
