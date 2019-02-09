import {Component, h} from 'preact';

import {Button} from "../Button/Button";
import * as style from './style.scss';
import {Icon} from "../Icon/Icon";

const ContactError = {
  NO_EMPTY_SUBJECT: "Temat wiadomosci nie moze byc pusty",
  NO_EMPTY_EMAIL: "Adres email nie moze byc pusty",
  WRONG_EMAIL_PATTERN: "Zly format adresu e-mail",
  NO_EMPTY_CONTENT: "Tresc wiadomosci nie moze byc pusta"
};

const EMAIL_REGEXP = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export class ContactForm extends Component {
  form = undefined;
  formTimeout = undefined;

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.isSubmit) {
      const {subject, returningEmail, content} = this.form;

      switch (true) {
        case subject.value === '':
          this.props.onError({message: ContactError.NO_EMPTY_SUBJECT, isError: true});
          break;

        case returningEmail.value === '':
          this.props.onError({message: ContactError.NO_EMPTY_EMAIL, isError: true});
          break;

        case !returningEmail.value.match(EMAIL_REGEXP):
          this.props.onError({message: ContactError.WRONG_EMAIL_PATTERN, isError: true});
          break;

        case content.value === '':
          this.props.onError({message: ContactError.NO_EMPTY_CONTENT, isError: true});
          break;

        default:
          this.props.onSubmit({
            subject: subject.value,
            returningEmail: returningEmail.value,
            content: content.value
          });

          this.handleSubmitActions()
      }
    }
  };

  handleSubmitActions = () => {
    clearTimeout(this.formTimeout);
    this.setState({isSubmit: true, message: '', isError: false}, () => {
      this.form.reset();
      this.formTimeout = setTimeout(() =>  this.setState({isSubmit: false}), 1500);
    });
  };

  render({className}, {error, isError, isSubmit}, {}) {
    const submitText = isSubmit ? "checkmark-circle-outline" : "arrow-forward-outline";
    return (
      <div className={style.container}>
        <form ref={ref => this.form = ref} className={`${style.form} ${className}`}>

          <label className={style.label} for="subject">Temat wiadomosci</label>
          <input className={style.input} type="text" name="subject"/>

          <label className={style.label} for="returningEmail">Adres e-mail</label>
          <input className={style.input} type="text" name="returningEmail"/>

          <label className={style.label} for="content">Tresc</label>
          <textarea className={style.textarea} name="content"/>

          <Button text={<Icon name={submitText} className={style.icon}/>} onClick={this.handleSubmit} className={`${style.submitButton} ${isSubmit ? style.success : ''}`}/>
        </form>
      </div>
    );
  }
}