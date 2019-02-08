import {h, Component} from 'preact';
import { Link } from 'preact-router/Match';

import {Paper} from "../Paper/Paper";
import {Icon} from "../Icon/Icon";

import * as headerStyle from '../Header/style.scss';
import * as style from './style.scss';
import {ProductRoute} from "../Product/ProductContent";

export const PRODUCTS_ITEMS = [
  {display: 'Tabliczki znamionowe', href: ProductRoute.TABLICZKI_ZNAMIONOWE},
  {display: 'Tabliczki firmowe', href: ProductRoute.TABLICZKI_FIRMOWE},
  {display: 'Tabliczki fabryczne', href: ProductRoute.TABLICZKI_FABRYCZNE},
  {display: 'Panele sterownicze', href: ProductRoute.PANELE_STEROWNICZE},
  {display: 'Tablice czołowe maszyn', href: ProductRoute.TABLICE_CZOLOWE_MASZYN},
  {display: 'Skale, liniały, schematy', href: ProductRoute.SKALE_LINIALY_SCHEMATY},
  {display: 'Tabliczki różnego typu', href: ProductRoute.TABLICZKI_ROZNE},
  {display: 'Tablice informacyjne', href: ProductRoute.TABLICE_INFORMACYJNE},
  {display: 'Wywieszki i etykiety', href: ProductRoute.WYWIESZKI_ETYKIETY},
  {display: 'Numeratory', href: ProductRoute.NUMERATORY}
];

export class ProductNavList extends Component {
  renderHeader = (onClose) => (
    <header className={style.header}>
      <Icon name="arrow-back-outline" onClick={onClose} className={`${headerStyle.productNavIcon} ${style.navIcon}`}/>
    </header>
  );

  renderList = (heading, items) => (
    <ul className={style.productList}>
      {items.map(item =>
        <li>
          <Link activeClassName={style.active} href={`/produkty/${item.href}`}>
            <Icon name="arrow-forward-outline" className={style.icon}/>
            {item.display}
          </Link>
        </li>
      )}
    </ul>
  );

  render({isShown, onClose, isLocked}, {}, {}) {
    return(
      <Paper depth={5} className={`${style.container} ${isShown ? style.show : ''}`}>
        {this.renderHeader(onClose)}
        <nav className={style.productListNav}>
          {this.renderList("Produkty", PRODUCTS_ITEMS)}
        </nav>
      </Paper>
    )
  }
}
