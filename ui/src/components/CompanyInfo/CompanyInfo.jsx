import {h} from 'preact';

import {Paper} from "../Paper/Paper";
import {Button} from "../Button/Button";
import * as style from './style.scss';
import {Icon} from "../Icon/Icon";

export const CompanyInfo = () => {

  const renderBasicTerms = () => (
    <nav className={style.content}>
      <ul className={style.contentList}>
        <li className={style.contentListItem}>
          <Icon name="credit-card-outline" className={style.contentListIcon}/>
          Korzystne ceny
        </li>
        <li className={style.contentListItem}>
          <Icon name="clock-outline" className={style.contentListIcon}/>
          Krótkie terminy
        </li>
        <li className={style.contentListItem}>
          <Icon name="checkmark-outline" className={style.contentListIcon}/>
          Profesjonalne podejscie
        </li>
        <li className={style.contentListItem}>
          <Icon name="menu-2-outline" className={style.contentListIcon}/>
          Różnorodna oferta
        </li>
      </ul>
    </nav>
  );

  const renderMethods = () => (
    <nav className={style.content}>
      <ul className={style.contentList}>
        <li className={style.contentListItem}>
          <Icon name="arrow-forward-outline" className={style.contentListIcon}/>
          Anodowanie
        </li>
        <li className={style.contentListItem}>
          <Icon name="arrow-forward-outline" className={style.contentListIcon}/>
          Trawienie
        </li>
        <li className={style.contentListItem}>
          <Icon name="arrow-forward-outline" className={style.contentListIcon}/>
          Grawerowanie
        </li>
        <li className={style.contentListItem}>
          <Icon name="arrow-forward-outline" className={style.contentListIcon}/>
          Ciecie laserem
        </li>
      </ul>
    </nav>
  );

  const renderTransport = () => (
    <nav className={style.content}>
      <ul className={style.contentList}>
        <li className={style.contentListItem}>
          <Icon name="checkmark-outline" className={style.contentListIcon}/>
          Spedycja
        </li>
        <li className={style.contentListItem}>
          <Icon name="checkmark-outline" className={style.contentListIcon}/>
          Poczta
        </li>
        <li className={style.contentListItem}>
          <Icon name="checkmark-outline" className={style.contentListIcon}/>
         Dowoz osobisty
        </li>
      </ul>
    </nav>
  );

  const renderTransportSubinfo = () => (
    <div className={style.subinfo}>
       Od zamowien powyzej 500 zl oraz w obrebie Wroclawia dostawa gratis.
    </div>
  );

  return (
    <div className={style.container}>
      <article className={style.companyInfo}>
        <Paper depth={3} round={2} className={style.infoBox}>
          {renderBasicTerms()}
          <Button className={style.button} onClick={null} text="Zloz zamowienie"/>
        </Paper>
        <Paper depth={3} round={2} className={style.infoBox}>
          {renderMethods()}
          <Button className={style.button} onClick={null} outline={true} text="Szczegoly"/>
        </Paper>
        <Paper depth={3} round={2} className={style.infoBox}>
          {renderTransport()}
          {renderTransportSubinfo()}
          <Button className={style.button} onClick={null} outline={true} text="Szczegoly"/>
        </Paper>
      </article>
    </div>
  );
};