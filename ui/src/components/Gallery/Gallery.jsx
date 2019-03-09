import {Component, h} from 'preact';
import {Paper} from "../Paper/Paper";

import * as style from './style.scss';
import {Icon} from "../Icon/Icon";

export class Gallery extends Component {
  onPreview = (photo, key) => this.props.onPopupShow({...photo, key}, this.props.photos);

  render({className, photos}, {}, {}) {
    return (
     <section className={style.gallery}>
       <div className={`${style.photos} ${className}`}>
         {photos.map((photo, key) => (
           <Paper depth={1} round={2} className={style.photo}>
             <img onClick={() => this.onPreview(photo, key)} src={photo.src} />
           </Paper>)
         )}
       </div>
     </section>
    );
  }
}