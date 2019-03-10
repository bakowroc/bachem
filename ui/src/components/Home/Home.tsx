import * as React from 'react';
import {LandingPage} from "../LandingPage/LandingPage";

import * as style from './style.scss';
import {CompanyInfo} from "../CompanyInfo/CompanyInfo";
import {Contact} from "../Contact/Contact";
import {Introduction} from "../Introduction/Introduction";

const Home = () => (
  <div className={style.home}>
    <LandingPage />
    <Introduction />
    <CompanyInfo />
    <Contact />
  </div>
);

export {Home};

