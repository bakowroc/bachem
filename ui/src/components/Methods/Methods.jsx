import {Component, h} from 'preact';

import {Tabs} from "../Tabs/Tabs";
import {SingleMethod} from "./SingleMethod";

import * as style from './style.scss';
import {AnodizingData, DigestionData, EngravingData, LaserData, ScreenPrintingData} from "./MethodsContent";

export class Methods extends Component {
  tabsBody = {
    tabs: [
      "Anodowanie",
      "Sitodruk",
      "Trawienie",
      "Grawerowanie",
      "Ciecie laserem"
    ],
    content: [
      <SingleMethod data={AnodizingData}/>,
      <SingleMethod data={ScreenPrintingData}/>,
      <SingleMethod data={DigestionData}/>,
      <SingleMethod data={EngravingData}/>,
      <SingleMethod data={LaserData}/>,
    ]
  };


  render({}, {}, {}) {
    return (
      <div className={style.container}>
        <section className={style.methods}>
          <header className={style.header}>
            <h1 className={style.heading}>Metody wykonania</h1>
          </header>
          <Tabs body={this.tabsBody} active={this.props.method}/>
        </section>
      </div>
    );
  }
}