import {Component, h} from 'preact';
import { Router } from 'preact-router';
import Match from 'preact-router/Match';

import {Header} from "../Header/Header";
import {LandingPage} from "../LandingPage/LandingPage";

import * as style from './style.scss';
import {CompanyInfo} from "../CompanyInfo/CompanyInfo";

export class Home extends Component {
  home = document.createElement('div');
  state = {
    isHomeScrolled: false
  };

  onHomeScroll = () => {
   const isHomeScrolled = this.home.scrollTop !== 0;
   if(isHomeScrolled !== this.state.isHomeScrolled) {
     this.setState({isHomeScrolled}, () => this.props.onScroll(this.state.isHomeScrolled));
   }
  };

  componentDidMount() {
    this.home.onscroll = this.onHomeScroll;
  }

  render({}, {isHomeScrolled}, {}) {
    return (
      <div ref={ref => this.home = ref} className={style.home}>
        <LandingPage/>
        <CompanyInfo />
      </div>
    );
  }
}
