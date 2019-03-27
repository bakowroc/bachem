import * as React from 'react';

interface IForm {
  content: string;
  returningEmail: string;
  subject: string;
}

interface IContactValue {
  data: IForm;
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

export const contactContext = React.createContext<IContactValue>(defaultValue);

export class ContactProvider extends React.Component<{}, IContactValue> {
  public state = {
    ...defaultValue,
    onSubmit: data => this.setState({ data })
  };

  public render() {
    return <contactContext.Provider value={this.state}>{this.props.children}</contactContext.Provider>;
  }
}
