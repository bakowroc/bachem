import * as React from 'react';

interface Form {
  content: string;
  returningEmail: string;
  subject: string;
}

interface ContactValue {
  data: Form;
  onSubmit: (data) => void;
}

const defaultValue = {
  data: {
    content: '',
    returningEmail: '',
    subject: ''
  },
  onSubmit: () => null
};

export const contactContext = React.createContext<ContactValue>(defaultValue);

export class ContactProvider extends React.Component<{}, ContactValue> {
  public state = {
    ...defaultValue,
    onSubmit: data => this.setState({ data })
  };

  public render() {
    return <contactContext.Provider value={this.state}>{this.props.children}</contactContext.Provider>;
  }
}
