import * as React from 'react';
import { Link } from 'react-router-dom';

import { Icon } from '../../Icon/Icon';
import { Paper } from '../../Paper/Paper';

import { appContext } from '../../../context/AppProvider';
import { history } from '../../../history';
import { ProductRoute } from '../../Product/ProductContent';
import * as headerStyle from '../style.scss';
import * as style from './style.scss';

export const PRODUCTS_ITEMS = [
  { display: 'Tabliczki znamionowe', href: ProductRoute.TABLICZKI_ZNAMIONOWE },
  { display: 'Tabliczki firmowe', href: ProductRoute.TABLICZKI_FIRMOWE },
  { display: 'Tabliczki fabryczne', href: ProductRoute.TABLICZKI_FABRYCZNE },
  { display: 'Panele sterownicze', href: ProductRoute.PANELE_STEROWNICZE },
  { display: 'Tablice czołowe maszyn', href: ProductRoute.TABLICE_CZOLOWE_MASZYN },
  { display: 'Skale, liniały, schematy', href: ProductRoute.SKALE_LINIALY_SCHEMATY },
  { display: 'Tabliczki różnego typu', href: ProductRoute.TABLICZKI_ROZNE },
  { display: 'Tablice informacyjne', href: ProductRoute.TABLICE_INFORMACYJNE },
  { display: 'Wywieszki i etykiety', href: ProductRoute.WYWIESZKI_ETYKIETY },
  { display: 'Numeratory', href: ProductRoute.NUMERATORY }
];

const ProductNavList = () => {
  const app = React.useContext(appContext);

  const renderHeader = () => (
    <header className={style.header}>
      <Icon
        name='arrow-back-outline'
        onClick={() => app.setValue({ isSidebarShown: false })}
        className={`${headerStyle.productNavIcon} ${style.navIcon}`}
      />
    </header>
  );

  const renderList = (heading, items) => (
    <ul className={style.productList}>
      {items.map((item, key) => (
        <li key={key}>
          <Link
            to={`/produkty/${item.href}`}
            className={`${history.location.pathname === '/produkty/' + item.href ? style.active : ''}`}
          >
            <Icon name='corner-down-right' className={style.icon} />
            {item.display}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <Paper depth={5} className={`${style.container} ${app.isSidebarShown ? style.show : ''}`}>
      {renderHeader()}
      <nav className={style.productListNav}>{renderList('Produkty', PRODUCTS_ITEMS)}</nav>
    </Paper>
  );
};

export { ProductNavList };
