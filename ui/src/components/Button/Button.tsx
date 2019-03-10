import * as React from 'react';
import {history} from '../../history';

import * as style from './style.scss';

interface ButtonProps {
  onClick?: (e: any) => void;
  text: string | JSX.Element | number;
  outline?: boolean;
  href?: string;
  className?: string;
}

const Button = ({onClick = undefined, text, outline = false, href = undefined, className = ''}: ButtonProps) => {
  const getOnClickAction = () => {
   if(href !== undefined) {
     return () => history.push(href)
   }

   return onClick;
  };

  return (
   <button onClick={getOnClickAction()} className={`${style.button} ${className} ${outline ? style.outline: ''}`}>
     {text}
   </button>
  )
};

export {Button};
