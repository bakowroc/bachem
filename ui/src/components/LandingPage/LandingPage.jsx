import {h} from 'preact';


import * as lorem from 'lorem-ipsum';
import {LandingPageBackground} from "./LandingPageBackground/LandingPageBackground";
import {Button} from "../Button/Button";
import {PlatesMock} from "./PlatesMock/PlatesMock";

import * as style from './style.scss';
import {PlatesMockAlt} from "./PlatesMockAlt/PlatesMockAlt";

const company = {
  name: "bachem",
  slogan: "Tabliczki znamionowe i firmowe.",
  brief: "Nasza siedziba znajduje sie we Wroclawiu. Wytwarzamy produkty dla klientow z calej Europy."
};

export const LandingPage = ({isScrolled}) => (
  <div className={style.container}>
    <LandingPageBackground isScrolled={isScrolled}/>
    <main className={style.landingPage}>
      <div className={style.companyHeading}>
        <h1 className={style.companyName}>{company.name}</h1>
        <h1 className={style.companySlogan}>{company.slogan}</h1>
        <article className={style.companyBrief}>{company.brief}</article>
        <Button onClick={null} className={style.moreButton} text="Zobacz oferte"/>
      </div>
      <PlatesMock/>
      {/*<PlatesMockAlt isScrolled={isScrolled}/>*/}
    </main>
  </div>
);