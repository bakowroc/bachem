import * as React from 'react';

interface ISnackbarValue {
  isShown: boolean;
  setValue: (value) => void;
  value: string;
}

const defaultValue = {
  isShown: false,
  setValue: () => null,
  value: ''
};

export const snackbarContext = React.createContext<ISnackbarValue>(defaultValue);

export class SnackbarProvider extends React.Component<{}, ISnackbarValue> {
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
