import * as React from 'react';

interface IAppValue {
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

export const appContext = React.createContext<IAppValue>(defaultValue);

export class AppProvider extends React.Component<{}, IAppValue> {
  public state = {
    ...defaultValue,
    setValue: value => this.setState({ ...value })
  };

  public render() {
    return <appContext.Provider value={this.state}>{this.props.children}</appContext.Provider>;
  }
}
