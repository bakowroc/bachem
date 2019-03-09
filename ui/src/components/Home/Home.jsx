import {Component, h} from 'preact';
import {LandingPage} from "../LandingPage/LandingPage";

import * as style from './style.scss';
import {CompanyInfo} from "../CompanyInfo/CompanyInfo";
import {Contact} from "../Contact/Contact";
import {Introduction} from "../Introduction/Introduction";

export class Home extends Component {
  render({isAppScrolled}, {}, {}) {
    return (
      <div className={style.home}>
        <LandingPage isScrolled={isAppScrolled}/>
        <Introduction />
        <CompanyInfo />
        <Contact onAction={this.props.onAction}/>
      </div>
    );
  }
}
