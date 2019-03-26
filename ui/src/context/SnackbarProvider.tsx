import * as React from 'react';

interface SnackbarValue {
  isShown: boolean;
  setValue: (value) => void;
  value: string;
}

const defaultValue = {
  isShown: false,
  setValue: () => null,
  value: ''
};

export const snackbarContext = React.createContext<SnackbarValue>(defaultValue);

export class SnackbarProvider extends React.Component<{}, SnackbarValue> {
  public timeout;
  public state = {
    ...defaultValue,
    setValue: value =>
      this.setState({ ...value }, () => {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => this.setState({ isShown: false }), 3000);
      })
  };

  public render() {
    return <snackbarContext.Provider value={this.state}>{this.props.children}</snackbarContext.Provider>;
  }
}
