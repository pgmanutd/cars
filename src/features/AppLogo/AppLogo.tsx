import React from 'react';

import Logo from 'assets/images/logo.png';

const AppLogo: React.FC = props => (
  <img src={Logo} alt="AppLogo" data-testid="AppLogo" {...props} />
);

export default AppLogo;
