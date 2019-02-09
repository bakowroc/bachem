import {Component, h} from 'preact';
import { Router } from 'preact-router';
import Match from 'preact-router/Match';

import {Header} from "../Header/Header";
import {LandingPage} from "../LandingPage/LandingPage";

import * as style from './style.scss';
import {CompanyInfo} from "../CompanyInfo/CompanyInfo";
import {Contact} from "../Contact/Contact";
import {Footer} from "../Footer/Footer";

export class Home extends Component {
  render({isAppScrolled}, {}, {}) {
    return (
      <div className={style.home}>
        <LandingPage isScrolled={isAppScrolled}/>
        <CompanyInfo />
        <Contact onAction={this.props.onAction}/>
      </div>
    );
  }
}
