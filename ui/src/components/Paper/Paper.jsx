import {Component, h} from 'preact';
import * as style from './style.scss';

export class Paper extends Component {
  render({className= '', children, depth, round = 0}) {
    const depthClass = `paper-${depth}`;

    return(
      <div className={`${style[depthClass]} ${className}`} style={{borderRadius: `${round}px`}}>
        {children}
      </div>
    );
  }
}