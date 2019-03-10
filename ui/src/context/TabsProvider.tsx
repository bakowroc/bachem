import * as React from 'react';

interface TabsValue {
  active: string;
  body: any;
  setValue: (value) => void;
}

const defaultValue = {
  active: '',
  body: [],
  setValue: () => {}
};

export const tabsContext = React.createContext<TabsValue>(defaultValue);

export class TabsProvider extends React.Component<{}, TabsValue> {
  state = {
    ...defaultValue,
    setValue: value => this.setState({...value})
  };

  render() {
    return (
      <tabsContext.Provider value={this.state}>{this.props.children}</tabsContext.Provider>
    )
  }
}
