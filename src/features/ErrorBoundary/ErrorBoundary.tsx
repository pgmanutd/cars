import React, { ErrorInfo } from 'react';
import Typography from '@material-ui/core/Typography';
import _noop from 'lodash/fp/noop';

import { TranslateContext } from 'features/Translate';

export interface ErrorBoundaryProps {
  children: React.ReactNode;
}

export interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.PureComponent<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.state = { hasError: false };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ hasError: true });

    // TODO: Replace _noop with logToSever(error, errorInfo);
    _noop(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <section data-testid="ErrorBoundary">
          <Typography variant="h4" gutterBottom>
            {this.context.translate('features.ErrorBoundary.headerText')}
          </Typography>
          <Typography variant="body1">
            {this.context.translate('features.ErrorBoundary.bodyText')}
          </Typography>
        </section>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.contextType = TranslateContext;

export default ErrorBoundary;
