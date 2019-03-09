import {Component, h} from "preact";
import * as style from "./style.scss";
import {Icon} from "../Icon/Icon";
import {Paper} from "../Paper/Paper";

export class GalleryPopup extends Component {
 state = {
   selected: {
     src: "",
     key: -1
   }
 };

  componentDidUpdate(nextProps) {
    if(this.props.data.selected.key !== nextProps.data.selected.key) {
      this.setState({selected: this.props.data.selected});
    }
  }

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
    this.setState({selected: {...this.props.data.photos[key], key}});
  };

  render({isShown, onClose, data}, {selected}, {}) {
    return (
      <div className={`${style.popup} ${isShown ? style.show : ''}`}>
        <div className={style.content}>
          {selected.key > 0 &&
          <Icon className={`${style.arrow} ${style.back}`} name="arrow-back-outline" onClick={() => this.navigate('b')}/>
          }
          <Paper depth={3} round={2} className={style.img}>
            <img src={selected.src} />
          </Paper>
          {selected.key < data.photos.length - 1 &&
          <Icon className={`${style.arrow} ${style.forward}`} name="arrow-forward-outline" onClick={() => this.navigate('f')}/>}
        </div>
        <div className={style.blockLayer} onClick={onClose} />
      </div>
    );
  }
}