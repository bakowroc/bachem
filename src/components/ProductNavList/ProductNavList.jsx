import {h, Component} from 'preact';
import { Link } from 'preact-router/Match';

import {Paper} from "../Paper/Paper";
import {Button} from "../Button/Button";
import {Icon} from "../Icon/Icon";

import * as headerStyle from '../Header/style.scss';
import * as style from './style.scss';

export const PRODUCTS_ITEMS = [
  {display: 'Tabliczki znamionowe', href: "tabliczki-znamionowe"},
  {display: 'Tabliczki firmowe', href: "tabliczki-firmowe"},
  {display: 'Tabliczki fabryczne', href: "tabliczki-fabryczne"},
  {display: 'Panele sterownicze', href: "panele-sterownicze"},
  {display: 'Tablice czołowe maszyn', href: "tablice-czolowe-maszyn"},
  {display: 'Skale, liniały, schematy', href: "skale-linialy-schematy"},
  {display: 'Tabliczki różnego typu', href: "tabliczki-rozne"},
  {display: 'Tablice informacyjne', href: "tablice-informacyjne"},
  {display: 'Wywieszki i etykiety', href: "wyeiszki-i-etykiety"},
  {display: 'Numeratory', href: "numeratory"},
];

export class ProductNavList extends Component {
  renderHeader = (onClose) => (
    <header className={style.header}>
      <Icon name="close-outline" onClick={onClose} className={headerStyle.productNavIcon}/>
    </header>
  );

  renderList = (heading, items) => (
    <ul className={style.productList}>
      <h2>{heading}</h2>
      {items.map(item => <li><Link activeClassName={style.active} href={`/${item.href}`}>{item.display}</Link></li>)}
    </ul>
  );

  render({isShown, onClose}, {}, {}){
    return(
      <Paper depth={5} className={`${style.container} ${isShown ? style.show : ''}`}>
        {this.renderHeader(onClose)}
        <nav className={style.productListNav}>
          {this.renderList("Produkty", PRODUCTS_ITEMS)}
          <Button onClick={null} text="Pelna oferta" className={style.button}/>
        </nav>
      </Paper>
    )
  }
}
