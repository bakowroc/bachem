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
  home = document.createElement('div');
  state = {
    isHomeScrolled: false
  };

  componentDidMount() {
    this.home.onscroll = this.onAppScroll;
  }

  render({}, {isHomeScrolled}, {}) {
    return (
      <div ref={ref => this.home = ref} className={style.home}>
        <LandingPage/>
        <CompanyInfo />
        <Contact onAction={this.props.onAction}/>
      </div>
    );
  }
}
