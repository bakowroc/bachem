import {Component, h} from 'preact';

import {Gallery} from "../Gallery/Gallery";
import {Icon} from "../Icon/Icon";
import {Tabs} from "../Tabs/Tabs";
import {AnodizingData, DigestionData, EngravingData, LaserData, ScreenPrintingData} from "./MethodsContent";

import * as globalStyle from '../../styles/global.scss';
import * as style from './style.scss';

export class Methods extends Component {
  constructor(props) {
    super(props);
    this.tabsBody = {
      tabs: [
        "Anodowanie",
        "Sitodruk",
        "Trawienie",
        "Grawerowanie",
        "Ciecie laserem"
      ],
      content: [
        this.renderSingleMethod(AnodizingData),
        this.renderSingleMethod(ScreenPrintingData),
        this.renderSingleMethod(DigestionData),
        this.renderSingleMethod(EngravingData),
        this.renderSingleMethod(LaserData)
      ]
    };

  }


  renderFeatures = (features) => (
    <div className={style.features}>
      <ul className={style.featuresList}>
        {features.pos.map(feature =>
          <li className={style.feature}>
            <Icon className={style.featureIcon} name="checkmark-outline" />
            {feature}
          </li> )}
      </ul>
    </div>
  );

  renderSingleMethod = (data) => (
    <div className={style.method}>
      <article className={style.methodInfo}>
        {data.description.map(paragraph => <p>{paragraph}</p>)}
        {this.renderFeatures(data.features)}
      </article>
      <Gallery className={style.gallery} photos={data.photos} onPopupShow={this.props.onGalleryPopupShow} />
    </div>
  );


  render({}, {}, {}) {
    return (
      <div className={style.container}>
        <section className={style.methods}>
          <header className={style.header}>
            <h1 className={globalStyle.pageHeading}>Metody wykonania</h1>
          </header>
          <Tabs body={this.tabsBody} active={this.props.method}/>
        </section>
      </div>
    );
  }
}