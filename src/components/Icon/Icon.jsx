import {h} from 'preact';
import * as eva from 'eva-icons';

export const Icon = ({name, className = '', onClick = null}) => {
  const getSvg = () => {
    try {
      return eva.icons[name];
    } catch(err) {
      return eva.icons['github'];
    }
  };

  const {attrs, contents} = getSvg();
  return (
   <i className={className} onClick={onClick}>
     <svg {...attrs} dangerouslySetInnerHTML={{__html: contents}} />
   </i>
  );
};