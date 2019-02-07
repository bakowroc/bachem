import {h} from 'preact';
import { Link } from 'preact-router/Match';

import * as style from './style.scss';
import {PRODUCTS_ITEMS} from "../ProductNavList/ProductNavList";

const COMPANY_ITEMS = [
  {display: 'O nas', href: 'o-nas'},
  {display: 'Wspolpraca', href: 'wspolpraca'},
  {display: 'Kontakt', href: 'kontakt'},
  {display: 'Kariera', href: 'kariera'}
];

export const Footer = () => {
  const renderFastNav = (items, heading, routePrefix = '') => (
    <nav className={style.fastNav}>
      <ul className={style.fastNavList}>
        <h5 className={style.heading}>{heading}</h5>
        {items.map(item => <li><Link activeClassName={''} href={`${routePrefix}/${item.href}`}>{item.display}</Link></li>)}
      </ul>
    </nav>
  );

  return (
    <div className={style.container}>
      <footer className={style.footer}>
        <div className={style.infoBox}>{renderFastNav(PRODUCTS_ITEMS, 'Produkty', 'produkty')}</div>
        <div className={style.infoBox}>{renderFastNav(COMPANY_ITEMS, 'Firma')}</div>
      </footer>
      {/*<div className={style.copyright}>*/}
        {/*© Copyright. All rights reserved.*/}
        {/*<div className={style.text}>bachem</div>*/}
      {/*</div>*/}
    </div>
  )
};