import {Component, h} from 'preact';
import {Paper} from "../Paper/Paper";

import * as style from './style.scss';
import {Icon} from "../Icon/Icon";

export class Gallery extends Component {
  state = {
    selected: {
      key: 0,
      src: ''
    },
    isPopupShown: false
  };

  navigate = (direction) => {
  let key = this.state.selected.key;
  switch(direction) {
    case 'f':
      ++key;
      break;

    case 'b':
      --key;
      break;
   }
  this.setState({selected: {...this.props.photos[key], key}});
};

  togglePopup = () => this.setState(state => ({isPopupShown: !state.isPopupShown}));

  renderPopup = () => (
    <div className={`${style.popup} ${this.state.isPopupShown ? style.show : ''}`}>
      <div className={style.content}>
        {this.state.selected.key > 0 &&
          <Icon className={`${style.arrow} ${style.back}`} name="arrow-back-outline" onClick={() => this.navigate('b')}/>
        }
        <Paper depth={3} round={2} className={style.img}>
          <img src={this.state.selected.src} />
        </Paper>
        {this.state.selected.key < this.props.photos.length - 1 &&
          <Icon className={`${style.arrow} ${style.forward}`} name="arrow-forward-outline" onClick={() => this.navigate('f')}/>}
      </div>
      <div className={style.blockLayer} onClick={this.togglePopup} />
    </div>
  );

  onPreview = (photo, key) => this.setState({selected: {...photo, key}}, this.togglePopup);

  render({className, photos}, {selected, isPopupShown}, {}) {
    return (
     <section className={style.gallery}>
       {this.renderPopup()}
       <div className={`${style.photos} ${className}`}>
         {photos.map((photo, key) => <Paper depth={1} round={2} className={style.photo}><img onClick={() => this.onPreview(photo, key)} src={photo.src} /></Paper>)}
       </div>
     </section>
    );
  }
}