import * as React from 'react';
import { Link } from 'react-router-dom';

import * as style from './style.scss';

const COMPANY_ITEMS = [
  { display: 'O nas', href: 'o-nas' },
  { display: 'Wspolpraca', href: 'wspolpraca' },
  { display: 'Kontakt', href: 'kontakt' },
  { display: 'Kariera', href: 'kariera' },
  { display: 'Klienci', href: 'klienci' },
  { display: 'Staze', href: 'staze' }
];

const Footer = () => {
  const renderFastNav = (items, heading, routePrefix = '') => (
    <nav className={style.fastNav}>
      <ul className={style.fastNavList}>
        <h5 className={style.heading}>{heading}</h5>
        {items.map((item, key) => (
          <li key={key}>
            <Link to={`${routePrefix}/${item.href}`}>{item.display}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );

  return (
    <div className={style.container}>
      <footer className={style.footer}>
        <div className={style.infoBox}>{renderFastNav(COMPANY_ITEMS, 'Firma')}</div>
        {/*<div className={style.infoBox}>{renderFastNav(PRODUCTS_ITEMS, 'Produkty', 'produkty')}</div>*/}
      </footer>
      <div className={style.copyright}>Copyright © bachem 2019. All rights reserved.</div>
    </div>
  );
};

export { Footer };
