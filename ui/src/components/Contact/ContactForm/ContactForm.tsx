import * as React from 'react';

import {Button} from "../../Button/Button";
import {Icon} from "../../Icon/Icon";
import {Paper} from "../../Paper/Paper";

import * as style from './style.scss';
import {snackbarContext} from "../../../context/SnackbarProvider";
import {contactContext} from "../../../context/ContactProvider";

const ContactError = {
  NO_EMPTY_SUBJECT: "Temat wiadomosci nie moze byc pusty",
  NO_EMPTY_EMAIL: "Adres email nie moze byc pusty",
  WRONG_EMAIL_PATTERN: "Zly format adresu e-mail",
  NO_EMPTY_CONTENT: "Tresc wiadomosci nie moze byc pusta"
};

const EMAIL_REGEXP = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export const ContactForm = ({className}) => {
  const [isSubmit, setIsSubmit] = React.useState(false);
  const form = React.useRef(document.createElement('form'));
  const snackbar = React.useContext(snackbarContext);
  const contact = React.useContext(contactContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isSubmit) {
      const {subject, returningEmail, content} = form.current;

      switch (true) {
        case subject.value === '':
          snackbar.setValue({value: ContactError.NO_EMPTY_SUBJECT, isShown: true});
          break;

        case returningEmail.value === '':
          snackbar.setValue({value: ContactError.NO_EMPTY_EMAIL, isShown: true});
          break;

        case !returningEmail.value.match(EMAIL_REGEXP):
          snackbar.setValue({value: ContactError.WRONG_EMAIL_PATTERN, isShown: true});
          break;

        case content.value === '':
          snackbar.setValue({value: ContactError.NO_EMPTY_CONTENT, isShown: true});
          break;

        default:
          contact.onSubmit({
            subject: subject.value,
            returningEmail: returningEmail.value,
            content: content.value
          });

          setIsSubmit(true)
      }
    }
  };

  const submitText = isSubmit ? "checkmark-circle-outline" : "arrow-forward-outline";

  return (
    <Paper depth={1} round={4} className={style.container}>
      <form ref={form} className={`${style.form} ${className}`}>

        <span className={style.label}>Temat wiadomosci</span>
        <input className={style.input} type="text" name="subject"/>

        <span className={style.label}>Adres e-mail</span>
        <input className={style.input} type="text" name="returningEmail"/>

        <span className={style.label}>Tresc</span>
        <textarea className={style.textarea} name="content"/>

        <Button
          text={<Icon name={submitText} className={style.icon}/>}
          onClick={handleSubmit}
          className={`${style.submitButton} ${isSubmit ? style.success : ''}`}
        />
      </form>
    </Paper>
  );
};
