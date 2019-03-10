import * as React from 'react';

import {LandingPageBackground} from "./LandingPageBackground/LandingPageBackground";
import {Button} from "../Button/Button";
import {PlatesMock} from "./PlatesMock/PlatesMock";

import * as style from './style.scss';

const company = {
  name: "bachem",
  slogan: "Tabliczki znamionowe i firmowe.",
  brief: "Nasza siedziba znajduje sie we Wroclawiu. Wytwarzamy produkty dla klientow z calej Europy."
};

const LandingPage = () => (
  <div className={style.container} id="home">
    <LandingPageBackground />
    <main className={style.landingPage}>
      <div className={style.companyHeading}>
        <h1 className={style.companyName}>{company.name}</h1>
        <h1 className={style.companySlogan}>{company.slogan}</h1>
        <article className={style.companyBrief}>{company.brief}</article>
        <Button className={style.moreButton} text="Zobacz oferte"/>
      </div>
      <PlatesMock/>
    </main>
  </div>
);

export {LandingPage};