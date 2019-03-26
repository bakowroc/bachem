import * as React from 'react';

interface AppValue {
  isInRoot: boolean;
  isScrolled: boolean;
  isSidebarLocked: boolean;
  isSidebarShown: boolean;
  setValue: (value) => void;
}

const defaultValue = {
  isInRoot: true,
  isScrolled: false,
  isSidebarLocked: false,
  isSidebarShown: true,
  setValue: () => null
};

export const appContext = React.createContext<AppValue>(defaultValue);

export class AppProvider extends React.Component<{}, AppValue> {
  public state = {
    ...defaultValue,
    setValue: value => this.setState({ ...value })
  };

  public render() {
    return <appContext.Provider value={this.state}>{this.props.children}</appContext.Provider>;
  }
}
