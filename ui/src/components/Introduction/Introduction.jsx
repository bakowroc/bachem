import {h} from 'preact';

import {Icon} from "../Icon/Icon";

import * as globalStyle from '../../styles/global.scss';
import * as style from './style.scss';

export const Introduction = () => {
  return (
    <div className={style.container}>
      <article className={style.introduction}>
        <h3 className={globalStyle.pageHeading}>Poznaj nas</h3>
        <div className={style.boxes}>
          <div className={style.box}>
            <div className={style.circle}>
              <Icon className={style.icon} name="edit-2" />
            </div>
            <h3 className={style.title}>Zamowienie</h3>
            <p className={style.p}>Wysylasz zapytanie mailem albo za pomoca naszego formularza.</p>
          </div>

          <div className={style.box}>
            <div className={style.circle}>
              <Icon className={style.icon} name="attach" />
            </div>
            <h3 className={style.title}>Wycena</h3>
            <p className={style.p}>Otrzymasz projekt, wycene oraz kilka dodatkowych opcji.</p>
          </div>

          <div className={style.box}>
            <div className={style.circle}>
              <Icon className={style.icon} name="layers" />
            </div>
            <h3 className={style.title}>Produkcja</h3>
            <p className={style.p}>Kazdy etap produkcji przebiega jest zgodnie z projektem.</p>
          </div>

          <div className={style.box}>
            <div className={style.circle}>
              <Icon className={style.icon} name="car" />
            </div>
            <h3 className={style.title}>Wysylka</h3>
            <p className={style.p}>Gotowy produkt otrzymujesz w zaledwie kilka dni roboczych.</p>
          </div>
        </div>
      </article>
    </div>
  );
};