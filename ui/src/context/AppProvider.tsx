import * as React from 'react';

interface AppValue {
  isSidebarShown: boolean,
  isSidebarLocked: boolean,
  isScrolled: boolean;
  isInRoot: boolean;
  setValue: (value) => void;
}

const defaultValue = {
  isSidebarShown: true,
  isSidebarLocked: false,
  isScrolled: false,
  isInRoot: true,
  setValue: () => {}
};

export const appContext = React.createContext<AppValue>(defaultValue);

export class AppProvider extends React.Component<{}, AppValue> {
  state = {
    ...defaultValue,
    setValue: value => this.setState({...value})
  };

  render() {
    return (
      <appContext.Provider value={this.state}>{this.props.children}</appContext.Provider>
    )
  }
}
