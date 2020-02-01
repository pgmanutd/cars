import React, { ErrorInfo } from 'react';
import Typography from '@material-ui/core/Typography';
import _noop from 'lodash/fp/noop';

export type ErrorBoundaryProps = {};

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
            Something went wrong.
          </Typography>
          <Typography variant="body1">
            Refresh the page or try again later. If this error persists, Please
            contact the administrator.
          </Typography>
        </section>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
