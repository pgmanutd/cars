import React from 'react';
import Box from '@material-ui/core/Box';

import { TranslateProvider } from 'features/Translate';
import ErrorBoundary from 'features/ErrorBoundary';
import MainLayout from 'features/MainLayout';
import Header from 'features/Header';
import Footer from 'features/Footer';

const App: React.FC = () => (
  <Box data-testid="App">
    <TranslateProvider language="en">
      <ErrorBoundary>
        <Header />
        <MainLayout />
        <Footer />
      </ErrorBoundary>
    </TranslateProvider>
  </Box>
);

export default App;
