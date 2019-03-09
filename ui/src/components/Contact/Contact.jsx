import axios from 'axios';
import {Component, h} from 'preact';

import {Paper} from "../Paper/Paper";
import {ContactForm} from "./ContactForm/ContactForm";


import * as globalStyle from '../../styles/global.scss';
import * as style from './style.scss';

export class Contact extends Component {

  onFormSubmit = async (data) => {
  	const { subject, returningEmail, content } = data;
    await axios.post('http://localhost:8000/mail/send', data, {headers: {
        "Content-Type": "application/json"
      }});
  };

  onFormError = ({isError, message}) => this.props.onAction({isShown: isError, message});

  render({}, {}, {}) {
  	return (
  	  <div className={style.container} id="contact">
  			<section className={style.contact}>
          <h3 className={globalStyle.pageHeading}>Kontakt</h3>
          <div className={style.info}>
            <Paper depth={1} round={4} className={style.content}>
              <section className={style.contentSection}>
                <h3 className={style.title}>E-mail</h3>
                <div className={style.text}>tabliczki@bachem.pl</div>
                <div className={style.text}>biuro@bachem.pl</div>
              </section>
              <section className={style.contentSection}>
                <h3 className={style.title}>Telefon</h3>
                <div className={style.text}>(0) 71 345 654 44</div>
                <div className={style.text}>(+48) 602 435 572</div>
              </section>
              <section className={style.contentSection}>
                <h3 className={style.title}>Adres</h3>
                <div className={style.text}>ul. Sycowska 6 51-252</div>
                <div className={style.text}>Wroclaw, Polska</div>
              </section>
            </Paper>
            <ContactForm className={style.contactForm} onSubmit={this.onFormSubmit} onError={this.onFormError}/>
          </div>
  			</section>
  		</div>
  	);
  }
}