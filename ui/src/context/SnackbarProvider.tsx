import * as React from 'react';

interface SnackbarValue {
  value: string;
  isShown: boolean;
  setValue: (value) => void;
}

const defaultValue = {
  value: '',
  isShown: false,
  setValue: () => {}
};

export const snackbarContext = React.createContext<SnackbarValue>(defaultValue);

export class SnackbarProvider extends React.Component<{}, SnackbarValue> {
  timeout;
  state = {
    ...defaultValue,
    setValue: value => this.setState({...value}, () => {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() =>  this.setState({isShown: false}), 3000);
    }),
  };

  render() {
    return (
      <snackbarContext.Provider value={this.state}>{this.props.children}</snackbarContext.Provider>
    )
  }
}
