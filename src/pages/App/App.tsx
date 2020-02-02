import React from 'react';
import Box from '@material-ui/core/Box';

import { TranslateProvider } from 'features/Translate';
import ErrorBoundary from 'features/ErrorBoundary';
import MainLayout from 'features/MainLayout';

const App: React.FC = () => (
  <Box data-testid="App">
    <TranslateProvider language="en">
      <ErrorBoundary>
        <MainLayout />
      </ErrorBoundary>
    </TranslateProvider>
  </Box>
);

export default App;
