import * as React from 'react';

interface Form {
  subject: string;
  returningEmail: string;
  content: string;
}

interface ContactValue {
  data: Form;
  onSubmit: (data) => void;
}

const defaultValue = {
  data: {
    subject: '',
    returningEmail: '',
    content: ''
  },
  onSubmit: () => null,
};

export const contactContext = React.createContext<ContactValue>(defaultValue);

export class ContactProvider extends React.Component<{}, ContactValue> {
  state = {
    ...defaultValue,
    onSubmit: data => this.setState({data}),
  };

  render() {
    return (
      <contactContext.Provider value={this.state}>{this.props.children}</contactContext.Provider>
    )
  }
}
