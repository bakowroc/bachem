import axios from 'axios';
import {Component, h} from 'preact';

import {Paper} from "../Paper/Paper";
import {ContactForm} from "../ContactForm/ContactForm";

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
  			<div className={style.circleShape} />
  			<section className={style.contact}>
  				<Paper depth={3} round={2} className={style.infoBox}>
  					<div className={style.content}>
  						<section className={style.contentSection}>
  							<h3 className={style.heading}>E-mail</h3>
  							<div className={style.text}>tabliczki@bachem.pl</div>
  							<div className={style.text}>biuro@bachem.pl</div>
  							<div className={style.text}>reklama@bachem.pl</div>
  						</section>
  						<section className={style.contentSection}>
  							<h3 className={style.heading}>Telefon</h3>
  							<div className={style.text}>(0) 71 345 654 44</div>
  							<div className={style.text}>(+48) 602 435 572</div>
  						</section>
  						<section className={style.contentSection}>
  							<h3 className={style.heading}>Adres</h3>
  							<div className={style.text}>ul. Sycowska 6 51-252</div>
  							<div className={style.text}>Wroclaw, Polska</div>
  						</section>
  					</div>
  					<ContactForm className={style.contactForm} onSubmit={this.onFormSubmit} onError={this.onFormError}/>
  				</Paper>
  			</section>
  		</div>
  	);
  }
}